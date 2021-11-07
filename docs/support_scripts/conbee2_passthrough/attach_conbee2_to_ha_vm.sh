#!/bin/bash

$DEV_XML=/mnt/vm/ha_usb_1cf1_0030.xml

sleep 5

RUN_DEV=$1
CURR_DEV=$(lsusb | grep "Dresden Elektronik ConBee II" | grep -Eo "[0-9]{3} Device [0-9]{3}" | awk -F ' Device ' '{print "/dev/bus/usb/" $1 "/" $2}')

if [ "$RUN_DEV" = "$CURR_DEV" ]; then
    /usr/bin/virsh attach-device homeassistant --file $DEV_XML --current
fi