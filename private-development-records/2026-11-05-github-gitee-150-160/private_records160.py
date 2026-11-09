"""Create a private, explicitly filtered records snapshot; never upload keys."""
from common160 import *
import re,time

url=f'https://gitee.com/{REPO}.git'
env=dict(os.environ,GIT_TERMINAL_PROMPT='0',GCM_INTERACTIVE='Never')
# An unauthenticated probe must fail: never put private records in a repository
# that has become publicly readable since the previous backup.
probe=subprocess.run(['git','-c','credential.helper=','-c','credential.interactive=never','ls-remote',url],env=env,capture_output=True,timeout=60)
assert probe.returncode!=0 and any(m in probe.stderr for m in [b'Authentication',b'could not read',b'unable to get password']), 'Private visibility could not be established; stop before records push'
p=read(OUT/'prepared-state.json');parent=p['giteeTip'];entries=tree_files(parent)
before=read(OUT/'workspace-before.json');files={};excluded=[];sanitized=[]
folder=OUT/'private-record-blobs';folder.mkdir(exist_ok=True)
deny_path=re.compile(r'(?:signing|credential|keystore|secret|token|password|account|phone|device|adb|logcat|storageprobe|disk-audit|private-key|capture|traffic|login|auth|research-private|research-qualification|research-gain|review|snapshots|fresh-|repository\.git|blob-files)',re.I)
def cleaned(text):
    original=text
    text=re.sub(r'(?is)-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----.*?-----END (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----','[PRIVATE KEY EXCLUDED]',text)
    text=re.sub(r'(?i)(?:ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{30,}|bearer\s+[A-Za-z0-9._~-]{12,})','[CREDENTIAL REDACTED]',text)
    text=re.sub(r'(?im)(["\x27]?(?:MUSIC_U|MUSIC_A|__csrf|access_token|refresh_token|authorization|cookie|password|passwd|client_secret|private_key|phone|userId|userid|uid|email|deviceId)["\x27]?\s*[:=]\s*)(["\x27])[^\r\n]*?\2',r'\1"[REDACTED]"',text)
    text=re.sub(r'(?<!\d)1[3-9]\d{9}(?!\d)','[PHONE REDACTED]',text)
    return text,text!=original
def add(name,data):
    value=hashlib.sha256(data).hexdigest();path=folder/value
    if not path.exists():path.write_bytes(data)
    files[name]=path

# All current source and project docs are represented as a private branch.
# Product source bytes are already publicly archived; project text records are
# copied in their original bytes unless a credential-shaped value is present.
for name in before['files']:
    path=ROOT/name
    if name.startswith(('HANDOFF','docs/')) or name in ['AGENTS.md','README.md']:
        text=path.read_text('utf-8-sig',errors='strict');text,changed=cleaned(text)
        add(name,text.encode('utf-8') if changed else path.read_bytes())
        if changed:sanitized.append(name)
discovery=read(OUT/'private-records-discovery.json')
for name,size in discovery['files']:
    path=ROOT/name
    if deny_path.search(name) or size>8*1024*1024 or set(Path(name).parts[1:]).intersection({'.firecrawl','build','node_modules','.gradle','.git','.dart_tool','.kotlin','.codex-backups','.codex-temp','.codex-artifacts'} - {'.codex-artifacts'}):
        excluded.append({'path':name,'reason':'raw account/device/auth/research/capture or large raw dump'});continue
    if path.name.lower() in {'local.properties','key.properties','credentials.json','token.json'} or path.name.lower().startswith('.env'):
        excluded.append({'path':name,'reason':'environment/config credential file'});continue
    if path.suffix.lower() not in {'.md','.txt','.json','.jsonl','.log','.csv','.ps1','.py','.dart','.js','.mjs'}:continue
    try:text=path.read_text('utf-8-sig',errors='strict')
    except (UnicodeError,OSError):
        excluded.append({'path':name,'reason':'non UTF-8 or unavailable'});continue
    if '\0' in text:
        excluded.append({'path':name,'reason':'binary content'});continue
    if re.search(r'(?i)(-----BEGIN .*PRIVATE KEY-----|MUSIC_U["\x27]?\s*[:=]\s*["\x27]?[A-Za-z0-9+/=]{20,}|(?:password|passwd|secret|token)\s*=\s*["\x27][^"\x27]{8,})',text):
        excluded.append({'path':name,'reason':'credential-shaped raw content'});continue
    text,changed=cleaned(text)
    target='private-development-records/'+name.removeprefix('.codex-artifacts/')
    add(target,text.encode('utf-8'))
    if changed:sanitized.append(name)
manifest={'createdAtUnix':int(time.time()),'visibility':'private Gitee only','includedFiles':len(files),'sanitized':sanitized,'excluded':excluded,'exclusionsIntentional':['signing/auth credentials','real account and device raw data','raw decompiler/capture dumps','binaries/build caches'],'bytePreservedProductSource':True}
save(OUT/'private-records-manifest.json',manifest)
add('private-development-records/BACKUP-MANIFEST.json',(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n').encode())
oids=write_blobs(files)
for name,oid in oids.items():entries[name]={'mode':'100644','oid':oid}
commit,tree=commit_tree(entries,'private-development-records',parent,'backup: private handoff and filtered development records through 1.0.60')
branch='refs/heads/private-development-records-20261105'
live={l.split()[1]:l.split()[0] for l in git('ls-remote','--heads',url).decode().splitlines()}
assert branch not in live,'Existing backup branch must be reviewed before any replacement'
git('push','--atomic',url,commit+':'+branch)
live={l.split()[1]:l.split()[0] for l in git('ls-remote','--heads',url).decode().splitlines()};assert live[branch]==commit
save(OUT/'private-records-push.json',{'branch':branch,'commit':commit,'tree':tree,'records':len(files),'sanitizedFiles':len(sanitized),'excludedFiles':len(excluded),'remoteRefVerified':True,'privateUnauthenticatedProbeRejected':True,'githubWritten':False})
print(json.dumps({'privateRecords':len(files),'sanitized':len(sanitized),'excluded':len(excluded),'commit':commit}),flush=True)
