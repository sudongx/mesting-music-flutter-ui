"""Verify an independent Gitee clone, source bytes and unchanged GitHub state.

Git object IDs verify the complete existing history; fsck re-hashes objects
fetched from Gitee. Every file in the two newly imported frozen versions is
also checked with SHA-256 against the original ZIP audit, with no checkout
filters or Windows line-ending conversion involved.
"""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import os
import subprocess
import sys
import tarfile

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-11-04-gitee-archive'
FRESH = OUT / 'fresh-gitee.git'
URL = 'https://gitee.com/Mesting42/mesting-music-flutter.git'
ENV = dict(os.environ, GIT_OPTIONAL_LOCKS='0', GIT_TERMINAL_PROMPT='0', GCM_INTERACTIVE='never')


def read(path):
    return json.loads(Path(path).read_text('utf-8-sig'))


def save(name, value):
    (OUT / name).write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', 'utf-8')


def git(*args):
    result = subprocess.run(['git', '--git-dir=' + str(FRESH), *args],
                            env=ENV, capture_output=True)
    if result.returncode:
        raise RuntimeError(result.stderr.decode('utf-8', 'replace')[:3000])
    return result.stdout


def files(commit):
    result = {}
    for line in git('ls-tree', '-rz', commit).split(b'\0'):
        if line:
            meta, name = line.split(b'\t', 1)
            mode, kind, oid = meta.decode().split()
            assert kind == 'blob'
            result[name.decode('utf-8')] = {'mode': mode, 'oid': oid}
    return result


def verify_new_zip(row):
    expected = read(OUT / (row['tag'] + '-source-audit.json'))
    process = subprocess.Popen(['git', '--git-dir=' + str(FRESH), '-c', 'core.autocrlf=false',
                                'archive', '--format=tar', row['commit']],
                               stdout=subprocess.PIPE, stderr=subprocess.PIPE, env=ENV)
    seen = set()
    with tarfile.open(fileobj=process.stdout, mode='r|') as archive:
        for entry in archive:
            if entry.isdir():
                continue
            assert entry.isfile() and entry.name in expected, entry.name
            check = expected[entry.name]
            assert entry.size == check['size']
            assert hashlib.file_digest(archive.extractfile(entry), 'sha256').hexdigest() == check['sha256'], entry.name
            seen.add(entry.name)
    error = process.stderr.read()
    assert process.wait() == 0, error.decode('utf-8', 'replace')
    assert seen == set(expected)
    return len(seen)


def verify_gitee():
    plan = read(OUT / 'prepared-backup.json')
    pushed = read(OUT / 'push-final.json')
    assert pushed['remoteRefs'] == plan['refsToPush']
    assert not FRESH.exists(), 'Do not reuse the source-preparation repository as verification'
    proc = subprocess.run(['git', '-c', 'credential.username=Mesting42',
                           'clone', '--bare', URL, str(FRESH)], env=ENV, capture_output=True)
    (OUT / 'fresh-clone.log').write_bytes(proc.stdout + proc.stderr)
    assert proc.returncode == 0, 'Independent clone failed; inspect retained report'
    git('config', 'core.autocrlf', 'false')
    git('config', 'gc.auto', '0')
    print('Independent Gitee clone completed.', flush=True)
    fsck = subprocess.run(['git', '--git-dir=' + str(FRESH), 'fsck', '--full', '--strict'],
                          env=ENV, capture_output=True)
    (OUT / 'fresh-fsck.log').write_bytes(fsck.stdout + fsck.stderr)
    assert fsck.returncode == 0, 'Fetched Git objects failed integrity validation'
    refs = {}
    for line in git('for-each-ref', '--format=%(refname) %(objectname)').decode().splitlines():
        name, oid = line.split()
        refs[name] = oid
    assert refs == plan['refsToPush'], 'Only the approved branch and 71 tags may be present'
    before = read(OUT / 'github-before.json')
    original_tags = {x['ref']: x['object']['sha'] for x in before['tags']}
    versions = []
    total = 0
    for row in plan['versions']:
        tag = row['tag']
        assert refs['refs/tags/' + tag] == row['tagObject']
        assert git('rev-parse', tag + '^{}').decode().strip() == row['commit']
        assert git('rev-parse', tag + '^{tree}').decode().strip() == row['tree']
        current = files(row['commit'])
        count = len(current)
        if row['sourceOrigin'] == 'existing_github_tag':
            assert original_tags['refs/tags/' + tag] == row['tagObject']
            assert count == row['sourceEntries']
            method = 'original_tag_and_tree_identity_plus_fresh_fsck'
        else:
            assert count == verify_new_zip(row) == row['sourceEntriesVerified']
            method = 'every_file_sha256_against_original_frozen_zip'
        total += count
        versions.append({'tag': tag, 'commit': row['commit'], 'sourceEntries': count, 'method': method})
    assert total == plan['sourceFileEntriesAcrossVersions'] == 111089
    for name, checksum in plan['generatedDocumentation'].items():
        assert hashlib.sha256(git('show', plan['mainCommit'] + ':' + name)).hexdigest() == checksum, name
    catalogue = json.loads(git('show', plan['mainCommit'] + ':docs/gitee-versions.json'))
    assert catalogue['versionCount'] == 71
    assert len(catalogue['versions']) == 71
    attachments = sum(len(row['attachments']) for row in catalogue['versions'])
    assert attachments == plan['originalAttachmentCount'] == 685
    result = {'completedAtUtc': datetime.now(timezone.utc).isoformat(), 'url': URL,
              'independentNetworkClone': True, 'fullStrictFsckPassed': True,
              'exactRemoteRefsMatched': True, 'branchCount': 1, 'tagCount': 71,
              'originalGitHubTagsPreserved': 69, 'newFrozenZipVersionsVerified': 2,
              'sourceEntriesAcrossVersionsVerified': total,
              'generatedDocumentationFilesVerified': len(plan['generatedDocumentation']),
              'originalAttachmentLinksRetained': attachments,
              'giteeAttachmentUploads': False, 'versions': versions}
    save('fresh-source-verification.json', result)
    print(json.dumps({k: v for k, v in result.items() if k != 'versions'}, indent=2), flush=True)


def github_projection(state):
    """Ignore read counters; compare all refs, release content and attachments."""
    return {'repository': state['repository'], 'defaultBranch': state['defaultBranch'],
            'private': state['private'],
            'heads': {x['ref']: x['object']['sha'] for x in state['heads']},
            'tags': {x['ref']: x['object']['sha'] for x in state['tags']},
            'releases': {r['tag_name']: {k: r[k] for k in [
                'id', 'tag_name', 'name', 'body', 'draft', 'prerelease', 'target_commitish',
                'published_at', 'updated_at']} | {'assets': {a['id']: {k: a.get(k) for k in [
                    'name', 'size', 'digest', 'state', 'browser_download_url', 'updated_at']}
                    for a in r['assets']}} for r in state['releases']}}


def verify_github():
    sys.path.insert(0, str(ROOT / '.codex-artifacts/2026-10-30-github-119-122'))
    from github_transport import credentials, request
    headers = credentials()
    base = '/repos/Mesting42/mesting-music-flutter'
    repo = request(headers, 'GET', base)
    after = {'observedAtUtc': datetime.now(timezone.utc).isoformat(),
             'repository': repo['html_url'], 'defaultBranch': repo['default_branch'],
             'private': repo['private'],
             'heads': request(headers, 'GET', base + '/git/matching-refs/heads/'),
             'tags': request(headers, 'GET', base + '/git/matching-refs/tags/'),
             'releases': request(headers, 'GET', base + '/releases?per_page=100')}
    save('github-after.json', after)
    before = read(OUT / 'github-before.json')
    assert github_projection(before) == github_projection(after), 'GitHub changed; inspect before/after'
    result = {'completedAtUtc': after['observedAtUtc'], 'allHeadsUnchanged': True,
              'allTagsUnchanged': True, 'allReleaseContentAndAssetsUnchanged': True,
              'branchCount': len(after['heads']), 'tagCount': len(after['tags']),
              'releaseCount': len(after['releases']),
              'assetCount': sum(len(r['assets']) for r in after['releases']),
              'githubApiWritesPerformed': False}
    save('github-unchanged-verification.json', result)
    print(json.dumps(result, indent=2), flush=True)


if __name__ == '__main__':
    if sys.argv[1:] == ['github']:
        verify_github()
    else:
        verify_gitee()
