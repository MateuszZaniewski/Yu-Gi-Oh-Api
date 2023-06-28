(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function to(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function no(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ve(r)?ld(r):no(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(ve(e))return e;if(fe(e))return e}}const od=/;(?![^(]*\))/g,ad=/:([^]+)/,cd=/\/\*.*?\*\//gs;function ld(e){const t={};return e.replace(cd,"").split(od).forEach(n=>{if(n){const r=n.split(ad);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ys(e){let t="";if(ve(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=ys(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fd=to(ud);function Jc(e){return!!e||e===""}function dd(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=vs(e[r],t[r]);return n}function vs(e,t){if(e===t)return!0;let n=na(e),r=na(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=ar(e),r=ar(t),n||r)return e===t;if(n=H(e),r=H(t),n||r)return n&&r?dd(e,t):!1;if(n=fe(e),r=fe(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!vs(e[o],t[o]))return!1}}return String(e)===String(t)}function hd(e,t){return e.findIndex(n=>vs(n,t))}const ze=e=>ve(e)?e:e==null?"":H(e)||fe(e)&&(e.toString===el||!Y(e.toString))?JSON.stringify(e,Xc,2):String(e),Xc=(e,t)=>t&&t.__v_isRef?Xc(e,t.value):Rn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ws(t)?{[`Set(${t.size})`]:[...t.values()]}:fe(t)&&!H(t)&&!tl(t)?String(t):t,de={},Sn=[],qe=()=>{},pd=()=>!1,gd=/^on[^a-z]/,bs=e=>gd.test(e),ro=e=>e.startsWith("onUpdate:"),Ce=Object.assign,so=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},md=Object.prototype.hasOwnProperty,Z=(e,t)=>md.call(e,t),H=Array.isArray,Rn=e=>wr(e)==="[object Map]",ws=e=>wr(e)==="[object Set]",na=e=>wr(e)==="[object Date]",Y=e=>typeof e=="function",ve=e=>typeof e=="string",ar=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Zc=e=>fe(e)&&Y(e.then)&&Y(e.catch),el=Object.prototype.toString,wr=e=>el.call(e),_d=e=>wr(e).slice(8,-1),tl=e=>wr(e)==="[object Object]",io=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jr=to(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Es=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ad=/-(\w)/g,ut=Es(e=>e.replace(Ad,(t,n)=>n?n.toUpperCase():"")),yd=/\B([A-Z])/g,Fn=Es(e=>e.replace(yd,"-$1").toLowerCase()),Is=Es(e=>e.charAt(0).toUpperCase()+e.slice(1)),zs=Es(e=>e?`on${Is(e)}`:""),cr=(e,t)=>!Object.is(e,t),Hr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},es=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ra;const vd=()=>ra||(ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ve;class bd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ve;try{return Ve=this,t()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function wd(e,t=Ve){t&&t.active&&t.effects.push(e)}function Ed(){return Ve}const oo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},nl=e=>(e.w&qt)>0,rl=e=>(e.n&qt)>0,Id=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qt},Td=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];nl(s)&&!rl(s)?s.delete(e):t[n++]=s,s.w&=~qt,s.n&=~qt}t.length=n}},wi=new WeakMap;let Xn=0,qt=1;const Ei=30;let We;const ln=Symbol(""),Ii=Symbol("");class ao{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wd(this,r)}run(){if(!this.active)return this.fn();let t=We,n=$t;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=We,We=this,$t=!0,qt=1<<++Xn,Xn<=Ei?Id(this):sa(this),this.fn()}finally{Xn<=Ei&&Td(this),qt=1<<--Xn,We=this.parent,$t=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){We===this?this.deferStop=!0:this.active&&(sa(this),this.onStop&&this.onStop(),this.active=!1)}}function sa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let $t=!0;const sl=[];function $n(){sl.push($t),$t=!1}function jn(){const e=sl.pop();$t=e===void 0?!0:e}function xe(e,t,n){if($t&&We){let r=wi.get(e);r||wi.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=oo()),il(s)}}function il(e,t){let n=!1;Xn<=Ei?rl(e)||(e.n|=qt,n=!nl(e)):n=!e.has(We),n&&(e.add(We),We.deps.push(e))}function vt(e,t,n,r,s,i){const o=wi.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&H(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":H(e)?io(n)&&a.push(o.get("length")):(a.push(o.get(ln)),Rn(e)&&a.push(o.get(Ii)));break;case"delete":H(e)||(a.push(o.get(ln)),Rn(e)&&a.push(o.get(Ii)));break;case"set":Rn(e)&&a.push(o.get(ln));break}if(a.length===1)a[0]&&Ti(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ti(oo(c))}}function Ti(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&ia(r);for(const r of n)r.computed||ia(r)}function ia(e,t){(e!==We||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Cd=to("__proto__,__v_isRef,__isVue"),ol=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ar)),Sd=co(),Rd=co(!1,!0),Od=co(!0),oa=kd();function kd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=te(this);for(let i=0,o=this.length;i<o;i++)xe(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){$n();const r=te(this)[t].apply(this,n);return jn(),r}}),e}function Pd(e){const t=te(this);return xe(t,"has",e),t.hasOwnProperty(e)}function co(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?qd:fl:t?ul:ll).get(r))return r;const o=H(r);if(!e){if(o&&Z(oa,s))return Reflect.get(oa,s,i);if(s==="hasOwnProperty")return Pd}const a=Reflect.get(r,s,i);return(ar(s)?ol.has(s):Cd(s))||(e||xe(r,"get",s),t)?a:Ee(a)?o&&io(s)?a:a.value:fe(a)?e?dl(a):Hn(a):a}}const Dd=al(),xd=al(!0);function al(e=!1){return function(n,r,s,i){let o=n[r];if(xn(o)&&Ee(o)&&!Ee(s))return!1;if(!e&&(!ns(s)&&!xn(s)&&(o=te(o),s=te(s)),!H(n)&&Ee(o)&&!Ee(s)))return o.value=s,!0;const a=H(n)&&io(r)?Number(r)<n.length:Z(n,r),c=Reflect.set(n,r,s,i);return n===te(i)&&(a?cr(s,o)&&vt(n,"set",r,s):vt(n,"add",r,s)),c}}function Nd(e,t){const n=Z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&vt(e,"delete",t,void 0),r}function Ld(e,t){const n=Reflect.has(e,t);return(!ar(t)||!ol.has(t))&&xe(e,"has",t),n}function Md(e){return xe(e,"iterate",H(e)?"length":ln),Reflect.ownKeys(e)}const cl={get:Sd,set:Dd,deleteProperty:Nd,has:Ld,ownKeys:Md},Bd={get:Od,set(e,t){return!0},deleteProperty(e,t){return!0}},Ud=Ce({},cl,{get:Rd,set:xd}),lo=e=>e,Ts=e=>Reflect.getPrototypeOf(e);function Nr(e,t,n=!1,r=!1){e=e.__v_raw;const s=te(e),i=te(t);n||(t!==i&&xe(s,"get",t),xe(s,"get",i));const{has:o}=Ts(s),a=r?lo:n?ho:lr;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function Lr(e,t=!1){const n=this.__v_raw,r=te(n),s=te(e);return t||(e!==s&&xe(r,"has",e),xe(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Mr(e,t=!1){return e=e.__v_raw,!t&&xe(te(e),"iterate",ln),Reflect.get(e,"size",e)}function aa(e){e=te(e);const t=te(this);return Ts(t).has.call(t,e)||(t.add(e),vt(t,"add",e,e)),this}function ca(e,t){t=te(t);const n=te(this),{has:r,get:s}=Ts(n);let i=r.call(n,e);i||(e=te(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?cr(t,o)&&vt(n,"set",e,t):vt(n,"add",e,t),this}function la(e){const t=te(this),{has:n,get:r}=Ts(t);let s=n.call(t,e);s||(e=te(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&vt(t,"delete",e,void 0),i}function ua(){const e=te(this),t=e.size!==0,n=e.clear();return t&&vt(e,"clear",void 0,void 0),n}function Br(e,t){return function(r,s){const i=this,o=i.__v_raw,a=te(o),c=t?lo:e?ho:lr;return!e&&xe(a,"iterate",ln),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ur(e,t,n){return function(...r){const s=this.__v_raw,i=te(s),o=Rn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?lo:t?ho:lr;return!t&&xe(i,"iterate",c?Ii:ln),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Pt(e){return function(...t){return e==="delete"?!1:this}}function Fd(){const e={get(i){return Nr(this,i)},get size(){return Mr(this)},has:Lr,add:aa,set:ca,delete:la,clear:ua,forEach:Br(!1,!1)},t={get(i){return Nr(this,i,!1,!0)},get size(){return Mr(this)},has:Lr,add:aa,set:ca,delete:la,clear:ua,forEach:Br(!1,!0)},n={get(i){return Nr(this,i,!0)},get size(){return Mr(this,!0)},has(i){return Lr.call(this,i,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:Br(!0,!1)},r={get(i){return Nr(this,i,!0,!0)},get size(){return Mr(this,!0)},has(i){return Lr.call(this,i,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:Br(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ur(i,!1,!1),n[i]=Ur(i,!0,!1),t[i]=Ur(i,!1,!0),r[i]=Ur(i,!0,!0)}),[e,n,t,r]}const[$d,jd,Hd,Vd]=Fd();function uo(e,t){const n=t?e?Vd:Hd:e?jd:$d;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const Wd={get:uo(!1,!1)},Kd={get:uo(!1,!0)},zd={get:uo(!0,!1)},ll=new WeakMap,ul=new WeakMap,fl=new WeakMap,qd=new WeakMap;function Gd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qd(e){return e.__v_skip||!Object.isExtensible(e)?0:Gd(_d(e))}function Hn(e){return xn(e)?e:fo(e,!1,cl,Wd,ll)}function Yd(e){return fo(e,!1,Ud,Kd,ul)}function dl(e){return fo(e,!0,Bd,zd,fl)}function fo(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Qd(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function On(e){return xn(e)?On(e.__v_raw):!!(e&&e.__v_isReactive)}function xn(e){return!!(e&&e.__v_isReadonly)}function ns(e){return!!(e&&e.__v_isShallow)}function hl(e){return On(e)||xn(e)}function te(e){const t=e&&e.__v_raw;return t?te(t):e}function pl(e){return es(e,"__v_skip",!0),e}const lr=e=>fe(e)?Hn(e):e,ho=e=>fe(e)?dl(e):e;function gl(e){$t&&We&&(e=te(e),il(e.dep||(e.dep=oo())))}function ml(e,t){e=te(e);const n=e.dep;n&&Ti(n)}function Ee(e){return!!(e&&e.__v_isRef===!0)}function K(e){return _l(e,!1)}function Jd(e){return _l(e,!0)}function _l(e,t){return Ee(e)?e:new Xd(e,t)}class Xd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:te(t),this._value=n?t:lr(t)}get value(){return gl(this),this._value}set value(t){const n=this.__v_isShallow||ns(t)||xn(t);t=n?t:te(t),cr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:lr(t),ml(this))}}function N(e){return Ee(e)?e.value:e}const Zd={get:(e,t,n)=>N(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Al(e){return On(e)?e:new Proxy(e,Zd)}var yl;class eh{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[yl]=!1,this._dirty=!0,this.effect=new ao(t,()=>{this._dirty||(this._dirty=!0,ml(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=te(this);return gl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}yl="__v_isReadonly";function th(e,t,n=!1){let r,s;const i=Y(e);return i?(r=e,s=qe):(r=e.get,s=e.set),new eh(r,s,i||!s,n)}function jt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){Cs(i,t,n)}return s}function Fe(e,t,n,r){if(Y(e)){const i=jt(e,t,n,r);return i&&Zc(i)&&i.catch(o=>{Cs(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Fe(e[i],t,n,r));return s}function Cs(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){jt(c,null,10,[e,o,a]);return}}nh(e,n,s,r)}function nh(e,t,n,r=!0){console.error(e)}let ur=!1,Ci=!1;const Te=[];let st=0;const kn=[];let mt=null,tn=0;const vl=Promise.resolve();let po=null;function bl(e){const t=po||vl;return e?t.then(this?e.bind(this):e):t}function rh(e){let t=st+1,n=Te.length;for(;t<n;){const r=t+n>>>1;fr(Te[r])<e?t=r+1:n=r}return t}function go(e){(!Te.length||!Te.includes(e,ur&&e.allowRecurse?st+1:st))&&(e.id==null?Te.push(e):Te.splice(rh(e.id),0,e),wl())}function wl(){!ur&&!Ci&&(Ci=!0,po=vl.then(Il))}function sh(e){const t=Te.indexOf(e);t>st&&Te.splice(t,1)}function ih(e){H(e)?kn.push(...e):(!mt||!mt.includes(e,e.allowRecurse?tn+1:tn))&&kn.push(e),wl()}function fa(e,t=ur?st+1:0){for(;t<Te.length;t++){const n=Te[t];n&&n.pre&&(Te.splice(t,1),t--,n())}}function El(e){if(kn.length){const t=[...new Set(kn)];if(kn.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((n,r)=>fr(n)-fr(r)),tn=0;tn<mt.length;tn++)mt[tn]();mt=null,tn=0}}const fr=e=>e.id==null?1/0:e.id,oh=(e,t)=>{const n=fr(e)-fr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Il(e){Ci=!1,ur=!0,Te.sort(oh);const t=qe;try{for(st=0;st<Te.length;st++){const n=Te[st];n&&n.active!==!1&&jt(n,null,14)}}finally{st=0,Te.length=0,El(),ur=!1,po=null,(Te.length||kn.length)&&Il()}}function ah(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||de;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||de;p&&(s=n.map(g=>ve(g)?g.trim():g)),f&&(s=n.map(ts))}let a,c=r[a=zs(t)]||r[a=zs(ut(t))];!c&&i&&(c=r[a=zs(Fn(t))]),c&&Fe(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Fe(l,e,6,s)}}function Tl(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!Y(e)){const c=l=>{const u=Tl(l,t,!0);u&&(a=!0,Ce(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(fe(e)&&r.set(e,null),null):(H(i)?i.forEach(c=>o[c]=null):Ce(o,i),fe(e)&&r.set(e,o),o)}function Ss(e,t){return!e||!bs(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,Fn(t))||Z(e,t))}let Me=null,Rs=null;function rs(e){const t=Me;return Me=e,Rs=e&&e.type.__scopeId||null,t}function It(e){Rs=e}function Tt(){Rs=null}function ch(e,t=Me,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ba(-1);const i=rs(t);let o;try{o=e(...s)}finally{rs(i),r._d&&ba(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function qs(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:_,inheritAttrs:w}=e;let L,O;const M=rs(e);try{if(n.shapeFlag&4){const C=s||r;L=rt(u.call(C,C,f,i,g,p,_)),O=c}else{const C=t;L=rt(C.length>1?C(i,{attrs:c,slots:a,emit:l}):C(i,null)),O=t.props?c:lh(c)}}catch(C){nr.length=0,Cs(C,e,1),L=pe(Qe)}let I=L;if(O&&w!==!1){const C=Object.keys(O),{shapeFlag:j}=I;C.length&&j&7&&(o&&C.some(ro)&&(O=uh(O,o)),I=Gt(I,O))}return n.dirs&&(I=Gt(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),L=I,rs(M),L}const lh=e=>{let t;for(const n in e)(n==="class"||n==="style"||bs(n))&&((t||(t={}))[n]=e[n]);return t},uh=(e,t)=>{const n={};for(const r in e)(!ro(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function fh(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?da(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!Ss(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?da(r,o,l):!0:!!o;return!1}function da(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Ss(n,i))return!0}return!1}function dh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const hh=e=>e.__isSuspense;function ph(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):ih(e)}function Vr(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Ge(e,t,n=!1){const r=me||Me;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Y(t)?t.call(r.proxy):t}}const Fr={};function Ht(e,t,n){return Cl(e,t,n)}function Cl(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=de){const a=Ed()===(me==null?void 0:me.scope)?me:null;let c,l=!1,u=!1;if(Ee(e)?(c=()=>e.value,l=ns(e)):On(e)?(c=()=>e,r=!0):H(e)?(u=!0,l=e.some(I=>On(I)||ns(I)),c=()=>e.map(I=>{if(Ee(I))return I.value;if(On(I))return on(I);if(Y(I))return jt(I,a,2)})):Y(e)?t?c=()=>jt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Fe(e,a,3,[p])}:c=qe,t&&r){const I=c;c=()=>on(I())}let f,p=I=>{f=O.onStop=()=>{jt(I,a,4)}},g;if(hr)if(p=qe,t?n&&Fe(t,a,3,[c(),u?[]:void 0,p]):c(),s==="sync"){const I=up();g=I.__watcherHandles||(I.__watcherHandles=[])}else return qe;let _=u?new Array(e.length).fill(Fr):Fr;const w=()=>{if(O.active)if(t){const I=O.run();(r||l||(u?I.some((C,j)=>cr(C,_[j])):cr(I,_)))&&(f&&f(),Fe(t,a,3,[I,_===Fr?void 0:u&&_[0]===Fr?[]:_,p]),_=I)}else O.run()};w.allowRecurse=!!t;let L;s==="sync"?L=w:s==="post"?L=()=>ke(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),L=()=>go(w));const O=new ao(c,L);t?n?w():_=O.run():s==="post"?ke(O.run.bind(O),a&&a.suspense):O.run();const M=()=>{O.stop(),a&&a.scope&&so(a.scope.effects,O)};return g&&g.push(M),M}function gh(e,t,n){const r=this.proxy,s=ve(e)?e.includes(".")?Sl(r,e):()=>r[e]:e.bind(r,r);let i;Y(t)?i=t:(i=t.handler,n=t);const o=me;Ln(this);const a=Cl(s,i.bind(r),n);return o?Ln(o):un(),a}function Sl(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function on(e,t){if(!fe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ee(e))on(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)on(e[n],t);else if(ws(e)||Rn(e))e.forEach(n=>{on(n,t)});else if(tl(e))for(const n in e)on(e[n],t);return e}function mh(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mo(()=>{e.isMounted=!0}),Dl(()=>{e.isUnmounting=!0}),e}const Ue=[Function,Array],_h={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},setup(e,{slots:t}){const n=np(),r=mh();let s;return()=>{const i=t.default&&Ol(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==Qe){o=w;break}}const a=te(e),{mode:c}=a;if(r.isLeaving)return Gs(o);const l=ha(o);if(!l)return Gs(o);const u=Si(l,a,r,n);Ri(l,u);const f=n.subTree,p=f&&ha(f);let g=!1;const{getTransitionKey:_}=l.type;if(_){const w=_();s===void 0?s=w:w!==s&&(s=w,g=!0)}if(p&&p.type!==Qe&&(!nn(l,p)||g)){const w=Si(p,a,r,n);if(Ri(p,w),c==="out-in")return r.isLeaving=!0,w.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Gs(o);c==="in-out"&&l.type!==Qe&&(w.delayLeave=(L,O,M)=>{const I=Rl(r,p);I[String(p.key)]=p,L._leaveCb=()=>{O(),L._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},Ah=_h;function Rl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Si(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:w,onAppear:L,onAfterAppear:O,onAppearCancelled:M}=t,I=String(e.key),C=Rl(n,e),j=(Q,ae)=>{Q&&Fe(Q,r,9,ae)},G=(Q,ae)=>{const se=ae[1];j(Q,ae),H(Q)?Q.every(_e=>_e.length<=1)&&se():Q.length<=1&&se()},ye={mode:i,persisted:o,beforeEnter(Q){let ae=a;if(!n.isMounted)if(s)ae=w||a;else return;Q._leaveCb&&Q._leaveCb(!0);const se=C[I];se&&nn(e,se)&&se.el._leaveCb&&se.el._leaveCb(),j(ae,[Q])},enter(Q){let ae=c,se=l,_e=u;if(!n.isMounted)if(s)ae=L||c,se=O||l,_e=M||u;else return;let he=!1;const J=Q._enterCb=Yt=>{he||(he=!0,Yt?j(_e,[Q]):j(se,[Q]),ye.delayedLeave&&ye.delayedLeave(),Q._enterCb=void 0)};ae?G(ae,[Q,J]):J()},leave(Q,ae){const se=String(e.key);if(Q._enterCb&&Q._enterCb(!0),n.isUnmounting)return ae();j(f,[Q]);let _e=!1;const he=Q._leaveCb=J=>{_e||(_e=!0,ae(),J?j(_,[Q]):j(g,[Q]),Q._leaveCb=void 0,C[se]===e&&delete C[se])};C[se]=e,p?G(p,[Q,he]):he()},clone(Q){return Si(Q,t,n,r)}};return ye}function Gs(e){if(Os(e))return e=Gt(e),e.children=null,e}function ha(e){return Os(e)?e.children?e.children[0]:void 0:e}function Ri(e,t){e.shapeFlag&6&&e.component?Ri(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ol(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ge?(o.patchFlag&128&&s++,r=r.concat(Ol(o.children,t,a))):(t||o.type!==Qe)&&r.push(a!=null?Gt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function kl(e){return Y(e)?{setup:e,name:e.name}:e}const Wr=e=>!!e.type.__asyncLoader,Os=e=>e.type.__isKeepAlive;function yh(e,t){Pl(e,"a",t)}function vh(e,t){Pl(e,"da",t)}function Pl(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ks(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Os(s.parent.vnode)&&bh(r,t,n,s),s=s.parent}}function bh(e,t,n,r){const s=ks(t,e,r,!0);xl(()=>{so(r[t],s)},n)}function ks(e,t,n=me,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;$n(),Ln(n);const a=Fe(t,n,e,o);return un(),jn(),a});return r?s.unshift(i):s.push(i),i}}const Ct=e=>(t,n=me)=>(!hr||e==="sp")&&ks(e,(...r)=>t(...r),n),wh=Ct("bm"),mo=Ct("m"),Eh=Ct("bu"),Ih=Ct("u"),Dl=Ct("bum"),xl=Ct("um"),Th=Ct("sp"),Ch=Ct("rtg"),Sh=Ct("rtc");function Rh(e,t=me){ks("ec",e,t)}function Nn(e,t){const n=Me;if(n===null)return e;const r=xs(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=de]=t[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&on(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Jt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&($n(),Fe(c,n,8,[e.el,a,e,t]),jn())}}const Nl="components";function Oh(e,t){return Ph(Nl,e,!0,t)||e}const kh=Symbol();function Ph(e,t,n=!0,r=!1){const s=Me||me;if(s){const i=s.type;if(e===Nl){const a=ap(i,!1);if(a&&(a===t||a===ut(t)||a===Is(ut(t))))return i}const o=pa(s[e]||i[e],t)||pa(s.appContext[e],t);return!o&&r?i:o}}function pa(e,t){return e&&(e[t]||e[ut(t)]||e[Is(ut(t))])}function bt(e,t,n,r){let s;const i=n&&n[r];if(H(e)||ve(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(fe(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Oi=e=>e?zl(e)?xs(e)||e.proxy:Oi(e.parent):null,tr=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Oi(e.parent),$root:e=>Oi(e.root),$emit:e=>e.emit,$options:e=>_o(e),$forceUpdate:e=>e.f||(e.f=()=>go(e.update)),$nextTick:e=>e.n||(e.n=bl.bind(e.proxy)),$watch:e=>gh.bind(e)}),Qs=(e,t)=>e!==de&&!e.__isScriptSetup&&Z(e,t),Dh={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Qs(r,t))return o[t]=1,r[t];if(s!==de&&Z(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&Z(l,t))return o[t]=3,i[t];if(n!==de&&Z(n,t))return o[t]=4,n[t];ki&&(o[t]=0)}}const u=tr[t];let f,p;if(u)return t==="$attrs"&&xe(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==de&&Z(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,Z(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Qs(s,t)?(s[t]=n,!0):r!==de&&Z(r,t)?(r[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==de&&Z(e,o)||Qs(t,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(tr,o)||Z(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ki=!0;function xh(e){const t=_o(e),n=e.proxy,r=e.ctx;ki=!1,t.beforeCreate&&ga(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:_,activated:w,deactivated:L,beforeDestroy:O,beforeUnmount:M,destroyed:I,unmounted:C,render:j,renderTracked:G,renderTriggered:ye,errorCaptured:Q,serverPrefetch:ae,expose:se,inheritAttrs:_e,components:he,directives:J,filters:Yt}=t;if(l&&Nh(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ce in o){const ne=o[ce];Y(ne)&&(r[ce]=ne.bind(n))}if(s){const ce=s.call(n,n);fe(ce)&&(e.data=Hn(ce))}if(ki=!0,i)for(const ce in i){const ne=i[ce],pt=Y(ne)?ne.bind(n,n):Y(ne.get)?ne.get.bind(n,n):qe,kt=!Y(ne)&&Y(ne.set)?ne.set.bind(n):qe,et=Pe({get:pt,set:kt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>et.value,set:Oe=>et.value=Oe})}if(a)for(const ce in a)Ll(a[ce],r,n,ce);if(c){const ce=Y(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(ne=>{Vr(ne,ce[ne])})}u&&ga(u,e,"c");function we(ce,ne){H(ne)?ne.forEach(pt=>ce(pt.bind(n))):ne&&ce(ne.bind(n))}if(we(wh,f),we(mo,p),we(Eh,g),we(Ih,_),we(yh,w),we(vh,L),we(Rh,Q),we(Sh,G),we(Ch,ye),we(Dl,M),we(xl,C),we(Th,ae),H(se))if(se.length){const ce=e.exposed||(e.exposed={});se.forEach(ne=>{Object.defineProperty(ce,ne,{get:()=>n[ne],set:pt=>n[ne]=pt})})}else e.exposed||(e.exposed={});j&&e.render===qe&&(e.render=j),_e!=null&&(e.inheritAttrs=_e),he&&(e.components=he),J&&(e.directives=J)}function Nh(e,t,n=qe,r=!1){H(e)&&(e=Pi(e));for(const s in e){const i=e[s];let o;fe(i)?"default"in i?o=Ge(i.from||s,i.default,!0):o=Ge(i.from||s):o=Ge(i),Ee(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function ga(e,t,n){Fe(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ll(e,t,n,r){const s=r.includes(".")?Sl(n,r):()=>n[r];if(ve(e)){const i=t[e];Y(i)&&Ht(s,i)}else if(Y(e))Ht(s,e.bind(n));else if(fe(e))if(H(e))e.forEach(i=>Ll(i,t,n,r));else{const i=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(i)&&Ht(s,i,e)}}function _o(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>ss(c,l,o,!0)),ss(c,t,o)),fe(t)&&i.set(t,c),c}function ss(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&ss(e,i,n,!0),s&&s.forEach(o=>ss(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Lh[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Lh={data:ma,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Zt,directives:Zt,watch:Bh,provide:ma,inject:Mh};function ma(e,t){return t?e?function(){return Ce(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function Mh(e,t){return Zt(Pi(e),Pi(t))}function Pi(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function Zt(e,t){return e?Ce(Ce(Object.create(null),e),t):t}function Bh(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const r in t)n[r]=Re(e[r],t[r]);return n}function Uh(e,t,n,r=!1){const s={},i={};es(i,Ds,1),e.propsDefaults=Object.create(null),Ml(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Yd(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Fh(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=te(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Ss(e.emitsOptions,p))continue;const g=t[p];if(c)if(Z(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const _=ut(p);s[_]=Di(c,a,_,g,e,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Ml(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!Z(t,f)&&((u=Fn(f))===f||!Z(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Di(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!Z(t,f))&&(delete i[f],l=!0)}l&&vt(e,"set","$attrs")}function Ml(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(jr(c))continue;const l=t[c];let u;s&&Z(s,u=ut(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ss(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=te(n),l=a||de;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Di(s,c,f,l[f],e,!Z(l,f))}}return o}function Di(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Ln(s),r=l[n]=c.call(null,t),un())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Fn(n))&&(r=!0))}return r}function Bl(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!Y(e)){const u=f=>{c=!0;const[p,g]=Bl(f,t,!0);Ce(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return fe(e)&&r.set(e,Sn),Sn;if(H(i))for(let u=0;u<i.length;u++){const f=ut(i[u]);_a(f)&&(o[f]=de)}else if(i)for(const u in i){const f=ut(u);if(_a(f)){const p=i[u],g=o[f]=H(p)||Y(p)?{type:p}:Object.assign({},p);if(g){const _=va(Boolean,g.type),w=va(String,g.type);g[0]=_>-1,g[1]=w<0||_<w,(_>-1||Z(g,"default"))&&a.push(f)}}}const l=[o,a];return fe(e)&&r.set(e,l),l}function _a(e){return e[0]!=="$"}function Aa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ya(e,t){return Aa(e)===Aa(t)}function va(e,t){return H(t)?t.findIndex(n=>ya(n,e)):Y(t)&&ya(t,e)?0:-1}const Ul=e=>e[0]==="_"||e==="$stable",Ao=e=>H(e)?e.map(rt):[rt(e)],$h=(e,t,n)=>{if(t._n)return t;const r=ch((...s)=>Ao(t(...s)),n);return r._c=!1,r},Fl=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ul(s))continue;const i=e[s];if(Y(i))t[s]=$h(s,i,r);else if(i!=null){const o=Ao(i);t[s]=()=>o}}},$l=(e,t)=>{const n=Ao(t);e.slots.default=()=>n},jh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=te(t),es(t,"_",n)):Fl(t,e.slots={})}else e.slots={},t&&$l(e,t);es(e.slots,Ds,1)},Hh=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=de;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(Ce(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Fl(t,s)),o=t}else t&&($l(e,t),o={default:1});if(i)for(const a in s)!Ul(a)&&!(a in o)&&delete s[a]};function jl(){return{app:null,config:{isNativeTag:pd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vh=0;function Wh(e,t){return function(r,s=null){Y(r)||(r=Object.assign({},r)),s!=null&&!fe(s)&&(s=null);const i=jl(),o=new Set;let a=!1;const c=i.app={_uid:Vh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:fp,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=pe(r,s);return p.appContext=i,u&&t?t(p,l):e(p,l,f),a=!0,c._container=l,l.__vue_app__=c,xs(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function xi(e,t,n,r,s=!1){if(H(e)){e.forEach((p,g)=>xi(p,t&&(H(t)?t[g]:t),n,r,s));return}if(Wr(r)&&!s)return;const i=r.shapeFlag&4?xs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===de?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ve(l)?(u[l]=null,Z(f,l)&&(f[l]=null)):Ee(l)&&(l.value=null)),Y(c))jt(c,a,12,[o,u]);else{const p=ve(c),g=Ee(c);if(p||g){const _=()=>{if(e.f){const w=p?Z(f,c)?f[c]:u[c]:c.value;s?H(w)&&so(w,i):H(w)?w.includes(i)||w.push(i):p?(u[c]=[i],Z(f,c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else p?(u[c]=o,Z(f,c)&&(f[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(_.id=-1,ke(_,n)):_()}}}const ke=ph;function Kh(e){return zh(e)}function zh(e,t){const n=vd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=qe,insertStaticContent:_}=e,w=(d,h,m,A=null,E=null,T=null,D=!1,R=null,k=!!h.dynamicChildren)=>{if(d===h)return;d&&!nn(d,h)&&(A=b(d),Oe(d,E,T,!0),d=null),h.patchFlag===-2&&(k=!1,h.dynamicChildren=null);const{type:S,ref:F,shapeFlag:B}=h;switch(S){case Ps:L(d,h,m,A);break;case Qe:O(d,h,m,A);break;case Ys:d==null&&M(h,m,A,D);break;case ge:he(d,h,m,A,E,T,D,R,k);break;default:B&1?j(d,h,m,A,E,T,D,R,k):B&6?J(d,h,m,A,E,T,D,R,k):(B&64||B&128)&&S.process(d,h,m,A,E,T,D,R,k,P)}F!=null&&E&&xi(F,d&&d.ref,T,h||d,!h)},L=(d,h,m,A)=>{if(d==null)r(h.el=a(h.children),m,A);else{const E=h.el=d.el;h.children!==d.children&&l(E,h.children)}},O=(d,h,m,A)=>{d==null?r(h.el=c(h.children||""),m,A):h.el=d.el},M=(d,h,m,A)=>{[d.el,d.anchor]=_(d.children,h,m,A,d.el,d.anchor)},I=({el:d,anchor:h},m,A)=>{let E;for(;d&&d!==h;)E=p(d),r(d,m,A),d=E;r(h,m,A)},C=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},j=(d,h,m,A,E,T,D,R,k)=>{D=D||h.type==="svg",d==null?G(h,m,A,E,T,D,R,k):ae(d,h,E,T,D,R,k)},G=(d,h,m,A,E,T,D,R)=>{let k,S;const{type:F,props:B,shapeFlag:$,transition:z,dirs:X}=d;if(k=d.el=o(d.type,T,B&&B.is,B),$&8?u(k,d.children):$&16&&Q(d.children,k,null,A,E,T&&F!=="foreignObject",D,R),X&&Jt(d,null,A,"created"),ye(k,d,d.scopeId,D,A),B){for(const oe in B)oe!=="value"&&!jr(oe)&&i(k,oe,null,B[oe],T,d.children,A,E,Ie);"value"in B&&i(k,"value",null,B.value),(S=B.onVnodeBeforeMount)&&nt(S,A,d)}X&&Jt(d,null,A,"beforeMount");const ue=(!E||E&&!E.pendingBranch)&&z&&!z.persisted;ue&&z.beforeEnter(k),r(k,h,m),((S=B&&B.onVnodeMounted)||ue||X)&&ke(()=>{S&&nt(S,A,d),ue&&z.enter(k),X&&Jt(d,null,A,"mounted")},E)},ye=(d,h,m,A,E)=>{if(m&&g(d,m),A)for(let T=0;T<A.length;T++)g(d,A[T]);if(E){let T=E.subTree;if(h===T){const D=E.vnode;ye(d,D,D.scopeId,D.slotScopeIds,E.parent)}}},Q=(d,h,m,A,E,T,D,R,k=0)=>{for(let S=k;S<d.length;S++){const F=d[S]=R?Lt(d[S]):rt(d[S]);w(null,F,h,m,A,E,T,D,R)}},ae=(d,h,m,A,E,T,D)=>{const R=h.el=d.el;let{patchFlag:k,dynamicChildren:S,dirs:F}=h;k|=d.patchFlag&16;const B=d.props||de,$=h.props||de;let z;m&&Xt(m,!1),(z=$.onVnodeBeforeUpdate)&&nt(z,m,h,d),F&&Jt(h,d,m,"beforeUpdate"),m&&Xt(m,!0);const X=E&&h.type!=="foreignObject";if(S?se(d.dynamicChildren,S,R,m,A,X,T):D||ne(d,h,R,null,m,A,X,T,!1),k>0){if(k&16)_e(R,h,B,$,m,A,E);else if(k&2&&B.class!==$.class&&i(R,"class",null,$.class,E),k&4&&i(R,"style",B.style,$.style,E),k&8){const ue=h.dynamicProps;for(let oe=0;oe<ue.length;oe++){const Ae=ue[oe],He=B[Ae],En=$[Ae];(En!==He||Ae==="value")&&i(R,Ae,He,En,E,d.children,m,A,Ie)}}k&1&&d.children!==h.children&&u(R,h.children)}else!D&&S==null&&_e(R,h,B,$,m,A,E);((z=$.onVnodeUpdated)||F)&&ke(()=>{z&&nt(z,m,h,d),F&&Jt(h,d,m,"updated")},A)},se=(d,h,m,A,E,T,D)=>{for(let R=0;R<h.length;R++){const k=d[R],S=h[R],F=k.el&&(k.type===ge||!nn(k,S)||k.shapeFlag&70)?f(k.el):m;w(k,S,F,null,A,E,T,D,!0)}},_e=(d,h,m,A,E,T,D)=>{if(m!==A){if(m!==de)for(const R in m)!jr(R)&&!(R in A)&&i(d,R,m[R],null,D,h.children,E,T,Ie);for(const R in A){if(jr(R))continue;const k=A[R],S=m[R];k!==S&&R!=="value"&&i(d,R,S,k,D,h.children,E,T,Ie)}"value"in A&&i(d,"value",m.value,A.value)}},he=(d,h,m,A,E,T,D,R,k)=>{const S=h.el=d?d.el:a(""),F=h.anchor=d?d.anchor:a("");let{patchFlag:B,dynamicChildren:$,slotScopeIds:z}=h;z&&(R=R?R.concat(z):z),d==null?(r(S,m,A),r(F,m,A),Q(h.children,m,F,E,T,D,R,k)):B>0&&B&64&&$&&d.dynamicChildren?(se(d.dynamicChildren,$,m,E,T,D,R),(h.key!=null||E&&h===E.subTree)&&Hl(d,h,!0)):ne(d,h,m,F,E,T,D,R,k)},J=(d,h,m,A,E,T,D,R,k)=>{h.slotScopeIds=R,d==null?h.shapeFlag&512?E.ctx.activate(h,m,A,D,k):Yt(h,m,A,E,T,D,k):vn(d,h,k)},Yt=(d,h,m,A,E,T,D)=>{const R=d.component=tp(d,A,E);if(Os(d)&&(R.ctx.renderer=P),rp(R),R.asyncDep){if(E&&E.registerDep(R,we),!d.el){const k=R.subTree=pe(Qe);O(null,k,h,m)}return}we(R,d,h,m,E,T,D)},vn=(d,h,m)=>{const A=h.component=d.component;if(fh(d,h,m))if(A.asyncDep&&!A.asyncResolved){ce(A,h,m);return}else A.next=h,sh(A.update),A.update();else h.el=d.el,A.vnode=h},we=(d,h,m,A,E,T,D)=>{const R=()=>{if(d.isMounted){let{next:F,bu:B,u:$,parent:z,vnode:X}=d,ue=F,oe;Xt(d,!1),F?(F.el=X.el,ce(d,F,D)):F=X,B&&Hr(B),(oe=F.props&&F.props.onVnodeBeforeUpdate)&&nt(oe,z,F,X),Xt(d,!0);const Ae=qs(d),He=d.subTree;d.subTree=Ae,w(He,Ae,f(He.el),b(He),d,E,T),F.el=Ae.el,ue===null&&dh(d,Ae.el),$&&ke($,E),(oe=F.props&&F.props.onVnodeUpdated)&&ke(()=>nt(oe,z,F,X),E)}else{let F;const{el:B,props:$}=h,{bm:z,m:X,parent:ue}=d,oe=Wr(h);if(Xt(d,!1),z&&Hr(z),!oe&&(F=$&&$.onVnodeBeforeMount)&&nt(F,ue,h),Xt(d,!0),B&&re){const Ae=()=>{d.subTree=qs(d),re(B,d.subTree,d,E,null)};oe?h.type.__asyncLoader().then(()=>!d.isUnmounted&&Ae()):Ae()}else{const Ae=d.subTree=qs(d);w(null,Ae,m,A,d,E,T),h.el=Ae.el}if(X&&ke(X,E),!oe&&(F=$&&$.onVnodeMounted)){const Ae=h;ke(()=>nt(F,ue,Ae),E)}(h.shapeFlag&256||ue&&Wr(ue.vnode)&&ue.vnode.shapeFlag&256)&&d.a&&ke(d.a,E),d.isMounted=!0,h=m=A=null}},k=d.effect=new ao(R,()=>go(S),d.scope),S=d.update=()=>k.run();S.id=d.uid,Xt(d,!0),S()},ce=(d,h,m)=>{h.component=d;const A=d.vnode.props;d.vnode=h,d.next=null,Fh(d,h.props,A,m),Hh(d,h.children,m),$n(),fa(),jn()},ne=(d,h,m,A,E,T,D,R,k=!1)=>{const S=d&&d.children,F=d?d.shapeFlag:0,B=h.children,{patchFlag:$,shapeFlag:z}=h;if($>0){if($&128){kt(S,B,m,A,E,T,D,R,k);return}else if($&256){pt(S,B,m,A,E,T,D,R,k);return}}z&8?(F&16&&Ie(S,E,T),B!==S&&u(m,B)):F&16?z&16?kt(S,B,m,A,E,T,D,R,k):Ie(S,E,T,!0):(F&8&&u(m,""),z&16&&Q(B,m,A,E,T,D,R,k))},pt=(d,h,m,A,E,T,D,R,k)=>{d=d||Sn,h=h||Sn;const S=d.length,F=h.length,B=Math.min(S,F);let $;for($=0;$<B;$++){const z=h[$]=k?Lt(h[$]):rt(h[$]);w(d[$],z,m,null,E,T,D,R,k)}S>F?Ie(d,E,T,!0,!1,B):Q(h,m,A,E,T,D,R,k,B)},kt=(d,h,m,A,E,T,D,R,k)=>{let S=0;const F=h.length;let B=d.length-1,$=F-1;for(;S<=B&&S<=$;){const z=d[S],X=h[S]=k?Lt(h[S]):rt(h[S]);if(nn(z,X))w(z,X,m,null,E,T,D,R,k);else break;S++}for(;S<=B&&S<=$;){const z=d[B],X=h[$]=k?Lt(h[$]):rt(h[$]);if(nn(z,X))w(z,X,m,null,E,T,D,R,k);else break;B--,$--}if(S>B){if(S<=$){const z=$+1,X=z<F?h[z].el:A;for(;S<=$;)w(null,h[S]=k?Lt(h[S]):rt(h[S]),m,X,E,T,D,R,k),S++}}else if(S>$)for(;S<=B;)Oe(d[S],E,T,!0),S++;else{const z=S,X=S,ue=new Map;for(S=X;S<=$;S++){const Le=h[S]=k?Lt(h[S]):rt(h[S]);Le.key!=null&&ue.set(Le.key,S)}let oe,Ae=0;const He=$-X+1;let En=!1,Zo=0;const Qn=new Array(He);for(S=0;S<He;S++)Qn[S]=0;for(S=z;S<=B;S++){const Le=d[S];if(Ae>=He){Oe(Le,E,T,!0);continue}let tt;if(Le.key!=null)tt=ue.get(Le.key);else for(oe=X;oe<=$;oe++)if(Qn[oe-X]===0&&nn(Le,h[oe])){tt=oe;break}tt===void 0?Oe(Le,E,T,!0):(Qn[tt-X]=S+1,tt>=Zo?Zo=tt:En=!0,w(Le,h[tt],m,null,E,T,D,R,k),Ae++)}const ea=En?qh(Qn):Sn;for(oe=ea.length-1,S=He-1;S>=0;S--){const Le=X+S,tt=h[Le],ta=Le+1<F?h[Le+1].el:A;Qn[S]===0?w(null,tt,m,ta,E,T,D,R,k):En&&(oe<0||S!==ea[oe]?et(tt,m,ta,2):oe--)}}},et=(d,h,m,A,E=null)=>{const{el:T,type:D,transition:R,children:k,shapeFlag:S}=d;if(S&6){et(d.component.subTree,h,m,A);return}if(S&128){d.suspense.move(h,m,A);return}if(S&64){D.move(d,h,m,P);return}if(D===ge){r(T,h,m);for(let B=0;B<k.length;B++)et(k[B],h,m,A);r(d.anchor,h,m);return}if(D===Ys){I(d,h,m);return}if(A!==2&&S&1&&R)if(A===0)R.beforeEnter(T),r(T,h,m),ke(()=>R.enter(T),E);else{const{leave:B,delayLeave:$,afterLeave:z}=R,X=()=>r(T,h,m),ue=()=>{B(T,()=>{X(),z&&z()})};$?$(T,X,ue):ue()}else r(T,h,m)},Oe=(d,h,m,A=!1,E=!1)=>{const{type:T,props:D,ref:R,children:k,dynamicChildren:S,shapeFlag:F,patchFlag:B,dirs:$}=d;if(R!=null&&xi(R,null,m,d,!0),F&256){h.ctx.deactivate(d);return}const z=F&1&&$,X=!Wr(d);let ue;if(X&&(ue=D&&D.onVnodeBeforeUnmount)&&nt(ue,h,d),F&6)xr(d.component,m,A);else{if(F&128){d.suspense.unmount(m,A);return}z&&Jt(d,null,h,"beforeUnmount"),F&64?d.type.remove(d,h,m,E,P,A):S&&(T!==ge||B>0&&B&64)?Ie(S,h,m,!1,!0):(T===ge&&B&384||!E&&F&16)&&Ie(k,h,m),A&&bn(d)}(X&&(ue=D&&D.onVnodeUnmounted)||z)&&ke(()=>{ue&&nt(ue,h,d),z&&Jt(d,null,h,"unmounted")},m)},bn=d=>{const{type:h,el:m,anchor:A,transition:E}=d;if(h===ge){wn(m,A);return}if(h===Ys){C(d);return}const T=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:D,delayLeave:R}=E,k=()=>D(m,T);R?R(d.el,T,k):k()}else T()},wn=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},xr=(d,h,m)=>{const{bum:A,scope:E,update:T,subTree:D,um:R}=d;A&&Hr(A),E.stop(),T&&(T.active=!1,Oe(D,d,h,m)),R&&ke(R,h),ke(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ie=(d,h,m,A=!1,E=!1,T=0)=>{for(let D=T;D<d.length;D++)Oe(d[D],h,m,A,E)},b=d=>d.shapeFlag&6?b(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,h,m)=>{d==null?h._vnode&&Oe(h._vnode,null,null,!0):w(h._vnode||null,d,h,null,null,null,m),fa(),El(),h._vnode=d},P={p:w,um:Oe,m:et,r:bn,mt:Yt,mc:Q,pc:ne,pbc:se,n:b,o:e};let U,re;return t&&([U,re]=t(P)),{render:x,hydrate:U,createApp:Wh(x,U)}}function Xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Hl(e,t,n=!1){const r=e.children,s=t.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Lt(s[i]),a.el=o.el),n||Hl(o,a)),a.type===Ps&&(a.el=o.el)}}function qh(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Gh=e=>e.__isTeleport,ge=Symbol(void 0),Ps=Symbol(void 0),Qe=Symbol(void 0),Ys=Symbol(void 0),nr=[];let Ke=null;function V(e=!1){nr.push(Ke=e?null:[])}function Qh(){nr.pop(),Ke=nr[nr.length-1]||null}let dr=1;function ba(e){dr+=e}function Vl(e){return e.dynamicChildren=dr>0?Ke||Sn:null,Qh(),dr>0&&Ke&&Ke.push(e),e}function q(e,t,n,r,s,i){return Vl(y(e,t,n,r,s,i,!0))}function yo(e,t,n,r,s){return Vl(pe(e,t,n,r,s,!0))}function Ni(e){return e?e.__v_isVNode===!0:!1}function nn(e,t){return e.type===t.type&&e.key===t.key}const Ds="__vInternal",Wl=({key:e})=>e??null,Kr=({ref:e,ref_key:t,ref_for:n})=>e!=null?ve(e)||Ee(e)||Y(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function y(e,t=null,n=null,r=0,s=null,i=e===ge?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wl(t),ref:t&&Kr(t),scopeId:Rs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Me};return a?(vo(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),dr>0&&!o&&Ke&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ke.push(c),c}const pe=Yh;function Yh(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===kh)&&(e=Qe),Ni(e)){const a=Gt(e,t,!0);return n&&vo(a,n),dr>0&&!i&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(e)]=a:Ke.push(a)),a.patchFlag|=-2,a}if(cp(e)&&(e=e.__vccOpts),t){t=Jh(t);let{class:a,style:c}=t;a&&!ve(a)&&(t.class=ys(a)),fe(c)&&(hl(c)&&!H(c)&&(c=Ce({},c)),t.style=no(c))}const o=ve(e)?1:hh(e)?128:Gh(e)?64:fe(e)?4:Y(e)?2:0;return y(e,t,n,r,s,o,i,!0)}function Jh(e){return e?hl(e)||Ds in e?Ce({},e):e:null}function Gt(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?Xh(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Wl(a),ref:t&&t.ref?n&&s?H(s)?s.concat(Kr(t)):[s,Kr(t)]:Kr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Kl(e=" ",t=0){return pe(Ps,null,e,t)}function $e(e="",t=!1){return t?(V(),yo(Qe,null,e)):pe(Qe,null,e)}function rt(e){return e==null||typeof e=="boolean"?pe(Qe):H(e)?pe(ge,null,e.slice()):typeof e=="object"?Lt(e):pe(Ps,null,String(e))}function Lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gt(e)}function vo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),vo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Ds in t)?t._ctx=Me:s===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[Kl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ys([t.class,r.class]));else if(s==="style")t.style=no([t.style,r.style]);else if(bs(s)){const i=t[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function nt(e,t,n,r=null){Fe(e,t,7,[n,r])}const Zh=jl();let ep=0;function tp(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Zh,i={uid:ep++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new bd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bl(r,s),emitsOptions:Tl(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ah.bind(null,i),e.ce&&e.ce(i),i}let me=null;const np=()=>me||Me,Ln=e=>{me=e,e.scope.on()},un=()=>{me&&me.scope.off(),me=null};function zl(e){return e.vnode.shapeFlag&4}let hr=!1;function rp(e,t=!1){hr=t;const{props:n,children:r}=e.vnode,s=zl(e);Uh(e,n,s,t),jh(e,r);const i=s?sp(e,t):void 0;return hr=!1,i}function sp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=pl(new Proxy(e.ctx,Dh));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?op(e):null;Ln(e),$n();const i=jt(r,e,0,[e.props,s]);if(jn(),un(),Zc(i)){if(i.then(un,un),t)return i.then(o=>{wa(e,o,t)}).catch(o=>{Cs(o,e,0)});e.asyncDep=i}else wa(e,i,t)}else ql(e,t)}function wa(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Al(t)),ql(e,n)}let Ea;function ql(e,t,n){const r=e.type;if(!e.render){if(!t&&Ea&&!r.render){const s=r.template||_o(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ce(Ce({isCustomElement:i,delimiters:a},o),c);r.render=Ea(s,l)}}e.render=r.render||qe}Ln(e),$n(),xh(e),jn(),un()}function ip(e){return new Proxy(e.attrs,{get(t,n){return xe(e,"get","$attrs"),t[n]}})}function op(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ip(e))},slots:e.slots,emit:e.emit,expose:t}}function xs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Al(pl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in tr)return tr[n](e)},has(t,n){return n in t||n in tr}}))}function ap(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function cp(e){return Y(e)&&"__vccOpts"in e}const Pe=(e,t)=>th(e,t,hr);function Gl(e,t,n){const r=arguments.length;return r===2?fe(t)&&!H(t)?Ni(t)?pe(e,null,[t]):pe(e,t):pe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ni(n)&&(n=[n]),pe(e,t,n))}const lp=Symbol(""),up=()=>Ge(lp),fp="3.2.47",dp="http://www.w3.org/2000/svg",rn=typeof document<"u"?document:null,Ia=rn&&rn.createElement("template"),hp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?rn.createElementNS(dp,e):rn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>rn.createTextNode(e),createComment:e=>rn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ia.innerHTML=r?`<svg>${e}</svg>`:e;const a=Ia.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function pp(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function gp(e,t,n){const r=e.style,s=ve(n);if(n&&!s){if(t&&!ve(t))for(const i in t)n[i]==null&&Li(r,i,"");for(const i in n)Li(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ta=/\s*!important$/;function Li(e,t,n){if(H(n))n.forEach(r=>Li(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=mp(e,t);Ta.test(n)?e.setProperty(Fn(r),n.replace(Ta,""),"important"):e[r]=n}}const Ca=["Webkit","Moz","ms"],Js={};function mp(e,t){const n=Js[t];if(n)return n;let r=ut(t);if(r!=="filter"&&r in e)return Js[t]=r;r=Is(r);for(let s=0;s<Ca.length;s++){const i=Ca[s]+r;if(i in e)return Js[t]=i}return t}const Sa="http://www.w3.org/1999/xlink";function _p(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Sa,t.slice(6,t.length)):e.setAttributeNS(Sa,t,n);else{const i=fd(t);n==null||i&&!Jc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ap(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Jc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function sn(e,t,n,r){e.addEventListener(t,n,r)}function yp(e,t,n,r){e.removeEventListener(t,n,r)}function vp(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=bp(t);if(r){const l=i[t]=Ip(r,s);sn(e,a,l,c)}else o&&(yp(e,a,o,c),i[t]=void 0)}}const Ra=/(?:Once|Passive|Capture)$/;function bp(e){let t;if(Ra.test(e)){t={};let r;for(;r=e.match(Ra);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Fn(e.slice(2)),t]}let Xs=0;const wp=Promise.resolve(),Ep=()=>Xs||(wp.then(()=>Xs=0),Xs=Date.now());function Ip(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Fe(Tp(r,n.value),t,5,[r])};return n.value=e,n.attached=Ep(),n}function Tp(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Oa=/^on[a-z]/,Cp=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?pp(e,r,s):t==="style"?gp(e,n,r):bs(t)?ro(t)||vp(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sp(e,t,r,s))?Ap(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),_p(e,t,r,s))};function Sp(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Oa.test(t)&&Y(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Oa.test(t)&&ve(n)?!1:t in e}const Rp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ah.props;const is=e=>{const t=e.props["onUpdate:modelValue"]||!1;return H(t)?n=>Hr(t,n):t};function Op(e){e.target.composing=!0}function ka(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const pr={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=is(s);const i=r||s.props&&s.props.type==="number";sn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=ts(a)),e._assign(a)}),n&&sn(e,"change",()=>{e.value=e.value.trim()}),t||(sn(e,"compositionstart",Op),sn(e,"compositionend",ka),sn(e,"change",ka))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=is(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&ts(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},kp={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=ws(t);sn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?ts(os(o)):os(o));e._assign(e.multiple?s?new Set(i):i:i[0])}),e._assign=is(r)},mounted(e,{value:t}){Pa(e,t)},beforeUpdate(e,t,n){e._assign=is(n)},updated(e,{value:t}){Pa(e,t)}};function Pa(e,t){const n=e.multiple;if(!(n&&!H(t)&&!ws(t))){for(let r=0,s=e.options.length;r<s;r++){const i=e.options[r],o=os(i);if(n)H(t)?i.selected=hd(t,o)>-1:i.selected=t.has(o);else if(vs(os(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function os(e){return"_value"in e?e._value:e.value}const Pp=Ce({patchProp:Cp},hp);let Da;function Dp(){return Da||(Da=Kh(Pp))}const xp=(...e)=>{const t=Dp().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Np(r);if(!s)return;const i=t._component;!Y(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Np(e){return ve(e)?document.querySelector(e):e}const dt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Lp={};function Mp(e,t){const n=Oh("router-view");return V(),yo(n)}const Bp=dt(Lp,[["render",Mp]]);function Up(){return Ql().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ql(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Fp=typeof Proxy=="function",$p="devtools-plugin:setup",jp="plugin:settings:set";let In,Mi;function Hp(){var e;return In!==void 0||(typeof window<"u"&&window.performance?(In=!0,Mi=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(In=!0,Mi=global.perf_hooks.performance):In=!1),In}function Vp(){return Hp()?Mi.now():Date.now()}class Wp{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const o in t.settings){const a=t.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Vp()}},n&&n.on(jp,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Kp(e,t){const n=e,r=Ql(),s=Up(),i=Fp&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit($p,e,t);else{const o=i?new Wp(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:o}),o&&t(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Yl="store";function Je(e){return e===void 0&&(e=null),Ge(e!==null?e:Yl)}function Vn(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function zp(e){return e!==null&&typeof e=="object"}function qp(e){return e&&typeof e.then=="function"}function Gp(e,t){return function(){return e(t)}}function Jl(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Xl(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;Ns(e,n,[],e._modules.root,!0),bo(e,n,t)}function bo(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,i={};Vn(s,function(o,a){i[a]=Gp(o,e),Object.defineProperty(e.getters,a,{get:function(){return i[a]()},enumerable:!0})}),e._state=Hn({data:t}),e.strict&&Zp(e),r&&n&&e._withCommit(function(){r.data=null})}function Ns(e,t,n,r,s){var i=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!i&&!s){var a=wo(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit(function(){a[c]=r.state})}var l=r.context=Qp(e,o,n);r.forEachMutation(function(u,f){var p=o+f;Yp(e,p,u,l)}),r.forEachAction(function(u,f){var p=u.root?f:o+f,g=u.handler||u;Jp(e,p,g,l)}),r.forEachGetter(function(u,f){var p=o+f;Xp(e,p,u,l)}),r.forEachChild(function(u,f){Ns(e,t,n.concat(f),u,s)})}function Qp(e,t,n){var r=t==="",s={dispatch:r?e.dispatch:function(i,o,a){var c=as(i,o,a),l=c.payload,u=c.options,f=c.type;return(!u||!u.root)&&(f=t+f),e.dispatch(f,l)},commit:r?e.commit:function(i,o,a){var c=as(i,o,a),l=c.payload,u=c.options,f=c.type;(!u||!u.root)&&(f=t+f),e.commit(f,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return e.getters}:function(){return Zl(e,t)}},state:{get:function(){return wo(e.state,n)}}}),s}function Zl(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(s){if(s.slice(0,r)===t){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[s]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function Yp(e,t,n,r){var s=e._mutations[t]||(e._mutations[t]=[]);s.push(function(o){n.call(e,r.state,o)})}function Jp(e,t,n,r){var s=e._actions[t]||(e._actions[t]=[]);s.push(function(o){var a=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},o);return qp(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(c){throw e._devtoolHook.emit("vuex:error",c),c}):a})}function Xp(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function Zp(e){Ht(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function wo(e,t){return t.reduce(function(n,r){return n[r]},e)}function as(e,t,n){return zp(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var eg="vuex bindings",xa="vuex:mutations",Zs="vuex:actions",Tn="vuex",tg=0;function ng(e,t){Kp({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[eg]},function(n){n.addTimelineLayer({id:xa,label:"Vuex Mutations",color:Na}),n.addTimelineLayer({id:Zs,label:"Vuex Actions",color:Na}),n.addInspector({id:Tn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===e&&r.inspectorId===Tn)if(r.filter){var s=[];ru(s,t._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[nu(t._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===e&&r.inspectorId===Tn){var s=r.nodeId;Zl(t,s),r.state=ig(ag(t._modules,s),s==="root"?t.getters:t._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===e&&r.inspectorId===Tn){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),t._withCommit(function(){r.set(t._state.data,i,r.state.value)})}}),t.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Tn),n.sendInspectorState(Tn),n.addTimelineEvent({layerId:xa,event:{time:Date.now(),title:r.type,data:i}})}),t.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=tg++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Zs,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Zs,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Na=8702998,rg=6710886,sg=16777215,eu={label:"namespaced",textColor:sg,backgroundColor:rg};function tu(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function nu(e,t){return{id:t||"root",label:tu(t),tags:e.namespaced?[eu]:[],children:Object.keys(e._children).map(function(n){return nu(e._children[n],t+n+"/")})}}function ru(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[eu]:[]}),Object.keys(t._children).forEach(function(s){ru(e,t._children[s],n,r+s+"/")})}function ig(e,t,n){t=n==="root"?t:t[n];var r=Object.keys(t),s={state:Object.keys(e.state).map(function(o){return{key:o,editable:!0,value:e.state[o]}})};if(r.length){var i=og(t);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?tu(o):o,editable:!1,value:Bi(function(){return i[o]})}})}return s}function og(e){var t={};return Object.keys(e).forEach(function(n){var r=n.split("/");if(r.length>1){var s=t,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Bi(function(){return e[n]})}else t[n]=Bi(function(){return e[n]})}),t}function ag(e,t){var n=t.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+t+'".');return i===n.length-1?o:o._children},t==="root"?e:e.root._children)}function Bi(e){try{return e()}catch(t){return t}}var Xe=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},su={namespaced:{configurable:!0}};su.namespaced.get=function(){return!!this._rawModule.namespaced};Xe.prototype.addChild=function(t,n){this._children[t]=n};Xe.prototype.removeChild=function(t){delete this._children[t]};Xe.prototype.getChild=function(t){return this._children[t]};Xe.prototype.hasChild=function(t){return t in this._children};Xe.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};Xe.prototype.forEachChild=function(t){Vn(this._children,t)};Xe.prototype.forEachGetter=function(t){this._rawModule.getters&&Vn(this._rawModule.getters,t)};Xe.prototype.forEachAction=function(t){this._rawModule.actions&&Vn(this._rawModule.actions,t)};Xe.prototype.forEachMutation=function(t){this._rawModule.mutations&&Vn(this._rawModule.mutations,t)};Object.defineProperties(Xe.prototype,su);var _n=function(t){this.register([],t,!1)};_n.prototype.get=function(t){return t.reduce(function(n,r){return n.getChild(r)},this.root)};_n.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};_n.prototype.update=function(t){iu([],this.root,t)};_n.prototype.register=function(t,n,r){var s=this;r===void 0&&(r=!0);var i=new Xe(n,r);if(t.length===0)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}n.modules&&Vn(n.modules,function(a,c){s.register(t.concat(c),a,r)})};_n.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};_n.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1];return n?n.hasChild(r):!1};function iu(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;iu(e.concat(r),t.getChild(r),n.modules[r])}}function cg(e){return new Ne(e)}var Ne=function(t){var n=this;t===void 0&&(t={});var r=t.plugins;r===void 0&&(r=[]);var s=t.strict;s===void 0&&(s=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new _n(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(p,g){return c.call(o,p,g)},this.commit=function(p,g,_){return l.call(o,p,g,_)},this.strict=s;var u=this._modules.root.state;Ns(this,u,[],this._modules.root),bo(this,u),r.forEach(function(f){return f(n)})},Eo={state:{configurable:!0}};Ne.prototype.install=function(t,n){t.provide(n||Yl,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&ng(t,this)};Eo.state.get=function(){return this._state.data};Eo.state.set=function(e){};Ne.prototype.commit=function(t,n,r){var s=this,i=as(t,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};Ne.prototype.dispatch=function(t,n){var r=this,s=as(t,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,f){l.then(function(p){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}u(p)},function(p){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,p)})}catch{}f(p)})})}};Ne.prototype.subscribe=function(t,n){return Jl(t,this._subscribers,n)};Ne.prototype.subscribeAction=function(t,n){var r=typeof t=="function"?{before:t}:t;return Jl(r,this._actionSubscribers,n)};Ne.prototype.watch=function(t,n,r){var s=this;return Ht(function(){return t(s.state,s.getters)},n,Object.assign({},r))};Ne.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};Ne.prototype.registerModule=function(t,n,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),Ns(this,this.state,t,this._modules.get(t),r.preserveState),bo(this,this.state)};Ne.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=wo(n.state,t.slice(0,-1));delete r[t[t.length-1]]}),Xl(this)};Ne.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};Ne.prototype.hotUpdate=function(t){this._modules.update(t),Xl(this,!0)};Ne.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(Ne.prototype,Eo);const lg=cg({state(){return{mainCardTypes:["All Cards","Monster","Spell Card","Trap Card"],selectedMainCardTypes:[],resetAtribute:!1,atributes:["DARK","LIGHT","EARTH","WATER","FIRE","WIND","DIVINE"],selectedAtributes:[],resetRace:!1,races:["Equip","Field","Quick-Play","Ritual","Continuous","Counter","Normal"],selectedRaces:[],spellType:!1,spellTypes:["Equip","Field","Quick-Play","Ritual","Continuous","Normal"],selectedSpellTypes:[],trapType:!1,trapTypes:["Normal","Counter","Continuous"],selectedTrapTypes:[],resetMonster:!1,monsters:["Spellcaster","Dragon","Zombie","Warrior","Beast-Warrior","Beast","Winged Beast","Fiend","Fairy","Insect","Dinosaur","Reptile","Fish","Sea Serpent","Aqua","Pyro","Thunder","Rock","Plant","Machine","Psychic","Divine-Beast","Wyrm","Cyberse","Creator-God"],selectedMonsters:[],resetType:!1,types:["Normal","Effect","Ritual","Fusion","Synchro","XYZ","Pendulum","Link","Toon","Spirit","Union","Gemini","Tuner","Flip"],selectedCardTypes:[],resetLevel:!1,levels:["0","1","2","3","4","5","6","7","8","9","10","11","12","13"],selectedLevels:[],isCleared:!1,allBox:!0,monstersBox:!1,spellsBox:!1,trapsBox:!1,allfiltersArray:[],ByAttackAscending:!1,ByAttackDescending:!1,ByDefenceAscending:!1,ByDefenceDescending:!1,gotoPage:1,galleryActive:!0,listActive:!1,filtersActive:!1,favList:["Dark Magician",'"A" Cell Breeding Device']}},mutations:{showAllFilters(e){e.allBox=!0,e.monstersBox=!1,e.spellsBox=!1,e.trapsBox=!1},showMonsterFilters(e){e.allBox=!1,e.monstersBox=!0,e.spellsBox=!1,e.trapsBox=!1},showSpellFilters(e){e.allBox=!1,e.monstersBox=!1,e.spellsBox=!0,e.trapsBox=!1},showTrapsFilters(e){e.allBox=!1,e.monstersBox=!1,e.spellsBox=!1,e.trapsBox=!0},resetAllFilters(e){e.selectedAtributes=[],e.selectedCardTypes=[],e.selectedLevels=[],e.selectedMonsters=[],e.selectedRaces=[],e.allfiltersArray=[],e.ByAttackAscending=!1,e.ByAttackDescending=!1,e.ByDefenceAscending=!1,e.ByDefenceDescending=!1,console.log("Filtry zostały zresetowane")},setDefaultForAtributes(e){e.resetAtribute=!1},setDefaultForRaces(e){e.resetRace=!1},setDefaultForMonsters(e){e.resetMonster=!1},setDefaultForTypes(e){e.resetType=!1},setDefaultForLevels(e){e.resetLevel=!1},addLevel(e,t){if(!e.selectedLevels.includes(t))e.selectedLevels.push(t);else{const n=e.selectedLevels.indexOf(t);n!==-1&&e.selectedLevels.splice(n,1)}},addCardType(e,t){if(!e.selectedCardTypes.includes(t))e.selectedCardTypes.push(t);else{const n=e.selectedCardTypes.indexOf(t);n!==-1&&e.selectedCardTypes.splice(n,1)}},addMonsterType(e,t){if(!e.selectedMonsters.includes(t))e.selectedMonsters.push(t);else{const n=e.selectedMonsters.indexOf(t);n!==-1&&e.selectedMonsters.splice(n,1)}},addRace(e,t){if(!e.selectedRaces.includes(t))e.selectedRaces.push(t);else{const n=e.selectedRaces.indexOf(t);n!==-1&&e.selectedRaces.splice(n,1)}},addAtribute(e,t){if(!e.selectedAtributes.includes(t))e.selectedAtributes.push(t);else{const n=e.selectedAtributes.indexOf(t);n!==-1&&e.selectedAtributes.splice(n,1)}},setDefaultForSelectedAtributes(e){e.selectedAtributes.length==0&&(e.selectedAtributes=e.atributes)},setDefaultForSelectedMonsterTypes(e){e.selectedMonsters.length==0&&(e.selectedMonsters=e.monsters)},setDefaultForSelectedCardTypes(e){e.selectedCardTypes.length==0&&(e.selectedCardTypes=e.types)},setDefaultForSelectedLevels(e){e.selectedLevels.length==0&&(e.selectedLevels=e.levels)},setDefaultForSelectedRaces(e){e.selectedRaces.leght==0&&(e.selectedLevels=e.levels)},populateAllFiltersArray(e){e.allfiltersArray.push(e.selectedAtributes),e.allfiltersArray.push(e.selectedMonsters),e.allfiltersArray.push(e.selectedCardTypes),e.allfiltersArray.push(e.selectedLevels),e.allfiltersArray.push(e.selectedRaces),e.allfiltersArray=Array.from(new Set(e.allfiltersArray.flat())),console.log(e.allfiltersArray)},sortByAttackAscending(e){e.ByAttackAscending=!0,e.ByAttackDescending=!1,e.ByDefenceAscending=!1,e.ByDefenceDescending=!1},sortByAttackDescending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!0,e.ByDefenceAscending=!1,e.ByDefenceDescending=!1},sortByDefenceAscending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!1,e.ByDefenceAscending=!0,e.ByDefenceDescending=!1},sortByDefenceDescending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!1,e.ByDefenceAscending=!1,e.ByDefenceDescending=!0},showGallery(e){e.galleryActive=!0,e.listActive=!1},showList(e){e.galleryActive=!1,e.listActive=!0},toggleFilters(e){e.filtersActive=!e.filtersActive}},actions:{},modules:{}});/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Cn=typeof window<"u";function ug(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ie=Object.assign;function ei(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ye(s)?s.map(e):e(s)}return n}const rr=()=>{},Ye=Array.isArray,fg=/\/$/,dg=e=>e.replace(fg,"");function ti(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=mg(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function hg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function La(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function pg(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Mn(t.matched[r],n.matched[s])&&ou(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ou(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!gg(e[n],t[n]))return!1;return!0}function gg(e,t){return Ye(e)?Ma(e,t):Ye(t)?Ma(t,e):e===t}function Ma(e,t){return Ye(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function mg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var gr;(function(e){e.pop="pop",e.push="push"})(gr||(gr={}));var sr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(sr||(sr={}));function _g(e){if(!e)if(Cn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),dg(e)}const Ag=/^[^#]+#/;function yg(e,t){return e.replace(Ag,"#")+t}function vg(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ls=()=>({left:window.pageXOffset,top:window.pageYOffset});function bg(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=vg(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ba(e,t){return(history.state?history.state.position-t:-1)+e}const Ui=new Map;function wg(e,t){Ui.set(e,t)}function Eg(e){const t=Ui.get(e);return Ui.delete(e),t}let Ig=()=>location.protocol+"//"+location.host;function au(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),La(c,"")}return La(n,e)+r+s}function Tg(e,t,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=au(e,location),_=n.value,w=t.value;let L=0;if(p){if(n.value=g,t.value=p,o&&o===_){o=null;return}L=w?p.position-w.position:0}else r(g);s.forEach(O=>{O(n.value,_,{delta:L,type:gr.pop,direction:L?L>0?sr.forward:sr.back:sr.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ie({},p.state,{scroll:Ls()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Ua(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Ls():null}}function Cg(e){const{history:t,location:n}=window,r={value:au(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Ig()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=ie({},t.state,Ua(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ie({},s.value,t.state,{forward:c,scroll:Ls()});i(u.current,u,!0);const f=ie({},Ua(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Sg(e){e=_g(e);const t=Cg(e),n=Tg(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ie({location:"",base:e,go:r,createHref:yg.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Rg(e){return typeof e=="string"||e&&typeof e=="object"}function cu(e){return typeof e=="string"||typeof e=="symbol"}const Dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lu=Symbol("");var Fa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Fa||(Fa={}));function Bn(e,t){return ie(new Error,{type:e,[lu]:!0},t)}function gt(e,t){return e instanceof Error&&lu in e&&(t==null||!!(e.type&t))}const $a="[^/]+?",Og={sensitive:!1,strict:!1,start:!0,end:!0},kg=/[.+*?^${}()[\]/\\]/g;function Pg(e,t){const n=ie({},Og,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(kg,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:w,optional:L,regexp:O}=p;i.push({name:_,repeatable:w,optional:L});const M=O||$a;if(M!==$a){g+=10;try{new RegExp(`(${M})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+C.message)}}let I=w?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(I=L&&l.length<2?`(?:/${I})`:"/"+I),L&&(I+="?"),s+=I,g+=20,L&&(g+=-8),w&&(g+=-20),M===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",_=i[p-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:w,optional:L}=g,O=_ in l?l[_]:"";if(Ye(O)&&!w)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Ye(O)?O.join("/"):O;if(!M)if(L)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Dg(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function xg(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Dg(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ja(r))return 1;if(ja(s))return-1}return s.length-r.length}function ja(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ng={type:0,value:""},Lg=/[a-zA-Z0-9_]/;function Mg(e){if(!e)return[[]];if(e==="/")return[[Ng]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Lg.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Bg(e,t,n){const r=Pg(Mg(e.path),n),s=ie(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Ug(e,t){const n=[],r=new Map;t=Wa({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,f,p){const g=!p,_=Fg(u);_.aliasOf=p&&p.record;const w=Wa(t,u),L=[_];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of I)L.push(ie({},_,{components:p?p.record.components:_.components,path:C,aliasOf:p?p.record:_}))}let O,M;for(const I of L){const{path:C}=I;if(f&&C[0]!=="/"){const j=f.record.path,G=j[j.length-1]==="/"?"":"/";I.path=f.record.path+(C&&G+C)}if(O=Bg(I,f,w),p?p.alias.push(O):(M=M||O,M!==O&&M.alias.push(O),g&&u.name&&!Va(O)&&o(u.name)),_.children){const j=_.children;for(let G=0;G<j.length;G++)i(j[G],O,p&&p.children[G])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return M?()=>{o(M)}:rr}function o(u){if(cu(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&xg(u,n[f])>=0&&(u.record.path!==n[f].record.path||!uu(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Va(u)&&r.set(u.record.name,u)}function l(u,f){let p,g={},_,w;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Bn(1,{location:u});w=p.record.name,g=ie(Ha(f.params,p.keys.filter(M=>!M.optional).map(M=>M.name)),u.params&&Ha(u.params,p.keys.map(M=>M.name))),_=p.stringify(g)}else if("path"in u)_=u.path,p=n.find(M=>M.re.test(_)),p&&(g=p.parse(_),w=p.record.name);else{if(p=f.name?r.get(f.name):n.find(M=>M.re.test(f.path)),!p)throw Bn(1,{location:u,currentLocation:f});w=p.record.name,g=ie({},f.params,u.params),_=p.stringify(g)}const L=[];let O=p;for(;O;)L.unshift(O.record),O=O.parent;return{name:w,path:_,params:g,matched:L,meta:jg(L)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ha(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Fg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$g(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function $g(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Va(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function jg(e){return e.reduce((t,n)=>ie(t,n.meta),{})}function Wa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function uu(e,t){return t.children.some(n=>n===e||uu(e,n))}const fu=/#/g,Hg=/&/g,Vg=/\//g,Wg=/=/g,Kg=/\?/g,du=/\+/g,zg=/%5B/g,qg=/%5D/g,hu=/%5E/g,Gg=/%60/g,pu=/%7B/g,Qg=/%7C/g,gu=/%7D/g,Yg=/%20/g;function Io(e){return encodeURI(""+e).replace(Qg,"|").replace(zg,"[").replace(qg,"]")}function Jg(e){return Io(e).replace(pu,"{").replace(gu,"}").replace(hu,"^")}function Fi(e){return Io(e).replace(du,"%2B").replace(Yg,"+").replace(fu,"%23").replace(Hg,"%26").replace(Gg,"`").replace(pu,"{").replace(gu,"}").replace(hu,"^")}function Xg(e){return Fi(e).replace(Wg,"%3D")}function Zg(e){return Io(e).replace(fu,"%23").replace(Kg,"%3F")}function em(e){return e==null?"":Zg(e).replace(Vg,"%2F")}function cs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function tm(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(du," "),o=i.indexOf("="),a=cs(o<0?i:i.slice(0,o)),c=o<0?null:cs(i.slice(o+1));if(a in t){let l=t[a];Ye(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Ka(e){let t="";for(let n in e){const r=e[n];if(n=Xg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ye(r)?r.map(i=>i&&Fi(i)):[r&&Fi(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function nm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ye(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const rm=Symbol(""),za=Symbol(""),Ms=Symbol(""),mu=Symbol(""),$i=Symbol("");function Yn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Mt(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Bn(4,{from:n,to:t})):f instanceof Error?a(f):Rg(f)?a(Bn(2,{from:t,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function ni(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(sm(a)){const l=(a.__vccOpts||a)[t];l&&s.push(Mt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ug(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Mt(p,n,r,i,o)()}))}}return s}function sm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qa(e){const t=Ge(Ms),n=Ge(mu),r=Pe(()=>t.resolve(N(e.to))),s=Pe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Mn.bind(null,u));if(p>-1)return p;const g=Ga(c[l-2]);return l>1&&Ga(u)===g&&f[f.length-1].path!==g?f.findIndex(Mn.bind(null,c[l-2])):p}),i=Pe(()=>s.value>-1&&cm(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&ou(n.params,r.value.params));function a(c={}){return am(c)?t[N(e.replace)?"replace":"push"](N(e.to)).catch(rr):Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const im=kl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qa,setup(e,{slots:t}){const n=Hn(qa(e)),{options:r}=Ge(Ms),s=Pe(()=>({[Qa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Gl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),om=im;function am(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function cm(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ye(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ga(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qa=(e,t,n)=>e??t??n,lm=kl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ge($i),s=Pe(()=>e.route||r.value),i=Ge(za,0),o=Pe(()=>{let l=N(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Pe(()=>s.value.matched[o.value]);Vr(za,Pe(()=>o.value+1)),Vr(rm,a),Vr($i,s);const c=K();return Ht(()=>[c.value,a.value,e.name],([l,u,f],[p,g,_])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Mn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return Ya(n.default,{Component:p,route:l});const g=f.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,L=Gl(p,ie({},_,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Ya(n.default,{Component:L,route:l})||L}}});function Ya(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const um=lm;function fm(e){const t=Ug(e.routes,e),n=e.parseQuery||tm,r=e.stringifyQuery||Ka,s=e.history,i=Yn(),o=Yn(),a=Yn(),c=Jd(Dt);let l=Dt;Cn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ei.bind(null,b=>""+b),f=ei.bind(null,em),p=ei.bind(null,cs);function g(b,x){let P,U;return cu(b)?(P=t.getRecordMatcher(b),U=x):U=b,t.addRoute(U,P)}function _(b){const x=t.getRecordMatcher(b);x&&t.removeRoute(x)}function w(){return t.getRoutes().map(b=>b.record)}function L(b){return!!t.getRecordMatcher(b)}function O(b,x){if(x=ie({},x||c.value),typeof b=="string"){const m=ti(n,b,x.path),A=t.resolve({path:m.path},x),E=s.createHref(m.fullPath);return ie(m,A,{params:p(A.params),hash:cs(m.hash),redirectedFrom:void 0,href:E})}let P;if("path"in b)P=ie({},b,{path:ti(n,b.path,x.path).path});else{const m=ie({},b.params);for(const A in m)m[A]==null&&delete m[A];P=ie({},b,{params:f(m)}),x.params=f(x.params)}const U=t.resolve(P,x),re=b.hash||"";U.params=u(p(U.params));const d=hg(r,ie({},b,{hash:Jg(re),path:U.path})),h=s.createHref(d);return ie({fullPath:d,hash:re,query:r===Ka?nm(b.query):b.query||{}},U,{redirectedFrom:void 0,href:h})}function M(b){return typeof b=="string"?ti(n,b,c.value.path):ie({},b)}function I(b,x){if(l!==b)return Bn(8,{from:x,to:b})}function C(b){return ye(b)}function j(b){return C(ie(M(b),{replace:!0}))}function G(b){const x=b.matched[b.matched.length-1];if(x&&x.redirect){const{redirect:P}=x;let U=typeof P=="function"?P(b):P;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),ie({query:b.query,hash:b.hash,params:"path"in U?{}:b.params},U)}}function ye(b,x){const P=l=O(b),U=c.value,re=b.state,d=b.force,h=b.replace===!0,m=G(P);if(m)return ye(ie(M(m),{state:typeof m=="object"?ie({},re,m.state):re,force:d,replace:h}),x||P);const A=P;A.redirectedFrom=x;let E;return!d&&pg(r,U,P)&&(E=Bn(16,{to:A,from:U}),et(U,U,!0,!1)),(E?Promise.resolve(E):se(A,U)).catch(T=>gt(T)?gt(T,2)?T:kt(T):ne(T,A,U)).then(T=>{if(T){if(gt(T,2))return ye(ie({replace:h},M(T.to),{state:typeof T.to=="object"?ie({},re,T.to.state):re,force:d}),x||A)}else T=he(A,U,!0,h,re);return _e(A,U,T),T})}function Q(b,x){const P=I(b,x);return P?Promise.reject(P):Promise.resolve()}function ae(b){const x=wn.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(b):b()}function se(b,x){let P;const[U,re,d]=dm(b,x);P=ni(U.reverse(),"beforeRouteLeave",b,x);for(const m of U)m.leaveGuards.forEach(A=>{P.push(Mt(A,b,x))});const h=Q.bind(null,b,x);return P.push(h),Ie(P).then(()=>{P=[];for(const m of i.list())P.push(Mt(m,b,x));return P.push(h),Ie(P)}).then(()=>{P=ni(re,"beforeRouteUpdate",b,x);for(const m of re)m.updateGuards.forEach(A=>{P.push(Mt(A,b,x))});return P.push(h),Ie(P)}).then(()=>{P=[];for(const m of b.matched)if(m.beforeEnter&&!x.matched.includes(m))if(Ye(m.beforeEnter))for(const A of m.beforeEnter)P.push(Mt(A,b,x));else P.push(Mt(m.beforeEnter,b,x));return P.push(h),Ie(P)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),P=ni(d,"beforeRouteEnter",b,x),P.push(h),Ie(P))).then(()=>{P=[];for(const m of o.list())P.push(Mt(m,b,x));return P.push(h),Ie(P)}).catch(m=>gt(m,8)?m:Promise.reject(m))}function _e(b,x,P){for(const U of a.list())ae(()=>U(b,x,P))}function he(b,x,P,U,re){const d=I(b,x);if(d)return d;const h=x===Dt,m=Cn?history.state:{};P&&(U||h?s.replace(b.fullPath,ie({scroll:h&&m&&m.scroll},re)):s.push(b.fullPath,re)),c.value=b,et(b,x,P,h),kt()}let J;function Yt(){J||(J=s.listen((b,x,P)=>{if(!xr.listening)return;const U=O(b),re=G(U);if(re){ye(ie(re,{replace:!0}),U).catch(rr);return}l=U;const d=c.value;Cn&&wg(Ba(d.fullPath,P.delta),Ls()),se(U,d).catch(h=>gt(h,12)?h:gt(h,2)?(ye(h.to,U).then(m=>{gt(m,20)&&!P.delta&&P.type===gr.pop&&s.go(-1,!1)}).catch(rr),Promise.reject()):(P.delta&&s.go(-P.delta,!1),ne(h,U,d))).then(h=>{h=h||he(U,d,!1),h&&(P.delta&&!gt(h,8)?s.go(-P.delta,!1):P.type===gr.pop&&gt(h,20)&&s.go(-1,!1)),_e(U,d,h)}).catch(rr)}))}let vn=Yn(),we=Yn(),ce;function ne(b,x,P){kt(b);const U=we.list();return U.length?U.forEach(re=>re(b,x,P)):console.error(b),Promise.reject(b)}function pt(){return ce&&c.value!==Dt?Promise.resolve():new Promise((b,x)=>{vn.add([b,x])})}function kt(b){return ce||(ce=!b,Yt(),vn.list().forEach(([x,P])=>b?P(b):x()),vn.reset()),b}function et(b,x,P,U){const{scrollBehavior:re}=e;if(!Cn||!re)return Promise.resolve();const d=!P&&Eg(Ba(b.fullPath,0))||(U||!P)&&history.state&&history.state.scroll||null;return bl().then(()=>re(b,x,d)).then(h=>h&&bg(h)).catch(h=>ne(h,b,x))}const Oe=b=>s.go(b);let bn;const wn=new Set,xr={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:L,getRoutes:w,resolve:O,options:e,push:C,replace:j,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:pt,install(b){const x=this;b.component("RouterLink",om),b.component("RouterView",um),b.config.globalProperties.$router=x,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>N(c)}),Cn&&!bn&&c.value===Dt&&(bn=!0,C(s.location).catch(re=>{}));const P={};for(const re in Dt)P[re]=Pe(()=>c.value[re]);b.provide(Ms,x),b.provide(mu,Hn(P)),b.provide($i,c);const U=b.unmount;wn.add(b),b.unmount=function(){wn.delete(b),wn.size<1&&(l=Dt,J&&J(),J=null,c.value=Dt,bn=!1,ce=!1),U()}}};function Ie(b){return b.reduce((x,P)=>x.then(()=>ae(P)),Promise.resolve())}return xr}function dm(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Mn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Mn(l,c))||s.push(c))}return[n,r,s]}function To(){return Ge(Ms)}const hm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nO3BQREAMBADofVvOpXQ/w1QAEDtiHZEAADwtSPaEQEAwNeOaEcEANQDM6arjUtOdLsAAAAASUVORK5CYII=",pm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2Yy2oUYRCFOwEjMkYFQVcGBTG6UMwLRImXRbxlkSwUX8DLMrvoNqIvELNVgzjiEwgaQV9BM4lGvCxMQCReSbx8UlIdys5Mz6SnZqY79IFhGrr7nFP9V/1V3UGQI0cOVwCHgbvALPAN+ApMARPAELAuSCuATcB34jEDDARpBLABmKc2XAPag7QB2AWcB/ZrQAXgIDACfIgGEWQJQCdwLxLEmSBLANqAoglgOtWFHbMScyaIwSBrAK6YAO60wsBuYFj+E94vhR1iyt9hdQOSu4JSHWkU4rO/w+oGvizLw8aETS/EQmNcxhsoLcvDgSym0IQxMJLg/qvm/tuNcRlvQAazENJhO1eZPnbkaP42Ks1HB7MQ0mHbamxk91PRyIAB/kcxbiX0yVvzf4DTzXW90pRMlRZz2qR6ZHfSX4/mfHRSHW2peQ2gvUwQ1SBPfjRV47RMlaa5xWG65WlTpbAHZbYBXmizk99z2Sr1XLYmzxw51gqAncA48A74tcpt8xNwLsIn/eGJbqkop3DfFC1v88dlZqc+TEY4j8RcK1rHPJ98veYrrcCkWYEoFoAujwAkbULI58I+oKNu4pU6Hboqr43emAex5GWIPhe38XpHjd4bD8IlQ1hwcRmvVzB6PzwI7QS5x8VlvF630St5ED40hBddXMbrXTZ6RQ/CC4bwLbDZxWl5rS3Ae6N31isnLenTJJ9RavxO9MzozLhNrkA/8NuQvwR6XciDf/y9wCvDvwgc8uK3uRltOlIfJ5I8KX13OBmpsXCkGHI1H3nrmq/QNR/ot9J+3Um2anNar8fdem5Yr5V7KPM+faoh5k0Q2/Xt6id+WAJuAdsaaj4SSBdwQ8eLpJgFrgM7mma8QjD7tEbGgMdakB+1GBf1WAr/kV5zCdjbUtM5cqwR/AXOZpAIjqFdJAAAAABJRU5ErkJggg==",gm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgB7ZXtjcIwDIad0w1wG1xHuA2uGwATABPABrBBYYMyAWICYALKBGUD2MC8FpYIoW0+BP94pFdVXcUfceISfYjAdH1k5h88JlAG7Y0xJb0SBMigmh85aOAoTINzybxPt+xFO2gJFfpeQZcOnytvxQiydbKfqn3NYRxCKpHt+INyaKbmSm3CwFNJhUq6vj8FnFsZnqERvQs5BO67bl+t29unV9Jy6oQ8xknBgQ2W/kELx164Pr8a4hgKQ5orh4QT17ej2dcNlaX3RZ1mjk36UlqNzykVLJ7o0WV1mJRt12X8h+Zqti/jGDpRO/7LqKfGJnasbF2f3w1xZBgO6T4ge1h4sirxDcgNhcIto54S8P20MjxG0C90hMqo4fchhSsQmqLT+mqr+wAAAABJRU5ErkJggg==",mm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVR4Ae2UiwmAMAxEDye5UbuB3dBRNEIQkaqJNSC2D0KhveRKPwE6zUKJUUeLNhm1G0lilphuEqmaVZvhgLvEMxOL5rHJ1Vq1SWmuCh4Kvlq8ZOIqPuADEIFHRAReMhH4TIngj5bhbxUJDgh7A6NuyKLt/JEF1OxAhvByOXwAAAAASUVORK5CYII=";function _u(e,t){return function(){return e.apply(t,arguments)}}const{toString:Au}=Object.prototype,{getPrototypeOf:Co}=Object,So=(e=>t=>{const n=Au.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),St=e=>(e=e.toLowerCase(),t=>So(t)===e),Bs=e=>t=>typeof t===e,{isArray:Wn}=Array,mr=Bs("undefined");function _m(e){return e!==null&&!mr(e)&&e.constructor!==null&&!mr(e.constructor)&&Qt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const yu=St("ArrayBuffer");function Am(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&yu(e.buffer),t}const ym=Bs("string"),Qt=Bs("function"),vu=Bs("number"),Ro=e=>e!==null&&typeof e=="object",vm=e=>e===!0||e===!1,zr=e=>{if(So(e)!=="object")return!1;const t=Co(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},bm=St("Date"),wm=St("File"),Em=St("Blob"),Im=St("FileList"),Tm=e=>Ro(e)&&Qt(e.pipe),Cm=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Au.call(e)===t||Qt(e.toString)&&e.toString()===t)},Sm=St("URLSearchParams"),Rm=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Er(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),Wn(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function bu(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const wu=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Eu=e=>!mr(e)&&e!==wu;function ji(){const{caseless:e}=Eu(this)&&this||{},t={},n=(r,s)=>{const i=e&&bu(t,s)||s;zr(t[i])&&zr(r)?t[i]=ji(t[i],r):zr(r)?t[i]=ji({},r):Wn(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Er(arguments[r],n);return t}const Om=(e,t,n,{allOwnKeys:r}={})=>(Er(t,(s,i)=>{n&&Qt(s)?e[i]=_u(s,n):e[i]=s},{allOwnKeys:r}),e),km=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Pm=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Dm=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&Co(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xm=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Nm=e=>{if(!e)return null;if(Wn(e))return e;let t=e.length;if(!vu(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Lm=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Co(Uint8Array)),Mm=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Bm=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Um=St("HTMLFormElement"),Fm=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ja=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),$m=St("RegExp"),Iu=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Er(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},jm=e=>{Iu(e,(t,n)=>{if(Qt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Qt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Hm=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Wn(e)?r(e):r(String(e).split(t)),n},Vm=()=>{},Wm=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ri="abcdefghijklmnopqrstuvwxyz",Xa="0123456789",Tu={DIGIT:Xa,ALPHA:ri,ALPHA_DIGIT:ri+ri.toUpperCase()+Xa},Km=(e=16,t=Tu.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function zm(e){return!!(e&&Qt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const qm=e=>{const t=new Array(10),n=(r,s)=>{if(Ro(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=Wn(r)?[]:{};return Er(r,(o,a)=>{const c=n(o,s+1);!mr(c)&&(i[a]=c)}),t[s]=void 0,i}}return r};return n(e,0)},v={isArray:Wn,isArrayBuffer:yu,isBuffer:_m,isFormData:Cm,isArrayBufferView:Am,isString:ym,isNumber:vu,isBoolean:vm,isObject:Ro,isPlainObject:zr,isUndefined:mr,isDate:bm,isFile:wm,isBlob:Em,isRegExp:$m,isFunction:Qt,isStream:Tm,isURLSearchParams:Sm,isTypedArray:Lm,isFileList:Im,forEach:Er,merge:ji,extend:Om,trim:Rm,stripBOM:km,inherits:Pm,toFlatObject:Dm,kindOf:So,kindOfTest:St,endsWith:xm,toArray:Nm,forEachEntry:Mm,matchAll:Bm,isHTMLForm:Um,hasOwnProperty:Ja,hasOwnProp:Ja,reduceDescriptors:Iu,freezeMethods:jm,toObjectSet:Hm,toCamelCase:Fm,noop:Vm,toFiniteNumber:Wm,findKey:bu,global:wu,isContextDefined:Eu,ALPHABET:Tu,generateString:Km,isSpecCompliantForm:zm,toJSONObject:qm};function ee(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}v.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Cu=ee.prototype,Su={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Su[e]={value:e}});Object.defineProperties(ee,Su);Object.defineProperty(Cu,"isAxiosError",{value:!0});ee.from=(e,t,n,r,s,i)=>{const o=Object.create(Cu);return v.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),ee.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Gm=null;function Hi(e){return v.isPlainObject(e)||v.isArray(e)}function Ru(e){return v.endsWith(e,"[]")?e.slice(0,-2):e}function Za(e,t,n){return e?e.concat(t).map(function(s,i){return s=Ru(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Qm(e){return v.isArray(e)&&!e.some(Hi)}const Ym=v.toFlatObject(v,{},null,function(t){return/^is[A-Z]/.test(t)});function Us(e,t,n){if(!v.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,L){return!v.isUndefined(L[w])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(t);if(!v.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(v.isDate(_))return _.toISOString();if(!c&&v.isBlob(_))throw new ee("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(_)||v.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,w,L){let O=_;if(_&&!L&&typeof _=="object"){if(v.endsWith(w,"{}"))w=r?w:w.slice(0,-2),_=JSON.stringify(_);else if(v.isArray(_)&&Qm(_)||(v.isFileList(_)||v.endsWith(w,"[]"))&&(O=v.toArray(_)))return w=Ru(w),O.forEach(function(I,C){!(v.isUndefined(I)||I===null)&&t.append(o===!0?Za([w],C,i):o===null?w:w+"[]",l(I))}),!1}return Hi(_)?!0:(t.append(Za(L,w,i),l(_)),!1)}const f=[],p=Object.assign(Ym,{defaultVisitor:u,convertValue:l,isVisitable:Hi});function g(_,w){if(!v.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(_),v.forEach(_,function(O,M){(!(v.isUndefined(O)||O===null)&&s.call(t,O,v.isString(M)?M.trim():M,w,p))===!0&&g(O,w?w.concat(M):[M])}),f.pop()}}if(!v.isObject(e))throw new TypeError("data must be an object");return g(e),t}function ec(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Oo(e,t){this._pairs=[],e&&Us(e,this,t)}const Ou=Oo.prototype;Ou.append=function(t,n){this._pairs.push([t,n])};Ou.toString=function(t){const n=t?function(r){return t.call(this,r,ec)}:ec;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Jm(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ku(e,t,n){if(!t)return e;const r=n&&n.encode||Jm,s=n&&n.serialize;let i;if(s?i=s(t,n):i=v.isURLSearchParams(t)?t.toString():new Oo(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Xm{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){v.forEach(this.handlers,function(r){r!==null&&t(r)})}}const tc=Xm,Pu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Zm=typeof URLSearchParams<"u"?URLSearchParams:Oo,e_=typeof FormData<"u"?FormData:null,t_=typeof Blob<"u"?Blob:null,n_=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),r_=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ot={isBrowser:!0,classes:{URLSearchParams:Zm,FormData:e_,Blob:t_},isStandardBrowserEnv:n_,isStandardBrowserWebWorkerEnv:r_,protocols:["http","https","file","blob","url","data"]};function s_(e,t){return Us(e,new ot.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return ot.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function i_(e){return v.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function o_(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Du(e){function t(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&v.isArray(s)?s.length:o,c?(v.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!v.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&v.isArray(s[o])&&(s[o]=o_(s[o])),!a)}if(v.isFormData(e)&&v.isFunction(e.entries)){const n={};return v.forEachEntry(e,(r,s)=>{t(i_(r),s,n,0)}),n}return null}const a_={"Content-Type":void 0};function c_(e,t,n){if(v.isString(e))try{return(t||JSON.parse)(e),v.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Fs={transitional:Pu,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=v.isObject(t);if(i&&v.isHTMLForm(t)&&(t=new FormData(t)),v.isFormData(t))return s&&s?JSON.stringify(Du(t)):t;if(v.isArrayBuffer(t)||v.isBuffer(t)||v.isStream(t)||v.isFile(t)||v.isBlob(t))return t;if(v.isArrayBufferView(t))return t.buffer;if(v.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return s_(t,this.formSerializer).toString();if((a=v.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Us(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),c_(t)):t}],transformResponse:[function(t){const n=this.transitional||Fs.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&v.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?ee.from(a,ee.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ot.classes.FormData,Blob:ot.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};v.forEach(["delete","get","head"],function(t){Fs.headers[t]={}});v.forEach(["post","put","patch"],function(t){Fs.headers[t]=v.merge(a_)});const ko=Fs,l_=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),u_=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&l_[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},nc=Symbol("internals");function Jn(e){return e&&String(e).trim().toLowerCase()}function qr(e){return e===!1||e==null?e:v.isArray(e)?e.map(qr):String(e)}function f_(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const d_=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function si(e,t,n,r,s){if(v.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!v.isString(t)){if(v.isString(r))return t.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(t)}}function h_(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function p_(e,t){const n=v.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class $s{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,c,l){const u=Jn(c);if(!u)throw new Error("header name must be a non-empty string");const f=v.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=qr(a))}const o=(a,c)=>v.forEach(a,(l,u)=>i(l,u,c));return v.isPlainObject(t)||t instanceof this.constructor?o(t,n):v.isString(t)&&(t=t.trim())&&!d_(t)?o(u_(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Jn(t),t){const r=v.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return f_(s);if(v.isFunction(n))return n.call(this,s,r);if(v.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Jn(t),t){const r=v.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||si(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=Jn(o),o){const a=v.findKey(r,o);a&&(!n||si(r,r[a],a,n))&&(delete r[a],s=!0)}}return v.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||si(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return v.forEach(this,(s,i)=>{const o=v.findKey(r,i);if(o){n[o]=qr(s),delete n[i];return}const a=t?h_(i):String(i).trim();a!==i&&delete n[i],n[a]=qr(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return v.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[nc]=this[nc]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Jn(o);r[a]||(p_(s,o),r[a]=!0)}return v.isArray(t)?t.forEach(i):i(t),this}}$s.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.freezeMethods($s.prototype);v.freezeMethods($s);const yt=$s;function ii(e,t){const n=this||ko,r=t||n,s=yt.from(r.headers);let i=r.data;return v.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function xu(e){return!!(e&&e.__CANCEL__)}function Ir(e,t,n){ee.call(this,e??"canceled",ee.ERR_CANCELED,t,n),this.name="CanceledError"}v.inherits(Ir,ee,{__CANCEL__:!0});function g_(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const m_=ot.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),v.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),v.isString(i)&&c.push("path="+i),v.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function __(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function A_(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Nu(e,t){return e&&!__(t)?A_(e,t):t}const y_=ot.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=v.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function v_(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function b_(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const g=u&&l-u;return g?Math.round(p*1e3/g):void 0}}function rc(e,t){let n=0;const r=b_(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const w_=typeof XMLHttpRequest<"u",E_=w_&&function(e){return new Promise(function(n,r){let s=e.data;const i=yt.from(e.headers).normalize(),o=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}v.isFormData(s)&&(ot.isStandardBrowserEnv||ot.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+_))}const u=Nu(e.baseURL,e.url);l.open(e.method.toUpperCase(),ku(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function f(){if(!l)return;const g=yt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),w={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:e,request:l};g_(function(O){n(O),c()},function(O){r(O),c()},w),l=null}if("onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(f)},l.onabort=function(){l&&(r(new ee("Request aborted",ee.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let _=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Pu;e.timeoutErrorMessage&&(_=e.timeoutErrorMessage),r(new ee(_,w.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,l)),l=null},ot.isStandardBrowserEnv){const g=(e.withCredentials||y_(u))&&e.xsrfCookieName&&m_.read(e.xsrfCookieName);g&&i.set(e.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&v.forEach(i.toJSON(),function(_,w){l.setRequestHeader(w,_)}),v.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",rc(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",rc(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=g=>{l&&(r(!g||g.type?new Ir(null,e,l):g),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const p=v_(u);if(p&&ot.protocols.indexOf(p)===-1){r(new ee("Unsupported protocol "+p+":",ee.ERR_BAD_REQUEST,e));return}l.send(s||null)})},Gr={http:Gm,xhr:E_};v.forEach(Gr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const I_={getAdapter:e=>{e=v.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=v.isString(n)?Gr[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new ee(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(v.hasOwnProp(Gr,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!v.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Gr};function oi(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ir(null,e)}function sc(e){return oi(e),e.headers=yt.from(e.headers),e.data=ii.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),I_.getAdapter(e.adapter||ko.adapter)(e).then(function(r){return oi(e),r.data=ii.call(e,e.transformResponse,r),r.headers=yt.from(r.headers),r},function(r){return xu(r)||(oi(e),r&&r.response&&(r.response.data=ii.call(e,e.transformResponse,r.response),r.response.headers=yt.from(r.response.headers))),Promise.reject(r)})}const ic=e=>e instanceof yt?e.toJSON():e;function Un(e,t){t=t||{};const n={};function r(l,u,f){return v.isPlainObject(l)&&v.isPlainObject(u)?v.merge.call({caseless:f},l,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function s(l,u,f){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!v.isUndefined(u))return r(void 0,u)}function o(l,u){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(ic(l),ic(u),!0)};return v.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const f=c[u]||s,p=f(e[u],t[u],u);v.isUndefined(p)&&f!==a||(n[u]=p)}),n}const Lu="1.3.5",Po={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Po[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const oc={};Po.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Lu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new ee(s(o," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!oc[o]&&(oc[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function T_(e,t,n){if(typeof e!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new ee("option "+i+" must be "+c,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+i,ee.ERR_BAD_OPTION)}}const Vi={assertOptions:T_,validators:Po},xt=Vi.validators;class ls{constructor(t){this.defaults=t,this.interceptors={request:new tc,response:new tc}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Un(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Vi.assertOptions(r,{silentJSONParsing:xt.transitional(xt.boolean),forcedJSONParsing:xt.transitional(xt.boolean),clarifyTimeoutError:xt.transitional(xt.boolean)},!1),s!=null&&(v.isFunction(s)?n.paramsSerializer={serialize:s}:Vi.assertOptions(s,{encode:xt.function,serialize:xt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&v.merge(i.common,i[n.method]),o&&v.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=yt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let u,f=0,p;if(!c){const _=[sc.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),p=_.length,u=Promise.resolve(n);f<p;)u=u.then(_[f++],_[f++]);return u}p=a.length;let g=n;for(f=0;f<p;){const _=a[f++],w=a[f++];try{g=_(g)}catch(L){w.call(this,L);break}}try{u=sc.call(this,g)}catch(_){return Promise.reject(_)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=Un(this.defaults,t);const n=Nu(t.baseURL,t.url);return ku(n,t.params,t.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(t){ls.prototype[t]=function(n,r){return this.request(Un(r||{},{method:t,url:n,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(Un(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ls.prototype[t]=n(),ls.prototype[t+"Form"]=n(!0)});const Qr=ls;class Do{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new Ir(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Do(function(s){t=s}),cancel:t}}}const C_=Do;function S_(e){return function(n){return e.apply(null,n)}}function R_(e){return v.isObject(e)&&e.isAxiosError===!0}const Wi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Wi).forEach(([e,t])=>{Wi[t]=e});const O_=Wi;function Mu(e){const t=new Qr(e),n=_u(Qr.prototype.request,t);return v.extend(n,Qr.prototype,t,{allOwnKeys:!0}),v.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Mu(Un(e,s))},n}const be=Mu(ko);be.Axios=Qr;be.CanceledError=Ir;be.CancelToken=C_;be.isCancel=xu;be.VERSION=Lu;be.toFormData=Us;be.AxiosError=ee;be.Cancel=be.CanceledError;be.all=function(t){return Promise.all(t)};be.spread=S_;be.isAxiosError=R_;be.mergeConfig=Un;be.AxiosHeaders=yt;be.formToJSON=e=>Du(v.isHTMLForm(e)?new FormData(e):e);be.HttpStatusCode=O_;be.default=be;const k_=be,Rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAa0lEQVR4Ae2SwQmAMBAEt4SUcCWkRDvQDizJElKCJeg9LiCSixBO8tmBIRCW3TwCEEKmIupqZy+zf2RcFvVSi5qc8mKZDQPIo+B4jSS7qw8QDCKNkbBybyS0vDUSXl7J6mlm/ISg/aMIIR1ue1EeIx7hZCkAAAAASUVORK5CYII=",Ot="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZElEQVR4Ae2PwQ2AMAwDPUJG8AgdkRHYgJEYoSMwAuQRpAqhIqr055PuF9kOIIT4i7nEJIp7hAXJ0K3uGVYkfsImfA/TSvgItzClhC/hNykl60eANQMWDEB3Q38dY0jvRggxmwvBdx4kGXzf3wAAAABJRU5ErkJggg==";const P_=e=>(It("data-v-5a89dd88"),e=e(),Tt(),e),D_={class:"atribute-filters atribute-container"},x_=P_(()=>y("span",null,"Card Type",-1)),N_=["src"],L_={key:0,class:"atribute-items"},M_={__name:"MainCardTypesComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=K(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(V(),q("div",D_,[y("div",{onClick:s,class:"atribute-head"},[x_,y("img",{src:r.value?N(Ot):N(Rt)},null,8,N_)]),r.value?(V(),q("div",L_,[(V(!0),q(ge,null,bt(N(n).state.mainCardTypes,c=>(V(),q("button",{class:"atribute-button",onClick:i},ze(c),1))),256))])):$e("",!0)]))}},B_=dt(M_,[["__scopeId","data-v-5a89dd88"]]);const U_=e=>(It("data-v-7c09344d"),e=e(),Tt(),e),F_={class:"atribute-filters atribute-container"},$_=U_(()=>y("span",null,"Level / Rank",-1)),j_=["src"],H_={key:0,class:"atribute-items"},V_={__name:"LevelComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=K(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(V(),q("div",F_,[y("div",{onClick:s,class:"atribute-head"},[$_,y("img",{src:r.value?N(Ot):N(Rt)},null,8,j_)]),r.value?(V(),q("div",H_,[(V(!0),q(ge,null,bt(N(n).state.levels,c=>(V(),q("button",{class:"atribute-button",onClick:i},ze(c),1))),256))])):$e("",!0)]))}},W_=dt(V_,[["__scopeId","data-v-7c09344d"]]);const K_=e=>(It("data-v-c11bebfc"),e=e(),Tt(),e),z_={class:"atribute-filters atribute-container"},q_=K_(()=>y("span",null,"Monster Effect",-1)),G_=["src"],Q_={key:0,class:"atribute-items"},Y_={__name:"CardTypeComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=K(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(V(),q("div",z_,[y("div",{onClick:s,class:"atribute-head"},[q_,y("img",{src:r.value?N(Ot):N(Rt)},null,8,G_)]),r.value?(V(),q("div",Q_,[(V(!0),q(ge,null,bt(N(n).state.types,c=>(V(),q("button",{class:"atribute-button",onClick:i},ze(c),1))),256))])):$e("",!0)]))}},J_=dt(Y_,[["__scopeId","data-v-c11bebfc"]]);const X_=e=>(It("data-v-0d116583"),e=e(),Tt(),e),Z_={class:"atribute-filters atribute-container"},eA=X_(()=>y("span",null,"Monster Type",-1)),tA=["src"],nA={key:0,class:"atribute-items"},rA={__name:"MonsterTypeComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=K(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(V(),q("div",Z_,[y("div",{onClick:s,class:"atribute-head"},[eA,y("img",{src:r.value?N(Ot):N(Rt)},null,8,tA)]),r.value?(V(),q("div",nA,[(V(!0),q(ge,null,bt(N(n).state.monsters,c=>(V(),q("button",{class:"atribute-button",onClick:i},ze(c),1))),256))])):$e("",!0)]))}},sA=dt(rA,[["__scopeId","data-v-0d116583"]]);const iA=e=>(It("data-v-1ab94568"),e=e(),Tt(),e),oA={class:"atribute-filters atribute-container"},aA=iA(()=>y("span",null,"Spell Types",-1)),cA=["src"],lA={key:0,class:"atribute-items"},uA={__name:"SpellTypesComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=K(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(V(),q("div",oA,[y("div",{onClick:s,class:"atribute-head"},[aA,y("img",{src:r.value?N(Ot):N(Rt)},null,8,cA)]),r.value?(V(),q("div",lA,[(V(!0),q(ge,null,bt(N(n).state.spellTypes,c=>(V(),q("button",{class:"atribute-button",onClick:i},ze(c),1))),256))])):$e("",!0)]))}},fA=dt(uA,[["__scopeId","data-v-1ab94568"]]);const dA=e=>(It("data-v-1eed0a7c"),e=e(),Tt(),e),hA={class:"atribute-filters atribute-container"},pA=dA(()=>y("span",null,"Trap Types",-1)),gA=["src"],mA={key:0,class:"atribute-items"},_A={__name:"TrapTypesComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=K(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(V(),q("div",hA,[y("div",{onClick:s,class:"atribute-head"},[pA,y("img",{src:r.value?N(Ot):N(Rt)},null,8,gA)]),r.value?(V(),q("div",mA,[(V(!0),q(ge,null,bt(N(n).state.trapTypes,c=>(V(),q("button",{class:"atribute-button",onClick:i},ze(c),1))),256))])):$e("",!0)]))}},AA=dt(_A,[["__scopeId","data-v-1eed0a7c"]]);const Tr=e=>(It("data-v-14957565"),e=e(),Tt(),e),yA={class:"atribute-filters atribute-container"},vA=Tr(()=>y("span",null,"Attack",-1)),bA=["src"],wA={key:0,class:"atribute-items"},EA=Tr(()=>y("span",null,"From",-1)),IA=Tr(()=>y("input",{class:"from",placeholder:"0"},null,-1)),TA=Tr(()=>y("span",null,"To",-1)),CA=Tr(()=>y("input",{class:"to",placeholder:"9999"},null,-1)),SA=[EA,IA,TA,CA],RA={__name:"AttackComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){Je();const n=K(!1),r=()=>{n.value=!n.value};return(s,i)=>(V(),q("div",yA,[y("div",{onClick:r,class:"atribute-head"},[vA,y("img",{src:n.value?N(Ot):N(Rt)},null,8,bA)]),n.value?(V(),q("div",wA,SA)):$e("",!0)]))}},OA=dt(RA,[["__scopeId","data-v-14957565"]]);const Cr=e=>(It("data-v-91004484"),e=e(),Tt(),e),kA={class:"atribute-filters atribute-container"},PA=Cr(()=>y("span",null,"Defence",-1)),DA=["src"],xA={key:0,class:"atribute-items"},NA=Cr(()=>y("span",null,"From",-1)),LA=Cr(()=>y("input",{class:"from",placeholder:"0"},null,-1)),MA=Cr(()=>y("span",null,"To",-1)),BA=Cr(()=>y("input",{class:"to",placeholder:"9999"},null,-1)),UA=[NA,LA,MA,BA],FA={__name:"DefenceComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){Je();const n=K(!1),r=()=>{n.value=!n.value};return(s,i)=>(V(),q("div",kA,[y("div",{onClick:r,class:"atribute-head"},[PA,y("img",{src:n.value?N(Ot):N(Rt)},null,8,DA)]),n.value?(V(),q("div",xA,UA)):$e("",!0)]))}},$A=dt(FA,[["__scopeId","data-v-91004484"]]);const jA=e=>(It("data-v-b6ac0ec6"),e=e(),Tt(),e),HA={class:"atribute-filters atribute-container"},VA=jA(()=>y("span",null,"Attribute",-1)),WA=["src"],KA={key:0,class:"atribute-items"},zA={__name:"AtributeComponent",emits:["pass-atribute-array"],setup(e,{emit:t}){const n=Je(),r=K(!1),s=()=>{r.value=!r.value},i=()=>{const o=event.target;event.target.innerText,o.classList.toggle("active")};return(o,a)=>(V(),q("div",HA,[y("div",{onClick:s,class:"atribute-head"},[VA,y("img",{src:r.value?N(Ot):N(Rt)},null,8,WA)]),r.value?(V(),q("div",KA,[(V(!0),q(ge,null,bt(N(n).state.atributes,c=>(V(),q("button",{class:"atribute-button",onClick:i},ze(c),1))),256))])):$e("",!0)]))}},qA=dt(zA,[["__scopeId","data-v-b6ac0ec6"]]),GA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgB7ZSxDYAgEEV/dAFGoLR0hBvJkdzAEYyTaGmnG+gZKWzk9MSEBF7yKy48DsgBmUySlMJ6x6k4A2SMq52hgDibi0TNWVxtfVdU4DvH5j3OzibOCgUEubNrRyPHQgkJsmAiSRZU5JMZJ3gt0n4Qg8AQIrjGX4SEiL7+nVD1ngTduLJQcJyw5TQP6y08czGTSZgd7Xk6rx9nNSgAAAAASUVORK5CYII=",QA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABqSURBVHgB7dJRCYBAEIThwQQ29BoYwYtgA21gBCMYxQjnCieeIMKBs0/zwTz/LCwgIpU6225bQHaGUh411hehzdaCZChCq1doBlH4I9SgXoKDiPu6CQ4inB7kLUh9/UvA80K6kGMjROTLAexeIZF+8NxQAAAAAElFTkSuQmCC",YA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgB7dLLCYAwEEXRixXYoZZgB6YDS9AOLCElWIolxAQEJRt/zAhhDswyXAIPjDEXhnghXoMCv8dUgnW85RTsEZaCXjOYTH8G2zsPKt4LKBk5fuUQkg/EISSffoegmYeD+BpbNULGFGYDKwEhkMTAAJcAAAAASUVORK5CYII=",JA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgB7ZTBDYAgDEV/nIAROgIj6ESu4CaO4AiOIiO4ATaRkwEsBPHSl7x4wbyUNACKokSwLAnPzuzKGlRArGcPyII+OKYODOl/cbIuhHbIJ6yGcE8mmfB1spbBJjFpsFksFjSlsdyC/Aah0zUSOi0IodPqU0FIFMstiAkBx07h+ykW8od1YTcoivLkAiO9NggrrwBvAAAAAElFTkSuQmCC",ac="/Yu-Gi-Oh-Api/assets/eyeNotStarred-774d2c4f.png",cc="/Yu-Gi-Oh-Api/assets/eyeAdded-95591e38.png";const XA={key:0,class:"card_wrapperList"},ZA={class:"uniqueCard"},ey={class:"uniqueCard__image--wrapper"},ty=["src"],ny={class:"uniqueCard__informations--wrapper"},ry={class:"cardName"},sy={class:"favs"},iy=["src"],oy={key:1,class:"card__wrapperGallery"},ay={class:"uniqueCard"},cy={class:"uniqueCard__image--wrapper"},ly=["src"],uy={class:"uniqueCard__informations--wrapper"},fy={class:"cardName"},dy={class:"favs"},hy=["src"],py={class:"pagination"},gy=y("img",{src:GA},null,-1),my=[gy],_y=y("img",{src:QA},null,-1),Ay=[_y],yy={class:"currentPage pages activePage"},vy=y("img",{src:YA},null,-1),by=[vy],wy=y("img",{src:JA},null,-1),Ey=[wy],Iy={__name:"CardMobile",props:{preFilterProp:{type:Array,required:!0},searchByWhat:{type:String,required:!0},searchText:{type:String,required:!0},attackFrom:{type:Number,required:!1},attackTo:{type:Number,required:!1},defenceFrom:{type:Number,required:!1},defenceTo:{type:Number,required:!1},allCards:{type:Boolean,required:!1},monsters:{type:Boolean,required:!1},spells:{type:Boolean,required:!1},traps:{type:Boolean,required:!1}},setup(e){const t=e,n=Je(),r=K(null),s=K(0),i=K(10),o=K(1),a=K(1),c=()=>{o.value+1<=r.value&&(i.value+=10,s.value+=10,o.value++,console.log(o.value),document.documentElement.scrollTop=0)},l=()=>{i.value!==10&&(i.value-=10,s.value-=10,o.value--,document.documentElement.scrollTop=0)},u=()=>{i.value=10,s.value=0,o.value=1,document.documentElement.scrollTop=0},f=()=>{o.value=r.value,s.value=r.value*10-10,i.value=r.value*10,document.documentElement.scrollTop=0},p=Pe(()=>{let I=[];return n.state.allBox?I=t.preFilterProp.filter(C=>{if(t.searchByWhat==="true")return C.name.toLowerCase().includes(t.searchText.toLowerCase());if(t.searchByWhat==="false")return C.desc.toLowerCase().includes(t.searchText.toLowerCase())}):n.state.monstersBox?I=t.preFilterProp.filter(C=>{if(t.searchByWhat==="true")return C.name.toLowerCase().includes(t.searchText.toLowerCase())&&g(C)&&_(C)&&w(C)&&L(C)&&M(C);if(t.searchByWhat==="false")return C.desc.toLowerCase().includes(t.searchText.toLowerCase())&&g(C)&&_(C)&&w(C)&&L(C)&&M(C)}):n.state.spellsBox?I=t.preFilterProp.filter(C=>{if(t.searchByWhat==="true")return C.name.toLowerCase().includes(t.searchText.toLowerCase())&&O(C)&&C.type.toLowerCase().includes("spell");if(t.searchByWhat==="false")return C.desc.toLowerCase().includes(t.searchText.toLowerCase())&&O(C)&&C.type.toLowerCase().includes("spell")}):n.state.trapsBox&&(I=t.preFilterProp.filter(C=>{if(t.searchByWhat==="true")return C.name.toLowerCase().includes(t.searchText.toLowerCase())&&O(C)&&C.type.toLowerCase().includes("trap");if(t.searchByWhat==="false")return C.desc.toLowerCase().includes(t.searchText.toLowerCase())&&O(C)&&C.type.toLowerCase().includes("trap")})),r.value=Math.ceil(I.length/10),console.log(r.value),console.log(I),n.state.ByAttackAscending?I.sort((C,j)=>C.atk-j.atk):n.state.ByAttackDescending?I.sort((C,j)=>C.atk-j.atk).reverse():n.state.ByDefenceAscending?I.sort((C,j)=>C.def-j.def):I.sort((C,j)=>C.def-j.def).reverse()}),g=I=>{const C=Array.from(n.state.selectedLevels);return C.length===0?n.state.levels.some(G=>I.level.toString().includes(G)):C.some(G=>I.level.toString().includes(G))},_=I=>{const C=Array.from(n.state.selectedAtributes);return C.length===0?n.state.atributes.some(G=>I.attribute.includes(G)):C.some(G=>I.attribute.includes(G))},w=I=>{const C=Array.from(n.state.selectedMonsters);return C.length===0?n.state.monsters.some(G=>I.race.includes(G)):C.some(G=>I.race.includes(G))},L=I=>{const C=Array.from(n.state.selectedCardTypes);return C.length===0?n.state.types.some(G=>I.type.includes(G)):C.some(G=>I.type.includes(G))},O=I=>{const C=Array.from(n.state.selectedRaces);return C.length===0?n.state.races.some(G=>I.race.includes(G)):C.some(G=>I.race.includes(G))},M=I=>I.atk>=t.attackFrom&&I.atk<=t.attackTo&&I.def>=t.defenceFrom&&I.def<=t.defenceTo;return Ht(()=>t.searchText,()=>{s.value=0,i.value=10,o.value=1}),Ht([()=>t.monsters,()=>t.spells,()=>t.allCards,()=>t.traps],()=>{a.value=1,s.value=0,i.value=10,o.value=1}),(I,C)=>(V(),q(ge,null,[N(n).state.listActive?(V(),q("ul",XA,[(V(!0),q(ge,null,bt(N(p).slice(s.value,i.value),j=>(V(),q("li",{class:"card__card",key:j.id},[y("div",ZA,[y("div",ey,[y("img",{src:j.card_images[0].image_url,alt:"cardImage"},null,8,ty)]),y("div",ny,[y("div",ry,[y("h2",null,ze(j.name),1)]),y("div",sy,[y("img",{class:"default",src:N(n).state.favList.includes(j.name)?N(cc):N(ac)},null,8,iy)])])])]))),128))])):$e("",!0),N(n).state.galleryActive?(V(),q("ul",oy,[(V(!0),q(ge,null,bt(N(p).slice(s.value,i.value),j=>(V(),q("li",{class:"card__card",key:j.id},[y("div",ay,[y("div",cy,[y("img",{src:j.card_images[0].image_url,alt:"cardImage"},null,8,ly)]),y("div",uy,[y("div",fy,[y("h2",null,ze(j.name),1)]),y("div",dy,[y("img",{class:"default",src:N(n).state.favList.includes(j.name)?N(cc):N(ac)},null,8,hy)])])])]))),128))])):$e("",!0),y("section",py,[y("div",{onClick:u,class:"firstPage moveFar"},my),y("div",{onClick:l,class:"Prev moveLess"},Ay),y("div",yy,ze(o.value),1),y("div",{onClick:c,class:"Next moveLess"},by),y("div",{onClick:f,class:"lastPage moveFar"},Ey)])],64))}},Ty="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEFSURBVHgB7ZYxbsJAEEVnVhMKhBR3UbocITcIXZRupVzAOUHgBBwBfAJ8AYQ7xDE4AXSIzhUSMNplVggJTOFBUIC0r/BaX/7+u82fxfnYJq0Wpc5BAjU4x/n7T7E41ZYT+2EMpaCg0eABNZvUkfeeMRoLfcrDnilEQ1naGvdmQ6Uq5ohs6hVuABGSqwLvQQyMgTHwAgp1JdX0pfnYOZ9VNUSfeY+1XkQsndvlEHl6MMwzopc+gFfMQ5+9fY+KU201/bXG4D8oYOY/OgxPbzUG+XFYiooWwto6P6WxaWJgDHyAQLlrlnATeJVfLs6cb7dUW2uBMDurGvOuKw0yq/OGg63XnO8Be/9HyLmsGN0AAAAASUVORK5CYII=",Cy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACrSURBVHgB7ZXdCcJAEIRnxXdTgp3YgiVoBWoH6UDTQUqwg9RgB5aQDi6TcIH8QXa5lwT2g+Vgubl5u09CCBmAG6c91yhF5D9cMH+OeQ2fNpAHPd/pC9xVhvzzABsnpJFZC5PxQi/0whlHTsm5KO8Xyt0Sdexydo5En72h82FBH44UxfyVxwM67lYfVtMXjD7M/afxQi/cRmGNNEz53oeabw1Y9tmL88M6nQ8b8k3YMI/mI78AAAAASUVORK5CYII=",Sy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGOSURBVHgB7ZZPTsJAFMbfdFo3sOhGEnZzBI6AC0nYtQJr4QZ6AryBR5C9RtyZIAZuIJ7AujKpGLrvn/FNsbEjJbKorSTzS5p5b940eYtvvnkACoVCUS7k58Zy2htzzi0MF0EQ2PX2nQMFoqcTd9LrfzUjaFBqDHEdiOTjsTvEWh9yhHPiBQGc19s388yGCOHmegWPczAxZ0ktikgDFwY5Q2nEpB7SyWpmmb5Pnwgh4pCHn314/N39273FIGd2ksT7Q7f5MrZMUOwLf6GVXZFELXRTrepjDJsobCeKwK61rhdQINK1r1QM9CDeFDF6DsOrf4Fh7Eso9EtcziBnOI8GtdbtKMm1dDHtQxn/vkIBbPUhdFEnDP2jop+OTMoUteI3NsYPcfUrBwYLNd8rQz9SQ0I7hkFnKGiGqRgN7PRoUMTjKvmQrusWeg+D9UtvalrsO3NRW047V9hoH3LGnZxIPqRvORf7EaVklWxgM8/oUw7kDM5ZkudtaMiddEboQ6cYznGEHfwLH1IoFIoC+QSlBJiLoauhMwAAAABJRU5ErkJggg==",Ry="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7ZXtDYJADIZ7xgEc4UZgBFdwg3MDncARHAE20A1wA+IE4ASwwdmLJakNfvw44Ix9kua4tuHecLQFUBRFSQzv/ck/qNAsTIzhGxTgcMmZqzDGbCl2wMVBXDq0PZ5x6R1LkbBiieHZslgm9rGwfCO/UBBRUVIQteHqx7hCfH/zMQkPXpM45TeYo9wHCf8NWkl9qEbLYE5CH/LPnFns6MfBcQ0LoYn3IckNpoaurGZXZiEFkhGiDGCkg0aGReu+mjORkcPV4lJCKsMVD9xRhbUDfSj34+C4huULbX0/apnvitZAfLq3UVRckPJSy19RlH/kDpJiU6iQSlDOAAAAAElFTkSuQmCC",lc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABEklEQVR4AbWWjRGCMAyFAxMwQp3QbgCbwApOUN3ADcoGsEFMtJwV+5OKfXe5qyV5X5v2QICEELGj6CkMhcW3FjenKRSUioucgVSjGESJZ7fCUnGNzpn3eFx9auVRWWtRKfUMHmekQz1fcuacyiGAsJfyAaPUvABi/NVnzfc7EEI6BmiJOf/eAKFnEQ0MMBJz1gZI5exkOPvrcGOFPiAECTUCQrOx67gH+JAIABtXKFLTNNvFkJZASzFDPa21AXcG3KCeLnwGHQ0WSfYPZ3BqqWilwRX+r4m8Z3ArSr7sUtc0os+XnYPoXFXqvu8U/vDQgwGPa0g2Dl87qfPJ9CDch6nA3OCBfxfaGfi7sm6OW9qlPB5FLbBeelksuwAAAABJRU5ErkJggg==",uc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7ElEQVR4AbVVP0/CUBC/e0piHAwmDsaJ0cEYdHIwkcmwKbqwWfEDwETiRNkIk59AuzIYZDNOkLjTQRM3mUw0DnVxEO3zrrSmkPbxMPBLXvp6r+93d71/CAqkjGZySUBRSsggvUpa/pFDy0bptr5A3DxZuV4cB0YJ141mKoFwRdsM6ADB6rtQjVIkRgWbZ60ikXe1yRkSDL6zaVyXRo/mhsgLrYqUbo22CzA5FgAxu7qdh9duoxMIRdhyIjfjbq+tLMJtfd9bvI8DxcsMe+LFwP/n/FuSceSX5d0/4pf3TyjU771nDJy+hC2OiedBQkBFlzxONoKknySAvvXP48jZ2rAHgUzlyZyEZUFRPtQhZ6IAAek4T77BLQmBcKBDHrYyLFMpQRR7HIP06IGKXKUkAilWEBlcjUzR+SY1HyXNlu9AF0yu+p496MHs4MxUAXVfW1Bpd2BGoNbTEhSEC5gREjQrhG3leHi0YdqQYNlBL6KSPoXBlJoWHOoQVd54ClgTyoFABU5JVV0EcInL9qfb0MjcMJomotdZ/w0KbPXBOjaD96GJ9mY32qvp/Aep3YHJp5pDlp8/Wke1sDBy6Kephf+ANKlbnYCO1ZQk8xRHO2Loo+oiK3KpnbvUcXHQFIO+1ZNcoFRDnOZ+JkbiF6tB8lhv/dntAAAAAElFTkSuQmCC",fc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVR4AbWWgRGDIAxFQydoN8BJOkK7SdlAN7GbMApu4Agp38IVLWLQ893F9iD8j6HGEhVg5quP1of14fjHGMaMD021YFEQkNKLjXziK+ywFqwxW+ItH6ct7byI1noKASZX882yIPWbvgm0dGrQS1ZVGAALbRWcHAlQSsUNkZDbxV+edB4GBg86jztKNPovV0n2jhINiiuydxjQJTfYNM0UwzDQFsiJ+Vl43sQm8DBhCp/OudWfKebS3Awjsu1ydLkwmqQGazl/z4K/dLmZnEA0EIoDE3s+S0yigVAc6HgOVmKShkC8Tw+62OyWJgLxebMLJqa0IpoIxEH+xcMrB15JRyXCnZzzylycybtC3PKBfxcmCKR35cIYSlpslB/ATLq3vpCBewAAAABJRU5ErkJggg==",dc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFUlEQVR4AbVVu24TQRQ9d5JIEQVyQRGoTEcBkaGiQMKiQO4gpEnHOnxAQhOJynYXpcoXwLYukHEXUUAi0XsFRErpKi9FykaRIuU1k3sn3siP2Uci+0jjmZ3HOeO5M+cSEpD3Grn7CgvGoEj8abh0hkIuARndPIP6seXPtOM4yNX5xGvkJwjfuFlEFhD8c42aS0j1d0x/ai4weSszucDAkzXT3vfF/qGxHvL5ZsUYvczNSdwekyAqTb2Yw16rvhF1UvfOjdarSQxrK29tXVr6mTQNHJvPf/1Zy2WPSM6cyatIwaMH92xJgyFVEc4bgQmFClc5DA+5ziWBskocJAwfxQJfc8VRfo8R4QJ6USnCO4wIROq1xKCA0SEvAsMMrlNgAHLfpWS5kjInmu+CCLTjFn5depUokmFO6BSYX/mD7YOTRILuMZkra/rB7hsotuKN/oFoQZyIi1zqAQG2c5LHcEk4RMoRRGLRBtLIBWMGj63ZPSs3fiPGnuOOKY2cz8f/58+UVUepjOssNQAXUSo5c7FD1Cy3/OwG9XCqMHfK5l1yzT4+Ocev1g7ePH9o2ynk0AZfePdr0u5JmU+9RpXIOuudwYGt/fdnq9F3T0bbD+rr/E+OWPYlbp/VQtn5pv9hubvTmfT5ZuUvYarsVh+RZdfA+jjHMXAkfUpaKEKa7Vyz49K1KUa+1TbyQPkNjQOrTBzGcVwBxtzszx9ksPMAAAAASUVORK5CYII=";/**
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
 */const Bu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Oy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Uu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Bu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Oy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new ky;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ky extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Py=function(e){const t=Bu(e);return Uu.encodeByteArray(t,!0)},Fu=function(e){return Py(e).replace(/\./g,"")},$u=function(e){try{return Uu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Dy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xy=()=>Dy().__FIREBASE_DEFAULTS__,Ny=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ly=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$u(e[1]);return t&&JSON.parse(t)},xo=()=>{try{return xy()||Ny()||Ly()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},My=e=>{var t,n;return(n=(t=xo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ju=()=>{var e;return(e=xo())===null||e===void 0?void 0:e.config},Hu=e=>{var t;return(t=xo())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class By{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Vu(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Fy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $y(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Wu(){try{return typeof indexedDB=="object"}catch{return!1}}function Ku(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function jy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Hy="FirebaseError";class ht extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Hy,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Vy(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ht(s,a,r)}}function Vy(e,t){return e.replace(Wy,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Wy=/\{\$([^}]+)}/g;function Ky(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _r(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(hc(i)&&hc(o)){if(!_r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hc(e){return e!==null&&typeof e=="object"}/**
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
 */function Sr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Zn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function er(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function zy(e,t){const n=new qy(e,t);return n.subscribe.bind(n)}class qy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gy(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=ai),s.error===void 0&&(s.error=ai),s.complete===void 0&&(s.complete=ai);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ai(){}/**
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
 */const Qy=1e3,Yy=2,Jy=4*60*60*1e3,Xy=.5;function pc(e,t=Qy,n=Yy){const r=t*Math.pow(n,e),s=Math.round(Xy*r*(Math.random()-.5)*2);return Math.min(Jy,r+s)}/**
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
 */class Zy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new By;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(tv(t))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=en){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=en){return this.instances.has(t)}getOptions(t=en){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ev(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=en){return this.component?this.component.multipleInstances?t:en:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ev(e){return e===en?void 0:e}function tv(e){return e.instantiationMode==="EAGER"}/**
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
 */class nv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Zy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(le||(le={}));const rv={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},sv=le.INFO,iv={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},ov=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=iv[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class No{constructor(t){this.name=t,this._logLevel=sv,this._logHandler=ov,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in le))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...t),this._logHandler(this,le.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...t),this._logHandler(this,le.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,le.INFO,...t),this._logHandler(this,le.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,le.WARN,...t),this._logHandler(this,le.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...t),this._logHandler(this,le.ERROR,...t)}}const av=(e,t)=>t.some(n=>e instanceof n);let gc,mc;function cv(){return gc||(gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lv(){return mc||(mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zu=new WeakMap,Ki=new WeakMap,qu=new WeakMap,ci=new WeakMap,Lo=new WeakMap;function uv(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Vt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&zu.set(n,e)}).catch(()=>{}),Lo.set(t,e),t}function fv(e){if(Ki.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ki.set(e,t)}let zi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ki.get(e);if(t==="objectStoreNames")return e.objectStoreNames||qu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dv(e){zi=e(zi)}function hv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(li(this),t,...n);return qu.set(r,t.sort?t.sort():[t]),Vt(r)}:lv().includes(e)?function(...t){return e.apply(li(this),t),Vt(zu.get(this))}:function(...t){return Vt(e.apply(li(this),t))}}function pv(e){return typeof e=="function"?hv(e):(e instanceof IDBTransaction&&fv(e),av(e,cv())?new Proxy(e,zi):e)}function Vt(e){if(e instanceof IDBRequest)return uv(e);if(ci.has(e))return ci.get(e);const t=pv(e);return t!==e&&(ci.set(e,t),Lo.set(t,e)),t}const li=e=>Lo.get(e);function gv(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Vt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Vt(o.result),c.oldVersion,c.newVersion,Vt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const mv=["get","getKey","getAll","getAllKeys","count"],_v=["put","add","delete","clear"],ui=new Map;function _c(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ui.get(t))return ui.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=_v.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||mv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ui.set(t,i),i}dv(e=>({...e,get:(t,n,r)=>_c(t,n)||e.get(t,n,r),has:(t,n)=>!!_c(t,n)||e.has(t,n)}));/**
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
 */class Av{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yv(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qi="@firebase/app",Ac="0.9.13";/**
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
 */const dn=new No("@firebase/app"),vv="@firebase/app-compat",bv="@firebase/analytics-compat",wv="@firebase/analytics",Ev="@firebase/app-check-compat",Iv="@firebase/app-check",Tv="@firebase/auth",Cv="@firebase/auth-compat",Sv="@firebase/database",Rv="@firebase/database-compat",Ov="@firebase/functions",kv="@firebase/functions-compat",Pv="@firebase/installations",Dv="@firebase/installations-compat",xv="@firebase/messaging",Nv="@firebase/messaging-compat",Lv="@firebase/performance",Mv="@firebase/performance-compat",Bv="@firebase/remote-config",Uv="@firebase/remote-config-compat",Fv="@firebase/storage",$v="@firebase/storage-compat",jv="@firebase/firestore",Hv="@firebase/firestore-compat",Vv="firebase",Wv="9.23.0";/**
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
 */const Gi="[DEFAULT]",Kv={[qi]:"fire-core",[vv]:"fire-core-compat",[wv]:"fire-analytics",[bv]:"fire-analytics-compat",[Iv]:"fire-app-check",[Ev]:"fire-app-check-compat",[Tv]:"fire-auth",[Cv]:"fire-auth-compat",[Sv]:"fire-rtdb",[Rv]:"fire-rtdb-compat",[Ov]:"fire-fn",[kv]:"fire-fn-compat",[Pv]:"fire-iid",[Dv]:"fire-iid-compat",[xv]:"fire-fcm",[Nv]:"fire-fcm-compat",[Lv]:"fire-perf",[Mv]:"fire-perf-compat",[Bv]:"fire-rc",[Uv]:"fire-rc-compat",[Fv]:"fire-gcs",[$v]:"fire-gcs-compat",[jv]:"fire-fst",[Hv]:"fire-fst-compat","fire-js":"fire-js",[Vv]:"fire-js-all"};/**
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
 */const us=new Map,Qi=new Map;function zv(e,t){try{e.container.addComponent(t)}catch(n){dn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function wt(e){const t=e.name;if(Qi.has(t))return dn.debug(`There were multiple attempts to register component ${t}.`),!1;Qi.set(t,e);for(const n of us.values())zv(n,e);return!0}function Kn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const qv={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wt=new An("app","Firebase",qv);/**
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
 */class Gv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const Rr=Wv;function Gu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});if(n||(n=ju()),!n)throw Wt.create("no-options");const i=us.get(s);if(i){if(_r(n,i.options)&&_r(r,i.config))return i;throw Wt.create("duplicate-app",{appName:s})}const o=new nv(s);for(const c of Qi.values())o.addComponent(c);const a=new Gv(n,r,o);return us.set(s,a),a}function Qu(e=Gi){const t=us.get(e);if(!t&&e===Gi&&ju())return Gu();if(!t)throw Wt.create("no-app",{appName:e});return t}function at(e,t,n){var r;let s=(r=Kv[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),dn.warn(a.join(" "));return}wt(new ft(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Qv="firebase-heartbeat-database",Yv=1,Ar="firebase-heartbeat-store";let fi=null;function Yu(){return fi||(fi=gv(Qv,Yv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ar)}}}).catch(e=>{throw Wt.create("idb-open",{originalErrorMessage:e.message})})),fi}async function Jv(e){try{return await(await Yu()).transaction(Ar).objectStore(Ar).get(Ju(e))}catch(t){if(t instanceof ht)dn.warn(t.message);else{const n=Wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});dn.warn(n.message)}}}async function yc(e,t){try{const r=(await Yu()).transaction(Ar,"readwrite");await r.objectStore(Ar).put(t,Ju(e)),await r.done}catch(n){if(n instanceof ht)dn.warn(n.message);else{const r=Wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(r.message)}}}function Ju(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Xv=1024,Zv=30*24*60*60*1e3;class eb{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Zv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vc(),{heartbeatsToSend:n,unsentEntries:r}=tb(this._heartbeatsCache.heartbeats),s=Fu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function vc(){return new Date().toISOString().substring(0,10)}function tb(e,t=Xv){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bc(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wu()?Ku().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Jv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function bc(e){return Fu(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function rb(e){wt(new ft("platform-logger",t=>new Av(t),"PRIVATE")),wt(new ft("heartbeat",t=>new eb(t),"PRIVATE")),at(qi,Ac,e),at(qi,Ac,"esm2017"),at("fire-js","")}rb("");function Mo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Xu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sb=Xu,Zu=new An("auth","Firebase",Xu());/**
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
 */const fs=new No("@firebase/auth");function ib(e,...t){fs.logLevel<=le.WARN&&fs.warn(`Auth (${Rr}): ${e}`,...t)}function Yr(e,...t){fs.logLevel<=le.ERROR&&fs.error(`Auth (${Rr}): ${e}`,...t)}/**
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
 */function je(e,...t){throw Bo(e,...t)}function ct(e,...t){return Bo(e,...t)}function ef(e,t,n){const r=Object.assign(Object.assign({},sb()),{[t]:n});return new An("auth","Firebase",r).create(t,{appName:e.name})}function ob(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&je(e,"argument-error"),ef(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Zu.create(e,...t)}function W(e,t,...n){if(!e)throw Bo(t,...n)}function _t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Yr(t),new Error(t)}function Et(e,t){e||_t(t)}/**
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
 */function Yi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function ab(){return wc()==="http:"||wc()==="https:"}function wc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function cb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ab()||Vu()||"connection"in navigator)?navigator.onLine:!0}function lb(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Or{constructor(t,n){this.shortDelay=t,this.longDelay=n,Et(n>t,"Short delay should be less than long delay!"),this.isMobile=Uy()||Fy()}get(){return cb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Uo(e,t){Et(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class tf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ub={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fb=new Or(3e4,6e4);function zn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function qn(e,t,n,r,s={}){return nf(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=Sr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),tf.fetch()(rf(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function nf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ub),t);try{const s=new db(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $r(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $r(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $r(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw $r(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ef(e,u,l);je(e,u)}}catch(s){if(s instanceof ht)throw s;je(e,"network-request-failed",{message:String(s)})}}async function kr(e,t,n,r,s={}){const i=await qn(e,t,n,r,s);return"mfaPendingCredential"in i&&je(e,"multi-factor-auth-required",{_serverResponse:i}),i}function rf(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Uo(e.config,s):`${e.config.apiScheme}://${s}`}class db{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),fb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $r(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ct(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function hb(e,t){return qn(e,"POST","/v1/accounts:delete",t)}async function pb(e,t){return qn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ir(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function gb(e,t=!1){const n=Ze(e),r=await n.getIdToken(t),s=Fo(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ir(di(s.auth_time)),issuedAtTime:ir(di(s.iat)),expirationTime:ir(di(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function di(e){return Number(e)*1e3}function Fo(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Yr("JWT malformed, contained fewer than 3 sections"),null;try{const s=$u(n);return s?JSON.parse(s):(Yr("Failed to decode base64 JWT payload"),null)}catch(s){return Yr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mb(e){const t=Fo(e);return W(t,"internal-error"),W(typeof t.exp<"u","internal-error"),W(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function yr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ht&&_b(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function _b({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Ab{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ds(e){var t;const n=e.auth,r=await e.getIdToken(),s=await yr(e,pb(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?bb(i.providerUserInfo):[],a=vb(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new sf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function yb(e){const t=Ze(e);await ds(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function vb(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function bb(e){return e.map(t=>{var{providerId:n}=t,r=Mo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wb(e,t){const n=await nf(e,{},async()=>{const r=Sr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=rf(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken<"u","internal-error"),W(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):mb(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return W(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await wb(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vr;return r&&(W(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new vr,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
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
 */function Nt(e,t){W(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class fn{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Mo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ab(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await yr(this,this.stsTokenManager.getToken(this.auth,t));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return gb(this,t)}reload(){return yb(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new fn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ds(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await yr(this,hb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:C,isAnonymous:j,providerData:G,stsTokenManager:ye}=n;W(I&&ye,t,"internal-error");const Q=vr.fromJSON(this.name,ye);W(typeof I=="string",t,"internal-error"),Nt(f,t.name),Nt(p,t.name),W(typeof C=="boolean",t,"internal-error"),W(typeof j=="boolean",t,"internal-error"),Nt(g,t.name),Nt(_,t.name),Nt(w,t.name),Nt(L,t.name),Nt(O,t.name),Nt(M,t.name);const ae=new fn({uid:I,auth:t,email:p,emailVerified:C,displayName:f,isAnonymous:j,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:Q,createdAt:O,lastLoginAt:M});return G&&Array.isArray(G)&&(ae.providerData=G.map(se=>Object.assign({},se))),L&&(ae._redirectEventId=L),ae}static async _fromIdTokenResponse(t,n,r=!1){const s=new vr;s.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await ds(i),i}}/**
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
 */const Ec=new Map;function At(e){Et(e instanceof Function,"Expected a class definition");let t=Ec.get(e);return t?(Et(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ec.set(e,t),t)}/**
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
 */class of{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}of.type="NONE";const Ic=of;/**
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
 */function Jr(e,t,n){return`firebase:${e}:${t}:${n}`}class Pn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?fn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Pn(At(Ic),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||At(Ic);const o=Jr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=fn._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Pn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Pn(i,t,r))}}/**
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
 */function Tc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(lf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(af(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ff(t))return"Blackberry";if(df(t))return"Webos";if($o(t))return"Safari";if((t.includes("chrome/")||cf(t))&&!t.includes("edge/"))return"Chrome";if(uf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function af(e=Se()){return/firefox\//i.test(e)}function $o(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cf(e=Se()){return/crios\//i.test(e)}function lf(e=Se()){return/iemobile/i.test(e)}function uf(e=Se()){return/android/i.test(e)}function ff(e=Se()){return/blackberry/i.test(e)}function df(e=Se()){return/webos/i.test(e)}function js(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Eb(e=Se()){var t;return js(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Ib(){return $y()&&document.documentMode===10}function hf(e=Se()){return js(e)||uf(e)||df(e)||ff(e)||/windows phone/i.test(e)||lf(e)}function Tb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function pf(e,t=[]){let n;switch(e){case"Browser":n=Tc(Se());break;case"Worker":n=`${Tc(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rr}/${r}`}async function gf(e,t){return qn(e,"GET","/v2/recaptchaConfig",zn(e,t))}function Cc(e){return e!==void 0&&e.enterprise!==void 0}class mf{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Cb(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function _f(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=ct("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Cb().appendChild(r)})}function Sb(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Rb="https://www.google.com/recaptcha/enterprise.js?render=",Ob="recaptcha-enterprise",kb="NO_RECAPTCHA";class Af{constructor(t){this.type=Ob,this.auth=yn(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{gf(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new mf(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Cc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(kb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Cc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_f(Rb+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function hs(e,t,n,r=!1){const s=new Af(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Pb{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Db{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sc(this),this.idTokenSubscription=new Sc(this),this.beforeStateQueue=new Pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ds(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=lb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ze(t):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(At(t))})}async initializeRecaptchaConfig(){const t=await gf(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new mf(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Af(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new An("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&At(t)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,r,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=pf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&ib(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yn(e){return Ze(e)}class Sc{constructor(t){this.auth=t,this.observer=null,this.addObserver=zy(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function xb(e,t){const n=Kn(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_r(i,t??{}))return s;je(s,"already-initialized")}return n.initialize({options:t})}function Nb(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Lb(e,t,n){const r=yn(e);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=yf(t),{host:o,port:a}=Mb(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Bb()}function yf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Mb(e){const t=yf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Rc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Rc(o)}}}function Rc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Bb(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class jo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return _t("not implemented")}_getIdTokenResponse(t){return _t("not implemented")}_linkToIdToken(t,n){return _t("not implemented")}_getReauthenticationResolver(t){return _t("not implemented")}}async function Ub(e,t){return qn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function hi(e,t){return kr(e,"POST","/v1/accounts:signInWithPassword",zn(e,t))}/**
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
 */async function Fb(e,t){return kr(e,"POST","/v1/accounts:signInWithEmailLink",zn(e,t))}async function $b(e,t){return kr(e,"POST","/v1/accounts:signInWithEmailLink",zn(e,t))}/**
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
 */class br extends jo{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new br(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new br(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await hs(t,r,"signInWithPassword");return hi(t,s)}else return hi(t,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await hs(t,r,"signInWithPassword");return hi(t,i)}else return Promise.reject(s)});case"emailLink":return Fb(t,{email:this._email,oobCode:this._password});default:je(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Ub(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $b(t,{idToken:n,email:this._email,oobCode:this._password});default:je(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Dn(e,t){return kr(e,"POST","/v1/accounts:signInWithIdp",zn(e,t))}/**
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
 */const jb="http://localhost";class hn extends jo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new hn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Mo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new hn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Dn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Dn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Dn(t,n)}buildRequest(){const t={requestUri:jb,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Sr(n)}return t}}/**
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
 */function Hb(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vb(e){const t=Zn(er(e)).link,n=t?Zn(er(t)).deep_link_id:null,r=Zn(er(e)).deep_link_id;return(r?Zn(er(r)).link:null)||r||n||t||e}class Ho{constructor(t){var n,r,s,i,o,a;const c=Zn(er(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Hb((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Vb(t);try{return new Ho(n)}catch{return null}}}/**
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
 */class Gn{constructor(){this.providerId=Gn.PROVIDER_ID}static credential(t,n){return br._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ho.parseLink(n);return W(r,"argument-error"),br._fromEmailAndCode(t,r.code,r.tenantId)}}Gn.PROVIDER_ID="password";Gn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pr extends Vo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bt extends Pr{constructor(){super("facebook.com")}static credential(t){return hn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
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
 */class it extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return hn._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return it.credentialFromTaggedObject(t)}static credentialFromError(t){return it.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return it.credential(n,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
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
 */class Ut extends Pr{constructor(){super("github.com")}static credential(t){return hn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ut.credential(t.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
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
 */class Ft extends Pr{constructor(){super("twitter.com")}static credential(t,n){return hn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
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
 */async function pi(e,t){return kr(e,"POST","/v1/accounts:signUp",zn(e,t))}/**
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
 */class pn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await fn._fromIdTokenResponse(t,r,s),o=Oc(r);return new pn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Oc(r);return new pn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Oc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ps extends ht{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ps.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new ps(t,n,r,s)}}function vf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ps._fromErrorAndOperation(e,i,t,r):i})}async function Wb(e,t,n=!1){const r=await yr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return pn._forOperation(e,"link",r)}/**
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
 */async function Kb(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await yr(e,vf(r,s,t,e),n);W(i.idToken,r,"internal-error");const o=Fo(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(e.uid===a,r,"user-mismatch"),pn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&je(r,"user-mismatch"),i}}/**
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
 */async function bf(e,t,n=!1){const r="signIn",s=await vf(e,r,t),i=await pn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function zb(e,t){return bf(yn(e),t)}async function qb(e,t,n){var r;const s=yn(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await hs(s,i,"signUpPassword");o=pi(s,l)}else o=pi(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await hs(s,i,"signUpPassword");return pi(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await pn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Gb(e,t,n){return zb(Ze(e),Gn.credential(t,n))}function Qb(e,t,n,r){return Ze(e).onIdTokenChanged(t,n,r)}function Yb(e,t,n){return Ze(e).beforeAuthStateChanged(t,n)}function Jb(e,t,n,r){return Ze(e).onAuthStateChanged(t,n,r)}function wf(e){return Ze(e).signOut()}const gs="__sak";/**
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
 */class Ef{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gs,"1"),this.storage.removeItem(gs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Xb(){const e=Se();return $o(e)||js(e)}const Zb=1e3,ew=10;class If extends Ef{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xb()&&Tb(),this.fallbackToPolling=hf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ib()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,ew):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}If.type="LOCAL";const tw=If;/**
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
 */class Tf extends Ef{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Tf.type="SESSION";const Cf=Tf;/**
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
 */function nw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Hs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Hs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await nw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hs.receivers=[];/**
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
 */function Wo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class rw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Wo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function lt(){return window}function sw(e){lt().location.href=e}/**
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
 */function Sf(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function iw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ow(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function aw(){return Sf()?self:null}/**
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
 */const Rf="firebaseLocalStorageDb",cw=1,ms="firebaseLocalStorage",Of="fbase_key";class Dr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vs(e,t){return e.transaction([ms],t?"readwrite":"readonly").objectStore(ms)}function lw(){const e=indexedDB.deleteDatabase(Rf);return new Dr(e).toPromise()}function Ji(){const e=indexedDB.open(Rf,cw);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ms,{keyPath:Of})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ms)?t(r):(r.close(),await lw(),t(await Ji()))})})}async function kc(e,t,n){const r=Vs(e,!0).put({[Of]:t,value:n});return new Dr(r).toPromise()}async function uw(e,t){const n=Vs(e,!1).get(t),r=await new Dr(n).toPromise();return r===void 0?null:r.value}function Pc(e,t){const n=Vs(e,!0).delete(t);return new Dr(n).toPromise()}const fw=800,dw=3;class kf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ji(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>dw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hs._getInstance(aw()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await iw(),!this.activeServiceWorker)return;this.sender=new rw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ow()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ji();return await kc(t,gs,"1"),await Pc(t,gs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>uw(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Vs(s,!1).getAll();return new Dr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kf.type="LOCAL";const hw=kf;new Or(3e4,6e4);/**
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
 */function Pf(e,t){return t?At(t):(W(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Ko extends jo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Dn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Dn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function pw(e){return bf(e.auth,new Ko(e),e.bypassAuthState)}function gw(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),Kb(n,new Ko(e),e.bypassAuthState)}async function mw(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),Wb(n,new Ko(e),e.bypassAuthState)}/**
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
 */class Df{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return pw;case"linkViaPopup":case"linkViaRedirect":return mw;case"reauthViaPopup":case"reauthViaRedirect":return gw;default:je(this.auth,"internal-error")}}resolve(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _w=new Or(2e3,1e4);async function xf(e,t,n){const r=yn(e);ob(e,t,Vo);const s=Pf(r,n);return new an(r,"signInViaPopup",t,s).executeNotNull()}class an extends Df{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const t=Wo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,_w.get())};t()}}an.currentPopupAction=null;/**
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
 */const Aw="pendingRedirect",Xr=new Map;class yw extends Df{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Xr.get(this.auth._key());if(!t){try{const r=await vw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Xr.set(this.auth._key(),t)}return this.bypassAuthState||Xr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vw(e,t){const n=Ew(t),r=ww(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bw(e,t){Xr.set(e._key(),t)}function ww(e){return At(e._redirectPersistence)}function Ew(e){return Jr(Aw,e.config.apiKey,e.name)}async function Iw(e,t,n=!1){const r=yn(e),s=Pf(r,t),o=await new yw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Tw=10*60*1e3;class Cw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Sw(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Nf(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ct(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Tw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dc(t))}saveEventToCache(t){this.cachedEventUids.add(Dc(t)),this.lastProcessedEventTime=Date.now()}}function Dc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Nf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Sw(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nf(e);default:return!1}}/**
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
 */async function Rw(e,t={}){return qn(e,"GET","/v1/projects",t)}/**
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
 */const Ow=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kw=/^https?/;async function Pw(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Rw(e);for(const n of t)try{if(Dw(n))return}catch{}je(e,"unauthorized-domain")}function Dw(e){const t=Yi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kw.test(n))return!1;if(Ow.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const xw=new Or(3e4,6e4);function xc(){const e=lt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Nw(e){return new Promise((t,n)=>{var r,s,i;function o(){xc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xc(),n(ct(e,"network-request-failed"))},timeout:xw.get()})}if(!((s=(r=lt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=lt().gapi)===null||i===void 0)&&i.load)o();else{const a=Sb("iframefcb");return lt()[a]=()=>{gapi.load?o():n(ct(e,"network-request-failed"))},_f(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Zr=null,t})}let Zr=null;function Lw(e){return Zr=Zr||Nw(e),Zr}/**
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
 */const Mw=new Or(5e3,15e3),Bw="__/auth/iframe",Uw="emulator/auth/iframe",Fw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$w=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jw(e){const t=e.config;W(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Uo(t,Uw):`https://${e.config.authDomain}/${Bw}`,r={apiKey:t.apiKey,appName:e.name,v:Rr},s=$w.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Sr(r).slice(1)}`}async function Hw(e){const t=await Lw(e),n=lt().gapi;return W(n,e,"internal-error"),t.open({where:document.body,url:jw(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ct(e,"network-request-failed"),a=lt().setTimeout(()=>{i(o)},Mw.get());function c(){lt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Vw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ww=500,Kw=600,zw="_blank",qw="http://localhost";class Nc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gw(e,t,n,r=Ww,s=Kw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Vw),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Se().toLowerCase();n&&(a=cf(l)?zw:n),af(l)&&(t=t||qw,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(Eb(l)&&a!=="_self")return Qw(t||"",a),new Nc(null);const f=window.open(t||"",a,u);W(f,e,"popup-blocked");try{f.focus()}catch{}return new Nc(f)}function Qw(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Yw="__/auth/handler",Jw="emulator/auth/handler",Xw=encodeURIComponent("fac");async function Lc(e,t,n,r,s,i){W(e.config.authDomain,e,"auth-domain-config-required"),W(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Rr,eventId:s};if(t instanceof Vo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ky(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(t instanceof Pr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Xw}=${encodeURIComponent(c)}`:"";return`${Zw(e)}?${Sr(a).slice(1)}${l}`}function Zw({config:e}){return e.emulator?Uo(e,Jw):`https://${e.authDomain}/${Yw}`}/**
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
 */const gi="webStorageSupport";class eE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cf,this._completeRedirectFn=Iw,this._overrideRedirectResult=bw}async _openPopup(t,n,r,s){var i;Et((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Lc(t,n,r,Yi(),s);return Gw(t,o,Wo())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Lc(t,n,r,Yi(),s);return sw(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Et(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Hw(t),r=new Cw(t);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(gi,{type:gi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[gi];o!==void 0&&n(!!o),je(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pw(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return hf()||$o()||js()}}const tE=eE;var Mc="@firebase/auth",Bc="0.23.2";/**
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
 */class nE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sE(e){wt(new ft("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pf(e)},l=new Db(r,s,i,c);return Nb(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),wt(new ft("auth-internal",t=>{const n=yn(t.getProvider("auth").getImmediate());return(r=>new nE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(Mc,Bc,rE(e)),at(Mc,Bc,"esm2017")}/**
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
 */const iE=5*60,oE=Hu("authIdTokenMaxAge")||iE;let Uc=null;const aE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oE)return;const s=n==null?void 0:n.token;Uc!==s&&(Uc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kt(e=Qu()){const t=Kn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=xb(e,{popupRedirectResolver:tE,persistence:[hw,tw,Cf]}),r=Hu("authTokenSyncURL");if(r){const i=aE(r);Yb(n,i,()=>i(n.currentUser)),Qb(n,o=>i(o))}const s=My("auth");return s&&Lb(n,`http://${s}`),n}sE("Browser");const cE=y("img",{src:hm},null,-1),lE=y("h1",null,"Yu-Gi-Oh!",-1),uE={class:"searchBar"},fE=y("option",{selected:"",value:"true"},"in card name",-1),dE=y("option",{value:"false"},"in card text",-1),hE=[fE,dE],pE={class:"filters"},gE={class:"filters-icons"},mE=["src"],_E=["src"],AE=y("img",{src:gm},null,-1),yE={class:"popupFilters"},vE={class:"popupFiltersWrapper"},bE={class:"topupSection"},wE=y("span",null,"Filters",-1),EE={class:"topupRight"},IE=y("span",{class:"sortby"},"sort by",-1),TE={class:"sortByAttackandDefence"},CE={class:"sortByAttack"},SE=y("span",null,"Attack",-1),RE=["src"],OE=["src"],kE={class:"sortByDefence"},PE=y("span",null,"Defence",-1),DE=["src"],xE=["src"],NE={class:"atributeFilters"},LE={__name:"SearchComponentMobile",setup(e){const t=Je(),n=To(),r=K(""),s=K(0),i=K(15e3),o=K(0),a=K(15e3);K("block");const c=K([]);let l=K("true");const u=K(0),f=K(!0),p=K(!1),g=K(!1),_=K(!1);K(!1),K(!1),K(!1),K(!1),K(!1),K(!1),K(!1),K(t.state.levels),K(t.state.types),K(t.state.monsters),K(t.state.races),K(t.state.atributes);const w=()=>{t.commit("sortByAttackAscending")},L=()=>{t.commit("sortByAttackDescending")},O=()=>{t.commit("sortByDefenceAscending")},M=()=>{t.commit("sortByDefenceDescending")},I=()=>{wf(Kt()).then(()=>{n.push("/signin")})},C=Pe(()=>c.value);(()=>{t.commit("setDefaultForSelectedAtributes"),t.commit("setDefaultForSelectedMonsterTypes"),t.commit("setDefaultForSelectedCardTypes"),t.commit("setDefaultForSelectedLevels"),t.commit("setDefaultForSelectedRaces")})();const G=async()=>{try{const he=(await k_.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")).data.data;he.forEach(J=>{J.hasOwnProperty("attribute")||(J.attribute="undefined"),J.hasOwnProperty("name")||(J.name="undefined"),J.hasOwnProperty("race")||(J.race="undefined"),J.hasOwnProperty("type")||(J.type="undefined"),J.hasOwnProperty("atk")||(J.atk="undefined"),J.hasOwnProperty("def")||(J.def="undefined"),J.hasOwnProperty("level")||(J.level="undefined")}),c.value=he,console.log(c.value),u.value=c.value.length,console.log(u.value)}catch(_e){console.log(_e)}};mo(()=>{G()});const ye=()=>{t.commit("showGallery")},Q=()=>{t.commit("showList")},ae=()=>{console.log("Filters expanded"),document.querySelector(".popupFilters").style.display="block"},se=()=>{console.log("Filters hidden"),document.querySelector(".popupFilters").style.display="none"};return(_e,he)=>(V(),q(ge,null,[y("nav",null,[cE,lE,y("img",{onClick:I,id:"userFace",src:pm})]),y("section",uE,[Nn(y("input",{"onUpdate:modelValue":he[0]||(he[0]=J=>r.value=J),type:"search",placeholder:"Search"},null,512),[[pr,r.value]]),Nn(y("select",{"onUpdate:modelValue":he[1]||(he[1]=J=>Ee(l)?l.value=J:l=J),name:"card"},hE,512),[[kp,N(l)]])]),y("section",pE,[y("div",gE,[y("img",{onClick:ye,src:N(t).state.galleryActive?N(Ty):N(Cy)},null,8,mE),y("img",{onClick:Q,src:N(t).state.listActive?N(Sy):N(Ry)},null,8,_E)]),y("div",{class:"filters-button"},[y("button",{onClick:ae},[AE,Kl(" Filters")])])]),y("section",yE,[y("div",vE,[y("div",bE,[y("div",{class:"topupLeft"},[y("img",{onClick:se,src:mm}),wE]),y("div",EE,[y("button",{onClick:he[2]||(he[2]=J=>N(t).commit("resetAllFilters"))},"Clear Filters")])]),IE,y("div",TE,[y("div",CE,[SE,y("img",{onClick:w,src:N(t).state.ByAttackAscending?N(uc):N(lc)},null,8,RE),y("img",{onClick:L,src:N(t).state.ByAttackDescending?N(dc):N(fc)},null,8,OE)]),y("div",kE,[PE,y("img",{onClick:O,src:N(t).state.ByDefenceAscending?N(uc):N(lc)},null,8,DE),y("img",{onClick:M,src:N(t).state.ByDefenceDescending?N(dc):N(fc)},null,8,xE)])]),y("div",NE,[pe(B_),pe(qA),pe(sA),pe(J_),pe(W_),pe(fA),pe(AA),pe(OA),pe($A)])])]),pe(Iy,{class:ys({blur:N(t).state.filtersActive}),preFilterProp:N(C),searchByWhat:N(l),searchText:r.value,attackFrom:s.value,attackTo:i.value,defenceFrom:o.value,defenceTo:a.value,allCards:f.value,monsters:p.value,spells:g.value,traps:_.value},null,8,["class","preFilterProp","searchByWhat","searchText","attackFrom","attackTo","defenceFrom","defenceTo","allCards","monsters","spells","traps"])],64))}},Fc={__name:"HelloWorld",setup(e){return(t,n)=>(V(),yo(LE))}},ME=y("h1",null,"Create an accout",-1),BE={__name:"Register",setup(e){const t=K(""),n=K(""),r=To(),s=()=>{qb(Kt(),t.value,n.value).then(o=>{console.log("Zalogowano pomyślnie"),r.push("/Search")}).catch(o=>{console.log(o)})},i=()=>{const o=new it;xf(Kt(),o).then(a=>{console.log(a.user),r.push("/Search")}).catch(a=>{console.log(a)})};return(o,a)=>(V(),q(ge,null,[ME,y("p",null,[Nn(y("input",{type:"text",placeholder:"email","onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c)},null,512),[[pr,t.value]])]),y("p",null,[Nn(y("input",{type:"text",placeholder:"password","onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c)},null,512),[[pr,n.value]])]),y("p",null,[y("button",{onClick:s},"Submit")]),y("p",null,[y("button",{onClick:i},"Sign in with Google")])],64))}},UE=y("h1",null,"Sign In to an accout",-1),FE={key:0},$E={__name:"SignIn",setup(e){const t=K(""),n=K(""),r=K(),s=To(),i=()=>{Gb(Kt(),t.value,n.value).then(c=>{console.log("Zalogowano pomyślnie"),s.push("/Search")}).catch(c=>{switch(console.log(c),c.code){case"auth/invalid-email":r.value="Invalid email";break;case"auth/user-not-found":r.value="User not found";break;case"auth/wrong-password":r.value="Incorrenct Password";break;default:r.value="Email or password are incorrect";break}})},o=()=>{const c=new it;xf(Kt(),c).then(l=>{console.log(l.user),s.push("/Search")}).catch(l=>{console.log(l)})},a=()=>{wf(Kt()).then(()=>{s.push("/signin")})};return(c,l)=>(V(),q(ge,null,[UE,y("p",null,[Nn(y("input",{type:"text",placeholder:"email","onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u)},null,512),[[pr,t.value]])]),y("p",null,[Nn(y("input",{type:"text",placeholder:"password","onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u)},null,512),[[pr,n.value]])]),r.value?(V(),q("p",FE,ze(r.value),1)):$e("",!0),y("p",null,[y("button",{onClick:i},"Submit")]),y("p",null,[y("button",{onClick:o},"Sign in with Google")]),y("p",null,[y("button",{onClick:a},"Logout")])],64))}},jE=[{path:"/",name:"Home",component:Fc},{path:"/register",name:"Register",component:BE},{path:"/signin",name:"Signin",component:$E},{path:"/Search",name:"Search",component:Fc,meta:{requiresAuth:!0}}],Lf=fm({history:Sg("/Yu-Gi-Oh-Api/"),routes:jE}),HE=()=>new Promise((e,t)=>{const n=Jb(Kt(),r=>{n(),e(r),console.log(Kt().currentUser)},t)});Lf.beforeEach(async(e,t,n)=>{e.matched.some(r=>r.meta.requiresAuth)?await HE()?n():(console.log("You dont have acces"),n("/signin")):n()});var VE="firebase",WE="9.23.0";/**
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
 */at(VE,WE,"app");const KE=(e,t)=>t.some(n=>e instanceof n);let $c,jc;function zE(){return $c||($c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qE(){return jc||(jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mf=new WeakMap,Xi=new WeakMap,Bf=new WeakMap,mi=new WeakMap,zo=new WeakMap;function GE(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(zt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Mf.set(n,e)}).catch(()=>{}),zo.set(t,e),t}function QE(e){if(Xi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Xi.set(e,t)}let Zi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function YE(e){Zi=e(Zi)}function JE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(_i(this),t,...n);return Bf.set(r,t.sort?t.sort():[t]),zt(r)}:qE().includes(e)?function(...t){return e.apply(_i(this),t),zt(Mf.get(this))}:function(...t){return zt(e.apply(_i(this),t))}}function XE(e){return typeof e=="function"?JE(e):(e instanceof IDBTransaction&&QE(e),KE(e,zE())?new Proxy(e,Zi):e)}function zt(e){if(e instanceof IDBRequest)return GE(e);if(mi.has(e))return mi.get(e);const t=XE(e);return t!==e&&(mi.set(e,t),zo.set(t,e)),t}const _i=e=>zo.get(e);function ZE(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=zt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(zt(o.result),c.oldVersion,c.newVersion,zt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const eI=["get","getKey","getAll","getAllKeys","count"],tI=["put","add","delete","clear"],Ai=new Map;function Hc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ai.get(t))return Ai.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=tI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||eI.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ai.set(t,i),i}YE(e=>({...e,get:(t,n,r)=>Hc(t,n)||e.get(t,n,r),has:(t,n)=>!!Hc(t,n)||e.has(t,n)}));const Uf="@firebase/installations",qo="0.6.4";/**
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
 */const Ff=1e4,$f=`w:${qo}`,jf="FIS_v2",nI="https://firebaseinstallations.googleapis.com/v1",rI=60*60*1e3,sI="installations",iI="Installations";/**
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
 */const oI={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},gn=new An(sI,iI,oI);function Hf(e){return e instanceof ht&&e.code.includes("request-failed")}/**
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
 */function Vf({projectId:e}){return`${nI}/projects/${e}/installations`}function Wf(e){return{token:e.token,requestStatus:2,expiresIn:cI(e.expiresIn),creationTime:Date.now()}}async function Kf(e,t){const r=(await t.json()).error;return gn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function zf({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function aI(e,{refreshToken:t}){const n=zf(e);return n.append("Authorization",lI(t)),n}async function qf(e){const t=await e();return t.status>=500&&t.status<600?e():t}function cI(e){return Number(e.replace("s","000"))}function lI(e){return`${jf} ${e}`}/**
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
 */async function uI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Vf(e),s=zf(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:jf,appId:e.appId,sdkVersion:$f},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await qf(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Wf(l.authToken)}}else throw await Kf("Create Installation",c)}/**
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
 */function Gf(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function fI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const dI=/^[cdef][\w-]{21}$/,eo="";function hI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=pI(e);return dI.test(n)?n:eo}catch{return eo}}function pI(e){return fI(e).substr(0,22)}/**
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
 */function Ws(e){return`${e.appName}!${e.appId}`}/**
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
 */const Qf=new Map;function Yf(e,t){const n=Ws(e);Jf(n,t),gI(n,t)}function Jf(e,t){const n=Qf.get(e);if(n)for(const r of n)r(t)}function gI(e,t){const n=mI();n&&n.postMessage({key:e,fid:t}),_I()}let cn=null;function mI(){return!cn&&"BroadcastChannel"in self&&(cn=new BroadcastChannel("[Firebase] FID Change"),cn.onmessage=e=>{Jf(e.data.key,e.data.fid)}),cn}function _I(){Qf.size===0&&cn&&(cn.close(),cn=null)}/**
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
 */const AI="firebase-installations-database",yI=1,mn="firebase-installations-store";let yi=null;function Go(){return yi||(yi=ZE(AI,yI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(mn)}}})),yi}async function _s(e,t){const n=Ws(e),s=(await Go()).transaction(mn,"readwrite"),i=s.objectStore(mn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Yf(e,t.fid),t}async function Xf(e){const t=Ws(e),r=(await Go()).transaction(mn,"readwrite");await r.objectStore(mn).delete(t),await r.done}async function Ks(e,t){const n=Ws(e),s=(await Go()).transaction(mn,"readwrite"),i=s.objectStore(mn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Yf(e,a.fid),a}/**
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
 */async function Qo(e){let t;const n=await Ks(e.appConfig,r=>{const s=vI(r),i=bI(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===eo?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function vI(e){const t=e||{fid:hI(),registrationStatus:0};return Zf(t)}function bI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(gn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=wI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:EI(e)}:{installationEntry:t}}async function wI(e,t){try{const n=await uI(e,t);return _s(e.appConfig,n)}catch(n){throw Hf(n)&&n.customData.serverCode===409?await Xf(e.appConfig):await _s(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function EI(e){let t=await Vc(e.appConfig);for(;t.registrationStatus===1;)await Gf(100),t=await Vc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Qo(e);return r||n}return t}function Vc(e){return Ks(e,t=>{if(!t)throw gn.create("installation-not-found");return Zf(t)})}function Zf(e){return II(e)?{fid:e.fid,registrationStatus:0}:e}function II(e){return e.registrationStatus===1&&e.registrationTime+Ff<Date.now()}/**
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
 */async function TI({appConfig:e,heartbeatServiceProvider:t},n){const r=CI(e,n),s=aI(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:$f,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await qf(()=>fetch(r,a));if(c.ok){const l=await c.json();return Wf(l)}else throw await Kf("Generate Auth Token",c)}function CI(e,{fid:t}){return`${Vf(e)}/${t}/authTokens:generate`}/**
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
 */async function Yo(e,t=!1){let n;const r=await Ks(e.appConfig,i=>{if(!ed(i))throw gn.create("not-registered");const o=i.authToken;if(!t&&OI(o))return i;if(o.requestStatus===1)return n=SI(e,t),i;{if(!navigator.onLine)throw gn.create("app-offline");const a=PI(i);return n=RI(e,a),a}});return n?await n:r.authToken}async function SI(e,t){let n=await Wc(e.appConfig);for(;n.authToken.requestStatus===1;)await Gf(100),n=await Wc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Yo(e,t):r}function Wc(e){return Ks(e,t=>{if(!ed(t))throw gn.create("not-registered");const n=t.authToken;return DI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function RI(e,t){try{const n=await TI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await _s(e.appConfig,r),n}catch(n){if(Hf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Xf(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _s(e.appConfig,r)}throw n}}function ed(e){return e!==void 0&&e.registrationStatus===2}function OI(e){return e.requestStatus===2&&!kI(e)}function kI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+rI}function PI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function DI(e){return e.requestStatus===1&&e.requestTime+Ff<Date.now()}/**
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
 */async function xI(e){const t=e,{installationEntry:n,registrationPromise:r}=await Qo(t);return r?r.catch(console.error):Yo(t).catch(console.error),n.fid}/**
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
 */async function NI(e,t=!1){const n=e;return await LI(n),(await Yo(n,t)).token}async function LI(e){const{registrationPromise:t}=await Qo(e);t&&await t}/**
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
 */function MI(e){if(!e||!e.options)throw vi("App Configuration");if(!e.name)throw vi("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw vi(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function vi(e){return gn.create("missing-app-config-values",{valueName:e})}/**
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
 */const td="installations",BI="installations-internal",UI=e=>{const t=e.getProvider("app").getImmediate(),n=MI(t),r=Kn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},FI=e=>{const t=e.getProvider("app").getImmediate(),n=Kn(t,td).getImmediate();return{getId:()=>xI(n),getToken:s=>NI(n,s)}};function $I(){wt(new ft(td,UI,"PUBLIC")),wt(new ft(BI,FI,"PRIVATE"))}$I();at(Uf,qo);at(Uf,qo,"esm2017");/**
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
 */const As="analytics",jI="firebase_id",HI="origin",VI=60*1e3,WI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Jo="https://www.googletagmanager.com/gtag/js";/**
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
 */const De=new No("@firebase/analytics");/**
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
 */const KI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new An("analytics","Analytics",KI);/**
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
 */function zI(e){if(!e.startsWith(Jo)){const t=Be.create("invalid-gtag-resource",{gtagURL:e});return De.warn(t.message),""}return e}function nd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function qI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function GI(e,t){const n=qI("firebase-js-sdk-policy",{createScriptURL:zI}),r=document.createElement("script"),s=`${Jo}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function QI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function YI(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await nd(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){De.error(a)}e("config",s,i)}async function JI(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await nd(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){De.error(i)}}function XI(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await JI(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await YI(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){De.error(a)}}return s}function ZI(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=XI(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function eT(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Jo)&&n.src.includes(e))return n;return null}/**
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
 */const tT=30,nT=1e3;class rT{constructor(t={},n=nT){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const rd=new rT;function sT(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function iT(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:sT(r)},i=WI.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function oT(e,t=rd,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Be.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Be.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new lT;return setTimeout(async()=>{a.abort()},n!==void 0?n:VI),sd({appId:r,apiKey:s,measurementId:i},o,a,t)}async function sd(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=rd){var i;const{appId:o,measurementId:a}=e;try{await aT(r,t)}catch(c){if(a)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await iT(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!cT(l)){if(s.deleteThrottleMetadata(o),a)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?pc(n,s.intervalMillis,tT):pc(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),De.debug(`Calling attemptFetch again in ${u} millis`),sd(e,f,r,s)}}function aT(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Be.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function cT(e){if(!(e instanceof ht)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class lT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function uT(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function fT(){if(Wu())try{await Ku()}catch(e){return De.warn(Be.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return De.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dT(e,t,n,r,s,i,o){var a;const c=oT(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>De.error(g)),t.push(c);const l=fT().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([c,l]);eT(i)||GI(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[HI]="firebase",p.update=!0,f!=null&&(p[jI]=f),s("config",u.measurementId,p),u.measurementId}/**
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
 */class hT{constructor(t){this.app=t}_delete(){return delete or[this.app.options.appId],Promise.resolve()}}let or={},Kc=[];const zc={};let bi="dataLayer",pT="gtag",qc,id,Gc=!1;function gT(){const e=[];if(Vu()&&e.push("This is a browser extension environment."),jy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Be.create("invalid-analytics-context",{errorInfo:t});De.warn(n.message)}}function mT(e,t,n){gT();const r=e.options.appId;if(!r)throw Be.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(or[r]!=null)throw Be.create("already-exists",{id:r});if(!Gc){QI(bi);const{wrappedGtag:i,gtagCore:o}=ZI(or,Kc,zc,bi,pT);id=i,qc=o,Gc=!0}return or[r]=dT(e,Kc,zc,t,qc,bi,n),new hT(e)}function _T(e=Qu()){e=Ze(e);const t=Kn(e,As);return t.isInitialized()?t.getImmediate():AT(e)}function AT(e,t={}){const n=Kn(e,As);if(n.isInitialized()){const s=n.getImmediate();if(_r(t,n.getOptions()))return s;throw Be.create("already-initialized")}return n.initialize({options:t})}function yT(e,t,n,r){e=Ze(e),uT(id,or[e.app.options.appId],t,n,r).catch(s=>De.error(s))}const Qc="@firebase/analytics",Yc="0.10.0";function vT(){wt(new ft(As,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return mT(r,s,n)},"PUBLIC")),wt(new ft("analytics-internal",e,"PRIVATE")),at(Qc,Yc),at(Qc,Yc,"esm2017");function e(t){try{const n=t.getProvider(As).getImmediate();return{logEvent:(r,s,i)=>yT(n,r,s,i)}}catch(n){throw Be.create("interop-component-reg-failed",{reason:n})}}}vT();const bT={apiKey:"AIzaSyB0p4c5jGZDjs0RSAdtTtrb9LYolgd4iL8",authDomain:"yu-gi-oh-f2e29.firebaseapp.com",projectId:"yu-gi-oh-f2e29",storageBucket:"yu-gi-oh-f2e29.appspot.com",messagingSenderId:"342293313702",appId:"1:342293313702:web:e2105215137c53b7535c67",measurementId:"G-TRC4QKQHR6"},wT=Gu(bT),Xo=xp(Bp,{});Xo.use(lg);Xo.use(Lf);Xo.mount("#app");_T(wT);
