"""Saures entity base class."""


class SauresController:
    def __init__(self, data):
        self.data = data
        self.name = data.get("sn")
        self.sn = data.get("sn")
        self.battery = data.get("bat")
        self.ssid = data.get("ssid")
        self.local_ip = data.get("local_ip")
        self.firmware = data.get("firmware")
        self.readout_dt = data.get("readout_dt")
        self.request_dt = data.get("request_dt")
        self.last_connection = data.get("last_connection")
        self.state = "OK"
        self.rssi = data.get("rssi")
        self.hardware = data.get("hardware")
        self.new_firmware = data.get("new_firmware")
        self.last_connection = data.get("last_connection")
        self.last_connection_warning = data.get("last_connection_warning")
        self.check_hours = data.get("check_hours")
        self.check_period_display = data.get("check_period_display")
        self.requests = data.get("requests")
        self.log = data.get("log")
        self.cap_state = bool(data.get("cap_state"))
        self.power_supply = bool(data.get("power_supply"))


class SauresSensor:
    def __init__(self, data):
        self.data = data
        self.name = data.get("meter_name")
        self.type_number = data.get("type", {}).get("number")
        self.type = data.get("type", {}).get("name")
        self.state = data.get("state", {}).get("name")
        self.sn = data.get("sn")
        self.value = data.get("value")
        self.meter_id = data.get("meter_id")
        self.input = data.get("input")
        self.approve_dt = data.get("approve_dt")

        self.values = data.get("vals", [])

        if len(self.values) == 2:
            self.value = "{0}/{1}".format(self.values[0], self.values[1])
            self.t1 = self.values[0]
            self.t2 = self.values[1]
            self.t3 = "-"
            self.t4 = "-"
        elif len(self.values) == 3:
            self.value = "{0}/{1}/{2}".format(
                self.values[0], self.values[1], self.values[2]
            )
            self.t1 = self.values[0]
            self.t2 = self.values[1]
            self.t3 = self.values[2]
            self.t4 = "-"
        elif len(self.values) == 4:
            self.value = "{0}/{1}/{2}/{3}".format(
                self.values[0], self.values[1], self.values[2], self.values[3]
            )
            self.t1 = self.values[0]
            self.t2 = self.values[1]
            self.t3 = self.values[2]
            self.t4 = self.values[3]
        elif len(self.values) == 1:
            self.value = self.values[0]
            self.t1 = self.values[0]
            self.t2 = "-"
            self.t3 = "-"
            self.t4 = "-"
