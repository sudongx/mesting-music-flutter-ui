# 汽水助手 (QishuiHelper)

> 用 GPT 视觉识别驱动的 Android 浮窗自动化工具，专为「汽水音乐」自动看广告领取免费听时长设计。

## 项目背景

「汽水音乐」(`com.luna.music`) 福利页提供「看一段广告 = 累积时长」的功能，看够 2 个广告即可解锁 1 天免费会员。
本项目目标：**用户开启浮窗后，APP 自动点击「领时长」→ 等广告播完 → 关闭 → 进入下一轮**，节省手动点击。

## 技术亮点

- **GPT-5.5 视觉识别状态**：解决目标 APP 用 Compose 渲染、`AccessibilityNodeInfo` 树没有暴露关键文字的问题
- **严格 JSON 输出**（`response_format: json_object`）：避免 markdown 包裹解析失败
- **AccessibilityService 截屏 + 手势点击**：无需 root 即可工作（Android 11+）
- **WindowManager 浮窗**：可拖动，▶ 启动 / ⏸ 停止 / × 关闭

## 架构

```
MainActivity              (引导授权 + API 配置)
   │
   ▼ 启动
FloatingService           (前台 Service + 浮窗)
   │
   ▼ broadcast START / STOP
QishuiAccessibilityService (核心循环)
   │
   ├─ takeScreenshot()    (截屏)
   ├─ GptVisionClient ──→ 你自己的 OpenAI 兼容 API
   │                      返回 { state, action }
   └─ dispatchGesture()   (按 action 执行点击/返回/等待)
```

## 状态机（11 种）

| 状态 | 应对动作 |
|---|---|
| `fuli_clean` | 点「领时长」按钮 |
| `fuli_with_congrats` | back 关闭恭喜浮层 |
| `ad_playing` | wait 等播完 |
| `ad_finished` | tap 顶部 × 关闭 |
| `reward_dialog` | wait 或 tap 坚持退出（按情境） |
| `svip_promo` | back 关推销页 |
| `live_ad` | tap 右上「关闭」 |
| `live_confirm` | tap「退出不看了」 |
| `main_home` | 点底栏「福利」 |
| `unknown` | wait |

## 使用步骤

### 1. 准备
- Android 11+ 设备（无障碍 `takeScreenshot` API 要求）
- OpenAI 兼容 API key（支持视觉，如 `gpt-4o` / `gpt-5.5`）

### 2. 编译安装
```bash
git clone <this-repo>
cd QishuiHelper
./gradlew assembleDebug
adb install app/build/outputs/apk/debug/app-debug.apk
```

> 国内编译慢可在 `gradle.properties` 取消注释代理段。

### 3. 配置
打开「汽水助手」APP → 完成 4 步：
1. **悬浮窗权限** — 点按钮跳转系统设置开启
2. **无障碍服务** — 点按钮跳转系统设置，找到「汽水助手」开启（MIUI 等会弹「危险」提示，倒计时 8 秒后点确定）
3. **API 配置** — 填入 API base / key / model，保存（首次使用必填）
4. **显示悬浮窗** — APP 自动最小化

### 4. 运行
- 打开「汽水音乐」（任意页面）
- 点浮窗 ▶ 开始
- 浮窗持续显示当前状态（如「看广告 / VIP 12 天」）
- 想停止点 ⏸

## 配置项

`MainActivity` 里的 3 个输入框对应 SharedPreferences：
- `api_base` — API 基础 URL（你的中转站地址，需自行准备）
- `api_key` — `sk-xxxx`（必填）
- `model` — 模型名，需支持视觉，如 `gpt-5.5` / `gpt-4o`

**三项必须全部填写**，本应用不内置任何 API 凭据。

## 项目结构

```
QishuiHelper/
├── app/
│   ├── build.gradle.kts             # AGP 8.5.2 + Kotlin 1.9.24
│   └── src/main/
│       ├── AndroidManifest.xml
│       ├── res/
│       │   ├── layout/
│       │   │   ├── activity_main.xml      # 主界面（4 步引导）
│       │   │   └── floating_widget.xml    # 悬浮窗
│       │   ├── xml/
│       │   │   └── accessibility_service_config.xml
│       │   └── values/, drawable/, mipmap-anydpi-v26/
│       └── java/com/qishuihelper/
│           ├── MainActivity.kt
│           ├── FloatingService.kt
│           ├── QishuiAccessibilityService.kt
│           └── GptVisionClient.kt        # GPT 视觉客户端
├── build.gradle.kts
├── gradle.properties                 # 含可选代理配置
└── settings.gradle.kts
```

## 验证结果

实测连续 5 轮闭环全部成功：

```
项目启动: VIP 5 天
调试期间:  5 → 11 (+6 天)
AI 驱动期: 11 → 12 → 13 → 14 → 15 (+4 天)
```

## 注意事项

- 仅供学习研究
- 广告由穿山甲等 SDK 真实播放，不会损害厂家收入
- 服务端有每日上限（实测约 7 天/天）
- API 调用会消耗 token（一轮约 5 次调用 × ~1500 tokens）

## 已知坑

| 坑 | 解决 |
|---|---|
| 目标 APP Compose UI 不暴露文字给无障碍 | 用截图 + GPT 视觉判断 |
| `AccessibilityService.takeScreenshot` 默认无权限 | 加 `android:canTakeScreenshot="true"` |
| `gestureClick` 50ms 太短不响应 | 改 150ms + GestureResultCallback |
| 「坚持退出」反话陷阱（点了直接退出广告白看） | Prompt 明确警示双场景 |
| MIUI 重装 APK 后无障碍设置被清 | 重装后重新启用 |

## License

MIT — 仅供学习参考
