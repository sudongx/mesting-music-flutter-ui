$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music148Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release148'
python "$music148Out/verify_build_inputs.py" *> "$music148Out/build-readback.log"
if ($LASTEXITCODE -ne 0) { throw 'Build/source readback failed; inspect build-readback.log.' }
python "$music148Out/sign_and_verify.py" *> "$music148Out/sign-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Original-signature APK verification failed; inspect sign-final.log.' }
python "$music148Out/verify_formal_payload.py" *> "$music148Out/formal-payload-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Actual native payload readback failed; inspect formal-payload-final.log.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta .codex-artifacts/2026-11-04-release148/verify_local_notes.dart --machine *> "$music148Out/local-apk-notes.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Actual APK production notes reader failed; inspect local-apk-notes.jsonl.' }
python "$music148Out/summarize_checks.py" *> "$music148Out/check-summary-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Final summary failed.' }
python "$music148Out/write_delivery_docs.py"
if ($LASTEXITCODE -ne 0) { throw 'Actual-evidence delivery documents failed.' }
python "$music148Out/freeze_source.py"
if ($LASTEXITCODE -ne 0) { throw 'New source freeze failed; retain staging file for inspection.' }
python "$music148Out/preserve.py"
if ($LASTEXITCODE -ne 0) { throw 'Existing frozen-artifact or signing/lock/index preservation failed.' }
python "$music148Out/finalize_delivery.py"
if ($LASTEXITCODE -ne 0) { throw 'Final delivery readback failed.' }
Write-Output '1.0.48 original-signature APK and complete source delivered locally and verified.'
