(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{199:function(t,e,n){var o=n(205);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(13).default)("e91641ce",o,!0,{})},200:function(t,e,n){var o=n(207);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(13).default)("81bb6994",o,!0,{})},201:function(t,e,n){var o=n(209);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(13).default)("ef5e7348",o,!0,{})},202:function(t,e,n){"use strict";n(213),n(84),n(83);var o=n(214),d=n.n(o),a=(n(215),n(216)),l=n.n(a),i={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,d.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,d.a.highlightBlock(this.$refs.code2);var t=this.$parent.$parent.$parent;"Demo"===t.$options.name&&(this.title=t.title)},methods:{clip(){var t=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),e=new l.a(".copy",{text:()=>t});e.on("success",t=>{t.clearSelection(),e.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(t,e){var n=new RegExp("<"+e+"[^>]*>"),o=t.match(n);return o?(o=o[0],t.slice(t.indexOf(o)+o.length,t.lastIndexOf("</"+e+">"))):""},openFiddle(){}}},r=(n(204),n(206),n(0)),v=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pre",{class:{bg:t.bg}},[n("code",{ref:"code",class:t.language},[t._t("default")],2)]),t._v(" "),n("span",{staticClass:"scale",on:{click:t.scale}},[n("Tooltip",{attrs:{content:t.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),t._v(" "),n("span",{staticClass:"copy",on:{click:t.clip}},[n("Tooltip",{attrs:{content:t.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),t._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:t.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),t._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:t.title,width:"65"},model:{value:t.openScale,callback:function(e){t.openScale=e},expression:"openScale"}},[n("pre",{class:{bg:t.bg}},[t._v("            "),n("code",{ref:"code2",class:t.language}),t._v("\n        ")])])],1)}),[],!1,null,"7df69c7c",null);e.a=v.exports},203:function(t,e,n){"use strict";n(83);var o=n(212),d={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){var t={};return this.ready&&(this.showCode?t.height=this.code_height+"px":t.height=this.demo_height+"px"),t},style(){var t={opacity:1};return this.isCodeHide&&!this.showCode&&(t.opacity=0),t},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{var t=this.$children[0].$children[0].$el.clientHeight,e=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=e,e<=t&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:t,this.ready=!0})}}},a=(n(208),n(0)),l=Object(a.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{staticClass:"example",class:{"example-vertical":t.isVertical},attrs:{id:t.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:t.isVertical?24:10}},[n("div",{staticClass:"example-case"},[t._t("demo")],2),t._v(" "),n("header",{staticClass:"example-header"},[n("span",[t._v("\n                "+t._s(t.title)+"\n                "),n("a",{attrs:{href:"#"+t.title_link,"data-title":t.title}},[t._v("#")])])]),t._v(" "),n("div",{staticClass:"example-desc"},[t._t("desc")],2)]),t._v(" "),n("div",{staticClass:"example-split"}),t._v(" "),n("i-col",{staticClass:"example-code",style:t.codeHeight,attrs:{span:t.isVertical?24:14}},[n("div",{style:t.style},[t._t("code")],2),t._v(" "),t.showMore?n("div",{staticClass:"example-code-more",on:{click:function(e){t.showCode=!t.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),t._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),t._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:t.isCodeHide&&!t.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===t.lang?[t._v("显示代码")]:[t._v("Show Code")]],2)],1):t._e()])],1)}),[],!1,null,null,null);e.a=l.exports},204:function(t,e,n){"use strict";var o=n(199);n.n(o).a},205:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},206:function(t,e,n){"use strict";var o=n(200);n.n(o).a},207:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},208:function(t,e,n){"use strict";var o=n(201);n.n(o).a},209:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},217:function(t,e,n){"use strict";var o={},d={type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]},a={status:"1"};o.data={field:d,model:a},o.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(d)+",\n            model: "+JSON.stringify(a)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var l={},i={type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]},r={status:["1","2"]};l.data={field:i,model:r},l.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(i)+",\n            model: "+JSON.stringify(r)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n',e.a={simple:o,multiple:l}},333:function(t,e,n){"use strict";n.r(e);var o=n(210),d=n(211),a=n(202),l=n(203),i={id:"test-id000001",name:"张三的明细",detailUrl:"https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6",detailRoute:{path:"/home",query:{test:"aaa"}}},r={},v={type:"Button",text:"删除",subtype:"error",action:{type:"event",name:"delete"}};r.data={field:v,model:i},r.code="\n<script>\nconst field = "+JSON.stringify(v,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var s={},_={type:"Button",model:"detailRoute",subtype:"primary",text:"详情",action:{type:"route"}};s.data={field:_,model:i},s.code="\n<script>\nconst field = "+JSON.stringify(_,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var c={},p={type:"Button",model:"detailUrl",textModel:"name",subtype:"text",action:{type:"url"}};c.data={field:p,model:i},c.code="\n<script>\nconst field = "+JSON.stringify(p,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var m={},h={type:"Button",model:"detailUrl",subtype:"primary",text:"详情",action:{type:"url"}};m.data={field:h,model:i},m.code="\n<script>\nconst field = "+JSON.stringify(h,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var u={},f={type:"Button",text:"删除",subtype:"error",action:{type:"ajax",api:"/curdDelete",method:"get"}};u.data={field:f,model:i},u.code="\n<script>\nconst field = "+JSON.stringify(f,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var g={},x={confirmPoptip:{title:"确定删除?",placement:"right"},type:"Button",text:"删除",subtype:"error",action:{type:"ajax",api:"/curdDelete"}};g.data={field:x,model:i},g.code="\n<script>\nconst field = "+JSON.stringify(x,null,4)+";\nexport default {\n    data() {\n        return {\n            field,\n            model: "+JSON.stringify(i)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var y={simple:r,route:s,textModel:c,url:m,ajax:u,confirm:g},b={components:{iArticle:o.a,inAnchor:d.a,iCode:a.a,Demo:l.a},data:()=>({code:y}),methods:{handleButtonEvent(t){console.log(t),this.$Message.info("event: "+t.name+" has been triggered")}}},F=n(0),C=Object(F.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-article",[n("article",[n("h1",[t._v("Button")]),t._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),t._v(" "),n("p",[t._v("基础组件-按钮。主要用于在配置表单中一些额外的交互操作。")]),t._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),t._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("subtype")]),t._v(" "),n("td",[t._v("button 的样式")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",[t._v("尺寸，可选值为"),n("code",[t._v("large")]),t._v("、"),n("code",[t._v("small")]),t._v("、"),n("code",[t._v("default")]),t._v("或者不设置")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("textModel")]),t._v(" "),n("td",[t._v("按钮文案对应的model属性，指定后将从"),n("code",[t._v("form.model")]),t._v("里面获取按钮的文案")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("confirmPoptip")]),t._v(" "),n("td",[t._v("配置后，点击按钮，会触发确认提示")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("confirmPoptip.title")]),t._v(" "),n("td",[t._v("确认提示弹框的标题")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("confirmPoptip.placement")]),t._v(" "),n("td",[t._v("确认提示弹框的的位置")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("confirmPoptip.classes")]),t._v(" "),n("td",[t._v("确认提示弹框的的位置类名")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("action")]),t._v(" "),n("td",[t._v("按钮的行为配置")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("必填，且内置type不可为空")])]),t._v(" "),n("tr",[n("td",[t._v("action.type")]),t._v(" "),n("td",[t._v("行为类型，目前支持事件、ajax请求、Route、Url四中形态，分别通过event、ajax、route、url来标识")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("必填")])]),t._v(" "),n("tr",[n("td",[t._v("action.name")]),t._v(" "),n("td",[t._v("当 action.type 为 event 时，需要指定name")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("当action.name为event时，必填")])]),t._v(" "),n("tr",[n("td",[t._v("action.api")]),t._v(" "),n("td",[t._v("当 action.type 为 ajax 时，需要指定api， 触发点击后会向该接口返送请求。")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("当 action.name 为 ajax 时，必填")])]),t._v(" "),n("tr",[n("td",[t._v("action.method")]),t._v(" "),n("td",[t._v("当 action.type 为 ajax 时，可以指定请求方式get、post、put等")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("非必填，默认值为get")])]),t._v(" "),n("tr",[n("td",[t._v("action.route")]),t._v(" "),n("td",[t._v("\n                                当 action.type 为 route 时，可以指定action.route， 触发点击后会向该接口返送请求。\n                                "),n("br"),t._v(" "),n("strong",[t._v("另外一种常用的指定action.route方法是，申明field.model（不支持foo.bar这种形式），然后会从form.model中获取对应的route值，参考下面的示例:")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("form.model")]),t._v(" "),n("pre",[t._v(t._s(JSON.stringify(t.code.route.data.model,null,4))+"\n                                ")]),t._v(" "),n("span",[t._v("Button.field")]),t._v(" "),n("pre",[t._v(t._s(JSON.stringify(t.code.route.data.field,null,4))+"\n                                ")])]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("当 action.name 为 ajax 时，必填")])]),t._v(" "),n("tr",[n("td",[t._v("action.url")]),t._v(" "),n("td",[t._v("\n                                当 action.type 为 url 时，可以指定action.url， 触发点击后会向该接口返送请求。\n                                "),n("br"),t._v(" "),n("strong",[t._v("另外一种常用的指定action.url方法是，申明field.model（不支持foo.bar这种形式），然后会从form.model中获取对应的route值，参考下面的示例:")]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("form.model")]),t._v(" "),n("pre",[t._v(t._s(JSON.stringify(t.code.url.data.model,null,4))+"\n                                ")]),t._v(" "),n("span",[t._v("Button.field")]),t._v(" "),n("pre",[t._v(t._s(JSON.stringify(t.code.url.data.field,null,4))+"\n                                ")])]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("当 action.name 为 ajax 时，必填")])])])]),t._v(" "),n("inAnchor",{attrs:{title:"事件",h3:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{attrs:{width:"160"}},[t._v("方法名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("返回值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("on-button-event")]),t._v(" "),n("td",[t._v("\n                                action.type 为 event 时，点击按钮触发；\n                                "),n("br"),t._v("\n                                action.type 为 ajax 时，请求成功会 emit 一个 on-button-event 事件， name 为 ajaxSuccess。\n                            ")]),t._v(" "),n("td",[t._v("\n                                $event, 内部解构为({name, field})，其中name为事件名称，field为完整配置项。\n                                "),n("br"),t._v("\n                                如果\n                            ")]),t._v(" "),n("td",[t._v("-")])])])])],1),t._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),t._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:t.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:t.code.simple.data.field},on:{"on-button-event":t.handleButtonEvent}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[t._v("通过设置"),n("code",[t._v("field")]),t._v("即可生成一个Button按钮")])]),t._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.simple.code))])],1),t._v(" "),n("Demo",{attrs:{title:"从数据中获取按钮文案"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:t.code.textModel.data.model}},[n("FieldGenerator",{attrs:{field:t.code.textModel.data.field},on:{"on-button-event":t.handleButtonEvent}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[t._v("通过设置"),n("code",[t._v("field.textModel")]),t._v("可以指定按钮的文案对应model的值。")])]),t._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.textModel.code))])],1),t._v(" "),n("Demo",{attrs:{title:"route"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:t.code.route.data.model}},[n("FieldGenerator",{attrs:{field:t.code.route.data.field},on:{"on-button-event":t.handleButtonEvent}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[t._v("通过设置"),n("code",[t._v("field.action.type")]),t._v("为"),n("code",[t._v("route")]),t._v("可以跳转到指定的route")])]),t._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.route.code))])],1),t._v(" "),n("Demo",{attrs:{title:"链接"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:t.code.url.data.model}},[n("FieldGenerator",{attrs:{field:t.code.url.data.field},on:{"on-button-event":t.handleButtonEvent}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[t._v("通过设置"),n("code",[t._v("field.action.type")]),t._v("为"),n("code",[t._v("url")]),t._v("即可生成一个Button按钮")])]),t._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.url.code))])],1),t._v(" "),n("Demo",{attrs:{title:"点击发送Ajax请求"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:t.code.ajax.data.model}},[n("FieldGenerator",{attrs:{field:t.code.ajax.data.field},on:{"on-button-event":t.handleButtonEvent}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[t._v("\n                        通过设置"),n("code",[t._v("field.action.type")]),t._v("为"),n("code",[t._v("ajax")]),t._v("，并设置"),n("code",[t._v("field.api")]),t._v("，即可通过点击按钮发送请求。\n                        "),n("br"),t._v("\n                        发送请求默认会携带form.model作为参数，可以通过paramsContainer传入外部参数，并可通过apiParams选择所需的参数。\n                    ")])]),t._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.ajax.code))])],1),t._v(" "),n("Demo",{attrs:{title:"结合toolTip"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:t.code.ajax.data.model}},[n("FieldGenerator",{attrs:{field:t.code.confirm.data.field},on:{"on-button-event":t.handleButtonEvent}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[t._v("设置"),n("code",[t._v("field.confirmPoptip")]),t._v("，点击按钮会先出现确认弹框。")])]),t._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.confirm.code))])],1)],1)])}),[],!1,null,null,null).exports;e.default=C},334:function(t,e,n){"use strict";n.r(e);var o=n(210),d=n(211),a=n(202),l=n(203),i={},r={type:"Steps",model:"step",options:[{title:"已完成",content:"这里是该步骤的描述信息"},{title:"进行中",content:"这里是该步骤的描述信息"},{title:"待进行",content:"这里是该步骤的描述信息"}]},v={step:0};i.data={field:r,model:v},i.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(r)+",\n            model: "+JSON.stringify(v)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var s={},_={type:"Radio",model:"gender",options:"/radioApi"},c={gender:"F"};s.data={field:_,model:c},s.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(_)+",\n            model: "+JSON.stringify(c)+'\n        };\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n';var p={simple:i,api:s},m={components:{iArticle:o.a,inAnchor:d.a,iCode:a.a,Demo:l.a},data:()=>({code:p}),methods:{handleFieldChange(t,e){console.log(t,e)}}},h=n(0),u=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-article",[n("article",[n("h1",[t._v("Steps")]),t._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),t._v(" "),n("p",[t._v("拆分某项流程的步骤，引导用户按流程完成任务。")]),t._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),t._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("model")]),t._v(" "),n("td",[t._v("绑定的值的名称")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("不可为空")])]),t._v(" "),n("tr",[n("td",[t._v("options")]),t._v(" "),n("td",[t._v("选项列表或者选项数据接口，如\n                                "),n("pre",[t._v("[\n    {title: '已完成', 'content': '这里是该步骤的描述信息'},\n    {title: '进行中', 'content': '这里是该步骤的描述信息'},\n    {title: '待进行', 'content': '这里是该步骤的描述信息'}\n]\n                                ")])]),t._v(" "),n("td",[t._v("Array(option) | String")]),t._v(" "),n("td",[t._v("[] | '', 如果为String则为获取选项数据的api。")])]),t._v(" "),n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",[t._v("尺寸，可选值为"),n("code",[t._v("large")]),t._v("、"),n("code",[t._v("small")]),t._v("、"),n("code",[t._v("default")]),t._v("或者不设置")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("direction")]),t._v(" "),n("td",[t._v("步骤条的方向，可选值为horizontal（水平）或vertical（垂直）")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("horizontal")])])])]),t._v(" "),n("inAnchor",{attrs:{title:"选项配置",h3:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("选项展示名称")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("status")]),t._v(" "),n("td",[t._v("步骤的状态，可选值为wait、process、finish、error，不设置时自动判断")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("步骤的详细描述，可选")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("icon")]),t._v(" "),n("td",[t._v("步骤的图标，可选")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("false")])])])])],1),t._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),t._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:t.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:t.code.simple.data.field},on:{"on-field-change":t.handleFieldChange}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[t._v("通过设置"),n("code",[t._v("field")]),t._v(", "),n("code",[t._v("model")]),t._v("即可生成一个Step。")])]),t._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.simple.code))])],1)],1)])}),[],!1,null,null,null).exports;e.default=u},335:function(t,e,n){"use strict";n.r(e);var o=n(210),d=n(211),a=n(202),l=n(203),i={},r={type:"List",model:"imgs",cardWidth:"220px",cardHeight:"150px"},v={imgs:[{id:"11",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{id:"12",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"}]};i.data={field:r,model:v},i.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(r)+",\n            model: "+JSON.stringify(v)+"\n        };\n    }\n    methods: {\n        handleClick(value) {\n            console.log(value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n            @on-checkboxCard-click='handleClick'\n        />\n    </Form>\n</template>\n";var s={simple:i},_={components:{iArticle:o.a,inAnchor:d.a,iCode:a.a,Demo:l.a},data:()=>({code:s}),methods:{handleClick(){}}},c=n(0),p=Object(c.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-article",[n("article",[n("h1",[t._v("List 列表")]),t._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),t._v(" "),n("p",[t._v("基本组件-列表。主要用于列表数据的展示-支持图片和视频显示")]),t._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),t._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("model")]),t._v(" "),n("td",[t._v("绑定的值的名称")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("不可为空")])]),t._v(" "),n("tr",[n("td",[t._v("optionsType")]),t._v(" "),n("td",[t._v("内容类型(图片:image,视频:video)")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("image")])]),t._v(" "),n("tr",[n("td",[t._v("cardWidth")]),t._v(" "),n("td",[t._v("Card宽度")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("220px")])]),t._v(" "),n("tr",[n("td",[t._v("cardHeight")]),t._v(" "),n("td",[t._v("Card高度")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("220px")])])])]),t._v(" "),n("inAnchor",{attrs:{title:"选项配置",h3:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("value.url")]),t._v(" "),n("td",[t._v("内容地址")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("value.header")]),t._v(" "),n("td",[t._v("头部信息")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("value.footer")]),t._v(" "),n("td",[t._v("尾部信息")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])])])]),t._v(" "),n("inAnchor",{attrs:{title:"事件",h3:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("方法名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("返回值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("on-list-item-click")]),t._v(" "),n("td",[t._v("点击列表项时触发")]),t._v(" "),n("td",[t._v("当前项")])])])])],1),t._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),t._v(" "),n("Demo",{attrs:{title:"基础用法",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:t.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:t.code.simple.data.field},on:{"on-checkboxCard-click":t.handleClick}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[t._v("通过设置"),n("code",[t._v("field")]),t._v(", "),n("code",[t._v("model")]),t._v("即可生成一个List。")])]),t._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.simple.code))])],1)],1)])}),[],!1,null,null,null).exports;e.default=p},336:function(t,e,n){"use strict";n.r(e);var o=n(210),d=n(211),a=n(202),l=n(203),i={},r={type:"Slider",model:"percent",showInput:!0,left:!0,step:5},v={percent:30};i.data={field:r,model:v},i.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(r)+",\n            model: "+JSON.stringify(v)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var s={},_={type:"Slider",model:"percent",range:!0},c={percent:[30,80]};s.data={field:_,model:c},s.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(_)+",\n            model: "+JSON.stringify(c)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var p={simple:i,range:s},m={components:{iArticle:o.a,inAnchor:d.a,iCode:a.a,Demo:l.a},data:()=>({code:p}),methods:{handleFieldChange(t,e){console.log(t,e)}}},h=n(0),u=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-article",[n("article",[n("h1",[t._v("slider 示例")]),t._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),t._v(" "),n("p",[t._v("选择比例")]),t._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),t._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("model")]),t._v(" "),n("td",[t._v("绑定的值的名称")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("不可为空")])]),t._v(" "),n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",[t._v("滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字")]),t._v(" "),n("td",[t._v("Number | Array")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("min")]),t._v(" "),n("td",[t._v("最小值")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("max")]),t._v(" "),n("td",[t._v("最大值")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("100")])]),t._v(" "),n("tr",[n("td",[t._v("step")]),t._v(" "),n("td",[t._v("步长，取值建议能被（max - min）整除")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("1")])]),t._v(" "),n("tr",[n("td",[t._v("disabled")]),t._v(" "),n("td",[t._v("是否禁用滑块")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("range")]),t._v(" "),n("td",[t._v("是否开启双滑块模式")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("showInput")]),t._v(" "),n("td",[t._v("是否显示数字输入框，仅在单滑块模式下有效")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("left")]),t._v(" "),n("td",[t._v("数字输入框是否置于左侧（默认右侧），单滑模式下，showInput为true时生效")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("showStops")]),t._v(" "),n("td",[t._v("是否显示间断点，建议在 step 不密集时使用")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("showTip")]),t._v(" "),n("td",[t._v("提示的显示控制，可选值为 "),n("code",[t._v("hover")]),t._v("（悬停，默认）、 "),n("code",[t._v("always")]),t._v("（总是可见）、"),n("code",[t._v("never")]),t._v("（不可见）")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("hover")])]),t._v(" "),n("tr",[n("td",[t._v("format")]),t._v(" "),n("td",[t._v("Slider 会把当前值传给format，并在 Tooltip 中显示 format 的返回值，若为 null，则隐藏 Tooltip")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("value")])]),t._v(" "),n("tr",[n("td",[t._v("inputSize")]),t._v(" "),n("td",[t._v("数字输入框的尺寸，可选值为large、small、default或者不填，仅在开启 show-input 时有效")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("default")])])])])],1),t._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),t._v(" "),n("Demo",{attrs:{title:"单滑模式用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:t.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:t.code.simple.data.field},on:{"on-field-change":t.handleFieldChange}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[t._v("通过设置"),n("code",[t._v("field")]),t._v(", "),n("code",[t._v("model")]),t._v("即可生成一个单滑Slider。")])]),t._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.simple.code))])],1),t._v(" "),n("Demo",{attrs:{title:"双滑模式用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:t.code.range.data.model}},[n("FieldGenerator",{attrs:{field:t.code.range.data.field},on:{"on-field-change":t.handleFieldChange}})],1)],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[t._v("通过设置"),n("code",[t._v("field")]),t._v("的range属性为true, 即可生成一个双滑Slider。需注意，此时"),n("code",[t._v("model")]),t._v("绑定的值类型需为一个数组")])]),t._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[t._v(t._s(t.code.range.code))])],1)],1)])}),[],!1,null,null,null).exports;e.default=u},352:function(t,e,n){"use strict";n.r(e);var o=n(210),d=n(211),a=n(217),l={components:{iArticle:o.a,inAnchor:d.a},data:()=>({code:a.a}),methods:{handleFieldChange(t,e){console.log(t,e)}}},i=n(0),r=Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-article",[n("article",[n("h1",[t._v("Reset")]),t._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),t._v(" "),n("p",[t._v("表单重置")]),t._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),t._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("标签的类型，不可改")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("Reset")])])])])],1)],1)])}),[],!1,null,null,null).exports;e.default=r},353:function(t,e,n){"use strict";n.r(e);var o=n(210),d=n(211),a=n(217),l={components:{iArticle:o.a,inAnchor:d.a},data:()=>({code:a.a}),methods:{handleFieldChange(t,e){console.log(t,e)}}},i=n(0),r=Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-article",[n("article",[n("h1",[t._v("Divider")]),t._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),t._v(" "),n("p",[t._v("分割线")]),t._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),t._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("水平还是垂直类型，可选值为 horizontal 或 vertical")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("horizontal")])]),t._v(" "),n("tr",[n("td",[t._v("orientation")]),t._v(" "),n("td",[t._v("分割线标题的位置，可选值为 left、right 或 center")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("center")])]),t._v(" "),n("tr",[n("td",[t._v("dashed")]),t._v(" "),n("td",[t._v("是否虚线")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("size")]),t._v(" "),n("td",[t._v("尺寸，可选值为 small 或 default")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("default")])])])])],1)],1)])}),[],!1,null,null,null).exports;e.default=r}}]);