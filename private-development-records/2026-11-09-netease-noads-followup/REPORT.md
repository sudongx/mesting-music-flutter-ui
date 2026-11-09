# 1.0.81真实反馈：广告读取200但ads为空

日期：2026-11-09。用户提交1.0.81/code102专用JSON，随后确认同账号在官版9.6.15“领福利”仍可加载广告。本轮仅接收报告、核对81冻结状态和静态追踪官版请求；没有产品/测试/版本修改、重建、设备/ADB/真实账号/NAS访问或官方业务请求。

## 实际报告能证明的事实

- entry=accepted，officialNm，位置/资源/source字段存在，ext不存在，qualificationRequested=false。该false仍不能区分明确false与省略，不能当资格拒绝。
- stage=adData，HTTP200、businessCode200，现有eapi，identity=defaultPc。
- adsType=object，slotCount=0，requestedSlotPresent=false，selectedAd缺失，响应内ads字段计数0，shapeLimited=false。
- 因此确实是上游返回空广告对象，不是界面隐藏素材、精简裁剪或未到广告读取。200不能证明实际广告已下发或奖励可领取。
- 本报告没有素材链接/时长/领奖规则，不能据此验证独立H5、承载或完成回调。
- 同账号官版可加载降低“该账号普遍没有广告”的可能，但用户对照不等于同一网络请求的抓包；仍不能排除时点、广告位、客户端、设备上下文或动态配置差异。

原用户文件保存在user-report.json，散列和范围见scope.json。未覆盖下载目录中的原文件或81冻结文档。81完整只读校验通过：3050文件、1635产品输入、102冻结物、74退休路径、HEAD/index/锁/签名/旧收据保持。

## 新查明的请求差异

从官版Fragment.loadData→pe→协程y.invokeSuspend→e20.l.w追到真实广告读取入口：

1. y.invokeSuspend以source和backupUrl起始，合并ViewModel.d2()的extParams；如实际存在entranceComponent，再增加rightsCommonExt。位置列表仍由已证adPosition_resourceId组成。
2. e20.l.w先调用e20.d.q取得通用广告上下文，再覆盖合并上述任务上下文；将结果序列化为adextjson，通过s0(map)进入ad/get请求。type_ids来源仍是本次位置列表。
3. 81实现只传type_ids，没有传adextjson或其任务source/backupUrl/ext分量。这是明确的完整性差异，当前空集合不能仅归因PC身份。
4. ViewModel.j3证明extParams来自同次Bundle的ext JSON，source和backupUrl来自Bundle，缺省为0/空串。Zc证明rightsCommonExt仅在真实entranceComponent非空时生成，不能编造入口URL。
5. e20.d.q→r→s→t通用广告上下文还包含设备、用户代理、位置/标识与客户端能力：mobilename/android_id/manufacturer/lbs/oaid/adDeviceId/extDevJson等以及原生SDK支持字段。它们不能靠填假设备ID、复制官版标识或声称具备未实现SDK来对齐。
6. e20.d.l另施加e32.b.h请求配置，旧160保存的g42.a拦截器存在动态加密分支。当前200空广告不证明eapi失效，也不证明必须xeapi；不能只切换UA或os就声称已适配完整移动端协议。

静态父Evidence：

| 方法 | Evidence |
| --- | --- |
| Fragment.loadData | ev_80b2a028b413a96b18709498ef889f78eba4d40d30f0401b0d67f11a883d853b |
| Fragment.pe | ev_284b6efdf721ea2a6b6d9331a9f5cbbff1486dd1d95bd52813d3d08a202ef382 |
| Fragment.y.invokeSuspend | ev_10099a47b36387917e427c20d27385b73c498ac407d842b4c245a059d77c30b7 |
| e20.l.w | ev_f1c5e0ea8daba797465e0ef80c4579aca45594cb8fea7b059c85733d4e969a62 |
| ViewModel.d2 | ev_527fbd4803d360bb50babcdf1280b77370e654b229d05f54f32e0268572f1aa8 |
| ViewModel.j3 | ev_5a71e706d5c1be2389ab562edc6fa69769c080e342391ce582a0fa08884c07b2 |
| Fragment.Zc | ev_3e5783971b1b27ebae0ebc4ed8ca9e5bfe814a20a77613d8a051df43c18f769c |
| e20.d.q/r/s/t | ev_2ec5bb262077e38efa98a17932f3b9402734b2766986fe7604013635f4fd2c9b / ev_5c0761477ec3ab37669c079d94190e39fcff3ea07a7dd5661b8bb62be4e83394 / ev_d9cc78167ce83ba30a9d8c56d75a1ce58de61c4606024e001ca55e519fdd28ca / ev_20a1fcb8dabdb5d344008ff4b763ed3d04af542f9e2167cc79601d9a040cda55 |
| e20.d.l | ev_f71c1b966ac5b8a12d01298bd830e06741f3798ca0a0c38cd6aa440502f9f5a0 |
| e20.l.R | ev_bfb0e9521206deebc680da9dbdac7c4949b0a07ded29ff577922a6e1e87b16e8 |

原类库存选择了对应方法与重载，方法正文均标完整；仍是静态观察，不是运行官版请求。分析载体来源及散列见carrier-provenance.json；完整REA记录见rea-evidence.json，已保存并reset。

## 其他不能混淆的发现

- 官版e20.l.w对于只请求一个位置，会取返回ads对象的首个键并映射到请求位；81诊断只认精确键。这可能使以后非空别名返回被标unsupportedLayout，但本次ads真的为空，不是这条差异造成的。
- 官版e20.l.R读取noRetry、message、mainMsg、image。本次根对象计数6，现有诊断未投影noRetry/mainMsg，不能猜测它们的值或断言平台没有错误说明。若更新诊断，仅增加受限noRetry及消息存在性/类型，不导出原文。
- 官版请求的query和form进入加密前收集；旧160证据显示收集器合并二者。没有针对本次实际请求证明type_ids编码差异，不能把query/body位置直接定为根因。

## 建议下一步，尚未实施

先以独立只读修正候选补齐已证实的任务上下文：使用同次真实入口的source/backupUrl及有界ext，构成adextjson；只有实际提供的入口上下文才传，不补造rightsCommonExt。通用PC默认/UA/eapi本轮先保持，以便只改变已知缺项观察结果，明确标记未对齐的设备/SDK上下文。

增补安全的请求字段存在性、服务器noRetry及空回执说明的存在性/类型诊断，继续不导出上下文内容/URL/标识；非空单槽别名只按已证规则作结构观察，不调用其中链接。每次仍用户主动、一次任务读取+一次配置读取，保留取消/账号/跨日保护；不展示、曝光、点击、停留、gain或重放未知记录。

该候选可以检验当前缺少任务上下文这一因素，不保证一定返回广告。若仍空，再依据该轮证据选择客户端/真实设备上下文或传输的受限验证，不用多变量盲试和空壳WebView冒充完成。下一版产品实施须按AGENTS在用户确认后进行；当前仅完成研究，没有修改或重建81。
