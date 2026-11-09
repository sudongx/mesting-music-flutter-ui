"""Content-addressed private archive. Never mutates source or deletes data.

Every source file receives an explicit disposition. Only process-local GCM
credentials authenticate GitHub; secret files are excluded, text is redacted,
and existing immutable release assets are referenced by digest. Four-MiB
blocks deduplicate large candidate APKs as well as ordinary duplicate files.
"""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.request import Request, build_opener, HTTPRedirectHandler
from urllib.parse import urlsplit
import os, sys, json, hashlib, re, zipfile, stat, threading, subprocess, time

ROOT=Path('D:/AnLi'); OUT=Path(__file__).resolve().parent
sys.path.insert(0,str(ROOT/'.codex-artifacts/2026-10-30-github-119-122'))
import github_transport as GH
REPO='Mesting42/mesting-music-flutter';BASE='/repos/'+REPO
TAG='private-development-archive-20261109'
BLOCK=4*1024*1024; PACK_LIMIT=200*1024*1024

def save(name,obj):
    path=OUT/name;temp=path.with_suffix(path.suffix+'.writing')
    temp.write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n','utf8');temp.replace(path)

def sha(path):
    with Path(path).open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()

def api(headers,method,path,body=None):
    for attempt in range(3):
        try:return GH.request(headers,method,path,body)
        except Exception:
            if attempt==2:raise
            time.sleep(1)

def source_files():
    # These are the areas the user requested. Private staging lives elsewhere
    # and cannot recursively become part of its own backup.
    roots=[ROOT/'.codex-artifacts',ROOT/'docs',ROOT/'.impeccable']
    for folder in roots:
        stack=[folder]
        while stack:
            parent=stack.pop()
            with os.scandir(parent) as it:
                for e in it:
                    info=e.stat(follow_symlinks=False);p=Path(e.path)
                    if getattr(info,'st_file_attributes',0)&0x400:
                        yield p,info,'link';continue
                    if stat.S_ISDIR(info.st_mode):stack.append(p)
                    elif stat.S_ISREG(info.st_mode):yield p,info,'file'
    for p in ROOT.glob('*.md'):yield p,p.stat(),'file'

TEXT_EXT={'.md','.json','.jsonl','.txt','.log','.py','.ps1','.js','.mjs','.cjs',
 '.dart','.kt','.java','.rs','.xml','.yaml','.yml','.toml','.properties','.ini',
 '.config','.cfg','.html','.css','.csv','.tsv','.sh','.bat','.cmd','.smali',
 '.diff','.patch','.lock','.gradle','.kts','.pom','.module','.h','.c','.cpp'}
SECRET_KEYS=r'MUSIC_U|MUSIC_A|__csrf|csrf|csrf_token|token|userId|uid|deviceId|android_id|oaid|imei|access_token|refresh_token|api_key|apikey|client_secret|password|passwd|authorization|cookie|cookies|private_key'
ASSIGNED=re.compile(r'(?im)(["\x27]?(?:'+SECRET_KEYS+r')["\x27]?\s*[:=]\s*)(["\x27])[^\r\n]*?\2')
TOKEN=re.compile(r'(?i)(ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{30,}|glpat-[A-Za-z0-9_-]{15,}|Bearer\s+[A-Za-z0-9._~+/=-]{12,})')
PEM=re.compile(r'(?is)-----BEGIN (?:RSA |EC |OPENSSH |ENCRYPTED )?PRIVATE KEY-----.*?-----END (?:RSA |EC |OPENSSH |ENCRYPTED )?PRIVATE KEY-----')

def clean(data):
    try:text=data.decode('utf-8-sig')
    except UnicodeError:
        try:text=data.decode('utf-16')
        except UnicodeError:return None
    if '\0' in text:return None
    original=text
    # Preserve valid JSON structure while removing entire credential values,
    # including nested cookie maps and escaped values in response snapshots.
    try:
        decoded=json.loads(text)
        sensitive=re.compile(r'^(?:'+SECRET_KEYS+r')$',re.I)
        def redact_json(value):
            if isinstance(value,dict):
                return {k:('[REDACTED]' if sensitive.fullmatch(k) and v is not None
                           else redact_json(v)) for k,v in value.items()}
            if isinstance(value,list):return [redact_json(v) for v in value]
            return value
        sanitized=redact_json(decoded)
        if sanitized!=decoded:text=json.dumps(sanitized,ensure_ascii=False,indent=2)
    except (ValueError,RecursionError):pass
    text=PEM.sub('[PRIVATE KEY EXCLUDED]',text)
    text=TOKEN.sub('[CREDENTIAL REDACTED]',text)
    text=ASSIGNED.sub(r'\1"[REDACTED]"',text)
    # Handle unquoted header/log values without copying the rest of the secret.
    text=re.sub(r'(?im)^(\s*(?:Authorization|Cookie|Set-Cookie|password|密码|令牌)\s*[:=]).*$',r'\1 [REDACTED]',text)
    text=re.sub(r'(?i)(https?://)[^/\s:@]+:[^/\s@]+@',r'\1[REDACTED]@',text)
    text=re.sub(r'(?i)([?&](?:token|access_token|refresh_token|api_key|sign|signature|csrf)=)[^\s&#"\x27<>]+',r'\1[REDACTED]',text)
    text=re.sub(r'(?i)((?:MUSIC_U|MUSIC_A|__csrf)\s*=)[^;\s"\x27\\]+',r'\1[REDACTED]',text)
    text=re.sub(r'(?<!\d)1[3-9]\d{9}(?!\d)','[PHONE REDACTED]',text)
    return text.encode('utf8') if text!=original else data

def secret_path(relative):
    p=Path(relative);parts=p.parts
    if '2026-10-26-beta17-signing' in parts:return 'applicationSigningMaterial'
    if p.suffix.lower() in {'.keystore','.jks','.p12','.pfx','.key'}:return 'keyOrSigningFile'
    if p.name.lower() in {'key.properties','local.properties','credentials.json','token.json','.netrc','.git-credentials'}:return 'localCredentialConfiguration'
    if p.name.lower().startswith('.env') and p.name not in {'.env.example','.env.sample'}:return 'localEnvironmentFile'
    if p.suffix.lower() in {'.db','.sqlite','.sqlite3','.dmp','.hprof'}:return 'opaqueRuntimeDataMayContainCredentials'
    return None

def check_zip(path):
    # APK/JAR carry public signing certificates, not user signing keys. Plain
    # source ZIPs can accidentally enclose a keystore, so inspect member names.
    if path.suffix.lower()!='.zip':return None
    try:
        with zipfile.ZipFile(path) as z:
            for n in z.namelist():
                if secret_path(n):return 'archiveContainsCredentialNamedMember'
    except (zipfile.BadZipFile,OSError):return None
    return None

class Packs:
    def __init__(self):
        self.objects={};self.packs=[];self.archive=None;self.size=0
    def close(self):
        if self.archive:
            self.archive.close();path=self.path
            self.packs.append({'name':path.name,'size':path.stat().st_size,'sha256':sha(path)})
            print('Packed '+path.name+' '+str(path.stat().st_size)+' bytes',flush=True)
            self.archive=None
    def add(self,data):
        digest=hashlib.sha256(data).hexdigest()
        if digest in self.objects:return digest
        if not self.archive or self.size+len(data)>PACK_LIMIT:
            self.close();self.path=OUT/f'private-evidence-part-{len(self.packs)+1:03}.zip'
            self.archive=zipfile.ZipFile(self.path,'x',compression=zipfile.ZIP_DEFLATED,compresslevel=3)
            self.size=0
        self.archive.writestr('objects/'+digest,data)
        self.size+=len(data);self.objects[digest]={'pack':self.path.name,'size':len(data)}
        return digest

def prepare():
    assert not (OUT/'manifest.json').exists(),'Preparation is immutable; resume publishing instead'
    h=GH.credentials();assert api(h,'GET',BASE)['private']
    assets={}
    for page in range(1,5):
        releases=api(h,'GET',BASE+f'/releases?per_page=100&page={page}')
        for release in releases:
            for a in release['assets']:
                if a.get('digest','').startswith('sha256:'):
                    assets[a['digest'].split(':',1)[1]]={'releaseTag':release['tag_name'],
                     'assetId':a['id'],'assetName':a['name'],'size':a['size']}
        if len(releases)<100:break
    save('existing-assets.json',assets)
    packs=Packs();rows=[];excluded=0;original_bytes=0
    for path,info,kind in source_files():
        rel=path.relative_to(ROOT).as_posix();row={'path':rel,'size':info.st_size}
        if kind=='link':
            row.update(status='linkNotFollowed',target=os.readlink(path));rows.append(row);continue
        original_bytes+=info.st_size
        reason=secret_path(rel)
        if not reason:reason=check_zip(path)
        if reason:
            row.update(status='excludedLocalSecret',reason=reason);excluded+=1;rows.append(row);continue
        digest=sha(path);row['originalSha256']=digest
        if digest in assets and info.st_size==assets[digest]['size']:
            row.update(status='existingReleaseAsset',reference=assets[digest]);rows.append(row);continue
        textlike=path.suffix.lower() in TEXT_EXT or path.name in {'config','HEAD','COMMIT_EDITMSG','FETCH_HEAD','packed-refs'}
        if textlike and info.st_size<=128*1024*1024:
            data=path.read_bytes();safe=clean(data)
            if safe is None:
                row.update(status='excludedLocalSecret',reason='unreadableTextNeedsReview');excluded+=1;rows.append(row);continue
            row.update(status='redacted' if safe!=data else 'original',storedSize=len(safe),storedSha256=hashlib.sha256(safe).hexdigest(),
                       blocks=[packs.add(safe[i:i+BLOCK]) for i in range(0,len(safe),BLOCK)])
        else:
            blocks=[]
            with path.open('rb') as f:
                while data:=f.read(BLOCK):blocks.append(packs.add(data))
            row.update(status='original',storedSize=info.st_size,storedSha256=digest,blocks=blocks)
        rows.append(row)
        if len(rows)%5000==0:print('Inventoried '+str(len(rows))+' files',flush=True)
    packs.close()
    counts={k:sum(r['status']==k for r in rows) for k in sorted({r['status'] for r in rows})}
    manifest={'schema':1,'date':'2026-11-09','privateOnly':True,'root':'D:/AnLi',
      'scope':['.codex-artifacts/**','docs/**','.impeccable/**','*.md'],
      'blockBytes':BLOCK,'counts':counts,'sourceBytes':original_bytes,'files':rows,'objects':packs.objects,'packs':packs.packs,
      'secretExclusionsRetainedLocally':True,'cleanupPerformed':False}
    save('manifest.json',manifest)
    save('summary.json',{'counts':counts,'sourceBytes':original_bytes,'uniqueBlocks':len(packs.objects),
      'packCount':len(packs.packs),'uploadPackBytes':sum(p['size'] for p in packs.packs)})
    print(json.dumps(json.loads((OUT/'summary.json').read_text('utf8')),ensure_ascii=False),flush=True)

class Redirect(HTTPRedirectHandler):
    def redirect_request(self,req,fp,code,msg,headers,newurl):
        assert urlsplit(newurl).scheme=='https'
        r=super().redirect_request(req,fp,code,msg,headers,newurl)
        if urlsplit(newurl).netloc!=urlsplit(req.full_url).netloc:r.remove_header('Authorization')
        return r

def publish():
    h=GH.credentials();assert api(h,'GET',BASE)['private']
    manifest=json.loads((OUT/'manifest.json').read_text('utf8'))
    # Verify that ordered block lists actually reconstruct each stored file,
    # not merely that the individual ZIP entries have plausible names.
    archives={};seen=set()
    try:
        for row in manifest['files']:
            if row['status'] not in ['original','redacted']:continue
            key=(row['storedSha256'],tuple(row['blocks']))
            if key in seen:continue
            digest=hashlib.sha256();length=0
            for block in row['blocks']:
                pack=manifest['objects'][block]['pack']
                if pack not in archives:archives[pack]=zipfile.ZipFile(OUT/pack)
                data=archives[pack].read('objects/'+block)
                assert hashlib.sha256(data).hexdigest()==block
                digest.update(data);length+=len(data)
            assert digest.hexdigest()==row['storedSha256'] and length==row['storedSize'],row['path']
            seen.add(key)
    finally:
        for archive in archives.values():archive.close()
    print('All included stored files reconstructed and hash verified locally',flush=True)
    release=api(h,'GET',BASE+'/releases/tags/'+TAG)
    if not release:
        release=api(h,'POST',BASE+'/releases',{'tag_name':TAG,'target_commitish':'beta','name':'私有开发记录与调查验证全量归档 · 2026-11-09',
         'body':'私有开发/调查/验证资料分块去重备份。manifest.json列出每个原路径、原哈希、脱敏情况及排除原因；restore.py可恢复已备份文件。签名密钥、密码和真实凭据不上传。本归档不代表全部文件原样上传，排除项仍保留本机。',
         'draft':True,'prerelease':False,'make_latest':'false'})
    save('release.json',{'id':release['id'],'url':release['html_url'],'tag':TAG})
    targets=manifest['packs']+[{'name':n,'size':(OUT/n).stat().st_size,'sha256':sha(OUT/n)} for n in ['manifest.json','restore.py','summary.json','README.md','backup.py','mirror_records.py','user-feedback-v1.0.82.json','user-feedback-provenance.json']]
    lock=threading.Lock()
    uploaded=json.loads((OUT/'uploaded.json').read_text('utf8')) if (OUT/'uploaded.json').exists() else {}
    def one(a):
        name=a['name'];path=OUT/name;assert sha(path)==a['sha256']
        live=api(h,'GET',BASE+f"/releases/{release['id']}/assets?per_page=100")
        match=next((r for r in live if r['name']==name),None)
        for attempt in range(4):
            if match and match.get('digest')=='sha256:'+a['sha256'] and match['size']==a['size']:break
            if match:
                assert release['draft'] and match.get('state')=='starter'
                api(h,'DELETE',BASE+f"/releases/assets/{match['id']}");match=None
            try:match=GH.upload(h,release['id'],path,name)
            except Exception:
                live=api(h,'GET',BASE+f"/releases/{release['id']}/assets?per_page=100")
                match=next((r for r in live if r['name']==name),None)
                if attempt==3:raise
                continue
        assert match and match.get('digest')=='sha256:'+a['sha256'] and match['size']==a['size']
        with lock:
            uploaded[name]={'assetId':match['id'],'sha256':a['sha256'],'size':a['size']};save('uploaded.json',uploaded)
        print('Uploaded/remote digest verified '+name,flush=True)
    with ThreadPoolExecutor(max_workers=4) as pool:
        for future in as_completed([pool.submit(one,a) for a in targets]):future.result()
    assert set(uploaded)=={a['name'] for a in targets}
    # Finalize only after every artifact has a server-side content digest.
    api(h,'PATCH',BASE+f"/releases/{release['id']}",{'draft':False,'make_latest':'false'})
    print('All private archive assets published; independent downloads remain',flush=True)

def verify():
    h=GH.credentials();assert api(h,'GET',BASE)['private']
    manifest=json.loads((OUT/'manifest.json').read_text('utf8'));r=json.loads((OUT/'release.json').read_text('utf8'))
    release=api(h,'GET',BASE+'/releases/tags/'+TAG);assert release and not release['draft']
    assets=api(h,'GET',BASE+f"/releases/{r['id']}/assets?per_page=100")
    uploaded=json.loads((OUT/'uploaded.json').read_text('utf8'))
    assert set(uploaded).issubset({a['name'] for a in assets})
    # Completion receipts may be attached after this base archive verification.
    assets=[a for a in assets if a['name'] in uploaded]
    done=json.loads((OUT/'downloaded.json').read_text('utf8')) if (OUT/'downloaded.json').exists() else {}
    lock=threading.Lock()
    def one(a):
        name=a['name'];expected=uploaded[name]
        if done.get(name,{}).get('sha256')==expected['sha256']:return
        for attempt in range(4):
            try:
                req=Request(a['url'],headers=dict(h,Accept='application/octet-stream'))
                digest=hashlib.sha256();size=0
                with build_opener(Redirect()).open(req,timeout=180) as response:
                    while chunk:=response.read(1024*1024):digest.update(chunk);size+=len(chunk)
                assert digest.hexdigest()==expected['sha256'] and size==expected['size']
                break
            except Exception:
                if attempt==3:raise
        # Pack hash equality proves the downloaded ZIP bytes. Also validate all
        # contained block hashes, so restore manifests cannot point to wrong data.
        if name.endswith('.zip'):
            with zipfile.ZipFile(OUT/name) as archive:
                for member in archive.infolist():
                    expected_digest=member.filename.removeprefix('objects/')
                    with archive.open(member) as stream:
                        assert hashlib.file_digest(stream,'sha256').hexdigest()==expected_digest
                    assert manifest['objects'][expected_digest]['pack']==name
        with lock:done[name]=expected;save('downloaded.json',done)
        print('Download/hash verified '+name,flush=True)
    with ThreadPoolExecutor(max_workers=4) as pool:
        for future in as_completed([pool.submit(one,a) for a in assets]):future.result()
    assert set(done)==set(uploaded)
    save('verified.json',{'allUploadedAssetsDownloadedAndHashVerified':True,'assetCount':len(done),
      'allBlockHashesVerified':True,'files':manifest['counts'],'cleanupPerformed':False,'private':True})
    print('Private archive download and object integrity verified',flush=True)

if __name__=='__main__':
    {'prepare':prepare,'publish':publish,'verify':verify}[sys.argv[1]]()
