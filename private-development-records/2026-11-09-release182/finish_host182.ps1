$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$env:APPDATA = 'D:/CodexCache/android-build/flutter-config'
$env:CI = 'true'
$release182Out = 'D:/AnLi/.codex-artifacts/2026-11-09-release182'
$release182Dart = 'D:/CodexCache/flutter-3.41.9/bin/cache/dart-sdk/bin/dart.exe'
$release182Flutter = 'D:/CodexCache/flutter-3.41.9/bin/cache/flutter_tools.snapshot'
$release182Checks = Get-Content -LiteralPath "$release182Out/check-exits-r1.json" -Raw | ConvertFrom-Json
foreach ($suite in @('stable', 'navigation', 'analysis')) {
    if ($null -eq $release182Checks.$suite -or $release182Checks.$suite -ne 0) {
        throw "Full $suite checks must pass before completing the affected probe files"
    }
}
if ($null -eq $release182Checks.beta -or $release182Checks.beta -notin @(0, 1)) {
    throw 'Full beta run did not finish with a supported test result'
}
& $release182Dart $release182Flutter --no-version-check test --no-pub --flavor beta test/netease_ad_probe182_test.dart test/netease_ad_probe181_test.dart test/netease_ad_probe181_ui_test.dart --concurrency=2 --machine *> "$release182Out/probe-complete-r2.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Complete final probe files failed; no build started' }
& $release182Dart $release182Flutter --no-version-check test --no-pub --flavor beta test/netease_v120_ui_test.dart --concurrency=1 --machine *> "$release182Out/cache-file-complete-r2.jsonl"
if ($LASTEXITCODE -ne 0) { throw 'Unmodified cached-image regression still fails; no build started' }
python -B "$release182Out/summarize182.py"
if ($LASTEXITCODE -ne 0) { throw 'Host summary failed; no build started' }
python -B "$release182Out/verify182.py" source-check
if ($LASTEXITCODE -ne 0) { throw 'Approved source scope changed; no build started' }
& "$release182Out/build_candidate182.ps1" *> "$release182Out/build-candidate1.log"
if ($LASTEXITCODE -ne 0) { throw 'Build, sign or actual package checks failed' }
Write-Output '82 complete host checks and original-signature candidate verified'
