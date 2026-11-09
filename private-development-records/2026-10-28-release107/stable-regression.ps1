. ./.codex-artifacts/2026-10-27-v1.0.1/env.ps1
& $beta21Flutter test test/app_update_test.dart test/music_ring_update_test.dart test/csnas_app_update_test.dart test/beta16_playback_order_test.dart --concurrency=1 --reporter expanded *> .codex-artifacts/2026-10-28-release107/stable-regression.log
Get-Content .codex-artifacts/2026-10-28-release107/stable-regression.log -Tail 12
exit $LASTEXITCODE
