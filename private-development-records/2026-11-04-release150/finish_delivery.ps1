$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
python .codex-artifacts/2026-11-04-release150/verify_build_inputs.py
if ($LASTEXITCODE -ne 0) { throw 'Actual build input verification failed.' }
python .codex-artifacts/2026-11-04-release150/sign_and_verify.py
if ($LASTEXITCODE -ne 0) { throw 'APK signing/readback verification failed.' }
python .codex-artifacts/2026-11-04-release150/verify_formal_payload.py
if ($LASTEXITCODE -ne 0) { throw 'APK native payload verification failed.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' --no-version-check test --no-pub --flavor beta .codex-artifacts/2026-11-04-release150/verify_local_notes.dart --concurrency=1 --machine *> '.codex-artifacts/2026-11-04-release150/local-apk-notes.jsonl'
if ($LASTEXITCODE -ne 0) { throw 'Actual APK Range notes reader verification failed.' }
python .codex-artifacts/2026-11-04-release150/write_delivery_docs.py
if ($LASTEXITCODE -ne 0) { throw 'Delivery documentation preparation failed.' }
python .codex-artifacts/2026-11-04-release150/freeze_source.py
if ($LASTEXITCODE -ne 0) { throw 'Source freeze verification failed.' }
python .codex-artifacts/2026-11-04-release150/preserve.py
if ($LASTEXITCODE -ne 0) { throw 'Original files or frozen artifacts preservation failed.' }
python .codex-artifacts/2026-11-04-release150/finalize_delivery.py
if ($LASTEXITCODE -ne 0) { throw 'Final delivery record failed.' }
