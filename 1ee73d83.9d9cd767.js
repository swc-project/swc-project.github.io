(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return a})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),c=(r(0),r(340)),i={title:"Changelog: swc v1.2.55",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},s={permalink:"/blog/2021/05/07/swc-1.2.55",source:"@site/blog/2021-05-07-swc-1.2.55.md",description:"Bugfixes",date:"2021-05-07T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.55",readingTime:1.89,truncated:!1,prevItem:{title:"Changelog: swc v1.2.55",permalink:"/blog/2021/05/11/swc-1.2.57"},nextItem:{title:"Changelog: swc v1.2.54",permalink:"/blog/2021/04/20/swc-1.2.54"}},a=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Type definition of FunctionDeclaration (#1602)",id:"type-definition-of-functiondeclaration-1602",children:[]},{value:"optimizer: Fix for do-while loops (#1518)",id:"optimizer-fix-for-do-while-loops-1518",children:[]},{value:"Codegen of null character (#1619)",id:"codegen-of-null-character-1619",children:[]},{value:"preset-env: Import order of core-js modules (#1605)",id:"preset-env-import-order-of-core-js-modules-1605",children:[]},{value:"<code>&amp;nbsp;</code> in jsx entities (#1446)",id:"nbsp-in-jsx-entities-1446",children:[]},{value:"Type definition of options (#1621)",id:"type-definition-of-options-1621",children:[]},{value:"HasDecorators.decorators: optional (#1603)",id:"hasdecoratorsdecorators-optional-1603",children:[]},{value:"Super in sequence expressions (#1617)",id:"super-in-sequence-expressions-1617",children:[]},{value:"TypeScript dynamic imports (#1614)",id:"typescript-dynamic-imports-1614",children:[]},{value:"TypeScript common js exports (#1593)",id:"typescript-common-js-exports-1593",children:[]},{value:"optimizer: Preserve x instanceof Object (#1630)",id:"optimizer-preserve-x-instanceof-object-1630",children:[]},{value:"react: Pass ordering (#1639)",id:"react-pass-ordering-1639",children:[]},{value:"resolver: Fix setter properties (#)",id:"resolver-fix-setter-properties-",children:[]},{value:"Type definition of JSXOpeningElement (#1608)",id:"type-definition-of-jsxopeningelement-1608",children:[]},{value:"Method with keyword names (#1651)",id:"method-with-keyword-names-1651",children:[]}]},{value:"Performance improvements",id:"performance-improvements",children:[{value:"bundler: Skip works (#1599)",id:"bundler-skip-works-1599",children:[]},{value:"bundler: Rework (#1601)",id:"bundler-rework-1601",children:[]},{value:"bundler: Detection of circular imports (#1610)",id:"bundler-detection-of-circular-imports-1610",children:[]}]}],p={toc:a};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h3",{id:"type-definition-of-functiondeclaration-1602"},"Type definition of FunctionDeclaration (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1602"},"#1602"),")"),Object(c.b)("p",null,"Fixed by ",Object(c.b)("a",{parentName:"p",href:"https://github.com/wavesheep"},"@wavesheep")),Object(c.b)("h3",{id:"optimizer-fix-for-do-while-loops-1518"},"optimizer: Fix for do-while loops (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1618"},"#1518"),")"),Object(c.b)("p",null,"Previously the optimizer of ",Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," errornously removed some loops."),Object(c.b)("p",null,"Fixed by ",Object(c.b)("a",{parentName:"p",href:"https://github.com/wbinnssmith"},"@wbinnssmith"),"."),Object(c.b)("h3",{id:"codegen-of-null-character-1619"},"Codegen of null character (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1619"},"#1619"),")"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," now emits ",Object(c.b)("inlineCode",{parentName:"p"},"\\x00")," instead of ",Object(c.b)("inlineCode",{parentName:"p"},"\\00")," for null charcters."),Object(c.b)("h3",{id:"preset-env-import-order-of-core-js-modules-1605"},"preset-env: Import order of core-js modules (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1605"},"#1605"),")"),Object(c.b)("p",null,"Now ",Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," uses indexed sets for managing imports."),Object(c.b)("h3",{id:"nbsp-in-jsx-entities-1446"},Object(c.b)("inlineCode",{parentName:"h3"},"&nbsp;")," in jsx entities (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1446"},"#1446"),")"),Object(c.b)("p",null,"Previously swc blindly treated ",Object(c.b)("inlineCode",{parentName:"p"},"&nbsp;")," in jsx entities as a whitespace (because it is) and it resulted in ",Object(c.b)("inlineCode",{parentName:"p"},"&nbsp;")," being removed. This is now fixed and it works as expected."),Object(c.b)("h3",{id:"type-definition-of-options-1621"},"Type definition of options (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1621"},"#1621"),")"),Object(c.b)("p",null,"Fixed by ",Object(c.b)("a",{parentName:"p",href:"https://github.com/Brooooooklyn"},"@Brooooooklyn"),"."),Object(c.b)("h3",{id:"hasdecoratorsdecorators-optional-1603"},"HasDecorators.decorators: optional (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1603"},"#1603"),")"),Object(c.b)("p",null,"Now ",Object(c.b)("inlineCode",{parentName:"p"},"Parameter")," allows ",Object(c.b)("inlineCode",{parentName:"p"},"decorators")," property to be skipped."),Object(c.b)("h3",{id:"super-in-sequence-expressions-1617"},"Super in sequence expressions (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1617"},"#1617"),")"),Object(c.b)("p",null,"Previously swc miscompiled code like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"class A extends B {\n  foo() {\n    super.foo(), bar();\n  }\n}\n")),Object(c.b)("h3",{id:"typescript-dynamic-imports-1614"},"TypeScript dynamic imports (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1614"},"#1614"),")"),Object(c.b)("p",null,"There was a bug which occurs if the dynamic import is only import of a module."),Object(c.b)("p",null,"Affected code looks like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},'(async () => {\n  const example = await import("./example");\n  console.log(example.foo);\n})();\n')),Object(c.b)("h3",{id:"typescript-common-js-exports-1593"},"TypeScript common js exports (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1593"},"#1593"),")"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," now supports"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"export Foo = 'example';\n")),Object(c.b)("h3",{id:"optimizer-preserve-x-instanceof-object-1630"},"optimizer: Preserve x instanceof Object (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1630"},"#1630"),")"),Object(c.b)("p",null,"Previously ",Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," mis-optimized"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"let x = undefined;\nif (x instanceof Object) {\n  console.log(x.obj);\n}\n")),Object(c.b)("p",null,"Fixed by ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mischnic"},"@mischnic"),"."),Object(c.b)("h3",{id:"react-pass-ordering-1639"},"react: Pass ordering (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1639"},"#1639"),")"),Object(c.b)("p",null,"Fixed by ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mischnic"},"@mischnic"),"."),Object(c.b)("h3",{id:"resolver-fix-setter-properties-"},"resolver: Fix setter properties (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1647"},"#"),")"),Object(c.b)("p",null,"Preivously the scope analyzer of ",Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," had a bug related to setter property.\nBut this bug is not expected to affect any real world code because it only affects setter properties."),Object(c.b)("h3",{id:"type-definition-of-jsxopeningelement-1608"},"Type definition of JSXOpeningElement (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1608"},"#1608"),")"),Object(c.b)("p",null,"Fixed by ",Object(c.b)("a",{parentName:"p",href:"https://github.com/vemoo"},"@vemoo"),"."),Object(c.b)("h3",{id:"method-with-keyword-names-1651"},"Method with keyword names (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1651"},"#1651"),")"),Object(c.b)("p",null,"This bug would affect code which uses a keyword as a method name."),Object(c.b)("h2",{id:"performance-improvements"},"Performance improvements"),Object(c.b)("h3",{id:"bundler-skip-works-1599"},"bundler: Skip works (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1599"},"#1599"),")"),Object(c.b)("p",null,"Previously ",Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," did analysis for all modules, even if it does not have any imports.\nIt's not necessary and it's now removed."),Object(c.b)("h3",{id:"bundler-rework-1601"},"bundler: Rework (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1601"},"#1601"),")"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," had a faulty design, which made the bundler slow.\nThese legacy codes are removed, and ",Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," becomes much faster."),Object(c.b)("h3",{id:"bundler-detection-of-circular-imports-1610"},"bundler: Detection of circular imports (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1610"},"#1610"),")"),Object(c.b)("p",null,"With the release, ",Object(c.b)("a",{parentName:"p",href:"https://swc.rs"},"swc")," does not perform graph operations.\nIt makes bundling modules with lots of ciruclar graph much faster."))}l.isMDXComponent=!0},340:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||c;return r?o.a.createElement(h,s(s({ref:t},p),{},{components:r})):o.a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<c;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);