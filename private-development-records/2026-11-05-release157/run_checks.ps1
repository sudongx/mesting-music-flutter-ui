$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music157Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release157'
$music157Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music157Files = @(Get-Content -LiteralPath "$music157Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music157Flutter --no-version-check test --no-pub --flavor beta @music157Files --concurrency=2 --machine *> "$music157Out/beta-complete.jsonl"
$music157BetaExit = $LASTEXITCODE
$music157Files = @(Get-Content -LiteralPath "$music157Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music157Flutter --no-version-check test --no-pub @music157Files --concurrency=2 --machine *> "$music157Out/stable-complete.jsonl"
$music157StableExit = $LASTEXITCODE
$music157Files = @(Get-Content -LiteralPath "$music157Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music157Flutter --no-version-check test --no-pub --flavor beta @music157Files --concurrency=1 --machine *> "$music157Out/search-back-player.jsonl"
$music157NavExit = $LASTEXITCODE
& $music157Flutter --no-version-check analyze --no-pub *> "$music157Out/analyze-final.log"
$music157AnalyzeExit = $LASTEXITCODE
@{ beta=$music157BetaExit; stable=$music157StableExit; navigation=$music157NavExit; analysis=$music157AnalyzeExit } | ConvertTo-Json | Set-Content -LiteralPath "$music157Out/check-exits.json" -Encoding utf8
Write-Output "Checks ended: Beta=$music157BetaExit Stable=$music157StableExit Navigation=$music157NavExit Analysis=$music157AnalyzeExit"
