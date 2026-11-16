# SKYE CAFE · 海岛咖啡馆

当前海岛版本的完整 GitHub 上传包，含可直接部署的游戏和可编辑源码。

## 最快使用：上传后直接发布

1. 解压 ZIP，在 GitHub 新建仓库。
2. 选择 **Add file → Upload files**，上传本文件夹里面的文件与文件夹。不要只上传 ZIP，也不要把整个外层文件夹套进仓库。
3. 仓库根目录应直接出现 `index.html`、`game/`、`app/`、`package.json`。
4. **Settings → Pages → Source** 选择 **Deploy from a branch**，选 `main` 的 `/(root)`，保存。
5. 从 Pages 设置页打开实际发布地址。游戏入口格式为：

`https://你的用户名.github.io/仓库名/game/index.html`

地址是格式示例；本包尚未替你创建或上传 GitHub 仓库。网页上传可以分批进行，保持原有目录结构。

## 包内内容

- `index.html`：网站首页，自动进入游戏。
- `game/`：已经构建的完整静态游戏，内含 JS、CSS、图片和默认音乐，无需安装或编译。
- `app/`：TypeScript 场景源码、UI 素材和音乐。
- `package.json` / `package-lock.json`：锁定的开发依赖。
- `scripts/stage-courtyard.mjs`：构建打包步骤。
- `.github/workflows/pages.yml`：可选的自动构建发布流程。
- `.nojekyll`：静态资源发布配置。
- `PACKAGE-CHECK.json`：文件完整性与资源检查结果。

## 后续修改源码

安装 Node.js 22.12 或更高版本后执行：

```sh
npm ci
npm run dev
npm run build
```

构建会更新 `game/` 并生成 `dist/`。使用分支发布时，将更新后的 `game/` 一起提交。

如果希望提交源码后自动构建，上传隐藏目录 `.github/`，再把 **Settings → Pages → Source** 改为 **GitHub Actions**。不使用自动构建时，可不上传 `.github/`，按上面的分支方式发布即可。

## 当前版本

保留咖啡馆近景、自由环绕与缩放、进店、点击座位坐下、人物故事、经营收益、装扮与本地存档。新增真实 3D 环岛、沙滩、浅海、登滩道、游船及游客上下船；「全岛」按钮用于切换取景。支持晴天、雨天、雪天与暮色。室内默认轻音乐，室外有环境音；声音需首次点击后启用。

存档属于浏览器和当前域名；已有进度可先在原游戏导出，再在新地址导入。包内没有个人存档、账号、邮箱、Sites 站点配置或访问凭据。

请通过 HTTP/HTTPS 访问，直接双击 HTML 无法保证模块加载。需要支持 WebGL 2 的浏览器。本包是 H5 网页游戏，不是原生微信小程序工程。

素材沿用用户提供的美术与现有游戏资产，未另行声明开放授权；第三方依赖许可见对应 npm 包。
