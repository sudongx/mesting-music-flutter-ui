$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release165Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release165'
$release165Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release165Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release165Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $release165Files = @(Get-Content -LiteralPath "$release165Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $release165Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $release165Args += @('--flavor', 'beta') }
    & $release165Dart $release165Snapshot @release165Args @release165Files --concurrency=2 --machine *> "$release165Out/$suite-complete-r1.jsonl"
    $release165Exits[$suite] = $LASTEXITCODE
    $release165Exits | ConvertTo-Json | Set-Content -LiteralPath "$release165Out/check-exits.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $release165Dart $release165Snapshot --no-version-check analyze --no-pub *> "$release165Out/analyze-final.log"
$release165Exits['analysis'] = $LASTEXITCODE
$release165Exits | ConvertTo-Json | Set-Content -LiteralPath "$release165Out/check-exits.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
