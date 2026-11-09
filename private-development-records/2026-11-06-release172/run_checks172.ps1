$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release172Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release172'
$release172Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release172Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release172Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $release172Files = @(Get-Content -LiteralPath "$release172Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $release172Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $release172Args += @('--flavor', 'beta') }
    & $release172Dart $release172Snapshot @release172Args @release172Files --concurrency=2 --machine *> "$release172Out/$suite-complete-r1.jsonl"
    $release172Exits[$suite] = $LASTEXITCODE
    $release172Exits | ConvertTo-Json | Set-Content -LiteralPath "$release172Out/check-exits.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $release172Dart $release172Snapshot --no-version-check analyze --no-pub *> "$release172Out/analyze-final-r1.log"
$release172Exits['analysis'] = $LASTEXITCODE
$release172Exits | ConvertTo-Json | Set-Content -LiteralPath "$release172Out/check-exits.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"

