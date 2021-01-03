(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),c=n(7),o=(n(0),n(313)),a={title:"Changelog: swc v1.2.25",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/09/11/swc-1.2.25",source:"@site/blog/2020-09-11-swc-1.2.25.md",description:"Bugfixes",date:"2020-09-11T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.25",readingTime:1.54,truncated:!1,prevItem:{title:"ChangeLog: swc v1.2.27",permalink:"/blog/2020/09/13/swc-1.2.27"},nextItem:{title:"Hotfix: swc v1.2.26",permalink:"/blog/2020/09/11/swc-1.2.26"}},s=[{value:"Bugfixes",id:"bugfixes",children:[{value:"codegen of block comment (#1062)",id:"codegen-of-block-comment-1062",children:[]},{value:"meta properties (#1053)",id:"meta-properties-1053",children:[]},{value:"common js: order of exports (#1057)",id:"common-js-order-of-exports-1057",children:[]},{value:"calling conditional expressions (#1051)",id:"calling-conditional-expressions-1051",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(o.b)("h3",{id:"codegen-of-block-comment-1062"},"codegen of block comment (",Object(o.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1062"}),"#1062"),")"),Object(o.b)("p",null,"Previously, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://swc-project.github.io/"}),"swc")," injected a newline after block comments."),Object(o.b)("p",null,"This is wrong behavior, as it can break some codes. Especially, the code below is broken."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"return /*****/ function () {};\n")),Object(o.b)("p",null,"It was compiled as"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"return /*****/\nfunction () {};\n")),Object(o.b)("p",null,"which is equal to"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"return /*****/;\nfunction () {};\n")),Object(o.b)("p",null,"due to automatic semicolon insertion and it's broken as the return value is changed and ",Object(o.b)("inlineCode",{parentName:"p"},"function () {}")," is a function declaration, not a function expression."),Object(o.b)("h3",{id:"meta-properties-1053"},"meta properties (",Object(o.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1053"}),"#1053"),")"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://swc-project.github.io/"}),"swc")," now compiles meta properties correctly."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'class ArgumentValidationError extends Error {\n  constructor(public validationErrors: ValidationError[]) {\n    super("Argument Validation Error");\n\n    Object.setPrototypeOf(this, new.target.prototype);\n  }\n}\n')),Object(o.b)("h3",{id:"common-js-order-of-exports-1057"},"common js: order of exports (",Object(o.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1057"}),"#1057"),")"),Object(o.b)("p",null,"Previously, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://swc-project.github.io/"}),"swc")," does not follow the order declared in the soruce file while emitting imports and exports.\nAs a result, cyclic imports were broken.\nThis is now fixed, and"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'export * from "./http";\nexport { Scope } from "./interfaces";\n')),Object(o.b)("p",null,"is compiled as"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'"use strict";\nObject.defineProperty(exports, "__esModule", {\n  value: true,\n});\nvar _interfaces = require("./interfaces");\nvar _http = require("./http");\nObject.defineProperty(exports, "Scope", {\n  enumerable: true,\n  get: function () {\n    return _interfaces.Scope;\n  },\n});\nObject.keys(_http).forEach(function (key) {\n  if (key === "default" || key === "__esModule") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _http[key];\n    },\n  });\n});\n')),Object(o.b)("p",null,"instead of"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'"use strict";\nObject.defineProperty(exports, "__esModule", {\n  value: true,\n});\nObject.defineProperty(exports, "Scope", {\n  enumerable: true,\n  get: function () {\n    return _interfaces.Abstract;\n  },\n});\n\nvar _interfaces = require("./interfaces");\nvar _http = require("./http");\n\nObject.keys(_http).forEach(function (key) {\n  if (key === "default" || key === "__esModule") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function () {\n      return _http[key];\n    },\n  });\n});\n')),Object(o.b)("h3",{id:"calling-conditional-expressions-1051"},"calling conditional expressions (",Object(o.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1051"}),"#1051"),")"),Object(o.b)("p",null,"This affects code like"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"(a) => (set) => (elemE(a, set) ? removeE : insertE)(a)(set);\n")),Object(o.b)("hr",null))}p.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(a,".").concat(f)]||u[f]||b[f]||o;return n?c.a.createElement(m,i(i({ref:t},l),{},{components:n})):c.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);