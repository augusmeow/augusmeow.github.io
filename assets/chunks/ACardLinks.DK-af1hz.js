import{s as v}from"./index.B49wiAwd.js";import{d as T,k as m,o as t,c as s,m as d,p as C,g as $,t as _,e as i,F as y,G as H,Q as B,_ as M,a as A,b as I,n as j}from"./framework.DkXHzBtz.js";const N=["href","target"],V={class:"box"},w={class:"box-header"},z=["innerHTML"],D={key:1,class:"icon"},E=["src","alt"],F={key:2,class:"icon"},G=["id"],R={key:0,class:"italic"},S={key:1},O=["innerHTML"],Q={key:1,class:"desc"},W=["innerHTML"],q=["innerHTML"],J=["innerHTML"],K=["innerHTML"],P={key:4},U=["innerHTML"],L="https://github.com/",X=T({__name:"ACardLink",props:{icon:{},title:{},date:{},desc:{},link:{},target:{},bgColor:{}},setup(k){const a=k,c=m(()=>a.title?v(a.title):""),l=m(()=>typeof a.icon=="object"?a.icon.svg:""),u=(e,o)=>{if(o.includes(L))return h(e,o);let n=o.split(".");n=n.slice(1);let r="";for(let g=0;g<n.length;++g){let f=n[g];if(r+=f,f.indexOf("/")!=-1||g==n.length-1){f.endsWith("/")&&(r=r.slice(0,-1));break}r+="."}return p({text:e,link:o},r)},h=(e,o)=>p({text:e,link:o},o.replace(L,"")),p=(e,o)=>{let n="_blank",r=`<b>${e.text}</b>: `,b=`<a href="${e.link}" target='${n}' rel='noreferrer' > ${o}</a>`;return r+b};return(e,o)=>(t(),s("a",{class:"m-nav-link",href:e.link?e.link:"",target:e.link&&e.target?"_blank":"",rel:"noreferrer",style:B({backgroundColor:e.bgColor?e.bgColor:""})},[d("article",V,[d("div",w,[l.value?(t(),s("div",{key:0,class:"icon",innerHTML:l.value},null,8,z)):e.icon&&typeof e.icon=="string"?(t(),s("div",D,[d("img",{src:C($)(e.icon),alt:e.title,onerror:"this.parentElement.style.display='none'"},null,8,E)])):(t(),s("div",F,"😛")),e.title?(t(),s("h5",{key:3,id:c.value,class:"title"},_(e.title),9,G)):i("",!0)]),e.date?(t(),s("span",R,_(e.date),1)):i("",!0),e.desc?(t(),s("div",S,[typeof e.desc=="string"?(t(),s("p",{key:0,class:"desc",innerHTML:e.desc},null,8,O)):(t(),s("div",Q,[d("ul",null,[e.desc.intro?(t(),s("li",{key:0,class:"desc intro",innerHTML:"<b>Intro: </b>"+e.desc.intro},null,8,W)):i("",!0),e.desc.repo?(t(),s("li",{key:1,class:"desc",innerHTML:h("Repo",e.desc.repo)},null,8,q)):i("",!0),e.desc.homepage?(t(),s("li",{key:2,class:"desc",innerHTML:u("homepage",e.desc.homepage)},null,8,J)):i("",!0),e.desc.guide?(t(),s("li",{key:3,class:"desc",innerHTML:u("guide",e.desc.guide)},null,8,K)):i("",!0),e.desc.others?(t(),s("div",P,[(t(!0),s(y,null,H(e.desc.others,(n,r)=>(t(),s("li",{class:"desc",innerHTML:u(n.text,n.link)},null,8,U))),256))])):i("",!0)])]))])):i("",!0)])],12,N))}}),Y=M(X,[["__scopeId","data-v-b50f978d"]]),Z=["id"],x=["href"],ee=T({__name:"ACardLinks",props:{title:{},items:{},target:{},long:{type:Boolean}},setup(k){const a=k,c=m(()=>a.title?v(a.title):"");return(l,u)=>(t(),s(y,null,[l.title?(t(),s("h2",{key:0,id:c.value,tabindex:"-1"},[A(_(l.title)+" ",1),d("a",{class:"header-anchor",href:`#${c.value}`,"aria-hidden":"true"},null,8,x)],8,Z)):i("",!0),d("div",{class:j(["m-nav-links",l.long?"long-width-links":""])},[(t(!0),s(y,null,H(l.items,({icon:h,title:p,date:e,desc:o,link:n,bgColor:r})=>(t(),I(Y,{key:n,icon:h,title:p,date:e,desc:o,link:n,target:l.target,bgColor:r},null,8,["icon","title","date","desc","link","target","bgColor"]))),128))],2)],64))}}),ne=M(ee,[["__scopeId","data-v-31934e84"]]);export{ne as A};