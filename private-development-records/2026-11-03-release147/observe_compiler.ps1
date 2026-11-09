$ErrorActionPreference = 'Stop'
for ($music147Attempt = 0; $music147Attempt -lt 55; $music147Attempt++) {
  try { & D:/AnLi/.codex-artifacts/2026-11-03-release147/read_compiler_definitions.ps1; exit 0 }
  catch { if ($_.Exception.Message -notmatch 'No current complete Gradle compiler definitions') { throw } }
  Start-Sleep -Milliseconds 1000
}
throw 'Build has not exposed the current compiler flags yet; retry after checking its phase.'
