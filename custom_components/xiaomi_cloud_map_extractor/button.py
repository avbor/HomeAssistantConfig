from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass
from typing import Any, Coroutine

from homeassistant.components.button import (
    ButtonEntity,
    ButtonEntityDescription,
    ButtonDeviceClass,
    DOMAIN,
)
from homeassistant.const import EntityCategory
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .coordinator import XiaomiCloudMapExtractorDataUpdateCoordinator
from .entity import XiaomiCloudMapExtractorEntity
from .types import XiaomiCloudMapExtractorConfigEntry


@dataclass(frozen=True, kw_only=True)
class XiaomiCloudMapExtractorButtonEntityDescription(ButtonEntityDescription):
    press_fn: Callable[[XiaomiCloudMapExtractorDataUpdateCoordinator], Coroutine[Any, Any, None]]


BUTTON_TYPES: tuple[XiaomiCloudMapExtractorButtonEntityDescription, ...] = (
    XiaomiCloudMapExtractorButtonEntityDescription(
        key="force_update",
        translation_key="force_update",
        press_fn=lambda coordinator: coordinator.force_update_data(),
        device_class=ButtonDeviceClass.UPDATE,
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
        XiaomiCloudMapExtractorButtonEntity(coordinator, config_entry, description)
        for description in BUTTON_TYPES
    )


class XiaomiCloudMapExtractorButtonEntity(XiaomiCloudMapExtractorEntity, ButtonEntity):
    entity_description: XiaomiCloudMapExtractorButtonEntityDescription

    def __init__(
            self,
            coordinator: XiaomiCloudMapExtractorDataUpdateCoordinator,
            config_entry: XiaomiCloudMapExtractorConfigEntry,
            description: XiaomiCloudMapExtractorButtonEntityDescription,
    ) -> None:
        super().__init__(coordinator, config_entry, DOMAIN, description.key)

        self.entity_description = description

    async def async_press(self) -> None:
        await self.entity_description.press_fn(self.coordinator)
