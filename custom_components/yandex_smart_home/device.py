"""Yandex Smart Home user device."""

from __future__ import annotations

import logging
import re
from typing import TYPE_CHECKING, Any

from homeassistant.components import (
    air_quality,
    automation,
    binary_sensor,
    button,
    camera,
    climate,
    cover,
    event,
    fan,
    group,
    humidifier,
    input_boolean,
    input_button,
    input_text,
    light,
    lock,
    media_player,
    remote,
    scene,
    script,
    sensor,
    switch,
    vacuum,
    valve,
    water_heater,
)
from homeassistant.components.binary_sensor import BinarySensorDeviceClass
from homeassistant.components.cover import CoverDeviceClass
from homeassistant.components.event import EventDeviceClass
from homeassistant.components.media_player import MediaPlayerDeviceClass
from homeassistant.components.sensor import SensorDeviceClass
from homeassistant.components.switch import SwitchDeviceClass
from homeassistant.const import (
    ATTR_DEVICE_CLASS,
    CLOUD_NEVER_EXPOSED_ENTITIES,
    CONF_DEVICE_CLASS,
    CONF_NAME,
    CONF_ROOM,
    CONF_STATE_TEMPLATE,
    CONF_TYPE,
    STATE_UNAVAILABLE,
    STATE_UNKNOWN,
)
from homeassistant.core import Context, HomeAssistant, State, callback
from homeassistant.helpers.area_registry import AreaEntry
from homeassistant.helpers.entity_registry import RegistryEntry
from homeassistant.helpers.template import Template

from custom_components.yandex_smart_home.const import (
    CONF_BACKLIGHT_ENTITY_ID,
    CONF_ENTITY_CUSTOM_MODES,
    CONF_ENTITY_CUSTOM_RANGES,
    CONF_ENTITY_CUSTOM_TOGGLES,
    CONF_ENTITY_PROPERTIES,
    CONF_ERROR_CODE_TEMPLATE,
)

from . import (  # noqa: F401
    capability_color,
    capability_custom,
    capability_mode,
    capability_onoff,
    capability_range,
    capability_toggle,
    capability_video,
    property_custom,
    property_event,
    property_float,
)
from .capability import STATE_CAPABILITIES_REGISTRY, Capability, DummyCapability, StateCapability
from .capability_custom import get_custom_capability
from .capability_toggle import BacklightCapability
from .helpers import ActionNotAllowed, APIError, _get_registry_entries
from .property import STATE_PROPERTIES_REGISTRY, Property, StateProperty
from .property_custom import get_custom_property, get_event_platform_custom_property_type
from .schema import (
    CapabilityDescription,
    CapabilityInstanceAction,
    CapabilityInstanceActionResultValue,
    CapabilityInstanceState,
    CapabilityType,
    DeviceDescription,
    DeviceInfo,
    DeviceState,
    DeviceType,
    OnOffCapabilityInstance,
    PropertyDescription,
    PropertyInstanceState,
    ResponseCode,
)

if TYPE_CHECKING:
    from .entry_data import ConfigEntryData

_LOGGER = logging.getLogger(__name__)

_DOMAIN_TO_DEVICE_TYPES: dict[str, DeviceType] = {
    air_quality.DOMAIN: DeviceType.SENSOR,
    automation.DOMAIN: DeviceType.OTHER,
    binary_sensor.DOMAIN: DeviceType.SENSOR,
    button.DOMAIN: DeviceType.OTHER,
    camera.DOMAIN: DeviceType.CAMERA,
    climate.DOMAIN: DeviceType.THERMOSTAT,
    cover.DOMAIN: DeviceType.OPENABLE,
    event.DOMAIN: DeviceType.SENSOR,
    fan.DOMAIN: DeviceType.VENTILATION_FAN,
    group.DOMAIN: DeviceType.SWITCH,
    humidifier.DOMAIN: DeviceType.HUMIDIFIER,
    input_boolean.DOMAIN: DeviceType.SWITCH,
    input_button.DOMAIN: DeviceType.OTHER,
    input_text.DOMAIN: DeviceType.SENSOR,
    light.DOMAIN: DeviceType.LIGHT,
    lock.DOMAIN: DeviceType.OPENABLE,
    media_player.DOMAIN: DeviceType.MEDIA_DEVICE,
    remote.DOMAIN: DeviceType.SWITCH,
    scene.DOMAIN: DeviceType.OTHER,
    script.DOMAIN: DeviceType.OTHER,
    sensor.DOMAIN: DeviceType.SENSOR,
    switch.DOMAIN: DeviceType.SWITCH,
    vacuum.DOMAIN: DeviceType.VACUUM_CLEANER,
    valve.DOMAIN: DeviceType.OPENABLE_VALVE,
    water_heater.DOMAIN: DeviceType.KETTLE,
}

_DEVICE_CLASS_TO_DEVICE_TYPES: dict[tuple[str, str], DeviceType] = {
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.DOOR): DeviceType.SENSOR_OPEN,
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.GARAGE_DOOR): DeviceType.SENSOR_OPEN,
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.GAS): DeviceType.SENSOR_GAS,
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.MOISTURE): DeviceType.SENSOR_WATER_LEAK,
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.MOTION): DeviceType.SENSOR_MOTION,
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.MOVING): DeviceType.SENSOR_MOTION,
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.OCCUPANCY): DeviceType.SENSOR_MOTION,
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.OPENING): DeviceType.SENSOR_OPEN,
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.PRESENCE): DeviceType.SENSOR_MOTION,
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.SMOKE): DeviceType.SENSOR_SMOKE,
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.VIBRATION): DeviceType.SENSOR_VIBRATION,
    (binary_sensor.DOMAIN, BinarySensorDeviceClass.WINDOW): DeviceType.SENSOR_OPEN,
    (cover.DOMAIN, CoverDeviceClass.CURTAIN): DeviceType.OPENABLE_CURTAIN,
    (media_player.DOMAIN, MediaPlayerDeviceClass.RECEIVER): DeviceType.MEDIA_DEVICE_RECIEVER,
    (media_player.DOMAIN, MediaPlayerDeviceClass.TV): DeviceType.MEDIA_DEVICE_TV,
    (sensor.DOMAIN, EventDeviceClass.BUTTON): DeviceType.SENSOR_BUTTON,
    (sensor.DOMAIN, SensorDeviceClass.CO): DeviceType.SENSOR_CLIMATE,
    (sensor.DOMAIN, SensorDeviceClass.CO2): DeviceType.SENSOR_CLIMATE,
    (sensor.DOMAIN, SensorDeviceClass.ENERGY): DeviceType.SMART_METER_ELECTRICITY,
    (sensor.DOMAIN, SensorDeviceClass.GAS): DeviceType.SMART_METER_GAS,
    (sensor.DOMAIN, SensorDeviceClass.HUMIDITY): DeviceType.SENSOR_CLIMATE,
    (sensor.DOMAIN, SensorDeviceClass.ILLUMINANCE): DeviceType.SENSOR_ILLUMINATION,
    (sensor.DOMAIN, SensorDeviceClass.PM1): DeviceType.SENSOR_CLIMATE,
    (sensor.DOMAIN, SensorDeviceClass.PM10): DeviceType.SENSOR_CLIMATE,
    (sensor.DOMAIN, SensorDeviceClass.PM25): DeviceType.SENSOR_CLIMATE,
    (sensor.DOMAIN, SensorDeviceClass.PRESSURE): DeviceType.SENSOR_CLIMATE,
    (sensor.DOMAIN, SensorDeviceClass.TEMPERATURE): DeviceType.SENSOR_CLIMATE,
    (sensor.DOMAIN, SensorDeviceClass.VOLATILE_ORGANIC_COMPOUNDS): DeviceType.SENSOR_CLIMATE,
    (sensor.DOMAIN, SensorDeviceClass.WATER): DeviceType.SMART_METER_COLD_WATER,
    (switch.DOMAIN, SwitchDeviceClass.OUTLET): DeviceType.SOCKET,
    (event.DOMAIN, EventDeviceClass.BUTTON): DeviceType.SENSOR_BUTTON,
    (event.DOMAIN, EventDeviceClass.DOORBELL): DeviceType.SENSOR_BUTTON,
    (event.DOMAIN, EventDeviceClass.MOTION): DeviceType.SENSOR_MOTION,
}

type DeviceId = str


class Device:
    """Represent user device."""

    __slots__ = ("_hass", "_entry_data", "_state", "_config", "id")

    id: str

    def __init__(self, hass: HomeAssistant, entry_data: ConfigEntryData, device_id: str, state: State | None):
        """Initialize a device for the state."""
        self.id = device_id

        self._hass = hass
        self._entry_data = entry_data
        self._state = state or State(entity_id=device_id, state=STATE_UNAVAILABLE)
        self._config = self._entry_data.get_entity_config(self.id)

    @callback
    def get_capabilities(self) -> list[Capability[Any]]:
        """Return all capabilities of the device."""
        capabilities: list[Capability[Any]] = []
        disabled_capabilities: list[Capability[Any]] = []

        def _append_capabilities(_capability: Capability[Any]) -> None:
            if _capability.supported and _capability not in capabilities and _capability not in disabled_capabilities:
                capabilities.append(_capability)

        if (state_template := self._config.get(CONF_STATE_TEMPLATE)) is not None:
            capabilities.append(
                get_custom_capability(
                    self._hass,
                    self._entry_data,
                    {CONF_STATE_TEMPLATE: state_template},
                    CapabilityType.ON_OFF,
                    OnOffCapabilityInstance.ON,
                    self.id,
                )
            )

        for capability_type, config_key in (
            (CapabilityType.MODE, CONF_ENTITY_CUSTOM_MODES),
            (CapabilityType.TOGGLE, CONF_ENTITY_CUSTOM_TOGGLES),
            (CapabilityType.RANGE, CONF_ENTITY_CUSTOM_RANGES),
        ):
            if config_key in self._config:
                for instance in self._config[config_key]:
                    capability_config = self._config[config_key][instance]
                    match capability_config:
                        case False:
                            disabled_capabilities.append(
                                DummyCapability(self._hass, self._entry_data, capability_type, instance, self.id)
                            )
                        case dict():
                            custom_capability = get_custom_capability(
                                self._hass,
                                self._entry_data,
                                capability_config,
                                capability_type,
                                instance,
                                self.id,
                            )

                            _append_capabilities(custom_capability)

        for CapabilityT in STATE_CAPABILITIES_REGISTRY:
            state_capability = CapabilityT(self._hass, self._entry_data, self.id, self._state)
            _append_capabilities(state_capability)

        if backlight_entity_id := self._config.get(CONF_BACKLIGHT_ENTITY_ID):
            backlight_state = self._hass.states.get(backlight_entity_id)
            if backlight_state and backlight_entity_id != self.id:
                backlight_device = Device(self._hass, self._entry_data, backlight_state.entity_id, backlight_state)
                for capability in backlight_device.get_capabilities():
                    if capability.type != CapabilityType.ON_OFF:
                        _append_capabilities(capability)

                backlight_capability = BacklightCapability(self._hass, self._entry_data, self.id, backlight_state)
                _append_capabilities(backlight_capability)

        return capabilities

    @callback
    def get_state_capabilities(self) -> list[StateCapability[Any]]:
        """Return capabilities of the device based on the state."""
        return [c for c in self.get_capabilities() if isinstance(c, StateCapability)]

    @callback
    def get_properties(self) -> list[Property]:
        """Return all properties for the device."""
        properties: list[Property] = []

        for property_config in self._config.get(CONF_ENTITY_PROPERTIES, []):
            try:
                custom_property = get_custom_property(self._hass, self._entry_data, property_config, self.id)
            except APIError as e:
                _LOGGER.error(e)
                continue

            if custom_property and custom_property.supported and custom_property not in properties:
                properties.append(custom_property)
                continue

            if event_platform_property_type := get_event_platform_custom_property_type(property_config):
                event_platform_property = event_platform_property_type(
                    self._hass, self._entry_data, self.id, State(self.id, STATE_UNKNOWN)
                )
                if event_platform_property.supported and event_platform_property not in properties:
                    properties.append(event_platform_property)

        for PropertyT in STATE_PROPERTIES_REGISTRY:
            device_property = PropertyT(self._hass, self._entry_data, self.id, self._state)
            if device_property.supported and device_property not in properties:
                properties.append(device_property)

        return properties

    @callback
    def get_state_properties(self) -> list[StateProperty]:
        """Return properties for the device based on the state."""
        return [p for p in self.get_properties() if isinstance(p, StateProperty)]

    @property
    def should_expose(self) -> bool:
        """Test if the device should be exposed."""
        if self.unavailable:
            return False

        if not self.type:
            return False

        if self.id in CLOUD_NEVER_EXPOSED_ENTITIES:
            return False

        return self._entry_data.should_expose(self.id)

    @property
    @callback
    def unavailable(self) -> bool:
        """Test if the device is unavailable."""
        state_template: Template | None
        if (state_template := self._config.get(CONF_STATE_TEMPLATE)) is not None:
            return bool(state_template.async_render() == STATE_UNAVAILABLE)

        return self._state.state == STATE_UNAVAILABLE

    @property
    def type(self) -> DeviceType | None:
        """Return device type."""
        if user_type := self._config.get(CONF_TYPE):
            return DeviceType(user_type)

        domain = self._state.domain
        device_class: str = self._config.get(CONF_DEVICE_CLASS, self._state.attributes.get(ATTR_DEVICE_CLASS, ""))

        return _DEVICE_CLASS_TO_DEVICE_TYPES.get((domain, device_class), _DOMAIN_TO_DEVICE_TYPES.get(domain))

    async def describe(self) -> DeviceDescription | None:
        """Return description of the device."""
        capabilities: list[CapabilityDescription] = []
        for c in self.get_capabilities():
            if c_description := c.get_description():
                capabilities.append(c_description)

        properties: list[PropertyDescription] = []
        for p in self.get_properties():
            if p_description := p.get_description():
                properties.append(p_description)

        if not capabilities and not properties:
            return None

        entity_entry, device_entry, area_entry = _get_registry_entries(self._hass, self.id)
        device_info = DeviceInfo(model=self.id)
        if device_entry is not None:
            if device_entry.model:
                device_model = f"{device_entry.model} | {self.id}"
            else:
                device_model = self.id

            device_info = DeviceInfo(
                manufacturer=device_entry.manufacturer,
                model=device_model,
                sw_version=device_entry.sw_version,
            )

        if (room := self._get_room(area_entry)) is not None:
            room = room.strip()

        assert self.type
        return DeviceDescription(
            id=self.id,
            name=self._get_name(entity_entry).strip(),
            room=room,
            type=self.type,
            capabilities=capabilities or None,
            properties=properties or None,
            device_info=device_info,
        )

    @callback
    def query(self) -> DeviceState:
        """Return state of the device."""
        check_availability = True

        if self.unavailable:
            return DeviceState(id=self.id, error_code=ResponseCode.DEVICE_UNREACHABLE)

        capabilities: list[CapabilityInstanceState] = []
        for c in self.get_capabilities():
            if c.retrievable:
                try:
                    if (capability_state := c.get_instance_state()) is not None:
                        capabilities.append(capability_state)
                except APIError as e:
                    _LOGGER.error(e)
            else:
                check_availability = False

        properties: list[PropertyInstanceState] = []
        for p in self.get_properties():
            if p.retrievable:
                try:
                    if (property_state := p.get_instance_state()) is not None:
                        properties.append(property_state)
                except APIError as e:
                    _LOGGER.error(e)
            else:
                check_availability = False

        if check_availability and not capabilities and not properties:
            return DeviceState(id=self.id, error_code=ResponseCode.DEVICE_UNREACHABLE)

        return DeviceState(
            id=self.id,
            capabilities=capabilities or None,
            properties=properties or None,
        )

    async def execute(
        self, context: Context, action: CapabilityInstanceAction
    ) -> CapabilityInstanceActionResultValue | None:
        """Execute an action to change capability state."""
        target_capability: Capability[Any] | None = None

        for capability in self.get_capabilities():
            if capability.type == action.type and capability.instance == action.state.instance:
                target_capability = capability
                break

        if not target_capability:
            raise APIError(
                ResponseCode.NOT_SUPPORTED_IN_CURRENT_MODE,
                f"Device {self.id} doesn't support instance {action.state.instance} of {action.type.short} capability",
            )

        if error_code_template := self._error_code_template:
            if error_code := error_code_template.async_render(
                capability=action.as_dict(), entity_id=self.id, parse_result=False
            ):
                try:
                    code = ResponseCode(error_code)
                except ValueError:
                    raise APIError(ResponseCode.INTERNAL_ERROR, f"Error code '{error_code}' is invalid for {self.id}")

                raise ActionNotAllowed(code)

        try:
            return await target_capability.set_instance_state(context, action.state)
        except (APIError, ActionNotAllowed):
            raise
        except Exception as e:
            raise APIError(ResponseCode.INTERNAL_ERROR, f"Failed to execute action for {target_capability}: {e!r}")

    def _get_name(self, entity_entry: RegistryEntry | None) -> str:
        """Return the device name."""
        if name := self._config.get(CONF_NAME):
            return str(name)

        if entity_entry:
            if alias := self._get_entry_alias(entity_entry.aliases):
                return alias

        return self._state.name or self.id

    def _get_room(self, area: AreaEntry | None) -> str | None:
        """Return room of the device."""
        if room := self._config.get(CONF_ROOM):
            return str(room)

        if area:
            if alias := self._get_entry_alias(area.aliases):
                return alias

            return area.name

        return None

    def _get_entry_alias(self, aliases: set[str] | None) -> str | None:
        """Return best matched entry alias."""
        filtered_aliases: set[str] = set()
        for alias in aliases or []:
            if "алиса:" in alias.lower():
                filtered_aliases.add(alias.split(":", 1)[1].strip())
            elif self._entry_data.use_entry_aliases and re.search(r"^[а-яё0-9 ]+$", alias, flags=re.IGNORECASE):
                filtered_aliases.add(alias)

        if not filtered_aliases:
            return None

        return sorted(filtered_aliases)[0]

    @property
    def _error_code_template(self) -> Template | None:
        """Prepare template for error code."""
        return self._config.get(CONF_ERROR_CODE_TEMPLATE)


async def async_get_devices(hass: HomeAssistant, entry_data: ConfigEntryData) -> list[Device]:
    """Return list of supported user devices."""
    devices: list[Device] = []

    for state in hass.states.async_all():
        device = Device(hass, entry_data, state.entity_id, state)
        if not device.should_expose:
            continue

        devices.append(device)

    return devices


async def async_get_device_description(hass: HomeAssistant, device: Device) -> DeviceDescription | None:
    """Return description for a user device."""
    if (description := await device.describe()) is not None:
        return description

    _LOGGER.debug(f"Missing capabilities and properties for {device.id}")
    return None


async def async_get_device_states(
    hass: HomeAssistant, entry_data: ConfigEntryData, device_ids: list[str]
) -> list[DeviceState]:
    """Return list of the states of user devices."""
    states: list[DeviceState] = []

    for device_id in device_ids:
        device = Device(hass, entry_data, device_id, hass.states.get(device_id))
        if not device.should_expose:
            _LOGGER.warning(
                f"State requested for unexposed entity {device.id}. Please either expose the entity via "
                f"filters in component configuration or delete the device from Yandex."
            )

        states.append(device.query())

    return states
