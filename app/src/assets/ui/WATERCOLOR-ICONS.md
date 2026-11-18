# 主界面水彩图标

2026-11-18，使用内置 image_gen 工具生成一张无文字、透明背景的独立 UI 图集；没有裁切概念图。

运行资产：`watercolor-icons-v1.webp`，960 × 720，RGBA，330,644 字节。原始生成图为 1448 × 1086 PNG；只使用 Sharp 等比例缩小并转 WebP，保留 alpha，没有添加文字或绘制背景。

固定 4 列 × 3 行；CSS 每格使用 `background-size:400% 300%`。第一行：相遇、菜单、仓库、装扮；第二行：花园、随心逛逛、晴天、雨天；第三行：雪天、金币、任务嫩芽、声音。格位映射集中在 `app/src/ui-components.ts`。后续替换美术只需要更换同布局的图集，或修改映射与 CSS 资源路径；业务键与存档不变。

所有功能名称、数字与状态仍由 DOM 渲染，图标为 aria-hidden 装饰。三位人物画像沿用现有 portraits 素材，不重新生成。没有待补的主导航占位图。

## 生成提示词

Create a production-ready TRANSPARENT watercolor game UI ICON ATLAS, 4 columns x 3 rows of EXACTLY equal square cells, image ratio 4:3, recommended 1536x1152. No text or letters or numbers anywhere, no cards, no backgrounds, no ground plane. Each illustration optically centered in its own cell and occupies 72% of cell width/height, with generous transparent padding. No icon crosses a cell border. Gentle hand-painted gouache and watercolor, visible paper-pigment granulation INSIDE the colored shapes, delicate warm brown pencil contours, soft irregular edges, cozy hand-painted animation storybook feel. Muted sage, lake blue, honey gold, warm timber, restrained strawberry coral and lavender. Detailed readable silhouettes at 48px, not flat vector, not glossy plastic. EXACT cell order left to right: ROW ONE: 1 open storybook with small daisy and sage leaf, 2 cream coffee cup and saucer with warm coffee and little steam, 3 woven wicker basket containing strawberries and purple grapes, 4 small glass vase with cream/pink/lavender wildflower bouquet. ROW TWO: 1 strawberry seedling growing from small soil clump with two leaves and one red berry, 2 folded island map with small brass compass, 3 warm golden sun with short irregular watercolor rays, 4 pale blue-gray rain cloud with three blue drops. ROW THREE: 1 pale blue-gray snow cloud with three snow crystals, 2 small stack of three warm honey gold coins no currency symbols, 3 sage two-leaf sprout, 4 small warm wooden speaker with quiet sound waves. Alpha transparent behind all objects, no checkerboard painted into pixels, no labels, no frames, no watermark.
