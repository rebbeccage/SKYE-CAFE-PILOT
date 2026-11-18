# 人物姓名牌、流畅度与操作指引 · 2026-11-18

## 完成内容

1. 阿禾、林伯、棠姨、莫娜使用跟随头顶的轻薄米白姓名牌；未命名角色使用“客人”“店员”身份牌。姓名牌不拦截鼠标或触屏，剧情仍从实际人物模型进入。人物离开画面、对话打开、场景过渡或观影时收起。相邻标签错开，莫娜沿用原出现条件；旧莫娜文字按钮不与新标签重复显示。
2. 降低阴影重复生成成本：主画面、AO法线和冬季光晕共用同一阴影贴图，动态阴影刷新上限30Hz。没有降低画布像素比、抗锯齿、AO尺寸或采样数，没有简化角色模型，没有减少植物或移除特效。海面采样/反射未修改。
3. 场景进入提示、帮助与主任务摘要改为“场景位置＋具体操作＋目的”，仍读取同一任务和作物状态。例如：
   - 进入咖啡屋，在吧台点击阿禾，听下一段故事。
   - 到庭院座位旁点击林伯，听下一段故事；雪天提示咖啡屋窗边。
   - 打开菜单选择对应人物的委托，制作指定餐品以解锁后续故事。
   - 点花园草莓植株收获，食材会存入仓库。
   - 正在制作入库餐品时，提示完成后去“仓库·餐品”查看。

未新增任务、货币、存档字段或快捷剧情跳转，首次/重复进入提示仍为7秒/4秒。

## 实际文件

新增 `app/src/npc-nameplates.ts`、`app/src/npc-nameplates.css`。

修改 `app/src/main.ts`（标签接线、天气提示上下文、影院帮助）、`ambient.ts`（共享阴影预算）、`mona.ts`（只读角色根节点、消除重复按钮）、`scene-hint-model.ts`（具体操作文案）、`player-hud.ts`（只读主任务展示文案）。

新增验证 `verification/labels-performance.cjs`、`labels-weather.cjs`、`labels-hints-unit.cjs`。旧委托测试的冻结文件清单仅将本次获授权修改的 `ambient.ts` 移交新画质锁定测试；原人物对话、菜单、装饰和存档断言继续保留。

生产输出 `game/` 和暂存输出 `dist/` 已构建；未发布或推送。

## 性能记录

同一Chrome、本机1440×900桌面及390×844手机视口，模型加载后分别采样100帧。下表为这次前后运行的实际平均值；运行环境负载会影响FPS，手机视口模拟不代表真机保证。

| 视口/场景 | 平均绘制调用 | 平均帧时间 | 平均FPS |
|---|---:|---:|---:|
| desktop · outside | 1814 → 1142 | 51.0 → 17.2ms | 19.6 → 58.3 |
| desktop · inside | 438 → 438 | 35.2 → 17.7ms | 28.4 → 56.6 |
| phone · outside | 1391 → 948 | 28.3 → 16.7ms | 35.3 → 60.0 |
| phone · inside | 362 → 358 | 16.7 → 16.7ms | 60.0 → 60.0 |

庭院平均绘制调用减少约32%–37%。三角形**渲染工作量**下降来自重复绘制减少，不是删除模型。前后摄像机坐标、输出分辨率和像素比均逐项一致。动态阴影最高30Hz与60Hz画面刷新不同，快速运动时阴影更新频率略低；人物动画、雨雪和海浪仍走原更新时间。

## 验证

- `npm run build`：TypeScript和生产构建通过；仍有原先单个JS包超过500kB提示。
- `node verification/labels-performance.cjs --before` / 无参数：桌面与手机截图、帧时间、实际人物点击；打开对话姓名牌收起；无浏览器新增错误。
- `node verification/labels-weather.cjs`：莫娜原条件出现、姓名牌不拦截点击、暮色/雨/雪、雪天店内林伯、原订单销售24金币，全部通过。
- `node verification/labels-hints-unit.cjs`：位置/动作/目的文案、雪天人物位置、入库方向，以及原像素预算/MSAA/AO参数保持不变，通过。
- 原 `quest-progression.cjs`（17项含256迁移组合）、`garden-progression.cjs`、`mona-progression.cjs`、`scene-hints-unit.cjs`、`player-hud-unit.cjs` 通过。

证据在 `verification/labels-performance/`：`before.json` / `after.json` / `weather.json` 和各测试日志。

## 实际截图

- `desktop-outside-before.png` / `desktop-outside-after.png`：默认庭院同机位前后。
- `phone-outside-after.png`：手机人物标签与场景引导。
- `desktop-inside-after.png` / `phone-inside-ahe.png`：室内标签、真实NPC点击（手机默认视角的阿禾接近右边缘，轻拖可完整看到）。
- `desktop-dusk-mona.png`：莫娜姓名牌。
- `desktop-rain.png` / `desktop-snow.png` / `inside-snow-lin.png`：天气及冬季人物位置。

预览： http://127.0.0.1:5194/?preview=names-performance-20261118
