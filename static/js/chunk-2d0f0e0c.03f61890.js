/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-5-17 11:14:55
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0e0c"],{"9df1":function(e,r,l){"use strict";l.r(r);var t=function(){var e=this,r=e.$createElement,l=e._self._c||r;return l("div",{staticClass:"form-container"},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:8}},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[l("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),l("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[l("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.ruleForm.region,callback:function(r){e.$set(e.ruleForm,"region",r)},expression:"ruleForm.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),l("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[l("el-switch",{model:{value:e.ruleForm.delivery,callback:function(r){e.$set(e.ruleForm,"delivery",r)},expression:"ruleForm.delivery"}})],1),l("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[l("el-checkbox-group",{model:{value:e.ruleForm.type,callback:function(r){e.$set(e.ruleForm,"type",r)},expression:"ruleForm.type"}},[l("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),l("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),l("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),l("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),l("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[l("el-radio-group",{model:{value:e.ruleForm.resource,callback:function(r){e.$set(e.ruleForm,"resource",r)},expression:"ruleForm.resource"}},[l("el-radio",{attrs:{label:"线上品牌商赞助"}}),l("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),l("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v(" 立即创建 ")]),l("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)],1)},o=[],a={name:"Form",data:function(){return{ruleForm:{name:"",region:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()}}},s=a,u=l("5d22"),i=Object(u["a"])(s,t,o,!1,null,null,null);r["default"]=i.exports}}]);