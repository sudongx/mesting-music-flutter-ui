$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release169Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release169'
$release169Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release169Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release169Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $release169Files = @(Get-Content -LiteralPath "$release169Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $release169Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $release169Args += @('--flavor', 'beta') }
    & $release169Dart $release169Snapshot @release169Args @release169Files --concurrency=2 --machine *> "$release169Out/$suite-complete-r2.jsonl"
    $release169Exits[$suite] = $LASTEXITCODE
    $release169Exits | ConvertTo-Json | Set-Content -LiteralPath "$release169Out/check-exits.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $release169Dart $release169Snapshot --no-version-check analyze --no-pub *> "$release169Out/analyze-final-r2.log"
$release169Exits['analysis'] = $LASTEXITCODE
$release169Exits | ConvertTo-Json | Set-Content -LiteralPath "$release169Out/check-exits.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"

