(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),c=(r(0),r(347)),s=["components"],o={title:"Changelog: swc v1.2.59",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2021/05/30/swc-1.2.59",source:"@site/blog/2021-05-30-swc-1.2.59.md",description:"Bugfixes",date:"2021-05-30T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.59",readingTime:2.45,truncated:!1,prevItem:{title:"Changelog: swc v1.2.60",permalink:"/blog/2021/06/07/swc-1.2.60"},nextItem:{title:"Changelog: swc v1.2.58",permalink:"/blog/2021/05/21/swc-1.2.58"}},l=[{value:"Bugfixes",id:"bugfixes",children:[{value:"Fix for <code>arguments</code> in for loops (#1462)",id:"fix-for-arguments-in-for-loops-1462",children:[]},{value:"regnerator: var in proper level (#1718)",id:"regnerator-var-in-proper-level-1718",children:[]},{value:"escapes in jsx attribute values (#1661)",id:"escapes-in-jsx-attribute-values-1661",children:[]},{value:"regenerator: <code>||</code> handled properly (#1684)",id:"regenerator--handled-properly-1684",children:[]},{value:"bundler: Complex circular imports (#1739)",id:"bundler-complex-circular-imports-1739",children:[]},{value:"typscript: Arrow expr with class expr https://github.com/swc-project/swc/issues/1738",id:"typscript-arrow-expr-with-class-expr-httpsgithubcomswc-projectswcissues1738",children:[]},{value:"codegen: Unicode characters (#1744)",id:"codegen-unicode-characters-1744",children:[]},{value:"<code>this</code> in tagged template literals (#1742)",id:"this-in-tagged-template-literals-1742",children:[]},{value:"parser: TS1031 https://github.com/swc-project/swc/issues/1751",id:"parser-ts1031-httpsgithubcomswc-projectswcissues1751",children:[]},{value:"API type definition #1746",id:"api-type-definition-1746",children:[]},{value:"bundler: Support for file names ending with period. (#1748)",id:"bundler-support-for-file-names-ending-with-period-1748",children:[]},{value:"bundler: Updated list for core modules. (#1749)",id:"bundler-updated-list-for-core-modules-1749",children:[]},{value:"codegen: Class with minify and higher target (#1764)",id:"codegen-class-with-minify-and-higher-target-1764",children:[]}]},{value:"New platform support",id:"new-platform-support",children:[{value:"FreeBSD (#1758)",id:"freebsd-1758",children:[]}]}],p={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,s);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(c.b)("h3",{id:"fix-for-arguments-in-for-loops-1462"},"Fix for ",Object(c.b)("inlineCode",{parentName:"h3"},"arguments")," in for loops (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1462"},"#1462"),")"),Object(c.b)("p",null,"Previously the helper of swc was broken by this bug.\nIt's now fixed and new version of ",Object(c.b)("inlineCode",{parentName:"p"},"@swc/helpers")," works properly."),Object(c.b)("h3",{id:"regnerator-var-in-proper-level-1718"},"regnerator: var in proper level (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1718"},"#1718"),")"),Object(c.b)("p",null,"Previously swc might break codes like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},'async function scanUser(groups: { users: number[] }[]) {\n  await Promise.all(\n    groups.map(async ({ users }) => {\n      for (const user of users) {\n        console.log("user", user);\n        await new Promise((resolve) => setTimeout(resolve, 30));\n      }\n    })\n  );\n}\n\nscanUser([{ users: [1, 2, 3, 4, 5] }, { users: [11, 12, 13, 14, 15] }]);\n')),Object(c.b)("p",null,"because the variable for iterator are recycled while it should not.\nIt's now fixed by injecting variables at proper level."),Object(c.b)("h3",{id:"escapes-in-jsx-attribute-values-1661"},"escapes in jsx attribute values (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1661"},"#1661"),")"),Object(c.b)("p",null,"The afffected code looks like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'console.log(<h1 value="abc\\nas">s</h1>);\n')),Object(c.b)("h3",{id:"regenerator--handled-properly-1684"},"regenerator: ",Object(c.b)("inlineCode",{parentName:"h3"},"||")," handled properly (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1684"},"#1684"),")"),Object(c.b)("p",null,"Previously swc had a bug related to ",Object(c.b)("inlineCode",{parentName:"p"},"await")," in rhs of ",Object(c.b)("inlineCode",{parentName:"p"},"||")," and code like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"const cache = {};\n\nasync function getThing(key) {\n  const it = cache[key] || (await fetchThing(key));\n  return it;\n}\n\nfunction fetchThing(key) {\n  return Promise.resolve(key.toUpperCase()).then((val) => (cache[key] = val));\n}\n")),Object(c.b)("p",null,"was miscompiled."),Object(c.b)("p",null,"It's now fixed."),Object(c.b)("h3",{id:"bundler-complex-circular-imports-1739"},"bundler: Complex circular imports (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1739"},"#1739"),")"),Object(c.b)("p",null,"In a very complex cirular import scenario, the bundler may hang because of infinite recursions."),Object(c.b)("p",null,"It's now fixed."),Object(c.b)("h3",{id:"typscript-arrow-expr-with-class-expr-httpsgithubcomswc-projectswcissues1738"},"typscript: Arrow expr with class expr ",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1738"},"https://github.com/swc-project/swc/issues/1738")),Object(c.b)("p",null,"The typescript type stripped of swc compiled arrow expressions with a class expression as a body wonrly."),Object(c.b)("p",null,"The affected code looks like and it's now fixed."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"const fn = () => class Bug {};\nconsole.log(fn());\n")),Object(c.b)("h3",{id:"codegen-unicode-characters-1744"},"codegen: Unicode characters (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1744"},"#1744"),")"),Object(c.b)("p",null,"Previously swc could break codes for old targets like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'console.log("\ud83e\udd2d \xfc");\n')),Object(c.b)("p",null,"It's not fixed."),Object(c.b)("h3",{id:"this-in-tagged-template-literals-1742"},Object(c.b)("inlineCode",{parentName:"h3"},"this")," in tagged template literals (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1742"},"#1742"),")"),Object(c.b)("p",null,"swc, just like babel, had a bug related to ",Object(c.b)("inlineCode",{parentName:"p"},"this")," in tagged template literals.\nThis bug could break code like"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"class Foo {\n  #tag() {\n    return this;\n  }\n\n  #tag2 = this.#tag;\n\n  constructor() {\n    const receiver = this.#tag`tagged template`;\n    console.log(receiver === this);\n\n    const receiver2 = this.#tag2`tagged template`;\n    console.log(receiver2 === this);\n  }\n}\nnew Foo();\n")),Object(c.b)("h3",{id:"parser-ts1031-httpsgithubcomswc-projectswcissues1751"},"parser: TS1031 ",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1751"},"https://github.com/swc-project/swc/issues/1751")),Object(c.b)("p",null,"Previously swc wrongly emitted an error for"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"class Foo {\n  declare a: string;\n}\n")),Object(c.b)("p",null,"Fixed by ",Object(c.b)("a",{parentName:"p",href:"https://github.com/Shinyaigeek"},"@Shinyaigeek"),"."),Object(c.b)("h3",{id:"api-type-definition-1746"},"API type definition ",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1746"},"#1746")),Object(c.b)("p",null,"The typescript type checker will not report error for ",Object(c.b)("inlineCode",{parentName:"p"},"keepClassNames")," anymore."),Object(c.b)("h3",{id:"bundler-support-for-file-names-ending-with-period-1748"},"bundler: Support for file names ending with period. (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1748"},"#1748"),")"),Object(c.b)("p",null,"Previously the bundler failed to bundler ",Object(c.b)("inlineCode",{parentName:"p"},"core-js@^2")," because of a bug in the resolver."),Object(c.b)("p",null,"Fixed by ",Object(c.b)("a",{parentName:"p",href:"https://github.com/tmpfs"},"@tmpfs"),"."),Object(c.b)("h3",{id:"bundler-updated-list-for-core-modules-1749"},"bundler: Updated list for core modules. (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1749"},"#1749"),")"),Object(c.b)("p",null,"node.js added some core modules and using them with the bundler resulted in an error because it tried to resolve it in ",Object(c.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(c.b)("p",null,"Fixed by ",Object(c.b)("a",{parentName:"p",href:"https://github.com/tmpfs"},"@tmpfs"),"."),Object(c.b)("h3",{id:"codegen-class-with-minify-and-higher-target-1764"},"codegen: Class with minify and higher target (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/issues/1764"},"#1764"),")"),Object(c.b)("p",null,"Previously swc had a codegen bug related to a class with ",Object(c.b)("inlineCode",{parentName:"p"},"es2016"),"+ target and minify enabled."),Object(c.b)("p",null,"Fixed by ",Object(c.b)("a",{parentName:"p",href:"https://github.com/Shinyaigeek"},"@Shinyaigeek"),"."),Object(c.b)("h2",{id:"new-platform-support"},"New platform support"),Object(c.b)("h3",{id:"freebsd-1758"},"FreeBSD (",Object(c.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1758"},"#1758"),")"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/Brooooooklyn"},"@Brooooooklyn"),", the author of ",Object(c.b)("a",{parentName:"p",href:"https://github.com/napi-rs/napi-rs"},"a wonderful rust library")," for creating node modules, added supports for FreeBSD."))}b.isMDXComponent=!0},347:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,h=b["".concat(s,".").concat(d)]||b[d]||u[d]||c;return r?a.a.createElement(h,o(o({ref:t},l),{},{components:r})):a.a.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,s=new Array(c);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<c;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);