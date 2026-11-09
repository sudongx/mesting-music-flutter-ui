$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$statePath = 'D:/AnLi/.codex-artifacts/2026-11-03-release144/worker-state.json'
try {
  @{stage='host-checks'; status='running'} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
  & ./.codex-artifacts/2026-11-03-release144/run_final_checks.ps1
  @{stage='release-build'; status='running'} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
  & ./.codex-artifacts/2026-11-03-release144/build_release.ps1
  @{stage='checks-and-build'; status='complete'} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
} catch {
  @{stage='checks-or-build'; status='failed'; error=$_.Exception.Message} | ConvertTo-Json | Set-Content -LiteralPath $statePath -Encoding utf8
  throw
}
