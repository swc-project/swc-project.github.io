(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{323:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(323)),l={id:"preset-env",title:"preset-env",sidebar_label:"preset-env"},o={unversionedId:"preset-env",id:"preset-env",isDocsHomePage:!1,title:"preset-env",description:"Starting with v1.1.10, you can now use browserslist to automaticallly configure swc.",source:"@site/docs/configuring-preset-env.md",slug:"/preset-env",permalink:"/docs/preset-env",version:"current",lastUpdatedBy:"\uac15\ub3d9\uc724",lastUpdatedAt:1612097011,sidebar_label:"preset-env",sidebar:"usage",previous:{title:"Configuring swc",permalink:"/docs/configuring-swc"},next:{title:"Configuring spack",permalink:"/docs/spack-basic"}},b=[{value:"Usage",id:"usage",children:[{value:"Example",id:"example",children:[]},{value:"browserslist",id:"browserslist",children:[]}]},{value:"Options",id:"options",children:[{value:"targets",id:"targets",children:[]},{value:"mode",id:"mode",children:[]},{value:"debug",id:"debug",children:[]},{value:"dynamicImport",id:"dynamicimport",children:[]},{value:"loose",id:"loose",children:[]},{value:"skip",id:"skip",children:[]},{value:"include",id:"include",children:[]},{value:"exclude",id:"exclude",children:[]},{value:"coreJs",id:"corejs",children:[]},{value:"shippedProposals",id:"shippedproposals",children:[]},{value:"forceAllTransforms",id:"forcealltransforms",children:[]}]}],c={toc:b};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Starting with ",Object(i.b)("inlineCode",{parentName:"p"},"v1.1.10"),", you can now use browserslist to automaticallly configure swc."),Object(i.b)("p",null,"You need to install ",Object(i.b)("inlineCode",{parentName:"p"},"browserslist")," to use this feature."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "env": {\n    "targets": {\n      "chrome": "79"\n    },\n    "mode": "entry",\n    "coreJs": 3\n  }\n}\n')),Object(i.b)("h3",{id:"browserslist"},"browserslist"),Object(i.b)("p",null,"If you want to use ",Object(i.b)("inlineCode",{parentName:"p"},"browserslist")," with swc, you can just omit ",Object(i.b)("inlineCode",{parentName:"p"},"targets")," field like"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "env": {\n    "coreJs": 3\n  }\n}\n')),Object(i.b)("p",null,"Note that ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/browserslist/browserslist"}),"browserlists")," can be configured by multiple ways."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".browserslistrc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"browserslist")," field in package.json")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"targets"},"targets"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"string | Array<string> | { [string]: string }"),", defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"{}"),"."),Object(i.b)("p",null,"Describes the environments you support/target for your project."),Object(i.b)("p",null,"This can either be a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ai/browserslist"}),"browserslist-compatible")," query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "env": {\n    "targets": "> 0.25%, not dead"\n  }\n}\n')),Object(i.b)("p",null,"Or an object of minimum environment versions to support:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "env": {\n    "targets": {\n      "chrome": "58",\n      "ie": "11"\n    }\n  }\n}\n')),Object(i.b)("p",null,"Example environments: ",Object(i.b)("inlineCode",{parentName:"p"},"chrome"),", ",Object(i.b)("inlineCode",{parentName:"p"},"opera"),", ",Object(i.b)("inlineCode",{parentName:"p"},"edge"),", ",Object(i.b)("inlineCode",{parentName:"p"},"firefox"),", ",Object(i.b)("inlineCode",{parentName:"p"},"safari"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ie"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ios"),", ",Object(i.b)("inlineCode",{parentName:"p"},"android"),", ",Object(i.b)("inlineCode",{parentName:"p"},"node"),", ",Object(i.b)("inlineCode",{parentName:"p"},"electron"),"."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"targets")," is not specified, ",Object(i.b)("inlineCode",{parentName:"p"},"swc")," uses ",Object(i.b)("inlineCode",{parentName:"p"},"browserslist")," to get target information. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#browserslist"}),"browserslist")),Object(i.b)("h3",{id:"mode"},"mode"),Object(i.b)("p",null,"See: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env#usebuiltins"}),"https://babeljs.io/docs/en/babel-preset-env#usebuiltins")),Object(i.b)("p",null,"Possible values: ",Object(i.b)("inlineCode",{parentName:"p"},"usage"),", ",Object(i.b)("inlineCode",{parentName:"p"},"entry"),", ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"\nDefaults to ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note:")," Currently ",Object(i.b)("inlineCode",{parentName:"p"},"usage")," is not efficient as one of babel. Even though, it does not matter in real world codes."),Object(i.b)("h3",{id:"debug"},"debug"),Object(i.b)("p",null,"Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"dynamicimport"},"dynamicImport"),Object(i.b)("p",null,"Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"loose"},"loose"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"boolean"),", defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("p",null,"Enable ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://2ality.com/2015/12/babel6-loose-mode.html"}),'"loose" transformations')," for any plugins in this preset that allow them."),Object(i.b)("h3",{id:"skip"},"skip"),Object(i.b)("p",null,"Skip some es features. You can use this option to reduce bundle size."),Object(i.b)("p",null,"For example, to exclude ",Object(i.b)("inlineCode",{parentName:"p"},"core-js/modules/foo"),", you can use"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "env": {\n    "skip": ["core-js/modules/foo"]\n  }\n}\n')),Object(i.b)("h3",{id:"include"},"include"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Type is string[]"),Object(i.b)("li",{parentName:"ul"},"can be a core-js module (",Object(i.b)("inlineCode",{parentName:"li"},"es.math.sign"),") or a swc pass (",Object(i.b)("inlineCode",{parentName:"li"},"transform-spread"),")")),Object(i.b)("h3",{id:"exclude"},"exclude"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string[]")),Object(i.b)("li",{parentName:"ul"},"can be a core-js module (",Object(i.b)("inlineCode",{parentName:"li"},"es.math.sign"),") or a swc pass (",Object(i.b)("inlineCode",{parentName:"li"},"transform-spread"),")")),Object(i.b)("h3",{id:"corejs"},"coreJs"),Object(i.b)("p",null,"The version of the used core js. Defaults to undefined, which panic when mode is configured."),Object(i.b)("h3",{id:"shippedproposals"},"shippedProposals"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"boolean")),Object(i.b)("li",{parentName:"ul"},"Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h3",{id:"forcealltransforms"},"forceAllTransforms"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"boolean")),Object(i.b)("li",{parentName:"ul"},"Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("p",null,"Enable all trnasforms"))}s.isMDXComponent=!0}}]);