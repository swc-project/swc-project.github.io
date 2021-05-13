(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{248:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),c=(t(0),t(340)),i={title:"Changelog: swc v1.1.15",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},a={permalink:"/blog/2020/01/24/swc-1.1.15",source:"@site/blog/2020-01-24-swc-1.1.15.md",description:"Bugfixes",date:"2020-01-24T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.15",readingTime:.94,truncated:!1,prevItem:{title:"Changelog: swc v1.1.16",permalink:"/blog/2020/01/26/swc-1.1.16"},nextItem:{title:"Changelog: swc v1.1.14",permalink:"/blog/2020/01/23/swc-1.1.14"}},l=[{value:"Bugfixes",id:"bugfixes",children:[{value:"block scoping (#604)",id:"block-scoping-604",children:[]},{value:"hygiene (#604)",id:"hygiene-604",children:[]}]}],u={toc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h3",{id:"block-scoping-604"},"block scoping (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/604"},"#604"),")"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"swc")," had a serious bug bug."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"swc")," compiled"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"let functions = [];\nfor (let i = 0; i < 10; i++) {\n  functions.push(function() {\n    console.log(i);\n  });\n}\nfunctions[0]();\nfunctions[7]();\n")),Object(c.b)("p",null,"as"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"var functions = [];\nfor (var i = 0; i < 10; i++) {\n  functions.push(function() {\n    console.log(i);\n  });\n}\nfunctions[0]();\nfunctions[7]();\n")),Object(c.b)("p",null,"which is wrong. By tracking idetifier usages in nested function, ",Object(c.b)("inlineCode",{parentName:"p"},"swc")," now emits correct output."),Object(c.b)("p",null,"New output is very simillar to the one of ",Object(c.b)("inlineCode",{parentName:"p"},"babel"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"var _loop = function(i) {\n  functions.push(function() {\n    console.log(i);\n  });\n};\nvar functions = [];\nfor (var i = 0; i < 10; i++) _loop(i);\nfunctions[0]();\nfunctions[7]();\n")),Object(c.b)("h3",{id:"hygiene-604"},"hygiene (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/604"},"#604"),")"),Object(c.b)("p",null,"Use-use conflict detection introduced in ",Object(c.b)("inlineCode",{parentName:"p"},"v1.1.14")," had a serious bug. Some identifiers like ",Object(c.b)("inlineCode",{parentName:"p"},"Object")," are inherently used multiple time. It resulted in an use-use conflict and there was a bug.\nBy making an use-bind conflict for global objects, ",Object(c.b)("inlineCode",{parentName:"p"},"swc")," can handle a code like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"function foo(Object) {\n  Object.foo();\n}\n")),Object(c.b)("p",null,"It will be compiled as"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"function foo(Object1) {\n  Object1.foo();\n}\n")),Object(c.b)("p",null,"to make other usages of native identifier safe."))}s.isMDXComponent=!0},340:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(t),f=r,g=b["".concat(i,".").concat(f)]||b[f]||p[f]||c;return t?o.a.createElement(g,a(a({ref:n},u),{},{components:t})):o.a.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<c;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);