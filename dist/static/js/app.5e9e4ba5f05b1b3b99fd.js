webpackJsonp([1],{"1q/3":function(t,e){},"6E4/":function(t,e){},"82pt":function(t,e){},"9Zsq":function(t,e){},FSnx:function(t,e){},NHnr:function(t,e,a){"use strict";function r(t){a("XJPw")}function i(t){a("9Zsq")}function o(t){a("82pt")}function s(t){a("x+RF")}function n(t){a("1q/3")}function c(t){a("6E4/")}function l(t){a("FSnx")}Object.defineProperty(e,"__esModule",{value:!0});var p=a("/5sW"),u={name:"app"},h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("router-view")],1)},m=[],d={render:h,staticRenderFns:m},g=d,v=a("VU/8"),f=r,j=v(u,g,!1,f,null,null),w=j.exports,_=a("/ocq"),C=a("NYxO"),S=a("//Fk"),b=a.n(S),E={count:0},k={evenOrOdd:function(t){return t.count%2==0?"even":"odd"}},y={increment:function(t){t.count++},decrement:function(t){t.count--}},I={increment:function(t){return(0,t.commit)("increment")},decrement:function(t){return(0,t.commit)("decrement")},incrementIfOdd:function(t){var e=t.commit;(t.state.count+1)%2==0&&e("increment")},incrementAsync:function(t){var e=t.commit;return new b.a(function(t,a){setTimeout(function(){e("increment"),t()},1e3)})}};p.a.use(C.a);var M=new C.a.Store({state:E,getters:k,actions:I,mutations:y}),T={name:"MESBurger",methods:{collapse:function(t){this.$refs.toggleburger.checked=!1}}},P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"burger-container"},[a("input",{ref:"toggleburger",attrs:{id:"toggle",type:"checkbox"}}),t._v(" "),t._m(0,!1,!1),t._v(" "),a("nav",{staticClass:"nav"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/"},nativeOn:{click:function(e){t.collapse()}}},[t._v("Home (Recent Work)")]),t._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:"/projects/mp"},nativeOn:{click:function(e){t.collapse()}}},[t._v("Media & Publishing")]),t._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:"/projects/ame"},nativeOn:{click:function(e){t.collapse()}}},[t._v("Arts, Music & Entertainment")]),t._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:"/projects/hlg"},nativeOn:{click:function(e){t.collapse()}}},[t._v("Health, Law & Government")]),t._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:"/projects/wa"},nativeOn:{click:function(e){t.collapse()}}},[t._v("Writing & Activism")])],1)])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"toggle-container",attrs:{for:"toggle"}},[a("span",{staticClass:"button button-toggle"})])}],D={render:P,staticRenderFns:F},W=D,x=a("VU/8"),H=i,$=x(T,W,!1,H,"data-v-690a5ece",null),L=$.exports;p.a.use("Vuex");var N={store:M,name:"MESHeader",components:{MESBurger:L}},A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mes-head"}},[a("MESBurger"),t._v(" "),a("div",{staticClass:"mes-title-wrapper"},[a("div",{staticClass:"mes-title-sequence-dots"},[a("div",{staticClass:"mes-title-sequence"},[a("div",{staticClass:"mes-title"},[a("router-link",{staticClass:"nohighlight",attrs:{to:"/"}},[t._v("Marc Eliot Stein")])],1),t._v(" "),a("div",{staticClass:"mes-subtitle"},[t._v("Social publishing & advanced technology development.")])])])]),t._v(" "),a("div",{staticClass:"clear"})],1)},B=[],V={render:A,staticRenderFns:B},R=V,q=a("VU/8"),O=o,U=q(N,R,!1,O,"data-v-bb5273ba",null),G=U.exports,J={name:"MESFooter",data:function(){return{footerImage:"/static/mes-diner1200.jpg"}}},z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mes-foot"}},[a("div",{staticClass:"mes-foot-inner"},[a("div",{staticClass:"mes-foot-title"},[a("router-link",{staticClass:"nohighlight",attrs:{to:"/"}},[t._v("Marc Eliot Stein")])],1),t._v(" "),a("div",{staticClass:"mes-foot-subtitle"},[t._v("Social publishing & advanced technology development.")]),t._v(" "),t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"mes-foot-image-wrapper"},[a("img",{staticClass:"mes-foot-image",attrs:{src:t.footerImage}})])])])},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mes-foot-social-links"},[a("ul",[a("li",[a("i",{staticClass:"fa fa-instagram"}),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://instagram.com/asheresque"}},[t._v("Instagram")])]),t._v(" "),a("li",[a("i",{staticClass:"fa fa-twitter"}),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://twitter.com/asheresque"}},[t._v("Twitter")])]),t._v(" "),a("li",[a("i",{staticClass:"fa fa-github"}),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://github.com/marceliotstein"}},[t._v("GitHub")])]),t._v(" "),a("li",[a("i",{staticClass:"fa fa-linkedin"}),t._v(" "),a("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/marceliotstein/"}},[t._v("LinkedIn")])])])])}],X={render:z,staticRenderFns:K},Y=X,Z=a("VU/8"),Q=s,tt=Z(J,Y,!1,Q,"data-v-1107cff8",null),et=tt.exports,at=window.matchMedia("(min-width: 768px)"),rt={name:"MESProjects",components:{MESHeader:G,MESFooter:et},data:function(){return{isShowingNarrow:!1,isShowingWide:!1,projects:[{projTitle:"Law Firm of Laurence P. Greenberg",projImage:"/static/lpgdivorce600.jpg",projCategories:["php","drupal","law","solo","design","recent"],projShow:!1},{projTitle:"Virtual Career Network",projImage:"/static/vcn600.jpg",projCategories:["php","drupal","government","social","team","hlg","recent"],projShow:!1},{projTitle:"Power Bar",projImage:"/static/powerbar600.jpg",projCategories:["php","drupal","product","team","recent"],projShow:!1},{projTitle:"Pacifism for the 21st Century",projImage:"/static/pacgogo600.jpg",projCategories:["php","drupal","writing","fundraising","social","owner","solo","wa"],projShow:!1},{projTitle:"Center for Disease Control",projImage:"/static/cdc600.jpg",projCategories:["php","drupal","health","government","searchmeta","manager","hlg"],projShow:!1},{projTitle:"Inference Data",projImage:"/static/inference600.jpg",projCategories:["java","law","searchmeta","team","hlg"],projShow:!1},{projTitle:"Educational Marketer",projImage:"/static/educationalmarketer600.jpg",projCategories:["php","drupal","publishing","solo","mp"],projShow:!1},{projTitle:"WellFormative Health",projImage:"/static/wellformative600.jpg",projCategories:["php","drupal","health","solo","commerce","hlg"],projShow:!1},{projTitle:"Pearl Jam",projImage:"/static/pearljam600.jpg",projCategories:["php","wordpress","music","solo","social","ame"],projShow:!1},{projTitle:"Bob Dylan",projImage:"/static/bobdylan600.jpg",projCategories:["java","music","solo","early","searchmeta","ame"],projShow:!1},{projTitle:"Words Without Borders",projImage:"/static/wwb600.jpg",projCategories:["php","literature","solo","searchmeta","ame"],projShow:!1},{projTitle:"Eli Stein Cartoons",projImage:"/static/elistein600.jpg",projCategories:["php","drupal","arts","solo","design","ame"],projShow:!1},{projTitle:"Foreign Policy",projImage:"/static/foreignpolicy600.jpg",projCategories:["php","drupal","publishing","manager","social","mp"],projShow:!1},{projTitle:"Practical Handbook of Group Counseling ",projImage:"/static/ghppracticalhandbooks600.jpg",projCategories:["php","drupal","publishing","commerce","solo","design","ame"],projShow:!1},{projTitle:"Literary Kicks",projImage:"/static/litkicks600.jpg",projCategories:["php","drupal","literature","writing","owner","social","design","wa"],projShow:!1},{projTitle:"Time Inc. New Media",projImage:"/static/pathfinder600.jpg",projCategories:["c++","perl","publishing","manager","seo","early","mp"],projShow:!1},{projTitle:"iVillage.com",projImage:"/static/ivillage600.jpg",projCategories:["java","publishing","social","manager","early","mp"],projShow:!1},{projTitle:"History Channel",projImage:"/static/historychannel600.jpg",projCategories:["java","publishing","team","searchmeta","ame"],projShow:!1},{projTitle:"MarcEliotStein.com",projImage:"/static/ivillage600.jpg",projCategories:["nodevue"],projShow:!1}],transImage:"/static/transparent.png",categories:[{catPath:"recent",catTitle:"Recent Projects",catDesc:"I've recently developed user experiences for Shape Magazine, the Allen Ginsberg Estate, PowerBar and the US Department of Labor. I'm a full-stack developer, now specializing in Vue, Node and MongoDB, with extensive experience in Drupal, WordPress & Solr."},{catPath:"mp",catTitle:"Media & Publishing",catDesc:"Enterprise content management systems for Meredith (Shape, Fitness), Slate (Foreign Policy) and A&E Network (History Channel). Technologies: Drupal, WordPress, Solr, Node.js."},{catPath:"ame",catTitle:"Music, Art & Literature",catDesc:"It's been among my greatest joys to share my love of arts and culture via digital media. I've built music sites for Bob Dylan and Pearl Jam, helped launch the international literary site Words Without Borders, and have been running my own litblog, Literary Kicks, since 1994 (yes, a world record as far s I know)."},{catPath:"hlg",catTitle:"Health, Law & Government",catDesc:"Many of my customers have been in the healthcare industry, including WellFormative.com, an alternative health site, and Virtual Career Network, a Department of Labor initiative to steer young people into either health technology or green technology. I've also worked on a high-performance search engine for law firms, and designed a custom website for a New York City law firm."},{catPath:"wa",catTitle:"Writing & Activism",catDesc:"But what's all this technology good for, if we aren't helping build a better world? In 2015 I began an Indiegogo fundraising drive for Pacifism for the 21st Century, an anti-war project. I'm also recently involved with World Beyond War, and am active in various #resistance activities."}]}},ready:function(){window.addEventListener("resize",this.startShow)},beforeDestroy:function(){window.removeEventListener("resize",this.startShow)},mounted:function(){this.startShow()},computed:{filteredProjects:function(){var t=new Array,e="recent";this.$route.params.projset&&(e=this.$route.params.projset);for(var a=0,r=0,i=this.projects.length;r<i;r++)this.projects[r].projCategories.includes(e)&&(t[a]=this.projects[r],t[a].projShow=0==a,a++);return t},currentCatTitle:function(){var t=this.categories[0].catTitle;if(this.$route.params.projset)for(var e=0,a=this.categories.length;e<a;e++)if(this.categories[e].catPath==this.$route.params.projset){t=this.categories[e].catTitle;break}return t},currentCatDesc:function(){var t=this.categories[0].catDesc;if(this.$route.params.projset)for(var e=0,a=this.categories.length;e<a;e++)if(this.categories[e].catPath==this.$route.params.projset){t=this.categories[e].catDesc;break}return t}},methods:{startShow:function(){at.matches?(this.isShowingWide=!0,this.isShowingNarrow=!1):(this.isShowingNarrow=!0,this.isShowingWide=!1)},stopShow:function(){this.isShowingWide=!1,this.isShowingNarrow=!1},afterEnter:function(t){this.stopShow()},afterLeave:function(t){for(var e=this.filteredProjects.length,a=0;a<e;a++)if(1==this.filteredProjects[a].projShow){var r=a+1;r>=e&&(r=0),this.filteredProjects[a].projShow=!1,this.filteredProjects[r].projShow=!0;break}this.startShow()}}},it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mesprojects"}},[a("MESHeader"),t._v(" "),a("div",{staticClass:"projects"},[a("div",{staticClass:"littleview"},[a("div",{staticClass:"narrow-cat-title-sequence"},[a("div",{staticClass:"cat-title"},[t._v(t._s(t.currentCatTitle))]),t._v(" "),a("div",{staticClass:"cat-desc"},[t._v(t._s(t.currentCatDesc))])]),t._v(" "),a("table",{staticClass:"projtable"},[a("tr",[a("td",{attrs:{width:"1%"}},[a("img",{staticClass:"table-trans",attrs:{src:t.transImage}})]),t._v(" "),a("td",{attrs:{width:"100%"}},[a("transition",{attrs:{name:"projmove","enter-active-class":"bouncein","leave-active-class":"rollout"},on:{"after-enter":t.afterEnter,"after-leave":t.afterLeave}},[t.isShowingNarrow?a("div",{staticClass:"ifshowing"},t._l(t.filteredProjects,function(e,r){return e.projShow?a("div",[a("div",{staticClass:"proj",style:{"background-image":"url("+e.projImage+")"}}),t._v(" "),a("div",{staticClass:"proj-title"},[t._v("\n                     "+t._s(e.projTitle)+"\n                   ")])]):t._e()})):t._e()])],1),t._v(" "),a("td",{attrs:{width:"1%"}},[a("img",{staticClass:"table-trans",attrs:{src:t.transImage}})])])])]),t._v(" "),a("div",{staticClass:"bigview"},[a("table",{staticClass:"projtable"},[a("tr",[a("td",{attrs:{width:"50%"}},[a("transition",{attrs:{name:"projmove","enter-active-class":"bouncein","leave-active-class":"rollout"},on:{"after-enter":t.afterEnter,"after-leave":t.afterLeave}},[t.isShowingWide?a("div",{staticClass:"ifshowing"},t._l(t.filteredProjects,function(e,r){return e.projShow?a("div",[a("div",{staticClass:"proj",style:{"background-image":"url("+e.projImage+")"}}),t._v(" "),a("div",{staticClass:"proj-title"},[t._v("\n                     "+t._s(e.projTitle)+"\n                   ")])]):t._e()})):t._e()])],1),t._v(" "),a("td",{attrs:{width:"50%"}},[a("div",{staticClass:"cat-title"},[t._v(t._s(t.currentCatTitle))]),t._v(" "),a("div",{staticClass:"cat-desc"},[t._v(t._s(t.currentCatDesc))])])])])])]),t._v(" "),a("MESFooter")],1)},ot=[],st={render:it,staticRenderFns:ot},nt=st,ct=a("VU/8"),lt=n,pt=ct(rt,nt,!1,lt,"data-v-7d002db5",null),ut=pt.exports,ht={name:"MESAbout",components:{MESHeader:G},data:function(){return{msg:"About this site."}}},mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mesabout"}},[a("MESHeader"),t._v(" "),a("div",{staticClass:"about"},[a("h1",[t._v(t._s(t.msg))])])],1)},dt=[],gt={render:mt,staticRenderFns:dt},vt=gt,ft=a("VU/8"),jt=c,wt=ft(ht,vt,!1,jt,"data-v-07b5eaa0",null),_t=wt.exports,Ct={name:"MESContact",components:{MESHeader:G},data:function(){return{msg:"Contact MES."}}},St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mescontact"}},[a("MESHeader"),t._v(" "),a("div",{attrs:{id:"contact"}},[a("h1",[t._v(t._s(t.msg))])])],1)},bt=[],Et={render:St,staticRenderFns:bt},kt=Et,yt=a("VU/8"),It=l,Mt=yt(Ct,kt,!1,It,"data-v-358c3c8d",null),Tt=Mt.exports;p.a.use(_.a);var Pt=new _.a({routes:[{path:"/",name:"MES-Home",component:ut},{path:"/projects/:projset",name:"MES-Projects",component:ut},{path:"/about",name:"MES-About",component:_t},{path:"/contact",name:"MES-Contact",component:Tt}]});p.a.config.productionTip=!1,new p.a({el:"#app",router:Pt,template:"<App/>",components:{App:w},render:function(t){return t(w)}})},XJPw:function(t,e){},"x+RF":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5e9e4ba5f05b1b3b99fd.js.map