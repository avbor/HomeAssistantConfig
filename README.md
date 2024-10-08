# Home Assistant

**Here you can find my [Home Assistant](https://www.home-assistant.io/) configuration and some information about used hardware and software.**\
Feel free to contact me by [Telegram](https://t.me/avbor) if you have any further questions.


Some **screenshots** (slightly outdated) from my HA can be found [here](docs/screenshots.md).

---

На русском языке ряд тем более подробно описаны [здесь](https://simple-ha.ru).

---

### Hardware

**Servers:**\
(Mostly for work with media and AI ([Frigate](https://frigate.video/), [Double-Take](https://github.com/skrashevich/double-take/), [Plex](https://www.plex.tv/), [PhotoPrism](https://www.photoprism.app/))

- Intel NUC [BXNUC10i5FNHN](https://www.intel.com/content/www/us/en/products/sku/214591/intel-nuc-10-performance-kit-nuc10i5fnhn/specifications.html):
  - CPU: Intel 10th Gen [i5](https://www.intel.com/content/www/us/en/products/sku/195436/intel-core-i510210u-processor-6m-cache-up-to-4-20-ghz/specifications.html)
  - RAM: 64 Gb [CT32G4SFD832A](https://www.crucial.com/memory/ddr4/ct32g4sfd832a) 32 Gb x2
  - SD Card: SanDisk Extreme [A2](https://www.sdcard.org/developers/sd-standard-overview/application-performance-class/) 64 Gb (OS) [SDSQXAH-064G-GN6GN](https://www.westerndigital.com/ru-ru/products/memory-cards/sandisk-extreme-uhs-i-for-mobile-gaming-microsd?sku=SDSQXAH-064G-GN6GN)
  - HDD: WD 500 Gb (Data) [WD5000LPLX-75ZNTT0](https://documents.westerndigital.com/content/dam/doc-library/en_us/assets/public/western-digital/product/internal-drives/wd-black-hdd/product-brief-western-digital-wd-black-mobile-hdd.pdf)
  - NVME: Solidigm 512 Gb (VM & Data) [SSDPFKNU512GZ](https://www.solidigm.com/content/solidigm/us/en/products/client/plus-series/p41.html#form=M.2%202280&cap=512%20GB)

- Intel NUC [BOXNUC7PJYH2](https://www.intel.com/content/www/us/en/products/sku/126137/intel-nuc-kit-nuc7pjyh/specifications.html):
  - CPU: Intel Pentium Silver [J5005](https://www.intel.com/content/www/us/en/products/sku/128984/intel-pentium-silver-j5005-processor-4m-cache-up-to-2-80-ghz/specifications.html)
  - RAM: 8 Gb [CT4G4SFS824A](https://www.crucial.com/memory/ddr4/ct4g4sfs824a) 4 Gb x2
  - SSD: 250 Gb [MZ-77E250BW](https://www.samsung.com/ru/memory-storage/sata-ssd/870-evo-250gb-sata-3-2-5-ssd-mz-77e250bw/)

**Storage:**\
(As well as VM and containers host, main HA VM also lives here)
- Synology [DS1621+](https://www.synology.com/en-us/products/DS1621+)
  - RAM: 32 Gb [CT16G4SFRA266](https://www.crucial.com/memory/ddr4/ct16g4sfra266) 16 Gb x2
  - HDD: WD 18 Tb 7200 rpm [HDD WD DC HC550 WUH721818ALE6L4](https://www.westerndigital.com/products/internal-drives/data-center-drives/ultrastar-dc-hc550-hdd#0F38459) x2
  - HDD: WD 3 Tb 5400 rpm [WD30PURZ-85GU6Y0](https://www.westerndigital.com/products/internal-drives/wd-purple-sata-hdd#WD30PURZ) x2
  - SSD SATA: WD 500 Gb [WDS500G1R0A](https://www.westerndigital.com/en-us/products/internal-drives/wd-red-sata-2-5-ssd#WDS500G1R0A) x2
  - SSD NVME: Samsung 500 Gb [MZ-V7S500BW](https://www.samsung.com/uk/memory-storage/nvme-ssd/970-evo-plus-nvme-m-2-ssd-500gb-mz-v7s500bw/) x2

**UPS:**

- APC SmartUPS 1500 (SMT1500I)\
  Integration "Network UPS Tools (NUT)"

**Network:**

_Main site (city apartment):_

- Keenetic Peak ([KN-2710](https://keenetic.ru/ru/keenetic-peak)) as Router, WiFi Mesh Controller, DNS and DHCP Servers\
  and Wireguard VPN Server\Client\
  2 WAN with automatic failover\
  Also as Device Tracker via "Keenetic NDMS2 Routers"

- Keenetic Voyager Pro ([KN-3510](https://keenetic.ru/ru/keenetic-voyager-pro)) as Access Points in WiFi Mesh Network x3\
  with Keenetic PoE+ Adapters ([KN-4510](https://keenetic.ru/ru/keenetic-poe-plus-adapter))

- Switch TP-Link [TL-SG116E](https://www.tp-link.com/ru/business-networking/easy-smart-switch/tl-sg116e/)

- Switch D-Link [DGS-1008A/B1](https://www.dlink.ru/ru/products/1/1625.html) for slow clients

_Remote site (country house):_

- Huawei E5372 as LTE Modem with 4G Antenna (Baltic Signal [OMEGA](https://baltic-signal.ru/catalog/antennas/antennas-4g/antenna-baltic-signal-omega-3g-4g/))\
  Integration "Huawei LTE"

- Keenetic Giga [KN-1010](https://keenetic.ru/ru/keenetic-giga-kn-1010) as Router, WiFi Mesh Controller, WireGuard VPN Client and Access Point

- Keneetic Speedster [KN-3010](https://keenetic.ru/ru/keenetic-speedster-kn-3010) as Access Point in WiFi Mesh Network

**ZigBee/BT Gateways:**

- Sonoff ZBDongle-E\
  Used by "Zigbee Home Automation (ZHA)" and "Thread" integration ([Milti-PAN firmware](https://github.com/darkxst/silabs-firmware-builder) & Silicon Labs Multiprotocol Add-on)

- Sonoff ZBDongle-P\
  Used by "Zigbee2MQTT"

- Xiaomi Multi-Mode Gateway 2 (Hub 2) EU (DMWG03LM, lumi.gateway.mgl001)\
  Integration "Xiaomi Gateway 3" by [AlexxIT](https://github.com/AlexxIT/XiaomiGateway3) and "Zigbee2MQTT"

- ESP32 D1 Mini with _bluetooth_proxy_ component x5\
  Integration "ESPHome"

- M5Stack ATOM Lite ESP32 with _bluetooth_proxy_ component\
  Integration "ESPHome"

- UGREEN CM109 (CSR8510A10) USB BT 5.0 Dongle\
  Integration "Bluetooth"

- Phoscon ConBee 2 by Dresden Elektronik\
  Not used for now

- Aqara Hub E1 (ZHWG16LM)\
  Not used for now

- Xiaomi Gateway 2 (DGNWG02LM, lumi.gateway.v3)\
  Not used for now

- Xiaomi Gateway 3 (ZNDMWG03LM, lumi.gateway.mgl03)\
  Not used for now

#### WiFi Devices:
- Relays:
  - Sonoff MINI & MINI R2\
  Integration "Sonoff LAN" by [AlexxIT](https://github.com/AlexxIT/SonoffLAN) & "ESPHome"

  - Sonoff Basic R2 flashed to [ESPHome](https://esphome.io/)\
  Integration "ESPHome"

  - eWelink DIN rail Switch with Energy Meter (SMT002, Coolkit PSF-X67)\
  Integration "Sonoff LAN" by [AlexxIT](https://github.com/AlexxIT/SonoffLAN)

  - Sonoff POW R3 16D Elite flashed to [ESPHome](https://esphome.io/)\
  Integration "ESPHome"

- Plugs:
  - TP-Link HS110\
  Integration "TP-Link Kasa Smart"

  - Xiaomi Mi Smart Plug EU (ZNCZ05CM)\
  Integration "Xiaomi Miio"

  - Gosund SP111 flashed to [ESPHome](https://esphome.io/)\
  Integration "ESPHome"

  - BroadLink SP4L-EU\
  Integration "Broadlink", not used for now.

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
  Via [go2rtc](https://github.com/AlexxIT/go2rtc) and "RTSPtoWebRTC" integration

  - Reolink [RLC-510A](https://reolink.com/product/rlc-510a/)\
    Via [go2rtc](https://github.com/AlexxIT/go2rtc), "RTSPtoWebRTC" and "Reolink IP NVR/camera"

  - Tuya SmartIR Remote (UFO-R1 and similar) flashed to [ESPHome](https://esphome.io/)\
  Integration "ESPHome"

  - Analog intercom integrated via [custom board](https://github.com/Anonym-tsk/smart-domofon/tree/master/ge1mer) based on ESP8266 and [ESPHome](https://esphome.io/)\
  Integration "ESPHome"

  - Shelly [EM](https://www.shelly.cloud/en/products/shop/em-120a)\
    Integration "Shelly"

#### ZigBee Devices:
- Relays:
  - Aqara Wireless Relay (LLKZMK11LM, lumi.relay.c2acn01)
  - Sonoff ZBMINI

- Plugs:
  - MiJia Smart Power Plug 2 (ZNCZ02LM, lumi.plug)
  - BlitzWolf SHP13 (BW-SHP13, TS0121)
  - BlitzWolf SHP15 (BW-SHP15, TS011F)
  - Tuya NAS-WR01B (TS011F)

- Light:
  - IKEA TRÅDFRI LED Bulb E14 400lm (LED1649C5, ikea.light.led1649c5)
  - IKEA TRÅDFRI LED Bulb E14 470lm (LED1835C6)
  - IKEA TRÅDFRI LED Bulb E14 600lm (LED1738G7)
  - IKEA TRÅDFRI LED Bulb E27 806lm (LED1836G9)
  - IKEA TRÅDFRI LED Bulb E27 1000lm (LED1732G11)

- Switches:
  - MiJia Wireless Switch (WXKG01LM, lumi.sensor_switch)
  - Aqara Wireless Switch with Gyroscope (WXKG12LM, lumi.sensor_switch.aq3)
  - IKEA TRÅDFRI ON/OFF Switch (E1743)
  - IKEA TRÅDFRI Remote control (E1524)
  - IKEA STYRBAR Remote control (E2002)

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
  - IKEA TRÅDFRI Motion Sensor (E1745)
  - TuYa Human Breathe Sensor (ZY-M100-S_2, TS0601, _TZE204_qasjif9e)

- Other:
  - Aqara Cube (MFKZQ01LM, lumi.sensor_cube.aqgl01)
  - IKEA TRÅDFRI Repeater (E1746)
  - MoesHouse Blinds Drive (AM43-0.45/40-ES-EB, TS0601)

#### Bluetooth Devices:
- Sensors:
  - Xiaomi TH Sensor 2 (LYWSD03MMC, miaomiaoche.sensor_ht.t2) with custom [FW](https://github.com/pvvx/ATC_MiThermometer)\
  Integration "BTHome"

  - Xiaomi TH Digital Clock (LYWSD02MMC, miaomiaoche.sensor_ht.t1)\
  Integration "Xiaomi BLE"

  - Qingping Air Monitor Lite (CGDN1)\
  Integration "Qingping"

  - HHCC Flower Care (HHCCJCY01HHCC)\
  Integration "Xiaomi BLE"

- Other:
  - Mi Body Composition Scale 2 (NUN4048GL)\
  Integration "ESPHome" (via xiaomi_miscale platform)

  - NUT Find3 Smart Tracker\
  Integration "iBeacon", not used for now

  - [Holyiot](http://www.holyiot.com/) iBeacon\Eddystone Trackers\
  Via ESPHome ble_tracker component

#### Media Players:
  - Google Chromecast (Gen 1)\
  Integration "Google Cast"

  - Google Chromecast (Gen 3)\
  Integration "Google Cast"

  - Google Home Mini\
  Integration "Google Cast"

  - Yandex Station Lite\
  Integration "Yandex.Station" by [AlexxIT](https://github.com/AlexxIT/YandexStation)

  - Yandex Station Mini-2\
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
Via RESTful sensors

- AC Daikin [FTXB-C](https://www.daikin.eu/en_us/products/ftxb-c.html) Series\
Via Tuya SmartIR flashed to ESPHome, IRremoteESP8266 lib and Xiaomi Magnet Sensors

- Electrolux [Centurio IQ 2.0](https://home-comfort.ru/catalog/vodonagrevateli/nakopitelnye_vodonagrevateli/seriya_centurio_iq_2_0/) with [ECH/WFN-02](https://home-comfort.ru/catalog/obogrevateli_elektricheskie/konvektory/aksessuary/modul_syemnyy_upravlyayushchiy_electrolux_ech_wfn_02_smart_wi_fi/) module\
Via "Yandex.Station" by [AlexxIT](https://github.com/AlexxIT/YandexStation)

- Samsung Galaxy Tab A 8" (SM-T295) with [Fully Kiosk Browser](https://www.fully-kiosk.com)\
Integration "Fully Kiosk Browser"

### Software

**Servers:**

- NUC10:
  - Ubuntu Server 22.04 LTS
  - QEMU + KVM + libvirt
  - Docker
  - Unbound
  - Bind9
  - Nginx
  - Containers:
    - Watchtower
    - [Frigate](https://github.com/blakeblackshear/frigate) with [go2rtc](https://github.com/AlexxIT/go2rtc)
    - [Double Take](https://github.com/skrashevich/double-take/) with [CompreFace](https://github.com/exadel-inc/CompreFace)
    - Transmission
    - Plex
    - [proxy4plex](https://github.com/kadrim/proxy4plex)
    - HLS-Proxy
    - xTeVe
    - PhotoPrism
    - PostgreSQL

- NUC7:
  - Ubuntu Server 22.04 LTS
  - QEMU + KVM + libvirt
  - Docker
  - Containers:
    - Watchtower
    - Minecraft
    - NetBox

**Storage:**
- DSM 7.2
- Virtual Machine Manager
- Photos
- Download Station
- acme.sh
- Containers:
  - Watchtower
  - Portainer
  - Nextcloud
  - PostgeSQL
  - Redis
  - OnlyOffice
  - Imaginary
  - Vaultwarden
  - Zabbix
  - MySQL
  - Grafana
  - Torrserver
  - vlmcsd

**Used DBs:**
- MariaDB
- MySQL
- PostgeSQL
- InfluxDB

**Used HA Add-ons:**
- ESPHome
- Grafana
- InfluxDB
- MariaDB
- Mosquitto broker
- SSH & Web Terminal
- Visual Studio Code
- Glances
- phpMyAdmin
- Silicon Labs Multiprotocol
- [Multipan Flasher](https://github.com/darkxst/multipan_flasher)
- Zigbee2MQTT (Multiple instances)
- Matter Server
- Frigate Proxy

**Mobile Apps:**
- [Home Assistant](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android) official app on Android\
Also as Device Tracker via "Mobile App"

- [OwnTracks](https://play.google.com/store/apps/details?id=org.owntracks.android)\
As Device Tracker via integration "OwnTracks"