$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
$out = '.codex-artifacts/2026-11-02-release141-type51'
$flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
Rename-Item -LiteralPath "$out/analyze-complete.log" -NewName 'analyze-before-braces.log'
& 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe' format lib/features/music_platform/netease/messages/netease_message_card.dart
if ($LASTEXITCODE -ne 0) { throw 'Cannot format the message parser.' }
# Final complete affected files replace their earlier full-suite entries. The
# only post-suite parser edit adds required braces and canonicalizes a constant.
$affectedCases = @('test/release_141_type51_message_test.dart',
    'test/netease_message_card_test.dart', 'test/netease_message_card_ui_test.dart',
    'test/release_127_message_test.dart', 'test/release_126_message_protocol_test.dart',
    'test/release_140_together_records_test.dart', 'test/release_140_together_records_ui_test.dart')
& $flutter test --no-pub --flavor beta @affectedCases --concurrency=1 --machine *> "$out/beta-affected-final.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final complete affected regression failed.' }
& $flutter analyze --no-pub *> "$out/analyze-complete.log"
if ($LASTEXITCODE -ne 0) { throw 'Final static analysis failed.' }
& $flutter test --no-pub --flavor beta test/release_140_together_records_ui_test.dart --plain-name 'ended card opens actual report then all records without writes' --dart-define=CAPTURE_V140=true "--dart-define=RECORDS_CAPTURE_DIR=$out/ui" --concurrency=1 --machine *> "$out/type51-ui-capture.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Type51 card/report/history render regression failed.' }
python -X utf8 "$out/summarize_checks.py"
if ($LASTEXITCODE -ne 0) { throw 'Cannot summarize complete host checks.' }
