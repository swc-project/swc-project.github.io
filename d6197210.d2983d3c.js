(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),c=n(7),o=(n(0),n(340)),a={title:"ChangeLog: swc v1.2.30",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/09/18/swc-1.2.30",source:"@site/blog/2020-09-18-swc-1.2.30.md",description:"Documentations",date:"2020-09-18T00:00:00.000Z",tags:[],title:"ChangeLog: swc v1.2.30",readingTime:.755,truncated:!1,prevItem:{title:"ChangeLog: swc v1.2.32",permalink:"/blog/2020/09/22/swc-1.2.32"},nextItem:{title:"ChangeLog: swc v1.2.27",permalink:"/blog/2020/09/13/swc-1.2.27"}},s=[{value:"Documentations",id:"documentations",children:[]},{value:"Bugfixes",id:"bugfixes",children:[{value:"spack (#1075, #1078)",id:"spack-1075-1078",children:[]}]},{value:"musl support",id:"musl-support",children:[]},{value:"@swc/jest",id:"swcjest",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"documentations"},"Documentations"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},".d.ts")," files and the documentation of ",Object(o.b)("a",{parentName:"p",href:"https://swc-project.github.io"},"swc")," is now consistent."),Object(o.b)("p",null,"See: ",Object(o.b)("a",{parentName:"p",href:"https://swc-project.github.io/docs/configuring-swc.html"},"configuring swc")),Object(o.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(o.b)("h3",{id:"spack-1075-1078"},"spack (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1075"},"#1075"),", ",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1078"},"#1078"),")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Panic while calculating the least common ancestor.")),Object(o.b)("p",null,"Previously, in some cases, lca calculation resulted in a panic because root entries do not have any ancestor."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cyclic imports mixed with normal imports")),Object(o.b)("p",null,"This was tricky to fix because ",Object(o.b)("inlineCode",{parentName:"p"},"spack")," works in the parallel manner. You can't know which module is loaded first, and even the order of processing is not determined."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cyclic imports in the root entry")),Object(o.b)("p",null,"Previously, ",Object(o.b)("a",{parentName:"p",href:"https://swc-project.github.io"},"swc")," could not handle cyclic imports in the root entry. But it's now fixed."),Object(o.b)("h2",{id:"musl-support"},"musl support"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://swc-project.github.io"},"swc")," finally supports musl. It was my long-cherished project, and finally fixed by ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Brooooooklyn"},"@Brooooooklyn"),"."),Object(o.b)("h2",{id:"swcjest"},"@swc/jest"),Object(o.b)("p",null,"It's a much faster alternative for ts-jest without type checking."),Object(o.b)("p",null,"Homepage: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/swc-project/jest"},"https://github.com/swc-project/jest")),Object(o.b)("p",null,"Usage:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"jest.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  transform: {\n    "^.+\\\\.(t|j)sx?$": ["@swc/jest"],\n  },\n};\n')))}p.isMDXComponent=!0},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||b[m]||o;return n?c.a.createElement(f,i(i({ref:t},l),{},{components:n})):c.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);