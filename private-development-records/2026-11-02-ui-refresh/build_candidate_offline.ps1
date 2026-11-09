$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
# Flutter already restored plugins and compiled this variant. Keep the same
# reviewed properties while making the final same-code diagnostic APK offline.
$taskLockBefore = (Get-FileHash -LiteralPath pubspec.lock -Algorithm SHA256).Hash
$taskProps = Get-Content -LiteralPath android/local.properties -Raw
$taskProps = [regex]::Replace($taskProps, '(?m)^flutter.versionCode=.*$', 'flutter.versionCode=58')
$taskProps = [regex]::Replace($taskProps, '(?m)^flutter.versionName=.*$', 'flutter.versionName=1.0.38')
[IO.File]::WriteAllText((Join-Path (Get-Location) 'android/local.properties'), $taskProps, [Text.UTF8Encoding]::new($false))
$taskDefines = @(
  'USE_CLOUDBASE_AUTH=true',
  'ENABLE_APP_UPDATE_CHECKS=false',
  'APP_UPDATE_PACKAGE_NAME=com.mesting.music.beta',
  'MESTING_LOCAL_DIAGNOSTICS=true',
  'MESTING_NATIVE_PLAYBACK_LOGGING=true'
) | ForEach-Object { [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($_)) }
Push-Location -LiteralPath android
try {
  & ./gradlew.bat --offline --no-daemon --console=plain `
    '-Ptarget-platform=android-arm64' '-Ptarget=lib/main.dart' `
    '-Pbase-application-name=android.app.Application' `
    "-Pdart-defines=$($taskDefines -join ',')" `
    '-Pdart-obfuscation=false' '-Ptrack-widget-creation=true' '-Ptree-shake-icons=true' `
    assembleBetaRelease *> ../.codex-artifacts/2026-11-02-ui-refresh/build-candidate-offline.log
  if ($LASTEXITCODE -ne 0) { throw 'Offline diagnostic candidate build failed.' }
} finally { Pop-Location }
Write-Output 'Offline same-code diagnostic build complete; all Gradle checks retained.'

if ((Get-FileHash -LiteralPath pubspec.lock -Algorithm SHA256).Hash -ne $taskLockBefore) { throw 'Dependency lock changed.' }
