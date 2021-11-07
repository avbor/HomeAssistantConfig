#!/bin/bash

#----
VM_NAME=homeassistant
VM_SRC_DIR=/mnt/vm
BACKUP_DIR=/mnt/nas02/backup
#----
DATE_YMD=$(date +%y%m%d)
DATE_DMY=$(date +%d%m%y)
DEST_DIR=$BACKUP_DIR/$DATE_YMD

mkdir $BACKUP_DIR/$DATE_YMD
cp $VM_SRC_DIR/*.xml $DEST_DIR/
virsh dumpxml $VM_NAME > $DEST_DIR/$VM_NAME_vm_$DATE_DMY.xml
virsh snapshot-create-as --domain $VM_NAME backup_snap --diskspec vda,file=$VM_SRC_DIR/$VM_NAME_backup_snap_$DATE_DMY.qcow2 --disk-only --atomic --quiesce –no-metadata
sleep 1
pigz -c $VM_SRC_DIR/$VM_NAME.qcow2 > $DEST_DIR/$VM_NAME_vm_$DATE_DMY.qcow2.gz
sleep 1
virsh blockcommit $VM_NAME vda --active --verbose --pivot
sleep 1
rm -rf $VM_SRC_DIR/$VM_NAME_backup_snap_$DATE_DMY.qcow2