"""Verify original APK/ZIP identities, each frozen source file and secret exclusions."""
from __future__ import annotations

import hashlib
import json
from pathlib import Path
import re
import subprocess
import zipfile

from common import ROOT, OUT, ROWS, CERT, read_json, save, sha, safe_path

TOOLS = Path('D:/CodexCache/android-build/sdk/build-tools/35.0.0')
# This upstream tiny_http example key is an existing public test fixture, not
# an application credential. Accept only the same bytes already in v1.0.5.
PUBLIC_EXAMPLE_KEY = 'third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem'
PUBLIC_EXAMPLE_SHA = '94ee63a5d5aa109c05905d568cf0ba739dbd68a9025b2a0e6324445df0fc1c2e'


def android_tool(name, *args):
    return subprocess.check_output([str(TOOLS/name), *map(str, args)],
        stderr=subprocess.STDOUT).decode('utf-8', errors='replace')


def main():
    public_example = subprocess.check_output(['git', 'show', 'v1.0.5:'+PUBLIC_EXAMPLE_KEY], cwd=ROOT)
    assert hashlib.sha256(public_example).hexdigest() == PUBLIC_EXAMPLE_SHA
    verified = []
    for row in ROWS:
        apk = ROOT / row['apk']
        source = ROOT / row['zip']
        original_apk = read_json(ROOT/row['evidence']/'apk-verification.json')
        original_zip = read_json(ROOT/row['evidence']/'source-verification.json')
        assert sha(apk) == original_apk['sha256']
        assert sha(source) == original_zip['sha256']
        assert apk.stat().st_size == original_apk['size']
        assert source.stat().st_size == original_zip['size']
        badging = android_tool('aapt.exe', 'dump', 'badging', apk)
        assert f"package: name='com.mesting.music.beta' versionCode='{row['code']}' versionName='{row['version']}'" in badging
        assert "application-label:'Mesting Music'" in badging
        assert 'application-debuggable' not in badging
        signature = android_tool('apksigner.bat', 'verify', '--verbose', '--print-certs', apk)
        assert re.search(r'Signer #1 certificate SHA-256 digest: ([0-9a-fA-F]+)', signature)[1].upper() == CERT
        assert 'Verified using v2 scheme (APK Signature Scheme v2): true' in signature
        with zipfile.ZipFile(apk) as package:
            assert package.testzip() is None
            notes = json.loads(package.read('assets/flutter_assets/assets/data/release-notes.json'))
            assert notes['version'] == row['version'] and notes['versionCode'] == row['code']
        with zipfile.ZipFile(source) as archive:
            assert archive.testzip() is None
            names = archive.namelist()
            assert len(names) == len(set(names))
            snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
            assert snapshot['version'] == row['version'] and snapshot['versionCode'] == row['code']
            assert len(snapshot['files']) == original_zip['files']
            expected = {x['path']: x for x in snapshot['files']}
            assert set(names) == set(expected) | {'SOURCE-SNAPSHOT.json'}
            for name, item in expected.items():
                safe_path(name)
                data = archive.read(name)
                assert len(data) == item['size']
                assert hashlib.sha256(data).hexdigest().lower() == item['sha256'].lower(), name
                # Detect literal secret payloads without logging their contents.
                if re.search(rb'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----', data):
                    assert name == PUBLIC_EXAMPLE_KEY and hashlib.sha256(data).hexdigest() == PUBLIC_EXAMPLE_SHA, name
                assert not re.search(rb'github_pat_[A-Za-z0-9_]{60,}|gh[pousr]_[A-Za-z0-9]{36,}', data), name
            assert json.loads(archive.read('assets/data/release-notes.json')) == notes
            (OUT/f"{row['tag']}-source-manifest.json").write_bytes(archive.read('SOURCE-SNAPSHOT.json'))
        row.update({'apkSha256': sha(apk), 'apkBytes': apk.stat().st_size,
            'sourceHash': sha(source), 'sourceBytes': source.stat().st_size,
            'sourceFiles': len(expected), 'certificateSha256': CERT,
            'originalApkVerification': original_apk,
            'originalSourceVerification': original_zip,
            'notes': notes['releaseNotes']})
        verified.append(row)
        print(f"Verified {row['tag']}/code{row['code']}: {len(expected)} original source files, APK and ZIP hashes, original signature", flush=True)
    latest = verified[-1]
    before = read_json(OUT/'working-files-before.json')
    with zipfile.ZipFile(ROOT/latest['zip']) as archive:
        snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
        assert set(before) == {x['path'] for x in snapshot['files']}
        assert all(before[x['path']].lower() == x['sha256'].lower() for x in snapshot['files'])
    save(OUT/'verified-deliveries.json', verified)
    print('All current source bytes match frozen 1.0.10; no preexisting changes are lost.', flush=True)


if __name__ == '__main__':
    main()
