import{_ as L,B as h,o as s,c as e,G as g,w as d,a as u,t as i,j as t,F as _,C as k,e as r,a7 as B,a8 as z,b as C}from"./framework.xRQYDO5j.js";const m={name:"Language",props:{words:Boolean,sentences:Boolean,language:Number,info:Object},data(){return{show_lang:!0,show_zh:!0,query_words:null,query_res:null,show_icon:["fluent:local-language-zi-24-filled","ion:language","material-symbols:language"],display_lang:this.language===1?"英文":"意大利文"}},methods:{showLang(p,n){this.show_lang=p,this.show_zh=n},showResult(){let p=this.query_words;this.query_res=this.info[p]}}},v={key:0},N={key:0,class:"words-explain-en"},V={key:0},G={key:1,class:"words-explain-zh"},R={key:1},j={key:0},D={key:0,class:"words-explain-en"},F={key:1,class:"words-explain-zh"},T={key:2},E={class:"words-list"},I={key:0,class:"words-explain-en"},M={key:1,class:"words-explain-zh"},O={key:2};function S(p,n,y,U,o,w){const f=h("ButtonLink"),x=h("Card"),q=h("CardGrid");return s(),e(_,null,[y.sentences?(s(),e("span",v,[g(f,{icon:o.show_icon[0],onClick:n[0]||(n[0]=l=>w.showLang(!0,!1))},{default:d(()=>[u(i(o.display_lang),1)]),_:1},8,["icon"]),n[8]||(n[8]=u(" | ")),g(f,{icon:o.show_icon[1],onClick:n[1]||(n[1]=l=>w.showLang(!1,!0))},{default:d(()=>n[5]||(n[5]=[u(" 中文 ")])),_:1},8,["icon"]),n[9]||(n[9]=u(" | ")),g(f,{icon:o.show_icon[2],onClick:n[2]||(n[2]=l=>w.showLang(!0,!0))},{default:d(()=>n[6]||(n[6]=[u(" 双语 ")])),_:1},8,["icon"]),n[10]||(n[10]=t("br",null,null,-1)),n[11]||(n[11]=t("br",null,null,-1)),(s(!0),e(_,null,k(y.info,(l,b)=>(s(),e("span",null,[o.show_lang?(s(),e("span",N,[u(i(l[0]+" "),1),o.show_lang&&!o.show_zh?(s(),e("br",V)):r("",!0)])):r("",!0),l[1]&&o.show_zh?(s(),e("span",G,[u(i(l[1]+" "),1),n[7]||(n[7]=t("br",null,null,-1))])):r("",!0)]))),256))])):r("",!0),y.words?(s(),e("div",R,[n[16]||(n[16]=t("h2",null,"查询",-1)),n[17]||(n[17]=t("blockquote",null,"仅限下文收录的查询",-1)),B(t("input",{"onUpdate:modelValue":n[3]||(n[3]=l=>o.query_words=l),placeholder:"输入需要查询的单词"},null,512),[[z,o.query_words]]),t("h3",{onClick:n[4]||(n[4]=(...l)=>w.showResult&&w.showResult(...l))},n[12]||(n[12]=[t("a",null,"点击",-1),u("查询")])),o.query_words?(s(),C(x,{key:0},{title:d(()=>[u(i(o.query_words),1)]),description:d(()=>[o.query_res==null?(s(),e("span",j,"输入错误或未收录")):(s(!0),e(_,{key:1},k(o.query_res,(l,b)=>(s(),e("span",null,[l[1]?(s(),e("span",D,i(l[1]+" "),1)):r("",!0),l[0]?(s(),e("span",F,i(l[0]+" "),1)):r("",!0),n[13]||(n[13]=t("br",null,null,-1)),l[2]?(s(),e("span",T,i(l[2]),1)):r("",!0)]))),256))]),_:1})):r("",!0),n[18]||(n[18]=t("br",null,null,-1)),g(q,null,{title:d(()=>n[14]||(n[14]=[u("全部词汇")])),default:d(()=>[(s(!0),e(_,null,k(y.info,(l,b,A)=>(s(),C(x,null,{title:d(()=>[u(i(b),1)]),description:d(()=>[t("ol",E,[(s(!0),e(_,null,k(l,(a,H)=>(s(),e("li",null,[a[1]?(s(),e("span",I,i(a[1]+" "),1)):r("",!0),a[0]?(s(),e("span",M,i(a[0]+" "),1)):r("",!0),n[15]||(n[15]=t("br",null,null,-1)),a[2]?(s(),e("span",O,i(a[2]),1)):r("",!0)]))),256))])]),_:2},1024))),256))]),_:1})])):r("",!0)],64)}const K=L(m,[["render",S],["__scopeId","data-v-7bbbcb96"]]);export{K as L};
