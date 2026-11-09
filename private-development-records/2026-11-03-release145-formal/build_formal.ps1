$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$musicFormalOut = 'D:/AnLi/.codex-artifacts/2026-11-03-release145-formal'
# Keep the established SDK, JDK and bounded Gradle memory settings local to
# this process. This script never installs an APK or accesses an account.
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta `
    '--dart-define=TOGETHER_SYNC_DIAGNOSTICS=false' `
    test/release_145_background_diagnostics_test.dart `
    test/release_145_snapshot_poll_test.dart `
    test/release_144_background_sync_test.dart `
    test/release_143_background_sync_test.dart `
    --concurrency=1 --machine *> "$musicFormalOut/formal-regression.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Formal logging/synchronization regression failed; retain the complete log.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' analyze --no-pub *> "$musicFormalOut/analyze-complete.log"
if ($LASTEXITCODE -ne 0) { throw 'Formal source analysis failed; retain the complete log.' }
# Omitting TogetherSyncDiagnostics is intentional: the public entry explicitly
# compiles TOGETHER_SYNC_DIAGNOSTICS=false and the other private flags off.
& ./tool/build_android_release_apk.ps1 -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 `
    -VersionName 1.0.45 -VersionCode 66 *> "$musicFormalOut/build-release.log"
if ($LASTEXITCODE -ne 0) { throw 'Formal dual-ARM Release build failed; inspect the retained log.' }

