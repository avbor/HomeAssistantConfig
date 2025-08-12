"""Inter RAO integration config and option flow handlers"""
import asyncio
import logging
from collections import OrderedDict
from datetime import timedelta
from functools import partial
from typing import (
    Any,
    ClassVar,
    Dict,
    Mapping,
    Optional,
    TYPE_CHECKING,
    Type,
    Union,
)

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.config_entries import ConfigFlow
from homeassistant.const import (
    CONF_DEFAULT,
    CONF_PASSWORD,
    CONF_TYPE,
    CONF_USERNAME,
)
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.typing import ConfigType

from custom_components.lkcomu_interrao._util import import_api_cls
from custom_components.lkcomu_interrao.const import (
    API_TYPE_DEFAULT,
    API_TYPE_NAMES,
    CONF_ACCOUNTS,
    CONF_USER_AGENT,
    DOMAIN,
)
from inter_rao_energosbyt.const import DEFAULT_USER_AGENT
from inter_rao_energosbyt.exceptions import EnergosbytException
from inter_rao_energosbyt.interfaces import (
    Account,
    BaseEnergosbytAPI,
)

if TYPE_CHECKING:
    pass

_LOGGER = logging.getLogger(__name__)

CONF_DISABLE_ENTITIES = "disable_entities"


def _flatten(conf: Any):
    if isinstance(conf, timedelta):
        return conf.total_seconds()
    if isinstance(conf, Mapping):
        return dict(zip(conf.keys(), map(_flatten, conf.values())))
    if isinstance(conf, (list, tuple)):
        return list(map(_flatten, conf))
    return conf


class LkcomuInterRAOConfigFlow(ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Inter RAO config entries."""

    VERSION = 1
    CONNECTION_CLASS = config_entries.CONN_CLASS_CLOUD_POLL

    CACHED_API_TYPE_NAMES: ClassVar[Optional[Dict[str, Any]]] = {}

    def __init__(self):
        """Instantiate config flow."""
        self._current_type = None
        self._current_config: Optional[ConfigType] = None
        self._devices_info = None
        self._accounts: Optional[Mapping[int, "Account"]] = None

        self.schema_user = None

    async def _check_entry_exists(self, type_: str, username: str):
        current_entries = self._async_current_entries()

        for config_entry in current_entries:
            if (
                config_entry.data[CONF_TYPE] == type_
                and config_entry.data[CONF_USERNAME] == username
            ):
                return True

        return False

    @staticmethod
    def make_entry_title(
        api_cls: Union[Type["BaseEnergosbytAPI"], "BaseEnergosbytAPI"], username: str
    ) -> str:
        from urllib.parse import urlparse

        return urlparse(api_cls.BASE_URL).netloc + " (" + username + ")"

    # Initial step for user interaction
    async def async_step_user(self, user_input: Optional[ConfigType] = None) -> Dict[str, Any]:
        """Handle a flow start."""
        if self.schema_user is None:
            try:
                # noinspection PyUnresolvedReferences
                from fake_useragent import UserAgent, FakeUserAgentError

            except ImportError:
                default_user_agent = DEFAULT_USER_AGENT

            else:
                try:
                    loop = asyncio.get_event_loop()
                    ua = await loop.run_in_executor(
                        None, partial(UserAgent, fallback=DEFAULT_USER_AGENT)
                    )
                    default_user_agent = ua["google chrome"]
                except FakeUserAgentError:
                    default_user_agent = DEFAULT_USER_AGENT

            schema_user = OrderedDict()
            schema_user[vol.Required(CONF_TYPE, default=API_TYPE_DEFAULT)] = vol.In(API_TYPE_NAMES)
            schema_user[vol.Required(CONF_USERNAME)] = str
            schema_user[vol.Required(CONF_PASSWORD)] = str
            schema_user[vol.Optional(CONF_USER_AGENT, default=default_user_agent)] = str
            self.schema_user = vol.Schema(schema_user)

        if user_input is None:
            return self.async_show_form(step_id="user", data_schema=self.schema_user)

        username = user_input[CONF_USERNAME]
        type_ = user_input[CONF_TYPE]

        if await self._check_entry_exists(type_, username):
            return self.async_abort(reason="already_configured_service")

        try:
            api_cls = await import_api_cls(type_)
        except (ImportError, AttributeError):
            _LOGGER.error("Could not find API type: %s", type_)
            return self.async_abort(reason="api_load_error")

        async with api_cls(
            username=username,
            password=user_input[CONF_PASSWORD],
            user_agent=user_input[CONF_USER_AGENT],
        ) as api:
            try:
                await api.async_authenticate()

            except EnergosbytException as e:
                _LOGGER.error(f"Authentication error: {repr(e)}")
                return self.async_show_form(
                    step_id="user",
                    data_schema=self.schema_user,
                    errors={"base": "authentication_error"},
                )

            try:
                self._accounts = await api.async_update_accounts()

            except EnergosbytException as e:
                _LOGGER.error(f"Request error: {repr(e)}")
                return self.async_show_form(
                    step_id="user",
                    data_schema=self.schema_user,
                    errors={"base": "update_accounts_error"},
                )

        self._current_config = user_input

        return await self.async_step_select()

    async def async_step_select(self, user_input: Optional[ConfigType] = None) -> Dict[str, Any]:
        accounts, current_config = self._accounts, self._current_config
        if user_input is None:
            if accounts is None or current_config is None:
                print("CONFIGS ARE NONE", accounts, current_config)
                return await self.async_step_user()

            return self.async_show_form(
                step_id="select",
                data_schema=vol.Schema(
                    {
                        vol.Optional(CONF_ACCOUNTS): cv.multi_select(
                            {
                                account.code: account.code + " (" + account.provider_name + ")"
                                for account_id, account in self._accounts.items()
                            }
                        )
                    }
                ),
            )

        if user_input[CONF_ACCOUNTS]:
            current_config[CONF_DEFAULT] = False
            current_config[CONF_ACCOUNTS] = dict.fromkeys(user_input[CONF_ACCOUNTS], True)

        return self.async_create_entry(
            title=self.make_entry_title(
                await import_api_cls(current_config[CONF_TYPE]),
                current_config[CONF_USERNAME],
            ),
            data=_flatten(current_config),
        )

    async def async_step_import(self, user_input: Optional[ConfigType] = None) -> Dict[str, Any]:
        if user_input is None:
            return self.async_abort(reason="unknown_error")

        username = user_input[CONF_USERNAME]
        type_ = user_input[CONF_TYPE]

        if await self._check_entry_exists(type_, username):
            return self.async_abort(reason="already_exists")

        api_cls = await import_api_cls(type_)

        return self.async_create_entry(
            title=self.make_entry_title(api_cls, username),
            data={CONF_USERNAME: username, CONF_TYPE: type_},
        )

    # @staticmethod
    # @callback
    # def async_get_options_flow(config_entry: ConfigEntry) -> OptionsFlow:
    #     return Inter RAOOptionsFlow(config_entry)
