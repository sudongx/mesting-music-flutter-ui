$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
$flutter128 = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
$followup128 = Get-Content -LiteralPath '.codex-artifacts/2026-10-31-release128/followup-files.json' -Raw -Encoding UTF8 | ConvertFrom-Json
& $flutter128 test --no-pub --flavor beta --concurrency=1 --reporter json @followup128 *> .codex-artifacts/2026-10-31-release128/beta-cache-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Final image/cache regression failed.' }
$stable128 = Get-Content -LiteralPath '.codex-artifacts/2026-10-31-release126/stable-files.json' -Raw -Encoding UTF8 | ConvertFrom-Json
& $flutter128 test --no-pub --flavor stable --concurrency=1 --reporter json @stable128 *> .codex-artifacts/2026-10-31-release128/stable-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Stable isolation failed.' }
& $flutter128 test --no-pub --flavor beta --concurrency=1 --reporter json test/beta5_ui_test.dart --plain-name 'beta14 Android back registration survives retained-engine resume and follows every page level' *> .codex-artifacts/2026-10-31-release128/android-back-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Android back host regression failed.' }
& $flutter128 test --no-pub --flavor beta --reporter expanded .codex-artifacts/2026-10-31-release128/preview_test.dart *> .codex-artifacts/2026-10-31-release128/render-final.log
if ($LASTEXITCODE -ne 0) { throw 'Presentation pixel/render verification failed.' }
Write-Output 'Final image/cache, Stable, Android back and pixel/render verification passed.'
