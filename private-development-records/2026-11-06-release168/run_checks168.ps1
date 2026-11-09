$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release168Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release168'
$release168Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release168Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release168Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $release168Files = @(Get-Content -LiteralPath "$release168Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $release168Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $release168Args += @('--flavor', 'beta') }
    & $release168Dart $release168Snapshot @release168Args @release168Files --concurrency=2 --machine *> "$release168Out/$suite-complete-r2.jsonl"
    $release168Exits[$suite] = $LASTEXITCODE
    $release168Exits | ConvertTo-Json | Set-Content -LiteralPath "$release168Out/check-exits.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $release168Dart $release168Snapshot --no-version-check analyze --no-pub *> "$release168Out/analyze-final-r2.log"
$release168Exits['analysis'] = $LASTEXITCODE
$release168Exits | ConvertTo-Json | Set-Content -LiteralPath "$release168Out/check-exits.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
