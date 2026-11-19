# 漫游入口与无损运行优化 · 2026-11-18

## 完成范围

新增首页独立「漫游」入口：桌面下方中央，手机右下方；图标复用水彩地图／指南针。点击进入连续第一人称，显示「漫游中」，再次点击返回全岛概览。原定点环绕仍为默认视角，「随心逛逛」保留原有导览、昼夜与留影功能。

实际源码和 HTML 中「步行漫游」「FPS模式」检索为零。关闭界面后提示「点击场景继续漫游」。任务、剧情、天气、种植、经济和存档规则未修改。

## 修改文件

- `app/index.html`：HTML 首屏漫游入口、头像预加载、帮助名称。
- `app/src/main.ts`：复用模式切换；模态状态缓存；复用人物碰撞代理、向量和光照颜色；接入变换缓存。
- `app/src/first-person-ui.ts` / `first-person-ui.css`：文案、FOV 引用缓存、入口及提示避让。
- 新增 `app/src/transform-cache.ts`：变换未改变时不重算局部矩阵；保留动画、父级更新、重新挂载语义。
- `app/src/player-collision.ts`：障碍物保守粗筛；台阶、坡度和滑动规则不变。
- `app/src/interaction-raycast.ts`：筛选附近可交互热点、复用数组与向量；保留距离和玻璃遮挡判断。
- `app/src/scene-assets.ts`：冻结无动画 GLB 内部节点；相同材质只处理一次；餐车请求延后到空闲时段；模型接入变换缓存。
- `app/src/mona.ts`：加载模型接入变换缓存，保留原触发与延迟加载。
- `app/src/game.ts`：仅首页头像 URL 改成缩略图，人物卡使用完整画像。
- `app/src/music.ts`：音轨 `preload=none`，播放和选曲逻辑不变。
- 新增 `app/src/assets/portraits/ahe-thumb.webp`、`lin-thumb.webp`、`tang-thumb.webp`：192×192，总计约35KB；原三张约9.5MB完整画像保留。
- `game/`：生产构建同步更新，未发布或推送。
- 测试：新增 `verification/roaming-*.cjs`、`transform-cache*.cjs`；first-person 浏览器测试适配首页入口；移动积分测试增加120Hz；影院测试增加显式 `--runtime-only` 运行方式。

## 性能与质量对照

本机 Chrome 无头浏览器，DPR=1；触屏模式是电脑上的模拟，**不是实体手机性能测试**。相同相机、玩家位置、渲染分辨率与像素比逐项断言通过，每天气稳定后采样10秒。

初次与长测后的测试存在明显主机负载／刷新节奏波动。最终从上次交付的 `SKYE-ISLAND-GitHub-增量上传-20261118.zip` 还原临时对照服务，按旧→新版相邻测量。所有原始轮次保留。

| 设备 | 天气 | FPS 前→后 | P95 ms 前→后 | 新版采样 >50ms Long Task |
|---|---|---:|---:|---:|
| 桌面 1440×900 | 晴天 | 60.0 → 60.0 | 17.2 → 17.1 | 0 |
| 桌面 1440×900 | 雨天 | 60.0 → 60.0 | 17.2 → 17.0 | 0 |
| 桌面 1440×900 | 雪天 | 53.4 → 51.6 | 33.3 → 33.3 | 0 |
| 触屏模拟 390×844 | 晴天 | 60.0 → 59.8 | 16.8 → 17.1 | 0 |
| 触屏模拟 390×844 | 雨天 | 60.0 → 60.0 | 16.9 → 17.0 | 0 |
| 触屏模拟 390×844 | 雪天 | 59.4 → 60.0 | 17.1 → 16.9 | 0 |

晴雨维持约60FPS；桌面雪天尚未达到稳定60FPS/P95≤22ms。雪天约3%的变化不足以判定收益或退化，不能宣称全场景帧率提升。静态变换独立CPU基准（10,000对象、120次更新、五轮中位数）55.09ms→26.40ms，减少约52%；这不是整场景FPS。

没有降低DPR、画布分辨率、抗锯齿、模型／贴图／阴影质量或视距，也没有删除物件。原有30Hz动态阴影共享策略保留。draw call/三角形单帧计数含不同相位的阴影、AO和冬季辉光通道，不能据此推断模型删减。

[同机位晴雨雪双栏对比](../verification/roaming-performance/comparison.html)。截图未冻结动画，雨雪、海浪、人物和阴影相位与生活时钟并非逐像素一致。

## 十分钟实测

页面实测 **607.5秒**；累计移动 **391.4米**；晴→雨→雪→晴；零pageerror。

回收后JS堆 **302.96MB → 309.40MB**，增加6.44MB。分钟采样在305.9–314.4MB波动，没有持续单向增长。一次十分钟测试不能证明所有内存泄漏均不存在，GPU驻留内存未单独测量。

部分长测时段同时运行了短程UI回归，因此长测FPS不用于性能对比；上表是独立顺序测量。第一次长测仅记录594秒，未算作十分钟验收，已完整复测。

## 验证结果与命令

- `npm run build`：TypeScript、生产构建通过。保留既有大bundle警告，无新增编译错误。
- `node verification/transform-cache.cjs`：动画层级矩阵与原生一致，静态更新、重新挂载及移动子节点通过。
- `node verification/first-person-unit.cjs`：7项通过；30/60/120/144Hz移动距离一致，碰撞、岸线、台阶、异常恢复通过。
- `node verification/first-person-ray.cjs`：距离、最近热点、资格、玻璃遮挡与低位作物通过。
- `node verification/first-person-routes.cjs`：花园、两种作物、影院、港口、全部三座高脚屋连续可达。
- `node verification/first-person-browser.cjs`：WASD、Pointer Lock、面板暂停、概览返回、室内阿禾剧情、花园观察通过。
- `node verification/first-person-mobile.cjs`：390×844与844×390摇杆、拖动、捏合、导航避让及面板暂停通过。
- `node verification/roaming-ui.cjs`：三尺寸入口热区、主导航／摇杆无重叠、模式切换、192px头像、画像与音频按需加载通过。
- `node verification/warehouse-transactions-browser.cjs`：对话、制作入库／售出、正确及错误委托、待制作导入、取消、偏好通过。
- 规则：quest-progression（256个旧存档组合、原九段故事/四菜单/六装饰锁定）、garden-progression、economy-progression（4096种所有权/摆放组合）、warehouse-rules、mona-progression、scene-hints-unit、player-hud-unit全部通过。
- `node verification/cinema-rules.cjs --runtime-only`：日／暮／雨／雪／店内条件、收纳、座位、碰撞通过。默认命令附带最初影院开发时的全项目源文件哈希断言，因之后已获授权的UI和漫游迭代而失败；没有将该历史范围审计伪装为通过。

## 截图与原始数据

- [桌面首页](../verification/roaming-performance/home-1440.png)
- [手机竖屏首页](../verification/roaming-performance/home-390.png)
- [手机横屏首页](../verification/roaming-performance/home-844.png)
- `verification/roaming-performance/before-recheck.json`、`after-recheck.json`：最终对照；`before.json`、`after.json`保留较早轮次。
- `verification/roaming-performance/endurance.json`、`endurance-end.png`：607秒长测。
- `verification/roaming-performance/ui.json`、`rules.json`、`movement.log`、`cinema-runtime.log`、`transform-benchmark.json`：测试证据。
- `verification/first-person/browser.json`、`mobile.json`、`routes.json`：桌面、触屏与连续路径回归。

## 未达成或尚未验证

实体手机性能与温升未实测；桌面雪天22ms P95未达成；所有大型GLB首次解析/GPU上传均低于50ms尚无保证。当前保留画质与内容，未用降质换帧率。短采样无运行期>50ms长任务，不代表启动阶段或所有设备都无长任务。UI点击100ms目标未单独建立计时断言。
