$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release164Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release164'
# Bypass cmd.exe's 8191-character batch-file limit for the full file list.
$release164Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release164Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release164Files = @(Get-Content -LiteralPath "$release164Out/beta-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
& $release164Dart $release164Snapshot --no-version-check test --no-pub --flavor beta @release164Files --concurrency=2 --machine *> "$release164Out/beta-complete-r2.jsonl"
$release164Result = $LASTEXITCODE
Write-Output "beta r2 exit=$release164Result"
@{ exit = $release164Result } | ConvertTo-Json | Set-Content -LiteralPath "$release164Out/beta-r2-exit.json" -Encoding utf8
