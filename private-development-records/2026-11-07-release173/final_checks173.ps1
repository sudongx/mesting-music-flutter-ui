$ErrorActionPreference='Stop'
Set-Location -LiteralPath 'D:/AnLi'
$taskDart='D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$taskSnapshot='D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$taskOut='D:/AnLi/.codex-artifacts/2026-11-07-release173'
$taskFiles=@('test/qishui_api173_test.dart','test/qishui_capture173_ui_test.dart','test/qishui_history173_test.dart','test/qishui_player173_ui_test.dart','test/qishui_media173_test.dart','test/qishui_cover173_test.dart','test/qishui_recovery172_test.dart','test/qishui_native_audio171_test.dart','test/qishui_signed_api167_test.dart','test/qishui_appearance172_ui_test.dart')
& $taskDart $taskSnapshot --no-version-check test --no-pub --flavor beta @taskFiles --concurrency=2 --machine *> "$taskOut/final-changed-files.jsonl"
Write-Output "Final changed files exit=$LASTEXITCODE"
if ($LASTEXITCODE -ne 0) { throw 'Final changed-file regression failed' }
& $taskDart $taskSnapshot --no-version-check test --no-pub --flavor beta --dart-define=CAPTURE_173=true test/qishui_capture173_ui_test.dart --concurrency=1 --machine *> "$taskOut/ui-capture.jsonl"
Write-Output "Capture exit=$LASTEXITCODE"
if ($LASTEXITCODE -ne 0) { throw 'Capture failed' }
& $taskDart $taskSnapshot --no-version-check analyze --no-pub *> "$taskOut/analyze-final.log"
Write-Output "Analysis exit=$LASTEXITCODE"
if ($LASTEXITCODE -ne 0) { Get-Content -LiteralPath "$taskOut/analyze-final.log" -Tail 35; throw 'Analysis failed' }
