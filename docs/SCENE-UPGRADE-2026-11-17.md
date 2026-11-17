# 天空岛 · 晚霞、阿禾、花园观察与港口

日期：2026-11-17。仅本地修改与构建，未发布。

## 审计与实施边界

- 天空实际由 `indoor-seascape.ts` 维护，室内外共享雨、雪、暮色 uniform。旧 `evening.ts` 未启用，没有另建天空系统。
- 原海水已有浅滩折射、PC 屏幕空间反射与手机平面探针；本次不新增反射通道、后处理或实时光源。
- 角色使用现有 GLTFLoader。阿禾原为程序模型；林伯、莫娜与冰激凌车已使用 GLB。
- 花园附近实际人物是棠姨与莫娜。棠姨位置 `(-6.8, .26, 2.65)`，莫娜沿 `(-5.8, .26, 3.85 → 3.05)` 散步。没有移动主要角色或提前解锁莫娜。
- 原 33 块登滩道上一轮已修复地形贴合，本次保留。已有一条完整到港／离港游船与上下客动画，新增两条装饰船。

## 四个阶段

### 1. 晚霞

扩展共享天空的暖杏—珊瑚粉—灰紫蓝渐变，采用固定球面方向的连续云层采样；新增霞云不使用角度接缝坐标，也不随相机位移。完整晚霞仅在晴天暮色生效。海面使用原波纹、反射与世界坐标，增加宽柔暖色反光。晴天暮色下保留更多环境亮度、降低灯光过曝；雨雪维持原光照分支。

**实际机位限制：** 原默认正交 25° 俯视和花园俯视近景的视线落在岛与海面，不包含真实海平线。因此默认图展示暮色染光及海面反色；拖动到低角度或使用原沙滩赏海机位可看见大面积霞云。没有为了把天空塞进默认画面而改变默认机位、缩小岛或加入镜头贴片。交付截图将二者分开标明。

### 2. 阿禾正式资产

原文件：`/Users/rg/Downloads/tripo_convert_12eb61f1-30b3-4c11-beb1-540ccba665d1.glb`。

项目资产：`app/src/assets/models/ahe.glb`，约 3.6 MB，9,963 顶点、10,968 三角形，1 个网格，纹理内嵌，0 骨骼、0 动画。

以包围盒归一化到 1.8 m，脚底世界高度 .85 m；保持原角色根节点、人物索引与点击锚点，模型在窄服务通道内做局部深度适配。保留资产正面 +Z 朝向与原吧台旋转。降低金属感、提高粗糙度，颜色纹理使用 sRGB。

成功加载后只显示新模型，停止旧头部／手臂／持壶驱动及其悬空水流。8 秒订单、机器出液／蒸汽、送餐和奖励保留。因资产没有动画，采用稳定静态姿态，不捏造工作骨骼动作。加载失败保持原人物可见和可交互。

**可选后续素材：** 若需要阿禾真实拉花、持壶或待机动作，请补充同角色带骨骼和动画片段的 GLB；当前功能不依赖它。

### 3. 花园近景

入口：右下“景致”→“花园”；返回：画面“返回原视角”、归位或 Escape。复用原正交相机，实际移动眼位与枢轴并改变投影范围；没有裁切截图或放大画布。

进入／返回约 650 ms 平滑插值，尊重减少动态设置。返回恢复进入前位置、目标与 zoom。限制近景方位、俯视角和 zoom，禁用自动环绕；对话与展示卡仍锁定相机。手机单独限制缩放范围。莫娜名牌近景时放在脚边，避免遮住棠姨面部；其他视角保持原入口。

没有修改种植面板与花园经营权限。莫娜未触发／未解锁时，观察机位只显示当前真正存在的人物。

### 4. 港口

保留原主游船；新增两条小型白色停泊船，分别搭配灰绿与旧玫瑰色波纹点缀、浅灰木舷缘、米白坐垫、防撞垫、救生圈、小挡风罩、系泊绳与桩。

两船复用一个几何模板，主要材质共享，只有图案色不同。系泊端点按实际船体变换更新；绳索是 13 点下垂曲线，没有物理系统或独立计时器。两点采样现有海面，轻微摇摆相位错开；雪天显示简化舷缘／坐垫雪层，雨天木材更湿暗。

初选泊位在低潮时触底，已放弃，最终位于原航线侧方较深水域：`(-14.5, 30.0)` 与 `(-19.4, 27.8)`（x,z）。原登岸路径保持畅通。

## 修改文件

- `app/src/indoor-seascape.ts`：共享霞云与天气门控。
- `app/src/island-water.ts`：暮色海面反色。
- `app/src/scene-assets.ts`、新增 `app/src/assets/models/ahe.glb`：角色加载／材质／回退。
- `app/src/world.ts`、`app/src/character-details.ts`：仅屏蔽成功替换后的旧阿禾节点动画。
- 新增 `app/src/garden-view.ts`：观察机位、限制、恢复。
- `app/src/main.ts`：接线、入口、相机协调、只读轻量性能计数。
- `app/src/mona.ts`：仅近景名牌位置，事件逻辑未改。
- `app/src/player-ui.css`：观察返回按钮与近景名牌样式。
- 新增 `app/src/harbor.ts`、`app/src/island.ts`：两条停泊船与现有更新时间／天气接线。
- `game/`、`dist/`：生产构建产物。

`game.ts`、`progression.ts`、原对话文本、菜单／任务／收益／种植／存档、岛体地形、原船行为模块均未修改。

## 验证命令

```sh
npm run build
node verification/scene-upgrade-stage1.cjs
node verification/scene-upgrade-stage2.cjs
node verification/scene-upgrade-stage3.cjs
node verification/scene-upgrade-stage4.cjs
node verification/scene-upgrade-final.cjs
node verification/harbor-geometry.cjs
node verification/island-geometry.cjs
node verification/quest-progression.cjs
node verification/garden-progression.cjs
node verification/economy-progression.cjs
node verification/mona-progression.cjs
BASE_URL=http://127.0.0.1:5194 node verification/quest-playtest.cjs
node verification/scene-upgrade-performance.cjs
```

浏览器测试使用独立上下文和测试存档，不覆盖玩家浏览器进度。手机是 390×844 触屏模拟，不能代替实体手机 GPU 基准。旧文件锁定断言仅为本次授权的天空／角色渲染文件添加范围例外；原九章故事、回应、四款菜单、六件装饰的逐字断言仍执行，并以本轮开始时的哈希另行锁定未授权文件。

## 最终验收

构建／TypeScript、九章逐字故事与六项委托浏览器回归、256 种旧存档迁移、种植库存、4096 种装饰组合、莫娜条件、三船低潮几何与移动端观察机位均通过。正常加载无新增浏览器错误；主动阻断阿禾 GLB 后原人物与剧情入口可用。花园返回采用真实经过时间，低帧率下不再拖长切换；手机近景眼位沿原观察方向后退，消除前景近裁剪边界而保持构图。

性能为同一 Chrome 新旧版本 AB/BA 两轮、每状态 120 帧的轻量 renderer 计数；不逐帧遍历场景。表中为含既有反射和阴影的整帧数据，时长单位 ms。最终仅增加第二船图案色差和花园过渡／距离修正，不改变默认视角基准中的拓扑与通道。

| 设备／天气 | Draws 前→后 | 三角形变化 | 帧中位前→后 | P95 前→后 |
|---|---|---|---|---|
| 桌面 / sun | 1900 → 1621 | -1.36% | 18.35 → 18.35 | 23.40 → 23.60 |
| 桌面 / rain | 1254 → 1107 | -1.20% | 13.60 → 13.40 | 18.55 → 18.70 |
| 桌面 / snow | 2579 → 2287 | -1.08% | 31.60 → 31.65 | 36.95 → 37.10 |
| 手机模拟 / sun | 1581 → 1306 | -1.47% | 13.35 → 10.00 | 13.45 → 10.80 |
| 手机模拟 / rain | 986 → 843 | -1.33% | 13.35 → 10.00 | 14.10 → 10.60 |
| 手机模拟 / snow | 2045 → 1766 | -1.17% | 13.40 → 10.05 | 23.15 → 20.60 |

## 实际游戏截图

- [默认庭院：晴天暮色染光](../verification/scene-upgrade/final-desktop-default-dusk.png)
- [晴天暮色晚霞与港口近景：原赏海座位](../verification/scene-upgrade/final-desktop-sea-sky-dusk.png)
- [阿禾 GLB 实际吧台近景](../verification/scene-upgrade/final-desktop-ahe-close.png)
- [花园双人物：桌面](../verification/scene-upgrade/final-desktop-garden-dusk.png)
- [花园双人物：手机](../verification/scene-upgrade/final-phone-garden-dusk.png)
- [花园雨天](../verification/scene-upgrade/final-desktop-garden-rain.png)
- [花园雪天](../verification/scene-upgrade/final-phone-garden-snow.png)
- [港口三船全景](../verification/scene-upgrade/final-desktop-harbor-dusk.png)

详细机器可读证据：[report.json](../verification/scene-upgrade/report.json)。
