$ErrorActionPreference = 'Stop'
$musicFlutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
& $musicFlutter test --no-pub --flavor stable --reporter json test/csnas_app_update_test.dart test/music_search_ui_test.dart *> .codex-artifacts/2026-11-01-release132/stable-complete.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Stable checks failed' }
& $musicFlutter test --no-pub --flavor beta --reporter json test/beta5_ui_test.dart --name 'search|Android back registration|player entrance' *> .codex-artifacts/2026-11-01-release132/search-back-player.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Search/back/player checks failed' }
& $musicFlutter test --no-pub --flavor beta --reporter json test/release_132_notes_test.dart *> .codex-artifacts/2026-11-01-release132/notes-complete.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Final notes checks failed' }
Write-Output 'Stable, search/back/player and final notes checks completed.'
