$ErrorActionPreference = 'Stop'
$musicFlutter='D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$betaFiles = @(Get-Content -LiteralPath '.codex-artifacts/2026-11-01-release136/beta-files.json' -Raw | ConvertFrom-Json)
& $musicFlutter test --no-pub --flavor beta --concurrency=2 --reporter json @betaFiles *> .codex-artifacts/2026-11-01-release136/beta-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Beta checks failed' }
& $musicFlutter test --no-pub --flavor stable --reporter json test/csnas_app_update_test.dart test/music_search_ui_test.dart *> .codex-artifacts/2026-11-01-release136/stable-complete.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Stable checks failed' }
& $musicFlutter test --no-pub --flavor beta --reporter json test/beta5_ui_test.dart --name 'search|Android back registration|player entrance' *> .codex-artifacts/2026-11-01-release136/search-back-player.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Search/back/player checks failed' }
& $musicFlutter analyze --no-pub *> .codex-artifacts/2026-11-01-release136/analyze-complete.log
if ($LASTEXITCODE -ne 0) { throw 'Analysis failed' }
& $musicFlutter test --no-pub --flavor beta --dart-define=CAPTURE_133=true --dart-define=CAPTURE_136=true test/release_136_listening_audit_ui_test.dart *> .codex-artifacts/2026-11-01-release136/render.log
if ($LASTEXITCODE -ne 0) { throw 'Render checks failed' }
Write-Output '1.0.36 host checks completed'
