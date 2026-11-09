$ErrorActionPreference = 'Stop'
$music146Out = 'D:/AnLi/.codex-artifacts/2026-11-04-release152'
$music146Allowed = @('USE_CLOUDBASE_AUTH', 'ENABLE_APP_UPDATE_CHECKS', 'MESTING_NATIVE_PLAYBACK_LOGGING', 'MESTING_LOCAL_DIAGNOSTICS', 'TOGETHER_SYNC_DIAGNOSTICS', 'APP_UPDATE_PACKAGE_NAME')
$music146Observed = @()
foreach ($music146Process in Get-CimInstance Win32_Process -Filter "Name = 'java.exe'") {
    $music146Command = $music146Process.CommandLine
    if ($music146Command -notmatch 'GradleWrapperMain' -or $music146Command -notmatch '-Pdart-defines=([A-Za-z0-9+/=,]+)') { continue }
    $music146Encoded = $Matches[1]
    $music146Values = [ordered]@{}
    foreach ($music146Part in $music146Encoded.Split(',')) {
        $music146Definition = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($music146Part))
        $music146Split = $music146Definition.IndexOf('=')
        if ($music146Split -gt 0) {
            $music146Name = $music146Definition.Substring(0, $music146Split)
            if ($music146Allowed -contains $music146Name) {
                $music146Values[$music146Name] = $music146Definition.Substring($music146Split + 1)
            }
        }
    }
    if ($music146Values.Count -eq $music146Allowed.Count) { $music146Observed += $music146Values }
}
if ($music146Observed.Count -eq 0) { throw 'No current complete Gradle compiler definitions observed yet.' }
foreach ($music146Values in $music146Observed) {
    if ($music146Values['TOGETHER_SYNC_DIAGNOSTICS'] -ne 'false' -or $music146Values['MESTING_LOCAL_DIAGNOSTICS'] -ne 'false' -or $music146Values['MESTING_NATIVE_PLAYBACK_LOGGING'] -ne 'false' -or $music146Values['ENABLE_APP_UPDATE_CHECKS'] -ne 'true') { throw 'Unexpected formal compiler flags.' }
}
$music146Record = [ordered]@{ observedAt = [DateTime]::UtcNow.ToString('o'); source = 'Current local GradleWrapperMain compiler arguments'; whitelistedCompilerDefinitions = $music146Observed; fullCommandLineIncludedInThisRecord = $false }
[IO.File]::WriteAllText("$music146Out/compiler-definitions.json", ($music146Record | ConvertTo-Json -Depth 6), [Text.UTF8Encoding]::new($false))
$music146Record | ConvertTo-Json -Depth 6
