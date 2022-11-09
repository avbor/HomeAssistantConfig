"""
Provides entities
"""

import logging
import datetime
import asyncio
from datetime import timedelta
from homeassistant.helpers.entity import Entity, DeviceInfo
from homeassistant.components.switch import SwitchEntity
from homeassistant.components.binary_sensor import BinarySensorDeviceClass
from homeassistant.helpers.event import async_track_time_interval
from homeassistant.util import slugify
from homeassistant.const import ATTR_BATTERY_LEVEL

from .api import SauresHA
from .const import (
    CONF_COMMAND_ACTIVATE,
    CONF_COMMAND_DEACTIVATE,
    DOMAIN,
    CONF_BINARY_SENSOR_DEV_CLASS_MOISTURE_DEF,
    CONF_BINARY_SENSOR_DEV_CLASS_OPENING_DEF,
)

_LOGGER = logging.getLogger(__name__)


class SauresSensor(Entity):
    """Representation of a Sensor."""

    _state: str

    def __init__(
        self,
        hass,
        controller,
        flat_id,
        meter_id,
        sn,
        counter_name,
        is_debug,
        scan_interval,
    ):
        """Initialize the sensor."""

        self.controller: SauresHA = controller
        self.flat_id = flat_id
        self.serial_number = str(sn)
        self.counter_name = counter_name
        self.isStart = True
        self.isDebug = is_debug
        self._attributes = dict()
        self._state = ""
        self.meter_id = meter_id
        self.scan_interval = scan_interval

        self._unique_id = slugify(f"sauresha_{flat_id}_{meter_id}")

        self.set_scan_interval(hass, timedelta(minutes=scan_interval))

    def set_scan_interval(self, hass: object, scan_interval: timedelta):
        """Update scan interval."""

        async def refresh(event_time):
            await self.async_update()

        if self.isDebug:
            _LOGGER.warning("Scan_interval = %s", str(scan_interval))

        async_track_time_interval(hass, refresh, scan_interval)

    @property
    def unique_id(self):
        """Return a unique ID to use for this sensor."""
        return f"sauresha_{self.flat_id}_{self.meter_id}"

    @property
    def current_meter(self):
        return self.controller.get_sensor(self.flat_id, self.meter_id)

    @property
    def name(self):
        if not self.counter_name:
            self.counter_name = f" [{self.flat_id}] [{self.meter_id}]"
        return f"[SAURES] {self.counter_name}"

    @property
    def state(self):
        """Return the state of the sensor."""
        return self._state

    @property
    def icon(self):
        return "mdi:counter"

    @property
    def extra_state_attributes(self):
        return self._attributes

    async def async_fetch_state(self):
        """Retrieve latest state."""
        str_return_value = "Unknown"

        if self.isDebug:
            _LOGGER.warning("Update Start meter_id: %s", str(self.meter_id))

        try:

            lock = asyncio.Lock()
            async with lock:
                await self.controller.async_fetch_data()

            meter = self.current_meter
            str_return_value = meter.value
            if meter.type_number == 8:
                self._attributes.update(
                    {
                        "friendly_name": meter.name,
                        "condition": meter.state,
                        "sn": meter.sn,
                        "type": meter.type,
                        "meter_id": meter.meter_id,
                        "input": meter.input,
                        "approve_dt": meter.approve_dt,
                        "t1": meter.t1,
                        "t2": meter.t2,
                        "t3": meter.t3,
                        "t4": meter.t4,
                    }
                )
            else:
                self._attributes.update(
                    {
                        "friendly_name": meter.name,
                        "condition": meter.state,
                        "sn": meter.sn,
                        "type": meter.type,
                        "meter_id": meter.meter_id,
                        "input": meter.input,
                        "approve_dt": meter.approve_dt,
                    }
                )
            if self.isStart:
                if meter.type_number == 1 or meter.type_number == 2:
                    self._attributes.update(
                        {"unit_of_measurement": "m³",
                         "device_class": "water",
                         "state_class": "total_increasing"}
                    )
                elif meter.type_number == 3:
                    self._attributes.update(
                        {
                            "unit_of_measurement": "m³",
                            "device_class": "gas",
                            "state_class": "total_increasing",
                        }
                    )
                elif meter.type_number == 5:
                    self._attributes.update({"unit_of_measurement": "°C"})
                elif meter.type_number == 8:
                    self._attributes.update(
                        {
                            "unit_of_measurement": "kWh",
                            "device_class": "energy",
                            "state_class": "total_increasing",
                        }
                    )

                self.isStart = False

            self._attributes.update({"last_update_time": datetime.datetime.now()})

            self._attributes.update(
                {
                    "next_update_time": datetime.datetime.now()
                    + timedelta(minutes=self.scan_interval)
                }
            )
            if self.isDebug:
                _LOGGER.warning("Update Finish meter_id: %s", str(self.meter_id))

        except Exception as e:
            _LOGGER.error(e)

        return str_return_value

    async def async_update(self):
        self._state = await self.async_fetch_state()


class SauresBinarySensor(Entity):
    """Representation of a BinarySensor."""

    def __init__(
        self,
        hass,
        controller,
        flat_id,
        object_type,
        meter_id,
        serial_number,
        counter_name,
        is_debug,
        scan_interval,
    ):
        """Initialize the sensor."""

        self.controller: SauresHA = controller
        self.flat_id = flat_id
        self.object_type = object_type
        self.meter_id = meter_id
        self.serial_number = serial_number
        self.counter_name = counter_name
        self._attributes = dict()
        self.isDebug = is_debug
        self._state = False
        self.isStart = True
        self.scan_interval = scan_interval

        self._unique_id = slugify(f"sauresha_{flat_id}_{meter_id}")

        self.set_scan_interval(hass, timedelta(minutes=self.scan_interval))

    def set_scan_interval(self, hass: object, scan_interval: timedelta):
        """Update scan interval."""

        async def refresh(event_time):
            await self.async_update()

        if self.isDebug:
            _LOGGER.warning("Scan_interval = %s", str(scan_interval))

        async_track_time_interval(hass, refresh, scan_interval)

    @property
    def current_sensor(self):
        return self.controller.get_binarysensor(self.flat_id, self.meter_id)

    @property
    def unique_id(self):
        """Return a unique ID to use for this sensor."""
        return f"sauresha_{self.flat_id}_{self.meter_id}"

    @property
    def current_meter(self):
        return self.controller.get_sensor(self.flat_id, self.meter_id)

    @property
    def name(self):
        """Return the entity_id of the sensor."""
        if not self.counter_name:
            self.counter_name = f" [{self.flat_id}] [{self.meter_id}]"
        return f"[SAURES] {self.counter_name}"

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
    def device_class(self):
        if self.object_type in CONF_BINARY_SENSOR_DEV_CLASS_MOISTURE_DEF:
            return BinarySensorDeviceClass.MOISTURE
        elif self.object_type in CONF_BINARY_SENSOR_DEV_CLASS_OPENING_DEF:
            return BinarySensorDeviceClass.OPENING
        else:
            return "None"

    @property
    def extra_state_attributes(self):
        return self._attributes

    async def async_fetch_state(self):
        """Retrieve latest state."""
        if self.isDebug:
            _LOGGER.warning("Update Start meter_id: %s", str(self.meter_id))

        lock = asyncio.Lock()
        async with lock:
            await self.controller.async_fetch_data()

        meter = self.current_sensor
        return_value = meter.value
        self._attributes.update(
            {
                "friendly_name": meter.name,
                "condition": meter.state,
                "sn": meter.sn,
                "type": meter.type,
                "meter_id": meter.meter_id,
                "input": meter.input,
            }
        )
        if meter.state is not None:
            if meter.state.upper() == "ОБРЫВ":
                return_value = True
        else:
            _LOGGER.error("API ERROR during Auth process")

        if self.isStart:
            if meter.type_number == 10:
                self._attributes.update(
                    {
                        "device_class": "opening",
                    }
                )
            self.isStart = False

        self._attributes.update({"last_update_time": datetime.datetime.now()})

        self._attributes.update(
            {
                "next_update_time": datetime.datetime.now()
                + timedelta(minutes=self.scan_interval)
            }
        )
        if self.isDebug:
            _LOGGER.warning("Update Finish meter_id: %s", str(self.meter_id))

        return return_value

    async def async_update(self):
        self._state = await self.async_fetch_state()


class SauresControllerSensor(Entity):
    """Representation of a Sensor."""

    _state: str

    def __init__(
        self,
        hass,
        controller,
        flat_id,
        sn,
        counter_name,
        is_debug,
        scan_interval,
    ):
        """Initialize the sensor."""
        self.controller: SauresHA = controller
        self.flat_id = flat_id
        self.serial_number = str(sn)
        self.counter_name = str(counter_name)
        self._state = ""
        self.isDebug = is_debug
        self._attributes = dict()
        self.scan_interval = scan_interval

        self._unique_id = slugify(f"sauresha_{flat_id}_{sn}")

        self.set_scan_interval(hass, timedelta(minutes=scan_interval))

    def set_scan_interval(self, hass: object, scan_interval: timedelta):
        """Update scan interval."""

        async def refresh(event_time):
            await self.async_update()

        if self.isDebug:
            _LOGGER.warning("Scan_interval = %s", str(scan_interval))

        async_track_time_interval(hass, refresh, scan_interval)

    @property
    def current_controller_info(self):
        return self.controller.get_controller(self.flat_id, self.serial_number)

    @property
    def device_info(self) -> DeviceInfo:
        """Return a description for device registry."""
        my_controller = self.current_controller_info
        info = DeviceInfo(
            identifiers={
                # Serial numbers are unique identifiers within a specific domain
                (DOMAIN, self.unique_id)
            },
            name=self.name,
            manufacturer="SAURES",
            model=self.controller.get_controller_name(my_controller.hardware),
            sw_version=my_controller.firmware,
            via_device=(
                DOMAIN,
                f"[{self.controller.get_controller_name(my_controller.hardware)}]:[{self.serial_number}]",
            ),
        )

        return info

    @property
    def unique_id(self):
        """Return the entity_id of the sensor."""
        return f"sauresha_contr_{self.flat_id}_{self.serial_number}"

    @property
    def name(self):
        """Return the entity_id of the sensor."""
        if not self.counter_name:
            self.counter_name = f" [{self.flat_id}] [{self.serial_number}]"
        return f"[SAURES] {self.counter_name}"

    @property
    def state(self):
        """Return the state of the sensor."""
        return self._state

    @property
    def icon(self):
        return "mdi:home-circle"

    @property
    def extra_state_attributes(self):
        return self._attributes

    async def async_fetch_state(self):
        """Retrieve latest state."""
        str_return_value = "Unknown"
        if self.isDebug:
            _LOGGER.warning("Update Start sn: %s", str(self.serial_number))

        lock = asyncio.Lock()
        async with lock:
            await self.controller.async_fetch_data()

        my_controller = self.current_controller_info
        str_return_value = my_controller.state
        self._attributes.update(
            {
                "friendly_name": self.counter_name,
                ATTR_BATTERY_LEVEL: my_controller.battery,
                "condition": my_controller.state,
                "sn": my_controller.sn,
                "local_ip": my_controller.local_ip,
                "firmware": my_controller.firmware,
                "ssid": my_controller.ssid,
                "readout_dt": my_controller.readout_dt,
                "request_dt": my_controller.request_dt,
                "rssi": my_controller.rssi,
                "hardware": my_controller.hardware,
                "hardware_name": self.controller.get_controller_name(
                    my_controller.hardware
                ),
                "new_firmware": my_controller.new_firmware,
                "last_connection": my_controller.last_connection,
                "last_connection_warning": my_controller.last_connection_warning,
                "check_hours": my_controller.check_hours,
                "check_period_display": my_controller.check_period_display,
                "requests": my_controller.requests,
                "log": my_controller.log,
                "cap_state": my_controller.cap_state,
                "power_supply": my_controller.power_supply,
            }
        )
        self._attributes.update({"last_update_time": datetime.datetime.now()})

        self._attributes.update(
            {
                "next_update_time": datetime.datetime.now()
                + timedelta(minutes=self.scan_interval)
            }
        )
        if self.isDebug:
            _LOGGER.warning("Update Finish sn: %s", str(self.serial_number))
        return str_return_value

    async def async_update(self):
        self._state = await self.async_fetch_state()


class SauresSwitch(SwitchEntity):
    """Representation of a Switch."""

    _state: str

    def __init__(
        self,
        hass,
        controller,
        flat_id,
        meter_id,
        sn,
        counter_name,
        is_debug,
        scan_interval,
    ):
        """Initialize the switch."""

        self.controller: SauresHA = controller
        self.flat_id = flat_id
        self.serial_number = str(sn)
        self.counter_name = counter_name
        self.isStart = True
        self.isDebug = is_debug
        self._attributes = dict()
        self._state = ""
        self.meter_id = meter_id
        self.scan_interval = scan_interval

        self._unique_id = slugify(f"sauresha_{flat_id}_{meter_id}")
        self.set_scan_interval(hass, timedelta(minutes=scan_interval))

    def set_scan_interval(self, hass: object, scan_interval: timedelta):
        """Update scan interval."""

        async def refresh(event_time):
            await self.async_update()

        if self.isDebug:
            _LOGGER.warning("Scan_interval = %s", str(scan_interval))

        async_track_time_interval(hass, refresh, scan_interval)

    @property
    def current_meter(self):
        return self.controller.get_switch(self.flat_id, self.meter_id)

    @property
    def unique_id(self):
        """Return a unique ID to use for this sensor."""
        return self._unique_id

    @property
    def name(self):
        """Return the entity_id of the sensor."""
        if not self.counter_name:
            self.counter_name = f" [{self.flat_id}] [{self.meter_id}]"
        return f"[SAURES] {self.counter_name}"

    async def async_turn_on(self, **kwargs) -> None:
        """Turn the entity on."""
        result = await self.controller.set_command(self.meter_id, CONF_COMMAND_ACTIVATE)
        if result:
            await self.controller.async_get_switches(self.flat_id, True)

    async def async_turn_off(self, **kwargs) -> None:
        """Turn the entity off."""
        result = await self.controller.set_command(
            self.meter_id, CONF_COMMAND_DEACTIVATE
        )
        if result:
            await self.controller.async_get_switches(self.flat_id, True)

    @property
    def is_on(self):
        """Return true if the binary sensor is on."""
        cur_StringValue = str(self._state)
        if cur_StringValue.isnumeric():
            return bool(int(self._state))
        else:
            return False

    @property
    def icon(self):
        return "mdi:switch"

    @property
    def extra_state_attributes(self):
        return self._attributes

    async def async_fetch_state(self):
        """Retrieve latest state."""
        str_return_value = "Unknown"

        if self.isDebug:
            _LOGGER.warning("Update Start meter_id: %s", str(self.meter_id))

        lock = asyncio.Lock()
        async with lock:
            await self.controller.async_fetch_data()

        meter = self.current_meter
        str_return_value = meter.value
        if meter.type_number == 8:
            self._attributes.update(
                {
                    "friendly_name": meter.name,
                    "condition": meter.state,
                    "sn": meter.sn,
                    "type": meter.type,
                    "meter_id": meter.meter_id,
                    "input": meter.input,
                    "approve_dt": meter.approve_dt,
                    "t1": meter.t1,
                    "t2": meter.t2,
                    "t3": meter.t3,
                    "t4": meter.t4,
                }
            )
        else:
            self._attributes.update(
                {
                    "friendly_name": meter.name,
                    "condition": meter.state,
                    "sn": meter.sn,
                    "type": meter.type,
                    "meter_id": meter.meter_id,
                    "input": meter.input,
                    "approve_dt": meter.approve_dt,
                }
            )
            self.isStart = False

        self._attributes.update({"last_update_time": datetime.datetime.now()})

        self._attributes.update(
            {
                "next_update_time": datetime.datetime.now()
                + timedelta(minutes=self.scan_interval)
            }
        )
        if self.isDebug:
            _LOGGER.warning("Update Finish meter_id: %s", str(self.meter_id))
        return str_return_value

    async def async_update(self):
        self._state = await self.async_fetch_state()
