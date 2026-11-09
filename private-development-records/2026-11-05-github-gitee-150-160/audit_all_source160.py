from common160 import *
import zipfile,tarfile
refs={host:{l.split()[1]:l.split()[0] for l in git('ls-remote','--heads','--tags',f'https://{host}.com/{REPO}.git').decode().splitlines()} for host in ['github','gitee']}
result=[];missing=[]
for path in sorted(ROOT.glob('Mesting-Music-v*-source.zip')):
    tag=path.name.removeprefix('Mesting-Music-').removesuffix('-source.zip')
    targets={h:r.get('refs/tags/'+tag+'^{}') or r.get('refs/tags/'+tag) for h,r in refs.items()}
    if not all(targets.values()):missing.append({'path':path.name,'missingAt':[h for h,v in targets.items() if not v]});continue
    assert len(set(targets.values()))==1,(tag,'tag destinations differ')
    commit=next(iter(targets.values()));audit={}
    with zipfile.ZipFile(path) as z:
        for n in z.namelist():
            if n.endswith('/'):continue
            data=z.read(n);n=n.removeprefix('Mesting-Music-'+tag+'/');audit[n]={'size':len(data),'sha256':hashlib.sha256(data).hexdigest()}
    tarpath=OUT/'source-audit-current.tar'
    subprocess.run(['git','--git-dir='+str(BARE),'-c','core.autocrlf=false','archive','--format=tar','--output='+str(tarpath),commit],check=True,capture_output=True)
    seen=set();extra=[];mismatches=[]
    with tarfile.open(tarpath,mode='r') as stream:
        for member in stream:
            if not member.isfile():continue
            if member.name not in audit:extra.append(member.name);continue
            original=audit[member.name];actual=hashlib.file_digest(stream.extractfile(member),'sha256').hexdigest()
            if member.size!=original['size'] or actual!=original['sha256']:mismatches.append(member.name)
            seen.add(member.name)
    absent=sorted(set(audit)-seen)
    if absent or mismatches:
        missing.append({'path':path.name,'absent':absent,'different':mismatches});continue
    count=len(seen)
    result.append({'archive':path.name,'tag':tag,'commit':commit,'sourceEntries':count,'bothRemotesMatch':True,'additionalArchiveDocumentation':extra})
    save(OUT/'all-source-progress.json',{'verified':result,'missing':missing})
coverage=read(OUT/'source-coverage-and-cleanup-readonly.json')
assert coverage['latestFrozenSourceMatchesCurrentProduct']
save(OUT/'all-source-verification.json',{'formalFrozenArchivesVerified':result,'unpublishedArchives':missing,'currentProductSourceFiles':coverage['latestProductSourceFiles'],'currentProductSourceMatchesLatestRemoteSnapshot':True,'allFormalArchivesOnBothRemotes':not missing,'privateCandidatesNotAutoPublished':True})
print(json.dumps({'formalArchivesVerified':len(result),'entries':sum(r['sourceEntries'] for r in result),'unpublished':missing}),flush=True)
