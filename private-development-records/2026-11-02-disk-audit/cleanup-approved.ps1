$ErrorActionPreference='Stop'
$auditRoot='D:\AnLi\.codex-artifacts\2026-11-02-disk-audit'
if(Test-Path -LiteralPath "$auditRoot\cleanup-result.json") { throw 'Cleanup already recorded; do not repeat.' }
$active=@(Get-CimInstance Win32_Process | Where-Object { $_.Name -match '^(dart|flutter_tester|gen_snapshot|java)\.exe$' })
if($active.Count) { throw 'Build or Dart/Java process present; stop without removing files.' }
function FileSnapshot($paths) {
  @(foreach($p in $paths) { if(Test-Path -LiteralPath $p -PathType Leaf) { [pscustomobject]@{Path=$p;Hash=(Get-FileHash -LiteralPath $p -Algorithm SHA256).Hash} } })
}
# Protect all Git-selected working files, frozen deliveries, and private signing
# material. Only generated build directories and named Flutter temp runs qualify.
$sourcePaths=@(git -c core.quotepath=false ls-files --cached --others --exclude-standard | ForEach-Object { Join-Path 'D:\AnLi' $_ })
$frozen=@(Get-ChildItem -LiteralPath 'D:\AnLi\release' -File -Filter '*.apk' | ForEach-Object FullName)
$frozen+=@(Get-ChildItem -LiteralPath 'D:\AnLi' -File -Filter '*source.zip' | ForEach-Object FullName)
$protected=@($sourcePaths)+$frozen+@('D:\AnLi\.codex-artifacts\2026-10-26-beta17-signing\debug.keystore')
$before=FileSnapshot ($protected | Sort-Object -Unique)
$before | ConvertTo-Json -Depth 3 | Set-Content -LiteralPath "$auditRoot\cleanup-protected-before.json" -Encoding utf8
$freeBefore=@{C=([IO.DriveInfo]::new('C:\')).AvailableFreeSpace;D=([IO.DriveInfo]::new('D:\')).AvailableFreeSpace}
$targets=@('D:\AnLi\build','D:\AnLi\.dart_tool')
$targets+=@(Get-ChildItem -LiteralPath 'C:\Users\zyt\AppData\Local\Temp' -Directory -Force | Where-Object { $_.Name -match '^flutter_tools\.[0-9a-f]+$' -and $_.LastWriteTimeUtc -lt [DateTime]::UtcNow.AddHours(-1) } | ForEach-Object FullName)
$results=@()
foreach($target in $targets) {
  $resolved=(Resolve-Path -LiteralPath $target -ErrorAction Stop).ProviderPath
  $allowed=($resolved -ceq 'D:\AnLi\build') -or ($resolved -ceq 'D:\AnLi\.dart_tool') -or ($resolved -cmatch '^C:\\Users\\zyt\\AppData\\Local\\Temp\\flutter_tools\.[0-9a-f]+$')
  if(-not $allowed) { throw "Unexpected resolved target: $resolved" }
  $rootItem=Get-Item -LiteralPath $resolved -Force
  $entries=@(Get-ChildItem -LiteralPath $resolved -Force -Recurse -ErrorAction Stop)
  $links=@($rootItem)+$entries | Where-Object { ($_.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0 }
  if(@($links).Count) { $results+=[pscustomobject]@{Path=$resolved;Status='SkippedReparsePoint';Bytes=0};continue }
  $bytes=($entries | Where-Object {-not $_.PSIsContainer} | Measure-Object Length -Sum).Sum
  try {
    Remove-Item -LiteralPath $resolved -Recurse -Force -ErrorAction Stop
    if(Test-Path -LiteralPath $resolved) { throw 'Target still exists' }
    $results+=[pscustomobject]@{Path=$resolved;Status='Removed';Bytes=[long]$bytes}
  } catch { $results+=[pscustomobject]@{Path=$resolved;Status='PartialOrFailed';Bytes=[long]$bytes;Error=$_.Exception.Message} }
  $results | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath "$auditRoot\cleanup-progress.json" -Encoding utf8
}
$after=FileSnapshot ($before | ForEach-Object Path)
$changes=@(Compare-Object $before $after -Property Path,Hash)
$freeAfter=@{C=([IO.DriveInfo]::new('C:\')).AvailableFreeSpace;D=([IO.DriveInfo]::new('D:\')).AvailableFreeSpace}
$result=[pscustomobject]@{Targets=$results;ProtectedFiles=$before.Count;FrozenFiles=$frozen.Count;ProtectedChanges=$changes;FreeBefore=$freeBefore;FreeAfter=$freeAfter;CleanupScope='Only approved build dirs and inactive named Flutter temp runs';OtherCachesLogsRecycleBinUntouched=$true}
$result | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath "$auditRoot\cleanup-result.json" -Encoding utf8
if($changes.Count) { throw 'Protected files changed; inspect report.' }
$result | Select-Object ProtectedFiles,FrozenFiles,@{Name='RemovedTargets';Expression={@($_.Targets | Where-Object Status -eq 'Removed').Count}},@{Name='OtherTargets';Expression={@($_.Targets | Where-Object Status -ne 'Removed').Count}},@{Name='CFreeGainGiB';Expression={[math]::Round(($_.FreeAfter.C-$_.FreeBefore.C)/1GB,3)}},@{Name='DFreeGainGiB';Expression={[math]::Round(($_.FreeAfter.D-$_.FreeBefore.D)/1GB,3)}} | ConvertTo-Json
