$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:CI = 'true'
$checks178Out = 'D:/AnLi/.codex-artifacts/2026-11-08-release178'
$checks178Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$checks178Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$checks178Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $checks178Files = @(Get-Content -LiteralPath "$checks178Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $checks178Args = @('--no-version-check', 'test', '--no-pub', '--flavor', $suite)
    if ($suite -eq 'navigation') { $checks178Args = @('--no-version-check', 'test', '--no-pub', '--flavor', 'beta') }
    & $checks178Dart $checks178Snapshot @checks178Args @checks178Files --concurrency=2 --machine *> "$checks178Out/$suite-complete-r1.jsonl"
    $checks178Exits[$suite] = $LASTEXITCODE
    $checks178Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks178Out/check-exits-r1.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $checks178Dart $checks178Snapshot --no-version-check analyze --no-pub *> "$checks178Out/analyze-final.log"
$checks178Exits['analysis'] = $LASTEXITCODE
$checks178Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks178Out/check-exits-r1.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
