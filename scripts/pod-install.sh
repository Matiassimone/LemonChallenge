#!/bin/bash
# - Install all pods dependencies -

echo -e "\n#### Installing Pod dependencies...\n"

cd ios
bundle exec pod install

cd ..

echo -e "\n#### All done!\n"
