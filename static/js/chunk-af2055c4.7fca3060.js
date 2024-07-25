/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-7-25 13:03:10
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af2055c4"],{"0df9":function(t,e,a){"use strict";a("a934")},"1cc4":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"colorful-icon-container"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("多彩图标在演示环境中使用的是cdn加速服务，开发时需存储到本地，点击图标即可复制源码")])],1),e("el-col",{attrs:{span:24}},[e("el-form",{attrs:{inline:!0,"label-width":"80px"},nativeOn:{submit:function(t){t.preventDefault()}}},[e("el-form-item",{attrs:{label:"图标名称"}},[e("el-input",{model:{value:t.queryForm.title,callback:function(e){t.$set(t.queryForm,"title",e)},expression:"queryForm.title"}})],1),e("el-form-item",{attrs:{"label-width":"0"}},[e("el-button",{attrs:{"native-type":"submit",type:"primary"},on:{click:t.queryData}},[t._v("搜索")])],1)],1)],1),t._l(t.queryIcon,(function(a,o){return e("el-col",{key:o,attrs:{lg:2,md:3,sm:8,xl:2,xs:6}},[e("el-card",{staticStyle:{cursor:"pointer"},attrs:{shadow:"hover"},nativeOn:{click:function(e){return t.handleCopyIcon(o,e)}}},[e("vab-colorful-icon",{attrs:{"icon-class":`https://gcore.jsdelivr.net/gh/zxwk1998/zx-colorful-icon@master/${a}.svg`}})],1),e("div",{staticClass:"icon-text"},[t._v(" "+t._s(a)+" ")])],1)})),e("el-col",{attrs:{span:24}},[e("el-pagination",{attrs:{background:t.background,"current-page":t.queryForm.pageNo,layout:t.layout,"page-size":t.queryForm.pageSize,"page-sizes":[72,144,216,288],total:t.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],2)],1)},n=[],r=a("317d"),c=a("f71e"),s={name:"ColorfulIcon",data(){return{copyText:"",layout:"total, sizes, prev, pager, next, jumper",total:0,background:!0,height:0,selectRows:"",elementLoadingText:"正在加载...",queryIcon:[],queryForm:{pageNo:1,pageSize:72,title:""}}},created(){this.fetchData()},methods:{handleSizeChange(t){this.queryForm.pageSize=t,this.fetchData()},handleCurrentChange(t){this.queryForm.pageNo=t,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){const{data:t,totalCount:e}=await Object(r["getIconList"])(this.queryForm);this.queryIcon=t,this.allIcon=t,this.total=e},handleCopyIcon(t,e){const a=`<vab-colorful-icon icon-class="${this.queryIcon[t]}" />`;this.copyText=a,Object(c["default"])(a,e)}}},i=s,l=(a("0df9"),a("426c")),u=Object(l["a"])(i,o,n,!1,null,"10b9b16e",null);e["default"]=u.exports},"317d":function(t,e,a){"use strict";a.r(e),a.d(e,"getIconList",(function(){return n}));var o=a("b775");function n(t){return Object(o["default"])({url:"/colorfulIcon/getList",method:"post",data:t})}},a934:function(t,e,a){},f71e:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return i}));var o=a("be1a"),n=a("a2ea"),r=a.n(n);function c(){o["default"].prototype.$baseMessage("复制成功","success")}function s(){o["default"].prototype.$baseMessage("复制失败","error")}function i(t,e){const a=new r.a(e.target,{text:()=>t});a.on("success",()=>{c(),a.destroy()}),a.on("error",()=>{s(),a.destroy()}),a.onClick(e)}}}]);