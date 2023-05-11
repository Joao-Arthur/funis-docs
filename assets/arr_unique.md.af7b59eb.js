import{_ as s,c as a,o as n,a as l}from"./app.eda961f5.js";const F=JSON.parse('{"title":"unique","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"arr/unique.md"}'),e={name:"arr/unique.md"},o=l(`<h1 id="unique" tabindex="-1">unique <a class="header-anchor" href="#unique" aria-hidden="true">#</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">unique</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;font-style:italic;">arr</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"></span></code></pre></div><p>Returns an array with the unique values.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unique</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">john</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">john</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// [1, &#39;john&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unique</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;">]) </span><span style="color:#676E95;font-style:italic;">// [42]</span></span>
<span class="line"></span></code></pre></div>`,5),p=[o];function t(r,c,i,y,C,A){return n(),a("div",null,p)}const u=s(e,[["render",t]]);export{F as __pageData,u as default};