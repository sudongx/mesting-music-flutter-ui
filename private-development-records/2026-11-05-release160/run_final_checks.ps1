$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music160Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release160'
$music160Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music160Files = @('test/release_159_reward_repository_test.dart','test/release_159_reward_controller_test.dart','test/release_160_reward_diagnostics_test.dart','test/release_160_reward_request_stages_test.dart','test/release_160_reward_repository_test.dart','test/release_160_free_listen_entry_test.dart')
& $music160Flutter --no-version-check test --no-pub --flavor beta @music160Files --concurrency=2 --machine *> "$music160Out/final-regressions.jsonl"
$music160TestsExit=$LASTEXITCODE
$music160Files = @(Get-Content -LiteralPath "$music160Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music160Flutter --no-version-check test --no-pub @music160Files --concurrency=2 --machine *> "$music160Out/stable-final.jsonl"
$music160StableExit=$LASTEXITCODE
$music160Files = @(Get-Content -LiteralPath "$music160Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music160Flutter --no-version-check test --no-pub --flavor beta @music160Files --concurrency=1 --machine *> "$music160Out/search-back-player-final.jsonl"
$music160NavExit=$LASTEXITCODE
& $music160Flutter --no-version-check analyze --no-pub *> "$music160Out/analyze-final.log"
$music160AnalyzeExit=$LASTEXITCODE
@{ regressions=$music160TestsExit; stable=$music160StableExit; navigation=$music160NavExit; analysis=$music160AnalyzeExit } | ConvertTo-Json | Set-Content -LiteralPath "$music160Out/final-check-exits.json" -Encoding utf8
Write-Output "Final checks: tests=$music160TestsExit stable=$music160StableExit navigation=$music160NavExit analysis=$music160AnalyzeExit"
