$ErrorActionPreference = 'Stop'
. D:/AnLi/.codex-artifacts/2026-10-27-v1.0.1/env.ps1
& D:/AnLi/tool/run_beta19_native_profile.ps1 -Apk D:/AnLi/.codex-artifacts/2026-10-30-release121/after-benchmark.apk -ProjectRoot D:/CodexCache/mesting121-after -Device eb293ac2 -Target integration_test/release_121_navigation_benchmark_test.dart -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 -AndroidSdkRoot D:/CodexCache/android-build/sdk *> D:/AnLi/.codex-artifacts/2026-10-30-release121/native-after.log
if ($LASTEXITCODE -ne 0) { Get-Content D:/AnLi/.codex-artifacts/2026-10-30-release121/native-after.log -Tail 50; throw 'Native candidate failed' }
