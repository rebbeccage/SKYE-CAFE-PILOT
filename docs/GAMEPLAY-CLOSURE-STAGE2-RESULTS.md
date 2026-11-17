# 阶段2：花园种植闭环完成记录

完成日期：2026-11-16。仅本地实现和验证，未发布、未推送、未开始阶段3。

## 已完成的玩家流程

1. 原样阅读棠姨第三章并选择原回应，仍获得12枚心意金币，同时解锁花园经营。旧版或阶段1存档已经读完该章的，迁移时直接获得经营权限，不重复发奖。
2. 新“花园”按钮只在解锁后显示。也可点击原花园里的葡萄藤或草莓区域，打开同一个面板；未解锁时只提示继续棠姨故事。
3. 首次进入说明棠姨留下种子；可无限免费播种。两种作物独立经过：未播种 → 已播种 → 完成一单生长中 → 再一单待照料 → 浇水 → 再一单可收获。
4. 待照料期间额外营业不跳过照料、不囤进度；每次有效订单（原商品、错委托商品、花园新品）都推进所有已播种作物。没有计时等待、枯萎或季节损失。
5. 每次收获3份对应食材，恢复未播种状态，可再次播种。重复收获不加库存。
6. 首次草莓收获解锁草莓燕麦拿铁42金币；首次葡萄收获解锁葡萄气泡美式46金币。两卡追加在原四款后，沿用原卡片结构和图集，不重做菜单。
7. 新品完成订单时扣对应1份食材。开始制作不扣，刷新中断不损失；库存不足禁用对应商品并提示回花园收获。原四款零作物消耗，莓果可颂仍38金币。
8. 经营开放前维持原果实景观；开放后未成熟隐藏对应果实、成熟显示。葡萄/草莓/落果分别归组，原枝叶/植株保留。雪天沿用休眠显示，进度和收获权限仍在，回晴天按真实成熟状态恢复。

## 实际修改

| 文件 | 用途 |
|---|---|
| app/src/progression.ts | 在阶段1规则上追加作物状态、权限、规范化迁移、收获/库存/新品、订单完成生长事件和花园引导 |
| app/src/game.ts | 解锁后导航、共用花园面板、两款新增菜单卡、库存/禁用提示、成熟视觉推送、原订单结算接线 |
| app/src/game.css | 花园纸面双卡与390px单列布局，确保锁定导航隐藏 |
| app/src/garden-fruit.ts | 复用全部果实建模，拆葡萄/草莓/花朵组；两个不可见命中盒；成熟+天气共同控制显隐 |
| app/src/garden.ts | 暴露果实接口与由现有坐标变换得到的热点世界锚点 |
| app/src/main.ts | 连接两处热点及事件后视觉刷新；室内排除花园命中盒，不改帧循环业务规则 |
| vite.config.ts | cssMinify=false，修复生产CSS丢失标准backdrop-filter导致对话毛玻璃不显示；JS仍压缩 |
| verification/garden-progression.cjs（新） | 种植、双作物、重复收获/结算、解锁、扣料、迁移、无负库存、无小费 |
| verification/garden-playtest.cjs（新） | 真实热点/回应/8秒订单/天气/收获/两饮品/耗尽/刷新/导入导出/手机 |
| verification/stage2-regression.cjs（新） | 顺序运行五组现有/新增浏览器验收并记录退出码和日志 |
| verification/quest-progression.cjs、quest-playtest.cjs | 保留原人物验收，更新“本阶段没有花园字段”历史假设；花园两模块不再纳入不可变哈希清单 |
| verification/dialogue-playtest.cjs | 失败时附上实际毛玻璃计算值；保留原全部验收 |
| verification/winter-playtest.cjs | 支持BASE_URL；棠姨位置与本轮初始化位置对比，替换已过时的旧座椅固定坐标 |
| verification/fixtures/stage1-source.json（新） | 保存本阶段改动前六个相关源码，方便范围比对 |
| docs/GAMEPLAY-CLOSURE-SPEC.md、GAMEPLAY-CLOSURE-PLAN.md | 阶段2实施范围、状态和证据 |
| game/、dist/ | 仅通过原生产构建生成 |

测试证据保存在 verification/garden/，另有原对话、冬季、手机与委托测试结果及截图更新。无新的大型场景、美术资产、框架或依赖。

## 状态与兼容

沿用 localStorage 键 `glasshouse-stories-v1` 与导出包装 `glasshouse-v1`。阶段1的 characterQuests 不改格式，也不重新用新版 served 推断任务。

新增可选字段：

```ts
gardenUnlocked?: boolean;
gardenState?: {
  seedsIntroduced: boolean;
  crops: Record<'grape' | 'strawberry', {
    stage: 'unsown' | 'sown' | 'growing' | 'needs-care' | 'ready';
    growth: number; cared: boolean; everHarvested: boolean;
  }>;
};
ingredients?: { grape: number; strawberry: number };
gardenRecipes?: string[];
```

- 保留七个核心字段；旧版未来章节豁免和阶段1任务完成证据继续有效。棠姨未读完第三章，伪造的true不能绕过权限。
- 缺少新增字段安全默认。单个作物损坏只修复该作物；有效另一作物、库存保留。ready导入不会自动收获；everHarvested可恢复对应配方。库存耗尽不撤销配方。
- 非法库存值归零；库存上限检查避免收获溢出。已有作物/食材即使权限不一致也保留，待真正开放后继续。
- 存档不包含Three.js对象；经营事件发生后同步视觉，天气变化不改变作物数据。
- 下单冻结商品/对象，完成时一次扣料、给原价收益、推进生长与对应委托；重复complete无副作用。沿用阶段1的在制/异步导入保护。
- 不初始化任何小费或评分字段。摆放装饰不增加订单收入。

## 验证结果

阶段2开始前先重跑阶段1：17组规则、256组迁移以及人物/订单/导入导出全流程通过。首次浏览器复核发生订单等待超时，独立8秒计时与60帧运行检查正常，完整重跑通过后才实施玩法；未通过延长游戏时间或跳过订单绕开。

最终结果：

| 检查 | 结果 |
|---|---|
| node verification/quest-progression.cjs | PASS，17组检查+256组迁移，九章原文/回应、四款菜单/六装饰常量逐字节保留，42个锁定源码/资源哈希不变 |
| node verification/garden-progression.cjs | PASS，10组，含两作物重复循环、待照料关卡、重复收获/结算、两新品库存耗尽、错单生长、损坏数据、溢出/无小费 |
| npx tsc --noEmit | PASS |
| npm run build | PASS，60模块；保留既有大JS包提示，不借此扩展拆包重构 |
| BASE_URL=http://127.0.0.1:5194 node verification/stage2-regression.cjs | 五个脚本全部退出0，详见下表 |

生产浏览器回归（隔离Chrome上下文与合成存档，不使用玩家存档）：

| 脚本 | 覆盖 |
|---|---|
| quest-playtest.cjs | 原九章、六委托、错单、原价、归档、旧/新导入导出、跨订单异步恢复保护、390px、天气/音乐 |
| dialogue-playtest.cjs | 原正文/回应、12金币、自动/跳过、毛玻璃/尺寸、关闭清理、归档、手机分页、室内/音乐/订单 |
| winter-playtest.cjs | 5000雪粒、灯串、雪天收伞/雨天开伞、固定日间、独立冬日摆件、天气往返人物位置不变、室内音乐/订单/对话/手机 |
| mobile-preview.cjs（CHECK=1） | 390×844、360×740、844×390、桌面；全屏/DPR/比例、触控环视、室内定点、8秒订单、天气、人物/装扮、旋转屏幕 |
| garden-playtest.cjs | 棠姨第三章实际回应解锁、两处真实3D热点、8单真实制作、两作物循环、雪天成熟/晴天恢复、分别收获与显隐、新品扣料/耗尽、刷新和导入导出、390px新入口/面板 |

所有五组浏览器脚本错误断言均通过。已实际查看花园面板、手机菜单、成熟场景截图。移动端菜单与花园沿用可滚动纸面面板，无横向溢出，四枚导航位于屏幕内。

生产毛玻璃修正依据：压缩前有标准+前缀两个声明，压缩后只剩webkit版本，Chrome计算样式为none；关闭CSS压缩后原18px毛玻璃回归通过。未改原对话样式或动画。最终CSS gzip约9.30kB，JS gzip约253.76kB。

## 证据链接与停止点

- [阶段1实施前复核](../verification/garden/stage1-preflight.json)
- [花园纯规则结果](../verification/garden/unit-results.json)
- [五组生产回归退出码](../verification/garden/regression-results.json)
- [花园生产试玩结果](../verification/garden/results.json)
- [花园手机截图](../verification/garden/mobile-garden.png)
- [菜单手机截图](../verification/garden/mobile-menu.png)
- [生产产物SHA-256](../verification/garden/build-manifest.json)

**阶段2完成，到此停止。** 装饰小费未实施，菜单未重新设计；未开始阶段3，未发布、未推送。原相机、天气、海岛、水面、雪景和室内渲染架构保持。
