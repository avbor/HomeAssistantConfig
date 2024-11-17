#!/bin/sh

# Big thx to:
# Original ldap-auth.sh author https://github.com/bob1de/ldap-auth-sh/blob/master/ldap-auth.sh
# jq black magic https://stackoverflow.com/a/74495616

while getopts "S:B:U:A:L:" flag
do
    case "${flag}" in
        S) SERVER=${OPTARG};;
        B) USERBASE=${OPTARG};;
        U) HA_USERS_GRP=${OPTARG};;
        A) HA_ADMINS_GRP=${OPTARG};;
        L) HA_LOCAL_GRP=${OPTARG};;
    esac
done

# Log messages to stderr.
log() {
    echo "$1" >&2
}

# Escape string to be safely usable in LDAP DN components and URIs.
# https://ldapwiki.com/wiki/DN%20Escape%20Values
ldap_dn_escape() {
    escaped=$(echo "$1" | sed -r \
        -e 's/[,\\#+<>;"=/?]/\\\0/g' \
        -e 's/^ (.*)$/\\ \1/' \
        -e 's/^(.*) $/\1\\ /' \
    )
    echo "$escaped"
}

# Usernames validating pattern
USERNAME_PATTERN='^[a-z|A-Z|0-9|_|-|.]+$'

# Options
TIMEOUT=3
USERDN="uid=$(ldap_dn_escape "$username"),$USERBASE"
BASEDN="$USERDN"
FILTER="(&(objectClass=person)(memberOf=${HA_USERS_GRP}))"
ATTRS="cn sn memberOf"
SCOPE="base"
LDAPSEARCH_PATH="/config/ldap"

# Check mandatory parameters are present
if [ -z "$SERVER" ] || [ -z "$USERBASE" ] || [ -z "$HA_USERS_GRP" ]; then
	log 'Usage: ldap-auth.sh -S "LDAP Server URI" -B "DN for OU with users" -U "DN for HA users group" {Optional: -A "DN for HA admins group" -L "DN for HA local only group"}'
	exit 2
fi

# Check username and password are present and not malformed.
if [ -z "$username" ] || [ -z "$password" ]; then
	log "Need username and password environment variables."
	exit 2
elif [ ! -z "$USERNAME_PATTERN" ]; then
	username_match=$(echo "$username" | sed -r "s/$USERNAME_PATTERN/x/")
	if [ "$username_match" != "x" ]; then
		log "Username '$username' has an invalid format."
		exit 2
	fi
fi

ldap_auth_ldapsearch() {
    output=$($LDAPSEARCH_PATH/ldapsearch -o nettimeout=$TIMEOUT -o ldif_wrap=no -LLL \
        -H "$SERVER" -D "$USERDN" -w "$password" \
        -s "$SCOPE" -b "$BASEDN" "$FILTER" dn $ATTRS | \
        jq --slurp --raw-input \
        'split("\n\n")| map(split("\n") | map(select(.[0:1]!="#" and length>0)) |
        select(length > 0) | map(capture("^(?<key>[^:]*:?): *(?<value>.*)") |
        if .key[-1:.key|length] == ":" then .key=.key[0:-1] | .value=(.value|@base64d) else . end) |
        group_by(.key) | map({key:.[0].key,value:[.[].value]}) | from_entries)'
    )
    [ $? -ne 0 ] && return 1
    return 0
}

ldap_auth_ldapsearch

result=$?
entries=0

if [ $result -eq 0 ]; then
    entries=$(echo -e $output | jq -r '.[].dn.[]' | grep -ciE "^uid=${username}")
    [ "$entries" != "1" ] && result=1
fi

if [ $result -ne 0 ]; then
    log "User '$username' failed to authenticate."
    exit 1
fi

DISPLAY_NAME=$(echo $output | jq -jr '.[] | .cn.[]," ",.sn.[]')

IS_ADMIN=false
if [[ ! -z "$HA_ADMINS_GRP" ]] && echo $output | jq -r '.[].memberOf.[]' | grep -qE "^${HA_ADMINS_GRP}"; then
    IS_ADMIN=true
fi

IS_LOCAL=false
if [[ ! -z "$HA_LOCAL_GRP" ]] && echo $output | jq -r '.[].memberOf.[]' | grep -qE "^${HA_LOCAL_GRP}"; then
    IS_LOCAL=true
fi

on_auth_success() {
    # Print the meta entries for use in HA
    [[ ! -z "$DISPLAY_NAME" ]] && echo "name=$DISPLAY_NAME"

#    if [[ "$IS_ADMIN" = true ]]; then
#        echo "group=system-admin"
#    else
#        echo "group=system-users"
#    fi

    if [[ "$IS_LOCAL" = true ]]; then
        echo "local_only=true"
    else
        echo "local_only=false"
    fi
}

log "User '$username' with DN $(echo $output | jq -r '.[].dn.[]') authenticated successfully."
type on_auth_success > /dev/null && on_auth_success

exit 0