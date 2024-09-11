#!/bin/sh
if [ $# -eq 0 ]; then
	echo No arguments supplied
	exit 1
fi
cout=0
for arg in "$@"; do
	if [ $cout -eq 3 ]; then
		break
	fi
	cout=$((cout + 1))
	echo "$arg"
done