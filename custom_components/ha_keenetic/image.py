"""The Keenetic API image entities."""

from __future__ import annotations
from typing import Any
import logging
import io
import pyqrcode

from homeassistant.components.image import ImageEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.device_registry import CONNECTION_NETWORK_MAC, DeviceInfo
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.entity_registry import async_get as async_get_entity_registry
from homeassistant.helpers.update_coordinator import CoordinatorEntity
import homeassistant.util.dt as dt_util

from .const import (
    DOMAIN,
    COORD_RC_INTERFACE,
    CONF_CREATE_IMAGE_QR,
    CONF_SELECT_WIFI_QR,
)
from .coordinator import KeeneticRouterRcInterfaceCoordinator

_LOGGER = logging.getLogger(__name__)

async def async_setup_entry(
    hass: HomeAssistant, 
    entry: ConfigEntry, 
    async_add_entities: AddEntitiesCallback
) -> None:
    if COORD_RC_INTERFACE not in hass.data[DOMAIN][entry.entry_id]:
        _LOGGER.debug("RC Interface coordinator not available for this device, skipping image setup")
        return
    """Set up Keenetic QR code image entities."""
    coordinator: KeeneticRouterRcInterfaceCoordinator = hass.data[DOMAIN][entry.entry_id][COORD_RC_INTERFACE]
    if coordinator is None:
        _LOGGER.debug("RC Interface coordinator is None, skipping image setup")
        return
    tracked: dict[str, KeeneticQrWiFiImageEntity] = {}

    @callback
    def async_update_images() -> None:
        qr_images: list[KeeneticQrWiFiImageEntity] = []
        selected_networks = entry.options.get(CONF_SELECT_WIFI_QR, [])
        create_all = entry.options.get(CONF_CREATE_IMAGE_QR, False)
    
        entity_registry = async_get_entity_registry(hass)
    
        for interface_id, interface_data in coordinator.data.items():
            # Проверяем, что это WiFi интерфейс с SSID
            is_wifi = (
                hasattr(interface_data, 'ssid') and 
                interface_data.ssid and 
                hasattr(interface_data, 'interface') and
                interface_data.interface in ['WifiMaster0', 'WifiMaster1']
            )
            
            if not is_wifi:
                continue
    
            # Если интерфейс выбран или выбраны все, и он еще не отслеживается
            if (interface_id in selected_networks or create_all):
                if interface_id not in tracked:
                    _LOGGER.debug(f"Creating QR code for WiFi: {interface_id} ({interface_data.name_interface})")
                    tracked[interface_id] = KeeneticQrWiFiImageEntity(
                        coordinator,
                        interface_id,
                        interface_data.name_interface or interface_id,
                    )
                    qr_images.append(tracked[interface_id])
            elif interface_id in tracked:
                # Удаляем объект из отслеживаемых и из реестра
                _LOGGER.debug(f"Removing QR code for WiFi: {interface_id}")
                entity = tracked.pop(interface_id)
                entity_registry.async_remove(entity.entity_id)
                hass.async_create_task(entity.async_remove(force_remove=True))
    
        # Удаляем все объекты, которые больше не отслеживаются
        for interface_id in list(tracked):
            if interface_id not in coordinator.data or interface_id not in selected_networks and not create_all:
                _LOGGER.debug(f"Cleaning up untracked QR code for WiFi: {interface_id}")
                entity = tracked.pop(interface_id)
                entity_registry.async_remove(entity.entity_id)
                hass.async_create_task(entity.async_remove(force_remove=True))
    
        async_add_entities(qr_images)

    entry.async_on_unload(coordinator.async_add_listener(async_update_images))
    async_update_images()

class KeeneticQrWiFiImageEntity(CoordinatorEntity[KeeneticRouterRcInterfaceCoordinator], ImageEntity):
    """Representation of a Keenetic WiFi QR code image entity."""

    _attr_has_entity_name = True
    _attr_content_type = "image/png"
    
    def __init__(
        self,
        coordinator: KeeneticRouterRcInterfaceCoordinator,
        interface_id: str,
        interface_name: str,
    ) -> None:
        """Initialize the QR code image entity."""
        super().__init__(coordinator)
        ImageEntity.__init__(self, coordinator.hass)
        self._interface_id = interface_id
        self._attr_name = interface_name
        self._attr_unique_id = f"{coordinator.unique_id}_qrwifi_{interface_id}"
        self._attr_image_last_updated = dt_util.utcnow()
        _LOGGER.debug(f"Initialized QR code entity for {interface_name} with ID {interface_id}")
        
    async def async_image(self) -> bytes | None:
        """Return bytes of image."""
        if self._interface_id not in self.coordinator.data:
            _LOGGER.warning(f"Interface {self._interface_id} not found in coordinator data")
            return None
            
        interface_data = self.coordinator.data[self._interface_id]
        
        # Проверяем, что это WiFi интерфейс с SSID
        if not hasattr(interface_data, 'ssid') or not interface_data.ssid:
            _LOGGER.warning(f"Interface {self._interface_id} has no SSID")
            return None
            
        wifi_ssid = interface_data.ssid
        wifi_pass = interface_data.password
        
        buffer = io.BytesIO()
        if wifi_pass is not None:
            code = pyqrcode.create(f'WIFI:S:{wifi_ssid};T:WPA;P:{wifi_pass};;')
        else:
            code = pyqrcode.create(f'WIFI:S:{wifi_ssid};T:nopass;;;')
        
        code.png(buffer, scale=10)
        buffer.seek(0)
        return buffer.getvalue()

    @property
    def available(self) -> bool:
        """Return True if entity is available."""
        if self._interface_id not in self.coordinator.data:
            return False
            
        interface_data = self.coordinator.data[self._interface_id]
        return hasattr(interface_data, 'ssid') and interface_data.ssid is not None

    @property
    def device_info(self) -> DeviceInfo:
        """Return the device info for grouping entities."""
        return self.coordinator.device_info

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return extra attributes of the image."""
        if self._interface_id not in self.coordinator.data:
            return {}
            
        interface_data = self.coordinator.data[self._interface_id]
        attrs = {}
        
        if hasattr(interface_data, 'id'):
            attrs["interface"] = interface_data.id
        if hasattr(interface_data, 'ssid'):
            attrs["ssid"] = interface_data.ssid
        if hasattr(interface_data, 'password'):
            attrs["password"] = interface_data.password
        if hasattr(interface_data, 'active'):
            attrs["active"] = interface_data.active
        if hasattr(interface_data, 'rename'):
            attrs["rename"] = interface_data.rename
        if hasattr(interface_data, 'description'):
            attrs["description"] = interface_data.description
            
        return attrs