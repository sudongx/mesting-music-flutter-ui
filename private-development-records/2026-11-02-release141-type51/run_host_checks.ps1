$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
$out = '.codex-artifacts/2026-11-02-release141-type51'
$flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
# The earlier run mixed the two channels. Preserve that stopped run as evidence;
# use the established per-channel inventories for every complete final result.
Rename-Item -LiteralPath "$out/beta-complete.jsonl" -NewName 'channel-mixed-aborted.jsonl'
$betaCases = @(Get-Content -LiteralPath '.codex-artifacts/2026-11-02-v140-fixes/beta-files.json' -Raw | ConvertFrom-Json)
$betaCases += 'test/release_141_type51_message_test.dart'
$betaCases = @($betaCases | Sort-Object -Unique)
$betaCases | ConvertTo-Json | Set-Content -LiteralPath "$out/beta-files.json" -Encoding utf8
& $flutter test --no-pub --flavor beta @betaCases --concurrency=1 --machine *> "$out/beta-complete.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Beta regression failed; retain the complete log.' }

$stableCases = @(Get-Content -LiteralPath '.codex-artifacts/2026-11-02-v140-fixes/stable-files.json' -Raw | ConvertFrom-Json)
& $flutter test --no-pub --flavor stable @stableCases --concurrency=1 --machine *> "$out/stable-complete.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Stable regression failed; retain the complete log.' }

$previous = Get-Content -LiteralPath '.codex-artifacts/2026-11-02-v140-fixes/host-check-summary.json' -Raw | ConvertFrom-Json
$navigationCases = @($previous.'search-back-player.jsonl'.perFile.psobject.Properties.Name)
& $flutter test --no-pub --flavor beta @navigationCases --name 'search|Android back|player' --concurrency=1 --machine *> "$out/search-back-player.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Search/back/player regression failed.' }

& $flutter analyze --no-pub *> "$out/analyze-complete.log"
if ($LASTEXITCODE -ne 0) { throw 'Static analysis failed.' }

& $flutter test --no-pub --flavor beta test/release_140_together_records_ui_test.dart --plain-name 'ended card opens actual report then all records without writes' --dart-define=CAPTURE_V140=true "--dart-define=RECORDS_CAPTURE_DIR=$out/ui" --concurrency=1 --machine *> "$out/type51-ui-capture.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Type51 card/report/history render regression failed.' }
python -X utf8 "$out/summarize_checks.py"
if ($LASTEXITCODE -ne 0) { throw 'Cannot summarize complete host checks.' }
