const __vite__fileDeps=["assets/slidev/1-D5WXuUfj.js","assets/modules/vue-FaL-ku9S.js","assets/slidev/context-CaWHzXaC.js","assets/modules/shiki-USyX0HkO.js","assets/modules/shiki-DeiVkiDa.css","assets/slidev/2-CU8l2vp2.js","assets/slidev/VClick-6P5rUXC4.js","assets/slidev/default-CKXm7kFE.js","assets/slidev/3-B-6DTyXJ.js","assets/slidev/4-COsdhABT.js","assets/slidev/CodeBlockWrapper-CethWbnR.js","assets/modules/unplugin-icons-C1bRfjrx.js","assets/slidev/5-Cj0oEhQ6.js","assets/slidev/6-DO3ZLhm3.js","assets/slidev/Mermaid-DAAtGbE8.js","assets/modules/file-saver-EUMWMpoS.js","assets/slidev/7-BYbfucmH.js","assets/slidev/8-ChUiqJeA.js","assets/slidev/9-CbD4amDo.js","assets/slidev/10-XlS30lvJ.js","assets/slidev/11-Bl5fV9Qi.js","assets/slidev/12-DIAnnT5M.js","assets/slidev/13-CM2d0K_H.js","assets/slidev/14-Do9iae8v.js","assets/slidev/15-DPME5rf7.js","assets/slidev/16-NcMOBFTK.js","assets/17-BKvaoi9a.js","assets/slidev/18-CW2JGmr3.js","assets/slidev/entry-DCvxvG2D.js","assets/entry-DFVZucWk.css","assets/slidev/overview-LlxK5s6_.js","assets/slidev/DrawingPreview-CfIaO1ZE.js","assets/DrawingPreview-B_1g_kmH.css","assets/slidev/IconButton-ZxXqk-jM.js","assets/slidev/NoteDisplay-BFTFczOs.js","assets/NoteDisplay-C6AkVv8T.css","assets/slidev/ClicksSlider-Bh_Z0hPu.js","assets/ClicksSlider-DYpxHk94.css","assets/slidev/notes-S2ffVqfs.js","assets/slidev/presenter-DrP0Wm7F.js","assets/slidev/ContextMenu-Dp7SkbTy.js","assets/ContextMenu-CvLg4A9z.css","assets/slidev/DrawingControls-FDsRBO2F.js","assets/DrawingControls-C5T1oZL5.css","assets/presenter-DrrSjh4o.css","assets/slidev/play-l0-a6L0z.js","assets/play-CoA43pdi.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{t as A,y as g,n as bt,z as Ws,A as mn,B as ss,C as Ge,D as Q,E as zs,G as Us,H as Bs,I as rs,J as L,K as qs,L as Js,o as as,b as Ks,M as gn,N as xt,O as Ys,P as os,Q as Qs,R as Xs,S as ne,T as is,U as Et,d as Zs,r as er,c as tr,V as nr,W as sr,X as rr,Y as ar,Z as or,_ as ir,$ as lr,a0 as cr,a1 as ur,a2 as fr,a3 as dr,a4 as pr,a5 as hr,u as mr}from"./modules/vue-FaL-ku9S.js";import{T as gr}from"./modules/shiki-USyX0HkO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function nt(n,e,t){return Math.min(t,Math.max(e,n))}function yr(...n){return wr(n).reduce((e,t)=>e+t,0)}function vr(n){return n=n??[],Array.isArray(n)?n:[n]}function wr(n){return vr(n).flat(1)}function kr(n){return Array.from(new Set(n))}function En(...n){let e,t,s;n.length===1?(e=0,s=1,[t]=n):[e,t,s=1]=n;const r=[];let a=e;for(;a<t;)r.push(a),a+=s||1;return r}function br(n){return n!=null}function Sr(n,e){return Object.fromEntries(Object.entries(n).map(([t,s])=>e(t,s)).filter(br))}function ji(n){return Object.keys(n).forEach(e=>n[e]===void 0?delete n[e]:{}),n}const E={theme:"default",title:"GenAIScript",titleTemplate:"%s",addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:"local",monacoTypesAdditionalPackages:[],monacoRunAdditionalDeps:[],download:!1,export:{},info:`<h2>GenAIScript</h2>
<p>Scripting for Generative AI.<br/>
<a href="https://microsoft.github.io/genaiscript/" target="_blank">Docs</a> | <a href="https://github.com/microsoft/genaiscript/" target="_blank">GitHub</a></p>
`,highlighter:"shiki",twoslash:!0,lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},editor:!0,class:"text-center",mdc:!0,layout:"center",slidesTitle:"GenAIScript"},Fi="build",ls=A(E.aspectRatio??16/9),_r=A(E.canvasWidth??980),Hi=g(()=>Math.ceil(_r.value/ls.value)),Lr=g(()=>Sr(E.themeConfig||{},(n,e)=>[`--slidev-theme-${n}`,e])),Gt=E.slidesTitle;function Zt(n,e={},t){for(const s in n){const r=n[s],a=t?`${t}:${s}`:s;typeof r=="object"&&r!==null?Zt(r,e,a):typeof r=="function"&&(e[a]=r)}return e}const Mr={run:n=>n()},Ar=()=>Mr,cs=typeof console.createTask<"u"?console.createTask:Ar;function Cr(n,e){const t=e.shift(),s=cs(t);return n.reduce((r,a)=>r.then(()=>s.run(()=>a(...e))),Promise.resolve())}function Tr(n,e){const t=e.shift(),s=cs(t);return Promise.all(n.map(r=>s.run(()=>r(...e))))}function Vt(n,e){for(const t of[...n])t(e)}class Or{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,s={}){if(!e||typeof t!="function")return()=>{};const r=e;let a;for(;this._deprecatedHooks[e];)a=this._deprecatedHooks[e],e=a.to;if(a&&!s.allowDeprecated){let o=a.message;o||(o=`${r} hook has been deprecated`+(a.to?`, please use ${a.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let s,r=(...a)=>(typeof s=="function"&&s(),s=void 0,r=void 0,t(...a));return s=this.hook(e,r),s}removeHook(e,t){if(this._hooks[e]){const s=this._hooks[e].indexOf(t);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const s=this._hooks[e]||[];delete this._hooks[e];for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=Zt(e),s=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const t=Zt(e);for(const s in t)this.removeHook(s,t[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(Cr,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(Tr,e,...t)}callHookWith(e,t,...s){const r=this._before||this._after?{name:t,args:s,context:{}}:void 0;this._before&&Vt(this._before,r);const a=e(t in this._hooks?[...this._hooks[t]]:[],s);return a instanceof Promise?a.finally(()=>{this._after&&r&&Vt(this._after,r)}):(this._after&&r&&Vt(this._after,r),a)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function $r(){return new Or}function Ir(n){return Array.isArray(n)?n:[n]}const xr=["title","titleTemplate","script","style","noscript"],dt=["base","meta","link","style","script","noscript"],Er=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Pr=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],us=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],Dr=typeof window<"u";function yn(n){let e=9;for(let t=0;t<n.length;)e=Math.imul(e^n.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Pn(n){return n._h||yn(n._d?n._d:`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([e,t])=>`${e}:${String(t)}`).join(",")}`)}function fs(n,e){const{props:t,tag:s}=n;if(Pr.includes(s))return s;if(s==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const a of r)if(typeof t[a]<"u"){const o=String(t[a]);return`${s}:${a}:${o}`}return!1}function Dn(n,e){return n==null?e||null:typeof n=="function"?n(e):n}async function Nr(n,e,t){const s={tag:n,props:await ds(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(n)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(n))};return us.forEach(r=>{const a=typeof s.props[r]<"u"?s.props[r]:t[r];typeof a<"u"&&((!["innerHTML","textContent","children"].includes(r)||xr.includes(s.tag))&&(s[r==="children"?"innerHTML":r]=a),delete s.props[r])}),s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(r=>({...s,props:{...s.props,content:r}})):s}function Rr(n,e){var s;const t=n==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,r])=>r).map(([r,a])=>n==="style"?`${r}:${a}`:r)),(s=Array.isArray(e)?e.join(t):e)==null?void 0:s.split(t).filter(r=>r.trim()).filter(Boolean).join(t)}async function ds(n,e){for(const t of Object.keys(n)){if(["class","style"].includes(t)){n[t]=Rr(t,n[t]);continue}if(n[t]instanceof Promise&&(n[t]=await n[t]),!e&&!us.includes(t)){const s=String(n[t]),r=t.startsWith("data-");s==="true"||s===""?n[t]=r?"true":!0:n[t]||(r&&s==="false"?n[t]="false":delete n[t])}}return n}const jr=10;async function Fr(n){const e=[];return Object.entries(n.resolvedInput).filter(([t,s])=>typeof s<"u"&&Er.includes(t)).forEach(([t,s])=>{const r=Ir(s);e.push(...r.map(a=>Nr(t,a,n)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((t,s)=>(t._e=n._i,n.mode&&(t._m=n.mode),t._p=(n._i<<jr)+s,t))}const Nn={base:-10,title:10},Rn={critical:-80,high:-10,low:20};function St(n){let e=100;const t=n.tagPriority;return typeof t=="number"?t:(n.tag==="meta"?(n.props["http-equiv"]==="content-security-policy"&&(e=-30),n.props.charset&&(e=-20),n.props.name==="viewport"&&(e=-15)):n.tag==="link"&&n.props.rel==="preconnect"?e=20:n.tag in Nn&&(e=Nn[n.tag]),typeof t=="string"&&t in Rn?e+Rn[t]:e)}const Hr=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],jn=["onload","onerror","onabort","onprogress","onloadstart"],ie="%separator";function pt(n,e,t){if(typeof n!="string"||!n.includes("%"))return n;function s(o){let i;return["s","pageTitle"].includes(o)?i=e.pageTitle:o.includes(".")?i=o.split(".").reduce((l,c)=>l&&l[c]||void 0,e):i=e[o],typeof i<"u"?(i||"").replace(/"/g,'\\"'):!1}let r=n;try{r=decodeURI(n)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const i=s(o.slice(1));typeof i=="string"&&(n=n.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,c)=>`${i}${c}`).trim())}),n.includes(ie)&&(n.endsWith(ie)&&(n=n.slice(0,-ie.length).trim()),n.startsWith(ie)&&(n=n.slice(ie.length).trim()),n=n.replace(new RegExp(`\\${ie}\\s*\\${ie}`,"g"),ie),n=pt(n,{separator:t},t)),n}async function Gr(n,e={}){var u;const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const s={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const r=(await n.resolveTags()).map(f=>({tag:f,id:dt.includes(f.tag)?Pn(f):f.tag,shouldRender:!0}));let a=n._dom;if(!a){a={elMap:{htmlAttrs:t.documentElement,bodyAttrs:t.body}};for(const f of["body","head"]){const d=(u=t[f])==null?void 0:u.children,p=[];for(const m of[...d].filter(h=>dt.includes(h.tagName.toLowerCase()))){const h={tag:m.tagName.toLowerCase(),props:await ds(m.getAttributeNames().reduce((w,k)=>({...w,[k]:m.getAttribute(k)}),{})),innerHTML:m.innerHTML};let y=1,v=fs(h);for(;v&&p.find(w=>w._d===v);)v=`${v}:${y++}`;h._d=v||void 0,p.push(h),a.elMap[m.getAttribute("data-hid")||Pn(h)]=m}}}a.pendingSideEffects={...a.sideEffects||{}},a.sideEffects={};function o(f,d,p){const m=`${f}:${d}`;a.sideEffects[m]=p,delete a.pendingSideEffects[m]}function i({id:f,$el:d,tag:p}){const m=p.tag.endsWith("Attrs");a.elMap[f]=d,m||(["textContent","innerHTML"].forEach(h=>{p[h]&&p[h]!==d[h]&&(d[h]=p[h])}),o(f,"el",()=>{var h;(h=a.elMap[f])==null||h.remove(),delete a.elMap[f]}));for(const[h,y]of Object.entries(p._eventHandlers||{}))d.getAttribute(`data-${h}`)!==""&&((p.tag==="bodyAttrs"?t.defaultView:d).addEventListener(h.replace("on",""),y.bind(d)),d.setAttribute(`data-${h}`,""));Object.entries(p.props).forEach(([h,y])=>{const v=`attr:${h}`;if(h==="class")for(const w of(y||"").split(" ").filter(Boolean))m&&o(f,`${v}:${w}`,()=>d.classList.remove(w)),!d.classList.contains(w)&&d.classList.add(w);else if(h==="style")for(const w of(y||"").split(";").filter(Boolean)){const[k,...b]=w.split(":").map(M=>M.trim());o(f,`${v}:${w}:${k}`,()=>{d.style.removeProperty(k)}),d.style.setProperty(k,b.join(":"))}else d.getAttribute(h)!==y&&d.setAttribute(h,y===!0?"":String(y)),m&&o(f,v,()=>d.removeAttribute(h))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of r){const{tag:d,shouldRender:p,id:m}=f;if(p){if(d.tag==="title"){t.title=d.textContent;continue}f.$el=f.$el||a.elMap[m],f.$el?i(f):dt.includes(d.tag)&&l.push(f)}}for(const f of l){const d=f.tag.tagPosition||"head";f.$el=t.createElement(f.tag.tag),i(f),c[d]=c[d]||t.createDocumentFragment(),c[d].appendChild(f.$el)}for(const f of r)await n.hooks.callHook("dom:renderTag",f,t,o);c.head&&t.head.appendChild(c.head),c.bodyOpen&&t.body.insertBefore(c.bodyOpen,t.body.firstChild),c.bodyClose&&t.body.appendChild(c.bodyClose),Object.values(a.pendingSideEffects).forEach(f=>f()),n._dom=a,n.dirty=!1,await n.hooks.callHook("dom:rendered",{renders:r})}async function Vr(n,e={}){const t=e.delayFn||(s=>setTimeout(s,10));return n._domUpdatePromise=n._domUpdatePromise||new Promise(s=>t(async()=>{await Gr(n,e),delete n._domUpdatePromise,s()}))}function Wr(n){return e=>{var s,r;const t=((r=(s=e.resolvedOptions.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return t&&e.push(JSON.parse(t)),{mode:"client",hooks:{"entries:updated":function(a){Vr(a,n)}}}}}const zr=["templateParams","htmlAttrs","bodyAttrs"],Ur={hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(s=>{n.props[s]&&(n.key=n.props[s],delete n.props[s])});const t=fs(n)||(n.key?`${n.tag}:${n.key}`:!1);t&&(n._d=t)},"tags:resolve":function(n){const e={};n.tags.forEach(s=>{const r=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,a=e[r];if(a){let i=s==null?void 0:s.tagDuplicateStrategy;if(!i&&zr.includes(s.tag)&&(i="merge"),i==="merge"){const l=a.props;["class","style"].forEach(c=>{l[c]&&(s.props[c]?(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),s.props[c]=`${l[c]} ${s.props[c]}`):s.props[c]=l[c])}),e[r].props={...l,...s.props};return}else if(s._e===a._e){a._duped=a._duped||[],s._d=`${a._d}:${a._duped.length+1}`,a._duped.push(s);return}else if(St(s)>St(a))return}const o=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(dt.includes(s.tag)&&o===0){delete e[r];return}e[r]=s});const t=[];Object.values(e).forEach(s=>{const r=s._duped;delete s._duped,t.push(s),r&&t.push(...r)}),n.tags=t,n.tags=n.tags.filter(s=>!(s.tag==="meta"&&(s.props.name||s.props.property)&&!s.props.content))}}},Br={mode:"server",hooks:{"tags:resolve":function(n){const e={};n.tags.filter(t=>["titleTemplate","templateParams","title"].includes(t.tag)&&t._m==="server").forEach(t=>{e[t.tag]=t.tag.startsWith("title")?t.textContent:t.props}),Object.keys(e).length&&n.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},qr=["script","link","bodyAttrs"],Jr=n=>({hooks:{"tags:resolve":function(e){for(const t of e.tags.filter(s=>qr.includes(s.tag)))Object.entries(t.props).forEach(([s,r])=>{s.startsWith("on")&&typeof r=="function"&&(n.ssr&&jn.includes(s)?t.props[s]=`this.dataset.${s}fired = true`:delete t.props[s],t._eventHandlers=t._eventHandlers||{},t._eventHandlers[s]=r)}),n.ssr&&t._eventHandlers&&(t.props.src||t.props.href)&&(t.key=t.key||yn(t.props.src||t.props.href))},"dom:renderTag":function({$el:e,tag:t}){var s,r;for(const a of Object.keys((e==null?void 0:e.dataset)||{}).filter(o=>jn.some(i=>`${i}fired`===o))){const o=a.replace("fired","");(r=(s=t._eventHandlers)==null?void 0:s[o])==null||r.call(e,new Event(o.replace("on","")))}}}}),Kr=["link","style","script","noscript"],Yr={hooks:{"tag:normalise":({tag:n})=>{n.key&&Kr.includes(n.tag)&&(n.props["data-hid"]=n._h=yn(n.key))}}},Qr={hooks:{"tags:resolve":n=>{const e=t=>{var s;return(s=n.tags.find(r=>r._d===t))==null?void 0:s._p};for(const{prefix:t,offset:s}of Hr)for(const r of n.tags.filter(a=>typeof a.tagPriority=="string"&&a.tagPriority.startsWith(t))){const a=e(r.tagPriority.replace(t,""));typeof a<"u"&&(r._p=a+s)}n.tags.sort((t,s)=>t._p-s._p).sort((t,s)=>St(t)-St(s))}}},Xr={meta:"content",link:"href",htmlAttrs:"lang"},Zr=n=>({hooks:{"tags:resolve":e=>{var i;const{tags:t}=e,s=(i=t.find(l=>l.tag==="title"))==null?void 0:i.textContent,r=t.findIndex(l=>l.tag==="templateParams"),a=r!==-1?t[r].props:{},o=a.separator||"|";delete a.separator,a.pageTitle=pt(a.pageTitle||s||"",a,o);for(const l of t.filter(c=>c.processTemplateParams!==!1)){const c=Xr[l.tag];c&&typeof l.props[c]=="string"?l.props[c]=pt(l.props[c],a,o):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(u=>{typeof l[u]=="string"&&(l[u]=pt(l[u],a,o))})}n._templateParams=a,n._separator=o,e.tags=t.filter(l=>l.tag!=="templateParams")}}}),ea={hooks:{"tags:resolve":n=>{const{tags:e}=n;let t=e.findIndex(r=>r.tag==="titleTemplate");const s=e.findIndex(r=>r.tag==="title");if(s!==-1&&t!==-1){const r=Dn(e[t].textContent,e[s].textContent);r!==null?e[s].textContent=r||e[s].textContent:delete e[s]}else if(t!==-1){const r=Dn(e[t].textContent);r!==null&&(e[t].textContent=r,e[t].tag="title",t=-1)}t!==-1&&delete e[t],n.tags=e.filter(Boolean)}}},ta={hooks:{"tags:afterResolve":function(n){for(const e of n.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let ps;function na(n={}){const e=sa(n);return e.use(Wr()),ps=e}function Fn(n,e){return!n||n==="server"&&e||n==="client"&&!e}function sa(n={}){const e=$r();e.addHooks(n.hooks||{}),n.document=n.document||(Dr?document:void 0);const t=!n.document,s=()=>{i.dirty=!0,e.callHook("entries:updated",i)};let r=0,a=[];const o=[],i={plugins:o,dirty:!1,resolvedOptions:n,hooks:e,headEntries(){return a},use(l){const c=typeof l=="function"?l(i):l;(!c.key||!o.some(u=>u.key===c.key))&&(o.push(c),Fn(c.mode,t)&&e.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:r++,input:l,...c};return Fn(u.mode,t)&&(a.push(u),s()),{dispose(){a=a.filter(f=>f._i!==u._i),e.callHook("entries:updated",i),s()},patch(f){a=a.map(d=>(d._i===u._i&&(d.input=u.input=f),d)),s()}}},async resolveTags(){const l={tags:[],entries:[...a]};await e.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const f of await Fr(c)){const d={tag:f,entry:c,resolvedOptions:i.resolvedOptions};await e.callHook("tag:normalise",d),l.tags.push(d.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:t};return[Ur,Br,Jr,Yr,Qr,Zr,ea,ta,...(n==null?void 0:n.plugins)||[]].forEach(l=>i.use(l)),i.hooks.callHook("init",i),i}function ra(){return ps}const aa=Ws.startsWith("3");function oa(n){return typeof n=="function"?n():mn(n)}function _t(n,e=""){if(n instanceof Promise)return n;const t=oa(n);return!n||!t?t:Array.isArray(t)?t.map(s=>_t(s,e)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([s,r])=>s==="titleTemplate"||s.startsWith("on")?[s,mn(r)]:[s,_t(r,s)])):t}const ia={hooks:{"entries:resolve":function(n){for(const e of n.entries)e.resolvedInput=_t(e.input)}}},hs="usehead";function la(n){return{install(t){aa&&(t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(hs,n))}}.install}function ca(n={}){n.domDelayFn=n.domDelayFn||(t=>bt(()=>setTimeout(()=>t(),0)));const e=na(n);return e.use(ia),e.install=la(e),e}const Hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gn="__unhead_injection_handler__";function ua(){if(Gn in Hn)return Hn[Gn]();const n=ss(hs);return n||console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results."),n||ra()}function fa(n,e={}){const t=e.head||ua();if(t)return t.ssr?t.push(n,e):da(t,n,e)}function da(n,e,t={}){const s=A(!1),r=A({});Ge(()=>{r.value=s.value?{}:_t(e)});const a=n.push(r.value,t);return Q(r,i=>{a.patch(i)}),rs()&&(zs(()=>{a.dispose()}),Us(()=>{s.value=!0}),Bs(()=>{s.value=!1})),a}function ms(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function X(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!1})}const xe=L({page:0,clicks:0});let pa=[],ha=[];X(xe,"$syncUp",!0);X(xe,"$syncDown",!0);X(xe,"$paused",!1);X(xe,"$onSet",n=>pa.push(n));X(xe,"$onPatch",n=>ha.push(n));ms();X(xe,"$patch",async()=>!1);function gs(n,e,t=!1){const s=[];let r=!1,a=!1,o,i;const l=L(e);function c(p){s.push(p)}function u(p,m){l[p]!==m&&(clearTimeout(o),r=!0,l[p]=m,o=setTimeout(()=>r=!1,0))}function f(p){r||(clearTimeout(i),a=!0,Object.entries(p).forEach(([m,h])=>{l[m]=h}),i=setTimeout(()=>a=!1,0))}function d(p){let m;t?t&&window.addEventListener("storage",y=>{y&&y.key===p&&y.newValue&&f(JSON.parse(y.newValue))}):(m=new BroadcastChannel(p),m.addEventListener("message",y=>f(y.data)));function h(){!t&&m&&!a?m.postMessage(qs(l)):t&&!a&&window.localStorage.setItem(p,JSON.stringify(l)),r||s.forEach(y=>y(l))}if(Q(l,h,{deep:!0,flush:"sync"}),t){const y=window.localStorage.getItem(p);y&&f(JSON.parse(y))}}return{init:d,onPatch:c,patch:u,state:l}}const{init:ma,onPatch:ga,patch:qe,state:Gi}=gs(xe,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),Ee=L({});let ya=[],va=[];X(Ee,"$syncUp",!0);X(Ee,"$syncDown",!0);X(Ee,"$paused",!1);X(Ee,"$onSet",n=>ya.push(n));X(Ee,"$onPatch",n=>va.push(n));ms();X(Ee,"$patch",async()=>!1);const{init:wa,onPatch:Vi,patch:Wi,state:zi}=gs(Ee,{},!1),Pt="$$slidev-clicks-context",vn="$$slidev-page",ys="$$slidev-slide-element",ka="$$slidev-slide-scale",ba="$$slidev-context",Ui="$$slidev-route",wn="$$slidev-render-context",Sa="$$slidev-fontmatter",_a="$$slidev-slide-zoom",ht="slidev-vclick-target",Je="slidev-vclick-hidden",Ke="slidev-vclick-fade",Wt="slidev-vclick-hidden-explicitly",zt="slidev-vclick-current",Ut="slidev-vclick-prior",mt=999999,La=["localhost","127.0.0.1"],Ma=["clicks","clicksStart","disabled","hide","hideInToc","layout","level","preload","routeAlias","src","title","transition","zoom","dragPos"],Bi=[...Ma,"theme","titleTemplate","info","author","keywords","presenter","download","exportFilename","export","highlighter","lineNumbers","monaco","monacoTypesSource","monacoTypesAdditionalPackages","monacoRunAdditionalDeps","remoteAssets","selectable","record","colorSchema","routerMode","aspectRatio","canvasWidth","themeConfig","favicon","plantUmlServer","fonts","defaults","drawings","htmlAttrs","mdc","contextMenu"],kn=A(!1),bn=Symbol.for("yaml.alias"),Aa=Symbol.for("yaml.document"),Ie=Symbol.for("yaml.map"),vs=Symbol.for("yaml.pair"),Sn=Symbol.for("yaml.scalar"),at=Symbol.for("yaml.seq"),ae=Symbol.for("yaml.node.type"),We=n=>!!n&&typeof n=="object"&&n[ae]===bn,Dt=n=>!!n&&typeof n=="object"&&n[ae]===Aa,ws=n=>!!n&&typeof n=="object"&&n[ae]===Ie,H=n=>!!n&&typeof n=="object"&&n[ae]===vs,R=n=>!!n&&typeof n=="object"&&n[ae]===Sn,_n=n=>!!n&&typeof n=="object"&&n[ae]===at;function J(n){if(n&&typeof n=="object")switch(n[ae]){case Ie:case at:return!0}return!1}function B(n){if(n&&typeof n=="object")switch(n[ae]){case bn:case Ie:case Sn:case at:return!0}return!1}const Ca=n=>(R(n)||J(n))&&!!n.anchor,Te=Symbol("break visit"),Ta=Symbol("skip children"),Ze=Symbol("remove node");function st(n,e){const t=Oa(e);Dt(n)?Re(null,n.contents,t,Object.freeze([n]))===Ze&&(n.contents=null):Re(null,n,t,Object.freeze([]))}st.BREAK=Te;st.SKIP=Ta;st.REMOVE=Ze;function Re(n,e,t,s){const r=$a(n,e,t,s);if(B(r)||H(r))return Ia(n,s,r),Re(n,r,t,s);if(typeof r!="symbol"){if(J(e)){s=Object.freeze(s.concat(e));for(let a=0;a<e.items.length;++a){const o=Re(a,e.items[a],t,s);if(typeof o=="number")a=o-1;else{if(o===Te)return Te;o===Ze&&(e.items.splice(a,1),a-=1)}}}else if(H(e)){s=Object.freeze(s.concat(e));const a=Re("key",e.key,t,s);if(a===Te)return Te;a===Ze&&(e.key=null);const o=Re("value",e.value,t,s);if(o===Te)return Te;o===Ze&&(e.value=null)}}return r}function Oa(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function $a(n,e,t,s){var r,a,o,i,l;if(typeof t=="function")return t(n,e,s);if(ws(e))return(r=t.Map)==null?void 0:r.call(t,n,e,s);if(_n(e))return(a=t.Seq)==null?void 0:a.call(t,n,e,s);if(H(e))return(o=t.Pair)==null?void 0:o.call(t,n,e,s);if(R(e))return(i=t.Scalar)==null?void 0:i.call(t,n,e,s);if(We(e))return(l=t.Alias)==null?void 0:l.call(t,n,e,s)}function Ia(n,e,t){const s=e[e.length-1];if(J(s))s.items[n]=t;else if(H(s))n==="key"?s.key=t:s.value=t;else if(Dt(s))s.contents=t;else{const r=We(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${r} parent`)}}function ks(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function Xe(n,e,t,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let r=0,a=s.length;r<a;++r){const o=s[r],i=Xe(n,s,String(r),o);i===void 0?delete s[r]:i!==o&&(s[r]=i)}else if(s instanceof Map)for(const r of Array.from(s.keys())){const a=s.get(r),o=Xe(n,s,r,a);o===void 0?s.delete(r):o!==a&&s.set(r,o)}else if(s instanceof Set)for(const r of Array.from(s)){const a=Xe(n,s,r,r);a===void 0?s.delete(r):a!==r&&(s.delete(r),s.add(a))}else for(const[r,a]of Object.entries(s)){const o=Xe(n,s,r,a);o===void 0?delete s[r]:o!==a&&(s[r]=o)}return n.call(e,t,s)}function te(n,e,t){if(Array.isArray(n))return n.map((s,r)=>te(s,String(r),t));if(n&&typeof n.toJSON=="function"){if(!t||!Ca(n))return n.toJSON(e,t);const s={aliasCount:0,count:1,res:void 0};t.anchors.set(n,s),t.onCreate=a=>{s.res=a,delete t.onCreate};const r=n.toJSON(e,t);return t.onCreate&&t.onCreate(r),r}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class Ln{constructor(e){Object.defineProperty(this,ae,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:s,onAnchor:r,reviver:a}={}){if(!Dt(e))throw new TypeError("A document argument is required");const o={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},i=te(this,"",o);if(typeof r=="function")for(const{count:l,res:c}of o.anchors.values())r(c,l);return typeof a=="function"?Xe(a,{"":i},"",i):i}}class xa extends Ln{constructor(e){super(bn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let t;return st(e,{Node:(s,r)=>{if(r===this)return st.BREAK;r.anchor===this.source&&(t=r)}}),t}toJSON(e,t){if(!t)return{source:this.source};const{anchors:s,doc:r,maxAliasCount:a}=t,o=this.resolve(r);if(!o){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let i=s.get(o);if(i||(te(o,null,t),i=s.get(o)),!i||i.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(a>=0&&(i.count+=1,i.aliasCount===0&&(i.aliasCount=gt(r,o,s)),i.count*i.aliasCount>a)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return i.res}toString(e,t,s){const r=`*${this.source}`;if(e){if(ks(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const a=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(a)}if(e.implicitKey)return`${r} `}return r}}function gt(n,e,t){if(We(e)){const s=e.resolve(n),r=t&&s&&t.get(s);return r?r.count*r.aliasCount:0}else if(J(e)){let s=0;for(const r of e.items){const a=gt(n,r,t);a>s&&(s=a)}return s}else if(H(e)){const s=gt(n,e.key,t),r=gt(n,e.value,t);return Math.max(s,r)}return 1}const bs=n=>!n||typeof n!="function"&&typeof n!="object";class N extends Ln{constructor(e){super(Sn),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:te(this.value,e,t)}toString(){return String(this.value)}}N.BLOCK_FOLDED="BLOCK_FOLDED";N.BLOCK_LITERAL="BLOCK_LITERAL";N.PLAIN="PLAIN";N.QUOTE_DOUBLE="QUOTE_DOUBLE";N.QUOTE_SINGLE="QUOTE_SINGLE";function Ea(n,e,t){return t.find(s=>{var r;return((r=s.identify)==null?void 0:r.call(s,n))&&!s.format})}function Lt(n,e,t){var f,d,p;if(Dt(n)&&(n=n.contents),B(n))return n;if(H(n)){const m=(d=(f=t.schema[Ie]).createNode)==null?void 0:d.call(f,t.schema,null,t);return m.items.push(n),m}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:s,onAnchor:r,onTagObj:a,schema:o,sourceObjects:i}=t;let l;if(s&&n&&typeof n=="object"){if(l=i.get(n),l)return l.anchor||(l.anchor=r(n)),new xa(l.anchor);l={anchor:null,node:null},i.set(n,l)}let c=Ea(n,e,o.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const m=new N(n);return l&&(l.node=m),m}c=n instanceof Map?o[Ie]:Symbol.iterator in Object(n)?o[at]:o[Ie]}a&&(a(c),delete t.onTagObj);const u=c!=null&&c.createNode?c.createNode(t.schema,n,t):typeof((p=c==null?void 0:c.nodeClass)==null?void 0:p.from)=="function"?c.nodeClass.from(t.schema,n,t):new N(n);return c.default||(u.tag=c.tag),l&&(l.node=u),u}function Vn(n,e,t){let s=t;for(let r=e.length-1;r>=0;--r){const a=e[r];if(typeof a=="number"&&Number.isInteger(a)&&a>=0){const o=[];o[a]=s,s=o}else s=new Map([[a,s]])}return Lt(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const Pa=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class Mn extends Ln{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(s=>B(s)||H(s)?s.clone(e):s),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Pa(e))this.add(t);else{const[s,...r]=e,a=this.get(s,!0);if(J(a))a.addIn(r,t);else if(a===void 0&&this.schema)this.set(s,Vn(this.schema,r,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)}}deleteIn(e){const[t,...s]=e;if(s.length===0)return this.delete(t);const r=this.get(t,!0);if(J(r))return r.deleteIn(s);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)}getIn(e,t){const[s,...r]=e,a=this.get(s,!0);return r.length===0?!t&&R(a)?a.value:a:J(a)?a.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!H(t))return!1;const s=t.value;return s==null||e&&R(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[t,...s]=e;if(s.length===0)return this.has(t);const r=this.get(t,!0);return J(r)?r.hasIn(s):!1}setIn(e,t){const[s,...r]=e;if(r.length===0)this.set(s,t);else{const a=this.get(s,!0);if(J(a))a.setIn(r,t);else if(a===void 0&&this.schema)this.set(s,Vn(this.schema,r,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)}}}Mn.maxFlowStringSingleLineLength=60;const Da=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function rt(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const je=(n,e,t)=>n.endsWith(`
`)?rt(t,e):t.includes(`
`)?`
`+rt(t,e):(n.endsWith(" ")?"":" ")+t,Ss="flow",en="block",yt="quoted";function Nt(n,e,t="flow",{indentAtStart:s,lineWidth:r=80,minContentWidth:a=20,onFold:o,onOverflow:i}={}){if(!r||r<0)return n;const l=Math.max(1+a,1+r-e.length);if(n.length<=l)return n;const c=[],u={};let f=r-e.length;typeof s=="number"&&(s>r-Math.max(2,a)?c.push(0):f=r-s);let d,p,m=!1,h=-1,y=-1,v=-1;t===en&&(h=Wn(n,h,e.length),h!==-1&&(f=h+l));for(let k;k=n[h+=1];){if(t===yt&&k==="\\"){switch(y=h,n[h+1]){case"x":h+=3;break;case"u":h+=5;break;case"U":h+=9;break;default:h+=1}v=h}if(k===`
`)t===en&&(h=Wn(n,h,e.length)),f=h+e.length+l,d=void 0;else{if(k===" "&&p&&p!==" "&&p!==`
`&&p!=="	"){const b=n[h+1];b&&b!==" "&&b!==`
`&&b!=="	"&&(d=h)}if(h>=f)if(d)c.push(d),f=d+l,d=void 0;else if(t===yt){for(;p===" "||p==="	";)p=k,k=n[h+=1],m=!0;const b=h>v+1?h-2:y-1;if(u[b])return n;c.push(b),u[b]=!0,f=b+l,d=void 0}else m=!0}p=k}if(m&&i&&i(),c.length===0)return n;o&&o();let w=n.slice(0,c[0]);for(let k=0;k<c.length;++k){const b=c[k],M=c[k+1]||n.length;b===0?w=`
${e}${n.slice(0,M)}`:(t===yt&&u[b]&&(w+=`${n[b]}\\`),w+=`
${e}${n.slice(b+1,M)}`)}return w}function Wn(n,e,t){let s=e,r=e+1,a=n[r];for(;a===" "||a==="	";)if(e<r+t)a=n[++e];else{do a=n[++e];while(a&&a!==`
`);s=e,r=e+1,a=n[r]}return s}const Rt=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),jt=n=>/^(%|---|\.\.\.)/m.test(n);function Na(n,e,t){if(!e||e<0)return!1;const s=e-t,r=n.length;if(r<=s)return!1;for(let a=0,o=0;a<r;++a)if(n[a]===`
`){if(a-o>s)return!0;if(o=a+1,r-o<=s)return!1}return!0}function et(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:s}=e,r=e.options.doubleQuotedMinMultiLineLength,a=e.indent||(jt(n)?"  ":"");let o="",i=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(o+=t.slice(i,l)+"\\ ",l+=1,i=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{o+=t.slice(i,l);const u=t.substr(l+2,4);switch(u){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:u.substr(0,2)==="00"?o+="\\x"+u.substr(2):o+=t.substr(l,6)}l+=5,i=l+1}break;case"n":if(s||t[l+2]==='"'||t.length<r)l+=1;else{for(o+=t.slice(i,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)o+=`
`,l+=2;o+=a,t[l+2]===" "&&(o+="\\"),l+=1,i=l+1}break;default:l+=1}return o=i?o+t.slice(i):t,s?o:Nt(o,a,yt,Rt(e,!1))}function tn(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return et(n,e);const t=e.indent||(jt(n)?"  ":""),s="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?s:Nt(s,t,Ss,Rt(e,!1))}function Fe(n,e){const{singleQuote:t}=e.options;let s;if(t===!1)s=et;else{const r=n.includes('"'),a=n.includes("'");r&&!a?s=tn:a&&!r?s=et:s=t?tn:et}return s(n,e)}let nn;try{nn=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{nn=/\n+(?!\n|$)/g}function vt({comment:n,type:e,value:t},s,r,a){const{blockQuote:o,commentString:i,lineWidth:l}=s.options;if(!o||/\n[\t ]+$/.test(t)||/^\s*$/.test(t))return Fe(t,s);const c=s.indent||(s.forceBlockIndent||jt(t)?"  ":""),u=o==="literal"?!0:o==="folded"||e===N.BLOCK_FOLDED?!1:e===N.BLOCK_LITERAL?!0:!Na(t,l,c.length);if(!t)return u?`|
`:`>
`;let f,d;for(d=t.length;d>0;--d){const _=t[d-1];if(_!==`
`&&_!=="	"&&_!==" ")break}let p=t.substring(d);const m=p.indexOf(`
`);m===-1?f="-":t===p||m!==p.length-1?(f="+",a&&a()):f="",p&&(t=t.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p=p.replace(nn,`$&${c}`));let h=!1,y,v=-1;for(y=0;y<t.length;++y){const _=t[y];if(_===" ")h=!0;else if(_===`
`)v=y;else break}let w=t.substring(0,v<y?v+1:y);w&&(t=t.substring(w.length),w=w.replace(/\n+/g,`$&${c}`));let b=(u?"|":">")+(h?c?"2":"1":"")+f;if(n&&(b+=" "+i(n.replace(/ ?[\r\n]+/g," ")),r&&r()),u)return t=t.replace(/\n+/g,`$&${c}`),`${b}
${c}${w}${t}${p}`;t=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);const M=Nt(`${w}${t}${p}`,c,en,Rt(s,!0));return`${b}
${c}${M}`}function Ra(n,e,t,s){const{type:r,value:a}=n,{actualString:o,implicitKey:i,indent:l,indentStep:c,inFlow:u}=e;if(i&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return Fe(a,e);if(!a||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return i||u||!a.includes(`
`)?Fe(a,e):vt(n,e,t,s);if(!i&&!u&&r!==N.PLAIN&&a.includes(`
`))return vt(n,e,t,s);if(jt(a)){if(l==="")return e.forceBlockIndent=!0,vt(n,e,t,s);if(i&&l===c)return Fe(a,e)}const f=a.replace(/\n+/g,`$&
${l}`);if(o){const d=h=>{var y;return h.default&&h.tag!=="tag:yaml.org,2002:str"&&((y=h.test)==null?void 0:y.test(f))},{compat:p,tags:m}=e.doc.schema;if(m.some(d)||p!=null&&p.some(d))return Fe(a,e)}return i?f:Nt(f,l,Ss,Rt(e,!1))}function ja(n,e,t,s){const{implicitKey:r,inFlow:a}=e,o=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:i}=n;i!==N.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(i=N.QUOTE_DOUBLE);const l=u=>{switch(u){case N.BLOCK_FOLDED:case N.BLOCK_LITERAL:return r||a?Fe(o.value,e):vt(o,e,t,s);case N.QUOTE_DOUBLE:return et(o.value,e);case N.QUOTE_SINGLE:return tn(o.value,e);case N.PLAIN:return Ra(o,e,t,s);default:return null}};let c=l(i);if(c===null){const{defaultKeyType:u,defaultStringType:f}=e.options,d=r&&u||f;if(c=l(d),c===null)throw new Error(`Unsupported default string type ${d}`)}return c}function Fa(n,e){const t=Object.assign({blockQuote:!0,commentString:Da,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let s;switch(t.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:s,options:t}}function Ha(n,e){var r;if(e.tag){const a=n.filter(o=>o.tag===e.tag);if(a.length>0)return a.find(o=>o.format===e.format)??a[0]}let t,s;if(R(e)){s=e.value;const a=n.filter(o=>{var i;return(i=o.identify)==null?void 0:i.call(o,s)});t=a.find(o=>o.format===e.format)??a.find(o=>!o.format)}else s=e,t=n.find(a=>a.nodeClass&&s instanceof a.nodeClass);if(!t){const a=((r=s==null?void 0:s.constructor)==null?void 0:r.name)??typeof s;throw new Error(`Tag not resolved for ${a} value`)}return t}function Ga(n,e,{anchors:t,doc:s}){if(!s.directives)return"";const r=[],a=(R(n)||J(n))&&n.anchor;a&&ks(a)&&(t.add(a),r.push(`&${a}`));const o=n.tag?n.tag:e.default?null:e.tag;return o&&r.push(s.directives.tagString(o)),r.join(" ")}function Mt(n,e,t,s){var l;if(H(n))return n.toString(e,t,s);if(We(n)){if(e.doc.directives)return n.toString(e);if((l=e.resolvedAliases)!=null&&l.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let r;const a=B(n)?n:e.doc.createNode(n,{onTagObj:c=>r=c});r||(r=Ha(e.doc.schema.tags,a));const o=Ga(a,r,e);o.length>0&&(e.indentAtStart=(e.indentAtStart??0)+o.length+1);const i=typeof r.stringify=="function"?r.stringify(a,e,t,s):R(a)?ja(a,e,t,s):a.toString(e,t,s);return o?R(a)||i[0]==="{"||i[0]==="["?`${o} ${i}`:`${o}
${e.indent}${i}`:i}function Va({key:n,value:e},t,s,r){const{allNullValues:a,doc:o,indent:i,indentStep:l,options:{commentString:c,indentSeq:u,simpleKeys:f}}=t;let d=B(n)&&n.comment||null;if(f){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(J(n)){const C="With simple keys, collection cannot be used as a key value";throw new Error(C)}}let p=!f&&(!n||d&&e==null&&!t.inFlow||J(n)||(R(n)?n.type===N.BLOCK_FOLDED||n.type===N.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!p&&(f||!a),indent:i+l});let m=!1,h=!1,y=Mt(n,t,()=>m=!0,()=>h=!0);if(!p&&!t.inFlow&&y.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");p=!0}if(t.inFlow){if(a||e==null)return m&&s&&s(),y===""?"?":p?`? ${y}`:y}else if(a&&!f||e==null&&p)return y=`? ${y}`,d&&!m?y+=je(y,t.indent,c(d)):h&&r&&r(),y;m&&(d=null),p?(d&&(y+=je(y,t.indent,c(d))),y=`? ${y}
${i}:`):(y=`${y}:`,d&&(y+=je(y,t.indent,c(d))));let v,w,k;B(e)?(v=!!e.spaceBefore,w=e.commentBefore,k=e.comment):(v=!1,w=null,k=null,e&&typeof e=="object"&&(e=o.createNode(e))),t.implicitKey=!1,!p&&!d&&R(e)&&(t.indentAtStart=y.length+1),h=!1,!u&&l.length>=2&&!t.inFlow&&!p&&_n(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let b=!1;const M=Mt(e,t,()=>b=!0,()=>h=!0);let _=" ";if(d||v||w){if(_=v?`
`:"",w){const C=c(w);_+=`
${rt(C,t.indent)}`}M===""&&!t.inFlow?_===`
`&&(_=`

`):_+=`
${t.indent}`}else if(!p&&J(e)){const C=M[0],$=M.indexOf(`
`),P=$!==-1,W=t.inFlow??e.flow??e.items.length===0;if(P||!W){let G=!1;if(P&&(C==="&"||C==="!")){let T=M.indexOf(" ");C==="&"&&T!==-1&&T<$&&M[T+1]==="!"&&(T=M.indexOf(" ",T+1)),(T===-1||$<T)&&(G=!0)}G||(_=`
${t.indent}`)}}else(M===""||M[0]===`
`)&&(_="");return y+=_+M,t.inFlow?b&&s&&s():k&&!b?y+=je(y,t.indent,c(k)):h&&r&&r(),y}function Wa(n,e){(n==="debug"||n==="warn")&&(typeof process<"u"&&process.emitWarning?process.emitWarning(e):console.warn(e))}const zn="<<";function _s(n,e,{key:t,value:s}){if(n!=null&&n.doc.schema.merge&&za(t))if(s=We(s)?s.resolve(n.doc):s,_n(s))for(const r of s.items)Bt(n,e,r);else if(Array.isArray(s))for(const r of s)Bt(n,e,r);else Bt(n,e,s);else{const r=te(t,"",n);if(e instanceof Map)e.set(r,te(s,r,n));else if(e instanceof Set)e.add(r);else{const a=Ua(t,r,n),o=te(s,a,n);a in e?Object.defineProperty(e,a,{value:o,writable:!0,enumerable:!0,configurable:!0}):e[a]=o}}return e}const za=n=>n===zn||R(n)&&n.value===zn&&(!n.type||n.type===N.PLAIN);function Bt(n,e,t){const s=n&&We(t)?t.resolve(n.doc):t;if(!ws(s))throw new Error("Merge sources must be maps or map aliases");const r=s.toJSON(null,n,Map);for(const[a,o]of r)e instanceof Map?e.has(a)||e.set(a,o):e instanceof Set?e.add(a):Object.prototype.hasOwnProperty.call(e,a)||Object.defineProperty(e,a,{value:o,writable:!0,enumerable:!0,configurable:!0});return e}function Ua(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(B(n)&&(t!=null&&t.doc)){const s=Fa(t.doc,{});s.anchors=new Set;for(const a of t.anchors.keys())s.anchors.add(a.anchor);s.inFlow=!0,s.inStringifyKey=!0;const r=n.toString(s);if(!t.mapKeyWarned){let a=JSON.stringify(r);a.length>40&&(a=a.substring(0,36)+'..."'),Wa(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${a}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return r}return JSON.stringify(e)}function An(n,e,t){const s=Lt(n,void 0,t),r=Lt(e,void 0,t);return new oe(s,r)}class oe{constructor(e,t=null){Object.defineProperty(this,ae,{value:vs}),this.key=e,this.value=t}clone(e){let{key:t,value:s}=this;return B(t)&&(t=t.clone(e)),B(s)&&(s=s.clone(e)),new oe(t,s)}toJSON(e,t){const s=t!=null&&t.mapAsMap?new Map:{};return _s(t,s,this)}toString(e,t,s){return e!=null&&e.doc?Va(this,e,t,s):JSON.stringify(this)}}function Ls(n,e,t){return(e.inFlow??n.flow?qa:Ba)(n,e,t)}function Ba({comment:n,items:e},t,{blockItemPrefix:s,flowChars:r,itemIndent:a,onChompKeep:o,onComment:i}){const{indent:l,options:{commentString:c}}=t,u=Object.assign({},t,{indent:a,type:null});let f=!1;const d=[];for(let m=0;m<e.length;++m){const h=e[m];let y=null;if(B(h))!f&&h.spaceBefore&&d.push(""),At(t,d,h.commentBefore,f),h.comment&&(y=h.comment);else if(H(h)){const w=B(h.key)?h.key:null;w&&(!f&&w.spaceBefore&&d.push(""),At(t,d,w.commentBefore,f))}f=!1;let v=Mt(h,u,()=>y=null,()=>f=!0);y&&(v+=je(v,a,c(y))),f&&y&&(f=!1),d.push(s+v)}let p;if(d.length===0)p=r.start+r.end;else{p=d[0];for(let m=1;m<d.length;++m){const h=d[m];p+=h?`
${l}${h}`:`
`}}return n?(p+=`
`+rt(c(n),l),i&&i()):f&&o&&o(),p}function qa({items:n},e,{flowChars:t,itemIndent:s}){const{indent:r,indentStep:a,flowCollectionPadding:o,options:{commentString:i}}=e;s+=a;const l=Object.assign({},e,{indent:s,inFlow:!0,type:null});let c=!1,u=0;const f=[];for(let m=0;m<n.length;++m){const h=n[m];let y=null;if(B(h))h.spaceBefore&&f.push(""),At(e,f,h.commentBefore,!1),h.comment&&(y=h.comment);else if(H(h)){const w=B(h.key)?h.key:null;w&&(w.spaceBefore&&f.push(""),At(e,f,w.commentBefore,!1),w.comment&&(c=!0));const k=B(h.value)?h.value:null;k?(k.comment&&(y=k.comment),k.commentBefore&&(c=!0)):h.value==null&&(w!=null&&w.comment)&&(y=w.comment)}y&&(c=!0);let v=Mt(h,l,()=>y=null);m<n.length-1&&(v+=","),y&&(v+=je(v,s,i(y))),!c&&(f.length>u||v.includes(`
`))&&(c=!0),f.push(v),u=f.length}const{start:d,end:p}=t;if(f.length===0)return d+p;if(!c){const m=f.reduce((h,y)=>h+y.length+2,2);c=e.options.lineWidth>0&&m>e.options.lineWidth}if(c){let m=d;for(const h of f)m+=h?`
${a}${r}${h}`:`
`;return`${m}
${r}${p}`}else return`${d}${o}${f.join(" ")}${o}${p}`}function At({indent:n,options:{commentString:e}},t,s,r){if(s&&r&&(s=s.replace(/^\n+/,"")),s){const a=rt(e(s),n);t.push(a.trimStart())}}function $e(n,e){const t=R(e)?e.value:e;for(const s of n)if(H(s)&&(s.key===e||s.key===t||R(s.key)&&s.key.value===t))return s}class De extends Mn{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Ie,e),this.items=[]}static from(e,t,s){const{keepUndefined:r,replacer:a}=s,o=new this(e),i=(l,c)=>{if(typeof a=="function")c=a.call(t,l,c);else if(Array.isArray(a)&&!a.includes(l))return;(c!==void 0||r)&&o.items.push(An(l,c,s))};if(t instanceof Map)for(const[l,c]of t)i(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))i(l,t[l]);return typeof e.sortMapEntries=="function"&&o.items.sort(e.sortMapEntries),o}add(e,t){var o;let s;H(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new oe(e,e==null?void 0:e.value):s=new oe(e.key,e.value);const r=$e(this.items,s.key),a=(o=this.schema)==null?void 0:o.sortMapEntries;if(r){if(!t)throw new Error(`Key ${s.key} already set`);R(r.value)&&bs(s.value)?r.value.value=s.value:r.value=s.value}else if(a){const i=this.items.findIndex(l=>a(s,l)<0);i===-1?this.items.push(s):this.items.splice(i,0,s)}else this.items.push(s)}delete(e){const t=$e(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const s=$e(this.items,e),r=s==null?void 0:s.value;return(!t&&R(r)?r.value:r)??void 0}has(e){return!!$e(this.items,e)}set(e,t){this.add(new oe(e,t),!0)}toJSON(e,t,s){const r=s?new s:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(r);for(const a of this.items)_s(t,r,a);return r}toString(e,t,s){if(!e)return JSON.stringify(this);for(const r of this.items)if(!H(r))throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Ls(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:t})}}class Ms extends Mn{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(at,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=it(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const s=it(e);if(typeof s!="number")return;const r=this.items[s];return!t&&R(r)?r.value:r}has(e){const t=it(e);return typeof t=="number"&&t<this.items.length}set(e,t){const s=it(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const r=this.items[s];R(r)&&bs(t)?r.value=t:this.items[s]=t}toJSON(e,t){const s=[];t!=null&&t.onCreate&&t.onCreate(s);let r=0;for(const a of this.items)s.push(te(a,String(r++),t));return s}toString(e,t,s){return e?Ls(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:t}):JSON.stringify(this)}static from(e,t,s){const{replacer:r}=s,a=new this(e);if(t&&Symbol.iterator in Object(t)){let o=0;for(let i of t){if(typeof r=="function"){const l=t instanceof Set?i:String(o++);i=r.call(t,l,i)}a.items.push(Lt(i,void 0,s))}}return a}}function it(n){let e=R(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}function Ja(n,e,t){const{replacer:s}=t,r=new Ms(n);r.tag="tag:yaml.org,2002:pairs";let a=0;if(e&&Symbol.iterator in Object(e))for(let o of e){typeof s=="function"&&(o=s.call(e,String(a++),o));let i,l;if(Array.isArray(o))if(o.length===2)i=o[0],l=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){const c=Object.keys(o);if(c.length===1)i=c[0],l=o[i];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else i=o;r.items.push(An(i,l,t))}return r}class Cn extends Ms{constructor(){super(),this.add=De.prototype.add.bind(this),this.delete=De.prototype.delete.bind(this),this.get=De.prototype.get.bind(this),this.has=De.prototype.has.bind(this),this.set=De.prototype.set.bind(this),this.tag=Cn.tag}toJSON(e,t){if(!t)return super.toJSON(e);const s=new Map;t!=null&&t.onCreate&&t.onCreate(s);for(const r of this.items){let a,o;if(H(r)?(a=te(r.key,"",t),o=te(r.value,a,t)):a=te(r,"",t),s.has(a))throw new Error("Ordered maps must not include duplicate keys");s.set(a,o)}return s}static from(e,t,s){const r=Ja(e,t,s),a=new this;return a.items=r.items,a}}Cn.tag="tag:yaml.org,2002:omap";class Tn extends De{constructor(e){super(e),this.tag=Tn.tag}add(e){let t;H(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new oe(e.key,null):t=new oe(e,null),$e(this.items,t.key)||this.items.push(t)}get(e,t){const s=$e(this.items,e);return!t&&H(s)?R(s.key)?s.key.value:s.key:s}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const s=$e(this.items,e);s&&!t?this.items.splice(this.items.indexOf(s),1):!s&&t&&this.items.push(new oe(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,s);throw new Error("Set items must all have null values")}static from(e,t,s){const{replacer:r}=s,a=new this(e);if(t&&Symbol.iterator in Object(t))for(let o of t)typeof r=="function"&&(o=r.call(t,o,o)),a.items.push(An(o,null,s));return a}}Tn.tag="tag:yaml.org,2002:set";function Ka(n,e){if(!e||e==="all"||e==="*")return En(1,n+1);if(e==="none")return[];const t=[];for(const s of e.split(/[,;]/g))if(!s.includes("-"))t.push(+s);else{const[r,a]=s.split("-",2);t.push(...En(+r,a?+a+1:n+1))}return kr(t).filter(s=>s<=n).sort((s,r)=>s-r)}function qi(){const n=A(Date.now()),e=Js({interval:1e3}),t=g(()=>{const r=(e.value-n.value)/1e3,a=Math.floor(r%60).toString().padStart(2,"0");return`${Math.floor(r/60).toString().padStart(2,"0")}:${a}`});function s(){n.value=e.value}return{timer:t,resetTimer:s}}function On(n=5){const e=[],t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",s=t.length;for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*s)));return e.join("")}function Ji(n,e,t,s){const r=Ka(e+t-1,n);for(let a=0;a<e;a++){const o=s(a),i=r.includes(a+t);for(const l of o)l.classList.toggle("slidev-code-highlighted",i),l.classList.toggle("slidev-code-dishonored",!i),l.classList.toggle("highlighted",i),l.classList.toggle("dishonored",!i)}}const Ya="modulepreload",Qa=function(n){return"/genaiscript/slides/default/"+n},Un={},x=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.all(t.map(i=>{if(i=Qa(i),i in Un)return;Un[i]=!0;const l=i.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Ya,l||(u.as="script",u.crossOrigin=""),u.href=i,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},As=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},Xa={},Za={class:"px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono"};function eo(n,e){return as(),Ks("div",Za," An error occurred on this slide. Check the terminal for more information. ")}const to=As(Xa,[["render",eo],["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/layouts/error.vue"]]),F=Object.freeze(Object.defineProperty({__proto__:null,default:to},Symbol.toStringTag,{value:"Module"})),ue=L({theme:"default",title:"GenAIScript",titleTemplate:"%s",favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",info:`## GenAIScript
Scripting for Generative AI.<br/>
[Docs](https://microsoft.github.io/genaiscript/) | [GitHub](https://github.com/microsoft/genaiscript/)
`,class:"text-center",highlighter:"shiki",drawings:{persist:!1},mdc:!0,layout:"center"}),no=L({layout:g(()=>ue.layout),transition:g(()=>ue.transition),class:g(()=>ue.class),clicks:g(()=>ue.clicks),name:g(()=>ue.name),preload:g(()=>ue.preload),slide:{index:0,content:"",note:"",title:"GenAIScript",noteHTML:"",raw:"",frontmatter:ue,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",start:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),fe=L({}),so=L({layout:g(()=>fe.layout),transition:g(()=>fe.transition),class:g(()=>fe.class),clicks:g(()=>fe.clicks),name:g(()=>fe.name),preload:g(()=>fe.preload),slide:{index:1,importChain:[{raw:`---
src: pages/aisw-intro.md
---
`,content:"",frontmatter:{src:"pages/aisw-intro.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/aisw-intro.md"},frontmatterRaw:`src: pages/aisw-intro.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:1,start:35,contentStart:38,end:39,imports:[{raw:`# AI Requires Us to Rethink Software
&nbsp;
### **Plain Old Software (POSW)** = all pre-LLM SW 
&nbsp;
### **AI Software (AISW)** = SW that uses LLMs at runtime
&nbsp;

<v-click>

### Why do we care? **AISW can do things that POSW could never do!**
- Examples: understand images, summarize and criticize content,write programs, etc.

## **GenAIScript is the scripting language for AISW**

</v-click>`,title:"AI Requires Us to Rethink Software",level:1,content:`# AI Requires Us to Rethink Software
&nbsp;
### **Plain Old Software (POSW)** = all pre-LLM SW 
&nbsp;
### **AI Software (AISW)** = SW that uses LLMs at runtime
&nbsp;

<v-click>

### Why do we care? **AISW can do things that POSW could never do!**
- Examples: understand images, summarize and criticize content,write programs, etc.

## **GenAIScript is the scripting language for AISW**

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro.md",index:0,start:0,contentStart:0,end:15}]}],content:"",note:"",title:"AI Requires Us to Rethink Software",level:1,noteHTML:"",raw:"",frontmatter:fe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/aisw-intro.md",start:0,id:1,no:2},__clicksContext:null,__preloaded:!1}),de=L({layout:"image-right",image:"/script-pl.png",backgroundSize:"75%"}),ro=L({layout:g(()=>de.layout),transition:g(()=>de.transition),class:g(()=>de.class),clicks:g(()=>de.clicks),name:g(()=>de.name),preload:g(()=>de.preload),slide:{index:2,importChain:[{raw:`---
src: pages/vision.md
---
`,content:"",frontmatter:{src:"pages/vision.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/vision.md"},frontmatterRaw:`src: pages/vision.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:2,start:39,contentStart:42,end:43,imports:[{raw:`---
layout: image-right
image: /script-pl.png
backgroundSize: 75%

---
# Empower Users with AI-Enhanced Scripts
##

### Scripting languages have had enormous impact
- csh, bash, Perl, JavaScript, Python, etc. 

&nbsp;
### Current languages **not AI aware**
- They use AI via libraries, packages, etc.

<v-click>

&nbsp;
### In GenAIScript, LLM is first-class component
- With the leverage of JavaScript

</v-click>`,title:"Empower Users with AI-Enhanced Scripts",level:1,content:`# Empower Users with AI-Enhanced Scripts
##

### Scripting languages have had enormous impact
- csh, bash, Perl, JavaScript, Python, etc. 

&nbsp;
### Current languages **not AI aware**
- They use AI via libraries, packages, etc.

<v-click>

&nbsp;
### In GenAIScript, LLM is first-class component
- With the leverage of JavaScript

</v-click>`,frontmatter:{layout:"image-right",image:"/script-pl.png",backgroundSize:"75%"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"image-right",image:"/script-pl.png",backgroundSize:"75%"},frontmatterRaw:`layout: image-right
image: /script-pl.png
backgroundSize: 75%

`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vision.md",index:0,start:0,contentStart:6,end:23}]}],content:"",note:"",title:"Empower Users with AI-Enhanced Scripts",level:1,noteHTML:"",raw:"",frontmatter:de,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vision.md",start:0,id:2,no:3},__clicksContext:null,__preloaded:!1}),pe=L({layout:"two-cols"}),ao=L({layout:g(()=>pe.layout),transition:g(()=>pe.transition),class:g(()=>pe.class),clicks:g(()=>pe.clicks),name:g(()=>pe.name),preload:g(()=>pe.preload),slide:{index:3,importChain:[{raw:`---
src: pages/script-intro.md
---
`,content:"",frontmatter:{src:"pages/script-intro.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script-intro.md"},frontmatterRaw:`src: pages/script-intro.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:3,start:43,contentStart:46,end:47,imports:[{raw:`---
layout: two-cols
---

## GenAIScript Introduction

Each GenAIScript is JavaScript that defines a call/return to an LLM

- Define context for the LLM using \\
\`def\` (from code, docs, URLs, images, etc)
- Describe the task you want in \`$\` prompt
- Send the request to the LLM
- Process the output of the LLM 
&nbsp;

::right::

## Example

\`\`\`js
// metadata and model configuration
script({ title: "Summarize", model: "gpt4" })

// insert the context, define a "FILE" variable
def("FILE", env.files)
def("FILE", await workspace.findFile("**/*.txt"))

// appends text to the prompt (file is the variable name)
$\`Summarize FILE. Save output to summary.txt\`
\`\`\``,title:"GenAIScript Introduction",level:2,content:`## GenAIScript Introduction

Each GenAIScript is JavaScript that defines a call/return to an LLM

- Define context for the LLM using \\
\`def\` (from code, docs, URLs, images, etc)
- Describe the task you want in \`$\` prompt
- Send the request to the LLM
- Process the output of the LLM 
&nbsp;

::right::

## Example

\`\`\`js
// metadata and model configuration
script({ title: "Summarize", model: "gpt4" })

// insert the context, define a "FILE" variable
def("FILE", env.files)
def("FILE", await workspace.findFile("**/*.txt"))

// appends text to the prompt (file is the variable name)
$\`Summarize FILE. Save output to summary.txt\`
\`\`\``,frontmatter:{layout:"two-cols"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"two-cols"},frontmatterRaw:`layout: two-cols
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-intro.md",index:0,start:0,contentStart:3,end:30}]}],content:"",note:"",title:"GenAIScript Introduction",level:2,noteHTML:"",raw:"",frontmatter:pe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-intro.md",start:0,id:3,no:4},__clicksContext:null,__preloaded:!1}),he=L({}),oo=L({layout:g(()=>he.layout),transition:g(()=>he.transition),class:g(()=>he.class),clicks:g(()=>he.clicks),name:g(()=>he.name),preload:g(()=>he.preload),slide:{index:4,importChain:[{raw:`---
src: pages/script.md
---
`,content:"",frontmatter:{src:"pages/script.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script.md"},frontmatterRaw:`src: pages/script.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:4,start:47,contentStart:50,end:51,imports:[{raw:`
# Generative AI Scripting
Generate a LLM prompt by executing a JS script.

<v-click>

\`\`\`js
// define the context
const file = def("FILE", env.files, { endsWith: ".pdf" })
// define data structure
const schema = defSchema("DATA", 
    { type: "array", items: { type: "string" } })
// assign the task
$\`Analyze \${file} and extract data to JSON using the \${schema} schema.\`
\`\`\`

</v-click>

<v-click>

- **It Is Just JavaScript(TM)**
- **\`$...\`** writes to the prompt, **\`def\`** defines a "variable" + various builtin parsers and utilities
- Fast development loop in Visual Studio Code + Automation with Command Line

</v-click>


<v-click>

\`\`\`\`txt
FILE lorem.pdf:
Lorem Ipsum ...

DATA:
type Data = string[]

Analyze FILE and extract data to JSON using the DATA schema.
\`\`\`\`

</v-click>`,title:"Generative AI Scripting",level:1,content:`# Generative AI Scripting
Generate a LLM prompt by executing a JS script.

<v-click>

\`\`\`js
// define the context
const file = def("FILE", env.files, { endsWith: ".pdf" })
// define data structure
const schema = defSchema("DATA", 
    { type: "array", items: { type: "string" } })
// assign the task
$\`Analyze \${file} and extract data to JSON using the \${schema} schema.\`
\`\`\`

</v-click>

<v-click>

- **It Is Just JavaScript(TM)**
- **\`$...\`** writes to the prompt, **\`def\`** defines a "variable" + various builtin parsers and utilities
- Fast development loop in Visual Studio Code + Automation with Command Line

</v-click>


<v-click>

\`\`\`\`txt
FILE lorem.pdf:
Lorem Ipsum ...

DATA:
type Data = string[]

Analyze FILE and extract data to JSON using the DATA schema.
\`\`\`\`

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script.md",index:0,start:0,contentStart:0,end:40}]}],content:"",note:"",title:"Generative AI Scripting",level:1,noteHTML:"",raw:"",frontmatter:he,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script.md",start:0,id:4,no:5},__clicksContext:null,__preloaded:!1}),me=L({}),io=L({layout:g(()=>me.layout),transition:g(()=>me.transition),class:g(()=>me.class),clicks:g(()=>me.clicks),name:g(()=>me.name),preload:g(()=>me.preload),slide:{index:5,importChain:[{raw:`---
src: pages/script-prompt.md
---
`,content:"",frontmatter:{src:"pages/script-prompt.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script-prompt.md"},frontmatterRaw:`src: pages/script-prompt.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:5,start:51,contentStart:54,end:55,imports:[{raw:`
# Context x Script = Prompt

- user starts script on files in VSCode/CLI
- script generates prompt (user and system messages)
- invocation of LLM API with messages + access token (from \`.env\` or environment variables).

\`\`\`mermaid

stateDiagram
  direction LR
    [*] --> context
    context: files (text, PDF, DOCX, ...)
    script : user script (.genai.js)
    prompt : prompt (system+user messages)
    system: system script (system.*.genai.js)
    context --> script
    note right of context : Users selects files in VSCode/CLI.
    script --> prompt
    system --> prompt
    note left of system: Teach LLM about micro-formats.
    prompt --> response : LLM (OpenAI Chat API)
    response: response (raw text)
\`\`\`
`,title:"Context x Script = Prompt",level:1,content:`# Context x Script = Prompt

- user starts script on files in VSCode/CLI
- script generates prompt (user and system messages)
- invocation of LLM API with messages + access token (from \`.env\` or environment variables).

\`\`\`mermaid

stateDiagram
  direction LR
    [*] --> context
    context: files (text, PDF, DOCX, ...)
    script : user script (.genai.js)
    prompt : prompt (system+user messages)
    system: system script (system.*.genai.js)
    context --> script
    note right of context : Users selects files in VSCode/CLI.
    script --> prompt
    system --> prompt
    note left of system: Teach LLM about micro-formats.
    prompt --> response : LLM (OpenAI Chat API)
    response: response (raw text)
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-prompt.md",index:0,start:0,contentStart:0,end:25}]}],content:"",note:"",title:"Context x Script = Prompt",level:1,noteHTML:"",raw:"",frontmatter:me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-prompt.md",start:0,id:5,no:6},__clicksContext:null,__preloaded:!1}),ge=L({}),lo=L({layout:g(()=>ge.layout),transition:g(()=>ge.transition),class:g(()=>ge.class),clicks:g(()=>ge.clicks),name:g(()=>ge.name),preload:g(()=>ge.preload),slide:{index:6,importChain:[{raw:`---
src: pages/system-scripts.md
---
`,content:"",frontmatter:{src:"pages/system-scripts.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/system-scripts.md"},frontmatterRaw:`src: pages/system-scripts.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:6,start:55,contentStart:58,end:59,imports:[{raw:`# System Scripts and Microformats

Teach the LLM how to format response for files, special formats, register tools ...

- \`system.files.genai.js\`
\`\`\`js
system({ title: "File generation" })
$\`When generating or updating files you will use the following syntax:\`
...
\`\`\`

- \`system.diff.genai.js\`
\`\`\`js
system({ title: "Diff generation", lineNumbers: true,})
$\`The DIFF format should be used to generate diff changes on files: 
- added lines MUST start with +
- deleted lines MUST start with -
- deleted lines MUST exist in the original file (do not invent deleted lines)
- added lines MUST not exist in the original file
...
\`\`\`
`,title:"System Scripts and Microformats",level:1,content:`# System Scripts and Microformats

Teach the LLM how to format response for files, special formats, register tools ...

- \`system.files.genai.js\`
\`\`\`js
system({ title: "File generation" })
$\`When generating or updating files you will use the following syntax:\`
...
\`\`\`

- \`system.diff.genai.js\`
\`\`\`js
system({ title: "Diff generation", lineNumbers: true,})
$\`The DIFF format should be used to generate diff changes on files: 
- added lines MUST start with +
- deleted lines MUST start with -
- deleted lines MUST exist in the original file (do not invent deleted lines)
- added lines MUST not exist in the original file
...
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-scripts.md",index:0,start:0,contentStart:0,end:22}]}],content:"",note:"",title:"System Scripts and Microformats",level:1,noteHTML:"",raw:"",frontmatter:ge,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-scripts.md",start:0,id:6,no:7},__clicksContext:null,__preloaded:!1}),ye=L({}),co=L({layout:g(()=>ye.layout),transition:g(()=>ye.transition),class:g(()=>ye.class),clicks:g(()=>ye.clicks),name:g(()=>ye.name),preload:g(()=>ye.preload),slide:{index:7,importChain:[{raw:`---
src: pages/llm-invocation.md
---
`,content:"",frontmatter:{src:"pages/llm-invocation.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/llm-invocation.md"},frontmatterRaw:`src: pages/llm-invocation.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:7,start:59,contentStart:62,end:63,imports:[{raw:`
# Prompt + LLM = Response

- authentication: \`.env\` or environment variables
- OpenAI API, Azure OpenAI, OLlama, AICI, ...

<br/>
<br/>

\`\`\`mermaid
stateDiagram
  direction LR
    prompt : prompt (system + user messages)
    response: response (raw text)
    pre: ...
    pre --> prompt
    prompt --> response : LLM (OpenAI Chat API)
\`\`\`
`,title:"Prompt + LLM = Response",level:1,content:`# Prompt + LLM = Response

- authentication: \`.env\` or environment variables
- OpenAI API, Azure OpenAI, OLlama, AICI, ...

<br/>
<br/>

\`\`\`mermaid
stateDiagram
  direction LR
    prompt : prompt (system + user messages)
    response: response (raw text)
    pre: ...
    pre --> prompt
    prompt --> response : LLM (OpenAI Chat API)
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/llm-invocation.md",index:0,start:0,contentStart:0,end:19}]}],content:"",note:"",title:"Prompt + LLM = Response",level:1,noteHTML:"",raw:"",frontmatter:ye,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/llm-invocation.md",start:0,id:7,no:8},__clicksContext:null,__preloaded:!1}),ve=L({}),uo=L({layout:g(()=>ve.layout),transition:g(()=>ve.transition),class:g(()=>ve.class),clicks:g(()=>ve.clicks),name:g(()=>ve.name),preload:g(()=>ve.preload),slide:{index:8,importChain:[{raw:`---
src: pages/response-processing.md
---
`,content:"",frontmatter:{src:"pages/response-processing.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/response-processing.md"},frontmatterRaw:`src: pages/response-processing.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:8,start:63,contentStart:66,end:67,imports:[{raw:`

# Response x Parsers = Files + Data

- parse file edits (as refactoring preview in VSCode)
- parse diagnostics (error, warning, note)
- parse data + schema validation + error repair

\`\`\`mermaid {scale:0.8}

stateDiagram
  direction LR
    response: response (text)
    files: files (workspace edits)
    data: data (JSON, YAML, CSV, ...)
    annotations: annotations (error, warning, ...)
    note right of data: Schema validation\\nData repair
    note right of files: Full, diff\\nRefactoring preview
    note right of annotations: GitHub Actions,\\nGitHub Security Alerts,\\nVSCode diagnostics, ...
    [*] --> response
    response --> files
    files --> data
    response --> annotations
\`\`\``,title:"Response x Parsers = Files + Data",level:1,content:`# Response x Parsers = Files + Data

- parse file edits (as refactoring preview in VSCode)
- parse diagnostics (error, warning, note)
- parse data + schema validation + error repair

\`\`\`mermaid {scale:0.8}

stateDiagram
  direction LR
    response: response (text)
    files: files (workspace edits)
    data: data (JSON, YAML, CSV, ...)
    annotations: annotations (error, warning, ...)
    note right of data: Schema validation\\nData repair
    note right of files: Full, diff\\nRefactoring preview
    note right of annotations: GitHub Actions,\\nGitHub Security Alerts,\\nVSCode diagnostics, ...
    [*] --> response
    response --> files
    files --> data
    response --> annotations
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/response-processing.md",index:0,start:0,contentStart:0,end:24}]}],content:"",note:"",title:"Response x Parsers = Files + Data",level:1,noteHTML:"",raw:"",frontmatter:ve,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/response-processing.md",start:0,id:8,no:9},__clicksContext:null,__preloaded:!1}),we=L({}),fo=L({layout:g(()=>we.layout),transition:g(()=>we.transition),class:g(()=>we.class),clicks:g(()=>we.clicks),name:g(()=>we.name),preload:g(()=>we.preload),slide:{index:9,importChain:[{raw:`---
src: pages/vscode.md
---
`,content:"",frontmatter:{src:"pages/vscode.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/vscode.md"},frontmatterRaw:`src: pages/vscode.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:9,start:67,contentStart:70,end:71,imports:[{raw:`# Dev Experience

## VSCode 

<v-click>

- Run: command from file/folder/editor
- Debugger: launch script through CLI
- Trace: document provider + markdown preview
- Authentication: from \`.env\` file or environment

</v-click>

## Command Line

<v-click>

- Use your favorite code editor (Emacs, vi, etc.)
- Uses Node.js

\`\`\`
npx genaiscript scripts create [script]
npx genaiscript run [script] [...files]
\`\`\`

- CI/CD  friendly

</v-click>`,title:"Dev Experience",level:1,content:`# Dev Experience

## VSCode 

<v-click>

- Run: command from file/folder/editor
- Debugger: launch script through CLI
- Trace: document provider + markdown preview
- Authentication: from \`.env\` file or environment

</v-click>

## Command Line

<v-click>

- Use your favorite code editor (Emacs, vi, etc.)
- Uses Node.js

\`\`\`
npx genaiscript scripts create [script]
npx genaiscript run [script] [...files]
\`\`\`

- CI/CD  friendly

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vscode.md",index:0,start:0,contentStart:0,end:28}]}],content:"",note:"",title:"Dev Experience",level:1,noteHTML:"",raw:"",frontmatter:we,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vscode.md",start:0,id:9,no:10},__clicksContext:null,__preloaded:!1}),ke=L({}),po=L({layout:g(()=>ke.layout),transition:g(()=>ke.transition),class:g(()=>ke.class),clicks:g(()=>ke.clicks),name:g(()=>ke.name),preload:g(()=>ke.preload),slide:{index:10,importChain:[{raw:`---
src: pages/js-runtime.md
---
`,content:"",frontmatter:{src:"pages/js-runtime.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/js-runtime.md"},frontmatterRaw:`src: pages/js-runtime.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:10,start:71,contentStart:74,end:75,imports:[{raw:`
# JavaScript Runtime for GenAI

- In process eval or \`esm\` import
\`\`\`js
// poem.genai.js
script(...)
$\`Write a poem.\`
\`\`\`
\`\`\`js
// poem.genai.mjs
script(...)
export default async function() {
    $\`Write a poem.\`
}
\`\`\`

- parsers for PDF, DOCX, HTML, JSON5, YAML, XML, CSV, tokenizers, tree-sitter, ...

- virtual File system (vscode vs node.js vs web)

- builtin RAG (work in progress**)

- Debugging Just Works™
`,title:"JavaScript Runtime for GenAI",level:1,content:`# JavaScript Runtime for GenAI

- In process eval or \`esm\` import
\`\`\`js
// poem.genai.js
script(...)
$\`Write a poem.\`
\`\`\`
\`\`\`js
// poem.genai.mjs
script(...)
export default async function() {
    $\`Write a poem.\`
}
\`\`\`

- parsers for PDF, DOCX, HTML, JSON5, YAML, XML, CSV, tokenizers, tree-sitter, ...

- virtual File system (vscode vs node.js vs web)

- builtin RAG (work in progress**)

- Debugging Just Works™`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/js-runtime.md",index:0,start:0,contentStart:0,end:25}]}],content:"",note:"",title:"JavaScript Runtime for GenAI",level:1,noteHTML:"",raw:"",frontmatter:ke,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/js-runtime.md",start:0,id:10,no:11},__clicksContext:null,__preloaded:!1}),be=L({}),ho=L({layout:g(()=>be.layout),transition:g(()=>be.transition),class:g(()=>be.class),clicks:g(()=>be.clicks),name:g(()=>be.name),preload:g(()=>be.preload),slide:{index:11,importChain:[{raw:`---
src: pages/image-alt-text.md
---
`,content:"",frontmatter:{src:"pages/image-alt-text.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/image-alt-text.md"},frontmatterRaw:`src: pages/image-alt-text.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:11,start:75,contentStart:78,end:79,imports:[{raw:`# Example: Image Alt Text Generator

Poor alt text descriptions...

\`\`\`html
<img src="..." alt="An image" /> 😦😦😦
\`\`\`

GenAI to the rescue!

-   Tell the LLM to generate an alt text description

\`\`\`js
const file = env.files[0]
defImages(file)
$\`You are an expert in assistive technology. You will analyze each image
and generate a description alt text for the image.\`
\`\`\`

-   Generate files using the format defined in "system.files"

\`\`\`js
$\`Save the alt text in a file called "\${file.filename + ".txt"}".\`
\`\`\`

-   cancel if the alt text file already exists

\`\`\`js
const { content } = await workspace.readText(file.filename + ".txt")
if (content) cancel("Alt text file already exists")
\`\`\`
`,title:"Example: Image Alt Text Generator",level:1,content:`# Example: Image Alt Text Generator

Poor alt text descriptions...

\`\`\`html
<img src="..." alt="An image" /> 😦😦😦
\`\`\`

GenAI to the rescue!

-   Tell the LLM to generate an alt text description

\`\`\`js
const file = env.files[0]
defImages(file)
$\`You are an expert in assistive technology. You will analyze each image
and generate a description alt text for the image.\`
\`\`\`

-   Generate files using the format defined in "system.files"

\`\`\`js
$\`Save the alt text in a file called "\${file.filename + ".txt"}".\`
\`\`\`

-   cancel if the alt text file already exists

\`\`\`js
const { content } = await workspace.readText(file.filename + ".txt")
if (content) cancel("Alt text file already exists")
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/image-alt-text.md",index:0,start:0,contentStart:0,end:32}]}],content:"",note:"",title:"Example: Image Alt Text Generator",level:1,noteHTML:"",raw:"",frontmatter:be,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/image-alt-text.md",start:0,id:11,no:12},__clicksContext:null,__preloaded:!1}),Se=L({}),mo=L({layout:g(()=>Se.layout),transition:g(()=>Se.transition),class:g(()=>Se.class),clicks:g(()=>Se.clicks),name:g(()=>Se.name),preload:g(()=>Se.preload),slide:{index:12,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:12,start:79,contentStart:82,end:83,imports:[{raw:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\`
`,title:"Example: Translating MakeCode",level:1,content:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:0,start:0,contentStart:0,end:28},{raw:'\n## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````\n',title:"Develop the script in VSCode",level:2,content:'## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````',frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:1,start:29,contentStart:29,end:58},{raw:`
## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\`
`,title:"Automate with the CLI",level:2,content:`## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Example: Translating MakeCode",level:1,noteHTML:"",raw:"",frontmatter:Se,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:0,id:12,no:13},__clicksContext:null,__preloaded:!1}),_e=L({}),go=L({layout:g(()=>_e.layout),transition:g(()=>_e.transition),class:g(()=>_e.class),clicks:g(()=>_e.clicks),name:g(()=>_e.name),preload:g(()=>_e.preload),slide:{index:13,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:12,start:79,contentStart:82,end:83,imports:[{raw:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\`
`,title:"Example: Translating MakeCode",level:1,content:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:0,start:0,contentStart:0,end:28},{raw:'\n## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````\n',title:"Develop the script in VSCode",level:2,content:'## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````',frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:1,start:29,contentStart:29,end:58},{raw:`
## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\`
`,title:"Automate with the CLI",level:2,content:`## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Develop the script in VSCode",level:2,noteHTML:"",raw:"",frontmatter:_e,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:29,id:13,no:14},__clicksContext:null,__preloaded:!1}),Le=L({}),yo=L({layout:g(()=>Le.layout),transition:g(()=>Le.transition),class:g(()=>Le.class),clicks:g(()=>Le.clicks),name:g(()=>Le.name),preload:g(()=>Le.preload),slide:{index:14,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:12,start:79,contentStart:82,end:83,imports:[{raw:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\`
`,title:"Example: Translating MakeCode",level:1,content:`# Example: Translating MakeCode

Markdown + various custom macros and DSLs

\`\`\`\`markdown
## {Step 6}

Click on the \`||variables:Variables||\` category in the Toolbox...

\`\`\`blocks
let hand = 0;
input.onGesture(Gesture.Shake, function() { ... })
\`\`\` 
\`\`\`\`

Translations messes with the macros...

\`\`\`\`markdown
## {Étape 6}

Cliquez sur le bouton ''||variables :Variables||'' dans la boîte à outils....

'''blocs
let main = 0 ;
input.onGesture(Gesture.Shake, function() {})
'''
\`\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:0,start:0,contentStart:0,end:28},{raw:'\n## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````\n',title:"Develop the script in VSCode",level:2,content:'## Develop the script in VSCode\n\nLeverage the short dev loop to teach the format **iteratively** to the LLM.\n\n````js\nscript({ temperature: 0 })\n// allow CLI argument injection\nconst langName = env.vars.lang || "French"\n// context\nconst file = env.files[0]\ndef("ORIGINAL", file, { language: "markdown" })\n// role\n$`You are an expert at Computer Science education. \nYou are an expert at writing MakeCode documentation and tutorials. \nYou are an expert ${langName} translator.`\n// task\n$`Translate the documentation in ORIGINAL to ${langName}.\n- Do not translate header starting with ~\n- Do NOT translate code in \\`blocks\\` or in \\`typescript\\` or in \\`spy\\` or in \\`python\\`. However, you can should comments.\n- Do not translate @variable@ or @unplugged\n- Translate \\`## {<text>}\\` as \\`## {<translated text>}\\`\n- When you encounter a snippet like "\\`\\`||<namespace>:<text>||\\`\\`", DO NOT translate <namespace> and DO translate text.\n\n\\`\\`||<namespace>:<text>||\\`\\` --> \\`\\`||<namespace>:<translated text>||\\`\\`\n...\n`\n````',frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:1,start:29,contentStart:29,end:58},{raw:`
## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\`
`,title:"Automate with the CLI",level:2,content:`## Automate with the CLI

Scale the script using the CLI and google/zx.

\`\`\`js
const langs = ["French", "German", ...]
const files = await glob("docs/**/*.md")
for(const lang of langs) {
    for(const file of files) {
        // run script and create translations
        await $\`genaiscript run translate \${file} --vars lang=\${lang} --apply-edits\`
        // run MakeCode compiler to validate translations
        await $\`makecode check-docs ...\`
        // upload the database
        await $\`translation upload ...\`
    }
}
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Automate with the CLI",level:2,noteHTML:"",raw:"",frontmatter:Le,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:59,id:14,no:15},__clicksContext:null,__preloaded:!1}),Me=L({}),vo=L({layout:g(()=>Me.layout),transition:g(()=>Me.transition),class:g(()=>Me.class),clicks:g(()=>Me.clicks),name:g(()=>Me.name),preload:g(()=>Me.preload),slide:{index:15,importChain:[{raw:`---
src: pages/tla-plus.md
---
`,content:"",frontmatter:{src:"pages/tla-plus.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/tla-plus.md"},frontmatterRaw:`src: pages/tla-plus.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:13,start:83,contentStart:86,end:87,imports:[{raw:`# Example: TLA+ Linter

[TLA+](https://lamport.azurewebsites.net/tla/tla.html) is a high-level language for modeling programs and systems--especially
concurrent and distributed ones. **TLA+ does not come with a traditional linter or formatter.**

\`\`\`txt
  define {
    (*
      The passMsg operator is not implementable -at least not without using extra synchronization- because it atomically reads a message
      from the nic's in-buffer and writes to its out-buffer!
    *)
    passMsg(net, from, oldMsg, to, newMsg) == [ net EXCEPT ![from] = BagRemove(@, oldMsg), ![to] = BagAdd(@, newMsg) ]
\`\`\`

\`\`\`js
def("TLA+", env.files.filter(f => f.filename.endsWith(".tla")), {lineNumbers: true})
$\`You are an expert at TLA+/TLAPLUS. Your task is to check if the prose comments and their TLA+ declarations and definitions are syntactically and semantically consistent!!!
Explain any consistencies and inconsistencies you may find.  Report inconsistent and consistent pairs in a single ANNOTATION section.
## TLA+ Syntax Hints
- A formula [A]_v is called a temporal formula, and is shorthand for the formula A \\/ v' = v.  In other words, the formula is true if A is true or if the value of v remains unchanged.  Usually v is a tuple of the spec's variables.
- The symbol \\\`#\\\` is alternative syntax used for inequality in TLA+; the other symbol is \\\`/=\\".
\`\`\`

\`\`\`yaml
- name: Run GenAIscript on the TLA+ specs that are added in this pull request.
  run: npx --yes genaiscript run tlAI-Linter.genai.js $(git diff --name-only HEAD^ | grep '.tla') -oa results.sarif
- name: Upload SARIF file
  uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: results.sarif
\`\`\``,title:"Example: TLA+ Linter",level:1,content:`# Example: TLA+ Linter

[TLA+](https://lamport.azurewebsites.net/tla/tla.html) is a high-level language for modeling programs and systems--especially
concurrent and distributed ones. **TLA+ does not come with a traditional linter or formatter.**

\`\`\`txt
  define {
    (*
      The passMsg operator is not implementable -at least not without using extra synchronization- because it atomically reads a message
      from the nic's in-buffer and writes to its out-buffer!
    *)
    passMsg(net, from, oldMsg, to, newMsg) == [ net EXCEPT ![from] = BagRemove(@, oldMsg), ![to] = BagAdd(@, newMsg) ]
\`\`\`

\`\`\`js
def("TLA+", env.files.filter(f => f.filename.endsWith(".tla")), {lineNumbers: true})
$\`You are an expert at TLA+/TLAPLUS. Your task is to check if the prose comments and their TLA+ declarations and definitions are syntactically and semantically consistent!!!
Explain any consistencies and inconsistencies you may find.  Report inconsistent and consistent pairs in a single ANNOTATION section.
## TLA+ Syntax Hints
- A formula [A]_v is called a temporal formula, and is shorthand for the formula A \\/ v' = v.  In other words, the formula is true if A is true or if the value of v remains unchanged.  Usually v is a tuple of the spec's variables.
- The symbol \\\`#\\\` is alternative syntax used for inequality in TLA+; the other symbol is \\\`/=\\".
\`\`\`

\`\`\`yaml
- name: Run GenAIscript on the TLA+ specs that are added in this pull request.
  run: npx --yes genaiscript run tlAI-Linter.genai.js $(git diff --name-only HEAD^ | grep '.tla') -oa results.sarif
- name: Upload SARIF file
  uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: results.sarif
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",index:0,start:0,contentStart:0,end:31}]}],content:"",note:"",title:"Example: TLA+ Linter",level:1,noteHTML:"",raw:"",frontmatter:Me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",start:0,id:15,no:16},__clicksContext:null,__preloaded:!1}),Ae=L({}),wo=L({layout:g(()=>Ae.layout),transition:g(()=>Ae.transition),class:g(()=>Ae.class),clicks:g(()=>Ae.clicks),name:g(()=>Ae.name),preload:g(()=>Ae.preload),slide:{index:16,importChain:[{raw:`---
src: pages/system-components.md
---
`,content:"",frontmatter:{src:"pages/system-components.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/system-components.md"},frontmatterRaw:`src: pages/system-components.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:14,start:87,contentStart:90,end:91,imports:[{raw:`# GenAIScript System Elements

<p></p>

![GenAIScript Components](/overview.png)
`,title:"GenAIScript System Elements",level:1,content:`# GenAIScript System Elements

<p></p>

![GenAIScript Components](/overview.png)`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-components.md",index:0,start:0,contentStart:0,end:6}]}],content:"",note:"",title:"GenAIScript System Elements",level:1,noteHTML:"",raw:"",frontmatter:Ae,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-components.md",start:0,id:16,no:17},__clicksContext:null,__preloaded:!1}),Ce=L({}),ko=L({layout:g(()=>Ce.layout),transition:g(()=>Ce.transition),class:g(()=>Ce.class),clicks:g(()=>Ce.clicks),name:g(()=>Ce.name),preload:g(()=>Ce.preload),slide:{index:17,importChain:[{raw:`---
src: pages/tools.md
---
`,content:"",frontmatter:{src:"pages/tools.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/tools.md"},frontmatterRaw:`src: pages/tools.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides.md",index:15,start:91,contentStart:94,end:95,imports:[{raw:`
# Prompt + LLM + Tools = Agents


\`\`\`mermaid
stateDiagram
    prompt : prompt (system + user messages)
    tools: tools (web browser, code interpreter)
    response: response (raw text)
    pre: ...
    pre --> prompt
    pre --> tools
    prompt --> LLM
    tools --> LLM
    LLM --> tools
    LLM --> response
\`\`\`
`,title:"Prompt + LLM + Tools = Agents",level:1,content:`# Prompt + LLM + Tools = Agents


\`\`\`mermaid
stateDiagram
    prompt : prompt (system + user messages)
    tools: tools (web browser, code interpreter)
    response: response (raw text)
    pre: ...
    pre --> prompt
    pre --> tools
    prompt --> LLM
    tools --> LLM
    LLM --> tools
    LLM --> response
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tools.md",index:0,start:0,contentStart:0,end:18}]}],content:"",note:"",title:"Prompt + LLM + Tools = Agents",level:1,noteHTML:"",raw:"",frontmatter:Ce,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tools.md",start:0,id:17,no:18},__clicksContext:null,__preloaded:!1}),bo=[{no:1,meta:no,component:async()=>{try{return await x(()=>import("./slidev/1-D5WXuUfj.js"),__vite__mapDeps([0,1,2,3,4]))}catch(n){return console.error("Failed to load slide 1:",n),F}}},{no:2,meta:so,component:async()=>{try{return await x(()=>import("./slidev/2-CU8l2vp2.js"),__vite__mapDeps([5,6,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 2:",n),F}}},{no:3,meta:ro,component:async()=>{try{return await x(()=>import("./slidev/3-B-6DTyXJ.js"),__vite__mapDeps([8,6,1,2,3,4]))}catch(n){return console.error("Failed to load slide 3:",n),F}}},{no:4,meta:ao,component:async()=>{try{return await x(()=>import("./slidev/4-COsdhABT.js"),__vite__mapDeps([9,10,11,1,2,3,4]))}catch(n){return console.error("Failed to load slide 4:",n),F}}},{no:5,meta:oo,component:async()=>{try{return await x(()=>import("./slidev/5-Cj0oEhQ6.js"),__vite__mapDeps([12,6,1,2,10,11,7,3,4]))}catch(n){return console.error("Failed to load slide 5:",n),F}}},{no:6,meta:io,component:async()=>{try{return await x(()=>import("./slidev/6-DO3ZLhm3.js"),__vite__mapDeps([13,14,1,15,7,2,3,4]))}catch(n){return console.error("Failed to load slide 6:",n),F}}},{no:7,meta:lo,component:async()=>{try{return await x(()=>import("./slidev/7-BYbfucmH.js"),__vite__mapDeps([16,10,11,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 7:",n),F}}},{no:8,meta:co,component:async()=>{try{return await x(()=>import("./slidev/8-ChUiqJeA.js"),__vite__mapDeps([17,14,1,15,7,2,3,4]))}catch(n){return console.error("Failed to load slide 8:",n),F}}},{no:9,meta:uo,component:async()=>{try{return await x(()=>import("./slidev/9-CbD4amDo.js"),__vite__mapDeps([18,14,1,15,7,2,3,4]))}catch(n){return console.error("Failed to load slide 9:",n),F}}},{no:10,meta:fo,component:async()=>{try{return await x(()=>import("./slidev/10-XlS30lvJ.js"),__vite__mapDeps([19,6,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 10:",n),F}}},{no:11,meta:po,component:async()=>{try{return await x(()=>import("./slidev/11-Bl5fV9Qi.js"),__vite__mapDeps([20,10,11,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 11:",n),F}}},{no:12,meta:ho,component:async()=>{try{return await x(()=>import("./slidev/12-DIAnnT5M.js"),__vite__mapDeps([21,10,11,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 12:",n),F}}},{no:13,meta:mo,component:async()=>{try{return await x(()=>import("./slidev/13-CM2d0K_H.js"),__vite__mapDeps([22,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 13:",n),F}}},{no:14,meta:go,component:async()=>{try{return await x(()=>import("./slidev/14-Do9iae8v.js"),__vite__mapDeps([23,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 14:",n),F}}},{no:15,meta:yo,component:async()=>{try{return await x(()=>import("./slidev/15-DPME5rf7.js"),__vite__mapDeps([24,10,11,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 15:",n),F}}},{no:16,meta:vo,component:async()=>{try{return await x(()=>import("./slidev/16-NcMOBFTK.js"),__vite__mapDeps([25,10,11,1,2,7,3,4]))}catch(n){return console.error("Failed to load slide 16:",n),F}}},{no:17,meta:wo,component:async()=>{try{return await x(()=>import("./17-BKvaoi9a.js"),__vite__mapDeps([26,1,7,2,3,4]))}catch(n){return console.error("Failed to load slide 17:",n),F}}},{no:18,meta:ko,component:async()=>{try{return await x(()=>import("./slidev/18-CW2JGmr3.js"),__vite__mapDeps([27,14,1,15,7,2,3,4]))}catch(n){return console.error("Failed to load slide 18:",n),F}}}],re=gn(bo);function Ft(n){return re.value.find(e=>{var t;return e.no===+n||((t=e.meta.slide)==null?void 0:t.frontmatter.routeAlias)===n})}function He(n,e){var s;(typeof n=="number"||typeof n=="string")&&(n=Ft(n));const t=((s=n.meta.slide)==null?void 0:s.frontmatter.routeAlias)??n.no;return e?`/presenter/${t}`:`/${t}`}function So(n,e,{mode:t="replace"}={}){const s=xt();return g({get(){const r=s.currentRoute.value.query[n];return r==null?e:Array.isArray(r)?r.filter(Boolean):r},set(r){bt(()=>{(s.currentRoute.value.query[n]??(e==null?void 0:e.toString()))!==r.toString()&&s[mn(t)]({query:{...s.currentRoute.value.query,[n]:`${r}`===e?void 0:r}})})}})}const sn=A(0);function rn(n){if(n===!1||n==="false")return null;if(n==null||n===!0||n==="true")return"+1";if(typeof n=="string"&&"+-".includes(n[0]))return n;const e=+n;return Number.isNaN(e)?(console.error(`Invalid "at" prop value: ${n}`),null):e}function _o(n){return Array.isArray(n)?[rn(n[0]),rn(n[1])]:null}function Cs(n,e=0,t){const s={get current(){return nt(+n.value,e,s.total)},set current(r){n.value=nt(+r,e,s.total)},clicksStart:e,relativeOffsets:new Map,maxMap:Ys(new Map),onMounted(){},calculateSince(r,a=1){const o=rn(r);if(o==null)return null;let i,l,c;if(typeof o=="string"){const u=s.currentOffset,f=+o;i=u+f,l=u+f+a-1,c=f+a-1}else i=o,l=o+a-1,c=0;return{start:i,end:+Number.POSITIVE_INFINITY,max:l,delta:c,currentOffset:g(()=>s.current-i),isCurrent:g(()=>s.current===i),isActive:g(()=>s.current>=i)}},calculateRange(r){const a=_o(r);if(a==null)return null;const[o,i]=a;let l,c,u;return typeof o=="string"?(l=s.currentOffset+ +o,u=+o):(l=o,u=0),typeof i=="string"?(c=l+ +i,u+=+i):c=i,{start:l,end:c,max:c,delta:u,currentOffset:g(()=>s.current-l),isCurrent:g(()=>s.current===l),isActive:g(()=>l<=s.current&&s.current<c)}},calculate(r){return Array.isArray(r)?s.calculateRange(r):s.calculateSince(r)},register(r,a){if(!a)return;const{delta:o,max:i}=a;s.relativeOffsets.set(r,o),s.maxMap.set(r,i)},unregister(r){s.relativeOffsets.delete(r),s.maxMap.delete(r)},get currentOffset(){return sn.value,yr(...s.relativeOffsets.values())},get total(){return sn.value,t??Math.max(0,...s.maxMap.values())}};return s}function Lo(n,e=0){var s,r;const t=((s=n==null?void 0:n.meta.slide)==null?void 0:s.frontmatter.clicksStart)??0;return Cs(A(Math.max(e,t)),t,(r=n==null?void 0:n.meta)==null?void 0:r.clicks)}const Mo={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function Ao(n,e=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let t=n.name.includes("|")?n.name:Mo[n.name]||n.name;if(t.includes("|")){const[s,r]=t.split("|").map(a=>a.trim());t=e?r:s}if(t)return{...n,name:t}}function Co(n,e,t){var r,a;let s=n>0?(r=t==null?void 0:t.meta)==null?void 0:r.transition:(a=e==null?void 0:e.meta)==null?void 0:a.transition;return s||(s=E.transition),Ao(s,n<0)}function Ts(n,e,t=1){var r,a,o,i,l,c,u,f,d;const s=(a=(r=e.meta)==null?void 0:r.slide)==null?void 0:a.level;s&&s>t&&n.length>0?Ts(n[n.length-1].children,e,t+1):n.push({no:e.no,children:[],level:t,path:He(((i=(o=e.meta.slide)==null?void 0:o.frontmatter)==null?void 0:i.routeAlias)??e.no,!1),hideInToc:!!((u=(c=(l=e.meta)==null?void 0:l.slide)==null?void 0:c.frontmatter)!=null&&u.hideInToc),title:(d=(f=e.meta)==null?void 0:f.slide)==null?void 0:d.title})}function Os(n,e,t=!1,s,r){return n.map(a=>{const o={...a,active:a.no===(r==null?void 0:r.value),hasActiveParent:t};return o.children.length>0&&(o.children=Os(o.children,e,o.active||o.hasActiveParent,o,r)),s&&(o.active||o.activeParent)&&(s.activeParent=!0),o})}function $s(n,e=1){return n.filter(t=>!t.hideInToc).map(t=>({...t,children:$s(t.children,e+1)}))}function To(n,e,t){const s=g(()=>n.value.filter(a=>{var o,i;return(i=(o=a.meta)==null?void 0:o.slide)==null?void 0:i.title}).reduce((a,o)=>(Ts(a,o),a),[])),r=g(()=>Os(s.value,t.value,void 0,void 0,e));return g(()=>$s(r.value))}function Oo(n,e,t=A(0),s,r,a){const o=g(()=>re.value.length),i=A(0),l=A(0),c=g(()=>He(n.value,s.value)),u=g(()=>n.value.no),f=g(()=>{var O;return((O=n.value.meta)==null?void 0:O.layout)||(u.value===1?"cover":"default")}),d=g(()=>e.value.current),p=g(()=>e.value.clicksStart),m=g(()=>e.value.total),h=g(()=>re.value[Math.min(re.value.length,u.value+1)-1]),y=g(()=>re.value[Math.max(1,u.value-1)-1]),v=g(()=>u.value<re.value.length||d.value<m.value),w=g(()=>u.value>1||d.value>0),k=g(()=>Co(i.value,n.value,y.value));Q(n,(O,j)=>{i.value=O.no-j.no});async function b(O){return!1}const M=To(re,u,n);async function _(){l.value=1,m.value<=t.value?await $():t.value+=1}async function C(){l.value=-1,t.value<=p.value?await P(!0):t.value-=1}async function $(O=!1){l.value=1,u.value<re.value.length&&await T(u.value+1,O&&!r.value?mt:void 0)}async function P(O=!1){l.value=-1,u.value>1&&await T(u.value-1,O&&!r.value?mt:void 0)}function W(){return T(1)}function G(){return T(o.value)}async function T(O,j=0,se=!1){var ce,Ue,Be;kn.value=!1;const ze=u.value!==O,Z=j!==t.value,K=(ce=Ft(O))==null?void 0:ce.meta,D=((Ue=K==null?void 0:K.slide)==null?void 0:Ue.frontmatter.clicksStart)??0;j=nt(j,D,((Be=K==null?void 0:K.__clicksContext)==null?void 0:Be.total)??mt),(se||ze||Z)&&await(a==null?void 0:a.push({path:He(O,s.value),query:{...a.currentRoute.value.query,clicks:j===0?void 0:j.toString(),embedded:location.search.includes("embedded")?"true":void 0}}))}function I(){a==null||a.push({path:He(u.value,!0),query:{...a.currentRoute.value.query}})}function V(){a==null||a.push({path:He(u.value,!1),query:{...a.currentRoute.value.query}})}return{slides:re,total:o,currentPath:c,currentSlideNo:u,currentPage:u,currentSlideRoute:n,currentLayout:f,currentTransition:k,clicksDirection:l,nextRoute:h,prevRoute:y,clicksContext:e,clicks:d,clicksStart:p,clicksTotal:m,hasNext:v,hasPrev:w,tocTree:M,navDirection:i,openInEditor:b,next:_,prev:C,go:T,goLast:G,goFirst:W,nextSlide:$,prevSlide:P,enterPresenter:I,exitPresenter:V}}const $o=os(()=>{const n=xt(),e=g(()=>n.currentRoute.value),t=g(()=>(n.currentRoute.value.query,new URLSearchParams(location.search))),s=g(()=>t.value.has("print")),r=g(()=>t.value.get("print")==="clicks"),a=g(()=>t.value.has("embedded")),o=g(()=>e.value.name==="play"),i=g(()=>e.value.name==="presenter"),l=g(()=>e.value.name==="notes"),c=g(()=>!i.value&&(!E.remote||t.value.get("password")===E.remote)),u=Qs(o,i),f=g(()=>{var v;return u.value?((v=Ft(e.value.params.no))==null?void 0:v.no)??1:1}),d=g(()=>re.value[f.value-1]),p=So("clicks","0"),m=g(()=>y(d.value)),h=g({get(){let v=+(p.value||0);return Number.isNaN(v)&&(v=0),v},set(v){kn.value=!1,p.value=v.toString()}});function y(v){var b,M;if((b=v==null?void 0:v.meta)!=null&&b.__clicksContext)return v.meta.__clicksContext;const w=v.no,k=Cs(g({get(){return f.value===w?Math.max(+(p.value??0),k.clicksStart):f.value>w?mt:k.clicksStart},set(_){f.value===w&&(p.value=nt(_,k.clicksStart,k.total).toString())}}),((M=v==null?void 0:v.meta.slide)==null?void 0:M.frontmatter.clicksStart)??0,v==null?void 0:v.meta.clicks);return k.onMounted=()=>{f.value===w&&(p.value=nt(+p.value,k.clicksStart,k.total).toString())},v!=null&&v.meta&&(v.meta.__clicksContext=k),k}return{router:n,currentRoute:e,isPrintMode:s,isPrintWithClicks:r,isEmbedded:a,isPlaying:o,isPresenter:i,isNotesViewer:l,isPresenterAvailable:c,hasPrimarySlide:u,currentSlideNo:f,currentSlideRoute:d,clicksContext:m,queryClicksRaw:p,queryClicks:h,getPrimaryClicks:y}}),an=os(()=>{const n=$o(),e=xt(),t=Oo(n.currentSlideRoute,n.clicksContext,n.queryClicks,n.isPresenter,n.isPrintMode,e);return Q([t.total,n.currentRoute],async()=>{const s=n.currentRoute.value.params.no;n.hasPrimarySlide.value&&!Ft(s)&&(s&&s!=="index.html"?await t.go(t.total.value,0,!0):await t.go(1,0,!0))},{flush:"pre",immediate:!0}),{...t,...n}}),Bn=Xs(),qt=ne("slidev-color-schema","auto"),qn=g(()=>E.colorSchema!=="auto"),Is=g({get(){return qn.value?E.colorSchema==="dark":qt.value==="auto"?Bn.value:qt.value==="dark"},set(n){qn.value||(qt.value=n===Bn.value?"auto":n?"dark":"light")}}),Ki=is(Is);Et&&Q(Is,n=>{const e=document.querySelector("html");e.classList.toggle("dark",n),e.classList.toggle("light",!n)},{immediate:!0});const Io=[];function xo(){const n=rs().appContext.app,e=L({nav:an(),configs:E,themeConfigs:g(()=>E.themeConfig)});n.provide(wn,A("none")),n.provide(ba,e),n.provide(vn,g(()=>e.nav.currentSlideNo)),n.provide(Pt,gn(Lo()));for(const u of Io)u();const{clicksContext:t,currentSlideNo:s,hasPrimarySlide:r,isNotesViewer:a,isPresenter:o}=an();fa({title:Gt,htmlAttrs:E.htmlAttrs}),ma(`${Gt} - shared`),wa(`${Gt} - drawings`);const i=`${location.origin}_${On()}`;function l(){a.value||!o.value&&!La.includes(location.host.split(":")[0])||(o.value?(qe("page",+s.value),qe("clicks",t.value.current)):(qe("viewerPage",+s.value),qe("viewerClicks",t.value.current)),qe("lastUpdate",{id:i,type:o.value?"presenter":"viewer",time:new Date().getTime()}))}const c=xt();c.afterEach(l),Q(t,l),ga(u=>{var f;r.value&&((f=u.lastUpdate)==null?void 0:f.type)==="presenter"&&(+u.page!=+s.value||+t.value.current!=+u.clicks)&&(kn.value=!1,c.replace({path:He(u.page,o.value),query:{...c.currentRoute.value.query,clicks:u.clicks||0}}))})}const Eo=Zs({__name:"App",setup(n){return xo(),Ge(()=>{for(const[e,t]of Object.entries(Lr.value))document.body.style.setProperty(e,t.toString())}),(e,t)=>{const s=er("RouterView");return as(),tr(s)}}}),Po=As(Eo,[["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/App.vue"]]);function Yi(n,e=""){var r,a;const t=["slidev-page",e],s=(a=(r=n==null?void 0:n.meta)==null?void 0:r.slide)==null?void 0:a.no;return s!=null&&t.push(`slidev-page-${s}`),t.filter(Boolean).join(" ")}async function Qi(){const{saveAs:n}=await x(()=>import("./modules/file-saver-EUMWMpoS.js").then(e=>e.F),[]);n(typeof E.download=="string"?E.download:E.exportFilename?`${E.exportFilename}.pdf`:"/genaiscript/slides/default/slidev-exported.pdf",`${E.title}.pdf`)}function Ve(n,e,t){var s;return((s=n.instance)==null?void 0:s.$).provides[e]??t}function Do(){return{install(n){n.directive("click",{name:"v-click",mounted(e,t){const s=wt(e,t,t.value);s!=null&&(e.classList.toggle(ht,!0),e.dataset.slidevClicksStart=String(s.start),Number.isFinite(s.end)&&(e.dataset.slidevClicksEnd=String(s.end)),e.watchStopHandle=Ge(()=>{const r=s.isActive.value,a=s.isCurrent.value,o=r&&!a;s.flagHide?(e.classList.toggle(s.flagFade?Ke:Je,r),e.classList.toggle(Wt,r)):e.classList.toggle(s.flagFade?Ke:Je,!r),e.classList.toggle(zt,a),e.classList.toggle(Ut,o)}))},unmounted:Jt}),n.directive("after",{name:"v-after",mounted(e,t){const s=wt(e,t,"+0");s!=null&&(e.classList.toggle(ht,!0),e.watchStopHandle=Ge(()=>{const r=s.isActive.value,a=s.isCurrent.value,o=r&&!a;s.flagHide?(e.classList.toggle(s.flagFade?Ke:Je,r),e.classList.toggle(Wt,r)):e.classList.toggle(s.flagFade?Ke:Je,!r),e.classList.toggle(zt,a),e.classList.toggle(Ut,o)}))},unmounted:Jt}),n.directive("click-hide",{name:"v-click-hide",mounted(e,t){const s=wt(e,t,t.value,!0);s!=null&&(e.classList.toggle(ht,!0),e.watchStopHandle=Ge(()=>{const r=s.isActive.value,a=s.isCurrent.value,o=r&&!a;e.classList.toggle(s.flagFade?Ke:Je,r),e.classList.toggle(Wt,r),e.classList.toggle(zt,a),e.classList.toggle(Ut,o)}))},unmounted:Jt})}}}const xs=new Map;function wt(n,e,t,s=!1){var f;const r=(f=Ve(e,Pt))==null?void 0:f.value;if(!n||!r)return null;const a=s||e.modifiers.hide!==!1&&e.modifiers.hide!=null,o=e.modifiers.fade!==!1&&e.modifiers.fade!=null,i=r.calculate(t);if(!i)return null;r.register(n,i);const l=g(()=>a?!i.isActive.value:i.isActive.value),c=g(()=>l.value?"shown":Number.isFinite(i.end)?r.current<i.start?"before":"after":a?"after":"before"),u={...i,isShown:l,visibilityState:c,flagFade:o,flagHide:a};return xs.set(n,u),u}function Jt(n,e){var s,r;n.classList.toggle(ht,!1);const t=(s=Ve(e,Pt))==null?void 0:s.value;t==null||t.unregister(n),(r=n.watchStopHandle)==null||r.call(n)}function Es(){return Math.floor(Math.random()*2**31)}class No{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function on(n,e,t){if(n&&n.length){const[s,r]=e,a=Math.PI/180*t,o=Math.cos(a),i=Math.sin(a);for(const l of n){const[c,u]=l;l[0]=(c-s)*o-(u-r)*i+s,l[1]=(c-s)*i+(u-r)*o+r}}}function Ro(n,e,t){const s=[];n.forEach(r=>s.push(...r)),on(s,e,t)}function jo(n,e){return n[0]===e[0]&&n[1]===e[1]}function Fo(n,e,t,s=1){const r=t,a=Math.max(e,.1),o=n[0]&&n[0][0]&&typeof n[0][0]=="number"?[n]:n,i=[0,0];if(r)for(const c of o)on(c,i,r);const l=Ho(o,a,s);if(r){for(const c of o)on(c,i,-r);Ro(l,i,-r)}return l}function Ho(n,e,t){const s=[];for(const c of n){const u=[...c];jo(u[0],u[u.length-1])||u.push([u[0][0],u[0][1]]),u.length>2&&s.push(u)}const r=[];e=Math.max(e,.1);const a=[];for(const c of s)for(let u=0;u<c.length-1;u++){const f=c[u],d=c[u+1];if(f[1]!==d[1]){const p=Math.min(f[1],d[1]);a.push({ymin:p,ymax:Math.max(f[1],d[1]),x:p===f[1]?f[0]:d[0],islope:(d[0]-f[0])/(d[1]-f[1])})}}if(a.sort((c,u)=>c.ymin<u.ymin?-1:c.ymin>u.ymin?1:c.x<u.x?-1:c.x>u.x?1:c.ymax===u.ymax?0:(c.ymax-u.ymax)/Math.abs(c.ymax-u.ymax)),!a.length)return r;let o=[],i=a[0].ymin,l=0;for(;o.length||a.length;){if(a.length){let c=-1;for(let f=0;f<a.length&&!(a[f].ymin>i);f++)c=f;a.splice(0,c+1).forEach(f=>{o.push({s:i,edge:f})})}if(o=o.filter(c=>!(c.edge.ymax<=i)),o.sort((c,u)=>c.edge.x===u.edge.x?0:(c.edge.x-u.edge.x)/Math.abs(c.edge.x-u.edge.x)),(t!==1||l%e===0)&&o.length>1)for(let c=0;c<o.length;c=c+2){const u=c+1;if(u>=o.length)break;const f=o[c].edge,d=o[u].edge;r.push([[Math.round(f.x),i],[Math.round(d.x),i]])}i+=t,o.forEach(c=>{c.edge.x=c.edge.x+t*c.edge.islope}),l++}return r}function ot(n,e){var t;const s=e.hachureAngle+90;let r=e.hachureGap;r<0&&(r=e.strokeWidth*4),r=Math.round(Math.max(r,.1));let a=1;return e.roughness>=1&&(((t=e.randomizer)===null||t===void 0?void 0:t.next())||Math.random())>.7&&(a=r),Fo(n,r,s,a||1)}class $n{constructor(e){this.helper=e}fillPolygons(e,t){return this._fillPolygons(e,t)}_fillPolygons(e,t){const s=ot(e,t);return{type:"fillSketch",ops:this.renderLines(s,t)}}renderLines(e,t){const s=[];for(const r of e)s.push(...this.helper.doubleLineOps(r[0][0],r[0][1],r[1][0],r[1][1],t));return s}}function Ht(n){const e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}class Go extends $n{fillPolygons(e,t){let s=t.hachureGap;s<0&&(s=t.strokeWidth*4),s=Math.max(s,.1);const r=Object.assign({},t,{hachureGap:s}),a=ot(e,r),o=Math.PI/180*t.hachureAngle,i=[],l=s*.5*Math.cos(o),c=s*.5*Math.sin(o);for(const[f,d]of a)Ht([f,d])&&i.push([[f[0]-l,f[1]+c],[...d]],[[f[0]+l,f[1]-c],[...d]]);return{type:"fillSketch",ops:this.renderLines(i,t)}}}class Vo extends $n{fillPolygons(e,t){const s=this._fillPolygons(e,t),r=Object.assign({},t,{hachureAngle:t.hachureAngle+90}),a=this._fillPolygons(e,r);return s.ops=s.ops.concat(a.ops),s}}class Wo{constructor(e){this.helper=e}fillPolygons(e,t){t=Object.assign({},t,{hachureAngle:0});const s=ot(e,t);return this.dotsOnLines(s,t)}dotsOnLines(e,t){const s=[];let r=t.hachureGap;r<0&&(r=t.strokeWidth*4),r=Math.max(r,.1);let a=t.fillWeight;a<0&&(a=t.strokeWidth/2);const o=r/4;for(const i of e){const l=Ht(i),c=l/r,u=Math.ceil(c)-1,f=l-u*r,d=(i[0][0]+i[1][0])/2-r/4,p=Math.min(i[0][1],i[1][1]);for(let m=0;m<u;m++){const h=p+f+m*r,y=d-o+Math.random()*2*o,v=h-o+Math.random()*2*o,w=this.helper.ellipse(y,v,a,a,t);s.push(...w.ops)}}return{type:"fillSketch",ops:s}}}class zo{constructor(e){this.helper=e}fillPolygons(e,t){const s=ot(e,t);return{type:"fillSketch",ops:this.dashedLine(s,t)}}dashedLine(e,t){const s=t.dashOffset<0?t.hachureGap<0?t.strokeWidth*4:t.hachureGap:t.dashOffset,r=t.dashGap<0?t.hachureGap<0?t.strokeWidth*4:t.hachureGap:t.dashGap,a=[];return e.forEach(o=>{const i=Ht(o),l=Math.floor(i/(s+r)),c=(i+r-l*(s+r))/2;let u=o[0],f=o[1];u[0]>f[0]&&(u=o[1],f=o[0]);const d=Math.atan((f[1]-u[1])/(f[0]-u[0]));for(let p=0;p<l;p++){const m=p*(s+r),h=m+s,y=[u[0]+m*Math.cos(d)+c*Math.cos(d),u[1]+m*Math.sin(d)+c*Math.sin(d)],v=[u[0]+h*Math.cos(d)+c*Math.cos(d),u[1]+h*Math.sin(d)+c*Math.sin(d)];a.push(...this.helper.doubleLineOps(y[0],y[1],v[0],v[1],t))}}),a}}class Uo{constructor(e){this.helper=e}fillPolygons(e,t){const s=t.hachureGap<0?t.strokeWidth*4:t.hachureGap,r=t.zigzagOffset<0?s:t.zigzagOffset;t=Object.assign({},t,{hachureGap:s+r});const a=ot(e,t);return{type:"fillSketch",ops:this.zigzagLines(a,r,t)}}zigzagLines(e,t,s){const r=[];return e.forEach(a=>{const o=Ht(a),i=Math.round(o/(2*t));let l=a[0],c=a[1];l[0]>c[0]&&(l=a[1],c=a[0]);const u=Math.atan((c[1]-l[1])/(c[0]-l[0]));for(let f=0;f<i;f++){const d=f*2*t,p=(f+1)*2*t,m=Math.sqrt(2*Math.pow(t,2)),h=[l[0]+d*Math.cos(u),l[1]+d*Math.sin(u)],y=[l[0]+p*Math.cos(u),l[1]+p*Math.sin(u)],v=[h[0]+m*Math.cos(u+Math.PI/4),h[1]+m*Math.sin(u+Math.PI/4)];r.push(...this.helper.doubleLineOps(h[0],h[1],v[0],v[1],s),...this.helper.doubleLineOps(v[0],v[1],y[0],y[1],s))}}),r}}const z={};function Bo(n,e){let t=n.fillStyle||"hachure";if(!z[t])switch(t){case"zigzag":z[t]||(z[t]=new Go(e));break;case"cross-hatch":z[t]||(z[t]=new Vo(e));break;case"dots":z[t]||(z[t]=new Wo(e));break;case"dashed":z[t]||(z[t]=new zo(e));break;case"zigzag-line":z[t]||(z[t]=new Uo(e));break;case"hachure":default:t="hachure",z[t]||(z[t]=new $n(e));break}return z[t]}const qo=0,ln=1,Ps=2,lt={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function Jo(n){const e=new Array;for(;n!=="";)if(n.match(/^([ \t\r\n,]+)/))n=n.substr(RegExp.$1.length);else if(n.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:qo,text:RegExp.$1},n=n.substr(RegExp.$1.length);else if(n.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))e[e.length]={type:ln,text:`${parseFloat(RegExp.$1)}`},n=n.substr(RegExp.$1.length);else return[];return e[e.length]={type:Ps,text:""},e}function Kt(n,e){return n.type===e}function In(n){const e=[],t=Jo(n);let s="BOD",r=0,a=t[r];for(;!Kt(a,Ps);){let o=0;const i=[];if(s==="BOD")if(a.text==="M"||a.text==="m")r++,o=lt[a.text],s=a.text;else return In("M0,0"+n);else Kt(a,ln)?o=lt[s]:(r++,o=lt[a.text],s=a.text);if(r+o<t.length){for(let l=r;l<r+o;l++){const c=t[l];if(Kt(c,ln))i[i.length]=+c.text;else throw new Error("Param not a number: "+s+","+c.text)}if(typeof lt[s]=="number"){const l={key:s,data:i};e.push(l),r+=o,a=t[r],s==="M"&&(s="L"),s==="m"&&(s="l")}else throw new Error("Bad segment: "+s)}else throw new Error("Path data ended short")}return e}function Ds(n){let e=0,t=0,s=0,r=0;const a=[];for(const{key:o,data:i}of n)switch(o){case"M":a.push({key:"M",data:[...i]}),[e,t]=i,[s,r]=i;break;case"m":e+=i[0],t+=i[1],a.push({key:"M",data:[e,t]}),s=e,r=t;break;case"L":a.push({key:"L",data:[...i]}),[e,t]=i;break;case"l":e+=i[0],t+=i[1],a.push({key:"L",data:[e,t]});break;case"C":a.push({key:"C",data:[...i]}),e=i[4],t=i[5];break;case"c":{const l=i.map((c,u)=>u%2?c+t:c+e);a.push({key:"C",data:l}),e=l[4],t=l[5];break}case"Q":a.push({key:"Q",data:[...i]}),e=i[2],t=i[3];break;case"q":{const l=i.map((c,u)=>u%2?c+t:c+e);a.push({key:"Q",data:l}),e=l[2],t=l[3];break}case"A":a.push({key:"A",data:[...i]}),e=i[5],t=i[6];break;case"a":e+=i[5],t+=i[6],a.push({key:"A",data:[i[0],i[1],i[2],i[3],i[4],e,t]});break;case"H":a.push({key:"H",data:[...i]}),e=i[0];break;case"h":e+=i[0],a.push({key:"H",data:[e]});break;case"V":a.push({key:"V",data:[...i]}),t=i[0];break;case"v":t+=i[0],a.push({key:"V",data:[t]});break;case"S":a.push({key:"S",data:[...i]}),e=i[2],t=i[3];break;case"s":{const l=i.map((c,u)=>u%2?c+t:c+e);a.push({key:"S",data:l}),e=l[2],t=l[3];break}case"T":a.push({key:"T",data:[...i]}),e=i[0],t=i[1];break;case"t":e+=i[0],t+=i[1],a.push({key:"T",data:[e,t]});break;case"Z":case"z":a.push({key:"Z",data:[]}),e=s,t=r;break}return a}function Ns(n){const e=[];let t="",s=0,r=0,a=0,o=0,i=0,l=0;for(const{key:c,data:u}of n){switch(c){case"M":e.push({key:"M",data:[...u]}),[s,r]=u,[a,o]=u;break;case"C":e.push({key:"C",data:[...u]}),s=u[4],r=u[5],i=u[2],l=u[3];break;case"L":e.push({key:"L",data:[...u]}),[s,r]=u;break;case"H":s=u[0],e.push({key:"L",data:[s,r]});break;case"V":r=u[0],e.push({key:"L",data:[s,r]});break;case"S":{let f=0,d=0;t==="C"||t==="S"?(f=s+(s-i),d=r+(r-l)):(f=s,d=r),e.push({key:"C",data:[f,d,...u]}),i=u[0],l=u[1],s=u[2],r=u[3];break}case"T":{const[f,d]=u;let p=0,m=0;t==="Q"||t==="T"?(p=s+(s-i),m=r+(r-l)):(p=s,m=r);const h=s+2*(p-s)/3,y=r+2*(m-r)/3,v=f+2*(p-f)/3,w=d+2*(m-d)/3;e.push({key:"C",data:[h,y,v,w,f,d]}),i=p,l=m,s=f,r=d;break}case"Q":{const[f,d,p,m]=u,h=s+2*(f-s)/3,y=r+2*(d-r)/3,v=p+2*(f-p)/3,w=m+2*(d-m)/3;e.push({key:"C",data:[h,y,v,w,p,m]}),i=f,l=d,s=p,r=m;break}case"A":{const f=Math.abs(u[0]),d=Math.abs(u[1]),p=u[2],m=u[3],h=u[4],y=u[5],v=u[6];f===0||d===0?(e.push({key:"C",data:[s,r,y,v,y,v]}),s=y,r=v):(s!==y||r!==v)&&(Rs(s,r,y,v,f,d,p,m,h).forEach(function(k){e.push({key:"C",data:k})}),s=y,r=v);break}case"Z":e.push({key:"Z",data:[]}),s=a,r=o;break}t=c}return e}function Ko(n){return Math.PI*n/180}function Ye(n,e,t){const s=n*Math.cos(t)-e*Math.sin(t),r=n*Math.sin(t)+e*Math.cos(t);return[s,r]}function Rs(n,e,t,s,r,a,o,i,l,c){const u=Ko(o);let f=[],d=0,p=0,m=0,h=0;if(c)[d,p,m,h]=c;else{[n,e]=Ye(n,e,-u),[t,s]=Ye(t,s,-u);const T=(n-t)/2,I=(e-s)/2;let V=T*T/(r*r)+I*I/(a*a);V>1&&(V=Math.sqrt(V),r=V*r,a=V*a);const O=i===l?-1:1,j=r*r,se=a*a,ze=j*se-j*I*I-se*T*T,Z=j*I*I+se*T*T,K=O*Math.sqrt(Math.abs(ze/Z));m=K*r*I/a+(n+t)/2,h=K*-a*T/r+(e+s)/2,d=Math.asin(parseFloat(((e-h)/a).toFixed(9))),p=Math.asin(parseFloat(((s-h)/a).toFixed(9))),n<m&&(d=Math.PI-d),t<m&&(p=Math.PI-p),d<0&&(d=Math.PI*2+d),p<0&&(p=Math.PI*2+p),l&&d>p&&(d=d-Math.PI*2),!l&&p>d&&(p=p-Math.PI*2)}let y=p-d;if(Math.abs(y)>Math.PI*120/180){const T=p,I=t,V=s;l&&p>d?p=d+Math.PI*120/180*1:p=d+Math.PI*120/180*-1,t=m+r*Math.cos(p),s=h+a*Math.sin(p),f=Rs(t,s,I,V,r,a,o,0,l,[p,T,m,h])}y=p-d;const v=Math.cos(d),w=Math.sin(d),k=Math.cos(p),b=Math.sin(p),M=Math.tan(y/4),_=4/3*r*M,C=4/3*a*M,$=[n,e],P=[n+_*w,e-C*v],W=[t+_*b,s-C*k],G=[t,s];if(P[0]=2*$[0]-P[0],P[1]=2*$[1]-P[1],c)return[P,W,G].concat(f);{f=[P,W,G].concat(f);const T=[];for(let I=0;I<f.length;I+=3){const V=Ye(f[I][0],f[I][1],u),O=Ye(f[I+1][0],f[I+1][1],u),j=Ye(f[I+2][0],f[I+2][1],u);T.push([V[0],V[1],O[0],O[1],j[0],j[1]])}return T}}const Yo={randOffset:Zo,randOffsetWithRange:ei,ellipse:cn,doubleLineOps:ti};function Y(n,e,t,s,r){return{type:"path",ops:le(n,e,t,s,r)}}function tt(n,e,t){const s=(n||[]).length;if(s>2){const r=[];for(let a=0;a<s-1;a++)r.push(...le(n[a][0],n[a][1],n[a+1][0],n[a+1][1],t));return e&&r.push(...le(n[s-1][0],n[s-1][1],n[0][0],n[0][1],t)),{type:"path",ops:r}}else if(s===2)return Y(n[0][0],n[0][1],n[1][0],n[1][1],t);return{type:"path",ops:[]}}function Qo(n,e){return tt(n,!0,e)}function js(n,e,t,s,r){const a=[[n,e],[n+t,e],[n+t,e+s],[n,e+s]];return Qo(a,r)}function Jn(n,e){if(n.length){const s=typeof n[0][0]=="number"?[n]:n,r=ct(s[0],1*(1+e.roughness*.2),e),a=e.disableMultiStroke?[]:ct(s[0],1.5*(1+e.roughness*.22),Qn(e));for(let o=1;o<s.length;o++){const i=s[o];if(i.length){const l=ct(i,1*(1+e.roughness*.2),e),c=e.disableMultiStroke?[]:ct(i,1.5*(1+e.roughness*.22),Qn(e));for(const u of l)u.op!=="move"&&r.push(u);for(const u of c)u.op!=="move"&&a.push(u)}}return{type:"path",ops:r.concat(a)}}return{type:"path",ops:[]}}function cn(n,e,t,s,r){const a=Fs(t,s,r);return un(n,e,r,a).opset}function Fs(n,e,t){const s=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),r=Math.ceil(Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*s)),a=Math.PI*2/r;let o=Math.abs(n/2),i=Math.abs(e/2);const l=1-t.curveFitting;return o+=S(o*l,t),i+=S(i*l,t),{increment:a,rx:o,ry:i}}function un(n,e,t,s){const[r,a]=Xn(s.increment,n,e,s.rx,s.ry,1,s.increment*Ct(.1,Ct(.4,1,t),t),t);let o=Tt(r,null,t);if(!t.disableMultiStroke&&t.roughness!==0){const[i]=Xn(s.increment,n,e,s.rx,s.ry,1.5,0,t),l=Tt(i,null,t);o=o.concat(l)}return{estimatedPoints:a,opset:{type:"path",ops:o}}}function Kn(n,e,t,s,r,a,o,i,l){const c=n,u=e;let f=Math.abs(t/2),d=Math.abs(s/2);f+=S(f*.01,l),d+=S(d*.01,l);let p=r,m=a;for(;p<0;)p+=Math.PI*2,m+=Math.PI*2;m-p>Math.PI*2&&(p=0,m=Math.PI*2);const h=Math.PI*2/l.curveStepCount,y=Math.min(h/2,(m-p)/2),v=Zn(y,c,u,f,d,p,m,1,l);if(!l.disableMultiStroke){const w=Zn(y,c,u,f,d,p,m,1.5,l);v.push(...w)}return o&&(i?v.push(...le(c,u,c+f*Math.cos(p),u+d*Math.sin(p),l),...le(c,u,c+f*Math.cos(m),u+d*Math.sin(m),l)):v.push({op:"lineTo",data:[c,u]},{op:"lineTo",data:[c+f*Math.cos(p),u+d*Math.sin(p)]})),{type:"path",ops:v}}function Yn(n,e){const t=Ns(Ds(In(n))),s=[];let r=[0,0],a=[0,0];for(const{key:o,data:i}of t)switch(o){case"M":{a=[i[0],i[1]],r=[i[0],i[1]];break}case"L":s.push(...le(a[0],a[1],i[0],i[1],e)),a=[i[0],i[1]];break;case"C":{const[l,c,u,f,d,p]=i;s.push(...ni(l,c,u,f,d,p,a,e)),a=[d,p];break}case"Z":s.push(...le(a[0],a[1],r[0],r[1],e)),a=[r[0],r[1]];break}return{type:"path",ops:s}}function Yt(n,e){const t=[];for(const s of n)if(s.length){const r=e.maxRandomnessOffset||0,a=s.length;if(a>2){t.push({op:"move",data:[s[0][0]+S(r,e),s[0][1]+S(r,e)]});for(let o=1;o<a;o++)t.push({op:"lineTo",data:[s[o][0]+S(r,e),s[o][1]+S(r,e)]})}}return{type:"fillPath",ops:t}}function Ne(n,e){return Bo(e,Yo).fillPolygons(n,e)}function Xo(n,e,t,s,r,a,o){const i=n,l=e;let c=Math.abs(t/2),u=Math.abs(s/2);c+=S(c*.01,o),u+=S(u*.01,o);let f=r,d=a;for(;f<0;)f+=Math.PI*2,d+=Math.PI*2;d-f>Math.PI*2&&(f=0,d=Math.PI*2);const p=(d-f)/o.curveStepCount,m=[];for(let h=f;h<=d;h=h+p)m.push([i+c*Math.cos(h),l+u*Math.sin(h)]);return m.push([i+c*Math.cos(d),l+u*Math.sin(d)]),m.push([i,l]),Ne([m],o)}function Zo(n,e){return S(n,e)}function ei(n,e,t){return Ct(n,e,t)}function ti(n,e,t,s,r){return le(n,e,t,s,r,!0)}function Qn(n){const e=Object.assign({},n);return e.randomizer=void 0,n.seed&&(e.seed=n.seed+1),e}function Hs(n){return n.randomizer||(n.randomizer=new No(n.seed||0)),n.randomizer.next()}function Ct(n,e,t,s=1){return t.roughness*s*(Hs(t)*(e-n)+n)}function S(n,e,t=1){return Ct(-n,n,e,t)}function le(n,e,t,s,r,a=!1){const o=a?r.disableMultiStrokeFill:r.disableMultiStroke,i=fn(n,e,t,s,r,!0,!1);if(o)return i;const l=fn(n,e,t,s,r,!0,!0);return i.concat(l)}function fn(n,e,t,s,r,a,o){const i=Math.pow(n-t,2)+Math.pow(e-s,2),l=Math.sqrt(i);let c=1;l<200?c=1:l>500?c=.4:c=-.0016668*l+1.233334;let u=r.maxRandomnessOffset||0;u*u*100>i&&(u=l/10);const f=u/2,d=.2+Hs(r)*.2;let p=r.bowing*r.maxRandomnessOffset*(s-e)/200,m=r.bowing*r.maxRandomnessOffset*(n-t)/200;p=S(p,r,c),m=S(m,r,c);const h=[],y=()=>S(f,r,c),v=()=>S(u,r,c),w=r.preserveVertices;return o?h.push({op:"move",data:[n+(w?0:y()),e+(w?0:y())]}):h.push({op:"move",data:[n+(w?0:S(u,r,c)),e+(w?0:S(u,r,c))]}),o?h.push({op:"bcurveTo",data:[p+n+(t-n)*d+y(),m+e+(s-e)*d+y(),p+n+2*(t-n)*d+y(),m+e+2*(s-e)*d+y(),t+(w?0:y()),s+(w?0:y())]}):h.push({op:"bcurveTo",data:[p+n+(t-n)*d+v(),m+e+(s-e)*d+v(),p+n+2*(t-n)*d+v(),m+e+2*(s-e)*d+v(),t+(w?0:v()),s+(w?0:v())]}),h}function ct(n,e,t){if(!n.length)return[];const s=[];s.push([n[0][0]+S(e,t),n[0][1]+S(e,t)]),s.push([n[0][0]+S(e,t),n[0][1]+S(e,t)]);for(let r=1;r<n.length;r++)s.push([n[r][0]+S(e,t),n[r][1]+S(e,t)]),r===n.length-1&&s.push([n[r][0]+S(e,t),n[r][1]+S(e,t)]);return Tt(s,null,t)}function Tt(n,e,t){const s=n.length,r=[];if(s>3){const a=[],o=1-t.curveTightness;r.push({op:"move",data:[n[1][0],n[1][1]]});for(let i=1;i+2<s;i++){const l=n[i];a[0]=[l[0],l[1]],a[1]=[l[0]+(o*n[i+1][0]-o*n[i-1][0])/6,l[1]+(o*n[i+1][1]-o*n[i-1][1])/6],a[2]=[n[i+1][0]+(o*n[i][0]-o*n[i+2][0])/6,n[i+1][1]+(o*n[i][1]-o*n[i+2][1])/6],a[3]=[n[i+1][0],n[i+1][1]],r.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}}else s===3?(r.push({op:"move",data:[n[1][0],n[1][1]]}),r.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):s===2&&r.push(...fn(n[0][0],n[0][1],n[1][0],n[1][1],t,!0,!0));return r}function Xn(n,e,t,s,r,a,o,i){const l=i.roughness===0,c=[],u=[];if(l){n=n/4,u.push([e+s*Math.cos(-n),t+r*Math.sin(-n)]);for(let f=0;f<=Math.PI*2;f=f+n){const d=[e+s*Math.cos(f),t+r*Math.sin(f)];c.push(d),u.push(d)}u.push([e+s*Math.cos(0),t+r*Math.sin(0)]),u.push([e+s*Math.cos(n),t+r*Math.sin(n)])}else{const f=S(.5,i)-Math.PI/2;u.push([S(a,i)+e+.9*s*Math.cos(f-n),S(a,i)+t+.9*r*Math.sin(f-n)]);const d=Math.PI*2+f-.01;for(let p=f;p<d;p=p+n){const m=[S(a,i)+e+s*Math.cos(p),S(a,i)+t+r*Math.sin(p)];c.push(m),u.push(m)}u.push([S(a,i)+e+s*Math.cos(f+Math.PI*2+o*.5),S(a,i)+t+r*Math.sin(f+Math.PI*2+o*.5)]),u.push([S(a,i)+e+.98*s*Math.cos(f+o),S(a,i)+t+.98*r*Math.sin(f+o)]),u.push([S(a,i)+e+.9*s*Math.cos(f+o*.5),S(a,i)+t+.9*r*Math.sin(f+o*.5)])}return[u,c]}function Zn(n,e,t,s,r,a,o,i,l){const c=a+S(.1,l),u=[];u.push([S(i,l)+e+.9*s*Math.cos(c-n),S(i,l)+t+.9*r*Math.sin(c-n)]);for(let f=c;f<=o;f=f+n)u.push([S(i,l)+e+s*Math.cos(f),S(i,l)+t+r*Math.sin(f)]);return u.push([e+s*Math.cos(o),t+r*Math.sin(o)]),u.push([e+s*Math.cos(o),t+r*Math.sin(o)]),Tt(u,null,l)}function ni(n,e,t,s,r,a,o,i){const l=[],c=[i.maxRandomnessOffset||1,(i.maxRandomnessOffset||1)+.3];let u=[0,0];const f=i.disableMultiStroke?1:2,d=i.preserveVertices;for(let p=0;p<f;p++)p===0?l.push({op:"move",data:[o[0],o[1]]}):l.push({op:"move",data:[o[0]+(d?0:S(c[0],i)),o[1]+(d?0:S(c[0],i))]}),u=d?[r,a]:[r+S(c[p],i),a+S(c[p],i)],l.push({op:"bcurveTo",data:[n+S(c[p],i),e+S(c[p],i),t+S(c[p],i),s+S(c[p],i),u[0],u[1]]});return l}function Qe(n){return[...n]}function es(n,e=0){const t=n.length;if(t<3)throw new Error("A curve must have at least three points.");const s=[];if(t===3)s.push(Qe(n[0]),Qe(n[1]),Qe(n[2]),Qe(n[2]));else{const r=[];r.push(n[0],n[0]);for(let i=1;i<n.length;i++)r.push(n[i]),i===n.length-1&&r.push(n[i]);const a=[],o=1-e;s.push(Qe(r[0]));for(let i=1;i+2<r.length;i++){const l=r[i];a[0]=[l[0],l[1]],a[1]=[l[0]+(o*r[i+1][0]-o*r[i-1][0])/6,l[1]+(o*r[i+1][1]-o*r[i-1][1])/6],a[2]=[r[i+1][0]+(o*r[i][0]-o*r[i+2][0])/6,r[i+1][1]+(o*r[i][1]-o*r[i+2][1])/6],a[3]=[r[i+1][0],r[i+1][1]],s.push(a[1],a[2],a[3])}}return s}function si(n,e){return Math.sqrt(kt(n,e))}function kt(n,e){return Math.pow(n[0]-e[0],2)+Math.pow(n[1]-e[1],2)}function ri(n,e,t){const s=kt(e,t);if(s===0)return kt(n,e);let r=((n[0]-e[0])*(t[0]-e[0])+(n[1]-e[1])*(t[1]-e[1]))/s;return r=Math.max(0,Math.min(1,r)),kt(n,Oe(e,t,r))}function Oe(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t]}function ai(n,e){const t=n[e+0],s=n[e+1],r=n[e+2],a=n[e+3];let o=3*s[0]-2*t[0]-a[0];o*=o;let i=3*s[1]-2*t[1]-a[1];i*=i;let l=3*r[0]-2*a[0]-t[0];l*=l;let c=3*r[1]-2*a[1]-t[1];return c*=c,o<l&&(o=l),i<c&&(i=c),o+i}function dn(n,e,t,s){const r=s||[];if(ai(n,e)<t){const a=n[e+0];r.length?si(r[r.length-1],a)>1&&r.push(a):r.push(a),r.push(n[e+3])}else{const o=n[e+0],i=n[e+1],l=n[e+2],c=n[e+3],u=Oe(o,i,.5),f=Oe(i,l,.5),d=Oe(l,c,.5),p=Oe(u,f,.5),m=Oe(f,d,.5),h=Oe(p,m,.5);dn([o,u,p,h],0,t,r),dn([h,m,d,c],0,t,r)}return r}function oi(n,e){return Ot(n,0,n.length,e)}function Ot(n,e,t,s,r){const a=r||[],o=n[e],i=n[t-1];let l=0,c=1;for(let u=e+1;u<t-1;++u){const f=ri(n[u],o,i);f>l&&(l=f,c=u)}return Math.sqrt(l)>s?(Ot(n,e,c+1,s,a),Ot(n,c,t,s,a)):(a.length||a.push(o),a.push(i)),a}function pn(n,e=.15,t){const s=[],r=(n.length-1)/3;for(let a=0;a<r;a++){const o=a*3;dn(n,o,e,s)}return t&&t>0?Ot(s,0,s.length,t):s}function ii(n,e,t){const s=In(n),r=Ns(Ds(s)),a=[];let o=[],i=[0,0],l=[];const c=()=>{l.length>=4&&o.push(...pn(l,e)),l=[]},u=()=>{c(),o.length&&(a.push(o),o=[])};for(const{key:d,data:p}of r)switch(d){case"M":u(),i=[p[0],p[1]],o.push(i);break;case"L":c(),o.push([p[0],p[1]]);break;case"C":if(!l.length){const m=o.length?o[o.length-1]:i;l.push([m[0],m[1]])}l.push([p[0],p[1]]),l.push([p[2],p[3]]),l.push([p[4],p[5]]);break;case"Z":c(),o.push([i[0],i[1]]);break}if(u(),!t)return a;const f=[];for(const d of a){const p=oi(d,t);p.length&&f.push(p)}return f}const q="none";class li{constructor(e){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=e||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Es()}_o(e){return e?Object.assign({},this.defaultOptions,e):this.defaultOptions}_d(e,t,s){return{shape:e,sets:t||[],options:s||this.defaultOptions}}line(e,t,s,r,a){const o=this._o(a);return this._d("line",[Y(e,t,s,r,o)],o)}rectangle(e,t,s,r,a){const o=this._o(a),i=[],l=js(e,t,s,r,o);if(o.fill){const c=[[e,t],[e+s,t],[e+s,t+r],[e,t+r]];o.fillStyle==="solid"?i.push(Yt([c],o)):i.push(Ne([c],o))}return o.stroke!==q&&i.push(l),this._d("rectangle",i,o)}ellipse(e,t,s,r,a){const o=this._o(a),i=[],l=Fs(s,r,o),c=un(e,t,o,l);if(o.fill)if(o.fillStyle==="solid"){const u=un(e,t,o,l).opset;u.type="fillPath",i.push(u)}else i.push(Ne([c.estimatedPoints],o));return o.stroke!==q&&i.push(c.opset),this._d("ellipse",i,o)}circle(e,t,s,r){const a=this.ellipse(e,t,s,s,r);return a.shape="circle",a}linearPath(e,t){const s=this._o(t);return this._d("linearPath",[tt(e,!1,s)],s)}arc(e,t,s,r,a,o,i=!1,l){const c=this._o(l),u=[],f=Kn(e,t,s,r,a,o,i,!0,c);if(i&&c.fill)if(c.fillStyle==="solid"){const d=Object.assign({},c);d.disableMultiStroke=!0;const p=Kn(e,t,s,r,a,o,!0,!1,d);p.type="fillPath",u.push(p)}else u.push(Xo(e,t,s,r,a,o,c));return c.stroke!==q&&u.push(f),this._d("arc",u,c)}curve(e,t){const s=this._o(t),r=[],a=Jn(e,s);if(s.fill&&s.fill!==q)if(s.fillStyle==="solid"){const o=Jn(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));r.push({type:"fillPath",ops:this._mergedShape(o.ops)})}else{const o=[],i=e;if(i.length){const c=typeof i[0][0]=="number"?[i]:i;for(const u of c)u.length<3?o.push(...u):u.length===3?o.push(...pn(es([u[0],u[0],u[1],u[2]]),10,(1+s.roughness)/2)):o.push(...pn(es(u),10,(1+s.roughness)/2))}o.length&&r.push(Ne([o],s))}return s.stroke!==q&&r.push(a),this._d("curve",r,s)}polygon(e,t){const s=this._o(t),r=[],a=tt(e,!0,s);return s.fill&&(s.fillStyle==="solid"?r.push(Yt([e],s)):r.push(Ne([e],s))),s.stroke!==q&&r.push(a),this._d("polygon",r,s)}path(e,t){const s=this._o(t),r=[];if(!e)return this._d("path",r,s);e=(e||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const a=s.fill&&s.fill!=="transparent"&&s.fill!==q,o=s.stroke!==q,i=!!(s.simplification&&s.simplification<1),l=i?4-4*(s.simplification||1):(1+s.roughness)/2,c=ii(e,1,l),u=Yn(e,s);if(a)if(s.fillStyle==="solid")if(c.length===1){const f=Yn(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));r.push({type:"fillPath",ops:this._mergedShape(f.ops)})}else r.push(Yt(c,s));else r.push(Ne(c,s));return o&&(i?c.forEach(f=>{r.push(tt(f,!1,s))}):r.push(u)),this._d("path",r,s)}opsToPath(e,t){let s="";for(const r of e.ops){const a=typeof t=="number"&&t>=0?r.data.map(o=>+o.toFixed(t)):r.data;switch(r.op){case"move":s+=`M${a[0]} ${a[1]} `;break;case"bcurveTo":s+=`C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;break;case"lineTo":s+=`L${a[0]} ${a[1]} `;break}}return s.trim()}toPaths(e){const t=e.sets||[],s=e.options||this.defaultOptions,r=[];for(const a of t){let o=null;switch(a.type){case"path":o={d:this.opsToPath(a),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:q};break;case"fillPath":o={d:this.opsToPath(a),stroke:q,strokeWidth:0,fill:s.fill||q};break;case"fillSketch":o=this.fillSketch(a,s);break}o&&r.push(o)}return r}fillSketch(e,t){let s=t.fillWeight;return s<0&&(s=t.strokeWidth/2),{d:this.opsToPath(e),stroke:t.fill||q,strokeWidth:s,fill:q}}_mergedShape(e){return e.filter((t,s)=>s===0?!0:t.op!=="move")}}const Gs="http://www.w3.org/2000/svg",ci=800;let Qt=null;function ui(){return Qt||(Qt=new li().defaultOptions),Qt}function Xt(n,e,t){return{...ui(),maxRandomnessOffset:2,roughness:n==="highlight"?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,disableMultiStroke:n!=="double",disableMultiStrokeFill:!1,seed:e,...t}}function fi(n){const e=n.padding;if(e||e===0){if(typeof e=="number")return[e,e,e,e];if(Array.isArray(e)){const t=e;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}function di(n,e,t,s,r,a){const o=[];let i=t.strokeWidth||2;const l=fi(t),c=t.animate===void 0?!0:!!t.animate,u=t.iterations||2,f=t.rtl?1:0,d=Xt("single",a,t);switch(t.type){case"underline":{const p=e.y+e.h+l[2];for(let m=f;m<u+f;m++)m%2?o.push(Y(e.x+e.w,p,e.x,p,d)):o.push(Y(e.x,p,e.x+e.w,p,d));break}case"strike-through":{const p=e.y+e.h/2;for(let m=f;m<u+f;m++)m%2?o.push(Y(e.x+e.w,p,e.x,p,d)):o.push(Y(e.x,p,e.x+e.w,p,d));break}case"box":{const p=e.x-l[3],m=e.y-l[0],h=e.w+(l[1]+l[3]),y=e.h+(l[0]+l[2]);for(let v=0;v<u;v++)o.push(js(p,m,h,y,d));break}case"bracket":{const p=Array.isArray(t.brackets)?t.brackets:t.brackets?[t.brackets]:["right"],m=e.x-l[3]*2,h=e.x+e.w+l[1]*2,y=e.y-l[0]*2,v=e.y+e.h+l[2]*2;for(const w of p){let k;switch(w){case"bottom":k=[[m,e.y+e.h],[m,v],[h,v],[h,e.y+e.h]];break;case"top":k=[[m,e.y],[m,y],[h,y],[h,e.y]];break;case"left":k=[[e.x,y],[m,y],[m,v],[e.x,v]];break;case"right":k=[[e.x+e.w,y],[h,y],[h,v],[e.x+e.w,v]];break}k&&o.push(tt(k,!1,d))}break}case"crossed-off":{const p=e.x,m=e.y,h=p+e.w,y=m+e.h;for(let v=f;v<u+f;v++)v%2?o.push(Y(h,y,p,m,d)):o.push(Y(p,m,h,y,d));for(let v=f;v<u+f;v++)v%2?o.push(Y(p,y,h,m,d)):o.push(Y(h,m,p,y,d));break}case"circle":{const p=Xt("double",a,t),m=e.w+(l[1]+l[3]),h=e.h+(l[0]+l[2]),y=e.x-l[3]+m/2,v=e.y-l[0]+h/2,w=Math.floor(u/2),k=u-w*2;for(let b=0;b<w;b++)o.push(cn(y,v,m,h,p));for(let b=0;b<k;b++)o.push(cn(y,v,m,h,d));break}case"highlight":{const p=Xt("highlight",a,t);i=e.h*.95;const m=e.y+e.h/2;for(let h=f;h<u+f;h++)h%2?o.push(Y(e.x+e.w,m,e.x,m,p)):o.push(Y(e.x,m,e.x+e.w,m,p));break}}if(o.length){const p=pi(o),m=[],h=[];let y=0;const v=(w,k,b)=>w.setAttribute(k,b);for(const w of p){const k=document.createElementNS(Gs,"path");if(v(k,"d",w),v(k,"fill","none"),v(k,"stroke",t.color||"currentColor"),v(k,"stroke-width",`${i}`),t.opacity!==void 0&&v(k,"style",`opacity:${t.opacity}`),c){const b=k.getTotalLength();m.push(b),y+=b}n.appendChild(k),h.push(k)}if(c){let w=0;for(let k=0;k<h.length;k++){const b=h[k],M=m[k],_=y?r*(M/y):0,C=s+w,$=b.style;$.strokeDashoffset=`${M}`,$.strokeDasharray=`${M}`,$.animation=`rough-notation-dash ${_}ms ease-out ${C}ms forwards`,w+=_}return ts(r+s)}}return ts(0)}function ts(n){return new Promise(e=>setTimeout(e,n))}function pi(n){const e=[];for(const t of n){let s="";for(const r of t.ops){const a=r.data;switch(r.op){case"move":s.trim()&&e.push(s.trim()),s=`M${a[0]} ${a[1]} `;break;case"bcurveTo":s+=`C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;break;case"lineTo":s+=`L${a[0]} ${a[1]} `;break}}s.trim()&&e.push(s.trim())}return e}function hi(){if(!window.__rno_kf_s){const n=window.__rno_kf_s=document.createElement("style");n.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(n)}}var mi=Object.defineProperty,gi=(n,e,t)=>e in n?mi(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ee=(n,e,t)=>(gi(n,typeof e!="symbol"?e+"":e,t),t);class yi{constructor(e,t){ee(this,"_state","unattached"),ee(this,"_config"),ee(this,"_resizing",!1),ee(this,"_ro"),ee(this,"_seed",Es()),ee(this,"_e"),ee(this,"_svg"),ee(this,"_lastSizes",[]),ee(this,"_animationDelay",0),ee(this,"_resizeListener",()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,this._state==="showing"&&this.haveRectsChanged()&&this.show()},400))}),ee(this,"pendingRefresh"),this._e=e,this._config=JSON.parse(JSON.stringify(t)),this.attach()}getConfig(e){return this._config[e]}setConfig(e,t){this._config[e]!==t&&(this._config[e]=t,this.refresh())}get animate(){return this._config.animate}set animate(e){this._config.animate=e}get animationDuration(){return this._config.animationDuration}set animationDuration(e){this._config.animationDuration=e}get iterations(){return this._config.iterations}set iterations(e){this._config.iterations=e}get color(){return this._config.color}set color(e){this._config.color!==e&&(this._config.color=e,this.refresh())}get class(){return this._config.class}set class(e){this._config.class!==e&&(this._config.class=e,this._svg&&this._svg.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" ")))}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(e){this._config.strokeWidth!==e&&(this._config.strokeWidth=e,this.refresh())}get padding(){return this._config.padding}set padding(e){this._config.padding!==e&&(this._config.padding=e,this.refresh())}attach(){if(this._state==="unattached"&&this._e.parentElement){hi();const e=this._svg=document.createElementNS(Gs,"svg");e.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" "));const t=e.style;t.position="absolute",t.top="0",t.left="0",t.overflow="visible",t.pointerEvents="none",t.width="100px",t.height="100px";const s=this._config.type==="highlight";if(this._e.insertAdjacentElement(s?"beforebegin":"afterend",e),this._state="not-showing",s){const r=window.getComputedStyle(this._e).position;(!r||r==="static")&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(e=>{for(const t of e)t.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const e=this.rects();if(e.length===this._lastSizes.length){for(let t=0;t<e.length;t++)if(!this.isSameRect(e[t],this._lastSizes[t]))return!0}else return!0}return!1}isSameRect(e,t){const s=(r,a)=>Math.round(r)===Math.round(a);return s(e.x,t.x)&&s(e.y,t.y)&&s(e.w,t.w)&&s(e.h,t.h)}isShowing(){return this._state!=="not-showing"}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}async show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&await this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&await this.render(this._svg,!1);break}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}async render(e,t){let s=this._config;t&&(s=JSON.parse(JSON.stringify(this._config)),s.animate=!1);const r=this.rects();let a=0;r.forEach(c=>a+=c.w);const o=s.animationDuration||ci;let i=0;const l=[];for(let c=0;c<r.length;c++){const u=r[c],f=o*(u.w/a);l.push(di(e,r[c],s,i+this._animationDelay+(this._config.delay||0),f,this._seed)),i+=f}return this._lastSizes=r,this._state="showing",await Promise.all(l)}rects(){const e=[];if(this._svg)if(this._config.multiline){const t=this._e.getClientRects();for(let s=0;s<t.length;s++)e.push(this.svgRect(this._svg,t[s]))}else e.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return e}svgRect(e,t){const s=e.getBoundingClientRect(),r=t;return{x:(r.x||r.left)-(s.x||s.left),y:(r.y||r.top)-(s.y||s.top),w:r.width,h:r.height}}}function vi(n,e){return new yi(n,e)}function U(n,e){return n.class=[n.class,e].filter(Boolean).join(" "),n}const ns={box:n=>Object.assign(n,{type:"box"}),circle:n=>Object.assign(n,{type:"circle"}),underline:n=>Object.assign(n,{type:"underline"}),highlight:n=>Object.assign(n,{type:"highlight"}),"strike-through":n=>Object.assign(n,{type:"strike-through"}),"crossed-off":n=>Object.assign(n,{type:"crossed-off"}),bracket:n=>Object.assign(n,{type:"bracket"}),strike:n=>Object.assign(n,{type:"strike-through"}),cross:n=>Object.assign(n,{type:"crossed-off"}),crossed:n=>Object.assign(n,{type:"crossed-off"}),linethrough:n=>Object.assign(n,{type:"strike-through"}),"line-through":n=>Object.assign(n,{type:"strike-through"}),black:n=>U(n,"text-black"),blue:n=>U(n,"text-blue"),cyan:n=>U(n,"text-cyan"),gray:n=>U(n,"text-gray"),green:n=>U(n,"text-green"),indigo:n=>U(n,"text-indigo"),lime:n=>U(n,"text-lime"),orange:n=>U(n,"text-orange"),pink:n=>U(n,"text-pink"),purple:n=>U(n,"text-purple"),red:n=>U(n,"text-red"),teal:n=>U(n,"text-teal"),white:n=>U(n,"text-white"),yellow:n=>U(n,"text-yellow")},wi=[[/^delay-?(\d+)?$/,(n,e,t)=>{const s=(n[1]?Number.parseInt(n[1]):t)||300;return e.delay=s,e}],[/^(?:op|opacity)-?(\d+)?$/,(n,e,t)=>{const s=(n[1]?Number.parseInt(n[1]):t)||100;return e.opacity=s/100,e}]];function ki(){return{install(n){n.directive("mark",{name:"v-mark",mounted:(e,t)=>{const s=g(()=>{const o=typeof t.value=="object"&&!Array.isArray(t.value)?{...t.value}:{at:t.value};let i={at:o.at};const l=Object.entries(t.modifiers).filter(([u,f])=>{if(ns[u])return i=ns[u](i,f),!1;for(const[d,p]of wi){const m=u.match(d);if(m)return i=p(m,i,f),!1}return!0});l.length&&console.warn("[Slidev] Invalid modifiers for v-mark:",l);const c={...i,...o};return c.type||(c.type="underline"),c}),r=vi(e,s.value),a=wt(e,t,s.value.at);if(!a){r.show();return}e.watchStopHandle=Ge(()=>{let o;s.value.class&&(r.class=s.value.class),s.value.color&&(r.color=s.value.color);const i=s.value.at;i===!0?o=!0:i===!1?o=!1:o=a.isActive.value,o!=null&&(o?r.show():r.hide())})},unmounted:e=>{var t;(t=e.watchStopHandle)==null||t.call(e)}})}}}const Xi=A(!1),Zi=A(!1),el=A(!1),bi=A(!1),tl=A(!0),nl=nr({xs:460,...ir}),$t=sr(),sl=rr(),rl=g(()=>$t.height.value-$t.width.value/ls.value>120),al=ar(Et?document.body:null),hn=or(),ol=g(()=>{var n,e;return["INPUT","TEXTAREA"].includes(((n=hn.value)==null?void 0:n.tagName)||"")||((e=hn.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),il=g(()=>{var n;return["BUTTON","A"].includes(((n=hn.value)==null?void 0:n.tagName)||"")});ne("slidev-camera","default",{listenToStorageChanges:!1});ne("slidev-mic","default",{listenToStorageChanges:!1});const Si=ne("slidev-scale",0),ll=ne("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),_i=ne("slidev-show-editor",!1,{listenToStorageChanges:!1}),Li=ne("slidev-editor-vertical",!1,{listenToStorageChanges:!1}),Mi=ne("slidev-editor-width",Et?window.innerWidth*.4:318,{listenToStorageChanges:!1}),Ai=ne("slidev-editor-height",Et?window.innerHeight*.4:300,{listenToStorageChanges:!1}),ut=gn(null),It=ne("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),ft=ne("slidev-presenter-layout",1,{listenToStorageChanges:!1});function cl(){ft.value=ft.value+1,ft.value>2&&(ft.value=1)}function ul(){It.value=Math.min(2,It.value+.1)}function fl(){It.value=Math.max(.5,It.value-.1)}const dl=is(bi);function Ci(n=ss(ys,A())){const e=lr(n),t=Q([_i,Li,Mi,Ai,Si,$t.width,$t.height],()=>{setTimeout(e.update,300)},{flush:"post",immediate:!0});return{...e,stop:t}}function Ti(n){return()=>{}}function Oi(n,e,t,s){var K;function r(D){return n?Ve(n,D):fr(D)}const a=r(wn),o=r(Sa)??{},i=r(vn),l=g(()=>Ti(i.value)),c=r(ka)??A(1),u=r(_a)??A(1),{left:f,top:d,stop:p}=Ci(r(ys)??A()),m=["slide","presenter"].includes(a.value);let h=n?"directive":"prop",y=On(),v;if(Array.isArray(e)?v=e:typeof e=="string"&&e.includes(",")?v=e.split(",").map(Number):e!=null&&(h="frontmatter",y=`${e}`,e=(K=o==null?void 0:o.dragPos)==null?void 0:K[y],v=e==null?void 0:e.split(",").map(Number)),h!=="frontmatter"&&!t)throw new Error("[Slidev] Can not identify the source position of the v-drag element, please provide an explicit `id` prop.");const w=[p],k=e!=null&&!Number.isFinite(v==null?void 0:v[3]);v??(v=[Number.NaN,Number.NaN,0]);const b=A(v[2]),M=A(v[0]+v[2]/2),_=A(v[4]??0),C=g(()=>_.value*Math.PI/180),$=g(()=>Math.sin(C.value)),P=g(()=>Math.cos(C.value)),W=A(),G=A({left:0,top:0,width:0,height:0}),T=A(0);function I(){if(!W.value)return;const D=W.value.getBoundingClientRect();G.value={left:D.left/u.value,top:D.top/u.value,width:D.width/u.value,height:D.height/u.value},T.value=(G.value.width+G.value.height)/c.value/(Math.abs($.value)+Math.abs(P.value))-b.value}w.push(Q(b,I,{flush:"post"}));const V=A(v[3]??0),O=k?g({get:()=>(k?T.value:V.value)||0,set:D=>!k&&(V.value=D)}):V,j=k?A(v[1]):A(v[1]+v[3]/2),se=k?g({get:()=>j.value+O.value/2,set:D=>j.value=D-O.value/2}):j,ze=g(()=>Number.isFinite(M.value)?{position:"absolute",zIndex:100,left:`${M.value-b.value/2}px`,top:`${se.value-O.value/2}px`,width:`${b.value}px`,height:k?void 0:`${O.value}px`,transformOrigin:"center center",transform:`rotate(${_.value}deg)`}:{position:"absolute",zIndex:100});w.push(Q([M,se,b,O,_],([D,ce,Ue,Be,xn])=>{let Pe=[D-Ue/2,ce-Be/2,Ue].map(Math.round).join();k?Pe+=h==="directive"?",NaN":",_":Pe+=`,${Math.round(Be)}`,Math.round(xn)!==0&&(Pe+=`,${Math.round(xn)}`),h==="directive"&&(Pe=`[${Pe}]`),l.value(y,Pe,h,t)}));const Z={dragId:y,dataSource:h,markdownSource:t,isArrow:s,zoom:u,autoHeight:k,x0:M,y0:se,width:b,height:O,rotate:_,container:W,containerStyle:ze,watchStopHandles:w,dragging:g(()=>ut.value===Z),mounted(){m&&(I(),e||setTimeout(()=>{I(),M.value=(G.value.left+G.value.width/2-f.value)/c.value,se.value=(G.value.top-d.value)/c.value,b.value=G.value.width/c.value,O.value=G.value.height/c.value},100))},unmounted(){m&&Z.stopDragging()},startDragging(){I(),ut.value=Z},stopDragging(){ut.value===Z&&(ut.value=null)}};return w.push(cr(W,D=>{const ce=document.querySelector("#drag-control-container");ce&&D.target&&ce.contains(D.target)||Z.stopDragging()}),Q(ur(),D=>{D||Z.stopDragging()})),Z}function $i(){return{install(n){n.directive("drag",{name:"v-drag",created(e,t,s){var a;const r=Oi(t,t.value,(a=s.props)==null?void 0:a.markdownSource);s.props&&(s.props={...s.props},delete s.props.markdownSource),r.container.value=e,e.draggingState=r,e.dataset.dragId=r.dragId,r.watchStopHandles.push(Q(r.containerStyle,o=>{for(const[i,l]of Object.entries(o))l&&(e.style[i]=l)},{immediate:!0})),e.addEventListener("dblclick",r.startDragging)},mounted(e){e.draggingState.mounted()},unmounted(e){const t=e.draggingState;t.unmounted(),e.removeEventListener("dblclick",t.startDragging),t.watchStopHandles.forEach(s=>s())}})}}}function Ii(){return{install(n){const e=dr();n.directive("motion",{name:"v-motion",mounted(t,s,r,a){var k,b,M;const o=Ve(s,Pt),i=Ve(s,vn),l=Ve(s,wn),{currentPage:c,clicks:u,isPrintMode:f}=an(),d=r.props={...r.props},p={...d.initial,...(k=d.variants)==null?void 0:k["slidev-initial"]},m={...d.enter,...(b=d.variants)==null?void 0:b["slidev-enter"]},h={...d.leave,...(M=d.variants)==null?void 0:M["slidev-leave"]};delete d.initial,delete d.enter,delete d.leave;const y=`${On()}-`,v=[];for(const _ of Object.keys(d))if(_.startsWith("click-")){const C=_.slice(6),$=C.includes("-")?C.split("-").map(Number):+C,P=y+C;v.push({id:P,at:$,variant:{...d[_]},info:o==null?void 0:o.value.calculate($)}),delete d[_]}v.sort((_,C)=>(Array.isArray(_.at)?_.at[0]:_.at)-(Array.isArray(C.at)?C.at[0]:C.at)),e.created(t,s,r,a),e.mounted(t,s,r,a);const w=t.motionInstance;w.clickIds=v.map(_=>_.id),w.set(p),w.watchStopHandle=Q([i,c,u].filter(Boolean),()=>{var C;const _=((C=xs.get(t))==null?void 0:C.visibilityState.value)??"shown";if(!(o!=null&&o.value)||!["slide","presenter"].includes((l==null?void 0:l.value)??"")){const $={...p,...m};for(const{variant:P}of v)Object.assign($,P);w.set($)}else if(f.value||(i==null?void 0:i.value)===c.value)if(_==="shown"){const $={...p,...m};for(const{variant:P,info:W}of v)(!W||W.isActive.value)&&Object.assign($,P);f.value?w.set($):w.apply($)}else w.apply(_==="before"?p:h);else w.apply(((i==null?void 0:i.value)??-1)>c.value?p:h)},{immediate:!0})},unmounted(t){t.motionInstance.watchStopHandle()}})}}}const xi=[];function Ei(){const n=[];{let e=function(t){if(!E.remote||E.remote===t.query.password)return!0;if(E.remote&&t.query.password===void 0){const s=prompt("Enter password");if(E.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};n.push({name:"entry",path:"/entry",component:()=>x(()=>import("./slidev/entry-DCvxvG2D.js"),__vite__mapDeps([28,11,1,3,4,29]))},{name:"overview",path:"/overview",component:()=>x(()=>import("./slidev/overview-LlxK5s6_.js"),__vite__mapDeps([30,11,1,31,32,33,34,35,36,37,3,4]))},{name:"notes",path:"/notes",component:()=>x(()=>import("./slidev/notes-S2ffVqfs.js"),__vite__mapDeps([38,11,1,34,35,33,3,4])),beforeEnter:e},{name:"presenter",path:"/presenter/:no",component:()=>x(()=>import("./slidev/presenter-DrP0Wm7F.js"),__vite__mapDeps([39,11,1,40,31,32,33,2,3,4,41,34,35,42,43,36,37,44])),beforeEnter:e},{path:"/presenter",redirect:{path:"/presenter/1"}})}return n.push({name:"play",path:"/:no",component:()=>x(()=>import("./slidev/play-l0-a6L0z.js"),__vite__mapDeps([45,1,40,31,32,11,33,2,3,4,41,46]))},{path:"",redirect:{path:"/1"}}),xi.reduce((e,t)=>t(e),n)}const Pi=[];async function Di(n){function e(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}e(),window.addEventListener("resize",e);const t=pr({history:hr("/genaiscript/slides/default/"),routes:Ei()});n.use(t),n.use(ca()),n.use(Do()),n.use(ki()),n.use($i()),n.use(Ii()),n.use(gr,{container:"#twoslash-container"});const s={app:n,router:t};bt(()=>{t.afterEach(async()=>{await bt(),sn.value+=1})});for(const r of Pi)await r(s)}const Vs=mr(Po);Di(Vs);Vs.mount("#app");export{wn as $,$t as A,Li as B,mt as C,re as D,ut as E,bi as F,dl as G,el as H,sl as I,Qi as J,tl as K,il as L,ol as M,Fi as N,Si as O,nl as P,hn as Q,cl as R,Ft as S,ka as T,Ci as U,kn as V,ls as W,ys as X,Ui as Y,vn as Z,As as _,an as a,Pt as a0,_a as a1,Yi as a2,zi as a3,Wi as a4,Vi as a5,ue as a6,fe as a7,de as a8,pe as a9,he as aa,me as ab,ge as ac,ye as ad,ve as ae,we as af,On as ag,rn as ah,vr as ai,ke as aj,be as ak,Se as al,_e as am,Le as an,Me as ao,Je as ap,Ji as aq,Ae as ar,Ce as as,ji as at,ba as au,Sa as av,Bi as aw,Ma as ax,Is as b,Lo as c,Gi as d,qi as e,al as f,He as g,ll as h,qn as i,_i as j,It as k,ul as l,fl as m,nt as n,E as o,ft as p,x as q,En as r,Gt as s,Ki as t,fa as u,Xi as v,Zi as w,_r as x,Hi as y,rl as z};
