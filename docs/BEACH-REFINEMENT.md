# 安静海边 · 沙滩环境精修

2026-11-17，基于「天空岛」当前构建。仅局部环境精修，不改变岛体、海水、相机或经营系统。

## 修改前审计

直接复用：两把米白遮阳伞、一把浅木躺椅、一条赭红条纹巾、手推车与陶盆、系泊桩、藤编行李箱、倒置木凳、贝壳与椰壳、漂木、耐盐植物、低矮礁石、五只已有海鸟模型、33 块木板登滩道及既有雪层/雨水材质。

缺失：高层棕榈、清晰成组的中层植物、第二把躺椅、小藤桌及书帽杯、分支足迹、独立近景园艺小物、统一世界风向下的轻微风摆。

确认问题：原登滩道岸端 `entryRise` 额外抬高 0.22m，加上板面原有 0.08m，使板底在岸端距地约 0.248m；入口阈石与木板存在距离。部分桩体湿痕用局部离地高度。道具原先以解析地形函数定位，与实际渲染的三角插值表面存在小差异。

## 实际修改与复用

| 内容 | 处理 |
| --- | --- |
| 登滩道 | 保留 33 板、位置、宽度、船端登岸点；按原地形三角面逐点贴合，岸端嵌沙 12mm，原两块阈石降低嵌入沙面；末端增加必要支撑，保留两块水下木板 |
| 干湿木材 | 复用木纹、旧钉、绳索；木板/木桩潮痕共用现有海平面及 TideLevel，颜色与粗糙度统一随世界高度变化 |
| 高层植物 | 新增 2 株不同高度和倾斜的棕榈，位于岛侧缘；弯曲树干、下垂叶簇，三维折面而非透明叶卡 |
| 中低层 | 新增 4 组耐盐灌丛、6 小簇沙丘草，保留原有低矮植物；群落之间保留裸沙 |
| 休憩角 | 保留原两伞、第一把躺椅与巾的位置；补 1 把躺椅、1 张小藤桌、1 本合起的书、1 顶草帽和 1 个杯子 |
| 足迹 | 21 个桌面端 / 14 个移动端轻量脚印；入口与休憩角两条连续路径；贴合实际地形的有色薄面，无透明排序依赖 |
| 园艺线索 | 台座前方添加一只陶盆与少量幼苗、一把小铲、一两枚贝壳；远离登滩道及人物路径 |
| 潮线小物 | 仅一组漂木、贝壳与磨砂海玻璃，不均匀铺满海岸 |
| 动画 | 棕榈、灌草共用现有更新时间与固定世界 X 风向；巾的下垂边角小幅摆动，雨雪减弱；手机关闭此风形变并减少叶簇 |
| 海鸟 | 复用原模型，桌面 3 / 手机 2；晴天缓慢滑翔，雨天仅 1，雪天隐藏，店内隐藏 |
| 天气 | 全部通过原 sun/rain/snow 接口；雨天木材织物压暗，雪天复用雪层和浅色压实足迹；无新增天气状态机 |

## 文件范围

- 修改 `app/src/island-props.ts`：现有沙滩模块内完成道具整理、植被、足迹、风与潮痕。
- 修改 `app/src/island.ts`：透传现有移动端与潮位参数；复用海鸟并调整数量、慢滑翔及天气可见性。
- 新增 `app/src/beach-ground.ts`：对原 `180m / 160` 网格三角面采样，不新建或修改地形。
- 构建产物按原流程更新 `game/` 与 `dist/`。

`main.ts`、`world.ts`、相机控制、UI、对话、任务、种植、存档、Mona、岛体地形、海水、全局光照源码均与本轮开始时哈希一致。新增内容没有点击热点、文字告示、计时器、光源、后处理或反射通道。原沙滩椅坐下互动保留。

## 验证方法与证据

- `npm run build`：TypeScript 检查、Vite 构建与产物同步。
- `node verification/beach-geometry.cjs`：实际地形射线与采样器对比、摆件数量、植物根部、躺椅接触、足迹避开台座、天气参数、原船端高度。
- `node verification/island-geometry.cjs`：原船体/浅滩、登船板和游客鞋底路径回归。
- `node verification/beach-refinement-playtest.cjs before|after`：1440×900 桌面、390×844 触屏模拟；默认、全岛、旋转和晴雨雪；UI、场景切换、原 NPC 与沙滩椅点击。
- `node verification/beach-performance.cjs`：同一 Chrome 进程，独立页面交替加载修改前后构建，AB/BA 两轮；每个天气预热 3.5 秒后取 120 帧，记录绘制调用/三角形平均值与 RAF 中位/P95。

完整数值、保护范围哈希与检查结果：`verification/beach-refinement/final-report.json`。
性能采样不是物理手机硬件测试；首次截图记录的单帧 draw/triangle 会受现有反射等多通道刷新影响，因此以重复交替采样报告为主。

## 同视角截图

| 视角 | 修改前 | 修改后 |
| --- | --- | --- |
| 默认晴天 | [前](../verification/beach-refinement/before/desktop-default-sun.png) | [后](../verification/beach-refinement/after/desktop-default-sun.png) |
| 全岛 | [前](../verification/beach-refinement/before/desktop-island-sun.png) | [后](../verification/beach-refinement/after/desktop-island-sun.png) |
| 旋转后 | [前](../verification/beach-refinement/before/desktop-rotated-sun.png) | [后](../verification/beach-refinement/after/desktop-rotated-sun.png) |
| 雨天 | [前](../verification/beach-refinement/before/desktop-default-rain.png) | [后](../verification/beach-refinement/after/desktop-default-rain.png) |
| 雪天 | [前](../verification/beach-refinement/before/desktop-default-snow.png) | [后](../verification/beach-refinement/after/desktop-default-snow.png) |
| 手机晴天 | [前](../verification/beach-refinement/before/phone-default-sun.png) | [后](../verification/beach-refinement/after/phone-default-sun.png) |
| 手机旋转 | [前](../verification/beach-refinement/before/phone-rotated-sun.png) | [后](../verification/beach-refinement/after/phone-rotated-sun.png) |
| 手机雪天 | [前](../verification/beach-refinement/before/phone-default-snow.png) | [后](../verification/beach-refinement/after/phone-default-snow.png) |

## 最终性能记录

同一 Chrome 中交替两轮平均；绘制调用与三角形是现有多通道整帧总量，非单一主画面。

| 设备 / 天气 | Draws 前 → 后 | 三角形变化 | RAF 中位 ms 前 → 后 | P95 ms 前 → 后 |
| --- | --- | --- | --- | --- |
| desktop / sun | 1880.9 → 1900.0 | 0.70% | 20 → 20 | 25.25 → 30 |
| desktop / rain | 1251.9 → 1254.7 | 0.62% | 15.1 → 19.8 | 25.3 → 30 |
| desktop / snow | 2555.5 → 2578.9 | 0.80% | 30.3 → 30.05 | 50.15 → 50.05 |
| phone-emulated / sun | 1620.5 → 1580.8 | -0.86% | 10 → 13.35 | 25 → 18.75 |
| phone-emulated / rain | 981.9 → 986.3 | 0.50% | 10.05 → 13.35 | 20.45 → 14.05 |
| phone-emulated / snow | 2024.3 → 2044.6 | 0.62% | 20 → 18.35 | 39.9 → 31.35 |

雨天首轮与手机个别轮次出现刷新节律波动；逆序第二轮中，桌面雨天中位 19.6 → 19.9 ms，手机雨天 10.1 → 10.0 ms。没有足够证据把个别轮次差异归因于新增装饰。最终新增物件保持合批；手机风形变关闭、叶簇/脚印减量，未调整受保护的全局渲染架构。

最后一次仅内移新增棕榈、分开草帽与书，未改变拓扑、材质或渲染通道。最终构建已重新通过全部截图/交互验收。

原人物委托、种植、收益及 Mona 单元测试通过。`quest-progression.cjs` 的锁定文件白名单仅新增本轮获授权修改的 `island-props.ts`、`island.ts`，并以本轮源文件哈希审计锁定其他全部现有文件。
