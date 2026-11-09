$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
# Keep SDK, JDK and Gradle memory settings process-local. Do not use the system
# Flutter installation or replace the project's pinned release engine.
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
& ./tool/build_android_release_apk.ps1 -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 -VersionName 1.0.44 -VersionCode 65 *> .codex-artifacts/2026-11-03-release144/build-release.log
if ($LASTEXITCODE -ne 0) { throw '1.0.44 dual-ARM Release build failed. Inspect build-release.log.' }
Write-Output '1.0.44 dual-ARM Release build completed.'
