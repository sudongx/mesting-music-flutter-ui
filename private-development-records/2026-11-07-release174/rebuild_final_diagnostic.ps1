$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release174Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release174Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
& $release174Dart $release174Snapshot --no-version-check test --no-pub --flavor beta test/release_124_diagnostics_test.dart --machine *> '.codex-artifacts/2026-11-07-release174/diagnostic-final-r8.jsonl'
if ($LASTEXITCODE -ne 0) { throw 'Diagnostic regression failed' }
& $release174Dart $release174Snapshot --no-version-check analyze --no-pub *> '.codex-artifacts/2026-11-07-release174/analyze-final-r8.log'
if ($LASTEXITCODE -ne 0) { throw 'Analysis failed' }
& '.codex-artifacts/2026-11-07-release174/build174.ps1' *> '.codex-artifacts/2026-11-07-release174/build174-r4.log'
if ($LASTEXITCODE -ne 0) { throw 'Rebuild failed' }
Write-Output 'Final candidate compiled with deterministic Soda mine-tab entry.'
