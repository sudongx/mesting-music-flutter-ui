$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music155Out='D:/AnLi/.codex-artifacts/2026-11-05-release155'
$music155Flutter='D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
& $music155Flutter test --no-pub --flavor beta --concurrency=1 --machine '--dart-define=CAPTURE_151=true' '--dart-define=CAPTURE_151_DIR=D:/AnLi/.codex-artifacts/2026-11-05-release155/ui-final' test/release_155_ui_test.dart test/release_153_ui_test.dart *> "$music155Out/ui-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final UI capture failure' }
$music155Nav=@(Get-Content -LiteralPath "$music155Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music155Flutter test --no-pub --flavor beta --concurrency=1 --machine @music155Nav *> "$music155Out/search-back-player.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final navigation failure' }
& $music155Flutter analyze --no-pub *> "$music155Out/analyze-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Final analysis failure' }
python "$music155Out/summarize_checks.py"
if ($LASTEXITCODE -ne 0) { throw 'Final summary failure' }
