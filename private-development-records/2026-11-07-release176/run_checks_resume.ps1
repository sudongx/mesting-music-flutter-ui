$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:CI = 'true'
$checks176Out = 'D:/AnLi/.codex-artifacts/2026-11-07-release176'
$checks176Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$checks176Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$checks176Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $checks176Plan = if ($suite -eq 'beta') {'beta-remaining-r4-files.json'} else {"$suite-files.json"}
    $checks176Files = @(Get-Content -LiteralPath "$checks176Out/$checks176Plan" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $checks176Flavor = if ($suite -eq 'stable') {'stable'} else {'beta'}
    & $checks176Dart $checks176Snapshot --no-version-check test --no-pub --flavor $checks176Flavor @checks176Files --concurrency=2 --machine *> "$checks176Out/$suite-complete-r4.jsonl"
    $checks176Exits[$suite] = $LASTEXITCODE
    $checks176Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks176Out/check-exits-r4.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $checks176Dart $checks176Snapshot --no-version-check analyze --no-pub *> "$checks176Out/analyze-final-r4.log"
$checks176Exits['analysis'] = $LASTEXITCODE
$checks176Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks176Out/check-exits-r4.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
