$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
# Keep the verified host toolchain and memory limits local to this process.
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
& ./tool/build_android_release_apk.ps1 -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 -VersionName 1.0.35 -VersionCode 56 *> .codex-artifacts/2026-11-01-release135/build-release.log
if ($LASTEXITCODE -ne 0) { throw '1.0.35 dual-ARM release build failed. Inspect build-release.log.' }
Write-Output '1.0.35 dual-ARM Release build completed.'
