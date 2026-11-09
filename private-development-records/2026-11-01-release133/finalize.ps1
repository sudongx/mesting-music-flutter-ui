$ErrorActionPreference='Stop'
python .codex-artifacts/2026-11-01-release133/sign_current.py *> .codex-artifacts/2026-11-01-release133/sign-current.log
if ($LASTEXITCODE -ne 0) { throw 'Signing or APK verification failed' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta .codex-artifacts/2026-11-01-release133/verify_local_notes.dart *> .codex-artifacts/2026-11-01-release133/local-notes-check.log
if ($LASTEXITCODE -ne 0) { throw 'Local APK notes verification failed' }
python .codex-artifacts/2026-11-01-release133/write_delivery_docs.py
if ($LASTEXITCODE -ne 0) { throw 'Delivery document writer failed' }
python .codex-artifacts/2026-11-01-release133/freeze_source.py *> .codex-artifacts/2026-11-01-release133/freeze-source.log
if ($LASTEXITCODE -ne 0) { throw 'Source freeze failed' }
python .codex-artifacts/2026-11-01-release133/finish_artifacts.py
if ($LASTEXITCODE -ne 0) { throw 'Final preservation verification failed' }
