#!/bin/sh
# Check the final stripped executable, not just the intermediate static archive.
set -eu
repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
archive=${1:-"$repo_root/build/ios/archive/Runner.xcarchive"}
app="$archive/Products/Applications/Runner.app"
executable_name=$(/usr/libexec/PlistBuddy -c 'Print :CFBundleExecutable' "$app/Info.plist")
executable="$app/$executable_name"
xcrun lipo -verify_arch arm64 "$executable"
if ! xcrun dyld_info -exports "$executable" | awk '$NF == "_start_server" { found = 1 } END { exit !found }'; then
  echo 'ERROR: iOS archive has no exported start_server; Dart FFI cannot start the music service.' >&2
  exit 1
fi
echo 'Verified arm64 iOS archive and exported Rust music service entry. Signing is not checked.'
