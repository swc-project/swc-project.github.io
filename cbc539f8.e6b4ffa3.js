(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{275:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),s=(r(0),r(340)),c={title:"Changelog: swc v1.2.45",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2021/01/14/swc-1.2.45",source:"@site/blog/2021-01-14-swc-1.2.45.md",description:"Bugfixes",date:"2021-01-14T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.45",readingTime:.67,truncated:!1,prevItem:{title:"Changelog: swc v1.2.46",permalink:"/blog/2021/01/23/swc-1.2.46"},nextItem:{title:"Changelog: swc v1.2.44",permalink:"/blog/2021/01/11/swc-1.2.44"}},o=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Escapes in string literals (#1227)",id:"escapes-in-string-literals-1227",children:[]},{value:"Panic on aliased reexports (#1307)",id:"panic-on-aliased-reexports-1307",children:[]},{value:"Private class properties (#1306)",id:"private-class-properties-1306",children:[]},{value:"Preserve imports (#1134)",id:"preserve-imports-1134",children:[]}]},{value:"Features",id:"features",children:[{value:"Support for typescript namespace (#1325)",id:"support-for-typescript-namespace-1325",children:[]}]}],p={toc:o};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(s.b)("h3",{id:"escapes-in-string-literals-1227"},"Escapes in string literals (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1227"},"#1227"),")"),Object(s.b)("p",null,"This was a regression caused by some works related to span (and sourcemaps). I fixed it and ",Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," can emit es5 code as before."),Object(s.b)("h3",{id:"panic-on-aliased-reexports-1307"},"Panic on aliased reexports (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1307"},"#1307"),")"),Object(s.b)("p",null,"This is a regresssion caused by promoting namespaced re-exports like (",Object(s.b)("inlineCode",{parentName:"p"},"export * as foo from 'foo'"),") to ",Object(s.b)("inlineCode",{parentName:"p"},"es2020")," from ",Object(s.b)("inlineCode",{parentName:"p"},"esnext"),". This is now fixed."),Object(s.b)("h3",{id:"private-class-properties-1306"},"Private class properties (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1306"},"#1306"),")"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," previously miscompiled"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"class Animal {\n  readonly #name: string;\n\n  constructor(name: string) {\n    this.#name = name;\n  }\n\n  public noise() {\n    return this.#name.toUpperCase();\n  }\n}\n")),Object(s.b)("p",null,"but now ",Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," compiles it correctly. Actaully the fix was addition of one line."),Object(s.b)("h3",{id:"preserve-imports-1134"},"Preserve imports (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1134"},"#1134"),")"),Object(s.b)("p",null,"This is also a regression, but it's now fixed."),Object(s.b)("h2",{id:"features"},"Features"),Object(s.b)("h3",{id:"support-for-typescript-namespace-1325"},"Support for typescript namespace (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1325"},"#1325"),")"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," now supports typescript namespace."))}l.isMDXComponent=!0},340:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(c,".").concat(m)]||u[m]||b[m]||s;return r?a.a.createElement(f,i(i({ref:t},p),{},{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,c=new Array(s);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<s;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);