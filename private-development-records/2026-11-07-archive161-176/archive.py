"""Version archives in an isolated bare repository; primary checkout is read-only."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor,as_completed
import sys,os,json,hashlib,subprocess,zipfile,re,time,threading
ROOT=Path('D:/AnLi');OUT=Path(__file__).resolve().parent
sys.path.insert(0,str(ROOT/'.codex-artifacts/2026-11-05-github-gitee-150-160'))
import common160 as C
C.OUT=OUT;C.BARE=OUT/'repository.git'
git=C.git;save=C.save;read=C.read;sha=C.sha;REPO=C.REPO
URLS={h:f'https://{h}.com/{REPO}.git' for h in ['github','gitee']}
def refs(h):return {l.split()[1]:l.split()[0] for l in git('ls-remote','--heads','--tags',URLS[h]).decode().splitlines()}
def preserve(strict=True):
    old=read(ROOT/'.codex-artifacts/2026-11-07-session176-handoff/after.json')
    def primary(*a):return subprocess.check_output(['git','--no-optional-locks',*a],cwd=ROOT)
    assert primary('rev-parse','HEAD').decode().strip()==old['head']
    assert primary('branch','--show-current').decode().strip()=='beta'
    assert not primary('diff','--cached','--name-only')
    assert sha(ROOT/'.git/index')==old['indexSha256']
    changed={}
    for category in ['currentFiles','frozenArtifacts','productFiles']:
        changed[category]=[]
        for row in old[category]:
            path=ROOT/row['path']
            current=sha(path) if path.is_file() else None
            if current!=row['sha256']:
                changed[category].append({'path':row['path'],'expectedSha256':row['sha256'],'currentSha256':current})
        # Frozen release bytes always remain a hard requirement. A concurrent
        # working-tree change is recorded, never restored by the archive task.
        if strict or category=='frozenArtifacts':assert not changed[category],changed[category][0]['path'] if changed[category] else category
    assert sha(ROOT/'pubspec.lock')==old['lockSha256']
    assert sha(ROOT/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')==old['signingSha256']
    return {'primaryCheckoutUnchanged':not any(changed.values()),'primaryHeadBranchIndexUnchanged':True,
            'frozenArtifactsUnchanged':True,'frozenArtifacts':len(old['frozenArtifacts']),
            'productInputs':len(old['productFiles']),'workingTreeChangesSinceFrozenHandoff':changed,
            'workingTreeChangesReverted':False}
def allowed(n):
    C.safe(n)
    return n.startswith(('lib/','android/','assets/','third_party/','tool/','test/','integration_test/','web/','linux/','macos/','windows/','ios/')) or n in ['pubspec.yaml','pubspec.lock','analysis_options.yaml','.gitignore','.metadata','LICENSE','LICENSE.md','README.md']
def verify_archive(commit,expected,repository=None):
    import tarfile
    repository=repository or C.BARE
    archive=OUT/'readback.tar'
    with (OUT/'archive-stderr.log').open('wb') as errors:
        completed=subprocess.run(['git','--git-dir='+str(repository),'-c','core.autocrlf=false','archive','--format=tar','--output='+str(archive),commit],stderr=errors,stdout=subprocess.DEVNULL,timeout=120)
    assert completed.returncode==0,'See private archive-stderr.log'
    seen=set()
    with tarfile.open(archive) as stream:
        for member in stream:
            if member.isdir():continue
            assert member.isfile() and member.name in expected,member.name
            row=expected[member.name]
            assert member.size==row['size']
            assert hashlib.file_digest(stream.extractfile(member),'sha256').hexdigest()==row['sha256'],member.name
            seen.add(member.name)
    assert seen==set(expected)
    return len(seen)
def prepare():
    preserve()
    if not C.BARE.exists():
        subprocess.run(['git','clone','--bare','--shared',str(ROOT/'.codex-artifacts/2026-11-05-github-gitee-150-160/repository.git'),str(C.BARE)],check=True,capture_output=True)
    git('config','user.name','Mesting release archive');git('config','user.email','archive@users.noreply.github.com')
    headers=C.credentials();repo=C.request(headers,'GET','/repos/'+REPO);assert not repo['private']
    if not (OUT/'before-refs.json').exists():
        baseline={h:refs(h) for h in URLS};save(OUT/'before-refs.json',baseline)
        save(OUT/'before-releases.json',C.request(headers,'GET',f'/repos/{REPO}/releases?per_page=100'))
    baseline=read(OUT/'before-refs.json')
    for h in URLS:git('fetch','--no-tags',URLS[h],'+refs/heads/*:refs/remotes/'+h+'/*')
    parent=baseline['github']['refs/heads/beta']
    state=read(OUT/'prepared.json') if (OUT/'prepared.json').exists() else {'versions':[]}
    cache=read(OUT/'blobs.json') if (OUT/'blobs.json').exists() else {}
    blobs=OUT/'blobs';blobs.mkdir(exist_ok=True)
    for number in range(61,77):
        version='1.0.'+str(number);tag='v'+version
        if any(r['tag']==tag for r in state['versions']):parent=next(r['commit'] for r in state['versions'] if r['tag']==tag);continue
        assert 'refs/tags/'+tag not in baseline['github'] and 'refs/tags/'+tag not in baseline['gitee']
        apk=ROOT/f'release/Mesting-Music-{tag}.apk';v=read(apk.with_name(f'Mesting-Music-{tag}-verification.json'))
        assert sha(apk)==v['sha256'];code=v['androidVersionCode']
        with zipfile.ZipFile(apk) as z:
            notes=json.loads(z.read('assets/flutter_assets/assets/data/release-notes.json'))
        assert notes['version']==version and notes['versionCode']==code
        source=ROOT/f'Mesting-Music-{tag}-source.zip';entries={};excluded=[];original=None
        if source.exists():
            sv=read(ROOT/f'release/Mesting-Music-{tag}-source-verification.json');assert sha(source)==sv['sourceZipSha256'];original=sha(source)
            with zipfile.ZipFile(source) as z:
                assert z.testzip() is None
                snapshot=json.loads(z.read('SOURCE-SNAPSHOT.json'))
                fixed=snapshot.get('fixedProductAndBuildInputs',{}).get('files',[])
                for n in z.namelist():
                    if n.endswith('/'):continue
                    if n.startswith(('HANDOFF','docs/','.impeccable/')) or n in ['AGENTS.md','SOURCE-SNAPSHOT.json','SOURCE-SNAPSHOT-v1.0.24-BASELINE.json']:
                        excluded.append(n);continue
                    if not allowed(n):excluded.append(n);continue
                    data=z.read(n);digest=hashlib.sha256(data).hexdigest()
                    if re.search(rb'(ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})',data):raise RuntimeError('Credential-shaped content: '+n)
                    entries[n]={'size':len(data),'sha256':digest}
                    if digest not in cache:
                        path=blobs/digest
                        if not path.exists():path.write_bytes(data)
                for r in fixed:
                    assert r['path'] in entries and entries[r['path']]['sha256']==r['sha256'],r['path']
        else:assert number==63
        manifest={'version':version,'androidVersionCode':code,'originalApkSha256':v['sha256'],
            'sourceAvailable':source.exists(),'sourceOrigin':'Original frozen per-version ZIP' if source.exists() else 'Missing frozen63 source; never reconstructed from a newer version',
            'originalFrozenSourceSha256':original,'privateRecordsExcluded':len(excluded),'productFiles':entries,
            'archiveDoesNotEstablishNewDeviceOrAccountAcceptance':True}
        m=json.dumps(manifest,ensure_ascii=False,indent=2).encode();digest=hashlib.sha256(m).hexdigest();(blobs/digest).write_bytes(m)
        entries['PUBLIC-SOURCE-MANIFEST.json']={'size':len(m),'sha256':digest}
        missing={d:blobs/d for d in {r['sha256'] for r in entries.values()} if d not in cache}
        cache.update(C.write_blobs(missing));save(OUT/'blobs.json',cache)
        tree={n:{'oid':cache[r['sha256']],'mode':'100644'} for n,r in entries.items()}
        commit,_=C.commit_tree(tree,tag,parent,f'archive: Mesting Music {version} / code{code}; frozen product source with private records excluded')
        verify_archive(commit,entries)
        git('-c','tag.gpgSign=false','tag','-a',tag,commit,'-m',f'Mesting Music {version} / code{code}; '+('frozen public product source' if source.exists() else 'APK only; source archive missing'))
        assets=[{'path':str(apk),'name':apk.name,'size':apk.stat().st_size,'sha256':v['sha256']}]
        if source.exists():
            public=OUT/f'Mesting-Music-{tag}-public-source.zip'
            with zipfile.ZipFile(public,'w',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as z:
                for n,r in entries.items():z.writestr(n,(blobs/r['sha256']).read_bytes())
            assets.append({'path':str(public),'name':public.name,'size':public.stat().st_size,'sha256':sha(public)})
        checks=OUT/f'Mesting-Music-{tag}-SHA256.txt';checks.write_text(''.join(a['sha256']+'  '+a['name']+'\n' for a in assets),'utf8')
        assets.append({'path':str(checks),'name':checks.name,'size':checks.stat().st_size,'sha256':sha(checks)})
        row={'version':version,'tag':tag,'code':code,'commit':commit,'tagObject':git('rev-parse',tag).decode().strip(),'sourceAvailable':source.exists(),'sourceOriginalSha256':original,'audit':entries,'excludedRecords':excluded,'assets':assets,'releaseNotes':notes['releaseNotes']}
        state['versions'].append(row);save(OUT/'prepared.json',state);parent=commit
        print('Prepared '+tag+(' source/APK' if source.exists() else ' APK/source-gap only'),flush=True)
    save(OUT/'preparation-preservation.json',preserve())
if __name__=='__main__':prepare()
