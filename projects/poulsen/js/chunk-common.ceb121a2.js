(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"15be":function(e,t,i){},"59f1":function(e,t,i){},"6b64":function(e,t,i){"use strict";var a={hc:function(e){return 0===e||24===e?"12:00am":12===e?"12:00pm":e%12+":00"+(e>12?"pm":"am")}},r={get:function(e,t){var i=window.localStorage.getItem(e);return"Object"===t&&(i=JSON.parse(i)),i},set:function(e,t,i){"Object"===i&&(t=JSON.stringify(t)),window.localStorage.setItem(e,t)},remove:function(e){window.localStorage.removeItem(e)},empty:function(e){return null===window.localStorage.getItem(e)}},n={split:function(e,t){var i=[];if(t<2)return[e];for(var a=Math.floor(e.length/t),r=0;r<e.length;r+=a){if(i.length>=t-1){i.push(e.slice(r,e.length));break}i.push(e.slice(r,r+a))}return i}},o={split:function(e,t){for(var i=[],a=0;a<e.length;a+=t)i.push(e.slice(a,a+t));return i}},c={clone:function(e){return JSON.parse(JSON.stringify(e))},merge:function(e,t){for(var i in t)void 0!==e[i]&&(t[i]=e[i]);return t}},s={instance:function(){return{id:0,email:""}},lsKey:"Auth-User"};s.fn={get:function(){return r.empty(s.lsKey)?s.instance():r.get(s.lsKey,"Object")},lsStore:function(e){var t=s.instance();t.id=e.id,t.email=e.email,r.set(s.lsKey,t,"Object")},lsRemove:function(){r.remove(s.lsKey)},loggedIn:function(){return!r.empty(s.lsKey)}},t["a"]={time:a,ls:r,str:n,arr:o,obj:c,user:s}},7079:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"qa-md p-products"},[i("div",{staticClass:"row",staticStyle:{"margin-top":"-20px","margin-left":"16px"}},[i("q-btn-toggle",{directives:[{name:"show",rawName:"v-show",value:e.config.showViewType,expression:"config.showViewType"}],staticClass:"my-custom-toggle",staticStyle:{border:"1px solid #027be3",padding:"0",margin:"0"},attrs:{"no-caps":"",unelevated:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{value:"grid",slot:"grid"},{value:"filter",slot:"filter"}]},on:{input:function(t){return e.viewTypeChange(e.config.viewType)}},scopedSlots:e._u([{key:"grid",fn:function(){return[i("div",{staticClass:"row items-center no-wrap",staticStyle:{padding:"0",margin:"0"}},[i("q-icon",{staticStyle:{padding:"0",margin:"0"},attrs:{right:"",name:"grid_on"}})],1)]},proxy:!0},{key:"filter",fn:function(){return[i("div",{staticClass:"row items-center no-wrap"},[i("q-icon",{staticStyle:{padding:"0",margin:"0"},attrs:{right:"",name:"filter_list"}})],1)]},proxy:!0}]),model:{value:e.config.viewType,callback:function(t){e.$set(e.config,"viewType",t)},expression:"config.viewType"}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.config.showVehiclePartsFilter,expression:"config.showVehiclePartsFilter"}],staticClass:"row",staticStyle:{padding:"16px 0 0 16px","margin-right":"16px"}},[i("div",{staticClass:"col-12"},[i("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[i("q-expansion-item",{attrs:{group:"somegroup",icon:"search",label:"Filters","default-closed":"","header-class":"text-primary"}},[i("q-card",[i("q-card-section",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("q-select",{attrs:{"use-input":"","use-chips":"","input-debounce":"0","hide-dropdown-icon":"",color:"teal",outlined:"",label:"Plate number (No input validation yet)"},on:{"new-value":e.tecAllianceVehicleInputCreate,input:e.tecAllianceVehicleInputClear},model:{value:e.tecAlliance.input.plateNumber,callback:function(t){e.$set(e.tecAlliance.input,"plateNumber",t)},expression:"tecAlliance.input.plateNumber"}})],1)]),i("br"),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("q-select",{directives:[{name:"show",rawName:"v-show",value:e.tecAlliance.vehicles.show,expression:"tecAlliance.vehicles.show"}],attrs:{outlined:"",options:e.tecAlliance.vehicles.data,label:"Select a model"},on:{input:function(t){return e.tecAllianceSelectVehicle()}},model:{value:e.tecAlliance.vehicles.select,callback:function(t){e.$set(e.tecAlliance.vehicles,"select",t)},expression:"tecAlliance.vehicles.select"}})],1)]),i("br")])],1)],1)],1)],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:"grid"===e.config.viewType,expression:"config.viewType === 'grid'"}],staticClass:"row",class:-1==e.tecAlliance.vehicles.select.value&&e.config.showVehiclePartsFilter?"disabled":"",staticStyle:{padding:"0 16px"}},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"row"},[i("div",{directives:[{name:"show",rawName:"v-show",value:"grid"===e.config.viewType&&e.showGridViewNavigation,expression:"config.viewType === 'grid' && showGridViewNavigation"}],staticClass:"col-12",staticStyle:{padding:"8px 0 8px 4px"}},[i("q-breadcrumbs",{staticStyle:{cursor:"pointer"}},[i("q-breadcrumbs-el",{attrs:{label:"Home"}}),i("q-breadcrumbs-el",{attrs:{label:"Components"}}),i("q-breadcrumbs-el",{attrs:{label:"Breadcrumbs"}}),i("q-breadcrumbs-el",{attrs:{label:"(Work in progress...)"}})],1)],1),e._l(e.categoryTree.data,(function(t,a){return i("div",{key:a,staticClass:"col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 p-card-container",on:{click:function(i){return e.gridTreeSelect(t)}}},[i("q-card",{staticClass:"p-card",staticStyle:{margin:"8px 16px 8px 0px"}},[i("q-card-section",[i("img",{staticStyle:{width:"100%"},attrs:{src:"https://cdn3.iconfinder.com/data/icons/automotive-parts/256/turbo-512.png"}}),i("div",[i("q-tooltip",[e._v("\n                 "+e._s(t.Description)+"\n                ")]),i("p",{staticStyle:{"text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden"}},[e._v(e._s(t.Description))])],1)])],1)],1)}))],2)])]),i("div",{staticClass:"row",staticStyle:{padding:"0 16px"}},[i("div",{staticClass:"col-12"},[e.config.init?i("q-infinite-scroll",{attrs:{offset:250},on:{load:e.onLoad},scopedSlots:e._u([e.products.loading?{key:"loading",fn:function(){return[i("div",{staticClass:"row justify-center"},[i("div",{staticClass:"col-1"},[i("q-spinner",{attrs:{color:"primary",size:"40px"}})],1)])]},proxy:!0}:null],null,!0)},[i("div",{staticClass:"row"},e._l(e.products.data,(function(t,a){return i("div",{key:a,staticClass:"p-card-container col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12"},[i("q-card",{staticClass:"p-card",staticStyle:{margin:"8px 16px 8px 0px"}},[i("q-card-section",[i("img",{staticStyle:{width:"100%"},attrs:{src:t.img}}),i("div",[i("q-tooltip",[e._v("\n                 "+e._s(t.Description)+"\n                ")]),i("p",{staticStyle:{"text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden"}},[e._v(e._s(t.Description))])],1),i("p",{staticStyle:{padding:"0",margin:"0"}},[i("span",{staticStyle:{color:"#ccc"}},[e._v("Unit Price:")]),e._v(" "+e._s(t.UnitPrice)+"ISK")]),i("p",[i("span",{staticStyle:{color:"#ccc"}},[e._v("Unit Price (VAT): ")]),e._v(" "+e._s(t.UnitPriceInclVAT)+"ISK")])])],1)],1)})),0)]):e._e(),i("div",{staticClass:"row justify-center"},[i("h6",{directives:[{name:"show",rawName:"v-show",value:e.products.nothingFound,expression:"products.nothingFound"}],staticStyle:{color:"#ccc"}},[e._v("Nothing found")])])],1)])])},r=[],n=(i("28a5"),i("551c"),i("06db"),i("542c"),i("bc3a")),o=i.n(n),c=i("6b64"),s={name:"Products",components:{},props:{showViewType:Boolean,viewType:String,queryParams:Object,treeCatId:String,showVehiclePartsFilter:Boolean,showGridViewNavigation:Boolean},data:function(){return{config:{init:!1,cacheTree:!1,showViewType:!1,showVehiclePartsFilter:!1,showGridViewNavigation:!1,viewType:"grid"},products:{loading:!1,queryParams:{itemXML:"",pageSize:10,pageNo:1,vendorItemNoFilter1:"",vendorItemNoFilter2:"",vendorItemNoFilter3:"",vendorItemNoFilter4:"",vendorItemNoFilter5:"",vendorItemNoFilter6:"",webCategoryFilter:""},data:[],pagination:{pageSize:10,page:1,done:function(){}},nothingFound:!1},categoryTree:{placeholder:"Please Select a category...",select:[],data:[],queryParams:{categoriesXMLPartial:"",vendorItemNoFilter1:"",vendorItemNoFilter2:"",vendorItemNoFilter3:"",vendorItemNoFilter4:"",vendorItemNoFilter5:"",vendorItemNoFilter6:""}},tecAlliance:{init:!1,input:{plateNumber:null},articles:[],vehicles:{select:{label:"Nothing fund",value:-1},show:!1,data:[]}},vehicles:{select:"",data:[]},infiniteScroll:!1}},created:function(){console.warn(">>> Products: "),void 0!==this.viewType&&(this.config.viewType=this.viewType),void 0!==this.showViewType&&this.configsShowViewType(this.showViewType),void 0!==this.showVehiclePartsFilter&&this.configshowVehiclePartsFilter(this.showVehiclePartsFilter)},methods:{get:function(){var e=this;return this.products.queryParams.pageSize=this.products.pagination.pageSize,this.products.queryParams.pageNo=this.products.pagination.page,new Promise((function(t,i){o.a.get("http://dev.poulsen.is/api/NavApi.php?cu=GetProductInfo&fn=GetProductv4&pa="+JSON.stringify(e.products.queryParams)).then((function(e){t(e)})).catch((function(e){i(e)}))}))},resetGet:function(){this.products.pagination.page=0,this.products.data=[],this.products.nothingFound=!1,this.products.pagination.done()},queryParamsSet:function(e){this.products.queryParams=c["a"].obj.merge(e,this.products.queryParams),console.log(this.products.queryParams)},resetQueryParams:function(){this.products.queryParams={itemXML:"",pageSize:10,pageNo:1,vendorItemNoFilter1:"",vendorItemNoFilter2:"",vendorItemNoFilter3:"",vendorItemNoFilter4:"",vendorItemNoFilter5:"",vendorItemNoFilter6:"",webCategoryFilter:""}},tecAllianceSetArticles:function(e){this.tecAlliance.articles=e},tecAllianceGetVhicles:function(){var e=this;function t(e){e.tecAlliance.vehicles.data.push({label:"Nothing found",value:-1}),e.tecAlliance.vehicles.select=e.tecAlliance.vehicles.data[0],e.$q.loading.hide()}c["a"].ls.remove("Products-categoryTree"),this.$q.loading.show(),this.tecAlliance.vehicles.show=!0,this.tecAlliance.vehicles.data=[{label:"Select model",value:-1}],o.a.get("https://dev.poulsen.is/api/VehicleRegistryService.php?regNum="+this.tecAlliance.input.plateNumber).then((function(i){if(i.data.error)t(e);else{var a=i.data.ret.Vehicle[0].Vin;o.a.get('http://dev.poulsen.is/api/TecAlliance.php?fn=getVehiclesByVIN&fnparams={"lang": "en","provider" : 21011,"country":"IS","articleCountry":"IS","vin": "'+a+'"}').then((function(i){if(i.data.error)t(e);else{var a=i.data.ret.data;for(var r in a.matchingVehicles.array){var n=a.matchingVehicles.array[r];n.label=n.carName,n.value=n.manuId,e.tecAlliance.vehicles.data.push(n)}e.tecAlliance.vehicles.select=e.tecAlliance.vehicles.data[0],e.$q.loading.hide()}}))}}))},tecAllianceSelectVehicle:function(){var e=this;if(-1===this.tecAlliance.vehicles.select.value)return this.$q.notify({color:"negative",message:"Please select a car model."}),!1;this.$q.loading.show(),o.a.get('http://dev.poulsen.is/api/TecAlliance.php?fn=getArticles&fnparams={ "articleCountry": "IS", "provider": 21011, "linkageTargetId": "'+this.tecAlliance.vehicles.select.carId+'", "linkageTargetType": "P", "lang": "en", "perPage": 729, "includeImages": true }').then((function(t){var i=[];for(var a in t.data.ret.articles)i.push(t.data.ret.articles[a].articleNumber);var r=c["a"].arr.split(i,Math.round(i.length/4)),n={categoriesXMLPartial:"",vendorItemNoFilter1:"",vendorItemNoFilter2:"",vendorItemNoFilter3:"",vendorItemNoFilter4:"",vendorItemNoFilter5:"",vendorItemNoFilter6:""};r.length;for(var o=0;o<r.length-1;o++)n["vendorItemNoFilter"+(o+1)]=r[o].join("|");e.queryParamsSet(n),e.categoryTreeSetQueryParams(n),e.categoryTreeGet(1).then((function(){e.$q.loading.hide()})).catch((function(t){console.log(t),e.$q.loading.hide()})),e.tecAllianceSetArticles(t.data.ret.articles)})).catch((function(t){console.log(t),e.$q.loading.hide()}))},tecAllianceVehicleInputFilter:function(e,t,i){t((function(){}))},tecAllianceVehicleInputCreate:function(e,t){t(e,"add-unique"),this.tecAllianceGetVhicles()},tecAllianceVehicleInputClear:function(){var e=this;null===this.tecAlliance.input.plateNumber&&(this.$q.loading.show(),this.resetQueryParams(),this.resetGet(),this.categoryTreeResetQueryParams(),this.tecAllianceGetVhicles(),this.config.init=!1,this.categoryTreeGet(1).then((function(){e.$q.loading.hide()})).catch((function(t){console.log(t),e.$q.loading.hide()})))},categoryTreeGet:function(e){var t=this;this.products.nothingFound=!1;var i={treeData:{},root:function(e,t){return e.filter((function(e){return e.ID===t}))},children:function(e,t){return e.filter((function(e){return e.ParentID===t}))},build:function(e){if(0===e.length)return[];for(var t in e){e[t].id=e[t].ID,e[t].label=e[t].Description,delete e[t].ID;var a=i.children(i.treeData,e[t].id),r=i.build(a);r.length>0&&(e[t].children=r)}return e}};return new Promise((function(a,r){t.categoryTree.placeholder="Loading...";var n="http://dev.poulsen.is/api/NavApi.php?cu=GetCategoryTree&fn=GetWebCategoriesv2&pa="+JSON.stringify(t.categoryTree.queryParams);t.config.cacheTree&&(n="/statics/catTree.json"),o.a.get(n).then((function(r){var n=r.data.data.categoriesXMLPartial.WebCategoryTree;i.treeData=n;var o=i.root(n,parseInt(e)),s=i.children(n,o[0].ID);t.categoryTree.data=i.build(s),t.categoryTree.placeholder="Please Select a category...",t.config.cacheTree||c["a"].ls.set("Products-categoryTree",t.categoryTree,"Object"),a(t.categoryTree)})).catch((function(e){r(e),t.categoryTree.placeholder="Error: failed getting categories"}))}))},categoryTreeReset:function(){this.categoryTree.select=[],this.products.queryParams.webCategoryFilter=""},categoryTreeIsLeaf:function(e){return 0===e.length},categoryTreeSetQueryParams:function(e){this.categoryTree.queryParams=c["a"].obj.merge(e,this.categoryTree.queryParams)},categoryTreeResetQueryParams:function(){this.categoryTree.queryParams={categoriesXMLPartial:"",vendorItemNoFilter1:"",vendorItemNoFilter2:"",vendorItemNoFilter3:"",vendorItemNoFilter4:"",vendorItemNoFilter5:"",vendorItemNoFilter6:""}},gridTreeSelect:function(e){if(-1===this.tecAlliance.vehicles.select.value&&this.config.showVehiclePartsFilter)return!1;this.categoryTreeGet(e.id),this.config.init=!1,void 0===e.children&&(this.config.init=!0,this.gridTreeSetCategoryFilter(e.id))},gridTreeSetCategoryFilter:function(e){this.products.queryParams.webCategoryFilter=e,this.resetGet(),this.onLoad(0,this.products.pagination.done)},onLoad:function(e,t){var i=this;this.products.loading=!0,this.get().then((function(e){i.products.pagination.page++,i.products.loading=!1,i.products.pagination.done=t,void 0!==e.data.data.itemXML.Item&&(Array.isArray(e.data.data.itemXML.Item)||(e.data.data.itemXML.Item=[e.data.data.itemXML.Item]),e.data.data.itemXML.Item.map((function(e){for(var t in console.log(e),e.img="https://banner2.cleanpng.com/20180418/ife/kisspng-drawing-m-02csf-line-art-cartoon-car-parts-5ad753bd7300a6.6853435815240611174711.jpg",e.tecAlliance=[],i.tecAlliance.articles){var a=i.tecAlliance.articles[t];e.No2===a.articleNumber&&(e.tecAlliance=a,void 0!==a.images&&a.images.length>0&&(e.img=a.images[0].imageURL400))}i.products.data.push(e)})),i.products.pagination.done()),0===i.products.data.length&&(i.products.nothingFound=!0)})).catch((function(e){console.log(e),i.$q.notify({color:"negative",message:"Unable to get products (Server side error), please try again later."}),i.products.loading=!1,i.products.pagination.done=t}))},viewTypeChange:function(e){this.config.viewType=e,this.config.init="filter"===e,this.categoryTree.select=[],this.resetGet(),this.categoryTreeGet(this.treeCatId)},viewTypeGet:function(){return this.config.viewType},configSetInit:function(e){this.config.init=e},configsShowViewType:function(e){this.config.showViewType=e},configshowVehiclePartsFilter:function(e){this.config.showVehiclePartsFilter=e},configSetCacheTree:function(e){this.config.cacheTree=e}}},l=s,d=(i("decd"),i("ae61"),i("2877")),u=i("eebe"),p=i.n(u),h=i("9989"),g=i("6a67"),v=i("0016"),m=i("1c1c"),f=i("3b73"),y=i("f09f"),w=i("a370"),b=i("ddd8"),T=i("9c40"),S=i("ead5"),I=i("079e"),N=i("05c0"),P=i("ef35"),F=i("0d59"),q=Object(d["a"])(l,a,r,!1,null,"20c99d64",null);t["a"]=q.exports;p()(q,"components",{QPage:h["a"],QBtnToggle:g["a"],QIcon:v["a"],QList:m["a"],QExpansionItem:f["a"],QCard:y["a"],QCardSection:w["a"],QSelect:b["a"],QBtn:T["a"],QBreadcrumbs:S["a"],QBreadcrumbsEl:I["a"],QTooltip:N["a"],QInfiniteScroll:P["a"],QSpinner:F["a"]})},ae61:function(e,t,i){"use strict";var a=i("59f1"),r=i.n(a);r.a},decd:function(e,t,i){"use strict";var a=i("15be"),r=i.n(a);r.a}}]);