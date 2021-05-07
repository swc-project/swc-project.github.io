(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),a=(n(0),n(335)),o={title:"Changelog: swc v1.1.21",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/02/13/swc-1.1.21",source:"@site/blog/2020-02-13-swc-1.1.21.md",description:"Improvements",date:"2020-02-13T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.21",readingTime:.565,truncated:!1,prevItem:{title:"Why is swc fast?",permalink:"/blog/2020/02/16/why-is-swc-fast"},nextItem:{title:"Changelog: swc v1.1.22",permalink:"/blog/2020/02/13/swc-1.1.22"}},s=[{value:"Improvements",id:"improvements",children:[{value:"Automatic typescript detection (#655)",id:"automatic-typescript-detection-655",children:[]}]},{value:"Bugfixes",id:"bugfixes",children:[{value:"TypeScript const assertion (#656)",id:"typescript-const-assertion-656",children:[]},{value:"cli bugfixes (#658)",id:"cli-bugfixes-658",children:[]}]}],p={toc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"improvements"},"Improvements"),Object(a.b)("h3",{id:"automatic-typescript-detection-655"},"Automatic typescript detection (",Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/655"}),"#655"),")"),Object(a.b)("p",null,"As typescript support is embedded in ",Object(a.b)("inlineCode",{parentName:"p"},"swc")," by default, ",Object(a.b)("inlineCode",{parentName:"p"},"swc")," handles it out of the box."),Object(a.b)("p",null,"You don't need any configuration to use typescript. Also note that It also detects ",Object(a.b)("inlineCode",{parentName:"p"},"tsx")," and automatically enables ",Object(a.b)("inlineCode",{parentName:"p"},"tsx")," for the files whose name ends with ",Object(a.b)("inlineCode",{parentName:"p"},".tsx"),"."),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("h3",{id:"typescript-const-assertion-656"},"TypeScript const assertion (",Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/656"}),"#656"),")"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'export const x = { text: "hello" } as const;\n')),Object(a.b)("p",null,"is transcompiled as"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'export const x = { text: "hello" };\n')),Object(a.b)("h3",{id:"cli-bugfixes-658"},"cli bugfixes (",Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/658"}),"#658"),")"),Object(a.b)("p",null,"Exclude fields in ",Object(a.b)("inlineCode",{parentName:"p"},".swcrc")," now works correctly."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "test": ".*.tsx$",\n  "exclude": ".*.spec.tsx$",\n  "jsc": {\n    "target": "es2018",\n    "parser": {\n      "syntax": "typescript",\n      "tsx": true\n    }\n  }\n}\n')))}l.isMDXComponent=!0},335:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?c.a.createElement(m,i(i({ref:t},p),{},{components:n})):c.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);