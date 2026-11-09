$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music152Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release152'
$music152Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music152Files = @(Get-Content -LiteralPath "$music152Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music152Flutter --no-version-check test --no-pub --flavor beta @music152Files --concurrency=2 --machine *> "$music152Out/beta-complete.jsonl"
$music152BetaExit = $LASTEXITCODE
$music152Files = @(Get-Content -LiteralPath "$music152Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music152Flutter --no-version-check test --no-pub @music152Files --concurrency=2 --machine *> "$music152Out/stable-complete.jsonl"
$music152StableExit = $LASTEXITCODE
$music152Files = @(Get-Content -LiteralPath "$music152Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music152Flutter --no-version-check test --no-pub --flavor beta @music152Files --concurrency=1 --machine *> "$music152Out/search-back-player.jsonl"
$music152NavExit = $LASTEXITCODE
& $music152Flutter --no-version-check analyze --no-pub *> "$music152Out/analyze-final.log"
$music152AnalyzeExit = $LASTEXITCODE
Write-Output "Checks ended: Beta=$music152BetaExit Stable=$music152StableExit Navigation=$music152NavExit Analysis=$music152AnalyzeExit"
