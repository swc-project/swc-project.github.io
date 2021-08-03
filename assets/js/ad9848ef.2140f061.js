"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7301],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=o,f=m["".concat(a,".").concat(g)]||m[g]||u[g]||i;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5094:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>a,metadata:()=>p,toc:()=>c,default:()=>m});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],l={id:"usage-plugin",title:"Using custom plugins with swc",sidebar_label:"Plugin"},a=void 0,p={unversionedId:"usage-plugin",id:"usage-plugin",isDocsHomePage:!1,title:"Using custom plugins with swc",description:"Helpers",source:"@site/docs/usage-plugin.md",sourceDirName:".",slug:"/usage-plugin",permalink:"/docs/usage-plugin",version:"current",lastUpdatedBy:"\uac15\ub3d9\uc724",lastUpdatedAt:1627974670,formattedLastUpdatedAt:"8/3/2021",frontMatter:{id:"usage-plugin",title:"Using custom plugins with swc",sidebar_label:"Plugin"},sidebar:"usage",previous:{title:"swc (core)",permalink:"/docs/usage-core"},next:{title:"@babel/core",permalink:"/docs/migrating-from-babel-core"}},c=[{value:"Helpers",id:"helpers",children:[{value:"Visitor",id:"visitor",children:[]},{value:"Using multiple plugins",id:"using-multiple-plugins",children:[]}]}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"helpers"},"Helpers"),(0,i.kt)("p",null,"There are some helpers to help writing a transform."),(0,i.kt)("h3",{id:"visitor"},"Visitor"),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/swc-project/plugin-strip-console"},"https://github.com/swc-project/plugin-strip-console")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { CallExpression, Expression } from "@swc/core";\nimport Visitor from "@swc/core/Visitor";\n\nclass ConsoleStripper extends Visitor {\n  visitCallExpression(e: CallExpression): Expression {\n    if (e.callee.type !== "MemberExpression") {\n      return e;\n    }\n\n    if (\n      e.callee.object.type === "Identifier" &&\n      e.callee.object.value === "console"\n    ) {\n      if (e.callee.property.type === "Identifier") {\n        return {\n          type: "UnaryExpression",\n          span: e.span,\n          operator: "void",\n          argument: {\n            type: "NumericLiteral",\n            span: e.span,\n            value: 0\n          }\n        };\n      }\n    }\n\n    return e;\n  }\n}\n\nconst out = transformSync(\n  `\nif (foo) {\n    console.log("Foo")\n} else {\n    console.log("Bar")\n}`,\n  {\n    plugin: m => new ConsoleStripper().visitProgram(m)\n  }\n);\n\nout.code ===\n  `if (foo) {\n    void 0;\n} else {\n    void 0;\n}`;\n')),(0,i.kt)("p",null,"You can turn on optimizer with ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuring-swc#jsctransformoptimizer"},(0,i.kt)("inlineCode",{parentName:"a"},"jsc.transform.optimizer"))," to remove ",(0,i.kt)("inlineCode",{parentName:"p"},"void 0"),"."),(0,i.kt)("h3",{id:"using-multiple-plugins"},"Using multiple plugins"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { transformSync, plugins } from "@swc/core";\n\nconst out = transformSync(src, {\n  plugin: plugins(pluginA, pluginB)\n});\n')))}m.isMDXComponent=!0}}]);