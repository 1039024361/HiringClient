webpackJsonp([2],{"/Oh2":function(t,e){},"/SVL":function(t,e){},"4X1o":function(t,e){},"4pgL":function(t,e){},"5XJ2":function(t,e){},DVHf:function(t,e){},FQxE:function(t,e){},Fmgh:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("kV13"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:this.transitionName}},[e("keep-alive",[e("router-view",{staticClass:"app-view"})],1)],1)],1)},staticRenderFns:[]};var n=i("C7Lr")({name:"App",data:function(){return{transitionName:""}},provide:function(){return{setTransName:this.setTransName}},methods:{setTransName:function(t){this.transitionName=t}}},a,!1,function(t){i("5XJ2")},null,null).exports,o=i("5inH"),r=i("lC5x"),c=i.n(r),l=i("J0Oq"),d=i.n(l),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"list-header-wraper"},[e("div",{staticClass:"title-area"},[e("Icon",{attrs:{type:"md-menu",size:30,color:"#FFF"}}),this._v(" "),e("span",{staticClass:"title-text"},[this._v("CONTACTS")]),this._v(" "),e("Icon",{attrs:{type:"md-person-add",size:22,color:"#FFF"}})],1),this._v(" "),e("Input",{staticClass:"input-style",attrs:{placeholder:"Search Contact"}})],1)},staticRenderFns:[]};var v=i("C7Lr")({data:function(){return{}}},u,!1,function(t){i("FQxE")},null,null).exports,m=i("Da13"),h=i("t4mz"),p={inject:["setTransName"],components:{PhoneOutgoingIcon:m.f,MailIcon:m.d,hTag:h.a},props:{name:String,email:String,status:String,phone:String},data:function(){return{}},methods:{viewDetail:function(t){this.setTransName("slide-trans-left"),this.$router.push({path:"/detail/candidate",query:{id:t}})}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-list-item"},[i("div",{staticClass:"basic-info"},[i("div",{staticClass:"name-tag"},[i("div",{staticClass:"name"},[t._v(t._s(t.name))]),t._v(" "),"open"==t.status?i("h-tag",{attrs:{text:"New"}}):t._e()],1),t._v(" "),i("div",{staticClass:"email"},[t._v(t._s(t.email))])]),t._v(" "),i("div",{staticClass:"btn-area",on:{click:function(e){return t.viewDetail(t.email)}}},[i("phone-outgoing-icon",{staticClass:"custom-class",attrs:{size:"1.8x",color:"#6F50FF"}}),t._v(" "),i("mail-icon",{staticClass:"custom-class ml25",attrs:{size:"2x",color:"#6F50FF"}})],1)])},staticRenderFns:[]};var C={components:{listItem:i("C7Lr")(p,f,!1,function(t){i("Fmgh")},null,null).exports},props:{listData:{type:Array,default:function(){return[]}}},data:function(){return{}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"list-section-wraper"},this._l(this.listData,function(t){return e("list-item",{key:t.email,attrs:{name:t.name,status:t.status,email:t.email,phone:t.phone}})}),1)},staticRenderFns:[]};var g,b=i("C7Lr")(C,_,!1,function(t){i("4X1o")},null,null).exports,F=i("rVsN"),x=i.n(F),w=i("I29D"),k=i.n(w),y=(g=d()(c.a.mark(function t(e){var i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get";return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i={},t.prev=1,"post"!==a){t.next=8;break}return t.next=5,T.request({method:a,url:e,data:s});case 5:i=t.sent,t.next=11;break;case 8:return t.next=10,T.request({method:a,url:e,params:s});case 10:i=t.sent;case 11:if(!i.data||!i.data.responseCode){t.next=15;break}return t.abrupt("return",i.data);case 15:return t.abrupt("return",i);case 16:t.next=22;break;case 18:return t.prev=18,t.t0=t.catch(1),console.log(t.t0),t.abrupt("return",x.a.reject(t.t0));case 22:case"end":return t.stop()}},t,this,[[1,18]])})),function(t){return g.apply(this,arguments)}),T=k.a.create({baseURL:"http://www.mocky.io/v2",timeout:6e4,withCredentials:!1});T.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var D=y;var I={components:{headerCom:v,sectionCom:b},data:function(){return{listData:[],spinShow:!1}},methods:{getData:function(){var t=this;return d()(c.a.mark(function e(){var i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.spinShow=!0,e.next=3,D("/5e5fc3e031000067d6afdf42");case 3:(i=e.sent)&&"10001"===i.responseCode&&(t.listData=i.data||[]),t.spinShow=!1;case 6:case"end":return e.stop()}},e,t)}))()}},mounted:function(){this.getData()}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("header-com"),this._v(" "),e("section-com",{attrs:{listData:this.listData}}),this._v(" "),this.spinShow?e("Spin",{attrs:{size:"large",fix:""}}):this._e()],1)},staticRenderFns:[]},A=i("C7Lr")(I,S,!1,null,null,null).exports,z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header-wraper"},[e("div",{staticClass:"title-area"},[e("Icon",{staticClass:"back-icon",attrs:{type:"ios-arrow-back",color:"#FFF",size:"30"},on:{click:this.goBack}}),this._v(" "),e("span",{staticClass:"name"},[this._v(this._s(this.info.name))])],1)])},staticRenderFns:[]};var N={components:{headerCom:i("C7Lr")({inject:["setTransName"],data:function(){return{info:{name:"John Chan"}}},methods:{goBack:function(){this.setTransName("slide-trans-right"),this.$router.go(-1)}}},z,!1,function(t){i("gz2M")},null,null).exports,sectionCom:i("aRit").default},data:function(){return{detailTransName:"",duration:1e3}},watch:{$route:function(t){console.log("$route: ",t);var e=this.$route.name;"log"===e?(this.detailTransName="detail-Trans-left",this.duration=1e3):"candidate"===e?(this.detailTransName="detail-Trans-right",this.duration=1e3):this.detailTransName=""}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail"},[e("header-com"),this._v(" "),e("transition",{attrs:{name:this.detailTransName,duration:this.duration}},[e("keep-alive",[e("router-view",{staticClass:"app-view"})],1)],1)],1)},staticRenderFns:[]};var B=i("C7Lr")(N,$,!1,function(t){i("4pgL")},null,null).exports;s.default.use(o.a);var L=new o.a({mode:"history",routes:[{path:"/",name:"list",component:A,meta:{keepAlive:!0}},{path:"/detail",name:"detail",component:B,children:[{path:"candidate",name:"candidate",component:function(){return new Promise(function(t){t()}).then(i.bind(null,"aRit"))}},{path:"log",name:"log",component:function(){return i.e(0).then(i.bind(null,"7UcO"))}}]}]}),M=i("c4OW"),P=i.n(M);i("/Oh2"),i("s0L2");s.default.use(P.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:L,components:{App:n},template:"<App/>"})},aRit:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("IHPB"),a=i.n(s),n=i("t4mz"),o=i("Da13"),r={props:{status:String},components:{hTag:n.a,PhoneOutgoingIcon:o.f,MailIcon:o.d,MessageSquareIcon:o.e,CalendarIcon:o.b,FilePlusIcon:o.c},data:function(){return{info:{name:"John Chan"}}},computed:{btnProps:function(){switch(console.log("status: ",this.status),this.status){case"open":return{text:"open",color:"#6A6A6A",backgroundColor:"#FFF",border:"2px solid #FDD15B"};case"In Progress":return{text:"In Progress",color:"#6A6A6A",backgroundColor:"#FDD35B",border:"2px solid #FDD15B"};case"Hired":return{text:"Hired",color:"#FFF",backgroundColor:"#63D01F ",border:"2px solid #63D21F"};default:return{text:"open",color:"#6A6A6A",backgroundColor:"#FFF",border:"2px solid #FDD15B"}}}},methods:{clickBtn:function(){this.$emit("clickBtn",this.btnTxt)},onProgressClick:function(){this.$emit("confirmHire")}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-basic-info"},[s("div",{staticClass:"avatar-name"},[s("img",{attrs:{src:i("zQrT"),width:"98",height:"98",alt:"avatar"}}),t._v(" "),s("div",{staticClass:"name-btn"},[s("div",{staticClass:"name-tag"},[s("span",{staticClass:"name"},[t._v(t._s(t.info.name))]),t._v(" "),"open"==t.status?s("h-tag",{attrs:{text:"new"}}):t._e()],1),t._v(" "),s("h-tag",{attrs:{text:t.btnProps.text,color:t.btnProps.color,backgroundColor:t.btnProps.backgroundColor,border:t.btnProps.border,otherStyle:{lineHeight:"16px",marginLeft:0},clickable:"In Progress"===t.status},on:{onClick:t.onProgressClick}})],1)]),t._v(" "),s("div",{staticClass:"btn-list"},[s("phone-outgoing-icon",{staticClass:"custom-class",attrs:{size:"2x",color:"#6F50FF"},on:{click:t.clickBtn}}),t._v(" "),s("mail-icon",{staticClass:"custom-class",attrs:{size:"2x",color:"#6F50FF"}}),t._v(" "),s("message-square-icon",{staticClass:"custom-class",attrs:{size:"2x",color:"#6F50FF"}}),t._v(" "),s("calendar-icon",{staticClass:"custom-class",attrs:{size:"2x",color:"#6F50FF"}}),t._v(" "),s("file-plus-icon",{staticClass:"custom-class",attrs:{size:"2x",color:"#6F50FF"}})],1)])},staticRenderFns:[]};var l={components:{basicInfo:i("C7Lr")(r,c,!1,function(t){i("sTxe")},null,null).exports,articleOutline:i("uJNB").a,AwardIcon:o.a},props:{listData:{type:Array,default:function(){return[]}}},data:function(){return{showModal:!1,info:{email:"john@gmail.com",phone:"09969712111"},activities:[{title:"New contact created",time:"12/12/2019 10:59:31am",status:"Open"},{title:"Form Filled",time:"12/12/2019 10:59:00am",status:"Open"}]}},computed:{restActivities:function(){var t=[].concat(a()(this.activities));return 4===t.length&&t.shift(),t}},methods:{clickBtn:function(){this.activities.length>2||this.$router.push({path:"/detail/log",query:{id:this.$route.query.id}})},addActivities:function(t){this.activities.unshift(t)},confirmHire:function(){this.showModal=!0,console.log("this.showModal: ",this.showModal)},onModalClick:function(t){"cancel"===t?this.showModal=!1:"hired"===t&&(this.addActivities({title:"Hired",time:"12/12/2019 12:15:31am",detail:"A quick win!",status:"Hired"}),this.showModal=!1)}},watch:{$route:function(t){if("candidate"===this.$route.name&&t.params&&t.params.type){console.log("newValue.params: ",t.params);var e=t.params,i=e.inputText,s=e.type,a=e.time;this.addActivities({title:"Log Call"===s?"Call":"",time:a,detail:i,status:"In Progress"})}}},mounted:function(){window.vmSection=this}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"detail-section-wraper"},[i("div",{staticClass:"basic-info-wraper"},[i("basic-info",{attrs:{status:t.activities[0].status},on:{clickBtn:t.clickBtn,confirmHire:t.confirmHire}})],1),t._v(" "),i("article-outline",{staticClass:"contact-detail-outline",attrs:{articleTitle:"Contact Detail",btnTxt:"Edit"},on:{clickBtn:t.clickBtn}},[i("div",{staticClass:"contact-detail common-box-shadow zIndex90"},[i("div",{staticClass:"item"},[i("span",{staticClass:"item-title"},[t._v("Email")]),i("span",{staticClass:"item-content"},[t._v(t._s(t.info.email))])]),t._v(" "),i("div",{staticClass:"item"},[i("span",{staticClass:"item-title"},[t._v("Phone")]),i("span",{staticClass:"item-content"},[t._v(t._s(t.info.phone))])])])]),t._v(" "),i("article-outline",{class:2==t.activities.length?"activities-outline":"activities-outline-auto",attrs:{articleTitle:"Activities",titleClass:"Activities-title"}},[i("div",{class:[2==t.activities.length?"Activities-detail":"Activities-detail-auto","common-box-shadow","zIndex80"]},[i("Timeline",[i("transition",{attrs:{name:4==t.activities.length?"hired-trans-last":""}},[4==t.activities.length?i("TimelineItem",{attrs:{color:"#646464"}},["New contact created"==t.activities[0].title?i("Icon",{attrs:{slot:"dot",type:"ios-add-circle-outline",size:"29"},slot:"dot"}):"Form Filled"==t.activities[0].title?i("Icon",{attrs:{slot:"dot",type:"md-document",size:"31"},slot:"dot"}):"Call"==t.activities[0].title?i("Icon",{attrs:{slot:"dot",type:"ios-call",size:"31"},slot:"dot"}):"Hired"==t.activities[0].title?i("award-icon",{staticClass:"custom-class",attrs:{slot:"dot",size:"2.4x",color:"#63D21F"},slot:"dot"}):t._e(),t._v(" "),i("div",{staticClass:"activities-content"},[i("div",{staticClass:"activities-content-title"},[t._v("\n                  "+t._s(t.activities[0].title)+"\n                ")]),t._v(" "),i("div",{staticClass:"activities-content-time"},[t._v("\n                  "+t._s(t.activities[0].time)+"\n                ")]),t._v(" "),t.activities[0].detail?i("div",{staticClass:"activities-content-detail"},[t._v("\n                  "+t._s(t.activities[0].detail)+"\n                ")]):t._e()])],1):t._e()],1),t._v(" "),i("transition-group",{attrs:{name:t.activities.length>=3?"hired-trans-other":""}},t._l(t.restActivities,function(e){return i("TimelineItem",{key:e.time+(new Date).valueOf(),attrs:{color:"#646464"}},["New contact created"==e.title?i("Icon",{attrs:{slot:"dot",type:"ios-add-circle-outline",size:"29"},slot:"dot"}):"Form Filled"==e.title?i("Icon",{attrs:{slot:"dot",type:"md-document",size:"31"},slot:"dot"}):"Call"==e.title?i("Icon",{attrs:{slot:"dot",type:"ios-call",size:"31"},slot:"dot"}):"Hired"==e.title?i("award-icon",{staticClass:"custom-class",attrs:{slot:"dot",size:"2.4x",color:"#63D21F"},slot:"dot"}):t._e(),t._v(" "),i("div",{staticClass:"activities-content"},[i("div",{staticClass:"activities-content-title"},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),i("div",{staticClass:"activities-content-time"},[t._v("\n                  "+t._s(e.time)+"\n                ")]),t._v(" "),e.detail?i("div",{staticClass:"activities-content-detail"},[t._v("\n                  "+t._s(e.detail)+"\n                ")]):t._e()])],1)}),1)],1)],1)]),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal"},[i("div",{staticClass:"modal-btn-wraper"},[i("div",{staticClass:"modal-btn-list"},[i("div",{staticClass:"modal-btn",on:{click:function(e){return t.onModalClick("hired")}}},[t._v("Mark as Hired")]),t._v(" "),i("div",{staticClass:"modal-btn"},[t._v("Follow Up")])]),t._v(" "),i("div",{staticClass:"modal-cancel-btn",on:{click:function(e){return t.onModalClick("cancel")}}},[t._v("Cancel")])])])])],1)},staticRenderFns:[]};var u=i("C7Lr")(l,d,!1,function(t){i("/SVL")},null,null);e.default=u.exports},gz2M:function(t,e){},hDAa:function(t,e){},s0L2:function(t,e){},sTxe:function(t,e){},t4mz:function(t,e,i){"use strict";var s={props:{text:String,color:{type:String,default:"#ffff"},backgroundColor:{type:String,default:"#B152D5"},borderRadius:{type:Number|String,default:10},border:{type:String,default:"none"},otherStyle:{type:Object,default:function(){}},clickable:{type:Boolean,default:!1}},data:function(){return{}},methods:{onClick:function(){this.clickable&&this.$emit("onClick")}}},a={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tag",style:Object.assign({},{color:t.color,backgroundColor:t.backgroundColor,borderRadius:t.borderRadius+"px",border:t.border},t.otherStyle),on:{click:t.onClick}},[t._v("\n  "+t._s(t.text)+"\n")])},staticRenderFns:[]};var n=i("C7Lr")(s,a,!1,function(t){i("DVHf")},"data-v-c36ade62",null);e.a=n.exports},uJNB:function(t,e,i){"use strict";var s={props:{articleTitle:String,btnTxt:String,titleClass:{type:String,default:""},titleTxtStyle:{type:String,default:""}},data:function(){return{}},methods:{clickBtn:function(){this.$emit("clickBtn",this.btnTxt)}},mounted:function(){window.vm=this}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"article-style"},[i("div",{class:["title-btn",t.titleClass]},[i("div",{class:["title",t.titleTxtStyle]},[t._v(t._s(t.articleTitle))]),t._v(" "),t.btnTxt?i("div",{staticClass:"btn",on:{click:t.clickBtn}},[t._v(t._s(t.btnTxt))]):t._e(),t._v(" "),t._t("time")],2),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var n=i("C7Lr")(s,a,!1,function(t){i("hDAa")},"data-v-2f7c41ec",null);e.a=n.exports},zQrT:function(t,e,i){t.exports=i.p+"static/img/avatar.6efdfcb.png"}},["NHnr"]);
//# sourceMappingURL=app.144a530af8b095ed9d88.js.map