$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$taskLockBefore = (Get-FileHash -LiteralPath pubspec.lock -Algorithm SHA256).Hash
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
# Private original-signature diagnostic candidate; no deployment/public archive.
# Release mode keeps the pinned OpenGLES engine and complete glass shaders.
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' build apk --release --flavor beta `
  --target-platform=android-arm64 --build-name=1.0.38 --build-number=58 `
  --dart-define=USE_CLOUDBASE_AUTH=true `
  --dart-define=ENABLE_APP_UPDATE_CHECKS=false `
  --dart-define=APP_UPDATE_PACKAGE_NAME=com.mesting.music.beta `
  --dart-define=MESTING_LOCAL_DIAGNOSTICS=true `
  --dart-define=MESTING_NATIVE_PLAYBACK_LOGGING=true `
  *> .codex-artifacts/2026-11-02-total-duration-debug/build-candidate.log
if ($LASTEXITCODE -ne 0) { throw 'Private candidate build failed; inspect log.' }
if ((Get-FileHash -LiteralPath pubspec.lock -Algorithm SHA256).Hash -ne $taskLockBefore) {
  throw 'Dependency lock changed during candidate build.'
}
Write-Output 'Private native-log candidate compiled; dependency lock unchanged.'
