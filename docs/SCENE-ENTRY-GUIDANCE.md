# 场景进入引导 · 完成记录

日期：2026-11-17。仅本地构建与预览，未发布、未推送。

## 实际场景审计

| 现有场景或机位 | 真实入口与操作 | 引导覆盖 |
| --- | --- | --- |
| 庭院 | 庭院按钮、出门；点击场景人物、推门进入 | 故事 / 人物委托 / 花园目标 / 探索 |
| 店内 | 推门、店内按钮；咖啡机确实打开制作菜单 | 阿禾、菜单及制作状态 |
| 店内落座 | 点击现有空座位；景致中的归位起身 | 定点环视、起身 |
| 花园近景 | 景致中的花园近景；返回原视角 | 未解锁探索、播种、照料、收获、生长 |
| 全岛观察 | 景致中的全岛；归位回小店 | 拖动、滚轮或双指缩放 |
| 沙滩躺椅 | 点击现有躺椅；起身回庭院 | 坐着看海、环视及起身 |

花园经营是现有面板，不是新增场景。港口没有独立机位，不为提示创建港口场景。手机默认近景中的躺椅在屏幕外，使用现有全岛视角可点选进入；本次没有调整相机。

## 行为与状态

- 等待加载与相机过渡结束，再经过 450ms 稳定期显示。
- 首次显示 7 秒，再次显示 4 秒，200ms 淡入淡出；系统减少动态效果时无过渡动画。
- 每次进入仅一个截止时间。快速切换清除旧提示，不排队；持续停留不重复。
- 打开对话、菜单、人物卡、帮助或景致工具面板立即收起；关闭面板不重播。
- 使用已有 `nextGoal`；将既有花园目标选择提取为 `gardenActivity`，日签与引导共用，未建立第二套任务状态。
- 制作中提示等待送达；花园按成熟 > 待照料 > 未播种 > 生长排序。未解锁花园不提示经营操作，也不透露解锁章节。
- 引导重复当前任务时，临时收起日签任务区；提示结束恢复，金币和时钟始终保留。
- 提示为不可点击的 DOM 小纸条，`pointer-events:none`，礼貌级状态播报。手机 13px、最多两行，桌面 14px。
- 景致中的原帮助按钮明确标为「操作提示」，可查看当前场景说明及真实手势。

## 存档兼容

在原 `glasshouse-stories-v1` 对象新增可选 `sceneVisits`，只记录六个有效机位的布尔 true。旧存档和异常值回落为空对象。首次真正显示时才标记，通过原 persist、导入和导出保存。金币、人物章节、任务、配方、装饰、作物与库存未因访问记录变化而改变。

## 实际文件

新增：
- `app/src/scene-hint-model.ts`：集中文案、只读状态映射、可测试会话控制。
- `app/src/scene-hints.ts`：提示 DOM、面板监听、去重、帮助内容与清理。
- `app/src/scene-hints.css`：纸条与轻量帮助入口。

局部修改：
- `app/src/progression.ts`：访问元数据默认值/迁移；共享既有花园目标选择。
- `app/src/player-hud.ts`：复用同一个花园目标选择。
- `app/src/game.ts`：沿原存档通路记录访问。
- `app/src/main.ts`：连接真实机位、就绪状态、订单状态、帮助与现有更新循环；移除被取代的入场长 toast。
- `app/index.html`：帮助框中的当前操作说明。
- `game/`：由构建生成的生产文件，不手写修改。

新增验证：`verification/scene-hints-unit.cjs`、`verification/scene-hints-browser.cjs`。证据在 `verification/scene-hints/`。

## 验证结果

| 命令 | 结果 |
| --- | --- |
| `node verification/scene-hints-unit.cjs` | PASS，7 组：计时、首次/重复、快速切换、面板打断、状态文案、手势、迁移 |
| `node verification/scene-hints-browser.cjs` | PASS，1440×900 桌面与 390×844 触屏；六种真实机位、咖啡机/座位/NPC 点击、制作送达、帮助、旧新导入导出、四种花园阶段及减少动态效果 |
| `node verification/quest-progression.cjs` | PASS，17 检查、256 迁移案例，原九章文本与菜单/装饰保护检查 |
| `node verification/garden-progression.cjs` | PASS，种植、库存、收获及异常状态 |
| `node verification/economy-progression.cjs` | PASS，经营与收益 |
| `node verification/mona-progression.cjs` | PASS，7 检查、32 触发组合 |
| `node verification/player-hud-unit.cjs` | PASS，目标只读映射 |
| `node verification/garden-playtest.cjs` | PASS，解锁、2 个真实种植热点、8 笔真实订单、独立作物、冬季、收获、库存、配方、存档、390px |
| `npm run build` | PASS，包含 `tsc --noEmit`、Vite 生产构建与 staging |

浏览器新增验证无 pageerror 或 console error。提示与日签、头像、天气、导航、返回、起身和制作进度条的矩形不重叠；手机提示不超过两行。生产构建仍有既有大包超过 500kB 的提示，非构建错误。本次没有增加渲染资源、场景材质或实时光源。

源码快照对照：原有 67 个 app/src 文件中仅四个连接/状态文件变化；其余 63 个哈希一致，包含场景、相机、天气、人物模型与对话模块。对话正文及目录项另有原测试逐字验证。

## 实际游戏截图

- 桌面庭院：`verification/scene-hints/desktop-courtyard-first.png`
- 手机庭院：`verification/scene-hints/phone-courtyard-first.png`
- 店内：`verification/scene-hints/desktop-interior-first.png`
- 手机花园成熟：`verification/scene-hints/phone-garden-ready.png`
- 全岛：`verification/scene-hints/desktop-island.png`
- 沙滩落座：`verification/scene-hints/phone-beach-seat.png`
- 操作提示：`verification/scene-hints/phone-help.png`

其余首次、落座、制作中、播种/照料/生长截图在同目录。截图来自本地实际运行游戏，不是概念图。
