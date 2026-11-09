# Execute only the two priority groups approved by the user. Shared SDKs and
# all regenerable build/tool caches remain outside this literal allowlist.
$ErrorActionPreference = 'Stop'
$cacheRoot = [IO.Path]::GetFullPath('D:\CodexCache').TrimEnd('\')
$cacheAudit = 'D:\AnLi\.codex-artifacts\2026-10-28-codex-cache-audit'
$cacheEvidence = Get-Content -LiteralPath (Join-Path $cacheAudit 'verified-candidates.json') -Raw | ConvertFrom-Json
$cacheRecommendations = Get-Content -LiteralPath (Join-Path $cacheAudit 'cleanup-recommendations.json') -Raw | ConvertFrom-Json
$cacheTargets = @(
    'D:\CodexCache\android-build\command-line-staging',
    'D:\CodexCache\android-build\commandlinetools-win-16111833_latest.zip',
    'D:\CodexCache\android-build\gradle-8.14-all.zip',
    'D:\CodexCache\android-build\jdk\OpenJDK17U-jdk_x64_windows_hotspot_17.0.20.1_1.zip',
    'D:\CodexCache\migration-backups'
)

function Assert-CacheTarget([string]$Path) {
    $absolute = [IO.Path]::GetFullPath($Path).TrimEnd('\')
    if (-not $absolute.StartsWith($cacheRoot + '\', [StringComparison]::OrdinalIgnoreCase) -or $absolute -eq $cacheRoot) {
        throw "Deletion target escaped the approved directory: $absolute"
    }
    if ($absolute -notin $cacheTargets) { throw "Target is not in the literal approved allowlist: $absolute" }
    $ancestor = $absolute
    while ($ancestor) {
        if ((Get-Item -LiteralPath $ancestor -Force).Attributes -band [IO.FileAttributes]::ReparsePoint) {
            throw "Reparse point found in target path: $ancestor"
        }
        if ($ancestor -eq $cacheRoot) { break }
        $ancestor = [IO.Path]::GetDirectoryName($ancestor)
    }
    return $absolute
}

function Assert-InstalledTools {
    foreach ($sentinel in $cacheEvidence.sdkSentinelHashes) {
        if ((Get-FileHash -LiteralPath $sentinel.path -Algorithm SHA256).Hash -ne $sentinel.sha256) {
            throw "Installed tool changed: $($sentinel.path)"
        }
    }
    $wrapperZip = Join-Path $cacheRoot $cacheEvidence.gradleStandaloneZipIsExactDuplicate.retainedWrapperZip
    if ((Get-FileHash -LiteralPath $wrapperZip -Algorithm SHA256).Hash -ne $cacheEvidence.gradleStandaloneZipIsExactDuplicate.sha256) {
        throw 'The retained Gradle distribution ZIP does not match.'
    }
    foreach ($relative in $cacheRecommendations.preserveInstalledRoots) {
        if (-not (Test-Path -LiteralPath (Join-Path $cacheRoot $relative) -PathType Container)) {
            throw "Required shared environment is missing: $relative"
        }
    }
}

if (-not $cacheEvidence.stagingMatchesInstalledCmdlineTools.allSha256Match -or
    @($cacheEvidence.installerZipsMatchExtractedFiles | Where-Object { -not $_.allFilesMatchInstalledCopy }).Count -gt 0) {
    throw 'Fresh duplicate-file verification is required.'
}
Assert-InstalledTools
$cacheBeforeFree = [IO.DriveInfo]::new('D:\').AvailableFreeSpace
$cachePlanned = @()
$cacheTotalBytes = [long]0
foreach ($target in $cacheTargets) {
    $absolute = Assert-CacheTarget $target
    $item = Get-Item -LiteralPath $absolute -Force
    if ($item.PSIsContainer) {
        $children = @(Get-ChildItem -LiteralPath $absolute -Recurse -Force)
        if ($children | Where-Object { $_.Attributes -band [IO.FileAttributes]::ReparsePoint }) {
            throw "Do not recursively delete linked content under $absolute"
        }
        $files = @($children | Where-Object { -not $_.PSIsContainer })
    } else {
        $files = @($item)
    }
    $bytes = [long]0
    $records = @()
    foreach ($file in $files) {
        $bytes += $file.Length
        $records += [pscustomobject]@{ path = $file.FullName; bytes = $file.Length; lastWriteTimeUtcTicks = $file.LastWriteTimeUtc.Ticks; sha256 = (Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash }
    }
    $cacheTotalBytes += $bytes
    $cachePlanned += [pscustomobject]@{ path = $absolute; directory = $item.PSIsContainer; bytes = $bytes; files = $records }
}
if ($cacheTotalBytes -ne $cacheRecommendations.priorityCandidateBytes) {
    throw 'Candidate sizes changed since the reviewed plan; stop before deleting anything.'
}
$cachePlanned | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $cacheAudit 'priority-deletion-manifest.json') -Encoding utf8NoBOM
# Revalidate all files as a complete preflight before the first deletion.
foreach ($target in $cachePlanned) {
    foreach ($file in $target.files) {
        $current = Get-Item -LiteralPath $file.path -Force
        if ($current.Length -ne $file.bytes -or $current.LastWriteTimeUtc.Ticks -ne $file.lastWriteTimeUtcTicks) {
            throw "Candidate changed during preflight: $($file.path)"
        }
    }
}
foreach ($target in $cachePlanned) {
    $absolute = Assert-CacheTarget $target.path
    if ($target.directory) {
        Remove-Item -LiteralPath $absolute -Recurse -Force
    } else {
        Remove-Item -LiteralPath $absolute -Force
    }
    if (Test-Path -LiteralPath $absolute) { throw "Target still exists: $absolute" }
    [pscustomobject]@{ path = $absolute; bytes = $target.bytes; files = $target.files.Count; deleted = $true } |
        ConvertTo-Json -Compress | Add-Content -LiteralPath (Join-Path $cacheAudit 'priority-deleted-targets.jsonl') -Encoding utf8NoBOM
}
Assert-InstalledTools
$cacheAfterFree = [IO.DriveInfo]::new('D:\').AvailableFreeSpace
$cacheResult = [ordered]@{
    completed = $true
    scope = 'Only duplicate installers/staging and migration cache backups'
    deletedTargets = $cachePlanned.Count
    deletedFiles = ($cachePlanned | ForEach-Object { $_.files.Count } | Measure-Object -Sum).Sum
    deletedLogicalBytes = $cacheTotalBytes
    sharedSdksPreserved = $true
    gradleWrapperPreserved = $true
    otherBuildAndToolCachesPreserved = $true
    observedDriveFreeBytesBefore = $cacheBeforeFree
    observedDriveFreeBytesAfter = $cacheAfterFree
    observedDriveFreeBytesChange = $cacheAfterFree - $cacheBeforeFree
}
$cacheResult | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath (Join-Path $cacheAudit 'priority-cleanup-result.json') -Encoding utf8NoBOM
$cacheResult | ConvertTo-Json -Depth 6
