"""Frozen-version archival helpers. Every mutation uses a private alternate index.
The current HEAD, index and all pre-existing workspace bytes stay untouched.
"""
from pathlib import Path,PurePosixPath
import os,json,hashlib,subprocess
ROOT=Path('D:/AnLi');OUT=Path(__file__).resolve().parent
REPO='Mesting42/mesting-music-flutter'
BASELINE='8763551c0cc39c1c25f60e42fd49624f58d91a89'
ARCHIVE_DOC='docs/version-archive/RELEASE-ARCHIVE-2026-10-29-v113-v117.md'
HANDOFF='HANDOFF-GITHUB-2026-10-29-v1.0.17.md'
CERT='8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'
def git(*args,data=None,env=None):
 actual=os.environ.copy();actual.update({'GIT_TERMINAL_PROMPT':'0','GCM_INTERACTIVE':'Never'})
 if env:actual.update(env)
 p=subprocess.run(['git',*map(str,args)],cwd=ROOT,input=data,capture_output=True,env=actual)
 if p.returncode:raise RuntimeError(p.stderr.decode('utf-8',errors='replace'))
 return p.stdout

def sha(path):
 with Path(path).open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
def read(path):return json.loads(Path(path).read_text(encoding='utf-8-sig'))
def save(path,value):
 p=Path(path);p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def refs(data):return {l.split('\t')[1]:l.split('\t')[0] for l in data.decode('utf-8').splitlines()}
def safe_path(name):
 p=PurePosixPath(name)
 assert not p.is_absolute() and '..' not in p.parts and '\\' not in name,name
 assert not any(x.lower() in {'.git','.codex-artifacts','.codex-backups','.codex-temp','.dart_tool','.gradle','build','coverage','node_modules'} for x in p.parts),name
 assert p.suffix.lower() not in {'.apk','.aab','.jks','.keystore','.pfx','.p12'},name
 assert p.suffix.lower()!='.zip' or name=='test/support/release_notes_apk_fixture.zip',name
 assert p.name.lower() not in {'key.properties','local.properties','token.json','credentials.json'},name
 assert not p.name.startswith('.env') or p.name in {'.env.example','.env.sample'},name

def tree_files(commit):
 out={}
 for line in git('ls-tree','-rz',commit).split(b'\0'):
  if line:
   meta,name=line.split(b'\t',1);mode,kind,oid=meta.decode().split();assert kind=='blob'
   out[name.decode('utf-8')]=(mode,oid)
 return out

def preserve():
 before=read(OUT/'workspace-before.json')
 assert git('rev-parse','HEAD').decode().strip()==before['head']==BASELINE
 assert git('branch','--show-current').decode().strip()==before['branch']=='beta'
 index=Path(git('rev-parse','--git-path','index').decode().strip());index=index if index.is_absolute() else ROOT/index
 assert sha(index)==before['indexSha256'],'Primary index changed'
 for name,value in before['files'].items():assert sha(ROOT/name)==value,name
 for name,value in before['artifacts'].items():assert sha(ROOT/name)==value,name
 return before

def create_commit(files,label,parent,modes):
 names=sorted(files)
 for name in names:safe_path(name)
 paths=''.join(json.dumps(str(files[name].as_posix()),ensure_ascii=False)+'\n' for name in names).encode('utf-8')
 oids=git('hash-object','-w','--no-filters','--stdin-paths',data=paths).decode().splitlines();assert len(oids)==len(names)
 index=OUT/f'index-{label}';assert not index.exists()
 env={'GIT_INDEX_FILE':str(index)}
 git('read-tree','--empty',env=env)
 git('update-index','-z','--index-info',data=b''.join(f"{modes.get(n,('100644',''))[0]} {oid}\t{n}".encode('utf-8')+b'\0' for n,oid in zip(names,oids)),env=env)
 tree=git('write-tree',env=env).decode().strip()
 commit=git('commit-tree',tree,'-p',parent,data=(f'archive: preserve Mesting Music {label}\n\nVerified frozen delivery; preserve original APK and source ZIP bytes.\n').encode()).decode().strip()
 actual=tree_files(commit);assert set(actual)==set(names)
 assert all(actual[n][1]==oid for n,oid in zip(names,oids))
 return commit,tree
