(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{299:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return f}));var n=r(3),a=r(7),o=(r(0),r(313)),c={title:"Changelog: swc v1.1.6",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2019/12/14/swc-1.1.6",source:"@site/blog/2019-12-14-swc-1.1.6.md",description:"performance of transforms",date:"2019-12-14T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.6",readingTime:.28,truncated:!1,prevItem:{title:"Changelog: swc v1.1.7",permalink:"/blog/2019/12/21/swc-1.1.7"},nextItem:{title:"Changelog: swc v1.1.5",permalink:"/blog/2019/12/11/swc-1.1.5"}},p=[{value:"performance of transforms",id:"performance-of-transforms",children:[]},{value:"typescript parser bugfix (#507)",id:"typescript-parser-bugfix-507",children:[]}],s={toc:p};function f(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"performance-of-transforms"},"performance of transforms"),Object(o.b)("p",null,"Overall performance of transform passes are improved, thanks to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/swc-project/swc/commit/3ec395ba7519a552d20d8120877fae2f270de887"}),"hygiene optimization"),". Especially, performance of resolver pass is drastically (~60%) improved."),Object(o.b)("h2",{id:"typescript-parser-bugfix-507"},"typescript parser bugfix (",Object(o.b)("a",Object(n.a)({parentName:"h2"},{href:"https://github.com/swc-project/swc/pull/507"}),"#507"),")"),Object(o.b)("p",null,"There was a bug which sets target of parser to es3, and it result in a bug that parser fails to parse getter and setter in typescript."))}f.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),f=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=f(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=f(r),b=n,m=l["".concat(c,".").concat(b)]||l[b]||u[b]||o;return r?a.a.createElement(m,i(i({ref:t},s),{},{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);