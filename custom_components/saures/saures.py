from requests import Session
from functools import reduce
from json import dumps

class Saures:
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

    def get_meter(self, flat_id, serial_number):
        meters = self.get_meters(flat_id)
        return next((Meter(meter) for meter in meters if meter['sn'] == serial_number), Meter(dict()))

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

if __name__ == "__main__":
    s = Saures('demo@saures.ru', 'demo')
    meter = s.get_meter(4731, '19-128986')
    print(meter.data)
