#!/usr/bin/env bash

[[ ${TERM}=="" ]] && TPUTTERM='-T xterm-256color' || TPUTTERM=''

set -e

green=`tput setaf 2`
nc=`tput sgr0`

echo -e "\n${green}✔${nc} kengine cli succesfully installed"
echo -e "\nWhat now?"
echo -e "# Run ${green}kengine login${nc} and become a kenginer!"
