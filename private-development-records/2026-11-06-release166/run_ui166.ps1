$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release166Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release166Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release166Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release166'
& $release166Dart $release166Snapshot --no-version-check test --no-pub --flavor beta `
  --dart-define=CAPTURE_QR164=true --dart-define=QR_CAPTURE_DIR=.codex-artifacts/2026-11-06-release166/ui `
  test/qishui_qr_ui_test.dart --machine *> "$release166Out/ui-qr-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'QR UI regression failed' }
& $release166Dart $release166Snapshot --no-version-check test --no-pub --flavor beta `
  --dart-define=CAPTURE_SODA=true --dart-define=SODA_CAPTURE_DIR=.codex-artifacts/2026-11-06-release166/ui `
  test/qishui_ui_test.dart --plain-name 'QR-only entry' --machine *> "$release166Out/ui-entry-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'QR-only entry regression failed' }
Write-Output 'UI capture regressions passed'
