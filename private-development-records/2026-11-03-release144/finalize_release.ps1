$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$out = 'D:/AnLi/.codex-artifacts/2026-11-03-release144'
$statePath = "$out/finalization-state.json"
try {
  $workerState = Get-Content -LiteralPath "$out/worker-state.json" -Raw | ConvertFrom-Json
  if ($workerState.status -ne 'complete') { throw 'Complete host checks and build are required.' }
  @{stage='sign-and-verify'; status='running'} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
  python -X utf8 "$out/sign_and_verify.py" *> "$out/sign-and-verify-final.log"
  if ($LASTEXITCODE -ne 0) { throw 'APK signing/verification failed; retained candidate requires review.' }
  & 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta "$out/verify_local_notes.dart" --machine *> "$out/local-apk-notes-test.jsonl"
  if ($LASTEXITCODE -ne 0) { throw 'Actual local APK release notes failed.' }
  python -X utf8 "$out/write_delivery_docs.py" *> "$out/write-delivery-docs.log"
  if ($LASTEXITCODE -ne 0) { throw 'Delivery documentation gate failed.' }
  @{stage='source-freeze'; status='running'} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
  python -X utf8 "$out/freeze_source.py" *> "$out/freeze-source.log"
  if ($LASTEXITCODE -ne 0) { throw 'Source freeze failed.' }
  python -X utf8 "$out/finish_artifacts.py" *> "$out/final-readback.log"
  if ($LASTEXITCODE -ne 0) { throw 'Final preservation/readback failed.' }
  @{stage='local-delivery'; status='complete'} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
} catch {
  @{stage='finalization'; status='failed'; error=$_.Exception.Message} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
  throw
}
