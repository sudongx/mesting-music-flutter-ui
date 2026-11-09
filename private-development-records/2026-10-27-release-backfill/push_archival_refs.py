"""Publish only the approved fast-forward branch and four new annotated tags."""
from archive_common import ARTIFACTS, BASELINE, ROOT, digest, git, json_bytes, read_json


def parse_refs(payload):
    return dict(line.decode().split("\t")[::-1] for line in payload.splitlines())


def main():
    archive = read_json(ARTIFACTS / "archive-commits.json")
    before = parse_refs((ARTIFACTS / "remote-refs-before.txt").read_bytes())
    assert parse_refs(git("ls-remote", "--heads", "--tags", "origin")) == before
    assert git("rev-parse", "HEAD").decode().strip() == BASELINE
    assert not git("diff", "--cached", "--name-only").strip()
    preserved = read_json(ARTIFACTS / "workspace-hashes-before-commits.json")
    assert all(digest(ROOT / name) == sha for name, sha in preserved.items())
    tagger = git("var", "GIT_COMMITTER_IDENT").decode().strip()
    transaction = ["start", f"update refs/heads/beta {archive['finalCommit']} {BASELINE}"]
    for row in archive["commits"]:
        tag_bytes = (
            f"object {row['commit']}\ntype commit\ntag {row['tag']}\ntagger {tagger}\n\n"
            f"Mesting Music {row['version']}: verified frozen delivery archive.\n"
        ).encode("utf-8")
        tag_object = git("mktag", data=tag_bytes).decode().strip()
        transaction.append(f"create refs/tags/{row['tag']} {tag_object}")
    transaction += ["prepare", "commit", ""]
    git("update-ref", "--stdin", data="\n".join(transaction).encode())
    # Synchronize the index to already-present workspace bytes, with no checkout.
    git("read-tree", archive["finalCommit"])
    assert all(digest(ROOT / name) == sha for name, sha in preserved.items())
    assert not git("status", "--porcelain").strip()
    push_args = ["push", "--atomic", "origin", "refs/heads/beta:refs/heads/beta"]
    push_args += [f"refs/tags/{row['tag']}:refs/tags/{row['tag']}" for row in archive["commits"]]
    output = git(*push_args)
    (ARTIFACTS / "push-stdout.txt").write_bytes(output)
    after = parse_refs(git("ls-remote", "--heads", "--tags", "origin"))
    for ref, oid in before.items():
        assert after[ref] == (archive["finalCommit"] if ref == "refs/heads/beta" else oid), ref
    expected_new = set()
    for row in archive["commits"]:
        ref = f"refs/tags/{row['tag']}"
        expected_new.update((ref, ref + "^{}"))
        assert after[ref + "^{}"] == row["commit"]
    assert set(after) - set(before) == expected_new
    assert not git("status", "--porcelain").strip()
    result = {"branch": "beta", "commit": archive["finalCommit"], "atomicPushVerified": True,
              "newTags": [row["tag"] for row in archive["commits"]],
              "existingMainTagsPreserved": True, "workingFilesPreserved": True, "workingTreeClean": True}
    (ARTIFACTS / "git-push-verification.json").write_bytes(json_bytes(result))
    print(json_bytes(result).decode())


if __name__ == "__main__":
    main()
