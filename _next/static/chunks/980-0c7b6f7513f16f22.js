(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{905:function(t,e){"use strict";let n;Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{DOMAttributeNames:function(){return i},default:function(){return a},isEqualNode:function(){return s}});let i={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function r(t){let{type:e,props:n}=t,r=document.createElement(e);for(let t in n){if(!n.hasOwnProperty(t)||"children"===t||"dangerouslySetInnerHTML"===t||void 0===n[t])continue;let s=i[t]||t.toLowerCase();"script"===e&&("async"===s||"defer"===s||"noModule"===s)?r[s]=!!n[t]:r.setAttribute(s,n[t])}let{children:s,dangerouslySetInnerHTML:a}=n;return a?r.innerHTML=a.__html||"":s&&(r.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):""),r}function s(t,e){if(t instanceof HTMLElement&&e instanceof HTMLElement){let n=e.getAttribute("nonce");if(n&&!t.getAttribute("nonce")){let i=e.cloneNode(!0);return i.setAttribute("nonce",""),i.nonce=n,n===t.nonce&&t.isEqualNode(i)}}return t.isEqualNode(e)}function a(){return{mountedInstances:new Set,updateHead:t=>{let e={};t.forEach(t=>{if("link"===t.type&&t.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+t.props["data-href"]+'"]'))return;t.props.href=t.props["data-href"],t.props["data-href"]=void 0}let n=e[t.type]||[];n.push(t),e[t.type]=n});let i=e.title?e.title[0]:null,r="";if(i){let{children:t}=i.props;r="string"==typeof t?t:Array.isArray(t)?t.join(""):""}r!==document.title&&(document.title=r),["meta","base","link","style","script"].forEach(t=>{n(t,e[t]||[])})}}}n=(t,e)=>{let n=document.getElementsByTagName("head")[0],i=n.querySelector("meta[name=next-head-count]"),a=Number(i.content),u=[];for(let e=0,n=i.previousElementSibling;e<a;e++,n=(null==n?void 0:n.previousElementSibling)||null){var o;(null==n?void 0:null==(o=n.tagName)?void 0:o.toLowerCase())===t&&u.push(n)}let l=e.map(r).filter(t=>{for(let e=0,n=u.length;e<n;e++)if(s(u[e],t))return u.splice(e,1),!1;return!0});u.forEach(t=>{var e;return null==(e=t.parentNode)?void 0:e.removeChild(t)}),l.forEach(t=>n.insertBefore(t,i)),i.content=(a-u.length+l.length).toString()},("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},9189:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{cancelIdleCallback:function(){return i},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(t){let e=Date.now();return self.setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},i="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(t){return clearTimeout(t)};("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},4080:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{default:function(){return v},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return g}});let i=n(9920),r=n(1452),s=n(7437),a=i._(n(4887)),u=r._(n(2265)),o=n(6590),l=n(905),c=n(9189),h=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=t=>{if(a.default.preinit){t.forEach(t=>{a.default.preinit(t,{as:"style"})});return}if("undefined"!=typeof window){let e=document.head;t.forEach(t=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=t,e.appendChild(n)})}},y=t=>{let{src:e,id:n,onLoad:i=()=>{},onReady:r=null,dangerouslySetInnerHTML:s,children:a="",strategy:u="afterInteractive",onError:o,stylesheets:c}=t,y=n||e;if(y&&d.has(y))return;if(h.has(e)){d.add(y),h.get(e).then(i,o);return}let m=()=>{r&&r(),d.add(y)},g=document.createElement("script"),b=new Promise((t,e)=>{g.addEventListener("load",function(e){t(),i&&i.call(this,e),m()}),g.addEventListener("error",function(t){e(t)})}).catch(function(t){o&&o(t)});for(let[n,i]of(s?(g.innerHTML=s.__html||"",m()):a?(g.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",m()):e&&(g.src=e,h.set(e,b)),Object.entries(t))){if(void 0===i||f.includes(n))continue;let t=l.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(t,i)}"worker"===u&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",u),c&&p(c),document.body.appendChild(g)};function m(t){let{strategy:e="afterInteractive"}=t;"lazyOnload"===e?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>y(t))}):y(t)}function g(t){t.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(t=>{let e=t.id||t.getAttribute("src");d.add(e)})}function b(t){let{id:e,src:n="",onLoad:i=()=>{},onReady:r=null,strategy:l="afterInteractive",onError:h,stylesheets:f,...p}=t,{updateScripts:m,scripts:g,getIsSsr:b,appDir:v,nonce:C}=(0,u.useContext)(o.HeadManagerContext),q=(0,u.useRef)(!1);(0,u.useEffect)(()=>{let t=e||n;q.current||(r&&t&&d.has(t)&&r(),q.current=!0)},[r,e,n]);let w=(0,u.useRef)(!1);if((0,u.useEffect)(()=>{!w.current&&("afterInteractive"===l?y(t):"lazyOnload"===l&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>y(t)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>y(t))})),w.current=!0)},[t,l]),("beforeInteractive"===l||"worker"===l)&&(m?(g[l]=(g[l]||[]).concat([{id:e,src:n,onLoad:i,onReady:r,onError:h,...p}]),m(g)):b&&b()?d.add(e||n):b&&!b()&&y(t)),v){if(f&&f.forEach(t=>{a.default.preinit(t,{as:"style"})}),"beforeInteractive"===l)return n?(a.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:C}:{as:"script",nonce:C}),(0,s.jsx)("script",{nonce:C,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...p,id:e}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,s.jsx)("script",{nonce:C,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:e}])+")"}}));"afterInteractive"===l&&n&&a.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:C}:{as:"script",nonce:C})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let v=b;("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},4671:function(t){t.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},4329:function(t,e,n){"use strict";function i(t){return"success"===t.state.status}n.d(e,{d_:function(){return i}})},8699:function(t,e,n){"use strict";n.d(e,{S:function(){return m}});var i=n(6298),r=n(2459),s=n(9948),a=n(9010),u=class extends a.l{constructor(t={}){super(),this.config=t,this.#t=new Map}#t;build(t,e,n){let s=e.queryKey,a=e.queryHash??(0,i.Rm)(s,e),u=this.get(a);return u||(u=new r.A({cache:this,queryKey:s,queryHash:a,options:t.defaultQueryOptions(e),state:n,defaultOptions:t.getQueryDefaults(s)}),this.add(u)),u}add(t){this.#t.has(t.queryHash)||(this.#t.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#t.get(t.queryHash);e&&(t.destroy(),e===t&&this.#t.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){s.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#t.get(t)}getAll(){return[...this.#t.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,i._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,i._x)(t,e)):e}notify(t){s.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){s.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){s.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},o=n(3494),l=n(924),c=class extends o.F{#e;#n;#i;constructor(t){super(),this.mutationId=t.mutationId,this.#n=t.mutationCache,this.#e=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#e.includes(t)||(this.#e.push(t),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#e=this.#e.filter(e=>e!==t),this.scheduleGc(),this.#n.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#n.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(t){this.#i=(0,l.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#r({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#n.canRun(this)});let e="pending"===this.state.status,n=!this.#i.canStart();try{if(!e){this.#r({type:"pending",variables:t,isPaused:n}),await this.#n.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#r({type:"pending",context:e,variables:t,isPaused:n})}let i=await this.#i.start();return await this.#n.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#n.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#r({type:"success",data:i}),i}catch(e){try{throw await this.#n.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#n.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#r({type:"error",error:e})}}finally{this.#n.runNext(this)}}#r(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),s.V.batch(()=>{this.#e.forEach(e=>{e.onMutationUpdate(t)}),this.#n.notify({mutation:this,type:"updated",action:t})})}},h=class extends a.l{constructor(t={}){super(),this.config=t,this.#s=new Map,this.#a=Date.now()}#s;#a;build(t,e,n){let i=new c({mutationCache:this,mutationId:++this.#a,options:t.defaultMutationOptions(e),state:n});return this.add(i),i}add(t){let e=d(t),n=this.#s.get(e)??[];n.push(t),this.#s.set(e,n),this.notify({type:"added",mutation:t})}remove(t){let e=d(t);if(this.#s.has(e)){let n=this.#s.get(e)?.filter(e=>e!==t);n&&(0===n.length?this.#s.delete(e):this.#s.set(e,n))}this.notify({type:"removed",mutation:t})}canRun(t){let e=this.#s.get(d(t))?.find(t=>"pending"===t.state.status);return!e||e===t}runNext(t){let e=this.#s.get(d(t))?.find(e=>e!==t&&e.state.isPaused);return e?.continue()??Promise.resolve()}clear(){s.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...this.#s.values()].flat()}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,i.X7)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,i.X7)(t,e))}notify(t){s.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return s.V.batch(()=>Promise.all(t.map(t=>t.continue().catch(i.ZT))))}};function d(t){return t.options.scope?.id??String(t.mutationId)}var f=n(4939),p=n(9937);function y(t,{pages:e,pageParams:n}){let i=e.length-1;return t.getNextPageParam(e[i],e,n[i],n)}var m=class{#u;#n;#o;#l;#c;#h;#d;#f;constructor(t={}){this.#u=t.queryCache||new u,this.#n=t.mutationCache||new h,this.#o=t.defaultOptions||{},this.#l=new Map,this.#c=new Map,this.#h=0}mount(){this.#h++,1===this.#h&&(this.#d=f.j.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#u.onFocus())}),this.#f=p.N.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#u.onOnline())}))}unmount(){this.#h--,0===this.#h&&(this.#d?.(),this.#d=void 0,this.#f?.(),this.#f=void 0)}isFetching(t){return this.#u.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#n.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#u.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let n=this.defaultQueryOptions(t),r=this.#u.build(this,n);return t.revalidateIfStale&&r.isStaleByTime((0,i.KC)(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return this.#u.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,n){let r=this.defaultQueryOptions({queryKey:t}),s=this.#u.get(r.queryHash),a=s?.state.data,u=(0,i.SE)(e,a);if(void 0!==u)return this.#u.build(this,r).setData(u,{...n,manual:!0})}setQueriesData(t,e,n){return s.V.batch(()=>this.#u.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,n)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#u.get(e.queryHash)?.state}removeQueries(t){let e=this.#u;s.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let n=this.#u,i={type:"active",...t};return s.V.batch(()=>(n.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let n={revert:!0,...e};return Promise.all(s.V.batch(()=>this.#u.findAll(t).map(t=>t.cancel(n)))).then(i.ZT).catch(i.ZT)}invalidateQueries(t={},e={}){return s.V.batch(()=>{if(this.#u.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){let n={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(s.V.batch(()=>this.#u.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,n);return n.throwOnError||(e=e.catch(i.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(i.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let n=this.#u.build(this,e);return n.isStaleByTime((0,i.KC)(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(i.ZT).catch(i.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,n)=>{let r=async()=>{let n;let r=t.options,s=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],u=t.state.data?.pageParams||[],o=!1,l=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?o=!0:t.signal.addEventListener("abort",()=>{o=!0}),t.signal)})},c=(0,i.cG)(t.options,t.fetchOptions),h=async(e,n,r)=>{if(o)return Promise.reject();if(null==n&&e.pages.length)return Promise.resolve(e);let s={queryKey:t.queryKey,pageParam:n,direction:r?"backward":"forward",meta:t.options.meta};l(s);let a=await c(s),{maxPages:u}=t.options,h=r?i.Ht:i.VX;return{pages:h(e.pages,a,u),pageParams:h(e.pageParams,n,u)}};if(s&&a.length){let t="backward"===s,e={pages:a,pageParams:u},i=(t?function(t,{pages:e,pageParams:n}){return t.getPreviousPageParam?.(e[0],e,n[0],n)}:y)(r,e);n=await h(e,i,t)}else{n=await h({pages:[],pageParams:[]},u[0]??r.initialPageParam);let t=e??a.length;for(let e=1;e<t;e++){let t=y(r,n);n=await h(n,t)}}return n};t.options.persister?t.fetchFn=()=>t.options.persister?.(r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=r}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(i.ZT).catch(i.ZT)}resumePausedMutations(){return p.N.isOnline()?this.#n.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#u}getMutationCache(){return this.#n}getDefaultOptions(){return this.#o}setDefaultOptions(t){this.#o=t}setQueryDefaults(t,e){this.#l.set((0,i.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#l.values()],n={};return e.forEach(e=>{(0,i.to)(t,e.queryKey)&&(n={...n,...e.defaultOptions})}),n}setMutationDefaults(t,e){this.#c.set((0,i.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#c.values()],n={};return e.forEach(e=>{(0,i.to)(t,e.mutationKey)&&(n={...n,...e.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#o.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,i.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===i.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#o.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#u.clear(),this.#n.clear()}}},9839:function(t,e,n){"use strict";n.d(e,{t:function(){return i}});var i=function(){return null}}}]);