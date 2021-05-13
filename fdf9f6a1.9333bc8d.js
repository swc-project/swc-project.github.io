(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{333:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(340)),c={title:"Changelog: swc v1.2.21",author:"DongYoon Kang",authorURL:"http://github.com/kdy1",authorFBID:0x5af8dbecdbce},s={permalink:"/blog/2020/08/24/swc-1.2.21",source:"@site/blog/2020-08-24-swc-1.2.21.md",description:"General improvements",date:"2020-08-24T00:00:00.000Z",tags:[],title:"Changelog: swc v1.2.21",readingTime:1.425,truncated:!1,prevItem:{title:"Changelog: swc v1.2.22",permalink:"/blog/2020/08/31/swc-1.2.22"},nextItem:{title:"Changelog: swc v1.2.20",permalink:"/blog/2020/08/15/swc-1.2.20"}},i=[{value:"General improvements",id:"general-improvements",children:[{value:"Support optional named tuple elements (#982)",id:"support-optional-named-tuple-elements-982",children:[]},{value:"Better error messages (#980)",id:"better-error-messages-980",children:[]}]},{value:"Performance improvement",id:"performance-improvement",children:[{value:"Performance of swc is improved (#992)",id:"performance-of-swc-is-improved-992",children:[]},{value:"sse2 is enabled",id:"sse2-is-enabled",children:[]},{value:"Performance of spack is improved (#992, #972)",id:"performance-of-spack-is-improved-992-972",children:[]},{value:"Binary size is reduced (#973)",id:"binary-size-is-reduced-973",children:[]}]}],l={toc:i};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general-improvements"},"General improvements"),Object(a.b)("h3",{id:"support-optional-named-tuple-elements-982"},"Support optional named tuple elements (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/982"},"#982"),")"),Object(a.b)("p",null,"TypeScript 4 allows"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"type Foo = [first: number, second?: string, ...rest: any[]];\n")),Object(a.b)("p",null,"and ",Object(a.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc"},"swc")," now supports it."),Object(a.b)("h3",{id:"better-error-messages-980"},"Better error messages (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/980"},"#980"),")"),Object(a.b)("p",null,"Error messages were crpytic, mainly because I'm too lazy. Anyway, it's finally got improved."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"error: Unexpected token Some(Semi)\n --\x3e $DIR/tests/typescript-errors/type-arguments/input.ts:1:9\n  |\n1 | new A<T>;\n")),Object(a.b)("p",null,"becomes"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"error: Unexpected token `;`. Expected this, import, async, function, [ for array literal, { for object literal, @ for decorator, function, class, null, true, false, number, bigint, string, regexp, ` for template literal, (, or an identifier\n --\x3e $DIR/tests/typescript-errors/type-arguments/input.ts:1:9\n  |\n1 | new A<T>;\n")),Object(a.b)("h2",{id:"performance-improvement"},"Performance improvement"),Object(a.b)("h3",{id:"performance-of-swc-is-improved-992"},"Performance of swc is improved (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/992"},"#992"),")"),Object(a.b)("p",null,"Previously, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/swc-project/swc"},"swc")," spend all time moving the memory with ",Object(a.b)("inlineCode",{parentName:"p"},"memmove"),". I've managed to remove some memmoves.\nAlso, panic cases are handled properly."),Object(a.b)("p",null,"For example, I changed code from"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-rust"},'\nlet prev = match self.cur.take() {\n    Some(t) => t,\n\n    None => unreachable!(\n        "Current token is `None`. Parser should not call bump()without knowing current \\\n          token"\n    ),\n};\n')),Object(a.b)("p",null,"to"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-rust"},'\n#[cold]\n#[inline(never)]\nfn invalid_state() -> ! {\n    unreachable!(\n        "Current token is `None`. Parser should not call bump() without knowing current \\\n          token"\n    )\n}\n\nlet prev = match self.cur.take() {\n    Some(t) => t,\n\n    None => invalid_state(),\n};\n')),Object(a.b)("p",null,"This technique aids cpu cache issue."),Object(a.b)("h3",{id:"sse2-is-enabled"},"sse2 is enabled"),Object(a.b)("p",null,"It drastically reduces times used to memmove."),Object(a.b)("h3",{id:"performance-of-spack-is-improved-992-972"},"Performance of spack is improved (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/992"},"#992"),", ",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/972"},"#972"),")"),Object(a.b)("p",null,"Some design flaws are fixed, it's fully parallelzed, and it does not transform files from node_modules."),Object(a.b)("h3",{id:"binary-size-is-reduced-973"},"Binary size is reduced (",Object(a.b)("a",{parentName:"h3",href:"https://github.com/swc-project/swc/pull/973"},"#973"),")"),Object(a.b)("p",null,"Some useless allocations are removed, some memmoves are removed.\nAlso, merging of reexports in spack now works in parallel manner."),Object(a.b)("hr",null))}p.isMDXComponent=!0},340:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),b=n,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||a;return r?o.a.createElement(d,s(s({ref:t},l),{},{components:r})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);