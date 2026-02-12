from homeassistant.components.binary_sensor import (
    BinarySensorDeviceClass,
    BinarySensorEntity,
)

from .core.entity import YandexCustomEntity
from .hass import hass_utils

INCLUDE_CAPABILITIES = ("devices.capabilities.lock",)

ENTITY_DESCRIPTIONS = {
    "lock": BinarySensorDeviceClass.LOCK,
}


async def async_setup_entry(hass, entry, async_add_entities):
    entities = []

    for quasar, device, config in hass_utils.incluce_devices(hass, entry):
        for instance in device["capabilities"]:
            if instance["type"] in INCLUDE_CAPABILITIES:
                entities.append(YandexBinarySensor(quasar, device, instance))

    async_add_entities(entities)


# noinspection PyAbstractClass
class YandexBinarySensor(BinarySensorEntity, YandexCustomEntity):

    def internal_init(self, capabilities: dict, properties: dict):
        # {'access_methods': None, 'instance': 'lock', 'retrievable': True, 'values': ['closed', 'open']}
        if desc := ENTITY_DESCRIPTIONS.get(self.instance):
            self._attr_device_class = desc

    def internal_update(self, capabilities: dict, properties: dict):
        if value := capabilities.get(self.instance):
            if self.instance == "lock":
                # On means open (unlocked), Off means closed (locked)
                self._attr_is_on = value == "open"
