#!/bin/sh
set -eu
repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
platform=${PLATFORM_NAME:-iphonesimulator}
case "$platform" in
  iphonesimulator) rust_target=aarch64-apple-ios-sim ;;
  iphoneos) rust_target=aarch64-apple-ios ;;
  *) echo "Unsupported iOS platform: $platform" >&2; exit 1 ;;
esac
if [ -d "$HOME/.local/share/mesting-toolchain/cargo" ]; then
  export CARGO_HOME="$HOME/.local/share/mesting-toolchain/cargo"
  export RUSTUP_HOME="$HOME/.local/share/mesting-toolchain/rustup"
  export PATH="$CARGO_HOME/bin:$PATH"
fi
cargo rustc --manifest-path "$repo_root/third_party/md3music/rust/Cargo.toml" \
  --locked --lib --release --target "$rust_target" --crate-type staticlib -j 2
output="$repo_root/ios/Frameworks/$platform"
mkdir -p "$output"
cp "$repo_root/third_party/md3music/rust/target/$rust_target/release/libkugou_server.a" "$output/libkugou_server.a.tmp"
mv "$output/libkugou_server.a.tmp" "$output/libkugou_server.a"
