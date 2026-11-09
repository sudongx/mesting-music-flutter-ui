$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release164Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release164'
$release164Flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$release164Exit = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $release164Files = @(Get-Content -LiteralPath "$release164Out/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    if ($suite -eq 'stable') {
        & $release164Flutter --no-version-check test --no-pub @release164Files --concurrency=2 --machine *> "$release164Out/$suite-complete.jsonl"
    } else {
        & $release164Flutter --no-version-check test --no-pub --flavor beta @release164Files --concurrency=2 --machine *> "$release164Out/$suite-complete.jsonl"
    }
    $release164Exit[$suite] = $LASTEXITCODE
    $release164Exit | ConvertTo-Json | Set-Content -LiteralPath "$release164Out/check-exits.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
