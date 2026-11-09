$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$release182Root = 'D:/AnLi/.codex-artifacts/2026-11-09-release182'
foreach ($name in @('Mesting-Music-v1.0.82.apk', 'Mesting-Music-v1.0.82-verification.json', 'Mesting-Music-v1.0.82.apk.sha256')) {
    $release182Source = Join-Path "$release182Root/candidate1" $name
    $release182Target = Join-Path 'D:/AnLi/release' $name
    if (!(Test-Path -LiteralPath $release182Source -PathType Leaf)) { throw 'Verified candidate absent' }
    if (Test-Path -LiteralPath $release182Target) { throw 'Refusing to overwrite an existing delivery' }
    Copy-Item -LiteralPath $release182Source -Destination $release182Target -ErrorAction Stop
}
python -B "$release182Root/verify_native_packaging182.py"
if ($LASTEXITCODE -ne 0) { throw 'Actual native/JNI/DEX checks failed' }
python -B "$release182Root/final_docs182.py"
if ($LASTEXITCODE -ne 0) { throw 'New82 documents failed' }
python -B "$release182Root/freeze_source182.py"
if ($LASTEXITCODE -ne 0) { throw 'Exact new source freeze failed' }
python -B "$release182Root/verify182.py" freeze
if ($LASTEXITCODE -ne 0) { throw 'Preservation receipt failed' }
python -B "$release182Root/verify182.py" check *> "$release182Root/final-reception-check.json"
if ($LASTEXITCODE -ne 0) { throw 'Final read-only check failed' }
Add-Content -LiteralPath "$release182Root/WORK-STATUS.md" -Encoding utf8 -Value @'

FINAL182: Complete fresh host suites, final analysis and complete affected-file
replacements passed. Original-signature APK, native/JNI/DEX checks, documents,
exact source ZIP and preservation receipt/check completed. Old102 deliveries,
74 retired paths,HEAD/index/lock/signing/dirty tree preserved; total104 deliveries.
No pending build/test/install/export/investigation tasks. No device/ADB/account/
NAS/business access,Git commit/push/upload/publication/backup. User81 empty report
and official same-account availability remain valid;82 real nonempty response,
independent H5/rendering/completion and new credit remain unverified.
'@
Write-Output 'Final local1.0.82 APK/source and preservation verification completed'
