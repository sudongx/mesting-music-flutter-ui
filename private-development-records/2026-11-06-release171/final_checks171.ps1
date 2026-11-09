$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release171Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release171Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
& $release171Dart $release171Snapshot --no-version-check test --no-pub --flavor beta `
    test/qishui_native_audio171_test.dart test/music_diagnostics171_test.dart `
    test/music_diagnostics171_ui_test.dart test/qishui_playback170_test.dart `
    test/qishui_download_playback167_test.dart --concurrency=2 --machine `
    *> '.codex-artifacts/2026-11-06-release171/targeted-final-r2.jsonl'
Write-Output "Final whole-file recheck exit=$LASTEXITCODE"
if ($LASTEXITCODE -ne 0) { throw 'Inspect final targeted run' }
& '.codex-artifacts/2026-11-06-release171/capture171.ps1'
& $release171Dart $release171Snapshot --no-version-check analyze --no-pub `
    *> '.codex-artifacts/2026-11-06-release171/analyze-final-r2.log'
Write-Output "Final analysis exit=$LASTEXITCODE"
if ($LASTEXITCODE -ne 0) { throw 'Inspect final analysis' }
