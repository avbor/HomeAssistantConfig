#!/bin/bash

HA_VM_NAME="homeassistant-main"
HA_VM_GUID=$(/usr/syno/bin/synowebapi -s --exec api=SYNO.Virtualization.API.Guest version=1 method=list runner=admin | jq -r --arg VM_NAME $HA_VM_NAME '.data.guests | .[] | select(.guest_name==$VM_NAME) | .guest_id')

/usr/local/bin/virsh detach-device $HA_VM_GUID --file /volume3/sys_files/vm/ha_usb_1cf1_0030.xml > /dev/null 2>&1 || true
sleep 3
/usr/local/bin/virsh attach-device $HA_VM_GUID --file /volume3/sys_files/vm/ha_usb_1cf1_0030.xml --current