"""Read-only inventory of immutable formal deliveries and live GitHub state."""
from pathlib import Path, PurePosixPath
from datetime import datetime, timezone
import hashlib, json, os, re, subprocess, sys, zipfile

ROOT=Path('D:/AnLi'); OUT=Path(__file__).resolve().parent
sys.path.insert(0,str(ROOT/'.codex-artifacts/2026-10-30-github-119-122'))
from github_transport import credentials, request

def git(*args):
    env=dict(os.environ,GIT_OPTIONAL_LOCKS='0',GIT_TERMINAL_PROMPT='0',GCM_INTERACTIVE='Never')
    return subprocess.check_output(['git',*args],cwd=ROOT,env=env)
def read(path): return json.loads(Path(path).read_text('utf-8-sig'))
def sha(path):
    with Path(path).open('rb') as stream: return hashlib.file_digest(stream,'sha256').hexdigest()
def save(name,data):
    (OUT/name).write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n','utf-8')
def safe(name):
    p=PurePosixPath(name)
    assert not p.is_absolute() and '..' not in p.parts and '\\' not in name,name
    assert not set(x.lower() for x in p.parts).intersection({'.git','.codex-artifacts','.codex-backups','.codex-temp','.dart_tool','.gradle','.kotlin','build','node_modules','.firecrawl'}),name
    assert p.suffix.lower() not in {'.apk','.aab','.jks','.keystore','.p12','.pfx'},name
    assert p.suffix.lower()!='.zip' or name=='test/support/release_notes_apk_fixture.zip',name
    assert p.name.lower() not in {'key.properties','local.properties','credentials.json','token.json'},name
    assert not p.name.startswith('.env') or p.name in {'.env.example','.env.sample'},name

OUT.mkdir(parents=True,exist_ok=True)
headers=credentials()
releases=[]
for page in range(1,21):
    rows=request(headers,'GET',f'/repos/Mesting42/mesting-music-flutter/releases?per_page=100&page={page}')
    releases+=rows
    if len(rows)<100: break
else: raise AssertionError('Release pagination budget exceeded')
repo=request(headers,'GET','/repos/Mesting42/mesting-music-flutter')
remote={line.split('\t')[1]:line.split('\t')[0] for line in git('ls-remote','--heads','--tags','origin').decode().splitlines()}
save('remote-before.json',{'observedAtUtc':datetime.now(timezone.utc).isoformat(),'repository':repo['full_name'],'public':not repo['private'],'defaultBranch':repo['default_branch'],'permissions':repo['permissions'],'refs':remote,'releases':releases})
upstream_fixture=git('show','HEAD:third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem')
inventory=[]
for patch in range(50,61):
    version=f'1.0.{patch}'; tag='v'+version
    apk=ROOT/'release'/f'Mesting-Music-{tag}.apk'
    source=ROOT/f'Mesting-Music-{tag}-source.zip'
    a=read(ROOT/'release'/f'Mesting-Music-{tag}-verification.json')
    s=read(ROOT/'release'/f'Mesting-Music-{tag}-source-verification.json')
    assert sha(apk)==a['sha256'] and sha(source)==s['sourceZipSha256'],version
    assert a['certificateSha256']=='8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'
    assert a['packageName']=='com.mesting.music'
    entries={}
    with zipfile.ZipFile(source) as archive:
        names=archive.namelist(); assert len(names)==len(set(names))
        manifest=read_manifest=json.loads(archive.read('SOURCE-SNAPSHOT.json'))
        assert manifest['version']==version and manifest['androidVersionCode']==a['androidVersionCode']
        assert manifest['apkSha256']==a['sha256']
        declared={row['path']:row for row in manifest['files']}
        for name in names:
            safe(name); data=archive.read(name)
            assert len(data)<100*1024*1024,('GitHub blob limit',name)
            digest=hashlib.sha256(data).hexdigest()
            if name in declared:
                assert digest==declared[name]['sha256'],(version,name)
                assert len(data)==declared[name]['size'],(version,name)
            if re.search(br'-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----',data):
                assert (name=='third_party/md3music/rust/vendor/tiny_http/examples/ssl-key.pem' and data==upstream_fixture) or (name=='test/support/tls155/public-test-key.pem' and data==(ROOT/name).read_bytes()),(version,name)
            assert not re.search(br'(?:ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{50,})',data),(version,name,'credential-like token')
            entries[name]={'size':len(data),'sha256':digest}
        assert set(declared).issubset(entries)
        assert len(entries)==s['frozenEntryCount'] and len(declared)==s['sourceFileCount']
        pubspec=archive.read('pubspec.yaml').decode('utf-8-sig')
        pubspec_version=next(line.split(':',1)[1].strip() for line in pubspec.splitlines() if line.startswith('version:'))
        # Versions 25--36 deliberately kept the shared Stable pubspec at
        # 1.0.37+58. Their public Beta identity came from the release build
        # arguments and bundled notes, as documented in their handoffs.
        assert pubspec_version==(f'{version}+{a["androidVersionCode"]}' if patch>=37 else '1.0.37+58'),(version,pubspec_version)
        source_notes=json.loads(archive.read('assets/data/release-notes.json'))
        assert source_notes['version']==version and source_notes['versionCode']==a['androidVersionCode']
    with zipfile.ZipFile(apk) as archive:
        apk_notes=json.loads(archive.read('assets/flutter_assets/assets/data/release-notes.json'))
        assert apk_notes==source_notes,(version,'Packaged release identity')
    assets=[apk,source,*[ROOT/'release'/f'Mesting-Music-{tag}{suffix}' for suffix in ['-verification.json','-source-verification.json','.apk.sha256','-source.sha256','-SHA256.txt']]]
    install=ROOT/'docs'/f'INSTALL-{tag}.md'
    if install.is_file():assets.append(install)
    # Only the exact final-version suffix is eligible; diagnostic/candidate
    # guide names cannot be picked up by a broad v1.0.45* glob.
    assets.extend((ROOT/'docs').glob(f'validation-*-{tag}.json'))
    assets.extend((ROOT/'docs').glob(f'fixes-*-{tag}.md'))
    assets.extend(ROOT.glob(f'HANDOFF-CURRENT-SESSION-*-{tag}.md'))
    assets=list(dict.fromkeys(path for path in assets if path.is_file()))
    assert len({path.name for path in assets})==len(assets),version
    row={'version':version,'tag':tag,'code':a['androidVersionCode'],'packageName':a['packageName'],'sourcePubspecVersion':pubspec_version,'packagedNotesMatchSource':True,'apkSha256':a['sha256'],'sourceSha256':s['sourceZipSha256'],'sourceEntries':len(entries),'sourceFiles':len(declared),'existingTag':remote.get('refs/tags/'+tag),'existingRelease':next((x['id'] for x in releases if x['tag_name']==tag),None),'assets':[{'path':str(path),'name':path.name,'sha256':sha(path),'size':path.stat().st_size} for path in assets]}
    assert not row['existingTag'] and row['existingRelease'] is None,version
    save(f'{tag}-source-audit.json',entries)
    inventory.append(row)
    save('inventory.json',{'complete':False,'versions':inventory})
    print(json.dumps({'verified':version,'code':row['code'],'sourceEntries':len(entries),'assets':len(assets)}),flush=True)
report={'complete':True,'versions':inventory,'formalVersionsToArchive':len(inventory),'totalAssets':sum(len(x['assets']) for x in inventory),'totalUploadBytes':sum(y['size'] for x in inventory for y in x['assets']),'gitHubReleasesWillBeStable':True,'latestTag':'v1.0.60','grouping':'actual Android installation channel; numeric descending within channel','privateV138AndV145CandidatesExcluded':True,'primaryWorkspaceWillBePreserved':True}
save('inventory.json',report)
print(json.dumps({k:v for k,v in report.items() if k!='versions'},ensure_ascii=False,indent=2))
