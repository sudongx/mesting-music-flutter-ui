$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
$out = '.codex-artifacts/2026-11-02-release142-record-duration'
$flutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
# Run complete related files once, including the distinction between ended
# report seconds, historical milliseconds, live totals and update-note history.
$relatedCases = @(
    'test/release_140_together_records_test.dart',
    'test/release_140_together_records_ui_test.dart',
    'test/release_141_type51_message_test.dart',
    'test/netease_message_card_test.dart',
    'test/netease_message_card_ui_test.dart',
    'test/release_127_message_test.dart',
    'test/release_126_message_protocol_test.dart',
    'test/release_134_together_history_test.dart',
    'test/release_133_together_totals_test.dart',
    'test/listen_together_test.dart',
    'test/release_132_notes_test.dart',
    'test/release_106_update_notes_test.dart',
    'test/beta_update_isolation_test.dart'
)
$relatedCases | ConvertTo-Json | Set-Content -LiteralPath "$out/beta-targeted-files.json" -Encoding utf8
& $flutter test --no-pub --flavor beta @relatedCases --concurrency=1 --machine *> "$out/beta-targeted.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Targeted complete-file regression failed.' }
& $flutter analyze --no-pub *> "$out/analyze-complete.log"
if ($LASTEXITCODE -ne 0) { throw 'Static analysis failed.' }
& $flutter test --no-pub --flavor beta test/release_140_together_records_ui_test.dart --plain-name 'report and history readable dark=true compact=false' --dart-define=CAPTURE_V140=true "--dart-define=RECORDS_CAPTURE_DIR=$out/ui" --concurrency=1 --machine *> "$out/report-ui-capture.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Corrected report/history render failed.' }
python -X utf8 "$out/summarize_checks.py"
if ($LASTEXITCODE -ne 0) { throw 'Cannot summarize host verification.' }
