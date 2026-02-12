function uE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function cE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var I0={exports:{}},Eu={},S0={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),dE=Symbol.for("react.portal"),hE=Symbol.for("react.fragment"),fE=Symbol.for("react.strict_mode"),pE=Symbol.for("react.profiler"),mE=Symbol.for("react.provider"),gE=Symbol.for("react.context"),yE=Symbol.for("react.forward_ref"),vE=Symbol.for("react.suspense"),_E=Symbol.for("react.memo"),xE=Symbol.for("react.lazy"),km=Symbol.iterator;function wE(t){return t===null||typeof t!="object"?null:(t=km&&t[km]||t["@@iterator"],typeof t=="function"?t:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N0=Object.assign,k0={};function yi(t,e,n){this.props=t,this.context=e,this.refs=k0,this.updater=n||b0}yi.prototype.isReactComponent={};yi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C0(){}C0.prototype=yi.prototype;function Oh(t,e,n){this.props=t,this.context=e,this.refs=k0,this.updater=n||b0}var Mh=Oh.prototype=new C0;Mh.constructor=Oh;N0(Mh,yi.prototype);Mh.isPureReactComponent=!0;var Cm=Array.isArray,A0=Object.prototype.hasOwnProperty,Fh={current:null},P0={key:!0,ref:!0,__self:!0,__source:!0};function R0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)A0.call(e,r)&&!P0.hasOwnProperty(r)&&(s[r]=e[r]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var c=Array(u),d=0;d<u;d++)c[d]=arguments[d+2];s.children=c}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)s[r]===void 0&&(s[r]=u[r]);return{$$typeof:ua,type:t,key:i,ref:o,props:s,_owner:Fh.current}}function EE(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function TE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Am=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?TE(""+t.key):e.toString(36)}function ul(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case dE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Cc(o,0):r,Cm(s)?(n="",t!=null&&(n=t.replace(Am,"$&/")+"/"),ul(s,e,n,"",function(d){return d})):s!=null&&(Uh(s)&&(s=EE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Am,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Cm(t))for(var u=0;u<t.length;u++){i=t[u];var c=r+Cc(i,u);o+=ul(i,e,n,c,s)}else if(c=wE(t),typeof c=="function")for(t=c.call(t),u=0;!(i=t.next()).done;)i=i.value,c=r+Cc(i,u++),o+=ul(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var r=[],s=0;return ul(t,r,"","",function(i){return e.call(n,i,s++)}),r}function IE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},cl={transition:null},SE={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:cl,ReactCurrentOwner:Fh};function j0(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!Uh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=yi;te.Fragment=hE;te.Profiler=pE;te.PureComponent=Oh;te.StrictMode=fE;te.Suspense=vE;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SE;te.act=j0;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=N0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Fh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(c in e)A0.call(e,c)&&!P0.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&u!==void 0?u[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var d=0;d<c;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:ua,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:gE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mE,_context:t},t.Consumer=t};te.createElement=R0;te.createFactory=function(t){var e=R0.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:yE,render:t}};te.isValidElement=Uh;te.lazy=function(t){return{$$typeof:xE,_payload:{_status:-1,_result:t},_init:IE}};te.memo=function(t,e){return{$$typeof:_E,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};te.unstable_act=j0;te.useCallback=function(t,e){return ft.current.useCallback(t,e)};te.useContext=function(t){return ft.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};te.useEffect=function(t,e){return ft.current.useEffect(t,e)};te.useId=function(){return ft.current.useId()};te.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return ft.current.useMemo(t,e)};te.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};te.useRef=function(t){return ft.current.useRef(t)};te.useState=function(t){return ft.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return ft.current.useTransition()};te.version="18.3.1";S0.exports=te;var O=S0.exports;const bE=cE(O),NE=uE({__proto__:null,default:bE},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=O,CE=Symbol.for("react.element"),AE=Symbol.for("react.fragment"),PE=Object.prototype.hasOwnProperty,RE=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jE={key:!0,ref:!0,__self:!0,__source:!0};function D0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)PE.call(e,r)&&!jE.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:CE,type:t,key:i,ref:o,props:s,_owner:RE.current}}Eu.Fragment=AE;Eu.jsx=D0;Eu.jsxs=D0;I0.exports=Eu;var l=I0.exports,V0={exports:{}},bt={},L0={exports:{}},O0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var Z=$.length;$.push(Q);e:for(;0<Z;){var _e=Z-1>>>1,Ne=$[_e];if(0<s(Ne,Q))$[_e]=Q,$[Z]=Ne,Z=_e;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],Z=$.pop();if(Z!==Q){$[0]=Z;e:for(var _e=0,Ne=$.length,Or=Ne>>>1;_e<Or;){var kt=2*(_e+1)-1,Mr=$[kt],Mt=kt+1,Ln=$[Mt];if(0>s(Mr,Z))Mt<Ne&&0>s(Ln,Mr)?($[_e]=Ln,$[Mt]=Z,_e=Mt):($[_e]=Mr,$[kt]=Z,_e=kt);else if(Mt<Ne&&0>s(Ln,Z))$[_e]=Ln,$[Mt]=Z,_e=Mt;else break e}}return Q}function s($,Q){var Z=$.sortIndex-Q.sortIndex;return Z!==0?Z:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();t.unstable_now=function(){return o.now()-u}}var c=[],d=[],p=1,m=null,g=3,S=!1,k=!1,A=!1,j=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I($){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=$)r(d),Q.sortIndex=Q.expirationTime,e(c,Q);else break;Q=n(d)}}function D($){if(A=!1,I($),!k)if(n(c)!==null)k=!0,Pi(F);else{var Q=n(d);Q!==null&&Ri(D,Q.startTime-$)}}function F($,Q){k=!1,A&&(A=!1,w(v),v=-1),S=!0;var Z=g;try{for(I(Q),m=n(c);m!==null&&(!(m.expirationTime>Q)||$&&!N());){var _e=m.callback;if(typeof _e=="function"){m.callback=null,g=m.priorityLevel;var Ne=_e(m.expirationTime<=Q);Q=t.unstable_now(),typeof Ne=="function"?m.callback=Ne:m===n(c)&&r(c),I(Q)}else r(c);m=n(c)}if(m!==null)var Or=!0;else{var kt=n(d);kt!==null&&Ri(D,kt.startTime-Q),Or=!1}return Or}finally{m=null,g=Z,S=!1}}var B=!1,x=null,v=-1,E=5,b=-1;function N(){return!(t.unstable_now()-b<E)}function C(){if(x!==null){var $=t.unstable_now();b=$;var Q=!0;try{Q=x(!0,$)}finally{Q?T():(B=!1,x=null)}}else B=!1}var T;if(typeof _=="function")T=function(){_(C)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,pn=He.port2;He.port1.onmessage=C,T=function(){pn.postMessage(null)}}else T=function(){j(C,0)};function Pi($){x=$,B||(B=!0,T())}function Ri($,Q){v=j(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){k||S||(k=!0,Pi(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var Z=g;g=Q;try{return $()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=g;g=$;try{return Q()}finally{g=Z}},t.unstable_scheduleCallback=function($,Q,Z){var _e=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?_e+Z:_e):Z=_e,$){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=Z+Ne,$={id:p++,callback:Q,priorityLevel:$,startTime:Z,expirationTime:Ne,sortIndex:-1},Z>_e?($.sortIndex=Z,e(d,$),n(c)===null&&$===n(d)&&(A?(w(v),v=-1):A=!0,Ri(D,Z-_e))):($.sortIndex=Ne,e(c,$),k||S||(k=!0,Pi(F))),$},t.unstable_shouldYield=N,t.unstable_wrapCallback=function($){var Q=g;return function(){var Z=g;g=Q;try{return $.apply(this,arguments)}finally{g=Z}}}})(O0);L0.exports=O0;var DE=L0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE=O,St=DE;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M0=new Set,Po={};function fs(t,e){ri(t,e),ri(t+"Capture",e)}function ri(t,e){for(Po[t]=e,t=0;t<e.length;t++)M0.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pd=Object.prototype.hasOwnProperty,LE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pm={},Rm={};function OE(t){return pd.call(Rm,t)?!0:pd.call(Pm,t)?!1:LE.test(t)?Rm[t]=!0:(Pm[t]=!0,!1)}function ME(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FE(t,e,n,r){if(e===null||typeof e>"u"||ME(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bh=/[\-:]([a-z])/g;function zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bh,zh);Je[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bh,zh);Je[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bh,zh);Je[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $h(t,e,n,r){var s=Je.hasOwnProperty(e)?Je[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FE(e,n,s,r)&&(n=null),r||s===null?OE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rn=VE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),qh=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),U0=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),gd=Symbol.for("react.suspense"),yd=Symbol.for("react.suspense_list"),Hh=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),B0=Symbol.for("react.offscreen"),jm=Symbol.iterator;function Qi(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Ac;function io(t){if(Ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ac=e&&e[1]||""}return`
`+Ac+t}var Pc=!1;function Rc(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,u=i.length-1;1<=o&&0<=u&&s[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(s[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||s[o]!==i[u]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=u);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function UE(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=Rc(t.type,!1),t;case 11:return t=Rc(t.type.render,!1),t;case 1:return t=Rc(t.type,!0),t;default:return""}}function vd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Rs:return"Portal";case md:return"Profiler";case qh:return"StrictMode";case gd:return"Suspense";case yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U0:return(t.displayName||"Context")+".Consumer";case F0:return(t._context.displayName||"Context")+".Provider";case Wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hh:return e=t.displayName||null,e!==null?e:vd(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return vd(t(e))}catch{}}return null}function BE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vd(e);case 8:return e===qh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function z0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zE(t){var e=z0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ba(t){t._valueTracker||(t._valueTracker=zE(t))}function $0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=z0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _d(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function q0(t,e){e=e.checked,e!=null&&$h(t,"checked",e,!1)}function xd(t,e){q0(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&wd(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wd(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function Ws(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ed(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(oo(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function W0(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Om(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function H0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Td(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?H0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var za,G0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(za=za||document.createElement("div"),za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$E=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){$E.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),go[e]=go[t]})});function K0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||go.hasOwnProperty(t)&&go[t]?(""+e).trim():e+"px"}function Q0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=K0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var qE=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Id(t,e){if(e){if(qE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function Gh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nd=null,Hs=null,Gs=null;function Mm(t){if(t=ha(t)){if(typeof Nd!="function")throw Error(M(280));var e=t.stateNode;e&&(e=Nu(e),Nd(t.stateNode,t.type,e))}}function Y0(t){Hs?Gs?Gs.push(t):Gs=[t]:Hs=t}function J0(){if(Hs){var t=Hs,e=Gs;if(Gs=Hs=null,Mm(t),e)for(t=0;t<e.length;t++)Mm(e[t])}}function X0(t,e){return t(e)}function Z0(){}var jc=!1;function ev(t,e,n){if(jc)return t(e,n);jc=!0;try{return X0(t,e,n)}finally{jc=!1,(Hs!==null||Gs!==null)&&(Z0(),J0())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var r=Nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var kd=!1;if(In)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){kd=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{kd=!1}function WE(t,e,n,r,s,i,o,u,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var yo=!1,Rl=null,jl=!1,Cd=null,HE={onError:function(t){yo=!0,Rl=t}};function GE(t,e,n,r,s,i,o,u,c){yo=!1,Rl=null,WE.apply(HE,arguments)}function KE(t,e,n,r,s,i,o,u,c){if(GE.apply(this,arguments),yo){if(yo){var d=Rl;yo=!1,Rl=null}else throw Error(M(198));jl||(jl=!0,Cd=d)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fm(t){if(ps(t)!==t)throw Error(M(188))}function QE(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Fm(s),t;if(i===r)return Fm(s),e;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,u=s.child;u;){if(u===n){o=!0,n=s,r=i;break}if(u===r){o=!0,r=s,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=s;break}if(u===r){o=!0,r=i,n=s;break}u=u.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function nv(t){return t=QE(t),t!==null?rv(t):null}function rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rv(t);if(e!==null)return e;t=t.sibling}return null}var sv=St.unstable_scheduleCallback,Um=St.unstable_cancelCallback,YE=St.unstable_shouldYield,JE=St.unstable_requestPaint,Ce=St.unstable_now,XE=St.unstable_getCurrentPriorityLevel,Kh=St.unstable_ImmediatePriority,iv=St.unstable_UserBlockingPriority,Dl=St.unstable_NormalPriority,ZE=St.unstable_LowPriority,ov=St.unstable_IdlePriority,Tu=null,sn=null;function e2(t){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Tu,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:r2,t2=Math.log,n2=Math.LN2;function r2(t){return t>>>=0,t===0?32:31-(t2(t)/n2|0)|0}var $a=64,qa=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var u=o&~s;u!==0?r=ao(u):(i&=o,i!==0&&(r=ao(i)))}else o=n&~s,o!==0?r=ao(o):i!==0&&(r=ao(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),s=1<<n,r|=t[n],e&=~s;return r}function s2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i2(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Wt(i),u=1<<o,c=s[o];c===-1?(!(u&n)||u&r)&&(s[o]=s2(u,e)):c<=e&&(t.expiredLanes|=u),i&=~u}}function Ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function av(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function o2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Wt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ue=0;function lv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uv,Yh,cv,dv,hv,Pd=!1,Wa=[],sr=null,ir=null,or=null,Do=new Map,Vo=new Map,Kn=[],a2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bm(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function Ji(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ha(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function l2(t,e,n,r,s){switch(e){case"focusin":return sr=Ji(sr,t,e,n,r,s),!0;case"dragenter":return ir=Ji(ir,t,e,n,r,s),!0;case"mouseover":return or=Ji(or,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Do.set(i,Ji(Do.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Vo.set(i,Ji(Vo.get(i)||null,t,e,n,r,s)),!0}return!1}function fv(t){var e=Gr(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=tv(n),e!==null){t.blockedOn=e,hv(t.priority,function(){cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bd=r,n.target.dispatchEvent(r),bd=null}else return e=ha(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function zm(t,e,n){dl(t)&&n.delete(e)}function u2(){Pd=!1,sr!==null&&dl(sr)&&(sr=null),ir!==null&&dl(ir)&&(ir=null),or!==null&&dl(or)&&(or=null),Do.forEach(zm),Vo.forEach(zm)}function Xi(t,e){t.blockedOn===e&&(t.blockedOn=null,Pd||(Pd=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,u2)))}function Lo(t){function e(s){return Xi(s,t)}if(0<Wa.length){Xi(Wa[0],t);for(var n=1;n<Wa.length;n++){var r=Wa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(sr!==null&&Xi(sr,t),ir!==null&&Xi(ir,t),or!==null&&Xi(or,t),Do.forEach(e),Vo.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)fv(n),n.blockedOn===null&&Kn.shift()}var Ks=Rn.ReactCurrentBatchConfig,Ll=!0;function c2(t,e,n,r){var s=ue,i=Ks.transition;Ks.transition=null;try{ue=1,Jh(t,e,n,r)}finally{ue=s,Ks.transition=i}}function d2(t,e,n,r){var s=ue,i=Ks.transition;Ks.transition=null;try{ue=4,Jh(t,e,n,r)}finally{ue=s,Ks.transition=i}}function Jh(t,e,n,r){if(Ll){var s=Rd(t,e,n,r);if(s===null)qc(t,e,r,Ol,n),Bm(t,r);else if(l2(s,t,e,n,r))r.stopPropagation();else if(Bm(t,r),e&4&&-1<a2.indexOf(t)){for(;s!==null;){var i=ha(s);if(i!==null&&uv(i),i=Rd(t,e,n,r),i===null&&qc(t,e,r,Ol,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else qc(t,e,r,null,n)}}var Ol=null;function Rd(t,e,n,r){if(Ol=null,t=Gh(r),t=Gr(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function pv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XE()){case Kh:return 1;case iv:return 4;case Dl:case ZE:return 16;case ov:return 536870912;default:return 16}default:return 16}}var er=null,Xh=null,hl=null;function mv(){if(hl)return hl;var t,e=Xh,n=e.length,r,s="value"in er?er.value:er.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return hl=s.slice(t,1<r?1-r:void 0)}function fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ha(){return!0}function $m(){return!1}function Nt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ha:$m,this.isPropagationStopped=$m,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),e}var vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=Nt(vi),da=Te({},vi,{view:0,detail:0}),h2=Nt(da),Vc,Lc,Zi,Iu=Te({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zi&&(Zi&&t.type==="mousemove"?(Vc=t.screenX-Zi.screenX,Lc=t.screenY-Zi.screenY):Lc=Vc=0,Zi=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),qm=Nt(Iu),f2=Te({},Iu,{dataTransfer:0}),p2=Nt(f2),m2=Te({},da,{relatedTarget:0}),Oc=Nt(m2),g2=Te({},vi,{animationName:0,elapsedTime:0,pseudoElement:0}),y2=Nt(g2),v2=Te({},vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_2=Nt(v2),x2=Te({},vi,{data:0}),Wm=Nt(x2),w2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=T2[t])?!!e[t]:!1}function ef(){return I2}var S2=Te({},da,{key:function(t){if(t.key){var e=w2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b2=Nt(S2),N2=Te({},Iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hm=Nt(N2),k2=Te({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),C2=Nt(k2),A2=Te({},vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),P2=Nt(A2),R2=Te({},Iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j2=Nt(R2),D2=[9,13,27,32],tf=In&&"CompositionEvent"in window,vo=null;In&&"documentMode"in document&&(vo=document.documentMode);var V2=In&&"TextEvent"in window&&!vo,gv=In&&(!tf||vo&&8<vo&&11>=vo),Gm=" ",Km=!1;function yv(t,e){switch(t){case"keyup":return D2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function L2(t,e){switch(t){case"compositionend":return vv(e);case"keypress":return e.which!==32?null:(Km=!0,Gm);case"textInput":return t=e.data,t===Gm&&Km?null:t;default:return null}}function O2(t,e){if(Ds)return t==="compositionend"||!tf&&yv(t,e)?(t=mv(),hl=Xh=er=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gv&&e.locale!=="ko"?null:e.data;default:return null}}var M2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!M2[t.type]:e==="textarea"}function _v(t,e,n,r){Y0(r),e=Ml(e,"onChange"),0<e.length&&(n=new Zh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _o=null,Oo=null;function F2(t){Av(t,0)}function Su(t){var e=Os(t);if($0(e))return t}function U2(t,e){if(t==="change")return e}var xv=!1;if(In){var Mc;if(In){var Fc="oninput"in document;if(!Fc){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),Fc=typeof Ym.oninput=="function"}Mc=Fc}else Mc=!1;xv=Mc&&(!document.documentMode||9<document.documentMode)}function Jm(){_o&&(_o.detachEvent("onpropertychange",wv),Oo=_o=null)}function wv(t){if(t.propertyName==="value"&&Su(Oo)){var e=[];_v(e,Oo,t,Gh(t)),ev(F2,e)}}function B2(t,e,n){t==="focusin"?(Jm(),_o=e,Oo=n,_o.attachEvent("onpropertychange",wv)):t==="focusout"&&Jm()}function z2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(Oo)}function $2(t,e){if(t==="click")return Su(e)}function q2(t,e){if(t==="input"||t==="change")return Su(e)}function W2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:W2;function Mo(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!pd.call(e,s)||!Kt(t[s],e[s]))return!1}return!0}function Xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zm(t,e){var n=Xm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xm(n)}}function Ev(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ev(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tv(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function H2(t){var e=Tv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ev(n.ownerDocument.documentElement,n)){if(r!==null&&nf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Zm(n,i);var o=Zm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var G2=In&&"documentMode"in document&&11>=document.documentMode,Vs=null,jd=null,xo=null,Dd=!1;function eg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dd||Vs==null||Vs!==Pl(r)||(r=Vs,"selectionStart"in r&&nf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xo&&Mo(xo,r)||(xo=r,r=Ml(jd,"onSelect"),0<r.length&&(e=new Zh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vs)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},Uc={},Iv={};In&&(Iv=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function bu(t){if(Uc[t])return Uc[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Iv)return Uc[t]=e[n];return t}var Sv=bu("animationend"),bv=bu("animationiteration"),Nv=bu("animationstart"),kv=bu("transitionend"),Cv=new Map,tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(t,e){Cv.set(t,e),fs(e,[t])}for(var Bc=0;Bc<tg.length;Bc++){var zc=tg[Bc],K2=zc.toLowerCase(),Q2=zc[0].toUpperCase()+zc.slice(1);Cr(K2,"on"+Q2)}Cr(Sv,"onAnimationEnd");Cr(bv,"onAnimationIteration");Cr(Nv,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(kv,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y2=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function ng(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,KE(r,e,void 0,t),t.currentTarget=null}function Av(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var u=r[o],c=u.instance,d=u.currentTarget;if(u=u.listener,c!==i&&s.isPropagationStopped())break e;ng(s,u,d),i=c}else for(o=0;o<r.length;o++){if(u=r[o],c=u.instance,d=u.currentTarget,u=u.listener,c!==i&&s.isPropagationStopped())break e;ng(s,u,d),i=c}}}if(jl)throw t=Cd,jl=!1,Cd=null,t}function me(t,e){var n=e[Fd];n===void 0&&(n=e[Fd]=new Set);var r=t+"__bubble";n.has(r)||(Pv(e,t,2,!1),n.add(r))}function $c(t,e,n){var r=0;e&&(r|=4),Pv(n,t,r,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[Ka]){t[Ka]=!0,M0.forEach(function(n){n!=="selectionchange"&&(Y2.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,$c("selectionchange",!1,e))}}function Pv(t,e,n,r){switch(pv(e)){case 1:var s=c2;break;case 4:s=d2;break;default:s=Jh}n=s.bind(null,e,n,t),s=void 0,!kd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function qc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;u!==null;){if(o=Gr(u),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}u=u.parentNode}}r=r.return}ev(function(){var d=i,p=Gh(n),m=[];e:{var g=Cv.get(t);if(g!==void 0){var S=Zh,k=t;switch(t){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":S=b2;break;case"focusin":k="focus",S=Oc;break;case"focusout":k="blur",S=Oc;break;case"beforeblur":case"afterblur":S=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=p2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=C2;break;case Sv:case bv:case Nv:S=y2;break;case kv:S=P2;break;case"scroll":S=h2;break;case"wheel":S=j2;break;case"copy":case"cut":case"paste":S=_2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Hm}var A=(e&4)!==0,j=!A&&t==="scroll",w=A?g!==null?g+"Capture":null:g;A=[];for(var _=d,I;_!==null;){I=_;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,w!==null&&(D=jo(_,w),D!=null&&A.push(Uo(_,D,I)))),j)break;_=_.return}0<A.length&&(g=new S(g,k,null,n,p),m.push({event:g,listeners:A}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==bd&&(k=n.relatedTarget||n.fromElement)&&(Gr(k)||k[Sn]))break e;if((S||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,S?(k=n.relatedTarget||n.toElement,S=d,k=k?Gr(k):null,k!==null&&(j=ps(k),k!==j||k.tag!==5&&k.tag!==6)&&(k=null)):(S=null,k=d),S!==k)){if(A=qm,D="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(A=Hm,D="onPointerLeave",w="onPointerEnter",_="pointer"),j=S==null?g:Os(S),I=k==null?g:Os(k),g=new A(D,_+"leave",S,n,p),g.target=j,g.relatedTarget=I,D=null,Gr(p)===d&&(A=new A(w,_+"enter",k,n,p),A.target=I,A.relatedTarget=j,D=A),j=D,S&&k)t:{for(A=S,w=k,_=0,I=A;I;I=Ss(I))_++;for(I=0,D=w;D;D=Ss(D))I++;for(;0<_-I;)A=Ss(A),_--;for(;0<I-_;)w=Ss(w),I--;for(;_--;){if(A===w||w!==null&&A===w.alternate)break t;A=Ss(A),w=Ss(w)}A=null}else A=null;S!==null&&rg(m,g,S,A,!1),k!==null&&j!==null&&rg(m,j,k,A,!0)}}e:{if(g=d?Os(d):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var F=U2;else if(Qm(g))if(xv)F=q2;else{F=z2;var B=B2}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=$2);if(F&&(F=F(t,d))){_v(m,F,n,p);break e}B&&B(t,g,d),t==="focusout"&&(B=g._wrapperState)&&B.controlled&&g.type==="number"&&wd(g,"number",g.value)}switch(B=d?Os(d):window,t){case"focusin":(Qm(B)||B.contentEditable==="true")&&(Vs=B,jd=d,xo=null);break;case"focusout":xo=jd=Vs=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,eg(m,n,p);break;case"selectionchange":if(G2)break;case"keydown":case"keyup":eg(m,n,p)}var x;if(tf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ds?yv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(gv&&n.locale!=="ko"&&(Ds||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ds&&(x=mv()):(er=p,Xh="value"in er?er.value:er.textContent,Ds=!0)),B=Ml(d,v),0<B.length&&(v=new Wm(v,t,null,n,p),m.push({event:v,listeners:B}),x?v.data=x:(x=vv(n),x!==null&&(v.data=x)))),(x=V2?L2(t,n):O2(t,n))&&(d=Ml(d,"onBeforeInput"),0<d.length&&(p=new Wm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=x))}Av(m,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ml(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=jo(t,n),i!=null&&r.unshift(Uo(t,i,s)),i=jo(t,e),i!=null&&r.push(Uo(t,i,s))),t=t.return}return r}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var u=n,c=u.alternate,d=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&d!==null&&(u=d,s?(c=jo(n,i),c!=null&&o.unshift(Uo(n,c,u))):s||(c=jo(n,i),c!=null&&o.push(Uo(n,c,u)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var J2=/\r\n?/g,X2=/\u0000|\uFFFD/g;function sg(t){return(typeof t=="string"?t:""+t).replace(J2,`
`).replace(X2,"")}function Qa(t,e,n){if(e=sg(e),sg(t)!==e&&n)throw Error(M(425))}function Fl(){}var Vd=null,Ld=null;function Od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,Z2=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,eT=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(t){return ig.resolve(null).then(t).catch(tT)}:Md;function tT(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Lo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Lo(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _i=Math.random().toString(36).slice(2),rn="__reactFiber$"+_i,Bo="__reactProps$"+_i,Sn="__reactContainer$"+_i,Fd="__reactEvents$"+_i,nT="__reactListeners$"+_i,rT="__reactHandles$"+_i;function Gr(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=og(t);t!==null;){if(n=t[rn])return n;t=og(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[rn]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function Nu(t){return t[Bo]||null}var Ud=[],Ms=-1;function Ar(t){return{current:t}}function ye(t){0>Ms||(t.current=Ud[Ms],Ud[Ms]=null,Ms--)}function he(t,e){Ms++,Ud[Ms]=t.current,t.current=e}var wr={},ot=Ar(wr),vt=Ar(!1),ts=wr;function si(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function _t(t){return t=t.childContextTypes,t!=null}function Ul(){ye(vt),ye(ot)}function ag(t,e,n){if(ot.current!==wr)throw Error(M(168));he(ot,e),he(vt,n)}function Rv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(M(108,BE(t)||"Unknown",s));return Te({},n,r)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,ts=ot.current,he(ot,t),he(vt,vt.current),!0}function lg(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=Rv(t,e,ts),r.__reactInternalMemoizedMergedChildContext=t,ye(vt),ye(ot),he(ot,t)):ye(vt),he(vt,n)}var gn=null,ku=!1,Hc=!1;function jv(t){gn===null?gn=[t]:gn.push(t)}function sT(t){ku=!0,jv(t)}function Pr(){if(!Hc&&gn!==null){Hc=!0;var t=0,e=ue;try{var n=gn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,ku=!1}catch(s){throw gn!==null&&(gn=gn.slice(t+1)),sv(Kh,Pr),s}finally{ue=e,Hc=!1}}return null}var Fs=[],Us=0,zl=null,$l=0,Ct=[],At=0,ns=null,yn=1,vn="";function qr(t,e){Fs[Us++]=$l,Fs[Us++]=zl,zl=t,$l=e}function Dv(t,e,n){Ct[At++]=yn,Ct[At++]=vn,Ct[At++]=ns,ns=t;var r=yn;t=vn;var s=32-Wt(r)-1;r&=~(1<<s),n+=1;var i=32-Wt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,yn=1<<32-Wt(e)+s|n<<s|r,vn=i+t}else yn=1<<i|n<<s|r,vn=t}function rf(t){t.return!==null&&(qr(t,1),Dv(t,1,0))}function sf(t){for(;t===zl;)zl=Fs[--Us],Fs[Us]=null,$l=Fs[--Us],Fs[Us]=null;for(;t===ns;)ns=Ct[--At],Ct[At]=null,vn=Ct[--At],Ct[At]=null,yn=Ct[--At],Ct[At]=null}var It=null,Tt=null,xe=!1,zt=null;function Vv(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ug(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,It=t,Tt=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,It=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ns!==null?{id:yn,overflow:vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,It=t,Tt=null,!0):!1;default:return!1}}function Bd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zd(t){if(xe){var e=Tt;if(e){var n=e;if(!ug(t,e)){if(Bd(t))throw Error(M(418));e=ar(n.nextSibling);var r=It;e&&ug(t,e)?Vv(r,n):(t.flags=t.flags&-4097|2,xe=!1,It=t)}}else{if(Bd(t))throw Error(M(418));t.flags=t.flags&-4097|2,xe=!1,It=t}}}function cg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Ya(t){if(t!==It)return!1;if(!xe)return cg(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Od(t.type,t.memoizedProps)),e&&(e=Tt)){if(Bd(t))throw Lv(),Error(M(418));for(;e;)Vv(t,e),e=ar(e.nextSibling)}if(cg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=It?ar(t.stateNode.nextSibling):null;return!0}function Lv(){for(var t=Tt;t;)t=ar(t.nextSibling)}function ii(){Tt=It=null,xe=!1}function of(t){zt===null?zt=[t]:zt.push(t)}var iT=Rn.ReactCurrentBatchConfig;function eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var u=s.refs;o===null?delete u[i]:u[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dg(t){var e=t._init;return e(t._payload)}function Ov(t){function e(w,_){if(t){var I=w.deletions;I===null?(w.deletions=[_],w.flags|=16):I.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function s(w,_){return w=dr(w,_),w.index=0,w.sibling=null,w}function i(w,_,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<_?(w.flags|=2,_):I):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function u(w,_,I,D){return _===null||_.tag!==6?(_=Zc(I,w.mode,D),_.return=w,_):(_=s(_,I),_.return=w,_)}function c(w,_,I,D){var F=I.type;return F===js?p(w,_,I.props.children,D,I.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Wn&&dg(F)===_.type)?(D=s(_,I.props),D.ref=eo(w,_,I),D.return=w,D):(D=xl(I.type,I.key,I.props,null,w.mode,D),D.ref=eo(w,_,I),D.return=w,D)}function d(w,_,I,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==I.containerInfo||_.stateNode.implementation!==I.implementation?(_=ed(I,w.mode,D),_.return=w,_):(_=s(_,I.children||[]),_.return=w,_)}function p(w,_,I,D,F){return _===null||_.tag!==7?(_=Xr(I,w.mode,D,F),_.return=w,_):(_=s(_,I),_.return=w,_)}function m(w,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Zc(""+_,w.mode,I),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ua:return I=xl(_.type,_.key,_.props,null,w.mode,I),I.ref=eo(w,null,_),I.return=w,I;case Rs:return _=ed(_,w.mode,I),_.return=w,_;case Wn:var D=_._init;return m(w,D(_._payload),I)}if(oo(_)||Qi(_))return _=Xr(_,w.mode,I,null),_.return=w,_;Ja(w,_)}return null}function g(w,_,I,D){var F=_!==null?_.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:u(w,_,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ua:return I.key===F?c(w,_,I,D):null;case Rs:return I.key===F?d(w,_,I,D):null;case Wn:return F=I._init,g(w,_,F(I._payload),D)}if(oo(I)||Qi(I))return F!==null?null:p(w,_,I,D,null);Ja(w,I)}return null}function S(w,_,I,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(I)||null,u(_,w,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ua:return w=w.get(D.key===null?I:D.key)||null,c(_,w,D,F);case Rs:return w=w.get(D.key===null?I:D.key)||null,d(_,w,D,F);case Wn:var B=D._init;return S(w,_,I,B(D._payload),F)}if(oo(D)||Qi(D))return w=w.get(I)||null,p(_,w,D,F,null);Ja(_,D)}return null}function k(w,_,I,D){for(var F=null,B=null,x=_,v=_=0,E=null;x!==null&&v<I.length;v++){x.index>v?(E=x,x=null):E=x.sibling;var b=g(w,x,I[v],D);if(b===null){x===null&&(x=E);break}t&&x&&b.alternate===null&&e(w,x),_=i(b,_,v),B===null?F=b:B.sibling=b,B=b,x=E}if(v===I.length)return n(w,x),xe&&qr(w,v),F;if(x===null){for(;v<I.length;v++)x=m(w,I[v],D),x!==null&&(_=i(x,_,v),B===null?F=x:B.sibling=x,B=x);return xe&&qr(w,v),F}for(x=r(w,x);v<I.length;v++)E=S(x,w,v,I[v],D),E!==null&&(t&&E.alternate!==null&&x.delete(E.key===null?v:E.key),_=i(E,_,v),B===null?F=E:B.sibling=E,B=E);return t&&x.forEach(function(N){return e(w,N)}),xe&&qr(w,v),F}function A(w,_,I,D){var F=Qi(I);if(typeof F!="function")throw Error(M(150));if(I=F.call(I),I==null)throw Error(M(151));for(var B=F=null,x=_,v=_=0,E=null,b=I.next();x!==null&&!b.done;v++,b=I.next()){x.index>v?(E=x,x=null):E=x.sibling;var N=g(w,x,b.value,D);if(N===null){x===null&&(x=E);break}t&&x&&N.alternate===null&&e(w,x),_=i(N,_,v),B===null?F=N:B.sibling=N,B=N,x=E}if(b.done)return n(w,x),xe&&qr(w,v),F;if(x===null){for(;!b.done;v++,b=I.next())b=m(w,b.value,D),b!==null&&(_=i(b,_,v),B===null?F=b:B.sibling=b,B=b);return xe&&qr(w,v),F}for(x=r(w,x);!b.done;v++,b=I.next())b=S(x,w,v,b.value,D),b!==null&&(t&&b.alternate!==null&&x.delete(b.key===null?v:b.key),_=i(b,_,v),B===null?F=b:B.sibling=b,B=b);return t&&x.forEach(function(C){return e(w,C)}),xe&&qr(w,v),F}function j(w,_,I,D){if(typeof I=="object"&&I!==null&&I.type===js&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ua:e:{for(var F=I.key,B=_;B!==null;){if(B.key===F){if(F=I.type,F===js){if(B.tag===7){n(w,B.sibling),_=s(B,I.props.children),_.return=w,w=_;break e}}else if(B.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Wn&&dg(F)===B.type){n(w,B.sibling),_=s(B,I.props),_.ref=eo(w,B,I),_.return=w,w=_;break e}n(w,B);break}else e(w,B);B=B.sibling}I.type===js?(_=Xr(I.props.children,w.mode,D,I.key),_.return=w,w=_):(D=xl(I.type,I.key,I.props,null,w.mode,D),D.ref=eo(w,_,I),D.return=w,w=D)}return o(w);case Rs:e:{for(B=I.key;_!==null;){if(_.key===B)if(_.tag===4&&_.stateNode.containerInfo===I.containerInfo&&_.stateNode.implementation===I.implementation){n(w,_.sibling),_=s(_,I.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=ed(I,w.mode,D),_.return=w,w=_}return o(w);case Wn:return B=I._init,j(w,_,B(I._payload),D)}if(oo(I))return k(w,_,I,D);if(Qi(I))return A(w,_,I,D);Ja(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,_!==null&&_.tag===6?(n(w,_.sibling),_=s(_,I),_.return=w,w=_):(n(w,_),_=Zc(I,w.mode,D),_.return=w,w=_),o(w)):n(w,_)}return j}var oi=Ov(!0),Mv=Ov(!1),ql=Ar(null),Wl=null,Bs=null,af=null;function lf(){af=Bs=Wl=null}function uf(t){var e=ql.current;ye(ql),t._currentValue=e}function $d(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Wl=t,af=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(af!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(Wl===null)throw Error(M(308));Bs=t,Wl.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Kr=null;function cf(t){Kr===null?Kr=[t]:Kr.push(t)}function Fv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,cf(e)):(n.next=s.next,s.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,bn(t,n)}return s=r.interleaved,s===null?(e.next=e,cf(r)):(e.next=s.next,s.next=e),r.interleaved=e,bn(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qh(t,n)}}function hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,r){var s=t.updateQueue;Hn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var c=u,d=c.next;c.next=null,o===null?i=d:o.next=d,o=c;var p=t.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==o&&(u===null?p.firstBaseUpdate=d:u.next=d,p.lastBaseUpdate=c))}if(i!==null){var m=s.baseState;o=0,p=d=c=null,u=i;do{var g=u.lane,S=u.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:S,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=t,A=u;switch(g=e,S=n,A.tag){case 1:if(k=A.payload,typeof k=="function"){m=k.call(S,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=A.payload,g=typeof k=="function"?k.call(S,m,g):k,g==null)break e;m=Te({},m,g);break e;case 2:Hn=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[u]:g.push(u))}else S={eventTime:S,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(d=p=S,c=m):p=p.next=S,o|=g;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;g=u,u=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(c=m),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=m}}function fg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(M(191,s));s.call(r)}}}var fa={},on=Ar(fa),zo=Ar(fa),$o=Ar(fa);function Qr(t){if(t===fa)throw Error(M(174));return t}function hf(t,e){switch(he($o,e),he(zo,t),he(on,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Td(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Td(e,t)}ye(on),he(on,e)}function ai(){ye(on),ye(zo),ye($o)}function Bv(t){Qr($o.current);var e=Qr(on.current),n=Td(e,t.type);e!==n&&(he(zo,t),he(on,n))}function ff(t){zo.current===t&&(ye(on),ye(zo))}var we=Ar(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gc=[];function pf(){for(var t=0;t<Gc.length;t++)Gc[t]._workInProgressVersionPrimary=null;Gc.length=0}var ml=Rn.ReactCurrentDispatcher,Kc=Rn.ReactCurrentBatchConfig,rs=0,Ee=null,Me=null,qe=null,Kl=!1,wo=!1,qo=0,oT=0;function et(){throw Error(M(321))}function mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function gf(t,e,n,r,s,i){if(rs=i,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?cT:dT,t=n(r,s),wo){i=0;do{if(wo=!1,qo=0,25<=i)throw Error(M(301));i+=1,qe=Me=null,e.updateQueue=null,ml.current=hT,t=n(r,s)}while(wo)}if(ml.current=Ql,e=Me!==null&&Me.next!==null,rs=0,qe=Me=Ee=null,Kl=!1,e)throw Error(M(300));return t}function yf(){var t=qo!==0;return qo=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ee.memoizedState=qe=t:qe=qe.next=t,qe}function Ot(){if(Me===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=qe===null?Ee.memoizedState:qe.next;if(e!==null)qe=e,Me=t;else{if(t===null)throw Error(M(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},qe===null?Ee.memoizedState=qe=t:qe=qe.next=t}return qe}function Wo(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Me,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var u=o=null,c=null,d=i;do{var p=d.lane;if((rs&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(u=c=m,o=r):c=c.next=m,Ee.lanes|=p,ss|=p}d=d.next}while(d!==null&&d!==i);c===null?o=r:c.next=u,Kt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ee.lanes|=i,ss|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Kt(i,e.memoizedState)||(yt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function zv(){}function $v(t,e){var n=Ee,r=Ot(),s=e(),i=!Kt(r.memoizedState,s);if(i&&(r.memoizedState=s,yt=!0),r=r.queue,vf(Hv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Ho(9,Wv.bind(null,n,r,s,e),void 0,null),We===null)throw Error(M(349));rs&30||qv(n,e,s)}return s}function qv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wv(t,e,n,r){e.value=n,e.getSnapshot=r,Gv(e)&&Kv(t)}function Hv(t,e,n){return n(function(){Gv(e)&&Kv(t)})}function Gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function Kv(t){var e=bn(t,1);e!==null&&Ht(e,t,1,-1)}function pg(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},e.queue=t,t=t.dispatch=uT.bind(null,Ee,t),[e.memoizedState,t]}function Ho(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qv(){return Ot().memoizedState}function gl(t,e,n,r){var s=tn();Ee.flags|=t,s.memoizedState=Ho(1|e,n,void 0,r===void 0?null:r)}function Cu(t,e,n,r){var s=Ot();r=r===void 0?null:r;var i=void 0;if(Me!==null){var o=Me.memoizedState;if(i=o.destroy,r!==null&&mf(r,o.deps)){s.memoizedState=Ho(e,n,i,r);return}}Ee.flags|=t,s.memoizedState=Ho(1|e,n,i,r)}function mg(t,e){return gl(8390656,8,t,e)}function vf(t,e){return Cu(2048,8,t,e)}function Yv(t,e){return Cu(4,2,t,e)}function Jv(t,e){return Cu(4,4,t,e)}function Xv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zv(t,e,n){return n=n!=null?n.concat([t]):null,Cu(4,4,Xv.bind(null,e,t),n)}function _f(){}function e_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function t_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function n_(t,e,n){return rs&21?(Kt(n,e)||(n=av(),Ee.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function aT(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{ue=n,Kc.transition=r}}function r_(){return Ot().memoizedState}function lT(t,e,n){var r=cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},s_(t))i_(e,n);else if(n=Fv(t,e,n,r),n!==null){var s=ht();Ht(n,t,r,s),o_(n,e,r)}}function uT(t,e,n){var r=cr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(s_(t))i_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,u=i(o,n);if(s.hasEagerState=!0,s.eagerState=u,Kt(u,o)){var c=e.interleaved;c===null?(s.next=s,cf(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=Fv(t,e,s,r),n!==null&&(s=ht(),Ht(n,t,r,s),o_(n,e,r))}}function s_(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function i_(t,e){wo=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qh(t,n)}}var Ql={readContext:Lt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},cT={readContext:Lt,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:mg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,Xv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lT.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:pg,useDebugValue:_f,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=pg(!1),e=t[0];return t=aT.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,s=tn();if(xe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),We===null)throw Error(M(349));rs&30||qv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,mg(Hv.bind(null,r,i,t),[t]),r.flags|=2048,Ho(9,Wv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=tn(),e=We.identifierPrefix;if(xe){var n=vn,r=yn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dT={readContext:Lt,useCallback:e_,useContext:Lt,useEffect:vf,useImperativeHandle:Zv,useInsertionEffect:Yv,useLayoutEffect:Jv,useMemo:t_,useReducer:Qc,useRef:Qv,useState:function(){return Qc(Wo)},useDebugValue:_f,useDeferredValue:function(t){var e=Ot();return n_(e,Me.memoizedState,t)},useTransition:function(){var t=Qc(Wo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:$v,useId:r_,unstable_isNewReconciler:!1},hT={readContext:Lt,useCallback:e_,useContext:Lt,useEffect:vf,useImperativeHandle:Zv,useInsertionEffect:Yv,useLayoutEffect:Jv,useMemo:t_,useReducer:Yc,useRef:Qv,useState:function(){return Yc(Wo)},useDebugValue:_f,useDeferredValue:function(t){var e=Ot();return Me===null?e.memoizedState=t:n_(e,Me.memoizedState,t)},useTransition:function(){var t=Yc(Wo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:zv,useSyncExternalStore:$v,useId:r_,unstable_isNewReconciler:!1};function Ut(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Au={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),s=cr(t),i=wn(r,s);i.payload=e,n!=null&&(i.callback=n),e=lr(t,i,s),e!==null&&(Ht(e,t,s,r),pl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),s=cr(t),i=wn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=lr(t,i,s),e!==null&&(Ht(e,t,s,r),pl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=cr(t),s=wn(n,r);s.tag=2,e!=null&&(s.callback=e),e=lr(t,s,r),e!==null&&(Ht(e,t,r,n),pl(e,t,r))}};function gg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Mo(n,r)||!Mo(s,i):!0}function a_(t,e,n){var r=!1,s=wr,i=e.contextType;return typeof i=="object"&&i!==null?i=Lt(i):(s=_t(e)?ts:ot.current,r=e.contextTypes,i=(r=r!=null)?si(t,s):wr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Au,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function yg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function Wd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},df(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Lt(i):(i=_t(e)?ts:ot.current,s.context=si(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(qd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Au.enqueueReplaceState(s,s.state,null),Hl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function li(t,e){try{var n="",r=e;do n+=UE(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fT=typeof WeakMap=="function"?WeakMap:Map;function l_(t,e,n){n=wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jl||(Jl=!0,nh=r),Hd(t,e)},n}function u_(t,e,n){n=wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Hd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hd(t,e),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=NT.bind(null,t,e,n),e.then(t,t))}function _g(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wn(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var pT=Rn.ReactCurrentOwner,yt=!1;function dt(t,e,n,r){e.child=t===null?Mv(e,null,n,r):oi(e,t.child,n,r)}function wg(t,e,n,r,s){n=n.render;var i=e.ref;return Qs(e,s),r=gf(t,e,n,r,i,s),n=yf(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Nn(t,e,s)):(xe&&n&&rf(e),e.flags|=1,dt(t,e,r,s),e.child)}function Eg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Nf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,c_(t,e,i,r,s)):(t=xl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Mo,n(o,r)&&t.ref===e.ref)return Nn(t,e,s)}return e.flags|=1,t=dr(i,r),t.ref=e.ref,t.return=e,e.child=t}function c_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Mo(i,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Nn(t,e,s)}return Gd(t,e,n,r,s)}function d_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he($s,Et),Et|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he($s,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,he($s,Et),Et|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,he($s,Et),Et|=r;return dt(t,e,s,n),e.child}function h_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gd(t,e,n,r,s){var i=_t(n)?ts:ot.current;return i=si(e,i),Qs(e,s),n=gf(t,e,n,r,i,s),r=yf(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Nn(t,e,s)):(xe&&r&&rf(e),e.flags|=1,dt(t,e,n,s),e.child)}function Tg(t,e,n,r,s){if(_t(n)){var i=!0;Bl(e)}else i=!1;if(Qs(e,s),e.stateNode===null)yl(t,e),a_(e,n,r),Wd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,u=e.memoizedProps;o.props=u;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Lt(d):(d=_t(n)?ts:ot.current,d=si(e,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||c!==d)&&yg(e,o,r,d),Hn=!1;var g=e.memoizedState;o.state=g,Hl(e,r,o,s),c=e.memoizedState,u!==r||g!==c||vt.current||Hn?(typeof p=="function"&&(qd(e,n,p,r),c=e.memoizedState),(u=Hn||gg(e,n,u,r,g,c,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=d,r=u):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Uv(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:Ut(e.type,u),o.props=d,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Lt(c):(c=_t(n)?ts:ot.current,c=si(e,c));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||g!==c)&&yg(e,o,r,c),Hn=!1,g=e.memoizedState,o.state=g,Hl(e,r,o,s);var k=e.memoizedState;u!==m||g!==k||vt.current||Hn?(typeof S=="function"&&(qd(e,n,S,r),k=e.memoizedState),(d=Hn||gg(e,n,d,r,g,k,c)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Kd(t,e,n,r,i,s)}function Kd(t,e,n,r,s,i){h_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&lg(e,n,!1),Nn(t,e,i);r=e.stateNode,pT.current=e;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oi(e,t.child,null,i),e.child=oi(e,null,u,i)):dt(t,e,u,i),e.memoizedState=r.state,s&&lg(e,n,!0),e.child}function f_(t){var e=t.stateNode;e.pendingContext?ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ag(t,e.context,!1),hf(t,e.containerInfo)}function Ig(t,e,n,r,s){return ii(),of(s),e.flags|=256,dt(t,e,n,r),e.child}var Qd={dehydrated:null,treeContext:null,retryLane:0};function Yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function p_(t,e,n){var r=e.pendingProps,s=we.current,i=!1,o=(e.flags&128)!==0,u;if((u=o)||(u=t!==null&&t.memoizedState===null?!1:(s&2)!==0),u?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),he(we,s&1),t===null)return zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ju(o,r,0,null),t=Xr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Yd(n),e.memoizedState=Qd,t):xf(e,o));if(s=t.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return mT(t,e,o,r,u,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,u=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=dr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),u!==null?i=dr(u,i):(i=Xr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Qd,r}return i=t.child,t=i.sibling,r=dr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xf(t,e){return e=ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,r){return r!==null&&of(r),oi(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mT(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Jc(Error(M(422))),Xa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ju({mode:"visible",children:r.children},s,0,null),i=Xr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&oi(e,t.child,null,o),e.child.memoizedState=Yd(o),e.memoizedState=Qd,i);if(!(e.mode&1))return Xa(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(M(419)),r=Jc(i,r,void 0),Xa(t,e,o,r)}if(u=(o&t.childLanes)!==0,yt||u){if(r=We,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,bn(t,s),Ht(r,t,s,-1))}return bf(),r=Jc(Error(M(421))),Xa(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=kT.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Tt=ar(s.nextSibling),It=e,xe=!0,zt=null,t!==null&&(Ct[At++]=yn,Ct[At++]=vn,Ct[At++]=ns,yn=t.id,vn=t.overflow,ns=e),e=xf(e,r.children),e.flags|=4096,e)}function Sg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$d(t.return,e,n)}function Xc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function m_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(dt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sg(t,n,e);else if(t.tag===19)Sg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(we,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Xc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Gl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Xc(e,!0,n,null,i);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gT(t,e,n){switch(e.tag){case 3:f_(e),ii();break;case 5:Bv(e);break;case 1:_t(e.type)&&Bl(e);break;case 4:hf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;he(ql,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?p_(t,e,n):(he(we,we.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return m_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,d_(t,e,n)}return Nn(t,e,n)}var g_,Jd,y_,v_;g_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jd=function(){};y_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Qr(on.current);var i=null;switch(n){case"input":s=_d(t,s),r=_d(t,r),i=[];break;case"select":s=Te({},s,{value:void 0}),r=Te({},r,{value:void 0}),i=[];break;case"textarea":s=Ed(t,s),r=Ed(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fl)}Id(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var u=s[d];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Po.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(u=s?.[d],r.hasOwnProperty(d)&&c!==u&&(c!=null||u!=null))if(d==="style")if(u){for(o in u)!u.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&u[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Po.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&me("scroll",t),i||u===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};v_=function(t,e,n,r){n!==r&&(e.flags|=4)};function to(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yT(t,e,n){var r=e.pendingProps;switch(sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return _t(e.type)&&Ul(),tt(e),null;case 3:return r=e.stateNode,ai(),ye(vt),ye(ot),pf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zt!==null&&(ih(zt),zt=null))),Jd(t,e),tt(e),null;case 5:ff(e);var s=Qr($o.current);if(n=e.type,t!==null&&e.stateNode!=null)y_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return tt(e),null}if(t=Qr(on.current),Ya(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[rn]=e,r[Bo]=i,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(s=0;s<lo.length;s++)me(lo[s],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Dm(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":Lm(r,i),me("invalid",r)}Id(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Qa(r.textContent,u,t),s=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Qa(r.textContent,u,t),s=["children",""+u]):Po.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Ba(r),Vm(r,i,!0);break;case"textarea":Ba(r),Om(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Fl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=H0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[Bo]=r,g_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sd(n,r),n){case"dialog":me("cancel",t),me("close",t),s=r;break;case"iframe":case"object":case"embed":me("load",t),s=r;break;case"video":case"audio":for(s=0;s<lo.length;s++)me(lo[s],t);s=r;break;case"source":me("error",t),s=r;break;case"img":case"image":case"link":me("error",t),me("load",t),s=r;break;case"details":me("toggle",t),s=r;break;case"input":Dm(t,r),s=_d(t,r),me("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Te({},r,{value:void 0}),me("invalid",t);break;case"textarea":Lm(t,r),s=Ed(t,r),me("invalid",t);break;default:s=r}Id(n,s),u=s;for(i in u)if(u.hasOwnProperty(i)){var c=u[i];i==="style"?Q0(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&G0(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ro(t,c):typeof c=="number"&&Ro(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Po.hasOwnProperty(i)?c!=null&&i==="onScroll"&&me("scroll",t):c!=null&&$h(t,i,c,o))}switch(n){case"input":Ba(t),Vm(t,r,!1);break;case"textarea":Ba(t),Om(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ws(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Fl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)v_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Qr($o.current),Qr(on.current),Ya(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(i=r.nodeValue!==n)&&(t=It,t!==null))switch(t.tag){case 3:Qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return tt(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Tt!==null&&e.mode&1&&!(e.flags&128))Lv(),ii(),e.flags|=98560,i=!1;else if(i=Ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(M(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[rn]=e}else ii(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),i=!1}else zt!==null&&(ih(zt),zt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Fe===0&&(Fe=3):bf())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return ai(),Jd(t,e),t===null&&Fo(e.stateNode.containerInfo),tt(e),null;case 10:return uf(e.type._context),tt(e),null;case 17:return _t(e.type)&&Ul(),tt(e),null;case 19:if(ye(we),i=e.memoizedState,i===null)return tt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)to(i,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,to(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(we,we.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ce()>ui&&(e.flags|=128,r=!0,to(i,!1),e.lanes=4194304)}else{if(!r)if(t=Gl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),to(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!xe)return tt(e),null}else 2*Ce()-i.renderingStartTime>ui&&n!==1073741824&&(e.flags|=128,r=!0,to(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ce(),e.sibling=null,n=we.current,he(we,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Sf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function vT(t,e){switch(sf(e),e.tag){case 1:return _t(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ai(),ye(vt),ye(ot),pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ff(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return ai(),null;case 10:return uf(e.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var Za=!1,st=!1,_T=typeof WeakSet=="function"?WeakSet:Set,W=null;function zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function Xd(t,e,n){try{n()}catch(r){be(t,e,r)}}var bg=!1;function xT(t,e){if(Vd=Ll,t=Tv(),nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,c=-1,d=0,p=0,m=t,g=null;t:for(;;){for(var S;m!==n||s!==0&&m.nodeType!==3||(u=o+s),m!==i||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===t)break t;if(g===n&&++d===s&&(u=o),g===i&&++p===r&&(c=o),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:t,selectionRange:n},Ll=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var A=k.memoizedProps,j=k.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?A:Ut(e.type,A),j);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(D){be(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return k=bg,bg=!1,k}function Eo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Xd(e,n,i)}s=s.next}while(s!==r)}}function Pu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function __(t){var e=t.alternate;e!==null&&(t.alternate=null,__(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[Bo],delete e[Fd],delete e[nT],delete e[rT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function x_(t){return t.tag===5||t.tag===3||t.tag===4}function Ng(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||x_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fl));else if(r!==4&&(t=t.child,t!==null))for(eh(t,e,n),t=t.sibling;t!==null;)eh(t,e,n),t=t.sibling}function th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(th(t,e,n),t=t.sibling;t!==null;)th(t,e,n),t=t.sibling}var Ge=null,Bt=!1;function $n(t,e,n){for(n=n.child;n!==null;)w_(t,e,n),n=n.sibling}function w_(t,e,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Tu,n)}catch{}switch(n.tag){case 5:st||zs(n,e);case 6:var r=Ge,s=Bt;Ge=null,$n(t,e,n),Ge=r,Bt=s,Ge!==null&&(Bt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Bt?(t=Ge,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),Lo(t)):Wc(Ge,n.stateNode));break;case 4:r=Ge,s=Bt,Ge=n.stateNode.containerInfo,Bt=!0,$n(t,e,n),Ge=r,Bt=s;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Xd(n,e,o),s=s.next}while(s!==r)}$n(t,e,n);break;case 1:if(!st&&(zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){be(n,e,u)}$n(t,e,n);break;case 21:$n(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,$n(t,e,n),st=r):$n(t,e,n);break;default:$n(t,e,n)}}function kg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _T),e.forEach(function(r){var s=CT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,u=o;e:for(;u!==null;){switch(u.tag){case 5:Ge=u.stateNode,Bt=!1;break e;case 3:Ge=u.stateNode.containerInfo,Bt=!0;break e;case 4:Ge=u.stateNode.containerInfo,Bt=!0;break e}u=u.return}if(Ge===null)throw Error(M(160));w_(i,o,s),Ge=null,Bt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){be(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)E_(e,t),e=e.sibling}function E_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Zt(t),r&4){try{Eo(3,t,t.return),Pu(3,t)}catch(A){be(t,t.return,A)}try{Eo(5,t,t.return)}catch(A){be(t,t.return,A)}}break;case 1:Ft(e,t),Zt(t),r&512&&n!==null&&zs(n,n.return);break;case 5:if(Ft(e,t),Zt(t),r&512&&n!==null&&zs(n,n.return),t.flags&32){var s=t.stateNode;try{Ro(s,"")}catch(A){be(t,t.return,A)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,u=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&q0(s,i),Sd(u,o);var d=Sd(u,i);for(o=0;o<c.length;o+=2){var p=c[o],m=c[o+1];p==="style"?Q0(s,m):p==="dangerouslySetInnerHTML"?G0(s,m):p==="children"?Ro(s,m):$h(s,p,m,d)}switch(u){case"input":xd(s,i);break;case"textarea":W0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Ws(s,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ws(s,!!i.multiple,i.defaultValue,!0):Ws(s,!!i.multiple,i.multiple?[]:"",!1))}s[Bo]=i}catch(A){be(t,t.return,A)}}break;case 6:if(Ft(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(M(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(A){be(t,t.return,A)}}break;case 3:if(Ft(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(A){be(t,t.return,A)}break;case 4:Ft(e,t),Zt(t);break;case 13:Ft(e,t),Zt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Tf=Ce())),r&4&&kg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(st=(d=st)||p,Ft(e,t),st=d):Ft(e,t),Zt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(W=t,p=t.child;p!==null;){for(m=W=p;W!==null;){switch(g=W,S=g.child,g.tag){case 0:case 11:case 14:case 15:Eo(4,g,g.return);break;case 1:zs(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(A){be(r,n,A)}}break;case 5:zs(g,g.return);break;case 22:if(g.memoizedState!==null){Ag(m);continue}}S!==null?(S.return=g,W=S):Ag(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=K0("display",o))}catch(A){be(t,t.return,A)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(A){be(t,t.return,A)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ft(e,t),Zt(t),r&4&&kg(t);break;case 21:break;default:Ft(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(x_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ro(s,""),r.flags&=-33);var i=Ng(t);th(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Ng(t);eh(t,u,o);break;default:throw Error(M(161))}}catch(c){be(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wT(t,e,n){W=t,T_(t)}function T_(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Za;if(!o){var u=s.alternate,c=u!==null&&u.memoizedState!==null||st;u=Za;var d=st;if(Za=o,(st=c)&&!d)for(W=s;W!==null;)o=W,c=o.child,o.tag===22&&o.memoizedState!==null?Pg(s):c!==null?(c.return=o,W=c):Pg(s);for(;i!==null;)W=i,T_(i),i=i.sibling;W=s,Za=u,st=d}Cg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Cg(t)}}function Cg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||Pu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&fg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fg(e,o,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Lo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}st||e.flags&512&&Zd(e)}catch(g){be(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Ag(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Pg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pu(4,e)}catch(c){be(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){be(e,s,c)}}var i=e.return;try{Zd(e)}catch(c){be(e,i,c)}break;case 5:var o=e.return;try{Zd(e)}catch(c){be(e,o,c)}}}catch(c){be(e,e.return,c)}if(e===t){W=null;break}var u=e.sibling;if(u!==null){u.return=e.return,W=u;break}W=e.return}}var ET=Math.ceil,Yl=Rn.ReactCurrentDispatcher,wf=Rn.ReactCurrentOwner,Vt=Rn.ReactCurrentBatchConfig,oe=0,We=null,De=null,Ye=0,Et=0,$s=Ar(0),Fe=0,Go=null,ss=0,Ru=0,Ef=0,To=null,gt=null,Tf=0,ui=1/0,mn=null,Jl=!1,nh=null,ur=null,el=!1,tr=null,Xl=0,Io=0,rh=null,vl=-1,_l=0;function ht(){return oe&6?Ce():vl!==-1?vl:vl=Ce()}function cr(t){return t.mode&1?oe&2&&Ye!==0?Ye&-Ye:iT.transition!==null?(_l===0&&(_l=av()),_l):(t=ue,t!==0||(t=window.event,t=t===void 0?16:pv(t.type)),t):1}function Ht(t,e,n,r){if(50<Io)throw Io=0,rh=null,Error(M(185));ca(t,n,r),(!(oe&2)||t!==We)&&(t===We&&(!(oe&2)&&(Ru|=n),Fe===4&&Qn(t,Ye)),xt(t,r),n===1&&oe===0&&!(e.mode&1)&&(ui=Ce()+500,ku&&Pr()))}function xt(t,e){var n=t.callbackNode;i2(t,e);var r=Vl(t,t===We?Ye:0);if(r===0)n!==null&&Um(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Um(n),e===1)t.tag===0?sT(Rg.bind(null,t)):jv(Rg.bind(null,t)),eT(function(){!(oe&6)&&Pr()}),n=null;else{switch(lv(r)){case 1:n=Kh;break;case 4:n=iv;break;case 16:n=Dl;break;case 536870912:n=ov;break;default:n=Dl}n=P_(n,I_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function I_(t,e){if(vl=-1,_l=0,oe&6)throw Error(M(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var r=Vl(t,t===We?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zl(t,r);else{e=r;var s=oe;oe|=2;var i=b_();(We!==t||Ye!==e)&&(mn=null,ui=Ce()+500,Jr(t,e));do try{ST();break}catch(u){S_(t,u)}while(!0);lf(),Yl.current=i,oe=s,De!==null?e=0:(We=null,Ye=0,e=Fe)}if(e!==0){if(e===2&&(s=Ad(t),s!==0&&(r=s,e=sh(t,s))),e===1)throw n=Go,Jr(t,0),Qn(t,r),xt(t,Ce()),n;if(e===6)Qn(t,r);else{if(s=t.current.alternate,!(r&30)&&!TT(s)&&(e=Zl(t,r),e===2&&(i=Ad(t),i!==0&&(r=i,e=sh(t,i))),e===1))throw n=Go,Jr(t,0),Qn(t,r),xt(t,Ce()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Wr(t,gt,mn);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=Tf+500-Ce(),10<e)){if(Vl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Md(Wr.bind(null,t,gt,mn),e);break}Wr(t,gt,mn);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Wt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ET(r/1960))-r,10<r){t.timeoutHandle=Md(Wr.bind(null,t,gt,mn),r);break}Wr(t,gt,mn);break;case 5:Wr(t,gt,mn);break;default:throw Error(M(329))}}}return xt(t,Ce()),t.callbackNode===n?I_.bind(null,t):null}function sh(t,e){var n=To;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=gt,gt=n,e!==null&&ih(e)),t}function ih(t){gt===null?gt=t:gt.push.apply(gt,t)}function TT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Kt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~Ef,e&=~Ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function Rg(t){if(oe&6)throw Error(M(327));Ys();var e=Vl(t,0);if(!(e&1))return xt(t,Ce()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var r=Ad(t);r!==0&&(e=r,n=sh(t,r))}if(n===1)throw n=Go,Jr(t,0),Qn(t,e),xt(t,Ce()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,gt,mn),xt(t,Ce()),null}function If(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ui=Ce()+500,ku&&Pr())}}function is(t){tr!==null&&tr.tag===0&&!(oe&6)&&Ys();var e=oe;oe|=1;var n=Vt.transition,r=ue;try{if(Vt.transition=null,ue=1,t)return t()}finally{ue=r,Vt.transition=n,oe=e,!(oe&6)&&Pr()}}function Sf(){Et=$s.current,ye($s)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z2(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(sf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ul();break;case 3:ai(),ye(vt),ye(ot),pf();break;case 5:ff(r);break;case 4:ai();break;case 13:ye(we);break;case 19:ye(we);break;case 10:uf(r.type._context);break;case 22:case 23:Sf()}n=n.return}if(We=t,De=t=dr(t.current,null),Ye=Et=e,Fe=0,Go=null,Ef=Ru=ss=0,gt=To=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Kr=null}return t}function S_(t,e){do{var n=De;try{if(lf(),ml.current=Ql,Kl){for(var r=Ee.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Kl=!1}if(rs=0,qe=Me=Ee=null,wo=!1,qo=0,wf.current=null,n===null||n.return===null){Fe=1,Go=e,De=null;break}e:{var i=t,o=n.return,u=n,c=e;if(e=Ye,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=u,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=_g(o);if(S!==null){S.flags&=-257,xg(S,o,u,i,e),S.mode&1&&vg(i,d,e),e=S,c=d;var k=e.updateQueue;if(k===null){var A=new Set;A.add(c),e.updateQueue=A}else k.add(c);break e}else{if(!(e&1)){vg(i,d,e),bf();break e}c=Error(M(426))}}else if(xe&&u.mode&1){var j=_g(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),xg(j,o,u,i,e),of(li(c,u));break e}}i=c=li(c,u),Fe!==4&&(Fe=2),To===null?To=[i]:To.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var w=l_(i,c,e);hg(i,w);break e;case 1:u=c;var _=i.type,I=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(ur===null||!ur.has(I)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=u_(i,u,e);hg(i,D);break e}}i=i.return}while(i!==null)}k_(n)}catch(F){e=F,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function b_(){var t=Yl.current;return Yl.current=Ql,t===null?Ql:t}function bf(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),We===null||!(ss&268435455)&&!(Ru&268435455)||Qn(We,Ye)}function Zl(t,e){var n=oe;oe|=2;var r=b_();(We!==t||Ye!==e)&&(mn=null,Jr(t,e));do try{IT();break}catch(s){S_(t,s)}while(!0);if(lf(),oe=n,Yl.current=r,De!==null)throw Error(M(261));return We=null,Ye=0,Fe}function IT(){for(;De!==null;)N_(De)}function ST(){for(;De!==null&&!YE();)N_(De)}function N_(t){var e=A_(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?k_(t):De=e,wf.current=null}function k_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vT(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,De=null;return}}else if(n=yT(n,e,Et),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Fe===0&&(Fe=5)}function Wr(t,e,n){var r=ue,s=Vt.transition;try{Vt.transition=null,ue=1,bT(t,e,n,r)}finally{Vt.transition=s,ue=r}return null}function bT(t,e,n,r){do Ys();while(tr!==null);if(oe&6)throw Error(M(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(o2(t,i),t===We&&(De=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,P_(Dl,function(){return Ys(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Vt.transition,Vt.transition=null;var o=ue;ue=1;var u=oe;oe|=4,wf.current=null,xT(t,n),E_(n,t),H2(Ld),Ll=!!Vd,Ld=Vd=null,t.current=n,wT(n),JE(),oe=u,ue=o,Vt.transition=i}else t.current=n;if(el&&(el=!1,tr=t,Xl=s),i=t.pendingLanes,i===0&&(ur=null),e2(n.stateNode),xt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Jl)throw Jl=!1,t=nh,nh=null,t;return Xl&1&&t.tag!==0&&Ys(),i=t.pendingLanes,i&1?t===rh?Io++:(Io=0,rh=t):Io=0,Pr(),null}function Ys(){if(tr!==null){var t=lv(Xl),e=Vt.transition,n=ue;try{if(Vt.transition=null,ue=16>t?16:t,tr===null)var r=!1;else{if(t=tr,tr=null,Xl=0,oe&6)throw Error(M(331));var s=oe;for(oe|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var u=i.deletions;if(u!==null){for(var c=0;c<u.length;c++){var d=u[c];for(W=d;W!==null;){var p=W;switch(p.tag){case 0:case 11:case 15:Eo(8,p,i)}var m=p.child;if(m!==null)m.return=p,W=m;else for(;W!==null;){p=W;var g=p.sibling,S=p.return;if(__(p),p===d){W=null;break}if(g!==null){g.return=S,W=g;break}W=S}}}var k=i.alternate;if(k!==null){var A=k.child;if(A!==null){k.child=null;do{var j=A.sibling;A.sibling=null,A=j}while(A!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Eo(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,W=w;break e}W=i.return}}var _=t.current;for(W=_;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=_;W!==null;){if(u=W,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Pu(9,u)}}catch(F){be(u,u.return,F)}if(u===o){W=null;break e}var D=u.sibling;if(D!==null){D.return=u.return,W=D;break e}W=u.return}}if(oe=s,Pr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Tu,t)}catch{}r=!0}return r}finally{ue=n,Vt.transition=e}}return!1}function jg(t,e,n){e=li(n,e),e=l_(t,e,1),t=lr(t,e,1),e=ht(),t!==null&&(ca(t,1,e),xt(t,e))}function be(t,e,n){if(t.tag===3)jg(t,t,n);else for(;e!==null;){if(e.tag===3){jg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){t=li(n,t),t=u_(e,t,1),e=lr(e,t,1),t=ht(),e!==null&&(ca(e,1,t),xt(e,t));break}}e=e.return}}function NT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Ye&n)===n&&(Fe===4||Fe===3&&(Ye&130023424)===Ye&&500>Ce()-Tf?Jr(t,0):Ef|=n),xt(t,e)}function C_(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=ht();t=bn(t,e),t!==null&&(ca(t,e,n),xt(t,n))}function kT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C_(t,n)}function CT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),C_(t,n)}var A_;A_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,gT(t,e,n);yt=!!(t.flags&131072)}else yt=!1,xe&&e.flags&1048576&&Dv(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yl(t,e),t=e.pendingProps;var s=si(e,ot.current);Qs(e,n),s=gf(null,e,r,t,s,n);var i=yf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(i=!0,Bl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,df(e),s.updater=Au,e.stateNode=s,s._reactInternals=e,Wd(e,r,t,n),e=Kd(null,e,r,!0,i,n)):(e.tag=0,xe&&i&&rf(e),dt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=PT(r),t=Ut(r,t),s){case 0:e=Gd(null,e,r,t,n);break e;case 1:e=Tg(null,e,r,t,n);break e;case 11:e=wg(null,e,r,t,n);break e;case 14:e=Eg(null,e,r,Ut(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ut(r,s),Gd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ut(r,s),Tg(t,e,r,s,n);case 3:e:{if(f_(e),t===null)throw Error(M(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Uv(t,e),Hl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=li(Error(M(423)),e),e=Ig(t,e,r,n,s);break e}else if(r!==s){s=li(Error(M(424)),e),e=Ig(t,e,r,n,s);break e}else for(Tt=ar(e.stateNode.containerInfo.firstChild),It=e,xe=!0,zt=null,n=Mv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ii(),r===s){e=Nn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return Bv(e),t===null&&zd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Od(r,s)?o=null:i!==null&&Od(r,i)&&(e.flags|=32),h_(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&zd(e),null;case 13:return p_(t,e,n);case 4:return hf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oi(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ut(r,s),wg(t,e,r,s,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,he(ql,r._currentValue),r._currentValue=o,i!==null)if(Kt(i.value,o)){if(i.children===s.children&&!vt.current){e=Nn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=wn(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),$d(i.return,n,e),u.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(M(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),$d(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}dt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Qs(e,n),s=Lt(s),r=r(s),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,s=Ut(r,e.pendingProps),s=Ut(r.type,s),Eg(t,e,r,s,n);case 15:return c_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ut(r,s),yl(t,e),e.tag=1,_t(r)?(t=!0,Bl(e)):t=!1,Qs(e,n),a_(e,r,s),Wd(e,r,s,n),Kd(null,e,r,!0,t,n);case 19:return m_(t,e,n);case 22:return d_(t,e,n)}throw Error(M(156,e.tag))};function P_(t,e){return sv(t,e)}function AT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new AT(t,e,n,r)}function Nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PT(t){if(typeof t=="function")return Nf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wh)return 11;if(t===Hh)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Nf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return Xr(n.children,s,i,e);case qh:o=8,s|=8;break;case md:return t=Dt(12,n,e,s|2),t.elementType=md,t.lanes=i,t;case gd:return t=Dt(13,n,e,s),t.elementType=gd,t.lanes=i,t;case yd:return t=Dt(19,n,e,s),t.elementType=yd,t.lanes=i,t;case B0:return ju(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F0:o=10;break e;case U0:o=9;break e;case Wh:o=11;break e;case Hh:o=14;break e;case Wn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Xr(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function ju(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=B0,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function ed(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function RT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function kf(t,e,n,r,s,i,o,u,c){return t=new RT(t,e,n,u,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Dt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(i),t}function jT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function R_(t){if(!t)return wr;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(_t(n))return Rv(t,n,e)}return e}function j_(t,e,n,r,s,i,o,u,c){return t=kf(n,r,!0,t,s,i,o,u,c),t.context=R_(null),n=t.current,r=ht(),s=cr(n),i=wn(r,s),i.callback=e??null,lr(n,i,s),t.current.lanes=s,ca(t,s,r),xt(t,r),t}function Du(t,e,n,r){var s=e.current,i=ht(),o=cr(s);return n=R_(n),e.context===null?e.context=n:e.pendingContext=n,e=wn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=lr(s,e,o),t!==null&&(Ht(t,s,o,i),pl(t,s,o)),o}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Cf(t,e){Dg(t,e),(t=t.alternate)&&Dg(t,e)}function DT(){return null}var D_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Af(t){this._internalRoot=t}Vu.prototype.render=Af.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Du(t,e,null,null)};Vu.prototype.unmount=Af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){Du(null,t,null,null)}),e[Sn]=null}};function Vu(t){this._internalRoot=t}Vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=dv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&fv(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function VT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=eu(o);i.call(d)}}var o=j_(e,r,t,0,null,!1,!1,"",Vg);return t._reactRootContainer=o,t[Sn]=o.current,Fo(t.nodeType===8?t.parentNode:t),is(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var u=r;r=function(){var d=eu(c);u.call(d)}}var c=kf(t,0,!1,null,null,!1,!1,"",Vg);return t._reactRootContainer=c,t[Sn]=c.current,Fo(t.nodeType===8?t.parentNode:t),is(function(){Du(e,c,n,r)}),c}function Ou(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var u=s;s=function(){var c=eu(o);u.call(c)}}Du(e,o,t,s)}else o=VT(n,e,t,s,r);return eu(o)}uv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(Qh(e,n|1),xt(e,Ce()),!(oe&6)&&(ui=Ce()+500,Pr()))}break;case 13:is(function(){var r=bn(t,1);if(r!==null){var s=ht();Ht(r,t,1,s)}}),Cf(t,1)}};Yh=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=ht();Ht(e,t,134217728,n)}Cf(t,134217728)}};cv=function(t){if(t.tag===13){var e=cr(t),n=bn(t,e);if(n!==null){var r=ht();Ht(n,t,e,r)}Cf(t,e)}};dv=function(){return ue};hv=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};Nd=function(t,e,n){switch(e){case"input":if(xd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Nu(r);if(!s)throw Error(M(90));$0(r),xd(r,s)}}}break;case"textarea":W0(t,n);break;case"select":e=n.value,e!=null&&Ws(t,!!n.multiple,e,!1)}};X0=If;Z0=is;var LT={usingClientEntryPoint:!1,Events:[ha,Os,Nu,Y0,J0,If]},no={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OT={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=nv(t),t===null?null:t.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||DT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Tu=tl.inject(OT),sn=tl}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LT;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(M(200));return jT(t,e,null,n)};bt.createRoot=function(t,e){if(!Pf(t))throw Error(M(299));var n=!1,r="",s=D_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=kf(t,1,!1,null,null,n,!1,r,s),t[Sn]=e.current,Fo(t.nodeType===8?t.parentNode:t),new Af(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=nv(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return is(t)};bt.hydrate=function(t,e,n){if(!Lu(e))throw Error(M(200));return Ou(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=D_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=j_(e,null,t,1,n??null,s,!1,i,o),t[Sn]=e.current,Fo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Vu(e)};bt.render=function(t,e,n){if(!Lu(e))throw Error(M(200));return Ou(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!Lu(t))throw Error(M(40));return t._reactRootContainer?(is(function(){Ou(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};bt.unstable_batchedUpdates=If;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Lu(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Ou(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function V_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V_)}catch(t){console.error(t)}}V_(),V0.exports=bt;var MT=V0.exports,L_,Lg=MT;L_=Lg.createRoot,Lg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ko.apply(this,arguments)}var nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nr||(nr={}));const Og="popstate";function FT(t){t===void 0&&(t={});function e(s,i){let{pathname:o="/",search:u="",hash:c=""}=ms(s.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),oh("",{pathname:o,search:u,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(s,i){let o=s.document.querySelector("base"),u="";if(o&&o.getAttribute("href")){let c=s.location.href,d=c.indexOf("#");u=d===-1?c:c.slice(0,d)}return u+"#"+(typeof i=="string"?i:tu(i))}function r(s,i){Mu(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return BT(e,n,r,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function UT(){return Math.random().toString(36).substr(2,8)}function Mg(t,e){return{usr:t.state,key:t.key,idx:e}}function oh(t,e,n,r){return n===void 0&&(n=null),Ko({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ms(e):e,{state:n,key:e&&e.key||r||UT()})}function tu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function BT(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,u=nr.Pop,c=null,d=p();d==null&&(d=0,o.replaceState(Ko({},o.state,{idx:d}),""));function p(){return(o.state||{idx:null}).idx}function m(){u=nr.Pop;let j=p(),w=j==null?null:j-d;d=j,c&&c({action:u,location:A.location,delta:w})}function g(j,w){u=nr.Push;let _=oh(A.location,j,w);n&&n(_,j),d=p()+1;let I=Mg(_,d),D=A.createHref(_);try{o.pushState(I,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;s.location.assign(D)}i&&c&&c({action:u,location:A.location,delta:1})}function S(j,w){u=nr.Replace;let _=oh(A.location,j,w);n&&n(_,j),d=p();let I=Mg(_,d),D=A.createHref(_);o.replaceState(I,"",D),i&&c&&c({action:u,location:A.location,delta:0})}function k(j){let w=s.location.origin!=="null"?s.location.origin:s.location.href,_=typeof j=="string"?j:tu(j);return _=_.replace(/ $/,"%20"),Pe(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let A={get action(){return u},get location(){return t(s,o)},listen(j){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Og,m),c=j,()=>{s.removeEventListener(Og,m),c=null}},createHref(j){return e(s,j)},createURL:k,encodeLocation(j){let w=k(j);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:S,go(j){return o.go(j)}};return A}var Fg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fg||(Fg={}));function zT(t,e,n){return n===void 0&&(n="/"),$T(t,e,n)}function $T(t,e,n,r){let s=typeof e=="string"?ms(e):e,i=Rf(s.pathname||"/",n);if(i==null)return null;let o=O_(t);qT(o);let u=null;for(let c=0;u==null&&c<o.length;++c){let d=nI(i);u=ZT(o[c],d)}return u}function O_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,u)=>{let c={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(Pe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=hr([r,c.relativePath]),p=n.concat(c);i.children&&i.children.length>0&&(Pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),O_(i.children,e,p,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:JT(d,i.index),routesMeta:p})};return t.forEach((i,o)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))s(i,o);else for(let c of M_(i.path))s(i,o,c)}),e}function M_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=M_(r.join("/")),u=[];return u.push(...o.map(c=>c===""?i:[i,c].join("/"))),s&&u.push(...o),u.map(c=>t.startsWith("/")&&c===""?"/":c)}function qT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:XT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const WT=/^:[\w-]+$/,HT=3,GT=2,KT=1,QT=10,YT=-2,Ug=t=>t==="*";function JT(t,e){let n=t.split("/"),r=n.length;return n.some(Ug)&&(r+=YT),e&&(r+=GT),n.filter(s=>!Ug(s)).reduce((s,i)=>s+(WT.test(i)?HT:i===""?KT:QT),r)}function XT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function ZT(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let u=0;u<r.length;++u){let c=r[u],d=u===r.length-1,p=i==="/"?e:e.slice(i.length)||"/",m=eI({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),g=c.route;if(!m)return null;Object.assign(s,m.params),o.push({params:s,pathname:hr([i,m.pathname]),pathnameBase:aI(hr([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=hr([i,m.pathnameBase]))}return o}function eI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=tI(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),u=s.slice(1);return{params:r.reduce((d,p,m)=>{let{paramName:g,isOptional:S}=p;if(g==="*"){let A=u[m]||"";o=i.slice(0,i.length-A.length).replace(/(.)\/+$/,"$1")}const k=u[m];return S&&!k?d[g]=void 0:d[g]=(k||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:t}}function tI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,c)=>(r.push({paramName:u,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function nI(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Rf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const rI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sI=t=>rI.test(t);function iI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?ms(t):t,i;if(n)if(sI(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Mu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=Bg(n.substring(1),"/"):i=Bg(n,e)}else i=e;return{pathname:i,search:lI(r),hash:uI(s)}}function Bg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function td(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jf(t,e){let n=oI(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Df(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=ms(t):(s=Ko({},t),Pe(!s.pathname||!s.pathname.includes("?"),td("?","pathname","search",s)),Pe(!s.pathname||!s.pathname.includes("#"),td("#","pathname","hash",s)),Pe(!s.search||!s.search.includes("#"),td("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,u;if(o==null)u=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}u=m>=0?e[m]:"/"}let c=iI(s,u),d=o&&o!=="/"&&o.endsWith("/"),p=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),aI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),lI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,uI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function cI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const F_=["post","put","patch","delete"];new Set(F_);const dI=["get",...F_];new Set(dI);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qo.apply(this,arguments)}const Vf=O.createContext(null),hI=O.createContext(null),Rr=O.createContext(null),Fu=O.createContext(null),jn=O.createContext({outlet:null,matches:[],isDataRoute:!1}),U_=O.createContext(null);function fI(t,e){let{relative:n}=e===void 0?{}:e;xi()||Pe(!1);let{basename:r,navigator:s}=O.useContext(Rr),{hash:i,pathname:o,search:u}=z_(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:hr([r,o])),s.createHref({pathname:c,search:u,hash:i})}function xi(){return O.useContext(Fu)!=null}function wi(){return xi()||Pe(!1),O.useContext(Fu).location}function B_(t){O.useContext(Rr).static||O.useLayoutEffect(t)}function ve(){let{isDataRoute:t}=O.useContext(jn);return t?bI():pI()}function pI(){xi()||Pe(!1);let t=O.useContext(Vf),{basename:e,future:n,navigator:r}=O.useContext(Rr),{matches:s}=O.useContext(jn),{pathname:i}=wi(),o=JSON.stringify(jf(s,n.v7_relativeSplatPath)),u=O.useRef(!1);return B_(()=>{u.current=!0}),O.useCallback(function(d,p){if(p===void 0&&(p={}),!u.current)return;if(typeof d=="number"){r.go(d);return}let m=Df(d,JSON.parse(o),i,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:hr([e,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[e,r,o,i,t])}function jr(){let{matches:t}=O.useContext(jn),e=t[t.length-1];return e?e.params:{}}function z_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Rr),{matches:s}=O.useContext(jn),{pathname:i}=wi(),o=JSON.stringify(jf(s,r.v7_relativeSplatPath));return O.useMemo(()=>Df(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function mI(t,e){return gI(t,e)}function gI(t,e,n,r){xi()||Pe(!1);let{navigator:s}=O.useContext(Rr),{matches:i}=O.useContext(jn),o=i[i.length-1],u=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=wi(),p;if(e){var m;let j=typeof e=="string"?ms(e):e;c==="/"||(m=j.pathname)!=null&&m.startsWith(c)||Pe(!1),p=j}else p=d;let g=p.pathname||"/",S=g;if(c!=="/"){let j=c.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let k=zT(t,{pathname:S}),A=wI(k&&k.map(j=>Object.assign({},j,{params:Object.assign({},u,j.params),pathname:hr([c,s.encodeLocation?s.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:hr([c,s.encodeLocation?s.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,n,r);return e&&A?O.createElement(Fu.Provider,{value:{location:Qo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:nr.Pop}},A):A}function yI(){let t=SI(),e=cI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:s},n):null,null)}const vI=O.createElement(yI,null);class _I extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(jn.Provider,{value:this.props.routeContext},O.createElement(U_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xI(t){let{routeContext:e,match:n,children:r}=t,s=O.useContext(Vf);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(jn.Provider,{value:e},r)}function wI(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,u=(s=n)==null?void 0:s.errors;if(u!=null){let p=o.findIndex(m=>m.route.id&&u?.[m.route.id]!==void 0);p>=0||Pe(!1),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:S}=n,k=m.route.loader&&g[m.route.id]===void 0&&(!S||S[m.route.id]===void 0);if(m.route.lazy||k){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,m,g)=>{let S,k=!1,A=null,j=null;n&&(S=u&&m.route.id?u[m.route.id]:void 0,A=m.route.errorElement||vI,c&&(d<0&&g===0?(NI("route-fallback"),k=!0,j=null):d===g&&(k=!0,j=m.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),_=()=>{let I;return S?I=A:k?I=j:m.route.Component?I=O.createElement(m.route.Component,null):m.route.element?I=m.route.element:I=p,O.createElement(xI,{match:m,routeContext:{outlet:p,matches:w,isDataRoute:n!=null},children:I})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?O.createElement(_I,{location:n.location,revalidation:n.revalidation,component:A,error:S,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var $_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($_||{}),q_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(q_||{});function EI(t){let e=O.useContext(Vf);return e||Pe(!1),e}function TI(t){let e=O.useContext(hI);return e||Pe(!1),e}function II(t){let e=O.useContext(jn);return e||Pe(!1),e}function W_(t){let e=II(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function SI(){var t;let e=O.useContext(U_),n=TI(),r=W_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function bI(){let{router:t}=EI($_.UseNavigateStable),e=W_(q_.UseNavigateStable),n=O.useRef(!1);return B_(()=>{n.current=!0}),O.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Qo({fromRouteId:e},i)))},[t,e])}const zg={};function NI(t,e,n){zg[t]||(zg[t]=!0)}function kI(t,e){t?.v7_startTransition,t?.v7_relativeSplatPath}function ze(t){let{to:e,replace:n,state:r,relative:s}=t;xi()||Pe(!1);let{future:i,static:o}=O.useContext(Rr),{matches:u}=O.useContext(jn),{pathname:c}=wi(),d=ve(),p=Df(e,jf(u,i.v7_relativeSplatPath),c,s==="path"),m=JSON.stringify(p);return O.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:s}),[d,m,s,n,r]),null}function X(t){Pe(!1)}function CI(t){let{basename:e="/",children:n=null,location:r,navigationType:s=nr.Pop,navigator:i,static:o=!1,future:u}=t;xi()&&Pe(!1);let c=e.replace(/^\/*/,"/"),d=O.useMemo(()=>({basename:c,navigator:i,static:o,future:Qo({v7_relativeSplatPath:!1},u)}),[c,u,i,o]);typeof r=="string"&&(r=ms(r));let{pathname:p="/",search:m="",hash:g="",state:S=null,key:k="default"}=r,A=O.useMemo(()=>{let j=Rf(p,c);return j==null?null:{location:{pathname:j,search:m,hash:g,state:S,key:k},navigationType:s}},[c,p,m,g,S,k,s]);return A==null?null:O.createElement(Rr.Provider,{value:d},O.createElement(Fu.Provider,{children:n,value:A}))}function AI(t){let{children:e,location:n}=t;return mI(ah(e),n)}new Promise(()=>{});function ah(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,s)=>{if(!O.isValidElement(r))return;let i=[...e,s];if(r.type===O.Fragment){n.push.apply(n,ah(r.props.children,i));return}r.type!==X&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ah(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lh(){return lh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lh.apply(this,arguments)}function PI(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function RI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function jI(t,e){return t.button===0&&(!e||e==="_self")&&!RI(t)}const DI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],VI="6";try{window.__reactRouterVersion=VI}catch{}const LI="startTransition",$g=NE[LI];function OI(t){let{basename:e,children:n,future:r,window:s}=t,i=O.useRef();i.current==null&&(i.current=FT({window:s,v5Compat:!0}));let o=i.current,[u,c]=O.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},p=O.useCallback(m=>{d&&$g?$g(()=>c(m)):c(m)},[c,d]);return O.useLayoutEffect(()=>o.listen(p),[o,p]),O.useEffect(()=>kI(r),[r]),O.createElement(CI,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:o,future:r})}const MI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",FI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gn=O.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:u,target:c,to:d,preventScrollReset:p,viewTransition:m}=e,g=PI(e,DI),{basename:S}=O.useContext(Rr),k,A=!1;if(typeof d=="string"&&FI.test(d)&&(k=d,MI))try{let I=new URL(window.location.href),D=d.startsWith("//")?new URL(I.protocol+d):new URL(d),F=Rf(D.pathname,S);D.origin===I.origin&&F!=null?d=F+D.search+D.hash:A=!0}catch{}let j=fI(d,{relative:s}),w=UI(d,{replace:o,state:u,target:c,preventScrollReset:p,relative:s,viewTransition:m});function _(I){r&&r(I),I.defaultPrevented||w(I)}return O.createElement("a",lh({},g,{href:k||j,onClick:A||i?r:_,ref:n,target:c}))});var qg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(qg||(qg={}));var Wg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Wg||(Wg={}));function UI(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:u}=e===void 0?{}:e,c=ve(),d=wi(),p=z_(t,{relative:o});return O.useCallback(m=>{if(jI(m,n)){m.preventDefault();let g=r!==void 0?r:tu(d)===tu(p);c(t,{replace:g,state:s,preventScrollReset:i,relative:o,viewTransition:u})}},[d,c,p,r,s,n,t,i,o,u])}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zI=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Hg=t=>{const e=zI(t);return e.charAt(0).toUpperCase()+e.slice(1)},H_=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $I={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=O.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...u},c)=>O.createElement("svg",{ref:c,...$I,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:H_("lucide",s),...u},[...o.map(([d,p])=>O.createElement(d,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=(t,e)=>{const n=O.forwardRef(({className:r,...s},i)=>O.createElement(qI,{ref:i,iconNode:e,className:H_(`lucide-${BI(Hg(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Hg(t),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Lf=ae("arrow-left",WI);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Uu=ae("arrow-right",HI);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],KI=ae("award",GI);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],uh=ae("bell",QI);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],JI=ae("building-2",YI);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XI=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Dr=ae("calendar",XI);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZI=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],eS=ae("check",ZI);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ei=ae("circle-check-big",tS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Yo=ae("clock",nS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],pa=ae("dollar-sign",rS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],iS=ae("download",sS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ma=ae("file-text",oS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],lS=ae("folder",aS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]],Of=ae("hammer",uS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Dn=ae("house",cS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],G_=ae("lock",dS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],fS=ae("log-in",hS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],K_=ae("log-out",pS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Mf=ae("mail",mS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],hn=ae("map-pin",gS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],vS=ae("maximize-2",yS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],xS=ae("maximize",_S);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Ff=ae("phone",wS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Bu=ae("search",ES);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],IS=ae("square-pen",TS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Q_=ae("star",SS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],NS=ae("trees",bS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Zr=ae("upload",kS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],AS=ae("user-plus",CS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],nu=ae("user",PS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],jS=ae("users",RS);function DS(){const t=ve(),e=()=>{sessionStorage.setItem("roo_welcome_seen","1"),t("/",{replace:!0})};return l.jsxs("div",{className:"rl-wrap",children:[l.jsxs("div",{className:"rl-bg",children:[l.jsx("div",{className:"rl-blob rl-blob-a"}),l.jsx("div",{className:"rl-blob rl-blob-b"}),l.jsx("div",{className:"rl-blob rl-blob-c"}),l.jsx("div",{className:"rl-particles"})]}),l.jsxs("div",{className:"rl-card rl-float",children:[l.jsx("div",{className:"rl-borderGlow"}),l.jsxs("div",{className:"rl-iconWrap",children:[l.jsx("div",{className:"rl-iconRing"}),l.jsx("div",{className:"rl-icon",children:l.jsx(Dn,{size:26})})]}),l.jsxs("h1",{className:"rl-title",children:["Welcome to ",l.jsx("span",{className:"rl-brand",children:"Roo Living"})]}),l.jsx("p",{className:"rl-subtitle",children:"Your dream home — designed & built with ease."}),l.jsxs("div",{className:"rl-status",children:[l.jsx("span",{className:"rl-dot"}),l.jsx("span",{children:"Ready to start"})]}),l.jsx("button",{className:"rl-btn",onClick:e,children:"Continue"}),l.jsx("p",{className:"rl-hint",children:"Click Continue to enter the website"})]}),l.jsx("style",{children:`
        /* =========================
           Base layout (NO LINES)
        ========================== */
        .rl-wrap{
          min-height: 100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          background: #0b0b0b; /* solid background => banding/lines gone */
          color: #fff;
          overflow:hidden;
          position:relative;
          padding: 32px 16px;
        }

        .rl-bg{
          position:absolute; inset:0;
          pointer-events:none;
        }

        /* =========================
           Blobs (no screen-wide gradients)
        ========================== */
        .rl-blob{
          position:absolute;
          width: 560px;
          height: 560px;
          border-radius: 999px;
          filter: blur(70px);
          opacity: .18;
          will-change: transform;
          animation: rlBlob 18s ease-in-out infinite;
        }

        .rl-blob-a{
          left:-260px; top:-260px;
          background: rgba(249,115,22,1);
        }
        .rl-blob-b{
          right:-280px; bottom:-300px;
          background: rgba(255,255,255,0.35);
          animation-delay: -7s;
        }
        .rl-blob-c{
          left: 55%;
          top: 10%;
          width: 420px;
          height: 420px;
          background: rgba(249,115,22,0.55);
          opacity: .10;
          animation-delay: -12s;
        }

        @keyframes rlBlob{
          0%,100%{ transform: translate(0,0) scale(1); }
          50%{ transform: translate(90px,-60px) scale(1.10); }
        }

        /* =========================
           Particles (next level, subtle)
        ========================== */
        .rl-particles{
          position:absolute; inset:0;
          opacity: .35;
          background-image:
            radial-gradient(circle at 12% 22%, rgba(255,255,255,0.18) 0 1px, transparent 2px),
            radial-gradient(circle at 30% 70%, rgba(249,115,22,0.22) 0 1px, transparent 2px),
            radial-gradient(circle at 78% 35%, rgba(255,255,255,0.16) 0 1px, transparent 2px),
            radial-gradient(circle at 62% 78%, rgba(249,115,22,0.18) 0 1px, transparent 2px),
            radial-gradient(circle at 90% 55%, rgba(255,255,255,0.14) 0 1px, transparent 2px);
          background-size: 100% 100%;
          animation: rlParticles 8s ease-in-out infinite;
          will-change: transform, opacity;
        }

        @keyframes rlParticles{
          0%,100%{ transform: translateY(0); opacity:.25; }
          50%{ transform: translateY(-10px); opacity:.45; }
        }

        /* =========================
           Card (bigger + spacing)
        ========================== */
        .rl-card{
          position:relative;
          width: min(720px, 92vw); /* bigger */
          padding: 44px 44px;      /* more spacing */
          border-radius: 28px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 40px 100px rgba(0,0,0,0.55);
          text-align:center;
          z-index: 2;
          overflow:hidden;
        }

        /* Entrance */
        .rl-card{
          animation: rlEnter 900ms cubic-bezier(.2,.8,.2,1) both;
          will-change: transform, opacity;
        }
        @keyframes rlEnter{
          from{ opacity:0; transform: translateY(18px) scale(.985); }
          to{ opacity:1; transform: translateY(0) scale(1); }
        }

        /* Floating */
        .rl-float{
          animation: rlFloat 3.8s ease-in-out infinite;
        }
        @keyframes rlFloat{
          0%,100%{ transform: translateY(0); }
          50%{ transform: translateY(-8px); }
        }

        /* Animated border glow */
        .rl-borderGlow{
          position:absolute; inset:-2px;
          border-radius: 30px;
          background: conic-gradient(
            from 180deg,
            rgba(249,115,22,0.00),
            rgba(249,115,22,0.35),
            rgba(255,255,255,0.18),
            rgba(249,115,22,0.35),
            rgba(249,115,22,0.00)
          );
          filter: blur(10px);
          opacity: .55;
          animation: rlSpin 5.5s linear infinite;
        }
        @keyframes rlSpin{
          to{ transform: rotate(360deg); }
        }

        /* Keep content above glow */
        .rl-card > *{
          position: relative;
          z-index: 1;
        }

        /* =========================
           Icon
        ========================== */
        .rl-iconWrap{
          width: 78px;
          height: 78px;
          margin: 0 auto 18px;
          position:relative;
        }

        .rl-iconRing{
          position:absolute; inset:-10px;
          border-radius: 26px;
          background: radial-gradient(circle at 30% 30%, rgba(249,115,22,0.35), transparent 62%);
          opacity: .9;
        }
        .rl-iconRing::after{
          content:"";
          position:absolute; inset:0;
          border-radius: 26px;
          border: 1px solid rgba(249,115,22,0.35);
          box-shadow: 0 0 0 0 rgba(249,115,22,0.30);
          animation: rlPulse 2.6s ease-in-out infinite;
        }
        @keyframes rlPulse{
          0%{ transform: scale(1); opacity:.75; box-shadow: 0 0 0 0 rgba(249,115,22,0.30); }
          70%{ transform: scale(1.03); opacity:.35; box-shadow: 0 0 0 18px rgba(249,115,22,0); }
          100%{ transform: scale(1); opacity:.75; box-shadow: 0 0 0 0 rgba(249,115,22,0); }
        }

        .rl-icon{
          position:absolute; inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius: 22px;
          background: rgba(0,0,0,0.20);
          border: 1px solid rgba(255,255,255,0.10);
          color: #fff;
        }
        .rl-icon svg{ color: rgb(249,115,22); }

        /* =========================
           Text
        ========================== */
        .rl-title{
          font-size: clamp(28px, 3.6vw, 44px);
          font-weight: 900;
          letter-spacing: -0.02em;
          margin: 6px 0 10px;
        }

        .rl-brand{
          color: rgb(249,115,22);
          text-shadow: 0 12px 34px rgba(249,115,22,0.25);
        }

        .rl-subtitle{
          margin: 0 auto;
          max-width: 520px;
          font-size: clamp(14px, 1.5vw, 17px);
          color: rgba(255,255,255,0.78);
          line-height: 1.55;
        }

        .rl-status{
          margin-top: 18px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap: 10px;
          font-size: 12px;
          color: rgba(255,255,255,0.65);
        }

        .rl-dot{
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: rgb(249,115,22);
          box-shadow: 0 0 0 0 rgba(249,115,22,.55);
          animation: rlDot 1.4s infinite;
        }
        @keyframes rlDot{
          0%{ box-shadow: 0 0 0 0 rgba(249,115,22,.55); }
          70%{ box-shadow: 0 0 0 12px rgba(249,115,22,0); }
          100%{ box-shadow: 0 0 0 0 rgba(249,115,22,0); }
        }

        /* =========================
           Button (bigger)
        ========================== */
        .rl-btn{
          margin-top: 26px;
          padding: 14px 32px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgb(249,115,22);
          color: #fff;
          font-weight: 800;
          font-size: 16px;
          cursor:pointer;
          transition: transform .18s ease, box-shadow .18s ease, background-color .18s ease;
          box-shadow: 0 16px 34px rgba(249,115,22,0.18);
        }
        .rl-btn:hover{
          background: rgb(234,88,12);
          transform: translateY(-2px);
          box-shadow: 0 20px 44px rgba(249,115,22,0.22);
        }
        .rl-btn:active{ transform: scale(.98); }

        .rl-hint{
          margin-top: 14px;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
        }

        @media (prefers-reduced-motion: reduce){
          .rl-blob, .rl-particles, .rl-float, .rl-borderGlow, .rl-iconRing::after, .rl-dot{
            animation: none !important;
          }
        }
      `})]})}const VS=()=>{};var Gg={};/**
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
 */const Y_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},LS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],u=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},J_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,u=o?t[s+1]:0,c=s+2<t.length,d=c?t[s+2]:0,p=i>>2,m=(i&3)<<4|u>>4;let g=(u&15)<<2|d>>6,S=d&63;c||(S=64,o||(g=64)),r.push(n[p],n[m],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Y_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],u=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||u==null||d==null||m==null)throw new OS;const g=i<<2|u>>4;if(r.push(g),d!==64){const S=u<<4&240|d>>2;if(r.push(S),m!==64){const k=d<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MS=function(t){const e=Y_(t);return J_.encodeByteArray(e,!0)},ru=function(t){return MS(t).replace(/\./g,"")},X_=function(t){try{return J_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const US=()=>FS().__FIREBASE_DEFAULTS__,BS=()=>{if(typeof process>"u"||typeof Gg>"u")return;const t=Gg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&X_(t[1]);return e&&JSON.parse(e)},zu=()=>{try{return VS()||US()||BS()||zS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Z_=t=>zu()?.emulatorHosts?.[t],$S=t=>{const e=Z_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ex=()=>zu()?.config,tx=t=>zu()?.[`_${t}`];/**
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
 */class qS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function nx(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function WS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ru(JSON.stringify(n)),ru(JSON.stringify(o)),""].join(".")}const So={};function HS(){const t={prod:[],emulator:[]};for(const e of Object.keys(So))So[e]?t.emulator.push(e):t.prod.push(e);return t}function GS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Kg=!1;function rx(t,e){if(typeof window>"u"||typeof document>"u"||!Ti(window.location.host)||So[t]===e||So[t]||Kg)return;So[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=HS().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function u(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,S){g.setAttribute("width","24"),g.setAttribute("id",S),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Kg=!0,o()},g}function p(g,S){g.setAttribute("id",S),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=GS(r),S=n("text"),k=document.getElementById(S)||document.createElement("span"),A=n("learnmore"),j=document.getElementById(A)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const I=g.element;u(I),p(j,A);const D=d();c(_,w),I.append(_,k,j,D),document.body.appendChild(I)}i?(k.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function QS(){const t=zu()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZS(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eb(){return!QS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tb(){try{return typeof indexedDB=="object"}catch{return!1}}function nb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const rb="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rb,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ga.prototype.create)}}class ga{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sb(i,r):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,u,r)}}function sb(t,e){return t.replace(ib,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ib=/\{\$([^}]+)}/g;function ob(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function os(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qg(i)&&Qg(o)){if(!os(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qg(t){return t!==null&&typeof t=="object"}/**
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
 */function ya(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function co(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ab(t,e){const n=new lb(t,e);return n.subscribe.bind(n)}class lb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ub(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nd),s.error===void 0&&(s.error=nd),s.complete===void 0&&(s.complete=nd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ub(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nd(){}/**
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
 */function lt(t){return t&&t._delegate?t._delegate:t}class as{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hr="[DEFAULT]";/**
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
 */class cb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hb(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:db(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function db(t){return t===Hr?void 0:t}function hb(t){return t.instantiationMode==="EAGER"}/**
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
 */class fb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const pb={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},mb=ne.INFO,gb={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},yb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uf{constructor(e){this.name=e,this._logLevel=mb,this._logHandler=yb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const vb=(t,e)=>e.some(n=>t instanceof n);let Yg,Jg;function _b(){return Yg||(Yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xb(){return Jg||(Jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sx=new WeakMap,ch=new WeakMap,ix=new WeakMap,rd=new WeakMap,Bf=new WeakMap;function wb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(fr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sx.set(n,t)}).catch(()=>{}),Bf.set(e,t),e}function Eb(t){if(ch.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ch.set(t,e)}let dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ix.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Tb(t){dh=t(dh)}function Ib(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sd(this),e,...n);return ix.set(r,e.sort?e.sort():[e]),fr(r)}:xb().includes(t)?function(...e){return t.apply(sd(this),e),fr(sx.get(this))}:function(...e){return fr(t.apply(sd(this),e))}}function Sb(t){return typeof t=="function"?Ib(t):(t instanceof IDBTransaction&&Eb(t),vb(t,_b())?new Proxy(t,dh):t)}function fr(t){if(t instanceof IDBRequest)return wb(t);if(rd.has(t))return rd.get(t);const e=Sb(t);return e!==t&&(rd.set(t,e),Bf.set(e,t)),e}const sd=t=>Bf.get(t);function bb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),u=fr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(fr(o.result),c.oldVersion,c.newVersion,fr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),u.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Nb=["get","getKey","getAll","getAllKeys","count"],kb=["put","add","delete","clear"],id=new Map;function Xg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Nb.includes(n)))return;const i=async function(o,...u){const c=this.transaction(o,s?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),s&&c.done]))[0]};return id.set(e,i),i}Tb(t=>({...t,get:(e,n,r)=>Xg(e,n)||t.get(e,n,r),has:(e,n)=>!!Xg(e,n)||t.has(e,n)}));/**
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
 */class Cb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ab(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ab(t){return t.getComponent()?.type==="VERSION"}const hh="@firebase/app",Zg="0.14.8";/**
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
 */const kn=new Uf("@firebase/app"),Pb="@firebase/app-compat",Rb="@firebase/analytics-compat",jb="@firebase/analytics",Db="@firebase/app-check-compat",Vb="@firebase/app-check",Lb="@firebase/auth",Ob="@firebase/auth-compat",Mb="@firebase/database",Fb="@firebase/data-connect",Ub="@firebase/database-compat",Bb="@firebase/functions",zb="@firebase/functions-compat",$b="@firebase/installations",qb="@firebase/installations-compat",Wb="@firebase/messaging",Hb="@firebase/messaging-compat",Gb="@firebase/performance",Kb="@firebase/performance-compat",Qb="@firebase/remote-config",Yb="@firebase/remote-config-compat",Jb="@firebase/storage",Xb="@firebase/storage-compat",Zb="@firebase/firestore",eN="@firebase/ai",tN="@firebase/firestore-compat",nN="firebase",rN="12.9.0";/**
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
 */const fh="[DEFAULT]",sN={[hh]:"fire-core",[Pb]:"fire-core-compat",[jb]:"fire-analytics",[Rb]:"fire-analytics-compat",[Vb]:"fire-app-check",[Db]:"fire-app-check-compat",[Lb]:"fire-auth",[Ob]:"fire-auth-compat",[Mb]:"fire-rtdb",[Fb]:"fire-data-connect",[Ub]:"fire-rtdb-compat",[Bb]:"fire-fn",[zb]:"fire-fn-compat",[$b]:"fire-iid",[qb]:"fire-iid-compat",[Wb]:"fire-fcm",[Hb]:"fire-fcm-compat",[Gb]:"fire-perf",[Kb]:"fire-perf-compat",[Qb]:"fire-rc",[Yb]:"fire-rc-compat",[Jb]:"fire-gcs",[Xb]:"fire-gcs-compat",[Zb]:"fire-fst",[tN]:"fire-fst-compat",[eN]:"fire-vertex","fire-js":"fire-js",[nN]:"fire-js-all"};/**
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
 */const su=new Map,iN=new Map,ph=new Map;function ey(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if(ph.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;ph.set(e,t);for(const n of su.values())ey(n,t);for(const n of iN.values())ey(n,t);return!0}function zf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const oN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new ga("app","Firebase",oN);/**
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
 */class aN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=rN;function ox(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:fh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw pr.create("bad-app-name",{appName:String(s)});if(n||(n=ex()),!n)throw pr.create("no-options");const i=su.get(s);if(i){if(os(n,i.options)&&os(r,i.config))return i;throw pr.create("duplicate-app",{appName:s})}const o=new fb(s);for(const c of ph.values())o.addComponent(c);const u=new aN(n,r,o);return su.set(s,u),u}function ax(t=fh){const e=su.get(t);if(!e&&t===fh&&ex())return ox();if(!e)throw pr.create("no-app",{appName:t});return e}function mr(t,e,n){let r=sN[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(o.join(" "));return}ci(new as(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const lN="firebase-heartbeat-database",uN=1,Jo="firebase-heartbeat-store";let od=null;function lx(){return od||(od=bb(lN,uN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),od}async function cN(t){try{const n=(await lx()).transaction(Jo),r=await n.objectStore(Jo).get(ux(t));return await n.done,r}catch(e){if(e instanceof Vn)kn.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e?.message});kn.warn(n.message)}}}async function ty(t,e){try{const r=(await lx()).transaction(Jo,"readwrite");await r.objectStore(Jo).put(e,ux(t)),await r.done}catch(n){if(n instanceof Vn)kn.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n?.message});kn.warn(r.message)}}}function ux(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dN=1024,hN=30;class fN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ny();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>hN){const s=gN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){kn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ny(),{heartbeatsToSend:n,unsentEntries:r}=pN(this._heartbeatsCache.heartbeats),s=ru(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return kn.warn(e),""}}}function ny(){return new Date().toISOString().substring(0,10)}function pN(t,e=dN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ry(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ry(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tb()?nb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cN(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ty(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ty(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ry(t){return ru(JSON.stringify({version:2,heartbeats:t})).length}function gN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function yN(t){ci(new as("platform-logger",e=>new Cb(e),"PRIVATE")),ci(new as("heartbeat",e=>new fN(e),"PRIVATE")),mr(hh,Zg,t),mr(hh,Zg,"esm2020"),mr("fire-js","")}yN("");function cx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vN=cx,dx=new ga("auth","Firebase",cx());/**
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
 */const iu=new Uf("@firebase/auth");function _N(t,...e){iu.logLevel<=ne.WARN&&iu.warn(`Auth (${Ii}): ${t}`,...e)}function wl(t,...e){iu.logLevel<=ne.ERROR&&iu.error(`Auth (${Ii}): ${t}`,...e)}/**
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
 */function Qt(t,...e){throw $f(t,...e)}function an(t,...e){return $f(t,...e)}function hx(t,e,n){const r={...vN(),[e]:n};return new ga("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return hx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $f(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dx.create(t,...e)}function G(t,e,...n){if(!t)throw $f(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wl(e),new Error(e)}function Cn(t,e){t||_n(e)}/**
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
 */function mh(){return typeof self<"u"&&self.location?.href||""}function xN(){return sy()==="http:"||sy()==="https:"}function sy(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function wN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xN()||JS()||"connection"in navigator)?navigator.onLine:!0}function EN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class va{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=KS()||XS()}get(){return wN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qf(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SN=new va(3e4,6e4);function Vr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Lr(t,e,n,r,s={}){return px(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const u=ya({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:c,...i};return YS()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&Ti(t.emulatorConfig.host)&&(d.credentials="include"),fx.fetch()(await mx(t,t.config.apiHost,n,u),d)})}async function px(t,e,n){t._canInitEmulator=!1;const r={...TN,...e};try{const s=new NN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw nl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const u=i.ok?o.errorMessage:o.error.message,[c,d]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw nl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw nl(t,"user-disabled",o);const p=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw hx(t,p,d);Qt(t,p)}}catch(s){if(s instanceof Vn)throw s;Qt(t,"network-request-failed",{message:String(s)})}}async function _a(t,e,n,r,s={}){const i=await Lr(t,e,n,r,s);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function mx(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?qf(t.config,s):`${t.config.apiScheme}://${s}`;return IN.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function bN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),SN.get())})}}function nl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function iy(t){return t!==void 0&&t.enterprise!==void 0}class kN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function CN(t,e){return Lr(t,"GET","/v2/recaptchaConfig",Vr(t,e))}/**
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
 */async function AN(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function ou(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PN(t,e=!1){const n=lt(t),r=await n.getIdToken(e),s=Wf(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:bo(ad(s.auth_time)),issuedAtTime:bo(ad(s.iat)),expirationTime:bo(ad(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ad(t){return Number(t)*1e3}function Wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wl("JWT malformed, contained fewer than 3 sections"),null;try{const s=X_(n);return s?JSON.parse(s):(wl("Failed to decode base64 JWT payload"),null)}catch(s){return wl("Caught error parsing JWT payload as JSON",s?.toString()),null}}function oy(t){const e=Wf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&RN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bo(this.lastLoginAt),this.creationTime=bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function au(t){const e=t.auth,n=await t.getIdToken(),r=await Xo(t,ou(e,{idToken:n}));G(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?gx(s.providerUserInfo):[],o=VN(t.providerData,i),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new gh(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function DN(t){const e=lt(t);await au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function gx(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function LN(t,e){const n=await px(t,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await mx(t,s,"/v1/token",`key=${i}`),u=await t._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:u,body:r};return t.emulatorConfig&&Ti(t.emulatorConfig.host)&&(c.credentials="include"),fx.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ON(t,e){return Lr(t,"POST","/v2/accounts:revokeToken",Vr(t,e))}/**
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
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=oy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await LN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Js;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
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
 */function qn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new jN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PN(this,e)}reload(){return DN(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await au(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await Xo(this,AN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,u=n.tenantId??void 0,c=n._redirectEventId??void 0,d=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:S,providerData:k,stsTokenManager:A}=n;G(m&&A,e,"internal-error");const j=Js.fromJSON(this.name,A);G(typeof m=="string",e,"internal-error"),qn(r,e.name),qn(s,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof S=="boolean",e,"internal-error"),qn(i,e.name),qn(o,e.name),qn(u,e.name),qn(c,e.name),qn(d,e.name),qn(p,e.name);const w=new $t({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:i,tenantId:u,stsTokenManager:j,createdAt:d,lastLoginAt:p});return k&&Array.isArray(k)&&(w.providerData=k.map(_=>({..._}))),c&&(w._redirectEventId=c),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Js;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await au(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?gx(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,u=new Js;u.updateFromIdToken(r);const c=new $t({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new gh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,d),c}}/**
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
 */const ay=new Map;function xn(t){Cn(t instanceof Function,"Expected a class definition");let e=ay.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ay.set(t,e),e)}/**
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
 */class yx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yx.type="NONE";const ly=yx;/**
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
 */function El(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=El(this.userKey,s.apiKey,i),this.fullPersistenceKey=El("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ou(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xs(xn(ly),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||xn(ly);const o=El(r,e.config.apiKey,e.name);let u=null;for(const d of n)try{const p=await d._get(o);if(p){let m;if(typeof p=="string"){const g=await ou(e,{idToken:p}).catch(()=>{});if(!g)break;m=await $t._fromGetAccountInfoResponse(e,g,p)}else m=$t._fromJSON(e,p);d!==i&&(u=m),i=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Xs(i,e,r):(i=c[0],u&&await i._set(o,u.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Xs(i,e,r))}}/**
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
 */function uy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tx(e))return"Blackberry";if(Ix(e))return"Webos";if(_x(e))return"Safari";if((e.includes("chrome/")||xx(e))&&!e.includes("edge/"))return"Chrome";if(Ex(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function vx(t=at()){return/firefox\//i.test(t)}function _x(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xx(t=at()){return/crios\//i.test(t)}function wx(t=at()){return/iemobile/i.test(t)}function Ex(t=at()){return/android/i.test(t)}function Tx(t=at()){return/blackberry/i.test(t)}function Ix(t=at()){return/webos/i.test(t)}function Hf(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MN(t=at()){return Hf(t)&&!!window.navigator?.standalone}function FN(){return ZS()&&document.documentMode===10}function Sx(t=at()){return Hf(t)||Ex(t)||Ix(t)||Tx(t)||/windows phone/i.test(t)||wx(t)}/**
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
 */function bx(t,e=[]){let n;switch(t){case"Browser":n=uy(at());break;case"Worker":n=`${uy(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${r}`}/**
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
 */class UN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,u)=>{try{const c=e(i);o(c)}catch(c){u(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,e={}){return Lr(t,"GET","/v2/passwordPolicy",Vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=6;class $N{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??zN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class qN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cy(this),this.idTokenSubscription=new cy(this),this.beforeStateQueue=new UN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ou(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Pt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,u=await this.tryRedirectSignIn(e);(!i||i===o)&&u?.user&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await au(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(En(this));const n=e?lt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BN(this),n=new $N(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ga("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ON(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(u,this,"internal-error"),u.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&_N(`Error while retrieving App Check token: ${e.error}`),e?.token}}function gs(t){return lt(t)}class cy{constructor(e){this.auth=e,this.observer=null,this.addObserver=ab(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $u={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WN(t){$u=t}function Nx(t){return $u.loadJS(t)}function HN(){return $u.recaptchaEnterpriseScript}function GN(){return $u.gapiScript}function KN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class QN{constructor(){this.enterprise=new YN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class YN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const JN="recaptcha-enterprise",kx="NO_RECAPTCHA";class XN{constructor(e){this.type=JN,this.auth=gs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,u)=>{CN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new kN(c);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(c=>{u(c)})})}function s(i,o,u){const c=window.grecaptcha;iy(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(kx)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QN().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(u=>{if(!n&&iy(window.grecaptcha))s(u,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=HN();c.length!==0&&(c+=u),Nx(c).then(()=>{s(u,i,o)}).catch(d=>{o(d)})}}).catch(u=>{o(u)})})}}async function dy(t,e,n,r=!1,s=!1){const i=new XN(t);let o;if(s)o=kx;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const u={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const c=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const c=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:o}):Object.assign(u,{captchaResponse:o}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function yh(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await dy(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await dy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function ZN(t,e){const n=zf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(os(i,e??{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function ek(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(xn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function tk(t,e,n){const r=gs(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Cx(e),{host:o,port:u}=nk(e),c=u===null?"":`:${u}`,d={url:`${i}//${o}${c}/`},p=Object.freeze({host:o,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(os(d,r.config.emulator)&&os(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Ti(o)?(nx(`${i}//${o}${c}`),rx("Auth",!0)):rk()}function Cx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nk(t){const e=Cx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:hy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:hy(o)}}}function hy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Gf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function sk(t,e){return Lr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ik(t,e){return _a(t,"POST","/v1/accounts:signInWithPassword",Vr(t,e))}/**
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
 */async function ok(t,e){return _a(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}async function ak(t,e){return _a(t,"POST","/v1/accounts:signInWithEmailLink",Vr(t,e))}/**
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
 */class Zo extends Gf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Zo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yh(e,n,"signInWithPassword",ik);case"emailLink":return ok(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yh(e,r,"signUpPassword",sk);case"emailLink":return ak(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zs(t,e){return _a(t,"POST","/v1/accounts:signInWithIdp",Vr(t,e))}/**
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
 */const lk="http://localhost";class ls extends Gf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ls(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zs(e,n)}buildRequest(){const e={requestUri:lk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ya(n)}return e}}/**
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
 */function uk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ck(t){const e=uo(co(t)).link,n=e?uo(co(e)).deep_link_id:null,r=uo(co(t)).deep_link_id;return(r?uo(co(r)).link:null)||r||n||e||t}class Kf{constructor(e){const n=uo(co(e)),r=n.apiKey??null,s=n.oobCode??null,i=uk(n.mode??null);G(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ck(e);try{return new Kf(n)}catch{return null}}}/**
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
 */class Si{constructor(){this.providerId=Si.PROVIDER_ID}static credential(e,n){return Zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kf.parseLink(n);return G(r,"argument-error"),Zo._fromEmailAndCode(e,r.code,r.tenantId)}}Si.PROVIDER_ID="password";Si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ax{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xa extends Ax{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends xa{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Xn extends xa{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Zn extends xa{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function dk(t,e){return _a(t,"POST","/v1/accounts:signUp",Vr(t,e))}/**
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
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),o=fy(r);return new us({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=fy(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function fy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class lu extends Vn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new lu(e,n,r,s)}}function Px(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lu._fromErrorAndOperation(t,i,e,r):i})}async function hk(t,e,n=!1){const r=await Xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function fk(t,e,n=!1){const{auth:r}=t;if(Pt(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await Xo(t,Px(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=Wf(i.idToken);G(o,r,"internal-error");const{sub:u}=o;return G(t.uid===u,r,"user-mismatch"),us._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
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
 */async function Rx(t,e,n=!1){if(Pt(t.app))return Promise.reject(En(t));const r="signIn",s=await Px(t,r,e),i=await us._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function pk(t,e){return Rx(gs(t),e)}/**
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
 */async function jx(t){const e=gs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mk(t,e,n){if(Pt(t.app))return Promise.reject(En(t));const r=gs(t),o=await yh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dk).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&jx(t),c}),u=await us._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(u.user),u}function gk(t,e,n){return Pt(t.app)?Promise.reject(En(t)):pk(lt(t),Si.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jx(t),r})}function yk(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function vk(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function qu(t,e,n,r){return lt(t).onAuthStateChanged(e,n,r)}function Dx(t){return lt(t).signOut()}const uu="__sak";/**
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
 */class Vx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uu,"1"),this.storage.removeItem(uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _k=1e3,xk=10;class Lx extends Vx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,u,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);FN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lx.type="LOCAL";const wk=Lx;/**
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
 */class Ox extends Vx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ox.type="SESSION";const Mx=Ox;/**
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
 */function Ek(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(o).map(async d=>d(n.origin,i)),c=await Ek(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wu.receivers=[];/**
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
 */function Qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Tk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((u,c)=>{const d=Qf("",20);s.port1.start();const p=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(g.data.response);break;default:clearTimeout(p),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function Ik(t){ln().location.href=t}/**
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
 */function Fx(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function Sk(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bk(){return navigator?.serviceWorker?.controller||null}function Nk(){return Fx()?self:null}/**
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
 */const Ux="firebaseLocalStorageDb",kk=1,cu="firebaseLocalStorage",Bx="fbase_key";class wa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hu(t,e){return t.transaction([cu],e?"readwrite":"readonly").objectStore(cu)}function Ck(){const t=indexedDB.deleteDatabase(Ux);return new wa(t).toPromise()}function vh(){const t=indexedDB.open(Ux,kk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cu,{keyPath:Bx})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cu)?e(r):(r.close(),await Ck(),e(await vh()))})})}async function py(t,e,n){const r=Hu(t,!0).put({[Bx]:e,value:n});return new wa(r).toPromise()}async function Ak(t,e){const n=Hu(t,!1).get(e),r=await new wa(n).toPromise();return r===void 0?null:r.value}function my(t,e){const n=Hu(t,!0).delete(e);return new wa(n).toPromise()}const Pk=800,Rk=3;class zx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Rk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wu._getInstance(Nk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Sk(),!this.activeServiceWorker)return;this.sender=new Tk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vh();return await py(e,uu,"1"),await my(e,uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>py(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ak(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>my(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Hu(s,!1).getAll();return new wa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zx.type="LOCAL";const jk=zx;new va(3e4,6e4);/**
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
 */function Dk(t,e){return e?xn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yf extends Gf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vk(t){return Rx(t.auth,new Yf(t),t.bypassAuthState)}function Lk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),fk(n,new Yf(t),t.bypassAuthState)}async function Ok(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),hk(n,new Yf(t),t.bypassAuthState)}/**
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
 */class $x{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:u}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vk;case"linkViaPopup":case"linkViaRedirect":return Ok;case"reauthViaPopup":case"reauthViaRedirect":return Lk;default:Qt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mk=new va(2e3,1e4);class qs extends $x{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qs.currentPopupAction&&qs.currentPopupAction.cancel(),qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mk.get())};e()}}qs.currentPopupAction=null;/**
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
 */const Fk="pendingRedirect",Tl=new Map;class Uk extends $x{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tl.get(this.auth._key());if(!e){try{const r=await Bk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tl.set(this.auth._key(),e)}return this.bypassAuthState||Tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bk(t,e){const n=qk(e),r=$k(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zk(t,e){Tl.set(t._key(),e)}function $k(t){return xn(t._redirectPersistence)}function qk(t){return El(Fk,t.config.apiKey,t.name)}async function Wk(t,e,n=!1){if(Pt(t.app))return Promise.reject(En(t));const r=gs(t),s=Dk(r,e),o=await new Uk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Hk=10*60*1e3;class Gk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!qx(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(an(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(gy(e))}saveEventToCache(e){this.cachedEventUids.add(gy(e)),this.lastProcessedEventTime=Date.now()}}function gy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qx({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Kk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qx(t);default:return!1}}/**
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
 */async function Qk(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
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
 */const Yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jk=/^https?/;async function Xk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qk(t);for(const n of e)try{if(Zk(n))return}catch{}Qt(t,"unauthorized-domain")}function Zk(t){const e=mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jk.test(n))return!1;if(Yk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const eC=new va(3e4,6e4);function yy(){const t=ln().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tC(t){return new Promise((e,n)=>{function r(){yy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yy(),n(an(t,"network-request-failed"))},timeout:eC.get()})}if(ln().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ln().gapi?.load)r();else{const s=KN("iframefcb");return ln()[s]=()=>{gapi.load?r():n(an(t,"network-request-failed"))},Nx(`${GN()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Il=null,e})}let Il=null;function nC(t){return Il=Il||tC(t),Il}/**
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
 */const rC=new va(5e3,15e3),sC="__/auth/iframe",iC="emulator/auth/iframe",oC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lC(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qf(e,iC):`https://${t.config.authDomain}/${sC}`,r={apiKey:e.apiKey,appName:t.name,v:Ii},s=aC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ya(r).slice(1)}`}async function uC(t){const e=await nC(t),n=ln().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:lC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),u=ln().setTimeout(()=>{i(o)},rC.get());function c(){ln().clearTimeout(u),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const cC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dC=500,hC=600,fC="_blank",pC="http://localhost";class vy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mC(t,e,n,r=dC,s=hC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c={...cC,width:r.toString(),height:s.toString(),top:i,left:o},d=at().toLowerCase();n&&(u=xx(d)?fC:n),vx(d)&&(e=e||pC,c.scrollbars="yes");const p=Object.entries(c).reduce((g,[S,k])=>`${g}${S}=${k},`,"");if(MN(d)&&u!=="_self")return gC(e||"",u),new vy(null);const m=window.open(e||"",u,p);G(m,t,"popup-blocked");try{m.focus()}catch{}return new vy(m)}function gC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yC="__/auth/handler",vC="emulator/auth/handler",_C=encodeURIComponent("fac");async function _y(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ii,eventId:s};if(e instanceof Ax){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ob(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof xa){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const u=o;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const c=await t._getAppCheckToken(),d=c?`#${_C}=${encodeURIComponent(c)}`:"";return`${xC(t)}?${ya(u).slice(1)}${d}`}function xC({config:t}){return t.emulator?qf(t,vC):`https://${t.authDomain}/${yC}`}/**
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
 */const ld="webStorageSupport";class wC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mx,this._completeRedirectFn=Wk,this._overrideRedirectResult=zk}async _openPopup(e,n,r,s){Cn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await _y(e,n,r,mh(),s);return mC(e,i,Qf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _y(e,n,r,mh(),s);return Ik(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uC(e),r=new Gk(e);return n.register("authEvent",s=>(G(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ld,{type:ld},s=>{const i=s?.[0]?.[ld];i!==void 0&&n(!!i),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sx()||_x()||Hf()}}const EC=wC;var xy="@firebase/auth",wy="1.12.0";/**
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
 */class TC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function SC(t){ci(new as("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bx(t)},d=new qN(r,s,i,c);return ek(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ci(new as("auth-internal",e=>{const n=gs(e.getProvider("auth").getImmediate());return(r=>new TC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mr(xy,wy,IC(t)),mr(xy,wy,"esm2020")}/**
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
 */const bC=5*60,NC=tx("authIdTokenMaxAge")||bC;let Ey=null;const kC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NC)return;const s=n?.token;Ey!==s&&(Ey=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function CC(t=ax()){const e=zf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZN(t,{popupRedirectResolver:EC,persistence:[jk,wk,Mx]}),r=tx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=kC(i.toString());vk(n,o,()=>o(n.currentUser)),yk(n,u=>o(u))}}const s=Z_("auth");return s&&tk(n,`http://${s}`),n}function AC(){return document.getElementsByTagName("head")?.[0]??document}WN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",AC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});SC("Browser");var PC="firebase",RC="12.9.0";/**
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
 */mr(PC,RC,"app");var Ty=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gr,Wx;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,v){function E(){}E.prototype=v.prototype,x.F=v.prototype,x.prototype=new E,x.prototype.constructor=x,x.D=function(b,N,C){for(var T=Array(arguments.length-2),He=2;He<arguments.length;He++)T[He-2]=arguments[He];return v.prototype[N].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,v,E){E||(E=0);const b=Array(16);if(typeof v=="string")for(var N=0;N<16;++N)b[N]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(N=0;N<16;++N)b[N]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=x.g[0],E=x.g[1],N=x.g[2];let C=x.g[3],T;T=v+(C^E&(N^C))+b[0]+3614090360&4294967295,v=E+(T<<7&4294967295|T>>>25),T=C+(N^v&(E^N))+b[1]+3905402710&4294967295,C=v+(T<<12&4294967295|T>>>20),T=N+(E^C&(v^E))+b[2]+606105819&4294967295,N=C+(T<<17&4294967295|T>>>15),T=E+(v^N&(C^v))+b[3]+3250441966&4294967295,E=N+(T<<22&4294967295|T>>>10),T=v+(C^E&(N^C))+b[4]+4118548399&4294967295,v=E+(T<<7&4294967295|T>>>25),T=C+(N^v&(E^N))+b[5]+1200080426&4294967295,C=v+(T<<12&4294967295|T>>>20),T=N+(E^C&(v^E))+b[6]+2821735955&4294967295,N=C+(T<<17&4294967295|T>>>15),T=E+(v^N&(C^v))+b[7]+4249261313&4294967295,E=N+(T<<22&4294967295|T>>>10),T=v+(C^E&(N^C))+b[8]+1770035416&4294967295,v=E+(T<<7&4294967295|T>>>25),T=C+(N^v&(E^N))+b[9]+2336552879&4294967295,C=v+(T<<12&4294967295|T>>>20),T=N+(E^C&(v^E))+b[10]+4294925233&4294967295,N=C+(T<<17&4294967295|T>>>15),T=E+(v^N&(C^v))+b[11]+2304563134&4294967295,E=N+(T<<22&4294967295|T>>>10),T=v+(C^E&(N^C))+b[12]+1804603682&4294967295,v=E+(T<<7&4294967295|T>>>25),T=C+(N^v&(E^N))+b[13]+4254626195&4294967295,C=v+(T<<12&4294967295|T>>>20),T=N+(E^C&(v^E))+b[14]+2792965006&4294967295,N=C+(T<<17&4294967295|T>>>15),T=E+(v^N&(C^v))+b[15]+1236535329&4294967295,E=N+(T<<22&4294967295|T>>>10),T=v+(N^C&(E^N))+b[1]+4129170786&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^N&(v^E))+b[6]+3225465664&4294967295,C=v+(T<<9&4294967295|T>>>23),T=N+(v^E&(C^v))+b[11]+643717713&4294967295,N=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(N^C))+b[0]+3921069994&4294967295,E=N+(T<<20&4294967295|T>>>12),T=v+(N^C&(E^N))+b[5]+3593408605&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^N&(v^E))+b[10]+38016083&4294967295,C=v+(T<<9&4294967295|T>>>23),T=N+(v^E&(C^v))+b[15]+3634488961&4294967295,N=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(N^C))+b[4]+3889429448&4294967295,E=N+(T<<20&4294967295|T>>>12),T=v+(N^C&(E^N))+b[9]+568446438&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^N&(v^E))+b[14]+3275163606&4294967295,C=v+(T<<9&4294967295|T>>>23),T=N+(v^E&(C^v))+b[3]+4107603335&4294967295,N=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(N^C))+b[8]+1163531501&4294967295,E=N+(T<<20&4294967295|T>>>12),T=v+(N^C&(E^N))+b[13]+2850285829&4294967295,v=E+(T<<5&4294967295|T>>>27),T=C+(E^N&(v^E))+b[2]+4243563512&4294967295,C=v+(T<<9&4294967295|T>>>23),T=N+(v^E&(C^v))+b[7]+1735328473&4294967295,N=C+(T<<14&4294967295|T>>>18),T=E+(C^v&(N^C))+b[12]+2368359562&4294967295,E=N+(T<<20&4294967295|T>>>12),T=v+(E^N^C)+b[5]+4294588738&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^N)+b[8]+2272392833&4294967295,C=v+(T<<11&4294967295|T>>>21),T=N+(C^v^E)+b[11]+1839030562&4294967295,N=C+(T<<16&4294967295|T>>>16),T=E+(N^C^v)+b[14]+4259657740&4294967295,E=N+(T<<23&4294967295|T>>>9),T=v+(E^N^C)+b[1]+2763975236&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^N)+b[4]+1272893353&4294967295,C=v+(T<<11&4294967295|T>>>21),T=N+(C^v^E)+b[7]+4139469664&4294967295,N=C+(T<<16&4294967295|T>>>16),T=E+(N^C^v)+b[10]+3200236656&4294967295,E=N+(T<<23&4294967295|T>>>9),T=v+(E^N^C)+b[13]+681279174&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^N)+b[0]+3936430074&4294967295,C=v+(T<<11&4294967295|T>>>21),T=N+(C^v^E)+b[3]+3572445317&4294967295,N=C+(T<<16&4294967295|T>>>16),T=E+(N^C^v)+b[6]+76029189&4294967295,E=N+(T<<23&4294967295|T>>>9),T=v+(E^N^C)+b[9]+3654602809&4294967295,v=E+(T<<4&4294967295|T>>>28),T=C+(v^E^N)+b[12]+3873151461&4294967295,C=v+(T<<11&4294967295|T>>>21),T=N+(C^v^E)+b[15]+530742520&4294967295,N=C+(T<<16&4294967295|T>>>16),T=E+(N^C^v)+b[2]+3299628645&4294967295,E=N+(T<<23&4294967295|T>>>9),T=v+(N^(E|~C))+b[0]+4096336452&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~N))+b[7]+1126891415&4294967295,C=v+(T<<10&4294967295|T>>>22),T=N+(v^(C|~E))+b[14]+2878612391&4294967295,N=C+(T<<15&4294967295|T>>>17),T=E+(C^(N|~v))+b[5]+4237533241&4294967295,E=N+(T<<21&4294967295|T>>>11),T=v+(N^(E|~C))+b[12]+1700485571&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~N))+b[3]+2399980690&4294967295,C=v+(T<<10&4294967295|T>>>22),T=N+(v^(C|~E))+b[10]+4293915773&4294967295,N=C+(T<<15&4294967295|T>>>17),T=E+(C^(N|~v))+b[1]+2240044497&4294967295,E=N+(T<<21&4294967295|T>>>11),T=v+(N^(E|~C))+b[8]+1873313359&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~N))+b[15]+4264355552&4294967295,C=v+(T<<10&4294967295|T>>>22),T=N+(v^(C|~E))+b[6]+2734768916&4294967295,N=C+(T<<15&4294967295|T>>>17),T=E+(C^(N|~v))+b[13]+1309151649&4294967295,E=N+(T<<21&4294967295|T>>>11),T=v+(N^(E|~C))+b[4]+4149444226&4294967295,v=E+(T<<6&4294967295|T>>>26),T=C+(E^(v|~N))+b[11]+3174756917&4294967295,C=v+(T<<10&4294967295|T>>>22),T=N+(v^(C|~E))+b[2]+718787259&4294967295,N=C+(T<<15&4294967295|T>>>17),T=E+(C^(N|~v))+b[9]+3951481745&4294967295,x.g[0]=x.g[0]+v&4294967295,x.g[1]=x.g[1]+(N+(T<<21&4294967295|T>>>11))&4294967295,x.g[2]=x.g[2]+N&4294967295,x.g[3]=x.g[3]+C&4294967295}r.prototype.v=function(x,v){v===void 0&&(v=x.length);const E=v-this.blockSize,b=this.C;let N=this.h,C=0;for(;C<v;){if(N==0)for(;C<=E;)s(this,x,C),C+=this.blockSize;if(typeof x=="string"){for(;C<v;)if(b[N++]=x.charCodeAt(C++),N==this.blockSize){s(this,b),N=0;break}}else for(;C<v;)if(b[N++]=x[C++],N==this.blockSize){s(this,b),N=0;break}}this.h=N,this.o+=v},r.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var v=1;v<x.length-8;++v)x[v]=0;v=this.o*8;for(var E=x.length-8;E<x.length;++E)x[E]=v&255,v/=256;for(this.v(x),x=Array(16),v=0,E=0;E<4;++E)for(let b=0;b<32;b+=8)x[v++]=this.g[E]>>>b&255;return x};function i(x,v){var E=u;return Object.prototype.hasOwnProperty.call(E,x)?E[x]:E[x]=v(x)}function o(x,v){this.h=v;const E=[];let b=!0;for(let N=x.length-1;N>=0;N--){const C=x[N]|0;b&&C==v||(E[N]=C,b=!1)}this.g=E}var u={};function c(x){return-128<=x&&x<128?i(x,function(v){return new o([v|0],v<0?-1:0)}):new o([x|0],x<0?-1:0)}function d(x){if(isNaN(x)||!isFinite(x))return m;if(x<0)return j(d(-x));const v=[];let E=1;for(let b=0;x>=E;b++)v[b]=x/E|0,E*=4294967296;return new o(v,0)}function p(x,v){if(x.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(x.charAt(0)=="-")return j(p(x.substring(1),v));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=d(Math.pow(v,8));let b=m;for(let C=0;C<x.length;C+=8){var N=Math.min(8,x.length-C);const T=parseInt(x.substring(C,C+N),v);N<8?(N=d(Math.pow(v,N)),b=b.j(N).add(d(T))):(b=b.j(E),b=b.add(d(T)))}return b}var m=c(0),g=c(1),S=c(16777216);t=o.prototype,t.m=function(){if(A(this))return-j(this).m();let x=0,v=1;for(let E=0;E<this.g.length;E++){const b=this.i(E);x+=(b>=0?b:4294967296+b)*v,v*=4294967296}return x},t.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(k(this))return"0";if(A(this))return"-"+j(this).toString(x);const v=d(Math.pow(x,6));var E=this;let b="";for(;;){const N=D(E,v).g;E=w(E,N.j(v));let C=((E.g.length>0?E.g[0]:E.h)>>>0).toString(x);if(E=N,k(E))return C+b;for(;C.length<6;)C="0"+C;b=C+b}},t.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function k(x){if(x.h!=0)return!1;for(let v=0;v<x.g.length;v++)if(x.g[v]!=0)return!1;return!0}function A(x){return x.h==-1}t.l=function(x){return x=w(this,x),A(x)?-1:k(x)?0:1};function j(x){const v=x.g.length,E=[];for(let b=0;b<v;b++)E[b]=~x.g[b];return new o(E,~x.h).add(g)}t.abs=function(){return A(this)?j(this):this},t.add=function(x){const v=Math.max(this.g.length,x.g.length),E=[];let b=0;for(let N=0;N<=v;N++){let C=b+(this.i(N)&65535)+(x.i(N)&65535),T=(C>>>16)+(this.i(N)>>>16)+(x.i(N)>>>16);b=T>>>16,C&=65535,T&=65535,E[N]=T<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(x,v){return x.add(j(v))}t.j=function(x){if(k(this)||k(x))return m;if(A(this))return A(x)?j(this).j(j(x)):j(j(this).j(x));if(A(x))return j(this.j(j(x)));if(this.l(S)<0&&x.l(S)<0)return d(this.m()*x.m());const v=this.g.length+x.g.length,E=[];for(var b=0;b<2*v;b++)E[b]=0;for(b=0;b<this.g.length;b++)for(let N=0;N<x.g.length;N++){const C=this.i(b)>>>16,T=this.i(b)&65535,He=x.i(N)>>>16,pn=x.i(N)&65535;E[2*b+2*N]+=T*pn,_(E,2*b+2*N),E[2*b+2*N+1]+=C*pn,_(E,2*b+2*N+1),E[2*b+2*N+1]+=T*He,_(E,2*b+2*N+1),E[2*b+2*N+2]+=C*He,_(E,2*b+2*N+2)}for(x=0;x<v;x++)E[x]=E[2*x+1]<<16|E[2*x];for(x=v;x<2*v;x++)E[x]=0;return new o(E,0)};function _(x,v){for(;(x[v]&65535)!=x[v];)x[v+1]+=x[v]>>>16,x[v]&=65535,v++}function I(x,v){this.g=x,this.h=v}function D(x,v){if(k(v))throw Error("division by zero");if(k(x))return new I(m,m);if(A(x))return v=D(j(x),v),new I(j(v.g),j(v.h));if(A(v))return v=D(x,j(v)),new I(j(v.g),v.h);if(x.g.length>30){if(A(x)||A(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,b=v;b.l(x)<=0;)E=F(E),b=F(b);var N=B(E,1),C=B(b,1);for(b=B(b,2),E=B(E,2);!k(b);){var T=C.add(b);T.l(x)<=0&&(N=N.add(E),C=T),b=B(b,1),E=B(E,1)}return v=w(x,N.j(v)),new I(N,v)}for(N=m;x.l(v)>=0;){for(E=Math.max(1,Math.floor(x.m()/v.m())),b=Math.ceil(Math.log(E)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),C=d(E),T=C.j(v);A(T)||T.l(x)>0;)E-=b,C=d(E),T=C.j(v);k(C)&&(C=g),N=N.add(C),x=w(x,T)}return new I(N,x)}t.B=function(x){return D(this,x).h},t.and=function(x){const v=Math.max(this.g.length,x.g.length),E=[];for(let b=0;b<v;b++)E[b]=this.i(b)&x.i(b);return new o(E,this.h&x.h)},t.or=function(x){const v=Math.max(this.g.length,x.g.length),E=[];for(let b=0;b<v;b++)E[b]=this.i(b)|x.i(b);return new o(E,this.h|x.h)},t.xor=function(x){const v=Math.max(this.g.length,x.g.length),E=[];for(let b=0;b<v;b++)E[b]=this.i(b)^x.i(b);return new o(E,this.h^x.h)};function F(x){const v=x.g.length+1,E=[];for(let b=0;b<v;b++)E[b]=x.i(b)<<1|x.i(b-1)>>>31;return new o(E,x.h)}function B(x,v){const E=v>>5;v%=32;const b=x.g.length-E,N=[];for(let C=0;C<b;C++)N[C]=v>0?x.i(C+E)>>>v|x.i(C+E+1)<<32-v:x.i(C+E);return new o(N,x.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Wx=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,gr=o}).apply(typeof Ty<"u"?Ty:typeof self<"u"?self:typeof window<"u"?window:{});var rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hx,ho,Gx,Sl,_h,Kx,Qx,Yx;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof rl=="object"&&rl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in f))break e;f=f[P]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,f){return a.call.apply(a.bind,arguments)}function d(a,h,f){return d=c,d.apply(null,arguments)}function p(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,P,R){for(var U=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)U[ee-2]=arguments[ee];return h.prototype[P].apply(y,U)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function k(a,h){for(let y=1;y<arguments.length;y++){const P=arguments[y];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=a.length||0;const R=P.length||0;a.length=f+R;for(let U=0;U<R;U++)a[f+U]=P[U]}else a.push(P)}}class A{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function j(a){o.setTimeout(()=>{throw a},0)}function w(){var a=x;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,f){const y=I.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var I=new A(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let F,B=!1,x=new _,v=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(E)}};function E(){for(var a;a=w();){try{a.h.call(a.g)}catch(f){j(f)}var h=I;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}B=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function He(a,h){N.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(He,N),He.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var pn="closure_listenable_"+(Math.random()*1e6|0),Pi=0;function Ri(a,h,f,y,P){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=P,this.key=++Pi,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function Z(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _e(a){const h={};for(const f in a)h[f]=a[f];return h}const Ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Or(a,h){let f,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(f in y)a[f]=y[f];for(let R=0;R<Ne.length;R++)f=Ne[R],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function kt(a){this.src=a,this.g={},this.h=0}kt.prototype.add=function(a,h,f,y,P){const R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);const U=Mt(a,h,y,P);return U>-1?(h=a[U],f||(h.fa=!1)):(h=new Ri(h,this.src,R,!!y,P),h.fa=f,a.push(h)),h};function Mr(a,h){const f=h.type;if(f in a.g){var y=a.g[f],P=Array.prototype.indexOf.call(y,h,void 0),R;(R=P>=0)&&Array.prototype.splice.call(y,P,1),R&&($(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Mt(a,h,f,y){for(let P=0;P<a.length;++P){const R=a[P];if(!R.da&&R.listener==h&&R.capture==!!f&&R.ha==y)return P}return-1}var Ln="closure_lm_"+(Math.random()*1e6|0),lc={};function Ap(a,h,f,y,P){if(Array.isArray(h)){for(let R=0;R<h.length;R++)Ap(a,h[R],f,y,P);return null}return f=jp(f),a&&a[pn]?a.J(h,f,u(y)?!!y.capture:!1,P):D1(a,h,f,!1,y,P)}function D1(a,h,f,y,P,R){if(!h)throw Error("Invalid event type");const U=u(P)?!!P.capture:!!P;let ee=cc(a);if(ee||(a[Ln]=ee=new kt(a)),f=ee.add(h,f,y,U,R),f.proxy)return f;if(y=V1(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)C||(P=U),P===void 0&&(P=!1),a.addEventListener(h.toString(),y,P);else if(a.attachEvent)a.attachEvent(Rp(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function V1(){function a(f){return h.call(a.src,a.listener,f)}const h=L1;return a}function Pp(a,h,f,y,P){if(Array.isArray(h))for(var R=0;R<h.length;R++)Pp(a,h[R],f,y,P);else y=u(y)?!!y.capture:!!y,f=jp(f),a&&a[pn]?(a=a.i,R=String(h).toString(),R in a.g&&(h=a.g[R],f=Mt(h,f,y,P),f>-1&&($(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[R],a.h--)))):a&&(a=cc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Mt(h,f,y,P)),(f=a>-1?h[a]:null)&&uc(f))}function uc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[pn])Mr(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Rp(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=cc(h))?(Mr(f,a),f.h==0&&(f.src=null,h[Ln]=null)):$(a)}}}function Rp(a){return a in lc?lc[a]:lc[a]="on"+a}function L1(a,h){if(a.da)a=!0;else{h=new He(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&uc(a),a=f.call(y,h)}return a}function cc(a){return a=a[Ln],a instanceof kt?a:null}var dc="__closure_events_fn_"+(Math.random()*1e9>>>0);function jp(a){return typeof a=="function"?a:(a[dc]||(a[dc]=function(h){return a.handleEvent(h)}),a[dc])}function Ze(){b.call(this),this.i=new kt(this),this.M=this,this.G=null}m(Ze,b),Ze.prototype[pn]=!0,Ze.prototype.removeEventListener=function(a,h,f,y){Pp(this,a,h,f,y)};function ut(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new N(h,a);else if(h instanceof N)h.target=h.target||a;else{var P=h;h=new N(y,a),Or(h,P)}P=!0;let R,U;if(f)for(U=f.length-1;U>=0;U--)R=h.g=f[U],P=Na(R,y,!0,h)&&P;if(R=h.g=a,P=Na(R,y,!0,h)&&P,P=Na(R,y,!1,h)&&P,f)for(U=0;U<f.length;U++)R=h.g=f[U],P=Na(R,y,!1,h)&&P}Ze.prototype.N=function(){if(Ze.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)$(f[y]);delete a.g[h],a.h--}}this.G=null},Ze.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Ze.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Na(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let R=0;R<h.length;++R){const U=h[R];if(U&&!U.da&&U.capture==f){const ee=U.listener,Oe=U.ha||U.src;U.fa&&Mr(a.i,U),P=ee.call(Oe,y)!==!1&&P}}return P&&!y.defaultPrevented}function O1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Dp(a){a.g=O1(()=>{a.g=null,a.i&&(a.i=!1,Dp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class M1 extends b{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Dp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(a){b.call(this),this.h=a,this.g={}}m(ji,b);var Vp=[];function Lp(a){Q(a.g,function(h,f){this.g.hasOwnProperty(f)&&uc(h)},a),a.g={}}ji.prototype.N=function(){ji.Z.N.call(this),Lp(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hc=o.JSON.stringify,F1=o.JSON.parse,U1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Op(){}function Mp(){}var Di={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function fc(){N.call(this,"d")}m(fc,N);function pc(){N.call(this,"c")}m(pc,N);var Fr={},Fp=null;function ka(){return Fp=Fp||new Ze}Fr.Ia="serverreachability";function Up(a){N.call(this,Fr.Ia,a)}m(Up,N);function Vi(a){const h=ka();ut(h,new Up(h))}Fr.STAT_EVENT="statevent";function Bp(a,h){N.call(this,Fr.STAT_EVENT,a),this.stat=h}m(Bp,N);function ct(a){const h=ka();ut(h,new Bp(h,a))}Fr.Ja="timingevent";function zp(a,h){N.call(this,Fr.Ja,a),this.size=h}m(zp,N);function Li(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Oi(){this.g=!0}Oi.prototype.ua=function(){this.g=!1};function B1(a,h,f,y,P,R){a.info(function(){if(a.g)if(R){var U="",ee=R.split("&");for(let ce=0;ce<ee.length;ce++){var Oe=ee[ce].split("=");if(Oe.length>1){const Be=Oe[0];Oe=Oe[1];const Xt=Be.split("_");U=Xt.length>=2&&Xt[1]=="type"?U+(Be+"="+Oe+"&"):U+(Be+"=redacted&")}}}else U=null;else U=R;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+h+`
`+f+`
`+U})}function z1(a,h,f,y,P,R,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+h+`
`+f+`
`+R+" "+U})}function Es(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+q1(a,f)+(y?" "+y:"")})}function $1(a,h){a.info(function(){return"TIMEOUT: "+h})}Oi.prototype.info=function(){};function q1(a,h){if(!a.g)return h;if(!h)return null;try{const R=JSON.parse(h);if(R){for(a=0;a<R.length;a++)if(Array.isArray(R[a])){var f=R[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var P=y[0];if(P!="noop"&&P!="stop"&&P!="close")for(let U=1;U<y.length;U++)y[U]=""}}}}return hc(R)}catch{return h}}var Ca={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},$p={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qp;function mc(){}m(mc,Op),mc.prototype.g=function(){return new XMLHttpRequest},qp=new mc;function Mi(a){return encodeURIComponent(String(a))}function W1(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function On(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new ji(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wp}function Wp(){this.i=null,this.g="",this.h=!1}var Hp={},gc={};function yc(a,h,f){a.M=1,a.A=Pa(Jt(h)),a.u=f,a.R=!0,Gp(a,null)}function Gp(a,h){a.F=Date.now(),Aa(a),a.B=Jt(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),om(f.i,"t",y),a.C=0,f=a.j.L,a.h=new Wp,a.g=Im(a.j,f?h:null,!a.u),a.P>0&&(a.O=new M1(d(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Vp[0]=P.toString()),P=Vp);for(let R=0;R<P.length;R++){const U=Ap(f,P[R],y||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.J?_e(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Vi(),B1(a.i,a.v,a.B,a.l,a.S,a.u)}On.prototype.ba=function(a){a=a.target;const h=this.O;h&&Un(a)==3?h.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Un(this.g),Oe=this.g.ya(),ce=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||fm(this.g)))){this.K||ee!=4||Oe==7||(Oe==8||ce<=0?Vi(3):Vi(2)),vc(this);var h=this.g.ca();this.X=h;var f=H1(this);if(this.o=h==200,z1(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,P=this.g;if((y=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var R=y;break t}}R=null}if(a=R)Es(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_c(this,a);else{this.o=!1,this.m=3,ct(12),Ur(this),Fi(this);break e}}if(this.R){a=!0;let Be;for(;!this.K&&this.C<f.length;)if(Be=G1(this,f),Be==gc){ee==4&&(this.m=4,ct(14),a=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==Hp){this.m=4,ct(15),Es(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Es(this.i,this.l,Be,null),_c(this,Be);if(Kp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||f.length!=0||this.h.h||(this.m=1,ct(16),a=!1),this.o=this.o&&a,!a)Es(this.i,this.l,f,"[Invalid Chunked Response]"),Ur(this),Fi(this);else if(f.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Nc(U),U.P=!0,ct(11))}}else Es(this.i,this.l,f,null),_c(this,f);ee==4&&Ur(this),this.o&&!this.K&&(ee==4?xm(this.j,this):(this.o=!1,Aa(this)))}else aE(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ct(12)):(this.m=0,ct(13)),Ur(this),Fi(this)}}}catch{}finally{}};function H1(a){if(!Kp(a))return a.g.la();const h=fm(a.g);if(h==="")return"";let f="";const y=h.length,P=Un(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ur(a),Fi(a),"";a.h.i=new o.TextDecoder}for(let R=0;R<y;R++)a.h.h=!0,f+=a.h.i.decode(h[R],{stream:!(P&&R==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Kp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function G1(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?gc:(f=Number(h.substring(f,y)),isNaN(f)?Hp:(y+=1,y+f>h.length?gc:(h=h.slice(y,y+f),a.C=y+f,h)))}On.prototype.cancel=function(){this.K=!0,Ur(this)};function Aa(a){a.T=Date.now()+a.H,Qp(a,a.H)}function Qp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Li(d(a.aa,a),h)}function vc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}On.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?($1(this.i,this.B),this.M!=2&&(Vi(),ct(17)),Ur(this),this.m=2,Fi(this)):Qp(this,this.T-a)};function Fi(a){a.j.I==0||a.K||xm(a.j,a)}function Ur(a){vc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Lp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function _c(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||xc(f.h,a))){if(!a.L&&xc(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)La(f),Da(f);else break e;bc(f),ct(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Li(d(f.Va,f),6e3));Xp(f.h)<=1&&f.ta&&(f.ta=void 0)}else zr(f,11)}else if((a.L||f.g==a)&&La(f),!T(h))for(P=f.Ba.g.parse(h),h=0;h<P.length;h++){let ce=P[h];const Be=ce[0];if(!(Be<=f.K))if(f.K=Be,ce=ce[1],f.I==2)if(ce[0]=="c"){f.M=ce[1],f.ba=ce[2];const Xt=ce[3];Xt!=null&&(f.ka=Xt,f.j.info("VER="+f.ka));const $r=ce[4];$r!=null&&(f.za=$r,f.j.info("SVER="+f.za));const Bn=ce[5];Bn!=null&&typeof Bn=="number"&&Bn>0&&(y=1.5*Bn,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const zn=a.g;if(zn){const Ma=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ma){var R=y.h;R.g||Ma.indexOf("spdy")==-1&&Ma.indexOf("quic")==-1&&Ma.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(wc(R,R.h),R.h=null))}if(y.G){const kc=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;kc&&(y.wa=kc,pe(y.J,y.G,kc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var U=a;if(y.na=Tm(y,y.L?y.ba:null,y.W),U.L){Zp(y.h,U);var ee=U,Oe=y.O;Oe&&(ee.H=Oe),ee.D&&(vc(ee),Aa(ee)),y.g=U}else vm(y);f.i.length>0&&Va(f)}else ce[0]!="stop"&&ce[0]!="close"||zr(f,7);else f.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?zr(f,7):Sc(f):ce[0]!="noop"&&f.l&&f.l.qa(ce),f.A=0)}}Vi(4)}catch{}}var K1=class{constructor(a,h){this.g=a,this.map=h}};function Yp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Jp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xp(a){return a.h?1:a.g?a.g.size:0}function xc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function wc(a,h){a.g?a.g.add(h):a.h=h}function Zp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Yp.prototype.cancel=function(){if(this.i=em(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function em(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return S(a.i)}var tm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Q1(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let P,R=null;y>=0?(P=a[f].substring(0,y),R=a[f].substring(y+1)):P=a[f],h(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Mn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Mn?(this.l=a.l,Ui(this,a.j),this.o=a.o,this.g=a.g,Bi(this,a.u),this.h=a.h,Ec(this,am(a.i)),this.m=a.m):a&&(h=String(a).match(tm))?(this.l=!1,Ui(this,h[1]||"",!0),this.o=zi(h[2]||""),this.g=zi(h[3]||"",!0),Bi(this,h[4]),this.h=zi(h[5]||"",!0),Ec(this,h[6]||"",!0),this.m=zi(h[7]||"")):(this.l=!1,this.i=new qi(null,this.l))}Mn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push($i(h,nm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push($i(h,nm,!0),"@"),a.push(Mi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push($i(f,f.charAt(0)=="/"?X1:J1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",$i(f,eE)),a.join("")},Mn.prototype.resolve=function(a){const h=Jt(this);let f=!!a.j;f?Ui(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)Bi(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var P=h.h.lastIndexOf("/");P!=-1&&(y=h.h.slice(0,P+1)+y)}if(P=y,P==".."||P==".")y="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){y=P.lastIndexOf("/",0)==0,P=P.split("/");const R=[];for(let U=0;U<P.length;){const ee=P[U++];ee=="."?y&&U==P.length&&R.push(""):ee==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),y&&U==P.length&&R.push("")):(R.push(ee),y=!0)}y=R.join("/")}else y=P}return f?h.h=y:f=a.i.toString()!=="",f?Ec(h,am(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Jt(a){return new Mn(a)}function Ui(a,h,f){a.j=f?zi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Bi(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Ec(a,h,f){h instanceof qi?(a.i=h,tE(a.i,a.l)):(f||(h=$i(h,Z1)),a.i=new qi(h,a.l))}function pe(a,h,f){a.i.set(h,f)}function Pa(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function zi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $i(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Y1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Y1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nm=/[#\/\?@]/g,J1=/[#\?:]/g,X1=/[#\?]/g,Z1=/[#\?@]/g,eE=/#/g;function qi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Br(a){a.g||(a.g=new Map,a.h=0,a.i&&Q1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=qi.prototype,t.add=function(a,h){Br(this),this.i=null,a=Ts(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function rm(a,h){Br(a),h=Ts(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function sm(a,h){return Br(a),h=Ts(a,h),a.g.has(h)}t.forEach=function(a,h){Br(this),this.g.forEach(function(f,y){f.forEach(function(P){a.call(h,P,y,this)},this)},this)};function im(a,h){Br(a);let f=[];if(typeof h=="string")sm(a,h)&&(f=f.concat(a.g.get(Ts(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Br(this),this.i=null,a=Ts(this,a),sm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=im(this,a),a.length>0?String(a[0]):h):h};function om(a,h,f){rm(a,h),f.length>0&&(a.i=null,a.g.set(Ts(a,h),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const P=Mi(f);f=im(this,f);for(let R=0;R<f.length;R++){let U=P;f[R]!==""&&(U+="="+Mi(f[R])),a.push(U)}}return this.i=a.join("&")};function am(a){const h=new qi;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ts(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function tE(a,h){h&&!a.j&&(Br(a),a.i=null,a.g.forEach(function(f,y){const P=y.toLowerCase();y!=P&&(rm(this,y),om(this,P,f))},a)),a.j=h}function nE(a,h){const f=new Oi;if(o.Image){const y=new Image;y.onload=p(Fn,f,"TestLoadImage: loaded",!0,h,y),y.onerror=p(Fn,f,"TestLoadImage: error",!1,h,y),y.onabort=p(Fn,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=p(Fn,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function rE(a,h){const f=new Oi,y=new AbortController,P=setTimeout(()=>{y.abort(),Fn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(R=>{clearTimeout(P),R.ok?Fn(f,"TestPingServer: ok",!0,h):Fn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Fn(f,"TestPingServer: error",!1,h)})}function Fn(a,h,f,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(f)}catch{}}function sE(){this.g=new U1}function Tc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Tc,Op),Tc.prototype.g=function(){return new Ra(this.i,this.h)};function Ra(a,h){Ze.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ra,Ze),t=Ra.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Hi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Wi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hi(this)),this.g&&(this.readyState=3,Hi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function lm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Wi(this):Hi(this),this.readyState==3&&lm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Wi(this))},t.Na=function(a){this.g&&(this.response=a,Wi(this))},t.ga=function(){this.g&&Wi(this)};function Wi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Hi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Hi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function um(a){let h="";return Q(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Ic(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=um(f),typeof a=="string"?f!=null&&Mi(f):pe(a,h,f))}function Se(a){Ze.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Se,Ze);var iE=/^https?$/i,oE=["POST","PUT"];t=Se.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qp.g(),this.g.onreadystatechange=g(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(R){cm(this,R);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)f.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const R of y.keys())f.set(R,y.get(R));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(R=>R.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(oE,h,void 0)>=0)||y||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,U]of f)this.g.setRequestHeader(R,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(R){cm(this,R)}};function cm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,dm(a),ja(a)}function dm(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ut(this,"complete"),ut(this,"abort"),ja(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ja(this,!0)),Se.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?hm(this):this.Xa())},t.Xa=function(){hm(this)};function hm(a){if(a.h&&typeof i<"u"){if(a.v&&Un(a)==4)setTimeout(a.Ca.bind(a),0);else if(ut(a,"readystatechange"),Un(a)==4){a.h=!1;try{const R=a.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=R===0){let U=String(a.D).match(tm)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),y=!iE.test(U?U.toLowerCase():"")}f=y}if(f)ut(a,"complete"),ut(a,"success");else{a.o=6;try{var P=Un(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",dm(a)}}finally{ja(a)}}}}function ja(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||ut(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Un(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),F1(h)}};function fm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function aE(a){const h={};a=(a.g&&Un(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(T(a[y]))continue;var f=W1(a[y]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const R=h[P]||[];h[P]=R,R.push(f)}Z(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function pm(a){this.za=0,this.i=[],this.j=new Oi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gi("baseRetryDelayMs",5e3,a),this.Za=Gi("retryDelaySeedMs",1e4,a),this.Ta=Gi("forwardChannelMaxRetries",2,a),this.va=Gi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Yp(a&&a.concurrentRequestLimit),this.Ba=new sE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=pm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,y){ct(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=Tm(this,null,this.W),Va(this)};function Sc(a){if(mm(a),a.I==3){var h=a.V++,f=Jt(a.J);if(pe(f,"SID",a.M),pe(f,"RID",h),pe(f,"TYPE","terminate"),Ki(a,f),h=new On(a,a.j,h),h.M=2,h.A=Pa(Jt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Im(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Aa(h)}Em(a)}function Da(a){a.g&&(Nc(a),a.g.cancel(),a.g=null)}function mm(a){Da(a),a.v&&(o.clearTimeout(a.v),a.v=null),La(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Va(a){if(!Jp(a.h)&&!a.m){a.m=!0;var h=a.Ea;F||v(),B||(F(),B=!0),x.add(h,a),a.D=0}}function lE(a,h){return Xp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Li(d(a.Ea,a,h),wm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new On(this,this.j,a);let R=this.o;if(this.U&&(R?(R=_e(R),Or(R,this.U)):R=this.U),this.u!==null||this.R||(P.J=R,R=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=ym(this,P,h),f=Jt(this.J),pe(f,"RID",a),pe(f,"CVER",22),this.G&&pe(f,"X-HTTP-Session-Id",this.G),Ki(this,f),R&&(this.R?h="headers="+Mi(um(R))+"&"+h:this.u&&Ic(f,this.u,R)),wc(this.h,P),this.Ra&&pe(f,"TYPE","init"),this.S?(pe(f,"$req",h),pe(f,"SID","null"),P.U=!0,yc(P,f,null)):yc(P,f,h),this.I=2}}else this.I==3&&(a?gm(this,a):this.i.length==0||Jp(this.h)||gm(this))};function gm(a,h){var f;h?f=h.l:f=a.V++;const y=Jt(a.J);pe(y,"SID",a.M),pe(y,"RID",f),pe(y,"AID",a.K),Ki(a,y),a.u&&a.o&&Ic(y,a.u,a.o),f=new On(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=ym(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),wc(a.h,f),yc(f,y,h)}function Ki(a,h){a.H&&Q(a.H,function(f,y){pe(h,y,f)}),a.l&&Q({},function(f,y){pe(h,y,f)})}function ym(a,h,f){f=Math.min(a.i.length,f);const y=a.l?d(a.l.Ka,a.l,a):null;e:{var P=a.i;let ee=-1;for(;;){const Oe=["count="+f];ee==-1?f>0?(ee=P[0].g,Oe.push("ofs="+ee)):ee=0:Oe.push("ofs="+ee);let ce=!0;for(let Be=0;Be<f;Be++){var R=P[Be].g;const Xt=P[Be].map;if(R-=ee,R<0)ee=Math.max(0,P[Be].g-100),ce=!1;else try{R="req"+R+"_"||"";try{var U=Xt instanceof Map?Xt:Object.entries(Xt);for(const[$r,Bn]of U){let zn=Bn;u(Bn)&&(zn=hc(Bn)),Oe.push(R+$r+"="+encodeURIComponent(zn))}}catch($r){throw Oe.push(R+"type="+encodeURIComponent("_badmap")),$r}}catch{y&&y(Xt)}}if(ce){U=Oe.join("&");break e}}U=void 0}return a=a.i.splice(0,f),h.G=a,U}function vm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;F||v(),B||(F(),B=!0),x.add(h,a),a.A=0}}function bc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Li(d(a.Da,a),wm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,_m(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Li(d(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ct(10),Da(this),_m(this))};function Nc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function _m(a){a.g=new On(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Jt(a.na);pe(h,"RID","rpc"),pe(h,"SID",a.M),pe(h,"AID",a.K),pe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(h,"TO",a.ia),pe(h,"TYPE","xmlhttp"),Ki(a,h),a.u&&a.o&&Ic(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Pa(Jt(h)),f.u=null,f.R=!0,Gp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Da(this),bc(this),ct(19))};function La(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function xm(a,h){var f=null;if(a.g==h){La(a),Nc(a),a.g=null;var y=2}else if(xc(a.h,h))f=h.G,Zp(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var P=a.D;y=ka(),ut(y,new zp(y,f)),Va(a)}else vm(a);else if(P=h.m,P==3||P==0&&h.X>0||!(y==1&&lE(a,h)||y==2&&bc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),P){case 1:zr(a,5);break;case 4:zr(a,10);break;case 3:zr(a,6);break;default:zr(a,2)}}}function wm(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function zr(a,h){if(a.j.info("Error code "+h),h==2){var f=d(a.bb,a),y=a.Ua;const P=!y;y=new Mn(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ui(y,"https"),Pa(y),P?nE(y.toString(),f):rE(y.toString(),f)}else ct(2);a.I=0,a.l&&a.l.pa(h),Em(a),mm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Em(a){if(a.I=0,a.ja=[],a.l){const h=em(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function Tm(a,h,f){var y=f instanceof Mn?Jt(f):new Mn(f);if(y.g!="")h&&(y.g=h+"."+y.g),Bi(y,y.u);else{var P=o.location;y=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const R=new Mn(null);y&&Ui(R,y),h&&(R.g=h),P&&Bi(R,P),f&&(R.h=f),y=R}return f=a.G,h=a.wa,f&&h&&pe(y,f,h),pe(y,"VER",a.ka),Ki(a,y),y}function Im(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Se(new Tc({ab:f})):new Se(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sm(){}t=Sm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Oa(){}Oa.prototype.g=function(a,h){return new wt(a,h)};function wt(a,h){Ze.call(this),this.g=new pm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Is(this)}m(wt,Ze),wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Sc(this.g)},wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=hc(a),a=f);h.i.push(new K1(h.Ya++,a)),h.I==3&&Va(h)},wt.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,wt.Z.N.call(this)};function bm(a){fc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(bm,fc);function Nm(){pc.call(this),this.status=1}m(Nm,pc);function Is(a){this.g=a}m(Is,Sm),Is.prototype.ra=function(){ut(this.g,"a")},Is.prototype.qa=function(a){ut(this.g,new bm(a))},Is.prototype.pa=function(a){ut(this.g,new Nm)},Is.prototype.oa=function(){ut(this.g,"b")},Oa.prototype.createWebChannel=Oa.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Yx=function(){return new Oa},Qx=function(){return ka()},Kx=Fr,_h={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ca.NO_ERROR=0,Ca.TIMEOUT=8,Ca.HTTP_ERROR=6,Sl=Ca,$p.COMPLETE="complete",Gx=$p,Mp.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",Ze.prototype.listen=Ze.prototype.J,ho=Mp,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,Hx=Se}).apply(typeof rl<"u"?rl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */let bi="12.9.0";function jC(t){bi=t}/**
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
 */const cs=new Uf("@firebase/firestore");function ks(){return cs.logLevel}function q(t,...e){if(cs.logLevel<=ne.DEBUG){const n=e.map(Jf);cs.debug(`Firestore (${bi}): ${t}`,...n)}}function An(t,...e){if(cs.logLevel<=ne.ERROR){const n=e.map(Jf);cs.error(`Firestore (${bi}): ${t}`,...n)}}function ds(t,...e){if(cs.logLevel<=ne.WARN){const n=e.map(Jf);cs.warn(`Firestore (${bi}): ${t}`,...n)}}function Jf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Jx(t,r,n)}function Jx(t,e,n){let r=`FIRESTORE (${bi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw An(r),new Error(r)}function le(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Jx(e,s,r)}function J(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Xx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class VC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class LC{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},u=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new Xx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new rt(e)}}class OC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class MC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new OC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){le(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Iy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Iy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function UC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Xf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=UC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function xh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ud(s)===ud(i)?re(s,i):ud(s)?1:-1}return re(t.length,e.length)}const BC=55296,zC=57343;function ud(t){const e=t.charCodeAt(0);return e>=BC&&e<=zC}function di(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Sy="__name__";class nn{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=nn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return re(e.length,n.length)}static compareSegments(e,n){const r=nn.isNumericId(e),s=nn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?nn.extractNumericId(e).compare(nn.extractNumericId(n)):xh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gr.fromString(e.substring(4,e.length-2))}}class de extends nn{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new de(n)}static emptyPath(){return new de([])}}const $C=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends nn{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return $C.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sy}static keyField(){return new Qe([Sy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(r+=u,s++):(i(),s++)}if(i(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(de.fromString(e))}static fromName(e){return new H(de.fromString(e).popFirst(5))}static empty(){return new H(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new de(e.slice()))}}/**
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
 */function Zx(t,e,n){if(!n)throw new z(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qC(t,e,n,r){if(e===!0&&r===!0)throw new z(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function by(t){if(!H.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ny(t){if(H.isDocumentKey(t))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ew(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Gu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function vr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gu(t);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ea(t,e){if(!ew(t))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(V.INVALID_ARGUMENT,n);return!0}/**
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
 */const ky=-62135596800,Cy=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Cy);return new ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ky)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cy}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ea(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ky;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:Le("string",ge._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new ge(0,0))}static max(){return new Y(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ea=-1;function WC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new Er(s,H.empty(),e)}function HC(t){return new Er(t.readTime,t.key,ea)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(Y.min(),H.empty(),ea)}static max(){return new Er(Y.max(),H.empty(),ea)}}function GC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
 */const KC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ni(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==KC)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(u=>{++s,u.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let u=0;for(let c=0;c<i;c++){const d=c;n(e[d]).next(p=>{o[d]=p,++u,u===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function YC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ki(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ku.ce=-1;/**
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
 */const Zf=-1;function Qu(t){return t==null}function du(t){return t===0&&1/t==-1/0}function JC(t){return typeof t=="number"&&Number.isInteger(t)&&!du(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const tw="";function XC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ay(e)),e=ZC(t.get(n),e);return Ay(e)}function ZC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case tw:n+="";break;default:n+=i}}return n}function Ay(t){return t+tw+""}/**
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
 */function Py(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sl(this.root,e,this.comparator,!0)}}class sl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ke(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ry(this.data.getIterator())}getIteratorFrom(e){return new Ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class Ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new qt([])}unionWith(e){let n=new Ue(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rw("Invalid base64 string: "+i):i}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const eA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(le(!!t,39018),typeof t=="string"){let e=0;const n=eA.exec(t);if(le(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
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
 */const sw="server_timestamp",iw="__type__",ow="__previous_value__",aw="__local_write_time__";function ep(t){return(t?.mapValue?.fields||{})[iw]?.stringValue===sw}function Yu(t){const e=t.mapValue.fields[ow];return ep(e)?Yu(e):e}function ta(t){const e=Tr(t.mapValue.fields[aw].timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class tA{constructor(e,n,r,s,i,o,u,c,d,p,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=m}}const hu="(default)";class na{constructor(e,n){this.projectId=e,this.database=n||hu}static empty(){return new na("","")}get isDefaultDatabase(){return this.database===hu}isEqual(e){return e instanceof na&&e.projectId===this.projectId&&e.database===this.database}}function nA(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new na(t.options.projectId,e)}/**
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
 */const lw="__type__",rA="__max__",il={mapValue:{}},uw="__vector__",fu="value";function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ep(t)?4:iA(t)?9007199254740991:sA(t)?10:11:K(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ta(t).isEqual(ta(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Tr(s.timestampValue),u=Tr(i.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ir(s.bytesValue).isEqual(Ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),u=ke(i.doubleValue);return o===u?du(o)===du(u):isNaN(o)&&isNaN(u)}return!1}(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Py(o)!==Py(u))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(u[c]===void 0||!fn(o[c],u[c])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function ra(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function hi(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const u=ke(i.integerValue||i.doubleValue),c=ke(o.integerValue||o.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(t,e);case 3:return jy(t.timestampValue,e.timestampValue);case 4:return jy(ta(t),ta(e));case 5:return xh(t.stringValue,e.stringValue);case 6:return function(i,o){const u=Ir(i),c=Ir(o);return u.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const u=i.split("/"),c=o.split("/");for(let d=0;d<u.length&&d<c.length;d++){const p=re(u[d],c[d]);if(p!==0)return p}return re(u.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const u=re(ke(i.latitude),ke(o.latitude));return u!==0?u:re(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dy(t.arrayValue,e.arrayValue);case 10:return function(i,o){const u=i.fields||{},c=o.fields||{},d=u[fu]?.arrayValue,p=c[fu]?.arrayValue,m=re(d?.values?.length||0,p?.values?.length||0);return m!==0?m:Dy(d,p)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===il.mapValue&&o===il.mapValue)return 0;if(i===il.mapValue)return 1;if(o===il.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),d=o.fields||{},p=Object.keys(d);c.sort(),p.sort();for(let m=0;m<c.length&&m<p.length;++m){const g=xh(c[m],p[m]);if(g!==0)return g;const S=hi(u[c[m]],d[p[m]]);if(S!==0)return S}return re(c.length,p.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function jy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Tr(t),r=Tr(e),s=re(n.seconds,r.seconds);return s!==0?s:re(n.nanos,r.nanos)}function Dy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=hi(n[s],r[s]);if(i)return i}return re(n.length,r.length)}function fi(t){return wh(t)}function wh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wh(n.fields[o])}`;return s+"}"}(t.mapValue):K(61005,{value:t})}function bl(t){switch(Sr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yu(t);return e?16+bl(e):16;case 5:return 2*t.stringValue.length;case 6:return Ir(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+bl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ys(r.fields,(i,o)=>{s+=i.length+bl(o)}),s}(t.mapValue);default:throw K(13486,{value:t})}}function Vy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Eh(t){return!!t&&"integerValue"in t}function tp(t){return!!t&&"arrayValue"in t}function Ly(t){return!!t&&"nullValue"in t}function Oy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nl(t){return!!t&&"mapValue"in t}function sA(t){return(t?.mapValue?.fields||{})[lw]?.stringValue===uw}function No(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=No(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=No(t.arrayValue.values[n]);return e}return{...t}}function iA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===rA}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=No(n)}setAll(e){let n=Qe.emptyPath(),r={},s=[];e.forEach((o,u)=>{if(!n.isImmediateParentOf(u)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=u.popLast()}o?r[u.lastSegment()]=No(o):s.push(u.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Nl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ys(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Rt(No(this.value))}}function cw(t){const e=[];return ys(t.fields,(n,r)=>{const s=new Qe([n]);if(Nl(r)){const i=cw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
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
 */class it{constructor(e,n,r,s,i,o,u){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=u}static newInvalidDocument(e){return new it(e,0,Y.min(),Y.min(),Y.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new it(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new it(e,2,n,Y.min(),Y.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,Y.min(),Y.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pu{constructor(e,n){this.position=e,this.inclusive=n}}function My(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=hi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function oA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class dw{}class Ve extends dw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lA(e,n,r):n==="array-contains"?new dA(e,r):n==="in"?new hA(e,r):n==="not-in"?new fA(e,r):n==="array-contains-any"?new pA(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uA(e,r):new cA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(hi(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison(hi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends dw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Yt(e,n)}matches(e){return hw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function hw(t){return t.op==="and"}function fw(t){return aA(t)&&hw(t)}function aA(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function Th(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+fi(t.value);if(fw(t))return t.filters.map(e=>Th(e)).join(",");{const e=t.filters.map(n=>Th(n)).join(",");return`${t.op}(${e})`}}function pw(t,e){return t instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(t,e):t instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,u)=>i&&pw(o,s.filters[u]),!0):!1}(t,e):void K(19439)}function mw(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${fi(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(mw).join(" ,")+"}"}(t):"Filter"}class lA extends Ve{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class uA extends Ve{constructor(e,n){super(e,"in",n),this.keys=gw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cA extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=gw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gw(t,e){return(e.arrayValue?.values||[]).map(n=>H.fromName(n.referenceValue))}class dA extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tp(n)&&ra(n.arrayValue,this.value)}}class hA extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ra(this.value.arrayValue,n)}}class fA extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ra(this.value.arrayValue,n)}}class pA extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ra(this.value.arrayValue,r))}}/**
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
 */class mA{constructor(e,n=null,r=[],s=[],i=null,o=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=u,this.Te=null}}function Uy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new mA(t,e,n,r,s,i,o)}function np(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Th(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fi(r)).join(",")),e.Te=n}return e.Te}function rp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fy(t.startAt,e.startAt)&&Fy(t.endAt,e.endAt)}function Ih(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ci{constructor(e,n=null,r=[],s=[],i=null,o="F",u=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=u,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function gA(t,e,n,r,s,i,o,u){return new Ci(t,e,n,r,s,i,o,u)}function Ju(t){return new Ci(t)}function By(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yA(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function yw(t){return t.collectionGroup!==null}function ko(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new Ue(Qe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new sa(i,r))}),n.has(Qe.keyField().canonicalString())||e.Ie.push(new sa(Qe.keyField(),r))}return e.Ie}function un(t){const e=J(t);return e.Ee||(e.Ee=vA(e,ko(t))),e.Ee}function vA(t,e){if(t.limitType==="F")return Uy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new sa(s.field,i)});const n=t.endAt?new pu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pu(t.startAt.position,t.startAt.inclusive):null;return Uy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sh(t,e){const n=t.filters.concat([e]);return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _A(t,e){const n=t.explicitOrderBy.concat([e]);return new Ci(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function bh(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xu(t,e){return rp(un(t),un(e))&&t.limitType===e.limitType}function vw(t){return`${np(un(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>mw(s)).join(", ")}]`),Qu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fi(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function Zu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ko(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,u,c){const d=My(o,u,c);return o.inclusive?d<=0:d<0}(r.startAt,ko(r),s)||r.endAt&&!function(o,u,c){const d=My(o,u,c);return o.inclusive?d>=0:d>0}(r.endAt,ko(r),s))}(t,e)}function xA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _w(t){return(e,n)=>{let r=!1;for(const s of ko(t)){const i=wA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wA(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,u){const c=o.data.field(i),d=u.data.field(i);return c!==null&&d!==null?hi(c,d):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
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
 */class vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return nw(this.inner)}size(){return this.innerSize}}/**
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
 */const EA=new Ie(H.comparator);function Pn(){return EA}const xw=new Ie(H.comparator);function fo(...t){let e=xw;for(const n of t)e=e.insert(n.key,n);return e}function ww(t){let e=xw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return Co()}function Ew(){return Co()}function Co(){return new vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const TA=new Ie(H.comparator),IA=new Ue(H.comparator);function se(...t){let e=IA;for(const n of t)e=e.add(n);return e}const SA=new Ue(re);function bA(){return SA}/**
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
 */function sp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:du(e)?"-0":e}}function Tw(t){return{integerValue:""+t}}function NA(t,e){return JC(e)?Tw(e):sp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this._=void 0}}function kA(t,e,n){return t instanceof ia?function(s,i){const o={fields:{[iw]:{stringValue:sw},[aw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ep(i)&&(i=Yu(i)),i&&(o.fields[ow]=i),{mapValue:o}}(n,e):t instanceof oa?Sw(t,e):t instanceof aa?bw(t,e):function(s,i){const o=Iw(s,i),u=zy(o)+zy(s.Ae);return Eh(o)&&Eh(s.Ae)?Tw(u):sp(s.serializer,u)}(t,e)}function CA(t,e,n){return t instanceof oa?Sw(t,e):t instanceof aa?bw(t,e):n}function Iw(t,e){return t instanceof mu?function(r){return Eh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ia extends ec{}class oa extends ec{constructor(e){super(),this.elements=e}}function Sw(t,e){const n=Nw(e);for(const r of t.elements)n.some(s=>fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class aa extends ec{constructor(e){super(),this.elements=e}}function bw(t,e){let n=Nw(e);for(const r of t.elements)n=n.filter(s=>!fn(s,r));return{arrayValue:{values:n}}}class mu extends ec{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function zy(t){return ke(t.integerValue||t.doubleValue)}function Nw(t){return tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class AA{constructor(e,n){this.field=e,this.transform=n}}function PA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof oa&&s instanceof oa||r instanceof aa&&s instanceof aa?di(r.elements,s.elements,fn):r instanceof mu&&s instanceof mu?fn(r.Ae,s.Ae):r instanceof ia&&s instanceof ia}(t.transform,e.transform)}class RA{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class tc{}function kw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Aw(t.key,Tn.none()):new Ta(t.key,t.data,Tn.none());{const n=t.data,r=Rt.empty();let s=new Ue(Qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _s(t.key,r,new qt(s.toArray()),Tn.none())}}function jA(t,e,n){t instanceof Ta?function(s,i,o){const u=s.value.clone(),c=qy(s.fieldTransforms,i,o.transformResults);u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):t instanceof _s?function(s,i,o){if(!kl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const u=qy(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Cw(s)),c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ao(t,e,n,r){return t instanceof Ta?function(i,o,u,c){if(!kl(i.precondition,o))return u;const d=i.value.clone(),p=Wy(i.fieldTransforms,c,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof _s?function(i,o,u,c){if(!kl(i.precondition,o))return u;const d=Wy(i.fieldTransforms,c,o),p=o.data;return p.setAll(Cw(i)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,u){return kl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u}(t,e,n)}function DA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Iw(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function $y(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&di(r,s,(i,o)=>PA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends tc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _s extends tc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qy(t,e,n){const r=new Map;le(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,u=e.data.field(i.field);r.set(i.field,CA(o,u,n[s]))}return r}function Wy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,kA(i,o,e))}return r}class Aw extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VA extends tc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ew();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let u=this.applyToLocalView(o,i.mutatedFields);u=n.has(s.key)?null:u;const c=kw(o,u);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(n,r)=>$y(n,r))&&di(this.baseMutations,e.baseMutations,(n,r)=>$y(n,r))}}class ip{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return TA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ip(e,n,r,s)}}/**
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
 */class OA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class MA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,ie;function FA(t){switch(t){case V.OK:return K(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function Pw(t){if(t===void 0)return An("GRPC error has no .code"),V.UNKNOWN;switch(t){case je.OK:return V.OK;case je.CANCELLED:return V.CANCELLED;case je.UNKNOWN:return V.UNKNOWN;case je.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case je.INTERNAL:return V.INTERNAL;case je.UNAVAILABLE:return V.UNAVAILABLE;case je.UNAUTHENTICATED:return V.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case je.NOT_FOUND:return V.NOT_FOUND;case je.ALREADY_EXISTS:return V.ALREADY_EXISTS;case je.PERMISSION_DENIED:return V.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case je.ABORTED:return V.ABORTED;case je.OUT_OF_RANGE:return V.OUT_OF_RANGE;case je.UNIMPLEMENTED:return V.UNIMPLEMENTED;case je.DATA_LOSS:return V.DATA_LOSS;default:return K(39323,{code:t})}}(ie=je||(je={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(){return new TextEncoder}/**
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
 */const BA=new gr([4294967295,4294967295],0);function Hy(t){const e=UA().encode(t),n=new Wx;return n.update(e),new Uint8Array(n.digest())}function Gy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new gr([n,r],0),new gr([s,i],0)]}class op{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new po(`Invalid padding: ${n}`);if(r<0)throw new po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new po(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=gr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(gr.fromNumber(r)));return s.compare(BA)===1&&(s=new gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Hy(e),[r,s]=Gy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new op(i,s,n);return r.forEach(u=>o.insert(u)),o}insert(e){if(this.ge===0)return;const n=Hy(e),[r,s]=Gy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nc(Y.min(),s,new Ie(re),Pn(),se())}}class Ia{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ia(r,n,se(),se(),se())}}/**
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
 */class Cl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Rw{constructor(e,n){this.targetId=e,this.Ce=n}}class jw{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ky{constructor(){this.ve=0,this.Fe=Qy(),this.Me=Xe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:i})}}),new Ia(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Qy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class zA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pn(),this.He=ol(),this.Je=ol(),this.Ze=new Ie(re)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ih(i))if(r===0){const o=new H(i.path);this.et(n,o,it.newNoDocument(o,Y.min()))}else le(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const u=this.ut(e),c=u?this.ct(u,e,o):1;if(c!==0){this.it(n);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,u;try{o=Ir(r).toUint8Array()}catch(c){if(c instanceof rw)return ds("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new op(o,s,i)}catch(c){return ds(c instanceof po?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.ge===0?null:u}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),u=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const u=this.ot(o);if(u){if(i.current&&Ih(u.target)){const c=new H(u.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,it.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=se();this.Je.forEach((i,o)=>{let u=!0;o.forEachWhile(c=>{const d=this.ot(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new nc(e,n,this.Ze,this.je,r);return this.je=Pn(),this.He=ol(),this.Je=ol(),this.Ze=new Ie(re),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Ky,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ue(re),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ue(re),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ky),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ol(){return new Ie(H.comparator)}function Qy(){return new Ie(H.comparator)}const $A={asc:"ASCENDING",desc:"DESCENDING"},qA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WA={and:"AND",or:"OR"};class HA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nh(t,e){return t.useProto3Json||Qu(e)?e:{value:e}}function gu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GA(t,e){return gu(t,e.toTimestamp())}function cn(t){return le(!!t,49232),Y.fromTimestamp(function(n){const r=Tr(n);return new ge(r.seconds,r.nanos)}(t))}function ap(t,e){return kh(t,e).canonicalString()}function kh(t,e){const n=function(s){return new de(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Vw(t){const e=de.fromString(t);return le(Uw(e),10190,{key:e.toString()}),e}function Ch(t,e){return ap(t.databaseId,e.path)}function cd(t,e){const n=Vw(e);if(n.get(1)!==t.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Ow(n))}function Lw(t,e){return ap(t.databaseId,e)}function KA(t){const e=Vw(t);return e.length===4?de.emptyPath():Ow(e)}function Ah(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ow(t){return le(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Yy(t,e,n){return{name:Ch(t,e),fields:n.value.mapValue.fields}}function QA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(le(p===void 0||typeof p=="string",58123),Xe.fromBase64String(p||"")):(le(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Xe.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&function(d){const p=d.code===void 0?V.UNKNOWN:Pw(d.code);return new z(p,d.message||"")}(o);n=new jw(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cd(t,r.document.name),i=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):Y.min(),u=new Rt({mapValue:{fields:r.document.fields}}),c=it.newFoundDocument(s,i,o,u),d=r.targetIds||[],p=r.removedTargetIds||[];n=new Cl(d,p,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cd(t,r.document),i=r.readTime?cn(r.readTime):Y.min(),o=it.newNoDocument(s,i),u=r.removedTargetIds||[];n=new Cl([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cd(t,r.document),i=r.removedTargetIds||[];n=new Cl([],i,s,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new MA(s,i),u=r.targetId;n=new Rw(u,o)}}return n}function YA(t,e){let n;if(e instanceof Ta)n={update:Yy(t,e.key,e.value)};else if(e instanceof Aw)n={delete:Ch(t,e.key)};else if(e instanceof _s)n={update:Yy(t,e.key,e.data),updateMask:iP(e.fieldMask)};else{if(!(e instanceof VA))return K(16599,{dt:e.type});n={verify:Ch(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const u=o.transform;if(u instanceof ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof aa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof mu)return{fieldPath:o.field.canonicalString(),increment:u.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:GA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)}(t,e.precondition)),n}function JA(t,e){return t&&t.length>0?(le(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?cn(s.updateTime):cn(i);return o.isEqual(Y.min())&&(o=cn(i)),new RA(o,s.transformResults||[])}(n,e))):[]}function XA(t,e){return{documents:[Lw(t,e.path)]}}function ZA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Lw(t,s);const i=function(d){if(d.length!==0)return Fw(Yt.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(p=>function(g){return{field:As(g.field),direction:nP(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const u=Nh(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:s}}function eP(t){let e=KA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){le(r===1,65062);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=Mw(m);return g instanceof Yt&&fw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(k){return new sa(Ps(k.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let u=null;n.limit&&(u=function(m){let g;return g=typeof m=="object"?m.value:m,Qu(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,S=m.values||[];return new pu(S,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,S=m.values||[];return new pu(S,g)}(n.endAt)),gA(e,s,o,i,u,"F",c,d)}function tP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ps(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ps(n.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ps(n.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ps(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>Mw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function nP(t){return $A[t]}function rP(t){return qA[t]}function sP(t){return WA[t]}function As(t){return{fieldPath:t.canonicalString()}}function Ps(t){return Qe.fromServerFormat(t.fieldPath)}function Fw(t){return t instanceof Ve?function(n){if(n.op==="=="){if(Oy(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NAN"}};if(Ly(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Oy(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NAN"}};if(Ly(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(n.field),op:rP(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(s=>Fw(s));return r.length===1?r[0]:{compositeFilter:{op:sP(n.op),filters:r}}}(t):K(54877,{filter:t})}function iP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Bw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class rr{constructor(e,n,r,s,i=Y.min(),o=Y.min(),u=Xe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class oP{constructor(e){this.yt=e}}function aP(t){const e=eP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bh(e,e.limit,"L"):e}/**
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
 */class lP{constructor(){this.Sn=new uP}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Er.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class uP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ue(de.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ue(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zw=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(zw,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
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
 */class pi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new pi(0)}static ar(){return new pi(-1)}}/**
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
 */const Xy="LruGarbageCollector",cP=1048576;function Zy([t,e],[n,r]){const s=re(t,n);return s===0?re(e,r):s}class dP{constructor(e){this.Pr=e,this.buffer=new Ue(Zy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Zy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class hP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(Xy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ki(n)?q(Xy,"Ignoring IndexedDB error during garbage collection: ",n):await Ni(n)}await this.Ar(3e5)})}}class fP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Ku.ce);const r=new dP(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Jy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,u,c,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,u=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),ks()<=ne.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(u-o)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${m} documents in `+(d-c)+`ms
Total Duration: ${d-p}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function pP(t,e){return new fP(t,e)}/**
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
 */class mP{constructor(){this.changes=new vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class yP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ao(r.mutation,s,qt.empty(),ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=Yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=fo();return i.forEach((u,c)=>{o=o.insert(u,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,u)=>{n.set(o,u)})})}computeViews(e,n,r,s){let i=Pn();const o=Co(),u=function(){return Co()}();return n.forEach((c,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof _s)?i=i.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),Ao(p.mutation,d,p.mutation.getFieldMask(),ge.now())):o.set(d.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>u.set(d,new gP(p,o.get(d)??null))),u))}recalculateAndSaveOverlays(e,n){const r=Co();let s=new Ie((o,u)=>o-u),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const u of o)u.keys().forEach(c=>{const d=n.get(c);if(d===null)return;let p=r.get(c)||qt.empty();p=u.applyToLocalView(d,p),r.set(c,p);const m=(s.get(u.batchId)||se()).add(c);s=s.insert(u.batchId,m)})}).next(()=>{const o=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,p=c.value,m=Ew();p.forEach(g=>{if(!i.has(g)){const S=kw(n.get(g),r.get(g));S!==null&&m.set(g,S),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return yA(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Yr());let u=ea,c=i;return o.next(d=>L.forEach(d,(p,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),i.get(p)?L.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{c=c.insert(p,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,c,d,se())).next(p=>({batchId:u,changes:ww(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=fo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=fo();return this.indexManager.getCollectionParents(e,i).next(u=>L.forEach(u,c=>{const d=function(m,g){return new Ci(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,it.newInvalidDocument(p)))});let u=fo();return o.forEach((c,d)=>{const p=i.get(c);p!==void 0&&Ao(p.mutation,d,qt.empty(),ge.now()),Zu(n,d)&&(u=u.insert(c,d))}),u})}}/**
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
 */class vP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:cn(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:aP(s.bundledQuery),readTime:cn(s.readTime)}}(n)),L.resolve()}}/**
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
 */class _P{constructor(){this.overlays=new Ie(H.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Yr(),i=n.length+1,o=new H(n.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ie((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Yr(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Yr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return L.resolve(u)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new OA(n,r));let i=this.Lr.get(n);i===void 0&&(i=se(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class lp{constructor(){this.kr=new Ue($e.Kr),this.qr=new Ue($e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new $e(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new H(new de([])),r=new $e(n,e),s=new $e(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new H(new de([])),r=new $e(n,e),s=new $e(n,e+1);let i=se();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return H.comparator(e.key,n.key)||re(e.Hr,n.Hr)}static Ur(e,n){return re(e.Hr,n.Hr)||H.comparator(e.key,n.key)}}/**
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
 */class wP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ue($e.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LA(i,n,r,s);this.mutationQueue.push(o);for(const u of s)this.Jr=this.Jr.add(new $e(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Zf:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),s=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const u=this.Zr(o.Hr);i.push(u)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(re);return n.forEach(s=>{const i=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],u=>{r=r.add(u.Hr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new $e(new H(i),0);let u=new Ue(re);return this.Jr.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(c.Hr)),!0)},o),L.resolve(this.Yr(u))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){le(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return L.forEach(n.mutations,s=>{const i=new $e(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new $e(n,0),s=this.Jr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class EP{constructor(e){this.ti=e,this.docs=function(){return new Ie(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Pn();const o=n.path,u=new H(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:p}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||GC(HC(p),r)<=0||(s.has(p.key)||Zu(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TP(this)}getSize(e){return L.resolve(this.size)}}class TP extends mP{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class IP{constructor(e){this.persistence=e,this.ri=new vs(n=>np(n),rp),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new lp,this.targetCount=0,this.oi=pi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new pi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
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
 */class $w{constructor(e,n){this._i={},this.overlays={},this.ai=new Ku(0),this.ui=!1,this.ui=!0,this.ci=new xP,this.referenceDelegate=e(this),this.li=new IP(this),this.indexManager=new lP,this.remoteDocumentCache=function(s){return new EP(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new oP(n),this.Pi=new vP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _P,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new wP(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new SP(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class SP extends QC{constructor(e){super(),this.currentSequenceNumber=e}}class up{constructor(e){this.persistence=e,this.Ri=new lp,this.Ai=null}static Vi(e){return new up(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const s=H.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class yu{constructor(e,n){this.persistence=e,this.fi=new vs(r=>XC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=pP(this,n)}static Vi(e,n){return new yu(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(u=>{u||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=bl(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class cp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new cp(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class NP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return eb()?8:YC(at())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new bP;return this.ys(e,n,o).next(u=>{if(i.result=u,this.As)return this.ws(e,n,o,u.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(ks()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(ks()<=ne.DEBUG&&q("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ks()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):L.resolve())}gs(e,n){if(By(n))return L.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=bh(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.fs.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.bs(n,u);return this.Ss(n,d,o,c.readTime)?this.gs(e,bh(n,null,"F")):this.Ds(e,d,n,c)}))})))}ps(e,n,r,s){return By(n)||s.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?L.resolve(null):(ks()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.Ds(e,o,n,WC(s,ea)).next(u=>u))})}bs(e,n){let r=new Ue(_w(e));return n.forEach((s,i)=>{Zu(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return ks()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.fs.getDocumentsMatchingQuery(e,n,Er.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const dp="LocalStore",kP=3e8;class CP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ie(re),this.Fs=new vs(i=>np(i),rp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function AP(t,e,n,r){return new CP(t,e,n,r)}async function qw(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],u=[];let c=se();for(const d of s){o.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}for(const d of i){u.push(d.batchId);for(const p of d.mutations)c=c.add(p.key)}return n.localDocuments.getDocuments(r,c).next(d=>({Ns:d,removedBatchIds:o,addedBatchIds:u}))})})}function PP(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,p){const m=d.batch,g=m.keys();let S=L.resolve();return g.forEach(k=>{S=S.next(()=>p.getEntry(c,k)).next(A=>{const j=d.docVersions.get(k);le(j!==null,48541),A.version.compareTo(j)<0&&(m.applyToRemoteDocument(A,d),A.isValidDocument()&&(A.setReadTime(d.commitVersion),p.addEntry(A)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(c,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let c=se();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ww(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function RP(t,e){const n=J(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const u=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;u.push(n.li.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,p.addedDocuments,m)));let S=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Xe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(m,S),function(A,j,w){return A.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=kP?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,S,p)&&u.push(n.li.updateTargetData(i,S))});let c=Pn(),d=se();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),u.push(jP(i,o,e.documentUpdates).next(p=>{c=p.Bs,d=p.Ls})),!r.isEqual(Y.min())){const p=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(p)}return L.waitFor(u).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(n.vs=s,i))}function jP(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Pn();return n.forEach((u,c)=>{const d=i.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(u,c.readTime),o=o.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(u,c)):q(dp,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Bs:o,Ls:s}})}function DP(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Zf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VP(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Ph(t,e,n){const r=J(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ki(o))throw o;q(dp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function e0(t,e,n){const r=J(t);let s=Y.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,d,p){const m=J(c),g=m.Fs.get(p);return g!==void 0?L.resolve(m.vs.get(g)):m.li.getTargetData(d,p)}(r,o,un(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,u.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:se())).next(u=>(LP(r,xA(e),u),{documents:u,ks:i})))}function LP(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class t0{constructor(){this.activeTargetIds=bA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OP{constructor(){this.vo=new t0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new t0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MP{Mo(e){}shutdown(){}}/**
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
 */const n0="ConnectivityMonitor";class r0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(n0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(n0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al=null;function Rh(){return al===null?al=function(){return 268435456+Math.round(2147483648*Math.random())}():al++,"0x"+al.toString(16)}/**
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
 */const dd="RestConnection",FP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class UP{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===hu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Rh(),u=this.Qo(e,n.toUriEncodedString());q(dd,`Sending RPC '${e}' ${o}:`,u,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:d}=new URL(u),p=Ti(d);return this.zo(e,u,c,r,p).then(m=>(q(dd,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ds(dd,`RPC '${e}' ${o} failed with error: `,m,"url: ",u,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=FP[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class BP{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const nt="WebChannelConnection",ro=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class ei extends UP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ei.c_){const e=Qx();ro(e,Kx.STAT_EVENT,n=>{n.stat===_h.PROXY?q(nt,"STAT_EVENT: detected buffering proxy"):n.stat===_h.NOPROXY&&q(nt,"STAT_EVENT: detected no buffering proxy")}),ei.c_=!0}}zo(e,n,r,s,i){const o=Rh();return new Promise((u,c)=>{const d=new Hx;d.setWithCredentials(!0),d.listenOnce(Gx.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Sl.NO_ERROR:const m=d.getResponseJson();q(nt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),u(m);break;case Sl.TIMEOUT:q(nt,`RPC '${e}' ${o} timed out`),c(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case Sl.HTTP_ERROR:const g=d.getStatus();if(q(nt,`RPC '${e}' ${o} failed with status:`,g,"response text:",d.getResponseText()),g>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const k=S?.error;if(k&&k.status&&k.message){const A=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(_)>=0?_:V.UNKNOWN}(k.status);c(new z(A,k.message))}else c(new z(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new z(V.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{q(nt,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);q(nt,`RPC '${e}' ${o} sending request:`,s),d.send(n,"POST",p,r,15)})}T_(e,n,r){const s=Rh(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");q(nt,`Creating RPC '${e}' stream ${s}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,g=!1;const S=new BP({Ho:k=>{g?q(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(q(nt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),q(nt,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Jo:()=>p.close()});return ro(p,ho.EventType.OPEN,()=>{g||(q(nt,`RPC '${e}' stream ${s} transport opened.`),S.i_())}),ro(p,ho.EventType.CLOSE,()=>{g||(g=!0,q(nt,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.E_(p))}),ro(p,ho.EventType.ERROR,k=>{g||(g=!0,ds(nt,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),S.o_(new z(V.UNAVAILABLE,"The operation could not be completed")))}),ro(p,ho.EventType.MESSAGE,k=>{if(!g){const A=k.data[0];le(!!A,16349);const j=A,w=j?.error||j[0]?.error;if(w){q(nt,`RPC '${e}' stream ${s} received error:`,w);const _=w.status;let I=function(B){const x=je[B];if(x!==void 0)return Pw(x)}(_),D=w.message;_==="NOT_FOUND"&&D.includes("database")&&D.includes("does not exist")&&D.includes(this.databaseId.database)&&ds(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),I===void 0&&(I=V.INTERNAL,D="Unknown error status: "+_+" with message "+w.message),g=!0,S.o_(new z(I,D)),p.close()}else q(nt,`RPC '${e}' stream ${s} received:`,A),S.__(A)}}),ei.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Yx()}}/**
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
 */function zP(t){return new ei(t)}function hd(){return typeof document<"u"?document:null}/**
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
 */function rc(t){return new HA(t,!0)}/**
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
 */ei.c_=!1;class Hw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const s0="PersistentStream";class Gw{constructor(e,n,r,s,i,o,u,c){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Hw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(s0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(s0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $P extends Gw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=QA(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?cn(o.readTime):Y.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Ah(this.serializer),n.addTarget=function(i,o){let u;const c=o.target;if(u=Ih(c)?{documents:XA(i,c)}:{query:ZA(i,c).ft},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=Dw(i,o.resumeToken);const d=Nh(i,o.expectedCount);d!==null&&(u.expectedCount=d)}else if(o.snapshotVersion.compareTo(Y.min())>0){u.readTime=gu(i,o.snapshotVersion.toTimestamp());const d=Nh(i,o.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=tP(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Ah(this.serializer),n.removeTarget=e,this.K_(n)}}class qP extends Gw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=JA(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ah(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YA(this.serializer,r))};this.K_(n)}}/**
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
 */class WP{}class HP extends WP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,kh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(V.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.jo(e,kh(n,r),s,o,u,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function GP(t,e,n,r){return new HP(t,e,n,r)}class KP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(An(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const hs="RemoteStore";class QP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{xs(this)&&(q(hs,"Restarting streams for network reachability change."),await async function(c){const d=J(c);d.Ea.add(4),await Sa(d),d.Va.set("Unknown"),d.Ea.delete(4),await sc(d)}(this))})}),this.Va=new KP(r,s)}}async function sc(t){if(xs(t))for(const e of t.Ra)await e(!0)}async function Sa(t){for(const e of t.Ra)await e(!1)}function Kw(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),mp(n)?pp(n):Ai(n).O_()&&fp(n,e))}function hp(t,e){const n=J(t),r=Ai(n);n.Ia.delete(e),r.O_()&&Qw(n,e),n.Ia.size===0&&(r.O_()?r.L_():xs(n)&&n.Va.set("Unknown"))}function fp(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ai(t).Z_(e)}function Qw(t,e){t.da.$e(e),Ai(t).X_(e)}function pp(t){t.da=new zA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ai(t).start(),t.Va.ua()}function mp(t){return xs(t)&&!Ai(t).x_()&&t.Ia.size>0}function xs(t){return J(t).Ea.size===0}function Yw(t){t.da=void 0}async function YP(t){t.Va.set("Online")}async function JP(t){t.Ia.forEach((e,n)=>{fp(t,e)})}async function XP(t,e){Yw(t),mp(t)?(t.Va.ha(e),pp(t)):t.Va.set("Unknown")}async function ZP(t,e,n){if(t.Va.set("Online"),e instanceof jw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const u of i.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,o),s.Ia.delete(u),s.da.removeTarget(u))}(t,e)}catch(r){q(hs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vu(t,r)}else if(e instanceof Cl?t.da.Xe(e):e instanceof Rw?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await Ww(t.localStore);n.compareTo(r)>=0&&await function(i,o){const u=i.da.Tt(o);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(c.resumeToken,o))}}),u.targetMismatches.forEach((c,d)=>{const p=i.Ia.get(c);if(!p)return;i.Ia.set(c,p.withResumeToken(Xe.EMPTY_BYTE_STRING,p.snapshotVersion)),Qw(i,c);const m=new rr(p.target,c,d,p.sequenceNumber);fp(i,m)}),i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){q(hs,"Failed to raise snapshot:",r),await vu(t,r)}}async function vu(t,e,n){if(!ki(e))throw e;t.Ea.add(1),await Sa(t),t.Va.set("Offline"),n||(n=()=>Ww(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(hs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await sc(t)})}function Jw(t,e){return e().catch(n=>vu(t,n,e))}async function ic(t){const e=J(t),n=br(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Zf;for(;eR(e);)try{const s=await DP(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,tR(e,s)}catch(s){await vu(e,s)}Xw(e)&&Zw(e)}function eR(t){return xs(t)&&t.Ta.length<10}function tR(t,e){t.Ta.push(e);const n=br(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Xw(t){return xs(t)&&!br(t).x_()&&t.Ta.length>0}function Zw(t){br(t).start()}async function nR(t){br(t).ra()}async function rR(t){const e=br(t);for(const n of t.Ta)e.ea(n.mutations)}async function sR(t,e,n){const r=t.Ta.shift(),s=ip.from(r,e,n);await Jw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ic(t)}async function iR(t,e){e&&br(t).Y_&&await async function(r,s){if(function(o){return FA(o)&&o!==V.ABORTED}(s.code)){const i=r.Ta.shift();br(r).B_(),await Jw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ic(r)}}(t,e),Xw(t)&&Zw(t)}async function i0(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),q(hs,"RemoteStore received new credentials");const r=xs(n);n.Ea.add(3),await Sa(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await sc(n)}async function oR(t,e){const n=J(t);e?(n.Ea.delete(2),await sc(n)):e||(n.Ea.add(2),await Sa(n),n.Va.set("Unknown"))}function Ai(t){return t.ma||(t.ma=function(n,r,s){const i=J(n);return i.sa(),new $P(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:YP.bind(null,t),Yo:JP.bind(null,t),t_:XP.bind(null,t),J_:ZP.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),mp(t)?pp(t):t.Va.set("Unknown")):(await t.ma.stop(),Yw(t))})),t.ma}function br(t){return t.fa||(t.fa=function(n,r,s){const i=J(n);return i.sa(),new qP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:nR.bind(null,t),t_:iR.bind(null,t),ta:rR.bind(null,t),na:sR.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await ic(t)):(await t.fa.stop(),t.Ta.length>0&&(q(hs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class gp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,u=new gp(e,n,o,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yp(t,e){if(An("AsyncQueue",`${e}: ${t}`),ki(t))return new z(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ti{static emptySet(e){return new ti(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=fo(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class o0{constructor(){this.ga=new Ie(H.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class mi{constructor(e,n,r,s,i,o,u,c,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(u=>{o.push({type:0,doc:u})}),new mi(e,n,ti.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class aR{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class lR{constructor(){this.queries=a0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=a0(),i.forEach((o,u)=>{for(const c of u.ba)c.onError(r)})})(this,new z(V.ABORTED,"Firestore shutting down"))}}function a0(){return new vs(t=>vw(t),Xu)}async function e1(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new aR,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const u=yp(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(u)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&vp(n)}async function t1(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uR(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const u of o.ba)u.Fa(s)&&(r=!0);o.wa=s}}r&&vp(n)}function cR(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function vp(t){t.Ca.forEach(e=>{e.next()})}var jh,l0;(l0=jh||(jh={})).Ma="default",l0.Cache="cache";class n1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==jh.Cache}}/**
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
 */class r1{constructor(e){this.key=e}}class s1{constructor(e){this.key=e}}class dR{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=_w(e),this.tu=new ti(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new o0,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),S=Zu(this.query,m)?m:null,k=!!g&&this.mutatedKeys.has(g.key),A=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let j=!1;g&&S?g.data.isEqual(S.data)?k!==A&&(r.track({type:3,doc:S}),j=!0):this.su(g,S)||(r.track({type:2,doc:S}),j=!0,(c&&this.eu(S,c)>0||d&&this.eu(S,d)<0)&&(u=!0)):!g&&S?(r.track({type:0,doc:S}),j=!0):g&&!S&&(r.track({type:1,doc:g}),j=!0,(c||d)&&(u=!0)),j&&(S?(o=o.add(S),i=A?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,Ss:u,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(S,k){const A=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:j})}};return A(S)-A(k)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),s=s??!1;const u=n&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,d=c!==this.Xa;return this.Xa=c,o.length!==0||d?{snapshot:new mi(this.query,e.tu,i,o,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new o0,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new s1(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new r1(r))}),n}cu(e){this.Za=e.ks,this.Ya=se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return mi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const _p="SyncEngine";class hR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fR{constructor(e){this.key=e,this.hu=!1}}class pR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new vs(u=>vw(u),Xu),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ie(H.comparator),this.Au=new Map,this.Vu=new lp,this.du={},this.mu=new Map,this.fu=pi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function mR(t,e,n=!0){const r=c1(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await i1(r,e,n,!0),s}async function gR(t,e){const n=c1(t);await i1(n,e,!0,!1)}async function i1(t,e,n,r){const s=await VP(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let u;return r&&(u=await yR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Kw(t.remoteStore,s),u}async function yR(t,e,n,r,s){t.pu=(m,g,S)=>async function(A,j,w,_){let I=j.view.ru(w);I.Ss&&(I=await e0(A.localStore,j.query,!1).then(({documents:x})=>j.view.ru(x,I)));const D=_&&_.targetChanges.get(j.targetId),F=_&&_.targetMismatches.get(j.targetId)!=null,B=j.view.applyChanges(I,A.isPrimaryClient,D,F);return c0(A,j.targetId,B.au),B.snapshot}(t,m,g,S);const i=await e0(t.localStore,e,!0),o=new dR(e,i.ks),u=o.ru(i.documents),c=Ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(u,t.isPrimaryClient,c);c0(t,n,d.au);const p=new hR(e,n,o);return t.Tu.set(e,p),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function vR(t,e,n){const r=J(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Xu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ph(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&hp(r.remoteStore,s.targetId),Dh(r,s.targetId)}).catch(Ni)):(Dh(r,s.targetId),await Ph(r.localStore,s.targetId,!0))}async function _R(t,e){const n=J(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hp(n.remoteStore,r.targetId))}async function xR(t,e,n){const r=NR(t);try{const s=await function(o,u){const c=J(o),d=ge.now(),p=u.reduce((S,k)=>S.add(k.key),se());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=Pn(),A=se();return c.xs.getEntries(S,p).next(j=>{k=j,k.forEach((w,_)=>{_.isValidDocument()||(A=A.add(w))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,k)).next(j=>{m=j;const w=[];for(const _ of u){const I=DA(_,m.get(_.key).overlayedDocument);I!=null&&w.push(new _s(_.key,I,cw(I.value.mapValue),Tn.exists(!0)))}return c.mutationQueue.addMutationBatch(S,d,w,u)}).next(j=>{g=j;const w=j.applyToLocalDocumentSet(m,A);return c.documentOverlayCache.saveOverlays(S,j.batchId,w)})}).then(()=>({batchId:g.batchId,changes:ww(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,u,c){let d=o.du[o.currentUser.toKey()];d||(d=new Ie(re)),d=d.insert(u,c),o.du[o.currentUser.toKey()]=d}(r,s.batchId,n),await ba(r,s.changes),await ic(r.remoteStore)}catch(s){const i=yp(s,"Failed to persist write");n.reject(i)}}async function o1(t,e){const n=J(t);try{const r=await RP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?le(o.hu,14607):s.removedDocuments.size>0&&(le(o.hu,42227),o.hu=!1))}),await ba(n,r,e)}catch(r){await Ni(r)}}function u0(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const u=o.view.va(e);u.snapshot&&s.push(u.snapshot)}),function(o,u){const c=J(o);c.onlineState=u;let d=!1;c.queries.forEach((p,m)=>{for(const g of m.ba)g.va(u)&&(d=!0)}),d&&vp(c)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wR(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ie(H.comparator);o=o.insert(i,it.newNoDocument(i,Y.min()));const u=se().add(i),c=new nc(Y.min(),new Map,new Ie(re),o,u);await o1(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),xp(r)}else await Ph(r.localStore,e,!1).then(()=>Dh(r,e,n)).catch(Ni)}async function ER(t,e){const n=J(t),r=e.batch.batchId;try{const s=await PP(n.localStore,e);l1(n,r,null),a1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ba(n,s)}catch(s){await Ni(s)}}async function TR(t,e,n){const r=J(t);try{const s=await function(o,u){const c=J(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return c.mutationQueue.lookupMutationBatch(d,u).next(m=>(le(m!==null,37113),p=m.keys(),c.mutationQueue.removeMutationBatch(d,m))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>c.localDocuments.getDocuments(d,p))})}(r.localStore,e);l1(r,e,n),a1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ba(r,s)}catch(s){await Ni(s)}}function a1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function l1(t,e,n){const r=J(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Dh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||u1(t,r)})}function u1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(hp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),xp(t))}function c0(t,e,n){for(const r of n)r instanceof r1?(t.Vu.addReference(r.key,e),IR(t,r)):r instanceof s1?(q(_p,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||u1(t,r.key)):K(19791,{wu:r})}function IR(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(_p,"New document in limbo: "+n),t.Eu.add(r),xp(t))}function xp(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new H(de.fromString(e)),r=t.fu.next();t.Au.set(r,new fR(n)),t.Ru=t.Ru.insert(n,r),Kw(t.remoteStore,new rr(un(Ju(n.path)),r,"TargetPurposeLimboResolution",Ku.ce))}}async function ba(t,e,n){const r=J(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((u,c)=>{o.push(r.pu(c,e,n).then(d=>{if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:n?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(d){s.push(d);const p=cp.Es(c.targetId,d);i.push(p)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(c,d){const p=J(c);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(d,g=>L.forEach(g.Ts,S=>p.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>L.forEach(g.Is,S=>p.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!ki(m))throw m;q(dp,"Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const S=p.vs.get(g),k=S.snapshotVersion,A=S.withLastLimboFreeSnapshotVersion(k);p.vs=p.vs.insert(g,A)}}}(r.localStore,i))}async function SR(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){q(_p,"User change. New user:",e.toKey());const r=await qw(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(u=>{u.forEach(c=>{c.reject(new z(V.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ba(n,r.Ns)}}function bR(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return se().add(r.key);{let s=se();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const u=n.Tu.get(o);s=s.unionWith(u.view.nu)}return s}}function c1(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=o1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wR.bind(null,e),e.Pu.J_=uR.bind(null,e.eventManager),e.Pu.yu=cR.bind(null,e.eventManager),e}function NR(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ER.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TR.bind(null,e),e}class _u{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return AP(this.persistence,new NP,e.initialUser,this.serializer)}Cu(e){return new $w(up.Vi,this.serializer)}Du(e){return new OP}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_u.provider={build:()=>new _u};class kR extends _u{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){le(this.persistence.referenceDelegate instanceof yu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new hP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new $w(r=>yu.Vi(r,n),this.serializer)}}class Vh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>u0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SR.bind(null,this.syncEngine),await oR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lR}()}createDatastore(e){const n=rc(e.databaseInfo.databaseId),r=zP(e.databaseInfo);return GP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,u){return new QP(r,s,i,o,u)}(this.localStore,this.datastore,e.asyncQueue,n=>u0(this.syncEngine,n,0),function(){return r0.v()?new r0:new MP}())}createSyncEngine(e,n){return function(s,i,o,u,c,d,p){const m=new pR(s,i,o,u,c,d);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const r=J(n);q(hs,"RemoteStore shutting down."),r.Ea.add(5),await Sa(r),r.Aa.shutdown(),r.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Vh.provider={build:()=>new Vh};/**
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
 */class d1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Nr="FirestoreClient";class CR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=Xf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(Nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fd(t,e){t.asyncQueue.verifyOperationInProgress(),q(Nr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function d0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AR(t);q(Nr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>i0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>i0(e.remoteStore,s)),t._onlineComponents=e}async function AR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(Nr,"Using user provided OfflineComponentProvider");try{await fd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ds("Error using user provided cache. Falling back to memory cache: "+n),await fd(t,new _u)}}else q(Nr,"Using default OfflineComponentProvider"),await fd(t,new kR(void 0));return t._offlineComponents}async function h1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(Nr,"Using user provided OnlineComponentProvider"),await d0(t,t._uninitializedComponentsProvider._online)):(q(Nr,"Using default OnlineComponentProvider"),await d0(t,new Vh))),t._onlineComponents}function PR(t){return h1(t).then(e=>e.syncEngine)}async function Lh(t){const e=await h1(t),n=e.eventManager;return n.onListen=mR.bind(null,e.syncEngine),n.onUnlisten=vR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=gR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_R.bind(null,e.syncEngine),n}function RR(t,e,n,r){const s=new d1(r),i=new n1(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>e1(await Lh(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>t1(await Lh(t),i))}}function jR(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,u,c,d){const p=new d1({next:g=>{p.Nu(),o.enqueueAndForget(()=>t1(i,m));const S=g.docs.has(u);!S&&g.fromCache?d.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&c&&c.source==="server"?d.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),m=new n1(Ju(u.path),p,{includeMetadataChanges:!0,Ka:!0});return e1(i,m)}(await Lh(t),t.asyncQueue,e,n,r)),r.promise}function DR(t,e){const n=new yr;return t.asyncQueue.enqueueAndForget(async()=>xR(await PR(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const VR="ComponentProvider",h0=new Map;function LR(t,e,n,r,s){return new tA(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,f1(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const p1="firestore.googleapis.com",f0=!0;class p0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=p1,this.ssl=f0}else this.host=e.host,this.ssl=e.ssl??f0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cP)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=f1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new p0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new p0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new DC;switch(r.type){case"firstParty":return new MC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=h0.get(n);r&&(q(VR,"Removing Datastore"),h0.delete(n),r.terminate())}(this),Promise.resolve()}}function OR(t,e,n,r={}){t=vr(t,oc);const s=Ti(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;s&&(nx(`https://${u}`),rx("Firestore",!0)),i.host!==p1&&i.host!==u&&ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:u,ssl:s,emulatorOptions:r};if(!os(c,o)&&(t._setSettings(c),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=rt.MOCK_USER;else{d=WS(r.mockUserToken,t._app?.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new rt(m)}t._authCredentials=new VC(new Xx(d,p))}}/**
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
 */class ws{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ws(this.firestore,e,this._query)}}class Ae{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ea(n,Ae._jsonSchema))return new Ae(e,r||null,new H(de.fromString(n.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:Le("string",Ae._jsonSchemaVersion),referencePath:Le("string")};class _r extends ws{constructor(e,n,r){super(e,n,Ju(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new H(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function m1(t,e,...n){if(t=lt(t),Zx("collection","path",e),t instanceof oc){const r=de.fromString(e,...n);return Ny(r),new _r(t,null,r)}{if(!(t instanceof Ae||t instanceof _r))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return Ny(r),new _r(t.firestore,null,r)}}function xu(t,e,...n){if(t=lt(t),arguments.length===1&&(e=Xf.newId()),Zx("doc","path",e),t instanceof oc){const r=de.fromString(e,...n);return by(r),new Ae(t,null,new H(r))}{if(!(t instanceof Ae||t instanceof _r))throw new z(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return by(r),new Ae(t.firestore,t instanceof _r?t.converter:null,new H(r))}}/**
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
 */const m0="AsyncQueue";class g0{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Hw(this,"async_queue_retry"),this._c=()=>{const r=hd();r&&q(m0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=hd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new yr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ki(e))throw e;q(m0,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,An("INTERNAL UNHANDLED ERROR: ",y0(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=gp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&K(47125,{Pc:y0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function y0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class la extends oc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new g0,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new g0(e),this._firestoreClient=void 0,await e}}}function MR(t,e){const n=typeof t=="object"?t:ax(),r=typeof t=="string"?t:hu,s=zf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$S("firestore");i&&OR(s,...i)}return s}function wp(t){if(t._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||FR(t),t._firestoreClient}function FR(t){const e=t._freezeSettings(),n=LR(t._databaseId,t._app?.options.appId||"",t._persistenceKey,t._app?.options.apiKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new CR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(t._componentsProvider))}/**
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
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(Xe.fromBase64String(e))}catch(n){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jt(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ea(e,jt._jsonSchema))return jt.fromBase64String(e.bytes)}}jt._jsonSchemaVersion="firestore/bytes/1.0",jt._jsonSchema={type:Le("string",jt._jsonSchemaVersion),bytes:Le("string")};/**
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
 */class g1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ep{constructor(e){this._methodName=e}}/**
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
 */class dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dn._jsonSchemaVersion}}static fromJSON(e){if(Ea(e,dn._jsonSchema))return new dn(e.latitude,e.longitude)}}dn._jsonSchemaVersion="firestore/geoPoint/1.0",dn._jsonSchema={type:Le("string",dn._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ea(e,Gt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Gt(e.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gt._jsonSchemaVersion="firestore/vectorValue/1.0",Gt._jsonSchema={type:Le("string",Gt._jsonSchemaVersion),vectorValues:Le("object")};/**
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
 */const UR=/^__.*__$/;class BR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _s(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}function y1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:t})}}class Tp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Tp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const n=this.path?.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const n=this.path?.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return wu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(y1(this.dataSource)&&UR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class zR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rc(e)}createContext(e,n,r,s=!1){return new Tp({dataSource:e,methodName:n,targetDoc:r,path:Qe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function v1(t){const e=t._freezeSettings(),n=rc(t._databaseId);return new zR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $R(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);w1("Data must be an object, but it was:",o,r);const u=_1(r,o);let c,d;if(i.merge)c=new qt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=ac(e,m,n);if(!o.contains(g))throw new z(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);GR(p,g)||p.push(g)}c=new qt(p),d=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,d=o.fieldTransforms;return new BR(new Rt(u),c,d)}class Ip extends Ep{_toFieldTransform(e){return new AA(e.path,new ia)}isEqual(e){return e instanceof Ip}}function qR(t,e,n,r=!1){return Sp(n,t.createContext(r?4:3,e))}function Sp(t,e){if(x1(t=lt(t)))return w1("Unsupported field value:",e,t),_1(t,e);if(t instanceof Ep)return function(r,s){if(!y1(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const u of r){let c=Sp(u,s.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ge.fromDate(r);return{timestampValue:gu(s.serializer,i)}}if(r instanceof ge){const i=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gu(s.serializer,i)}}if(r instanceof dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jt)return{bytesValue:Dw(s.serializer,r._byteString)};if(r instanceof Ae){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ap(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Gt)return function(o,u){const c=o instanceof Gt?o.toArray():o;return{mapValue:{fields:{[lw]:{stringValue:uw},[fu]:{arrayValue:{values:c.map(p=>{if(typeof p!="number")throw u.createError("VectorValues must only contain numeric values.");return sp(u.serializer,p)})}}}}}}(r,s);if(Bw(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Gu(r)}`)}(t,e)}function _1(t,e){const n={};return nw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(r,s)=>{const i=Sp(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function x1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof dn||t instanceof jt||t instanceof Ae||t instanceof Ep||t instanceof Gt||Bw(t))}function w1(t,e,n){if(!x1(n)||!ew(n)){const r=Gu(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function ac(t,e,n){if((e=lt(e))instanceof g1)return e._internalPath;if(typeof e=="string")return HR(t,e);throw wu("Field path arguments must be of type string or ",t,!1,void 0,n)}const WR=new RegExp("[~\\*/\\[\\]]");function HR(t,e,n){if(e.search(WR)>=0)throw wu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new g1(...e.split("."))._internalPath}catch{throw wu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new z(V.INVALID_ARGUMENT,u+t+c)}function GR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class KR{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ys(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){const n=e.fields?.[fu].arrayValue?.values?.map(r=>ke(r.doubleValue));return new Gt(n)}convertGeoPoint(e){return new dn(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ta(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);le(Uw(r),9688,{name:e});const s=new na(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1 extends KR{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}function T1(){return new Ip("serverTimestamp")}const v0="@firebase/firestore",_0="4.11.0";/**
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
 */function x0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class I1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const n=this._document.data.field(ac("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QR extends I1{data(){return super.data()}}/**
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
 */function YR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bp{}class S1 extends bp{}function b1(t,e,...n){let r=[];e instanceof bp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof kp).length,u=i.filter(c=>c instanceof Np).length;if(o>1||o>0&&u>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Np extends S1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Np(e,n,r)}_apply(e){const n=this._parse(e);return k1(e._query,n),new ws(e.firestore,e.converter,Sh(e._query,n))}_parse(e){const n=v1(e.firestore);return function(i,o,u,c,d,p,m){let g;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){E0(m,p);const k=[];for(const A of m)k.push(w0(c,i,A));g={arrayValue:{values:k}}}else g=w0(c,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||E0(m,p),g=qR(u,o,m,p==="in"||p==="not-in");return Ve.create(d,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class kp extends bp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new kp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const u=i.getFlattenedFilters();for(const c of u)k1(o,c),o=Sh(o,c)}(e._query,n),new ws(e.firestore,e.converter,Sh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cp extends S1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sa(i,o)}(e._query,this._field,this._direction);return new ws(e.firestore,e.converter,_A(e._query,n))}}function N1(t,e="asc"){const n=e,r=ac("orderBy",t);return Cp._create(r,n)}function w0(t,e,n){if(typeof(n=lt(n))=="string"){if(n==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yw(e)&&n.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(de.fromString(n));if(!H.isDocumentKey(r))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vy(t,new H(r))}if(n instanceof Ae)return Vy(t,n._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gu(n)}.`)}function E0(t,e){if(!Array.isArray(t)||t.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function k1(t,e){const n=function(s,i){for(const o of s)for(const u of o.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function JR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class es extends I1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ac("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=es._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}es._jsonSchemaVersion="firestore/documentSnapshot/1.0",es._jsonSchema={type:Le("string",es._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class Al extends es{data(e={}){return super.data(e)}}class ni{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new mo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Al(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(u=>{const c=new Al(s._firestore,s._userDataWriter,u.doc.key,u.doc,new mo(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const c=new Al(s._firestore,s._userDataWriter,u.doc.key,u.doc,new mo(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),p=o.indexOf(u.doc.key)),{type:XR(u.type),doc:c,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ni._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */ni._jsonSchemaVersion="firestore/querySnapshot/1.0",ni._jsonSchema={type:Le("string",ni._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};/**
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
 */function C1(t){t=vr(t,Ae);const e=vr(t.firestore,la),n=wp(e);return jR(n,t._key).then(r=>R1(e,t,r))}function A1(t,e,n){t=vr(t,Ae);const r=vr(t.firestore,la),s=JR(t.converter,e,n),i=v1(r);return ZR(r,[$R(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Tn.none())])}function P1(t,...e){t=lt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||x0(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(x0(e[r])){const d=e[r];e[r]=d.next?.bind(d),e[r+1]=d.error?.bind(d),e[r+2]=d.complete?.bind(d)}let i,o,u;if(t instanceof Ae)o=vr(t.firestore,la),u=Ju(t._key.path),i={next:d=>{e[r]&&e[r](R1(o,t,d))},error:e[r+1],complete:e[r+2]};else{const d=vr(t,ws);o=vr(d.firestore,la),u=d._query;const p=new E1(o);i={next:m=>{e[r]&&e[r](new ni(o,p,d,m))},error:e[r+1],complete:e[r+2]},YR(t._query)}const c=wp(o);return RR(c,u,s,i)}function ZR(t,e){const n=wp(t);return DR(n,e)}function R1(t,e,n){const r=n.docs.get(e._key),s=new E1(t);return new es(t,s,e._key,r,new mo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){jC(Ii),ci(new as("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),u=new la(new LC(r.getProvider("auth-internal")),new FC(o,r.getProvider("app-check-internal")),nA(o,s),o);return i={useFetchStreams:n,...i},u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),mr(v0,_0,e),mr(v0,_0,"esm2020")})();const ej={apiKey:"AIzaSyB_27oRBIvMCnuQb1usHsnylSjKJ4hdxI4",authDomain:"rooliving-92324.firebaseapp.com",projectId:"rooliving-92324",storageBucket:"rooliving-92324.firebasestorage.app",messagingSenderId:"65189371234",appId:"1:65189371234:web:2a74a897aca61971afa03b"},j1=ox(ej),kr=CC(j1),gi=MR(j1);function Re({isLoggedIn:t=!1}){const e=ve(),[n,r]=O.useState(!1);O.useEffect(()=>{const o=qu(kr,u=>{r(!!u)});return()=>o()},[]);const s=async()=>{await Dx(kr),e("/")},i=n||t;return l.jsx("header",{className:"bg-[#1a1a1a] border-b border-gray-800 sticky top-0 z-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"flex justify-between items-center h-16",children:[l.jsxs("button",{onClick:()=>{e(i?"/dashboard":"/")},className:"flex items-center gap-2",children:[l.jsx(Dn,{className:"w-6 h-6 text-orange-600"}),l.jsx("span",{className:"font-bold text-xl text-white",children:"Roo Living"})]}),i?l.jsxs("div",{className:"flex items-center gap-6",children:[l.jsx(Gn,{to:"/dashboard",className:"text-gray-300 hover:text-orange-600",children:"Home"}),l.jsx(Gn,{to:"/services",className:"text-gray-300 hover:text-orange-600",children:"Services"}),l.jsx(Gn,{to:"/plans",className:"text-gray-300 hover:text-orange-600",children:"Plans"}),l.jsx(Gn,{to:"/my-projects",className:"text-gray-300 hover:text-orange-600",children:"My Projects"}),l.jsxs("button",{onClick:()=>e("/notifications"),className:"relative text-gray-300 hover:text-orange-600","aria-label":"Notifications",children:[l.jsx(uh,{className:"w-5 h-5"}),l.jsx("span",{className:"absolute -top-1 -right-1 w-4 h-4 bg-orange-600 text-white text-xs rounded-full flex items-center justify-center",children:"3"})]}),l.jsx("button",{onClick:()=>e("/profile-settings"),className:"text-gray-300 hover:text-orange-600","aria-label":"Profile",children:l.jsx(nu,{className:"w-5 h-5"})}),l.jsx("button",{onClick:s,className:"text-gray-300 hover:text-red-300","aria-label":"Logout",title:"Logout",children:l.jsx(K_,{className:"w-5 h-5"})})]}):l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx(Gn,{to:"/login",className:"px-4 py-2 text-gray-300 hover:text-orange-600",children:"Login"}),l.jsx(Gn,{to:"/signup",className:"px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700",children:"Sign Up"})]})]})})})}function tj(){const t=ve(),n="/bg/hero.mp4",[r,s]=O.useState(!0),[i,o]=O.useState(!1);return O.useEffect(()=>{const u=window.matchMedia("(prefers-reduced-motion: reduce)"),c=()=>o(!!u.matches);return c(),u.addEventListener?.("change",c),()=>u.removeEventListener?.("change",c)},[]),l.jsxs("div",{className:"min-h-screen bg-[#1a1a1a] fx-page relative overflow-hidden rl-font",children:[l.jsx("div",{className:"relative z-10",children:l.jsx(Re,{isLoggedIn:!1})}),l.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0",children:[l.jsx("div",{className:"rl-base"}),r?l.jsx("video",{className:"rl-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",onError:()=>s(!1),children:l.jsx("source",{src:n,type:"video/mp4"})}):l.jsx("div",{className:"rl-fallbackGradient"}),l.jsx("div",{className:"rl-overlay"})]}),l.jsxs("div",{className:"relative z-10",children:[l.jsx("section",{className:"py-20 fx-reveal bg-transparent",children:l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"text-center rl-heroGlass",children:[l.jsxs("h1",{className:"text-5xl font-bold text-white mb-6 rl-heroTitle",children:["Your Dream Home,",l.jsx("br",{}),"Designed & Built with Ease"]}),l.jsx("p",{className:"text-xl text-gray-300 mb-10 max-w-2xl mx-auto rl-heroDesc",children:"Plan your house and landscape, connect with service providers, and get loan guidance — all in one platform."}),l.jsxs("div",{className:"flex flex-wrap justify-center gap-4 rl-btnRow",children:[l.jsx("button",{className:"rl-heroBtn rl-gradMove rl-softBlink",onClick:()=>t("/plans"),children:"Explore Plans"}),l.jsx("button",{className:"rl-heroBtn rl-gradMove rl-softBlink",onClick:()=>t("/services"),children:"Book Services"}),l.jsx("button",{className:"rl-heroBtn rl-gradMove rl-softBlink",onClick:()=>t("/loan-contact"),children:"Request Loan"})]})]})})}),l.jsx("section",{className:"py-20 fx-reveal bg-transparent",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsx("h2",{className:"text-3xl font-bold text-center text-white mb-12",children:"Everything You Need in One Place"}),l.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[l.jsx(bs,{icon:l.jsx(Dn,{className:"w-12 h-12 text-orange-600"}),title:"2D & 3D House Plans",description:"Browse and customize professional house and landscape designs tailored to your needs."}),l.jsx(bs,{icon:l.jsx(Of,{className:"w-12 h-12 text-orange-600"}),title:"Service Marketplace",description:"Connect with verified painters, gardeners, contractors, electricians, and more."}),l.jsx(bs,{icon:l.jsx(pa,{className:"w-12 h-12 text-orange-600"}),title:"Loan Assistance",description:"Get connected with bank officers for home loan guidance through our platform."}),l.jsx(bs,{icon:l.jsx(Bu,{className:"w-12 h-12 text-orange-600"}),title:"Land Inspection",description:"Request professional land inspections to verify your property details."}),l.jsx(bs,{icon:l.jsx(jS,{className:"w-12 h-12 text-orange-600"}),title:"Project Management",description:"Track all your requirements, services, and progress in one dashboard."}),l.jsx(bs,{icon:l.jsx(KI,{className:"w-12 h-12 text-orange-600"}),title:"Trusted Partners",description:"Work with verified service providers rated by real homeowners."})]})]})}),l.jsx("section",{className:"py-20 fx-reveal rl-ctaBlend",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center rl-ctaGlass",children:[l.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Ready to Start Your Project?"}),l.jsx("p",{className:"text-xl text-orange-50 mb-8",children:"Join thousands of homeowners building their dream homes."}),l.jsx("button",{className:"rl-heroBtn rl-gradMove rl-softBlink",onClick:()=>t("/signup"),children:"Sign Up"})]})}),l.jsx("footer",{className:"bg-black text-white py-12 fx-reveal",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"grid md:grid-cols-4 gap-8",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"font-bold text-lg mb-4",children:"Roo Living"}),l.jsx("p",{className:"text-gray-400",children:"Your complete home design and service coordination platform."})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-semibold mb-4",children:"Platform"}),l.jsxs("ul",{className:"space-y-2 text-gray-400",children:[l.jsx("li",{children:"House Plans"}),l.jsx("li",{children:"Services"}),l.jsx("li",{children:"Loan Assistance"}),l.jsx("li",{children:"Land Inspection"})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-semibold mb-4",children:"Company"}),l.jsxs("ul",{className:"space-y-2 text-gray-400",children:[l.jsx("li",{children:"About Us"}),l.jsx("li",{children:"Contact"}),l.jsx("li",{children:"Careers"}),l.jsx("li",{children:"Partners"})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-semibold mb-4",children:"Support"}),l.jsxs("ul",{className:"space-y-2 text-gray-400",children:[l.jsx("li",{children:"Help Center"}),l.jsx("li",{children:"Terms of Service"}),l.jsx("li",{children:"Privacy Policy"})]})]})]}),l.jsx("div",{className:"border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",children:l.jsx("p",{children:"© 2026 Roo Living. Academic UI/UX Prototype - CS2311"})})]})})]}),l.jsx("style",{children:`
          .rl-font{
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Inter, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
          }

          .rl-base{ position:absolute; inset:0; background:#1a1a1a; }

          /* ✅ Video layer */
          .rl-video{
            position:absolute;
            inset:0;
            width:100%;
            height:100%;
            object-fit: cover;
            object-position:center;
            filter: saturate(1.04) contrast(1.04);
            transform: scale(1.02);
          }

          .rl-overlay{
            position:absolute; inset:0;
            background:
              radial-gradient(circle at 30% 20%, rgba(249,115,22,0.10), transparent 55%),
              linear-gradient(to bottom, rgba(0,0,0,0.78), rgba(0,0,0,0.86));
          }

          .rl-fallbackGradient{
            position:absolute; inset:0;
            background:
              radial-gradient(circle at 30% 20%, rgba(249,115,22,0.10), transparent 55%),
              radial-gradient(circle at 75% 70%, rgba(255,255,255,0.06), transparent 55%),
              linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.25));
          }

          .rl-heroGlass{
            background: rgba(0,0,0,0.34);
            border: 1px solid rgba(255,255,255,0.10);
            border-radius: 20px;
            padding: 44px 26px;
            backdrop-filter: blur(7px);
          }

          /* ✅ Buttons */
          .rl-btnRow .rl-heroBtn, .rl-ctaGlass .rl-heroBtn{
            min-width: 190px;
            height: 56px;
            padding: 0 28px;
            border-radius: 16px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 15px;
            letter-spacing: .3px;

            color: #ffffff;
            border: none;
            outline: none;
            cursor: pointer;

            background: linear-gradient(110deg, #ff7a18, #ff9a3d, #ff6a00, #ff8a2a);
            background-size: 260% 260%;

            box-shadow:
              0 14px 40px rgba(249,115,22,0.28),
              0 2px 0 rgba(255,255,255,0.10) inset;

            position: relative;
            overflow: hidden;
            transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
          }

          .rl-btnRow .rl-heroBtn:focus-visible,
          .rl-ctaGlass .rl-heroBtn:focus-visible{
            box-shadow:
              0 18px 60px rgba(249,115,22,0.42),
              0 0 0 3px rgba(249,115,22,0.35);
          }

          .rl-gradMove{ animation: rlGradMove 6.5s ease-in-out infinite; }
          @keyframes rlGradMove{
            0%{ background-position: 0% 50%; }
            50%{ background-position: 100% 50%; }
            100%{ background-position: 0% 50%; }
          }

          .rl-btnRow .rl-heroBtn::after, .rl-ctaGlass .rl-heroBtn::after{
            content:"";
            position:absolute;
            top:-45%;
            left:-70%;
            width: 70%;
            height: 200%;
            background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.30), rgba(255,255,255,0));
            transform: rotate(18deg);
            opacity: 0;
            transition: left 600ms ease, opacity 220ms ease;
            pointer-events:none;
          }

          .rl-btnRow .rl-heroBtn:hover, .rl-ctaGlass .rl-heroBtn:hover{
            transform: translateY(-2px);
            box-shadow:
              0 22px 80px rgba(249,115,22,0.45),
              0 2px 0 rgba(255,255,255,0.12) inset;
            filter: saturate(1.05);
          }
          .rl-btnRow .rl-heroBtn:hover::after, .rl-ctaGlass .rl-heroBtn:hover::after{
            left: 125%;
            opacity: 1;
          }
          .rl-btnRow .rl-heroBtn:active, .rl-ctaGlass .rl-heroBtn:active{
            transform: translateY(0px) scale(0.985);
            box-shadow:
              0 16px 55px rgba(249,115,22,0.34),
              0 2px 0 rgba(255,255,255,0.12) inset;
          }

          .rl-softBlink{ animation: rlSoftBlink 2.8s ease-in-out infinite; }
          @keyframes rlSoftBlink{
            0%,100%{ box-shadow: 0 14px 40px rgba(249,115,22,0.28), 0 2px 0 rgba(255,255,255,0.10) inset; }
            50%{ box-shadow: 0 20px 70px rgba(249,115,22,0.48), 0 2px 0 rgba(255,255,255,0.12) inset; }
          }

          /* Cards: color mix */
          .rl-featureCard{
            position: relative;
            overflow: hidden;
            transform: translateZ(0);
            transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
          }
          .rl-featureCard::before{
            content:"";
            position:absolute; inset:-2px;
            background: linear-gradient(120deg,
              rgba(249,115,22,0.00),
              rgba(249,115,22,0.18),
              rgba(255,154,61,0.10),
              rgba(249,115,22,0.00)
            );
            background-size: 260% 260%;
            opacity: 0.75;
            mix-blend-mode: screen;
            animation: rlGradMove 8s ease-in-out infinite;
            pointer-events:none;
          }
          .rl-featureCard::after{
            content:"";
            position:absolute; inset:0;
            background: radial-gradient(circle at 20% 20%, rgba(249,115,22,0.18), transparent 55%);
            opacity: 0;
            transition: opacity 240ms ease;
            pointer-events:none;
          }
          .rl-featureCard:hover{
            transform: translateY(-7px);
            box-shadow: 0 26px 80px rgba(0,0,0,0.55);
            border-color: rgba(249,115,22,0.75) !important;
          }
          .rl-featureCard:hover::after{ opacity: 1; }

          /* CTA */
          .rl-ctaBlend{ position: relative; background: transparent; overflow: hidden; }
          .rl-ctaBlend::before{
            content:"";
            position:absolute; inset:0;
            background:
              radial-gradient(circle at 20% 30%, rgba(249,115,22,0.45), transparent 60%),
              radial-gradient(circle at 80% 70%, rgba(249,115,22,0.25), transparent 62%);
            opacity: .9;
            pointer-events:none;
          }
          .rl-ctaGlass{
            position: relative;
            z-index: 1;
            padding: 56px 28px;
            border-radius: 22px;
            background: rgba(0,0,0,0.30);
            border: 1px solid rgba(255,255,255,0.12);
            backdrop-filter: blur(8px);
            box-shadow: 0 28px 80px rgba(0,0,0,0.45);
          }

          /* ✅ RESPONSIVE (Desktop + Mobile) */
          @media (max-width: 1024px){
            .rl-heroGlass{ padding: 38px 22px; border-radius: 18px; }
            .rl-video{ transform: scale(1.04); }
          }

          @media (max-width: 768px){
            .rl-heroGlass{ padding: 32px 18px; border-radius: 16px; }
            .rl-heroTitle{ font-size: 2.2rem !important; line-height: 1.15 !important; }
            .rl-heroDesc{ font-size: 1.05rem !important; }
            .rl-btnRow{ gap: 12px !important; }
            .rl-btnRow .rl-heroBtn{
              min-width: 160px;
              height: 52px;
              padding: 0 18px;
              border-radius: 14px;
              font-size: 14px;
            }
            .rl-overlay{
              background:
                radial-gradient(circle at 30% 20%, rgba(249,115,22,0.12), transparent 55%),
                linear-gradient(to bottom, rgba(0,0,0,0.82), rgba(0,0,0,0.90));
            }
          }

          @media (max-width: 480px){
            .rl-heroGlass{ padding: 24px 14px; border-radius: 14px; }
            .rl-heroTitle{ font-size: 1.75rem !important; line-height: 1.15 !important; margin-bottom: 16px !important; }
            .rl-heroDesc{ font-size: 0.95rem !important; margin-bottom: 18px !important; }
            .rl-btnRow{ flex-direction: column; align-items: stretch; }
            .rl-btnRow .rl-heroBtn{ width: 100%; min-width: unset; height: 50px; }
          }

          /* ✅ Reduce motion */
          ${i?`
            .rl-gradMove, .rl-softBlink{ animation: none !important; }
            .rl-featureCard::before{ animation: none !important; }
          `:""}

          @media (prefers-reduced-motion: reduce){
            .rl-gradMove, .rl-softBlink{ animation: none !important; }
            .rl-featureCard::before{ animation: none !important; }
          }
        `})]})}function bs({icon:t,title:e,description:n}){return l.jsxs("div",{className:"fx-card fx-reveal rl-featureCard p-6 border border-gray-700 bg-[#2a2a2a] rounded-lg transition-all",children:[l.jsx("div",{className:"mb-4",children:t}),l.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:e}),l.jsx("p",{className:"text-gray-300",children:n})]})}function fe({children:t,onClick:e,variant:n="primary",type:r="button",fullWidth:s=!1,disabled:i=!1}){const o="fx-btn px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]",u={primary:"bg-orange-600 text-white hover:bg-orange-700 disabled:bg-gray-300",secondary:"bg-black text-white hover:bg-gray-800 disabled:bg-gray-300",outline:"border-2 border-orange-600 text-orange-600 hover:bg-orange-50 disabled:border-gray-300 disabled:text-gray-300"},c=s?"w-full":"";return l.jsx("button",{type:r,onClick:e,disabled:i,className:`${o} ${u[n]} ${c}`,children:t})}function nj(){const t=ve(),[e,n]=O.useState({emailOrPhone:"",password:""}),[r,s]=O.useState(!1),[i,o]=O.useState(""),u=p=>/\S+@\S+\.\S+/.test(p.trim()),c=async p=>{p.preventDefault(),o("");const m=e.emailOrPhone.trim(),g=e.password;if(!m)return o("Email is required.");if(!u(m))return o("Phone login is not enabled. Please use your email.");if(g.length<6)return o("Password must be at least 6 characters.");s(!0);try{await gk(kr,m,g),t("/dashboard")}catch(S){o(S?.message||"Login failed.")}finally{s(!1)}},d=p=>{const{name:m,value:g}=p.target;n(S=>({...S,[m]:g})),o("")};return l.jsxs("div",{className:"min-h-screen bg-[#1a1a1a]",children:[l.jsx(Re,{isLoggedIn:!1}),l.jsx("div",{className:"max-w-md mx-auto px-4 py-12",children:l.jsxs("div",{className:"bg-[#2a2a2a] rounded-lg shadow-lg p-8 border border-gray-800",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-600/20 rounded-full mb-4",children:l.jsx(fS,{className:"w-8 h-8 text-orange-600"})}),l.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Welcome Back"}),l.jsx("p",{className:"text-gray-400",children:"Log in to your account"})]}),i&&l.jsx("div",{className:"mb-5 px-4 py-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 text-sm",children:i}),l.jsxs("form",{onSubmit:c,className:"space-y-5",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"emailOrPhone",className:"block text-sm font-medium text-gray-300 mb-1",children:"Email or Phone"}),l.jsx("input",{type:"text",id:"emailOrPhone",name:"emailOrPhone",value:e.emailOrPhone,onChange:d,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"john@example.com or +1 234 567 8900"})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-300 mb-1",children:"Password"}),l.jsx("input",{type:"password",id:"password",name:"password",value:e.password,onChange:d,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"••••••••"})]}),l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx("input",{type:"checkbox",id:"remember",className:"w-4 h-4 text-orange-600 bg-[#1a1a1a] border-gray-700 rounded focus:ring-orange-600"}),l.jsx("label",{htmlFor:"remember",className:"ml-2 text-sm text-gray-400",children:"Remember me"})]}),l.jsx("a",{href:"#",className:"text-sm text-orange-600 hover:underline",children:"Forgot password?"})]}),l.jsx(fe,{type:"submit",fullWidth:!0,disabled:r,children:r?"Logging in...":"Log In"})]}),l.jsx("div",{className:"mt-6 text-center",children:l.jsxs("p",{className:"text-gray-400",children:["Don't have an account?"," ",l.jsx(Gn,{to:"/signup",className:"text-orange-600 font-medium hover:underline",children:"Sign Up"})]})})]})})]})}function rj(){const t=ve(),[e,n]=O.useState({name:"",phone:"",email:"",password:"",confirmPassword:"",agreeTerms:!1}),[r,s]=O.useState(!1),[i,o]=O.useState(""),u=async d=>{if(d.preventDefault(),o(""),!e.agreeTerms)return o("Please accept the Terms and Privacy Policy.");if(e.password.length<6)return o("Password must be at least 6 characters.");if(e.password!==e.confirmPassword)return o("Passwords do not match.");s(!0);try{const p=await mk(kr,e.email.trim(),e.password);await A1(xu(gi,"users",p.user.uid),{name:e.name.trim(),phone:e.phone.trim(),email:e.email.trim(),createdAt:T1()}),t("/dashboard")}catch(p){const m=p?.message||"Sign up failed.";o(m)}finally{s(!1)}},c=d=>{const{name:p,value:m,type:g,checked:S}=d.target;n(k=>({...k,[p]:g==="checkbox"?S:m})),o("")};return l.jsxs("div",{className:"min-h-screen bg-[#1a1a1a]",children:[l.jsx(Re,{isLoggedIn:!1}),l.jsx("div",{className:"max-w-md mx-auto px-4 py-12",children:l.jsxs("div",{className:"bg-[#2a2a2a] rounded-lg shadow-lg p-8 border border-gray-800",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-600/20 rounded-full mb-4",children:l.jsx(AS,{className:"w-8 h-8 text-orange-600"})}),l.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Create Account"}),l.jsx("p",{className:"text-gray-400",children:"Join Roo Living today"})]}),i&&l.jsx("div",{className:"mb-5 px-4 py-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 text-sm",children:i}),l.jsxs("form",{onSubmit:u,className:"space-y-5",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300 mb-1",children:"Full Name"}),l.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:c,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"John Doe"})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-300 mb-1",children:"Phone Number"}),l.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:c,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"+1 234 567 8900"})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300 mb-1",children:"Email Address"}),l.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:c,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"john@example.com"})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-300 mb-1",children:"Password"}),l.jsx("input",{type:"password",id:"password",name:"password",value:e.password,onChange:c,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"••••••••"})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-300 mb-1",children:"Confirm Password"}),l.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:e.confirmPassword,onChange:c,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"••••••••"})]}),l.jsxs("div",{className:"flex items-start",children:[l.jsx("input",{type:"checkbox",id:"agreeTerms",name:"agreeTerms",checked:e.agreeTerms,onChange:c,required:!0,className:"mt-1 w-4 h-4 text-orange-600 bg-[#1a1a1a] border-gray-700 rounded focus:ring-orange-600"}),l.jsxs("label",{htmlFor:"agreeTerms",className:"ml-2 text-sm text-gray-400",children:["I agree to the"," ",l.jsx("a",{href:"#",className:"text-orange-600 hover:underline",children:"Terms of Service"})," ","and"," ",l.jsx("a",{href:"#",className:"text-orange-600 hover:underline",children:"Privacy Policy"})]})]}),l.jsx(fe,{type:"submit",fullWidth:!0,disabled:r,children:r?"Creating...":"Create Account"})]}),l.jsx("div",{className:"mt-6 text-center",children:l.jsxs("p",{className:"text-gray-400",children:["Already have an account?"," ",l.jsx(Gn,{to:"/login",className:"text-orange-600 font-medium hover:underline",children:"Log In"})]})})]})})]})}function sj(){const t=ve(),[e,n]=O.useState(!1),[r,s]=O.useState(!1),[i,o]=O.useState(""),[u,c]=O.useState("Guest"),[d,p]=O.useState(""),[m,g]=O.useState([]),[S,k]=O.useState(!1);O.useEffect(()=>{let w=null;const _=qu(kr,async I=>{if(n(!0),!I){s(!1),o(""),c("Guest"),p(""),g([]),w&&w(),w=null;return}s(!0),o(I.uid),p(I.email||"");try{const D=await C1(xu(gi,"users",I.uid));if(D.exists()){const F=D.data();c(F?.name||I.displayName||"User")}else c(I.displayName||"User")}catch{c(I.displayName||"User")}try{k(!0);const D=b1(m1(gi,"users",I.uid,"projects"),N1("createdAt","desc"));w&&w(),w=P1(D,F=>{const B=F.docs.map(x=>{const v=x.data();return{id:x.id,name:v?.name||"Untitled Project",status:v?.status||"Planning",progress:Number(v?.progress??0),createdAt:v?.createdAt||null}});g(B),k(!1)},()=>{g([]),k(!1)})}catch{g([]),k(!1)}});return()=>{_(),w&&w()}},[]);const A=O.useMemo(()=>(u||"Guest").trim().split(" ")[0]||"Guest",[u]),j=w=>{if(!r){t("/login");return}t(w)};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:r}),l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs("div",{className:"mb-6",children:[l.jsxs("h1",{className:"text-3xl font-bold text-black mb-2",children:["Welcome back, ",A,"!"]}),l.jsx("p",{className:"text-gray-600",children:"Let's continue building your dream home."}),r&&d&&l.jsx("p",{className:"text-sm text-gray-500 mt-1",children:d}),e&&!r&&l.jsxs("div",{className:"mt-4 flex items-center justify-between gap-3 rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white px-4 py-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(G_,{className:"w-4 h-4 text-orange-700"}),l.jsxs("p",{className:"text-sm text-gray-700",children:["You are viewing ",l.jsx("span",{className:"font-semibold",children:"Demo Mode"}),". Log in to save projects and manage your account."]})]}),l.jsx("button",{onClick:()=>t("/login"),className:"text-sm font-semibold text-orange-700 hover:text-orange-800 hover:underline",children:"Log In"})]})]}),l.jsx("div",{className:"mb-8",children:l.jsxs("div",{className:"relative",children:[l.jsx(Bu,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"}),l.jsx("input",{type:"text",placeholder:"Search for services, plans, or projects...",className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]})}),l.jsxs("div",{className:"grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12",children:[l.jsx(so,{icon:l.jsx(ma,{className:"w-8 h-8"}),title:"Requirements",description:"Define your needs",onClick:()=>j("/requirements/step-1")}),l.jsx(so,{icon:l.jsx(Of,{className:"w-8 h-8"}),title:"Services",description:"Book professionals",onClick:()=>t("/services")}),l.jsx(so,{icon:l.jsx(Dn,{className:"w-8 h-8"}),title:"2D/3D Plans",description:"Browse designs",onClick:()=>t("/plans")}),l.jsx(so,{icon:l.jsx(pa,{className:"w-8 h-8"}),title:"Loan",description:"Get loan guidance",onClick:()=>j("/loan-contact")}),l.jsx(so,{icon:l.jsx(hn,{className:"w-8 h-8"}),title:"Land Check",description:"Request inspection",onClick:()=>j("/land-inspection")})]}),l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[l.jsxs("div",{className:"flex justify-between items-center mb-6",children:[l.jsx("h2",{className:"text-2xl font-bold text-black",children:"My Project Status"}),l.jsxs("button",{onClick:()=>j("/my-projects"),className:"text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1",children:["View All ",l.jsx(Uu,{className:"w-4 h-4"})]})]}),r?S?l.jsx("div",{className:"py-10 text-center text-gray-600",children:"Loading your projects..."}):m.length===0?l.jsxs("div",{className:"text-center py-10",children:[l.jsx("p",{className:"text-gray-600 mb-3",children:"You don't have any projects yet."}),l.jsx("button",{onClick:()=>t("/requirements/step-1"),className:"text-orange-600 font-semibold hover:underline",children:"Start Your First Project"})]}):l.jsx("div",{className:"space-y-4",children:m.map(w=>l.jsxs("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer",onClick:()=>t(`/project/${w.id}`),children:[l.jsxs("div",{className:"flex justify-between items-start mb-3",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"font-semibold text-black",children:w.name}),l.jsx("p",{className:"text-sm text-gray-600",children:w.status})]}),l.jsxs("span",{className:"text-sm font-medium text-orange-600",children:[w.progress,"%"]})]}),l.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:l.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:`${w.progress}%`}})})]},w.id))}):l.jsxs("div",{className:"text-center py-10",children:[l.jsx("p",{className:"text-gray-600 mb-3",children:"You are in Demo Mode. Log in to create and track projects."}),l.jsx("button",{onClick:()=>t("/login"),className:"text-orange-600 font-semibold hover:underline",children:"Log In to Continue"})]})]})]})]})}function so({icon:t,title:e,description:n,onClick:r}){return l.jsxs("button",{onClick:r,className:"bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-left",children:[l.jsx("div",{className:"text-orange-600 mb-3",children:t}),l.jsx("h3",{className:"font-semibold text-black mb-1",children:e}),l.jsx("p",{className:"text-sm text-gray-600",children:n})]})}function ij(){const t=ve(),[e,n]=O.useState("2D"),r=[{id:1,name:"Modern Villa",type:"2D/3D",size:"2,500 sq. ft.",style:"Contemporary",rooms:"3 Bed, 2 Bath"},{id:2,name:"Cozy Cottage",type:"2D/3D",size:"1,800 sq. ft.",style:"Traditional",rooms:"2 Bed, 2 Bath"},{id:3,name:"Luxury Estate",type:"2D/3D",size:"4,200 sq. ft.",style:"Modern",rooms:"5 Bed, 4 Bath"},{id:4,name:"Garden Bungalow",type:"2D/3D",size:"1,500 sq. ft.",style:"Rustic",rooms:"2 Bed, 1 Bath"},{id:5,name:"Family Home",type:"2D/3D",size:"3,000 sq. ft.",style:"Contemporary",rooms:"4 Bed, 3 Bath"},{id:6,name:"Urban Loft",type:"2D/3D",size:"1,200 sq. ft.",style:"Industrial",rooms:"1 Bed, 1 Bath"}];return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs("div",{className:"mb-8",children:[l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Plans Library"}),l.jsx("p",{className:"text-gray-600",children:"Browse professional house and landscape designs"})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[l.jsxs("div",{className:"flex-1 relative",children:[l.jsx(Bu,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),l.jsx("input",{type:"text",placeholder:"Search plans by style, size, or features...",className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),l.jsxs("div",{className:"flex gap-2 bg-white border border-gray-300 rounded-lg p-1",children:[l.jsx("button",{onClick:()=>n("2D"),className:`px-6 py-2 rounded-md font-medium transition-colors ${e==="2D"?"bg-orange-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:"2D Plans"}),l.jsx("button",{onClick:()=>n("3D"),className:`px-6 py-2 rounded-md font-medium transition-colors ${e==="3D"?"bg-orange-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:"3D Plans"})]})]}),l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(s=>l.jsxs("div",{className:"bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden",children:[l.jsxs("div",{className:"bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center relative",children:[l.jsx(Dn,{className:"w-20 h-20 text-gray-400"}),l.jsx("div",{className:"absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium",children:e})]}),l.jsxs("div",{className:"p-6",children:[l.jsx("h3",{className:"text-xl font-bold text-black mb-2",children:s.name}),l.jsxs("div",{className:"space-y-2 mb-4 text-sm text-gray-600",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Size:"}),l.jsx("span",{className:"font-medium text-black",children:s.size})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Style:"}),l.jsx("span",{className:"font-medium text-black",children:s.style})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Layout:"}),l.jsx("span",{className:"font-medium text-black",children:s.rooms})]})]}),l.jsxs("button",{onClick:()=>t(`/plans/${s.id}`),className:"w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2",children:[l.jsx(vS,{className:"w-4 h-4"}),"View Plan"]})]})]},s.id))})]})]})}function oj(){const t=ve(),e=[{id:"painter",name:"Painting Services",description:"Professional interior and exterior painting",rating:4.8,reviews:156,priceRange:"$200 - $800",image:"🎨"},{id:"gardener",name:"Gardening & Landscaping",description:"Garden design, planting, and maintenance",rating:4.9,reviews:203,priceRange:"$150 - $600",image:"🌳"},{id:"contractor",name:"General Contractor",description:"Construction and renovation services",rating:4.7,reviews:187,priceRange:"$500 - $2000",image:"🏗️"},{id:"electrician",name:"Electrical Services",description:"Wiring, fixtures, and electrical repairs",rating:4.9,reviews:142,priceRange:"$100 - $500",image:"⚡"},{id:"plumber",name:"Plumbing Services",description:"Plumbing installation and repairs",rating:4.6,reviews:128,priceRange:"$80 - $400",image:"🔧"},{id:"carpenter",name:"Carpentry Services",description:"Custom woodwork and furniture",rating:4.8,reviews:95,priceRange:"$150 - $700",image:"🪵"}];return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs("div",{className:"mb-8",children:[l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Service Marketplace"}),l.jsx("p",{className:"text-gray-600",children:"Find and book trusted professionals for your project"})]}),l.jsx("div",{className:"mb-8",children:l.jsxs("div",{className:"relative",children:[l.jsx(Bu,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),l.jsx("input",{type:"text",placeholder:"Search for services...",className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]})}),l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(n=>l.jsxs("div",{className:"bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden",children:[l.jsx("div",{className:"bg-gradient-to-br from-orange-100 to-orange-50 h-32 flex items-center justify-center text-6xl",children:n.image}),l.jsxs("div",{className:"p-6",children:[l.jsx("h3",{className:"text-xl font-bold text-black mb-2",children:n.name}),l.jsx("p",{className:"text-gray-600 text-sm mb-4",children:n.description}),l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx(Q_,{className:"w-4 h-4 text-yellow-500 fill-yellow-500"}),l.jsx("span",{className:"ml-1 font-medium text-black",children:n.rating})]}),l.jsx("span",{className:"text-gray-400",children:"•"}),l.jsxs("span",{className:"text-sm text-gray-600",children:[n.reviews," reviews"]})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("span",{className:"text-sm text-gray-600",children:"Price Range: "}),l.jsx("span",{className:"font-medium text-black",children:n.priceRange})]}),l.jsx("button",{onClick:()=>t(`/services/${n.id}`),className:"w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors",children:"View Service"})]})]},n.id))})]})]})}function aj(){const{serviceId:t}=jr(),e=ve(),n={painter:{name:"Painting Services",description:"Professional interior and exterior painting services for residential and commercial properties. Our team uses high-quality paints and follows best practices to ensure a flawless finish.",rating:4.8,reviews:156,image:"🎨"},gardener:{name:"Gardening & Landscaping",description:"Transform your outdoor space with expert garden design, planting, and maintenance services. We specialize in creating beautiful, sustainable landscapes.",rating:4.9,reviews:203,image:"🌳"},contractor:{name:"General Contractor",description:"Complete construction and renovation services for your home. From foundation to finishing, we handle all aspects of your building project.",rating:4.7,reviews:187,image:"🏗️"}},r=n[t]||n.painter,s=[{name:"Basic",price:"$200",features:["Single room service","1 professional worker","Basic materials included","1-day completion"]},{name:"Standard",price:"$450",features:["Up to 3 rooms","2 professional workers","Premium materials included","2-3 days completion","Free consultation"],popular:!0},{name:"Premium",price:"$800",features:["Whole house service","3+ professional workers","Premium materials & brands","5-7 days completion","Free consultation","1-year warranty"]}];return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsx("div",{className:"bg-white rounded-lg shadow-md p-8 mb-8",children:l.jsxs("div",{className:"flex items-start gap-6",children:[l.jsx("div",{className:"bg-gradient-to-br from-orange-100 to-orange-50 w-32 h-32 rounded-lg flex items-center justify-center text-6xl",children:r.image}),l.jsxs("div",{className:"flex-1",children:[l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:r.name}),l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx(Q_,{className:"w-5 h-5 text-yellow-500 fill-yellow-500"}),l.jsx("span",{className:"ml-1 font-medium text-black",children:r.rating})]}),l.jsx("span",{className:"text-gray-400",children:"•"}),l.jsxs("span",{className:"text-gray-600",children:[r.reviews," reviews"]})]}),l.jsx("p",{className:"text-gray-700 leading-relaxed",children:r.description})]})]})}),l.jsxs("div",{className:"mb-8",children:[l.jsx("h2",{className:"text-2xl font-bold text-black mb-6",children:"Service Packages"}),l.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:s.map((i,o)=>l.jsxs("div",{className:`bg-white rounded-lg shadow-md p-6 ${i.popular?"ring-2 ring-orange-600 relative":""}`,children:[i.popular&&l.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2",children:l.jsx("span",{className:"bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium",children:"Most Popular"})}),l.jsx("h3",{className:"text-xl font-bold text-black mb-2",children:i.name}),l.jsx("div",{className:"text-3xl font-bold text-orange-600 mb-6",children:i.price}),l.jsx("ul",{className:"space-y-3 mb-6",children:i.features.map((u,c)=>l.jsxs("li",{className:"flex items-start gap-2",children:[l.jsx(eS,{className:"w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"}),l.jsx("span",{className:"text-gray-700",children:u})]},c))}),l.jsxs(fe,{onClick:()=>e(`/book-service/${t}`),variant:i.popular?"primary":"outline",fullWidth:!0,children:["Book ",i.name]})]},o))})]})]})]})}function lj(){const{serviceId:t}=jr(),e=ve(),[n,r]=O.useState({project:"",date:"",time:"",address:"",notes:""}),s=o=>{o.preventDefault(),e("/booking-confirmation")},i=o=>{const{name:u,value:c}=o.target;r(d=>({...d,[u]:c}))};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Book Service"}),l.jsx("p",{className:"text-gray-600 mb-8",children:"Fill in the details to schedule your service"}),l.jsxs("form",{onSubmit:s,className:"space-y-6",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(ma,{className:"w-4 h-4 inline mr-2"}),"Select Project"]}),l.jsxs("select",{name:"project",value:n.project,onChange:i,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Choose a project..."}),l.jsx("option",{value:"1",children:"Modern Villa Project"}),l.jsx("option",{value:"2",children:"Garden Renovation"}),l.jsx("option",{value:"new",children:"Create New Project"})]})]}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(Dr,{className:"w-4 h-4 inline mr-2"}),"Preferred Date"]}),l.jsx("input",{type:"date",name:"date",value:n.date,onChange:i,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(Yo,{className:"w-4 h-4 inline mr-2"}),"Preferred Time"]}),l.jsxs("select",{name:"time",value:n.time,onChange:i,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Select time..."}),l.jsx("option",{value:"morning",children:"Morning (8:00 AM - 12:00 PM)"}),l.jsx("option",{value:"afternoon",children:"Afternoon (12:00 PM - 4:00 PM)"}),l.jsx("option",{value:"evening",children:"Evening (4:00 PM - 8:00 PM)"})]})]})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(hn,{className:"w-4 h-4 inline mr-2"}),"Service Address"]}),l.jsx("input",{type:"text",name:"address",value:n.address,onChange:i,required:!0,placeholder:"123 Main Street, City, State, ZIP",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Additional Notes (Optional)"}),l.jsx("textarea",{name:"notes",value:n.notes,onChange:i,rows:4,placeholder:"Any special requirements or instructions...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(Zr,{className:"w-4 h-4 inline mr-2"}),"Upload Reference Images (Optional)"]}),l.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-600 transition-colors cursor-pointer",children:[l.jsx(Zr,{className:"w-8 h-8 text-gray-400 mx-auto mb-2"}),l.jsx("p",{className:"text-sm text-gray-600",children:"Click to upload or drag and drop"}),l.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"PNG, JPG, PDF up to 10MB"})]})]}),l.jsxs("div",{className:"flex gap-4 pt-4",children:[l.jsx(fe,{type:"button",variant:"outline",onClick:()=>e(-1),fullWidth:!0,children:"Cancel"}),l.jsx(fe,{type:"submit",fullWidth:!0,children:"Confirm Booking"})]})]})]})})]})}function uj(){const t=ve();return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsx("div",{className:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6",children:l.jsx(Ei,{className:"w-12 h-12 text-green-600"})}),l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Booking Confirmed!"}),l.jsx("p",{className:"text-gray-600 mb-8",children:"Your service has been successfully scheduled. You'll receive a confirmation email shortly."}),l.jsxs("div",{className:"bg-gray-50 rounded-lg p-6 mb-8 text-left",children:[l.jsx("h2",{className:"text-xl font-bold text-black mb-4",children:"Booking Summary"}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx(ma,{className:"w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-600",children:"Service"}),l.jsx("p",{className:"font-medium text-black",children:"Painting Services - Standard Package"})]})]}),l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx(Dr,{className:"w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-600",children:"Date"}),l.jsx("p",{className:"font-medium text-black",children:"January 25, 2026"})]})]}),l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx(Yo,{className:"w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-600",children:"Time"}),l.jsx("p",{className:"font-medium text-black",children:"Morning (8:00 AM - 12:00 PM)"})]})]}),l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx(hn,{className:"w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-600",children:"Location"}),l.jsx("p",{className:"font-medium text-black",children:"123 Main Street, City, State 12345"})]})]})]})]}),l.jsxs("div",{className:"mb-8",children:[l.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Booking Reference"}),l.jsx("p",{className:"text-2xl font-bold text-orange-600",children:"#BK-2026-00143"})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[l.jsx(fe,{onClick:()=>t("/my-projects"),fullWidth:!0,children:"Track in My Projects"}),l.jsx(fe,{onClick:()=>t("/dashboard"),variant:"outline",fullWidth:!0,children:"Back to Dashboard"})]})]})})]})}function cj(){const t=ve(),[e,n]=O.useState({bank:"",income:"",contactTime:"",loanAmount:"",purpose:""}),r=o=>{o.preventDefault(),t("/loan-success")},s=o=>{const{name:u,value:c}=o.target;n(d=>({...d,[u]:c}))},i=["First National Bank","Community Credit Union","Metro Bank","Citizens Bank","Regional Trust Bank"];return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4",children:l.jsx(pa,{className:"w-8 h-8 text-orange-600"})}),l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Loan Contact Request"}),l.jsx("p",{className:"text-gray-600",children:"Get connected with bank officers for home loan guidance"})]}),l.jsxs("form",{onSubmit:r,className:"space-y-6",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(JI,{className:"w-4 h-4 inline mr-2"}),"Select Partner Bank"]}),l.jsxs("select",{name:"bank",value:e.bank,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Choose a bank..."}),i.map(o=>l.jsx("option",{value:o,children:o},o))]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Estimated Loan Amount Needed"}),l.jsxs("select",{name:"loanAmount",value:e.loanAmount,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Select amount range..."}),l.jsx("option",{value:"50k-100k",children:"$50,000 - $100,000"}),l.jsx("option",{value:"100k-200k",children:"$100,000 - $200,000"}),l.jsx("option",{value:"200k-300k",children:"$200,000 - $300,000"}),l.jsx("option",{value:"300k-500k",children:"$300,000 - $500,000"}),l.jsx("option",{value:"500k+",children:"$500,000+"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Monthly Income Range"}),l.jsxs("select",{name:"income",value:e.income,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Select income range..."}),l.jsx("option",{value:"0-3k",children:"$0 - $3,000"}),l.jsx("option",{value:"3k-5k",children:"$3,000 - $5,000"}),l.jsx("option",{value:"5k-7k",children:"$5,000 - $7,000"}),l.jsx("option",{value:"7k-10k",children:"$7,000 - $10,000"}),l.jsx("option",{value:"10k+",children:"$10,000+"})]})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(Dr,{className:"w-4 h-4 inline mr-2"}),"Preferred Contact Time"]}),l.jsxs("select",{name:"contactTime",value:e.contactTime,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Select preferred time..."}),l.jsx("option",{value:"morning",children:"Morning (9:00 AM - 12:00 PM)"}),l.jsx("option",{value:"afternoon",children:"Afternoon (12:00 PM - 4:00 PM)"}),l.jsx("option",{value:"evening",children:"Evening (4:00 PM - 7:00 PM)"}),l.jsx("option",{value:"anytime",children:"Anytime"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Loan Purpose (Optional)"}),l.jsx("textarea",{name:"purpose",value:e.purpose,onChange:s,rows:4,placeholder:"Brief description of what the loan will be used for...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),l.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:l.jsxs("p",{className:"text-sm text-blue-900",children:[l.jsx("strong",{children:"Note:"})," This is a contact request only. A bank representative will reach out to you within 2-3 business days to discuss loan options and requirements. This is not a loan application."]})}),l.jsxs("div",{className:"flex gap-4 pt-4",children:[l.jsx(fe,{type:"button",variant:"outline",onClick:()=>t("/dashboard"),fullWidth:!0,children:"Cancel"}),l.jsx(fe,{type:"submit",fullWidth:!0,children:"Submit Request"})]})]})]})})]})}function dj(){const t=ve();return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsx("div",{className:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6",children:l.jsx(Ei,{className:"w-12 h-12 text-green-600"})}),l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Request Submitted!"}),l.jsx("p",{className:"text-gray-600 mb-8",children:"Your loan contact request has been successfully submitted."}),l.jsxs("div",{className:"bg-gray-50 rounded-lg p-6 mb-8 text-left",children:[l.jsx("h2",{className:"text-xl font-bold text-black mb-4",children:"What Happens Next?"}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:l.jsx(Dr,{className:"w-5 h-5 text-orange-600"})}),l.jsxs("div",{children:[l.jsx("p",{className:"font-medium text-black",children:"Within 2-3 Business Days"}),l.jsx("p",{className:"text-sm text-gray-600",children:"A bank representative from First National Bank will review your request."})]})]}),l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:l.jsx(Ff,{className:"w-5 h-5 text-orange-600"})}),l.jsxs("div",{children:[l.jsx("p",{className:"font-medium text-black",children:"Contact from Bank"}),l.jsx("p",{className:"text-sm text-gray-600",children:"You'll receive a phone call during your preferred time to discuss loan options."})]})]}),l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:l.jsx(Mf,{className:"w-5 h-5 text-orange-600"})}),l.jsxs("div",{children:[l.jsx("p",{className:"font-medium text-black",children:"Email Confirmation"}),l.jsx("p",{className:"text-sm text-gray-600",children:"Check your email for a confirmation message with your reference number."})]})]})]})]}),l.jsxs("div",{className:"mb-8",children:[l.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Request Reference Number"}),l.jsx("p",{className:"text-2xl font-bold text-orange-600",children:"#LN-2026-00087"})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[l.jsx(fe,{onClick:()=>t("/project/1"),fullWidth:!0,children:"Back to Project"}),l.jsx(fe,{onClick:()=>t("/dashboard"),variant:"outline",fullWidth:!0,children:"Go to Dashboard"})]})]})})]})}function hj(){ve();const t=[{id:1,type:"booking",iconType:"check",title:"Booking Confirmed",message:"Your painting service has been scheduled for Jan 25, 2026",time:"2 hours ago",read:!1},{id:2,type:"design",iconType:"home",title:"New Design Available",message:"We have added new 3D plans matching your requirements",time:"5 hours ago",read:!1},{id:3,type:"loan",iconType:"dollar",title:"Loan Contact Update",message:"Bank representative will contact you tomorrow at 2:00 PM",time:"1 day ago",read:!1},{id:4,type:"inspection",iconType:"map",title:"Inspection Scheduled",message:"Your land inspection is scheduled for Jan 22, 2026",time:"1 day ago",read:!0},{id:5,type:"reminder",iconType:"calendar",title:"Project Reminder",message:"Don't forget to complete your requirements form",time:"2 days ago",read:!0}],e=n=>{const r="w-5 h-5";switch(n){case"check":return l.jsx(Ei,{className:r});case"home":return l.jsx(Dn,{className:r});case"dollar":return l.jsx(pa,{className:r});case"map":return l.jsx(hn,{className:r});case"calendar":return l.jsx(Dr,{className:r});default:return l.jsx(uh,{className:r})}};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[l.jsx("div",{className:"bg-orange-100 p-3 rounded-lg",children:l.jsx(uh,{className:"w-6 h-6 text-orange-600"})}),l.jsxs("div",{children:[l.jsx("h1",{className:"text-3xl font-bold text-black",children:"Notifications"}),l.jsx("p",{className:"text-gray-600",children:"Stay updated on your projects and bookings"})]})]}),l.jsx("div",{className:"bg-white rounded-lg shadow-md divide-y divide-gray-200",children:t.map(n=>l.jsx("div",{className:`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${n.read?"":"bg-orange-50"}`,children:l.jsxs("div",{className:"flex items-start gap-4",children:[l.jsx("div",{className:`p-3 rounded-lg ${n.read?"bg-gray-100 text-gray-600":"bg-orange-600 text-white"}`,children:e(n.iconType)}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-start justify-between mb-1",children:[l.jsx("h3",{className:"font-semibold text-black",children:n.title}),!n.read&&l.jsx("span",{className:"ml-2 w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"})]}),l.jsx("p",{className:"text-sm text-gray-600 mb-2",children:n.message}),l.jsx("p",{className:"text-xs text-gray-500",children:n.time})]})]})},n.id))}),l.jsx("div",{className:"mt-6 text-center",children:l.jsx("button",{className:"text-orange-600 hover:text-orange-700 font-medium",children:"Mark all as read"})})]})]})}function fj(){const t=ve(),[e,n]=O.useState({name:"User",email:"",phone:"",address1:"",address2:""}),[r,s]=O.useState(""),[i,o]=O.useState(!0),[u,c]=O.useState(!1);O.useEffect(()=>{const g=qu(kr,async S=>{if(!S){s(""),n({name:"User",email:"",phone:"",address1:"",address2:""}),o(!1);return}s(S.uid);try{const k=await C1(xu(gi,"users",S.uid));if(k.exists()){const A=k.data();n({name:A?.name||S.displayName||"User",email:A?.email||S.email||"",phone:A?.phone||"",address1:A?.address1||"",address2:A?.address2||""})}else n({name:S.displayName||"User",email:S.email||"",phone:"",address1:"",address2:""})}catch{n({name:S.displayName||"User",email:S.email||"",phone:"",address1:"",address2:""})}finally{o(!1)}});return()=>g()},[]);const d=g=>{const{name:S,value:k}=g.target;n(A=>({...A,[S]:k}))},p=async g=>{if(g.preventDefault(),!r){alert("Please login first.");return}c(!0);try{await A1(xu(gi,"users",r),{name:e.name.trim(),email:e.email.trim(),phone:e.phone.trim(),address1:e.address1,address2:e.address2,updatedAt:T1()},{merge:!0}),alert("Profile updated successfully!")}catch(S){alert(S?.message||"Failed to save profile.")}finally{c(!1)}},m=async()=>{try{await Dx(kr)}finally{t("/")}};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs("div",{className:"mb-8",children:[l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Profile & Settings"}),l.jsx("p",{className:"text-gray-600",children:"Manage your account information and preferences"})]}),l.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[l.jsx("div",{className:"md:col-span-1",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[l.jsxs("div",{className:"text-center mb-6",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-3",children:l.jsx(nu,{className:"w-10 h-10 text-orange-600"})}),l.jsx("h3",{className:"font-bold text-black",children:i?"Loading...":e.name}),l.jsx("p",{className:"text-sm text-gray-600",children:i?"":e.email})]}),l.jsxs("nav",{className:"space-y-2",children:[l.jsx("button",{className:"w-full text-left px-4 py-2 bg-orange-50 text-orange-700 rounded-lg font-medium",children:"Profile Details"}),l.jsx("button",{className:"w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg",children:"Saved Addresses"}),l.jsx("button",{className:"w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg",children:"Security"}),l.jsx("button",{className:"w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg",children:"Contact Support"})]}),l.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200",children:l.jsxs("button",{onClick:m,className:"w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium",children:[l.jsx(K_,{className:"w-4 h-4"}),"Logout"]})})]})}),l.jsxs("div",{className:"md:col-span-2",children:[l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[l.jsx("h2",{className:"text-xl font-bold text-black mb-6",children:"Personal Information"}),l.jsxs("form",{onSubmit:p,className:"space-y-6",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(nu,{className:"w-4 h-4 inline mr-2"}),"Full Name"]}),l.jsx("input",{type:"text",name:"name",value:e.name,onChange:d,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",disabled:i})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(Mf,{className:"w-4 h-4 inline mr-2"}),"Email Address"]}),l.jsx("input",{type:"email",name:"email",value:e.email,onChange:d,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",disabled:i})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(Ff,{className:"w-4 h-4 inline mr-2"}),"Phone Number"]}),l.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:d,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",disabled:i})]}),l.jsx(fe,{type:"submit",fullWidth:!0,disabled:i||u,children:u?"Saving...":"Save Changes"})]})]}),l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[l.jsxs("div",{className:"flex justify-between items-center mb-6",children:[l.jsx("h2",{className:"text-xl font-bold text-black",children:"Saved Addresses"}),l.jsx("button",{className:"text-orange-600 hover:text-orange-700 font-medium text-sm",children:"+ Add New"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx(T0,{icon:l.jsx(hn,{className:"w-5 h-5"}),label:"Home",address:e.address1||"—"}),l.jsx(T0,{icon:l.jsx(hn,{className:"w-5 h-5"}),label:"Work",address:e.address2||"—"})]})]}),l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[l.jsx("h2",{className:"text-xl font-bold text-black mb-4",children:"Contact Support"}),l.jsx("p",{className:"text-gray-600 mb-4",children:"Need help? Send us a message and we'll get back to you within 24 hours."}),l.jsx("textarea",{rows:4,placeholder:"Describe your issue or question...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent mb-4"}),l.jsx(fe,{variant:"outline",fullWidth:!0,children:"Send Message"})]})]})]})]})]})}function T0({icon:t,label:e,address:n}){return l.jsxs("div",{className:"flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-orange-600 transition-colors",children:[l.jsx("div",{className:"bg-orange-100 p-2 rounded-lg text-orange-600",children:t}),l.jsxs("div",{className:"flex-1",children:[l.jsx("p",{className:"font-medium text-black mb-1",children:e}),l.jsx("p",{className:"text-sm text-gray-600",children:n})]}),l.jsx("button",{className:"text-sm text-orange-600 hover:underline",children:"Edit"})]})}function pj(t){return t?t.toDate().toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):"—"}function mj(t){if(!t)return"";const e=Date.now(),n=t.toDate().getTime(),r=Math.max(0,e-n),s=Math.floor(r/6e4);if(s<1)return"Just now";if(s<60)return`${s} min ago`;const i=Math.floor(s/60);return i<24?`${i} hours ago`:`${Math.floor(i/24)} days ago`}function gj(){const t=ve(),[e,n]=O.useState(!1),[r,s]=O.useState(!1),[i,o]=O.useState(""),[u,c]=O.useState(!1),[d,p]=O.useState([]);O.useEffect(()=>{let g=null;const S=qu(kr,k=>{if(n(!0),!k){s(!1),o(""),p([]),g&&g(),g=null;return}s(!0),o(k.uid),c(!0);const A=b1(m1(gi,"users",k.uid,"projects"),N1("createdAt","desc"));g&&g(),g=P1(A,j=>{const w=j.docs.map(_=>{const I=_.data();return{id:_.id,name:I?.name||"Untitled Project",status:I?.status||"Planning",progress:Number(I?.progress??0),createdAt:I?.createdAt||null}});p(w),c(!1)},()=>{p([]),c(!1)})});return()=>{S(),g&&g()}},[]);const m=O.useMemo(()=>r?"My Projects":"Demo Mode",[r]);return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:r}),l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs("div",{className:"mb-6",children:[l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:m}),l.jsx("p",{className:"text-gray-600",children:"Manage and track your home projects"}),e&&!r&&l.jsxs("div",{className:"mt-4 flex items-center justify-between gap-3 rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white px-4 py-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(G_,{className:"w-4 h-4 text-orange-700"}),l.jsxs("p",{className:"text-sm text-gray-700",children:["You are viewing ",l.jsx("span",{className:"font-semibold",children:"Demo Mode"}),". Log in to see your own projects."]})]}),l.jsx("button",{onClick:()=>t("/login"),className:"text-sm font-semibold text-orange-700 hover:underline",children:"Log In"})]})]}),r?u?l.jsx("div",{className:"py-12 text-center text-gray-600",children:"Loading your projects..."}):d.length===0?l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:[l.jsx("p",{className:"text-gray-700 mb-3",children:"You don't have any projects yet."}),l.jsx("button",{onClick:()=>t("/requirements/step-1"),className:"text-orange-600 font-semibold hover:underline",children:"Start Your First Project"})]}):l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:d.map(g=>l.jsxs("button",{onClick:()=>t(`/project/${g.id}`),className:"text-left bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100",children:[l.jsxs("div",{className:"flex items-start justify-between mb-4",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-10 h-10 bg-orange-50 rounded-lg",children:l.jsx(lS,{className:"w-5 h-5 text-orange-600"})}),l.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700",children:g.status})]}),l.jsx("h3",{className:"text-xl font-bold text-black mb-2",children:g.name}),l.jsxs("div",{className:"flex justify-between items-center mb-2",children:[l.jsx("p",{className:"text-sm text-gray-600",children:"Progress"}),l.jsxs("p",{className:"text-sm font-semibold text-orange-600",children:[g.progress,"%"]})]}),l.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2 mb-5",children:l.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:`${g.progress}%`}})}),l.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-500",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Dr,{className:"w-4 h-4"}),l.jsx("span",{children:pj(g.createdAt)})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Yo,{className:"w-4 h-4"}),l.jsx("span",{children:mj(g.createdAt)})]})]}),l.jsxs("div",{className:"mt-5 flex items-center gap-2 text-orange-600 font-semibold text-sm",children:["Open Project ",l.jsx(Uu,{className:"w-4 h-4"})]})]},g.id))}):l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:[l.jsx("p",{className:"text-gray-700 mb-3",children:"No projects are shown in Demo Mode."}),l.jsx("p",{className:"text-sm text-gray-500 mb-5",children:"Log in with your account to view projects saved under your email."}),l.jsx("button",{onClick:()=>t("/login"),className:"px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700",children:"Go to Login"})]})]})]})}function yj(){const{projectId:t}=jr(),e=ve(),n=[{id:"requirements",title:"Requirements",description:"Define your project needs",icon:l.jsx(ma,{className:"w-5 h-5"}),status:"completed",action:()=>e("/requirements/step1")},{id:"design",title:"Design",description:"View and customize plans",icon:l.jsx(Dn,{className:"w-5 h-5"}),status:"current",action:()=>e("/plans")},{id:"services",title:"Services",description:"Book professionals",icon:l.jsx(Of,{className:"w-5 h-5"}),status:"pending",action:()=>e("/services")},{id:"loan",title:"Loan Contact",description:"Get financial assistance",icon:l.jsx(pa,{className:"w-5 h-5"}),status:"pending",action:()=>e("/loan-request")},{id:"inspection",title:"Land Inspection",description:"Verify property details",icon:l.jsx(hn,{className:"w-5 h-5"}),status:"pending",action:()=>e("/land-inspection")}];return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-8",children:[l.jsxs("div",{className:"flex justify-between items-start mb-4",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Modern Villa Project"}),l.jsx("p",{className:"text-gray-600",children:"Created on Jan 5, 2026"})]}),l.jsx("span",{className:"px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium",children:"In Progress"})]}),l.jsx("div",{className:"flex items-center gap-4",children:l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex justify-between mb-2",children:[l.jsx("span",{className:"text-sm text-gray-600",children:"Overall Progress"}),l.jsx("span",{className:"text-sm font-medium text-orange-600",children:"65%"})]}),l.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:l.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:"65%"}})})]})})]}),l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[l.jsx("h2",{className:"text-2xl font-bold text-black mb-6",children:"Project Timeline"}),l.jsx("div",{className:"space-y-6",children:n.map((r,s)=>l.jsxs("div",{className:"relative",children:[s<n.length-1&&l.jsx("div",{className:`absolute left-5 top-12 w-0.5 h-16 ${r.status==="completed"?"bg-green-600":"bg-gray-300"}`}),l.jsxs("div",{className:`flex items-start gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${r.status==="completed"?"border-green-200 bg-green-50":r.status==="current"?"border-orange-600 bg-orange-50":"border-gray-200 bg-white hover:border-gray-300"}`,onClick:r.action,children:[l.jsx("div",{className:`p-2 rounded-full ${r.status==="completed"?"bg-green-600 text-white":r.status==="current"?"bg-orange-600 text-white":"bg-gray-200 text-gray-500"}`,children:r.status==="completed"?l.jsx(Ei,{className:"w-5 h-5"}):r.icon}),l.jsxs("div",{className:"flex-1",children:[l.jsx("h3",{className:"text-lg font-semibold text-black mb-1",children:r.title}),l.jsx("p",{className:"text-sm text-gray-600",children:r.description})]}),l.jsx("button",{className:`px-4 py-2 rounded-lg font-medium ${r.status==="current"?"bg-orange-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:r.status==="completed"?"Review":r.status==="current"?"Continue":"Start"})]})]},r.id))})]})]})]})}function vj(){const{planId:t}=jr(),e=ve(),n="/plans/ModernVillaPlan.pdf",r=()=>{e("/requirements/step-1")},s=()=>{window.open(n,"_blank")},i=()=>{const u="roo_project_plans",c=JSON.parse(localStorage.getItem(u)||"[]"),d={planId:t||"1",name:"Modern Villa Plan",area:"2,500 sq. ft.",addedAt:new Date().toISOString()},m=c.some(g=>g.planId===d.planId)?c:[d,...c];localStorage.setItem(u,JSON.stringify(m)),e("/my-projects")},o=()=>{alert("Fullscreen preview is a placeholder in this prototype.")};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[l.jsxs("button",{onClick:()=>e("/plans"),className:"flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-6",children:[l.jsx(Lf,{className:"w-5 h-5"}),"Back to Plans Library"]}),l.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[l.jsxs("div",{className:"bg-gradient-to-br from-gray-100 to-gray-200 h-[600px] flex items-center justify-center relative",children:[l.jsx(Dn,{className:"w-40 h-40 text-gray-400"}),l.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx("p",{className:"text-2xl font-bold text-gray-600 mb-2",children:"2D/3D Plan Preview"}),l.jsx("p",{className:"text-gray-500",children:"Interactive plan viewer placeholder"})]})}),l.jsx("button",{onClick:o,className:"absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md hover:bg-gray-50","aria-label":"Fullscreen",children:l.jsx(xS,{className:"w-5 h-5 text-gray-700"})})]}),l.jsxs("div",{className:"p-8",children:[l.jsxs("div",{className:"flex justify-between items-start mb-6",children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Modern Villa Plan"}),l.jsx("p",{className:"text-gray-600",children:"Contemporary design with spacious layout"})]}),l.jsxs("div",{className:"text-right",children:[l.jsx("div",{className:"text-2xl font-bold text-orange-600",children:"2,500 sq. ft."}),l.jsx("div",{className:"text-sm text-gray-600",children:"Total Area"})]})]}),l.jsxs("div",{className:"grid md:grid-cols-4 gap-6 mb-8",children:[l.jsx(ll,{label:"Bedrooms",value:"3"}),l.jsx(ll,{label:"Bathrooms",value:"2"}),l.jsx(ll,{label:"Floors",value:"2"}),l.jsx(ll,{label:"Style",value:"Contemporary"})]}),l.jsxs("div",{className:"mb-8",children:[l.jsx("h3",{className:"text-lg font-bold text-black mb-3",children:"Key Features"}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[l.jsx(Ns,{text:"Open concept living and dining area"}),l.jsx(Ns,{text:"Master suite with walk-in closet"}),l.jsx(Ns,{text:"Modern kitchen with island"}),l.jsx(Ns,{text:"Covered outdoor patio"}),l.jsx(Ns,{text:"Two-car garage"}),l.jsx(Ns,{text:"Energy-efficient design"})]})]}),l.jsxs("div",{className:"flex flex-wrap gap-4",children:[l.jsxs(fe,{variant:"primary",onClick:r,children:[l.jsx(IS,{className:"w-5 h-5 mr-2 inline"}),"Request Changes"]}),l.jsxs(fe,{variant:"outline",onClick:s,children:[l.jsx(iS,{className:"w-5 h-5 mr-2 inline"}),"Download Plan"]}),l.jsx(fe,{variant:"secondary",onClick:i,children:"Add to Project"})]}),l.jsxs("p",{className:"text-xs text-gray-500 mt-4",children:["Plan ID: ",t||"1"]})]})]})]})]})}function ll({label:t,value:e}){return l.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center",children:[l.jsx("div",{className:"text-2xl font-bold text-black mb-1",children:e}),l.jsx("div",{className:"text-sm text-gray-600",children:t})]})}function Ns({text:t}){return l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-2 h-2 bg-orange-600 rounded-full"}),l.jsx("span",{className:"text-gray-700",children:t})]})}function _j(){const{inspectionId:t}=jr(),e=ve(),n=[{status:"Requested",completed:!0,date:"Jan 17, 2026"},{status:"Scheduled",completed:!0,date:"Jan 18, 2026"},{status:"In Progress",completed:!1,date:"Jan 22, 2026"},{status:"Completed",completed:!1,date:"Pending"}];return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Inspection Status"}),l.jsx("p",{className:"text-gray-600",children:"Track your land inspection progress"})]}),l.jsxs("div",{className:"mb-8",children:[l.jsx("h2",{className:"text-xl font-bold text-black mb-6",children:"Inspection Progress"}),l.jsx("div",{className:"space-y-6",children:n.map((r,s)=>l.jsxs("div",{className:"relative flex items-start gap-4",children:[s<n.length-1&&l.jsx("div",{className:`absolute left-5 top-12 w-0.5 h-16 ${r.completed?"bg-green-600":"bg-gray-300"}`}),l.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${r.completed?"bg-green-600 text-white":"bg-gray-200 text-gray-500"}`,children:r.completed?l.jsx(Ei,{className:"w-5 h-5"}):l.jsx(Yo,{className:"w-5 h-5"})}),l.jsx("div",{className:"flex-1 pb-8",children:l.jsx("div",{className:"flex justify-between items-start",children:l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold text-black",children:r.status}),l.jsx("p",{className:"text-sm text-gray-600",children:r.date})]})})})]},s))})]}),l.jsxs("div",{className:"bg-gray-50 rounded-lg p-6 mb-8",children:[l.jsx("h2",{className:"text-xl font-bold text-black mb-4",children:"Inspector Details"}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:l.jsx(nu,{className:"w-5 h-5 text-orange-600"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-600",children:"Inspector Name"}),l.jsx("p",{className:"font-medium text-black",children:"Michael Anderson"})]})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:l.jsx(Ff,{className:"w-5 h-5 text-orange-600"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-600",children:"Phone"}),l.jsx("p",{className:"font-medium text-black",children:"+1 (555) 123-4567"})]})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:l.jsx(Mf,{className:"w-5 h-5 text-orange-600"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-600",children:"Email"}),l.jsx("p",{className:"font-medium text-black",children:"m.anderson@inspector.com"})]})]})]})]}),l.jsxs("div",{className:"bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8",children:[l.jsx("h3",{className:"font-bold text-black mb-3",children:"Scheduled Inspection"}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Dr,{className:"w-4 h-4 text-orange-600"}),l.jsxs("span",{className:"text-sm text-gray-700",children:[l.jsx("strong",{children:"Date:"})," Monday, January 22, 2026"]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Yo,{className:"w-4 h-4 text-orange-600"}),l.jsxs("span",{className:"text-sm text-gray-700",children:[l.jsx("strong",{children:"Time:"})," 10:00 AM - 12:00 PM"]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(hn,{className:"w-4 h-4 text-orange-600"}),l.jsxs("span",{className:"text-sm text-gray-700",children:[l.jsx("strong",{children:"Location:"})," 123 Main Street, Springfield, 12345"]})]})]})]}),l.jsxs("div",{className:"flex gap-4",children:[l.jsx(fe,{onClick:()=>e("/project/1"),fullWidth:!0,children:"Back to Project"}),l.jsx(fe,{onClick:()=>e("/dashboard"),variant:"outline",fullWidth:!0,children:"Go to Dashboard"})]})]})})]})}function xj(){const t=ve(),[e,n]=O.useState({location:"",address:"",date:"",time:"",inspectionType:"",notes:""}),r=i=>{i.preventDefault(),t("/inspection-status/1")},s=i=>{const{name:o,value:u}=i.target;n(c=>({...c,[o]:u}))};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4",children:l.jsx(hn,{className:"w-8 h-8 text-orange-600"})}),l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Land Inspection Request"}),l.jsx("p",{className:"text-gray-600",children:"Schedule a professional inspection of your property"})]}),l.jsxs("form",{onSubmit:r,className:"space-y-6",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(hn,{className:"w-4 h-4 inline mr-2"}),"City/Location"]}),l.jsx("input",{type:"text",name:"location",value:e.location,onChange:s,required:!0,placeholder:"e.g., Springfield",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Property Address"}),l.jsx("input",{type:"text",name:"address",value:e.address,onChange:s,required:!0,placeholder:"Full address including street, state, and ZIP",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(ma,{className:"w-4 h-4 inline mr-2"}),"Inspection Type"]}),l.jsxs("select",{name:"inspectionType",value:e.inspectionType,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Select inspection type..."}),l.jsx("option",{value:"basic",children:"Basic Land Survey"}),l.jsx("option",{value:"soil",children:"Soil Testing"}),l.jsx("option",{value:"boundary",children:"Boundary Verification"}),l.jsx("option",{value:"comprehensive",children:"Comprehensive Inspection"})]})]}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(Dr,{className:"w-4 h-4 inline mr-2"}),"Preferred Date"]}),l.jsx("input",{type:"date",name:"date",value:e.date,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Preferred Time"}),l.jsxs("select",{name:"time",value:e.time,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Select time..."}),l.jsx("option",{value:"morning",children:"Morning (8:00 AM - 12:00 PM)"}),l.jsx("option",{value:"afternoon",children:"Afternoon (12:00 PM - 4:00 PM)"}),l.jsx("option",{value:"evening",children:"Evening (4:00 PM - 6:00 PM)"})]})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Additional Notes (Optional)"}),l.jsx("textarea",{name:"notes",value:e.notes,onChange:s,rows:4,placeholder:"Any specific areas of concern or special requirements...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[l.jsx(Zr,{className:"w-4 h-4 inline mr-2"}),"Upload Property Documents (Optional)"]}),l.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-600 transition-colors cursor-pointer",children:[l.jsx(Zr,{className:"w-8 h-8 text-gray-400 mx-auto mb-2"}),l.jsx("p",{className:"text-sm text-gray-600",children:"Click to upload property deed, survey, or other documents"}),l.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"PDF, PNG, JPG up to 10MB"})]})]}),l.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:l.jsxs("p",{className:"text-sm text-blue-900",children:[l.jsx("strong",{children:"Inspection Fee:"})," $150 - $500 depending on inspection type. Payment will be collected at the time of inspection."]})}),l.jsxs("div",{className:"flex gap-4 pt-4",children:[l.jsx(fe,{type:"button",variant:"outline",onClick:()=>t("/dashboard"),fullWidth:!0,children:"Cancel"}),l.jsx(fe,{type:"submit",fullWidth:!0,children:"Submit Request"})]})]})]})})]})}function wj(){const t=ve(),[e,n]=O.useState({floors:"",rooms:"",bathrooms:"",landSize:"",budget:""}),r=i=>{i.preventDefault(),t("/requirements/step2")},s=i=>{const{name:o,value:u}=i.target;n(c=>({...c,[o]:u}))};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[l.jsxs("div",{className:"mb-8",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("span",{className:"text-sm font-medium text-orange-600",children:"Step 1 of 3"}),l.jsx("span",{className:"text-sm text-gray-600",children:"House Basics"})]}),l.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:l.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:"33%"}})})]}),l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4",children:l.jsx(Dn,{className:"w-8 h-8 text-orange-600"})}),l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"House Basics"}),l.jsx("p",{className:"text-gray-600",children:"Tell us about your basic house requirements"})]}),l.jsxs("form",{onSubmit:r,className:"space-y-6",children:[l.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Number of Floors"}),l.jsxs("select",{name:"floors",value:e.floors,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Select floors..."}),l.jsx("option",{value:"1",children:"1 Floor"}),l.jsx("option",{value:"2",children:"2 Floors"}),l.jsx("option",{value:"3",children:"3 Floors"}),l.jsx("option",{value:"4+",children:"4+ Floors"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Number of Rooms"}),l.jsxs("select",{name:"rooms",value:e.rooms,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Select rooms..."}),l.jsx("option",{value:"1",children:"1 Room"}),l.jsx("option",{value:"2",children:"2 Rooms"}),l.jsx("option",{value:"3",children:"3 Rooms"}),l.jsx("option",{value:"4",children:"4 Rooms"}),l.jsx("option",{value:"5+",children:"5+ Rooms"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Number of Bathrooms"}),l.jsxs("select",{name:"bathrooms",value:e.bathrooms,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Select bathrooms..."}),l.jsx("option",{value:"1",children:"1 Bathroom"}),l.jsx("option",{value:"2",children:"2 Bathrooms"}),l.jsx("option",{value:"3",children:"3 Bathrooms"}),l.jsx("option",{value:"4+",children:"4+ Bathrooms"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Land Size (sq. ft.)"}),l.jsx("input",{type:"number",name:"landSize",value:e.landSize,onChange:s,required:!0,placeholder:"e.g., 2500",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Budget Range"}),l.jsxs("select",{name:"budget",value:e.budget,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Select budget..."}),l.jsx("option",{value:"50k-100k",children:"$50,000 - $100,000"}),l.jsx("option",{value:"100k-200k",children:"$100,000 - $200,000"}),l.jsx("option",{value:"200k-300k",children:"$200,000 - $300,000"}),l.jsx("option",{value:"300k-500k",children:"$300,000 - $500,000"}),l.jsx("option",{value:"500k+",children:"$500,000+"})]})]}),l.jsxs("div",{className:"flex gap-4 pt-4",children:[l.jsx(fe,{type:"button",variant:"outline",onClick:()=>t("/dashboard"),fullWidth:!0,children:"Cancel"}),l.jsxs(fe,{type:"submit",fullWidth:!0,children:["Next: Landscape Needs",l.jsx(Uu,{className:"w-5 h-5 ml-2 inline"})]})]})]})]})})]})}function Ej(){const t=ve(),[e,n]=O.useState({gardenArea:"",plantPreferences:[],parking:"",outdoorSeating:!1,waterFeatures:!1}),r=u=>{u.preventDefault(),t("/requirements/step3")},s=u=>{const{name:c,value:d,type:p}=u.target;if(p==="checkbox"){const m=u.target.checked;n(g=>({...g,[c]:m}))}else n(m=>({...m,[c]:d}))},i=u=>{n(c=>({...c,plantPreferences:c.plantPreferences.includes(u)?c.plantPreferences.filter(d=>d!==u):[...c.plantPreferences,u]}))},o=["Flowers","Trees","Shrubs","Grass Lawn","Vegetable Garden","Herbs"];return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[l.jsxs("div",{className:"mb-8",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("span",{className:"text-sm font-medium text-orange-600",children:"Step 2 of 3"}),l.jsx("span",{className:"text-sm text-gray-600",children:"Landscape Needs"})]}),l.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:l.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:"66%"}})})]}),l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4",children:l.jsx(NS,{className:"w-8 h-8 text-orange-600"})}),l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Landscape Needs"}),l.jsx("p",{className:"text-gray-600",children:"Define your outdoor and landscape preferences"})]}),l.jsxs("form",{onSubmit:r,className:"space-y-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Garden Area Size (sq. ft.)"}),l.jsx("input",{type:"number",name:"gardenArea",value:e.gardenArea,onChange:s,required:!0,placeholder:"e.g., 500",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Plant Preferences (Select all that apply)"}),l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:o.map(u=>l.jsx("button",{type:"button",onClick:()=>i(u),className:`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${e.plantPreferences.includes(u)?"border-orange-600 bg-orange-50 text-orange-700":"border-gray-200 bg-white text-gray-700 hover:border-gray-300"}`,children:u},u))})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Parking Space Required"}),l.jsxs("select",{name:"parking",value:e.parking,onChange:s,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[l.jsx("option",{value:"",children:"Select parking..."}),l.jsx("option",{value:"none",children:"No Parking"}),l.jsx("option",{value:"1",children:"1 Car"}),l.jsx("option",{value:"2",children:"2 Cars"}),l.jsx("option",{value:"3+",children:"3+ Cars"})]})]}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx("input",{type:"checkbox",id:"outdoorSeating",name:"outdoorSeating",checked:e.outdoorSeating,onChange:s,className:"w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-600"}),l.jsx("label",{htmlFor:"outdoorSeating",className:"ml-3 text-gray-700",children:"Include Outdoor Seating Area"})]}),l.jsxs("div",{className:"flex items-center",children:[l.jsx("input",{type:"checkbox",id:"waterFeatures",name:"waterFeatures",checked:e.waterFeatures,onChange:s,className:"w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-600"}),l.jsx("label",{htmlFor:"waterFeatures",className:"ml-3 text-gray-700",children:"Include Water Features (Fountain, Pond, etc.)"})]})]}),l.jsxs("div",{className:"flex gap-4 pt-4",children:[l.jsxs(fe,{type:"button",variant:"outline",onClick:()=>t("/requirements/step1"),fullWidth:!0,children:[l.jsx(Lf,{className:"w-5 h-5 mr-2 inline"}),"Back"]}),l.jsxs(fe,{type:"submit",fullWidth:!0,children:["Next: Upload & Confirm",l.jsx(Uu,{className:"w-5 h-5 ml-2 inline"})]})]})]})]})})]})}function Tj(){const t=ve(),e=n=>{n.preventDefault(),t("/project/1")};return l.jsxs("div",{className:"min-h-screen bg-gray-50",children:[l.jsx(Re,{isLoggedIn:!0}),l.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[l.jsxs("div",{className:"mb-8",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("span",{className:"text-sm font-medium text-orange-600",children:"Step 3 of 3"}),l.jsx("span",{className:"text-sm text-gray-600",children:"Upload & Confirm"})]}),l.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:l.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:"100%"}})})]}),l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4",children:l.jsx(Zr,{className:"w-8 h-8 text-orange-600"})}),l.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Upload & Confirm"}),l.jsx("p",{className:"text-gray-600",children:"Add supporting documents and review your requirements"})]}),l.jsxs("form",{onSubmit:e,className:"space-y-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Upload Land Sketch (Optional)"}),l.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-600 transition-colors cursor-pointer",children:[l.jsx(Zr,{className:"w-10 h-10 text-gray-400 mx-auto mb-3"}),l.jsx("p",{className:"text-gray-600 mb-1",children:"Click to upload or drag and drop"}),l.jsx("p",{className:"text-sm text-gray-500",children:"PNG, JPG, PDF up to 10MB"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Upload Reference Images (Optional)"}),l.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-600 transition-colors cursor-pointer",children:[l.jsx(Zr,{className:"w-10 h-10 text-gray-400 mx-auto mb-3"}),l.jsx("p",{className:"text-gray-600 mb-1",children:"Upload inspiration or reference images"}),l.jsx("p",{className:"text-sm text-gray-500",children:"Multiple files allowed • PNG, JPG up to 10MB each"})]})]}),l.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[l.jsx("h3",{className:"text-lg font-bold text-black mb-4",children:"Requirements Summary"}),l.jsxs("div",{className:"space-y-3",children:[l.jsx(en,{label:"House Floors",value:"2 Floors"}),l.jsx(en,{label:"Rooms",value:"3 Rooms"}),l.jsx(en,{label:"Bathrooms",value:"2 Bathrooms"}),l.jsx(en,{label:"Land Size",value:"2,500 sq. ft."}),l.jsx(en,{label:"Budget",value:"$200,000 - $300,000"}),l.jsxs("div",{className:"border-t border-gray-300 my-3 pt-3",children:[l.jsx(en,{label:"Garden Area",value:"500 sq. ft."}),l.jsx(en,{label:"Plant Preferences",value:"Flowers, Trees, Grass Lawn"}),l.jsx(en,{label:"Parking",value:"2 Cars"}),l.jsx(en,{label:"Outdoor Seating",value:"Yes"}),l.jsx(en,{label:"Water Features",value:"No"})]})]})]}),l.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3",children:[l.jsx(Ei,{className:"w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-blue-900 font-medium",children:"Almost there!"}),l.jsx("p",{className:"text-sm text-blue-700",children:"After submitting, we'll generate personalized house plans and connect you with service providers."})]})]}),l.jsxs("div",{className:"flex gap-4 pt-4",children:[l.jsxs(fe,{type:"button",variant:"outline",onClick:()=>t("/requirements/step2"),fullWidth:!0,children:[l.jsx(Lf,{className:"w-5 h-5 mr-2 inline"}),"Back"]}),l.jsx(fe,{type:"submit",fullWidth:!0,children:"Submit Requirements"})]})]})]})})]})}function en({label:t,value:e}){return l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsxs("span",{className:"text-sm text-gray-600",children:[t,":"]}),l.jsx("span",{className:"text-sm font-medium text-black",children:e})]})}function Ij(){const{id:t}=jr();return l.jsx(ze,{to:`/service/${t}`,replace:!0})}function Sj(){const{id:t}=jr();return l.jsx(ze,{to:`/plan-viewer?id=${t??""}`,replace:!0})}function bj(){const{pkg:t}=jr();return l.jsx(ze,{to:`/book-service?pkg=${t??""}`,replace:!0})}function Nj(){return l.jsx("div",{className:"min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h1",{className:"text-3xl font-bold",children:"404"}),l.jsx("p",{className:"mt-2 text-gray-400",children:"Page not found"})]})})}function kj({children:t}){const e=wi(),n=sessionStorage.getItem("roo_welcome_seen"),s=["/","/login","/signup","/welcome"].includes(e.pathname);return!n&&s&&e.pathname!=="/welcome"?l.jsx(ze,{to:"/welcome",replace:!0}):l.jsx(l.Fragment,{children:t})}function Cj(){return l.jsx(OI,{children:l.jsx(kj,{children:l.jsxs(AI,{children:[l.jsx(X,{path:"/welcome",element:l.jsx(DS,{})}),l.jsx(X,{path:"/",element:l.jsx(tj,{})}),l.jsx(X,{path:"/login",element:l.jsx(nj,{})}),l.jsx(X,{path:"/signup",element:l.jsx(rj,{})}),l.jsx(X,{path:"/dashboard",element:l.jsx(sj,{})}),l.jsx(X,{path:"/plans",element:l.jsx(ij,{})}),l.jsx(X,{path:"/services",element:l.jsx(oj,{})}),l.jsx(X,{path:"/services/:id",element:l.jsx(Ij,{})}),l.jsx(X,{path:"/service/:id",element:l.jsx(aj,{})}),l.jsx(X,{path:"/book-service",element:l.jsx(lj,{})}),l.jsx(X,{path:"/booking-confirmation",element:l.jsx(uj,{})}),l.jsx(X,{path:"/book-service/:pkg",element:l.jsx(bj,{})}),l.jsx(X,{path:"/book-service-form",element:l.jsx(ze,{to:"/book-service",replace:!0})}),l.jsx(X,{path:"/booking",element:l.jsx(ze,{to:"/book-service",replace:!0})}),l.jsx(X,{path:"/book",element:l.jsx(ze,{to:"/book-service",replace:!0})}),l.jsx(X,{path:"/booking-confirm",element:l.jsx(ze,{to:"/booking-confirmation",replace:!0})}),l.jsx(X,{path:"/booking-success",element:l.jsx(ze,{to:"/booking-confirmation",replace:!0})}),l.jsx(X,{path:"/confirmation",element:l.jsx(ze,{to:"/booking-confirmation",replace:!0})}),l.jsx(X,{path:"/loan-contact",element:l.jsx(cj,{})}),l.jsx(X,{path:"/loan-submitted",element:l.jsx(dj,{})}),l.jsx(X,{path:"/loan-request",element:l.jsx(ze,{to:"/loan-contact",replace:!0})}),l.jsx(X,{path:"/loan-contact-request",element:l.jsx(ze,{to:"/loan-contact",replace:!0})}),l.jsx(X,{path:"/loan-success",element:l.jsx(ze,{to:"/loan-submitted",replace:!0})}),l.jsx(X,{path:"/loan-request-success",element:l.jsx(ze,{to:"/loan-submitted",replace:!0})}),l.jsx(X,{path:"/notifications",element:l.jsx(hj,{})}),l.jsx(X,{path:"/profile-settings",element:l.jsx(fj,{})}),l.jsx(X,{path:"/profile",element:l.jsx(ze,{to:"/profile-settings",replace:!0})}),l.jsx(X,{path:"/my-projects",element:l.jsx(gj,{})}),l.jsx(X,{path:"/project/:id",element:l.jsx(yj,{})}),l.jsx(X,{path:"/plan-viewer",element:l.jsx(vj,{})}),l.jsx(X,{path:"/inspection-status",element:l.jsx(_j,{})}),l.jsx(X,{path:"/land-inspection",element:l.jsx(xj,{})}),l.jsx(X,{path:"/plans/:id",element:l.jsx(Sj,{})}),l.jsx(X,{path:"/requirements/step-1",element:l.jsx(wj,{})}),l.jsx(X,{path:"/requirements/step-2",element:l.jsx(Ej,{})}),l.jsx(X,{path:"/requirements/step-3",element:l.jsx(Tj,{})}),l.jsx(X,{path:"/requirements/step1",element:l.jsx(ze,{to:"/requirements/step-1",replace:!0})}),l.jsx(X,{path:"/requirements/step2",element:l.jsx(ze,{to:"/requirements/step-2",replace:!0})}),l.jsx(X,{path:"/requirements/step3",element:l.jsx(ze,{to:"/requirements/step-3",replace:!0})}),l.jsx(X,{path:"*",element:l.jsx(Nj,{})})]})})})}L_(document.getElementById("root")).render(l.jsx(Cj,{}));
