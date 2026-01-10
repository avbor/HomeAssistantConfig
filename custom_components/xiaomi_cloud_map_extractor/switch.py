from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass
from typing import Any, Coroutine

from homeassistant.components.switch import (
    SwitchEntity,
    SwitchEntityDescription,
    DOMAIN,
)
from homeassistant.const import EntityCategory
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .coordinator import XiaomiCloudMapExtractorDataUpdateCoordinator
from .entity import XiaomiCloudMapExtractorEntity
from .types import XiaomiCloudMapExtractorConfigEntry


@dataclass(frozen=True, kw_only=True)
class XiaomiCloudMapExtractorSwitchEntityDescription(SwitchEntityDescription):
    set_fn: Callable[[XiaomiCloudMapExtractorDataUpdateCoordinator, bool], Coroutine[Any, Any, None]]
    is_on_fn: Callable[[XiaomiCloudMapExtractorDataUpdateCoordinator], bool]


SWITCH_TYPES: tuple[XiaomiCloudMapExtractorSwitchEntityDescription, ...] = (
    XiaomiCloudMapExtractorSwitchEntityDescription(
        key="auto_update",
        translation_key="auto_update",
        set_fn=lambda coordinator, updating: coordinator.set_auto_updating(updating),
        is_on_fn=lambda coordinator: coordinator.is_auto_updating(),
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
        XiaomiCloudMapExtractorSwitchEntity(coordinator, config_entry, description)
        for description in SWITCH_TYPES
    )


class XiaomiCloudMapExtractorSwitchEntity(XiaomiCloudMapExtractorEntity, SwitchEntity):
    entity_description: XiaomiCloudMapExtractorSwitchEntityDescription

    def __init__(
            self,
            coordinator: XiaomiCloudMapExtractorDataUpdateCoordinator,
            config_entry: XiaomiCloudMapExtractorConfigEntry,
            description: XiaomiCloudMapExtractorSwitchEntityDescription,
    ) -> None:
        super().__init__(coordinator, config_entry, DOMAIN, description.key)

        self.entity_description = description

    @property
    def is_on(self) -> bool | None:
        return self.entity_description.is_on_fn(self.coordinator)

    async def async_turn_on(self) -> None:
        await self.entity_description.set_fn(self.coordinator, True)
        await self.coordinator.async_request_refresh()

    async def async_turn_off(self) -> None:
        await self.entity_description.set_fn(self.coordinator, False)
        await self.coordinator.async_request_refresh()
