$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music160Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release160'
$music160Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music160Files = @(Get-Content -LiteralPath "$music160Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music160Flutter --no-version-check test --no-pub --flavor beta @music160Files --concurrency=2 --machine *> "$music160Out/beta-complete.jsonl"
$music160BetaExit = $LASTEXITCODE
$music160Files = @(Get-Content -LiteralPath "$music160Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music160Flutter --no-version-check test --no-pub @music160Files --concurrency=2 --machine *> "$music160Out/stable-complete.jsonl"
$music160StableExit = $LASTEXITCODE
$music160Files = @(Get-Content -LiteralPath "$music160Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music160Flutter --no-version-check test --no-pub --flavor beta @music160Files --concurrency=1 --machine *> "$music160Out/search-back-player.jsonl"
$music160NavExit = $LASTEXITCODE
& $music160Flutter --no-version-check analyze --no-pub *> "$music160Out/analyze-final.log"
$music160AnalyzeExit = $LASTEXITCODE
@{ beta=$music160BetaExit; stable=$music160StableExit; navigation=$music160NavExit; analysis=$music160AnalyzeExit } | ConvertTo-Json | Set-Content -LiteralPath "$music160Out/check-exits.json" -Encoding utf8
Write-Output "Checks ended: Beta=$music160BetaExit Stable=$music160StableExit Navigation=$music160NavExit Analysis=$music160AnalyzeExit"
