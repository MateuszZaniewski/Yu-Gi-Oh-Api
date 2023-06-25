(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ui(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Fi(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=me(r)?Qf(r):Fi(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(me(e))return e;if(ue(e))return e}}const zf=/;(?![^(]*\))/g,Gf=/:([^]+)/,qf=/\/\*.*?\*\//gs;function Qf(e){const t={};return e.replace(qf,"").split(zf).forEach(n=>{if(n){const r=n.split(Gf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ji(e){let t="";if(me(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const r=ji(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jf=Ui(Yf);function Nc(e){return!!e||e===""}const Rr=e=>me(e)?e:e==null?"":V(e)||ue(e)&&(e.toString===Bc||!z(e.toString))?JSON.stringify(e,xc,2):String(e),xc=(e,t)=>t&&t.__v_isRef?xc(e,t.value):_n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Lc(t)?{[`Set(${t.size})`]:[...t.values()]}:ue(t)&&!V(t)&&!Uc(t)?String(t):t,le={},yn=[],We=()=>{},Xf=()=>!1,Zf=/^on[^a-z]/,ss=e=>Zf.test(e),Hi=e=>e.startsWith("onUpdate:"),we=Object.assign,$i=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ed=Object.prototype.hasOwnProperty,Y=(e,t)=>ed.call(e,t),V=Array.isArray,_n=e=>is(e)==="[object Map]",Lc=e=>is(e)==="[object Set]",z=e=>typeof e=="function",me=e=>typeof e=="string",Vi=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Mc=e=>ue(e)&&z(e.then)&&z(e.catch),Bc=Object.prototype.toString,is=e=>Bc.call(e),td=e=>is(e).slice(8,-1),Uc=e=>is(e)==="[object Object]",Wi=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Or=Ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),os=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},nd=/-(\w)/g,ot=os(e=>e.replace(nd,(t,n)=>n?n.toUpperCase():"")),rd=/\B([A-Z])/g,On=os(e=>e.replace(rd,"-$1").toLowerCase()),as=os(e=>e.charAt(0).toUpperCase()+e.slice(1)),Rs=os(e=>e?`on${as(e)}`:""),Jn=(e,t)=>!Object.is(e,t),Pr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$r=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},si=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ho;const sd=()=>Ho||(Ho=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let je;class id{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function od(e,t=je){t&&t.active&&t.effects.push(e)}function ad(){return je}const Ki=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fc=e=>(e.w&Ut)>0,jc=e=>(e.n&Ut)>0,cd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ut},ld=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Fc(s)&&!jc(s)?s.delete(e):t[n++]=s,s.w&=~Ut,s.n&=~Ut}t.length=n}},ii=new WeakMap;let $n=0,Ut=1;const oi=30;let He;const Xt=Symbol(""),ai=Symbol("");class zi{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,od(this,r)}run(){if(!this.active)return this.fn();let t=He,n=kt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=He,He=this,kt=!0,Ut=1<<++$n,$n<=oi?cd(this):$o(this),this.fn()}finally{$n<=oi&&ld(this),Ut=1<<--$n,He=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&($o(this),this.onStop&&this.onStop(),this.active=!1)}}function $o(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let kt=!0;const Hc=[];function Pn(){Hc.push(kt),kt=!1}function kn(){const e=Hc.pop();kt=e===void 0?!0:e}function ke(e,t,n){if(kt&&He){let r=ii.get(e);r||ii.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Ki()),$c(s)}}function $c(e,t){let n=!1;$n<=oi?jc(e)||(e.n|=Ut,n=!Fc(e)):n=!e.has(He),n&&(e.add(He),He.deps.push(e))}function gt(e,t,n,r,s,i){const o=ii.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&V(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":V(e)?Wi(n)&&a.push(o.get("length")):(a.push(o.get(Xt)),_n(e)&&a.push(o.get(ai)));break;case"delete":V(e)||(a.push(o.get(Xt)),_n(e)&&a.push(o.get(ai)));break;case"set":_n(e)&&a.push(o.get(Xt));break}if(a.length===1)a[0]&&ci(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ci(Ki(c))}}function ci(e,t){const n=V(e)?e:[...e];for(const r of n)r.computed&&Vo(r);for(const r of n)r.computed||Vo(r)}function Vo(e,t){(e!==He||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ud=Ui("__proto__,__v_isRef,__isVue"),Vc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vi)),fd=Gi(),dd=Gi(!1,!0),hd=Gi(!0),Wo=pd();function pd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)ke(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(X)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Pn();const r=X(this)[t].apply(this,n);return kn(),r}}),e}function gd(e){const t=X(this);return ke(t,"has",e),t.hasOwnProperty(e)}function Gi(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?kd:qc:t?Gc:zc).get(r))return r;const o=V(r);if(!e){if(o&&Y(Wo,s))return Reflect.get(Wo,s,i);if(s==="hasOwnProperty")return gd}const a=Reflect.get(r,s,i);return(Vi(s)?Vc.has(s):ud(s))||(e||ke(r,"get",s),t)?a:be(a)?o&&Wi(s)?a:a.value:ue(a)?e?Qc(a):Dn(a):a}}const md=Wc(),Ad=Wc(!0);function Wc(e=!1){return function(n,r,s,i){let o=n[r];if(In(o)&&be(o)&&!be(s))return!1;if(!e&&(!Vr(s)&&!In(s)&&(o=X(o),s=X(s)),!V(n)&&be(o)&&!be(s)))return o.value=s,!0;const a=V(n)&&Wi(r)?Number(r)<n.length:Y(n,r),c=Reflect.set(n,r,s,i);return n===X(i)&&(a?Jn(s,o)&&gt(n,"set",r,s):gt(n,"add",r,s)),c}}function yd(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&gt(e,"delete",t,void 0),r}function _d(e,t){const n=Reflect.has(e,t);return(!Vi(t)||!Vc.has(t))&&ke(e,"has",t),n}function vd(e){return ke(e,"iterate",V(e)?"length":Xt),Reflect.ownKeys(e)}const Kc={get:fd,set:md,deleteProperty:yd,has:_d,ownKeys:vd},bd={get:hd,set(e,t){return!0},deleteProperty(e,t){return!0}},wd=we({},Kc,{get:dd,set:Ad}),qi=e=>e,cs=e=>Reflect.getPrototypeOf(e);function br(e,t,n=!1,r=!1){e=e.__v_raw;const s=X(e),i=X(t);n||(t!==i&&ke(s,"get",t),ke(s,"get",i));const{has:o}=cs(s),a=r?qi:n?Ji:Xn;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function wr(e,t=!1){const n=this.__v_raw,r=X(n),s=X(e);return t||(e!==s&&ke(r,"has",e),ke(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Er(e,t=!1){return e=e.__v_raw,!t&&ke(X(e),"iterate",Xt),Reflect.get(e,"size",e)}function Ko(e){e=X(e);const t=X(this);return cs(t).has.call(t,e)||(t.add(e),gt(t,"add",e,e)),this}function zo(e,t){t=X(t);const n=X(this),{has:r,get:s}=cs(n);let i=r.call(n,e);i||(e=X(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Jn(t,o)&&gt(n,"set",e,t):gt(n,"add",e,t),this}function Go(e){const t=X(this),{has:n,get:r}=cs(t);let s=n.call(t,e);s||(e=X(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&gt(t,"delete",e,void 0),i}function qo(){const e=X(this),t=e.size!==0,n=e.clear();return t&&gt(e,"clear",void 0,void 0),n}function Ir(e,t){return function(r,s){const i=this,o=i.__v_raw,a=X(o),c=t?qi:e?Ji:Xn;return!e&&ke(a,"iterate",Xt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Tr(e,t,n){return function(...r){const s=this.__v_raw,i=X(s),o=_n(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?qi:t?Ji:Xn;return!t&&ke(i,"iterate",c?ai:Xt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function bt(e){return function(...t){return e==="delete"?!1:this}}function Ed(){const e={get(i){return br(this,i)},get size(){return Er(this)},has:wr,add:Ko,set:zo,delete:Go,clear:qo,forEach:Ir(!1,!1)},t={get(i){return br(this,i,!1,!0)},get size(){return Er(this)},has:wr,add:Ko,set:zo,delete:Go,clear:qo,forEach:Ir(!1,!0)},n={get(i){return br(this,i,!0)},get size(){return Er(this,!0)},has(i){return wr.call(this,i,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:Ir(!0,!1)},r={get(i){return br(this,i,!0,!0)},get size(){return Er(this,!0)},has(i){return wr.call(this,i,!0)},add:bt("add"),set:bt("set"),delete:bt("delete"),clear:bt("clear"),forEach:Ir(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Tr(i,!1,!1),n[i]=Tr(i,!0,!1),t[i]=Tr(i,!1,!0),r[i]=Tr(i,!0,!0)}),[e,n,t,r]}const[Id,Td,Cd,Sd]=Ed();function Qi(e,t){const n=t?e?Sd:Cd:e?Td:Id;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Y(n,s)&&s in r?n:r,s,i)}const Rd={get:Qi(!1,!1)},Od={get:Qi(!1,!0)},Pd={get:Qi(!0,!1)},zc=new WeakMap,Gc=new WeakMap,qc=new WeakMap,kd=new WeakMap;function Dd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nd(e){return e.__v_skip||!Object.isExtensible(e)?0:Dd(td(e))}function Dn(e){return In(e)?e:Yi(e,!1,Kc,Rd,zc)}function xd(e){return Yi(e,!1,wd,Od,Gc)}function Qc(e){return Yi(e,!0,bd,Pd,qc)}function Yi(e,t,n,r,s){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Nd(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function vn(e){return In(e)?vn(e.__v_raw):!!(e&&e.__v_isReactive)}function In(e){return!!(e&&e.__v_isReadonly)}function Vr(e){return!!(e&&e.__v_isShallow)}function Yc(e){return vn(e)||In(e)}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Jc(e){return $r(e,"__v_skip",!0),e}const Xn=e=>ue(e)?Dn(e):e,Ji=e=>ue(e)?Qc(e):e;function Xc(e){kt&&He&&(e=X(e),$c(e.dep||(e.dep=Ki())))}function Zc(e,t){e=X(e);const n=e.dep;n&&ci(n)}function be(e){return!!(e&&e.__v_isRef===!0)}function q(e){return el(e,!1)}function Ld(e){return el(e,!0)}function el(e,t){return be(e)?e:new Md(e,t)}class Md{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:X(t),this._value=n?t:Xn(t)}get value(){return Xc(this),this._value}set value(t){const n=this.__v_isShallow||Vr(t)||In(t);t=n?t:X(t),Jn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Xn(t),Zc(this))}}function Z(e){return be(e)?e.value:e}const Bd={get:(e,t,n)=>Z(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return be(s)&&!be(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function tl(e){return vn(e)?e:new Proxy(e,Bd)}var nl;class Ud{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[nl]=!1,this._dirty=!0,this.effect=new zi(t,()=>{this._dirty||(this._dirty=!0,Zc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=X(this);return Xc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}nl="__v_isReadonly";function Fd(e,t,n=!1){let r,s;const i=z(e);return i?(r=e,s=We):(r=e.get,s=e.set),new Ud(r,s,i||!s,n)}function Dt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){ls(i,t,n)}return s}function Be(e,t,n,r){if(z(e)){const i=Dt(e,t,n,r);return i&&Mc(i)&&i.catch(o=>{ls(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Be(e[i],t,n,r));return s}function ls(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Dt(c,null,10,[e,o,a]);return}}jd(e,n,s,r)}function jd(e,t,n,r=!0){console.error(e)}let Zn=!1,li=!1;const ve=[];let et=0;const bn=[];let ft=null,zt=0;const rl=Promise.resolve();let Xi=null;function sl(e){const t=Xi||rl;return e?t.then(this?e.bind(this):e):t}function Hd(e){let t=et+1,n=ve.length;for(;t<n;){const r=t+n>>>1;er(ve[r])<e?t=r+1:n=r}return t}function Zi(e){(!ve.length||!ve.includes(e,Zn&&e.allowRecurse?et+1:et))&&(e.id==null?ve.push(e):ve.splice(Hd(e.id),0,e),il())}function il(){!Zn&&!li&&(li=!0,Xi=rl.then(al))}function $d(e){const t=ve.indexOf(e);t>et&&ve.splice(t,1)}function Vd(e){V(e)?bn.push(...e):(!ft||!ft.includes(e,e.allowRecurse?zt+1:zt))&&bn.push(e),il()}function Qo(e,t=Zn?et+1:0){for(;t<ve.length;t++){const n=ve[t];n&&n.pre&&(ve.splice(t,1),t--,n())}}function ol(e){if(bn.length){const t=[...new Set(bn)];if(bn.length=0,ft){ft.push(...t);return}for(ft=t,ft.sort((n,r)=>er(n)-er(r)),zt=0;zt<ft.length;zt++)ft[zt]();ft=null,zt=0}}const er=e=>e.id==null?1/0:e.id,Wd=(e,t)=>{const n=er(e)-er(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function al(e){li=!1,Zn=!0,ve.sort(Wd);const t=We;try{for(et=0;et<ve.length;et++){const n=ve[et];n&&n.active!==!1&&Dt(n,null,14)}}finally{et=0,ve.length=0,ol(),Zn=!1,Xi=null,(ve.length||bn.length)&&al()}}function Kd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||le;p&&(s=n.map(g=>me(g)?g.trim():g)),f&&(s=n.map(si))}let a,c=r[a=Rs(t)]||r[a=Rs(ot(t))];!c&&i&&(c=r[a=Rs(On(t))]),c&&Be(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Be(l,e,6,s)}}function cl(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!z(e)){const c=l=>{const u=cl(l,t,!0);u&&(a=!0,we(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ue(e)&&r.set(e,null),null):(V(i)?i.forEach(c=>o[c]=null):we(o,i),ue(e)&&r.set(e,o),o)}function us(e,t){return!e||!ss(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,On(t))||Y(e,t))}let xe=null,ll=null;function Wr(e){const t=xe;return xe=e,ll=e&&e.type.__scopeId||null,t}function zd(e,t=xe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ia(-1);const i=Wr(t);let o;try{o=e(...s)}finally{Wr(i),r._d&&ia(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Os(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:g,ctx:A,inheritAttrs:b}=e;let x,R;const L=Wr(e);try{if(n.shapeFlag&4){const T=s||r;x=Ze(u.call(T,T,f,i,g,p,A)),R=c}else{const T=t;x=Ze(T.length>1?T(i,{attrs:c,slots:a,emit:l}):T(i,null)),R=t.props?c:Gd(c)}}catch(T){zn.length=0,ls(T,e,1),x=Oe(ze)}let E=x;if(R&&b!==!1){const T=Object.keys(R),{shapeFlag:j}=E;T.length&&j&7&&(o&&T.some(Hi)&&(R=qd(R,o)),E=Ft(E,R))}return n.dirs&&(E=Ft(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),x=E,Wr(L),x}const Gd=e=>{let t;for(const n in e)(n==="class"||n==="style"||ss(n))&&((t||(t={}))[n]=e[n]);return t},qd=(e,t)=>{const n={};for(const r in e)(!Hi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Qd(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Yo(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!us(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Yo(r,o,l):!0:!!o;return!1}function Yo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!us(n,i))return!0}return!1}function Yd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Jd=e=>e.__isSuspense;function Xd(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):Vd(e)}function kr(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function Ke(e,t,n=!1){const r=de||xe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&z(t)?t.call(r.proxy):t}}const Cr={};function Nt(e,t,n){return ul(e,t,n)}function ul(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=le){const a=ad()===(de==null?void 0:de.scope)?de:null;let c,l=!1,u=!1;if(be(e)?(c=()=>e.value,l=Vr(e)):vn(e)?(c=()=>e,r=!0):V(e)?(u=!0,l=e.some(E=>vn(E)||Vr(E)),c=()=>e.map(E=>{if(be(E))return E.value;if(vn(E))return Qt(E);if(z(E))return Dt(E,a,2)})):z(e)?t?c=()=>Dt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Be(e,a,3,[p])}:c=We,t&&r){const E=c;c=()=>Qt(E())}let f,p=E=>{f=R.onStop=()=>{Dt(E,a,4)}},g;if(rr)if(p=We,t?n&&Be(t,a,3,[c(),u?[]:void 0,p]):c(),s==="sync"){const E=Qh();g=E.__watcherHandles||(E.__watcherHandles=[])}else return We;let A=u?new Array(e.length).fill(Cr):Cr;const b=()=>{if(R.active)if(t){const E=R.run();(r||l||(u?E.some((T,j)=>Jn(T,A[j])):Jn(E,A)))&&(f&&f(),Be(t,a,3,[E,A===Cr?void 0:u&&A[0]===Cr?[]:A,p]),A=E)}else R.run()};b.allowRecurse=!!t;let x;s==="sync"?x=b:s==="post"?x=()=>Se(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),x=()=>Zi(b));const R=new zi(c,x);t?n?b():A=R.run():s==="post"?Se(R.run.bind(R),a&&a.suspense):R.run();const L=()=>{R.stop(),a&&a.scope&&$i(a.scope.effects,R)};return g&&g.push(L),L}function Zd(e,t,n){const r=this.proxy,s=me(e)?e.includes(".")?fl(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=de;Tn(this);const a=ul(s,i.bind(r),n);return o?Tn(o):Zt(),a}function fl(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Qt(e,t){if(!ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),be(e))Qt(e.value,t);else if(V(e))for(let n=0;n<e.length;n++)Qt(e[n],t);else if(Lc(e)||_n(e))e.forEach(n=>{Qt(n,t)});else if(Uc(e))for(const n in e)Qt(e[n],t);return e}function eh(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return eo(()=>{e.isMounted=!0}),ml(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],th={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(e,{slots:t}){const n=Hh(),r=eh();let s;return()=>{const i=t.default&&hl(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==ze){o=b;break}}const a=X(e),{mode:c}=a;if(r.isLeaving)return Ps(o);const l=Jo(o);if(!l)return Ps(o);const u=ui(l,a,r,n);fi(l,u);const f=n.subTree,p=f&&Jo(f);let g=!1;const{getTransitionKey:A}=l.type;if(A){const b=A();s===void 0?s=b:b!==s&&(s=b,g=!0)}if(p&&p.type!==ze&&(!Gt(l,p)||g)){const b=ui(p,a,r,n);if(fi(p,b),c==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ps(o);c==="in-out"&&l.type!==ze&&(b.delayLeave=(x,R,L)=>{const E=dl(r,p);E[String(p.key)]=p,x._leaveCb=()=>{R(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return o}}},nh=th;function dl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ui(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:A,onBeforeAppear:b,onAppear:x,onAfterAppear:R,onAppearCancelled:L}=t,E=String(e.key),T=dl(n,e),j=(K,ie)=>{K&&Be(K,r,9,ie)},W=(K,ie)=>{const ne=ie[1];j(K,ie),V(K)?K.every(he=>he.length<=1)&&ne():K.length<=1&&ne()},ge={mode:i,persisted:o,beforeEnter(K){let ie=a;if(!n.isMounted)if(s)ie=b||a;else return;K._leaveCb&&K._leaveCb(!0);const ne=T[E];ne&&Gt(e,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),j(ie,[K])},enter(K){let ie=c,ne=l,he=u;if(!n.isMounted)if(s)ie=x||c,ne=R||l,he=L||u;else return;let fe=!1;const Q=K._enterCb=Ht=>{fe||(fe=!0,Ht?j(he,[K]):j(ne,[K]),ge.delayedLeave&&ge.delayedLeave(),K._enterCb=void 0)};ie?W(ie,[K,Q]):Q()},leave(K,ie){const ne=String(e.key);if(K._enterCb&&K._enterCb(!0),n.isUnmounting)return ie();j(f,[K]);let he=!1;const fe=K._leaveCb=Q=>{he||(he=!0,ie(),Q?j(A,[K]):j(g,[K]),K._leaveCb=void 0,T[ne]===e&&delete T[ne])};T[ne]=e,p?W(p,[K,fe]):fe()},clone(K){return ui(K,t,n,r)}};return ge}function Ps(e){if(fs(e))return e=Ft(e),e.children=null,e}function Jo(e){return fs(e)?e.children?e.children[0]:void 0:e}function fi(e,t){e.shapeFlag&6&&e.component?fi(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function hl(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Te?(o.patchFlag&128&&s++,r=r.concat(hl(o.children,t,a))):(t||o.type!==ze)&&r.push(a!=null?Ft(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function pl(e){return z(e)?{setup:e,name:e.name}:e}const Dr=e=>!!e.type.__asyncLoader,fs=e=>e.type.__isKeepAlive;function rh(e,t){gl(e,"a",t)}function sh(e,t){gl(e,"da",t)}function gl(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ds(t,r,n),n){let s=n.parent;for(;s&&s.parent;)fs(s.parent.vnode)&&ih(r,t,n,s),s=s.parent}}function ih(e,t,n,r){const s=ds(t,e,r,!0);Al(()=>{$i(r[t],s)},n)}function ds(e,t,n=de,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Pn(),Tn(n);const a=Be(t,n,e,o);return Zt(),kn(),a});return r?s.unshift(i):s.push(i),i}}const yt=e=>(t,n=de)=>(!rr||e==="sp")&&ds(e,(...r)=>t(...r),n),oh=yt("bm"),eo=yt("m"),ah=yt("bu"),ch=yt("u"),ml=yt("bum"),Al=yt("um"),lh=yt("sp"),uh=yt("rtg"),fh=yt("rtc");function dh(e,t=de){ds("ec",e,t)}function tr(e,t){const n=xe;if(n===null)return e;const r=gs(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,c,l=le]=t[i];o&&(z(o)&&(o={mounted:o,updated:o}),o.deep&&Qt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function $t(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Pn(),Be(c,n,8,[e.el,a,e,t]),kn())}}const yl="components";function hh(e,t){return gh(yl,e,!0,t)||e}const ph=Symbol();function gh(e,t,n=!0,r=!1){const s=xe||de;if(s){const i=s.type;if(e===yl){const a=zh(i,!1);if(a&&(a===t||a===ot(t)||a===as(ot(t))))return i}const o=Xo(s[e]||i[e],t)||Xo(s.appContext[e],t);return!o&&r?i:o}}function Xo(e,t){return e&&(e[t]||e[ot(t)]||e[as(ot(t))])}function mh(e,t,n,r){let s;const i=n&&n[r];if(V(e)||me(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(ue(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const di=e=>e?kl(e)?gs(e)||e.proxy:di(e.parent):null,Kn=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>di(e.parent),$root:e=>di(e.root),$emit:e=>e.emit,$options:e=>to(e),$forceUpdate:e=>e.f||(e.f=()=>Zi(e.update)),$nextTick:e=>e.n||(e.n=sl.bind(e.proxy)),$watch:e=>Zd.bind(e)}),ks=(e,t)=>e!==le&&!e.__isScriptSetup&&Y(e,t),Ah={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ks(r,t))return o[t]=1,r[t];if(s!==le&&Y(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&Y(l,t))return o[t]=3,i[t];if(n!==le&&Y(n,t))return o[t]=4,n[t];hi&&(o[t]=0)}}const u=Kn[t];let f,p;if(u)return t==="$attrs"&&ke(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==le&&Y(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,Y(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return ks(s,t)?(s[t]=n,!0):r!==le&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==le&&Y(e,o)||ks(t,o)||(a=i[0])&&Y(a,o)||Y(r,o)||Y(Kn,o)||Y(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let hi=!0;function yh(e){const t=to(e),n=e.proxy,r=e.ctx;hi=!1,t.beforeCreate&&Zo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:A,activated:b,deactivated:x,beforeDestroy:R,beforeUnmount:L,destroyed:E,unmounted:T,render:j,renderTracked:W,renderTriggered:ge,errorCaptured:K,serverPrefetch:ie,expose:ne,inheritAttrs:he,components:fe,directives:Q,filters:Ht}=t;if(l&&_h(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const oe in o){const ee=o[oe];z(ee)&&(r[oe]=ee.bind(n))}if(s){const oe=s.call(n,n);ue(oe)&&(e.data=Dn(oe))}if(hi=!0,i)for(const oe in i){const ee=i[oe],lt=z(ee)?ee.bind(n,n):z(ee.get)?ee.get.bind(n,n):We,vt=!z(ee)&&z(ee.set)?ee.set.bind(n):We,Ye=Re({get:lt,set:vt});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Ce=>Ye.value=Ce})}if(a)for(const oe in a)_l(a[oe],r,n,oe);if(c){const oe=z(c)?c.call(n):c;Reflect.ownKeys(oe).forEach(ee=>{kr(ee,oe[ee])})}u&&Zo(u,e,"c");function ye(oe,ee){V(ee)?ee.forEach(lt=>oe(lt.bind(n))):ee&&oe(ee.bind(n))}if(ye(oh,f),ye(eo,p),ye(ah,g),ye(ch,A),ye(rh,b),ye(sh,x),ye(dh,K),ye(fh,W),ye(uh,ge),ye(ml,L),ye(Al,T),ye(lh,ie),V(ne))if(ne.length){const oe=e.exposed||(e.exposed={});ne.forEach(ee=>{Object.defineProperty(oe,ee,{get:()=>n[ee],set:lt=>n[ee]=lt})})}else e.exposed||(e.exposed={});j&&e.render===We&&(e.render=j),he!=null&&(e.inheritAttrs=he),fe&&(e.components=fe),Q&&(e.directives=Q)}function _h(e,t,n=We,r=!1){V(e)&&(e=pi(e));for(const s in e){const i=e[s];let o;ue(i)?"default"in i?o=Ke(i.from||s,i.default,!0):o=Ke(i.from||s):o=Ke(i),be(o)&&r?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function Zo(e,t,n){Be(V(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _l(e,t,n,r){const s=r.includes(".")?fl(n,r):()=>n[r];if(me(e)){const i=t[e];z(i)&&Nt(s,i)}else if(z(e))Nt(s,e.bind(n));else if(ue(e))if(V(e))e.forEach(i=>_l(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&Nt(s,i,e)}}function to(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Kr(c,l,o,!0)),Kr(c,t,o)),ue(t)&&i.set(t,c),c}function Kr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Kr(e,i,n,!0),s&&s.forEach(o=>Kr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=vh[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const vh={data:ea,props:Wt,emits:Wt,methods:Wt,computed:Wt,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Wt,directives:Wt,watch:wh,provide:ea,inject:bh};function ea(e,t){return t?e?function(){return we(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function bh(e,t){return Wt(pi(e),pi(t))}function pi(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Wt(e,t){return e?we(we(Object.create(null),e),t):t}function wh(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const r in t)n[r]=Ie(e[r],t[r]);return n}function Eh(e,t,n,r=!1){const s={},i={};$r(i,ps,1),e.propsDefaults=Object.create(null),vl(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:xd(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Ih(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=X(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(us(e.emitsOptions,p))continue;const g=t[p];if(c)if(Y(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const A=ot(p);s[A]=gi(c,a,A,g,e,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{vl(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!Y(t,f)&&((u=On(f))===f||!Y(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=gi(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!Y(t,f))&&(delete i[f],l=!0)}l&&gt(e,"set","$attrs")}function vl(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Or(c))continue;const l=t[c];let u;s&&Y(s,u=ot(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:us(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=X(n),l=a||le;for(let u=0;u<i.length;u++){const f=i[u];n[f]=gi(s,c,f,l[f],e,!Y(l,f))}}return o}function gi(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Y(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&z(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Tn(s),r=l[n]=c.call(null,t),Zt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===On(n))&&(r=!0))}return r}function bl(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!z(e)){const u=f=>{c=!0;const[p,g]=bl(f,t,!0);we(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return ue(e)&&r.set(e,yn),yn;if(V(i))for(let u=0;u<i.length;u++){const f=ot(i[u]);ta(f)&&(o[f]=le)}else if(i)for(const u in i){const f=ot(u);if(ta(f)){const p=i[u],g=o[f]=V(p)||z(p)?{type:p}:Object.assign({},p);if(g){const A=sa(Boolean,g.type),b=sa(String,g.type);g[0]=A>-1,g[1]=b<0||A<b,(A>-1||Y(g,"default"))&&a.push(f)}}}const l=[o,a];return ue(e)&&r.set(e,l),l}function ta(e){return e[0]!=="$"}function na(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ra(e,t){return na(e)===na(t)}function sa(e,t){return V(t)?t.findIndex(n=>ra(n,e)):z(t)&&ra(t,e)?0:-1}const wl=e=>e[0]==="_"||e==="$stable",no=e=>V(e)?e.map(Ze):[Ze(e)],Th=(e,t,n)=>{if(t._n)return t;const r=zd((...s)=>no(t(...s)),n);return r._c=!1,r},El=(e,t,n)=>{const r=e._ctx;for(const s in e){if(wl(s))continue;const i=e[s];if(z(i))t[s]=Th(s,i,r);else if(i!=null){const o=no(i);t[s]=()=>o}}},Il=(e,t)=>{const n=no(t);e.slots.default=()=>n},Ch=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=X(t),$r(t,"_",n)):El(t,e.slots={})}else e.slots={},t&&Il(e,t);$r(e.slots,ps,1)},Sh=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=le;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(we(s,t),!n&&a===1&&delete s._):(i=!t.$stable,El(t,s)),o=t}else t&&(Il(e,t),o={default:1});if(i)for(const a in s)!wl(a)&&!(a in o)&&delete s[a]};function Tl(){return{app:null,config:{isNativeTag:Xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rh=0;function Oh(e,t){return function(r,s=null){z(r)||(r=Object.assign({},r)),s!=null&&!ue(s)&&(s=null);const i=Tl(),o=new Set;let a=!1;const c=i.app={_uid:Rh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Yh,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&z(l.install)?(o.add(l),l.install(c,...u)):z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=Oe(r,s);return p.appContext=i,u&&t?t(p,l):e(p,l,f),a=!0,c._container=l,l.__vue_app__=c,gs(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function mi(e,t,n,r,s=!1){if(V(e)){e.forEach((p,g)=>mi(p,t&&(V(t)?t[g]:t),n,r,s));return}if(Dr(r)&&!s)return;const i=r.shapeFlag&4?gs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(me(l)?(u[l]=null,Y(f,l)&&(f[l]=null)):be(l)&&(l.value=null)),z(c))Dt(c,a,12,[o,u]);else{const p=me(c),g=be(c);if(p||g){const A=()=>{if(e.f){const b=p?Y(f,c)?f[c]:u[c]:c.value;s?V(b)&&$i(b,i):V(b)?b.includes(i)||b.push(i):p?(u[c]=[i],Y(f,c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else p?(u[c]=o,Y(f,c)&&(f[c]=o)):g&&(c.value=o,e.k&&(u[e.k]=o))};o?(A.id=-1,Se(A,n)):A()}}}const Se=Xd;function Ph(e){return kh(e)}function kh(e,t){const n=sd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=We,insertStaticContent:A}=e,b=(d,h,m,y=null,w=null,I=null,D=!1,S=null,O=!!h.dynamicChildren)=>{if(d===h)return;d&&!Gt(d,h)&&(y=v(d),Ce(d,w,I,!0),d=null),h.patchFlag===-2&&(O=!1,h.dynamicChildren=null);const{type:C,ref:U,shapeFlag:M}=h;switch(C){case hs:x(d,h,m,y);break;case ze:R(d,h,m,y);break;case Ds:d==null&&L(h,m,y,D);break;case Te:fe(d,h,m,y,w,I,D,S,O);break;default:M&1?j(d,h,m,y,w,I,D,S,O):M&6?Q(d,h,m,y,w,I,D,S,O):(M&64||M&128)&&C.process(d,h,m,y,w,I,D,S,O,P)}U!=null&&w&&mi(U,d&&d.ref,I,h||d,!h)},x=(d,h,m,y)=>{if(d==null)r(h.el=a(h.children),m,y);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},R=(d,h,m,y)=>{d==null?r(h.el=c(h.children||""),m,y):h.el=d.el},L=(d,h,m,y)=>{[d.el,d.anchor]=A(d.children,h,m,y,d.el,d.anchor)},E=({el:d,anchor:h},m,y)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,y),d=w;r(h,m,y)},T=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},j=(d,h,m,y,w,I,D,S,O)=>{D=D||h.type==="svg",d==null?W(h,m,y,w,I,D,S,O):ie(d,h,w,I,D,S,O)},W=(d,h,m,y,w,I,D,S)=>{let O,C;const{type:U,props:M,shapeFlag:F,transition:$,dirs:G}=d;if(O=d.el=o(d.type,I,M&&M.is,M),F&8?u(O,d.children):F&16&&K(d.children,O,null,y,w,I&&U!=="foreignObject",D,S),G&&$t(d,null,y,"created"),ge(O,d,d.scopeId,D,y),M){for(const se in M)se!=="value"&&!Or(se)&&i(O,se,null,M[se],I,d.children,y,w,_e);"value"in M&&i(O,"value",null,M.value),(C=M.onVnodeBeforeMount)&&Xe(C,y,d)}G&&$t(d,null,y,"beforeMount");const ce=(!w||w&&!w.pendingBranch)&&$&&!$.persisted;ce&&$.beforeEnter(O),r(O,h,m),((C=M&&M.onVnodeMounted)||ce||G)&&Se(()=>{C&&Xe(C,y,d),ce&&$.enter(O),G&&$t(d,null,y,"mounted")},w)},ge=(d,h,m,y,w)=>{if(m&&g(d,m),y)for(let I=0;I<y.length;I++)g(d,y[I]);if(w){let I=w.subTree;if(h===I){const D=w.vnode;ge(d,D,D.scopeId,D.slotScopeIds,w.parent)}}},K=(d,h,m,y,w,I,D,S,O=0)=>{for(let C=O;C<d.length;C++){const U=d[C]=S?Tt(d[C]):Ze(d[C]);b(null,U,h,m,y,w,I,D,S)}},ie=(d,h,m,y,w,I,D)=>{const S=h.el=d.el;let{patchFlag:O,dynamicChildren:C,dirs:U}=h;O|=d.patchFlag&16;const M=d.props||le,F=h.props||le;let $;m&&Vt(m,!1),($=F.onVnodeBeforeUpdate)&&Xe($,m,h,d),U&&$t(h,d,m,"beforeUpdate"),m&&Vt(m,!0);const G=w&&h.type!=="foreignObject";if(C?ne(d.dynamicChildren,C,S,m,y,G,I):D||ee(d,h,S,null,m,y,G,I,!1),O>0){if(O&16)he(S,h,M,F,m,y,w);else if(O&2&&M.class!==F.class&&i(S,"class",null,F.class,w),O&4&&i(S,"style",M.style,F.style,w),O&8){const ce=h.dynamicProps;for(let se=0;se<ce.length;se++){const pe=ce[se],Fe=M[pe],hn=F[pe];(hn!==Fe||pe==="value")&&i(S,pe,Fe,hn,w,d.children,m,y,_e)}}O&1&&d.children!==h.children&&u(S,h.children)}else!D&&C==null&&he(S,h,M,F,m,y,w);(($=F.onVnodeUpdated)||U)&&Se(()=>{$&&Xe($,m,h,d),U&&$t(h,d,m,"updated")},y)},ne=(d,h,m,y,w,I,D)=>{for(let S=0;S<h.length;S++){const O=d[S],C=h[S],U=O.el&&(O.type===Te||!Gt(O,C)||O.shapeFlag&70)?f(O.el):m;b(O,C,U,null,y,w,I,D,!0)}},he=(d,h,m,y,w,I,D)=>{if(m!==y){if(m!==le)for(const S in m)!Or(S)&&!(S in y)&&i(d,S,m[S],null,D,h.children,w,I,_e);for(const S in y){if(Or(S))continue;const O=y[S],C=m[S];O!==C&&S!=="value"&&i(d,S,C,O,D,h.children,w,I,_e)}"value"in y&&i(d,"value",m.value,y.value)}},fe=(d,h,m,y,w,I,D,S,O)=>{const C=h.el=d?d.el:a(""),U=h.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:F,slotScopeIds:$}=h;$&&(S=S?S.concat($):$),d==null?(r(C,m,y),r(U,m,y),K(h.children,m,U,w,I,D,S,O)):M>0&&M&64&&F&&d.dynamicChildren?(ne(d.dynamicChildren,F,m,w,I,D,S),(h.key!=null||w&&h===w.subTree)&&Cl(d,h,!0)):ee(d,h,m,U,w,I,D,S,O)},Q=(d,h,m,y,w,I,D,S,O)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?w.ctx.activate(h,m,y,D,O):Ht(h,m,y,w,I,D,O):un(d,h,O)},Ht=(d,h,m,y,w,I,D)=>{const S=d.component=jh(d,y,w);if(fs(d)&&(S.ctx.renderer=P),$h(S),S.asyncDep){if(w&&w.registerDep(S,ye),!d.el){const O=S.subTree=Oe(ze);R(null,O,h,m)}return}ye(S,d,h,m,w,I,D)},un=(d,h,m)=>{const y=h.component=d.component;if(Qd(d,h,m))if(y.asyncDep&&!y.asyncResolved){oe(y,h,m);return}else y.next=h,$d(y.update),y.update();else h.el=d.el,y.vnode=h},ye=(d,h,m,y,w,I,D)=>{const S=()=>{if(d.isMounted){let{next:U,bu:M,u:F,parent:$,vnode:G}=d,ce=U,se;Vt(d,!1),U?(U.el=G.el,oe(d,U,D)):U=G,M&&Pr(M),(se=U.props&&U.props.onVnodeBeforeUpdate)&&Xe(se,$,U,G),Vt(d,!0);const pe=Os(d),Fe=d.subTree;d.subTree=pe,b(Fe,pe,f(Fe.el),v(Fe),d,w,I),U.el=pe.el,ce===null&&Yd(d,pe.el),F&&Se(F,w),(se=U.props&&U.props.onVnodeUpdated)&&Se(()=>Xe(se,$,U,G),w)}else{let U;const{el:M,props:F}=h,{bm:$,m:G,parent:ce}=d,se=Dr(h);if(Vt(d,!1),$&&Pr($),!se&&(U=F&&F.onVnodeBeforeMount)&&Xe(U,ce,h),Vt(d,!0),M&&te){const pe=()=>{d.subTree=Os(d),te(M,d.subTree,d,w,null)};se?h.type.__asyncLoader().then(()=>!d.isUnmounted&&pe()):pe()}else{const pe=d.subTree=Os(d);b(null,pe,m,y,d,w,I),h.el=pe.el}if(G&&Se(G,w),!se&&(U=F&&F.onVnodeMounted)){const pe=h;Se(()=>Xe(U,ce,pe),w)}(h.shapeFlag&256||ce&&Dr(ce.vnode)&&ce.vnode.shapeFlag&256)&&d.a&&Se(d.a,w),d.isMounted=!0,h=m=y=null}},O=d.effect=new zi(S,()=>Zi(C),d.scope),C=d.update=()=>O.run();C.id=d.uid,Vt(d,!0),C()},oe=(d,h,m)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,Ih(d,h.props,y,m),Sh(d,h.children,m),Pn(),Qo(),kn()},ee=(d,h,m,y,w,I,D,S,O=!1)=>{const C=d&&d.children,U=d?d.shapeFlag:0,M=h.children,{patchFlag:F,shapeFlag:$}=h;if(F>0){if(F&128){vt(C,M,m,y,w,I,D,S,O);return}else if(F&256){lt(C,M,m,y,w,I,D,S,O);return}}$&8?(U&16&&_e(C,w,I),M!==C&&u(m,M)):U&16?$&16?vt(C,M,m,y,w,I,D,S,O):_e(C,w,I,!0):(U&8&&u(m,""),$&16&&K(M,m,y,w,I,D,S,O))},lt=(d,h,m,y,w,I,D,S,O)=>{d=d||yn,h=h||yn;const C=d.length,U=h.length,M=Math.min(C,U);let F;for(F=0;F<M;F++){const $=h[F]=O?Tt(h[F]):Ze(h[F]);b(d[F],$,m,null,w,I,D,S,O)}C>U?_e(d,w,I,!0,!1,M):K(h,m,y,w,I,D,S,O,M)},vt=(d,h,m,y,w,I,D,S,O)=>{let C=0;const U=h.length;let M=d.length-1,F=U-1;for(;C<=M&&C<=F;){const $=d[C],G=h[C]=O?Tt(h[C]):Ze(h[C]);if(Gt($,G))b($,G,m,null,w,I,D,S,O);else break;C++}for(;C<=M&&C<=F;){const $=d[M],G=h[F]=O?Tt(h[F]):Ze(h[F]);if(Gt($,G))b($,G,m,null,w,I,D,S,O);else break;M--,F--}if(C>M){if(C<=F){const $=F+1,G=$<U?h[$].el:y;for(;C<=F;)b(null,h[C]=O?Tt(h[C]):Ze(h[C]),m,G,w,I,D,S,O),C++}}else if(C>F)for(;C<=M;)Ce(d[C],w,I,!0),C++;else{const $=C,G=C,ce=new Map;for(C=G;C<=F;C++){const Ne=h[C]=O?Tt(h[C]):Ze(h[C]);Ne.key!=null&&ce.set(Ne.key,C)}let se,pe=0;const Fe=F-G+1;let hn=!1,Uo=0;const Fn=new Array(Fe);for(C=0;C<Fe;C++)Fn[C]=0;for(C=$;C<=M;C++){const Ne=d[C];if(pe>=Fe){Ce(Ne,w,I,!0);continue}let Je;if(Ne.key!=null)Je=ce.get(Ne.key);else for(se=G;se<=F;se++)if(Fn[se-G]===0&&Gt(Ne,h[se])){Je=se;break}Je===void 0?Ce(Ne,w,I,!0):(Fn[Je-G]=C+1,Je>=Uo?Uo=Je:hn=!0,b(Ne,h[Je],m,null,w,I,D,S,O),pe++)}const Fo=hn?Dh(Fn):yn;for(se=Fo.length-1,C=Fe-1;C>=0;C--){const Ne=G+C,Je=h[Ne],jo=Ne+1<U?h[Ne+1].el:y;Fn[C]===0?b(null,Je,m,jo,w,I,D,S,O):hn&&(se<0||C!==Fo[se]?Ye(Je,m,jo,2):se--)}}},Ye=(d,h,m,y,w=null)=>{const{el:I,type:D,transition:S,children:O,shapeFlag:C}=d;if(C&6){Ye(d.component.subTree,h,m,y);return}if(C&128){d.suspense.move(h,m,y);return}if(C&64){D.move(d,h,m,P);return}if(D===Te){r(I,h,m);for(let M=0;M<O.length;M++)Ye(O[M],h,m,y);r(d.anchor,h,m);return}if(D===Ds){E(d,h,m);return}if(y!==2&&C&1&&S)if(y===0)S.beforeEnter(I),r(I,h,m),Se(()=>S.enter(I),w);else{const{leave:M,delayLeave:F,afterLeave:$}=S,G=()=>r(I,h,m),ce=()=>{M(I,()=>{G(),$&&$()})};F?F(I,G,ce):ce()}else r(I,h,m)},Ce=(d,h,m,y=!1,w=!1)=>{const{type:I,props:D,ref:S,children:O,dynamicChildren:C,shapeFlag:U,patchFlag:M,dirs:F}=d;if(S!=null&&mi(S,null,m,d,!0),U&256){h.ctx.deactivate(d);return}const $=U&1&&F,G=!Dr(d);let ce;if(G&&(ce=D&&D.onVnodeBeforeUnmount)&&Xe(ce,h,d),U&6)vr(d.component,m,y);else{if(U&128){d.suspense.unmount(m,y);return}$&&$t(d,null,h,"beforeUnmount"),U&64?d.type.remove(d,h,m,w,P,y):C&&(I!==Te||M>0&&M&64)?_e(C,h,m,!1,!0):(I===Te&&M&384||!w&&U&16)&&_e(O,h,m),y&&fn(d)}(G&&(ce=D&&D.onVnodeUnmounted)||$)&&Se(()=>{ce&&Xe(ce,h,d),$&&$t(d,null,h,"unmounted")},m)},fn=d=>{const{type:h,el:m,anchor:y,transition:w}=d;if(h===Te){dn(m,y);return}if(h===Ds){T(d);return}const I=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:S}=w,O=()=>D(m,I);S?S(d.el,I,O):O()}else I()},dn=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},vr=(d,h,m)=>{const{bum:y,scope:w,update:I,subTree:D,um:S}=d;y&&Pr(y),w.stop(),I&&(I.active=!1,Ce(D,d,h,m)),S&&Se(S,h),Se(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},_e=(d,h,m,y=!1,w=!1,I=0)=>{for(let D=I;D<d.length;D++)Ce(d[D],h,m,y,w)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),N=(d,h,m)=>{d==null?h._vnode&&Ce(h._vnode,null,null,!0):b(h._vnode||null,d,h,null,null,null,m),Qo(),ol(),h._vnode=d},P={p:b,um:Ce,m:Ye,r:fn,mt:Ht,mc:K,pc:ee,pbc:ne,n:v,o:e};let B,te;return t&&([B,te]=t(P)),{render:N,hydrate:B,createApp:Oh(N,B)}}function Vt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Cl(e,t,n=!1){const r=e.children,s=t.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Tt(s[i]),a.el=o.el),n||Cl(o,a)),a.type===hs&&(a.el=o.el)}}function Dh(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Nh=e=>e.__isTeleport,Te=Symbol(void 0),hs=Symbol(void 0),ze=Symbol(void 0),Ds=Symbol(void 0),zn=[];let $e=null;function Ve(e=!1){zn.push($e=e?null:[])}function xh(){zn.pop(),$e=zn[zn.length-1]||null}let nr=1;function ia(e){nr+=e}function Sl(e){return e.dynamicChildren=nr>0?$e||yn:null,xh(),nr>0&&$e&&$e.push(e),e}function Pt(e,t,n,r,s,i){return Sl(k(e,t,n,r,s,i,!0))}function ro(e,t,n,r,s){return Sl(Oe(e,t,n,r,s,!0))}function Ai(e){return e?e.__v_isVNode===!0:!1}function Gt(e,t){return e.type===t.type&&e.key===t.key}const ps="__vInternal",Rl=({key:e})=>e??null,Nr=({ref:e,ref_key:t,ref_for:n})=>e!=null?me(e)||be(e)||z(e)?{i:xe,r:e,k:t,f:!!n}:e:null;function k(e,t=null,n=null,r=0,s=null,i=e===Te?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Rl(t),ref:t&&Nr(t),scopeId:ll,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return a?(so(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),nr>0&&!o&&$e&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$e.push(c),c}const Oe=Lh;function Lh(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===ph)&&(e=ze),Ai(e)){const a=Ft(e,t,!0);return n&&so(a,n),nr>0&&!i&&$e&&(a.shapeFlag&6?$e[$e.indexOf(e)]=a:$e.push(a)),a.patchFlag|=-2,a}if(Gh(e)&&(e=e.__vccOpts),t){t=Mh(t);let{class:a,style:c}=t;a&&!me(a)&&(t.class=ji(a)),ue(c)&&(Yc(c)&&!V(c)&&(c=we({},c)),t.style=Fi(c))}const o=me(e)?1:Jd(e)?128:Nh(e)?64:ue(e)?4:z(e)?2:0;return k(e,t,n,r,s,o,i,!0)}function Mh(e){return e?Yc(e)||ps in e?we({},e):e:null}function Ft(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?Bh(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Rl(a),ref:t&&t.ref?n&&s?V(s)?s.concat(Nr(t)):[s,Nr(t)]:Nr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ft(e.ssContent),ssFallback:e.ssFallback&&Ft(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ol(e=" ",t=0){return Oe(hs,null,e,t)}function Pl(e="",t=!1){return t?(Ve(),ro(ze,null,e)):Oe(ze,null,e)}function Ze(e){return e==null||typeof e=="boolean"?Oe(ze):V(e)?Oe(Te,null,e.slice()):typeof e=="object"?Tt(e):Oe(hs,null,String(e))}function Tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ft(e)}function so(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),so(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(ps in t)?t._ctx=xe:s===3&&xe&&(xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:xe},n=32):(t=String(t),r&64?(n=16,t=[Ol(t)]):n=8);e.children=t,e.shapeFlag|=n}function Bh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ji([t.class,r.class]));else if(s==="style")t.style=Fi([t.style,r.style]);else if(ss(s)){const i=t[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Xe(e,t,n,r=null){Be(e,t,7,[n,r])}const Uh=Tl();let Fh=0;function jh(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Uh,i={uid:Fh++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new id(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bl(r,s),emitsOptions:cl(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Kd.bind(null,i),e.ce&&e.ce(i),i}let de=null;const Hh=()=>de||xe,Tn=e=>{de=e,e.scope.on()},Zt=()=>{de&&de.scope.off(),de=null};function kl(e){return e.vnode.shapeFlag&4}let rr=!1;function $h(e,t=!1){rr=t;const{props:n,children:r}=e.vnode,s=kl(e);Eh(e,n,s,t),Ch(e,r);const i=s?Vh(e,t):void 0;return rr=!1,i}function Vh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Jc(new Proxy(e.ctx,Ah));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Kh(e):null;Tn(e),Pn();const i=Dt(r,e,0,[e.props,s]);if(kn(),Zt(),Mc(i)){if(i.then(Zt,Zt),t)return i.then(o=>{oa(e,o,t)}).catch(o=>{ls(o,e,0)});e.asyncDep=i}else oa(e,i,t)}else Dl(e,t)}function oa(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=tl(t)),Dl(e,n)}let aa;function Dl(e,t,n){const r=e.type;if(!e.render){if(!t&&aa&&!r.render){const s=r.template||to(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=we(we({isCustomElement:i,delimiters:a},o),c);r.render=aa(s,l)}}e.render=r.render||We}Tn(e),Pn(),yh(e),kn(),Zt()}function Wh(e){return new Proxy(e.attrs,{get(t,n){return ke(e,"get","$attrs"),t[n]}})}function Kh(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Wh(e))},slots:e.slots,emit:e.emit,expose:t}}function gs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(tl(Jc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kn)return Kn[n](e)},has(t,n){return n in t||n in Kn}}))}function zh(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function Gh(e){return z(e)&&"__vccOpts"in e}const Re=(e,t)=>Fd(e,t,rr);function Nl(e,t,n){const r=arguments.length;return r===2?ue(t)&&!V(t)?Ai(t)?Oe(e,null,[t]):Oe(e,t):Oe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ai(n)&&(n=[n]),Oe(e,t,n))}const qh=Symbol(""),Qh=()=>Ke(qh),Yh="3.2.47",Jh="http://www.w3.org/2000/svg",qt=typeof document<"u"?document:null,ca=qt&&qt.createElement("template"),Xh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?qt.createElementNS(Jh,e):qt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>qt.createTextNode(e),createComment:e=>qt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ca.innerHTML=r?`<svg>${e}</svg>`:e;const a=ca.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Zh(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ep(e,t,n){const r=e.style,s=me(n);if(n&&!s){if(t&&!me(t))for(const i in t)n[i]==null&&yi(r,i,"");for(const i in n)yi(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const la=/\s*!important$/;function yi(e,t,n){if(V(n))n.forEach(r=>yi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=tp(e,t);la.test(n)?e.setProperty(On(r),n.replace(la,""),"important"):e[r]=n}}const ua=["Webkit","Moz","ms"],Ns={};function tp(e,t){const n=Ns[t];if(n)return n;let r=ot(t);if(r!=="filter"&&r in e)return Ns[t]=r;r=as(r);for(let s=0;s<ua.length;s++){const i=ua[s]+r;if(i in e)return Ns[t]=i}return t}const fa="http://www.w3.org/1999/xlink";function np(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fa,t.slice(6,t.length)):e.setAttributeNS(fa,t,n);else{const i=Jf(t);n==null||i&&!Nc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function rp(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Nc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function mn(e,t,n,r){e.addEventListener(t,n,r)}function sp(e,t,n,r){e.removeEventListener(t,n,r)}function ip(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=op(t);if(r){const l=i[t]=lp(r,s);mn(e,a,l,c)}else o&&(sp(e,a,o,c),i[t]=void 0)}}const da=/(?:Once|Passive|Capture)$/;function op(e){let t;if(da.test(e)){t={};let r;for(;r=e.match(da);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):On(e.slice(2)),t]}let xs=0;const ap=Promise.resolve(),cp=()=>xs||(ap.then(()=>xs=0),xs=Date.now());function lp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Be(up(r,n.value),t,5,[r])};return n.value=e,n.attached=cp(),n}function up(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ha=/^on[a-z]/,fp=(e,t,n,r,s=!1,i,o,a,c)=>{t==="class"?Zh(e,r,s):t==="style"?ep(e,n,r):ss(t)?Hi(t)||ip(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):dp(e,t,r,s))?rp(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),np(e,t,r,s))};function dp(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ha.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ha.test(t)&&me(n)?!1:t in e}const hp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};nh.props;const pa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return V(t)?n=>Pr(t,n):t};function pp(e){e.target.composing=!0}function ga(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const sr={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=pa(s);const i=r||s.props&&s.props.type==="number";mn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=si(a)),e._assign(a)}),n&&mn(e,"change",()=>{e.value=e.value.trim()}),t||(mn(e,"compositionstart",pp),mn(e,"compositionend",ga),mn(e,"change",ga))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=pa(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(s||e.type==="number")&&si(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},gp=we({patchProp:fp},Xh);let ma;function mp(){return ma||(ma=Ph(gp))}const Ap=(...e)=>{const t=mp().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=yp(r);if(!s)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function yp(e){return me(e)?document.querySelector(e):e}const _p=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},vp={};function bp(e,t){const n=hh("router-view");return Ve(),ro(n)}const wp=_p(vp,[["render",bp]]);function Ep(){return xl().__VUE_DEVTOOLS_GLOBAL_HOOK__}function xl(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Ip=typeof Proxy=="function",Tp="devtools-plugin:setup",Cp="plugin:settings:set";let pn,_i;function Sp(){var e;return pn!==void 0||(typeof window<"u"&&window.performance?(pn=!0,_i=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(pn=!0,_i=global.perf_hooks.performance):pn=!1),pn}function Rp(){return Sp()?_i.now():Date.now()}class Op{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const o in t.settings){const a=t.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return Rp()}},n&&n.on(Cp,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Pp(e,t){const n=e,r=xl(),s=Ep(),i=Ip&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(Tp,e,t);else{const o=i?new Op(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:o}),o&&t(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Ll="store";function Ml(e){return e===void 0&&(e=null),Ke(e!==null?e:Ll)}function Nn(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function kp(e){return e!==null&&typeof e=="object"}function Dp(e){return e&&typeof e.then=="function"}function Np(e,t){return function(){return e(t)}}function Bl(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Ul(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;ms(e,n,[],e._modules.root,!0),io(e,n,t)}function io(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,i={};Nn(s,function(o,a){i[a]=Np(o,e),Object.defineProperty(e.getters,a,{get:function(){return i[a]()},enumerable:!0})}),e._state=Dn({data:t}),e.strict&&Up(e),r&&n&&e._withCommit(function(){r.data=null})}function ms(e,t,n,r,s){var i=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!i&&!s){var a=oo(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit(function(){a[c]=r.state})}var l=r.context=xp(e,o,n);r.forEachMutation(function(u,f){var p=o+f;Lp(e,p,u,l)}),r.forEachAction(function(u,f){var p=u.root?f:o+f,g=u.handler||u;Mp(e,p,g,l)}),r.forEachGetter(function(u,f){var p=o+f;Bp(e,p,u,l)}),r.forEachChild(function(u,f){ms(e,t,n.concat(f),u,s)})}function xp(e,t,n){var r=t==="",s={dispatch:r?e.dispatch:function(i,o,a){var c=zr(i,o,a),l=c.payload,u=c.options,f=c.type;return(!u||!u.root)&&(f=t+f),e.dispatch(f,l)},commit:r?e.commit:function(i,o,a){var c=zr(i,o,a),l=c.payload,u=c.options,f=c.type;(!u||!u.root)&&(f=t+f),e.commit(f,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return e.getters}:function(){return Fl(e,t)}},state:{get:function(){return oo(e.state,n)}}}),s}function Fl(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(s){if(s.slice(0,r)===t){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[s]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function Lp(e,t,n,r){var s=e._mutations[t]||(e._mutations[t]=[]);s.push(function(o){n.call(e,r.state,o)})}function Mp(e,t,n,r){var s=e._actions[t]||(e._actions[t]=[]);s.push(function(o){var a=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},o);return Dp(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(c){throw e._devtoolHook.emit("vuex:error",c),c}):a})}function Bp(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function Up(e){Nt(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function oo(e,t){return t.reduce(function(n,r){return n[r]},e)}function zr(e,t,n){return kp(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var Fp="vuex bindings",Aa="vuex:mutations",Ls="vuex:actions",gn="vuex",jp=0;function Hp(e,t){Pp({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Fp]},function(n){n.addTimelineLayer({id:Aa,label:"Vuex Mutations",color:ya}),n.addTimelineLayer({id:Ls,label:"Vuex Actions",color:ya}),n.addInspector({id:gn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===e&&r.inspectorId===gn)if(r.filter){var s=[];Vl(s,t._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[$l(t._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===e&&r.inspectorId===gn){var s=r.nodeId;Fl(t,s),r.state=Wp(zp(t._modules,s),s==="root"?t.getters:t._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===e&&r.inspectorId===gn){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),t._withCommit(function(){r.set(t._state.data,i,r.state.value)})}}),t.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(gn),n.sendInspectorState(gn),n.addTimelineEvent({layerId:Aa,event:{time:Date.now(),title:r.type,data:i}})}),t.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=jp++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Ls,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Ls,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var ya=8702998,$p=6710886,Vp=16777215,jl={label:"namespaced",textColor:Vp,backgroundColor:$p};function Hl(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function $l(e,t){return{id:t||"root",label:Hl(t),tags:e.namespaced?[jl]:[],children:Object.keys(e._children).map(function(n){return $l(e._children[n],t+n+"/")})}}function Vl(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[jl]:[]}),Object.keys(t._children).forEach(function(s){Vl(e,t._children[s],n,r+s+"/")})}function Wp(e,t,n){t=n==="root"?t:t[n];var r=Object.keys(t),s={state:Object.keys(e.state).map(function(o){return{key:o,editable:!0,value:e.state[o]}})};if(r.length){var i=Kp(t);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Hl(o):o,editable:!1,value:vi(function(){return i[o]})}})}return s}function Kp(e){var t={};return Object.keys(e).forEach(function(n){var r=n.split("/");if(r.length>1){var s=t,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=vi(function(){return e[n]})}else t[n]=vi(function(){return e[n]})}),t}function zp(e,t){var n=t.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+t+'".');return i===n.length-1?o:o._children},t==="root"?e:e.root._children)}function vi(e){try{return e()}catch(t){return t}}var qe=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},Wl={namespaced:{configurable:!0}};Wl.namespaced.get=function(){return!!this._rawModule.namespaced};qe.prototype.addChild=function(t,n){this._children[t]=n};qe.prototype.removeChild=function(t){delete this._children[t]};qe.prototype.getChild=function(t){return this._children[t]};qe.prototype.hasChild=function(t){return t in this._children};qe.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};qe.prototype.forEachChild=function(t){Nn(this._children,t)};qe.prototype.forEachGetter=function(t){this._rawModule.getters&&Nn(this._rawModule.getters,t)};qe.prototype.forEachAction=function(t){this._rawModule.actions&&Nn(this._rawModule.actions,t)};qe.prototype.forEachMutation=function(t){this._rawModule.mutations&&Nn(this._rawModule.mutations,t)};Object.defineProperties(qe.prototype,Wl);var an=function(t){this.register([],t,!1)};an.prototype.get=function(t){return t.reduce(function(n,r){return n.getChild(r)},this.root)};an.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};an.prototype.update=function(t){Kl([],this.root,t)};an.prototype.register=function(t,n,r){var s=this;r===void 0&&(r=!0);var i=new qe(n,r);if(t.length===0)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}n.modules&&Nn(n.modules,function(a,c){s.register(t.concat(c),a,r)})};an.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};an.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1];return n?n.hasChild(r):!1};function Kl(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;Kl(e.concat(r),t.getChild(r),n.modules[r])}}function Gp(e){return new De(e)}var De=function(t){var n=this;t===void 0&&(t={});var r=t.plugins;r===void 0&&(r=[]);var s=t.strict;s===void 0&&(s=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new an(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(p,g){return c.call(o,p,g)},this.commit=function(p,g,A){return l.call(o,p,g,A)},this.strict=s;var u=this._modules.root.state;ms(this,u,[],this._modules.root),io(this,u),r.forEach(function(f){return f(n)})},ao={state:{configurable:!0}};De.prototype.install=function(t,n){t.provide(n||Ll,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Hp(t,this)};ao.state.get=function(){return this._state.data};ao.state.set=function(e){};De.prototype.commit=function(t,n,r){var s=this,i=zr(t,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(f){f(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};De.prototype.dispatch=function(t,n){var r=this,s=zr(t,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,f){l.then(function(p){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}u(p)},function(p){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,p)})}catch{}f(p)})})}};De.prototype.subscribe=function(t,n){return Bl(t,this._subscribers,n)};De.prototype.subscribeAction=function(t,n){var r=typeof t=="function"?{before:t}:t;return Bl(r,this._actionSubscribers,n)};De.prototype.watch=function(t,n,r){var s=this;return Nt(function(){return t(s.state,s.getters)},n,Object.assign({},r))};De.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};De.prototype.registerModule=function(t,n,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),ms(this,this.state,t,this._modules.get(t),r.preserveState),io(this,this.state)};De.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=oo(n.state,t.slice(0,-1));delete r[t[t.length-1]]}),Ul(this)};De.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};De.prototype.hotUpdate=function(t){this._modules.update(t),Ul(this,!0)};De.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(De.prototype,ao);const qp=Gp({state(){return{resetAtribute:!1,atributes:["DARK","LIGHT","EARTH","WATER","FIRE","WIND","DIVINE"],selectedAtributes:[],resetRace:!1,races:["Equip","Field","Quick-Play","Ritual","Continuous","Counter","Normal"],selectedRaces:[],resetMonster:!1,monsters:["Spellcaster","Dragon","Zombie","Warrior","Beast-Warrior","Beast","Winged Beast","Fiend","Fairy","Insect","Dinosaur","Reptile","Fish","Sea Serpent","Aqua","Pyro","Thunder","Rock","Plant","Machine","Psychic","Divine-Beast","Wyrm","Cyberse","Creator-God"],selectedMonsters:[],resetType:!1,types:["Normal","Effect","Ritual","Fusion","Synchro","XYZ","Pendulum","Link","Toon","Spirit","Union","Gemini","Tuner","Flip"],selectedCardTypes:[],resetLevel:!1,levels:["0","1","2","3","4","5","6","7","8","9","10","11","12","13"],selectedLevels:[],isCleared:!1,allBox:!0,monstersBox:!1,spellsBox:!1,trapsBox:!1,allfiltersArray:[],ByAttackAscending:!1,ByAttackDescending:!1,ByDefenceAscending:!1,ByDefenceDescending:!1,gotoPage:1,galleryActive:!0,listActive:!1,favList:["Dark Magician",'"A" Cell Breeding Device']}},mutations:{showAllFilters(e){e.allBox=!0,e.monstersBox=!1,e.spellsBox=!1,e.trapsBox=!1},showMonsterFilters(e){e.allBox=!1,e.monstersBox=!0,e.spellsBox=!1,e.trapsBox=!1},showSpellFilters(e){e.allBox=!1,e.monstersBox=!1,e.spellsBox=!0,e.trapsBox=!1},showTrapsFilters(e){e.allBox=!1,e.monstersBox=!1,e.spellsBox=!1,e.trapsBox=!0},resetAllFilters(e){e.selectedAtributes=[],e.selectedCardTypes=[],e.selectedLevels=[],e.selectedMonsters=[],e.selectedRaces=[],e.allfiltersArray=[],e.ByAttackAscending=!1,e.ByAttackDescending=!1,e.ByDefenceAscending=!1,e.ByDefenceDescending=!1,console.log("Filtry zostały zresetowane")},setDefaultForAtributes(e){e.resetAtribute=!1},setDefaultForRaces(e){e.resetRace=!1},setDefaultForMonsters(e){e.resetMonster=!1},setDefaultForTypes(e){e.resetType=!1},setDefaultForLevels(e){e.resetLevel=!1},addLevel(e,t){if(!e.selectedLevels.includes(t))e.selectedLevels.push(t);else{const n=e.selectedLevels.indexOf(t);n!==-1&&e.selectedLevels.splice(n,1)}},addCardType(e,t){if(!e.selectedCardTypes.includes(t))e.selectedCardTypes.push(t);else{const n=e.selectedCardTypes.indexOf(t);n!==-1&&e.selectedCardTypes.splice(n,1)}},addMonsterType(e,t){if(!e.selectedMonsters.includes(t))e.selectedMonsters.push(t);else{const n=e.selectedMonsters.indexOf(t);n!==-1&&e.selectedMonsters.splice(n,1)}},addRace(e,t){if(!e.selectedRaces.includes(t))e.selectedRaces.push(t);else{const n=e.selectedRaces.indexOf(t);n!==-1&&e.selectedRaces.splice(n,1)}},addAtribute(e,t){if(!e.selectedAtributes.includes(t))e.selectedAtributes.push(t);else{const n=e.selectedAtributes.indexOf(t);n!==-1&&e.selectedAtributes.splice(n,1)}},setDefaultForSelectedAtributes(e){e.selectedAtributes.length==0&&(e.selectedAtributes=e.atributes)},setDefaultForSelectedMonsterTypes(e){e.selectedMonsters.length==0&&(e.selectedMonsters=e.monsters)},setDefaultForSelectedCardTypes(e){e.selectedCardTypes.length==0&&(e.selectedCardTypes=e.types)},setDefaultForSelectedLevels(e){e.selectedLevels.length==0&&(e.selectedLevels=e.levels)},setDefaultForSelectedRaces(e){e.selectedRaces.leght==0&&(e.selectedLevels=e.levels)},populateAllFiltersArray(e){e.allfiltersArray.push(e.selectedAtributes),e.allfiltersArray.push(e.selectedMonsters),e.allfiltersArray.push(e.selectedCardTypes),e.allfiltersArray.push(e.selectedLevels),e.allfiltersArray.push(e.selectedRaces),e.allfiltersArray=Array.from(new Set(e.allfiltersArray.flat())),console.log(e.allfiltersArray)},sortByAttackAscending(e){e.ByAttackAscending=!0,e.ByAttackDescending=!1,e.ByDefenceAscending=!1,e.ByDefenceDescending=!1},sortByAttackDescending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!0,e.ByDefenceAscending=!1,e.ByDefenceDescending=!1},sortByDefenceAscending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!1,e.ByDefenceAscending=!0,e.ByDefenceDescending=!1},sortByDefenceDescending(e){e.ByAttackAscending=!1,e.ByAttackDescending=!1,e.ByDefenceAscending=!1,e.ByDefenceDescending=!0},showGallery(e){e.galleryActive=!0,e.listActive=!1},showList(e){e.galleryActive=!1,e.listActive=!0}},actions:{},modules:{}});/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const An=typeof window<"u";function Qp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function Ms(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ge(s)?s.map(e):e(s)}return n}const Gn=()=>{},Ge=Array.isArray,Yp=/\/$/,Jp=e=>e.replace(Yp,"");function Bs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=tg(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Xp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _a(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Zp(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Cn(t.matched[r],n.matched[s])&&zl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Cn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function zl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!eg(e[n],t[n]))return!1;return!0}function eg(e,t){return Ge(e)?va(e,t):Ge(t)?va(t,e):e===t}function va(e,t){return Ge(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function tg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ir;(function(e){e.pop="pop",e.push="push"})(ir||(ir={}));var qn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(qn||(qn={}));function ng(e){if(!e)if(An){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Jp(e)}const rg=/^[^#]+#/;function sg(e,t){return e.replace(rg,"#")+t}function ig(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const As=()=>({left:window.pageXOffset,top:window.pageYOffset});function og(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ig(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ba(e,t){return(history.state?history.state.position-t:-1)+e}const bi=new Map;function ag(e,t){bi.set(e,t)}function cg(e){const t=bi.get(e);return bi.delete(e),t}let lg=()=>location.protocol+"//"+location.host;function Gl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),_a(c,"")}return _a(n,e)+r+s}function ug(e,t,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=Gl(e,location),A=n.value,b=t.value;let x=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}x=b?p.position-b.position:0}else r(g);s.forEach(R=>{R(n.value,A,{delta:x,type:ir.pop,direction:x?x>0?qn.forward:qn.back:qn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const A=s.indexOf(p);A>-1&&s.splice(A,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:As()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function wa(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?As():null}}function fg(e){const{history:t,location:n}=window,r={value:Gl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:lg()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=re({},t.state,wa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=re({},s.value,t.state,{forward:c,scroll:As()});i(u.current,u,!0);const f=re({},wa(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function dg(e){e=ng(e);const t=fg(e),n=ug(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:e,go:r,createHref:sg.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function hg(e){return typeof e=="string"||e&&typeof e=="object"}function ql(e){return typeof e=="string"||typeof e=="symbol"}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ql=Symbol("");var Ea;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ea||(Ea={}));function Sn(e,t){return re(new Error,{type:e,[Ql]:!0},t)}function ut(e,t){return e instanceof Error&&Ql in e&&(t==null||!!(e.type&t))}const Ia="[^/]+?",pg={sensitive:!1,strict:!1,start:!0,end:!0},gg=/[.+*?^${}()[\]/\\]/g;function mg(e,t){const n=re({},pg,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(gg,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:b,optional:x,regexp:R}=p;i.push({name:A,repeatable:b,optional:x});const L=R||Ia;if(L!==Ia){g+=10;try{new RegExp(`(${L})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${A}" (${L}): `+T.message)}}let E=b?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;f||(E=x&&l.length<2?`(?:/${E})`:"/"+E),x&&(E+="?"),s+=E,g+=20,x&&(g+=-8),b&&(g+=-20),L===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",A=i[p-1];f[A.name]=g&&A.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:A,repeatable:b,optional:x}=g,R=A in l?l[A]:"";if(Ge(R)&&!b)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const L=Ge(R)?R.join("/"):R;if(!L)if(x)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${A}"`);u+=L}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ag(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function yg(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Ag(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ta(r))return 1;if(Ta(s))return-1}return s.length-r.length}function Ta(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const _g={type:0,value:""},vg=/[a-zA-Z0-9_]/;function bg(e){if(!e)return[[]];if(e==="/")return[[_g]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:vg.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function wg(e,t,n){const r=mg(bg(e.path),n),s=re(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Eg(e,t){const n=[],r=new Map;t=Ra({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,f,p){const g=!p,A=Ig(u);A.aliasOf=p&&p.record;const b=Ra(t,u),x=[A];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of E)x.push(re({},A,{components:p?p.record.components:A.components,path:T,aliasOf:p?p.record:A}))}let R,L;for(const E of x){const{path:T}=E;if(f&&T[0]!=="/"){const j=f.record.path,W=j[j.length-1]==="/"?"":"/";E.path=f.record.path+(T&&W+T)}if(R=wg(E,f,b),p?p.alias.push(R):(L=L||R,L!==R&&L.alias.push(R),g&&u.name&&!Sa(R)&&o(u.name)),A.children){const j=A.children;for(let W=0;W<j.length;W++)i(j[W],R,p&&p.children[W])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return L?()=>{o(L)}:Gn}function o(u){if(ql(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&yg(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Yl(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Sa(u)&&r.set(u.record.name,u)}function l(u,f){let p,g={},A,b;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Sn(1,{location:u});b=p.record.name,g=re(Ca(f.params,p.keys.filter(L=>!L.optional).map(L=>L.name)),u.params&&Ca(u.params,p.keys.map(L=>L.name))),A=p.stringify(g)}else if("path"in u)A=u.path,p=n.find(L=>L.re.test(A)),p&&(g=p.parse(A),b=p.record.name);else{if(p=f.name?r.get(f.name):n.find(L=>L.re.test(f.path)),!p)throw Sn(1,{location:u,currentLocation:f});b=p.record.name,g=re({},f.params,u.params),A=p.stringify(g)}const x=[];let R=p;for(;R;)x.unshift(R.record),R=R.parent;return{name:b,path:A,params:g,matched:x,meta:Cg(x)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ca(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ig(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Tg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Tg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Sa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Cg(e){return e.reduce((t,n)=>re(t,n.meta),{})}function Ra(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Yl(e,t){return t.children.some(n=>n===e||Yl(e,n))}const Jl=/#/g,Sg=/&/g,Rg=/\//g,Og=/=/g,Pg=/\?/g,Xl=/\+/g,kg=/%5B/g,Dg=/%5D/g,Zl=/%5E/g,Ng=/%60/g,eu=/%7B/g,xg=/%7C/g,tu=/%7D/g,Lg=/%20/g;function co(e){return encodeURI(""+e).replace(xg,"|").replace(kg,"[").replace(Dg,"]")}function Mg(e){return co(e).replace(eu,"{").replace(tu,"}").replace(Zl,"^")}function wi(e){return co(e).replace(Xl,"%2B").replace(Lg,"+").replace(Jl,"%23").replace(Sg,"%26").replace(Ng,"`").replace(eu,"{").replace(tu,"}").replace(Zl,"^")}function Bg(e){return wi(e).replace(Og,"%3D")}function Ug(e){return co(e).replace(Jl,"%23").replace(Pg,"%3F")}function Fg(e){return e==null?"":Ug(e).replace(Rg,"%2F")}function Gr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function jg(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Xl," "),o=i.indexOf("="),a=Gr(o<0?i:i.slice(0,o)),c=o<0?null:Gr(i.slice(o+1));if(a in t){let l=t[a];Ge(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Oa(e){let t="";for(let n in e){const r=e[n];if(n=Bg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ge(r)?r.map(i=>i&&wi(i)):[r&&wi(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Hg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ge(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const $g=Symbol(""),Pa=Symbol(""),ys=Symbol(""),nu=Symbol(""),Ei=Symbol("");function jn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ct(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Sn(4,{from:n,to:t})):f instanceof Error?a(f):hg(f)?a(Sn(2,{from:t,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Us(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Vg(a)){const l=(a.__vccOpts||a)[t];l&&s.push(Ct(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Qp(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Ct(p,n,r,i,o)()}))}}return s}function Vg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ka(e){const t=Ke(ys),n=Ke(nu),r=Re(()=>t.resolve(Z(e.to))),s=Re(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Cn.bind(null,u));if(p>-1)return p;const g=Da(c[l-2]);return l>1&&Da(u)===g&&f[f.length-1].path!==g?f.findIndex(Cn.bind(null,c[l-2])):p}),i=Re(()=>s.value>-1&&Gg(n.params,r.value.params)),o=Re(()=>s.value>-1&&s.value===n.matched.length-1&&zl(n.params,r.value.params));function a(c={}){return zg(c)?t[Z(e.replace)?"replace":"push"](Z(e.to)).catch(Gn):Promise.resolve()}return{route:r,href:Re(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Wg=pl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ka,setup(e,{slots:t}){const n=Dn(ka(e)),{options:r}=Ke(ys),s=Re(()=>({[Na(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Na(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Nl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Kg=Wg;function zg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Gg(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ge(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Da(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Na=(e,t,n)=>e??t??n,qg=pl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ke(Ei),s=Re(()=>e.route||r.value),i=Ke(Pa,0),o=Re(()=>{let l=Z(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Re(()=>s.value.matched[o.value]);kr(Pa,Re(()=>o.value+1)),kr($g,a),kr(Ei,s);const c=q();return Nt(()=>[c.value,a.value,e.name],([l,u,f],[p,g,A])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Cn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return xa(n.default,{Component:p,route:l});const g=f.props[u],A=g?g===!0?l.params:typeof g=="function"?g(l):g:null,x=Nl(p,re({},A,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return xa(n.default,{Component:x,route:l})||x}}});function xa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qg=qg;function Yg(e){const t=Eg(e.routes,e),n=e.parseQuery||jg,r=e.stringifyQuery||Oa,s=e.history,i=jn(),o=jn(),a=jn(),c=Ld(wt);let l=wt;An&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ms.bind(null,v=>""+v),f=Ms.bind(null,Fg),p=Ms.bind(null,Gr);function g(v,N){let P,B;return ql(v)?(P=t.getRecordMatcher(v),B=N):B=v,t.addRoute(B,P)}function A(v){const N=t.getRecordMatcher(v);N&&t.removeRoute(N)}function b(){return t.getRoutes().map(v=>v.record)}function x(v){return!!t.getRecordMatcher(v)}function R(v,N){if(N=re({},N||c.value),typeof v=="string"){const m=Bs(n,v,N.path),y=t.resolve({path:m.path},N),w=s.createHref(m.fullPath);return re(m,y,{params:p(y.params),hash:Gr(m.hash),redirectedFrom:void 0,href:w})}let P;if("path"in v)P=re({},v,{path:Bs(n,v.path,N.path).path});else{const m=re({},v.params);for(const y in m)m[y]==null&&delete m[y];P=re({},v,{params:f(m)}),N.params=f(N.params)}const B=t.resolve(P,N),te=v.hash||"";B.params=u(p(B.params));const d=Xp(r,re({},v,{hash:Mg(te),path:B.path})),h=s.createHref(d);return re({fullPath:d,hash:te,query:r===Oa?Hg(v.query):v.query||{}},B,{redirectedFrom:void 0,href:h})}function L(v){return typeof v=="string"?Bs(n,v,c.value.path):re({},v)}function E(v,N){if(l!==v)return Sn(8,{from:N,to:v})}function T(v){return ge(v)}function j(v){return T(re(L(v),{replace:!0}))}function W(v){const N=v.matched[v.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let B=typeof P=="function"?P(v):P;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=L(B):{path:B},B.params={}),re({query:v.query,hash:v.hash,params:"path"in B?{}:v.params},B)}}function ge(v,N){const P=l=R(v),B=c.value,te=v.state,d=v.force,h=v.replace===!0,m=W(P);if(m)return ge(re(L(m),{state:typeof m=="object"?re({},te,m.state):te,force:d,replace:h}),N||P);const y=P;y.redirectedFrom=N;let w;return!d&&Zp(r,B,P)&&(w=Sn(16,{to:y,from:B}),Ye(B,B,!0,!1)),(w?Promise.resolve(w):ne(y,B)).catch(I=>ut(I)?ut(I,2)?I:vt(I):ee(I,y,B)).then(I=>{if(I){if(ut(I,2))return ge(re({replace:h},L(I.to),{state:typeof I.to=="object"?re({},te,I.to.state):te,force:d}),N||y)}else I=fe(y,B,!0,h,te);return he(y,B,I),I})}function K(v,N){const P=E(v,N);return P?Promise.reject(P):Promise.resolve()}function ie(v){const N=dn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(v):v()}function ne(v,N){let P;const[B,te,d]=Jg(v,N);P=Us(B.reverse(),"beforeRouteLeave",v,N);for(const m of B)m.leaveGuards.forEach(y=>{P.push(Ct(y,v,N))});const h=K.bind(null,v,N);return P.push(h),_e(P).then(()=>{P=[];for(const m of i.list())P.push(Ct(m,v,N));return P.push(h),_e(P)}).then(()=>{P=Us(te,"beforeRouteUpdate",v,N);for(const m of te)m.updateGuards.forEach(y=>{P.push(Ct(y,v,N))});return P.push(h),_e(P)}).then(()=>{P=[];for(const m of v.matched)if(m.beforeEnter&&!N.matched.includes(m))if(Ge(m.beforeEnter))for(const y of m.beforeEnter)P.push(Ct(y,v,N));else P.push(Ct(m.beforeEnter,v,N));return P.push(h),_e(P)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),P=Us(d,"beforeRouteEnter",v,N),P.push(h),_e(P))).then(()=>{P=[];for(const m of o.list())P.push(Ct(m,v,N));return P.push(h),_e(P)}).catch(m=>ut(m,8)?m:Promise.reject(m))}function he(v,N,P){for(const B of a.list())ie(()=>B(v,N,P))}function fe(v,N,P,B,te){const d=E(v,N);if(d)return d;const h=N===wt,m=An?history.state:{};P&&(B||h?s.replace(v.fullPath,re({scroll:h&&m&&m.scroll},te)):s.push(v.fullPath,te)),c.value=v,Ye(v,N,P,h),vt()}let Q;function Ht(){Q||(Q=s.listen((v,N,P)=>{if(!vr.listening)return;const B=R(v),te=W(B);if(te){ge(re(te,{replace:!0}),B).catch(Gn);return}l=B;const d=c.value;An&&ag(ba(d.fullPath,P.delta),As()),ne(B,d).catch(h=>ut(h,12)?h:ut(h,2)?(ge(h.to,B).then(m=>{ut(m,20)&&!P.delta&&P.type===ir.pop&&s.go(-1,!1)}).catch(Gn),Promise.reject()):(P.delta&&s.go(-P.delta,!1),ee(h,B,d))).then(h=>{h=h||fe(B,d,!1),h&&(P.delta&&!ut(h,8)?s.go(-P.delta,!1):P.type===ir.pop&&ut(h,20)&&s.go(-1,!1)),he(B,d,h)}).catch(Gn)}))}let un=jn(),ye=jn(),oe;function ee(v,N,P){vt(v);const B=ye.list();return B.length?B.forEach(te=>te(v,N,P)):console.error(v),Promise.reject(v)}function lt(){return oe&&c.value!==wt?Promise.resolve():new Promise((v,N)=>{un.add([v,N])})}function vt(v){return oe||(oe=!v,Ht(),un.list().forEach(([N,P])=>v?P(v):N()),un.reset()),v}function Ye(v,N,P,B){const{scrollBehavior:te}=e;if(!An||!te)return Promise.resolve();const d=!P&&cg(ba(v.fullPath,0))||(B||!P)&&history.state&&history.state.scroll||null;return sl().then(()=>te(v,N,d)).then(h=>h&&og(h)).catch(h=>ee(h,v,N))}const Ce=v=>s.go(v);let fn;const dn=new Set,vr={currentRoute:c,listening:!0,addRoute:g,removeRoute:A,hasRoute:x,getRoutes:b,resolve:R,options:e,push:T,replace:j,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:lt,install(v){const N=this;v.component("RouterLink",Kg),v.component("RouterView",Qg),v.config.globalProperties.$router=N,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Z(c)}),An&&!fn&&c.value===wt&&(fn=!0,T(s.location).catch(te=>{}));const P={};for(const te in wt)P[te]=Re(()=>c.value[te]);v.provide(ys,N),v.provide(nu,Dn(P)),v.provide(Ei,c);const B=v.unmount;dn.add(v),v.unmount=function(){dn.delete(v),dn.size<1&&(l=wt,Q&&Q(),Q=null,c.value=wt,fn=!1,oe=!1),B()}}};function _e(v){return v.reduce((N,P)=>N.then(()=>ie(P)),Promise.resolve())}return vr}function Jg(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Cn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Cn(l,c))||s.push(c))}return[n,r,s]}function lo(){return Ke(ys)}const Xg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nO3BQREAMBADofVvOpXQ/w1QAEDtiHZEAADwtSPaEQEAwNeOaEcEANQDM6arjUtOdLsAAAAASUVORK5CYII=",Zg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2Yy2oUYRCFOwEjMkYFQVcGBTG6UMwLRImXRbxlkSwUX8DLMrvoNqIvELNVgzjiEwgaQV9BM4lGvCxMQCReSbx8UlIdys5Mz6SnZqY79IFhGrr7nFP9V/1V3UGQI0cOVwCHgbvALPAN+ApMARPAELAuSCuATcB34jEDDARpBLABmKc2XAPag7QB2AWcB/ZrQAXgIDACfIgGEWQJQCdwLxLEmSBLANqAoglgOtWFHbMScyaIwSBrAK6YAO60wsBuYFj+E94vhR1iyt9hdQOSu4JSHWkU4rO/w+oGvizLw8aETS/EQmNcxhsoLcvDgSym0IQxMJLg/qvm/tuNcRlvQAazENJhO1eZPnbkaP42Ks1HB7MQ0mHbamxk91PRyIAB/kcxbiX0yVvzf4DTzXW90pRMlRZz2qR6ZHfSX4/mfHRSHW2peQ2gvUwQ1SBPfjRV47RMlaa5xWG65WlTpbAHZbYBXmizk99z2Sr1XLYmzxw51gqAncA48A74tcpt8xNwLsIn/eGJbqkop3DfFC1v88dlZqc+TEY4j8RcK1rHPJ98veYrrcCkWYEoFoAujwAkbULI58I+oKNu4pU6Hboqr43emAex5GWIPhe38XpHjd4bD8IlQ1hwcRmvVzB6PzwI7QS5x8VlvF630St5ED40hBddXMbrXTZ6RQ/CC4bwLbDZxWl5rS3Ae6N31isnLenTJJ9RavxO9MzozLhNrkA/8NuQvwR6XciDf/y9wCvDvwgc8uK3uRltOlIfJ5I8KX13OBmpsXCkGHI1H3nrmq/QNR/ot9J+3Um2anNar8fdem5Yr5V7KPM+faoh5k0Q2/Xt6id+WAJuAdsaaj4SSBdwQ8eLpJgFrgM7mma8QjD7tEbGgMdakB+1GBf1WAr/kV5zCdjbUtM5cqwR/AXOZpAIjqFdJAAAAABJRU5ErkJggg==",em="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgB7ZXtjcIwDIad0w1wG1xHuA2uGwATABPABrBBYYMyAWICYALKBGUD2MC8FpYIoW0+BP94pFdVXcUfceISfYjAdH1k5h88JlAG7Y0xJb0SBMigmh85aOAoTINzybxPt+xFO2gJFfpeQZcOnytvxQiydbKfqn3NYRxCKpHt+INyaKbmSm3CwFNJhUq6vj8FnFsZnqERvQs5BO67bl+t29unV9Jy6oQ8xknBgQ2W/kELx164Pr8a4hgKQ5orh4QT17ej2dcNlaX3RZ1mjk36UlqNzykVLJ7o0WV1mJRt12X8h+Zqti/jGDpRO/7LqKfGJnasbF2f3w1xZBgO6T4ge1h4sirxDcgNhcIto54S8P20MjxG0C90hMqo4fchhSsQmqLT+mqr+wAAAABJRU5ErkJggg==",tm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVR4Ae2UiwmAMAxEDye5UbuB3dBRNEIQkaqJNSC2D0KhveRKPwE6zUKJUUeLNhm1G0lilphuEqmaVZvhgLvEMxOL5rHJ1Vq1SWmuCh4Kvlq8ZOIqPuADEIFHRAReMhH4TIngj5bhbxUJDgh7A6NuyKLt/JEF1OxAhvByOXwAAAAASUVORK5CYII=";function ru(e,t){return function(){return e.apply(t,arguments)}}const{toString:su}=Object.prototype,{getPrototypeOf:uo}=Object,fo=(e=>t=>{const n=su.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_t=e=>(e=e.toLowerCase(),t=>fo(t)===e),_s=e=>t=>typeof t===e,{isArray:xn}=Array,or=_s("undefined");function nm(e){return e!==null&&!or(e)&&e.constructor!==null&&!or(e.constructor)&&jt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const iu=_t("ArrayBuffer");function rm(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&iu(e.buffer),t}const sm=_s("string"),jt=_s("function"),ou=_s("number"),ho=e=>e!==null&&typeof e=="object",im=e=>e===!0||e===!1,xr=e=>{if(fo(e)!=="object")return!1;const t=uo(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},om=_t("Date"),am=_t("File"),cm=_t("Blob"),lm=_t("FileList"),um=e=>ho(e)&&jt(e.pipe),fm=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||su.call(e)===t||jt(e.toString)&&e.toString()===t)},dm=_t("URLSearchParams"),hm=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function dr(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),xn(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function au(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const cu=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),lu=e=>!or(e)&&e!==cu;function Ii(){const{caseless:e}=lu(this)&&this||{},t={},n=(r,s)=>{const i=e&&au(t,s)||s;xr(t[i])&&xr(r)?t[i]=Ii(t[i],r):xr(r)?t[i]=Ii({},r):xn(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&dr(arguments[r],n);return t}const pm=(e,t,n,{allOwnKeys:r}={})=>(dr(t,(s,i)=>{n&&jt(s)?e[i]=ru(s,n):e[i]=s},{allOwnKeys:r}),e),gm=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),mm=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Am=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&uo(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ym=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},_m=e=>{if(!e)return null;if(xn(e))return e;let t=e.length;if(!ou(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},vm=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&uo(Uint8Array)),bm=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},wm=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Em=_t("HTMLFormElement"),Im=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),La=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Tm=_t("RegExp"),uu=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};dr(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},Cm=e=>{uu(e,(t,n)=>{if(jt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(jt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Sm=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return xn(e)?r(e):r(String(e).split(t)),n},Rm=()=>{},Om=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Fs="abcdefghijklmnopqrstuvwxyz",Ma="0123456789",fu={DIGIT:Ma,ALPHA:Fs,ALPHA_DIGIT:Fs+Fs.toUpperCase()+Ma},Pm=(e=16,t=fu.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function km(e){return!!(e&&jt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Dm=e=>{const t=new Array(10),n=(r,s)=>{if(ho(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=xn(r)?[]:{};return dr(r,(o,a)=>{const c=n(o,s+1);!or(c)&&(i[a]=c)}),t[s]=void 0,i}}return r};return n(e,0)},_={isArray:xn,isArrayBuffer:iu,isBuffer:nm,isFormData:fm,isArrayBufferView:rm,isString:sm,isNumber:ou,isBoolean:im,isObject:ho,isPlainObject:xr,isUndefined:or,isDate:om,isFile:am,isBlob:cm,isRegExp:Tm,isFunction:jt,isStream:um,isURLSearchParams:dm,isTypedArray:vm,isFileList:lm,forEach:dr,merge:Ii,extend:pm,trim:hm,stripBOM:gm,inherits:mm,toFlatObject:Am,kindOf:fo,kindOfTest:_t,endsWith:ym,toArray:_m,forEachEntry:bm,matchAll:wm,isHTMLForm:Em,hasOwnProperty:La,hasOwnProp:La,reduceDescriptors:uu,freezeMethods:Cm,toObjectSet:Sm,toCamelCase:Im,noop:Rm,toFiniteNumber:Om,findKey:au,global:cu,isContextDefined:lu,ALPHABET:fu,generateString:Pm,isSpecCompliantForm:km,toJSONObject:Dm};function J(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}_.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const du=J.prototype,hu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{hu[e]={value:e}});Object.defineProperties(J,hu);Object.defineProperty(du,"isAxiosError",{value:!0});J.from=(e,t,n,r,s,i)=>{const o=Object.create(du);return _.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),J.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Nm=null;function Ti(e){return _.isPlainObject(e)||_.isArray(e)}function pu(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function Ba(e,t,n){return e?e.concat(t).map(function(s,i){return s=pu(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function xm(e){return _.isArray(e)&&!e.some(Ti)}const Lm=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function vs(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,x){return!_.isUndefined(x[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function l(A){if(A===null)return"";if(_.isDate(A))return A.toISOString();if(!c&&_.isBlob(A))throw new J("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(A)||_.isTypedArray(A)?c&&typeof Blob=="function"?new Blob([A]):Buffer.from(A):A}function u(A,b,x){let R=A;if(A&&!x&&typeof A=="object"){if(_.endsWith(b,"{}"))b=r?b:b.slice(0,-2),A=JSON.stringify(A);else if(_.isArray(A)&&xm(A)||(_.isFileList(A)||_.endsWith(b,"[]"))&&(R=_.toArray(A)))return b=pu(b),R.forEach(function(E,T){!(_.isUndefined(E)||E===null)&&t.append(o===!0?Ba([b],T,i):o===null?b:b+"[]",l(E))}),!1}return Ti(A)?!0:(t.append(Ba(x,b,i),l(A)),!1)}const f=[],p=Object.assign(Lm,{defaultVisitor:u,convertValue:l,isVisitable:Ti});function g(A,b){if(!_.isUndefined(A)){if(f.indexOf(A)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(A),_.forEach(A,function(R,L){(!(_.isUndefined(R)||R===null)&&s.call(t,R,_.isString(L)?L.trim():L,b,p))===!0&&g(R,b?b.concat(L):[L])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Ua(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function po(e,t){this._pairs=[],e&&vs(e,this,t)}const gu=po.prototype;gu.append=function(t,n){this._pairs.push([t,n])};gu.toString=function(t){const n=t?function(r){return t.call(this,r,Ua)}:Ua;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Mm(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function mu(e,t,n){if(!t)return e;const r=n&&n.encode||Mm,s=n&&n.serialize;let i;if(s?i=s(t,n):i=_.isURLSearchParams(t)?t.toString():new po(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Bm{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Fa=Bm,Au={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Um=typeof URLSearchParams<"u"?URLSearchParams:po,Fm=typeof FormData<"u"?FormData:null,jm=typeof Blob<"u"?Blob:null,Hm=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),$m=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),nt={isBrowser:!0,classes:{URLSearchParams:Um,FormData:Fm,Blob:jm},isStandardBrowserEnv:Hm,isStandardBrowserWebWorkerEnv:$m,protocols:["http","https","file","blob","url","data"]};function Vm(e,t){return vs(e,new nt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return nt.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Wm(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Km(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function yu(e){function t(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&_.isArray(s)?s.length:o,c?(_.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!_.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&_.isArray(s[o])&&(s[o]=Km(s[o])),!a)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,s)=>{t(Wm(r),s,n,0)}),n}return null}const zm={"Content-Type":void 0};function Gm(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const bs={transitional:Au,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return s&&s?JSON.stringify(yu(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Vm(t,this.formSerializer).toString();if((a=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return vs(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Gm(t)):t}],transformResponse:[function(t){const n=this.transitional||bs.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&_.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?J.from(a,J.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_.forEach(["delete","get","head"],function(t){bs.headers[t]={}});_.forEach(["post","put","patch"],function(t){bs.headers[t]=_.merge(zm)});const go=bs,qm=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qm=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&qm[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ja=Symbol("internals");function Hn(e){return e&&String(e).trim().toLowerCase()}function Lr(e){return e===!1||e==null?e:_.isArray(e)?e.map(Lr):String(e)}function Ym(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Jm=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function js(e,t,n,r,s){if(_.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function Xm(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Zm(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class ws{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,c,l){const u=Hn(c);if(!u)throw new Error("header name must be a non-empty string");const f=_.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Lr(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));return _.isPlainObject(t)||t instanceof this.constructor?o(t,n):_.isString(t)&&(t=t.trim())&&!Jm(t)?o(Qm(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Hn(t),t){const r=_.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Ym(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Hn(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||js(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=Hn(o),o){const a=_.findKey(r,o);a&&(!n||js(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||js(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return _.forEach(this,(s,i)=>{const o=_.findKey(r,i);if(o){n[o]=Lr(s),delete n[i];return}const a=t?Xm(i):String(i).trim();a!==i&&delete n[i],n[a]=Lr(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ja]=this[ja]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Hn(o);r[a]||(Zm(s,o),r[a]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}}ws.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.freezeMethods(ws.prototype);_.freezeMethods(ws);const pt=ws;function Hs(e,t){const n=this||go,r=t||n,s=pt.from(r.headers);let i=r.data;return _.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function _u(e){return!!(e&&e.__CANCEL__)}function hr(e,t,n){J.call(this,e??"canceled",J.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(hr,J,{__CANCEL__:!0});function eA(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const tA=nt.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),_.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),_.isString(i)&&c.push("path="+i),_.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function nA(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function rA(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function vu(e,t){return e&&!nA(t)?rA(e,t):t}const sA=nt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=_.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function iA(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function oA(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const g=u&&l-u;return g?Math.round(p*1e3/g):void 0}}function Ha(e,t){let n=0;const r=oA(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const aA=typeof XMLHttpRequest<"u",cA=aA&&function(e){return new Promise(function(n,r){let s=e.data;const i=pt.from(e.headers).normalize(),o=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}_.isFormData(s)&&(nt.isStandardBrowserEnv||nt.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",A=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+A))}const u=vu(e.baseURL,e.url);l.open(e.method.toUpperCase(),mu(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function f(){if(!l)return;const g=pt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:e,request:l};eA(function(R){n(R),c()},function(R){r(R),c()},b),l=null}if("onloadend"in l?l.onloadend=f:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(f)},l.onabort=function(){l&&(r(new J("Request aborted",J.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new J("Network Error",J.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let A=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||Au;e.timeoutErrorMessage&&(A=e.timeoutErrorMessage),r(new J(A,b.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,e,l)),l=null},nt.isStandardBrowserEnv){const g=(e.withCredentials||sA(u))&&e.xsrfCookieName&&tA.read(e.xsrfCookieName);g&&i.set(e.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&_.forEach(i.toJSON(),function(A,b){l.setRequestHeader(b,A)}),_.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Ha(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Ha(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=g=>{l&&(r(!g||g.type?new hr(null,e,l):g),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const p=iA(u);if(p&&nt.protocols.indexOf(p)===-1){r(new J("Unsupported protocol "+p+":",J.ERR_BAD_REQUEST,e));return}l.send(s||null)})},Mr={http:Nm,xhr:cA};_.forEach(Mr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const lA={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=_.isString(n)?Mr[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new J(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(_.hasOwnProp(Mr,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!_.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Mr};function $s(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new hr(null,e)}function $a(e){return $s(e),e.headers=pt.from(e.headers),e.data=Hs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),lA.getAdapter(e.adapter||go.adapter)(e).then(function(r){return $s(e),r.data=Hs.call(e,e.transformResponse,r),r.headers=pt.from(r.headers),r},function(r){return _u(r)||($s(e),r&&r.response&&(r.response.data=Hs.call(e,e.transformResponse,r.response),r.response.headers=pt.from(r.response.headers))),Promise.reject(r)})}const Va=e=>e instanceof pt?e.toJSON():e;function Rn(e,t){t=t||{};const n={};function r(l,u,f){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:f},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function s(l,u,f){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!_.isUndefined(u))return r(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Va(l),Va(u),!0)};return _.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const f=c[u]||s,p=f(e[u],t[u],u);_.isUndefined(p)&&f!==a||(n[u]=p)}),n}const bu="1.3.5",mo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{mo[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Wa={};mo.transitional=function(t,n,r){function s(i,o){return"[Axios v"+bu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new J(s(o," has been removed"+(n?" in "+n:"")),J.ERR_DEPRECATED);return n&&!Wa[o]&&(Wa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function uA(e,t,n){if(typeof e!="object")throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new J("option "+i+" must be "+c,J.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new J("Unknown option "+i,J.ERR_BAD_OPTION)}}const Ci={assertOptions:uA,validators:mo},Et=Ci.validators;class qr{constructor(t){this.defaults=t,this.interceptors={request:new Fa,response:new Fa}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Rn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ci.assertOptions(r,{silentJSONParsing:Et.transitional(Et.boolean),forcedJSONParsing:Et.transitional(Et.boolean),clarifyTimeoutError:Et.transitional(Et.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:Ci.assertOptions(s,{encode:Et.function,serialize:Et.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&_.merge(i.common,i[n.method]),o&&_.forEach(["delete","get","head","post","put","patch","common"],A=>{delete i[A]}),n.headers=pt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,p;if(!c){const A=[$a.bind(this),void 0];for(A.unshift.apply(A,a),A.push.apply(A,l),p=A.length,u=Promise.resolve(n);f<p;)u=u.then(A[f++],A[f++]);return u}p=a.length;let g=n;for(f=0;f<p;){const A=a[f++],b=a[f++];try{g=A(g)}catch(x){b.call(this,x);break}}try{u=$a.call(this,g)}catch(A){return Promise.reject(A)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=Rn(this.defaults,t);const n=vu(t.baseURL,t.url);return mu(n,t.params,t.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(t){qr.prototype[t]=function(n,r){return this.request(Rn(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(Rn(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}qr.prototype[t]=n(),qr.prototype[t+"Form"]=n(!0)});const Br=qr;class Ao{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new hr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Ao(function(s){t=s}),cancel:t}}}const fA=Ao;function dA(e){return function(n){return e.apply(null,n)}}function hA(e){return _.isObject(e)&&e.isAxiosError===!0}const Si={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Si).forEach(([e,t])=>{Si[t]=e});const pA=Si;function wu(e){const t=new Br(e),n=ru(Br.prototype.request,t);return _.extend(n,Br.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return wu(Rn(e,s))},n}const Ae=wu(go);Ae.Axios=Br;Ae.CanceledError=hr;Ae.CancelToken=fA;Ae.isCancel=_u;Ae.VERSION=bu;Ae.toFormData=vs;Ae.AxiosError=J;Ae.Cancel=Ae.CanceledError;Ae.all=function(t){return Promise.all(t)};Ae.spread=dA;Ae.isAxiosError=hA;Ae.mergeConfig=Rn;Ae.AxiosHeaders=pt;Ae.formToJSON=e=>yu(_.isHTMLForm(e)?new FormData(e):e);Ae.HttpStatusCode=pA;Ae.default=Ae;const gA=Ae;const mA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgB7ZSxDYAgEEV/dAFGoLR0hBvJkdzAEYyTaGmnG+gZKWzk9MSEBF7yKy48DsgBmUySlMJ6x6k4A2SMq52hgDibi0TNWVxtfVdU4DvH5j3OzibOCgUEubNrRyPHQgkJsmAiSRZU5JMZJ3gt0n4Qg8AQIrjGX4SEiL7+nVD1ngTduLJQcJyw5TQP6y08czGTSZgd7Xk6rx9nNSgAAAAASUVORK5CYII=",AA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABqSURBVHgB7dJRCYBAEIThwQQ29BoYwYtgA21gBCMYxQjnCieeIMKBs0/zwTz/LCwgIpU6225bQHaGUh411hehzdaCZChCq1doBlH4I9SgXoKDiPu6CQ4inB7kLUh9/UvA80K6kGMjROTLAexeIZF+8NxQAAAAAElFTkSuQmCC",yA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAaCAYAAABGiCfwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgB7dLLCYAwEEXRixXYoZZgB6YDS9AOLCElWIolxAQEJRt/zAhhDswyXAIPjDEXhnghXoMCv8dUgnW85RTsEZaCXjOYTH8G2zsPKt4LKBk5fuUQkg/EISSffoegmYeD+BpbNULGFGYDKwEhkMTAAJcAAAAASUVORK5CYII=",_A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgB7ZTBDYAgDEV/nIAROgIj6ESu4CaO4AiOIiO4ATaRkwEsBPHSl7x4wbyUNACKokSwLAnPzuzKGlRArGcPyII+OKYODOl/cbIuhHbIJ6yGcE8mmfB1spbBJjFpsFksFjSlsdyC/Aah0zUSOi0IodPqU0FIFMstiAkBx07h+ykW8od1YTcoivLkAiO9NggrrwBvAAAAAElFTkSuQmCC",vA="/Yu-Gi-Oh-Api/assets/eyeNotStarred-774d2c4f.png",bA="/Yu-Gi-Oh-Api/assets/eyeAdded-95591e38.png";const wA={class:"card__wrapper"},EA={class:"uniqueCard"},IA={class:"uniqueCard__image--wrapper"},TA=["src"],CA={class:"uniqueCard__informations--wrapper"},SA={class:"cardName"},RA={class:"favs"},OA=["src"],PA={class:"pagination"},kA=k("img",{src:mA},null,-1),DA=[kA],NA=k("img",{src:AA},null,-1),xA=[NA],LA={class:"currentPage pages activePage"},MA={key:0,class:"nextPage pages"},BA=k("img",{src:yA},null,-1),UA=[BA],FA=k("img",{src:_A},null,-1),jA=[FA],HA={__name:"CardMobile",props:{preFilterProp:{type:Array,required:!0},searchByWhat:{type:String,required:!0},searchText:{type:String,required:!0},attackFrom:{type:Number,required:!1},attackTo:{type:Number,required:!1},defenceFrom:{type:Number,required:!1},defenceTo:{type:Number,required:!1},allCards:{type:Boolean,required:!1},monsters:{type:Boolean,required:!1},spells:{type:Boolean,required:!1},traps:{type:Boolean,required:!1}},setup(e){const t=e,n=Ml(),r=q(null),s=q(0),i=q(10),o=q(1),a=q(1),c=()=>{o.value+1<=r.value&&(i.value+=10,s.value+=10,o.value++,console.log(o.value),document.documentElement.scrollTop=0)},l=()=>{i.value!==10&&(i.value-=10,s.value-=10,o.value--,document.documentElement.scrollTop=0)},u=()=>{i.value=10,s.value=0,o.value=1,document.documentElement.scrollTop=0},f=()=>{o.value=r.value,s.value=r.value*10-10,i.value=r.value*10,document.documentElement.scrollTop=0},p=Re(()=>{let E=[];return n.state.allBox?E=t.preFilterProp.filter(T=>{if(t.searchByWhat==="true")return T.name.toLowerCase().includes(t.searchText.toLowerCase());if(t.searchByWhat==="false")return T.desc.toLowerCase().includes(t.searchText.toLowerCase())}):n.state.monstersBox?E=t.preFilterProp.filter(T=>{if(t.searchByWhat==="true")return T.name.toLowerCase().includes(t.searchText.toLowerCase())&&g(T)&&A(T)&&b(T)&&x(T)&&L(T);if(t.searchByWhat==="false")return T.desc.toLowerCase().includes(t.searchText.toLowerCase())&&g(T)&&A(T)&&b(T)&&x(T)&&L(T)}):n.state.spellsBox?E=t.preFilterProp.filter(T=>{if(t.searchByWhat==="true")return T.name.toLowerCase().includes(t.searchText.toLowerCase())&&R(T)&&T.type.toLowerCase().includes("spell");if(t.searchByWhat==="false")return T.desc.toLowerCase().includes(t.searchText.toLowerCase())&&R(T)&&T.type.toLowerCase().includes("spell")}):n.state.trapsBox&&(E=t.preFilterProp.filter(T=>{if(t.searchByWhat==="true")return T.name.toLowerCase().includes(t.searchText.toLowerCase())&&R(T)&&T.type.toLowerCase().includes("trap");if(t.searchByWhat==="false")return T.desc.toLowerCase().includes(t.searchText.toLowerCase())&&R(T)&&T.type.toLowerCase().includes("trap")})),r.value=Math.ceil(E.length/10),console.log(r.value),console.log(E),n.state.ByAttackAscending?E.sort((T,j)=>T.atk-j.atk):n.state.ByAttackDescending?E.sort((T,j)=>T.atk-j.atk).reverse():n.state.ByDefenceAscending?E.sort((T,j)=>T.def-j.def):E.sort((T,j)=>T.def-j.def).reverse()}),g=E=>{const T=Array.from(n.state.selectedLevels);return T.length===0?n.state.levels.some(W=>E.level.toString().includes(W)):T.some(W=>E.level.toString().includes(W))},A=E=>{const T=Array.from(n.state.selectedAtributes);return T.length===0?n.state.atributes.some(W=>E.attribute.includes(W)):T.some(W=>E.attribute.includes(W))},b=E=>{const T=Array.from(n.state.selectedMonsters);return T.length===0?n.state.monsters.some(W=>E.race.includes(W)):T.some(W=>E.race.includes(W))},x=E=>{const T=Array.from(n.state.selectedCardTypes);return T.length===0?n.state.types.some(W=>E.type.includes(W)):T.some(W=>E.type.includes(W))},R=E=>{const T=Array.from(n.state.selectedRaces);return T.length===0?n.state.races.some(W=>E.race.includes(W)):T.some(W=>E.race.includes(W))},L=E=>E.atk>=t.attackFrom&&E.atk<=t.attackTo&&E.def>=t.defenceFrom&&E.def<=t.defenceTo;return Nt(()=>t.searchText,()=>{s.value=0,i.value=10,o.value=1}),Nt([()=>t.monsters,()=>t.spells,()=>t.allCards,()=>t.traps],()=>{a.value=1,s.value=0,i.value=10,o.value=1}),(E,T)=>(Ve(),Pt(Te,null,[k("ul",wA,[(Ve(!0),Pt(Te,null,mh(Z(p).slice(s.value,i.value),j=>(Ve(),Pt("li",{class:"card__card",key:j.id},[k("div",EA,[k("div",IA,[k("img",{src:j.card_images[0].image_url,alt:"cardImage"},null,8,TA)]),k("div",CA,[k("div",SA,[k("h2",null,Rr(j.name),1)]),k("div",RA,[k("img",{class:"default",src:Z(n).state.favList.includes(j.name)?Z(bA):Z(vA)},null,8,OA)])])])]))),128))]),k("section",PA,[k("div",{onClick:u,class:"firstPage moveFar"},DA),k("div",{onClick:l,class:"Prev moveLess"},xA),k("div",LA,Rr(o.value),1),r.value>1&&o.value!=r.value?(Ve(),Pt("div",MA,Rr(o.value+1),1)):Pl("",!0),k("div",{onClick:c,class:"Next moveLess"},UA),k("div",{onClick:f,class:"lastPage moveFar"},jA)])],64))}},$A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEFSURBVHgB7ZYxbsJAEEVnVhMKhBR3UbocITcIXZRupVzAOUHgBBwBfAJ8AYQ7xDE4AXSIzhUSMNplVggJTOFBUIC0r/BaX/7+u82fxfnYJq0Wpc5BAjU4x/n7T7E41ZYT+2EMpaCg0eABNZvUkfeeMRoLfcrDnilEQ1naGvdmQ6Uq5ohs6hVuABGSqwLvQQyMgTHwAgp1JdX0pfnYOZ9VNUSfeY+1XkQsndvlEHl6MMwzopc+gFfMQ5+9fY+KU201/bXG4D8oYOY/OgxPbzUG+XFYiooWwto6P6WxaWJgDHyAQLlrlnATeJVfLs6cb7dUW2uBMDurGvOuKw0yq/OGg63XnO8Be/9HyLmsGN0AAAAASUVORK5CYII=",VA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACrSURBVHgB7ZXdCcJAEIRnxXdTgp3YgiVoBWoH6UDTQUqwg9RgB5aQDi6TcIH8QXa5lwT2g+Vgubl5u09CCBmAG6c91yhF5D9cMH+OeQ2fNpAHPd/pC9xVhvzzABsnpJFZC5PxQi/0whlHTsm5KO8Xyt0Sdexydo5En72h82FBH44UxfyVxwM67lYfVtMXjD7M/afxQi/cRmGNNEz53oeabw1Y9tmL88M6nQ8b8k3YMI/mI78AAAAASUVORK5CYII=",WA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGOSURBVHgB7ZZPTsJAFMbfdFo3sOhGEnZzBI6AC0nYtQJr4QZ6AryBR5C9RtyZIAZuIJ7AujKpGLrvn/FNsbEjJbKorSTzS5p5b940eYtvvnkACoVCUS7k58Zy2htzzi0MF0EQ2PX2nQMFoqcTd9LrfzUjaFBqDHEdiOTjsTvEWh9yhHPiBQGc19s388yGCOHmegWPczAxZ0ktikgDFwY5Q2nEpB7SyWpmmb5Pnwgh4pCHn314/N39273FIGd2ksT7Q7f5MrZMUOwLf6GVXZFELXRTrepjDJsobCeKwK61rhdQINK1r1QM9CDeFDF6DsOrf4Fh7Eso9EtcziBnOI8GtdbtKMm1dDHtQxn/vkIBbPUhdFEnDP2jop+OTMoUteI3NsYPcfUrBwYLNd8rQz9SQ0I7hkFnKGiGqRgN7PRoUMTjKvmQrusWeg+D9UtvalrsO3NRW047V9hoH3LGnZxIPqRvORf7EaVklWxgM8/oUw7kDM5ZkudtaMiddEboQ6cYznGEHfwLH1IoFIoC+QSlBJiLoauhMwAAAABJRU5ErkJggg==",KA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7ZXtDYJADIZ7xgEc4UZgBFdwg3MDncARHAE20A1wA+IE4ASwwdmLJakNfvw44Ix9kua4tuHecLQFUBRFSQzv/ck/qNAsTIzhGxTgcMmZqzDGbCl2wMVBXDq0PZ5x6R1LkbBiieHZslgm9rGwfCO/UBBRUVIQteHqx7hCfH/zMQkPXpM45TeYo9wHCf8NWkl9qEbLYE5CH/LPnFns6MfBcQ0LoYn3IckNpoaurGZXZiEFkhGiDGCkg0aGReu+mjORkcPV4lJCKsMVD9xRhbUDfSj34+C4huULbX0/apnvitZAfLq3UVRckPJSy19RlH/kDpJiU6iQSlDOAAAAAElFTkSuQmCC",Ka="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABEklEQVR4AbWWjRGCMAyFAxMwQp3QbgCbwApOUN3ADcoGsEFMtJwV+5OKfXe5qyV5X5v2QICEELGj6CkMhcW3FjenKRSUioucgVSjGESJZ7fCUnGNzpn3eFx9auVRWWtRKfUMHmekQz1fcuacyiGAsJfyAaPUvABi/NVnzfc7EEI6BmiJOf/eAKFnEQ0MMBJz1gZI5exkOPvrcGOFPiAECTUCQrOx67gH+JAIABtXKFLTNNvFkJZASzFDPa21AXcG3KCeLnwGHQ0WSfYPZ3BqqWilwRX+r4m8Z3ArSr7sUtc0os+XnYPoXFXqvu8U/vDQgwGPa0g2Dl87qfPJ9CDch6nA3OCBfxfaGfi7sm6OW9qlPB5FLbBeelksuwAAAABJRU5ErkJggg==",za="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7ElEQVR4AbVVP0/CUBC/e0piHAwmDsaJ0cEYdHIwkcmwKbqwWfEDwETiRNkIk59AuzIYZDNOkLjTQRM3mUw0DnVxEO3zrrSmkPbxMPBLXvp6r+93d71/CAqkjGZySUBRSsggvUpa/pFDy0bptr5A3DxZuV4cB0YJ141mKoFwRdsM6ADB6rtQjVIkRgWbZ60ikXe1yRkSDL6zaVyXRo/mhsgLrYqUbo22CzA5FgAxu7qdh9duoxMIRdhyIjfjbq+tLMJtfd9bvI8DxcsMe+LFwP/n/FuSceSX5d0/4pf3TyjU771nDJy+hC2OiedBQkBFlzxONoKknySAvvXP48jZ2rAHgUzlyZyEZUFRPtQhZ6IAAek4T77BLQmBcKBDHrYyLFMpQRR7HIP06IGKXKUkAilWEBlcjUzR+SY1HyXNlu9AF0yu+p496MHs4MxUAXVfW1Bpd2BGoNbTEhSEC5gREjQrhG3leHi0YdqQYNlBL6KSPoXBlJoWHOoQVd54ClgTyoFABU5JVV0EcInL9qfb0MjcMJomotdZ/w0KbPXBOjaD96GJ9mY32qvp/Aep3YHJp5pDlp8/Wke1sDBy6Kephf+ANKlbnYCO1ZQk8xRHO2Loo+oiK3KpnbvUcXHQFIO+1ZNcoFRDnOZ+JkbiF6tB8lhv/dntAAAAAElFTkSuQmCC",Ga="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVR4AbWWgRGDIAxFQydoN8BJOkK7SdlAN7GbMApu4Agp38IVLWLQ893F9iD8j6HGEhVg5quP1of14fjHGMaMD021YFEQkNKLjXziK+ywFqwxW+ItH6ct7byI1noKASZX882yIPWbvgm0dGrQS1ZVGAALbRWcHAlQSsUNkZDbxV+edB4GBg86jztKNPovV0n2jhINiiuydxjQJTfYNM0UwzDQFsiJ+Vl43sQm8DBhCp/OudWfKebS3Awjsu1ydLkwmqQGazl/z4K/dLmZnEA0EIoDE3s+S0yigVAc6HgOVmKShkC8Tw+62OyWJgLxebMLJqa0IpoIxEH+xcMrB15JRyXCnZzzylycybtC3PKBfxcmCKR35cIYSlpslB/ATLq3vpCBewAAAABJRU5ErkJggg==",qa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACFUlEQVR4AbVVu24TQRQ9d5JIEQVyQRGoTEcBkaGiQMKiQO4gpEnHOnxAQhOJynYXpcoXwLYukHEXUUAi0XsFRErpKi9FykaRIuU1k3sn3siP2Uci+0jjmZ3HOeO5M+cSEpD3Grn7CgvGoEj8abh0hkIuARndPIP6seXPtOM4yNX5xGvkJwjfuFlEFhD8c42aS0j1d0x/ai4weSszucDAkzXT3vfF/qGxHvL5ZsUYvczNSdwekyAqTb2Yw16rvhF1UvfOjdarSQxrK29tXVr6mTQNHJvPf/1Zy2WPSM6cyatIwaMH92xJgyFVEc4bgQmFClc5DA+5ziWBskocJAwfxQJfc8VRfo8R4QJ6USnCO4wIROq1xKCA0SEvAsMMrlNgAHLfpWS5kjInmu+CCLTjFn5depUokmFO6BSYX/mD7YOTRILuMZkra/rB7hsotuKN/oFoQZyIi1zqAQG2c5LHcEk4RMoRRGLRBtLIBWMGj63ZPSs3fiPGnuOOKY2cz8f/58+UVUepjOssNQAXUSo5c7FD1Cy3/OwG9XCqMHfK5l1yzT4+Ocev1g7ePH9o2ynk0AZfePdr0u5JmU+9RpXIOuudwYGt/fdnq9F3T0bbD+rr/E+OWPYlbp/VQtn5pv9hubvTmfT5ZuUvYarsVh+RZdfA+jjHMXAkfUpaKEKa7Vyz49K1KUa+1TbyQPkNjQOrTBzGcVwBxtzszx9ksPMAAAAASUVORK5CYII=";/**
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
 */const Eu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},zA=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Iu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Eu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zA(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new GA;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const A=l<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class GA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qA=function(e){const t=Eu(e);return Iu.encodeByteArray(t,!0)},Tu=function(e){return qA(e).replace(/\./g,"")},Cu=function(e){try{return Iu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function QA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const YA=()=>QA().__FIREBASE_DEFAULTS__,JA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},XA=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Cu(e[1]);return t&&JSON.parse(t)},yo=()=>{try{return YA()||JA()||XA()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ZA=e=>{var t,n;return(n=(t=yo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Su=()=>{var e;return(e=yo())===null||e===void 0?void 0:e.config},Ru=e=>{var t;return(t=yo())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class ey{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ty(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Ou(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ny(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ry(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Pu(){try{return typeof indexedDB=="object"}catch{return!1}}function ku(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function sy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const iy="FirebaseError";class ct extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=iy,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cn.prototype.create)}}class cn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?oy(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ct(s,a,r)}}function oy(e,t){return e.replace(ay,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ay=/\{\$([^}]+)}/g;function cy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ar(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Qa(i)&&Qa(o)){if(!ar(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qa(e){return e!==null&&typeof e=="object"}/**
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
 */function pr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Vn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Wn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function ly(e,t){const n=new uy(e,t);return n.subscribe.bind(n)}class uy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fy(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Vs),s.error===void 0&&(s.error=Vs),s.complete===void 0&&(s.complete=Vs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fy(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Vs(){}/**
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
 */const dy=1e3,hy=2,py=4*60*60*1e3,gy=.5;function Ya(e,t=dy,n=hy){const r=t*Math.pow(n,e),s=Math.round(gy*r*(Math.random()-.5)*2);return Math.min(py,r+s)}/**
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
 */function Qe(e){return e&&e._delegate?e._delegate:e}class at{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Kt="[DEFAULT]";/**
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
 */class my{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ey;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yy(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ay(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ay(e){return e===Kt?void 0:e}function yy(e){return e.instantiationMode==="EAGER"}/**
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
 */class _y{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new my(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const vy={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},by=ae.INFO,wy={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Ey=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=wy[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _o{constructor(t){this.name=t,this._logLevel=by,this._logHandler=Ey,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const Iy=(e,t)=>t.some(n=>e instanceof n);let Ja,Xa;function Ty(){return Ja||(Ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cy(){return Xa||(Xa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Du=new WeakMap,Ri=new WeakMap,Nu=new WeakMap,Ws=new WeakMap,vo=new WeakMap;function Sy(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(xt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Du.set(n,e)}).catch(()=>{}),vo.set(t,e),t}function Ry(e){if(Ri.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ri.set(e,t)}let Oi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ri.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Nu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Oy(e){Oi=e(Oi)}function Py(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ks(this),t,...n);return Nu.set(r,t.sort?t.sort():[t]),xt(r)}:Cy().includes(e)?function(...t){return e.apply(Ks(this),t),xt(Du.get(this))}:function(...t){return xt(e.apply(Ks(this),t))}}function ky(e){return typeof e=="function"?Py(e):(e instanceof IDBTransaction&&Ry(e),Iy(e,Ty())?new Proxy(e,Oi):e)}function xt(e){if(e instanceof IDBRequest)return Sy(e);if(Ws.has(e))return Ws.get(e);const t=ky(e);return t!==e&&(Ws.set(e,t),vo.set(t,e)),t}const Ks=e=>vo.get(e);function Dy(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=xt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(xt(o.result),c.oldVersion,c.newVersion,xt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ny=["get","getKey","getAll","getAllKeys","count"],xy=["put","add","delete","clear"],zs=new Map;function Za(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(zs.get(t))return zs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=xy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ny.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return zs.set(t,i),i}Oy(e=>({...e,get:(t,n,r)=>Za(t,n)||e.get(t,n,r),has:(t,n)=>!!Za(t,n)||e.has(t,n)}));/**
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
 */class Ly{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(My(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function My(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Pi="@firebase/app",ec="0.9.13";/**
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
 */const tn=new _o("@firebase/app"),By="@firebase/app-compat",Uy="@firebase/analytics-compat",Fy="@firebase/analytics",jy="@firebase/app-check-compat",Hy="@firebase/app-check",$y="@firebase/auth",Vy="@firebase/auth-compat",Wy="@firebase/database",Ky="@firebase/database-compat",zy="@firebase/functions",Gy="@firebase/functions-compat",qy="@firebase/installations",Qy="@firebase/installations-compat",Yy="@firebase/messaging",Jy="@firebase/messaging-compat",Xy="@firebase/performance",Zy="@firebase/performance-compat",e_="@firebase/remote-config",t_="@firebase/remote-config-compat",n_="@firebase/storage",r_="@firebase/storage-compat",s_="@firebase/firestore",i_="@firebase/firestore-compat",o_="firebase",a_="9.23.0";/**
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
 */const ki="[DEFAULT]",c_={[Pi]:"fire-core",[By]:"fire-core-compat",[Fy]:"fire-analytics",[Uy]:"fire-analytics-compat",[Hy]:"fire-app-check",[jy]:"fire-app-check-compat",[$y]:"fire-auth",[Vy]:"fire-auth-compat",[Wy]:"fire-rtdb",[Ky]:"fire-rtdb-compat",[zy]:"fire-fn",[Gy]:"fire-fn-compat",[qy]:"fire-iid",[Qy]:"fire-iid-compat",[Yy]:"fire-fcm",[Jy]:"fire-fcm-compat",[Xy]:"fire-perf",[Zy]:"fire-perf-compat",[e_]:"fire-rc",[t_]:"fire-rc-compat",[n_]:"fire-gcs",[r_]:"fire-gcs-compat",[s_]:"fire-fst",[i_]:"fire-fst-compat","fire-js":"fire-js",[o_]:"fire-js-all"};/**
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
 */const Qr=new Map,Di=new Map;function l_(e,t){try{e.container.addComponent(t)}catch(n){tn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mt(e){const t=e.name;if(Di.has(t))return tn.debug(`There were multiple attempts to register component ${t}.`),!1;Di.set(t,e);for(const n of Qr.values())l_(n,e);return!0}function Ln(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const u_={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new cn("app","Firebase",u_);/**
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
 */class f_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const gr=a_;function xu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ki,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Lt.create("bad-app-name",{appName:String(s)});if(n||(n=Su()),!n)throw Lt.create("no-options");const i=Qr.get(s);if(i){if(ar(n,i.options)&&ar(r,i.config))return i;throw Lt.create("duplicate-app",{appName:s})}const o=new _y(s);for(const c of Di.values())o.addComponent(c);const a=new f_(n,r,o);return Qr.set(s,a),a}function Lu(e=ki){const t=Qr.get(e);if(!t&&e===ki&&Su())return xu();if(!t)throw Lt.create("no-app",{appName:e});return t}function rt(e,t,n){var r;let s=(r=c_[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),tn.warn(a.join(" "));return}mt(new at(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const d_="firebase-heartbeat-database",h_=1,cr="firebase-heartbeat-store";let Gs=null;function Mu(){return Gs||(Gs=Dy(d_,h_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cr)}}}).catch(e=>{throw Lt.create("idb-open",{originalErrorMessage:e.message})})),Gs}async function p_(e){try{return await(await Mu()).transaction(cr).objectStore(cr).get(Bu(e))}catch(t){if(t instanceof ct)tn.warn(t.message);else{const n=Lt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});tn.warn(n.message)}}}async function tc(e,t){try{const r=(await Mu()).transaction(cr,"readwrite");await r.objectStore(cr).put(t,Bu(e)),await r.done}catch(n){if(n instanceof ct)tn.warn(n.message);else{const r=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(r.message)}}}function Bu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const g_=1024,m_=30*24*60*60*1e3;class A_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new __(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=m_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nc(),{heartbeatsToSend:n,unsentEntries:r}=y_(this._heartbeatsCache.heartbeats),s=Tu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function nc(){return new Date().toISOString().substring(0,10)}function y_(e,t=g_){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),rc(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class __{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pu()?ku().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await p_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return tc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return tc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function rc(e){return Tu(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function v_(e){mt(new at("platform-logger",t=>new Ly(t),"PRIVATE")),mt(new at("heartbeat",t=>new A_(t),"PRIVATE")),rt(Pi,ec,e),rt(Pi,ec,"esm2017"),rt("fire-js","")}v_("");function bo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Uu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b_=Uu,Fu=new cn("auth","Firebase",Uu());/**
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
 */const Yr=new _o("@firebase/auth");function w_(e,...t){Yr.logLevel<=ae.WARN&&Yr.warn(`Auth (${gr}): ${e}`,...t)}function Ur(e,...t){Yr.logLevel<=ae.ERROR&&Yr.error(`Auth (${gr}): ${e}`,...t)}/**
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
 */function Ue(e,...t){throw wo(e,...t)}function st(e,...t){return wo(e,...t)}function ju(e,t,n){const r=Object.assign(Object.assign({},b_()),{[t]:n});return new cn("auth","Firebase",r).create(t,{appName:e.name})}function E_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ue(e,"argument-error"),ju(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Fu.create(e,...t)}function H(e,t,...n){if(!e)throw wo(t,...n)}function dt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ur(t),new Error(t)}function At(e,t){e||dt(t)}/**
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
 */function Ni(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function I_(){return sc()==="http:"||sc()==="https:"}function sc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function T_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I_()||Ou()||"connection"in navigator)?navigator.onLine:!0}function C_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class mr{constructor(t,n){this.shortDelay=t,this.longDelay=n,At(n>t,"Short delay should be less than long delay!"),this.isMobile=ty()||ny()}get(){return T_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Eo(e,t){At(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Hu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const S_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const R_=new mr(3e4,6e4);function Mn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Bn(e,t,n,r,s={}){return $u(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=pr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Hu.fetch()(Vu(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function $u(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},S_),t);try{const s=new O_(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Sr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Sr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ju(e,u,l);Ue(e,u)}}catch(s){if(s instanceof ct)throw s;Ue(e,"network-request-failed",{message:String(s)})}}async function Ar(e,t,n,r,s={}){const i=await Bn(e,t,n,r,s);return"mfaPendingCredential"in i&&Ue(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Vu(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Eo(e.config,s):`${e.config.apiScheme}://${s}`}class O_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),R_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=st(e,t,r);return s.customData._tokenResponse=n,s}/**
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
 */async function P_(e,t){return Bn(e,"POST","/v1/accounts:delete",t)}async function k_(e,t){return Bn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Qn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function D_(e,t=!1){const n=Qe(e),r=await n.getIdToken(t),s=Io(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qn(qs(s.auth_time)),issuedAtTime:Qn(qs(s.iat)),expirationTime:Qn(qs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qs(e){return Number(e)*1e3}function Io(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ur("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cu(n);return s?JSON.parse(s):(Ur("Failed to decode base64 JWT payload"),null)}catch(s){return Ur("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function N_(e){const t=Io(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function lr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ct&&x_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function x_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class L_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Jr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await lr(e,k_(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?U_(i.providerUserInfo):[],a=B_(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function M_(e){const t=Qe(e);await Jr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function B_(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function U_(e){return e.map(t=>{var{providerId:n}=t,r=bo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function F_(e,t){const n=await $u(e,{},async()=>{const r=pr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Vu(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):N_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return H(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await F_(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ur;return r&&(H(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function It(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class en{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=bo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new L_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await lr(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return D_(this,t)}reload(){return M_(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new en(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await lr(this,P_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:T,isAnonymous:j,providerData:W,stsTokenManager:ge}=n;H(E&&ge,t,"internal-error");const K=ur.fromJSON(this.name,ge);H(typeof E=="string",t,"internal-error"),It(f,t.name),It(p,t.name),H(typeof T=="boolean",t,"internal-error"),H(typeof j=="boolean",t,"internal-error"),It(g,t.name),It(A,t.name),It(b,t.name),It(x,t.name),It(R,t.name),It(L,t.name);const ie=new en({uid:E,auth:t,email:p,emailVerified:T,displayName:f,isAnonymous:j,photoURL:A,phoneNumber:g,tenantId:b,stsTokenManager:K,createdAt:R,lastLoginAt:L});return W&&Array.isArray(W)&&(ie.providerData=W.map(ne=>Object.assign({},ne))),x&&(ie._redirectEventId=x),ie}static async _fromIdTokenResponse(t,n,r=!1){const s=new ur;s.updateFromServerResponse(n);const i=new en({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Jr(i),i}}/**
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
 */const ic=new Map;function ht(e){At(e instanceof Function,"Expected a class definition");let t=ic.get(e);return t?(At(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ic.set(e,t),t)}/**
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
 */class Ku{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Ku.type="NONE";const oc=Ku;/**
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
 */function Fr(e,t,n){return`firebase:${e}:${t}:${n}`}class wn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?en._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new wn(ht(oc),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ht(oc);const o=Fr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=en._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new wn(i,t,r))}}/**
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
 */function ac(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(qu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(zu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Yu(t))return"Blackberry";if(Ju(t))return"Webos";if(To(t))return"Safari";if((t.includes("chrome/")||Gu(t))&&!t.includes("edge/"))return"Chrome";if(Qu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zu(e=Ee()){return/firefox\//i.test(e)}function To(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Gu(e=Ee()){return/crios\//i.test(e)}function qu(e=Ee()){return/iemobile/i.test(e)}function Qu(e=Ee()){return/android/i.test(e)}function Yu(e=Ee()){return/blackberry/i.test(e)}function Ju(e=Ee()){return/webos/i.test(e)}function Es(e=Ee()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function j_(e=Ee()){var t;return Es(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function H_(){return ry()&&document.documentMode===10}function Xu(e=Ee()){return Es(e)||Qu(e)||Ju(e)||Yu(e)||/windows phone/i.test(e)||qu(e)}function $_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Zu(e,t=[]){let n;switch(e){case"Browser":n=ac(Ee());break;case"Worker":n=`${ac(Ee())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${gr}/${r}`}async function ef(e,t){return Bn(e,"GET","/v2/recaptchaConfig",Mn(e,t))}function cc(e){return e!==void 0&&e.enterprise!==void 0}class tf{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function V_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function nf(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=st("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",V_().appendChild(r)})}function W_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const K_="https://www.google.com/recaptcha/enterprise.js?render=",z_="recaptcha-enterprise",G_="NO_RECAPTCHA";class rf{constructor(t){this.type=z_,this.auth=ln(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ef(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new tf(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;cc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(G_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&cc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nf(K_+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Xr(e,t,n,r=!1){const s=new rf(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class q_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Q_{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lc(this),this.idTokenSubscription=new lc(this),this.beforeStateQueue=new q_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await wn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Jr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=C_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Qe(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(t))})}async initializeRecaptchaConfig(){const t=await ef(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new tf(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new rf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new cn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ht(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,r,s):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Zu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&w_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ln(e){return Qe(e)}class lc{constructor(t){this.auth=t,this.observer=null,this.addObserver=ly(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Y_(e,t){const n=Ln(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ar(i,t??{}))return s;Ue(s,"already-initialized")}return n.initialize({options:t})}function J_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function X_(e,t,n){const r=ln(e);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=sf(t),{host:o,port:a}=Z_(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ev()}function sf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Z_(e){const t=sf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:uc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:uc(o)}}}function uc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ev(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Co{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(t){return dt("not implemented")}_linkToIdToken(t,n){return dt("not implemented")}_getReauthenticationResolver(t){return dt("not implemented")}}async function tv(e,t){return Bn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function Qs(e,t){return Ar(e,"POST","/v1/accounts:signInWithPassword",Mn(e,t))}/**
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
 */async function nv(e,t){return Ar(e,"POST","/v1/accounts:signInWithEmailLink",Mn(e,t))}async function rv(e,t){return Ar(e,"POST","/v1/accounts:signInWithEmailLink",Mn(e,t))}/**
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
 */class fr extends Co{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new fr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new fr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Xr(t,r,"signInWithPassword");return Qs(t,s)}else return Qs(t,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Xr(t,r,"signInWithPassword");return Qs(t,i)}else return Promise.reject(s)});case"emailLink":return nv(t,{email:this._email,oobCode:this._password});default:Ue(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return tv(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rv(t,{idToken:n,email:this._email,oobCode:this._password});default:Ue(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function En(e,t){return Ar(e,"POST","/v1/accounts:signInWithIdp",Mn(e,t))}/**
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
 */const sv="http://localhost";class nn extends Co{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new nn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=bo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new nn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return En(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,En(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,En(t,n)}buildRequest(){const t={requestUri:sv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=pr(n)}return t}}/**
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
 */function iv(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ov(e){const t=Vn(Wn(e)).link,n=t?Vn(Wn(t)).deep_link_id:null,r=Vn(Wn(e)).deep_link_id;return(r?Vn(Wn(r)).link:null)||r||n||t||e}class So{constructor(t){var n,r,s,i,o,a;const c=Vn(Wn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=iv((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=ov(t);try{return new So(n)}catch{return null}}}/**
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
 */class Un{constructor(){this.providerId=Un.PROVIDER_ID}static credential(t,n){return fr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=So.parseLink(n);return H(r,"argument-error"),fr._fromEmailAndCode(t,r.code,r.tenantId)}}Un.PROVIDER_ID="password";Un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ro{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yr extends Ro{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class St extends yr{constructor(){super("facebook.com")}static credential(t){return nn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
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
 */class tt extends yr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return nn._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return tt.credentialFromTaggedObject(t)}static credentialFromError(t){return tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return tt.credential(n,r)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
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
 */class Rt extends yr{constructor(){super("github.com")}static credential(t){return nn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
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
 */class Ot extends yr{constructor(){super("twitter.com")}static credential(t,n){return nn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
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
 */async function Ys(e,t){return Ar(e,"POST","/v1/accounts:signUp",Mn(e,t))}/**
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
 */class rn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await en._fromIdTokenResponse(t,r,s),o=fc(r);return new rn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=fc(r);return new rn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function fc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Zr extends ct{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Zr(t,n,r,s)}}function of(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zr._fromErrorAndOperation(e,i,t,r):i})}async function av(e,t,n=!1){const r=await lr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return rn._forOperation(e,"link",r)}/**
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
 */async function cv(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await lr(e,of(r,s,t,e),n);H(i.idToken,r,"internal-error");const o=Io(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(e.uid===a,r,"user-mismatch"),rn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),i}}/**
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
 */async function af(e,t,n=!1){const r="signIn",s=await of(e,r,t),i=await rn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function lv(e,t){return af(ln(e),t)}async function uv(e,t,n){var r;const s=ln(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Xr(s,i,"signUpPassword");o=Ys(s,l)}else o=Ys(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Xr(s,i,"signUpPassword");return Ys(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await rn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function fv(e,t,n){return lv(Qe(e),Un.credential(t,n))}function dv(e,t,n,r){return Qe(e).onIdTokenChanged(t,n,r)}function hv(e,t,n){return Qe(e).beforeAuthStateChanged(t,n)}function pv(e,t,n,r){return Qe(e).onAuthStateChanged(t,n,r)}function cf(e){return Qe(e).signOut()}const es="__sak";/**
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
 */class lf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(es,"1"),this.storage.removeItem(es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gv(){const e=Ee();return To(e)||Es(e)}const mv=1e3,Av=10;class uf extends lf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gv()&&$_(),this.fallbackToPolling=Xu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);H_()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Av):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},mv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}uf.type="LOCAL";const yv=uf;/**
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
 */class ff extends lf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ff.type="SESSION";const df=ff;/**
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
 */function _v(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Is{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Is(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await _v(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Is.receivers=[];/**
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
 */function Oo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class vv{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Oo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function it(){return window}function bv(e){it().location.href=e}/**
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
 */function hf(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function wv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ev(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Iv(){return hf()?self:null}/**
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
 */const pf="firebaseLocalStorageDb",Tv=1,ts="firebaseLocalStorage",gf="fbase_key";class _r{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ts(e,t){return e.transaction([ts],t?"readwrite":"readonly").objectStore(ts)}function Cv(){const e=indexedDB.deleteDatabase(pf);return new _r(e).toPromise()}function xi(){const e=indexedDB.open(pf,Tv);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ts,{keyPath:gf})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ts)?t(r):(r.close(),await Cv(),t(await xi()))})})}async function dc(e,t,n){const r=Ts(e,!0).put({[gf]:t,value:n});return new _r(r).toPromise()}async function Sv(e,t){const n=Ts(e,!1).get(t),r=await new _r(n).toPromise();return r===void 0?null:r.value}function hc(e,t){const n=Ts(e,!0).delete(t);return new _r(n).toPromise()}const Rv=800,Ov=3;class mf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Ov)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Is._getInstance(Iv()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await wv(),!this.activeServiceWorker)return;this.sender=new vv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Ev()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await xi();return await dc(t,es,"1"),await hc(t,es),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Sv(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Ts(s,!1).getAll();return new _r(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mf.type="LOCAL";const Pv=mf;new mr(3e4,6e4);/**
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
 */function Af(e,t){return t?ht(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Po extends Co{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return En(t,this._buildIdpRequest())}_linkToIdToken(t,n){return En(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return En(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function kv(e){return af(e.auth,new Po(e),e.bypassAuthState)}function Dv(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),cv(n,new Po(e),e.bypassAuthState)}async function Nv(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),av(n,new Po(e),e.bypassAuthState)}/**
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
 */class yf{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return kv;case"linkViaPopup":case"linkViaRedirect":return Nv;case"reauthViaPopup":case"reauthViaRedirect":return Dv;default:Ue(this.auth,"internal-error")}}resolve(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xv=new mr(2e3,1e4);async function _f(e,t,n){const r=ln(e);E_(e,t,Ro);const s=Af(r,n);return new Yt(r,"signInViaPopup",t,s).executeNotNull()}class Yt extends yf{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const t=Oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,xv.get())};t()}}Yt.currentPopupAction=null;/**
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
 */const Lv="pendingRedirect",jr=new Map;class Mv extends yf{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=jr.get(this.auth._key());if(!t){try{const r=await Bv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}jr.set(this.auth._key(),t)}return this.bypassAuthState||jr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bv(e,t){const n=jv(t),r=Fv(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Uv(e,t){jr.set(e._key(),t)}function Fv(e){return ht(e._redirectPersistence)}function jv(e){return Fr(Lv,e.config.apiKey,e.name)}async function Hv(e,t,n=!1){const r=ln(e),s=Af(r,t),o=await new Mv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const $v=10*60*1e3;class Vv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Wv(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!vf(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(st(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$v&&this.cachedEventUids.clear(),this.cachedEventUids.has(pc(t))}saveEventToCache(t){this.cachedEventUids.add(pc(t)),this.lastProcessedEventTime=Date.now()}}function pc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function vf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Wv(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vf(e);default:return!1}}/**
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
 */async function Kv(e,t={}){return Bn(e,"GET","/v1/projects",t)}/**
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
 */const zv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gv=/^https?/;async function qv(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Kv(e);for(const n of t)try{if(Qv(n))return}catch{}Ue(e,"unauthorized-domain")}function Qv(e){const t=Ni(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gv.test(n))return!1;if(zv.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Yv=new mr(3e4,6e4);function gc(){const e=it().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Jv(e){return new Promise((t,n)=>{var r,s,i;function o(){gc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gc(),n(st(e,"network-request-failed"))},timeout:Yv.get()})}if(!((s=(r=it().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=it().gapi)===null||i===void 0)&&i.load)o();else{const a=W_("iframefcb");return it()[a]=()=>{gapi.load?o():n(st(e,"network-request-failed"))},nf(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Hr=null,t})}let Hr=null;function Xv(e){return Hr=Hr||Jv(e),Hr}/**
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
 */const Zv=new mr(5e3,15e3),eb="__/auth/iframe",tb="emulator/auth/iframe",nb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sb(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Eo(t,tb):`https://${e.config.authDomain}/${eb}`,r={apiKey:t.apiKey,appName:e.name,v:gr},s=rb.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${pr(r).slice(1)}`}async function ib(e){const t=await Xv(e),n=it().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:sb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=st(e,"network-request-failed"),a=it().setTimeout(()=>{i(o)},Zv.get());function c(){it().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ab=500,cb=600,lb="_blank",ub="http://localhost";class mc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fb(e,t,n,r=ab,s=cb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ob),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=Gu(l)?lb:n),zu(l)&&(t=t||ub,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,A])=>`${p}${g}=${A},`,"");if(j_(l)&&a!=="_self")return db(t||"",a),new mc(null);const f=window.open(t||"",a,u);H(f,e,"popup-blocked");try{f.focus()}catch{}return new mc(f)}function db(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hb="__/auth/handler",pb="emulator/auth/handler",gb=encodeURIComponent("fac");async function Ac(e,t,n,r,s,i){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:gr,eventId:s};if(t instanceof Ro){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",cy(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(t instanceof yr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${gb}=${encodeURIComponent(c)}`:"";return`${mb(e)}?${pr(a).slice(1)}${l}`}function mb({config:e}){return e.emulator?Eo(e,pb):`https://${e.authDomain}/${hb}`}/**
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
 */const Js="webStorageSupport";class Ab{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=df,this._completeRedirectFn=Hv,this._overrideRedirectResult=Uv}async _openPopup(t,n,r,s){var i;At((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ac(t,n,r,Ni(),s);return fb(t,o,Oo())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Ac(t,n,r,Ni(),s);return bv(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(At(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ib(t),r=new Vv(t);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Js,{type:Js},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Js];o!==void 0&&n(!!o),Ue(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qv(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xu()||To()||Es()}}const yb=Ab;var yc="@firebase/auth",_c="0.23.2";/**
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
 */class _b{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bb(e){mt(new at("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zu(e)},l=new Q_(r,s,i,c);return J_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),mt(new at("auth-internal",t=>{const n=ln(t.getProvider("auth").getImmediate());return(r=>new _b(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(yc,_c,vb(e)),rt(yc,_c,"esm2017")}/**
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
 */const wb=5*60,Eb=Ru("authIdTokenMaxAge")||wb;let vc=null;const Ib=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Eb)return;const s=n==null?void 0:n.token;vc!==s&&(vc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mt(e=Lu()){const t=Ln(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Y_(e,{popupRedirectResolver:yb,persistence:[Pv,yv,df]}),r=Ru("authTokenSyncURL");if(r){const i=Ib(r);hv(n,i,()=>i(n.currentUser)),dv(n,o=>i(o))}const s=ZA("auth");return s&&X_(n,`http://${s}`),n}bb("Browser");const Tb=k("img",{src:Xg},null,-1),Cb=k("h1",null,"Yu-Gi-Oh!",-1),Sb={class:"searchBar"},Rb={class:"filters"},Ob={class:"filters-icons"},Pb=["src"],kb=["src"],Db=k("img",{src:em},null,-1),Nb={class:"popupFilters"},xb={class:"popupFiltersWrapper"},Lb={class:"topupSection"},Mb=k("span",null,"Filters",-1),Bb={class:"topupRight"},Ub=k("span",{class:"sortby"},"sort by",-1),Fb={class:"sortByAttackandDefence"},jb={class:"sortByAttack"},Hb=k("span",null,"Attack",-1),$b=["src"],Vb=["src"],Wb={class:"sortByDefence"},Kb=k("span",null,"Defence",-1),zb=["src"],Gb=["src"],qb={__name:"SearchComponentMobile",setup(e){const t=Ml(),n=lo(),r=q(""),s=q(0),i=q(15e3),o=q(0),a=q(15e3);q("block");const c=q([]);let l=q("true");const u=q(0),f=q(!0),p=q(!1),g=q(!1),A=q(!1);q(!1),q(!1),q(!1),q(!1),q(!1),q(!1),q(!1),q(t.state.levels),q(t.state.types),q(t.state.monsters),q(t.state.races),q(t.state.atributes);const b=()=>{t.commit("sortByAttackAscending")},x=()=>{t.commit("sortByAttackDescending")},R=()=>{t.commit("sortByDefenceAscending")},L=()=>{t.commit("sortByDefenceDescending")},E=()=>{cf(Mt()).then(()=>{n.push("/signin")})},T=Re(()=>c.value);(()=>{t.commit("setDefaultForSelectedAtributes"),t.commit("setDefaultForSelectedMonsterTypes"),t.commit("setDefaultForSelectedCardTypes"),t.commit("setDefaultForSelectedLevels"),t.commit("setDefaultForSelectedRaces")})();const W=async()=>{try{const fe=(await gA.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")).data.data;fe.forEach(Q=>{Q.hasOwnProperty("attribute")||(Q.attribute="undefined"),Q.hasOwnProperty("name")||(Q.name="undefined"),Q.hasOwnProperty("race")||(Q.race="undefined"),Q.hasOwnProperty("type")||(Q.type="undefined"),Q.hasOwnProperty("atk")||(Q.atk="undefined"),Q.hasOwnProperty("def")||(Q.def="undefined"),Q.hasOwnProperty("level")||(Q.level="undefined")}),c.value=fe,console.log(c.value),u.value=c.value.length,console.log(u.value)}catch(he){console.log(he)}};eo(()=>{W()});const ge=()=>{t.commit("showGallery")},K=()=>{t.commit("showList")},ie=()=>{console.log("Filters expanded"),document.querySelector(".popupFilters").style.display="block"},ne=()=>{console.log("Filters hidden"),document.querySelector(".popupFilters").style.display="none"};return(he,fe)=>(Ve(),Pt(Te,null,[k("nav",null,[Tb,Cb,k("img",{onClick:E,id:"userFace",src:Zg})]),k("section",Sb,[tr(k("input",{"onUpdate:modelValue":fe[0]||(fe[0]=Q=>r.value=Q),type:"search",placeholder:"Search"},null,512),[[sr,r.value]])]),k("section",Rb,[k("div",Ob,[k("img",{onClick:ge,src:Z(t).state.galleryActive?Z($A):Z(VA)},null,8,Pb),k("img",{onClick:K,src:Z(t).state.listActive?Z(WA):Z(KA)},null,8,kb)]),k("div",{class:"filters-button"},[k("button",{onClick:ie},[Db,Ol(" Filters")])])]),k("section",Nb,[k("div",xb,[k("div",Lb,[k("div",{class:"topupLeft"},[k("img",{onClick:ne,src:tm}),Mb]),k("div",Bb,[k("button",{onClick:fe[1]||(fe[1]=Q=>Z(t).commit("resetAllFilters"))},"Clear Filters")])]),Ub,k("div",Fb,[k("div",jb,[Hb,k("img",{onClick:b,src:Z(t).state.ByAttackAscending?Z(za):Z(Ka)},null,8,$b),k("img",{onClick:x,src:Z(t).state.ByAttackDescending?Z(qa):Z(Ga)},null,8,Vb)]),k("div",Wb,[Kb,k("img",{onClick:R,src:Z(t).state.ByDefenceAscending?Z(za):Z(Ka)},null,8,zb),k("img",{onClick:L,src:Z(t).state.ByDefenceDescending?Z(qa):Z(Ga)},null,8,Gb)])])])]),Oe(HA,{preFilterProp:Z(T),searchByWhat:Z(l),searchText:r.value,attackFrom:s.value,attackTo:i.value,defenceFrom:o.value,defenceTo:a.value,allCards:f.value,monsters:p.value,spells:g.value,traps:A.value},null,8,["preFilterProp","searchByWhat","searchText","attackFrom","attackTo","defenceFrom","defenceTo","allCards","monsters","spells","traps"])],64))}},bc={__name:"HelloWorld",setup(e){return(t,n)=>(Ve(),ro(qb))}},Qb=k("h1",null,"Create an accout",-1),Yb={__name:"Register",setup(e){const t=q(""),n=q(""),r=lo(),s=()=>{uv(Mt(),t.value,n.value).then(o=>{console.log("Zalogowano pomyślnie"),r.push("/Search")}).catch(o=>{console.log(o)})},i=()=>{const o=new tt;_f(Mt(),o).then(a=>{console.log(a.user),r.push("/Search")}).catch(a=>{console.log(a)})};return(o,a)=>(Ve(),Pt(Te,null,[Qb,k("p",null,[tr(k("input",{type:"text",placeholder:"email","onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c)},null,512),[[sr,t.value]])]),k("p",null,[tr(k("input",{type:"text",placeholder:"password","onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c)},null,512),[[sr,n.value]])]),k("p",null,[k("button",{onClick:s},"Submit")]),k("p",null,[k("button",{onClick:i},"Sign in with Google")])],64))}},Jb=k("h1",null,"Sign In to an accout",-1),Xb={key:0},Zb={__name:"SignIn",setup(e){const t=q(""),n=q(""),r=q(),s=lo(),i=()=>{fv(Mt(),t.value,n.value).then(c=>{console.log("Zalogowano pomyślnie"),s.push("/Search")}).catch(c=>{switch(console.log(c),c.code){case"auth/invalid-email":r.value="Invalid email";break;case"auth/user-not-found":r.value="User not found";break;case"auth/wrong-password":r.value="Incorrenct Password";break;default:r.value="Email or password are incorrect";break}})},o=()=>{const c=new tt;_f(Mt(),c).then(l=>{console.log(l.user),s.push("/Search")}).catch(l=>{console.log(l)})},a=()=>{cf(Mt()).then(()=>{s.push("/signin")})};return(c,l)=>(Ve(),Pt(Te,null,[Jb,k("p",null,[tr(k("input",{type:"text",placeholder:"email","onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u)},null,512),[[sr,t.value]])]),k("p",null,[tr(k("input",{type:"text",placeholder:"password","onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u)},null,512),[[sr,n.value]])]),r.value?(Ve(),Pt("p",Xb,Rr(r.value),1)):Pl("",!0),k("p",null,[k("button",{onClick:i},"Submit")]),k("p",null,[k("button",{onClick:o},"Sign in with Google")]),k("p",null,[k("button",{onClick:a},"Logout")])],64))}},ew=[{path:"/",name:"Home",component:bc},{path:"/register",name:"Register",component:Yb},{path:"/signin",name:"Signin",component:Zb},{path:"/Search",name:"Search",component:bc,meta:{requiresAuth:!0}}],bf=Yg({history:dg("/Yu-Gi-Oh-Api/"),routes:ew}),tw=()=>new Promise((e,t)=>{const n=pv(Mt(),r=>{n(),e(r),console.log(Mt().currentUser)},t)});bf.beforeEach(async(e,t,n)=>{e.matched.some(r=>r.meta.requiresAuth)?await tw()?n():(console.log("You dont have acces"),n("/signin")):n()});var nw="firebase",rw="9.23.0";/**
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
 */rt(nw,rw,"app");const sw=(e,t)=>t.some(n=>e instanceof n);let wc,Ec;function iw(){return wc||(wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ow(){return Ec||(Ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wf=new WeakMap,Li=new WeakMap,Ef=new WeakMap,Xs=new WeakMap,ko=new WeakMap;function aw(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Bt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&wf.set(n,e)}).catch(()=>{}),ko.set(t,e),t}function cw(e){if(Li.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Li.set(e,t)}let Mi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Li.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ef.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function lw(e){Mi=e(Mi)}function uw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Zs(this),t,...n);return Ef.set(r,t.sort?t.sort():[t]),Bt(r)}:ow().includes(e)?function(...t){return e.apply(Zs(this),t),Bt(wf.get(this))}:function(...t){return Bt(e.apply(Zs(this),t))}}function fw(e){return typeof e=="function"?uw(e):(e instanceof IDBTransaction&&cw(e),sw(e,iw())?new Proxy(e,Mi):e)}function Bt(e){if(e instanceof IDBRequest)return aw(e);if(Xs.has(e))return Xs.get(e);const t=fw(e);return t!==e&&(Xs.set(e,t),ko.set(t,e)),t}const Zs=e=>ko.get(e);function dw(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const hw=["get","getKey","getAll","getAllKeys","count"],pw=["put","add","delete","clear"],ei=new Map;function Ic(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ei.get(t))return ei.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=pw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ei.set(t,i),i}lw(e=>({...e,get:(t,n,r)=>Ic(t,n)||e.get(t,n,r),has:(t,n)=>!!Ic(t,n)||e.has(t,n)}));const If="@firebase/installations",Do="0.6.4";/**
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
 */const Tf=1e4,Cf=`w:${Do}`,Sf="FIS_v2",gw="https://firebaseinstallations.googleapis.com/v1",mw=60*60*1e3,Aw="installations",yw="Installations";/**
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
 */const _w={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},sn=new cn(Aw,yw,_w);function Rf(e){return e instanceof ct&&e.code.includes("request-failed")}/**
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
 */function Of({projectId:e}){return`${gw}/projects/${e}/installations`}function Pf(e){return{token:e.token,requestStatus:2,expiresIn:bw(e.expiresIn),creationTime:Date.now()}}async function kf(e,t){const r=(await t.json()).error;return sn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Df({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function vw(e,{refreshToken:t}){const n=Df(e);return n.append("Authorization",ww(t)),n}async function Nf(e){const t=await e();return t.status>=500&&t.status<600?e():t}function bw(e){return Number(e.replace("s","000"))}function ww(e){return`${Sf} ${e}`}/**
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
 */async function Ew({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Of(e),s=Df(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Sf,appId:e.appId,sdkVersion:Cf},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Nf(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Pf(l.authToken)}}else throw await kf("Create Installation",c)}/**
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
 */function xf(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Iw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Tw=/^[cdef][\w-]{21}$/,Bi="";function Cw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Sw(e);return Tw.test(n)?n:Bi}catch{return Bi}}function Sw(e){return Iw(e).substr(0,22)}/**
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
 */function Cs(e){return`${e.appName}!${e.appId}`}/**
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
 */const Lf=new Map;function Mf(e,t){const n=Cs(e);Bf(n,t),Rw(n,t)}function Bf(e,t){const n=Lf.get(e);if(n)for(const r of n)r(t)}function Rw(e,t){const n=Ow();n&&n.postMessage({key:e,fid:t}),Pw()}let Jt=null;function Ow(){return!Jt&&"BroadcastChannel"in self&&(Jt=new BroadcastChannel("[Firebase] FID Change"),Jt.onmessage=e=>{Bf(e.data.key,e.data.fid)}),Jt}function Pw(){Lf.size===0&&Jt&&(Jt.close(),Jt=null)}/**
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
 */const kw="firebase-installations-database",Dw=1,on="firebase-installations-store";let ti=null;function No(){return ti||(ti=dw(kw,Dw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(on)}}})),ti}async function ns(e,t){const n=Cs(e),s=(await No()).transaction(on,"readwrite"),i=s.objectStore(on),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&Mf(e,t.fid),t}async function Uf(e){const t=Cs(e),r=(await No()).transaction(on,"readwrite");await r.objectStore(on).delete(t),await r.done}async function Ss(e,t){const n=Cs(e),s=(await No()).transaction(on,"readwrite"),i=s.objectStore(on),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Mf(e,a.fid),a}/**
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
 */async function xo(e){let t;const n=await Ss(e.appConfig,r=>{const s=Nw(r),i=xw(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Bi?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Nw(e){const t=e||{fid:Cw(),registrationStatus:0};return Ff(t)}function xw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(sn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Lw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Mw(e)}:{installationEntry:t}}async function Lw(e,t){try{const n=await Ew(e,t);return ns(e.appConfig,n)}catch(n){throw Rf(n)&&n.customData.serverCode===409?await Uf(e.appConfig):await ns(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Mw(e){let t=await Tc(e.appConfig);for(;t.registrationStatus===1;)await xf(100),t=await Tc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xo(e);return r||n}return t}function Tc(e){return Ss(e,t=>{if(!t)throw sn.create("installation-not-found");return Ff(t)})}function Ff(e){return Bw(e)?{fid:e.fid,registrationStatus:0}:e}function Bw(e){return e.registrationStatus===1&&e.registrationTime+Tf<Date.now()}/**
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
 */async function Uw({appConfig:e,heartbeatServiceProvider:t},n){const r=Fw(e,n),s=vw(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Cf,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Nf(()=>fetch(r,a));if(c.ok){const l=await c.json();return Pf(l)}else throw await kf("Generate Auth Token",c)}function Fw(e,{fid:t}){return`${Of(e)}/${t}/authTokens:generate`}/**
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
 */async function Lo(e,t=!1){let n;const r=await Ss(e.appConfig,i=>{if(!jf(i))throw sn.create("not-registered");const o=i.authToken;if(!t&&$w(o))return i;if(o.requestStatus===1)return n=jw(e,t),i;{if(!navigator.onLine)throw sn.create("app-offline");const a=Ww(i);return n=Hw(e,a),a}});return n?await n:r.authToken}async function jw(e,t){let n=await Cc(e.appConfig);for(;n.authToken.requestStatus===1;)await xf(100),n=await Cc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Lo(e,t):r}function Cc(e){return Ss(e,t=>{if(!jf(t))throw sn.create("not-registered");const n=t.authToken;return Kw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Hw(e,t){try{const n=await Uw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ns(e.appConfig,r),n}catch(n){if(Rf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Uf(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ns(e.appConfig,r)}throw n}}function jf(e){return e!==void 0&&e.registrationStatus===2}function $w(e){return e.requestStatus===2&&!Vw(e)}function Vw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+mw}function Ww(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Kw(e){return e.requestStatus===1&&e.requestTime+Tf<Date.now()}/**
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
 */async function zw(e){const t=e,{installationEntry:n,registrationPromise:r}=await xo(t);return r?r.catch(console.error):Lo(t).catch(console.error),n.fid}/**
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
 */async function Gw(e,t=!1){const n=e;return await qw(n),(await Lo(n,t)).token}async function qw(e){const{registrationPromise:t}=await xo(e);t&&await t}/**
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
 */function Qw(e){if(!e||!e.options)throw ni("App Configuration");if(!e.name)throw ni("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ni(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ni(e){return sn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Hf="installations",Yw="installations-internal",Jw=e=>{const t=e.getProvider("app").getImmediate(),n=Qw(t),r=Ln(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Xw=e=>{const t=e.getProvider("app").getImmediate(),n=Ln(t,Hf).getImmediate();return{getId:()=>zw(n),getToken:s=>Gw(n,s)}};function Zw(){mt(new at(Hf,Jw,"PUBLIC")),mt(new at(Yw,Xw,"PRIVATE"))}Zw();rt(If,Do);rt(If,Do,"esm2017");/**
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
 */const rs="analytics",eE="firebase_id",tE="origin",nE=60*1e3,rE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mo="https://www.googletagmanager.com/gtag/js";/**
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
 */const Pe=new _o("@firebase/analytics");/**
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
 */const sE={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Le=new cn("analytics","Analytics",sE);/**
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
 */function iE(e){if(!e.startsWith(Mo)){const t=Le.create("invalid-gtag-resource",{gtagURL:e});return Pe.warn(t.message),""}return e}function $f(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function oE(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function aE(e,t){const n=oE("firebase-js-sdk-policy",{createScriptURL:iE}),r=document.createElement("script"),s=`${Mo}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function cE(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function lE(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await $f(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){Pe.error(a)}e("config",s,i)}async function uE(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await $f(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Pe.error(i)}}function fE(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await uE(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await lE(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){Pe.error(a)}}return s}function dE(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=fE(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function hE(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Mo)&&n.src.includes(e))return n;return null}/**
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
 */const pE=30,gE=1e3;class mE{constructor(t={},n=gE){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Vf=new mE;function AE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function yE(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:AE(r)},i=rE.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Le.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function _E(e,t=Vf,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Le.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Le.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new wE;return setTimeout(async()=>{a.abort()},n!==void 0?n:nE),Wf({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Wf(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Vf){var i;const{appId:o,measurementId:a}=e;try{await vE(r,t)}catch(c){if(a)return Pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await yE(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!bE(l)){if(s.deleteThrottleMetadata(o),a)return Pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ya(n,s.intervalMillis,pE):Ya(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),Pe.debug(`Calling attemptFetch again in ${u} millis`),Wf(e,f,r,s)}}function vE(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Le.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function bE(e){if(!(e instanceof ct)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class wE{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function EE(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function IE(){if(Pu())try{await ku()}catch(e){return Pe.warn(Le.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Pe.warn(Le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function TE(e,t,n,r,s,i,o){var a;const c=_E(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Pe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Pe.error(g)),t.push(c);const l=IE().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([c,l]);hE(i)||aE(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[tE]="firebase",p.update=!0,f!=null&&(p[eE]=f),s("config",u.measurementId,p),u.measurementId}/**
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
 */class CE{constructor(t){this.app=t}_delete(){return delete Yn[this.app.options.appId],Promise.resolve()}}let Yn={},Sc=[];const Rc={};let ri="dataLayer",SE="gtag",Oc,Kf,Pc=!1;function RE(){const e=[];if(Ou()&&e.push("This is a browser extension environment."),sy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Le.create("invalid-analytics-context",{errorInfo:t});Pe.warn(n.message)}}function OE(e,t,n){RE();const r=e.options.appId;if(!r)throw Le.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Le.create("no-api-key");if(Yn[r]!=null)throw Le.create("already-exists",{id:r});if(!Pc){cE(ri);const{wrappedGtag:i,gtagCore:o}=dE(Yn,Sc,Rc,ri,SE);Kf=i,Oc=o,Pc=!0}return Yn[r]=TE(e,Sc,Rc,t,Oc,ri,n),new CE(e)}function PE(e=Lu()){e=Qe(e);const t=Ln(e,rs);return t.isInitialized()?t.getImmediate():kE(e)}function kE(e,t={}){const n=Ln(e,rs);if(n.isInitialized()){const s=n.getImmediate();if(ar(t,n.getOptions()))return s;throw Le.create("already-initialized")}return n.initialize({options:t})}function DE(e,t,n,r){e=Qe(e),EE(Kf,Yn[e.app.options.appId],t,n,r).catch(s=>Pe.error(s))}const kc="@firebase/analytics",Dc="0.10.0";function NE(){mt(new at(rs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return OE(r,s,n)},"PUBLIC")),mt(new at("analytics-internal",e,"PRIVATE")),rt(kc,Dc),rt(kc,Dc,"esm2017");function e(t){try{const n=t.getProvider(rs).getImmediate();return{logEvent:(r,s,i)=>DE(n,r,s,i)}}catch(n){throw Le.create("interop-component-reg-failed",{reason:n})}}}NE();const xE={apiKey:"AIzaSyB0p4c5jGZDjs0RSAdtTtrb9LYolgd4iL8",authDomain:"yu-gi-oh-f2e29.firebaseapp.com",projectId:"yu-gi-oh-f2e29",storageBucket:"yu-gi-oh-f2e29.appspot.com",messagingSenderId:"342293313702",appId:"1:342293313702:web:e2105215137c53b7535c67",measurementId:"G-TRC4QKQHR6"},LE=xu(xE),Bo=Ap(wp,{});Bo.use(qp);Bo.use(bf);Bo.mount("#app");PE(LE);
