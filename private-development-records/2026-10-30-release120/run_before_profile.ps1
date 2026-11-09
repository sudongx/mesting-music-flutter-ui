$ErrorActionPreference = 'Stop'
. D:/AnLi/.codex-artifacts/2026-10-27-v1.0.1/env.ps1
& D:/AnLi/tool/run_beta19_native_profile.ps1 -Apk D:/AnLi/.codex-artifacts/2026-10-30-release120/benchmark-before.apk -ProjectRoot D:/CodexCache/mesting120-before -Device eb293ac2 -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 -AndroidSdkRoot D:/CodexCache/android-build/sdk *> D:/AnLi/.codex-artifacts/2026-10-30-release120/native-before.log
if ($LASTEXITCODE -ne 0) { throw 'Before native drive failed' }
