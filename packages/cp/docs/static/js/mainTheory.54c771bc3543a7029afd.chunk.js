(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{100:function(t,n,e){var r=e(80),i=e(103),o=e(104),c=Object.defineProperty;n.f=e(85)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},101:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},102:function(t,n,e){"use strict";var r=e(80);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},103:function(t,n,e){t.exports=!e(85)&&!e(84)(function(){return 7!=Object.defineProperty(e(114)("div"),"a",{get:function(){return 7}}).a})},104:function(t,n,e){var r=e(82);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},105:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},106:function(t,n,e){var r=e(99);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},107:function(t,n,e){var r=e(82),i=e(94),o=e(83)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},108:function(t,n,e){var r=e(86);t.exports=function(t){return Object(r(t))}},109:function(t,n,e){var r=e(87),i=e(86);t.exports=function(t){return function(n,e){var o,c,u=String(i(n)),a=r(e),l=u.length;return a<0||a>=l?t?"":void 0:(o=u.charCodeAt(a))<55296||o>56319||a+1===l||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):o:t?u.slice(a,a+2):c-56320+(o-55296<<10)+65536}}},110:function(t,n,e){var r=e(94),i=e(83)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},111:function(t,n){t.exports=!1},112:function(t,n,e){"use strict";var r=e(89);e(113)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},113:function(t,n,e){var r=e(81),i=e(88),o=e(90),c=e(98),u=e(106),a=function(t,n,e){var l,s,f,v,p=t&a.F,h=t&a.G,g=t&a.S,d=t&a.P,x=t&a.B,y=h?r:g?r[n]||(r[n]={}):(r[n]||{}).prototype,_=h?i:i[n]||(i[n]={}),b=_.prototype||(_.prototype={});for(l in h&&(e=n),e)f=((s=!p&&y&&void 0!==y[l])?y:e)[l],v=x&&s?u(f,r):d&&"function"==typeof f?u(Function.call,f):f,y&&c(y,l,f,t&a.U),_[l]!=f&&o(_,l,v),d&&b[l]!=f&&(b[l]=f)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},114:function(t,n,e){var r=e(82),i=e(81).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},115:function(t,n,e){t.exports=e(95)("native-function-to-string",Function.toString)},116:function(t,n,e){var r=e(80),i=e(99),o=e(83)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[o])?n:i(e)}},117:function(t,n,e){"use strict";var r=e(80),i=e(108),o=e(91),c=e(87),u=e(92),a=e(93),l=Math.max,s=Math.min,f=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;e(97)("replace",2,function(t,n,e,h){return[function(r,i){var o=t(this),c=null==r?void 0:r[n];return void 0!==c?c.call(r,o,i):e.call(String(o),r,i)},function(t,n){var i=h(e,t,this,n);if(i.done)return i.value;var f=r(t),v=String(this),p="function"==typeof n;p||(n=String(n));var d=f.global;if(d){var x=f.unicode;f.lastIndex=0}for(var y=[];;){var _=a(f,v);if(null===_)break;if(y.push(_),!d)break;""===String(_[0])&&(f.lastIndex=u(v,o(f.lastIndex),x))}for(var b,m="",w=0,S=0;S<y.length;S++){_=y[S];for(var E=String(_[0]),C=l(s(c(_.index),v.length),0),P=[],j=1;j<_.length;j++)P.push(void 0===(b=_[j])?b:String(b));var A=_.groups;if(p){var k=[E].concat(P,C,v);void 0!==A&&k.push(A);var I=String(n.apply(void 0,k))}else I=g(E,v,C,P,A,n);C>=w&&(m+=v.slice(w,C)+I,w=C+E.length)}return m+v.slice(w)}];function g(t,n,r,o,c,u){var a=r+t.length,l=o.length,s=p;return void 0!==c&&(c=i(c),s=v),e.call(u,s,function(e,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(a);case"<":u=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return e;if(s>l){var v=f(s/10);return 0===v?e:v<=l?void 0===o[v-1]?i.charAt(1):o[v-1]+i.charAt(1):e}u=o[s-1]}return void 0===u?"":u})}})},118:function(t,n,e){"use strict";var r=e(107),i=e(80),o=e(116),c=e(92),u=e(91),a=e(93),l=e(89),s=e(84),f=Math.min,v=[].push,p=!s(function(){RegExp(4294967295,"y")});e(97)("split",2,function(t,n,e,s){var h;return h="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(i,t,n);for(var o,c,u,a=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,p=void 0===n?4294967295:n>>>0,h=new RegExp(t.source,s+"g");(o=l.call(h,i))&&!((c=h.lastIndex)>f&&(a.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&v.apply(a,o.slice(1)),u=o[0].length,f=c,a.length>=p));)h.lastIndex===o.index&&h.lastIndex++;return f===i.length?!u&&h.test("")||a.push(""):a.push(i.slice(f)),a.length>p?a.slice(0,p):a}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var i=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,i,r):h.call(String(i),e,r)},function(t,n){var r=s(h,t,this,n,h!==e);if(r.done)return r.value;var l=i(t),v=String(this),g=o(l,RegExp),d=l.unicode,x=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(p?"y":"g"),y=new g(p?l:"^(?:"+l.source+")",x),_=void 0===n?4294967295:n>>>0;if(0===_)return[];if(0===v.length)return null===a(y,v)?[v]:[];for(var b=0,m=0,w=[];m<v.length;){y.lastIndex=p?m:0;var S,E=a(y,p?v:v.slice(m));if(null===E||(S=f(u(y.lastIndex+(p?0:m)),v.length))===b)m=c(v,m,d);else{if(w.push(v.slice(b,m)),w.length===_)return w;for(var C=1;C<=E.length-1;C++)if(w.push(E[C]),w.length===_)return w;m=b=S}}return w.push(v.slice(b)),w}]})},130:function(t,n,e){var r=e(183);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(10).default)("05db164c",r,!0,{})},182:function(t,n,e){"use strict";var r=e(130);e.n(r).a},183:function(t,n,e){(t.exports=e(9)(!1)).push([t.i,".img-list[data-v-77347c2b] {\n  margin: 20px auto;\n}\n.img-list ul[data-v-77347c2b] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.img-list ul li[data-v-77347c2b] {\n  margin: 0 50px;\n  text-align: center;\n}\n.img-list ul li img[data-v-77347c2b] {\n  margin: 0 auto;\n  display: block;\n  width: 100%;\n}\n.img-list ul li span[data-v-77347c2b] {\n  display: inline-block;\n  line-height: 30px;\n  font-size: 12px;\n}\n",""])},215:function(t,n,e){"use strict";e.r(n);var r=e(121),i=e(120),o=e(119),c={components:{iArticle:r.a,inAnchor:i.a},data:function(){return{code:o.a}}},u=(e(182),e(1)),a=Object(u.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("i-article",[e("article",[e("h1",[t._v("Main Concept")]),t._v(" "),e("p",[t._v("本文介绍关于"),e("code",[e("strong",[t._v("CP")])]),t._v("背后的设计思路，主要包含：")]),t._v(" "),e("ul",[e("li",[t._v("从组件到模块，再到模板，最终到页面的代码组织形式，以及该形式所践行的Atomic Design的理论。")]),t._v(" "),e("li",[t._v("CP如何基于"),e("a",{attrs:{href:"https://cn.vuejs.org"}},[t._v("vue.js")]),t._v("强大的生态系统(vue全家桶和开源组件库)和完善的工具链(vue-cli)来实现基于vue-cli插件机制的模板复用方案。")]),t._v(" "),e("li",[t._v("CP所包含的一些主要代码库，以及它们都做了什么。")])]),t._v(" "),e("alert",[e("code",[e("router-link",{attrs:{to:"/docs/start"}},[t._v("Quick Start")])],1),t._v("这一章节通过真实的例子演示了"),e("code",[t._v("CP")]),t._v("的主要功能，对于理解其原理非常有帮助，建议先阅读之后，再继续探索。")]),t._v(" "),e("inAnchor",{attrs:{title:"CP践行了Atomic Design",h2:""}}),t._v(" "),e("p",[t._v("CP践行了Atomic Design")]),t._v(" "),e("inAnchor",{attrs:{title:"基于vue-cli的模板复用机制",h2:""}}),t._v(" "),e("p",[t._v("基于vue-cli的模板复用机制")]),t._v(" "),e("inAnchor",{attrs:{title:"主要代码库",h2:""}}),t._v(" "),e("p",[t._v("CP所包含的一些主要代码库")]),t._v(" "),e("inAnchor",{attrs:{title:"CP是模板与模块的集合，是如何复用这些资源的一种方案",h2:""}}),t._v(" "),e("p",[t._v("\n            CP是一套解决方案，基于成熟的理论，构建与成熟的开源项目之上，\n            利用现有的组件库(iView、Element)开发模块、模板，\n            使用完善的工具链(vue-cli)及其插件机制来添加模板。\n        ")]),t._v(" "),e("p",[t._v("\n            CP中的模板可以通过插件机制添加到项目中，也可以直接下载并粘贴代码。\n            即使你不打算使用这些页面模板和模块工具，在解决相似场景的问题时，他们也可以作为参考。\n        ")]),t._v(" "),e("p",[t._v("\n            CP中的模块都是标准的npm包。它们专注于企业级应用的某一特定场景，比如复杂表单和可视化图表。\n            它们都有独自的文档，你可以使用它们构建模板，也可以直接在项目中使用它们。\n        ")]),t._v(" "),e("p",[t._v("\n            对于模块和模板，为了提高其复用性，它们都支持通过JSON配置来扩展其功能。这个特性是可配置的(Configurable)的核心。\n            CP不仅限于页面UI的复用，更在于整个业务场景的复用，包含完整的页面布局与交互(UI)、与服务端的交互通信(service)、页面路由的申明(router),\n            以及你可以通过简单的配置来对以上的功能进行调整，快速适配业务需要。\n        ")])],1)])},[],!1,null,"77347c2b",null);n.default=a.exports},80:function(t,n,e){var r=e(82);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},81:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},82:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},83:function(t,n,e){var r=e(95)("wks"),i=e(96),o=e(81).Symbol,c="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=c&&o[t]||(c?o:i)("Symbol."+t))}).store=r},84:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},85:function(t,n,e){t.exports=!e(84)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},86:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},87:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},88:function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},89:function(t,n,e){"use strict";var r,i,o=e(102),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,l=(r=/a/,i=/b*/g,c.call(r,"a"),c.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),s=void 0!==/()??/.exec("")[1];(l||s)&&(a=function(t){var n,e,r,i,a=this;return s&&(e=new RegExp("^"+a.source+"$(?!\\s)",o.call(a))),l&&(n=a.lastIndex),r=c.call(a,t),l&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),s&&r&&r.length>1&&u.call(r[0],e,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=a},90:function(t,n,e){var r=e(100),i=e(105);t.exports=e(85)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},91:function(t,n,e){var r=e(87),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},92:function(t,n,e){"use strict";var r=e(109)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},93:function(t,n,e){"use strict";var r=e(110),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var o=e.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},94:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},95:function(t,n,e){var r=e(88),i=e(81),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(111)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},96:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},97:function(t,n,e){"use strict";e(112);var r=e(98),i=e(90),o=e(84),c=e(86),u=e(83),a=e(89),l=u("species"),s=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var v=u(t),p=!o(function(){var n={};return n[v]=function(){return 7},7!=""[t](n)}),h=p?!o(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[l]=function(){return e}),e[v](""),!n}):void 0;if(!p||!h||"replace"===t&&!s||"split"===t&&!f){var g=/./[v],d=e(c,v,""[t],function(t,n,e,r,i){return n.exec===a?p&&!i?{done:!0,value:g.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),x=d[0],y=d[1];r(String.prototype,t,x),i(RegExp.prototype,v,2==n?function(t,n){return y.call(t,this,n)}:function(t){return y.call(t,this)})}}},98:function(t,n,e){var r=e(81),i=e(90),o=e(101),c=e(96)("src"),u=e(115),a=(""+u).split("toString");e(88).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,e,u){var l="function"==typeof e;l&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(l&&(o(e,c)||i(e,c,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:u?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[c]||u.call(this)})},99:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}}}]);