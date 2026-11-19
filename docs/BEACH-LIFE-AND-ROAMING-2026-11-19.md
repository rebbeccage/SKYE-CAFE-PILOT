# 海滨生活细节与漫游修复 · 2026-11-19

本轮只改当前 `app/` 入口及环境模块，生产构建更新至 `game/`；没有发布或推送。

## 完成内容

- 玩家持续尝试移动而被阻挡约 0.45 秒后，以现有圆柱碰撞体、坡度和水岸边界试探附近通路。仅在找到安全的 0.85 米绕行方向时显示箭头；可以前进或停止输入时收起。不会传送玩家，也不承诺为远距离目的地自动寻路。
- 主栈道允许玩家中心抵达末端减去身体半径的位置，即身体边缘到达最后一块木板；保留侧边和末端落水保护。三艘游船复用原模型，并增加随船更新的点击区域，提示“出海功能正在建设中”。
- 日光／暮色开关移至天气按钮旁，采用 220ms 的太阳／月亮滑块，继续使用现有日夜状态。删除花园近景与归位的公开入口；保留全岛概览、原环绕、漫游、室内与坐席。R 仅在漫游中恢复自然视线，内部相机初始化与起身恢复仍保留。
- 晴天暮色增加世界空间中的三组低饱和彩色烟花，提示“有惊喜，快抬头看”。雨雪、日光及室内不显示。进入暮色后首次在户外显示提示约 10 秒；减少动态效果模式显示静态绽放。
- 右下角使用独立指南针与水彩运动鞋图标，取消白色框和可见文字；保留可访问名称、提示与键盘焦点。桌面热区 76px，390px 手机热区 64px。
- 沙滩增加三组不均匀的贝壳、卵石、海草、漂木；新增三块桨板、两支木桨、简易木架、篮子、折叠织物、草编拖鞋和饮料瓶。港口新增小型灯桩、旧浮标、缆绳，原救生圈改为低饱和橙红。
- 复用原沙滩躺椅、帽子、边桌、饮品，以及电影院的三只坐垫、毯子、两盏路径灯；没有重复增加座位。小物不设碰撞，只有木架与港口边灯桩使用简化碰撞。
- 新物件复用现有地形采样，桨板木架落脚和横放板的坡面朝向按实际沙面校准；雨天压暗、湿润，雪天简化覆盖并收起部分休息物品。没有增加独立天气或夜间状态。

## 修改文件

- `app/index.html`：移除归位入口，图标结构及操作说明。
- `app/src/main.ts`：接入新模块、游船热点、日夜开关，移除花园近景运行入口，维护室内起身。
- `app/src/first-person-controller.ts`、`first-person-ui.ts`：绕障反馈。
- `app/src/obstacle-guide.ts`（新增）：以现有碰撞规则探测安全绕行方向。
- `app/src/navigation-zones.ts`：栈道末端可站立范围。
- `app/src/island.ts`、`harbor.ts`：暴露原船节点、复用救生圈。
- `app/src/beach-life.ts`（新增）：海滨装饰、共享材质与合批、天气表现。
- `app/src/evening-fireworks.ts`（新增）：晴天暮色烟花与提示。
- `app/src/coastal-ui.css`（新增）：右下角图标、天气旁开关与轻量提示。
- `app/src/island-map.ts`、`scene-hint-model.ts`：地图图标结构及实际可用操作文案。
- `app/src/assets/ui/watercolor-walking-shoe.webp`（新增）：透明运动鞋图标，约 10.6KB。
- `game/`：TypeScript 检查通过后生成的生产产物。
- `verification/beach-life-v2/`：本轮测试脚本、原始日志、JSON 与截图。

没有修改故事原文、任务、配方、库存、种植、金币或存档字段。历史 `garden-close` 访问键仍可读取，未清空旧存档；该近景入口已移除。

## 验证证据

- `npm run build`：成功，包含 `tsc --noEmit`、Vite 及生产目录整理。仍有既有大型 JS chunk 警告。
- `node verification/beach-life-v2/controls.cjs`：绕障安全方向、无出口不误报、栈道尽头及落水边界通过。
- `node verification/beach-life-v2/routes.cjs`：从出生点通往咖啡店、花园、电影院、沙滩、餐车、桨板、港口、三座高脚屋及葡萄／草莓的连续碰撞路径通过。
- `node verification/beach-life-v2/ui.cjs`：1440×900 与 390×844 的按钮位置、透明无字图标、删除入口、日夜切换、雨雪关闭烟花、地图展开关闭、游船点击提示通过；页面及控制台错误为零。
- `node verification/beach-life-v2/roaming.cjs`：通过真实逐帧输入撞墙并获得提示，沿可行路线连续步行到桨板区，验证烟花与雨天；不靠位置传送完成路线。
- 现有 `quest-progression`、`garden-progression`、`economy-progression`、`mona-progression`、`warehouse-rules`、`player-hud-unit`、`labels-hints-unit` 全部通过，涵盖旧存档迁移、原人物剧情与奖励、库存和经济。

浏览器验证为本机 Chrome 自动化和手机尺寸模拟，不代表真机触屏或所有 GPU 性能结论。未运行依赖已明确删除的花园近景／归位按钮的旧流程脚本。

## 性能与资源

新增沙滩模块所有天气层合计 15 个合批 Mesh、11,136 个三角形；烟花一个 Points draw，桌面 288、手机 180 粒子。没有新增实时光源、反射、后处理、纹理质量或渲染分辨率变更。

原始基线单帧：1440×900、DPR 1、晴天同一概览，1,184 draws / 5,104,261 triangles / HUD 29 FPS。首轮完成后全模型加载的采样：1,375 draws / 5,637,599 triangles，120 帧均值约 35.5 FPS、P95 51.5ms。场景仍含动态阴影与不同暖机时刻，因此这两个单帧 draw/triangle 总量不能直接视作新增模块开销；独立模块统计如上。测试没有达到稳定 60 FPS，不能将本轮描述为已完成全场景性能优化。最终复验为均值约 21.9 FPS、P95 59.5ms，说明当前无头环境采样波动明显；原始采样存于 `roaming-results.json`。没有足够同条件多轮基线证据断言整体帧率提升或无回退。

## 美术来源

运动鞋使用本次内置 ImageGen 新生成透明位图，再缩放导出 WebP；没有切概念图或把带字图片作为 UI。设计提示：单只暖米白与鼠尾草绿水彩运动鞋，蜂蜜色鞋底、自然鞋带、轻铅笔线与纸感，透明背景，无文字、标志、底框或其他物件。原始输出：
`/Users/rg/.codex/generated_images/01a1d555-24b5-70e2-b1d3-5e5795bf7b8b/exec-c67f1f9c-2bbb-458c-a03e-8779a83c648f.png`

## 实际截图

- `verification/beach-life-v2/before.png`：修改前默认画面。
- `sun-1440.png`、`sun-390.png`：晴天桌面／手机。
- `dusk-1440.png`、`dusk-390.png`：暮色桌面／手机。
- `rain-1440.png`、`rain-390.png`：雨天桌面／手机。
- `first-person-paddle.png`：连续步行抵达桨板区。
- `first-person-fireworks.png`：漫游抬头看烟花。
- `first-person-rain.png`：雨天近景。
- `obstacle-arrow.png`：实际撞墙后的安全绕行提示。
- `harbor.png`：游船点击提示。
