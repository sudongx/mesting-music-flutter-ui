$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music148Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release148'
$music148Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
& 'D:/CodexCache/flutter-3.41.9/bin/dart.bat' fix --apply --code=curly_braces_in_flow_control_structures --code=unused_import --code=unnecessary_import *> "$music148Out/lint-final.log"
$music148Files = @(Get-Content -LiteralPath "$music148Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music148Flutter test --no-pub --flavor beta @music148Files --concurrency=2 --machine *> "$music148Out/beta-complete.jsonl"
$music148BetaExit = $LASTEXITCODE
$music148Files = @(Get-Content -LiteralPath "$music148Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music148Flutter test --no-pub @music148Files --concurrency=2 --machine *> "$music148Out/stable-complete.jsonl"
$music148StableExit = $LASTEXITCODE
$music148Files = @(Get-Content -LiteralPath "$music148Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music148Flutter test --no-pub --flavor beta @music148Files --concurrency=1 --machine *> "$music148Out/search-back-player.jsonl"
$music148NavExit = $LASTEXITCODE
& $music148Flutter analyze --no-pub *> "$music148Out/analyze-final.log"
$music148AnalyzeExit = $LASTEXITCODE
Write-Output "Checks ended: Beta=$music148BetaExit Stable=$music148StableExit Navigation=$music148NavExit Analysis=$music148AnalyzeExit"
