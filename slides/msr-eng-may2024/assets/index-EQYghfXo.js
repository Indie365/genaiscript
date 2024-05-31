const __vite__fileDeps=["assets/slidev/1-BWFyOpM_.js","assets/modules/vue-FaL-ku9S.js","assets/slidev/context-CIaoZAU3.js","assets/modules/shiki-USyX0HkO.js","assets/modules/shiki-DeiVkiDa.css","assets/slidev/2-CzPReKq2.js","assets/slidev/VClick-D__6ihVa.js","assets/slidev/3-DCXMksJp.js","assets/slidev/CodeBlockWrapper-ojt9ywCC.js","assets/modules/unplugin-icons-C1bRfjrx.js","assets/slidev/default-CojWKfsz.js","assets/slidev/4-D0WF1fmk.js","assets/slidev/Mermaid-CGaTPg0u.js","assets/modules/file-saver-EUMWMpoS.js","assets/slidev/5-C2mpB-JB.js","assets/slidev/6-YNvqTEsy.js","assets/slidev/7-Cs0A5Yuc.js","assets/slidev/8-Bv3kslws.js","assets/slidev/9-Js17OZeh.js","assets/slidev/10-DnRp5ZVG.js","assets/slidev/11-BNgE13v1.js","assets/slidev/12-DpnFWZRA.js","assets/slidev/13-CTNBEnip.js","assets/slidev/14-Dhdm5Jt2.js","assets/slidev/15-CR5jU77M.js","assets/15-C_jUVo6t.css","assets/slidev/entry-CxD24beZ.js","assets/entry-DFVZucWk.css","assets/slidev/overview-BtBlCqBg.js","assets/slidev/DrawingPreview-DITPBXrG.js","assets/DrawingPreview-B_1g_kmH.css","assets/slidev/IconButton-DsgB2nrJ.js","assets/slidev/NoteDisplay-Cgs_-cP5.js","assets/NoteDisplay-C6AkVv8T.css","assets/slidev/ClicksSlider-DOiHMlgQ.js","assets/ClicksSlider-DYpxHk94.css","assets/slidev/notes-DDHg-J_h.js","assets/slidev/presenter-CRGUYk3p.js","assets/slidev/ContextMenu-NxiID8N9.js","assets/ContextMenu-CvLg4A9z.css","assets/slidev/DrawingControls-CyifFl_w.js","assets/DrawingControls-C5T1oZL5.css","assets/presenter-DrrSjh4o.css","assets/slidev/play-BpZ2fmS0.js","assets/play-CoA43pdi.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{t as L,y as g,n as vt,z as Fs,A as dn,B as es,C as Re,D as Q,E as Vs,G as Gs,H as zs,I as ts,J as A,K as Ws,L as Bs,o as ns,b as Us,M as hn,N as Ot,O as qs,P as ss,Q as Js,R as Ks,S as ne,T as rs,U as $t,d as Ys,r as Qs,c as Xs,V as Zs,W as er,X as tr,Y as nr,Z as sr,_ as rr,$ as ar,a0 as ir,a1 as or,a2 as lr,a3 as cr,a4 as ur,a5 as fr,u as dr}from"./modules/vue-FaL-ku9S.js";import{T as hr}from"./modules/shiki-USyX0HkO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function Ze(n,e,t){return Math.min(t,Math.max(e,n))}function pr(...n){return gr(n).reduce((e,t)=>e+t,0)}function mr(n){return n=n??[],Array.isArray(n)?n:[n]}function gr(n){return mr(n).flat(1)}function yr(n){return Array.from(new Set(n))}function $n(...n){let e,t,s;n.length===1?(e=0,s=1,[t]=n):[e,t,s=1]=n;const r=[];let a=e;for(;a<t;)r.push(a),a+=s||1;return r}function vr(n){return n!=null}function wr(n,e){return Object.fromEntries(Object.entries(n).map(([t,s])=>e(t,s)).filter(vr))}function Po(n){return Object.keys(n).forEach(e=>n[e]===void 0?delete n[e]:{}),n}const x={theme:"default",title:"GenAIScript",titleTemplate:"%s",addons:[],remoteAssets:!1,monaco:!0,monacoTypesSource:"local",monacoTypesAdditionalPackages:[],monacoRunAdditionalDeps:[],download:!1,export:{},info:`<h2>GenAIScript</h2>
<p>Scripting for Generative AI.<br/>
<a href="https://microsoft.github.io/genaiscript/" target="_blank">Docs</a> | <a href="https://github.com/microsoft/genaiscript/" target="_blank">GitHub</a></p>
`,highlighter:"shiki",twoslash:!0,lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},editor:!0,class:"text-center",mdc:!0,layout:"center",slidesTitle:"GenAIScript"},xo="build",as=L(x.aspectRatio??16/9),kr=L(x.canvasWidth??980),Io=g(()=>Math.ceil(kr.value/as.value)),br=g(()=>wr(x.themeConfig||{},(n,e)=>[`--slidev-theme-${n}`,e])),Rt=x.slidesTitle;function Yt(n,e={},t){for(const s in n){const r=n[s],a=t?`${t}:${s}`:s;typeof r=="object"&&r!==null?Yt(r,e,a):typeof r=="function"&&(e[a]=r)}return e}const Sr={run:n=>n()},_r=()=>Sr,is=typeof console.createTask<"u"?console.createTask:_r;function Mr(n,e){const t=e.shift(),s=is(t);return n.reduce((r,a)=>r.then(()=>s.run(()=>a(...e))),Promise.resolve())}function Ar(n,e){const t=e.shift(),s=is(t);return Promise.all(n.map(r=>s.run(()=>r(...e))))}function Ht(n,e){for(const t of[...n])t(e)}class Lr{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,s={}){if(!e||typeof t!="function")return()=>{};const r=e;let a;for(;this._deprecatedHooks[e];)a=this._deprecatedHooks[e],e=a.to;if(a&&!s.allowDeprecated){let i=a.message;i||(i=`${r} hook has been deprecated`+(a.to?`, please use ${a.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let s,r=(...a)=>(typeof s=="function"&&s(),s=void 0,r=void 0,t(...a));return s=this.hook(e,r),s}removeHook(e,t){if(this._hooks[e]){const s=this._hooks[e].indexOf(t);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const s=this._hooks[e]||[];delete this._hooks[e];for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=Yt(e),s=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const t=Yt(e);for(const s in t)this.removeHook(s,t[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(Mr,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(Ar,e,...t)}callHookWith(e,t,...s){const r=this._before||this._after?{name:t,args:s,context:{}}:void 0;this._before&&Ht(this._before,r);const a=e(t in this._hooks?[...this._hooks[t]]:[],s);return a instanceof Promise?a.finally(()=>{this._after&&r&&Ht(this._after,r)}):(this._after&&r&&Ht(this._after,r),a)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function Cr(){return new Lr}function Tr(n){return Array.isArray(n)?n:[n]}const Or=["title","titleTemplate","script","style","noscript"],ct=["base","meta","link","style","script","noscript"],$r=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Er=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],os=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],Pr=typeof window<"u";function pn(n){let e=9;for(let t=0;t<n.length;)e=Math.imul(e^n.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function En(n){return n._h||pn(n._d?n._d:`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([e,t])=>`${e}:${String(t)}`).join(",")}`)}function ls(n,e){const{props:t,tag:s}=n;if(Er.includes(s))return s;if(s==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const a of r)if(typeof t[a]<"u"){const i=String(t[a]);return`${s}:${a}:${i}`}return!1}function Pn(n,e){return n==null?e||null:typeof n=="function"?n(e):n}async function xr(n,e,t){const s={tag:n,props:await cs(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(n)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(n))};return os.forEach(r=>{const a=typeof s.props[r]<"u"?s.props[r]:t[r];typeof a<"u"&&((!["innerHTML","textContent","children"].includes(r)||Or.includes(s.tag))&&(s[r==="children"?"innerHTML":r]=a),delete s.props[r])}),s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(r=>({...s,props:{...s.props,content:r}})):s}function Ir(n,e){var s;const t=n==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,r])=>r).map(([r,a])=>n==="style"?`${r}:${a}`:r)),(s=Array.isArray(e)?e.join(t):e)==null?void 0:s.split(t).filter(r=>r.trim()).filter(Boolean).join(t)}async function cs(n,e){for(const t of Object.keys(n)){if(["class","style"].includes(t)){n[t]=Ir(t,n[t]);continue}if(n[t]instanceof Promise&&(n[t]=await n[t]),!e&&!os.includes(t)){const s=String(n[t]),r=t.startsWith("data-");s==="true"||s===""?n[t]=r?"true":!0:n[t]||(r&&s==="false"?n[t]="false":delete n[t])}}return n}const Dr=10;async function Nr(n){const e=[];return Object.entries(n.resolvedInput).filter(([t,s])=>typeof s<"u"&&$r.includes(t)).forEach(([t,s])=>{const r=Tr(s);e.push(...r.map(a=>xr(t,a,n)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((t,s)=>(t._e=n._i,n.mode&&(t._m=n.mode),t._p=(n._i<<Dr)+s,t))}const xn={base:-10,title:10},In={critical:-80,high:-10,low:20};function wt(n){let e=100;const t=n.tagPriority;return typeof t=="number"?t:(n.tag==="meta"?(n.props["http-equiv"]==="content-security-policy"&&(e=-30),n.props.charset&&(e=-20),n.props.name==="viewport"&&(e=-15)):n.tag==="link"&&n.props.rel==="preconnect"?e=20:n.tag in xn&&(e=xn[n.tag]),typeof t=="string"&&t in In?e+In[t]:e)}const jr=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Dn=["onload","onerror","onabort","onprogress","onloadstart"],oe="%separator";function ut(n,e,t){if(typeof n!="string"||!n.includes("%"))return n;function s(i){let o;return["s","pageTitle"].includes(i)?o=e.pageTitle:i.includes(".")?o=i.split(".").reduce((l,c)=>l&&l[c]||void 0,e):o=e[i],typeof o<"u"?(o||"").replace(/"/g,'\\"'):!1}let r=n;try{r=decodeURI(n)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const o=s(i.slice(1));typeof o=="string"&&(n=n.replace(new RegExp(`\\${i}(\\W|$)`,"g"),(l,c)=>`${o}${c}`).trim())}),n.includes(oe)&&(n.endsWith(oe)&&(n=n.slice(0,-oe.length).trim()),n.startsWith(oe)&&(n=n.slice(oe.length).trim()),n=n.replace(new RegExp(`\\${oe}\\s*\\${oe}`,"g"),oe),n=ut(n,{separator:t},t)),n}async function Rr(n,e={}){var u;const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const s={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const r=(await n.resolveTags()).map(f=>({tag:f,id:ct.includes(f.tag)?En(f):f.tag,shouldRender:!0}));let a=n._dom;if(!a){a={elMap:{htmlAttrs:t.documentElement,bodyAttrs:t.body}};for(const f of["body","head"]){const d=(u=t[f])==null?void 0:u.children,h=[];for(const m of[...d].filter(p=>ct.includes(p.tagName.toLowerCase()))){const p={tag:m.tagName.toLowerCase(),props:await cs(m.getAttributeNames().reduce((w,k)=>({...w,[k]:m.getAttribute(k)}),{})),innerHTML:m.innerHTML};let y=1,v=ls(p);for(;v&&h.find(w=>w._d===v);)v=`${v}:${y++}`;p._d=v||void 0,h.push(p),a.elMap[m.getAttribute("data-hid")||En(p)]=m}}}a.pendingSideEffects={...a.sideEffects||{}},a.sideEffects={};function i(f,d,h){const m=`${f}:${d}`;a.sideEffects[m]=h,delete a.pendingSideEffects[m]}function o({id:f,$el:d,tag:h}){const m=h.tag.endsWith("Attrs");a.elMap[f]=d,m||(["textContent","innerHTML"].forEach(p=>{h[p]&&h[p]!==d[p]&&(d[p]=h[p])}),i(f,"el",()=>{var p;(p=a.elMap[f])==null||p.remove(),delete a.elMap[f]}));for(const[p,y]of Object.entries(h._eventHandlers||{}))d.getAttribute(`data-${p}`)!==""&&((h.tag==="bodyAttrs"?t.defaultView:d).addEventListener(p.replace("on",""),y.bind(d)),d.setAttribute(`data-${p}`,""));Object.entries(h.props).forEach(([p,y])=>{const v=`attr:${p}`;if(p==="class")for(const w of(y||"").split(" ").filter(Boolean))m&&i(f,`${v}:${w}`,()=>d.classList.remove(w)),!d.classList.contains(w)&&d.classList.add(w);else if(p==="style")for(const w of(y||"").split(";").filter(Boolean)){const[k,...b]=w.split(":").map(M=>M.trim());i(f,`${v}:${w}:${k}`,()=>{d.style.removeProperty(k)}),d.style.setProperty(k,b.join(":"))}else d.getAttribute(p)!==y&&d.setAttribute(p,y===!0?"":String(y)),m&&i(f,v,()=>d.removeAttribute(p))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of r){const{tag:d,shouldRender:h,id:m}=f;if(h){if(d.tag==="title"){t.title=d.textContent;continue}f.$el=f.$el||a.elMap[m],f.$el?o(f):ct.includes(d.tag)&&l.push(f)}}for(const f of l){const d=f.tag.tagPosition||"head";f.$el=t.createElement(f.tag.tag),o(f),c[d]=c[d]||t.createDocumentFragment(),c[d].appendChild(f.$el)}for(const f of r)await n.hooks.callHook("dom:renderTag",f,t,i);c.head&&t.head.appendChild(c.head),c.bodyOpen&&t.body.insertBefore(c.bodyOpen,t.body.firstChild),c.bodyClose&&t.body.appendChild(c.bodyClose),Object.values(a.pendingSideEffects).forEach(f=>f()),n._dom=a,n.dirty=!1,await n.hooks.callHook("dom:rendered",{renders:r})}async function Hr(n,e={}){const t=e.delayFn||(s=>setTimeout(s,10));return n._domUpdatePromise=n._domUpdatePromise||new Promise(s=>t(async()=>{await Rr(n,e),delete n._domUpdatePromise,s()}))}function Fr(n){return e=>{var s,r;const t=((r=(s=e.resolvedOptions.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return t&&e.push(JSON.parse(t)),{mode:"client",hooks:{"entries:updated":function(a){Hr(a,n)}}}}}const Vr=["templateParams","htmlAttrs","bodyAttrs"],Gr={hooks:{"tag:normalise":function({tag:n}){["hid","vmid","key"].forEach(s=>{n.props[s]&&(n.key=n.props[s],delete n.props[s])});const t=ls(n)||(n.key?`${n.tag}:${n.key}`:!1);t&&(n._d=t)},"tags:resolve":function(n){const e={};n.tags.forEach(s=>{const r=(s.key?`${s.tag}:${s.key}`:s._d)||s._p,a=e[r];if(a){let o=s==null?void 0:s.tagDuplicateStrategy;if(!o&&Vr.includes(s.tag)&&(o="merge"),o==="merge"){const l=a.props;["class","style"].forEach(c=>{l[c]&&(s.props[c]?(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),s.props[c]=`${l[c]} ${s.props[c]}`):s.props[c]=l[c])}),e[r].props={...l,...s.props};return}else if(s._e===a._e){a._duped=a._duped||[],s._d=`${a._d}:${a._duped.length+1}`,a._duped.push(s);return}else if(wt(s)>wt(a))return}const i=Object.keys(s.props).length+(s.innerHTML?1:0)+(s.textContent?1:0);if(ct.includes(s.tag)&&i===0){delete e[r];return}e[r]=s});const t=[];Object.values(e).forEach(s=>{const r=s._duped;delete s._duped,t.push(s),r&&t.push(...r)}),n.tags=t,n.tags=n.tags.filter(s=>!(s.tag==="meta"&&(s.props.name||s.props.property)&&!s.props.content))}}},zr={mode:"server",hooks:{"tags:resolve":function(n){const e={};n.tags.filter(t=>["titleTemplate","templateParams","title"].includes(t.tag)&&t._m==="server").forEach(t=>{e[t.tag]=t.tag.startsWith("title")?t.textContent:t.props}),Object.keys(e).length&&n.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Wr=["script","link","bodyAttrs"],Br=n=>({hooks:{"tags:resolve":function(e){for(const t of e.tags.filter(s=>Wr.includes(s.tag)))Object.entries(t.props).forEach(([s,r])=>{s.startsWith("on")&&typeof r=="function"&&(n.ssr&&Dn.includes(s)?t.props[s]=`this.dataset.${s}fired = true`:delete t.props[s],t._eventHandlers=t._eventHandlers||{},t._eventHandlers[s]=r)}),n.ssr&&t._eventHandlers&&(t.props.src||t.props.href)&&(t.key=t.key||pn(t.props.src||t.props.href))},"dom:renderTag":function({$el:e,tag:t}){var s,r;for(const a of Object.keys((e==null?void 0:e.dataset)||{}).filter(i=>Dn.some(o=>`${o}fired`===i))){const i=a.replace("fired","");(r=(s=t._eventHandlers)==null?void 0:s[i])==null||r.call(e,new Event(i.replace("on","")))}}}}),Ur=["link","style","script","noscript"],qr={hooks:{"tag:normalise":({tag:n})=>{n.key&&Ur.includes(n.tag)&&(n.props["data-hid"]=n._h=pn(n.key))}}},Jr={hooks:{"tags:resolve":n=>{const e=t=>{var s;return(s=n.tags.find(r=>r._d===t))==null?void 0:s._p};for(const{prefix:t,offset:s}of jr)for(const r of n.tags.filter(a=>typeof a.tagPriority=="string"&&a.tagPriority.startsWith(t))){const a=e(r.tagPriority.replace(t,""));typeof a<"u"&&(r._p=a+s)}n.tags.sort((t,s)=>t._p-s._p).sort((t,s)=>wt(t)-wt(s))}}},Kr={meta:"content",link:"href",htmlAttrs:"lang"},Yr=n=>({hooks:{"tags:resolve":e=>{var o;const{tags:t}=e,s=(o=t.find(l=>l.tag==="title"))==null?void 0:o.textContent,r=t.findIndex(l=>l.tag==="templateParams"),a=r!==-1?t[r].props:{},i=a.separator||"|";delete a.separator,a.pageTitle=ut(a.pageTitle||s||"",a,i);for(const l of t.filter(c=>c.processTemplateParams!==!1)){const c=Kr[l.tag];c&&typeof l.props[c]=="string"?l.props[c]=ut(l.props[c],a,i):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(u=>{typeof l[u]=="string"&&(l[u]=ut(l[u],a,i))})}n._templateParams=a,n._separator=i,e.tags=t.filter(l=>l.tag!=="templateParams")}}}),Qr={hooks:{"tags:resolve":n=>{const{tags:e}=n;let t=e.findIndex(r=>r.tag==="titleTemplate");const s=e.findIndex(r=>r.tag==="title");if(s!==-1&&t!==-1){const r=Pn(e[t].textContent,e[s].textContent);r!==null?e[s].textContent=r||e[s].textContent:delete e[s]}else if(t!==-1){const r=Pn(e[t].textContent);r!==null&&(e[t].textContent=r,e[t].tag="title",t=-1)}t!==-1&&delete e[t],n.tags=e.filter(Boolean)}}},Xr={hooks:{"tags:afterResolve":function(n){for(const e of n.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let us;function Zr(n={}){const e=ea(n);return e.use(Fr()),us=e}function Nn(n,e){return!n||n==="server"&&e||n==="client"&&!e}function ea(n={}){const e=Cr();e.addHooks(n.hooks||{}),n.document=n.document||(Pr?document:void 0);const t=!n.document,s=()=>{o.dirty=!0,e.callHook("entries:updated",o)};let r=0,a=[];const i=[],o={plugins:i,dirty:!1,resolvedOptions:n,hooks:e,headEntries(){return a},use(l){const c=typeof l=="function"?l(o):l;(!c.key||!i.some(u=>u.key===c.key))&&(i.push(c),Nn(c.mode,t)&&e.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:r++,input:l,...c};return Nn(u.mode,t)&&(a.push(u),s()),{dispose(){a=a.filter(f=>f._i!==u._i),e.callHook("entries:updated",o),s()},patch(f){a=a.map(d=>(d._i===u._i&&(d.input=u.input=f),d)),s()}}},async resolveTags(){const l={tags:[],entries:[...a]};await e.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const f of await Nr(c)){const d={tag:f,entry:c,resolvedOptions:o.resolvedOptions};await e.callHook("tag:normalise",d),l.tags.push(d.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:t};return[Gr,zr,Br,qr,Jr,Yr,Qr,Xr,...(n==null?void 0:n.plugins)||[]].forEach(l=>o.use(l)),o.hooks.callHook("init",o),o}function ta(){return us}const na=Fs.startsWith("3");function sa(n){return typeof n=="function"?n():dn(n)}function kt(n,e=""){if(n instanceof Promise)return n;const t=sa(n);return!n||!t?t:Array.isArray(t)?t.map(s=>kt(s,e)):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([s,r])=>s==="titleTemplate"||s.startsWith("on")?[s,dn(r)]:[s,kt(r,s)])):t}const ra={hooks:{"entries:resolve":function(n){for(const e of n.entries)e.resolvedInput=kt(e.input)}}},fs="usehead";function aa(n){return{install(t){na&&(t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(fs,n))}}.install}function ia(n={}){n.domDelayFn=n.domDelayFn||(t=>vt(()=>setTimeout(()=>t(),0)));const e=Zr(n);return e.use(ra),e.install=aa(e),e}const jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Rn="__unhead_injection_handler__";function oa(){if(Rn in jn)return jn[Rn]();const n=es(fs);return n||console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results."),n||ta()}function la(n,e={}){const t=e.head||oa();if(t)return t.ssr?t.push(n,e):ca(t,n,e)}function ca(n,e,t={}){const s=L(!1),r=L({});Re(()=>{r.value=s.value?{}:kt(e)});const a=n.push(r.value,t);return Q(r,o=>{a.patch(o)}),ts()&&(Vs(()=>{a.dispose()}),Gs(()=>{s.value=!0}),zs(()=>{s.value=!1})),a}function ds(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function X(n,e,t){Object.defineProperty(n,e,{value:t,writable:!0,enumerable:!1})}const Oe=A({page:0,clicks:0});let ua=[],fa=[];X(Oe,"$syncUp",!0);X(Oe,"$syncDown",!0);X(Oe,"$paused",!1);X(Oe,"$onSet",n=>ua.push(n));X(Oe,"$onPatch",n=>fa.push(n));ds();X(Oe,"$patch",async()=>!1);function hs(n,e,t=!1){const s=[];let r=!1,a=!1,i,o;const l=A(e);function c(h){s.push(h)}function u(h,m){l[h]!==m&&(clearTimeout(i),r=!0,l[h]=m,i=setTimeout(()=>r=!1,0))}function f(h){r||(clearTimeout(o),a=!0,Object.entries(h).forEach(([m,p])=>{l[m]=p}),o=setTimeout(()=>a=!1,0))}function d(h){let m;t?t&&window.addEventListener("storage",y=>{y&&y.key===h&&y.newValue&&f(JSON.parse(y.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",y=>f(y.data)));function p(){!t&&m&&!a?m.postMessage(Ws(l)):t&&!a&&window.localStorage.setItem(h,JSON.stringify(l)),r||s.forEach(y=>y(l))}if(Q(l,p,{deep:!0,flush:"sync"}),t){const y=window.localStorage.getItem(h);y&&f(JSON.parse(y))}}return{init:d,onPatch:c,patch:u,state:l}}const{init:da,onPatch:ha,patch:We,state:Do}=hs(Oe,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),$e=A({});let pa=[],ma=[];X($e,"$syncUp",!0);X($e,"$syncDown",!0);X($e,"$paused",!1);X($e,"$onSet",n=>pa.push(n));X($e,"$onPatch",n=>ma.push(n));ds();X($e,"$patch",async()=>!1);const{init:ga,onPatch:No,patch:jo,state:Ro}=hs($e,{},!1),Et="$$slidev-clicks-context",mn="$$slidev-page",ps="$$slidev-slide-element",ya="$$slidev-slide-scale",va="$$slidev-context",Ho="$$slidev-route",gn="$$slidev-render-context",wa="$$slidev-fontmatter",ka="$$slidev-slide-zoom",ft="slidev-vclick-target",Be="slidev-vclick-hidden",Ue="slidev-vclick-fade",Ft="slidev-vclick-hidden-explicitly",Vt="slidev-vclick-current",Gt="slidev-vclick-prior",dt=999999,ba=["localhost","127.0.0.1"],Sa=["clicks","clicksStart","disabled","hide","hideInToc","layout","level","preload","routeAlias","src","title","transition","zoom","dragPos"],Fo=[...Sa,"theme","titleTemplate","info","author","keywords","presenter","download","exportFilename","export","highlighter","lineNumbers","monaco","monacoTypesSource","monacoTypesAdditionalPackages","monacoRunAdditionalDeps","remoteAssets","selectable","record","colorSchema","routerMode","aspectRatio","canvasWidth","themeConfig","favicon","plantUmlServer","fonts","defaults","drawings","htmlAttrs","mdc","contextMenu"],yn=L(!1),vn=Symbol.for("yaml.alias"),_a=Symbol.for("yaml.document"),Te=Symbol.for("yaml.map"),ms=Symbol.for("yaml.pair"),wn=Symbol.for("yaml.scalar"),nt=Symbol.for("yaml.seq"),ae=Symbol.for("yaml.node.type"),Fe=n=>!!n&&typeof n=="object"&&n[ae]===vn,Pt=n=>!!n&&typeof n=="object"&&n[ae]===_a,gs=n=>!!n&&typeof n=="object"&&n[ae]===Te,H=n=>!!n&&typeof n=="object"&&n[ae]===ms,j=n=>!!n&&typeof n=="object"&&n[ae]===wn,kn=n=>!!n&&typeof n=="object"&&n[ae]===nt;function J(n){if(n&&typeof n=="object")switch(n[ae]){case Te:case nt:return!0}return!1}function U(n){if(n&&typeof n=="object")switch(n[ae]){case vn:case Te:case wn:case nt:return!0}return!1}const Ma=n=>(j(n)||J(n))&&!!n.anchor,Ae=Symbol("break visit"),Aa=Symbol("skip children"),Ye=Symbol("remove node");function et(n,e){const t=La(e);Pt(n)?Ie(null,n.contents,t,Object.freeze([n]))===Ye&&(n.contents=null):Ie(null,n,t,Object.freeze([]))}et.BREAK=Ae;et.SKIP=Aa;et.REMOVE=Ye;function Ie(n,e,t,s){const r=Ca(n,e,t,s);if(U(r)||H(r))return Ta(n,s,r),Ie(n,r,t,s);if(typeof r!="symbol"){if(J(e)){s=Object.freeze(s.concat(e));for(let a=0;a<e.items.length;++a){const i=Ie(a,e.items[a],t,s);if(typeof i=="number")a=i-1;else{if(i===Ae)return Ae;i===Ye&&(e.items.splice(a,1),a-=1)}}}else if(H(e)){s=Object.freeze(s.concat(e));const a=Ie("key",e.key,t,s);if(a===Ae)return Ae;a===Ye&&(e.key=null);const i=Ie("value",e.value,t,s);if(i===Ae)return Ae;i===Ye&&(e.value=null)}}return r}function La(n){return typeof n=="object"&&(n.Collection||n.Node||n.Value)?Object.assign({Alias:n.Node,Map:n.Node,Scalar:n.Node,Seq:n.Node},n.Value&&{Map:n.Value,Scalar:n.Value,Seq:n.Value},n.Collection&&{Map:n.Collection,Seq:n.Collection},n):n}function Ca(n,e,t,s){var r,a,i,o,l;if(typeof t=="function")return t(n,e,s);if(gs(e))return(r=t.Map)==null?void 0:r.call(t,n,e,s);if(kn(e))return(a=t.Seq)==null?void 0:a.call(t,n,e,s);if(H(e))return(i=t.Pair)==null?void 0:i.call(t,n,e,s);if(j(e))return(o=t.Scalar)==null?void 0:o.call(t,n,e,s);if(Fe(e))return(l=t.Alias)==null?void 0:l.call(t,n,e,s)}function Ta(n,e,t){const s=e[e.length-1];if(J(s))s.items[n]=t;else if(H(s))n==="key"?s.key=t:s.value=t;else if(Pt(s))s.contents=t;else{const r=Fe(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${r} parent`)}}function ys(n){if(/[\x00-\x19\s,[\]{}]/.test(n)){const t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(n)}`;throw new Error(t)}return!0}function Ke(n,e,t,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let r=0,a=s.length;r<a;++r){const i=s[r],o=Ke(n,s,String(r),i);o===void 0?delete s[r]:o!==i&&(s[r]=o)}else if(s instanceof Map)for(const r of Array.from(s.keys())){const a=s.get(r),i=Ke(n,s,r,a);i===void 0?s.delete(r):i!==a&&s.set(r,i)}else if(s instanceof Set)for(const r of Array.from(s)){const a=Ke(n,s,r,r);a===void 0?s.delete(r):a!==r&&(s.delete(r),s.add(a))}else for(const[r,a]of Object.entries(s)){const i=Ke(n,s,r,a);i===void 0?delete s[r]:i!==a&&(s[r]=i)}return n.call(e,t,s)}function te(n,e,t){if(Array.isArray(n))return n.map((s,r)=>te(s,String(r),t));if(n&&typeof n.toJSON=="function"){if(!t||!Ma(n))return n.toJSON(e,t);const s={aliasCount:0,count:1,res:void 0};t.anchors.set(n,s),t.onCreate=a=>{s.res=a,delete t.onCreate};const r=n.toJSON(e,t);return t.onCreate&&t.onCreate(r),r}return typeof n=="bigint"&&!(t!=null&&t.keep)?Number(n):n}class bn{constructor(e){Object.defineProperty(this,ae,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:s,onAnchor:r,reviver:a}={}){if(!Pt(e))throw new TypeError("A document argument is required");const i={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},o=te(this,"",i);if(typeof r=="function")for(const{count:l,res:c}of i.anchors.values())r(c,l);return typeof a=="function"?Ke(a,{"":o},"",o):o}}class Oa extends bn{constructor(e){super(vn),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let t;return et(e,{Node:(s,r)=>{if(r===this)return et.BREAK;r.anchor===this.source&&(t=r)}}),t}toJSON(e,t){if(!t)return{source:this.source};const{anchors:s,doc:r,maxAliasCount:a}=t,i=this.resolve(r);if(!i){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let o=s.get(i);if(o||(te(i,null,t),o=s.get(i)),!o||o.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(a>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=ht(r,i,s)),o.count*o.aliasCount>a)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return o.res}toString(e,t,s){const r=`*${this.source}`;if(e){if(ys(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const a=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(a)}if(e.implicitKey)return`${r} `}return r}}function ht(n,e,t){if(Fe(e)){const s=e.resolve(n),r=t&&s&&t.get(s);return r?r.count*r.aliasCount:0}else if(J(e)){let s=0;for(const r of e.items){const a=ht(n,r,t);a>s&&(s=a)}return s}else if(H(e)){const s=ht(n,e.key,t),r=ht(n,e.value,t);return Math.max(s,r)}return 1}const vs=n=>!n||typeof n!="function"&&typeof n!="object";class N extends bn{constructor(e){super(wn),this.value=e}toJSON(e,t){return t!=null&&t.keep?this.value:te(this.value,e,t)}toString(){return String(this.value)}}N.BLOCK_FOLDED="BLOCK_FOLDED";N.BLOCK_LITERAL="BLOCK_LITERAL";N.PLAIN="PLAIN";N.QUOTE_DOUBLE="QUOTE_DOUBLE";N.QUOTE_SINGLE="QUOTE_SINGLE";function $a(n,e,t){return t.find(s=>{var r;return((r=s.identify)==null?void 0:r.call(s,n))&&!s.format})}function bt(n,e,t){var f,d,h;if(Pt(n)&&(n=n.contents),U(n))return n;if(H(n)){const m=(d=(f=t.schema[Te]).createNode)==null?void 0:d.call(f,t.schema,null,t);return m.items.push(n),m}(n instanceof String||n instanceof Number||n instanceof Boolean||typeof BigInt<"u"&&n instanceof BigInt)&&(n=n.valueOf());const{aliasDuplicateObjects:s,onAnchor:r,onTagObj:a,schema:i,sourceObjects:o}=t;let l;if(s&&n&&typeof n=="object"){if(l=o.get(n),l)return l.anchor||(l.anchor=r(n)),new Oa(l.anchor);l={anchor:null,node:null},o.set(n,l)}let c=$a(n,e,i.tags);if(!c){if(n&&typeof n.toJSON=="function"&&(n=n.toJSON()),!n||typeof n!="object"){const m=new N(n);return l&&(l.node=m),m}c=n instanceof Map?i[Te]:Symbol.iterator in Object(n)?i[nt]:i[Te]}a&&(a(c),delete t.onTagObj);const u=c!=null&&c.createNode?c.createNode(t.schema,n,t):typeof((h=c==null?void 0:c.nodeClass)==null?void 0:h.from)=="function"?c.nodeClass.from(t.schema,n,t):new N(n);return c.default||(u.tag=c.tag),l&&(l.node=u),u}function Hn(n,e,t){let s=t;for(let r=e.length-1;r>=0;--r){const a=e[r];if(typeof a=="number"&&Number.isInteger(a)&&a>=0){const i=[];i[a]=s,s=i}else s=new Map([[a,s]])}return bt(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:n,sourceObjects:new Map})}const Ea=n=>n==null||typeof n=="object"&&!!n[Symbol.iterator]().next().done;class Sn extends bn{constructor(e,t){super(e),Object.defineProperty(this,"schema",{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(s=>U(s)||H(s)?s.clone(e):s),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Ea(e))this.add(t);else{const[s,...r]=e,a=this.get(s,!0);if(J(a))a.addIn(r,t);else if(a===void 0&&this.schema)this.set(s,Hn(this.schema,r,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)}}deleteIn(e){const[t,...s]=e;if(s.length===0)return this.delete(t);const r=this.get(t,!0);if(J(r))return r.deleteIn(s);throw new Error(`Expected YAML collection at ${t}. Remaining path: ${s}`)}getIn(e,t){const[s,...r]=e,a=this.get(s,!0);return r.length===0?!t&&j(a)?a.value:a:J(a)?a.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!H(t))return!1;const s=t.value;return s==null||e&&j(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(e){const[t,...s]=e;if(s.length===0)return this.has(t);const r=this.get(t,!0);return J(r)?r.hasIn(s):!1}setIn(e,t){const[s,...r]=e;if(r.length===0)this.set(s,t);else{const a=this.get(s,!0);if(J(a))a.setIn(r,t);else if(a===void 0&&this.schema)this.set(s,Hn(this.schema,r,t));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)}}}Sn.maxFlowStringSingleLineLength=60;const Pa=n=>n.replace(/^(?!$)(?: $)?/gm,"#");function tt(n,e){return/^\n+$/.test(n)?n.substring(1):e?n.replace(/^(?! *$)/gm,e):n}const De=(n,e,t)=>n.endsWith(`
`)?tt(t,e):t.includes(`
`)?`
`+tt(t,e):(n.endsWith(" ")?"":" ")+t,ws="flow",Qt="block",pt="quoted";function xt(n,e,t="flow",{indentAtStart:s,lineWidth:r=80,minContentWidth:a=20,onFold:i,onOverflow:o}={}){if(!r||r<0)return n;const l=Math.max(1+a,1+r-e.length);if(n.length<=l)return n;const c=[],u={};let f=r-e.length;typeof s=="number"&&(s>r-Math.max(2,a)?c.push(0):f=r-s);let d,h,m=!1,p=-1,y=-1,v=-1;t===Qt&&(p=Fn(n,p,e.length),p!==-1&&(f=p+l));for(let k;k=n[p+=1];){if(t===pt&&k==="\\"){switch(y=p,n[p+1]){case"x":p+=3;break;case"u":p+=5;break;case"U":p+=9;break;default:p+=1}v=p}if(k===`
`)t===Qt&&(p=Fn(n,p,e.length)),f=p+e.length+l,d=void 0;else{if(k===" "&&h&&h!==" "&&h!==`
`&&h!=="	"){const b=n[p+1];b&&b!==" "&&b!==`
`&&b!=="	"&&(d=p)}if(p>=f)if(d)c.push(d),f=d+l,d=void 0;else if(t===pt){for(;h===" "||h==="	";)h=k,k=n[p+=1],m=!0;const b=p>v+1?p-2:y-1;if(u[b])return n;c.push(b),u[b]=!0,f=b+l,d=void 0}else m=!0}h=k}if(m&&o&&o(),c.length===0)return n;i&&i();let w=n.slice(0,c[0]);for(let k=0;k<c.length;++k){const b=c[k],M=c[k+1]||n.length;b===0?w=`
${e}${n.slice(0,M)}`:(t===pt&&u[b]&&(w+=`${n[b]}\\`),w+=`
${e}${n.slice(b+1,M)}`)}return w}function Fn(n,e,t){let s=e,r=e+1,a=n[r];for(;a===" "||a==="	";)if(e<r+t)a=n[++e];else{do a=n[++e];while(a&&a!==`
`);s=e,r=e+1,a=n[r]}return s}const It=(n,e)=>({indentAtStart:e?n.indent.length:n.indentAtStart,lineWidth:n.options.lineWidth,minContentWidth:n.options.minContentWidth}),Dt=n=>/^(%|---|\.\.\.)/m.test(n);function xa(n,e,t){if(!e||e<0)return!1;const s=e-t,r=n.length;if(r<=s)return!1;for(let a=0,i=0;a<r;++a)if(n[a]===`
`){if(a-i>s)return!0;if(i=a+1,r-i<=s)return!1}return!0}function Qe(n,e){const t=JSON.stringify(n);if(e.options.doubleQuotedAsJSON)return t;const{implicitKey:s}=e,r=e.options.doubleQuotedMinMultiLineLength,a=e.indent||(Dt(n)?"  ":"");let i="",o=0;for(let l=0,c=t[l];c;c=t[++l])if(c===" "&&t[l+1]==="\\"&&t[l+2]==="n"&&(i+=t.slice(o,l)+"\\ ",l+=1,o=l,c="\\"),c==="\\")switch(t[l+1]){case"u":{i+=t.slice(o,l);const u=t.substr(l+2,4);switch(u){case"0000":i+="\\0";break;case"0007":i+="\\a";break;case"000b":i+="\\v";break;case"001b":i+="\\e";break;case"0085":i+="\\N";break;case"00a0":i+="\\_";break;case"2028":i+="\\L";break;case"2029":i+="\\P";break;default:u.substr(0,2)==="00"?i+="\\x"+u.substr(2):i+=t.substr(l,6)}l+=5,o=l+1}break;case"n":if(s||t[l+2]==='"'||t.length<r)l+=1;else{for(i+=t.slice(o,l)+`

`;t[l+2]==="\\"&&t[l+3]==="n"&&t[l+4]!=='"';)i+=`
`,l+=2;i+=a,t[l+2]===" "&&(i+="\\"),l+=1,o=l+1}break;default:l+=1}return i=o?i+t.slice(o):t,s?i:xt(i,a,pt,It(e,!1))}function Xt(n,e){if(e.options.singleQuote===!1||e.implicitKey&&n.includes(`
`)||/[ \t]\n|\n[ \t]/.test(n))return Qe(n,e);const t=e.indent||(Dt(n)?"  ":""),s="'"+n.replace(/'/g,"''").replace(/\n+/g,`$&
${t}`)+"'";return e.implicitKey?s:xt(s,t,ws,It(e,!1))}function Ne(n,e){const{singleQuote:t}=e.options;let s;if(t===!1)s=Qe;else{const r=n.includes('"'),a=n.includes("'");r&&!a?s=Xt:a&&!r?s=Qe:s=t?Xt:Qe}return s(n,e)}let Zt;try{Zt=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{Zt=/\n+(?!\n|$)/g}function mt({comment:n,type:e,value:t},s,r,a){const{blockQuote:i,commentString:o,lineWidth:l}=s.options;if(!i||/\n[\t ]+$/.test(t)||/^\s*$/.test(t))return Ne(t,s);const c=s.indent||(s.forceBlockIndent||Dt(t)?"  ":""),u=i==="literal"?!0:i==="folded"||e===N.BLOCK_FOLDED?!1:e===N.BLOCK_LITERAL?!0:!xa(t,l,c.length);if(!t)return u?`|
`:`>
`;let f,d;for(d=t.length;d>0;--d){const _=t[d-1];if(_!==`
`&&_!=="	"&&_!==" ")break}let h=t.substring(d);const m=h.indexOf(`
`);m===-1?f="-":t===h||m!==h.length-1?(f="+",a&&a()):f="",h&&(t=t.slice(0,-h.length),h[h.length-1]===`
`&&(h=h.slice(0,-1)),h=h.replace(Zt,`$&${c}`));let p=!1,y,v=-1;for(y=0;y<t.length;++y){const _=t[y];if(_===" ")p=!0;else if(_===`
`)v=y;else break}let w=t.substring(0,v<y?v+1:y);w&&(t=t.substring(w.length),w=w.replace(/\n+/g,`$&${c}`));let b=(u?"|":">")+(p?c?"2":"1":"")+f;if(n&&(b+=" "+o(n.replace(/ ?[\r\n]+/g," ")),r&&r()),u)return t=t.replace(/\n+/g,`$&${c}`),`${b}
${c}${w}${t}${h}`;t=t.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);const M=xt(`${w}${t}${h}`,c,Qt,It(s,!0));return`${b}
${c}${M}`}function Ia(n,e,t,s){const{type:r,value:a}=n,{actualString:i,implicitKey:o,indent:l,indentStep:c,inFlow:u}=e;if(o&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return Ne(a,e);if(!a||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return o||u||!a.includes(`
`)?Ne(a,e):mt(n,e,t,s);if(!o&&!u&&r!==N.PLAIN&&a.includes(`
`))return mt(n,e,t,s);if(Dt(a)){if(l==="")return e.forceBlockIndent=!0,mt(n,e,t,s);if(o&&l===c)return Ne(a,e)}const f=a.replace(/\n+/g,`$&
${l}`);if(i){const d=p=>{var y;return p.default&&p.tag!=="tag:yaml.org,2002:str"&&((y=p.test)==null?void 0:y.test(f))},{compat:h,tags:m}=e.doc.schema;if(m.some(d)||h!=null&&h.some(d))return Ne(a,e)}return o?f:xt(f,l,ws,It(e,!1))}function Da(n,e,t,s){const{implicitKey:r,inFlow:a}=e,i=typeof n.value=="string"?n:Object.assign({},n,{value:String(n.value)});let{type:o}=n;o!==N.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(i.value)&&(o=N.QUOTE_DOUBLE);const l=u=>{switch(u){case N.BLOCK_FOLDED:case N.BLOCK_LITERAL:return r||a?Ne(i.value,e):mt(i,e,t,s);case N.QUOTE_DOUBLE:return Qe(i.value,e);case N.QUOTE_SINGLE:return Xt(i.value,e);case N.PLAIN:return Ia(i,e,t,s);default:return null}};let c=l(o);if(c===null){const{defaultKeyType:u,defaultStringType:f}=e.options,d=r&&u||f;if(c=l(d),c===null)throw new Error(`Unsupported default string type ${d}`)}return c}function Na(n,e){const t=Object.assign({blockQuote:!0,commentString:Pa,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},n.schema.toStringOptions,e);let s;switch(t.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:n,flowCollectionPadding:t.flowCollectionPadding?" ":"",indent:"",indentStep:typeof t.indent=="number"?" ".repeat(t.indent):"  ",inFlow:s,options:t}}function ja(n,e){var r;if(e.tag){const a=n.filter(i=>i.tag===e.tag);if(a.length>0)return a.find(i=>i.format===e.format)??a[0]}let t,s;if(j(e)){s=e.value;const a=n.filter(i=>{var o;return(o=i.identify)==null?void 0:o.call(i,s)});t=a.find(i=>i.format===e.format)??a.find(i=>!i.format)}else s=e,t=n.find(a=>a.nodeClass&&s instanceof a.nodeClass);if(!t){const a=((r=s==null?void 0:s.constructor)==null?void 0:r.name)??typeof s;throw new Error(`Tag not resolved for ${a} value`)}return t}function Ra(n,e,{anchors:t,doc:s}){if(!s.directives)return"";const r=[],a=(j(n)||J(n))&&n.anchor;a&&ys(a)&&(t.add(a),r.push(`&${a}`));const i=n.tag?n.tag:e.default?null:e.tag;return i&&r.push(s.directives.tagString(i)),r.join(" ")}function St(n,e,t,s){var l;if(H(n))return n.toString(e,t,s);if(Fe(n)){if(e.doc.directives)return n.toString(e);if((l=e.resolvedAliases)!=null&&l.has(n))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(n):e.resolvedAliases=new Set([n]),n=n.resolve(e.doc)}let r;const a=U(n)?n:e.doc.createNode(n,{onTagObj:c=>r=c});r||(r=ja(e.doc.schema.tags,a));const i=Ra(a,r,e);i.length>0&&(e.indentAtStart=(e.indentAtStart??0)+i.length+1);const o=typeof r.stringify=="function"?r.stringify(a,e,t,s):j(a)?Da(a,e,t,s):a.toString(e,t,s);return i?j(a)||o[0]==="{"||o[0]==="["?`${i} ${o}`:`${i}
${e.indent}${o}`:o}function Ha({key:n,value:e},t,s,r){const{allNullValues:a,doc:i,indent:o,indentStep:l,options:{commentString:c,indentSeq:u,simpleKeys:f}}=t;let d=U(n)&&n.comment||null;if(f){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(J(n)){const C="With simple keys, collection cannot be used as a key value";throw new Error(C)}}let h=!f&&(!n||d&&e==null&&!t.inFlow||J(n)||(j(n)?n.type===N.BLOCK_FOLDED||n.type===N.BLOCK_LITERAL:typeof n=="object"));t=Object.assign({},t,{allNullValues:!1,implicitKey:!h&&(f||!a),indent:o+l});let m=!1,p=!1,y=St(n,t,()=>m=!0,()=>p=!0);if(!h&&!t.inFlow&&y.length>1024){if(f)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");h=!0}if(t.inFlow){if(a||e==null)return m&&s&&s(),y===""?"?":h?`? ${y}`:y}else if(a&&!f||e==null&&h)return y=`? ${y}`,d&&!m?y+=De(y,t.indent,c(d)):p&&r&&r(),y;m&&(d=null),h?(d&&(y+=De(y,t.indent,c(d))),y=`? ${y}
${o}:`):(y=`${y}:`,d&&(y+=De(y,t.indent,c(d))));let v,w,k;U(e)?(v=!!e.spaceBefore,w=e.commentBefore,k=e.comment):(v=!1,w=null,k=null,e&&typeof e=="object"&&(e=i.createNode(e))),t.implicitKey=!1,!h&&!d&&j(e)&&(t.indentAtStart=y.length+1),p=!1,!u&&l.length>=2&&!t.inFlow&&!h&&kn(e)&&!e.flow&&!e.tag&&!e.anchor&&(t.indent=t.indent.substring(2));let b=!1;const M=St(e,t,()=>b=!0,()=>p=!0);let _=" ";if(d||v||w){if(_=v?`
`:"",w){const C=c(w);_+=`
${tt(C,t.indent)}`}M===""&&!t.inFlow?_===`
`&&(_=`

`):_+=`
${t.indent}`}else if(!h&&J(e)){const C=M[0],$=M.indexOf(`
`),I=$!==-1,z=t.inFlow??e.flow??e.items.length===0;if(I||!z){let F=!1;if(I&&(C==="&"||C==="!")){let T=M.indexOf(" ");C==="&"&&T!==-1&&T<$&&M[T+1]==="!"&&(T=M.indexOf(" ",T+1)),(T===-1||$<T)&&(F=!0)}F||(_=`
${t.indent}`)}}else(M===""||M[0]===`
`)&&(_="");return y+=_+M,t.inFlow?b&&s&&s():k&&!b?y+=De(y,t.indent,c(k)):p&&r&&r(),y}function Fa(n,e){(n==="debug"||n==="warn")&&(typeof process<"u"&&process.emitWarning?process.emitWarning(e):console.warn(e))}const Vn="<<";function ks(n,e,{key:t,value:s}){if(n!=null&&n.doc.schema.merge&&Va(t))if(s=Fe(s)?s.resolve(n.doc):s,kn(s))for(const r of s.items)zt(n,e,r);else if(Array.isArray(s))for(const r of s)zt(n,e,r);else zt(n,e,s);else{const r=te(t,"",n);if(e instanceof Map)e.set(r,te(s,r,n));else if(e instanceof Set)e.add(r);else{const a=Ga(t,r,n),i=te(s,a,n);a in e?Object.defineProperty(e,a,{value:i,writable:!0,enumerable:!0,configurable:!0}):e[a]=i}}return e}const Va=n=>n===Vn||j(n)&&n.value===Vn&&(!n.type||n.type===N.PLAIN);function zt(n,e,t){const s=n&&Fe(t)?t.resolve(n.doc):t;if(!gs(s))throw new Error("Merge sources must be maps or map aliases");const r=s.toJSON(null,n,Map);for(const[a,i]of r)e instanceof Map?e.has(a)||e.set(a,i):e instanceof Set?e.add(a):Object.prototype.hasOwnProperty.call(e,a)||Object.defineProperty(e,a,{value:i,writable:!0,enumerable:!0,configurable:!0});return e}function Ga(n,e,t){if(e===null)return"";if(typeof e!="object")return String(e);if(U(n)&&(t!=null&&t.doc)){const s=Na(t.doc,{});s.anchors=new Set;for(const a of t.anchors.keys())s.anchors.add(a.anchor);s.inFlow=!0,s.inStringifyKey=!0;const r=n.toString(s);if(!t.mapKeyWarned){let a=JSON.stringify(r);a.length>40&&(a=a.substring(0,36)+'..."'),Fa(t.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${a}. Set mapAsMap: true to use object keys.`),t.mapKeyWarned=!0}return r}return JSON.stringify(e)}function _n(n,e,t){const s=bt(n,void 0,t),r=bt(e,void 0,t);return new ie(s,r)}class ie{constructor(e,t=null){Object.defineProperty(this,ae,{value:ms}),this.key=e,this.value=t}clone(e){let{key:t,value:s}=this;return U(t)&&(t=t.clone(e)),U(s)&&(s=s.clone(e)),new ie(t,s)}toJSON(e,t){const s=t!=null&&t.mapAsMap?new Map:{};return ks(t,s,this)}toString(e,t,s){return e!=null&&e.doc?Ha(this,e,t,s):JSON.stringify(this)}}function bs(n,e,t){return(e.inFlow??n.flow?Wa:za)(n,e,t)}function za({comment:n,items:e},t,{blockItemPrefix:s,flowChars:r,itemIndent:a,onChompKeep:i,onComment:o}){const{indent:l,options:{commentString:c}}=t,u=Object.assign({},t,{indent:a,type:null});let f=!1;const d=[];for(let m=0;m<e.length;++m){const p=e[m];let y=null;if(U(p))!f&&p.spaceBefore&&d.push(""),_t(t,d,p.commentBefore,f),p.comment&&(y=p.comment);else if(H(p)){const w=U(p.key)?p.key:null;w&&(!f&&w.spaceBefore&&d.push(""),_t(t,d,w.commentBefore,f))}f=!1;let v=St(p,u,()=>y=null,()=>f=!0);y&&(v+=De(v,a,c(y))),f&&y&&(f=!1),d.push(s+v)}let h;if(d.length===0)h=r.start+r.end;else{h=d[0];for(let m=1;m<d.length;++m){const p=d[m];h+=p?`
${l}${p}`:`
`}}return n?(h+=`
`+tt(c(n),l),o&&o()):f&&i&&i(),h}function Wa({items:n},e,{flowChars:t,itemIndent:s}){const{indent:r,indentStep:a,flowCollectionPadding:i,options:{commentString:o}}=e;s+=a;const l=Object.assign({},e,{indent:s,inFlow:!0,type:null});let c=!1,u=0;const f=[];for(let m=0;m<n.length;++m){const p=n[m];let y=null;if(U(p))p.spaceBefore&&f.push(""),_t(e,f,p.commentBefore,!1),p.comment&&(y=p.comment);else if(H(p)){const w=U(p.key)?p.key:null;w&&(w.spaceBefore&&f.push(""),_t(e,f,w.commentBefore,!1),w.comment&&(c=!0));const k=U(p.value)?p.value:null;k?(k.comment&&(y=k.comment),k.commentBefore&&(c=!0)):p.value==null&&(w!=null&&w.comment)&&(y=w.comment)}y&&(c=!0);let v=St(p,l,()=>y=null);m<n.length-1&&(v+=","),y&&(v+=De(v,s,o(y))),!c&&(f.length>u||v.includes(`
`))&&(c=!0),f.push(v),u=f.length}const{start:d,end:h}=t;if(f.length===0)return d+h;if(!c){const m=f.reduce((p,y)=>p+y.length+2,2);c=e.options.lineWidth>0&&m>e.options.lineWidth}if(c){let m=d;for(const p of f)m+=p?`
${a}${r}${p}`:`
`;return`${m}
${r}${h}`}else return`${d}${i}${f.join(" ")}${i}${h}`}function _t({indent:n,options:{commentString:e}},t,s,r){if(s&&r&&(s=s.replace(/^\n+/,"")),s){const a=tt(e(s),n);t.push(a.trimStart())}}function Ce(n,e){const t=j(e)?e.value:e;for(const s of n)if(H(s)&&(s.key===e||s.key===t||j(s.key)&&s.key.value===t))return s}class Pe extends Sn{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(Te,e),this.items=[]}static from(e,t,s){const{keepUndefined:r,replacer:a}=s,i=new this(e),o=(l,c)=>{if(typeof a=="function")c=a.call(t,l,c);else if(Array.isArray(a)&&!a.includes(l))return;(c!==void 0||r)&&i.items.push(_n(l,c,s))};if(t instanceof Map)for(const[l,c]of t)o(l,c);else if(t&&typeof t=="object")for(const l of Object.keys(t))o(l,t[l]);return typeof e.sortMapEntries=="function"&&i.items.sort(e.sortMapEntries),i}add(e,t){var i;let s;H(e)?s=e:!e||typeof e!="object"||!("key"in e)?s=new ie(e,e==null?void 0:e.value):s=new ie(e.key,e.value);const r=Ce(this.items,s.key),a=(i=this.schema)==null?void 0:i.sortMapEntries;if(r){if(!t)throw new Error(`Key ${s.key} already set`);j(r.value)&&vs(s.value)?r.value.value=s.value:r.value=s.value}else if(a){const o=this.items.findIndex(l=>a(s,l)<0);o===-1?this.items.push(s):this.items.splice(o,0,s)}else this.items.push(s)}delete(e){const t=Ce(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){const s=Ce(this.items,e),r=s==null?void 0:s.value;return(!t&&j(r)?r.value:r)??void 0}has(e){return!!Ce(this.items,e)}set(e,t){this.add(new ie(e,t),!0)}toJSON(e,t,s){const r=s?new s:t!=null&&t.mapAsMap?new Map:{};t!=null&&t.onCreate&&t.onCreate(r);for(const a of this.items)ks(t,r,a);return r}toString(e,t,s){if(!e)return JSON.stringify(this);for(const r of this.items)if(!H(r))throw new Error(`Map items must all be pairs; found ${JSON.stringify(r)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),bs(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:s,onComment:t})}}class Ss extends Sn{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(nt,e),this.items=[]}add(e){this.items.push(e)}delete(e){const t=rt(e);return typeof t!="number"?!1:this.items.splice(t,1).length>0}get(e,t){const s=rt(e);if(typeof s!="number")return;const r=this.items[s];return!t&&j(r)?r.value:r}has(e){const t=rt(e);return typeof t=="number"&&t<this.items.length}set(e,t){const s=rt(e);if(typeof s!="number")throw new Error(`Expected a valid index, not ${e}.`);const r=this.items[s];j(r)&&vs(t)?r.value=t:this.items[s]=t}toJSON(e,t){const s=[];t!=null&&t.onCreate&&t.onCreate(s);let r=0;for(const a of this.items)s.push(te(a,String(r++),t));return s}toString(e,t,s){return e?bs(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:s,onComment:t}):JSON.stringify(this)}static from(e,t,s){const{replacer:r}=s,a=new this(e);if(t&&Symbol.iterator in Object(t)){let i=0;for(let o of t){if(typeof r=="function"){const l=t instanceof Set?o:String(i++);o=r.call(t,l,o)}a.items.push(bt(o,void 0,s))}}return a}}function rt(n){let e=j(n)?n.value:n;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}function Ba(n,e,t){const{replacer:s}=t,r=new Ss(n);r.tag="tag:yaml.org,2002:pairs";let a=0;if(e&&Symbol.iterator in Object(e))for(let i of e){typeof s=="function"&&(i=s.call(e,String(a++),i));let o,l;if(Array.isArray(i))if(i.length===2)o=i[0],l=i[1];else throw new TypeError(`Expected [key, value] tuple: ${i}`);else if(i&&i instanceof Object){const c=Object.keys(i);if(c.length===1)o=c[0],l=i[o];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else o=i;r.items.push(_n(o,l,t))}return r}class Mn extends Ss{constructor(){super(),this.add=Pe.prototype.add.bind(this),this.delete=Pe.prototype.delete.bind(this),this.get=Pe.prototype.get.bind(this),this.has=Pe.prototype.has.bind(this),this.set=Pe.prototype.set.bind(this),this.tag=Mn.tag}toJSON(e,t){if(!t)return super.toJSON(e);const s=new Map;t!=null&&t.onCreate&&t.onCreate(s);for(const r of this.items){let a,i;if(H(r)?(a=te(r.key,"",t),i=te(r.value,a,t)):a=te(r,"",t),s.has(a))throw new Error("Ordered maps must not include duplicate keys");s.set(a,i)}return s}static from(e,t,s){const r=Ba(e,t,s),a=new this;return a.items=r.items,a}}Mn.tag="tag:yaml.org,2002:omap";class An extends Pe{constructor(e){super(e),this.tag=An.tag}add(e){let t;H(e)?t=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?t=new ie(e.key,null):t=new ie(e,null),Ce(this.items,t.key)||this.items.push(t)}get(e,t){const s=Ce(this.items,e);return!t&&H(s)?j(s.key)?s.key.value:s.key:s}set(e,t){if(typeof t!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);const s=Ce(this.items,e);s&&!t?this.items.splice(this.items.indexOf(s),1):!s&&t&&this.items.push(new ie(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,s){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,s);throw new Error("Set items must all have null values")}static from(e,t,s){const{replacer:r}=s,a=new this(e);if(t&&Symbol.iterator in Object(t))for(let i of t)typeof r=="function"&&(i=r.call(t,i,i)),a.items.push(_n(i,null,s));return a}}An.tag="tag:yaml.org,2002:set";function Ua(n,e){if(!e||e==="all"||e==="*")return $n(1,n+1);if(e==="none")return[];const t=[];for(const s of e.split(/[,;]/g))if(!s.includes("-"))t.push(+s);else{const[r,a]=s.split("-",2);t.push(...$n(+r,a?+a+1:n+1))}return yr(t).filter(s=>s<=n).sort((s,r)=>s-r)}function Vo(){const n=L(Date.now()),e=Bs({interval:1e3}),t=g(()=>{const r=(e.value-n.value)/1e3,a=Math.floor(r%60).toString().padStart(2,"0");return`${Math.floor(r/60).toString().padStart(2,"0")}:${a}`});function s(){n.value=e.value}return{timer:t,resetTimer:s}}function Ln(n=5){const e=[],t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",s=t.length;for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*s)));return e.join("")}function Go(n,e,t,s){const r=Ua(e+t-1,n);for(let a=0;a<e;a++){const i=s(a),o=r.includes(a+t);for(const l of i)l.classList.toggle("slidev-code-highlighted",o),l.classList.toggle("slidev-code-dishonored",!o),l.classList.toggle("highlighted",o),l.classList.toggle("dishonored",!o)}}const qa="modulepreload",Ja=function(n){return"/genaiscript/slides/msr-eng-may2024/"+n},Gn={},P=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.all(t.map(o=>{if(o=Ja(o),o in Gn)return;Gn[o]=!0;const l=o.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":qa,l||(u.as="script",u.crossOrigin=""),u.href=o,i&&u.setAttribute("nonce",i),document.head.appendChild(u),l)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})},_s=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},Ka={},Ya={class:"px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono"};function Qa(n,e){return ns(),Us("div",Ya," An error occurred on this slide. Check the terminal for more information. ")}const Xa=_s(Ka,[["render",Qa],["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/layouts/error.vue"]]),G=Object.freeze(Object.defineProperty({__proto__:null,default:Xa},Symbol.toStringTag,{value:"Module"})),ue=A({theme:"default",title:"GenAIScript",titleTemplate:"%s",favicon:"https://microsoft.github.io/genaiscript/images/favicon.svg",info:`## GenAIScript
Scripting for Generative AI.<br/>
[Docs](https://microsoft.github.io/genaiscript/) | [GitHub](https://github.com/microsoft/genaiscript/) 
`,class:"text-center",highlighter:"shiki",drawings:{persist:!1},mdc:!0,layout:"center"}),Za=A({layout:g(()=>ue.layout),transition:g(()=>ue.transition),class:g(()=>ue.class),clicks:g(()=>ue.clicks),name:g(()=>ue.name),preload:g(()=>ue.preload),slide:{index:0,content:"",note:"",title:"GenAIScript",noteHTML:"",raw:"",frontmatter:ue,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",start:0,id:0,no:1},__clicksContext:null,__preloaded:!1}),fe=A({layout:"image-right",image:"/script-pl.png",backgroundSize:"75%"}),ei=A({layout:g(()=>fe.layout),transition:g(()=>fe.transition),class:g(()=>fe.class),clicks:g(()=>fe.clicks),name:g(()=>fe.name),preload:g(()=>fe.preload),slide:{index:1,importChain:[{raw:`---
src: pages/vision.md
---

`,content:"",frontmatter:{src:"pages/vision.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/vision.md"},frontmatterRaw:`src: pages/vision.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:1,start:37,contentStart:40,end:42,imports:[{raw:`---
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

`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vision.md",index:0,start:0,contentStart:6,end:23}]}],content:"",note:"",title:"Empower Users with AI-Enhanced Scripts",level:1,noteHTML:"",raw:"",frontmatter:fe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vision.md",start:0,id:1,no:2},__clicksContext:null,__preloaded:!1}),de=A({}),ti=A({layout:g(()=>de.layout),transition:g(()=>de.transition),class:g(()=>de.class),clicks:g(()=>de.clicks),name:g(()=>de.name),preload:g(()=>de.preload),slide:{index:2,importChain:[{raw:`---
src: pages/script.md
---
`,content:"",frontmatter:{src:"pages/script.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script.md"},frontmatterRaw:`src: pages/script.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:2,start:42,contentStart:45,end:46,imports:[{raw:`
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

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script.md",index:0,start:0,contentStart:0,end:40}]}],content:"",note:"",title:"Generative AI Scripting",level:1,noteHTML:"",raw:"",frontmatter:de,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script.md",start:0,id:2,no:3},__clicksContext:null,__preloaded:!1}),he=A({}),ni=A({layout:g(()=>he.layout),transition:g(()=>he.transition),class:g(()=>he.class),clicks:g(()=>he.clicks),name:g(()=>he.name),preload:g(()=>he.preload),slide:{index:3,importChain:[{raw:`---
src: pages/script-prompt.md
---
`,content:"",frontmatter:{src:"pages/script-prompt.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/script-prompt.md"},frontmatterRaw:`src: pages/script-prompt.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:3,start:46,contentStart:49,end:50,imports:[{raw:`
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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-prompt.md",index:0,start:0,contentStart:0,end:25}]}],content:"",note:"",title:"Context x Script = Prompt",level:1,noteHTML:"",raw:"",frontmatter:he,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/script-prompt.md",start:0,id:3,no:4},__clicksContext:null,__preloaded:!1}),pe=A({}),si=A({layout:g(()=>pe.layout),transition:g(()=>pe.transition),class:g(()=>pe.class),clicks:g(()=>pe.clicks),name:g(()=>pe.name),preload:g(()=>pe.preload),slide:{index:4,importChain:[{raw:`---
src: pages/system-scripts.md
---
`,content:"",frontmatter:{src:"pages/system-scripts.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/system-scripts.md"},frontmatterRaw:`src: pages/system-scripts.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:4,start:50,contentStart:53,end:54,imports:[{raw:`# System Scripts and Microformats

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-scripts.md",index:0,start:0,contentStart:0,end:22}]}],content:"",note:"",title:"System Scripts and Microformats",level:1,noteHTML:"",raw:"",frontmatter:pe,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/system-scripts.md",start:0,id:4,no:5},__clicksContext:null,__preloaded:!1}),me=A({}),ri=A({layout:g(()=>me.layout),transition:g(()=>me.transition),class:g(()=>me.class),clicks:g(()=>me.clicks),name:g(()=>me.name),preload:g(()=>me.preload),slide:{index:5,importChain:[{raw:`---
src: pages/llm-invocation.md
---
`,content:"",frontmatter:{src:"pages/llm-invocation.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/llm-invocation.md"},frontmatterRaw:`src: pages/llm-invocation.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:5,start:54,contentStart:57,end:58,imports:[{raw:`
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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/llm-invocation.md",index:0,start:0,contentStart:0,end:19}]}],content:"",note:"",title:"Prompt + LLM = Response",level:1,noteHTML:"",raw:"",frontmatter:me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/llm-invocation.md",start:0,id:5,no:6},__clicksContext:null,__preloaded:!1}),ge=A({}),ai=A({layout:g(()=>ge.layout),transition:g(()=>ge.transition),class:g(()=>ge.class),clicks:g(()=>ge.clicks),name:g(()=>ge.name),preload:g(()=>ge.preload),slide:{index:6,importChain:[{raw:`---
src: pages/response-processing.md
---
`,content:"",frontmatter:{src:"pages/response-processing.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/response-processing.md"},frontmatterRaw:`src: pages/response-processing.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:6,start:58,contentStart:61,end:62,imports:[{raw:`

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/response-processing.md",index:0,start:0,contentStart:0,end:24}]}],content:"",note:"",title:"Response x Parsers = Files + Data",level:1,noteHTML:"",raw:"",frontmatter:ge,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/response-processing.md",start:0,id:6,no:7},__clicksContext:null,__preloaded:!1}),ye=A({}),ii=A({layout:g(()=>ye.layout),transition:g(()=>ye.transition),class:g(()=>ye.class),clicks:g(()=>ye.clicks),name:g(()=>ye.name),preload:g(()=>ye.preload),slide:{index:7,importChain:[{raw:`---
src: pages/vscode.md
---
`,content:"",frontmatter:{src:"pages/vscode.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/vscode.md"},frontmatterRaw:`src: pages/vscode.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:7,start:62,contentStart:65,end:66,imports:[{raw:`# Dev Experience

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

</v-click>`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vscode.md",index:0,start:0,contentStart:0,end:28}]}],content:"",note:"",title:"Dev Experience",level:1,noteHTML:"",raw:"",frontmatter:ye,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/vscode.md",start:0,id:7,no:8},__clicksContext:null,__preloaded:!1}),ve=A({}),oi=A({layout:g(()=>ve.layout),transition:g(()=>ve.transition),class:g(()=>ve.class),clicks:g(()=>ve.clicks),name:g(()=>ve.name),preload:g(()=>ve.preload),slide:{index:8,importChain:[{raw:`---
src: pages/js-runtime.md
---
`,content:"",frontmatter:{src:"pages/js-runtime.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/js-runtime.md"},frontmatterRaw:`src: pages/js-runtime.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:8,start:66,contentStart:69,end:70,imports:[{raw:`
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

- Debugging Just Works™`,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/js-runtime.md",index:0,start:0,contentStart:0,end:25}]}],content:"",note:"",title:"JavaScript Runtime for GenAI",level:1,noteHTML:"",raw:"",frontmatter:ve,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/js-runtime.md",start:0,id:8,no:9},__clicksContext:null,__preloaded:!1}),we=A({}),li=A({layout:g(()=>we.layout),transition:g(()=>we.transition),class:g(()=>we.class),clicks:g(()=>we.clicks),name:g(()=>we.name),preload:g(()=>we.preload),slide:{index:9,importChain:[{raw:`---
src: pages/image-alt-text.md
---
`,content:"",frontmatter:{src:"pages/image-alt-text.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/image-alt-text.md"},frontmatterRaw:`src: pages/image-alt-text.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:9,start:70,contentStart:73,end:74,imports:[{raw:`# Example: Image Alt Text Generator

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/image-alt-text.md",index:0,start:0,contentStart:0,end:32}]}],content:"",note:"",title:"Example: Image Alt Text Generator",level:1,noteHTML:"",raw:"",frontmatter:we,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/image-alt-text.md",start:0,id:9,no:10},__clicksContext:null,__preloaded:!1}),ke=A({}),ci=A({layout:g(()=>ke.layout),transition:g(()=>ke.transition),class:g(()=>ke.class),clicks:g(()=>ke.clicks),name:g(()=>ke.name),preload:g(()=>ke.preload),slide:{index:10,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:10,start:74,contentStart:77,end:78,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Example: Translating MakeCode",level:1,noteHTML:"",raw:"",frontmatter:ke,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:0,id:10,no:11},__clicksContext:null,__preloaded:!1}),be=A({}),ui=A({layout:g(()=>be.layout),transition:g(()=>be.transition),class:g(()=>be.class),clicks:g(()=>be.clicks),name:g(()=>be.name),preload:g(()=>be.preload),slide:{index:11,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:10,start:74,contentStart:77,end:78,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Develop the script in VSCode",level:2,noteHTML:"",raw:"",frontmatter:be,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:29,id:11,no:12},__clicksContext:null,__preloaded:!1}),Se=A({}),fi=A({layout:g(()=>Se.layout),transition:g(()=>Se.transition),class:g(()=>Se.class),clicks:g(()=>Se.clicks),name:g(()=>Se.name),preload:g(()=>Se.preload),slide:{index:12,importChain:[{raw:`---
src: pages/makecode-translations.md
---
`,content:"",frontmatter:{src:"pages/makecode-translations.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/makecode-translations.md"},frontmatterRaw:`src: pages/makecode-translations.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:10,start:74,contentStart:77,end:78,imports:[{raw:`# Example: Translating MakeCode

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",index:2,start:59,contentStart:59,end:79}]}],content:"",note:"",title:"Automate with the CLI",level:2,noteHTML:"",raw:"",frontmatter:Se,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/makecode-translations.md",start:59,id:12,no:13},__clicksContext:null,__preloaded:!1}),_e=A({}),di=A({layout:g(()=>_e.layout),transition:g(()=>_e.transition),class:g(()=>_e.class),clicks:g(()=>_e.clicks),name:g(()=>_e.name),preload:g(()=>_e.preload),slide:{index:13,importChain:[{raw:`---
src: pages/tla-plus.md
---
`,content:"",frontmatter:{src:"pages/tla-plus.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/tla-plus.md"},frontmatterRaw:`src: pages/tla-plus.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:11,start:78,contentStart:81,end:82,imports:[{raw:`# Example: TLA+ Linter

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
\`\`\``,frontmatter:{},frontmatterDoc:null,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",index:0,start:0,contentStart:0,end:31}]}],content:"",note:"",title:"Example: TLA+ Linter",level:1,noteHTML:"",raw:"",frontmatter:_e,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/tla-plus.md",start:0,id:13,no:14},__clicksContext:null,__preloaded:!1}),Me=A({layout:"end"}),hi=A({layout:g(()=>Me.layout),transition:g(()=>Me.transition),class:g(()=>Me.class),clicks:g(()=>Me.clicks),name:g(()=>Me.name),preload:g(()=>Me.preload),slide:{index:14,importChain:[{raw:`---
src: pages/end.md
---
`,content:"",frontmatter:{src:"pages/end.md"},frontmatterStyle:"frontmatter",frontmatterDoc:{src:"pages/end.md"},frontmatterRaw:`src: pages/end.md
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/slides-msr-eng-may2024.md",index:12,start:82,contentStart:85,end:86,imports:[{raw:`---
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
`,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/end.md",index:0,start:0,contentStart:3,end:18}]}],content:"",note:"",title:"GenAIScript",level:1,noteHTML:"",raw:"",frontmatter:Me,filepath:"/home/runner/work/genaiscript/genaiscript/slides/pages/end.md",start:0,id:14,no:15},__clicksContext:null,__preloaded:!1}),pi=[{no:1,meta:Za,component:async()=>{try{return await P(()=>import("./slidev/1-BWFyOpM_.js"),__vite__mapDeps([0,1,2,3,4]))}catch(n){return console.error("Failed to load slide 1:",n),G}}},{no:2,meta:ei,component:async()=>{try{return await P(()=>import("./slidev/2-CzPReKq2.js"),__vite__mapDeps([5,6,1,2,3,4]))}catch(n){return console.error("Failed to load slide 2:",n),G}}},{no:3,meta:ti,component:async()=>{try{return await P(()=>import("./slidev/3-DCXMksJp.js"),__vite__mapDeps([7,6,1,2,8,9,10,3,4]))}catch(n){return console.error("Failed to load slide 3:",n),G}}},{no:4,meta:ni,component:async()=>{try{return await P(()=>import("./slidev/4-D0WF1fmk.js"),__vite__mapDeps([11,12,1,13,10,2,3,4]))}catch(n){return console.error("Failed to load slide 4:",n),G}}},{no:5,meta:si,component:async()=>{try{return await P(()=>import("./slidev/5-C2mpB-JB.js"),__vite__mapDeps([14,8,9,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 5:",n),G}}},{no:6,meta:ri,component:async()=>{try{return await P(()=>import("./slidev/6-YNvqTEsy.js"),__vite__mapDeps([15,12,1,13,10,2,3,4]))}catch(n){return console.error("Failed to load slide 6:",n),G}}},{no:7,meta:ai,component:async()=>{try{return await P(()=>import("./slidev/7-Cs0A5Yuc.js"),__vite__mapDeps([16,12,1,13,10,2,3,4]))}catch(n){return console.error("Failed to load slide 7:",n),G}}},{no:8,meta:ii,component:async()=>{try{return await P(()=>import("./slidev/8-Bv3kslws.js"),__vite__mapDeps([17,6,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 8:",n),G}}},{no:9,meta:oi,component:async()=>{try{return await P(()=>import("./slidev/9-Js17OZeh.js"),__vite__mapDeps([18,8,9,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 9:",n),G}}},{no:10,meta:li,component:async()=>{try{return await P(()=>import("./slidev/10-DnRp5ZVG.js"),__vite__mapDeps([19,8,9,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 10:",n),G}}},{no:11,meta:ci,component:async()=>{try{return await P(()=>import("./slidev/11-BNgE13v1.js"),__vite__mapDeps([20,1,10,2,3,4]))}catch(n){return console.error("Failed to load slide 11:",n),G}}},{no:12,meta:ui,component:async()=>{try{return await P(()=>import("./slidev/12-DpnFWZRA.js"),__vite__mapDeps([21,1,10,2,3,4]))}catch(n){return console.error("Failed to load slide 12:",n),G}}},{no:13,meta:fi,component:async()=>{try{return await P(()=>import("./slidev/13-CTNBEnip.js"),__vite__mapDeps([22,8,9,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 13:",n),G}}},{no:14,meta:di,component:async()=>{try{return await P(()=>import("./slidev/14-Dhdm5Jt2.js"),__vite__mapDeps([23,8,9,1,2,10,3,4]))}catch(n){return console.error("Failed to load slide 14:",n),G}}},{no:15,meta:hi,component:async()=>{try{return await P(()=>import("./slidev/15-CR5jU77M.js"),__vite__mapDeps([24,1,2,3,4,25]))}catch(n){return console.error("Failed to load slide 15:",n),G}}}],re=hn(pi);function Nt(n){return re.value.find(e=>{var t;return e.no===+n||((t=e.meta.slide)==null?void 0:t.frontmatter.routeAlias)===n})}function je(n,e){var s;(typeof n=="number"||typeof n=="string")&&(n=Nt(n));const t=((s=n.meta.slide)==null?void 0:s.frontmatter.routeAlias)??n.no;return e?`/presenter/${t}`:`/${t}`}function mi(n,e,{mode:t="replace"}={}){const s=Ot();return g({get(){const r=s.currentRoute.value.query[n];return r==null?e:Array.isArray(r)?r.filter(Boolean):r},set(r){vt(()=>{(s.currentRoute.value.query[n]??(e==null?void 0:e.toString()))!==r.toString()&&s[dn(t)]({query:{...s.currentRoute.value.query,[n]:`${r}`===e?void 0:r}})})}})}const en=L(0);function tn(n){if(n===!1||n==="false")return null;if(n==null||n===!0||n==="true")return"+1";if(typeof n=="string"&&"+-".includes(n[0]))return n;const e=+n;return Number.isNaN(e)?(console.error(`Invalid "at" prop value: ${n}`),null):e}function gi(n){return Array.isArray(n)?[tn(n[0]),tn(n[1])]:null}function Ms(n,e=0,t){const s={get current(){return Ze(+n.value,e,s.total)},set current(r){n.value=Ze(+r,e,s.total)},clicksStart:e,relativeOffsets:new Map,maxMap:qs(new Map),onMounted(){},calculateSince(r,a=1){const i=tn(r);if(i==null)return null;let o,l,c;if(typeof i=="string"){const u=s.currentOffset,f=+i;o=u+f,l=u+f+a-1,c=f+a-1}else o=i,l=i+a-1,c=0;return{start:o,end:+Number.POSITIVE_INFINITY,max:l,delta:c,currentOffset:g(()=>s.current-o),isCurrent:g(()=>s.current===o),isActive:g(()=>s.current>=o)}},calculateRange(r){const a=gi(r);if(a==null)return null;const[i,o]=a;let l,c,u;return typeof i=="string"?(l=s.currentOffset+ +i,u=+i):(l=i,u=0),typeof o=="string"?(c=l+ +o,u+=+o):c=o,{start:l,end:c,max:c,delta:u,currentOffset:g(()=>s.current-l),isCurrent:g(()=>s.current===l),isActive:g(()=>l<=s.current&&s.current<c)}},calculate(r){return Array.isArray(r)?s.calculateRange(r):s.calculateSince(r)},register(r,a){if(!a)return;const{delta:i,max:o}=a;s.relativeOffsets.set(r,i),s.maxMap.set(r,o)},unregister(r){s.relativeOffsets.delete(r),s.maxMap.delete(r)},get currentOffset(){return en.value,pr(...s.relativeOffsets.values())},get total(){return en.value,t??Math.max(0,...s.maxMap.values())}};return s}function yi(n,e=0){var s,r;const t=((s=n==null?void 0:n.meta.slide)==null?void 0:s.frontmatter.clicksStart)??0;return Ms(L(Math.max(e,t)),t,(r=n==null?void 0:n.meta)==null?void 0:r.clicks)}const vi={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function wi(n,e=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let t=n.name.includes("|")?n.name:vi[n.name]||n.name;if(t.includes("|")){const[s,r]=t.split("|").map(a=>a.trim());t=e?r:s}if(t)return{...n,name:t}}function ki(n,e,t){var r,a;let s=n>0?(r=t==null?void 0:t.meta)==null?void 0:r.transition:(a=e==null?void 0:e.meta)==null?void 0:a.transition;return s||(s=x.transition),wi(s,n<0)}function As(n,e,t=1){var r,a,i,o,l,c,u,f,d;const s=(a=(r=e.meta)==null?void 0:r.slide)==null?void 0:a.level;s&&s>t&&n.length>0?As(n[n.length-1].children,e,t+1):n.push({no:e.no,children:[],level:t,path:je(((o=(i=e.meta.slide)==null?void 0:i.frontmatter)==null?void 0:o.routeAlias)??e.no,!1),hideInToc:!!((u=(c=(l=e.meta)==null?void 0:l.slide)==null?void 0:c.frontmatter)!=null&&u.hideInToc),title:(d=(f=e.meta)==null?void 0:f.slide)==null?void 0:d.title})}function Ls(n,e,t=!1,s,r){return n.map(a=>{const i={...a,active:a.no===(r==null?void 0:r.value),hasActiveParent:t};return i.children.length>0&&(i.children=Ls(i.children,e,i.active||i.hasActiveParent,i,r)),s&&(i.active||i.activeParent)&&(s.activeParent=!0),i})}function Cs(n,e=1){return n.filter(t=>!t.hideInToc).map(t=>({...t,children:Cs(t.children,e+1)}))}function bi(n,e,t){const s=g(()=>n.value.filter(a=>{var i,o;return(o=(i=a.meta)==null?void 0:i.slide)==null?void 0:o.title}).reduce((a,i)=>(As(a,i),a),[])),r=g(()=>Ls(s.value,t.value,void 0,void 0,e));return g(()=>Cs(r.value))}function Si(n,e,t=L(0),s,r,a){const i=g(()=>re.value.length),o=L(0),l=L(0),c=g(()=>je(n.value,s.value)),u=g(()=>n.value.no),f=g(()=>{var O;return((O=n.value.meta)==null?void 0:O.layout)||(u.value===1?"cover":"default")}),d=g(()=>e.value.current),h=g(()=>e.value.clicksStart),m=g(()=>e.value.total),p=g(()=>re.value[Math.min(re.value.length,u.value+1)-1]),y=g(()=>re.value[Math.max(1,u.value-1)-1]),v=g(()=>u.value<re.value.length||d.value<m.value),w=g(()=>u.value>1||d.value>0),k=g(()=>ki(o.value,n.value,y.value));Q(n,(O,R)=>{o.value=O.no-R.no});async function b(O){return!1}const M=bi(re,u,n);async function _(){l.value=1,m.value<=t.value?await $():t.value+=1}async function C(){l.value=-1,t.value<=h.value?await I(!0):t.value-=1}async function $(O=!1){l.value=1,u.value<re.value.length&&await T(u.value+1,O&&!r.value?dt:void 0)}async function I(O=!1){l.value=-1,u.value>1&&await T(u.value-1,O&&!r.value?dt:void 0)}function z(){return T(1)}function F(){return T(i.value)}async function T(O,R=0,se=!1){var ce,Ge,ze;yn.value=!1;const Ve=u.value!==O,Z=R!==t.value,K=(ce=Nt(O))==null?void 0:ce.meta,D=((Ge=K==null?void 0:K.slide)==null?void 0:Ge.frontmatter.clicksStart)??0;R=Ze(R,D,((ze=K==null?void 0:K.__clicksContext)==null?void 0:ze.total)??dt),(se||Ve||Z)&&await(a==null?void 0:a.push({path:je(O,s.value),query:{...a.currentRoute.value.query,clicks:R===0?void 0:R.toString(),embedded:location.search.includes("embedded")?"true":void 0}}))}function E(){a==null||a.push({path:je(u.value,!0),query:{...a.currentRoute.value.query}})}function V(){a==null||a.push({path:je(u.value,!1),query:{...a.currentRoute.value.query}})}return{slides:re,total:i,currentPath:c,currentSlideNo:u,currentPage:u,currentSlideRoute:n,currentLayout:f,currentTransition:k,clicksDirection:l,nextRoute:p,prevRoute:y,clicksContext:e,clicks:d,clicksStart:h,clicksTotal:m,hasNext:v,hasPrev:w,tocTree:M,navDirection:o,openInEditor:b,next:_,prev:C,go:T,goLast:F,goFirst:z,nextSlide:$,prevSlide:I,enterPresenter:E,exitPresenter:V}}const _i=ss(()=>{const n=Ot(),e=g(()=>n.currentRoute.value),t=g(()=>(n.currentRoute.value.query,new URLSearchParams(location.search))),s=g(()=>t.value.has("print")),r=g(()=>t.value.get("print")==="clicks"),a=g(()=>t.value.has("embedded")),i=g(()=>e.value.name==="play"),o=g(()=>e.value.name==="presenter"),l=g(()=>e.value.name==="notes"),c=g(()=>!o.value&&(!x.remote||t.value.get("password")===x.remote)),u=Js(i,o),f=g(()=>{var v;return u.value?((v=Nt(e.value.params.no))==null?void 0:v.no)??1:1}),d=g(()=>re.value[f.value-1]),h=mi("clicks","0"),m=g(()=>y(d.value)),p=g({get(){let v=+(h.value||0);return Number.isNaN(v)&&(v=0),v},set(v){yn.value=!1,h.value=v.toString()}});function y(v){var b,M;if((b=v==null?void 0:v.meta)!=null&&b.__clicksContext)return v.meta.__clicksContext;const w=v.no,k=Ms(g({get(){return f.value===w?Math.max(+(h.value??0),k.clicksStart):f.value>w?dt:k.clicksStart},set(_){f.value===w&&(h.value=Ze(_,k.clicksStart,k.total).toString())}}),((M=v==null?void 0:v.meta.slide)==null?void 0:M.frontmatter.clicksStart)??0,v==null?void 0:v.meta.clicks);return k.onMounted=()=>{f.value===w&&(h.value=Ze(+h.value,k.clicksStart,k.total).toString())},v!=null&&v.meta&&(v.meta.__clicksContext=k),k}return{router:n,currentRoute:e,isPrintMode:s,isPrintWithClicks:r,isEmbedded:a,isPlaying:i,isPresenter:o,isNotesViewer:l,isPresenterAvailable:c,hasPrimarySlide:u,currentSlideNo:f,currentSlideRoute:d,clicksContext:m,queryClicksRaw:h,queryClicks:p,getPrimaryClicks:y}}),nn=ss(()=>{const n=_i(),e=Ot(),t=Si(n.currentSlideRoute,n.clicksContext,n.queryClicks,n.isPresenter,n.isPrintMode,e);return Q([t.total,n.currentRoute],async()=>{const s=n.currentRoute.value.params.no;n.hasPrimarySlide.value&&!Nt(s)&&(s&&s!=="index.html"?await t.go(t.total.value,0,!0):await t.go(1,0,!0))},{flush:"pre",immediate:!0}),{...t,...n}}),zn=Ks(),Wt=ne("slidev-color-schema","auto"),Wn=g(()=>x.colorSchema!=="auto"),Ts=g({get(){return Wn.value?x.colorSchema==="dark":Wt.value==="auto"?zn.value:Wt.value==="dark"},set(n){Wn.value||(Wt.value=n===zn.value?"auto":n?"dark":"light")}}),zo=rs(Ts);$t&&Q(Ts,n=>{const e=document.querySelector("html");e.classList.toggle("dark",n),e.classList.toggle("light",!n)},{immediate:!0});const Mi=[];function Ai(){const n=ts().appContext.app,e=A({nav:nn(),configs:x,themeConfigs:g(()=>x.themeConfig)});n.provide(gn,L("none")),n.provide(va,e),n.provide(mn,g(()=>e.nav.currentSlideNo)),n.provide(Et,hn(yi()));for(const u of Mi)u();const{clicksContext:t,currentSlideNo:s,hasPrimarySlide:r,isNotesViewer:a,isPresenter:i}=nn();la({title:Rt,htmlAttrs:x.htmlAttrs}),da(`${Rt} - shared`),ga(`${Rt} - drawings`);const o=`${location.origin}_${Ln()}`;function l(){a.value||!i.value&&!ba.includes(location.host.split(":")[0])||(i.value?(We("page",+s.value),We("clicks",t.value.current)):(We("viewerPage",+s.value),We("viewerClicks",t.value.current)),We("lastUpdate",{id:o,type:i.value?"presenter":"viewer",time:new Date().getTime()}))}const c=Ot();c.afterEach(l),Q(t,l),ha(u=>{var f;r.value&&((f=u.lastUpdate)==null?void 0:f.type)==="presenter"&&(+u.page!=+s.value||+t.value.current!=+u.clicks)&&(yn.value=!1,c.replace({path:je(u.page,i.value),query:{...c.currentRoute.value.query,clicks:u.clicks||0}}))})}const Li=Ys({__name:"App",setup(n){return Ai(),Re(()=>{for(const[e,t]of Object.entries(br.value))document.body.style.setProperty(e,t.toString())}),(e,t)=>{const s=Qs("RouterView");return ns(),Xs(s)}}}),Ci=_s(Li,[["__file","/home/runner/work/genaiscript/genaiscript/node_modules/@slidev/client/App.vue"]]);function Wo(n,e=""){var r,a;const t=["slidev-page",e],s=(a=(r=n==null?void 0:n.meta)==null?void 0:r.slide)==null?void 0:a.no;return s!=null&&t.push(`slidev-page-${s}`),t.filter(Boolean).join(" ")}async function Bo(){const{saveAs:n}=await P(()=>import("./modules/file-saver-EUMWMpoS.js").then(e=>e.F),[]);n(typeof x.download=="string"?x.download:x.exportFilename?`${x.exportFilename}.pdf`:"/genaiscript/slides/msr-eng-may2024/slidev-exported.pdf",`${x.title}.pdf`)}function He(n,e,t){var s;return((s=n.instance)==null?void 0:s.$).provides[e]??t}function Ti(){return{install(n){n.directive("click",{name:"v-click",mounted(e,t){const s=gt(e,t,t.value);s!=null&&(e.classList.toggle(ft,!0),e.dataset.slidevClicksStart=String(s.start),Number.isFinite(s.end)&&(e.dataset.slidevClicksEnd=String(s.end)),e.watchStopHandle=Re(()=>{const r=s.isActive.value,a=s.isCurrent.value,i=r&&!a;s.flagHide?(e.classList.toggle(s.flagFade?Ue:Be,r),e.classList.toggle(Ft,r)):e.classList.toggle(s.flagFade?Ue:Be,!r),e.classList.toggle(Vt,a),e.classList.toggle(Gt,i)}))},unmounted:Bt}),n.directive("after",{name:"v-after",mounted(e,t){const s=gt(e,t,"+0");s!=null&&(e.classList.toggle(ft,!0),e.watchStopHandle=Re(()=>{const r=s.isActive.value,a=s.isCurrent.value,i=r&&!a;s.flagHide?(e.classList.toggle(s.flagFade?Ue:Be,r),e.classList.toggle(Ft,r)):e.classList.toggle(s.flagFade?Ue:Be,!r),e.classList.toggle(Vt,a),e.classList.toggle(Gt,i)}))},unmounted:Bt}),n.directive("click-hide",{name:"v-click-hide",mounted(e,t){const s=gt(e,t,t.value,!0);s!=null&&(e.classList.toggle(ft,!0),e.watchStopHandle=Re(()=>{const r=s.isActive.value,a=s.isCurrent.value,i=r&&!a;e.classList.toggle(s.flagFade?Ue:Be,r),e.classList.toggle(Ft,r),e.classList.toggle(Vt,a),e.classList.toggle(Gt,i)}))},unmounted:Bt})}}}const Os=new Map;function gt(n,e,t,s=!1){var f;const r=(f=He(e,Et))==null?void 0:f.value;if(!n||!r)return null;const a=s||e.modifiers.hide!==!1&&e.modifiers.hide!=null,i=e.modifiers.fade!==!1&&e.modifiers.fade!=null,o=r.calculate(t);if(!o)return null;r.register(n,o);const l=g(()=>a?!o.isActive.value:o.isActive.value),c=g(()=>l.value?"shown":Number.isFinite(o.end)?r.current<o.start?"before":"after":a?"after":"before"),u={...o,isShown:l,visibilityState:c,flagFade:i,flagHide:a};return Os.set(n,u),u}function Bt(n,e){var s,r;n.classList.toggle(ft,!1);const t=(s=He(e,Et))==null?void 0:s.value;t==null||t.unregister(n),(r=n.watchStopHandle)==null||r.call(n)}function $s(){return Math.floor(Math.random()*2**31)}class Oi{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function sn(n,e,t){if(n&&n.length){const[s,r]=e,a=Math.PI/180*t,i=Math.cos(a),o=Math.sin(a);for(const l of n){const[c,u]=l;l[0]=(c-s)*i-(u-r)*o+s,l[1]=(c-s)*o+(u-r)*i+r}}}function $i(n,e,t){const s=[];n.forEach(r=>s.push(...r)),sn(s,e,t)}function Ei(n,e){return n[0]===e[0]&&n[1]===e[1]}function Pi(n,e,t,s=1){const r=t,a=Math.max(e,.1),i=n[0]&&n[0][0]&&typeof n[0][0]=="number"?[n]:n,o=[0,0];if(r)for(const c of i)sn(c,o,r);const l=xi(i,a,s);if(r){for(const c of i)sn(c,o,-r);$i(l,o,-r)}return l}function xi(n,e,t){const s=[];for(const c of n){const u=[...c];Ei(u[0],u[u.length-1])||u.push([u[0][0],u[0][1]]),u.length>2&&s.push(u)}const r=[];e=Math.max(e,.1);const a=[];for(const c of s)for(let u=0;u<c.length-1;u++){const f=c[u],d=c[u+1];if(f[1]!==d[1]){const h=Math.min(f[1],d[1]);a.push({ymin:h,ymax:Math.max(f[1],d[1]),x:h===f[1]?f[0]:d[0],islope:(d[0]-f[0])/(d[1]-f[1])})}}if(a.sort((c,u)=>c.ymin<u.ymin?-1:c.ymin>u.ymin?1:c.x<u.x?-1:c.x>u.x?1:c.ymax===u.ymax?0:(c.ymax-u.ymax)/Math.abs(c.ymax-u.ymax)),!a.length)return r;let i=[],o=a[0].ymin,l=0;for(;i.length||a.length;){if(a.length){let c=-1;for(let f=0;f<a.length&&!(a[f].ymin>o);f++)c=f;a.splice(0,c+1).forEach(f=>{i.push({s:o,edge:f})})}if(i=i.filter(c=>!(c.edge.ymax<=o)),i.sort((c,u)=>c.edge.x===u.edge.x?0:(c.edge.x-u.edge.x)/Math.abs(c.edge.x-u.edge.x)),(t!==1||l%e===0)&&i.length>1)for(let c=0;c<i.length;c=c+2){const u=c+1;if(u>=i.length)break;const f=i[c].edge,d=i[u].edge;r.push([[Math.round(f.x),o],[Math.round(d.x),o]])}o+=t,i.forEach(c=>{c.edge.x=c.edge.x+t*c.edge.islope}),l++}return r}function st(n,e){var t;const s=e.hachureAngle+90;let r=e.hachureGap;r<0&&(r=e.strokeWidth*4),r=Math.round(Math.max(r,.1));let a=1;return e.roughness>=1&&(((t=e.randomizer)===null||t===void 0?void 0:t.next())||Math.random())>.7&&(a=r),Pi(n,r,s,a||1)}class Cn{constructor(e){this.helper=e}fillPolygons(e,t){return this._fillPolygons(e,t)}_fillPolygons(e,t){const s=st(e,t);return{type:"fillSketch",ops:this.renderLines(s,t)}}renderLines(e,t){const s=[];for(const r of e)s.push(...this.helper.doubleLineOps(r[0][0],r[0][1],r[1][0],r[1][1],t));return s}}function jt(n){const e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}class Ii extends Cn{fillPolygons(e,t){let s=t.hachureGap;s<0&&(s=t.strokeWidth*4),s=Math.max(s,.1);const r=Object.assign({},t,{hachureGap:s}),a=st(e,r),i=Math.PI/180*t.hachureAngle,o=[],l=s*.5*Math.cos(i),c=s*.5*Math.sin(i);for(const[f,d]of a)jt([f,d])&&o.push([[f[0]-l,f[1]+c],[...d]],[[f[0]+l,f[1]-c],[...d]]);return{type:"fillSketch",ops:this.renderLines(o,t)}}}class Di extends Cn{fillPolygons(e,t){const s=this._fillPolygons(e,t),r=Object.assign({},t,{hachureAngle:t.hachureAngle+90}),a=this._fillPolygons(e,r);return s.ops=s.ops.concat(a.ops),s}}class Ni{constructor(e){this.helper=e}fillPolygons(e,t){t=Object.assign({},t,{hachureAngle:0});const s=st(e,t);return this.dotsOnLines(s,t)}dotsOnLines(e,t){const s=[];let r=t.hachureGap;r<0&&(r=t.strokeWidth*4),r=Math.max(r,.1);let a=t.fillWeight;a<0&&(a=t.strokeWidth/2);const i=r/4;for(const o of e){const l=jt(o),c=l/r,u=Math.ceil(c)-1,f=l-u*r,d=(o[0][0]+o[1][0])/2-r/4,h=Math.min(o[0][1],o[1][1]);for(let m=0;m<u;m++){const p=h+f+m*r,y=d-i+Math.random()*2*i,v=p-i+Math.random()*2*i,w=this.helper.ellipse(y,v,a,a,t);s.push(...w.ops)}}return{type:"fillSketch",ops:s}}}class ji{constructor(e){this.helper=e}fillPolygons(e,t){const s=st(e,t);return{type:"fillSketch",ops:this.dashedLine(s,t)}}dashedLine(e,t){const s=t.dashOffset<0?t.hachureGap<0?t.strokeWidth*4:t.hachureGap:t.dashOffset,r=t.dashGap<0?t.hachureGap<0?t.strokeWidth*4:t.hachureGap:t.dashGap,a=[];return e.forEach(i=>{const o=jt(i),l=Math.floor(o/(s+r)),c=(o+r-l*(s+r))/2;let u=i[0],f=i[1];u[0]>f[0]&&(u=i[1],f=i[0]);const d=Math.atan((f[1]-u[1])/(f[0]-u[0]));for(let h=0;h<l;h++){const m=h*(s+r),p=m+s,y=[u[0]+m*Math.cos(d)+c*Math.cos(d),u[1]+m*Math.sin(d)+c*Math.sin(d)],v=[u[0]+p*Math.cos(d)+c*Math.cos(d),u[1]+p*Math.sin(d)+c*Math.sin(d)];a.push(...this.helper.doubleLineOps(y[0],y[1],v[0],v[1],t))}}),a}}class Ri{constructor(e){this.helper=e}fillPolygons(e,t){const s=t.hachureGap<0?t.strokeWidth*4:t.hachureGap,r=t.zigzagOffset<0?s:t.zigzagOffset;t=Object.assign({},t,{hachureGap:s+r});const a=st(e,t);return{type:"fillSketch",ops:this.zigzagLines(a,r,t)}}zigzagLines(e,t,s){const r=[];return e.forEach(a=>{const i=jt(a),o=Math.round(i/(2*t));let l=a[0],c=a[1];l[0]>c[0]&&(l=a[1],c=a[0]);const u=Math.atan((c[1]-l[1])/(c[0]-l[0]));for(let f=0;f<o;f++){const d=f*2*t,h=(f+1)*2*t,m=Math.sqrt(2*Math.pow(t,2)),p=[l[0]+d*Math.cos(u),l[1]+d*Math.sin(u)],y=[l[0]+h*Math.cos(u),l[1]+h*Math.sin(u)],v=[p[0]+m*Math.cos(u+Math.PI/4),p[1]+m*Math.sin(u+Math.PI/4)];r.push(...this.helper.doubleLineOps(p[0],p[1],v[0],v[1],s),...this.helper.doubleLineOps(v[0],v[1],y[0],y[1],s))}}),r}}const W={};function Hi(n,e){let t=n.fillStyle||"hachure";if(!W[t])switch(t){case"zigzag":W[t]||(W[t]=new Ii(e));break;case"cross-hatch":W[t]||(W[t]=new Di(e));break;case"dots":W[t]||(W[t]=new Ni(e));break;case"dashed":W[t]||(W[t]=new ji(e));break;case"zigzag-line":W[t]||(W[t]=new Ri(e));break;case"hachure":default:t="hachure",W[t]||(W[t]=new Cn(e));break}return W[t]}const Fi=0,rn=1,Es=2,at={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function Vi(n){const e=new Array;for(;n!=="";)if(n.match(/^([ \t\r\n,]+)/))n=n.substr(RegExp.$1.length);else if(n.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:Fi,text:RegExp.$1},n=n.substr(RegExp.$1.length);else if(n.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))e[e.length]={type:rn,text:`${parseFloat(RegExp.$1)}`},n=n.substr(RegExp.$1.length);else return[];return e[e.length]={type:Es,text:""},e}function Ut(n,e){return n.type===e}function Tn(n){const e=[],t=Vi(n);let s="BOD",r=0,a=t[r];for(;!Ut(a,Es);){let i=0;const o=[];if(s==="BOD")if(a.text==="M"||a.text==="m")r++,i=at[a.text],s=a.text;else return Tn("M0,0"+n);else Ut(a,rn)?i=at[s]:(r++,i=at[a.text],s=a.text);if(r+i<t.length){for(let l=r;l<r+i;l++){const c=t[l];if(Ut(c,rn))o[o.length]=+c.text;else throw new Error("Param not a number: "+s+","+c.text)}if(typeof at[s]=="number"){const l={key:s,data:o};e.push(l),r+=i,a=t[r],s==="M"&&(s="L"),s==="m"&&(s="l")}else throw new Error("Bad segment: "+s)}else throw new Error("Path data ended short")}return e}function Ps(n){let e=0,t=0,s=0,r=0;const a=[];for(const{key:i,data:o}of n)switch(i){case"M":a.push({key:"M",data:[...o]}),[e,t]=o,[s,r]=o;break;case"m":e+=o[0],t+=o[1],a.push({key:"M",data:[e,t]}),s=e,r=t;break;case"L":a.push({key:"L",data:[...o]}),[e,t]=o;break;case"l":e+=o[0],t+=o[1],a.push({key:"L",data:[e,t]});break;case"C":a.push({key:"C",data:[...o]}),e=o[4],t=o[5];break;case"c":{const l=o.map((c,u)=>u%2?c+t:c+e);a.push({key:"C",data:l}),e=l[4],t=l[5];break}case"Q":a.push({key:"Q",data:[...o]}),e=o[2],t=o[3];break;case"q":{const l=o.map((c,u)=>u%2?c+t:c+e);a.push({key:"Q",data:l}),e=l[2],t=l[3];break}case"A":a.push({key:"A",data:[...o]}),e=o[5],t=o[6];break;case"a":e+=o[5],t+=o[6],a.push({key:"A",data:[o[0],o[1],o[2],o[3],o[4],e,t]});break;case"H":a.push({key:"H",data:[...o]}),e=o[0];break;case"h":e+=o[0],a.push({key:"H",data:[e]});break;case"V":a.push({key:"V",data:[...o]}),t=o[0];break;case"v":t+=o[0],a.push({key:"V",data:[t]});break;case"S":a.push({key:"S",data:[...o]}),e=o[2],t=o[3];break;case"s":{const l=o.map((c,u)=>u%2?c+t:c+e);a.push({key:"S",data:l}),e=l[2],t=l[3];break}case"T":a.push({key:"T",data:[...o]}),e=o[0],t=o[1];break;case"t":e+=o[0],t+=o[1],a.push({key:"T",data:[e,t]});break;case"Z":case"z":a.push({key:"Z",data:[]}),e=s,t=r;break}return a}function xs(n){const e=[];let t="",s=0,r=0,a=0,i=0,o=0,l=0;for(const{key:c,data:u}of n){switch(c){case"M":e.push({key:"M",data:[...u]}),[s,r]=u,[a,i]=u;break;case"C":e.push({key:"C",data:[...u]}),s=u[4],r=u[5],o=u[2],l=u[3];break;case"L":e.push({key:"L",data:[...u]}),[s,r]=u;break;case"H":s=u[0],e.push({key:"L",data:[s,r]});break;case"V":r=u[0],e.push({key:"L",data:[s,r]});break;case"S":{let f=0,d=0;t==="C"||t==="S"?(f=s+(s-o),d=r+(r-l)):(f=s,d=r),e.push({key:"C",data:[f,d,...u]}),o=u[0],l=u[1],s=u[2],r=u[3];break}case"T":{const[f,d]=u;let h=0,m=0;t==="Q"||t==="T"?(h=s+(s-o),m=r+(r-l)):(h=s,m=r);const p=s+2*(h-s)/3,y=r+2*(m-r)/3,v=f+2*(h-f)/3,w=d+2*(m-d)/3;e.push({key:"C",data:[p,y,v,w,f,d]}),o=h,l=m,s=f,r=d;break}case"Q":{const[f,d,h,m]=u,p=s+2*(f-s)/3,y=r+2*(d-r)/3,v=h+2*(f-h)/3,w=m+2*(d-m)/3;e.push({key:"C",data:[p,y,v,w,h,m]}),o=f,l=d,s=h,r=m;break}case"A":{const f=Math.abs(u[0]),d=Math.abs(u[1]),h=u[2],m=u[3],p=u[4],y=u[5],v=u[6];f===0||d===0?(e.push({key:"C",data:[s,r,y,v,y,v]}),s=y,r=v):(s!==y||r!==v)&&(Is(s,r,y,v,f,d,h,m,p).forEach(function(k){e.push({key:"C",data:k})}),s=y,r=v);break}case"Z":e.push({key:"Z",data:[]}),s=a,r=i;break}t=c}return e}function Gi(n){return Math.PI*n/180}function qe(n,e,t){const s=n*Math.cos(t)-e*Math.sin(t),r=n*Math.sin(t)+e*Math.cos(t);return[s,r]}function Is(n,e,t,s,r,a,i,o,l,c){const u=Gi(i);let f=[],d=0,h=0,m=0,p=0;if(c)[d,h,m,p]=c;else{[n,e]=qe(n,e,-u),[t,s]=qe(t,s,-u);const T=(n-t)/2,E=(e-s)/2;let V=T*T/(r*r)+E*E/(a*a);V>1&&(V=Math.sqrt(V),r=V*r,a=V*a);const O=o===l?-1:1,R=r*r,se=a*a,Ve=R*se-R*E*E-se*T*T,Z=R*E*E+se*T*T,K=O*Math.sqrt(Math.abs(Ve/Z));m=K*r*E/a+(n+t)/2,p=K*-a*T/r+(e+s)/2,d=Math.asin(parseFloat(((e-p)/a).toFixed(9))),h=Math.asin(parseFloat(((s-p)/a).toFixed(9))),n<m&&(d=Math.PI-d),t<m&&(h=Math.PI-h),d<0&&(d=Math.PI*2+d),h<0&&(h=Math.PI*2+h),l&&d>h&&(d=d-Math.PI*2),!l&&h>d&&(h=h-Math.PI*2)}let y=h-d;if(Math.abs(y)>Math.PI*120/180){const T=h,E=t,V=s;l&&h>d?h=d+Math.PI*120/180*1:h=d+Math.PI*120/180*-1,t=m+r*Math.cos(h),s=p+a*Math.sin(h),f=Is(t,s,E,V,r,a,i,0,l,[h,T,m,p])}y=h-d;const v=Math.cos(d),w=Math.sin(d),k=Math.cos(h),b=Math.sin(h),M=Math.tan(y/4),_=4/3*r*M,C=4/3*a*M,$=[n,e],I=[n+_*w,e-C*v],z=[t+_*b,s-C*k],F=[t,s];if(I[0]=2*$[0]-I[0],I[1]=2*$[1]-I[1],c)return[I,z,F].concat(f);{f=[I,z,F].concat(f);const T=[];for(let E=0;E<f.length;E+=3){const V=qe(f[E][0],f[E][1],u),O=qe(f[E+1][0],f[E+1][1],u),R=qe(f[E+2][0],f[E+2][1],u);T.push([V[0],V[1],O[0],O[1],R[0],R[1]])}return T}}const zi={randOffset:Ui,randOffsetWithRange:qi,ellipse:an,doubleLineOps:Ji};function Y(n,e,t,s,r){return{type:"path",ops:le(n,e,t,s,r)}}function Xe(n,e,t){const s=(n||[]).length;if(s>2){const r=[];for(let a=0;a<s-1;a++)r.push(...le(n[a][0],n[a][1],n[a+1][0],n[a+1][1],t));return e&&r.push(...le(n[s-1][0],n[s-1][1],n[0][0],n[0][1],t)),{type:"path",ops:r}}else if(s===2)return Y(n[0][0],n[0][1],n[1][0],n[1][1],t);return{type:"path",ops:[]}}function Wi(n,e){return Xe(n,!0,e)}function Ds(n,e,t,s,r){const a=[[n,e],[n+t,e],[n+t,e+s],[n,e+s]];return Wi(a,r)}function Bn(n,e){if(n.length){const s=typeof n[0][0]=="number"?[n]:n,r=it(s[0],1*(1+e.roughness*.2),e),a=e.disableMultiStroke?[]:it(s[0],1.5*(1+e.roughness*.22),Jn(e));for(let i=1;i<s.length;i++){const o=s[i];if(o.length){const l=it(o,1*(1+e.roughness*.2),e),c=e.disableMultiStroke?[]:it(o,1.5*(1+e.roughness*.22),Jn(e));for(const u of l)u.op!=="move"&&r.push(u);for(const u of c)u.op!=="move"&&a.push(u)}}return{type:"path",ops:r.concat(a)}}return{type:"path",ops:[]}}function an(n,e,t,s,r){const a=Ns(t,s,r);return on(n,e,r,a).opset}function Ns(n,e,t){const s=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),r=Math.ceil(Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*s)),a=Math.PI*2/r;let i=Math.abs(n/2),o=Math.abs(e/2);const l=1-t.curveFitting;return i+=S(i*l,t),o+=S(o*l,t),{increment:a,rx:i,ry:o}}function on(n,e,t,s){const[r,a]=Kn(s.increment,n,e,s.rx,s.ry,1,s.increment*Mt(.1,Mt(.4,1,t),t),t);let i=At(r,null,t);if(!t.disableMultiStroke&&t.roughness!==0){const[o]=Kn(s.increment,n,e,s.rx,s.ry,1.5,0,t),l=At(o,null,t);i=i.concat(l)}return{estimatedPoints:a,opset:{type:"path",ops:i}}}function Un(n,e,t,s,r,a,i,o,l){const c=n,u=e;let f=Math.abs(t/2),d=Math.abs(s/2);f+=S(f*.01,l),d+=S(d*.01,l);let h=r,m=a;for(;h<0;)h+=Math.PI*2,m+=Math.PI*2;m-h>Math.PI*2&&(h=0,m=Math.PI*2);const p=Math.PI*2/l.curveStepCount,y=Math.min(p/2,(m-h)/2),v=Yn(y,c,u,f,d,h,m,1,l);if(!l.disableMultiStroke){const w=Yn(y,c,u,f,d,h,m,1.5,l);v.push(...w)}return i&&(o?v.push(...le(c,u,c+f*Math.cos(h),u+d*Math.sin(h),l),...le(c,u,c+f*Math.cos(m),u+d*Math.sin(m),l)):v.push({op:"lineTo",data:[c,u]},{op:"lineTo",data:[c+f*Math.cos(h),u+d*Math.sin(h)]})),{type:"path",ops:v}}function qn(n,e){const t=xs(Ps(Tn(n))),s=[];let r=[0,0],a=[0,0];for(const{key:i,data:o}of t)switch(i){case"M":{a=[o[0],o[1]],r=[o[0],o[1]];break}case"L":s.push(...le(a[0],a[1],o[0],o[1],e)),a=[o[0],o[1]];break;case"C":{const[l,c,u,f,d,h]=o;s.push(...Ki(l,c,u,f,d,h,a,e)),a=[d,h];break}case"Z":s.push(...le(a[0],a[1],r[0],r[1],e)),a=[r[0],r[1]];break}return{type:"path",ops:s}}function qt(n,e){const t=[];for(const s of n)if(s.length){const r=e.maxRandomnessOffset||0,a=s.length;if(a>2){t.push({op:"move",data:[s[0][0]+S(r,e),s[0][1]+S(r,e)]});for(let i=1;i<a;i++)t.push({op:"lineTo",data:[s[i][0]+S(r,e),s[i][1]+S(r,e)]})}}return{type:"fillPath",ops:t}}function xe(n,e){return Hi(e,zi).fillPolygons(n,e)}function Bi(n,e,t,s,r,a,i){const o=n,l=e;let c=Math.abs(t/2),u=Math.abs(s/2);c+=S(c*.01,i),u+=S(u*.01,i);let f=r,d=a;for(;f<0;)f+=Math.PI*2,d+=Math.PI*2;d-f>Math.PI*2&&(f=0,d=Math.PI*2);const h=(d-f)/i.curveStepCount,m=[];for(let p=f;p<=d;p=p+h)m.push([o+c*Math.cos(p),l+u*Math.sin(p)]);return m.push([o+c*Math.cos(d),l+u*Math.sin(d)]),m.push([o,l]),xe([m],i)}function Ui(n,e){return S(n,e)}function qi(n,e,t){return Mt(n,e,t)}function Ji(n,e,t,s,r){return le(n,e,t,s,r,!0)}function Jn(n){const e=Object.assign({},n);return e.randomizer=void 0,n.seed&&(e.seed=n.seed+1),e}function js(n){return n.randomizer||(n.randomizer=new Oi(n.seed||0)),n.randomizer.next()}function Mt(n,e,t,s=1){return t.roughness*s*(js(t)*(e-n)+n)}function S(n,e,t=1){return Mt(-n,n,e,t)}function le(n,e,t,s,r,a=!1){const i=a?r.disableMultiStrokeFill:r.disableMultiStroke,o=ln(n,e,t,s,r,!0,!1);if(i)return o;const l=ln(n,e,t,s,r,!0,!0);return o.concat(l)}function ln(n,e,t,s,r,a,i){const o=Math.pow(n-t,2)+Math.pow(e-s,2),l=Math.sqrt(o);let c=1;l<200?c=1:l>500?c=.4:c=-.0016668*l+1.233334;let u=r.maxRandomnessOffset||0;u*u*100>o&&(u=l/10);const f=u/2,d=.2+js(r)*.2;let h=r.bowing*r.maxRandomnessOffset*(s-e)/200,m=r.bowing*r.maxRandomnessOffset*(n-t)/200;h=S(h,r,c),m=S(m,r,c);const p=[],y=()=>S(f,r,c),v=()=>S(u,r,c),w=r.preserveVertices;return i?p.push({op:"move",data:[n+(w?0:y()),e+(w?0:y())]}):p.push({op:"move",data:[n+(w?0:S(u,r,c)),e+(w?0:S(u,r,c))]}),i?p.push({op:"bcurveTo",data:[h+n+(t-n)*d+y(),m+e+(s-e)*d+y(),h+n+2*(t-n)*d+y(),m+e+2*(s-e)*d+y(),t+(w?0:y()),s+(w?0:y())]}):p.push({op:"bcurveTo",data:[h+n+(t-n)*d+v(),m+e+(s-e)*d+v(),h+n+2*(t-n)*d+v(),m+e+2*(s-e)*d+v(),t+(w?0:v()),s+(w?0:v())]}),p}function it(n,e,t){if(!n.length)return[];const s=[];s.push([n[0][0]+S(e,t),n[0][1]+S(e,t)]),s.push([n[0][0]+S(e,t),n[0][1]+S(e,t)]);for(let r=1;r<n.length;r++)s.push([n[r][0]+S(e,t),n[r][1]+S(e,t)]),r===n.length-1&&s.push([n[r][0]+S(e,t),n[r][1]+S(e,t)]);return At(s,null,t)}function At(n,e,t){const s=n.length,r=[];if(s>3){const a=[],i=1-t.curveTightness;r.push({op:"move",data:[n[1][0],n[1][1]]});for(let o=1;o+2<s;o++){const l=n[o];a[0]=[l[0],l[1]],a[1]=[l[0]+(i*n[o+1][0]-i*n[o-1][0])/6,l[1]+(i*n[o+1][1]-i*n[o-1][1])/6],a[2]=[n[o+1][0]+(i*n[o][0]-i*n[o+2][0])/6,n[o+1][1]+(i*n[o][1]-i*n[o+2][1])/6],a[3]=[n[o+1][0],n[o+1][1]],r.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}}else s===3?(r.push({op:"move",data:[n[1][0],n[1][1]]}),r.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):s===2&&r.push(...ln(n[0][0],n[0][1],n[1][0],n[1][1],t,!0,!0));return r}function Kn(n,e,t,s,r,a,i,o){const l=o.roughness===0,c=[],u=[];if(l){n=n/4,u.push([e+s*Math.cos(-n),t+r*Math.sin(-n)]);for(let f=0;f<=Math.PI*2;f=f+n){const d=[e+s*Math.cos(f),t+r*Math.sin(f)];c.push(d),u.push(d)}u.push([e+s*Math.cos(0),t+r*Math.sin(0)]),u.push([e+s*Math.cos(n),t+r*Math.sin(n)])}else{const f=S(.5,o)-Math.PI/2;u.push([S(a,o)+e+.9*s*Math.cos(f-n),S(a,o)+t+.9*r*Math.sin(f-n)]);const d=Math.PI*2+f-.01;for(let h=f;h<d;h=h+n){const m=[S(a,o)+e+s*Math.cos(h),S(a,o)+t+r*Math.sin(h)];c.push(m),u.push(m)}u.push([S(a,o)+e+s*Math.cos(f+Math.PI*2+i*.5),S(a,o)+t+r*Math.sin(f+Math.PI*2+i*.5)]),u.push([S(a,o)+e+.98*s*Math.cos(f+i),S(a,o)+t+.98*r*Math.sin(f+i)]),u.push([S(a,o)+e+.9*s*Math.cos(f+i*.5),S(a,o)+t+.9*r*Math.sin(f+i*.5)])}return[u,c]}function Yn(n,e,t,s,r,a,i,o,l){const c=a+S(.1,l),u=[];u.push([S(o,l)+e+.9*s*Math.cos(c-n),S(o,l)+t+.9*r*Math.sin(c-n)]);for(let f=c;f<=i;f=f+n)u.push([S(o,l)+e+s*Math.cos(f),S(o,l)+t+r*Math.sin(f)]);return u.push([e+s*Math.cos(i),t+r*Math.sin(i)]),u.push([e+s*Math.cos(i),t+r*Math.sin(i)]),At(u,null,l)}function Ki(n,e,t,s,r,a,i,o){const l=[],c=[o.maxRandomnessOffset||1,(o.maxRandomnessOffset||1)+.3];let u=[0,0];const f=o.disableMultiStroke?1:2,d=o.preserveVertices;for(let h=0;h<f;h++)h===0?l.push({op:"move",data:[i[0],i[1]]}):l.push({op:"move",data:[i[0]+(d?0:S(c[0],o)),i[1]+(d?0:S(c[0],o))]}),u=d?[r,a]:[r+S(c[h],o),a+S(c[h],o)],l.push({op:"bcurveTo",data:[n+S(c[h],o),e+S(c[h],o),t+S(c[h],o),s+S(c[h],o),u[0],u[1]]});return l}function Je(n){return[...n]}function Qn(n,e=0){const t=n.length;if(t<3)throw new Error("A curve must have at least three points.");const s=[];if(t===3)s.push(Je(n[0]),Je(n[1]),Je(n[2]),Je(n[2]));else{const r=[];r.push(n[0],n[0]);for(let o=1;o<n.length;o++)r.push(n[o]),o===n.length-1&&r.push(n[o]);const a=[],i=1-e;s.push(Je(r[0]));for(let o=1;o+2<r.length;o++){const l=r[o];a[0]=[l[0],l[1]],a[1]=[l[0]+(i*r[o+1][0]-i*r[o-1][0])/6,l[1]+(i*r[o+1][1]-i*r[o-1][1])/6],a[2]=[r[o+1][0]+(i*r[o][0]-i*r[o+2][0])/6,r[o+1][1]+(i*r[o][1]-i*r[o+2][1])/6],a[3]=[r[o+1][0],r[o+1][1]],s.push(a[1],a[2],a[3])}}return s}function Yi(n,e){return Math.sqrt(yt(n,e))}function yt(n,e){return Math.pow(n[0]-e[0],2)+Math.pow(n[1]-e[1],2)}function Qi(n,e,t){const s=yt(e,t);if(s===0)return yt(n,e);let r=((n[0]-e[0])*(t[0]-e[0])+(n[1]-e[1])*(t[1]-e[1]))/s;return r=Math.max(0,Math.min(1,r)),yt(n,Le(e,t,r))}function Le(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t]}function Xi(n,e){const t=n[e+0],s=n[e+1],r=n[e+2],a=n[e+3];let i=3*s[0]-2*t[0]-a[0];i*=i;let o=3*s[1]-2*t[1]-a[1];o*=o;let l=3*r[0]-2*a[0]-t[0];l*=l;let c=3*r[1]-2*a[1]-t[1];return c*=c,i<l&&(i=l),o<c&&(o=c),i+o}function cn(n,e,t,s){const r=s||[];if(Xi(n,e)<t){const a=n[e+0];r.length?Yi(r[r.length-1],a)>1&&r.push(a):r.push(a),r.push(n[e+3])}else{const i=n[e+0],o=n[e+1],l=n[e+2],c=n[e+3],u=Le(i,o,.5),f=Le(o,l,.5),d=Le(l,c,.5),h=Le(u,f,.5),m=Le(f,d,.5),p=Le(h,m,.5);cn([i,u,h,p],0,t,r),cn([p,m,d,c],0,t,r)}return r}function Zi(n,e){return Lt(n,0,n.length,e)}function Lt(n,e,t,s,r){const a=r||[],i=n[e],o=n[t-1];let l=0,c=1;for(let u=e+1;u<t-1;++u){const f=Qi(n[u],i,o);f>l&&(l=f,c=u)}return Math.sqrt(l)>s?(Lt(n,e,c+1,s,a),Lt(n,c,t,s,a)):(a.length||a.push(i),a.push(o)),a}function un(n,e=.15,t){const s=[],r=(n.length-1)/3;for(let a=0;a<r;a++){const i=a*3;cn(n,i,e,s)}return t&&t>0?Lt(s,0,s.length,t):s}function eo(n,e,t){const s=Tn(n),r=xs(Ps(s)),a=[];let i=[],o=[0,0],l=[];const c=()=>{l.length>=4&&i.push(...un(l,e)),l=[]},u=()=>{c(),i.length&&(a.push(i),i=[])};for(const{key:d,data:h}of r)switch(d){case"M":u(),o=[h[0],h[1]],i.push(o);break;case"L":c(),i.push([h[0],h[1]]);break;case"C":if(!l.length){const m=i.length?i[i.length-1]:o;l.push([m[0],m[1]])}l.push([h[0],h[1]]),l.push([h[2],h[3]]),l.push([h[4],h[5]]);break;case"Z":c(),i.push([o[0],o[1]]);break}if(u(),!t)return a;const f=[];for(const d of a){const h=Zi(d,t);h.length&&f.push(h)}return f}const q="none";class to{constructor(e){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1,fillShapeRoughnessGain:.8},this.config=e||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return $s()}_o(e){return e?Object.assign({},this.defaultOptions,e):this.defaultOptions}_d(e,t,s){return{shape:e,sets:t||[],options:s||this.defaultOptions}}line(e,t,s,r,a){const i=this._o(a);return this._d("line",[Y(e,t,s,r,i)],i)}rectangle(e,t,s,r,a){const i=this._o(a),o=[],l=Ds(e,t,s,r,i);if(i.fill){const c=[[e,t],[e+s,t],[e+s,t+r],[e,t+r]];i.fillStyle==="solid"?o.push(qt([c],i)):o.push(xe([c],i))}return i.stroke!==q&&o.push(l),this._d("rectangle",o,i)}ellipse(e,t,s,r,a){const i=this._o(a),o=[],l=Ns(s,r,i),c=on(e,t,i,l);if(i.fill)if(i.fillStyle==="solid"){const u=on(e,t,i,l).opset;u.type="fillPath",o.push(u)}else o.push(xe([c.estimatedPoints],i));return i.stroke!==q&&o.push(c.opset),this._d("ellipse",o,i)}circle(e,t,s,r){const a=this.ellipse(e,t,s,s,r);return a.shape="circle",a}linearPath(e,t){const s=this._o(t);return this._d("linearPath",[Xe(e,!1,s)],s)}arc(e,t,s,r,a,i,o=!1,l){const c=this._o(l),u=[],f=Un(e,t,s,r,a,i,o,!0,c);if(o&&c.fill)if(c.fillStyle==="solid"){const d=Object.assign({},c);d.disableMultiStroke=!0;const h=Un(e,t,s,r,a,i,!0,!1,d);h.type="fillPath",u.push(h)}else u.push(Bi(e,t,s,r,a,i,c));return c.stroke!==q&&u.push(f),this._d("arc",u,c)}curve(e,t){const s=this._o(t),r=[],a=Bn(e,s);if(s.fill&&s.fill!==q)if(s.fillStyle==="solid"){const i=Bn(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));r.push({type:"fillPath",ops:this._mergedShape(i.ops)})}else{const i=[],o=e;if(o.length){const c=typeof o[0][0]=="number"?[o]:o;for(const u of c)u.length<3?i.push(...u):u.length===3?i.push(...un(Qn([u[0],u[0],u[1],u[2]]),10,(1+s.roughness)/2)):i.push(...un(Qn(u),10,(1+s.roughness)/2))}i.length&&r.push(xe([i],s))}return s.stroke!==q&&r.push(a),this._d("curve",r,s)}polygon(e,t){const s=this._o(t),r=[],a=Xe(e,!0,s);return s.fill&&(s.fillStyle==="solid"?r.push(qt([e],s)):r.push(xe([e],s))),s.stroke!==q&&r.push(a),this._d("polygon",r,s)}path(e,t){const s=this._o(t),r=[];if(!e)return this._d("path",r,s);e=(e||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const a=s.fill&&s.fill!=="transparent"&&s.fill!==q,i=s.stroke!==q,o=!!(s.simplification&&s.simplification<1),l=o?4-4*(s.simplification||1):(1+s.roughness)/2,c=eo(e,1,l),u=qn(e,s);if(a)if(s.fillStyle==="solid")if(c.length===1){const f=qn(e,Object.assign(Object.assign({},s),{disableMultiStroke:!0,roughness:s.roughness?s.roughness+s.fillShapeRoughnessGain:0}));r.push({type:"fillPath",ops:this._mergedShape(f.ops)})}else r.push(qt(c,s));else r.push(xe(c,s));return i&&(o?c.forEach(f=>{r.push(Xe(f,!1,s))}):r.push(u)),this._d("path",r,s)}opsToPath(e,t){let s="";for(const r of e.ops){const a=typeof t=="number"&&t>=0?r.data.map(i=>+i.toFixed(t)):r.data;switch(r.op){case"move":s+=`M${a[0]} ${a[1]} `;break;case"bcurveTo":s+=`C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;break;case"lineTo":s+=`L${a[0]} ${a[1]} `;break}}return s.trim()}toPaths(e){const t=e.sets||[],s=e.options||this.defaultOptions,r=[];for(const a of t){let i=null;switch(a.type){case"path":i={d:this.opsToPath(a),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:q};break;case"fillPath":i={d:this.opsToPath(a),stroke:q,strokeWidth:0,fill:s.fill||q};break;case"fillSketch":i=this.fillSketch(a,s);break}i&&r.push(i)}return r}fillSketch(e,t){let s=t.fillWeight;return s<0&&(s=t.strokeWidth/2),{d:this.opsToPath(e),stroke:t.fill||q,strokeWidth:s,fill:q}}_mergedShape(e){return e.filter((t,s)=>s===0?!0:t.op!=="move")}}const Rs="http://www.w3.org/2000/svg",no=800;let Jt=null;function so(){return Jt||(Jt=new to().defaultOptions),Jt}function Kt(n,e,t){return{...so(),maxRandomnessOffset:2,roughness:n==="highlight"?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,disableMultiStroke:n!=="double",disableMultiStrokeFill:!1,seed:e,...t}}function ro(n){const e=n.padding;if(e||e===0){if(typeof e=="number")return[e,e,e,e];if(Array.isArray(e)){const t=e;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}function ao(n,e,t,s,r,a){const i=[];let o=t.strokeWidth||2;const l=ro(t),c=t.animate===void 0?!0:!!t.animate,u=t.iterations||2,f=t.rtl?1:0,d=Kt("single",a,t);switch(t.type){case"underline":{const h=e.y+e.h+l[2];for(let m=f;m<u+f;m++)m%2?i.push(Y(e.x+e.w,h,e.x,h,d)):i.push(Y(e.x,h,e.x+e.w,h,d));break}case"strike-through":{const h=e.y+e.h/2;for(let m=f;m<u+f;m++)m%2?i.push(Y(e.x+e.w,h,e.x,h,d)):i.push(Y(e.x,h,e.x+e.w,h,d));break}case"box":{const h=e.x-l[3],m=e.y-l[0],p=e.w+(l[1]+l[3]),y=e.h+(l[0]+l[2]);for(let v=0;v<u;v++)i.push(Ds(h,m,p,y,d));break}case"bracket":{const h=Array.isArray(t.brackets)?t.brackets:t.brackets?[t.brackets]:["right"],m=e.x-l[3]*2,p=e.x+e.w+l[1]*2,y=e.y-l[0]*2,v=e.y+e.h+l[2]*2;for(const w of h){let k;switch(w){case"bottom":k=[[m,e.y+e.h],[m,v],[p,v],[p,e.y+e.h]];break;case"top":k=[[m,e.y],[m,y],[p,y],[p,e.y]];break;case"left":k=[[e.x,y],[m,y],[m,v],[e.x,v]];break;case"right":k=[[e.x+e.w,y],[p,y],[p,v],[e.x+e.w,v]];break}k&&i.push(Xe(k,!1,d))}break}case"crossed-off":{const h=e.x,m=e.y,p=h+e.w,y=m+e.h;for(let v=f;v<u+f;v++)v%2?i.push(Y(p,y,h,m,d)):i.push(Y(h,m,p,y,d));for(let v=f;v<u+f;v++)v%2?i.push(Y(h,y,p,m,d)):i.push(Y(p,m,h,y,d));break}case"circle":{const h=Kt("double",a,t),m=e.w+(l[1]+l[3]),p=e.h+(l[0]+l[2]),y=e.x-l[3]+m/2,v=e.y-l[0]+p/2,w=Math.floor(u/2),k=u-w*2;for(let b=0;b<w;b++)i.push(an(y,v,m,p,h));for(let b=0;b<k;b++)i.push(an(y,v,m,p,d));break}case"highlight":{const h=Kt("highlight",a,t);o=e.h*.95;const m=e.y+e.h/2;for(let p=f;p<u+f;p++)p%2?i.push(Y(e.x+e.w,m,e.x,m,h)):i.push(Y(e.x,m,e.x+e.w,m,h));break}}if(i.length){const h=io(i),m=[],p=[];let y=0;const v=(w,k,b)=>w.setAttribute(k,b);for(const w of h){const k=document.createElementNS(Rs,"path");if(v(k,"d",w),v(k,"fill","none"),v(k,"stroke",t.color||"currentColor"),v(k,"stroke-width",`${o}`),t.opacity!==void 0&&v(k,"style",`opacity:${t.opacity}`),c){const b=k.getTotalLength();m.push(b),y+=b}n.appendChild(k),p.push(k)}if(c){let w=0;for(let k=0;k<p.length;k++){const b=p[k],M=m[k],_=y?r*(M/y):0,C=s+w,$=b.style;$.strokeDashoffset=`${M}`,$.strokeDasharray=`${M}`,$.animation=`rough-notation-dash ${_}ms ease-out ${C}ms forwards`,w+=_}return Xn(r+s)}}return Xn(0)}function Xn(n){return new Promise(e=>setTimeout(e,n))}function io(n){const e=[];for(const t of n){let s="";for(const r of t.ops){const a=r.data;switch(r.op){case"move":s.trim()&&e.push(s.trim()),s=`M${a[0]} ${a[1]} `;break;case"bcurveTo":s+=`C${a[0]} ${a[1]}, ${a[2]} ${a[3]}, ${a[4]} ${a[5]} `;break;case"lineTo":s+=`L${a[0]} ${a[1]} `;break}}s.trim()&&e.push(s.trim())}return e}function oo(){if(!window.__rno_kf_s){const n=window.__rno_kf_s=document.createElement("style");n.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(n)}}var lo=Object.defineProperty,co=(n,e,t)=>e in n?lo(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ee=(n,e,t)=>(co(n,typeof e!="symbol"?e+"":e,t),t);class uo{constructor(e,t){ee(this,"_state","unattached"),ee(this,"_config"),ee(this,"_resizing",!1),ee(this,"_ro"),ee(this,"_seed",$s()),ee(this,"_e"),ee(this,"_svg"),ee(this,"_lastSizes",[]),ee(this,"_animationDelay",0),ee(this,"_resizeListener",()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,this._state==="showing"&&this.haveRectsChanged()&&this.show()},400))}),ee(this,"pendingRefresh"),this._e=e,this._config=JSON.parse(JSON.stringify(t)),this.attach()}getConfig(e){return this._config[e]}setConfig(e,t){this._config[e]!==t&&(this._config[e]=t,this.refresh())}get animate(){return this._config.animate}set animate(e){this._config.animate=e}get animationDuration(){return this._config.animationDuration}set animationDuration(e){this._config.animationDuration=e}get iterations(){return this._config.iterations}set iterations(e){this._config.iterations=e}get color(){return this._config.color}set color(e){this._config.color!==e&&(this._config.color=e,this.refresh())}get class(){return this._config.class}set class(e){this._config.class!==e&&(this._config.class=e,this._svg&&this._svg.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" ")))}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(e){this._config.strokeWidth!==e&&(this._config.strokeWidth=e,this.refresh())}get padding(){return this._config.padding}set padding(e){this._config.padding!==e&&(this._config.padding=e,this.refresh())}attach(){if(this._state==="unattached"&&this._e.parentElement){oo();const e=this._svg=document.createElementNS(Rs,"svg");e.setAttribute("class",["rough-annotation",this._config.class||""].filter(Boolean).join(" "));const t=e.style;t.position="absolute",t.top="0",t.left="0",t.overflow="visible",t.pointerEvents="none",t.width="100px",t.height="100px";const s=this._config.type==="highlight";if(this._e.insertAdjacentElement(s?"beforebegin":"afterend",e),this._state="not-showing",s){const r=window.getComputedStyle(this._e).position;(!r||r==="static")&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(e=>{for(const t of e)t.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const e=this.rects();if(e.length===this._lastSizes.length){for(let t=0;t<e.length;t++)if(!this.isSameRect(e[t],this._lastSizes[t]))return!0}else return!0}return!1}isSameRect(e,t){const s=(r,a)=>Math.round(r)===Math.round(a);return s(e.x,t.x)&&s(e.y,t.y)&&s(e.w,t.w)&&s(e.h,t.h)}isShowing(){return this._state!=="not-showing"}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}async show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&await this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&await this.render(this._svg,!1);break}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}async render(e,t){let s=this._config;t&&(s=JSON.parse(JSON.stringify(this._config)),s.animate=!1);const r=this.rects();let a=0;r.forEach(c=>a+=c.w);const i=s.animationDuration||no;let o=0;const l=[];for(let c=0;c<r.length;c++){const u=r[c],f=i*(u.w/a);l.push(ao(e,r[c],s,o+this._animationDelay+(this._config.delay||0),f,this._seed)),o+=f}return this._lastSizes=r,this._state="showing",await Promise.all(l)}rects(){const e=[];if(this._svg)if(this._config.multiline){const t=this._e.getClientRects();for(let s=0;s<t.length;s++)e.push(this.svgRect(this._svg,t[s]))}else e.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return e}svgRect(e,t){const s=e.getBoundingClientRect(),r=t;return{x:(r.x||r.left)-(s.x||s.left),y:(r.y||r.top)-(s.y||s.top),w:r.width,h:r.height}}}function fo(n,e){return new uo(n,e)}function B(n,e){return n.class=[n.class,e].filter(Boolean).join(" "),n}const Zn={box:n=>Object.assign(n,{type:"box"}),circle:n=>Object.assign(n,{type:"circle"}),underline:n=>Object.assign(n,{type:"underline"}),highlight:n=>Object.assign(n,{type:"highlight"}),"strike-through":n=>Object.assign(n,{type:"strike-through"}),"crossed-off":n=>Object.assign(n,{type:"crossed-off"}),bracket:n=>Object.assign(n,{type:"bracket"}),strike:n=>Object.assign(n,{type:"strike-through"}),cross:n=>Object.assign(n,{type:"crossed-off"}),crossed:n=>Object.assign(n,{type:"crossed-off"}),linethrough:n=>Object.assign(n,{type:"strike-through"}),"line-through":n=>Object.assign(n,{type:"strike-through"}),black:n=>B(n,"text-black"),blue:n=>B(n,"text-blue"),cyan:n=>B(n,"text-cyan"),gray:n=>B(n,"text-gray"),green:n=>B(n,"text-green"),indigo:n=>B(n,"text-indigo"),lime:n=>B(n,"text-lime"),orange:n=>B(n,"text-orange"),pink:n=>B(n,"text-pink"),purple:n=>B(n,"text-purple"),red:n=>B(n,"text-red"),teal:n=>B(n,"text-teal"),white:n=>B(n,"text-white"),yellow:n=>B(n,"text-yellow")},ho=[[/^delay-?(\d+)?$/,(n,e,t)=>{const s=(n[1]?Number.parseInt(n[1]):t)||300;return e.delay=s,e}],[/^(?:op|opacity)-?(\d+)?$/,(n,e,t)=>{const s=(n[1]?Number.parseInt(n[1]):t)||100;return e.opacity=s/100,e}]];function po(){return{install(n){n.directive("mark",{name:"v-mark",mounted:(e,t)=>{const s=g(()=>{const i=typeof t.value=="object"&&!Array.isArray(t.value)?{...t.value}:{at:t.value};let o={at:i.at};const l=Object.entries(t.modifiers).filter(([u,f])=>{if(Zn[u])return o=Zn[u](o,f),!1;for(const[d,h]of ho){const m=u.match(d);if(m)return o=h(m,o,f),!1}return!0});l.length&&console.warn("[Slidev] Invalid modifiers for v-mark:",l);const c={...o,...i};return c.type||(c.type="underline"),c}),r=fo(e,s.value),a=gt(e,t,s.value.at);if(!a){r.show();return}e.watchStopHandle=Re(()=>{let i;s.value.class&&(r.class=s.value.class),s.value.color&&(r.color=s.value.color);const o=s.value.at;o===!0?i=!0:o===!1?i=!1:i=a.isActive.value,i!=null&&(i?r.show():r.hide())})},unmounted:e=>{var t;(t=e.watchStopHandle)==null||t.call(e)}})}}}const Uo=L(!1),qo=L(!1),Jo=L(!1),mo=L(!1),Ko=L(!0),Yo=Zs({xs:460,...rr}),Ct=er(),Qo=tr(),Xo=g(()=>Ct.height.value-Ct.width.value/as.value>120),Zo=nr($t?document.body:null),fn=sr(),el=g(()=>{var n,e;return["INPUT","TEXTAREA"].includes(((n=fn.value)==null?void 0:n.tagName)||"")||((e=fn.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),tl=g(()=>{var n;return["BUTTON","A"].includes(((n=fn.value)==null?void 0:n.tagName)||"")});ne("slidev-camera","default",{listenToStorageChanges:!1});ne("slidev-mic","default",{listenToStorageChanges:!1});const go=ne("slidev-scale",0),nl=ne("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),yo=ne("slidev-show-editor",!1,{listenToStorageChanges:!1}),vo=ne("slidev-editor-vertical",!1,{listenToStorageChanges:!1}),wo=ne("slidev-editor-width",$t?window.innerWidth*.4:318,{listenToStorageChanges:!1}),ko=ne("slidev-editor-height",$t?window.innerHeight*.4:300,{listenToStorageChanges:!1}),ot=hn(null),Tt=ne("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),lt=ne("slidev-presenter-layout",1,{listenToStorageChanges:!1});function sl(){lt.value=lt.value+1,lt.value>2&&(lt.value=1)}function rl(){Tt.value=Math.min(2,Tt.value+.1)}function al(){Tt.value=Math.max(.5,Tt.value-.1)}const il=rs(mo);function bo(n=es(ps,L())){const e=ar(n),t=Q([yo,vo,wo,ko,go,Ct.width,Ct.height],()=>{setTimeout(e.update,300)},{flush:"post",immediate:!0});return{...e,stop:t}}function So(n){return()=>{}}function _o(n,e,t,s){var K;function r(D){return n?He(n,D):lr(D)}const a=r(gn),i=r(wa)??{},o=r(mn),l=g(()=>So(o.value)),c=r(ya)??L(1),u=r(ka)??L(1),{left:f,top:d,stop:h}=bo(r(ps)??L()),m=["slide","presenter"].includes(a.value);let p=n?"directive":"prop",y=Ln(),v;if(Array.isArray(e)?v=e:typeof e=="string"&&e.includes(",")?v=e.split(",").map(Number):e!=null&&(p="frontmatter",y=`${e}`,e=(K=i==null?void 0:i.dragPos)==null?void 0:K[y],v=e==null?void 0:e.split(",").map(Number)),p!=="frontmatter"&&!t)throw new Error("[Slidev] Can not identify the source position of the v-drag element, please provide an explicit `id` prop.");const w=[h],k=e!=null&&!Number.isFinite(v==null?void 0:v[3]);v??(v=[Number.NaN,Number.NaN,0]);const b=L(v[2]),M=L(v[0]+v[2]/2),_=L(v[4]??0),C=g(()=>_.value*Math.PI/180),$=g(()=>Math.sin(C.value)),I=g(()=>Math.cos(C.value)),z=L(),F=L({left:0,top:0,width:0,height:0}),T=L(0);function E(){if(!z.value)return;const D=z.value.getBoundingClientRect();F.value={left:D.left/u.value,top:D.top/u.value,width:D.width/u.value,height:D.height/u.value},T.value=(F.value.width+F.value.height)/c.value/(Math.abs($.value)+Math.abs(I.value))-b.value}w.push(Q(b,E,{flush:"post"}));const V=L(v[3]??0),O=k?g({get:()=>(k?T.value:V.value)||0,set:D=>!k&&(V.value=D)}):V,R=k?L(v[1]):L(v[1]+v[3]/2),se=k?g({get:()=>R.value+O.value/2,set:D=>R.value=D-O.value/2}):R,Ve=g(()=>Number.isFinite(M.value)?{position:"absolute",zIndex:100,left:`${M.value-b.value/2}px`,top:`${se.value-O.value/2}px`,width:`${b.value}px`,height:k?void 0:`${O.value}px`,transformOrigin:"center center",transform:`rotate(${_.value}deg)`}:{position:"absolute",zIndex:100});w.push(Q([M,se,b,O,_],([D,ce,Ge,ze,On])=>{let Ee=[D-Ge/2,ce-ze/2,Ge].map(Math.round).join();k?Ee+=p==="directive"?",NaN":",_":Ee+=`,${Math.round(ze)}`,Math.round(On)!==0&&(Ee+=`,${Math.round(On)}`),p==="directive"&&(Ee=`[${Ee}]`),l.value(y,Ee,p,t)}));const Z={dragId:y,dataSource:p,markdownSource:t,isArrow:s,zoom:u,autoHeight:k,x0:M,y0:se,width:b,height:O,rotate:_,container:z,containerStyle:Ve,watchStopHandles:w,dragging:g(()=>ot.value===Z),mounted(){m&&(E(),e||setTimeout(()=>{E(),M.value=(F.value.left+F.value.width/2-f.value)/c.value,se.value=(F.value.top-d.value)/c.value,b.value=F.value.width/c.value,O.value=F.value.height/c.value},100))},unmounted(){m&&Z.stopDragging()},startDragging(){E(),ot.value=Z},stopDragging(){ot.value===Z&&(ot.value=null)}};return w.push(ir(z,D=>{const ce=document.querySelector("#drag-control-container");ce&&D.target&&ce.contains(D.target)||Z.stopDragging()}),Q(or(),D=>{D||Z.stopDragging()})),Z}function Mo(){return{install(n){n.directive("drag",{name:"v-drag",created(e,t,s){var a;const r=_o(t,t.value,(a=s.props)==null?void 0:a.markdownSource);s.props&&(s.props={...s.props},delete s.props.markdownSource),r.container.value=e,e.draggingState=r,e.dataset.dragId=r.dragId,r.watchStopHandles.push(Q(r.containerStyle,i=>{for(const[o,l]of Object.entries(i))l&&(e.style[o]=l)},{immediate:!0})),e.addEventListener("dblclick",r.startDragging)},mounted(e){e.draggingState.mounted()},unmounted(e){const t=e.draggingState;t.unmounted(),e.removeEventListener("dblclick",t.startDragging),t.watchStopHandles.forEach(s=>s())}})}}}function Ao(){return{install(n){const e=cr();n.directive("motion",{name:"v-motion",mounted(t,s,r,a){var k,b,M;const i=He(s,Et),o=He(s,mn),l=He(s,gn),{currentPage:c,clicks:u,isPrintMode:f}=nn(),d=r.props={...r.props},h={...d.initial,...(k=d.variants)==null?void 0:k["slidev-initial"]},m={...d.enter,...(b=d.variants)==null?void 0:b["slidev-enter"]},p={...d.leave,...(M=d.variants)==null?void 0:M["slidev-leave"]};delete d.initial,delete d.enter,delete d.leave;const y=`${Ln()}-`,v=[];for(const _ of Object.keys(d))if(_.startsWith("click-")){const C=_.slice(6),$=C.includes("-")?C.split("-").map(Number):+C,I=y+C;v.push({id:I,at:$,variant:{...d[_]},info:i==null?void 0:i.value.calculate($)}),delete d[_]}v.sort((_,C)=>(Array.isArray(_.at)?_.at[0]:_.at)-(Array.isArray(C.at)?C.at[0]:C.at)),e.created(t,s,r,a),e.mounted(t,s,r,a);const w=t.motionInstance;w.clickIds=v.map(_=>_.id),w.set(h),w.watchStopHandle=Q([o,c,u].filter(Boolean),()=>{var C;const _=((C=Os.get(t))==null?void 0:C.visibilityState.value)??"shown";if(!(i!=null&&i.value)||!["slide","presenter"].includes((l==null?void 0:l.value)??"")){const $={...h,...m};for(const{variant:I}of v)Object.assign($,I);w.set($)}else if(f.value||(o==null?void 0:o.value)===c.value)if(_==="shown"){const $={...h,...m};for(const{variant:I,info:z}of v)(!z||z.isActive.value)&&Object.assign($,I);f.value?w.set($):w.apply($)}else w.apply(_==="before"?h:p);else w.apply(((o==null?void 0:o.value)??-1)>c.value?h:p)},{immediate:!0})},unmounted(t){t.motionInstance.watchStopHandle()}})}}}const Lo=[];function Co(){const n=[];{let e=function(t){if(!x.remote||x.remote===t.query.password)return!0;if(x.remote&&t.query.password===void 0){const s=prompt("Enter password");if(x.remote===s)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}};n.push({name:"entry",path:"/entry",component:()=>P(()=>import("./slidev/entry-CxD24beZ.js"),__vite__mapDeps([26,9,1,3,4,27]))},{name:"overview",path:"/overview",component:()=>P(()=>import("./slidev/overview-BtBlCqBg.js"),__vite__mapDeps([28,9,1,29,30,31,32,33,34,35,3,4]))},{name:"notes",path:"/notes",component:()=>P(()=>import("./slidev/notes-DDHg-J_h.js"),__vite__mapDeps([36,9,1,32,33,31,3,4])),beforeEnter:e},{name:"presenter",path:"/presenter/:no",component:()=>P(()=>import("./slidev/presenter-CRGUYk3p.js"),__vite__mapDeps([37,9,1,38,29,30,31,2,3,4,39,32,33,40,41,34,35,42])),beforeEnter:e},{path:"/presenter",redirect:{path:"/presenter/1"}})}return n.push({name:"play",path:"/:no",component:()=>P(()=>import("./slidev/play-BpZ2fmS0.js"),__vite__mapDeps([43,1,38,29,30,9,31,2,3,4,39,44]))},{path:"",redirect:{path:"/1"}}),Lo.reduce((e,t)=>t(e),n)}const To=[];async function Oo(n){function e(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}e(),window.addEventListener("resize",e);const t=ur({history:fr("/genaiscript/slides/msr-eng-may2024/"),routes:Co()});n.use(t),n.use(ia()),n.use(Ti()),n.use(po()),n.use(Mo()),n.use(Ao()),n.use(hr,{container:"#twoslash-container"});const s={app:n,router:t};vt(()=>{t.afterEach(async()=>{await vt(),en.value+=1})});for(const r of To)await r(s)}const Hs=dr(Ci);Oo(Hs);Hs.mount("#app");export{gn as $,Ct as A,vo as B,dt as C,re as D,ot as E,mo as F,il as G,Jo as H,Qo as I,Bo as J,Ko as K,tl as L,el as M,xo as N,go as O,Yo as P,fn as Q,sl as R,Nt as S,ya as T,bo as U,yn as V,as as W,ps as X,Ho as Y,mn as Z,_s as _,nn as a,Et as a0,ka as a1,Wo as a2,Ro as a3,jo as a4,No as a5,ue as a6,fe as a7,de as a8,he as a9,pe as aa,me as ab,ge as ac,Po as ad,Ln as ae,ye as af,tn as ag,mr as ah,ve as ai,we as aj,ke as ak,be as al,Se as am,_e as an,Be as ao,Go as ap,Me as aq,va as ar,wa as as,Fo as at,Sa as au,Ts as b,yi as c,Do as d,Vo as e,Zo as f,je as g,nl as h,Wn as i,yo as j,Tt as k,rl as l,al as m,Ze as n,x as o,lt as p,P as q,$n as r,Rt as s,zo as t,la as u,Uo as v,qo as w,kr as x,Io as y,Xo as z};
