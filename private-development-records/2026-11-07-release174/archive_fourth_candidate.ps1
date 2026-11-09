$ErrorActionPreference = 'Stop'
$release174Root = [IO.Path]::GetFullPath('D:/AnLi/')
$release174Archive = 'D:/AnLi/.codex-artifacts/2026-11-07-release174/fourth-device-candidate'
$release174RelativePaths = @(
  'release/Mesting-Music-v1.0.74.apk',
  'release/Mesting-Music-v1.0.74-verification.json',
  'release/Mesting-Music-v1.0.74.apk.sha256',
  '.codex-artifacts/2026-11-07-release174/original-signed-candidate.apk',
  '.codex-artifacts/2026-11-07-release174/signed-candidate-input.json',
  '.codex-artifacts/2026-11-07-release174/build-input-final.json',
  '.codex-artifacts/2026-11-07-release174/device/installation74.json'
)
if (Test-Path -LiteralPath $release174Archive) { throw 'Candidate already archived' }
$release174Paths = foreach ($release174Relative in $release174RelativePaths) {
  $release174Resolved = [IO.Path]::GetFullPath((Join-Path $release174Root $release174Relative))
  if (-not $release174Resolved.StartsWith($release174Root, [StringComparison]::OrdinalIgnoreCase)) { throw 'Outside workspace' }
  if (-not (Test-Path -LiteralPath $release174Resolved -PathType Leaf)) { throw 'Missing candidate path' }
  $release174Resolved
}
New-Item -ItemType Directory -Path $release174Archive | Out-Null
$release174Paths | ForEach-Object {
  $release174Item = Get-Item -LiteralPath $_
  [PSCustomObject]@{ path = $release174Item.FullName; bytes = $release174Item.Length; sha256 = (Get-FileHash -LiteralPath $_ -Algorithm SHA256).Hash.ToLowerInvariant() }
} | ConvertTo-Json | Set-Content -LiteralPath "$release174Archive/manifest.json" -Encoding utf8
foreach ($release174Path in $release174Paths) { Move-Item -LiteralPath $release174Path -Destination $release174Archive }
Write-Output 'Fourth unfinalized candidate retained with exact hashes; older frozen releases untouched.'
