$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$music152Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release152'
$music152Args = @(Get-Content -LiteralPath "$music152Out/private-gradle-arguments.json" -Raw | ConvertFrom-Json)
if ($music152Args -notcontains '--offline' -or $music152Args -notcontains 'assembleBetaRelease') { throw 'Wrong offline task' }
$music152OnlineLog = "$music152Out/build-final-release-online-attempt.log"
if (Test-Path -LiteralPath $music152OnlineLog) { throw 'Never overwrite an earlier build log' }
Move-Item -LiteralPath "$music152Out/build-final-release.log" -Destination $music152OnlineLog
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
Push-Location -LiteralPath 'D:/AnLi/android'
try {
  & "$env:JAVA_HOME/bin/java.exe" @music152Args *> "$music152Out/build-final-release.log"
  if ($LASTEXITCODE -ne 0) { throw 'Offline Gradle build failed; inspect bounded log' }
} finally { Pop-Location }
$music152Produced = 'D:/AnLi/build/app/outputs/apk/beta/release/app-beta-release.apk'
$music152Manifest = Get-Content -LiteralPath "$music152Out/build-input-final.json" -Raw | ConvertFrom-Json
if (!(Test-Path -LiteralPath $music152Produced) -or (Get-Item -LiteralPath $music152Produced).LastWriteTimeUtc -lt [DateTime]::Parse($music152Manifest.startedAtUtc).ToUniversalTime()) { throw 'Offline build did not produce a fresh APK' }
# This is the final copy normally performed by Flutter after Gradle completes.
Copy-Item -LiteralPath $music152Produced -Destination 'D:/AnLi/build/app/outputs/flutter-apk/app-beta-release.apk' -Force
. ./tool/beta_asset_bundle.ps1
Assert-BetaAssetExclusions -AppRoot 'D:/AnLi' -Apk 'D:/AnLi/build/app/outputs/flutter-apk/app-beta-release.apk'
$music152Receipt = 'Built build/app/outputs/flutter-apk/app-beta-release.apk from exact Flutter Gradle arguments with task-scoped --offline; Flutter pub prereq completed online, package lock unchanged.'
Add-Content -LiteralPath "$music152Out/build-final-release.log" -Value $music152Receipt -Encoding utf8
Write-Output $music152Receipt
