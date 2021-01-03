(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{247:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(313)),o={title:"Changelog: swc v1.1.8",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2019/12/24/swc-1.1.8",source:"@site/blog/2019-12-24-swc-1.1.8.md",description:"Optional Chaining (525)",date:"2019-12-24T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.8",readingTime:.93,truncated:!1,prevItem:{title:"Changelog: swc v1.1.9",permalink:"/blog/2019/12/25/swc-1.1.9"},nextItem:{title:"Changelog: swc v1.1.7",permalink:"/blog/2019/12/21/swc-1.1.7"}},l=[{value:"Optional Chaining (#525)",id:"optional-chaining-525",children:[]},{value:"Nullish coalescing (#526)",id:"nullish-coalescing-526",children:[]},{value:"BigInt literals (#520)",id:"bigint-literals-520",children:[]},{value:"Numeric separators (#521)",id:"numeric-separators-521",children:[]},{value:"Comments improvements (#528)",id:"comments-improvements-528",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"optional-chaining-525"},"Optional Chaining (",Object(c.b)("a",Object(a.a)({parentName:"h2"},{href:"https://github.com/swc-project/swc/issues/525"}),"#525"),")"),Object(c.b)("p",null,"As this is stage 4, it's automatically enabled."),Object(c.b)("p",null,"You can write code like"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"a?.b?.c;\n")),Object(c.b)("p",null,"in ecmascript too. Previously it was possible only in typescript."),Object(c.b)("h2",{id:"nullish-coalescing-526"},"Nullish coalescing (",Object(c.b)("a",Object(a.a)({parentName:"h2"},{href:"https://github.com/swc-project/swc/issues/526"}),"#526"),")"),Object(c.b)("p",null,"As this is stage 3, you need to set ",Object(c.b)("inlineCode",{parentName:"p"},"jsc.parser.nullishCoalescing")," to true to use it."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"swc")," can now handle ",Object(c.b)("inlineCode",{parentName:"p"},"??")," operator."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const someValue = myOtherValue ?? "default value";\n')),Object(c.b)("p",null,"is compield as"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const someValue =\n  myOtherValue !== null && myOtherValue !== void 0\n    ? myOtherValue\n    : "default value";\n')),Object(c.b)("h2",{id:"bigint-literals-520"},"BigInt literals (",Object(c.b)("a",Object(a.a)({parentName:"h2"},{href:"https://github.com/swc-project/swc/issues/520"}),"#520"),")"),Object(c.b)("p",null,"As this is stage 4, it's automatically enabled."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"4n + 10n;\n")),Object(c.b)("p",null,"This is also usable from typescript without any additional configuration."),Object(c.b)("h2",{id:"numeric-separators-521"},"Numeric separators (",Object(c.b)("a",Object(a.a)({parentName:"h2"},{href:"https://github.com/swc-project/swc/issues/521"}),"#521"),")"),Object(c.b)("p",null,"As this is stage 3, you need to set ",Object(c.b)("inlineCode",{parentName:"p"},"jsc.parser.numericSeparator")," to true to use it."),Object(c.b)("p",null,"Long numeric literals can be written as"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"10_200;\n0b10101_0001;\n0xa0_b0_c0;\n")),Object(c.b)("h2",{id:"comments-improvements-528"},"Comments improvements (",Object(c.b)("a",Object(a.a)({parentName:"h2"},{href:"https://github.com/swc-project/swc/issues/528"}),"#528"),")"),Object(c.b)("p",null,"Comments on paren expressions are moved to inner expresssion correctly."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bar\n[\n  // foo\n  a,\n\n  //bar\n  (\n    //baz\n    b\n  )\n];\n")),Object(c.b)("p",null,"is compiled as"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// bar\n[\n  // foo\n  a,\n\n  //bar\n  //baz\n  b\n];\n")))}b.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,O=p["".concat(o,".").concat(m)]||p[m]||u[m]||c;return n?r.a.createElement(O,i(i({ref:t},s),{},{components:n})):r.a.createElement(O,i({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);