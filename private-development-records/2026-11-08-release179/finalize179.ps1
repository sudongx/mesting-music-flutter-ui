$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$final179Root = 'D:/AnLi/.codex-artifacts/2026-11-08-release179'
foreach ($name in @('Mesting-Music-v1.0.79.apk', 'Mesting-Music-v1.0.79-verification.json', 'Mesting-Music-v1.0.79.apk.sha256')) {
    $final179Source = Join-Path "$final179Root/candidate1" $name
    $final179Target = Join-Path 'D:/AnLi/release' $name
    if (!(Test-Path -LiteralPath $final179Source -PathType Leaf)) { throw 'Verified candidate is absent' }
    if (Test-Path -LiteralPath $final179Target) { throw 'Refusing to overwrite an old delivery' }
    Copy-Item -LiteralPath $final179Source -Destination $final179Target -ErrorAction Stop
}
python -B "$final179Root/verify_native_packaging179.py"
if ($LASTEXITCODE -ne 0) { throw 'Actual native package verification failed' }
python -B "$final179Root/final_docs179.py"
if ($LASTEXITCODE -ne 0) { throw 'New-version documents failed' }
python -B "$final179Root/freeze_source179.py"
if ($LASTEXITCODE -ne 0) { throw 'Exact source freeze failed' }
python -B "$final179Root/verify179.py" freeze
if ($LASTEXITCODE -ne 0) { throw 'Historical preservation freeze failed' }
python -B "$final179Root/verify179.py" check *> "$final179Root/final-reception-check.json"
if ($LASTEXITCODE -ne 0) { throw 'Final read-only verification failed' }
Add-Content -LiteralPath "$final179Root/WORK-STATUS.md" -Encoding utf8 -Value @'

FINAL179: All complete host checks, original-signature APK, actual JNI/native
packaging, new documents and exact source ZIP verified. Final after receipt
frozen; read-only check passed. Previous96 deliveries retained, total98.
No pending build/test/export/install or investigation work. Independent helper
0.2.3 source/ZIP/85-test receipt cross-checked offline; no helper push or NAS
deployment. No phone/real-account/official-business/MCS requests or Git release.
Real nonempty Qishui social writes, official total return, crediting and cover
HTTP400 disappearance remain unverified. Old unknown intervals were not replayed.
'@
Write-Output 'Final local 1.0.79 APK, full source and preservation checks passed'
