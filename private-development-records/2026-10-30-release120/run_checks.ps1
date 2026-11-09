$ErrorActionPreference='Stop'
Set-Location -LiteralPath D:/AnLi
$musicFlutter120='D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$musicOut120='.codex-artifacts/2026-10-30-release120'
$musicFiles120=@((Get-Content docs/validation-2026-10-30-v1.0.19.json -Raw -Encoding utf8 | ConvertFrom-Json).betaRegression.files) + @('test/netease_v120_data_test.dart','test/netease_v120_ui_test.dart','test/release_120_render_test.dart','test/release_120_shadow_test.dart')
& $musicFlutter120 test --no-pub --flavor beta --concurrency=2 --reporter json @musicFiles120 *> "$musicOut120/beta-regression.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Beta regression failed' }
& $musicFlutter120 test --no-pub --reporter json test/csnas_app_update_test.dart test/music_search_ui_test.dart *> "$musicOut120/stable-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Stable regression failed' }
& $musicFlutter120 test --no-pub --flavor beta --reporter json test/beta5_ui_test.dart --plain-name 'beta14 Android back registration' *> "$musicOut120/android-back.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Android back regression failed' }
& $musicFlutter120 analyze --no-pub *> "$musicOut120/analyze-verified-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Static analysis failed' }
Write-Output 'Beta, stable, Android back and analysis passed.'
