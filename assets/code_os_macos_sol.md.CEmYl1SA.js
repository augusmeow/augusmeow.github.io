import{_ as a,c as e,o as s,a6 as o}from"./chunks/framework.DkXHzBtz.js";const _=JSON.parse('{"title":"solution","description":"","frontmatter":{},"headers":[],"relativePath":"code/os/macos/sol.md","filePath":"code/os/macos/sol.md","lastUpdated":1700641647000}'),i={name:"code/os/macos/sol.md"},t=o(`<h1 id="solution" tabindex="-1">solution <a class="header-anchor" href="#solution" aria-label="Permalink to &quot;solution&quot;">​</a></h1><h2 id="mac-os-xcrun-error-invalid-active-developer-path-missing-xcrun" tabindex="-1">Mac OS: xcrun: error: invalid active developer path, missing xcrun <a class="header-anchor" href="#mac-os-xcrun-error-invalid-active-developer-path-missing-xcrun" aria-label="Permalink to &quot;Mac OS: xcrun: error: invalid active developer path, missing xcrun&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xcode-select</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xcode-select</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --reset</span></span></code></pre></div><h2 id="mac发热严重" tabindex="-1">Mac发热严重 <a class="header-anchor" href="#mac发热严重" aria-label="Permalink to &quot;Mac发热严重&quot;">​</a></h2><p>mac上vscode始终打开<code>code helper</code>这个进程，发热严重</p><p>vscode 设置 - followSymlinks - 设置为false， 即可解决！</p><p>&quot;search.followSymlinks&quot;: false</p><h2 id="控制台乱码" tabindex="-1">控制台乱码 <a class="header-anchor" href="#控制台乱码" aria-label="Permalink to &quot;控制台乱码&quot;">​</a></h2><p><code>reset</code></p>`,9),c=[t];function l(n,r,d,h,p,u){return s(),e("div",null,c)}const k=a(i,[["render",l]]);export{_ as __pageData,k as default};