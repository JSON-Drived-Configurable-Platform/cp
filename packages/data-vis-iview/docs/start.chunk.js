(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{774:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("i-article",[e("article",[e("h1",[t._v("关于 DataVisIView")]),t._v(" "),e("p",[t._v("DataVisIView 是一套基于 iView UI 和Echarts的开源的图表生成工具，可以很方便的基于Json配置生成可视化图表，主要服务于 PC 界面的中后台产品。")]),t._v(" "),e("inAnchor",{attrs:{title:"特性",h2:""}}),t._v(" "),e("ul",[e("li",[t._v("可配置、高效率")]),t._v(" "),e("li",[t._v("可复用、易维护")]),t._v(" "),e("li",[t._v("文档详细，查询方便")])]),t._v(" "),e("inAnchor",{attrs:{title:"谁在使用",h2:""}}),t._v(" "),e("inAnchor",{attrs:{title:"安装",h2:""}}),t._v(" "),e("p",[t._v("使用 npm")]),t._v(" "),e("i-code",{attrs:{lang:"auto",bg:""}},[t._v(t._s(t.code.introduce.install))]),t._v(" "),e("inAnchor",{attrs:{title:"引入",h2:""}}),t._v(" "),e("p",[t._v("在项目的主文件中添加如下代码：")]),t._v(" "),e("i-code",{attrs:{lang:"auto",bg:""}},[t._v(t._s(t.code.introduce.import))]),t._v(" "),e("alert",[t._v("DataVisIView依赖iview，可以通过如下代码安装和引入iview")]),t._v(" "),e("strong",[t._v("安装和引入iview")]),t._v(" "),e("i-code",{attrs:{lang:"auto",bg:""}},[t._v(t._s(t.code.introduce.installIView))]),t._v(" "),e("i-code",{attrs:{lang:"auto",bg:""}},[t._v(t._s(t.code.introduce.importIView))]),t._v(" "),e("inAnchor",{attrs:{title:"示例",h2:""}}),t._v(" "),e("DataVis",{attrs:{config:t.config}}),t._v(" "),e("inAnchor",{attrs:{title:"版本",h2:""}}),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/package/data-vis-iview",target:"_blank"}},[e("img",{attrs:{src:"https://img.shields.io/npm/v/data-vis-iview.svg?style=flat-square"}})]),t._v(" "),e("br"),t._v(" "),e("i",[t._v("目前仍为开发中，不建议生产环境使用。")])]),t._v(" "),e("inAnchor",{attrs:{title:"兼容",h2:""}}),t._v(" "),e("ul",[e("li",[t._v("支持 iView 3.0")])]),t._v(" "),e("inAnchor",{attrs:{title:"目标用户",h2:""}}),t._v(" "),e("p",[t._v("已经或者打算使用iView组件库来开发中台的"),e("strong",[t._v("前端同学")]),t._v("。")]),t._v(" "),e("p",[t._v("特别项目中有很多的表单场景，直接使用模板开发会导致开发量增加、维护起来很困难。")]),t._v(" "),e("blockquote",[t._v("\n            如果你是从头开始开发一个中台，可以先看看"),e("a",{attrs:{href:"https://github.com/BingBlog/cp"}},[t._v("CP")]),t._v("。这个项目中汇总了很多中台中使用到的工具和模板。有可能会帮助到你。\n        ")]),t._v(" "),e("blockquote",[t._v("\n            如果你是一个不了解前端技术的"),e("strong",[t._v("后端同学")]),t._v("，可以考虑使用"),e("a",{attrs:{href:"https://github.com/baidu/amis",target:"_blank"}},[t._v("amis配置工具")]),t._v("。\n            这个工具可以让你在没有前端同学支持的情况下配置出完整的平台，功能非常强大。\n        ")]),t._v(" "),e("inAnchor",{attrs:{title:"关于文档",h2:""}}),t._v(" "),e("p",[t._v("文档的作用主要有一下几点：")]),t._v(" "),e("ul",[e("li",[t._v("1. 帮助您了解如何使用这个工具；")]),t._v(" "),e("li",[t._v("2. 提供各个组件的配置速查表；这些表对于"),e("strong",[t._v("后端同学")]),t._v("了解如何更改配置很有帮助。")])]),t._v(" "),e("blockquote",[t._v("\n            在我们的实践中，通常是前端将配置以接口的形式暴露给后端，\n            主要的交互和UI部分仍由前端来完成，后续细节的调整可以由后端直接更改。\n        ")]),t._v(" "),e("inAnchor",{attrs:{title:"场景限制",h2:""}}),t._v(" "),e("p",[t._v("做成可配置的，其实是用灵活性去换效率。使用时，需要仔细考虑是否使用可配置的方式。目前的功能会在处理一下几个场景时遇到问题：")]),t._v(" "),e("ul",[e("li",[t._v("交互中，多个表单项之间有关联逻辑。特别是展现关联、校验关联的场景；")])]),t._v(" "),e("inAnchor",{attrs:{title:"与iView的关系",h2:""}}),t._v(" "),e("p",[t._v("工具中的大部分组件都基于 Echarts 图表配置开发。所以在设计上，很多命名都尽量保持与 Echarts 一致。")]),t._v(" "),e("p",[t._v("这个工具仅仅是对 Echarts 做了一些封装。目的是为了让使用 Echarts 和 iView 的同时，也可以通过配置生成表单。")]),t._v(" "),e("p",[t._v("选用Echarts，iView是因为iView社区的活跃度很高，组件库和文档的质量也很好。")]),t._v(" "),e("inAnchor",{attrs:{title:"相关链接",h2:""}}),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.echartsjs.com",target:"_blank"}},[t._v("echarts官方文档")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://iviewui.com/",target:"_blank"}},[t._v("iView官方文档")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/BingBlog/cp",target:"_blank"}},[t._v("A configurable platform frontend ui solution based on iView UI.")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/baidu/amis",target:"_blank"}},[t._v("baidu出品的amis配置工具")])])]),t._v(" "),e("inAnchor",{attrs:{title:"感谢",h2:""}}),t._v(" "),e("p",[t._v('\n            没有iView组件库及社区，这个库不会出现。在工具的实现中，大量的"借鉴"了iView组织的代码。包含但不限于组件库、文档。\n        ')])],1)])};a._withStripped=!0;var n=e(751),r=e(752),v=e(753),s={install:"\n$ npm install data-vis-iview --save\n# or\n$ yarn add data-vis-iview\n",import:'\nimport "data-vis-iview/src/style/index.less";\nimport DataVis from "data-vis-iview";\n\nVue.use(DataVis);\n',installIView:"\n$ npm install iview --save\n# or\n$ npm add iview\n",importIView:'\nimport iView from "iview";\nimport "iview/dist/styles/iview.css";\n\nVue.use(iView);\n'},o=[{label:"姓名",type:"Input",model:"name"},{label:"出生日期",type:"DatePicker",subtype:"datetimerange",model:"birthday"},{label:"性别",type:"Radio",model:"gender",options:[{label:"男",value:"M"},{label:"女",value:"F"},{label:"保密",value:"Screct"}]}],l={title:"用户信息",labelWidth:60,labelPosition:"right"},_={name:"",gender:"",birthday:""};s.demo='\n<template>\n    <FormGenerator\n        :fields="code.introduce.data.fields"\n        :model="code.introduce.data.model"\n        :options="code.introduce.data.options"\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            fields: '+JSON.stringify(o)+",\n            model: "+JSON.stringify(_)+",\n            options: "+JSON.stringify(l)+"\n        };\n    }\n};\n<script>\n",s.data={fields:o,model:_,options:l};var c={introduce:s},d={components:{iArticle:n.a,inAnchor:r.a,iCode:v.a},data:function(){return{code:c}}},p=e(3),h=Object(p.a)(d,a,[],!1,null,null,null);h.options.__file="website/page/intro/index.vue";var u=h.exports;i.default=u}}]);