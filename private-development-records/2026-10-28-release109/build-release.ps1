$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
# Process-local build limits preserve the shared SDK and Gradle configuration.
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1536m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=2'
./tool/build_android_release_apk.ps1 -FlutterSdkRoot 'D:/CodexCache/flutter-3.41.9' -VersionName '1.0.9' -VersionCode 30
