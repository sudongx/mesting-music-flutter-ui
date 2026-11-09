$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music159Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release159'
$music159Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music159Files = @(Get-Content -LiteralPath "$music159Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music159Flutter --no-version-check test --no-pub --flavor beta @music159Files --concurrency=2 --machine *> "$music159Out/beta-complete.jsonl"
$music159BetaExit = $LASTEXITCODE
$music159Files = @(Get-Content -LiteralPath "$music159Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music159Flutter --no-version-check test --no-pub @music159Files --concurrency=2 --machine *> "$music159Out/stable-complete.jsonl"
$music159StableExit = $LASTEXITCODE
$music159Files = @(Get-Content -LiteralPath "$music159Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music159Flutter --no-version-check test --no-pub --flavor beta @music159Files --concurrency=1 --machine *> "$music159Out/search-back-player.jsonl"
$music159NavExit = $LASTEXITCODE
& $music159Flutter --no-version-check analyze --no-pub *> "$music159Out/analyze-final.log"
$music159AnalyzeExit = $LASTEXITCODE
@{ beta=$music159BetaExit; stable=$music159StableExit; navigation=$music159NavExit; analysis=$music159AnalyzeExit } | ConvertTo-Json | Set-Content -LiteralPath "$music159Out/check-exits.json" -Encoding utf8
Write-Output "Checks ended: Beta=$music159BetaExit Stable=$music159StableExit Navigation=$music159NavExit Analysis=$music159AnalyzeExit"
