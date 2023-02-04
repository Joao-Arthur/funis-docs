import{_ as s,c as a,o as n,a as e}from"./app.873d31e2.js";const A=JSON.parse('{"title":"compareAsc","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"strings/compare-asc.md"}'),l={name:"strings/compare-asc.md"},o=e(`<h1 id="compareasc" tabindex="-1">compareAsc <a class="header-anchor" href="#compareasc" aria-hidden="true">#</a></h1><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compareAsc</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"></span></code></pre></div><p>Compare the strings in ascending order.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">q</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">p</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Q</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">P</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;">(compareAsc) </span><span style="color:#676E95;font-style:italic;">// =&gt; [&#39;P&#39;, &#39;Q&#39;, &#39;p&#39;, &#39;q&#39;]</span></span>
<span class="line"></span></code></pre></div>`,5),p=[o];function t(c,r,i,D,y,F){return n(),a("div",null,p)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};
