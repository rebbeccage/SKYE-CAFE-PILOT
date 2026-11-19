# UI 媒体与 GLB 加载优化 · 2026-11-19

本次只调整资源、加载调度、DOM 提前绘制与渲染生命周期。未发布。当前开发入口为 app/src/，生产产物为 game/。

## 结果与范围

- 13 张 UI 优化副本：28.30 MB → 3.01 MB，减少 89.4%。首页继续使用原有 192 px WebP 缩略头像；人物卡使用 768 px 画像，餐品使用 512 px 图片。图集保持原尺寸，避免破坏裁切坐标。
- 6 个 GLB：33.52 MB → 26.64 MB，减少 20.5%。无减面、无纹理降采样；PNG 保留原始通道、透明度、颜色配置和解码像素。
- 同 URL 共享 Promise；最多 2 项下载/等待/解析任务，解析串行，最大解析并发 1。
- 首页 DOM 提前出现，角色卡、菜单、装饰背景与地图按需解码；未打开的完整角色图不发起图片请求。
- preserveDrawingBuffer=false；拍照按钮主动渲染并立即读取画布。Chrome 和 Playwright WebKit 均通过实际 PNG 下载验证。WebKit 是 Safari 同源引擎测试，不等同于所有实体 iPhone/Safari 版本。
- 合并窗口 resize，修复海水颜色/深度附件尺寸不一致；后台停止渲染循环，恢复时重置时间步长。
- 保持原画布像素比、模型细分、纹理分辨率、阴影和天气效果，未启用自适应降分辨率。

## 性能对比

同机 Chrome headless；桌面 1440×900 / DPR 1，手机视口 390×844 / DPR 2 / CPU 4 倍节流。每种视角稳定后采样 6 秒，手机是模拟节流而非实体中端手机。第一人称样本为漫游视角静止观察；实际行走另做功能验证。冷/热缓存为新浏览器上下文和同上下文 reload；本机 Vite 服务没有网络限速。首屏 UI 指头像栏创建、缩略图完成且 DOM 可绘制；可操作指标是场景 ready 且加载层移除。

设备运行负载及刷新节奏波动较大，因此保留两轮完整结果，不只选最好的一轮。首屏 UI 明显提前；整体可操作时间及稳定 FPS 尚不能宣称全面提升或达成所有目标，尤其 CPU 节流下的初始场景构建和雪天仍昂贵。

### 第一轮

| 条件 | UI 冷 / 热（秒） | 可操作冷 / 热（秒） |
|---|---:|---:|
| desktop · 原版 | 2.08 / 2.09 | 3.69 / 3.36 |
| desktop · 优化版 | 0.19 / 0.26 | 3.46 / 3.53 |
| mobile · 原版 | 5.91 / 6.12 | 7.98 / 8.16 |
| mobile · 优化版 | 0.45 / 0.33 | 8.1 / 8.19 |

| 条件 | 概览 FPS / P95 ms | 漫游 FPS / P95 ms | 雨天 FPS / P95 ms | 雪天 FPS / P95 ms |
|---|---:|---:|---:|---:|
| desktop · 原版 | 67.28 / 20.6 | 73.89 / 20.4 | 81.84 / 20.1 | 52.34 / 30 |
| desktop · 优化版 | 60 / 17.3 | 57.18 / 17.7 | 59.33 / 17.6 | 50.71 / 33.4 |
| mobile · 原版 | 41.52 / 31 | 45.42 / 30.8 | 50.26 / 30.1 | 37.05 / 40 |
| mobile · 优化版 | 38.54 / 40.4 | 36.55 / 41 | 36.38 / 40.8 | 29.14 / 50.7 |

冷启动 ≥500 ms 长任务（起点 / 时长，毫秒）：

- desktop 原版：383.5 / 1692；2080.8 / 694
- desktop 优化版：368.8 / 1675
- mobile 原版：459.2 / 5437；5910.7 / 1015
- mobile 优化版：622.8 / 5472；6107.9 / 986

### 第二轮顺序复测

| 条件 | UI 冷 / 热（秒） | 可操作冷 / 热（秒） |
|---|---:|---:|
| desktop · 原版 | 2.58 / 3.99 | 4.21 / 5.5 |
| desktop · 优化版 | 0.2 / 0.52 | 3.55 / 4.96 |
| mobile · 原版 | 6.59 / 6.57 | 8.76 / 8.81 |
| mobile · 优化版 | 0.82 / 0.5 | 10.05 / 8.76 |

| 条件 | 概览 FPS / P95 ms | 漫游 FPS / P95 ms | 雨天 FPS / P95 ms | 雪天 FPS / P95 ms |
|---|---:|---:|---:|---:|
| desktop · 原版 | 32.12 / 50.6 | 31.89 / 50 | 37.44 / 40.1 | 26.91 / 59.8 |
| desktop · 优化版 | 38.62 / 49.9 | 32.08 / 50.3 | 35.63 / 50 | 25.6 / 66.6 |
| mobile · 原版 | 21.82 / 83.2 | 33.4 / 50 | 32.07 / 50.6 | 21.92 / 67.1 |
| mobile · 优化版 | 26.08 / 60.4 | 25.96 / 60.7 | 37.25 / 40 | 27.04 / 50.6 |

冷启动 ≥500 ms 长任务（起点 / 时长，毫秒）：

- desktop 原版：524 / 2048；2577.7 / 706
- desktop 优化版：337 / 1714
- mobile 原版：696 / 5878；6588.9 / 1024
- mobile 优化版：1224.5 / 6428；7687.1 / 1301

## 资产大小（十进制 MB）

| UI 文件 | 原始 | 副本 | 副本尺寸 |
|---|---:|---:|---|
| ahe-watercolor.png | 3.15 | 0.24 | 768×768 |
| lin-watercolor.png | 3.2 | 0.24 | 768×768 |
| tang-watercolor.png | 3.15 | 0.24 | 768×768 |
| mona-model.png | 0.19 | 0.03 | 640×640 |
| strawberry-oat-latte.png | 2.29 | 0.05 | 512×512 |
| grape-sparkling-americano.png | 2.35 | 0.05 | 512×512 |
| bellflower-latte-v1.png | 2.77 | 0.08 | 512×512 |
| panels.jpg | 2.98 | 0.34 | 1248×1888 |
| items.jpg | 0.58 | 0.47 | 1248×1888 |
| people.jpg | 0.54 | 0.41 | 1248×1888 |
| shop.jpg | 2.73 | 0.21 | 1248×1888 |
| decor-cutouts.png | 1.63 | 0.14 | 1536×1024 |
| dialogue-gouache-atlas.png | 2.74 | 0.52 | 1536×1024 |

| GLB | 原始 | 副本 | 处理 |
|---|---:|---:|---|
| ahe | 3.61 | 2.75 | dedup/prune + 无损 PNG 重编码 |
| bush_01 | 7.12 | 6.33 | dedup/prune + 无损 PNG 重编码 |
| ice-cream-truck | 6.2 | 3.91 | dedup/prune + 无损 PNG 重编码 |
| lin | 3.97 | 2.8 | dedup/prune + 无损 PNG 重编码 |
| mona | 5.07 | 4.09 | dedup/prune + 无损 PNG 重编码 |
| tree_ash_medium | 7.55 | 6.76 | dedup/prune + 无损 PNG 重编码 |

原始素材均保留，33 个基线资产 SHA256 未变。bellflower-latte-v1 和 shop 的副本为备用资源；本次不改变现有餐品插画选择。13 张 UI 副本均有原图/副本对照图。六个 GLB 的独立浏览器同机位渲染对比平均通道差为 0，包围盒与动画列表一致。当前交付的六个模型实际均不含动画片段；没有删除阿禾动画。

## 加载、共享与释放

1. 先创建原有 HUD、头像和导航，在一次浏览器绘制机会后构建基础场景。第一帧场景完成后启动模型队列。
2. 阿禾 critical；咖啡馆乔木、灌木、林伯 visible；餐车 idle，并继续沿用 requestIdleCallback；Mona 仅满足原条件时申请资源。
3. fetch 收集字节进度，任务等待统一解析锁；解析间留出绘制机会。错误隔离到单一资产，原有回退模型及交互继续可用。
4. 树木与灌木沿用模块级源模型缓存，实例 clone(true) 共享几何、材质和贴图；静态节点定位后缓存矩阵。角色使用骨架安全的对象克隆，几何与纹理共享，独立淡出/材质调整只由角色模块管理。
5. 引用计数最后归零才释放 geometry/material/texture/ImageBitmap；提前取消、雪天加载、单资源失败均有测试。dispose 不影响尚在使用的实例。
6. PNG 优化不减少 GPU 贴图尺寸，因此主要收益是传输体积；不会虚报 GPU 显存下降。

第一轮同机位 renderer.info：桌面加载完成均为 661 geometries / 76 textures / 48 programs；手机均为 504 / 62 / 71，DPR 分别维持 1 和 2。完整各天气 calls/triangles 在性能 JSON 中；多通道计数及海水隔帧捕获会使单帧 calls 波动，不能视为单一几何数量。

## 修改文件

- app/src/island-map-art.ts
- app/src/main.ts
- app/src/ui-components.ts
- app/src/dialogue.ts
- app/src/game.css
- app/src/scene-assets.ts
- app/src/ambient.ts
- app/src/bush-assets.ts
- app/src/mona.ts
- app/src/game.ts
- app/src/tree-assets.ts
- app/src/island-water.ts
- app/src/dialogue.css
- app/src/ui-media.css
- app/src/ui-media.ts
- app/src/asset-manager.ts
- app/src/assets/ui/bellflower-latte-v1.optimized.webp
- app/src/assets/ui/people.optimized.webp
- app/src/assets/ui/decor-cutouts.optimized.webp
- app/src/assets/ui/panels.optimized.webp
- app/src/assets/ui/strawberry-oat-latte.optimized.webp
- app/src/assets/ui/items.optimized.webp
- app/src/assets/ui/dialogue-gouache-atlas.optimized.webp
- app/src/assets/ui/grape-sparkling-americano.optimized.webp
- app/src/assets/ui/shop.optimized.webp
- app/src/assets/models/lin.optimized.glb
- app/src/assets/models/tree_ash_medium.optimized.glb
- app/src/assets/models/bush_01.optimized.glb
- app/src/assets/models/ice-cream-truck.optimized.glb
- app/src/assets/models/mona.optimized.glb
- app/src/assets/models/ahe.optimized.glb
- app/src/assets/portraits/ahe-watercolor.optimized.webp
- app/src/assets/portraits/lin-watercolor.optimized.webp
- app/src/assets/portraits/mona-model.optimized.webp
- app/src/assets/portraits/tang-watercolor.optimized.webp
- docs/UI-MEDIA-GLB-PERFORMANCE-2026-11-19.md
- game/：生产构建生成的 HTML、JS/CSS 和引用资产。
- verification/media-performance/：本地测量、测试脚本、JSON、日志与截图；不属于游戏运行依赖。

## 验证证据

- npm run build：TypeScript + Vite + staging PASS。保留既有 JS chunk >500 kB 提示，没有新增运行时依赖。
- quest-progression、garden-progression、economy-progression、mona-progression、warehouse-rules：全部 PASS。
- manager-test：优先级、同 URL 一次请求、最多 2 任务、串行解析、进度、引用释放、取消和错误隔离 PASS。
- bush-lifecycle：共享资源、最后消费者释放、延迟雪天加载和加载失败回退 PASS。
- 最终生产包 Chrome / WebKit：真实人物委托订单（+33）、NPC 对话、收获、花园饮品入库一次扣料、库存出售（+43）不推进委托、装饰收放、三种窗口尺寸、晴雨雪暮色、留影、漫游输入及后台恢复全部 PASS。控制台/页面错误列表为空。
- 原经济浏览器回归 PASS：实际订单约 8 秒，正确区分商品收入/装饰小费，保留冬季排除逻辑。
- 原有剧情逐字一致；progression、world、garden、garden-fruit、resident-motion、first-person-controller、player-collision、navigation-zones、island-geography、weather、snow、music、warehouse 均与基线逐字节一致。
- 图片对比发现的菜单高度问题已修复，最终测试检查餐品图宽高一致。

本地证据目录：verification/media-performance/。before/after 与 before-repeat/after-repeat JSON 保留完整资源请求、解析与长任务；ui-comparison-1…4.png、models-original/optimized.png、chrome/webkit 的 card/menu/dialogue/warehouse/sun/rain/snow/dusk/roaming/photo.png 为实际对比与回归截图。测试截图和机器专用工具不默认放入 GitHub 增量上传包。

## 仍需后续处理

- 程序化基础场景同步构建仍是大头：手机 CPU 节流下可产生约 5–7 秒长任务；本轮未重写地形/建筑生成流程。
- 稳态 FPS 未达到全部目标：第二轮原版与优化版均有明显设备负载波动，不能给出稳定 60 FPS 或所有手机 35–45 FPS 的保证。
- 树木 6.76 MB、灌木 6.33 MB 仍较大。跨 GLB 共用纹理、KTX2 或更深的启动拆分需要独立的兼容与画质验收，本轮未启用。
- 原有雪景多通道渲染和较大的主 JS 包仍有成本。没有以降 DPR、减面、关闭天气/阴影或降低近景清晰度掩盖这些限制。
- 本轮进行了 Chrome/WebKit 浏览器验证和 4 倍 CPU 节流模拟；未做实体 Android/iPhone 硬件测试或 10 分钟持续行走 FPS 认证。
