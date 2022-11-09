"""Support for Saures Connect appliances."""

import logging
from homeassistant.config_entries import SOURCE_IMPORT, ConfigEntry
from homeassistant import config_entries

from homeassistant.core import HomeAssistant
from homeassistant.const import CONF_EMAIL, CONF_PASSWORD, CONF_SCAN_INTERVAL

from .api import SauresHA
from .const import (
    DOMAIN,
    CONF_DEBUG,
    CONF_FLATS,
    CONF_FLAT_ID,
    CONF_ISDEBUG,
    STARTUP_MESSAGE,
    PLATFORMS,
    COORDINATOR,
)

_LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up component."""

    domain_config = config.get("sensor")
    if not domain_config:
        return True

    yaml_config = {}
    hass.data[DOMAIN] = yaml_config

    for user_cfg in domain_config:
        if not user_cfg:
            continue
        if not user_cfg.get(CONF_EMAIL):
            continue
        if not user_cfg.get(CONF_PASSWORD):
            continue

        yaml_email: str = user_cfg[CONF_EMAIL]
        yaml_password: str = user_cfg[CONF_PASSWORD]
        yaml_flatid = user_cfg[CONF_FLAT_ID]

        user_input = {
            CONF_EMAIL: yaml_email,
            CONF_PASSWORD: yaml_password,
            CONF_SCAN_INTERVAL: 30,
            CONF_FLATS: yaml_flatid,
        }
        hass.async_create_task(
            hass.config_entries.flow.async_init(
                DOMAIN,
                context={
                    "source": config_entries.SOURCE_IMPORT,
                    "title": user_input[CONF_EMAIL],
                },
                data=user_input,
            )
        )

    # Print startup messages
    hass.data.setdefault(DOMAIN, {})
    _LOGGER.info(STARTUP_MESSAGE)
    # Clean up old imports from configuration.yaml
    for entry in hass.config_entries.async_entries(DOMAIN):
        if entry.source == SOURCE_IMPORT:
            await hass.config_entries.async_remove(entry.entry_id)

    return True


async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> bool:
    cur_config = config_entry.data
    cur_options = config_entry.options
    curFlats = {}
    if cur_options.get(CONF_FLATS):
        curFlats = cur_options.get(CONF_FLATS)

    SauresAPI: SauresHA = SauresHA(
        hass,
        cur_config.get(CONF_EMAIL),
        cur_config.get(CONF_PASSWORD),
        CONF_ISDEBUG,
        curFlats,
    )
    await SauresAPI.async_fetch_data()

    hass.data[DOMAIN] = {
        CONF_SCAN_INTERVAL: cur_config.get(CONF_SCAN_INTERVAL),
        CONF_DEBUG: CONF_ISDEBUG,
        COORDINATOR: SauresAPI,
    }
    hass.config_entries.async_setup_platforms(config_entry, PLATFORMS)
    return True


async def async_migrate_entry(hass, config_entry: ConfigEntry):
    return True
