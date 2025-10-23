from __future__ import annotations

from typing import Any

from homeassistant.const import (
    CONF_TOKEN,
    CONF_PASSWORD,
    CONF_USERNAME,
    CONF_MAC,
    CONF_DEVICE_ID,
    CONF_HOST,
    CONF_NAME,
)
from homeassistant.core import HomeAssistant

from .types import XiaomiCloudMapExtractorConfigEntry


async def async_get_config_entry_diagnostics(
        hass: HomeAssistant, entry: XiaomiCloudMapExtractorConfigEntry
) -> dict[str, Any]:
    """Return diagnostics for a config entry."""
    coordinator = entry.runtime_data.coordinator

    entry_data = entry.as_dict()
    entry_data["data"].pop(CONF_HOST)
    entry_data["data"].pop(CONF_NAME)
    entry_data["data"].pop(CONF_TOKEN)
    entry_data["data"].pop(CONF_DEVICE_ID)
    entry_data["data"].pop(CONF_PASSWORD)
    entry_data["data"].pop(CONF_USERNAME)
    entry_data["data"].pop(CONF_MAC)
    entry_data.pop("unique_id")
    return {
        "config_entry_data": entry_data,
        "device_data": coordinator.data.as_dict(),
    }
