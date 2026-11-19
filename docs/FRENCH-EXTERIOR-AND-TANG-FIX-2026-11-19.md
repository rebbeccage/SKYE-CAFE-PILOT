# 棠姨动作修复与法式温室外观精修

## 严重问题与根因

原 `transform-cache.ts` 只在局部位置／旋转／缩放变化时将矩阵标记为 dirty。Three.js 当前版本中的 `getWorldPosition`、`localToWorld` 等部分层级查询会更新祖先并清除祖先的 dirty 标记，却不一定遍历全部子孙。人物移动后，热点或名牌先读到根节点位置，未主动摆动的躯干没有收到新的世界矩阵；主动旋转的双腿仍更新，造成上下身脱节。

修复保留局部矩阵合成缓存，在父节点 dirty 被消费前将更新责任交给其直接子节点，并识别父节点变化。这样头部的局部查询不会遗漏躯干或其他兄弟节点，也不用冻结角色、移除行走路线或每帧重建模型。

- 单元测试：240 帧根节点移动／转向，同时查询头部、摆腿，逐个比对躯干、头部、腿部世界矩阵；另测重新挂接父节点，均通过。
- 实际游戏测试：连续采集 24 次棠姨状态，其中 23 次处于行走，整个角色所有后代的矩阵最大误差为 0；实际位置持续变化。
- `resident-motion.ts` 仅增加 QA 矩阵一致性诊断，不修改路径、速度、对话暂停条件或天气停留规则。

## 增量美术

新增独立 `french-exterior.ts` 模块，不替换原玻璃屋模型：

- 4.2m 宽、1.22m 出挑的暖奶油／鼠尾草绿窄条纹雨棚，独立帆布、轻微下垂、波浪垂边、卷轴与折叠黄铜支臂。
- 初始化直接读取当前天气；晴天／暮色和雨天展开，雪天收起。天气按钮事件调用 `setWeather`，1.5 秒平缓过渡；中途反向也从当前展开程度继续。
- 雨天帆布轻微变深，24 条短雨滴沿外沿下落；不叠加新的玻璃平面。保留原雨玻璃／海景和光照实现。
- 细奶油窗压条、少量黄铜连接件、入口旁的小椭圆咖啡杯纹章、浅石材脚线。
- 细窄深灰绿屋脊饰及小黄铜风向标；两只侧框小花箱，白／灰粉／淡紫花朵与局部短藤。花叶轻微统一风向摆动，雨雪减弱。
- 屋脊与侧檐薄雪；没有屋顶花毯、大型旗帜、实时灯光或额外反射。
- 入口上方店牌保持原位置。检查第一人称后降低雨棚前沿，确保从入口前方仍能读到 `SKYE ISLAND`，没有移动店牌。

## 保护范围

原主体、室内家具、出入口、角色站位及路线、咖啡机交互、原有碰撞和导航规则、漫游控制、天气状态、任务、存档、种植与经济均保留。

只新增一个头顶雨棚碰撞盒，最低高度 2.59m，室内地面 0.85m 上的 1.7m 玩家体高仍可通过。碰撞测试及实际从庭院步行靠近门口再进出室内均通过。小型装饰没有碰撞体。

## 文件

- 修改 `app/src/transform-cache.ts`：修复世界矩阵脏标记传递。
- 修改 `app/src/resident-motion.ts`：加入只读 rigError 诊断。
- 新增 `app/src/french-exterior.ts`：外观、雨棚与天气动画。
- 修改 `app/src/main.ts`：创建模块、接入原天气按钮／更新时间、加入头顶碰撞盒和 QA 数据。
- 更新 `game/`：正常生产构建产物。
- 新增 `verification/french-exterior/`：回归脚本、日志、结果与截图。

没有新增贴图、GLB、存档字段、业务状态机或生产 UI 入口。没有发布或推送。

## 验证

命令均从项目根目录运行：

```sh
npm run build
node verification/french-exterior/transforms.cjs
node verification/french-exterior/awning.cjs
node verification/french-exterior/browser.cjs
node verification/french-exterior/oblique.cjs
node verification/quest-progression.cjs
node verification/garden-progression.cjs
node verification/economy-progression.cjs
node verification/mona-progression.cjs
node verification/warehouse-rules.cjs
node verification/player-hud-unit.cjs
node verification/labels-hints-unit.cjs
```

TypeScript 与生产构建通过；保留原有大 chunk 提示。矩阵测试、雨棚初始化／过渡／反向／雨天及入口净空、实际棠姨移动、晴雨雪暮色、室内进出、手机尺寸及上述核心回归通过。实际浏览器测试没有新增页面或控制台错误。

新增模块总计 22 个 Mesh、18,646 个三角形（包含不同时可见的雪层），另有一个低透明雨滴 LineSegments。静态主体按材质合批，无新增实时光源、反射或后处理；保持原分辨率与画质设置。本轮是功能和视觉验证，没有作出真机稳定帧率保证。

## 截图

`verification/french-exterior/` 下：

- `sun-oblique.png`、`rain-oblique.png`、`snow-oblique.png`、`dusk-oblique.png`：使用既有环绕和滚轮缩放取得的四态建筑近景。
- `sun-close.png`、`rain-close.png`、`snow-close.png`、`dusk-close.png`：通过实际漫游抵达入口前方的第一人称视角。
- `inside.png`：步行靠近入口后进入室内。
- `mobile-oblique.png`、`mobile-dusk.png`：390×844 手机尺寸验证。

手机结果为桌面 Chrome 视口模拟，不等同于实体手机 GPU 或触屏实测。
