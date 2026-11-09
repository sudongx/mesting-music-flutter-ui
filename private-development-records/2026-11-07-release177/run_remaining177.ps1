$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:CI = 'true'
$r177Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$r177Tool = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$r177Out = 'D:/AnLi/.codex-artifacts/2026-11-07-release177'
$r177Files = @('test/qishui_playlist_ui167_test.dart','test/qishui_ui_test.dart',
 'test/qishui_social177_ui_test.dart','test/qishui_header177_ui_test.dart',
 'test/qishui_helper177_contract_test.dart','test/qishui_listening177_binding_test.dart')
$r177Files | ConvertTo-Json | Set-Content -LiteralPath "$r177Out/replacement-files.json" -Encoding utf8
& $r177Dart $r177Tool --no-version-check test --no-pub --flavor beta @r177Files --concurrency=1 `
 --dart-define=CAPTURE_177=true --dart-define=EXPORT_177_CONTRACT=true --machine *> "$r177Out/replacement-r2.jsonl"
$r177TestExit = $LASTEXITCODE
Write-Output "replacement exit=$r177TestExit"
$r177Stable = @(Get-Content -LiteralPath "$r177Out/stable-files.json" -Raw | ConvertFrom-Json)
& $r177Dart $r177Tool --no-version-check test --no-pub --flavor stable @r177Stable --concurrency=2 --machine *> "$r177Out/stable-complete-r2.jsonl"
$r177StableExit = $LASTEXITCODE
Write-Output "stable corrected flavor exit=$r177StableExit"
& $r177Dart $r177Tool --no-version-check analyze --no-pub *> "$r177Out/analyze-final-r2.log"
$r177AnalysisExit = $LASTEXITCODE
@{replacement=$r177TestExit;stable=$r177StableExit;analysis=$r177AnalysisExit} | ConvertTo-Json | Set-Content -LiteralPath "$r177Out/replacement-exits.json" -Encoding utf8
Write-Output "analysis exit=$r177AnalysisExit"
