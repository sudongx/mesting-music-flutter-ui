$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release174Out = 'D:/AnLi/.codex-artifacts/2026-11-07-release174'
$release174Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release174Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release174Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $release174Files = @(Get-Content -LiteralPath "$release174Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $release174Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $release174Args += @('--flavor', 'beta') }
    & $release174Dart $release174Snapshot @release174Args @release174Files --concurrency=2 --machine *> "$release174Out/$suite-complete-r2.jsonl"
    $release174Exits[$suite] = $LASTEXITCODE
    $release174Exits | ConvertTo-Json | Set-Content -LiteralPath "$release174Out/check-exits-r2.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $release174Dart $release174Snapshot --no-version-check analyze --no-pub *> "$release174Out/analyze-final-r2.log"
$release174Exits['analysis'] = $LASTEXITCODE
$release174Exits | ConvertTo-Json | Set-Content -LiteralPath "$release174Out/check-exits-r2.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"

