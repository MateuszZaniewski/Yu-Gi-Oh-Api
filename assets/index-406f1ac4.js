(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Fi(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function ji(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=de(r)?Wf(r):ji(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(de(e))return e;if(ce(e))return e}}const $f=/;(?![^(]*\))/g,Hf=/:([^]+)/,Vf=/\/\*.*?\*\//gs;function Wf(e){const t={};return e.replace(Vf,"").split($f).forEach(n=>{if(n){const r=n.split(Hf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function $i(e){let t="";if(de(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=$i(e[n]);r&&(t+=r+" ")}else if(ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const zf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kf=Fi(zf);function Oc(e){return!!e||e===""}const Rr=e=>de(e)?e:e==null?"":z(e)||ce(e)&&(e.toString===Nc||!K(e.toString))?JSON.stringify(e,Pc,2):String(e),Pc=(e,t)=>t&&t.__v_isRef?Pc(e,t.value):yn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:kc(t)?{[`Set(${t.size})`]:[...t.values()]}:ce(t)&&!z(t)&&!xc(t)?String(t):t,ae={},_n=[],We=()=>{},qf=()=>!1,Gf=/^on[^a-z]/,ss=e=>Gf.test(e),Hi=e=>e.startsWith("onUpdate:"),ve=Object.assign,Vi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Yf=Object.prototype.hasOwnProperty,Y=(e,t)=>Yf.call(e,t),z=Array.isArray,yn=e=>is(e)==="[object Map]",kc=e=>is(e)==="[object Set]",K=e=>typeof e=="function",de=e=>typeof e=="string",Wi=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",Dc=e=>ce(e)&&K(e.then)&&K(e.catch),Nc=Object.prototype.toString,is=e=>Nc.call(e),Qf=e=>is(e).slice(8,-1),xc=e=>is(e)==="[object Object]",zi=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Or=Fi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),os=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Jf=/-(\w)/g,it=os(e=>e.replace(Jf,(t,n)=>n?n.toUpperCase():"")),Xf=/\B([A-Z])/g,Rn=os(e=>e.replace(Xf,"-$1").toLowerCase()),as=os(e=>e.charAt(0).toUpperCase()+e.slice(1)),Os=os(e=>e?`on${as(e)}`:""),Qn=(e,t)=>!Object.is(e,t),Pr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Hr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ii=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let $o;const Zf=()=>$o||($o=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let je;class ed{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function td(e,t=je){t&&t.active&&t.effects.push(e)}function nd(){return je}const Ki=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Lc=e=>(e.w&Bt)>0,Mc=e=>(e.n&Bt)>0,rd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Bt},sd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Lc(s)&&!Mc(s)?s.delete(e):t[n++]=s,s.w&=~Bt,s.n&=~Bt}t.length=n}},oi=new WeakMap;let $n=0,Bt=1;const ai=30;let $e;const Jt=Symbol(""),ci=Symbol("");class qi{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,td(this,r)}run(){if(!this.active)return this.fn();let t=$e,n=kt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=$e,$e=this,kt=!0,Bt=1<<++$n,$n<=ai?rd(this):Ho(this),this.fn()}finally{$n<=ai&&sd(this),Bt=1<<--$n,$e=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(Ho(this),this.onStop&&this.onStop(),this.active=!1)}}function Ho(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let kt=!0;const Bc=[];function On(){Bc.push(kt),kt=!1}function Pn(){const e=Bc.pop();kt=e===void 0?!0:e}function Pe(e,t,n){if(kt&&$e){let r=oi.get(e);r||oi.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Ki()),Uc(s)}}function Uc(e,t){let n=!1;$n<=ai?Mc(e)||(e.n|=Bt,n=!Lc(e)):n=!e.has($e),n&&(e.add($e),$e.deps.push(e))}function gt(e,t,n,r,s,i){const o=oi.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&z(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":z(e)?zi(n)&&a.push(o.get("length")):(a.push(o.get(Jt)),yn(e)&&a.push(o.get(ci)));break;case"delete":z(e)||(a.push(o.get(Jt)),yn(e)&&a.push(o.get(ci)));break;case"set":yn(e)&&a.push(o.get(Jt));break}if(a.length===1)a[0]&&li(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);li(Ki(c))}}function li(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&Vo(r);for(const r of n)r.computed||Vo(r)}function Vo(e,t){(e!==$e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const id=Fi("__proto__,__v_isRef,__isVue"),Fc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wi)),od=Gi(),ad=Gi(!1,!0),cd=Gi(!0),Wo=ld();function ld(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){On();const r=J(this)[t].apply(this,n);return Pn(),r}}),e}function ud(e){const t=J(this);return Pe(t,"has",e),t.hasOwnProperty(e)}function Gi(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?Sd:Wc:t?Vc:Hc).get(r))return r;const o=z(r);if(!e){if(o&&Y(Wo,s))return Reflect.get(Wo,s,i);if(s==="hasOwnProperty")return ud}const a=Reflect.get(r,s,i);return(Wi(s)?Fc.has(s):id(s))||(e||Pe(r,"get",s),t)?a:Ae(a)?o&&zi(s)?a:a.value:ce(a)?e?zc(a):kn(a):a}}const fd=jc(),dd=jc(!0);function jc(e=!1){return function(n,r,s,i){let o=n[r];if(En(o)&&Ae(o)&&!Ae(s))return!1;if(!e&&(!Vr(s)&&!En(s)&&(o=J(o),s=J(s)),!z(n)&&Ae(o)&&!Ae(s)))return o.value=s,!0;const a=z(n)&&zi(r)?Number(r)<n.length:Y(n,r),c=Reflect.set(n,r,s,i);return n===J(i)&&(a?Qn(s,o)&&gt(n,"set",r,s):gt(n,"add",r,s)),c}}function hd(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&gt(e,"delete",t,void 0),r}function pd(e,t){const n=Reflect.has(e,t);return(!Wi(t)||!Fc.has(t))&&Pe(e,"has",t),n}function gd(e){return Pe(e,"iterate",z(e)?"length":Jt),Reflect.ownKeys(e)}const $c={get:od,set:fd,deleteProperty:hd,has:pd,ownKeys:gd},md={get:cd,set(e,t){return!0},deleteProperty(e,t){return!0}},_d=ve({},$c,{get:ad,set:dd}),Yi=e=>e,cs=e=>Reflect.getPrototypeOf(e);function br(e,t,n=!1,r=!1){e=e.__v_raw;const s=J(e),i=J(t);n||(t!==i&&Pe(s,"get",t),Pe(s,"get",i));const{has:o}=cs(s),a=r?Yi:n?Xi:Jn;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function wr(e,t=!1){const n=this.__v_raw,r=J(n),s=J(e);return t||(e!==s&&Pe(r,"has",e),Pe(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Er(e,t=!1){return e=e.__v_raw,!t&&Pe(J(e),"iterate",Jt),Reflect.get(e,"size",e)}function zo(e){e=J(e);const t=J(this);return cs(t).has.call(t,e)||(t.add(e),gt(t,"add",e,e)),this}function Ko(e,t){t=J(t);const n=J(this),{has:r,get:s}=cs(n);let i=r.call(n,e);i||(e=J(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Qn(t,o)&&gt(n,"set",e,t):gt(n,"add",e,t),this}function qo(e){const t=J(this),{has:n,get:r}=cs(t);let s=n.call(t,e);s||(e=J(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&gt(t,"delete",e,void 0),i}function Go(){const e=J(this),t=e.size!==0,n=e.clear();return t&&gt(e,"clear",void 0,void 0),n}function Ir(e,t){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=t?Yi:e?Xi:Jn;return!e&&Pe(a,"iterate",Jt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Tr(e,t,n){return function(...r){const s=this.__v_raw,i=J(s),o=yn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?Yi:t?Xi:Jn;return!t&&Pe(i,"iterate",c?ci:Jt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function bt(e){return function(...t){return e==="delete"?!1:this}}function yd(){const e={get(i){return br(this,i)},get size(){return Er(this)},has:wr,add:zo,set:Ko,delete:qo,clear:Go,forEach:Ir(!1,!1)},t={get(i){return br(this,i,!1,!0)},get size(){return Er(this)},has:wr,add:zo,set:Ko,delete:qo,clear:Go,forEach:Ir(!1,!0)},n={get(i){return br(this,i,!0)},get size(){return Er(this,!0)},has(i){return wr.call(this,i,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:Ir(!0,!1)},r={get(i){return br(this,i,!0,!0)},get size(){return Er(this,!0)},has(i){return wr.call(this,i,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:Ir(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Tr(i,!1,!1),n[i]=Tr(i,!0,!1),t[i]=Tr(i,!1,!0),r[i]=Tr(i,!0,!0)}),[e,n,t,r]}const[Ad,vd,bd,wd]=yd();function Qi(e,t){const n=t?e?wd:bd:e?vd:Ad;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Y(n,s)&&s in r?n:r,s,i)}const Ed={get:Qi(!1,!1)},Id={get:Qi(!1,!0)},Td={get:Qi(!0,!1)},Hc=new WeakMap,Vc=new WeakMap,Wc=new WeakMap,Sd=new WeakMap;function Cd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rd(e){return e.__v_skip||!Object.isExtensible(e)?0:Cd(Qf(e))}function kn(e){return En(e)?e:Ji(e,!1,$c,Ed,Hc)}function Od(e){return Ji(e,!1,_d,Id,Vc)}function zc(e){return Ji(e,!0,md,Td,Wc)}function Ji(e,t,n,r,s){if(!ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Rd(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function An(e){return En(e)?An(e.__v_raw):!!(e&&e.__v_isReactive)}function En(e){return!!(e&&e.__v_isReadonly)}function Vr(e){return!!(e&&e.__v_isShallow)}function Kc(e){return An(e)||En(e)}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function qc(e){return Hr(e,"__v_skip",!0),e}const Jn=e=>ce(e)?kn(e):e,Xi=e=>ce(e)?zc(e):e;function Gc(e){kt&&$e&&(e=J(e),Uc(e.dep||(e.dep=Ki())))}function Yc(e,t){e=J(e);const n=e.dep;n&&li(n)}function Ae(e){return!!(e&&e.__v_isRef===!0)}function G(e){return Qc(e,!1)}function Pd(e){return Qc(e,!0)}function Qc(e,t){return Ae(e)?e:new kd(e,t)}class kd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:Jn(t)}get value(){return Gc(this),this._value}set value(t){const n=this.__v_isShallow||Vr(t)||En(t);t=n?t:J(t),Qn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Jn(t),Yc(this))}}function ge(e){return Ae(e)?e.value:e}const Dd={get:(e,t,n)=>ge(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ae(s)&&!Ae(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Jc(e){return An(e)?e:new Proxy(e,Dd)}var Xc;class Nd{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Xc]=!1,this._dirty=!0,this.effect=new qi(t,()=>{this._dirty||(this._dirty=!0,Yc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=J(this);return Gc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Xc="__v_isReadonly";function xd(e,t,n=!1){let r,s;const i=K(e);return i?(r=e,s=We):(r=e.get,s=e.set),new Nd(r,s,i||!s,n)}function Dt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){ls(i,t,n)}return s}function Be(e,t,n,r){if(K(e)){const i=Dt(e,t,n,r);return i&&Dc(i)&&i.catch(o=>{ls(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Be(e[i],t,n,r));return s}function ls(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Dt(c,null,10,[e,o,a]);return}}Ld(e,n,s,r)}function Ld(e,t,n,r=!0){console.error(e)}let Xn=!1,ui=!1;const ye=[];let et=0;const vn=[];let ut=null,zt=0;const Zc=Promise.resolve();let Zi=null;function el(e){const t=Zi||Zc;return e?t.then(this?e.bind(this):e):t}function Md(e){let t=et+1,n=ye.length;for(;t<n;){const r=t+n>>>1;Zn(ye[r])<e?t=r+1:n=r}return t}function eo(e){(!ye.length||!ye.includes(e,Xn&&e.allowRecurse?et+1:et))&&(e.id==null?ye.push(e):ye.splice(Md(e.id),0,e),tl())}function tl(){!Xn&&!ui&&(ui=!0,Zi=Zc.then(rl))}function Bd(e){const t=ye.indexOf(e);t>et&&ye.splice(t,1)}function Ud(e){z(e)?vn.push(...e):(!ut||!ut.includes(e,e.allowRecurse?zt+1:zt))&&vn.push(e),tl()}function Yo(e,t=Xn?et+1:0){for(;t<ye.length;t++){const n=ye[t];n&&n.pre&&(ye.splice(t,1),t--,n())}}function nl(e){if(vn.length){const t=[...new Set(vn)];if(vn.length=0,ut){ut.push(...t);return}for(ut=t,ut.sort((n,r)=>Zn(n)-Zn(r)),zt=0;zt<ut.length;zt++)ut[zt]();ut=null,zt=0}}const Zn=e=>e.id==null?1/0:e.id,Fd=(e,t)=>{const n=Zn(e)-Zn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function rl(e){ui=!1,Xn=!0,ye.sort(Fd);const t=We;try{for(et=0;et<ye.length;et++){const n=ye[et];n&&n.active!==!1&&Dt(n,null,14)}}finally{et=0,ye.length=0,nl(),Xn=!1,Zi=null,(ye.length||vn.length)&&rl()}}function jd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||ae;p&&(s=n.map(g=>de(g)?g.trim():g)),f&&(s=n.map(ii))}let a,c=r[a=Os(t)]||r[a=Os(it(t))];!c&&i&&(c=r[a=Os(Rn(t))]),c&&Be(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Be(l,e,6,s)}}function sl(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!K(e)){const c=l=>{const u=sl(l,t,!0);u&&(a=!0,ve(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ce(e)&&r.set(e,null),null):(z(i)?i.forEach(c=>o[c]=null):ve(o,i),ce(e)&&r.set(e,o),o)}function us(e,t){return!e||!ss(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Rn(t))||Y(e,t))}let xe=null,il=null;function Wr(e){const t=xe;return xe=e,il=e&&e.type.__scopeId||null,t}function $d(e,t=xe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ia(-1);const i=Wr(t);let o;try{o=e(...s)}finally{Wr(i),r._d&&ia(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ps(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:_,inheritAttrs:b}=e;let N,R;const x=Wr(e);try{if(n.shapeFlag&4){const T=s||r;N=Ze(u.call(T,T,f,i,g,p,_)),R=c}else{const T=t;N=Ze(T.length>1?T(i,{attrs:c,slots:a,emit:l}):T(i,null)),R=t.props?c:Hd(c)}}catch(T){zn.length=0,ls(T,e,1),N=Re(Ke)}let E=N;if(R&&b!==!1){const T=Object.keys(R),{shapeFlag:$}=E;T.length&&$&7&&(o&&T.some(Hi)&&(R=Vd(R,o)),E=Ut(E,R))}return n.dirs&&(E=Ut(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),N=E,Wr(x),N}const Hd=e=>{let t;for(const n in e)(n==="class"||n==="style"||ss(n))&&((t||(t={}))[n]=e[n]);return t},Vd=(e,t)=>{const n={};for(const r in e)(!Hi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Wd(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Qo(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!us(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Qo(r,o,l):!0:!!o;return!1}function Qo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!us(n,i))return!0}return!1}function zd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Kd=e=>e.__isSuspense;function qd(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Ud(e)}function kr(e,t){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[e]=t}}function ze(e,t,n=!1){const r=ue||xe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&K(t)?t.call(r.proxy):t}}const Sr={};function Nt(e,t,n){return ol(e,t,n)}function ol(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ae){const a=nd()===(ue==null?void 0:ue.scope)?ue:null;let c,l=!1,u=!1;if(Ae(e)?(c=()=>e.value,l=Vr(e)):An(e)?(c=()=>e,r=!0):z(e)?(u=!0,l=e.some(E=>An(E)||Vr(E)),c=()=>e.map(E=>{if(Ae(E))return E.value;if(An(E))return Gt(E);if(K(E))return Dt(E,a,2)})):K(e)?t?c=()=>Dt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Be(e,a,3,[p])}:c=We,t&&r){const E=c;c=()=>Gt(E())}let f,p=E=>{f=R.onStop=()=>{Dt(E,a,4)}},g;if(nr)if(p=We,t?n&&Be(t,a,3,[c(),u?[]:void 0,p]):c(),s==="sync"){const E=Wh();g=E.__watcherHandles||(E.__watcherHandles=[])}else return We;let _=u?new Array(e.length).fill(Sr):Sr;const b=()=>{if(R.active)if(t){const E=R.run();(r||l||(u?E.some((T,$)=>Qn(T,_[$])):Qn(E,_)))&&(f&&f(),Be(t,a,3,[E,_===Sr?void 0:u&&_[0]===Sr?[]:_,p]),_=E)}else R.run()};b.allowRecurse=!!t;let N;s==="sync"?N=b:s==="post"?N=()=>Se(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),N=()=>eo(b));const R=new qi(c,N);t?n?b():_=R.run():s==="post"?Se(R.run.bind(R),a&&a.suspense):R.run();const x=()=>{R.stop(),a&&a.scope&&Vi(a.scope.effects,R)};return g&&g.push(x),x}function Gd(e,t,n){const r=this.proxy,s=de(e)?e.includes(".")?al(r,e):()=>r[e]:e.bind(r,r);let i;K(t)?i=t:(i=t.handler,n=t);const o=ue;In(this);const a=ol(s,i.bind(r),n);return o?In(o):Xt(),a}function al(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Gt(e,t){if(!ce(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ae(e))Gt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)Gt(e[n],t);else if(kc(e)||yn(e))e.forEach(n=>{Gt(n,t)});else if(xc(e))for(const n in e)Gt(e[n],t);return e}function Yd(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return to(()=>{e.isMounted=!0}),dl(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],Qd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(e,{slots:t}){const n=Mh(),r=Yd();let s;return()=>{const i=t.default&&ll(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==Ke){o=b;break}}const a=J(e),{mode:c}=a;if(r.isLeaving)return ks(o);const l=Jo(o);if(!l)return ks(o);const u=fi(l,a,r,n);di(l,u);const f=n.subTree,p=f&&Jo(f);let g=!1;const{getTransitionKey:_}=l.type;if(_){const b=_();s===void 0?s=b:b!==s&&(s=b,g=!0)}if(p&&p.type!==Ke&&(!Kt(l,p)||g)){const b=fi(p,a,r,n);if(di(p,b),c==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ks(o);c==="in-out"&&l.type!==Ke&&(b.delayLeave=(N,R,x)=>{const E=cl(r,p);E[String(p.key)]=p,N._leaveCb=()=>{R(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},Jd=Qd;function cl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function fi(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:b,onAppear:N,onAfterAppear:R,onAppearCancelled:x}=t,E=String(e.key),T=cl(n,e),$=(M,oe)=>{M&&Be(M,r,9,oe)},V=(M,oe)=>{const ne=oe[1];$(M,oe),z(M)?M.every(me=>me.length<=1)&&ne():M.length<=1&&ne()},le={mode:i,persisted:o,beforeEnter(M){let oe=a;if(!n.isMounted)if(s)oe=b||a;else return;M._leaveCb&&M._leaveCb(!0);const ne=T[E];ne&&Kt(e,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),$(oe,[M])},enter(M){let oe=c,ne=l,me=u;if(!n.isMounted)if(s)oe=N||c,ne=R||l,me=x||u;else return;let De=!1;const we=M._enterCb=jt=>{De||(De=!0,jt?$(me,[M]):$(ne,[M]),le.delayedLeave&&le.delayedLeave(),M._enterCb=void 0)};oe?V(oe,[M,we]):we()},leave(M,oe){const ne=String(e.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return oe();$(f,[M]);let me=!1;const De=M._leaveCb=we=>{me||(me=!0,oe(),we?$(_,[M]):$(g,[M]),M._leaveCb=void 0,T[ne]===e&&delete T[ne])};T[ne]=e,p?V(p,[M,De]):De()},clone(M){return fi(M,t,n,r)}};return le}function ks(e){if(fs(e))return e=Ut(e),e.children=null,e}function Jo(e){return fs(e)?e.children?e.children[0]:void 0:e}function di(e,t){e.shapeFlag&6&&e.component?di(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ll(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ie?(o.patchFlag&128&&s++,r=r.concat(ll(o.children,t,a))):(t||o.type!==Ke)&&r.push(a!=null?Ut(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ul(e){return K(e)?{setup:e,name:e.name}:e}const Dr=e=>!!e.type.__asyncLoader,fs=e=>e.type.__isKeepAlive;function Xd(e,t){fl(e,"a",t)}function Zd(e,t){fl(e,"da",t)}function fl(e,t,n=ue){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ds(t,r,n),n){let s=n.parent;for(;s&&s.parent;)fs(s.parent.vnode)&&eh(r,t,n,s),s=s.parent}}function eh(e,t,n,r){const s=ds(t,e,r,!0);hl(()=>{Vi(r[t],s)},n)}function ds(e,t,n=ue,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;On(),In(n);const a=Be(t,n,e,o);return Xt(),Pn(),a});return r?s.unshift(i):s.push(i),i}}const yt=e=>(t,n=ue)=>(!nr||e==="sp")&&ds(e,(...r)=>t(...r),n),th=yt("bm"),to=yt("m"),nh=yt("bu"),rh=yt("u"),dl=yt("bum"),hl=yt("um"),sh=yt("sp"),ih=yt("rtg"),oh=yt("rtc");function ah(e,t=ue){ds("ec",e,t)}function er(e,t){const n=xe;if(n===null)return e;const r=gs(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=ae]=t[i];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&Gt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function $t(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(On(),Be(c,n,8,[e.el,a,e,t]),Pn())}}const pl="components";function ch(e,t){return uh(pl,e,!0,t)||e}const lh=Symbol();function uh(e,t,n=!0,r=!1){const s=xe||ue;if(s){const i=s.type;if(e===pl){const a=$h(i,!1);if(a&&(a===t||a===it(t)||a===as(it(t))))return i}const o=Xo(s[e]||i[e],t)||Xo(s.appContext[e],t);return!o&&r?i:o}}function Xo(e,t){return e&&(e[t]||e[it(t)]||e[as(it(t))])}function fh(e,t,n,r){let s;const i=n&&n[r];if(z(e)||de(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(ce(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const hi=e=>e?Cl(e)?gs(e)||e.proxy:hi(e.parent):null,Wn=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hi(e.parent),$root:e=>hi(e.root),$emit:e=>e.emit,$options:e=>no(e),$forceUpdate:e=>e.f||(e.f=()=>eo(e.update)),$nextTick:e=>e.n||(e.n=el.bind(e.proxy)),$watch:e=>Gd.bind(e)}),Ds=(e,t)=>e!==ae&&!e.__isScriptSetup&&Y(e,t),dh={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ds(r,t))return o[t]=1,r[t];if(s!==ae&&Y(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&Y(l,t))return o[t]=3,i[t];if(n!==ae&&Y(n,t))return o[t]=4,n[t];pi&&(o[t]=0)}}const u=Wn[t];let f,p;if(u)return t==="$attrs"&&Pe(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ae&&Y(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,Y(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ds(s,t)?(s[t]=n,!0):r!==ae&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==ae&&Y(e,o)||Ds(t,o)||(a=i[0])&&Y(a,o)||Y(r,o)||Y(Wn,o)||Y(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let pi=!0;function hh(e){const t=no(e),n=e.proxy,r=e.ctx;pi=!1,t.beforeCreate&&Zo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:_,activated:b,deactivated:N,beforeDestroy:R,beforeUnmount:x,destroyed:E,unmounted:T,render:$,renderTracked:V,renderTriggered:le,errorCaptured:M,serverPrefetch:oe,expose:ne,inheritAttrs:me,components:De,directives:we,filters:jt}=t;if(l&&ph(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const re in o){const X=o[re];K(X)&&(r[re]=X.bind(n))}if(s){const re=s.call(n,n);ce(re)&&(e.data=kn(re))}if(pi=!0,i)for(const re in i){const X=i[re],ct=K(X)?X.bind(n,n):K(X.get)?X.get.bind(n,n):We,vt=!K(X)&&K(X.set)?X.set.bind(n):We,Qe=Ce({get:ct,set:vt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:Te=>Qe.value=Te})}if(a)for(const re in a)gl(a[re],r,n,re);if(c){const re=K(c)?c.call(n):c;Reflect.ownKeys(re).forEach(X=>{kr(X,re[X])})}u&&Zo(u,e,"c");function pe(re,X){z(X)?X.forEach(ct=>re(ct.bind(n))):X&&re(X.bind(n))}if(pe(th,f),pe(to,p),pe(nh,g),pe(rh,_),pe(Xd,b),pe(Zd,N),pe(ah,M),pe(oh,V),pe(ih,le),pe(dl,x),pe(hl,T),pe(sh,oe),z(ne))if(ne.length){const re=e.exposed||(e.exposed={});ne.forEach(X=>{Object.defineProperty(re,X,{get:()=>n[X],set:ct=>n[X]=ct})})}else e.exposed||(e.exposed={});$&&e.render===We&&(e.render=$),me!=null&&(e.inheritAttrs=me),De&&(e.components=De),we&&(e.directives=we)}function ph(e,t,n=We,r=!1){z(e)&&(e=gi(e));for(const s in e){const i=e[s];let o;ce(i)?"default"in i?o=ze(i.from||s,i.default,!0):o=ze(i.from||s):o=ze(i),Ae(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function Zo(e,t,n){Be(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function gl(e,t,n,r){const s=r.includes(".")?al(n,r):()=>n[r];if(de(e)){const i=t[e];K(i)&&Nt(s,i)}else if(K(e))Nt(s,e.bind(n));else if(ce(e))if(z(e))e.forEach(i=>gl(i,t,n,r));else{const i=K(e.handler)?e.handler.bind(n):t[e.handler];K(i)&&Nt(s,i,e)}}function no(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>zr(c,l,o,!0)),zr(c,t,o)),ce(t)&&i.set(t,c),c}function zr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&zr(e,i,n,!0),s&&s.forEach(o=>zr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=gh[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const gh={data:ea,props:Vt,emits:Vt,methods:Vt,computed:Vt,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:Vt,directives:Vt,watch:_h,provide:ea,inject:mh};function ea(e,t){return t?e?function(){return ve(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function mh(e,t){return Vt(gi(e),gi(t))}function gi(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ee(e,t){return e?[...new Set([].concat(e,t))]:t}function Vt(e,t){return e?ve(ve(Object.create(null),e),t):t}function _h(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const r in t)n[r]=Ee(e[r],t[r]);return n}function yh(e,t,n,r=!1){const s={},i={};Hr(i,ps,1),e.propsDefaults=Object.create(null),ml(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Od(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Ah(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=J(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(us(e.emitsOptions,p))continue;const g=t[p];if(c)if(Y(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const _=it(p);s[_]=mi(c,a,_,g,e,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{ml(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!Y(t,f)&&((u=Rn(f))===f||!Y(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=mi(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!Y(t,f))&&(delete i[f],l=!0)}l&&gt(e,"set","$attrs")}function ml(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Or(c))continue;const l=t[c];let u;s&&Y(s,u=it(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:us(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||ae;for(let u=0;u<i.length;u++){const f=i[u];n[f]=mi(s,c,f,l[f],e,!Y(l,f))}}return o}function mi(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Y(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&K(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(In(s),r=l[n]=c.call(null,t),Xt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rn(n))&&(r=!0))}return r}function _l(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!K(e)){const u=f=>{c=!0;const[p,g]=_l(f,t,!0);ve(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return ce(e)&&r.set(e,_n),_n;if(z(i))for(let u=0;u<i.length;u++){const f=it(i[u]);ta(f)&&(o[f]=ae)}else if(i)for(const u in i){const f=it(u);if(ta(f)){const p=i[u],g=o[f]=z(p)||K(p)?{type:p}:Object.assign({},p);if(g){const _=sa(Boolean,g.type),b=sa(String,g.type);g[0]=_>-1,g[1]=b<0||_<b,(_>-1||Y(g,"default"))&&a.push(f)}}}const l=[o,a];return ce(e)&&r.set(e,l),l}function ta(e){return e[0]!=="$"}function na(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ra(e,t){return na(e)===na(t)}function sa(e,t){return z(t)?t.findIndex(n=>ra(n,e)):K(t)&&ra(t,e)?0:-1}const yl=e=>e[0]==="_"||e==="$stable",ro=e=>z(e)?e.map(Ze):[Ze(e)],vh=(e,t,n)=>{if(t._n)return t;const r=$d((...s)=>ro(t(...s)),n);return r._c=!1,r},Al=(e,t,n)=>{const r=e._ctx;for(const s in e){if(yl(s))continue;const i=e[s];if(K(i))t[s]=vh(s,i,r);else if(i!=null){const o=ro(i);t[s]=()=>o}}},vl=(e,t)=>{const n=ro(t);e.slots.default=()=>n},bh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=J(t),Hr(t,"_",n)):Al(t,e.slots={})}else e.slots={},t&&vl(e,t);Hr(e.slots,ps,1)},wh=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ae;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(ve(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Al(t,s)),o=t}else t&&(vl(e,t),o={default:1});if(i)for(const a in s)!yl(a)&&!(a in o)&&delete s[a]};function bl(){return{app:null,config:{isNativeTag:qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Eh=0;function Ih(e,t){return function(r,s=null){K(r)||(r=Object.assign({},r)),s!=null&&!ce(s)&&(s=null);const i=bl(),o=new Set;let a=!1;const c=i.app={_uid:Eh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zh,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(c,...u)):K(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=Re(r,s);return p.appContext=i,u&&t?t(p,l):e(p,l,f),a=!0,c._container=l,l.__vue_app__=c,gs(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function _i(e,t,n,r,s=!1){if(z(e)){e.forEach((p,g)=>_i(p,t&&(z(t)?t[g]:t),n,r,s));return}if(Dr(r)&&!s)return;const i=r.shapeFlag&4?gs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ae?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(de(l)?(u[l]=null,Y(f,l)&&(f[l]=null)):Ae(l)&&(l.value=null)),K(c))Dt(c,a,12,[o,u]);else{const p=de(c),g=Ae(c);if(p||g){const _=()=>{if(e.f){const b=p?Y(f,c)?f[c]:u[c]:c.value;s?z(b)&&Vi(b,i):z(b)?b.includes(i)||b.push(i):p?(u[c]=[i],Y(f,c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else p?(u[c]=o,Y(f,c)&&(f[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(_.id=-1,Se(_,n)):_()}}}const Se=qd;function Th(e){return Sh(e)}function Sh(e,t){const n=Zf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=We,insertStaticContent:_}=e,b=(d,h,m,y=null,w=null,I=null,k=!1,C=null,O=!!h.dynamicChildren)=>{if(d===h)return;d&&!Kt(d,h)&&(y=v(d),Te(d,w,I,!0),d=null),h.patchFlag===-2&&(O=!1,h.dynamicChildren=null);const{type:S,ref:F,shapeFlag:L}=h;switch(S){case hs:N(d,h,m,y);break;case Ke:R(d,h,m,y);break;case Ns:d==null&&x(h,m,y,k);break;case Ie:De(d,h,m,y,w,I,k,C,O);break;default:L&1?$(d,h,m,y,w,I,k,C,O):L&6?we(d,h,m,y,w,I,k,C,O):(L&64||L&128)&&S.process(d,h,m,y,w,I,k,C,O,P)}F!=null&&w&&_i(F,d&&d.ref,I,h||d,!h)},N=(d,h,m,y)=>{if(d==null)r(h.el=a(h.children),m,y);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},R=(d,h,m,y)=>{d==null?r(h.el=c(h.children||""),m,y):h.el=d.el},x=(d,h,m,y)=>{[d.el,d.anchor]=_(d.children,h,m,y,d.el,d.anchor)},E=({el:d,anchor:h},m,y)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,y),d=w;r(h,m,y)},T=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},$=(d,h,m,y,w,I,k,C,O)=>{k=k||h.type==="svg",d==null?V(h,m,y,w,I,k,C,O):oe(d,h,w,I,k,C,O)},V=(d,h,m,y,w,I,k,C)=>{let O,S;const{type:F,props:L,shapeFlag:j,transition:W,dirs:q}=d;if(O=d.el=o(d.type,I,L&&L.is,L),j&8?u(O,d.children):j&16&&M(d.children,O,null,y,w,I&&F!=="foreignObject",k,C),q&&$t(d,null,y,"created"),le(O,d,d.scopeId,k,y),L){for(const te in L)te!=="value"&&!Or(te)&&i(O,te,null,L[te],I,d.children,y,w,_e);"value"in L&&i(O,"value",null,L.value),(S=L.onVnodeBeforeMount)&&Xe(S,y,d)}q&&$t(d,null,y,"beforeMount");const ie=(!w||w&&!w.pendingBranch)&&W&&!W.persisted;ie&&W.beforeEnter(O),r(O,h,m),((S=L&&L.onVnodeMounted)||ie||q)&&Se(()=>{S&&Xe(S,y,d),ie&&W.enter(O),q&&$t(d,null,y,"mounted")},w)},le=(d,h,m,y,w)=>{if(m&&g(d,m),y)for(let I=0;I<y.length;I++)g(d,y[I]);if(w){let I=w.subTree;if(h===I){const k=w.vnode;le(d,k,k.scopeId,k.slotScopeIds,w.parent)}}},M=(d,h,m,y,w,I,k,C,O=0)=>{for(let S=O;S<d.length;S++){const F=d[S]=C?Tt(d[S]):Ze(d[S]);b(null,F,h,m,y,w,I,k,C)}},oe=(d,h,m,y,w,I,k)=>{const C=h.el=d.el;let{patchFlag:O,dynamicChildren:S,dirs:F}=h;O|=d.patchFlag&16;const L=d.props||ae,j=h.props||ae;let W;m&&Ht(m,!1),(W=j.onVnodeBeforeUpdate)&&Xe(W,m,h,d),F&&$t(h,d,m,"beforeUpdate"),m&&Ht(m,!0);const q=w&&h.type!=="foreignObject";if(S?ne(d.dynamicChildren,S,C,m,y,q,I):k||X(d,h,C,null,m,y,q,I,!1),O>0){if(O&16)me(C,h,L,j,m,y,w);else if(O&2&&L.class!==j.class&&i(C,"class",null,j.class,w),O&4&&i(C,"style",L.style,j.style,w),O&8){const ie=h.dynamicProps;for(let te=0;te<ie.length;te++){const fe=ie[te],Fe=L[fe],dn=j[fe];(dn!==Fe||fe==="value")&&i(C,fe,Fe,dn,w,d.children,m,y,_e)}}O&1&&d.children!==h.children&&u(C,h.children)}else!k&&S==null&&me(C,h,L,j,m,y,w);((W=j.onVnodeUpdated)||F)&&Se(()=>{W&&Xe(W,m,h,d),F&&$t(h,d,m,"updated")},y)},ne=(d,h,m,y,w,I,k)=>{for(let C=0;C<h.length;C++){const O=d[C],S=h[C],F=O.el&&(O.type===Ie||!Kt(O,S)||O.shapeFlag&70)?f(O.el):m;b(O,S,F,null,y,w,I,k,!0)}},me=(d,h,m,y,w,I,k)=>{if(m!==y){if(m!==ae)for(const C in m)!Or(C)&&!(C in y)&&i(d,C,m[C],null,k,h.children,w,I,_e);for(const C in y){if(Or(C))continue;const O=y[C],S=m[C];O!==S&&C!=="value"&&i(d,C,S,O,k,h.children,w,I,_e)}"value"in y&&i(d,"value",m.value,y.value)}},De=(d,h,m,y,w,I,k,C,O)=>{const S=h.el=d?d.el:a(""),F=h.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:W}=h;W&&(C=C?C.concat(W):W),d==null?(r(S,m,y),r(F,m,y),M(h.children,m,F,w,I,k,C,O)):L>0&&L&64&&j&&d.dynamicChildren?(ne(d.dynamicChildren,j,m,w,I,k,C),(h.key!=null||w&&h===w.subTree)&&wl(d,h,!0)):X(d,h,m,F,w,I,k,C,O)},we=(d,h,m,y,w,I,k,C,O)=>{h.slotScopeIds=C,d==null?h.shapeFlag&512?w.ctx.activate(h,m,y,k,O):jt(h,m,y,w,I,k,O):ln(d,h,O)},jt=(d,h,m,y,w,I,k)=>{const C=d.component=Lh(d,y,w);if(fs(d)&&(C.ctx.renderer=P),Bh(C),C.asyncDep){if(w&&w.registerDep(C,pe),!d.el){const O=C.subTree=Re(Ke);R(null,O,h,m)}return}pe(C,d,h,m,w,I,k)},ln=(d,h,m)=>{const y=h.component=d.component;if(Wd(d,h,m))if(y.asyncDep&&!y.asyncResolved){re(y,h,m);return}else y.next=h,Bd(y.update),y.update();else h.el=d.el,y.vnode=h},pe=(d,h,m,y,w,I,k)=>{const C=()=>{if(d.isMounted){let{next:F,bu:L,u:j,parent:W,vnode:q}=d,ie=F,te;Ht(d,!1),F?(F.el=q.el,re(d,F,k)):F=q,L&&Pr(L),(te=F.props&&F.props.onVnodeBeforeUpdate)&&Xe(te,W,F,q),Ht(d,!0);const fe=Ps(d),Fe=d.subTree;d.subTree=fe,b(Fe,fe,f(Fe.el),v(Fe),d,w,I),F.el=fe.el,ie===null&&zd(d,fe.el),j&&Se(j,w),(te=F.props&&F.props.onVnodeUpdated)&&Se(()=>Xe(te,W,F,q),w)}else{let F;const{el:L,props:j}=h,{bm:W,m:q,parent:ie}=d,te=Dr(h);if(Ht(d,!1),W&&Pr(W),!te&&(F=j&&j.onVnodeBeforeMount)&&Xe(F,ie,h),Ht(d,!0),L&&Z){const fe=()=>{d.subTree=Ps(d),Z(L,d.subTree,d,w,null)};te?h.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=Ps(d);b(null,fe,m,y,d,w,I),h.el=fe.el}if(q&&Se(q,w),!te&&(F=j&&j.onVnodeMounted)){const fe=h;Se(()=>Xe(F,ie,fe),w)}(h.shapeFlag&256||ie&&Dr(ie.vnode)&&ie.vnode.shapeFlag&256)&&d.a&&Se(d.a,w),d.isMounted=!0,h=m=y=null}},O=d.effect=new qi(C,()=>eo(S),d.scope),S=d.update=()=>O.run();S.id=d.uid,Ht(d,!0),S()},re=(d,h,m)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,Ah(d,h.props,y,m),wh(d,h.children,m),On(),Yo(),Pn()},X=(d,h,m,y,w,I,k,C,O=!1)=>{const S=d&&d.children,F=d?d.shapeFlag:0,L=h.children,{patchFlag:j,shapeFlag:W}=h;if(j>0){if(j&128){vt(S,L,m,y,w,I,k,C,O);return}else if(j&256){ct(S,L,m,y,w,I,k,C,O);return}}W&8?(F&16&&_e(S,w,I),L!==S&&u(m,L)):F&16?W&16?vt(S,L,m,y,w,I,k,C,O):_e(S,w,I,!0):(F&8&&u(m,""),W&16&&M(L,m,y,w,I,k,C,O))},ct=(d,h,m,y,w,I,k,C,O)=>{d=d||_n,h=h||_n;const S=d.length,F=h.length,L=Math.min(S,F);let j;for(j=0;j<L;j++){const W=h[j]=O?Tt(h[j]):Ze(h[j]);b(d[j],W,m,null,w,I,k,C,O)}S>F?_e(d,w,I,!0,!1,L):M(h,m,y,w,I,k,C,O,L)},vt=(d,h,m,y,w,I,k,C,O)=>{let S=0;const F=h.length;let L=d.length-1,j=F-1;for(;S<=L&&S<=j;){const W=d[S],q=h[S]=O?Tt(h[S]):Ze(h[S]);if(Kt(W,q))b(W,q,m,null,w,I,k,C,O);else break;S++}for(;S<=L&&S<=j;){const W=d[L],q=h[j]=O?Tt(h[j]):Ze(h[j]);if(Kt(W,q))b(W,q,m,null,w,I,k,C,O);else break;L--,j--}if(S>L){if(S<=j){const W=j+1,q=W<F?h[W].el:y;for(;S<=j;)b(null,h[S]=O?Tt(h[S]):Ze(h[S]),m,q,w,I,k,C,O),S++}}else if(S>j)for(;S<=L;)Te(d[S],w,I,!0),S++;else{const W=S,q=S,ie=new Map;for(S=q;S<=j;S++){const Ne=h[S]=O?Tt(h[S]):Ze(h[S]);Ne.key!=null&&ie.set(Ne.key,S)}let te,fe=0;const Fe=j-q+1;let dn=!1,Uo=0;const Un=new Array(Fe);for(S=0;S<Fe;S++)Un[S]=0;for(S=W;S<=L;S++){const Ne=d[S];if(fe>=Fe){Te(Ne,w,I,!0);continue}let Je;if(Ne.key!=null)Je=ie.get(Ne.key);else for(te=q;te<=j;te++)if(Un[te-q]===0&&Kt(Ne,h[te])){Je=te;break}Je===void 0?Te(Ne,w,I,!0):(Un[Je-q]=S+1,Je>=Uo?Uo=Je:dn=!0,b(Ne,h[Je],m,null,w,I,k,C,O),fe++)}const Fo=dn?Ch(Un):_n;for(te=Fo.length-1,S=Fe-1;S>=0;S--){const Ne=q+S,Je=h[Ne],jo=Ne+1<F?h[Ne+1].el:y;Un[S]===0?b(null,Je,m,jo,w,I,k,C,O):dn&&(te<0||S!==Fo[te]?Qe(Je,m,jo,2):te--)}}},Qe=(d,h,m,y,w=null)=>{const{el:I,type:k,transition:C,children:O,shapeFlag:S}=d;if(S&6){Qe(d.component.subTree,h,m,y);return}if(S&128){d.suspense.move(h,m,y);return}if(S&64){k.move(d,h,m,P);return}if(k===Ie){r(I,h,m);for(let L=0;L<O.length;L++)Qe(O[L],h,m,y);r(d.anchor,h,m);return}if(k===Ns){E(d,h,m);return}if(y!==2&&S&1&&C)if(y===0)C.beforeEnter(I),r(I,h,m),Se(()=>C.enter(I),w);else{const{leave:L,delayLeave:j,afterLeave:W}=C,q=()=>r(I,h,m),ie=()=>{L(I,()=>{q(),W&&W()})};j?j(I,q,ie):ie()}else r(I,h,m)},Te=(d,h,m,y=!1,w=!1)=>{const{type:I,props:k,ref:C,children:O,dynamicChildren:S,shapeFlag:F,patchFlag:L,dirs:j}=d;if(C!=null&&_i(C,null,m,d,!0),F&256){h.ctx.deactivate(d);return}const W=F&1&&j,q=!Dr(d);let ie;if(q&&(ie=k&&k.onVnodeBeforeUnmount)&&Xe(ie,h,d),F&6)vr(d.component,m,y);else{if(F&128){d.suspense.unmount(m,y);return}W&&$t(d,null,h,"beforeUnmount"),F&64?d.type.remove(d,h,m,w,P,y):S&&(I!==Ie||L>0&&L&64)?_e(S,h,m,!1,!0):(I===Ie&&L&384||!w&&F&16)&&_e(O,h,m),y&&un(d)}(q&&(ie=k&&k.onVnodeUnmounted)||W)&&Se(()=>{ie&&Xe(ie,h,d),W&&$t(d,null,h,"unmounted")},m)},un=d=>{const{type:h,el:m,anchor:y,transition:w}=d;if(h===Ie){fn(m,y);return}if(h===Ns){T(d);return}const I=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:k,delayLeave:C}=w,O=()=>k(m,I);C?C(d.el,I,O):O()}else I()},fn=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},vr=(d,h,m)=>{const{bum:y,scope:w,update:I,subTree:k,um:C}=d;y&&Pr(y),w.stop(),I&&(I.active=!1,Te(k,d,h,m)),C&&Se(C,h),Se(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},_e=(d,h,m,y=!1,w=!1,I=0)=>{for(let k=I;k<d.length;k++)Te(d[k],h,m,y,w)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),D=(d,h,m)=>{d==null?h._vnode&&Te(h._vnode,null,null,!0):b(h._vnode||null,d,h,null,null,null,m),Yo(),nl(),h._vnode=d},P={p:b,um:Te,m:Qe,r:un,mt:jt,mc:M,pc:X,pbc:ne,n:v,o:e};let B,Z;return t&&([B,Z]=t(P)),{render:D,hydrate:B,createApp:Ih(D,B)}}function Ht({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function wl(e,t,n=!1){const r=e.children,s=t.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Tt(s[i]),a.el=o.el),n||wl(o,a)),a.type===hs&&(a.el=o.el)}}function Ch(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Rh=e=>e.__isTeleport,Ie=Symbol(void 0),hs=Symbol(void 0),Ke=Symbol(void 0),Ns=Symbol(void 0),zn=[];let He=null;function Ve(e=!1){zn.push(He=e?null:[])}function Oh(){zn.pop(),He=zn[zn.length-1]||null}let tr=1;function ia(e){tr+=e}function El(e){return e.dynamicChildren=tr>0?He||_n:null,Oh(),tr>0&&He&&He.push(e),e}function Pt(e,t,n,r,s,i){return El(U(e,t,n,r,s,i,!0))}function so(e,t,n,r,s){return El(Re(e,t,n,r,s,!0))}function yi(e){return e?e.__v_isVNode===!0:!1}function Kt(e,t){return e.type===t.type&&e.key===t.key}const ps="__vInternal",Il=({key:e})=>e??null,Nr=({ref:e,ref_key:t,ref_for:n})=>e!=null?de(e)||Ae(e)||K(e)?{i:xe,r:e,k:t,f:!!n}:e:null;function U(e,t=null,n=null,r=0,s=null,i=e===Ie?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Il(t),ref:t&&Nr(t),scopeId:il,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return a?(io(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),tr>0&&!o&&He&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&He.push(c),c}const Re=Ph;function Ph(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===lh)&&(e=Ke),yi(e)){const a=Ut(e,t,!0);return n&&io(a,n),tr>0&&!i&&He&&(a.shapeFlag&6?He[He.indexOf(e)]=a:He.push(a)),a.patchFlag|=-2,a}if(Hh(e)&&(e=e.__vccOpts),t){t=kh(t);let{class:a,style:c}=t;a&&!de(a)&&(t.class=$i(a)),ce(c)&&(Kc(c)&&!z(c)&&(c=ve({},c)),t.style=ji(c))}const o=de(e)?1:Kd(e)?128:Rh(e)?64:ce(e)?4:K(e)?2:0;return U(e,t,n,r,s,o,i,!0)}function kh(e){return e?Kc(e)||ps in e?ve({},e):e:null}function Ut(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?Dh(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Il(a),ref:t&&t.ref?n&&s?z(s)?s.concat(Nr(t)):[s,Nr(t)]:Nr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Tl(e=" ",t=0){return Re(hs,null,e,t)}function Sl(e="",t=!1){return t?(Ve(),so(Ke,null,e)):Re(Ke,null,e)}function Ze(e){return e==null||typeof e=="boolean"?Re(Ke):z(e)?Re(Ie,null,e.slice()):typeof e=="object"?Tt(e):Re(hs,null,String(e))}function Tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ut(e)}function io(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),io(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(ps in t)?t._ctx=xe:s===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),r&64?(n=16,t=[Tl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Dh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=$i([t.class,r.class]));else if(s==="style")t.style=ji([t.style,r.style]);else if(ss(s)){const i=t[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Xe(e,t,n,r=null){Be(e,t,7,[n,r])}const Nh=bl();let xh=0;function Lh(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Nh,i={uid:xh++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ed(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_l(r,s),emitsOptions:sl(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=jd.bind(null,i),e.ce&&e.ce(i),i}let ue=null;const Mh=()=>ue||xe,In=e=>{ue=e,e.scope.on()},Xt=()=>{ue&&ue.scope.off(),ue=null};function Cl(e){return e.vnode.shapeFlag&4}let nr=!1;function Bh(e,t=!1){nr=t;const{props:n,children:r}=e.vnode,s=Cl(e);yh(e,n,s,t),bh(e,r);const i=s?Uh(e,t):void 0;return nr=!1,i}function Uh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=qc(new Proxy(e.ctx,dh));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?jh(e):null;In(e),On();const i=Dt(r,e,0,[e.props,s]);if(Pn(),Xt(),Dc(i)){if(i.then(Xt,Xt),t)return i.then(o=>{oa(e,o,t)}).catch(o=>{ls(o,e,0)});e.asyncDep=i}else oa(e,i,t)}else Rl(e,t)}function oa(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ce(t)&&(e.setupState=Jc(t)),Rl(e,n)}let aa;function Rl(e,t,n){const r=e.type;if(!e.render){if(!t&&aa&&!r.render){const s=r.template||no(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ve(ve({isCustomElement:i,delimiters:a},o),c);r.render=aa(s,l)}}e.render=r.render||We}In(e),On(),hh(e),Pn(),Xt()}function Fh(e){return new Proxy(e.attrs,{get(t,n){return Pe(e,"get","$attrs"),t[n]}})}function jh(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Fh(e))},slots:e.slots,emit:e.emit,expose:t}}function gs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Jc(qc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wn)return Wn[n](e)},has(t,n){return n in t||n in Wn}}))}function $h(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function Hh(e){return K(e)&&"__vccOpts"in e}const Ce=(e,t)=>xd(e,t,nr);function Ol(e,t,n){const r=arguments.length;return r===2?ce(t)&&!z(t)?yi(t)?Re(e,null,[t]):Re(e,t):Re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&yi(n)&&(n=[n]),Re(e,t,n))}const Vh=Symbol(""),Wh=()=>ze(Vh),zh="3.2.47",Kh="http://www.w3.org/2000/svg",qt=typeof document<"u"?document:null,ca=qt&&qt.createElement("template"),qh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?qt.createElementNS(Kh,e):qt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>qt.createTextNode(e),createComment:e=>qt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ca.innerHTML=r?`<svg>${e}</svg>`:e;const a=ca.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Gh(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Yh(e,t,n){const r=e.style,s=de(n);if(n&&!s){if(t&&!de(t))for(const i in t)n[i]==null&&Ai(r,i,"");for(const i in n)Ai(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const la=/\s*!important$/;function Ai(e,t,n){if(z(n))n.forEach(r=>Ai(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Qh(e,t);la.test(n)?e.setProperty(Rn(r),n.replace(la,""),"important"):e[r]=n}}const ua=["Webkit","Moz","ms"],xs={};function Qh(e,t){const n=xs[t];if(n)return n;let r=it(t);if(r!=="filter"&&r in e)return xs[t]=r;r=as(r);for(let s=0;s<ua.length;s++){const i=ua[s]+r;if(i in e)return xs[t]=i}return t}const fa="http://www.w3.org/1999/xlink";function Jh(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fa,t.slice(6,t.length)):e.setAttributeNS(fa,t,n);else{const i=Kf(t);n==null||i&&!Oc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Xh(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Oc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function gn(e,t,n,r){e.addEventListener(t,n,r)}function Zh(e,t,n,r){e.removeEventListener(t,n,r)}function ep(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=tp(t);if(r){const l=i[t]=sp(r,s);gn(e,a,l,c)}else o&&(Zh(e,a,o,c),i[t]=void 0)}}const da=/(?:Once|Passive|Capture)$/;function tp(e){let t;if(da.test(e)){t={};let r;for(;r=e.match(da);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Rn(e.slice(2)),t]}let Ls=0;const np=Promise.resolve(),rp=()=>Ls||(np.then(()=>Ls=0),Ls=Date.now());function sp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Be(ip(r,n.value),t,5,[r])};return n.value=e,n.attached=rp(),n}function ip(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ha=/^on[a-z]/,op=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?Gh(e,r,s):t==="style"?Yh(e,n,r):ss(t)?Hi(t)||ep(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ap(e,t,r,s))?Xh(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Jh(e,t,r,s))};function ap(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ha.test(t)&&K(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ha.test(t)&&de(n)?!1:t in e}const cp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Jd.props;const pa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>Pr(t,n):t};function lp(e){e.target.composing=!0}function ga(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const rr={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=pa(s);const i=r||s.props&&s.props.type==="number";gn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=ii(a)),e._assign(a)}),n&&gn(e,"change",()=>{e.value=e.value.trim()}),t||(gn(e,"compositionstart",lp),gn(e,"compositionend",ga),gn(e,"change",ga))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=pa(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&ii(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},up=ve({patchProp:op},qh);let ma;function fp(){return ma||(ma=Th(up))}const dp=(...e)=>{const t=fp().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=hp(r);if(!s)return;const i=t._component;!K(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function hp(e){return de(e)?document.querySelector(e):e}const pp=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},gp={};function mp(e,t){const n=ch("router-view");return Ve(),so(n)}const _p=pp(gp,[["render",mp]]);function yp(){return Pl().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Pl(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Ap=typeof Proxy=="function",vp="devtools-plugin:setup",bp="plugin:settings:set";let hn,vi;function wp(){var e;return hn!==void 0||(typeof window<"u"&&window.performance?(hn=!0,vi=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(hn=!0,vi=global.perf_hooks.performance):hn=!1),hn}function Ep(){return wp()?vi.now():Date.now()}class Ip{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const o in t.settings){const a=t.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Ep()}},n&&n.on(bp,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Tp(e,t){const n=e,r=Pl(),s=yp(),i=Ap&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(vp,e,t);else{const o=i?new Ip(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:o}),o&&t(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var kl="store";function Dl(e){return e===void 0&&(e=null),ze(e!==null?e:kl)}function Dn(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function Sp(e){return e!==null&&typeof e=="object"}function Cp(e){return e&&typeof e.then=="function"}function Rp(e,t){return function(){return e(t)}}function Nl(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function xl(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;ms(e,n,[],e._modules.root,!0),oo(e,n,t)}function oo(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,i={};Dn(s,function(o,a){i[a]=Rp(o,e),Object.defineProperty(e.getters,a,{get:function(){return i[a]()},enumerable:!0})}),e._state=kn({data:t}),e.strict&&Np(e),r&&n&&e._withCommit(function(){r.data=null})}function ms(e,t,n,r,s){var i=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!i&&!s){var a=ao(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit(function(){a[c]=r.state})}var l=r.context=Op(e,o,n);r.forEachMutation(function(u,f){var p=o+f;Pp(e,p,u,l)}),r.forEachAction(function(u,f){var p=u.root?f:o+f,g=u.handler||u;kp(e,p,g,l)}),r.forEachGetter(function(u,f){var p=o+f;Dp(e,p,u,l)}),r.forEachChild(function(u,f){ms(e,t,n.concat(f),u,s)})}function Op(e,t,n){var r=t==="",s={dispatch:r?e.dispatch:function(i,o,a){var c=Kr(i,o,a),l=c.payload,u=c.options,f=c.type;return(!u||!u.root)&&(f=t+f),e.dispatch(f,l)},commit:r?e.commit:function(i,o,a){var c=Kr(i,o,a),l=c.payload,u=c.options,f=c.type;(!u||!u.root)&&(f=t+f),e.commit(f,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return e.getters}:function(){return Ll(e,t)}},state:{get:function(){return ao(e.state,n)}}}),s}function Ll(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(s){if(s.slice(0,r)===t){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[s]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function Pp(e,t,n,r){var s=e._mutations[t]||(e._mutations[t]=[]);s.push(function(o){n.call(e,r.state,o)})}function kp(e,t,n,r){var s=e._actions[t]||(e._actions[t]=[]);s.push(function(o){var a=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},o);return Cp(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(c){throw e._devtoolHook.emit("vuex:error",c),c}):a})}function Dp(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function Np(e){Nt(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function ao(e,t){return t.reduce(function(n,r){return n[r]},e)}function Kr(e,t,n){return Sp(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var xp="vuex bindings",_a="vuex:mutations",Ms="vuex:actions",pn="vuex",Lp=0;function Mp(e,t){Tp({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[xp]},function(n){n.addTimelineLayer({id:_a,label:"Vuex Mutations",color:ya}),n.addTimelineLayer({id:Ms,label:"Vuex Actions",color:ya}),n.addInspector({id:pn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===e&&r.inspectorId===pn)if(r.filter){var s=[];Fl(s,t._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Ul(t._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===e&&r.inspectorId===pn){var s=r.nodeId;Ll(t,s),r.state=Fp($p(t._modules,s),s==="root"?t.getters:t._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===e&&r.inspectorId===pn){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),t._withCommit(function(){r.set(t._state.data,i,r.state.value)})}}),t.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(pn),n.sendInspectorState(pn),n.addTimelineEvent({layerId:_a,event:{time:Date.now(),title:r.type,data:i}})}),t.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=Lp++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Ms,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Ms,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var ya=8702998,Bp=6710886,Up=16777215,Ml={label:"namespaced",textColor:Up,backgroundColor:Bp};function Bl(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function Ul(e,t){return{id:t||"root",label:Bl(t),tags:e.namespaced?[Ml]:[],children:Object.keys(e._children).map(function(n){return Ul(e._children[n],t+n+"/")})}}function Fl(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[Ml]:[]}),Object.keys(t._children).forEach(function(s){Fl(e,t._children[s],n,r+s+"/")})}function Fp(e,t,n){t=n==="root"?t:t[n];var r=Object.keys(t),s={state:Object.keys(e.state).map(function(o){return{key:o,editable:!0,value:e.state[o]}})};if(r.length){var i=jp(t);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Bl(o):o,editable:!1,value:bi(function(){return i[o]})}})}return s}function jp(e){var t={};return Object.keys(e).forEach(function(n){var r=n.split("/");if(r.length>1){var s=t,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=bi(function(){return e[n]})}else t[n]=bi(function(){return e[n]})}),t}function $p(e,t){var n=t.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+t+'".');return i===n.length-1?o:o._children},t==="root"?e:e.root._children)}function bi(e){try{return e()}catch(t){return t}}var Ge=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},jl={namespaced:{configurable:!0}};jl.namespaced.get=function(){return!!this._rawModule.namespaced};Ge.prototype.addChild=function(t,n){this._children[t]=n};Ge.prototype.removeChild=function(t){delete this._children[t]};Ge.prototype.getChild=function(t){return this._children[t]};Ge.prototype.hasChild=function(t){return t in this._children};Ge.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};Ge.prototype.forEachChild=function(t){Dn(this._children,t)};Ge.prototype.forEachGetter=function(t){this._rawModule.getters&&Dn(this._rawModule.getters,t)};Ge.prototype.forEachAction=function(t){this._rawModule.actions&&Dn(this._rawModule.actions,t)};Ge.prototype.forEachMutation=function(t){this._rawModule.mutations&&Dn(this._rawModule.mutations,t)};Object.defineProperties(Ge.prototype,jl);var on=function(t){this.register([],t,!1)};on.prototype.get=function(t){return t.reduce(function(n,r){return n.getChild(r)},this.root)};on.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};on.prototype.update=function(t){$l([],this.root,t)};on.prototype.register=function(t,n,r){var s=this;r===void 0&&(r=!0);var i=new Ge(n,r);if(t.length===0)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}n.modules&&Dn(n.modules,function(a,c){s.register(t.concat(c),a,r)})};on.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};on.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1];return n?n.hasChild(r):!1};function $l(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;$l(e.concat(r),t.getChild(r),n.modules[r])}}function Hp(e){return new ke(e)}var ke=function(t){var n=this;t===void 0&&(t={});var r=t.plugins;r===void 0&&(r=[]);var s=t.strict;s===void 0&&(s=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new on(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(p,g){return c.call(o,p,g)},this.commit=function(p,g,_){return l.call(o,p,g,_)},this.strict=s;var u=this._modules.root.state;ms(this,u,[],this._modules.root),oo(this,u),r.forEach(function(f){return f(n)})},co={state:{configurable:!0}};ke.prototype.install=function(t,n){t.provide(n||kl,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Mp(t,this)};co.state.get=function(){return this._state.data};co.state.set=function(e){};ke.prototype.commit=function(t,n,r){var s=this,i=Kr(t,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};ke.prototype.dispatch=function(t,n){var r=this,s=Kr(t,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,f){l.then(function(p){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}u(p)},function(p){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,p)})}catch{}f(p)})})}};ke.prototype.subscribe=function(t,n){return Nl(t,this._subscribers,n)};ke.prototype.subscribeAction=function(t,n){var r=typeof t=="function"?{before:t}:t;return Nl(r,this._actionSubscribers,n)};ke.prototype.watch=function(t,n,r){var s=this;return Nt(function(){return t(s.state,s.getters)},n,Object.assign({},r))};ke.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};ke.prototype.registerModule=function(t,n,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),ms(this,this.state,t,this._modules.get(t),r.preserveState),oo(this,this.state)};ke.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=ao(n.state,t.slice(0,-1));delete r[t[t.length-1]]}),xl(this)};ke.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};ke.prototype.hotUpdate=function(t){this._modules.update(t),xl(this,!0)};ke.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(ke.prototype,co);const Vp=Hp({state(){return{resetAtribute:!1,atributes:["DARK","LIGHT","EARTH","WATER","FIRE","WIND","DIVINE"],selectedAtributes:[],resetRace:!1,races:["Equip","Field","Quick-Play","Ritual","Continuous","Counter","Normal"],selectedRaces:[],resetMonster:!1,monsters:["Spellcaster","Dragon","Zombie","Warrior","Beast-Warrior","Beast","Winged Beast","Fiend","Fairy","Insect","Dinosaur","Reptile","Fish","Sea Serpent","Aqua","Pyro","Thunder","Rock","Plant","Machine","Psychic","Divine-Beast","Wyrm","Cyberse","Creator-God"],selectedMonsters:[],resetType:!1,types:["Normal","Effect","Ritual","Fusion","Synchro","XYZ","Pendulum","Link","Toon","Spirit","Union","Gemini","Tuner","Flip"],selectedCardTypes:[],resetLevel:!1,levels:["0","1","2","3","4","5","6","7","8","9","10","11","12","13"],selectedLevels:[],isCleared:!1,allBox:!0,monstersBox:!1,spellsBox:!1,trapsBox:!1,allfiltersArray:[],ByAttackAscending:!0,ByAttackDescending:!0,ByDefenceAscending:!0,ByDefenceDescending:!0,gotoPage:1,galleryActive:!0,listActive:!1,favList:["Dark Magician",'"A" Cell Breeding Device']}},mutations:{showAllFilters(e){e.allBox=!0,e.monstersBox=!1,e.spellsBox=!1,e.trapsBox=!1},showMonsterFilters(e){e.allBox=!1,e.monstersBox=!0,e.spellsBox=!1,e.trapsBox=!1},showSpellFilters(e){e.allBox=!1,e.monstersBox=!1,e.spellsBox=!0,e.trapsBox=!1},showTrapsFilters(e){e.allBox=!1,e.monstersBox=!1,e.spellsBox=!1,e.trapsBox=!0},resetAllFilters(e){e.selectedAtributes=[],e.selectedCardTypes=[],e.selectedLevels=[],e.selectedMonsters=[],e.selectedRaces=[],e.allfiltersArray=[]},setDefaultForAtributes(e){e.resetAtribute=!1},setDefaultForRaces(e){e.resetRace=!1},setDefaultForMonsters(e){e.resetMonster=!1},setDefaultForTypes(e){e.resetType=!1},setDefaultForLevels(e){e.resetLevel=!1},addLevel(e,t){if(!e.selectedLevels.includes(t))e.selectedLevels.push(t);else{const n=e.selectedLevels.indexOf(t);n!==-1&&e.selectedLevels.splice(n,1)}},addCardType(e,t){if(!e.selectedCardTypes.includes(t))e.selectedCardTypes.push(t);else{const n=e.selectedCardTypes.indexOf(t);n!==-1&&e.selectedCardTypes.splice(n,1)}},addMonsterType(e,t){if(!e.selectedMonsters.includes(t))e.selectedMonsters.push(t);else{const n=e.selectedMonsters.indexOf(t);n!==-1&&e.selectedMonsters.splice(n,1)}},addRace(e,t){if(!e.selectedRaces.includes(t))e.selectedRaces.push(t);else{const n=e.selectedRaces.indexOf(t);n!==-1&&e.selectedRaces.splice(n,1)}},addAtribute(e,t){if(!e.selectedAtributes.includes(t))e.selectedAtributes.push(t);else{const n=e.selectedAtributes.indexOf(t);n!==-1&&e.selectedAtributes.splice(n,1)}},setDefaultForSelectedAtributes(e){e.selectedAtributes.length==0&&(e.selectedAtributes=e.atributes)},setDefaultForSelectedMonsterTypes(e){e.selectedMonsters.length==0&&(e.selectedMonsters=e.monsters)},setDefaultForSelectedCardTypes(e){e.selectedCardTypes.length==0&&(e.selectedCardTypes=e.types)},setDefaultForSelectedLevels(e){e.selectedLevels.length==0&&(e.selectedLevels=e.levels)},setDefaultForSelectedRaces(e){e.selectedRaces.leght==0&&(e.selectedLevels=e.levels)},populateAllFiltersArray(e){e.allfiltersArray.push(e.selectedAtributes),e.allfiltersArray.push(e.selectedMonsters),e.allfiltersArray.push(e.selectedCardTypes),e.allfiltersArray.push(e.selectedLevels),e.allfiltersArray.push(e.selectedRaces),e.allfiltersArray=Array.from(new Set(e.allfiltersArray.flat())),console.log(e.allfiltersArray)},sortByAttackAscending(e){e.ByAttackAscending=!0,e.ByAttackDescending=!1,e.ByDefenceAscending=!1,e.ByDefenceDescending=!1},sortByAttackDescending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!0,e.ByDefenceAscending=!1,e.ByDefenceDescending=!1},sortByDefenceAscending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!1,e.ByDefenceAscending=!0,e.ByDefenceDescending=!1},sortByDefenceDescending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!1,e.ByDefenceAscending=!1,e.ByDefenceDescending=!0},showGallery(e){e.galleryActive=!0,e.listActive=!1},showList(e){e.galleryActive=!1,e.listActive=!0}},actions:{},modules:{}});/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const mn=typeof window<"u";function Wp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Bs(e,t){const n={};for(const r in t){const s=t[r];n[r]=qe(s)?s.map(e):e(s)}return n}const Kn=()=>{},qe=Array.isArray,zp=/\/$/,Kp=e=>e.replace(zp,"");function Us(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Qp(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function qp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Aa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Gp(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Tn(t.matched[r],n.matched[s])&&Hl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Tn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Hl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Yp(e[n],t[n]))return!1;return!0}function Yp(e,t){return qe(e)?va(e,t):qe(t)?va(t,e):e===t}function va(e,t){return qe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Qp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var sr;(function(e){e.pop="pop",e.push="push"})(sr||(sr={}));var qn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(qn||(qn={}));function Jp(e){if(!e)if(mn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Kp(e)}const Xp=/^[^#]+#/;function Zp(e,t){return e.replace(Xp,"#")+t}function eg(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const _s=()=>({left:window.pageXOffset,top:window.pageYOffset});function tg(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=eg(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ba(e,t){return(history.state?history.state.position-t:-1)+e}const wi=new Map;function ng(e,t){wi.set(e,t)}function rg(e){const t=wi.get(e);return wi.delete(e),t}let sg=()=>location.protocol+"//"+location.host;function Vl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Aa(c,"")}return Aa(n,e)+r+s}function ig(e,t,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=Vl(e,location),_=n.value,b=t.value;let N=0;if(p){if(n.value=g,t.value=p,o&&o===_){o=null;return}N=b?p.position-b.position:0}else r(g);s.forEach(R=>{R(n.value,_,{delta:N,type:sr.pop,direction:N?N>0?qn.forward:qn.back:qn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ee({},p.state,{scroll:_s()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function wa(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?_s():null}}function og(e){const{history:t,location:n}=window,r={value:Vl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:sg()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=ee({},t.state,wa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ee({},s.value,t.state,{forward:c,scroll:_s()});i(u.current,u,!0);const f=ee({},wa(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function ag(e){e=Jp(e);const t=og(e),n=ig(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ee({location:"",base:e,go:r,createHref:Zp.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function cg(e){return typeof e=="string"||e&&typeof e=="object"}function Wl(e){return typeof e=="string"||typeof e=="symbol"}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zl=Symbol("");var Ea;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ea||(Ea={}));function Sn(e,t){return ee(new Error,{type:e,[zl]:!0},t)}function lt(e,t){return e instanceof Error&&zl in e&&(t==null||!!(e.type&t))}const Ia="[^/]+?",lg={sensitive:!1,strict:!1,start:!0,end:!0},ug=/[.+*?^${}()[\]/\\]/g;function fg(e,t){const n=ee({},lg,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(ug,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:b,optional:N,regexp:R}=p;i.push({name:_,repeatable:b,optional:N});const x=R||Ia;if(x!==Ia){g+=10;try{new RegExp(`(${x})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+T.message)}}let E=b?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(E=N&&l.length<2?`(?:/${E})`:"/"+E),N&&(E+="?"),s+=E,g+=20,N&&(g+=-8),b&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",_=i[p-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:b,optional:N}=g,R=_ in l?l[_]:"";if(qe(R)&&!b)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=qe(R)?R.join("/"):R;if(!x)if(N)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function dg(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function hg(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=dg(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ta(r))return 1;if(Ta(s))return-1}return s.length-r.length}function Ta(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const pg={type:0,value:""},gg=/[a-zA-Z0-9_]/;function mg(e){if(!e)return[[]];if(e==="/")return[[pg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:gg.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function _g(e,t,n){const r=fg(mg(e.path),n),s=ee(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function yg(e,t){const n=[],r=new Map;t=Ra({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,f,p){const g=!p,_=Ag(u);_.aliasOf=p&&p.record;const b=Ra(t,u),N=[_];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of E)N.push(ee({},_,{components:p?p.record.components:_.components,path:T,aliasOf:p?p.record:_}))}let R,x;for(const E of N){const{path:T}=E;if(f&&T[0]!=="/"){const $=f.record.path,V=$[$.length-1]==="/"?"":"/";E.path=f.record.path+(T&&V+T)}if(R=_g(E,f,b),p?p.alias.push(R):(x=x||R,x!==R&&x.alias.push(R),g&&u.name&&!Ca(R)&&o(u.name)),_.children){const $=_.children;for(let V=0;V<$.length;V++)i($[V],R,p&&p.children[V])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return x?()=>{o(x)}:Kn}function o(u){if(Wl(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&hg(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Kl(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Ca(u)&&r.set(u.record.name,u)}function l(u,f){let p,g={},_,b;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Sn(1,{location:u});b=p.record.name,g=ee(Sa(f.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Sa(u.params,p.keys.map(x=>x.name))),_=p.stringify(g)}else if("path"in u)_=u.path,p=n.find(x=>x.re.test(_)),p&&(g=p.parse(_),b=p.record.name);else{if(p=f.name?r.get(f.name):n.find(x=>x.re.test(f.path)),!p)throw Sn(1,{location:u,currentLocation:f});b=p.record.name,g=ee({},f.params,u.params),_=p.stringify(g)}const N=[];let R=p;for(;R;)N.unshift(R.record),R=R.parent;return{name:b,path:_,params:g,matched:N,meta:bg(N)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Sa(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ag(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:vg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function vg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ca(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bg(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function Ra(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Kl(e,t){return t.children.some(n=>n===e||Kl(e,n))}const ql=/#/g,wg=/&/g,Eg=/\//g,Ig=/=/g,Tg=/\?/g,Gl=/\+/g,Sg=/%5B/g,Cg=/%5D/g,Yl=/%5E/g,Rg=/%60/g,Ql=/%7B/g,Og=/%7C/g,Jl=/%7D/g,Pg=/%20/g;function lo(e){return encodeURI(""+e).replace(Og,"|").replace(Sg,"[").replace(Cg,"]")}function kg(e){return lo(e).replace(Ql,"{").replace(Jl,"}").replace(Yl,"^")}function Ei(e){return lo(e).replace(Gl,"%2B").replace(Pg,"+").replace(ql,"%23").replace(wg,"%26").replace(Rg,"`").replace(Ql,"{").replace(Jl,"}").replace(Yl,"^")}function Dg(e){return Ei(e).replace(Ig,"%3D")}function Ng(e){return lo(e).replace(ql,"%23").replace(Tg,"%3F")}function xg(e){return e==null?"":Ng(e).replace(Eg,"%2F")}function qr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Lg(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Gl," "),o=i.indexOf("="),a=qr(o<0?i:i.slice(0,o)),c=o<0?null:qr(i.slice(o+1));if(a in t){let l=t[a];qe(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Oa(e){let t="";for(let n in e){const r=e[n];if(n=Dg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(qe(r)?r.map(i=>i&&Ei(i)):[r&&Ei(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Mg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Bg=Symbol(""),Pa=Symbol(""),ys=Symbol(""),Xl=Symbol(""),Ii=Symbol("");function Fn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function St(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Sn(4,{from:n,to:t})):f instanceof Error?a(f):cg(f)?a(Sn(2,{from:t,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Fs(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Ug(a)){const l=(a.__vccOpts||a)[t];l&&s.push(St(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Wp(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&St(p,n,r,i,o)()}))}}return s}function Ug(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ka(e){const t=ze(ys),n=ze(Xl),r=Ce(()=>t.resolve(ge(e.to))),s=Ce(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Tn.bind(null,u));if(p>-1)return p;const g=Da(c[l-2]);return l>1&&Da(u)===g&&f[f.length-1].path!==g?f.findIndex(Tn.bind(null,c[l-2])):p}),i=Ce(()=>s.value>-1&&Hg(n.params,r.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&Hl(n.params,r.value.params));function a(c={}){return $g(c)?t[ge(e.replace)?"replace":"push"](ge(e.to)).catch(Kn):Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Fg=ul({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ka,setup(e,{slots:t}){const n=kn(ka(e)),{options:r}=ze(ys),s=Ce(()=>({[Na(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Na(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Ol("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),jg=Fg;function $g(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Hg(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Da(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Na=(e,t,n)=>e??t??n,Vg=ul({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ze(Ii),s=Ce(()=>e.route||r.value),i=ze(Pa,0),o=Ce(()=>{let l=ge(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ce(()=>s.value.matched[o.value]);kr(Pa,Ce(()=>o.value+1)),kr(Bg,a),kr(Ii,s);const c=G();return Nt(()=>[c.value,a.value,e.name],([l,u,f],[p,g,_])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Tn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return xa(n.default,{Component:p,route:l});const g=f.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,N=Ol(p,ee({},_,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return xa(n.default,{Component:N,route:l})||N}}});function xa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wg=Vg;function zg(e){const t=yg(e.routes,e),n=e.parseQuery||Lg,r=e.stringifyQuery||Oa,s=e.history,i=Fn(),o=Fn(),a=Fn(),c=Pd(wt);let l=wt;mn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Bs.bind(null,v=>""+v),f=Bs.bind(null,xg),p=Bs.bind(null,qr);function g(v,D){let P,B;return Wl(v)?(P=t.getRecordMatcher(v),B=D):B=v,t.addRoute(B,P)}function _(v){const D=t.getRecordMatcher(v);D&&t.removeRoute(D)}function b(){return t.getRoutes().map(v=>v.record)}function N(v){return!!t.getRecordMatcher(v)}function R(v,D){if(D=ee({},D||c.value),typeof v=="string"){const m=Us(n,v,D.path),y=t.resolve({path:m.path},D),w=s.createHref(m.fullPath);return ee(m,y,{params:p(y.params),hash:qr(m.hash),redirectedFrom:void 0,href:w})}let P;if("path"in v)P=ee({},v,{path:Us(n,v.path,D.path).path});else{const m=ee({},v.params);for(const y in m)m[y]==null&&delete m[y];P=ee({},v,{params:f(m)}),D.params=f(D.params)}const B=t.resolve(P,D),Z=v.hash||"";B.params=u(p(B.params));const d=qp(r,ee({},v,{hash:kg(Z),path:B.path})),h=s.createHref(d);return ee({fullPath:d,hash:Z,query:r===Oa?Mg(v.query):v.query||{}},B,{redirectedFrom:void 0,href:h})}function x(v){return typeof v=="string"?Us(n,v,c.value.path):ee({},v)}function E(v,D){if(l!==v)return Sn(8,{from:D,to:v})}function T(v){return le(v)}function $(v){return T(ee(x(v),{replace:!0}))}function V(v){const D=v.matched[v.matched.length-1];if(D&&D.redirect){const{redirect:P}=D;let B=typeof P=="function"?P(v):P;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=x(B):{path:B},B.params={}),ee({query:v.query,hash:v.hash,params:"path"in B?{}:v.params},B)}}function le(v,D){const P=l=R(v),B=c.value,Z=v.state,d=v.force,h=v.replace===!0,m=V(P);if(m)return le(ee(x(m),{state:typeof m=="object"?ee({},Z,m.state):Z,force:d,replace:h}),D||P);const y=P;y.redirectedFrom=D;let w;return!d&&Gp(r,B,P)&&(w=Sn(16,{to:y,from:B}),Qe(B,B,!0,!1)),(w?Promise.resolve(w):ne(y,B)).catch(I=>lt(I)?lt(I,2)?I:vt(I):X(I,y,B)).then(I=>{if(I){if(lt(I,2))return le(ee({replace:h},x(I.to),{state:typeof I.to=="object"?ee({},Z,I.to.state):Z,force:d}),D||y)}else I=De(y,B,!0,h,Z);return me(y,B,I),I})}function M(v,D){const P=E(v,D);return P?Promise.reject(P):Promise.resolve()}function oe(v){const D=fn.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(v):v()}function ne(v,D){let P;const[B,Z,d]=Kg(v,D);P=Fs(B.reverse(),"beforeRouteLeave",v,D);for(const m of B)m.leaveGuards.forEach(y=>{P.push(St(y,v,D))});const h=M.bind(null,v,D);return P.push(h),_e(P).then(()=>{P=[];for(const m of i.list())P.push(St(m,v,D));return P.push(h),_e(P)}).then(()=>{P=Fs(Z,"beforeRouteUpdate",v,D);for(const m of Z)m.updateGuards.forEach(y=>{P.push(St(y,v,D))});return P.push(h),_e(P)}).then(()=>{P=[];for(const m of v.matched)if(m.beforeEnter&&!D.matched.includes(m))if(qe(m.beforeEnter))for(const y of m.beforeEnter)P.push(St(y,v,D));else P.push(St(m.beforeEnter,v,D));return P.push(h),_e(P)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),P=Fs(d,"beforeRouteEnter",v,D),P.push(h),_e(P))).then(()=>{P=[];for(const m of o.list())P.push(St(m,v,D));return P.push(h),_e(P)}).catch(m=>lt(m,8)?m:Promise.reject(m))}function me(v,D,P){for(const B of a.list())oe(()=>B(v,D,P))}function De(v,D,P,B,Z){const d=E(v,D);if(d)return d;const h=D===wt,m=mn?history.state:{};P&&(B||h?s.replace(v.fullPath,ee({scroll:h&&m&&m.scroll},Z)):s.push(v.fullPath,Z)),c.value=v,Qe(v,D,P,h),vt()}let we;function jt(){we||(we=s.listen((v,D,P)=>{if(!vr.listening)return;const B=R(v),Z=V(B);if(Z){le(ee(Z,{replace:!0}),B).catch(Kn);return}l=B;const d=c.value;mn&&ng(ba(d.fullPath,P.delta),_s()),ne(B,d).catch(h=>lt(h,12)?h:lt(h,2)?(le(h.to,B).then(m=>{lt(m,20)&&!P.delta&&P.type===sr.pop&&s.go(-1,!1)}).catch(Kn),Promise.reject()):(P.delta&&s.go(-P.delta,!1),X(h,B,d))).then(h=>{h=h||De(B,d,!1),h&&(P.delta&&!lt(h,8)?s.go(-P.delta,!1):P.type===sr.pop&&lt(h,20)&&s.go(-1,!1)),me(B,d,h)}).catch(Kn)}))}let ln=Fn(),pe=Fn(),re;function X(v,D,P){vt(v);const B=pe.list();return B.length?B.forEach(Z=>Z(v,D,P)):console.error(v),Promise.reject(v)}function ct(){return re&&c.value!==wt?Promise.resolve():new Promise((v,D)=>{ln.add([v,D])})}function vt(v){return re||(re=!v,jt(),ln.list().forEach(([D,P])=>v?P(v):D()),ln.reset()),v}function Qe(v,D,P,B){const{scrollBehavior:Z}=e;if(!mn||!Z)return Promise.resolve();const d=!P&&rg(ba(v.fullPath,0))||(B||!P)&&history.state&&history.state.scroll||null;return el().then(()=>Z(v,D,d)).then(h=>h&&tg(h)).catch(h=>X(h,v,D))}const Te=v=>s.go(v);let un;const fn=new Set,vr={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:N,getRoutes:b,resolve:R,options:e,push:T,replace:$,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:ct,install(v){const D=this;v.component("RouterLink",jg),v.component("RouterView",Wg),v.config.globalProperties.$router=D,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(c)}),mn&&!un&&c.value===wt&&(un=!0,T(s.location).catch(Z=>{}));const P={};for(const Z in wt)P[Z]=Ce(()=>c.value[Z]);v.provide(ys,D),v.provide(Xl,kn(P)),v.provide(Ii,c);const B=v.unmount;fn.add(v),v.unmount=function(){fn.delete(v),fn.size<1&&(l=wt,we&&we(),we=null,c.value=wt,un=!1,re=!1),B()}}};function _e(v){return v.reduce((D,P)=>D.then(()=>oe(P)),Promise.resolve())}return vr}function Kg(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Tn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Tn(l,c))||s.push(c))}return[n,r,s]}function uo(){return ze(ys)}const qg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nO3BQREAMBADofVvOpXQ/w1QAEDtiHZEAADwtSPaEQEAwNeOaEcEANQDM6arjUtOdLsAAAAASUVORK5CYII=",Gg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2Yy2oUYRCFOwEjMkYFQVcGBTG6UMwLRImXRbxlkSwUX8DLMrvoNqIvELNVgzjiEwgaQV9BM4lGvCxMQCReSbx8UlIdys5Mz6SnZqY79IFhGrr7nFP9V/1V3UGQI0cOVwCHgbvALPAN+ApMARPAELAuSCuATcB34jEDDARpBLABmKc2XAPag7QB2AWcB/ZrQAXgIDACfIgGEWQJQCdwLxLEmSBLANqAoglgOtWFHbMScyaIwSBrAK6YAO60wsBuYFj+E94vhR1iyt9hdQOSu4JSHWkU4rO/w+oGvizLw8aETS/EQmNcxhsoLcvDgSym0IQxMJLg/qvm/tuNcRlvQAazENJhO1eZPnbkaP42Ks1HB7MQ0mHbamxk91PRyIAB/kcxbiX0yVvzf4DTzXW90pRMlRZz2qR6ZHfSX4/mfHRSHW2peQ2gvUwQ1SBPfjRV47RMlaa5xWG65WlTpbAHZbYBXmizk99z2Sr1XLYmzxw51gqAncA48A74tcpt8xNwLsIn/eGJbqkop3DfFC1v88dlZqc+TEY4j8RcK1rHPJ98veYrrcCkWYEoFoAujwAkbULI58I+oKNu4pU6Hboqr43emAex5GWIPhe38XpHjd4bD8IlQ1hwcRmvVzB6PzwI7QS5x8VlvF630St5ED40hBddXMbrXTZ6RQ/CC4bwLbDZxWl5rS3Ae6N31isnLenTJJ9RavxO9MzozLhNrkA/8NuQvwR6XciDf/y9wCvDvwgc8uK3uRltOlIfJ5I8KX13OBmpsXCkGHI1H3nrmq/QNR/ot9J+3Um2anNar8fdem5Yr5V7KPM+faoh5k0Q2/Xt6id+WAJuAdsaaj4SSBdwQ8eLpJgFrgM7mma8QjD7tEbGgMdakB+1GBf1WAr/kV5zCdjbUtM5cqwR/AXOZpAIjqFdJAAAAABJRU5ErkJggg==",Yg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgB7ZXtjcIwDIad0w1wG1xHuA2uGwATABPABrBBYYMyAWICYALKBGUD2MC8FpYIoW0+BP94pFdVXcUfceISfYjAdH1k5h88JlAG7Y0xJb0SBMigmh85aOAoTINzybxPt+xFO2gJFfpeQZcOnytvxQiydbKfqn3NYRxCKpHt+INyaKbmSm3CwFNJhUq6vj8FnFsZnqERvQs5BO67bl+t29unV9Jy6oQ8xknBgQ2W/kELx164Pr8a4hgKQ5orh4QT17ej2dcNlaX3RZ1mjk36UlqNzykVLJ7o0WV1mJRt12X8h+Zqti/jGDpRO/7LqKfGJnasbF2f3w1xZBgO6T4ge1h4sirxDcgNhcIto54S8P20MjxG0C90hMqo4fchhSsQmqLT+mqr+wAAAABJRU5ErkJggg==";function Zl(e,t){return function(){return e.apply(t,arguments)}}const{toString:eu}=Object.prototype,{getPrototypeOf:fo}=Object,ho=(e=>t=>{const n=eu.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),At=e=>(e=e.toLowerCase(),t=>ho(t)===e),As=e=>t=>typeof t===e,{isArray:Nn}=Array,ir=As("undefined");function Qg(e){return e!==null&&!ir(e)&&e.constructor!==null&&!ir(e.constructor)&&Ft(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const tu=At("ArrayBuffer");function Jg(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&tu(e.buffer),t}const Xg=As("string"),Ft=As("function"),nu=As("number"),po=e=>e!==null&&typeof e=="object",Zg=e=>e===!0||e===!1,xr=e=>{if(ho(e)!=="object")return!1;const t=fo(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},em=At("Date"),tm=At("File"),nm=At("Blob"),rm=At("FileList"),sm=e=>po(e)&&Ft(e.pipe),im=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||eu.call(e)===t||Ft(e.toString)&&e.toString()===t)},om=At("URLSearchParams"),am=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function dr(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),Nn(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function ru(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const su=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),iu=e=>!ir(e)&&e!==su;function Ti(){const{caseless:e}=iu(this)&&this||{},t={},n=(r,s)=>{const i=e&&ru(t,s)||s;xr(t[i])&&xr(r)?t[i]=Ti(t[i],r):xr(r)?t[i]=Ti({},r):Nn(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&dr(arguments[r],n);return t}const cm=(e,t,n,{allOwnKeys:r}={})=>(dr(t,(s,i)=>{n&&Ft(s)?e[i]=Zl(s,n):e[i]=s},{allOwnKeys:r}),e),lm=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),um=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},fm=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&fo(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},dm=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},hm=e=>{if(!e)return null;if(Nn(e))return e;let t=e.length;if(!nu(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pm=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fo(Uint8Array)),gm=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},mm=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},_m=At("HTMLFormElement"),ym=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),La=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Am=At("RegExp"),ou=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};dr(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},vm=e=>{ou(e,(t,n)=>{if(Ft(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ft(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bm=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Nn(e)?r(e):r(String(e).split(t)),n},wm=()=>{},Em=(e,t)=>(e=+e,Number.isFinite(e)?e:t),js="abcdefghijklmnopqrstuvwxyz",Ma="0123456789",au={DIGIT:Ma,ALPHA:js,ALPHA_DIGIT:js+js.toUpperCase()+Ma},Im=(e=16,t=au.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Tm(e){return!!(e&&Ft(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Sm=e=>{const t=new Array(10),n=(r,s)=>{if(po(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=Nn(r)?[]:{};return dr(r,(o,a)=>{const c=n(o,s+1);!ir(c)&&(i[a]=c)}),t[s]=void 0,i}}return r};return n(e,0)},A={isArray:Nn,isArrayBuffer:tu,isBuffer:Qg,isFormData:im,isArrayBufferView:Jg,isString:Xg,isNumber:nu,isBoolean:Zg,isObject:po,isPlainObject:xr,isUndefined:ir,isDate:em,isFile:tm,isBlob:nm,isRegExp:Am,isFunction:Ft,isStream:sm,isURLSearchParams:om,isTypedArray:pm,isFileList:rm,forEach:dr,merge:Ti,extend:cm,trim:am,stripBOM:lm,inherits:um,toFlatObject:fm,kindOf:ho,kindOfTest:At,endsWith:dm,toArray:hm,forEachEntry:gm,matchAll:mm,isHTMLForm:_m,hasOwnProperty:La,hasOwnProp:La,reduceDescriptors:ou,freezeMethods:vm,toObjectSet:bm,toCamelCase:ym,noop:wm,toFiniteNumber:Em,findKey:ru,global:su,isContextDefined:iu,ALPHABET:au,generateString:Im,isSpecCompliantForm:Tm,toJSONObject:Sm};function Q(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}A.inherits(Q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const cu=Q.prototype,lu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{lu[e]={value:e}});Object.defineProperties(Q,lu);Object.defineProperty(cu,"isAxiosError",{value:!0});Q.from=(e,t,n,r,s,i)=>{const o=Object.create(cu);return A.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),Q.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Cm=null;function Si(e){return A.isPlainObject(e)||A.isArray(e)}function uu(e){return A.endsWith(e,"[]")?e.slice(0,-2):e}function Ba(e,t,n){return e?e.concat(t).map(function(s,i){return s=uu(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Rm(e){return A.isArray(e)&&!e.some(Si)}const Om=A.toFlatObject(A,{},null,function(t){return/^is[A-Z]/.test(t)});function vs(e,t,n){if(!A.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=A.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,N){return!A.isUndefined(N[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&A.isSpecCompliantForm(t);if(!A.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(A.isDate(_))return _.toISOString();if(!c&&A.isBlob(_))throw new Q("Blob is not supported. Use a Buffer instead.");return A.isArrayBuffer(_)||A.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,b,N){let R=_;if(_&&!N&&typeof _=="object"){if(A.endsWith(b,"{}"))b=r?b:b.slice(0,-2),_=JSON.stringify(_);else if(A.isArray(_)&&Rm(_)||(A.isFileList(_)||A.endsWith(b,"[]"))&&(R=A.toArray(_)))return b=uu(b),R.forEach(function(E,T){!(A.isUndefined(E)||E===null)&&t.append(o===!0?Ba([b],T,i):o===null?b:b+"[]",l(E))}),!1}return Si(_)?!0:(t.append(Ba(N,b,i),l(_)),!1)}const f=[],p=Object.assign(Om,{defaultVisitor:u,convertValue:l,isVisitable:Si});function g(_,b){if(!A.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(_),A.forEach(_,function(R,x){(!(A.isUndefined(R)||R===null)&&s.call(t,R,A.isString(x)?x.trim():x,b,p))===!0&&g(R,b?b.concat(x):[x])}),f.pop()}}if(!A.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Ua(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function go(e,t){this._pairs=[],e&&vs(e,this,t)}const fu=go.prototype;fu.append=function(t,n){this._pairs.push([t,n])};fu.toString=function(t){const n=t?function(r){return t.call(this,r,Ua)}:Ua;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Pm(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function du(e,t,n){if(!t)return e;const r=n&&n.encode||Pm,s=n&&n.serialize;let i;if(s?i=s(t,n):i=A.isURLSearchParams(t)?t.toString():new go(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class km{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){A.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Fa=km,hu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Dm=typeof URLSearchParams<"u"?URLSearchParams:go,Nm=typeof FormData<"u"?FormData:null,xm=typeof Blob<"u"?Blob:null,Lm=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Mm=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),tt={isBrowser:!0,classes:{URLSearchParams:Dm,FormData:Nm,Blob:xm},isStandardBrowserEnv:Lm,isStandardBrowserWebWorkerEnv:Mm,protocols:["http","https","file","blob","url","data"]};function Bm(e,t){return vs(e,new tt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return tt.isNode&&A.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Um(e){return A.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Fm(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function pu(e){function t(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&A.isArray(s)?s.length:o,c?(A.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!A.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&A.isArray(s[o])&&(s[o]=Fm(s[o])),!a)}if(A.isFormData(e)&&A.isFunction(e.entries)){const n={};return A.forEachEntry(e,(r,s)=>{t(Um(r),s,n,0)}),n}return null}const jm={"Content-Type":void 0};function $m(e,t,n){if(A.isString(e))try{return(t||JSON.parse)(e),A.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const bs={transitional:hu,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=A.isObject(t);if(i&&A.isHTMLForm(t)&&(t=new FormData(t)),A.isFormData(t))return s&&s?JSON.stringify(pu(t)):t;if(A.isArrayBuffer(t)||A.isBuffer(t)||A.isStream(t)||A.isFile(t)||A.isBlob(t))return t;if(A.isArrayBufferView(t))return t.buffer;if(A.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Bm(t,this.formSerializer).toString();if((a=A.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return vs(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),$m(t)):t}],transformResponse:[function(t){const n=this.transitional||bs.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&A.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?Q.from(a,Q.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tt.classes.FormData,Blob:tt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};A.forEach(["delete","get","head"],function(t){bs.headers[t]={}});A.forEach(["post","put","patch"],function(t){bs.headers[t]=A.merge(jm)});const mo=bs,Hm=A.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Vm=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Hm[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ja=Symbol("internals");function jn(e){return e&&String(e).trim().toLowerCase()}function Lr(e){return e===!1||e==null?e:A.isArray(e)?e.map(Lr):String(e)}function Wm(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const zm=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function $s(e,t,n,r,s){if(A.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!A.isString(t)){if(A.isString(r))return t.indexOf(r)!==-1;if(A.isRegExp(r))return r.test(t)}}function Km(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function qm(e,t){const n=A.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class ws{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,c,l){const u=jn(c);if(!u)throw new Error("header name must be a non-empty string");const f=A.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Lr(a))}const o=(a,c)=>A.forEach(a,(l,u)=>i(l,u,c));return A.isPlainObject(t)||t instanceof this.constructor?o(t,n):A.isString(t)&&(t=t.trim())&&!zm(t)?o(Vm(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=jn(t),t){const r=A.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Wm(s);if(A.isFunction(n))return n.call(this,s,r);if(A.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=jn(t),t){const r=A.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||$s(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=jn(o),o){const a=A.findKey(r,o);a&&(!n||$s(r,r[a],a,n))&&(delete r[a],s=!0)}}return A.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||$s(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return A.forEach(this,(s,i)=>{const o=A.findKey(r,i);if(o){n[o]=Lr(s),delete n[i];return}const a=t?Km(i):String(i).trim();a!==i&&delete n[i],n[a]=Lr(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return A.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&A.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ja]=this[ja]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=jn(o);r[a]||(qm(s,o),r[a]=!0)}return A.isArray(t)?t.forEach(i):i(t),this}}ws.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);A.freezeMethods(ws.prototype);A.freezeMethods(ws);const pt=ws;function Hs(e,t){const n=this||mo,r=t||n,s=pt.from(r.headers);let i=r.data;return A.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function gu(e){return!!(e&&e.__CANCEL__)}function hr(e,t,n){Q.call(this,e??"canceled",Q.ERR_CANCELED,t,n),this.name="CanceledError"}A.inherits(hr,Q,{__CANCEL__:!0});function Gm(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Q("Request failed with status code "+n.status,[Q.ERR_BAD_REQUEST,Q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ym=tt.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),A.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),A.isString(i)&&c.push("path="+i),A.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Qm(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Jm(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function mu(e,t){return e&&!Qm(t)?Jm(e,t):t}const Xm=tt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=A.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Zm(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function e_(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const g=u&&l-u;return g?Math.round(p*1e3/g):void 0}}function $a(e,t){let n=0;const r=e_(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const t_=typeof XMLHttpRequest<"u",n_=t_&&function(e){return new Promise(function(n,r){let s=e.data;const i=pt.from(e.headers).normalize(),o=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}A.isFormData(s)&&(tt.isStandardBrowserEnv||tt.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+_))}const u=mu(e.baseURL,e.url);l.open(e.method.toUpperCase(),du(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function f(){if(!l)return;const g=pt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:e,request:l};Gm(function(R){n(R),c()},function(R){r(R),c()},b),l=null}if("onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(f)},l.onabort=function(){l&&(r(new Q("Request aborted",Q.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new Q("Network Error",Q.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let _=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||hu;e.timeoutErrorMessage&&(_=e.timeoutErrorMessage),r(new Q(_,b.clarifyTimeoutError?Q.ETIMEDOUT:Q.ECONNABORTED,e,l)),l=null},tt.isStandardBrowserEnv){const g=(e.withCredentials||Xm(u))&&e.xsrfCookieName&&Ym.read(e.xsrfCookieName);g&&i.set(e.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&A.forEach(i.toJSON(),function(_,b){l.setRequestHeader(b,_)}),A.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",$a(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",$a(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=g=>{l&&(r(!g||g.type?new hr(null,e,l):g),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const p=Zm(u);if(p&&tt.protocols.indexOf(p)===-1){r(new Q("Unsupported protocol "+p+":",Q.ERR_BAD_REQUEST,e));return}l.send(s||null)})},Mr={http:Cm,xhr:n_};A.forEach(Mr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const r_={getAdapter:e=>{e=A.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=A.isString(n)?Mr[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new Q(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(A.hasOwnProp(Mr,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!A.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Mr};function Vs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new hr(null,e)}function Ha(e){return Vs(e),e.headers=pt.from(e.headers),e.data=Hs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),r_.getAdapter(e.adapter||mo.adapter)(e).then(function(r){return Vs(e),r.data=Hs.call(e,e.transformResponse,r),r.headers=pt.from(r.headers),r},function(r){return gu(r)||(Vs(e),r&&r.response&&(r.response.data=Hs.call(e,e.transformResponse,r.response),r.response.headers=pt.from(r.response.headers))),Promise.reject(r)})}const Va=e=>e instanceof pt?e.toJSON():e;function Cn(e,t){t=t||{};const n={};function r(l,u,f){return A.isPlainObject(l)&&A.isPlainObject(u)?A.merge.call({caseless:f},l,u):A.isPlainObject(u)?A.merge({},u):A.isArray(u)?u.slice():u}function s(l,u,f){if(A.isUndefined(u)){if(!A.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!A.isUndefined(u))return r(void 0,u)}function o(l,u){if(A.isUndefined(u)){if(!A.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Va(l),Va(u),!0)};return A.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const f=c[u]||s,p=f(e[u],t[u],u);A.isUndefined(p)&&f!==a||(n[u]=p)}),n}const _u="1.3.5",_o={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{_o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Wa={};_o.transitional=function(t,n,r){function s(i,o){return"[Axios v"+_u+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new Q(s(o," has been removed"+(n?" in "+n:"")),Q.ERR_DEPRECATED);return n&&!Wa[o]&&(Wa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function s_(e,t,n){if(typeof e!="object")throw new Q("options must be an object",Q.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new Q("option "+i+" must be "+c,Q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Q("Unknown option "+i,Q.ERR_BAD_OPTION)}}const Ci={assertOptions:s_,validators:_o},Et=Ci.validators;class Gr{constructor(t){this.defaults=t,this.interceptors={request:new Fa,response:new Fa}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Cn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ci.assertOptions(r,{silentJSONParsing:Et.transitional(Et.boolean),forcedJSONParsing:Et.transitional(Et.boolean),clarifyTimeoutError:Et.transitional(Et.boolean)},!1),s!=null&&(A.isFunction(s)?n.paramsSerializer={serialize:s}:Ci.assertOptions(s,{encode:Et.function,serialize:Et.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&A.merge(i.common,i[n.method]),o&&A.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=pt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,p;if(!c){const _=[Ha.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),p=_.length,u=Promise.resolve(n);f<p;)u=u.then(_[f++],_[f++]);return u}p=a.length;let g=n;for(f=0;f<p;){const _=a[f++],b=a[f++];try{g=_(g)}catch(N){b.call(this,N);break}}try{u=Ha.call(this,g)}catch(_){return Promise.reject(_)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=Cn(this.defaults,t);const n=mu(t.baseURL,t.url);return du(n,t.params,t.paramsSerializer)}}A.forEach(["delete","get","head","options"],function(t){Gr.prototype[t]=function(n,r){return this.request(Cn(r||{},{method:t,url:n,data:(r||{}).data}))}});A.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(Cn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Gr.prototype[t]=n(),Gr.prototype[t+"Form"]=n(!0)});const Br=Gr;class yo{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new hr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new yo(function(s){t=s}),cancel:t}}}const i_=yo;function o_(e){return function(n){return e.apply(null,n)}}function a_(e){return A.isObject(e)&&e.isAxiosError===!0}const Ri={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ri).forEach(([e,t])=>{Ri[t]=e});const c_=Ri;function yu(e){const t=new Br(e),n=Zl(Br.prototype.request,t);return A.extend(n,Br.prototype,t,{allOwnKeys:!0}),A.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return yu(Cn(e,s))},n}const he=yu(mo);he.Axios=Br;he.CanceledError=hr;he.CancelToken=i_;he.isCancel=gu;he.VERSION=_u;he.toFormData=vs;he.AxiosError=Q;he.Cancel=he.CanceledError;he.all=function(t){return Promise.all(t)};he.spread=o_;he.isAxiosError=a_;he.mergeConfig=Cn;he.AxiosHeaders=pt;he.formToJSON=e=>pu(A.isHTMLForm(e)?new FormData(e):e);he.HttpStatusCode=c_;he.default=he;const l_=he;const u_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgB7ZSxDYAgEEV/dAFGoLR0hBvJkdzAEYyTaGmnG+gZKWzk9MSEBF7yKy48DsgBmUySlMJ6x6k4A2SMq52hgDibi0TNWVxtfVdU4DvH5j3OzibOCgUEubNrRyPHQgkJsmAiSRZU5JMZJ3gt0n4Qg8AQIrjGX4SEiL7+nVD1ngTduLJQcJyw5TQP6y08czGTSZgd7Xk6rx9nNSgAAAAASUVORK5CYII=",f_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABqSURBVHgB7dJRCYBAEIThwQQ29BoYwYtgA21gBCMYxQjnCieeIMKBs0/zwTz/LCwgIpU6225bQHaGUh411hehzdaCZChCq1doBlH4I9SgXoKDiPu6CQ4inB7kLUh9/UvA80K6kGMjROTLAexeIZF+8NxQAAAAAElFTkSuQmCC",d_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgB7dLLCYAwEEXRixXYoZZgB6YDS9AOLCElWIolxAQEJRt/zAhhDswyXAIPjDEXhnghXoMCv8dUgnW85RTsEZaCXjOYTH8G2zsPKt4LKBk5fuUQkg/EISSffoegmYeD+BpbNULGFGYDKwEhkMTAAJcAAAAASUVORK5CYII=",h_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgB7ZTBDYAgDEV/nIAROgIj6ESu4CaO4AiOIiO4ATaRkwEsBPHSl7x4wbyUNACKokSwLAnPzuzKGlRArGcPyII+OKYODOl/cbIuhHbIJ6yGcE8mmfB1spbBJjFpsFksFjSlsdyC/Aah0zUSOi0IodPqU0FIFMstiAkBx07h+ykW8od1YTcoivLkAiO9NggrrwBvAAAAAElFTkSuQmCC",p_="/Yu-Gi-Oh-Api/assets/eyeNotStarred-774d2c4f.png",g_="/Yu-Gi-Oh-Api/assets/eyeAdded-95591e38.png";const m_={class:"card__wrapper"},__={class:"uniqueCard"},y_={class:"uniqueCard__image--wrapper"},A_=["src"],v_={class:"uniqueCard__informations--wrapper"},b_={class:"cardName"},w_={class:"favs"},E_=["src"],I_={class:"pagination"},T_=U("img",{src:u_},null,-1),S_=[T_],C_=U("img",{src:f_},null,-1),R_=[C_],O_={class:"currentPage pages activePage"},P_={key:0,class:"nextPage pages"},k_=U("img",{src:d_},null,-1),D_=[k_],N_=U("img",{src:h_},null,-1),x_=[N_],L_={__name:"CardMobile",props:{preFilterProp:{type:Array,required:!0},searchByWhat:{type:String,required:!0},searchText:{type:String,required:!0},attackFrom:{type:Number,required:!1},attackTo:{type:Number,required:!1},defenceFrom:{type:Number,required:!1},defenceTo:{type:Number,required:!1},allCards:{type:Boolean,required:!1},monsters:{type:Boolean,required:!1},spells:{type:Boolean,required:!1},traps:{type:Boolean,required:!1}},setup(e){const t=e,n=Dl(),r=G(null),s=G(0),i=G(10),o=G(1),a=G(1),c=()=>{o.value+1<=r.value&&(i.value+=10,s.value+=10,o.value++,console.log(o.value),document.documentElement.scrollTop=0)},l=()=>{i.value!==10&&(i.value-=10,s.value-=10,o.value--,document.documentElement.scrollTop=0)},u=()=>{i.value=10,s.value=0,o.value=1,document.documentElement.scrollTop=0},f=()=>{o.value=r.value,s.value=r.value*10-10,i.value=r.value*10,document.documentElement.scrollTop=0},p=Ce(()=>{let E=[];return n.state.allBox?E=t.preFilterProp.filter(T=>{if(t.searchByWhat==="true")return T.name.toLowerCase().includes(t.searchText.toLowerCase());if(t.searchByWhat==="false")return T.desc.toLowerCase().includes(t.searchText.toLowerCase())}):n.state.monstersBox?E=t.preFilterProp.filter(T=>{if(t.searchByWhat==="true")return T.name.toLowerCase().includes(t.searchText.toLowerCase())&&g(T)&&_(T)&&b(T)&&N(T)&&x(T);if(t.searchByWhat==="false")return T.desc.toLowerCase().includes(t.searchText.toLowerCase())&&g(T)&&_(T)&&b(T)&&N(T)&&x(T)}):n.state.spellsBox?E=t.preFilterProp.filter(T=>{if(t.searchByWhat==="true")return T.name.toLowerCase().includes(t.searchText.toLowerCase())&&R(T)&&T.type.toLowerCase().includes("spell");if(t.searchByWhat==="false")return T.desc.toLowerCase().includes(t.searchText.toLowerCase())&&R(T)&&T.type.toLowerCase().includes("spell")}):n.state.trapsBox&&(E=t.preFilterProp.filter(T=>{if(t.searchByWhat==="true")return T.name.toLowerCase().includes(t.searchText.toLowerCase())&&R(T)&&T.type.toLowerCase().includes("trap");if(t.searchByWhat==="false")return T.desc.toLowerCase().includes(t.searchText.toLowerCase())&&R(T)&&T.type.toLowerCase().includes("trap")})),r.value=Math.ceil(E.length/10),console.log(r.value),console.log(E),n.state.ByAttackAscending?E.sort((T,$)=>T.atk-$.atk):n.state.ByAttackDescending?E.sort((T,$)=>T.atk-$.atk).reverse():n.state.ByDefenceAscending?E.sort((T,$)=>T.def-$.def):E.sort((T,$)=>T.def-$.def).reverse()}),g=E=>{const T=Array.from(n.state.selectedLevels);return T.length===0?n.state.levels.some(V=>E.level.toString().includes(V)):T.some(V=>E.level.toString().includes(V))},_=E=>{const T=Array.from(n.state.selectedAtributes);return T.length===0?n.state.atributes.some(V=>E.attribute.includes(V)):T.some(V=>E.attribute.includes(V))},b=E=>{const T=Array.from(n.state.selectedMonsters);return T.length===0?n.state.monsters.some(V=>E.race.includes(V)):T.some(V=>E.race.includes(V))},N=E=>{const T=Array.from(n.state.selectedCardTypes);return T.length===0?n.state.types.some(V=>E.type.includes(V)):T.some(V=>E.type.includes(V))},R=E=>{const T=Array.from(n.state.selectedRaces);return T.length===0?n.state.races.some(V=>E.race.includes(V)):T.some(V=>E.race.includes(V))},x=E=>E.atk>=t.attackFrom&&E.atk<=t.attackTo&&E.def>=t.defenceFrom&&E.def<=t.defenceTo;return Nt(()=>t.searchText,()=>{s.value=0,i.value=10,o.value=1}),Nt([()=>t.monsters,()=>t.spells,()=>t.allCards,()=>t.traps],()=>{a.value=1,s.value=0,i.value=10,o.value=1}),(E,T)=>(Ve(),Pt(Ie,null,[U("ul",m_,[(Ve(!0),Pt(Ie,null,fh(ge(p).slice(s.value,i.value),$=>(Ve(),Pt("li",{class:"card__card",key:$.id},[U("div",__,[U("div",y_,[U("img",{src:$.card_images[0].image_url,alt:"cardImage"},null,8,A_)]),U("div",v_,[U("div",b_,[U("h2",null,Rr($.name),1)]),U("div",w_,[U("img",{class:"default",src:ge(n).state.favList.includes($.name)?ge(g_):ge(p_)},null,8,E_)])])])]))),128))]),U("section",I_,[U("div",{onClick:u,class:"firstPage moveFar"},S_),U("div",{onClick:l,class:"Prev moveLess"},R_),U("div",O_,Rr(o.value),1),r.value>1&&o.value!=r.value?(Ve(),Pt("div",P_,Rr(o.value+1),1)):Sl("",!0),U("div",{onClick:c,class:"Next moveLess"},D_),U("div",{onClick:f,class:"lastPage moveFar"},x_)])],64))}},M_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEFSURBVHgB7ZYxbsJAEEVnVhMKhBR3UbocITcIXZRupVzAOUHgBBwBfAJ8AYQ7xDE4AXSIzhUSMNplVggJTOFBUIC0r/BaX/7+u82fxfnYJq0Wpc5BAjU4x/n7T7E41ZYT+2EMpaCg0eABNZvUkfeeMRoLfcrDnilEQ1naGvdmQ6Uq5ohs6hVuABGSqwLvQQyMgTHwAgp1JdX0pfnYOZ9VNUSfeY+1XkQsndvlEHl6MMwzopc+gFfMQ5+9fY+KU201/bXG4D8oYOY/OgxPbzUG+XFYiooWwto6P6WxaWJgDHyAQLlrlnATeJVfLs6cb7dUW2uBMDurGvOuKw0yq/OGg63XnO8Be/9HyLmsGN0AAAAASUVORK5CYII=",B_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACrSURBVHgB7ZXdCcJAEIRnxXdTgp3YgiVoBWoH6UDTQUqwg9RgB5aQDi6TcIH8QXa5lwT2g+Vgubl5u09CCBmAG6c91yhF5D9cMH+OeQ2fNpAHPd/pC9xVhvzzABsnpJFZC5PxQi/0whlHTsm5KO8Xyt0Sdexydo5En72h82FBH44UxfyVxwM67lYfVtMXjD7M/afxQi/cRmGNNEz53oeabw1Y9tmL88M6nQ8b8k3YMI/mI78AAAAASUVORK5CYII=",U_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGOSURBVHgB7ZZPTsJAFMbfdFo3sOhGEnZzBI6AC0nYtQJr4QZ6AryBR5C9RtyZIAZuIJ7AujKpGLrvn/FNsbEjJbKorSTzS5p5b940eYtvvnkACoVCUS7k58Zy2htzzi0MF0EQ2PX2nQMFoqcTd9LrfzUjaFBqDHEdiOTjsTvEWh9yhHPiBQGc19s388yGCOHmegWPczAxZ0ktikgDFwY5Q2nEpB7SyWpmmb5Pnwgh4pCHn314/N39273FIGd2ksT7Q7f5MrZMUOwLf6GVXZFELXRTrepjDJsobCeKwK61rhdQINK1r1QM9CDeFDF6DsOrf4Fh7Eso9EtcziBnOI8GtdbtKMm1dDHtQxn/vkIBbPUhdFEnDP2jop+OTMoUteI3NsYPcfUrBwYLNd8rQz9SQ0I7hkFnKGiGqRgN7PRoUMTjKvmQrusWeg+D9UtvalrsO3NRW047V9hoH3LGnZxIPqRvORf7EaVklWxgM8/oUw7kDM5ZkudtaMiddEboQ6cYznGEHfwLH1IoFIoC+QSlBJiLoauhMwAAAABJRU5ErkJggg==",F_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7ZXtDYJADIZ7xgEc4UZgBFdwg3MDncARHAE20A1wA+IE4ASwwdmLJakNfvw44Ix9kua4tuHecLQFUBRFSQzv/ck/qNAsTIzhGxTgcMmZqzDGbCl2wMVBXDq0PZ5x6R1LkbBiieHZslgm9rGwfCO/UBBRUVIQteHqx7hCfH/zMQkPXpM45TeYo9wHCf8NWkl9qEbLYE5CH/LPnFns6MfBcQ0LoYn3IckNpoaurGZXZiEFkhGiDGCkg0aGReu+mjORkcPV4lJCKsMVD9xRhbUDfSj34+C4huULbX0/apnvitZAfLq3UVRckPJSy19RlH/kDpJiU6iQSlDOAAAAAElFTkSuQmCC";/**
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
 */const Au=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},j_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Au(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):j_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new $_;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class $_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H_=function(e){const t=Au(e);return vu.encodeByteArray(t,!0)},bu=function(e){return H_(e).replace(/\./g,"")},wu=function(e){try{return vu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function V_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const W_=()=>V_().__FIREBASE_DEFAULTS__,z_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},K_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&wu(e[1]);return t&&JSON.parse(t)},Ao=()=>{try{return W_()||z_()||K_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},q_=e=>{var t,n;return(n=(t=Ao())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Eu=()=>{var e;return(e=Ao())===null||e===void 0?void 0:e.config},Iu=e=>{var t;return(t=Ao())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class G_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Tu(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Q_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J_(){const e=be();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Su(){try{return typeof indexedDB=="object"}catch{return!1}}function Cu(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function X_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Z_="FirebaseError";class at extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Z_,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?ey(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new at(s,a,r)}}function ey(e,t){return e.replace(ty,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ty=/\{\$([^}]+)}/g;function ny(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function or(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(za(i)&&za(o)){if(!or(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function za(e){return e!==null&&typeof e=="object"}/**
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
 */function pr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Hn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Vn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function ry(e,t){const n=new sy(e,t);return n.subscribe.bind(n)}class sy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iy(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Ws),s.error===void 0&&(s.error=Ws),s.complete===void 0&&(s.complete=Ws);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ws(){}/**
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
 */const oy=1e3,ay=2,cy=4*60*60*1e3,ly=.5;function Ka(e,t=oy,n=ay){const r=t*Math.pow(n,e),s=Math.round(ly*r*(Math.random()-.5)*2);return Math.min(cy,r+s)}/**
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
 */function Ye(e){return e&&e._delegate?e._delegate:e}class ot{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class uy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new G_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dy(t))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Wt){return this.instances.has(t)}getOptions(t=Wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Wt){return this.component?this.component.multipleInstances?t:Wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fy(e){return e===Wt?void 0:e}function dy(e){return e.instantiationMode==="EAGER"}/**
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
 */class hy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new uy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const py={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},gy=se.INFO,my={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},_y=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=my[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vo{constructor(t){this.name=t,this._logLevel=gy,this._logHandler=_y,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?py[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}const yy=(e,t)=>t.some(n=>e instanceof n);let qa,Ga;function Ay(){return qa||(qa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vy(){return Ga||(Ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ru=new WeakMap,Oi=new WeakMap,Ou=new WeakMap,zs=new WeakMap,bo=new WeakMap;function by(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(xt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ru.set(n,e)}).catch(()=>{}),bo.set(t,e),t}function wy(e){if(Oi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Oi.set(e,t)}let Pi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Oi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ou.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ey(e){Pi=e(Pi)}function Iy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ks(this),t,...n);return Ou.set(r,t.sort?t.sort():[t]),xt(r)}:vy().includes(e)?function(...t){return e.apply(Ks(this),t),xt(Ru.get(this))}:function(...t){return xt(e.apply(Ks(this),t))}}function Ty(e){return typeof e=="function"?Iy(e):(e instanceof IDBTransaction&&wy(e),yy(e,Ay())?new Proxy(e,Pi):e)}function xt(e){if(e instanceof IDBRequest)return by(e);if(zs.has(e))return zs.get(e);const t=Ty(e);return t!==e&&(zs.set(e,t),bo.set(t,e)),t}const Ks=e=>bo.get(e);function Sy(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=xt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(xt(o.result),c.oldVersion,c.newVersion,xt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Cy=["get","getKey","getAll","getAllKeys","count"],Ry=["put","add","delete","clear"],qs=new Map;function Ya(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(qs.get(t))return qs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ry.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cy.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return qs.set(t,i),i}Ey(e=>({...e,get:(t,n,r)=>Ya(t,n)||e.get(t,n,r),has:(t,n)=>!!Ya(t,n)||e.has(t,n)}));/**
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
 */class Oy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Py(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Py(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ki="@firebase/app",Qa="0.9.13";/**
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
 */const en=new vo("@firebase/app"),ky="@firebase/app-compat",Dy="@firebase/analytics-compat",Ny="@firebase/analytics",xy="@firebase/app-check-compat",Ly="@firebase/app-check",My="@firebase/auth",By="@firebase/auth-compat",Uy="@firebase/database",Fy="@firebase/database-compat",jy="@firebase/functions",$y="@firebase/functions-compat",Hy="@firebase/installations",Vy="@firebase/installations-compat",Wy="@firebase/messaging",zy="@firebase/messaging-compat",Ky="@firebase/performance",qy="@firebase/performance-compat",Gy="@firebase/remote-config",Yy="@firebase/remote-config-compat",Qy="@firebase/storage",Jy="@firebase/storage-compat",Xy="@firebase/firestore",Zy="@firebase/firestore-compat",eA="firebase",tA="9.23.0";/**
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
 */const Di="[DEFAULT]",nA={[ki]:"fire-core",[ky]:"fire-core-compat",[Ny]:"fire-analytics",[Dy]:"fire-analytics-compat",[Ly]:"fire-app-check",[xy]:"fire-app-check-compat",[My]:"fire-auth",[By]:"fire-auth-compat",[Uy]:"fire-rtdb",[Fy]:"fire-rtdb-compat",[jy]:"fire-fn",[$y]:"fire-fn-compat",[Hy]:"fire-iid",[Vy]:"fire-iid-compat",[Wy]:"fire-fcm",[zy]:"fire-fcm-compat",[Ky]:"fire-perf",[qy]:"fire-perf-compat",[Gy]:"fire-rc",[Yy]:"fire-rc-compat",[Qy]:"fire-gcs",[Jy]:"fire-gcs-compat",[Xy]:"fire-fst",[Zy]:"fire-fst-compat","fire-js":"fire-js",[eA]:"fire-js-all"};/**
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
 */const Yr=new Map,Ni=new Map;function rA(e,t){try{e.container.addComponent(t)}catch(n){en.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mt(e){const t=e.name;if(Ni.has(t))return en.debug(`There were multiple attempts to register component ${t}.`),!1;Ni.set(t,e);for(const n of Yr.values())rA(n,e);return!0}function xn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const sA={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new an("app","Firebase",sA);/**
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
 */class iA{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const gr=tA;function Pu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Di,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Lt.create("bad-app-name",{appName:String(s)});if(n||(n=Eu()),!n)throw Lt.create("no-options");const i=Yr.get(s);if(i){if(or(n,i.options)&&or(r,i.config))return i;throw Lt.create("duplicate-app",{appName:s})}const o=new hy(s);for(const c of Ni.values())o.addComponent(c);const a=new iA(n,r,o);return Yr.set(s,a),a}function ku(e=Di){const t=Yr.get(e);if(!t&&e===Di&&Eu())return Pu();if(!t)throw Lt.create("no-app",{appName:e});return t}function nt(e,t,n){var r;let s=(r=nA[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),en.warn(a.join(" "));return}mt(new ot(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const oA="firebase-heartbeat-database",aA=1,ar="firebase-heartbeat-store";let Gs=null;function Du(){return Gs||(Gs=Sy(oA,aA,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ar)}}}).catch(e=>{throw Lt.create("idb-open",{originalErrorMessage:e.message})})),Gs}async function cA(e){try{return await(await Du()).transaction(ar).objectStore(ar).get(Nu(e))}catch(t){if(t instanceof at)en.warn(t.message);else{const n=Lt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});en.warn(n.message)}}}async function Ja(e,t){try{const r=(await Du()).transaction(ar,"readwrite");await r.objectStore(ar).put(t,Nu(e)),await r.done}catch(n){if(n instanceof at)en.warn(n.message);else{const r=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function Nu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const lA=1024,uA=30*24*60*60*1e3;class fA{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=uA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xa(),{heartbeatsToSend:n,unsentEntries:r}=dA(this._heartbeatsCache.heartbeats),s=bu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xa(){return new Date().toISOString().substring(0,10)}function dA(e,t=lA){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Za(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Za(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hA{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Su()?Cu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ja(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Za(e){return bu(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function pA(e){mt(new ot("platform-logger",t=>new Oy(t),"PRIVATE")),mt(new ot("heartbeat",t=>new fA(t),"PRIVATE")),nt(ki,Qa,e),nt(ki,Qa,"esm2017"),nt("fire-js","")}pA("");function wo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function xu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gA=xu,Lu=new an("auth","Firebase",xu());/**
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
 */const Qr=new vo("@firebase/auth");function mA(e,...t){Qr.logLevel<=se.WARN&&Qr.warn(`Auth (${gr}): ${e}`,...t)}function Ur(e,...t){Qr.logLevel<=se.ERROR&&Qr.error(`Auth (${gr}): ${e}`,...t)}/**
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
 */function Ue(e,...t){throw Eo(e,...t)}function rt(e,...t){return Eo(e,...t)}function Mu(e,t,n){const r=Object.assign(Object.assign({},gA()),{[t]:n});return new an("auth","Firebase",r).create(t,{appName:e.name})}function _A(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ue(e,"argument-error"),Mu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Eo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Lu.create(e,...t)}function H(e,t,...n){if(!e)throw Eo(t,...n)}function dt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ur(t),new Error(t)}function _t(e,t){e||dt(t)}/**
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
 */function xi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function yA(){return ec()==="http:"||ec()==="https:"}function ec(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function AA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yA()||Tu()||"connection"in navigator)?navigator.onLine:!0}function vA(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class mr{constructor(t,n){this.shortDelay=t,this.longDelay=n,_t(n>t,"Short delay should be less than long delay!"),this.isMobile=Y_()||Q_()}get(){return AA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Io(e,t){_t(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Bu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wA=new mr(3e4,6e4);function Ln(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Mn(e,t,n,r,s={}){return Uu(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=pr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Bu.fetch()(Fu(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Uu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},bA),t);try{const s=new EA(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Cr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Cr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Cr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Mu(e,u,l);Ue(e,u)}}catch(s){if(s instanceof at)throw s;Ue(e,"network-request-failed",{message:String(s)})}}async function _r(e,t,n,r,s={}){const i=await Mn(e,t,n,r,s);return"mfaPendingCredential"in i&&Ue(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Fu(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Io(e.config,s):`${e.config.apiScheme}://${s}`}class EA{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),wA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rt(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function IA(e,t){return Mn(e,"POST","/v1/accounts:delete",t)}async function TA(e,t){return Mn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Gn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function SA(e,t=!1){const n=Ye(e),r=await n.getIdToken(t),s=To(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gn(Ys(s.auth_time)),issuedAtTime:Gn(Ys(s.iat)),expirationTime:Gn(Ys(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ys(e){return Number(e)*1e3}function To(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ur("JWT malformed, contained fewer than 3 sections"),null;try{const s=wu(n);return s?JSON.parse(s):(Ur("Failed to decode base64 JWT payload"),null)}catch(s){return Ur("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function CA(e){const t=To(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function cr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof at&&RA(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function RA({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class OA{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ju{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gn(this.lastLoginAt),this.creationTime=Gn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await cr(e,TA(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?DA(i.providerUserInfo):[],a=kA(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ju(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function PA(e){const t=Ye(e);await Jr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function kA(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function DA(e){return e.map(t=>{var{providerId:n}=t,r=wo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function NA(e,t){const n=await Uu(e,{},async()=>{const r=pr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Fu(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):CA(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return H(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await NA(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new lr;return r&&(H(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function It(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Zt{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=wo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ju(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await cr(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return SA(this,t)}reload(){return PA(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Zt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await cr(this,IA(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:T,isAnonymous:$,providerData:V,stsTokenManager:le}=n;H(E&&le,t,"internal-error");const M=lr.fromJSON(this.name,le);H(typeof E=="string",t,"internal-error"),It(f,t.name),It(p,t.name),H(typeof T=="boolean",t,"internal-error"),H(typeof $=="boolean",t,"internal-error"),It(g,t.name),It(_,t.name),It(b,t.name),It(N,t.name),It(R,t.name),It(x,t.name);const oe=new Zt({uid:E,auth:t,email:p,emailVerified:T,displayName:f,isAnonymous:$,photoURL:_,phoneNumber:g,tenantId:b,stsTokenManager:M,createdAt:R,lastLoginAt:x});return V&&Array.isArray(V)&&(oe.providerData=V.map(ne=>Object.assign({},ne))),N&&(oe._redirectEventId=N),oe}static async _fromIdTokenResponse(t,n,r=!1){const s=new lr;s.updateFromServerResponse(n);const i=new Zt({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Jr(i),i}}/**
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
 */const tc=new Map;function ht(e){_t(e instanceof Function,"Expected a class definition");let t=tc.get(e);return t?(_t(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,tc.set(e,t),t)}/**
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
 */class $u{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}$u.type="NONE";const nc=$u;/**
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
 */function Fr(e,t,n){return`firebase:${e}:${t}:${n}`}class bn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Zt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new bn(ht(nc),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ht(nc);const o=Fr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Zt._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new bn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new bn(i,t,r))}}/**
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
 */function rc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Hu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ku(t))return"Blackberry";if(qu(t))return"Webos";if(So(t))return"Safari";if((t.includes("chrome/")||Vu(t))&&!t.includes("edge/"))return"Chrome";if(zu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hu(e=be()){return/firefox\//i.test(e)}function So(e=be()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Vu(e=be()){return/crios\//i.test(e)}function Wu(e=be()){return/iemobile/i.test(e)}function zu(e=be()){return/android/i.test(e)}function Ku(e=be()){return/blackberry/i.test(e)}function qu(e=be()){return/webos/i.test(e)}function Es(e=be()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xA(e=be()){var t;return Es(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function LA(){return J_()&&document.documentMode===10}function Gu(e=be()){return Es(e)||zu(e)||qu(e)||Ku(e)||/windows phone/i.test(e)||Wu(e)}function MA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Yu(e,t=[]){let n;switch(e){case"Browser":n=rc(be());break;case"Worker":n=`${rc(be())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${gr}/${r}`}async function Qu(e,t){return Mn(e,"GET","/v2/recaptchaConfig",Ln(e,t))}function sc(e){return e!==void 0&&e.enterprise!==void 0}class Ju{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function BA(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Xu(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=rt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",BA().appendChild(r)})}function UA(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const FA="https://www.google.com/recaptcha/enterprise.js?render=",jA="recaptcha-enterprise",$A="NO_RECAPTCHA";class Zu{constructor(t){this.type=jA,this.auth=cn(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Qu(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ju(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;sc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o($A)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&sc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Xu(FA+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Xr(e,t,n,r=!1){const s=new Zu(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class HA{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class VA{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ic(this),this.idTokenSubscription=new ic(this),this.beforeStateQueue=new HA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await bn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Jr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=vA()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ye(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(t))})}async initializeRecaptchaConfig(){const t=await Qu(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ju(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Zu(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new an("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ht(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,r,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Yu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&mA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cn(e){return Ye(e)}class ic{constructor(t){this.auth=t,this.observer=null,this.addObserver=ry(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function WA(e,t){const n=xn(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(or(i,t??{}))return s;Ue(s,"already-initialized")}return n.initialize({options:t})}function zA(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function KA(e,t,n){const r=cn(e);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ef(t),{host:o,port:a}=qA(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||GA()}function ef(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function qA(e){const t=ef(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:oc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:oc(o)}}}function oc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function GA(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Co{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(t){return dt("not implemented")}_linkToIdToken(t,n){return dt("not implemented")}_getReauthenticationResolver(t){return dt("not implemented")}}async function YA(e,t){return Mn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function Qs(e,t){return _r(e,"POST","/v1/accounts:signInWithPassword",Ln(e,t))}/**
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
 */async function QA(e,t){return _r(e,"POST","/v1/accounts:signInWithEmailLink",Ln(e,t))}async function JA(e,t){return _r(e,"POST","/v1/accounts:signInWithEmailLink",Ln(e,t))}/**
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
 */class ur extends Co{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new ur(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ur(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Xr(t,r,"signInWithPassword");return Qs(t,s)}else return Qs(t,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Xr(t,r,"signInWithPassword");return Qs(t,i)}else return Promise.reject(s)});case"emailLink":return QA(t,{email:this._email,oobCode:this._password});default:Ue(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return YA(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JA(t,{idToken:n,email:this._email,oobCode:this._password});default:Ue(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function wn(e,t){return _r(e,"POST","/v1/accounts:signInWithIdp",Ln(e,t))}/**
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
 */const XA="http://localhost";class tn extends Co{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new tn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=wo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new tn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return wn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,wn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,wn(t,n)}buildRequest(){const t={requestUri:XA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=pr(n)}return t}}/**
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
 */function ZA(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ev(e){const t=Hn(Vn(e)).link,n=t?Hn(Vn(t)).deep_link_id:null,r=Hn(Vn(e)).deep_link_id;return(r?Hn(Vn(r)).link:null)||r||n||t||e}class Ro{constructor(t){var n,r,s,i,o,a;const c=Hn(Vn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=ZA((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=ev(t);try{return new Ro(n)}catch{return null}}}/**
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
 */class Bn{constructor(){this.providerId=Bn.PROVIDER_ID}static credential(t,n){return ur._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ro.parseLink(n);return H(r,"argument-error"),ur._fromEmailAndCode(t,r.code,r.tenantId)}}Bn.PROVIDER_ID="password";Bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Oo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yr extends Oo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ct extends yr{constructor(){super("facebook.com")}static credential(t){return tn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ct.credential(t.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
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
 */class ft extends yr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return tn._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ft.credentialFromTaggedObject(t)}static credentialFromError(t){return ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
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
 */class Rt extends yr{constructor(){super("github.com")}static credential(t){return tn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
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
 */class Ot extends yr{constructor(){super("twitter.com")}static credential(t,n){return tn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
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
 */async function Js(e,t){return _r(e,"POST","/v1/accounts:signUp",Ln(e,t))}/**
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
 */class nn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Zt._fromIdTokenResponse(t,r,s),o=ac(r);return new nn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=ac(r);return new nn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function ac(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Zr extends at{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Zr(t,n,r,s)}}function tf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zr._fromErrorAndOperation(e,i,t,r):i})}async function tv(e,t,n=!1){const r=await cr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nn._forOperation(e,"link",r)}/**
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
 */async function nv(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await cr(e,tf(r,s,t,e),n);H(i.idToken,r,"internal-error");const o=To(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(e.uid===a,r,"user-mismatch"),nn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),i}}/**
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
 */async function nf(e,t,n=!1){const r="signIn",s=await tf(e,r,t),i=await nn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function rv(e,t){return nf(cn(e),t)}async function sv(e,t,n){var r;const s=cn(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Xr(s,i,"signUpPassword");o=Js(s,l)}else o=Js(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Xr(s,i,"signUpPassword");return Js(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await nn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function iv(e,t,n){return rv(Ye(e),Bn.credential(t,n))}function ov(e,t,n,r){return Ye(e).onIdTokenChanged(t,n,r)}function av(e,t,n){return Ye(e).beforeAuthStateChanged(t,n)}function cv(e,t,n,r){return Ye(e).onAuthStateChanged(t,n,r)}function rf(e){return Ye(e).signOut()}const es="__sak";/**
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
 */class sf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(es,"1"),this.storage.removeItem(es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lv(){const e=be();return So(e)||Es(e)}const uv=1e3,fv=10;class of extends sf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lv()&&MA(),this.fallbackToPolling=Gu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);LA()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,fv):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}of.type="LOCAL";const dv=of;/**
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
 */class af extends sf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}af.type="SESSION";const cf=af;/**
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
 */function hv(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Is{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Is(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await hv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Is.receivers=[];/**
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
 */function Po(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class pv{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Po("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function st(){return window}function gv(e){st().location.href=e}/**
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
 */function lf(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function mv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _v(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function yv(){return lf()?self:null}/**
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
 */const uf="firebaseLocalStorageDb",Av=1,ts="firebaseLocalStorage",ff="fbase_key";class Ar{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ts(e,t){return e.transaction([ts],t?"readwrite":"readonly").objectStore(ts)}function vv(){const e=indexedDB.deleteDatabase(uf);return new Ar(e).toPromise()}function Li(){const e=indexedDB.open(uf,Av);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ts,{keyPath:ff})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ts)?t(r):(r.close(),await vv(),t(await Li()))})})}async function cc(e,t,n){const r=Ts(e,!0).put({[ff]:t,value:n});return new Ar(r).toPromise()}async function bv(e,t){const n=Ts(e,!1).get(t),r=await new Ar(n).toPromise();return r===void 0?null:r.value}function lc(e,t){const n=Ts(e,!0).delete(t);return new Ar(n).toPromise()}const wv=800,Ev=3;class df{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Li(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Ev)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Is._getInstance(yv()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await mv(),!this.activeServiceWorker)return;this.sender=new pv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||_v()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Li();return await cc(t,es,"1"),await lc(t,es),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>bv(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>lc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Ts(s,!1).getAll();return new Ar(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}df.type="LOCAL";const Iv=df;new mr(3e4,6e4);/**
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
 */function hf(e,t){return t?ht(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ko extends Co{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return wn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return wn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return wn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Tv(e){return nf(e.auth,new ko(e),e.bypassAuthState)}function Sv(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),nv(n,new ko(e),e.bypassAuthState)}async function Cv(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),tv(n,new ko(e),e.bypassAuthState)}/**
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
 */class pf{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Tv;case"linkViaPopup":case"linkViaRedirect":return Cv;case"reauthViaPopup":case"reauthViaRedirect":return Sv;default:Ue(this.auth,"internal-error")}}resolve(t){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Rv=new mr(2e3,1e4);async function Ov(e,t,n){const r=cn(e);_A(e,t,Oo);const s=hf(r,n);return new Yt(r,"signInViaPopup",t,s).executeNotNull()}class Yt extends pf{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const t=Po();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Rv.get())};t()}}Yt.currentPopupAction=null;/**
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
 */const Pv="pendingRedirect",jr=new Map;class kv extends pf{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=jr.get(this.auth._key());if(!t){try{const r=await Dv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}jr.set(this.auth._key(),t)}return this.bypassAuthState||jr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dv(e,t){const n=Lv(t),r=xv(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Nv(e,t){jr.set(e._key(),t)}function xv(e){return ht(e._redirectPersistence)}function Lv(e){return Fr(Pv,e.config.apiKey,e.name)}async function Mv(e,t,n=!1){const r=cn(e),s=hf(r,t),o=await new kv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Bv=10*60*1e3;class Uv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Fv(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!gf(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Bv&&this.cachedEventUids.clear(),this.cachedEventUids.has(uc(t))}saveEventToCache(t){this.cachedEventUids.add(uc(t)),this.lastProcessedEventTime=Date.now()}}function uc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function gf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Fv(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gf(e);default:return!1}}/**
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
 */async function jv(e,t={}){return Mn(e,"GET","/v1/projects",t)}/**
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
 */const $v=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hv=/^https?/;async function Vv(e){if(e.config.emulator)return;const{authorizedDomains:t}=await jv(e);for(const n of t)try{if(Wv(n))return}catch{}Ue(e,"unauthorized-domain")}function Wv(e){const t=xi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Hv.test(n))return!1;if($v.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zv=new mr(3e4,6e4);function fc(){const e=st().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Kv(e){return new Promise((t,n)=>{var r,s,i;function o(){fc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{fc(),n(rt(e,"network-request-failed"))},timeout:zv.get()})}if(!((s=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=st().gapi)===null||i===void 0)&&i.load)o();else{const a=UA("iframefcb");return st()[a]=()=>{gapi.load?o():n(rt(e,"network-request-failed"))},Xu(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw $r=null,t})}let $r=null;function qv(e){return $r=$r||Kv(e),$r}/**
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
 */const Gv=new mr(5e3,15e3),Yv="__/auth/iframe",Qv="emulator/auth/iframe",Jv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zv(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Io(t,Qv):`https://${e.config.authDomain}/${Yv}`,r={apiKey:t.apiKey,appName:e.name,v:gr},s=Xv.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${pr(r).slice(1)}`}async function eb(e){const t=await qv(e),n=st().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:Zv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rt(e,"network-request-failed"),a=st().setTimeout(()=>{i(o)},Gv.get());function c(){st().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const tb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nb=500,rb=600,sb="_blank",ib="http://localhost";class dc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ob(e,t,n,r=nb,s=rb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tb),{width:r.toString(),height:s.toString(),top:i,left:o}),l=be().toLowerCase();n&&(a=Vu(l)?sb:n),Hu(l)&&(t=t||ib,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(xA(l)&&a!=="_self")return ab(t||"",a),new dc(null);const f=window.open(t||"",a,u);H(f,e,"popup-blocked");try{f.focus()}catch{}return new dc(f)}function ab(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cb="__/auth/handler",lb="emulator/auth/handler",ub=encodeURIComponent("fac");async function hc(e,t,n,r,s,i){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:gr,eventId:s};if(t instanceof Oo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ny(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(t instanceof yr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${ub}=${encodeURIComponent(c)}`:"";return`${fb(e)}?${pr(a).slice(1)}${l}`}function fb({config:e}){return e.emulator?Io(e,lb):`https://${e.authDomain}/${cb}`}/**
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
 */const Xs="webStorageSupport";class db{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cf,this._completeRedirectFn=Mv,this._overrideRedirectResult=Nv}async _openPopup(t,n,r,s){var i;_t((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await hc(t,n,r,xi(),s);return ob(t,o,Po())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await hc(t,n,r,xi(),s);return gv(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await eb(t),r=new Uv(t);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Xs,{type:Xs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xs];o!==void 0&&n(!!o),Ue(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vv(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gu()||So()||Es()}}const hb=db;var pc="@firebase/auth",gc="0.23.2";/**
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
 */class pb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mb(e){mt(new ot("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yu(e)},l=new VA(r,s,i,c);return zA(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),mt(new ot("auth-internal",t=>{const n=cn(t.getProvider("auth").getImmediate());return(r=>new pb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(pc,gc,gb(e)),nt(pc,gc,"esm2017")}/**
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
 */const _b=5*60,yb=Iu("authIdTokenMaxAge")||_b;let mc=null;const Ab=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yb)return;const s=n==null?void 0:n.token;mc!==s&&(mc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fr(e=ku()){const t=xn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=WA(e,{popupRedirectResolver:hb,persistence:[Iv,dv,cf]}),r=Iu("authTokenSyncURL");if(r){const i=Ab(r);av(n,i,()=>i(n.currentUser)),ov(n,o=>i(o))}const s=q_("auth");return s&&KA(n,`http://${s}`),n}mb("Browser");const vb=U("img",{src:qg},null,-1),bb=U("h1",null,"Yu-Gi-Oh!",-1),wb={class:"searchBar"},Eb={class:"filters"},Ib={class:"filters-icons"},Tb=["src"],Sb=["src"],Cb=U("img",{src:Yg},null,-1),Rb={__name:"SearchComponentMobile",setup(e){const t=Dl(),n=uo(),r=G(""),s=G(0),i=G(15e3),o=G(0),a=G(15e3);G("block");const c=G([]);let l=G("true");const u=G(0),f=G(!0),p=G(!1),g=G(!1),_=G(!1);G(!1),G(!1),G(!1),G(!1),G(!1),G(!1),G(!1),G(t.state.levels),G(t.state.types),G(t.state.monsters),G(t.state.races),G(t.state.atributes);const b=()=>{rf(fr()).then(()=>{n.push("/signin")})},N=Ce(()=>c.value);(()=>{t.commit("setDefaultForSelectedAtributes"),t.commit("setDefaultForSelectedMonsterTypes"),t.commit("setDefaultForSelectedCardTypes"),t.commit("setDefaultForSelectedLevels"),t.commit("setDefaultForSelectedRaces")})();const x=async()=>{try{const le=(await l_.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")).data.data;le.forEach(M=>{M.hasOwnProperty("attribute")||(M.attribute="undefined"),M.hasOwnProperty("name")||(M.name="undefined"),M.hasOwnProperty("race")||(M.race="undefined"),M.hasOwnProperty("type")||(M.type="undefined"),M.hasOwnProperty("atk")||(M.atk="undefined"),M.hasOwnProperty("def")||(M.def="undefined"),M.hasOwnProperty("level")||(M.level="undefined")}),c.value=le,console.log(c.value),u.value=c.value.length,console.log(u.value)}catch(V){console.log(V)}};to(()=>{x()});const E=()=>{t.commit("showGallery")},T=()=>{t.commit("showList")},$=()=>{console.log("Filters expanded")};return(V,le)=>(Ve(),Pt(Ie,null,[U("nav",null,[vb,bb,U("img",{onClick:b,id:"userFace",src:Gg})]),U("section",wb,[er(U("input",{"onUpdate:modelValue":le[0]||(le[0]=M=>r.value=M),type:"search",placeholder:"Search"},null,512),[[rr,r.value]])]),U("section",Eb,[U("div",Ib,[U("img",{onClick:E,src:ge(t).state.galleryActive?ge(M_):ge(B_)},null,8,Tb),U("img",{onClick:T,src:ge(t).state.listActive?ge(U_):ge(F_)},null,8,Sb)]),U("div",{class:"filters-button"},[U("button",{onClick:$},[Cb,Tl(" Filters")])])]),Re(L_,{preFilterProp:ge(N),searchByWhat:ge(l),searchText:r.value,attackFrom:s.value,attackTo:i.value,defenceFrom:o.value,defenceTo:a.value,allCards:f.value,monsters:p.value,spells:g.value,traps:_.value},null,8,["preFilterProp","searchByWhat","searchText","attackFrom","attackTo","defenceFrom","defenceTo","allCards","monsters","spells","traps"])],64))}},Ob={__name:"HelloWorld",setup(e){return(t,n)=>(Ve(),so(Rb))}},Pb=U("h1",null,"Create an accout",-1),_c={__name:"Register",setup(e){const t=G(""),n=G(""),r=uo(),s=()=>{sv(fr(),t.value,n.value).then(o=>{console.log("Zalogowano pomyślnie"),r.push("/Search")}).catch(o=>{console.log(o)})},i=()=>{const o=new ft;Ov(fr(),o).then(a=>{console.log(a.user),r.push("/Search")}).catch(a=>{console.log(a)})};return(o,a)=>(Ve(),Pt(Ie,null,[Pb,U("p",null,[er(U("input",{type:"text",placeholder:"email","onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c)},null,512),[[rr,t.value]])]),U("p",null,[er(U("input",{type:"text",placeholder:"password","onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c)},null,512),[[rr,n.value]])]),U("p",null,[U("button",{onClick:s},"Submit")]),U("p",null,[U("button",{onClick:i},"Sign in with Google")])],64))}},kb=U("h1",null,"Sign In to an accout",-1),Db={key:0},Nb={__name:"SignIn",setup(e){const t=G(""),n=G(""),r=G(),s=uo(),i=()=>{iv(fr(),t.value,n.value).then(a=>{console.log("Zalogowano pomyślnie"),s.push("/Search")}).catch(a=>{switch(console.log(a),a.code){case"auth/invalid-email":r.value="Invalid email";break;case"auth/user-not-found":r.value="User not found";break;case"auth/wrong-password":r.value="Incorrenct Password";break;default:r.value="Email or password are incorrect";break}})},o=()=>{rf(auth).then(()=>{s.push("/signin")})};return(a,c)=>(Ve(),Pt(Ie,null,[kb,U("p",null,[er(U("input",{type:"text",placeholder:"email","onUpdate:modelValue":c[0]||(c[0]=l=>t.value=l)},null,512),[[rr,t.value]])]),U("p",null,[er(U("input",{type:"text",placeholder:"password","onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l)},null,512),[[rr,n.value]])]),r.value?(Ve(),Pt("p",Db,Rr(r.value),1)):Sl("",!0),U("p",null,[U("button",{onClick:i},"Submit")]),U("p",null,[U("button",{onClick:c[2]||(c[2]=(...l)=>a.signInWithGoogle&&a.signInWithGoogle(...l))},"Sign in with Google")]),U("p",null,[U("button",{onClick:o},"Logout")])],64))}},xb=[{path:"/",name:"Home",component:_c},{path:"/register",name:"Register",component:_c},{path:"/signin",name:"Signin",component:Nb},{path:"/Search",name:"Search",component:Ob,meta:{requiresAuth:!0}}],mf=zg({history:ag("/Yu-Gi-Oh-Api/"),routes:xb}),Lb=()=>new Promise((e,t)=>{const n=cv(fr(),r=>{n(),e(r)},t)});mf.beforeEach(async(e,t,n)=>{e.matched.some(r=>r.meta.requiresAuth)?await Lb()?n():(console.log("You dont have acces"),n("/")):n()});var Mb="firebase",Bb="9.23.0";/**
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
 */nt(Mb,Bb,"app");const Ub=(e,t)=>t.some(n=>e instanceof n);let yc,Ac;function Fb(){return yc||(yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jb(){return Ac||(Ac=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _f=new WeakMap,Mi=new WeakMap,yf=new WeakMap,Zs=new WeakMap,Do=new WeakMap;function $b(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Mt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&_f.set(n,e)}).catch(()=>{}),Do.set(t,e),t}function Hb(e){if(Mi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Mi.set(e,t)}let Bi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Mi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||yf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Vb(e){Bi=e(Bi)}function Wb(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ei(this),t,...n);return yf.set(r,t.sort?t.sort():[t]),Mt(r)}:jb().includes(e)?function(...t){return e.apply(ei(this),t),Mt(_f.get(this))}:function(...t){return Mt(e.apply(ei(this),t))}}function zb(e){return typeof e=="function"?Wb(e):(e instanceof IDBTransaction&&Hb(e),Ub(e,Fb())?new Proxy(e,Bi):e)}function Mt(e){if(e instanceof IDBRequest)return $b(e);if(Zs.has(e))return Zs.get(e);const t=zb(e);return t!==e&&(Zs.set(e,t),Do.set(t,e)),t}const ei=e=>Do.get(e);function Kb(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Mt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const qb=["get","getKey","getAll","getAllKeys","count"],Gb=["put","add","delete","clear"],ti=new Map;function vc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ti.get(t))return ti.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Gb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ti.set(t,i),i}Vb(e=>({...e,get:(t,n,r)=>vc(t,n)||e.get(t,n,r),has:(t,n)=>!!vc(t,n)||e.has(t,n)}));const Af="@firebase/installations",No="0.6.4";/**
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
 */const vf=1e4,bf=`w:${No}`,wf="FIS_v2",Yb="https://firebaseinstallations.googleapis.com/v1",Qb=60*60*1e3,Jb="installations",Xb="Installations";/**
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
 */const Zb={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},rn=new an(Jb,Xb,Zb);function Ef(e){return e instanceof at&&e.code.includes("request-failed")}/**
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
 */function If({projectId:e}){return`${Yb}/projects/${e}/installations`}function Tf(e){return{token:e.token,requestStatus:2,expiresIn:tw(e.expiresIn),creationTime:Date.now()}}async function Sf(e,t){const r=(await t.json()).error;return rn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Cf({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ew(e,{refreshToken:t}){const n=Cf(e);return n.append("Authorization",nw(t)),n}async function Rf(e){const t=await e();return t.status>=500&&t.status<600?e():t}function tw(e){return Number(e.replace("s","000"))}function nw(e){return`${wf} ${e}`}/**
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
 */async function rw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=If(e),s=Cf(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:wf,appId:e.appId,sdkVersion:bf},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Rf(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Tf(l.authToken)}}else throw await Sf("Create Installation",c)}/**
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
 */function Of(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function sw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const iw=/^[cdef][\w-]{21}$/,Ui="";function ow(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=aw(e);return iw.test(n)?n:Ui}catch{return Ui}}function aw(e){return sw(e).substr(0,22)}/**
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
 */function Ss(e){return`${e.appName}!${e.appId}`}/**
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
 */const Pf=new Map;function kf(e,t){const n=Ss(e);Df(n,t),cw(n,t)}function Df(e,t){const n=Pf.get(e);if(n)for(const r of n)r(t)}function cw(e,t){const n=lw();n&&n.postMessage({key:e,fid:t}),uw()}let Qt=null;function lw(){return!Qt&&"BroadcastChannel"in self&&(Qt=new BroadcastChannel("[Firebase] FID Change"),Qt.onmessage=e=>{Df(e.data.key,e.data.fid)}),Qt}function uw(){Pf.size===0&&Qt&&(Qt.close(),Qt=null)}/**
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
 */const fw="firebase-installations-database",dw=1,sn="firebase-installations-store";let ni=null;function xo(){return ni||(ni=Kb(fw,dw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(sn)}}})),ni}async function ns(e,t){const n=Ss(e),s=(await xo()).transaction(sn,"readwrite"),i=s.objectStore(sn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&kf(e,t.fid),t}async function Nf(e){const t=Ss(e),r=(await xo()).transaction(sn,"readwrite");await r.objectStore(sn).delete(t),await r.done}async function Cs(e,t){const n=Ss(e),s=(await xo()).transaction(sn,"readwrite"),i=s.objectStore(sn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&kf(e,a.fid),a}/**
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
 */async function Lo(e){let t;const n=await Cs(e.appConfig,r=>{const s=hw(r),i=pw(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ui?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function hw(e){const t=e||{fid:ow(),registrationStatus:0};return xf(t)}function pw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(rn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=gw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:mw(e)}:{installationEntry:t}}async function gw(e,t){try{const n=await rw(e,t);return ns(e.appConfig,n)}catch(n){throw Ef(n)&&n.customData.serverCode===409?await Nf(e.appConfig):await ns(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function mw(e){let t=await bc(e.appConfig);for(;t.registrationStatus===1;)await Of(100),t=await bc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lo(e);return r||n}return t}function bc(e){return Cs(e,t=>{if(!t)throw rn.create("installation-not-found");return xf(t)})}function xf(e){return _w(e)?{fid:e.fid,registrationStatus:0}:e}function _w(e){return e.registrationStatus===1&&e.registrationTime+vf<Date.now()}/**
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
 */async function yw({appConfig:e,heartbeatServiceProvider:t},n){const r=Aw(e,n),s=ew(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:bf,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Rf(()=>fetch(r,a));if(c.ok){const l=await c.json();return Tf(l)}else throw await Sf("Generate Auth Token",c)}function Aw(e,{fid:t}){return`${If(e)}/${t}/authTokens:generate`}/**
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
 */async function Mo(e,t=!1){let n;const r=await Cs(e.appConfig,i=>{if(!Lf(i))throw rn.create("not-registered");const o=i.authToken;if(!t&&ww(o))return i;if(o.requestStatus===1)return n=vw(e,t),i;{if(!navigator.onLine)throw rn.create("app-offline");const a=Iw(i);return n=bw(e,a),a}});return n?await n:r.authToken}async function vw(e,t){let n=await wc(e.appConfig);for(;n.authToken.requestStatus===1;)await Of(100),n=await wc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Mo(e,t):r}function wc(e){return Cs(e,t=>{if(!Lf(t))throw rn.create("not-registered");const n=t.authToken;return Tw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function bw(e,t){try{const n=await yw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ns(e.appConfig,r),n}catch(n){if(Ef(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Nf(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ns(e.appConfig,r)}throw n}}function Lf(e){return e!==void 0&&e.registrationStatus===2}function ww(e){return e.requestStatus===2&&!Ew(e)}function Ew(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Qb}function Iw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Tw(e){return e.requestStatus===1&&e.requestTime+vf<Date.now()}/**
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
 */async function Sw(e){const t=e,{installationEntry:n,registrationPromise:r}=await Lo(t);return r?r.catch(console.error):Mo(t).catch(console.error),n.fid}/**
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
 */async function Cw(e,t=!1){const n=e;return await Rw(n),(await Mo(n,t)).token}async function Rw(e){const{registrationPromise:t}=await Lo(e);t&&await t}/**
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
 */function Ow(e){if(!e||!e.options)throw ri("App Configuration");if(!e.name)throw ri("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ri(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ri(e){return rn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Mf="installations",Pw="installations-internal",kw=e=>{const t=e.getProvider("app").getImmediate(),n=Ow(t),r=xn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Dw=e=>{const t=e.getProvider("app").getImmediate(),n=xn(t,Mf).getImmediate();return{getId:()=>Sw(n),getToken:s=>Cw(n,s)}};function Nw(){mt(new ot(Mf,kw,"PUBLIC")),mt(new ot(Pw,Dw,"PRIVATE"))}Nw();nt(Af,No);nt(Af,No,"esm2017");/**
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
 */const rs="analytics",xw="firebase_id",Lw="origin",Mw=60*1e3,Bw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bo="https://www.googletagmanager.com/gtag/js";/**
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
 */const Oe=new vo("@firebase/analytics");/**
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
 */const Uw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Le=new an("analytics","Analytics",Uw);/**
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
 */function Fw(e){if(!e.startsWith(Bo)){const t=Le.create("invalid-gtag-resource",{gtagURL:e});return Oe.warn(t.message),""}return e}function Bf(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function jw(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function $w(e,t){const n=jw("firebase-js-sdk-policy",{createScriptURL:Fw}),r=document.createElement("script"),s=`${Bo}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Hw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Vw(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Bf(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){Oe.error(a)}e("config",s,i)}async function Ww(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Bf(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Oe.error(i)}}function zw(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Ww(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await Vw(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){Oe.error(a)}}return s}function Kw(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=zw(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function qw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Bo)&&n.src.includes(e))return n;return null}/**
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
 */const Gw=30,Yw=1e3;class Qw{constructor(t={},n=Yw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Uf=new Qw;function Jw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Xw(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Jw(r)},i=Bw.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Le.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Zw(e,t=Uf,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Le.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Le.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new nE;return setTimeout(async()=>{a.abort()},n!==void 0?n:Mw),Ff({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Ff(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Uf){var i;const{appId:o,measurementId:a}=e;try{await eE(r,t)}catch(c){if(a)return Oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Xw(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!tE(l)){if(s.deleteThrottleMetadata(o),a)return Oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ka(n,s.intervalMillis,Gw):Ka(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),Oe.debug(`Calling attemptFetch again in ${u} millis`),Ff(e,f,r,s)}}function eE(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Le.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function tE(e){if(!(e instanceof at)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class nE{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function rE(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function sE(){if(Su())try{await Cu()}catch(e){return Oe.warn(Le.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Oe.warn(Le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iE(e,t,n,r,s,i,o){var a;const c=Zw(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Oe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Oe.error(g)),t.push(c);const l=sE().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([c,l]);qw(i)||$w(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[Lw]="firebase",p.update=!0,f!=null&&(p[xw]=f),s("config",u.measurementId,p),u.measurementId}/**
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
 */class oE{constructor(t){this.app=t}_delete(){return delete Yn[this.app.options.appId],Promise.resolve()}}let Yn={},Ec=[];const Ic={};let si="dataLayer",aE="gtag",Tc,jf,Sc=!1;function cE(){const e=[];if(Tu()&&e.push("This is a browser extension environment."),X_()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Le.create("invalid-analytics-context",{errorInfo:t});Oe.warn(n.message)}}function lE(e,t,n){cE();const r=e.options.appId;if(!r)throw Le.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Le.create("no-api-key");if(Yn[r]!=null)throw Le.create("already-exists",{id:r});if(!Sc){Hw(si);const{wrappedGtag:i,gtagCore:o}=Kw(Yn,Ec,Ic,si,aE);jf=i,Tc=o,Sc=!0}return Yn[r]=iE(e,Ec,Ic,t,Tc,si,n),new oE(e)}function uE(e=ku()){e=Ye(e);const t=xn(e,rs);return t.isInitialized()?t.getImmediate():fE(e)}function fE(e,t={}){const n=xn(e,rs);if(n.isInitialized()){const s=n.getImmediate();if(or(t,n.getOptions()))return s;throw Le.create("already-initialized")}return n.initialize({options:t})}function dE(e,t,n,r){e=Ye(e),rE(jf,Yn[e.app.options.appId],t,n,r).catch(s=>Oe.error(s))}const Cc="@firebase/analytics",Rc="0.10.0";function hE(){mt(new ot(rs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return lE(r,s,n)},"PUBLIC")),mt(new ot("analytics-internal",e,"PRIVATE")),nt(Cc,Rc),nt(Cc,Rc,"esm2017");function e(t){try{const n=t.getProvider(rs).getImmediate();return{logEvent:(r,s,i)=>dE(n,r,s,i)}}catch(n){throw Le.create("interop-component-reg-failed",{reason:n})}}}hE();const pE={apiKey:"AIzaSyB0p4c5jGZDjs0RSAdtTtrb9LYolgd4iL8",authDomain:"yu-gi-oh-f2e29.firebaseapp.com",projectId:"yu-gi-oh-f2e29",storageBucket:"yu-gi-oh-f2e29.appspot.com",messagingSenderId:"342293313702",appId:"1:342293313702:web:e2105215137c53b7535c67",measurementId:"G-TRC4QKQHR6"};Pu(pE);const Rs=dp(_p,{});Rs.use(Vp);Rs.use(mf);Rs.mount("#app");uE(Rs);
