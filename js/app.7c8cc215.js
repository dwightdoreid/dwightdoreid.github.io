(function(e){function t(t){for(var a,r,o=t[0],u=t[1],l=t[2],h=0,d=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);i&&i(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var u=s[o];0!==c[u]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},c={app:0},n=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var i=u;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},2735:function(e,t,s){"use strict";s("2b0a")},"2b0a":function(e,t,s){},"39f4":function(e,t,s){"use strict";s("4162")},"3c51":function(e,t,s){"use strict";s("f8da")},4162:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23"),c={id:"app"};function n(e,t,s,n,r,o){var u=Object(a["w"])("NavBar"),l=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])("div",c,[Object(a["g"])(u),Object(a["g"])(l)])}var r=Object(a["D"])("data-v-2dcec336");Object(a["s"])("data-v-2dcec336");var o={id:"nav_main",class:"topnav"},u=Object(a["f"])("WID"),l=Object(a["g"])("div",{id:"nav_main2"},null,-1);Object(a["q"])();var i=r((function(e,t,s,c,n,i){var h=Object(a["w"])("router-link");return Object(a["p"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("div",o,[Object(a["g"])(h,{to:"/home",class:"active"},{default:r((function(){return[u]})),_:1})]),l],64)})),h={name:"NavBar",methods:{toggleCollapse:function(){var e=document.getElementById("nav_main");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}}};s("2735");h.render=i,h.__scopeId="data-v-2dcec336";var d=h,b={name:"App",components:{NavBar:d}};b.render=n;var p=b,f=s("6c02"),g={id:"home"},O={class:"main_btn"};function j(e,t,s,c,n,r){var o=Object(a["w"])("SearchBar"),u=Object(a["w"])("SearchCard"),l=Object(a["w"])("router-link");return Object(a["p"])(),Object(a["d"])("div",g,[Object(a["g"])("input",{type:"button",id:"home_btn",class:"el_hide",onClick:t[1]||(t[1]=function(e){return r.hideSearch()}),value:"Cancel search"}),Object(a["g"])(o,{ref:"search_bar",class:"search_hide",onFocus:t[2]||(t[2]=function(e){return r.beenFocused()})},null,512),Object(a["g"])("div",O,[Object(a["g"])(u,{id:"ssz",class:"search",text:"Search",onClick:t[3]||(t[3]=function(e){return r.showSearch()})})]),Object(a["g"])(l,{to:"/results?q='Supermarket'"},{default:Object(a["C"])((function(){return[Object(a["g"])(u,{text:"Supermarket",class:"supermarket"})]})),_:1}),Object(a["g"])(l,{to:"/results?q='restaurant'"},{default:Object(a["C"])((function(){return[Object(a["g"])(u,{text:"Restaurant",class:"restaurant"})]})),_:1}),Object(a["g"])(l,{to:"/results?q='atm'"},{default:Object(a["C"])((function(){return[Object(a["g"])(u,{text:"atm",class:"atm"})]})),_:1}),Object(a["g"])(l,{to:"/results?q='hospital'"},{default:Object(a["C"])((function(){return[Object(a["g"])(u,{text:"Hospital",class:"hospital"})]})),_:1}),Object(a["g"])(l,{to:"/results?q='gas station'"},{default:Object(a["C"])((function(){return[Object(a["g"])(u,{text:"Gas station",class:"gas_station"})]})),_:1}),Object(a["g"])(l,{to:"/results?q='bus stop'"},{default:Object(a["C"])((function(){return[Object(a["g"])(u,{text:"Taxi stand",class:"bus_stop"})]})),_:1}),Object(a["g"])(l,{to:"/results?q='bus stop'"},{default:Object(a["C"])((function(){return[Object(a["g"])(u,{text:"Taxi stand",class:"bus_stop"})]})),_:1}),Object(a["g"])(l,{to:"/results?q='bus stop'"},{default:Object(a["C"])((function(){return[Object(a["g"])(u,{text:"Taxi stand",class:"bus_stop"})]})),_:1}),Object(a["g"])(l,{to:"/results?q='bus stop'"},{default:Object(a["C"])((function(){return[Object(a["g"])(u,{text:"Taxi stand",class:"bus_stop"})]})),_:1}),Object(a["g"])(l,{to:"/results?q='bus stop'"},{default:Object(a["C"])((function(){return[Object(a["g"])(u,{text:"Taxi stand",class:"bus_stop"})]})),_:1}),Object(a["g"])(l,{to:"/results?q='bus stop'"},{default:Object(a["C"])((function(){return[Object(a["g"])(u,{text:"Taxi stand",class:"bus_stop"})]})),_:1})])}s("ac1f"),s("5319");var _=Object(a["D"])("data-v-c28639fe");Object(a["s"])("data-v-c28639fe");var v={class:"search_card"},m={class:"search_card_text"};Object(a["q"])();var w=_((function(e,t,s,c,n,r){return Object(a["p"])(),Object(a["d"])("div",v,[Object(a["g"])("a",{href:"#",onClick:t[1]||(t[1]=function(e){return r.adz()})},[Object(a["g"])("div",m,[Object(a["g"])("h4",null,Object(a["y"])(s.text),1)])])])})),y={name:"SearchCard",props:{text:String,symbol:String},methods:{adz:function(){}}};s("3c51");y.render=w,y.__scopeId="data-v-c28639fe";var S=y,x=Object(a["D"])("data-v-ac725aca");Object(a["s"])("data-v-ac725aca");var C=Object(a["g"])("h4",null,"Search",-1);Object(a["q"])();var k=x((function(e,t,s,c,n,r){return Object(a["p"])(),Object(a["d"])("form",{onSubmit:t[3]||(t[3]=function(e){return r.sendQuery()}),onFocus:t[4]||(t[4]=function(e){return r.focused()})},[Object(a["g"])("input",{type:"search",name:"",id:"search_input",ref:"search_input",value:"Search...",onFocus:t[1]||(t[1]=function(e){return r.clearBox()})},null,544),Object(a["g"])("div",{class:"search_card search",onClick:t[2]||(t[2]=function(e){return r.sendQuery()})},[C])],32)})),q={name:"SearchBar",methods:{clearBox:function(){this.$refs.search_input.value=""},showDefaultText:function(){this.$refs.search_input.value="Search..."},sendQuery:function(){var e=this.$refs.search_input.value;this.$router.push({path:"results",query:{q:e}})},focused:function(){console.log("search bar has focus somewhat")}}};s("39f4");q.render=k,q.__scopeId="data-v-ac725aca";var N=q,B={name:"Home",components:{SearchCard:S,SearchBar:N},methods:{showSearch:function(){if(document.getElementsByClassName("search_hide")[0])console.log(document.getElementsByClassName("search_hide")[0].className),document.getElementsByClassName("search_hide")[0].className="search_show",document.getElementById("ssz").className="search_card search_exe",document.getElementById("home_btn").className="el_show",this.$refs.search_bar.$el[0].focus();else if(document.getElementsByClassName("search_show")[0]){var e=this.$refs.search_bar.$el;console.log("I'm here now bruv"),console.log(e.value),window.location.replace("http://localhost:8080/#/about/"),isNaN(1*e.value)?console.log("pushing"):this.hideSearch()}},hideSearch:function(){document.getElementsByClassName("search_show")[0]&&(document.getElementsByClassName("search_show")[0].className="search_hide",document.getElementById("ssz").className="search_card search",document.getElementById("home_btn").className="el_hide")},beenFocused:function(){console.log("search bar has focus")}}};s("dfd4");B.render=j;var T=B,E=Object(a["D"])("data-v-7790acc5"),I=E((function(e,t,s,c,n,r){return Object(a["p"])(),Object(a["d"])("h1",null,"About")})),z={name:"About"};z.render=I,z.__scopeId="data-v-7790acc5";var D=z,P=(s("b0c0"),Object(a["D"])("data-v-6af7b1d6"));Object(a["s"])("data-v-6af7b1d6");var F={key:0},$={key:1},L={key:2};Object(a["q"])();var A=P((function(e,t,s,c,n,r){var o=Object(a["w"])("ResultCard");return Object(a["p"])(),Object(a["d"])(a["a"],null,[n.processing_query?(Object(a["p"])(),Object(a["d"])("div",F,"Please wait...")):1==n.results.length?(Object(a["p"])(),Object(a["d"])("div",$,Object(a["y"])(n.results.length)+" result for "+Object(a["y"])(s.search_query),1)):(Object(a["p"])(),Object(a["d"])("div",L,Object(a["y"])(n.results.length)+" results for "+Object(a["y"])(s.search_query),1)),(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(n.results,(function(e){return Object(a["p"])(),Object(a["d"])(o,{key:e.id,name:e.name,address:e.address,has_tel:e.has_tel,tel:e.tel,has_whatsapp:e.has_whatsapp,whatsapp:e.whatsapp,long:e.long,lat:e.lat,z:e.z,has_gc_website:e.has_gc_website,gc_website:e.gc_website},null,8,["name","address","has_tel","tel","has_whatsapp","whatsapp","long","lat","z","has_gc_website","gc_website"])})),128))],64)})),G=(s("b64b"),s("d3b7"),Object(a["D"])("data-v-7414fd56"));Object(a["s"])("data-v-7414fd56");var M={class:"result_card"},R={key:0},W=Object(a["g"])("div",{class:"result_card_phone"},null,-1),J={key:1},Q=Object(a["g"])("div",{class:"result_card_whatsapp"},null,-1),H={key:2},V=Object(a["g"])("div",{class:"result_card_location"},null,-1),K=Object(a["g"])("h3",null,"Google Maps",-1),U={key:3},X=Object(a["g"])("div",{class:"result_card_web"},null,-1),Y=Object(a["g"])("h3",null,"Visit GC Site",-1);Object(a["q"])();var Z=G((function(e,t,s,c,n,r){return Object(a["p"])(),Object(a["d"])("div",M,[Object(a["g"])("h3",null,Object(a["y"])(s.name),1),Object(a["g"])("h4",null,Object(a["y"])(s.address),1),r.hasTel?(Object(a["p"])(),Object(a["d"])("div",R,[Object(a["g"])("a",{href:r.telText},[W,Object(a["g"])("h3",null,Object(a["y"])(s.tel),1)],8,["href"])])):Object(a["e"])("",!0),r.hasWhatsapp?(Object(a["p"])(),Object(a["d"])("div",J,[Object(a["g"])("a",{href:r.whatsappText,target:"_blank"},[Q,Object(a["g"])("h3",null,Object(a["y"])(s.tel),1)],8,["href"])])):Object(a["e"])("",!0),r.hasLocation?(Object(a["p"])(),Object(a["d"])("div",H,[Object(a["g"])("a",{href:r.locationLink,target:"_blank"},[V,K],8,["href"])])):Object(a["e"])("",!0),r.hasGcSite?(Object(a["p"])(),Object(a["d"])("div",U,[Object(a["g"])("a",{href:r.gcWebsite,target:"_blank"},[X,Y],8,["href"])])):Object(a["e"])("",!0)])})),ee=(s("a9e3"),s("498a"),{name:"ResultCard",props:{id:Number,name:String,address:String,has_tel:String,tel:String,has_whatsapp:String,whatsapp:String,long:String,lat:String,z:String,has_gc_website:String,gc_website:String,sells_online:String},computed:{telText:function(){return"tel:"+this.tel},whatsappText:function(){return"https://wa.me/"+this.tel},hasGcSite:function(){if(console.log(this.has_gc_website),!this.has_gc_website)return!1;switch(this.has_gc_website.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(this.has_gc_website)}},hasLocation:function(){return!!(this.long&this.lat)},hasTel:function(){if(!this.has_tel)return!0;switch(this.has_tel.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(this.has_tel)}},hasWhatsapp:function(){if(!this.has_whatsapp)return!0;switch(this.has_whatsapp.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(this.has_whatsapp)}},gcWebsite:function(){return this.hasGcSite?this.gc_website:"/"},locationLink:function(){return"https://www.google.com/maps/@"+this.long+","+this.lat+","+this.z}}});s("5cc4");ee.render=Z,ee.__scopeId="data-v-7414fd56";var te=ee,se="https://greencheque.com",ae={name:"SearchResults",components:{ResultCard:te},props:{search_query:String},data:function(){return{results:[],processing_query:!0,isEditing:!1}},created:function(){var e=this;this.processing_query=!0;var t=new DOMParser,s=se+"/wp-json/wp/v2/posts/?search="+this.search_query;fetch(s).then((function(e){return e.json()})).then((function(s){if(console.log(Object.keys(s).length),Object.keys(s).length>0)for(var a in s){var c=s[a].content.rendered,n=t.parseFromString(c,"text/html");console.log(n);var r=n.getElementsByTagName("pre")[0].innerText,o=JSON.parse(r);e.results.push(o),console.log(o.name)}else console.log("no results found");e.processing_query=!1}))}};ae.render=A,ae.__scopeId="data-v-6af7b1d6";var ce=ae,ne="/wordpress/widapp/",re=[{path:ne+"/",component:T},{path:"/widapp",component:T},{path:"/",component:T},{path:"/home",component:T},{path:"/about",component:D},{path:"/results",component:ce,props:function(e){return{search_query:e.query.q}}}],oe=Object(f["a"])({history:Object(f["b"])(),routes:re}),ue=oe,le=s("9483");Object(le["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ie=Object(a["c"])(p);ie.use(ue),ie.mount("#app")},"5cc4":function(e,t,s){"use strict";s("8e8c")},"8e8c":function(e,t,s){},dfd4:function(e,t,s){"use strict";s("e2f5")},e2f5:function(e,t,s){},f8da:function(e,t,s){}});
//# sourceMappingURL=app.7c8cc215.js.map