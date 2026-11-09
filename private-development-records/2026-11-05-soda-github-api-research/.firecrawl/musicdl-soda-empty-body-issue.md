[Skip to content](https://github.com/CharlesPikachu/musicdl/issues/97#start-of-content)

You signed in with another tab or window. [Reload](https://github.com/CharlesPikachu/musicdl/issues/97) to refresh your session.You signed out in another tab or window. [Reload](https://github.com/CharlesPikachu/musicdl/issues/97) to refresh your session.You switched accounts on another tab or window. [Reload](https://github.com/CharlesPikachu/musicdl/issues/97) to refresh your session.Dismiss alert

{{ message }}

# SodaMusicClient: search returns HTTP 200 with empty body (0 results) since 2026-08-09\#97

[New issue](https://github.com/login?return_to=https://github.com/CharlesPikachu/musicdl/issues/97)

Copy link

[New issue](https://github.com/login?return_to=https://github.com/CharlesPikachu/musicdl/issues/97)

Copy link

Closed

Closed

[SodaMusicClient: search returns HTTP 200 with empty body (0 results) since 2026-08-09](https://github.com/CharlesPikachu/musicdl/issues/97#top)#97

Copy link

## Description

[![@EdricStrongshield](https://avatars.githubusercontent.com/u/143368612?u=0cc337028a27b5a5f75a969070ec075aa804f241&v=4&size=48)](https://github.com/EdricStrongshield)

[EdricStrongshield](https://github.com/EdricStrongshield)

opened [on Aug 9on Aug 9, 2026](https://github.com/CharlesPikachu/musicdl/issues/97#issue-5103246181)

Issue body actions

## Summary

Since 2026-08-09, `SodaMusicClient` search returns **zero results**: the search endpoint `https://api.qishui.com/luna/pc/search/track` responds with **HTTP 200 and an empty body** (`Content-Length: 0`) for every request, regardless of User-Agent, device\_id, or cookies.

## Environment

- musicdl 2.13.1 (pip), Python 3.13, Windows 10
- Soda Music PC client version 3.6.0 (current), 3.5.1 shell

## Reproduction

```
musicdl -k "周杰伦" -m SodaMusicClient
```

The client reports `_search >>> ... 0 search results processed` and returns an empty song list (previously this returned hits).

Direct request also reproduces it:

```
GET https://api.qishui.com/luna/pc/search/track?aid=386088&app_name=luna_pc&region=cn&geo_region=cn&os_region=cn&sim_region=&device_id=3753066532709850&cdid=&iid=3753066532713946&version_name=3.5.1&version_code=30050100&channel=official&build_mode=master&network_carrier=&ac=wifi&tz_name=Asia/Shanghai&resolution=&device_platform=windows&device_type=Windows&os_version=Windows%2010%20Education&fp=3753066532709850&q=%E5%91%A8%E6%9D%B0%E4%BC%A6&cursor=0&search_id=<uuid>&search_method=input&debug_params=&from_search_id=&search_scene=
```

→ `200 OK`, `Content-Type: application/json`, `Content-Length: 0`, empty body.

## Expected behavior

Search returns track results (as it did before 2026-08-09).

## Actual behavior

Empty HTTP 200 body → 0 songs, but the request itself is not rejected (headers show `X-Dsa-Origin-Status: 200`, served via `volc-dcdn`).

## Already verified (to save maintainers time)

- **Not a cookie issue**: the same cookies work fine on the download endpoint `https://api.qishui.com/luna/pc/track_v2` (returns full 26 KB track payload) and on `https://music.douyin.com/qishui/share/track?track_id=...` (share page loads).
- **Not a device\_id issue**: rotating `device_id` (the built-in `3753066532709850` was already blacklisted before; the workaround of rotating to a fresh millisecond timestamp) still yields an empty body.
- **Not a UA issue**: tried `LunaPC/3.5.1(408871041)`, `LunaPC/3.7.0`, `LunaPC/4.0.0`, and a Chrome desktop UA — all empty.
- **Not cookies vs anonymous**: with and without `Cookie`/`X-Helios`/`X-Medusa` headers — both empty.
- `https://api.qishui.com/luna/pc/search/track_v2` exists but returns `{"status_code":1000004,"status_info":{"status_msg":"ERR_INVALID_PARAM"}}` for every param combination tried (GET only; POST returns 404). It likely requires new signed params (e.g. `a_bogus`/`msToken`) that the current `SodaMusicClient` does not generate.
- Soda Music PC client 3.6.0 ships updated API logic, but its `app.asar` is encrypted (byteDance `metasecml` protection), so I could not extract the new search request format.

## Possible directions

1. New search endpoint/signature support (e.g. `search/track_v2` with proper signed params) — needs a captured request from the official PC client.
2. Fall back to `https://music.douyin.com/qishui/share/track?track_id=...` style page-based search if such an endpoint exists.

## Bonus (separate minor issue)

`GequbaoMusicClient._constructsearchurls` builds `https://www.gequbao.com/s/<keyword>` without URL-encoding the keyword (raw Chinese characters are placed in the URL), and parsing of the returned HTML yields 0 songs even with a valid 200 page. May also need attention.

## Activity

1. ### github-actions commented on Aug 9on Aug 9, 2026



[![@github-actions](https://avatars.githubusercontent.com/in/15368?v=4&size=48)](https://github.com/apps/github-actions)





[github-actions](https://github.com/apps/github-actions) Bot



[on Aug 9on Aug 9, 2026](https://github.com/CharlesPikachu/musicdl/issues/97#issuecomment-5232271936) – with [GitHub Actions](https://help.github.com/en/actions)

















More actions

















你好 [@EdricStrongshield](https://github.com/EdricStrongshield)，感谢提交 issue！



目前自动分析暂时不可用。为了方便维护者定位问题，请尽量补充以下信息：



   - 复现步骤
   - 期望结果和实际结果
   - 报错日志或截图
   - 运行环境，例如系统版本、语言版本、依赖版本等

* * *

> 🤖 This is an automatic reply generated from the issue content. It may be inaccurate; please wait for a maintainer if needed.
>
> To skip automatic replies, add one of these labels: `no-bot`, `ai-ignore`, `bot-ignore`, `skip-ai`.

2. [![](https://avatars.githubusercontent.com/u/36195560?s=64&u=f7d495581c1b4d728669d6d8df62dc80cdfc2422&v=4)CharlesPikachu](https://github.com/CharlesPikachu)

added a commit that references this issue [on Aug 9on Aug 9, 2026](https://github.com/CharlesPikachu/musicdl/issues/97#event-29189622969)









[fix potential bugs in #97 and add support for ccmixter music client](https://github.com/CharlesPikachu/musicdl/commit/50362b28f8ca4f333777193c2dd58b5b06362d07)

[fix potential bugs in #97 and add support for ccmixter music client](https://github.com/CharlesPikachu/musicdl/commit/50362b28f8ca4f333777193c2dd58b5b06362d07)

[fix potential bugs in](https://github.com/CharlesPikachu/musicdl/commit/50362b28f8ca4f333777193c2dd58b5b06362d07) [#97](https://github.com/CharlesPikachu/musicdl/issues/97) and add support for ccmixter music client









[50362b2](https://github.com/CharlesPikachu/musicdl/commit/50362b28f8ca4f333777193c2dd58b5b06362d07)

3. [![](https://avatars.githubusercontent.com/u/36195560?s=64&u=f7d495581c1b4d728669d6d8df62dc80cdfc2422&v=4)CharlesPikachu](https://github.com/CharlesPikachu)

closed this as [completed](https://github.com/CharlesPikachu/musicdl/issues?q=is%3Aissue%20state%3Aclosed%20archived%3Afalse%20reason%3Acompleted) in [6517f8b](https://github.com/CharlesPikachu/musicdl/commit/6517f8b12281281127f587bbacc2b29b5fb2d2ad) [on Sep 7on Sep 7, 2026](https://github.com/CharlesPikachu/musicdl/issues/97#event-30670797113)

4. [![](https://avatars.githubusercontent.com/u/50536337?s=64&v=4)xiaohaiya](https://github.com/xiaohaiya)

added a commit that references this issue [on Sep 7on Sep 7, 2026](https://github.com/CharlesPikachu/musicdl/issues/97#event-30672303718)









[fix #97 , refactor soda music clients and update all expired third part apis](https://github.com/xiaohaiya/musicdl/commit/6517f8b12281281127f587bbacc2b29b5fb2d2ad)

[fix #97 , refactor soda music clients and update all expired third part apis](https://github.com/xiaohaiya/musicdl/commit/6517f8b12281281127f587bbacc2b29b5fb2d2ad)

[fix](https://github.com/xiaohaiya/musicdl/commit/6517f8b12281281127f587bbacc2b29b5fb2d2ad) [CharlesPikachu#97](https://github.com/CharlesPikachu/musicdl/issues/97) , refactor soda music clients and update all ex…





...



This issue will close once commit 6517f8b is merged into the 'master' branch. [6517f8b](https://github.com/xiaohaiya/musicdl/commit/6517f8b12281281127f587bbacc2b29b5fb2d2ad)

5. ### CharlesPikachu commented on Sep 7on Sep 7, 2026



[![@CharlesPikachu](https://avatars.githubusercontent.com/u/36195560?u=f7d495581c1b4d728669d6d8df62dc80cdfc2422&v=4&size=48)](https://github.com/CharlesPikachu)





[CharlesPikachu](https://github.com/CharlesPikachu)



[on Sep 7on Sep 7, 2026](https://github.com/CharlesPikachu/musicdl/issues/97#issuecomment-5568428194)













Owner



More actions

















已经修复

6. [![](https://avatars.githubusercontent.com/u/57421512?s=64&v=4)biabia-55](https://github.com/biabia-55)

added 2 commits that reference this issue [on Oct 3on Oct 3, 2026](https://github.com/CharlesPikachu/musicdl/issues/97#event-32398220775)









[fix potential bugs in #97 and add support for ccmixter music client](https://github.com/biabia-55/mountainriverechoes/commit/42650ce090bf6d46689656c7dee54a9b9921e881)

[fix potential bugs in #97 and add support for ccmixter music client](https://github.com/biabia-55/mountainriverechoes/commit/42650ce090bf6d46689656c7dee54a9b9921e881)

[fix potential bugs in](https://github.com/biabia-55/mountainriverechoes/commit/42650ce090bf6d46689656c7dee54a9b9921e881) [CharlesPikachu#97](https://github.com/CharlesPikachu/musicdl/issues/97) and add support for ccmixter …





...



[42650ce](https://github.com/biabia-55/mountainriverechoes/commit/42650ce090bf6d46689656c7dee54a9b9921e881)













[fix #97 , refactor soda music clients and update all expired third part apis](https://github.com/biabia-55/mountainriverechoes/commit/ad49880007e3ce8f7e49c8b06c6cda154e428f01)

[fix #97 , refactor soda music clients and update all expired third part apis](https://github.com/biabia-55/mountainriverechoes/commit/ad49880007e3ce8f7e49c8b06c6cda154e428f01)

[fix](https://github.com/biabia-55/mountainriverechoes/commit/ad49880007e3ce8f7e49c8b06c6cda154e428f01) [CharlesPikachu#97](https://github.com/CharlesPikachu/musicdl/issues/97) , refactor soda music clients and update all ex…





...



[ad49880](https://github.com/biabia-55/mountainriverechoes/commit/ad49880007e3ce8f7e49c8b06c6cda154e428f01)


[Sign up for free](https://github.com/signup?return_to=https://github.com/CharlesPikachu/musicdl/issues/97)**to join this conversation on GitHub.** Already have an account? [Sign in to comment](https://github.com/login?return_to=https://github.com/CharlesPikachu/musicdl/issues/97)

## Metadata

## Metadata

### Assignees

No one assigned

### Labels

No labels

No labels

### Projects

No projects

### Milestone

No milestone

### Relationships

None yet

### Development

No branches or pull requests

### Participants

[![@CharlesPikachu](https://avatars.githubusercontent.com/u/36195560?s=64&u=f7d495581c1b4d728669d6d8df62dc80cdfc2422&v=4)](https://github.com/CharlesPikachu)[![@EdricStrongshield](https://avatars.githubusercontent.com/u/143368612?s=64&u=0cc337028a27b5a5f75a969070ec075aa804f241&v=4)](https://github.com/EdricStrongshield)

## Issue actions

- ![](https://github.githubassets.com/assets/github-copilot-app-light-15ad5534265eeacd.svg)Open in GitHub Copilot app

You can’t perform that action at this time.