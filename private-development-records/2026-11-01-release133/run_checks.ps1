$ErrorActionPreference = 'Stop'
$musicFlutter='D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$betaFiles = @(Get-Content -LiteralPath '.codex-artifacts/2026-11-01-release133/beta-files.json' -Raw | ConvertFrom-Json)
& $musicFlutter test --no-pub --flavor beta --reporter json @betaFiles *> .codex-artifacts/2026-11-01-release133/beta-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Beta checks failed' }
& $musicFlutter test --no-pub --flavor stable --reporter json test/csnas_app_update_test.dart test/music_search_ui_test.dart *> .codex-artifacts/2026-11-01-release133/stable-complete.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Stable checks failed' }
& $musicFlutter test --no-pub --flavor beta --reporter json test/beta5_ui_test.dart --name 'search|Android back registration|player entrance' *> .codex-artifacts/2026-11-01-release133/search-back-player.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Search/back/player checks failed' }
& $musicFlutter analyze --no-pub *> .codex-artifacts/2026-11-01-release133/analyze-complete.log
if ($LASTEXITCODE -ne 0) { throw 'Analysis failed' }
& $musicFlutter test --no-pub --flavor beta --dart-define=CAPTURE_133=true test/release_133_clearance_test.dart test/release_133_region_test.dart test/release_133_together_totals_test.dart *> .codex-artifacts/2026-11-01-release133/render-complete.log
if ($LASTEXITCODE -ne 0) { throw 'Rendered checks failed' }
Write-Output 'All 1.0.33 host checks completed.'
