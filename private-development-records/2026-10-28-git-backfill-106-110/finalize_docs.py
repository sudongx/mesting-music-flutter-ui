"""Finish public handoff after all releases exist; preserve every runtime file."""
from common import ROOT, OUT, ARCHIVE_DOC, git, read_json, save, sha, tree_files
from continuation_docs import prepare, DOC_OVERRIDES, HANDOFF
from build_commits import provenance, create_commit


def main():
    assert read_json(OUT/'release-publication.json')['verified']
    archive=read_json(OUT/'archive-commits.json')
    parent=archive['finalCommit']
    assert git('rev-parse','HEAD').decode().strip()==parent
    assert not git('status','--porcelain').strip()
    prior=read_json(OUT/'working-files-before-push.json')
    prepare(archive['commits'],complete=True)
    (ROOT/ARCHIVE_DOC).write_bytes(provenance(archive['commits'],complete=True))
    changed={name for name,value in prior.items() if sha(ROOT/name)!=value}
    allowed=DOC_OVERRIDES|{HANDOFF,ARCHIVE_DOC}
    assert changed==allowed,sorted(changed^allowed)
    names=sorted(set(filter(None,git('ls-files','--cached','--others','--exclude-standard','-z').decode('utf-8').split('\0'))))
    assert set(names)==set(prior)
    files={name:ROOT/name for name in names}
    commit,tree=create_commit(files,'1.0.10-archive-complete',parent,tree_files(parent))
    before_remote=git('ls-remote','origin','refs/heads/beta').decode().split()[0]
    assert before_remote==parent
    expected={name:sha(path) for name,path in files.items()}
    git('update-ref','refs/heads/beta',commit,parent)
    git('read-tree',commit)
    assert all(sha(ROOT/name)==value for name,value in expected.items())
    assert not git('status','--porcelain').strip()
    git('push','origin','refs/heads/beta:refs/heads/beta')
    assert git('ls-remote','origin','refs/heads/beta').decode().split()[0]==commit
    save(OUT/'continuation-final.json',{'commit':commit,'parent':parent,'tree':tree,
        'documentationOnlyChanges':sorted(changed),'workingTreeClean':True,
        'allRuntimeFilesPreserved':True,'pushed':True})
    print('Final continuation docs pushed: '+commit,flush=True)


if __name__=='__main__':
    main()
