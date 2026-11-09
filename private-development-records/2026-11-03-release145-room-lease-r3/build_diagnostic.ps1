$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
& ./tool/build_android_release_apk.ps1 -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 -VersionName 1.0.45 -VersionCode 66 -TogetherSyncDiagnostics *> .codex-artifacts/2026-11-03-release145-room-lease-r3/build-diagnostic.log
if ($LASTEXITCODE -ne 0) { throw 'Diagnostic candidate build failed; inspect the retained build log.' }

