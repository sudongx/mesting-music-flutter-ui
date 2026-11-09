[Skip to content](https://github.com/sodahub-org/sodam#start-of-content)

You signed in with another tab or window. [Reload](https://github.com/sodahub-org/sodam) to refresh your session.You signed out in another tab or window. [Reload](https://github.com/sodahub-org/sodam) to refresh your session.You switched accounts on another tab or window. [Reload](https://github.com/sodahub-org/sodam) to refresh your session.Dismiss alert

{{ message }}

main

[**1** Branch](https://github.com/sodahub-org/sodam/branches) [**29** Tags](https://github.com/sodahub-org/sodam/tags)

[Go to Branches page](https://github.com/sodahub-org/sodam/branches)[Go to Tags page](https://github.com/sodahub-org/sodam/tags)

Go to file

Code

Open more actions menu

## Latest commit

[![Xxx91n](https://avatars.githubusercontent.com/u/238613278?v=4&size=40)](https://github.com/Xxx91n)[Xxx91n](https://github.com/sodahub-org/sodam/commits?author=Xxx91n)

[fix(player): 不可播集合驱动扫一圈，按曲目连跳不计入封顶 (](https://github.com/sodahub-org/sodam/commit/a5498ec803ad376d7abab82d3e5664734748801b) [#108](https://github.com/sodahub-org/sodam/issues/108) [)](https://github.com/sodahub-org/sodam/commit/a5498ec803ad376d7abab82d3e5664734748801b)

Open commit detailssuccess

18 hours agoNov 5, 2026

[a5498ec](https://github.com/sodahub-org/sodam/commit/a5498ec803ad376d7abab82d3e5664734748801b) · 18 hours agoNov 5, 2026

## History

[171 Commits](https://github.com/sodahub-org/sodam/commits/main/)

Open commit details

[View commit history for this file.](https://github.com/sodahub-org/sodam/commits/main/) 171 Commits

## Folders and files

| Name | Name | Last commit message | Last commit date |
| --- | --- | --- | --- |
| [.github](https://github.com/sodahub-org/sodam/tree/main/.github ".github") | [.github](https://github.com/sodahub-org/sodam/tree/main/.github ".github") | [docs(github): 加 issue / PR 模板与贡献准则](https://github.com/sodahub-org/sodam/commit/83b18c2b75fe23513fcd199c011cf8b0655f9753 "docs(github): 加 issue / PR 模板与贡献准则  - .github/ISSUE_TEMPLATE/bug_report.yml：必填环境、系统版本、SodaM 版本、   复现步骤；日志区提示 RUST_BACKTRACE；确认项包含「不含凭据」 - .github/ISSUE_TEMPLATE/feature_request.yml：使用场景 / 期望行为 /   替代方案 / 使用平台，并提示先对照 ROADMAP - .github/ISSUE_TEMPLATE/config.yml：关闭空白 issue，引导到安装页、   让 AI 帮我装、Linux.do 交流帖 - .github/PULL_REQUEST_TEMPLATE.md：问题 / 原因 / 修复 / 验证 / 检查清单 - CONTRIBUTING.md：环境、构建脚本与资源护栏、目录结构、9 条开发约定、   PR 流程、发布流程、行为准则 - README 与官网开发者页补上贡献入口") | 3 weeks agoOct 19, 2026 |
| [crates](https://github.com/sodahub-org/sodam/tree/main/crates "crates") | [crates](https://github.com/sodahub-org/sodam/tree/main/crates "crates") | [fix(player): 不可播集合驱动扫一圈，按曲目连跳不计入封顶 (](https://github.com/sodahub-org/sodam/commit/a5498ec803ad376d7abab82d3e5664734748801b "fix(player): 不可播集合驱动扫一圈，按曲目连跳不计入封顶 (#108)  领域层新增 `failure::UnplayableTracks`（会话内存、只收按曲目类失败、账号 id / 会员状态变化整份作废、 容量 256 + 本轮扫描游标），队列新增纯查询 `next_playable` 与推进 `advance_playable`。  装载失败分派：按曲目类失败写入集合后直接定位下一个可播候选（命中集合的曲目不再发起网络请求）， 扫一圈无候选才落闸「这一轮没有能播的歌了」，条件解除后自动撤下；只剩当前可播时继续放，不误报。 自动续播、非确定性跳过与预取都先查集合；按曲目类失败不再计入连败封顶，非确定性失败仍按封顶停下。 随机播放的 `redo` / 轮次同步与「接下来」补轮一并修正，三种模式均有单测。  Closes #108（Part of #105）") [#108](https://github.com/sodahub-org/sodam/issues/108) [)](https://github.com/sodahub-org/sodam/commit/a5498ec803ad376d7abab82d3e5664734748801b "fix(player): 不可播集合驱动扫一圈，按曲目连跳不计入封顶 (#108)  领域层新增 `failure::UnplayableTracks`（会话内存、只收按曲目类失败、账号 id / 会员状态变化整份作废、 容量 256 + 本轮扫描游标），队列新增纯查询 `next_playable` 与推进 `advance_playable`。  装载失败分派：按曲目类失败写入集合后直接定位下一个可播候选（命中集合的曲目不再发起网络请求）， 扫一圈无候选才落闸「这一轮没有能播的歌了」，条件解除后自动撤下；只剩当前可播时继续放，不误报。 自动续播、非确定性跳过与预取都先查集合；按曲目类失败不再计入连败封顶，非确定性失败仍按封顶停下。 随机播放的 `redo` / 轮次同步与「接下来」补轮一并修正，三种模式均有单测。  Closes #108（Part of #105）") | 18 hours agoNov 5, 2026 |
| [docs](https://github.com/sodahub-org/sodam/tree/main/docs "docs") | [docs](https://github.com/sodahub-org/sodam/tree/main/docs "docs") | [fix(player): 不可播集合驱动扫一圈，按曲目连跳不计入封顶 (](https://github.com/sodahub-org/sodam/commit/a5498ec803ad376d7abab82d3e5664734748801b "fix(player): 不可播集合驱动扫一圈，按曲目连跳不计入封顶 (#108)  领域层新增 `failure::UnplayableTracks`（会话内存、只收按曲目类失败、账号 id / 会员状态变化整份作废、 容量 256 + 本轮扫描游标），队列新增纯查询 `next_playable` 与推进 `advance_playable`。  装载失败分派：按曲目类失败写入集合后直接定位下一个可播候选（命中集合的曲目不再发起网络请求）， 扫一圈无候选才落闸「这一轮没有能播的歌了」，条件解除后自动撤下；只剩当前可播时继续放，不误报。 自动续播、非确定性跳过与预取都先查集合；按曲目类失败不再计入连败封顶，非确定性失败仍按封顶停下。 随机播放的 `redo` / 轮次同步与「接下来」补轮一并修正，三种模式均有单测。  Closes #108（Part of #105）") [#108](https://github.com/sodahub-org/sodam/issues/108) [)](https://github.com/sodahub-org/sodam/commit/a5498ec803ad376d7abab82d3e5664734748801b "fix(player): 不可播集合驱动扫一圈，按曲目连跳不计入封顶 (#108)  领域层新增 `failure::UnplayableTracks`（会话内存、只收按曲目类失败、账号 id / 会员状态变化整份作废、 容量 256 + 本轮扫描游标），队列新增纯查询 `next_playable` 与推进 `advance_playable`。  装载失败分派：按曲目类失败写入集合后直接定位下一个可播候选（命中集合的曲目不再发起网络请求）， 扫一圈无候选才落闸「这一轮没有能播的歌了」，条件解除后自动撤下；只剩当前可播时继续放，不误报。 自动续播、非确定性跳过与预取都先查集合；按曲目类失败不再计入连败封顶，非确定性失败仍按封顶停下。 随机播放的 `redo` / 轮次同步与「接下来」补轮一并修正，三种模式均有单测。  Closes #108（Part of #105）") | 18 hours agoNov 5, 2026 |
| [packaging](https://github.com/sodahub-org/sodam/tree/main/packaging "packaging") | [packaging](https://github.com/sodahub-org/sodam/tree/main/packaging "packaging") | [chore(homebrew): 同步 0.3.8 Cask 校验信息](https://github.com/sodahub-org/sodam/commit/88ae9c4c90abcc136ad02dd2c8b9b792896ecaea "chore(homebrew): 同步 0.3.8 Cask 校验信息") | yesterdayNov 5, 2026 |
| [scripts](https://github.com/sodahub-org/sodam/tree/main/scripts "scripts") | [scripts](https://github.com/sodahub-org/sodam/tree/main/scripts "scripts") | [fix(scripts): 恢复 check.sh 的可执行位](https://github.com/sodahub-org/sodam/commit/e9a343314e55a0f2add73d5fd8252c4027a0a99c "fix(scripts): 恢复 check.sh 的可执行位  PR #64 修改 check.sh 内容时把文件模式从 100755 改成了 100644， 而 CONTRIBUTING.md 与 AGENTS.md 都直接写 scripts/check.sh， 直接执行会 permission denied（退出码 126）。") | 2 weeks agoOct 25, 2026 |
| [website](https://github.com/sodahub-org/sodam/tree/main/website "website") | [website](https://github.com/sodahub-org/sodam/tree/main/website "website") | [feat(website): 官网加入深色/浅色主题，默认跟随设备并可本地记忆](https://github.com/sodahub-org/sodam/commit/ecf6d094757ac3616a470774f0b167aeefad61c9 "feat(website): 官网加入深色/浅色主题，默认跟随设备并可本地记忆  问题：官网只有一套深色配色，浅色系统用户进来仍是黑底；页面上也没有切换入口， 没法按自己的偏好阅读。  原因：style.css 把颜色直接写死在规则里（#0a0c0d、rgba(13,15,16,.82) 等），既没有 主题层，也没有任何读取系统外观的代码。  修复： - 新增 assets/theme.js：auto/light/dark 三态，在首屏绘制前把解析结果写到   <html data-theme>；手动选择存 localStorage[\"sodam:theme\"]，没存值时按   prefers-color-scheme 跟随设备；处于 auto 时监听系统外观变化，并同步   meta[name=theme-color]。 - 导航栏加循环切换按钮（半填充圆/太阳/弯月），tooltip 写明「点击切换为 X」；   小屏只留图标并钉在品牌行右侧，不随导航横向滚动。 - style.css 把散落的 20 处硬编码颜色抽成 CSS 变量，新增浅色调色板；浅色链接色取   #0a7d63（白底 5.1:1）、次要文字 #5f6d72（4.9:1），满足 AA。 - 六个页面 head 里同步加载 theme.js，避免浅色系统下先闪一帧深色。  验证： - `node --check` 两个 JS 通过； - 用 DOM 桩跑了 21 条断言全过：默认 auto、系统深/浅解析、三态循环、localStorage   写入、已存值覆盖系统、脏值回退 auto、系统事件不覆盖手动选择； - 本地 `python3 -m http.server` 起站，六页 + 三个静态资源均返回 200，从 Windows   浏览器打开 127.0.0.1:8080 可正常切换三态。") | last weekOct 31, 2026 |
| [.gitignore](https://github.com/sodahub-org/sodam/blob/main/.gitignore ".gitignore") | [.gitignore](https://github.com/sodahub-org/sodam/blob/main/.gitignore ".gitignore") | [feat(lyrics): 歌词高亮走字级别，亮光停在字内而非整字跳变 (](https://github.com/sodahub-org/sodam/commit/9bce6cc676fa996ea56cab606c4cd2f4390be5ef "feat(lyrics): 歌词高亮走字级别，亮光停在字内而非整字跳变 (#80)  歌词高亮改为**走字级别**：亮光在行内逐字推进，能停在字中间，与官方汽水客户端一致。  ## 实现  界面侧要「字内过渡」，`TextRun` 按字节切只能整字跳变。官方用 CSS `background-clip:text` + 逐帧改 `background-position-x`；gpui 没有 background-clip，用等价做法：同一段文字 画两遍，第二遍用像素矩形裁出已唱部分。两层共用同一份 shaping，折行/字距/基线一致。  ## 挖掘过程中修掉的三层真实 bug  1. **逐字时间轴从来没被解析过**。汽水真实格式是 `<相对偏移,时长,flag>` 三个字段，    偏移相对行首；原实现按两字段切、还当绝对时间，真实歌词一个词都解析不出来。 2. **行结束时间取错**：原来用 `words.last().end_seconds`，但 words 按 `start` 排序。 3. **普通 LRC 被误判有逐字轴**：靠 `words.len()` 判断，而 `parse_lrc` 会给无标签行    补伪词。改成显式 `has_word_timeline`。  ## 走字模型（最终形态）  * 进度按**每个字真实的演唱时长**推进（词的时长按字符数均分），不是按行内时间线性摊平   —— 后者会让拖长音的字被\"唰\"地掠过。 * 亮光位置按**字符序号 → UTF-8 字节偏移 → 字形**换算，再用该字形自身宽度插值，   所以能停在字中间；连字/组合字符/emoji 不会错位。 * 上一句保持高亮到下一句接管，中间没有暗场；滚动与高亮用同一判定（不再提前 250ms）。 * 全程只有两种颜色、字重字号一致（加粗会让字距变化）。  ## 性能  * 只在「亮光确实在推进」时才 60fps，其余时间不重绘（无逐字轴的歌不再空转）。 * 缓存 shaping 结果（key 含文本/宽度/字号/底色/字体 id）：60fps 下 31% → 19% 单核。 * 走满后走纯文本快路径，不再 canvas 双绘。 * 滚动补间用 `request_animation_frame` 驱动（背景 timer 不是帧同步，Windows 上   实际 ~30fps 且不匀），并修掉「创建补间当帧不请求下一帧」导致动画瞬移的问题。  ## 验证  * 中文/英文/折行样张定点截图：逐字进度、末字完成、行距折行均正确。 * 真机播放：换句滚动、走字速度、切歌与拖动进度均正常。 * 审计（CodeRabbit `--deep` + 人工复核共 8 条）全部修复，含 2 个功能性 bug。 * `cargo fmt --check` / `clippy --workspace --all-targets -D warnings` / `test --workspace`   全过（app 106 + core 144 + 集成 2）；四平台 CI 绿。  Refs #80") [#80](https://github.com/sodahub-org/sodam/issues/80) [)](https://github.com/sodahub-org/sodam/commit/9bce6cc676fa996ea56cab606c4cd2f4390be5ef "feat(lyrics): 歌词高亮走字级别，亮光停在字内而非整字跳变 (#80)  歌词高亮改为**走字级别**：亮光在行内逐字推进，能停在字中间，与官方汽水客户端一致。  ## 实现  界面侧要「字内过渡」，`TextRun` 按字节切只能整字跳变。官方用 CSS `background-clip:text` + 逐帧改 `background-position-x`；gpui 没有 background-clip，用等价做法：同一段文字 画两遍，第二遍用像素矩形裁出已唱部分。两层共用同一份 shaping，折行/字距/基线一致。  ## 挖掘过程中修掉的三层真实 bug  1. **逐字时间轴从来没被解析过**。汽水真实格式是 `<相对偏移,时长,flag>` 三个字段，    偏移相对行首；原实现按两字段切、还当绝对时间，真实歌词一个词都解析不出来。 2. **行结束时间取错**：原来用 `words.last().end_seconds`，但 words 按 `start` 排序。 3. **普通 LRC 被误判有逐字轴**：靠 `words.len()` 判断，而 `parse_lrc` 会给无标签行    补伪词。改成显式 `has_word_timeline`。  ## 走字模型（最终形态）  * 进度按**每个字真实的演唱时长**推进（词的时长按字符数均分），不是按行内时间线性摊平   —— 后者会让拖长音的字被\"唰\"地掠过。 * 亮光位置按**字符序号 → UTF-8 字节偏移 → 字形**换算，再用该字形自身宽度插值，   所以能停在字中间；连字/组合字符/emoji 不会错位。 * 上一句保持高亮到下一句接管，中间没有暗场；滚动与高亮用同一判定（不再提前 250ms）。 * 全程只有两种颜色、字重字号一致（加粗会让字距变化）。  ## 性能  * 只在「亮光确实在推进」时才 60fps，其余时间不重绘（无逐字轴的歌不再空转）。 * 缓存 shaping 结果（key 含文本/宽度/字号/底色/字体 id）：60fps 下 31% → 19% 单核。 * 走满后走纯文本快路径，不再 canvas 双绘。 * 滚动补间用 `request_animation_frame` 驱动（背景 timer 不是帧同步，Windows 上   实际 ~30fps 且不匀），并修掉「创建补间当帧不请求下一帧」导致动画瞬移的问题。  ## 验证  * 中文/英文/折行样张定点截图：逐字进度、末字完成、行距折行均正确。 * 真机播放：换句滚动、走字速度、切歌与拖动进度均正常。 * 审计（CodeRabbit `--deep` + 人工复核共 8 条）全部修复，含 2 个功能性 bug。 * `cargo fmt --check` / `clippy --workspace --all-targets -D warnings` / `test --workspace`   全过（app 106 + core 144 + 集成 2）；四平台 CI 绿。  Refs #80") | last weekOct 28, 2026 |
| [AGENTS.md](https://github.com/sodahub-org/sodam/blob/main/AGENTS.md "AGENTS.md") | [AGENTS.md](https://github.com/sodahub-org/sodam/blob/main/AGENTS.md "AGENTS.md") | [fix(ui): 给 status 加底部状态行出口，切档与详细日志的确认恢复可见 (](https://github.com/sodahub-org/sodam/commit/50d24cbfcaf96280b155b078f5902abe25ed889a "fix(ui): 给 status 加底部状态行出口，切档与详细日志的确认恢复可见 (#83) (#94)  `Root::set_status_text` 有六十多处写入点（切档、开关、收藏、加载中…），但界面里没有任何一处渲染 `status`：设置在生效，用户却看不到确认。本次选 A 方案，让 `status` 有固定出口。  - 新增 `ui::status_line`：`status` / `status_seq` / `status_since` 收成 `StatusLine`，渲染在播放栏   上方、内容区左侧，绝对定位不推挤页面，层级在弹层之下；5 秒后自动消失，新状态顶掉旧状态，   切页（`on_nav_changed`）清空。 - 到期计时按写入时刻算剩余时长，并按序号去重只挂一个计时器；首帧来晚不会让这一行多挂一整段。 - 音质切档与「详细日志」开关回到 `set_status_text`；落盘失败只报错，不再同屏出现「错误 + 假成功」。 - 顺手修掉会被暴露的 i18n 漏洞（主题切换文案走 `localized`，删掉词典里不可达的重复臂）；   `focus_search` 改走 `set_nav`；「已切换到 X 队列」的确认挪到切页之后写入。 - 文档：UI-SPEC 写清状态行的位置/时长/清空/层级，ARCHITECTURE 写清两条反馈通道的分工，   AGENTS.md / CONTRIBUTING.md 的失效引用同步为 `Root::status_line`。  验证：本仓库 CI 在 head `2bb08e6` 上四平台全绿（run 41099971790：fmt --check、clippy -D warnings、cargo test --workspace，Linux x86_64 / Linux aarch64 / macOS arm64 / Windows x64）； Windows x64 真机验收切档、详细日志开关、切页清空与英文界面。未做 Linux / macOS 真机 UI 确认。  Closes #83") [#83](https://github.com/sodahub-org/sodam/issues/83) [) (](https://github.com/sodahub-org/sodam/commit/50d24cbfcaf96280b155b078f5902abe25ed889a "fix(ui): 给 status 加底部状态行出口，切档与详细日志的确认恢复可见 (#83) (#94)  `Root::set_status_text` 有六十多处写入点（切档、开关、收藏、加载中…），但界面里没有任何一处渲染 `status`：设置在生效，用户却看不到确认。本次选 A 方案，让 `status` 有固定出口。  - 新增 `ui::status_line`：`status` / `status_seq` / `status_since` 收成 `StatusLine`，渲染在播放栏   上方、内容区左侧，绝对定位不推挤页面，层级在弹层之下；5 秒后自动消失，新状态顶掉旧状态，   切页（`on_nav_changed`）清空。 - 到期计时按写入时刻算剩余时长，并按序号去重只挂一个计时器；首帧来晚不会让这一行多挂一整段。 - 音质切档与「详细日志」开关回到 `set_status_text`；落盘失败只报错，不再同屏出现「错误 + 假成功」。 - 顺手修掉会被暴露的 i18n 漏洞（主题切换文案走 `localized`，删掉词典里不可达的重复臂）；   `focus_search` 改走 `set_nav`；「已切换到 X 队列」的确认挪到切页之后写入。 - 文档：UI-SPEC 写清状态行的位置/时长/清空/层级，ARCHITECTURE 写清两条反馈通道的分工，   AGENTS.md / CONTRIBUTING.md 的失效引用同步为 `Root::status_line`。  验证：本仓库 CI 在 head `2bb08e6` 上四平台全绿（run 41099971790：fmt --check、clippy -D warnings、cargo test --workspace，Linux x86_64 / Linux aarch64 / macOS arm64 / Windows x64）； Windows x64 真机验收切档、详细日志开关、切页清空与英文界面。未做 Linux / macOS 真机 UI 确认。  Closes #83") [#94](https://github.com/sodahub-org/sodam/pull/94) [)](https://github.com/sodahub-org/sodam/commit/50d24cbfcaf96280b155b078f5902abe25ed889a "fix(ui): 给 status 加底部状态行出口，切档与详细日志的确认恢复可见 (#83) (#94)  `Root::set_status_text` 有六十多处写入点（切档、开关、收藏、加载中…），但界面里没有任何一处渲染 `status`：设置在生效，用户却看不到确认。本次选 A 方案，让 `status` 有固定出口。  - 新增 `ui::status_line`：`status` / `status_seq` / `status_since` 收成 `StatusLine`，渲染在播放栏   上方、内容区左侧，绝对定位不推挤页面，层级在弹层之下；5 秒后自动消失，新状态顶掉旧状态，   切页（`on_nav_changed`）清空。 - 到期计时按写入时刻算剩余时长，并按序号去重只挂一个计时器；首帧来晚不会让这一行多挂一整段。 - 音质切档与「详细日志」开关回到 `set_status_text`；落盘失败只报错，不再同屏出现「错误 + 假成功」。 - 顺手修掉会被暴露的 i18n 漏洞（主题切换文案走 `localized`，删掉词典里不可达的重复臂）；   `focus_search` 改走 `set_nav`；「已切换到 X 队列」的确认挪到切页之后写入。 - 文档：UI-SPEC 写清状态行的位置/时长/清空/层级，ARCHITECTURE 写清两条反馈通道的分工，   AGENTS.md / CONTRIBUTING.md 的失效引用同步为 `Root::status_line`。  验证：本仓库 CI 在 head `2bb08e6` 上四平台全绿（run 41099971790：fmt --check、clippy -D warnings、cargo test --workspace，Linux x86_64 / Linux aarch64 / macOS arm64 / Windows x64）； Windows x64 真机验收切档、详细日志开关、切页清空与英文界面。未做 Linux / macOS 真机 UI 确认。  Closes #83") | last weekOct 31, 2026 |
| [CONTRIBUTING.md](https://github.com/sodahub-org/sodam/blob/main/CONTRIBUTING.md "CONTRIBUTING.md") | [CONTRIBUTING.md](https://github.com/sodahub-org/sodam/blob/main/CONTRIBUTING.md "CONTRIBUTING.md") | [fix(ui): 给 status 加底部状态行出口，切档与详细日志的确认恢复可见 (](https://github.com/sodahub-org/sodam/commit/50d24cbfcaf96280b155b078f5902abe25ed889a "fix(ui): 给 status 加底部状态行出口，切档与详细日志的确认恢复可见 (#83) (#94)  `Root::set_status_text` 有六十多处写入点（切档、开关、收藏、加载中…），但界面里没有任何一处渲染 `status`：设置在生效，用户却看不到确认。本次选 A 方案，让 `status` 有固定出口。  - 新增 `ui::status_line`：`status` / `status_seq` / `status_since` 收成 `StatusLine`，渲染在播放栏   上方、内容区左侧，绝对定位不推挤页面，层级在弹层之下；5 秒后自动消失，新状态顶掉旧状态，   切页（`on_nav_changed`）清空。 - 到期计时按写入时刻算剩余时长，并按序号去重只挂一个计时器；首帧来晚不会让这一行多挂一整段。 - 音质切档与「详细日志」开关回到 `set_status_text`；落盘失败只报错，不再同屏出现「错误 + 假成功」。 - 顺手修掉会被暴露的 i18n 漏洞（主题切换文案走 `localized`，删掉词典里不可达的重复臂）；   `focus_search` 改走 `set_nav`；「已切换到 X 队列」的确认挪到切页之后写入。 - 文档：UI-SPEC 写清状态行的位置/时长/清空/层级，ARCHITECTURE 写清两条反馈通道的分工，   AGENTS.md / CONTRIBUTING.md 的失效引用同步为 `Root::status_line`。  验证：本仓库 CI 在 head `2bb08e6` 上四平台全绿（run 41099971790：fmt --check、clippy -D warnings、cargo test --workspace，Linux x86_64 / Linux aarch64 / macOS arm64 / Windows x64）； Windows x64 真机验收切档、详细日志开关、切页清空与英文界面。未做 Linux / macOS 真机 UI 确认。  Closes #83") [#83](https://github.com/sodahub-org/sodam/issues/83) [) (](https://github.com/sodahub-org/sodam/commit/50d24cbfcaf96280b155b078f5902abe25ed889a "fix(ui): 给 status 加底部状态行出口，切档与详细日志的确认恢复可见 (#83) (#94)  `Root::set_status_text` 有六十多处写入点（切档、开关、收藏、加载中…），但界面里没有任何一处渲染 `status`：设置在生效，用户却看不到确认。本次选 A 方案，让 `status` 有固定出口。  - 新增 `ui::status_line`：`status` / `status_seq` / `status_since` 收成 `StatusLine`，渲染在播放栏   上方、内容区左侧，绝对定位不推挤页面，层级在弹层之下；5 秒后自动消失，新状态顶掉旧状态，   切页（`on_nav_changed`）清空。 - 到期计时按写入时刻算剩余时长，并按序号去重只挂一个计时器；首帧来晚不会让这一行多挂一整段。 - 音质切档与「详细日志」开关回到 `set_status_text`；落盘失败只报错，不再同屏出现「错误 + 假成功」。 - 顺手修掉会被暴露的 i18n 漏洞（主题切换文案走 `localized`，删掉词典里不可达的重复臂）；   `focus_search` 改走 `set_nav`；「已切换到 X 队列」的确认挪到切页之后写入。 - 文档：UI-SPEC 写清状态行的位置/时长/清空/层级，ARCHITECTURE 写清两条反馈通道的分工，   AGENTS.md / CONTRIBUTING.md 的失效引用同步为 `Root::status_line`。  验证：本仓库 CI 在 head `2bb08e6` 上四平台全绿（run 41099971790：fmt --check、clippy -D warnings、cargo test --workspace，Linux x86_64 / Linux aarch64 / macOS arm64 / Windows x64）； Windows x64 真机验收切档、详细日志开关、切页清空与英文界面。未做 Linux / macOS 真机 UI 确认。  Closes #83") [#94](https://github.com/sodahub-org/sodam/pull/94) [)](https://github.com/sodahub-org/sodam/commit/50d24cbfcaf96280b155b078f5902abe25ed889a "fix(ui): 给 status 加底部状态行出口，切档与详细日志的确认恢复可见 (#83) (#94)  `Root::set_status_text` 有六十多处写入点（切档、开关、收藏、加载中…），但界面里没有任何一处渲染 `status`：设置在生效，用户却看不到确认。本次选 A 方案，让 `status` 有固定出口。  - 新增 `ui::status_line`：`status` / `status_seq` / `status_since` 收成 `StatusLine`，渲染在播放栏   上方、内容区左侧，绝对定位不推挤页面，层级在弹层之下；5 秒后自动消失，新状态顶掉旧状态，   切页（`on_nav_changed`）清空。 - 到期计时按写入时刻算剩余时长，并按序号去重只挂一个计时器；首帧来晚不会让这一行多挂一整段。 - 音质切档与「详细日志」开关回到 `set_status_text`；落盘失败只报错，不再同屏出现「错误 + 假成功」。 - 顺手修掉会被暴露的 i18n 漏洞（主题切换文案走 `localized`，删掉词典里不可达的重复臂）；   `focus_search` 改走 `set_nav`；「已切换到 X 队列」的确认挪到切页之后写入。 - 文档：UI-SPEC 写清状态行的位置/时长/清空/层级，ARCHITECTURE 写清两条反馈通道的分工，   AGENTS.md / CONTRIBUTING.md 的失效引用同步为 `Root::status_line`。  验证：本仓库 CI 在 head `2bb08e6` 上四平台全绿（run 41099971790：fmt --check、clippy -D warnings、cargo test --workspace，Linux x86_64 / Linux aarch64 / macOS arm64 / Windows x64）； Windows x64 真机验收切档、详细日志开关、切页清空与英文界面。未做 Linux / macOS 真机 UI 确认。  Closes #83") | last weekOct 31, 2026 |
| [Cargo.lock](https://github.com/sodahub-org/sodam/blob/main/Cargo.lock "Cargo.lock") | [Cargo.lock](https://github.com/sodahub-org/sodam/blob/main/Cargo.lock "Cargo.lock") | [chore(release): 0.3.8 —— 跟进 libresoda 最新 main](https://github.com/sodahub-org/sodam/commit/b2cbf776786eaa4a793e992649bb332da6fb1686 "chore(release): 0.3.8 —— 跟进 libresoda 最新 main  问题：sodam 锁的 libresoda 停在 44df096，落后上游 main 184 个提交， 取流 / 下载层与签名子进程收场的一批修复都还没进来。  改动： - libresoda rev 44df096 → 5edd2ff（最新 main）；Cargo.lock 同步，   新增 libc / windows-sys 两个平台依赖（libresoda 的进程树终止用） - workspace 版本 0.3.7 → 0.3.8，同步 PKGBUILD 与 README 里的版本示例  验证： - scripts/check.sh 全过（cargo check + fmt --check + clippy -D warnings + test） - macOS arm64 release 真机播放：经局域网 libmssdk 拉到整曲无损 41 MB，   缓存 sidecar 试听标记为 0") | yesterdayNov 5, 2026 |
| [Cargo.toml](https://github.com/sodahub-org/sodam/blob/main/Cargo.toml "Cargo.toml") | [Cargo.toml](https://github.com/sodahub-org/sodam/blob/main/Cargo.toml "Cargo.toml") | [chore(release): 0.3.8 —— 跟进 libresoda 最新 main](https://github.com/sodahub-org/sodam/commit/b2cbf776786eaa4a793e992649bb332da6fb1686 "chore(release): 0.3.8 —— 跟进 libresoda 最新 main  问题：sodam 锁的 libresoda 停在 44df096，落后上游 main 184 个提交， 取流 / 下载层与签名子进程收场的一批修复都还没进来。  改动： - libresoda rev 44df096 → 5edd2ff（最新 main）；Cargo.lock 同步，   新增 libc / windows-sys 两个平台依赖（libresoda 的进程树终止用） - workspace 版本 0.3.7 → 0.3.8，同步 PKGBUILD 与 README 里的版本示例  验证： - scripts/check.sh 全过（cargo check + fmt --check + clippy -D warnings + test） - macOS arm64 release 真机播放：经局域网 libmssdk 拉到整曲无损 41 MB，   缓存 sidecar 试听标记为 0") | yesterdayNov 5, 2026 |
| [LICENSE](https://github.com/sodahub-org/sodam/blob/main/LICENSE "LICENSE") | [LICENSE](https://github.com/sodahub-org/sodam/blob/main/LICENSE "LICENSE") | [chore: initial public release](https://github.com/sodahub-org/sodam/commit/a97154b2e9fd94233239f112a4bf84a72f6e7e33 "chore: initial public release") | 2 months agoSep 18, 2026 |
| [NOTICE.md](https://github.com/sodahub-org/sodam/blob/main/NOTICE.md "NOTICE.md") | [NOTICE.md](https://github.com/sodahub-org/sodam/blob/main/NOTICE.md "NOTICE.md") | [chore: initial public release](https://github.com/sodahub-org/sodam/commit/a97154b2e9fd94233239f112a4bf84a72f6e7e33 "chore: initial public release") | 2 months agoSep 18, 2026 |
| [PRIVACY.en.md](https://github.com/sodahub-org/sodam/blob/main/PRIVACY.en.md "PRIVACY.en.md") | [PRIVACY.en.md](https://github.com/sodahub-org/sodam/blob/main/PRIVACY.en.md "PRIVACY.en.md") | [feat(core): 建立默认开启的本机诊断日志出口与大小轮转 (](https://github.com/sodahub-org/sodam/commit/d56e3f378506d12da957878f66bfb8fbaa5ae6cd "feat(core): 建立默认开启的本机诊断日志出口与大小轮转 (#57)  新增 sodam-core::log_outlet：跨平台日志目录解析（Windows %LOCALAPPDATA%、Linux XDG_STATE_HOME、macOS Application Support，可用 SODAM_LOG_DIR 重定向）、5 MB 按大小轮转与保留 5 份旧文件、目录不可写时降级为有界内存缓冲并在恢复后自愈回写。写入器入口强制脱敏 URL 查询串并转义嵌入换行，保证一条记录一行。启动时在单实例 Primary 分支后写入首行诊断记录，静默二次实例不写。同步改写 PRIVACY.md / PRIVACY.en.md 第 5 节。Closes #57，属于 #53。贡献者：Xxx91n。") [#57](https://github.com/sodahub-org/sodam/issues/57) [)](https://github.com/sodahub-org/sodam/commit/d56e3f378506d12da957878f66bfb8fbaa5ae6cd "feat(core): 建立默认开启的本机诊断日志出口与大小轮转 (#57)  新增 sodam-core::log_outlet：跨平台日志目录解析（Windows %LOCALAPPDATA%、Linux XDG_STATE_HOME、macOS Application Support，可用 SODAM_LOG_DIR 重定向）、5 MB 按大小轮转与保留 5 份旧文件、目录不可写时降级为有界内存缓冲并在恢复后自愈回写。写入器入口强制脱敏 URL 查询串并转义嵌入换行，保证一条记录一行。启动时在单实例 Primary 分支后写入首行诊断记录，静默二次实例不写。同步改写 PRIVACY.md / PRIVACY.en.md 第 5 节。Closes #57，属于 #53。贡献者：Xxx91n。") | 2 weeks agoOct 25, 2026 |
| [PRIVACY.md](https://github.com/sodahub-org/sodam/blob/main/PRIVACY.md "PRIVACY.md") | [PRIVACY.md](https://github.com/sodahub-org/sodam/blob/main/PRIVACY.md "PRIVACY.md") | [feat(core): 建立默认开启的本机诊断日志出口与大小轮转 (](https://github.com/sodahub-org/sodam/commit/d56e3f378506d12da957878f66bfb8fbaa5ae6cd "feat(core): 建立默认开启的本机诊断日志出口与大小轮转 (#57)  新增 sodam-core::log_outlet：跨平台日志目录解析（Windows %LOCALAPPDATA%、Linux XDG_STATE_HOME、macOS Application Support，可用 SODAM_LOG_DIR 重定向）、5 MB 按大小轮转与保留 5 份旧文件、目录不可写时降级为有界内存缓冲并在恢复后自愈回写。写入器入口强制脱敏 URL 查询串并转义嵌入换行，保证一条记录一行。启动时在单实例 Primary 分支后写入首行诊断记录，静默二次实例不写。同步改写 PRIVACY.md / PRIVACY.en.md 第 5 节。Closes #57，属于 #53。贡献者：Xxx91n。") [#57](https://github.com/sodahub-org/sodam/issues/57) [)](https://github.com/sodahub-org/sodam/commit/d56e3f378506d12da957878f66bfb8fbaa5ae6cd "feat(core): 建立默认开启的本机诊断日志出口与大小轮转 (#57)  新增 sodam-core::log_outlet：跨平台日志目录解析（Windows %LOCALAPPDATA%、Linux XDG_STATE_HOME、macOS Application Support，可用 SODAM_LOG_DIR 重定向）、5 MB 按大小轮转与保留 5 份旧文件、目录不可写时降级为有界内存缓冲并在恢复后自愈回写。写入器入口强制脱敏 URL 查询串并转义嵌入换行，保证一条记录一行。启动时在单实例 Primary 分支后写入首行诊断记录，静默二次实例不写。同步改写 PRIVACY.md / PRIVACY.en.md 第 5 节。Closes #57，属于 #53。贡献者：Xxx91n。") | 2 weeks agoOct 25, 2026 |
| [README.md](https://github.com/sodahub-org/sodam/blob/main/README.md "README.md") | [README.md](https://github.com/sodahub-org/sodam/blob/main/README.md "README.md") | [chore(release): 0.3.8 —— 跟进 libresoda 最新 main](https://github.com/sodahub-org/sodam/commit/b2cbf776786eaa4a793e992649bb332da6fb1686 "chore(release): 0.3.8 —— 跟进 libresoda 最新 main  问题：sodam 锁的 libresoda 停在 44df096，落后上游 main 184 个提交， 取流 / 下载层与签名子进程收场的一批修复都还没进来。  改动： - libresoda rev 44df096 → 5edd2ff（最新 main）；Cargo.lock 同步，   新增 libc / windows-sys 两个平台依赖（libresoda 的进程树终止用） - workspace 版本 0.3.7 → 0.3.8，同步 PKGBUILD 与 README 里的版本示例  验证： - scripts/check.sh 全过（cargo check + fmt --check + clippy -D warnings + test） - macOS arm64 release 真机播放：经局域网 libmssdk 拉到整曲无损 41 MB，   缓存 sidecar 试听标记为 0") | yesterdayNov 5, 2026 |
| View all files |

## Repository files navigation

[![SodaM logo](https://github.com/sodahub-org/sodam/raw/main/crates/sodam/assets/brand/sodam-logo.svg)](https://github.com/sodahub-org/sodam/blob/main/crates/sodam/assets/brand/sodam-logo.svg)

# SodaM

[Permalink: SodaM](https://github.com/sodahub-org/sodam#sodam)

基于 GPUI + Rust 的原生汽水音乐桌面客户端

[![License: AGPL-3.0-or-later](https://camo.githubusercontent.com/044e423067a625fb0375d86cdcfa1cae91a73cba413f589b0ea54ea55ed93209/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4147504c253230332e302532306f722532306c617465722d626c75652e737667)](https://github.com/sodahub-org/sodam/blob/main/LICENSE)[![Rust 1.85+](https://camo.githubusercontent.com/e2d089650ed91b0ab9ff5a2eae1a3d21421f33cf6a9ef59398df2eaddf994fb1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f527573742d312e38352532422d6f72616e67652e737667)](https://www.rust-lang.org/)[![GPUI 0.2.2](https://camo.githubusercontent.com/08931e103004c1a3cc2a2edb5cc3cd2137fa05a233f5b4c4fcc7ac47db1ce27a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f55492d47505549253230302e322e322d3842354346362e737667)](https://github.com/sodahub-org/gpui)[![Linux / Omarchy tested](https://camo.githubusercontent.com/6f45328a68ff79d8fe2d0693077dc3da86d16335e0ef59d668400109272a4eff/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c696e75782532302537432532304f6d61726368792d7465737465642d737563636573732e737667)](https://omarchy.org/)[![macOS arm64 tested](https://camo.githubusercontent.com/c412fac457bee29f016af3d0f40acc0f5d47f45ac7aa0f882c5c42f029c56843/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d61634f5325323061726d36342532302537432532304170706c6525323053696c69636f6e2d7465737465642d737563636573732e737667)](https://github.com/sodahub-org/sodam/releases)![Windows x64 tested](https://camo.githubusercontent.com/a6e4a6882948e054d55c163275dca699de502ec788de7b038f6deafa492ebf8f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f57696e646f77732532307836342d7465737465642d737563636573732e737667)

音乐能力由 [libresoda](https://github.com/sodahub-org/libresoda) 提供；应用签名服务可对接
[libmssdk](https://github.com/sodahub-org/libmssdk)。

[**官网**](https://sodahub-org.github.io/sodam/) ·
[安装说明](https://sodahub-org.github.io/sodam/install.html) ·
[让 AI 帮我装](https://sodahub-org.github.io/sodam/llm.html) ·
[更新日志](https://sodahub-org.github.io/sodam/changelog.html) ·
[开发者文档](https://sodahub-org.github.io/sodam/developers.html) ·
[隐私政策](https://github.com/sodahub-org/sodam/blob/main/PRIVACY.md)

友情链接： [**myMusic**](https://github.com/mytv-android/myMusic)
—— Android 手机 / 平板 / TV 端的汽水音乐客户端，由
[mytv-android](https://github.com/mytv-android) 独立维护，不是 SodaM 项目的一部分。

[![myMusic：第三方 Android 手机 / 平板 / TV 端客户端，非 SodaM 组成部分](https://raw.githubusercontent.com/mytv-android/myMusic/main/docs/images/banner.png)](https://github.com/mytv-android/myMusic)

[![LINUX DO](https://github.com/sodahub-org/sodam/raw/main/docs/img/linux-do.svg)\\
Linux.do 开源推广帖 · 问题反馈与交流](https://linux.do/t/topic/2921819)

SodaM 是 **汽水音乐的第三方桌面客户端**，面向 Linux / macOS / Windows，用 GPUI 原生渲染，
强调 **高性能、低占用、高颜值**。重点做四件事： **接近官方客户端的操作手感、稳定的本地播放体验、**
**会员账号的无损音质播放，以及干净自适应的主题系统**。

> 非官方项目：由社区开发维护，与汽水音乐官方无关；账号登录与曲库仍来自汽水音乐官方服务。

[![SodaM 主界面预览 1](https://github.com/sodahub-org/sodam/raw/main/docs/img/main/1.jpg)](https://github.com/sodahub-org/sodam/blob/main/docs/img/main/1.jpg)

[![SodaM 主界面预览 2](https://github.com/sodahub-org/sodam/raw/main/docs/img/main/2.jpg)](https://github.com/sodahub-org/sodam/blob/main/docs/img/main/2.jpg)

### 维护者与贡献者

[Permalink: 维护者与贡献者](https://github.com/sodahub-org/sodam#%E7%BB%B4%E6%8A%A4%E8%80%85%E4%B8%8E%E8%B4%A1%E7%8C%AE%E8%80%85)

想参与开发？先读 [CONTRIBUTING.md](https://github.com/sodahub-org/sodam/blob/main/CONTRIBUTING.md)（构建脚本、开发约定、提交与发布流程），
提 issue 请用 [模板](https://github.com/sodahub-org/sodam/issues/new/choose)。

[![SodaM contributors](https://camo.githubusercontent.com/c63ff4fa83cb1c19310587b3e3b547304ad02c61e6ad0195b19aa7cb750eede1/68747470733a2f2f636f6e747269622e726f636b732f696d6167653f7265706f3d736f64616875622d6f72672f736f64616d)](https://github.com/sodahub-org/sodam/graphs/contributors)

### 平台支持

[Permalink: 平台支持](https://github.com/sodahub-org/sodam#%E5%B9%B3%E5%8F%B0%E6%94%AF%E6%8C%81)

| 平台 | 状态 |
| --- | --- |
| Linux / Omarchy | 已实测 |
| macOS（Apple Silicon） | 已实测，提供 Homebrew Cask 与 `.app` 下载 |
| Windows（x64） | 已实测，提供安装包 |

## 界面预览

[Permalink: 界面预览](https://github.com/sodahub-org/sodam#%E7%95%8C%E9%9D%A2%E9%A2%84%E8%A7%88)

| 推荐流 | 听歌模式 |
| --- | --- |
| [![SodaM 推荐流页面](https://github.com/sodahub-org/sodam/raw/main/docs/img/Discover.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/Discover.png) | [![SodaM 听歌模式页面](https://github.com/sodahub-org/sodam/raw/main/docs/img/Modes.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/Modes.png) |
| **搜索** | **我的歌单** |
| [![SodaM 搜索页面](https://github.com/sodahub-org/sodam/raw/main/docs/img/Search.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/Search.png) | [![SodaM 我的歌单页面](https://github.com/sodahub-org/sodam/raw/main/docs/img/Playlists.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/Playlists.png) |
| **我喜欢的音乐** | **设置** |
| [![SodaM 我喜欢的音乐页面](https://github.com/sodahub-org/sodam/raw/main/docs/img/Liked.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/Liked.png) | [![SodaM 设置页面](https://github.com/sodahub-org/sodam/raw/main/docs/img/Settings.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/Settings.png) |

### macOS（Apple Silicon）

[Permalink: macOS（Apple Silicon）](https://github.com/sodahub-org/sodam#macosapple-silicon)

| 听歌模式 | 推荐流 |
| --- | --- |
| [![SodaM macOS 听歌模式页面](https://github.com/sodahub-org/sodam/raw/main/docs/img/macos/Modes.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/macos/Modes.png) | [![SodaM macOS 播放页与歌词](https://github.com/sodahub-org/sodam/raw/main/docs/img/macos/Discover.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/macos/Discover.png) |
| **搜索** | **我的歌单** |
| [![SodaM macOS 搜索页面](https://github.com/sodahub-org/sodam/raw/main/docs/img/macos/Search.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/macos/Search.png) | [![SodaM macOS 我的歌单页面](https://github.com/sodahub-org/sodam/raw/main/docs/img/macos/Playlists.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/macos/Playlists.png) |
| **我喜欢的音乐** | **设置** |
| [![SodaM macOS 我喜欢的音乐页面](https://github.com/sodahub-org/sodam/raw/main/docs/img/macos/Liked.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/macos/Liked.png) | [![SodaM macOS 设置页面](https://github.com/sodahub-org/sodam/raw/main/docs/img/macos/Settings.png)](https://github.com/sodahub-org/sodam/blob/main/docs/img/macos/Settings.png) |

## 功能特性

[Permalink: 功能特性](https://github.com/sodahub-org/sodam#%E5%8A%9F%E8%83%BD%E7%89%B9%E6%80%A7)

### 播放与队列

[Permalink: 播放与队列](https://github.com/sodahub-org/sodam#%E6%92%AD%E6%94%BE%E4%B8%8E%E9%98%9F%E5%88%97)

- 本地播放引擎：播放 / 暂停、上一首 / 下一首、拖动进度、音量控制
- 列表循环、单曲循环、随机播放三种模式，随进度自动跟随并跨启动保留
- 正在播放曲目在歌单列表中保持高亮
- 播放队列分为「已播放 / 正在播放 / 接下来」
- 队列与歌单中的歌曲支持右键菜单、下一首播放、收藏切换
- 歌名可跳转专辑页，歌手名可跳转音乐人页

### 播放页与歌词

[Permalink: 播放页与歌词](https://github.com/sodahub-org/sodam#%E6%92%AD%E6%94%BE%E9%A1%B5%E4%B8%8E%E6%AD%8C%E8%AF%8D)

- 官方式播放页布局：封面宽度 `min(40vh, 30vw)`，歌词列 `300–500px`
- 按当前歌曲封面提取主色，全局背景、表面色、强调色动态渐变
- 歌词随播放进度滚动，当前句居中高亮
- 播放页可在歌词视图与队列视图之间切换
- 封面与歌词加载失败时提供重试，并校验资源与当前歌曲是否匹配

### 推荐、听歌模式与音乐库

[Permalink: 推荐、听歌模式与音乐库](https://github.com/sodahub-org/sodam#%E6%8E%A8%E8%8D%90%E5%90%AC%E6%AD%8C%E6%A8%A1%E5%BC%8F%E4%B8%8E%E9%9F%B3%E4%B9%90%E5%BA%93)

- 首页推荐队列，启动后自动准备第一首歌曲
- 45+ 听歌模式入口，图标本地内置，浅色 / 深色主题自动适配
- 探索歌单虚拟网格与分页加载
- 我喜欢的音乐、我的歌单、歌单详情、歌手页、专辑页
- 收藏状态在播放页、播放栏、队列和列表间保持同步

### 搜索

[Permalink: 搜索](https://github.com/sodahub-org/sodam#%E6%90%9C%E7%B4%A2)

- 综合搜索与歌曲、音乐人、专辑、歌单垂直搜索
- 搜索结果支持多类型分组与详情页跳转
- 艺人页包含头像、热门歌曲、专辑与加载更多
- 专辑页展示封面、发行信息与全碟歌曲
- 输入框支持中文输入法与光标 / 选区操作

### 桌面体验

[Permalink: 桌面体验](https://github.com/sodahub-org/sodam#%E6%A1%8C%E9%9D%A2%E4%BD%93%E9%AA%8C)

- Dark / Light 双主题，首次启动跟随系统偏好
- 中文 / English 界面语言，首次启动跟随系统语言
- 系统托盘：播放控制、显示主窗口、真正退出（Linux 为 SNI 托盘，macOS 为菜单栏 NSStatusItem，Windows 为通知区域图标）
- 关闭主窗口不退出进程，保留后台播放
- Linux 提供原生窗口与桌面入口；macOS 提供自绘标题栏的 `.app`；Windows 提供自绘标题栏（拖拽、双击最大化、Win11 贴靠布局）的安装包

### 性能与稳定性

[Permalink: 性能与稳定性](https://github.com/sodahub-org/sodam#%E6%80%A7%E8%83%BD%E4%B8%8E%E7%A8%B3%E5%AE%9A%E6%80%A7)

- 网络请求、下载、解密、封面处理均放到后台线程，不阻塞渲染
- 长列表使用虚拟滚动，只渲染可见行
- 封面请求池有并发上限、去重和队列上限
- 播放请求带序号防竞态，过期结果不会覆盖当前歌曲
- 帧耗时与滚动压测开关可用于定位 UI 卡顿

## 架构与依赖

[Permalink: 架构与依赖](https://github.com/sodahub-org/sodam#%E6%9E%B6%E6%9E%84%E4%B8%8E%E4%BE%9D%E8%B5%96)

```
SodaM
└── sodam-core        配置、会话、队列、播放引擎、音乐库封装；不依赖 GPUI
    └── libresoda     汽水接口、取流、解密、扫码登录、签名提供者
        └── libmssdk  可选应用签名服务，完整音质链路使用
```

分层细节见 [`docs/ARCHITECTURE.md`](https://github.com/sodahub-org/sodam/blob/main/docs/ARCHITECTURE.md)，
UI 规范见 [`docs/UI-SPEC.md`](https://github.com/sodahub-org/sodam/blob/main/docs/UI-SPEC.md)。

## 快速开始

[Permalink: 快速开始](https://github.com/sodahub-org/sodam#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)

### 环境要求

[Permalink: 环境要求](https://github.com/sodahub-org/sodam#%E7%8E%AF%E5%A2%83%E8%A6%81%E6%B1%82)

- Rust stable，最低 `1.85`
- Linux：Wayland 或 X11 运行时
- macOS：Apple Silicon（M 系列），macOS 12+；构建需完整版 Xcode（Metal shader 编译，
仅装 Command Line Tools 会报 `xcrun: unable to find utility "metal"`）
- Windows：Windows 10+ x64；源码构建需 VS 2022 Build Tools（C++ 工作负载）
- Chromium / Chrome / Edge 等浏览器用于扫码登录签名页
- `libresoda` 与 `sodam` 同级 clone（可选）：本地联调时可用
`[patch."https://github.com/sodahub-org/libresoda"]` 指向 `../libresoda`，
改动 libresoda 即时生效，无需等新版本。

```
Projects/sodahub-org/
├── libresoda/
├── libmssdk/
└── sodam/
```

### 启动

[Permalink: 启动](https://github.com/sodahub-org/sodam#%E5%90%AF%E5%8A%A8)

```
cd sodam
scripts/run.sh
```

首次启动进入设置页，扫码登录后配置会写入本地。已登录用户会直接进入播放页，
并自动准备推荐队列。

## 配置

[Permalink: 配置](https://github.com/sodahub-org/sodam#%E9%85%8D%E7%BD%AE)

配置文件（随平台不同）：

| 平台 | 路径 |
| --- | --- |
| Linux | `~/.config/sodam/config.json` |
| macOS | `~/Library/Application Support/sodam/config.json` |
| Windows | `%APPDATA%\sodam\config.json` |

环境变量只在配置字段为空时补全。常用配置：

| 变量 | 说明 |
| --- | --- |
| `SODA_COOKIE` | 登录 Cookie，扫码成功后自动写入配置 |
| `QISHUI_SIGNER_URL` | 签名服务 `/sign` 地址 |
| `QISHUI_SIGNER_TOKEN` | 签名服务 Bearer Token |
| `SODA_DEVICE_ID` / `SODA_IID` / `SODA_FP` | 设备身份；覆盖时必须与签名器一致 |
| `SODAM_QUALITY` | 音质意图：`auto` / `best` / `hires` / `lossless` / `dolby` / `highest` / `medium` / `low` |
| `SODAM_PLAYER_LOG` / `SODAM_PREFETCH_LOG` / `SODAM_REPORT_LOG` | 把对应日志话题（`player` / `prefetch` / `report`）提到 `DEBUG` |
| `SODAM_SCENE_LOG` / `SODAM_THEME_LOG` / `SODAM_COVER_LOG` / `SODAM_FRAME_LOG` | 同上，这四个都归 `app` 话题 |

音质偏好只表达 **意图**：「自动」= 不设上限，由服务端按账号权益与单曲可用档位收敛，
实际拿到哪一档由播放条徽章如实显示。选具体档位时从 **下一首** 开始生效，当前曲目不重载。

日志默认按 `INFO` 记录在本机。设置页「诊断 → 详细日志」可把六个话题全部提到 `DEBUG`，
即时生效、重启保持；环境变量与这个开关是并集——两边都只能记更多，不存在谁覆盖谁。

SodaM 默认内置一个公共签名服务，未部署 `libmssdk` 的用户也可以直接使用。
可以在设置页或环境变量中替换为自己的签名服务。

不要提交真实 Cookie、Token、签名头或设备指纹。

### 音量与磁盘缓存

[Permalink: 音量与磁盘缓存](https://github.com/sodahub-org/sodam#%E9%9F%B3%E9%87%8F%E4%B8%8E%E7%A3%81%E7%9B%98%E7%BC%93%E5%AD%98)

- 音量、静音状态及静音前的音量会自动保存，重启后恢复；拖动音量条的写盘会防抖。
- 音频缓存默认上限 **10 GiB**。在「设置 → 缓存」中可选择常用大小，或以 1 GiB
为步长调整（1–1024 GiB）。配置字段 `audio_cache_limit_mb` 的单位为 MiB。
- 启动、修改上限及运行期间会在后台按最近使用时间淘汰旧音频；封面不占用音频额度。
正在下载、等待装载或正在播放的文件受保护，可能暂时超过上限，释放后再清理。
- 「清空缓存」在后台递归清理音频、封面及封面原图；正在使用的音频和近期下载临时文件
会保留。中断下载遗留的临时文件超过 24 小时后可被清理。
- 音频缓存按 **音质意图** 命名：选「自动」时同一首歌始终命中同一个文件，所以开通会员后
旧歌仍播缓存里那一档，想按新权益重取需清空缓存或换一首。选具体档位时，切档后新曲目
按新档位另存一份。

以下是显式覆盖项，不受上面“只补全空字段”的规则限制：

| 变量 | 说明 |
| --- | --- |
| `SODAM_VOLUME` | 启动音量覆盖，范围 0–1；开发测试可设为 `0` |
| `SODAM_CONFIG_PATH` | 使用独立配置文件，便于隔离测试实例 |
| `SODAM_CACHE_DIR` | 缓存根目录，其下使用 `audio/`、`covers/`；可放到其他磁盘 |

## 开发

[Permalink: 开发](https://github.com/sodahub-org/sodam#%E5%BC%80%E5%8F%91)

本仓库为了避免 ARM64 开发机编译峰值导致 OOM，所有常规操作都使用带资源护栏的脚本：

```
scripts/check.sh   # cargo check + fmt + clippy + test
scripts/build.sh   # debug / release 构建
scripts/run.sh     # 启动 GUI，带 MemoryMax 护栏
```

不要在 GUI 运行时编译；不要绕过脚本反复执行全量 cargo 构建。

## Arch Linux 下载安装

[Permalink: Arch Linux 下载安装](https://github.com/sodahub-org/sodam#arch-linux-%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85)

SodaM 的 GitHub Release 提供 Arch Linux `pacman` 安装包，当前版本为 [`v0.3.8`](https://github.com/sodahub-org/sodam/releases/tag/v0.3.8)。

### 1\. 确认系统架构

[Permalink: 1. 确认系统架构](https://github.com/sodahub-org/sodam#1-%E7%A1%AE%E8%AE%A4%E7%B3%BB%E7%BB%9F%E6%9E%B6%E6%9E%84)

```
uname -m
```

- `x86_64`：选择 `x86_64` 包
- `aarch64`：选择 `aarch64` 包，例如 ARM64 笔记本或 ARM 服务器

### 2\. 下载并校验安装包

[Permalink: 2. 下载并校验安装包](https://github.com/sodahub-org/sodam#2-%E4%B8%8B%E8%BD%BD%E5%B9%B6%E6%A0%A1%E9%AA%8C%E5%AE%89%E8%A3%85%E5%8C%85)

```
mkdir -p /tmp/sodam-install
cd /tmp/sodam-install

arch=$(uname -m)
version=0.3.8
base_url=https://github.com/sodahub-org/sodam/releases/download/v${version}

curl -fLO ${base_url}/SHA256SUMS
curl -fLO ${base_url}/sodam-${version}-1-${arch}.pkg.tar.zst
grep "sodam-${version}-1-${arch}\.pkg\.tar\.zst$" SHA256SUMS | sha256sum -c -
```

校验输出必须包含 `OK`：

```
sodam-0.3.8-1-x86_64.pkg.tar.zst: OK
```

### 3\. 安装

[Permalink: 3. 安装](https://github.com/sodahub-org/sodam#3-%E5%AE%89%E8%A3%85)

```
sudo pacman -U ./sodam-${version}-1-${arch}.pkg.tar.zst
```

`pacman` 会自动处理 `alsa-lib`、`dbus`、`fontconfig`、`freetype2`、`libxkbcommon` 等依赖。

### 4\. 启动

[Permalink: 4. 启动](https://github.com/sodahub-org/sodam#4-%E5%90%AF%E5%8A%A8)

命令行启动：

```
sodam
```

也可以从桌面环境的应用菜单中启动 **SodaM**。首次启动会进入设置页，按提示扫码登录后即可使用。

后续升级时，从 [Releases](https://github.com/sodahub-org/sodam/releases/latest) 下载新版本的对应架构包，并再次执行 `sudo pacman -U` 即可。

### 方式二：自建 pacman 源（推荐，可直接升级）

[Permalink: 方式二：自建 pacman 源（推荐，可直接升级）](https://github.com/sodahub-org/sodam#%E6%96%B9%E5%BC%8F%E4%BA%8C%E8%87%AA%E5%BB%BA-pacman-%E6%BA%90%E6%8E%A8%E8%8D%90%E5%8F%AF%E7%9B%B4%E6%8E%A5%E5%8D%87%E7%BA%A7)

每个版本会把官方构建的包打成 pacman 仓库并发布到 GitHub Pages，
加上一行配置就能用 `pacman` 安装、随 `pacman -Syu` 升级：

```
# /etc/pacman.conf 末尾
[sodam]
SigLevel = Optional TrustAll
Server = https://sodahub-org.github.io/sodam/$arch
```

```
sudo pacman -Sy sodam          # 首次安装
sudo pacman -Syu               # 之后随系统一起升级
```

仓库地址： [https://sodahub-org.github.io/sodam/](https://sodahub-org.github.io/sodam/)（含 `x86_64` 与 `aarch64`）。

说明：包由 GitHub Actions 从源码构建，内容与 Release 里的 `.pkg.tar.zst` 一致， **未做 GPG 签名**，
所以配置的是 `Optional TrustAll`；如需更严格校验请用上面的 `pacman -U` \+ `SHA256SUMS` 方式。

## macOS 下载安装（Apple Silicon）

[Permalink: macOS 下载安装（Apple Silicon）](https://github.com/sodahub-org/sodam#macos-%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85apple-silicon)

macOS 版已在 Apple Silicon（M 系列）真机实测。当前版本为
[`v0.3.8`](https://github.com/sodahub-org/sodam/releases/tag/v0.3.8)，两种安装方式任选。

### 方式一：Homebrew（推荐，预编译 `.app`）

[Permalink: 方式一：Homebrew（推荐，预编译 .app）](https://github.com/sodahub-org/sodam#%E6%96%B9%E5%BC%8F%E4%B8%80homebrew%E6%8E%A8%E8%8D%90%E9%A2%84%E7%BC%96%E8%AF%91-app)

```
brew install --cask sodahub-org/tap/sodam
```

升级：

```
brew update
brew upgrade --cask sodam
```

Cask 来自官方 tap [sodahub-org/homebrew-tap](https://github.com/sodahub-org/homebrew-tap)，
安装的就是 GitHub Release 里的 Apple Silicon（arm64）预编译包；Intel 机型会被
Homebrew 按架构要求拦下。安装后如仍被 Gatekeeper 拦截，用下面手动安装第 3 步的
`xattr` 命令放行即可。

### 方式二：手动下载安装包

[Permalink: 方式二：手动下载安装包](https://github.com/sodahub-org/sodam#%E6%96%B9%E5%BC%8F%E4%BA%8C%E6%89%8B%E5%8A%A8%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85%E5%8C%85)

#### 1\. 下载并校验

[Permalink: 1. 下载并校验](https://github.com/sodahub-org/sodam#1-%E4%B8%8B%E8%BD%BD%E5%B9%B6%E6%A0%A1%E9%AA%8C)

```
mkdir -p /tmp/sodam-install
cd /tmp/sodam-install

version=0.3.8
base_url=https://github.com/sodahub-org/sodam/releases/download/v${version}

curl -fLO ${base_url}/SHA256SUMS
curl -fLO ${base_url}/sodam-${version}-macos-aarch64.zip
grep "sodam-${version}-macos-aarch64\.zip$" SHA256SUMS | shasum -a 256 -c -
```

校验输出必须包含 `OK`：

```
sodam-0.3.8-macos-aarch64.zip: OK
```

#### 2\. 安装

[Permalink: 2. 安装](https://github.com/sodahub-org/sodam#2-%E5%AE%89%E8%A3%85)

```
unzip sodam-${version}-macos-aarch64.zip
mv SodaM.app /Applications/
```

也可以在 Finder 里双击解压后，把 **SodaM.app** 拖进「应用程序」文件夹。

#### 3\. 首次启动（绕过 Gatekeeper）

[Permalink: 3. 首次启动（绕过 Gatekeeper）](https://github.com/sodahub-org/sodam#3-%E9%A6%96%E6%AC%A1%E5%90%AF%E5%8A%A8%E7%BB%95%E8%BF%87-gatekeeper)

当前发行包为 ad-hoc 签名、未经 Apple 公证，首次打开会被 Gatekeeper 拦截，
任选一种方式放行：

```
# 去掉隔离属性（推荐）
xattr -cr /Applications/SodaM.app
open -a SodaM
```

或：双击 SodaM.app → 在弹窗中点「取消」→ 打开「系统设置 → 隐私与安全性」→
点「仍要打开」。

#### 4\. 启动

[Permalink: 4. 启动](https://github.com/sodahub-org/sodam#4-%E5%90%AF%E5%8A%A8-1)

从启动台或 Finder 打开 **SodaM**，首次启动会进入设置页，按提示扫码登录后即可使用。
后续升级时，从 [Releases](https://github.com/sodahub-org/sodam/releases/latest) 下载新版本，
重复步骤 2 覆盖到 `/Applications` 即可（配置在
`~/Library/Application Support/sodam/`，不会丢失）。

## Windows 下载安装（x64）

[Permalink: Windows 下载安装（x64）](https://github.com/sodahub-org/sodam#windows-%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85x64)

Windows 版已在 Windows 10/11 x64 真机实测，GitHub Release 提供 Inno Setup 安装包
（按用户安装，无需管理员权限），当前版本为
[`v0.3.8`](https://github.com/sodahub-org/sodam/releases/tag/v0.3.8)。

### 1\. 下载并校验

[Permalink: 1. 下载并校验](https://github.com/sodahub-org/sodam#1-%E4%B8%8B%E8%BD%BD%E5%B9%B6%E6%A0%A1%E9%AA%8C-1)

```
mkdir C:\sodam-install; cd C:\sodam-install

$version = "0.3.8"
$base = "https://github.com/sodahub-org/sodam/releases/download/v$version"

Invoke-WebRequest "$base/SHA256SUMS" -OutFile SHA256SUMS
Invoke-WebRequest "$base/sodam-$version-windows-x64-setup.exe" -OutFile "sodam-$version-windows-x64-setup.exe"

$expected = (Select-String -Path SHA256SUMS -Pattern "sodam-$version-windows-x64-setup\.exe$").Line.Split(' ')[0]
$actual = (Get-FileHash "sodam-$version-windows-x64-setup.exe" -Algorithm SHA256).Hash.ToLower()
if ($expected -ne $actual) { throw "SHA256 mismatch!" } else { "SHA256 OK" }
```

输出 `SHA256 OK` 即校验通过。

### 2\. 安装

[Permalink: 2. 安装](https://github.com/sodahub-org/sodam#2-%E5%AE%89%E8%A3%85-1)

双击运行安装包，按向导完成安装：

- 默认安装目录 `%LOCALAPPDATA%\Programs\SodaM`
- 自动创建开始菜单快捷方式，可选创建桌面快捷方式

### 3\. 首次启动（SmartScreen 提示）

[Permalink: 3. 首次启动（SmartScreen 提示）](https://github.com/sodahub-org/sodam#3-%E9%A6%96%E6%AC%A1%E5%90%AF%E5%8A%A8smartscreen-%E6%8F%90%E7%A4%BA)

当前发行包未经代码签名，首次运行可能弹出
**「Windows 已保护你的电脑」**：点击「更多信息」→「仍要运行」即可。

首次启动会进入设置页，按提示扫码登录后即可使用。配置保存在
`%APPDATA%\sodam\config.json`，升级安装不会影响配置。

### 卸载

[Permalink: 卸载](https://github.com/sodahub-org/sodam#%E5%8D%B8%E8%BD%BD)

在「设置 → 应用」或「控制面板 → 程序和功能」中卸载 SodaM。

## 打包

[Permalink: 打包](https://github.com/sodahub-org/sodam#%E6%89%93%E5%8C%85)

```
cd packaging/arch
PKGEXT='.pkg.tar.zst' makepkg -f
sudo pacman -U ./sodam-<version>-<arch>.pkg.tar.zst
```

安装后会得到：

```
/usr/bin/sodam
/usr/share/applications/sodam.desktop
/usr/share/icons/hicolor/256x256/apps/sodam.png
```

## 文档

[Permalink: 文档](https://github.com/sodahub-org/sodam#%E6%96%87%E6%A1%A3)

- [`docs/ARCHITECTURE.md`](https://github.com/sodahub-org/sodam/blob/main/docs/ARCHITECTURE.md)：分层、线程、播放与导航架构
- [`docs/UI-SPEC.md`](https://github.com/sodahub-org/sodam/blob/main/docs/UI-SPEC.md)：主题、布局、尺寸与性能约束
- [`docs/ROADMAP.md`](https://github.com/sodahub-org/sodam/blob/main/docs/ROADMAP.md)：已完成能力与后续优先级

## 友情链接

[Permalink: 友情链接](https://github.com/sodahub-org/sodam#%E5%8F%8B%E6%83%85%E9%93%BE%E6%8E%A5)

以下项目由第三方独立维护， **不是 SodaM 项目的一部分**，SodaM 不为它们的发布、质量与行为负责；
下面的描述只是帮助你对上号。

- [**myMusic**](https://github.com/mytv-android/myMusic)：Android 端（手机 / 平板 / 折叠屏 / Android TV）的
同类开源客户端，由 [mytv-android](https://github.com/mytv-android) 维护；Jetpack Compose + Material 3，
平台能力来自 [music-lib](https://github.com/guohuiyuan/music-lib)；按它的说明，汽水音乐会员整曲的
签名服务由 SodaM 提供。

## 许可与合规

[Permalink: 许可与合规](https://github.com/sodahub-org/sodam#%E8%AE%B8%E5%8F%AF%E4%B8%8E%E5%90%88%E8%A7%84)

代码使用 AGPL-3.0-or-later。

SodaM 是独立项目，与字节跳动、抖音或汽水音乐无关。它只面向个人播放自己有权访问的
内容；不得用于公共代理、批量抓取、绕过付费限制或分发凭据。

## About

SodaM —— 基于 GPUI + libresoda 的原生汽水音乐客户端

[sodahub-org.github.io/sodam/](https://sodahub-org.github.io/sodam/)

### Resources

[Readme](https://github.com/sodahub-org/sodam#readme-ov-file)

[AGPL-3.0 license](https://github.com/sodahub-org/sodam#AGPL-3.0-1-ov-file)

### Contributing

[Contributing](https://github.com/sodahub-org/sodam#contributing-ov-file)

[Activity](https://github.com/sodahub-org/sodam/activity)

[Custom properties](https://github.com/sodahub-org/sodam/custom-properties)

### Stars

**108** stars

### Watchers

**0** watching

### Forks

[**19** forks](https://github.com/sodahub-org/sodam/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fsodahub-org%2Fsodam&report=sodahub-org+%28user%29)

## Releases

## Contributors

## Languages

You can’t perform that action at this time.