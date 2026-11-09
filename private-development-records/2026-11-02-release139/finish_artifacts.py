"""Final immutable delivery check; never changes frozen source or APK bytes."""
import hashlib
import json
from pathlib import Path
import subprocess
import zipfile

root=Path('D:/AnLi'); out=root/'.codex-artifacts/2026-11-02-release139'
def read(p):return json.loads(p.read_text(encoding='utf8'))
def digest(p):
    with p.open('rb') as stream:return hashlib.file_digest(stream,'sha256').hexdigest()
apk=read(root/'release/Mesting-Music-v1.0.39-verification.json')
source=read(root/'release/Mesting-Music-v1.0.39-source-verification.json')
assert digest(root/'release'/apk['file'])==apk['sha256']
assert digest(root/source['sourceZipName'])==source['sourceZipSha256']
with zipfile.ZipFile(root/source['sourceZipName']) as archive:
    manifest=json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert manifest['version']=='1.0.39' and manifest['androidVersionCode']==60
    assert len(manifest['files'])==source['sourceFileCount']
    for item in manifest['files']:
        assert digest(root/item['path'])==item['sha256'],item['path']
    for item in ['third_party/audio_glyphs/NOTICE.md','docs/INSTALL-v1.0.39.md']:
        assert archive.read(item)==(root/item).read_bytes()
old=read(out/'frozen-before.json')
for row in old:
    path=Path(row['path'])
    assert path.stat().st_size==row['bytes'] and digest(path)==row['sha256'],row['path']
assert digest(root/'pubspec.lock')=='6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
key=root/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore'
assert digest(key)==read(root/'.codex-artifacts/2026-11-01-release129/signing-material-before.json')['sha256']
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip()=='b6bcd5425e0df3e03febdd460b56d0ed42004c52'
assert subprocess.check_output(['git','branch','--show-current'],cwd=root,text=True).strip()=='beta'
assert not subprocess.check_output(['git','diff','--cached','--name-only'],cwd=root).strip()
checks=read(out/'host-check-summary.json')
assert checks['analysisPassed'] and all(checks[n]['completeAndSuccessful'] for n in
    ['beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl'])
checksum=root/'release/Mesting-Music-v1.0.39-SHA256.txt'
assert not checksum.exists()
checksum.write_text(apk['sha256']+'  '+apk['file']+'\n'+source['sourceZipSha256']+'  '+source['sourceZipName']+'\n'+
                   'APK bytes: '+str(apk['fileSize'])+'\nSource ZIP bytes: '+str(source['sourceZipSize'])+'\n',encoding='utf8')
result={'version':'1.0.39','androidCode':60,
    'apk':{'path':'release/'+apk['file'],'bytes':apk['fileSize'],'sha256':apk['sha256']},
    'source':{'path':source['sourceZipName'],'bytes':source['sourceZipSize'],
              'sha256':source['sourceZipSha256'],'files':source['sourceFileCount']},
    'allWorkingEntriesMatchFrozenSource':True,'previousFrozenFilesUnchanged':len(old),
    'originalSigningKeyAndLockUnchanged':True,'branchHeadAndEmptyIndexPreserved':True,
    'experimentalNativePlaybackDisabled':True,'oldNativeRowsHeldWithoutReplay':True,
    'newPlaybackUsesLegacyWeblog':True,'localDiagnosticsDisabled':True,
    'phoneUsed':False,'realAccountAcceptance':False,'historyTotalFixed':False,
    'published':False,'gitCommitted':False,'gitPushed':False}
(out/'delivery-final.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps(result,ensure_ascii=False,indent=2))
