"""Ethernet ports processor for Keenetic integration."""
import logging
from typing import Dict, Any, Callable

_LOGGER = logging.getLogger(__name__)

class EthernetProcessor:
    """Process Ethernet ports data from Keenetic router."""
    
    @staticmethod
    async def process_ethernet_ports(
            interface_info: dict, 
            get_statistics_fn: Callable
        ) -> Dict[str, Any]:
        """Process Ethernet ports and return formatted data."""
        processed_ports = {}
        try:
            wan_interface = None
            for interface_id, interface_data in interface_info.items():
                if interface_data.get("defaultgw") is True:
                    wan_interface = interface_id
                    break

            for interface_id, interface_data in interface_info.items():
                interface_stats = await get_statistics_fn(interface_id)
                
                if interface_id == wan_interface:
                    port_data = interface_data.get("port", {})
                    processed_ports[interface_id] = {
                        "id": interface_id,
                        "type": "wan",
                        "description": interface_data.get("description", ""),
                        "label": "WAN",
                        "link": interface_data.get("link", "down"),
                        "attributes": {
                            "speed": port_data.get("speed", "0"),
                            "interface_name": interface_data.get("interface-name", ""),
                            "ip_address": interface_data.get("address", ""),
                            "mac": interface_data.get("mac", ""),
                            "rx_speed": interface_stats.get("rxspeed", 0),
                            "tx_speed": interface_stats.get("txspeed", 0),
                            "rx_bytes": interface_stats.get("rxbytes", 0),
                            "tx_bytes": interface_stats.get("txbytes", 0)
                        }
                    }
                elif "port" in interface_data:
                    for port_id, port_data in interface_data["port"].items():
                        if port_data.get("type") == "Port":
                            port_interface_id = f"{interface_id}_port_{port_id}"
                            port_stats = await get_statistics_fn(port_id)
                            processed_ports[port_interface_id] = {
                                "id": port_interface_id,
                                "type": "port",
                                "description": port_data.get("description", ""),
                                "label": f"Port {port_data.get('label', port_id)}",
                                "link": port_data.get("link", "down"),
                                "attributes": {
                                    "speed": port_data.get("speed", "0"),
                                    "interface_name": port_data.get("interface-name", ""),
                                    "duplex": port_data.get("duplex", ""),
                                    "rx_speed": port_stats.get("rxspeed", 0),
                                    "tx_speed": port_stats.get("txspeed", 0),
                                    "rx_bytes": port_stats.get("rxbytes", 0),
                                    "tx_bytes": port_stats.get("txbytes", 0)
                                }
                            }
            
            _LOGGER.debug("Processed Ethernet ports: %s", processed_ports)
            return processed_ports
        except Exception as ex:
            _LOGGER.error("Error processing Ethernet ports: %s", str(ex))
            return {}