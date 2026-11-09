$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music154Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release154'
$music154Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music154Files = @(Get-Content -LiteralPath "$music154Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music154Flutter --no-version-check test --no-pub --flavor beta @music154Files --concurrency=2 --machine *> "$music154Out/beta-complete.jsonl"
$music154BetaExit = $LASTEXITCODE
$music154Files = @(Get-Content -LiteralPath "$music154Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music154Flutter --no-version-check test --no-pub @music154Files --concurrency=2 --machine *> "$music154Out/stable-complete.jsonl"
$music154StableExit = $LASTEXITCODE
$music154Files = @(Get-Content -LiteralPath "$music154Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music154Flutter --no-version-check test --no-pub --flavor beta @music154Files --concurrency=1 --machine *> "$music154Out/search-back-player.jsonl"
$music154NavExit = $LASTEXITCODE
& $music154Flutter --no-version-check analyze --no-pub *> "$music154Out/analyze-final.log"
$music154AnalyzeExit = $LASTEXITCODE
Write-Output "Checks ended: Beta=$music154BetaExit Stable=$music154StableExit Navigation=$music154NavExit Analysis=$music154AnalyzeExit"

@{ beta=$music154BetaExit; stable=$music154StableExit; navigation=$music154NavExit; analysis=$music154AnalyzeExit } | ConvertTo-Json | Set-Content -LiteralPath "$music154Out/check-exits.json" -Encoding utf8
