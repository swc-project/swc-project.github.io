/*! For license information please see 1df93b7f.40537158.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3237],{4530:(e,t,r)=>{r.d(t,{Q:()=>l});var o=r(2122),a=r(7294);const n="uppercase_1Pi1";function l(e){return a.createElement("a",(0,o.Z)({},e,{className:"button button--outline button--primary "+n}),e.children)}},1185:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(7294);const a="logo_218V",n="image_3tAA";function l(e){return o.createElement("a",{href:e.infoLink,className:a},o.createElement("img",{src:e.image,alt:e.caption,title:e.caption,className:n}))}},5792:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var o=r(7294),a=r(2049),n=r(2122),l=r(3552);function i(e){return o.createElement("div",{className:"container"},o.createElement("div",{id:e.id,className:"row"},e.children.map((function(e,t){return o.createElement("div",{key:t.toString(),className:"col"},o.createElement("h2",null,e.title),o.createElement("div",null,o.createElement("p",null,e.content)))}))))}function c(){return o.createElement(i,null,[{title:"Transcompile",content:"swc is a typescript / javascript compiler. It consumes a javascript or typescript file which uses recently added features like async-await and emits javascript code which can be executed on old browsers."},{title:"Super fast",content:"It's 20x faster than babel on single thread, and 70x faster on 4 core benchmark"},{title:"Bundling",content:"spack is a super-fast javascript bundler with tree shaking"}])}function s(e){var t=(0,o.useRef)(null);return(0,o.useEffect)((function(){Promise.resolve().then(r.bind(r,9984)).then((function(e){(0,e.render)(t.current,(function(e){t.current&&t.current.parentNode.replaceChild(e,t.current)}))}))}),[]),o.createElement("a",(0,n.Z)({},e,{ref:t}),e.title)}var d=r(4530),u=r(6706),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=function(e){return o.createElement("div",{className:u.Z.flexRowCenter},e.children)},r=function(t){return o.createElement("h2",{className:u.Z.flexColumnCenter},o.createElement("img",{src:e.customFields.twitterImage,width:"200",className:"padding-bottom--md"}),o.createElement("small",null,e.tagline))},a=function(e){return o.createElement("div",{className:"padding-vert--md "+u.Z.flexRowCenter},e.children)};return o.createElement(t,null,o.createElement("div",{className:"inner padding-vert--lg"},o.createElement(r,{siteConfig:e}),o.createElement(a,null,o.createElement(d.Q,{href:"/docs/installation"},"Getting started")),o.createElement(a,null,o.createElement("div",{className:"margin-right--sm"},o.createElement(s,{title:"Star",href:"https://github.com/swc-project/swc","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star swc-project/swc on GitHub"})),o.createElement(s,{title:"Fork",href:"https://github.com/swc-project/swc/fork","data-icon":"octicon-repo-forked","data-size":"large","data-show-count":"true","aria-label":"Fork swc-project/swc on GitHub"}))))},t}(o.Component);function p(){return o.createElement("div",null,o.createElement("div",{className:u.Z.flexColumnCenter},o.createElement("h2",null,"Gold Sponsors"),o.createElement("a",{href:"https://opencollective.com/swc"},o.createElement("object",{type:"image/svg+xml",data:"https://opencollective.com/swc/tiers/gold-sponsors.svg?avatarHeight=36&width=320"})),o.createElement("h2",null,"Silver Sponsors"),o.createElement("a",{href:"https://opencollective.com/swc"},o.createElement("object",{type:"image/svg+xml",data:"https://opencollective.com/swc/tiers/silver-sponsors.svg?avatarHeight=36&width=320"})),o.createElement("h2",null,"Bronze Sponsors"),o.createElement("a",{href:"https://opencollective.com/swc"},o.createElement("object",{type:"image/svg+xml",data:"https://opencollective.com/swc/tiers/bronze-sponsors.svg?avatarHeight=36&width=320"})),o.createElement("h2",null,"Backers"),o.createElement("a",{href:"https://opencollective.com/swc"},o.createElement("object",{type:"image/svg+xml",data:"https://opencollective.com/swc/tiers/backer.svg?avatarHeight=36&width=320"}))),o.createElement("div",{className:"padding-vert--lg "+u.Z.flexRowCenter},o.createElement(d.Q,{href:"https://opencollective.com/swc"},"Donate")))}var g=r(1185),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.config,r=e.language,a=void 0===r?"":r,l=(t.baseUrl,function(){var e;if(0===((null==(e=t.customFields)?void 0:e.users)||[]).length)return null;var r=t.customFields.users.filter((function(e){return e.pinned})).map((function(e){return o.createElement(g.A,(0,n.Z)({key:e.infoLink},e))}));return o.createElement("div",{className:u.Z.flexColumnCenter},o.createElement("h2",{className:"padding-vert--lg"},"Who is Using This?"),o.createElement("div",{className:u.Z.flexRowCenter},r),o.createElement("div",{className:"padding-vert--lg "+u.Z.flexRowCenter},o.createElement(d.Q,{href:"/users"},"More ",t.title," Users")))});return o.createElement("div",null,o.createElement(h,{siteConfig:t,language:a}),o.createElement("div",{className:"mainContainer"},o.createElement(c,null),o.createElement(l,null),o.createElement(p,null),o.createElement("iframe",{src:"https://opencollective.com/embed/swc/donate",style:{width:"100%",minHeight:"100vh"}})))},t}(o.Component);const m=function(e){return o.createElement(a.Z,null,o.createElement(f,e))}},9984:(e,t,r)=>{r.r(t),r.d(t,{render:()=>M});var o=window.document,a=window.Math,n=window.HTMLElement,l=window.XMLHttpRequest,i=function(e){return function(t,r,o){var a=e.createElement(t);if(null!=r)for(var n in r){var l=r[n];null!=l&&(null!=a[n]?a[n]=l:a.setAttribute(n,l))}if(null!=o)for(var i=0,c=o.length;i<c;i++){var s=o[i];a.appendChild("string"==typeof s?e.createTextNode(s):s)}return a}},c=i(o),s=function(e,t){return{}.hasOwnProperty.call(e,t)},d=function(e){return(""+e).toLowerCase()},u="github.com",h=l&&"prototype"in l&&"withCredentials"in l.prototype,p=h&&n&&"attachShadow"in n.prototype&&!("prototype"in n.prototype.attachShadow),g=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},f=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},m={light:".btn{color:#24292e;background-color:#eff3f6;border-color:#cfd3d6;border-color:rgba(27,31,35,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd0;border-color:rgba(27,31,35,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#cacdd0;border-color:rgba(27,31,35,.15);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,35,.15)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#c9d1d9;background-color:#1a1e23;border-color:#30363d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#21262d;border-color:#30363d}.social-count:focus,.social-count:hover{color:#58a6ff}.octicon-heart{color:#bf4b8a}",dark_dimmed:".btn{color:#adbac7;background-color:#30363d;border-color:#444c56;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#373e47;border-color:#444c56}.social-count:focus,.social-count:hover{color:#539bf5}.octicon-heart{color:#ae4c82}"},v=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+m[s(m,t)?t:e]+"}"},b=function(e){if(null==e)return m.light;if(s(m,e))return m[e];var t=function(e,t,r,o){null==t&&(t="&"),null==r&&(r="="),null==o&&(o=window.decodeURIComponent);for(var a={},n=e.split(t),l=0,i=n.length;l<i;l++){var c=n[l];if(""!==c){var s=c.split(r);a[o(s[0])]=null!=s[1]?o(s.slice(1).join(r)):void 0}}return a}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return m[s(m,t["no-preference"])?t["no-preference"]:"light"]+v("light",t.light)+v("dark",t.dark)},w={"comment-discussion":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>'}}},download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},package:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>'}}},play:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}}},k=function(e,t){e=d(e).replace(/^octicon-/,""),s(w,e)||(e="mark-github");var r=t>=24&&24 in w[e].heights?24:16,o=w[e].heights[r];return'<svg viewBox="0 0 '+o.width+" "+r+'" width="'+t*o.width/r+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+o.path+"</svg>"},x={},E=function(e,t){var r=x[e]||(x[e]=[]);if(!(r.push(t)>1)){var o=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete x[e];t=r.shift();)t.apply(null,arguments)}));if(h){var a=new l;g(a,"abort",o),g(a,"error",o),g(a,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void o(t)}o(200!==this.status,e)})),a.open("GET",e),a.send()}else{var n=this||window;n._=function(e){n._=null,o(200!==e.meta.status,e.data)};var c=i(n.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){n._&&n._({meta:{}})};g(c,"load",s),g(c,"error",s),c.readyState&&function(e,t,r){var o="readystatechange",a=function(){if(t.test(e.readyState))return f(e,o,a),r.apply(this,arguments)};g(e,o,a)}(c,/de|m/,s),n.document.getElementsByTagName("head")[0].appendChild(c)}}},C=function(e,t,r){var o=i(e.ownerDocument),a=e.appendChild(o("style",{type:"text/css"})),n="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}"+b(t["data-color-scheme"]);a.styleSheet?a.styleSheet.cssText=n:a.appendChild(e.ownerDocument.createTextNode(n));var l="large"===d(t["data-size"]),c=o("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:k(t["data-icon"],l?16:14)+"&nbsp;"},[o("span",{},[t["data-text"]||""])]),s=e.appendChild(o("div",{className:"widget"+(l?" widget-lg":"")},[c])),h=c.hostname.replace(/\.$/,"");if(("."+h).substring(h.length-u.length)!=="."+u)return c.removeAttribute("href"),void r(s);var p=(" /"+c.pathname).split(/\/+/);if(((h===u||h==="gist."+u)&&"archive"===p[3]||h===u&&"releases"===p[3]&&("download"===p[4]||"latest"===p[4]&&"download"===p[5])||h==="codeload."+u)&&(c.target="_top"),"true"===d(t["data-show-count"])&&h===u&&"marketplace"!==p[1]&&"sponsors"!==p[1]&&"orgs"!==p[1]&&"users"!==p[1]&&"-"!==p[1]){var g,f;if(!p[2]&&p[1])f="followers",g="?tab=followers";else if(!p[3]&&p[2])f="stargazers_count",g="/stargazers";else if(p[4]||"subscription"!==p[3])if(p[4]||"fork"!==p[3]){if("issues"!==p[3])return void r(s);f="open_issues_count",g="/issues"}else f="forks_count",g="/network/members";else f="subscribers_count",g="/watchers";var m=p[2]?"/repos/"+p[1]+"/"+p[2]:"/users/"+p[1];E.call(this,"https://api.github.com"+m,(function(e,t){if(!e){var a=t[f];s.appendChild(o("a",{className:"social-count",href:t.html_url+g,rel:"noopener",target:"_blank","aria-label":a+" "+f.replace(/_count$/,"").replace("_"," ").slice(0,a<2?-1:void 0)+" on GitHub"},[(""+a).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(s)}))}else r(s)},y=window.devicePixelRatio||1,z=function(e){return(y>1?a.ceil(a.round(e*y)/y*2)/2:a.ceil(e))||0},F=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},M=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},r=["icon","color-scheme","text","size","show-count"],o=0,a=r.length;o<a;o++){var n="data-"+r[o];t[n]=e.getAttribute(n)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),p){var r=c("span");C(r.attachShadow({mode:"closed"}),e,(function(){t(r)}))}else{var n=c("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});F(n,[0,0]),n.style.border="none";var l=function(){var r,i=n.contentWindow;try{r=i.document.body}catch(c){return void o.body.appendChild(n.parentNode.removeChild(n))}f(n,"load",l),C.call(i,r,e,(function(r){var o=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var o=e.getBoundingClientRect();t=a.max(t,z(o.width)),r=a.max(r,z(o.height))}return[t,r]}(r);n.parentNode.removeChild(n),function(e,t,r){var o=function(){return f(e,t,o),r.apply(this,arguments)};g(e,t,o)}(n,"load",(function(){F(n,o)})),n.src="https://unpkg.com/github-buttons@2.18.1/dist/buttons.html#"+(n.name=function(e,t,r,o){null==t&&(t="&"),null==r&&(r="="),null==o&&(o=window.encodeURIComponent);var a=[];for(var n in e){var l=e[n];null!=l&&a.push(o(n)+r+o(l))}return a.join(t)}(e)),t(n)}))};g(n,"load",l),o.body.appendChild(n)}}},6706:(e,t,r)=>{r.d(t,{Z:()=>o});const o={flexRowCenter:"flexRowCenter_M3C-",flexColumnCenter:"flexColumnCenter_36TZ"}}}]);