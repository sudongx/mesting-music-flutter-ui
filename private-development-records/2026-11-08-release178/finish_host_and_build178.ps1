$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:CI = 'true'
$replacement178Out = 'D:/AnLi/.codex-artifacts/2026-11-08-release178'
$replacement178Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$replacement178Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
& $replacement178Dart $replacement178Snapshot --no-version-check test --no-pub --flavor beta --concurrency=1 --machine test/qishui_diagnostics178_ui_test.dart *> "$replacement178Out/ui-replacement.jsonl"
$replacement178Exit = $LASTEXITCODE
Write-Output "Replacement UI exit=$replacement178Exit"
if ($replacement178Exit -ne 0) { throw 'Final replacement file failed' }
& $replacement178Dart $replacement178Snapshot --no-version-check test --no-pub --flavor beta --dart-define=CAPTURE_178=true --concurrency=1 --machine test/qishui_diagnostics178_ui_test.dart *> "$replacement178Out/ui-final-r2.jsonl"
$replacement178Capture = $LASTEXITCODE
@{ replacement = $replacement178Exit; capture = $replacement178Capture } | ConvertTo-Json | Set-Content -LiteralPath "$replacement178Out/replacement-exits.json" -Encoding utf8
Write-Output "Final capture exit=$replacement178Capture"
if ($replacement178Capture -ne 0) { throw 'Final UI capture failed' }
python -B "$replacement178Out/summarize178.py"
if ($LASTEXITCODE -ne 0) { throw 'Merged checks failed' }
& "$replacement178Out/build_candidate178.ps1" *> "$replacement178Out/build-candidate1.log"
$replacement178Build = $LASTEXITCODE
Write-Output "Build exit=$replacement178Build"
