$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release167Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release167'
$release167Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release167Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release167Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $release167Files = @(Get-Content -LiteralPath "$release167Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $release167Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $release167Args += @('--flavor', 'beta') }
    $release167Run = if ($suite -eq 'beta') { 'r2' } else { 'r1' }
    & $release167Dart $release167Snapshot @release167Args @release167Files --concurrency=2 --machine *> "$release167Out/$suite-complete-$release167Run.jsonl"
    $release167Exits[$suite] = $LASTEXITCODE
    $release167Exits | ConvertTo-Json | Set-Content -LiteralPath "$release167Out/check-exits.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $release167Dart $release167Snapshot --no-version-check analyze --no-pub *> "$release167Out/analyze-final.log"
$release167Exits['analysis'] = $LASTEXITCODE
$release167Exits | ConvertTo-Json | Set-Content -LiteralPath "$release167Out/check-exits.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
