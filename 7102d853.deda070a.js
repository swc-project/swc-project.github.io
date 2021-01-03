(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(313)),a={title:"Changelog: swc v1.2.38",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},s={permalink:"/blog/2020/11/08/swc-1.2.38",source:"@site/blog/2020-11-08-swc-1.2.38.md",description:"Bugfixes",date:"2020-11-08T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.38",readingTime:1.21,truncated:!1,prevItem:{title:"Changelog: swc v1.2.39",permalink:"/blog/2020/11/21/swc-1.2.39"},nextItem:{title:"Changelog: swc v1.2.37",permalink:"/blog/2020/10/29/swc-1.2.37"}},l=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Parenthesis with comments (#1203)",id:"parenthesis-with-comments-1203",children:[]},{value:"bundler: Stack overflow / circular imports (#1196, #1205)",id:"bundler-stack-overflow--circular-imports-1196-1205",children:[]},{value:"bundler: Handle swc helpers (#1199)",id:"bundler-handle-swc-helpers-1199",children:[]},{value:"Caching of import.meta (#1201)",id:"caching-of-importmeta-1201",children:[]},{value:"resolver: hoist class decls (#1200)",id:"resolver-hoist-class-decls-1200",children:[]}]}],i={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h3",{id:"parenthesis-with-comments-1203"},"Parenthesis with comments (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/1203"}),"#1203"),")"),Object(c.b)("p",null,"Previously ","[swc][]"," miscompiled"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'function isModuleWrapper(node: Expression) {\n  return (\n    // It\'s an anonymous function expression that wraps module\n    (node.type === "FunctionExpression" && !node.id) ||\n    node.type === "ArrowFunctionExpression" ||\n    isModuleId(node) ||\n    (node.type === "ArrayExpression" &&\n      node.elements.length > 1 &&\n      isModuleId(node.elements[0]))\n  );\n}\n')),Object(c.b)("p",null,"as"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'function isModuleWrapper(node) {\n  return; // It\'s an anonymous function expression that wraps module\n  (node.type === "FunctionExpression" && !node.id) ||\n    node.type === "ArrowFunctionExpression" ||\n    isModuleId(node) ||\n    (node.type === "ArrayExpression" &&\n      node.elements.length > 1 &&\n      isModuleId(node.elements[0]));\n}\n')),Object(c.b)("p",null,"This is now fixed fundamentally. The parenthesis remover pass now checks if a comment exists for inner node."),Object(c.b)("h3",{id:"bundler-stack-overflow--circular-imports-1196-1205"},"bundler: Stack overflow / circular imports (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1196"}),"#1196"),", ",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1205"}),"#1205"),")"),Object(c.b)("p",null,"Now dependencies of circular imports of exports are handled correctly and topo sort algorithm is now applied correctly.\nThe pr fixes number of bugs of ",Object(c.b)("inlineCode",{parentName:"p"},"deno bundle"),"."),Object(c.b)("h3",{id:"bundler-handle-swc-helpers-1199"},"bundler: Handle swc helpers (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1199"}),"#1199"),")"),Object(c.b)("p",null,"Now if you use bundler with ","[swc]",", the helpers of ","[swc][]"," will be efficiently emitted."),Object(c.b)("h3",{id:"caching-of-importmeta-1201"},"Caching of import.meta (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1201"}),"#1201"),")"),Object(c.b)("p",null,"Thanks to ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nayeemrmn"}),"@nayeemrmn"),", multiple usage of ",Object(c.b)("inlineCode",{parentName:"p"},"import.meta")," does not create multiple ",Object(c.b)("inlineCode",{parentName:"p"},"import.meta")," object."),Object(c.b)("h3",{id:"resolver-hoist-class-decls-1200"},"resolver: hoist class decls (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/1200"}),"#1200"),")"),Object(c.b)("p",null,"Although class declarations are not hoisted, it's a top-level item and should be handled before function bodies."),Object(c.b)("p",null,"I mean,"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"(() => {\n  function foo() {\n    return new Bar();\n  }\n  class Bar {}\n})();\n")),Object(c.b)("p",null,"should be treated as"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"(() => {\n  function foo__1() {\n    return new Bar__1();\n  }\n  class Bar__1 {}\n})();\n")))}p.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||c;return n?o.a.createElement(m,s(s({ref:t},i),{},{components:n})):o.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var i=2;i<c;i++)a[i]=n[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);