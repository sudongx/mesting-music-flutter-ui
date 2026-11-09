$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music158Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release158'
$music158Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music158Files = @(Get-Content -LiteralPath "$music158Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music158Flutter --no-version-check test --no-pub --flavor beta @music158Files --concurrency=2 --machine *> "$music158Out/beta-complete.jsonl"
$music158BetaExit = $LASTEXITCODE
$music158Files = @(Get-Content -LiteralPath "$music158Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music158Flutter --no-version-check test --no-pub @music158Files --concurrency=2 --machine *> "$music158Out/stable-complete.jsonl"
$music158StableExit = $LASTEXITCODE
$music158Files = @(Get-Content -LiteralPath "$music158Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music158Flutter --no-version-check test --no-pub --flavor beta @music158Files --concurrency=1 --machine *> "$music158Out/search-back-player.jsonl"
$music158NavExit = $LASTEXITCODE
& $music158Flutter --no-version-check analyze --no-pub *> "$music158Out/analyze-final.log"
$music158AnalyzeExit = $LASTEXITCODE
@{ beta=$music158BetaExit; stable=$music158StableExit; navigation=$music158NavExit; analysis=$music158AnalyzeExit } | ConvertTo-Json | Set-Content -LiteralPath "$music158Out/check-exits.json" -Encoding utf8
Write-Output "Checks ended: Beta=$music158BetaExit Stable=$music158StableExit Navigation=$music158NavExit Analysis=$music158AnalyzeExit"
