(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),c=(r(0),r(313)),o={title:"Changelog: swc v1.2.10",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},s={permalink:"/blog/2020/07/31/swc-1.2.10",source:"@site/blog/2020-07-31-swc-1.2.10.md",description:"Bugfixes",date:"2020-07-31T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.10",readingTime:2.245,truncated:!1,prevItem:{title:"swc v1.2.11: Fix for almost all typescript bugs",permalink:"/blog/2020/08/02/swc-1.2.11"},nextItem:{title:"Changelog: swc v1.2.9",permalink:"/blog/2020/07/26/swc-1.2.9"}},i=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Error recovery for parser (#896)",id:"error-recovery-for-parser-896",children:[]},{value:"codegen of private properties (#903)",id:"codegen-of-private-properties-903",children:[]},{value:"codegen of optional catch parameters (#904)",id:"codegen-of-optional-catch-parameters-904",children:[]},{value:"nested optional catch parameters (#904)",id:"nested-optional-catch-parameters-904",children:[]},{value:"readonly class properties (#915)",id:"readonly-class-properties-915",children:[]},{value:"codegen of template literals with escape (#916)",id:"codegen-of-template-literals-with-escape-916",children:[]}]},{value:"Improvements",id:"improvements",children:[{value:"Handling of quotes (#910)",id:"handling-of-quotes-910",children:[]},{value:"No duplicate comments (#856)",id:"no-duplicate-comments-856",children:[]}]}],p={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h3",{id:"error-recovery-for-parser-896"},"Error recovery for parser (",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/896"}),"#896"),")"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'export type * from "../typings";\n')),Object(c.b)("p",null,"The code above is invalid, but ",Object(c.b)("inlineCode",{parentName:"p"},"tsc")," accepts it and print an error message for it. I decided to follow the behavior of ",Object(c.b)("inlineCode",{parentName:"p"},"tsc")," and I modified the parser to accept it."),Object(c.b)("h3",{id:"codegen-of-private-properties-903"},"codegen of private properties (",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/903"}),"#903"),")"),Object(c.b)("p",null,"Because some runtimes support private properties, I implemented printing logic for private properties."),Object(c.b)("p",null,"An example use case is ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://deno.land/"}),"deno"),", which uses v8."),Object(c.b)("h3",{id:"codegen-of-optional-catch-parameters-904"},"codegen of optional catch parameters (",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/904"}),"#904"),")"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"try {\n  m.append(key, value);\n} catch {\n  // Pass\n}\n")),Object(c.b)("p",null,"This was problematic if you use only typescript stripper. Code generator for a catch clause emitted ",Object(c.b)("inlineCode",{parentName:"p"},"("),", ",Object(c.b)("inlineCode",{parentName:"p"},")")," regardless of existence of the parameter."),Object(c.b)("p",null,"Now you can use the optional catch binding syntax without the optional catch binding pass."),Object(c.b)("h3",{id:"nested-optional-catch-parameters-904"},"nested optional catch parameters (",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/904"}),"#904"),")"),Object(c.b)("p",null,"Previously, the code below was miscompled, because the transform didn't visit children."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"try {\n  // Write our response!\n  await writeResponse(this.w, r);\n} catch {\n  try {\n    // Eagerly close on error.\n    this.conn.close();\n  } catch {\n    // Pass\n  }\n  err = e;\n}\n")),Object(c.b)("p",null,"This is fixed by visiting children."),Object(c.b)("h3",{id:"readonly-class-properties-915"},"readonly class properties (",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/915"}),"#915"),")"),Object(c.b)("p",null,"Previously ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/swc-project/swc"}),"swc")," miscompiled readonly properties."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.\nimport { LogLevels, getLevelByName, getLevelName } from "./levels.ts";\nexport class Logger {\n  #level;\n  #handlers;\n  readonly #loggerName; // <---- offending line\n  constructor(loggerName, levelName, options = {}) {\n    this.#loggerName = loggerName;\n    this.#level = getLevelByName(levelName);\n    this.#handlers = options.handlers || [];\n  }\n}\n')),Object(c.b)("p",null,"Readonly is now properly handled."),Object(c.b)("h3",{id:"codegen-of-template-literals-with-escape-916"},"codegen of template literals with escape (",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/916"}),"#916"),")"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://deno.land/"}),"deno")," contains lots of template literals with escape sequences. By using it as a test suite, I and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/bartlomieju"}),"Bartek")," fixed lots of buf related to it."),Object(c.b)("h2",{id:"improvements"},"Improvements"),Object(c.b)("h3",{id:"handling-of-quotes-910"},"Handling of quotes (",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/910"}),"#910"),")"),Object(c.b)("p",null,"Previously, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/swc-project/swc"}),"swc")," ignored the original quote of a string literal. This was intentional, and the purpose is to make output smaller by reducing the number of backslashes. But it is too bad for rust users, so I changed ",Object(c.b)("inlineCode",{parentName:"p"},"swc_ecma_codegen")," to preserve quotes."),Object(c.b)("h3",{id:"no-duplicate-comments-856"},"No duplicate comments (",Object(c.b)("a",Object(n.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/856"}),"#856"),")"),Object(c.b)("p",null,"The bug is occured by two facts"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/swc-project/swc"}),"swc")," did not check for duplicate comments."),Object(c.b)("li",{parentName:"ul"},"TypeScript parser requires backtracking.")),Object(c.b)("p",null,"While backtracking, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/swc-project/swc"}),"swc")," simply added comments to the comment storage, and didn't care about duplicate comments. If backtracking is successful, there's no problem. But if backtracking fails, cursor of the lexer goes back without removing comments. This is fixed by tracking last position of comments. Now there's two cursor in the lexer - one for code, one for comments. The comments cursor does not go back, so even if backtracking is failed, it remains as-is and duplicated comments are simply ignored."))}l.isMDXComponent=!0},313:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return r?a.a.createElement(m,s(s({ref:t},p),{},{components:r})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);