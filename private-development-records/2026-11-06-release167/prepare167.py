"""Preserve the accepted 66 dirty workspace before the authorized 67 changes.

This is a new private receipt, never an update to a frozen release receipt.
No checkout, cleanup, signing material copy, device or network operation occurs.
"""
import hashlib
import json
import os
import shutil
import subprocess
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
os.environ['GIT_OPTIONAL_LOCKS'] = '0'


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def main():
    assert not (OUT/'baseline.json').exists(), 'Do not overwrite a receipt'
    prior = json.loads((ROOT/'.codex-artifacts/2026-11-06-session166-handoff/after.json').read_text('utf-8'))
    for row in prior['frozenArtifacts']:
        path = ROOT/row['path']
        assert path.stat().st_size == row['bytes'] and digest(path) == row['sha256'], row['path']
    for row in prior['currentFiles']:
        path = ROOT/row['path']
        assert path.stat().st_size == row['bytes'] and digest(path) == row['sha256'], row['path']
        target = OUT/'before'/row['path']
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(path, target)
    assert digest(ROOT/'.git/index') == prior['indexSha256']
    assert digest(ROOT/'pubspec.lock') == prior['lockSha256']
    assert digest(ROOT/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == prior['signingSha256']
    prior['receivedFor67AtUtc'] = datetime.now(timezone.utc).isoformat()
    (OUT/'baseline.json').write_text(json.dumps(prior, ensure_ascii=False, indent=2), 'utf-8')
    (OUT/'git-status-before.nul').write_bytes(subprocess.check_output(['git','--no-optional-locks','status','--porcelain=v1','-z'], cwd=ROOT))
    (OUT/'authorization.json').write_text(json.dumps({
        'version': '1.0.67+88',
        'officialQishuiAudioOnly': True,
        'qishuiMineAndPlaylistLayout': True,
        'allPicturedPlaylistMutationsRequested': True,
        'hideMusicRootMiniPlayerAndUseTitleDropdownQishuiOnly': True,
        'necessaryRedactedDeviceDiagnosticsAndPublicApkReaAuthorized': True,
        'retainDataOverlayInstallAuthorized': True,
        'accountConfirmationAndRealPlaylistChangesRemainUserOperated': True,
        'phoneLoginRetired': True,
        'gitPublicationAuthorized': False,
    }, indent=2), 'utf-8')
    print({'protectedArtifacts': len(prior['frozenArtifacts']), 'preservedCurrentFiles': len(prior['currentFiles']), 'indexUnchanged': True})


if __name__ == '__main__':
    main()
