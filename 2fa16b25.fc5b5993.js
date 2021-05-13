(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(340)),i={title:"Changelog: swc v1.1.42",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},c={permalink:"/blog/2020/05/05/swc-1.1.42",source:"@site/blog/2020-05-05-swc-1.1.42.md",description:"Bugfixes",date:"2020-05-05T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.42",readingTime:.435,truncated:!1,prevItem:{title:"Changelog: swc v1.1.41",permalink:"/blog/2020/05/05/swc-1.1.41"},nextItem:{title:"Changelog: swc v1.1.40",permalink:"/blog/2020/05/03/swc-1.1.40"}},l=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Dead code elimination (#763)",id:"dead-code-elimination-763",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("h3",{id:"dead-code-elimination-763"},"Dead code elimination (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/763"},"#763"),")"),Object(a.b)("p",null,"Previously, dead code elimination pass of ",Object(a.b)("inlineCode",{parentName:"p"},"swc")," dropped some used imports. It was cause by iteration order."),Object(a.b)("p",null,"In the code below,"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'import { A, B } from "library";\nconst arr = [A, B];\n\nconsole.log(B);\narr.map((v) => console.log(v));\n')),Object(a.b)("p",null,"after ",Object(a.b)("inlineCode",{parentName:"p"},"console.log(B)")," and ",Object(a.b)("inlineCode",{parentName:"p"},"arr.map(...)")," are evaluated, the import statement is visited and incorrectly dropped ",Object(a.b)("inlineCode",{parentName:"p"},"A"),"."),Object(a.b)("p",null,"This is fixed by extracting import handling as a new phase. The new version of ",Object(a.b)("inlineCode",{parentName:"p"},"swc")," does not drop imports while every other things are evaluated."))}u.isMDXComponent=!0},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);