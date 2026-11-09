$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath D:/AnLi
python -c "import runpy; d=runpy.run_path('.codex-artifacts/2026-11-01-release136/write_delivery_docs.py'); h=d['collect_host'](); print('Host validation:', h['beta']['passed'], 'Beta;', h['stable']['passed'], 'Stable')"
if ($LASTEXITCODE -ne 0) { throw 'Host evidence incomplete' }
& './.codex-artifacts/2026-11-01-release136/build_release.ps1'
if ($LASTEXITCODE -ne 0) { throw 'APK build failed' }
python .codex-artifacts/2026-11-01-release136/sign_and_verify.py *> .codex-artifacts/2026-11-01-release136/sign-and-verify.log
if ($LASTEXITCODE -ne 0) { throw 'Signing or APK verification failed' }
Write-Output 'Original signing, native engine and APK contents verified.'
& 'D:/CodexCache/flutter-3.41.9/bin/flutter.bat' test --no-pub --flavor beta .codex-artifacts/2026-11-01-release136/verify_local_notes.dart *> .codex-artifacts/2026-11-01-release136/local-notes-check.log
if ($LASTEXITCODE -ne 0) { throw 'Actual APK notes verification failed' }
python .codex-artifacts/2026-11-01-release136/write_delivery_docs.py
if ($LASTEXITCODE -ne 0) { throw 'Delivery documents failed' }
python .codex-artifacts/2026-11-01-release136/freeze_source.py *> .codex-artifacts/2026-11-01-release136/freeze-source.log
if ($LASTEXITCODE -ne 0) { throw 'Source snapshot verification failed' }
python .codex-artifacts/2026-11-01-release136/finish_artifacts.py *> .codex-artifacts/2026-11-01-release136/finish-artifacts.log
if ($LASTEXITCODE -ne 0) { throw 'Final preservation verification failed' }
Write-Output '1.0.36 local APK/source delivery and preservation checks completed.'
