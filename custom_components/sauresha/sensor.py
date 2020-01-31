#Provides a sensor for Saures.
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
    CONF_COUNTERS_SN,
    CONF_CONTROLLERS_SN
)

import logging

_LOGGER = logging.getLogger(__name__)

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Required(CONF_EMAIL): cv.string,
    vol.Required(CONF_PASSWORD): cv.string,
    vol.Required(CONF_FLAT_ID): cv.positive_int,
    vol.Optional(CONF_COUNTERS_SN): cv.ensure_list,
    vol.Optional(CONF_CONTROLLERS_SN): cv.ensure_list                    
})

def setup_platform(hass, config, add_entities, discovery_info=None):
    """Setup the sensor platform."""

    from .sauresha import SauresHA
    
    flat_id = config.get(CONF_FLAT_ID)
    serial_numbers = config.get(CONF_COUNTERS_SN, [])
    sns = config.get(CONF_CONTROLLERS_SN, [])

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
        create_sensor = lambda serial_number: SauresSensor(controller, flat_id, serial_number)
        sensors = list(map(create_sensor, serial_numbers))

        if sensors: add_entities(sensors, True)

        create_myController = lambda sn: SauresControllerSensor(controller, flat_id, sn)
        myControllers = list(map(create_myController, sns))

        if myControllers: add_entities(myControllers, True)
        
class SauresSensor(Entity):
    """Representation of a Sensor."""

    def __init__(self, controller, flat_id, serial_number):
        """Initialize the sensor."""

        self.controller = controller
        self.flat_id = flat_id
        self.serial_number = str(serial_number)
        meter = self.current_meter
        self._state = meter.value
        self._attributes = dict()
        if meter.type_number==8:
            self._attributes.update({
                'friendly_name': meter.name,
                'condition': meter.state,
                'sn': meter.sn,
                'type': meter.type,
                'meter_id': meter.id,
                'input': meter.input,
                't1': meter.t1,
                't2': meter.t2,
                't3': meter.t3,
                't4': meter.t4
            })
        else:
               self._attributes.update({
                'friendly_name': meter.name,
                'condition': meter.state,
                'sn': meter.sn,
                'type': meter.type,
                'meter_id': meter.id,
                'input': meter.input,
            })
        if meter.type_number == 1 or meter.type_number == 2 or meter.type_number == 3:
            self._attributes.update({
                'unit_of_measurement': 'м³'}) 
        elif meter.type_number == 5:
             self._attributes.update({
                'unit_of_measurement': '°C'})
        elif meter.type_number == 8:
             self._attributes.update({
                'unit_of_measurement': 'кВт·ч'})

    @property
    def current_meter(self):
        return self.controller.get_meter(self.flat_id, self.serial_number)

    @property
    def entity_id(self):
        """Return the entity_id of the sensor."""
        sn = self.serial_number.replace('-', '_').lower()
        return f'sensor.sauresha_{self.flat_id}_{sn}'

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
        if meter.type_number==8:
            self._attributes.update({
                'friendly_name': meter.name,
                'condition': meter.state,
                'sn': meter.sn,
                'type': meter.type,
                'meter_id': meter.id,
                'input': meter.input,
                't1': meter.t1,
                't2': meter.t2,
                't3': meter.t3,
                't4': meter.t4
            })
        else:
               self._attributes.update({
                'friendly_name': meter.name,
                'condition': meter.state,
                'sn': meter.sn,
                'type': meter.type,
                'meter_id': meter.id,
                'input': meter.input,
            })
        self._state = meter.value

class SauresControllerSensor(Entity):
    """Representation of a Sensor."""

    def __init__(self, controller, flat_id, serial_number):
        """Initialize the sensor."""

        self.controller = controller
        self.flat_id = flat_id
        self.serial_number = str(serial_number)
        myController = self.current_controllerInfo
        self._state = myController.state
        self._attributes = dict()
        self._attributes.update({
            'battery_level': myController.batery,
            'condition': myController.state,
            'sn': myController.sn,
            'local_ip': myController.local_ip,
            'last_connection': myController.last_connection,
            'firmware':  myController.firmware,
            'ssid':  myController.ssid,
            'readout_dt':  myController.readout_dt,
            'request_dt':  myController.request_dt,
            'rssi':  myController.rssi,
            'hardware':  myController.hardware,
            'new_firmware':  myController.new_firmware
        })

    @property
    def current_controllerInfo(self):
        return self.controller.get_controller(self.flat_id, self.serial_number)

    @property
    def entity_id(self):
        """Return the entity_id of the sensor."""
        sn = self.serial_number.replace('-', '_').lower()
        return f'sensor.sauresha_contr_{sn}'

    @property
    def state(self):
        """Return the state of the sensor."""
        return self._state

    @property
    def icon(self):
        return 'mdi:xbox-controller-view'

    @property
    def device_state_attributes(self):
        return self._attributes

    def update(self):
        """Fetch new state data for the sensor.
        This is the only method that should fetch new data for Home Assistant.
        """
        myController = self.current_controllerInfo
        self._attributes.update({
            'battery_level': myController.batery,
            'condition': myController.state,
            'sn': myController.sn,
            'local_ip': myController.local_ip,
            'last_connection': myController.last_connection,
            'firmware':  myController.firmware,
            'ssid':  myController.ssid,
            'readout_dt':  myController.readout_dt,
            'request_dt':  myController.request_dt,
            'rssi':  myController.rssi,
            'hardware':  myController.hardware,
            'new_firmware':  myController.new_firmware
        })
        self._state = myController.state
