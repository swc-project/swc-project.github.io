(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(335)),i={id:"migrating-from-babel-cli",title:"Migrating from babel cli",sidebar_label:"@babel/cli"},c={unversionedId:"migrating-from-babel-cli",id:"migrating-from-babel-cli",isDocsHomePage:!1,title:"Migrating from babel cli",description:"Installation",source:"@site/docs/migrating-from-babel-cli.md",slug:"/migrating-from-babel-cli",permalink:"/docs/migrating-from-babel-cli",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620355559,sidebar_label:"@babel/cli",sidebar:"usage",previous:{title:"Migrating from @babel/core",permalink:"/docs/migrating-from-babel-core"},next:{title:"Comparison with babel",permalink:"/docs/comparison-babel"}},l=[{value:"Installation",id:"installation",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Run"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i --save-dev @swc/cli @swc/core\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev @swc/cli @swc/core\n")),Object(o.b)("p",null,"CLI apis of ",Object(o.b)("inlineCode",{parentName:"p"},"@swc/cli")," are intentionally almost same as it of ",Object(o.b)("inlineCode",{parentName:"p"},"@babel/cli"),". So you can just replace ",Object(o.b)("inlineCode",{parentName:"p"},"npx babel")," to ",Object(o.b)("inlineCode",{parentName:"p"},"npx swc"),". If it results in an error, please ","[report an error][issues]","."))}p.isMDXComponent=!0},335:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(f,c(c({ref:t},b),{},{components:n})):a.a.createElement(f,c({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);