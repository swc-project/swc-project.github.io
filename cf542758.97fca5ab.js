(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{283:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(341)),c={id:"usage-swc-loader",title:"Using swc with webpack",sidebar_label:"swc-loader (Webpack)"},i={unversionedId:"usage-swc-loader",id:"usage-swc-loader",isDocsHomePage:!1,title:"Using swc with webpack",description:"Installation",source:"@site/docs/usage-swc-loader.md",slug:"/usage-swc-loader",permalink:"/docs/usage-swc-loader",version:"current",lastUpdatedBy:"\uac15\ub3d9\uc724",lastUpdatedAt:1621568745,sidebar_label:"swc-loader (Webpack)",sidebar:"usage",previous:{title:"Using cli (spack)",permalink:"/docs/usage-spack-cli"},next:{title:"Using swc with jest",permalink:"/docs/usage-swc-jest"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={toc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm i --save-dev @swc/core swc-loader\n")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'module: {\n  rules: [\n    {\n      test: /\\.m?js$/,\n      exclude: /(node_modules|bower_components)/,\n      use: {\n        // `.swcrc` can be used to configure swc\n        loader: "swc-loader"\n      }\n    }\n  ];\n}\n')))}u.isMDXComponent=!0},341:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?a.a.createElement(b,i(i({ref:n},l),{},{components:t})):a.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);