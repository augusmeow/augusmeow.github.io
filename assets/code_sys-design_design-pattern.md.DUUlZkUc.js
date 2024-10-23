import{_ as n,c as l,a3 as t,G as p,j as i,a as e,B as h,o as k}from"./chunks/framework.xRQYDO5j.js";const u=JSON.parse('{"title":"设计模式","description":"","frontmatter":{},"headers":[],"relativePath":"code/sys-design/design-pattern.md","filePath":"code/sys-design/design-pattern.md","lastUpdated":1716257013000}'),r={name:"code/sys-design/design-pattern.md"};function d(E,s,g,c,o,y){const a=h("PDF");return k(),l("div",null,[s[0]||(s[0]=t(`<h1 id="设计模式" tabindex="-1">设计模式 <a class="header-anchor" href="#设计模式" aria-label="Permalink to &quot;设计模式&quot;">​</a></h1><h2 id="单例模式的双锁分别有什么作用" tabindex="-1">单例模式的双锁分别有什么作用 <a class="header-anchor" href="#单例模式的双锁分别有什么作用" aria-label="Permalink to &quot;单例模式的双锁分别有什么作用&quot;">​</a></h2><h2 id="实现单例设计模式-懒汉-饿汉" tabindex="-1">实现单例设计模式（懒汉，饿汉） <a class="header-anchor" href="#实现单例设计模式-懒汉-饿汉" aria-label="Permalink to &quot;实现单例设计模式（懒汉，饿汉）&quot;">​</a></h2><p>单例模式详细：<a href="https://www.cnblogs.com/sunchaothu/p/10389842.html" target="_blank" rel="noreferrer">链接</a></p><blockquote><p><a href="https://stackoverflow.com/a/92193/17744936" target="_blank" rel="noreferrer">singleton-how-should-it-be-used</a></p></blockquote><ul><li>意图：保证一个类仅有一个实例，并提供一个访问他的全局访问点。</li><li>主要解决：一个全局使用的类频繁的创建与销毁。</li><li>何时使用：当您想控制实例数目节省系统资源的时候。</li><li>如何解决：判断系统是否已经有这个单例，如果有则返回，如果没有则创建。</li><li>关键代码：构造函数是私有的。</li></ul><p>饿汉：在类加载时就创建实例；懒汉：在第一次使用时进行实例化</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Singleton</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Singleton instance;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  private:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ~Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Singleton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Singleton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> operator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Singleton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    static</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Singleton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> instance;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// initialize defaultly</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Singleton </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::instance;</span></span></code></pre></div><h2 id="简述常见的工厂模式以及单例模式的使用场景" tabindex="-1">简述常见的工厂模式以及单例模式的使用场景 <a class="header-anchor" href="#简述常见的工厂模式以及单例模式的使用场景" aria-label="Permalink to &quot;简述常见的工厂模式以及单例模式的使用场景&quot;">​</a></h2><h2 id="如何实现单例模式-如何避免发生对象的用户复制行为-如何实现线程安全的单例模式-dclp是什么-有什么问题" tabindex="-1">如何实现单例模式？如何避免发生对象的用户复制行为？如何实现线程安全的单例模式？DCLP是什么，有什么问题？ <a class="header-anchor" href="#如何实现单例模式-如何避免发生对象的用户复制行为-如何实现线程安全的单例模式-dclp是什么-有什么问题" aria-label="Permalink to &quot;如何实现单例模式？如何避免发生对象的用户复制行为？如何实现线程安全的单例模式？DCLP是什么，有什么问题？&quot;">​</a></h2><ul><li><p>将构造函数、析构函数、复制构造函数、赋值操作符声明为私有，即可实现单例模式 单例模式实现代码通常为：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Singleton</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    static</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Singleton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Instance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">protected:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Singleton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _instance;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Singleton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::_instance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nullptr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Singleton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Singleton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Instance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_instance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nullptr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    _instance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Singleton;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _instance;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>避免用户的复制行为，可以将复制构造函数声明为private或者使用C++11中的delete语法。</p></li><li><p>实现线程安全的单例模式：上面实现中的GetInstance()不是线程安全的，因为在单例的静态初始化中存在竞争条件。如果碰巧有多个线程在同时调用该方法，那么就有可能被构造多次。</p><p><code>比较简单</code>的做法是在存在竞争条件的地方加上互斥锁。这样做的代价是开销比较高。因为每次方法调用时都需要加锁。<br><code>比较常用</code>的做法是使用双重检查锁定模式(DCLP) 。但是DCLP并不能保证在所有编译器和处理器内存模型下都能正常工作。如，共享内存的对称多处理器通常突发式提交内存写操作，这会造成不同线程的写操作重新排序。这种情况通常可以采用volatile解决，他能将读写操作同步到易变数据中，但这样在多线程环境下仍旧存在问题。</p></li></ul>`,11)),p(a,{url:"/pdf/DDJ_Jul_Aug_2004_revised.pdf"}),s[1]||(s[1]=i("h2",{id:"手写生产者消费者模型",tabindex:"-1"},[e("手写生产者消费者模型 "),i("a",{class:"header-anchor",href:"#手写生产者消费者模型","aria-label":'Permalink to "手写生产者消费者模型"'},"​")],-1))])}const D=n(r,[["render",d]]);export{u as __pageData,D as default};
