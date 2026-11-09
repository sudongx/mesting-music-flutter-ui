$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release166Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release166'
$release166Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release166Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release166Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $release166Files = @(Get-Content -LiteralPath "$release166Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $release166Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $release166Args += @('--flavor', 'beta') }
    & $release166Dart $release166Snapshot @release166Args @release166Files --concurrency=2 --machine *> "$release166Out/$suite-complete-r1.jsonl"
    $release166Exits[$suite] = $LASTEXITCODE
    $release166Exits | ConvertTo-Json | Set-Content -LiteralPath "$release166Out/check-exits.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $release166Dart $release166Snapshot --no-version-check analyze --no-pub *> "$release166Out/analyze-final.log"
$release166Exits['analysis'] = $LASTEXITCODE
$release166Exits | ConvertTo-Json | Set-Content -LiteralPath "$release166Out/check-exits.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
