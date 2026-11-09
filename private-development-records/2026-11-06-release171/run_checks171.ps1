$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release171Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release171'
$release171Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release171Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release171Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $release171Files = @(Get-Content -LiteralPath "$release171Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $release171Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $release171Args += @('--flavor', 'beta') }
    & $release171Dart $release171Snapshot @release171Args @release171Files --concurrency=2 --machine *> "$release171Out/$suite-complete-r1.jsonl"
    $release171Exits[$suite] = $LASTEXITCODE
    $release171Exits | ConvertTo-Json | Set-Content -LiteralPath "$release171Out/check-exits.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $release171Dart $release171Snapshot --no-version-check analyze --no-pub *> "$release171Out/analyze-final-r1.log"
$release171Exits['analysis'] = $LASTEXITCODE
$release171Exits | ConvertTo-Json | Set-Content -LiteralPath "$release171Out/check-exits.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"

