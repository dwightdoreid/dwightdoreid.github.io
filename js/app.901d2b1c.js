(function(e){function t(t){for(var n,r,o=t[0],u=t[1],i=t[2],h=0,d=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var u=a[o];0!==s[u]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},c=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/widapp/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=u;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0c97":function(e,t,a){},"36e7":function(e,t,a){"use strict";a("52ad")},"52ad":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),s={id:"app"};function c(e,t,a,c,r,o){var u=Object(n["w"])("NavBar"),i=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])("div",s,[Object(n["g"])(u),Object(n["g"])(i)])}var r=Object(n["D"])("data-v-6c33a900");Object(n["s"])("data-v-6c33a900");var o={id:"nav_main",class:"topnav"},u=Object(n["f"])("WID"),i=Object(n["g"])("div",{id:"nav_main2"},null,-1);Object(n["q"])();var l=r((function(e,t,a,s,c,l){var h=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",o,[Object(n["g"])(h,{to:"/home",class:"active"},{default:r((function(){return[u]})),_:1}),Object(n["g"])("div",{class:"share",onClick:t[1]||(t[1]=function(e){return l.shareApp()})})]),i],64)})),h={name:"NavBar",methods:{toggleCollapse:function(){var e=document.getElementById("nav_main");"topnav"===e.className?e.className+=" responsive":e.className="topnav"},shareApp:function(){console.log(window.navigator.share),navigator.share?(console.log("sharing app"),navigator.share({title:"WebShare API Demo",url:"https://codepen.io/ayoisaiah/pen/YbNazJ"}).then((function(){console.log("Thanks for sharing!")})).catch(console.error)):console.log("something is wrong with share")}}};a("36e7");h.render=l,h.__scopeId="data-v-6c33a900";var d=h,b={name:"App",components:{NavBar:d}};b.render=c;var p=b,f=a("6c02"),g={id:"home"},O={class:"main_btn"};function j(e,t,a,s,c,r){var o=Object(n["w"])("SearchBar"),u=Object(n["w"])("SearchCard"),i=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])("div",g,[Object(n["g"])("input",{type:"button",id:"home_btn",class:"el_hide",onClick:t[1]||(t[1]=function(e){return r.hideSearch()}),value:"Cancel search"}),Object(n["g"])(o,{ref:"search_bar",class:"search_hide",onFocus:t[2]||(t[2]=function(e){return r.beenFocused()})},null,512),Object(n["g"])("div",O,[Object(n["g"])(u,{id:"ssz",class:"search",text:"Search",onClick:t[3]||(t[3]=function(e){return r.showSearch()})})]),Object(n["g"])(i,{to:"/results?q='Supermarket'"},{default:Object(n["C"])((function(){return[Object(n["g"])(u,{text:"Supermarket",class:"supermarket"})]})),_:1}),Object(n["g"])(i,{to:"/results?q='restaurant'"},{default:Object(n["C"])((function(){return[Object(n["g"])(u,{text:"Restaurant",class:"restaurant"})]})),_:1}),Object(n["g"])(i,{to:"/results?q='atm'"},{default:Object(n["C"])((function(){return[Object(n["g"])(u,{text:"atm",class:"atm"})]})),_:1}),Object(n["g"])(i,{to:"/results?q='hospital'"},{default:Object(n["C"])((function(){return[Object(n["g"])(u,{text:"Hospital",class:"hospital"})]})),_:1}),Object(n["g"])(i,{to:"/results?q='pharmacy'"},{default:Object(n["C"])((function(){return[Object(n["g"])(u,{text:"Pharmacy",class:"pharmacy"})]})),_:1}),Object(n["g"])(i,{to:"/results?q='gas station'"},{default:Object(n["C"])((function(){return[Object(n["g"])(u,{text:"Gas station",class:"gas_station"})]})),_:1}),Object(n["g"])(i,{to:"/results?q='taxi bus stand'"},{default:Object(n["C"])((function(){return[Object(n["g"])(u,{text:"Taxi stand",class:"bus_stop"})]})),_:1}),Object(n["g"])(i,{to:"/results?q='barber shop'"},{default:Object(n["C"])((function(){return[Object(n["g"])(u,{text:"Barber shop",class:"barber_shop"})]})),_:1}),Object(n["g"])(i,{to:"/results?q='beauty salon'"},{default:Object(n["C"])((function(){return[Object(n["g"])(u,{text:"Beauty salon",class:"beauty_salon"})]})),_:1}),Object(n["g"])(i,{to:"/results?q='car wash'"},{default:Object(n["C"])((function(){return[Object(n["g"])(u,{text:"Car wash",class:"car_wash"})]})),_:1}),Object(n["g"])(i,{to:"/results?q='mechanic'"},{default:Object(n["C"])((function(){return[Object(n["g"])(u,{text:"Mechanic",class:"mechanic"})]})),_:1})])}a("ac1f"),a("5319");var _=Object(n["D"])("data-v-96d78718");Object(n["s"])("data-v-96d78718");var v={class:"search_card"},m={class:"search_card_text"};Object(n["q"])();var w=_((function(e,t,a,s,c,r){return Object(n["p"])(),Object(n["d"])("div",v,[Object(n["g"])("a",{href:"#",onClick:t[1]||(t[1]=function(e){return r.adz()})},[Object(n["g"])("div",m,[Object(n["g"])("h4",null,Object(n["y"])(a.text),1)])])])})),y={name:"SearchCard",props:{text:String,symbol:String},methods:{adz:function(){}}};a("ce67");y.render=w,y.__scopeId="data-v-96d78718";var S=y,C=Object(n["D"])("data-v-3dd665a5");Object(n["s"])("data-v-3dd665a5");var k=Object(n["g"])("h4",null,"Search",-1);Object(n["q"])();var x=C((function(e,t,a,s,c,r){return Object(n["p"])(),Object(n["d"])("form",{onSubmit:t[3]||(t[3]=function(e){return r.sendQuery()}),onFocus:t[4]||(t[4]=function(e){return r.focused()})},[Object(n["g"])("input",{type:"search",name:"",id:"search_input",ref:"search_input",value:"Search...",onFocus:t[1]||(t[1]=function(e){return r.clearBox()})},null,544),Object(n["g"])("div",{class:"search_card search",onClick:t[2]||(t[2]=function(e){return r.sendQuery()})},[k])],32)})),q={name:"SearchBar",methods:{clearBox:function(){this.$refs.search_input.value=""},showDefaultText:function(){this.$refs.search_input.value="Search..."},sendQuery:function(){var e=this.$refs.search_input.value;this.$router.push({path:"results",query:{q:e}})},focused:function(){console.log("search bar has focus somewhat")}}};a("90a3");q.render=x,q.__scopeId="data-v-3dd665a5";var N=q,B={name:"Home",components:{SearchCard:S,SearchBar:N},methods:{showSearch:function(){if(document.getElementsByClassName("search_hide")[0])console.log(document.getElementsByClassName("search_hide")[0].className),document.getElementsByClassName("search_hide")[0].className="search_show",document.getElementById("ssz").className="search_card search_exe",document.getElementById("home_btn").className="el_show",this.$refs.search_bar.$el[0].focus();else if(document.getElementsByClassName("search_show")[0]){var e=this.$refs.search_bar.$el;console.log("I'm here now bruv"),console.log(e.value),window.location.replace("http://localhost:8080/#/about/"),isNaN(1*e.value)?console.log("pushing"):this.hideSearch()}},hideSearch:function(){document.getElementsByClassName("search_show")[0]&&(document.getElementsByClassName("search_show")[0].className="search_hide",document.getElementById("ssz").className="search_card search",document.getElementById("home_btn").className="el_hide")},beenFocused:function(){console.log("search bar has focus")}}};a("dfd4");B.render=j;var E=B,I=Object(n["D"])("data-v-7790acc5"),T=I((function(e,t,a,s,c,r){return Object(n["p"])(),Object(n["d"])("h1",null,"About")})),z={name:"About"};z.render=T,z.__scopeId="data-v-7790acc5";var P=z,D=(a("b0c0"),Object(n["D"])("data-v-6fe3d71c"));Object(n["s"])("data-v-6fe3d71c");var A={key:0},F={key:1},$={key:2};Object(n["q"])();var L=D((function(e,t,a,s,c,r){var o=Object(n["w"])("ResultCard");return Object(n["p"])(),Object(n["d"])(n["a"],null,[c.processing_query?(Object(n["p"])(),Object(n["d"])("div",A,"Please wait...")):1==c.results.length?(Object(n["p"])(),Object(n["d"])("div",F,Object(n["y"])(c.results.length)+" result for "+Object(n["y"])(a.search_query),1)):(Object(n["p"])(),Object(n["d"])("div",$,Object(n["y"])(c.results.length)+" results for "+Object(n["y"])(a.search_query),1)),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(c.results,(function(e){return Object(n["p"])(),Object(n["d"])(o,{key:e.id,name:e.name,address:e.address,has_tel:e.has_tel,tel:e.tel,has_whatsapp:e.has_whatsapp,whatsapp:e.whatsapp,long:e.long,lat:e.lat,z:e.z,has_gc_website:e.has_gc_website,gc_website:e.gc_website},null,8,["name","address","has_tel","tel","has_whatsapp","whatsapp","long","lat","z","has_gc_website","gc_website"])})),128))],64)})),M=(a("b64b"),a("d3b7"),Object(n["D"])("data-v-2a77b18d"));Object(n["s"])("data-v-2a77b18d");var G={class:"result_card"},W={key:0},R=Object(n["g"])("div",{class:"result_card_phone"},null,-1),J={key:1},Q=Object(n["g"])("div",{class:"result_card_whatsapp"},null,-1),H={key:2},V=Object(n["g"])("div",{class:"result_card_location"},null,-1),Y=Object(n["g"])("h3",null,"Google Maps",-1),K={key:3},U=Object(n["g"])("div",{class:"result_card_web"},null,-1),X=Object(n["g"])("h3",null,"Visit GC Site",-1);Object(n["q"])();var Z=M((function(e,t,a,s,c,r){return Object(n["p"])(),Object(n["d"])("div",G,[Object(n["g"])("h3",null,Object(n["y"])(a.name),1),Object(n["g"])("h4",null,Object(n["y"])(a.address),1),r.hasTel?(Object(n["p"])(),Object(n["d"])("div",W,[Object(n["g"])("a",{href:r.telText},[R,Object(n["g"])("h3",null,Object(n["y"])(a.tel),1)],8,["href"])])):Object(n["e"])("",!0),r.hasWhatsapp?(Object(n["p"])(),Object(n["d"])("div",J,[Object(n["g"])("a",{href:r.whatsappText,target:"_blank"},[Q,Object(n["g"])("h3",null,Object(n["y"])(a.tel),1)],8,["href"])])):Object(n["e"])("",!0),r.hasLocation?(Object(n["p"])(),Object(n["d"])("div",H,[Object(n["g"])("a",{href:r.locationLink,target:"_blank"},[V,Y],8,["href"])])):Object(n["e"])("",!0),r.hasGcSite?(Object(n["p"])(),Object(n["d"])("div",K,[Object(n["g"])("a",{href:r.gcWebsite,target:"_blank"},[U,X],8,["href"])])):Object(n["e"])("",!0)])})),ee=(a("a9e3"),a("498a"),{name:"ResultCard",props:{id:Number,name:String,address:String,has_tel:String,tel:String,has_whatsapp:String,whatsapp:String,long:String,lat:String,z:String,has_gc_website:String,gc_website:String,sells_online:String},computed:{telText:function(){return"tel:"+this.tel},whatsappText:function(){return"https://wa.me/"+this.tel},hasGcSite:function(){if(console.log(this.has_gc_website),!this.has_gc_website)return!1;switch(this.has_gc_website.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(this.has_gc_website)}},hasLocation:function(){return!!(this.long&this.lat)},hasTel:function(){if(!this.has_tel)return!0;switch(this.has_tel.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(this.has_tel)}},hasWhatsapp:function(){if(!this.has_whatsapp)return!0;switch(this.has_whatsapp.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(this.has_whatsapp)}},gcWebsite:function(){return this.hasGcSite?this.gc_website:"/"},locationLink:function(){return"https://www.google.com/maps/@"+this.long+","+this.lat+","+this.z}}});a("c3cf");ee.render=Z,ee.__scopeId="data-v-2a77b18d";var te=ee,ae="https://greencheque.com",ne={name:"SearchResults",components:{ResultCard:te},props:{search_query:String},data:function(){return{results:[],processing_query:!0,isEditing:!1}},created:function(){var e=this;this.processing_query=!0;var t=new DOMParser,a=ae+"/wp-json/wp/v2/posts/?search="+this.search_query;fetch(a).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(a){if(console.log(Object.keys(a).length),Object.keys(a).length>0)for(var n in a){var s=a[n].content.rendered,c=t.parseFromString(s,"text/html");console.log(c);var r=c.getElementsByTagName("pre")[0].innerText,o=JSON.parse(r);e.results.push(o),console.log(o.name)}else console.log("no results found");e.processing_query=!1}))}};ne.render=L,ne.__scopeId="data-v-6fe3d71c";var se=ne,ce="/wordpress/widapp/",re=[{path:ce+"/",component:E},{path:"/widapp",component:E},{path:"/",component:E},{path:"/home",component:E},{path:"/about",component:P},{path:"/results",component:se,props:function(e){return{search_query:e.query.q}}}],oe=Object(f["a"])({history:Object(f["b"])(),routes:re}),ue=oe,ie=a("9483");Object(ie["a"])("".concat("/widapp/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var le=Object(n["c"])(p);le.use(ue),le.mount("#app")},"90a3":function(e,t,a){"use strict";a("99a8")},"95c9":function(e,t,a){},"99a8":function(e,t,a){},c3cf:function(e,t,a){"use strict";a("0c97")},ce67:function(e,t,a){"use strict";a("95c9")},dfd4:function(e,t,a){"use strict";a("e2f5")},e2f5:function(e,t,a){}});
//# sourceMappingURL=app.901d2b1c.js.map