from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass
from typing import Any

from homeassistant.components.binary_sensor import (
    BinarySensorEntity,
    BinarySensorEntityDescription,
    DOMAIN,
)
from homeassistant.const import EntityCategory
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.typing import StateType
from vacuum_map_parser_base.map_data import MapData

from .coordinator import XiaomiCloudMapExtractorDataUpdateCoordinator
from .entity import XiaomiCloudMapExtractorEntity
from .types import XiaomiCloudMapExtractorConfigEntry


@dataclass(frozen=True, kw_only=True)
class XiaomiCloudMapExtractorBinarySensorEntityDescription(BinarySensorEntityDescription):
    value_fn: Callable[[MapData], bool]
    attributes_fn: Callable[[MapData], dict[str, Any]] = lambda _: {}


SENSOR_TYPES: tuple[XiaomiCloudMapExtractorBinarySensorEntityDescription, ...] = (
    XiaomiCloudMapExtractorBinarySensorEntityDescription(
        key="is_map_empty",
        translation_key="is_map_empty",
        value_fn=lambda map_data: (not map_data.image) or map_data.image.is_empty,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
)


async def async_setup_entry(
        hass: HomeAssistant,
        config_entry: XiaomiCloudMapExtractorConfigEntry,
        async_add_entities: AddEntitiesCallback,
) -> None:
    coordinator = config_entry.runtime_data.coordinator

    async_add_entities(
        XiaomiCloudMapExtractorBinarySensorEntity(coordinator, config_entry, description)
        for description in SENSOR_TYPES
    )


class XiaomiCloudMapExtractorBinarySensorEntity(XiaomiCloudMapExtractorEntity, BinarySensorEntity):
    entity_description: XiaomiCloudMapExtractorBinarySensorEntityDescription

    def __init__(
            self,
            coordinator: XiaomiCloudMapExtractorDataUpdateCoordinator,
            config_entry: XiaomiCloudMapExtractorConfigEntry,
            description: XiaomiCloudMapExtractorBinarySensorEntityDescription,
    ) -> None:
        super().__init__(coordinator, config_entry, DOMAIN, description.key)

        self.entity_description = description

    @property
    def is_on(self) -> StateType:
        if (map_data := self._map_data()) is None:
            return None
        return self.entity_description.value_fn(map_data)

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        attrs = super().extra_state_attributes
        if (map_data := self._map_data()) is None:
            return attrs
        return {**attrs, **self.entity_description.attributes_fn(map_data)}
