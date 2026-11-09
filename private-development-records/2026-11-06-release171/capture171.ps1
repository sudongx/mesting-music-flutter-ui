$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release171Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release171Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
& $release171Dart $release171Snapshot --no-version-check test --no-pub --flavor beta `
    --dart-define=CAPTURE_151=true `
    --dart-define=CAPTURE_151_DIR=.codex-artifacts/2026-11-06-release171/ui `
    test/music_diagnostics171_ui_test.dart --concurrency=1 --machine `
    *> '.codex-artifacts/2026-11-06-release171/ui-capture-r1.jsonl'
Write-Output "UI capture exit=$LASTEXITCODE"
if ($LASTEXITCODE -ne 0) { throw 'Inspect UI capture run' }
