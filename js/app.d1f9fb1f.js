(function(e){function t(t){for(var s,r,o=t[0],u=t[1],i=t[2],h=0,b=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);l&&l(t);while(b.length)b.shift()();return n.push.apply(n,i||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var u=a[o];0!==c[u]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},c={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=u;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2192:function(e,t,a){"use strict";a("c72f")},"29c0":function(e,t,a){"use strict";a("bcdc")},3068:function(e,t,a){},5653:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var s=a("7a23"),c={id:"app"};function n(e,t,a,n,r,o){var u=Object(s["w"])("NavBar"),i=Object(s["w"])("router-view");return Object(s["p"])(),Object(s["d"])("div",c,[Object(s["g"])(u),Object(s["g"])(i)])}var r=Object(s["D"])("data-v-7e60b4c2");Object(s["s"])("data-v-7e60b4c2");var o={id:"nav_main",class:"topnav"},u=Object(s["f"])("WID"),i=Object(s["g"])("div",{id:"nav_main2"},null,-1);Object(s["q"])();var l=r((function(e,t,a,c,n,l){var h=Object(s["w"])("router-link");return Object(s["p"])(),Object(s["d"])(s["a"],null,[Object(s["g"])("div",o,[Object(s["g"])(h,{to:"/home",class:"active"},{default:r((function(){return[u]})),_:1})]),i],64)})),h={name:"NavBar",methods:{toggleCollapse:function(){var e=document.getElementById("nav_main");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}}};a("94f0");h.render=l,h.__scopeId="data-v-7e60b4c2";var b=h,d={name:"App",components:{NavBar:b}};a("64be");d.render=n;var p=d,f=a("6c02"),O={id:"home"},j={class:"main_btn"};function g(e,t,a,c,n,r){var o=Object(s["w"])("SearchBar"),u=Object(s["w"])("SearchCard"),i=Object(s["w"])("router-link");return Object(s["p"])(),Object(s["d"])("div",O,[Object(s["g"])(o,{ref:"search_bar",class:"search_hide",onFocus:t[1]||(t[1]=function(e){return r.beenFocused()})},null,512),Object(s["g"])("div",j,[Object(s["g"])(u,{id:"ssz",class:"search",text:"",onClick:t[2]||(t[2]=function(e){return r.showSearch()})})]),Object(s["g"])(i,{to:"/results?q='Supermarket'"},{default:Object(s["C"])((function(){return[Object(s["g"])(u,{class:"supermarket"})]})),_:1}),Object(s["g"])(i,{to:"/results?q='restaurant'"},{default:Object(s["C"])((function(){return[Object(s["g"])(u,{class:"restaurant"})]})),_:1}),Object(s["g"])(i,{to:"/results?q='atm'"},{default:Object(s["C"])((function(){return[Object(s["g"])(u,{class:"atm"})]})),_:1}),Object(s["g"])(i,{to:"/results?q='hospital'"},{default:Object(s["C"])((function(){return[Object(s["g"])(u,{class:"hospital"})]})),_:1}),Object(s["g"])(i,{to:"/results?q='gas station'"},{default:Object(s["C"])((function(){return[Object(s["g"])(u,{class:"gas_station"})]})),_:1}),Object(s["g"])(i,{to:"/results?q='bus stop'"},{default:Object(s["C"])((function(){return[Object(s["g"])(u,{class:"bus_stop"})]})),_:1})])}var _=Object(s["D"])("data-v-7a40ca30");Object(s["s"])("data-v-7a40ca30");var v={class:"search_card"};Object(s["q"])();var m=_((function(e,t,a,c,n,r){return Object(s["p"])(),Object(s["d"])("div",v,[Object(s["g"])("a",{href:"#",onClick:t[1]||(t[1]=function(e){return r.adz()})},[Object(s["g"])("div",null,[Object(s["g"])("h4",null,Object(s["y"])(a.text),1)])])])})),w={name:"SearchCard",props:{text:String,symbol:String},methods:{adz:function(){}}};a("2192");w.render=m,w.__scopeId="data-v-7a40ca30";var y=w,S=Object(s["D"])("data-v-235b450c"),C=S((function(e,t,a,c,n,r){return Object(s["p"])(),Object(s["d"])("input",{type:"text",name:"",id:"search_input",ref:"search_input",value:"Search...",onFocus:t[1]||(t[1]=function(e){return r.clearBox()})},null,544)})),k={name:"SearchBar",methods:{clearBox:function(){this.$refs.search_input.value=""},showDefaultText:function(){this.$refs.search_input.value="Search..."}}};a("96ad");k.render=C,k.__scopeId="data-v-235b450c";var q=k,N={name:"Home",components:{SearchCard:y,SearchBar:q},methods:{showSearch:function(){if(document.getElementsByClassName("search_hide")[0]){console.log(document.getElementsByClassName("search_hide")[0].className),document.getElementsByClassName("search_hide")[0].className="search_show",document.getElementById("ssz").className="search_card search_exe";var e=this.$refs.search_bar.$el;e.focus()}else if(document.getElementsByClassName("search_show")[0]){var t=this.$refs.search_bar.$el;isNaN(1*t.value)?this.$router.push("/results?q="+t.value):this.hideSearch()}},hideSearch:function(){document.getElementsByClassName("search_show")[0]&&(document.getElementsByClassName("search_show")[0].className="search_hide",document.getElementById("ssz").className="search_card search")},beenFocused:function(){console.log("focuses")}}};a("dfd4");N.render=g;var B=N,x=Object(s["D"])("data-v-1610b9d6"),E=x((function(e,t,a,c,n,r){return Object(s["p"])(),Object(s["d"])("h1",null,"About")})),T={name:"About"};a("29c0");T.render=E,T.__scopeId="data-v-1610b9d6";var z=T,I=(a("b0c0"),Object(s["D"])("data-v-60eec57a"));Object(s["s"])("data-v-60eec57a");var D={key:0},P={key:1},L={key:2};Object(s["q"])();var $=I((function(e,t,a,c,n,r){var o=Object(s["w"])("ResultCard");return Object(s["p"])(),Object(s["d"])(s["a"],null,[n.processing_query?(Object(s["p"])(),Object(s["d"])("div",D,"Please wait...")):1==n.results.length?(Object(s["p"])(),Object(s["d"])("div",P,Object(s["y"])(n.results.length)+" result for "+Object(s["y"])(a.search_query),1)):(Object(s["p"])(),Object(s["d"])("div",L,Object(s["y"])(n.results.length)+" results for "+Object(s["y"])(a.search_query),1)),(Object(s["p"])(!0),Object(s["d"])(s["a"],null,Object(s["v"])(n.results,(function(e){return Object(s["p"])(),Object(s["d"])(o,{key:e.id,name:e.name,address:e.address,has_tel:e.has_tel,tel:e.tel,has_whatsapp:e.has_whatsapp,whatsapp:e.whatsapp,long:e.long,lat:e.lat,z:e.z,has_gc_website:e.has_gc_website,gc_website:e.gc_website},null,8,["name","address","has_tel","tel","has_whatsapp","whatsapp","long","lat","z","has_gc_website","gc_website"])})),128))],64)})),M=(a("b64b"),a("d3b7"),Object(s["D"])("data-v-24f9258a"));Object(s["s"])("data-v-24f9258a");var F={class:"result_card"},G={key:0},W=Object(s["g"])("div",{class:"result_card_phone"},null,-1),R={key:1},A=Object(s["g"])("div",{class:"result_card_whatsapp"},null,-1),J={key:2},H=Object(s["g"])("div",{class:"result_card_location"},null,-1),V=Object(s["g"])("h3",null,"Google Maps",-1),K={key:3},Q=Object(s["g"])("div",{class:"result_card_web"},null,-1),U=Object(s["g"])("h3",null,"Visit GC Site",-1);Object(s["q"])();var X=M((function(e,t,a,c,n,r){return Object(s["p"])(),Object(s["d"])("div",F,[Object(s["g"])("h1",null,Object(s["y"])(a.name),1),Object(s["g"])("h3",null,Object(s["y"])(a.address),1),r.hasTel?(Object(s["p"])(),Object(s["d"])("div",G,[Object(s["g"])("a",{href:r.telText},[W,Object(s["g"])("h3",null,Object(s["y"])(a.tel),1)],8,["href"])])):Object(s["e"])("",!0),r.hasWhatsapp?(Object(s["p"])(),Object(s["d"])("div",R,[Object(s["g"])("a",{href:r.whatsappText,target:"_blank"},[A,Object(s["g"])("h3",null,Object(s["y"])(a.tel),1)],8,["href"])])):Object(s["e"])("",!0),r.hasLocation?(Object(s["p"])(),Object(s["d"])("div",J,[Object(s["g"])("a",{href:r.locationLink,target:"_blank"},[H,V],8,["href"])])):Object(s["e"])("",!0),r.hasGcSite?(Object(s["p"])(),Object(s["d"])("div",K,[Object(s["g"])("a",{href:r.gcWebsite,target:"_blank"},[Q,U],8,["href"])])):Object(s["e"])("",!0)])})),Y=(a("a9e3"),a("498a"),{name:"ResultCard",props:{id:Number,name:String,address:String,has_tel:String,tel:String,has_whatsapp:String,whatsapp:String,long:String,lat:String,z:String,has_gc_website:String,gc_website:String,sells_online:String},computed:{telText:function(){return"tel:"+this.tel},whatsappText:function(){return"https://wa.me/"+this.tel},hasGcSite:function(){if(console.log(this.has_gc_website),!this.has_gc_website)return!1;switch(this.has_gc_website.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(this.has_gc_website)}},hasLocation:function(){return!!(this.long&this.lat)},hasTel:function(){if(!this.has_tel)return!0;switch(this.has_tel.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(this.has_tel)}},hasWhatsapp:function(){if(!this.has_whatsapp)return!0;switch(this.has_whatsapp.toLowerCase().trim()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":case null:return!1;default:return Boolean(this.has_whatsapp)}},gcWebsite:function(){return this.hasGcSite?this.gc_website:"/"},locationLink:function(){return"https://www.google.com/maps/@"+this.long+","+this.lat+","+this.z}}});a("abaa");Y.render=X,Y.__scopeId="data-v-24f9258a";var Z=Y,ee="https://greencheque.com",te={name:"SearchResults",components:{ResultCard:Z},props:{search_query:String},data:function(){return{results:[],processing_query:!0,isEditing:!1}},created:function(){var e=this;this.processing_query=!0;var t=new DOMParser,a=ee+"/wp-json/wp/v2/posts/?search="+this.search_query;fetch(a).then((function(e){return e.json()})).then((function(a){if(console.log(Object.keys(a).length),Object.keys(a).length>0)for(var s in a){var c=a[s].content.rendered,n=t.parseFromString(c,"text/html");console.log(n);var r=n.getElementsByTagName("pre")[0].innerText,o=JSON.parse(r);e.results.push(o),console.log(o.name)}else console.log("no results found");e.processing_query=!1}))}};a("c221");te.render=$,te.__scopeId="data-v-60eec57a";var ae=te,se="/wordpress/widapp/",ce=[{path:se+"/",component:B},{path:"/widapp",component:B},{path:"/",component:B},{path:"/home",component:B},{path:"/about",component:z},{path:"/results",component:ae,props:function(e){return{search_query:e.query.q}}}],ne=Object(f["a"])({history:Object(f["b"])(),routes:ce}),re=ne,oe=Object(s["c"])(p);oe.use(re),oe.mount("#app")},"64be":function(e,t,a){"use strict";a("3068")},"6aee":function(e,t,a){},"94f0":function(e,t,a){"use strict";a("5653")},"96ad":function(e,t,a){"use strict";a("c389")},abaa:function(e,t,a){"use strict";a("e476")},bcdc:function(e,t,a){},c221:function(e,t,a){"use strict";a("6aee")},c389:function(e,t,a){},c72f:function(e,t,a){},dfd4:function(e,t,a){"use strict";a("e2f5")},e2f5:function(e,t,a){},e476:function(e,t,a){}});
//# sourceMappingURL=app.d1f9fb1f.js.map