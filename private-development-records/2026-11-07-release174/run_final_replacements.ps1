$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release174Out = 'D:/AnLi/.codex-artifacts/2026-11-07-release174'
$release174Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release174Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release174Files = @(
  'test/qishui_ui_test.dart', 'test/release_124_diagnostics_test.dart',
  'test/qishui_cache174_test.dart', 'test/performance174_cache_test.dart',
  'test/performance174_shared_ui_test.dart', 'test/qishui_playlist174_test.dart',
  'test/release_126_browse_cache_test.dart', 'test/persistent_network_image_cache_test.dart'
)
& $release174Dart $release174Snapshot --no-version-check test --no-pub --flavor beta @release174Files --concurrency=2 --machine *> "$release174Out/final-replacements-r3.jsonl"
$release174TestsExit = $LASTEXITCODE
Write-Output "replacement tests exit=$release174TestsExit"
& $release174Dart $release174Snapshot --no-version-check test --no-pub --flavor beta test/qishui_capture173_ui_test.dart --dart-define=CAPTURE_173=true --dart-define=UI_CAPTURE_173_DIR=.codex-artifacts/2026-11-07-release174/ui --concurrency=1 --machine *> "$release174Out/ui-capture-r3.jsonl"
$release174CaptureExit = $LASTEXITCODE
Write-Output "capture exit=$release174CaptureExit"
& $release174Dart $release174Snapshot --no-version-check analyze --no-pub *> "$release174Out/analyze-final-r3.log"
@{ tests = $release174TestsExit; capture = $release174CaptureExit; analysis = $LASTEXITCODE } | ConvertTo-Json | Set-Content -LiteralPath "$release174Out/check-exits-r3.json" -Encoding utf8
Write-Output "analysis exit=$LASTEXITCODE"
