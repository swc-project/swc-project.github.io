(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{207:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),c=r(7),a=(r(0),r(340)),o={title:"Changelog: swc v1.2.18",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/08/11/swc-1.2.18",source:"@site/blog/2020-08-11-swc-1.2.18.md",description:"Bugfixes",date:"2020-08-11T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.18",readingTime:.165,truncated:!1,prevItem:{title:"Changelog: swc v1.2.19",permalink:"/blog/2020/08/13/swc-1.2.19"},nextItem:{title:"Changelog: swc v1.2.16",permalink:"/blog/2020/08/10/swc-1.2.16"}},p=[{value:"Bugfixes",id:"bugfixes",children:[{value:"typescript class properties (#956)",id:"typescript-class-properties-956",children:[]}]}],l={toc:p};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("h3",{id:"typescript-class-properties-956"},"typescript class properties (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/956"},"#956"),")"),Object(a.b)("p",null,"This is a bugfix for a new feature introduced in ","[swc][]","@",Object(a.b)("inlineCode",{parentName:"p"},"v1.2.16"),"."),Object(a.b)("p",null,"An example of affected code is"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"class A {\n  declare1;\n  declare2!: string;\n}\n")))}u.isMDXComponent=!0},340:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,d=s["".concat(o,".").concat(b)]||s[b]||f[b]||a;return r?c.a.createElement(d,i(i({ref:t},l),{},{components:r})):c.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);