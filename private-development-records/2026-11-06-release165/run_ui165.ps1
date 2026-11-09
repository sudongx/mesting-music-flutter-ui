$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release165Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release165Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release165Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release165'
& $release165Dart $release165Snapshot --no-version-check test --no-pub --flavor beta `
  --dart-define=CAPTURE_QR164=true --dart-define=QR_CAPTURE_DIR=.codex-artifacts/2026-11-06-release165/ui `
  test/qishui_qr_ui_test.dart --machine *> "$release165Out/ui-qr-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'QR UI regression failed' }
& $release165Dart $release165Snapshot --no-version-check test --no-pub --flavor beta `
  --dart-define=CAPTURE_SODA=true --dart-define=SODA_CAPTURE_DIR=.codex-artifacts/2026-11-06-release165/ui `
  test/qishui_ui_test.dart --plain-name 'phone form' --machine *> "$release165Out/ui-phone-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Phone UI regression failed' }
Write-Output 'UI capture regressions passed'
