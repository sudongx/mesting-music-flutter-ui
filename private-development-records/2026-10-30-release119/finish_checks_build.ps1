$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$musicFlutter119 = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$musicOut119 = '.codex-artifacts/2026-10-30-release119'
$musicRegression119 = @((Get-Content -LiteralPath 'docs/validation-2026-10-29-v1.0.18.json' -Raw -Encoding UTF8 | ConvertFrom-Json).betaRegression.files) + @('test/netease_v119_data_test.dart','test/netease_v119_ui_test.dart')
& $musicFlutter119 test --no-pub --flavor beta --concurrency=2 --reporter json @musicRegression119 *> "$musicOut119/beta-verified-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final beta regression failed; inspect beta-verified-final.jsonl' }
Write-Output 'Final 51-file Beta regression passed.'
& $musicFlutter119 test --no-pub --flavor beta --reporter json test/beta5_ui_test.dart --plain-name 'beta14 Android back registration' *> "$musicOut119/android-back-verified-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Android back regression failed' }
& $musicFlutter119 test --no-pub --flavor beta --dart-define=CAPTURE_V119=true --reporter json test/netease_v119_ui_test.dart *> "$musicOut119/ui-verified-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final UI verification failed' }
& $musicFlutter119 analyze --no-pub *> "$musicOut119/analyze-verified-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Static analysis failed' }
Write-Output 'UI, Android back and static analysis passed. Building release APK.'
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
& ./tool/build_android_release_apk.ps1 -FlutterSdkRoot 'D:/CodexCache/flutter-3.41.9' -VersionName '1.0.19' -VersionCode 40 *> "$musicOut119/build-release.log"
if ($LASTEXITCODE -ne 0) { throw 'Release build failed; inspect build-release.log' }
python "$musicOut119/sign_delivery.py"
if ($LASTEXITCODE -ne 0) { throw 'Original-signature preparation failed' }
python "$musicOut119/verify_delivery.py"
if ($LASTEXITCODE -ne 0) { throw 'Final APK verification failed' }
& $musicFlutter119 test --no-pub --reporter json "$musicOut119/verify_local_notes.dart" *> "$musicOut119/notes-verified-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Production APK notes reader verification failed' }
Write-Output 'Original-signature APK and production notes reader verified.'
