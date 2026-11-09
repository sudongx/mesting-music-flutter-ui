$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
$archive149Folder = 'D:/AnLi/.codex-artifacts/2026-11-04-github-125-149'
# This is the specifically observed Python worker owned by the current task,
# not a blanket process search or a background service on the user's machine.
$archive149Worker = Get-CimInstance Win32_Process -Filter 'ProcessId = 327476'
if ($archive149Worker) {
    if ($archive149Worker.CommandLine -notlike '*2026-11-04-github-125-149/publish_parallel.py*') { throw 'Worker identity changed; refusing to wait on a reused PID.' }
    Wait-Process -Id 327476 -ErrorAction SilentlyContinue
}
# The interrupted first transfer was recovered separately. Re-read all draft
# assets now; successful uploads are reused by name, size and SHA256, and the
# final publication phase remains ordered even if a worker had needed repair.
python -u "$archive149Folder/publish_parallel.py" *> "$archive149Folder/publish-final.log"
if ($LASTEXITCODE -ne 0) { throw 'Release upload/publication needs inspection in publish-final.log.' }
python -u "$archive149Folder/verify_remote.py" *> "$archive149Folder/remote-verify.log"
if ($LASTEXITCODE -ne 0) { throw 'Remote/fresh-clone verification needs inspection.' }
python -u "$archive149Folder/finalize.py" *> "$archive149Folder/finalize.log"
if ($LASTEXITCODE -ne 0) { throw 'Final evidence commit needs inspection.' }
Write-Output 'COMPLETE: 24 releases, 263 original assets, 50809 source entries; channels sorted and 1.0.49 Latest.'
