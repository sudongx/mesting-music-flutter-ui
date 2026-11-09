$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music146Out = 'D:/AnLi/.codex-artifacts/2026-11-03-release146'
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub test/beta17_player_ui_test.dart test/csnas_app_update_test.dart test/music_search_ui_test.dart --concurrency=1 --machine *> "$music146Out/stable-complete.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Stable suite failed; retain the complete log.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub test/playlist_detail_ui_test.dart --machine *> "$music146Out/stable-legacy-playlist.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Stable playlist suite failed; retain the complete log.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta test/beta5_ui_test.dart --machine *> "$music146Out/search-back-player.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Navigation suite failed; retain the complete log.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' analyze --no-pub *> "$music146Out/analyze-complete.log"
if ($LASTEXITCODE -ne 0) { throw 'Static analysis failed; retain the complete log.' }