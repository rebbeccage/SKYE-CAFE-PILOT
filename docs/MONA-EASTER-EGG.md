# 莫娜独立彩蛋接入

## 范围与触发

使用用户提供的 `tripo_convert_f0dfd675-bac6-4ab0-a117-a368c1d4a409.glb`，原始字节、紫色服装、尖帽、双辫、斗篷和贴图全部保留。有效源码仍为 `app/src/`。无修改旧 `src/`，无发布或推送。

累计完成至少 6 单，当前为庭院且处于暮色、没有正在制作的订单、没有任何打开的对话框，才能出现并交互。沿用雪天固定日间的规则，雪天不触发暮色彩蛋。雨天暮色可触发。

莫娜不进入 `world.actors` 或三位人物的章节数组。路径位于花园空闲区域，世界坐标 x=-5.8、y=0.26、z=3.05–3.85；停留时面向棠姨所在区域。入口、台阶、送餐通道、花园猫及现有植物不移动。对话期间停止路径移动。

GLB 无骨骼和动画，采用缓慢平移路径、轻微呼吸和淡入淡出，**没有骨骼步行动作或强行改成坐姿**。若以后使用含动画的同方向资产，适配器优先播放其第一个片段。原模型资产检查见 `verification/mona/asset-report.json`。

## 原文与确认

第一段：
- 莫娜：“我顺着咖啡香，走错了一小段路。”
- 玩家：“走错的路，也可以坐一会儿。”

第二段：
- 莫娜：“那就用这份香气，交换片刻的歇脚吧。”
- 玩家：“谢谢，我会把它写进菜单。”

复用原有分页、自动、跳过、关闭与移动端对话组件。自动阅读与跳过都不会提交玩家回应。两段中途关闭均无奖励，下次重新触发这段短对话。只有确认最后一句才写入完成状态，随后莫娜淡出。

## 数据与菜单

新增可选序列化字段：

```ts
monaEvent?: { version: 1; completed: boolean }
```

未完成／正在交谈属于临时表现，保存仅记录永久完成结果。旧版及阶段 1–3 存档缺少此字段时补 `completed:false`；无额外金币和历史奖励补发，原章节、配方、委托、花园和装饰数据保持。正常新存档导入、导出及重载会保留 `completed:true`。主动恢复完成前的旧存档仍按其旧进度运行。

完成后追加隐藏商品 `bellflower-coffee` / 风铃草咖啡 / 30 金币。完成前菜单不渲染卡片，制作校验也禁止下单。原四款菜单、两款花园饮品及图片不替换。隐藏饮品不消耗作物，使用现有 8 秒制作、送餐、普通收益、氛围小费和作物生长事件；不推进不匹配的原人物委托。解锁不增加 12 枚心意金币，也不改原人物的心意金币规则。

## 实际修改文件

应用逻辑：
- `app/src/progression.ts`：独立彩蛋状态、兼容迁移、触发条件、一次性完成及制作许可。
- `app/src/game.ts`：两段原文对话、最后回应提交、隐藏商品卡与原订单协调。
- `app/src/dialogue.ts`：仅增加可选独立头像和无章节装饰模式，默认人物行为保持。
- `app/src/main.ts`：连接运行环境、独立模型、模型点击与 QA 快照。
- `app/src/mona.ts`、`app/src/mona.css`：异步 GLB 加载、缩放落脚、独立安全路径、待机淡入淡出及名牌。

新增资产：
- `app/src/assets/models/mona.glb`、`MONA.md`
- `app/src/assets/portraits/mona-model.png`：同一模型的正面渲染头像。

验证：
- `verification/mona-progression.cjs`
- `verification/mona-playtest.cjs`
- `verification/mona-inspect.cjs`、`verification/mona/inspect.html`
- `verification/quest-progression.cjs`：明确允许本次 `dialogue.ts` 的可选扩展；仍逐字校验九章剧情、四款原菜单、六件装饰，以及其余 41 个锁定文件哈希。原对话行为另做完整浏览器回归。

生产构建自动刷新 `game/` 和构建脚本维护的 `dist/`。均为本地构建，无托管发布。

## 验证命令

```sh
node verification/mona-progression.cjs
node verification/quest-progression.cjs
node verification/garden-progression.cjs
node verification/economy-progression.cjs
npx tsc --noEmit
npm run build
node verification/mona-playtest.cjs
BASE_URL=http://127.0.0.1:5194 node verification/stage3-regression.cjs
```

结果与截图收集在 `verification/mona/`。最终验收汇总见 `verification/mona/validation-summary.json`。

## 最终验收结果

- 新彩蛋：7 组纯规则测试，覆盖 32 组出现条件；真实浏览器端到端测试通过（含第六单、两次中止、自动不提交、最后确认、真实 8 秒订单、30 金币、重载及实际文件导入导出）。
- 原规则：人物委托 17 组、花园 10 组、经营经济 8 组全部通过；包含 256 个旧存档组合和 4,096 个装饰拥有/摆放组合。
- 原浏览器回归：quest / dialogue / winter / mobile / garden 五个套件全部退出码 0。逐字核验九章剧情，原奖励和解锁不回归。
- TypeScript 与生产构建通过。Vite 仍提示已有大包体积建议，不影响构建。
- 截图审查：模型正反面、庭院位置、390px 对话及菜单；浏览器错误为 0。资产无自带动画，未承诺骨骼步行或坐姿。
- 本地预览：http://127.0.0.1:5194/ 。实际触发须已有 6 单，切换暮色并关闭面板。未发布，未推送。
