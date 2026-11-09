$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music159Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release159'
python "$music159Out/sign_and_verify159.py" *> "$music159Out/sign-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Actual APK signing/verification failed; inspect private log.' }
python "$music159Out/verify_native_packaging159.py" *> "$music159Out/native-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Actual native packaging verification failed.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' --no-version-check test --no-pub --flavor beta "$music159Out/verify_local_notes159.dart" --concurrency=1 --machine *> "$music159Out/local-apk-notes-test.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Production APK notes reader verification failed.' }
python "$music159Out/finalize_delivery159.py" *> "$music159Out/final-docs.log"
if ($LASTEXITCODE -ne 0) { throw 'Final documentation/preservation audit failed.' }
python "$music159Out/freeze_source159.py" *> "$music159Out/freeze-source.log"
if ($LASTEXITCODE -ne 0) { throw 'Complete source freeze failed.' }
python "$music159Out/record_final_state159.py" *> "$music159Out/after-state.log"
if ($LASTEXITCODE -ne 0) { throw 'Final retained-state verification failed.' }
Write-Output 'Version 1.0.59/code80 APK and complete source frozen and verified locally.'
