"""Config flow to configure Mijia AirFryer component."""
import logging
from re import search

from micloud import MiCloud
from micloud.micloudexception import MiCloudAccessDenied
import voluptuous as vol

from homeassistant import config_entries
from homeassistant.config_entries import SOURCE_REAUTH
from homeassistant.core import callback
from homeassistant.helpers.device_registry import format_mac
from homeassistant.const import (
    CONF_HOST,
    CONF_NAME,
    CONF_TOKEN,
    CONF_SCAN_INTERVAL,
    CONF_DEVICE,
    CONF_MAC,
    CONF_MODEL
)

from homeassistant.components.xiaomi_miio.const import (
    CONF_CLOUD_COUNTRY,
    CONF_CLOUD_PASSWORD,
    CONF_CLOUD_USERNAME,
    CONF_FLOW_TYPE,
    CONF_MANUAL,
    DEFAULT_CLOUD_COUNTRY,
    SERVER_COUNTRY_CODES,
#    AuthException,
#    SetupException
)
from homeassistant.components.xiaomi_miio.device import ConnectXiaomiDevice

from .const import (
    DOMAIN,
    DEFAULT_SCAN_INTERVAL,
    MODELS_ALL_DEVICES
)

_LOGGER = logging.getLogger(__name__)

DEVICE_SETTINGS = {
    vol.Required(CONF_TOKEN): vol.All(str, vol.Length(min=32, max=32)),
}
DEVICE_CONFIG = vol.Schema({vol.Required(CONF_HOST): str}).extend(DEVICE_SETTINGS)
DEVICE_MODEL_CONFIG = vol.Schema({vol.Required(CONF_MODEL): vol.In(MODELS_ALL_DEVICES)})
DEVICE_CLOUD_CONFIG = vol.Schema(
    {
        vol.Optional(CONF_CLOUD_USERNAME): str,
        vol.Optional(CONF_CLOUD_PASSWORD): str,
        vol.Optional(CONF_CLOUD_COUNTRY, default=DEFAULT_CLOUD_COUNTRY): vol.In(
            SERVER_COUNTRY_CODES
        ),
        vol.Optional(CONF_MANUAL, default=False): bool,
    }
)

# Exceptions
class AuthException(Exception):
    """Exception indicating an authentication error."""


class SetupException(Exception):
    """Exception indicating a failure during setup."""


class OptionsFlowHandler(config_entries.OptionsFlow):
    """Options for the component."""

    def __init__(self, config_entry: config_entries.ConfigEntry) -> None:
        """Init object."""
        self.config_entry = config_entry
        self.options = dict(config_entry.options)

    async def async_step_init(self, user_input=None):
        """Manage the options."""
        errors = {}
        if user_input is not None:
            self.options.update(user_input)
            use_cloud = self.options.get(CONF_MANUAL, False)
            cloud_username = self.options.get(CONF_CLOUD_USERNAME)
            cloud_password = self.options.get(CONF_CLOUD_PASSWORD)
            cloud_country = self.options.get(CONF_CLOUD_COUNTRY)

            if use_cloud and (
                not cloud_username or not cloud_password or not cloud_country
            ):
                errors["base"] = "cloud_credentials_incomplete"
                # trigger re-auth flow
                self.hass.async_create_task(
                    self.hass.config_entries.flow.async_init(
                        DOMAIN,
                        context={"source": SOURCE_REAUTH},
                        data=self.options,
                    )
                )

            if not errors:
                return self.async_create_entry(title="", data=self.options)

        settings_schema = vol.Schema(
            {
                vol.Optional(
                    CONF_SCAN_INTERVAL,
                    default=self.options.get(CONF_SCAN_INTERVAL, DEFAULT_SCAN_INTERVAL),
                ): int
            }
        )

        return self.async_show_form(
            step_id="init", data_schema=settings_schema, errors=errors
        )


class XiaomiAirFryerFlowHandler(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a Xiaomi AirFryer config flow."""

    VERSION = 1

    def __init__(self):
        """Initialize."""
        self.host = None
        self.mac = None
        self.token = None
        self.model = None
        self.name = None
        self.cloud_username = None
        self.cloud_password = None
        self.cloud_country = None
        self.cloud_devices = {}

    @staticmethod
    @callback
    def async_get_options_flow(config_entry) -> OptionsFlowHandler:
        """Get the options flow."""
        return OptionsFlowHandler(config_entry)

    async def async_step_reauth(self, user_input=None):
        """Perform reauth upon an authentication error or missing cloud credentials."""
        self.host = user_input[CONF_HOST]
        self.token = user_input[CONF_TOKEN]
        self.mac = user_input[CONF_MAC]
        self.model = user_input.get(CONF_MODEL)
        return await self.async_step_reauth_confirm()

    async def async_step_reauth_confirm(self, user_input=None):
        """Dialog that informs the user that reauth is required."""
        if user_input is not None:
            return await self.async_step_cloud()
        return self.async_show_form(
            step_id="reauth_confirm", data_schema=vol.Schema({})
        )

    async def async_step_import(self, conf: dict):
        """Import a configuration from config.yaml."""
        self.host = conf[CONF_HOST]
        self.token = conf[CONF_TOKEN]
        self.name = conf.get(CONF_NAME)
        self.model = conf.get(CONF_MODEL)

        self.context.update(
            {"title_placeholders": {"name": f"YAML import {self.host}"}}
        )
        return await self.async_step_connect()

    async def async_step_user(self, user_input=None):
        """Handle a flow initialized by the user."""
        return await self.async_step_cloud()

    async def async_step_zeroconf(self, discovery_info):
        """Handle zeroconf discovery."""
        name = discovery_info.get("name")
        self.host = discovery_info.get("host")
        self.mac = discovery_info.get("properties", {}).get("mac")
        if self.mac is None:
            poch = discovery_info.get("properties", {}).get("poch", "")
            result = search(r"mac=\w+", poch)
            if result is not None:
                self.mac = result.group(0).split("=")[1]

        if not name or not self.host or not self.mac:
            return self.async_abort(reason="not_xiaomi_miio")

        self.mac = format_mac(self.mac)

        for device_model in MODELS_ALL_DEVICES:
            if name.startswith(device_model.replace(".", "-")):
                unique_id = self.mac
                await self.async_set_unique_id(unique_id)
                self._abort_if_unique_id_configured({CONF_HOST: self.host})

                self.context.update(
                    {"title_placeholders": {"name": f"{device_model} {self.host}"}}
                )

                return await self.async_step_cloud()

        # Discovered device is not yet supported
        _LOGGER.debug(
            "Not yet supported Xiaomi Miio device '%s' discovered with host %s",
            name,
            self.host,
        )
        return self.async_abort(reason="not_xiaomi_miio")

    def extract_cloud_info(self, cloud_device_info):
        """Extract the cloud info."""
        if self.host is None:
            self.host = cloud_device_info["localip"]
        if self.mac is None:
            self.mac = format_mac(cloud_device_info["mac"])
        if self.model is None:
            self.model = cloud_device_info["model"]
        if self.name is None:
            self.name = cloud_device_info["name"]
        self.token = cloud_device_info["token"]

    async def async_step_cloud(self, user_input=None):
        """Configure a xiaomi miio device through the Miio Cloud."""
        errors = {}
        if user_input is not None:
            if user_input[CONF_MANUAL]:
                return await self.async_step_manual()

            cloud_username = user_input.get(CONF_CLOUD_USERNAME)
            cloud_password = user_input.get(CONF_CLOUD_PASSWORD)
            cloud_country = user_input.get(CONF_CLOUD_COUNTRY)

            if not cloud_username or not cloud_password or not cloud_country:
                errors["base"] = "cloud_credentials_incomplete"
                return self.async_show_form(
                    step_id="cloud", data_schema=DEVICE_CLOUD_CONFIG, errors=errors
                )

            miio_cloud = MiCloud(cloud_username, cloud_password)
            try:
                if not await self.hass.async_add_executor_job(miio_cloud.login):
                    errors["base"] = "cloud_login_error"
            except MiCloudAccessDenied:
                errors["base"] = "cloud_login_error"

            if errors:
                return self.async_show_form(
                    step_id="cloud", data_schema=DEVICE_CLOUD_CONFIG, errors=errors
                )

            devices_raw = await self.hass.async_add_executor_job(
                miio_cloud.get_devices, cloud_country
            )

            if not devices_raw:
                errors["base"] = "cloud_no_devices"
                return self.async_show_form(
                    step_id="cloud", data_schema=DEVICE_CLOUD_CONFIG, errors=errors
                )

            self.cloud_devices = {}
            for device in devices_raw:
                if device['model'] in MODELS_ALL_DEVICES:
                    parent_id = device.get("parent_id")
                    if not parent_id:
                        name = device["name"]
                        model = device["model"]
                        list_name = f"{name} - {model}"
                        self.cloud_devices[list_name] = device

            self.cloud_username = cloud_username
            self.cloud_password = cloud_password
            self.cloud_country = cloud_country

            if self.host is not None:
                for device in self.cloud_devices.values():
                    cloud_host = device.get("localip")
                    if cloud_host == self.host:
                        self.extract_cloud_info(device)
                        return await self.async_step_connect()

            if len(self.cloud_devices) == 1:
                self.extract_cloud_info(list(self.cloud_devices.values())[0])
                return await self.async_step_connect()

            return await self.async_step_select()

        return self.async_show_form(
            step_id="cloud", data_schema=DEVICE_CLOUD_CONFIG, errors=errors
        )

    async def async_step_select(self, user_input=None):
        """Handle multiple cloud devices found."""
        errors = {}
        if user_input is not None:
            cloud_device = self.cloud_devices[user_input["select_device"]]
            self.extract_cloud_info(cloud_device)
            return await self.async_step_connect()

        select_schema = vol.Schema(
            {vol.Required("select_device"): vol.In(list(self.cloud_devices))}
        )

        return self.async_show_form(
            step_id="select", data_schema=select_schema, errors=errors
        )

    async def async_step_manual(self, user_input=None):
        """Configure a xiaomi miio device Manually."""
        errors = {}
        if user_input is not None:
            self.token = user_input[CONF_TOKEN]
            if user_input.get(CONF_HOST):
                self.host = user_input[CONF_HOST]

            return await self.async_step_connect()

        if self.host:
            schema = vol.Schema(DEVICE_SETTINGS)
        else:
            schema = DEVICE_CONFIG

        return self.async_show_form(step_id="manual", data_schema=schema, errors=errors)

    async def async_step_connect(self, user_input=None):
        """Connect to a xiaomi miio device."""
        errors = {}
        if self.host is None or self.token is None:
            return self.async_abort(reason="incomplete_info")

        if user_input is not None:
            self.model = user_input[CONF_MODEL]

        # Try to connect to a Xiaomi Device.
        connect_device_class = ConnectXiaomiDevice(self.hass)
        try:
            await connect_device_class.async_connect_device(self.host, self.token)
        except AuthException:
            if self.model is None:
                errors["base"] = "wrong_token"
        except SetupException:
            if self.model is None:
                errors["base"] = "cannot_connect"

        device_info = connect_device_class.device_info

        if self.model is None and device_info is not None:
            self.model = device_info.model

        if self.model is None and not errors:
            errors["base"] = "cannot_connect"

        if errors:
            return self.async_show_form(
                step_id="connect", data_schema=DEVICE_MODEL_CONFIG, errors=errors
            )

        if self.mac is None and device_info is not None:
            self.mac = format_mac(device_info.mac_address)

        unique_id = self.mac
        existing_entry = await self.async_set_unique_id(
            unique_id, raise_on_progress=False
        )
        if existing_entry:
            data = existing_entry.data.copy()
            data[CONF_HOST] = self.host
            data[CONF_TOKEN] = self.token
            if (
                self.cloud_username is not None
                and self.cloud_password is not None
                and self.cloud_country is not None
            ):
                data[CONF_CLOUD_USERNAME] = self.cloud_username
                data[CONF_CLOUD_PASSWORD] = self.cloud_password
                data[CONF_CLOUD_COUNTRY] = self.cloud_country
            self.hass.config_entries.async_update_entry(existing_entry, data=data)
            await self.hass.config_entries.async_reload(existing_entry.entry_id)
            return self.async_abort(reason="reauth_successful")

        if self.name is None:
            self.name = self.model

        flow_type = None
        if flow_type is None:
            for device_model in MODELS_ALL_DEVICES:
                if self.model.startswith(device_model):
                    flow_type = CONF_DEVICE

        if flow_type is not None:
            return self.async_create_entry(
                title=self.name,
                data={
                    CONF_FLOW_TYPE: flow_type,
                    CONF_HOST: self.host,
                    CONF_TOKEN: self.token,
                    CONF_MODEL: self.model,
                    CONF_MAC: self.mac,
                    CONF_CLOUD_USERNAME: self.cloud_username,
                    CONF_CLOUD_PASSWORD: self.cloud_password,
                    CONF_CLOUD_COUNTRY: self.cloud_country,
                },
            )

        errors["base"] = "unknown_device"
        return self.async_show_form(
            step_id="connect", data_schema=DEVICE_MODEL_CONFIG, errors=errors
        )
