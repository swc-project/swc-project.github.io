(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),c=(t(0),t(313)),o={title:"Changelog: swc v1.1.35",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/03/14/swc-1.1.35",source:"@site/blog/2020-03-14-swc-1.1.35.md",description:"Span regressions",date:"2020-03-14T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.35",readingTime:1.045,truncated:!1,prevItem:{title:"Call for help and roadmap",permalink:"/blog/2020/03/16/roadmap-and-call-for-help"},nextItem:{title:"Changelog: swc v1.1.34",permalink:"/blog/2020/03/10/swc-1.1.34"}},s=[{value:"Span regressions",id:"span-regressions",children:[{value:"Start of arrow in conditional expression (#712)",id:"start-of-arrow-in-conditional-expression-712",children:[]},{value:"Decorators on class (#711)",id:"decorators-on-class-711",children:[]},{value:"Tagged template literals (#714)",id:"tagged-template-literals-714",children:[]}]},{value:"Bugfixes",id:"bugfixes",children:[{value:"Ambient context (#715)",id:"ambient-context-715",children:[]},{value:"async in start of conditional expression (#717)",id:"async-in-start-of-conditional-expression-717",children:[]}]},{value:"New features",id:"new-features",children:[{value:"&quot;inline&quot; source maps",id:"inline-source-maps",children:[]}]}],l={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"span-regressions"},"Span regressions"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"swc@v.1.1.34")," made many changes to the parser, and it also introduced some regressions of span."),Object(c.b)("h3",{id:"start-of-arrow-in-conditional-expression-712"},"Start of arrow in conditional expression (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/712"}),"#712"),")"),Object(c.b)("p",null,"The span of the code like"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"referrer ? false : ([, specifier]): string => specifier;\n")),Object(c.b)("p",null,"is now fixed."),Object(c.b)("h3",{id:"decorators-on-class-711"},"Decorators on class (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/711"}),"#711"),")"),Object(c.b)("p",null,"Example code:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\n@decorator<string>()\nclass Test {}\n")),Object(c.b)("h3",{id:"tagged-template-literals-714"},"Tagged template literals (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/714"}),"#714"),")"),Object(c.b)("p",null,"Example code:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"f<T>``;\n")),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h3",{id:"ambient-context-715"},"Ambient context (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/pull/715"}),"#715"),")"),Object(c.b)("p",null,"Example code:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"declare namespace __event {\n  export class EventInit {\n    constructor({\n      bubbles,\n      cancelable,\n      composed\n    }?: {\n      bubbles?: boolean | undefined;\n      cancelable?: boolean | undefined;\n      composed?: boolean | undefined;\n    });\n  }\n}\n")),Object(c.b)("h3",{id:"async-in-start-of-conditional-expression-717"},"async in start of conditional expression (",Object(c.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/717"}),"#717"),")"),Object(c.b)("p",null,"Previously, ",Object(c.b)("inlineCode",{parentName:"p"},"swc")," had a bug which make ",Object(c.b)("inlineCode",{parentName:"p"},"swc")," reject codes like the below."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"function functionFlags(async: boolean) {\n  return async ? 1 : 0;\n}\n")),Object(c.b)("p",null,"This is fixed, and ",Object(c.b)("inlineCode",{parentName:"p"},"async")," can be the start of a conditional expression."),Object(c.b)("h2",{id:"new-features"},"New features"),Object(c.b)("h3",{id:"inline-source-maps"},'"inline" source maps'),Object(c.b)("p",null,"Previously, ",Object(c.b)("inlineCode",{parentName:"p"},"swc/cli")," handled this, and providing ",Object(c.b)("inlineCode",{parentName:"p"},"'inline'")," to ",Object(c.b)("inlineCode",{parentName:"p"},"swc/core")," had no effect.\nFrom now, ",Object(c.b)("inlineCode",{parentName:"p"},"swc/core")," handles it so code like"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'let output = swc.transformSync("let x = 3;", {\n  sourceMaps: "inline",\n\n  jsc: {\n    parser: {\n      syntax: "ecmascript"\n    },\n    transform: {}\n  }\n});\n\nconsole.log(output.code);\n')),Object(c.b)("p",null,"works as expected."))}p.isMDXComponent=!0},313:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return t?a.a.createElement(m,i(i({ref:n},l),{},{components:t})):a.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);