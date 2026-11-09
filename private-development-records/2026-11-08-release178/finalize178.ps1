$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$final178Root = 'D:/AnLi/.codex-artifacts/2026-11-08-release178'
foreach ($name in @('Mesting-Music-v1.0.78.apk', 'Mesting-Music-v1.0.78-verification.json', 'Mesting-Music-v1.0.78.apk.sha256')) {
    $final178Source = Join-Path "$final178Root/candidate1" $name
    $final178Target = Join-Path 'D:/AnLi/release' $name
    if (!(Test-Path -LiteralPath $final178Source -PathType Leaf)) { throw 'Verified candidate is absent' }
    if (Test-Path -LiteralPath $final178Target) { throw 'Refusing to overwrite a delivery' }
    Copy-Item -LiteralPath $final178Source -Destination $final178Target -ErrorAction Stop
}
python -B "$final178Root/verify_native_packaging178.py"
if ($LASTEXITCODE -ne 0) { throw 'Native package verification failed' }
python -B "$final178Root/final_docs178.py"
if ($LASTEXITCODE -ne 0) { throw 'Version documents failed' }
python -B "$final178Root/freeze_source178.py"
if ($LASTEXITCODE -ne 0) { throw 'Source freeze failed' }
python -B "$final178Root/verify178.py" freeze
if ($LASTEXITCODE -ne 0) { throw 'Preservation freeze failed' }
python -B "$final178Root/verify178.py" check *> "$final178Root/final-reception-check.json"
if ($LASTEXITCODE -ne 0) { throw 'Final reception verification failed' }
Add-Content -LiteralPath "$final178Root/WORK-STATUS.md" -Encoding utf8 -Value @'

FINAL178: Original-signature APK and exact source ZIP delivered locally;
actual packaging/JNI/DSP/R8 and new diagnostic markers checked. New version
documents written, final after.json frozen and read-only verification passed.
No build/test/install/export job remains. Old94 deliveries preserved; total96.
No phone/account/NAS/live-business/Git publication actions. Real cover upload,
social/time service acceptance and official duration credit remain unverified.
'@
Write-Output 'Final 1.0.78 package, source, and preservation checks passed'
