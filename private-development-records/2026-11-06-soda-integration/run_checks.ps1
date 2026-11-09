$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$musicSodaOut = 'D:/AnLi/.codex-artifacts/2026-11-06-soda-integration'
$musicSodaFlutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$musicSodaExit = @{}
foreach ($suite in @('beta', 'stable', 'navigation')) {
    $musicSodaFiles = @(Get-Content -LiteralPath "$musicSodaOut/$suite-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
    if ($suite -eq 'stable') {
        & $musicSodaFlutter --no-version-check test --no-pub @musicSodaFiles --concurrency=2 --machine *> "$musicSodaOut/$suite-complete.jsonl"
    } else {
        & $musicSodaFlutter --no-version-check test --no-pub --flavor beta @musicSodaFiles --concurrency=2 --machine *> "$musicSodaOut/$suite-complete.jsonl"
    }
    $musicSodaExit[$suite] = $LASTEXITCODE
    $musicSodaExit | ConvertTo-Json | Set-Content -LiteralPath "$musicSodaOut/check-exits.json" -Encoding utf8
    Write-Output "$suite exit=$LASTEXITCODE"
}
