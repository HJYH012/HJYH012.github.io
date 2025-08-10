#Markdown*调色板
**Markdown*Palettes**是一款适用于现代网络的开源Markdown编辑器。
##使用方法
我们有四种套餐方案。请选择您喜欢的。
请注意，要使用**Markdown*Palettes**，您的网页必须处于标准模式并使用UTF-8编码。例如：
```html
<！DOCTYPE html>
<元字符集=“utf-8”>
```
### 使用构建工具（webpack、rollup等）
首先安装我们的npm包：
```控制台
$ yarn 添加 markdown-palettes
```
由于**Markdown*Palettes**是一个Vue组件，我们假设您已经熟悉Vue。
#### 使用ES6模块
如果你使用webpack v2+或rollup，你可以使用ES6模块：
```html
<模板>
  <div style="height: 700px;">
<markdown调色板v-model=“value”/>
</div>
</template>
<脚本>
  从 'markdown-palettes' 导入 MarkdownPalettes
  导出默认对象
组件：[标记调色板]，
    数据：() => { 值：'你好，**Markdown*调色板**！' }
  }
</script>
```
请注意，ES6模块并不会解析其依赖项并将其打包进去。如果你将webpack或rollup配置为解析到`node_modules`中（这是常见的做法），这并不会造成影响。作为备用方案，你可以使用CommonJS模块。
#### 使用CommonJS模块
将ES6的'import'语句替换为CommonJS的'require'函数：
```javascript
const MarkdownPalettes = require('markdown-palettes')
require（'MarkdownPalettes/dist/MarkdownPalettes.cs'）
```
CommonJS模块解析了其依赖项，并将它们打包到内部。
### 不使用构建工具（直接在HTML中使用）
如果你对Vue和Node.js工具链不太熟悉，那么使用**Markdown*Palettes**而不使用构建工具也是可以的。
将`dist`目录中的内容复制到你的项目中。
#### 与Vue一起使用
如果你在HTML页面中使用其他Vue组件，建议这样做。
```html
<link rel="stylesheet" href="MarkdownPalettes.css">
<div id="editor-container" style="height: 700px;">
<markdown调色板v-model=“value”></markdown调色板>
</div>
<脚本src=“https://cdn.jsdelivr.net/npm/vue@2.5“></script>
<script src=“MarkdownPalettes.umd.min.js”></script>
<脚本>
  var app = new Vue({
el:“#编辑器容器”，
    组件：{ MarkdownPalettes }，
    数据：() => { 值：'你好，**Markdown*调色板**！' }
  })
</script>
```
#### 不使用 Vue
如果你在HTML页面中没有其他Vue组件，或者你“不喜欢”Vue，那么这很合适。请注意，此包内包含Vue，因此体积更大。
```html
<link rel="stylesheet" href="markdown-palettes.css">
<script src=“markdown调色板.js”></script>
<div id="editor-container" style="height: 700px;">
<div id=“editor”></div>
</div>
<脚本>
  var markdownEditor = new MarkdownPalettes("#editor");；
  markdownEditor.content = "**内容**";；
  var code = markdownEditor.content;；
</script>
```
### 外部资源
默认情况下，bundle 不包含编程语言的语法高亮功能。如果你使用 ES6 模块以外的 bundle，遗憾的是，你必须自己构建才能获得额外的语言支持。如果你使用 ES6 模块，则可以轻松导入它们：
```javascript
// 为 hljs 注册语言
从 'highlight.js/lib/highlight' 导入 hljs
从 'highlight.js/lib/languages/cpp' 导入 cpp
hljs.registerLanguage（cpp）
// 为 CodeMirror 注册语言
导入“codemirror/mode/clike/clike”
```
##文件
_TODO_
##发展
首先，请查看这个仓库。
```控制台
$ yarn          # 安装依赖
$ yarn dev      # 启动开发服务器
$ yarn build    # 构建dist目录
```
###释放
请将`dist`目录一同上传到npm。
##学分
由Luogu开发团队的@darkflames和@lin_toto开发
