(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(340)),c={title:"Changelog: swc v1.1.47",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},p={permalink:"/blog/2020/05/22/swc-1.1.47",source:"@site/blog/2020-05-22-swc-1.1.47.md",description:"Bugfixes",date:"2020-05-22T00:00:00.000Z",tags:[],title:"Changelog: swc v1.1.47",readingTime:.585,truncated:!1,prevItem:{title:"Changelog: swc v1.1.48",permalink:"/blog/2020/05/25/swc-1.1.48"},nextItem:{title:"Changelog: swc v1.1.46",permalink:"/blog/2020/05/21/swc-1.1.46"}},s=[{value:"Bugfixes",id:"bugfixes",children:[{value:"typescript imports (#791)",id:"typescript-imports-791",children:[]}]}],i={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(a.b)("h3",{id:"typescript-imports-791"},"typescript imports (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/791"},"#791"),")"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"swc")," had a bug related to type-only imports. Problematic codes include"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { IPerson } from "../types/types";\nexport interface IEmployee extends IPerson {}\nexport function createPerson(person: IPerson) {\n  const a = {} as IPerson;\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { IPerson } from "../types/types";\nexport class Employee implements IPerson {}\nexport function createPerson(person: IPerson) {\n  const a = {} as IPerson;\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { IPerson } from "../types/types";\nexport type MyPerson = IPerson;\nexport function createPerson(person: MyPerson) {\n  const a = {} as MyPerson;\n}\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'import { A, B } from "../types/types";\n\nexport class Child extends A implements B {}\n')),Object(a.b)("p",null,"These code works correctly with ",Object(a.b)("a",{parentName:"p",href:"mailto:swc@v1.1.47"},"swc@v1.1.47")))}l.isMDXComponent=!0},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(f,p(p({ref:t},i),{},{components:n})):o.a.createElement(f,p({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);