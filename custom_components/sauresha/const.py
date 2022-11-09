#  Copyright (c) 2020-2022, Sergey Golynskiy <master@g-s-a.me>
#  Creative Commons BY-NC-SA 4.0 International Public License
#  (see LICENSE.md or https://creativecommons.org/licenses/by-nc-sa/4.0/)
"""
The Saures component.

For more details about this platform, please refer to the documentation at
https://github.com/volshebniks/sauresha/
"""

# Base component constants
from xmlrpc.client import Boolean


NAME = "Saures"
DOMAIN = "sauresha"
VERSION = "1.0.0"
ATTRIBUTION = "Home assistant component for Saures"
ISSUE_URL = "https://github.com/volshebniks/sauresha/issues"

PLATFORMS = ["binary_sensor", "sensor", "switch"]

DOMAIN = "sauresha"

STARTUP_MESSAGE = f"""
-------------------------------------------------------------------
{NAME}
Version: {VERSION}
This is a custom integration!
If you have ANY issues with this you need to open an issue here:
{ISSUE_URL}
-------------------------------------------------------------------
"""

# Configuration and options
CONF_ISDEBUG: Boolean = False
CONF_DEBUG = "debug"
CONF_FLATS = "flats"
CONF_FLAT_ID = "flat_id"
CONF_SENSORS = "sensors"
CONF_BINARY_SENSORS_DEF = [9, 10]  # On Saures API [9 = Датчик] [10 = Состояние крана]
CONF_BINARY_SENSOR_DEV_CLASS_MOISTURE_DEF = [9]
CONF_BINARY_SENSOR_DEV_CLASS_OPENING_DEF = [10]
CONF_SWITCH_DEF = [6]

COORDINATOR = "coordinator"

# Command
CONF_COMMAND_ACTIVATE = "activate"
CONF_COMMAND_DEACTIVATE = "deactivate"
