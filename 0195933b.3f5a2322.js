(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{340:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||s;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<s;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),s=(r(0),r(340)),o={title:"Changelog: swc v1.2.54",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},c={permalink:"/blog/2021/04/20/swc-1.2.54",source:"@site/blog/2021-04-20-swc-1.2.54.md",description:"Bugfixes",date:"2021-04-20T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.54",readingTime:2.63,truncated:!1,prevItem:{title:"Changelog: swc v1.2.55",permalink:"/blog/2021/05/07/swc-1.2.55"},nextItem:{title:"Changelog: swc v1.2.53",permalink:"/blog/2021/04/17/swc-1.2.53"}},i=[{value:"Bugfixes",id:"bugfixes",children:[{value:"typescript: async override (#1558)",id:"typescript-async-override-1558",children:[]},{value:"dce bug (#1533)",id:"dce-bug-1533",children:[]},{value:"SIGILL (#1583)",id:"sigill-1583",children:[]},{value:"Logical nullish assigments (#1570)",id:"logical-nullish-assigments-1570",children:[]},{value:"Order of statements regarding imports (#1457)",id:"order-of-statements-regarding-imports-1457",children:[]},{value:"Syntax context of super classes (#1586)",id:"syntax-context-of-super-classes-1586",children:[]},{value:"Statement order of default imports. (#1568)",id:"statement-order-of-default-imports-1568",children:[]},{value:"Mixed import of default (#1525)",id:"mixed-import-of-default-1525",children:[]},{value:"SourceMaps (#1581)",id:"sourcemaps-1581",children:[]},{value:"Parameter property decorators (#1456)",id:"parameter-property-decorators-1456",children:[]},{value:"Fix for <code>arguments</code> (#1585)",id:"fix-for-arguments-1585",children:[]},{value:"Fix for decorators (#1362)",id:"fix-for-decorators-1362",children:[]}]}],p={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(s.b)("h3",{id:"typescript-async-override-1558"},"typescript: async override (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1558"},"#1558"),")"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," now supports ",Object(s.b)("inlineCode",{parentName:"p"},"async override")," in addition to ",Object(s.b)("inlineCode",{parentName:"p"},"override async"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"class Base {\n    method1() {}\n    method2() {}\n}\n\nclass Test extends Base {\n    public override async method1() {\n        return Promise.resolve(1);\n    }\n\n    public async override method2() {\n        return Promise.resolve(1);\n    }\n}\n")),Object(s.b)("h3",{id:"dce-bug-1533"},"dce bug (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1533"},"#1533"),")"),Object(s.b)("p",null,"Previously ",Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," had a bug that causes a usage of a variable in the discriminant of a switch statement not treated as a usage.\nIt's now fixed and code like below works even if the optimizer is enabled."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"var this_will_disappear; // <-- this variable declaration disappears\nfunction a(x) {\n  switch (this_will_disappear) {\n    case x:\n      return;\n  }\n}\nfunction b() {\n  c();\n}\nfunction c() {\n  b();\n  d();\n}\nfunction d() {\n  a();\n}\n")),Object(s.b)("h3",{id:"sigill-1583"},"SIGILL (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1583"},"#1583"),")"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," used ",Object(s.b)("inlineCode",{parentName:"p"},"aes")," feature of cpus as an optimization, but it caused ",Object(s.b)("inlineCode",{parentName:"p"},"SIGILL")," on a user's pc.\nSo I disabled ",Object(s.b)("inlineCode",{parentName:"p"},"aes")," feature."),Object(s.b)("h3",{id:"logical-nullish-assigments-1570"},"Logical nullish assigments (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1570"},"#1570"),")"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"const a: { [a: string]: string } = {};\na.b ??= \"1\";\nconsole.log(a); // expect: { b: '1' }\n")),Object(s.b)("p",null,"The code above was miscompieled by ",Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc"),", but it's now fixed."),Object(s.b)("h3",{id:"order-of-statements-regarding-imports-1457"},"Order of statements regarding imports (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1457"},"#1457"),")"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," now preserve order of statements even if there are some imports.\nThis is to fix code like"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'import {\n  setGlobalOptions,\n  plugin,\n  buildSchema,\n  addModelToTypegoose,\n  deleteModel,\n} from "@typegoose/typegoose";\nimport * as typegoose from "@typegoose/typegoose";\n// typegoose.mongoose.set(\'debug\', true);\nsetGlobalOptions({\n  options: {\n    allowMixed: typegoose.Severity.ALLOW,\n  },\n  schemaOptions: {\n    timestamps: {\n      createdAt: "created_at",\n      updatedAt: "updated_at",\n    },\n  },\n});\nimport { schemas } from "./schemas";\n')),Object(s.b)("h3",{id:"syntax-context-of-super-classes-1586"},"Syntax context of super classes (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1586"},"#1586"),")"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," had a bug which makes"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},"class Foo {}\nclass Test extends Foo {\n  foo() {\n    console.log(Foo);\n  }\n}\nFoo = 3;\nnew Foo().foo();\n")),Object(s.b)("p",null,"to emit ",Object(s.b)("inlineCode",{parentName:"p"},"Foo")," instead of 3."),Object(s.b)("p",null,"It's fixed by ",Object(s.b)("a",{parentName:"p",href:"https://github.com/devongovett"},"@devongovett"),"."),Object(s.b)("h3",{id:"statement-order-of-default-imports-1568"},"Statement order of default imports. (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1568"},"#1568"),")"),Object(s.b)("p",null,"To workaroudn ",Object(s.b)("a",{parentName:"p",href:"https://github.com/webpack/webpack/issues/7767"},"a bug of webpack"),", I modified order of statements generated from ",Object(s.b)("inlineCode",{parentName:"p"},"export default function"),"s."),Object(s.b)("p",null,"Thankfully, ",Object(s.b)("a",{parentName:"p",href:"https://github.com/josteph"},"@josteph")," explained the problem and suggested the way to fix."),Object(s.b)("h3",{id:"mixed-import-of-default-1525"},"Mixed import of default (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1525"},"#1525"),")"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts"},'import { Component, default as React } from "react";\n\nclass X extends Component {}\n\nReact.render(document.getElementById("root"), <X></X>);\n')),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," previously miscompied this, because it wasn't careful enough about ",Object(s.b)("inlineCode",{parentName:"p"},"default as Foo"),"-style imports.\nIt's fixed and ",Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," now emits"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},'var _react = _interopRequireWildcard(require("react"));\n\nclass X extends _react.Component {}\n_react.default.render(\n  document.getElementById("root"),\n  /*#__PURE__*/ _react.default.createElement(X, null)\n);\n')),Object(s.b)("p",null,"which is correct."),Object(s.b)("h3",{id:"sourcemaps-1581"},"SourceMaps (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1581"},"#1581"),")"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," had a bug related to inline source maps and as a result it generated empty sourcemap.\nIt's fixed."),Object(s.b)("h3",{id:"parameter-property-decorators-1456"},"Parameter property decorators (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1456"},"#1456"),")"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," had a bug in logic for determining if it should work.\nWhile checking existance of decortor, ",Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," didn't check decorators of typescript parameter properties."),Object(s.b)("p",null,"As a result, decorator didn't work if ",Object(s.b)("strong",{parentName:"p"},"all")," constructor parameters are parameter properties.\nIt's now fixed and decorators are properly applied."),Object(s.b)("h3",{id:"fix-for-arguments-1585"},"Fix for ",Object(s.b)("inlineCode",{parentName:"h3"},"arguments")," (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1585"},"#1585"),")"),Object(s.b)("p",null,"There was a bug of ",Object(s.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," which may break some codes using arguments in arrow functions."),Object(s.b)("p",null,"It could break codes like"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"function test() {\n  return () => arguments[0];\n}\n")),Object(s.b)("p",null,"Fixed by ",Object(s.b)("a",{parentName:"p",href:"https://github.com/devongovett"},"@devongovett"),"."),Object(s.b)("h3",{id:"fix-for-decorators-1362"},"Fix for decorators (",Object(s.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1362"},"#1362"),")"),Object(s.b)("p",null,"Fixed as a part of decorator fixes."))}l.isMDXComponent=!0}}]);