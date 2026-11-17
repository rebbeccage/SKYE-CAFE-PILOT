# 玩家 UI：场景优先的生活手账

日期：2026-11-17。基于当前 `app/src/`，不发布、不推送，不修改根目录旧 `src/`。

## 现有基线与最小替换

检查了 `game.ts` 的存档/人物/菜单/目标入口，`progression.ts` 的唯一玩法规则，`dialogue.ts` 的分页和自动阅读，`main.ts` 的输入与场景连接，以及现有 UI 样式和水彩头像。复用三位人物现有 `*-watercolor.png`，金币图来自既有 UI 图集，Mona 保留独立头像和事件。

实际源码改动：

- 新增 `app/src/player-hud.ts`：小店日签、头像入口及只读任务显示。
- 新增 `app/src/player-ui.css`：轻薄纸张、细颗粒纹理、响应式 HUD/卡片/工具收纳与减弱动态支持。
- `app/src/game.ts`：接入现有存档余额、单人物展示卡、弹窗焦点恢复与背景拖动防误关。
- `app/src/main.ts`：收纳原有工具为“景致”，移除旧聊天文字框，连接模态输入锁定。
- `app/src/dialogue.ts`、`app/src/dialogue.css`：紧凑叙事纸条、现有分页/回应/跳过/自动的真实 DOM 排列。
- 重新生成 `game/` 和现有构建脚本要求的 `dist/`。构建产物不是开发入口。

`verification/player-ui/baseline.json` 保存改动前源码哈希。对比结果为 4 个既有源码文件改变、2 个新增文件；`progression.ts`、模型、相机控制模块、岛屿、天气、音乐、花园等源码哈希不变。

## 玩家行为

1. 右上小店日签第一行显示可用金币 `save.coins`；奖励、购买与订单结算即时刷新。只在余额增加时短暂显示增量。
2. 日期时间是设备本地生活时钟，分钟更新，明确标注；绝不触发场景日夜或天气变化。
3. 任务投影复用 `nextGoal(save)`，章节显示真实 `n/3`，作物显示真实成长值；二元委托只显示阶段，不伪造百分比。没有目标时收起进度条。
4. 头像顺序阿禾、林伯、棠姨，分别绑定原有正确水彩画像。静态叶片来自 `canRead`，可访问名称说明新故事通过场景人物继续。点击头像仅打开该人物的展示卡，无剧情操作按钮；“相遇”仍可浏览三人手记。
5. 原有 NPC 热点继续打开原故事，日签的必要任务导航保留。
6. 对话居中靠下，最大宽度 660px；手机左右各 16px，正文 17px、1.7 行高。每页最多两行，三章归档继续分页。姓名、48–52px 头像及阅读控制整合在纸条内，回应位于细分隔线下。对话时无全屏模糊或暗幕，收起无关 HUD/通知。
7. 原天气、庭院/店内入口保持直达；环绕、日夜、复位、全岛、留影、声音和帮助保留在“景致”。
8. 原生 modal 维护焦点范围；卡片/对话期间禁用场景拖动、缩放、自动环绕与热点误触。拖动弹窗外区域不会被当作点击关闭。关闭后恢复入口焦点和场景控制。Tab、Enter、Escape、触屏可用。
9. 200ms 轻微淡入位移，减少动态偏好关闭动效。没有加入新持久化字段或第二套任务系统。

## 验证命令与证据

```sh
npm run build
node verification/player-hud-unit.cjs
node verification/quest-progression.cjs
node verification/garden-progression.cjs
node verification/economy-progression.cjs
node verification/mona-progression.cjs
node verification/player-ui-playtest.cjs
BASE_URL=http://127.0.0.1:5194 node verification/quest-playtest.cjs
node verification/mona-playtest.cjs
```

浏览器脚本读取本地生产预览；使用隔离的 Chrome 上下文，不改变玩家当前浏览器存档。涉及截图的验证是桌面 1440×900 与手机 390×844/DPR2 仿真，尚非实体手机测试。

- TypeScript 检查和生产构建通过。仍有既有单包大于 500KB 的构建提示，不影响构建成功，本轮不重构加载架构。
- HUD 单元测试：同源目标、章节进度、二元委托、成长/待照料/成熟、免费冬季陈设不误判首件付费装饰、只读状态。
- 玩法单元回归：人物/旧档迁移、种植/库存/新品、经营收益与小费、Mona 独立状态均通过。原始九章、四款基础商品、六件付费装饰的冻结数据保持一致。
- 人物浏览器回归：逐字验证九章、六项委托、错误商品不推进、归档不重复奖励、导入导出/旧档/异步订单防护；390px 菜单、天气、室内和音乐 smoke 通过。
- Mona 浏览器回归：六单/暮色/制作与对话互斥条件、两轮中途关闭不领奖、唯一解锁、30金币售卖、旧档和新档恢复均通过。
- UI 浏览器测试：三张纯展示卡，正确头像、焦点恢复、内外景拖动/缩放锁定与释放、原文拼接、自动/跳过、余额更新、减少动态与无横向溢出。
- 真实余额路径：100 → 原故事奖励后112 → 花箱购买后57 → 手冲收益24与氛围小费1结算后82；累计收入137，未与可用余额混用。
- 日签和操作控件矩形面积合计：桌面约5.4%，390px手机约16.5%（含推门入口）。

详细日志：`verification/player-ui/`；浏览器 JSON：`verification/player-ui/results.json`、`verification/quests/results.json`、`verification/mona/browser-results.json`。

## 实际游戏截图

| 画面 | 桌面 | 手机竖屏 |
| --- | --- | --- |
| 首页 | `verification/player-ui/desktop-home.png` | `verification/player-ui/phone-home.png` |
| 人物卡 | `verification/player-ui/desktop-character.png` | `verification/player-ui/phone-character.png` |
| 短对话 | `verification/player-ui/desktop-short-dialogue.png` | `verification/player-ui/phone-short-dialogue.png` |
| 长对话分页 | `verification/player-ui/desktop-long-dialogue.png` | `verification/player-ui/phone-long-dialogue.png` |

长对话使用原有三章故事归档：桌面3页，手机5页，原文完整，最后确认不重复发奖。

## 保留边界

原对话、章节顺序、12枚心意金币、任务条件、菜单价格及解锁、8秒订单流程、花园种植/库存、装饰购买与小费、Mona、旧新存档及导入导出均保留。未更换引擎，未新增经营日期/倒计时/失败/登录系统，未改场景与镜头渲染架构。
