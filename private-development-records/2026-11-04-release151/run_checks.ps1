$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music151Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release151'
$music151Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music151Files = @(Get-Content -LiteralPath "$music151Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music151Flutter --no-version-check test --no-pub --flavor beta @music151Files --concurrency=2 --machine *> "$music151Out/beta-complete.jsonl"
$music151BetaExit = $LASTEXITCODE
$music151Files = @(Get-Content -LiteralPath "$music151Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music151Flutter --no-version-check test --no-pub @music151Files --concurrency=2 --machine *> "$music151Out/stable-complete.jsonl"
$music151StableExit = $LASTEXITCODE
$music151Files = @(Get-Content -LiteralPath "$music151Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music151Flutter --no-version-check test --no-pub --flavor beta @music151Files --concurrency=1 --machine *> "$music151Out/search-back-player.jsonl"
$music151NavExit = $LASTEXITCODE
& $music151Flutter --no-version-check analyze --no-pub *> "$music151Out/analyze-final.log"
$music151AnalyzeExit = $LASTEXITCODE
Write-Output "Checks ended: Beta=$music151BetaExit Stable=$music151StableExit Navigation=$music151NavExit Analysis=$music151AnalyzeExit"
