/*!
 *  build: vue-admin-better 
 *  vue-admin-beautiful.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-7-28 14:56:07
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b979a5e"],{"0950":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[t("el-form",{ref:"form",attrs:{"label-width":"80px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"===typeof t?t.trim():t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{autocomplete:"off",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"===typeof t?t.trim():t)},expression:"form.password"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email","string"===typeof t?t.trim():t)},expression:"form.email"}})],1),t("el-form-item",{attrs:{label:"权限",prop:"permissions"}},[t("el-checkbox-group",{model:{value:e.form.permissions,callback:function(t){e.$set(e.form,"permissions",t)},expression:"form.permissions"}},[t("el-checkbox",{attrs:{label:"admin"}}),t("el-checkbox",{attrs:{label:"editor"}})],1)],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.close}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确 定")])],1)],1)},a=[],r=s("953d"),l={name:"UserManagementEdit",data(){return{form:{username:"",password:"",email:"",permissions:[]},rules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}],email:[{required:!0,trigger:"blur",message:"请输入邮箱"}],permissions:[{required:!0,trigger:"blur",message:"请选择权限"}]},title:"",dialogFormVisible:!1}},created(){},methods:{showEdit(e){e?(this.title="编辑",this.form=Object.assign({},e)):this.title="添加",this.dialogFormVisible=!0},close(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1},save(){this.$refs["form"].validate(async e=>{if(!e)return!1;{const{msg:e}=await Object(r["doEdit"])(this.form);this.$baseMessage(e,"success"),this.$emit("fetch-data"),this.close()}})}}},i=l,n=s("426c"),u=Object(n["a"])(i,o,a,!1,null,null,null);t["default"]=u.exports},"953d":function(e,t,s){"use strict";s.r(t),s.d(t,"getList",(function(){return a})),s.d(t,"doEdit",(function(){return r})),s.d(t,"doDelete",(function(){return l}));var o=s("b775");function a(e){return Object(o["default"])({url:"/userManagement/getList",method:"post",data:e})}function r(e){return Object(o["default"])({url:"/userManagement/doEdit",method:"post",data:e})}function l(e){return Object(o["default"])({url:"/userManagement/doDelete",method:"post",data:e})}},aba6:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"userManagement-container"},[t("vab-query-form",[t("vab-query-form-left-panel",{attrs:{span:12}},[t("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.handleEdit}},[e._v("添加")]),t("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:e.handleDelete}},[e._v("批量删除")])],1),t("vab-query-form-right-panel",{attrs:{span:12}},[t("el-form",{attrs:{inline:!0,model:e.queryForm},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",[t("el-input",{attrs:{clearable:"",placeholder:"请输入用户名"},model:{value:e.queryForm.username,callback:function(t){e.$set(e.queryForm,"username","string"===typeof t?t.trim():t)},expression:"queryForm.username"}})],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-search",type:"primary"},on:{click:e.queryData}},[e._v("查询")])],1)],1)],1)],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":e.elementLoadingText},on:{"selection-change":e.setSelectRows}},[t("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection"}}),t("el-table-column",{attrs:{label:"id",prop:"id","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"用户名",prop:"username","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"邮箱",prop:"email","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"权限","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function({row:s}){return e._l(s.permissions,(function(s,o){return t("el-tag",{key:o},[e._v(" "+e._s(s)+" ")])}))}}])}),t("el-table-column",{attrs:{label:"修改时间",prop:"datatime","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":"",width:"200"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleEdit(s)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleDelete(s)}}},[e._v("删除")])]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.queryForm.pageNo,layout:e.layout,"page-size":e.queryForm.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),t("edit",{ref:"edit",on:{"fetch-data":e.fetchData}})],1)},a=[],r=s("953d"),l=s("0950"),i={name:"UserManagement",components:{Edit:l["default"]},data(){return{list:null,listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,selectRows:"",elementLoadingText:"正在加载...",queryForm:{pageNo:1,pageSize:10,username:""},timeOutID:null}},created(){this.fetchData()},beforeDestroy(){clearTimeout(this.timeOutID)},methods:{setSelectRows(e){this.selectRows=e},handleEdit(e){e.id?this.$refs["edit"].showEdit(e):this.$refs["edit"].showEdit()},handleDelete(e){if(e.id)this.$baseConfirm("你确定要删除当前项吗",null,async()=>{const{msg:t}=await Object(r["doDelete"])({ids:e.id});this.$baseMessage(t,"success"),this.fetchData()});else{if(!(this.selectRows.length>0))return this.$baseMessage("未选中任何行","error"),!1;{const e=this.selectRows.map(e=>e.id).join();this.$baseConfirm("你确定要删除选中项吗",null,async()=>{const{msg:t}=await Object(r["doDelete"])({ids:e});this.$baseMessage(t,"success"),this.fetchData()})}}},handleSizeChange(e){this.queryForm.pageSize=e,this.fetchData()},handleCurrentChange(e){this.queryForm.pageNo=e,this.fetchData()},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){this.listLoading=!0;const{data:e,totalCount:t}=await Object(r["getList"])(this.queryForm);this.list=e,this.total=t,this.timeOutID=setTimeout(()=>{this.listLoading=!1},300)}}},n=i,u=s("426c"),c=Object(u["a"])(n,o,a,!1,null,null,null);t["default"]=c.exports}}]);