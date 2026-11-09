"""Receive the frozen 65 checkout before any 66 product mutation.

Retain every pre-existing source byte and all 70 protected deliveries. Reuse
only check/build entry points; previous test results are never counted anew.
"""
import hashlib
import json
import shutil
import subprocess
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
PRIOR = OUT.parent/'2026-11-06-release165'


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def main():
    assert not (OUT/'baseline.json').exists()
    before = json.loads((PRIOR/'after.json').read_text('utf-8'))
    assert len(before['frozenArtifacts']) == 70
    for row in before['frozenArtifacts']:
        path = ROOT/row['path']
        assert path.stat().st_size == row['bytes'] and digest(path) == row['sha256'], row['path']
    for row in before['productFiles']:
        assert digest(ROOT/row['path']) == row['sha256'], row['path']
    for row in before['sourceFiles']:
        path = ROOT/row['path']
        target = OUT/'before'/row['path']
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(path, target)
        assert digest(target) == digest(path)
    assert digest(ROOT/'pubspec.lock') == before['lockSha256']
    assert digest(ROOT/'.git/index') == before['indexSha256']
    assert subprocess.check_output(['git','rev-parse','HEAD'], cwd=ROOT).decode().strip() == before['head']
    assert not subprocess.check_output(['git','diff','--cached','--name-only'], cwd=ROOT).strip()
    before['receivedFor66AtUtc'] = datetime.now(timezone.utc).isoformat()
    (OUT/'baseline.json').write_text(json.dumps(before, ensure_ascii=False, indent=2), 'utf-8')
    (OUT/'git-status-before.nul').write_bytes(subprocess.check_output(
        ['git','--no-optional-locks','status','--porcelain=v1','-z'], cwd=ROOT))
    (OUT/'protected-state.json').write_text(json.dumps({
        k:before[k] for k in ('lockSha256','signingSha256')}, indent=2), 'utf-8')
    for suite in ('beta','stable','navigation'):
        shutil.copyfile(PRIOR/(suite+'-files.json'), OUT/(suite+'-files.json'))
    for name in ('record_build_inputs.py','build165.ps1','run_checks.ps1',
                 'sign_and_verify165.py','freeze_source165.py','verify_native_packaging165.py',
                 'summarize_tests.py','run_ui165.ps1','install165.py'):
        text = (PRIOR/name).read_text('utf-8-sig')
        text = text.replace('release165','release166').replace('1.0.65','1.0.66')
        text = text.replace('VersionCode 86','VersionCode 87').replace("versionCode='86'", "versionCode='87'")
        text = text.replace("'androidVersionCode': 86", "'androidVersionCode': 87")
        text = text.replace("['versionCode'] == 86", "['versionCode'] == 87")
        text = text.replace("'code': 86", "'code': 87").replace('1.0.66+86','1.0.66+87')
        text = text.replace('== 86','== 87').replace('code86','code87')
        text = text.replace('Current65','Current66').replace('current65','current66')
        (OUT/name.replace('165','166')).write_text(text, 'utf-8')
    (OUT/'authorization.json').write_text(json.dumps({
        'decision':'Remove phone login; Qishui official-app QR only; align myMusic and build/install 1.0.66 retaining data',
        'phoneSmsInvestigationStoppedByUser':True,
        'originalSigningAndAccountsRetained':True,'gitPublicationAuthorized':False,
        'researchSources':{
            'myMusic':'9c0f1f0ccb1b1046306f61c50998e327c040a6bc',
            'SodaM':'f43a22b6239e4fb6c4c099566f6722bcecfb9b60',
            'libresoda':'5edd2ff3b825f0a16b1e281204822ee06842df9c'}},indent=2), 'utf-8')
    print({'protected':70,'productInputsMatched':len(before['productFiles']),
           'preExistingSourcesCopied':len(before['sourceFiles']),'indexUnchanged':True})


if __name__ == '__main__':
    main()
