(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(347)),s=["components"],c={title:"Changelog: swc v1.2.60",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2021/06/07/swc-1.2.60",source:"@site/blog/2021-06-07-swc-1.2.60.md",description:"Bugfixes",date:"2021-06-07T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.60",readingTime:1.535,truncated:!1,nextItem:{title:"Changelog: swc v1.2.59",permalink:"/blog/2021/05/30/swc-1.2.59"}},l=[{value:"Bugfixes",id:"bugfixes",children:[{value:"super in decorated methods (#846)",id:"super-in-decorated-methods-846",children:[]}]},{value:"dce: Fix for decorated classes (#1769)",id:"dce-fix-for-decorated-classes-1769",children:[{value:"bundler: Prevent hang (#1779)",id:"bundler-prevent-hang-1779",children:[]},{value:"fixer: Binary expressions in unary operands (#1781, #1789)",id:"fixer-binary-expressions-in-unary-operands-1781-1789",children:[]},{value:"Support for <code>export *</code> with same name (#1780)",id:"support-for-export--with-same-name-1780",children:[]},{value:"Fix for double imports (#1757)",id:"fix-for-double-imports-1757",children:[]},{value:"Fix for async generator (#1752)",id:"fix-for-async-generator-1752",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,s);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("h3",{id:"super-in-decorated-methods-846"},"super in decorated methods (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/846"},"#846"),")"),Object(a.b)("p",null,"Previously swc emitted wrong code if a method call from super is used."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"class SomeClass {\n  @dec\n  someMethod() {}\n}\n\nclass OtherClass extends SomeClass {\n  @dec\n  anotherMethod() {\n    super.someMethod();\n  }\n}\n")),Object(a.b)("p",null,"Codes like above now works properly."),Object(a.b)("h2",{id:"dce-fix-for-decorated-classes-1769"},"dce: Fix for decorated classes (",Object(a.b)("a",{parentName:"h2",href:"https://github.com/swc-project/swc/pull/1769"},"#1769"),")"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@decorator\nclass Class {}\n\nfunction decorator(cls: any) {\n  console.log(cls.name);\n}\n")),Object(a.b)("p",null,"Previously swc dropped a class if it's decorated and not instantiated. This is wrong because decorators can have side effects and now it's fixed."),Object(a.b)("h3",{id:"bundler-prevent-hang-1779"},"bundler: Prevent hang (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1779"},"#1779"),")"),Object(a.b)("p",null,"In certain complex import scenarios, the bundler of swc hanged while determinging cycle imports. This is now fixed and fairly complex imports are now handled by the bundler."),Object(a.b)("h3",{id:"fixer-binary-expressions-in-unary-operands-1781-1789"},"fixer: Binary expressions in unary operands (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1781"},"#1781"),", ",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1789"},"#1789"),")"),Object(a.b)("p",null,"There was a regression related to parenthesis."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const n = ~~(Math.PI * 10);\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const c = +(+1 / 4);\nconsole.log(c);\n")),Object(a.b)("p",null,"These was miscompiled but it's now fixed."),Object(a.b)("h3",{id:"support-for-export--with-same-name-1780"},"Support for ",Object(a.b)("inlineCode",{parentName:"h3"},"export *")," with same name (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1780"},"#1780"),")"),Object(a.b)("p",null,"swc now supports code like"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"// constant.ts\nexport enum Foo {}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'// File1.ts\nexport { Foo } from "./constant";\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'// file2.ts\nexport { Foo } from "./constant";\n')),Object(a.b)("h3",{id:"fix-for-double-imports-1757"},"Fix for double imports (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1757"},"#1757"),")"),Object(a.b)("p",null,"Previously swc throwed an error for double imports like"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import "testlibrary";\nimport { aFunc } from "testlibrary";\n\nconsole.log("aFunc: ", aFunc(1, 2));\n')),Object(a.b)("p",null,"It's now fixed."),Object(a.b)("h3",{id:"fix-for-async-generator-1752"},"Fix for async generator (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1752"},"#1752"),")"),Object(a.b)("p",null,"Previously swc miscompiled ",Object(a.b)("inlineCode",{parentName:"p"},"await")," in async generators and codes like"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"async function* generate(): AsyncGenerator {\n  const results = await Promise.all([\n    Promise.resolve(1),\n    Promise.resolve(2),\n    Promise.resolve(3),\n  ]);\n  for (const result of results) {\n    console.log(`yield ${result}`);\n    yield result;\n  }\n}\n\nasync function printValues() {\n  const iterator = generate();\n  for await (const value of iterator) {\n    console.log(`iterator value: ${value}`);\n  }\n}\n\nprintValues();\n")),Object(a.b)("p",null,"was broken. It's now fixed."))}u.isMDXComponent=!0},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);