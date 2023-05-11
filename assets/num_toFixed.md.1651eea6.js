import{_ as s,c as a,o as n,a as l}from"./app.eda961f5.js";const d=JSON.parse('{"title":"toFixed","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"num/toFixed.md"}'),o={name:"num/toFixed.md"},e=l(`<h1 id="tofixed" tabindex="-1">toFixed <a class="header-anchor" href="#tofixed" aria-hidden="true">#</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">toFixed</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">digits</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"></span></code></pre></div><p>Wrapper of the toFixed function with a cast to number.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toFixed</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toFixed</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1.1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 1.1</span></span>
<span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toFixed</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10.10101</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 10.1</span></span>
<span class="line"></span></code></pre></div>`,5),p=[e];function t(c,r,i,C,y,F){return n(),a("div",null,p)}const D=s(o,[["render",t]]);export{d as __pageData,D as default};