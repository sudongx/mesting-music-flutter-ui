$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$final180Root = 'D:/AnLi/.codex-artifacts/2026-11-08-release180'
foreach ($name in @('Mesting-Music-v1.0.80.apk', 'Mesting-Music-v1.0.80-verification.json', 'Mesting-Music-v1.0.80.apk.sha256')) {
    $final180Source = Join-Path "$final180Root/candidate1" $name
    $final180Target = Join-Path 'D:/AnLi/release' $name
    if (!(Test-Path -LiteralPath $final180Source -PathType Leaf)) { throw 'Verified candidate is absent' }
    if (Test-Path -LiteralPath $final180Target) { throw 'Refusing to overwrite an existing delivery' }
    Copy-Item -LiteralPath $final180Source -Destination $final180Target -ErrorAction Stop
}
python -B "$final180Root/verify_native_packaging180.py"
if ($LASTEXITCODE -ne 0) { throw 'Actual native/DEX verification failed' }
python -B "$final180Root/final_docs180.py"
if ($LASTEXITCODE -ne 0) { throw 'New-version documentation failed' }
python -B "$final180Root/freeze_source180.py"
if ($LASTEXITCODE -ne 0) { throw 'Exact source freeze failed' }
python -B "$final180Root/verify180.py" freeze
if ($LASTEXITCODE -ne 0) { throw 'Preservation freeze failed' }
python -B "$final180Root/verify180.py" check *> "$final180Root/final-reception-check.json"
if ($LASTEXITCODE -ne 0) { throw 'Final read-only verification failed' }
Add-Content -LiteralPath "$final180Root/WORK-STATUS.md" -Encoding utf8 -Value @'

FINAL180: All complete host checks, original-signature APK, actual native/DEX
inspection, final documents and exact source ZIP completed. New180 after.json
frozen and read-only check passed. Prior98 deliveries retained, total100;
74 retired paths, branch/HEAD/index, signing/lock and historical dirty tree kept.
No pending build/test/install/export/investigation tasks. No phone/account/NAS/
business access, main Git commit/push, upload/publish or backup. Real NetEase
qualification/gain/new credited balance remain unverified. Earlier user-confirmed
official-to-Mesting balance/task sync preserved; unknown records not replayed.
'@
Write-Output 'Final local1.0.80 APK/source and preservation verification completed'
