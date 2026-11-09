$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release174Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release174Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
& $release174Dart $release174Snapshot --no-version-check test --no-pub --flavor beta test/qishui_capture173_ui_test.dart --dart-define=CAPTURE_173=true --dart-define=UI_CAPTURE_173_DIR=.codex-artifacts/2026-11-07-release174/ui-projection-final --machine *> '.codex-artifacts/2026-11-07-release174/ui-capture-r9.jsonl'
if ($LASTEXITCODE -ne 0) { throw 'UI capture failed' }
& $release174Dart $release174Snapshot --no-version-check analyze --no-pub *> '.codex-artifacts/2026-11-07-release174/analyze-final-r9.log'
if ($LASTEXITCODE -ne 0) { throw 'Analysis failed' }
& '.codex-artifacts/2026-11-07-release174/build174.ps1' *> '.codex-artifacts/2026-11-07-release174/build174-r5.log'
if ($LASTEXITCODE -ne 0) { throw 'Rebuild failed' }
Write-Output 'Candidate compiled with Soda artwork readiness projection.'
