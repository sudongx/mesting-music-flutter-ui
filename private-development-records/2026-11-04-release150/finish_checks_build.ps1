$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath 'D:/AnLi'
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' --no-version-check test --no-pub --flavor beta test/beta5_ui_test.dart --concurrency=1 --machine *> '.codex-artifacts/2026-11-04-release150/final-navigation-fixed.jsonl'
if ($LASTEXITCODE -ne 0) { throw 'Independent navigation file failed.' }
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' --no-version-check analyze --no-pub *> '.codex-artifacts/2026-11-04-release150/analyze-final.log'
if ($LASTEXITCODE -ne 0) { throw 'Analysis failed.' }
python .codex-artifacts/2026-11-04-release150/record_build_inputs.py
if ($LASTEXITCODE -ne 0) { throw 'Final focused validation or build input manifest failed.' }
& ./.codex-artifacts/2026-11-04-release150/build.ps1
