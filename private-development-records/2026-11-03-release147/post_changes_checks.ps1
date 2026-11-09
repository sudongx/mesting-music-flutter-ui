$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music147Out = 'D:/AnLi/.codex-artifacts/2026-11-03-release147'
$music147Cases = @(
 'test/release_107_ui_test.dart','test/release_131_refresh_test.dart',
 'test/release_147_collection_ui_test.dart','test/release_147_collection_window_test.dart',
 'test/release_147_platform_paging_test.dart','test/release_147_local_history_performance_test.dart',
 'test/release_147_footprint_ui_test.dart','test/release_147_lazy_social_ui_test.dart',
 'test/release_146_download_resume_test.dart','test/release_146_ui_test.dart',
 'test/music_home_catalogues_test.dart','test/netease_data_adapters_test.dart',
 'test/scene_catalog_contract_test.dart','test/release_124_pages_test.dart',
 'test/netease_v118_ui_test.dart','test/netease_full_ui_test.dart',
 'test/saved_messages_page_test.dart','test/chat_message_actions_test.dart',
 'test/social_repository_test.dart','test/release_145_connections_test.dart',
 'test/release_145_connections_ui_test.dart','test/beta5_ui_test.dart')
foreach ($music147Case in $music147Cases) { if (-not (Test-Path -LiteralPath $music147Case)) { throw "Missing suite: $music147Case" } }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta @music147Cases --concurrency=2 --machine *> "$music147Out/beta-final-changed-complete.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Complete changed-file regression failed; inspect retained evidence.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' analyze --no-pub *> "$music147Out/analyze-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Analysis failed.' }
