param([Parameter(Mandatory)][int]$GradleProcessId)
$ErrorActionPreference = 'Stop'
$music155Out = 'D:/AnLi/.codex-artifacts/2026-11-05-release155'
$music155Allowed = @('USE_CLOUDBASE_AUTH', 'ENABLE_APP_UPDATE_CHECKS', 'MESTING_NATIVE_PLAYBACK_LOGGING', 'MESTING_LOCAL_DIAGNOSTICS', 'TOGETHER_SYNC_DIAGNOSTICS', 'APP_UPDATE_PACKAGE_NAME')
$music155Observed = @()
foreach ($music155Process in Get-CimInstance Win32_Process -Filter "Name = 'java.exe'") {
    if ($music155Process.ProcessId -ne $GradleProcessId) { continue }
    $music155Command = $music155Process.CommandLine
    if ($music155Command -notmatch 'GradleWrapperMain' -or $music155Command -notmatch '-Pdart-defines=([A-Za-z0-9+/=,]+)') { continue }
    $music155Encoded = $Matches[1]
    $music155Values = [ordered]@{}
    foreach ($music155Part in $music155Encoded.Split(',')) {
        $music155Definition = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($music155Part))
        $music155Split = $music155Definition.IndexOf('=')
        if ($music155Split -gt 0) {
            $music155Name = $music155Definition.Substring(0, $music155Split)
            if ($music155Allowed -contains $music155Name) {
                $music155Values[$music155Name] = $music155Definition.Substring($music155Split + 1)
            }
        }
    }
    if ($music155Values.Count -eq $music155Allowed.Count) { $music155Observed += $music155Values }
}
if ($music155Observed.Count -eq 0) { throw 'No current complete Gradle compiler definitions observed yet.' }
foreach ($music155Values in $music155Observed) {
    if ($music155Values['TOGETHER_SYNC_DIAGNOSTICS'] -ne 'false' -or $music155Values['MESTING_LOCAL_DIAGNOSTICS'] -ne 'false' -or $music155Values['MESTING_NATIVE_PLAYBACK_LOGGING'] -ne 'false' -or $music155Values['ENABLE_APP_UPDATE_CHECKS'] -ne 'true') { throw 'Unexpected formal compiler flags.' }
}
$music155Record = [ordered]@{ observedAt = [DateTime]::UtcNow.ToString('o'); gradleProcessId = $GradleProcessId; source = 'Current local GradleWrapperMain compiler arguments'; whitelistedCompilerDefinitions = $music155Observed; fullCommandLineIncludedInThisRecord = $false }
[IO.File]::WriteAllText("$music155Out/compiler-definitions.json", ($music155Record | ConvertTo-Json -Depth 6), [Text.UTF8Encoding]::new($false))
$music155Record | ConvertTo-Json -Depth 6
