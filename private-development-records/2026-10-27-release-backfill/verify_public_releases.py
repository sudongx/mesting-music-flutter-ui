"""Unauthenticated readback of releases, checksums, bounded binary bytes and refs."""
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
from urllib.request import Request, urlopen

from archive_common import ARTIFACTS, MAIN_BEFORE, REPO, ROOT, digest, git, json_bytes, read_json

API = f"https://api.github.com/repos/{REPO}"


def public_json(url):
    with urlopen(Request(url, headers={"User-Agent": "Mesting-public-archive-verification", "Accept": "application/vnd.github+json"}), timeout=30) as response:
        assert response.status == 200
        return json.load(response)


def download_prefix(url, limit):
    # No Authorization header is used, so redirects cannot expose credentials.
    request = Request(url, headers={"User-Agent": "Mesting-public-archive-verification", "Range": f"bytes=0-{limit - 1}"})
    with urlopen(request, timeout=30) as response:
        assert response.status in (200, 206)
        return response.read(limit), response.status


def verify_release(row):
    release = public_json(API + f"/releases/tags/{row['tag']}")
    assert not release["draft"] and release["prerelease"] == row["prerelease"]
    assert release["target_commitish"] == row["commit"]
    assert "\ufffd" not in release["body"] and row["commit"] in release["body"]
    published = read_json(ARTIFACTS / "release-publication.json")
    record = next(item for item in published["releases"] if item["tag"] == row["tag"])
    expected = {asset["name"]: asset for asset in record["assets"]}
    assert len(release["assets"]) == len(expected) == 8
    for asset in release["assets"]:
        check = expected[asset["name"]]
        assert asset["state"] == "uploaded" and asset["size"] == check["size"]
        assert asset["digest"] == "sha256:" + check["sha256"].lower()
    checksum = next(asset for asset in release["assets"] if asset["name"] == "SHA256SUMS.txt")
    data, _ = download_prefix(checksum["browser_download_url"], checksum["size"] + 1)
    assert len(data) == checksum["size"]
    assert hashlib.sha256(data).hexdigest().upper() == expected["SHA256SUMS.txt"]["sha256"]
    lines = {line.split("  ", 1)[1]: line.split("  ", 1)[0] for line in data.decode("ascii").splitlines()}
    assert set(lines) == set(expected) - {"SHA256SUMS.txt"}
    assert all(lines[name] == expected[name]["sha256"] for name in lines)
    binary_checks = []
    for key in ("apk", "zip"):
        local = ROOT / row[key]
        asset = next(item for item in release["assets"] if item["name"] == local.name)
        prefix, status = download_prefix(asset["browser_download_url"], 65536)
        with local.open("rb") as stream:
            assert prefix == stream.read(65536)
        binary_checks.append({"name": local.name, "status": status, "publicBytesChecked": len(prefix), "matchesOriginalPrefix": True})
    result = {"tag": row["tag"], "commit": row["commit"], "url": release["html_url"],
              "public": True, "prerelease": release["prerelease"], "verifiedAssetDigests": 8,
              "publicChecksumFileMatches": True, "checksumListsAllOtherAssets": True,
              "utf8BodyIntact": True, "binaryPublicPrefixChecks": binary_checks}
    print(json_bytes({"verifiedPublicRelease": row["tag"], "assetDigests": 8}).decode().strip(), flush=True)
    return result


def main():
    publication = read_json(ARTIFACTS / "release-publication.json")
    assert publication["verified"]
    archive = read_json(ARTIFACTS / "archive-commits.json")
    with ThreadPoolExecutor(max_workers=2) as executor:
        releases = list(executor.map(verify_release, archive["commits"]))
    latest = public_json(API + "/releases/latest")
    assert latest["tag_name"] == "v1.0.2" and not latest["prerelease"] and not latest["draft"]
    before = dict(line.decode().split("\t")[::-1] for line in (ARTIFACTS / "remote-refs-before.txt").read_bytes().splitlines())
    after = dict(line.decode().split("\t")[::-1] for line in git("ls-remote", "--heads", "--tags", "origin").splitlines())
    for ref, oid in before.items():
        assert after[ref] == (archive["finalCommit"] if ref == "refs/heads/beta" else oid)
    assert after["refs/heads/main"] == MAIN_BEFORE
    for row in archive["commits"]:
        assert after[f"refs/tags/{row['tag']}^{{}}"] == row["commit"]
    health = public_json("https://download.csnas.asia/api/app/music/health")
    current = archive["commits"][-1]
    assert health["version"] == "1.0.2" and health["android_version_code"] == 23
    assert health["sha256"].upper() == current["apkSha256"] and health["file_size"] == current["apkBytes"]
    assert not git("status", "--porcelain").strip()
    result = {
        "date": "2026-10-27", "timezone": "Asia/Shanghai", "repository": f"https://github.com/{REPO}",
        "verified": True, "branch": "beta", "commit": archive["finalCommit"], "latestFormalRelease": "v1.0.2",
        "releases": releases, "totalNewReleases": 4, "totalVerifiedAssetDigests": 32,
        "existingMainAndTagsUnchanged": True, "existingReleasesUnchanged": publication["existingReleasesPreserved"],
        "ringDownloadStill102Code23AndSameApk": True, "workingTreeClean": True,
        "publicReadbackAuthenticated": False, "phoneAccessPerformed": False,
    }
    (ARTIFACTS / "final-public-verification.json").write_bytes(json_bytes(result))
    print(json_bytes({key: value for key, value in result.items() if key != "releases"}).decode())


if __name__ == "__main__":
    main()
