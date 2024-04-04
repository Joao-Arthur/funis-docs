import{_ as s,v as a,b as n,R as l}from"./chunks/framework.c933d5cc.js";const d=JSON.parse('{"title":"isValid","description":"","frontmatter":{},"headers":[],"relativePath":"num/is-valid.md","filePath":"num/is-valid.md"}'),o={name:"num/is-valid.md"},e=l(`<h1 id="isvalid" tabindex="-1">isValid <a class="header-anchor" href="#isvalid" aria-label="Permalink to &quot;isValid&quot;">​</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isValid</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span></code></pre></div><p>Returns false for <em>undefined</em>, <em>null</em> and <em>NaN</em>. Returns true otherwise.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">NaN</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// false</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isValid</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">Infinity</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span></code></pre></div>`,6),p=[e];function t(c,r,i,y,A,C){return a(),n("div",null,p)}const F=s(o,[["render",t]]);export{d as __pageData,F as default};