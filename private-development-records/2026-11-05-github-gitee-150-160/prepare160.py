from common160 import *
import zipfile

inventory=read(OUT/'inventory.json'); assert inventory['complete']
before=read(OUT/'remote-before.json')['refs']
preserve()
statefile=OUT/'prepared-state.json'
state=read(statefile) if statefile.exists() else {'versions':[]}
cachefolder=OUT/'blob-files';cachefolder.mkdir(exist_ok=True)
cachefile=OUT/'blob-cache.json';cache=read(cachefile) if cachefile.exists() else {}
if not state['versions']:
    # Preserve the existing Gitee 50/51 objects and join their history without
    # replacing either tag or rewriting the current GitHub beta history.
    tree=git('rev-parse','v1.0.51^{tree}').decode().strip()
    bridge=git('-c','commit.gpgSign=false','commit-tree',tree,'-p',before['refs/heads/beta'],'-p','v1.0.51^{}',data=b'archive: join existing frozen 1.0.50 and 1.0.51 history\n').decode().strip()
    state['bridge']=bridge;save(statefile,state)
parent=state['versions'][-1]['commit'] if state['versions'] else state['bridge']
for row in inventory['versions'][len(state['versions']):]:
    audit=read(OUT/(row['tag']+'-source-audit.json'))
    if row['version'] in ['1.0.50','1.0.51']:
        commit=git('rev-parse',row['tag']+'^{}').decode().strip()
        checked=archive_verify(commit,audit)
    else:
        new={}
        with zipfile.ZipFile(ROOT/f"Mesting-Music-{row['tag']}-source.zip") as z:
            for name,check in audit.items():
                safe(name);value=check['sha256']
                if value not in cache and value not in new:
                    data=z.read(name);assert hashlib.sha256(data).hexdigest()==value
                    path=cachefolder/value
                    if not path.exists():path.write_bytes(data)
                    new[value]=path
        cache.update(write_blobs(new));save(cachefile,cache)
        modes=tree_files(parent)
        entries={n:{'oid':cache[c['sha256']],'mode':modes.get(n,{}).get('mode','100644')} for n,c in audit.items()}
        commit,tree=commit_tree(entries,row['version'],parent,
            f"archive: preserve Mesting Music {row['version']} / code{row['code']}\n\nOriginal APK {row['apkSha256']}\nFrozen source {row['sourceSha256']}")
        checked=archive_verify(commit,audit)
        git('-c','tag.gpgSign=false','tag','-a',row['tag'],commit,'-m',f"Mesting Music {row['version']} / code{row['code']}\nFrozen original source and APK; device acceptance remains as documented.")
        parent=commit
    state['versions'].append({**row,'commit':commit,'tagObject':git('rev-parse',row['tag']).decode().strip(),'gitArchiveEntriesVerified':checked})
    save(statefile,state);print('Prepared '+row['tag'],flush=True)

latest=state['versions'][-1]['commit']
def body(row):
    with zipfile.ZipFile(ROOT/f"Mesting-Music-{row['tag']}-source.zip") as z:
        notes=json.loads(z.read('assets/data/release-notes.json'))['releaseNotes']
    return f"# Mesting Music {row['version']} / code{row['code']}\n\n包名 `com.mesting.music`，原签名，内部Beta界面及定制引擎。\n\n"+''.join('- '+str(n)+'\n' for n in notes)+f"\n冻结源码提交：`{row['commit']}`。\n\nAPK SHA256：`{row['apkSha256']}`\n\n源码 SHA256：`{row['sourceSha256']}`\n\n原始APK、完整源码及校验文件作为附件保留；交接和开发记录不再单独公开上传。归档不代表新增真机或账号验收，真实领取到账等边界以各版原说明为准；本次未操作音乐更新后台或手机。历史未发布措辞保留原时点。"
for row in state['versions']:(OUT/(row['tag']+'-release.md')).write_text(body(row),'utf-8')
catalog='# 1.0.50～1.0.60 完整归档\n\n最新版本：**1.0.60 / code81**。包名 `com.mesting.music`。原始APK与完整源码，设备/账号验收边界保持原说明。\n\n'
for row in reversed(state['versions']):
    catalog+=f"- [{row['version']} / code{row['code']}](https://github.com/{REPO}/releases/tag/{row['tag']}) · [冻结源码](https://github.com/{REPO}/tree/{row['tag']})\n"
catalog+='\nGitee已同步原始源码标签；本轮Release附件因API授权不足，待补，不将Git标签冒充完整附件归档。\n\n'
def documentation(entries,label,parent,merge=None):
    changes={}
    for name in ['README.md','docs/apk-downloads.md','docs/versions.md']:
        old=git('cat-file','blob',entries[name]['oid']).decode('utf-8') if name in entries else ''
        path=OUT/(label+'-'+name.replace('/','_'));path.write_text(catalog+'\n---\n\n'+old,'utf-8');changes[name]=path
    for n,oid in write_blobs(changes).items():entries[n]={'oid':oid,'mode':'100644'}
    if merge:
        index=OUT/('index-'+label);env={'GIT_INDEX_FILE':str(index)}
        git('read-tree','--empty',env=env)
        records=b''.join((r.get('mode','100644')+' '+r['oid']+'\t'+n).encode()+b'\0' for n,r in sorted(entries.items()))
        git('update-index','-z','--index-info',data=records,env=env);tree=git('write-tree',env=env).decode().strip()
        return git('-c','commit.gpgSign=false','commit-tree',tree,'-p',parent,'-p',merge,data=b'docs: index frozen releases through 1.0.60\n').decode().strip()
    return commit_tree(entries,label,parent,'docs: index frozen releases through 1.0.60')[0]
state['betaTip']=documentation(tree_files(latest),'navigation-beta',latest)
state['mainTip']=documentation(tree_files(before['refs/heads/main']),'navigation-main',before['refs/heads/main'])
gitee=read(OUT/'gitee-refs-before.json')['refs/heads/main']
entries=tree_files(latest)
for name,row in tree_files(gitee).items():
    if name.startswith('docs/gitee-'):entries.setdefault(name,row)
state['giteeTip']=documentation(entries,'navigation-gitee',gitee,latest)
save(statefile,state);print('Prepared all snapshots and fast-forward navigation tips.',flush=True)
