"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[420],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3688:function(e,t,n){n.d(t,{S:function(){return E}});var r=n(7294);function a(e){return e&&e.origin?e.origin:"https://stackblitz.com"}function o(){return Math.random().toString(36).substring(7)}function i(e){var t="";return e?(e.forceEmbedLayout&&(t+="embed=1"),e.clickToLoad&&(t+=(t.length?"&":"")+"ctl=1"),e.openFile&&(t+=(t.length?"&":"")+"file="+e.openFile),!e.view||"preview"!==e.view&&"editor"!==e.view||(t+=(t.length?"&":"")+"view="+e.view),e.theme&&(t+=(t.length?"&":"")+"theme="+e.theme),e.hideExplorer&&(t+=(t.length?"&":"")+"hideExplorer=1"),e.hideNavigation&&(t+=(t.length?"&":"")+"hideNavigation=1;"),e.hideDevTools&&(t+=(t.length?"&":"")+"hidedevtools=1"),e.initialPath&&(t+=(t.length?"&":"")+"initialpath="+encodeURIComponent(e.initialPath)),"number"==typeof e.devToolsHeight&&e.devToolsHeight>0&&e.devToolsHeight<100&&(t+=(t.length?"&":"")+"devtoolsheight="+e.devToolsHeight),t.length?"?"+t:t):t}function s(e,t,n){if(null===e.parentNode)throw new Error("Invalid Element");t.id=e.id,p(t,n),e.parentNode.replaceChild(t,e)}function l(e){if("string"==typeof e){var t=document.getElementById(e);if(null!==t)return t}else if(e instanceof HTMLElement)return e;throw new Error("Invalid Element")}function c(e){return e&&!1===e.newWindow?"_self":"_blank"}function p(e,t){t&&(t.hasOwnProperty("height")&&(e.height=""+t.height),t.hasOwnProperty("width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}var u=function(e){var t=this;this.pending={},this.port=e,this.port.onmessage=function(e){if(e.data.payload.__reqid){var n=e.data.payload.__reqid,r=e.data.payload.__success;if(t.pending[n]){if(delete e.data.payload.__reqid,delete e.data.payload.__success,r){var a=0===Object.keys(e.data.payload).length&&e.data.payload.constructor===Object?null:e.data.payload;t.pending[n].resolve(a)}else{var o=e.data.payload.error?e.data.type+": "+e.data.payload.error:e.data.type;t.pending[n].reject(o)}delete t.pending[n]}}}};u.prototype.request=function(e){var t=this,n=o();return new Promise((function(r,a){t.pending[n]={resolve:r,reject:a},e.payload.__reqid=n,t.port.postMessage(e)}))};var d=function(e,t){var n=this;this.rdc=new u(e),this.preview={},Object.defineProperty(this.preview,"origin",{value:t.previewOrigin,writable:!1}),this.editor={openFile:function(e){return n.rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})}}};d.prototype.applyFsDiff=function(e){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},d.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},d.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var h=[],f=function(e){var t=this;this.id=o(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){n.data.action&&"SDK_INIT_SUCCESS"===n.data.action&&n.data.id===t.id&&(t.vm=new d(n.ports[0],n.data.payload),e(t.vm),o())},a=function(){t.element.contentWindow&&t.element.contentWindow.postMessage({action:"SDK_INIT",id:t.id},"*")};function o(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),a();var i=0,s=window.setInterval((function(){if(t.vm)o();else{if(i>=20)return o(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void h.forEach((function(e,n){e.id===t.id&&h.splice(n,1)}));i++,a()}}),500)})),h.push(this)},m=["typescript","create-react-app","angular-cli","javascript","polymer","vue"];function g(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function y(e){-1===m.indexOf(e.template)&&console.warn("Unsupported project template, must be one of: "+m.join(", "));var t=document.createElement("form");return t.method="POST",t.setAttribute("style","display:none;"),t.appendChild(g("project[title]",e.title)),t.appendChild(g("project[description]",e.description)),t.appendChild(g("project[template]",e.template)),e.tags&&e.tags.forEach((function(e){t.appendChild(g("project[tags][]",e))})),e.dependencies&&t.appendChild(g("project[dependencies]",JSON.stringify(e.dependencies))),e.settings&&t.appendChild(g("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(n){t.appendChild(g("project[files]["+n+"]",e.files[n]))})),t}function v(e,t){var n=y(e);return n.action=a(t)+"/run"+i(t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}function S(e,t){var n=y(e);n.action=a(t)+"/run"+i(t),n.target=c(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}var b={connect:function(e){if(!e||!e.contentWindow)return Promise.reject("Provided element is not an iframe.");var t=function(e){var t=e instanceof Element?"element":"id";return h.find((function(n){return n[t]===e}))||null}(e);return t?t.pending:new f(e).pending},openGithubProject:function(e,t){window.open(a(t)+"/github/"+e+i(t),c(t))},openProject:function(e,t){S(e,t)},openProjectId:function(e,t){window.open(a(t)+"/edit/"+e+i(t),c(t))},embedGithubProject:function(e,t,n){var r=l(e),o=document.createElement("iframe");return o.src=a(n)+"/github/"+t+i(n),s(r,o,n),b.connect(o)},embedProject:function(e,t,n){var r=l(e),a=v(t,n),o=document.createElement("iframe");return s(r,o,n),o.contentDocument&&o.contentDocument.write(a),b.connect(o)},embedProjectId:function(e,t,n){var r=l(e),o=document.createElement("iframe");return o.src=a(n)+"/edit/"+t+i(n),s(r,o,n),b.connect(o)}},w=b,k=n(5350),P={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function E(e){var t=e.src,n=e.packages,a=void 0===n?[]:n,o=(0,r.useRef)(),i=["core","rxjs"].concat(a),s=(0,k.Z)().isDarkTheme;return(0,r.useEffect)((function(){var e=i.reduce((function(e,t){return Object.assign(e,P[t]),e}),{});w.embedProject(o.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:s?"dark":"light",height:"500px"})}),[]),r.createElement("section",{style:{height:"500px"}},r.createElement("div",{ref:o}))}},2924:function(e,t,n){var r=n(7294).createContext(void 0);t.Z=r},5350:function(e,t,n){var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},4800:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(3688),s=["components"],l={},c="Persist State",p={unversionedId:"features/persist-state",id:"features/persist-state",isDocsHomePage:!1,title:"Persist State",description:"The persistState() function gives you the ability to persist some of the app\u2019s state, by saving it to localStorage/sessionStorage or anything that implements the StorageEngine API, and restore it after a refresh.",source:"@site/docs/features/persist-state.mdx",sourceDirName:"features",slug:"/features/persist-state",permalink:"/elf/docs/features/persist-state",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/persist-state.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Pagination",permalink:"/elf/docs/features/pagination"},next:{title:"State History",permalink:"/elf/docs/features/history"}},u=[{value:"Async Support",id:"async-support",children:[],level:2},{value:"Excluding keys from the state",id:"excluding-keys-from-the-state",children:[],level:2}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"persist-state"},"Persist State"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"persistState()")," function gives you the ability to persist some of the app\u2019s state, by saving it to ",(0,o.kt)("inlineCode",{parentName:"p"},"localStorage/sessionStorage")," or anything that implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"StorageEngine")," API, and restore it after a refresh."),(0,o.kt)("p",null,"First, you need to install the package by using the CLI command ",(0,o.kt)("inlineCode",{parentName:"p"},"elf-cli install")," and selecting the persist-state package, or via npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/elf-persist-state\n")),(0,o.kt)("p",null,"To use it you should call the ",(0,o.kt)("inlineCode",{parentName:"p"},"persistState()")," function, passing the store and the options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Store, createState, withProps, select } from '@ngneat/elf';\nimport {\n  persistState,\n  localStorageStrategy,\n  sessionStorageStrategy,\n} from '@ngneat/elf-persist-state';\n\ninterface AuthProps {\n  user: { id: string } | null;\n}\n\nconst { state, config } = createState(withProps<AuthProps>({ user: null }));\n\nconst authStore = new Store({ state, name, config });\n\nexport const persist = persistState(authStore, {\n  key: 'auth',\n  storage: localStorageStrategy,\n});\n\nexport const user$ = authStore.pipe(select((state) => state.user));\n")),(0,o.kt)("p",null,"As the second parameter you should pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"Options")," object, which can be used to define the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storage"),": an Object with ",(0,o.kt)("inlineCode",{parentName:"li"},"setItem"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"getItem")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"removeItem")," method for storing the state (required)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source"),": a method that receives the store and return what to save from it (by default - the entire store)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"preStoreInit"),": a method that run upon initializing the store with a saved value, used for any required modifications before the value is set."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key"),": the name under which the store state is saved (by default - the store name plus a ",(0,o.kt)("inlineCode",{parentName:"li"},"@store")," suffix)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"runGuard")," - returns whether the actual implementation should be run. The default is ",(0,o.kt)("inlineCode",{parentName:"li"},"() => typeof window !== 'undefined'"))),(0,o.kt)(i.S,{src:"import { Store, createState, withProps, select } from '@ngneat/elf';\nimport { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';\n\ninterface AuthProps {\n  user: { id: string } | null;\n}\n\nconst { state, config } = createState(withProps<AuthProps>({ user: null }));\n\nconst authStore = new Store({ state, name: 'auth', config });\n\nexport const persist = persistState(authStore, {\n  key: 'auth',\n  storage: localStorageStrategy,\n});\n\nconst user$ = authStore.pipe(select((state) => state.user));\n\nuser$.subscribe(console.log);\n\n// Should be the value after a refresh\nsetTimeout(() => {\n  authStore.update((state) => ({\n    ...state,\n    user: { id: '1' },\n  }));\n}, 1000);\n",packages:["persist"],mdxType:"LiveDemo"}),(0,o.kt)("br",null),"Elf also exposes the `initialized$` observable. This observable emits after Elf initialized the stores based on the storage's value. For example:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { persistState, localStorageStrategy } from '@ngneat/elf-persist-state';\n\nconst instance = persistState(todoStore, {\n  key: 'todos',\n  storage: localStorageStrategy,\n});\n\ninstance.initialized$.subscribe(console.log);\n")),(0,o.kt)("h2",{id:"async-support"},"Async Support"),(0,o.kt)("p",null,"This gives you the option to save a store\u2019s value to a persistent storage, such as indexDB, websql, or any other asynchronous API. Here\u2019s an example that leverages ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/localForage/localForage"},"localForage"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as localForage from 'localforage';\n\nlocalForage.config({\n  driver: localForage.INDEXEDDB,\n  name: 'myApp',\n  version: 1.0,\n  storeName: 'auth',\n});\n\nexport const persist = persistState(authStore, {\n  key: 'auth',\n  storage: localForage,\n});\n")),(0,o.kt)("h2",{id:"excluding-keys-from-the-state"},"Excluding keys from the state"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"excludeKeys()")," operator can be used to exclude keys from the state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { excludeKeys, persistState, localStorageStrategy } from '@ngneat/elf-persist-state';\n\npersistState(todoStore, {\n  key: 'todos',\n  storage: localStorageStrategy,\n  source: () => todoStore.pipe(\n    excludeKeys(['ids', 'entities'])\n  )\n});\n")))}h.isMDXComponent=!0}}]);