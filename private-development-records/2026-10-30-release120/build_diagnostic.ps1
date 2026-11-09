$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
. ./tool/beta_asset_bundle.ps1
Clear-BetaAssetStaging -AppRoot 'D:/AnLi' -Mode release
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' build apk --release --flavor beta --target-platform=android-arm64 --build-name=1.0.20 --build-number=41 '--dart-define=USE_CLOUDBASE_AUTH=true' '--dart-define=ENABLE_APP_UPDATE_CHECKS=true' '--dart-define=APP_UPDATE_PACKAGE_NAME=com.mesting.music.beta' '--dart-define=MESTING_LOCAL_DIAGNOSTICS=true' *> '.codex-artifacts/2026-10-30-release120/build-diagnostic.log'
if ($LASTEXITCODE -ne 0) { Get-Content -LiteralPath '.codex-artifacts/2026-10-30-release120/build-diagnostic.log' -Tail 30; throw 'Diagnostic candidate build failed' }
Assert-BetaAssetExclusions -AppRoot 'D:/AnLi' -Apk 'D:/AnLi/build/app/outputs/flutter-apk/app-beta-release.apk'
Write-Output 'Diagnostic candidate compiled. Explicit original signing/identity verification still required.'
