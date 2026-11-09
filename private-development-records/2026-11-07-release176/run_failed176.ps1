$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:CI = 'true'
$checks176Out = 'D:/AnLi/.codex-artifacts/2026-11-07-release176'
$checks176Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$checks176Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$checks176Files = @(Get-Content -LiteralPath "$checks176Out/beta-replacements-r5-files.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
& $checks176Dart $checks176Snapshot --no-version-check test --no-pub --flavor beta @checks176Files --concurrency=1 --machine *> "$checks176Out/beta-replacements-r5.jsonl"
$LASTEXITCODE | Set-Content -LiteralPath "$checks176Out/beta-replacements-r5-exit.txt"
exit $LASTEXITCODE
