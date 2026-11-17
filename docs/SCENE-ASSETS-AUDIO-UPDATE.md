# 全屏、角色资产、天气音频与装饰更新

日期：2026-11-17。仅本地实现与构建，未发布、未推送。

## 本次行为

- 庭院和店内的 `#app` 使用整个浏览器可视区（100% × 100dvh），取消桌面方形/16:9 外框；保留响应式相机与像素比。
- 室内定点观察采用与庭院一致的拖拽方向；镜头位置、缩放和坐下接口不变。
- 林伯使用用户提供的 `elderly man 3d model.glb`；原角色索引、点击入口、三章对话、委托和存档不变。该资产无骨骼/动画，是站姿，因此放在原座位旁，雪天仍进室内。保留其帽子、围巾与服装，不强行弯折模型坐下。
- `ice cream truck 3d model.glb` 独立加载到沙滩栈道侧面 `(3.6, terrainHeight + .008, 17.4)`，按地形斜率贴地，不占登滩道。
- 晴天庭院：海浪与海鸥；雨天店内：轻爵士。其余组合沿用：雨天庭院雨声、雪天庭院风声、晴/雪店内原钢琴。共用原有音量、暂停、用户手势解锁和后台暂停逻辑。
- 两条新音频为本地合成的原创循环，不使用第三方录音。生成脚本写 WAV，使用系统 `afconvert -f m4af -d 'aac ' -b 128000` 转 AAC。
- 免费冬季陈设默认在雪天显示，不读取旧的用户收起/移动偏好，不再提供装饰菜单项。普通六件商品名称、价格和购买/摆放逻辑保持不变；场景显隐取 `owned ∩ placed`。

## 有效源码与资源

- 修改 `app/src/main.ts`、`indoor-look.ts`、`courtyard.css`、`music.ts`、`game.ts`、`winter-dressing.ts`。
- 新增 `app/src/scene-assets.ts`、`app/src/assets/models/lin.glb`、`ice-cream-truck.glb`。
- 新增 `app/public/music/rain-jazz.m4a`、`sun-coast.m4a` 和 `scripts/create-weather-music.py`。
- 生产构建为 `game/`，现有脚本同步 `dist/`。根目录旧 `src/` 未修改。

## 验证入口

```sh
npm run build
node verification/quest-progression.cjs
node verification/garden-progression.cjs
node verification/economy-progression.cjs
node verification/mona-progression.cjs
node verification/scene-update-playtest.cjs
BASE_URL=http://127.0.0.1:5194 node verification/stage3-regression.cjs
BASE_URL=http://127.0.0.1:5194 node verification/economy-playtest.cjs
```

`scene-update-playtest.cjs` 使用隔离浏览器和隔离存档：真实加载两个 GLB，检查同向拖动、全视窗、六种音频互斥、静音、林伯点击、冬季默认陈设、六件付费装饰购买/收起/刷新。

原冻结文件断言仅豁免本轮明确授权的音频、室内拖动、布局及冬季陈设四个文件；九章对白、原四商品、六装饰文本及另外 37 个冻结文件继续逐字/哈希校验。冬季测试改为断言没有免费陈设操作按钮且九组陈设自动显示。移动测试增加桌面全视窗断言。

首次整套回归因总时限超时，保留失败报告；重跑串行，整套预算由 300 秒增加为 600 秒，订单/对话断言不放宽。最终结果见 `verification/scene-update/validation-summary.json`。

## 明确保留

三位原人物全部剧情与委托、莫娜独立彩蛋、订单八秒制作与送餐、菜单价格、经营小费、花园状态机与配方、存档格式及导入导出、天气及海岛渲染、相机位置、留影等均未重写。

补充：导航等待使用 `domcontentloaded`，随后由游戏 `ready` 与实际业务断言确认可交互，不以音频 `preload` 的全页 `load` 事件作为唯一门槛。移动端整套运行曾发生按钮等待超时，单独原断言复测通过；失败记录保留在原回归结果中，最终汇总单列成功的重跑证据。

莫娜回归的尺寸断言计入已有 `visual.scale.y = 1 + sin(t * 1.5) * .0015` 呼吸动画：1.35m 高度的最大浮动约 2.03mm，因此世界包围盒容差设为 3mm。莫娜应用源码、模型和奖励逻辑未改动。经济浏览器回归在单独重跑中通过，包含 32+1、24+0、24+1 三次真实订单结算。
