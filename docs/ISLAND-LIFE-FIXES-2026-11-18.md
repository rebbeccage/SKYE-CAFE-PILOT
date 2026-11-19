# 岛上生活交互修复 · 2026-11-18

## 交付内容

- 地图入口使用独立透明底水彩黄铜指南针，192×192 WebP，约 13.3 KiB；与随心逛逛的地图插画区分。
- 漫游移至桌面及手机右下安全区；手机隐藏副标题，按钮保持 102×58 px，桌面为 180×70 px。
- 放映机获得独立点击热点：晴天点击放下幕布并播放，再点收回。雨雪自动收纳设备和幕布。原晴天暮色自动展开及坐席观影继续可用。手动开关为瞬时场景状态，不写存档。
- 点击客人模型或头顶名字显示“他不想被打扰哦”，不会进入人物任务。
- 对话翻页按钮根据当前段落显示倾听回应，移除跳过和自动。原故事正文、最后的原始回应、章节门槛与 12 金币领取点保留。
- 园艺手推车移至花园外侧 (-10.6, -2.6)，避开原棕榈及路径；高度沿用现有地形采样。
- 高脚屋附近新增三株棕榈，全岛共五株。每株四枚树上椰子，新增三株旁共九枚落地椰子。复用风摆、共享材质、合批和雪帽，不新增灯光。
- 棠姨从原站位接入现有中央草径，往返约 4.7 米，停留照料，四肢轻摆，避开陶盆。雨天放缓，雪天原地停留；打开面板暂停移动。
- 晴天林伯从游船登岸口出发，经现有栈道、入口沙路到户外座位旁；船停泊后开始，每次场景加载一次。原 GLB 无可用步行动画，采用连续位置/朝向变化和轻微身体摆动，没有伪造骨骼步行动画。雨雪沿用相应座位站位。
- 按栈道实际交汇区切除横挡的视觉栏杆，保留外侧防落水边界及第三屋绕行连接。

## 实际源码修改

- `app/src/island-map.ts`、`island-map.css`、`assets/ui/watercolor-compass.webp`
- `app/src/first-person-ui.css`
- `app/src/cinema.ts`
- `app/src/dialogue.ts`、新增 `dialogue-response.ts`
- `app/src/world.ts`、`npc-nameplates.ts`
- `app/src/island-props.ts`、`stilt-houses.ts`
- 新增 `app/src/resident-motion.ts`、`resident-route-data.ts`
- `app/src/scene-assets.ts`、`scene-hint-model.ts`、`main.ts`
- `game/` 为重新构建的生产产物。未发布或推送。

## 验证证据

目录 `verification/island-life/`：

- `npm run build`：TypeScript 检查、Vite 构建与产物同步通过。仍有既有大 JS chunk 的构建提示。
- `node verification/island-life/residents.cjs`：模拟 300 秒，林伯到达座位，棠姨完成长距离往返；面板打开时停止。
- `node verification/island-life/walkable.cjs`：使用真实地形与碰撞采样，入口、种植区、电影院、港口及三座高脚屋均连续可达。
- `node verification/island-life/geometry.cjs`：23 段栏杆未横挡交汇通路；五株棕榈及九枚地面椰子数量正确。
- `browser.cjs`：1440×900、390×844；地图图标解码、右下漫游位置、客人提示、点击投影、雨雪收幕、原故事最终回应只发 12 金币；页面/控制台无错误。
- `motion-browser.cjs`：正式林伯 GLB 实际移动、棠姨实际移动与名字跟随、手机两页对话、语境回应及面板暂停；页面无错误。
- 现有 `quest-progression`（17）、`garden-progression`（10）、`economy-progression`（9）、`mona-progression`（7）检查通过；`warehouse-rules`、`player-hud-unit`、`labels-hints-unit` 套件通过。
- 未继续运行依赖旧“跳过/自动”按钮的历史 UI 用例；本次新用例通过逐页回应检查真实最终奖励，不恢复已删除控件。
- 手机验证为浏览器 390 px 视口，不等同于实体手机性能测量。

截图：`home-1440.png`、`home-390.png`、`dialogue-desktop.png`、`dialogue-mobile.png`、`garden-route.png`、`garden-tending.png`、`palms-stilt-overview.png`、`island-projecting.png`、`island-rain.png`、`island-snow.png`。

## 图标来源

由内置 ImageGen 生成独立水彩指南针：做旧黄铜表圈、象牙白表盘、鼠尾草绿与陶土红指针、浅皮革挂环、透明背景、无文字无地图。生成后仅缩小转为 WebP。生成源为 `exec-c86f45b0-fc3f-427a-a7ca-60b453a333fa.png`，没有将概念图切片作按钮。

## 保护范围

未修改 progression.ts、任务/经济/种植规则、存档字段、原对白内容、天气状态机、海岛轮廓、相机控制方式或画质参数。人物路线是环境动画，重载重置，不新增持久状态。
