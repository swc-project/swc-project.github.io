(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{279:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(329)),o={title:"Changelog: swc v1.2.51",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2021/03/28/swc-1.2.51",source:"@site/blog/2021-03-28-swc-1.2.51.md",description:"Bugfixes",date:"2021-03-28T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.51",readingTime:.96,truncated:!1,nextItem:{title:"Changelog: swc v1.2.50",permalink:"/blog/2021/03/03/swc-1.2.50"}},s=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Column position in source maps (#1470)",id:"column-position-in-source-maps-1470",children:[]},{value:"<code>keepClassName</code> (#1453)",id:"keepclassname-1453",children:[]},{value:"Codegen of arrow functions (#1452)",id:"codegen-of-arrow-functions-1452",children:[]},{value:"bundler: Stack overflow on windows (#1464)",id:"bundler-stack-overflow-on-windows-1464",children:[]},{value:"Assignments in await argument (#1475)",id:"assignments-in-await-argument-1475",children:[]},{value:"Parens in nullish coalescing (#1496)",id:"parens-in-nullish-coalescing-1496",children:[]},{value:"Jsx entities in jsx attribute values (#1501)",id:"jsx-entities-in-jsx-attribute-values-1501",children:[]}]}],l={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h3",{id:"column-position-in-source-maps-1470"},"Column position in source maps (",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1470"}),"#1470"),")"),Object(c.b)("p",null,"Thanks to ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/devongovett"}),"@devongovett"),", ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://swc.rs"}),"swc")," now emits correct source map regarding column offsets."),Object(c.b)("h3",{id:"keepclassname-1453"},Object(c.b)("inlineCode",{parentName:"h3"},"keepClassName")," (",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1453"}),"#1453"),")"),Object(c.b)("p",null,"The option ",Object(c.b)("inlineCode",{parentName:"p"},"keepClasName")," was introduced in ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://swc.rs"}),"swc")," v1.2.50. But there was a bug at configuration merging, and it didn't work.\nIt's now fixed."),Object(c.b)("h3",{id:"codegen-of-arrow-functions-1452"},"Codegen of arrow functions (",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1452"}),"#1452"),")"),Object(c.b)("p",null,"Arrow functions without parenthesis in arguments like ",Object(c.b)("inlineCode",{parentName:"p"},"async foo => 0;")," is now handled properly."),Object(c.b)("h3",{id:"bundler-stack-overflow-on-windows-1464"},"bundler: Stack overflow on windows (",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1464"}),"#1464"),")"),Object(c.b)("p",null,"This was reported via ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://deno.land"}),"deno"),", by ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/denoland/deno/issues/9752"}),"#9752"),".\nPreviously bunlding already-bundled file might cause stack overflow on windows, but it's now fixed."),Object(c.b)("h3",{id:"assignments-in-await-argument-1475"},"Assignments in await argument (",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1475"}),"#1475"),")"),Object(c.b)("p",null,"Previsouly, ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://swc.rs"}),"swc")," break the code like ",Object(c.b)("inlineCode",{parentName:"p"},"await (bar = Promise.resolve(2));")," by removing parens.\nThis is now fixed and it works properly."),Object(c.b)("h3",{id:"parens-in-nullish-coalescing-1496"},"Parens in nullish coalescing (",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1496"}),"#1496"),")"),Object(c.b)("p",null,"Previously ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://swc.rs"}),"swc")," miscompiled"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'console.log(("a" ?? "b") || "");\n')),Object(c.b)("p",null,"into"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'console.log("a" ?? ("b" || ""));\n')),Object(c.b)("p",null,"which is wrong. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://swc.rs"}),"swc")," now emits"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'console.log(("a" ?? "b") || "");\n')),Object(c.b)("h3",{id:"jsx-entities-in-jsx-attribute-values-1501"},"Jsx entities in jsx attribute values (",Object(c.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1501"}),"#1501"),")"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://swc.rs"}),"swc")," now compiles"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'<div id="abc&gt;" />\n')),Object(c.b)("p",null,"as"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'React.createElement("div", {\n  id: "abc>",\n});\n')),Object(c.b)("p",null,"regardless of target version."))}b.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);