(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(e,t,n){var a=n(205);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("e91641ce",a,!0,{})},200:function(e,t,n){var a=n(207);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("81bb6994",a,!0,{})},201:function(e,t,n){var a=n(209);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(13).default)("ef5e7348",a,!0,{})},202:function(e,t,n){"use strict";n(213),n(84),n(83);var a=n(214),i=n.n(a),o=(n(215),n(216)),s=n.n(o),l={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,i.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,i.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){var e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new s.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){var n=new RegExp("<"+t+"[^>]*>"),a=e.match(n);return a?(a=a[0],e.slice(e.indexOf(a)+a.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},d=(n(204),n(206),n(0)),c=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)}),[],!1,null,"7df69c7c",null);t.a=c.exports},203:function(e,t,n){"use strict";n(83);var a=n(212),i={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return a.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{var e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},o=(n(208),n(0)),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)}),[],!1,null,null,null);t.a=s.exports},204:function(e,t,n){"use strict";var a=n(199);n.n(a).a},205:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},206:function(e,t,n){"use strict";var a=n(200);n.n(a).a},207:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},208:function(e,t,n){"use strict";var a=n(201);n.n(a).a},209:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},331:function(e,t,n){"use strict";n.r(t);var a=n(210),i=n(211),o=n(202),s=n(203),l={},d={type:"Carousel",model:"city",options:[{value:"beijing",label:"北京",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{value:"shanghai",label:"上海",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"},{value:"guangzhou",label:"广州",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481487900&di=5f506969bb6269da5b86952de5c4f8c2&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F748%2Fw991h557%2F20190113%2FTR0G-hrpcmqw3706235.jpg"},{value:"shenzhen",label:"深圳",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481527030&di=268a917e6a6ef408c0e5fee8816ca6cf&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161128%2F387d785273bb4b31b48451c51a2e5359_th.gif"}]},c={city:"shenzhen"};l.data={field:d,model:c},l.code="\n<script>\nconst field = "+JSON.stringify(d,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(c)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var r={},p={type:"Carousel",model:"city",subtype:"video",options:[{value:"one",url:"http://sc4.hao123img.com/materials/xz.upload/b6/b6aafe3af127fd2ef47a1afb54fcd4bd.mp4"},{value:"two",url:"http://sc2.hao123img.com/materials/xz.upload/08/08a237bc1a51794c8e3ff2d410045066.mp4"}]},h={city:"two"};r.data={field:p,model:h},r.code="\n<script>\nconst field = "+JSON.stringify(p,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(h)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var m={},u={type:"Carousel",model:"city",valueAsOptions:!0},g={city:[{value:"beijing",label:"北京",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{value:"shanghai",label:"上海",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"},{value:"guangzhou",label:"广州",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481487900&di=5f506969bb6269da5b86952de5c4f8c2&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F748%2Fw991h557%2F20190113%2FTR0G-hrpcmqw3706235.jpg"},{value:"shenzhen",label:"深圳",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481527030&di=268a917e6a6ef408c0e5fee8816ca6cf&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161128%2F387d785273bb4b31b48451c51a2e5359_th.gif"}]};m.data={field:u,model:g},m.code="\n<script>\nconst field = "+JSON.stringify(u,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(g)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var v={simple:l,video:r,valueAsOptions:m},f={components:{iArticle:a.a,inAnchor:i.a,iCode:o.a,Demo:s.a},data:()=>({code:v}),methods:{handleFieldChange(e){var{model:t,value:n}=e;console.log(t,n)}}},x=n(0),b=Object(x.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("Carousel 走马灯")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("走马灯")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}})],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Cascader。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"视频"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.video.data.model}},[n("FieldGenerator",{attrs:{field:e.code.video.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Cascader。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.video.code))])],1),e._v(" "),n("Demo",{attrs:{title:"值作为列表"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.valueAsOptions.data.model}},[n("FieldGenerator",{attrs:{field:e.code.valueAsOptions.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个Cascader。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.valueAsOptions.code))])],1)],1)])}),[],!1,null,null,null).exports;t.default=b}}]);