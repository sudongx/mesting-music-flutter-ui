$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
$out = '.codex-artifacts/2026-11-02-release142-record-duration'
$flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
# The complete Beta/Stable/navigation run passed. Preserve analysis findings;
# unused imports and test style are fixed, and complete affected workflows were
# rerun after the additional shared-queue regression was added and corrected.
Move-Item -LiteralPath "$out/analyze-complete.log" -Destination "$out/analyze-before-final-style-fixes.log"
& $flutter analyze --no-pub *> "$out/analyze-complete.log"
if ($LASTEXITCODE -ne 0) { throw 'Final static analysis failed.' }
& $flutter test --no-pub --flavor beta test/release_142_player_chrome_test.dart --dart-define=CAPTURE_V142_PLAYER=true --concurrency=1 --machine *> "$out/player-ui-capture.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Actual shell/player render failed.' }
python -X utf8 "$out/summarize_checks.py"
if ($LASTEXITCODE -ne 0) { throw 'Cannot summarize final complete-file results.' }
$checks = Get-Content -LiteralPath "$out/host-check-summary.json" -Raw | ConvertFrom-Json
if (-not $checks.analysisPassed -or -not $checks.'beta-complete.jsonl'.completeAndSuccessful -or -not $checks.'stable-complete.jsonl'.completeAndSuccessful -or -not $checks.'search-back-player.jsonl'.completeAndSuccessful) {
    throw 'All final validation must pass.'
}
