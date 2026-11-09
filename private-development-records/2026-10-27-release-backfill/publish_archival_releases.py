"""Publish the four approved releases after verifying immutable asset digests.

Reuse the already-reviewed Git Credential Manager/API transport from the earlier
archive. Authentication stays only in memory. Each draft is owned by this marker;
failed starter uploads may be retried, but published or unrelated assets are never
replaced. Existing releases are read only and checked again after publication.
"""
from __future__ import annotations

from concurrent.futures import ThreadPoolExecutor, as_completed
import importlib.util
from pathlib import Path
import time

from archive_common import ARTIFACTS, MAIN_BEFORE, REPO, ROOT, digest, git, json_bytes, read_json

transport_path = ROOT / ".codex-artifacts/2026-10-26-git-archive/publish_releases.py"
spec = importlib.util.spec_from_file_location("existing_github_transport", transport_path)
transport = importlib.util.module_from_spec(spec)
spec.loader.exec_module(transport)
API = f"/repos/{REPO}"
BASE = f"https://github.com/{REPO}"
MARKER = "<!-- mesting-release-backfill-2026-10-27-beta20-to-102 -->"
STATE = ARTIFACTS / "release-publication.json"


def body_for(row):
    changes = {
        20: "修复搜索输入点击边界、评论页遮挡及静态启动页展示时间；统一语义配色并调整签到日历。",
        21: "更新真实播放队列手势、首次使用和协议流程、八页指南、欢迎角色及玻璃卡片内的设备列表。",
        22: "加入应用内版本检查、HTTPS 下载、暂停续传和完整性核验；调整欢迎入口、评论等待状态及成功提示。",
        23: "修正版本号间距、移除“我的”重复装扮入口、统一细线耳机图标；玻璃卡片内选择本机/耳机，扩充音乐首页、目录和个性化推荐。",
    }
    designation = "历史 Beta 预发布" if row["prerelease"] else "正式发布"
    return f"""{MARKER}
{changes[row['code']]}

{designation}，版本 **{row['version']}** / Android versionCode **{row['code']}**。

- 固定源码：[`{row['tag']}`]({BASE}/tree/{row['tag']}) / `{row['commit']}`。
- [修改记录]({BASE}/blob/{row['tag']}/{row['fixes']}) · [归档来源说明]({BASE}/blob/{row['tag']}/docs/version-archive/RELEASE-BACKFILL-2026-10-27.md)。
- 原始 APK：`{Path(row['apk']).name}`，**{row['apkBytes']:,} 字节**，Android 7.0+，ARM32 / ARM64，Release。
- APK SHA-256：`{row['apkSha256']}`。
- 原始源码：`{row['zip']}`，逐条核验 **{row['sourceFiles']}** 个文件；SHA-256：`{row['sourceHash']}`。
- 附件包含原始安装包与源码 ZIP、包核验 JSON、逐文件来源清单、安装说明、修改记录、归档说明和 SHA256SUMS.txt。GitHub 自动生成的源码包另外包含归档文档，不冒充原始 ZIP。

本次仅将既有交付补档到 Git/GitHub，提交创建于 2026-10-27，不回填旧开发时间。原 APK 和源码 ZIP 未重编译、重签或重打包；没有新增手机安装或真机验收，原测试与设备限制见修改记录。冻结文档里的未提交/未推送字段保留当时状态，由此次归档更新。

包名沿用 `com.mesting.music.beta`，显示名 Mesting Music。原证书 SHA-256：`8CE2203AD821AD8D38576F9AE86350D98254AC05F2CB974E773C1973B22E0333`；内部 beta 身份用于兼容升级，不代表 1.0.1/1.0.2 是测试版本。Android 仍限制降级；请勿为查看历史版本卸载日常应用。私钥、管理凭据和账号记录不在仓库或附件中。

当前最新正式版为 [1.0.2]({BASE}/releases/tag/v1.0.2)。[跨电脑接续入口]({BASE}/blob/beta/docs/CONTINUE-BETA.md)。1.0.1 起可通过“设置 → 版本更新”检查 music 的当前正式版。
"""


def asset_list(row):
    assets = [dict(asset) for asset in row["assets"] if asset["name"] != "SHA256SUMS.txt"]
    provenance = (ROOT / "docs/version-archive/RELEASE-BACKFILL-2026-10-27.md" if row["tag"] == "v1.0.2"
                  else ARTIFACTS / "generated" / row["tag"] / "archive-provenance.md")
    assets.append({"path": str(provenance), "name": "archive-provenance.md", "bytes": provenance.stat().st_size, "sha256": digest(provenance)})
    for asset in assets:
        path = ROOT / asset["path"]
        assert digest(path) == asset["sha256"] and path.stat().st_size == asset["bytes"]
    checksum = ARTIFACTS / "assets" / row["tag"] / "SHA256SUMS.txt"
    checksum.write_text("".join(f"{asset['sha256']}  {asset['name']}\n" for asset in assets), encoding="ascii")
    assets.append({"path": str(checksum), "name": checksum.name, "bytes": checksum.stat().st_size, "sha256": digest(checksum)})
    assert len(assets) == 8
    return assets


def asset_upload(headers, release_id, expected):
    for attempt in range(3):
        existing = transport.request(headers, "GET", API + f"/releases/{release_id}/assets?per_page=100")
        asset = next((item for item in existing if item["name"] == expected["name"]), None)
        if asset is not None and asset["state"] == "starter":
            # Only clean this operation's unfinished draft upload, never a public asset.
            release = transport.request(headers, "GET", API + f"/releases/{release_id}")
            assert release["draft"] and MARKER in release["body"]
            transport.request(headers, "DELETE", API + f"/releases/assets/{asset['id']}")
            asset = None
        if asset is None:
            try:
                asset = transport.upload(headers, release_id, ROOT / expected["path"], expected["name"])
            except Exception as error:
                if attempt == 2:
                    raise
                print(f"Retrying interrupted draft upload {expected['name']} ({type(error).__name__})", flush=True)
                time.sleep(2)
                continue
        assert asset["state"] == "uploaded" and asset["size"] == expected["bytes"]
        assert asset.get("digest") == "sha256:" + expected["sha256"].lower(), expected["name"]
        return {"id": asset["id"], "name": asset["name"], "size": asset["size"],
                "sha256": expected["sha256"], "url": asset["browser_download_url"]}
    raise RuntimeError("Upload retry bound exhausted")


def save(state):
    STATE.write_bytes(json_bytes(state))


def main():
    archive = read_json(ARTIFACTS / "archive-commits.json")
    assert read_json(ARTIFACTS / "git-push-verification.json")["atomicPushVerified"]
    headers = transport.credentials()
    assert transport.request(headers, "GET", "/user")["login"] == "Mesting42"
    assert transport.request(headers, "GET", API + "/branches/beta")["commit"]["sha"] == archive["finalCommit"]
    assert transport.request(headers, "GET", API + "/branches/main")["commit"]["sha"] == MAIN_BEFORE
    state = read_json(STATE) if STATE.exists() else {"repository": BASE, "releases": [], "verified": False}
    save(state)
    for row in archive["commits"]:
        tag = row["tag"]
        expected_body = body_for(row)
        assert "\ufffd" not in expected_body
        release = transport.request(headers, "GET", API + f"/releases/tags/{tag}")
        if release is None:
            release = transport.request(headers, "POST", API + "/releases", {
                "tag_name": tag, "target_commitish": row["commit"], "name": f"Mesting Music {row['version']}",
                "body": expected_body, "draft": True, "prerelease": row["prerelease"], "make_latest": "false",
            })
            print(f"Created draft {tag}: release {release['id']}", flush=True)
        else:
            assert MARKER in release["body"] and release["body"] == expected_body
        assert release["target_commitish"] == row["commit"]
        record = next((item for item in state["releases"] if item["tag"] == tag), None)
        if record is None:
            record = {"tag": tag, "id": release["id"], "commit": row["commit"], "prerelease": row["prerelease"], "assets": [], "published": False}
            state["releases"].append(record)
            save(state)
        assets = asset_list(row)
        with ThreadPoolExecutor(max_workers=2) as executor:
            futures = [executor.submit(asset_upload, headers, release["id"], asset) for asset in assets]
            for future in as_completed(futures):
                asset = future.result()
                record["assets"] = [item for item in record["assets"] if item["name"] != asset["name"]] + [asset]
                save(state)
                print(f"Verified {tag} asset {asset['name']}: {asset['size']} bytes, SHA-256 matches", flush=True)
        current = transport.request(headers, "GET", API + f"/releases/{release['id']}")
        assert len(current["assets"]) == len(assets)
        if current["draft"]:
            current = transport.request(headers, "PATCH", API + f"/releases/{release['id']}", {
                "draft": False, "prerelease": row["prerelease"],
                "make_latest": "true" if tag == "v1.0.2" else "false",
            })
        assert not current["draft"] and current["prerelease"] == row["prerelease"]
        assert current["body"] == expected_body
        record.update({"published": True, "url": current["html_url"]})
        save(state)
        print(f"Published {tag}: {current['html_url']}", flush=True)
    releases = transport.request(headers, "GET", API + "/releases?per_page=100")
    by_id = {release["id"]: release for release in releases}
    before = read_json(ARTIFACTS / "github-releases-before.json")
    for old in before:
        current = by_id[old["id"]]
        for key in ("tag_name", "target_commitish", "name", "body", "draft", "prerelease", "created_at", "published_at"):
            assert current[key] == old[key], (old["tag_name"], key)
        asset_keys = ("id", "name", "size", "digest", "state")
        reduce = lambda items: sorted([tuple(item.get(key) for key in asset_keys) for item in items])
        assert reduce(current["assets"]) == reduce(old["assets"])
    for record in state["releases"]:
        current = by_id[record["id"]]
        assert len(current["assets"]) == 8 and not current["draft"]
        assert current["prerelease"] == record["prerelease"]
        for asset in current["assets"]:
            expected = next(item for item in record["assets"] if item["name"] == asset["name"])
            assert asset["size"] == expected["size"] and asset["digest"] == "sha256:" + expected["sha256"].lower()
    assert transport.request(headers, "GET", API + "/releases/latest")["tag_name"] == "v1.0.2"
    assert not git("status", "--porcelain").strip()
    state.update({"verified": True, "newReleases": 4, "verifiedAssets": 32, "existingReleasesPreserved": len(before), "latest": "v1.0.2", "workingTreeClean": True})
    save(state)
    print("Verified all four releases and 32 asset digests; 1.0.2 is latest; existing releases are unchanged.", flush=True)


if __name__ == "__main__":
    main()
