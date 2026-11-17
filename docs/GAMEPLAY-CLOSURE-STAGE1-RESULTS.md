# 阶段1：人物委托闭环验收记录

日期：2026-11-16。范围以本轮用户授权为准；只完成人物委托，不实施花园、装饰小费或新品。

## 修改文件

| 文件 | 本次修改 |
|---|---|
| app/src/progression.ts（新） | 可序列化任务、六项映射、资格派生、旧档迁移、章节/订单防重、同源引导 |
| app/src/game.ts | 人物卡与准确门槛、菜单委托/对象选择、订单快照、原收益和完成反馈、导入导出兼容 |
| app/src/game.css | 委托条/商品小标签/状态行、390px换行、下一件小事可见性 |
| app/src/main.ts | 把实际选择的商品名传给原8秒制作提示；不改计时、动画、送餐和帧循环 |
| verification/quest-progression.cjs（新） | 纯规则、迁移、原文/菜单/装饰与44文件锁定检查 |
| verification/quest-playtest.cjs（新） | 九章/六委托/错单、归档、导入导出、异步恢复竞态、手机、天气与室内烟雾测试 |
| verification/fixtures/quest-locked.json（新） | 实施前冻结的原始常量与既有资源/源码哈希 |
| verification/dialogue-playtest.cjs | 门槛预期改为蜂蜜拿铁；支持BASE_URL；等待原生close事件后验证清理 |
| docs/GAMEPLAY-CLOSURE-SPEC.md、GAMEPLAY-CLOSURE-PLAN.md | 阶段范围、实施状态及未来范围声明 |
| docs/GAMEPLAY-CLOSURE-STAGE1-RESULTS.md（本文件） | 本次结果与停止点 |
| game/、dist/ | npm run build自动生成；没有发布 |

测试产生 `verification/quest-unit-results.json`、`verification/quests/` 内结果/桌面及手机截图/测试导出/构建摘要，以及原对话测试截图与 `dialogue-results.json`。

## 核心循环与状态

阅读原故事并选择原回应 → +12心意金币/原配方解锁 → 该人物委托active → 菜单选交付对象和正确商品 → 原8秒制作及送餐表现 → 原商品收益/该委托completed → 下一章可读。

- 持久化只新增 `characterQuests`（可选）：`version:1`、任务 `entries`、未来旧门槛 `legacyGateCredits`。
- 任务记录只有 active/completed，完成来源为 order/legacy。未触发不建记录，人物卡四种状态由同一规则派生。
- 运行时订单冻结 recipe/target，committed加pending清空防止重复提交；订单与orderEpoch不写存档。
- 同款只有一项有效委托时默认匹配；有多人时必须选一位或自由营业。选定对象后做错商品，仅获得该商品原收入，不转交另一人。
- 六项映射：阿禾honey→tea；林伯pour→berry；棠姨pour→tea。各人物第三章仍为原归档。
- 下一件小事与点击动作使用同一nextGoal：可读故事 → 当前委托 → 首件装饰/攒钱 → 自由营业。本阶段不导向尚不存在的花园经营。

## 新玩家操作路径

1. 点击“相遇”或阿禾入口，阅读《第一杯的温度》，选择原回应，获得12金币并解锁蜂蜜拿铁。
2. 点击菜单顶部“阿禾 · 蜂蜜拿铁”，点击制作，等待原8秒过程。收到收益与委托完成提示后，阿禾第二章开放。
3. 阅读第二章，解锁薄荷花园茶；完成阿禾的薄荷茶委托后阅读第三章。
4. 可随时转向林伯或棠姨。林伯依次制作今日手冲、莓果可颂；棠姨依次制作今日手冲、薄荷花园茶。若两人都要手冲，在菜单选定一位。
5. 自由营业不受委托限制。做错商品仍获得原价收入；购买、摆放、收起原六件装饰照旧，无小费加成。
6. 三章完成后从人物卡重读归档，不重复领奖。此阶段没有种植、收获或新品入口。

## 存档兼容结果

- 原键 `glasshouse-stories-v1`、导出包装 `glasshouse-v1` 不变。
- 穷举三人已读0—3章、served为0/1/2/100的256组旧存档，coins、earned、chapters、recipes、owned、placed、served全部逐值保留，迁移幂等。
- 旧served达到1/2的未来门槛先记豁免，不提前加章或发钱；旧玩家读到相应章节时仍可继续。已读章节证据优先，绝不倒退。
- 新版任务字段存在后，不再用served推断资格。字段损坏安全修复，不清空合法核心数据；不认识的未来版本拒绝覆盖原存储。
- 浏览器实际验证旧版导入、新版恢复、导出后重导入、非法导入无副作用、在制时拒绝导入，以及文件读取横跨一整单后仍拒绝陈旧恢复。
- 花园相关四字段不初始化、不实现；已有不相关扩展数据原样保留，留待后续阶段处理。

## 实际验证证据

全部使用隔离浏览器上下文与测试数据，没有读取或修改用户游玩会话。

| 命令 | 结果 |
|---|---|
| `node verification/quest-progression.cjs` | PASS：17组检查、256组迁移组合；9章原文/回应、4款菜单、6件装饰逐字节保留；44个既有文件哈希不变 |
| `BASE_URL=http://127.0.0.1:5193 node verification/dialogue-playtest.cjs` | PASS：完整正文、12金币、原配方、自动/跳过、关闭清理、归档、390px分页、天气/音乐/订单/镜头回归，错误0 |
| `npx tsc --noEmit` | PASS，退出码0 |
| `npm run build` | PASS，退出码0；60模块；Vite现有大包体警告，不为本阶段做拆包重构 |
| `BASE_URL=http://127.0.0.1:5194 node verification/quest-playtest.cjs` | PASS，针对生产构建：9章逐字阅读与回应、6项正确委托、1项错单、原价收益、重复归档无奖励、全部存档场景、390px人物/菜单、下一件小事、天气/室内/音乐烟雾测试，错误0 |

真实订单记录约8秒完成；九章加七单（含一错单）的新玩家主流程获得306金币（108心意金币 + 198商品收入）。两份原手冲普通订单分别用于制作中恢复、读取跨整单恢复测试，无小费、无人物推进。

最初旧对话脚本在Escape后同步断言body类已清理，偶发早于原生close事件；改为等待清理状态（3秒上限）后重跑通过。未修改dialogue.ts或删除该检查。

证据：

- [纯规则结果](../verification/quest-unit-results.json)
- [生产浏览器结果](../verification/quests/results.json)
- [对话回归结果](../verification/dialogue-results.json)
- [手机菜单截图](../verification/quests/mobile-menu.png)
- [手机人物卡截图](../verification/quests/mobile-people.png)
- [桌面菜单截图](../verification/quests/desktop-menu.png)
- [生产文件SHA-256](../verification/quests/build-manifest.json)

## 保留与停止点

九章原文/回应、原菜单和装饰常量、对话组件、全部图片资源、花园/作物景观、天气、雨雪、昼夜、海岛/水面、室内、音乐、人物造型和送餐系统均保留。此前手机全屏/DPR适配保留。本轮只对风险相关功能做浏览器烟雾/对话回归，并通过源码哈希验证其他锁定模块；没有声称重跑全部历史场景几何脚本。

**阶段1完成，到此停止。** 阶段2、花园经营/作物/库存/两款新品、氛围小费均未开始；未部署、未推送、未创建提交。
