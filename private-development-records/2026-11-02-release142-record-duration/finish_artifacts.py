"""Read back immutable deliverables, preserve old freezes, and emit checksums."""
from pathlib import Path
import hashlib
import json
import subprocess
import zipfile

root=Path('D:/AnLi');out=root/'.codex-artifacts/2026-11-02-release142-record-duration'
def read(path): return json.loads(path.read_text(encoding='utf-8'))
def digest(path):
    with path.open('rb') as stream: return hashlib.file_digest(stream,'sha256').hexdigest()

apk=read(root/'release/Mesting-Music-v1.0.42-verification.json')
source=read(root/'release/Mesting-Music-v1.0.42-source-verification.json')
assert digest(root/'release'/apk['file'])==apk['sha256']
assert digest(root/source['sourceZipName'])==source['sourceZipSha256']
with zipfile.ZipFile(root/source['sourceZipName']) as archive:
    assert archive.testzip() is None
    manifest=json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert manifest['version']=='1.0.42' and manifest['androidVersionCode']==63
    assert len(manifest['files'])==source['sourceFileCount']
    for item in manifest['files']:
        assert digest(root/item['path'])==item['sha256'],item['path']
    for path in ['docs/INSTALL-v1.0.42.md','lib/features/music_platform/netease/together/together_records_page.dart',
                 'lib/shared/widgets/beta_music_chrome_scope.dart','assets/data/release-notes.json','pubspec.yaml']:
        assert archive.read(path)==(root/path).read_bytes(),path
    assert not any('.codex-artifacts' in path or '.firecrawl' in path for path in archive.namelist())

old=read(out/'frozen-before.json')
for row in old:
    path=Path(row['path'])
    assert path.stat().st_size==row['bytes'] and digest(path)==row['sha256'],row['path']
assert digest(root/'pubspec.lock')=='6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
key=root/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore'
assert digest(key)==read(root/'.codex-artifacts/2026-11-01-release129/signing-material-before.json')['sha256']
head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip()
branch=subprocess.check_output(['git','branch','--show-current'],cwd=root,text=True).strip()
assert branch=='beta' and head=='b6bcd5425e0df3e03febdd460b56d0ed42004c52'
assert not subprocess.check_output(['git','diff','--cached','--name-only'],cwd=root).strip()
with zipfile.ZipFile(out/'source-before-private.zip') as before:
    assert (root/'AGENTS.md').read_bytes().endswith(before.read('AGENTS.md'))
checks=read(out/'host-check-summary.json')
assert checks['analysisPassed'] and all(checks[name]['completeAndSuccessful'] for name in (
    'beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl'))
assert read(out/'local-apk-notes-verification.json')['versionCode']==63
checksum=root/'release/Mesting-Music-v1.0.42-SHA256.txt'
assert not checksum.exists()
checksum.write_text(apk['sha256']+'  '+apk['file']+'\n'+source['sourceZipSha256']+'  '+source['sourceZipName']+'\n'+
    'APK bytes: '+str(apk['fileSize'])+'\nSource ZIP bytes: '+str(source['sourceZipSize'])+'\n',encoding='utf-8')
status=subprocess.check_output(['git','status','--porcelain=v1','--untracked-files=all'],cwd=root,text=True).splitlines()
result={'version':'1.0.42','androidCode':63,
    'apk':{'path':'release/'+apk['file'],'bytes':apk['fileSize'],'sha256':apk['sha256']},
    'source':{'path':source['sourceZipName'],'bytes':source['sourceZipSize'],
              'sha256':source['sourceZipSha256'],'files':source['sourceFileCount']},
    'allWorkingEntriesMatchFrozenSource':True,'previousFrozenFilesUnchanged':len(old),
    'originalSigningKeyAndLockUnchanged':True,'previousAgentsBytesRetainedAsSuffix':True,
    'branch':branch,'head':head,'stagedPaths':[],
    'trackedChanges':sum(not s.startswith('??') for s in status),'untrackedFiles':sum(s.startswith('??') for s in status),
    'experimentalNativePlaybackDisabled':True,'newPlaybackUsesLegacyWeblog':True,
    'phoneUsed':False,'realAccountAcceptance':False,'neteaseProfileHistoryTotalFixed':False,
    'togetherReportUsesSeconds':True,'togetherHistoryRetainsMilliseconds':True,
    'playerChromeViewOwnershipAndPopupObserversAdded':True,
    'pairedSyncCases':8,'realTwoDeviceSyncAccepted':False,
    'published':False,'gitCommitted':False,'gitPushed':False}
(out/'delivery-final.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
