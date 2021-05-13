(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(340)),c={title:"Changelog: swc v1.1.19",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/02/07/swc-1.1.19",source:"@site/blog/2020-02-07-swc-1.1.19.md",description:"New features",date:"2020-02-07T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.19",readingTime:.42,truncated:!1,prevItem:{title:"Changelog: swc v1.1.24",permalink:"/blog/2020/02/13/swc-1.1.24"},nextItem:{title:"Changelog: swc v1.1.20",permalink:"/blog/2020/02/07/swc-1.1.20"}},l=[{value:"New features",id:"new-features",children:[{value:"Optional chaining in es (#619)",id:"optional-chaining-in-es-619",children:[]},{value:"top-level await (#627)",id:"top-level-await-627",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"new-features"},"New features"),Object(a.b)("h3",{id:"optional-chaining-in-es-619"},"Optional chaining in es (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/619"},"#619"),")"),Object(a.b)("p",null,"Code like"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"a?.b?.c;\n")),Object(a.b)("p",null,"is now possible within ecmascript."),Object(a.b)("p",null,"As it's stage 3, you need to set an option to use it. See ",Object(a.b)("a",{parentName:"p",href:"https://swc-project.github.io/docs/configuring-swc.html#jscparser"},"the doc")," for the option."),Object(a.b)("h3",{id:"top-level-await-627"},"top-level await (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/627"},"#627"),")"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"swc")," can parse codes like"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"await foo();\n")),Object(a.b)("p",null,"As it's stage 3, you need to set an option to use it. See ",Object(a.b)("a",{parentName:"p",href:"https://swc-project.github.io/docs/configuring-swc.html#jscparser"},"the doc")," for the option. Also, note that you need to target es2017 or higher to use this feature."))}s.isMDXComponent=!0},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,d=u["".concat(c,".").concat(f)]||u[f]||b[f]||a;return n?o.a.createElement(d,i(i({ref:t},p),{},{components:n})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);