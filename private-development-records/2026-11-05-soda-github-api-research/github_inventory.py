"""Read public repository identity only; never run fetched project code."""
import concurrent.futures
import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
REPOS = ["MOPELotus/TuneWeave", "guohuiyuan/music-lib", "guohuiyuan/go-music-api",
         "guohuiyuan/go-music-dl", "guowenye/qishui-api", "CharlesPikachu/musicdl",
         "Zencok/baka-plugins", "XxHuberrr/Mineradio-paused", "1093791954/QishuiHelper",
         "mojinmopin-art/qishui-music"]


def read(repo):
    request = urllib.request.Request("https://api.github.com/repos/" + repo,
        headers={"User-Agent": "Mesting-API-research", "Accept": "application/vnd.github+json"})
    try:
        with urllib.request.urlopen(request, timeout=25) as response:
            item = json.load(response)
            fields = ["full_name", "html_url", "default_branch", "description", "archived", "fork",
                      "created_at", "updated_at", "pushed_at", "size", "license", "stargazers_count"]
            return {"requested_repo": repo, **{key: item.get(key) for key in fields},
                    "rate_limit_remaining": response.headers.get("X-RateLimit-Remaining")}
    except Exception as error:
        return {"requested_repo": repo, "error": type(error).__name__ + ": " + str(error)}


with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
    rows = list(executor.map(read, REPOS))
(ROOT / "github-repository-inventory.json").write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8")
for row in rows:
    print(json.dumps({key: row.get(key) for key in ["requested_repo", "full_name", "default_branch", "size", "pushed_at", "archived", "rate_limit_remaining", "error"]}, ensure_ascii=False))
