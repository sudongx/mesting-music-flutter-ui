$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
$out = '.codex-artifacts/2026-11-02-release141-type51'
$flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
Move-Item -LiteralPath "$out/analyze-complete.log" -Destination "$out/analyze-before-cdn-normalization.log"
& $flutter analyze --no-pub *> "$out/analyze-complete.log"
if ($LASTEXITCODE -ne 0) { throw 'Final analysis failed.' }
Move-Item -LiteralPath "$out/type51-ui-capture.jsonl" -Destination "$out/type51-ui-tight-harness.jsonl"
& $flutter test --no-pub --flavor beta test/release_140_together_records_ui_test.dart --plain-name 'ended card opens actual report then all records without writes' --dart-define=CAPTURE_V140=true "--dart-define=RECORDS_CAPTURE_DIR=$out/ui" --concurrency=1 --machine *> "$out/type51-ui-capture.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final card/report/history render failed.' }
python -X utf8 "$out/summarize_checks.py"
if ($LASTEXITCODE -ne 0) { throw 'Cannot summarize host verification.' }
$checks = Get-Content -LiteralPath "$out/host-check-summary.json" -Raw | ConvertFrom-Json
if (-not $checks.analysisPassed -or -not $checks.'beta-complete.jsonl'.completeAndSuccessful -or -not $checks.'stable-complete.jsonl'.completeAndSuccessful -or -not $checks.'search-back-player.jsonl'.completeAndSuccessful) {
    throw 'All host validation must pass before building.'
}
& "$out/build_release.ps1"
if ($LASTEXITCODE -ne 0) { throw 'Release build failed.' }
