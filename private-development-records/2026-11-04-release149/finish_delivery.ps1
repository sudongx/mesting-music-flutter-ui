$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music149Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release149'
python "$music149Out/verify_build_inputs.py" *> "$music149Out/build-readback.log"
if ($LASTEXITCODE -ne 0) { throw 'Build/source readback failed; inspect build-readback.log.' }
python "$music149Out/sign_and_verify.py" *> "$music149Out/sign-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Original-signature APK verification failed; inspect sign-final.log.' }
python "$music149Out/verify_formal_payload.py" *> "$music149Out/formal-payload-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Actual native payload readback failed; inspect formal-payload-final.log.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta .codex-artifacts/2026-11-04-release149/verify_local_notes.dart --machine *> "$music149Out/local-apk-notes.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Actual APK production notes reader failed; inspect local-apk-notes.jsonl.' }
python "$music149Out/summarize_checks.py" *> "$music149Out/check-summary-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Final summary failed.' }
python "$music149Out/write_delivery_docs.py"
if ($LASTEXITCODE -ne 0) { throw 'Actual-evidence delivery documents failed.' }
python "$music149Out/freeze_source.py"
if ($LASTEXITCODE -ne 0) { throw 'New source freeze failed; retain staging file for inspection.' }
python "$music149Out/preserve.py"
if ($LASTEXITCODE -ne 0) { throw 'Existing frozen-artifact or signing/lock/index preservation failed.' }
python "$music149Out/finalize_delivery.py"
if ($LASTEXITCODE -ne 0) { throw 'Final delivery readback failed.' }
Write-Output '1.0.49 original-signature APK and complete source delivered locally and verified.'
