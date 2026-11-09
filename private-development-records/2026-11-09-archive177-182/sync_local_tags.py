"""Import only verified public version tags; preserve HEAD, branch and index."""
from archive import *
assert (OUT/'complete.json').exists()
state=read(OUT/'prepared.json');specs=[]
for r in state['versions']:
    ref='refs/tags/'+r['tag']
    p=subprocess.run(['git','--no-optional-locks','show-ref','--verify','--hash',ref],cwd=ROOT,capture_output=True)
    if p.returncode==0:assert p.stdout.decode().strip()==r['tagObject'],ref
    else:specs.append(r['tagObject']+':'+ref)
if specs:
    p=subprocess.run(['git','--no-optional-locks','-c','gc.auto=0','fetch','--no-tags',str(C.BARE),*specs],cwd=ROOT,capture_output=True,timeout=240)
    assert p.returncode==0,'Local public tag import failed'
for r in state['versions']:
    actual=subprocess.check_output(['git','--no-optional-locks','rev-parse','refs/tags/'+r['tag']],cwd=ROOT).decode().strip()
    assert actual==r['tagObject']
save(OUT/'local-git-tags.json',{'verifiedPrivateVersionTags':6,'privateBackupImportedToPrimary':False,'preservation':preserve(strict=False)})
print('6 local version tags verified; primary HEAD/branch/index unchanged',flush=True)
