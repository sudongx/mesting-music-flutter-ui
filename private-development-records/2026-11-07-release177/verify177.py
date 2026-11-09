"""Local preservation receipt; does not build/test or contact devices/services."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from datetime import datetime, timezone
import hashlib,json,subprocess,sys

R=Path('D:/AnLi'); O=Path(__file__).resolve().parent
def sha(p):
    with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
def git(*args):return subprocess.check_output(['git','--no-optional-locks',*args],cwd=R).decode('utf8')
def mismatch(row):
    p=R/row['path'];return not p.is_file() or sha(p)!=row['sha256']

b=json.loads((O/'before.json').read_text('utf8'))
assert git('branch','--show-current').strip()==b['branch']=='beta'
assert git('rev-parse','HEAD').strip()==b['head']
assert not git('diff','--cached','--name-only')
for key,path in [('indexSha256','.git/index'),('lockSha256','pubspec.lock'),
    ('signingSha256','.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(R/path)==b[key],key
assert sha(R/b['previousReceipt'])==b['previousReceiptSha256']
with ThreadPoolExecutor(max_workers=5) as pool:
    assert not any(pool.map(mismatch,b['frozenArtifacts']))
assert not any((R/p).exists() for p in b['authorizedRetiredPaths'])
allowed={
 'AGENTS.md','CHANGELOG.md','pubspec.yaml','assets/data/release-notes.json',
 'lib/app/mesting_music_app.dart',
 'third_party/qishui_official_media/NOTICE.md',
 'test/qishui_api173_test.dart','test/qishui_search173_test.dart','test/qishui_search173_ui_test.dart',
 'android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java',
 *['lib/features/music_platform/qishui/'+p+'.dart' for p in [
   'qishui_api','qishui_image_upload','qishui_mine_widgets','qishui_request_signer',
   'qishui_search_catalog','qishui_web_routes','qishui_repository','qishui_browse_cache','qishui_pages']],
}
with ThreadPoolExecutor(max_workers=5) as pool:
    changed=[row['path'] for row,diff in zip(b['currentFiles'],pool.map(mismatch,b['currentFiles'])) if diff]
assert set(changed)<=allowed,sorted(set(changed)-allowed)
assert not [row['path'] for row in b['currentFiles'] if not (R/row['path']).is_file()]
if (O/'AGENTS-before.bin').exists():
    assert (R/'AGENTS.md').read_bytes().endswith((O/'AGENTS-before.bin').read_bytes())

mode=sys.argv[1] if len(sys.argv)>1 else 'check'
if mode=='freeze':
    assert not (O/'after.json').exists()
    selected=sorted({p for p in git('ls-files','--cached','--others','--exclude-standard','-z').split('\0')
        if p and not p.startswith('android/build/') and (R/p).is_file()})
    current=[{'path':p,'bytes':(R/p).stat().st_size,'sha256':sha(R/p)} for p in selected]
    artifacts=b['frozenArtifacts']+[{'path':p,'bytes':(R/p).stat().st_size,'sha256':sha(R/p)} for p in
        ['release/Mesting-Music-v1.0.77.apk','Mesting-Music-v1.0.77-source.zip']]
    record={'createdAtUtc':datetime.now(timezone.utc).isoformat(),'version':'1.0.77','androidVersionCode':98,
        **{k:b[k] for k in ['head','branch','indexSha256','lockSha256','signingSha256']},
        'frozenArtifacts':artifacts,'currentFiles':current,
        'productFiles':json.loads((O/'candidate1/build-input.json').read_text('utf8'))['files'],
        'authorizedRetiredPaths':b['authorizedRetiredPaths'],'allowedOldFileChanges':sorted(allowed),
        'actualOldFilesChanged':changed,'phoneAdbAccountOrNasAccess':False,
        'officialBusinessAcceptanceVerified':False,'durationCreditingVerified':False,
        'pendingRuntimeTasks':False,'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False}
    (O/'after.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
elif mode=='check' and (O/'after.json').exists():
    a=json.loads((O/'after.json').read_text('utf8'))
    for key in ['currentFiles','productFiles','frozenArtifacts']:
        with ThreadPoolExecutor(max_workers=5) as pool:assert not any(pool.map(mismatch,a[key])),key
    assert 'version: 1.0.77+98' in (R/'pubspec.yaml').read_text('utf8')
    print(json.dumps({'verified':True,'version':'1.0.77','code':98,'frozenArtifacts':len(a['frozenArtifacts']),
        'currentFiles':len(a['currentFiles']),'productInputs':len(a['productFiles']),
        'retiredPathsAbsent':len(b['authorizedRetiredPaths']),'headIndexLockSigningAndOldArtifactsUnchanged':True,
        'deviceAccess':False,'officialDurationCreditingVerified':False,'pendingRuntimeTasks':False},indent=2))
else:
    print(json.dumps({'preservationPassed':True,'oldArtifacts':len(b['frozenArtifacts']),'oldFilesChanged':changed},ensure_ascii=False))
