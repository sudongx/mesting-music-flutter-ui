$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music155Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release155'
$music155Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
& $music155Flutter test --no-pub --flavor beta --concurrency=2 --machine test/release_155_network_test.dart test/release_155_official_test.dart *> "$music155Out/final-regressions.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final regression failure' }
& $music155Flutter test --no-pub --flavor beta --concurrency=1 --machine '--dart-define=CAPTURE_151=true' '--dart-define=CAPTURE_151_DIR=D:/AnLi/.codex-artifacts/2026-11-05-release155/ui-final' test/release_155_ui_test.dart test/release_153_ui_test.dart *> "$music155Out/ui-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final UI capture failure' }
if (Test-Path -LiteralPath "$music155Out/analyze-initial.log") { throw 'Preserve the existing initial analysis evidence' }
Move-Item -LiteralPath "$music155Out/analyze-final.log" -Destination "$music155Out/analyze-initial.log"
Copy-Item -LiteralPath "$music155Out/check-exits.json" -Destination "$music155Out/check-exits-initial.json"
& $music155Flutter analyze --no-pub *> "$music155Out/analyze-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Final analysis failure' }
$music155Exits = Get-Content -LiteralPath "$music155Out/check-exits.json" -Raw | ConvertFrom-Json
$music155Exits.analysis = 0
$music155Exits | ConvertTo-Json | Set-Content -LiteralPath "$music155Out/check-exits.json" -Encoding utf8
python "$music155Out/summarize_checks.py"
if ($LASTEXITCODE -ne 0) { throw 'Final check summary failure' }
