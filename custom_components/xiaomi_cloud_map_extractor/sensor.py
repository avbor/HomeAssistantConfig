from __future__ import annotations

import json
from collections.abc import Callable
from dataclasses import dataclass
from typing import Any

from homeassistant.components.sensor import (
    SensorEntity,
    SensorEntityDescription,
    SensorStateClass,
    DOMAIN,
)
from homeassistant.const import EntityCategory
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.typing import StateType
from vacuum_map_parser_base.map_data import MapData

from .connector.utils.list_operations import as_list_of_dict, len_len
from .coordinator import XiaomiCloudMapExtractorDataUpdateCoordinator
from .entity import XiaomiCloudMapExtractorEntity
from .types import XiaomiCloudMapExtractorConfigEntry


@dataclass(frozen=True, kw_only=True)
class XiaomiCloudMapExtractorSensorEntityDescription(SensorEntityDescription):
    value_fn: Callable[[MapData], StateType]
    attributes_fn: Callable[[MapData], dict[str, Any]] = lambda _: {}


SENSOR_TYPES: tuple[XiaomiCloudMapExtractorSensorEntityDescription, ...] = (
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="no_go_areas",
        translation_key="no_go_areas",
        suggested_display_precision=0,
        value_fn=lambda map_data: len(map_data.no_go_areas or []),
        attributes_fn=lambda map_data: {"areas": as_list_of_dict(map_data.no_go_areas)},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="charger_position",
        translation_key="charger_position",
        value_fn=lambda map_data: json.dumps(map_data.charger.as_dict()) if map_data.charger else None,
        attributes_fn=lambda map_data: map_data.charger.as_dict() if map_data.charger else {},
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="vacuum_position",
        translation_key="vacuum_position",
        value_fn=lambda map_data: json.dumps(map_data.vacuum_position.as_dict()) if map_data.vacuum_position else None,
        attributes_fn=lambda map_data: map_data.vacuum_position.as_dict() if map_data.vacuum_position else {},
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="vacuum_room_id",
        translation_key="vacuum_room_id",
        value_fn=lambda map_data: map_data.vacuum_room,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="vacuum_room_name",
        translation_key="vacuum_room_name",
        value_fn=lambda map_data: map_data.vacuum_room_name,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="no_carpet_areas",
        translation_key="no_carpet_areas",
        suggested_display_precision=0,
        value_fn=lambda map_data: len(map_data.no_carpet_areas or []),
        attributes_fn=lambda map_data: {"areas": as_list_of_dict(map_data.no_carpet_areas)},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="no_mopping_areas",
        translation_key="no_mopping_areas",
        suggested_display_precision=0,
        value_fn=lambda map_data: len(map_data.no_mopping_areas or []),
        attributes_fn=lambda map_data: {"areas": as_list_of_dict(map_data.no_mopping_areas)},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="cleaned_rooms_ids",
        translation_key="cleaned_rooms_ids",
        suggested_display_precision=0,
        value_fn=lambda map_data: len(map_data.cleaned_rooms or []),
        attributes_fn=lambda map_data: {"rooms_ids": as_list_of_dict(map_data.cleaned_rooms)},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="goto_position",
        translation_key="goto_position",
        value_fn=lambda map_data: json.dumps(map_data.goto.as_dict()) if map_data.goto else None,
        attributes_fn=lambda map_data: map_data.goto.as_dict() if map_data.goto else {},
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="goto_path",
        translation_key="goto_path",
        suggested_display_precision=0,
        value_fn=lambda map_data: len_len(map_data.goto_path and map_data.goto_path.path or []),
        attributes_fn=lambda map_data: map_data.goto_path.as_dict() if map_data.goto_path else {},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="goto_predicted_path",
        translation_key="goto_predicted_path",
        suggested_display_precision=0,
        value_fn=lambda map_data: len_len(map_data.predicted_path and map_data.predicted_path or []),
        attributes_fn=lambda map_data: map_data.predicted_path.as_dict() if map_data.predicted_path else {},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="mop_path",
        translation_key="mop_path",
        suggested_display_precision=0,
        value_fn=lambda map_data: len_len(map_data.mop_path and map_data.mop_path.path or []),
        attributes_fn=lambda map_data: map_data.mop_path.as_dict() if map_data.mop_path else {},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="path",
        translation_key="path",
        suggested_display_precision=0,
        value_fn=lambda map_data: len_len(map_data.path and map_data.path.path or []),
        attributes_fn=lambda map_data: map_data.path.as_dict() if map_data.path else {},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="obstacles",
        translation_key="obstacles",
        suggested_display_precision=0,
        value_fn=lambda map_data: len(map_data.obstacles or []),
        attributes_fn=lambda map_data: {"obstacles": as_list_of_dict(map_data.obstacles)},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="ignored_obstacles",
        translation_key="ignored_obstacles",
        suggested_display_precision=0,
        value_fn=lambda map_data: len(map_data.ignored_obstacles or []),
        attributes_fn=lambda map_data: {"obstacles": as_list_of_dict(map_data.ignored_obstacles)},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="obstacles_with_photo",
        translation_key="obstacles_with_photo",
        suggested_display_precision=0,
        value_fn=lambda map_data: len(map_data.obstacles_with_photo or []),
        attributes_fn=lambda map_data: {"obstacles": as_list_of_dict(map_data.obstacles_with_photo)},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="ignored_obstacles_with_photo",
        translation_key="ignored_obstacles_with_photo",
        suggested_display_precision=0,
        value_fn=lambda map_data: len(map_data.ignored_obstacles_with_photo or []),
        attributes_fn=lambda map_data: {"obstacles": as_list_of_dict(map_data.ignored_obstacles_with_photo)},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="walls",
        translation_key="walls",
        suggested_display_precision=0,
        value_fn=lambda map_data: len(map_data.walls or []),
        attributes_fn=lambda map_data: {"walls": as_list_of_dict(map_data.walls)},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="zones",
        translation_key="zones",
        suggested_display_precision=0,
        value_fn=lambda map_data: len(map_data.zones or []),
        attributes_fn=lambda map_data: {"zones": as_list_of_dict(map_data.zones)},
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="map_name",
        translation_key="map_name",
        value_fn=lambda map_data: map_data.map_name,
        entity_category=EntityCategory.DIAGNOSTIC,
        entity_registry_enabled_default=False,
        entity_registry_visible_default=False,
    ),
    XiaomiCloudMapExtractorSensorEntityDescription(
        key="rooms",
        translation_key="rooms",
        suggested_display_precision=0,
        value_fn=lambda map_data: len(map_data.rooms or {}),
        attributes_fn=lambda map_data: {k: v.as_dict() for k, v in (map_data.rooms or {}).items()},
        state_class=SensorStateClass.MEASUREMENT,
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
        XiaomiCloudMapExtractorSensorEntity(coordinator, config_entry, description)
        for description in SENSOR_TYPES
    )


class XiaomiCloudMapExtractorSensorEntity(XiaomiCloudMapExtractorEntity, SensorEntity):
    entity_description: XiaomiCloudMapExtractorSensorEntityDescription

    def __init__(
            self,
            coordinator: XiaomiCloudMapExtractorDataUpdateCoordinator,
            config_entry: XiaomiCloudMapExtractorConfigEntry,
            description: XiaomiCloudMapExtractorSensorEntityDescription,
    ) -> None:
        super().__init__(coordinator, config_entry, DOMAIN, description.key)

        self.entity_description = description

    @property
    def native_value(self) -> StateType:
        if (map_data := self._map_data()) is None:
            return None
        return self.entity_description.value_fn(map_data)

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        attrs = super().extra_state_attributes
        if (map_data := self._map_data()) is None:
            return attrs
        return {**attrs, **self.entity_description.attributes_fn(map_data)}
