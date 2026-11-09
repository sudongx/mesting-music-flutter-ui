$ErrorActionPreference = 'Stop'
. D:/AnLi/.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
Set-Location -LiteralPath D:/CodexCache/mesting121-after
. ./tool/beta_asset_bundle.ps1
Clear-BetaAssetStaging -AppRoot D:/CodexCache/mesting121-after -Mode profile
& D:/CodexCache/flutter-3.41.9/bin/flutter.bat build apk --profile --flavor beta --target-platform=android-arm64 --target=integration_test/release_121_navigation_benchmark_test.dart '--dart-define=MESTING_ISOLATED_BENCHMARK=true' *> D:/AnLi/.codex-artifacts/2026-10-30-release121/build-after.log
if ($LASTEXITCODE -ne 0) { Get-Content D:/AnLi/.codex-artifacts/2026-10-30-release121/build-after.log -Tail 45; throw 'Candidate build failed' }
Copy-Item -LiteralPath ./build/app/outputs/flutter-apk/app-beta-profile.apk -Destination D:/AnLi/.codex-artifacts/2026-10-30-release121/after-benchmark.apk
