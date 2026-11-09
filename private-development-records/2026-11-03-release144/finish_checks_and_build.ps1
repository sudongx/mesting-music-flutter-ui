$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$out = 'D:/AnLi/.codex-artifacts/2026-11-03-release144'
$statePath = "$out/worker-state.json"
try {
  @{stage='two-test-interfaces-and-analysis'; status='running'} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
  $files = @(Get-Content -LiteralPath "$out/beta-files.json" -Raw | ConvertFrom-Json)
  $files += 'test/beta9_interactions_test.dart','test/playback_progress_thumb_test.dart'
  @($files | Sort-Object -Unique) | ConvertTo-Json | Set-Content -LiteralPath "$out/beta-files.json" -Encoding utf8
  & 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta test/beta9_interactions_test.dart test/playback_progress_thumb_test.dart --concurrency=1 --machine *> "$out/beta-affected-final.jsonl"
  if ($LASTEXITCODE -ne 0) { throw 'The two updated test interfaces failed their complete files.' }
  & 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' analyze --no-pub *> "$out/analyze-complete.log"
  if ($LASTEXITCODE -ne 0) { throw 'Final static analysis failed.' }
  python -X utf8 "$out/summarize_checks.py" *> "$out/host-check-summary.log"
  if ($LASTEXITCODE -ne 0) { throw 'Host-check summary failed.' }
  $checks = Get-Content -LiteralPath "$out/host-check-summary.json" -Raw | ConvertFrom-Json
  if (-not $checks.analysisPassed -or -not $checks.'beta-complete.jsonl'.completeAndSuccessful -or -not $checks.'stable-complete.jsonl'.completeAndSuccessful -or -not $checks.'search-back-player.jsonl'.completeAndSuccessful) { throw 'Host checks are incomplete.' }
  @{stage='release-build'; status='running'} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
  & ./.codex-artifacts/2026-11-03-release144/build_release.ps1
  @{stage='checks-and-build'; status='complete'} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
} catch {
  @{stage='checks-or-build'; status='failed'; error=$_.Exception.Message} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
  throw
}
