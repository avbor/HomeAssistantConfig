# Home Assistant

**Here you can find my [Home Assistant](https://www.home-assistant.io/) configuration and some information about used hardware and software.**

### Hardware

**Server:**
- Intel NUC [NUC7PJYH](https://ark.intel.com/content/www/ru/ru/ark/products/126137/intel-nuc-kit-nuc7pjyh.html):
- CPU: Intel Pentium Silver [J5005](https://ark.intel.com/content/www/ru/ru/ark/products/128984/intel-pentium-silver-j5005-processor-4m-cache-up-to-2-80-ghz.html)
- RAM: 8 Gb

**Network:**
- Router Keenetic Giga ([KN-1010](https://keenetic.ru/ru/keenetic-giga))
- Access Point Xiaomi Mi WiFi 3G (v1) flashed to [OpenWRT](http://openwrt.org/)
- Switch TP-Link [TL-SG116E](https://www.tp-link.com/ru/business-networking/easy-smart-switch/tl-sg116e/)

**ZigBee/BT Gateways:**
- Xiaomi Gateway 2 (DGNWG02LM, lumi.gateway.v3)   
- Xiaomi Gateway 3 (ZNDMWG03LM, lumi.gateway.mgl03)

#### WiFi Devices:
- Relays:
  - Sonoff Mini
- Plugs:
  - TP-Link HS110
  - Xiaomi Mi Smart Plug EU (ZNCZ05CM)
- Light:
  - Yeelight LED Color Bulb (YLDP03YL, yeelink.light.color3)
  - Yeelight LED Color Bulb 1S (YLDP13YL, yeelink.light.color2)
  - Yeelight Lightstrip Plus + Extension (YLDD04YL + YLOT01YL, yeelink.light.strip2)
  - Xiaomi Mi Desk Lamp (MJTD01YL, yeelink.light.lamp1)
- Other
  - Xiaomi Smartmi Zhimi Air Humidifier 2 (CJXJSQ02ZM, zhimi.humidifier.ca1)
  - Xiaomi Mi Robot Vacuum Cleaner 1S (SDJQR03RR)
  - Xiaomi Dafang 1080p (ZRM4040RT) flashed to [Xiaomi DaFang Hacks](https://github.com/EliasKotlyar/Xiaomi-Dafang-Hacks)
  - Xiaomi Xiao AI Smart Alarm Clock (zimi.clock.myk01)
  - Tuya Smart IR Remote

#### ZigBee Devices:
- Relays:
  - Aqara Wireless Relay (LLKZMK11LM, lumi.relay.c2acn01)
- Plugs:
  - MiJia Smart Power Plug 2 (ZNCZ02LM)
- Light:
  - Ikea TRÅDFRI LED Bulb E14 (LED1649C5, ikea.light.led1649c5)
- Switches:
  - MiJia Wireless Switch (WXKG01LM, lumi.sensor_switch)
  - Aqara Wireless Switch with Gyroscope (WXKG12LM, lumi.sensor_switch.aq3)
- Sensors:
  - MiJia Door & Window Sensor (MCCGQ01LM, lumi.sensor_magnet)
  - MiJia Occupancy Sensor (RTCGQ01LM)
  - Aqara Occupancy Sensor (RTCGQ11LM)
  - MiJia Humidity & Temperature Sensor (WSDCGQ01LM)
  - Aqara Humidity & Temperature Sensor (WSDCGQ11LM)
  - Aqara Water Immersing Sensor (SJCGQ11LM, lumi.sensor_wleak.aq1)
  - MiJia Honeywell Gas Leak Detector (lumi.sensor_natgas.v1)
- Other:
  - Aqara Cube (MFKZQ01LM, lumi.sensor_cube.aqgl01)

#### Bluetooth Devices:
- Sensors:
  - Xiaomi TH Sensor 2 (LYWSD03MMC)

**Media Players:**
  - Google Chromecast 1 Gen
  - Google Chromecast 3 Gen
  - Google Home Mini
  - Samsung TV Series 5
  - Samsung TV Series 7

**Other:**
- [Neptun Bugatti Base](https://neptun-mcs.ru/catalog/complects/neptun_base/sistema_kontrolya_protechki_vody_neptun_bugatti_base/)
- [SAURES R2 m3](https://www.saures.ru/blog/obzory-tovarov/obzor-modifikatsiy-kontrollera-saures-r2/)
- AC Daikin [FTXB-C](https://www.daikin.eu/en_us/products/ftxb-c.html) Series

### Software

**Server:**
- Ubuntu 20.04 LTS
- Home Assistant (Supervised)
- Nginx

**WiFi Access Point:**
- OpenWRT 19.07

**Used DB:**
- MariaDB
- InfluxDB

**Used HA Add-ons:**
- ESPHome
- Grafana
- InfluxDB
- MariaDB
- Mosquitto broker
- SSH & Web Terminal
- Visual Studio Code