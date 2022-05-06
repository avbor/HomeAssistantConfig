# Home Assistant

**Here you can find my [Home Assistant](https://www.home-assistant.io/) configuration and some information about used hardware and software.**\
Feel free to contact me by [Telegram](https://t.me/avbor) if you have any further questions.


Some **screenshots** from my HA can be found [here](docs/screenshots.md).

---

На русском языке ряд тем более подробно описаны [здесь](https://simple-ha.ru).

---

### Hardware

**Server:**
- Intel NUC [NUC7PJYH](https://ark.intel.com/content/www/ru/ru/ark/products/126137/intel-nuc-kit-nuc7pjyh.html):
  - CPU: Intel Pentium Silver [J5005](https://ark.intel.com/content/www/ru/ru/ark/products/128984/intel-pentium-silver-j5005-processor-4m-cache-up-to-2-80-ghz.html)
  - RAM: 8 Gb
  - SD 64 Gb A2 (OS)
  - HDD 500 Gb (Data)

**Network:**

_Main site (city apartment):_

- Keenetic Giga ([KN-1010](https://keenetic.ru/ru/keenetic-giga)) as Router, WiFi Mesh Controller and Wireguard VPN Server\
  2 WAN with automatic failover\
  Also as Device Tracker via "Keenetic NDMS2 Routers"

- Keenetic Speedster ([KN-3010](https://keenetic.ru/ru/keenetic-speedster)) as Access Points in WiFi Mesh Network

- Switch TP-Link [TL-SG116E](https://www.tp-link.com/ru/business-networking/easy-smart-switch/tl-sg116e/)

_Remote site (country house):_

- Huawei E5372 as LTE Modem with 4G Antenna (Baltic Signal [OMEGA](https://baltic-signal.ru/catalog/antennas/antennas-4g/antenna-baltic-signal-omega-3g-4g/))\
  Integration "Huawei LTE"

- Xiaomi Mi WiFi 3G (v1) as Router, WireGuard VPN Client and Access Point. Flashed to [OpenWRT](http://openwrt.org/)

**ZigBee/BT Gateways:**
- Xiaomi Gateway 2 (DGNWG02LM, lumi.gateway.v3)\
  Integration "Xiaomi Gateway (Aqara)", not used for now.

- Xiaomi Gateway 3 (ZNDMWG03LM, lumi.gateway.mgl03)\
  Integration "Xiaomi Gateway 3" by [AlexxIT](https://github.com/AlexxIT/XiaomiGateway3)

- Aqara Hub E1 (ZHWG16LM)\
  Not used for now

- Phoscon ConBee 2 by Dresden Elektronik\
  Integration "Zigbee Home Automation (ZHA)"

#### WiFi Devices:
- Relays:
  - Sonoff MINI & MINI R2\
  Integration "Sonoff LAN" by [AlexxIT](https://github.com/AlexxIT/SonoffLAN)

  - Sonoff Basic R2 flashed to [ESPHome](https://esphome.io/)\
  Integration "ESPHome"

  - eWelink DIN rail Switch with Energy Meter (SMT002, Coolkit PSF-X67)\
  Integration "Sonoff LAN" by [AlexxIT](https://github.com/AlexxIT/SonoffLAN)

- Plugs:
  - TP-Link HS110\
  Integration "TP-Link Kasa Smart"

  - Xiaomi Mi Smart Plug EU (ZNCZ05CM)\
  Integration "Xiaomi Miio"

  - Gosund SP111 flashed to [ESPHome](https://esphome.io/)\
  Integration "ESPHome"

  - BroadLink SP4L-EU\
  Integration "Broadlink"

- Light:
  - Yeelight LED Color Bulb (YLDP03YL, yeelink.light.color3)\
  Integration "Yeelight"

  - Yeelight LED Color Bulb 1S (YLDP13YL, yeelink.light.color2)\
  Integration "Yeelight"

  - Yeelight Lightstrip Plus + Extension (YLDD04YL + YLOT01YL, yeelink.light.strip2)\
  Integration "Yeelight"

  - Xiaomi Mi Desk Lamp (MJTD01YL, yeelink.light.lamp1)\
  Integration "Yeelight"

- Other
  - Xiaomi Smartmi Zhimi Air Humidifier 2 (CJXJSQ02ZM, zhimi.humidifier.ca1)\
  Integration "Xiaomi Miio"

  - Xiaomi Mi Robot Vacuum Cleaner 1S (SDJQR03RR, roborock.vacuum.m1s)\
  Integration "Xiaomi Miio"

  - Xiaomi Dafang 1080p (ZRM4040RT) flashed to [Xiaomi DaFang Hacks](https://github.com/EliasKotlyar/Xiaomi-Dafang-Hacks)\
  Integrations "Generic Camera" & "MJPEG IP Camera"

  - Tuya SmartIR Remote (UFO-R1 and similar) flashed to [ESPHome](https://esphome.io/)\
  Integration "ESPHome"

  - Analog intercom integrated via [custom board](https://github.com/Anonym-tsk/smart-domofon/tree/master/ge1mer) based on ESP8266 and [ESPHome](https://esphome.io/)\
  Integration "ESPHome"

  - Xiaomi Xiao AI Smart Alarm Clock (AI01ZM, zimi.clock.myk01)\
  Not used in HA

#### ZigBee Devices:
- Relays:
  - Aqara Wireless Relay (LLKZMK11LM, lumi.relay.c2acn01)
  - Sonoff ZBMINI

- Plugs:
  - MiJia Smart Power Plug 2 (ZNCZ02LM, lumi.plug)
  - BlitzWolf SHP13 (BW-SHP13, TS0121F)
  - BlitzWolf SHP15 (BW-SHP15, TS011F)

- Light:
  - IKEA TRÅDFRI LED Bulb E14 400lm (LED1649C5, ikea.light.led1649c5)
  - IKEA TRÅDFRI LED Bulb E14 470lm (LED1835C6)
  - IKEA TRÅDFRI LED Bulb E27 806lm (LED1836G9)
  - IKEA TRÅDFRI LED Bulb E27 1000lm (LED1732G11)

- Switches:
  - MiJia Wireless Switch (WXKG01LM, lumi.sensor_switch)
  - Aqara Wireless Switch with Gyroscope (WXKG12LM, lumi.sensor_switch.aq3)
  - IKEA TRÅDFRI ON/OFF Switch (E1743)
  - IKEA TRÅDFRI Remote control (E1524)

- Sensors:
  - MiJia Door & Window Sensor (MCCGQ01LM, lumi.sensor_magnet)
  - Aqara Door & Window Sensor (MCCGQ11LM)
  - MiJia Occupancy Sensor (RTCGQ01LM, lumi.sensor_motion)
  - Aqara Occupancy Sensor (RTCGQ11LM, lumi.sensor_motion.aq2)
  - MiJia Humidity & Temperature Sensor (WSDCGQ01LM, lumi.sensor_ht)
  - Aqara Humidity & Temperature Sensor (WSDCGQ11LM, lumi.weather)
  - Aqara Water Immersing Sensor (SJCGQ11LM, lumi.sensor_wleak.aq1)
  - MiJia Honeywell Gas Leak Detector (JTQJ-BF-01LM/BW, lumi.sensor_natgas.v1)
  - MiJia Light Sensor (GZCGQ01LM, lumi.sen_ill.mgl01)
  - Trust Motion Sensor (ZPIR-8000)

- Other:
  - Aqara Cube (MFKZQ01LM, lumi.sensor_cube.aqgl01)
  - IKEA TRÅDFRI Repeater (E1746)
  - MoesHouse Blinds Drive (AM43-0.45/40-ES-EB, TS0601)

#### Bluetooth Devices:
- Sensors:
  - Xiaomi TH Sensor 2 (LYWSD03MMC, miaomiaoche.sensor_ht.t2)\
  Via Xiaomi Gateway 3

  - Xiaomi TH Digital Clock (LYWSD02MMC, miaomiaoche.sensor_ht.t1)\
  Via Xiaomi Gateway 3

#### Media Players:
  - Google Chromecast (Gen 1)\
  Integration "Google Cast"

  - Google Chromecast (Gen 3)\
  Integration "Google Cast"

  - Google Home Mini\
  Integration "Google Cast"

  - Yandex Station Lite\
  Integration "Yandex.Station" by [AlexxIT](https://github.com/AlexxIT/YandexStation)

  - Tandex Station Mini-2\
  Integration "Yandex.Station" by [AlexxIT](https://github.com/AlexxIT/YandexStation)

  - Samsung TV Series 5 (ES, 2012 model year)\
  Integration "Samsung Smart TV"

  - Samsung TV Series 7 (RU, 2019 model year)\
  Integration "Samsung Smart TV"

  - Plex Media Server\
  Integration "Plex Media Server"

#### Other:
- [Neptun Bugatti Base](https://neptun-mcs.ru/catalog/complects/neptun_base/sistema_kontrolya_protechki_vody_neptun_bugatti_base/)\
  Via modified Xiaomi Magnet Sensors, Aqara 2ch Relay and Sonoff Mini for power control

- [SAURES R2 m3](https://www.saures.ru/blog/obzory-tovarov/obzor-modifikatsiy-kontrollera-saures-r2/)\
Integration "Integration Saures controllers with HA" by [volshebniks](https://github.com/volshebniks/sauresha)

- AC Daikin [FTXB-C](https://www.daikin.eu/en_us/products/ftxb-c.html) Series\
  Via Tuya SmartIR flashed to ESPHome, IRremoteESP8266 lib and Xiaomi Magnet Sensors

- Electrolux [Centurio IQ 2.0](https://home-comfort.ru/catalog/vodonagrevateli/nakopitelnye_vodonagrevateli/seriya_centurio_iq_2_0/) with [ECH/WFN-02](https://home-comfort.ru/catalog/obogrevateli_elektricheskie/konvektory/aksessuary/modul_syemnyy_upravlyayushchiy_electrolux_ech_wfn_02_smart_wi_fi/) module

### Software

**Server:**
- Ubuntu Server 20.04 LTS
- QEMU + KVM + libvirt
- Home Assistant (Virtual Machine)
- NGINX as revers proxy

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
- Loki
- Promtail
- phpMyAdmin

**Mobile Apps:**
- [Home Assistant](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android) official app on Android\
Also as Device Tracker via "Mobile App"