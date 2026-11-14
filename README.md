# 玻璃间 · The Glasshouse

可直接上传 GitHub 的完整 3D 微缩咖啡馆。包含庭院与店内两幕、人物故事、菜品解锁、订单收益、六件装扮、音乐导入与本地存档。

## 最快上线：无需安装或编译

1. 解压文件包，在 GitHub 新建仓库，例如 `glasshouse-cafe`。
2. 使用 **Add file → Upload files**，把本目录内的文件和目录上传至仓库根目录。不要只上传 ZIP，也不要多套一层目录。仓库根目录应直接看到 `index.html`、`game/`、`app/` 和 `package.json`。
3. 在仓库 **Settings → Pages → Build and deployment** 中，Source 选择 **Deploy from a branch**，选择 `main`（或实际默认分支）的 `/(root)`，保存。
4. 如果同时上传了自动发布工作流，使用此分支发布方式时，可在 Actions 中停用 Publish Glasshouse to GitHub Pages，避免同时运行两套发布流程。
5. 等待发布完成，从 Pages 设置页取得实际地址。游戏入口格式：

```text
https://你的用户名.github.io/仓库名/game/index.html
```

这是地址格式示例，不是已创建的网址。仅上传源码不等于已经开启了 Pages。

## 自动构建发布：用于后续开发

包内已提供 `.github/workflows/pages.yml`。完整上传隐藏的 `.github` 目录后，将 Settings → Pages 的 Source 改为 **GitHub Actions**，随后在 Actions 中运行 **Publish Glasshouse to GitHub Pages**。之后推送 main/master 会自动构建并发布。

若网页上传未带上隐藏目录，可用 Add file → Create new file 手动创建 `.github/workflows/pages.yml`，复制本包对应文件内容。

官方发布说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 目录

```text
index.html                    根页面，自动进入 game/index.html
game/                         已构建的静态游戏，可立即部署
  index.html
  assets/                     JS、CSS、全部水彩 UI 素材
app/
  index.html                  开发入口
  src/                        TypeScript、样式、3D 场景源码
    assets/ui/                用户提供的 UI 图片
.github/workflows/pages.yml   GitHub Pages 自动构建发布
package.json
package-lock.json
tsconfig.json
vite.config.ts
```

## 本地开发

安装 Node.js 22 或更高版本，在本目录执行：

```sh
npm ci
npm run dev
npm run build
```

构建会更新 `game/`。使用分支根目录发布时，修改源码后请重新构建并把更新后的 `game/` 一起提交；使用 GitHub Actions 时会自动构建。

## 其他静态托管

将根目录 `index.html` 与完整 `game/` 上传至站点根目录，入口即为 `https://你的域名/game/index.html`。无需服务器、环境变量或原 Sites 账号。

请通过 HTTP/HTTPS 访问。直接双击 `game/index.html` 不能保证 JavaScript 模块正常加载。

## 游戏使用说明

拖动环视、滚轮缩放、点击门进入店内。人物的「聊聊」以及相遇、菜单、装扮入口可推进玩法。故事、金币、菜品和装扮保存在当前浏览器，菜单内可以导出和恢复存档，更换域名后可用它迁移进度。

标准音频可在菜单中导入，音频与音量仅保存在当前设备，不上传到服务器。原先提供的 MGG0 文件无法解码，本包未包含该音乐。浏览器可能要求点击音乐按钮后才播放。

运行时字体使用设备字体，脚本与图片均随包提供，不需要外部 CDN。3D 需要支持 WebGL 2 的现代浏览器，手机流畅度取决于 GPU。此版本按浏览器体验制作，尚未在微信真机中完成适配测试。

## 微信小程序说明

本包是 H5 网页游戏，并非原生微信小程序或微信小游戏工程。申请小程序并确认主体、web-view 资格、业务域名等要求后，才能确定接入方式。拥有 HTTPS 地址不代表已满足微信接入条件。可先用浏览器给朋友测试。

## 素材与授权

水彩 UI 素材由用户提供，未额外添加开放授权。公开分发或商用前请确认素材的使用权限。Three.js、Vite 等依赖的许可见各项目及 npm 包。

包内未包含原 Sites 的站点 ID、账号、邮箱、访问凭据、缓存、调试日志或 node_modules。
