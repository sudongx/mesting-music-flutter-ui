$ErrorActionPreference='Stop'
Set-Location -LiteralPath D:/AnLi
$musicFlutter121='D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$musicOut121='.codex-artifacts/2026-10-30-release121'
$musicFiles121=@((Get-Content docs/validation-2026-10-30-v1.0.20.json -Raw -Encoding utf8 | ConvertFrom-Json).betaRegression.files) + @('test/release_121_navigation_test.dart','test/release_121_matte_cache_test.dart','test/release_121_artwork_transport_test.dart')
& $musicFlutter121 test --no-pub --flavor beta --concurrency=2 --reporter json @musicFiles121 *> "$musicOut121/beta-regression.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Beta regression failed' }
& $musicFlutter121 test --no-pub --reporter json test/csnas_app_update_test.dart test/music_search_ui_test.dart *> "$musicOut121/stable-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Stable regression failed' }
& $musicFlutter121 test --no-pub --flavor beta --reporter json test/beta5_ui_test.dart --plain-name 'beta14 Android back registration' *> "$musicOut121/android-back.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Android back regression failed' }
& $musicFlutter121 analyze --no-pub *> "$musicOut121/analyze-verified-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Static analysis failed' }
Write-Output 'Beta, stable, Android back and analysis passed.'
