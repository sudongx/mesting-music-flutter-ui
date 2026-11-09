$ErrorActionPreference='Stop'
Set-Location -LiteralPath D:/AnLi
$musicFlutter122='D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$musicOut122='.codex-artifacts/2026-10-30-release122'
$musicFiles122=@((Get-Content docs/validation-2026-10-30-v1.0.21.json -Raw -Encoding utf8 | ConvertFrom-Json).betaRegression.files) + @('test/release_122_profile_test.dart','test/release_122_crash_diagnostics_test.dart')
& $musicFlutter122 test --no-pub --flavor beta --concurrency=2 --reporter json @musicFiles122 *> "$musicOut122/beta-regression.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Beta regression failed' }
& $musicFlutter122 test --no-pub --reporter json test/csnas_app_update_test.dart test/music_search_ui_test.dart *> "$musicOut122/stable-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Stable regression failed' }
& $musicFlutter122 test --no-pub --flavor beta --reporter json test/beta5_ui_test.dart --plain-name 'beta14 Android back registration' *> "$musicOut122/android-back.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Android back regression failed' }
& $musicFlutter122 analyze --no-pub *> "$musicOut122/analyze-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Static analysis failed' }
Write-Output 'All host release checks passed.'
