$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music148Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music148Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release148'
& 'D:/CodexCache/flutter-3.41.9/bin/dart.bat' format lib/features/music_platform/netease/netease_item_artwork.dart test/release_148_ui_test.dart
if ($LASTEXITCODE -ne 0) { throw 'Artwork formatting failed.' }
& $music148Flutter test --no-pub --flavor beta test/release_148_ui_test.dart test/release_148_data_test.dart test/netease_full_ui_test.dart --concurrency=1 --machine *> "$music148Out/artwork-empty-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Artwork-related complete-file regression failed.' }
& $music148Flutter analyze --no-pub *> "$music148Out/analyze-current.log"
if ($LASTEXITCODE -ne 0) { throw 'Final analysis failed.' }
python "$music148Out/summarize_checks.py"
if ($LASTEXITCODE -ne 0) { throw 'Evidence summary failed.' }
Write-Output 'Final artwork states and analysis passed.'
