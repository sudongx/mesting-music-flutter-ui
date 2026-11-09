$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
& {
  # Established local SDK/signing environment; do not print its contents or
  # full Gradle arguments. The script contains only process environment setup.
  . ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
  $env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
  & ./tool/build_android_release_apk.ps1 -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 -VersionName 1.0.55 -VersionCode 76
  if ($LASTEXITCODE -ne 0) { throw 'Release55 build failed; inspect the private log.' }
} *> .codex-artifacts/2026-11-05-release155/build-release.log
Write-Output 'Local release55 build finished.'
