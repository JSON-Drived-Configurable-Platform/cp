(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{223:function(e,t,n){var o=n(229);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(15).default)("e91641ce",o,!0,{})},224:function(e,t,n){var o=n(231);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(15).default)("81bb6994",o,!0,{})},225:function(e,t,n){var o=n(233);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(15).default)("ef5e7348",o,!0,{})},226:function(e,t,n){"use strict";n(237),n(87),n(86);var o=n(238),l=n.n(o),i=(n(239),n(240)),a=n.n(i),d={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,l.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,l.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){var e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new a.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){var n=new RegExp("<"+t+"[^>]*>"),o=e.match(n);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},s=(n(228),n(230),n(0)),c=Object(s.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)}),[],!1,null,"7df69c7c",null);t.a=c.exports},227:function(e,t,n){"use strict";n(86);var o=n(236),l={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{var e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},i=(n(232),n(0)),a=Object(i.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)}),[],!1,null,null,null);t.a=a.exports},228:function(e,t,n){"use strict";var o=n(223);n.n(o).a},229:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},230:function(e,t,n){"use strict";var o=n(224);n.n(o).a},231:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},232:function(e,t,n){"use strict";var o=n(225);n.n(o).a},233:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},343:function(e,t,n){"use strict";n.r(t);var o=n(234),l=n(235),i=n(226),a=n(227),d={},s={type:"LogicSelect",label:"逻辑选择",model:"version",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"],options:[{label:"1.0",value:"1.0"},{label:"1.1",value:"1.1"},{label:"1.3",value:"1.3"},{label:"1.4",value:"1.4"},{label:"2.0",value:"2.0"},{label:"2.1",value:"2.1"},{label:"2.3",value:"2.3"},{label:"2.4",value:"2.4"}]},c={version:{logic:"betweenWith",value:["1.3","2.1"]}};d.data={field:s,model:c},d.code="\n<script>\nconst field = "+JSON.stringify(s,null,4)+";\nconst model = "+JSON.stringify(c,null,4)+';\nexport default {\n    data() {\n        return {\n            field: field,\n            model: model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var r={},p={type:"LogicInput",label:"逻辑输入",model:"version",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"]},v={version:{logic:"betweenWith",value:["1.3","2.1"]}};r.data={field:p,model:v},r.code="\n<script>\nconst logicInputField = "+JSON.stringify(p,null,4)+";\nconst model = "+JSON.stringify(v,null,4)+';\nexport default {\n    data() {\n        return {\n            field: logicInputField,\n            model: model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var h={},_={type:"LogicSelect",label:"逻辑选择",model:"version",required:!0,enables:["=",">",">=","<","<=","betweenIn","betweenWith","!=","multiple"],api:"/selectApi"},m={version:{logic:"betweenWith",value:[""]}};h.data={field:_,model:m},h.code="\n<script>\nconst LogicSelectApiField = "+JSON.stringify(_,null,4)+";\nconst model = "+JSON.stringify(m,null,4)+';\nexport default {\n    data() {\n        return {\n            field: LogicSelectApiField,\n            model: model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var u={simple:d,logicInput:r,LogicSelectApi:h},g={components:{iArticle:o.a,inAnchor:l.a,iCode:i.a,Demo:a.a},data:()=>({code:u}),methods:{handleFieldChange(e,t){console.log(e,t)}}},f=n(0),x=Object(f.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("LogicSelect 逻辑选择")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("逻辑选择")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("绑定的值的名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不可为空")])]),e._v(" "),n("tr",[n("td",[e._v("type")]),e._v(" "),n("td",[e._v("LogicInput、LogicSelect")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不可为空")])]),e._v(" "),n("tr",[n("td",[e._v("enables")]),e._v(" "),n("td",[e._v("逻辑选择,选项的数据：['=', '>', '>=', '<', '<=', 'betweenIn', 'betweenWith', '!=', 'multiple']")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("'<' (小于)")])]),e._v(" "),n("tr",[n("td",[e._v("options")]),e._v(" "),n("td",[e._v("选项列表或者选项数据接口，如[{label: '1.0', 'value': '1.0'},{label: '2.0', 'value': '2.0'}, {label: '3.0', 'value': '3.0', disabled: true}]")]),e._v(" "),n("td",[e._v("Array(option) | String")]),e._v(" "),n("td",[e._v("[] | '', 如果为String则为获取选项数据的api。")])]),e._v(" "),n("tr",[n("td",[e._v("api")]),e._v(" "),n("td",[e._v("获取选项的接口")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("''，api的返回值格式为{status: 0, data: [{label: '1.0', 'value': '1.0'}]}")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"扩展配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("required")]),e._v(" "),n("td",[e._v("是否必须选择")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("size")]),e._v(" "),n("td",[e._v("尺寸，可选值为large、small、default或者不设置")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("是否禁用选择器")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("multiple")]),e._v(" "),n("td",[e._v("是否支持多选")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"Option配置",h3:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("value")]),e._v(" "),n("td",[e._v("选项值，默认根据此属性值进行筛选，必填")]),e._v(" "),n("td",[e._v("String | Number")]),e._v(" "),n("td",[e._v("无")])]),e._v(" "),n("tr",[n("td",[e._v("label")]),e._v(" "),n("td",[e._v("选项显示的内容，默认优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("是否禁用当前项")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"LogicSelect 基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个LogicSelect。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"LogicInput 基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.logicInput.data.model}},[n("FieldGenerator",{attrs:{field:e.code.logicInput.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个LogicInput。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.logicInput.code))])],1),e._v(" "),n("Demo",{attrs:{title:"逻辑选择Api"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.LogicSelectApi.data.model}},[n("FieldGenerator",{attrs:{field:e.code.LogicSelectApi.data.field,"form-model":e.code.LogicSelectApi.data.model},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个LogicSelect。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.LogicSelectApi.code))])],1)],1)])}),[],!1,null,null,null).exports;t.default=x}}]);