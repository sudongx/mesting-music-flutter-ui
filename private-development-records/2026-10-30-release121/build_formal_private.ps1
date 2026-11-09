$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
& ./tool/build_android_release_apk.ps1 -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 -VersionName 1.0.21 -VersionCode 42 *> .codex-artifacts/2026-10-30-release121/build-release.log
if ($LASTEXITCODE -ne 0) { throw 'Final dual-ARM release build failed' }
python .codex-artifacts/2026-10-30-release121/sign_delivery.py
if ($LASTEXITCODE -ne 0) { throw 'Original signing failed' }
