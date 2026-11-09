$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release174Out = 'D:/AnLi/.codex-artifacts/2026-11-07-release174'
$release174Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release174Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
& $release174Dart $release174Snapshot --no-version-check test --no-pub --flavor beta test/release_126_browse_cache_test.dart test/release_126_cache_integration_test.dart --machine *> "$release174Out/cache-final-r4.jsonl"
$release174TestsExit = $LASTEXITCODE
& $release174Dart $release174Snapshot --no-version-check analyze --no-pub *> "$release174Out/analyze-final-r4.log"
@{ tests = $release174TestsExit; analysis = $LASTEXITCODE } | ConvertTo-Json | Set-Content -LiteralPath "$release174Out/check-exits-r4.json" -Encoding utf8
Write-Output "tests exit=$release174TestsExit analysis exit=$LASTEXITCODE"
