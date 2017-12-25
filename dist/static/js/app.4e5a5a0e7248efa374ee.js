webpackJsonp([1],{"6E4/":function(e,t){},FSnx:function(e,t){},GrRv:function(e,t){},IlJV:function(e,t){},MBhK:function(e,t){},NHnr:function(e,t,r){"use strict";function o(e){r("IlJV")}function a(e){r("fsbI"),r("MBhK")}function s(e){r("GrRv")}function i(e){r("siOa")}function n(e){r("6E4/")}function p(e){r("FSnx")}Object.defineProperty(t,"__esModule",{value:!0});var l=r("/5sW"),c={name:"app"},u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("router-view")],1)},j=[],h={render:u,staticRenderFns:j},m=h,g=r("VU/8"),d=o,v=g(c,m,!1,d,null,null),f=v.exports,w=r("/ocq"),C=r("NYxO"),S=r("//Fk"),b=r.n(S),_={count:0},E={evenOrOdd:function(e){return e.count%2==0?"even":"odd"}},M={increment:function(e){e.count++},decrement:function(e){e.count--}},y={increment:function(e){return(0,e.commit)("increment")},decrement:function(e){return(0,e.commit)("decrement")},incrementIfOdd:function(e){var t=e.commit;(e.state.count+1)%2==0&&t("increment")},incrementAsync:function(e){var t=e.commit;return new b.a(function(e,r){setTimeout(function(){t("increment"),e()},1e3)})}};l.a.use(C.a);var I=new C.a.Store({state:_,getters:E,actions:y,mutations:M}),T={name:"MESBurger"},k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"burger-container"},[r("input",{attrs:{id:"toggle",type:"checkbox"}}),e._v(" "),e._m(0,!1,!1),e._v(" "),r("nav",{staticClass:"nav"},[r("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[e._v("Home (Recent Work)")]),e._v(" "),r("router-link",{staticClass:"nav-item",attrs:{to:"/mp"}},[e._v("Media & Publishing")]),e._v(" "),r("router-link",{staticClass:"nav-item",attrs:{to:"/ame"}},[e._v("Arts, Music & Entertainment")]),e._v(" "),r("router-link",{staticClass:"nav-item",attrs:{to:"/hlg"}},[e._v("Health, Law & Government")]),e._v(" "),r("router-link",{staticClass:"nav-item",attrs:{to:"/wa"}},[e._v("Writing & Activism")])],1)])},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"toggle-container",attrs:{for:"toggle"}},[r("span",{staticClass:"button button-toggle"})])}],H={render:k,staticRenderFns:P},$=H,x=r("VU/8"),F=a,A=x(T,$,!1,F,"data-v-e61b0b14",null),V=A.exports;l.a.use("Vuex");var R={store:I,name:"MESHeader",components:{MESBurger:V}},B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"mes-head"}},[r("MESBurger"),e._v(" "),r("div",{staticClass:"mes-title-sequence"},[r("div",{staticClass:"mes-title"},[r("router-link",{staticClass:"nohighlight",attrs:{to:"/"}},[e._v("Marc Eliot Stein")])],1),e._v(" "),r("div",{staticClass:"mes-subtitle"},[e._v("Social publishing & advanced technology development.")])])],1)},W=[],L={render:B,staticRenderFns:W},O=L,G=r("VU/8"),U=s,N=G(R,O,!1,U,"data-v-852b267a",null),D=N.exports,J={name:"MESProjects",components:{MESHeader:D},data:function(){return{isShowing:!1,projects:[{projTitle:"Law Firm of Laurence P. Greenberg",projImage:"/static/lpgdivorce600.jpg",projClass:"yellowish",projCategories:["php","drupal","law","solo","design","recent"],projShow:!1},{projTitle:"Virtual Career Network",projImage:"/static/vcn600.jpg",projClass:"bluish",projCategories:["php","drupal","government","social","team"],projShow:!1},{projTitle:"Power Bar",projImage:"/static/powerbar600.jpg",projClass:"bluish",projCategories:["php","drupal","product","team","recent"],projShow:!1},{projTitle:"Pacifism for the 21st Century",projImage:"/static/pacgogo600.jpg",projClass:"yellowish",projCategories:["php","drupal","writing","fundraising","social","owner","solo","recent"],projShow:!1},{projTitle:"Center for Disease Control",projImage:"/static/cdc600.jpg",projClass:"yellowish",projCategories:["php","drupal","health","government","searchmeta","manager"],projShow:!1},{projTitle:"Inference Data",projImage:"/static/inference600.jpg",projClass:"bluish",projCategories:["java","law","searchmeta","team"],projShow:!1},{projTitle:"Educational Marketer",projImage:"/static/educationalmarketer600.jpg",projClass:"bluish",projCategories:["php","drupal","publishing","solo"],projShow:!1},{projTitle:"WellFormative Health",projImage:"/static/wellformative600.jpg",projClass:"yellowish",projCategories:["php","drupal","health","solo","commerce"],projShow:!1},{projTitle:"Pearl Jam",projImage:"/static/pearljam600.jpg",projClass:"yellowish",projCategories:["php","wordpress","music","solo","social"],projShow:!1},{projTitle:"Bob Dylan",projImage:"/static/bobdylan600.jpg",projClass:"yellowish",projCategories:["java","music","solo","early","searchmeta"],projShow:!1},{projTitle:"Words Without Borders",projImage:"/static/wwb600.jpg",projClass:"bluish",projCategories:["php","literature","solo","searchmeta"],projShow:!1},{projTitle:"Eli Stein Cartoons",projImage:"/static/elistein600.jpg",projClass:"bluish",projCategories:["php","drupal","arts","solo","design"],projShow:!1},{projTitle:"Foreign Policy",projImage:"/static/foreignpolicy600.jpg",projClass:"bluish",projCategories:["php","drupal","publishing","manager","social"],projShow:!1},{projTitle:"Practical Handbook of Group Counseling ",projImage:"/static/ghppracticalhandbooks600.jpg",projClass:"yellowish",projCategories:["php","drupal","publishing","commerce","solo","design"],projShow:!1},{projTitle:"Literary Kicks",projImage:"/static/litkicks600.jpg",projClass:"bluish",projCategories:["php","drupal","literature","writing","owner","social","design"],projShow:!1},{projTitle:"Time Inc. New Media",projImage:"/static/pathfinder600.jpg",projClass:"bluish",projCategories:["c++","perl","publishing","manager","seo","early"],projShow:!1},{projTitle:"iVillage.com",projImage:"/static/ivillage600.jpg",projClass:"yellowish",projCategories:["java","publishing","social","manager","early"],projShow:!1},{projTitle:"History Channel",projImage:"/static/historychannel600.jpg",projClass:"yellowish",projCategories:["java","publishing","team","searchmeta"],projShow:!1},{projTitle:"MarcEliotStein.com",projImage:"/static/ivillage600.jpg",projClass:"yellowish",projCategories:["nodevue"],projShow:!1}],msg:""}},computed:{filteredProjects:function(){var e=new Array,t="recent";this.$route.params.projset&&(t=this.$route.params.projset);for(var r=0,o=0,a=this.projects.length;o<a;o++)this.projects[o].projCategories.includes(t)&&(e[r]=this.projects[o],e[r].projShow=0==r,r++);return e},displayMsg:function(){var e="Recent Work";return this.$route.params.projset&&(e="mp"==this.$route.params.projset?"Media & Publishing":"ame"==this.$route.params.projset?"Arts, Music & Entertainment":"hlg"==this.$route.params.projset?"Health, Law & Government":"wa"==this.$route.params.projset?"Writing & Activism":this.$route.params.projset),e}},methods:{startShow:function(){this.isShowing=!0},afterEnter:function(e){this.isShowing=!1},afterLeave:function(e){for(var t=0,r=this.filteredProjects.length;t<r;t++)if(1==this.filteredProjects[t].projShow){this.filteredProjects[t].projShow=!1;var o=t+1;this.filteredProjects[o]?this.filteredProjects[o].projShow=!0:this.filteredProjects[0].projShow=!0;break}this.isShowing=!0}}},K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"mesprojects"}},[r("MESHeader"),e._v(" "),r("div",{staticClass:"projects"},[r("h1",[e._v(e._s(e.msg+e.displayMsg))]),e._v(" "),r("div",{staticClass:"buttonbox"},[r("button",{on:{click:e.startShow}},[r("span",[e._v("Do This")])])]),e._v(" "),r("transition",{attrs:{name:"projmove","enter-active-class":"bouncein","leave-active-class":"rollout"},on:{"after-enter":e.afterEnter,"after-leave":e.afterLeave}},[e.isShowing?r("div",{staticClass:"ifshowing"},e._l(e.filteredProjects,function(t,o){return t.projShow?r("div",[r("div",{staticClass:"proj",style:{"background-image":"url("+t.projImage+")"}}),e._v(" "),r("br"),e._v("\n           "+e._s(t.projTitle)+"\n        ")]):e._e()})):e._e()]),e._v(" "),r("router-view")],1)],1)},q=[],Y={render:K,staticRenderFns:q},z=Y,Q=r("VU/8"),X=i,Z=Q(J,z,!1,X,"data-v-0e56ccb2",null),ee=Z.exports,te={name:"MESAbout",components:{MESHeader:D},data:function(){return{msg:"About this site."}}},re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"mesabout"}},[r("MESHeader"),e._v(" "),r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.msg))])])],1)},oe=[],ae={render:re,staticRenderFns:oe},se=ae,ie=r("VU/8"),ne=n,pe=ie(te,se,!1,ne,"data-v-07b5eaa0",null),le=pe.exports,ce={name:"MESContact",components:{MESHeader:D},data:function(){return{msg:"Contact MES."}}},ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"mescontact"}},[r("MESHeader"),e._v(" "),r("div",{attrs:{id:"contact"}},[r("h1",[e._v(e._s(e.msg))])])],1)},je=[],he={render:ue,staticRenderFns:je},me=he,ge=r("VU/8"),de=p,ve=ge(ce,me,!1,de,"data-v-358c3c8d",null),fe=ve.exports;l.a.use(w.a);var we=new w.a({routes:[{path:"/",name:"MES-Home",component:ee},{path:"/projects/:projset",name:"MES-Projects",component:ee},{path:"/about",name:"MES-About",component:le},{path:"/contact",name:"MES-Contact",component:fe}]});l.a.config.productionTip=!1,new l.a({el:"#app",router:we,template:"<App/>",components:{App:f},render:function(e){return e(f)}})},fsbI:function(e,t){},siOa:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4e5a5a0e7248efa374ee.js.map