(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form-popover"],{"0d0f":function(t,e,a){},c1a0:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-form-popover"},[a("Table",{attrs:{loading:t.tableLoading,columns:t.columns,data:t.data},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.row;return[a("Poptip",{attrs:{placement:"left-start"}},[a("Button",{attrs:{type:"primary",size:"small"}},[t._v("编辑")]),a("div",{attrs:{slot:"title"},slot:"title"},[a("i",[t._v("Custom title")])]),a("div",{attrs:{slot:"content"},slot:"content"},[a("FormGenerator",{ref:"FormGenerator",attrs:{fields:t.editFormFields,model:o},on:{"on-submit":t.handleSubmit}})],1)],1)]}}])}),a("div",{staticClass:"page-form-popover-pagenation"},[a("Page",{attrs:{total:t.total,"show-total":""}})],1)],1)},n=[],i=a("8e44"),s=i["a"]["form"],r=s.getPageConfig,l=s.getList,d={data:function(){return{loading:!0,tableLoading:!0,data:[],editModel:{},pageConfig:{},editDialogOpeon:!1,pageSize:10,pageNumber:1,total:0,model:{},open:!1}},computed:{options:function(){return this.pageConfig.form.options},columns:function(){return this.pageConfig.columns},editFormFields:function(){return this.pageConfig.editFormFields}},mounted:function(){var t=this,e=this.$route.params.pageId;r({pageId:e}).then(function(e){t.pageConfig=e.data,t.loading=!1,t.getTableData()})},methods:{getTableData:function(){var t=this;this.tableLoading=!0;var e=this.$route.params.pageId,a={pageSize:this.pageSize,pageNumber:this.pageNumber,pageId:e};l(a).then(function(e){var a=e.data,o=a.list,n=a.pageSize,i=a.pageNumber,s=a.total;t.data=o||[],t.pageSize=n||t.pageSize,t.pageNumber=i||t.pageNumber,t.total=s||t.total,t.tableLoading=!1})},handleEditButtonClick:function(t,e){this.editModel=t,this.editModel.index=e,this.editDialogOpeon=!0},handleSubmit:function(){var t=this;this.$refs.FormGenerator.submit().then(function(e){console.log("update model",e),t.open=!1,t.$Message.info("update success!")}).catch(function(t){console.log("valid",t)})}}},u=d,p=(a("c7d4"),a("2877")),g=Object(p["a"])(u,o,n,!1,null,null,null);e["default"]=g.exports},c7d4:function(t,e,a){"use strict";var o=a("0d0f"),n=a.n(o);n.a}}]);
//# sourceMappingURL=form-popover.76b4f789.js.map