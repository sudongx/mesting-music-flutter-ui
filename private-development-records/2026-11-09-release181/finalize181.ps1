$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release181Root = 'D:/AnLi/.codex-artifacts/2026-11-09-release181'
foreach ($name in @('Mesting-Music-v1.0.81.apk', 'Mesting-Music-v1.0.81-verification.json', 'Mesting-Music-v1.0.81.apk.sha256')) {
    $release181Source = Join-Path "$release181Root/candidate1" $name
    $release181Target = Join-Path 'D:/AnLi/release' $name
    if (!(Test-Path -LiteralPath $release181Source -PathType Leaf)) { throw 'Verified candidate absent' }
    if (Test-Path -LiteralPath $release181Target) { throw 'Refusing to overwrite an existing delivery' }
    Copy-Item -LiteralPath $release181Source -Destination $release181Target -ErrorAction Stop
}
python -B "$release181Root/verify_native_packaging181.py"
if ($LASTEXITCODE -ne 0) { throw 'Actual native/DEX verification failed' }
python -B "$release181Root/final_docs181.py"
if ($LASTEXITCODE -ne 0) { throw 'New-version documentation failed' }
python -B "$release181Root/freeze_source181.py"
if ($LASTEXITCODE -ne 0) { throw 'Exact source freeze failed' }
python -B "$release181Root/verify181.py" freeze
if ($LASTEXITCODE -ne 0) { throw 'Preservation freeze failed' }
python -B "$release181Root/verify181.py" check *> "$release181Root/final-reception-check.json"
if ($LASTEXITCODE -ne 0) { throw 'Final read-only verification failed' }
Add-Content -LiteralPath "$release181Root/WORK-STATUS.md" -Encoding utf8 -Value @'

FINAL181: Complete fresh host checks and final analysis passed. Original-signature
APK, actual DEX/JNI/native checks, new documents, exact source ZIP and preservation
receipt/check completed. Previous100 artifacts preserved,total102;74 retired
paths,HEAD/index/lock/signing and dirty tree retained. No pending build/test/
install/export/investigation tasks; no phone/ADB/account/NAS/business access,
Git commit/push or upload/publication/backup. Actual account ad configuration,
independent H5/rendering,official completion and new reward credit remain unverified.
'@
Write-Output 'Final local1.0.81 APK/source and preservation verification completed'
