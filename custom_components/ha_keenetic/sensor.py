"""The Keenetic API sensor entities."""

from dataclasses import dataclass
from collections.abc import Callable
from typing import Any
from datetime import UTC, datetime, timedelta
import logging

from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorStateClass,
    SensorEntity,
    SensorEntityDescription,
)
from homeassistant.const import (
    PERCENTAGE, 
    UnitOfInformation, 
    EntityCategory, 
    UnitOfDataRate,
    UnitOfInformation,
    UnitOfTime,
)
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers import device_registry as dr
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.typing import StateType
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .coordinator import KeeneticRouterCoordinator
from .keenetic import KeeneticFullData
from .const import (
    DOMAIN,
    COORD_FULL,
)

_LOGGER = logging.getLogger(__name__)


@dataclass(frozen=True, kw_only=True)
class KeeneticRouterSensorEntityDescription(SensorEntityDescription):
    """A class that describes sensor entities."""
    value: Callable[[KeeneticFullData, Any], Any] = (
        lambda coordinator, key: coordinator.data.show_system[key] if coordinator.data.show_system[key] is not None else None
    )
    attributes_fn: Callable[[KeeneticFullData], dict[str, Any]] | None = None


def convert_uptime(uptime: int) -> datetime:
    """Convert uptime."""
    if uptime != None:
        return (datetime.now(tz=UTC) - timedelta(seconds=int(uptime))).replace(second=0, microsecond=0)
    else:
        return None

def convert_data_size(data_size: int = 0) -> float:
    """Convert data_size."""
    return round(data_size/1024/1024, 3)

def ind_wan_ip_adress(fdata: KeeneticFullData):
    """Определение внешнего IP адреса."""
    try:
        data_p_i = fdata.priority_interface
        show_interface = fdata.show_interface
        priority_interface = sorted(data_p_i, key=lambda x: data_p_i[x]['order'])
        for row in priority_interface:
            if show_interface[row]["connected"] == "yes":
                if row.startswith('Wireguard'):
                    return show_interface[row]["wireguard"]["peer"][0]["remote"]
                else:
                    return show_interface[row]["address"]
    except Exception as ex:
        _LOGGER.debug(f'Not ind_wan_ip_adress - {ex}')
        return None


SENSOR_TYPES: tuple[KeeneticRouterSensorEntityDescription, ...] = (
    KeeneticRouterSensorEntityDescription(
        key="cpuload",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        native_unit_of_measurement=PERCENTAGE,
    ),
    KeeneticRouterSensorEntityDescription(
        key="memory",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        native_unit_of_measurement=PERCENTAGE,
        value=lambda coordinator, key: int(float(coordinator.data.show_system[key].split('/')[0])/float(coordinator.data.show_system[key].split('/')[1])*100),
    ),
    KeeneticRouterSensorEntityDescription(
        key="uptime",
        device_class=SensorDeviceClass.TIMESTAMP,
        entity_category=EntityCategory.DIAGNOSTIC,
        value=lambda coordinator, key: convert_uptime(coordinator.data.show_system[key]),
    ),
    KeeneticRouterSensorEntityDescription(
        key="wan_ip_adress",
        entity_category=EntityCategory.DIAGNOSTIC,
        value=lambda coordinator, key: ind_wan_ip_adress(coordinator.data),
    ),
    KeeneticRouterSensorEntityDescription(
        key="clients_wifi",
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value=lambda coordinator, key: len(coordinator.data.show_associations.get("station", [])),
    ),
    KeeneticRouterSensorEntityDescription(
        key="hostname",
        entity_category=EntityCategory.DIAGNOSTIC,
        value=lambda coordinator, key: coordinator.data.show_system.get("hostname", ""),
    ),
    KeeneticRouterSensorEntityDescription(
        key="domainname",
        entity_category=EntityCategory.DIAGNOSTIC,
        value=lambda coordinator, key: coordinator.data.show_system.get("domainname", ""),
    ),
)

async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback
) -> None:
    """Set up the Keenetic sensor."""
    coordinator = hass.data[DOMAIN][entry.entry_id][COORD_FULL]
    sensors = []
    
    # Добавляем сенсоры из SENSOR_TYPES
    for description in SENSOR_TYPES:
        try:
            if description.value(coordinator, description.key) is not None:
                sensors.append(KeeneticRouterSensor(coordinator, description, description.key, description.key))
        except Exception as err:
            _LOGGER.debug(f'async_setup_entry sensor SENSOR_TYPES {description} err - {err}')

    # Добавляем сенсоры для Mesh-узлов
    if coordinator.router.hw_type == "router":
        try:
            _LOGGER.debug("Attempting to get mesh nodes")
            mesh_nodes = await coordinator.router.get_mesh_nodes()
            _LOGGER.debug("Got mesh nodes: %s", mesh_nodes)
            
            if mesh_nodes:
                for node_id, node_data in mesh_nodes.items():
                    _LOGGER.debug("Creating sensor for mesh node: %s", node_id)
                    sensors.append(
                        KeeneticMeshNodeSensor(
                            coordinator,
                            node_id,
                            node_data,
                        )
                    )
                _LOGGER.debug("Created %d mesh node sensors", len(mesh_nodes))
            else:
                _LOGGER.debug("No mesh nodes found")
        except Exception as ex:
            _LOGGER.error(f"Error setting up mesh node sensors: {ex}", exc_info=True)
    
    async_add_entities(sensors, False)

class KeeneticMeshNodeSensor(CoordinatorEntity[KeeneticRouterCoordinator], SensorEntity):
    """Representation of a Keenetic Mesh Node sensor."""
    
    _attr_has_entity_name = True
    MESH_NODE_PREFIX = "mesh_node_"
    
    def __init__(
        self,
        coordinator: KeeneticRouterCoordinator,
        node_id: str,
        node_data: dict,
    ) -> None:
        """Initialize the mesh node sensor."""
        super().__init__(coordinator)
        self._node_id = node_id
        self._node_data = node_data
        
        model = node_data.get("model", "")
        known_host = node_data.get("known-host", "") or node_data.get("known_host", "")
        if known_host:
            display_name = f"{model}"
        else:
            display_name = f"Node {node_id}"
        
        self._attr_name = f"Mesh {display_name}"
        self._attr_translation_key = None
        self._attr_translation_placeholders = None
        
        self._attr_unique_id = f"{coordinator.unique_id}_{self.MESH_NODE_PREFIX}{node_id}"

        self.entity_id = f"sensor.keenetic_{self.MESH_NODE_PREFIX}{node_id.replace(':', '_')}"
        
        self._attr_device_info = coordinator.device_info
    
    @property
    def icon(self) -> str:
        """Return the icon of the sensor."""
        ICON_MESH_NODE = "mdi:access-point"
        ICON_MESH_NODE_OFFLINE = "mdi:access-point-off"
        
        # Используем данные, которые уже есть в _node_data
        return ICON_MESH_NODE if self._node_data.get("status") == "connected" else ICON_MESH_NODE_OFFLINE
    
    @property
    def native_value(self):
        """Return the state of the sensor."""
        return self._node_data.get("status", "unknown")
    
    @property
    def extra_state_attributes(self):
        """Return the state attributes."""
        attributes = self._node_data.get("attributes", {})
        
        result = {
            "ip_address": attributes.get("ip", ""),
            "mode": attributes.get("mode", ""),
            "hw_id": attributes.get("hw_id", ""),
            "firmware": attributes.get("firmware", ""),
            "firmware_available": attributes.get("firmware_available", ""),
            "memory": attributes.get("memory", ""),
            "uptime": attributes.get("uptime", ""),
            "cloud_state": attributes.get("cloud_agent_state", ""),
            "internet_available": attributes.get("internet_available", False),
        }
        
        return result

class KeeneticRouterSensor(CoordinatorEntity[KeeneticRouterCoordinator], SensorEntity):
    _attr_has_entity_name = True
    entity_description: KeeneticRouterSensorEntityDescription

    def __init__(
            self,
            coordinator: KeeneticRouterCoordinator,
            description: KeeneticRouterSensorEntityDescription,
            obj_id: str,
            obj_name: str,
    ) -> None:
        super().__init__(coordinator)

        self._attr_device_info = coordinator.device_info
        self.obj_id = obj_id
        self._attr_unique_id = f"{coordinator.router.mac}_{description.key}"
        if obj_id != description.key:
            self._attr_unique_id += f"_{obj_id}"
            
        self.entity_description = description
        self._attr_translation_key = description.key
        self._attr_translation_placeholders = {"name": f"{obj_name}"}
        
        device_name = coordinator.router.model.lower().replace(' ', '_')
        self.entity_id = f"sensor.{device_name}_{description.key}"
        if obj_id != description.key:
            self.entity_id += f"_{obj_id}"

    @property
    def native_value(self) -> StateType:
        """Sensor value."""
        return self.entity_description.value(self.coordinator, self.obj_id)

    @property
    def extra_state_attributes(self) -> dict[str, str] | None:
        """Return the state attributes of the sensor."""
        if self.entity_description.attributes_fn is not None:
            return self.entity_description.attributes_fn(self.coordinator.data)
        else:
            return None
