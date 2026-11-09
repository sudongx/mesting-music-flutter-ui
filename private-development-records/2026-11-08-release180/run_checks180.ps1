$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:CI = 'true'
$checks180Out = 'D:/AnLi/.codex-artifacts/2026-11-08-release180'
$checks180Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$checks180Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$checks180Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $checks180Files = @(Get-Content -LiteralPath "$checks180Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $checks180Args = @('--no-version-check', 'test', '--no-pub', '--flavor', $suite)
    if ($suite -eq 'navigation') { $checks180Args = @('--no-version-check', 'test', '--no-pub', '--flavor', 'beta') }
    & $checks180Dart $checks180Snapshot @checks180Args @checks180Files --concurrency=2 --machine *> "$checks180Out/$suite-complete-r1.jsonl"
    $checks180Exits[$suite] = $LASTEXITCODE
    $checks180Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks180Out/check-exits-r1.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $checks180Dart $checks180Snapshot --no-version-check analyze --no-pub *> "$checks180Out/analyze-final.log"
$checks180Exits['analysis'] = $LASTEXITCODE
$checks180Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks180Out/check-exits-r1.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
