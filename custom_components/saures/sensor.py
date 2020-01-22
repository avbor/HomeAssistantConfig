from homeassistant.components.sensor import PLATFORM_SCHEMA
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.entity import Entity

from homeassistant.const import (
    CONF_EMAIL,  
    CONF_PASSWORD
)

import voluptuous as vol

from . import (
    CONF_FLAT_ID, 
    CONF_SERIAL_NUMBERS
)

import logging

_LOGGER = logging.getLogger(__name__)

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Required(CONF_EMAIL): cv.string,
    vol.Required(CONF_PASSWORD): cv.string,
    vol.Required(CONF_FLAT_ID): cv.positive_int,
    vol.Optional(CONF_SERIAL_NUMBERS): cv.ensure_list                   
})

def setup_platform(hass, config, add_entities, discovery_info=None):
    """Setup the sensor platform."""

    from .saures import Saures
    
    flat_id = config.get(CONF_FLAT_ID)
    serial_numbers = config.get(CONF_SERIAL_NUMBERS, [])
    
    controller = Saures(
        config.get('email'),
        config.get('password')
    )

    create_sensor = lambda serial_number: SauresSensor(controller, flat_id, serial_number)
    sensors = list(map(create_sensor, serial_numbers))

    if sensors: add_entities(sensors, True)
        
class SauresSensor(Entity):
    """Representation of a Sensor."""

    def __init__(self, controller, flat_id, serial_number):
        """Initialize the sensor."""

        self.controller = controller
        self.flat_id = flat_id
        self.serial_number = serial_number
        meter = self.current_meter
        self._state = meter.value
        self._attributes = dict()
        self._attributes.update({
            'friendly_name': meter.name,
            'condition': meter.state,
            'sn': meter.sn,
            'type': meter.type,
            'meter_id': meter.id
        })
        if meter.type_number == 1 or meter.type_number == 2:
            self._attributes.update({
                'unit_of_measurement': 'м³'
            })

    @property
    def current_meter(self):
        return self.controller.get_meter(self.flat_id, self.serial_number)

    @property
    def entity_id(self):
        """Return the entity_id of the sensor."""
        sn = self.serial_number.replace('-', '_')
        return f'sensor.saures_{self.flat_id}_{sn}'

    @property
    def state(self):
        """Return the state of the sensor."""
        return self._state

    @property
    def icon(self):
        return 'mdi:counter'

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
            'meter_id': meter.id
        })
        self._state = meter.value