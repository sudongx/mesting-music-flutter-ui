$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music149Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release149'
$music149Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music149Files = @(Get-Content -LiteralPath "$music149Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music149Flutter test --no-pub --flavor beta @music149Files --concurrency=2 --machine *> "$music149Out/beta-complete.jsonl"
$music149BetaExit = $LASTEXITCODE
$music149Files = @(Get-Content -LiteralPath "$music149Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music149Flutter test --no-pub @music149Files --concurrency=2 --machine *> "$music149Out/stable-complete.jsonl"
$music149StableExit = $LASTEXITCODE
$music149Files = @(Get-Content -LiteralPath "$music149Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music149Flutter test --no-pub --flavor beta @music149Files --concurrency=1 --machine *> "$music149Out/search-back-player.jsonl"
$music149NavExit = $LASTEXITCODE
& $music149Flutter analyze --no-pub *> "$music149Out/analyze-final.log"
$music149AnalyzeExit = $LASTEXITCODE
Write-Output "Checks ended: Beta=$music149BetaExit Stable=$music149StableExit Navigation=$music149NavExit Analysis=$music149AnalyzeExit"
