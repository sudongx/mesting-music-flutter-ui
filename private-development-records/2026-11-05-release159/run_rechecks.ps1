$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music159Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music159Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release159'
$music159Files = @('test/release_133_clearance_test.dart','test/release_142_player_chrome_test.dart','test/release_143_ui_test.dart','test/release_159_play_ui_test.dart','test/release_159_reward_controller_test.dart','test/release_159_reward_repository_test.dart','test/release_159_reward_ui_test.dart','test/release_157_ui_test.dart','test/release_158_ui_test.dart')
& $music159Flutter --no-version-check test --no-pub --flavor beta @music159Files --concurrency=2 --machine *> "$music159Out/final-regressions.jsonl"
$music159TestExit=$LASTEXITCODE
& $music159Flutter --no-version-check test --no-pub --flavor beta test/release_159_reward_ui_test.dart --concurrency=1 --machine --dart-define=CAPTURE_151=true "--dart-define=CAPTURE_151_DIR=$music159Out/ui-reward-delivery" *> "$music159Out/reward-render-final.jsonl"
$music159RenderExit=$LASTEXITCODE
& $music159Flutter --no-version-check test --no-pub --flavor beta test/beta5_ui_test.dart --concurrency=1 --machine *> "$music159Out/search-back-player-final.jsonl"
$music159NavigationExit=$LASTEXITCODE
& $music159Flutter --no-version-check analyze --no-pub *> "$music159Out/analyze-delivery.log"
$music159AnalyzeExit=$LASTEXITCODE
@{ tests=$music159TestExit; render=$music159RenderExit; navigation=$music159NavigationExit; analysis=$music159AnalyzeExit } | ConvertTo-Json | Set-Content -LiteralPath "$music159Out/delivery-check-exits.json" -Encoding utf8
Write-Output "Rechecks finished: tests=$music159TestExit navigation=$music159NavigationExit analysis=$music159AnalyzeExit"
