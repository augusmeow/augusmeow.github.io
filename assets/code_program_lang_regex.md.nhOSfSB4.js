import{_ as e,c as a,o,a6 as r}from"./chunks/framework.DkXHzBtz.js";const m=JSON.parse('{"title":"正则表达式","description":"","frontmatter":{"icon":"file-icons:regex"},"headers":[],"relativePath":"code/program/lang/regex.md","filePath":"code/program/lang/regex.md","lastUpdated":1686729147000}'),t={name:"code/program/lang/regex.md"},c=r('<h1 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h1><p>匹配中文 <code>[\\u4e00-\\u9fa5]</code><br> 匹配英文 <code>[a-zA-Z]</code><br> 匹配数字 <code>[0-9]</code></p><p>匹配 字母+空格+汉字，形如”a 好“，<code>[a-zA-Z] [\\u4e00-\\u9fa5]</code><br> 那么如果只匹配符合这个格式的空格呢？</p><h2 id="正则表达式匹配空行、空白行" tabindex="-1">正则表达式匹配空行、空白行 <a class="header-anchor" href="#正则表达式匹配空行、空白行" aria-label="Permalink to &quot;正则表达式匹配空行、空白行&quot;">​</a></h2><p>两种方法</p><ul><li><code>^(\\t)*$\\n</code></li><li><code>/^\\s*$/</code></li></ul>',6),d=[c];function n(i,l,s,_,p,h){return o(),a("div",null,d)}const f=e(t,[["render",n]]);export{m as __pageData,f as default};