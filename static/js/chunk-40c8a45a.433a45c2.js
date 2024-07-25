/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-7-25 13:03:10
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40c8a45a"],{"6bb2":function(t,e,o){"use strict";o.r(e);var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"menuManagement-container"},[e("el-divider",{attrs:{"content-position":"left"}},[t._v(" 演示环境仅做基础功能展示，若想实现不同角色的真实菜单配置，需将settings.js路由加载模式改为all模式，由后端全面接管路由渲染与权限控制 ")]),e("el-row",[e("el-col",{attrs:{lg:4,md:8,sm:24,xl:4,xs:24}},[e("el-tree",{attrs:{data:t.data,"default-expanded-keys":["root"],"node-key":"id",props:t.defaultProps},on:{"node-click":t.handleNodeClick}})],1),e("el-col",{attrs:{lg:20,md:16,sm:24,xl:20,xs:24}},[e("vab-query-form",[e("vab-query-form-top-panel",{attrs:{span:12}},[e("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:t.handleEdit}},[t._v("添加")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{border:"",data:t.list,"default-expand-all":"","element-loading-text":t.elementLoadingText,"row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}}},[e("el-table-column",{attrs:{label:"name",prop:"name","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"路径",prop:"path","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"是否隐藏","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function({row:o}){return[e("span",[t._v(" "+t._s(o.hidden?"是":"否")+" ")])]}}])}),e("el-table-column",{attrs:{label:"是否一直显示当前节点","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function({row:o}){return[e("span",[t._v(" "+t._s(o.alwaysShow?"是":"否")+" ")])]}}])}),e("el-table-column",{attrs:{label:"vue文件路径",prop:"component","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"重定向",prop:"redirect","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"标题",prop:"meta.title","show-overflow-tooltip":""}}),e("el-table-column",{attrs:{label:"图标","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function({row:o}){return[o.meta?e("span",[o.meta.icon?e("vab-icon",{attrs:{icon:["fas",o.meta.icon]}}):t._e()],1):t._e()]}}])}),e("el-table-column",{attrs:{label:"是否固定","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function({row:o}){return[o.meta?e("span",[t._v(" "+t._s(o.meta.affix?"是":"否")+" ")]):t._e()]}}])}),e("el-table-column",{attrs:{label:"是否无缓存","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function({row:o}){return[o.meta?e("span",[t._v(" "+t._s(o.meta.noKeepAlive?"是":"否")+" ")]):t._e()]}}])}),e("el-table-column",{attrs:{label:"badge","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function({row:o}){return[o.meta?e("span",[t._v(" "+t._s(o.meta.badge)+" ")]):t._e()]}}])}),e("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":"",width:"200"},scopedSlots:t._u([{key:"default",fn:function({row:o}){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleEdit(o)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleDelete(o)}}},[t._v("删除")])]}}])})],1)],1)],1),e("edit",{ref:"edit",on:{"fetch-data":t.fetchData}})],1)},a=[],s=o("2033"),n=o("754e"),i=o("f5ce"),r={name:"MenuManagement",components:{Edit:i["default"]},data(){return{data:[],defaultProps:{children:"children",label:"label"},list:[],listLoading:!0,elementLoadingText:"正在加载...",timeOutID:null}},async created(){const t=await Object(n["getTree"])();this.data=t.data,this.fetchData()},beforeDestroy(){clearTimeout(this.timeOutID)},methods:{handleEdit(t){t.path?this.$refs["edit"].showEdit(t):this.$refs["edit"].showEdit()},handleDelete(t){t.id&&this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{msg:e}=await Object(n["doDelete"])({ids:t.id});this.$baseMessage(e,"success"),this.fetchData()})},async fetchData(){this.listLoading=!0;const{data:t}=await Object(s["getRouterList"])();this.list=t,this.timeOutID=setTimeout(()=>{this.listLoading=!1},300)},handleNodeClick(){this.fetchData()}}},d=r,c=o("426c"),u=Object(c["a"])(d,l,a,!1,null,null,null);e["default"]=u.exports},"754e":function(t,e,o){"use strict";o.r(e),o.d(e,"getTree",(function(){return a})),o.d(e,"doEdit",(function(){return s})),o.d(e,"doDelete",(function(){return n}));var l=o("b775");function a(t){return Object(l["default"])({url:"/menuManagement/getTree",method:"post",data:t})}function s(t){return Object(l["default"])({url:"/menuManagement/doEdit",method:"post",data:t})}function n(t){return Object(l["default"])({url:"/menuManagement/doDelete",method:"post",data:t})}},f5ce:function(t,e,o){"use strict";o.r(e);var l=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:t.title,visible:t.dialogFormVisible,width:"500px"},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.close}},[e("el-divider",{attrs:{"content-position":"left"}},[t._v("这里就不具体写了，请自行完善")]),e("el-form",{ref:"form",attrs:{"label-width":"80px",model:t.form,rules:t.rules}},[e("el-form-item",{attrs:{label:"name",prop:"name"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"路径",prop:"path"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.path,callback:function(e){t.$set(t.form,"path",e)},expression:"form.path"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.close}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("确 定")])],1)],1)},a=[],s=o("754e"),n={name:"MenuManagementEdit",data(){return{form:{},rules:{id:[{required:!0,trigger:"blur",message:"请输入路径"}]},title:"",dialogFormVisible:!1}},created(){},methods:{showEdit(t){t?(this.title="编辑",this.form=Object.assign({},t)):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},save(){this.$refs["form"].validate(async t=>{if(!t)return!1;{const{msg:t}=await Object(s["doEdit"])(this.form);this.$baseMessage(t,"success"),this.$emit("fetch-data"),this.close()}})}}},i=n,r=o("426c"),d=Object(r["a"])(i,l,a,!1,null,null,null);e["default"]=d.exports}}]);