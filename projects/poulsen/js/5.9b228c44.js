(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        Poulsen App\n      ")])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("Menu "),e.loggedIn?a("span",[e._v("(Loged in as: "+e._s(e.user.email)+")")]):e._e()])],1),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/partFinder",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"directions_car"}})],1),a("q-item-section",[e._v("\n        Parts for my car\n      ")])],1),a("q-expansion-item",{attrs:{icon:"build",label:"Products","default-opened":""}},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticStyle:{"margin-left":"16px"},attrs:{to:"/products/1",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mdi-car-door"}})],1),a("q-item-section",[e._v("\n          Bílavarahlutir\n        ")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticStyle:{"margin-left":"16px"},attrs:{to:"/products/19",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"las la-tachometer-alt"}})],1),a("q-item-section",[e._v("\n          Bílavörur\n        ")])],1)],1),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"shopping_cart"}})],1),a("q-item-section",[a("p",{staticStyle:{padding:"0",margin:"0"}},[e._v("\n          My basket\n          "),a("q-badge",{attrs:{color:"blue"}},[e._v("2")])],1)])],1),a("div",{staticStyle:{width:"100%",position:"absolute",bottom:"0",left:"0"}},[a("q-separator"),e.loggedIn?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/myAccount",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"account_box"}})],1),a("q-item-section",[e._v("\n        My Account\n      ")])],1):e._e(),a("q-separator"),e.loggedIn?e._e():a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/login",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"vpn_key"}})],1),a("q-item-section",[e._v("\n        Login\n      ")])],1),e.loggedIn?a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(t){return e.logout()}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"exit_to_app"}})],1),a("q-item-section",[e._v("\n        Logout\n      ")])],1):e._e()],1)],1),a("q-page-container",[a("router-view")],1)],1)},n=[],i=a("6b64"),o={name:"MainLayout",components:{},data:function(){return{user:{},loggedIn:!1,helper:i["a"],leftDrawerOpen:!1}},created:function(){var e=this;this.loggedIn=i["a"].user.fn.loggedIn(),this.user=i["a"].user.fn.get(),this.$root.$on("Login-onSubmit-success",(function(t){e.user=i["a"].user.fn.get(),e.loggedIn=i["a"].user.fn.loggedIn()}))},methods:{logout:function(){i["a"].user.fn.lsRemove(),this.user=i["a"].user.fn.get(),this.loggedIn=i["a"].user.fn.loggedIn()}}},s=o,l=a("2877"),c=a("eebe"),p=a.n(c),m=a("4d5a"),u=a("e359"),d=a("65c6"),v=a("9c40"),g=a("6ac5"),q=a("9404"),b=a("1c1c"),f=a("0170"),w=a("eb85"),_=a("66e5"),h=a("4074"),I=a("0016"),Q=a("3b73"),k=a("58a8"),y=a("09e3"),x=a("714f"),L=Object(l["a"])(s,r,n,!1,null,null,null);t["default"]=L.exports;p()(L,"components",{QLayout:m["a"],QHeader:u["a"],QToolbar:d["a"],QBtn:v["a"],QToolbarTitle:g["a"],QDrawer:q["a"],QList:b["a"],QItemLabel:f["a"],QSeparator:w["a"],QItem:_["a"],QItemSection:h["a"],QIcon:I["a"],QExpansionItem:Q["a"],QBadge:k["a"],QPageContainer:y["a"]}),p()(L,"directives",{Ripple:x["a"]})}}]);