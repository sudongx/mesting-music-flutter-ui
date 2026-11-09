$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
python .codex-artifacts/2026-10-31-release127/sign_and_verify.py
if ($LASTEXITCODE -ne 0) { throw 'Signing/verification failed.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta --reporter expanded .codex-artifacts/2026-10-31-release127/verify_local_notes.dart *> .codex-artifacts/2026-10-31-release127/local-apk-notes.log
if ($LASTEXITCODE -ne 0) { throw 'Final APK production notes reader failed.' }
python .codex-artifacts/2026-10-31-release127/write_validation.py
if ($LASTEXITCODE -ne 0) { throw 'Validation aggregation failed.' }
python .codex-artifacts/2026-10-31-release127/write_handoff.py
if ($LASTEXITCODE -ne 0) { throw 'Handoff generation failed.' }
python .codex-artifacts/2026-10-31-release127/freeze_source.py
if ($LASTEXITCODE -ne 0) { throw 'Source freeze failed.' }
python .codex-artifacts/2026-10-31-release127/final_check.py
if ($LASTEXITCODE -ne 0) { throw 'Final frozen pair check failed.' }
Write-Output '1.0.27 APK, complete source and verification delivered locally.'
