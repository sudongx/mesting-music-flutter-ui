param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('Keep', 'Delete')]
    [string]$UnarchivedSources
)
$ErrorActionPreference = 'Stop'
$cleanupRoot = [IO.Path]::GetFullPath('D:\AnLi').TrimEnd('\')
$cleanupAudit = Join-Path $cleanupRoot '.codex-artifacts\2026-10-28-beta-cleanup'
$cleanupSigning = Join-Path $cleanupRoot '.codex-artifacts\2026-10-26-beta17-signing'
$cleanupInventory = Get-Content -LiteralPath (Join-Path $cleanupAudit 'cleanup-inventory.json') -Raw | ConvertFrom-Json
$cleanupRecovery = Get-Content -LiteralPath (Join-Path $cleanupAudit 'beta-recovery-audit.json') -Raw | ConvertFrom-Json
$cleanupDrafts = @(Get-Content -LiteralPath (Join-Path $cleanupAudit 'unarchived-source-list.json') -Raw | ConvertFrom-Json)

function Assert-CleanupPath([string]$Path) {
    $absolute = [IO.Path]::GetFullPath($Path).TrimEnd('\')
    if (-not $absolute.StartsWith($cleanupRoot + '\', [StringComparison]::OrdinalIgnoreCase)) {
        throw "Target is outside the approved workspace: $absolute"
    }
    if ($absolute -eq $cleanupRoot -or $absolute -eq $cleanupSigning -or $absolute.StartsWith($cleanupSigning + '\', [StringComparison]::OrdinalIgnoreCase)) {
        throw "Protected root or signing target: $absolute"
    }
    if (($absolute.Split('\') -contains '.git') -or $absolute -eq $cleanupAudit -or $absolute.StartsWith($cleanupAudit + '\', [StringComparison]::OrdinalIgnoreCase)) {
        throw "Protected Git history or cleanup evidence: $absolute"
    }
    $parent = $absolute
    while ($parent -and $parent -ne $cleanupRoot) {
        if (Test-Path -LiteralPath $parent) {
            if ((Get-Item -LiteralPath $parent -Force).Attributes -band [IO.FileAttributes]::ReparsePoint) {
                throw "Reparse points are not allowed in a deletion path: $parent"
            }
        }
        $parent = [IO.Path]::GetDirectoryName($parent)
    }
    return $absolute
}

function Assert-ProtectedFiles {
    foreach ($file in $cleanupInventory.protected) {
        if ((Get-FileHash -LiteralPath $file.path -Algorithm SHA256).Hash -ne $file.sha256) {
            throw "Protected file changed or missing: $($file.path)"
        }
    }
}

Push-Location -LiteralPath $cleanupRoot
try {
    if ((& git rev-parse HEAD).Trim() -ne $cleanupInventory.head -or (& git status --porcelain)) {
        throw 'Current Git baseline or workspace changed; stop before deleting anything.'
    }
    if ($cleanupRecovery.betaVersionsVerified -ne 21 -or $cleanupRecovery.publicProbesPassed -ne 38) {
        throw 'The complete historical recovery audit is required.'
    }
    if ($cleanupInventory.sensitiveFilesPreventingDeletion.Count -ne 0) {
        throw 'Unprotected sensitive files prevent deletion.'
    }
    Assert-ProtectedFiles
    $expected = [Collections.Generic.Dictionary[string, object]]::new([StringComparer]::OrdinalIgnoreCase)
    foreach ($entry in $cleanupInventory.entries) {
        $expected.Add($entry.path, $entry)
    }
    $observed = [Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
    # Complete preflight happens before the first Copy-Item or Remove-Item.
    foreach ($target in $cleanupInventory.targets) {
        $absolute = Assert-CleanupPath $target.path
        $item = Get-Item -LiteralPath $absolute -Force
        if ($target.kind -eq 'directory') {
            $children = @(Get-ChildItem -LiteralPath $absolute -Recurse -Force)
            if ($children | Where-Object { $_.Attributes -band [IO.FileAttributes]::ReparsePoint }) {
                throw "A reparse point appeared under $absolute"
            }
            $files = @($children | Where-Object { -not $_.PSIsContainer })
        } else {
            $files = @($item)
        }
        if ($files.Count -ne $target.files) { throw "File inventory changed under $absolute" }
        foreach ($file in $files) {
            if (-not $expected.ContainsKey($file.FullName)) { throw "New file appeared: $($file.FullName)" }
            $entry = $expected[$file.FullName]
            if ($file.Length -ne $entry.bytes -or $file.LastWriteTimeUtc.Ticks -ne $entry.lastWriteTimeUtcTicks) {
                throw "File changed since inspection: $($file.FullName)"
            }
            if ($entry.sha256 -and (Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash -ne $entry.sha256) {
                throw "Inspected artifact digest changed: $($file.FullName)"
            }
            [void]$observed.Add($file.FullName)
        }
    }
    if ($observed.Count -ne $expected.Count) { throw 'Incomplete preflight inventory.' }
    $retained = @()
    if ($UnarchivedSources -eq 'Keep') {
        foreach ($draft in $cleanupDrafts) {
            $original = Join-Path $cleanupRoot $draft.path
            $destination = Join-Path (Join-Path $cleanupAudit 'unarchived-source') $draft.path
            if (Test-Path -LiteralPath $destination) { throw "Preserve the existing safety copy: $destination" }
            [void](New-Item -ItemType Directory -Path ([IO.Path]::GetDirectoryName($destination)) -Force)
            Copy-Item -LiteralPath $original -Destination $destination
            if ((Get-FileHash -LiteralPath $destination -Algorithm SHA256).Hash -ne $draft.sha256) {
                throw "Unarchived draft safety copy failed: $original"
            }
            $retained += [ordered]@{ original = $original; retained = $destination; sha256 = $draft.sha256; bytes = $draft.bytes }
        }
    }
    $retained | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $cleanupAudit 'retained-drafts.json') -Encoding utf8NoBOM
    $deleted = @()
    foreach ($target in $cleanupInventory.targets) {
        # Resolve and bound the absolute literal target again immediately before deletion.
        $absolute = Assert-CleanupPath $target.path
        if ($target.kind -eq 'directory') {
            Remove-Item -LiteralPath $absolute -Recurse -Force
        } else {
            Remove-Item -LiteralPath $absolute -Force
        }
        if (Test-Path -LiteralPath $absolute) { throw "Target still exists after deletion: $absolute" }
        $record = [ordered]@{ path = $absolute; files = $target.files; bytes = $target.bytes; deleted = $true }
        $record | ConvertTo-Json -Compress | Add-Content -LiteralPath (Join-Path $cleanupAudit 'deleted-targets.jsonl') -Encoding utf8NoBOM
        $deleted += $record
    }
    Assert-ProtectedFiles
    if ((& git rev-parse HEAD).Trim() -ne $cleanupInventory.head -or (& git status --porcelain)) {
        throw 'Unexpected Git change detected after cleanup.'
    }
    $result = [ordered]@{
        completed = $true
        workspace = $cleanupRoot
        deletedDirectories = $cleanupInventory.targetDirectories
        deletedLooseFiles = $cleanupInventory.targetLooseFiles
        deletedFileCount = $cleanupInventory.files
        deletedBytes = $cleanupInventory.bytes
        retainedUnarchivedFiles = $retained.Count
        retainedUnarchivedBytes = ($retained | Measure-Object -Property bytes -Sum).Sum
        currentSourceAndFormalDeliveriesPreserved = $true
        signingFilesPreserved = $true
        gitHeadAndWorkingTreeUnchanged = $true
        historicalGitRefsDeleted = $false
        phoneAccessPerformed = $false
    }
    $result | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $cleanupAudit 'cleanup-result.json') -Encoding utf8NoBOM
    $result | ConvertTo-Json -Depth 8
} finally {
    Pop-Location
}
