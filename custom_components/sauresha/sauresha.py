from requests import Session
from functools import reduce
from json import dumps

class SauresHA:
    def __init__(self, email, password):
        self.__session = Session()
        if not self.__auth(email, password):
            raise Exception('Invalid credentials')
        
    def __auth(self, email, password):
        auth_data = self.__session.post('https://lk.saures.ru/api/auth/login', data={
            'email': email, 
            'password': password
        }).json()
        return auth_data['status'] != 'bad'

    def get_flats(self):
        return self.__session.get(f'https://lk.saures.ru/api/company/flats').json()['data']['flats']

    def get_meters(self, flat_id):
        sensors = self.__session.get(f'https://lk.saures.ru/api/meter/meters', params={
            'flat_id': flat_id
        }).json()['data']['sensors']
        return reduce(list.__add__, map(lambda sensor: sensor['meters'], sensors))

    def get_controllers(self, flat_id):
        controllers = self.__session.get(f'https://lk.saures.ru/api/meter/meters', params={
            'flat_id': flat_id
        }).json()['data']['sensors']
        return reduce(list.__add__, map(lambda sensor: controllers, controllers))


    def get_meter(self, flat_id, serial_number):
        meters = self.get_meters(flat_id)
        return next((Meter(meter) for meter in meters if meter['sn'] == serial_number), Meter(dict()))


    def get_controller(self, flat_id, sn):
        controllers = self.get_controllers(flat_id)
        return next((Controller(controller) for controller in controllers if controller['sn'] == sn), Controller(dict()))


class Meter:
    def __init__(self, data):
        self.data = data
        self.name = data.get('meter_name')
        self.type_number = data.get('type', {}).get('number')
        self.type = data.get('type', {}).get('name')
        self.state = data.get('state', {}).get('name')
        self.sn = data.get('sn')
        self.value = data.get('value')
        self.id = data.get('meter_id')
        self.input = data.get('input')
        self.values = data.get('vals', [])
        if len(self.values) == 2:
            self.t1=self.values[0]['value']
            self.t2=self.values[1]['value']
            self.t3='-'
            self.t4='-'
        elif len(self.values)==3:
            self.t1=self.values[0]['value']
            self.t2=self.values[1]['value']
            self.t3=self.values[2]['value']
            self.t4='-'
        elif len(self.values)==4:
            self.t1=self.values[0]['value']
            self.t2=self.values[1]['value']
            self.t3=self.values[2]['value']
            self.t4=self.values[3]['value']
        elif len(self.values)==0:
            self.t1=data.get('value')
            self.t2='-'
            self.t3='-'
            self.t4='-'
            

class Controller:
    def __init__(self, data):
        self.data = data
        self.name = data.get('sn')
        self.sn = data.get('sn')
        self.batery = data.get('bat')
        self.ssid = data.get('ssid')
        self.local_ip = data.get('local_ip')
        self.firmware = data.get('firmware')
        self.readout_dt = data.get('readout_dt')
        self.request_dt = data.get('request_dt')
        self.last_connection = data.get('last_connection')
        self.state = data.get('state', {}).get('name')
        self.rssi = data.get('rssi')
        self.hardware = data.get('hardware')
        self.new_firmware = data.get('new_firmware')  


if __name__ == "__main__":
    s = SauresHA('demo@saures.ru', 'demo')
    meter = s.get_meter(358, '136661693')
    print(meter.data)
    #controller = s.get_controller(4731, '155100360017')
    #print(controller.data)
