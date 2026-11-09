$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:CI = 'true'
$checks179Out = 'D:/AnLi/.codex-artifacts/2026-11-08-release179'
$checks179Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$checks179Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$checks179Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $checks179Files = @(Get-Content -LiteralPath "$checks179Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $checks179Args = @('--no-version-check', 'test', '--no-pub', '--flavor', $suite)
    if ($suite -eq 'navigation') { $checks179Args = @('--no-version-check', 'test', '--no-pub', '--flavor', 'beta') }
    & $checks179Dart $checks179Snapshot @checks179Args @checks179Files --concurrency=2 --machine *> "$checks179Out/$suite-complete-r1.jsonl"
    $checks179Exits[$suite] = $LASTEXITCODE
    $checks179Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks179Out/check-exits-r1.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $checks179Dart $checks179Snapshot --no-version-check analyze --no-pub *> "$checks179Out/analyze-final.log"
$checks179Exits['analysis'] = $LASTEXITCODE
$checks179Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks179Out/check-exits-r1.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
