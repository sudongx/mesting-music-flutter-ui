$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music153Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release153'
$music153Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music153Files = @(Get-Content -LiteralPath "$music153Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music153Flutter --no-version-check test --no-pub --flavor beta @music153Files --concurrency=2 --machine *> "$music153Out/beta-complete.jsonl"
$music153BetaExit = $LASTEXITCODE
$music153Files = @(Get-Content -LiteralPath "$music153Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music153Flutter --no-version-check test --no-pub @music153Files --concurrency=2 --machine *> "$music153Out/stable-complete.jsonl"
$music153StableExit = $LASTEXITCODE
$music153Files = @(Get-Content -LiteralPath "$music153Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music153Flutter --no-version-check test --no-pub --flavor beta @music153Files --concurrency=1 --machine *> "$music153Out/search-back-player.jsonl"
$music153NavExit = $LASTEXITCODE
& $music153Flutter --no-version-check analyze --no-pub *> "$music153Out/analyze-final.log"
$music153AnalyzeExit = $LASTEXITCODE
Write-Output "Checks ended: Beta=$music153BetaExit Stable=$music153StableExit Navigation=$music153NavExit Analysis=$music153AnalyzeExit"

@{ beta=$music153BetaExit; stable=$music153StableExit; navigation=$music153NavExit; analysis=$music153AnalyzeExit } | ConvertTo-Json | Set-Content -LiteralPath "$music153Out/check-exits.json" -Encoding utf8
