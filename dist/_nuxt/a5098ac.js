(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{411:function(t,e,r){var content=r(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("e2829be4",content,!0,{sourceMap:!1})},419:function(t,e,r){"use strict";r(9),r(11),r(16),r(17);var n=r(2),o=(r(5),r(27),r(13),r(25),r(59),r(273),r(44),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(45),r(56),r(12),r(65),r(204),r(0)),c=r(68),l=r(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(l.u)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(y)};function w(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var j=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=j.get(l);return f||function(){var t,e;for(e in f=[],O)O[e].forEach((function(t){var n=r[t],o=w(e,t,n);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),j.set(l,f)}(),t(r.tag,Object(c.a)(data,{class:f}),o)}})},422:function(t,e,r){"use strict";r(411)},423:function(t,e,r){var n=r(18)(!1);n.push([t.i,".about-me-con[data-v-0ca82cf9]{height:100vh}.first-col[data-v-0ca82cf9]{height:80%}.second-col[data-v-0ca82cf9]{height:100%}.description[data-v-0ca82cf9]{line-height:3.2rem}",""]),t.exports=n},433:function(t,e,r){"use strict";r.r(e);r(56);var n={data:function(){return{isActive:!1,description:"I graduated as scholar of Passerelles numeriques Philippines a French NGO, at the University of San Carlos with the course of Certificate of Computer Technology (CCT) major in Software Development. Currently I am working as a Full-Stack Web Developer for one year+.\n\t\t\tMy forte is VueJS/NuxtJS and NodeJs. Snorkeling is one of my stress reliever, I also play desktop, and mobile online games."}},created:function(){["extra-small","small","medium"].includes(this.width)&&this.$nuxt.$emit("page-transition","about-me")},computed:{width:function(){var t=this.$vuetify.breakpoint.width;return t<600?(console.log("Extra Small Screen"),"extra-small"):t>600&&t<960?(console.log("Small Screen"),"small"):t>960&&t<1264?(console.log("Medium Screen"),"medium"):t>1264&&t<1904?(console.log("Large Screen"),"large"):t>1904?(console.log("Extra Large Screen"),"extra-large"):void 0}}},o=(r(422),r(58)),c=r(76),l=r.n(c),d=r(271),f=r(419),h=r(163),v=(r(13),r(9),r(11),r(5),r(16),r(12),r(17),r(2)),m=r(106),y=r(63),O=r(128),w=r(15),j=r(1);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var x=Object(w.a)(m.a,y.a).extend({name:"VLazy",directives:{intersect:O.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(j.m)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,r){this.isActive||(this.isActive=r)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),_=r(405),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-lazy",{attrs:{options:{threshold:.5},"min-height":"500",transition:"fade-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[r("v-row",{staticClass:"about-me-con",attrs:{align:"center"}},[["extra-large","large"].includes(t.width)?r("v-col",{staticClass:"d-flex justify-center align-center first-col animate__animated animate__backInDown rounded-lg",attrs:{cols:"12",lg:"6"}},[r("div",[r("v-img",{attrs:{src:"/img/big-head-1.svg","lazy-src":"/img/big-head-1.svg",alt:"Cell",width:"extra-large"===t.width?700:500}})],1)]):t._e(),t._v(" "),r("v-col",{staticClass:"d-flex justify-center align-center second-col",attrs:{cols:"12",lg:"6"}},[r("div",{staticClass:"font-weight-bold description banana_primary--text px-12 animate__animated animate__backInUp"},[r("div",{class:(["extra-large","large"].includes(t.width)?"display-3":"display-1")+" mb-6"},[t._v("\n\t\t\t\t\tAbout me\n\t\t\t\t")]),t._v(" "),r("div",{class:("extra-large"===t.width?"headline":"title")+" description"},[t._v("\n\t\t\t\t\t"+t._s(t.description)+"\n\t\t\t\t")]),t._v(" "),r("div",{staticClass:"mt-6"},[r("v-btn",{staticClass:"text-none rounded-lg black--text text-capitalize font-weight-black",attrs:{depressed:"",width:"200",height:"extra-large"===t.width?55:70,color:"banana_primary",dark:""}},[r("a",{staticClass:"text-decoration-none font-weight-black black--text",attrs:{href:"/img/updated_resume_dev_rangie.pdf",download:""}},[r("span",{staticClass:"btn-text"},[t._v("\n\t\t\t\t\t\t\t\tDownload Resume\n\t\t\t\t\t\t\t")])])])],1)])])],1)],1)}),[],!1,null,"0ca82cf9",null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:f.a,VImg:h.a,VLazy:x,VRow:_.a})}}]);