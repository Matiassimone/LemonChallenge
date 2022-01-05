#!/bin/bash
# - Clears app caches and reinstalls all dependencies -

echo -e "#### Removing caches...\n"

rm -rf node_modules
rm -rf vendor
rm -rf ios/build
rm -rf ios/Pods
rm -rf ~/Library/Developer/Xcode/DerivedData
rm -rf $TMPDIR/react-* && rm -rf $TMPDIR/metro-* && rm -rf $TMPDIR/haste-*
watchman watch-del-all
npm cache verify

echo -e "\n#### Installing bundle dependencies...\n"

bundle install --path vendor/bundle

echo -e "\n#### Installing NPM dependencies...\n"

npm i

echo -e "\n#### Installing Pod dependencies...\n"

cd ios
bundle exec pod deintegrate
bundle exec pod cache clean --all
bundle exec pod install

cd ..

echo -e "\n#### All done!\n"
