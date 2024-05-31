const __vite__fileDeps=["assets/slidev/1-DrvN4JLT.js","assets/modules/vue-FaL-ku9S.js","assets/slidev/context-IivN8-WU.js","assets/modules/shiki-USyX0HkO.js","assets/modules/shiki-DeiVkiDa.css","assets/slidev/2-D7MD5ZO8.js","assets/slidev/CodeBlockWrapper-Cjf56ojJ.js","assets/modules/unplugin-icons-C1bRfjrx.js","assets/slidev/3-Ccua59am.js","assets/slidev/VClick-3CuGy3em.js","assets/slidev/default-C49TzvOD.js","assets/slidev/4-CNsNpciJ.js","assets/slidev/Mermaid-D6c8OeFz.js","assets/modules/file-saver-EUMWMpoS.js","assets/slidev/5-f0WTN6ie.js","assets/slidev/6-D2unFUrk.js","assets/slidev/7-BQsOXIAB.js","assets/slidev/8-CVkbhHN_.js","assets/slidev/9-DdDtZZvP.js","assets/slidev/10-C8suEhUj.js","assets/slidev/11-C48GtCJt.js","assets/slidev/12-CZNep8cw.js","assets/slidev/13-kH5bscqM.js","assets/slidev/14-BgaQd9xL.js","assets/slidev/15-D17nH_53.js","assets/15-C_jUVo6t.css","assets/slidev/entry-DzSuJB48.js","assets/entry-DFVZucWk.css","assets/slidev/overview-Bi_T26WI.js","assets/slidev/DrawingPreview-BFtklXih.js","assets/DrawingPreview-B_1g_kmH.css","assets/slidev/IconButton-BlWXnwAs.js","assets/slidev/NoteDisplay-D4Lc-vDH.js","assets/NoteDisplay-C6AkVv8T.css","assets/slidev/ClicksSlider-BXnDqtR0.js","assets/ClicksSlider-DYpxHk94.css","assets/slidev/notes-CD0BiY0s.js","assets/slidev/presenter-DBl7Bmty.js","assets/slidev/ContextMenu-BnbUDgIW.js","assets/ContextMenu-CvLg4A9z.css","assets/slidev/DrawingControls-BYiyh50h.js","assets/DrawingControls-C5T1oZL5.css","assets/presenter-DrrSjh4o.css","assets/slidev/play-BWD86o3k.js","assets/play-CoA43pdi.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{t as A,y as g,n as vt,z as Hs,A as dn,B as es,C as Re,D as Q,E as Gs,G as Vs,H as zs,I as ts,J as L,K as Ws,L as Bs,o as ns,b as qs,M as hn,N as Ot,O as Us,P as ss,Q as Js,R as Ks,S as ne,T as rs,U as $t,d as Ys,r as Qs,c as Xs,V as Zs,W as er,X as tr,Y as nr,Z as sr,_ as rr,$ as ar,a0 as or,a1 as ir,a2 as lr,a3 as cr,a4 as ur,a5 as fr,u as dr}from"./modules/vue-FaL-ku9S.js";import{T as hr}from"./modules/shiki-USyX0HkO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function Ze(n,e,t){return Math.min(t,Math.max(e,n))}function pr(...n){return gr(n).reduce((e,t)=>e+t,0)}function mr(n){return n=n??[],Array.isArray(n)?n:[n]}function gr(n){return mr(n).flat(1)}function yr(n){return Array.from(new Set(n))}function $n(...n){let e,t,s;n.length===1?(e=0,s=1,[t]=n):[e,t,s=1]=n;const r=[];let a=e;for(;a<t;)r.push(a),a+=s||1;return r}function vr(n){return n!=null}function wr(n,e){return Object.fromEntries(Object.entries(n).map(([t,s])=>e(t,s)).filter(vr))}function Ei(n){return Object.keys(n).forEach(e=>n[e]===void 0?delete n[e]:{}),n}const I={theme:"default",title:"GenAIScript",titleTemplate:"%s",addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:"local",monacoTypesAdditionalPackages:[],monacoRunAdditionalDeps:[],download:!1,export:{},info:`<h2>GenAIScript</h2>
<p>Scripting for Generative AI.<br/>
<a href="https://microsoft.github.io/genaiscript/" target="_blank">Docs</a> | <a href="https://github.com/microsoft/genaiscript/" target="_blank">GitHub</a></p>
`,highlighter:"shiki",twoslash:!0,lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},editor:!0,class:"text-center",mdc:!0,layout:"center",slidesTitle:"GenAIScript"},Ii="build",as=A(I.aspectRatio??16/9),kr=A(I.canvasWidth??980),Pi=g(()=>Math.ceil(kr.value/as.value)),br=g(()=>wr(I.themeConfig||{},(n,e)=>[`--slidev-theme-${n}`,e])),Rt=I.slidesTitle;function Yt(n,e={},t){for(const s in n){const r=n[s],a=t?`${t}:${s}`:s;typeof r=="object"&&r!==null?Yt(r,e,a):typeof r=="function"&&(e[a]=r)}return e}const Sr={run:n=>n()},_r=()=>Sr,os=typeof console.createTask<"u"?console.createTask:_r;function Mr(n,e){const t=e.shift(),s=os(t);return n.reduce((r,a)=>r.then(()=>s.run(()=>a(...e))),Promise.resolve())}function Lr(n,e){const t=e.shift(),s=os(t);return Promise.all(n.map(r=>s.run(()=>r(...e))))}function Ft(n,e){for(const t of[...n])t(e)}class Ar{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,s={}){if(!e||typeof t!="function")return()=>{};const r=e;let a;for(;this._deprecatedHooks[e];)a=this._deprecatedHooks[e],e=a.to;if(a&&!s.allowDeprecated){let o=a.message;o||(o=`${r} hook has been deprecated`+(a.to?`, please use ${a.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let s,r=(...a)=>(typeof s=="function"&&s(),s=void 0,r=void 0,t(...a));return s=this.hook(e,r),s}removeHook(e,t){if(this._hooks[e]){const s=this._hooks[e].indexOf(t);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const s=this._hooks[e]||[];delete this._hooks[e];for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=Yt(e),s=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const t=Yt(e);for(const s in t)this.removeHook(s,t[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(Mr,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(Lr,e,...t)}callHookWith(e,t,...s){const r=this._before||this._after?{name:t,args:s,context:{}}:void 0;this._before&&Ft(this._before,r);const a=e(t in this._hooks?[...this._hooks[t]]:[],s);return a instanceof Promise?a.finally(()=>{this._after&&r&&Ft(this._after,r)}):(this._after&&r&&Ft(this._after,r),a)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function Cr(){return new Ar}function Tr(n){return Array.isArray(n)?n:[n]}const Or=["title","titleTemplate","script","style","noscript"],ct=["base","meta","link","style","script","noscript"],$r=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],xr=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],is=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],Er=typeof window<"u";function pn(n){let e=9;for(let t=0;t<n.length;)e=Math.imul(e^n.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function xn(n){return n._h||pn(n._d?n._d:`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([e,t])=>`${e}:${String(t)}`).join(",")}`)}function ls(n,e){const{props:t,tag:s}=n;if(xr.includes(s))return s;if(s==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const a of r)if(typeof t[a]<"u"){const o=String(t[a]);return`${s}:${a}:${o}`}return!1}function En(n,e){return n==null?e||null:typeof n=="function"?n(e):n}async function Ir(n,e,t){const s={tag:n,props:await cs(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(n)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(n))};return is.forEach(r=>{const a=typeof s.props[r]<"u"?s.props[r]:t[r];typeof a<"u"&&((!["innerHTML","textContent","children"].includes(r)||Or.includes(s.tag))&&(s[r==="children"?"innerHTML":r]=a),delete s.props[r])}),s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(r=>({...s,props:{...s.props,content:r}})):s}function Pr(n,e){var s;const t=n==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,r])=>r).map(([r,a])=>n==="style"?`${r}:${a}`:r)),(s=Array.isArray(e)?e.join(t):e)==null?void 0:s.split(t).filter(r=>r.trim()).filter(Boolean).join(t)}async function cs(n,e){for(const t of Object.keys(n)){if(["class","style"].includes(t)){n[t]=Pr(t,n[t]);continue}if(n[t]instanceof Promise&&(n[t]=await n[t]),!e&&!is.includes(t)){const s=String(n[t]),r=t.startsWith("data-");s==="true"||s===""?n[t]=r?"true":!0:n[t]||(r&&s==="false"?n[t]="false":delete n[t])}}return n}const Dr=10;async function Nr(n){const e=[];return Object.entries(n.resolvedInput).filter(([t,s])=>typeof s<"u"&&$r.includes(t)).forEach(([t,s])=>{const r=Tr(s);e.push(...r.map(a=>Ir(t,a,n)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((t,s)=>(t._e=n._i,n.mode&&(t._m=n.mode),t._p=(n._i<<Dr)+s,t))}const In={base:-10,title:10},Pn={critical:-80,high:-10,low:20};function wt(n){let e=100;const t=n.tagPriority;return typeof t=="number"?t:(n.tag==="meta"?(n.props["http-equiv"]==="content-security-policy"&&(e=-30),n.props.charset&&(e=-20),n.props.name==="viewport"&&(e=-15)):n.tag==="link"&&n.props.rel==="preconnect"?e=20:n.tag in In&&(e=In[n.tag]),typeof t=="string"&&t in Pn?e+Pn[t]:e)}const jr=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Dn=["onload","onerror","onabort","onprogress","onloadstart"],ie="%separator";function ut(n,e,t){if(typeof n!="string"||!n.includes("%"))return n;function s(o){let i;return["s","pageTitle"].includes(o)?i=e.pageTitle:o.includes(".")?i=o.split(".").reduce((l,c)=>l&&l[c]||void 0,e):i=e[o],typeof i<"u"?(i||"").replace(/"/g,'\\"'):!1}let r=n;try{r=decodeURI(n)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const i=s(o.slice(1));typeof i=="string"&&(n=n.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,c)=>`${i}${c}`).trim())}),n.includes(ie)&&(n.endsWith(ie)&&(n=n.slice(0,-ie.length).trim()),n.startsWith(ie)&&(n=n.slice(ie.length).trim()),n=n.replace(new RegExp(`\\${ie}\\s*\\${ie}`,"g"),ie),n=ut(n,{separator:t},t)),n}async function Rr(n,e={}){var u;const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const s={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const r=(await n.resolveTags()).map(f=>({tag:f,id:ct.includes(f.tag)?xn(f):f.tag,shouldRender:!0}));let a=n._dom;if(!a){a={elMap:{htmlAttrs:t.documentElement,bodyAttrs:t.body}};for(const f of["body","head"]){const d=(u=t[f])==null?void 0:u.children,h=[];for(const m of[...d].filter(p=>ct.includes(p.tagName.toLowerCase()))){const p={tag:m.tagName.toLowerCase(),props:await cs(m.getAttributeNames().reduce((w,k)=>({...w,[k]:m.getAttribute(k)}),{})),innerHTML:m.innerHTML};let y=1,v=ls(p);for(;v&&h.find(w=>w._d===v);)v=`${v}:${y++}`;p._d=v||void 0,h.push(p),a.elMap[m.getAttribute("data-hid")||xn(p)]=m}}}a.pendingSideEffects={...a.sideEffects||{}},a.sideEffects={};function o(f,d,h){const m=`${f}:${d}`;a.sideEffects[m]=h,delete a.pendingSideEffects[m]}function i({id:f,$el:d,tag:h}){const m=h.tag.endsWith("Attrs");a.elMap[f]=d,m||(["textContent","innerHTML"].forEach(p=>{h[p]&&h[p]!==d[p]&&(d[p]=h[p])}),o(f,"el",()=>{var p;(p=a.elMap[f])==null||p.remove(),delete a.elMap[f]}));for(const[p,y]of Object.entries(h._eventHandlers||{}))d.getAttribute(`data-${p}`)!==""&&((h.tag==="bodyAttrs"?t.defaultView:d).addEventListener(p.replace("on",""),y.bind(d)),d.setAttribute(`data-${p}`,""));Object.entries(h.props).forEach(([p,y])=>{const v=`attr:${p}`;if(p==="class")for(const w of(y||"").split(" ").filter(Boolean))m&&o(f,`${v}:${w}`,()=>d.classList.remove(w)),!d.classList.contains(w)&&d.classList.add(w);else if(p==="style")for(const w of(y||"").split(";").filter(Boolean)){const[k,...b]=w.split(":").map(M=>M.trim());o(f,`${v}:${w}:${k}`,()=>{d.style.removeProperty(k)}),d.style.setProperty(k,b.join(":"))}else d.getAttribute(p)!==y&&d.setAttribute(p,y===!0?"":String(y)),m&&o(f,v,()=>d.removeAttribute(p))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of r){const{tag:d,shouldRender:h,id:m}=f;if(h){if(d.tag==="title"){t.title=d.textContent;continue}f.$el=f.$el||a.elMap[m],f.$el?i(f):ct.includes(d.tag)&&l.push(f)}}for(const f of l){const d=f.tag.tagPosition||"head";f.$el=t.createElement(f.tag.tag),i(f),c[d]=c[d]||t.createDocumentFragment(),c[d].appendChild(f.$el)}for(const f of r)await n.hooks.callHook("dom:renderTag",f,t,o);c.head&&t.head.appendChild(c.head),c.bodyOpen&&t.body.insertBefore(c.bodyOpen,t.body.firstChild),c.bodyClose&&t.body.appendChild(c.bodyClose),Object.values(a.pendingSideEffects).forEach(f=>f()),n._dom=a,n.dirty=!1,await n.hooks.callHook("dom:rendered",{renders:r})}async function Fr(n,e={}){const t=e.delayFn||(s=>setTimeout(s,10));return n._domUpdatePromise=n._domUpdatePromise||new Promise(s=>t(async()=>{await Rr(n,e),delete n._domUpdatePromise,s()}))}function Hr(n){return e=>{var s,r;const t=((r=(s=e.resolvedOptions.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return t&&e.push(JSON.parse(t)),{mode:"client",hooks:{"entries:updated":function(a){Fr(a,n)}}}}}const Gr=["templateParams","htmlAttrs","bodyAttrs"],Vr={hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(s=>{n.props[s]&&(n.key=n.props[s],delete n.props[s])});const t=ls(n)||(n.key?`${n.tag}:${n.key}`:!1);t&&(n._d=t)},"tags:resolve":function(n){const e={};n.tags.forEach(s=>{const r=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,a=e[r];if(a){let i=s==null?void 0:s.tagDuplicateStrategy;if(!i&&Gr.includes(s.tag)&&(i="merge"),i==="merge"){const l=a.props;["class","style"].forEach(c=>{l[c]&&(s.props[c]?(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),s.props[c]=`${l[c]} ${s.props[c]}`):s.props[c]=l[c])}),e[r].props={...l,...s.props};return}else if(s._e===a._e){a._duped=a._duped||[],s._d=`${a._d}:${a._duped.length+1}`,a._duped.push(s);return}else if(wt(s)>wt(a))return}const o=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(ct.includes(s.tag)&&o===0){delete e[r];return}e[r]=s});const t=[];Object.values(e).forEach(s=>{const r=s._duped;delete s._duped,t.push(s),r&&t.push(...r)}),n.tags=t,n.tags=n.tags.filter(s=>!(s.tag==="meta"&&(s.props.name||s.props.property)&&!s.props.content))}}},zr={mode:"server",hooks:{"tags:resolve":function(n){const e={};n.tags.filter(t=>["titleTemplate","templateParams","title"].includes(t.tag)&&t._m==="server").forEach(t=>{e[t.tag]=t.tag.startsWith("title")?t.textContent:t.props}),Object.keys(e).length&&n.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Wr=["script","link","bodyAttrs"],Br=n=>({hooks:{"tags:resolve":function(e){for(const t of e.tags.filter(s=>Wr.includes(s.tag)))Object.entries(t.props).forEach(([s,r])=>{s.startsWith("on")&&typeof r=="function"&&(n.ssr&&Dn.includes(s)?t.props[s]=`this.dataset.${s}fired = true`:delete t.props[s],t._eventHandlers=t._eventHandlers||{},t._eventHandlers[s]=r)}),n.ssr&&t._eventHandlers&&(t.props.src||t.props.href)&&(t.key=t.key||pn(t.props.src||t.props.href))},"dom:renderTag":function({$el:e,tag:t}){var s,r;for(const a of Object.keys((e==null?void 0:e.dataset)||{}).filter(o=>Dn.some(i=>`${i}fired`===o))){const o=a.replace("fired","");(r=(s=t._eventHandlers)==null?void 0:s[o])==null||r.call(e,new Event(o.replace("on","")))}}}}),qr=["link","style","script","noscript"],Ur={hooks:{"tag:normalise":({tag:n})=>{n.key&&qr.includes(n.tag)&&(n.props["data-hid"]=n._h=pn(n.key))}}},Jr={hooks:{"tags:resolve":n=>{const e=t=>{var s;return(s=n.tags.find(r=>r._d===t))==null?void 0:s._p};for(const{prefix:t,offset:s}of jr)for(const r of n.tags.filter(a=>typeof a.tagPriority=="string"&&a.tagPriority.startsWith(t))){const a=e(r.tagPriority.replace(t,""));typeof a<"u"&&(r._p=a+s)}n.tags.sort((t,s)=>t._p-s._p).sort((t,s)=>wt(t)-wt(s))}}},Kr={meta:"content",link:"href",htmlAttrs:"lang"},Yr=n=>({hooks:{"tags:resolve":e=>{var i;const{tags:t}=e,s=(i=t.find(l=>l.tag==="title"))==null?void 0:i.textContent,r=t.findIndex(l=>l.tag==="templateParams"),a=r!==-1?t[r].props:{},o=a.separator||"|";delete a.separator,a.pageTitle=ut(a.pageTitle||s||"",a,o);for(const l of t.filter(c=>c.processTemplateParams!==!1)){const c=Kr[l.tag];c&&typeof l.props[c]=="string"?l.props[c]=ut(l.props[c],a,o):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(u=>{typeof l[u]=="string"&&(l[u]=ut(l[u],a,o))})}n._templateParams=a,n._separator=o,e.tags=t.filter(l=>l.tag!=="templateParams")}}}),Qr={hooks:{"tags:resolve":n=>{const{tags:e}=n;let t=e.findIndex(r=>r.tag==="titleTemplate");const s=e.findIndex(r=>r.tag==="title");if(s!==-1&&t!==-1){const r=En(e[t].textContent,e[s].textContent);r!==null?e[s].textContent=r||e[s].textContent:delete e[s]}else if(t!==-1){const r=En(e[t].textContent);r!==null&&(e[t].textContent=r,e[t].tag="title",t=-1)}t!==-1&&delete e[t],n.tags=e.filter(Boolean)}}},Xr={hooks:{"tags:afterResolve":function(n){for(const e of n.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let us;function Zr(n={}){const e=ea(n);return e.use(Hr()),us=e}function Nn(n,e){return!n||n==="server"&&e||n==="client"&&!e}function ea(n={}){const e=Cr();e.addHooks(n.hooks||{}),n.document=n.document||(Er?document:void 0);const t=!n.document,s=()=>{i.dirty=!0,e.callHook("entries:updated",i)};let r=0,a=[];const o=[],i={plugins:o,dirty:!1,resolvedOptions:n,hooks:e,headEntries(){return a},use(l){const c=typeof l=="function"?l(i):l;(!c.key||!o.some(u=>u.key===c.key))&&(o.push(c),Nn(c.mode,t)&&e.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:r++,input:l,...c};return Nn(u.mode,t)&&(a.push(u),s()),{dispose(){a=a.filter(f=>f._i!==u._i),e.callHook("entries:updated",i),s()},patch(f){a=a.map(d=>(d._i===u._i&&(d.input=u.input=f),d)),s()}}},async resolveTags(){const l={tags:[],entries:[...a]};await e.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const f of await Nr(c)){const d={tag:f,entry:c,resolvedOptions:i.resolvedOptions};await e.callHook("tag:normalise",d),l.tags.push(d.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:t};return[Vr,zr,Br,Ur,Jr,Yr,Qr,Xr,...(n==null?void 0:n.plugins)||[]].forEach(l=>i.use(l)),i.hooks.callHook("init",i),i}function ta(){return us}const na=Hs.startsWith("3");function sa(n){return typeof n=="function"?n():dn(n)}function kt(n,e=""){if(n instanceof Promise)return n;const t=sa(n);return!n||!t?t:Array.isArray(t)?t.map(s=>kt(s,e)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([s,r])=>s==="titleTemplate"||s.startsWith("on")?[s,dn(r)]:[s,kt(r,s)])):t}const ra={hooks:{"entries:resolve":function(n){for(const e of n.entries)e.resolvedInput=kt(e.input)}}},fs="usehead";function aa(n){return{install(t){na&&(t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(fs,n))}}.install}function oa(n={}){n.domDelayFn=n.domDelayFn||(t=>vt(()=>setTimeout(()=>t(),0)));const e=Zr(n);return e.use(ra),e.install=aa(e),e}const jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Rn="__unhead_injection_handler__";function ia(){if(Rn in jn)return jn[Rn]();const n=es(fs);return n||console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results."),n||ta()}function la(n,e={}){const t=e.head||ia();if(t)return t.ssr?t.push(n,e):ca(t,n,e)}function ca(n,e,t={}){const s=A(!1),r=A({});Re(()=>{r.value=s.value?{}:kt(e)});const a=n.push(r.value,t);return Q(r,i=>{a.patch(i)}),ts()&&(Gs(()=>{a.dispose()}),Vs(()=>{s.value=!0}),zs(()=>{s.value=!1})),a}function ds(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function X(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!1})}const Oe=L({page:0,clicks:0});let ua=[],fa=[];X(Oe,"$syncUp",!0);X(Oe,"$syncDown",!0);X(Oe,"$paused",!1);X(Oe,"$onSet",n=>ua.push(n));X(Oe,"$onPatch",n=>fa.push(n));ds();X(Oe,"$patch",async()=>!1);function hs(n,e,t=!1){const s=[];let r=!1,a=!1,o,i;const l=L(e);function c(h){s.push(h)}function u(h,m){l[h]!==m&&(clearTimeout(o),r=!0,l[h]=m,o=setTimeout(()=>r=!1,0))}function f(h){r||(clearTimeout(i),a=!0,Object.entries(h).forEach(([m,p])=>{l[m]=p}),i=setTimeout(()=>a=!1,0))}function d(h){let m;t?t&&window.addEventListener("storage",y=>{y&&y.key===h&&y.newValue&&f(JSON.parse(y.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",y=>f(y.data)));function p(){!t&&m&&!a?m.postMessage(Ws(l)):t&&!a&&window.localStorage.setItem(h,JSON.stringify(l)),r||s.forEach(y=>y(l))}if(Q(l,p,{deep:!0,flush:"sync"}),t){const y=window.localStorage.getItem(h);y&&f(JSON.parse(y))}}return{init:d,onPatch:c,patch:u,state:l}}const{init:da,onPatch:ha,patch:We,state:Di}=hs(Oe,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),$e=L({});let pa=[],ma=[];X($e,"$syncUp",!0);X($e,"$syncDown",!0);X($e,"$paused",!1);X($e,"$onSet",n=>pa.push(n));X($e,"$onPatch",n=>ma.push(n));ds();X($e,"$patch",async()=>!1);const{init:ga,onPatch:Ni,patch:ji,state:Ri}=hs($e,{},!1),xt="$$slidev-clicks-context",mn="$$slidev-page",ps="$$slidev-slide-element",ya="$$slidev-slide-scale",va="$$slidev-context",Fi="$$slidev-route",gn="$$slidev-render-context",wa="$$slidev-fontmatter",ka="$$slidev-slide-zoom",ft="slidev-vclick-target",Be="slidev-vclick-hidden",qe="slidev-vclick-fade",Ht="slidev-vclick-hidden-explicitly",Gt="slidev-vclick-current",Vt="slidev-vclick-prior",dt=999999,ba=["localhost","127.0.0.1"],Sa=["clicks","clicksStart","disabled","hide","hideInToc","layout","level","preload","routeAlias","src","title","transition","zoom","dragPos"],Hi=[...Sa,"theme","titleTemplate","info","author","keywords","presenter","download","exportFilename","export","highlighter","lineNumbers","monaco","monacoTypesSource","monacoTypesAdditionalPackages","monacoRunAdditionalDeps","remoteAssets","selectable","record","colorSchema","routerMode","aspectRatio","canvasWidth","themeConfig","favicon","plantUmlServer","fonts","defaults","drawings","htmlAttrs","mdc","contextMenu"],yn=A(!1),vn=Symbol.for("yaml.alias"),_a=Symbol.for("yaml.document"),Te=Symbol.for("yaml.map"),ms=Symbol.for("yaml.pair"),wn=Symbol.for("yaml.scalar"),nt=Symbol.for("yaml.seq"),ae=Symbol.for("yaml.node.type"),He=n=>!!n&&typeof n=="object"&&n[ae]===vn,Et=n=>!!n&&typeof n=="object"&&n[ae]===_a,gs=n=>!!n&&typeof n=="object"&&n[ae]===Te,F=n=>!!n&&typeof n=="object"&&n[ae]===ms,j=n=>!!n&&typeof n=="object"&&n[ae]===wn,kn=n=>!!n&&typeof n=="object"&&n[ae]===nt;function J(n){if(n&&typeof n=="object")switch(n[ae]){case Te:case nt:return!0}return!1}function q(n){if(n&&typeof n=="object")switch(n[ae]){case vn:case Te:case wn:case nt:return!0}return!1}const Ma=n=>(j(n)||J(n))&&!!n.anchor,Le=Symbol("break visit"),La=Symbol("skip children"),Ye=Symbol("remove node");function et(n,e){const t=Aa(e);Et(n)?Pe(null,n.contents,t,Object.freeze([n]))===Ye&&(n.contents=null):Pe(null,n,t,Object.freeze([]))}et.BREAK=Le;et.SKIP=La;et.REMOVE=Ye;function Pe(n,e,t,s){const r=Ca(n,e,t,s);if(q(r)||F(r))return Ta(n,s,r),Pe(n,r,t,s);if(typeof r!="symbol"){if(J(e)){s=Object.freeze(s.concat(e));for(let a=0;a<e.items.length;++a){const o=Pe(a,e.items[a],t,s);if(typeof o=="number")a=o-1;else{if(o===Le)return Le;o===Ye&&(e.items.splice(a,1),a-=1)}}}else if(F(e)){s=Object.freeze(s.concat(e));const a=Pe("key",e.key,t,s);if(a===Le)return Le;a===Ye&&(e.key=null);const o=Pe("value",e.value,t,s);if(o===Le)return Le;o===Ye&&(e.value=null)}}return r}function Aa(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function Ca(n,e,t,s){var r,a,o,i,l;if(typeof t=="function")return t(n,e,s);if(gs(e))return(r=t.Map)==null?void 0:r.call(t,n,e,s);if(kn(e))return(a=t.Seq)==null?void 0:a.call(t,n,e,s);if(F(e))return(o=t.Pair)==null?void 0:o.call(t,n,e,s);if(j(e))return(i=t.Scalar)==null?void 0:i.call(t,n,e,s);if(He(e))return(l=t.Alias)==null?void 0:l.call(t,n,e,s)}function Ta(n,e,t){const s=e[e.length-1];if(J(s))s.items[n]=t;else if(F(s))n==="key"?s.key=t:s.value=t;else if(Et(s))s.contents=t;else{const r=He(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${r} parent`)}}function ys(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function Ke(n,e,t,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let r=0,a=s.length;r<a;++r){const o=s[r],i=Ke(n,s,String(r),o);i===void 0?delete s[r]:i!==o&&(s[r]=i)}else if(s instanceof Map)for(const r of Array.from(s.keys())){const a=s.get(r),o=Ke(n,s,r,a);o===void 0?s.delete(r):o!==a&&s.set(r,o)}else if(s instanceof Set)for(const r of Array.from(s)){const a=Ke(n,s,r,r);a===void 0?s.delete(r):a!==r&&(s.delete(r),s.add(a))}else for(const[r,a]of Object.entries(s)){const o=Ke(n,s,r,a);o===void 0?delete s[r]:o!==a&&(s[r]=o)}return n.call(e,t,s)}function te(n,e,t){if(Array.isArray(n))return n.map((s,r)=>te(s,String(r),t));if(n&&typeof n.toJSON=="function"){if(!t||!Ma(n))return n.toJSON(e,t);const s={aliasCount:0,count:1,res:void 0};t.anchors.set(n,s),t.onCreate=a=>{s.res=a,delete t.onCreate};const r=n.toJSON(e,t);return t.onCreate&&t.onCreate(r),r}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class bn{constructor(e){Object.defineProperty(this,ae,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:s,onAnchor:r,reviver:a}={}){if(!Et(e))throw new TypeError("A document argument is required");const o={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},i=te(this,"",o);if(typeof r=="function")for(const{count:l,res:c}of o.anchors.values())r(c,l);return typeof a=="function"?Ke(a,{"":i},"",i):i}}class Oa extends bn{constructor(e){super(vn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let t;return et(e,{Node:(s,r)=>{if(r===this)return et.BREAK;r.anchor===this.source&&(t=r)}}),t}toJSON(e,t){if(!t)return{source:this.source};const{anchors:s,doc:r,maxAliasCount:a}=t,o=this.resolve(r);if(!o){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let i=s.get(o);if(i||(te(o,null,t),i=s.get(o)),!i||i.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(a>=0&&(i.count+=1,i.aliasCount===0&&(i.aliasCount=ht(r,o,s)),i.count*i.aliasCount>a)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return i.res}toString(e,t,s){const r=`*${this.source}`;if(e){if(ys(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const a=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(a)}if(e.implicitKey)return`${r} `}return r}}function ht(n,e,t){if(He(e)){const s=e.resolve(n),r=t&&s&&t.get(s);return r?r.count*r.aliasCount:0}else if(J(e)){let s=0;for(const r of e.items){const a=ht(n,r,t);a>s&&(s=a)}return s}else if(F(e)){const s=ht(n,e.key,t),r=ht(n,e.value,t);return Math.max(s,r)}return 1}const vs=n=>!n||typeof n!="function"&&typeof n!="object";class N extends bn{constructor(e){super(wn),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:te(this.value,e,t)}toString(){return String(this.value)}}N.BLOCK_FOLDED="BLOCK_FOLDED";N.BLOCK_LITERAL="BLOCK_LITERAL";N.PLAIN="PLAIN";N.QUOTE_DOUBLE="QUOTE_DOUBLE";N.QUOTE_SINGLE="QUOTE_SINGLE";function $a(n,e,t){return t.find(s=>{var r;return((r=s.identify)==null?void 0:r.call(s,n))&&!s.format})}function bt(n,e,t){var f,d,h;if(Et(n)&&(n=n.contents),q(n))return n;if(F(n)){const m=(d=(f=t.schema[Te]).createNode)==null?void 0:d.call(f,t.schema,null,t);return m.items.push(n),m}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:s,onAnchor:r,onTagObj:a,schema:o,sourceObjects:i}=t;let l;if(s&&n&&typeof n=="object"){if(l=i.get(n),l)return l.anchor||(l.anchor=r(n)),new Oa(l.anchor);l={anchor:null,node:null},i.set(n,l)}let c=$a(n,e,o.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const m=new N(n);return l&&(l.node=m),m}c=n instanceof Map?o[Te]:Symbol.iterator in Object(n)?o[nt]:o[Te]}a&&(a(c),delete t.onTagObj);const u=c!=null&&c.createNode?c.createNode(t.schema,n,t):typeof((h=c==null?void 0:c.nodeClass)==null?void 0:h.from)=="function"?c.nodeClass.from(t.schema,n,t):new N(n);return c.default||(u.tag=c.tag),l&&(l.node=u),u}function Fn(n,e,t){let s=t;for(let r=e.length-1;r>=0;--r){const a=e[r];if(typeof a=="number"&&Number.isInteger(a)&&a>=0){const o=[];o[a]=s,s=o}else s=new Map([[a,s]])}return bt(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const xa=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class Sn extends bn{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(s=>q(s)||F(s)?s.clone(e):s),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(xa(e))this.add(t);else{const[s,...r]=e,a=this.get(s,!0);if(J(a))a.addIn(r,t);else if(a===void 0&&this.schema)this.set(s,Fn(this.schema,r,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)}}deleteIn(e){const[t,...s]=e;if(s.length===0)return this.delete(t);const r=this.get(t,!0);if(J(r))return r.deleteIn(s);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)}getIn(e,t){const[s,...r]=e,a=this.get(s,!0);return r.length===0?!t&&j(a)?a.value:a:J(a)?a.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!F(t))return!1;const s=t.value;return s==null||e&&j(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[t,...s]=e;if(s.length===0)return this.has(t);const r=this.get(t,!0);return J(r)?r.hasIn(s):!1}setIn(e,t){const[s,...r]=e;if(r.length===0)this.set(s,t);else{const a=this.get(s,!0);if(J(a))a.setIn(r,t);else if(a===void 0&&this.schema)this.set(s,Fn(this.schema,r,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)}}}Sn.maxFlowStringSingleLineLength=60;const Ea=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function tt(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const De=(n,e,t)=>n.endsWith(`
`)?tt(t,e):t.includes(`
`)?`
`+tt(t,e):(n.endsWith(" ")?"":" ")+t,ws="flow",Qt="block",pt="quoted";function It(n,e,t="flow",{indentAtStart:s,lineWidth:r=80,minContentWidth:a=20,onFold:o,onOverflow:i}={}){if(!r||r<0)return n;const l=Math.max(1+a,1+r-e.length);if(n.length<=l)return n;const c=[],u={};let f=r-e.length;typeof s=="number"&&(s>r-Math.max(2,a)?c.push(0):f=r-s);let d,h,m=!1,p=-1,y=-1,v=-1;t===Qt&&(p=Hn(n,p,e.length),p!==-1&&(f=p+l));for(let k;k=n[p+=1];){if(t===pt&&k==="\\"){switch(y=p,n[p+1]){case"x":p+=3;break;case"u":p+=5;break;case"U":p+=9;break;default:p+=1}v=p}if(k===`
`)t===Qt&&(p=Hn(n,p,e.length)),f=p+e.length+l,d=void 0;else{if(k===" "&&h&&h!==" "&&h!==`
`&&h!=="	"){const b=n[p+1];b&&b!==" "&&b!==`
`&&b!=="	"&&(d=p)}if(p>=f)if(d)c.push(d),f=d+l,d=void 0;else if(t===pt){for(;h===" "||h==="	";)h=k,k=n[p+=1],m=!0;const b=p>v+1?p-2:y-1;if(u[b])return n;c.push(b),u[b]=!0,f=b+l,d=void 0}else m=!0}h=k}if(m&&i&&i(),c.length===0)return n;o&&o();let w=n.slice(0,c[0]);for(let k=0;k<c.length;++k){const b=c[k],M=c[k+1]||n.length;b===0?w=`
${e}${n.slice(0,M)}`:(t===pt&&u[b]&&(w+=`${n[b]}\\`),w+=`
${e}${n.slice(b+1,M)}`)}return w}function Hn(n,e,t){let s=e,r=e+1,a=n[r];for(;a===" "||a==="	";)if(e<r+t)a=n[++e];else{do a=n[++e];while(a&&a!==`
`);s=e,r=e+1,a=n[r]}return s}const Pt=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),Dt=n=>/^(%|---|\.\.\.)/m.test(n);function Ia(n,e,t){if(!e||e<0)return!1;const s=e-t,r=n.length;if(r<=s)return!1;for(let a=0,o=0;a<r;++a)if(n[a]===`
`){if(a-o>s)return!0;if(o=a+1,r-o<=s)return!1}return!0}function Qe(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:s}=e,r=e.options.doubleQuotedMinMultiLineLength,a=e.indent||(Dt(n)?"  ":"");let o="",i=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(o+=t.slice(i,l)+"\\ ",l+=1,i=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{o+=t.slice(i,l);const u=t.substr(l+2,4);switch(u){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:u.substr(0,2)==="00"?o+="\\x"+u.substr(2):o+=t.substr(l,6)}l+=5,i=l+1}break;case"n":if(s||t[l+2]==='"'||t.length<r)l+=1;else{for(o+=t.slice(i,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)o+=`
`,l+=2;o+=a,t[l+2]===" "&&(o+="\\"),l+=1,i=l+1}break;default:l+=1}return o=i?o+t.slice(i):t,s?o:It(o,a,pt,Pt(e,!1))}function Xt(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return Qe(n,e);const t=e.indent||(Dt(n)?"  ":""),s="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?s:It(s,t,ws,Pt(e,!1))}function Ne(n,e){const{singleQuote:t}=e.options;let s;if(t===!1)s=Qe;else{const r=n.includes('"'),a=n.includes("'");r&&!a?s=Xt:a&&!r?s=Qe:s=t?Xt:Qe}return s(n,e)}let Zt;try{Zt=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Zt=/\n+(?!\n|$)/g}function mt({comment:n,type:e,value:t},s,r,a){const{blockQuote:o,commentString:i,lineWidth:l}=s.options;if(!o||/\n[\t ]+$/.test(t)||/^\s*$/.test(t))return Ne(t,s);const c=s.indent||(s.forceBlockIndent||Dt(t)?"  ":""),u=o==="literal"?!0:o==="folded"||e===N.BLOCK_FOLDED?!1:e===N.BLOCK_LITERAL?!0:!Ia(t,l,c.length);if(!t)return u?`|
`:`>
`;let f,d;for(d=t.length;d>0;--d){const _=t[d-1];if(_!==`
`&&_!=="	"&&_!==" ")break}let h=t.substring(d);const m=h.indexOf(`
`);m===-1?f="-":t===h||m!==h.length-1?(f="+",a&&a()):f="",h&&(t=t.slice(0,-h.length),h[h.length-1]===`
`&&(h=h.slice(0,-1)),h=h.replace(Zt,`$&${c}`));let p=!1,y,v=-1;for(y=0;y<t.length;++y){const _=t[y];if(_===" ")p=!0;else if(_===`
`)v=y;else break}let w=t.substring(0,v<y?v+1:y);w&&(t=t.substring(w.length),w=w.replace(/\n+/g,`$&${c}`));let b=(u?"|":">")+(p?c?"2":"1":"")+f;if(n&&(b+=" "+i(n.replace(/ ?[\r\n]+/g," ")),r&&r()),u)return t=t.replace(/\n+/g,`$&${c}`),`${b}
${c}${w}${t}${h}`;t=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);const M=It(`${w}${t}${h}`,c,Qt,Pt(s,!0));return`${b}
${c}${M}`}function Pa(n,e,t,s){const{type:r,value:a}=n,{actualString:o,implicitKey:i,indent:l,indentStep:c,inFlow:u}=e;if(i&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return Ne(a,e);if(!a||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return i||u||!a.includes(`
`)?Ne(a,e):mt(n,e,t,s);if(!i&&!u&&r!==N.PLAIN&&a.includes(`
`))return mt(n,e,t,s);if(Dt(a)){if(l==="")return e.forceBlockIndent=!0,mt(n,e,t,s);if(i&&l===c)return Ne(a,e)}const f=a.replace(/\n+/g,`$&
${l}`);if(o){const d=p=>{var y;return p.default&&p.tag!=="tag:yaml.org,2002:str"&&((y=p.test)==null?void 0:y.test(f))},{compat:h,tags:m}=e.doc.schema;if(m.some(d)||h!=null&&h.some(d))return Ne(a,e)}return i?f:It(f,l,ws,Pt(e,!1))}function Da(n,e,t,s){const{implicitKey:r,inFlow:a}=e,o=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:i}=n;i!==N.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(i=N.QUOTE_DOUBLE);const l=u=>{switch(u){case N.BLOCK_FOLDED:case N.BLOCK_LITERAL:return r||a?Ne(o.value,e):mt(o,e,t,s);case N.QUOTE_DOUBLE:return Qe(o.value,e);case N.QUOTE_SINGLE:return Xt(o.value,e);case N.PLAIN:return Pa(o,e,t,s);default:return null}};let c=l(i);if(c===null){const{defaultKeyType:u,defaultStringType:f}=e.options,d=r&&u||f;if(c=l(d),c===null)throw new Error(`Unsupported default string type ${d}`)}return c}function Na(n,e){const t=Object.assign({blockQuote:!0,commentString:Ea,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let s;switch(t.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:s,options:t}}function ja(n,e){var r;if(e.tag){const a=n.filter(o=>o.tag===e.tag);if(a.length>0)return a.find(o=>o.format===e.format)??a[0]}let t,s;if(j(e)){s=e.value;const a=n.filter(o=>{var i;return(i=o.identify)==null?void 0:i.call(o,s)});t=a.find(o=>o.format===e.format)??a.find(o=>!o.format)}else s=e,t=n.find(a=>a.nodeClass&&s instanceof a.nodeClass);if(!t){const a=((r=s==null?void 0:s.constructor)==null?void 0:r.name)??typeof s;throw new Error(`Tag not resolved for ${a} value`)}return t}function Ra(n,e,{anchors:t,doc:s}){if(!s.directives)return"";const r=[],a=(j(n)||J(n))&&n.anchor;a&&ys(a)&&(t.add(a),r.push(`&${a}`));const o=n.tag?n.tag:e.default?null:e.tag;return o&&r.push(s.directives.tagString(o)),r.join(" ")}function St(n,e,t,s){var l;if(F(n))return n.toString(e,t,s);if(He(n)){if(e.doc.directives)return n.toString(e);if((l=e.resolvedAliases)!=null&&l.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let r;const a=q(n)?n:e.doc.createNode(n,{onTagObj:c=>r=c});r||(r=ja(e.doc.schema.tags,a));const o=Ra(a,r,e);o.length>0&&(e.indentAtStart=(e.indentAtStart??0)+o.length+1);const i=typeof r.stringify=="function"?r.stringify(a,e,t,s):j(a)?Da(a,e,t,s):a.toString(e,t,s);return o?j(a)||i[0]==="{"||i[0]==="["?`${o} ${i}`:`${o}
${e.indent}${i}`:i}function Fa({key:n,value:e},t,s,r){const{allNullValues:a,doc:o,indent:i,indentStep:l,options:{commentString:c,indentSeq:u,simpleKeys:f}}=t;let d=q(n)&&n.comment||null;if(f){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(J(n)){const C="With simple keys, collection cannot be used as a key value";throw new Error(C)}}let h=!f&&(!n||d&&e==null&&!t.inFlow||J(n)||(j(n)?n.type===N.BLOCK_FOLDED||n.type===N.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!h&&(f||!a),indent:i+l});let m=!1,p=!1,y=St(n,t,()=>m=!0,()=>p=!0);if(!h&&!t.inFlow&&y.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");h=!0}if(t.inFlow){if(a||e==null)return m&&s&&s(),y===""?"?":h?`? ${y}`:y}else if(a&&!f||e==null&&h)return y=`? ${y}`,d&&!m?y+=De(y,t.indent,c(d)):p&&r&&r(),y;m&&(d=null),h?(d&&(y+=De(y,t.indent,c(d))),y=`? ${y}
${i}:`):(y=`${y}:`,d&&(y+=De(y,t.indent,c(d))));let v,w,k;q(e)?(v=!!e.spaceBefore,w=e.commentBefore,k=e.comment):(v=!1,w=null,k=null,e&&typeof e=="object"&&(e=o.createNode(e))),t.implicitKey=!1,!h&&!d&&j(e)&&(t.indentAtStart=y.length+1),p=!1,!u&&l.length>=2&&!t.inFlow&&!h&&kn(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let b=!1;const M=St(e,t,()=>b=!0,()=>p=!0);let _=" ";if(d||v||w){if(_=v?`
`:"",w){const C=c(w);_+=`
${tt(C,t.indent)}`}M===""&&!t.inFlow?_===`
`&&(_=`

`):_+=`
${t.indent}`}else if(!h&&J(e)){const C=M[0],$=M.indexOf(`
`),P=$!==-1,z=t.inFlow??e.flow??e.items.length===0;if(P||!z){let H=!1;if(P&&(C==="&"||C==="!")){let T=M.indexOf(" ");C==="&"&&T!==-1&&T<$&&M[T+1]==="!"&&(T=M.indexOf(" ",T+1)),(T===-1||$<T)&&(H=!0)}H||(_=`
${t.indent}`)}}else(M===""||M[0]===`
`)&&(_="");return y+=_+M,t.inFlow?b&&s&&s():k&&!b?y+=De(y,t.indent,c(k)):p&&r&&r(),y}function Ha(n,e){(n==="debug"||n==="warn")&&(typeof process<"u"&&process.emitWarning?process.emitWarning(e):console.warn(e))}const Gn="<<";function ks(n,e,{key:t,value:s}){if(n!=null&&n.doc.schema.merge&&Ga(t))if(s=He(s)?s.resolve(n.doc):s,kn(s))for(const r of s.items)zt(n,e,r);else if(Array.isArray(s))for(const r of s)zt(n,e,r);else zt(n,e,s);else{const r=te(t,"",n);if(e instanceof Map)e.set(r,te(s,r,n));else if(e instanceof Set)e.add(r);else{const a=Va(t,r,n),o=te(s,a,n);a in e?Object.defineProperty(e,a,{value:o,writable:!0,enumerable:!0,configurable:!0}):e[a]=o}}return e}const Ga=n=>n===Gn||j(n)&&n.value===Gn&&(!n.type||n.type===N.PLAIN);function zt(n,e,t){const s=n&&He(t)?t.resolve(n.doc):t;if(!gs(s))throw new Error("Merge sources must be maps or map aliases");const r=s.toJSON(null,n,Map);for(const[a,o]of r)e instanceof Map?e.has(a)||e.set(a,o):e instanceof Set?e.add(a):Object.prototype.hasOwnProperty.call(e,a)||Object.defineProperty(e,a,{value:o,writable:!0,enumerable:!0,configurable:!0});return e}function Va(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(q(n)&&(t!=null&&t.doc)){const s=Na(t.doc,{});s.anchors=new Set;for(const a of t.anchors.keys())s.anchors.add(a.anchor);s.inFlow=!0,s.inStringifyKey=!0;const r=n.toString(s);if(!t.mapKeyWarned){let a=JSON.stringify(r);a.length>40&&(a=a.substring(0,36)+'..."'),Ha(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${a}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return r}return JSON.stringify(e)}function _n(n,e,t){const s=bt(n,void 0,t),r=bt(e,void 0,t);return new oe(s,r)}class oe{constructor(e,t=null){Object.defineProperty(this,ae,{value:ms}),this.key=e,this.value=t}clone(e){let{key:t,value:s}=this;return q(t)&&(t=t.clone(e)),q(s)&&(s=s.clone(e)),new oe(t,s)}toJSON(e,t){const s=t!=null&&t.mapAsMap?new Map:{};return ks(t,s,this)}toString(e,t,s){return e!=null&&e.doc?Fa(this,e,t,s):JSON.stringify(this)}}function bs(n,e,t){return(e.inFlow??n.flow?Wa:za)(n,e,t)}function za({comment:n,items:e},t,{blockItemPrefix:s,flowChars:r,itemIndent:a,onChompKeep:o,onComment:i}){const{indent:l,options:{commentString:c}}=t,u=Object.assign({},t,{indent:a,type:null});let f=!1;const d=[];for(let m=0;m<e.length;++m){const p=e[m];let y=null;if(q(p))!f&&p.spaceBefore&&d.push(""),_t(t,d,p.commentBefore,f),p.comment&&(y=p.comment);else if(F(p)){const w=q(p.key)?p.key:null;w&&(!f&&w.spaceBefore&&d.push(""),_t(t,d,w.commentBefore,f))}f=!1;let v=St(p,u,()=>y=null,()=>f=!0);y&&(v+=De(v,a,c(y))),f&&y&&(f=!1),d.push(s+v)}let h;if(d.length===0)h=r.start+r.end;else{h=d[0];for(let m=1;m<d.length;++m){const p=d[m];h+=p?`
${l}${p}`:`
`}}return n?(h+=`
`+tt(c(n),l),i&&i()):f&&o&&o(),h}function Wa({items:n},e,{flowChars:t,itemIndent:s}){const{indent:r,indentStep:a,flowCollectionPadding:o,options:{commentString:i}}=e;s+=a;const l=Object.assign({},e,{indent:s,inFlow:!0,type:null});let c=!1,u=0;const f=[];for(let m=0;m<n.length;++m){const p=n[m];let y=null;if(q(p))p.spaceBefore&&f.push(""),_t(e,f,p.commentBefore,!1),p.comment&&(y=p.comment);else if(F(p)){const w=q(p.key)?p.key:null;w&&(w.spaceBefore&&f.push(""),_t(e,f,w.commentBefore,!1),w.comment&&(c=!0));const k=q(p.value)?p.value:null;k?(k.comment&&(y=k.comment),k.commentBefore&&(c=!0)):p.value==null&&(w!=null&&w.comment)&&(y=w.comment)}y&&(c=!0);let v=St(p,l,()=>y=null);m<n.length-1&&(v+=","),y&&(v+=De(v,s,i(y))),!c&&(f.length>u||v.includes(`
`))&&(c=!0),f.push(v),u=f.length}const{start:d,end:h}=t;if(f.length===0)return d+h;if(!c){const m=f.reduce((p,y)=>p+y.length+2,2);c=e.options.lineWidth>0&&m>e.options.lineWidth}if(c){let m=d;for(const p of f)m+=p?`
${a}${r}${p}`:`
`;return`${m}
${r}${h}`}else return`${d}${o}${f.join(" ")}${o}${h}`}function _t({indent:n,options:{commentString:e}},t,s,r){if(s&&r&&(s=s.replace(/^\n+/,"")),s){const a=tt(e(s),n);t.push(a.trimStart())}}function Ce(n,e){const t=j(e)?e.value:e;for(const s of n)if(F(s)&&(s.key===e||s.key===t||j(s.key)&&s.key.value===t))return s}class Ee extends Sn{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Te,e),this.items=[]}static from(e,t,s){const{keepUndefined:r,replacer:a}=s,o=new this(e),i=(l,c)=>{if(typeof a=="function")c=a.call(t,l,c);else if(Array.isArray(a)&&!a.includes(l))return;(c!==void 0||r)&&o.items.push(_n(l,c,s))};if(t instanceof Map)for(const[l,c]of t)i(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))i(l,t[l]);return typeof e.sortMapEntries=="function"&&o.items.sort(e.sortMapEntries),o}add(e,t){var o;let s;F(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new oe(e,e==null?void 0:e.value):s=new oe(e.key,e.value);const r=Ce(this.items,s.key),a=(o=this.schema)==null?void 0:o.sortMapEntries;if(r){if(!t)throw new Error(`Key ${s.key} already set`);j(r.value)&&vs(s.value)?r.value.value=s.value:r.value=s.value}else if(a){const i=this.items.findIndex(l=>a(s,l)<0);i===-1?this.items.push(s):this.items.splice(i,0,s)}else this.items.push(s)}delete(e){const t=Ce(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const s=Ce(this.items,e),r=s==null?void 0:s.value;return(!t&&j(r)?r.value:r)??void 0}has(e){return!!Ce(this.items,e)}set(e,t){this.add(new oe(e,t),!0)}toJSON(e,t,s){const r=s?new s:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(r);for(const a of this.items)ks(t,r,a);return r}toString(e,t,s){if(!e)return JSON.stringify(this);for(const r of this.items)if(!F(r))throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),bs(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:t})}}class Ss extends Sn{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(nt,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=rt(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const s=rt(e);if(typeof s!="number")return;const r=this.items[s];return!t&&j(r)?r.value:r}has(e){const t=rt(e);return typeof t=="number"&&t<this.items.length}set(e,t){const s=rt(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const r=this.items[s];j(r)&&vs(t)?r.value=t:this.items[s]=t}toJSON(e,t){const s=[];t!=null&&t.onCreate&&t.onCreate(s);let r=0;for(const a of this.items)s.push(te(a,String(r++),t));return s}toString(e,t,s){return e?bs(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:t}):JSON.stringify(this)}static from(e,t,s){const{replacer:r}=s,a=new this(e);if(t&&Symbol.iterator in Object(t)){let o=0;for(let i of t){if(typeof r=="function"){const l=t instanceof Set?i:String(o++);i=r.call(t,l,i)}a.items.push(bt(i,void 0,s))}}return a}}function rt(n){let e=j(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}function Ba(n,e,t){const{replacer:s}=t,r=new Ss(n);r.tag="tag:yaml.org,2002:pairs";let a=0;if(e&&Symbol.iterator in Object(e))for(let o of e){typeof s=="function"&&(o=s.call(e,String(a++),o));let i,l;if(Array.isArray(o))if(o.length===2)i=o[0],l=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){const c=Object.keys(o);if(c.length===1)i=c[0],l=o[i];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else i=o;r.items.push(_n(i,l,t))}return r}class Mn extends Ss{constructor(){super(),this.add=Ee.prototype.add.bind(this),this.delete=Ee.prototype.delete.bind(this),this.get=Ee.prototype.get.bind(this),this.has=Ee.prototype.has.bind(this),this.set=Ee.prototype.set.bind(this),this.tag=Mn.tag}toJSON(e,t){if(!t)return super.toJSON(e);const s=new Map;t!=null&&t.onCreate&&t.onCreate(s);for(const r of this.items){let a,o;if(F(r)?(a=te(r.key,"",t),o=te(r.value,a,t)):a=te(r,"",t),s.has(a))throw new Error("Ordered maps must not include duplicate keys");s.set(a,o)}return s}static from(e,t,s){const r=Ba(e,t,s),a=new this;return a.items=r.items,a}}Mn.tag="tag:yaml.org,2002:omap";class Ln extends Ee{constructor(e){super(e),this.tag=Ln.tag}add(e){let t;F(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new oe(e.key,null):t=new oe(e,null),Ce(this.items,t.key)||this.items.push(t)}get(e,t){const s=Ce(this.items,e);return!t&&F(s)?j(s.key)?s.key.value:s.key:s}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const s=Ce(this.items,e);s&&!t?this.items.splice(this.items.indexOf(s),1):!s&&t&&this.items.push(new oe(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,s);throw new Error("Set items must all have null values")}static from(e,t,s){const{replacer:r}=s,a=new this(e);if(t&&Symbol.iterator in Object(t))for(let o of t)typeof r=="function"&&(o=r.call(t,o,o)),a.items.push(_n(o,null,s));return a}}Ln.tag="tag:yaml.org,2002:set";function qa(n,e){if(!e||e==="all"||e==="*")return $n(1,n+1);if(e==="none")return[];const t=[];for(const s of e.split(/[,;]/g))if(!s.includes("-"))t.push(+s);else{const[r,a]=s.split("-",2);t.push(...$n(+r,a?+a+1:n+1))}return yr(t).filter(s=>s<=n).sort((s,r)=>s-r)}function Gi(){const n=A(Date.now()),e=Bs({interval:1e3}),t=g(()=>{const r=(e.value-n.value)/1e3,a=Math.floor(r%60).toString().padStart(2,"0");return`${Math.floor(r/60).toString().padStart(2,"0")}:${a}`});function s(){n.value=e.value}return{timer:t,resetTimer:s}}function An(n=5){const e=[],t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",s=t.length;for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*s)));return e.join("")}function Vi(n,e,t,s){const r=qa(e+t-1,n);for(let a=0;a<e;a++){const o=s(a),i=r.includes(a+t);for(const l of o)l.classList.toggle("slidev-code-highlighted",i),l.classList.toggle("slidev-code-dishonored",!i),l.classList.toggle("highlighted",i),l.classList.toggle("dishonored",!i)}}const Ua="modulepreload",Ja=function(n){return"/genaiscript/slides/vs-aua/"+n},Vn={},E=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.all(t.map(i=>{if(i=Ja(i),i in Vn)return;Vn[i]=!0;const l=i.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Ua,l||(u.as="script",u.crossOrigin=""),u.href=i,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},_s=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},Ka={},Ya={class:"px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono"};function Qa(n,e){return ns(),qs("div",Ya," An error occurred on this slide. Check the terminal for more information. ")}const Xa=_s(Ka,[["render",Qa],["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/layouts/error.vue"]]),V=Object.freeze(Object.defineProperty({__proto__:null,default:Xa},Symbol.toStringTag,{value:"Module"})),ue=L({theme:"default",title:"GenAIScript",titleTemplate:"%s",favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",info:`## GenAIScript
Scripting for Generative AI.<br/>
[Docs](https://microsoft.github.io/genaiscript/) | [GitHub](https://github.com/microsoft/genaiscript/)
`,class:"text-center",highlighter:"shiki",drawings:{persist:!1},mdc:!0,layout:"center"}),Za=L({layout:g(()=>ue.layout),transition:g(()=>ue.transition),class:g(()=>ue.class),clicks:g(()=>ue.clicks),name:g(()=>ue.name),preload:g(()=>ue.preload),slide:{index:0,content:"",note:"",title:"GenAIScript",noteHTML:"",raw:"",frontmatter:ue,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",start:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),fe=L({layout:"two-cols"}),eo=L({layout:g(()=>fe.layout),transition:g(()=>fe.transition),class:g(()=>fe.class),clicks:g(()=>fe.clicks),name:g(()=>fe.name),preload:g(()=>fe.preload),slide:{index:1,importChain:[{raw:`---
src: pages/script-intro.md
---
`,content:"",frontmatter:{src:"pages/script-intro.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script-intro.md"},frontmatterRaw:`src: pages/script-intro.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:1,start:36,contentStart:39,end:40,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-intro.md",index:0,start:0,contentStart:3,end:30}]}],content:"",note:"",title:"GenAIScript Introduction",level:2,noteHTML:"",raw:"",frontmatter:fe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-intro.md",start:0,id:1,no:2},__clicksContext:null,__preloaded:!1}),de=L({}),to=L({layout:g(()=>de.layout),transition:g(()=>de.transition),class:g(()=>de.class),clicks:g(()=>de.clicks),name:g(()=>de.name),preload:g(()=>de.preload),slide:{index:2,importChain:[{raw:`---
src: pages/script.md
---
`,content:"",frontmatter:{src:"pages/script.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script.md"},frontmatterRaw:`src: pages/script.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:2,start:40,contentStart:43,end:44,imports:[{raw:`
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

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script.md",index:0,start:0,contentStart:0,end:40}]}],content:"",note:"",title:"Generative AI Scripting",level:1,noteHTML:"",raw:"",frontmatter:de,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script.md",start:0,id:2,no:3},__clicksContext:null,__preloaded:!1}),he=L({}),no=L({layout:g(()=>he.layout),transition:g(()=>he.transition),class:g(()=>he.class),clicks:g(()=>he.clicks),name:g(()=>he.name),preload:g(()=>he.preload),slide:{index:3,importChain:[{raw:`---
src: pages/script-prompt.md
---
`,content:"",frontmatter:{src:"pages/script-prompt.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script-prompt.md"},frontmatterRaw:`src: pages/script-prompt.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:3,start:44,contentStart:47,end:48,imports:[{raw:`
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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-prompt.md",index:0,start:0,contentStart:0,end:25}]}],content:"",note:"",title:"Context x Script = Prompt",level:1,noteHTML:"",raw:"",frontmatter:he,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-prompt.md",start:0,id:3,no:4},__clicksContext:null,__preloaded:!1}),pe=L({}),so=L({layout:g(()=>pe.layout),transition:g(()=>pe.transition),class:g(()=>pe.class),clicks:g(()=>pe.clicks),name:g(()=>pe.name),preload:g(()=>pe.preload),slide:{index:4,importChain:[{raw:`---
src: pages/system-scripts.md
---
`,content:"",frontmatter:{src:"pages/system-scripts.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/system-scripts.md"},frontmatterRaw:`src: pages/system-scripts.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:4,start:48,contentStart:51,end:52,imports:[{raw:`# System Scripts and Microformats

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-scripts.md",index:0,start:0,contentStart:0,end:22}]}],content:"",note:"",title:"System Scripts and Microformats",level:1,noteHTML:"",raw:"",frontmatter:pe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-scripts.md",start:0,id:4,no:5},__clicksContext:null,__preloaded:!1}),me=L({}),ro=L({layout:g(()=>me.layout),transition:g(()=>me.transition),class:g(()=>me.class),clicks:g(()=>me.clicks),name:g(()=>me.name),preload:g(()=>me.preload),slide:{index:5,importChain:[{raw:`---
src: pages/llm-invocation.md
---
`,content:"",frontmatter:{src:"pages/llm-invocation.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/llm-invocation.md"},frontmatterRaw:`src: pages/llm-invocation.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:5,start:52,contentStart:55,end:56,imports:[{raw:`
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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/llm-invocation.md",index:0,start:0,contentStart:0,end:19}]}],content:"",note:"",title:"Prompt + LLM = Response",level:1,noteHTML:"",raw:"",frontmatter:me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/llm-invocation.md",start:0,id:5,no:6},__clicksContext:null,__preloaded:!1}),ge=L({}),ao=L({layout:g(()=>ge.layout),transition:g(()=>ge.transition),class:g(()=>ge.class),clicks:g(()=>ge.clicks),name:g(()=>ge.name),preload:g(()=>ge.preload),slide:{index:6,importChain:[{raw:`---
src: pages/response-processing.md
---
`,content:"",frontmatter:{src:"pages/response-processing.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/response-processing.md"},frontmatterRaw:`src: pages/response-processing.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:6,start:56,contentStart:59,end:60,imports:[{raw:`

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/response-processing.md",index:0,start:0,contentStart:0,end:24}]}],content:"",note:"",title:"Response x Parsers = Files + Data",level:1,noteHTML:"",raw:"",frontmatter:ge,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/response-processing.md",start:0,id:6,no:7},__clicksContext:null,__preloaded:!1}),ye=L({}),oo=L({layout:g(()=>ye.layout),transition:g(()=>ye.transition),class:g(()=>ye.class),clicks:g(()=>ye.clicks),name:g(()=>ye.name),preload:g(()=>ye.preload),slide:{index:7,importChain:[{raw:`---
src: pages/vscode.md
---
`,content:"",frontmatter:{src:"pages/vscode.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/vscode.md"},frontmatterRaw:`src: pages/vscode.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:7,start:60,contentStart:63,end:64,imports:[{raw:`# Dev Experience

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

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vscode.md",index:0,start:0,contentStart:0,end:28}]}],content:"",note:"",title:"Dev Experience",level:1,noteHTML:"",raw:"",frontmatter:ye,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vscode.md",start:0,id:7,no:8},__clicksContext:null,__preloaded:!1}),ve=L({}),io=L({layout:g(()=>ve.layout),transition:g(()=>ve.transition),class:g(()=>ve.class),clicks:g(()=>ve.clicks),name:g(()=>ve.name),preload:g(()=>ve.preload),slide:{index:8,importChain:[{raw:`---
src: pages/js-runtime.md
---
`,content:"",frontmatter:{src:"pages/js-runtime.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/js-runtime.md"},frontmatterRaw:`src: pages/js-runtime.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:8,start:64,contentStart:67,end:68,imports:[{raw:`
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

- Debugging Just Works™`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/js-runtime.md",index:0,start:0,contentStart:0,end:25}]}],content:"",note:"",title:"JavaScript Runtime for GenAI",level:1,noteHTML:"",raw:"",frontmatter:ve,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/js-runtime.md",start:0,id:8,no:9},__clicksContext:null,__preloaded:!1}),we=L({}),lo=L({layout:g(()=>we.layout),transition:g(()=>we.transition),class:g(()=>we.class),clicks:g(()=>we.clicks),name:g(()=>we.name),preload:g(()=>we.preload),slide:{index:9,importChain:[{raw:`---
src: pages/image-alt-text.md
---
`,content:"",frontmatter:{src:"pages/image-alt-text.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/image-alt-text.md"},frontmatterRaw:`src: pages/image-alt-text.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:9,start:68,contentStart:71,end:72,imports:[{raw:`# Example: Image Alt Text Generator

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/image-alt-text.md",index:0,start:0,contentStart:0,end:32}]}],content:"",note:"",title:"Example: Image Alt Text Generator",level:1,noteHTML:"",raw:"",frontmatter:we,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/image-alt-text.md",start:0,id:9,no:10},__clicksContext:null,__preloaded:!1}),ke=L({}),co=L({layout:g(()=>ke.layout),transition:g(()=>ke.transition),class:g(()=>ke.class),clicks:g(()=>ke.clicks),name:g(()=>ke.name),preload:g(()=>ke.preload),slide:{index:10,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:10,start:72,contentStart:75,end:76,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Example: Translating MakeCode",level:1,noteHTML:"",raw:"",frontmatter:ke,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:0,id:10,no:11},__clicksContext:null,__preloaded:!1}),be=L({}),uo=L({layout:g(()=>be.layout),transition:g(()=>be.transition),class:g(()=>be.class),clicks:g(()=>be.clicks),name:g(()=>be.name),preload:g(()=>be.preload),slide:{index:11,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:10,start:72,contentStart:75,end:76,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Develop the script in VSCode",level:2,noteHTML:"",raw:"",frontmatter:be,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:29,id:11,no:12},__clicksContext:null,__preloaded:!1}),Se=L({}),fo=L({layout:g(()=>Se.layout),transition:g(()=>Se.transition),class:g(()=>Se.class),clicks:g(()=>Se.clicks),name:g(()=>Se.name),preload:g(()=>Se.preload),slide:{index:12,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:10,start:72,contentStart:75,end:76,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Automate with the CLI",level:2,noteHTML:"",raw:"",frontmatter:Se,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:59,id:12,no:13},__clicksContext:null,__preloaded:!1}),_e=L({}),ho=L({layout:g(()=>_e.layout),transition:g(()=>_e.transition),class:g(()=>_e.class),clicks:g(()=>_e.clicks),name:g(()=>_e.name),preload:g(()=>_e.preload),slide:{index:13,importChain:[{raw:`---
src: pages/tla-plus.md
---
`,content:"",frontmatter:{src:"pages/tla-plus.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/tla-plus.md"},frontmatterRaw:`src: pages/tla-plus.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:11,start:76,contentStart:79,end:80,imports:[{raw:`# Example: TLA+ Linter

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",index:0,start:0,contentStart:0,end:31}]}],content:"",note:"",title:"Example: TLA+ Linter",level:1,noteHTML:"",raw:"",frontmatter:_e,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",start:0,id:13,no:14},__clicksContext:null,__preloaded:!1}),Me=L({layout:"end"}),po=L({layout:g(()=>Me.layout),transition:g(()=>Me.transition),class:g(()=>Me.class),clicks:g(()=>Me.clicks),name:g(()=>Me.name),preload:g(()=>Me.preload),slide:{index:14,importChain:[{raw:`---
src: pages/end.md
---
`,content:"",frontmatter:{src:"pages/end.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/end.md"},frontmatterRaw:`src: pages/end.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/vs-aua-slides.md",index:12,start:80,contentStart:83,end:84,imports:[{raw:`---
layout: end
---

![](https://microsoft.github.io/genaiscript/images/favicon.svg){ style="width: 12rem; margin:auto;" }

# GenAIScript

## Scripting for Generative AI

<br/>

Available in the Visual Studio Code Marketplace.

<br/>

https://microsoft.github.io/genaiscript/
`,title:"GenAIScript",level:1,content:`![](https://microsoft.github.io/genaiscript/images/favicon.svg){ style="width: 12rem; margin:auto;" }

# GenAIScript

## Scripting for Generative AI

<br/>

Available in the Visual Studio Code Marketplace.

<br/>

https://microsoft.github.io/genaiscript/`,frontmatter:{layout:"end"},frontmatterStyle:"frontmatter",frontmatterDoc:{layout:"end"},frontmatterRaw:`layout: end
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/end.md",index:0,start:0,contentStart:3,end:18}]}],content:"",note:"",title:"GenAIScript",level:1,noteHTML:"",raw:"",frontmatter:Me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/end.md",start:0,id:14,no:15},__clicksContext:null,__preloaded:!1}),mo=[{no:1,meta:Za,component:async()=>{try{return await E(()=>import("./slidev/1-DrvN4JLT.js"),__vite__mapDeps([0,1,2,3,4]))}catch(n){return console.error("Failed to load slide 1:",n),V}}},{no:2,meta:eo,component:async()=>{try{return await E(()=>import("./slidev/2-D7MD5ZO8.js"),__vite__mapDeps([5,6,7,1,2,3,4]))}catch(n){return console.error("Failed to load slide 2:",n),V}}},{no:3,meta:to,component:async()=>{try{return await E(()=>import("./slidev/3-Ccua59am.js"),__vite__mapDeps([8,9,1,2,6,7,10,3,4]))}catch(n){return console.error("Failed to load slide 3:",n),V}}},{no:4,meta:no,component:async()=>{try{return await E(()=>import("./slidev/4-CNsNpciJ.js"),__vite__mapDeps([11,12,1,13,10,2,3,4]))}catch(n){return console.error("Failed to load slide 4:",n),V}}},{no:5,meta:so,component:async()=>{try{return await E(()=>import("./slidev/5-f0WTN6ie.js"),__vite__mapDeps([14,6,7,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 5:",n),V}}},{no:6,meta:ro,component:async()=>{try{return await E(()=>import("./slidev/6-D2unFUrk.js"),__vite__mapDeps([15,12,1,13,10,2,3,4]))}catch(n){return console.error("Failed to load slide 6:",n),V}}},{no:7,meta:ao,component:async()=>{try{return await E(()=>import("./slidev/7-BQsOXIAB.js"),__vite__mapDeps([16,12,1,13,10,2,3,4]))}catch(n){return console.error("Failed to load slide 7:",n),V}}},{no:8,meta:oo,component:async()=>{try{return await E(()=>import("./slidev/8-CVkbhHN_.js"),__vite__mapDeps([17,9,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 8:",n),V}}},{no:9,meta:io,component:async()=>{try{return await E(()=>import("./slidev/9-DdDtZZvP.js"),__vite__mapDeps([18,6,7,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 9:",n),V}}},{no:10,meta:lo,component:async()=>{try{return await E(()=>import("./slidev/10-C8suEhUj.js"),__vite__mapDeps([19,6,7,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 10:",n),V}}},{no:11,meta:co,component:async()=>{try{return await E(()=>import("./slidev/11-C48GtCJt.js"),__vite__mapDeps([20,1,10,2,3,4]))}catch(n){return console.error("Failed to load slide 11:",n),V}}},{no:12,meta:uo,component:async()=>{try{return await E(()=>import("./slidev/12-CZNep8cw.js"),__vite__mapDeps([21,1,10,2,3,4]))}catch(n){return console.error("Failed to load slide 12:",n),V}}},{no:13,meta:fo,component:async()=>{try{return await E(()=>import("./slidev/13-kH5bscqM.js"),__vite__mapDeps([22,6,7,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 13:",n),V}}},{no:14,meta:ho,component:async()=>{try{return await E(()=>import("./slidev/14-BgaQd9xL.js"),__vite__mapDeps([23,6,7,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 14:",n),V}}},{no:15,meta:po,component:async()=>{try{return await E(()=>import("./slidev/15-D17nH_53.js"),__vite__mapDeps([24,1,2,3,4,25]))}catch(n){return console.error("Failed to load slide 15:",n),V}}}],re=hn(mo);function Nt(n){return re.value.find(e=>{var t;return e.no===+n||((t=e.meta.slide)==null?void 0:t.frontmatter.routeAlias)===n})}function je(n,e){var s;(typeof n=="number"||typeof n=="string")&&(n=Nt(n));const t=((s=n.meta.slide)==null?void 0:s.frontmatter.routeAlias)??n.no;return e?`/presenter/${t}`:`/${t}`}function go(n,e,{mode:t="replace"}={}){const s=Ot();return g({get(){const r=s.currentRoute.value.query[n];return r==null?e:Array.isArray(r)?r.filter(Boolean):r},set(r){vt(()=>{(s.currentRoute.value.query[n]??(e==null?void 0:e.toString()))!==r.toString()&&s[dn(t)]({query:{...s.currentRoute.value.query,[n]:`${r}`===e?void 0:r}})})}})}const en=A(0);function tn(n){if(n===!1||n==="false")return null;if(n==null||n===!0||n==="true")return"+1";if(typeof n=="string"&&"+-".includes(n[0]))return n;const e=+n;return Number.isNaN(e)?(console.error(`Invalid "at" prop value: ${n}`),null):e}function yo(n){return Array.isArray(n)?[tn(n[0]),tn(n[1])]:null}function Ms(n,e=0,t){const s={get current(){return Ze(+n.value,e,s.total)},set current(r){n.value=Ze(+r,e,s.total)},clicksStart:e,relativeOffsets:new Map,maxMap:Us(new Map),onMounted(){},calculateSince(r,a=1){const o=tn(r);if(o==null)return null;let i,l,c;if(typeof o=="string"){const u=s.currentOffset,f=+o;i=u+f,l=u+f+a-1,c=f+a-1}else i=o,l=o+a-1,c=0;return{start:i,end:+Number.POSITIVE_INFINITY,max:l,delta:c,currentOffset:g(()=>s.current-i),isCurrent:g(()=>s.current===i),isActive:g(()=>s.current>=i)}},calculateRange(r){const a=yo(r);if(a==null)return null;const[o,i]=a;let l,c,u;return typeof o=="string"?(l=s.currentOffset+ +o,u=+o):(l=o,u=0),typeof i=="string"?(c=l+ +i,u+=+i):c=i,{start:l,end:c,max:c,delta:u,currentOffset:g(()=>s.current-l),isCurrent:g(()=>s.current===l),isActive:g(()=>l<=s.current&&s.current<c)}},calculate(r){return Array.isArray(r)?s.calculateRange(r):s.calculateSince(r)},register(r,a){if(!a)return;const{delta:o,max:i}=a;s.relativeOffsets.set(r,o),s.maxMap.set(r,i)},unregister(r){s.relativeOffsets.delete(r),s.maxMap.delete(r)},get currentOffset(){return en.value,pr(...s.relativeOffsets.values())},get total(){return en.value,t??Math.max(0,...s.maxMap.values())}};return s}function vo(n,e=0){var s,r;const t=((s=n==null?void 0:n.meta.slide)==null?void 0:s.frontmatter.clicksStart)??0;return Ms(A(Math.max(e,t)),t,(r=n==null?void 0:n.meta)==null?void 0:r.clicks)}const wo={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function ko(n,e=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let t=n.name.includes("|")?n.name:wo[n.name]||n.name;if(t.includes("|")){const[s,r]=t.split("|").map(a=>a.trim());t=e?r:s}if(t)return{...n,name:t}}function bo(n,e,t){var r,a;let s=n>0?(r=t==null?void 0:t.meta)==null?void 0:r.transition:(a=e==null?void 0:e.meta)==null?void 0:a.transition;return s||(s=I.transition),ko(s,n<0)}function Ls(n,e,t=1){var r,a,o,i,l,c,u,f,d;const s=(a=(r=e.meta)==null?void 0:r.slide)==null?void 0:a.level;s&&s>t&&n.length>0?Ls(n[n.length-1].children,e,t+1):n.push({no:e.no,children:[],level:t,path:je(((i=(o=e.meta.slide)==null?void 0:o.frontmatter)==null?void 0:i.routeAlias)??e.no,!1),hideInToc:!!((u=(c=(l=e.meta)==null?void 0:l.slide)==null?void 0:c.frontmatter)!=null&&u.hideInToc),title:(d=(f=e.meta)==null?void 0:f.slide)==null?void 0:d.title})}function As(n,e,t=!1,s,r){return n.map(a=>{const o={...a,active:a.no===(r==null?void 0:r.value),hasActiveParent:t};return o.children.length>0&&(o.children=As(o.children,e,o.active||o.hasActiveParent,o,r)),s&&(o.active||o.activeParent)&&(s.activeParent=!0),o})}function Cs(n,e=1){return n.filter(t=>!t.hideInToc).map(t=>({...t,children:Cs(t.children,e+1)}))}function So(n,e,t){const s=g(()=>n.value.filter(a=>{var o,i;return(i=(o=a.meta)==null?void 0:o.slide)==null?void 0:i.title}).reduce((a,o)=>(Ls(a,o),a),[])),r=g(()=>As(s.value,t.value,void 0,void 0,e));return g(()=>Cs(r.value))}function _o(n,e,t=A(0),s,r,a){const o=g(()=>re.value.length),i=A(0),l=A(0),c=g(()=>je(n.value,s.value)),u=g(()=>n.value.no),f=g(()=>{var O;return((O=n.value.meta)==null?void 0:O.layout)||(u.value===1?"cover":"default")}),d=g(()=>e.value.current),h=g(()=>e.value.clicksStart),m=g(()=>e.value.total),p=g(()=>re.value[Math.min(re.value.length,u.value+1)-1]),y=g(()=>re.value[Math.max(1,u.value-1)-1]),v=g(()=>u.value<re.value.length||d.value<m.value),w=g(()=>u.value>1||d.value>0),k=g(()=>bo(i.value,n.value,y.value));Q(n,(O,R)=>{i.value=O.no-R.no});async function b(O){return!1}const M=So(re,u,n);async function _(){l.value=1,m.value<=t.value?await $():t.value+=1}async function C(){l.value=-1,t.value<=h.value?await P(!0):t.value-=1}async function $(O=!1){l.value=1,u.value<re.value.length&&await T(u.value+1,O&&!r.value?dt:void 0)}async function P(O=!1){l.value=-1,u.value>1&&await T(u.value-1,O&&!r.value?dt:void 0)}function z(){return T(1)}function H(){return T(o.value)}async function T(O,R=0,se=!1){var ce,Ve,ze;yn.value=!1;const Ge=u.value!==O,Z=R!==t.value,K=(ce=Nt(O))==null?void 0:ce.meta,D=((Ve=K==null?void 0:K.slide)==null?void 0:Ve.frontmatter.clicksStart)??0;R=Ze(R,D,((ze=K==null?void 0:K.__clicksContext)==null?void 0:ze.total)??dt),(se||Ge||Z)&&await(a==null?void 0:a.push({path:je(O,s.value),query:{...a.currentRoute.value.query,clicks:R===0?void 0:R.toString(),embedded:location.search.includes("embedded")?"true":void 0}}))}function x(){a==null||a.push({path:je(u.value,!0),query:{...a.currentRoute.value.query}})}function G(){a==null||a.push({path:je(u.value,!1),query:{...a.currentRoute.value.query}})}return{slides:re,total:o,currentPath:c,currentSlideNo:u,currentPage:u,currentSlideRoute:n,currentLayout:f,currentTransition:k,clicksDirection:l,nextRoute:p,prevRoute:y,clicksContext:e,clicks:d,clicksStart:h,clicksTotal:m,hasNext:v,hasPrev:w,tocTree:M,navDirection:i,openInEditor:b,next:_,prev:C,go:T,goLast:H,goFirst:z,nextSlide:$,prevSlide:P,enterPresenter:x,exitPresenter:G}}const Mo=ss(()=>{const n=Ot(),e=g(()=>n.currentRoute.value),t=g(()=>(n.currentRoute.value.query,new URLSearchParams(location.search))),s=g(()=>t.value.has("print")),r=g(()=>t.value.get("print")==="clicks"),a=g(()=>t.value.has("embedded")),o=g(()=>e.value.name==="play"),i=g(()=>e.value.name==="presenter"),l=g(()=>e.value.name==="notes"),c=g(()=>!i.value&&(!I.remote||t.value.get("password")===I.remote)),u=Js(o,i),f=g(()=>{var v;return u.value?((v=Nt(e.value.params.no))==null?void 0:v.no)??1:1}),d=g(()=>re.value[f.value-1]),h=go("clicks","0"),m=g(()=>y(d.value)),p=g({get(){let v=+(h.value||0);return Number.isNaN(v)&&(v=0),v},set(v){yn.value=!1,h.value=v.toString()}});function y(v){var b,M;if((b=v==null?void 0:v.meta)!=null&&b.__clicksContext)return v.meta.__clicksContext;const w=v.no,k=Ms(g({get(){return f.value===w?Math.max(+(h.value??0),k.clicksStart):f.value>w?dt:k.clicksStart},set(_){f.value===w&&(h.value=Ze(_,k.clicksStart,k.total).toString())}}),((M=v==null?void 0:v.meta.slide)==null?void 0:M.frontmatter.clicksStart)??0,v==null?void 0:v.meta.clicks);return k.onMounted=()=>{f.value===w&&(h.value=Ze(+h.value,k.clicksStart,k.total).toString())},v!=null&&v.meta&&(v.meta.__clicksContext=k),k}return{router:n,currentRoute:e,isPrintMode:s,isPrintWithClicks:r,isEmbedded:a,isPlaying:o,isPresenter:i,isNotesViewer:l,isPresenterAvailable:c,hasPrimarySlide:u,currentSlideNo:f,currentSlideRoute:d,clicksContext:m,queryClicksRaw:h,queryClicks:p,getPrimaryClicks:y}}),nn=ss(()=>{const n=Mo(),e=Ot(),t=_o(n.currentSlideRoute,n.clicksContext,n.queryClicks,n.isPresenter,n.isPrintMode,e);return Q([t.total,n.currentRoute],async()=>{const s=n.currentRoute.value.params.no;n.hasPrimarySlide.value&&!Nt(s)&&(s&&s!=="index.html"?await t.go(t.total.value,0,!0):await t.go(1,0,!0))},{flush:"pre",immediate:!0}),{...t,...n}}),zn=Ks(),Wt=ne("slidev-color-schema","auto"),Wn=g(()=>I.colorSchema!=="auto"),Ts=g({get(){return Wn.value?I.colorSchema==="dark":Wt.value==="auto"?zn.value:Wt.value==="dark"},set(n){Wn.value||(Wt.value=n===zn.value?"auto":n?"dark":"light")}}),zi=rs(Ts);$t&&Q(Ts,n=>{const e=document.querySelector("html");e.classList.toggle("dark",n),e.classList.toggle("light",!n)},{immediate:!0});const Lo=[];function Ao(){const n=ts().appContext.app,e=L({nav:nn(),configs:I,themeConfigs:g(()=>I.themeConfig)});n.provide(gn,A("none")),n.provide(va,e),n.provide(mn,g(()=>e.nav.currentSlideNo)),n.provide(xt,hn(vo()));for(const u of Lo)u();const{clicksContext:t,currentSlideNo:s,hasPrimarySlide:r,isNotesViewer:a,isPresenter:o}=nn();la({title:Rt,htmlAttrs:I.htmlAttrs}),da(`${Rt} - shared`),ga(`${Rt} - drawings`);const i=`${location.origin}_${An()}`;function l(){a.value||!o.value&&!ba.includes(location.host.split(":")[0])||(o.value?(We("page",+s.value),We("clicks",t.value.current)):(We("viewerPage",+s.value),We("viewerClicks",t.value.current)),We("lastUpdate",{id:i,type:o.value?"presenter":"viewer",time:new Date().getTime()}))}const c=Ot();c.afterEach(l),Q(t,l),ha(u=>{var f;r.value&&((f=u.lastUpdate)==null?void 0:f.type)==="presenter"&&(+u.page!=+s.value||+t.value.current!=+u.clicks)&&(yn.value=!1,c.replace({path:je(u.page,o.value),query:{...c.currentRoute.value.query,clicks:u.clicks||0}}))})}const Co=Ys({__name:"App",setup(n){return Ao(),Re(()=>{for(const[e,t]of Object.entries(br.value))document.body.style.setProperty(e,t.toString())}),(e,t)=>{const s=Qs("RouterView");return ns(),Xs(s)}}}),To=_s(Co,[["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/App.vue"]]);function Wi(n,e=""){var r,a;const t=["slidev-page",e],s=(a=(r=n==null?void 0:n.meta)==null?void 0:r.slide)==null?void 0:a.no;return s!=null&&t.push(`slidev-page-${s}`),t.filter(Boolean).join(" ")}async function Bi(){const{saveAs:n}=await E(()=>import("./modules/file-saver-EUMWMpoS.js").then(e=>e.F),[]);n(typeof I.download=="string"?I.download:I.exportFilename?`${I.exportFilename}.pdf`:"/genaiscript/slides/vs-aua/slidev-exported.pdf",`${I.title}.pdf`)}function Fe(n,e,t){var s;return((s=n.instance)==null?void 0:s.$).provides[e]??t}function Oo(){return{install(n){n.directive("click",{name:"v-click",mounted(e,t){const s=gt(e,t,t.value);s!=null&&(e.classList.toggle(ft,!0),e.dataset.slidevClicksStart=String(s.start),Number.isFinite(s.end)&&(e.dataset.slidevClicksEnd=String(s.end)),e.watchStopHandle=Re(()=>{const r=s.isActive.value,a=s.isCurrent.value,o=r&&!a;s.flagHide?(e.classList.toggle(s.flagFade?qe:Be,r),e.classList.toggle(Ht,r)):e.classList.toggle(s.flagFade?qe:Be,!r),e.classList.toggle(Gt,a),e.classList.toggle(Vt,o)}))},unmounted:Bt}),n.directive("after",{name:"v-after",mounted(e,t){const s=gt(e,t,"+0");s!=null&&(e.classList.toggle(ft,!0),e.watchStopHandle=Re(()=>{const r=s.isActive.value,a=s.isCurrent.value,o=r&&!a;s.flagHide?(e.classList.toggle(s.flagFade?qe:Be,r),e.classList.toggle(Ht,r)):e.classList.toggle(s.flagFade?qe:Be,!r),e.classList.toggle(Gt,a),e.classList.toggle(Vt,o)}))},unmounted:Bt}),n.directive("click-hide",{name:"v-click-hide",mounted(e,t){const s=gt(e,t,t.value,!0);s!=null&&(e.classList.toggle(ft,!0),e.watchStopHandle=Re(()=>{const r=s.isActive.value,a=s.isCurrent.value,o=r&&!a;e.classList.toggle(s.flagFade?qe:Be,r),e.classList.toggle(Ht,r),e.classList.toggle(Gt,a),e.classList.toggle(Vt,o)}))},unmounted:Bt})}}}const Os=new Map;function gt(n,e,t,s=!1){var f;const r=(f=Fe(e,xt))==null?void 0:f.value;if(!n||!r)return null;const a=s||e.modifiers.hide!==!1&&e.modifiers.hide!=null,o=e.modifiers.fade!==!1&&e.modifiers.fade!=null,i=r.calculate(t);if(!i)return null;r.register(n,i);const l=g(()=>a?!i.isActive.value:i.isActive.value),c=g(()=>l.value?"shown":Number.isFinite(i.end)?r.current<i.start?"before":"after":a?"after":"before"),u={...i,isShown:l,visibilityState:c,flagFade:o,flagHide:a};return Os.set(n,u),u}function Bt(n,e){var s,r;n.classList.toggle(ft,!1);const t=(s=Fe(e,xt))==null?void 0:s.value;t==null||t.unregister(n),(r=n.watchStopHandle)==null||r.call(n)}function $s(){return Math.floor(Math.random()*2**31)}class $o{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function sn(n,e,t){if(n&&n.length){const[s,r]=e,a=Math.PI/180*t,o=Math.cos(a),i=Math.sin(a);for(const l of n){const[c,u]=l;l[0]=(c-s)*o-(u-r)*i+s,l[1]=(c-s)*i+(u-r)*o+r}}}function xo(n,e,t){const s=[];n.forEach(r=>s.push(...r)),sn(s,e,t)}function Eo(n,e){return n[0]===e[0]&&n[1]===e[1]}function Io(n,e,t,s=1){const r=t,a=Math.max(e,.1),o=n[0]&&n[0][0]&&typeof n[0][0]=="number"?[n]:n,i=[0,0];if(r)for(const c of o)sn(c,i,r);const l=Po(o,a,s);if(r){for(const c of o)sn(c,i,-r);xo(l,i,-r)}return l}function Po(n,e,t){const s=[];for(const c of n){const u=[...c];Eo(u[0],u[u.length-1])||u.push([u[0][0],u[0][1]]),u.length>2&&s.push(u)}const r=[];e=Math.max(e,.1);const a=[];for(const c of s)for(let u=0;u<c.length-1;u++){const f=c[u],d=c[u+1];if(f[1]!==d[1]){const h=Math.min(f[1],d[1]);a.push({ymin:h,ymax:Math.max(f[1],d[1]),x:h===f[1]?f[0]:d[0],islope:(d[0]-f[0])/(d[1]-f[1])})}}if(a.sort((c,u)=>c.ymin<u.ymin?-1:c.ymin>u.ymin?1:c.x<u.x?-1:c.x>u.x?1:c.ymax===u.ymax?0:(c.ymax-u.ymax)/Math.abs(c.ymax-u.ymax)),!a.length)return r;let o=[],i=a[0].ymin,l=0;for(;o.length||a.length;){if(a.length){let c=-1;for(let f=0;f<a.length&&!(a[f].ymin>i);f++)c=f;a.splice(0,c+1).forEach(f=>{o.push({s:i,edge:f})})}if(o=o.filter(c=>!(c.edge.ymax<=i)),o.sort((c,u)=>c.edge.x===u.edge.x?0:(c.edge.x-u.edge.x)/Math.abs(c.edge.x-u.edge.x)),(t!==1||l%e===0)&&o.length>1)for(let c=0;c<o.length;c=c+2){const u=c+1;if(u>=o.length)break;const f=o[c].edge,d=o[u].edge;r.push([[Math.round(f.x),i],[Math.round(d.x),i]])}i+=t,o.forEach(c=>{c.edge.x=c.edge.x+t*c.edge.islope}),l++}return r}function st(n,e){var t;const s=e.hachureAngle+90;let r=e.hachureGap;r<0&&(r=e.strokeWidth*4),r=Math.round(Math.max(r,.1));let a=1;return e.roughness>=1&&(((t=e.randomizer)===null||t===void 0?void 0:t.next())||Math.random())>.7&&(a=r),Io(n,r,s,a||1)}class Cn{constructor(e){this.helper=e}fillPolygons(e,t){return this._fillPolygons(e,t)}_fillPolygons(e,t){const s=st(e,t);return{type:"fillSketch",ops:this.renderLines(s,t)}}renderLines(e,t){const s=[];for(const r of e)s.push(...this.helper.doubleLineOps(r[0][0],r[0][1],r[1][0],r[1][1],t));return s}}function jt(n){const e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}class Do extends Cn{fillPolygons(e,t){let s=t.hachureGap;s<0&&(s=t.strokeWidth*4),s=Math.max(s,.1);const r=Object.assign({},t,{hachureGap:s}),a=st(e,r),o=Math.PI/180*t.hachureAngle,i=[],l=s*.5*Math.cos(o),c=s*.5*Math.sin(o);for(const[f,d]of a)jt([f,d])&&i.push([[f[0]-l,f[1]+c],[...d]],[[f[0]+l,f[1]-c],[...d]]);return{type:"fillSketch",ops:this.renderLines(i,t)}}}class No extends Cn{fillPolygons(e,t){const s=this._fillPolygons(e,t),r=Object.assign({},t,{hachureAngle:t.hachureAngle+90}),a=this._fillPolygons(e,r);return s.ops=s.ops.concat(a.ops),s}}class jo{constructor(e){this.helper=e}fillPolygons(e,t){t=Object.assign({},t,{hachureAngle:0});const s=st(e,t);return this.dotsOnLines(s,t)}dotsOnLines(e,t){const s=[];let r=t.hachureGap;r<0&&(r=t.strokeWidth*4),r=Math.max(r,.1);let a=t.fillWeight;a<0&&(a=t.strokeWidth/2);const o=r/4;for(const i of e){const l=jt(i),c=l/r,u=Math.ceil(c)-1,f=l-u*r,d=(i[0][0]+i[1][0])/2-r/4,h=Math.min(i[0][1],i[1][1]);for(let m=0;m<u;m++){const p=h+f+m*r,y=d-o+Math.random()*2*o,v=p-o+Math.random()*2*o,w=this.helper.ellipse(y,v,a,a,t);s.push(...w.ops)}}return{type:"fillSketch",ops:s}}}class Ro{constructor(e){this.helper=e}fillPolygons(e,t){const s=st(e,t);return{type:"fillSketch",ops:this.dashedLine(s,t)}}dashedLine(e,t){const s=t.dashOffset<0?t.hachureGap<0?t.strokeWidth*4:t.hachureGap:t.dashOffset,r=t.dashGap<0?t.hachureGap<0?t.strokeWidth*4:t.hachureGap:t.dashGap,a=[];return e.forEach(o=>{const i=jt(o),l=Math.floor(i/(s+r)),c=(i+r-l*(s+r))/2;let u=o[0],f=o[1];u[0]>f[0]&&(u=o[1],f=o[0]);const d=Math.atan((f[1]-u[1])/(f[0]-u[0]));for(let h=0;h<l;h++){const m=h*(s+r),p=m+s,y=[u[0]+m*Math.cos(d)+c*Math.cos(d),u[1]+m*Math.sin(d)+c*Math.sin(d)],v=[u[0]+p*Math.cos(d)+c*Math.cos(d),u[1]+p*Math.sin(d)+c*Math.sin(d)];a.push(...this.helper.doubleLineOps(y[0],y[1],v[0],v[1],t))}}),a}}class Fo{constructor(e){this.helper=e}fillPolygons(e,t){const s=t.hachureGap<0?t.strokeWidth*4:t.hachureGap,r=t.zigzagOffset<0?s:t.zigzagOffset;t=Object.assign({},t,{hachureGap:s+r});const a=st(e,t);return{type:"fillSketch",ops:this.zigzagLines(a,r,t)}}zigzagLines(e,t,s){const r=[];return e.forEach(a=>{const o=jt(a),i=Math.round(o/(2*t));let l=a[0],c=a[1];l[0]>c[0]&&(l=a[1],c=a[0]);const u=Math.atan((c[1]-l[1])/(c[0]-l[0]));for(let f=0;f<i;f++){const d=f*2*t,h=(f+1)*2*t,m=Math.sqrt(2*Math.pow(t,2)),p=[l[0]+d*Math.cos(u),l[1]+d*Math.sin(u)],y=[l[0]+h*Math.cos(u),l[1]+h*Math.sin(u)],v=[p[0]+m*Math.cos(u+Math.PI/4),p[1]+m*Math.sin(u+Math.PI/4)];r.push(...this.helper.doubleLineOps(p[0],p[1],v[0],v[1],s),...this.helper.doubleLineOps(v[0],v[1],y[0],y[1],s))}}),r}}const W={};function Ho(n,e){let t=n.fillStyle||"hachure";if(!W[t])switch(t){case"zigzag":W[t]||(W[t]=new Do(e));break;case"cross-hatch":W[t]||(W[t]=new No(e));break;case"dots":W[t]||(W[t]=new jo(e));break;case"dashed":W[t]||(W[t]=new Ro(e));break;case"zigzag-line":W[t]||(W[t]=new Fo(e));break;case"hachure":default:t="hachure",W[t]||(W[t]=new Cn(e));break}return W[t]}const Go=0,rn=1,xs=2,at={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function Vo(n){const e=new Array;for(;n!=="";)if(n.match(/^([ \t\r\n,]+)/))n=n.substr(RegExp.$1.length);else if(n.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:Go,text:RegExp.$1},n=n.substr(RegExp.$1.length);else if(n.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))e[e.length]={type:rn,text:`${parseFloat(RegExp.$1)}`},n=n.substr(RegExp.$1.length);else return[];return e[e.length]={type:xs,text:""},e}function qt(n,e){return n.type===e}function Tn(n){const e=[],t=Vo(n);let s="BOD",r=0,a=t[r];for(;!qt(a,xs);){let o=0;const i=[];if(s==="BOD")if(a.text==="M"||a.text==="m")r++,o=at[a.text],s=a.text;else return Tn("M0,0"+n);else qt(a,rn)?o=at[s]:(r++,o=at[a.text],s=a.text);if(r+o<t.length){for(let l=r;l<r+o;l++){const c=t[l];if(qt(c,rn))i[i.length]=+c.text;else throw new Error("Param not a number: "+s+","+c.text)}if(typeof at[s]=="number"){const l={key:s,data:i};e.push(l),r+=o,a=t[r],s==="M"&&(s="L"),s==="m"&&(s="l")}else throw new Error("Bad segment: "+s)}else throw new Error("Path data ended short")}return e}function Es(n){let e=0,t=0,s=0,r=0;const a=[];for(const{key:o,data:i}of n)switch(o){case"M":a.push({key:"M",data:[...i]}),[e,t]=i,[s,r]=i;break;case"m":e+=i[0],t+=i[1],a.push({key:"M",data:[e,t]}),s=e,r=t;break;case"L":a.push({key:"L",data:[...i]}),[e,t]=i;break;case"l":e+=i[0],t+=i[1],a.push({key:"L",data:[e,t]});break;case"C":a.push({key:"C",data:[...i]}),e=i[4],t=i[5];break;case"c":{const l=i.map((c,u)=>u%2?c+t:c+e);a.push({key:"C",data:l}),e=l[4],t=l[5];break}case"Q":a.push({key:"Q",data:[...i]}),e=i[2],t=i[3];break;case"q":{const l=i.map((c,u)=>u%2?c+t:c+e);a.push({key:"Q",data:l}),e=l[2],t=l[3];break}case"A":a.push({key:"A",data:[...i]}),e=i[5],t=i[6];break;case"a":e+=i[5],t+=i[6],a.push({key:"A",data:[i[0],i[1],i[2],i[3],i[4],e,t]});break;case"H":a.push({key:"H",data:[...i]}),e=i[0];break;case"h":e+=i[0],a.push({key:"H",data:[e]});break;case"V":a.push({key:"V",data:[...i]}),t=i[0];break;case"v":t+=i[0],a.push({key:"V",data:[t]});break;case"S":a.push({key:"S",data:[...i]}),e=i[2],t=i[3];break;case"s":{const l=i.map((c,u)=>u%2?c+t:c+e);a.push({key:"S",data:l}),e=l[2],t=l[3];break}case"T":a.push({key:"T",data:[...i]}),e=i[0],t=i[1];break;case"t":e+=i[0],t+=i[1],a.push({key:"T",data:[e,t]});break;case"Z":case"z":a.push({key:"Z",data:[]}),e=s,t=r;break}return a}function Is(n){const e=[];let t="",s=0,r=0,a=0,o=0,i=0,l=0;for(const{key:c,data:u}of n){switch(c){case"M":e.push({key:"M",data:[...u]}),[s,r]=u,[a,o]=u;break;case"C":e.push({key:"C",data:[...u]}),s=u[4],r=u[5],i=u[2],l=u[3];break;case"L":e.push({key:"L",data:[...u]}),[s,r]=u;break;case"H":s=u[0],e.push({key:"L",data:[s,r]});break;case"V":r=u[0],e.push({key:"L",data:[s,r]});break;case"S":{let f=0,d=0;t==="C"||t==="S"?(f=s+(s-i),d=r+(r-l)):(f=s,d=r),e.push({key:"C",data:[f,d,...u]}),i=u[0],l=u[1],s=u[2],r=u[3];break}case"T":{const[f,d]=u;let h=0,m=0;t==="Q"||t==="T"?(h=s+(s-i),m=r+(r-l)):(h=s,m=r);const p=s+2*(h-s)/3,y=r+2*(m-r)/3,v=f+2*(h-f)/3,w=d+2*(m-d)/3;e.push({key:"C",data:[p,y,v,w,f,d]}),i=h,l=m,s=f,r=d;break}case"Q":{const[f,d,h,m]=u,p=s+2*(f-s)/3,y=r+2*(d-r)/3,v=h+2*(f-h)/3,w=m+2*(d-m)/3;e.push({key:"C",data:[p,y,v,w,h,m]}),i=f,l=d,s=h,r=m;break}case"A":{const f=Math.abs(u[0]),d=Math.abs(u[1]),h=u[2],m=u[3],p=u[4],y=u[5],v=u[6];f===0||d===0?(e.push({key:"C",data:[s,r,y,v,y,v]}),s=y,r=v):(s!==y||r!==v)&&(Ps(s,r,y,v,f,d,h,m,p).forEach(function(k){e.push({key:"C",data:k})}),s=y,r=v);break}case"Z":e.push({key:"Z",data:[]}),s=a,r=o;break}t=c}return e}function zo(n){return Math.PI*n/180}function Ue(n,e,t){const s=n*Math.cos(t)-e*Math.sin(t),r=n*Math.sin(t)+e*Math.cos(t);return[s,r]}function Ps(n,e,t,s,r,a,o,i,l,c){const u=zo(o);let f=[],d=0,h=0,m=0,p=0;if(c)[d,h,m,p]=c;else{[n,e]=Ue(n,e,-u),[t,s]=Ue(t,s,-u);const T=(n-t)/2,x=(e-s)/2;let G=T*T/(r*r)+x*x/(a*a);G>1&&(G=Math.sqrt(G),r=G*r,a=G*a);const O=i===l?-1:1,R=r*r,se=a*a,Ge=R*se-R*x*x-se*T*T,Z=R*x*x+se*T*T,K=O*Math.sqrt(Math.abs(Ge/Z));m=K*r*x/a+(n+t)/2,p=K*-a*T/r+(e+s)/2,d=Math.asin(parseFloat(((e-p)/a).toFixed(9))),h=Math.asin(parseFloat(((s-p)/a).toFixed(9))),n<m&&(d=Math.PI-d),t<m&&(h=Math.PI-h),d<0&&(d=Math.PI*2+d),h<0&&(h=Math.PI*2+h),l&&d>h&&(d=d-Math.PI*2),!l&&h>d&&(h=h-Math.PI*2)}let y=h-d;if(Math.abs(y)>Math.PI*120/180){const T=h,x=t,G=s;l&&h>d?h=d+Math.PI*120/180*1:h=d+Math.PI*120/180*-1,t=m+r*Math.cos(h),s=p+a*Math.sin(h),f=Ps(t,s,x,G,r,a,o,0,l,[h,T,m,p])}y=h-d;const v=Math.cos(d),w=Math.sin(d),k=Math.cos(h),b=Math.sin(h),M=Math.tan(y/4),_=4/3*r*M,C=4/3*a*M,$=[n,e],P=[n+_*w,e-C*v],z=[t+_*b,s-C*k],H=[t,s];if(P[0]=2*$[0]-P[0],P[1]=2*$[1]-P[1],c)return[P,z,H].concat(f);{f=[P,z,H].concat(f);const T=[];for(let x=0;x<f.length;x+=3){const G=Ue(f[x][0],f[x][1],u),O=Ue(f[x+1][0],f[x+1][1],u),R=Ue(f[x+2][0],f[x+2][1],u);T.push([G[0],G[1],O[0],O[1],R[0],R[1]])}return T}}const Wo={randOffset:Uo,randOffsetWithRange:Jo,ellipse:an,doubleLineOps:Ko};function Y(n,e,t,s,r){return{type:"path",ops:le(n,e,t,s,r)}}function Xe(n,e,t){const s=(n||[]).length;if(s>2){const r=[];for(let a=0;a<s-1;a++)r.push(...le(n[a][0],n[a][1],n[a+1][0],n[a+1][1],t));return e&&r.push(...le(n[s-1][0],n[s-1][1],n[0][0],n[0][1],t)),{type:"path",ops:r}}else if(s===2)return Y(n[0][0],n[0][1],n[1][0],n[1][1],t);return{type:"path",ops:[]}}function Bo(n,e){return Xe(n,!0,e)}function Ds(n,e,t,s,r){const a=[[n,e],[n+t,e],[n+t,e+s],[n,e+s]];return Bo(a,r)}function Bn(n,e){if(n.length){const s=typeof n[0][0]=="number"?[n]:n,r=ot(s[0],1*(1+e.roughness*.2),e),a=e.disableMultiStroke?[]:ot(s[0],1.5*(1+e.roughness*.22),Jn(e));for(let o=1;o<s.length;o++){const i=s[o];if(i.length){const l=ot(i,1*(1+e.roughness*.2),e),c=e.disableMultiStroke?[]:ot(i,1.5*(1+e.roughness*.22),Jn(e));for(const u of l)u.op!=="move"&&r.push(u);for(const u of c)u.op!=="move"&&a.push(u)}}return{type:"path",ops:r.concat(a)}}return{type:"path",ops:[]}}function an(n,e,t,s,r){const a=Ns(t,s,r);return on(n,e,r,a).opset}function Ns(n,e,t){const s=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),r=Math.ceil(Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*s)),a=Math.PI*2/r;let o=Math.abs(n/2),i=Math.abs(e/2);const l=1-t.curveFitting;return o+=S(o*l,t),i+=S(i*l,t),{increment:a,rx:o,ry:i}}function on(n,e,t,s){const[r,a]=Kn(s.increment,n,e,s.rx,s.ry,1,s.increment*Mt(.1,Mt(.4,1,t),t),t);let o=Lt(r,null,t);if(!t.disableMultiStroke&&t.roughness!==0){const[i]=Kn(s.increment,n,e,s.rx,s.ry,1.5,0,t),l=Lt(i,null,t);o=o.concat(l)}return{estimatedPoints:a,opset:{type:"path",ops:o}}}function qn(n,e,t,s,r,a,o,i,l){const c=n,u=e;let f=Math.abs(t/2),d=Math.abs(s/2);f+=S(f*.01,l),d+=S(d*.01,l);let h=r,m=a;for(;h<0;)h+=Math.PI*2,m+=Math.PI*2;m-h>Math.PI*2&&(h=0,m=Math.PI*2);const p=Math.PI*2/l.curveStepCount,y=Math.min(p/2,(m-h)/2),v=Yn(y,c,u,f,d,h,m,1,l);if(!l.disableMultiStroke){const w=Yn(y,c,u,f,d,h,m,1.5,l);v.push(...w)}return o&&(i?v.push(...le(c,u,c+f*Math.cos(h),u+d*Math.sin(h),l),...le(c,u,c+f*Math.cos(m),u+d*Math.sin(m),l)):v.push({op:"lineTo",data:[c,u]},{op:"lineTo",data:[c+f*Math.cos(h),u+d*Math.sin(h)]})),{type:"path",ops:v}}function Un(n,e){const t=Is(Es(Tn(n))),s=[];let r=[0,0],a=[0,0];for(const{key:o,data:i}of t)switch(o){case"M":{a=[i[0],i[1]],r=[i[0],i[1]];break}case"L":s.push(...le(a[0],a[1],i[0],i[1],e)),a=[i[0],i[1]];break;case"C":{const[l,c,u,f,d,h]=i;s.push(...Yo(l,c,u,f,d,h,a,e)),a=[d,h];break}case"Z":s.push(...le(a[0],a[1],r[0],r[1],e)),a=[r[0],r[1]];break}return{type:"path",ops:s}}function Ut(n,e){const t=[];for(const s of n)if(s.length){const r=e.maxRandomnessOffset||0,a=s.length;if(a>2){t.push({op:"move",data:[s[0][0]+S(r,e),s[0][1]+S(r,e)]});for(let o=1;o<a;o++)t.push({op:"lineTo",data:[s[o][0]+S(r,e),s[o][1]+S(r,e)]})}}return{type:"fillPath",ops:t}}function Ie(n,e){return Ho(e,Wo).fillPolygons(n,e)}function qo(n,e,t,s,r,a,o){const i=n,l=e;let c=Math.abs(t/2),u=Math.abs(s/2);c+=S(c*.01,o),u+=S(u*.01,o);let f=r,d=a;for(;f<0;)f+=Math.PI*2,d+=Math.PI*2;d-f>Math.PI*2&&(f=0,d=Math.PI*2);const h=(d-f)/o.curveStepCount,m=[];for(let p=f;p<=d;p=p+h)m.push([i+c*Math.cos(p),l+u*Math.sin(p)]);return m.push([i+c*Math.cos(d),l+u*Math.sin(d)]),m.push([i,l]),Ie([m],o)}function Uo(n,e){return S(n,e)}function Jo(n,e,t){return Mt(n,e,t)}function Ko(n,e,t,s,r){return le(n,e,t,s,r,!0)}function Jn(n){const e=Object.assign({},n);return e.randomizer=void 0,n.seed&&(e.seed=n.seed+1),e}function js(n){return n.randomizer||(n.randomizer=new $o(n.seed||0)),n.randomizer.next()}function Mt(n,e,t,s=1){return t.roughness*s*(js(t)*(e-n)+n)}function S(n,e,t=1){return Mt(-n,n,e,t)}function le(n,e,t,s,r,a=!1){const o=a?r.disableMultiStrokeFill:r.disableMultiStroke,i=ln(n,e,t,s,r,!0,!1);if(o)return i;const l=ln(n,e,t,s,r,!0,!0);return i.concat(l)}function ln(n,e,t,s,r,a,o){const i=Math.pow(n-t,2)+Math.pow(e-s,2),l=Math.sqrt(i);let c=1;l<200?c=1:l>500?c=.4:c=-.0016668*l+1.233334;let u=r.maxRandomnessOffset||0;u*u*100>i&&(u=l/10);const f=u/2,d=.2+js(r)*.2;let h=r.bowing*r.maxRandomnessOffset*(s-e)/200,m=r.bowing*r.maxRandomnessOffset*(n-t)/200;h=S(h,r,c),m=S(m,r,c);const p=[],y=()=>S(f,r,c),v=()=>S(u,r,c),w=r.preserveVertices;return o?p.push({op:"move",data:[n+(w?0:y()),e+(w?0:y())]}):p.push({op:"move",data:[n+(w?0:S(u,r,c)),e+(w?0:S(u,r,c))]}),o?p.push({op:"bcurveTo",data:[h+n+(t-n)*d+y(),m+e+(s-e)*d+y(),h+n+2*(t-n)*d+y(),m+e+2*(s-e)*d+y(),t+(w?0:y()),s+(w?0:y())]}):p.push({op:"bcurveTo",data:[h+n+(t-n)*d+v(),m+e+(s-e)*d+v(),h+n+2*(t-n)*d+v(),m+e+2*(s-e)*d+v(),t+(w?0:v()),s+(w?0:v())]}),p}function ot(n,e,t){if(!n.length)return[];const s=[];s.push([n[0][0]+S(e,t),n[0][1]+S(e,t)]),s.push([n[0][0]+S(e,t),n[0][1]+S(e,t)]);for(let r=1;r<n.length;r++)s.push([n[r][0]+S(e,t),n[r][1]+S(e,t)]),r===n.length-1&&s.push([n[r][0]+S(e,t),n[r][1]+S(e,t)]);return Lt(s,null,t)}function Lt(n,e,t){const s=n.length,r=[];if(s>3){const a=[],o=1-t.curveTightness;r.push({op:"move",data:[n[1][0],n[1][1]]});for(let i=1;i+2<s;i++){const l=n[i];a[0]=[l[0],l[1]],a[1]=[l[0]+(o*n[i+1][0]-o*n[i-1][0])/6,l[1]+(o*n[i+1][1]-o*n[i-1][1])/6],a[2]=[n[i+1][0]+(o*n[i][0]-o*n[i+2][0])/6,n[i+1][1]+(o*n[i][1]-o*n[i+2][1])/6],a[3]=[n[i+1][0],n[i+1][1]],r.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}}else s===3?(r.push({op:"move",data:[n[1][0],n[1][1]]}),r.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):s===2&&r.push(...ln(n[0][0],n[0][1],n[1][0],n[1][1],t,!0,!0));return r}function Kn(n,e,t,s,r,a,o,i){const l=i.roughness===0,c=[],u=[];if(l){n=n/4,u.push([e+s*Math.cos(-n),t+r*Math.sin(-n)]);for(let f=0;f<=Math.PI*2;f=f+n){const d=[e+s*Math.cos(f),t+r*Math.sin(f)];c.push(d),u.push(d)}u.push([e+s*Math.cos(0),t+r*Math.sin(0)]),u.push([e+s*Math.cos(n),t+r*Math.sin(n)])}else{const f=S(.5,i)-Math.PI/2;u.push([S(a,i)+e+.9*s*Math.cos(f-n),S(a,i)+t+.9*r*Math.sin(f-n)]);const d=Math.PI*2+f-.01;for(let h=f;h<d;h=h+n){const m=[S(a,i)+e+s*Math.cos(h),S(a,i)+t+r*Math.sin(h)];c.push(m),u.push(m)}u.push([S(a,i)+e+s*Math.cos(f+Math.PI*2+o*.5),S(a,i)+t+r*Math.sin(f+Math.PI*2+o*.5)]),u.push([S(a,i)+e+.98*s*Math.cos(f+o),S(a,i)+t+.98*r*Math.sin(f+o)]),u.push([S(a,i)+e+.9*s*Math.cos(f+o*.5),S(a,i)+t+.9*r*Math.sin(f+o*.5)])}return[u,c]}function Yn(n,e,t,s,r,a,o,i,l){const c=a+S(.1,l),u=[];u.push([S(i,l)+e+.9*s*Math.cos(c-n),S(i,l)+t+.9*r*Math.sin(c-n)]);for(let f=c;f<=o;f=f+n)u.push([S(i,l)+e+s*Math.cos(f),S(i,l)+t+r*Math.sin(f)]);return u.push([e+s*Math.cos(o),t+r*Math.sin(o)]),u.push([e+s*Math.cos(o),t+r*Math.sin(o)]),Lt(u,null,l)}function Yo(n,e,t,s,r,a,o,i){const l=[],c=[i.maxRandomnessOffset||1,(i.maxRandomnessOffset||1)+.3];let u=[0,0];const f=i.disableMultiStroke?1:2,d=i.preserveVertices;for(let h=0;h<f;h++)h===0?l.push({op:"move",data:[o[0],o[1]]}):l.push({op:"move",data:[o[0]+(d?0:S(c[0],i)),o[1]+(d?0:S(c[0],i))]}),u=d?[r,a]:[r+S(c[h],i),a+S(c[h],i)],l.push({op:"bcurveTo",data:[n+S(c[h],i),e+S(c[h],i),t+S(c[h],i),s+S(c[h],i),u[0],u[1]]});return l}function Je(n){return[...n]}function Qn(n,e=0){const t=n.length;if(t<3)throw new Error("A curve must have at least three points.");const s=[];if(t===3)s.push(Je(n[0]),Je(n[1]),Je(n[2]),Je(n[2]));else{const r=[];r.push(n[0],n[0]);for(let i=1;i<n.length;i++)r.push(n[i]),i===n.length-1&&r.push(n[i]);const a=[],o=1-e;s.push(Je(r[0]));for(let i=1;i+2<r.length;i++){const l=r[i];a[0]=[l[0],l[1]],a[1]=[l[0]+(o*r[i+1][0]-o*r[i-1][0])/6,l[1]+(o*r[i+1][1]-o*r[i-1][1])/6],a[2]=[r[i+1][0]+(o*r[i][0]-o*r[i+2][0])/6,r[i+1][1]+(o*r[i][1]-o*r[i+2][1])/6],a[3]=[r[i+1][0],r[i+1][1]],s.push(a[1],a[2],a[3])}}return s}function Qo(n,e){return Math.sqrt(yt(n,e))}function yt(n,e){return Math.pow(n[0]-e[0],2)+Math.pow(n[1]-e[1],2)}function Xo(n,e,t){const s=yt(e,t);if(s===0)return yt(n,e);let r=((n[0]-e[0])*(t[0]-e[0])+(n[1]-e[1])*(t[1]-e[1]))/s;return r=Math.max(0,Math.min(1,r)),yt(n,Ae(e,t,r))}function Ae(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t]}function Zo(n,e){const t=n[e+0],s=n[e+1],r=n[e+2],a=n[e+3];let o=3*s[0]-2*t[0]-a[0];o*=o;let i=3*s[1]-2*t[1]-a[1];i*=i;let l=3*r[0]-2*a[0]-t[0];l*=l;let c=3*r[1]-2*a[1]-t[1];return c*=c,o<l&&(o=l),i<c&&(i=c),o+i}function cn(n,e,t,s){const r=s||[];if(Zo(n,e)<t){const a=n[e+0];r.length?Qo(r[r.length-1],a)>1&&r.push(a):r.push(a),r.push(n[e+3])}else{const o=n[e+0],i=n[e+1],l=n[e+2],c=n[e+3],u=Ae(o,i,.5),f=Ae(i,l,.5),d=Ae(l,c,.5),h=Ae(u,f,.5),m=Ae(f,d,.5),p=Ae(h,m,.5);cn([o,u,h,p],0,t,r),cn([p,m,d,c],0,t,r)}return r}function ei(n,e){return At(n,0,n.length,e)}function At(n,e,t,s,r){const a=r||[],o=n[e],i=n[t-1];let l=0,c=1;for(let u=e+1;u<t-1;++u){const f=Xo(n[u],o,i);f>l&&(l=f,c=u)}return Math.sqrt(l)>s?(At(n,e,c+1,s,a),At(n,c,t,s,a)):(a.length||a.push(o),a.push(i)),a}function un(n,e=.15,t){const s=[],r=(n.length-1)/3;for(let a=0;a<r;a++){const o=a*3;cn(n,o,e,s)}return t&&t>0?At(s,0,s.length,t):s}function ti(n,e,t){const s=Tn(n),r=Is(Es(s)),a=[];let o=[],i=[0,0],l=[];const c=()=>{l.length>=4&&o.push(...un(l,e)),l=[]},u=()=>{c(),o.length&&(a.push(o),o=[])};for(const{key:d,data:h}of r)switch(d){case"M":u(),i=[h[0],h[1]],o.push(i);break;case"L":c(),o.push([h[0],h[1]]);break;case"C":if(!l.length){const m=o.length?o[o.length-1]:i;l.push([m[0],m[1]])}l.push([h[0],h[1]]),l.push([h[2],h[3]]),l.push([h[4],h[5]]);break;case"Z":c(),o.push([i[0],i[1]]);break}if(u(),!t)return a;const f=[];for(const d of a){const h=ei(d,t);h.length&&f.push(h)}return f}const U="none";class ni{constructor(e){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=e||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return $s()}_o(e){return e?Object.assign({},this.defaultOptions,e):this.defaultOptions}_d(e,t,s){return{shape:e,sets:t||[],options:s||this.defaultOptions}}line(e,t,s,r,a){const o=this._o(a);return this._d("line",[Y(e,t,s,r,o)],o)}rectangle(e,t,s,r,a){const o=this._o(a),i=[],l=Ds(e,t,s,r,o);if(o.fill){const c=[[e,t],[e+s,t],[e+s,t+r],[e,t+r]];o.fillStyle==="solid"?i.push(Ut([c],o)):i.push(Ie([c],o))}return o.stroke!==U&&i.push(l),this._d("rectangle",i,o)}ellipse(e,t,s,r,a){const o=this._o(a),i=[],l=Ns(s,r,o),c=on(e,t,o,l);if(o.fill)if(o.fillStyle==="solid"){const u=on(e,t,o,l).opset;u.type="fillPath",i.push(u)}else i.push(Ie([c.estimatedPoints],o));return o.stroke!==U&&i.push(c.opset),this._d("ellipse",i,o)}circle(e,t,s,r){const a=this.ellipse(e,t,s,s,r);return a.shape="circle",a}linearPath(e,t){const s=this._o(t);return this._d("linearPath",[Xe(e,!1,s)],s)}arc(e,t,s,r,a,o,i=!1,l){const c=this._o(l),u=[],f=qn(e,t,s,r,a,o,i,!0,c);if(i&&c.fill)if(c.fillStyle==="solid"){const d=Object.assign({},c);d.disableMultiStroke=!0;const h=qn(e,t,s,r,a,o,!0,!1,d);h.type="fillPath",u.push(h)}else u.push(qo(e,t,s,r,a,o,c));return c.stroke!==U&&u.push(f),this._d("arc",u,c)}curve(e,t){const s=this._o(t),r=[],a=Bn(e,s);if(s.fill&&s.fill!==U)if(s.fillStyle==="solid"){const o=Bn(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));r.push({type:"fillPath",ops:this._mergedShape(o.ops)})}else{const o=[],i=e;if(i.length){const c=typeof i[0][0]=="number"?[i]:i;for(const u of c)u.length<3?o.push(...u):u.length===3?o.push(...un(Qn([u[0],u[0],u[1],u[2]]),10,(1+s.roughness)/2)):o.push(...un(Qn(u),10,(1+s.roughness)/2))}o.length&&r.push(Ie([o],s))}return s.stroke!==U&&r.push(a),this._d("curve",r,s)}polygon(e,t){const s=this._o(t),r=[],a=Xe(e,!0,s);return s.fill&&(s.fillStyle==="solid"?r.push(Ut([e],s)):r.push(Ie([e],s))),s.stroke!==U&&r.push(a),this._d("polygon",r,s)}path(e,t){const s=this._o(t),r=[];if(!e)return this._d("path",r,s);e=(e||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const a=s.fill&&s.fill!=="transparent"&&s.fill!==U,o=s.stroke!==U,i=!!(s.simplification&&s.simplification<1),l=i?4-4*(s.simplification||1):(1+s.roughness)/2,c=ti(e,1,l),u=Un(e,s);if(a)if(s.fillStyle==="solid")if(c.length===1){const f=Un(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));r.push({type:"fillPath",ops:this._mergedShape(f.ops)})}else r.push(Ut(c,s));else r.push(Ie(c,s));return o&&(i?c.forEach(f=>{r.push(Xe(f,!1,s))}):r.push(u)),this._d("path",r,s)}opsToPath(e,t){let s="";for(const r of e.ops){const a=typeof t=="number"&&t>=0?r.data.map(o=>+o.toFixed(t)):r.data;switch(r.op){case"move":s+=`M${a[0]} ${a[1]} `;break;case"bcurveTo":s+=`C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;break;case"lineTo":s+=`L${a[0]} ${a[1]} `;break}}return s.trim()}toPaths(e){const t=e.sets||[],s=e.options||this.defaultOptions,r=[];for(const a of t){let o=null;switch(a.type){case"path":o={d:this.opsToPath(a),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:U};break;case"fillPath":o={d:this.opsToPath(a),stroke:U,strokeWidth:0,fill:s.fill||U};break;case"fillSketch":o=this.fillSketch(a,s);break}o&&r.push(o)}return r}fillSketch(e,t){let s=t.fillWeight;return s<0&&(s=t.strokeWidth/2),{d:this.opsToPath(e),stroke:t.fill||U,strokeWidth:s,fill:U}}_mergedShape(e){return e.filter((t,s)=>s===0?!0:t.op!=="move")}}const Rs="http://www.w3.org/2000/svg",si=800;let Jt=null;function ri(){return Jt||(Jt=new ni().defaultOptions),Jt}function Kt(n,e,t){return{...ri(),maxRandomnessOffset:2,roughness:n==="highlight"?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,disableMultiStroke:n!=="double",disableMultiStrokeFill:!1,seed:e,...t}}function ai(n){const e=n.padding;if(e||e===0){if(typeof e=="number")return[e,e,e,e];if(Array.isArray(e)){const t=e;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}function oi(n,e,t,s,r,a){const o=[];let i=t.strokeWidth||2;const l=ai(t),c=t.animate===void 0?!0:!!t.animate,u=t.iterations||2,f=t.rtl?1:0,d=Kt("single",a,t);switch(t.type){case"underline":{const h=e.y+e.h+l[2];for(let m=f;m<u+f;m++)m%2?o.push(Y(e.x+e.w,h,e.x,h,d)):o.push(Y(e.x,h,e.x+e.w,h,d));break}case"strike-through":{const h=e.y+e.h/2;for(let m=f;m<u+f;m++)m%2?o.push(Y(e.x+e.w,h,e.x,h,d)):o.push(Y(e.x,h,e.x+e.w,h,d));break}case"box":{const h=e.x-l[3],m=e.y-l[0],p=e.w+(l[1]+l[3]),y=e.h+(l[0]+l[2]);for(let v=0;v<u;v++)o.push(Ds(h,m,p,y,d));break}case"bracket":{const h=Array.isArray(t.brackets)?t.brackets:t.brackets?[t.brackets]:["right"],m=e.x-l[3]*2,p=e.x+e.w+l[1]*2,y=e.y-l[0]*2,v=e.y+e.h+l[2]*2;for(const w of h){let k;switch(w){case"bottom":k=[[m,e.y+e.h],[m,v],[p,v],[p,e.y+e.h]];break;case"top":k=[[m,e.y],[m,y],[p,y],[p,e.y]];break;case"left":k=[[e.x,y],[m,y],[m,v],[e.x,v]];break;case"right":k=[[e.x+e.w,y],[p,y],[p,v],[e.x+e.w,v]];break}k&&o.push(Xe(k,!1,d))}break}case"crossed-off":{const h=e.x,m=e.y,p=h+e.w,y=m+e.h;for(let v=f;v<u+f;v++)v%2?o.push(Y(p,y,h,m,d)):o.push(Y(h,m,p,y,d));for(let v=f;v<u+f;v++)v%2?o.push(Y(h,y,p,m,d)):o.push(Y(p,m,h,y,d));break}case"circle":{const h=Kt("double",a,t),m=e.w+(l[1]+l[3]),p=e.h+(l[0]+l[2]),y=e.x-l[3]+m/2,v=e.y-l[0]+p/2,w=Math.floor(u/2),k=u-w*2;for(let b=0;b<w;b++)o.push(an(y,v,m,p,h));for(let b=0;b<k;b++)o.push(an(y,v,m,p,d));break}case"highlight":{const h=Kt("highlight",a,t);i=e.h*.95;const m=e.y+e.h/2;for(let p=f;p<u+f;p++)p%2?o.push(Y(e.x+e.w,m,e.x,m,h)):o.push(Y(e.x,m,e.x+e.w,m,h));break}}if(o.length){const h=ii(o),m=[],p=[];let y=0;const v=(w,k,b)=>w.setAttribute(k,b);for(const w of h){const k=document.createElementNS(Rs,"path");if(v(k,"d",w),v(k,"fill","none"),v(k,"stroke",t.color||"currentColor"),v(k,"stroke-width",`${i}`),t.opacity!==void 0&&v(k,"style",`opacity:${t.opacity}`),c){const b=k.getTotalLength();m.push(b),y+=b}n.appendChild(k),p.push(k)}if(c){let w=0;for(let k=0;k<p.length;k++){const b=p[k],M=m[k],_=y?r*(M/y):0,C=s+w,$=b.style;$.strokeDashoffset=`${M}`,$.strokeDasharray=`${M}`,$.animation=`rough-notation-dash ${_}ms ease-out ${C}ms forwards`,w+=_}return Xn(r+s)}}return Xn(0)}function Xn(n){return new Promise(e=>setTimeout(e,n))}function ii(n){const e=[];for(const t of n){let s="";for(const r of t.ops){const a=r.data;switch(r.op){case"move":s.trim()&&e.push(s.trim()),s=`M${a[0]} ${a[1]} `;break;case"bcurveTo":s+=`C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;break;case"lineTo":s+=`L${a[0]} ${a[1]} `;break}}s.trim()&&e.push(s.trim())}return e}function li(){if(!window.__rno_kf_s){const n=window.__rno_kf_s=document.createElement("style");n.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(n)}}var ci=Object.defineProperty,ui=(n,e,t)=>e in n?ci(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ee=(n,e,t)=>(ui(n,typeof e!="symbol"?e+"":e,t),t);class fi{constructor(e,t){ee(this,"_state","unattached"),ee(this,"_config"),ee(this,"_resizing",!1),ee(this,"_ro"),ee(this,"_seed",$s()),ee(this,"_e"),ee(this,"_svg"),ee(this,"_lastSizes",[]),ee(this,"_animationDelay",0),ee(this,"_resizeListener",()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,this._state==="showing"&&this.haveRectsChanged()&&this.show()},400))}),ee(this,"pendingRefresh"),this._e=e,this._config=JSON.parse(JSON.stringify(t)),this.attach()}getConfig(e){return this._config[e]}setConfig(e,t){this._config[e]!==t&&(this._config[e]=t,this.refresh())}get animate(){return this._config.animate}set animate(e){this._config.animate=e}get animationDuration(){return this._config.animationDuration}set animationDuration(e){this._config.animationDuration=e}get iterations(){return this._config.iterations}set iterations(e){this._config.iterations=e}get color(){return this._config.color}set color(e){this._config.color!==e&&(this._config.color=e,this.refresh())}get class(){return this._config.class}set class(e){this._config.class!==e&&(this._config.class=e,this._svg&&this._svg.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" ")))}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(e){this._config.strokeWidth!==e&&(this._config.strokeWidth=e,this.refresh())}get padding(){return this._config.padding}set padding(e){this._config.padding!==e&&(this._config.padding=e,this.refresh())}attach(){if(this._state==="unattached"&&this._e.parentElement){li();const e=this._svg=document.createElementNS(Rs,"svg");e.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" "));const t=e.style;t.position="absolute",t.top="0",t.left="0",t.overflow="visible",t.pointerEvents="none",t.width="100px",t.height="100px";const s=this._config.type==="highlight";if(this._e.insertAdjacentElement(s?"beforebegin":"afterend",e),this._state="not-showing",s){const r=window.getComputedStyle(this._e).position;(!r||r==="static")&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(e=>{for(const t of e)t.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const e=this.rects();if(e.length===this._lastSizes.length){for(let t=0;t<e.length;t++)if(!this.isSameRect(e[t],this._lastSizes[t]))return!0}else return!0}return!1}isSameRect(e,t){const s=(r,a)=>Math.round(r)===Math.round(a);return s(e.x,t.x)&&s(e.y,t.y)&&s(e.w,t.w)&&s(e.h,t.h)}isShowing(){return this._state!=="not-showing"}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}async show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&await this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&await this.render(this._svg,!1);break}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}async render(e,t){let s=this._config;t&&(s=JSON.parse(JSON.stringify(this._config)),s.animate=!1);const r=this.rects();let a=0;r.forEach(c=>a+=c.w);const o=s.animationDuration||si;let i=0;const l=[];for(let c=0;c<r.length;c++){const u=r[c],f=o*(u.w/a);l.push(oi(e,r[c],s,i+this._animationDelay+(this._config.delay||0),f,this._seed)),i+=f}return this._lastSizes=r,this._state="showing",await Promise.all(l)}rects(){const e=[];if(this._svg)if(this._config.multiline){const t=this._e.getClientRects();for(let s=0;s<t.length;s++)e.push(this.svgRect(this._svg,t[s]))}else e.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return e}svgRect(e,t){const s=e.getBoundingClientRect(),r=t;return{x:(r.x||r.left)-(s.x||s.left),y:(r.y||r.top)-(s.y||s.top),w:r.width,h:r.height}}}function di(n,e){return new fi(n,e)}function B(n,e){return n.class=[n.class,e].filter(Boolean).join(" "),n}const Zn={box:n=>Object.assign(n,{type:"box"}),circle:n=>Object.assign(n,{type:"circle"}),underline:n=>Object.assign(n,{type:"underline"}),highlight:n=>Object.assign(n,{type:"highlight"}),"strike-through":n=>Object.assign(n,{type:"strike-through"}),"crossed-off":n=>Object.assign(n,{type:"crossed-off"}),bracket:n=>Object.assign(n,{type:"bracket"}),strike:n=>Object.assign(n,{type:"strike-through"}),cross:n=>Object.assign(n,{type:"crossed-off"}),crossed:n=>Object.assign(n,{type:"crossed-off"}),linethrough:n=>Object.assign(n,{type:"strike-through"}),"line-through":n=>Object.assign(n,{type:"strike-through"}),black:n=>B(n,"text-black"),blue:n=>B(n,"text-blue"),cyan:n=>B(n,"text-cyan"),gray:n=>B(n,"text-gray"),green:n=>B(n,"text-green"),indigo:n=>B(n,"text-indigo"),lime:n=>B(n,"text-lime"),orange:n=>B(n,"text-orange"),pink:n=>B(n,"text-pink"),purple:n=>B(n,"text-purple"),red:n=>B(n,"text-red"),teal:n=>B(n,"text-teal"),white:n=>B(n,"text-white"),yellow:n=>B(n,"text-yellow")},hi=[[/^delay-?(\d+)?$/,(n,e,t)=>{const s=(n[1]?Number.parseInt(n[1]):t)||300;return e.delay=s,e}],[/^(?:op|opacity)-?(\d+)?$/,(n,e,t)=>{const s=(n[1]?Number.parseInt(n[1]):t)||100;return e.opacity=s/100,e}]];function pi(){return{install(n){n.directive("mark",{name:"v-mark",mounted:(e,t)=>{const s=g(()=>{const o=typeof t.value=="object"&&!Array.isArray(t.value)?{...t.value}:{at:t.value};let i={at:o.at};const l=Object.entries(t.modifiers).filter(([u,f])=>{if(Zn[u])return i=Zn[u](i,f),!1;for(const[d,h]of hi){const m=u.match(d);if(m)return i=h(m,i,f),!1}return!0});l.length&&console.warn("[Slidev] Invalid modifiers for v-mark:",l);const c={...i,...o};return c.type||(c.type="underline"),c}),r=di(e,s.value),a=gt(e,t,s.value.at);if(!a){r.show();return}e.watchStopHandle=Re(()=>{let o;s.value.class&&(r.class=s.value.class),s.value.color&&(r.color=s.value.color);const i=s.value.at;i===!0?o=!0:i===!1?o=!1:o=a.isActive.value,o!=null&&(o?r.show():r.hide())})},unmounted:e=>{var t;(t=e.watchStopHandle)==null||t.call(e)}})}}}const qi=A(!1),Ui=A(!1),Ji=A(!1),mi=A(!1),Ki=A(!0),Yi=Zs({xs:460,...rr}),Ct=er(),Qi=tr(),Xi=g(()=>Ct.height.value-Ct.width.value/as.value>120),Zi=nr($t?document.body:null),fn=sr(),el=g(()=>{var n,e;return["INPUT","TEXTAREA"].includes(((n=fn.value)==null?void 0:n.tagName)||"")||((e=fn.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),tl=g(()=>{var n;return["BUTTON","A"].includes(((n=fn.value)==null?void 0:n.tagName)||"")});ne("slidev-camera","default",{listenToStorageChanges:!1});ne("slidev-mic","default",{listenToStorageChanges:!1});const gi=ne("slidev-scale",0),nl=ne("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),yi=ne("slidev-show-editor",!1,{listenToStorageChanges:!1}),vi=ne("slidev-editor-vertical",!1,{listenToStorageChanges:!1}),wi=ne("slidev-editor-width",$t?window.innerWidth*.4:318,{listenToStorageChanges:!1}),ki=ne("slidev-editor-height",$t?window.innerHeight*.4:300,{listenToStorageChanges:!1}),it=hn(null),Tt=ne("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),lt=ne("slidev-presenter-layout",1,{listenToStorageChanges:!1});function sl(){lt.value=lt.value+1,lt.value>2&&(lt.value=1)}function rl(){Tt.value=Math.min(2,Tt.value+.1)}function al(){Tt.value=Math.max(.5,Tt.value-.1)}const ol=rs(mi);function bi(n=es(ps,A())){const e=ar(n),t=Q([yi,vi,wi,ki,gi,Ct.width,Ct.height],()=>{setTimeout(e.update,300)},{flush:"post",immediate:!0});return{...e,stop:t}}function Si(n){return()=>{}}function _i(n,e,t,s){var K;function r(D){return n?Fe(n,D):lr(D)}const a=r(gn),o=r(wa)??{},i=r(mn),l=g(()=>Si(i.value)),c=r(ya)??A(1),u=r(ka)??A(1),{left:f,top:d,stop:h}=bi(r(ps)??A()),m=["slide","presenter"].includes(a.value);let p=n?"directive":"prop",y=An(),v;if(Array.isArray(e)?v=e:typeof e=="string"&&e.includes(",")?v=e.split(",").map(Number):e!=null&&(p="frontmatter",y=`${e}`,e=(K=o==null?void 0:o.dragPos)==null?void 0:K[y],v=e==null?void 0:e.split(",").map(Number)),p!=="frontmatter"&&!t)throw new Error("[Slidev] Can not identify the source position of the v-drag element, please provide an explicit `id` prop.");const w=[h],k=e!=null&&!Number.isFinite(v==null?void 0:v[3]);v??(v=[Number.NaN,Number.NaN,0]);const b=A(v[2]),M=A(v[0]+v[2]/2),_=A(v[4]??0),C=g(()=>_.value*Math.PI/180),$=g(()=>Math.sin(C.value)),P=g(()=>Math.cos(C.value)),z=A(),H=A({left:0,top:0,width:0,height:0}),T=A(0);function x(){if(!z.value)return;const D=z.value.getBoundingClientRect();H.value={left:D.left/u.value,top:D.top/u.value,width:D.width/u.value,height:D.height/u.value},T.value=(H.value.width+H.value.height)/c.value/(Math.abs($.value)+Math.abs(P.value))-b.value}w.push(Q(b,x,{flush:"post"}));const G=A(v[3]??0),O=k?g({get:()=>(k?T.value:G.value)||0,set:D=>!k&&(G.value=D)}):G,R=k?A(v[1]):A(v[1]+v[3]/2),se=k?g({get:()=>R.value+O.value/2,set:D=>R.value=D-O.value/2}):R,Ge=g(()=>Number.isFinite(M.value)?{position:"absolute",zIndex:100,left:`${M.value-b.value/2}px`,top:`${se.value-O.value/2}px`,width:`${b.value}px`,height:k?void 0:`${O.value}px`,transformOrigin:"center center",transform:`rotate(${_.value}deg)`}:{position:"absolute",zIndex:100});w.push(Q([M,se,b,O,_],([D,ce,Ve,ze,On])=>{let xe=[D-Ve/2,ce-ze/2,Ve].map(Math.round).join();k?xe+=p==="directive"?",NaN":",_":xe+=`,${Math.round(ze)}`,Math.round(On)!==0&&(xe+=`,${Math.round(On)}`),p==="directive"&&(xe=`[${xe}]`),l.value(y,xe,p,t)}));const Z={dragId:y,dataSource:p,markdownSource:t,isArrow:s,zoom:u,autoHeight:k,x0:M,y0:se,width:b,height:O,rotate:_,container:z,containerStyle:Ge,watchStopHandles:w,dragging:g(()=>it.value===Z),mounted(){m&&(x(),e||setTimeout(()=>{x(),M.value=(H.value.left+H.value.width/2-f.value)/c.value,se.value=(H.value.top-d.value)/c.value,b.value=H.value.width/c.value,O.value=H.value.height/c.value},100))},unmounted(){m&&Z.stopDragging()},startDragging(){x(),it.value=Z},stopDragging(){it.value===Z&&(it.value=null)}};return w.push(or(z,D=>{const ce=document.querySelector("#drag-control-container");ce&&D.target&&ce.contains(D.target)||Z.stopDragging()}),Q(ir(),D=>{D||Z.stopDragging()})),Z}function Mi(){return{install(n){n.directive("drag",{name:"v-drag",created(e,t,s){var a;const r=_i(t,t.value,(a=s.props)==null?void 0:a.markdownSource);s.props&&(s.props={...s.props},delete s.props.markdownSource),r.container.value=e,e.draggingState=r,e.dataset.dragId=r.dragId,r.watchStopHandles.push(Q(r.containerStyle,o=>{for(const[i,l]of Object.entries(o))l&&(e.style[i]=l)},{immediate:!0})),e.addEventListener("dblclick",r.startDragging)},mounted(e){e.draggingState.mounted()},unmounted(e){const t=e.draggingState;t.unmounted(),e.removeEventListener("dblclick",t.startDragging),t.watchStopHandles.forEach(s=>s())}})}}}function Li(){return{install(n){const e=cr();n.directive("motion",{name:"v-motion",mounted(t,s,r,a){var k,b,M;const o=Fe(s,xt),i=Fe(s,mn),l=Fe(s,gn),{currentPage:c,clicks:u,isPrintMode:f}=nn(),d=r.props={...r.props},h={...d.initial,...(k=d.variants)==null?void 0:k["slidev-initial"]},m={...d.enter,...(b=d.variants)==null?void 0:b["slidev-enter"]},p={...d.leave,...(M=d.variants)==null?void 0:M["slidev-leave"]};delete d.initial,delete d.enter,delete d.leave;const y=`${An()}-`,v=[];for(const _ of Object.keys(d))if(_.startsWith("click-")){const C=_.slice(6),$=C.includes("-")?C.split("-").map(Number):+C,P=y+C;v.push({id:P,at:$,variant:{...d[_]},info:o==null?void 0:o.value.calculate($)}),delete d[_]}v.sort((_,C)=>(Array.isArray(_.at)?_.at[0]:_.at)-(Array.isArray(C.at)?C.at[0]:C.at)),e.created(t,s,r,a),e.mounted(t,s,r,a);const w=t.motionInstance;w.clickIds=v.map(_=>_.id),w.set(h),w.watchStopHandle=Q([i,c,u].filter(Boolean),()=>{var C;const _=((C=Os.get(t))==null?void 0:C.visibilityState.value)??"shown";if(!(o!=null&&o.value)||!["slide","presenter"].includes((l==null?void 0:l.value)??"")){const $={...h,...m};for(const{variant:P}of v)Object.assign($,P);w.set($)}else if(f.value||(i==null?void 0:i.value)===c.value)if(_==="shown"){const $={...h,...m};for(const{variant:P,info:z}of v)(!z||z.isActive.value)&&Object.assign($,P);f.value?w.set($):w.apply($)}else w.apply(_==="before"?h:p);else w.apply(((i==null?void 0:i.value)??-1)>c.value?h:p)},{immediate:!0})},unmounted(t){t.motionInstance.watchStopHandle()}})}}}const Ai=[];function Ci(){const n=[];{let e=function(t){if(!I.remote||I.remote===t.query.password)return!0;if(I.remote&&t.query.password===void 0){const s=prompt("Enter password");if(I.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};n.push({name:"entry",path:"/entry",component:()=>E(()=>import("./slidev/entry-DzSuJB48.js"),__vite__mapDeps([26,7,1,3,4,27]))},{name:"overview",path:"/overview",component:()=>E(()=>import("./slidev/overview-Bi_T26WI.js"),__vite__mapDeps([28,7,1,29,30,31,32,33,34,35,3,4]))},{name:"notes",path:"/notes",component:()=>E(()=>import("./slidev/notes-CD0BiY0s.js"),__vite__mapDeps([36,7,1,32,33,31,3,4])),beforeEnter:e},{name:"presenter",path:"/presenter/:no",component:()=>E(()=>import("./slidev/presenter-DBl7Bmty.js"),__vite__mapDeps([37,7,1,38,29,30,31,2,3,4,39,32,33,40,41,34,35,42])),beforeEnter:e},{path:"/presenter",redirect:{path:"/presenter/1"}})}return n.push({name:"play",path:"/:no",component:()=>E(()=>import("./slidev/play-BWD86o3k.js"),__vite__mapDeps([43,1,38,29,30,7,31,2,3,4,39,44]))},{path:"",redirect:{path:"/1"}}),Ai.reduce((e,t)=>t(e),n)}const Ti=[];async function Oi(n){function e(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}e(),window.addEventListener("resize",e);const t=ur({history:fr("/genaiscript/slides/vs-aua/"),routes:Ci()});n.use(t),n.use(oa()),n.use(Oo()),n.use(pi()),n.use(Mi()),n.use(Li()),n.use(hr,{container:"#twoslash-container"});const s={app:n,router:t};vt(()=>{t.afterEach(async()=>{await vt(),en.value+=1})});for(const r of Ti)await r(s)}const Fs=dr(To);Oi(Fs);Fs.mount("#app");export{gn as $,Ct as A,vi as B,dt as C,re as D,it as E,mi as F,ol as G,Ji as H,Qi as I,Bi as J,Ki as K,tl as L,el as M,Ii as N,gi as O,Yi as P,fn as Q,sl as R,Nt as S,ya as T,bi as U,yn as V,as as W,ps as X,Fi as Y,mn as Z,_s as _,nn as a,xt as a0,ka as a1,Wi as a2,Ri as a3,ji as a4,Ni as a5,ue as a6,fe as a7,de as a8,he as a9,pe as aa,me as ab,ge as ac,Ei as ad,An as ae,ye as af,tn as ag,mr as ah,ve as ai,we as aj,ke as ak,be as al,Se as am,_e as an,Be as ao,Vi as ap,Me as aq,va as ar,wa as as,Hi as at,Sa as au,Ts as b,vo as c,Di as d,Gi as e,Zi as f,je as g,nl as h,Wn as i,yi as j,Tt as k,rl as l,al as m,Ze as n,I as o,lt as p,E as q,$n as r,Rt as s,zi as t,la as u,qi as v,Ui as w,kr as x,Pi as y,Xi as z};
