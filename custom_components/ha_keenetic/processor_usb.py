"""USB ports processor for Keenetic integration."""
import logging
from typing import Dict, Any, Callable, List, Union

_LOGGER = logging.getLogger(__name__)

class UsbProcessor:
    """Process USB ports data from Keenetic router."""
    
    @staticmethod
    async def process_usb_ports(
        usb_info: Union[List[Dict[str, Any]], Dict[str, Any], Any], 
        get_media_info_fn: Callable
    ) -> Dict[str, Any]:
        """Process USB ports and return formatted data."""
        processed_ports = {}
        try:
            # Проверяем, что usb_info - это список
            if not isinstance(usb_info, list):
                if isinstance(usb_info, dict):
                    usb_info = [usb_info]
                else:
                    _LOGGER.warning("USB info is not a list or dict: %s", type(usb_info))
                    return {}
            
            _LOGGER.debug("Processing USB info: %s", usb_info)
            
            # Если список пуст, возвращаем пустой словарь
            if not usb_info:
                _LOGGER.info("No USB ports found")
                return {}
            
            for usb_port in usb_info:
                if not isinstance(usb_port, dict):
                    _LOGGER.warning("USB port is not a dict: %s", usb_port)
                    continue
                
                port_id = usb_port.get('port')
                if not port_id:
                    # Пробуем другие возможные имена полей
                    for field in ['id', 'number', 'index']:
                        if field in usb_port:
                            port_id = usb_port.get(field)
                            if port_id:
                                break
                
                if not port_id:
                    _LOGGER.warning("USB port has no port ID: %s", usb_port)
                    continue
                
                # Получаем информацию о подключенных медиа-устройствах
                try:
                    media_name = f"Media{int(port_id)-1}"
                    media_info = None
                    if get_media_info_fn:
                        media_info = await get_media_info_fn(media_name)
                except Exception as ex:
                    _LOGGER.error("Error getting media info: %s", ex)
                    media_info = None
                    media_name = None
                
                # Получаем информацию о питании
                power_info = usb_port.get('power', {})
                power_status = True
                if isinstance(power_info, dict):
                    power_status = not power_info.get('shutdown', False)
                
                processed_ports[f"usb_port_{port_id}"] = {
                    "id": f"usb_port_{port_id}",
                    "type": "usb",
                    "port": port_id,
                    "description": usb_port.get('description', ''),
                    "label": f"USB {port_id}",
                    "connected": media_info is not None,
                    "attributes": {
                        "manufacturer": usb_port.get('manufacturer', ''),
                        "product": usb_port.get('product', ''),
                        "power": power_status,
                        "media_name": media_name,
                        "media_connected": media_info is not None,
                        "media_info": media_info
                    }
                }
            
            _LOGGER.debug("Processed USB ports: %s", processed_ports)
            return processed_ports
        except Exception as ex:
            _LOGGER.error("Error processing USB ports: %s", str(ex), exc_info=True)
            return {}