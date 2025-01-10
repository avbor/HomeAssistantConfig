"""Config entry data for the Yandex Smart Home."""

import asyncio
from contextlib import suppress
from dataclasses import dataclass
from functools import cached_property
import logging
from typing import Any, Self, cast

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import (
    CONF_ID,
    CONF_PLATFORM,
    CONF_STATE_TEMPLATE,
    CONF_TOKEN,
    EVENT_HOMEASSISTANT_STARTED,
    EVENT_HOMEASSISTANT_STOP,
)
from homeassistant.core import CoreState, HomeAssistant
from homeassistant.helpers import entity_registry as er, issue_registry as ir
from homeassistant.helpers.entityfilter import EntityFilter
from homeassistant.helpers.template import Template
from homeassistant.helpers.typing import ConfigType
from homeassistant.loader import async_get_custom_components

from . import capability_custom, property_custom
from .capability_custom import CustomCapability, get_custom_capability
from .cloud import CloudManager
from .color import ColorProfiles
from .const import (
    CONF_BACKLIGHT_ENTITY_ID,
    CONF_CLOUD_INSTANCE,
    CONF_CLOUD_INSTANCE_CONNECTION_TOKEN,
    CONF_CLOUD_INSTANCE_ID,
    CONF_CLOUD_STREAM,
    CONF_COLOR_PROFILE,
    CONF_CONNECTION_TYPE,
    CONF_ENTITY_CUSTOM_MODES,
    CONF_ENTITY_CUSTOM_RANGES,
    CONF_ENTITY_CUSTOM_TOGGLES,
    CONF_ENTITY_PROPERTIES,
    CONF_ENTITY_PROPERTY_ENTITY,
    CONF_ENTRY_ALIASES,
    CONF_FILTER_SOURCE,
    CONF_LABEL,
    CONF_LINKED_PLATFORMS,
    CONF_NOTIFIER,
    CONF_PRESSURE_UNIT,
    CONF_SETTINGS,
    CONF_SKILL,
    CONF_USER_ID,
    DOMAIN,
    ISSUE_ID_DEPRECATED_PRESSURE_UNIT,
    ISSUE_ID_DEPRECATED_YAML_NOTIFIER,
    ISSUE_ID_DEPRECATED_YAML_SEVERAL_NOTIFIERS,
    ISSUE_ID_MISSING_SKILL_DATA,
    ConnectionType,
    EntityFilterSource,
    EntityId,
)
from .device import BacklightCapability, DeviceId, StateCapability
from .helpers import APIError, CacheStore, SmartHomePlatform
from .notifier import CloudNotifier, Notifier, NotifierConfig, YandexDirectNotifier
from .property import StateProperty
from .property_custom import CustomProperty, get_custom_property, get_event_platform_custom_property_type
from .schema import CapabilityType, OnOffCapabilityInstance

_LOGGER = logging.getLogger(__name__)


@dataclass
class SkillConfig:
    """Class to hold configuration of a smart home skill."""

    user_id: str
    id: str
    token: str | None


class ConfigEntryData:
    """Class to hold config entry data."""

    cache: CacheStore

    _entity_registry: er.EntityRegistry

    def __init__(
        self,
        hass: HomeAssistant,
        entry: ConfigEntry,
        yaml_config: ConfigType | None = None,
        entity_config: ConfigType | None = None,
        entity_filter: EntityFilter | None = None,
    ):
        """Initialize."""
        self.entry = entry
        self.entity_config: ConfigType = entity_config or {}
        self._yaml_config: ConfigType = yaml_config or {}

        self.component_version = "unknown"

        self._hass = hass
        self._entity_filter = entity_filter
        self._cloud_manager: CloudManager | None = None
        self._notifiers: list[Notifier] = []

    async def async_setup(self) -> Self:
        """Set up the config entry data."""

        self.cache = CacheStore(self._hass)
        await self.cache.async_load()

        self._entity_registry = er.async_get(self._hass)

        with suppress(KeyError):
            integration = (await async_get_custom_components(self._hass))[DOMAIN]
            self.component_version = str(integration.version)

        if self.connection_type in (ConnectionType.CLOUD, ConnectionType.CLOUD_PLUS):
            await self._async_setup_cloud_connection()

        if self._hass.state == CoreState.running:
            await self._async_setup_notifiers()
        else:
            self._hass.bus.async_listen_once(EVENT_HOMEASSISTANT_STARTED, self._async_setup_notifiers)

        if self._yaml_config.get(CONF_SETTINGS, {}).get(CONF_PRESSURE_UNIT):
            ir.async_create_issue(
                self._hass,
                DOMAIN,
                ISSUE_ID_DEPRECATED_PRESSURE_UNIT,
                is_fixable=False,
                severity=ir.IssueSeverity.WARNING,
                translation_key=ISSUE_ID_DEPRECATED_PRESSURE_UNIT,
                learn_more_url="https://docs.yaha-cloud.ru/v1.0.x/devices/sensor/float/#unit-conversion",
            )
        else:
            ir.async_delete_issue(self._hass, DOMAIN, "deprecated_pressure_unit")

        if count := len(self._yaml_config.get(CONF_NOTIFIER, [])):
            issue_id = ISSUE_ID_DEPRECATED_YAML_NOTIFIER if count == 1 else ISSUE_ID_DEPRECATED_YAML_SEVERAL_NOTIFIERS
            ir.async_create_issue(
                self._hass,
                DOMAIN,
                issue_id,
                is_fixable=False,
                severity=ir.IssueSeverity.WARNING,
                translation_key=issue_id,
                learn_more_url="https://docs.yaha-cloud.ru/v1.0.x/breaking-changes/#v1-notifier",
            )
        else:
            ir.async_delete_issue(self._hass, DOMAIN, ISSUE_ID_DEPRECATED_YAML_NOTIFIER)
            ir.async_delete_issue(self._hass, DOMAIN, ISSUE_ID_DEPRECATED_YAML_SEVERAL_NOTIFIERS)

        return self

    async def async_unload(self) -> None:
        """Unload the config entry data."""
        tasks = [asyncio.create_task(n.async_unload()) for n in self._notifiers]
        if self._cloud_manager:
            tasks.append(asyncio.create_task(self._cloud_manager.async_disconnect()))

        if tasks:
            await asyncio.wait(tasks)

        return None

    async def async_get_context_user_id(self) -> str | None:
        """Return user id for service calls (cloud connection only)."""
        if user_id := self.entry.options.get(CONF_USER_ID):
            if user := await self._hass.auth.async_get_user(user_id):
                return user.id

        return None

    @cached_property
    def is_reporting_states(self) -> bool:
        """Test if the config entry can report state changes."""
        if self.connection_type == ConnectionType.CLOUD:
            return True
        if self.platform == SmartHomePlatform.VK:
            return False

        return self.skill is not None

    @property
    def use_cloud_stream(self) -> bool:
        """Test if the config entry use video streaming through the cloud."""
        if self.connection_type in (ConnectionType.CLOUD, ConnectionType.CLOUD_PLUS):
            return True

        settings = self._yaml_config.get(CONF_SETTINGS, {})
        return bool(settings.get(CONF_CLOUD_STREAM))

    @property
    def use_entry_aliases(self) -> bool:
        """Test if device or area entry aliases should be used for device or room name."""
        return bool(self.entry.options.get(CONF_ENTRY_ALIASES, True))

    @property
    def connection_type(self) -> ConnectionType:
        """Return connection type."""
        return ConnectionType(str(self.entry.data.get(CONF_CONNECTION_TYPE)))

    @property
    def cloud_instance_id(self) -> str:
        """Return cloud instance id."""
        if self.connection_type in (ConnectionType.CLOUD, ConnectionType.CLOUD_PLUS):
            return str(self.entry.data[CONF_CLOUD_INSTANCE][CONF_CLOUD_INSTANCE_ID])

        raise ValueError("Config entry uses direct connection")

    @property
    def cloud_connection_token(self) -> str:
        """Return cloud connection token."""
        if self.connection_type in (ConnectionType.CLOUD, ConnectionType.CLOUD_PLUS):
            return str(self.entry.data[CONF_CLOUD_INSTANCE][CONF_CLOUD_INSTANCE_CONNECTION_TOKEN])

        raise ValueError("Config entry uses direct connection")

    @property
    def platform(self) -> SmartHomePlatform | None:
        """Return smart home platform."""
        if self.connection_type == ConnectionType.CLOUD:
            return None

        return SmartHomePlatform(self.entry.data[CONF_PLATFORM])

    @cached_property
    def skill(self) -> SkillConfig | None:
        """Return configuration for the skill."""
        config = self.entry.options.get(CONF_SKILL)
        if not config:
            return None

        user_id = self.cloud_instance_id if self.connection_type == ConnectionType.CLOUD_PLUS else config[CONF_USER_ID]
        return SkillConfig(user_id=user_id, id=config[CONF_ID], token=config.get(CONF_TOKEN))

    @property
    def color_profiles(self) -> ColorProfiles:
        """Return color profiles."""
        return ColorProfiles.from_dict(self._yaml_config.get(CONF_COLOR_PROFILE, {}))

    def get_entity_config(self, entity_id: str) -> ConfigType:
        """Return configuration for the entity."""
        return cast(ConfigType, self.entity_config.get(entity_id, {}))

    def should_expose(self, entity_id: str) -> bool:
        """Test if the entity should be exposed."""
        if self.entry.options.get(CONF_FILTER_SOURCE) == EntityFilterSource.LABEL:
            entity_entry = self._entity_registry.async_get(entity_id)
            if not entity_entry:
                return False

            return self.entry.options[CONF_LABEL] in entity_entry.labels

        if self._entity_filter and not self._entity_filter.empty_filter:
            return self._entity_filter(entity_id)

        return False

    @property
    def linked_platforms(self) -> set[SmartHomePlatform]:
        """Return list of smart home platforms linked with the config entry."""
        platforms: set[SmartHomePlatform] = set()
        for platform in self.entry.data.get(CONF_LINKED_PLATFORMS, []):
            try:
                platforms.add(SmartHomePlatform(platform))
            except ValueError:
                _LOGGER.error(f"Unsupported platform: {platform}")

        return platforms

    def link_platform(self, platform: SmartHomePlatform) -> None:
        """Link smart home platform to this config entry (device discovery)."""
        if platform in self.linked_platforms:
            return

        data = self.entry.data.copy()
        data[CONF_LINKED_PLATFORMS] = data.get(CONF_LINKED_PLATFORMS, []) + [platform]

        self._hass.config_entries.async_update_entry(self.entry, data=data)

    def unlink_platform(self, platform: SmartHomePlatform) -> None:
        """Unlink smart home platform."""
        data = self.entry.data.copy()
        data[CONF_LINKED_PLATFORMS] = list(self.linked_platforms - {platform})

        self._hass.config_entries.async_update_entry(self.entry, data=data)

    async def _async_setup_notifiers(self, *_: Any) -> None:
        """Set up notifiers."""
        if self.is_reporting_states or self.platform == SmartHomePlatform.VK:
            ir.async_delete_issue(self._hass, DOMAIN, ISSUE_ID_MISSING_SKILL_DATA)
        else:
            ir.async_create_issue(
                self._hass,
                DOMAIN,
                ISSUE_ID_MISSING_SKILL_DATA,
                is_fixable=False,
                severity=ir.IssueSeverity.WARNING,
                translation_key=ISSUE_ID_MISSING_SKILL_DATA,
                translation_placeholders={"entry_title": self.entry.title},
            )
            return

        if not self.linked_platforms:
            return

        track_templates = self._get_trackable_templates()
        track_entity_states = self._get_trackable_entity_states()
        extended_log = len(self._hass.config_entries.async_entries(DOMAIN)) > 1

        match self.connection_type:
            case ConnectionType.CLOUD:
                for platform in self.linked_platforms:
                    config = NotifierConfig(
                        user_id=self.cloud_instance_id,
                        token=self.cloud_connection_token,
                        platform=platform,
                        extended_log=extended_log,
                    )
                    self._notifiers.append(
                        CloudNotifier(self._hass, self, config, track_templates, track_entity_states)
                    )

            case ConnectionType.CLOUD_PLUS:
                if self.platform == SmartHomePlatform.YANDEX and self.skill and self.skill.token:
                    config = NotifierConfig(
                        user_id=self.cloud_instance_id,
                        token=self.skill.token,
                        skill_id=self.skill.id,
                        extended_log=extended_log,
                    )
                    self._notifiers.append(
                        YandexDirectNotifier(self._hass, self, config, track_templates, track_entity_states)
                    )

            case ConnectionType.DIRECT:
                if self.platform == SmartHomePlatform.YANDEX and self.skill and self.skill.token:
                    config = NotifierConfig(
                        user_id=self.skill.user_id,
                        token=self.skill.token,
                        skill_id=self.skill.id,
                        extended_log=extended_log,
                    )
                    self._notifiers.append(
                        YandexDirectNotifier(self._hass, self, config, track_templates, track_entity_states)
                    )

        if self._notifiers:
            await asyncio.wait([asyncio.create_task(n.async_setup()) for n in self._notifiers])

        return None

    async def _async_setup_cloud_connection(self) -> None:
        """Set up the cloud connection."""
        self._cloud_manager = CloudManager(self._hass, self)

        self._hass.loop.create_task(self._cloud_manager.async_connect())
        return self.entry.async_on_unload(
            self._hass.bus.async_listen_once(EVENT_HOMEASSISTANT_STOP, self._cloud_manager.async_disconnect)
        )

    def _append_trackable_templates_with_capability(
        self,
        templates: dict[Template, list[CustomCapability | CustomProperty]],
        capability_config: ConfigType,
        capability_type: CapabilityType,
        instance: str,
        device_id: str,
    ) -> None:
        """Append custom capability to list of templates."""
        try:
            capability = get_custom_capability(
                self._hass,
                self,
                capability_config,
                capability_type,
                instance,
                device_id,
            )
        except APIError as e:
            _LOGGER.debug(f"Failed to track custom capability: {e}")
            return

        template = capability_custom.get_value_template(self._hass, device_id, capability_config)

        if template:
            templates.setdefault(template, [])
            templates[template].append(capability)

    def _get_trackable_templates(self) -> dict[Template, list[CustomCapability | CustomProperty]]:
        """Return templates for track changes."""
        templates: dict[Template, list[CustomCapability | CustomProperty]] = {}

        for device_id, entity_config in self.entity_config.items():
            if not self.should_expose(device_id):
                continue

            if (state_template := entity_config.get(CONF_STATE_TEMPLATE)) is not None:
                self._append_trackable_templates_with_capability(
                    templates,
                    {CONF_STATE_TEMPLATE: state_template},
                    CapabilityType.ON_OFF,
                    OnOffCapabilityInstance.ON,
                    device_id,
                )

            for capability_type, config_key in (
                (CapabilityType.MODE, CONF_ENTITY_CUSTOM_MODES),
                (CapabilityType.TOGGLE, CONF_ENTITY_CUSTOM_TOGGLES),
                (CapabilityType.RANGE, CONF_ENTITY_CUSTOM_RANGES),
            ):
                if config_key in entity_config:
                    for instance in entity_config[config_key]:
                        capability_config = entity_config[config_key][instance]
                        if isinstance(capability_config, dict):
                            self._append_trackable_templates_with_capability(
                                templates, capability_config, capability_type, instance, device_id
                            )

            for property_config in entity_config.get(CONF_ENTITY_PROPERTIES, []):
                try:
                    if not (custom_property := get_custom_property(self._hass, self, property_config, device_id)):
                        continue
                    template = property_custom.get_value_template(self._hass, device_id, property_config)
                    templates.setdefault(template, [])
                    templates[template].append(custom_property)
                except APIError as e:
                    _LOGGER.debug(f"Failed to track custom property: {e}")

        return templates

    def _get_trackable_entity_states(
        self,
    ) -> dict[EntityId, list[tuple[DeviceId, type[StateProperty | StateCapability[Any]]]]]:
        """Return entity capability and property class types to track state changes."""
        states: dict[EntityId, list[tuple[DeviceId, type[StateProperty | StateCapability[Any]]]]] = {}

        def _states_append(_entity_id: str, _device_id: str, t: type[StateProperty | StateCapability[Any]]) -> None:
            states.setdefault(_entity_id, [])
            states[_entity_id].append((_device_id, t))

        for device_id, entity_config in self.entity_config.items():
            if not self.should_expose(device_id):
                continue

            for property_config in entity_config.get(CONF_ENTITY_PROPERTIES, []):
                if event_platform_property := get_event_platform_custom_property_type(property_config):
                    entity_id: str = property_config[CONF_ENTITY_PROPERTY_ENTITY]
                    _states_append(entity_id, device_id, event_platform_property)

            if backlight_entity_id := entity_config.get(CONF_BACKLIGHT_ENTITY_ID):
                _states_append(backlight_entity_id, device_id, BacklightCapability)

        return states
