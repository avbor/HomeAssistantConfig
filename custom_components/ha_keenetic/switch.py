"""The Keenetic API binary switch entities."""

from collections.abc import Callable
from dataclasses import dataclass
import logging
from typing import Any

from homeassistant.components.switch import SwitchEntity, SwitchEntityDescription
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.const import EntityCategory
from homeassistant.helpers.device_registry import DeviceEntryType, DeviceInfo
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity
from homeassistant.helpers.typing import StateType

from .const import (
    DOMAIN,
    COORD_FULL,
    CONF_CREATE_PORT_FRW,
    COORD_RC_INTERFACE,
)
from .coordinator import (
    KeeneticRouterCoordinator,
)
from .keenetic import DataRcInterface

_LOGGER = logging.getLogger(__name__)


@dataclass(frozen=True, kw_only=True)
class KeeneticSwitchEntityDescription(SwitchEntityDescription):

    is_on_func: Callable[[KeeneticRouterCoordinator], bool | None]
    on_func: Callable[[KeeneticRouterCoordinator], None]
    off_func: Callable[[KeeneticRouterCoordinator], None]
    placeholder: str | None = None

SWITCH_TYPES: tuple[KeeneticSwitchEntityDescription, ...] = (
    KeeneticSwitchEntityDescription(
        key="web_configurator_access",
        is_on_func=lambda coordinator, label_sw: coordinator.data.show_rc_ip_http['security-level'].get('public', False),
        on_func=lambda coordinator, label_sw: coordinator.router.turn_on_off_web_configurator_access(True),
        off_func=lambda coordinator, label_sw: coordinator.router.turn_on_off_web_configurator_access(False),
    ),
)

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, async_add_entities: AddEntitiesCallback,) -> None:
    """Set up Keenetic switch entities based on config entry."""
    coordinator: KeeneticRouterCoordinator = hass.data[DOMAIN][entry.entry_id][COORD_FULL]
    switches: list[SwitchEntity] = []
    
    if coordinator.router.hw_type == "router":
        # Собираем все данные в одном запросе, если возможно
        try:
            # Получаем все данные параллельно для ускорения загрузки
            import asyncio
            
            tasks = [
                coordinator.router.get_ethernet_ports(),
                coordinator.router.get_usb_ports(),
                coordinator.router.get_wifi_interfaces(),
                coordinator.router.get_vpn_interfaces()
            ]
            
            ethernet_ports, usb_ports, wifi_interfaces, vpn_interfaces = await asyncio.gather(*tasks)
            
            # Создаем сущности для Ethernet портов
            for port_id, port_data in ethernet_ports.items():
                switches.append(
                    KeeneticEthernetPortSwitchEntity(
                        coordinator,
                        port_data,
                    )
                )
            
            # Создаем сущности для USB портов
            for port_id, port_data in usb_ports.items():
                switches.append(
                    KeeneticUsbPortSwitchEntity(
                        coordinator,
                        port_data,
                    )
                )
                
            # Создаем сущности для WiFi интерфейсов
            for interface_id, interface_data in wifi_interfaces.items():
                # Создаем только для точек доступа, не для мастер-интерфейсов
                if '/AccessPoint' in interface_id and interface_data.get('ssid'):
                    switches.append(
                        KeeneticWiFiSwitchEntity(
                            coordinator,
                            interface_data,
                        )
                    )
                
            # Создаем сущности для VPN интерфейсов
            for interface_id, interface_data in vpn_interfaces.items():
                switches.append(
                    KeeneticVpnSwitchEntity(
                        coordinator,
                        interface_data,
                    )
                )
                
        except Exception as ex:
            _LOGGER.error(f"Error setting up switch entities: {ex}")

        # Добавляем переадресацию портов
        if entry.options.get(CONF_CREATE_PORT_FRW, False):
            port_forwardings = coordinator.data.show_rc_ip_static
            for index, port_frw in port_forwardings.items():
                switches.append(
                    KeeneticPortForwardingSwitchEntity(
                        coordinator,
                        port_frw,
                    )
                )

    # Добавляем остальные переключатели
    for description in SWITCH_TYPES:
        if coordinator.router.hw_type == "router":
            switches.append(KeeneticSwitchEntity(coordinator, description, description.key))

    async_add_entities(switches)



class KeeneticWiFiSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):
    """Keenetic WiFi switch entity."""
    
    _attr_has_entity_name = True
    
    def __init__(
        self,
        coordinator: KeeneticRouterCoordinator,
        interface_data,
    ) -> None:
        """Initialize the Keenetic WiFi switch."""
        super().__init__(coordinator)
        self._interface_data = interface_data
        self._id = interface_data["id"]
        self._ssid = interface_data["ssid"]
        self._band = interface_data["band"]
        self._password = interface_data.get("password", "")
        self._encryption = interface_data.get("encryption", {})
        self._interface_name = interface_data.get("interface-name", "")
        self._description = interface_data.get("description", "")
        self._connected = interface_data.get("connected", "no")
        
        # Формируем имя для отображения
        self._attr_name = f"{self._ssid} ({self._band})"
        self._attr_translation_key = "wifi_interface"
            
        self._attr_unique_id = f"{coordinator.unique_id}_wifi_{self._id}"
        self._attr_device_info = coordinator.device_info
        self._attr_translation_placeholders = {
            "name_interface": self._attr_name
        }
    
    @property
    def is_on(self) -> bool:
        """Return state."""
        try:
            # Проверяем состояние WiFi интерфейса
            for interface_id, interface_data in self.coordinator.data.show_interface.items():
                if interface_id == self._id:
                    return interface_data.get('state', 'down') == 'up'
            return False
        except Exception as ex:
            _LOGGER.error(f"Error getting WiFi interface state: {ex}")
            return False
    
    async def async_turn_on(self, **kwargs: Any) -> None:
        """Turn on the WiFi interface."""
        try:
            await self.coordinator.router.turn_on_off_interface(self._id, 'up')
            await self.coordinator.async_request_refresh()
        except Exception as ex:
            _LOGGER.error(f"Error turning on WiFi interface {self._id}: {ex}")
    
    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn off the WiFi interface."""
        try:
            await self.coordinator.router.turn_on_off_interface(self._id, 'down')
            await self.coordinator.async_request_refresh()
        except Exception as ex:
            _LOGGER.error(f"Error turning off WiFi interface {self._id}: {ex}")
    
    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return the state attributes."""
        attributes = {
            "interface_id": self._id,
            "ssid": self._ssid,
            "band": self._band,
            "password": self._password,
            "encryption": self._encryption,
            "interface_name": self._interface_name,
            "description": self._description,
            "connected": self._connected
        }
        
        # Добавляем все атрибуты из interface_data
        if "attributes" in self._interface_data:
            attributes.update(self._interface_data["attributes"])
        
        return attributes

class KeeneticVpnSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):
    """Keenetic VPN switch entity."""
    
    _attr_has_entity_name = True
    
    def __init__(
        self,
        coordinator: KeeneticRouterCoordinator,
        interface_data,
    ) -> None:
        """Initialize the Keenetic VPN switch."""
        super().__init__(coordinator)
        self._interface_data = interface_data
        self._id = interface_data["id"]
        self._label = interface_data["label"]
        self._vpn_type = interface_data.get("vpn_type", "VPN")
        
        self._attr_name = self._label
        self._attr_translation_key = "vpn_interface"
            
        self._attr_unique_id = f"{coordinator.unique_id}_vpn_{self._id}"
        self._attr_device_info = coordinator.device_info
        self._attr_translation_placeholders = {
            "name_interface": self._attr_name
        }
    
    @property
    def is_on(self) -> bool:
        """Return state."""
        try:
            # Проверяем состояние VPN интерфейса
            for interface_id, interface_data in self.coordinator.data.show_interface.items():
                if interface_id == self._id:
                    return interface_data.get('state', 'down') == 'up'
            return False
        except Exception as ex:
            _LOGGER.error(f"Error getting VPN interface state: {ex}")
            return False
    
    async def async_turn_on(self, **kwargs: Any) -> None:
        """Turn on the VPN interface."""
        try:
            await self.coordinator.router.turn_on_off_interface(self._id, 'up')
            await self.coordinator.async_request_refresh()
        except Exception as ex:
            _LOGGER.error(f"Error turning on VPN interface {self._id}: {ex}")
    
    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn off the VPN interface."""
        try:
            await self.coordinator.router.turn_on_off_interface(self._id, 'down')
            await self.coordinator.async_request_refresh()
        except Exception as ex:
            _LOGGER.error(f"Error turning off VPN interface {self._id}: {ex}")
    
    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return the state attributes."""
        attributes = {
            "interface_id": self._id,
            "vpn_type": self._vpn_type,
        }
        
        # Добавляем все атрибуты из interface_data
        if "attributes" in self._interface_data:
            attributes.update(self._interface_data["attributes"])
        
        return attributes

class KeeneticUsbPortSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):
    """Keenetic USB Port switch entity."""
    
    _attr_has_entity_name = True
    
    def __init__(
        self,
        coordinator: KeeneticRouterCoordinator,
        port_data,
    ) -> None:
        """Initialize the Keenetic USB Port switch."""
        super().__init__(coordinator)
        self._port_data = port_data
        self._id = port_data["id"]
        self._port = port_data["port"]
        
        self._attr_name = port_data["label"]
        self._attr_translation_key = "usb_port"
            
        self._attr_unique_id = f"{coordinator.unique_id}_usb_port_{self._port}"
        self._attr_device_info = coordinator.device_info
        self._attr_translation_placeholders = {
            "name_port": self._attr_name
        }
    
    @property
    def is_on(self) -> bool:
        """Return state."""
        try:
            # Проверяем состояние питания USB порта
            for usb_port in self.coordinator.data.show_rc_system_usb:
                if usb_port.get('port') == self._port:
                    return not usb_port.get('power', {}).get('shutdown', False)
            return False
        except Exception as ex:
            _LOGGER.error(f"Error getting USB port state: {ex}")
            return False
    
    async def async_turn_on(self, **kwargs: Any) -> None:
        """Turn on the USB port."""
        try:
            await self.coordinator.router.turn_on_off_usb(True, self._port)
            await self.coordinator.async_request_refresh()
        except Exception as ex:
            _LOGGER.error(f"Error turning on USB port {self._port}: {ex}")
    
    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn off the USB port."""
        try:
            await self.coordinator.router.turn_on_off_usb(False, self._port)
            await self.coordinator.async_request_refresh()
        except Exception as ex:
            _LOGGER.error(f"Error turning off USB port {self._port}: {ex}")
    
    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return the state attributes."""
        attributes = {
            "port_id": self._port,
        }
        
        # Добавляем все атрибуты из port_data
        if "attributes" in self._port_data:
            attributes.update(self._port_data["attributes"])
        
        return attributes

class KeeneticEthernetPortSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):
    """Keenetic Ethernet Port switch entity."""
    
    _attr_has_entity_name = True
    
    def __init__(
        self,
        coordinator: KeeneticRouterCoordinator,
        port_data,
    ) -> None:
        """Initialize the Keenetic Ethernet Port switch."""
        super().__init__(coordinator)
        self._port_data = port_data
        self._id = port_data["id"]
        self._type = port_data["type"]
        
        # Определяем имя и translation_key в зависимости от типа порта
        if self._type == "wan":
            self._attr_name = "Port WAN"
            self._attr_translation_key = "interface"
        else:
            self._attr_name = port_data["label"]
            self._attr_translation_key = "interface"
            
        self._attr_unique_id = f"{coordinator.unique_id}_ethernet_port_{self._id}"
        self._attr_device_info = coordinator.device_info
        self._attr_translation_placeholders = {
            "name_interface": self._attr_name
        }
    
    @property
    def is_on(self) -> bool:
        """Return state."""
        # Обновляем данные о порте при каждом запросе состояния
        try:
            # Здесь нужно получить актуальное состояние порта
            # Можно использовать link == "up" как индикатор включенного состояния
            for port_id, port_data in self.coordinator.data.show_interface.items():
                if port_id == self._id or (self._type == "port" and port_id in self._id):
                    return port_data.get("link", "down") == "up"
            return False
        except Exception as ex:
            _LOGGER.error(f"Error getting port state: {ex}")
            return False
    
    async def async_turn_on(self, **kwargs: Any) -> None:
        """Turn on the port."""
        # Реализация включения порта
        try:
            port_id = self._id
            if self._type == "port" and "_port_" in self._id:
                port_id = self._id.split("_port_")[1]
            await self.coordinator.router.turn_on_off_interface(port_id, 'up')
            await self.coordinator.async_request_refresh()
        except Exception as ex:
            _LOGGER.error(f"Error turning on port {self._id}: {ex}")
    
    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn off the port."""
        # Реализация выключения порта
        try:
            port_id = self._id
            if self._type == "port" and "_port_" in self._id:
                port_id = self._id.split("_port_")[1]
            await self.coordinator.router.turn_on_off_interface(port_id, 'down')
            await self.coordinator.async_request_refresh()
        except Exception as ex:
            _LOGGER.error(f"Error turning off port {self._id}: {ex}")
    
    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return the state attributes."""
        attributes = {
            "port_type": self._type,
            "port_id": self._id,
        }
        
        # Добавляем все атрибуты из port_data
        if "attributes" in self._port_data:
            attributes.update(self._port_data["attributes"])
        
        return attributes

class KeeneticSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):

    entity_description: KeeneticSwitchEntityDescription
    _attr_has_entity_name = True

    def __init__(
        self,
        coordinator: KeeneticRouterCoordinator,
        entity_description: KeeneticSwitchEntityDescription,
        label_sw,
    ) -> None:
        super().__init__(coordinator)
        self.entity_description = entity_description
        self._label_sw = label_sw
        self._attr_translation_key = self.entity_description.key
        self._attr_unique_id = f"{coordinator.unique_id}_{self._attr_translation_key}_{self._label_sw}"
        self._attr_device_info = coordinator.device_info
        if self.entity_description.placeholder:
            self._attr_translation_placeholders = {
                self.entity_description.placeholder: label_sw
            }

    @property
    def is_on(self) -> bool:
        return bool(self.entity_description.is_on_func(self.coordinator, self._label_sw))

    async def async_turn_on(self, **kwargs: Any) -> None:
        await self.entity_description.on_func(self.coordinator, self._label_sw)
        await self.coordinator.async_request_refresh()

    async def async_turn_off(self, **kwargs: Any) -> None:
        await self.entity_description.off_func(self.coordinator, self._label_sw)
        await self.coordinator.async_request_refresh()


class KeeneticInterfaceSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):
    def __init__(
        self,
        coordinator: KeeneticRouterCoordinator,
        data_interface,
        name_interface
    ) -> None:
        """Initialize the Keenetic Interface switch."""
        super().__init__(coordinator)
        self._id_interface = data_interface['id']
        self._name_interface = name_interface
        
        if self._id_interface.startswith('WifiMaster'):
            self._attr_translation_key = "interface_wifi"
            
            ssid = data_interface.get('ssid', '')
            if not ssid and 'AccessPoint' in self._id_interface:
                clean_name = self._name_interface
                prefixes_to_remove = ['WiFi ', 'Wifi ']
                suffixes_to_remove = [' 2.4G', ' 5G', ' 2.4GHz', ' 5GHz']
                
                for prefix in prefixes_to_remove:
                    if clean_name.startswith(prefix):
                        clean_name = clean_name[len(prefix):]
                
                for suffix in suffixes_to_remove:
                    if clean_name.endswith(suffix):
                        clean_name = clean_name[:-len(suffix)]
                
                ssid = clean_name
            
            is_5ghz = 'WifiMaster1' in self._id_interface
            prefix = '(5GHz)' if is_5ghz else '(2.4GHz)'
            
            self._display_name = f"{ssid} {prefix}"
            
        elif self._id_interface.startswith('Wireguard'):
            self._attr_translation_key = "interface_wireguard"
            self._display_name = self._name_interface
        else:
            self._attr_translation_key = "interface"
            self._display_name = self._name_interface
            
        self._attr_unique_id = f"{coordinator.unique_id}_{self._attr_translation_key}_{self._id_interface}"
        self._attr_device_info = coordinator.device_info
        self._attr_translation_placeholders = {
            "name_interface": self._display_name
        }

    @property
    def name(self) -> str:
        """Return the display name of this entity."""
        return self._display_name

    @property
    def is_on(self) -> bool:
        """Return state."""
        return self.coordinator.data.show_interface[self._id_interface]['state'] == "up"

    async def async_turn_on(self, **kwargs: Any) -> None:
        """Turn on."""
        await self.coordinator.router.turn_on_off_interface(self._id_interface, 'up')
        await self.coordinator.async_request_refresh()

    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn off."""
        await self.coordinator.router.turn_on_off_interface(self._id_interface, 'down')
        await self.coordinator.async_request_refresh()

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return the state attributes."""
        interface_data = self.coordinator.data.show_interface[self._id_interface]
        attributes = {
            "interface_type": self._id_interface,
        }
        
        if self._id_interface.startswith('WifiMaster'):
            current_ssid = interface_data.get('ssid', '')
            attributes.update({
                "ssid": current_ssid or self._display_name.split(' (')[0],
                "band": '5GHz' if 'WifiMaster1' in self._id_interface else '2.4GHz',
                "description": interface_data.get('description', '')
            })
        
        return attributes


class KeeneticPortForwardingSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):

    _attr_translation_key="port_forwarding"
    _attr_has_entity_name = True

    def __init__(
        self,
        coordinator: KeeneticRouterCoordinator,
        port_frw,
    ) -> None:
        """Initialize the Keenetic PortForwarding switch."""
        super().__init__(coordinator)
        self._pfrw = port_frw
        self._pfrw_index = port_frw.index
        self._pfrw_name = port_frw.name
        self._attr_unique_id = f"{coordinator.unique_id}_{self._attr_translation_key}_{self._pfrw_index}"
        self._attr_device_info = coordinator.device_info
        self._attr_translation_placeholders = {"pfrw_name": f"{self._pfrw_name}"}

    @property
    def is_on(self) -> bool:
        """Return state."""
        return self.coordinator.data.show_rc_ip_static[self._pfrw_index].disable == False

    async def async_turn_on(self, **kwargs: Any) -> None:
        """Turn on."""
        await self.coordinator.router.turn_on_off_port_forwarding(self._pfrw_index, True)
        await self.coordinator.async_request_refresh()

    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn off."""
        await self.coordinator.router.turn_on_off_port_forwarding(self._pfrw_index, False)
        await self.coordinator.async_request_refresh()

    @property
    def extra_state_attributes(self) -> dict[str, StateType]:
        """Return the state attributes."""
        return {
            "interface": self._pfrw.interface,
            "protocol": self._pfrw.protocol,
            "port": self._pfrw.port,
            "end_port": self._pfrw.end_port,
            "to_host": self._pfrw.to_host,
            "index": self._pfrw.index,
            "comment": self._pfrw.comment,
        }
# """The Keenetic API binary switch entities."""

# from collections.abc import Callable
# from dataclasses import dataclass
# import logging
# from typing import Any

# from homeassistant.components.switch import SwitchEntity, SwitchEntityDescription
# from homeassistant.config_entries import ConfigEntry
# from homeassistant.core import HomeAssistant
# from homeassistant.const import EntityCategory
# from homeassistant.helpers.device_registry import DeviceEntryType, DeviceInfo
# from homeassistant.helpers.entity_platform import AddEntitiesCallback
# from homeassistant.helpers.update_coordinator import CoordinatorEntity
# from homeassistant.helpers.typing import StateType

# from .const import (
#     DOMAIN,
#     COORD_FULL,
#     CONF_CREATE_PORT_FRW,
#     COORD_RC_INTERFACE,
# )
# from .coordinator import (
#     KeeneticRouterCoordinator,
# )
# from .keenetic import DataRcInterface

# _LOGGER = logging.getLogger(__name__)


# @dataclass(frozen=True, kw_only=True)
# class KeeneticSwitchEntityDescription(SwitchEntityDescription):

#     is_on_func: Callable[[KeeneticRouterCoordinator], bool | None]
#     on_func: Callable[[KeeneticRouterCoordinator], None]
#     off_func: Callable[[KeeneticRouterCoordinator], None]
#     placeholder: str | None = None

# SWITCH_TYPES: tuple[KeeneticSwitchEntityDescription, ...] = (
#     KeeneticSwitchEntityDescription(
#         key="web_configurator_access",
#         is_on_func=lambda coordinator, label_sw: coordinator.data.show_rc_ip_http['security-level'].get('public', False),
#         on_func=lambda coordinator, label_sw: coordinator.router.turn_on_off_web_configurator_access(True),
#         off_func=lambda coordinator, label_sw: coordinator.router.turn_on_off_web_configurator_access(False),
#     ),
# )

# async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, async_add_entities: AddEntitiesCallback,) -> None:

#     coordinator: KeeneticRouterCoordinator = hass.data[DOMAIN][entry.entry_id][COORD_FULL]
#     switchs: list[SwitchEntity] = []
    
#     if coordinator.router.hw_type == "router":
#         # Получаем информацию о Ethernet портах
#         try:
#             ethernet_ports = await coordinator.router.get_ethernet_ports()
#             for port_id, port_data in ethernet_ports.items():
#                 switchs.append(
#                     KeeneticEthernetPortSwitchEntity(
#                         coordinator,
#                         port_data,
#                     )
#                 )
#         except Exception as ex:
#             _LOGGER.error(f"Error setting up ethernet port switches: {ex}")
        
#         # Получаем информацию о USB портах
#         try:
#             usb_ports = await coordinator.router.get_usb_ports()
#             for port_id, port_data in usb_ports.items():
#                 switchs.append(
#                     KeeneticUsbPortSwitchEntity(
#                         coordinator,
#                         port_data,
#                     )
#                 )
#         except Exception as ex:
#             _LOGGER.error(f"Error setting up USB port switches: {ex}")
            
#         # Получаем информацию о WiFi интерфейсах
#         try:
#             wifi_interfaces = await coordinator.router.get_wifi_interfaces()
#             for interface_id, interface_data in wifi_interfaces.items():
#                 # Создаем только для точек доступа, не для мастер-интерфейсов
#                 if '/AccessPoint' in interface_id and interface_data.get('ssid'):
#                     switchs.append(
#                         KeeneticWiFiSwitchEntity(
#                             coordinator,
#                             interface_data,
#                         )
#                     )
#         except Exception as ex:
#             _LOGGER.error(f"Error setting up WiFi interface switches: {ex}")
            
#         # Получаем информацию о VPN интерфейсах
#         try:
#             vpn_interfaces = await coordinator.router.get_vpn_interfaces()
#             for interface_id, interface_data in vpn_interfaces.items():
#                 switchs.append(
#                     KeeneticVpnSwitchEntity(
#                         coordinator,
#                         interface_data,
#                     )
#                 )
#         except Exception as ex:
#             _LOGGER.error(f"Error setting up VPN interface switches: {ex}")

#         # Добавляем переадресацию портов
#         if entry.options.get(CONF_CREATE_PORT_FRW, False):
#             port_forwardings = coordinator.data.show_rc_ip_static
#             for index, port_frw in port_forwardings.items():
#                 switchs.append(
#                     KeeneticPortForwardingSwitchEntity(
#                         coordinator,
#                         port_frw,
#                     )
#                 )

#     # Добавляем остальные переключатели
#     for description in SWITCH_TYPES:
#         if coordinator.router.hw_type == "router":
#             switchs.append(KeeneticSwitchEntity(coordinator, description, description.key))

#     async_add_entities(switchs)



# class KeeneticWiFiSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):
#     """Keenetic WiFi switch entity."""
    
#     _attr_has_entity_name = True
    
#     def __init__(
#         self,
#         coordinator: KeeneticRouterCoordinator,
#         interface_data,
#     ) -> None:
#         """Initialize the Keenetic WiFi switch."""
#         super().__init__(coordinator)
#         self._interface_data = interface_data
#         self._id = interface_data["id"]
#         self._ssid = interface_data["ssid"]
#         self._band = interface_data["band"]
#         self._password = interface_data.get("password", "")
#         self._encryption = interface_data.get("encryption", {})
#         self._interface_name = interface_data.get("interface-name", "")
#         self._description = interface_data.get("description", "")
#         self._connected = interface_data.get("connected", "no")
        
#         # Формируем имя для отображения
#         self._attr_name = f"{self._ssid} ({self._band})"
#         self._attr_translation_key = "wifi_interface"
            
#         self._attr_unique_id = f"{coordinator.unique_id}_wifi_{self._id}"
#         self._attr_device_info = coordinator.device_info
#         self._attr_translation_placeholders = {
#             "name_interface": self._attr_name
#         }
    
#     @property
#     def is_on(self) -> bool:
#         """Return state."""
#         try:
#             # Проверяем состояние WiFi интерфейса
#             for interface_id, interface_data in self.coordinator.data.show_interface.items():
#                 if interface_id == self._id:
#                     return interface_data.get('state', 'down') == 'up'
#             return False
#         except Exception as ex:
#             _LOGGER.error(f"Error getting WiFi interface state: {ex}")
#             return False
    
#     async def async_turn_on(self, **kwargs: Any) -> None:
#         """Turn on the WiFi interface."""
#         try:
#             await self.coordinator.router.turn_on_off_interface(self._id, 'up')
#             await self.coordinator.async_request_refresh()
#         except Exception as ex:
#             _LOGGER.error(f"Error turning on WiFi interface {self._id}: {ex}")
    
#     async def async_turn_off(self, **kwargs: Any) -> None:
#         """Turn off the WiFi interface."""
#         try:
#             await self.coordinator.router.turn_on_off_interface(self._id, 'down')
#             await self.coordinator.async_request_refresh()
#         except Exception as ex:
#             _LOGGER.error(f"Error turning off WiFi interface {self._id}: {ex}")
    
#     @property
#     def extra_state_attributes(self) -> dict[str, Any]:
#         """Return the state attributes."""
#         attributes = {
#             "ssid": self._ssid,
#             "band": self._band,
#             "password": self._password,
#             "encryption": self._encryption
#         }
#         return attributes

# class KeeneticVpnSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):
#     """Keenetic VPN switch entity."""
    
#     _attr_has_entity_name = True
    
#     def __init__(
#         self,
#         coordinator: KeeneticRouterCoordinator,
#         interface_data,
#     ) -> None:
#         """Initialize the Keenetic VPN switch."""
#         super().__init__(coordinator)
#         self._interface_data = interface_data
#         self._id = interface_data["id"]
#         self._label = interface_data["label"]
#         self._vpn_type = interface_data.get("vpn_type", "VPN")
        
#         self._attr_name = self._label
#         self._attr_translation_key = "vpn_interface"
            
#         self._attr_unique_id = f"{coordinator.unique_id}_vpn_{self._id}"
#         self._attr_device_info = coordinator.device_info
#         self._attr_translation_placeholders = {
#             "name_interface": self._attr_name
#         }
    
#     @property
#     def is_on(self) -> bool:
#         """Return state."""
#         try:
#             # Проверяем состояние VPN интерфейса
#             for interface_id, interface_data in self.coordinator.data.show_interface.items():
#                 if interface_id == self._id:
#                     return interface_data.get('state', 'down') == 'up'
#             return False
#         except Exception as ex:
#             _LOGGER.error(f"Error getting VPN interface state: {ex}")
#             return False
    
#     async def async_turn_on(self, **kwargs: Any) -> None:
#         """Turn on the VPN interface."""
#         try:
#             await self.coordinator.router.turn_on_off_interface(self._id, 'up')
#             await self.coordinator.async_request_refresh()
#         except Exception as ex:
#             _LOGGER.error(f"Error turning on VPN interface {self._id}: {ex}")
    
#     async def async_turn_off(self, **kwargs: Any) -> None:
#         """Turn off the VPN interface."""
#         try:
#             await self.coordinator.router.turn_on_off_interface(self._id, 'down')
#             await self.coordinator.async_request_refresh()
#         except Exception as ex:
#             _LOGGER.error(f"Error turning off VPN interface {self._id}: {ex}")
    
#     @property
#     def extra_state_attributes(self) -> dict[str, Any]:
#         """Return the state attributes."""
#         attributes = {
#             "vpn_type": self._vpn_type,
#         }

#         direct_attrs = ["link", "connected", "address", "mask", "uptime"]
#         for attr in direct_attrs:
#             if attr in self._interface_data:
#                 attributes[attr] = self._interface_data[attr]

#         return attributes

# class KeeneticUsbPortSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):
#     """Keenetic USB Port switch entity."""
    
#     _attr_has_entity_name = True
    
#     def __init__(
#         self,
#         coordinator: KeeneticRouterCoordinator,
#         port_data,
#     ) -> None:
#         """Initialize the Keenetic USB Port switch."""
#         super().__init__(coordinator)
#         self._port_data = port_data
#         self._id = port_data["id"]
#         self._port = port_data["port"]
        
#         self._attr_name = port_data["label"]
#         self._attr_translation_key = "usb_port"
            
#         self._attr_unique_id = f"{coordinator.unique_id}_usb_port_{self._port}"
#         self._attr_device_info = coordinator.device_info
#         self._attr_translation_placeholders = {
#             "name_port": self._attr_name
#         }
    
#     @property
#     def is_on(self) -> bool:
#         """Return state."""
#         try:
#             # Проверяем состояние питания USB порта
#             for usb_port in self.coordinator.data.show_rc_system_usb:
#                 if usb_port.get('port') == self._port:
#                     return not usb_port.get('power', {}).get('shutdown', False)
#             return False
#         except Exception as ex:
#             _LOGGER.error(f"Error getting USB port state: {ex}")
#             return False
    
#     async def async_turn_on(self, **kwargs: Any) -> None:
#         """Turn on the USB port."""
#         try:
#             await self.coordinator.router.turn_on_off_usb(True, self._port)
#             await self.coordinator.async_request_refresh()
#         except Exception as ex:
#             _LOGGER.error(f"Error turning on USB port {self._port}: {ex}")
    
#     async def async_turn_off(self, **kwargs: Any) -> None:
#         """Turn off the USB port."""
#         try:
#             await self.coordinator.router.turn_on_off_usb(False, self._port)
#             await self.coordinator.async_request_refresh()
#         except Exception as ex:
#             _LOGGER.error(f"Error turning off USB port {self._port}: {ex}")
    
#     @property
#     def extra_state_attributes(self) -> dict[str, Any]:
#         """Return the state attributes."""
#         attributes = {
#             "port_id": self._port,
#         }
        
#         # Добавляем все атрибуты из port_data
#         if "attributes" in self._port_data:
#             attributes.update(self._port_data["attributes"])
        
#         return attributes

# class KeeneticEthernetPortSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):
#     """Keenetic Ethernet Port switch entity."""
    
#     _attr_has_entity_name = True
    
#     def __init__(
#         self,
#         coordinator: KeeneticRouterCoordinator,
#         port_data,
#     ) -> None:
#         """Initialize the Keenetic Ethernet Port switch."""
#         super().__init__(coordinator)
#         self._port_data = port_data
#         self._id = port_data["id"]
#         self._type = port_data["type"]
        
#         # Определяем имя и translation_key в зависимости от типа порта
#         if self._type == "wan":
#             self._attr_name = "Port WAN"
#             self._attr_translation_key = "interface"
#         else:
#             self._attr_name = port_data["label"]
#             self._attr_translation_key = "interface"
            
#         self._attr_unique_id = f"{coordinator.unique_id}_ethernet_port_{self._id}"
#         self._attr_device_info = coordinator.device_info
#         self._attr_translation_placeholders = {
#             "name_interface": self._attr_name
#         }
    
#     @property
#     def is_on(self) -> bool:
#         """Return state."""
#         try:
#             for port_id, port_data in self.coordinator.data.show_interface.items():
#                 if port_id == self._id or (self._type == "port" and port_id in self._id):
#                     return port_data.get("link", "down") == "up"
#             return False
#         except Exception as ex:
#             _LOGGER.error(f"Error getting port state: {ex}")
#             return False
    
#     async def async_turn_on(self, **kwargs: Any) -> None:
#         """Turn on the port."""
#         # Реализация включения порта
#         try:
#             port_id = self._id
#             if self._type == "port" and "_port_" in self._id:
#                 port_id = self._id.split("_port_")[1]
#             await self.coordinator.router.turn_on_off_interface(port_id, 'up')
#             await self.coordinator.async_request_refresh()
#         except Exception as ex:
#             _LOGGER.error(f"Error turning on port {self._id}: {ex}")
    
#     async def async_turn_off(self, **kwargs: Any) -> None:
#         """Turn off the port."""
#         # Реализация выключения порта
#         try:
#             port_id = self._id
#             if self._type == "port" and "_port_" in self._id:
#                 port_id = self._id.split("_port_")[1]
#             await self.coordinator.router.turn_on_off_interface(port_id, 'down')
#             await self.coordinator.async_request_refresh()
#         except Exception as ex:
#             _LOGGER.error(f"Error turning off port {self._id}: {ex}")
    
#     @property
#     def extra_state_attributes(self) -> dict[str, Any]:
#         """Return the state attributes."""
#         attributes = {
#             "port_type": self._type,
#             "port_id": self._id,
#         }
        
#         # Добавляем все атрибуты из port_data
#         if "attributes" in self._port_data:
#             attributes.update(self._port_data["attributes"])
        
#         return attributes

# class KeeneticSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):

#     entity_description: KeeneticSwitchEntityDescription
#     _attr_has_entity_name = True

#     def __init__(
#         self,
#         coordinator: KeeneticSwitchEntityDescription,
#         entity_description: KeeneticSwitchEntityDescription,
#         label_sw,
#     ) -> None:
#         super().__init__(coordinator)
#         self.entity_description = entity_description
#         self._label_sw = label_sw
#         self._attr_translation_key = self.entity_description.key
#         self._attr_unique_id = f"{coordinator.unique_id}_{self._attr_translation_key}_{self._label_sw}"
#         self._attr_device_info = coordinator.device_info
#         if self.entity_description.placeholder:
#             self._attr_translation_placeholders = {
#                 self.entity_description.placeholder: label_sw
#             }

#     @property
#     def is_on(self) -> bool:
#         return bool(self.entity_description.is_on_func(self.coordinator, self._label_sw))

#     async def async_turn_on(self, **kwargs: Any) -> None:
#         await self.entity_description.on_func(self.coordinator, self._label_sw)
#         await self.coordinator.async_request_refresh()

#     async def async_turn_off(self, **kwargs: Any) -> None:
#         await self.entity_description.off_func(self.coordinator, self._label_sw)
#         await self.coordinator.async_request_refresh()


# class KeeneticInterfaceSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):
#     def __init__(
#         self,
#         coordinator: KeeneticRouterCoordinator,
#         data_interface,
#         name_interface
#     ) -> None:
#         """Initialize the Keenetic Interface switch."""
#         super().__init__(coordinator)
#         self._id_interface = data_interface['id']
#         self._name_interface = name_interface
        
#         if self._id_interface.startswith('WifiMaster'):
#             self._attr_translation_key = "interface_wifi"
            
#             ssid = data_interface.get('ssid', '')
#             if not ssid and 'AccessPoint' in self._id_interface:
#                 clean_name = self._name_interface
#                 prefixes_to_remove = ['WiFi ', 'Wifi ']
#                 suffixes_to_remove = [' 2.4G', ' 5G', ' 2.4GHz', ' 5GHz']
                
#                 for prefix in prefixes_to_remove:
#                     if clean_name.startswith(prefix):
#                         clean_name = clean_name[len(prefix):]
                
#                 for suffix in suffixes_to_remove:
#                     if clean_name.endswith(suffix):
#                         clean_name = clean_name[:-len(suffix)]
                
#                 ssid = clean_name
            
#             is_5ghz = 'WifiMaster1' in self._id_interface
#             prefix = '(5GHz)' if is_5ghz else '(2.4GHz)'
            
#             self._display_name = f"{ssid} {prefix}"
            
#         elif self._id_interface.startswith('Wireguard'):
#             self._attr_translation_key = "interface_wireguard"
#             self._display_name = self._name_interface
#         else:
#             self._attr_translation_key = "interface"
#             self._display_name = self._name_interface
            
#         self._attr_unique_id = f"{coordinator.unique_id}_{self._attr_translation_key}_{self._id_interface}"
#         self._attr_device_info = coordinator.device_info
#         self._attr_translation_placeholders = {
#             "name_interface": self._display_name
#         }

#     @property
#     def name(self) -> str:
#         """Return the display name of this entity."""
#         return self._display_name

#     @property
#     def is_on(self) -> bool:
#         """Return state."""
#         return self.coordinator.data.show_interface[self._id_interface]['state'] == "up"

#     async def async_turn_on(self, **kwargs: Any) -> None:
#         """Turn on."""
#         await self.coordinator.router.turn_on_off_interface(self._id_interface, 'up')
#         await self.coordinator.async_request_refresh()

#     async def async_turn_off(self, **kwargs: Any) -> None:
#         """Turn off."""
#         await self.coordinator.router.turn_on_off_interface(self._id_interface, 'down')
#         await self.coordinator.async_request_refresh()

#     @property
#     def extra_state_attributes(self) -> dict[str, Any]:
#         """Return the state attributes."""
#         interface_data = self.coordinator.data.show_interface[self._id_interface]
#         attributes = {
#             "interface_type": self._id_interface,
#         }
        
#         if self._id_interface.startswith('WifiMaster'):
#             current_ssid = interface_data.get('ssid', '')
#             attributes.update({
#                 "ssid": current_ssid or self._display_name.split(' (')[0],
#                 "band": '5GHz' if 'WifiMaster1' in self._id_interface else '2.4GHz',
#                 "description": interface_data.get('description', '')
#             })
        
#         return attributes


# class KeeneticPortForwardingSwitchEntity(CoordinatorEntity[KeeneticRouterCoordinator], SwitchEntity):

#     _attr_translation_key="port_forwarding"
#     _attr_has_entity_name = True

#     def __init__(
#         self,
#         coordinator: KeeneticRouterCoordinator,
#         port_frw,
#     ) -> None:
#         """Initialize the Keenetic PortForwarding switch."""
#         super().__init__(coordinator)
#         self._pfrw = port_frw
#         self._pfrw_index = port_frw.index
#         self._pfrw_name = port_frw.name
#         self._attr_unique_id = f"{coordinator.unique_id}_{self._attr_translation_key}_{self._pfrw_index}"
#         self._attr_device_info = coordinator.device_info
#         self._attr_translation_placeholders = {"pfrw_name": f"{self._pfrw_name}"}

#     @property
#     def is_on(self) -> bool:
#         """Return state."""
#         return self.coordinator.data.show_rc_ip_static[self._pfrw_index].disable == False

#     async def async_turn_on(self, **kwargs: Any) -> None:
#         """Turn on."""
#         await self.coordinator.router.turn_on_off_port_forwarding(self._pfrw_index, True)
#         await self.coordinator.async_request_refresh()

#     async def async_turn_off(self, **kwargs: Any) -> None:
#         """Turn off."""
#         await self.coordinator.router.turn_on_off_port_forwarding(self._pfrw_index, False)
#         await self.coordinator.async_request_refresh()

#     @property
#     def extra_state_attributes(self) -> dict[str, StateType]:
#         """Return the state attributes."""
#         return {
#             "interface": self._pfrw.interface,
#             "protocol": self._pfrw.protocol,
#             "port": self._pfrw.port,
#             "end_port": self._pfrw.end_port,
#             "to_host": self._pfrw.to_host,
#             "index": self._pfrw.index,
#             "comment": self._pfrw.comment,
#         }
