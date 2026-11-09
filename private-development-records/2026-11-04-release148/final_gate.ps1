$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music148Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music148Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release148'
& 'D:/CodexCache/flutter-3.41.9/bin/dart.bat' format test/release_148_ui_test.dart
& $music148Flutter test --no-pub --flavor beta test/release_148_ui_test.dart --concurrency=1 --machine *> "$music148Out/ui-geometry-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final full UI/geometry suite failed.' }
& $music148Flutter test --no-pub --flavor beta test/beta5_ui_test.dart --concurrency=1 --machine *> "$music148Out/navigation-current.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final complete navigation suite failed.' }
$music148Files = @(Get-Content -LiteralPath "$music148Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music148Flutter test --no-pub @music148Files --concurrency=2 --machine *> "$music148Out/stable-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final Stable regression failed.' }
& $music148Flutter analyze --no-pub *> "$music148Out/analyze-current.log"
if ($LASTEXITCODE -ne 0) { throw 'Final analysis failed.' }
python "$music148Out/summarize_checks.py"
if ($LASTEXITCODE -ne 0) { throw 'Final evidence summary failed.' }
