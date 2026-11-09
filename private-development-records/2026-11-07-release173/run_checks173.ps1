$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release173Out = 'D:/AnLi/.codex-artifacts/2026-11-07-release173'
$release173Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release173Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release173Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $release173Files = @(Get-Content -LiteralPath "$release173Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $release173Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $release173Args += @('--flavor', 'beta') }
    & $release173Dart $release173Snapshot @release173Args @release173Files --concurrency=2 --machine *> "$release173Out/$suite-complete-r2.jsonl"
    $release173Exits[$suite] = $LASTEXITCODE
    $release173Exits | ConvertTo-Json | Set-Content -LiteralPath "$release173Out/check-exits-r2.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $release173Dart $release173Snapshot --no-version-check analyze --no-pub *> "$release173Out/analyze-final-r3.log"
$release173Exits['analysis'] = $LASTEXITCODE
$release173Exits | ConvertTo-Json | Set-Content -LiteralPath "$release173Out/check-exits-r2.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"

