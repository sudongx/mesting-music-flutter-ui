$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$checks175Out = 'D:/AnLi/.codex-artifacts/2026-11-07-release175'
$checks175Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$checks175Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$checks175Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $checks175Files = @(Get-Content -LiteralPath "$checks175Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $checks175Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $checks175Args += @('--flavor', 'beta') }
    & $checks175Dart $checks175Snapshot @checks175Args @checks175Files --concurrency=2 --machine *> "$checks175Out/$suite-complete-r1.jsonl"
    $checks175Exits[$suite] = $LASTEXITCODE
    $checks175Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks175Out/check-exits-r1.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $checks175Dart $checks175Snapshot --no-version-check analyze --no-pub *> "$checks175Out/analyze-final-r1.log"
$checks175Exits['analysis'] = $LASTEXITCODE
$checks175Exits | ConvertTo-Json | Set-Content -LiteralPath "$checks175Out/check-exits-r1.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
