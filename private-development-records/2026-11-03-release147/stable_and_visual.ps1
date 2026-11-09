$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music147Out = 'D:/AnLi/.codex-artifacts/2026-11-03-release147'
$music147Stable = @('test/beta17_player_ui_test.dart','test/csnas_app_update_test.dart','test/music_search_ui_test.dart','test/chat_page_test.dart')
foreach ($music147File in $music147Stable) { if (-not (Test-Path -LiteralPath $music147File)) { throw "Missing test: $music147File" } }
& 'D:/CodexCache/flutter-3.41.9/bin/dart.bat' format lib/features/music_platform/presentation/platform_recommendations_page.dart test/release_147_collection_ui_test.dart test/chat_page_test.dart *> "$music147Out/format-previsual.log"
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub @music147Stable --concurrency=1 --machine *> "$music147Out/stable-final-ready.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Stable complete-file regression failed.' }
$music147Visual = @('test/release_146_ui_test.dart','test/release_147_collection_ui_test.dart','test/release_147_footprint_ui_test.dart')
foreach ($music147File in $music147Visual) { if (-not (Test-Path -LiteralPath $music147File)) { throw "Missing test: $music147File" } }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta --dart-define=CAPTURE_146=true --dart-define=CAPTURE_146_DIR=.codex-artifacts/2026-11-03-release147/ui-round1 @music147Visual --concurrency=1 --machine *> "$music147Out/visual-round1.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Visual round one found a defect; retain this pass and fix in one batch.' }
