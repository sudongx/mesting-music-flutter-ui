$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:CI = 'true'
$complete181Out = 'D:/AnLi/.codex-artifacts/2026-11-09-release181'
$complete181Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$complete181Snapshot = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$complete181Exits = Get-Content -LiteralPath "$complete181Out/check-exits-r1.json" -Raw -Encoding UTF8 | ConvertFrom-Json
foreach ($suite in @('beta', 'stable', 'navigation', 'analysis')) {
    if ($complete181Exits.$suite -ne 0) { throw "Fresh $suite checks did not pass" }
}
# Replace both affected complete file results after the identity correction;
# no targeted counts or failed exploratory attempts are added to suite totals.
& $complete181Dart $complete181Snapshot --no-version-check test --no-pub --flavor beta test/netease_ad_probe181_test.dart test/netease_ad_probe181_ui_test.dart --concurrency=2 --machine *> "$complete181Out/test181-complete-r4.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Complete affected probe files failed' }
python -B "$complete181Out/summarize181.py"
if ($LASTEXITCODE -ne 0) { throw 'Host result normalization failed' }
python -B "$complete181Out/verify181.py" source-check
if ($LASTEXITCODE -ne 0) { throw 'Approved source scope drifted' }
& "$complete181Out/build_candidate181.ps1" *> "$complete181Out/build-candidate1.log"
if ($LASTEXITCODE -ne 0) { throw 'Build/sign/check failed' }
Write-Output 'Complete checks and original-signature candidate ready; final packaging remains'
