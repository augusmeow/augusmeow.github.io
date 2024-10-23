import{_ as i,c as a,a3 as n,o as p}from"./chunks/framework.xRQYDO5j.js";const c=JSON.parse('{"title":"类","description":"","frontmatter":{},"headers":[],"relativePath":"code/cpp/concept/class.md","filePath":"code/cpp/concept/class.md","lastUpdated":1682241312000}'),l={name:"code/cpp/concept/class.md"};function h(t,s,k,e,d,E){return p(),a("div",null,s[0]||(s[0]=[n(`<h1 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to &quot;类&quot;">​</a></h1><h2 id="一个空类会生成哪些函数" tabindex="-1">一个空类会生成哪些函数 <a class="header-anchor" href="#一个空类会生成哪些函数" aria-label="Permalink to &quot;一个空类会生成哪些函数&quot;">​</a></h2><p>如果一个类是空的，也就是说它没有定义任何成员变量和成员函数，那么它只会生成一个默认的构造函数。如果您显式地定义了构造函数，那么这个空类将会生成您定义的构造函数。</p><p>下面是一个空类的例子：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EmptyClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // This class has no members</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>在这个例子中，类 <code>EmptyClass</code> 没有定义任何成员变量和成员函数。因此，它只会生成一个默认的构造函数。</p><p>如果您想要在空类中添加一些成员函数，可以使用如下代码：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EmptyClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        EmptyClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // This is the default constructor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // This is a member function</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>在这个例子中，类 <code>EmptyClass</code> 除了默认的构造函数外，还定义了一个成员函数 <code>doSomething</code>。</p><p>总之，一个空类会生成一个默认的构造函数，如果您显式地定义了构造函数，那么这个空类将会生成您定义的构造函数。</p><h2 id="类默认的构造函数是什么" tabindex="-1">类默认的构造函数是什么？ <a class="header-anchor" href="#类默认的构造函数是什么" aria-label="Permalink to &quot;类默认的构造函数是什么？&quot;">​</a></h2><p>类的默认构造函数是一种特殊的构造函数，用于在创建对象时初始化对象的成员变量。如果您没有定义任何构造函数，那么编译器会自动生成一个默认构造函数。</p><p>下面是一个简单的例子，演示了类的默认构造函数的使用：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;iostream&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Point</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Create an object of class Point</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Point p;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Initialize the object&#39;s member variables</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    p.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    p.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Print the object&#39;s member variables</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;x = &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> endl;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;y = &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> endl;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在这个例子中，类 <code>Point</code> 包含两个成员变量 <code>x</code> 和 <code>y</code>。我们创建了一个 <code>Point</code> 类的对象 <code>p</code>，并且通过默认构造函数初始化了这个对象的成员变量。</p><p>在这个例子中，编译器会自动生成一个默认的构造函数，这个构造函数会将对象的成员变量初始化为默认值。在这个例子中，因为我们没有定义构造函数，所以编译器会自动生成一个默认的构造函数，将对象的成员变量 x 和 y 初始化为 0。</p><h2 id="只定义析构函数-会自动生成哪些构造函数" tabindex="-1">只定义析构函数，会自动生成哪些构造函数？ <a class="header-anchor" href="#只定义析构函数-会自动生成哪些构造函数" aria-label="Permalink to &quot;只定义析构函数，会自动生成哪些构造函数？&quot;">​</a></h2><p>如果你只定义了析构函数，那么编译器会自动为你生成一个默认构造函数和一个复制构造函数。这两个函数都没有参数，并且会执行默认的行为。</p><p>默认构造函数会将类的所有成员变量都初始化为它们的默认值（例如，整型会被初始化为0，指针会被初始化为nullptr）。复制构造函数会将类的所有成员变量都复制到新的对象中，这样新的对象就和原来的对象完全一样了。</p><p>这些默认生成的构造函数可能会带来一些问题，比如内存泄漏。如果类中有指针成员变量，那么默认构造函数可能会导致内存泄漏，因为它不会分配内存给指针指向的对象。复制构造函数也可能会导致问题，因为它只是简单地复制了指针，而不会创建新的对象。因此，如果你定义了析构函数，那么你应该同时定义构造函数，以避免这些问题。</p><p>当你定义了析构函数时，你应该同时定义构造函数来避免内存泄漏和其他问题。构造函数有多种类型，包括默认构造函数、复制构造函数、转换构造函数和移动构造函数。每一种构造函数都有它的用途和作用，你应该根据你的需要来选择使用哪一种构造函数。</p><p>默认构造函数是一种不带参数的构造函数。它用于创建一个对象时，如果没有提供任何参数，就会使用默认构造函数来初始化对象。复制构造函数是一种接受一个类型相同的对象作为参数的构造函数。它用于创建一个新的对象，并复制原来的对象的成员变量。</p><p>转换构造函数是一种接受一个不同类型的对象作为参数的构造函数。它可以用来将一个对象转换为另一个类型的对象。移动构造函数是一种接受一个类型相同的对象作为参数的构造函数，但是它不会复制原来的对象，而是将原来的对象移动到新的对象上。</p><p>定义构造函数时，你可以指定不同的参数列表来满足不同的需求。例如，你可以定义一个默认构造函数来初始化对象的成员变量，也可以定义一个接受参数的构造函数来根据参数来初始化对象的成员变量。你也可以定义一个复制构造函数来将一个对象复制到另一个对象上，或者定义一个转换构造函数来将一个对象转换为另一个类型的对象。</p><p>定义构造函数时，你应该注意几个重要的方面。首先，构造函数的名字应该和类的名字相同，这样编译器才能识别它是一个构造函数。其次，构造函数不应该有返回值，因为它的作用是创建一个对象，而不是返回一个值。最后，构造函数应该避免执行抛出异常的代码，因为如果构造函数抛出异常，程序将无法继续运行。</p><p>总之，构造函数是非常重要的，它可以让你创建一个对象并初始化它的成员变量。如果你只定义了析构函数，那么编译器会自动为你生成默认的构造函数和复制构造函数，但这些默认生成的函数可能不能满足你的需求，因此你应该自己定义构造函数，以便根据你的需要来初始化对象的成员变量。构造函数有多种类型，包括默认构造函数、复制构造函数、转换构造函数和移动构造函数，每一种构造函数都有它的用途和作用。例如，默认构造函数用于创建一个对象时，如果没有提供任何参数，就会使用默认构造函数来初始化对象。复制构造函数用于创建一个新的对象，并复制原来的对象的成员变量。转换构造函数用于将一个对象转换为另一个类型的对象。移动构造函数用于将一个对象移动到另一个对象上。</p><p>通常情况下，类中会包含多个构造函数，每个构造函数都有它的用途和作用。例如，一个类可能包含一个默认构造函数和一个接受参数的构造函数，这样你就可以根据需要选择使用哪一个构造函数来初始化对象的成员变量。同时，你还可以定义复制构造函数和转换构造函数，以便满足不同的需求。总之，定义构造函数可以帮助你创建对象并初始化它的成员变量，这样你就可以使用这些对象来完成特定的任务。在定义构造函数时，你应该注意构造函数的名字应该和类的名字相同，并且构造函数不应该有返回值。此外，构造函数应该避免执行抛出异常的代码，因为如果构造函数抛出异常，程序将无法继续运行。</p><p>总结一下，构造函数是非常重要的，它可以让你创建一个对象并初始化它的成员变量。如果你只定义了析构函数，那么编译器会自动为你生成默认的构造函数和复制构造函数，但这些默认生成的函数可能不能满足你的需求，因此你应该自己定义构造函数，以便根据你的需要来初始化对象的成员变量。构造函数有多种类型，包括默认构造函数、复制构造函数、转换构造函数和移动构造函数，每一种构造函数都有它的用途和作用。</p><h2 id="如何实现一个不能在堆分配的类-如何实现一个不能被继承的类" tabindex="-1">如何实现一个不能在堆分配的类，如何实现一个不能被继承的类 <a class="header-anchor" href="#如何实现一个不能在堆分配的类-如何实现一个不能被继承的类" aria-label="Permalink to &quot;如何实现一个不能在堆分配的类，如何实现一个不能被继承的类&quot;">​</a></h2><p>如何实现一个不能在堆上分配的类，如果要在堆上分配就是会使用new，所以可以重载new 操作符，并将其重载于class A的private内：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a){}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _x;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setVal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    _x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _x;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> operator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">size_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>如何实现一个不能被继承的类，这里有一个比较简单的方法，利用C++11的新关键字final：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> B</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,33)]))}const g=i(l,[["render",h]]);export{c as __pageData,g as default};
