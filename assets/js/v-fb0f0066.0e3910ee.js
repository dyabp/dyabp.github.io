(self.webpackChunkdyabp=self.webpackChunkdyabp||[]).push([[7170],{2075:(s,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>D});var a=e(8133);const l=(0,a.Wm)("h1",{id:"快速上手"},[(0,a.Wm)("a",{class:"header-anchor",href:"#快速上手"},"#"),(0,a.Uk)(" 快速上手")],-1),t=(0,a.Wm)("h2",{id:"依赖环境"},[(0,a.Wm)("a",{class:"header-anchor",href:"#依赖环境"},"#"),(0,a.Uk)(" 依赖环境")],-1),r={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("Node.js v12+"),o={href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("Yarn v1 classic"),p=(0,a.Uk)(" （可选）"),i=(0,a.Wm)("h2",{id:"手动安装"},[(0,a.Wm)("a",{class:"header-anchor",href:"#手动安装"},"#"),(0,a.Uk)(" 手动安装")],-1),m=(0,a.Wm)("p",null,"这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。",-1),d=(0,a.uE)('<li><p><strong>步骤1</strong>: 创建并进入一个新目录</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> vuepress-starter\n<span class="token builtin class-name">cd</span> vuepress-starter\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>',1),W=(0,a.Wm)("p",null,[(0,a.Wm)("strong",null,"步骤2"),(0,a.Uk)(": 初始化项目")],-1),b=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"git"),(0,a.Uk)(" init\n"),(0,a.Wm)("span",{class:"token function"},"yarn"),(0,a.Uk)(" init\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])],-1),g=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"git"),(0,a.Uk)(" init\n"),(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" init\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])],-1),k=(0,a.Wm)("p",null,[(0,a.Wm)("strong",null,"步骤3"),(0,a.Uk)(": 将 VuePress 安装为本地依赖")],-1),h=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"yarn"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"add"),(0,a.Uk)(" -D vuepress@next\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),v=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"install"),(0,a.Uk)(" -D vuepress@next\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),f=(0,a.Wm)("strong",null,"步骤4",-1),U=(0,a.Uk)(": 在 "),_=(0,a.Wm)("code",null,"package.json",-1),w=(0,a.Uk)(" 中添加一些 "),x={href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("scripts"),P=(0,a.uE)('<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',1),q=(0,a.uE)('<li><p><strong>步骤5</strong>: 将默认的临时目录和缓存目录添加到 <code>.gitignore</code> 文件中</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;node_modules<span class="token entity" title="\\n">\\n</span>.temp<span class="token entity" title="\\n">\\n</span>.cache&#39;</span> <span class="token operator">&gt;&gt;</span> .gitignore\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p><strong>步骤6</strong>: 创建你的第一篇文档</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs\n<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>',2),j=(0,a.Wm)("p",null,[(0,a.Wm)("strong",null,"步骤7"),(0,a.Uk)(": 在本地启动服务器来开发你的文档网站")],-1),N=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"yarn"),(0,a.Uk)(" docs:dev\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),V=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run docs:dev\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),R=(0,a.Uk)("VuePress 会在 "),E={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},M=(0,a.Uk)("http://localhost:8080"),Y=(0,a.Uk)(" 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。"),A=(0,a.Uk)("现在，你应该已经有了一个简单可用的 VuePress 文档网站。接下来，了解一下 VuePress "),C=(0,a.Uk)("配置"),H=(0,a.Uk)(" 相关的内容。"),D={render:function(s,n){const e=(0,a.up)("OutboundLink"),D=(0,a.up)("CodeGroupItem"),z=(0,a.up)("CodeGroup"),G=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,t,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)("a",r,[u,(0,a.Wm)(e)])]),(0,a.Wm)("li",null,[(0,a.Wm)("a",o,[c,(0,a.Wm)(e)]),p])]),i,m,(0,a.Wm)("ul",null,[d,(0,a.Wm)("li",null,[W,(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,{title:"YARN",active:""},{default:(0,a.w5)((()=>[b])),_:1}),(0,a.Wm)(D,{title:"NPM"},{default:(0,a.w5)((()=>[g])),_:1})])),_:1})]),(0,a.Wm)("li",null,[k,(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,{title:"YARN",active:""},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(D,{title:"NPM"},{default:(0,a.w5)((()=>[v])),_:1})])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[f,U,_,w,(0,a.Wm)("a",x,[y,(0,a.Wm)(e)])]),P]),q,(0,a.Wm)("li",null,[j,(0,a.Wm)(z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,{title:"YARN",active:""},{default:(0,a.w5)((()=>[N])),_:1}),(0,a.Wm)(D,{title:"NPM"},{default:(0,a.w5)((()=>[V])),_:1})])),_:1}),(0,a.Wm)("p",null,[R,(0,a.Wm)("a",E,[M,(0,a.Wm)(e)]),Y])])]),(0,a.Wm)("p",null,[A,(0,a.Wm)(G,{to:"/guide/configuration.html"},{default:(0,a.w5)((()=>[C])),_:1}),H])],64)}}},5472:(s,n,e)=>{"use strict";e.r(n),e.d(n,{data:()=>a});const a={key:"v-fb0f0066",path:"/guide/getting-started.html",title:"快速上手",frontmatter:{},excerpt:"",headers:[{level:2,title:"依赖环境",slug:"依赖环境",children:[]},{level:2,title:"手动安装",slug:"手动安装",children:[]}],filePathRelative:"guide/getting-started.md",git:{updatedTime:1612069518e3,contributors:[]}}}}]);