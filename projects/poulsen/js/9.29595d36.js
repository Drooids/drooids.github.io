(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{7237:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"qa-md",staticStyle:{"margin-top":"28px"}},[a("part-finder")],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-center"},[a("div",{staticClass:"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-8"},[a("q-input",{attrs:{color:"teal",outlined:"",label:"Plate number (No input validation yet)"},model:{value:e.regNum,callback:function(t){e.regNum=t},expression:"regNum"}})],1),a("div",{staticClass:"col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-4"},[a("q-btn",{staticStyle:{height:"100%",width:"94%","margin-left":"8px"},attrs:{loading:e.loading,color:"primary",label:"Query"},on:{click:e.getStepOne}})],1)])]),a("br"),a("div",{staticClass:"steps col-10",staticStyle:{"margin-top":"16px"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.step.one.vehicle.Vin.length>0,expression:"step.one.vehicle.Vin.length > 0"}],staticClass:"col-10"},[a("q-list",[a("q-expansion-item",{directives:[{name:"show",rawName:"v-show",value:e.step.one.show,expression:"step.one.show"}],staticStyle:{border:"1px #000 solid"},attrs:{icon:"",label:"Icelandic car registry","header-class":"text-primary",caption:e.regNum},model:{value:e.step.one.expanded,callback:function(t){e.$set(e.step.one,"expanded",t)},expression:"step.one.expanded"}},[a("q-card",[a("q-card-section",{directives:[{name:"show",rawName:"v-show",value:e.step.one.vehicle.Vin.length>0,expression:"step.one.vehicle.Vin.length > 0"}]},[e._v("\n                Vin: "+e._s(e.step.one.vehicle.Vin)+" "),a("br"),a("p",{staticClass:"text-primary"},[e._v("You seem to have a valid car.")]),a("div",{staticClass:"col-12 text-right"},[e._v("\n                    \n                  "),a("q-btn",{staticStyle:{height:"100%"},attrs:{loading:e.step.one.loading,size:"md",color:"primary",label:"Continue"},on:{click:e.getStepTwo}})],1)])],1)],1),a("br"),a("q-expansion-item",{directives:[{name:"show",rawName:"v-show",value:e.step.two.show,expression:"step.two.show"}],staticStyle:{border:"1px #000 solid"},attrs:{label:"Your car","header-class":"text-primary",caption:"Vin: "+e.step.one.vehicle.Vin},model:{value:e.step.two.expanded,callback:function(t){e.$set(e.step.two,"expanded",t)},expression:"step.two.expanded"}},[a("q-card",[a("q-card-section",[a("q-select",{attrs:{filled:"",options:e.step.two.data.matchingVehicles,label:"Select a model"},model:{value:e.step.two.input.vehicleSelection,callback:function(t){e.$set(e.step.two.input,"vehicleSelection",t)},expression:"step.two.input.vehicleSelection"}}),a("br"),a("div",{staticClass:"col-12 text-right"},[e._v("\n                      \n                    "),a("q-btn",{staticStyle:{height:"100%"},attrs:{loading:e.step.two.loading,size:"md",color:"primary",label:"Continue"},on:{click:e.getStepFive}})],1)],1)],1)],1),a("br"),a("q-expansion-item",{directives:[{name:"show",rawName:"v-show",value:e.step.five.show,expression:"step.five.show"}],staticStyle:{border:"1px #000 solid"},attrs:{label:"Choose a part (Work in progress...)","header-class":"text-primary"},model:{value:e.step.five.expanded,callback:function(t){e.$set(e.step.five,"expanded",t)},expression:"step.five.expanded"}},[a("q-card",[a("q-card-section",[a("products",{ref:"products",attrs:{treeCatId:"1"}})],1)],1)],1)],1)],1)])])},o=[],l=(a("28a5"),a("bc3a")),r=a.n(l),c=a("6b64"),d=a("7079"),p={name:"PartFinder",components:{Products:d["a"]},data:function(){return{loading:!1,regNum:"",step:{one:{loading:!1,show:!1,expanded:!0,vehicle:{Vin:""}},two:{loading:!1,show:!1,expanded:!0,data:{matchingVehicles:[]},input:{vehicleSelection:{label:"Select a car",value:0}}},five:{loading:!1,show:!1,expanded:!0,data:[],input:{}}}}},methods:{getStepOne:function(){var e=this;this.loading=!0,r.a.get("https://dev.poulsen.is/api/VehicleRegistryService.php?regNum="+this.regNum).then((function(t){e.loading=!1,e.step.one.show=!1,e.step.one.vehicle.Vin="",t.data.error?e.loading=!1:(e.step.one.vehicle=t.data.ret.Vehicle[0],e.getStepTwo(),e.loading=!0)}))},getStepTwo:function(){var e=this;this.step.one.loading=!0,r.a.get('http://dev.poulsen.is/api/TecAlliance.php?fn=getVehiclesByVIN&fnparams={"lang": "en","provider" : 21011,"country":"IS","articleCountry":"IS","vin": "'+this.step.one.vehicle.Vin+'"}').then((function(t){if(e.loading=!1,e.step.one.loading=!1,e.step.two.show=!0,!t.data.error)for(var a in e.step.one.data=t.data.ret.data,e.step.two.data.matchingVehicles=[],t.data.ret.data.matchingVehicles.array)t.data.ret.data.matchingVehicles.array[a].label=t.data.ret.data.matchingVehicles.array[a].carName,t.data.ret.data.matchingVehicles.array[a].value=t.data.ret.data.matchingVehicles.array[a].manuId,e.step.two.data.matchingVehicles.push(t.data.ret.data.matchingVehicles.array[a])}))},getStepFive:function(){var e=this;this.step.two.loading=!0,r.a.get('http://dev.poulsen.is/api/TecAlliance.php?fn=getArticles&fnparams={ "articleCountry": "IS", "provider": 21011, "linkageTargetId": "'+this.step.two.input.vehicleSelection.carId+'", "linkageTargetType": "P", "lang": "en", "perPage": 729, "includeImages": true }').then((function(t){var a=[];for(var i in t.data.ret.articles)a.push(t.data.ret.articles[i].articleNumber);var n=c["a"].arr.split(a,Math.round(a.length/4)),s={vendorItemNoFilter1:"",vendorItemNoFilter2:"",vendorItemNoFilter3:"",vendorItemNoFilter4:"",vendorItemNoFilter5:"",vendorItemNoFilter6:""};n.length;for(var o=0;o<n.length-1;o++)s["vendorItemNoFilter"+(o+1)]=n[o].join("|");e.$refs.products.categoryTreeGet("1"),e.$refs.products.queryParamsSet(s),e.$refs.products.tecAllianceSetArticles(t.data.ret.articles),e.step.five.show=!0,e.step.five.expand=!0,e.step.two.loading=!1}))}}},h=p,v=a("2877"),u=a("eebe"),g=a.n(u),m=a("27f9"),w=a("9c40"),x=a("1c1c"),f=a("3b73"),b=a("f09f"),y=a("a370"),S=a("ddd8"),V=Object(v["a"])(h,s,o,!1,null,null,null),N=V.exports;g()(V,"components",{QInput:m["a"],QBtn:w["a"],QList:x["a"],QExpansionItem:f["a"],QCard:b["a"],QCardSection:y["a"],QSelect:S["a"]});var C={name:"PartFinderPage",components:{PartFinder:N}},I=C,q=a("9989"),k=Object(v["a"])(I,i,n,!1,null,null,null);t["default"]=k.exports;g()(k,"components",{QPage:q["a"]})}}]);