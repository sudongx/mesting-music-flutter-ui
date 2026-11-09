$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music161Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release161'
$music161Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music161Files = @(Get-Content -LiteralPath "$music161Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music161Flutter --no-version-check test --no-pub --flavor beta @music161Files --concurrency=2 --machine *> "$music161Out/beta-complete.jsonl"
$music161BetaExit = $LASTEXITCODE
$music161Files = @(Get-Content -LiteralPath "$music161Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music161Flutter --no-version-check test --no-pub @music161Files --concurrency=2 --machine *> "$music161Out/stable-complete.jsonl"
$music161StableExit = $LASTEXITCODE
$music161Files = @(Get-Content -LiteralPath "$music161Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music161Flutter --no-version-check test --no-pub --flavor beta @music161Files --concurrency=1 --machine *> "$music161Out/search-back-player.jsonl"
$music161NavExit = $LASTEXITCODE
& $music161Flutter --no-version-check test --no-pub --flavor beta "$music161Out/verify_live_prefixes.dart" --machine *> "$music161Out/actual-prefixes.jsonl"
$music161PrefixExit = $LASTEXITCODE
@{ beta=$music161BetaExit; stable=$music161StableExit; navigation=$music161NavExit; actualPrefixes=$music161PrefixExit } | ConvertTo-Json | Set-Content -LiteralPath "$music161Out/check-exits.json" -Encoding utf8
Write-Output "Checks ended: Beta=$music161BetaExit Stable=$music161StableExit Navigation=$music161NavExit Prefixes=$music161PrefixExit"
