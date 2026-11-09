$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release172Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release172Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
& $release172Dart $release172Snapshot --no-version-check test --no-pub --flavor beta --dart-define=CAPTURE_172=true test/qishui_appearance172_ui_test.dart --concurrency=1 --machine *> '.codex-artifacts/2026-11-06-release172/ui-capture-r1.jsonl'
Write-Output "Capture exit=$LASTEXITCODE"
if ($LASTEXITCODE -ne 0) { throw 'Inspect rendered capture failures' }
& $release172Dart $release172Snapshot --no-version-check analyze --no-pub *> '.codex-artifacts/2026-11-06-release172/analyze-final-r1.log'
Write-Output "Analysis exit=$LASTEXITCODE"
