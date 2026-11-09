$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music155Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release155'
$music155Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music155Files = @(Get-Content -LiteralPath "$music155Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music155Flutter --no-version-check test --no-pub --flavor beta @music155Files --concurrency=2 --machine *> "$music155Out/beta-complete.jsonl"
$music155BetaExit = $LASTEXITCODE
$music155Files = @(Get-Content -LiteralPath "$music155Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music155Flutter --no-version-check test --no-pub @music155Files --concurrency=2 --machine *> "$music155Out/stable-complete.jsonl"
$music155StableExit = $LASTEXITCODE
$music155Files = @(Get-Content -LiteralPath "$music155Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music155Flutter --no-version-check test --no-pub --flavor beta @music155Files --concurrency=1 --machine *> "$music155Out/search-back-player.jsonl"
$music155NavExit = $LASTEXITCODE
& $music155Flutter --no-version-check analyze --no-pub *> "$music155Out/analyze-final.log"
$music155AnalyzeExit = $LASTEXITCODE
@{ beta=$music155BetaExit; stable=$music155StableExit; navigation=$music155NavExit; analysis=$music155AnalyzeExit } | ConvertTo-Json | Set-Content -LiteralPath "$music155Out/check-exits.json" -Encoding utf8
Write-Output "Checks ended: Beta=$music155BetaExit Stable=$music155StableExit Navigation=$music155NavExit Analysis=$music155AnalyzeExit"
