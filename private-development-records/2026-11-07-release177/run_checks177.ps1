$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:CI = 'true'
$checks177Out = 'D:/AnLi/.codex-artifacts/2026-11-07-release177'
$checks177Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$checks177Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$checks177Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $checks177Files = @(Get-Content -LiteralPath "$checks177Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $checks177Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $checks177Args += @('--flavor', 'beta') }
    & $checks177Dart $checks177Snapshot @checks177Args @checks177Files --concurrency=2 --machine *> "$checks177Out/$suite-complete-r1.jsonl"
    $checks177Exits[$suite] = $LASTEXITCODE
    $checks177Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks177Out/check-exits-r1.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $checks177Dart $checks177Snapshot --no-version-check analyze --no-pub *> "$checks177Out/analyze-final-r1.log"
$checks177Exits['analysis'] = $LASTEXITCODE
$checks177Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks177Out/check-exits-r1.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
