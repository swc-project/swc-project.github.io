(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(340)),i={title:"Changelog: swc v1.1.20",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},p={permalink:"/blog/2020/02/07/swc-1.1.20",source:"@site/blog/2020-02-07-swc-1.1.20.md",description:"Improvements",date:"2020-02-07T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.20",readingTime:1.04,truncated:!1,prevItem:{title:"Changelog: swc v1.1.19",permalink:"/blog/2020/02/07/swc-1.1.19"},nextItem:{title:"Changelog: swc v1.1.17",permalink:"/blog/2020/01/30/swc-1.1.17"}},o=[{value:"Improvements",id:"improvements",children:[{value:"Smaller runtime dependency (#631)",id:"smaller-runtime-dependency-631",children:[]},{value:"Better error message (#650)",id:"better-error-message-650",children:[]},{value:"TypeScript privatge fields (#642)",id:"typescript-privatge-fields-642",children:[]},{value:"TypeScript: export namespace from (#647)",id:"typescript-export-namespace-from-647",children:[]}]},{value:"Bugfixes",id:"bugfixes",children:[]},{value:"Escpaes in template literals (#652)",id:"escpaes-in-template-literals-652",children:[{value:"TypeScript imports (#641)",id:"typescript-imports-641",children:[]}]}],s={toc:o};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"improvements"},"Improvements"),Object(c.b)("h3",{id:"smaller-runtime-dependency-631"},"Smaller runtime dependency (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/631"},"#631"),")"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"swc")," now imports ",Object(c.b)("inlineCode",{parentName:"p"},"regenerator-runtime")," instead of ",Object(c.b)("inlineCode",{parentName:"p"},"@babel/runtime/regenerator"),". This is not a breaking change because ",Object(c.b)("inlineCode",{parentName:"p"},"@babel/runtime")," depends on ",Object(c.b)("inlineCode",{parentName:"p"},"regenerator-runtime"),"."),Object(c.b)("p",null,"From now on, you can remove ",Object(c.b)("inlineCode",{parentName:"p"},"@babel/runtime")," from dependencies."),Object(c.b)("h3",{id:"better-error-message-650"},"Better error message (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/650"},"#650"),")"),Object(c.b)("p",null,"Instead of showing ",Object(c.b)("inlineCode",{parentName:"p"},"require failed"),", ",Object(c.b)("inlineCode",{parentName:"p"},"swc")," emits proper error message (",Object(c.b)("inlineCode",{parentName:"p"},"swc: You have to install browserslist to use env"),") to stderr."),Object(c.b)("h3",{id:"typescript-privatge-fields-642"},"TypeScript privatge fields (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/642"},"#642"),")"),Object(c.b)("p",null,"TypeScript 3.8 added the concept of private fields. As ",Object(c.b)("inlineCode",{parentName:"p"},"swc")," had private field support for ecmascript, adding support for typescript was easy."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"class Person {\n    #name: string\n\n    constructor(name: string) {\n        this.#name = name;\n    }\n\n    greet() {\n        console.log(`Hello, my name is ${this.#name}!`);\n    }\n}\n\nlet jeremy = new Person(\"Jeremy Bearimy\");\n\njeremy.#name\n//     ~~~~~\n// Property '#name' is not accessible outside class 'Person'\n// because it has a private identifier.\n\n")),Object(c.b)("h3",{id:"typescript-export-namespace-from-647"},"TypeScript: export namespace from (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/647"},"#647"),")"),Object(c.b)("p",null,"TypeScript 3.8 allows code like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},'export * as utilities from "./utilities.js";\n')),Object(c.b)("p",null,"As it's official typescript syntax, ",Object(c.b)("inlineCode",{parentName:"p"},"export * as namespace from 'foo'")," does not require changing any config."),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h2",{id:"escpaes-in-template-literals-652"},"Escpaes in template literals (",Object(c.b)("a",{parentName:"h2",href:"https://github.com/swc-project/swc/pull/652"},"#652"),")"),Object(c.b)("p",null,"Previously, codes like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"`\\x1b[33m Yellow \\x1b[0m`;\n")),Object(c.b)("p",null,"were broken by ",Object(c.b)("inlineCode",{parentName:"p"},"swc"),". ",Object(c.b)("inlineCode",{parentName:"p"},"swc")," handles escapes in template literals correctly."),Object(c.b)("h3",{id:"typescript-imports-641"},"TypeScript imports (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/641"},"#641"),")"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"swc")," strips out type-only imports correctly."))}l.isMDXComponent=!0},340:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=l(r),u=n,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||c;return r?a.a.createElement(d,p(p({ref:t},s),{},{components:r})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<c;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);