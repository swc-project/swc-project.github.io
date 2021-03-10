(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{327:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),b=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return t?r.a.createElement(d,o(o({ref:n},i),{},{components:t})):r.a.createElement(d,o({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<l;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),l=(t(0),t(327)),c={id:"configuring-swc",title:"Configuring swc",sidebar_label:"Configuring swc"},o={unversionedId:"configuring-swc",id:"configuring-swc",isDocsHomePage:!1,title:"Configuring swc",description:"swc can be configured with .swcrc file.",source:"@site/docs/configuring-swc.md",slug:"/configuring-swc",permalink:"/docs/configuring-swc",version:"current",lastUpdatedBy:"Artyom Kohver",lastUpdatedAt:1615357540,sidebar_label:"Configuring swc",sidebar:"usage",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"preset-env",permalink:"/docs/preset-env"}},s=[{value:"preset-env",id:"preset-env",children:[]},{value:"jsc.externalHelpers",id:"jscexternalhelpers",children:[]},{value:"jsc.parser",id:"jscparser",children:[]},{value:"jsc.target",id:"jsctarget",children:[]},{value:"jsc.loose",id:"jscloose",children:[]},{value:"jsc.transform",id:"jsctransform",children:[{value:"jsc.transform.legacyDecorator",id:"jsctransformlegacydecorator",children:[]},{value:"jsc.transform.decoratorMetadata",id:"jsctransformdecoratormetadata",children:[]},{value:"jsc.transform.react",id:"jsctransformreact",children:[]},{value:"jsc.transform.constModules",id:"jsctransformconstmodules",children:[]},{value:"jsc.transform.optimizer",id:"jsctransformoptimizer",children:[]}]},{value:"module",id:"module",children:[{value:"shared options",id:"shared-options",children:[]},{value:"common js",id:"common-js",children:[]},{value:"amd",id:"amd",children:[]},{value:"umd",id:"umd",children:[]}]},{value:"minify",id:"minify",children:[]},{value:"Multiple entries",id:"multiple-entries",children:[{value:"test",id:"test",children:[]},{value:"exclude",id:"exclude",children:[]}]}],i={toc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"swc")," can be configured with ",Object(l.b)("inlineCode",{parentName:"p"},".swcrc")," file."),Object(l.b)("h2",{id:"preset-env"},"preset-env"),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/preset-env"}),"preset-env")," for using swc with ",Object(l.b)("inlineCode",{parentName:"p"},"browserslist"),"."),Object(l.b)("h1",{id:"jsc"},"jsc"),Object(l.b)("p",null,"This is optional and defaults to"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript",\n      "jsx": false,\n      "dynamicImport": false,\n      "privateMethod": false,\n      "functionBind": false,\n      "exportDefaultFrom": false,\n      "exportNamespaceFrom": false,\n      "decorators": false,\n      "decoratorsBeforeExport": false,\n      "topLevelAwait": false,\n      "importMeta": false\n    },\n    "transform": null,\n    "target": "es5",\n    "loose": false,\n    "externalHelpers": false,\n    // Requires v1.2.50 or upper and requires target to be es2016 or upper.\n    "keepClassNames": false\n  }\n}\n')),Object(l.b)("h2",{id:"jscexternalhelpers"},"jsc.externalHelpers"),Object(l.b)("p",null,"You can use helpers from an external module named ",Object(l.b)("inlineCode",{parentName:"p"},"@swc/helpers"),"."),Object(l.b)("p",null,"While bundling, this option will greatly reduce your file size."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "externalHelpers": true\n  }\n}\n')),Object(l.b)("h2",{id:"jscparser"},"jsc.parser"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"typescript"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": false,\n      "dynamicImport": false\n    }\n  }\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ecmascript"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript",\n      "jsx": false,\n      "dynamicImport": false,\n      "privateMethod": false,\n      "functionBind": false,\n      "classPrivateProperty": false,\n      "exportDefaultFrom": false,\n      "exportNamespaceFrom": false,\n      "decorators": false,\n      "decoratorsBeforeExport": false,\n      "importMeta": false\n    }\n  }\n}\n')),Object(l.b)("h2",{id:"jsctarget"},"jsc.target"),Object(l.b)("p",null,"Starting from ",Object(l.b)("inlineCode",{parentName:"p"},"@swc/core")," v1.0.27, you can specify the target environment by using the field."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    // Disable es3 / es5 / es2015 transforms\n    "target": "es2016"\n  }\n}\n')),Object(l.b)("h2",{id:"jscloose"},"jsc.loose"),Object(l.b)("p",null,"Starting from ",Object(l.b)("inlineCode",{parentName:"p"},"@swc/core")," v1.1.4, you can enable loose mode by"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "loose": true\n  }\n}\n')),Object(l.b)("p",null,"In loose mode, swc generates more efficient code."),Object(l.b)("h2",{id:"jsctransform"},"jsc.transform"),Object(l.b)("p",null,"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "transform": {\n      "react": {\n        "pragma": "React.createElement",\n        "pragmaFrag": "React.Fragment",\n        "throwIfNamespace": true,\n        "development": false,\n        "useBuiltins": false\n      },\n      "optimizer": {\n        "globals": {\n          "vars": {\n            "__DEBUG__": "true"\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"jsctransformlegacydecorator"},"jsc.transform.legacyDecorator"),Object(l.b)("p",null,"You can use legacy decorators with ",Object(l.b)("inlineCode",{parentName:"p"},"swc"),". To enable legacy decorator, set ",Object(l.b)("inlineCode",{parentName:"p"},"jsc.transform.legacyDecorator")," and ",Object(l.b)("inlineCode",{parentName:"p"},"jsc.parser.decorators")," to true."),Object(l.b)("p",null,"e.g."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "parser": {\n      "syntax": "ecmascript",\n      "decorators": true\n    },\n    "transform": {\n      "legacyDecorator": true\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"jsctransformdecoratormetadata"},"jsc.transform.decoratorMetadata"),Object(l.b)("p",null,"If you are using typescript and decorators with ",Object(l.b)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," enabled, you can use ",Object(l.b)("inlineCode",{parentName:"p"},"swc")," for faster iteration like"),Object(l.b)("p",null,"e.g."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "decorators": true\n    },\n    "transform": {\n      "legacyDecorator": true,\n      "decoratorMetadata": true\n    }\n  }\n}\n')),Object(l.b)("p",null,"Note: This feature requires ",Object(l.b)("inlineCode",{parentName:"p"},"v1.2.13+"),"."),Object(l.b)("h3",{id:"jsctransformreact"},"jsc.transform.react"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pragma"),"\nReplace the function used when compiling JSX expressions.")),Object(l.b)("p",null,"Defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"React.createElement"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pragmaFrag"),"\nReplace the component used when compiling JSX fragments.")),Object(l.b)("p",null,"Defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"React.Fragment")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"throwIfNamespace"),"\nToggles whether or not to throw an error if an XML namespaced tag name is used. For example: ",Object(l.b)("inlineCode",{parentName:"li"},"<f:image />"))),Object(l.b)("p",null,"Though the JSX spec allows this, it is disabled by default since React's JSX does not currently have support for it."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"development"),"\nToggles plugins that aid in development, such as ",Object(l.b)("inlineCode",{parentName:"p"},"jsx-self")," and ",Object(l.b)("inlineCode",{parentName:"p"},"jsx-source"),".")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"useBuiltins"),"\nUse ",Object(l.b)("inlineCode",{parentName:"p"},"Object.assign()")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"_extends"),". Defaults to false."))),Object(l.b)("h3",{id:"jsctransformconstmodules"},"jsc.transform.constModules"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "transform": {\n      "constModules": {\n        "globals": {\n          "@ember/env-flags": {\n            "DEBUG": "true"\n          },\n          "@ember/features": {\n            "FEATURE_A": "false",\n            "FEATURE_B": "true"\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { DEBUG } from "@ember/env-flags";\nimport { FEATURE_A, FEATURE_B } from "@ember/features";\n\nconsole.log(DEBUG, FEATURE_A, FEATURE_B);\n')),Object(l.b)("p",null,"becomes"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"console.log(true, false, true);\n")),Object(l.b)("h3",{id:"jsctransformoptimizer"},"jsc.transform.optimizer"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note"),": Optimizer of the swc assumes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"It's a module or wrapped in an iife.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Accessing (get) global variables does not have a side-effect.")),Object(l.b)("p",null,"It is the same assumption as the google closure compiler."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You don't add fields to literals like a numeric literal, regular expression or a string literal.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Files are served as gzipped.")),Object(l.b)("p",null,"It means that swc will not focus on reducing the size of non-gzipped file size."),Object(l.b)("p",null,"Setting this to ",Object(l.b)("inlineCode",{parentName:"p"},"undefined")," skips optimizer pass"),Object(l.b)("h4",{id:"jsctransformoptimizerglobals"},"jsc.transform.optimizer.globals"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"vars"),"\nVariables to inline.")),Object(l.b)("p",null,"e.g.\n",Object(l.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "transform": {\n      "optimizer": {\n        "globals": {\n          "vars": {\n            "__DEBUG__": "true"\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npx swc '__DEBUG__' --filename input.js"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"true;\n")),Object(l.b)("h4",{id:"jsctransformoptimizerjsonify"},"jsc.transform.optimizer.jsonify"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," This feature requires ",Object(l.b)("inlineCode",{parentName:"p"},"v1.1.1"),"+"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"minCost"),"\nIf cost of parsing a pure object literal is larger than this value, the object literal is converted to ",Object(l.b)("inlineCode",{parentName:"li"},'JSON.parse(\'{"foo": "bar"}\')'),". Defaults to 1024.")),Object(l.b)("p",null,"e.g.\n",Object(l.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jsc": {\n    "transform": {\n      "optimizer": {\n        "jsonify": {\n          "minCost": 0\n        }\n      }\n    }\n  }\n}\n')),Object(l.b)("p",null,"This will change all ",Object(l.b)("strong",{parentName:"p"},"pure")," object literals to ",Object(l.b)("inlineCode",{parentName:"p"},'JSON.parse("")'),"."),Object(l.b)("h2",{id:"module"},"module"),Object(l.b)("p",null,"swc can transpile es6 modules to common js module, umd module or amd module."),Object(l.b)("h3",{id:"shared-options"},"shared options"),Object(l.b)("p",null,"These options are shared by common js / umd / amd."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "module": {\n    // You can specify "commonjs", "amd", "umd"\n    "type": "commonjs",\n    "strict": false,\n    "strictMode": true,\n    "lazy": false,\n    "noInterop": false\n  }\n}\n')),Object(l.b)("h4",{id:"strict"},"strict"),Object(l.b)("p",null,"By default, when using exports with swc a non-enumerable ",Object(l.b)("inlineCode",{parentName:"p"},"__esModule")," property is exported. In some cases, this property is used to determine if the import is the default export or if it contains the default export."),Object(l.b)("p",null,"To prevent the ",Object(l.b)("inlineCode",{parentName:"p"},"__esModule")," property from being exported, you can set the strict option to true."),Object(l.b)("p",null,"Defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h4",{id:"strictmode"},"strictMode"),Object(l.b)("p",null,"If true, swc emits 'use strict' directive."),Object(l.b)("p",null,"Defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),"."),Object(l.b)("h4",{id:"lazy"},"lazy"),Object(l.b)("p",null,"Changes Babel's compiled import statements to be lazily evaluated when their imported bindings are used for the first time. This can improve the initial load time of your module because evaluating dependencies upfront is sometimes entirely unnecessary. This is especially the case when implementing a library module."),Object(l.b)("p",null,"The value of ",Object(l.b)("inlineCode",{parentName:"p"},"lazy")," has a few possible effects:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"false")," - No lazy initialization of any imported module."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"true")," - Do not lazy-initialize local ",Object(l.b)("inlineCode",{parentName:"li"},"./foo")," imports, but lazy-init ",Object(l.b)("inlineCode",{parentName:"li"},"foo")," dependencies.\nLocal paths are much more likely to have circular dependencies, which may break if loaded lazily,\nso they are not lazy by default, whereas dependencies between independent modules are rarely cyclical."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Array<string>")," - Lazy-initialize all imports with source matching one of the given strings.")),Object(l.b)("hr",null),Object(l.b)("p",null,"The two cases where imports can never be lazy are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'import "foo";'),"\nSide-effect imports are automatically non-lazy since their very existence means that there is no binding to later kick-off initialization."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'export from "foo"'),"\nRe-exporting all names requires up-front execution because otherwise there is no\nway to know what names need to be exported.")),Object(l.b)("p",null,"Defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h4",{id:"nointerop"},"noInterop"),Object(l.b)("p",null,"By default, when using exports with swc a non-enumerable ","_","_","esModule property is exported.\nThis property is then used to determine if the import is the default export or if it contains the default export."),Object(l.b)("p",null,"In cases where the auto-unwrapping of default is not needed, you can set the noInterop option to true to avoid the usage of the interopRequireDefault helper (shown in inline form above)."),Object(l.b)("p",null,"Defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h3",{id:"common-js"},"common js"),Object(l.b)("p",null,"To emit a common js module, you can do so by"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "module": {\n    "type": "commonjs",\n\n    // These are defaults.\n    "strict": false,\n    "strictMode": true,\n    "lazy": false,\n    "noInterop": false\n  }\n}\n')),Object(l.b)("h3",{id:"amd"},"amd"),Object(l.b)("p",null,"To emit amd module, you can do so by"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "module": {\n    "type": "amd",\n    // Optional. If specified, swc emits named amd module.\n    "moduleId": "foo",\n\n    // These are defaults.\n    "strict": false,\n    "strictMode": true,\n    "lazy": false,\n    "noInterop": false\n  }\n}\n')),Object(l.b)("h4",{id:"moduleid"},"moduleId"),Object(l.b)("p",null,"Defaults to ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),". If specified, swc emits named amd module."),Object(l.b)("h3",{id:"umd"},"umd"),Object(l.b)("p",null,"To emit ",Object(l.b)("inlineCode",{parentName:"p"},"umd")," module, you can do so by"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "module": {\n    "type": "umd",\n    "globals": {},\n\n    // These are defaults.\n    "strict": false,\n    "strictMode": true,\n    "lazy": false,\n    "noInterop": false\n  }\n}\n')),Object(l.b)("h4",{id:"globals"},"globals"),Object(l.b)("p",null,"TODO"),Object(l.b)("h2",{id:"minify"},"minify"),Object(l.b)("p",null,"To get minified output, you can configure swc by"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "minify": true\n}\n')),Object(l.b)("h2",{id:"multiple-entries"},"Multiple entries"),Object(l.b)("p",null,"Starting with ",Object(l.b)("inlineCode",{parentName:"p"},"v1.0.47"),", you can specify multiple entries. For example,"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "test": ".*.js$",\n    "module": {\n      "type": "commonjs"\n    }\n  },\n  {\n    "test": ".*.ts$",\n    "module": {\n      "type": "amd"\n    }\n  }\n]\n')),Object(l.b)("p",null,"this make swc compile javascript files as common js module (uses ",Object(l.b)("inlineCode",{parentName:"p"},"require('foo')"),") and compile typescript files as amd modules."),Object(l.b)("p",null,"Note that ",Object(l.b)("inlineCode",{parentName:"p"},"test")," option can be used to transcompile only typescript files, like"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "test": ".*.ts$",\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": true,\n      "dynamicImport": true\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"test"},"test"),Object(l.b)("p",null,"Type: Regex / Regex[]"),Object(l.b)("p",null,"Usage:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "test": ".*.ts$",\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": true,\n      "dynamicImport": true\n    }\n  }\n}\n')),Object(l.b)("h3",{id:"exclude"},"exclude"),Object(l.b)("p",null,"Type: Regex / Regex[]"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},".swcrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "exclude": [".*.js$", ".*.map$"],\n  "jsc": {\n    "parser": {\n      "syntax": "typescript",\n      "tsx": false,\n      "decorators": true,\n      "dynamicImport": true\n    }\n  }\n}\n')),Object(l.b)("h1",{id:"sourcemaps"},"sourceMaps"),Object(l.b)("p",null,"Starting from ",Object(l.b)("inlineCode",{parentName:"p"},"v1.2.50"),", you can enable source map by adding ",Object(l.b)("inlineCode",{parentName:"p"},"sourceMaps: true")," or ",Object(l.b)("inlineCode",{parentName:"p"},"sourceMaps: 'inline'")," to the ",Object(l.b)("inlineCode",{parentName:"p"},".swcrc"),"."),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "sourceMaps": true\n}\n')))}b.isMDXComponent=!0}}]);