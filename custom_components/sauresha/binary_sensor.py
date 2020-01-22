#Provides a binary sensor for Saures.
import logging

_LOGGER = logging.getLogger(__name__)

from homeassistant.components.binary_sensor import PLATFORM_SCHEMA
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.entity import Entity

from homeassistant.const import (
    CONF_EMAIL,  
    CONF_PASSWORD
)

import voluptuous as vol

from . import (
    CONF_FLAT_ID, 
    CONF_COUNTERS_SN,
)


PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Required(CONF_EMAIL): cv.string,
    vol.Required(CONF_PASSWORD): cv.string,
    vol.Required(CONF_FLAT_ID): cv.positive_int,
    vol.Optional(CONF_COUNTERS_SN): cv.ensure_list                  
})


def setup_platform(hass, config, add_entities, discovery_info=None):
    """Setup the sensor platform."""

    from .sauresha import SauresHA
    
    flat_id = config.get(CONF_FLAT_ID)
    serial_numbers = config.get(CONF_COUNTERS_SN, [])

    controller = SauresHA(
        config.get('email'),
        config.get('password')
    )

    if int(flat_id)==0: 
        flats=controller.get_flats()
        if len(flats)==1: 
            flat_id=str(flats[0].get('id'))
            strHouse = str(flats[0].get('house'))
            _LOGGER.warning("ID flat:" + strHouse + " : " + flat_id)
        else: 
            for val in flats:
                _LOGGER.warning("ID flat:" + str(val.get('house')) + " : " + str(val.get('id')))

    if int(flat_id)>0:        
        create_sensor = lambda serial_number: SauresBinarySensor(controller, flat_id, serial_number)
        sensors = list(map(create_sensor, serial_numbers))

        if sensors: add_entities(sensors, True)
       
class SauresBinarySensor(Entity):
    """Representation of a BinarySensor."""

    def __init__(self, controller, flat_id, serial_number):
        """Initialize the sensor."""

        self.controller = controller
        self.flat_id = flat_id
        self.serial_number = str(serial_number)
        meter = self.current_meter
        self._state = meter.value
        self._attributes = dict()
        self._attributes.update({
            'friendly_name': meter.name,
            'condition': meter.state,
            'sn': meter.sn,
            'type': meter.type,
            'meter_id': meter.id,
            'input': meter.input
        })


    @property
    def current_meter(self):
        return self.controller.get_meter(self.flat_id, self.serial_number)

    @property
    def entity_id(self):
        """Return the entity_id of the sensor."""
        sn = self.serial_number.replace('-', '_').lower()
        return f'binary_sensor.sauresha_{self.flat_id}_{sn}'

    @property
    def is_on(self):
        """Return true if the binary sensor is on."""
        return bool(self._state)

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

    def update(self):
        """Fetch new state data for the sensor.
        This is the only method that should fetch new data for Home Assistant.
        """
        meter = self.current_meter
        self._attributes.update({
            'friendly_name': meter.name,
            'condition': meter.state,
            'sn': meter.sn,
            'type': meter.type,
            'meter_id': meter.id,
            'input': meter.input
        })
        self._state = meter.value
