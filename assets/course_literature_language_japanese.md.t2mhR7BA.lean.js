import{_ as z}from"./chunks/TitleFormat.vue_vue_type_script_setup_true_lang.CDFfMxhA.js";import{d as S,o as a,c as e,G as k,j as t,F as i,C as l,t as b,k as u,a as V,e as x,_ as L,a3 as P}from"./chunks/framework.xRQYDO5j.js";import"./chunks/index.B49wiAwd.js";const $=["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","(い)","ゆ","(え)","よ","ら","り","る","れ","ろ","わ","(い)","(う)","(え)","を","ん"],B=["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","へ","ホ","マ","ミ","ム","メ","モ","ヤ","(イ)","ユ","(エ)","ヨ","ラ","リ","ル","レ","ロ","ワ","(イ)","(ウ)","(エ)","ヲ","ン"],J=["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","fu","he","ho","ma","mi","mu","me","mo","ya","i","yu","e","yo","ra","ri","ru","re","ro","wa","i","u","e","o","n"],T=[["a","i","u","e","o"],["ga","gi","gu","ge","go"],["ka","ki","ku","ke","ko"],["za","ji","zu","ze","zo"],["sa","shi","su","se","so"],["da","ji","zu","de","do"],["ta","chi","tsu","te","to"],["ba","bi","bu","be","bo"],["na","ni","nu","ne","no"],["pa","pi","pu","pe","po"],["ha","hi","fu","he","ho"],["ma","mi","mu","me","mo"],["ra","ri","ru","re","ro"],["kya","","kyu","","kyo"],["sha","","shu","","sho"],["ya","","yu","","yo"],["cha","","chu","","cho"],["nya","","nyu","","nyo"],["wa","","o","","n"],["hya","","hyu","","hyo"],["mya","","myu","","myo"],["rya","","ryu","","ryo"],["gya","","gyu","","gyo"],["ja","","ju","","jo"],["bya","","byu","","byo"],["pya","","pyu","","pyo"]],m={hira:$,kana:B,pron:J,pron_all:T},A={class:"head-letter"},D={key:0,class:"head-letter"},F={key:1},I={class:"kana"},O={class:"pron"},E={class:"letter-list"},G={class:"module-modal"},H=["src","alt"],K={class:"letter-list"},U={class:"module-modal"},M=["src","alt"],d=5,Q=S({__name:"JapaneseLetter",setup(N){const p=m.hira,h=m.kana,q=m.pron,g=m.pron_all.flat();let c=[],_=[],y=[];(()=>{for(let r=0;r<p.length;r+=d)c.push(p.slice(r,r+d)),_.push(h.slice(r,r+d)),y.push(q.slice(r,r+d))})();let w=[];(()=>{for(let r in p){const n=Number(r);n<5&&w.push(p[n])}})();const f=(r,n)=>`${"/img/language/japanese/"+r}/${n}.png`;return(r,n)=>(a(),e(i,null,[k(z,{title:"五十音",number:2}),t("table",null,[t("tr",null,[n[0]||(n[0]=t("th",null,null,-1)),(a(!0),e(i,null,l(u(w),(s,o)=>(a(),e("th",A,b(s),1))),256))]),(a(!0),e(i,null,l(u(c),(s,o)=>(a(),e("tr",null,[o!=u(c).length-1?(a(),e("td",D,b(s[0]),1)):(a(),e("td",F)),(a(!0),e(i,null,l(s,(C,j)=>(a(),e("td",null,[V(b(C)+" ",1),n[1]||(n[1]=t("br",null,null,-1)),t("span",I,b(u(_)[o][j]),1),t("span",O,b(u(y)[o][j]),1)]))),256))]))),256))]),k(z,{title:"ALL",number:2}),t("details",null,[n[2]||(n[2]=t("summary",null," 平假名 hira ",-1)),t("ul",E,[(a(!0),e(i,null,l(u(g),(s,o)=>(a(),e("li",G,[s?(a(),e("img",{key:0,src:f("hira",s),alt:s},null,8,H)):x("",!0)]))),256))])]),t("details",null,[n[3]||(n[3]=t("summary",null," 片假名 kana ",-1)),t("ul",K,[(a(!0),e(i,null,l(u(g),(s,o)=>(a(),e("li",U,[s?(a(),e("img",{key:0,src:f("kana",s),alt:s},null,8,M)):x("",!0)]))),256))])])],64))}}),R=L(Q,[["__scopeId","data-v-7a92e9b6"]]),ea=JSON.parse('{"title":"日语","description":"","frontmatter":{"outline":[2,4]},"headers":[],"relativePath":"course/literature/language/japanese.md","filePath":"course/literature/language/japanese.md","lastUpdated":1718273525000}'),W={name:"course/literature/language/japanese.md"},ra=Object.assign(W,{setup(N){return(p,h)=>(a(),e("div",null,[h[0]||(h[0]=P('<h1 id="日语" tabindex="-1">日语 <a class="header-anchor" href="#日语" aria-label="Permalink to &quot;日语&quot;">​</a></h1><p>日语的文字</p><p>日语里有3种文字：平假名(hira)、片假名(kana)和汉字。<br> 平假名和片假名是表音文字，一个假名表示一个音节；汉字是表意文字，每个文字都表示某种语义。<br> 以“我是安娜” （<strong>私（わたし）はアンナです</strong>）这个句子为例，像“我”（私）这样的表示实质性内容或含义的部分要使用汉字。通常情况下，名词使用汉字；动词及形容词使用汉字和平假名。而像「は」或「です」这样的表示语法功能的部分则使用平假名。像“安娜”这样的原本是外语的单词用片假名来书写。—— <a href="https://www.nhk.or.jp/lesson/chinese/questions/0001.html" target="_blank" rel="noreferrer">refer</a></p><p>平假名是由汉字的草书简化得来的，片假名是由汉字的楷书的边旁演变而来的。<br> 一般来说平假名是用来书写日语的单词、词组及日语里一些固有的词语(包括一般的汉字读音标注)，片假名用来书写所谓的外来语。</p><blockquote><p>参考自：<a href="https://www.nhk.or.jp/lesson/zh/letters/hiragana.html" target="_blank" rel="noreferrer">NHK</a></p></blockquote><h2 id="多邻国学习" tabindex="-1">多邻国学习 <a class="header-anchor" href="#多邻国学习" aria-label="Permalink to &quot;多邻国学习&quot;">​</a></h2><p>いつも一人で旅行します<br> 总是一个旅行</p><p>あなたはいつ来ますか？<br> 你什么时候来</p><p>何時にさんぽしますか<br> 几点散步？</p><p>ei go wa hanase masuka<br> 英語は話せますか<br> 会说英语吗</p><p>nihongo ga hanase masuka<br> 日本語が話せますか<br> 会说日语吗</p><p>阴天，晴天，冬天<br> kumo ri hare fuyu<br> くもり はれ ふゆ</p><p>watashiwa i gi ri su jin dewa a rimase n<br> 私はイギリス人ではありません。<br> 我不是英国人。</p><p>ko n ni chiwa o namaewanan to i i masuka<br> こんにちは、お名前は何といいますか？<br> 你好，你叫什么名字？</p><p>よくさんぽします<br> 经常散步</p><p>to ki do ki benkyoushimasu<br> ときどき勉強します<br> 有时学习</p><p>ta naka sa n wa ni hon go to ei go ga hanase masu<br> 田中さんは日本語と英語が話せます<br> 田中先生会说日语和英语。</p><p>ri sa n wa ni hon jin dewa a rimase n<br> リさんは日本人ではありません<br> 老李不是日本人</p><p>a me ri ka jin desuka<br> アメリカ人ですか<br> 你是美国人吗</p><p>mochi ro n chuugokujin desu<br> もちろん中国人です<br> 当然是中国人</p><p>watashi mo chuugokujin desu<br> わたしも中国人です<br> 我也是中国人</p><p>mochi ro n ge n ki desu<br> もちろんげんきです<br> 当然很好</p><p>o na maewanan de su ka<br> お名前は何ですか<br> 你叫什么名字</p><p>o na maewanan toiimasuka<br> お名前は何といいますか<br> 你叫什么名字</p><p>o genki de su ka<br> お元気ですか<br> 你好吗</p><p>takahashi san wa chuugokujin dewa ari masen<br> 高橋さんは中国人ではありません<br> 高桥女士不是中国人</p><p>iie genki dewa ari masen<br> いいえ元気ではありません<br> 不 不好</p><p>chotto nihongo ga hanase masu<br> ちょっと日本語が話せます<br> 会说一点儿日语</p><p>nihongo ga chotto hanase masu<br> 日本語がちょっと話せます<br> 会说一点儿日语</p><p>suzuki san wa zenzen benkyou shi masen<br> 鈴木さんはぜんぜん勉強しません<br> 铃木先生完全不学习</p><p>jon san wa yoku aruki masu<br> ジョンさんはよく歩きます<br> 约翰先生经常步行</p><p>hai genki desu<br> はい元気です<br> 是的 我很好</p><p>wan san to ri san wa yoku sanposhi masu<br> ワンさんとリさんはよくさんぽします<br> 小王和老李经常散步</p><p>(tanaka san wa)zenzen nihongo ga hanase masen<br> (田中さんは)ぜんぜん日本語が話せません<br> （田中先生）完全不会说日语</p><p>chuugoku go wa hanase masuka<br> 中国語は話せますか<br> 会说中文吗</p><p>are to are o kudasai<br> あれとあれをください<br> 请给我那个和那个</p><p>yasai o kudasai<br> 野菜をください<br> 请给我蔬菜</p><p>mizu o nomi masu<br> 水を飲みます<br> 喝水</p><p>kore wa mizu desuka<br> これは水ですか<br> 这是水吗</p><p>iie chuugokujin dewa ari masen<br> いいえ中国人ではありません<br> 不 不是中国人</p><p>gakusei desuka<br> 学生ですか<br> 你是学生吗</p><p>nanji desuka<br> 何時ですか<br> 几点</p><p>ima wa san ji desu<br> 今は三時です<br> 现在是三点</p><p>imawa niji choudo desu<br> 今は二時ちょうどです<br> 现在正好两点</p><p>shichiji ichibun desu<br> 七時一分です<br> 是七点零一分</p><p>gochisousama deshita<br> ごちそうさまでした<br> 谢谢款待</p><p>dore desuka<br> どれですか<br> 是哪个</p><p>gohan wa tabe masen<br> ごはんは食べません<br> 不吃饭</p><p>sakana o tabemasu<br> 魚を食べます<br> 吃鱼</p>',49)),k(R)]))}});export{ea as __pageData,ra as default};
