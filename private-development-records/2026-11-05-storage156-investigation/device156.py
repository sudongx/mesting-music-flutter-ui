"""Bounded, resumable device checks. Never clear or uninstall Mesting itself."""
from pathlib import Path
import datetime
import json
import re
import secrets
import subprocess
import sys

OUT = Path(__file__).resolve().parent
ADB = r'D:\CodexCache\android-build\sdk\platform-tools\adb.exe'
SERIAL = 'eb293ac2'
PROBE = 'com.mesting.music.storageprobe156'
STATE = OUT / 'upgrade-device-check.json'
state = json.loads(STATE.read_text('utf-8')) if STATE.exists() else {
    'startedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
    'freshNonce': secrets.token_hex(12), 'slotNonce': secrets.token_hex(12), 'events': []}

def run(*args, timeout=45):
    result = subprocess.run([ADB, '-s', SERIAL, *map(str, args)], capture_output=True,
                            text=True, encoding='utf-8', errors='replace', timeout=timeout)
    if args[:3] == ('shell', 'pm', 'path') and result.returncode == 1 and not result.stdout.strip() and not result.stderr.strip():
        return ''  # Android returns 1 when this exact package is not installed.
    if result.returncode:
        raise RuntimeError('Device command failed: ' + str(args[0]) + ': ' + result.stderr[-250:])
    return result.stdout

def save():
    STATE.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding='utf-8')

def probe(component, phase, nonce, extra=()):
    value = run('shell', 'am', 'instrument', '-w', '-r', '-e', 'phase', phase,
                '-e', 'nonce', nonce, *extra, PROBE + '/.' + component)
    tag = {'FreshKeyProbe': 'MESTING_FRESH_KEY_PROBE', 'NativeSlotProbe': 'MESTING_NATIVE_SLOT_PROBE',
           'ReadOnlyProbe': 'MESTING_STORAGE_PROBE'}[component]
    match = re.search(r'^INSTRUMENTATION_RESULT: ' + tag + r'=(.*)$', value, re.M)
    if not match:
        raise RuntimeError('Structured probe result missing: ' + value[-250:])
    report = json.loads(match[1])
    state['events'].append({'at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
                            'component': component, 'phase': phase, 'result': report})
    save()
    return report

def fresh_read_args():
    args = []
    for kind in ['rsa', 'aes']:
        row = state['freshCreated'][kind]
        args.extend(['-e', kind + 'Ciphertext', row['testCiphertext'],
                     '-e', kind + 'Expected', row['testPlaintextSha256']])
        if kind == 'aes': args.extend(['-e', 'aesIv', row['testIv']])
    return args

action = sys.argv[1]
if action == 'before':
    assert not run('shell', 'pm', 'path', PROBE).strip(), 'Inspect an existing helper before replacing it'
    assert 'Success' in run('install', '-t', '--no-streaming', OUT / 'readonly-storage-probe.apk')
    state['freshCreated'] = probe('FreshKeyProbe', 'create', state['freshNonce'])
    assert all(state['freshCreated'][kind].get('decryptSuccess') for kind in ['rsa', 'aes'])
    state['freshReadBeforeUpgrade'] = probe('FreshKeyProbe', 'read', state['freshNonce'], fresh_read_args())
    assert all(state['freshReadBeforeUpgrade'][kind].get('decryptSuccess') for kind in ['rsa', 'aes'])
elif action in ['upgrade', 'reinstall', 'upgrade-intermediate']:
    intermediate = action == 'upgrade-intermediate'
    candidate = OUT / ('Mesting-Music-v1.0.56-native-intermediate.apk' if intermediate else 'Mesting-Music-v1.0.56-device-candidate.apk')
    expected = json.loads((OUT / ('intermediate56-verification.json' if intermediate else 'candidate56-verification.json')).read_text('utf-8'))['sha256']
    assert candidate.exists()
    before = run('shell', 'pm', 'path', 'com.mesting.music').strip()
    assert 'Success' in run('install', '-r', '--no-streaming', candidate, timeout=60)
    path = next(x[8:] for x in run('shell', 'pm', 'path', 'com.mesting.music').splitlines() if x.endswith('/base.apk'))
    actual = run('shell', 'sha256sum', path).split()[0]
    assert actual == expected
    state[action] = {'installedApkSha256': actual, 'dataClear': False, 'targetUninstall': False}
    state['freshReadAfter' + action.title()] = probe('FreshKeyProbe', 'read', state['freshNonce'], fresh_read_args())
    assert all(state['freshReadAfter' + action.title()][kind].get('decryptSuccess') for kind in ['rsa', 'aes'])
elif action == 'native-create':
    result = probe('NativeSlotProbe', 'create', state['slotNonce'])
    assert result.get('freshNativeSaveSucceeded') and result.get('reopenedReadSucceeded'), result
elif action == 'fresh-read':
    result = probe('FreshKeyProbe', 'read', state['freshNonce'], fresh_read_args())
    assert all(result[kind].get('decryptSuccess') for kind in ['rsa', 'aes']), result
elif action == 'refresh-fixture':
    state.setdefault('oldFreshFixtures', []).append({'nonce': state['freshNonce'], 'created': state['freshCreated'],
        'limitation': 'User reinstalled52 and logged in between creation and first cover test; not controlled upgrade evidence.'})
    state['freshNonce'] = secrets.token_hex(12)
    state['freshCreated'] = probe('FreshKeyProbe', 'create', state['freshNonce'])
    assert all(state['freshCreated'][kind].get('decryptSuccess') for kind in ['rsa', 'aes'])
    result = probe('FreshKeyProbe', 'read', state['freshNonce'], fresh_read_args())
    assert all(result[kind].get('decryptSuccess') for kind in ['rsa', 'aes']), result
elif action == 'native-read':
    result = probe('NativeSlotProbe', 'read', state['slotNonce'])
    assert result.get('reopenedReadSucceeded'), result
elif action == 'native-tombstone':
    result = probe('NativeSlotProbe', 'tombstone', state['slotNonce'])
    assert result.get('tombstoneReadSucceeded'), result
elif action == 'readonly':
    report = probe('ReadOnlyProbe', 'inspect', state['freshNonce'])
    baseline = json.loads((OUT / 'device-raw-readonly-probe-second.json').read_text('utf-8'))
    report['originalSecureFilesUnchanged'] = all(
        v == report['filesBefore'].get(k) for k, v in baseline['filesBefore'].items()
        if k.startswith(('FlutterSecure', 'mesting_verified')))
    report['filesUnchangedDuringRead'] = report['filesBefore'] == report['filesAfter']
    (OUT / ('device-readonly-' + str(len(state['events'])) + '.json')).write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
elif action == 'cleanup':
    for old in state.get('oldFreshFixtures', []):
        result = probe('FreshKeyProbe', 'delete', old['nonce'])
        assert all(result[k].get('removed') for k in ['rsa', 'aes']), result
    if state.get('freshCreated'):
        result = probe('FreshKeyProbe', 'delete', state['freshNonce'])
        assert all(result[k].get('removed') for k in ['rsa', 'aes']), result
    result = probe('NativeSlotProbe', 'delete', state['slotNonce'])
    assert 'failureClass' not in result, result
    assert 'Success' in run('uninstall', PROBE)
    assert not run('shell', 'pm', 'path', PROBE).strip()
    run('shell', 'am', 'start', '-n', 'com.mesting.music/.CoralLauncher')
    state['cleanup'] = {'helperUninstalled': True, 'onlyOwnedSyntheticKeysDeleted': True,
                        'targetRelaunched': True, 'targetDataCleared': False}
else:
    raise RuntimeError('Unknown device-check action')
save()
print(json.dumps({'action': action, 'completed': True, 'eventsRetained': len(state['events'])}))
