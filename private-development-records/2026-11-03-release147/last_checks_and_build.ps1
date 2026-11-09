$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music147Out = 'D:/AnLi/.codex-artifacts/2026-11-03-release147'
& 'D:/CodexCache/flutter-3.41.9/bin/dart.bat' fix --apply --code=curly_braces_in_flow_control_structures --code=unused_import --code=unnecessary_import *> "$music147Out/lint-final.log"
$music147Notes = @('test/beta_update_isolation_test.dart',
 'test/csnas_app_update_test.dart','test/music_ring_update_test.dart',
 'test/release_106_update_notes_test.dart','test/release_132_notes_test.dart',
 'test/music_home_catalogues_test.dart','test/scene_catalog_contract_test.dart',
 'test/release_147_collection_ui_test.dart')
foreach ($music147File in $music147Notes) { if (-not (Test-Path -LiteralPath $music147File)) { throw "Missing suite: $music147File" } }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta @music147Notes --concurrency=2 --machine *> "$music147Out/post-notes-verified.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Current-version notes/catalogue regression failed.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub test/playlist_detail_ui_test.dart test/app_update_test.dart --concurrency=1 --machine *> "$music147Out/stable-legacy-playlist.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Stable full playlist regression failed.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta --dart-define=TOGETHER_SYNC_DIAGNOSTICS=false test/release_145_background_diagnostics_test.dart test/release_145_snapshot_poll_test.dart test/release_144_background_sync_test.dart test/release_143_background_sync_test.dart --concurrency=1 --machine *> "$music147Out/formal-regression.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Formal logging and synchronization regression failed.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' analyze --no-pub *> "$music147Out/analyze-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Final static analysis failed.' }
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
& ./tool/build_android_release_apk.ps1 -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 -VersionName 1.0.47 -VersionCode 68 *> "$music147Out/build-release.log"
if ($LASTEXITCODE -ne 0) { throw 'Formal dual-ARM release build failed.' }
