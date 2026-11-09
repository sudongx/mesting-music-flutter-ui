$ErrorActionPreference='Stop'
$musicFlutter='D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
& $musicFlutter test --no-pub --flavor beta --reporter json test/beta5_ui_test.dart --name 'search|Android back registration|player entrance' *> .codex-artifacts/2026-11-01-release133/search-back-player-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Search/back/player failed' }
& $musicFlutter analyze --no-pub *> .codex-artifacts/2026-11-01-release133/analyze-complete.log
if ($LASTEXITCODE -ne 0) { throw 'Analysis failed' }
& $musicFlutter test --no-pub --flavor beta --dart-define=CAPTURE_133=true test/release_133_clearance_test.dart test/release_133_region_test.dart *> .codex-artifacts/2026-11-01-release133/render-complete.log
if ($LASTEXITCODE -ne 0) { throw 'Rendered checks failed' }
& $musicFlutter test --no-pub --flavor stable --reporter json test/release_133_clearance_test.dart --name 'music padding' *> .codex-artifacts/2026-11-01-release133/stable-padding.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Stable spacing failed' }
