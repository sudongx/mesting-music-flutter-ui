$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$music154FinalOut = 'D:/AnLi/.codex-artifacts/2026-11-05-release154'
$music154FinalFlutter = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$music154FinalFiles = @('test/release_154_storage_test.dart', 'test/release_154_network_test.dart', 'test/release_152_accounts_test.dart', 'test/release_153_storage_test.dart', 'test/release_153_network_test.dart', 'test/release_153_audio_test.dart', 'test/release_151_login_test.dart', 'test/release_153_ui_test.dart')
& $music154FinalFlutter --no-version-check test --no-pub --flavor beta @music154FinalFiles --concurrency=1 --machine --dart-define=CAPTURE_151=true --dart-define=CAPTURE_151_DIR=.codex-artifacts/2026-11-05-release154/ui-final *> "$music154FinalOut/final-regressions.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Final regression failed; inspect the retained private log.' }
& $music154FinalFlutter --no-version-check analyze --no-pub *> "$music154FinalOut/analyze-build-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Final analysis failed; inspect the retained private log.' }
Write-Output 'Final affected whole-file regressions, UI captures and analysis passed.'
