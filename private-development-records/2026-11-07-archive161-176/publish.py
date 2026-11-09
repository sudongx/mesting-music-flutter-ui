"""Push explicit new archive refs and upload verified assets; preserve old releases."""
from archive import *
state=read(OUT/'prepared.json');assert len(state['versions'])==16
base=read(OUT/'before-refs.json');headers=C.credentials();lock=threading.Lock()
latest=state['versions'][-1]['commit']
for row in state['versions']:
    if row['sourceAvailable']:
        pubspec=(OUT/'blobs'/row['audit']['pubspec.yaml']['sha256']).read_text('utf8')
        assert re.search(r'^version:\s*'+re.escape(row['version'])+r'\+'+str(row['code'])+r'\s*$',pubspec,re.M)
        source_notes=json.loads((OUT/'blobs'/row['audit']['assets/data/release-notes.json']['sha256']).read_text('utf8'))
        assert source_notes['version']==row['version'] and source_notes['versionCode']==row['code']
        assert source_notes['releaseNotes']==row['releaseNotes']
def commit_with_parents(tree,parent,other,message):
    # Git objects only; never touch the primary checkout/index.
    return git('-c','commit.gpgSign=false','commit-tree',tree,'-p',parent,'-p',other,data=(message+'\n').encode()).decode().strip()
if not (OUT/'tips.json').exists():
    lines=['# Mesting Music 1.0.61–1.0.76 版本归档','',
        '最新归档：1.0.76/code97。性能和平台业务的未完成验收仍保留；归档不代表稳定120FPS。',
        '公开源码排除交接/开发记录；各版本产品代码来自各自冻结源码。1.0.63仅有APK，源码缺口明确保留。','']
    lines += [f"- [{r['version']} / code{r['code']}](https://github.com/{REPO}/releases/tag/{r['tag']})"+(' · 源码缺失，仅APK' if not r['sourceAvailable'] else '') for r in reversed(state['versions'])]
    readme=OUT/'public-README.md';entries=C.tree_files(base['github']['refs/heads/main'])
    old=git('cat-file','blob',entries['README.md']['oid']).decode('utf8')
    readme.write_text('\n'.join(lines)+'\n\n---\n\n'+old,'utf8')
    entries['README.md']={'mode':'100644','oid':C.write_blobs({'README.md':readme})['README.md']}
    main,_=C.commit_tree(entries,'github-main-index',base['github']['refs/heads/main'],'docs: index immutable release archives61 through76')
    gitee_tree=git('rev-parse',latest+'^{tree}').decode().strip()
    gitee=commit_with_parents(gitee_tree,base['gitee']['refs/heads/main'],latest,'archive: synchronize frozen product versions61 through76')
    save(OUT/'tips.json',{'github':{'refs/heads/main':main,'refs/heads/beta':latest},'gitee':{'refs/heads/main':gitee}})
tips=read(OUT/'tips.json')
for host in URLS:
    live=refs(host);wanted=dict(tips[host])
    wanted.update({'refs/tags/'+r['tag']:r['tagObject'] for r in state['versions']})
    for ref,oid in wanted.items():
        assert live.get(ref) in [None,base[host].get(ref),oid],(host,ref,'collision')
        if ref.startswith('refs/heads/') and live.get(ref) and live[ref]!=oid:git('merge-base','--is-ancestor',live[ref],oid)
    git('push','--atomic',URLS[host],*[oid+':'+ref for ref,oid in wanted.items()])
    after=refs(host);assert all(after.get(ref)==oid for ref,oid in wanted.items())
    save(OUT/(host+'-refs-after.json'),after);print(host+' explicit refs pushed and read back',flush=True)
def body(r):
    s=f"# Mesting Music {r['version']} / code{r['code']}\n\n原签名APK，包名com.mesting.music，内部Beta。\n\n"
    s+=''.join('- '+str(n)+'\n' for n in r['releaseNotes'])
    s+='\n'+('本版冻结源码缺失，仅归档原APK和校验；标签内仅保存缺口清单，不以其他版本源码替代。' if not r['sourceAvailable'] else '公开源码由本版原冻结包生成；产品代码保留原字节，交接、开发及设备记录已排除并另存私有Gitee。')
    s+='\n\n归档不增加真机/账号/权益/整曲验收。1.0.74存在历史原生崩溃；1.0.75–76仍未达到稳定120FPS，部分尾帧仍变差。\n\n'
    s+=''.join(a['name']+' SHA256: `'+a['sha256']+'`\n\n' for a in r['assets'] if not a['name'].endswith('.txt'))
    return s
progress=read(OUT/'published.json') if (OUT/'published.json').exists() else {}
def one(r):
    tag=r['tag'];endpoint=f'/repos/{REPO}/releases/tags/{tag}'
    release=C.request(headers,'GET',endpoint)
    if release is None:
        release=C.request(headers,'POST',f'/repos/{REPO}/releases',{'tag_name':tag,'target_commitish':r['commit'],'name':f"Mesting Music {r['version']} / code{r['code']}",'body':body(r),'draft':True,'prerelease':False,'make_latest':'false'})
    rid=release['id'];expected={a['name']:a for a in r['assets']}
    for a in r['assets']:
        assert sha(a['path'])==a['sha256']
        for attempt in range(4):
            live={x['name']:x for x in C.request(headers,'GET',f'/repos/{REPO}/releases/{rid}/assets?per_page=100')}
            found=live.get(a['name'])
            if found and found['state']=='starter' and not found.get('digest'):
                assert release['draft'];C.request(headers,'DELETE',f"/repos/{REPO}/releases/assets/{found['id']}");found=None
            if found:break
            try:found=C.upload(headers,rid,a['path'],a['name']);break
            except Exception:
                if attempt==3:raise
                time.sleep(2)
        assert found['size']==a['size'] and found.get('digest')=='sha256:'+a['sha256']
    live=C.request(headers,'GET',f'/repos/{REPO}/releases/{rid}/assets?per_page=100')
    assert {x['name'] for x in live}==set(expected)
    with lock:
        progress[tag]={'releaseId':rid,'assetsVerified':len(live),'draft':release['draft']};save(OUT/'published.json',progress)
    print('Assets verified '+tag,flush=True)
with ThreadPoolExecutor(max_workers=4) as pool:
    jobs=[pool.submit(one,r) for r in state['versions']]
    for job in as_completed(jobs):job.result()
for r in state['versions']:
    rid=progress[r['tag']]['releaseId']
    release=C.request(headers,'PATCH',f'/repos/{REPO}/releases/{rid}',{'draft':False,'prerelease':False,'make_latest':'true' if r['tag']=='v1.0.76' else 'false','body':body(r)})
    progress[r['tag']].update(draft=False,url=release['html_url']);save(OUT/'published.json',progress)
    print('Published '+r['tag'],flush=True)
assert C.request(headers,'GET',f'/repos/{REPO}/releases/latest')['tag_name']=='v1.0.76'
save(OUT/'publication-preservation.json',preserve())
