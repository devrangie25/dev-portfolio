(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{419:function(t,e,n){"use strict";n(9),n(11),n(16),n(17);var r=n(2),o=(n(5),n(27),n(13),n(25),n(59),n(273),n(44),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(45),n(56),n(12),n(65),n(204),n(0)),c=n(68),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],O=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=m.reduce((function(t,e){return t["offset"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),y=m.reduce((function(t,e){return t["order"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(O),offset:Object.keys(v),order:Object.keys(y)};function j(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var r=n[t],o=j(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},463:function(t,e,n){var content=n(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("24d3f15a",content,!0,{sourceMap:!1})},488:function(t,e,n){"use strict";n(463)},489:function(t,e,n){var r=n(18)(!1);r.push([t.i,".about-me-description[data-v-c9276d7a]{background:#e8d231!important}",""]),t.exports=r},499:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{description:"I graduated as scholar of Passerelles numeriques Philippines a French NGO, at the University of San Carlos - Talamban Campus with the course of Certificate of Computer Technology (CCT) major in Software Development. Programming is really one of passion aside from that, I also love playing Sports and Online Games."}},created:function(){this.$nuxt.$emit("page-transition","about-me")},mounted:function(){this.$nuxt.$emit("current-page","about-me")}},o=(n(488),n(58)),c=n(76),l=n.n(c),f=n(419),d=n(405),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"rounded-lg mt-16 d-flex justify-center align-center animate__animated animate__backInDown about-me-description",attrs:{cols:"12"}},[n("div",{staticClass:"headline font-weight-bold description black--text pa-16 animate__animated animate__backInRight animate__delay-1s"},[t._v("\n\t\t\t"+t._s(t.description)+"\n\t\t")])])],1)}),[],!1,null,"c9276d7a",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})}}]);