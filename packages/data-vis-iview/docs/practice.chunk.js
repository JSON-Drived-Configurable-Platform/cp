(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{750:function(e,t,a){var n=a(771);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(48).default)("ef5e7348",n,!1,{})},754:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[a("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[a("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),a("header",{staticClass:"example-header"},[a("span",[e._v("\n                "+e._s(e.title)+"\n                "),a("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),a("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),a("div",{staticClass:"example-split"}),e._v(" "),a("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[a("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?a("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),a("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),a("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)};n._withStripped=!0;a(209);var d=a(755),o={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data:function(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide:function(){return this.hideCode},isVertical:function(){return this.vertical},codeHeight:function(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style:function(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link:function(){return d.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode:function(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.$nextTick(function(){var t=e.$children[0].$children[0].$el.clientHeight,a=e.$children[0].$children[1].$el.clientHeight+20;e.code_height=a,a<=t&&!e.isCodeHide&&(e.showMore=!1),e.demo_height=e.isCodeHide?30:t,e.ready=!0})}}},r=(a(770),a(3)),s=Object(r.a)(o,n,[],!1,null,null,null);s.options.__file="website/components/Demo/index.vue";t.a=s.exports},770:function(e,t,a){"use strict";var n=a(750);a.n(n).a},771:function(e,t,a){(e.exports=a(47)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},772:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("i-article",[a("article",[a("h1",[e._v("DataVis")]),e._v(" "),a("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),a("p",[e._v("\n            通过 json 配置，快速生成一个数据报表页面，可以支持"),a("strong",[e._v("数据概览卡片")]),e._v("、"),a("strong",[e._v("可视化图表")]),e._v("、"),a("strong",[e._v("数据表格和留存表格")]),e._v("。\n        ")]),e._v(" "),a("alert",[a("strong",[e._v("如果你希望自己控制布局，可以直接使用 DataVisItem。")])]),e._v(" "),a("div",{staticClass:"api"},[a("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),a("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("title")]),e._v(" "),a("td",[e._v("标题")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("可选")])]),e._v(" "),a("tr",[a("td",[e._v("tip")]),e._v(" "),a("td",[e._v("提示信息")]),e._v(" "),a("td",[e._v("Object")]),e._v(" "),a("td",[e._v("可选")])]),e._v(" "),a("tr",[a("td",[e._v("tip.title")]),e._v(" "),a("td",[e._v("提示信息-标题")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("可选")])]),e._v(" "),a("tr",[a("td",[e._v("tip.content")]),e._v(" "),a("td",[e._v("提示信息-内容")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("可选"),a("strong",[e._v("内部使用了v-html，注意XSS攻击")])])]),e._v(" "),a("tr",[a("td",[e._v("rows")]),e._v(" "),a("td",[e._v("图表的集合")]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("\n                            必选, 值的类型为[[DataVisItem...], [DataVisItem...]]。"),a("br"),e._v("\n                            rows 的元素是数组，每个元素都是一系 DataVisItem 的集合，其内部的元素会在一行内展示。"),a("br"),e._v("\n                            假如现在有三个 DataVisItem, 希望第一行展示两个，第二行展示一个，则数据结构为 [[DataVisItem0, DataVisItem1], [DataVisItem2]]。\n                            "),a("br"),e._v(" "),a("strong",[a("a",{attrs:{href:"/#/doc/DataVisItem"}},[e._v("查看DataVisItem了解详细配置项")])])])])])])],1),e._v(" "),a("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),a("Demo",{attrs:{title:"基础用法",vertical:""}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("DataVis",{attrs:{config:e.code.simple.data.config},on:{"on-field-change":e.handleFieldChange}})],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("p",[e._v("通过设置"),a("code",[e._v("config")]),e._v("，即可控制图表的布局方式。")])]),e._v(" "),a("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1)],1)])};n._withStripped=!0;var d=a(751),o=a(752),r=a(753),s=a(754),i={},l={title:"整体趋势",tip:{title:"规则",content:"规则内容规则内容规则内容规则内容规则<br>内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容"},rows:[[{display:"inline",charts:[{type:"card",label:"年活跃",data:[{label:"活跃用户数",value:22246150,unit:"人",showChange:!1},{label:"日环比",value:-4.88,unit:"%",showChange:!0},{label:"周同比",value:-1.36,unit:"%",showChange:!0}]},{type:"card",label:"年活跃",data:[{label:"活跃用户数",value:22246150,unit:"人",showChange:!1},{label:"日环比",value:-4.88,unit:"%",showChange:!0},{label:"周同比",value:-1.36,unit:"%",showChange:!0}]}]}],[{charts:[{tip:{title:"标题1",content:"内容1"},label:"地域分布",type:"pie",data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:274,name:"联盟广告"},{value:235,name:"视频广告"},{value:400,name:"搜索引擎"}]},{label:"新增用户",type:"bar",columns:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],data:[120,200,150,80,70,110,130]},{label:"新增用户-水平",type:"bar",direction:"horizontal",columns:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],data:[120,200,150,80,70,110,130]}]},{charts:[{label:"趋势图",type:"line",dataZoom:!0,columns:[["2015-1","2015-2","2015-3","2015-4","2015-5","2015-6","2015-7","2015-8","2015-9","2015-10","2015-11"],["2016-1","2016-2","2016-3","2016-4","2016-5","2016-6","2016-7","2016-8","2016-9","2016-10","2016-11","2016-12"]],data:[{name:"2015 邮件营销",groupName:"邮件营销",xAxisIndex:0,data:[120,132,101,134,90,230,210,101,134]},{name:"2016 邮件营销",groupName:"邮件营销",xAxisIndex:1,data:[150,122,121,164,100,200,200,141,134,90,230,210]},{name:"2015 联盟广告",groupName:"联盟广告",xAxisIndex:0,data:[220,182,191,234,290,330,310,101,134,90,230]},{name:"2016 联盟广告",groupName:"联盟广告",xAxisIndex:1,data:[20,82,91,34,90,30,10,1,34,90,30,10]}]},{tip:{title:"标题2",content:"内容2"},label:"柱状图api2",type:"bar",api:"/chartBarApi"},{label:"用户转化",type:"funnel",columns:["展现","点击","访问","咨询","订单"],data:[{value:54,name:"访问"},{value:12,name:"咨询"},{value:5,name:"订单"},{value:83,name:"点击"},{value:100,name:"展现"}]}]}],[{chartGroup:[{label:"新增留存",type:"retain",columns:[{title:"日期",key:"date"},{title:"用户数",key:"user_number"},{title:"1天后",key:"1"},{title:"2天后",key:"2"},{title:"3天后",key:"3"},{title:"4天后",key:"4"},{title:"5天后",key:"5"},{title:"6天后",key:"6"},{title:"7天后",key:"7"}],data:[{date:"2018-01-10",user_number:123456789,1:90.7,2:"",3:"",4:"",5:"",6:"",7:""},{date:"2018-01-09",user_number:123456789,1:60.34,2:55.22,3:"",4:"",5:"",6:"",7:""},{date:"2018-01-08",user_number:123456789,1:90.34,2:85.29,3:74.39,4:"",5:"",6:"",7:""},{date:"2018-01-07",user_number:123456789,1:60,2:55.01,3:44.49,4:33.29,5:"",6:"",7:""},{date:"2018-01-06",user_number:123456789,1:60.29,2:55.47,3:54.57,4:53.29,5:52.98,6:"",7:""},{date:"2018-01-05",user_number:123456789,1:90,2:85.23,3:74.48,4:63.47,5:52.77,6:40.22,7:""},{date:"2018-01-04",user_number:123456789,1:90.78,2:85.36,3:74.78,4:63.26,5:52.97,6:40.46,7:38.76},{date:"2018-01-03",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2}]}]},{chartGroup:[{label:"活跃留存",type:"retain",api:"/chartRetainApi"}]}],[{chartGroup:[{label:"数据表格",type:"table",hideElevator:!0,hideSizer:!0,downloadAble:!1,customColumns:["name","age","address","money","name-1","age-1","address-1","money-1"],columns:[{title:"Name-api",key:"name",defaultShow:!0},{title:"Age-api",key:"age",sortable:!0,defaultShow:!1},{title:"Address-api",key:"address",defaultShow:!0},{title:"Date-api",key:"date",defaultShow:!0},{title:"Money",key:"money",defaultShow:!0},{title:"Name-api-1",key:"name-1",defaultShow:!0},{title:"Age-api-1",key:"age-1",sortable:!0,defaultShow:!1},{title:"Address-api-1",key:"address-1",defaultShow:!0},{title:"Date-api-1",key:"date-1",defaultShow:!0},{title:"Money-1",key:"money-1",defaultShow:!0}],data:[{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112.22223,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112.22223},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:null,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112}]},{label:"数据表格API",type:"table",customColumns:["name","age","address"],api:"/chartTableApi"}]}]]};i.data={config:l},i.code="\n\nconst config = "+JSON.stringify(l,null,4)+';\n<template>\n    <DataVis\n        :config="config"\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            config\n        };\n    }\n};\n<\/script>\n';var v={simple:i},h={components:{iArticle:d.a,inAnchor:o.a,iCode:r.a,Demo:s.a},data:function(){return{code:v}},methods:{handleFieldChange:function(e,t){console.log(e,t)}}},c=a(3),_=Object(c.a)(h,n,[],!1,null,null,null);_.options.__file="website/page/doc/DataVis/index.vue";var m=_.exports;t.default=m},773:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("i-article",[a("article",[a("h1",[e._v("DataVisItem")]),e._v(" "),a("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),a("p",[e._v("用于生成一个可视化区域，可以包含多个图，这些图默认以Tab的形式组合起来，也可以设置display: 'inline'使其平铺开来。")]),e._v(" "),a("div",{staticClass:"api"},[a("inAnchor",{attrs:{title:"通用配置",h2:""}}),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("charts")]),e._v(" "),a("td",[e._v("图的配置集合")]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("不可为空，charts是一些列图的配置的集合。这些图可以以Tab或者平铺的形式展示。如下方Demo所示：一个 DataVisItem 中包含多个图表，它们以Tab的形式组合在一起。")])]),e._v(" "),a("tr",[a("td",[e._v("chart")]),e._v(" "),a("td",[e._v("单个图的配置")]),e._v(" "),a("td",[e._v("Object")]),e._v(" "),a("td",[e._v("不可为空")])]),e._v(" "),a("tr",[a("td",[e._v("chart.label")]),e._v(" "),a("td",[e._v("图的标题")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("''")])]),e._v(" "),a("tr",[a("td",[e._v("chart.display")]),e._v(" "),a("td",[e._v("图的组合方式， 设置为 inline 会使其平铺")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("'tab'")])])])]),e._v(" "),a("inAnchor",{attrs:{title:"类型一：基于echart的可视化图表，包含折线图、柱状图、饼图、漏斗图",h3:""}}),e._v(" "),a("alert",[e._v("v0.1及之后的版本，为了简化配置，通过dataset来声明数据。v0.1之前通过columns和data的配置方式将逐渐废弃调。")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("chart.dataset")]),e._v(" "),a("td",[e._v("图的数据集，可以是多个数据的集合。详情参考echart官网：")]),e._v(" "),a("td",[e._v("Object | Array")]),e._v(" "),a("td",[e._v("{}")])]),e._v(" "),a("tr",[a("td",[e._v("chart.series")]),e._v(" "),a("td",[e._v("图的系列配置集合。详情参考echart官网：")]),e._v(" "),a("td",[e._v("Object | Array")]),e._v(" "),a("td",[e._v("{}")])])])]),e._v(" "),a("inAnchor",{attrs:{title:"类型二：基于iView table组件的表格和留存图",h3:""}}),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("chart.hideSizer")]),e._v(" "),a("td",[e._v("是否隐藏页数选择器")]),e._v(" "),a("td",[e._v("boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("chart.hideElevator")]),e._v(" "),a("td",[e._v("是否隐藏跳页输入框")]),e._v(" "),a("td",[e._v("boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("chart.downloadAble")]),e._v(" "),a("td",[e._v("是否可下载")]),e._v(" "),a("td",[e._v("boolean")]),e._v(" "),a("td",[e._v("true")])]),e._v(" "),a("tr",[a("td",[e._v("chart.customColumns")]),e._v(" "),a("td",[e._v("是否可控制展示该列")]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("[]")])]),e._v(" "),a("tr",[a("td",[e._v("chart.columns")]),e._v(" "),a("td",[e._v("表头，其中的设置项可参考"),a("a",{attrs:{href:"http://iview.talkingdata.com/#/components/table"}},[e._v("iView Table 表格 column")])]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("[]")])]),e._v(" "),a("tr",[a("td",[e._v("chart.data")]),e._v(" "),a("td",[e._v("表数据")]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("[]")])]),e._v(" "),a("tr",[a("td",[e._v("chart.api")]),e._v(" "),a("td",[e._v("表数据的API")]),e._v(" "),a("td",[e._v("string")]),e._v(" "),a("td",[e._v("[]")])])])]),e._v(" "),a("inAnchor",{attrs:{title:"类型三：基于iView Card 组件的数据概览卡片",h3:""}}),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("charts")]),e._v(" "),a("td",[e._v("图的配置集合")]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("不可为空")])])])])],1),e._v(" "),a("inAnchor",{attrs:{title:"基于Echart的可视化图表",h2:""}}),e._v(" "),a("Demo",{attrs:{title:"饼图、折线图、柱状图、漏斗图",vertical:""}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("DataVisItem",{attrs:{charts:e.code.simple.data.charts}})],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("p",[e._v("通过设置"),a("code",[e._v("charts")]),e._v("即可生成一个一系列可视化图表。")])]),e._v(" "),a("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),a("inAnchor",{attrs:{title:"基于iView Table组件的表格和留存图",h2:""}}),e._v(" "),a("Demo",{attrs:{title:"表格、留存",vertical:""}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("DataVisItem",{attrs:{charts:e.code.table.data.charts}})],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("p",[e._v("通过设置"),a("code",[e._v("charts")]),e._v("即可生成一个一系列数据表格和留存表。")])]),e._v(" "),a("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.table.code))])],1),e._v(" "),a("inAnchor",{attrs:{title:"基于iView Card 组件的数据概览卡片",h2:""}}),e._v(" "),a("Demo",{attrs:{title:"数据概览",vertical:""}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("DataVisItem",{attrs:{display:"inline",charts:e.code.card.data.charts}})],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("p",[e._v("通过设置"),a("code",[e._v("charts")]),e._v("即可生成一个一系列数据表格和留存表。")])]),e._v(" "),a("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.card.code))])],1)],1)])};n._withStripped=!0;var d=a(751),o=a(752),r=a(753),s=a(754),i={},l=[{label:"饼图",dataset:{source:[{date:"Mon",data:120},{date:"Tue",data:200},{date:"Wed",data:150},{date:"Thu",data:80},{date:"Fri",data:70},{date:"Sat",data:110},{date:"Sun",data:130}]},series:[{type:"pie"}]},{label:"折线图",xAxis:{type:"category"},yAxis:{},dataset:{source:[{date:"Mon",data:120},{date:"Tue",data:200},{date:"Wed",data:150},{date:"Thu",data:80},{date:"Fri",data:70},{date:"Sat",data:110},{date:"Sun",data:130}]},series:[{type:"line"}]},{label:"折线图-多条",dataset:[{source:[{date:"Mon",sells:120,score:60},{date:"Tue",sells:200,score:70},{date:"Wed",sells:150,score:80},{date:"Thu",sells:80,score:90},{date:"Fri",sells:70,score:100},{date:"Sat",sells:110,score:110},{date:"Sun",sells:130,score:120}]}],series:[{name:"销量",type:"line"},{name:"得分",type:"line"}],xAxis:{type:"category"},yAxis:{}},{label:"折线图-多轴",dataset:[{source:[{date:"Mon",data:120},{date:"Tue",data:200},{date:"Wed",data:150},{date:"Thu",data:80},{date:"Fri",data:70},{date:"Sat",data:110},{date:"Sun",data:130}]},{source:[{date:"Mon",data:245},{date:"Tue",data:205},{date:"Wed",data:55},{date:"Thu",data:195},{date:"Fri",data:275},{date:"Sat",data:215},{date:"Sun",data:35}]}],series:[{name:"第一周",type:"line",datasetIndex:0},{name:"第二周",type:"line",datasetIndex:1,xAxisIndex:1}],xAxis:[{type:"category"},{type:"category"}],yAxis:{}},{label:"柱状图-水平",xAxis:{},yAxis:{type:"category"},dataset:{source:[{date:"Mon",data:120},{date:"Tue",data:200},{date:"Wed",data:150},{date:"Thu",data:80},{date:"Fri",data:70},{date:"Sat",data:110},{date:"Sun",data:130}]},series:[{type:"bar"}]},{label:"柱状图-垂直",xAxis:{type:"category"},yAxis:{},dataset:{source:[{date:"Mon",data:120},{date:"Tue",data:200},{date:"Wed",data:150},{date:"Thu",data:80},{date:"Fri",data:70},{date:"Sat",data:110},{date:"Sun",data:130}]},series:[{type:"bar"}]},{label:"漏斗",dataset:{source:[{date:"Mon",data:420},{date:"Tue",data:300},{date:"Wed",data:250},{date:"Thu",data:190},{date:"Fri",data:170},{date:"Sat",data:90},{date:"Sun",data:30}]},series:[{type:"funnel"}]}];i.data={charts:l},i.code="\nconst charts = "+JSON.stringify(l,null,4)+";\n\n<template>\n    <DataVisItem\n        :charts='charts'\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            charts\n        };\n    }\n};\n<\/script>\n";var v={},h=[{label:"留存",type:"retain",downloadAble:!1,columns:[{title:"日期",key:"date"},{title:"用户数",key:"user_number"},{title:"1天后",key:"1"},{title:"2天后",key:"2"},{title:"3天后",key:"3"},{title:"4天后",key:"4"},{title:"5天后",key:"5"},{title:"6天后",key:"6"},{title:"7天后",key:"7"}],data:[{date:"2018-01-10",user_number:123456789,1:90.7,2:"",3:"",4:"",5:"",6:"",7:""},{date:"2018-01-09",user_number:123456789,1:60.34,2:55.22,3:"",4:"",5:"",6:"",7:""},{date:"2018-01-08",user_number:123456789,1:90.34,2:85.29,3:74.39,4:"",5:"",6:"",7:""},{date:"2018-01-07",user_number:123456789,1:60,2:55.01,3:44.49,4:33.29,5:"",6:"",7:""},{date:"2018-01-06",user_number:123456789,1:60.29,2:55.47,3:54.57,4:53.29,5:52.98,6:"",7:""},{date:"2018-01-05",user_number:123456789,1:90,2:85.23,3:74.48,4:63.47,5:52.77,6:40.22,7:""},{date:"2018-01-04",user_number:123456789,1:90.78,2:85.36,3:74.78,4:63.26,5:52.97,6:40.46,7:38.76},{date:"2018-01-03",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2}]},{label:"数据表格",type:"table",hideElevator:!0,hideSizer:!0,downloadAble:!1,customColumns:["name","age","address","money","name-1","age-1","address-1","money-1"],columns:[{title:"Name",key:"name",defaultShow:!0},{title:"Age",key:"age",sortable:!0,defaultShow:!1},{title:"Address",key:"address",defaultShow:!0},{title:"Date",key:"date",defaultShow:!0},{title:"Money",key:"money",defaultShow:!0},{title:"Name-1",key:"name-1",defaultShow:!0},{title:"Age-1",key:"age-1",sortable:!0,defaultShow:!1},{title:"Address-1",key:"address-1",defaultShow:!0},{title:"Date-1",key:"date-1",defaultShow:!0},{title:"Money-1",key:"money-1",defaultShow:!0}],data:[{name:"John Brown",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112.22223,"name-1":"John Brown","age-1":18,"address-1":"New York No. 1 Lake Park","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown","age-1":18,"address-1":"New York No. 1 Lake Park","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown","age-1":18,"address-1":"New York No. 1 Lake Park","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown","age-1":18,"address-1":"New York No. 1 Lake Park","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown","age-1":18,"address-1":"New York No. 1 Lake Park","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown","age-1":18,"address-1":"New York No. 1 Lake Park","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown","age-1":18,"address-1":"New York No. 1 Lake Park","date-1":"2016-10-03","money-1":121212122112.22223},{name:"John Brown",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown","age-1":18,"address-1":"New York No. 1 Lake Park","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:null,"name-1":"John Brown","age-1":18,"address-1":"New York No. 1 Lake Park","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown","age-1":18,"address-1":"New York No. 1 Lake Park","date-1":"2016-10-03","money-1":121212122112}]}];v.data={charts:h},v.code="\nconst charts = "+JSON.stringify(h,null,4)+";\n\n<template>\n    <DataVisItem\n        :charts='charts'\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            charts\n        };\n    }\n};\n<\/script>\n";var c={},_=[{type:"card",label:"年活跃",data:[{label:"活跃用户数",value:22246150,unit:"人",showChange:!1},{label:"日环比",value:-4.88,unit:"%",showChange:!0},{label:"周同比",value:-1.36,unit:"%",showChange:!0}]},{type:"card",label:"年活跃",data:[{label:"活跃用户数",value:22246150,unit:"人",showChange:!1},{label:"日环比",value:-4.88,unit:"%",showChange:!0},{label:"周同比",value:-1.36,unit:"%",showChange:!0}]},{type:"card",label:"年活跃",data:[{label:"人均使用时长",value:56.24,unit:"分钟",showChange:!1},{label:"日环比",value:-6.01,unit:"%",showChange:!0},{label:"周同比",value:-4.32,unit:"%",showChange:!0}]}];c.data={charts:_},c.code="\nconst charts = "+JSON.stringify(_,null,4)+";\n\n<template>\n    <DataVisItem\n        :charts='charts'\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            charts\n        };\n    }\n};\n<\/script>\n";var m={simple:i,table:v,card:c},p={components:{iArticle:d.a,inAnchor:o.a,iCode:r.a,Demo:s.a},data:function(){return{code:m}},methods:{handleFieldChange:function(e,t){console.log(e,t)}}},u=a(3),y=Object(u.a)(p,n,[],!1,null,null,null);y.options.__file="website/page/doc/DataVisItem/index.vue";var w=y.exports;t.default=w},775:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("practice")])};n._withStripped=!0;var d={},o=a(3),r=Object(o.a)(d,n,[],!1,null,null,null);r.options.__file="website/page/practice/index.vue";var s=r.exports;t.default=s}}]);