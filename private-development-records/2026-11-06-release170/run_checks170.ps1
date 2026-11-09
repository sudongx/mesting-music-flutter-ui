$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release170Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release170'
$release170Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release170Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release170Exits = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $release170Files = @(Get-Content -LiteralPath "$release170Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    $release170Args = @('--no-version-check', 'test', '--no-pub')
    if ($suite -ne 'stable') { $release170Args += @('--flavor', 'beta') }
    & $release170Dart $release170Snapshot @release170Args @release170Files --concurrency=2 --machine *> "$release170Out/$suite-complete-r1.jsonl"
    $release170Exits[$suite] = $LASTEXITCODE
    $release170Exits | ConvertTo-Json | Set-Content -LiteralPath "$release170Out/check-exits.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
& $release170Dart $release170Snapshot --no-version-check analyze --no-pub *> "$release170Out/analyze-final-r1.log"
$release170Exits['analysis'] = $LASTEXITCODE
$release170Exits | ConvertTo-Json | Set-Content -LiteralPath "$release170Out/check-exits.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"

