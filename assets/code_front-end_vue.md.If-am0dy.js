import{_ as a,c as i,a3 as e,o as t}from"./chunks/framework.xRQYDO5j.js";const n="/img/code/vue-ui-frame-npm-trends.png",l="/img/code/vue-ui-frame-npm-stats.png",g=JSON.parse('{"title":"Vue","description":"","frontmatter":{},"headers":[],"relativePath":"code/front-end/vue.md","filePath":"code/front-end/vue.md","lastUpdated":1686726335000}'),h={name:"code/front-end/vue.md"};function p(r,s,k,E,o,d){return t(),i("div",null,s[0]||(s[0]=[e(`<h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h1><h2 id="tick" tabindex="-1">tick <a class="header-anchor" href="#tick" aria-label="Permalink to &quot;tick&quot;">​</a></h2><p>tick 是 Vue.js 中的一个异步更新机制，用于在下一次 DOM 更新后运行一段代码。在使用 Vue.js 时，所有的 DOM 更新操作实际上都是异步的，Vue.js 会将它们放到一个队列里，然后在下一个 tick 中统一更新。这样可以提高性能和用户体验，避免出现大量的 DOM 重绘和回流。使用 <code>$nextTick()</code> 方法可以让我们在下一个 tick 中获得 DOM 更新后最新的状态。</p><h2 id="vue-组件之间相互传值的方式" tabindex="-1">vue 组件之间相互传值的方式 <a class="header-anchor" href="#vue-组件之间相互传值的方式" aria-label="Permalink to &quot;vue 组件之间相互传值的方式&quot;">​</a></h2><blockquote><p><a href="https://segmentfault.com/a/1190000022700216" target="_blank" rel="noreferrer">refer</a></p></blockquote><p><strong>综述：</strong></p><ul><li>父子通信： 父向子传递数据是通过 <code>props</code>，子向父是通过 <code>$emit</code>；通过 <code>$parent / $children</code> 通信；<code>$ref</code> 也可以访问组件实例；<code>provide / inject</code> ；<a href="https://segmentfault.com/a/1190000022708579" target="_blank" rel="noreferrer">$attrs / $listeners</a></li><li>兄弟通信： <code>Bus</code>；<code>Vuex</code></li><li>跨级通信： <code>Bus</code>；<code>Vuex</code>；<code>provide / inject</code> ; <a href="https://segmentfault.com/a/1190000022708579" target="_blank" rel="noreferrer">$attrs / $listeners</a></li></ul><h3 id="父组件向子组件传值" tabindex="-1">父组件向子组件传值 <a class="header-anchor" href="#父组件向子组件传值" aria-label="Permalink to &quot;父组件向子组件传值&quot;">​</a></h3><h3 id="子组件向父组件传值" tabindex="-1">子组件向父组件传值 <a class="header-anchor" href="#子组件向父组件传值" aria-label="Permalink to &quot;子组件向父组件传值&quot;">​</a></h3><h3 id="兄弟组件之间传值" tabindex="-1">兄弟组件之间传值 <a class="header-anchor" href="#兄弟组件之间传值" aria-label="Permalink to &quot;兄弟组件之间传值&quot;">​</a></h3><h3 id="多层父子组件通信" tabindex="-1">多层父子组件通信 <a class="header-anchor" href="#多层父子组件通信" aria-label="Permalink to &quot;多层父子组件通信&quot;">​</a></h3><h2 id="slot" tabindex="-1">slot <a class="header-anchor" href="#slot" aria-label="Permalink to &quot;slot&quot;">​</a></h2><blockquote><p><a href="https://cn.vuejs.org/guide/components/slots.html#scoped-slots" target="_blank" rel="noreferrer">refer</a></p></blockquote><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">BaseLayout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template v-slot:header&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;!-- header 插槽的内容放这里 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">BaseLayout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MyComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template #header=&quot;headerProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{ headerProps }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template #default=&quot;defaultProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{ defaultProps }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;template #footer=&quot;footerProps&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{ footerProps }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/template&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">MyComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="fetch-api" tabindex="-1">Fetch API <a class="header-anchor" href="#fetch-api" aria-label="Permalink to &quot;Fetch API&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Wikipedia Page: {{ pageTitle }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pageContent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pageTitle: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pageContent: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  mounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> endpoint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;https://en.wikipedia.org/w/api.php?action=parse&amp;page=Template:IPhone_models_minimal&amp;prop=text&amp;format=json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(endpoint)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.pageTitle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.parse.title;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.pageContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.parse.text[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="frameworks" tabindex="-1">Frameworks <a class="header-anchor" href="#frameworks" aria-label="Permalink to &quot;Frameworks&quot;">​</a></h2><h3 id="vue-ui-frameworks" tabindex="-1">Vue UI frameworks <a class="header-anchor" href="#vue-ui-frameworks" aria-label="Permalink to &quot;Vue UI frameworks&quot;">​</a></h3><blockquote><p><a href="https://www.monocubed.com/blog/vuejs-frameworks/" target="_blank" rel="noreferrer">refer</a></p></blockquote><ul><li name="logos:vuetifyjs"><a href="https://vuetifyjs.com/" target="_blank" rel="noreferrer">Vuetify</a> :icon</li><li><a href="https://bootstrap-vue.org/" target="_blank" rel="noreferrer">Bootstrap Vue</a></li><li><a href="https://quasar.dev/" target="_blank" rel="noreferrer">Quasar Framework</a></li><li><a href="https://vuematerial.io/" target="_blank" rel="noreferrer">Vue Material</a></li></ul><blockquote><p>Comparing the popularity of the 4 Vue frameworks on <a href="https://npmtrends.com/" target="_blank" rel="noreferrer">npm trends</a></p></blockquote><p><img src="`+n+'" alt="vue-ui-frame-npm-trends"><img src="'+l+'" alt="vue-ui-frame-npm-stats"></p><h3 id="static-site-frameworks" tabindex="-1">Static Site frameworks <a class="header-anchor" href="#static-site-frameworks" aria-label="Permalink to &quot;Static Site frameworks&quot;">​</a></h3><ul><li><a href="./vuepress">vuepress</a></li><li><a href="./vitepress">vitepress</a></li></ul><h3 id="ssr-frameworks" tabindex="-1">SSR frameworks <a class="header-anchor" href="#ssr-frameworks" aria-label="Permalink to &quot;SSR frameworks&quot;">​</a></h3><p>Server-Side Rendering</p><ul><li>nuxtjs</li></ul><h2 id="about-script" tabindex="-1">About <code>&lt;script&gt;</code> <a class="header-anchor" href="#about-script" aria-label="Permalink to &quot;About `&lt;script&gt;`&quot;">​</a></h2><p><code>&lt;script lang=&quot;ts&quot;&gt;</code> 与 <code>&lt;script&gt;</code> 与 <code>&lt;script setup lang=&quot;ts&quot;&gt;</code> 的区别</p><h2 id="qa" tabindex="-1">QA <a class="header-anchor" href="#qa" aria-label="Permalink to &quot;QA&quot;">​</a></h2><h3 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-label="Permalink to &quot;event&quot;">​</a></h3><p>在 Vue 中，<code>@input</code> 绑定的方法中的 <code>event</code> 对象是指原生的事件对象，而 <code>$event</code> 则是 Vue 包装过的事件对象。当我们在绑定 <code>@input</code> 时，使用 <code>$event</code> 可以保证我们在方法内部可以正确地获取到 input 元素的值，从而进行一些校验或其他操作。</p>',33)]))}const u=a(h,[["render",p]]);export{g as __pageData,u as default};
