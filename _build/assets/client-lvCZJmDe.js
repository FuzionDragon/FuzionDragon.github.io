const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_...404_-BGzaa1mN.js","assets/routing-DaLkj7W0.js","assets/components-v1zxOCSr.js","assets/about-CQCnAN40.js","assets/contacts-D35PDscu.js","assets/index-HbGJQCrx.js","assets/projects-Darc3kxz.js"])))=>i.map(i=>d[i]);
import{c as J,a as S,b as X,d as Y,e as m,g as Q,R as ee,u as te,s as M,f as re,S as H,o as ne,h as oe,i as se,j as ae,k as ie,l as V,m as P,n as le,p as ce,q as ue,r as de,t as fe,v as he,w as E,x as R,y as A,z as q,A as x,B as v,C as pe,D as me,E as ge,F as T,G as be,H as we,I as Ee}from"./routing-DaLkj7W0.js";const C="Invariant Violation",{setPrototypeOf:ke=function(e,r){return e.__proto__=r,e}}=Object;class I extends Error{framesToPop=1;name=C;constructor(r=C){super(typeof r=="number"?`${C}: ${r} (see https://github.com/apollographql/invariant-packages)`:r),ke(this,I.prototype)}}function L(e,r){if(!e)throw new I(r)}const ve=/^[A-Za-z]:\//;function $e(e=""){return e&&e.replace(/\\/g,"/").replace(ve,r=>r.toUpperCase())}const ye=/^[/\\]{2}/,_e=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Re=/^[A-Za-z]:$/,Ae=function(e){if(e.length===0)return".";e=$e(e);const r=e.match(ye),t=N(e),n=e[e.length-1]==="/";return e=xe(e,!t),e.length===0?t?"/":n?"./":".":(n&&(e+="/"),Re.test(e)&&(e+="/"),r?t?`//${e}`:`//./${e}`:t&&!N(e)?`/${e}`:e)},K=function(...e){if(e.length===0)return".";let r;for(const t of e)t&&t.length>0&&(r===void 0?r=t:r+=`/${t}`);return r===void 0?".":Ae(r.replace(/\/\/+/g,"/"))};function xe(e,r){let t="",n=0,o=-1,s=0,c=null;for(let a=0;a<=e.length;++a){if(a<e.length)c=e[a];else{if(c==="/")break;c="/"}if(c==="/"){if(!(o===a-1||s===1))if(s===2){if(t.length<2||n!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){const l=t.lastIndexOf("/");l===-1?(t="",n=0):(t=t.slice(0,l),n=t.length-1-t.lastIndexOf("/")),o=a,s=0;continue}else if(t.length>0){t="",n=0,o=a,s=0;continue}}r&&(t+=t.length>0?"/..":"..",n=2)}else t.length>0?t+=`/${e.slice(o+1,a)}`:t=e.slice(o+1,a),n=a-o-1;o=a,s=0}else c==="."&&s!==-1?++s:s=-1}return t}const N=function(e){return _e.test(e)};function Te(e){return`virtual:${e}`}function Se(e){return e.handler?.endsWith(".html")?N(e.handler)?e.handler:K(e.root,e.handler):`$vinxi/handler/${e.name}`}const Pe=new Proxy({},{get(e,r){return L(typeof r=="string","Bundler name should be a string"),{name:r,type:"client",handler:Te(Se({name:r})),baseURL:"/_build",chunks:new Proxy({},{get(t,n){L(typeof n=="string","Chunk expected");let o=K("/_build",n+".mjs");return{import(){return import(o)},output:{path:o}}}}),inputs:new Proxy({},{get(t,n){L(typeof n=="string","Input must be string");let o=window.manifest[n].output;return{async import(){return import(o)},async assets(){return window.manifest[n].assets},output:{path:o}}}})}}});globalThis.MANIFEST=Pe;const Ce=e=>r=>{const{base:t}=r,n=J(()=>r.children),o=S(()=>X(n(),r.base||""));let s;const c=Y(e,o,()=>s,{base:t,singleFlight:r.singleFlight,transformUrl:r.transformUrl});return e.create&&e.create(c),m(ee.Provider,{value:c,get children(){return m(Le,{routerState:c,get root(){return r.root},get preload(){return r.rootPreload||r.rootLoad},get children(){return[S(()=>(s=Q())&&null),m(Ne,{routerState:c,get branches(){return o()}})]}})}})};function Le(e){const r=e.routerState.location,t=e.routerState.params,n=S(()=>e.preload&&te(()=>{M(!0),e.preload({params:t,location:r,intent:re()||"initial"}),M(!1)}));return m(H,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>m(o,{params:t,location:r,get data(){return n()},get children(){return e.children}})})}function Ne(e){const r=[];let t;const n=S(ne(e.routerState.matches,(o,s,c)=>{let a=s&&o.length===s.length;const l=[];for(let i=0,p=o.length;i<p;i++){const h=s&&s[i],b=o[i];c&&h&&b.route.key===h.route.key?l[i]=c[i]:(a=!1,r[i]&&r[i](),se(w=>{r[i]=w,l[i]=ae(e.routerState,l[i-1]||e.routerState.base,U(()=>n()[i+1]),()=>e.routerState.matches()[i])}))}return r.splice(o.length).forEach(i=>i()),c&&a?c:(t=l[0],l)}));return U(()=>n()&&t)()}const U=e=>()=>m(H,{get when(){return e()},keyed:!0,children:r=>m(oe.Provider,{value:r,get children(){return r.outlet()}})});function Ie([e,r],t,n){return[e,o=>r(n(o))]}function De(e){let r=!1;const t=o=>typeof o=="string"?{value:o}:o,n=Ie(ie(t(e.get()),{equals:(o,s)=>o.value===s.value&&o.state===s.state}),void 0,o=>(!r&&e.set(o),P.registry&&!P.done&&(P.done=!0),o));return e.init&&V(e.init((o=e.get())=>{r=!0,n[1](t(o)),r=!1})),Ce({signal:n,create:e.create,utils:e.utils})}function Oe(e,r,t){return e.addEventListener(r,t),()=>e.removeEventListener(r,t)}function We(e,r){const t=e&&document.getElementById(e);t?t.scrollIntoView():r&&window.scrollTo(0,0)}const Me=new Map;function Ue(e=!0,r=!1,t="/_server",n){return o=>{const s=o.base.path(),c=o.navigatorFactory(o.base);let a,l;function i(u){return u.namespaceURI==="http://www.w3.org/2000/svg"}function p(u){if(u.defaultPrevented||u.button!==0||u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)return;const d=u.composedPath().find(W=>W instanceof Node&&W.nodeName.toUpperCase()==="A");if(!d||r&&!d.hasAttribute("link"))return;const g=i(d),f=g?d.href.baseVal:d.href;if((g?d.target.baseVal:d.target)||!f&&!d.hasAttribute("state"))return;const $=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||$&&$.includes("external"))return;const _=g?new URL(f,document.baseURI):new URL(f);if(!(_.origin!==window.location.origin||s&&_.pathname&&!_.pathname.toLowerCase().startsWith(s.toLowerCase())))return[d,_]}function h(u){const d=p(u);if(!d)return;const[g,f]=d,O=o.parsePath(f.pathname+f.search+f.hash),$=g.getAttribute("state");u.preventDefault(),c(O,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:$?JSON.parse($):void 0})}function b(u){const d=p(u);if(!d)return;const[g,f]=d;n&&(f.pathname=n(f.pathname)),o.preloadRoute(f,g.getAttribute("preload")!=="false")}function w(u){clearTimeout(a);const d=p(u);if(!d)return l=null;const[g,f]=d;l!==g&&(n&&(f.pathname=n(f.pathname)),a=setTimeout(()=>{o.preloadRoute(f,g.getAttribute("preload")!=="false"),l=g},20))}function D(u){if(u.defaultPrevented)return;let d=u.submitter&&u.submitter.hasAttribute("formaction")?u.submitter.getAttribute("formaction"):u.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const f=new URL(d,ce);if(d=o.parsePath(f.pathname+f.search),!d.startsWith(t))return}if(u.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const g=Me.get(d);if(g){u.preventDefault();const f=new FormData(u.target,u.submitter);g.call({r:o,f:u.target},u.target.enctype==="multipart/form-data"?f:new URLSearchParams(f))}}le(["click","submit"]),document.addEventListener("click",h),e&&(document.addEventListener("mousemove",w,{passive:!0}),document.addEventListener("focusin",b,{passive:!0}),document.addEventListener("touchstart",b,{passive:!0})),document.addEventListener("submit",D),V(()=>{document.removeEventListener("click",h),e&&(document.removeEventListener("mousemove",w),document.removeEventListener("focusin",b),document.removeEventListener("touchstart",b)),document.removeEventListener("submit",D)})}}function je(e){const r=()=>{const n=window.location.pathname.replace(/^\/+/,"/")+window.location.search,o=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:n+window.location.hash,state:o}},t=fe();return De({get:r,set({value:n,replace:o,scroll:s,state:c}){o?window.history.replaceState(ue(c),"",n):window.history.pushState(c,"",n),We(decodeURIComponent(window.location.hash.slice(1)),s),de()},init:n=>Oe(window,"popstate",he(n,o=>{if(o&&o<0)return!t.confirm(o);{const s=r();return!t.confirm(s.value,{state:s.state})}})),create:Ue(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:n=>window.history.go(n),beforeLeave:t}})(e)}function Fe(e){e.forEach(r=>{if(!r.attrs.href)return;let t=document.head.querySelector(`link[href="${r.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",r.attrs.href),document.head.appendChild(t))})}var Be=v("<style>"),ze=v("<link>"),He=v("<script> "),Ve=v("<noscript>");const qe={style:e=>(()=>{var r=E(Be);return R(r,A(()=>e.attrs),!1,!0),q(r,()=>e.children),x(),r})(),link:e=>(()=>{var r=E(ze);return R(r,A(()=>e.attrs),!1,!1),x(),r})(),script:e=>e.attrs.src?(()=>{var r=E(He);return R(r,A(()=>e.attrs,{get id(){return e.key}}),!1,!0),x(),r})():null,noscript:e=>(()=>{var r=E(Ve);return R(r,A(()=>e.attrs),!1,!0),x(),r})()};function Ke(e,r){let{tag:t,attrs:{key:n,...o}={key:void 0},children:s}=e;return qe[t]({attrs:{...o,nonce:r},key:n,children:s})}function Ge(e,r,t,n="default"){return pe(async()=>{{const s=(await e.import())[n],a=(await r.inputs?.[e.src].assets()).filter(i=>i.tag==="style"||i.attrs.rel==="stylesheet");return typeof window<"u"&&Fe(a),{default:i=>[...a.map(p=>Ke(p)),m(s,i)]}}})}const k={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Ze(e={}){const r={options:e,rootNode:G(),staticRoutesMap:{}},t=n=>e.strictTrailingSlash?n:n.replace(/\/$/,"")||"/";if(e.routes)for(const n in e.routes)j(r,t(n),e.routes[n]);return{ctx:r,lookup:n=>Je(r,t(n)),insert:(n,o)=>j(r,t(n),o),remove:n=>Xe(r,t(n))}}function Je(e,r){const t=e.staticRoutesMap[r];if(t)return t.data;const n=r.split("/"),o={};let s=!1,c=null,a=e.rootNode,l=null;for(let i=0;i<n.length;i++){const p=n[i];a.wildcardChildNode!==null&&(c=a.wildcardChildNode,l=n.slice(i).join("/"));const h=a.children.get(p);if(h===void 0){if(a&&a.placeholderChildren.length>1){const b=n.length-i;a=a.placeholderChildren.find(w=>w.maxDepth===b)||null}else a=a.placeholderChildren[0]||null;if(!a)break;a.paramName&&(o[a.paramName]=p),s=!0}else a=h}return(a===null||a.data===null)&&c!==null&&(a=c,o[a.paramName||"_"]=l,s=!0),a?s?{...a.data,params:s?o:void 0}:a.data:null}function j(e,r,t){let n=!0;const o=r.split("/");let s=e.rootNode,c=0;const a=[s];for(const l of o){let i;if(i=s.children.get(l))s=i;else{const p=Ye(l);i=G({type:p,parent:s}),s.children.set(l,i),p===k.PLACEHOLDER?(i.paramName=l==="*"?`_${c++}`:l.slice(1),s.placeholderChildren.push(i),n=!1):p===k.WILDCARD&&(s.wildcardChildNode=i,i.paramName=l.slice(3)||"_",n=!1),a.push(i),s=i}}for(const[l,i]of a.entries())i.maxDepth=Math.max(a.length-l,i.maxDepth||0);return s.data=t,n===!0&&(e.staticRoutesMap[r]=s),s}function Xe(e,r){let t=!1;const n=r.split("/");let o=e.rootNode;for(const s of n)if(o=o.children.get(s),!o)return t;if(o.data){const s=n.at(-1)||"";o.data=null,Object.keys(o.children).length===0&&o.parent&&(o.parent.children.delete(s),o.parent.wildcardChildNode=null,o.parent.placeholderChildren=[]),t=!0}return t}function G(e={}){return{type:e.type||k.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Ye(e){return e.startsWith("**")?k.WILDCARD:e[0]===":"||e==="*"?k.PLACEHOLDER:k.NORMAL}const Qe="modulepreload",et=function(e){return"/_build/"+e},F={},y=function(r,t,n){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),a=c?.nonce||c?.getAttribute("nonce");o=Promise.allSettled(t.map(l=>{if(l=et(l),l in F)return;F[l]=!0;const i=l.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const h=document.createElement("link");if(h.rel=i?"stylesheet":Qe,i||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),i)return new Promise((b,w)=>{h.addEventListener("load",b),h.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(c){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=c,window.dispatchEvent(a),!a.defaultPrevented)throw c}return o.then(c=>{for(const a of c||[])a.status==="rejected"&&s(a.reason);return r().catch(s)})},Z=[{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>y(()=>import("./_...404_-BGzaa1mN.js"),__vite__mapDeps([0,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].tsx?pick=default&pick=$css"].output.path)},path:"/*404",filePath:"/home/runner/work/Tinkerers-Workshop/Tinkerers-Workshop/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>y(()=>import("./about-CQCnAN40.js"),__vite__mapDeps([3,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/about.tsx?pick=default&pick=$css"].output.path)},path:"/about",filePath:"/home/runner/work/Tinkerers-Workshop/Tinkerers-Workshop/src/routes/about.tsx"},{page:!0,$component:{src:"src/routes/contacts.tsx?pick=default&pick=$css",build:()=>y(()=>import("./contacts-D35PDscu.js"),__vite__mapDeps([4,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/contacts.tsx?pick=default&pick=$css"].output.path)},path:"/contacts",filePath:"/home/runner/work/Tinkerers-Workshop/Tinkerers-Workshop/src/routes/contacts.tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>y(()=>import("./index-HbGJQCrx.js"),__vite__mapDeps([5,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/home/runner/work/Tinkerers-Workshop/Tinkerers-Workshop/src/routes/index.tsx"},{page:!0,$component:{src:"src/routes/projects.tsx?pick=default&pick=$css",build:()=>y(()=>import("./projects-Darc3kxz.js"),__vite__mapDeps([6,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/projects.tsx?pick=default&pick=$css"].output.path)},path:"/projects",filePath:"/home/runner/work/Tinkerers-Workshop/Tinkerers-Workshop/src/routes/projects.tsx"}],tt=rt(Z.filter(e=>e.page));function rt(e){function r(t,n,o,s){const c=Object.values(t).find(a=>o.startsWith(a.id+"/"));return c?(r(c.children||(c.children=[]),n,o.slice(c.id.length)),t):(t.push({...n,id:o,path:o.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),t)}return e.sort((t,n)=>t.path.length-n.path.length).reduce((t,n)=>r(t,n,n.path,n.path),[])}function nt(e){return e.$HEAD||e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Ze({routes:Z.reduce((e,r)=>{if(!nt(r))return e;let t=r.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(n,o)=>`**:${o}`).split("/").map(n=>n.startsWith(":")||n.startsWith("*")?n:encodeURIComponent(n)).join("/");if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${r.path}"`);return e[t]={route:r},e},{})});function ot(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:t.$component&&Ge(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return tt.map(e)}let B;const st=()=>B||(B=ot());var at=v('<nav class=bg-sky-800><ul class="container flex items-center p-3 text-gray-200"><li><a href=/>Home</a></li><li><a href=/projects>Projects</a></li><li><a href=/about>About</a></li><li><a href=/contacts>Contacts');function it(){const e=me(),r=t=>t==e.pathname?"border-sky-600":"border-transparent hover:border-sky-600";return(()=>{var t=E(at),n=t.firstChild,o=n.firstChild,s=o.nextSibling,c=s.nextSibling,a=c.nextSibling;return ge(l=>{var i=`border-b-2 ${r("/")} mx-1.5 sm:mx-6`,p=`border-b-2 ${r("/projects")} mx-1.5 sm:mx-6`,h=`border-b-2 ${r("/about")} mx-1.5 sm:mx-6`,b=`border-b-2 ${r("/contacts")} mx-1.5 sm:mx-6`;return i!==l.e&&T(o,l.e=i),p!==l.t&&T(s,l.t=p),h!==l.a&&T(c,l.a=h),b!==l.o&&T(a,l.o=b),l},{e:void 0,t:void 0,a:void 0,o:void 0}),t})()}function lt(){return m(je,{get base(){return""},root:e=>[m(it,{}),m(be,{get children(){return e.children}})],get children(){return m(st,{})}})}const ct=e=>null;var ut=v("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const dt=e=>{const r="Error | Uncaught Client Exception";return m(we,{fallback:t=>(console.error(t),[(()=>{var n=E(ut);return q(n,r),n})(),m(ct,{code:500})]),get children(){return e.children}})};function ft(e,r){return Ee(e,r)}function z(e){return e.children}function ht(){return m(z,{get children(){return m(z,{get children(){return m(dt,{get children(){return m(lt,{})}})}})}})}ft(()=>m(ht,{}),document.getElementById("app"));const mt=void 0;export{mt as default};