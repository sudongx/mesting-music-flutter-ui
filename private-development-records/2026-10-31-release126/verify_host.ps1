$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
$flutter126 = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
& $flutter126 test --no-pub --flavor beta --concurrency=1 --reporter json test/release_126_browse_cache_test.dart *> .codex-artifacts/2026-10-31-release126/beta-cache-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Deterministic cache regression failed.' }
$stable126 = Get-Content .codex-artifacts/2026-10-31-release126/stable-files.json -Raw -Encoding UTF8 | ConvertFrom-Json
& $flutter126 test --no-pub --flavor stable --concurrency=1 --reporter json @stable126 *> .codex-artifacts/2026-10-31-release126/stable-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Stable isolation regression failed.' }
& $flutter126 test --no-pub --flavor beta --concurrency=1 --reporter json test/beta5_ui_test.dart --plain-name 'beta14 Android back registration survives retained-engine resume and follows every page level' *> .codex-artifacts/2026-10-31-release126/android-back-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Retained-engine back regression failed.' }
& $flutter126 test --no-pub --flavor beta --concurrency=1 --reporter expanded .codex-artifacts/2026-10-31-release126/login_preview_test.dart *> .codex-artifacts/2026-10-31-release126/login-render-final.log
if ($LASTEXITCODE -ne 0) { throw 'Production login render verification failed.' }
Write-Output 'Final cache, Stable, Android back and login render checks passed.'
