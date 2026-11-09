$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
& {
    # Use the established process-local toolchain without exposing signing data.
    . ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
    $env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
    & ./tool/build_android_release_apk.ps1 -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 -VersionName 1.0.56 -VersionCode 77
    if ($LASTEXITCODE -ne 0) { throw 'Local 56 build failed; inspect private build log.' }
} *> .codex-artifacts/2026-11-05-storage156-investigation/build156.log
Write-Output 'Local 56 build finished.'
