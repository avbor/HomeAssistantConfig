import voluptuous as vol
import logging
import uuid
from homeassistant.config_entries import (
    ConfigFlow,
    ConfigEntry,
    OptionsFlow,
    CONN_CLASS_LOCAL_POLL,
)
import homeassistant.helpers.config_validation as cv
from .const import DOMAIN, CONF_FLATS
from homeassistant.const import CONF_EMAIL, CONF_PASSWORD, CONF_SCAN_INTERVAL
from homeassistant.core import callback
from .api import SauresHA

_LOGGER = logging.getLogger(__name__)


# ---------------------------
#   configured_instances
# ---------------------------
class SaureshaConfigFlow(ConfigFlow, domain=DOMAIN):

    VERSION = 1
    CONNECTION_CLASS = CONN_CLASS_LOCAL_POLL

    def __init__(self):
        """Init config flow."""
        self._errors = {}

    async def async_step_import(self, platform_config):
        if platform_config is None:
            return self.async_abort(reason="unknown_error")

        await self.async_set_unique_id(platform_config[CONF_EMAIL])
        self._abort_if_unique_id_configured()

        # if self._async_current_entries():
        # return self.async_abort(reason="no_mixed_config")

        email = platform_config[CONF_EMAIL]
        password = platform_config[CONF_PASSWORD]
        flat_ids = platform_config[CONF_FLATS]
        user_input = {
            CONF_EMAIL: email,
            CONF_PASSWORD: password,
            CONF_SCAN_INTERVAL: 30,
        }
        user_options = {
            CONF_FLATS: str(flat_ids).split(","),
        }
        cur_entry = self.async_create_entry(
            title=platform_config[CONF_EMAIL], data=user_input, options=user_options
        )
        return cur_entry

    async def async_step_user(self, user_input=None):

        self._errors = {}

        # if self._async_current_entries():
        # return self.async_abort(reason="no_mixed_config")
        # if self.hass.data.get(DOMAIN):
        # return self.async_abort(reason="no_mixed_config")

        if user_input is not None:

            # Test connection
            SauresAPI: SauresHA = SauresHA(
                self.hass, user_input[CONF_EMAIL], user_input[CONF_PASSWORD], "true", ""
            )

            res = await SauresAPI.auth()
            if not res:
                self._errors["base"] = "cannot_connect"

            # Save instance
            if not self._errors:
                return self.async_create_entry(
                    title=user_input[CONF_EMAIL], data=user_input
                )

            return self._show_config_form(user_input, self._errors)

        return self._show_config_form(
            user_input={
                CONF_EMAIL: "email",
                CONF_PASSWORD: "pass",
                CONF_SCAN_INTERVAL: 30,
            },
            current_errors=self._errors,
        )

    # ---------------------------
    #   _show_config_form
    # ---------------------------
    def _show_config_form(self, user_input, current_errors=None):
        """Show the configuration form to edit data."""
        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema(
                {
                    vol.Required(CONF_EMAIL, default=user_input[CONF_EMAIL]): str,
                    vol.Required(CONF_PASSWORD, default=user_input[CONF_PASSWORD]): str,
                    vol.Required(
                        CONF_SCAN_INTERVAL, default=user_input[CONF_SCAN_INTERVAL]
                    ): int,
                }
            ),
            errors=current_errors,
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        """Get component options flow."""
        return SaureshaOptionsFlowHandler(config_entry)


class SaureshaOptionsFlowHandler(OptionsFlow):
    def __init__(self, entry: ConfigEntry):

        self._entry = dict(entry.options)
        self._data = dict(entry.data)
        self._data["unique_id"] = str(uuid.uuid4())
        self._errors = {}

    async def async_step_init(self, user_input=None):
        self._errors = {}

        if user_input is not None:
            return self.async_create_entry(
                title=self._data[CONF_EMAIL], data=user_input
            )

        try:
            SauresAPI: SauresHA = SauresHA(
                self.hass, self._data[CONF_EMAIL], self._data[CONF_PASSWORD], "true", ""
            )
            res = await SauresAPI.async_get_flats(self.hass)
            if not res:
                self._errors["base"] = "cannot_connect"
        except Exception:
            res = {}

        ress = self._show_options_form(
            user_input={CONF_FLATS: self._entry}, current_errors=self._errors, flats=res
        )

        return ress

    # ---------------------------
    #   _show_options_form
    # ---------------------------
    def _show_options_form(self, user_input, current_errors=None, flats=None):
        """Show the configuration form to edit data."""
        selected_flats = list
        all_flats = {}
        if user_input[CONF_FLATS]:
            selected_flats = user_input[CONF_FLATS][CONF_FLATS]

        for flat in flats:
            all_flats[str(flat)] = f"{flats[flat]} ({flat})"
        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema(
                {
                    vol.Optional(
                        CONF_FLATS,
                        default=selected_flats,
                    ): cv.multi_select(all_flats)
                },
                extra=vol.ALLOW_EXTRA,
            ),
            errors=current_errors,
        )
