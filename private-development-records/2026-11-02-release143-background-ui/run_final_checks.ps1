$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
$out = '.codex-artifacts/2026-11-02-release143-background-ui'
$flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$betaCases = @(Get-Content -LiteralPath '.codex-artifacts/2026-11-02-release142-record-duration/beta-files.json' -Raw | ConvertFrom-Json)
$betaCases += 'test/release_143_ui_test.dart', 'test/release_143_background_sync_test.dart'
$betaCases = @($betaCases | Sort-Object -Unique)
$betaCases | ConvertTo-Json | Set-Content -LiteralPath "$out/beta-files.json" -Encoding utf8
& $flutter test --no-pub --flavor beta @betaCases --concurrency=1 --machine *> "$out/beta-complete.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Complete Beta regression failed.' }
$stableCases = @(Get-Content -LiteralPath '.codex-artifacts/2026-11-02-v140-fixes/stable-files.json' -Raw | ConvertFrom-Json)
& $flutter test --no-pub --flavor stable @stableCases --concurrency=1 --machine *> "$out/stable-complete.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Stable regression failed.' }
& $flutter test --no-pub --flavor beta test/beta5_ui_test.dart --name 'search|Android back|player' --concurrency=1 --machine *> "$out/search-back-player.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Navigation/player regression failed.' }
& $flutter analyze --no-pub *> "$out/analyze-complete.log"
if ($LASTEXITCODE -ne 0) { throw 'Final analysis failed.' }
& $flutter test --no-pub --flavor beta test/release_143_ui_test.dart --dart-define=CAPTURE_143=true --concurrency=1 --machine *> "$out/ui-capture-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Actual shell/player render regression failed.' }
python -X utf8 "$out/summarize_checks.py"
if ($LASTEXITCODE -ne 0) { throw 'Cannot summarize final checks.' }
$checks = Get-Content -LiteralPath "$out/host-check-summary.json" -Raw | ConvertFrom-Json
if (-not $checks.analysisPassed -or -not $checks.'beta-complete.jsonl'.completeAndSuccessful -or -not $checks.'stable-complete.jsonl'.completeAndSuccessful -or -not $checks.'search-back-player.jsonl'.completeAndSuccessful) {
    throw 'All final host validation must pass.'
}
