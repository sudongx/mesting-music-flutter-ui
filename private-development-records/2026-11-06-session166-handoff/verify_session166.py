"""Read-only product/frozen-artifact audit for the documentation handoff.

Never rebuild a delivery, access a phone or change Git. Before/after records
belong only to this private handoff directory; frozen 66 records stay intact.
"""
import hashlib
import json
import os
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
RELEASE = ROOT/'.codex-artifacts/2026-11-06-release166'
HANDOFF = 'HANDOFF-SESSION-2026-11-06-v1.0.66-TO-NEW-CHAT.md'
os.environ['GIT_OPTIONAL_LOCKS'] = '0'


def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def git(*args):
    return subprocess.check_output(['git','--no-optional-locks',*args],cwd=ROOT)


def main():
    phase = sys.argv[1]
    assert phase in ('before','after')
    record_path = OUT/(phase+'.json')
    assert not record_path.exists(), 'Do not overwrite a handoff receipt'
    release = json.loads((RELEASE/'after.json').read_text('utf-8'))
    assert len(release['frozenArtifacts'])==72
    issues = []
    for row in release['frozenArtifacts']:
        p=ROOT/row['path']
        if not p.is_file() or p.stat().st_size!=row['bytes'] or digest(p)!=row['sha256']:
            issues.append(row['path'])
    assert not issues, issues
    for row in release['productFiles']:
        assert digest(ROOT/row['path'])==row['sha256'], row['path']
    head=git('rev-parse','HEAD').decode().strip()
    branch=git('branch','--show-current').decode().strip()
    index=digest(ROOT/'.git/index')
    assert head==release['head'] and branch==release['branch'] and index==release['indexSha256']
    assert not git('diff','--cached','--name-only').strip()
    assert digest(ROOT/'pubspec.lock')==release['lockSha256']
    assert digest(ROOT/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')==release['signingSha256']

    # Source bytes frozen into 66 must still match before this documentation
    # change. Afterward only the explicitly prepended AGENTS entry may differ.
    frozen_source_deltas=[]
    for row in release['sourceFiles']:
        p=ROOT/row['path']
        assert p.is_file(), row['path']
        if digest(p)!=row['sha256']:
            frozen_source_deltas.append(row['path'])
    assert frozen_source_deltas == ([] if phase=='before' else ['AGENTS.md'])

    rows=[]
    selected=git('ls-files','--cached','--others','--exclude-standard','-z').decode('utf-8').split('\0')
    forbidden={'.git','.codex-artifacts','.codex-temp','.codex-backups','.dart_tool','.gradle','.kotlin','build','node_modules','.firecrawl'}
    for relative in sorted(set(selected)):
        p=ROOT/relative
        if not relative or not p.is_file() or p.is_symlink():
            continue
        parts=set(Path(relative).parts)
        if parts & forbidden or relative.startswith('.impeccable/review/'):
            continue
        if p.suffix.lower() in {'.apk','.aab','.keystore','.jks','.p12','.pfx'}:
            continue
        if p.suffix.lower()=='.zip' and relative!='test/support/release_notes_apk_fixture.zip':
            continue
        if p.name.lower() in {'key.properties','local.properties','.env'}:
            continue
        if p.name.lower().startswith('.env.') and p.name.lower() not in {'.env.example','.env.sample'}:
            continue
        rows.append({'path':relative,'bytes':p.stat().st_size,'sha256':digest(p)})
    if phase=='before':
        (OUT/'AGENTS-before.md').write_bytes((ROOT/'AGENTS.md').read_bytes())
    else:
        before=json.loads((OUT/'before.json').read_text('utf-8'))
        current={r['path']:r for r in rows}
        deltas=[r['path'] for r in before['currentFiles'] if r['path'] not in current or current[r['path']]['sha256']!=r['sha256']]
        added=sorted(set(current)-{r['path'] for r in before['currentFiles']})
        assert deltas==['AGENTS.md'] and added==[HANDOFF], (deltas,added)
        assert (ROOT/'AGENTS.md').read_bytes().endswith((OUT/'AGENTS-before.md').read_bytes())
    feedback=json.loads((RELEASE/'user66-feedback.json').read_text('utf-8'))
    assert feedback['mestingProfileDisplayed'] and feedback['userFullCloseReopenAccepted'] and feedback['netEasePreviewAutoSourceAccepted']
    status=git('status','--porcelain=v1','-z')
    (OUT/('git-status-'+phase+'.nul')).write_bytes(status)
    data={
        'recordedAtUtc':datetime.now(timezone.utc).isoformat(),'phase':phase,
        'version':'1.0.66','androidVersionCode':87,'head':head,'branch':branch,
        'indexSha256':index,'indexEmpty':True,'lockSha256':release['lockSha256'],
        'signingSha256':release['signingSha256'],'frozenArtifacts':release['frozenArtifacts'],
        'frozenArtifactIssues':[],'protectedCount':72,'productFiles':release['productFiles'],
        'productInputsMatch66':True,'currentFiles':rows,'currentFileCount':len(rows),
        'frozen66SourceFiles':release['sourceFiles'],'postFreezeDocumentationDeltas':frozen_source_deltas,
        'realQrAccountAccepted':True,'userFullCloseReopenAccepted':True,
        'restoreEvidence':feedback['restoreEvidence'],'netEasePreviewAutoSourceAccepted':True,
        'acceptanceReceipt':'.codex-artifacts/2026-11-06-release166/user66-feedback.json',
        'lastAuthorizedDeviceRead':'1.0.66/code87; no new device access during handoff',
        'phoneLoginRemoved':True,'sms2156Resolved':False,'smsRouteRetiredByUser':True,
        'fullQishuiMediaBenefitsDspAccepted':False,'source63ZipExists':(ROOT/'Mesting-Music-v1.0.63-source.zip').exists(),
        'handoff':HANDOFF if phase=='after' else None,
        'handoffSha256':digest(ROOT/HANDOFF) if phase=='after' else None,
        'agentInstructionsSha256':digest(ROOT/'AGENTS.md'),
        'gitStatusSha256':hashlib.sha256(status).hexdigest(),
        'productCodeChangedThisHandoff':False,'testsOrBuildsRunThisHandoff':False,
        'phoneOrAccountAccessThisHandoff':False,'gitCommitted':False,'gitPushed':False,'published':False,
    }
    record_path.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n','utf-8')
    print({'phase':phase,'protectedArtifactsChecked':72,'productInputsMatched':len(release['productFiles']),
           'currentFiles':len(rows),'frozen66DocDeltas':frozen_source_deltas,'indexUnchangedAndEmpty':True})


if __name__=='__main__':
    main()
