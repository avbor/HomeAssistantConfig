"""Implement the Yandex Smart Home on_off capability."""

from abc import ABC, abstractmethod
from typing import Protocol

from homeassistant.components import (
    automation,
    button,
    climate,
    cover,
    fan,
    group,
    humidifier,
    input_boolean,
    input_button,
    light,
    lock,
    media_player,
    remote,
    scene,
    script,
    switch,
    vacuum,
    valve,
    water_heater,
)
from homeassistant.components.climate import HVACMode
from homeassistant.components.media_player import MediaPlayerEntityFeature
from homeassistant.components.vacuum import VacuumEntityFeature
from homeassistant.components.water_heater import WaterHeaterEntityFeature
from homeassistant.const import (
    ATTR_ENTITY_ID,
    SERVICE_CLOSE_COVER,
    SERVICE_CLOSE_VALVE,
    SERVICE_LOCK,
    SERVICE_OPEN_COVER,
    SERVICE_OPEN_VALVE,
    SERVICE_TURN_OFF,
    SERVICE_TURN_ON,
    SERVICE_UNLOCK,
    STATE_OFF,
    STATE_ON,
    STATE_OPEN,
)
from homeassistant.core import DOMAIN as HA_DOMAIN, Context
from homeassistant.helpers.service import async_call_from_config

from .backports import LockState, VacuumActivity
from .capability import STATE_CAPABILITIES_REGISTRY, ActionOnlyCapabilityMixin, StateCapability
from .const import (
    CONF_FEATURES,
    CONF_STATE_UNKNOWN,
    CONF_TURN_OFF,
    CONF_TURN_ON,
    SKYKETTLE_MODE_BOIL,
    MediaPlayerFeature,
)
from .helpers import ActionNotAllowed, APIError
from .schema import (
    CapabilityType,
    OnOffCapabilityInstance,
    OnOffCapabilityInstanceActionState,
    OnOffCapabilityParameters,
    ResponseCode,
)


class OnOffCapability(StateCapability[OnOffCapabilityInstanceActionState], Protocol):
    """Base class for capabilitity to turn on and off a device.

    https://yandex.ru/dev/dialogs/alice/doc/smart-home/concepts/on_off-docpage/
    """

    type: CapabilityType = CapabilityType.ON_OFF
    instance: OnOffCapabilityInstance = OnOffCapabilityInstance.ON

    @abstractmethod
    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state (if wasn't overriden by the user)."""
        ...

    @property
    def retrievable(self) -> bool:
        """Test if the capability can return the current value."""
        if self._entity_config.get(CONF_STATE_UNKNOWN):
            return False

        return True

    @property
    def parameters(self) -> OnOffCapabilityParameters | None:
        """Return parameters for a devices list request."""
        if not self.retrievable:
            return OnOffCapabilityParameters(split=True)

        return None

    def get_value(self) -> bool | None:
        """Return the current capability value."""
        return self.state.state != STATE_OFF

    async def set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state."""
        for key, call in ((CONF_TURN_ON, state.value), (CONF_TURN_OFF, not state.value)):
            if key in self._entity_config and call:
                if self._entity_config[key] is False:
                    raise ActionNotAllowed

                await async_call_from_config(
                    self._hass, self._entity_config[key], blocking=self._wait_for_service_call, context=context
                )
                return

        await self._set_instance_state(context, state)

    @staticmethod
    def _get_service(state: OnOffCapabilityInstanceActionState) -> str:
        """Return the service to be called for a new state."""
        if state.value:
            return SERVICE_TURN_ON

        return SERVICE_TURN_OFF

    def __str__(self) -> str:
        """Return string representation."""
        return f"{self.type.short} capability of {self.device_id}"


class OnlyOnCapability(ActionOnlyCapabilityMixin, OnOffCapability, ABC):
    """Capability to only turn on a device."""

    @property
    def parameters(self) -> OnOffCapabilityParameters | None:
        """Return parameters for a devices list request."""
        return None


class OnOffCapabilityBasic(OnOffCapability):
    """Capability to turn on or off a device."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return self.state.domain in (light.DOMAIN, fan.DOMAIN, switch.DOMAIN, humidifier.DOMAIN, input_boolean.DOMAIN)

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state (if wasn't overriden by the user)."""
        await self._hass.services.async_call(
            self.state.domain,
            self._get_service(state),
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=self._wait_for_service_call,
            context=context,
        )


class OnOffCapabilityAutomation(OnOffCapability):
    """Capability to enable or disable an automation."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return bool(self.state.domain == automation.DOMAIN)

    def get_value(self) -> bool | None:
        """Return the current capability value."""
        return self.state.state == STATE_ON

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state (if wasn't overriden by the user)."""
        await self._hass.services.async_call(
            automation.DOMAIN,
            self._get_service(state),
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=self._wait_for_service_call,
            context=context,
        )


class OnOffCapabilityGroup(OnOffCapability):
    """Capability to turn on or off a group of devices."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return self.state.domain in group.DOMAIN

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state (if wasn't overriden by the user)."""
        await self._hass.services.async_call(
            HA_DOMAIN,
            self._get_service(state),
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=self._wait_for_service_call,
            context=context,
        )


class OnOffCapabilityScript(OnlyOnCapability):
    """Capability to call a script or scene."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return self.state.domain in (scene.DOMAIN, script.DOMAIN)

    @property
    def _wait_for_service_call(self) -> bool:
        """Check if service should be run in blocking mode."""
        if self.state.domain == script.DOMAIN:
            return False

        return super()._wait_for_service_call

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state."""
        await self._hass.services.async_call(
            self.state.domain,
            SERVICE_TURN_ON,
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=self._wait_for_service_call,
            context=context,
        )


class OnOffCapabilityButton(OnlyOnCapability):
    """Capability to press a button."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return self.state.domain == button.DOMAIN

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state."""
        await self._hass.services.async_call(
            self.state.domain,
            button.SERVICE_PRESS,
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=self._wait_for_service_call,
            context=context,
        )


class OnOffCapabilityInputButton(OnlyOnCapability):
    """Capability to press a input_button."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return self.state.domain == input_button.DOMAIN

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state."""
        await self._hass.services.async_call(
            self.state.domain,
            input_button.SERVICE_PRESS,
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=self._wait_for_service_call,
            context=context,
        )


class OnOffCapabilityLock(OnOffCapability):
    """Capability to lock or unlock a lock."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return self.state.domain == lock.DOMAIN

    def get_value(self) -> bool | None:
        """Return the current capability value."""
        return bool(self.state.state == LockState.UNLOCKED)

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state."""
        if state.value:
            service = SERVICE_UNLOCK
        else:
            service = SERVICE_LOCK

        await self._hass.services.async_call(
            lock.DOMAIN,
            service,
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=self._wait_for_service_call,
            context=context,
        )


class OnOffCapabilityCover(OnOffCapability):
    """Capability to open or close a cover."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return self.state.domain == cover.DOMAIN

    def get_value(self) -> bool | None:
        """Return the current capability value."""
        return self.state.state == STATE_OPEN

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state."""
        if state.value:
            service = SERVICE_OPEN_COVER
        else:
            service = SERVICE_CLOSE_COVER

        await self._hass.services.async_call(
            cover.DOMAIN,
            service,
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=self._wait_for_service_call,
            context=context,
        )


class OnOffCapabilityRemote(ActionOnlyCapabilityMixin, OnOffCapability):
    """Capability to turn on or off a remote."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return self.state.domain == remote.DOMAIN

    @property
    def parameters(self) -> OnOffCapabilityParameters | None:
        """Return parameters for a devices list request."""
        return OnOffCapabilityParameters(split=True)

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state."""
        await self._hass.services.async_call(
            remote.DOMAIN,
            self._get_service(state),
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=False,
            context=context,
        )


class OnOffCapabilityMediaPlayer(OnOffCapability):
    """Capability to turn on or off a media player device."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        if self.state.domain == media_player.DOMAIN:
            if CONF_TURN_ON in self._entity_config or CONF_TURN_OFF in self._entity_config:
                return True

            if MediaPlayerFeature.TURN_ON_OFF in self._entity_config.get(CONF_FEATURES, []):
                return True

            return bool(
                self._state_features & MediaPlayerEntityFeature.TURN_ON
                or self._state_features & MediaPlayerEntityFeature.TURN_OFF
            )

        return False

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state (if wasn't overriden by the user)."""
        await self._hass.services.async_call(
            media_player.DOMAIN,
            self._get_service(state),
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=self._wait_for_service_call,
            context=context,
        )


class OnOffCapabilityVacuum(OnOffCapability):
    """Capability to start or stop cleaning by a vacuum."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        if self.state.domain != vacuum.DOMAIN:
            return False

        if CONF_TURN_ON in self._entity_config:
            return True

        if self._state_features & VacuumEntityFeature.TURN_ON and self._state_features & VacuumEntityFeature.TURN_OFF:
            return True

        if self._state_features & VacuumEntityFeature.START:
            if (
                self._state_features & VacuumEntityFeature.RETURN_HOME
                or self._state_features & VacuumEntityFeature.STOP
            ):
                return True

        return False

    def get_value(self) -> bool | None:
        """Return the current capability value."""
        return self.state.state in [STATE_ON, VacuumActivity.CLEANING]

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state (if wasn't overriden by the user)."""
        if state.value:
            service = SERVICE_TURN_ON

            if self._state_features & VacuumEntityFeature.START:
                service = vacuum.SERVICE_START
        else:
            service = SERVICE_TURN_OFF

            if self._state_features & VacuumEntityFeature.RETURN_HOME:
                service = vacuum.SERVICE_RETURN_TO_BASE
            elif self._state_features & VacuumEntityFeature.STOP:
                service = vacuum.SERVICE_STOP

        await self._hass.services.async_call(
            vacuum.DOMAIN,
            service,
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=self._wait_for_service_call,
            context=context,
        )


class OnOffCapabilityClimate(OnOffCapability):
    """Capability to turn on or off a climate device."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return self.state.domain == climate.DOMAIN

    def get_value(self) -> bool | None:
        """Return the current capability value."""
        return self.state.state != HVACMode.OFF

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state (if wasn't overriden by the user)."""
        service_data = {ATTR_ENTITY_ID: self.state.entity_id}

        if state.value:
            service = SERVICE_TURN_ON

            hvac_modes = self.state.attributes.get(climate.ATTR_HVAC_MODES, [])
            for mode in (HVACMode.HEAT_COOL, HVACMode.AUTO):
                if mode not in hvac_modes:
                    continue

                service_data[climate.ATTR_HVAC_MODE] = mode
                service = climate.SERVICE_SET_HVAC_MODE
                break
        else:
            service = SERVICE_TURN_OFF

        await self._hass.services.async_call(
            climate.DOMAIN, service, service_data, blocking=self._wait_for_service_call, context=context
        )


class OnOffCapabilityWaterHeater(OnOffCapability):
    """Capability to turn on or off a water heater."""

    _water_heater_operations = {
        STATE_ON: [STATE_ON, "On", "ON", water_heater.STATE_ELECTRIC, SKYKETTLE_MODE_BOIL],
        STATE_OFF: [STATE_OFF, "Off", "OFF"],
    }

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return self.state.domain == water_heater.DOMAIN

    def get_value(self) -> bool | None:
        """Return the current capability value."""
        return self.state.state.lower() != STATE_OFF

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state (if wasn't overriden by the user)."""
        if self._state_features & WaterHeaterEntityFeature.ON_OFF:
            await self._set_state_on_off(context, state)
        else:
            await self._set_state_operation_mode(context, state)

    async def _set_state_on_off(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        await self._hass.services.async_call(
            water_heater.DOMAIN,
            self._get_service(state),
            {
                ATTR_ENTITY_ID: self.state.entity_id,
            },
            blocking=self._wait_for_service_call,
            context=context,
        )

    async def _set_state_operation_mode(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        operation_list = self.state.attributes.get(water_heater.ATTR_OPERATION_LIST, [])

        if state.value:
            mode = self._get_water_heater_operation(STATE_ON, operation_list)
        else:
            mode = self._get_water_heater_operation(STATE_OFF, operation_list)

        if not mode:
            target_state_text = "on" if state.value else "off"
            raise APIError(
                ResponseCode.NOT_SUPPORTED_IN_CURRENT_MODE,
                f"Unable to determine operation mode for {target_state_text} state for {self}",
            )

        await self._hass.services.async_call(
            water_heater.DOMAIN,
            water_heater.SERVICE_SET_OPERATION_MODE,
            {ATTR_ENTITY_ID: self.state.entity_id, water_heater.ATTR_OPERATION_MODE: mode},
            blocking=self._wait_for_service_call,
            context=context,
        )

    def _get_water_heater_operation(self, required_mode: str, operations_list: list[str]) -> str | None:
        for operation in self._water_heater_operations[required_mode]:
            if operation in operations_list:
                return operation

        return None


class OnOffCapabilityValve(OnOffCapability):
    """Capability to open or close a valve."""

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        return bool(self.state.domain == valve.DOMAIN)

    def get_value(self) -> bool | None:
        """Return the current capability value."""
        return self.state.state == STATE_OPEN

    async def _set_instance_state(self, context: Context, state: OnOffCapabilityInstanceActionState) -> None:
        """Change the capability state."""
        if state.value:
            service = SERVICE_OPEN_VALVE
        else:
            service = SERVICE_CLOSE_VALVE

        await self._hass.services.async_call(
            valve.DOMAIN,
            service,
            {ATTR_ENTITY_ID: self.state.entity_id},
            blocking=self._wait_for_service_call,
            context=context,
        )


STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityBasic)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityAutomation)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityGroup)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityScript)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityButton)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityInputButton)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityLock)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityCover)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityRemote)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityMediaPlayer)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityVacuum)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityClimate)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityWaterHeater)
STATE_CAPABILITIES_REGISTRY.register(OnOffCapabilityValve)
