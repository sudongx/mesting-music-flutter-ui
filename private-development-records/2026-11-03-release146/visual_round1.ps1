$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music146Out = 'D:/AnLi/.codex-artifacts/2026-11-03-release146'
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta --dart-define=CAPTURE_146=true test/release_146_ui_test.dart --machine *> "$music146Out/visual-round1-ui-corrected.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Round 1 UI capture failed; retain evidence.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta --dart-define=CAPTURE_145_FOOTPRINT=true "$music146Out/footprint_visual_test.dart" --machine *> "$music146Out/visual-round1-footprint.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Round 1 footprint capture failed; retain evidence.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta test/release_146_download_resume_test.dart test/release_146_ui_test.dart test/netease_full_ui_test.dart test/netease_v112_fallback_download_test.dart test/release_124_pages_test.dart --concurrency=2 --machine *> "$music146Out/beta-final-changed-complete.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Complete changed-file regression failed; retain evidence.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' analyze --no-pub *> "$music146Out/analyze-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Final static analysis failed; retain evidence.' }
