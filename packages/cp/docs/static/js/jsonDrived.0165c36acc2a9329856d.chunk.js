(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{204:function(e,t,n){var o=n(210);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(15).default)("3ea83e81",o,!0,{})},205:function(e,t,n){var o=n(212);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(15).default)("81bb6994",o,!0,{})},209:function(e,t,n){"use strict";var o=n(204);n.n(o).a},210:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,"\n.i-code[data-v-19189fba] {\n    margin: 0 0 10px 0;\n}\ndiv[data-v-19189fba]{\n     position: relative;\n     font-size: 14px;\n}\nspan.copy[data-v-19189fba], span.scale[data-v-19189fba], span.open-fiddle[data-v-19189fba]{\n     border-radius: 0 0 3px 3px;\n     padding: 2px 5px;\n     position: absolute;\n     top: 5px;\n     right: 0;\n     color: #b2b2b2;\n     cursor: pointer;\n}\nspan.scale[data-v-19189fba]{\n     right: 25px;\n}\nspan.open-fiddle[data-v-19189fba]{\n     right: 50px;\n}\n.bg + span.copy[data-v-19189fba]{\n     right: 5px;\n}\nspan.copy[data-v-19189fba]:hover, span.scale[data-v-19189fba]:hover, span.open-fiddle[data-v-19189fba]:hover{\n     color: #5c6b77;\n}\n\n",""])},211:function(e,t,n){"use strict";var o=n(205);n.n(o).a},212:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},213:function(e,t,n){"use strict";n(216),n(217),n(214),n(203);var o=n(218),i=n.n(o),a=(n(219),n(220)),l=n.n(a),s={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data:function(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},mounted:function(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,i.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,i.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip:function(){var e=this,t=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),n=new l.a(".copy",{text:function(){return t}});n.on("success",function(t){t.clearSelection(),n.destroy(),e.copied=!0,"zh-CN"===e.docLang?e.$Message.success("代码已复制到剪贴板"):e.$Message.success("Code copied"),setTimeout(function(){e.copied=!1},2e3)})},scale:function(){this.openScale=!0},getSource:function(e,t){var n=new RegExp("<"+t+"[^>]*>"),o=e.match(n);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+t+">"))):""},openFiddle:function(){}}},r=(n(209),n(211),n(0)),d=Object(r.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"i-code"},[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"19189fba",null);t.a=d.exports},221:function(e,t,n){var o=n(233);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(15).default)("ef5e7348",o,!0,{})},232:function(e,t,n){"use strict";var o=n(221);n.n(o).a},233:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},234:function(e,t,n){var o=n(292);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(15).default)("c6a43bc4",o,!0,{})},251:function(e,t,n){"use strict";n(203);var o=n(252),i={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data:function(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide:function(){return this.hideCode},isVertical:function(){return this.vertical},codeHeight:function(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style:function(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link:function(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode:function(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.$nextTick(function(){var t=e.$children[0].$children[0].$el.clientHeight,n=e.$children[0].$children[1].$el.clientHeight+20;e.code_height=n,n<=t&&!e.isCodeHide&&(e.showMore=!1),e.demo_height=e.isCodeHide?30:t,e.ready=!0})}}},a=(n(232),n(0)),l=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=l.exports},291:function(e,t,n){"use strict";var o=n(234);n.n(o).a},292:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,".img-list {\n  margin: 20px auto;\n}\n.img-list ul {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.img-list ul li {\n  margin: 0 50px;\n  text-align: center;\n}\n.img-list ul li img {\n  margin: 0 auto;\n  display: block;\n  width: 100%;\n}\n.img-list ul li span {\n  display: inline-block;\n  line-height: 30px;\n  font-size: 12px;\n}\n.curd-example-demo .ivu-poptip-rel {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.curd-example-demo .ivu-poptip-body-content {\n  overflow: visible;\n}\n.curd-example-demo-header {\n  margin-bottom: 10px;\n  text-align: right;\n}\n.curd-example-demo-table .ivu-form-item {\n  margin-bottom: 0;\n}\n.curd-example-demo .ivu-table-wrapper,\n.curd-example-demo .ivu-table,\n.curd-example-demo .ivu-table-cell {\n  overflow: visible;\n}\n",""])},326:function(e,t,n){"use strict";n.r(t);n(214);var o=n(206),i=n(207),a=n(251),l=n(213),s={},r={type:"Input",model:"name"},d={name:"json"};s.data={field:r,model:d},s.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(r)+",\n            model: "+JSON.stringify(d)+'\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n        />\n    </Form>\n</template>\n';var c={},p=[{type:"Input",model:"username",placehold:"Username",prefix:"ios-person-outline",width:120,rules:[{required:!0,message:"Please fill in the user name",trigger:"blur"}]},{type:"Input",subtype:"password",model:"password",placehold:"Password",prefix:"ios-lock-outline",width:120,rules:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]},{type:"Submit",subtype:"primary",text:"登录",width:80}],m={inline:!0},u={username:"",password:""};c.data={fields:p,model:u,options:m},c.code="\n<script>\nconst fields = "+JSON.stringify(p,null,4)+";\nconst model = "+JSON.stringify(u,null,4)+";\nconst options = "+JSON.stringify(m,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model,\n            options\n        };\n    },\n    methods: {\n        handleSubmit(formName) {\n            console.log(this.$refs[formName].model);\n        }\n    }\n};\n<script>\n<template>\n    <FormGenerator\n        :fields="fields"\n        :options="options"\n        :model="model"\n        @on-submit="handleSubmit(\'form\')"\n    />\n</template>\n';var f={},h=[{title:"姓名",key:"name",width:100},{title:"年龄",key:"age",width:90},{title:"城市",slot:"city",width:"auto",formFields:[{type:"Select",api:"/selectApi",model:"city",inline:!0,cache:!0,width:100},{type:"Button",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/curdEdit"},apiParams:["name","province","city"],inline:!0}]},{title:"地址",slot:"address",width:200,poptip:{title:"编辑地址",formFields:[{type:"Input",model:"address",placeholder:"请输入地址",rules:[{type:"string",required:!0}],width:250,inline:!0},{type:"Button",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/curdEdit"},apiParams:["name","address","test"],inline:!0}]}},{title:"用户状态",width:100,slot:"status",formFields:[{type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]}]},{title:"操作",slot:"action",width:240,formFields:[{type:"Button",text:"编辑",subtype:"primary",size:"small",action:{type:"event",name:"editDialog"},inline:!0},{type:"Button",text:"判黑",subtype:"primary",size:"small",confirmPoptip:{title:"确认判黑?",placement:"left"},action:{type:"ajax",api:"/curdToBlack"},apiParams:["name","status"],inline:!0,hiddenOn:{status:[{type:"enum",enum:["2"]}]}},{type:"Button",text:"洗白",subtype:"primary",size:"small",confirmPoptip:{title:"确定洗白?",placement:"left"},action:{type:"ajax",api:"/curdToWhite"},apiParams:["name","status"],inline:!0,hiddenOn:{status:[{type:"enum",enum:["1"]}]}},{type:"Button",text:"删除",subtype:"error",size:"small",confirmPoptip:{title:"确定删除?",placement:"left"},action:{type:"ajax",api:"/curdDelete"},apiParams:["name"],inline:!0}]}],v=[{name:"王小明",age:18,city:"Beijing",address:"北京市朝阳区芍药居",status:"1"},{name:"张小刚",age:25,city:"Beijing",address:"北京市海淀区西二旗",status:"1"}];f.data={columns:h,data:v,editFormFields:[{type:"Input",label:"姓名",model:"name",placeholder:"请输入姓名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]},{type:"InputNumber",label:"年龄",model:"age",placeholder:"请输入年龄",required:!0,max:150,min:0},{type:"Select",label:"性别",model:"gender",placeholder:"请输入性别",required:!0,options:[{label:"男",value:"男"},{label:"女",value:"女"},{label:"保密",value:"保密"}]},{type:"DatePicker",label:"日期",subtype:"date",model:"birthday",placeholder:"请输入出生日期",required:!0},{type:"Input",label:"地址",model:"address",placeholder:"请输入地址",required:!0},{type:"CheckboxCard",model:"card",checkAll:!0,pageLation:!0,pageSize:3,headerEditable:!0,footerEditable:!0,cardWidth:"220px",cardHeight:"245px",optionsType:"image",options:"/checkboxCardApi",required:!0},{type:"Submit",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/curdEdit"},inline:!0,apiParams:"all"}]},f.code="\n<script>\nconst columns = "+JSON.stringify(h,null,4)+";\nconst data = "+JSON.stringify(v,null,4)+';\nexport default {\n    data() {\n        return {\n            fields,\n            model,\n            editModel: {},\n            editFormFields,\n            editDialogOpeon: false\n        };\n    },\n    methods: {\n        handleSubmit(formName) {\n            console.log(this.$refs[formName].model);\n        }\n    }\n};\n<script>\n<template>\n    <div class="curd-example-demo">\n        <h3 class="curd-example-demo-header">\n            <Button type="primary" @click="handleCreateButtonClick">创建用户</Button>\n        </h3>\n        <Table class="curd-example-demo-table" :columns="code.curd.data.columns" :data="code.curd.data.data">\n            <template\n                v-for="column in code.curd.data.columns"\n                :slot="column.slot"\n                slot-scope="{ row, index }"\n            >\n                <Form\n                    :key="column.slot"\n                    :model="row"\n                >\n                    <Poptip v-if="!!column.poptip" placement="left-start">\n                        <span>{{ row[column.slot] }}</span>\n                        <Icon type="md-create" />\n                        <div slot="title"><i>{{ column.poptip.title }}</i></div>\n                        <div slot="content">\n                            <FieldGenerator\n                                v-for="(field, i) in column.poptip.formFields"\n                                :key="i"\n                                :field="field"\n                                @on-submit="handleSubmit(index)"\n                            />\n                        </div>\n                    </Poptip>\n                    <FieldGenerator\n                        v-for="(field, i) in column.formFields"\n                        v-else\n                        :key="i"\n                        :field="field"\n                        @on-button-event="handleButtonEvent($event, row, index)"\n                    />\n                </Form>\n            </template>\n        </Table>\n        <Modal\n            v-model="editDialogOpeon"\n            title="编辑"\n            footer-hide\n        >\n            <FormGenerator\n                ref="FormGenerator"\n                :fields="editFormFields"\n                :model="editModel"\n                @on-submit="handleSave"\n            />\n        </Modal>\n    </div>\n</template>\n';var x={formControl:s,form:c,curd:f},g={components:{iArticle:o.a,inAnchor:i.a,Demo:a.a,iCode:l.a},data:function(){return{code:x,editModel:{},editDialogOpen:!1}},methods:{handleCreateButtonClick:function(){this.editModel={type:"add",status:"1"},this.editDialogOpen=!0},handleButtonEvent:function(e,t,n){this[e.name](t,n,e.type)},editDialog:function(e,t){this.editModel=e,this.editModel.index=t,this.editDialogOpen=!0},ajaxSuccess:function(){this.editDialogOpen=!1}}},y=(n(291),n(0)),b=Object(y.a)(g,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("JSON驱动")]),e._v(" "),n("p",[e._v("本文主要演示了"),n("code",[n("strong",[e._v("CP")])]),e._v("如果通过JSON配置来生成组件、模块和页面。")]),e._v(" "),n("inAnchor",{attrs:{title:"组件的JSON生成",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"输入框",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.formControl.data.model}},[n("FieldGenerator",{attrs:{field:e.code.formControl.data.field,"form-model":e.code.formControl.data.model}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("\n                    使用表单工具\n                    "),n("a",{attrs:{href:"https://github.com/JSON-Drived-Configurable-Platform/form-generator-iview"}},[e._v("FormGenerator")]),e._v("\n                    可以来生成一个组件。\n                ")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.formControl.code))])],1),e._v(" "),n("inAnchor",{attrs:{title:"模块的JSON生成",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"完整的表单",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("FormGenerator",{ref:"form",attrs:{fields:e.code.form.data.fields,model:e.code.form.data.model,options:e.code.form.data.options},on:{"on-submit":function(t){return e.handleSubmit("form")}}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("\n                    同样也可以生成一个完整的表单，还能支持表单验证的配置。\n                ")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.form.code))])],1),e._v(" "),n("inAnchor",{attrs:{title:"页面的JSON生成",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"增删该查列表",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("div",{staticClass:"curd-example-demo"},[n("h3",{staticClass:"curd-example-demo-header"},[n("Button",{attrs:{type:"primary"},on:{click:e.handleCreateButtonClick}},[e._v("创建用户")])],1),e._v(" "),n("Table",{staticClass:"curd-example-demo-table",attrs:{columns:e.code.curd.data.columns,data:e.code.curd.data.data},scopedSlots:e._u([e._l(e.code.curd.data.columns,function(t){return{key:t.slot,fn:function(o){var i=o.row,a=o.index;return[n("Form",{key:t.slot,attrs:{model:JSON.parse(JSON.stringify(i))}},[t.poptip?n("Poptip",{key:t.slot,attrs:{placement:"left-start"}},[t.poptip.displayField?[n("FieldGenerator",{attrs:{field:t.poptip.displayField}})]:[n("span",[e._v(e._s(i[t.slot]))])],e._v(" "),n("Icon",{attrs:{type:"ios-create-outline",size:"20"}}),e._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},e._l(t.poptip.formFields,function(e,t){return n("FieldGenerator",{key:t,attrs:{field:e}})}),1)],2):e._e(),e._v(" "),t.formFields?n("div",e._l(t.formFields,function(t,o){return n("FieldGenerator",{key:o,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,i,a)}}})}),1):e._e()],1)]}}})],null,!0)}),e._v(" "),n("Modal",{attrs:{title:"编辑","footer-hide":"",width:"900"},model:{value:e.editDialogOpen,callback:function(t){e.editDialogOpen=t},expression:"editDialogOpen"}},[n("FormGenerator",{ref:"FormGenerator",attrs:{fields:e.code.curd.data.editFormFields,model:e.editModel},on:{"on-button-event":function(t){return e.handleButtonEvent(t)}}})],1)],1)]),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("我们将表单工具结合表格组件，可以通过JSON来生成一个复杂的页面。剩下的模板变成非常简洁，因为变化的数据和表单的控件都通过JSON配置得到了分离。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.curd.code))])],1)],1)])},[],!1,null,null,null);t.default=b.exports}}]);