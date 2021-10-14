"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7301],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(t),m=i,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5094:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>g});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={id:"usage-plugin",title:"Using custom plugins with swc",sidebar_label:"Plugin"},s=void 0,p={unversionedId:"usage-plugin",id:"usage-plugin",isDocsHomePage:!1,title:"Using custom plugins with swc",description:"Warning: Plugin apis are going to be deprecated in v2.",source:"@site/docs/usage-plugin.md",sourceDirName:".",slug:"/usage-plugin",permalink:"/docs/usage-plugin",version:"current",lastUpdatedBy:"Donny",lastUpdatedAt:1634182004,formattedLastUpdatedAt:"10/14/2021",frontMatter:{id:"usage-plugin",title:"Using custom plugins with swc",sidebar_label:"Plugin"},sidebar:"usage",previous:{title:"swc (core)",permalink:"/docs/usage-core"},next:{title:"@babel/core",permalink:"/docs/migrating-from-babel-core"}},c=[{value:"Helpers",id:"helpers",children:[{value:"Visitor",id:"visitor",children:[]},{value:"Using multiple plugins",id:"using-multiple-plugins",children:[]}]}],u={toc:c};function g(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Warning: Plugin apis are going to be deprecated in v2.\nWith v2, swc will provide a rust-based plugin api instead.")),(0,o.kt)("h2",{id:"helpers"},"Helpers"),(0,o.kt)("p",null,"There are some helpers to help writing a transform."),(0,o.kt)("h3",{id:"visitor"},"Visitor"),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/swc-project/plugin-strip-console"},"https://github.com/swc-project/plugin-strip-console")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { CallExpression, Expression } from "@swc/core";\nimport Visitor from "@swc/core/Visitor";\n\nclass ConsoleStripper extends Visitor {\n  visitCallExpression(e: CallExpression): Expression {\n    if (e.callee.type !== "MemberExpression") {\n      return e;\n    }\n\n    if (\n      e.callee.object.type === "Identifier" &&\n      e.callee.object.value === "console"\n    ) {\n      if (e.callee.property.type === "Identifier") {\n        return {\n          type: "UnaryExpression",\n          span: e.span,\n          operator: "void",\n          argument: {\n            type: "NumericLiteral",\n            span: e.span,\n            value: 0,\n          },\n        };\n      }\n    }\n\n    return e;\n  }\n}\n\nconst out = transformSync(\n  `\nif (foo) {\n    console.log("Foo")\n} else {\n    console.log("Bar")\n}`,\n  {\n    plugin: (m) => new ConsoleStripper().visitProgram(m),\n  }\n);\n\nout.code ===\n  `if (foo) {\n    void 0;\n} else {\n    void 0;\n}`;\n')),(0,o.kt)("p",null,"You can turn on optimizer with ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuring-swc#jsctransformoptimizer"},(0,o.kt)("inlineCode",{parentName:"a"},"jsc.transform.optimizer"))," to remove ",(0,o.kt)("inlineCode",{parentName:"p"},"void 0"),"."),(0,o.kt)("h3",{id:"using-multiple-plugins"},"Using multiple plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { transformSync, plugins } from "@swc/core";\n\nconst out = transformSync(src, {\n  plugin: plugins(pluginA, pluginB),\n});\n')))}g.isMDXComponent=!0}}]);