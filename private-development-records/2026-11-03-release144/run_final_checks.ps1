$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
$out = '.codex-artifacts/2026-11-03-release144'
$flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$betaCases = @(Get-Content -LiteralPath '.codex-artifacts/2026-11-02-release143-background-ui/beta-files.json' -Raw | ConvertFrom-Json)
$betaCases += @(Get-ChildItem -LiteralPath test -Filter 'release_144_*test.dart' -File | ForEach-Object { 'test/' + $_.Name })
$betaCases += 'test/beta9_interactions_test.dart', 'test/playback_progress_thumb_test.dart'
$betaCases = @($betaCases | Sort-Object -Unique)
$betaCases | ConvertTo-Json | Set-Content -LiteralPath "$out/beta-files.json" -Encoding utf8
& $flutter test --no-pub --flavor beta @betaCases --concurrency=1 --machine *> "$out/beta-complete.jsonl"
$betaExit = $LASTEXITCODE
$stableCases = @(Get-Content -LiteralPath '.codex-artifacts/2026-11-02-v140-fixes/stable-files.json' -Raw | ConvertFrom-Json)
& $flutter test --no-pub --flavor stable @stableCases --concurrency=1 --machine *> "$out/stable-complete.jsonl"
$stableExit = $LASTEXITCODE
& $flutter test --no-pub --flavor beta test/beta5_ui_test.dart --concurrency=1 --machine *> "$out/search-back-player.jsonl"
$navExit = $LASTEXITCODE
& $flutter analyze --no-pub *> "$out/analyze-complete.log"
$analysisExit = $LASTEXITCODE
python -X utf8 "$out/summarize_checks.py"
if ($betaExit -ne 0 -or $stableExit -ne 0 -or $navExit -ne 0 -or $analysisExit -ne 0) {
  throw "Host checks need review: beta=$betaExit stable=$stableExit navigation=$navExit analysis=$analysisExit"
}
