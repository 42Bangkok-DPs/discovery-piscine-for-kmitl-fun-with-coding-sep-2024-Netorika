#!/bin/sh
if [ $# -eq 0 ]; then
	echo No arguments supplied
	exit 1
fi
c="ex"
for arg in "$@"; do
	mkdir $c"$arg"
done
