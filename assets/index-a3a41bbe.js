(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Qi(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Yi(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ve(r)?rd(r):Yi(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(ve(e))return e;if(de(e))return e}}const ed=/;(?![^(]*\))/g,td=/:([^]+)/,nd=/\/\*.*?\*\//gs;function rd(e){const t={};return e.replace(nd,"").split(ed).forEach(n=>{if(n){const r=n.split(td);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ji(e){let t="";if(ve(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=Ji(e[n]);r&&(t+=r+" ")}else if(de(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const sd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",id=Qi(sd);function Wc(e){return!!e||e===""}const Ke=e=>ve(e)?e:e==null?"":K(e)||de(e)&&(e.toString===qc||!Q(e.toString))?JSON.stringify(e,Kc,2):String(e),Kc=(e,t)=>t&&t.__v_isRef?Kc(e,t.value):Rn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:zc(t)?{[`Set(${t.size})`]:[...t.values()]}:de(t)&&!K(t)&&!Qc(t)?String(t):t,fe={},Sn=[],ze=()=>{},od=()=>!1,ad=/^on[^a-z]/,ps=e=>ad.test(e),Xi=e=>e.startsWith("onUpdate:"),Ce=Object.assign,Zi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},cd=Object.prototype.hasOwnProperty,Z=(e,t)=>cd.call(e,t),K=Array.isArray,Rn=e=>gs(e)==="[object Map]",zc=e=>gs(e)==="[object Set]",Q=e=>typeof e=="function",ve=e=>typeof e=="string",eo=e=>typeof e=="symbol",de=e=>e!==null&&typeof e=="object",Gc=e=>de(e)&&Q(e.then)&&Q(e.catch),qc=Object.prototype.toString,gs=e=>qc.call(e),ld=e=>gs(e).slice(8,-1),Qc=e=>gs(e)==="[object Object]",to=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fr=Qi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ms=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ud=/-(\w)/g,ut=ms(e=>e.replace(ud,(t,n)=>n?n.toUpperCase():"")),fd=/\B([A-Z])/g,Un=ms(e=>e.replace(fd,"-$1").toLowerCase()),_s=ms(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fs=ms(e=>e?`on${_s(e)}`:""),or=(e,t)=>!Object.is(e,t),$r=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Xr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},gi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Xo;const dd=()=>Xo||(Xo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let He;class hd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=He;try{return He=this,t()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function pd(e,t=He){t&&t.active&&t.effects.push(e)}function gd(){return He}const no=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Yc=e=>(e.w&zt)>0,Jc=e=>(e.n&zt)>0,md=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=zt},_d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Yc(s)&&!Jc(s)?s.delete(e):t[n++]=s,s.w&=~zt,s.n&=~zt}t.length=n}},mi=new WeakMap;let Jn=0,zt=1;const _i=30;let Ve;const cn=Symbol(""),Ai=Symbol("");class ro{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pd(this,r)}run(){if(!this.active)return this.fn();let t=Ve,n=Ft;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ve,Ve=this,Ft=!0,zt=1<<++Jn,Jn<=_i?md(this):Zo(this),this.fn()}finally{Jn<=_i&&_d(this),zt=1<<--Jn,Ve=this.parent,Ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ve===this?this.deferStop=!0:this.active&&(Zo(this),this.onStop&&this.onStop(),this.active=!1)}}function Zo(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ft=!0;const Xc=[];function Fn(){Xc.push(Ft),Ft=!1}function $n(){const e=Xc.pop();Ft=e===void 0?!0:e}function xe(e,t,n){if(Ft&&Ve){let r=mi.get(e);r||mi.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=no()),Zc(s)}}function Zc(e,t){let n=!1;Jn<=_i?Jc(e)||(e.n|=zt,n=!Yc(e)):n=!e.has(Ve),n&&(e.add(Ve),Ve.deps.push(e))}function vt(e,t,n,r,s,i){const o=mi.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&K(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":K(e)?to(n)&&a.push(o.get("length")):(a.push(o.get(cn)),Rn(e)&&a.push(o.get(Ai)));break;case"delete":K(e)||(a.push(o.get(cn)),Rn(e)&&a.push(o.get(Ai)));break;case"set":Rn(e)&&a.push(o.get(cn));break}if(a.length===1)a[0]&&yi(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);yi(no(c))}}function yi(e,t){const n=K(e)?e:[...e];for(const r of n)r.computed&&ea(r);for(const r of n)r.computed||ea(r)}function ea(e,t){(e!==Ve||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ad=Qi("__proto__,__v_isRef,__isVue"),el=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(eo)),yd=so(),vd=so(!1,!0),bd=so(!0),ta=wd();function wd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=te(this);for(let i=0,o=this.length;i<o;i++)xe(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Fn();const r=te(this)[t].apply(this,n);return $n(),r}}),e}function Ed(e){const t=te(this);return xe(t,"has",e),t.hasOwnProperty(e)}function so(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?Fd:il:t?sl:rl).get(r))return r;const o=K(r);if(!e){if(o&&Z(ta,s))return Reflect.get(ta,s,i);if(s==="hasOwnProperty")return Ed}const a=Reflect.get(r,s,i);return(eo(s)?el.has(s):Ad(s))||(e||xe(r,"get",s),t)?a:Te(a)?o&&to(s)?a:a.value:de(a)?e?ol(a):jn(a):a}}const Id=tl(),Td=tl(!0);function tl(e=!1){return function(n,r,s,i){let o=n[r];if(xn(o)&&Te(o)&&!Te(s))return!1;if(!e&&(!Zr(s)&&!xn(s)&&(o=te(o),s=te(s)),!K(n)&&Te(o)&&!Te(s)))return o.value=s,!0;const a=K(n)&&to(r)?Number(r)<n.length:Z(n,r),c=Reflect.set(n,r,s,i);return n===te(i)&&(a?or(s,o)&&vt(n,"set",r,s):vt(n,"add",r,s)),c}}function Cd(e,t){const n=Z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&vt(e,"delete",t,void 0),r}function Sd(e,t){const n=Reflect.has(e,t);return(!eo(t)||!el.has(t))&&xe(e,"has",t),n}function Rd(e){return xe(e,"iterate",K(e)?"length":cn),Reflect.ownKeys(e)}const nl={get:yd,set:Id,deleteProperty:Cd,has:Sd,ownKeys:Rd},Od={get:bd,set(e,t){return!0},deleteProperty(e,t){return!0}},kd=Ce({},nl,{get:vd,set:Td}),io=e=>e,As=e=>Reflect.getPrototypeOf(e);function Dr(e,t,n=!1,r=!1){e=e.__v_raw;const s=te(e),i=te(t);n||(t!==i&&xe(s,"get",t),xe(s,"get",i));const{has:o}=As(s),a=r?io:n?co:ar;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function xr(e,t=!1){const n=this.__v_raw,r=te(n),s=te(e);return t||(e!==s&&xe(r,"has",e),xe(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Nr(e,t=!1){return e=e.__v_raw,!t&&xe(te(e),"iterate",cn),Reflect.get(e,"size",e)}function na(e){e=te(e);const t=te(this);return As(t).has.call(t,e)||(t.add(e),vt(t,"add",e,e)),this}function ra(e,t){t=te(t);const n=te(this),{has:r,get:s}=As(n);let i=r.call(n,e);i||(e=te(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?or(t,o)&&vt(n,"set",e,t):vt(n,"add",e,t),this}function sa(e){const t=te(this),{has:n,get:r}=As(t);let s=n.call(t,e);s||(e=te(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&vt(t,"delete",e,void 0),i}function ia(){const e=te(this),t=e.size!==0,n=e.clear();return t&&vt(e,"clear",void 0,void 0),n}function Lr(e,t){return function(r,s){const i=this,o=i.__v_raw,a=te(o),c=t?io:e?co:ar;return!e&&xe(a,"iterate",cn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Mr(e,t,n){return function(...r){const s=this.__v_raw,i=te(s),o=Rn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?io:t?co:ar;return!t&&xe(i,"iterate",c?Ai:cn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function kt(e){return function(...t){return e==="delete"?!1:this}}function Pd(){const e={get(i){return Dr(this,i)},get size(){return Nr(this)},has:xr,add:na,set:ra,delete:sa,clear:ia,forEach:Lr(!1,!1)},t={get(i){return Dr(this,i,!1,!0)},get size(){return Nr(this)},has:xr,add:na,set:ra,delete:sa,clear:ia,forEach:Lr(!1,!0)},n={get(i){return Dr(this,i,!0)},get size(){return Nr(this,!0)},has(i){return xr.call(this,i,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Lr(!0,!1)},r={get(i){return Dr(this,i,!0,!0)},get size(){return Nr(this,!0)},has(i){return xr.call(this,i,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Lr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Mr(i,!1,!1),n[i]=Mr(i,!0,!1),t[i]=Mr(i,!1,!0),r[i]=Mr(i,!0,!0)}),[e,n,t,r]}const[Dd,xd,Nd,Ld]=Pd();function oo(e,t){const n=t?e?Ld:Nd:e?xd:Dd;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const Md={get:oo(!1,!1)},Bd={get:oo(!1,!0)},Ud={get:oo(!0,!1)},rl=new WeakMap,sl=new WeakMap,il=new WeakMap,Fd=new WeakMap;function $d(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jd(e){return e.__v_skip||!Object.isExtensible(e)?0:$d(ld(e))}function jn(e){return xn(e)?e:ao(e,!1,nl,Md,rl)}function Hd(e){return ao(e,!1,kd,Bd,sl)}function ol(e){return ao(e,!0,Od,Ud,il)}function ao(e,t,n,r,s){if(!de(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=jd(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function On(e){return xn(e)?On(e.__v_raw):!!(e&&e.__v_isReactive)}function xn(e){return!!(e&&e.__v_isReadonly)}function Zr(e){return!!(e&&e.__v_isShallow)}function al(e){return On(e)||xn(e)}function te(e){const t=e&&e.__v_raw;return t?te(t):e}function cl(e){return Xr(e,"__v_skip",!0),e}const ar=e=>de(e)?jn(e):e,co=e=>de(e)?ol(e):e;function ll(e){Ft&&Ve&&(e=te(e),Zc(e.dep||(e.dep=no())))}function ul(e,t){e=te(e);const n=e.dep;n&&yi(n)}function Te(e){return!!(e&&e.__v_isRef===!0)}function V(e){return fl(e,!1)}function Vd(e){return fl(e,!0)}function fl(e,t){return Te(e)?e:new Wd(e,t)}class Wd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:te(t),this._value=n?t:ar(t)}get value(){return ll(this),this._value}set value(t){const n=this.__v_isShallow||Zr(t)||xn(t);t=n?t:te(t),or(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ar(t),ul(this))}}function B(e){return Te(e)?e.value:e}const Kd={get:(e,t,n)=>B(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Te(s)&&!Te(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function dl(e){return On(e)?e:new Proxy(e,Kd)}var hl;class zd{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[hl]=!1,this._dirty=!0,this.effect=new ro(t,()=>{this._dirty||(this._dirty=!0,ul(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=te(this);return ll(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}hl="__v_isReadonly";function Gd(e,t,n=!1){let r,s;const i=Q(e);return i?(r=e,s=ze):(r=e.get,s=e.set),new zd(r,s,i||!s,n)}function $t(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){ys(i,t,n)}return s}function Fe(e,t,n,r){if(Q(e)){const i=$t(e,t,n,r);return i&&Gc(i)&&i.catch(o=>{ys(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Fe(e[i],t,n,r));return s}function ys(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){$t(c,null,10,[e,o,a]);return}}qd(e,n,s,r)}function qd(e,t,n,r=!0){console.error(e)}let cr=!1,vi=!1;const Ie=[];let st=0;const kn=[];let mt=null,tn=0;const pl=Promise.resolve();let lo=null;function gl(e){const t=lo||pl;return e?t.then(this?e.bind(this):e):t}function Qd(e){let t=st+1,n=Ie.length;for(;t<n;){const r=t+n>>>1;lr(Ie[r])<e?t=r+1:n=r}return t}function uo(e){(!Ie.length||!Ie.includes(e,cr&&e.allowRecurse?st+1:st))&&(e.id==null?Ie.push(e):Ie.splice(Qd(e.id),0,e),ml())}function ml(){!cr&&!vi&&(vi=!0,lo=pl.then(Al))}function Yd(e){const t=Ie.indexOf(e);t>st&&Ie.splice(t,1)}function Jd(e){K(e)?kn.push(...e):(!mt||!mt.includes(e,e.allowRecurse?tn+1:tn))&&kn.push(e),ml()}function oa(e,t=cr?st+1:0){for(;t<Ie.length;t++){const n=Ie[t];n&&n.pre&&(Ie.splice(t,1),t--,n())}}function _l(e){if(kn.length){const t=[...new Set(kn)];if(kn.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((n,r)=>lr(n)-lr(r)),tn=0;tn<mt.length;tn++)mt[tn]();mt=null,tn=0}}const lr=e=>e.id==null?1/0:e.id,Xd=(e,t)=>{const n=lr(e)-lr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Al(e){vi=!1,cr=!0,Ie.sort(Xd);const t=ze;try{for(st=0;st<Ie.length;st++){const n=Ie[st];n&&n.active!==!1&&$t(n,null,14)}}finally{st=0,Ie.length=0,_l(),cr=!1,lo=null,(Ie.length||kn.length)&&Al()}}function Zd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||fe;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||fe;p&&(s=n.map(g=>ve(g)?g.trim():g)),f&&(s=n.map(gi))}let a,c=r[a=Fs(t)]||r[a=Fs(ut(t))];!c&&i&&(c=r[a=Fs(Un(t))]),c&&Fe(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Fe(l,e,6,s)}}function yl(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Q(e)){const c=l=>{const u=yl(l,t,!0);u&&(a=!0,Ce(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(de(e)&&r.set(e,null),null):(K(i)?i.forEach(c=>o[c]=null):Ce(o,i),de(e)&&r.set(e,o),o)}function vs(e,t){return!e||!ps(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,Un(t))||Z(e,t))}let Me=null,bs=null;function es(e){const t=Me;return Me=e,bs=e&&e.type.__scopeId||null,t}function Et(e){bs=e}function It(){bs=null}function eh(e,t=Me,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ma(-1);const i=es(t);let o;try{o=e(...s)}finally{es(i),r._d&&ma(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $s(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:_,inheritAttrs:b}=e;let N,O;const L=es(e);try{if(n.shapeFlag&4){const C=s||r;N=rt(u.call(C,C,f,i,g,p,_)),O=c}else{const C=t;N=rt(C.length>1?C(i,{attrs:c,slots:a,emit:l}):C(i,null)),O=t.props?c:th(c)}}catch(C){tr.length=0,ys(C,e,1),N=he(qe)}let I=N;if(O&&b!==!1){const C=Object.keys(O),{shapeFlag:j}=I;C.length&&j&7&&(o&&C.some(Xi)&&(O=nh(O,o)),I=Gt(I,O))}return n.dirs&&(I=Gt(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),N=I,es(L),N}const th=e=>{let t;for(const n in e)(n==="class"||n==="style"||ps(n))&&((t||(t={}))[n]=e[n]);return t},nh=(e,t)=>{const n={};for(const r in e)(!Xi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function rh(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?aa(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!vs(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?aa(r,o,l):!0:!!o;return!1}function aa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!vs(n,i))return!0}return!1}function sh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ih=e=>e.__isSuspense;function oh(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):Jd(e)}function jr(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Ge(e,t,n=!1){const r=me||Me;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Q(t)?t.call(r.proxy):t}}const Br={};function jt(e,t,n){return vl(e,t,n)}function vl(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=fe){const a=gd()===(me==null?void 0:me.scope)?me:null;let c,l=!1,u=!1;if(Te(e)?(c=()=>e.value,l=Zr(e)):On(e)?(c=()=>e,r=!0):K(e)?(u=!0,l=e.some(I=>On(I)||Zr(I)),c=()=>e.map(I=>{if(Te(I))return I.value;if(On(I))return sn(I);if(Q(I))return $t(I,a,2)})):Q(e)?t?c=()=>$t(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Fe(e,a,3,[p])}:c=ze,t&&r){const I=c;c=()=>sn(I())}let f,p=I=>{f=O.onStop=()=>{$t(I,a,4)}},g;if(dr)if(p=ze,t?n&&Fe(t,a,3,[c(),u?[]:void 0,p]):c(),s==="sync"){const I=np();g=I.__watcherHandles||(I.__watcherHandles=[])}else return ze;let _=u?new Array(e.length).fill(Br):Br;const b=()=>{if(O.active)if(t){const I=O.run();(r||l||(u?I.some((C,j)=>or(C,_[j])):or(I,_)))&&(f&&f(),Fe(t,a,3,[I,_===Br?void 0:u&&_[0]===Br?[]:_,p]),_=I)}else O.run()};b.allowRecurse=!!t;let N;s==="sync"?N=b:s==="post"?N=()=>ke(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),N=()=>uo(b));const O=new ro(c,N);t?n?b():_=O.run():s==="post"?ke(O.run.bind(O),a&&a.suspense):O.run();const L=()=>{O.stop(),a&&a.scope&&Zi(a.scope.effects,O)};return g&&g.push(L),L}function ah(e,t,n){const r=this.proxy,s=ve(e)?e.includes(".")?bl(r,e):()=>r[e]:e.bind(r,r);let i;Q(t)?i=t:(i=t.handler,n=t);const o=me;Nn(this);const a=vl(s,i.bind(r),n);return o?Nn(o):ln(),a}function bl(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function sn(e,t){if(!de(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Te(e))sn(e.value,t);else if(K(e))for(let n=0;n<e.length;n++)sn(e[n],t);else if(zc(e)||Rn(e))e.forEach(n=>{sn(n,t)});else if(Qc(e))for(const n in e)sn(e[n],t);return e}function ch(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fo(()=>{e.isMounted=!0}),Cl(()=>{e.isUnmounting=!0}),e}const Ue=[Function,Array],lh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},setup(e,{slots:t}){const n=qh(),r=ch();let s;return()=>{const i=t.default&&El(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==qe){o=b;break}}const a=te(e),{mode:c}=a;if(r.isLeaving)return js(o);const l=ca(o);if(!l)return js(o);const u=bi(l,a,r,n);wi(l,u);const f=n.subTree,p=f&&ca(f);let g=!1;const{getTransitionKey:_}=l.type;if(_){const b=_();s===void 0?s=b:b!==s&&(s=b,g=!0)}if(p&&p.type!==qe&&(!nn(l,p)||g)){const b=bi(p,a,r,n);if(wi(p,b),c==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},js(o);c==="in-out"&&l.type!==qe&&(b.delayLeave=(N,O,L)=>{const I=wl(r,p);I[String(p.key)]=p,N._leaveCb=()=>{O(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return o}}},uh=lh;function wl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function bi(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:b,onAppear:N,onAfterAppear:O,onAppearCancelled:L}=t,I=String(e.key),C=wl(n,e),j=(q,ae)=>{q&&Fe(q,r,9,ae)},G=(q,ae)=>{const se=ae[1];j(q,ae),K(q)?q.every(_e=>_e.length<=1)&&se():q.length<=1&&se()},ye={mode:i,persisted:o,beforeEnter(q){let ae=a;if(!n.isMounted)if(s)ae=b||a;else return;q._leaveCb&&q._leaveCb(!0);const se=C[I];se&&nn(e,se)&&se.el._leaveCb&&se.el._leaveCb(),j(ae,[q])},enter(q){let ae=c,se=l,_e=u;if(!n.isMounted)if(s)ae=N||c,se=O||l,_e=L||u;else return;let ge=!1;const X=q._enterCb=Yt=>{ge||(ge=!0,Yt?j(_e,[q]):j(se,[q]),ye.delayedLeave&&ye.delayedLeave(),q._enterCb=void 0)};ae?G(ae,[q,X]):X()},leave(q,ae){const se=String(e.key);if(q._enterCb&&q._enterCb(!0),n.isUnmounting)return ae();j(f,[q]);let _e=!1;const ge=q._leaveCb=X=>{_e||(_e=!0,ae(),X?j(_,[q]):j(g,[q]),q._leaveCb=void 0,C[se]===e&&delete C[se])};C[se]=e,p?G(p,[q,ge]):ge()},clone(q){return bi(q,t,n,r)}};return ye}function js(e){if(ws(e))return e=Gt(e),e.children=null,e}function ca(e){return ws(e)?e.children?e.children[0]:void 0:e}function wi(e,t){e.shapeFlag&6&&e.component?wi(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function El(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===pe?(o.patchFlag&128&&s++,r=r.concat(El(o.children,t,a))):(t||o.type!==qe)&&r.push(a!=null?Gt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Il(e){return Q(e)?{setup:e,name:e.name}:e}const Hr=e=>!!e.type.__asyncLoader,ws=e=>e.type.__isKeepAlive;function fh(e,t){Tl(e,"a",t)}function dh(e,t){Tl(e,"da",t)}function Tl(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Es(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ws(s.parent.vnode)&&hh(r,t,n,s),s=s.parent}}function hh(e,t,n,r){const s=Es(t,e,r,!0);Sl(()=>{Zi(r[t],s)},n)}function Es(e,t,n=me,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Fn(),Nn(n);const a=Fe(t,n,e,o);return ln(),$n(),a});return r?s.unshift(i):s.push(i),i}}const Tt=e=>(t,n=me)=>(!dr||e==="sp")&&Es(e,(...r)=>t(...r),n),ph=Tt("bm"),fo=Tt("m"),gh=Tt("bu"),mh=Tt("u"),Cl=Tt("bum"),Sl=Tt("um"),_h=Tt("sp"),Ah=Tt("rtg"),yh=Tt("rtc");function vh(e,t=me){Es("ec",e,t)}function ur(e,t){const n=Me;if(n===null)return e;const r=Cs(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=fe]=t[i];o&&(Q(o)&&(o={mounted:o,updated:o}),o.deep&&sn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Jt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Fn(),Fe(c,n,8,[e.el,a,e,t]),$n())}}const Rl="components";function bh(e,t){return Eh(Rl,e,!0,t)||e}const wh=Symbol();function Eh(e,t,n=!0,r=!1){const s=Me||me;if(s){const i=s.type;if(e===Rl){const a=Zh(i,!1);if(a&&(a===t||a===ut(t)||a===_s(ut(t))))return i}const o=la(s[e]||i[e],t)||la(s.appContext[e],t);return!o&&r?i:o}}function la(e,t){return e&&(e[t]||e[ut(t)]||e[_s(ut(t))])}function Qt(e,t,n,r){let s;const i=n&&n[r];if(K(e)||ve(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(de(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ei=e=>e?$l(e)?Cs(e)||e.proxy:Ei(e.parent):null,er=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ei(e.parent),$root:e=>Ei(e.root),$emit:e=>e.emit,$options:e=>ho(e),$forceUpdate:e=>e.f||(e.f=()=>uo(e.update)),$nextTick:e=>e.n||(e.n=gl.bind(e.proxy)),$watch:e=>ah.bind(e)}),Hs=(e,t)=>e!==fe&&!e.__isScriptSetup&&Z(e,t),Ih={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Hs(r,t))return o[t]=1,r[t];if(s!==fe&&Z(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&Z(l,t))return o[t]=3,i[t];if(n!==fe&&Z(n,t))return o[t]=4,n[t];Ii&&(o[t]=0)}}const u=er[t];let f,p;if(u)return t==="$attrs"&&xe(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==fe&&Z(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,Z(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Hs(s,t)?(s[t]=n,!0):r!==fe&&Z(r,t)?(r[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==fe&&Z(e,o)||Hs(t,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(er,o)||Z(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ii=!0;function Th(e){const t=ho(e),n=e.proxy,r=e.ctx;Ii=!1,t.beforeCreate&&ua(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:_,activated:b,deactivated:N,beforeDestroy:O,beforeUnmount:L,destroyed:I,unmounted:C,render:j,renderTracked:G,renderTriggered:ye,errorCaptured:q,serverPrefetch:ae,expose:se,inheritAttrs:_e,components:ge,directives:X,filters:Yt}=t;if(l&&Ch(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ce in o){const ne=o[ce];Q(ne)&&(r[ce]=ne.bind(n))}if(s){const ce=s.call(n,n);de(ce)&&(e.data=jn(ce))}if(Ii=!0,i)for(const ce in i){const ne=i[ce],pt=Q(ne)?ne.bind(n,n):Q(ne.get)?ne.get.bind(n,n):ze,Ot=!Q(ne)&&Q(ne.set)?ne.set.bind(n):ze,et=Pe({get:pt,set:Ot});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>et.value,set:Oe=>et.value=Oe})}if(a)for(const ce in a)Ol(a[ce],r,n,ce);if(c){const ce=Q(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(ne=>{jr(ne,ce[ne])})}u&&ua(u,e,"c");function we(ce,ne){K(ne)?ne.forEach(pt=>ce(pt.bind(n))):ne&&ce(ne.bind(n))}if(we(ph,f),we(fo,p),we(gh,g),we(mh,_),we(fh,b),we(dh,N),we(vh,q),we(yh,G),we(Ah,ye),we(Cl,L),we(Sl,C),we(_h,ae),K(se))if(se.length){const ce=e.exposed||(e.exposed={});se.forEach(ne=>{Object.defineProperty(ce,ne,{get:()=>n[ne],set:pt=>n[ne]=pt})})}else e.exposed||(e.exposed={});j&&e.render===ze&&(e.render=j),_e!=null&&(e.inheritAttrs=_e),ge&&(e.components=ge),X&&(e.directives=X)}function Ch(e,t,n=ze,r=!1){K(e)&&(e=Ti(e));for(const s in e){const i=e[s];let o;de(i)?"default"in i?o=Ge(i.from||s,i.default,!0):o=Ge(i.from||s):o=Ge(i),Te(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function ua(e,t,n){Fe(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ol(e,t,n,r){const s=r.includes(".")?bl(n,r):()=>n[r];if(ve(e)){const i=t[e];Q(i)&&jt(s,i)}else if(Q(e))jt(s,e.bind(n));else if(de(e))if(K(e))e.forEach(i=>Ol(i,t,n,r));else{const i=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(i)&&jt(s,i,e)}}function ho(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>ts(c,l,o,!0)),ts(c,t,o)),de(t)&&i.set(t,c),c}function ts(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&ts(e,i,n,!0),s&&s.forEach(o=>ts(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Sh[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Sh={data:fa,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Zt,directives:Zt,watch:Oh,provide:fa,inject:Rh};function fa(e,t){return t?e?function(){return Ce(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function Rh(e,t){return Zt(Ti(e),Ti(t))}function Ti(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function Zt(e,t){return e?Ce(Ce(Object.create(null),e),t):t}function Oh(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const r in t)n[r]=Re(e[r],t[r]);return n}function kh(e,t,n,r=!1){const s={},i={};Xr(i,Ts,1),e.propsDefaults=Object.create(null),kl(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Hd(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Ph(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=te(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(vs(e.emitsOptions,p))continue;const g=t[p];if(c)if(Z(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const _=ut(p);s[_]=Ci(c,a,_,g,e,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{kl(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!Z(t,f)&&((u=Un(f))===f||!Z(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ci(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!Z(t,f))&&(delete i[f],l=!0)}l&&vt(e,"set","$attrs")}function kl(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Fr(c))continue;const l=t[c];let u;s&&Z(s,u=ut(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:vs(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=te(n),l=a||fe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ci(s,c,f,l[f],e,!Z(l,f))}}return o}function Ci(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Q(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Nn(s),r=l[n]=c.call(null,t),ln())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Un(n))&&(r=!0))}return r}function Pl(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!Q(e)){const u=f=>{c=!0;const[p,g]=Pl(f,t,!0);Ce(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return de(e)&&r.set(e,Sn),Sn;if(K(i))for(let u=0;u<i.length;u++){const f=ut(i[u]);da(f)&&(o[f]=fe)}else if(i)for(const u in i){const f=ut(u);if(da(f)){const p=i[u],g=o[f]=K(p)||Q(p)?{type:p}:Object.assign({},p);if(g){const _=ga(Boolean,g.type),b=ga(String,g.type);g[0]=_>-1,g[1]=b<0||_<b,(_>-1||Z(g,"default"))&&a.push(f)}}}const l=[o,a];return de(e)&&r.set(e,l),l}function da(e){return e[0]!=="$"}function ha(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function pa(e,t){return ha(e)===ha(t)}function ga(e,t){return K(t)?t.findIndex(n=>pa(n,e)):Q(t)&&pa(t,e)?0:-1}const Dl=e=>e[0]==="_"||e==="$stable",po=e=>K(e)?e.map(rt):[rt(e)],Dh=(e,t,n)=>{if(t._n)return t;const r=eh((...s)=>po(t(...s)),n);return r._c=!1,r},xl=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Dl(s))continue;const i=e[s];if(Q(i))t[s]=Dh(s,i,r);else if(i!=null){const o=po(i);t[s]=()=>o}}},Nl=(e,t)=>{const n=po(t);e.slots.default=()=>n},xh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=te(t),Xr(t,"_",n)):xl(t,e.slots={})}else e.slots={},t&&Nl(e,t);Xr(e.slots,Ts,1)},Nh=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=fe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(Ce(s,t),!n&&a===1&&delete s._):(i=!t.$stable,xl(t,s)),o=t}else t&&(Nl(e,t),o={default:1});if(i)for(const a in s)!Dl(a)&&!(a in o)&&delete s[a]};function Ll(){return{app:null,config:{isNativeTag:od,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lh=0;function Mh(e,t){return function(r,s=null){Q(r)||(r=Object.assign({},r)),s!=null&&!de(s)&&(s=null);const i=Ll(),o=new Set;let a=!1;const c=i.app={_uid:Lh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:rp,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=he(r,s);return p.appContext=i,u&&t?t(p,l):e(p,l,f),a=!0,c._container=l,l.__vue_app__=c,Cs(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Si(e,t,n,r,s=!1){if(K(e)){e.forEach((p,g)=>Si(p,t&&(K(t)?t[g]:t),n,r,s));return}if(Hr(r)&&!s)return;const i=r.shapeFlag&4?Cs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===fe?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ve(l)?(u[l]=null,Z(f,l)&&(f[l]=null)):Te(l)&&(l.value=null)),Q(c))$t(c,a,12,[o,u]);else{const p=ve(c),g=Te(c);if(p||g){const _=()=>{if(e.f){const b=p?Z(f,c)?f[c]:u[c]:c.value;s?K(b)&&Zi(b,i):K(b)?b.includes(i)||b.push(i):p?(u[c]=[i],Z(f,c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else p?(u[c]=o,Z(f,c)&&(f[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(_.id=-1,ke(_,n)):_()}}}const ke=oh;function Bh(e){return Uh(e)}function Uh(e,t){const n=dd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=ze,insertStaticContent:_}=e,b=(d,h,m,A=null,E=null,T=null,D=!1,R=null,k=!!h.dynamicChildren)=>{if(d===h)return;d&&!nn(d,h)&&(A=v(d),Oe(d,E,T,!0),d=null),h.patchFlag===-2&&(k=!1,h.dynamicChildren=null);const{type:S,ref:F,shapeFlag:M}=h;switch(S){case Is:N(d,h,m,A);break;case qe:O(d,h,m,A);break;case Vs:d==null&&L(h,m,A,D);break;case pe:ge(d,h,m,A,E,T,D,R,k);break;default:M&1?j(d,h,m,A,E,T,D,R,k):M&6?X(d,h,m,A,E,T,D,R,k):(M&64||M&128)&&S.process(d,h,m,A,E,T,D,R,k,P)}F!=null&&E&&Si(F,d&&d.ref,T,h||d,!h)},N=(d,h,m,A)=>{if(d==null)r(h.el=a(h.children),m,A);else{const E=h.el=d.el;h.children!==d.children&&l(E,h.children)}},O=(d,h,m,A)=>{d==null?r(h.el=c(h.children||""),m,A):h.el=d.el},L=(d,h,m,A)=>{[d.el,d.anchor]=_(d.children,h,m,A,d.el,d.anchor)},I=({el:d,anchor:h},m,A)=>{let E;for(;d&&d!==h;)E=p(d),r(d,m,A),d=E;r(h,m,A)},C=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},j=(d,h,m,A,E,T,D,R,k)=>{D=D||h.type==="svg",d==null?G(h,m,A,E,T,D,R,k):ae(d,h,E,T,D,R,k)},G=(d,h,m,A,E,T,D,R)=>{let k,S;const{type:F,props:M,shapeFlag:$,transition:W,dirs:J}=d;if(k=d.el=o(d.type,T,M&&M.is,M),$&8?u(k,d.children):$&16&&q(d.children,k,null,A,E,T&&F!=="foreignObject",D,R),J&&Jt(d,null,A,"created"),ye(k,d,d.scopeId,D,A),M){for(const oe in M)oe!=="value"&&!Fr(oe)&&i(k,oe,null,M[oe],T,d.children,A,E,Ee);"value"in M&&i(k,"value",null,M.value),(S=M.onVnodeBeforeMount)&&nt(S,A,d)}J&&Jt(d,null,A,"beforeMount");const ue=(!E||E&&!E.pendingBranch)&&W&&!W.persisted;ue&&W.beforeEnter(k),r(k,h,m),((S=M&&M.onVnodeMounted)||ue||J)&&ke(()=>{S&&nt(S,A,d),ue&&W.enter(k),J&&Jt(d,null,A,"mounted")},E)},ye=(d,h,m,A,E)=>{if(m&&g(d,m),A)for(let T=0;T<A.length;T++)g(d,A[T]);if(E){let T=E.subTree;if(h===T){const D=E.vnode;ye(d,D,D.scopeId,D.slotScopeIds,E.parent)}}},q=(d,h,m,A,E,T,D,R,k=0)=>{for(let S=k;S<d.length;S++){const F=d[S]=R?Nt(d[S]):rt(d[S]);b(null,F,h,m,A,E,T,D,R)}},ae=(d,h,m,A,E,T,D)=>{const R=h.el=d.el;let{patchFlag:k,dynamicChildren:S,dirs:F}=h;k|=d.patchFlag&16;const M=d.props||fe,$=h.props||fe;let W;m&&Xt(m,!1),(W=$.onVnodeBeforeUpdate)&&nt(W,m,h,d),F&&Jt(h,d,m,"beforeUpdate"),m&&Xt(m,!0);const J=E&&h.type!=="foreignObject";if(S?se(d.dynamicChildren,S,R,m,A,J,T):D||ne(d,h,R,null,m,A,J,T,!1),k>0){if(k&16)_e(R,h,M,$,m,A,E);else if(k&2&&M.class!==$.class&&i(R,"class",null,$.class,E),k&4&&i(R,"style",M.style,$.style,E),k&8){const ue=h.dynamicProps;for(let oe=0;oe<ue.length;oe++){const Ae=ue[oe],je=M[Ae],wn=$[Ae];(wn!==je||Ae==="value")&&i(R,Ae,je,wn,E,d.children,m,A,Ee)}}k&1&&d.children!==h.children&&u(R,h.children)}else!D&&S==null&&_e(R,h,M,$,m,A,E);((W=$.onVnodeUpdated)||F)&&ke(()=>{W&&nt(W,m,h,d),F&&Jt(h,d,m,"updated")},A)},se=(d,h,m,A,E,T,D)=>{for(let R=0;R<h.length;R++){const k=d[R],S=h[R],F=k.el&&(k.type===pe||!nn(k,S)||k.shapeFlag&70)?f(k.el):m;b(k,S,F,null,A,E,T,D,!0)}},_e=(d,h,m,A,E,T,D)=>{if(m!==A){if(m!==fe)for(const R in m)!Fr(R)&&!(R in A)&&i(d,R,m[R],null,D,h.children,E,T,Ee);for(const R in A){if(Fr(R))continue;const k=A[R],S=m[R];k!==S&&R!=="value"&&i(d,R,S,k,D,h.children,E,T,Ee)}"value"in A&&i(d,"value",m.value,A.value)}},ge=(d,h,m,A,E,T,D,R,k)=>{const S=h.el=d?d.el:a(""),F=h.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:W}=h;W&&(R=R?R.concat(W):W),d==null?(r(S,m,A),r(F,m,A),q(h.children,m,F,E,T,D,R,k)):M>0&&M&64&&$&&d.dynamicChildren?(se(d.dynamicChildren,$,m,E,T,D,R),(h.key!=null||E&&h===E.subTree)&&Ml(d,h,!0)):ne(d,h,m,F,E,T,D,R,k)},X=(d,h,m,A,E,T,D,R,k)=>{h.slotScopeIds=R,d==null?h.shapeFlag&512?E.ctx.activate(h,m,A,D,k):Yt(h,m,A,E,T,D,k):yn(d,h,k)},Yt=(d,h,m,A,E,T,D)=>{const R=d.component=Gh(d,A,E);if(ws(d)&&(R.ctx.renderer=P),Qh(R),R.asyncDep){if(E&&E.registerDep(R,we),!d.el){const k=R.subTree=he(qe);O(null,k,h,m)}return}we(R,d,h,m,E,T,D)},yn=(d,h,m)=>{const A=h.component=d.component;if(rh(d,h,m))if(A.asyncDep&&!A.asyncResolved){ce(A,h,m);return}else A.next=h,Yd(A.update),A.update();else h.el=d.el,A.vnode=h},we=(d,h,m,A,E,T,D)=>{const R=()=>{if(d.isMounted){let{next:F,bu:M,u:$,parent:W,vnode:J}=d,ue=F,oe;Xt(d,!1),F?(F.el=J.el,ce(d,F,D)):F=J,M&&$r(M),(oe=F.props&&F.props.onVnodeBeforeUpdate)&&nt(oe,W,F,J),Xt(d,!0);const Ae=$s(d),je=d.subTree;d.subTree=Ae,b(je,Ae,f(je.el),v(je),d,E,T),F.el=Ae.el,ue===null&&sh(d,Ae.el),$&&ke($,E),(oe=F.props&&F.props.onVnodeUpdated)&&ke(()=>nt(oe,W,F,J),E)}else{let F;const{el:M,props:$}=h,{bm:W,m:J,parent:ue}=d,oe=Hr(h);if(Xt(d,!1),W&&$r(W),!oe&&(F=$&&$.onVnodeBeforeMount)&&nt(F,ue,h),Xt(d,!0),M&&re){const Ae=()=>{d.subTree=$s(d),re(M,d.subTree,d,E,null)};oe?h.type.__asyncLoader().then(()=>!d.isUnmounted&&Ae()):Ae()}else{const Ae=d.subTree=$s(d);b(null,Ae,m,A,d,E,T),h.el=Ae.el}if(J&&ke(J,E),!oe&&(F=$&&$.onVnodeMounted)){const Ae=h;ke(()=>nt(F,ue,Ae),E)}(h.shapeFlag&256||ue&&Hr(ue.vnode)&&ue.vnode.shapeFlag&256)&&d.a&&ke(d.a,E),d.isMounted=!0,h=m=A=null}},k=d.effect=new ro(R,()=>uo(S),d.scope),S=d.update=()=>k.run();S.id=d.uid,Xt(d,!0),S()},ce=(d,h,m)=>{h.component=d;const A=d.vnode.props;d.vnode=h,d.next=null,Ph(d,h.props,A,m),Nh(d,h.children,m),Fn(),oa(),$n()},ne=(d,h,m,A,E,T,D,R,k=!1)=>{const S=d&&d.children,F=d?d.shapeFlag:0,M=h.children,{patchFlag:$,shapeFlag:W}=h;if($>0){if($&128){Ot(S,M,m,A,E,T,D,R,k);return}else if($&256){pt(S,M,m,A,E,T,D,R,k);return}}W&8?(F&16&&Ee(S,E,T),M!==S&&u(m,M)):F&16?W&16?Ot(S,M,m,A,E,T,D,R,k):Ee(S,E,T,!0):(F&8&&u(m,""),W&16&&q(M,m,A,E,T,D,R,k))},pt=(d,h,m,A,E,T,D,R,k)=>{d=d||Sn,h=h||Sn;const S=d.length,F=h.length,M=Math.min(S,F);let $;for($=0;$<M;$++){const W=h[$]=k?Nt(h[$]):rt(h[$]);b(d[$],W,m,null,E,T,D,R,k)}S>F?Ee(d,E,T,!0,!1,M):q(h,m,A,E,T,D,R,k,M)},Ot=(d,h,m,A,E,T,D,R,k)=>{let S=0;const F=h.length;let M=d.length-1,$=F-1;for(;S<=M&&S<=$;){const W=d[S],J=h[S]=k?Nt(h[S]):rt(h[S]);if(nn(W,J))b(W,J,m,null,E,T,D,R,k);else break;S++}for(;S<=M&&S<=$;){const W=d[M],J=h[$]=k?Nt(h[$]):rt(h[$]);if(nn(W,J))b(W,J,m,null,E,T,D,R,k);else break;M--,$--}if(S>M){if(S<=$){const W=$+1,J=W<F?h[W].el:A;for(;S<=$;)b(null,h[S]=k?Nt(h[S]):rt(h[S]),m,J,E,T,D,R,k),S++}}else if(S>$)for(;S<=M;)Oe(d[S],E,T,!0),S++;else{const W=S,J=S,ue=new Map;for(S=J;S<=$;S++){const Le=h[S]=k?Nt(h[S]):rt(h[S]);Le.key!=null&&ue.set(Le.key,S)}let oe,Ae=0;const je=$-J+1;let wn=!1,Qo=0;const qn=new Array(je);for(S=0;S<je;S++)qn[S]=0;for(S=W;S<=M;S++){const Le=d[S];if(Ae>=je){Oe(Le,E,T,!0);continue}let tt;if(Le.key!=null)tt=ue.get(Le.key);else for(oe=J;oe<=$;oe++)if(qn[oe-J]===0&&nn(Le,h[oe])){tt=oe;break}tt===void 0?Oe(Le,E,T,!0):(qn[tt-J]=S+1,tt>=Qo?Qo=tt:wn=!0,b(Le,h[tt],m,null,E,T,D,R,k),Ae++)}const Yo=wn?Fh(qn):Sn;for(oe=Yo.length-1,S=je-1;S>=0;S--){const Le=J+S,tt=h[Le],Jo=Le+1<F?h[Le+1].el:A;qn[S]===0?b(null,tt,m,Jo,E,T,D,R,k):wn&&(oe<0||S!==Yo[oe]?et(tt,m,Jo,2):oe--)}}},et=(d,h,m,A,E=null)=>{const{el:T,type:D,transition:R,children:k,shapeFlag:S}=d;if(S&6){et(d.component.subTree,h,m,A);return}if(S&128){d.suspense.move(h,m,A);return}if(S&64){D.move(d,h,m,P);return}if(D===pe){r(T,h,m);for(let M=0;M<k.length;M++)et(k[M],h,m,A);r(d.anchor,h,m);return}if(D===Vs){I(d,h,m);return}if(A!==2&&S&1&&R)if(A===0)R.beforeEnter(T),r(T,h,m),ke(()=>R.enter(T),E);else{const{leave:M,delayLeave:$,afterLeave:W}=R,J=()=>r(T,h,m),ue=()=>{M(T,()=>{J(),W&&W()})};$?$(T,J,ue):ue()}else r(T,h,m)},Oe=(d,h,m,A=!1,E=!1)=>{const{type:T,props:D,ref:R,children:k,dynamicChildren:S,shapeFlag:F,patchFlag:M,dirs:$}=d;if(R!=null&&Si(R,null,m,d,!0),F&256){h.ctx.deactivate(d);return}const W=F&1&&$,J=!Hr(d);let ue;if(J&&(ue=D&&D.onVnodeBeforeUnmount)&&nt(ue,h,d),F&6)Pr(d.component,m,A);else{if(F&128){d.suspense.unmount(m,A);return}W&&Jt(d,null,h,"beforeUnmount"),F&64?d.type.remove(d,h,m,E,P,A):S&&(T!==pe||M>0&&M&64)?Ee(S,h,m,!1,!0):(T===pe&&M&384||!E&&F&16)&&Ee(k,h,m),A&&vn(d)}(J&&(ue=D&&D.onVnodeUnmounted)||W)&&ke(()=>{ue&&nt(ue,h,d),W&&Jt(d,null,h,"unmounted")},m)},vn=d=>{const{type:h,el:m,anchor:A,transition:E}=d;if(h===pe){bn(m,A);return}if(h===Vs){C(d);return}const T=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:D,delayLeave:R}=E,k=()=>D(m,T);R?R(d.el,T,k):k()}else T()},bn=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},Pr=(d,h,m)=>{const{bum:A,scope:E,update:T,subTree:D,um:R}=d;A&&$r(A),E.stop(),T&&(T.active=!1,Oe(D,d,h,m)),R&&ke(R,h),ke(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ee=(d,h,m,A=!1,E=!1,T=0)=>{for(let D=T;D<d.length;D++)Oe(d[D],h,m,A,E)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,h,m)=>{d==null?h._vnode&&Oe(h._vnode,null,null,!0):b(h._vnode||null,d,h,null,null,null,m),oa(),_l(),h._vnode=d},P={p:b,um:Oe,m:et,r:vn,mt:Yt,mc:q,pc:ne,pbc:se,n:v,o:e};let U,re;return t&&([U,re]=t(P)),{render:x,hydrate:U,createApp:Mh(x,U)}}function Xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ml(e,t,n=!1){const r=e.children,s=t.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Nt(s[i]),a.el=o.el),n||Ml(o,a)),a.type===Is&&(a.el=o.el)}}function Fh(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const $h=e=>e.__isTeleport,pe=Symbol(void 0),Is=Symbol(void 0),qe=Symbol(void 0),Vs=Symbol(void 0),tr=[];let We=null;function z(e=!1){tr.push(We=e?null:[])}function jh(){tr.pop(),We=tr[tr.length-1]||null}let fr=1;function ma(e){fr+=e}function Bl(e){return e.dynamicChildren=fr>0?We||Sn:null,jh(),fr>0&&We&&We.push(e),e}function Y(e,t,n,r,s,i){return Bl(w(e,t,n,r,s,i,!0))}function go(e,t,n,r,s){return Bl(he(e,t,n,r,s,!0))}function Ri(e){return e?e.__v_isVNode===!0:!1}function nn(e,t){return e.type===t.type&&e.key===t.key}const Ts="__vInternal",Ul=({key:e})=>e??null,Vr=({ref:e,ref_key:t,ref_for:n})=>e!=null?ve(e)||Te(e)||Q(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function w(e,t=null,n=null,r=0,s=null,i=e===pe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ul(t),ref:t&&Vr(t),scopeId:bs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Me};return a?(mo(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),fr>0&&!o&&We&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&We.push(c),c}const he=Hh;function Hh(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===wh)&&(e=qe),Ri(e)){const a=Gt(e,t,!0);return n&&mo(a,n),fr>0&&!i&&We&&(a.shapeFlag&6?We[We.indexOf(e)]=a:We.push(a)),a.patchFlag|=-2,a}if(ep(e)&&(e=e.__vccOpts),t){t=Vh(t);let{class:a,style:c}=t;a&&!ve(a)&&(t.class=Ji(a)),de(c)&&(al(c)&&!K(c)&&(c=Ce({},c)),t.style=Yi(c))}const o=ve(e)?1:ih(e)?128:$h(e)?64:de(e)?4:Q(e)?2:0;return w(e,t,n,r,s,o,i,!0)}function Vh(e){return e?al(e)||Ts in e?Ce({},e):e:null}function Gt(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?Wh(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Ul(a),ref:t&&t.ref?n&&s?K(s)?s.concat(Vr(t)):[s,Vr(t)]:Vr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Fl(e=" ",t=0){return he(Is,null,e,t)}function Ye(e="",t=!1){return t?(z(),go(qe,null,e)):he(qe,null,e)}function rt(e){return e==null||typeof e=="boolean"?he(qe):K(e)?he(pe,null,e.slice()):typeof e=="object"?Nt(e):he(Is,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gt(e)}function mo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),mo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Ts in t)?t._ctx=Me:s===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[Fl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Wh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Ji([t.class,r.class]));else if(s==="style")t.style=Yi([t.style,r.style]);else if(ps(s)){const i=t[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function nt(e,t,n,r=null){Fe(e,t,7,[n,r])}const Kh=Ll();let zh=0;function Gh(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Kh,i={uid:zh++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new hd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pl(r,s),emitsOptions:yl(r,s),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:r.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Zd.bind(null,i),e.ce&&e.ce(i),i}let me=null;const qh=()=>me||Me,Nn=e=>{me=e,e.scope.on()},ln=()=>{me&&me.scope.off(),me=null};function $l(e){return e.vnode.shapeFlag&4}let dr=!1;function Qh(e,t=!1){dr=t;const{props:n,children:r}=e.vnode,s=$l(e);kh(e,n,s,t),xh(e,r);const i=s?Yh(e,t):void 0;return dr=!1,i}function Yh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=cl(new Proxy(e.ctx,Ih));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Xh(e):null;Nn(e),Fn();const i=$t(r,e,0,[e.props,s]);if($n(),ln(),Gc(i)){if(i.then(ln,ln),t)return i.then(o=>{_a(e,o,t)}).catch(o=>{ys(o,e,0)});e.asyncDep=i}else _a(e,i,t)}else jl(e,t)}function _a(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:de(t)&&(e.setupState=dl(t)),jl(e,n)}let Aa;function jl(e,t,n){const r=e.type;if(!e.render){if(!t&&Aa&&!r.render){const s=r.template||ho(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ce(Ce({isCustomElement:i,delimiters:a},o),c);r.render=Aa(s,l)}}e.render=r.render||ze}Nn(e),Fn(),Th(e),$n(),ln()}function Jh(e){return new Proxy(e.attrs,{get(t,n){return xe(e,"get","$attrs"),t[n]}})}function Xh(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Jh(e))},slots:e.slots,emit:e.emit,expose:t}}function Cs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(dl(cl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in er)return er[n](e)},has(t,n){return n in t||n in er}}))}function Zh(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function ep(e){return Q(e)&&"__vccOpts"in e}const Pe=(e,t)=>Gd(e,t,dr);function Hl(e,t,n){const r=arguments.length;return r===2?de(t)&&!K(t)?Ri(t)?he(e,null,[t]):he(e,t):he(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ri(n)&&(n=[n]),he(e,t,n))}const tp=Symbol(""),np=()=>Ge(tp),rp="3.2.47",sp="http://www.w3.org/2000/svg",rn=typeof document<"u"?document:null,ya=rn&&rn.createElement("template"),ip={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?rn.createElementNS(sp,e):rn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>rn.createTextNode(e),createComment:e=>rn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ya.innerHTML=r?`<svg>${e}</svg>`:e;const a=ya.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function op(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ap(e,t,n){const r=e.style,s=ve(n);if(n&&!s){if(t&&!ve(t))for(const i in t)n[i]==null&&Oi(r,i,"");for(const i in n)Oi(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const va=/\s*!important$/;function Oi(e,t,n){if(K(n))n.forEach(r=>Oi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=cp(e,t);va.test(n)?e.setProperty(Un(r),n.replace(va,""),"important"):e[r]=n}}const ba=["Webkit","Moz","ms"],Ws={};function cp(e,t){const n=Ws[t];if(n)return n;let r=ut(t);if(r!=="filter"&&r in e)return Ws[t]=r;r=_s(r);for(let s=0;s<ba.length;s++){const i=ba[s]+r;if(i in e)return Ws[t]=i}return t}const wa="http://www.w3.org/1999/xlink";function lp(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(wa,t.slice(6,t.length)):e.setAttributeNS(wa,t,n);else{const i=id(t);n==null||i&&!Wc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function up(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Wc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Tn(e,t,n,r){e.addEventListener(t,n,r)}function fp(e,t,n,r){e.removeEventListener(t,n,r)}function dp(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=hp(t);if(r){const l=i[t]=mp(r,s);Tn(e,a,l,c)}else o&&(fp(e,a,o,c),i[t]=void 0)}}const Ea=/(?:Once|Passive|Capture)$/;function hp(e){let t;if(Ea.test(e)){t={};let r;for(;r=e.match(Ea);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Un(e.slice(2)),t]}let Ks=0;const pp=Promise.resolve(),gp=()=>Ks||(pp.then(()=>Ks=0),Ks=Date.now());function mp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Fe(_p(r,n.value),t,5,[r])};return n.value=e,n.attached=gp(),n}function _p(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ia=/^on[a-z]/,Ap=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?op(e,r,s):t==="style"?ap(e,n,r):ps(t)?Xi(t)||dp(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):yp(e,t,r,s))?up(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),lp(e,t,r,s))};function yp(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ia.test(t)&&Q(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ia.test(t)&&ve(n)?!1:t in e}const vp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};uh.props;const Ta=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>$r(t,n):t};function bp(e){e.target.composing=!0}function Ca(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const hr={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=Ta(s);const i=r||s.props&&s.props.type==="number";Tn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=gi(a)),e._assign(a)}),n&&Tn(e,"change",()=>{e.value=e.value.trim()}),t||(Tn(e,"compositionstart",bp),Tn(e,"compositionend",Ca),Tn(e,"change",Ca))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=Ta(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&gi(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},wp=Ce({patchProp:Ap},ip);let Sa;function Ep(){return Sa||(Sa=Bh(wp))}const Ip=(...e)=>{const t=Ep().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Tp(r);if(!s)return;const i=t._component;!Q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Tp(e){return ve(e)?document.querySelector(e):e}const dt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Cp={};function Sp(e,t){const n=bh("router-view");return z(),go(n)}const Rp=dt(Cp,[["render",Sp]]);function Op(){return Vl().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Vl(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const kp=typeof Proxy=="function",Pp="devtools-plugin:setup",Dp="plugin:settings:set";let En,ki;function xp(){var e;return En!==void 0||(typeof window<"u"&&window.performance?(En=!0,ki=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(En=!0,ki=global.perf_hooks.performance):En=!1),En}function Np(){return xp()?ki.now():Date.now()}class Lp{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const o in t.settings){const a=t.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Np()}},n&&n.on(Dp,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Mp(e,t){const n=e,r=Vl(),s=Op(),i=kp&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(Pp,e,t);else{const o=i?new Lp(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:o}),o&&t(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Wl="store";function Je(e){return e===void 0&&(e=null),Ge(e!==null?e:Wl)}function Hn(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function Bp(e){return e!==null&&typeof e=="object"}function Up(e){return e&&typeof e.then=="function"}function Fp(e,t){return function(){return e(t)}}function Kl(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function zl(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;Ss(e,n,[],e._modules.root,!0),_o(e,n,t)}function _o(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,i={};Hn(s,function(o,a){i[a]=Fp(o,e),Object.defineProperty(e.getters,a,{get:function(){return i[a]()},enumerable:!0})}),e._state=jn({data:t}),e.strict&&Wp(e),r&&n&&e._withCommit(function(){r.data=null})}function Ss(e,t,n,r,s){var i=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!i&&!s){var a=Ao(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit(function(){a[c]=r.state})}var l=r.context=$p(e,o,n);r.forEachMutation(function(u,f){var p=o+f;jp(e,p,u,l)}),r.forEachAction(function(u,f){var p=u.root?f:o+f,g=u.handler||u;Hp(e,p,g,l)}),r.forEachGetter(function(u,f){var p=o+f;Vp(e,p,u,l)}),r.forEachChild(function(u,f){Ss(e,t,n.concat(f),u,s)})}function $p(e,t,n){var r=t==="",s={dispatch:r?e.dispatch:function(i,o,a){var c=ns(i,o,a),l=c.payload,u=c.options,f=c.type;return(!u||!u.root)&&(f=t+f),e.dispatch(f,l)},commit:r?e.commit:function(i,o,a){var c=ns(i,o,a),l=c.payload,u=c.options,f=c.type;(!u||!u.root)&&(f=t+f),e.commit(f,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return e.getters}:function(){return Gl(e,t)}},state:{get:function(){return Ao(e.state,n)}}}),s}function Gl(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(s){if(s.slice(0,r)===t){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[s]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function jp(e,t,n,r){var s=e._mutations[t]||(e._mutations[t]=[]);s.push(function(o){n.call(e,r.state,o)})}function Hp(e,t,n,r){var s=e._actions[t]||(e._actions[t]=[]);s.push(function(o){var a=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},o);return Up(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(c){throw e._devtoolHook.emit("vuex:error",c),c}):a})}function Vp(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function Wp(e){jt(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function Ao(e,t){return t.reduce(function(n,r){return n[r]},e)}function ns(e,t,n){return Bp(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var Kp="vuex bindings",Ra="vuex:mutations",zs="vuex:actions",In="vuex",zp=0;function Gp(e,t){Mp({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Kp]},function(n){n.addTimelineLayer({id:Ra,label:"Vuex Mutations",color:Oa}),n.addTimelineLayer({id:zs,label:"Vuex Actions",color:Oa}),n.addInspector({id:In,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===e&&r.inspectorId===In)if(r.filter){var s=[];Jl(s,t._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Yl(t._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===e&&r.inspectorId===In){var s=r.nodeId;Gl(t,s),r.state=Yp(Xp(t._modules,s),s==="root"?t.getters:t._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===e&&r.inspectorId===In){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),t._withCommit(function(){r.set(t._state.data,i,r.state.value)})}}),t.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(In),n.sendInspectorState(In),n.addTimelineEvent({layerId:Ra,event:{time:Date.now(),title:r.type,data:i}})}),t.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=zp++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:zs,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:zs,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Oa=8702998,qp=6710886,Qp=16777215,ql={label:"namespaced",textColor:Qp,backgroundColor:qp};function Ql(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function Yl(e,t){return{id:t||"root",label:Ql(t),tags:e.namespaced?[ql]:[],children:Object.keys(e._children).map(function(n){return Yl(e._children[n],t+n+"/")})}}function Jl(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[ql]:[]}),Object.keys(t._children).forEach(function(s){Jl(e,t._children[s],n,r+s+"/")})}function Yp(e,t,n){t=n==="root"?t:t[n];var r=Object.keys(t),s={state:Object.keys(e.state).map(function(o){return{key:o,editable:!0,value:e.state[o]}})};if(r.length){var i=Jp(t);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Ql(o):o,editable:!1,value:Pi(function(){return i[o]})}})}return s}function Jp(e){var t={};return Object.keys(e).forEach(function(n){var r=n.split("/");if(r.length>1){var s=t,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Pi(function(){return e[n]})}else t[n]=Pi(function(){return e[n]})}),t}function Xp(e,t){var n=t.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+t+'".');return i===n.length-1?o:o._children},t==="root"?e:e.root._children)}function Pi(e){try{return e()}catch(t){return t}}var Xe=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},Xl={namespaced:{configurable:!0}};Xl.namespaced.get=function(){return!!this._rawModule.namespaced};Xe.prototype.addChild=function(t,n){this._children[t]=n};Xe.prototype.removeChild=function(t){delete this._children[t]};Xe.prototype.getChild=function(t){return this._children[t]};Xe.prototype.hasChild=function(t){return t in this._children};Xe.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};Xe.prototype.forEachChild=function(t){Hn(this._children,t)};Xe.prototype.forEachGetter=function(t){this._rawModule.getters&&Hn(this._rawModule.getters,t)};Xe.prototype.forEachAction=function(t){this._rawModule.actions&&Hn(this._rawModule.actions,t)};Xe.prototype.forEachMutation=function(t){this._rawModule.mutations&&Hn(this._rawModule.mutations,t)};Object.defineProperties(Xe.prototype,Xl);var mn=function(t){this.register([],t,!1)};mn.prototype.get=function(t){return t.reduce(function(n,r){return n.getChild(r)},this.root)};mn.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};mn.prototype.update=function(t){Zl([],this.root,t)};mn.prototype.register=function(t,n,r){var s=this;r===void 0&&(r=!0);var i=new Xe(n,r);if(t.length===0)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}n.modules&&Hn(n.modules,function(a,c){s.register(t.concat(c),a,r)})};mn.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};mn.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1];return n?n.hasChild(r):!1};function Zl(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;Zl(e.concat(r),t.getChild(r),n.modules[r])}}function Zp(e){return new Ne(e)}var Ne=function(t){var n=this;t===void 0&&(t={});var r=t.plugins;r===void 0&&(r=[]);var s=t.strict;s===void 0&&(s=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new mn(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(p,g){return c.call(o,p,g)},this.commit=function(p,g,_){return l.call(o,p,g,_)},this.strict=s;var u=this._modules.root.state;Ss(this,u,[],this._modules.root),_o(this,u),r.forEach(function(f){return f(n)})},yo={state:{configurable:!0}};Ne.prototype.install=function(t,n){t.provide(n||Wl,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Gp(t,this)};yo.state.get=function(){return this._state.data};yo.state.set=function(e){};Ne.prototype.commit=function(t,n,r){var s=this,i=ns(t,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};Ne.prototype.dispatch=function(t,n){var r=this,s=ns(t,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,f){l.then(function(p){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}u(p)},function(p){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,p)})}catch{}f(p)})})}};Ne.prototype.subscribe=function(t,n){return Kl(t,this._subscribers,n)};Ne.prototype.subscribeAction=function(t,n){var r=typeof t=="function"?{before:t}:t;return Kl(r,this._actionSubscribers,n)};Ne.prototype.watch=function(t,n,r){var s=this;return jt(function(){return t(s.state,s.getters)},n,Object.assign({},r))};Ne.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};Ne.prototype.registerModule=function(t,n,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),Ss(this,this.state,t,this._modules.get(t),r.preserveState),_o(this,this.state)};Ne.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=Ao(n.state,t.slice(0,-1));delete r[t[t.length-1]]}),zl(this)};Ne.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};Ne.prototype.hotUpdate=function(t){this._modules.update(t),zl(this,!0)};Ne.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(Ne.prototype,yo);const eg=Zp({state(){return{mainCardTypes:["All Cards","Monster","Spell Card","Trap Card"],selectedMainCardTypes:[],resetAtribute:!1,atributes:["DARK","LIGHT","EARTH","WATER","FIRE","WIND","DIVINE"],selectedAtributes:[],resetRace:!1,races:["Equip","Field","Quick-Play","Ritual","Continuous","Counter","Normal"],selectedRaces:[],spellType:!1,spellTypes:["Equip","Field","Quick-Play","Ritual","Continuous","Normal"],selectedSpellTypes:[],trapType:!1,trapTypes:["Normal","Counter","Continuous"],selectedTrapTypes:[],resetMonster:!1,monsters:["Spellcaster","Dragon","Zombie","Warrior","Beast-Warrior","Beast","Winged Beast","Fiend","Fairy","Insect","Dinosaur","Reptile","Fish","Sea Serpent","Aqua","Pyro","Thunder","Rock","Plant","Machine","Psychic","Divine-Beast","Wyrm","Cyberse","Creator-God"],selectedMonsters:[],resetType:!1,types:["Normal","Effect","Ritual","Fusion","Synchro","XYZ","Pendulum","Link","Toon","Spirit","Union","Gemini","Tuner","Flip"],selectedCardTypes:[],resetLevel:!1,levels:["0","1","2","3","4","5","6","7","8","9","10","11","12","13"],selectedLevels:[],isCleared:!1,allBox:!0,monstersBox:!1,spellsBox:!1,trapsBox:!1,allfiltersArray:[],ByAttackAscending:!1,ByAttackDescending:!1,ByDefenceAscending:!1,ByDefenceDescending:!1,gotoPage:1,galleryActive:!0,listActive:!1,favList:["Dark Magician",'"A" Cell Breeding Device']}},mutations:{showAllFilters(e){e.allBox=!0,e.monstersBox=!1,e.spellsBox=!1,e.trapsBox=!1},showMonsterFilters(e){e.allBox=!1,e.monstersBox=!0,e.spellsBox=!1,e.trapsBox=!1},showSpellFilters(e){e.allBox=!1,e.monstersBox=!1,e.spellsBox=!0,e.trapsBox=!1},showTrapsFilters(e){e.allBox=!1,e.monstersBox=!1,e.spellsBox=!1,e.trapsBox=!0},resetAllFilters(e){e.selectedAtributes=[],e.selectedCardTypes=[],e.selectedLevels=[],e.selectedMonsters=[],e.selectedRaces=[],e.allfiltersArray=[],e.ByAttackAscending=!1,e.ByAttackDescending=!1,e.ByDefenceAscending=!1,e.ByDefenceDescending=!1,console.log("Filtry zostały zresetowane")},setDefaultForAtributes(e){e.resetAtribute=!1},setDefaultForRaces(e){e.resetRace=!1},setDefaultForMonsters(e){e.resetMonster=!1},setDefaultForTypes(e){e.resetType=!1},setDefaultForLevels(e){e.resetLevel=!1},addLevel(e,t){if(!e.selectedLevels.includes(t))e.selectedLevels.push(t);else{const n=e.selectedLevels.indexOf(t);n!==-1&&e.selectedLevels.splice(n,1)}},addCardType(e,t){if(!e.selectedCardTypes.includes(t))e.selectedCardTypes.push(t);else{const n=e.selectedCardTypes.indexOf(t);n!==-1&&e.selectedCardTypes.splice(n,1)}},addMonsterType(e,t){if(!e.selectedMonsters.includes(t))e.selectedMonsters.push(t);else{const n=e.selectedMonsters.indexOf(t);n!==-1&&e.selectedMonsters.splice(n,1)}},addRace(e,t){if(!e.selectedRaces.includes(t))e.selectedRaces.push(t);else{const n=e.selectedRaces.indexOf(t);n!==-1&&e.selectedRaces.splice(n,1)}},addAtribute(e,t){if(!e.selectedAtributes.includes(t))e.selectedAtributes.push(t);else{const n=e.selectedAtributes.indexOf(t);n!==-1&&e.selectedAtributes.splice(n,1)}},setDefaultForSelectedAtributes(e){e.selectedAtributes.length==0&&(e.selectedAtributes=e.atributes)},setDefaultForSelectedMonsterTypes(e){e.selectedMonsters.length==0&&(e.selectedMonsters=e.monsters)},setDefaultForSelectedCardTypes(e){e.selectedCardTypes.length==0&&(e.selectedCardTypes=e.types)},setDefaultForSelectedLevels(e){e.selectedLevels.length==0&&(e.selectedLevels=e.levels)},setDefaultForSelectedRaces(e){e.selectedRaces.leght==0&&(e.selectedLevels=e.levels)},populateAllFiltersArray(e){e.allfiltersArray.push(e.selectedAtributes),e.allfiltersArray.push(e.selectedMonsters),e.allfiltersArray.push(e.selectedCardTypes),e.allfiltersArray.push(e.selectedLevels),e.allfiltersArray.push(e.selectedRaces),e.allfiltersArray=Array.from(new Set(e.allfiltersArray.flat())),console.log(e.allfiltersArray)},sortByAttackAscending(e){e.ByAttackAscending=!0,e.ByAttackDescending=!1,e.ByDefenceAscending=!1,e.ByDefenceDescending=!1},sortByAttackDescending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!0,e.ByDefenceAscending=!1,e.ByDefenceDescending=!1},sortByDefenceAscending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!1,e.ByDefenceAscending=!0,e.ByDefenceDescending=!1},sortByDefenceDescending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!1,e.ByDefenceAscending=!1,e.ByDefenceDescending=!0},showGallery(e){e.galleryActive=!0,e.listActive=!1},showList(e){e.galleryActive=!1,e.listActive=!0}},actions:{},modules:{}});/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Cn=typeof window<"u";function tg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ie=Object.assign;function Gs(e,t){const n={};for(const r in t){const s=t[r];n[r]=Qe(s)?s.map(e):e(s)}return n}const nr=()=>{},Qe=Array.isArray,ng=/\/$/,rg=e=>e.replace(ng,"");function qs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=ag(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function sg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ka(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ig(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ln(t.matched[r],n.matched[s])&&eu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ln(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function eu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!og(e[n],t[n]))return!1;return!0}function og(e,t){return Qe(e)?Pa(e,t):Qe(t)?Pa(t,e):e===t}function Pa(e,t){return Qe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ag(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var pr;(function(e){e.pop="pop",e.push="push"})(pr||(pr={}));var rr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(rr||(rr={}));function cg(e){if(!e)if(Cn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),rg(e)}const lg=/^[^#]+#/;function ug(e,t){return e.replace(lg,"#")+t}function fg(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Rs=()=>({left:window.pageXOffset,top:window.pageYOffset});function dg(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=fg(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Da(e,t){return(history.state?history.state.position-t:-1)+e}const Di=new Map;function hg(e,t){Di.set(e,t)}function pg(e){const t=Di.get(e);return Di.delete(e),t}let gg=()=>location.protocol+"//"+location.host;function tu(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ka(c,"")}return ka(n,e)+r+s}function mg(e,t,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=tu(e,location),_=n.value,b=t.value;let N=0;if(p){if(n.value=g,t.value=p,o&&o===_){o=null;return}N=b?p.position-b.position:0}else r(g);s.forEach(O=>{O(n.value,_,{delta:N,type:pr.pop,direction:N?N>0?rr.forward:rr.back:rr.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ie({},p.state,{scroll:Rs()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function xa(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Rs():null}}function _g(e){const{history:t,location:n}=window,r={value:tu(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:gg()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=ie({},t.state,xa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ie({},s.value,t.state,{forward:c,scroll:Rs()});i(u.current,u,!0);const f=ie({},xa(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Ag(e){e=cg(e);const t=_g(e),n=mg(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ie({location:"",base:e,go:r,createHref:ug.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function yg(e){return typeof e=="string"||e&&typeof e=="object"}function nu(e){return typeof e=="string"||typeof e=="symbol"}const Pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ru=Symbol("");var Na;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Na||(Na={}));function Mn(e,t){return ie(new Error,{type:e,[ru]:!0},t)}function gt(e,t){return e instanceof Error&&ru in e&&(t==null||!!(e.type&t))}const La="[^/]+?",vg={sensitive:!1,strict:!1,start:!0,end:!0},bg=/[.+*?^${}()[\]/\\]/g;function wg(e,t){const n=ie({},vg,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(bg,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:b,optional:N,regexp:O}=p;i.push({name:_,repeatable:b,optional:N});const L=O||La;if(L!==La){g+=10;try{new RegExp(`(${L})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${_}" (${L}): `+C.message)}}let I=b?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;f||(I=N&&l.length<2?`(?:/${I})`:"/"+I),N&&(I+="?"),s+=I,g+=20,N&&(g+=-8),b&&(g+=-20),L===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",_=i[p-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:b,optional:N}=g,O=_ in l?l[_]:"";if(Qe(O)&&!b)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const L=Qe(O)?O.join("/"):O;if(!L)if(N)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=L}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Eg(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ig(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Eg(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ma(r))return 1;if(Ma(s))return-1}return s.length-r.length}function Ma(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Tg={type:0,value:""},Cg=/[a-zA-Z0-9_]/;function Sg(e){if(!e)return[[]];if(e==="/")return[[Tg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Cg.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Rg(e,t,n){const r=wg(Sg(e.path),n),s=ie(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Og(e,t){const n=[],r=new Map;t=Fa({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,f,p){const g=!p,_=kg(u);_.aliasOf=p&&p.record;const b=Fa(t,u),N=[_];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of I)N.push(ie({},_,{components:p?p.record.components:_.components,path:C,aliasOf:p?p.record:_}))}let O,L;for(const I of N){const{path:C}=I;if(f&&C[0]!=="/"){const j=f.record.path,G=j[j.length-1]==="/"?"":"/";I.path=f.record.path+(C&&G+C)}if(O=Rg(I,f,b),p?p.alias.push(O):(L=L||O,L!==O&&L.alias.push(O),g&&u.name&&!Ua(O)&&o(u.name)),_.children){const j=_.children;for(let G=0;G<j.length;G++)i(j[G],O,p&&p.children[G])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return L?()=>{o(L)}:nr}function o(u){if(nu(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&Ig(u,n[f])>=0&&(u.record.path!==n[f].record.path||!su(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Ua(u)&&r.set(u.record.name,u)}function l(u,f){let p,g={},_,b;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Mn(1,{location:u});b=p.record.name,g=ie(Ba(f.params,p.keys.filter(L=>!L.optional).map(L=>L.name)),u.params&&Ba(u.params,p.keys.map(L=>L.name))),_=p.stringify(g)}else if("path"in u)_=u.path,p=n.find(L=>L.re.test(_)),p&&(g=p.parse(_),b=p.record.name);else{if(p=f.name?r.get(f.name):n.find(L=>L.re.test(f.path)),!p)throw Mn(1,{location:u,currentLocation:f});b=p.record.name,g=ie({},f.params,u.params),_=p.stringify(g)}const N=[];let O=p;for(;O;)N.unshift(O.record),O=O.parent;return{name:b,path:_,params:g,matched:N,meta:Dg(N)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ba(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function kg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Pg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Pg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ua(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dg(e){return e.reduce((t,n)=>ie(t,n.meta),{})}function Fa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function su(e,t){return t.children.some(n=>n===e||su(e,n))}const iu=/#/g,xg=/&/g,Ng=/\//g,Lg=/=/g,Mg=/\?/g,ou=/\+/g,Bg=/%5B/g,Ug=/%5D/g,au=/%5E/g,Fg=/%60/g,cu=/%7B/g,$g=/%7C/g,lu=/%7D/g,jg=/%20/g;function vo(e){return encodeURI(""+e).replace($g,"|").replace(Bg,"[").replace(Ug,"]")}function Hg(e){return vo(e).replace(cu,"{").replace(lu,"}").replace(au,"^")}function xi(e){return vo(e).replace(ou,"%2B").replace(jg,"+").replace(iu,"%23").replace(xg,"%26").replace(Fg,"`").replace(cu,"{").replace(lu,"}").replace(au,"^")}function Vg(e){return xi(e).replace(Lg,"%3D")}function Wg(e){return vo(e).replace(iu,"%23").replace(Mg,"%3F")}function Kg(e){return e==null?"":Wg(e).replace(Ng,"%2F")}function rs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function zg(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ou," "),o=i.indexOf("="),a=rs(o<0?i:i.slice(0,o)),c=o<0?null:rs(i.slice(o+1));if(a in t){let l=t[a];Qe(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function $a(e){let t="";for(let n in e){const r=e[n];if(n=Vg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Qe(r)?r.map(i=>i&&xi(i)):[r&&xi(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Gg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const qg=Symbol(""),ja=Symbol(""),Os=Symbol(""),uu=Symbol(""),Ni=Symbol("");function Qn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Lt(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Mn(4,{from:n,to:t})):f instanceof Error?a(f):yg(f)?a(Mn(2,{from:t,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Qs(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Qg(a)){const l=(a.__vccOpts||a)[t];l&&s.push(Lt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=tg(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Lt(p,n,r,i,o)()}))}}return s}function Qg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ha(e){const t=Ge(Os),n=Ge(uu),r=Pe(()=>t.resolve(B(e.to))),s=Pe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Ln.bind(null,u));if(p>-1)return p;const g=Va(c[l-2]);return l>1&&Va(u)===g&&f[f.length-1].path!==g?f.findIndex(Ln.bind(null,c[l-2])):p}),i=Pe(()=>s.value>-1&&Zg(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&eu(n.params,r.value.params));function a(c={}){return Xg(c)?t[B(e.replace)?"replace":"push"](B(e.to)).catch(nr):Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Yg=Il({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ha,setup(e,{slots:t}){const n=jn(Ha(e)),{options:r}=Ge(Os),s=Pe(()=>({[Wa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Hl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Jg=Yg;function Xg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Zg(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Qe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Va(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wa=(e,t,n)=>e??t??n,em=Il({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ge(Ni),s=Pe(()=>e.route||r.value),i=Ge(ja,0),o=Pe(()=>{let l=B(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Pe(()=>s.value.matched[o.value]);jr(ja,Pe(()=>o.value+1)),jr(qg,a),jr(Ni,s);const c=V();return jt(()=>[c.value,a.value,e.name],([l,u,f],[p,g,_])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Ln(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return Ka(n.default,{Component:p,route:l});const g=f.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,N=Hl(p,ie({},_,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Ka(n.default,{Component:N,route:l})||N}}});function Ka(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const tm=em;function nm(e){const t=Og(e.routes,e),n=e.parseQuery||zg,r=e.stringifyQuery||$a,s=e.history,i=Qn(),o=Qn(),a=Qn(),c=Vd(Pt);let l=Pt;Cn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Gs.bind(null,v=>""+v),f=Gs.bind(null,Kg),p=Gs.bind(null,rs);function g(v,x){let P,U;return nu(v)?(P=t.getRecordMatcher(v),U=x):U=v,t.addRoute(U,P)}function _(v){const x=t.getRecordMatcher(v);x&&t.removeRoute(x)}function b(){return t.getRoutes().map(v=>v.record)}function N(v){return!!t.getRecordMatcher(v)}function O(v,x){if(x=ie({},x||c.value),typeof v=="string"){const m=qs(n,v,x.path),A=t.resolve({path:m.path},x),E=s.createHref(m.fullPath);return ie(m,A,{params:p(A.params),hash:rs(m.hash),redirectedFrom:void 0,href:E})}let P;if("path"in v)P=ie({},v,{path:qs(n,v.path,x.path).path});else{const m=ie({},v.params);for(const A in m)m[A]==null&&delete m[A];P=ie({},v,{params:f(m)}),x.params=f(x.params)}const U=t.resolve(P,x),re=v.hash||"";U.params=u(p(U.params));const d=sg(r,ie({},v,{hash:Hg(re),path:U.path})),h=s.createHref(d);return ie({fullPath:d,hash:re,query:r===$a?Gg(v.query):v.query||{}},U,{redirectedFrom:void 0,href:h})}function L(v){return typeof v=="string"?qs(n,v,c.value.path):ie({},v)}function I(v,x){if(l!==v)return Mn(8,{from:x,to:v})}function C(v){return ye(v)}function j(v){return C(ie(L(v),{replace:!0}))}function G(v){const x=v.matched[v.matched.length-1];if(x&&x.redirect){const{redirect:P}=x;let U=typeof P=="function"?P(v):P;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=L(U):{path:U},U.params={}),ie({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function ye(v,x){const P=l=O(v),U=c.value,re=v.state,d=v.force,h=v.replace===!0,m=G(P);if(m)return ye(ie(L(m),{state:typeof m=="object"?ie({},re,m.state):re,force:d,replace:h}),x||P);const A=P;A.redirectedFrom=x;let E;return!d&&ig(r,U,P)&&(E=Mn(16,{to:A,from:U}),et(U,U,!0,!1)),(E?Promise.resolve(E):se(A,U)).catch(T=>gt(T)?gt(T,2)?T:Ot(T):ne(T,A,U)).then(T=>{if(T){if(gt(T,2))return ye(ie({replace:h},L(T.to),{state:typeof T.to=="object"?ie({},re,T.to.state):re,force:d}),x||A)}else T=ge(A,U,!0,h,re);return _e(A,U,T),T})}function q(v,x){const P=I(v,x);return P?Promise.reject(P):Promise.resolve()}function ae(v){const x=bn.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(v):v()}function se(v,x){let P;const[U,re,d]=rm(v,x);P=Qs(U.reverse(),"beforeRouteLeave",v,x);for(const m of U)m.leaveGuards.forEach(A=>{P.push(Lt(A,v,x))});const h=q.bind(null,v,x);return P.push(h),Ee(P).then(()=>{P=[];for(const m of i.list())P.push(Lt(m,v,x));return P.push(h),Ee(P)}).then(()=>{P=Qs(re,"beforeRouteUpdate",v,x);for(const m of re)m.updateGuards.forEach(A=>{P.push(Lt(A,v,x))});return P.push(h),Ee(P)}).then(()=>{P=[];for(const m of v.matched)if(m.beforeEnter&&!x.matched.includes(m))if(Qe(m.beforeEnter))for(const A of m.beforeEnter)P.push(Lt(A,v,x));else P.push(Lt(m.beforeEnter,v,x));return P.push(h),Ee(P)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),P=Qs(d,"beforeRouteEnter",v,x),P.push(h),Ee(P))).then(()=>{P=[];for(const m of o.list())P.push(Lt(m,v,x));return P.push(h),Ee(P)}).catch(m=>gt(m,8)?m:Promise.reject(m))}function _e(v,x,P){for(const U of a.list())ae(()=>U(v,x,P))}function ge(v,x,P,U,re){const d=I(v,x);if(d)return d;const h=x===Pt,m=Cn?history.state:{};P&&(U||h?s.replace(v.fullPath,ie({scroll:h&&m&&m.scroll},re)):s.push(v.fullPath,re)),c.value=v,et(v,x,P,h),Ot()}let X;function Yt(){X||(X=s.listen((v,x,P)=>{if(!Pr.listening)return;const U=O(v),re=G(U);if(re){ye(ie(re,{replace:!0}),U).catch(nr);return}l=U;const d=c.value;Cn&&hg(Da(d.fullPath,P.delta),Rs()),se(U,d).catch(h=>gt(h,12)?h:gt(h,2)?(ye(h.to,U).then(m=>{gt(m,20)&&!P.delta&&P.type===pr.pop&&s.go(-1,!1)}).catch(nr),Promise.reject()):(P.delta&&s.go(-P.delta,!1),ne(h,U,d))).then(h=>{h=h||ge(U,d,!1),h&&(P.delta&&!gt(h,8)?s.go(-P.delta,!1):P.type===pr.pop&&gt(h,20)&&s.go(-1,!1)),_e(U,d,h)}).catch(nr)}))}let yn=Qn(),we=Qn(),ce;function ne(v,x,P){Ot(v);const U=we.list();return U.length?U.forEach(re=>re(v,x,P)):console.error(v),Promise.reject(v)}function pt(){return ce&&c.value!==Pt?Promise.resolve():new Promise((v,x)=>{yn.add([v,x])})}function Ot(v){return ce||(ce=!v,Yt(),yn.list().forEach(([x,P])=>v?P(v):x()),yn.reset()),v}function et(v,x,P,U){const{scrollBehavior:re}=e;if(!Cn||!re)return Promise.resolve();const d=!P&&pg(Da(v.fullPath,0))||(U||!P)&&history.state&&history.state.scroll||null;return gl().then(()=>re(v,x,d)).then(h=>h&&dg(h)).catch(h=>ne(h,v,x))}const Oe=v=>s.go(v);let vn;const bn=new Set,Pr={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:N,getRoutes:b,resolve:O,options:e,push:C,replace:j,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:pt,install(v){const x=this;v.component("RouterLink",Jg),v.component("RouterView",tm),v.config.globalProperties.$router=x,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>B(c)}),Cn&&!vn&&c.value===Pt&&(vn=!0,C(s.location).catch(re=>{}));const P={};for(const re in Pt)P[re]=Pe(()=>c.value[re]);v.provide(Os,x),v.provide(uu,jn(P)),v.provide(Ni,c);const U=v.unmount;bn.add(v),v.unmount=function(){bn.delete(v),bn.size<1&&(l=Pt,X&&X(),X=null,c.value=Pt,vn=!1,ce=!1),U()}}};function Ee(v){return v.reduce((x,P)=>x.then(()=>ae(P)),Promise.resolve())}return Pr}function rm(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Ln(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Ln(l,c))||s.push(c))}return[n,r,s]}function bo(){return Ge(Os)}const sm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nO3BQREAMBADofVvOpXQ/w1QAEDtiHZEAADwtSPaEQEAwNeOaEcEANQDM6arjUtOdLsAAAAASUVORK5CYII=",im="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2Yy2oUYRCFOwEjMkYFQVcGBTG6UMwLRImXRbxlkSwUX8DLMrvoNqIvELNVgzjiEwgaQV9BM4lGvCxMQCReSbx8UlIdys5Mz6SnZqY79IFhGrr7nFP9V/1V3UGQI0cOVwCHgbvALPAN+ApMARPAELAuSCuATcB34jEDDARpBLABmKc2XAPag7QB2AWcB/ZrQAXgIDACfIgGEWQJQCdwLxLEmSBLANqAoglgOtWFHbMScyaIwSBrAK6YAO60wsBuYFj+E94vhR1iyt9hdQOSu4JSHWkU4rO/w+oGvizLw8aETS/EQmNcxhsoLcvDgSym0IQxMJLg/qvm/tuNcRlvQAazENJhO1eZPnbkaP42Ks1HB7MQ0mHbamxk91PRyIAB/kcxbiX0yVvzf4DTzXW90pRMlRZz2qR6ZHfSX4/mfHRSHW2peQ2gvUwQ1SBPfjRV47RMlaa5xWG65WlTpbAHZbYBXmizk99z2Sr1XLYmzxw51gqAncA48A74tcpt8xNwLsIn/eGJbqkop3DfFC1v88dlZqc+TEY4j8RcK1rHPJ98veYrrcCkWYEoFoAujwAkbULI58I+oKNu4pU6Hboqr43emAex5GWIPhe38XpHjd4bD8IlQ1hwcRmvVzB6PzwI7QS5x8VlvF630St5ED40hBddXMbrXTZ6RQ/CC4bwLbDZxWl5rS3Ae6N31isnLenTJJ9RavxO9MzozLhNrkA/8NuQvwR6XciDf/y9wCvDvwgc8uK3uRltOlIfJ5I8KX13OBmpsXCkGHI1H3nrmq/QNR/ot9J+3Um2anNar8fdem5Yr5V7KPM+faoh5k0Q2/Xt6id+WAJuAdsaaj4SSBdwQ8eLpJgFrgM7mma8QjD7tEbGgMdakB+1GBf1WAr/kV5zCdjbUtM5cqwR/AXOZpAIjqFdJAAAAABJRU5ErkJggg==",om="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgB7ZXtjcIwDIad0w1wG1xHuA2uGwATABPABrBBYYMyAWICYALKBGUD2MC8FpYIoW0+BP94pFdVXcUfceISfYjAdH1k5h88JlAG7Y0xJb0SBMigmh85aOAoTINzybxPt+xFO2gJFfpeQZcOnytvxQiydbKfqn3NYRxCKpHt+INyaKbmSm3CwFNJhUq6vj8FnFsZnqERvQs5BO67bl+t29unV9Jy6oQ8xknBgQ2W/kELx164Pr8a4hgKQ5orh4QT17ej2dcNlaX3RZ1mjk36UlqNzykVLJ7o0WV1mJRt12X8h+Zqti/jGDpRO/7LqKfGJnasbF2f3w1xZBgO6T4ge1h4sirxDcgNhcIto54S8P20MjxG0C90hMqo4fchhSsQmqLT+mqr+wAAAABJRU5ErkJggg==",am="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVR4Ae2UiwmAMAxEDye5UbuB3dBRNEIQkaqJNSC2D0KhveRKPwE6zUKJUUeLNhm1G0lilphuEqmaVZvhgLvEMxOL5rHJ1Vq1SWmuCh4Kvlq8ZOIqPuADEIFHRAReMhH4TIngj5bhbxUJDgh7A6NuyKLt/JEF1OxAhvByOXwAAAAASUVORK5CYII=";function fu(e,t){return function(){return e.apply(t,arguments)}}const{toString:du}=Object.prototype,{getPrototypeOf:wo}=Object,Eo=(e=>t=>{const n=du.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ct=e=>(e=e.toLowerCase(),t=>Eo(t)===e),ks=e=>t=>typeof t===e,{isArray:Vn}=Array,gr=ks("undefined");function cm(e){return e!==null&&!gr(e)&&e.constructor!==null&&!gr(e.constructor)&&qt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const hu=Ct("ArrayBuffer");function lm(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&hu(e.buffer),t}const um=ks("string"),qt=ks("function"),pu=ks("number"),Io=e=>e!==null&&typeof e=="object",fm=e=>e===!0||e===!1,Wr=e=>{if(Eo(e)!=="object")return!1;const t=wo(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},dm=Ct("Date"),hm=Ct("File"),pm=Ct("Blob"),gm=Ct("FileList"),mm=e=>Io(e)&&qt(e.pipe),_m=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||du.call(e)===t||qt(e.toString)&&e.toString()===t)},Am=Ct("URLSearchParams"),ym=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function br(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),Vn(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function gu(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const mu=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),_u=e=>!gr(e)&&e!==mu;function Li(){const{caseless:e}=_u(this)&&this||{},t={},n=(r,s)=>{const i=e&&gu(t,s)||s;Wr(t[i])&&Wr(r)?t[i]=Li(t[i],r):Wr(r)?t[i]=Li({},r):Vn(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&br(arguments[r],n);return t}const vm=(e,t,n,{allOwnKeys:r}={})=>(br(t,(s,i)=>{n&&qt(s)?e[i]=fu(s,n):e[i]=s},{allOwnKeys:r}),e),bm=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),wm=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Em=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&wo(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Im=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Tm=e=>{if(!e)return null;if(Vn(e))return e;let t=e.length;if(!pu(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Cm=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&wo(Uint8Array)),Sm=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Rm=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Om=Ct("HTMLFormElement"),km=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),za=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Pm=Ct("RegExp"),Au=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};br(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},Dm=e=>{Au(e,(t,n)=>{if(qt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(qt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},xm=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Vn(e)?r(e):r(String(e).split(t)),n},Nm=()=>{},Lm=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ys="abcdefghijklmnopqrstuvwxyz",Ga="0123456789",yu={DIGIT:Ga,ALPHA:Ys,ALPHA_DIGIT:Ys+Ys.toUpperCase()+Ga},Mm=(e=16,t=yu.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Bm(e){return!!(e&&qt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Um=e=>{const t=new Array(10),n=(r,s)=>{if(Io(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=Vn(r)?[]:{};return br(r,(o,a)=>{const c=n(o,s+1);!gr(c)&&(i[a]=c)}),t[s]=void 0,i}}return r};return n(e,0)},y={isArray:Vn,isArrayBuffer:hu,isBuffer:cm,isFormData:_m,isArrayBufferView:lm,isString:um,isNumber:pu,isBoolean:fm,isObject:Io,isPlainObject:Wr,isUndefined:gr,isDate:dm,isFile:hm,isBlob:pm,isRegExp:Pm,isFunction:qt,isStream:mm,isURLSearchParams:Am,isTypedArray:Cm,isFileList:gm,forEach:br,merge:Li,extend:vm,trim:ym,stripBOM:bm,inherits:wm,toFlatObject:Em,kindOf:Eo,kindOfTest:Ct,endsWith:Im,toArray:Tm,forEachEntry:Sm,matchAll:Rm,isHTMLForm:Om,hasOwnProperty:za,hasOwnProp:za,reduceDescriptors:Au,freezeMethods:Dm,toObjectSet:xm,toCamelCase:km,noop:Nm,toFiniteNumber:Lm,findKey:gu,global:mu,isContextDefined:_u,ALPHABET:yu,generateString:Mm,isSpecCompliantForm:Bm,toJSONObject:Um};function ee(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}y.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const vu=ee.prototype,bu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{bu[e]={value:e}});Object.defineProperties(ee,bu);Object.defineProperty(vu,"isAxiosError",{value:!0});ee.from=(e,t,n,r,s,i)=>{const o=Object.create(vu);return y.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),ee.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Fm=null;function Mi(e){return y.isPlainObject(e)||y.isArray(e)}function wu(e){return y.endsWith(e,"[]")?e.slice(0,-2):e}function qa(e,t,n){return e?e.concat(t).map(function(s,i){return s=wu(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function $m(e){return y.isArray(e)&&!e.some(Mi)}const jm=y.toFlatObject(y,{},null,function(t){return/^is[A-Z]/.test(t)});function Ps(e,t,n){if(!y.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,N){return!y.isUndefined(N[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&y.isSpecCompliantForm(t);if(!y.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(y.isDate(_))return _.toISOString();if(!c&&y.isBlob(_))throw new ee("Blob is not supported. Use a Buffer instead.");return y.isArrayBuffer(_)||y.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,b,N){let O=_;if(_&&!N&&typeof _=="object"){if(y.endsWith(b,"{}"))b=r?b:b.slice(0,-2),_=JSON.stringify(_);else if(y.isArray(_)&&$m(_)||(y.isFileList(_)||y.endsWith(b,"[]"))&&(O=y.toArray(_)))return b=wu(b),O.forEach(function(I,C){!(y.isUndefined(I)||I===null)&&t.append(o===!0?qa([b],C,i):o===null?b:b+"[]",l(I))}),!1}return Mi(_)?!0:(t.append(qa(N,b,i),l(_)),!1)}const f=[],p=Object.assign(jm,{defaultVisitor:u,convertValue:l,isVisitable:Mi});function g(_,b){if(!y.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(_),y.forEach(_,function(O,L){(!(y.isUndefined(O)||O===null)&&s.call(t,O,y.isString(L)?L.trim():L,b,p))===!0&&g(O,b?b.concat(L):[L])}),f.pop()}}if(!y.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Qa(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function To(e,t){this._pairs=[],e&&Ps(e,this,t)}const Eu=To.prototype;Eu.append=function(t,n){this._pairs.push([t,n])};Eu.toString=function(t){const n=t?function(r){return t.call(this,r,Qa)}:Qa;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Hm(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Iu(e,t,n){if(!t)return e;const r=n&&n.encode||Hm,s=n&&n.serialize;let i;if(s?i=s(t,n):i=y.isURLSearchParams(t)?t.toString():new To(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Vm{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){y.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ya=Vm,Tu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Wm=typeof URLSearchParams<"u"?URLSearchParams:To,Km=typeof FormData<"u"?FormData:null,zm=typeof Blob<"u"?Blob:null,Gm=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),qm=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ot={isBrowser:!0,classes:{URLSearchParams:Wm,FormData:Km,Blob:zm},isStandardBrowserEnv:Gm,isStandardBrowserWebWorkerEnv:qm,protocols:["http","https","file","blob","url","data"]};function Qm(e,t){return Ps(e,new ot.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return ot.isNode&&y.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Ym(e){return y.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Jm(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Cu(e){function t(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&y.isArray(s)?s.length:o,c?(y.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!y.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&y.isArray(s[o])&&(s[o]=Jm(s[o])),!a)}if(y.isFormData(e)&&y.isFunction(e.entries)){const n={};return y.forEachEntry(e,(r,s)=>{t(Ym(r),s,n,0)}),n}return null}const Xm={"Content-Type":void 0};function Zm(e,t,n){if(y.isString(e))try{return(t||JSON.parse)(e),y.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ds={transitional:Tu,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=y.isObject(t);if(i&&y.isHTMLForm(t)&&(t=new FormData(t)),y.isFormData(t))return s&&s?JSON.stringify(Cu(t)):t;if(y.isArrayBuffer(t)||y.isBuffer(t)||y.isStream(t)||y.isFile(t)||y.isBlob(t))return t;if(y.isArrayBufferView(t))return t.buffer;if(y.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qm(t,this.formSerializer).toString();if((a=y.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Ps(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Zm(t)):t}],transformResponse:[function(t){const n=this.transitional||Ds.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&y.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?ee.from(a,ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ot.classes.FormData,Blob:ot.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};y.forEach(["delete","get","head"],function(t){Ds.headers[t]={}});y.forEach(["post","put","patch"],function(t){Ds.headers[t]=y.merge(Xm)});const Co=Ds,e_=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),t_=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&e_[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ja=Symbol("internals");function Yn(e){return e&&String(e).trim().toLowerCase()}function Kr(e){return e===!1||e==null?e:y.isArray(e)?e.map(Kr):String(e)}function n_(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const r_=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Js(e,t,n,r,s){if(y.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!y.isString(t)){if(y.isString(r))return t.indexOf(r)!==-1;if(y.isRegExp(r))return r.test(t)}}function s_(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function i_(e,t){const n=y.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class xs{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,c,l){const u=Yn(c);if(!u)throw new Error("header name must be a non-empty string");const f=y.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Kr(a))}const o=(a,c)=>y.forEach(a,(l,u)=>i(l,u,c));return y.isPlainObject(t)||t instanceof this.constructor?o(t,n):y.isString(t)&&(t=t.trim())&&!r_(t)?o(t_(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Yn(t),t){const r=y.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return n_(s);if(y.isFunction(n))return n.call(this,s,r);if(y.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Yn(t),t){const r=y.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Js(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=Yn(o),o){const a=y.findKey(r,o);a&&(!n||Js(r,r[a],a,n))&&(delete r[a],s=!0)}}return y.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Js(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return y.forEach(this,(s,i)=>{const o=y.findKey(r,i);if(o){n[o]=Kr(s),delete n[i];return}const a=t?s_(i):String(i).trim();a!==i&&delete n[i],n[a]=Kr(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return y.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&y.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ja]=this[Ja]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Yn(o);r[a]||(i_(s,o),r[a]=!0)}return y.isArray(t)?t.forEach(i):i(t),this}}xs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.freezeMethods(xs.prototype);y.freezeMethods(xs);const yt=xs;function Xs(e,t){const n=this||Co,r=t||n,s=yt.from(r.headers);let i=r.data;return y.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Su(e){return!!(e&&e.__CANCEL__)}function wr(e,t,n){ee.call(this,e??"canceled",ee.ERR_CANCELED,t,n),this.name="CanceledError"}y.inherits(wr,ee,{__CANCEL__:!0});function o_(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const a_=ot.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),y.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),y.isString(i)&&c.push("path="+i),y.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function c_(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function l_(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ru(e,t){return e&&!c_(t)?l_(e,t):t}const u_=ot.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=y.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function f_(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function d_(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const g=u&&l-u;return g?Math.round(p*1e3/g):void 0}}function Xa(e,t){let n=0;const r=d_(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const h_=typeof XMLHttpRequest<"u",p_=h_&&function(e){return new Promise(function(n,r){let s=e.data;const i=yt.from(e.headers).normalize(),o=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}y.isFormData(s)&&(ot.isStandardBrowserEnv||ot.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+_))}const u=Ru(e.baseURL,e.url);l.open(e.method.toUpperCase(),Iu(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function f(){if(!l)return;const g=yt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:e,request:l};o_(function(O){n(O),c()},function(O){r(O),c()},b),l=null}if("onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(f)},l.onabort=function(){l&&(r(new ee("Request aborted",ee.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let _=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||Tu;e.timeoutErrorMessage&&(_=e.timeoutErrorMessage),r(new ee(_,b.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,l)),l=null},ot.isStandardBrowserEnv){const g=(e.withCredentials||u_(u))&&e.xsrfCookieName&&a_.read(e.xsrfCookieName);g&&i.set(e.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&y.forEach(i.toJSON(),function(_,b){l.setRequestHeader(b,_)}),y.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Xa(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Xa(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=g=>{l&&(r(!g||g.type?new wr(null,e,l):g),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const p=f_(u);if(p&&ot.protocols.indexOf(p)===-1){r(new ee("Unsupported protocol "+p+":",ee.ERR_BAD_REQUEST,e));return}l.send(s||null)})},zr={http:Fm,xhr:p_};y.forEach(zr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const g_={getAdapter:e=>{e=y.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=y.isString(n)?zr[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new ee(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(y.hasOwnProp(zr,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!y.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:zr};function Zs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new wr(null,e)}function Za(e){return Zs(e),e.headers=yt.from(e.headers),e.data=Xs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),g_.getAdapter(e.adapter||Co.adapter)(e).then(function(r){return Zs(e),r.data=Xs.call(e,e.transformResponse,r),r.headers=yt.from(r.headers),r},function(r){return Su(r)||(Zs(e),r&&r.response&&(r.response.data=Xs.call(e,e.transformResponse,r.response),r.response.headers=yt.from(r.response.headers))),Promise.reject(r)})}const ec=e=>e instanceof yt?e.toJSON():e;function Bn(e,t){t=t||{};const n={};function r(l,u,f){return y.isPlainObject(l)&&y.isPlainObject(u)?y.merge.call({caseless:f},l,u):y.isPlainObject(u)?y.merge({},u):y.isArray(u)?u.slice():u}function s(l,u,f){if(y.isUndefined(u)){if(!y.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!y.isUndefined(u))return r(void 0,u)}function o(l,u){if(y.isUndefined(u)){if(!y.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(ec(l),ec(u),!0)};return y.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const f=c[u]||s,p=f(e[u],t[u],u);y.isUndefined(p)&&f!==a||(n[u]=p)}),n}const Ou="1.3.5",So={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{So[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const tc={};So.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Ou+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new ee(s(o," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!tc[o]&&(tc[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function m_(e,t,n){if(typeof e!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new ee("option "+i+" must be "+c,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+i,ee.ERR_BAD_OPTION)}}const Bi={assertOptions:m_,validators:So},Dt=Bi.validators;class ss{constructor(t){this.defaults=t,this.interceptors={request:new Ya,response:new Ya}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Bn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Bi.assertOptions(r,{silentJSONParsing:Dt.transitional(Dt.boolean),forcedJSONParsing:Dt.transitional(Dt.boolean),clarifyTimeoutError:Dt.transitional(Dt.boolean)},!1),s!=null&&(y.isFunction(s)?n.paramsSerializer={serialize:s}:Bi.assertOptions(s,{encode:Dt.function,serialize:Dt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&y.merge(i.common,i[n.method]),o&&y.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=yt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,p;if(!c){const _=[Za.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),p=_.length,u=Promise.resolve(n);f<p;)u=u.then(_[f++],_[f++]);return u}p=a.length;let g=n;for(f=0;f<p;){const _=a[f++],b=a[f++];try{g=_(g)}catch(N){b.call(this,N);break}}try{u=Za.call(this,g)}catch(_){return Promise.reject(_)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=Bn(this.defaults,t);const n=Ru(t.baseURL,t.url);return Iu(n,t.params,t.paramsSerializer)}}y.forEach(["delete","get","head","options"],function(t){ss.prototype[t]=function(n,r){return this.request(Bn(r||{},{method:t,url:n,data:(r||{}).data}))}});y.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(Bn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ss.prototype[t]=n(),ss.prototype[t+"Form"]=n(!0)});const Gr=ss;class Ro{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new wr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ro(function(s){t=s}),cancel:t}}}const __=Ro;function A_(e){return function(n){return e.apply(null,n)}}function y_(e){return y.isObject(e)&&e.isAxiosError===!0}const Ui={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ui).forEach(([e,t])=>{Ui[t]=e});const v_=Ui;function ku(e){const t=new Gr(e),n=fu(Gr.prototype.request,t);return y.extend(n,Gr.prototype,t,{allOwnKeys:!0}),y.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ku(Bn(e,s))},n}const be=ku(Co);be.Axios=Gr;be.CanceledError=wr;be.CancelToken=__;be.isCancel=Su;be.VERSION=Ou;be.toFormData=Ps;be.AxiosError=ee;be.Cancel=be.CanceledError;be.all=function(t){return Promise.all(t)};be.spread=A_;be.isAxiosError=y_;be.mergeConfig=Bn;be.AxiosHeaders=yt;be.formToJSON=e=>Cu(y.isHTMLForm(e)?new FormData(e):e);be.HttpStatusCode=v_;be.default=be;const b_=be,St="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAa0lEQVR4Ae2SwQmAMBAEt4SUcCWkRDvQDizJElKCJeg9LiCSixBO8tmBIRCW3TwCEEKmIupqZy+zf2RcFvVSi5qc8mKZDQPIo+B4jSS7qw8QDCKNkbBybyS0vDUSXl7J6mlm/ISg/aMIIR1ue1EeIx7hZCkAAAAASUVORK5CYII=",Rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZElEQVR4Ae2PwQ2AMAwDPUJG8AgdkRHYgJEYoSMwAuQRpAqhIqr055PuF9kOIIT4i7nEJIp7hAXJ0K3uGVYkfsImfA/TSvgItzClhC/hNykl60eANQMWDEB3Q38dY0jvRggxmwvBdx4kGXzf3wAAAABJRU5ErkJggg==";const w_=e=>(Et("data-v-5a89dd88"),e=e(),It(),e),E_={class:"atribute-filters atribute-container"},I_=w_(()=>w("span",null,"Card Type",-1)),T_=["src"],C_={key:0,class:"atribute-items"},S_={__name:"MainCardTypesComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=V(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(z(),Y("div",E_,[w("div",{onClick:s,class:"atribute-head"},[I_,w("img",{src:r.value?B(Rt):B(St)},null,8,T_)]),r.value?(z(),Y("div",C_,[(z(!0),Y(pe,null,Qt(B(n).state.mainCardTypes,c=>(z(),Y("button",{class:"atribute-button",onClick:i},Ke(c),1))),256))])):Ye("",!0)]))}},R_=dt(S_,[["__scopeId","data-v-5a89dd88"]]);const O_=e=>(Et("data-v-7c09344d"),e=e(),It(),e),k_={class:"atribute-filters atribute-container"},P_=O_(()=>w("span",null,"Level / Rank",-1)),D_=["src"],x_={key:0,class:"atribute-items"},N_={__name:"LevelComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=V(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(z(),Y("div",k_,[w("div",{onClick:s,class:"atribute-head"},[P_,w("img",{src:r.value?B(Rt):B(St)},null,8,D_)]),r.value?(z(),Y("div",x_,[(z(!0),Y(pe,null,Qt(B(n).state.levels,c=>(z(),Y("button",{class:"atribute-button",onClick:i},Ke(c),1))),256))])):Ye("",!0)]))}},L_=dt(N_,[["__scopeId","data-v-7c09344d"]]);const M_=e=>(Et("data-v-c11bebfc"),e=e(),It(),e),B_={class:"atribute-filters atribute-container"},U_=M_(()=>w("span",null,"Monster Effect",-1)),F_=["src"],$_={key:0,class:"atribute-items"},j_={__name:"CardTypeComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=V(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(z(),Y("div",B_,[w("div",{onClick:s,class:"atribute-head"},[U_,w("img",{src:r.value?B(Rt):B(St)},null,8,F_)]),r.value?(z(),Y("div",$_,[(z(!0),Y(pe,null,Qt(B(n).state.types,c=>(z(),Y("button",{class:"atribute-button",onClick:i},Ke(c),1))),256))])):Ye("",!0)]))}},H_=dt(j_,[["__scopeId","data-v-c11bebfc"]]);const V_=e=>(Et("data-v-0d116583"),e=e(),It(),e),W_={class:"atribute-filters atribute-container"},K_=V_(()=>w("span",null,"Monster Type",-1)),z_=["src"],G_={key:0,class:"atribute-items"},q_={__name:"MonsterTypeComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=V(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(z(),Y("div",W_,[w("div",{onClick:s,class:"atribute-head"},[K_,w("img",{src:r.value?B(Rt):B(St)},null,8,z_)]),r.value?(z(),Y("div",G_,[(z(!0),Y(pe,null,Qt(B(n).state.monsters,c=>(z(),Y("button",{class:"atribute-button",onClick:i},Ke(c),1))),256))])):Ye("",!0)]))}},Q_=dt(q_,[["__scopeId","data-v-0d116583"]]);const Y_=e=>(Et("data-v-1ab94568"),e=e(),It(),e),J_={class:"atribute-filters atribute-container"},X_=Y_(()=>w("span",null,"Spell Types",-1)),Z_=["src"],eA={key:0,class:"atribute-items"},tA={__name:"SpellTypesComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=V(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(z(),Y("div",J_,[w("div",{onClick:s,class:"atribute-head"},[X_,w("img",{src:r.value?B(Rt):B(St)},null,8,Z_)]),r.value?(z(),Y("div",eA,[(z(!0),Y(pe,null,Qt(B(n).state.spellTypes,c=>(z(),Y("button",{class:"atribute-button",onClick:i},Ke(c),1))),256))])):Ye("",!0)]))}},nA=dt(tA,[["__scopeId","data-v-1ab94568"]]);const rA=e=>(Et("data-v-1eed0a7c"),e=e(),It(),e),sA={class:"atribute-filters atribute-container"},iA=rA(()=>w("span",null,"Trap Types",-1)),oA=["src"],aA={key:0,class:"atribute-items"},cA={__name:"TrapTypesComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=V(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(z(),Y("div",sA,[w("div",{onClick:s,class:"atribute-head"},[iA,w("img",{src:r.value?B(Rt):B(St)},null,8,oA)]),r.value?(z(),Y("div",aA,[(z(!0),Y(pe,null,Qt(B(n).state.trapTypes,c=>(z(),Y("button",{class:"atribute-button",onClick:i},Ke(c),1))),256))])):Ye("",!0)]))}},lA=dt(cA,[["__scopeId","data-v-1eed0a7c"]]);const Er=e=>(Et("data-v-14957565"),e=e(),It(),e),uA={class:"atribute-filters atribute-container"},fA=Er(()=>w("span",null,"Attack",-1)),dA=["src"],hA={key:0,class:"atribute-items"},pA=Er(()=>w("span",null,"From",-1)),gA=Er(()=>w("input",{class:"from",placeholder:"0"},null,-1)),mA=Er(()=>w("span",null,"To",-1)),_A=Er(()=>w("input",{class:"to",placeholder:"9999"},null,-1)),AA=[pA,gA,mA,_A],yA={__name:"AttackComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){Je();const n=V(!1),r=()=>{n.value=!n.value};return(s,i)=>(z(),Y("div",uA,[w("div",{onClick:r,class:"atribute-head"},[fA,w("img",{src:n.value?B(Rt):B(St)},null,8,dA)]),n.value?(z(),Y("div",hA,AA)):Ye("",!0)]))}},vA=dt(yA,[["__scopeId","data-v-14957565"]]);const Ir=e=>(Et("data-v-91004484"),e=e(),It(),e),bA={class:"atribute-filters atribute-container"},wA=Ir(()=>w("span",null,"Defence",-1)),EA=["src"],IA={key:0,class:"atribute-items"},TA=Ir(()=>w("span",null,"From",-1)),CA=Ir(()=>w("input",{class:"from",placeholder:"0"},null,-1)),SA=Ir(()=>w("span",null,"To",-1)),RA=Ir(()=>w("input",{class:"to",placeholder:"9999"},null,-1)),OA=[TA,CA,SA,RA],kA={__name:"DefenceComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){Je();const n=V(!1),r=()=>{n.value=!n.value};return(s,i)=>(z(),Y("div",bA,[w("div",{onClick:r,class:"atribute-head"},[wA,w("img",{src:n.value?B(Rt):B(St)},null,8,EA)]),n.value?(z(),Y("div",IA,OA)):Ye("",!0)]))}},PA=dt(kA,[["__scopeId","data-v-91004484"]]);const DA=e=>(Et("data-v-b6ac0ec6"),e=e(),It(),e),xA={class:"atribute-filters atribute-container"},NA=DA(()=>w("span",null,"Attribute",-1)),LA=["src"],MA={key:0,class:"atribute-items"},BA={__name:"AtributeComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=V(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(z(),Y("div",xA,[w("div",{onClick:s,class:"atribute-head"},[NA,w("img",{src:r.value?B(Rt):B(St)},null,8,LA)]),r.value?(z(),Y("div",MA,[(z(!0),Y(pe,null,Qt(B(n).state.atributes,c=>(z(),Y("button",{class:"atribute-button",onClick:i},Ke(c),1))),256))])):Ye("",!0)]))}},UA=dt(BA,[["__scopeId","data-v-b6ac0ec6"]]),FA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgB7ZSxDYAgEEV/dAFGoLR0hBvJkdzAEYyTaGmnG+gZKWzk9MSEBF7yKy48DsgBmUySlMJ6x6k4A2SMq52hgDibi0TNWVxtfVdU4DvH5j3OzibOCgUEubNrRyPHQgkJsmAiSRZU5JMZJ3gt0n4Qg8AQIrjGX4SEiL7+nVD1ngTduLJQcJyw5TQP6y08czGTSZgd7Xk6rx9nNSgAAAAASUVORK5CYII=",$A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABqSURBVHgB7dJRCYBAEIThwQQ29BoYwYtgA21gBCMYxQjnCieeIMKBs0/zwTz/LCwgIpU6225bQHaGUh411hehzdaCZChCq1doBlH4I9SgXoKDiPu6CQ4inB7kLUh9/UvA80K6kGMjROTLAexeIZF+8NxQAAAAAElFTkSuQmCC",jA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgB7dLLCYAwEEXRixXYoZZgB6YDS9AOLCElWIolxAQEJRt/zAhhDswyXAIPjDEXhnghXoMCv8dUgnW85RTsEZaCXjOYTH8G2zsPKt4LKBk5fuUQkg/EISSffoegmYeD+BpbNULGFGYDKwEhkMTAAJcAAAAASUVORK5CYII=",HA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgB7ZTBDYAgDEV/nIAROgIj6ESu4CaO4AiOIiO4ATaRkwEsBPHSl7x4wbyUNACKokSwLAnPzuzKGlRArGcPyII+OKYODOl/cbIuhHbIJ6yGcE8mmfB1spbBJjFpsFksFjSlsdyC/Aah0zUSOi0IodPqU0FIFMstiAkBx07h+ykW8od1YTcoivLkAiO9NggrrwBvAAAAAElFTkSuQmCC",VA="/Yu-Gi-Oh-Api/assets/eyeNotStarred-774d2c4f.png",WA="/Yu-Gi-Oh-Api/assets/eyeAdded-95591e38.png";const KA={class:"card__wrapper"},zA={class:"uniqueCard"},GA={class:"uniqueCard__image--wrapper"},qA=["src"],QA={class:"uniqueCard__informations--wrapper"},YA={class:"cardName"},JA={class:"favs"},XA=["src"],ZA={class:"pagination"},ey=w("img",{src:FA},null,-1),ty=[ey],ny=w("img",{src:$A},null,-1),ry=[ny],sy={class:"currentPage pages activePage"},iy={key:0,class:"nextPage pages"},oy=w("img",{src:jA},null,-1),ay=[oy],cy=w("img",{src:HA},null,-1),ly=[cy],uy={__name:"CardMobile",props:{preFilterProp:{type:Array,required:!0},searchByWhat:{type:String,required:!0},searchText:{type:String,required:!0},attackFrom:{type:Number,required:!1},attackTo:{type:Number,required:!1},defenceFrom:{type:Number,required:!1},defenceTo:{type:Number,required:!1},allCards:{type:Boolean,required:!1},monsters:{type:Boolean,required:!1},spells:{type:Boolean,required:!1},traps:{type:Boolean,required:!1}},setup(e){const t=e,n=Je(),r=V(null),s=V(0),i=V(10),o=V(1),a=V(1),c=()=>{o.value+1<=r.value&&(i.value+=10,s.value+=10,o.value++,console.log(o.value),document.documentElement.scrollTop=0)},l=()=>{i.value!==10&&(i.value-=10,s.value-=10,o.value--,document.documentElement.scrollTop=0)},u=()=>{i.value=10,s.value=0,o.value=1,document.documentElement.scrollTop=0},f=()=>{o.value=r.value,s.value=r.value*10-10,i.value=r.value*10,document.documentElement.scrollTop=0},p=Pe(()=>{let I=[];return n.state.allBox?I=t.preFilterProp.filter(C=>{if(t.searchByWhat==="true")return C.name.toLowerCase().includes(t.searchText.toLowerCase());if(t.searchByWhat==="false")return C.desc.toLowerCase().includes(t.searchText.toLowerCase())}):n.state.monstersBox?I=t.preFilterProp.filter(C=>{if(t.searchByWhat==="true")return C.name.toLowerCase().includes(t.searchText.toLowerCase())&&g(C)&&_(C)&&b(C)&&N(C)&&L(C);if(t.searchByWhat==="false")return C.desc.toLowerCase().includes(t.searchText.toLowerCase())&&g(C)&&_(C)&&b(C)&&N(C)&&L(C)}):n.state.spellsBox?I=t.preFilterProp.filter(C=>{if(t.searchByWhat==="true")return C.name.toLowerCase().includes(t.searchText.toLowerCase())&&O(C)&&C.type.toLowerCase().includes("spell");if(t.searchByWhat==="false")return C.desc.toLowerCase().includes(t.searchText.toLowerCase())&&O(C)&&C.type.toLowerCase().includes("spell")}):n.state.trapsBox&&(I=t.preFilterProp.filter(C=>{if(t.searchByWhat==="true")return C.name.toLowerCase().includes(t.searchText.toLowerCase())&&O(C)&&C.type.toLowerCase().includes("trap");if(t.searchByWhat==="false")return C.desc.toLowerCase().includes(t.searchText.toLowerCase())&&O(C)&&C.type.toLowerCase().includes("trap")})),r.value=Math.ceil(I.length/10),console.log(r.value),console.log(I),n.state.ByAttackAscending?I.sort((C,j)=>C.atk-j.atk):n.state.ByAttackDescending?I.sort((C,j)=>C.atk-j.atk).reverse():n.state.ByDefenceAscending?I.sort((C,j)=>C.def-j.def):I.sort((C,j)=>C.def-j.def).reverse()}),g=I=>{const C=Array.from(n.state.selectedLevels);return C.length===0?n.state.levels.some(G=>I.level.toString().includes(G)):C.some(G=>I.level.toString().includes(G))},_=I=>{const C=Array.from(n.state.selectedAtributes);return C.length===0?n.state.atributes.some(G=>I.attribute.includes(G)):C.some(G=>I.attribute.includes(G))},b=I=>{const C=Array.from(n.state.selectedMonsters);return C.length===0?n.state.monsters.some(G=>I.race.includes(G)):C.some(G=>I.race.includes(G))},N=I=>{const C=Array.from(n.state.selectedCardTypes);return C.length===0?n.state.types.some(G=>I.type.includes(G)):C.some(G=>I.type.includes(G))},O=I=>{const C=Array.from(n.state.selectedRaces);return C.length===0?n.state.races.some(G=>I.race.includes(G)):C.some(G=>I.race.includes(G))},L=I=>I.atk>=t.attackFrom&&I.atk<=t.attackTo&&I.def>=t.defenceFrom&&I.def<=t.defenceTo;return jt(()=>t.searchText,()=>{s.value=0,i.value=10,o.value=1}),jt([()=>t.monsters,()=>t.spells,()=>t.allCards,()=>t.traps],()=>{a.value=1,s.value=0,i.value=10,o.value=1}),(I,C)=>(z(),Y(pe,null,[w("ul",KA,[(z(!0),Y(pe,null,Qt(B(p).slice(s.value,i.value),j=>(z(),Y("li",{class:"card__card",key:j.id},[w("div",zA,[w("div",GA,[w("img",{src:j.card_images[0].image_url,alt:"cardImage"},null,8,qA)]),w("div",QA,[w("div",YA,[w("h2",null,Ke(j.name),1)]),w("div",JA,[w("img",{class:"default",src:B(n).state.favList.includes(j.name)?B(WA):B(VA)},null,8,XA)])])])]))),128))]),w("section",ZA,[w("div",{onClick:u,class:"firstPage moveFar"},ty),w("div",{onClick:l,class:"Prev moveLess"},ry),w("div",sy,Ke(o.value),1),r.value>1&&o.value!=r.value?(z(),Y("div",iy,Ke(o.value+1),1)):Ye("",!0),w("div",{onClick:c,class:"Next moveLess"},ay),w("div",{onClick:f,class:"lastPage moveFar"},ly)])],64))}},fy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEFSURBVHgB7ZYxbsJAEEVnVhMKhBR3UbocITcIXZRupVzAOUHgBBwBfAJ8AYQ7xDE4AXSIzhUSMNplVggJTOFBUIC0r/BaX/7+u82fxfnYJq0Wpc5BAjU4x/n7T7E41ZYT+2EMpaCg0eABNZvUkfeeMRoLfcrDnilEQ1naGvdmQ6Uq5ohs6hVuABGSqwLvQQyMgTHwAgp1JdX0pfnYOZ9VNUSfeY+1XkQsndvlEHl6MMwzopc+gFfMQ5+9fY+KU201/bXG4D8oYOY/OgxPbzUG+XFYiooWwto6P6WxaWJgDHyAQLlrlnATeJVfLs6cb7dUW2uBMDurGvOuKw0yq/OGg63XnO8Be/9HyLmsGN0AAAAASUVORK5CYII=",dy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACrSURBVHgB7ZXdCcJAEIRnxXdTgp3YgiVoBWoH6UDTQUqwg9RgB5aQDi6TcIH8QXa5lwT2g+Vgubl5u09CCBmAG6c91yhF5D9cMH+OeQ2fNpAHPd/pC9xVhvzzABsnpJFZC5PxQi/0whlHTsm5KO8Xyt0Sdexydo5En72h82FBH44UxfyVxwM67lYfVtMXjD7M/afxQi/cRmGNNEz53oeabw1Y9tmL88M6nQ8b8k3YMI/mI78AAAAASUVORK5CYII=",hy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGOSURBVHgB7ZZPTsJAFMbfdFo3sOhGEnZzBI6AC0nYtQJr4QZ6AryBR5C9RtyZIAZuIJ7AujKpGLrvn/FNsbEjJbKorSTzS5p5b940eYtvvnkACoVCUS7k58Zy2htzzi0MF0EQ2PX2nQMFoqcTd9LrfzUjaFBqDHEdiOTjsTvEWh9yhHPiBQGc19s388yGCOHmegWPczAxZ0ktikgDFwY5Q2nEpB7SyWpmmb5Pnwgh4pCHn314/N39273FIGd2ksT7Q7f5MrZMUOwLf6GVXZFELXRTrepjDJsobCeKwK61rhdQINK1r1QM9CDeFDF6DsOrf4Fh7Eso9EtcziBnOI8GtdbtKMm1dDHtQxn/vkIBbPUhdFEnDP2jop+OTMoUteI3NsYPcfUrBwYLNd8rQz9SQ0I7hkFnKGiGqRgN7PRoUMTjKvmQrusWeg+D9UtvalrsO3NRW047V9hoH3LGnZxIPqRvORf7EaVklWxgM8/oUw7kDM5ZkudtaMiddEboQ6cYznGEHfwLH1IoFIoC+QSlBJiLoauhMwAAAABJRU5ErkJggg==",py="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7ZXtDYJADIZ7xgEc4UZgBFdwg3MDncARHAE20A1wA+IE4ASwwdmLJakNfvw44Ix9kua4tuHecLQFUBRFSQzv/ck/qNAsTIzhGxTgcMmZqzDGbCl2wMVBXDq0PZ5x6R1LkbBiieHZslgm9rGwfCO/UBBRUVIQteHqx7hCfH/zMQkPXpM45TeYo9wHCf8NWkl9qEbLYE5CH/LPnFns6MfBcQ0LoYn3IckNpoaurGZXZiEFkhGiDGCkg0aGReu+mjORkcPV4lJCKsMVD9xRhbUDfSj34+C4huULbX0/apnvitZAfLq3UVRckPJSy19RlH/kDpJiU6iQSlDOAAAAAElFTkSuQmCC",nc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABEklEQVR4AbWWjRGCMAyFAxMwQp3QbgCbwApOUN3ADcoGsEFMtJwV+5OKfXe5qyV5X5v2QICEELGj6CkMhcW3FjenKRSUioucgVSjGESJZ7fCUnGNzpn3eFx9auVRWWtRKfUMHmekQz1fcuacyiGAsJfyAaPUvABi/NVnzfc7EEI6BmiJOf/eAKFnEQ0MMBJz1gZI5exkOPvrcGOFPiAECTUCQrOx67gH+JAIABtXKFLTNNvFkJZASzFDPa21AXcG3KCeLnwGHQ0WSfYPZ3BqqWilwRX+r4m8Z3ArSr7sUtc0os+XnYPoXFXqvu8U/vDQgwGPa0g2Dl87qfPJ9CDch6nA3OCBfxfaGfi7sm6OW9qlPB5FLbBeelksuwAAAABJRU5ErkJggg==",rc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7ElEQVR4AbVVP0/CUBC/e0piHAwmDsaJ0cEYdHIwkcmwKbqwWfEDwETiRNkIk59AuzIYZDNOkLjTQRM3mUw0DnVxEO3zrrSmkPbxMPBLXvp6r+93d71/CAqkjGZySUBRSsggvUpa/pFDy0bptr5A3DxZuV4cB0YJ141mKoFwRdsM6ADB6rtQjVIkRgWbZ60ikXe1yRkSDL6zaVyXRo/mhsgLrYqUbo22CzA5FgAxu7qdh9duoxMIRdhyIjfjbq+tLMJtfd9bvI8DxcsMe+LFwP/n/FuSceSX5d0/4pf3TyjU771nDJy+hC2OiedBQkBFlzxONoKknySAvvXP48jZ2rAHgUzlyZyEZUFRPtQhZ6IAAek4T77BLQmBcKBDHrYyLFMpQRR7HIP06IGKXKUkAilWEBlcjUzR+SY1HyXNlu9AF0yu+p496MHs4MxUAXVfW1Bpd2BGoNbTEhSEC5gREjQrhG3leHi0YdqQYNlBL6KSPoXBlJoWHOoQVd54ClgTyoFABU5JVV0EcInL9qfb0MjcMJomotdZ/w0KbPXBOjaD96GJ9mY32qvp/Aep3YHJp5pDlp8/Wke1sDBy6Kephf+ANKlbnYCO1ZQk8xRHO2Loo+oiK3KpnbvUcXHQFIO+1ZNcoFRDnOZ+JkbiF6tB8lhv/dntAAAAAElFTkSuQmCC",sc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVR4AbWWgRGDIAxFQydoN8BJOkK7SdlAN7GbMApu4Agp38IVLWLQ893F9iD8j6HGEhVg5quP1of14fjHGMaMD021YFEQkNKLjXziK+ywFqwxW+ItH6ct7byI1noKASZX882yIPWbvgm0dGrQS1ZVGAALbRWcHAlQSsUNkZDbxV+edB4GBg86jztKNPovV0n2jhINiiuydxjQJTfYNM0UwzDQFsiJ+Vl43sQm8DBhCp/OudWfKebS3Awjsu1ydLkwmqQGazl/z4K/dLmZnEA0EIoDE3s+S0yigVAc6HgOVmKShkC8Tw+62OyWJgLxebMLJqa0IpoIxEH+xcMrB15JRyXCnZzzylycybtC3PKBfxcmCKR35cIYSlpslB/ATLq3vpCBewAAAABJRU5ErkJggg==",ic="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFUlEQVR4AbVVu24TQRQ9d5JIEQVyQRGoTEcBkaGiQMKiQO4gpEnHOnxAQhOJynYXpcoXwLYukHEXUUAi0XsFRErpKi9FykaRIuU1k3sn3siP2Uci+0jjmZ3HOeO5M+cSEpD3Grn7CgvGoEj8abh0hkIuARndPIP6seXPtOM4yNX5xGvkJwjfuFlEFhD8c42aS0j1d0x/ai4weSszucDAkzXT3vfF/qGxHvL5ZsUYvczNSdwekyAqTb2Yw16rvhF1UvfOjdarSQxrK29tXVr6mTQNHJvPf/1Zy2WPSM6cyatIwaMH92xJgyFVEc4bgQmFClc5DA+5ziWBskocJAwfxQJfc8VRfo8R4QJ6USnCO4wIROq1xKCA0SEvAsMMrlNgAHLfpWS5kjInmu+CCLTjFn5depUokmFO6BSYX/mD7YOTRILuMZkra/rB7hsotuKN/oFoQZyIi1zqAQG2c5LHcEk4RMoRRGLRBtLIBWMGj63ZPSs3fiPGnuOOKY2cz8f/58+UVUepjOssNQAXUSo5c7FD1Cy3/OwG9XCqMHfK5l1yzT4+Ocev1g7ePH9o2ynk0AZfePdr0u5JmU+9RpXIOuudwYGt/fdnq9F3T0bbD+rr/E+OWPYlbp/VQtn5pv9hubvTmfT5ZuUvYarsVh+RZdfA+jjHMXAkfUpaKEKa7Vyz49K1KUa+1TbyQPkNjQOrTBzGcVwBxtzszx9ksPMAAAAASUVORK5CYII=";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},gy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Du={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Pu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new my;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class my extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _y=function(e){const t=Pu(e);return Du.encodeByteArray(t,!0)},xu=function(e){return _y(e).replace(/\./g,"")},Nu=function(e){try{return Du.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=()=>Ay().__FIREBASE_DEFAULTS__,vy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},by=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Nu(e[1]);return t&&JSON.parse(t)},Oo=()=>{try{return yy()||vy()||by()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},wy=e=>{var t,n;return(n=(t=Oo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Lu=()=>{var e;return(e=Oo())===null||e===void 0?void 0:e.config},Mu=e=>{var t;return(t=Oo())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Iy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Bu(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ty(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cy(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Uu(){try{return typeof indexedDB=="object"}catch{return!1}}function Fu(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Sy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="FirebaseError";class ht extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ry,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_n.prototype.create)}}class _n{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Oy(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ht(s,a,r)}}function Oy(e,t){return e.replace(ky,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ky=/\{\$([^}]+)}/g;function Py(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function mr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(oc(i)&&oc(o)){if(!mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function oc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Xn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Zn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Dy(e,t){const n=new xy(e,t);return n.subscribe.bind(n)}class xy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ny(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=ei),s.error===void 0&&(s.error=ei),s.complete===void 0&&(s.complete=ei);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ny(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ei(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=1e3,My=2,By=4*60*60*1e3,Uy=.5;function ac(e,t=Ly,n=My){const r=t*Math.pow(n,e),s=Math.round(Uy*r*(Math.random()-.5)*2);return Math.min(By,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e){return e&&e._delegate?e._delegate:e}class ft{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Ey;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jy(t))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=en){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=en){return this.instances.has(t)}getOptions(t=en){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$y(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=en){return this.component?this.component.multipleInstances?t:en:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $y(e){return e===en?void 0:e}function jy(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(le||(le={}));const Vy={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Wy=le.INFO,Ky={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},zy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Ky[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ko{constructor(t){this.name=t,this._logLevel=Wy,this._logHandler=zy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in le))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...t),this._logHandler(this,le.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...t),this._logHandler(this,le.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,le.INFO,...t),this._logHandler(this,le.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,le.WARN,...t),this._logHandler(this,le.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...t),this._logHandler(this,le.ERROR,...t)}}const Gy=(e,t)=>t.some(n=>e instanceof n);let cc,lc;function qy(){return cc||(cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qy(){return lc||(lc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $u=new WeakMap,Fi=new WeakMap,ju=new WeakMap,ti=new WeakMap,Po=new WeakMap;function Yy(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ht(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&$u.set(n,e)}).catch(()=>{}),Po.set(t,e),t}function Jy(e){if(Fi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Fi.set(e,t)}let $i={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Fi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ju.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Xy(e){$i=e($i)}function Zy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ni(this),t,...n);return ju.set(r,t.sort?t.sort():[t]),Ht(r)}:Qy().includes(e)?function(...t){return e.apply(ni(this),t),Ht($u.get(this))}:function(...t){return Ht(e.apply(ni(this),t))}}function ev(e){return typeof e=="function"?Zy(e):(e instanceof IDBTransaction&&Jy(e),Gy(e,qy())?new Proxy(e,$i):e)}function Ht(e){if(e instanceof IDBRequest)return Yy(e);if(ti.has(e))return ti.get(e);const t=ev(e);return t!==e&&(ti.set(e,t),Po.set(t,e)),t}const ni=e=>Po.get(e);function tv(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Ht(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ht(o.result),c.oldVersion,c.newVersion,Ht(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const nv=["get","getKey","getAll","getAllKeys","count"],rv=["put","add","delete","clear"],ri=new Map;function uc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ri.get(t))return ri.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=rv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ri.set(t,i),i}Xy(e=>({...e,get:(t,n,r)=>uc(t,n)||e.get(t,n,r),has:(t,n)=>!!uc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ji="@firebase/app",fc="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new ko("@firebase/app"),ov="@firebase/app-compat",av="@firebase/analytics-compat",cv="@firebase/analytics",lv="@firebase/app-check-compat",uv="@firebase/app-check",fv="@firebase/auth",dv="@firebase/auth-compat",hv="@firebase/database",pv="@firebase/database-compat",gv="@firebase/functions",mv="@firebase/functions-compat",_v="@firebase/installations",Av="@firebase/installations-compat",yv="@firebase/messaging",vv="@firebase/messaging-compat",bv="@firebase/performance",wv="@firebase/performance-compat",Ev="@firebase/remote-config",Iv="@firebase/remote-config-compat",Tv="@firebase/storage",Cv="@firebase/storage-compat",Sv="@firebase/firestore",Rv="@firebase/firestore-compat",Ov="firebase",kv="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="[DEFAULT]",Pv={[ji]:"fire-core",[ov]:"fire-core-compat",[cv]:"fire-analytics",[av]:"fire-analytics-compat",[uv]:"fire-app-check",[lv]:"fire-app-check-compat",[fv]:"fire-auth",[dv]:"fire-auth-compat",[hv]:"fire-rtdb",[pv]:"fire-rtdb-compat",[gv]:"fire-fn",[mv]:"fire-fn-compat",[_v]:"fire-iid",[Av]:"fire-iid-compat",[yv]:"fire-fcm",[vv]:"fire-fcm-compat",[bv]:"fire-perf",[wv]:"fire-perf-compat",[Ev]:"fire-rc",[Iv]:"fire-rc-compat",[Tv]:"fire-gcs",[Cv]:"fire-gcs-compat",[Sv]:"fire-fst",[Rv]:"fire-fst-compat","fire-js":"fire-js",[Ov]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new Map,Vi=new Map;function Dv(e,t){try{e.container.addComponent(t)}catch(n){fn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function bt(e){const t=e.name;if(Vi.has(t))return fn.debug(`There were multiple attempts to register component ${t}.`),!1;Vi.set(t,e);for(const n of is.values())Dv(n,e);return!0}function Wn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new _n("app","Firebase",xv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=kv;function Hu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Hi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(n||(n=Lu()),!n)throw Vt.create("no-options");const i=is.get(s);if(i){if(mr(n,i.options)&&mr(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const o=new Hy(s);for(const c of Vi.values())o.addComponent(c);const a=new Nv(n,r,o);return is.set(s,a),a}function Vu(e=Hi){const t=is.get(e);if(!t&&e===Hi&&Lu())return Hu();if(!t)throw Vt.create("no-app",{appName:e});return t}function at(e,t,n){var r;let s=(r=Pv[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),fn.warn(a.join(" "));return}bt(new ft(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="firebase-heartbeat-database",Mv=1,_r="firebase-heartbeat-store";let si=null;function Wu(){return si||(si=tv(Lv,Mv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_r)}}}).catch(e=>{throw Vt.create("idb-open",{originalErrorMessage:e.message})})),si}async function Bv(e){try{return await(await Wu()).transaction(_r).objectStore(_r).get(Ku(e))}catch(t){if(t instanceof ht)fn.warn(t.message);else{const n=Vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});fn.warn(n.message)}}}async function dc(e,t){try{const r=(await Wu()).transaction(_r,"readwrite");await r.objectStore(_r).put(t,Ku(e)),await r.done}catch(n){if(n instanceof ht)fn.warn(n.message);else{const r=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(r.message)}}}function Ku(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=1024,Fv=30*24*60*60*1e3;class $v{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Fv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hc(),{heartbeatsToSend:n,unsentEntries:r}=jv(this._heartbeatsCache.heartbeats),s=xu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function hc(){return new Date().toISOString().substring(0,10)}function jv(e,t=Uv){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pc(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uu()?Fu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return dc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function pc(e){return xu(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(e){bt(new ft("platform-logger",t=>new sv(t),"PRIVATE")),bt(new ft("heartbeat",t=>new $v(t),"PRIVATE")),at(ji,fc,e),at(ji,fc,"esm2017"),at("fire-js","")}Vv("");function Do(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function zu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wv=zu,Gu=new _n("auth","Firebase",zu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new ko("@firebase/auth");function Kv(e,...t){os.logLevel<=le.WARN&&os.warn(`Auth (${Cr}): ${e}`,...t)}function qr(e,...t){os.logLevel<=le.ERROR&&os.error(`Auth (${Cr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e,...t){throw xo(e,...t)}function ct(e,...t){return xo(e,...t)}function qu(e,t,n){const r=Object.assign(Object.assign({},Wv()),{[t]:n});return new _n("auth","Firebase",r).create(t,{appName:e.name})}function zv(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&$e(e,"argument-error"),qu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Gu.create(e,...t)}function H(e,t,...n){if(!e)throw xo(t,...n)}function _t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw qr(t),new Error(t)}function wt(e,t){e||_t(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Gv(){return gc()==="http:"||gc()==="https:"}function gc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gv()||Bu()||"connection"in navigator)?navigator.onLine:!0}function Qv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,n){this.shortDelay=t,this.longDelay=n,wt(n>t,"Short delay should be less than long delay!"),this.isMobile=Iy()||Ty()}get(){return qv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e,t){wt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=new Sr(3e4,6e4);function Kn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zn(e,t,n,r,s={}){return Yu(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=Tr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Qu.fetch()(Ju(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Yu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yv),t);try{const s=new Xv(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ur(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ur(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ur(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ur(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw qu(e,u,l);$e(e,u)}}catch(s){if(s instanceof ht)throw s;$e(e,"network-request-failed",{message:String(s)})}}async function Rr(e,t,n,r,s={}){const i=await zn(e,t,n,r,s);return"mfaPendingCredential"in i&&$e(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Ju(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?No(e.config,s):`${e.config.apiScheme}://${s}`}class Xv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),Jv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ur(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ct(e,t,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zv(e,t){return zn(e,"POST","/v1/accounts:delete",t)}async function eb(e,t){return zn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function tb(e,t=!1){const n=Ze(e),r=await n.getIdToken(t),s=Lo(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:sr(ii(s.auth_time)),issuedAtTime:sr(ii(s.iat)),expirationTime:sr(ii(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ii(e){return Number(e)*1e3}function Lo(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return qr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nu(n);return s?JSON.parse(s):(qr("Failed to decode base64 JWT payload"),null)}catch(s){return qr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nb(e){const t=Lo(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ht&&rb(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function rb({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=sr(this.lastLoginAt),this.creationTime=sr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Ar(e,eb(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?ab(i.providerUserInfo):[],a=ob(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Xu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function ib(e){const t=Ze(e);await as(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ob(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function ab(e){return e.map(t=>{var{providerId:n}=t,r=Do(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(e,t){const n=await Yu(e,{},async()=>{const r=Tr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Ju(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):nb(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return H(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cb(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new yr;return r&&(H(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new yr,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class un{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Do(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Ar(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return tb(this,t)}reload(){return ib(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new un(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ar(this,Zv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:C,isAnonymous:j,providerData:G,stsTokenManager:ye}=n;H(I&&ye,t,"internal-error");const q=yr.fromJSON(this.name,ye);H(typeof I=="string",t,"internal-error"),xt(f,t.name),xt(p,t.name),H(typeof C=="boolean",t,"internal-error"),H(typeof j=="boolean",t,"internal-error"),xt(g,t.name),xt(_,t.name),xt(b,t.name),xt(N,t.name),xt(O,t.name),xt(L,t.name);const ae=new un({uid:I,auth:t,email:p,emailVerified:C,displayName:f,isAnonymous:j,photoURL:_,phoneNumber:g,tenantId:b,stsTokenManager:q,createdAt:O,lastLoginAt:L});return G&&Array.isArray(G)&&(ae.providerData=G.map(se=>Object.assign({},se))),N&&(ae._redirectEventId=N),ae}static async _fromIdTokenResponse(t,n,r=!1){const s=new yr;s.updateFromServerResponse(n);const i=new un({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await as(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=new Map;function At(e){wt(e instanceof Function,"Expected a class definition");let t=mc.get(e);return t?(wt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,mc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Zu.type="NONE";const _c=Zu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e,t,n){return`firebase:${e}:${t}:${n}`}class Pn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?un._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Pn(At(_c),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||At(_c);const o=Qr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=un._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Pn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Pn(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ef(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sf(t))return"Blackberry";if(of(t))return"Webos";if(Mo(t))return"Safari";if((t.includes("chrome/")||tf(t))&&!t.includes("edge/"))return"Chrome";if(rf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ef(e=Se()){return/firefox\//i.test(e)}function Mo(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tf(e=Se()){return/crios\//i.test(e)}function nf(e=Se()){return/iemobile/i.test(e)}function rf(e=Se()){return/android/i.test(e)}function sf(e=Se()){return/blackberry/i.test(e)}function of(e=Se()){return/webos/i.test(e)}function Ns(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function lb(e=Se()){var t;return Ns(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function ub(){return Cy()&&document.documentMode===10}function af(e=Se()){return Ns(e)||rf(e)||of(e)||sf(e)||/windows phone/i.test(e)||nf(e)}function fb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(e,t=[]){let n;switch(e){case"Browser":n=Ac(Se());break;case"Worker":n=`${Ac(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cr}/${r}`}async function lf(e,t){return zn(e,"GET","/v2/recaptchaConfig",Kn(e,t))}function yc(e){return e!==void 0&&e.enterprise!==void 0}class uf{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function ff(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=ct("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",db().appendChild(r)})}function hb(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const pb="https://www.google.com/recaptcha/enterprise.js?render=",gb="recaptcha-enterprise",mb="NO_RECAPTCHA";class df{constructor(t){this.type=gb,this.auth=An(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{lf(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new uf(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;yc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(mb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&yc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ff(pb+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function cs(e,t,n,r=!1){const s=new df(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vc(this),this.idTokenSubscription=new vc(this),this.beforeStateQueue=new _b(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await as(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Qv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ze(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(At(t))})}async initializeRecaptchaConfig(){const t=await lf(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new uf(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new df(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new _n("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&At(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,r,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=cf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Kv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function An(e){return Ze(e)}class vc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Dy(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(e,t){const n=Wn(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(mr(i,t??{}))return s;$e(s,"already-initialized")}return n.initialize({options:t})}function vb(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function bb(e,t,n){const r=An(e);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=hf(t),{host:o,port:a}=wb(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Eb()}function hf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function wb(e){const t=hf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:bc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:bc(o)}}}function bc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Eb(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return _t("not implemented")}_getIdTokenResponse(t){return _t("not implemented")}_linkToIdToken(t,n){return _t("not implemented")}_getReauthenticationResolver(t){return _t("not implemented")}}async function Ib(e,t){return zn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(e,t){return Rr(e,"POST","/v1/accounts:signInWithPassword",Kn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(e,t){return Rr(e,"POST","/v1/accounts:signInWithEmailLink",Kn(e,t))}async function Cb(e,t){return Rr(e,"POST","/v1/accounts:signInWithEmailLink",Kn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Bo{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new vr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new vr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await cs(t,r,"signInWithPassword");return oi(t,s)}else return oi(t,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await cs(t,r,"signInWithPassword");return oi(t,i)}else return Promise.reject(s)});case"emailLink":return Tb(t,{email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Ib(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Cb(t,{idToken:n,email:this._email,oobCode:this._password});default:$e(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(e,t){return Rr(e,"POST","/v1/accounts:signInWithIdp",Kn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="http://localhost";class dn extends Bo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new dn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Do(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new dn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Dn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Dn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Dn(t,n)}buildRequest(){const t={requestUri:Sb,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Tr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ob(e){const t=Xn(Zn(e)).link,n=t?Xn(Zn(t)).deep_link_id:null,r=Xn(Zn(e)).deep_link_id;return(r?Xn(Zn(r)).link:null)||r||n||t||e}class Uo{constructor(t){var n,r,s,i,o,a;const c=Xn(Zn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Rb((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Ob(t);try{return new Uo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.providerId=Gn.PROVIDER_ID}static credential(t,n){return vr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Uo.parseLink(n);return H(r,"argument-error"),vr._fromEmailAndCode(t,r.code,r.tenantId)}}Gn.PROVIDER_ID="password";Gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Fo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Or{constructor(){super("facebook.com")}static credential(t){return dn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Or{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return dn._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return it.credentialFromTaggedObject(t)}static credentialFromError(t){return it.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return it.credential(n,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Or{constructor(){super("github.com")}static credential(t){return dn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Or{constructor(){super("twitter.com")}static credential(t,n){return dn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(e,t){return Rr(e,"POST","/v1/accounts:signUp",Kn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await un._fromIdTokenResponse(t,r,s),o=wc(r);return new hn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=wc(r);return new hn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function wc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends ht{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ls.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new ls(t,n,r,s)}}function pf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ls._fromErrorAndOperation(e,i,t,r):i})}async function kb(e,t,n=!1){const r=await Ar(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return hn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pb(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await Ar(e,pf(r,s,t,e),n);H(i.idToken,r,"internal-error");const o=Lo(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(e.uid===a,r,"user-mismatch"),hn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(e,t,n=!1){const r="signIn",s=await pf(e,r,t),i=await hn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Db(e,t){return gf(An(e),t)}async function xb(e,t,n){var r;const s=An(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await cs(s,i,"signUpPassword");o=ai(s,l)}else o=ai(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await cs(s,i,"signUpPassword");return ai(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await hn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Nb(e,t,n){return Db(Ze(e),Gn.credential(t,n))}function Lb(e,t,n,r){return Ze(e).onIdTokenChanged(t,n,r)}function Mb(e,t,n){return Ze(e).beforeAuthStateChanged(t,n)}function Bb(e,t,n,r){return Ze(e).onAuthStateChanged(t,n,r)}function mf(e){return Ze(e).signOut()}const us="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(us,"1"),this.storage.removeItem(us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(){const e=Se();return Mo(e)||Ns(e)}const Fb=1e3,$b=10;class Af extends _f{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ub()&&fb(),this.fallbackToPolling=af(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ub()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,$b):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Af.type="LOCAL";const jb=Af;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends _f{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}yf.type="SESSION";const vf=yf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Ls(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Hb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ls.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=$o("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function Wb(e){lt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function Kb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zb(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Gb(){return bf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="firebaseLocalStorageDb",qb=1,fs="firebaseLocalStorage",Ef="fbase_key";class kr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ms(e,t){return e.transaction([fs],t?"readwrite":"readonly").objectStore(fs)}function Qb(){const e=indexedDB.deleteDatabase(wf);return new kr(e).toPromise()}function Ki(){const e=indexedDB.open(wf,qb);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(fs,{keyPath:Ef})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(fs)?t(r):(r.close(),await Qb(),t(await Ki()))})})}async function Ec(e,t,n){const r=Ms(e,!0).put({[Ef]:t,value:n});return new kr(r).toPromise()}async function Yb(e,t){const n=Ms(e,!1).get(t),r=await new kr(n).toPromise();return r===void 0?null:r.value}function Ic(e,t){const n=Ms(e,!0).delete(t);return new kr(n).toPromise()}const Jb=800,Xb=3;class If{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ki(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Xb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ls._getInstance(Gb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Kb(),!this.activeServiceWorker)return;this.sender=new Vb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||zb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ki();return await Ec(t,us,"1"),await Ic(t,us),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ec(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Yb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ic(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Ms(s,!1).getAll();return new kr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}If.type="LOCAL";const Zb=If;new Sr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(e,t){return t?At(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Bo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Dn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Dn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ew(e){return gf(e.auth,new jo(e),e.bypassAuthState)}function tw(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),Pb(n,new jo(e),e.bypassAuthState)}async function nw(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),kb(n,new jo(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ew;case"linkViaPopup":case"linkViaRedirect":return nw;case"reauthViaPopup":case"reauthViaRedirect":return tw;default:$e(this.auth,"internal-error")}}resolve(t){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new Sr(2e3,1e4);async function Sf(e,t,n){const r=An(e);zv(e,t,Fo);const s=Tf(r,n);return new on(r,"signInViaPopup",t,s).executeNotNull()}class on extends Cf{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const t=$o();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,rw.get())};t()}}on.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="pendingRedirect",Yr=new Map;class iw extends Cf{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Yr.get(this.auth._key());if(!t){try{const r=await ow(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Yr.set(this.auth._key(),t)}return this.bypassAuthState||Yr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ow(e,t){const n=lw(t),r=cw(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aw(e,t){Yr.set(e._key(),t)}function cw(e){return At(e._redirectPersistence)}function lw(e){return Qr(sw,e.config.apiKey,e.name)}async function uw(e,t,n=!1){const r=An(e),s=Tf(r,t),o=await new iw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=10*60*1e3;class dw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!hw(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Rf(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ct(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=fw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tc(t))}saveEventToCache(t){this.cachedEventUids.add(Tc(t)),this.lastProcessedEventTime=Date.now()}}function Tc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Rf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function hw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rf(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(e,t={}){return zn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mw=/^https?/;async function _w(e){if(e.config.emulator)return;const{authorizedDomains:t}=await pw(e);for(const n of t)try{if(Aw(n))return}catch{}$e(e,"unauthorized-domain")}function Aw(e){const t=Wi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mw.test(n))return!1;if(gw.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=new Sr(3e4,6e4);function Cc(){const e=lt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function vw(e){return new Promise((t,n)=>{var r,s,i;function o(){Cc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Cc(),n(ct(e,"network-request-failed"))},timeout:yw.get()})}if(!((s=(r=lt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=lt().gapi)===null||i===void 0)&&i.load)o();else{const a=hb("iframefcb");return lt()[a]=()=>{gapi.load?o():n(ct(e,"network-request-failed"))},ff(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Jr=null,t})}let Jr=null;function bw(e){return Jr=Jr||vw(e),Jr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=new Sr(5e3,15e3),Ew="__/auth/iframe",Iw="emulator/auth/iframe",Tw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sw(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?No(t,Iw):`https://${e.config.authDomain}/${Ew}`,r={apiKey:t.apiKey,appName:e.name,v:Cr},s=Cw.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Tr(r).slice(1)}`}async function Rw(e){const t=await bw(e),n=lt().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:Sw(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ct(e,"network-request-failed"),a=lt().setTimeout(()=>{i(o)},ww.get());function c(){lt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kw=500,Pw=600,Dw="_blank",xw="http://localhost";class Sc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nw(e,t,n,r=kw,s=Pw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ow),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Se().toLowerCase();n&&(a=tf(l)?Dw:n),ef(l)&&(t=t||xw,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(lb(l)&&a!=="_self")return Lw(t||"",a),new Sc(null);const f=window.open(t||"",a,u);H(f,e,"popup-blocked");try{f.focus()}catch{}return new Sc(f)}function Lw(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="__/auth/handler",Bw="emulator/auth/handler",Uw=encodeURIComponent("fac");async function Rc(e,t,n,r,s,i){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Cr,eventId:s};if(t instanceof Fo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Py(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(t instanceof Or){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Uw}=${encodeURIComponent(c)}`:"";return`${Fw(e)}?${Tr(a).slice(1)}${l}`}function Fw({config:e}){return e.emulator?No(e,Bw):`https://${e.authDomain}/${Mw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="webStorageSupport";class $w{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vf,this._completeRedirectFn=uw,this._overrideRedirectResult=aw}async _openPopup(t,n,r,s){var i;wt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rc(t,n,r,Wi(),s);return Nw(t,o,$o())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Rc(t,n,r,Wi(),s);return Wb(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Rw(t),r=new dw(t);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ci,{type:ci},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ci];o!==void 0&&n(!!o),$e(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_w(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return af()||Mo()||Ns()}}const jw=$w;var Oc="@firebase/auth",kc="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ww(e){bt(new ft("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cf(e)},l=new Ab(r,s,i,c);return vb(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),bt(new ft("auth-internal",t=>{const n=An(t.getProvider("auth").getImmediate());return(r=>new Hw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(Oc,kc,Vw(e)),at(Oc,kc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=5*60,zw=Mu("authIdTokenMaxAge")||Kw;let Pc=null;const Gw=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zw)return;const s=n==null?void 0:n.token;Pc!==s&&(Pc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Wt(e=Vu()){const t=Wn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=yb(e,{popupRedirectResolver:jw,persistence:[Zb,jb,vf]}),r=Mu("authTokenSyncURL");if(r){const i=Gw(r);Mb(n,i,()=>i(n.currentUser)),Lb(n,o=>i(o))}const s=wy("auth");return s&&bb(n,`http://${s}`),n}Ww("Browser");const qw=w("img",{src:sm},null,-1),Qw=w("h1",null,"Yu-Gi-Oh!",-1),Yw={class:"searchBar"},Jw={class:"filters"},Xw={class:"filters-icons"},Zw=["src"],eE=["src"],tE=w("img",{src:om},null,-1),nE={class:"popupFilters"},rE={class:"popupFiltersWrapper"},sE={class:"topupSection"},iE=w("span",null,"Filters",-1),oE={class:"topupRight"},aE=w("span",{class:"sortby"},"sort by",-1),cE={class:"sortByAttackandDefence"},lE={class:"sortByAttack"},uE=w("span",null,"Attack",-1),fE=["src"],dE=["src"],hE={class:"sortByDefence"},pE=w("span",null,"Defence",-1),gE=["src"],mE=["src"],_E={class:"atributeFilters"},AE={__name:"SearchComponentMobile",setup(e){const t=Je(),n=bo(),r=V(""),s=V(0),i=V(15e3),o=V(0),a=V(15e3);V("block");const c=V([]);let l=V("true");const u=V(0),f=V(!0),p=V(!1),g=V(!1),_=V(!1);V(!1),V(!1),V(!1),V(!1),V(!1),V(!1),V(!1),V(t.state.levels),V(t.state.types),V(t.state.monsters),V(t.state.races),V(t.state.atributes);const b=()=>{t.commit("sortByAttackAscending")},N=()=>{t.commit("sortByAttackDescending")},O=()=>{t.commit("sortByDefenceAscending")},L=()=>{t.commit("sortByDefenceDescending")},I=()=>{mf(Wt()).then(()=>{n.push("/signin")})},C=Pe(()=>c.value);(()=>{t.commit("setDefaultForSelectedAtributes"),t.commit("setDefaultForSelectedMonsterTypes"),t.commit("setDefaultForSelectedCardTypes"),t.commit("setDefaultForSelectedLevels"),t.commit("setDefaultForSelectedRaces")})();const G=async()=>{try{const ge=(await b_.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")).data.data;ge.forEach(X=>{X.hasOwnProperty("attribute")||(X.attribute="undefined"),X.hasOwnProperty("name")||(X.name="undefined"),X.hasOwnProperty("race")||(X.race="undefined"),X.hasOwnProperty("type")||(X.type="undefined"),X.hasOwnProperty("atk")||(X.atk="undefined"),X.hasOwnProperty("def")||(X.def="undefined"),X.hasOwnProperty("level")||(X.level="undefined")}),c.value=ge,console.log(c.value),u.value=c.value.length,console.log(u.value)}catch(_e){console.log(_e)}};fo(()=>{G()});const ye=()=>{t.commit("showGallery")},q=()=>{t.commit("showList")},ae=()=>{console.log("Filters expanded"),document.querySelector(".popupFilters").style.display="block"},se=()=>{console.log("Filters hidden"),document.querySelector(".popupFilters").style.display="none"};return(_e,ge)=>(z(),Y(pe,null,[w("nav",null,[qw,Qw,w("img",{onClick:I,id:"userFace",src:im})]),w("section",Yw,[ur(w("input",{"onUpdate:modelValue":ge[0]||(ge[0]=X=>r.value=X),type:"search",placeholder:"Search"},null,512),[[hr,r.value]])]),w("section",Jw,[w("div",Xw,[w("img",{onClick:ye,src:B(t).state.galleryActive?B(fy):B(dy)},null,8,Zw),w("img",{onClick:q,src:B(t).state.listActive?B(hy):B(py)},null,8,eE)]),w("div",{class:"filters-button"},[w("button",{onClick:ae},[tE,Fl(" Filters")])])]),w("section",nE,[w("div",rE,[w("div",sE,[w("div",{class:"topupLeft"},[w("img",{onClick:se,src:am}),iE]),w("div",oE,[w("button",{onClick:ge[1]||(ge[1]=X=>B(t).commit("resetAllFilters"))},"Clear Filters")])]),aE,w("div",cE,[w("div",lE,[uE,w("img",{onClick:b,src:B(t).state.ByAttackAscending?B(rc):B(nc)},null,8,fE),w("img",{onClick:N,src:B(t).state.ByAttackDescending?B(ic):B(sc)},null,8,dE)]),w("div",hE,[pE,w("img",{onClick:O,src:B(t).state.ByDefenceAscending?B(rc):B(nc)},null,8,gE),w("img",{onClick:L,src:B(t).state.ByDefenceDescending?B(ic):B(sc)},null,8,mE)])]),w("div",_E,[he(R_),he(UA),he(Q_),he(H_),he(L_),he(nA),he(lA),he(vA),he(PA)])])]),he(uy,{preFilterProp:B(C),searchByWhat:B(l),searchText:r.value,attackFrom:s.value,attackTo:i.value,defenceFrom:o.value,defenceTo:a.value,allCards:f.value,monsters:p.value,spells:g.value,traps:_.value},null,8,["preFilterProp","searchByWhat","searchText","attackFrom","attackTo","defenceFrom","defenceTo","allCards","monsters","spells","traps"])],64))}},Dc={__name:"HelloWorld",setup(e){return(t,n)=>(z(),go(AE))}},yE=w("h1",null,"Create an accout",-1),vE={__name:"Register",setup(e){const t=V(""),n=V(""),r=bo(),s=()=>{xb(Wt(),t.value,n.value).then(o=>{console.log("Zalogowano pomyślnie"),r.push("/Search")}).catch(o=>{console.log(o)})},i=()=>{const o=new it;Sf(Wt(),o).then(a=>{console.log(a.user),r.push("/Search")}).catch(a=>{console.log(a)})};return(o,a)=>(z(),Y(pe,null,[yE,w("p",null,[ur(w("input",{type:"text",placeholder:"email","onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c)},null,512),[[hr,t.value]])]),w("p",null,[ur(w("input",{type:"text",placeholder:"password","onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c)},null,512),[[hr,n.value]])]),w("p",null,[w("button",{onClick:s},"Submit")]),w("p",null,[w("button",{onClick:i},"Sign in with Google")])],64))}},bE=w("h1",null,"Sign In to an accout",-1),wE={key:0},EE={__name:"SignIn",setup(e){const t=V(""),n=V(""),r=V(),s=bo(),i=()=>{Nb(Wt(),t.value,n.value).then(c=>{console.log("Zalogowano pomyślnie"),s.push("/Search")}).catch(c=>{switch(console.log(c),c.code){case"auth/invalid-email":r.value="Invalid email";break;case"auth/user-not-found":r.value="User not found";break;case"auth/wrong-password":r.value="Incorrenct Password";break;default:r.value="Email or password are incorrect";break}})},o=()=>{const c=new it;Sf(Wt(),c).then(l=>{console.log(l.user),s.push("/Search")}).catch(l=>{console.log(l)})},a=()=>{mf(Wt()).then(()=>{s.push("/signin")})};return(c,l)=>(z(),Y(pe,null,[bE,w("p",null,[ur(w("input",{type:"text",placeholder:"email","onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u)},null,512),[[hr,t.value]])]),w("p",null,[ur(w("input",{type:"text",placeholder:"password","onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u)},null,512),[[hr,n.value]])]),r.value?(z(),Y("p",wE,Ke(r.value),1)):Ye("",!0),w("p",null,[w("button",{onClick:i},"Submit")]),w("p",null,[w("button",{onClick:o},"Sign in with Google")]),w("p",null,[w("button",{onClick:a},"Logout")])],64))}},IE=[{path:"/",name:"Home",component:Dc},{path:"/register",name:"Register",component:vE},{path:"/signin",name:"Signin",component:EE},{path:"/Search",name:"Search",component:Dc,meta:{requiresAuth:!0}}],Of=nm({history:Ag("/Yu-Gi-Oh-Api/"),routes:IE}),TE=()=>new Promise((e,t)=>{const n=Bb(Wt(),r=>{n(),e(r),console.log(Wt().currentUser)},t)});Of.beforeEach(async(e,t,n)=>{e.matched.some(r=>r.meta.requiresAuth)?await TE()?n():(console.log("You dont have acces"),n("/signin")):n()});var CE="firebase",SE="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at(CE,SE,"app");const RE=(e,t)=>t.some(n=>e instanceof n);let xc,Nc;function OE(){return xc||(xc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kE(){return Nc||(Nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kf=new WeakMap,zi=new WeakMap,Pf=new WeakMap,li=new WeakMap,Ho=new WeakMap;function PE(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Kt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&kf.set(n,e)}).catch(()=>{}),Ho.set(t,e),t}function DE(e){if(zi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});zi.set(e,t)}let Gi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return zi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Pf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function xE(e){Gi=e(Gi)}function NE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ui(this),t,...n);return Pf.set(r,t.sort?t.sort():[t]),Kt(r)}:kE().includes(e)?function(...t){return e.apply(ui(this),t),Kt(kf.get(this))}:function(...t){return Kt(e.apply(ui(this),t))}}function LE(e){return typeof e=="function"?NE(e):(e instanceof IDBTransaction&&DE(e),RE(e,OE())?new Proxy(e,Gi):e)}function Kt(e){if(e instanceof IDBRequest)return PE(e);if(li.has(e))return li.get(e);const t=LE(e);return t!==e&&(li.set(e,t),Ho.set(t,e)),t}const ui=e=>Ho.get(e);function ME(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Kt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Kt(o.result),c.oldVersion,c.newVersion,Kt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const BE=["get","getKey","getAll","getAllKeys","count"],UE=["put","add","delete","clear"],fi=new Map;function Lc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fi.get(t))return fi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=UE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||BE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return fi.set(t,i),i}xE(e=>({...e,get:(t,n,r)=>Lc(t,n)||e.get(t,n,r),has:(t,n)=>!!Lc(t,n)||e.has(t,n)}));const Df="@firebase/installations",Vo="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=1e4,Nf=`w:${Vo}`,Lf="FIS_v2",FE="https://firebaseinstallations.googleapis.com/v1",$E=60*60*1e3,jE="installations",HE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},pn=new _n(jE,HE,VE);function Mf(e){return e instanceof ht&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf({projectId:e}){return`${FE}/projects/${e}/installations`}function Uf(e){return{token:e.token,requestStatus:2,expiresIn:KE(e.expiresIn),creationTime:Date.now()}}async function Ff(e,t){const r=(await t.json()).error;return pn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $f({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function WE(e,{refreshToken:t}){const n=$f(e);return n.append("Authorization",zE(t)),n}async function jf(e){const t=await e();return t.status>=500&&t.status<600?e():t}function KE(e){return Number(e.replace("s","000"))}function zE(e){return`${Lf} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Bf(e),s=$f(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Lf,appId:e.appId,sdkVersion:Nf},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await jf(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Uf(l.authToken)}}else throw await Ff("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=/^[cdef][\w-]{21}$/,qi="";function YE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=JE(e);return QE.test(n)?n:qi}catch{return qi}}function JE(e){return qE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new Map;function Wf(e,t){const n=Bs(e);Kf(n,t),XE(n,t)}function Kf(e,t){const n=Vf.get(e);if(n)for(const r of n)r(t)}function XE(e,t){const n=ZE();n&&n.postMessage({key:e,fid:t}),eI()}let an=null;function ZE(){return!an&&"BroadcastChannel"in self&&(an=new BroadcastChannel("[Firebase] FID Change"),an.onmessage=e=>{Kf(e.data.key,e.data.fid)}),an}function eI(){Vf.size===0&&an&&(an.close(),an=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="firebase-installations-database",nI=1,gn="firebase-installations-store";let di=null;function Wo(){return di||(di=ME(tI,nI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(gn)}}})),di}async function ds(e,t){const n=Bs(e),s=(await Wo()).transaction(gn,"readwrite"),i=s.objectStore(gn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Wf(e,t.fid),t}async function zf(e){const t=Bs(e),r=(await Wo()).transaction(gn,"readwrite");await r.objectStore(gn).delete(t),await r.done}async function Us(e,t){const n=Bs(e),s=(await Wo()).transaction(gn,"readwrite"),i=s.objectStore(gn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Wf(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(e){let t;const n=await Us(e.appConfig,r=>{const s=rI(r),i=sI(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===qi?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function rI(e){const t=e||{fid:YE(),registrationStatus:0};return Gf(t)}function sI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(pn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=iI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:oI(e)}:{installationEntry:t}}async function iI(e,t){try{const n=await GE(e,t);return ds(e.appConfig,n)}catch(n){throw Mf(n)&&n.customData.serverCode===409?await zf(e.appConfig):await ds(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function oI(e){let t=await Mc(e.appConfig);for(;t.registrationStatus===1;)await Hf(100),t=await Mc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ko(e);return r||n}return t}function Mc(e){return Us(e,t=>{if(!t)throw pn.create("installation-not-found");return Gf(t)})}function Gf(e){return aI(e)?{fid:e.fid,registrationStatus:0}:e}function aI(e){return e.registrationStatus===1&&e.registrationTime+xf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI({appConfig:e,heartbeatServiceProvider:t},n){const r=lI(e,n),s=WE(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Nf,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await jf(()=>fetch(r,a));if(c.ok){const l=await c.json();return Uf(l)}else throw await Ff("Generate Auth Token",c)}function lI(e,{fid:t}){return`${Bf(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(e,t=!1){let n;const r=await Us(e.appConfig,i=>{if(!qf(i))throw pn.create("not-registered");const o=i.authToken;if(!t&&dI(o))return i;if(o.requestStatus===1)return n=uI(e,t),i;{if(!navigator.onLine)throw pn.create("app-offline");const a=pI(i);return n=fI(e,a),a}});return n?await n:r.authToken}async function uI(e,t){let n=await Bc(e.appConfig);for(;n.authToken.requestStatus===1;)await Hf(100),n=await Bc(e.appConfig);const r=n.authToken;return r.requestStatus===0?zo(e,t):r}function Bc(e){return Us(e,t=>{if(!qf(t))throw pn.create("not-registered");const n=t.authToken;return gI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function fI(e,t){try{const n=await cI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ds(e.appConfig,r),n}catch(n){if(Mf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await zf(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ds(e.appConfig,r)}throw n}}function qf(e){return e!==void 0&&e.registrationStatus===2}function dI(e){return e.requestStatus===2&&!hI(e)}function hI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+$E}function pI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function gI(e){return e.requestStatus===1&&e.requestTime+xf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ko(t);return r?r.catch(console.error):zo(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(e,t=!1){const n=e;return await AI(n),(await zo(n,t)).token}async function AI(e){const{registrationPromise:t}=await Ko(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(e){if(!e||!e.options)throw hi("App Configuration");if(!e.name)throw hi("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw hi(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function hi(e){return pn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="installations",vI="installations-internal",bI=e=>{const t=e.getProvider("app").getImmediate(),n=yI(t),r=Wn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wI=e=>{const t=e.getProvider("app").getImmediate(),n=Wn(t,Qf).getImmediate();return{getId:()=>mI(n),getToken:s=>_I(n,s)}};function EI(){bt(new ft(Qf,bI,"PUBLIC")),bt(new ft(vI,wI,"PRIVATE"))}EI();at(Df,Vo);at(Df,Vo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="analytics",II="firebase_id",TI="origin",CI=60*1e3,SI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Go="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De=new ko("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new _n("analytics","Analytics",RI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(e){if(!e.startsWith(Go)){const t=Be.create("invalid-gtag-resource",{gtagURL:e});return De.warn(t.message),""}return e}function Yf(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function kI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function PI(e,t){const n=kI("firebase-js-sdk-policy",{createScriptURL:OI}),r=document.createElement("script"),s=`${Go}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function DI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function xI(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Yf(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){De.error(a)}e("config",s,i)}async function NI(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Yf(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){De.error(i)}}function LI(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await NI(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await xI(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){De.error(a)}}return s}function MI(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=LI(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function BI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Go)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=30,FI=1e3;class $I{constructor(t={},n=FI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Jf=new $I;function jI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function HI(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:jI(r)},i=SI.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function VI(e,t=Jf,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Be.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Be.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new zI;return setTimeout(async()=>{a.abort()},n!==void 0?n:CI),Xf({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Xf(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Jf){var i;const{appId:o,measurementId:a}=e;try{await WI(r,t)}catch(c){if(a)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await HI(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!KI(l)){if(s.deleteThrottleMetadata(o),a)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?ac(n,s.intervalMillis,UI):ac(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),De.debug(`Calling attemptFetch again in ${u} millis`),Xf(e,f,r,s)}}function WI(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Be.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function KI(e){if(!(e instanceof ht)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class zI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function GI(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(){if(Uu())try{await Fu()}catch(e){return De.warn(Be.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return De.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function QI(e,t,n,r,s,i,o){var a;const c=VI(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>De.error(g)),t.push(c);const l=qI().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([c,l]);BI(i)||PI(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[TI]="firebase",p.update=!0,f!=null&&(p[II]=f),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(t){this.app=t}_delete(){return delete ir[this.app.options.appId],Promise.resolve()}}let ir={},Uc=[];const Fc={};let pi="dataLayer",JI="gtag",$c,Zf,jc=!1;function XI(){const e=[];if(Bu()&&e.push("This is a browser extension environment."),Sy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Be.create("invalid-analytics-context",{errorInfo:t});De.warn(n.message)}}function ZI(e,t,n){XI();const r=e.options.appId;if(!r)throw Be.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(ir[r]!=null)throw Be.create("already-exists",{id:r});if(!jc){DI(pi);const{wrappedGtag:i,gtagCore:o}=MI(ir,Uc,Fc,pi,JI);Zf=i,$c=o,jc=!0}return ir[r]=QI(e,Uc,Fc,t,$c,pi,n),new YI(e)}function eT(e=Vu()){e=Ze(e);const t=Wn(e,hs);return t.isInitialized()?t.getImmediate():tT(e)}function tT(e,t={}){const n=Wn(e,hs);if(n.isInitialized()){const s=n.getImmediate();if(mr(t,n.getOptions()))return s;throw Be.create("already-initialized")}return n.initialize({options:t})}function nT(e,t,n,r){e=Ze(e),GI(Zf,ir[e.app.options.appId],t,n,r).catch(s=>De.error(s))}const Hc="@firebase/analytics",Vc="0.10.0";function rT(){bt(new ft(hs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return ZI(r,s,n)},"PUBLIC")),bt(new ft("analytics-internal",e,"PRIVATE")),at(Hc,Vc),at(Hc,Vc,"esm2017");function e(t){try{const n=t.getProvider(hs).getImmediate();return{logEvent:(r,s,i)=>nT(n,r,s,i)}}catch(n){throw Be.create("interop-component-reg-failed",{reason:n})}}}rT();const sT={apiKey:"AIzaSyB0p4c5jGZDjs0RSAdtTtrb9LYolgd4iL8",authDomain:"yu-gi-oh-f2e29.firebaseapp.com",projectId:"yu-gi-oh-f2e29",storageBucket:"yu-gi-oh-f2e29.appspot.com",messagingSenderId:"342293313702",appId:"1:342293313702:web:e2105215137c53b7535c67",measurementId:"G-TRC4QKQHR6"},iT=Hu(sT),qo=Ip(Rp,{});qo.use(eg);qo.use(Of);qo.mount("#app");eT(iT);
