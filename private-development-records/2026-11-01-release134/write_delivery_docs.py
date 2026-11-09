from pathlib import Path
import json

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-01-release134'

def report(name):
    rows = [json.loads(s) for s in (out/name).read_text(encoding='utf-8-sig').splitlines() if s.startswith('{')]
    assert rows[-1]['type'] == 'done' and rows[-1]['success'], name
    suites = {r['suite']['id']: r['suite']['path'] for r in rows if r['type'] == 'suite'}
    starts = {r['test']['id']: r['test'] for r in rows if r['type'] == 'testStart'}
    counts = {}
    for row in rows:
        if row['type'] != 'testDone' or row.get('hidden'): continue
        test = starts[row['testID']]
        if test['name'].startswith('loading ') or test['name'].endswith('(setUpAll)') or test['name'].endswith('(tearDownAll)'): continue
        assert row['result'] == 'success' and not row['skipped'], test['name']
        path = Path(suites[test['suiteID']]).relative_to(root).as_posix()
        counts[path] = counts.get(path, 0) + 1
    return {'passed': sum(counts.values()), 'failed': 0, 'skipped': 0, 'fileCount': len(counts), 'perFile': counts, 'log': name}

def collect_host():
    beta = report('beta-final.jsonl')
    stable = report('stable-complete.jsonl')
    back = report('search-back-player.jsonl')
    assert beta['fileCount'] == 94 and beta['passed'] == 1367, beta
    assert stable['passed'] == 19 and back['passed'] == 11
    assert 'No issues found!' in (out/'analyze-complete.log').read_text(encoding='utf-8-sig')
    assert 'All tests passed!' in (out/'render.log').read_text(encoding='utf-8-sig')
    assert (out/'ui/long-cumulative.png').is_file()
    host = {'beta': beta, 'stable': stable, 'searchBackPlayer': back,
        'analysis': {'issues': 0, 'log': 'analyze-complete.log'},
        'renders': ['long-cumulative.png'], 'renderCount': 1,
        'aggregation': 'One final complete run; focused/render/repeated checks are not added to overlapping counts.',
        'deviceUsed': False, 'realAccountUsed': False, 'backendUsed': False,
        'officialCumulativeHistoryObserved': False, 'completionMessageRecordResolved': False}
    (out/'host-check-summary.json').write_text(json.dumps(host, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    return host

if __name__ == '__main__':
    host = collect_host()
    apk = json.loads((root/'release/Mesting-Music-v1.0.34-verification.json').read_text(encoding='utf-8'))
    summary = '94文件1367项Beta、Stable19项、搜索/返回/播放器11项（含Android返回登记1项）、分析0问题及1张320px窄屏主机渲染通过。专项39项与渲染重复项不叠加完整套件数量。'
    limits = '仅本地准备；未手机/ADB、真实账号、music后台、Git提交推送/标签、上传或发布。主机验证不代表真实官版累计数值、覆盖安装、GPU/FPS或长期稳定验收通过。'
    artifacts = f'原签名双ARM APK：release/{apk["file"]}，{apk["fileSize"]}字节；SHA256：{apk["sha256"]}。\n\n完整源码：Mesting-Music-v1.0.34-source.zip；大小与摘要见release/Mesting-Music-v1.0.34-SHA256.txt和source-verification.json，避免自引用。'
    behavior = '''1. 根据官版9.6.15静态请求证据，将累计查询从仅好友ID改为双方数值ID，顺序为[好友,自己]；缺少双方身份时不发单人查询。
2. 累计快照/单调续算抽为TogetherCumulativeClock。官方新值替换旧快照，只续算快照之后的间隔，不相加本次时长。播放暂停不停止累计；切换账号/好友/房间时隔离清空。
3. 应用回到前台通过生命周期监听主动恢复；进入房间与进程重建重新读取官方值。关闭页面或销毁控制器不会发送退出请求，没有修改服务端结束规则。
4. 同房间临时零值不覆盖已有非零累计；保留并标注上次同步、停止续算。新房间有效零值可从零开始。缺失/错误仍明确未获取或上次同步，不回退到本次。'''
    acceptance = '''用户已反馈1.0.33仍显示1分钟，本版不沿用旧版“字段存在即代表完整历史”的推定。双方请求差异已修正，但真实账号是否返回约15788小时仍待用户验收。测试中的15788小时53分钟是合成数据，没有硬编码进产品或访问该账号。用户观察的“一方未退出，清后台仍累计”涉及平台服务端规则，静态客户端分析不能证明所有结算情形；恢复以官方值为准。一起听真实结束私信记录/聊天卡片仍为独立未确认事项。'''
    validation = {'version': '1.0.34', 'androidVersionCode': 55, 'date': '2026-11-01', 'timezone': 'Asia/Shanghai',
        'git': {'branch': 'beta', 'head': 'b6bcd5425e0df3e03febdd460b56d0ed42004c52', 'committed': False, 'pushed': False, 'dirtySourcePreserved': True},
        'host': host, 'apkVerification': 'release/Mesting-Music-v1.0.34-verification.json',
        'frozenPreviousFilesUnchanged': 50, 'fullGlassAndPinnedEngineRetained': True,
        'togetherCumulative': {'wireUserIds': '[friendId,accountId] numeric JSON array', 'authoritativeField': 'totalConnectionTime seconds',
            'snapshotReplacementNotAddition': True, 'foregroundResumeRefetch': True, 'processRecreationRefetch': True,
            'sameRoomNonzeroSnapshotSurvivesZeroAsStale': True, 'currentSessionFallback': False,
            'realOfficialHistoryObserved': False, 'officialClientParityVerified': False,
            'officialStaticEvidence': 'docs/together-cumulative-protocol-2026-11-01.md'},
        'deviceUsed': False, 'realAccountUsed': False, 'backendUsed': False, 'published': False, 'completionMessageRecordResolved': False}
    (root/'docs/validation-2026-11-01-v1.0.34.json').write_text(json.dumps(validation, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    (root/'docs/fixes-2026-11-01-v1.0.34.md').write_text(f'''# Mesting Music 1.0.34 / code55 修改与维护

2026-11-01，Asia/Shanghai。用户确认后实施。

{behavior}

维护入口：lib/features/music_platform/netease/together/together_cumulative.dart、netease_together_controller.dart。旧版123/133请求断言同步更正，新增test/release_134_together_history_test.dart覆盖线协议、长时累计、暂停播放、恢复/重建、零值和窄屏展示。静态依据见[together累计协议](together-cumulative-protocol-2026-11-01.md)。修复前确有失败的主机复现保存在私有repro-before.log。完整回归首轮与单跑触发既有封面测试的异步等待不足；仅在test/release_130_artwork_reveal_test.dart中让原生编解码真实时钟与虚拟帧时钟共同有界推进，不修改封面产品逻辑，保留失败/中断日志；最终全套使用并发2验证。

{summary}

{acceptance}

原签名、50份旧冻结APK/ZIP、完整玻璃/引擎、PRODUCT.md/DESIGN.md及依赖锁定保留。构建以tool/build_android_release_apk.ps1的显式1.0.34/code55为准，未改工作区既有pubspec版本占位；实际APK元数据已另验。

{limits}
''', encoding='utf-8')
    (root/'docs/INSTALL-v1.0.34.md').write_text(f'''# Mesting Music 1.0.34 / code55 安装验收

2026-11-01，Asia/Shanghai。应用名Mesting Music，包名com.mesting.music.beta，保留原签名及定制双ARM Release引擎/完整玻璃。签名相容不等于已在真机覆盖安装。

{artifacts}

请自行覆盖安装后检查：

1. 与有官方历史的同一位好友进入同一个一起听房间，对照官版累计，应读取完整官方值；勿只看本次1分钟。记录双方截图与对应时间以允许分钟级差异。
2. 重复打开播放器/房间面板与刷新，累计不应重复增加本次时长。换另一好友时读取其各自历史，不串用上一好友数据。
3. 暂停歌曲、返回桌面再恢复；保持至少一方未退出后清理Mesting后台，再打开同一房间，与官版比较，确认重新读取官方累计。此行为仍以平台真实房间状态为准。
4. 网络失败/同房间临时零值时，已有累计应标注上次同步并停止续算；没有有效累计时显示累计时长暂未获取。恢复后重新取值。退出再加入或切换账号/好友时不沿用旧房间快照。
5. 检查1.0.33的历史说明末项底距、地区已选中文/未选北京，以及1.0.32搜索侧滑等既有功能。

{summary}

{acceptance}

{limits}
''', encoding='utf-8')
    (root/'HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.34.md').write_text(f'''# Mesting Music 1.0.34 / code55 本地交付与接续

2026-11-01，Asia/Shanghai。唯一工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52。1.0.25～1.0.34未提交源码保留，暂存区空；HEAD不是当前完整源码。

{artifacts}

[安装验收](docs/INSTALL-v1.0.34.md)、[修改维护](docs/fixes-2026-11-01-v1.0.34.md)、[静态协议依据](docs/together-cumulative-protocol-2026-11-01.md)、[主机验证](docs/validation-2026-11-01-v1.0.34.json)、[APK核验](release/Mesting-Music-v1.0.34-verification.json)、[源码核验](release/Mesting-Music-v1.0.34-source-verification.json)。

{behavior}

{summary}

{acceptance}

{limits}

保留全部脏工作区与50份旧冻结交付，不reset/clean/stash、切分支或pull覆盖；保留原签名、定制引擎/完整玻璃及依赖工具链。Flutter3.41.9/Dart3.11.5和既有JDK/SDK/NDK未升级。两构建包装入口默认1.0.34/code55。源码ZIP自带当前manifest并保留旧SOURCE-SNAPSHOT-v1.0.24-BASELINE.json；工作区SOURCE-SNAPSHOT.json仍是历史基线，不据此回滚。

REA配置已按用户授权补齐JADX0.7.1并复用已有JDK17，只改Codex的REA专属env，保留配置备份。官版APK/反编译输出、REA完整Evidence/派生模块、工具和密钥只在本机私有目录，不在源码ZIP或发布物中。项目可分享的协议说明只包含事实、摘要与限制。

私有本版验证与构建：.codex-artifacts/2026-11-01-release134/；官版调查：.codex-artifacts/2026-11-01-together-history-review/。本轮未Git提交推送/发布，未访问手机/账号/后台。新需求按逐题澄清和方案确认后实施，已确认选择不重复询问。
''', encoding='utf-8')
    agents = root/'AGENTS.md'
    pointer = '**2026-11-01 本机最新为1.0.34/code55：按官版静态证据修正一起听累计查询为双方ID，抽离累计快照/续算，补前台恢复重取及同房间零值保护。先读[1.0.34交接](HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.34.md)和[安装验收](docs/INSTALL-v1.0.34.md)。94文件1367项Beta、Stable19、搜索/返回/播放器11项、分析0及1张窄屏渲染通过。原签名双ARM仅本地准备，完整玻璃/定制引擎与50份旧冻结物保持；1.0.25～1.0.34未提交。真实官方累计数值与清后台行为待用户验收，结束私信记录仍未确认解决。D:/AnLi，beta/b6bcd542；未手机/ADB、真实账号/后台、提交推送或发布。下方最新保留历史时点。**\n\n'
    assert '本机最新为1.0.34/code55' not in agents.read_text(encoding='utf-8-sig')
    agents.write_text(pointer+agents.read_text(encoding='utf-8-sig'), encoding='utf-8')
    print('1.0.34 verified delivery docs and current pointer written')
