"""Immutable release archival with an isolated index and resumable state.

No helper changes the primary checkout, primary index, frozen archives or a
music update manifest. Git objects, private temporary indexes and new refs are
the only local Git mutations. Credentials stay inside the requesting process.
"""
from pathlib import Path, PurePosixPath
import hashlib, json, os, subprocess, sys, tarfile

ROOT=Path('D:/AnLi'); OUT=Path(__file__).resolve().parent
BARE=OUT/'repository.git'
REPO='Mesting42/mesting-music-flutter'
sys.path.insert(0,str(ROOT/'.codex-artifacts/2026-10-30-github-119-122'))
from github_transport import credentials, request, upload

def read(path): return json.loads(Path(path).read_text('utf-8-sig'))
def save(path,value):
    path=Path(path);path.parent.mkdir(parents=True,exist_ok=True)
    data=json.dumps(value,ensure_ascii=False,indent=2)+'\n'
    temp=path.with_suffix(path.suffix+'.writing')
    temp.write_text(data,'utf-8');temp.replace(path)
def sha(path):
    with Path(path).open('rb') as stream:return hashlib.file_digest(stream,'sha256').hexdigest()
def git(*args,data=None,env=None):
    actual=dict(os.environ,GIT_OPTIONAL_LOCKS='0',GIT_TERMINAL_PROMPT='0',GCM_INTERACTIVE='Never')
    if env:actual.update(env)
    result=subprocess.run(['git','--git-dir='+str(BARE),'--no-optional-locks',*map(str,args)],cwd=ROOT,input=data,capture_output=True,env=actual)
    if result.returncode:
        raise RuntimeError(result.stderr.decode('utf-8',errors='replace')[:6000])
    return result.stdout
def safe(name):
    p=PurePosixPath(name)
    assert not p.is_absolute() and '..' not in p.parts and '\\' not in name,name
    assert not {part.lower() for part in p.parts}.intersection({'.git','.codex-artifacts','.codex-backups','.codex-temp','.dart_tool','.gradle','.kotlin','build','node_modules','.firecrawl'}),name
    assert p.suffix.lower() not in {'.apk','.aab','.jks','.keystore','.p12','.pfx'},name
    assert p.suffix.lower()!='.zip' or name=='test/support/release_notes_apk_fixture.zip',name
    assert p.name.lower() not in {'key.properties','local.properties','credentials.json','token.json'},name
    assert not p.name.startswith('.env') or p.name in {'.env.example','.env.sample'},name
def preserve():
    before=read(OUT/'workspace-before.json')
    def primary(*a):return subprocess.check_output(['git',*a],cwd=ROOT)
    assert primary('rev-parse','HEAD').decode().strip()==before['head']
    assert primary('branch','--show-current').decode().strip()==before['branch']=='beta'
    assert sha(before['indexPath'])==before['indexSha256']
    assert not primary('diff','--cached','--name-only').strip()
    for name,value in before['files'].items():assert sha(ROOT/name)==value,name
    for name,value in before['frozen'].items():assert sha(name)==value,name
    assert sha(ROOT/'pubspec.lock')==before['pubspecLockSha256']
    assert sha(ROOT/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')==before['signingKeySha256']
    return {'primaryHead':before['head'],'primaryBranch':before['branch'],'primaryIndexPreserved':True,'existingFilesBytePreserved':len(before['files']),'frozenArtifactsBytePreserved':len(before['frozen']),'signingAndLockPreserved':True}
def tree_files(commit):
    result={}
    for line in git('ls-tree','-rz',commit).split(b'\0'):
        if line:
            meta,name=line.split(b'\t',1);mode,kind,oid=meta.decode().split()
            assert kind=='blob',(name,kind)
            result[name.decode()]={'mode':mode,'oid':oid}
    return result
def write_blobs(files):
    """Hash a batch without checkout filters. Input paths are private hex names."""
    names=list(files)
    if not names:return {}
    paths=''.join(str(files[name].as_posix())+'\n' for name in names).encode()
    oids=git('hash-object','-w','--no-filters','--stdin-paths',data=paths).decode().splitlines()
    assert len(oids)==len(names)
    return dict(zip(names,oids))
def commit_tree(entries,label,parent,message):
    for name in entries:safe(name)
    index=OUT/('index-'+label)
    assert index.resolve().is_relative_to(OUT.resolve())
    env={'GIT_INDEX_FILE':str(index)}
    git('read-tree','--empty',env=env)
    records=b''.join((row.get('mode','100644')+' '+row['oid']+'\t'+name).encode()+b'\0' for name,row in sorted(entries.items()))
    git('update-index','-z','--index-info',data=records,env=env)
    tree=git('write-tree',env=env).decode().strip()
    commit=git('-c','commit.gpgSign=false','commit-tree',tree,'-p',parent,data=(message+'\n').encode()).decode().strip()
    assert tree_files(commit)=={name:{'mode':row.get('mode','100644'),'oid':row['oid']} for name,row in entries.items()}
    return commit,tree
def archive_verify(commit,expected,repository=BARE):
    """Read a raw git archive stream, avoiding Windows newline conversion."""
    process=subprocess.Popen(['git','--no-optional-locks','-c','core.autocrlf=false','archive','--format=tar',commit],cwd=repository,stdout=subprocess.PIPE,stderr=subprocess.PIPE)
    seen=set()
    try:
        with tarfile.open(fileobj=process.stdout,mode='r|') as archive:
            for member in archive:
                if member.isdir():continue
                assert member.isfile() and member.name in expected,member.name
                row=expected[member.name]
                stream=archive.extractfile(member)
                assert member.size==row['size'],(member.name,member.size,row['size'])
                assert hashlib.file_digest(stream,'sha256').hexdigest()==row['sha256'],member.name
                seen.add(member.name)
        error=process.stderr.read();result=process.wait()
        assert result==0,error.decode(errors='replace')
    finally:
        if process.poll() is None:process.kill()
    assert seen==set(expected),(len(seen),len(expected))
    return len(seen)
