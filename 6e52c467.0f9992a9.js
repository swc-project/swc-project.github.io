(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(340)),o={title:"Changelog: swc v1.1.36",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/03/26/swc-1.1.36",source:"@site/blog/2020-03-26-swc-1.1.36.md",description:"Bugfixes",date:"2020-03-26T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.36",readingTime:.28,truncated:!1,prevItem:{title:"Changelog: swc v1.1.37",permalink:"/blog/2020/03/28/swc-1.1.37"},nextItem:{title:"Call for help and roadmap",permalink:"/blog/2020/03/16/roadmap-and-call-for-help"}},l=[{value:"Bugfixes",id:"bugfixes",children:[{value:"TypeScript enum with key / value (#730)",id:"typescript-enum-with-key--value-730",children:[]},{value:"await after yield (#720)",id:"await-after-yield-720",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h3",{id:"typescript-enum-with-key--value-730"},"TypeScript enum with key / value (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/730"},"#730"),")"),Object(c.b)("p",null,"Thanks to ",Object(c.b)("a",{parentName:"p",href:"https://github.com/gus3inov"},"@gus3inov"),", swc now handles typescript enum correctly."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},'enum StateNum {\n  closed = "cl0",\n  opened = "op1",\n  mounted = "mo2"\n}\n')),Object(c.b)("h3",{id:"await-after-yield-720"},"await after yield (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/720"},"#720"),")"),Object(c.b)("p",null,"The code like below is parsed correctly."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"async function* main() {\n  yield await 0;\n}\n")))}p.isMDXComponent=!0},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,m=s["".concat(o,".").concat(f)]||s[f]||b[f]||c;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);