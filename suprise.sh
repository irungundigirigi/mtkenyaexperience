#!/bin/bash

message="Happy Valentine's Day Abbie ❤️ ❤️"

for (( i=0; i<${#message}; i++ )); do
    echo -n "${message:$i:1}"
    sleep 0.1  # Adjust the sleep duration as needed
done

echo  # This is to add a newline at the end

# Adding spaces below the echoed message
echo
echo
echo
echo
echo
echo
echo
echo

