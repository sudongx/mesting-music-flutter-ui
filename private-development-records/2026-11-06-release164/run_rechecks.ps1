$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$recheck164Out = 'D:/AnLi/.codex-artifacts/2026-11-06-release164'
$recheck164Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$recheck164Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$recheck164Files = @(Get-Content -LiteralPath "$recheck164Out/recheck-files-current.json" -Raw -Encoding UTF8 | ConvertFrom-Json)
$recheck164Files += @('test/qishui_qr_protocol_test.dart', 'test/qishui_qr_ui_test.dart', 'test/qishui_ui_test.dart')
$recheck164Files = @($recheck164Files | Select-Object -Unique)
$recheck164Files | ConvertTo-Json | Set-Content -LiteralPath "$recheck164Out/rechecked-files.json" -Encoding utf8
& $recheck164Dart $recheck164Snapshot --no-version-check test --no-pub --flavor beta @recheck164Files --concurrency=2 --machine --dart-define=CAPTURE_QR164=true --dart-define=CAPTURE_SODA=true "--dart-define=SODA_CAPTURE_DIR=$recheck164Out/ui-phone-and-baseline" *> "$recheck164Out/rechecks-complete.jsonl"
$recheck164Exit = $LASTEXITCODE
Write-Output "rechecks exit=$recheck164Exit"
@{ exit = $recheck164Exit } | ConvertTo-Json | Set-Content -LiteralPath "$recheck164Out/rechecks-exit.json" -Encoding utf8
