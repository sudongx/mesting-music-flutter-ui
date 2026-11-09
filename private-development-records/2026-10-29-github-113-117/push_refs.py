"""Publish only the approved fast-forward beta ref and five new annotated tags."""
from common import *
archive=read(OUT/'archive-commits.json');before=refs((OUT/'remote-refs-before.txt').read_bytes())
assert refs(git('ls-remote','--heads','--tags','origin'))==before,'Remote changed; inspect instead of overwriting'
assert before['refs/heads/beta']==BASELINE
preserve()
# Retain the active dirty beta checkout. These objects/tags live in this Git
# database, but no checkout, primary read-tree, stash or reset is performed.
localref='refs/heads/codex/archive-1.0.13-1.0.17'
transaction=['start',f"create {localref} {archive['finalCommit']}"]
identity=git('var','GIT_COMMITTER_IDENT').decode().strip()
for row in archive['commits']:
 assert 'refs/tags/'+row['tag'] not in before
 payload=f"object {row['commit']}\ntype commit\ntag {row['tag']}\ntagger {identity}\n\nMesting Music {row['version']}: verified original frozen delivery.\n"
 oid=git('mktag',data=payload.encode('utf-8')).decode().strip()
 transaction.append(f"create refs/tags/{row['tag']} {oid}")
transaction+=['prepare','commit','']
git('update-ref','--stdin',data='\n'.join(transaction).encode())
arguments=['push','--atomic','origin',f"{localref}:refs/heads/beta"]+[f"refs/tags/{row['tag']}:refs/tags/{row['tag']}" for row in archive['commits']]
(OUT/'push-output.txt').write_bytes(git(*arguments))
after=refs(git('ls-remote','--heads','--tags','origin'))
for ref,value in before.items():assert after[ref]==(archive['finalCommit'] if ref=='refs/heads/beta' else value),ref
expected=set()
for row in archive['commits']:
 name='refs/tags/'+row['tag'];expected|={name,name+'^{}'};assert after[name+'^{}']==row['commit']
assert set(after)-set(before)==expected
preserve()
save(OUT/'git-push-verification.json',{'branch':'beta','commit':archive['finalCommit'],'localArchiveRef':localref,
 'atomicPushVerified':True,'newTags':[r['tag'] for r in archive['commits']],
 'mainAndExistingTagsPreserved':True,'primaryHeadAndIndexUnchanged':True,'workspaceBytesPreserved':True,
 'localActiveBetaAdvanced':False})
print('Atomic remote push verified: beta plus five tags; active dirty checkout/index unchanged',flush=True)
