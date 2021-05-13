(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),a=(n(0),n(340)),o={title:"Changelog: swc v1.2.23",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},i={permalink:"/blog/2020/09/08/swc-1.2.23",source:"@site/blog/2020-09-08-swc-1.2.23.md",description:"New features",date:"2020-09-08T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.23",readingTime:2.615,truncated:!1,prevItem:{title:"Hotfix: swc v1.2.26",permalink:"/blog/2020/09/11/swc-1.2.26"},nextItem:{title:"Changelog: swc v1.2.22",permalink:"/blog/2020/08/31/swc-1.2.22"}},s=[{value:"New features",id:"new-features",children:[{value:"jsx pragma (#1015)",id:"jsx-pragma-1015",children:[]},{value:"BingInt literal type (#1020)",id:"bingint-literal-type-1020",children:[]},{value:"Dynamic imports in non-es6 modules (#1028)",id:"dynamic-imports-in-non-es6-modules-1028",children:[]},{value:"Block scoping (#1029)",id:"block-scoping-1029",children:[]},{value:"fixer: binary expression in callee of new (#1030)",id:"fixer-binary-expression-in-callee-of-new-1030",children:[]},{value:"Support for large binary expressions (#1032)",id:"support-for-large-binary-expressions-1032",children:[]},{value:"Correct this in optional chaining (#1035)",id:"correct-this-in-optional-chaining-1035",children:[]}]},{value:"spack (#1016, #1031, #1034)",id:"spack-1016-1031-1034",children:[]},{value:"Performance improvement",id:"performance-improvement",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"new-features"},"New features"),Object(a.b)("h3",{id:"jsx-pragma-1015"},"jsx pragma (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1015"},"#1015"),")"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://swc-project.github.io/"},"swc")," finally suports jsx pragma, which is required to use some libraries like ",Object(a.b)("a",{parentName:"p",href:"https://emotion.sh/docs/introduction"},"emotion.sh"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement\n/** @jsx jsx */\nimport { css, jsx } from "@emotion/core";\n\nconst color = "white";\n\nrender(\n  <div\n    css={css`\n      padding: 32px;\n      background-color: hotpink;\n      font-size: 24px;\n      border-radius: 4px;\n      &:hover {\n        color: ${color};\n      }\n    `}\n  >\n    Hover to change color.\n  </div>\n);\n')),Object(a.b)("h3",{id:"bingint-literal-type-1020"},"BingInt literal type (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1020"},"#1020"),")"),Object(a.b)("p",null,"I didn't know that it is valid syntax, but the code below is validl, and ",Object(a.b)("a",{parentName:"p",href:"https://swc-project.github.io/"},"swc")," now supports it."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const a: 1000n = 1000n;\n")),Object(a.b)("h3",{id:"dynamic-imports-in-non-es6-modules-1028"},"Dynamic imports in non-es6 modules (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1028"},"#1028"),")"),Object(a.b)("p",null,"Dynamic imports are not widely supported, so it should be transcompiled."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'describe("foo", () => {\n  it("should import", async () => {\n    expect.assertions(1);\n\n    const { FOO } = await import("./foo");\n\n    expect(FOO).toBe(true);\n  });\n});\n')),Object(a.b)("p",null,"is now compiled as"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'describe("foo", () => {\n  it("should import", async () => {\n    expect.assertions(1);\n\n    const { FOO } = await Promise.resolve().then(function () {\n      return require("./foo");\n    });\n\n    expect(FOO).toBe(true);\n  });\n});\n')),Object(a.b)("p",null,"if the module config is common js."),Object(a.b)("h3",{id:"block-scoping-1029"},"Block scoping (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1029"},"#1029"),")"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"this")," is now correctly handled in the loops."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"class C {\n  m() {\n    for (let x = 0; x < 10; x++) console.log(this, (y) => y != x);\n  }\n}\n")),Object(a.b)("p",null,"Also, you can now mutate the index variable while iterating."),Object(a.b)("p",null,"e.g."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < 5; i++) {\n  console.log(\n    i++,\n    [2].every((x) => x != i)\n  );\n}\n")),Object(a.b)("h3",{id:"fixer-binary-expression-in-callee-of-new-1030"},"fixer: binary expression in callee of new (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1030"},"#1030"),")"),Object(a.b)("p",null,"Previously ",Object(a.b)("a",{parentName:"p",href:"https://swc-project.github.io/"},"swc")," miscompiled"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"return new (P || (P = Promise))(function (resolve, reject) {\n  // ....\n});\n")),Object(a.b)("p",null,"into"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"return (\n  new P() ||\n  (P = Promise)(function (resolve, reject) {\n    // ....\n  })\n);\n")),Object(a.b)("p",null,"which is wrong. Now it's fixed and ",Object(a.b)("a",{parentName:"p",href:"https://swc-project.github.io/"},"swc")," emits correct output."),Object(a.b)("h3",{id:"support-for-large-binary-expressions-1032"},"Support for large binary expressions (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1032"},"#1032"),")"),Object(a.b)("p",null,"I fixed the code generator, parser, typescript stripper, fixer pass, resolver pass and hygiene pass to handle very large binary expressions."),Object(a.b)("p",null,"As a result, ",Object(a.b)("a",{parentName:"p",href:"https://swc-project.github.io/"},"swc")," can now compile very large binary expressions like those in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/use-seedling/seedling/blob/3c92c53b9fa2038a934d7cc5f646e726215147ef/src/css/prose.ts"},"seedlings")),Object(a.b)("h3",{id:"correct-this-in-optional-chaining-1035"},"Correct this in optional chaining (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/1035"},"#1035"),")"),Object(a.b)("p",null,"Previously, ",Object(a.b)("a",{parentName:"p",href:"https://swc-project.github.io/"},"swc")," miscompiled"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"a.focus?.();\n")),Object(a.b)("p",null,"into"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'"use strict";\nvar ref;\n(ref = a.focus) === null || ref === void 0 ? void 0 : ref.call(ref);\n')),Object(a.b)("p",null,"which is wrong. It should be"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'"use strict";\nvar ref;\n(ref = a.focus) === null || ref === void 0 ? void 0 : ref.call(a);\n')),Object(a.b)("p",null,"and ",Object(a.b)("a",{parentName:"p",href:"https://swc-project.github.io/"},"swc")," now emits correct code."),Object(a.b)("h2",{id:"spack-1016-1031-1034"},"spack (",Object(a.b)("a",{parentName:"h2",href:"https://github.com/swc-project/swc/pull/1016"},"#1016"),", ",Object(a.b)("a",{parentName:"h2",href:"https://github.com/swc-project/swc/pull/1031"},"#1031"),", ",Object(a.b)("a",{parentName:"h2",href:"https://github.com/swc-project/swc/pull/1034"},"#1034"),")"),Object(a.b)("p",null,"I did very hard work on it, and many edge cases are fixed. I don't think it's production ready yet, but it will be in a near future."),Object(a.b)("p",null,"As a side note, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc/pull/1016"},"#1016")," is about ecmascript imports and ",Object(a.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc/pull/1031"},"#1031")," and ",Object(a.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc/pull/1034"},"#0134")," are about complex reexports and common js support, respectively."),Object(a.b)("h2",{id:"performance-improvement"},"Performance improvement"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://swc-project.github.io/"},"swc")," becomes faster and it will be much faster with the next version. Its performance is similar to it of ",Object(a.b)("a",{parentName:"p",href:"https://github.com/evanw/esbuild"},"esbuild"),", even though there are so many low-hanging fruits."),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc/milestone/129?closed=1"},"Full change log")))}l.isMDXComponent=!0},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,h=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return n?c.a.createElement(h,i(i({ref:t},p),{},{components:n})):c.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);