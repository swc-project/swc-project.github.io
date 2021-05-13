(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(340)),c={title:"Changelog: swc v1.2.36",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/10/06/swc-1.2.36",source:"@site/blog/2020-10-06-swc-1.2.36.md",description:"Bugfixes",date:"2020-10-06T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.36",readingTime:1.75,truncated:!1,prevItem:{title:"Changelog: swc v1.2.37",permalink:"/blog/2020/10/29/swc-1.2.37"},nextItem:{title:"Changelog: swc v1.2.35",permalink:"/blog/2020/10/04/swc-1.2.35"}},s=[{value:"Bugfixes",id:"bugfixes",children:[{value:"export * as ns (#1142)",id:"export--as-ns-1142",children:[]},{value:"conditional expression in await (#1133)",id:"conditional-expression-in-await-1133",children:[]},{value:"scope of optional chaining (#1136)",id:"scope-of-optional-chaining-1136",children:[]},{value:"computed keys in object literal (#1140)",id:"computed-keys-in-object-literal-1140",children:[]},{value:"bundler: deglob imports correctly (#1139)",id:"bundler-deglob-imports-correctly-1139",children:[]},{value:"bundler: aliased imports (#1138)",id:"bundler-aliased-imports-1138",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(o.b)("h3",{id:"export--as-ns-1142"},"export ","*"," as ns (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1142"},"#1142"),")"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," now handle ",Object(o.b)("inlineCode",{parentName:"p"},"export * as ns from 'foo';")," by default, if you are targeting < ",Object(o.b)("inlineCode",{parentName:"p"},"es2020"),"."),Object(o.b)("p",null,"Also, spack and swc_bundler now supports it directly."),Object(o.b)("h3",{id:"conditional-expression-in-await-1133"},"conditional expression in await (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1133"},"#1133"),")"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," errornously removed parenthesis of conditional expression in await expressions."),Object(o.b)("h3",{id:"scope-of-optional-chaining-1136"},"scope of optional chaining (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1136"},"#1136"),")"),Object(o.b)("p",null,"Previously, ",Object(o.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," miscompiled the code below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'const PATCHES = new Map();\n\nconst ident = "foo";\nconst patch = PATCHES.get(ident)?.();\n')),Object(o.b)("p",null,"This was compiled as"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'var _obj = PATCHES.get(ident),\n  ref;\nconst PATCHES = new Map();\nconst ident = "foo";\nconst patch = (ref = _obj) === null || ref === void 0 ? void 0 : ref.call(_obj);\n')),Object(o.b)("p",null,"Which results in a runtime error.\nThis is caused by sharing variable buffer.\nIt's fixed by using two variable buffers."),Object(o.b)("h3",{id:"computed-keys-in-object-literal-1140"},"computed keys in object literal (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1140"},"#1140"),")"),Object(o.b)("p",null,"The hygiene pass of ",Object(o.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," had a bug. The bug was that it does not visit ",Object(o.b)("inlineCode",{parentName:"p"},"key")," in ",Object(o.b)("inlineCode",{parentName:"p"},"{ [key]: value }"),"."),Object(o.b)("p",null,"This is fixed, and code like below works properly."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'const categories = [{ key: "apple" }, { key: "banana" }, { key: "strawberry" }];\n\nconst item = "some item";\n\nconst catNames = categories.reduce((a, item) => {\n  return { ...a, [item.key.toString()]: item };\n}, {});\n')),Object(o.b)("h3",{id:"bundler-deglob-imports-correctly-1139"},"bundler: deglob imports correctly (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1139"},"#1139"),")"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'import * as circular2 from "./circular2.ts";\n\nexport function f1(): void {\n  console.log("f1");\n}\n\ncircular2.f2();\n')),Object(o.b)("p",null,"Previously, the code above was bundled as"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'export function f1() {\n  console.log("f1");\n}\ncircular2.f2();\ncircular1.f1();\n')),Object(o.b)("p",null,"which is clearly wrong. It's now fixed."),Object(o.b)("h3",{id:"bundler-aliased-imports-1138"},"bundler: aliased imports (",Object(o.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1138"},"#1138"),")"),Object(o.b)("p",null,"This bug occurs if nested export is mixed with aliased import."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"a.ts"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'export const a = "a";\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"l.ts"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'export { a } from "./a.ts";\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"entry.ts"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},'import { a as defaultA } from "./l.ts";\n\nconst o: { a?: string } = {};\n\nconst { a = defaultA } = o;\n\nconsole.log(a);\n')),Object(o.b)("p",null,"This resulted in"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const o = {};\nconst { a = defaultA } = o;\nconsole.log(a);\n")),Object(o.b)("p",null,"which is wrong. It's now fixed and swc_bundler now supports quite complex imports."),Object(o.b)("hr",null))}p.isMDXComponent=!0},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);