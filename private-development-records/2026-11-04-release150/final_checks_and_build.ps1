$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music150Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release150'
$music150Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music150Files = @(Get-Content -LiteralPath "$music150Out/beta-files.json" -Raw | ConvertFrom-Json)
& $music150Flutter --no-version-check test --no-pub --flavor beta @music150Files --concurrency=2 --machine *> "$music150Out/final-beta-complete.jsonl"
$music150BetaExit = $LASTEXITCODE
$music150Files = @(Get-Content -LiteralPath "$music150Out/stable-files.json" -Raw | ConvertFrom-Json)
& $music150Flutter --no-version-check test --no-pub @music150Files --concurrency=2 --machine *> "$music150Out/final-stable-complete.jsonl"
$music150StableExit = $LASTEXITCODE
$music150Files = @(Get-Content -LiteralPath "$music150Out/navigation-files.json" -Raw | ConvertFrom-Json)
& $music150Flutter --no-version-check test --no-pub --flavor beta @music150Files --concurrency=1 --machine *> "$music150Out/final-search-back-player.jsonl"
$music150NavExit = $LASTEXITCODE
& $music150Flutter --no-version-check analyze --no-pub *> "$music150Out/analyze-final.log"
$music150AnalyzeExit = $LASTEXITCODE
Write-Output "Checks ended: Beta=$music150BetaExit Stable=$music150StableExit Navigation=$music150NavExit Analysis=$music150AnalyzeExit"

if ($music150BetaExit -ne 0 -or $music150StableExit -ne 0 -or $music150NavExit -ne 0 -or $music150AnalyzeExit -ne 0) { throw 'Final validation failed; retained logs require inspection.' }
python .codex-artifacts/2026-11-04-release150/record_build_inputs.py
if ($LASTEXITCODE -ne 0) { throw 'Build input snapshot failed.' }
& ./.codex-artifacts/2026-11-04-release150/build.ps1
