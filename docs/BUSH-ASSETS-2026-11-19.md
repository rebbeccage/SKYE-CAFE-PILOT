# 普通灌木 GLB 接入 · 2026-11-19

## 改动范围

- 新增 `app/src/bush-assets.ts`：单次异步加载、七个共享资源实例、自动落地、季节同步、资源释放及诊断。
- 修改 `app/src/world.ts`：仅移除指定七株旧 shrub 生成循环，原位置消耗 210 次随机数，合批完成后接入新资产并返回 bushAssets。
- 修改 `app/src/main.ts`：沿现有天气按钮事件同步叶片显隐；QA 快照与开发热更新销毁接入。
- 使用已提供的 `app/src/assets/models/bush_01.glb`，没有重导出或修改资产。
- 生产目录 `game/` 已通过标准构建更新，包括带 hash 的 GLB、JS 和 index.html。
- 添加 `verification/bush-assets/` 下测试、日志及截图。本文件为交付记录。

## 最终摆放

位置 x/z 保持原锚点；y 是根据旋转及等比缩放后的 Box3 最低点计算的外层组高度，不是硬编码 Blender 原点补偿。七株最低点全部为 0.260000。

| 实例 | x, z | 外层组 y | 等比缩放 | 固定旋转 |
|---|---|---|---|---|
| cafe-west-a | -3.7, 0.8 | 0.413859 | 1.15 | 12° |
| cafe-west-b | -4.4, 0 | 0.393791 | 1 | 78° |
| garden-edge | -3.1, 1.6 | 0.380411 | 0.9 | 146° |
| beach-east-a | 3.3, -3.5 | 0.387101 | 0.95 | 215° |
| beach-east-b | 4.8, -3.5 | 0.373722 | 0.85 | 278° |
| beach-west | -4.4, -3.65 | 0.400480 | 1.05 | 330° |
| garden-small | -3.8, 3.6 | 0.356329 | 0.72 | 42° |

## 资产与资源

- SHA-256：`66c17db840c7467af190dfc8e986b8217598cb7fcac25061f014376ba9d1bf0b`。生产 GLB 与源 GLB 逐字节一致。
- 单份模型 13,872 三角面；7 个实例共享 2 份 BufferGeometry、2 个 Material。
- 页面首次加载仅请求 1 次 GLB。重新加载页面重新请求一次属于独立页面生命周期。
- GLTFLoader 输出 6 个 Texture 对象，背后共享 4 张嵌入图片。差异来自原始材质纹理用途、通道与纹理变换，不是实例复制；七株不新增贴图副本。
- `clone(true)` 共享资源。最后一个管理器销毁时统一释放，加载期间销毁不会留下对象；中途失败记录错误而不阻止游戏启动。
- 叶片保留原 PBR、UV、贴图、DoubleSide、MASK/alphaTest=0.5，transparent=false；只接收阴影。
- 枝干 metalness=0、roughness=0.85，投射和接收阴影。未覆盖贴图或原始纹理变换。
- 叶片加入已有 seasonalFoliage；雪天只隐藏叶片，保留原 GLB 枝条。事件发生在加载完成前也会立即同步，无绿色闪现。
- 无新增碰撞，无逐帧节点查询或资源创建；未改变分辨率、阴影设置、地形、乔木、棕榈、盐生灌木、任务及漫游系统。

## 确定性检查

`source-check.cjs` 执行原 shrub 函数及真实随机数公式，确认七株共消耗 210 次，补偿后 seed 完全相同。world.ts 撤销本次几处接入后与修改前全文逐字一致；原树木 256 次补偿保留。tree-assets.ts、island-props.ts、navigation-zones.ts、winter-dressing.ts 哈希未改变。

## 验证命令与证据

- `node verification/bush-assets/source-check.cjs`：PASS。
- `npm run build`：TypeScript 无输出检查 + Vite 生产构建 + stage-courtyard 全部通过。保留已有的大 JS chunk 提示。
- `BASE_URL=http://127.0.0.1:5194 node verification/bush-assets/playtest.cjs`：七实例、单次请求、共享资源、材质、落地、稳定刷新、晴/暮/雨/雪、漫游、390×844 手机独立页面。
- `node verification/bush-assets/lifecycle.cjs`：共享所有权、最后使用者资源释放、加载中销毁、雪天延迟加载、故意加载失败回退全部 PASS。
- `node verification/{quest-progression,garden-progression,economy-progression,mona-progression,warehouse-rules}.cjs`：五个现有回归脚本分别运行，均 exit 0；原剧情、种植、经济、彩蛋和库存规则通过。
- 完整 diagnostics 与包围盒：`verification/bush-assets/production-results.json`。
- 生命周期证据：`verification/bush-assets/lifecycle-results.json`。

## 已知范围外问题

在已运行的桌面 WebGL 页面直接缩成手机尺寸时，出现 FRAMEBUFFER 附件尺寸不一致错误。`resize-baseline.cjs` 在浏览器中恢复七株原程序灌木并禁用新 GLB 后重复实验：缩放前 0 条，缩放后 256 条，证明不是新资产引入。独立桌面和手机页面正常。本轮遵循保护范围，未修改渲染或窗口缩放架构；不能将“任意窗口缩放无 WebGL 错误”标为通过。

## 实际截图

- 晴天：`verification/bush-assets/production-sun.png`
- 雪天：`verification/bush-assets/production-snow.png`
- 第一人称近景：`verification/bush-assets/production-first-person.png`
- 暮色、雨天、手机：同目录 `production-dusk.png`、`production-rain.png`、`production-mobile.png`。

没有发布、推送或调整其他系统。
