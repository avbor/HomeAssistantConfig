"""Implement the Yandex Smart Home base device capability."""

from __future__ import annotations

from abc import abstractmethod
from functools import cached_property
from typing import TYPE_CHECKING, Any, Protocol, Self, runtime_checkable

from homeassistant.const import ATTR_SUPPORTED_FEATURES
from homeassistant.core import Context, HomeAssistant, State
from homeassistant.helpers.typing import ConfigType

from .const import CONF_SLOW
from .helpers import CacheStore, ListRegistry
from .schema import (
    CapabilityDescription,
    CapabilityInstance,
    CapabilityInstanceActionResultValue,
    CapabilityInstanceActionState,
    CapabilityInstanceState,
    CapabilityInstanceStateValue,
    CapabilityParameters,
    CapabilityType,
)

if TYPE_CHECKING:
    from .entry_data import ConfigEntryData


@runtime_checkable
class Capability(Protocol[CapabilityInstanceActionState]):
    """Base class for a device capability."""

    device_id: str
    type: CapabilityType
    instance: CapabilityInstance

    _hass: HomeAssistant
    _entry_data: ConfigEntryData

    @property
    @abstractmethod
    def supported(self) -> bool:
        """Test if the capability is supported."""
        ...

    @property
    def retrievable(self) -> bool:
        """Test if the capability can return the current value."""
        return True

    @property
    def reportable(self) -> bool:
        """Test if the capability can report value changes."""
        return self._entry_data.is_reporting_states

    @property
    def time_sensitive(self) -> bool:
        """Test if value changes should be reported immediately."""
        return False

    @property
    @abstractmethod
    def parameters(self) -> CapabilityParameters | None:
        """Return parameters for a devices list request."""
        ...

    def get_description(self) -> CapabilityDescription | None:
        """Return a description for a device list request. Capability with an empty description isn't discoverable."""
        return CapabilityDescription(
            type=self.type, retrievable=self.retrievable, reportable=self.reportable, parameters=self.parameters
        )

    @abstractmethod
    def get_value(self) -> Any:
        """Return the current capability value."""
        ...

    def get_instance_state(self) -> CapabilityInstanceState | None:
        """Return a state for a state query request."""
        if (value := self.get_value()) is not None:
            return CapabilityInstanceState(
                type=self.type, state=CapabilityInstanceStateValue(instance=self.instance, value=value)
            )

        return None

    @abstractmethod
    async def set_instance_state(
        self, context: Context, state: CapabilityInstanceActionState
    ) -> CapabilityInstanceActionResultValue:
        """Change the capability state."""
        ...

    def check_value_change(self, other: Self | None) -> bool:
        """Test if the capability value differs from other capability."""
        if other is None:
            return True

        value, other_value = self.get_value(), other.get_value()
        if value is None:
            return False

        if other_value is None or value != other_value:
            return True

        return False

    @cached_property
    def _entity_config(self) -> ConfigType:
        """Return additional configuration for the device."""
        return self._entry_data.get_entity_config(self.device_id)

    @property
    def _wait_for_service_call(self) -> bool:
        """Check if service should be run in blocking mode."""
        if self._entity_config.get(CONF_SLOW) is True:
            return False

        return True

    def __str__(self) -> str:
        """Return string representation."""
        return f"instance {self.instance} of {self.type.short} capability of {self.device_id}"

    def __repr__(self) -> str:
        """Return the representation."""
        return (
            f"<{self.__class__.__name__}"
            f" device_id={self.device_id }"
            f" type={self.type}"
            f" instance={self.instance}"
            f">"
        )

    def __eq__(self, other: Any) -> bool:
        """Compare capabilities."""
        return bool(
            isinstance(other, Capability)
            and self.type == other.type
            and self.instance == other.instance
            and self.device_id == other.device_id
        )


class ActionOnlyCapabilityMixin:
    """Represents a capability that can only execute an action."""

    @property
    def retrievable(self) -> bool:
        """Test if the capability can return the current value."""
        return False

    @property
    def reportable(self) -> bool:
        """Test if the capability can report value changes."""
        return False

    def get_value(self) -> None:
        """Return the current capability value."""
        return None


class DummyCapability(Capability[CapabilityInstanceActionState]):
    """Represents a capability that user has disabled."""

    def __init__(
        self,
        hass: HomeAssistant,
        entry_data: ConfigEntryData,
        type: CapabilityType,
        instance: CapabilityInstance,
        device_id: str,
    ):
        """Initialize a dummy capability."""
        self._hass = hass
        self._entry_data = entry_data

        self.type = type
        self.instance = instance
        self.device_id = device_id

    @property
    def supported(self) -> bool:
        """Test if the capability is supported."""
        raise NotImplementedError

    @property
    def parameters(self) -> CapabilityParameters | None:
        """Return parameters for a devices list request."""
        raise NotImplementedError

    def get_value(self) -> Any:
        """Return the current capability value."""
        raise NotImplementedError

    async def set_instance_state(
        self, context: Context, state: CapabilityInstanceActionState
    ) -> CapabilityInstanceActionResultValue:
        """Change the capability state."""
        raise NotImplementedError


@runtime_checkable
class StateCapability(Capability[CapabilityInstanceActionState], Protocol):
    """Base class for a device capability based on the state."""

    state: State
    device_id: str

    _hass: HomeAssistant
    _entry_data: ConfigEntryData

    def __init__(self, hass: HomeAssistant, entry_data: ConfigEntryData, device_id: str, state: State):
        """Initialize a capability for the state."""
        self._hass = hass
        self._entry_data = entry_data

        self.device_id = device_id
        self.state = state

    @property
    def _state_features(self) -> int:
        """Return supported features for the state."""
        return int(self.state.attributes.get(ATTR_SUPPORTED_FEATURES, 0))

    @property
    def _cache(self) -> CacheStore:
        """Return cache storage."""
        return self._entry_data.cache


STATE_CAPABILITIES_REGISTRY = ListRegistry[type[StateCapability[Any]]]()
