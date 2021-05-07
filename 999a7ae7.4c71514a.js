(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{229:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(335)),c={id:"spack-basic",title:"Configuring spack",sidebar_label:"Configuring spack"},i={unversionedId:"spack-basic",id:"spack-basic",isDocsHomePage:!1,title:"Configuring spack",description:"Config file",source:"@site/docs/spack-basic.md",slug:"/spack-basic",permalink:"/docs/spack-basic",version:"current",lastUpdatedBy:"\uac15\ub3d9\uc724",lastUpdatedAt:1620356210,sidebar_label:"Configuring spack",sidebar:"usage",previous:{title:"preset-env",permalink:"/docs/preset-env"},next:{title:"Creating multiple bundles",permalink:"/docs/spack-multi-bundle"}},l=[{value:"Config file",id:"config-file",children:[{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>entry</code>",id:"entry",children:[]},{value:"<code>output</code>",id:"output",children:[]},{value:"<code>options</code>",id:"options",children:[]}]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"config-file"},"Config file"),Object(a.b)("p",null,"spack can be configured with ",Object(a.b)("inlineCode",{parentName:"p"},"spack.config.js"),". Config file for the spack is almost simillar to webpack. In future, I'll add a webpack-compatible plugin system."),Object(a.b)("p",null,"Currently configuration items should be exported as common js exports, like"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  entry: {\n    web: __dirname + "/src/index.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n};\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: In future, exporting config using ES modules will be supported.")),Object(a.b)("p",null,"If you want autocompletion or type checking for configuration, you can wrap with ",Object(a.b)("inlineCode",{parentName:"p"},"config")," function from ",Object(a.b)("inlineCode",{parentName:"p"},"@swc/core/spack"),". It's an identity function with type annotation."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    web: __dirname + "/src/index.ts",\n  },\n  output: {\n    path: __dirname + "/lib",\n  },\n});\n')),Object(a.b)("h3",{id:"mode"},Object(a.b)("inlineCode",{parentName:"h3"},"mode")),Object(a.b)("p",null,"Possible values: ",Object(a.b)("inlineCode",{parentName:"p"},"production"),", ",Object(a.b)("inlineCode",{parentName:"p"},"debug"),", ",Object(a.b)("inlineCode",{parentName:"p"},"none"),"."),Object(a.b)("p",null,"Currently this value is not used, but it will behave similarly to one of webpack."),Object(a.b)("h3",{id:"entry"},Object(a.b)("inlineCode",{parentName:"h3"},"entry")),Object(a.b)("p",null,"Determines the entry of bundling.\nYou may specify a file or a map of bundle name to file path."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: Currently this should be absolute path. You can use ",Object(a.b)("inlineCode",{parentName:"p"},"__dirname")," to create one."),Object(a.b)("p",{parentName:"blockquote"},"But in future, spack will support using relative path and will resolve files relative to ",Object(a.b)("inlineCode",{parentName:"p"},"spack.config.js"),".")),Object(a.b)("h4",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: __dirname + "/src/index.ts",\n});\n')),Object(a.b)("p",null,"You can specify the name of bundle like following."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  entry: {\n    web: __dirname + "/src/index.ts",\n  },\n});\n')),Object(a.b)("h3",{id:"output"},Object(a.b)("inlineCode",{parentName:"h3"},"output")),Object(a.b)("p",null,"You can change destination directory of the bundler using ",Object(a.b)("inlineCode",{parentName:"p"},"output"),"."),Object(a.b)("h4",{id:"exmaple"},"Exmaple"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const { config } = require("@swc/core/spack");\n\nmodule.exports = config({\n  output: {\n    path: __dirname + "/lib",\n    // Name is optional.\n    name: "index.js",\n  },\n});\n')),Object(a.b)("h3",{id:"options"},Object(a.b)("inlineCode",{parentName:"h3"},"options")),Object(a.b)("p",null,"Used to control the behavior of swc. This field is optional."),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/usage-core#options"}),"Options section of the swc doc")," for details."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/swc-project/cli/tree/master/examples/spack-basic"}),"Basic usage"))))}s.isMDXComponent=!0},335:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return t?o.a.createElement(m,i(i({ref:n},p),{},{components:t})):o.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);