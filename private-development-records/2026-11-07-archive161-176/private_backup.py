"""Filtered development records go only to an authenticated private Gitee ref."""
from archive import *
env=dict(os.environ,GIT_TERMINAL_PROMPT='0',GCM_INTERACTIVE='Never')
probe=subprocess.run(['git','-c','credential.helper=','-c','credential.interactive=never','ls-remote',URLS['gitee']],capture_output=True,env=env,timeout=55)
assert probe.returncode!=0 and any(p in probe.stderr for p in [b'Authentication',b'could not read',b'unable to get password']), 'Private visibility not established'
state=read(OUT/'prepared.json');assert len(state['versions'])==16
live=refs('gitee');branch='refs/heads/private-development-records-20261107-v176'
assert branch not in live
oldbranch='refs/heads/private-development-records-20261105';parent=live[oldbranch]
git('fetch','--no-tags',URLS['gitee'],oldbranch+':refs/remotes/private-records-previous')
entries=C.tree_files(state['versions'][-1]['commit'])
entries.update({n:r for n,r in C.tree_files(parent).items() if n.startswith('private-development-records/')})
blobs=OUT/'private-blobs';blobs.mkdir(exist_ok=True);included={};excluded=[];redacted=[]
deny=re.compile(r'(signing|signer|credential|keystore|secret|token|password|account|login|auth|device|phone|adb|logcat|storageprobe|capture|traffic|raw|repository\.git|blob|\.git/|\.dart_tool|node_modules|/build/)',re.I)
def clean(s):
    original=s
    s=re.sub(r'(?is)-----BEGIN (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----.*?-----END (?:RSA |EC |ENCRYPTED )?PRIVATE KEY-----','[PRIVATE KEY EXCLUDED]',s)
    s=re.sub(r'(?i)(ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{30,}|bearer\s+[A-Za-z0-9._~-]{12,})','[CREDENTIAL REDACTED]',s)
    s=re.sub(r'(?im)(["\x27]?(?:MUSIC_U|MUSIC_A|__csrf|csrf|token|api_key|access_token|refresh_token|authorization|cookie|password|passwd|client_secret|private_key|phone|userId|userid|uid|email|deviceId)["\x27]?\s*[:=]\s*)(["\x27])[^\r\n]*?\2',r'\1"[REDACTED]"',s)
    s=re.sub(r'(?<!\d)1[3-9]\d{9}(?!\d)','[PHONE REDACTED]',s)
    return s,s!=original
paths=list(ROOT.glob('*.md'))+list((ROOT/'docs').rglob('*'))+list((ROOT/'.impeccable').rglob('*.md'))
for folder in (ROOT/'.codex-artifacts').iterdir():
    if folder.is_dir() and folder!=OUT and re.search(r'(release16[1-9]|release17[0-6]|session17[0-6]|soda-integration|soda-session-handoff)',folder.name):
        paths.extend(folder.rglob('*'))
for path in sorted(set(paths)):
    if not path.is_file():continue
    rel=path.relative_to(ROOT).as_posix()
    if deny.search(rel) or path.stat().st_size>8*1024*1024 or path.suffix.lower() not in ['.md','.json','.py','.ps1','.txt']:
        excluded.append(rel);continue
    try:s=path.read_text('utf-8-sig',errors='strict')
    except (UnicodeError,OSError):excluded.append(rel);continue
    if '\0' in s:excluded.append(rel);continue
    s,changed=clean(s)
    if changed:redacted.append(rel)
    data=s.encode('utf8');digest=hashlib.sha256(data).hexdigest();target=blobs/digest
    if not target.exists():target.write_bytes(data)
    name='private-development-records/'+rel.removeprefix('.codex-artifacts/') if rel.startswith('.codex-artifacts/') else rel
    included[name]=target
manifest={'privateGiteeOnly':True,'newOrUpdatedFiles':len(included),'redactedPaths':redacted,'excludedPaths':excluded,
    'rawDeviceCredentialsBinariesCachesExcluded':True,'publicFrozenArtifactsNotModified':True}
save(OUT/'private-backup-manifest.json',manifest)
data=json.dumps(manifest,ensure_ascii=False,indent=2).encode();target=blobs/hashlib.sha256(data).hexdigest();target.write_bytes(data)
included['private-development-records/BACKUP-176-MANIFEST.json']=target
oids=C.write_blobs(included)
for n,oid in oids.items():entries[n]={'oid':oid,'mode':'100644'}
commit,tree=C.commit_tree(entries,'private-records176',parent,'backup: private filtered handoff and development records through1.0.76')
git('push','--atomic',URLS['gitee'],commit+':'+branch)
assert refs('gitee')[branch]==commit
save(OUT/'private-backup-result.json',{'branch':branch,'commit':commit,'tree':tree,'includedNewOrUpdatedRecords':len(included),
    'redactedCount':len(redacted),'excludedCount':len(excluded),'privateUnauthenticatedProbeRejected':True,'refReadbackVerified':True,'githubWritten':False})
print('Private Gitee records backed up: '+str(len(included)),flush=True)
