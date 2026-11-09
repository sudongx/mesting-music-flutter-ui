$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
$flutter127 = 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat'
& $flutter127 test --no-pub --flavor beta --concurrency=1 --reporter json test/release_127_message_test.dart *> .codex-artifacts/2026-10-31-release127/beta-followup-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Final unknown-envelope diagnostic regression failed.' }
$stable127Files = Get-Content -LiteralPath '.codex-artifacts/2026-10-31-release126/stable-files.json' -Raw -Encoding UTF8 | ConvertFrom-Json
& $flutter127 test --no-pub --flavor stable --concurrency=1 --reporter json @stable127Files *> .codex-artifacts/2026-10-31-release127/stable-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Stable isolation regression failed.' }
& $flutter127 test --no-pub --flavor beta --concurrency=1 --reporter json test/beta5_ui_test.dart --plain-name 'beta14 Android back registration survives retained-engine resume and follows every page level' *> .codex-artifacts/2026-10-31-release127/android-back-final.jsonl
if ($LASTEXITCODE -ne 0) { throw 'Retained-engine back regression failed.' }
& $flutter127 test --no-pub --flavor beta --concurrency=1 --dart-define=CAPTURE_V124_FOLLOWUP=true --dart-define=FOLLOWUP_CAPTURE_DIR=.codex-artifacts/2026-10-31-release127/ui --reporter expanded test/netease_message_card_ui_test.dart *> .codex-artifacts/2026-10-31-release127/render-final.log
if ($LASTEXITCODE -ne 0) { throw 'Production chat and diagnostic render failed.' }
Write-Output 'Stable, Android back and rendered UI checks passed.'
