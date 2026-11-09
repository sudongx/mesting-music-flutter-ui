$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music146Out = 'D:/AnLi/.codex-artifacts/2026-11-03-release146'
# Final visual pass uses its own directory. Keep the first render and all
# earlier failure logs intact so the validation boundary remains reviewable.
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta --dart-define=CAPTURE_146=true --dart-define=CAPTURE_146_DIR=.codex-artifacts/2026-11-03-release146/ui-round2 test/release_146_ui_test.dart --machine *> "$music146Out/visual-round2-ui.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final visual pass failed; retain the log.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta test/release_146_download_resume_test.dart test/release_146_ui_test.dart test/netease_full_ui_test.dart test/netease_v112_fallback_download_test.dart test/release_124_pages_test.dart --concurrency=2 --machine *> "$music146Out/beta-final-current-complete.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final changed-file suites failed; retain the log.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta --dart-define=TOGETHER_SYNC_DIAGNOSTICS=false test/release_145_background_diagnostics_test.dart test/release_145_snapshot_poll_test.dart test/release_144_background_sync_test.dart test/release_143_background_sync_test.dart --concurrency=1 --machine *> "$music146Out/formal-regression.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Formal synchronization/logging regression failed.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' analyze --no-pub *> "$music146Out/analyze-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Final analysis failed; retain the log.' }
# Retain the original toolchain, bounded Gradle memory and explicit false
# private flags. The local build does not install or access a phone/account.
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
& ./tool/build_android_release_apk.ps1 -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 -VersionName 1.0.46 -VersionCode 67 *> "$music146Out/build-release.log"
if ($LASTEXITCODE -ne 0) { throw 'Formal dual-ARM release build failed; retain the log.' }
