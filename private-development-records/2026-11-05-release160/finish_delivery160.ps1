$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music160Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release160'
python "$music160Out/summarize_checks.py" *> "$music160Out/host-summary.log"
if ($LASTEXITCODE -ne 0) { throw 'Host checks incomplete or failed; inspect private summary log.' }
python "$music160Out/record_build_inputs.py" *> "$music160Out/build-input-capture.log"
if ($LASTEXITCODE -ne 0) { throw 'Build input capture failed.' }
& "$music160Out/build160-final.ps1"
if ($LASTEXITCODE -ne 0) { throw 'Local Android build failed.' }
python "$music160Out/sign_and_verify160.py" *> "$music160Out/sign-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Actual APK signing/verification failed; inspect private log.' }
python "$music160Out/verify_native_packaging160.py" *> "$music160Out/native-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Actual native packaging verification failed.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' --no-version-check test --no-pub --flavor beta "$music160Out/verify_local_notes160.dart" --concurrency=1 --machine *> "$music160Out/local-apk-notes-test.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Production APK notes reader verification failed.' }
python "$music160Out/finalize_delivery160.py" *> "$music160Out/final-docs.log"
if ($LASTEXITCODE -ne 0) { throw 'Final documentation/preservation audit failed.' }
python "$music160Out/freeze_source160.py" *> "$music160Out/freeze-source.log"
if ($LASTEXITCODE -ne 0) { throw 'Complete source freeze failed.' }
python "$music160Out/record_final_state160.py" *> "$music160Out/after-state.log"
if ($LASTEXITCODE -ne 0) { throw 'Final retained-state verification failed.' }
Write-Output 'Version 1.0.60/code81 APK and complete source frozen and verified locally.'
