# 天空岛 · 场景探索与菜单更新

2026-11-17。本次在 `app/src/` 实施，未发布或推送。

## 已实施

- 玩家可见名称统一为「天空岛 / SKYE ISLAND」：页面标题、招牌、载入提示、人物手记标题、存档下载名、照片下载名。
- 草莓燕麦拿铁与葡萄气泡美式使用本次提供的两张原始 PNG。浏览器下载实际构建图片后逐字节 SHA-256 校验一致。
- 尚未解锁的普通及花园菜品只显示通用占位、发现条件，不显示菜品名称或图像。莫娜的隐藏配方解锁前仍完全隐藏。
- 莫娜沿用累计六单、暮色庭院等首次触发条件。完成最后一次确认后，沿用原来的永久完成标记作为驻留依据；她在晴、雨、雪及重新载入后继续留在世界中，沿用原有活动路线。再次点击只显示歇脚短语，不重复对话、奖励或解锁。
- 增加八处只读观察互动：贝壳、漂流木、冰激凌车、小猫、园艺小桌、门边铜铃、磨豆机、窗边植物。观察不修改金币、任务、作物或人物进度。磨豆机使用实际模型变换定位；小热点优先于覆盖它的整个吧台菜单热点。
- 三把室内座椅保留木架与摆放，增加鼠尾草绿天鹅绒坐垫、靠背、滚边与压扣，使用柔和布料 sheen。
- 咖啡机旋转 180°，两只接液杯与咖啡流沿用咖啡机变换，出杯面朝向吧台后的咖啡师。
- 点击已有沙滩躺椅可切换到坐姿海景机位。复用固定眼位环视控制，支持拖动和缩放；点击「起身，回到庭院」、庭院标签、复位或 Escape 返回。切入店内也会正常退出海景座位。天气与音频仍按庭院运行。
- 「下一件小事」改为只读；人物头像卡继续纯展示；订单完成不会自动打开下一章。只有点击场景中的对应角色才能进入人物剧情。
- 附带修正制作进度条选择器，使 8 秒制作进度写入制作条而非日签任务条；打开模态卡片时冻结固定眼位镜头残余惯性。

## 修改文件

源码：

- `app/src/game.ts`：菜单保密、图片、只读引导、订单进度选择器、莫娜完成后观察。
- `app/src/main.ts`：探索热点、海景机位、返回入口、莫娜驻留连接、品牌文案。
- `app/src/exploration.ts`（新增）：八个观察点及沙滩椅机位锚点。
- `app/src/indoor-look.ts`：复用固定眼位观察与惯性冻结。
- `app/src/mona.ts`：已完成事件的驻留显示。
- `app/src/world.ts`：天鹅绒座椅、咖啡机朝向、招牌。
- `app/src/player-hud.ts`：目标改为只读文本。
- `app/src/player-ui.css`：饮品图片、未知菜品占位、起身入口样式。
- `app/index.html`、根 `index.html`：可见品牌。
- `app/src/assets/ui/strawberry-oat-latte.png`、`grape-sparkling-americano.png`（新增）。

构建：`game/`、`dist/` 由现有生产构建脚本生成；没有修改旧根 `src/`。

验证新增：`verification/skye-update-playtest.cjs`、`verification/skye-exploration-playtest.cjs`。
既有测试适配：`quest-playtest.cjs`（只读目标）、`quest-progression.cjs`（本次授权的家具文件豁免）、`garden-playtest.cjs`（测试生产预览）、`economy-playtest.cjs`（新人物入口）、`mona-playtest.cjs`（完成后驻留）。原有奖励、库存、九章文本与迁移断言保留。

## 兼容与保留

`progression.ts` 未修改；九章原始故事及回应、四款原菜单、六件付费装饰均通过字面一致性测试。价格、人物委托、种植、库存、小费、天气、岛屿、送餐与音乐规则不变。

保留 `glasshouse-stories-v1` 本地存档键、`glasshouse-v1` 导出格式、现有字段和 QA 接口名，避免改名丢档。本次不增加存档字段，莫娜驻留直接读取既有 `monaEvent.completed`。

## 验证

运行命令：

```sh
npm run build
node verification/quest-progression.cjs
node verification/garden-progression.cjs
node verification/economy-progression.cjs
node verification/mona-progression.cjs
node verification/quest-playtest.cjs
node verification/garden-playtest.cjs
node verification/economy-playtest.cjs
node verification/mona-playtest.cjs
node verification/skye-update-playtest.cjs
node verification/skye-exploration-playtest.cjs
```

最终结果和构建文件指纹见 `verification/skye-update/final-report.json`；浏览器日志、手机/桌面实际截图同目录。生产预览为 `http://127.0.0.1:5194/`，仅本机可用。

发现并处理的验证问题：门铃与入口范围重叠、吧台吞掉磨豆机热点、固定眼位控制的模态惯性；种植首次验证因开发热更新中断，改在生产预览重跑。经营和莫娜旧测试分别更新为已采用的头像入口、此次要求的驻留规则。
