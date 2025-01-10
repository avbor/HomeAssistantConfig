"""Helper classes for Yandex Smart Home integration."""

from __future__ import annotations

from dataclasses import dataclass
from enum import StrEnum
from typing import TYPE_CHECKING, Any, Protocol, TypeVar
from urllib.parse import urlparse

from homeassistant.core import Context, HomeAssistant, callback
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import area_registry as ar, device_registry as dr, entity_registry as er
from homeassistant.helpers.storage import Store

from .const import DOMAIN
from .schema import ResponseCode

if TYPE_CHECKING:
    from .entry_data import ConfigEntryData

STORE_CACHE_ATTRS = "attrs"


@callback
def _get_registry_entries(hass: HomeAssistant, entity_id: str) -> tuple[
    er.RegistryEntry | None,
    dr.DeviceEntry | None,
    ar.AreaEntry | None,
]:
    """Get registry entries."""
    ent_reg = er.async_get(hass)
    dev_reg = dr.async_get(hass)
    area_reg = ar.async_get(hass)

    if (entity_entry := ent_reg.async_get(entity_id)) and entity_entry.device_id:
        device_entry = dev_reg.devices.get(entity_entry.device_id)
    else:
        device_entry = None

    if entity_entry and entity_entry.area_id:
        area_id = entity_entry.area_id
    elif device_entry and device_entry.area_id:
        area_id = device_entry.area_id
    else:
        area_id = None

    if area_id is not None:
        area_entry = area_reg.async_get_area(area_id)
    else:
        area_entry = None

    return entity_entry, device_entry, area_entry


class APIError(HomeAssistantError):
    """Base API error."""

    def __init__(self, code: ResponseCode, message: str):
        """Init the error."""

        super().__init__(message)
        self.code = code
        self.message = message


class ActionNotAllowed(HomeAssistantError):
    """Error producted when change capability state is not allowed, no logging."""

    def __init__(self, code: ResponseCode = ResponseCode.REMOTE_CONTROL_DISABLED):
        """Init the error."""

        self.code = code


class CacheStore:
    """Cache store for Yandex Smart Home."""

    _STORAGE_VERSION = 1
    _STORAGE_KEY = f"{DOMAIN}.cache"

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialize a cache store."""
        self._hass = hass
        self._store = Store[dict[str, Any]](hass, self._STORAGE_VERSION, self._STORAGE_KEY)
        self._data: dict[str, dict[str, Any]] = {STORE_CACHE_ATTRS: {}}

    def get_attr_value(self, entity_id: str, attr: str) -> Any | None:
        """Return a cached value of attribute for entity."""
        if entity_id not in self._data[STORE_CACHE_ATTRS]:
            return None

        return self._data[STORE_CACHE_ATTRS][entity_id].get(attr)

    @callback
    def save_attr_value(self, entity_id: str, attr: str, value: Any) -> None:
        """Cache entity's attribute value to disk."""
        if entity_id not in self._data[STORE_CACHE_ATTRS]:
            self._data[STORE_CACHE_ATTRS][entity_id] = {}
            has_changed = True
        else:
            has_changed = self._data[STORE_CACHE_ATTRS][entity_id][attr] != value

        self._data[STORE_CACHE_ATTRS][entity_id][attr] = value

        if has_changed:
            self._store.async_delay_save(lambda: self._data, 5.0)

        return None

    async def async_load(self) -> None:
        """Load store data."""
        data = await self._store.async_load()
        if data:
            self._data = data

        return None


class SmartHomePlatform(StrEnum):
    """Supported smart home platform."""

    YANDEX = "yandex"
    VK = "vk"

    @classmethod
    def from_client_id(cls, client_id: str) -> SmartHomePlatform | None:
        """Return platform for OAuth2 client id."""
        host = urlparse(client_id).netloc
        if "yandex" in host:
            return cls.YANDEX
        elif host == "vc.go.mail.ru":
            return cls.VK

        return None


@dataclass
class RequestData:
    """Hold data associated with a particular request."""

    entry_data: ConfigEntryData
    context: Context
    platform: SmartHomePlatform
    request_user_id: str | None
    request_id: str | None


class HasInstance(Protocol):
    """Protocol type for objects that has instance attribute."""

    instance: Any


_HasInstanceT = TypeVar("_HasInstanceT", bound=type[HasInstance])


class DictRegistry(dict[str, _HasInstanceT]):
    """Dict Registry for types with instance attribute."""

    def register(self, obj: _HasInstanceT) -> _HasInstanceT:
        """Register decorated type."""
        self[obj.instance] = obj
        return obj


class ListRegistry[_T](list[_T]):
    """List Registry of items."""

    def register(self, obj: _T) -> _T:
        """Register decorated type."""
        self.append(obj)
        return obj
