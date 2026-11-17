# 月牙岛环境重构 · 审计与实施记录

## 修改前审计（2026-11-17）

- 概念图：concept-art/crescent-island-harbor-concept-v2.png。用于月牙外弧、向南/西南敞开的内湾与低矮铺装关系，不逐像素复制。
- 单一地形入口：island-geography.ts 的 shorePoint / islandRadius / terrainHeight；原岛约 32×46m，海面基准 -1.63m。
- 实际网格：island-surface.ts 单张连续 180m / 160×160 高度网格，beach-ground.ts 按同一三角形插值。深度图 512² 由同一 terrainHeight 生成，供浅水颜色、波幅衰减、湿沙/浪线使用。
- 石质庭院顶面约 +0.26m，原周边沙地约 -0.43m，导致约 0.7m 高差；室内 +0.85m。优先保留建筑和室内高度，通过薄石基、周边沙地与入口缓坡/两级浅阶消除高架感。
- 咖啡馆 x≈[-2.8,2.8], z≈[-2.8,2.1]；铺装/花园 x≈[-8.92,5.65], z≈[-4.55,5.45]；户外桌中心 (3.55,0.35)/(3.55,2.8)。这些及角色叙事位置保护。
- 餐车原位置 (3.6,17.4)；沙滩休憩组合约 (-7,11)。若月牙内湾占用这两组位置，整组移至对应外弧，并同步热点与沙滩座位机位，记录新旧位置。
- 港口原访客船 (1.35,30.8)、泊船 (-14.5,30)/(-19.4,27.8)，旧登船落点 z=26.8997526 写死。必须改为同一个布局接口，避免旧路径/绳索残留。
- 林伯正式 GLB 当前无行走骨骼：晴天站在户外座位旁，雪天在室内；现有走动路线实际属于服务员及游船游客。保护林伯既有站位/天气行为，不虚构原本不存在的林伯栈道寻路。
- 服务员路径 delivery.ts 含四级入口高度，需随入口两级浅阶局部校准；桌边服务点与动画流程不变。
- 动态人物热点 main.ts 每帧跟随角色；固定探索热点 exploration.ts 的沙滩椅与餐车坐标须与资产同源。
- 海岸碎冰 island.ts 使用 shorePoint；高脚屋 stilt-houses.ts 的水线搜寻与栈道端点需适应新岸线。
- 默认正交机位 25° 俯视，zoom 桌面 .75/手机 .85；旧全岛 zoom .30。仅全岛中心/取景范围允许校准，保留室内/花园近景。
- 性能基线、截图、坐标与源码备份位于 verification/crescent-island/。保留 160² 地形细分，不新增灯光、反射或后处理。

## 预计受影响文件

island-geography.ts、island-surface.ts、island-props.ts、island-boat.ts、harbor.ts、island.ts、stilt-houses.ts、world.ts、garden.ts、delivery.ts、scene-assets.ts、exploration.ts、main.ts。可新增纯布局/几何辅助模块，不新增任务、天气或存档状态。

## 阶段

1. 单一连续月牙高度场与开放内湾；面积目标旧岛约 1.5 倍。
2. 外弧后方、花园外侧、餐车外侧三处低起伏预留地。
3. 薄石基、近齐平沙面、入口缓坡与两级浅阶，校准送餐脚底。
4. 港口进入内湾、主栈道分支与三船错位停泊，访客路径同源。
5. 道具落地、热点和高脚屋岸端校准。
6. 原天气接口覆盖新地形/码头，几何不随天气迁移。
7. 全岛横竖屏取景与回位。
8. 几何/脚底/航路、浏览器玩法与存档回归、截图及性能对照。


## 实施结果

八个阶段已完成。仅修改环境地形、布局与必要的坐标适配，不新增玩法、状态机或存档字段。

### 地理与分区

- 单一连续高度场使用外弧轮廓与内湾距离场的平滑交集，内湾向南偏西开放；不使用重叠平面拼岛。
- 实测原陆地 1,084.125㎡，新陆地 1,627.063㎡，比例 **1.5008**。测量的是项目实际地形轮廓，不把早期文案估算面积当作真实基线。
- 陆地外包约 50×54m；保留 160×160 地形网格、512² 水深图，海水、湿沙、雪与道具落地共享同一采样源。
- 三处预留沙地：咖啡馆背后中心 (0,-12)，10×8m；花园外侧 (-16,-2)，8×7m；餐车外弧 (13,5.5)，8×6m。各区起伏约 24mm，未添加建筑、地基或标记。

### 铺装衔接

- 保留庭院 +0.26m、室内 +0.85m 以及建筑/花园/桌椅的原有高度，避免全体角色与室内设施随平台改动错位。
- 庭院和花园石基厚度由 0.60m 减为 0.14m；周边沙面渐接到 +0.145m，主要外露高差约 0.10–0.12m，边缘石基自然半埋。两侧由同一地形缓坡衔接，无新覆盖平面。
- 正门四级旧台阶改为两级 150mm 浅阶，前方为长 1.6m、升高 0.29m 的铺装坡道。送餐路径的入口高度与坡面同步，室内桌边终点不变。
- 旧四级台阶上的积雪局部坐标同步替换为两级；天气更新、积雪材质与其他雪景不改。

### 港湾与保留物件

- 原 33 块木板组成的主码头整体迁入内湾，中心 x=-3.5m，保持原约 12.264m 长、2.4m 宽；新增两条窄短支路并复用木材、桩柱、栏杆和雪材质。
- 岸端贴合实际沙面，水上甲板标高 +0.08m，桩柱延伸至实际海床。三艘船为原访客船与原两艘环境艇，未新增船只数量。
- 访客船保留 Arriving → Moored → Departing 与浮体/上下船动画。登船点由码头布局派生，离港沿同一开放水道退离，尾波朝向与行进方向一致，避免旧直线航路穿过新岛角。
- 两艘环境艇错开停泊，主航道、船体与支路之间有间隔；系泊点和缆绳端点随实际布局更新。
- 原沙滩休憩组合整体平移 (-8,-4)m；两把躺椅与藤桌保持相对关系，坐席镜头与热点同步。
- 餐车从 (3.6,17.4) 移至 (15.5,14)，在低起伏干沙上保留原朝向；模型加载方式与资产不变。
- 26 处原有沙滩道具/植物依据新岸线重新落地，未复制或删除。完整新旧坐标见 transforms.json。
- 三座既有高脚屋沿东侧新水线整体向外校准，岸端重接新沙面；建筑、陈设和季节表现复用。
- 咖啡馆、花园、两张户外桌及三位主线人物叙事站位保持。林伯现用无骨骼站立 GLB，原版本没有“从栈道步行至店门”的实际动画；本次保留其晴/雪站位，没有凭空新增寻路。活动路径回归覆盖现有服务员与游船游客。

### 相机与保护项

- 默认庭院机位、自由旋转/缩放、室内机位及花园近景未重设；全岛目标改为 (-1.6,1.8,1)，桌面 zoom=0.30，手机=0.25。
- 修正原正交取景回退距离公式，使其使用实际横竖屏视锥高度；缩远后不再在手机底部露出近裁剪造成的海床断面。只沿同一视线拉远相机，不改变操作方向或透视类型。
- game/progression、仓库、对话、HUD、场景提示、种植、花园近景、音乐、天气、雨雪特效、海水着色、室内照明/相机等 **22 个受保护文件与修改前逐字节一致**。
- main.ts 只有全岛取景与裁剪距离改动；scene-assets.ts 只有餐车落地坐标/采样改动；world.ts 只有石基与入口铺装改动；delivery.ts 只有坡面/台阶节点高度改动。

## 验证证据

- TypeScript + 生产构建：`npm run build` 通过。仍有原有大包体提示（主 JS 超过 500KB），没有新增构建错误。
- `node verification/crescent-geography.cjs`：面积倍率、连续轮廓、开放内湾通过。
- `node verification/crescent-clearance.cjs`：晴/雨/雪、潮位 -0.3/0/+0.4、波幅 1.5、完整船周期取样通过。船底海床间隔 ≥0.535m，主船/环境船中心间隔 ≥5.801m，泊船与码头平面间隔 ≥0.155m，甲板底与波面间隔 ≥0.333m；餐车轮下干沙平整性通过。
- `node verification/crescent-entry.cjs`：送餐入口对实际渲染几何采样 133 点，脚底路线最大误差约 3.5mm，两级阶面与坡面连通。
- `node verification/stilt-geometry.cjs`：保留的三屋、64 根桩、栈道连接、晴雨雪/潮位水面间隔通过。
- 委托、花园、经济、仓库、Mona、提示、HUD 单元测试通过；委托测试包含 17 组断言与 256 种旧存档迁移组合。原九章对话/回应、四款菜单、六件装饰内容仍逐字保留。
- 原花园花境测试采用本轮开始时的保护哈希基线复核（`CRESCENT_BASELINE=1 node verification/garden-bloom-geometry.cjs`），避免把之后已授权的仓库等功能误判为本轮修改。
- `node verification/warehouse-transactions-browser.cjs`：真实 NPC 对话、错误/正确委托、入库与库存出售隔离、制作中恢复保护、刷新取消订单通过。
- `node verification/warehouse-browser.cjs`：桌面与390px，作物收获→制作扣料→入库→出售、装饰同步、小费、旧/新存档导入导出、菜单锁定背景操作通过。
- `node verification/crescent-playtest.cjs`：桌面与手机晴/暮/雨/雪、全岛/俯视/旋转缩放、花园、沙滩坐席、三位 NPC 点击、进出店通过；相机归位与核心存档值不变，无新增控制台/浏览器错误。
- 自动化手机验证为 390×844 触屏模拟，未把结果当作真机性能保证。

## 性能

同一浏览器、相同正交镜头、相同视口、预热后120帧，按“旧→新→新→旧”对照。统计包含现有阴影、水面捕获等全部渲染 pass，并非场景唯一网格数。

| 视口 | 绘制调用/帧 | 三角形/帧 | 中位帧时 |
|---|---:|---:|---:|
| 1440×900 桌面 | 1766.2 → 1754.2 | 7,084,635 → 7,019,259 | 33.3 → 33.3 ms |
| 390×844 手机模拟 | 1610.5 → 1610.5 | 6,344,798 → 6,302,352 | 33.3 → 33.3 ms |

未新增实时灯光、反射通道或全屏后处理；没有扩大地形细分数量。现有移动端降级策略保持。证据：verification/crescent-island/performance.json；最终镜头快照：playtest.json。

## 实际修改文件

- `app/src/delivery.ts`
- `app/src/exploration.ts`
- `app/src/garden.ts`
- `app/src/harbor.ts`
- `app/src/island-boat.ts`
- `app/src/island-geography.ts`
- `app/src/island-layout.ts`
- `app/src/island-props.ts`
- `app/src/island-surface.ts`
- `app/src/island.ts`
- `app/src/main.ts`
- `app/src/scene-assets.ts`
- `app/src/snow.ts`
- `app/src/stilt-houses.ts`
- `app/src/world.ts`

生产产物同步更新 `game/` 与构建脚本的 `dist/`。另新增 crescent 几何/浏览器/性能/保护测试，调整旧测试对已授权场景文件的范围；没有修改旧剧情期望值。

## 截图

- [修改前同默认机位](../verification/crescent-island/before-desktop-default.png) · [修改后同默认机位](../verification/crescent-island/desktop-default.png)
- [全岛默认方向](../verification/crescent-island/desktop-island.png) · [轮廓俯视检查](../verification/crescent-island/desktop-overhead.png)
- [港湾细节](../verification/crescent-island/desktop-harbor.png) · [暮色](../verification/crescent-island/desktop-island-dusk.png)
- [雨天](../verification/crescent-island/desktop-island-rain.png) · [雪天](../verification/crescent-island/desktop-island-snow.png) · [入口雪层](../verification/crescent-island/desktop-default-snow.png)
- [手机全岛](../verification/crescent-island/phone-island.png) · [手机旋转缩放](../verification/crescent-island/phone-orbit-zoom.png)
- [花园近景](../verification/crescent-island/desktop-garden.png) · [室内](../verification/crescent-island/desktop-inside.png) · [沙滩坐席](../verification/crescent-island/desktop-seat.png)

本地预览：http://127.0.0.1:5194/ 。未发布或推送。上一条增量包任务的暂存目录未作为本次交付包，需在后续重新打包时纳入此次环境改造。
