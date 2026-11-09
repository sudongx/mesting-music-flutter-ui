$ErrorActionPreference='Stop'
$archive160Directory='D:/AnLi/.codex-artifacts/2026-11-05-github-gitee-150-160'
$archive160Plan=Get-Content -LiteralPath "$archive160Directory/cleanup-plan.json" -Raw -Encoding utf8 | ConvertFrom-Json
$archive160Private=Get-Content -LiteralPath "$archive160Directory/private-final-verification.json" -Raw -Encoding utf8 | ConvertFrom-Json
$archive160Published=Get-Content -LiteralPath "$archive160Directory/publish-state.json" -Raw -Encoding utf8 | ConvertFrom-Json
if (-not $archive160Private.complete -or -not $archive160Published.completed -or @($archive160Plan.unverifiedRetained).Count -ne 0) {throw 'Backup verification is incomplete; no cleanup permitted.'}
$archive160Target=(Resolve-Path -LiteralPath 'D:/AnLi/release').Path
# Resolve and validate every absolute target before the first recycle action.
foreach ($archive160Item in $archive160Plan.files) {
    $archive160Path=(Resolve-Path -LiteralPath $archive160Item.path).Path
    if ([IO.Path]::GetDirectoryName($archive160Path) -ne $archive160Target -or [IO.Path]::GetExtension($archive160Path) -notin @('.apk','.zip')) {throw 'Unexpected cleanup target.'}
    if ((Get-FileHash -LiteralPath $archive160Path -Algorithm SHA256).Hash.ToLowerInvariant() -ne $archive160Item.sha256) {throw 'Cleanup input changed after remote verification.'}
}
Add-Type -AssemblyName Microsoft.VisualBasic
$archive160Moved=@()
foreach ($archive160Item in $archive160Plan.files) {
    [Microsoft.VisualBasic.FileIO.FileSystem]::DeleteFile($archive160Item.path,[Microsoft.VisualBasic.FileIO.UIOption]::OnlyErrorDialogs,[Microsoft.VisualBasic.FileIO.RecycleOption]::SendToRecycleBin)
    if (Test-Path -LiteralPath $archive160Item.path) {throw 'File still present after recycle.'}
    $archive160Moved+= $archive160Item
    @{movedToRecycleBin=$archive160Moved;count=$archive160Moved.Count;permanentDelete=$false;metadataRetained=$true;rootSourceZipsRetained=$true} | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath "$archive160Directory/cleanup-result.json" -Encoding utf8
}
Write-Output "Recycled $($archive160Moved.Count) verified release files; metadata and root source archives retained."
