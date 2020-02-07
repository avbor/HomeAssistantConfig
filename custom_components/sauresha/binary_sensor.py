import logging
from typing import List, Any, Callable
import homeassistant.components.binary_sensor
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.entity import Entity
import voluptuous as vol
import re

from homeassistant.const import (
    CONF_PASSWORD,
    CONF_EMAIL
)

from . import (
    CONF_FLAT_ID,
    CONF_COUNTERS_SN,
    CONF_DEBUG
)

_LOGGER = logging.getLogger(__name__)

PLATFORM_SCHEMA = homeassistant.components.binary_sensor.PLATFORM_SCHEMA.extend({
    vol.Required(CONF_EMAIL): cv.string,
    vol.Required(CONF_PASSWORD): cv.string,
    vol.Required(CONF_FLAT_ID): cv.positive_int,
    vol.Optional(CONF_COUNTERS_SN): cv.ensure_list,
    vol.Optional(CONF_DEBUG, default=False): cv.boolean,
})


def setup_platform(hass, config, add_entities, discovery_info=None):
    """Setup the sensor platform."""

    from .sauresha import SauresHA

    flat_id = config.get(CONF_FLAT_ID)
    serial_numbers = config.get(CONF_COUNTERS_SN, [])
    _hass = hass
    _discovery_info = discovery_info
    is_debug = config.get(CONF_DEBUG)

    controller = SauresHA(
        config.get('email'),
        config.get('password'),
        is_debug
    )

    if int(flat_id) == 0:
        flats = controller.get_flats()
        if len(flats) == 1:
            flat_id = str(flats[0].get('id'))
            str_house = str(flats[0].get('house'))
            _LOGGER.warning("ID flat:" + str_house + " : " + flat_id)
        else:
            for val in flats:
                _LOGGER.warning("ID flat:" + str(val.get('house')) + " : " + str(val.get('id')))

    if int(flat_id) > 0:
        create_sensor: Callable[[Any], SauresBinarySensor] = lambda serial_number: SauresBinarySensor(controller,
                                                                                                      flat_id,
                                                                                                      serial_number,
                                                                                                      is_debug)
        sensors: List[SauresBinarySensor] = list(map(create_sensor, serial_numbers))

        if sensors:
            add_entities(sensors, True)


class SauresBinarySensor(Entity):
    """Representation of a BinarySensor."""

    def __init__(self, controller, flat_id, serial_number, is_debug):
        """Initialize the sensor."""

        self.controller = controller
        self.flat_id = flat_id
        self.serial_number = str(serial_number)
        self._attributes = dict()
        self.isDebug = is_debug

    @property
    def current_meter(self):
        return self.controller.get_meter(self.flat_id, self.serial_number)

    @property
    def entity_id(self):
        """Return the entity_id of the sensor."""
        sn = self.serial_number.replace('-', '_')
        reg = re.compile('[^a-zA-Z0-9]')
        sn = reg.sub('', sn).lower()
        return f'binary_sensor.sauresha_{self.flat_id}_{sn}'

    @property
    def is_on(self):
        """Return true if the binary sensor is on."""
        return bool(int(self._state))

    @property
    def state(self):
        """Return the state of the sensor."""
        return bool(int(self._state))

    @property
    def available(self):
        """Return true if the binary sensor is available."""
        return self._state is not None

    @property
    def icon(self):
        return 'mdi:alarm-check'

    @property
    def device_state_attributes(self):
        return self._attributes

    def fetch_state(self):
        """Retrieve latest state."""
        return_value = False
        if self.controller.re_auth:
            meter = self.current_meter
            return_value = meter.value
            self._attributes.update({
                'friendly_name': meter.name,
                'condition': meter.state,
                'sn': meter.sn,
                'type': meter.type,
                'meter_id': meter.id,
                'input': meter.input
            })
        else:
            _LOGGER.error("API ERROR during fetch state process")
        return return_value

    def update(self):
        self._state = self.fetch_state()
