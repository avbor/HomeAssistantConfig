"""VPN interfaces processor for Keenetic integration."""
import logging
from typing import Dict, Any, Callable

_LOGGER = logging.getLogger(__name__)

class VpnProcessor:
    """Process VPN interfaces from Keenetic router."""
    
    @staticmethod
    async def process_vpn_interfaces(
            interface_info: dict, 
            get_statistics_fn: Callable
        ) -> Dict[str, Any]:
        """Process VPN interfaces and return formatted data."""
        vpn_data = {}
        try:
            # Логируем все интерфейсы для отладки
            _LOGGER.debug("Processing interfaces for VPN: %s", list(interface_info.keys()))
            
            # Определяем VPN интерфейсы по типу или имени
            vpn_keywords = [
                'pptp', 'l2tp', 'openvpn', 'ipsec', 'wireguard', 'wg', 'sstp', 'ovpn',
                'vpn', 'tunnel', 'client', 'server'
            ]
            
            # Обрабатываем все интерфейсы
            for interface_id, interface_data in interface_info.items():
                # Проверяем, является ли интерфейс VPN по типу или имени
                is_vpn = False
                
                # Проверяем по типу интерфейса
                interface_type = interface_data.get('type', '').lower()
                if any(vpn_type in interface_type for vpn_type in vpn_keywords):
                    is_vpn = True
                
                # Проверяем по имени интерфейса
                if not is_vpn:
                    interface_id_lower = interface_id.lower()
                    if any(vpn_type in interface_id_lower for vpn_type in vpn_keywords):
                        is_vpn = True
                
                # Проверяем по описанию
                if not is_vpn:
                    description = interface_data.get('description', '').lower()
                    if any(vpn_type in description for vpn_type in vpn_keywords):
                        is_vpn = True
                
                # Если интерфейс не VPN, пропускаем его
                if not is_vpn:
                    continue
                
                _LOGGER.debug("Found VPN interface: %s, data: %s", interface_id, interface_data)
                
                # Получаем статистику по интерфейсу
                stats = await get_statistics_fn(interface_id)
                
                # Определяем тип VPN
                vpn_type = "VPN"
                for vt in ['pptp', 'l2tp', 'openvpn', 'ipsec', 'wireguard', 'wg', 'sstp']:
                    if vt in interface_id.lower() or vt in interface_type:
                        if vt == 'wg':
                            vpn_type = "WireGuard"
                        else:
                            vpn_type = vt.upper()
                        break
                
                # Определяем состояние интерфейса
                state = interface_data.get('state', 'down')
                link = interface_data.get('link', 'down')
                is_up = interface_data.get('up', False)
                
                # Формируем имя для отображения
                display_name = interface_data.get('description', '')
                if not display_name:
                    # Если нет описания, используем имя интерфейса
                    if 'wireguard' in interface_id.lower() or 'wg' in interface_id.lower():
                        # Для WireGuard интерфейсов используем оригинальное имя без изменений
                        display_name = interface_id
                    else:
                        display_name = f"{vpn_type} {interface_id.split('/')[-1]}"
                
                # Формируем данные об интерфейсе
                vpn_data[interface_id] = {
                    "id": interface_id,
                    "type": "vpn",
                    "vpn_type": vpn_type,
                    "description": interface_data.get("description", ""),
                    "label": display_name,
                    "up": is_up,
                    "link": link,
                    "state": state,
                    "mac": interface_data.get("mac", ""),
                    "interface-name": interface_data.get("interface-name", ""),
                    "connected": state == "up",
                    "attributes": {
                        "vpn_type": vpn_type,
                        "description": interface_data.get("description", ""),
                        "state": state,
                        "link": link,
                        "statistics": stats
                    }
                }
                
                # Добавляем дополнительные атрибуты из interface_data
                for key, value in interface_data.items():
                    if key not in ["id", "type", "description", "up", "link", "mac", "interface-name", "state"]:
                        vpn_data[interface_id][key] = value
                        if key not in vpn_data[interface_id]["attributes"]:
                            vpn_data[interface_id]["attributes"][key] = value
            
            _LOGGER.debug("Processed VPN interfaces: %s", list(vpn_data.keys()))
            return vpn_data
        except Exception as ex:
            _LOGGER.error("Error processing VPN interfaces: %s", str(ex))
            return {}