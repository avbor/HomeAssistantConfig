import logging
from homeassistant.const import CONF_SCAN_INTERVAL
from datetime import timedelta
from homeassistant.core import HomeAssistant

from .const import DOMAIN, COORDINATOR, CONF_ISDEBUG
from .api import SauresHA
from .entity import SauresSwitch

SCAN_INTERVAL = timedelta(minutes=20)

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(hass: HomeAssistant, config_entry, async_add_entities):
    """Setup switch platform."""
    my_sensors: list = []
    is_debug = CONF_ISDEBUG
    scan_interval = config_entry.data.get(CONF_SCAN_INTERVAL)

    controller: SauresHA = hass.data[DOMAIN].get(COORDINATOR)
    for curflat in controller.flats:
        try:
            sensors = await controller.async_get_switches(curflat, False)
            for curSensor in sensors:
                sensor = SauresSwitch(
                    hass,
                    controller,
                    curflat,
                    curSensor.get("meter_id"),
                    curSensor.get("sn"),
                    curSensor.get("meter_name"),
                    is_debug,
                    scan_interval,
                )
                my_sensors.append(sensor)
        except Exception:
            _LOGGER.exception(str(Exception))

    if my_sensors:
        async_add_entities(my_sensors, True)
