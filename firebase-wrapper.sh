#!/bin/sh
export PATH=${pkgs.nodejs_20}/bin:$PATH
exec firebase-tools "$@"
