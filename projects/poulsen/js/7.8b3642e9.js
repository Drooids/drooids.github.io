(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"013f":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"qa-md",staticStyle:{"margin-top":"28px"}},[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-12"},[s("login")],1)])])},a=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"qa-md"},[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-6"},[s("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit,reset:e.onReset}},[s("q-input",{attrs:{filled:"",label:"Your email","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),s("q-input",{attrs:{filled:"",type:"password",label:"Password","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please type your age"}]},model:{value:e.user.pwd,callback:function(t){e.$set(e.user,"pwd",t)},expression:"user.pwd"}}),s("div",[s("q-btn",{attrs:{label:"Login",type:"submit",color:"primary"}})],1)],1)],1)])])},l=[],o=s("6b64"),r={name:"Login",data:function(){return{user:{email:"",pwd:""}}},created:function(){},methods:{onSubmit:function(){this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Login successful"});var e={id:0,email:this.user.email};o["a"].user.fn.lsStore(e),this.$root.$emit("Login-onSubmit-success",e),this.$router.push("/")},onReset:function(){}}},u=r,c=s("2877"),m=s("eebe"),d=s.n(m),p=s("9989"),f=s("0378"),g=s("27f9"),b=s("9c40"),w=Object(c["a"])(u,i,l,!1,null,null,null),h=w.exports;d()(w,"components",{QPage:p["a"],QForm:f["a"],QInput:g["a"],QBtn:b["a"]});var v={name:"PageLogin",components:{Login:h},data:function(){return{user:{}}},created:function(){},methods:{}},y=v,q=Object(c["a"])(y,n,a,!1,null,null,null);t["default"]=q.exports;d()(q,"components",{QPage:p["a"]})}}]);