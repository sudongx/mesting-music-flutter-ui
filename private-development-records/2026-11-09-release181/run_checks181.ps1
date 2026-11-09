$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:CI = 'true'
$checks181Out = 'D:/AnLi/.codex-artifacts/2026-11-09-release181'
$checks181Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$checks181Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$checks181Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $checks181Files = @(Get-Content -LiteralPath "$checks181Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $checks181Args = @('--no-version-check', 'test', '--no-pub', '--flavor', $suite)
    if ($suite -eq 'navigation') { $checks181Args = @('--no-version-check', 'test', '--no-pub', '--flavor', 'beta') }
    & $checks181Dart $checks181Snapshot @checks181Args @checks181Files --concurrency=2 --machine *> "$checks181Out/$suite-complete-r1.jsonl"
    $checks181Exits[$suite] = $LASTEXITCODE
    $checks181Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks181Out/check-exits-r1.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $checks181Dart $checks181Snapshot --no-version-check analyze --no-pub *> "$checks181Out/analyze-final.log"
$checks181Exits['analysis'] = $LASTEXITCODE
$checks181Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks181Out/check-exits-r1.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
