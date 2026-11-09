"""Reuse check entry points, never previous results or frozen deliveries."""
import json
from pathlib import Path

out = Path(__file__).resolve().parent
prior = out.parent / '2026-11-06-release164'
for suite in ('beta', 'stable', 'navigation'):
    files = json.loads((prior / f'{suite}-files.json').read_text('utf-8-sig'))
    if suite == 'beta':
        files.append('test/release_165_preview_playback_test.dart')
    assert len(set(files)) == len(files)
    (out / f'{suite}-files.json').write_text(json.dumps(files, indent=2), 'utf-8')
protected = json.loads((out / 'baseline.json').read_text('utf-8'))
(out / 'protected-state.json').write_text(json.dumps({
    key: protected[key] for key in ('lockSha256', 'signingSha256')
}, indent=2), 'utf-8')
for name in ('record_build_inputs.py', 'verify_native_packaging164.py'):
    text = (prior / name).read_text('utf-8').replace('1.0.64', '1.0.65')
    (out / name.replace('164', '165')).write_text(text, 'utf-8')
for name in ('sign_and_verify164.py', 'freeze_source164.py'):
    text = (prior / name).read_text('utf-8').replace('1.0.64', '1.0.65')
    text = text.replace("versionCode='85'", "versionCode='86'")
    text = text.replace("'androidVersionCode': 85", "'androidVersionCode': 86")
    text = text.replace("['versionCode'] == 85", "['versionCode'] == 86")
    text = text.replace("'code': 85", "'code': 86").replace('1.0.65+85', '1.0.65+86')
    # This release has authorized read-only phone/APK investigation; no account
    # data or SMS was accessed by the agent. Keep these facts distinct.
    text = text.replace("'deviceAccess': False", "'deviceAccess': True")
    text = text.replace("'Local build only; user performs actual device acceptance'",
        "'Authorized package metadata and public APK read; 65 business acceptance pending'")
    (out / name.replace('164', '165')).write_text(text, 'utf-8')
build = (prior / 'build164.ps1').read_text('utf-8').replace('release164', 'release165')
build = build.replace('1.0.64', '1.0.65').replace('-VersionCode 85', '-VersionCode 86')
(out / 'build165.ps1').write_text(build, 'utf-8')
print({suite: len(json.loads((out / f'{suite}-files.json').read_text('utf-8')))
       for suite in ('beta', 'stable', 'navigation')})
