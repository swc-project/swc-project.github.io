(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(313)),c={title:"Changelog: swc v1.1.51",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/05/30/swc-1.1.51",source:"@site/blog/2020-05-30-swc-1.1.51.md",description:"Integration tests",date:"2020-05-30T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.51",readingTime:.81,truncated:!1,prevItem:{title:"Changelog: swc v1.1.52",permalink:"/blog/2020/06/02/swc-1.1.52"},nextItem:{title:"Changelog: swc v1.1.49",permalink:"/blog/2020/05/28/swc-1.1.49"}},s=[{value:"Integration tests",id:"integration-tests",children:[]},{value:"Bugfixes",id:"bugfixes",children:[{value:"new expression",id:"new-expression",children:[]},{value:"Keywords in method name (#801)",id:"keywords-in-method-name-801",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"integration-tests"},"Integration tests"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"swc")," now compiles and run the test suite of three.js and redux as a part of ci process. I tried to add more stuffs, but the build system of other projects were too complex to make it use swc."),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("h3",{id:"new-expression"},"new expression"),Object(a.b)("p",null,"As part of integration test, I found that swc miscompiles"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"new (a ? b : c)();\n")),Object(a.b)("p",null,"into"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"new a() ? b : c();\n")),Object(a.b)("p",null,"This is fixed by the pr which introduced integration tests."),Object(a.b)("h3",{id:"keywords-in-method-name-801"},"Keywords in method name (",Object(a.b)("a",Object(r.a)({parentName:"h3"},{href:"https://github.com/swc-project/swc/issues/801"}),"#801"),")"),Object(a.b)("p",null,"Previously, ",Object(a.b)("inlineCode",{parentName:"p"},"swc")," compiles"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export class Foo {\n  delete(object: string, key: string) {\n    delete object[key];\n  }\n}\n")),Object(a.b)("p",null,"as"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var Foo = function() {\n    'use strict';\n    function Foo() {\n        _classCallCheck(this, Foo);\n    }\n    _createClass(Foo, [\n        {\n            key: 'delete',\n            value: function delete(object, key) {\n                delete object[key];\n            }\n        }\n    ]);\n    return Foo;\n}();\nexports.Foo = Foo;\n")),Object(a.b)("p",null,", which is wrong as function name cannot be ",Object(a.b)("inlineCode",{parentName:"p"},"delete"),". ",Object(a.b)("inlineCode",{parentName:"p"},"swc")," now compiles it as ",Object(a.b)("inlineCode",{parentName:"p"},"function _delete"),"."))}p.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);