$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
$env:GRADLE_OPTS = '-Dorg.gradle.jvmargs="-Xmx3g -XX:MaxMetaspaceSize=1024m -XX:ReservedCodeCacheSize=256m" -Dorg.gradle.workers.max=1 -Dorg.gradle.daemon=false'
& ./tool/build_android_release_apk.ps1 -FlutterSdkRoot D:/CodexCache/flutter-3.41.9 -VersionName 1.0.20 -VersionCode 41 *> .codex-artifacts/2026-10-30-release120/build-release.log
if ($LASTEXITCODE -ne 0) { throw 'Final dual-ARM release build failed' }
python .codex-artifacts/2026-10-30-release120/sign_delivery.py
if ($LASTEXITCODE -ne 0) { throw 'Original signing failed' }
python .codex-artifacts/2026-10-30-release120/verify_delivery.py
if ($LASTEXITCODE -ne 0) { throw 'APK verification failed' }
& D:/CodexCache/flutter-3.41.9/bin/flutter.bat test --no-pub --reporter json .codex-artifacts/2026-10-30-release120/verify_local_notes.dart *> .codex-artifacts/2026-10-30-release120/notes-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Final production Range notes reader failed' }
