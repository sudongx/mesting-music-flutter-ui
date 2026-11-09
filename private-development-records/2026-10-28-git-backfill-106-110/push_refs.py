"""Atomically publish the approved beta fast-forward and five new tags."""
from common import OUT, ROOT, BASELINE, MAIN, git, read_json, save, sha


def refs(data):
    return dict(line.decode().split('\t')[::-1] for line in data.splitlines())


def main():
    archive = read_json(OUT/'archive-commits.json')
    before = refs((OUT/'remote-refs-before.txt').read_bytes())
    assert refs(git('ls-remote','--heads','--tags','origin')) == before
    assert before['refs/heads/beta'] == BASELINE and before['refs/heads/main'] == MAIN
    assert git('rev-parse','HEAD').decode().strip() == BASELINE
    assert not git('diff','--cached','--name-only').strip()
    preserved = read_json(OUT/'working-files-before-push.json')
    assert all(sha(ROOT/name) == value for name,value in preserved.items())
    tagger = git('var','GIT_COMMITTER_IDENT').decode().strip()
    transaction = ['start', f"update refs/heads/beta {archive['finalCommit']} {BASELINE}"]
    for row in archive['commits']:
        text = (f"object {row['commit']}\ntype commit\ntag {row['tag']}\ntagger {tagger}\n\n"
            f"Mesting Music {row['version']}: original frozen APK/source archive.\n")
        tag = git('mktag',data=text.encode()).decode().strip()
        transaction.append(f"create refs/tags/{row['tag']} {tag}")
    transaction += ['prepare','commit','']
    git('update-ref','--stdin',data='\n'.join(transaction).encode())
    # This updates only index metadata. No checkout, reset or file replacement.
    git('read-tree',archive['finalCommit'])
    assert all(sha(ROOT/name) == value for name,value in preserved.items())
    assert not git('status','--porcelain').strip()
    arguments = ['push','--atomic','origin','refs/heads/beta:refs/heads/beta']
    arguments += [f"refs/tags/{x['tag']}:refs/tags/{x['tag']}" for x in archive['commits']]
    (OUT/'push-output.txt').write_bytes(git(*arguments))
    after = refs(git('ls-remote','--heads','--tags','origin'))
    for ref,value in before.items():
        assert after[ref] == (archive['finalCommit'] if ref == 'refs/heads/beta' else value),ref
    expected_new = set()
    for row in archive['commits']:
        name = 'refs/tags/'+row['tag']
        expected_new |= {name,name+'^{}'}
        assert after[name+'^{}'] == row['commit']
    assert set(after)-set(before) == expected_new
    save(OUT/'git-push-verification.json',{'branch':'beta','commit':archive['finalCommit'],
        'atomicPushVerified':True,'newTags':[x['tag'] for x in archive['commits']],
        'mainAndExistingTagsPreserved':True,'workingFilesPreserved':True,'workingTreeClean':True})
    print('Atomic push verified: beta and v1.0.6 through v1.0.10; old main/tags unchanged.',flush=True)


if __name__ == '__main__':
    main()
