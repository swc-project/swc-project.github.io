(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),c=(n(0),n(327)),a={title:"Changelog: swc v1.1.48",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/05/25/swc-1.1.48",source:"@site/blog/2020-05-25-swc-1.1.48.md",description:"Bugfixes",date:"2020-05-25T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.48",readingTime:.59,truncated:!1,prevItem:{title:"Changelog: swc v1.1.49",permalink:"/blog/2020/05/28/swc-1.1.49"},nextItem:{title:"Changelog: swc v1.1.47",permalink:"/blog/2020/05/22/swc-1.1.47"}},s=[{value:"Bugfixes",id:"bugfixes",children:[{value:"typescript casts (#794)",id:"typescript-casts-794",children:[]},{value:"Plugin (#785)",id:"plugin-785",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h3",{id:"typescript-casts-794"},"typescript casts (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/794"}),"#794"),")"),Object(c.b)("p",null,"Previously, ",Object(c.b)("inlineCode",{parentName:"p"},"swc")," dropped the type information in casts without visiting it. It caused"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { IPerson } from "../types/types";\nexport function createPerson(person) {\n  const a = {} as IPerson;\n}\n')),Object(c.b)("p",null,"to be compiled as"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'// The import is not dropped.\nimport { IPerson } from "../types/types";\nexport function createPerson(person) {\n  const a = {};\n}\n')),Object(c.b)("p",null,"This is fixed by visiting types, and ",Object(c.b)("inlineCode",{parentName:"p"},"swc")," now emits"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"export function createPerson(person) {\n  const a = {};\n}\n")),Object(c.b)("h3",{id:"plugin-785"},"Plugin (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/785"}),"#785"),")"),Object(c.b)("p",null,"Plugin was broken because ",Object(c.b)("inlineCode",{parentName:"p"},"swc.transformSync")," emits original code even though user modified the ast. This is fixed and to prevent such regession, I moved node-swc into the main repository."))}u.isMDXComponent=!0},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,m=l["".concat(a,".").concat(f)]||l[f]||b[f]||c;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);