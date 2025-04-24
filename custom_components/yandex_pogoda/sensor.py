"""Sensor component."""

from __future__ import annotations

from dateutil import parser

from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorEntity,
    SensorEntityDescription,
    SensorStateClass,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import (
    STATE_UNAVAILABLE,
    STATE_UNKNOWN,
    DEGREE,
    UnitOfSpeed,
    UnitOfTemperature,
)
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import EntityCategory
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.restore_state import RestoreEntity
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import (
    ATTR_API_CONDITION,
    ATTR_API_FEELS_LIKE_TEMPERATURE,
    ATTR_API_TEMPERATURE,
    ATTR_API_SERVER_TIME,
    ATTR_API_WIND_BEARING,
    ATTR_WIND_INTERCARDINAL_DIRECTION,
    ATTR_API_WIND_SPEED,
    ATTR_API_WIND_GUST,
    ATTR_API_YA_CONDITION,
    ATTR_MIN_FORECAST_TEMPERATURE,
    ATTR_API_SUNRISE_BEGIN_TIME,
    ATTR_API_SUNRISE_END_TIME,
    ATTRIBUTION,
    DOMAIN,
    ENTRY_NAME,
    HA_WEATHER_STATES,
    TEMPERATURE_CONVERTER,
    UPDATER,
    WIND_SPEED_CONVERTER,
    YA_CONDITION_STATES,
    WEATHER_STATES_CONVERSION,
    convert_unit_value,
)
from .updater import WeatherUpdater

UNIT_CONVERTOR_TYPE_MAP: dict[str, str] = {
    ATTR_API_TEMPERATURE: TEMPERATURE_CONVERTER,
    ATTR_API_FEELS_LIKE_TEMPERATURE: TEMPERATURE_CONVERTER,
    ATTR_API_WIND_SPEED: WIND_SPEED_CONVERTER,
    ATTR_API_WIND_GUST: WIND_SPEED_CONVERTER,
    ATTR_MIN_FORECAST_TEMPERATURE: TEMPERATURE_CONVERTER,
}

WEATHER_SENSORS: tuple[SensorEntityDescription, ...] = (
    SensorEntityDescription(
        key=ATTR_API_TEMPERATURE,
        name="Temperature",
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        entity_registry_enabled_default=True,
    ),
    SensorEntityDescription(
        key=ATTR_API_FEELS_LIKE_TEMPERATURE,
        name="Feels like temperature",
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        entity_registry_enabled_default=True,
    ),
    SensorEntityDescription(
        key=ATTR_API_WIND_SPEED,
        name="Wind speed",
        native_unit_of_measurement=UnitOfSpeed.METERS_PER_SECOND,
        state_class=SensorStateClass.MEASUREMENT,
        entity_registry_enabled_default=True,
        icon="mdi:weather-windy",
    ),
    SensorEntityDescription(
        key=ATTR_API_WIND_GUST,
        name="Wind gust",
        native_unit_of_measurement=UnitOfSpeed.METERS_PER_SECOND,
        state_class=SensorStateClass.MEASUREMENT,
        entity_registry_enabled_default=True,
        icon="mdi:weather-windy",
    ),
    SensorEntityDescription(
        key=ATTR_API_WIND_BEARING,
        name="Wind bearing",
        entity_registry_enabled_default=False,
        icon="mdi:compass-rose",
        translation_key=ATTR_API_WIND_BEARING,
        native_unit_of_measurement=DEGREE,
        device_class=SensorDeviceClass.WIND_DIRECTION,
        state_class=SensorStateClass.MEASUREMENT_ANGLE,
    ),
    SensorEntityDescription(
        key=ATTR_WIND_INTERCARDINAL_DIRECTION,
        name="Wind direction",
        entity_registry_enabled_default=True,
        icon="mdi:compass-rose",
        translation_key=ATTR_WIND_INTERCARDINAL_DIRECTION,
    ),
    SensorEntityDescription(
        key=ATTR_API_CONDITION,
        name="Condition HomeAssistant",
        entity_registry_enabled_default=False,
        translation_key=ATTR_API_CONDITION,
        options=HA_WEATHER_STATES,
        device_class=SensorDeviceClass.ENUM,
    ),
    SensorEntityDescription(
        key=ATTR_API_SERVER_TIME,
        name="Data update time",
        device_class=SensorDeviceClass.TIMESTAMP,
        state_class=None,
        entity_registry_enabled_default=True,
        entity_category=EntityCategory.DIAGNOSTIC,
    ),
    SensorEntityDescription(
        key=ATTR_API_YA_CONDITION,
        name="Condition Yandex",
        entity_registry_enabled_default=True,
        translation_key=ATTR_API_YA_CONDITION,
        options=YA_CONDITION_STATES,
        device_class=SensorDeviceClass.ENUM,
    ),
    SensorEntityDescription(
        key=ATTR_MIN_FORECAST_TEMPERATURE,
        name="Minimal forecast temperature",
        native_unit_of_measurement=UnitOfTemperature.CELSIUS,
        device_class=SensorDeviceClass.TEMPERATURE,
        state_class=SensorStateClass.MEASUREMENT,
        entity_registry_enabled_default=True,
        icon="mdi:thermometer-chevron-down",
    ),
    SensorEntityDescription(
        key=ATTR_API_SUNRISE_BEGIN_TIME,
        name="Next sunrise",
        device_class=SensorDeviceClass.TIMESTAMP,
        entity_registry_enabled_default=True,
    ),
    SensorEntityDescription(
        key=ATTR_API_SUNRISE_END_TIME,
        name="Next sunset",
        device_class=SensorDeviceClass.TIMESTAMP,
        entity_registry_enabled_default=True,
    ),
)


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up weather "Yandex.Weather" sensor entry."""
    domain_data = hass.data[DOMAIN][config_entry.entry_id]
    name = domain_data[ENTRY_NAME]
    updater = domain_data[UPDATER]

    entities: list[YandexWeatherSensor] = [
        YandexWeatherSensor(
            name,
            f"{config_entry.unique_id}-{description.key}",
            description,
            updater,
        )
        for description in WEATHER_SENSORS
    ]
    async_add_entities(entities)


class YandexWeatherSensor(SensorEntity, CoordinatorEntity, RestoreEntity):
    """Yandex.Weather sensor entry."""

    _attr_attribution = ATTRIBUTION
    coordinator: WeatherUpdater

    def __init__(
        self,
        name: str,
        unique_id: str,
        description: SensorEntityDescription,
        updater: WeatherUpdater,
    ) -> None:
        """Initialize sensor."""
        CoordinatorEntity.__init__(self, coordinator=updater)
        RestoreEntity.__init__(self)
        self.entity_description = description

        self._attr_name = f"{name} {description.name}"
        self._attr_unique_id = unique_id
        self._attr_device_info = self.coordinator.device_info

    async def async_added_to_hass(self) -> None:
        """When entity is added to hass."""
        await RestoreEntity.async_added_to_hass(self)
        await CoordinatorEntity.async_added_to_hass(self)

        state = await self.async_get_last_state()
        if not state:
            return

        if state.state in (STATE_UNAVAILABLE, STATE_UNKNOWN):
            self._attr_available = False
        else:
            self._attr_available = True
            if self.entity_description.key in {
                ATTR_API_SERVER_TIME,
                ATTR_API_SUNRISE_BEGIN_TIME,
                ATTR_API_SUNRISE_END_TIME,
            }:
                self._attr_native_value = parser.parse(state.state)
            elif self.entity_description.key in UNIT_CONVERTOR_TYPE_MAP:
                self._attr_native_value = str(
                    convert_unit_value(
                        UNIT_CONVERTOR_TYPE_MAP[self.entity_description.key],
                        float(state.state),
                        state.attributes.get("unit_of_measurement")
                        or self.unit_of_measurement,
                        self.native_unit_of_measurement,
                    )
                )
            elif (
                self.entity_description.key == ATTR_API_YA_CONDITION
                and state.state not in YA_CONDITION_STATES
            ):  # for backward compatibility
                self._attr_native_value = WEATHER_STATES_CONVERSION.get(state.state)
            else:
                self._attr_native_value = state.state

        self.async_write_ha_state()

    def _handle_coordinator_update(self) -> None:
        self._attr_available = True
        self._attr_native_value = self.coordinator.data.get(
            self.entity_description.key, None
        )
        if self.entity_description.key == ATTR_API_YA_CONDITION:
            self._attr_icon = self.coordinator.data.get(f"{ATTR_API_YA_CONDITION}_icon")

        self.async_write_ha_state()
