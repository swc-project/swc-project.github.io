(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{164:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(329)),c={id:"usage-core",title:"swc core api",sidebar_label:"swc (core)"},i={unversionedId:"usage-core",id:"usage-core",isDocsHomePage:!1,title:"swc core api",description:"APIs",source:"@site/docs/usage-core.md",slug:"/usage-core",permalink:"/docs/usage-core",version:"current",lastUpdatedBy:"\uac15\ub3d9\uc724",lastUpdatedAt:1616904176,sidebar_label:"swc (core)",sidebar:"usage",previous:{title:"Using swc with jest",permalink:"/docs/usage-swc-jest"},next:{title:"Using custom plugins with swc",permalink:"/docs/usage-plugin"}},s=[{value:"APIs",id:"apis",children:[{value:"transform",id:"transform",children:[]},{value:"transformSync",id:"transformsync",children:[]},{value:"transformFile",id:"transformfile",children:[]},{value:"transformFileSync",id:"transformfilesync",children:[]}]},{value:"Options",id:"options",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"apis"},"APIs"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: If you are ",Object(a.b)("strong",{parentName:"em"},"not")," developing build tools, you can skip this.")),Object(a.b)("h3",{id:"transform"},"transform"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Package ",Object(a.b)("inlineCode",{parentName:"li"},"@swc/core")," provides appropriate ",Object(a.b)("inlineCode",{parentName:"li"},".d.ts")," file, so you may not need this document")),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"Promise<{ code: string, map?: string }>")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const swc = require("@swc/core");\n\nswc\n  .transform("source code", {\n    // Some options cannot be specified in .swcrc\n    filename: "input.js",\n    sourceMaps: true,\n    // Input files are treated as module by default.\n    isModule: false,\n\n    // All options below can be configured via .swcrc\n    jsc: {\n      parser: {\n        syntax: "ecmascript",\n      },\n      transform: {},\n    },\n  })\n  .then((output) => {\n    output.code; // transformed code\n    output.map; // source map (in string)\n  });\n')),Object(a.b)("h3",{id:"transformsync"},"transformSync"),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"{ code: string, map?: string }")),Object(a.b)("h3",{id:"transformfile"},"transformFile"),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"Promise<{ code: string, map?: string }>")),Object(a.b)("h3",{id:"transformfilesync"},"transformFileSync"),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"{ code: string, map?: string }")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("p",null,"TODO:"))}p.isMDXComponent=!0},329:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return t?o.a.createElement(m,i(i({ref:n},l),{},{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);