"""API for Saures"""
import logging
import time
import datetime
import functools
import asyncio
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from .classes import SauresController, SauresSensor
from .const import CONF_BINARY_SENSORS_DEF, CONF_SWITCH_DEF

_LOGGER = logging.getLogger(__name__)


class SauresHA:
    _sid: str
    _debug: bool
    _last_login_time: time
    _binarysensors: dict
    _sensors: dict
    _switches: dict
    _data: dict
    _flats: list
    _hass: object
    _update_lock: bool

    def __init__(self, hass, email, password, is_debug, userflats):
        self._email = email
        self._password = password
        self._debug = is_debug
        self._last_login_time = datetime.datetime(2000, 1, 1, 1, 1, 1)
        self._last_update_time_dict = {}
        self._data = dict()
        self._sensors = dict()
        self._controllers = dict()
        self._binarysensors = dict()
        self._switches = dict()
        self._flats = list()
        self.userflats = userflats
        self._hass = hass
        self._update_lock = False

    def checkflatsfilter(self, filter_flats, flat_id):
        if len(filter_flats) == 0:
            return True

        for i in filter_flats:
            try:
                if i == str(flat_id):
                    return True
            except:
                pass
        return False

    @property
    def flats(self):
        return self._flats

    async def auth(self) -> bool:
        bln_return = False
        try:
            now = datetime.datetime.now()
            period = now - self._last_login_time
            if (period.total_seconds() / 60) > 5:
                clientsession = async_get_clientsession(self._hass)
                self._last_login_time = datetime.datetime.now()
                auth_data = await clientsession.post(
                    "https://api.saures.ru/login",
                    data={"email": self._email, "password": self._password},
                )
                result = await auth_data.json()
                if not result:
                    raise Exception("Invalid credentials")
                if len(result["errors"]) > 0:
                    raise Exception(result["errors"][0]["msg"])
                self._sid = result["data"]["sid"]
                bln_return = result["status"] != "bad"
            else:
                if self._sid == "":
                    bln_return = False
                else:
                    bln_return = True

        except Exception as err:  # catch *all* exceptions
            _LOGGER.error(str(err))

        return bln_return

    async def async_get_flats(self, hass):
        self._flats = dict()
        clientsession = async_get_clientsession(hass)
        if len(self.userflats) == 0:
            try:
                lock = asyncio.Lock()
                async with lock:
                    auth_data = await self.auth()
                if auth_data:
                    flats_data = await clientsession.get(
                        "https://api.saures.ru/1.0/user/objects",
                        params={"sid": self._sid},
                    )

                    result = await flats_data.json()
                    result_data = result["data"]["objects"]
                    self._flats.clear()
                    for val in result_data:
                        self._flats[
                            val.get("id")
                        ] = f"{val.get('label')}:{val.get('house')}:{val.get('number')}"
            except Exception as err:
                if self._debug:
                    _LOGGER.error(str(err))
        else:
            self._flats = self.userflats

        return self._flats

    def checkdict(self, data, value):
        for i in data.keys():
            try:
                if i == value:
                    return True
            except:
                pass
        return False

    # 1.3,1.4,1.5 - счетчик C1
    # 3.1,3.2 - контроллер R1 4 аналоговых канала (снят с продаж в 2017 году)
    # 3.4 - контроллер R1 8 аналоговых каналов (снят с продаж в 2018 году)
    # 3.5 - контроллер R1 4 аналоговых канала
    # 4.0 - контроллер R2 8 аналоговых каналов
    # 4.1 - контроллер R4 2 аналоговых канала и 8 цифровых каналов
    # 6.3 - контроллер R5 8 аналоговых каналов и 8 цифровых каналов
    # 7.2 - контроллер R6 8 аналоговых каналов и 32 цифровых каналов
    # 8.2 - контроллер R7 4 аналоговых канала и 32 цифровых каналов (снят с продаж в 2020 году)
    # 8.3 - контроллер R7 4 аналоговых канала и 32 цифровых каналов
    def get_controller_name(self, version_id):
        return {
            version_id == "1.3"
            or version_id == "1.4"
            or version_id == "1.5": "счетчик C1",
            version_id == "3.1" or version_id == "3.2": "контроллер R1(до 2017)",
            version_id == "3.4": "контроллер R1 8 (2017-2018)",
            version_id == "3.5": "контроллер R1 4 (после 2018))",
            version_id == "4.0": "контроллер R2",
            version_id == "4.1": "контроллер R4",
            version_id == "6.3": "контроллер R5",
            version_id == "7.2": "контроллер R6",
            version_id == "8.2": "контроллер R7(до 2020)",
            version_id == "8.3": "контроллер R7(после 2020)",
        }[True]

    async def set_command(self, meter_id, command_text):
        bln_return = False
        try:
            clientsession = async_get_clientsession(self._hass)
            lock = asyncio.Lock()
            async with lock:
                auth_data = await self.auth()
            if auth_data:
                self._last_login_time = datetime.datetime.now()
                res_data = await clientsession.post(
                    "https://api.saures.ru/1.0/meter/control",
                    data={"sid": self._sid, "id": meter_id, "command": command_text},
                )
                result = await res_data.json()
                if not result:
                    raise Exception("Ошибка выполнения комманды.")

                bln_return = result["status"] != "bad"
                if not bln_return:
                    msg = f'Ошибка выполнения комманды -  command: {command_text} ,meter_id: {meter_id}, ошибка: {result["errors"][0]["msg"]}.'
                    _LOGGER.warning(msg)

        except Exception as err:  # catch *all* exceptions
            if self._debug:
                _LOGGER.error(str(err))

        return bln_return

    async def async_get_data(self, flat_id, reload=False):
        now = datetime.datetime.now()
        if not self.checkdict(self._last_update_time_dict, flat_id):
            self._last_update_time_dict[flat_id] = datetime.datetime(
                2000, 1, 1, 1, 1, 1
            )
        period = now - self._last_update_time_dict[flat_id]
        if (period.total_seconds() / 60) > 5 or reload:
            self._last_update_time_dict[flat_id] = datetime.datetime.now()
            lock = asyncio.Lock()
            async with lock:
                auth_data = await self.auth()
            if auth_data:
                try:
                    clientsession = async_get_clientsession(self._hass)
                    controllers = await clientsession.get(
                        "https://api.saures.ru/1.0/object/meters",
                        params={"id": str(flat_id), "sid": self._sid},
                    )
                    data = await controllers.json()
                    self._data[flat_id] = data["data"]["sensors"]
                except Exception as err:
                    if self._debug:
                        _LOGGER.error(str(err))

        self._update_lock = False
        return self._data[flat_id]

    async def async_get_controllers(self, flat_id):
        lock = asyncio.Lock()
        async with lock:
            controllers = await self.async_get_data(flat_id)

        self._controllers[flat_id] = controllers
        return self._controllers[flat_id]

    def get_controller(self, flat_id, sn):
        controllers = self._controllers[flat_id]
        return next(
            (
                SauresController(controller)
                for controller in controllers
                if controller["sn"] == sn
            ),
            SauresController(dict()),
        )

    async def async_get_binary_sensors(self, flat_id):
        results = list()
        lock = asyncio.Lock()
        async with lock:
            meters = await self.async_get_data(flat_id)
        res = functools.reduce(
            list.__add__, map(lambda sensor: sensor["meters"], meters)
        )
        for obj in res:
            objtype = obj.get("type", {}).get("number")
            if objtype in CONF_BINARY_SENSORS_DEF:
                results.append(obj)

        self._binarysensors[flat_id] = results

        return self._binarysensors[flat_id]

    async def async_get_sensors(self, flat_id):
        results = list()
        lock = asyncio.Lock()
        async with lock:
            meters = await self.async_get_data(flat_id)

        res = functools.reduce(
            list.__add__, map(lambda sensor: sensor["meters"], meters)
        )
        for obj in res:
            objtype = obj.get("type", {}).get("number")
            if (
                objtype not in CONF_BINARY_SENSORS_DEF
                and objtype not in CONF_SWITCH_DEF
            ):
                results.append(obj)

        self._sensors[flat_id] = results

        return self._sensors[flat_id]

    def get_sensor(self, flat_id, sensor_id):
        if flat_id in self._sensors:
            meters = self._sensors[flat_id]
            for obj in meters:
                if obj["meter_id"] == sensor_id:
                    return SauresSensor(obj)
        return SauresSensor(dict())

    def get_binarysensor(self, flat_id, sensor_id):
        if flat_id in self._binarysensors:
            meters = self._binarysensors[flat_id]
            for obj in meters:
                if obj["meter_id"] == sensor_id:
                    return SauresSensor(obj)

        return SauresSensor(dict())

    async def async_get_switches(self, flat_id, reload):
        results = list()
        lock = asyncio.Lock()
        async with lock:
            meters = await self.async_get_data(flat_id)
        res = functools.reduce(
            list.__add__, map(lambda sensor: sensor["meters"], meters)
        )
        for obj in res:
            if obj.get("type", {}).get("number") in CONF_SWITCH_DEF:
                results.append(obj)

        self._switches[flat_id] = results
        return self._switches[flat_id]

    def get_switch(self, flat_id, switch_id):
        if flat_id in self._switches:
            meters = self._switches[flat_id]
            for obj in meters:
                if obj["meter_id"] == switch_id:
                    return SauresSensor(obj)
        return SauresSensor(dict())

    async def async_fetch_data(self):
        try:
            lock = asyncio.Lock()
            async with lock:
                auth_data = await self.auth()
            if auth_data:
                flats = await self.async_get_flats(self._hass)
                self._flats = flats
                for curflat in flats:
                    await self.async_get_controllers(curflat)
                    await self.async_get_sensors(curflat)
                    await self.async_get_binary_sensors(curflat)
                    await self.async_get_switches(curflat, False)
        except Exception:
            _LOGGER.exception("Error load data")
