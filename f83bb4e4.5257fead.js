(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{301:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(313)),i={title:"Introducing swc 1.0",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},l={permalink:"/blog/2019/02/08/Introducing-swc-1.0",source:"@site/blog/2019-02-08-Introducing-swc-1.0.md",description:"Introduction",date:"2019-02-08T00:00:00.000Z",tags:[],title:"Introducing swc 1.0",readingTime:2.16,truncated:!1,prevItem:{title:"Announcing swc v1.1.0",permalink:"/blog/2019/11/30/announcing-swc-1.1.0"}},b=[{value:"Introduction",id:"introduction",children:[{value:"What is swc?",id:"what-is-swc",children:[]},{value:"What can swc do?",id:"what-can-swc-do",children:[]},{value:"How fast is swc?",id:"how-fast-is-swc",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"What is included in swc 1.0.0?",id:"what-is-included-in-swc-100",children:[{value:"ECMAScript 2019 support",id:"ecmascript-2019-support",children:[]},{value:"React (with jsx)",id:"react-with-jsx",children:[]},{value:"Typescript support",id:"typescript-support",children:[]},{value:"Various transforms",id:"various-transforms",children:[]}]},{value:"Migrating from babel",id:"migrating-from-babel",children:[{value:"@babel/core",id:"babelcore",children:[]},{value:"@babel/cli",id:"babelcli",children:[]}]}],o={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("h3",{id:"what-is-swc"},"What is swc?"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/swc-project/swc"}),"swc"),"(speedy web compiler) is a super-fast javascript to javascript compiler."),Object(c.b)("h3",{id:"what-can-swc-do"},"What can swc do?"),Object(c.b)("p",null,"It can transpile typescript / jsx / ecmascript 2019 to browser-compatible javascript."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"input.js"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"class Foo {\n  set foo(v) {}\n}\nclass Bar extends Foo {\n  get bar1() {}\n  async bar2() {}\n}\n")),Object(c.b)("h3",{id:"how-fast-is-swc"},"How fast is swc?"),Object(c.b)("p",null,"It's 16x - 20x faster than babel even on single-core synchronous benchmark. Note that actual performance gap is larger because swc works on worker thread while babel works on event loop thread."),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)("p",null,"You can install ",Object(c.b)("inlineCode",{parentName:"p"},"swc")," with"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev @swc/core\n")),Object(c.b)("p",null,"or"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev @swc/core\n")),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs"}),"installation guide")," for more details."),Object(c.b)("h2",{id:"what-is-included-in-swc-100"},"What is included in swc 1.0.0?"),Object(c.b)("p",null,"Swc implements almost all babel plugins. As of 1.0.0, swc can understand various dialects of ecmascript and compiles them into es5."),Object(c.b)("h3",{id:"ecmascript-2019-support"},"ECMAScript 2019 support"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript"\n    }\n  }\n}\n')),Object(c.b)("h3",{id:"react-with-jsx"},"React (with jsx)"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript",\n      "jsx": true\n    }\n  }\n}\n')),Object(c.b)("h3",{id:"typescript-support"},"Typescript support"),Object(c.b)("p",null,"Swc can also compile typescript / tsx to ecmascript. Note that it does not type-check at the time of writing. Type checking is tracked at ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/swc-project/swc/issues/126"}),"#126"),"."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false\n    }\n  }\n}\n')),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/configuring-swc"}),"docs")," for more details."),Object(c.b)("h3",{id:"various-transforms"},"Various transforms"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"es3"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"member-expression-literals"),Object(c.b)("li",{parentName:"ul"},"property-literals"),Object(c.b)("li",{parentName:"ul"},"reserved-words"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"es2015"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"arrow-functions"),Object(c.b)("li",{parentName:"ul"},"block-scoped-functions"),Object(c.b)("li",{parentName:"ul"},"block-scoping"),Object(c.b)("li",{parentName:"ul"},"classes"),Object(c.b)("li",{parentName:"ul"},"computed-properties"),Object(c.b)("li",{parentName:"ul"},"destructuring"),Object(c.b)("li",{parentName:"ul"},"duplicate-keys"),Object(c.b)("li",{parentName:"ul"},"for-of"),Object(c.b)("li",{parentName:"ul"},"function-name"),Object(c.b)("li",{parentName:"ul"},"instanceof"),Object(c.b)("li",{parentName:"ul"},"literals"),Object(c.b)("li",{parentName:"ul"},"new-target"),Object(c.b)("li",{parentName:"ul"},"parameters"),Object(c.b)("li",{parentName:"ul"},"shorthand-properties"),Object(c.b)("li",{parentName:"ul"},"spread"),Object(c.b)("li",{parentName:"ul"},"sticky regex (",Object(c.b)("inlineCode",{parentName:"li"},"y")," flag)"),Object(c.b)("li",{parentName:"ul"},"template-literals"),Object(c.b)("li",{parentName:"ul"},"typeof-symbol"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"es2016"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"exponentiation-operator"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"es2017"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"async-to-generator"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"es2018"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"object-rest-spread"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"react"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"jsx")))),Object(c.b)("h2",{id:"migrating-from-babel"},"Migrating from babel"),Object(c.b)("h3",{id:"babelcore"},"@babel/core"),Object(c.b)("p",null,"Run ",Object(c.b)("inlineCode",{parentName:"p"},"npm i --save-dev @swc/core")," or ",Object(c.b)("inlineCode",{parentName:"p"},"yarn add --dev @swc/core"),"."),Object(c.b)("p",null,"Swc enables all passes by default. So if you are using only standartd ecmascript, you can just delete ",Object(c.b)("inlineCode",{parentName:"p"},".babelrc")," and change ",Object(c.b)("inlineCode",{parentName:"p"},"babel.transform()")," to ",Object(c.b)("inlineCode",{parentName:"p"},"swc.transform()"),"."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/usage-core"}),"usage docs")," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/migrating-from-babel-core"}),"migration docs")," for more details.\nAlso note that swc does not support custom plugin yet."),Object(c.b)("h3",{id:"babelcli"},"@babel/cli"),Object(c.b)("p",null,"Run ",Object(c.b)("inlineCode",{parentName:"p"},"npm i --save-dev @swc/core @swc/cli")," or ",Object(c.b)("inlineCode",{parentName:"p"},"yarn add --dev @swc/core @swc/cli")," to install. CLI apis of ",Object(c.b)("inlineCode",{parentName:"p"},"@swc/cli")," is almost equivalent to it of ",Object(c.b)("inlineCode",{parentName:"p"},"@babel/cli"),". So if you are using standartd ecmascript, you can just replace ",Object(c.b)("inlineCode",{parentName:"p"},"npx babel")," to ",Object(c.b)("inlineCode",{parentName:"p"},"npx swc"),". If it results in an error, please ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/swc-project/swc/issues"}),"report an error"),"."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/usage-swc-cli"}),"usage docs")," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/migrating-from-babel-cli"}),"migration docs")," for more details. Also note that swc does not support custom plugin yet."))}s.isMDXComponent=!0},313:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||c;return a?r.a.createElement(d,l(l({ref:t},o),{},{components:a})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<c;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);