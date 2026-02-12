(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Uh={exports:{}},Za={},Bh={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function Xw(){if(Gg)return ke;Gg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),E=Symbol.iterator;function I(L){return L===null||typeof L!="object"?null:(L=E&&L[E]||L["@@iterator"],typeof L=="function"?L:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,q={};function z(L,Q,Se){this.props=L,this.context=Q,this.refs=q,this.updater=Se||D}z.prototype.isReactComponent={},z.prototype.setState=function(L,Q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Q,"setState")},z.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function K(){}K.prototype=z.prototype;function J(L,Q,Se){this.props=L,this.context=Q,this.refs=q,this.updater=Se||D}var te=J.prototype=new K;te.constructor=J,W(te,z.prototype),te.isPureReactComponent=!0;var ge=Array.isArray,Te=Object.prototype.hasOwnProperty,Ie={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function S(L,Q,Se){var be,Ce={},Re=null,Be=null;if(Q!=null)for(be in Q.ref!==void 0&&(Be=Q.ref),Q.key!==void 0&&(Re=""+Q.key),Q)Te.call(Q,be)&&!R.hasOwnProperty(be)&&(Ce[be]=Q[be]);var Ve=arguments.length-2;if(Ve===1)Ce.children=Se;else if(1<Ve){for(var qe=Array(Ve),Kt=0;Kt<Ve;Kt++)qe[Kt]=arguments[Kt+2];Ce.children=qe}if(L&&L.defaultProps)for(be in Ve=L.defaultProps,Ve)Ce[be]===void 0&&(Ce[be]=Ve[be]);return{$$typeof:r,type:L,key:Re,ref:Be,props:Ce,_owner:Ie.current}}function k(L,Q){return{$$typeof:r,type:L.type,key:Q,ref:L.ref,props:L.props,_owner:L._owner}}function j(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function P(L){var Q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Se){return Q[Se]})}var V=/\/+/g;function N(L,Q){return typeof L=="object"&&L!==null&&L.key!=null?P(""+L.key):Q.toString(36)}function He(L,Q,Se,be,Ce){var Re=typeof L;(Re==="undefined"||Re==="boolean")&&(L=null);var Be=!1;if(L===null)Be=!0;else switch(Re){case"string":case"number":Be=!0;break;case"object":switch(L.$$typeof){case r:case e:Be=!0}}if(Be)return Be=L,Ce=Ce(Be),L=be===""?"."+N(Be,0):be,ge(Ce)?(Se="",L!=null&&(Se=L.replace(V,"$&/")+"/"),He(Ce,Q,Se,"",function(Kt){return Kt})):Ce!=null&&(j(Ce)&&(Ce=k(Ce,Se+(!Ce.key||Be&&Be.key===Ce.key?"":(""+Ce.key).replace(V,"$&/")+"/")+L)),Q.push(Ce)),1;if(Be=0,be=be===""?".":be+":",ge(L))for(var Ve=0;Ve<L.length;Ve++){Re=L[Ve];var qe=be+N(Re,Ve);Be+=He(Re,Q,Se,qe,Ce)}else if(qe=I(L),typeof qe=="function")for(L=qe.call(L),Ve=0;!(Re=L.next()).done;)Re=Re.value,qe=be+N(Re,Ve++),Be+=He(Re,Q,Se,qe,Ce);else if(Re==="object")throw Q=String(L),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Be}function It(L,Q,Se){if(L==null)return L;var be=[],Ce=0;return He(L,be,"","",function(Re){return Q.call(Se,Re,Ce++)}),be}function Ot(L){if(L._status===-1){var Q=L._result;Q=Q(),Q.then(function(Se){(L._status===0||L._status===-1)&&(L._status=1,L._result=Se)},function(Se){(L._status===0||L._status===-1)&&(L._status=2,L._result=Se)}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var tt={current:null},re={transition:null},fe={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:re,ReactCurrentOwner:Ie};function ae(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:It,forEach:function(L,Q,Se){It(L,function(){Q.apply(this,arguments)},Se)},count:function(L){var Q=0;return It(L,function(){Q++}),Q},toArray:function(L){return It(L,function(Q){return Q})||[]},only:function(L){if(!j(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ke.Component=z,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=J,ke.StrictMode=s,ke.Suspense=y,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,ke.act=ae,ke.cloneElement=function(L,Q,Se){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var be=W({},L.props),Ce=L.key,Re=L.ref,Be=L._owner;if(Q!=null){if(Q.ref!==void 0&&(Re=Q.ref,Be=Ie.current),Q.key!==void 0&&(Ce=""+Q.key),L.type&&L.type.defaultProps)var Ve=L.type.defaultProps;for(qe in Q)Te.call(Q,qe)&&!R.hasOwnProperty(qe)&&(be[qe]=Q[qe]===void 0&&Ve!==void 0?Ve[qe]:Q[qe])}var qe=arguments.length-2;if(qe===1)be.children=Se;else if(1<qe){Ve=Array(qe);for(var Kt=0;Kt<qe;Kt++)Ve[Kt]=arguments[Kt+2];be.children=Ve}return{$$typeof:r,type:L.type,key:Ce,ref:Re,props:be,_owner:Be}},ke.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},ke.createElement=S,ke.createFactory=function(L){var Q=S.bind(null,L);return Q.type=L,Q},ke.createRef=function(){return{current:null}},ke.forwardRef=function(L){return{$$typeof:p,render:L}},ke.isValidElement=j,ke.lazy=function(L){return{$$typeof:w,_payload:{_status:-1,_result:L},_init:Ot}},ke.memo=function(L,Q){return{$$typeof:v,type:L,compare:Q===void 0?null:Q}},ke.startTransition=function(L){var Q=re.transition;re.transition={};try{L()}finally{re.transition=Q}},ke.unstable_act=ae,ke.useCallback=function(L,Q){return tt.current.useCallback(L,Q)},ke.useContext=function(L){return tt.current.useContext(L)},ke.useDebugValue=function(){},ke.useDeferredValue=function(L){return tt.current.useDeferredValue(L)},ke.useEffect=function(L,Q){return tt.current.useEffect(L,Q)},ke.useId=function(){return tt.current.useId()},ke.useImperativeHandle=function(L,Q,Se){return tt.current.useImperativeHandle(L,Q,Se)},ke.useInsertionEffect=function(L,Q){return tt.current.useInsertionEffect(L,Q)},ke.useLayoutEffect=function(L,Q){return tt.current.useLayoutEffect(L,Q)},ke.useMemo=function(L,Q){return tt.current.useMemo(L,Q)},ke.useReducer=function(L,Q,Se){return tt.current.useReducer(L,Q,Se)},ke.useRef=function(L){return tt.current.useRef(L)},ke.useState=function(L){return tt.current.useState(L)},ke.useSyncExternalStore=function(L,Q,Se){return tt.current.useSyncExternalStore(L,Q,Se)},ke.useTransition=function(){return tt.current.useTransition()},ke.version="18.3.1",ke}var Kg;function Of(){return Kg||(Kg=1,Bh.exports=Xw()),Bh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function Zw(){if(Qg)return Za;Qg=1;var r=Of(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(p,y,v){var w,E={},I=null,D=null;v!==void 0&&(I=""+v),y.key!==void 0&&(I=""+y.key),y.ref!==void 0&&(D=y.ref);for(w in y)s.call(y,w)&&!l.hasOwnProperty(w)&&(E[w]=y[w]);if(p&&p.defaultProps)for(w in y=p.defaultProps,y)E[w]===void 0&&(E[w]=y[w]);return{$$typeof:e,type:p,key:I,ref:D,props:E,_owner:o.current}}return Za.Fragment=t,Za.jsx=h,Za.jsxs=h,Za}var Yg;function e1(){return Yg||(Yg=1,Uh.exports=Zw()),Uh.exports}var c=e1(),ic={},zh={exports:{}},nn={},$h={exports:{}},qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function t1(){return Jg||(Jg=1,(function(r){function e(re,fe){var ae=re.length;re.push(fe);e:for(;0<ae;){var L=ae-1>>>1,Q=re[L];if(0<o(Q,fe))re[L]=fe,re[ae]=Q,ae=L;else break e}}function t(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var fe=re[0],ae=re.pop();if(ae!==fe){re[0]=ae;e:for(var L=0,Q=re.length,Se=Q>>>1;L<Se;){var be=2*(L+1)-1,Ce=re[be],Re=be+1,Be=re[Re];if(0>o(Ce,ae))Re<Q&&0>o(Be,Ce)?(re[L]=Be,re[Re]=ae,L=Re):(re[L]=Ce,re[be]=ae,L=be);else if(Re<Q&&0>o(Be,ae))re[L]=Be,re[Re]=ae,L=Re;else break e}}return fe}function o(re,fe){var ae=re.sortIndex-fe.sortIndex;return ae!==0?ae:re.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var y=[],v=[],w=1,E=null,I=3,D=!1,W=!1,q=!1,z=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(re){for(var fe=t(v);fe!==null;){if(fe.callback===null)s(v);else if(fe.startTime<=re)s(v),fe.sortIndex=fe.expirationTime,e(y,fe);else break;fe=t(v)}}function ge(re){if(q=!1,te(re),!W)if(t(y)!==null)W=!0,Ot(Te);else{var fe=t(v);fe!==null&&tt(ge,fe.startTime-re)}}function Te(re,fe){W=!1,q&&(q=!1,K(S),S=-1),D=!0;var ae=I;try{for(te(fe),E=t(y);E!==null&&(!(E.expirationTime>fe)||re&&!P());){var L=E.callback;if(typeof L=="function"){E.callback=null,I=E.priorityLevel;var Q=L(E.expirationTime<=fe);fe=r.unstable_now(),typeof Q=="function"?E.callback=Q:E===t(y)&&s(y),te(fe)}else s(y);E=t(y)}if(E!==null)var Se=!0;else{var be=t(v);be!==null&&tt(ge,be.startTime-fe),Se=!1}return Se}finally{E=null,I=ae,D=!1}}var Ie=!1,R=null,S=-1,k=5,j=-1;function P(){return!(r.unstable_now()-j<k)}function V(){if(R!==null){var re=r.unstable_now();j=re;var fe=!0;try{fe=R(!0,re)}finally{fe?N():(Ie=!1,R=null)}}else Ie=!1}var N;if(typeof J=="function")N=function(){J(V)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,It=He.port2;He.port1.onmessage=V,N=function(){It.postMessage(null)}}else N=function(){z(V,0)};function Ot(re){R=re,Ie||(Ie=!0,N())}function tt(re,fe){S=z(function(){re(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(re){re.callback=null},r.unstable_continueExecution=function(){W||D||(W=!0,Ot(Te))},r.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<re?Math.floor(1e3/re):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(y)},r.unstable_next=function(re){switch(I){case 1:case 2:case 3:var fe=3;break;default:fe=I}var ae=I;I=fe;try{return re()}finally{I=ae}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(re,fe){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ae=I;I=re;try{return fe()}finally{I=ae}},r.unstable_scheduleCallback=function(re,fe,ae){var L=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?L+ae:L):ae=L,re){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ae+Q,re={id:w++,callback:fe,priorityLevel:re,startTime:ae,expirationTime:Q,sortIndex:-1},ae>L?(re.sortIndex=ae,e(v,re),t(y)===null&&re===t(v)&&(q?(K(S),S=-1):q=!0,tt(ge,ae-L))):(re.sortIndex=Q,e(y,re),W||D||(W=!0,Ot(Te))),re},r.unstable_shouldYield=P,r.unstable_wrapCallback=function(re){var fe=I;return function(){var ae=I;I=fe;try{return re.apply(this,arguments)}finally{I=ae}}}})(qh)),qh}var Xg;function n1(){return Xg||(Xg=1,$h.exports=t1()),$h.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function r1(){if(Zg)return nn;Zg=1;var r=Of(),e=n1();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},E={};function I(n){return y.call(E,n)?!0:y.call(w,n)?!1:v.test(n)?E[n]=!0:(w[n]=!0,!1)}function D(n,i,a,d){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return d?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W(n,i,a,d){if(i===null||typeof i>"u"||D(n,i,a,d))return!0;if(d)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function q(n,i,a,d,f,m,x){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=d,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=x}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){z[n]=new q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];z[i]=new q(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){z[n]=new q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){z[n]=new q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){z[n]=new q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){z[n]=new q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){z[n]=new q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){z[n]=new q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){z[n]=new q(n,5,!1,n.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function J(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(K,J);z[i]=new q(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(K,J);z[i]=new q(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(K,J);z[i]=new q(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){z[n]=new q(n,1,!1,n.toLowerCase(),null,!1,!1)}),z.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){z[n]=new q(n,1,!1,n.toLowerCase(),null,!0,!0)});function te(n,i,a,d){var f=z.hasOwnProperty(i)?z[i]:null;(f!==null?f.type!==0:d||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(W(i,a,f,d)&&(a=null),d||f===null?I(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,d=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,d?n.setAttributeNS(d,i,a):n.setAttribute(i,a))))}var ge=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Te=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),P=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),It=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),tt=Symbol.for("react.offscreen"),re=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=re&&n[re]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,L;function Q(n){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var Se=!1;function be(n,i){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(B){var d=B}Reflect.construct(n,[],i)}else{try{i.call()}catch(B){d=B}n.call(i.prototype)}else{try{throw Error()}catch(B){d=B}n()}}catch(B){if(B&&d&&typeof B.stack=="string"){for(var f=B.stack.split(`
`),m=d.stack.split(`
`),x=f.length-1,b=m.length-1;1<=x&&0<=b&&f[x]!==m[b];)b--;for(;1<=x&&0<=b;x--,b--)if(f[x]!==m[b]){if(x!==1||b!==1)do if(x--,b--,0>b||f[x]!==m[b]){var C=`
`+f[x].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=x&&0<=b);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Q(n):""}function Ce(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=be(n.type,!1),n;case 11:return n=be(n.type.render,!1),n;case 1:return n=be(n.type,!0),n;default:return""}}function Re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case Ie:return"Portal";case k:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case He:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case j:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case It:return i=n.displayName||null,i!==null?i:Re(n.type)||"Memo";case Ot:i=n._payload,n=n._init;try{return Re(n(i))}catch{}}return null}function Be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Kt(n){var i=qe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),d=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(x){d=""+x,m.call(this,x)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return d},setValue:function(x){d=""+x},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Mi(n){n._valueTracker||(n._valueTracker=Kt(n))}function ia(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),d="";return n&&(d=qe(n)?n.checked?"true":"false":n.value),n=d,n!==a?(i.setValue(n),!0):!1}function Kr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Fi(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ql(n,i){var a=i.defaultValue==null?"":i.defaultValue,d=i.checked!=null?i.checked:i.defaultChecked;a=Ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:d,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ui(n,i){i=i.checked,i!=null&&te(n,"checked",i,!1)}function Ks(n,i){Ui(n,i);var a=Ve(i.value),d=i.type;if(a!=null)d==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?mt(n,i.type,a):i.hasOwnProperty("defaultValue")&&mt(n,i.type,Ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function oa(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var d=i.type;if(!(d!=="submit"&&d!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function mt(n,i,a){(i!=="number"||Kr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ut=Array.isArray;function Nn(n,i,a,d){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&d&&(n[a].defaultSelected=!0)}else{for(a=""+Ve(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,d&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function aa(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function la(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ut(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ve(a)}}function Wl(n,i){var a=Ve(i.value),d=Ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),d!=null&&(n.defaultValue=""+d)}function Qr(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ua(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bi(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ua(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Yr,Hl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,d,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,d,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Yr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Qs(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gl=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(n){Gl.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Jr[i]=Jr[n]})});function Xr(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Jr.hasOwnProperty(n)&&Jr[n]?(""+i).trim():i+"px"}function zi(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var d=a.indexOf("--")===0,f=Xr(a,i[a],d);a==="float"&&(a="cssFloat"),d?n.setProperty(a,f):n[a]=f}}var ca=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kn(n,i){if(i){if(ca[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function $i(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zr=null;function qi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var yr=null,vr=null,at=null;function da(n){if(n=Ma(n)){if(typeof yr!="function")throw Error(t(280));var i=n.stateNode;i&&(i=xu(i),yr(n.stateNode,n.type,i))}}function es(n){vr?at?at.push(n):at=[n]:vr=n}function ts(){if(vr){var n=vr,i=at;if(at=vr=null,da(n),i)for(n=0;n<i.length;n++)da(i[n])}}function Kl(n,i){return n(i)}function Ql(){}var $n=!1;function Yl(n,i,a){if($n)return n(i,a);$n=!0;try{return Kl(n,i,a)}finally{$n=!1,(vr!==null||at!==null)&&(Ql(),ts())}}function Ys(n,i){var a=n.stateNode;if(a===null)return null;var d=xu(a);if(d===null)return null;a=d[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ns=!1;if(p)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){ns=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{ns=!1}function Jl(n,i,a,d,f,m,x,b,C){var B=Array.prototype.slice.call(arguments,3);try{i.apply(a,B)}catch(X){this.onError(X)}}var _r=!1,qn=null,Wi=!1,mn=null,Xl={onError:function(n){_r=!0,qn=n}};function Zl(n,i,a,d,f,m,x,b,C){_r=!1,qn=null,Jl.apply(Xl,arguments)}function ha(n,i,a,d,f,m,x,b,C){if(Zl.apply(this,arguments),_r){if(_r){var B=qn;_r=!1,qn=null}else throw Error(t(198));Wi||(Wi=!0,mn=B)}}function Cn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function fa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function eu(n){if(Cn(n)!==n)throw Error(t(188))}function tu(n){var i=n.alternate;if(!i){if(i=Cn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,d=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(d=f.return,d!==null){a=d;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return eu(f),n;if(m===d)return eu(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==d.return)a=f,d=m;else{for(var x=!1,b=f.child;b;){if(b===a){x=!0,a=f,d=m;break}if(b===d){x=!0,d=f,a=m;break}b=b.sibling}if(!x){for(b=m.child;b;){if(b===a){x=!0,a=m,d=f;break}if(b===d){x=!0,d=m,a=f;break}b=b.sibling}if(!x)throw Error(t(189))}}if(a.alternate!==d)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function nu(n){return n=tu(n),n!==null?Js(n):null}function Js(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Js(n);if(i!==null)return i;n=n.sibling}return null}var pa=e.unstable_scheduleCallback,Hi=e.unstable_cancelCallback,Xs=e.unstable_shouldYield,xr=e.unstable_requestPaint,Ye=e.unstable_now,yd=e.unstable_getCurrentPriorityLevel,Gi=e.unstable_ImmediatePriority,ma=e.unstable_UserBlockingPriority,Zs=e.unstable_NormalPriority,ga=e.unstable_LowPriority,Ki=e.unstable_IdlePriority,ei=null,sn=null;function ru(n){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(ei,n,void 0,(n.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:ti,Wn=Math.log,gn=Math.LN2;function ti(n){return n>>>=0,n===0?32:31-(Wn(n)/gn|0)|0}var Hn=64,ss=4194304;function Fe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wr(n,i){var a=n.pendingLanes;if(a===0)return 0;var d=0,f=n.suspendedLanes,m=n.pingedLanes,x=a&268435455;if(x!==0){var b=x&~f;b!==0?d=Fe(b):(m&=x,m!==0&&(d=Fe(m)))}else x=a&~f,x!==0?d=Fe(x):m!==0&&(d=Fe(m));if(d===0)return 0;if(i!==0&&i!==d&&(i&f)===0&&(f=d&-d,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((d&4)!==0&&(d|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=d;0<i;)a=31-on(i),f=1<<a,d|=n[a],i&=~f;return d}function ni(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ri(n,i){for(var a=n.suspendedLanes,d=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var x=31-on(m),b=1<<x,C=f[x];C===-1?((b&a)===0||(b&d)!==0)&&(f[x]=ni(b,i)):C<=i&&(n.expiredLanes|=b),m&=~b}}function ya(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function va(){var n=Hn;return Hn<<=1,(Hn&4194240)===0&&(Hn=64),n}function _a(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function si(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-on(i),n[i]=a}function vd(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-on(a),m=1<<f;i[f]=0,d[f]=-1,n[f]=-1,a&=~m}}function xa(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var d=31-on(a),f=1<<d;f&i|n[d]&i&&(n[d]|=i),a&=~f}}var De=0;function Gn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var wa,Qi,Ea,Ta,Ia,Kn=!1,Yi=[],Qn=null,Yn=null,Rt=null,ii=new Map,Er=new Map,an=[],su="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function is(n,i){switch(n){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":ii.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(i.pointerId)}}function Rn(n,i,a,d,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:d,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ma(i),i!==null&&Qi(i)),n):(n.eventSystemFlags|=d,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function iu(n,i,a,d,f){switch(i){case"focusin":return Qn=Rn(Qn,n,i,a,d,f),!0;case"dragenter":return Yn=Rn(Yn,n,i,a,d,f),!0;case"mouseover":return Rt=Rn(Rt,n,i,a,d,f),!0;case"pointerover":var m=f.pointerId;return ii.set(m,Rn(ii.get(m)||null,n,i,a,d,f)),!0;case"gotpointercapture":return m=f.pointerId,Er.set(m,Rn(Er.get(m)||null,n,i,a,d,f)),!0}return!1}function Ji(n){var i=ui(n.target);if(i!==null){var a=Cn(i);if(a!==null){if(i=a.tag,i===13){if(i=fa(a),i!==null){n.blockedOn=i,Ia(n.priority,function(){Ea(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function We(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Xi(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var d=new a.constructor(a.type,a);Zr=d,a.target.dispatchEvent(d),Zr=null}else return i=Ma(a),i!==null&&Qi(i),n.blockedOn=a,!1;i.shift()}return!0}function ou(n,i,a){We(n)&&a.delete(i)}function _d(){Kn=!1,Qn!==null&&We(Qn)&&(Qn=null),Yn!==null&&We(Yn)&&(Yn=null),Rt!==null&&We(Rt)&&(Rt=null),ii.forEach(ou),Er.forEach(ou)}function os(n,i){n.blockedOn===i&&(n.blockedOn=null,Kn||(Kn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_d)))}function as(n){function i(f){return os(f,n)}if(0<Yi.length){os(Yi[0],n);for(var a=1;a<Yi.length;a++){var d=Yi[a];d.blockedOn===n&&(d.blockedOn=null)}}for(Qn!==null&&os(Qn,n),Yn!==null&&os(Yn,n),Rt!==null&&os(Rt,n),ii.forEach(i),Er.forEach(i),a=0;a<an.length;a++)d=an[a],d.blockedOn===n&&(d.blockedOn=null);for(;0<an.length&&(a=an[0],a.blockedOn===null);)Ji(a),a.blockedOn===null&&an.shift()}var Tr=ge.ReactCurrentBatchConfig,Ir=!0;function Jn(n,i,a,d){var f=De,m=Tr.transition;Tr.transition=null;try{De=1,Sa(n,i,a,d)}finally{De=f,Tr.transition=m}}function au(n,i,a,d){var f=De,m=Tr.transition;Tr.transition=null;try{De=4,Sa(n,i,a,d)}finally{De=f,Tr.transition=m}}function Sa(n,i,a,d){if(Ir){var f=Xi(n,i,a,d);if(f===null)Rd(n,i,d,Xn,a),is(n,d);else if(iu(f,n,i,a,d))d.stopPropagation();else if(is(n,d),i&4&&-1<su.indexOf(n)){for(;f!==null;){var m=Ma(f);if(m!==null&&wa(m),m=Xi(n,i,a,d),m===null&&Rd(n,i,d,Xn,a),m===f)break;f=m}f!==null&&d.stopPropagation()}else Rd(n,i,d,null,a)}}var Xn=null;function Xi(n,i,a,d){if(Xn=null,n=qi(d),n=ui(n),n!==null)if(i=Cn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=fa(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Xn=n,null}function Zi(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yd()){case Gi:return 1;case ma:return 4;case Zs:case ga:return 16;case Ki:return 536870912;default:return 16}default:return 16}}var ln=null,eo=null,Sr=null;function lu(){if(Sr)return Sr;var n,i=eo,a=i.length,d,f="value"in ln?ln.value:ln.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var x=a-n;for(d=1;d<=x&&i[a-d]===f[m-d];d++);return Sr=f.slice(n,1<d?1-d:void 0)}function oi(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Zn(){return!0}function ba(){return!1}function Mt(n){function i(a,d,f,m,x){this._reactName=a,this._targetInst=f,this.type=d,this.nativeEvent=m,this.target=x,this.currentTarget=null;for(var b in n)n.hasOwnProperty(b)&&(a=n[b],this[b]=a?a(m):m[b]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zn:ba,this.isPropagationStopped=ba,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),i}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ai=Mt(er),ls=ae({},er,{view:0,detail:0}),to=Mt(ls),no,ro,un,li=ae({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:we,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==un&&(un&&n.type==="mousemove"?(no=n.screenX-un.screenX,ro=n.screenY-un.screenY):ro=no=0,un=n),no)},movementY:function(n){return"movementY"in n?n.movementY:ro}}),Na=Mt(li),uu=ae({},li,{dataTransfer:0}),cu=Mt(uu),so=ae({},ls,{relatedTarget:0}),Pt=Mt(so),du=ae({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),hu=Mt(du),us=ae({},er,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),u=Mt(us),g=ae({},er,{data:0}),_=Mt(g),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ne(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=$[n])?!!i[n]:!1}function we(){return ne}var ct=ae({},ls,{key:function(n){if(n.key){var i=T[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=oi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:we,charCode:function(n){return n.type==="keypress"?oi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?oi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$e=Mt(ct),gt=ae({},li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cn=Mt(gt),br=ae({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:we}),tr=Mt(br),nr=ae({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),io=Mt(nr),ka=ae({},li,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Hx=Mt(ka),Gx=[9,13,27,32],xd=p&&"CompositionEvent"in window,Ca=null;p&&"documentMode"in document&&(Ca=document.documentMode);var Kx=p&&"TextEvent"in window&&!Ca,Fp=p&&(!xd||Ca&&8<Ca&&11>=Ca),Up=" ",Bp=!1;function zp(n,i){switch(n){case"keyup":return Gx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var oo=!1;function Qx(n,i){switch(n){case"compositionend":return $p(i);case"keypress":return i.which!==32?null:(Bp=!0,Up);case"textInput":return n=i.data,n===Up&&Bp?null:n;default:return null}}function Yx(n,i){if(oo)return n==="compositionend"||!xd&&zp(n,i)?(n=lu(),Sr=eo=ln=null,oo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Fp&&i.locale!=="ko"?null:i.data;default:return null}}var Jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Jx[n.type]:i==="textarea"}function Wp(n,i,a,d){es(d),i=yu(i,"onChange"),0<i.length&&(a=new ai("onChange","change",null,a,d),n.push({event:a,listeners:i}))}var Ra=null,Pa=null;function Xx(n){um(n,0)}function fu(n){var i=ho(n);if(ia(i))return n}function Zx(n,i){if(n==="change")return i}var Hp=!1;if(p){var wd;if(p){var Ed="oninput"in document;if(!Ed){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),Ed=typeof Gp.oninput=="function"}wd=Ed}else wd=!1;Hp=wd&&(!document.documentMode||9<document.documentMode)}function Kp(){Ra&&(Ra.detachEvent("onpropertychange",Qp),Pa=Ra=null)}function Qp(n){if(n.propertyName==="value"&&fu(Pa)){var i=[];Wp(i,Pa,n,qi(n)),Yl(Xx,i)}}function ew(n,i,a){n==="focusin"?(Kp(),Ra=i,Pa=a,Ra.attachEvent("onpropertychange",Qp)):n==="focusout"&&Kp()}function tw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fu(Pa)}function nw(n,i){if(n==="click")return fu(i)}function rw(n,i){if(n==="input"||n==="change")return fu(i)}function sw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Pn=typeof Object.is=="function"?Object.is:sw;function Aa(n,i){if(Pn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),d=Object.keys(i);if(a.length!==d.length)return!1;for(d=0;d<a.length;d++){var f=a[d];if(!y.call(i,f)||!Pn(n[f],i[f]))return!1}return!0}function Yp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jp(n,i){var a=Yp(n);n=0;for(var d;a;){if(a.nodeType===3){if(d=n+a.textContent.length,n<=i&&d>=i)return{node:a,offset:i-n};n=d}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yp(a)}}function Xp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Xp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Zp(){for(var n=window,i=Kr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Kr(n.document)}return i}function Td(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function iw(n){var i=Zp(),a=n.focusedElem,d=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Xp(a.ownerDocument.documentElement,a)){if(d!==null&&Td(a)){if(i=d.start,n=d.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(d.start,f);d=d.end===void 0?m:Math.min(d.end,f),!n.extend&&m>d&&(f=d,d=m,m=f),f=Jp(a,m);var x=Jp(a,d);f&&x&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==x.node||n.focusOffset!==x.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>d?(n.addRange(i),n.extend(x.node,x.offset)):(i.setEnd(x.node,x.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ow=p&&"documentMode"in document&&11>=document.documentMode,ao=null,Id=null,ja=null,Sd=!1;function em(n,i,a){var d=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sd||ao==null||ao!==Kr(d)||(d=ao,"selectionStart"in d&&Td(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ja&&Aa(ja,d)||(ja=d,d=yu(Id,"onSelect"),0<d.length&&(i=new ai("onSelect","select",null,i,a),n.push({event:i,listeners:d}),i.target=ao)))}function pu(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var lo={animationend:pu("Animation","AnimationEnd"),animationiteration:pu("Animation","AnimationIteration"),animationstart:pu("Animation","AnimationStart"),transitionend:pu("Transition","TransitionEnd")},bd={},tm={};p&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function mu(n){if(bd[n])return bd[n];if(!lo[n])return n;var i=lo[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in tm)return bd[n]=i[a];return n}var nm=mu("animationend"),rm=mu("animationiteration"),sm=mu("animationstart"),im=mu("transitionend"),om=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cs(n,i){om.set(n,i),l(i,[n])}for(var Nd=0;Nd<am.length;Nd++){var kd=am[Nd],aw=kd.toLowerCase(),lw=kd[0].toUpperCase()+kd.slice(1);cs(aw,"on"+lw)}cs(nm,"onAnimationEnd"),cs(rm,"onAnimationIteration"),cs(sm,"onAnimationStart"),cs("dblclick","onDoubleClick"),cs("focusin","onFocus"),cs("focusout","onBlur"),cs(im,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function lm(n,i,a){var d=n.type||"unknown-event";n.currentTarget=a,ha(d,i,void 0,n),n.currentTarget=null}function um(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var d=n[a],f=d.event;d=d.listeners;e:{var m=void 0;if(i)for(var x=d.length-1;0<=x;x--){var b=d[x],C=b.instance,B=b.currentTarget;if(b=b.listener,C!==m&&f.isPropagationStopped())break e;lm(f,b,B),m=C}else for(x=0;x<d.length;x++){if(b=d[x],C=b.instance,B=b.currentTarget,b=b.listener,C!==m&&f.isPropagationStopped())break e;lm(f,b,B),m=C}}}if(Wi)throw n=mn,Wi=!1,mn=null,n}function Je(n,i){var a=i[Vd];a===void 0&&(a=i[Vd]=new Set);var d=n+"__bubble";a.has(d)||(cm(i,n,2,!1),a.add(d))}function Cd(n,i,a){var d=0;i&&(d|=4),cm(a,n,d,i)}var gu="_reactListening"+Math.random().toString(36).slice(2);function La(n){if(!n[gu]){n[gu]=!0,s.forEach(function(a){a!=="selectionchange"&&(uw.has(a)||Cd(a,!1,n),Cd(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[gu]||(i[gu]=!0,Cd("selectionchange",!1,i))}}function cm(n,i,a,d){switch(Zi(i)){case 1:var f=Jn;break;case 4:f=au;break;default:f=Sa}a=f.bind(null,i,a,n),f=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),d?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Rd(n,i,a,d,f){var m=d;if((i&1)===0&&(i&2)===0&&d!==null)e:for(;;){if(d===null)return;var x=d.tag;if(x===3||x===4){var b=d.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(x===4)for(x=d.return;x!==null;){var C=x.tag;if((C===3||C===4)&&(C=x.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;x=x.return}for(;b!==null;){if(x=ui(b),x===null)return;if(C=x.tag,C===5||C===6){d=m=x;continue e}b=b.parentNode}}d=d.return}Yl(function(){var B=m,X=qi(a),Z=[];e:{var Y=om.get(n);if(Y!==void 0){var ie=ai,ue=n;switch(n){case"keypress":if(oi(a)===0)break e;case"keydown":case"keyup":ie=$e;break;case"focusin":ue="focus",ie=Pt;break;case"focusout":ue="blur",ie=Pt;break;case"beforeblur":case"afterblur":ie=Pt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=tr;break;case nm:case rm:case sm:ie=hu;break;case im:ie=io;break;case"scroll":ie=to;break;case"wheel":ie=Hx;break;case"copy":case"cut":case"paste":ie=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=cn}var ce=(i&4)!==0,dt=!ce&&n==="scroll",O=ce?Y!==null?Y+"Capture":null:Y;ce=[];for(var A=B,U;A!==null;){U=A;var ee=U.stateNode;if(U.tag===5&&ee!==null&&(U=ee,O!==null&&(ee=Ys(A,O),ee!=null&&ce.push(Va(A,ee,U)))),dt)break;A=A.return}0<ce.length&&(Y=new ie(Y,ue,null,a,X),Z.push({event:Y,listeners:ce}))}}if((i&7)===0){e:{if(Y=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",Y&&a!==Zr&&(ue=a.relatedTarget||a.fromElement)&&(ui(ue)||ue[Nr]))break e;if((ie||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=B,ue=ue?ui(ue):null,ue!==null&&(dt=Cn(ue),ue!==dt||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=B),ie!==ue)){if(ce=Na,ee="onMouseLeave",O="onMouseEnter",A="mouse",(n==="pointerout"||n==="pointerover")&&(ce=cn,ee="onPointerLeave",O="onPointerEnter",A="pointer"),dt=ie==null?Y:ho(ie),U=ue==null?Y:ho(ue),Y=new ce(ee,A+"leave",ie,a,X),Y.target=dt,Y.relatedTarget=U,ee=null,ui(X)===B&&(ce=new ce(O,A+"enter",ue,a,X),ce.target=U,ce.relatedTarget=dt,ee=ce),dt=ee,ie&&ue)t:{for(ce=ie,O=ue,A=0,U=ce;U;U=uo(U))A++;for(U=0,ee=O;ee;ee=uo(ee))U++;for(;0<A-U;)ce=uo(ce),A--;for(;0<U-A;)O=uo(O),U--;for(;A--;){if(ce===O||O!==null&&ce===O.alternate)break t;ce=uo(ce),O=uo(O)}ce=null}else ce=null;ie!==null&&dm(Z,Y,ie,ce,!1),ue!==null&&dt!==null&&dm(Z,dt,ue,ce,!0)}}e:{if(Y=B?ho(B):window,ie=Y.nodeName&&Y.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Y.type==="file")var de=Zx;else if(qp(Y))if(Hp)de=rw;else{de=tw;var pe=ew}else(ie=Y.nodeName)&&ie.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(de=nw);if(de&&(de=de(n,B))){Wp(Z,de,a,X);break e}pe&&pe(n,Y,B),n==="focusout"&&(pe=Y._wrapperState)&&pe.controlled&&Y.type==="number"&&mt(Y,"number",Y.value)}switch(pe=B?ho(B):window,n){case"focusin":(qp(pe)||pe.contentEditable==="true")&&(ao=pe,Id=B,ja=null);break;case"focusout":ja=Id=ao=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,em(Z,a,X);break;case"selectionchange":if(ow)break;case"keydown":case"keyup":em(Z,a,X)}var me;if(xd)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else oo?zp(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Fp&&a.locale!=="ko"&&(oo||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&oo&&(me=lu()):(ln=X,eo="value"in ln?ln.value:ln.textContent,oo=!0)),pe=yu(B,_e),0<pe.length&&(_e=new _(_e,n,null,a,X),Z.push({event:_e,listeners:pe}),me?_e.data=me:(me=$p(a),me!==null&&(_e.data=me)))),(me=Kx?Qx(n,a):Yx(n,a))&&(B=yu(B,"onBeforeInput"),0<B.length&&(X=new _("onBeforeInput","beforeinput",null,a,X),Z.push({event:X,listeners:B}),X.data=me))}um(Z,i)})}function Va(n,i,a){return{instance:n,listener:i,currentTarget:a}}function yu(n,i){for(var a=i+"Capture",d=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Ys(n,a),m!=null&&d.unshift(Va(n,m,f)),m=Ys(n,i),m!=null&&d.push(Va(n,m,f))),n=n.return}return d}function uo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dm(n,i,a,d,f){for(var m=i._reactName,x=[];a!==null&&a!==d;){var b=a,C=b.alternate,B=b.stateNode;if(C!==null&&C===d)break;b.tag===5&&B!==null&&(b=B,f?(C=Ys(a,m),C!=null&&x.unshift(Va(a,C,b))):f||(C=Ys(a,m),C!=null&&x.push(Va(a,C,b)))),a=a.return}x.length!==0&&n.push({event:i,listeners:x})}var cw=/\r\n?/g,dw=/\u0000|\uFFFD/g;function hm(n){return(typeof n=="string"?n:""+n).replace(cw,`
`).replace(dw,"")}function vu(n,i,a){if(i=hm(i),hm(n)!==i&&a)throw Error(t(425))}function _u(){}var Pd=null,Ad=null;function jd(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,hw=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,fw=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(n){return fm.resolve(null).then(n).catch(pw)}:Dd;function pw(n){setTimeout(function(){throw n})}function Ld(n,i){var a=i,d=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(d===0){n.removeChild(f),as(i);return}d--}else a!=="$"&&a!=="$?"&&a!=="$!"||d++;a=f}while(a);as(i)}function ds(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function pm(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var co=Math.random().toString(36).slice(2),rr="__reactFiber$"+co,Oa="__reactProps$"+co,Nr="__reactContainer$"+co,Vd="__reactEvents$"+co,mw="__reactListeners$"+co,gw="__reactHandles$"+co;function ui(n){var i=n[rr];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Nr]||a[rr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=pm(n);n!==null;){if(a=n[rr])return a;n=pm(n)}return i}n=a,a=n.parentNode}return null}function Ma(n){return n=n[rr]||n[Nr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ho(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xu(n){return n[Oa]||null}var Od=[],fo=-1;function hs(n){return{current:n}}function Xe(n){0>fo||(n.current=Od[fo],Od[fo]=null,fo--)}function Ge(n,i){fo++,Od[fo]=n.current,n.current=i}var fs={},Ft=hs(fs),Jt=hs(!1),ci=fs;function po(n,i){var a=n.type.contextTypes;if(!a)return fs;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===i)return d.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Xt(n){return n=n.childContextTypes,n!=null}function wu(){Xe(Jt),Xe(Ft)}function mm(n,i,a){if(Ft.current!==fs)throw Error(t(168));Ge(Ft,i),Ge(Jt,a)}function gm(n,i,a){var d=n.stateNode;if(i=i.childContextTypes,typeof d.getChildContext!="function")return a;d=d.getChildContext();for(var f in d)if(!(f in i))throw Error(t(108,Be(n)||"Unknown",f));return ae({},a,d)}function Eu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||fs,ci=Ft.current,Ge(Ft,n),Ge(Jt,Jt.current),!0}function ym(n,i,a){var d=n.stateNode;if(!d)throw Error(t(169));a?(n=gm(n,i,ci),d.__reactInternalMemoizedMergedChildContext=n,Xe(Jt),Xe(Ft),Ge(Ft,n)):Xe(Jt),Ge(Jt,a)}var kr=null,Tu=!1,Md=!1;function vm(n){kr===null?kr=[n]:kr.push(n)}function yw(n){Tu=!0,vm(n)}function ps(){if(!Md&&kr!==null){Md=!0;var n=0,i=De;try{var a=kr;for(De=1;n<a.length;n++){var d=a[n];do d=d(!0);while(d!==null)}kr=null,Tu=!1}catch(f){throw kr!==null&&(kr=kr.slice(n+1)),pa(Gi,ps),f}finally{De=i,Md=!1}}return null}var mo=[],go=0,Iu=null,Su=0,yn=[],vn=0,di=null,Cr=1,Rr="";function hi(n,i){mo[go++]=Su,mo[go++]=Iu,Iu=n,Su=i}function _m(n,i,a){yn[vn++]=Cr,yn[vn++]=Rr,yn[vn++]=di,di=n;var d=Cr;n=Rr;var f=32-on(d)-1;d&=~(1<<f),a+=1;var m=32-on(i)+f;if(30<m){var x=f-f%5;m=(d&(1<<x)-1).toString(32),d>>=x,f-=x,Cr=1<<32-on(i)+f|a<<f|d,Rr=m+n}else Cr=1<<m|a<<f|d,Rr=n}function Fd(n){n.return!==null&&(hi(n,1),_m(n,1,0))}function Ud(n){for(;n===Iu;)Iu=mo[--go],mo[go]=null,Su=mo[--go],mo[go]=null;for(;n===di;)di=yn[--vn],yn[vn]=null,Rr=yn[--vn],yn[vn]=null,Cr=yn[--vn],yn[vn]=null}var dn=null,hn=null,nt=!1,An=null;function xm(n,i){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function wm(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,dn=n,hn=ds(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,dn=n,hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=di!==null?{id:Cr,overflow:Rr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,dn=n,hn=null,!0):!1;default:return!1}}function Bd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zd(n){if(nt){var i=hn;if(i){var a=i;if(!wm(n,i)){if(Bd(n))throw Error(t(418));i=ds(a.nextSibling);var d=dn;i&&wm(n,i)?xm(d,a):(n.flags=n.flags&-4097|2,nt=!1,dn=n)}}else{if(Bd(n))throw Error(t(418));n.flags=n.flags&-4097|2,nt=!1,dn=n}}}function Em(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;dn=n}function bu(n){if(n!==dn)return!1;if(!nt)return Em(n),nt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!jd(n.type,n.memoizedProps)),i&&(i=hn)){if(Bd(n))throw Tm(),Error(t(418));for(;i;)xm(n,i),i=ds(i.nextSibling)}if(Em(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hn=ds(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hn=null}}else hn=dn?ds(n.stateNode.nextSibling):null;return!0}function Tm(){for(var n=hn;n;)n=ds(n.nextSibling)}function yo(){hn=dn=null,nt=!1}function $d(n){An===null?An=[n]:An.push(n)}var vw=ge.ReactCurrentBatchConfig;function Fa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var d=a.stateNode}if(!d)throw Error(t(147,n));var f=d,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(x){var b=f.refs;x===null?delete b[m]:b[m]=x},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Nu(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Im(n){var i=n._init;return i(n._payload)}function Sm(n){function i(O,A){if(n){var U=O.deletions;U===null?(O.deletions=[A],O.flags|=16):U.push(A)}}function a(O,A){if(!n)return null;for(;A!==null;)i(O,A),A=A.sibling;return null}function d(O,A){for(O=new Map;A!==null;)A.key!==null?O.set(A.key,A):O.set(A.index,A),A=A.sibling;return O}function f(O,A){return O=Es(O,A),O.index=0,O.sibling=null,O}function m(O,A,U){return O.index=U,n?(U=O.alternate,U!==null?(U=U.index,U<A?(O.flags|=2,A):U):(O.flags|=2,A)):(O.flags|=1048576,A)}function x(O){return n&&O.alternate===null&&(O.flags|=2),O}function b(O,A,U,ee){return A===null||A.tag!==6?(A=Dh(U,O.mode,ee),A.return=O,A):(A=f(A,U),A.return=O,A)}function C(O,A,U,ee){var de=U.type;return de===R?X(O,A,U.props.children,ee,U.key):A!==null&&(A.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Ot&&Im(de)===A.type)?(ee=f(A,U.props),ee.ref=Fa(O,A,U),ee.return=O,ee):(ee=Ju(U.type,U.key,U.props,null,O.mode,ee),ee.ref=Fa(O,A,U),ee.return=O,ee)}function B(O,A,U,ee){return A===null||A.tag!==4||A.stateNode.containerInfo!==U.containerInfo||A.stateNode.implementation!==U.implementation?(A=Lh(U,O.mode,ee),A.return=O,A):(A=f(A,U.children||[]),A.return=O,A)}function X(O,A,U,ee,de){return A===null||A.tag!==7?(A=xi(U,O.mode,ee,de),A.return=O,A):(A=f(A,U),A.return=O,A)}function Z(O,A,U){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Dh(""+A,O.mode,U),A.return=O,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Te:return U=Ju(A.type,A.key,A.props,null,O.mode,U),U.ref=Fa(O,null,A),U.return=O,U;case Ie:return A=Lh(A,O.mode,U),A.return=O,A;case Ot:var ee=A._init;return Z(O,ee(A._payload),U)}if(ut(A)||fe(A))return A=xi(A,O.mode,U,null),A.return=O,A;Nu(O,A)}return null}function Y(O,A,U,ee){var de=A!==null?A.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return de!==null?null:b(O,A,""+U,ee);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Te:return U.key===de?C(O,A,U,ee):null;case Ie:return U.key===de?B(O,A,U,ee):null;case Ot:return de=U._init,Y(O,A,de(U._payload),ee)}if(ut(U)||fe(U))return de!==null?null:X(O,A,U,ee,null);Nu(O,U)}return null}function ie(O,A,U,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return O=O.get(U)||null,b(A,O,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Te:return O=O.get(ee.key===null?U:ee.key)||null,C(A,O,ee,de);case Ie:return O=O.get(ee.key===null?U:ee.key)||null,B(A,O,ee,de);case Ot:var pe=ee._init;return ie(O,A,U,pe(ee._payload),de)}if(ut(ee)||fe(ee))return O=O.get(U)||null,X(A,O,ee,de,null);Nu(A,ee)}return null}function ue(O,A,U,ee){for(var de=null,pe=null,me=A,_e=A=0,Nt=null;me!==null&&_e<U.length;_e++){me.index>_e?(Nt=me,me=null):Nt=me.sibling;var Me=Y(O,me,U[_e],ee);if(Me===null){me===null&&(me=Nt);break}n&&me&&Me.alternate===null&&i(O,me),A=m(Me,A,_e),pe===null?de=Me:pe.sibling=Me,pe=Me,me=Nt}if(_e===U.length)return a(O,me),nt&&hi(O,_e),de;if(me===null){for(;_e<U.length;_e++)me=Z(O,U[_e],ee),me!==null&&(A=m(me,A,_e),pe===null?de=me:pe.sibling=me,pe=me);return nt&&hi(O,_e),de}for(me=d(O,me);_e<U.length;_e++)Nt=ie(me,O,_e,U[_e],ee),Nt!==null&&(n&&Nt.alternate!==null&&me.delete(Nt.key===null?_e:Nt.key),A=m(Nt,A,_e),pe===null?de=Nt:pe.sibling=Nt,pe=Nt);return n&&me.forEach(function(Ts){return i(O,Ts)}),nt&&hi(O,_e),de}function ce(O,A,U,ee){var de=fe(U);if(typeof de!="function")throw Error(t(150));if(U=de.call(U),U==null)throw Error(t(151));for(var pe=de=null,me=A,_e=A=0,Nt=null,Me=U.next();me!==null&&!Me.done;_e++,Me=U.next()){me.index>_e?(Nt=me,me=null):Nt=me.sibling;var Ts=Y(O,me,Me.value,ee);if(Ts===null){me===null&&(me=Nt);break}n&&me&&Ts.alternate===null&&i(O,me),A=m(Ts,A,_e),pe===null?de=Ts:pe.sibling=Ts,pe=Ts,me=Nt}if(Me.done)return a(O,me),nt&&hi(O,_e),de;if(me===null){for(;!Me.done;_e++,Me=U.next())Me=Z(O,Me.value,ee),Me!==null&&(A=m(Me,A,_e),pe===null?de=Me:pe.sibling=Me,pe=Me);return nt&&hi(O,_e),de}for(me=d(O,me);!Me.done;_e++,Me=U.next())Me=ie(me,O,_e,Me.value,ee),Me!==null&&(n&&Me.alternate!==null&&me.delete(Me.key===null?_e:Me.key),A=m(Me,A,_e),pe===null?de=Me:pe.sibling=Me,pe=Me);return n&&me.forEach(function(Jw){return i(O,Jw)}),nt&&hi(O,_e),de}function dt(O,A,U,ee){if(typeof U=="object"&&U!==null&&U.type===R&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Te:e:{for(var de=U.key,pe=A;pe!==null;){if(pe.key===de){if(de=U.type,de===R){if(pe.tag===7){a(O,pe.sibling),A=f(pe,U.props.children),A.return=O,O=A;break e}}else if(pe.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Ot&&Im(de)===pe.type){a(O,pe.sibling),A=f(pe,U.props),A.ref=Fa(O,pe,U),A.return=O,O=A;break e}a(O,pe);break}else i(O,pe);pe=pe.sibling}U.type===R?(A=xi(U.props.children,O.mode,ee,U.key),A.return=O,O=A):(ee=Ju(U.type,U.key,U.props,null,O.mode,ee),ee.ref=Fa(O,A,U),ee.return=O,O=ee)}return x(O);case Ie:e:{for(pe=U.key;A!==null;){if(A.key===pe)if(A.tag===4&&A.stateNode.containerInfo===U.containerInfo&&A.stateNode.implementation===U.implementation){a(O,A.sibling),A=f(A,U.children||[]),A.return=O,O=A;break e}else{a(O,A);break}else i(O,A);A=A.sibling}A=Lh(U,O.mode,ee),A.return=O,O=A}return x(O);case Ot:return pe=U._init,dt(O,A,pe(U._payload),ee)}if(ut(U))return ue(O,A,U,ee);if(fe(U))return ce(O,A,U,ee);Nu(O,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,A!==null&&A.tag===6?(a(O,A.sibling),A=f(A,U),A.return=O,O=A):(a(O,A),A=Dh(U,O.mode,ee),A.return=O,O=A),x(O)):a(O,A)}return dt}var vo=Sm(!0),bm=Sm(!1),ku=hs(null),Cu=null,_o=null,qd=null;function Wd(){qd=_o=Cu=null}function Hd(n){var i=ku.current;Xe(ku),n._currentValue=i}function Gd(n,i,a){for(;n!==null;){var d=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,d!==null&&(d.childLanes|=i)):d!==null&&(d.childLanes&i)!==i&&(d.childLanes|=i),n===a)break;n=n.return}}function xo(n,i){Cu=n,qd=_o=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Zt=!0),n.firstContext=null)}function _n(n){var i=n._currentValue;if(qd!==n)if(n={context:n,memoizedValue:i,next:null},_o===null){if(Cu===null)throw Error(t(308));_o=n,Cu.dependencies={lanes:0,firstContext:n}}else _o=_o.next=n;return i}var fi=null;function Kd(n){fi===null?fi=[n]:fi.push(n)}function Nm(n,i,a,d){var f=i.interleaved;return f===null?(a.next=a,Kd(i)):(a.next=f.next,f.next=a),i.interleaved=a,Pr(n,d)}function Pr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ms=!1;function Qd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function km(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ar(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function gs(n,i,a){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Oe&2)!==0){var f=d.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),d.pending=i,Pr(n,a)}return f=d.interleaved,f===null?(i.next=i,Kd(d)):(i.next=f.next,f.next=i),d.interleaved=i,Pr(n,a)}function Ru(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var d=i.lanes;d&=n.pendingLanes,a|=d,i.lanes=a,xa(n,a)}}function Cm(n,i){var a=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,a===d)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var x={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=x:m=m.next=x,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:d.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:d.shared,effects:d.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Pu(n,i,a,d){var f=n.updateQueue;ms=!1;var m=f.firstBaseUpdate,x=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var C=b,B=C.next;C.next=null,x===null?m=B:x.next=B,x=C;var X=n.alternate;X!==null&&(X=X.updateQueue,b=X.lastBaseUpdate,b!==x&&(b===null?X.firstBaseUpdate=B:b.next=B,X.lastBaseUpdate=C))}if(m!==null){var Z=f.baseState;x=0,X=B=C=null,b=m;do{var Y=b.lane,ie=b.eventTime;if((d&Y)===Y){X!==null&&(X=X.next={eventTime:ie,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var ue=n,ce=b;switch(Y=i,ie=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){Z=ue.call(ie,Z,Y);break e}Z=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Y=typeof ue=="function"?ue.call(ie,Z,Y):ue,Y==null)break e;Z=ae({},Z,Y);break e;case 2:ms=!0}}b.callback!==null&&b.lane!==0&&(n.flags|=64,Y=f.effects,Y===null?f.effects=[b]:Y.push(b))}else ie={eventTime:ie,lane:Y,tag:b.tag,payload:b.payload,callback:b.callback,next:null},X===null?(B=X=ie,C=Z):X=X.next=ie,x|=Y;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;Y=b,b=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(X===null&&(C=Z),f.baseState=C,f.firstBaseUpdate=B,f.lastBaseUpdate=X,i=f.shared.interleaved,i!==null){f=i;do x|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);gi|=x,n.lanes=x,n.memoizedState=Z}}function Rm(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var d=n[i],f=d.callback;if(f!==null){if(d.callback=null,d=a,typeof f!="function")throw Error(t(191,f));f.call(d)}}}var Ua={},sr=hs(Ua),Ba=hs(Ua),za=hs(Ua);function pi(n){if(n===Ua)throw Error(t(174));return n}function Yd(n,i){switch(Ge(za,i),Ge(Ba,n),Ge(sr,Ua),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Bi(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Bi(i,n)}Xe(sr),Ge(sr,i)}function wo(){Xe(sr),Xe(Ba),Xe(za)}function Pm(n){pi(za.current);var i=pi(sr.current),a=Bi(i,n.type);i!==a&&(Ge(Ba,n),Ge(sr,a))}function Jd(n){Ba.current===n&&(Xe(sr),Xe(Ba))}var st=hs(0);function Au(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xd=[];function Zd(){for(var n=0;n<Xd.length;n++)Xd[n]._workInProgressVersionPrimary=null;Xd.length=0}var ju=ge.ReactCurrentDispatcher,eh=ge.ReactCurrentBatchConfig,mi=0,it=null,wt=null,St=null,Du=!1,$a=!1,qa=0,_w=0;function Ut(){throw Error(t(321))}function th(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Pn(n[a],i[a]))return!1;return!0}function nh(n,i,a,d,f,m){if(mi=m,it=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ju.current=n===null||n.memoizedState===null?Tw:Iw,n=a(d,f),$a){m=0;do{if($a=!1,qa=0,25<=m)throw Error(t(301));m+=1,St=wt=null,i.updateQueue=null,ju.current=Sw,n=a(d,f)}while($a)}if(ju.current=Ou,i=wt!==null&&wt.next!==null,mi=0,St=wt=it=null,Du=!1,i)throw Error(t(300));return n}function rh(){var n=qa!==0;return qa=0,n}function ir(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?it.memoizedState=St=n:St=St.next=n,St}function xn(){if(wt===null){var n=it.alternate;n=n!==null?n.memoizedState:null}else n=wt.next;var i=St===null?it.memoizedState:St.next;if(i!==null)St=i,wt=n;else{if(n===null)throw Error(t(310));wt=n,n={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},St===null?it.memoizedState=St=n:St=St.next=n}return St}function Wa(n,i){return typeof i=="function"?i(n):i}function sh(n){var i=xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var d=wt,f=d.baseQueue,m=a.pending;if(m!==null){if(f!==null){var x=f.next;f.next=m.next,m.next=x}d.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,d=d.baseState;var b=x=null,C=null,B=m;do{var X=B.lane;if((mi&X)===X)C!==null&&(C=C.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),d=B.hasEagerState?B.eagerState:n(d,B.action);else{var Z={lane:X,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};C===null?(b=C=Z,x=d):C=C.next=Z,it.lanes|=X,gi|=X}B=B.next}while(B!==null&&B!==m);C===null?x=d:C.next=b,Pn(d,i.memoizedState)||(Zt=!0),i.memoizedState=d,i.baseState=x,i.baseQueue=C,a.lastRenderedState=d}if(n=a.interleaved,n!==null){f=n;do m=f.lane,it.lanes|=m,gi|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ih(n){var i=xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var d=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var x=f=f.next;do m=n(m,x.action),x=x.next;while(x!==f);Pn(m,i.memoizedState)||(Zt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,d]}function Am(){}function jm(n,i){var a=it,d=xn(),f=i(),m=!Pn(d.memoizedState,f);if(m&&(d.memoizedState=f,Zt=!0),d=d.queue,oh(Vm.bind(null,a,d,n),[n]),d.getSnapshot!==i||m||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,Ha(9,Lm.bind(null,a,d,f,i),void 0,null),bt===null)throw Error(t(349));(mi&30)!==0||Dm(a,i,f)}return f}function Dm(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=it.updateQueue,i===null?(i={lastEffect:null,stores:null},it.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Lm(n,i,a,d){i.value=a,i.getSnapshot=d,Om(i)&&Mm(n)}function Vm(n,i,a){return a(function(){Om(i)&&Mm(n)})}function Om(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Pn(n,a)}catch{return!0}}function Mm(n){var i=Pr(n,1);i!==null&&Vn(i,n,1,-1)}function Fm(n){var i=ir();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},i.queue=n,n=n.dispatch=Ew.bind(null,it,n),[i.memoizedState,n]}function Ha(n,i,a,d){return n={tag:n,create:i,destroy:a,deps:d,next:null},i=it.updateQueue,i===null?(i={lastEffect:null,stores:null},it.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(d=a.next,a.next=n,n.next=d,i.lastEffect=n)),n}function Um(){return xn().memoizedState}function Lu(n,i,a,d){var f=ir();it.flags|=n,f.memoizedState=Ha(1|i,a,void 0,d===void 0?null:d)}function Vu(n,i,a,d){var f=xn();d=d===void 0?null:d;var m=void 0;if(wt!==null){var x=wt.memoizedState;if(m=x.destroy,d!==null&&th(d,x.deps)){f.memoizedState=Ha(i,a,m,d);return}}it.flags|=n,f.memoizedState=Ha(1|i,a,m,d)}function Bm(n,i){return Lu(8390656,8,n,i)}function oh(n,i){return Vu(2048,8,n,i)}function zm(n,i){return Vu(4,2,n,i)}function $m(n,i){return Vu(4,4,n,i)}function qm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Wm(n,i,a){return a=a!=null?a.concat([n]):null,Vu(4,4,qm.bind(null,i,n),a)}function ah(){}function Hm(n,i){var a=xn();i=i===void 0?null:i;var d=a.memoizedState;return d!==null&&i!==null&&th(i,d[1])?d[0]:(a.memoizedState=[n,i],n)}function Gm(n,i){var a=xn();i=i===void 0?null:i;var d=a.memoizedState;return d!==null&&i!==null&&th(i,d[1])?d[0]:(n=n(),a.memoizedState=[n,i],n)}function Km(n,i,a){return(mi&21)===0?(n.baseState&&(n.baseState=!1,Zt=!0),n.memoizedState=a):(Pn(a,i)||(a=va(),it.lanes|=a,gi|=a,n.baseState=!0),i)}function xw(n,i){var a=De;De=a!==0&&4>a?a:4,n(!0);var d=eh.transition;eh.transition={};try{n(!1),i()}finally{De=a,eh.transition=d}}function Qm(){return xn().memoizedState}function ww(n,i,a){var d=xs(n);if(a={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null},Ym(n))Jm(i,a);else if(a=Nm(n,i,a,d),a!==null){var f=Yt();Vn(a,n,d,f),Xm(a,i,d)}}function Ew(n,i,a){var d=xs(n),f={lane:d,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ym(n))Jm(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var x=i.lastRenderedState,b=m(x,a);if(f.hasEagerState=!0,f.eagerState=b,Pn(b,x)){var C=i.interleaved;C===null?(f.next=f,Kd(i)):(f.next=C.next,C.next=f),i.interleaved=f;return}}catch{}finally{}a=Nm(n,i,f,d),a!==null&&(f=Yt(),Vn(a,n,d,f),Xm(a,i,d))}}function Ym(n){var i=n.alternate;return n===it||i!==null&&i===it}function Jm(n,i){$a=Du=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Xm(n,i,a){if((a&4194240)!==0){var d=i.lanes;d&=n.pendingLanes,a|=d,i.lanes=a,xa(n,a)}}var Ou={readContext:_n,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Tw={readContext:_n,useCallback:function(n,i){return ir().memoizedState=[n,i===void 0?null:i],n},useContext:_n,useEffect:Bm,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Lu(4194308,4,qm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Lu(4194308,4,n,i)},useInsertionEffect:function(n,i){return Lu(4,2,n,i)},useMemo:function(n,i){var a=ir();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var d=ir();return i=a!==void 0?a(i):i,d.memoizedState=d.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},d.queue=n,n=n.dispatch=ww.bind(null,it,n),[d.memoizedState,n]},useRef:function(n){var i=ir();return n={current:n},i.memoizedState=n},useState:Fm,useDebugValue:ah,useDeferredValue:function(n){return ir().memoizedState=n},useTransition:function(){var n=Fm(!1),i=n[0];return n=xw.bind(null,n[1]),ir().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var d=it,f=ir();if(nt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),bt===null)throw Error(t(349));(mi&30)!==0||Dm(d,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,Bm(Vm.bind(null,d,m,n),[n]),d.flags|=2048,Ha(9,Lm.bind(null,d,m,a,i),void 0,null),a},useId:function(){var n=ir(),i=bt.identifierPrefix;if(nt){var a=Rr,d=Cr;a=(d&~(1<<32-on(d)-1)).toString(32)+a,i=":"+i+"R"+a,a=qa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=_w++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Iw={readContext:_n,useCallback:Hm,useContext:_n,useEffect:oh,useImperativeHandle:Wm,useInsertionEffect:zm,useLayoutEffect:$m,useMemo:Gm,useReducer:sh,useRef:Um,useState:function(){return sh(Wa)},useDebugValue:ah,useDeferredValue:function(n){var i=xn();return Km(i,wt.memoizedState,n)},useTransition:function(){var n=sh(Wa)[0],i=xn().memoizedState;return[n,i]},useMutableSource:Am,useSyncExternalStore:jm,useId:Qm,unstable_isNewReconciler:!1},Sw={readContext:_n,useCallback:Hm,useContext:_n,useEffect:oh,useImperativeHandle:Wm,useInsertionEffect:zm,useLayoutEffect:$m,useMemo:Gm,useReducer:ih,useRef:Um,useState:function(){return ih(Wa)},useDebugValue:ah,useDeferredValue:function(n){var i=xn();return wt===null?i.memoizedState=n:Km(i,wt.memoizedState,n)},useTransition:function(){var n=ih(Wa)[0],i=xn().memoizedState;return[n,i]},useMutableSource:Am,useSyncExternalStore:jm,useId:Qm,unstable_isNewReconciler:!1};function jn(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function lh(n,i,a,d){i=n.memoizedState,a=a(d,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Mu={isMounted:function(n){return(n=n._reactInternals)?Cn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var d=Yt(),f=xs(n),m=Ar(d,f);m.payload=i,a!=null&&(m.callback=a),i=gs(n,m,f),i!==null&&(Vn(i,n,f,d),Ru(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var d=Yt(),f=xs(n),m=Ar(d,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=gs(n,m,f),i!==null&&(Vn(i,n,f,d),Ru(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Yt(),d=xs(n),f=Ar(a,d);f.tag=2,i!=null&&(f.callback=i),i=gs(n,f,d),i!==null&&(Vn(i,n,d,a),Ru(i,n,d))}};function Zm(n,i,a,d,f,m,x){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,m,x):i.prototype&&i.prototype.isPureReactComponent?!Aa(a,d)||!Aa(f,m):!0}function eg(n,i,a){var d=!1,f=fs,m=i.contextType;return typeof m=="object"&&m!==null?m=_n(m):(f=Xt(i)?ci:Ft.current,d=i.contextTypes,m=(d=d!=null)?po(n,f):fs),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Mu,n.stateNode=i,i._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function tg(n,i,a,d){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,d),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,d),i.state!==n&&Mu.enqueueReplaceState(i,i.state,null)}function uh(n,i,a,d){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Qd(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=_n(m):(m=Xt(i)?ci:Ft.current,f.context=po(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(lh(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Mu.enqueueReplaceState(f,f.state,null),Pu(n,a,f,d),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Eo(n,i){try{var a="",d=i;do a+=Ce(d),d=d.return;while(d);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function ch(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function dh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var bw=typeof WeakMap=="function"?WeakMap:Map;function ng(n,i,a){a=Ar(-1,a),a.tag=3,a.payload={element:null};var d=i.value;return a.callback=function(){Wu||(Wu=!0,bh=d),dh(n,i)},a}function rg(n,i,a){a=Ar(-1,a),a.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var f=i.value;a.payload=function(){return d(f)},a.callback=function(){dh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){dh(n,i),typeof d!="function"&&(vs===null?vs=new Set([this]):vs.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})}),a}function sg(n,i,a){var d=n.pingCache;if(d===null){d=n.pingCache=new bw;var f=new Set;d.set(i,f)}else f=d.get(i),f===void 0&&(f=new Set,d.set(i,f));f.has(a)||(f.add(a),n=Uw.bind(null,n,i,a),i.then(n,n))}function ig(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function og(n,i,a,d,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ar(-1,1),i.tag=2,gs(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Nw=ge.ReactCurrentOwner,Zt=!1;function Qt(n,i,a,d){i.child=n===null?bm(i,null,a,d):vo(i,n.child,a,d)}function ag(n,i,a,d,f){a=a.render;var m=i.ref;return xo(i,f),d=nh(n,i,a,d,m,f),a=rh(),n!==null&&!Zt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,jr(n,i,f)):(nt&&a&&Fd(i),i.flags|=1,Qt(n,i,d,f),i.child)}function lg(n,i,a,d,f){if(n===null){var m=a.type;return typeof m=="function"&&!jh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,ug(n,i,m,d,f)):(n=Ju(a.type,null,d,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var x=m.memoizedProps;if(a=a.compare,a=a!==null?a:Aa,a(x,d)&&n.ref===i.ref)return jr(n,i,f)}return i.flags|=1,n=Es(m,d),n.ref=i.ref,n.return=i,i.child=n}function ug(n,i,a,d,f){if(n!==null){var m=n.memoizedProps;if(Aa(m,d)&&n.ref===i.ref)if(Zt=!1,i.pendingProps=d=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Zt=!0);else return i.lanes=n.lanes,jr(n,i,f)}return hh(n,i,a,d,f)}function cg(n,i,a){var d=i.pendingProps,f=d.children,m=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Io,fn),fn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ge(Io,fn),fn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=m!==null?m.baseLanes:a,Ge(Io,fn),fn|=d}else m!==null?(d=m.baseLanes|a,i.memoizedState=null):d=a,Ge(Io,fn),fn|=d;return Qt(n,i,f,a),i.child}function dg(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function hh(n,i,a,d,f){var m=Xt(a)?ci:Ft.current;return m=po(i,m),xo(i,f),a=nh(n,i,a,d,m,f),d=rh(),n!==null&&!Zt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,jr(n,i,f)):(nt&&d&&Fd(i),i.flags|=1,Qt(n,i,a,f),i.child)}function hg(n,i,a,d,f){if(Xt(a)){var m=!0;Eu(i)}else m=!1;if(xo(i,f),i.stateNode===null)Uu(n,i),eg(i,a,d),uh(i,a,d,f),d=!0;else if(n===null){var x=i.stateNode,b=i.memoizedProps;x.props=b;var C=x.context,B=a.contextType;typeof B=="object"&&B!==null?B=_n(B):(B=Xt(a)?ci:Ft.current,B=po(i,B));var X=a.getDerivedStateFromProps,Z=typeof X=="function"||typeof x.getSnapshotBeforeUpdate=="function";Z||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(b!==d||C!==B)&&tg(i,x,d,B),ms=!1;var Y=i.memoizedState;x.state=Y,Pu(i,d,x,f),C=i.memoizedState,b!==d||Y!==C||Jt.current||ms?(typeof X=="function"&&(lh(i,a,X,d),C=i.memoizedState),(b=ms||Zm(i,a,b,d,Y,C,B))?(Z||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(i.flags|=4194308)):(typeof x.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=d,i.memoizedState=C),x.props=d,x.state=C,x.context=B,d=b):(typeof x.componentDidMount=="function"&&(i.flags|=4194308),d=!1)}else{x=i.stateNode,km(n,i),b=i.memoizedProps,B=i.type===i.elementType?b:jn(i.type,b),x.props=B,Z=i.pendingProps,Y=x.context,C=a.contextType,typeof C=="object"&&C!==null?C=_n(C):(C=Xt(a)?ci:Ft.current,C=po(i,C));var ie=a.getDerivedStateFromProps;(X=typeof ie=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(b!==Z||Y!==C)&&tg(i,x,d,C),ms=!1,Y=i.memoizedState,x.state=Y,Pu(i,d,x,f);var ue=i.memoizedState;b!==Z||Y!==ue||Jt.current||ms?(typeof ie=="function"&&(lh(i,a,ie,d),ue=i.memoizedState),(B=ms||Zm(i,a,B,d,Y,ue,C)||!1)?(X||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(d,ue,C),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(d,ue,C)),typeof x.componentDidUpdate=="function"&&(i.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof x.componentDidUpdate!="function"||b===n.memoizedProps&&Y===n.memoizedState||(i.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&Y===n.memoizedState||(i.flags|=1024),i.memoizedProps=d,i.memoizedState=ue),x.props=d,x.state=ue,x.context=C,d=B):(typeof x.componentDidUpdate!="function"||b===n.memoizedProps&&Y===n.memoizedState||(i.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&Y===n.memoizedState||(i.flags|=1024),d=!1)}return fh(n,i,a,d,m,f)}function fh(n,i,a,d,f,m){dg(n,i);var x=(i.flags&128)!==0;if(!d&&!x)return f&&ym(i,a,!1),jr(n,i,m);d=i.stateNode,Nw.current=i;var b=x&&typeof a.getDerivedStateFromError!="function"?null:d.render();return i.flags|=1,n!==null&&x?(i.child=vo(i,n.child,null,m),i.child=vo(i,null,b,m)):Qt(n,i,b,m),i.memoizedState=d.state,f&&ym(i,a,!0),i.child}function fg(n){var i=n.stateNode;i.pendingContext?mm(n,i.pendingContext,i.pendingContext!==i.context):i.context&&mm(n,i.context,!1),Yd(n,i.containerInfo)}function pg(n,i,a,d,f){return yo(),$d(f),i.flags|=256,Qt(n,i,a,d),i.child}var ph={dehydrated:null,treeContext:null,retryLane:0};function mh(n){return{baseLanes:n,cachePool:null,transitions:null}}function mg(n,i,a){var d=i.pendingProps,f=st.current,m=!1,x=(i.flags&128)!==0,b;if((b=x)||(b=n!==null&&n.memoizedState===null?!1:(f&2)!==0),b?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ge(st,f&1),n===null)return zd(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(x=d.children,n=d.fallback,m?(d=i.mode,m=i.child,x={mode:"hidden",children:x},(d&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=x):m=Xu(x,d,0,null),n=xi(n,d,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=mh(a),i.memoizedState=ph,n):gh(i,x));if(f=n.memoizedState,f!==null&&(b=f.dehydrated,b!==null))return kw(n,i,x,d,b,f,a);if(m){m=d.fallback,x=i.mode,f=n.child,b=f.sibling;var C={mode:"hidden",children:d.children};return(x&1)===0&&i.child!==f?(d=i.child,d.childLanes=0,d.pendingProps=C,i.deletions=null):(d=Es(f,C),d.subtreeFlags=f.subtreeFlags&14680064),b!==null?m=Es(b,m):(m=xi(m,x,a,null),m.flags|=2),m.return=i,d.return=i,d.sibling=m,i.child=d,d=m,m=i.child,x=n.child.memoizedState,x=x===null?mh(a):{baseLanes:x.baseLanes|a,cachePool:null,transitions:x.transitions},m.memoizedState=x,m.childLanes=n.childLanes&~a,i.memoizedState=ph,d}return m=n.child,n=m.sibling,d=Es(m,{mode:"visible",children:d.children}),(i.mode&1)===0&&(d.lanes=a),d.return=i,d.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=d,i.memoizedState=null,d}function gh(n,i){return i=Xu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Fu(n,i,a,d){return d!==null&&$d(d),vo(i,n.child,null,a),n=gh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function kw(n,i,a,d,f,m,x){if(a)return i.flags&256?(i.flags&=-257,d=ch(Error(t(422))),Fu(n,i,x,d)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=d.fallback,f=i.mode,d=Xu({mode:"visible",children:d.children},f,0,null),m=xi(m,f,x,null),m.flags|=2,d.return=i,m.return=i,d.sibling=m,i.child=d,(i.mode&1)!==0&&vo(i,n.child,null,x),i.child.memoizedState=mh(x),i.memoizedState=ph,m);if((i.mode&1)===0)return Fu(n,i,x,null);if(f.data==="$!"){if(d=f.nextSibling&&f.nextSibling.dataset,d)var b=d.dgst;return d=b,m=Error(t(419)),d=ch(m,d,void 0),Fu(n,i,x,d)}if(b=(x&n.childLanes)!==0,Zt||b){if(d=bt,d!==null){switch(x&-x){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(d.suspendedLanes|x))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Pr(n,f),Vn(d,n,f,-1))}return Ah(),d=ch(Error(t(421))),Fu(n,i,x,d)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Bw.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,hn=ds(f.nextSibling),dn=i,nt=!0,An=null,n!==null&&(yn[vn++]=Cr,yn[vn++]=Rr,yn[vn++]=di,Cr=n.id,Rr=n.overflow,di=i),i=gh(i,d.children),i.flags|=4096,i)}function gg(n,i,a){n.lanes|=i;var d=n.alternate;d!==null&&(d.lanes|=i),Gd(n.return,i,a)}function yh(n,i,a,d,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:d,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=d,m.tail=a,m.tailMode=f)}function yg(n,i,a){var d=i.pendingProps,f=d.revealOrder,m=d.tail;if(Qt(n,i,d.children,a),d=st.current,(d&2)!==0)d=d&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gg(n,a,i);else if(n.tag===19)gg(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Ge(st,d),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Au(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),yh(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Au(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}yh(i,!0,a,null,m);break;case"together":yh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Uu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function jr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),gi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Es(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Es(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Cw(n,i,a){switch(i.tag){case 3:fg(i),yo();break;case 5:Pm(i);break;case 1:Xt(i.type)&&Eu(i);break;case 4:Yd(i,i.stateNode.containerInfo);break;case 10:var d=i.type._context,f=i.memoizedProps.value;Ge(ku,d._currentValue),d._currentValue=f;break;case 13:if(d=i.memoizedState,d!==null)return d.dehydrated!==null?(Ge(st,st.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?mg(n,i,a):(Ge(st,st.current&1),n=jr(n,i,a),n!==null?n.sibling:null);Ge(st,st.current&1);break;case 19:if(d=(a&i.childLanes)!==0,(n.flags&128)!==0){if(d)return yg(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ge(st,st.current),d)break;return null;case 22:case 23:return i.lanes=0,cg(n,i,a)}return jr(n,i,a)}var vg,vh,_g,xg;vg=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vh=function(){},_g=function(n,i,a,d){var f=n.memoizedProps;if(f!==d){n=i.stateNode,pi(sr.current);var m=null;switch(a){case"input":f=Fi(n,f),d=Fi(n,d),m=[];break;case"select":f=ae({},f,{value:void 0}),d=ae({},d,{value:void 0}),m=[];break;case"textarea":f=aa(n,f),d=aa(n,d),m=[];break;default:typeof f.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=_u)}kn(a,d);var x;a=null;for(B in f)if(!d.hasOwnProperty(B)&&f.hasOwnProperty(B)&&f[B]!=null)if(B==="style"){var b=f[B];for(x in b)b.hasOwnProperty(x)&&(a||(a={}),a[x]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?m||(m=[]):(m=m||[]).push(B,null));for(B in d){var C=d[B];if(b=f?.[B],d.hasOwnProperty(B)&&C!==b&&(C!=null||b!=null))if(B==="style")if(b){for(x in b)!b.hasOwnProperty(x)||C&&C.hasOwnProperty(x)||(a||(a={}),a[x]="");for(x in C)C.hasOwnProperty(x)&&b[x]!==C[x]&&(a||(a={}),a[x]=C[x])}else a||(m||(m=[]),m.push(B,a)),a=C;else B==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,b=b?b.__html:void 0,C!=null&&b!==C&&(m=m||[]).push(B,C)):B==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(B,""+C):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(C!=null&&B==="onScroll"&&Je("scroll",n),m||b===C||(m=[])):(m=m||[]).push(B,C))}a&&(m=m||[]).push("style",a);var B=m;(i.updateQueue=B)&&(i.flags|=4)}},xg=function(n,i,a,d){a!==d&&(i.flags|=4)};function Ga(n,i){if(!nt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Bt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,d=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags&14680064,d|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,d|=f.subtreeFlags,d|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=d,n.childLanes=a,i}function Rw(n,i,a){var d=i.pendingProps;switch(Ud(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(i),null;case 1:return Xt(i.type)&&wu(),Bt(i),null;case 3:return d=i.stateNode,wo(),Xe(Jt),Xe(Ft),Zd(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(bu(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,An!==null&&(Ch(An),An=null))),vh(n,i),Bt(i),null;case 5:Jd(i);var f=pi(za.current);if(a=i.type,n!==null&&i.stateNode!=null)_g(n,i,a,d,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!d){if(i.stateNode===null)throw Error(t(166));return Bt(i),null}if(n=pi(sr.current),bu(i)){d=i.stateNode,a=i.type;var m=i.memoizedProps;switch(d[rr]=i,d[Oa]=m,n=(i.mode&1)!==0,a){case"dialog":Je("cancel",d),Je("close",d);break;case"iframe":case"object":case"embed":Je("load",d);break;case"video":case"audio":for(f=0;f<Da.length;f++)Je(Da[f],d);break;case"source":Je("error",d);break;case"img":case"image":case"link":Je("error",d),Je("load",d);break;case"details":Je("toggle",d);break;case"input":ql(d,m),Je("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!m.multiple},Je("invalid",d);break;case"textarea":la(d,m),Je("invalid",d)}kn(a,m),f=null;for(var x in m)if(m.hasOwnProperty(x)){var b=m[x];x==="children"?typeof b=="string"?d.textContent!==b&&(m.suppressHydrationWarning!==!0&&vu(d.textContent,b,n),f=["children",b]):typeof b=="number"&&d.textContent!==""+b&&(m.suppressHydrationWarning!==!0&&vu(d.textContent,b,n),f=["children",""+b]):o.hasOwnProperty(x)&&b!=null&&x==="onScroll"&&Je("scroll",d)}switch(a){case"input":Mi(d),oa(d,m,!0);break;case"textarea":Mi(d),Qr(d);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(d.onclick=_u)}d=f,i.updateQueue=d,d!==null&&(i.flags|=4)}else{x=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ua(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=x.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=x.createElement(a,{is:d.is}):(n=x.createElement(a),a==="select"&&(x=n,d.multiple?x.multiple=!0:d.size&&(x.size=d.size))):n=x.createElementNS(n,a),n[rr]=i,n[Oa]=d,vg(n,i,!1,!1),i.stateNode=n;e:{switch(x=$i(a,d),a){case"dialog":Je("cancel",n),Je("close",n),f=d;break;case"iframe":case"object":case"embed":Je("load",n),f=d;break;case"video":case"audio":for(f=0;f<Da.length;f++)Je(Da[f],n);f=d;break;case"source":Je("error",n),f=d;break;case"img":case"image":case"link":Je("error",n),Je("load",n),f=d;break;case"details":Je("toggle",n),f=d;break;case"input":ql(n,d),f=Fi(n,d),Je("invalid",n);break;case"option":f=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},f=ae({},d,{value:void 0}),Je("invalid",n);break;case"textarea":la(n,d),f=aa(n,d),Je("invalid",n);break;default:f=d}kn(a,f),b=f;for(m in b)if(b.hasOwnProperty(m)){var C=b[m];m==="style"?zi(n,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Hl(n,C)):m==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Qs(n,C):typeof C=="number"&&Qs(n,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?C!=null&&m==="onScroll"&&Je("scroll",n):C!=null&&te(n,m,C,x))}switch(a){case"input":Mi(n),oa(n,d,!1);break;case"textarea":Mi(n),Qr(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Ve(d.value));break;case"select":n.multiple=!!d.multiple,m=d.value,m!=null?Nn(n,!!d.multiple,m,!1):d.defaultValue!=null&&Nn(n,!!d.multiple,d.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=_u)}switch(a){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Bt(i),null;case 6:if(n&&i.stateNode!=null)xg(n,i,n.memoizedProps,d);else{if(typeof d!="string"&&i.stateNode===null)throw Error(t(166));if(a=pi(za.current),pi(sr.current),bu(i)){if(d=i.stateNode,a=i.memoizedProps,d[rr]=i,(m=d.nodeValue!==a)&&(n=dn,n!==null))switch(n.tag){case 3:vu(d.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&vu(d.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else d=(a.nodeType===9?a:a.ownerDocument).createTextNode(d),d[rr]=i,i.stateNode=d}return Bt(i),null;case 13:if(Xe(st),d=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(nt&&hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Tm(),yo(),i.flags|=98560,m=!1;else if(m=bu(i),d!==null&&d.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[rr]=i}else yo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Bt(i),m=!1}else An!==null&&(Ch(An),An=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(st.current&1)!==0?Et===0&&(Et=3):Ah())),i.updateQueue!==null&&(i.flags|=4),Bt(i),null);case 4:return wo(),vh(n,i),n===null&&La(i.stateNode.containerInfo),Bt(i),null;case 10:return Hd(i.type._context),Bt(i),null;case 17:return Xt(i.type)&&wu(),Bt(i),null;case 19:if(Xe(st),m=i.memoizedState,m===null)return Bt(i),null;if(d=(i.flags&128)!==0,x=m.rendering,x===null)if(d)Ga(m,!1);else{if(Et!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(x=Au(n),x!==null){for(i.flags|=128,Ga(m,!1),d=x.updateQueue,d!==null&&(i.updateQueue=d,i.flags|=4),i.subtreeFlags=0,d=a,a=i.child;a!==null;)m=a,n=d,m.flags&=14680066,x=m.alternate,x===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=x.childLanes,m.lanes=x.lanes,m.child=x.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=x.memoizedProps,m.memoizedState=x.memoizedState,m.updateQueue=x.updateQueue,m.type=x.type,n=x.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ge(st,st.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ye()>So&&(i.flags|=128,d=!0,Ga(m,!1),i.lanes=4194304)}else{if(!d)if(n=Au(x),n!==null){if(i.flags|=128,d=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ga(m,!0),m.tail===null&&m.tailMode==="hidden"&&!x.alternate&&!nt)return Bt(i),null}else 2*Ye()-m.renderingStartTime>So&&a!==1073741824&&(i.flags|=128,d=!0,Ga(m,!1),i.lanes=4194304);m.isBackwards?(x.sibling=i.child,i.child=x):(a=m.last,a!==null?a.sibling=x:i.child=x,m.last=x)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ye(),i.sibling=null,a=st.current,Ge(st,d?a&1|2:a&1),i):(Bt(i),null);case 22:case 23:return Ph(),d=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(i.flags|=8192),d&&(i.mode&1)!==0?(fn&1073741824)!==0&&(Bt(i),i.subtreeFlags&6&&(i.flags|=8192)):Bt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Pw(n,i){switch(Ud(i),i.tag){case 1:return Xt(i.type)&&wu(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return wo(),Xe(Jt),Xe(Ft),Zd(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Jd(i),null;case 13:if(Xe(st),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));yo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xe(st),null;case 4:return wo(),null;case 10:return Hd(i.type._context),null;case 22:case 23:return Ph(),null;case 24:return null;default:return null}}var Bu=!1,zt=!1,Aw=typeof WeakSet=="function"?WeakSet:Set,le=null;function To(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(d){lt(n,i,d)}else a.current=null}function _h(n,i,a){try{a()}catch(d){lt(n,i,d)}}var wg=!1;function jw(n,i){if(Pd=Ir,n=Zp(),Td(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var d=a.getSelection&&a.getSelection();if(d&&d.rangeCount!==0){a=d.anchorNode;var f=d.anchorOffset,m=d.focusNode;d=d.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var x=0,b=-1,C=-1,B=0,X=0,Z=n,Y=null;t:for(;;){for(var ie;Z!==a||f!==0&&Z.nodeType!==3||(b=x+f),Z!==m||d!==0&&Z.nodeType!==3||(C=x+d),Z.nodeType===3&&(x+=Z.nodeValue.length),(ie=Z.firstChild)!==null;)Y=Z,Z=ie;for(;;){if(Z===n)break t;if(Y===a&&++B===f&&(b=x),Y===m&&++X===d&&(C=x),(ie=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=ie}a=b===-1||C===-1?null:{start:b,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ad={focusedElem:n,selectionRange:a},Ir=!1,le=i;le!==null;)if(i=le,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,le=n;else for(;le!==null;){i=le;try{var ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,dt=ue.memoizedState,O=i.stateNode,A=O.getSnapshotBeforeUpdate(i.elementType===i.type?ce:jn(i.type,ce),dt);O.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){lt(i,i.return,ee)}if(n=i.sibling,n!==null){n.return=i.return,le=n;break}le=i.return}return ue=wg,wg=!1,ue}function Ka(n,i,a){var d=i.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var f=d=d.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&_h(i,a,m)}f=f.next}while(f!==d)}}function zu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var d=a.create;a.destroy=d()}a=a.next}while(a!==i)}}function xh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Eg(n){var i=n.alternate;i!==null&&(n.alternate=null,Eg(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[rr],delete i[Oa],delete i[Vd],delete i[mw],delete i[gw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Tg(n){return n.tag===5||n.tag===3||n.tag===4}function Ig(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Tg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wh(n,i,a){var d=n.tag;if(d===5||d===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=_u));else if(d!==4&&(n=n.child,n!==null))for(wh(n,i,a),n=n.sibling;n!==null;)wh(n,i,a),n=n.sibling}function Eh(n,i,a){var d=n.tag;if(d===5||d===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(Eh(n,i,a),n=n.sibling;n!==null;)Eh(n,i,a),n=n.sibling}var At=null,Dn=!1;function ys(n,i,a){for(a=a.child;a!==null;)Sg(n,i,a),a=a.sibling}function Sg(n,i,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(ei,a)}catch{}switch(a.tag){case 5:zt||To(a,i);case 6:var d=At,f=Dn;At=null,ys(n,i,a),At=d,Dn=f,At!==null&&(Dn?(n=At,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):At.removeChild(a.stateNode));break;case 18:At!==null&&(Dn?(n=At,a=a.stateNode,n.nodeType===8?Ld(n.parentNode,a):n.nodeType===1&&Ld(n,a),as(n)):Ld(At,a.stateNode));break;case 4:d=At,f=Dn,At=a.stateNode.containerInfo,Dn=!0,ys(n,i,a),At=d,Dn=f;break;case 0:case 11:case 14:case 15:if(!zt&&(d=a.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){f=d=d.next;do{var m=f,x=m.destroy;m=m.tag,x!==void 0&&((m&2)!==0||(m&4)!==0)&&_h(a,i,x),f=f.next}while(f!==d)}ys(n,i,a);break;case 1:if(!zt&&(To(a,i),d=a.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(b){lt(a,i,b)}ys(n,i,a);break;case 21:ys(n,i,a);break;case 22:a.mode&1?(zt=(d=zt)||a.memoizedState!==null,ys(n,i,a),zt=d):ys(n,i,a);break;default:ys(n,i,a)}}function bg(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Aw),i.forEach(function(d){var f=zw.bind(null,n,d);a.has(d)||(a.add(d),d.then(f,f))})}}function Ln(n,i){var a=i.deletions;if(a!==null)for(var d=0;d<a.length;d++){var f=a[d];try{var m=n,x=i,b=x;e:for(;b!==null;){switch(b.tag){case 5:At=b.stateNode,Dn=!1;break e;case 3:At=b.stateNode.containerInfo,Dn=!0;break e;case 4:At=b.stateNode.containerInfo,Dn=!0;break e}b=b.return}if(At===null)throw Error(t(160));Sg(m,x,f),At=null,Dn=!1;var C=f.alternate;C!==null&&(C.return=null),f.return=null}catch(B){lt(f,i,B)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ng(i,n),i=i.sibling}function Ng(n,i){var a=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(i,n),or(n),d&4){try{Ka(3,n,n.return),zu(3,n)}catch(ce){lt(n,n.return,ce)}try{Ka(5,n,n.return)}catch(ce){lt(n,n.return,ce)}}break;case 1:Ln(i,n),or(n),d&512&&a!==null&&To(a,a.return);break;case 5:if(Ln(i,n),or(n),d&512&&a!==null&&To(a,a.return),n.flags&32){var f=n.stateNode;try{Qs(f,"")}catch(ce){lt(n,n.return,ce)}}if(d&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,x=a!==null?a.memoizedProps:m,b=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{b==="input"&&m.type==="radio"&&m.name!=null&&Ui(f,m),$i(b,x);var B=$i(b,m);for(x=0;x<C.length;x+=2){var X=C[x],Z=C[x+1];X==="style"?zi(f,Z):X==="dangerouslySetInnerHTML"?Hl(f,Z):X==="children"?Qs(f,Z):te(f,X,Z,B)}switch(b){case"input":Ks(f,m);break;case"textarea":Wl(f,m);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var ie=m.value;ie!=null?Nn(f,!!m.multiple,ie,!1):Y!==!!m.multiple&&(m.defaultValue!=null?Nn(f,!!m.multiple,m.defaultValue,!0):Nn(f,!!m.multiple,m.multiple?[]:"",!1))}f[Oa]=m}catch(ce){lt(n,n.return,ce)}}break;case 6:if(Ln(i,n),or(n),d&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(ce){lt(n,n.return,ce)}}break;case 3:if(Ln(i,n),or(n),d&4&&a!==null&&a.memoizedState.isDehydrated)try{as(i.containerInfo)}catch(ce){lt(n,n.return,ce)}break;case 4:Ln(i,n),or(n);break;case 13:Ln(i,n),or(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Sh=Ye())),d&4&&bg(n);break;case 22:if(X=a!==null&&a.memoizedState!==null,n.mode&1?(zt=(B=zt)||X,Ln(i,n),zt=B):Ln(i,n),or(n),d&8192){if(B=n.memoizedState!==null,(n.stateNode.isHidden=B)&&!X&&(n.mode&1)!==0)for(le=n,X=n.child;X!==null;){for(Z=le=X;le!==null;){switch(Y=le,ie=Y.child,Y.tag){case 0:case 11:case 14:case 15:Ka(4,Y,Y.return);break;case 1:To(Y,Y.return);var ue=Y.stateNode;if(typeof ue.componentWillUnmount=="function"){d=Y,a=Y.return;try{i=d,ue.props=i.memoizedProps,ue.state=i.memoizedState,ue.componentWillUnmount()}catch(ce){lt(d,a,ce)}}break;case 5:To(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Rg(Z);continue}}ie!==null?(ie.return=Y,le=ie):Rg(Z)}X=X.sibling}e:for(X=null,Z=n;;){if(Z.tag===5){if(X===null){X=Z;try{f=Z.stateNode,B?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(b=Z.stateNode,C=Z.memoizedProps.style,x=C!=null&&C.hasOwnProperty("display")?C.display:null,b.style.display=Xr("display",x))}catch(ce){lt(n,n.return,ce)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=B?"":Z.memoizedProps}catch(ce){lt(n,n.return,ce)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===n)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===n)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===n)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Ln(i,n),or(n),d&4&&bg(n);break;case 21:break;default:Ln(i,n),or(n)}}function or(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Tg(a)){var d=a;break e}a=a.return}throw Error(t(160))}switch(d.tag){case 5:var f=d.stateNode;d.flags&32&&(Qs(f,""),d.flags&=-33);var m=Ig(n);Eh(n,m,f);break;case 3:case 4:var x=d.stateNode.containerInfo,b=Ig(n);wh(n,b,x);break;default:throw Error(t(161))}}catch(C){lt(n,n.return,C)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Dw(n,i,a){le=n,kg(n)}function kg(n,i,a){for(var d=(n.mode&1)!==0;le!==null;){var f=le,m=f.child;if(f.tag===22&&d){var x=f.memoizedState!==null||Bu;if(!x){var b=f.alternate,C=b!==null&&b.memoizedState!==null||zt;b=Bu;var B=zt;if(Bu=x,(zt=C)&&!B)for(le=f;le!==null;)x=le,C=x.child,x.tag===22&&x.memoizedState!==null?Pg(f):C!==null?(C.return=x,le=C):Pg(f);for(;m!==null;)le=m,kg(m),m=m.sibling;le=f,Bu=b,zt=B}Cg(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,le=m):Cg(n)}}function Cg(n){for(;le!==null;){var i=le;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:zt||zu(5,i);break;case 1:var d=i.stateNode;if(i.flags&4&&!zt)if(a===null)d.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:jn(i.type,a.memoizedProps);d.componentDidUpdate(f,a.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Rm(i,m,d);break;case 3:var x=i.updateQueue;if(x!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Rm(i,x,a)}break;case 5:var b=i.stateNode;if(a===null&&i.flags&4){a=b;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var B=i.alternate;if(B!==null){var X=B.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&as(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||i.flags&512&&xh(i)}catch(Y){lt(i,i.return,Y)}}if(i===n){le=null;break}if(a=i.sibling,a!==null){a.return=i.return,le=a;break}le=i.return}}function Rg(n){for(;le!==null;){var i=le;if(i===n){le=null;break}var a=i.sibling;if(a!==null){a.return=i.return,le=a;break}le=i.return}}function Pg(n){for(;le!==null;){var i=le;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{zu(4,i)}catch(C){lt(i,a,C)}break;case 1:var d=i.stateNode;if(typeof d.componentDidMount=="function"){var f=i.return;try{d.componentDidMount()}catch(C){lt(i,f,C)}}var m=i.return;try{xh(i)}catch(C){lt(i,m,C)}break;case 5:var x=i.return;try{xh(i)}catch(C){lt(i,x,C)}}}catch(C){lt(i,i.return,C)}if(i===n){le=null;break}var b=i.sibling;if(b!==null){b.return=i.return,le=b;break}le=i.return}}var Lw=Math.ceil,$u=ge.ReactCurrentDispatcher,Th=ge.ReactCurrentOwner,wn=ge.ReactCurrentBatchConfig,Oe=0,bt=null,yt=null,jt=0,fn=0,Io=hs(0),Et=0,Qa=null,gi=0,qu=0,Ih=0,Ya=null,en=null,Sh=0,So=1/0,Dr=null,Wu=!1,bh=null,vs=null,Hu=!1,_s=null,Gu=0,Ja=0,Nh=null,Ku=-1,Qu=0;function Yt(){return(Oe&6)!==0?Ye():Ku!==-1?Ku:Ku=Ye()}function xs(n){return(n.mode&1)===0?1:(Oe&2)!==0&&jt!==0?jt&-jt:vw.transition!==null?(Qu===0&&(Qu=va()),Qu):(n=De,n!==0||(n=window.event,n=n===void 0?16:Zi(n.type)),n)}function Vn(n,i,a,d){if(50<Ja)throw Ja=0,Nh=null,Error(t(185));si(n,a,d),((Oe&2)===0||n!==bt)&&(n===bt&&((Oe&2)===0&&(qu|=a),Et===4&&ws(n,jt)),tn(n,d),a===1&&Oe===0&&(i.mode&1)===0&&(So=Ye()+500,Tu&&ps()))}function tn(n,i){var a=n.callbackNode;ri(n,i);var d=wr(n,n===bt?jt:0);if(d===0)a!==null&&Hi(a),n.callbackNode=null,n.callbackPriority=0;else if(i=d&-d,n.callbackPriority!==i){if(a!=null&&Hi(a),i===1)n.tag===0?yw(jg.bind(null,n)):vm(jg.bind(null,n)),fw(function(){(Oe&6)===0&&ps()}),a=null;else{switch(Gn(d)){case 1:a=Gi;break;case 4:a=ma;break;case 16:a=Zs;break;case 536870912:a=Ki;break;default:a=Zs}a=Bg(a,Ag.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Ag(n,i){if(Ku=-1,Qu=0,(Oe&6)!==0)throw Error(t(327));var a=n.callbackNode;if(bo()&&n.callbackNode!==a)return null;var d=wr(n,n===bt?jt:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||i)i=Yu(n,d);else{i=d;var f=Oe;Oe|=2;var m=Lg();(bt!==n||jt!==i)&&(Dr=null,So=Ye()+500,vi(n,i));do try{Mw();break}catch(b){Dg(n,b)}while(!0);Wd(),$u.current=m,Oe=f,yt!==null?i=0:(bt=null,jt=0,i=Et)}if(i!==0){if(i===2&&(f=ya(n),f!==0&&(d=f,i=kh(n,f))),i===1)throw a=Qa,vi(n,0),ws(n,d),tn(n,Ye()),a;if(i===6)ws(n,d);else{if(f=n.current.alternate,(d&30)===0&&!Vw(f)&&(i=Yu(n,d),i===2&&(m=ya(n),m!==0&&(d=m,i=kh(n,m))),i===1))throw a=Qa,vi(n,0),ws(n,d),tn(n,Ye()),a;switch(n.finishedWork=f,n.finishedLanes=d,i){case 0:case 1:throw Error(t(345));case 2:_i(n,en,Dr);break;case 3:if(ws(n,d),(d&130023424)===d&&(i=Sh+500-Ye(),10<i)){if(wr(n,0)!==0)break;if(f=n.suspendedLanes,(f&d)!==d){Yt(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Dd(_i.bind(null,n,en,Dr),i);break}_i(n,en,Dr);break;case 4:if(ws(n,d),(d&4194240)===d)break;for(i=n.eventTimes,f=-1;0<d;){var x=31-on(d);m=1<<x,x=i[x],x>f&&(f=x),d&=~m}if(d=f,d=Ye()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Lw(d/1960))-d,10<d){n.timeoutHandle=Dd(_i.bind(null,n,en,Dr),d);break}_i(n,en,Dr);break;case 5:_i(n,en,Dr);break;default:throw Error(t(329))}}}return tn(n,Ye()),n.callbackNode===a?Ag.bind(null,n):null}function kh(n,i){var a=Ya;return n.current.memoizedState.isDehydrated&&(vi(n,i).flags|=256),n=Yu(n,i),n!==2&&(i=en,en=a,i!==null&&Ch(i)),n}function Ch(n){en===null?en=n:en.push.apply(en,n)}function Vw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var d=0;d<a.length;d++){var f=a[d],m=f.getSnapshot;f=f.value;try{if(!Pn(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ws(n,i){for(i&=~Ih,i&=~qu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-on(i),d=1<<a;n[a]=-1,i&=~d}}function jg(n){if((Oe&6)!==0)throw Error(t(327));bo();var i=wr(n,0);if((i&1)===0)return tn(n,Ye()),null;var a=Yu(n,i);if(n.tag!==0&&a===2){var d=ya(n);d!==0&&(i=d,a=kh(n,d))}if(a===1)throw a=Qa,vi(n,0),ws(n,i),tn(n,Ye()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,_i(n,en,Dr),tn(n,Ye()),null}function Rh(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(So=Ye()+500,Tu&&ps())}}function yi(n){_s!==null&&_s.tag===0&&(Oe&6)===0&&bo();var i=Oe;Oe|=1;var a=wn.transition,d=De;try{if(wn.transition=null,De=1,n)return n()}finally{De=d,wn.transition=a,Oe=i,(Oe&6)===0&&ps()}}function Ph(){fn=Io.current,Xe(Io)}function vi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,hw(a)),yt!==null)for(a=yt.return;a!==null;){var d=a;switch(Ud(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&wu();break;case 3:wo(),Xe(Jt),Xe(Ft),Zd();break;case 5:Jd(d);break;case 4:wo();break;case 13:Xe(st);break;case 19:Xe(st);break;case 10:Hd(d.type._context);break;case 22:case 23:Ph()}a=a.return}if(bt=n,yt=n=Es(n.current,null),jt=fn=i,Et=0,Qa=null,Ih=qu=gi=0,en=Ya=null,fi!==null){for(i=0;i<fi.length;i++)if(a=fi[i],d=a.interleaved,d!==null){a.interleaved=null;var f=d.next,m=a.pending;if(m!==null){var x=m.next;m.next=f,d.next=x}a.pending=d}fi=null}return n}function Dg(n,i){do{var a=yt;try{if(Wd(),ju.current=Ou,Du){for(var d=it.memoizedState;d!==null;){var f=d.queue;f!==null&&(f.pending=null),d=d.next}Du=!1}if(mi=0,St=wt=it=null,$a=!1,qa=0,Th.current=null,a===null||a.return===null){Et=1,Qa=i,yt=null;break}e:{var m=n,x=a.return,b=a,C=i;if(i=jt,b.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var B=C,X=b,Z=X.tag;if((X.mode&1)===0&&(Z===0||Z===11||Z===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var ie=ig(x);if(ie!==null){ie.flags&=-257,og(ie,x,b,m,i),ie.mode&1&&sg(m,B,i),i=ie,C=B;var ue=i.updateQueue;if(ue===null){var ce=new Set;ce.add(C),i.updateQueue=ce}else ue.add(C);break e}else{if((i&1)===0){sg(m,B,i),Ah();break e}C=Error(t(426))}}else if(nt&&b.mode&1){var dt=ig(x);if(dt!==null){(dt.flags&65536)===0&&(dt.flags|=256),og(dt,x,b,m,i),$d(Eo(C,b));break e}}m=C=Eo(C,b),Et!==4&&(Et=2),Ya===null?Ya=[m]:Ya.push(m),m=x;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var O=ng(m,C,i);Cm(m,O);break e;case 1:b=C;var A=m.type,U=m.stateNode;if((m.flags&128)===0&&(typeof A.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(vs===null||!vs.has(U)))){m.flags|=65536,i&=-i,m.lanes|=i;var ee=rg(m,b,i);Cm(m,ee);break e}}m=m.return}while(m!==null)}Og(a)}catch(de){i=de,yt===a&&a!==null&&(yt=a=a.return);continue}break}while(!0)}function Lg(){var n=$u.current;return $u.current=Ou,n===null?Ou:n}function Ah(){(Et===0||Et===3||Et===2)&&(Et=4),bt===null||(gi&268435455)===0&&(qu&268435455)===0||ws(bt,jt)}function Yu(n,i){var a=Oe;Oe|=2;var d=Lg();(bt!==n||jt!==i)&&(Dr=null,vi(n,i));do try{Ow();break}catch(f){Dg(n,f)}while(!0);if(Wd(),Oe=a,$u.current=d,yt!==null)throw Error(t(261));return bt=null,jt=0,Et}function Ow(){for(;yt!==null;)Vg(yt)}function Mw(){for(;yt!==null&&!Xs();)Vg(yt)}function Vg(n){var i=Ug(n.alternate,n,fn);n.memoizedProps=n.pendingProps,i===null?Og(n):yt=i,Th.current=null}function Og(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Rw(a,i,fn),a!==null){yt=a;return}}else{if(a=Pw(a,i),a!==null){a.flags&=32767,yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Et=6,yt=null;return}}if(i=i.sibling,i!==null){yt=i;return}yt=i=n}while(i!==null);Et===0&&(Et=5)}function _i(n,i,a){var d=De,f=wn.transition;try{wn.transition=null,De=1,Fw(n,i,a,d)}finally{wn.transition=f,De=d}return null}function Fw(n,i,a,d){do bo();while(_s!==null);if((Oe&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(vd(n,m),n===bt&&(yt=bt=null,jt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Hu||(Hu=!0,Bg(Zs,function(){return bo(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=wn.transition,wn.transition=null;var x=De;De=1;var b=Oe;Oe|=4,Th.current=null,jw(n,a),Ng(a,n),iw(Ad),Ir=!!Pd,Ad=Pd=null,n.current=a,Dw(a),xr(),Oe=b,De=x,wn.transition=m}else n.current=a;if(Hu&&(Hu=!1,_s=n,Gu=f),m=n.pendingLanes,m===0&&(vs=null),ru(a.stateNode),tn(n,Ye()),i!==null)for(d=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],d(f.value,{componentStack:f.stack,digest:f.digest});if(Wu)throw Wu=!1,n=bh,bh=null,n;return(Gu&1)!==0&&n.tag!==0&&bo(),m=n.pendingLanes,(m&1)!==0?n===Nh?Ja++:(Ja=0,Nh=n):Ja=0,ps(),null}function bo(){if(_s!==null){var n=Gn(Gu),i=wn.transition,a=De;try{if(wn.transition=null,De=16>n?16:n,_s===null)var d=!1;else{if(n=_s,_s=null,Gu=0,(Oe&6)!==0)throw Error(t(331));var f=Oe;for(Oe|=4,le=n.current;le!==null;){var m=le,x=m.child;if((le.flags&16)!==0){var b=m.deletions;if(b!==null){for(var C=0;C<b.length;C++){var B=b[C];for(le=B;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:Ka(8,X,m)}var Z=X.child;if(Z!==null)Z.return=X,le=Z;else for(;le!==null;){X=le;var Y=X.sibling,ie=X.return;if(Eg(X),X===B){le=null;break}if(Y!==null){Y.return=ie,le=Y;break}le=ie}}}var ue=m.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var dt=ce.sibling;ce.sibling=null,ce=dt}while(ce!==null)}}le=m}}if((m.subtreeFlags&2064)!==0&&x!==null)x.return=m,le=x;else e:for(;le!==null;){if(m=le,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ka(9,m,m.return)}var O=m.sibling;if(O!==null){O.return=m.return,le=O;break e}le=m.return}}var A=n.current;for(le=A;le!==null;){x=le;var U=x.child;if((x.subtreeFlags&2064)!==0&&U!==null)U.return=x,le=U;else e:for(x=A;le!==null;){if(b=le,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:zu(9,b)}}catch(de){lt(b,b.return,de)}if(b===x){le=null;break e}var ee=b.sibling;if(ee!==null){ee.return=b.return,le=ee;break e}le=b.return}}if(Oe=f,ps(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(ei,n)}catch{}d=!0}return d}finally{De=a,wn.transition=i}}return!1}function Mg(n,i,a){i=Eo(a,i),i=ng(n,i,1),n=gs(n,i,1),i=Yt(),n!==null&&(si(n,1,i),tn(n,i))}function lt(n,i,a){if(n.tag===3)Mg(n,n,a);else for(;i!==null;){if(i.tag===3){Mg(i,n,a);break}else if(i.tag===1){var d=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(vs===null||!vs.has(d))){n=Eo(a,n),n=rg(i,n,1),i=gs(i,n,1),n=Yt(),i!==null&&(si(i,1,n),tn(i,n));break}}i=i.return}}function Uw(n,i,a){var d=n.pingCache;d!==null&&d.delete(i),i=Yt(),n.pingedLanes|=n.suspendedLanes&a,bt===n&&(jt&a)===a&&(Et===4||Et===3&&(jt&130023424)===jt&&500>Ye()-Sh?vi(n,0):Ih|=a),tn(n,i)}function Fg(n,i){i===0&&((n.mode&1)===0?i=1:(i=ss,ss<<=1,(ss&130023424)===0&&(ss=4194304)));var a=Yt();n=Pr(n,i),n!==null&&(si(n,i,a),tn(n,a))}function Bw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Fg(n,a)}function zw(n,i){var a=0;switch(n.tag){case 13:var d=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(i),Fg(n,a)}var Ug;Ug=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Jt.current)Zt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Zt=!1,Cw(n,i,a);Zt=(n.flags&131072)!==0}else Zt=!1,nt&&(i.flags&1048576)!==0&&_m(i,Su,i.index);switch(i.lanes=0,i.tag){case 2:var d=i.type;Uu(n,i),n=i.pendingProps;var f=po(i,Ft.current);xo(i,a),f=nh(null,i,d,n,f,a);var m=rh();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Xt(d)?(m=!0,Eu(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Qd(i),f.updater=Mu,i.stateNode=f,f._reactInternals=i,uh(i,d,n,a),i=fh(null,i,d,!0,m,a)):(i.tag=0,nt&&m&&Fd(i),Qt(null,i,f,a),i=i.child),i;case 16:d=i.elementType;e:{switch(Uu(n,i),n=i.pendingProps,f=d._init,d=f(d._payload),i.type=d,f=i.tag=qw(d),n=jn(d,n),f){case 0:i=hh(null,i,d,n,a);break e;case 1:i=hg(null,i,d,n,a);break e;case 11:i=ag(null,i,d,n,a);break e;case 14:i=lg(null,i,d,jn(d.type,n),a);break e}throw Error(t(306,d,""))}return i;case 0:return d=i.type,f=i.pendingProps,f=i.elementType===d?f:jn(d,f),hh(n,i,d,f,a);case 1:return d=i.type,f=i.pendingProps,f=i.elementType===d?f:jn(d,f),hg(n,i,d,f,a);case 3:e:{if(fg(i),n===null)throw Error(t(387));d=i.pendingProps,m=i.memoizedState,f=m.element,km(n,i),Pu(i,d,null,a);var x=i.memoizedState;if(d=x.element,m.isDehydrated)if(m={element:d,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Eo(Error(t(423)),i),i=pg(n,i,d,a,f);break e}else if(d!==f){f=Eo(Error(t(424)),i),i=pg(n,i,d,a,f);break e}else for(hn=ds(i.stateNode.containerInfo.firstChild),dn=i,nt=!0,An=null,a=bm(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(yo(),d===f){i=jr(n,i,a);break e}Qt(n,i,d,a)}i=i.child}return i;case 5:return Pm(i),n===null&&zd(i),d=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,x=f.children,jd(d,f)?x=null:m!==null&&jd(d,m)&&(i.flags|=32),dg(n,i),Qt(n,i,x,a),i.child;case 6:return n===null&&zd(i),null;case 13:return mg(n,i,a);case 4:return Yd(i,i.stateNode.containerInfo),d=i.pendingProps,n===null?i.child=vo(i,null,d,a):Qt(n,i,d,a),i.child;case 11:return d=i.type,f=i.pendingProps,f=i.elementType===d?f:jn(d,f),ag(n,i,d,f,a);case 7:return Qt(n,i,i.pendingProps,a),i.child;case 8:return Qt(n,i,i.pendingProps.children,a),i.child;case 12:return Qt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(d=i.type._context,f=i.pendingProps,m=i.memoizedProps,x=f.value,Ge(ku,d._currentValue),d._currentValue=x,m!==null)if(Pn(m.value,x)){if(m.children===f.children&&!Jt.current){i=jr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var b=m.dependencies;if(b!==null){x=m.child;for(var C=b.firstContext;C!==null;){if(C.context===d){if(m.tag===1){C=Ar(-1,a&-a),C.tag=2;var B=m.updateQueue;if(B!==null){B=B.shared;var X=B.pending;X===null?C.next=C:(C.next=X.next,X.next=C),B.pending=C}}m.lanes|=a,C=m.alternate,C!==null&&(C.lanes|=a),Gd(m.return,a,i),b.lanes|=a;break}C=C.next}}else if(m.tag===10)x=m.type===i.type?null:m.child;else if(m.tag===18){if(x=m.return,x===null)throw Error(t(341));x.lanes|=a,b=x.alternate,b!==null&&(b.lanes|=a),Gd(x,a,i),x=m.sibling}else x=m.child;if(x!==null)x.return=m;else for(x=m;x!==null;){if(x===i){x=null;break}if(m=x.sibling,m!==null){m.return=x.return,x=m;break}x=x.return}m=x}Qt(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,d=i.pendingProps.children,xo(i,a),f=_n(f),d=d(f),i.flags|=1,Qt(n,i,d,a),i.child;case 14:return d=i.type,f=jn(d,i.pendingProps),f=jn(d.type,f),lg(n,i,d,f,a);case 15:return ug(n,i,i.type,i.pendingProps,a);case 17:return d=i.type,f=i.pendingProps,f=i.elementType===d?f:jn(d,f),Uu(n,i),i.tag=1,Xt(d)?(n=!0,Eu(i)):n=!1,xo(i,a),eg(i,d,f),uh(i,d,f,a),fh(null,i,d,!0,n,a);case 19:return yg(n,i,a);case 22:return cg(n,i,a)}throw Error(t(156,i.tag))};function Bg(n,i){return pa(n,i)}function $w(n,i,a,d){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(n,i,a,d){return new $w(n,i,a,d)}function jh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qw(n){if(typeof n=="function")return jh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===It)return 14}return 2}function Es(n,i){var a=n.alternate;return a===null?(a=En(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ju(n,i,a,d,f,m){var x=2;if(d=n,typeof n=="function")jh(n)&&(x=1);else if(typeof n=="string")x=5;else e:switch(n){case R:return xi(a.children,f,m,i);case S:x=8,f|=8;break;case k:return n=En(12,a,i,f|2),n.elementType=k,n.lanes=m,n;case N:return n=En(13,a,i,f),n.elementType=N,n.lanes=m,n;case He:return n=En(19,a,i,f),n.elementType=He,n.lanes=m,n;case tt:return Xu(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:x=10;break e;case P:x=9;break e;case V:x=11;break e;case It:x=14;break e;case Ot:x=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=En(x,a,i,f),i.elementType=n,i.type=d,i.lanes=m,i}function xi(n,i,a,d){return n=En(7,n,d,i),n.lanes=a,n}function Xu(n,i,a,d){return n=En(22,n,d,i),n.elementType=tt,n.lanes=a,n.stateNode={isHidden:!1},n}function Dh(n,i,a){return n=En(6,n,null,i),n.lanes=a,n}function Lh(n,i,a){return i=En(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Ww(n,i,a,d,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=d,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Vh(n,i,a,d,f,m,x,b,C){return n=new Ww(n,i,a,b,C),i===1?(i=1,m===!0&&(i|=8)):i=0,m=En(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:d,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qd(m),n}function Hw(n,i,a){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:d==null?null:""+d,children:n,containerInfo:i,implementation:a}}function zg(n){if(!n)return fs;n=n._reactInternals;e:{if(Cn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Xt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xt(a))return gm(n,a,i)}return i}function $g(n,i,a,d,f,m,x,b,C){return n=Vh(a,d,!0,n,f,m,x,b,C),n.context=zg(null),a=n.current,d=Yt(),f=xs(a),m=Ar(d,f),m.callback=i??null,gs(a,m,f),n.current.lanes=f,si(n,f,d),tn(n,d),n}function Zu(n,i,a,d){var f=i.current,m=Yt(),x=xs(f);return a=zg(a),i.context===null?i.context=a:i.pendingContext=a,i=Ar(m,x),i.payload={element:n},d=d===void 0?null:d,d!==null&&(i.callback=d),n=gs(f,i,x),n!==null&&(Vn(n,f,x,m),Ru(n,f,x)),x}function ec(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function qg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Oh(n,i){qg(n,i),(n=n.alternate)&&qg(n,i)}function Gw(){return null}var Wg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Mh(n){this._internalRoot=n}tc.prototype.render=Mh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Zu(n,i,null,null)},tc.prototype.unmount=Mh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;yi(function(){Zu(null,n,null,null)}),i[Nr]=null}};function tc(n){this._internalRoot=n}tc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ta();n={blockedOn:null,target:n,priority:i};for(var a=0;a<an.length&&i!==0&&i<an[a].priority;a++);an.splice(a,0,n),a===0&&Ji(n)}};function Fh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function Kw(n,i,a,d,f){if(f){if(typeof d=="function"){var m=d;d=function(){var B=ec(x);m.call(B)}}var x=$g(i,d,n,0,null,!1,!1,"",Hg);return n._reactRootContainer=x,n[Nr]=x.current,La(n.nodeType===8?n.parentNode:n),yi(),x}for(;f=n.lastChild;)n.removeChild(f);if(typeof d=="function"){var b=d;d=function(){var B=ec(C);b.call(B)}}var C=Vh(n,0,!1,null,null,!1,!1,"",Hg);return n._reactRootContainer=C,n[Nr]=C.current,La(n.nodeType===8?n.parentNode:n),yi(function(){Zu(i,C,a,d)}),C}function rc(n,i,a,d,f){var m=a._reactRootContainer;if(m){var x=m;if(typeof f=="function"){var b=f;f=function(){var C=ec(x);b.call(C)}}Zu(i,x,n,f)}else x=Kw(a,i,n,f,d);return ec(x)}wa=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Fe(i.pendingLanes);a!==0&&(xa(i,a|1),tn(i,Ye()),(Oe&6)===0&&(So=Ye()+500,ps()))}break;case 13:yi(function(){var d=Pr(n,1);if(d!==null){var f=Yt();Vn(d,n,1,f)}}),Oh(n,1)}},Qi=function(n){if(n.tag===13){var i=Pr(n,134217728);if(i!==null){var a=Yt();Vn(i,n,134217728,a)}Oh(n,134217728)}},Ea=function(n){if(n.tag===13){var i=xs(n),a=Pr(n,i);if(a!==null){var d=Yt();Vn(a,n,i,d)}Oh(n,i)}},Ta=function(){return De},Ia=function(n,i){var a=De;try{return De=n,i()}finally{De=a}},yr=function(n,i,a){switch(i){case"input":if(Ks(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var d=a[i];if(d!==n&&d.form===n.form){var f=xu(d);if(!f)throw Error(t(90));ia(d),Ks(d,f)}}}break;case"textarea":Wl(n,a);break;case"select":i=a.value,i!=null&&Nn(n,!!a.multiple,i,!1)}},Kl=Rh,Ql=yi;var Qw={usingClientEntryPoint:!1,Events:[Ma,ho,xu,es,ts,Rh]},Xa={findFiberByHostInstance:ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yw={bundleType:Xa.bundleType,version:Xa.version,rendererPackageName:Xa.rendererPackageName,rendererConfig:Xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=nu(n),n===null?null:n.stateNode},findFiberByHostInstance:Xa.findFiberByHostInstance||Gw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{ei=sc.inject(Yw),sn=sc}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qw,nn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fh(i))throw Error(t(200));return Hw(n,i,null,a)},nn.createRoot=function(n,i){if(!Fh(n))throw Error(t(299));var a=!1,d="",f=Wg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Vh(n,1,!1,null,null,a,!1,d,f),n[Nr]=i.current,La(n.nodeType===8?n.parentNode:n),new Mh(i)},nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=nu(i),n=n===null?null:n.stateNode,n},nn.flushSync=function(n){return yi(n)},nn.hydrate=function(n,i,a){if(!nc(i))throw Error(t(200));return rc(null,n,i,!0,a)},nn.hydrateRoot=function(n,i,a){if(!Fh(n))throw Error(t(405));var d=a!=null&&a.hydratedSources||null,f=!1,m="",x=Wg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(x=a.onRecoverableError)),i=$g(i,null,n,1,a??null,f,!1,m,x),n[Nr]=i.current,La(n),d)for(n=0;n<d.length;n++)a=d[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new tc(i)},nn.render=function(n,i,a){if(!nc(i))throw Error(t(200));return rc(null,n,i,!1,a)},nn.unmountComponentAtNode=function(n){if(!nc(n))throw Error(t(40));return n._reactRootContainer?(yi(function(){rc(null,null,n,!1,function(){n._reactRootContainer=null,n[Nr]=null})}),!0):!1},nn.unstable_batchedUpdates=Rh,nn.unstable_renderSubtreeIntoContainer=function(n,i,a,d){if(!nc(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return rc(n,i,a,!1,d)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var ey;function s1(){if(ey)return zh.exports;ey=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),zh.exports=r1(),zh.exports}var ty;function i1(){if(ty)return ic;ty=1;var r=s1();return ic.createRoot=r.createRoot,ic.hydrateRoot=r.hydrateRoot,ic}var o1=i1(),F=Of();/**
 * react-router v7.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ny="popstate";function a1(r={}){function e(s,o){let{pathname:l,search:h,hash:p}=s.location;return af("",{pathname:l,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ml(o)}return u1(e,t,null,r)}function rt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function bn(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function l1(){return Math.random().toString(36).substring(2,10)}function ry(r,e){return{usr:r.state,key:r.key,idx:e}}function af(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Go(e):e,state:t,key:e&&e.key||s||l1()}}function ml({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Go(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function u1(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,p="POP",y=null,v=w();v==null&&(v=0,h.replaceState({...h.state,idx:v},""));function w(){return(h.state||{idx:null}).idx}function E(){p="POP";let z=w(),K=z==null?null:z-v;v=z,y&&y({action:p,location:q.location,delta:K})}function I(z,K){p="PUSH";let J=af(q.location,z,K);v=w()+1;let te=ry(J,v),ge=q.createHref(J);try{h.pushState(te,"",ge)}catch(Te){if(Te instanceof DOMException&&Te.name==="DataCloneError")throw Te;o.location.assign(ge)}l&&y&&y({action:p,location:q.location,delta:1})}function D(z,K){p="REPLACE";let J=af(q.location,z,K);v=w();let te=ry(J,v),ge=q.createHref(J);h.replaceState(te,"",ge),l&&y&&y({action:p,location:q.location,delta:0})}function W(z){return c1(z)}let q={get action(){return p},get location(){return r(o,h)},listen(z){if(y)throw new Error("A history only accepts one active listener");return o.addEventListener(ny,E),y=z,()=>{o.removeEventListener(ny,E),y=null}},createHref(z){return e(o,z)},createURL:W,encodeLocation(z){let K=W(z);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:I,replace:D,go(z){return h.go(z)}};return q}function c1(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),rt(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:ml(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function U0(r,e,t="/"){return d1(r,e,t,!1)}function d1(r,e,t,s){let o=typeof e=="string"?Go(e):e,l=Ur(o.pathname||"/",t);if(l==null)return null;let h=B0(r);h1(h);let p=null;for(let y=0;p==null&&y<h.length;++y){let v=T1(l);p=w1(h[y],v,s)}return p}function B0(r,e=[],t=[],s="",o=!1){let l=(h,p,y=o,v)=>{let w={relativePath:v===void 0?h.path||"":v,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(s)&&y)return;rt(w.relativePath.startsWith(s),`Absolute route path "${w.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(s.length)}let E=Or([s,w.relativePath]),I=t.concat(w);h.children&&h.children.length>0&&(rt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),B0(h.children,e,I,E,y)),!(h.path==null&&!h.index)&&e.push({path:E,score:_1(E,h.index),routesMeta:I})};return r.forEach((h,p)=>{if(h.path===""||!h.path?.includes("?"))l(h,p);else for(let y of z0(h.path))l(h,p,!0,y)}),e}function z0(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=z0(s.join("/")),p=[];return p.push(...h.map(y=>y===""?l:[l,y].join("/"))),o&&p.push(...h),p.map(y=>r.startsWith("/")&&y===""?"/":y)}function h1(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:x1(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var f1=/^:[\w-]+$/,p1=3,m1=2,g1=1,y1=10,v1=-2,sy=r=>r==="*";function _1(r,e){let t=r.split("/"),s=t.length;return t.some(sy)&&(s+=v1),e&&(s+=m1),t.filter(o=>!sy(o)).reduce((o,l)=>o+(f1.test(l)?p1:l===""?g1:y1),s)}function x1(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function w1(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",h=[];for(let p=0;p<s.length;++p){let y=s[p],v=p===s.length-1,w=l==="/"?e:e.slice(l.length)||"/",E=bc({path:y.relativePath,caseSensitive:y.caseSensitive,end:v},w),I=y.route;if(!E&&v&&t&&!s[s.length-1].route.index&&(E=bc({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},w)),!E)return null;Object.assign(o,E.params),h.push({params:o,pathname:Or([l,E.pathname]),pathnameBase:N1(Or([l,E.pathnameBase])),route:I}),E.pathnameBase!=="/"&&(l=Or([l,E.pathnameBase]))}return h}function bc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=E1(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((v,{paramName:w,isOptional:E},I)=>{if(w==="*"){let W=p[I]||"";h=l.slice(0,l.length-W.length).replace(/(.)\/+$/,"$1")}const D=p[I];return E&&!D?v[w]=void 0:v[w]=(D||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:h,pattern:r}}function E1(r,e=!1,t=!0){bn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,y)=>(s.push({paramName:p,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function T1(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ur(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}var $0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I1=r=>$0.test(r);function S1(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Go(r):r,l;if(t)if(I1(t))l=t;else{if(t.includes("//")){let h=t;t=t.replace(/\/\/+/g,"/"),bn(!1,`Pathnames cannot have embedded double slashes - normalizing ${h} -> ${t}`)}t.startsWith("/")?l=iy(t.substring(1),"/"):l=iy(t,e)}else l=e;return{pathname:l,search:k1(s),hash:C1(o)}}function iy(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Wh(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function b1(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Mf(r){let e=b1(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Ff(r,e,t,s=!1){let o;typeof r=="string"?o=Go(r):(o={...r},rt(!o.pathname||!o.pathname.includes("?"),Wh("?","pathname","search",o)),rt(!o.pathname||!o.pathname.includes("#"),Wh("#","pathname","hash",o)),rt(!o.search||!o.search.includes("#"),Wh("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,p;if(h==null)p=t;else{let E=e.length-1;if(!s&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),E-=1;o.pathname=I.join("/")}p=E>=0?e[E]:"/"}let y=S1(o,p),v=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!y.pathname.endsWith("/")&&(v||w)&&(y.pathname+="/"),y}var Or=r=>r.join("/").replace(/\/\/+/g,"/"),N1=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),k1=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,C1=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,R1=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function P1(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function A1(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var q0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function W0(r,e){let t=r;if(typeof t!="string"||!$0.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(q0)try{let l=new URL(window.location.href),h=t.startsWith("//")?new URL(l.protocol+t):new URL(t),p=Ur(h.pathname,e);h.origin===l.origin&&p!=null?t=p+h.search+h.hash:o=!0}catch{bn(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var H0=["POST","PUT","PATCH","DELETE"];new Set(H0);var j1=["GET",...H0];new Set(j1);var Ko=F.createContext(null);Ko.displayName="DataRouter";var Gc=F.createContext(null);Gc.displayName="DataRouterState";var D1=F.createContext(!1),G0=F.createContext({isTransitioning:!1});G0.displayName="ViewTransition";var L1=F.createContext(new Map);L1.displayName="Fetchers";var V1=F.createContext(null);V1.displayName="Await";var pn=F.createContext(null);pn.displayName="Navigation";var Cl=F.createContext(null);Cl.displayName="Location";var zn=F.createContext({outlet:null,matches:[],isDataRoute:!1});zn.displayName="Route";var Uf=F.createContext(null);Uf.displayName="RouteError";var K0="REACT_ROUTER_ERROR",O1="REDIRECT",M1="ROUTE_ERROR_RESPONSE";function F1(r){if(r.startsWith(`${K0}:${O1}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function U1(r){if(r.startsWith(`${K0}:${M1}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new R1(e.status,e.statusText,e.data)}catch{}}function B1(r,{relative:e}={}){rt(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=F.useContext(pn),{hash:o,pathname:l,search:h}=Rl(r,{relative:e}),p=l;return t!=="/"&&(p=l==="/"?t:Or([t,l])),s.createHref({pathname:p,search:h,hash:o})}function Qo(){return F.useContext(Cl)!=null}function Wr(){return rt(Qo(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(Cl).location}var Q0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Y0(r){F.useContext(pn).static||F.useLayoutEffect(r)}function et(){let{isDataRoute:r}=F.useContext(zn);return r?eE():z1()}function z1(){rt(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let r=F.useContext(Ko),{basename:e,navigator:t}=F.useContext(pn),{matches:s}=F.useContext(zn),{pathname:o}=Wr(),l=JSON.stringify(Mf(s)),h=F.useRef(!1);return Y0(()=>{h.current=!0}),F.useCallback((y,v={})=>{if(bn(h.current,Q0),!h.current)return;if(typeof y=="number"){t.go(y);return}let w=Ff(y,JSON.parse(l),o,v.relative==="path");r==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Or([e,w.pathname])),(v.replace?t.replace:t.push)(w,v.state,v)},[e,t,l,o,r])}F.createContext(null);function qs(){let{matches:r}=F.useContext(zn),e=r[r.length-1];return e?e.params:{}}function Rl(r,{relative:e}={}){let{matches:t}=F.useContext(zn),{pathname:s}=Wr(),o=JSON.stringify(Mf(t));return F.useMemo(()=>Ff(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function $1(r,e){return J0(r,e)}function J0(r,e,t,s,o){rt(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=F.useContext(pn),{matches:h}=F.useContext(zn),p=h[h.length-1],y=p?p.params:{},v=p?p.pathname:"/",w=p?p.pathnameBase:"/",E=p&&p.route;{let J=E&&E.path||"";Z0(v,!E||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let I=Wr(),D;if(e){let J=typeof e=="string"?Go(e):e;rt(w==="/"||J.pathname?.startsWith(w),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${J.pathname}" was given in the \`location\` prop.`),D=J}else D=I;let W=D.pathname||"/",q=W;if(w!=="/"){let J=w.replace(/^\//,"").split("/");q="/"+W.replace(/^\//,"").split("/").slice(J.length).join("/")}let z=U0(r,{pathname:q});bn(E||z!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),bn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=K1(z&&z.map(J=>Object.assign({},J,{params:Object.assign({},y,J.params),pathname:Or([w,l.encodeLocation?l.encodeLocation(J.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?w:Or([w,l.encodeLocation?l.encodeLocation(J.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:J.pathnameBase])})),h,t,s,o);return e&&K?F.createElement(Cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},K):K}function q1(){let r=Z1(),e=P1(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:l},"ErrorBoundary")," or"," ",F.createElement("code",{style:l},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),t?F.createElement("pre",{style:o},t):null,h)}var W1=F.createElement(q1,null),X0=class extends F.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=U1(r.digest);t&&(r=t)}let e=r!==void 0?F.createElement(zn.Provider,{value:this.props.routeContext},F.createElement(Uf.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?F.createElement(H1,{error:r},e):e}};X0.contextType=D1;var Hh=new WeakMap;function H1({children:r,error:e}){let{basename:t}=F.useContext(pn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=F1(e.digest);if(s){let o=Hh.get(e);if(o)throw o;let l=W0(s.location,t);if(q0&&!Hh.get(e))if(l.isExternal||s.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw Hh.set(e,h),h}return F.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return r}function G1({routeContext:r,match:e,children:t}){let s=F.useContext(Ko);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(zn.Provider,{value:r},t)}function K1(r,e=[],t=null,s=null,o=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let l=r,h=t?.errors;if(h!=null){let w=l.findIndex(E=>E.route.id&&h?.[E.route.id]!==void 0);rt(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),l=l.slice(0,Math.min(l.length,w+1))}let p=!1,y=-1;if(t)for(let w=0;w<l.length;w++){let E=l[w];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=w),E.route.id){let{loaderData:I,errors:D}=t,W=E.route.loader&&!I.hasOwnProperty(E.route.id)&&(!D||D[E.route.id]===void 0);if(E.route.lazy||W){p=!0,y>=0?l=l.slice(0,y+1):l=[l[0]];break}}}let v=t&&s?(w,E)=>{s(w,{location:t.location,params:t.matches?.[0]?.params??{},unstable_pattern:A1(t.matches),errorInfo:E})}:void 0;return l.reduceRight((w,E,I)=>{let D,W=!1,q=null,z=null;t&&(D=h&&E.route.id?h[E.route.id]:void 0,q=E.route.errorElement||W1,p&&(y<0&&I===0?(Z0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),W=!0,z=null):y===I&&(W=!0,z=E.route.hydrateFallbackElement||null)));let K=e.concat(l.slice(0,I+1)),J=()=>{let te;return D?te=q:W?te=z:E.route.Component?te=F.createElement(E.route.Component,null):E.route.element?te=E.route.element:te=w,F.createElement(G1,{match:E,routeContext:{outlet:w,matches:K,isDataRoute:t!=null},children:te})};return t&&(E.route.ErrorBoundary||E.route.errorElement||I===0)?F.createElement(X0,{location:t.location,revalidation:t.revalidation,component:q,error:D,children:J(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:v}):J()},null)}function Bf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q1(r){let e=F.useContext(Ko);return rt(e,Bf(r)),e}function Y1(r){let e=F.useContext(Gc);return rt(e,Bf(r)),e}function J1(r){let e=F.useContext(zn);return rt(e,Bf(r)),e}function zf(r){let e=J1(r),t=e.matches[e.matches.length-1];return rt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function X1(){return zf("useRouteId")}function Z1(){let r=F.useContext(Uf),e=Y1("useRouteError"),t=zf("useRouteError");return r!==void 0?r:e.errors?.[t]}function eE(){let{router:r}=Q1("useNavigate"),e=zf("useNavigate"),t=F.useRef(!1);return Y0(()=>{t.current=!0}),F.useCallback(async(o,l={})=>{bn(t.current,Q0),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var oy={};function Z0(r,e,t){!e&&!oy[r]&&(oy[r]=!0,bn(!1,t))}F.memo(tE);function tE({routes:r,future:e,state:t,onError:s}){return J0(r,void 0,t,s,e)}function kt({to:r,replace:e,state:t,relative:s}){rt(Qo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=F.useContext(pn);bn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=F.useContext(zn),{pathname:h}=Wr(),p=et(),y=Ff(r,Mf(l),h,s==="path"),v=JSON.stringify(y);return F.useEffect(()=>{p(JSON.parse(v),{replace:e,state:t,relative:s})},[p,v,s,e,t]),null}function Ne(r){rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nE({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,unstable_useTransitions:h}){rt(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),y=F.useMemo(()=>({basename:p,navigator:o,static:l,unstable_useTransitions:h,future:{}}),[p,o,l,h]);typeof t=="string"&&(t=Go(t));let{pathname:v="/",search:w="",hash:E="",state:I=null,key:D="default"}=t,W=F.useMemo(()=>{let q=Ur(v,p);return q==null?null:{location:{pathname:q,search:w,hash:E,state:I,key:D},navigationType:s}},[p,v,w,E,I,D,s]);return bn(W!=null,`<Router basename="${p}"> is not able to match the URL "${v}${w}${E}" because it does not start with the basename, so the <Router> won't render anything.`),W==null?null:F.createElement(pn.Provider,{value:y},F.createElement(Cl.Provider,{children:e,value:W}))}function rE({children:r,location:e}){return $1(lf(r),e)}function lf(r,e=[]){let t=[];return F.Children.forEach(r,(s,o)=>{if(!F.isValidElement(s))return;let l=[...e,o];if(s.type===F.Fragment){t.push.apply(t,lf(s.props.children,l));return}rt(s.type===Ne,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),rt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=lf(s.props.children,l)),t.push(h)}),t}var pc="get",mc="application/x-www-form-urlencoded";function Kc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function sE(r){return Kc(r)&&r.tagName.toLowerCase()==="button"}function iE(r){return Kc(r)&&r.tagName.toLowerCase()==="form"}function oE(r){return Kc(r)&&r.tagName.toLowerCase()==="input"}function aE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function lE(r,e){return r.button===0&&(!e||e==="_self")&&!aE(r)}var oc=null;function uE(){if(oc===null)try{new FormData(document.createElement("form"),0),oc=!1}catch{oc=!0}return oc}var cE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gh(r){return r!=null&&!cE.has(r)?(bn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mc}"`),null):r}function dE(r,e){let t,s,o,l,h;if(iE(r)){let p=r.getAttribute("action");s=p?Ur(p,e):null,t=r.getAttribute("method")||pc,o=Gh(r.getAttribute("enctype"))||mc,l=new FormData(r)}else if(sE(r)||oE(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||p.getAttribute("action");if(s=y?Ur(y,e):null,t=r.getAttribute("formmethod")||p.getAttribute("method")||pc,o=Gh(r.getAttribute("formenctype"))||Gh(p.getAttribute("enctype"))||mc,l=new FormData(p,r),!uE()){let{name:v,type:w,value:E}=r;if(w==="image"){let I=v?`${v}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else v&&l.append(v,E)}}else{if(Kc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=pc,s=null,o=mc,h=r}return l&&o==="text/plain"&&(h=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $f(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function hE(r,e,t,s){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&Ur(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function fE(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pE(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function mE(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await fE(l,t);return h.links?h.links():[]}return[]}));return _E(s.flat(1).filter(pE).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ay(r,e,t,s,o,l){let h=(y,v)=>t[v]?y.route.id!==t[v].route.id:!0,p=(y,v)=>t[v].pathname!==y.pathname||t[v].route.path?.endsWith("*")&&t[v].params["*"]!==y.params["*"];return l==="assets"?e.filter((y,v)=>h(y,v)||p(y,v)):l==="data"?e.filter((y,v)=>{let w=s.routes[y.route.id];if(!w||!w.hasLoader)return!1;if(h(y,v)||p(y,v))return!0;if(y.route.shouldRevalidate){let E=y.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function gE(r,e,{includeHydrateFallback:t}={}){return yE(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function yE(r){return[...new Set(r)]}function vE(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function _E(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(vE(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function ev(){let r=F.useContext(Ko);return $f(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function xE(){let r=F.useContext(Gc);return $f(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var qf=F.createContext(void 0);qf.displayName="FrameworkContext";function tv(){let r=F.useContext(qf);return $f(r,"You must render this element inside a <HydratedRouter> element"),r}function wE(r,e){let t=F.useContext(qf),[s,o]=F.useState(!1),[l,h]=F.useState(!1),{onFocus:p,onBlur:y,onMouseEnter:v,onMouseLeave:w,onTouchStart:E}=e,I=F.useRef(null);F.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let q=K=>{K.forEach(J=>{h(J.isIntersecting)})},z=new IntersectionObserver(q,{threshold:.5});return I.current&&z.observe(I.current),()=>{z.disconnect()}}},[r]),F.useEffect(()=>{if(s){let q=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(q)}}},[s]);let D=()=>{o(!0)},W=()=>{o(!1),h(!1)};return t?r!=="intent"?[l,I,{}]:[l,I,{onFocus:el(p,D),onBlur:el(y,W),onMouseEnter:el(v,D),onMouseLeave:el(w,W),onTouchStart:el(E,D)}]:[!1,I,{}]}function el(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function EE({page:r,...e}){let{router:t}=ev(),s=F.useMemo(()=>U0(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?F.createElement(IE,{page:r,matches:s,...e}):null}function TE(r){let{manifest:e,routeModules:t}=tv(),[s,o]=F.useState([]);return F.useEffect(()=>{let l=!1;return mE(r,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[r,e,t]),s}function IE({page:r,matches:e,...t}){let s=Wr(),{future:o,manifest:l,routeModules:h}=tv(),{basename:p}=ev(),{loaderData:y,matches:v}=xE(),w=F.useMemo(()=>ay(r,e,v,l,s,"data"),[r,e,v,l,s]),E=F.useMemo(()=>ay(r,e,v,l,s,"assets"),[r,e,v,l,s]),I=F.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let q=new Set,z=!1;if(e.forEach(J=>{let te=l.routes[J.route.id];!te||!te.hasLoader||(!w.some(ge=>ge.route.id===J.route.id)&&J.route.id in y&&h[J.route.id]?.shouldRevalidate||te.hasClientLoader?z=!0:q.add(J.route.id))}),q.size===0)return[];let K=hE(r,p,o.unstable_trailingSlashAwareDataRequests,"data");return z&&q.size>0&&K.searchParams.set("_routes",e.filter(J=>q.has(J.route.id)).map(J=>J.route.id).join(",")),[K.pathname+K.search]},[p,o.unstable_trailingSlashAwareDataRequests,y,s,l,w,e,r,h]),D=F.useMemo(()=>gE(E,l),[E,l]),W=TE(E);return F.createElement(F.Fragment,null,I.map(q=>F.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...t})),D.map(q=>F.createElement("link",{key:q,rel:"modulepreload",href:q,...t})),W.map(({key:q,link:z})=>F.createElement("link",{key:q,nonce:t.nonce,...z})))}function SE(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var bE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bE&&(window.__reactRouterVersion="7.12.0")}catch{}function NE({basename:r,children:e,unstable_useTransitions:t,window:s}){let o=F.useRef();o.current==null&&(o.current=a1({window:s,v5Compat:!0}));let l=o.current,[h,p]=F.useState({action:l.action,location:l.location}),y=F.useCallback(v=>{t===!1?p(v):F.startTransition(()=>p(v))},[t]);return F.useLayoutEffect(()=>l.listen(y),[l,y]),F.createElement(nE,{basename:r,children:e,location:h.location,navigationType:h.action,navigator:l,unstable_useTransitions:t})}var nv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ur=F.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:h,state:p,target:y,to:v,preventScrollReset:w,viewTransition:E,unstable_defaultShouldRevalidate:I,...D},W){let{basename:q,unstable_useTransitions:z}=F.useContext(pn),K=typeof v=="string"&&nv.test(v),J=W0(v,q);v=J.to;let te=B1(v,{relative:o}),[ge,Te,Ie]=wE(s,D),R=PE(v,{replace:h,state:p,target:y,preventScrollReset:w,relative:o,viewTransition:E,unstable_defaultShouldRevalidate:I,unstable_useTransitions:z});function S(j){e&&e(j),j.defaultPrevented||R(j)}let k=F.createElement("a",{...D,...Ie,href:J.absoluteURL||te,onClick:J.isExternal||l?e:S,ref:SE(W,Te),target:y,"data-discover":!K&&t==="render"?"true":void 0});return ge&&!K?F.createElement(F.Fragment,null,k,F.createElement(EE,{page:te})):k});ur.displayName="Link";var kE=F.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:h,viewTransition:p,children:y,...v},w){let E=Rl(h,{relative:v.relative}),I=Wr(),D=F.useContext(Gc),{navigator:W,basename:q}=F.useContext(pn),z=D!=null&&VE(E)&&p===!0,K=W.encodeLocation?W.encodeLocation(E).pathname:E.pathname,J=I.pathname,te=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;t||(J=J.toLowerCase(),te=te?te.toLowerCase():null,K=K.toLowerCase()),te&&q&&(te=Ur(te,q)||te);const ge=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let Te=J===K||!o&&J.startsWith(K)&&J.charAt(ge)==="/",Ie=te!=null&&(te===K||!o&&te.startsWith(K)&&te.charAt(K.length)==="/"),R={isActive:Te,isPending:Ie,isTransitioning:z},S=Te?e:void 0,k;typeof s=="function"?k=s(R):k=[s,Te?"active":null,Ie?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let j=typeof l=="function"?l(R):l;return F.createElement(ur,{...v,"aria-current":S,className:k,ref:w,style:j,to:h,viewTransition:p},typeof y=="function"?y(R):y)});kE.displayName="NavLink";var CE=F.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:h=pc,action:p,onSubmit:y,relative:v,preventScrollReset:w,viewTransition:E,unstable_defaultShouldRevalidate:I,...D},W)=>{let{unstable_useTransitions:q}=F.useContext(pn),z=DE(),K=LE(p,{relative:v}),J=h.toLowerCase()==="get"?"get":"post",te=typeof p=="string"&&nv.test(p),ge=Te=>{if(y&&y(Te),Te.defaultPrevented)return;Te.preventDefault();let Ie=Te.nativeEvent.submitter,R=Ie?.getAttribute("formmethod")||h,S=()=>z(Ie||Te.currentTarget,{fetcherKey:e,method:R,navigate:t,replace:o,state:l,relative:v,preventScrollReset:w,viewTransition:E,unstable_defaultShouldRevalidate:I});q&&t!==!1?F.startTransition(()=>S()):S()};return F.createElement("form",{ref:W,method:J,action:K,onSubmit:s?y:ge,...D,"data-discover":!te&&r==="render"?"true":void 0})});CE.displayName="Form";function RE(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rv(r){let e=F.useContext(Ko);return rt(e,RE(r)),e}function PE(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:y}={}){let v=et(),w=Wr(),E=Rl(r,{relative:l});return F.useCallback(I=>{if(lE(I,e)){I.preventDefault();let D=t!==void 0?t:ml(w)===ml(E),W=()=>v(r,{replace:D,state:s,preventScrollReset:o,relative:l,viewTransition:h,unstable_defaultShouldRevalidate:p});y?F.startTransition(()=>W()):W()}},[w,v,E,t,s,e,r,o,l,h,p,y])}var AE=0,jE=()=>`__${String(++AE)}__`;function DE(){let{router:r}=rv("useSubmit"),{basename:e}=F.useContext(pn),t=X1(),s=r.fetch,o=r.navigate;return F.useCallback(async(l,h={})=>{let{action:p,method:y,encType:v,formData:w,body:E}=dE(l,e);if(h.navigate===!1){let I=h.fetcherKey||jE();await s(I,t,h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:w,body:E,formMethod:h.method||y,formEncType:h.encType||v,flushSync:h.flushSync})}else await o(h.action||p,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:w,body:E,formMethod:h.method||y,formEncType:h.encType||v,replace:h.replace,state:h.state,fromRouteId:t,flushSync:h.flushSync,viewTransition:h.viewTransition})},[s,o,e,t])}function LE(r,{relative:e}={}){let{basename:t}=F.useContext(pn),s=F.useContext(zn);rt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...Rl(r||".",{relative:e})},h=Wr();if(r==null){l.search=h.search;let p=new URLSearchParams(l.search),y=p.getAll("index");if(y.some(w=>w==="")){p.delete("index"),y.filter(E=>E).forEach(E=>p.append("index",E));let w=p.toString();l.search=w?`?${w}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Or([t,l.pathname])),ml(l)}function VE(r,{relative:e}={}){let t=F.useContext(G0);rt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=rv("useViewTransitionState"),o=Rl(r,{relative:e});if(!t.isTransitioning)return!1;let l=Ur(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=Ur(t.nextLocation.pathname,s)||t.nextLocation.pathname;return bc(o.pathname,h)!=null||bc(o.pathname,l)!=null}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ME=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),ly=r=>{const e=ME(r);return e.charAt(0).toUpperCase()+e.slice(1)},sv=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var FE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=F.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:h,...p},y)=>F.createElement("svg",{ref:y,...FE,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:sv("lucide",o),...p},[...h.map(([v,w])=>F.createElement(v,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=(r,e)=>{const t=F.forwardRef(({className:s,...o},l)=>F.createElement(UE,{ref:l,iconNode:e,className:sv(`lucide-${OE(ly(r))}`,`lucide-${r}`,s),...o}));return t.displayName=ly(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Wf=Ue("arrow-left",BE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Qc=Ue("arrow-right",zE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],qE=Ue("award",$E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],uf=Ue("bell",WE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],GE=Ue("building-2",HE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ws=Ue("calendar",KE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],YE=Ue("check",QE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Yo=Ue("circle-check-big",JE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],gl=Ue("clock",XE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Pl=Ue("dollar-sign",ZE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],tT=Ue("download",eT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Al=Ue("file-text",nT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],sT=Ue("folder",rT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]],Hf=Ue("hammer",iT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Hr=Ue("house",oT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],iv=Ue("lock",aT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],uT=Ue("log-in",lT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],ov=Ue("log-out",cT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Gf=Ue("mail",dT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],mr=Ue("map-pin",hT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],pT=Ue("maximize-2",fT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],gT=Ue("maximize",mT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Kf=Ue("phone",yT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Yc=Ue("search",vT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],xT=Ue("square-pen",_T);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],av=Ue("star",wT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],TT=Ue("trees",ET);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Ti=Ue("upload",IT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],bT=Ue("user-plus",ST);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Nc=Ue("user",NT);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],CT=Ue("users",kT);function RT(){const r=et(),e=()=>{sessionStorage.setItem("roo_welcome_seen","1"),r("/",{replace:!0})};return c.jsxs("div",{className:"rl-wrap",children:[c.jsxs("div",{className:"rl-bg",children:[c.jsx("div",{className:"rl-blob rl-blob-a"}),c.jsx("div",{className:"rl-blob rl-blob-b"}),c.jsx("div",{className:"rl-blob rl-blob-c"}),c.jsx("div",{className:"rl-particles"})]}),c.jsxs("div",{className:"rl-card rl-float",children:[c.jsx("div",{className:"rl-borderGlow"}),c.jsxs("div",{className:"rl-iconWrap",children:[c.jsx("div",{className:"rl-iconRing"}),c.jsx("div",{className:"rl-icon",children:c.jsx(Hr,{size:26})})]}),c.jsxs("h1",{className:"rl-title",children:["Welcome to ",c.jsx("span",{className:"rl-brand",children:"Roo Living"})]}),c.jsx("p",{className:"rl-subtitle",children:"Your dream home — designed & built with ease."}),c.jsxs("div",{className:"rl-status",children:[c.jsx("span",{className:"rl-dot"}),c.jsx("span",{children:"Ready to start"})]}),c.jsx("button",{className:"rl-btn",onClick:e,children:"Continue"}),c.jsx("p",{className:"rl-hint",children:"Click Continue to enter the website"})]}),c.jsx("style",{children:`
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
      `})]})}const PT=()=>{};var uy={};/**
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
 */const lv=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},AT=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],p=r[t++],y=((o&7)<<18|(l&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},uv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,p=h?r[o+1]:0,y=o+2<r.length,v=y?r[o+2]:0,w=l>>2,E=(l&3)<<4|p>>4;let I=(p&15)<<2|v>>6,D=v&63;y||(D=64,h||(I=64)),s.push(t[w],t[E],t[I],t[D])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(lv(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):AT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const E=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||p==null||v==null||E==null)throw new jT;const I=l<<2|p>>4;if(s.push(I),v!==64){const D=p<<4&240|v>>2;if(s.push(D),E!==64){const W=v<<6&192|E;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class jT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DT=function(r){const e=lv(r);return uv.encodeByteArray(e,!0)},kc=function(r){return DT(r).replace(/\./g,"")},cv=function(r){try{return uv.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function LT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VT=()=>LT().__FIREBASE_DEFAULTS__,OT=()=>{if(typeof process>"u"||typeof uy>"u")return;const r=uy.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},MT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&cv(r[1]);return e&&JSON.parse(e)},Jc=()=>{try{return PT()||VT()||OT()||MT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},dv=r=>Jc()?.emulatorHosts?.[r],FT=r=>{const e=dv(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},hv=()=>Jc()?.config,fv=r=>Jc()?.[`_${r}`];/**
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
 */class UT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Jo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pv(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function BT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...r};return[kc(JSON.stringify(t)),kc(JSON.stringify(h)),""].join(".")}const ul={};function zT(){const r={prod:[],emulator:[]};for(const e of Object.keys(ul))ul[e]?r.emulator.push(e):r.prod.push(e);return r}function $T(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let cy=!1;function mv(r,e){if(typeof window>"u"||typeof document>"u"||!Jo(window.location.host)||ul[r]===e||ul[r]||cy)return;ul[r]=e;function t(I){return`__firebase__banner__${I}`}const s="__firebase__banner",l=zT().prod.length>0;function h(){const I=document.getElementById(s);I&&I.remove()}function p(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function y(I,D){I.setAttribute("width","24"),I.setAttribute("id",D),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function v(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{cy=!0,h()},I}function w(I,D){I.setAttribute("id",D),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function E(){const I=$T(s),D=t("text"),W=document.getElementById(D)||document.createElement("span"),q=t("learnmore"),z=document.getElementById(q)||document.createElement("a"),K=t("preprendIcon"),J=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const te=I.element;p(te),w(z,q);const ge=v();y(J,K),te.append(J,W,z,ge),document.body.appendChild(te)}l?(W.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function WT(){const r=Jc()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function KT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QT(){const r=Ht();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function YT(){return!WT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JT(){try{return typeof indexedDB=="object"}catch{return!1}}function XT(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const ZT="FirebaseError";class Gr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ZT,Object.setPrototypeOf(this,Gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jl.prototype.create)}}class jl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?e2(l,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Gr(o,p,s)}}function e2(r,e){return r.replace(t2,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const t2=/\{\$([^}]+)}/g;function n2(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Si(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(dy(l)&&dy(h)){if(!Si(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function dy(r){return r!==null&&typeof r=="object"}/**
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
 */function Dl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function rl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function sl(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function r2(r,e){const t=new s2(r,e);return t.subscribe.bind(t)}class s2{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");i2(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Kh),o.error===void 0&&(o.error=Kh),o.complete===void 0&&(o.complete=Kh);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i2(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Kh(){}/**
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
 */function Gt(r){return r&&r._delegate?r._delegate:r}class bi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wi="[DEFAULT]";/**
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
 */class o2{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new UT;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(l2(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);s===p&&h.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:a2(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function a2(r){return r===wi?void 0:r}function l2(r){return r.instantiationMode==="EAGER"}/**
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
 */class u2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o2(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const c2={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},d2=Pe.INFO,h2={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},f2=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=h2[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qf{constructor(e){this.name=e,this._logLevel=d2,this._logHandler=f2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const p2=(r,e)=>e.some(t=>r instanceof t);let hy,fy;function m2(){return hy||(hy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g2(){return fy||(fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gv=new WeakMap,cf=new WeakMap,yv=new WeakMap,Qh=new WeakMap,Yf=new WeakMap;function y2(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(Rs(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&gv.set(t,r)}).catch(()=>{}),Yf.set(e,r),e}function v2(r){if(cf.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});cf.set(r,e)}let df={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return cf.get(r);if(e==="objectStoreNames")return r.objectStoreNames||yv.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rs(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function _2(r){df=r(df)}function x2(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Yh(this),e,...t);return yv.set(s,e.sort?e.sort():[e]),Rs(s)}:g2().includes(r)?function(...e){return r.apply(Yh(this),e),Rs(gv.get(this))}:function(...e){return Rs(r.apply(Yh(this),e))}}function w2(r){return typeof r=="function"?x2(r):(r instanceof IDBTransaction&&v2(r),p2(r,m2())?new Proxy(r,df):r)}function Rs(r){if(r instanceof IDBRequest)return y2(r);if(Qh.has(r))return Qh.get(r);const e=w2(r);return e!==r&&(Qh.set(r,e),Yf.set(e,r)),e}const Yh=r=>Yf.get(r);function E2(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),p=Rs(h);return s&&h.addEventListener("upgradeneeded",y=>{s(Rs(h.result),y.oldVersion,y.newVersion,Rs(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),p.then(y=>{l&&y.addEventListener("close",()=>l()),o&&y.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const T2=["get","getKey","getAll","getAllKeys","count"],I2=["put","add","delete","clear"],Jh=new Map;function py(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Jh.get(e))return Jh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=I2.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||T2.includes(t)))return;const l=async function(h,...p){const y=this.transaction(h,o?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),o&&y.done]))[0]};return Jh.set(e,l),l}_2(r=>({...r,get:(e,t,s)=>py(e,t)||r.get(e,t,s),has:(e,t)=>!!py(e,t)||r.has(e,t)}));/**
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
 */class S2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(b2(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function b2(r){return r.getComponent()?.type==="VERSION"}const hf="@firebase/app",my="0.14.8";/**
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
 */const Br=new Qf("@firebase/app"),N2="@firebase/app-compat",k2="@firebase/analytics-compat",C2="@firebase/analytics",R2="@firebase/app-check-compat",P2="@firebase/app-check",A2="@firebase/auth",j2="@firebase/auth-compat",D2="@firebase/database",L2="@firebase/data-connect",V2="@firebase/database-compat",O2="@firebase/functions",M2="@firebase/functions-compat",F2="@firebase/installations",U2="@firebase/installations-compat",B2="@firebase/messaging",z2="@firebase/messaging-compat",$2="@firebase/performance",q2="@firebase/performance-compat",W2="@firebase/remote-config",H2="@firebase/remote-config-compat",G2="@firebase/storage",K2="@firebase/storage-compat",Q2="@firebase/firestore",Y2="@firebase/ai",J2="@firebase/firestore-compat",X2="firebase",Z2="12.9.0";/**
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
 */const ff="[DEFAULT]",eI={[hf]:"fire-core",[N2]:"fire-core-compat",[C2]:"fire-analytics",[k2]:"fire-analytics-compat",[P2]:"fire-app-check",[R2]:"fire-app-check-compat",[A2]:"fire-auth",[j2]:"fire-auth-compat",[D2]:"fire-rtdb",[L2]:"fire-data-connect",[V2]:"fire-rtdb-compat",[O2]:"fire-fn",[M2]:"fire-fn-compat",[F2]:"fire-iid",[U2]:"fire-iid-compat",[B2]:"fire-fcm",[z2]:"fire-fcm-compat",[$2]:"fire-perf",[q2]:"fire-perf-compat",[W2]:"fire-rc",[H2]:"fire-rc-compat",[G2]:"fire-gcs",[K2]:"fire-gcs-compat",[Q2]:"fire-fst",[J2]:"fire-fst-compat",[Y2]:"fire-vertex","fire-js":"fire-js",[X2]:"fire-js-all"};/**
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
 */const Cc=new Map,tI=new Map,pf=new Map;function gy(r,e){try{r.container.addComponent(e)}catch(t){Br.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Uo(r){const e=r.name;if(pf.has(e))return Br.debug(`There were multiple attempts to register component ${e}.`),!1;pf.set(e,r);for(const t of Cc.values())gy(t,r);for(const t of tI.values())gy(t,r);return!0}function Jf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Tn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const nI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ps=new jl("app","Firebase",nI);/**
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
 */class rI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ps.create("app-deleted",{appName:this._name})}}/**
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
 */const Xo=Z2;function vv(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:ff,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Ps.create("bad-app-name",{appName:String(o)});if(t||(t=hv()),!t)throw Ps.create("no-options");const l=Cc.get(o);if(l){if(Si(t,l.options)&&Si(s,l.config))return l;throw Ps.create("duplicate-app",{appName:o})}const h=new u2(o);for(const y of pf.values())h.addComponent(y);const p=new rI(t,s,h);return Cc.set(o,p),p}function _v(r=ff){const e=Cc.get(r);if(!e&&r===ff&&hv())return vv();if(!e)throw Ps.create("no-app",{appName:r});return e}function As(r,e,t){let s=eI[r]??r;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const h=[`Unable to register library "${s}" with version "${e}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&h.push("and"),l&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Br.warn(h.join(" "));return}Uo(new bi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sI="firebase-heartbeat-database",iI=1,yl="firebase-heartbeat-store";let Xh=null;function xv(){return Xh||(Xh=E2(sI,iI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(yl)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ps.create("idb-open",{originalErrorMessage:r.message})})),Xh}async function oI(r){try{const t=(await xv()).transaction(yl),s=await t.objectStore(yl).get(wv(r));return await t.done,s}catch(e){if(e instanceof Gr)Br.warn(e.message);else{const t=Ps.create("idb-get",{originalErrorMessage:e?.message});Br.warn(t.message)}}}async function yy(r,e){try{const s=(await xv()).transaction(yl,"readwrite");await s.objectStore(yl).put(e,wv(r)),await s.done}catch(t){if(t instanceof Gr)Br.warn(t.message);else{const s=Ps.create("idb-set",{originalErrorMessage:t?.message});Br.warn(s.message)}}}function wv(r){return`${r.name}!${r.options.appId}`}/**
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
 */const aI=1024,lI=30;class uI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vy();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>lI){const o=hI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Br.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vy(),{heartbeatsToSend:t,unsentEntries:s}=cI(this._heartbeatsCache.heartbeats),o=kc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Br.warn(e),""}}}function vy(){return new Date().toISOString().substring(0,10)}function cI(r,e=aI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),_y(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),_y(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class dI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JT()?XT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return yy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return yy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _y(r){return kc(JSON.stringify({version:2,heartbeats:r})).length}function hI(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function fI(r){Uo(new bi("platform-logger",e=>new S2(e),"PRIVATE")),Uo(new bi("heartbeat",e=>new uI(e),"PRIVATE")),As(hf,my,r),As(hf,my,"esm2020"),As("fire-js","")}fI("");function Ev(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pI=Ev,Tv=new jl("auth","Firebase",Ev());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Qf("@firebase/auth");function mI(r,...e){Rc.logLevel<=Pe.WARN&&Rc.warn(`Auth (${Xo}): ${r}`,...e)}function gc(r,...e){Rc.logLevel<=Pe.ERROR&&Rc.error(`Auth (${Xo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(r,...e){throw Xf(r,...e)}function cr(r,...e){return Xf(r,...e)}function Iv(r,e,t){const s={...pI(),[e]:t};return new jl("auth","Firebase",s).create(e,{appName:r.name})}function Mr(r){return Iv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Tv.create(r,...e)}function ye(r,e,...t){if(!r)throw Xf(e,...t)}function Lr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw gc(e),new Error(e)}function zr(r,e){r||Lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(){return typeof self<"u"&&self.location?.href||""}function gI(){return xy()==="http:"||xy()==="https:"}function xy(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gI()||GT()||"connection"in navigator)?navigator.onLine:!0}function vI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=qT()||KT()}get(){return yI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(r,e){zr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wI=new Ll(3e4,6e4);function Hs(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Gs(r,e,t,s,o={}){return bv(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const p=Dl({key:r.config.apiKey,...h}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const v={method:e,headers:y,...l};return HT()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&Jo(r.emulatorConfig.host)&&(v.credentials="include"),Sv.fetch()(await Nv(r,r.config.apiHost,t,p),v)})}async function bv(r,e,t){r._canInitEmulator=!1;const s={..._I,...e};try{const o=new TI(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw ac(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const p=l.ok?h.errorMessage:h.error.message,[y,v]=p.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw ac(r,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw ac(r,"email-already-in-use",h);if(y==="USER_DISABLED")throw ac(r,"user-disabled",h);const w=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Iv(r,w,v);Un(r,w)}}catch(o){if(o instanceof Gr)throw o;Un(r,"network-request-failed",{message:String(o)})}}async function Vl(r,e,t,s,o={}){const l=await Gs(r,e,t,s,o);return"mfaPendingCredential"in l&&Un(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function Nv(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?Zf(r.config,o):`${r.config.apiScheme}://${o}`;return xI.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function EI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(cr(this.auth,"network-request-failed")),wI.get())})}}function ac(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=cr(r,e,s);return o.customData._tokenResponse=t,o}function wy(r){return r!==void 0&&r.enterprise!==void 0}class II{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return EI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function SI(r,e){return Gs(r,"GET","/v2/recaptchaConfig",Hs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(r,e){return Gs(r,"POST","/v1/accounts:delete",e)}async function Pc(r,e){return Gs(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NI(r,e=!1){const t=Gt(r),s=await t.getIdToken(e),o=ep(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:s,authTime:cl(Zh(o.auth_time)),issuedAtTime:cl(Zh(o.iat)),expirationTime:cl(Zh(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Zh(r){return Number(r)*1e3}function ep(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return gc("JWT malformed, contained fewer than 3 sections"),null;try{const o=cv(t);return o?JSON.parse(o):(gc("Failed to decode base64 JWT payload"),null)}catch(o){return gc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Ey(r){const e=ep(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Gr&&kI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function kI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cl(this.lastLoginAt),this.creationTime=cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ac(r){const e=r.auth,t=await r.getIdToken(),s=await vl(r,Pc(e,{idToken:t}));ye(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const l=o.providerUserInfo?.length?kv(o.providerUserInfo):[],h=PI(r.providerData,l),p=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!h?.length,v=p?y:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new gf(o.createdAt,o.lastLoginAt),isAnonymous:v};Object.assign(r,w)}async function RI(r){const e=Gt(r);await Ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PI(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function kv(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(r,e){const t=await bv(r,{},async()=>{const s=Dl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await Nv(r,o,"/v1/token",`key=${l}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:p,body:s};return r.emulatorConfig&&Jo(r.emulatorConfig.host)&&(y.credentials="include"),Sv.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jI(r,e){return Gs(r,"POST","/v2/accounts:revokeToken",Hs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ey(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Ey(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await AI(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Do;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Do,this.toJSON())}_performRefresh(){return Lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class On{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new CI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new gf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await vl(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return NI(this,e)}reload(){return RI(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new On({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ac(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await vl(this,bI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,h=t.photoURL??void 0,p=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:E,emailVerified:I,isAnonymous:D,providerData:W,stsTokenManager:q}=t;ye(E&&q,e,"internal-error");const z=Do.fromJSON(this.name,q);ye(typeof E=="string",e,"internal-error"),Is(s,e.name),Is(o,e.name),ye(typeof I=="boolean",e,"internal-error"),ye(typeof D=="boolean",e,"internal-error"),Is(l,e.name),Is(h,e.name),Is(p,e.name),Is(y,e.name),Is(v,e.name),Is(w,e.name);const K=new On({uid:E,auth:e,email:o,emailVerified:I,displayName:s,isAnonymous:D,photoURL:h,phoneNumber:l,tenantId:p,stsTokenManager:z,createdAt:v,lastLoginAt:w});return W&&Array.isArray(W)&&(K.providerData=W.map(J=>({...J}))),y&&(K._redirectEventId=y),K}static async _fromIdTokenResponse(e,t,s=!1){const o=new Do;o.updateFromServerResponse(t);const l=new On({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ac(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?kv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,p=new Do;p.updateFromIdToken(s);const y=new On({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new gf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(y,v),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new Map;function Vr(r){zr(r instanceof Function,"Expected a class definition");let e=Ty.get(r);return e?(zr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Ty.set(r,e),e)}/**
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
 */class Cv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cv.type="NONE";const Iy=Cv;/**
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
 */function yc(r,e,t){return`firebase:${r}:${e}:${t}`}class Lo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=yc(this.userKey,o.apiKey,l),this.fullPersistenceKey=yc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Pc(this.auth,{idToken:e}).catch(()=>{});return t?On._fromGetAccountInfoResponse(this.auth,t,e):null}return On._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Lo(Vr(Iy),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Vr(Iy);const h=yc(s,e.config.apiKey,e.name);let p=null;for(const v of t)try{const w=await v._get(h);if(w){let E;if(typeof w=="string"){const I=await Pc(e,{idToken:w}).catch(()=>{});if(!I)break;E=await On._fromGetAccountInfoResponse(e,I,w)}else E=On._fromJSON(e,w);v!==l&&(p=E),l=v;break}}catch{}const y=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!y.length?new Lo(l,e,s):(l=y[0],p&&await l._set(h,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new Lo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lv(e))return"Blackberry";if(Vv(e))return"Webos";if(Pv(e))return"Safari";if((e.includes("chrome/")||Av(e))&&!e.includes("edge/"))return"Chrome";if(Dv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if(s?.length===2)return s[1]}return"Other"}function Rv(r=Ht()){return/firefox\//i.test(r)}function Pv(r=Ht()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Av(r=Ht()){return/crios\//i.test(r)}function jv(r=Ht()){return/iemobile/i.test(r)}function Dv(r=Ht()){return/android/i.test(r)}function Lv(r=Ht()){return/blackberry/i.test(r)}function Vv(r=Ht()){return/webos/i.test(r)}function tp(r=Ht()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function DI(r=Ht()){return tp(r)&&!!window.navigator?.standalone}function LI(){return QT()&&document.documentMode===10}function Ov(r=Ht()){return tp(r)||Dv(r)||Vv(r)||Lv(r)||/windows phone/i.test(r)||jv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(r,e=[]){let t;switch(r){case"Browser":t=Sy(Ht());break;case"Worker":t=`${Sy(Ht())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xo}/${s}`}/**
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
 */class VI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,p)=>{try{const y=e(l);h(y)}catch(y){p(y)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function OI(r,e={}){return Gs(r,"GET","/v2/passwordPolicy",Hs(r,e))}/**
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
 */const MI=6;class FI{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??MI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new by(this),this.idTokenSubscription=new by(this),this.beforeStateQueue=new VI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Lo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Pc(this,{idToken:e}),s=await On._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Tn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,h=s?._redirectEventId,p=await this.tryRedirectSignIn(e);(!l||l===h)&&p?.user&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ac(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Mr(this));const t=e?Gt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OI(this),t=new FI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await jI(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await Lo.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(p,this,"internal-error"),p.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,o);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&mI(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ai(r){return Gt(r)}class by{constructor(e){this.auth=e,this.observer=null,this.addObserver=r2(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BI(r){Xc=r}function Fv(r){return Xc.loadJS(r)}function zI(){return Xc.recaptchaEnterpriseScript}function $I(){return Xc.gapiScript}function qI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class WI{constructor(){this.enterprise=new HI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class HI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const GI="recaptcha-enterprise",Uv="NO_RECAPTCHA";class KI{constructor(e){this.type=GI,this.auth=Ai(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,p)=>{SI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new II(y);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,h(v.siteKey)}}).catch(y=>{p(y)})})}function o(l,h,p){const y=window.grecaptcha;wy(y)?y.enterprise.ready(()=>{y.enterprise.execute(l,{action:e}).then(v=>{h(v)}).catch(()=>{h(Uv)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new WI().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(p=>{if(!t&&wy(window.grecaptcha))o(p,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let y=zI();y.length!==0&&(y+=p),Fv(y).then(()=>{o(p,l,h)}).catch(v=>{h(v)})}}).catch(p=>{h(p)})})}}async function Ny(r,e,t,s=!1,o=!1){const l=new KI(r);let h;if(o)h=Uv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const y=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const y=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function yf(r,e,t,s,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Ny(r,e,t,t==="getOobCode");return s(r,l)}else return s(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Ny(r,e,t,t==="getOobCode");return s(r,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(r,e){const t=Jf(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Si(l,e??{}))return o;Un(o,"already-initialized")}return t.initialize({options:e})}function YI(r,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Vr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function JI(r,e,t){const s=Ai(r);ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Bv(e),{host:h,port:p}=XI(e),y=p===null?"":`:${p}`,v={url:`${l}//${h}${y}/`},w=Object.freeze({host:h,port:p,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ye(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ye(Si(v,s.config.emulator)&&Si(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Jo(h)?(pv(`${l}//${h}${y}`),mv("Auth",!0)):ZI()}function Bv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function XI(r){const e=Bv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:ky(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:ky(h)}}}function ky(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ZI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,t){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}async function eS(r,e){return Gs(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(r,e){return Vl(r,"POST","/v1/accounts:signInWithPassword",Hs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nS(r,e){return Vl(r,"POST","/v1/accounts:signInWithEmailLink",Hs(r,e))}async function rS(r,e){return Vl(r,"POST","/v1/accounts:signInWithEmailLink",Hs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends np{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new _l(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new _l(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yf(e,t,"signInWithPassword",tS);case"emailLink":return nS(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yf(e,s,"signUpPassword",eS);case"emailLink":return rS(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(r,e){return Vl(r,"POST","/v1/accounts:signInWithIdp",Hs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="http://localhost";class Ni extends np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const h=new Ni(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Vo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Vo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vo(e,t)}buildRequest(){const e={requestUri:sS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Dl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oS(r){const e=rl(sl(r)).link,t=e?rl(sl(e)).deep_link_id:null,s=rl(sl(r)).deep_link_id;return(s?rl(sl(s)).link:null)||s||t||e||r}class rp{constructor(e){const t=rl(sl(e)),s=t.apiKey??null,o=t.oobCode??null,l=iS(t.mode??null);ye(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=oS(e);try{return new rp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.providerId=Zo.PROVIDER_ID}static credential(e,t){return _l._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=rp.parseLink(t);return ye(s,"argument-error"),_l._fromEmailAndCode(e,s.code,s.tenantId)}}Zo.PROVIDER_ID="password";Zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ol extends zv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Ol{constructor(){super("facebook.com")}static credential(e){return Ni._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ss.credential(e.oauthAccessToken)}catch{return null}}}Ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ss.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ni._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return bs.credential(t,s)}catch{return null}}}bs.GOOGLE_SIGN_IN_METHOD="google.com";bs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends Ol{constructor(){super("github.com")}static credential(e){return Ni._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ns.credentialFromTaggedObject(e)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ns.credential(e.oauthAccessToken)}catch{return null}}}Ns.GITHUB_SIGN_IN_METHOD="github.com";Ns.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Ol{constructor(){super("twitter.com")}static credential(e,t){return Ni._fromParams({providerId:ks.PROVIDER_ID,signInMethod:ks.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ks.credentialFromTaggedObject(e)}static credentialFromError(e){return ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ks.credential(t,s)}catch{return null}}}ks.TWITTER_SIGN_IN_METHOD="twitter.com";ks.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(r,e){return Vl(r,"POST","/v1/accounts:signUp",Hs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await On._fromIdTokenResponse(e,s,o),h=Cy(s);return new ki({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Cy(s);return new ki({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Cy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Gr{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,jc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new jc(e,t,s,o)}}function $v(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?jc._fromErrorAndOperation(r,l,e,s):l})}async function lS(r,e,t=!1){const s=await vl(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ki._forOperation(r,"link",s)}/**
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
 */async function uS(r,e,t=!1){const{auth:s}=r;if(Tn(s.app))return Promise.reject(Mr(s));const o="reauthenticate";try{const l=await vl(r,$v(s,o,e,r),t);ye(l.idToken,s,"internal-error");const h=ep(l.idToken);ye(h,s,"internal-error");const{sub:p}=h;return ye(r.uid===p,s,"user-mismatch"),ki._forOperation(r,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Un(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(r,e,t=!1){if(Tn(r.app))return Promise.reject(Mr(r));const s="signIn",o=await $v(r,s,e),l=await ki._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function cS(r,e){return qv(Ai(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(r){const e=Ai(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dS(r,e,t){if(Tn(r.app))return Promise.reject(Mr(r));const s=Ai(r),h=await yf(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",aS).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&Wv(r),y}),p=await ki._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function hS(r,e,t){return Tn(r.app)?Promise.reject(Mr(r)):cS(Gt(r),Zo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Wv(r),s})}function fS(r,e,t,s){return Gt(r).onIdTokenChanged(e,t,s)}function pS(r,e,t){return Gt(r).beforeAuthStateChanged(e,t)}function Zc(r,e,t,s){return Gt(r).onAuthStateChanged(e,t,s)}function Hv(r){return Gt(r).signOut()}const Dc="__sak";/**
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
 */class Gv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Dc,"1"),this.storage.removeItem(Dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=1e3,gS=10;class Kv extends Gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);LI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,gS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},mS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kv.type="LOCAL";const yS=Kv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv extends Gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qv.type="SESSION";const Yv=Qv;/**
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
 */function vS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ed(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async v=>v(t.origin,l)),y=await vS(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ed.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class _S{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((p,y)=>{const v=sp("",20);o.port1.start();const w=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(E){const I=E;if(I.data.eventId===v)switch(I.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),p(I.data.response);break;default:clearTimeout(w),clearTimeout(l),y(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){return window}function xS(r){dr().location.href=r}/**
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
 */function Jv(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function wS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ES(){return navigator?.serviceWorker?.controller||null}function TS(){return Jv()?self:null}/**
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
 */const Xv="firebaseLocalStorageDb",IS=1,Lc="firebaseLocalStorage",Zv="fbase_key";class Ml{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function td(r,e){return r.transaction([Lc],e?"readwrite":"readonly").objectStore(Lc)}function SS(){const r=indexedDB.deleteDatabase(Xv);return new Ml(r).toPromise()}function vf(){const r=indexedDB.open(Xv,IS);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Lc,{keyPath:Zv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Lc)?e(s):(s.close(),await SS(),e(await vf()))})})}async function Ry(r,e,t){const s=td(r,!0).put({[Zv]:e,value:t});return new Ml(s).toPromise()}async function bS(r,e){const t=td(r,!1).get(e),s=await new Ml(t).toPromise();return s===void 0?null:s.value}function Py(r,e){const t=td(r,!0).delete(e);return new Ml(t).toPromise()}const NS=800,kS=3;class e_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>kS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ed._getInstance(TS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await wS(),!this.activeServiceWorker)return;this.sender=new _S(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ES()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vf();return await Ry(e,Dc,"1"),await Py(e,Dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ry(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>bS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Py(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=td(o,!1).getAll();return new Ml(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}e_.type="LOCAL";const CS=e_;new Ll(3e4,6e4);/**
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
 */function RS(r,e){return e?Vr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class ip extends np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PS(r){return qv(r.auth,new ip(r),r.bypassAuthState)}function AS(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),uS(t,new ip(r),r.bypassAuthState)}async function jS(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),lS(t,new ip(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:p}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PS;case"linkViaPopup":case"linkViaRedirect":return jS;case"reauthViaPopup":case"reauthViaRedirect":return AS;default:Un(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=new Ll(2e3,1e4);class jo extends t_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,jo.currentPopupAction&&jo.currentPopupAction.cancel(),jo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=sp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DS.get())};e()}}jo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS="pendingRedirect",vc=new Map;class VS extends t_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=vc.get(this.auth._key());if(!e){try{const s=await OS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}vc.set(this.auth._key(),e)}return this.bypassAuthState||vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OS(r,e){const t=US(e),s=FS(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function MS(r,e){vc.set(r._key(),e)}function FS(r){return Vr(r._redirectPersistence)}function US(r){return yc(LS,r.config.apiKey,r.name)}async function BS(r,e,t=!1){if(Tn(r.app))return Promise.reject(Mr(r));const s=Ai(r),o=RS(s,e),h=await new VS(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=600*1e3;class $S{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!n_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(cr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ay(e))}saveEventToCache(e){this.cachedEventUids.add(Ay(e)),this.lastProcessedEventTime=Date.now()}}function Ay(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function n_({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function qS(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return n_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(r,e={}){return Gs(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GS=/^https?/;async function KS(r){if(r.config.emulator)return;const{authorizedDomains:e}=await WS(r);for(const t of e)try{if(QS(t))return}catch{}Un(r,"unauthorized-domain")}function QS(r){const e=mf(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!GS.test(t))return!1;if(HS.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const YS=new Ll(3e4,6e4);function jy(){const r=dr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function JS(r){return new Promise((e,t)=>{function s(){jy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jy(),t(cr(r,"network-request-failed"))},timeout:YS.get()})}if(dr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(dr().gapi?.load)s();else{const o=qI("iframefcb");return dr()[o]=()=>{gapi.load?s():t(cr(r,"network-request-failed"))},Fv(`${$I()}?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw _c=null,e})}let _c=null;function XS(r){return _c=_c||JS(r),_c}/**
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
 */const ZS=new Ll(5e3,15e3),eb="__/auth/iframe",tb="emulator/auth/iframe",nb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sb(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Zf(e,tb):`https://${r.config.authDomain}/${eb}`,s={apiKey:e.apiKey,appName:r.name,v:Xo},o=rb.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Dl(s).slice(1)}`}async function ib(r){const e=await XS(r),t=dr().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:sb(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nb,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=cr(r,"network-request-failed"),p=dr().setTimeout(()=>{l(h)},ZS.get());function y(){dr().clearTimeout(p),o(s)}s.ping(y).then(y,()=>{l(h)})}))}/**
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
 */const ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ab=500,lb=600,ub="_blank",cb="http://localhost";class Dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function db(r,e,t,s=ab,o=lb){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const y={...ob,width:s.toString(),height:o.toString(),top:l,left:h},v=Ht().toLowerCase();t&&(p=Av(v)?ub:t),Rv(v)&&(e=e||cb,y.scrollbars="yes");const w=Object.entries(y).reduce((I,[D,W])=>`${I}${D}=${W},`,"");if(DI(v)&&p!=="_self")return hb(e||"",p),new Dy(null);const E=window.open(e||"",p,w);ye(E,r,"popup-blocked");try{E.focus()}catch{}return new Dy(E)}function hb(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const fb="__/auth/handler",pb="emulator/auth/handler",mb=encodeURIComponent("fac");async function Ly(r,e,t,s,o,l){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Xo,eventId:o};if(e instanceof zv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",n2(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,E]of Object.entries({}))h[w]=E}if(e instanceof Ol){const w=e.getScopes().filter(E=>E!=="");w.length>0&&(h.scopes=w.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const w of Object.keys(p))p[w]===void 0&&delete p[w];const y=await r._getAppCheckToken(),v=y?`#${mb}=${encodeURIComponent(y)}`:"";return`${gb(r)}?${Dl(p).slice(1)}${v}`}function gb({config:r}){return r.emulator?Zf(r,pb):`https://${r.authDomain}/${fb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="webStorageSupport";class yb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yv,this._completeRedirectFn=BS,this._overrideRedirectResult=MS}async _openPopup(e,t,s,o){zr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const l=await Ly(e,t,s,mf(),o);return db(e,l,sp())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Ly(e,t,s,mf(),o);return xS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ib(e),s=new $S(e);return t.register("authEvent",o=>(ye(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ef,{type:ef},o=>{const l=o?.[0]?.[ef];l!==void 0&&t(!!l),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ov()||Pv()||tp()}}const vb=yb;var Vy="@firebase/auth",Oy="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wb(r){Uo(new bi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mv(r)},v=new UI(s,o,l,y);return YI(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Uo(new bi("auth-internal",e=>{const t=Ai(e.getProvider("auth").getImmediate());return(s=>new _b(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),As(Vy,Oy,xb(r)),As(Vy,Oy,"esm2020")}/**
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
 */const Eb=300,Tb=fv("authIdTokenMaxAge")||Eb;let My=null;const Ib=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Tb)return;const o=t?.token;My!==o&&(My=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Sb(r=_v()){const e=Jf(r,"auth");if(e.isInitialized())return e.getImmediate();const t=QI(r,{popupRedirectResolver:vb,persistence:[CS,yS,Yv]}),s=fv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=Ib(l.toString());pS(t,h,()=>h(t.currentUser)),fS(t,p=>h(p))}}const o=dv("auth");return o&&JI(t,`http://${o}`),t}function bb(){return document.getElementsByTagName("head")?.[0]??document}BI({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=cr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",bb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wb("Browser");var Nb="firebase",kb="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */As(Nb,kb,"app");var Fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var js,r_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,S){function k(){}k.prototype=S.prototype,R.F=S.prototype,R.prototype=new k,R.prototype.constructor=R,R.D=function(j,P,V){for(var N=Array(arguments.length-2),He=2;He<arguments.length;He++)N[He-2]=arguments[He];return S.prototype[P].apply(j,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,S,k){k||(k=0);const j=Array(16);if(typeof S=="string")for(var P=0;P<16;++P)j[P]=S.charCodeAt(k++)|S.charCodeAt(k++)<<8|S.charCodeAt(k++)<<16|S.charCodeAt(k++)<<24;else for(P=0;P<16;++P)j[P]=S[k++]|S[k++]<<8|S[k++]<<16|S[k++]<<24;S=R.g[0],k=R.g[1],P=R.g[2];let V=R.g[3],N;N=S+(V^k&(P^V))+j[0]+3614090360&4294967295,S=k+(N<<7&4294967295|N>>>25),N=V+(P^S&(k^P))+j[1]+3905402710&4294967295,V=S+(N<<12&4294967295|N>>>20),N=P+(k^V&(S^k))+j[2]+606105819&4294967295,P=V+(N<<17&4294967295|N>>>15),N=k+(S^P&(V^S))+j[3]+3250441966&4294967295,k=P+(N<<22&4294967295|N>>>10),N=S+(V^k&(P^V))+j[4]+4118548399&4294967295,S=k+(N<<7&4294967295|N>>>25),N=V+(P^S&(k^P))+j[5]+1200080426&4294967295,V=S+(N<<12&4294967295|N>>>20),N=P+(k^V&(S^k))+j[6]+2821735955&4294967295,P=V+(N<<17&4294967295|N>>>15),N=k+(S^P&(V^S))+j[7]+4249261313&4294967295,k=P+(N<<22&4294967295|N>>>10),N=S+(V^k&(P^V))+j[8]+1770035416&4294967295,S=k+(N<<7&4294967295|N>>>25),N=V+(P^S&(k^P))+j[9]+2336552879&4294967295,V=S+(N<<12&4294967295|N>>>20),N=P+(k^V&(S^k))+j[10]+4294925233&4294967295,P=V+(N<<17&4294967295|N>>>15),N=k+(S^P&(V^S))+j[11]+2304563134&4294967295,k=P+(N<<22&4294967295|N>>>10),N=S+(V^k&(P^V))+j[12]+1804603682&4294967295,S=k+(N<<7&4294967295|N>>>25),N=V+(P^S&(k^P))+j[13]+4254626195&4294967295,V=S+(N<<12&4294967295|N>>>20),N=P+(k^V&(S^k))+j[14]+2792965006&4294967295,P=V+(N<<17&4294967295|N>>>15),N=k+(S^P&(V^S))+j[15]+1236535329&4294967295,k=P+(N<<22&4294967295|N>>>10),N=S+(P^V&(k^P))+j[1]+4129170786&4294967295,S=k+(N<<5&4294967295|N>>>27),N=V+(k^P&(S^k))+j[6]+3225465664&4294967295,V=S+(N<<9&4294967295|N>>>23),N=P+(S^k&(V^S))+j[11]+643717713&4294967295,P=V+(N<<14&4294967295|N>>>18),N=k+(V^S&(P^V))+j[0]+3921069994&4294967295,k=P+(N<<20&4294967295|N>>>12),N=S+(P^V&(k^P))+j[5]+3593408605&4294967295,S=k+(N<<5&4294967295|N>>>27),N=V+(k^P&(S^k))+j[10]+38016083&4294967295,V=S+(N<<9&4294967295|N>>>23),N=P+(S^k&(V^S))+j[15]+3634488961&4294967295,P=V+(N<<14&4294967295|N>>>18),N=k+(V^S&(P^V))+j[4]+3889429448&4294967295,k=P+(N<<20&4294967295|N>>>12),N=S+(P^V&(k^P))+j[9]+568446438&4294967295,S=k+(N<<5&4294967295|N>>>27),N=V+(k^P&(S^k))+j[14]+3275163606&4294967295,V=S+(N<<9&4294967295|N>>>23),N=P+(S^k&(V^S))+j[3]+4107603335&4294967295,P=V+(N<<14&4294967295|N>>>18),N=k+(V^S&(P^V))+j[8]+1163531501&4294967295,k=P+(N<<20&4294967295|N>>>12),N=S+(P^V&(k^P))+j[13]+2850285829&4294967295,S=k+(N<<5&4294967295|N>>>27),N=V+(k^P&(S^k))+j[2]+4243563512&4294967295,V=S+(N<<9&4294967295|N>>>23),N=P+(S^k&(V^S))+j[7]+1735328473&4294967295,P=V+(N<<14&4294967295|N>>>18),N=k+(V^S&(P^V))+j[12]+2368359562&4294967295,k=P+(N<<20&4294967295|N>>>12),N=S+(k^P^V)+j[5]+4294588738&4294967295,S=k+(N<<4&4294967295|N>>>28),N=V+(S^k^P)+j[8]+2272392833&4294967295,V=S+(N<<11&4294967295|N>>>21),N=P+(V^S^k)+j[11]+1839030562&4294967295,P=V+(N<<16&4294967295|N>>>16),N=k+(P^V^S)+j[14]+4259657740&4294967295,k=P+(N<<23&4294967295|N>>>9),N=S+(k^P^V)+j[1]+2763975236&4294967295,S=k+(N<<4&4294967295|N>>>28),N=V+(S^k^P)+j[4]+1272893353&4294967295,V=S+(N<<11&4294967295|N>>>21),N=P+(V^S^k)+j[7]+4139469664&4294967295,P=V+(N<<16&4294967295|N>>>16),N=k+(P^V^S)+j[10]+3200236656&4294967295,k=P+(N<<23&4294967295|N>>>9),N=S+(k^P^V)+j[13]+681279174&4294967295,S=k+(N<<4&4294967295|N>>>28),N=V+(S^k^P)+j[0]+3936430074&4294967295,V=S+(N<<11&4294967295|N>>>21),N=P+(V^S^k)+j[3]+3572445317&4294967295,P=V+(N<<16&4294967295|N>>>16),N=k+(P^V^S)+j[6]+76029189&4294967295,k=P+(N<<23&4294967295|N>>>9),N=S+(k^P^V)+j[9]+3654602809&4294967295,S=k+(N<<4&4294967295|N>>>28),N=V+(S^k^P)+j[12]+3873151461&4294967295,V=S+(N<<11&4294967295|N>>>21),N=P+(V^S^k)+j[15]+530742520&4294967295,P=V+(N<<16&4294967295|N>>>16),N=k+(P^V^S)+j[2]+3299628645&4294967295,k=P+(N<<23&4294967295|N>>>9),N=S+(P^(k|~V))+j[0]+4096336452&4294967295,S=k+(N<<6&4294967295|N>>>26),N=V+(k^(S|~P))+j[7]+1126891415&4294967295,V=S+(N<<10&4294967295|N>>>22),N=P+(S^(V|~k))+j[14]+2878612391&4294967295,P=V+(N<<15&4294967295|N>>>17),N=k+(V^(P|~S))+j[5]+4237533241&4294967295,k=P+(N<<21&4294967295|N>>>11),N=S+(P^(k|~V))+j[12]+1700485571&4294967295,S=k+(N<<6&4294967295|N>>>26),N=V+(k^(S|~P))+j[3]+2399980690&4294967295,V=S+(N<<10&4294967295|N>>>22),N=P+(S^(V|~k))+j[10]+4293915773&4294967295,P=V+(N<<15&4294967295|N>>>17),N=k+(V^(P|~S))+j[1]+2240044497&4294967295,k=P+(N<<21&4294967295|N>>>11),N=S+(P^(k|~V))+j[8]+1873313359&4294967295,S=k+(N<<6&4294967295|N>>>26),N=V+(k^(S|~P))+j[15]+4264355552&4294967295,V=S+(N<<10&4294967295|N>>>22),N=P+(S^(V|~k))+j[6]+2734768916&4294967295,P=V+(N<<15&4294967295|N>>>17),N=k+(V^(P|~S))+j[13]+1309151649&4294967295,k=P+(N<<21&4294967295|N>>>11),N=S+(P^(k|~V))+j[4]+4149444226&4294967295,S=k+(N<<6&4294967295|N>>>26),N=V+(k^(S|~P))+j[11]+3174756917&4294967295,V=S+(N<<10&4294967295|N>>>22),N=P+(S^(V|~k))+j[2]+718787259&4294967295,P=V+(N<<15&4294967295|N>>>17),N=k+(V^(P|~S))+j[9]+3951481745&4294967295,R.g[0]=R.g[0]+S&4294967295,R.g[1]=R.g[1]+(P+(N<<21&4294967295|N>>>11))&4294967295,R.g[2]=R.g[2]+P&4294967295,R.g[3]=R.g[3]+V&4294967295}s.prototype.v=function(R,S){S===void 0&&(S=R.length);const k=S-this.blockSize,j=this.C;let P=this.h,V=0;for(;V<S;){if(P==0)for(;V<=k;)o(this,R,V),V+=this.blockSize;if(typeof R=="string"){for(;V<S;)if(j[P++]=R.charCodeAt(V++),P==this.blockSize){o(this,j),P=0;break}}else for(;V<S;)if(j[P++]=R[V++],P==this.blockSize){o(this,j),P=0;break}}this.h=P,this.o+=S},s.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var S=1;S<R.length-8;++S)R[S]=0;S=this.o*8;for(var k=R.length-8;k<R.length;++k)R[k]=S&255,S/=256;for(this.v(R),R=Array(16),S=0,k=0;k<4;++k)for(let j=0;j<32;j+=8)R[S++]=this.g[k]>>>j&255;return R};function l(R,S){var k=p;return Object.prototype.hasOwnProperty.call(k,R)?k[R]:k[R]=S(R)}function h(R,S){this.h=S;const k=[];let j=!0;for(let P=R.length-1;P>=0;P--){const V=R[P]|0;j&&V==S||(k[P]=V,j=!1)}this.g=k}var p={};function y(R){return-128<=R&&R<128?l(R,function(S){return new h([S|0],S<0?-1:0)}):new h([R|0],R<0?-1:0)}function v(R){if(isNaN(R)||!isFinite(R))return E;if(R<0)return z(v(-R));const S=[];let k=1;for(let j=0;R>=k;j++)S[j]=R/k|0,k*=4294967296;return new h(S,0)}function w(R,S){if(R.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(R.charAt(0)=="-")return z(w(R.substring(1),S));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const k=v(Math.pow(S,8));let j=E;for(let V=0;V<R.length;V+=8){var P=Math.min(8,R.length-V);const N=parseInt(R.substring(V,V+P),S);P<8?(P=v(Math.pow(S,P)),j=j.j(P).add(v(N))):(j=j.j(k),j=j.add(v(N)))}return j}var E=y(0),I=y(1),D=y(16777216);r=h.prototype,r.m=function(){if(q(this))return-z(this).m();let R=0,S=1;for(let k=0;k<this.g.length;k++){const j=this.i(k);R+=(j>=0?j:4294967296+j)*S,S*=4294967296}return R},r.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(W(this))return"0";if(q(this))return"-"+z(this).toString(R);const S=v(Math.pow(R,6));var k=this;let j="";for(;;){const P=ge(k,S).g;k=K(k,P.j(S));let V=((k.g.length>0?k.g[0]:k.h)>>>0).toString(R);if(k=P,W(k))return V+j;for(;V.length<6;)V="0"+V;j=V+j}},r.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function W(R){if(R.h!=0)return!1;for(let S=0;S<R.g.length;S++)if(R.g[S]!=0)return!1;return!0}function q(R){return R.h==-1}r.l=function(R){return R=K(this,R),q(R)?-1:W(R)?0:1};function z(R){const S=R.g.length,k=[];for(let j=0;j<S;j++)k[j]=~R.g[j];return new h(k,~R.h).add(I)}r.abs=function(){return q(this)?z(this):this},r.add=function(R){const S=Math.max(this.g.length,R.g.length),k=[];let j=0;for(let P=0;P<=S;P++){let V=j+(this.i(P)&65535)+(R.i(P)&65535),N=(V>>>16)+(this.i(P)>>>16)+(R.i(P)>>>16);j=N>>>16,V&=65535,N&=65535,k[P]=N<<16|V}return new h(k,k[k.length-1]&-2147483648?-1:0)};function K(R,S){return R.add(z(S))}r.j=function(R){if(W(this)||W(R))return E;if(q(this))return q(R)?z(this).j(z(R)):z(z(this).j(R));if(q(R))return z(this.j(z(R)));if(this.l(D)<0&&R.l(D)<0)return v(this.m()*R.m());const S=this.g.length+R.g.length,k=[];for(var j=0;j<2*S;j++)k[j]=0;for(j=0;j<this.g.length;j++)for(let P=0;P<R.g.length;P++){const V=this.i(j)>>>16,N=this.i(j)&65535,He=R.i(P)>>>16,It=R.i(P)&65535;k[2*j+2*P]+=N*It,J(k,2*j+2*P),k[2*j+2*P+1]+=V*It,J(k,2*j+2*P+1),k[2*j+2*P+1]+=N*He,J(k,2*j+2*P+1),k[2*j+2*P+2]+=V*He,J(k,2*j+2*P+2)}for(R=0;R<S;R++)k[R]=k[2*R+1]<<16|k[2*R];for(R=S;R<2*S;R++)k[R]=0;return new h(k,0)};function J(R,S){for(;(R[S]&65535)!=R[S];)R[S+1]+=R[S]>>>16,R[S]&=65535,S++}function te(R,S){this.g=R,this.h=S}function ge(R,S){if(W(S))throw Error("division by zero");if(W(R))return new te(E,E);if(q(R))return S=ge(z(R),S),new te(z(S.g),z(S.h));if(q(S))return S=ge(R,z(S)),new te(z(S.g),S.h);if(R.g.length>30){if(q(R)||q(S))throw Error("slowDivide_ only works with positive integers.");for(var k=I,j=S;j.l(R)<=0;)k=Te(k),j=Te(j);var P=Ie(k,1),V=Ie(j,1);for(j=Ie(j,2),k=Ie(k,2);!W(j);){var N=V.add(j);N.l(R)<=0&&(P=P.add(k),V=N),j=Ie(j,1),k=Ie(k,1)}return S=K(R,P.j(S)),new te(P,S)}for(P=E;R.l(S)>=0;){for(k=Math.max(1,Math.floor(R.m()/S.m())),j=Math.ceil(Math.log(k)/Math.LN2),j=j<=48?1:Math.pow(2,j-48),V=v(k),N=V.j(S);q(N)||N.l(R)>0;)k-=j,V=v(k),N=V.j(S);W(V)&&(V=I),P=P.add(V),R=K(R,N)}return new te(P,R)}r.B=function(R){return ge(this,R).h},r.and=function(R){const S=Math.max(this.g.length,R.g.length),k=[];for(let j=0;j<S;j++)k[j]=this.i(j)&R.i(j);return new h(k,this.h&R.h)},r.or=function(R){const S=Math.max(this.g.length,R.g.length),k=[];for(let j=0;j<S;j++)k[j]=this.i(j)|R.i(j);return new h(k,this.h|R.h)},r.xor=function(R){const S=Math.max(this.g.length,R.g.length),k=[];for(let j=0;j<S;j++)k[j]=this.i(j)^R.i(j);return new h(k,this.h^R.h)};function Te(R){const S=R.g.length+1,k=[];for(let j=0;j<S;j++)k[j]=R.i(j)<<1|R.i(j-1)>>>31;return new h(k,R.h)}function Ie(R,S){const k=S>>5;S%=32;const j=R.g.length-k,P=[];for(let V=0;V<j;V++)P[V]=S>0?R.i(V+k)>>>S|R.i(V+k+1)<<32-S:R.i(V+k);return new h(P,R.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,r_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,js=h}).apply(typeof Fy<"u"?Fy:typeof self<"u"?self:typeof window<"u"?window:{});var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var s_,il,i_,xc,_f,o_,a_,l_;(function(){var r,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof lc=="object"&&lc];for(var g=0;g<u.length;++g){var _=u[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(u,g){if(g)e:{var _=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in _))break e;_=_[M]}u=u[u.length-1],T=_[u],g=g(T),g!=T&&g!=null&&e(_,u,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(g){var _=[],T;for(T in g)Object.prototype.hasOwnProperty.call(g,T)&&_.push([T,g[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},h=this||self;function p(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function y(u,g,_){return u.call.apply(u.bind,arguments)}function v(u,g,_){return v=y,v.apply(null,arguments)}function w(u,g){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function E(u,g){function _(){}_.prototype=g.prototype,u.Z=g.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(T,M,$){for(var ne=Array(arguments.length-2),we=2;we<arguments.length;we++)ne[we-2]=arguments[we];return g.prototype[M].apply(T,ne)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function D(u){const g=u.length;if(g>0){const _=Array(g);for(let T=0;T<g;T++)_[T]=u[T];return _}return[]}function W(u,g){for(let T=1;T<arguments.length;T++){const M=arguments[T];var _=typeof M;if(_=_!="object"?_:M?Array.isArray(M)?"array":_:"null",_=="array"||_=="object"&&typeof M.length=="number"){_=u.length||0;const $=M.length||0;u.length=_+$;for(let ne=0;ne<$;ne++)u[_+ne]=M[ne]}else u.push(M)}}class q{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function z(u){h.setTimeout(()=>{throw u},0)}function K(){var u=R;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class J{constructor(){this.h=this.g=null}add(g,_){const T=te.get();T.set(g,_),this.h?this.h.next=T:this.g=T,this.h=T}}var te=new q(()=>new ge,u=>u.reset());class ge{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,Ie=!1,R=new J,S=()=>{const u=Promise.resolve(void 0);Te=()=>{u.then(k)}};function k(){for(var u;u=K();){try{u.h.call(u.g)}catch(_){z(_)}var g=te;g.j(u),g.h<100&&(g.h++,u.next=g.g,g.g=u)}Ie=!1}function j(){this.u=this.u,this.C=this.C}j.prototype.u=!1,j.prototype.dispose=function(){this.u||(this.u=!0,this.N())},j.prototype[Symbol.dispose]=function(){this.dispose()},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};h.addEventListener("test",_,g),h.removeEventListener("test",_,g)}catch{}return u})();function N(u){return/^[\s\xa0]*$/.test(u)}function He(u,g){P.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,g)}E(He,P),He.prototype.init=function(u,g){const _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget,g||(_=="mouseover"?g=u.fromElement:_=="mouseout"&&(g=u.toElement)),this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var It="closure_listenable_"+(Math.random()*1e6|0),Ot=0;function tt(u,g,_,T,M){this.listener=u,this.proxy=null,this.src=g,this.type=_,this.capture=!!T,this.ha=M,this.key=++Ot,this.da=this.fa=!1}function re(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fe(u,g,_){for(const T in u)g.call(_,u[T],T,u)}function ae(u,g){for(const _ in u)g.call(void 0,u[_],_,u)}function L(u){const g={};for(const _ in u)g[_]=u[_];return g}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(u,g){let _,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(_ in T)u[_]=T[_];for(let $=0;$<Q.length;$++)_=Q[$],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function be(u){this.src=u,this.g={},this.h=0}be.prototype.add=function(u,g,_,T,M){const $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);const ne=Re(u,g,T,M);return ne>-1?(g=u[ne],_||(g.fa=!1)):(g=new tt(g,this.src,$,!!T,M),g.fa=_,u.push(g)),g};function Ce(u,g){const _=g.type;if(_ in u.g){var T=u.g[_],M=Array.prototype.indexOf.call(T,g,void 0),$;($=M>=0)&&Array.prototype.splice.call(T,M,1),$&&(re(g),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Re(u,g,_,T){for(let M=0;M<u.length;++M){const $=u[M];if(!$.da&&$.listener==g&&$.capture==!!_&&$.ha==T)return M}return-1}var Be="closure_lm_"+(Math.random()*1e6|0),Ve={};function qe(u,g,_,T,M){if(Array.isArray(g)){for(let $=0;$<g.length;$++)qe(u,g[$],_,T,M);return null}return _=oa(_),u&&u[It]?u.J(g,_,p(T)?!!T.capture:!1,M):Kt(u,g,_,!1,T,M)}function Kt(u,g,_,T,M,$){if(!g)throw Error("Invalid event type");const ne=p(M)?!!M.capture:!!M;let we=Ui(u);if(we||(u[Be]=we=new be(u)),_=we.add(g,_,T,ne,$),_.proxy)return _;if(T=Mi(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)V||(M=ne),M===void 0&&(M=!1),u.addEventListener(g.toString(),T,M);else if(u.attachEvent)u.attachEvent(Fi(g.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Mi(){function u(_){return g.call(u.src,u.listener,_)}const g=ql;return u}function ia(u,g,_,T,M){if(Array.isArray(g))for(var $=0;$<g.length;$++)ia(u,g[$],_,T,M);else T=p(T)?!!T.capture:!!T,_=oa(_),u&&u[It]?(u=u.i,$=String(g).toString(),$ in u.g&&(g=u.g[$],_=Re(g,_,T,M),_>-1&&(re(g[_]),Array.prototype.splice.call(g,_,1),g.length==0&&(delete u.g[$],u.h--)))):u&&(u=Ui(u))&&(g=u.g[g.toString()],u=-1,g&&(u=Re(g,_,T,M)),(_=u>-1?g[u]:null)&&Kr(_))}function Kr(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[It])Ce(g.i,u);else{var _=u.type,T=u.proxy;g.removeEventListener?g.removeEventListener(_,T,u.capture):g.detachEvent?g.detachEvent(Fi(_),T):g.addListener&&g.removeListener&&g.removeListener(T),(_=Ui(g))?(Ce(_,u),_.h==0&&(_.src=null,g[Be]=null)):re(u)}}}function Fi(u){return u in Ve?Ve[u]:Ve[u]="on"+u}function ql(u,g){if(u.da)u=!0;else{g=new He(g,this);const _=u.listener,T=u.ha||u.src;u.fa&&Kr(u),u=_.call(T,g)}return u}function Ui(u){return u=u[Be],u instanceof be?u:null}var Ks="__closure_events_fn_"+(Math.random()*1e9>>>0);function oa(u){return typeof u=="function"?u:(u[Ks]||(u[Ks]=function(g){return u.handleEvent(g)}),u[Ks])}function mt(){j.call(this),this.i=new be(this),this.M=this,this.G=null}E(mt,j),mt.prototype[It]=!0,mt.prototype.removeEventListener=function(u,g,_,T){ia(this,u,g,_,T)};function ut(u,g){var _,T=u.G;if(T)for(_=[];T;T=T.G)_.push(T);if(u=u.M,T=g.type||g,typeof g=="string")g=new P(g,u);else if(g instanceof P)g.target=g.target||u;else{var M=g;g=new P(T,u),Se(g,M)}M=!0;let $,ne;if(_)for(ne=_.length-1;ne>=0;ne--)$=g.g=_[ne],M=Nn($,T,!0,g)&&M;if($=g.g=u,M=Nn($,T,!0,g)&&M,M=Nn($,T,!1,g)&&M,_)for(ne=0;ne<_.length;ne++)$=g.g=_[ne],M=Nn($,T,!1,g)&&M}mt.prototype.N=function(){if(mt.Z.N.call(this),this.i){var u=this.i;for(const g in u.g){const _=u.g[g];for(let T=0;T<_.length;T++)re(_[T]);delete u.g[g],u.h--}}this.G=null},mt.prototype.J=function(u,g,_,T){return this.i.add(String(u),g,!1,_,T)},mt.prototype.K=function(u,g,_,T){return this.i.add(String(u),g,!0,_,T)};function Nn(u,g,_,T){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();let M=!0;for(let $=0;$<g.length;++$){const ne=g[$];if(ne&&!ne.da&&ne.capture==_){const we=ne.listener,ct=ne.ha||ne.src;ne.fa&&Ce(u.i,ne),M=we.call(ct,T)!==!1&&M}}return M&&!T.defaultPrevented}function aa(u,g){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=v(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:h.setTimeout(u,g||0)}function la(u){u.g=aa(()=>{u.g=null,u.i&&(u.i=!1,la(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class Wl extends j{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:la(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qr(u){j.call(this),this.h=u,this.g={}}E(Qr,j);var ua=[];function Bi(u){fe(u.g,function(g,_){this.g.hasOwnProperty(_)&&Kr(g)},u),u.g={}}Qr.prototype.N=function(){Qr.Z.N.call(this),Bi(this)},Qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yr=h.JSON.stringify,Hl=h.JSON.parse,Qs=class{stringify(u){return h.JSON.stringify(u,void 0)}parse(u){return h.JSON.parse(u,void 0)}};function Jr(){}function Gl(){}var Xr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zi(){P.call(this,"d")}E(zi,P);function ca(){P.call(this,"c")}E(ca,P);var kn={},$i=null;function Zr(){return $i=$i||new mt}kn.Ia="serverreachability";function qi(u){P.call(this,kn.Ia,u)}E(qi,P);function yr(u){const g=Zr();ut(g,new qi(g))}kn.STAT_EVENT="statevent";function vr(u,g){P.call(this,kn.STAT_EVENT,u),this.stat=g}E(vr,P);function at(u){const g=Zr();ut(g,new vr(g,u))}kn.Ja="timingevent";function da(u,g){P.call(this,kn.Ja,u),this.size=g}E(da,P);function es(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){u()},g)}function ts(){this.g=!0}ts.prototype.ua=function(){this.g=!1};function Kl(u,g,_,T,M,$){u.info(function(){if(u.g)if($){var ne="",we=$.split("&");for(let $e=0;$e<we.length;$e++){var ct=we[$e].split("=");if(ct.length>1){const gt=ct[0];ct=ct[1];const cn=gt.split("_");ne=cn.length>=2&&cn[1]=="type"?ne+(gt+"="+ct+"&"):ne+(gt+"=redacted&")}}}else ne=null;else ne=$;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+g+`
`+_+`
`+ne})}function Ql(u,g,_,T,M,$,ne){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+g+`
`+_+`
`+$+" "+ne})}function $n(u,g,_,T){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ys(u,_)+(T?" "+T:"")})}function Yl(u,g){u.info(function(){return"TIMEOUT: "+g})}ts.prototype.info=function(){};function Ys(u,g){if(!u.g)return g;if(!g)return null;try{const $=JSON.parse(g);if($){for(u=0;u<$.length;u++)if(Array.isArray($[u])){var _=$[u];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var M=T[0];if(M!="noop"&&M!="stop"&&M!="close")for(let ne=1;ne<T.length;ne++)T[ne]=""}}}}return Yr($)}catch{return g}}var ns={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},rs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Jl;function _r(){}E(_r,Jr),_r.prototype.g=function(){return new XMLHttpRequest},Jl=new _r;function qn(u){return encodeURIComponent(String(u))}function Wi(u){var g=1;u=u.split(":");const _=[];for(;g>0&&u.length;)_.push(u.shift()),g--;return u.length&&_.push(u.join(":")),_}function mn(u,g,_,T){this.j=u,this.i=g,this.l=_,this.S=T||1,this.V=new Qr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Xl}function Xl(){this.i=null,this.g="",this.h=!1}var Zl={},ha={};function Cn(u,g,_){u.M=1,u.A=wr(gn(g)),u.u=_,u.R=!0,fa(u,null)}function fa(u,g){u.F=Date.now(),Js(u),u.B=gn(u.A);var _=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),Ta(_.i,"t",T),u.C=0,_=u.j.L,u.h=new Xl,u.g=uu(u.j,_?g:null,!u.u),u.P>0&&(u.O=new Wl(v(u.Y,u,u.g),u.P)),g=u.V,_=u.g,T=u.ba;var M="readystatechange";Array.isArray(M)||(M&&(ua[0]=M.toString()),M=ua);for(let $=0;$<M.length;$++){const ne=qe(_,M[$],T||g.handleEvent,!1,g.h||g);if(!ne)break;g.g[ne.key]=ne}g=u.J?L(u.J):{},u.u?(u.v||(u.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,g)):(u.v="GET",u.g.ea(u.B,u.v,null,g)),yr(),Kl(u.i,u.v,u.B,u.l,u.S,u.u)}mn.prototype.ba=function(u){u=u.target;const g=this.O;g&&Jn(u)==3?g.j():this.Y(u)},mn.prototype.Y=function(u){try{if(u==this.g)e:{const we=Jn(this.g),ct=this.g.ya(),$e=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||au(this.g)))){this.K||we!=4||ct==7||(ct==8||$e<=0?yr(3):yr(2)),Hi(this);var g=this.g.ca();this.X=g;var _=eu(this);if(this.o=g==200,Ql(this.i,this.v,this.B,this.l,this.S,we,g),this.o){if(this.U&&!this.L){t:{if(this.g){var T,M=this.g;if((T=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(T)){var $=T;break t}}$=null}if(u=$)$n(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ye(this,u);else{this.o=!1,this.m=3,at(12),xr(this),Xs(this);break e}}if(this.R){u=!0;let gt;for(;!this.K&&this.C<_.length;)if(gt=nu(this,_),gt==ha){we==4&&(this.m=4,at(14),u=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(gt==Zl){this.m=4,at(15),$n(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else $n(this.i,this.l,gt,null),Ye(this,gt);if(tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||_.length!=0||this.h.h||(this.m=1,at(16),u=!1),this.o=this.o&&u,!u)$n(this.i,this.l,_,"[Invalid Chunked Response]"),xr(this),Xs(this);else if(_.length>0&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.aa&&!ne.P&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),ai(ne),ne.P=!0,at(11))}}else $n(this.i,this.l,_,null),Ye(this,_);we==4&&xr(this),this.o&&!this.K&&(we==4?no(this.j,this):(this.o=!1,Js(this)))}else Sa(this.g),g==400&&_.indexOf("Unknown SID")>0?(this.m=3,at(12)):(this.m=0,at(13)),xr(this),Xs(this)}}}catch{}finally{}};function eu(u){if(!tu(u))return u.g.la();const g=au(u.g);if(g==="")return"";let _="";const T=g.length,M=Jn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return xr(u),Xs(u),"";u.h.i=new h.TextDecoder}for(let $=0;$<T;$++)u.h.h=!0,_+=u.h.i.decode(g[$],{stream:!(M&&$==T-1)});return g.length=0,u.h.g+=_,u.C=0,u.h.g}function tu(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function nu(u,g){var _=u.C,T=g.indexOf(`
`,_);return T==-1?ha:(_=Number(g.substring(_,T)),isNaN(_)?Zl:(T+=1,T+_>g.length?ha:(g=g.slice(T,T+_),u.C=T+_,g)))}mn.prototype.cancel=function(){this.K=!0,xr(this)};function Js(u){u.T=Date.now()+u.H,pa(u,u.H)}function pa(u,g){if(u.D!=null)throw Error("WatchDog timer not null");u.D=es(v(u.aa,u),g)}function Hi(u){u.D&&(h.clearTimeout(u.D),u.D=null)}mn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Yl(this.i,this.B),this.M!=2&&(yr(),at(17)),xr(this),this.m=2,Xs(this)):pa(this,this.T-u)};function Xs(u){u.j.I==0||u.K||no(u.j,u)}function xr(u){Hi(u);var g=u.O;g&&typeof g.dispose=="function"&&g.dispose(),u.O=null,Bi(u.V),u.g&&(g=u.g,u.g=null,g.abort(),g.dispose())}function Ye(u,g){try{var _=u.j;if(_.I!=0&&(_.g==u||ga(_.h,u))){if(!u.L&&ga(_.h,u)&&_.I==3){try{var T=_.Ba.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)to(_),ln(_);else break e;er(_),at(18)}}else _.xa=M[1],0<_.xa-_.K&&M[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=es(v(_.Va,_),6e3));Zs(_.h)<=1&&_.ta&&(_.ta=void 0)}else un(_,11)}else if((u.L||_.g==u)&&to(_),!N(g))for(M=_.Ba.g.parse(g),g=0;g<M.length;g++){let $e=M[g];const gt=$e[0];if(!(gt<=_.K))if(_.K=gt,$e=$e[1],_.I==2)if($e[0]=="c"){_.M=$e[1],_.ba=$e[2];const cn=$e[3];cn!=null&&(_.ka=cn,_.j.info("VER="+_.ka));const br=$e[4];br!=null&&(_.za=br,_.j.info("SVER="+_.za));const tr=$e[5];tr!=null&&typeof tr=="number"&&tr>0&&(T=1.5*tr,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const nr=u.g;if(nr){const io=nr.g?nr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(io){var $=T.h;$.g||io.indexOf("spdy")==-1&&io.indexOf("quic")==-1&&io.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Ki($,$.h),$.h=null))}if(T.G){const ka=nr.g?nr.g.getResponseHeader("X-HTTP-Session-Id"):null;ka&&(T.wa=ka,Fe(T.J,T.G,ka))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var ne=u;if(T.na=Na(T,T.L?T.ba:null,T.W),ne.L){ei(T.h,ne);var we=ne,ct=T.O;ct&&(we.H=ct),we.D&&(Hi(we),Js(we)),T.g=ne}else Mt(T);_.i.length>0&&Sr(_)}else $e[0]!="stop"&&$e[0]!="close"||un(_,7);else _.I==3&&($e[0]=="stop"||$e[0]=="close"?$e[0]=="stop"?un(_,7):Zi(_):$e[0]!="noop"&&_.l&&_.l.qa($e),_.A=0)}}yr(4)}catch{}}var yd=class{constructor(u,g){this.g=u,this.map=g}};function Gi(u){this.l=u||10,h.PerformanceNavigationTiming?(u=h.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ma(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Zs(u){return u.h?1:u.g?u.g.size:0}function ga(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function Ki(u,g){u.g?u.g.add(g):u.h=g}function ei(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}Gi.prototype.cancel=function(){if(this.i=sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function sn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const _ of u.g.values())g=g.concat(_.G);return g}return D(u.i)}var ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function on(u,g){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const T=u[_].indexOf("=");let M,$=null;T>=0?(M=u[_].substring(0,T),$=u[_].substring(T+1)):M=u[_],g(M,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function Wn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;u instanceof Wn?(this.l=u.l,ti(this,u.j),this.o=u.o,this.g=u.g,Hn(this,u.u),this.h=u.h,ss(this,Ia(u.i)),this.m=u.m):u&&(g=String(u).match(ru))?(this.l=!1,ti(this,g[1]||"",!0),this.o=ni(g[2]||""),this.g=ni(g[3]||"",!0),Hn(this,g[4]),this.h=ni(g[5]||"",!0),ss(this,g[6]||"",!0),this.m=ni(g[7]||"")):(this.l=!1,this.i=new De(null,this.l))}Wn.prototype.toString=function(){const u=[];var g=this.j;g&&u.push(ri(g,va,!0),":");var _=this.g;return(_||g=="file")&&(u.push("//"),(g=this.o)&&u.push(ri(g,va,!0),"@"),u.push(qn(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ri(_,_.charAt(0)=="/"?si:_a,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ri(_,xa)),u.join("")},Wn.prototype.resolve=function(u){const g=gn(this);let _=!!u.j;_?ti(g,u.j):_=!!u.o,_?g.o=u.o:_=!!u.g,_?g.g=u.g:_=u.u!=null;var T=u.h;if(_)Hn(g,u.u);else if(_=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var M=g.h.lastIndexOf("/");M!=-1&&(T=g.h.slice(0,M+1)+T)}if(M=T,M==".."||M==".")T="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){T=M.lastIndexOf("/",0)==0,M=M.split("/");const $=[];for(let ne=0;ne<M.length;){const we=M[ne++];we=="."?T&&ne==M.length&&$.push(""):we==".."?(($.length>1||$.length==1&&$[0]!="")&&$.pop(),T&&ne==M.length&&$.push("")):($.push(we),T=!0)}T=$.join("/")}else T=M}return _?g.h=T:_=u.i.toString()!=="",_?ss(g,Ia(u.i)):_=!!u.m,_&&(g.m=u.m),g};function gn(u){return new Wn(u)}function ti(u,g,_){u.j=_?ni(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function Hn(u,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);u.u=g}else u.u=null}function ss(u,g,_){g instanceof De?(u.i=g,Yi(u.i,u.l)):(_||(g=ri(g,vd)),u.i=new De(g,u.l))}function Fe(u,g,_){u.i.set(g,_)}function wr(u){return Fe(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function ni(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ri(u,g,_){return typeof u=="string"?(u=encodeURI(u).replace(g,ya),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ya(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var va=/[#\/\?@]/g,_a=/[#\?:]/g,si=/[#\?]/g,vd=/[#\?@]/g,xa=/#/g;function De(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function Gn(u){u.g||(u.g=new Map,u.h=0,u.i&&on(u.i,function(g,_){u.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=De.prototype,r.add=function(u,g){Gn(this),this.i=null,u=Kn(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(g),this.h+=1,this};function wa(u,g){Gn(u),g=Kn(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function Qi(u,g){return Gn(u),g=Kn(u,g),u.g.has(g)}r.forEach=function(u,g){Gn(this),this.g.forEach(function(_,T){_.forEach(function(M){u.call(g,M,T,this)},this)},this)};function Ea(u,g){Gn(u);let _=[];if(typeof g=="string")Qi(u,g)&&(_=_.concat(u.g.get(Kn(u,g))));else for(u=Array.from(u.g.values()),g=0;g<u.length;g++)_=_.concat(u[g]);return _}r.set=function(u,g){return Gn(this),this.i=null,u=Kn(this,u),Qi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},r.get=function(u,g){return u?(u=Ea(this,u),u.length>0?String(u[0]):g):g};function Ta(u,g,_){wa(u,g),_.length>0&&(u.i=null,u.g.set(Kn(u,g),D(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(let T=0;T<g.length;T++){var _=g[T];const M=qn(_);_=Ea(this,_);for(let $=0;$<_.length;$++){let ne=M;_[$]!==""&&(ne+="="+qn(_[$])),u.push(ne)}}return this.i=u.join("&")};function Ia(u){const g=new De;return g.i=u.i,u.g&&(g.g=new Map(u.g),g.h=u.h),g}function Kn(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function Yi(u,g){g&&!u.j&&(Gn(u),u.i=null,u.g.forEach(function(_,T){const M=T.toLowerCase();T!=M&&(wa(this,T),Ta(this,M,_))},u)),u.j=g}function Qn(u,g){const _=new ts;if(h.Image){const T=new Image;T.onload=w(Rt,_,"TestLoadImage: loaded",!0,g,T),T.onerror=w(Rt,_,"TestLoadImage: error",!1,g,T),T.onabort=w(Rt,_,"TestLoadImage: abort",!1,g,T),T.ontimeout=w(Rt,_,"TestLoadImage: timeout",!1,g,T),h.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else g(!1)}function Yn(u,g){const _=new ts,T=new AbortController,M=setTimeout(()=>{T.abort(),Rt(_,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:T.signal}).then($=>{clearTimeout(M),$.ok?Rt(_,"TestPingServer: ok",!0,g):Rt(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(M),Rt(_,"TestPingServer: error",!1,g)})}function Rt(u,g,_,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(_)}catch{}}function ii(){this.g=new Qs}function Er(u){this.i=u.Sb||null,this.h=u.ab||!1}E(Er,Jr),Er.prototype.g=function(){return new an(this.i,this.h)};function an(u,g){mt.call(this),this.H=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(an,mt),r=an.prototype,r.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=g,this.readyState=1,Rn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(g.body=u),(this.H||h).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},r.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;su(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function su(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}r.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?is(this):Rn(this),this.readyState==3&&su(this)}},r.Oa=function(u){this.g&&(this.response=this.responseText=u,is(this))},r.Na=function(u){this.g&&(this.response=u,is(this))},r.ga=function(){this.g&&is(this)};function is(u){u.readyState=4,u.l=null,u.j=null,u.B=null,Rn(u)}r.setRequestHeader=function(u,g){this.A.append(u,g)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=g.next();return u.join(`\r
`)};function Rn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(an.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function iu(u){let g="";return fe(u,function(_,T){g+=T,g+=":",g+=_,g+=`\r
`}),g}function Ji(u,g,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=iu(_),typeof u=="string"?_!=null&&qn(_):Fe(u,g,_))}function We(u){mt.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(We,mt);var ou=/^https?$/i,_d=["POST","PUT"];r=We.prototype,r.Fa=function(u){this.H=u},r.ea=function(u,g,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Jl.g(),this.g.onreadystatechange=I(v(this.Ca,this));try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch($){os(this,$);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)_.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const $ of T.keys())_.set($,T.get($));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),M=h.FormData&&u instanceof h.FormData,!(Array.prototype.indexOf.call(_d,g,void 0)>=0)||T||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of _)this.g.setRequestHeader($,ne);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch($){os(this,$)}};function os(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.o=5,as(u),Ir(u)}function as(u){u.A||(u.A=!0,ut(u,"complete"),ut(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,ut(this,"complete"),ut(this,"abort"),Ir(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),We.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Tr(this):this.Xa())},r.Xa=function(){Tr(this)};function Tr(u){if(u.h&&typeof l<"u"){if(u.v&&Jn(u)==4)setTimeout(u.Ca.bind(u),0);else if(ut(u,"readystatechange"),Jn(u)==4){u.h=!1;try{const $=u.ca();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var T;if(T=$===0){let ne=String(u.D).match(ru)[1]||null;!ne&&h.self&&h.self.location&&(ne=h.self.location.protocol.slice(0,-1)),T=!ou.test(ne?ne.toLowerCase():"")}_=T}if(_)ut(u,"complete"),ut(u,"success");else{u.o=6;try{var M=Jn(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",as(u)}}finally{Ir(u)}}}}function Ir(u,g){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,g||ut(u,"ready");try{_.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Jn(u){return u.g?u.g.readyState:0}r.ca=function(){try{return Jn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),Hl(g)}};function au(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Sa(u){const g={};u=(u.g&&Jn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(N(u[T]))continue;var _=Wi(u[T]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=g[M]||[];g[M]=$,$.push(_)}ae(g,function(T){return T.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xn(u,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||g}function Xi(u){this.za=0,this.i=[],this.j=new ts,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xn("baseRetryDelayMs",5e3,u),this.Za=Xn("retryDelaySeedMs",1e4,u),this.Ta=Xn("forwardChannelMaxRetries",2,u),this.va=Xn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Gi(u&&u.concurrentRequestLimit),this.Ba=new ii,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Xi.prototype,r.ka=8,r.I=1,r.connect=function(u,g,_,T){at(0),this.W=u,this.H=g||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Na(this,null,this.W),Sr(this)};function Zi(u){if(eo(u),u.I==3){var g=u.V++,_=gn(u.J);if(Fe(_,"SID",u.M),Fe(_,"RID",g),Fe(_,"TYPE","terminate"),Zn(u,_),g=new mn(u,u.j,g),g.M=2,g.A=wr(gn(_)),_=!1,h.navigator&&h.navigator.sendBeacon)try{_=h.navigator.sendBeacon(g.A.toString(),"")}catch{}!_&&h.Image&&(new Image().src=g.A,_=!0),_||(g.g=uu(g.j,null),g.g.ea(g.A)),g.F=Date.now(),Js(g)}li(u)}function ln(u){u.g&&(ai(u),u.g.cancel(),u.g=null)}function eo(u){ln(u),u.v&&(h.clearTimeout(u.v),u.v=null),to(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&h.clearTimeout(u.m),u.m=null)}function Sr(u){if(!ma(u.h)&&!u.m){u.m=!0;var g=u.Ea;Te||S(),Ie||(Te(),Ie=!0),R.add(g,u),u.D=0}}function lu(u,g){return Zs(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=g.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=es(v(u.Ea,u,g),ro(u,u.D)),u.D++,!0)}r.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new mn(this,this.j,u);let $=this.o;if(this.U&&($?($=L($),Se($,this.U)):$=this.U),this.u!==null||this.R||(M.J=$,$=null),this.S)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(g+=T,g>4096){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=ba(this,M,g),_=gn(this.J),Fe(_,"RID",u),Fe(_,"CVER",22),this.G&&Fe(_,"X-HTTP-Session-Id",this.G),Zn(this,_),$&&(this.R?g="headers="+qn(iu($))+"&"+g:this.u&&Ji(_,this.u,$)),Ki(this.h,M),this.Ra&&Fe(_,"TYPE","init"),this.S?(Fe(_,"$req",g),Fe(_,"SID","null"),M.U=!0,Cn(M,_,null)):Cn(M,_,g),this.I=2}}else this.I==3&&(u?oi(this,u):this.i.length==0||ma(this.h)||oi(this))};function oi(u,g){var _;g?_=g.l:_=u.V++;const T=gn(u.J);Fe(T,"SID",u.M),Fe(T,"RID",_),Fe(T,"AID",u.K),Zn(u,T),u.u&&u.o&&Ji(T,u.u,u.o),_=new mn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),g&&(u.i=g.G.concat(u.i)),g=ba(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Ki(u.h,_),Cn(_,T,g)}function Zn(u,g){u.H&&fe(u.H,function(_,T){Fe(g,T,_)}),u.l&&fe({},function(_,T){Fe(g,T,_)})}function ba(u,g,_){_=Math.min(u.i.length,_);const T=u.l?v(u.l.Ka,u.l,u):null;e:{var M=u.i;let we=-1;for(;;){const ct=["count="+_];we==-1?_>0?(we=M[0].g,ct.push("ofs="+we)):we=0:ct.push("ofs="+we);let $e=!0;for(let gt=0;gt<_;gt++){var $=M[gt].g;const cn=M[gt].map;if($-=we,$<0)we=Math.max(0,M[gt].g-100),$e=!1;else try{$="req"+$+"_"||"";try{var ne=cn instanceof Map?cn:Object.entries(cn);for(const[br,tr]of ne){let nr=tr;p(tr)&&(nr=Yr(tr)),ct.push($+br+"="+encodeURIComponent(nr))}}catch(br){throw ct.push($+"type="+encodeURIComponent("_badmap")),br}}catch{T&&T(cn)}}if($e){ne=ct.join("&");break e}}ne=void 0}return u=u.i.splice(0,_),g.G=u,ne}function Mt(u){if(!u.g&&!u.v){u.Y=1;var g=u.Da;Te||S(),Ie||(Te(),Ie=!0),R.add(g,u),u.A=0}}function er(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=es(v(u.Da,u),ro(u,u.A)),u.A++,!0)}r.Da=function(){if(this.v=null,ls(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=es(v(this.Wa,this),u)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,at(10),ln(this),ls(this))};function ai(u){u.B!=null&&(h.clearTimeout(u.B),u.B=null)}function ls(u){u.g=new mn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var g=gn(u.na);Fe(g,"RID","rpc"),Fe(g,"SID",u.M),Fe(g,"AID",u.K),Fe(g,"CI",u.F?"0":"1"),!u.F&&u.ia&&Fe(g,"TO",u.ia),Fe(g,"TYPE","xmlhttp"),Zn(u,g),u.u&&u.o&&Ji(g,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=wr(gn(g)),_.u=null,_.R=!0,fa(_,u)}r.Va=function(){this.C!=null&&(this.C=null,ln(this),er(this),at(19))};function to(u){u.C!=null&&(h.clearTimeout(u.C),u.C=null)}function no(u,g){var _=null;if(u.g==g){to(u),ai(u),u.g=null;var T=2}else if(ga(u.h,g))_=g.G,ei(u.h,g),T=1;else return;if(u.I!=0){if(g.o)if(T==1){_=g.u?g.u.length:0,g=Date.now()-g.F;var M=u.D;T=Zr(),ut(T,new da(T,_)),Sr(u)}else Mt(u);else if(M=g.m,M==3||M==0&&g.X>0||!(T==1&&lu(u,g)||T==2&&er(u)))switch(_&&_.length>0&&(g=u.h,g.i=g.i.concat(_)),M){case 1:un(u,5);break;case 4:un(u,10);break;case 3:un(u,6);break;default:un(u,2)}}}function ro(u,g){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*g}function un(u,g){if(u.j.info("Error code "+g),g==2){var _=v(u.bb,u),T=u.Ua;const M=!T;T=new Wn(T||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||ti(T,"https"),wr(T),M?Qn(T.toString(),_):Yn(T.toString(),_)}else at(2);u.I=0,u.l&&u.l.pa(g),li(u),eo(u)}r.bb=function(u){u?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function li(u){if(u.I=0,u.ja=[],u.l){const g=sn(u.h);(g.length!=0||u.i.length!=0)&&(W(u.ja,g),W(u.ja,u.i),u.h.i.length=0,D(u.i),u.i.length=0),u.l.oa()}}function Na(u,g,_){var T=_ instanceof Wn?gn(_):new Wn(_);if(T.g!="")g&&(T.g=g+"."+T.g),Hn(T,T.u);else{var M=h.location;T=M.protocol,g=g?g+"."+M.hostname:M.hostname,M=+M.port;const $=new Wn(null);T&&ti($,T),g&&($.g=g),M&&Hn($,M),_&&($.h=_),T=$}return _=u.G,g=u.wa,_&&g&&Fe(T,_,g),Fe(T,"VER",u.ka),Zn(u,T),T}function uu(u,g,_){if(g&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Aa&&!u.ma?new We(new Er({ab:_})):new We(u.ma),g.Fa(u.L),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function cu(){}r=cu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function so(){}so.prototype.g=function(u,g){return new Pt(u,g)};function Pt(u,g){mt.call(this),this.g=new Xi(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(u?u["X-WebChannel-Client-Profile"]=g.sa:u={"X-WebChannel-Client-Profile":g.sa}),this.g.U=u,(u=g&&g.Qb)&&!N(u)&&(this.g.u=u),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!N(g)&&(this.g.G=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new us(this)}E(Pt,mt),Pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Zi(this.g)},Pt.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=Yr(u),u=_);g.i.push(new yd(g.Ya++,u)),g.I==3&&Sr(g)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Zi(this.g),delete this.g,Pt.Z.N.call(this)};function du(u){zi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){e:{for(const _ in g){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}E(du,zi);function hu(){ca.call(this),this.status=1}E(hu,ca);function us(u){this.g=u}E(us,cu),us.prototype.ra=function(){ut(this.g,"a")},us.prototype.qa=function(u){ut(this.g,new du(u))},us.prototype.pa=function(u){ut(this.g,new hu)},us.prototype.oa=function(){ut(this.g,"b")},so.prototype.createWebChannel=so.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,l_=function(){return new so},a_=function(){return Zr()},o_=kn,_f={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ns.NO_ERROR=0,ns.TIMEOUT=8,ns.HTTP_ERROR=6,xc=ns,rs.COMPLETE="complete",i_=rs,Gl.EventType=Xr,Xr.OPEN="a",Xr.CLOSE="b",Xr.ERROR="c",Xr.MESSAGE="d",mt.prototype.listen=mt.prototype.J,il=Gl,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,s_=We}).apply(typeof lc<"u"?lc:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
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
 */let ea="12.9.0";function Cb(r){ea=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ci=new Qf("@firebase/firestore");function Co(){return Ci.logLevel}function oe(r,...e){if(Ci.logLevel<=Pe.DEBUG){const t=e.map(op);Ci.debug(`Firestore (${ea}): ${r}`,...t)}}function $r(r,...e){if(Ci.logLevel<=Pe.ERROR){const t=e.map(op);Ci.error(`Firestore (${ea}): ${r}`,...t)}}function Ri(r,...e){if(Ci.logLevel<=Pe.WARN){const t=e.map(op);Ci.warn(`Firestore (${ea}): ${r}`,...t)}}function op(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function ve(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,u_(r,s,t)}function u_(r,e,t){let s=`FIRESTORE (${ea}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw $r(s),new Error(s)}function ze(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||u_(e,o,s)}function Ee(r,e){return r}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Gr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ds{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class c_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(qt.UNAUTHENTICATED)))}shutdown(){}}class Pb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ab{constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ze(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let l=new Ds;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ds,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const y=l;e.enqueueRetryable((async()=>{await y.promise,await o(this.currentUser)}))},p=y=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>p(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?p(y):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ds)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string",31837,{l:s}),new c_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new qt(e)}}class jb{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Db{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new jb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(qt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Uy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ze(this.o===void 0,3512);const s=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Uy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Uy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class ap{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=Vb(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Ae(r,e){return r<e?-1:r>e?1:0}function xf(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const o=r.charAt(s),l=e.charAt(s);if(o!==l)return tf(o)===tf(l)?Ae(o,l):tf(o)?1:-1}return Ae(r.length,e.length)}const Ob=55296,Mb=57343;function tf(r){const e=r.charCodeAt(0);return e>=Ob&&e<=Mb}function Bo(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
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
 */const By="__name__";class lr{constructor(e,t,s){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ve(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return lr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof lr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=lr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const s=lr.isNumericId(e),o=lr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?lr.extractNumericId(e).compare(lr.extractNumericId(t)):xf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return js.fromString(e.substring(4,e.length-2))}}class Ke extends lr{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const Fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lt extends lr{construct(e,t,s){return new Lt(e,t,s)}static isValidIdentifier(e){return Fb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===By}static keyField(){return new Lt([By])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new se(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new se(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(l(),o++)}if(l(),h)throw new se(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Lt(t)}static emptyPath(){return new Lt([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Ke.fromString(e))}static fromName(e){return new he(Ke.fromString(e).popFirst(5))}static empty(){return new he(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Ke(e.slice()))}}/**
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
 */function d_(r,e,t){if(!t)throw new se(H.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Ub(r,e,t,s){if(e===!0&&s===!0)throw new se(H.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function zy(r){if(!he.isDocumentKey(r))throw new se(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function $y(r){if(he.isDocumentKey(r))throw new se(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function h_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function nd(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ve(12329,{type:typeof r})}function Ls(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new se(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=nd(r);throw new se(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */function xt(r,e){const t={typeString:r};return e&&(t.value=e),t}function Fl(r,e){if(!h_(r))throw new se(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new se(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const qy=-62135596800,Wy=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Wy);return new Ze(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qy)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wy}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ze._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fl(e,Ze._jsonSchema))return new Ze(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ze._jsonSchemaVersion="firestore/timestamp/1.0",Ze._jsonSchema={type:xt("string",Ze._jsonSchemaVersion),seconds:xt("number"),nanoseconds:xt("number")};/**
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
 */class xe{static fromTimestamp(e){return new xe(e)}static min(){return new xe(new Ze(0,0))}static max(){return new xe(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const xl=-1;function Bb(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=xe.fromTimestamp(s===1e9?new Ze(t+1,0):new Ze(t,s));return new Os(o,he.empty(),e)}function zb(r){return new Os(r.readTime,r.key,xl)}class Os{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Os(xe.min(),he.empty(),xl)}static max(){return new Os(xe.max(),he.empty(),xl)}}function $b(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(r.documentKey,e.documentKey),t!==0?t:Ae(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ta(r){if(r.code!==H.FAILED_PRECONDITION||r.message!==qb)throw r;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,s)=>{t(e)}))}static reject(e){return new G(((t,s)=>{s(e)}))}static waitFor(e){return new G(((t,s)=>{let o=0,l=0,h=!1;e.forEach((p=>{++o,p.next((()=>{++l,h&&l===o&&t()}),(y=>s(y)))})),h=!0,l===o&&t()}))}static or(e){let t=G.resolve(!1);for(const s of e)t=t.next((o=>o?G.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new G(((s,o)=>{const l=e.length,h=new Array(l);let p=0;for(let y=0;y<l;y++){const v=y;t(e[v]).next((w=>{h[v]=w,++p,p===l&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new G(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function Hb(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function na(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class rd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}rd.ce=-1;/**
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
 */const lp=-1;function sd(r){return r==null}function Vc(r){return r===0&&1/r==-1/0}function Gb(r){return typeof r=="number"&&Number.isInteger(r)&&!Vc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const f_="";function Kb(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Hy(e)),e=Qb(r.get(t),e);return Hy(e)}function Qb(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case f_:t+="";break;default:t+=l}}return t}function Hy(r){return r+f_+""}/**
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
 */function Gy(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ji(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function p_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ot{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uc(this.root,e,this.comparator,!0)}}class uc{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Dt.RED,this.left=o??Dt.EMPTY,this.right=l??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Dt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Tt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ky(this.data.getIterator())}getIteratorFrom(e){return new Ky(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Tt(this.comparator);return t.data=e,t}}class Ky{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.fields=e,e.sort(Lt.comparator)}static empty(){return new Mn([])}unionWith(e){let t=new Tt(Lt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class m_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new m_("Invalid base64 string: "+l):l}})(e);return new Vt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const Yb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ms(r){if(ze(!!r,39018),typeof r=="string"){let e=0;const t=Yb.exec(r);if(ze(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ht(r.seconds),nanos:ht(r.nanos)}}function ht(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Fs(r){return typeof r=="string"?Vt.fromBase64String(r):Vt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="server_timestamp",y_="__type__",v_="__previous_value__",__="__local_write_time__";function up(r){return(r?.mapValue?.fields||{})[y_]?.stringValue===g_}function id(r){const e=r.mapValue.fields[v_];return up(e)?id(e):e}function wl(r){const e=Ms(r.mapValue.fields[__].timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class Jb{constructor(e,t,s,o,l,h,p,y,v,w,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=w,this.apiKey=E}}const Oc="(default)";class El{constructor(e,t){this.projectId=e,this.database=t||Oc}static empty(){return new El("","")}get isDefaultDatabase(){return this.database===Oc}isEqual(e){return e instanceof El&&e.projectId===this.projectId&&e.database===this.database}}function Xb(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new se(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new El(r.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="__type__",Zb="__max__",cc={mapValue:{}},w_="__vector__",Mc="value";function Us(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?up(r)?4:tN(r)?9007199254740991:eN(r)?10:11:ve(28295,{value:r})}function gr(r,e){if(r===e)return!0;const t=Us(r);if(t!==Us(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return wl(r).isEqual(wl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ms(o.timestampValue),p=Ms(l.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Fs(o.bytesValue).isEqual(Fs(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return ht(o.geoPointValue.latitude)===ht(l.geoPointValue.latitude)&&ht(o.geoPointValue.longitude)===ht(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ht(o.integerValue)===ht(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=ht(o.doubleValue),p=ht(l.doubleValue);return h===p?Vc(h)===Vc(p):isNaN(h)&&isNaN(p)}return!1})(r,e);case 9:return Bo(r.arrayValue.values||[],e.arrayValue.values||[],gr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},p=l.mapValue.fields||{};if(Gy(h)!==Gy(p))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(p[y]===void 0||!gr(h[y],p[y])))return!1;return!0})(r,e);default:return ve(52216,{left:r})}}function Tl(r,e){return(r.values||[]).find((t=>gr(t,e)))!==void 0}function zo(r,e){if(r===e)return 0;const t=Us(r),s=Us(e);if(t!==s)return Ae(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const p=ht(l.integerValue||l.doubleValue),y=ht(h.integerValue||h.doubleValue);return p<y?-1:p>y?1:p===y?0:isNaN(p)?isNaN(y)?0:-1:1})(r,e);case 3:return Qy(r.timestampValue,e.timestampValue);case 4:return Qy(wl(r),wl(e));case 5:return xf(r.stringValue,e.stringValue);case 6:return(function(l,h){const p=Fs(l),y=Fs(h);return p.compareTo(y)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const p=l.split("/"),y=h.split("/");for(let v=0;v<p.length&&v<y.length;v++){const w=Ae(p[v],y[v]);if(w!==0)return w}return Ae(p.length,y.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const p=Ae(ht(l.latitude),ht(h.latitude));return p!==0?p:Ae(ht(l.longitude),ht(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Yy(r.arrayValue,e.arrayValue);case 10:return(function(l,h){const p=l.fields||{},y=h.fields||{},v=p[Mc]?.arrayValue,w=y[Mc]?.arrayValue,E=Ae(v?.values?.length||0,w?.values?.length||0);return E!==0?E:Yy(v,w)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===cc.mapValue&&h===cc.mapValue)return 0;if(l===cc.mapValue)return 1;if(h===cc.mapValue)return-1;const p=l.fields||{},y=Object.keys(p),v=h.fields||{},w=Object.keys(v);y.sort(),w.sort();for(let E=0;E<y.length&&E<w.length;++E){const I=xf(y[E],w[E]);if(I!==0)return I;const D=zo(p[y[E]],v[w[E]]);if(D!==0)return D}return Ae(y.length,w.length)})(r.mapValue,e.mapValue);default:throw ve(23264,{he:t})}}function Qy(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ae(r,e);const t=Ms(r),s=Ms(e),o=Ae(t.seconds,s.seconds);return o!==0?o:Ae(t.nanos,s.nanos)}function Yy(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=zo(t[o],s[o]);if(l)return l}return Ae(t.length,s.length)}function $o(r){return wf(r)}function wf(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ms(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Fs(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return he.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=wf(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${wf(t.fields[h])}`;return o+"}"})(r.mapValue):ve(61005,{value:r})}function wc(r){switch(Us(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=id(r);return e?16+wc(e):16;case 5:return 2*r.stringValue.length;case 6:return Fs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+wc(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ji(s.fields,((l,h)=>{o+=l.length+wc(h)})),o})(r.mapValue);default:throw ve(13486,{value:r})}}function Jy(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Ef(r){return!!r&&"integerValue"in r}function cp(r){return!!r&&"arrayValue"in r}function Xy(r){return!!r&&"nullValue"in r}function Zy(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ec(r){return!!r&&"mapValue"in r}function eN(r){return(r?.mapValue?.fields||{})[x_]?.stringValue===w_}function dl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ji(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=dl(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=dl(r.arrayValue.values[t]);return e}return{...r}}function tN(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Zb}/**
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
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ec(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=dl(t)}setAll(e){let t=Lt.emptyPath(),s={},o=[];e.forEach(((h,p)=>{if(!t.isImmediateParentOf(p)){const y=this.getFieldsMap(t);this.applyChanges(y,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=dl(h):o.push(p.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Ec(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Ec(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ji(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new In(dl(this.value))}}function E_(r){const e=[];return ji(r.fields,((t,s)=>{const o=new Lt([t]);if(Ec(s)){const l=E_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new Mn(e)}/**
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
 */class Wt{constructor(e,t,s,o,l,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=p}static newInvalidDocument(e){return new Wt(e,0,xe.min(),xe.min(),xe.min(),In.empty(),0)}static newFoundDocument(e,t,s,o){return new Wt(e,1,t,xe.min(),s,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,xe.min(),xe.min(),In.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,xe.min(),xe.min(),In.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(xe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fc{constructor(e,t){this.position=e,this.inclusive=t}}function e0(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=zo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function t0(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!gr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Il{constructor(e,t="asc"){this.field=e,this.dir=t}}function nN(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class T_{}class _t extends T_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new sN(e,t,s):t==="array-contains"?new aN(e,s):t==="in"?new lN(e,s):t==="not-in"?new uN(e,s):t==="array-contains-any"?new cN(e,s):new _t(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new iN(e,s):new oN(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zo(t,this.value)):t!==null&&Us(this.value)===Us(t)&&this.matchesComparison(zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends T_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Bn(e,t)}matches(e){return I_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function I_(r){return r.op==="and"}function S_(r){return rN(r)&&I_(r)}function rN(r){for(const e of r.filters)if(e instanceof Bn)return!1;return!0}function Tf(r){if(r instanceof _t)return r.field.canonicalString()+r.op.toString()+$o(r.value);if(S_(r))return r.filters.map((e=>Tf(e))).join(",");{const e=r.filters.map((t=>Tf(t))).join(",");return`${r.op}(${e})`}}function b_(r,e){return r instanceof _t?(function(s,o){return o instanceof _t&&s.op===o.op&&s.field.isEqual(o.field)&&gr(s.value,o.value)})(r,e):r instanceof Bn?(function(s,o){return o instanceof Bn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,p)=>l&&b_(h,o.filters[p])),!0):!1})(r,e):void ve(19439)}function N_(r){return r instanceof _t?(function(t){return`${t.field.canonicalString()} ${t.op} ${$o(t.value)}`})(r):r instanceof Bn?(function(t){return t.op.toString()+" {"+t.getFilters().map(N_).join(" ,")+"}"})(r):"Filter"}class sN extends _t{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class iN extends _t{constructor(e,t){super(e,"in",t),this.keys=k_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class oN extends _t{constructor(e,t){super(e,"not-in",t),this.keys=k_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function k_(r,e){return(e.arrayValue?.values||[]).map((t=>he.fromName(t.referenceValue)))}class aN extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cp(t)&&Tl(t.arrayValue,this.value)}}class lN extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Tl(this.value.arrayValue,t)}}class uN extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Tl(this.value.arrayValue,t)}}class cN extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Tl(this.value.arrayValue,s)))}}/**
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
 */class dN{constructor(e,t=null,s=[],o=[],l=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=p,this.Te=null}}function n0(r,e=null,t=[],s=[],o=null,l=null,h=null){return new dN(r,e,t,s,o,l,h)}function dp(r){const e=Ee(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Tf(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),sd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>$o(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>$o(s))).join(",")),e.Te=t}return e.Te}function hp(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!nN(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!b_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!t0(r.startAt,e.startAt)&&t0(r.endAt,e.endAt)}function If(r){return he.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class ra{constructor(e,t=null,s=[],o=[],l=null,h="F",p=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=p,this.endAt=y,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function hN(r,e,t,s,o,l,h,p){return new ra(r,e,t,s,o,l,h,p)}function od(r){return new ra(r)}function r0(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function fN(r){return he.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function C_(r){return r.collectionGroup!==null}function hl(r){const e=Ee(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Tt(Lt.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new Il(l,s))})),t.has(Lt.keyField().canonicalString())||e.Ie.push(new Il(Lt.keyField(),s))}return e.Ie}function hr(r){const e=Ee(r);return e.Ee||(e.Ee=pN(e,hl(r))),e.Ee}function pN(r,e){if(r.limitType==="F")return n0(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Il(o.field,l)}));const t=r.endAt?new Fc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Fc(r.startAt.position,r.startAt.inclusive):null;return n0(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Sf(r,e){const t=r.filters.concat([e]);return new ra(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function mN(r,e){const t=r.explicitOrderBy.concat([e]);return new ra(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function bf(r,e,t){return new ra(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ad(r,e){return hp(hr(r),hr(e))&&r.limitType===e.limitType}function R_(r){return`${dp(hr(r))}|lt:${r.limitType}`}function Ro(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>N_(o))).join(", ")}]`),sd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>$o(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>$o(o))).join(",")),`Target(${s})`})(hr(r))}; limitType=${r.limitType})`}function ld(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):he.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of hl(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,p,y){const v=e0(h,p,y);return h.inclusive?v<=0:v<0})(s.startAt,hl(s),o)||s.endAt&&!(function(h,p,y){const v=e0(h,p,y);return h.inclusive?v>=0:v>0})(s.endAt,hl(s),o))})(r,e)}function gN(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function P_(r){return(e,t)=>{let s=!1;for(const o of hl(r)){const l=yN(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function yN(r,e,t){const s=r.field.isKeyField()?he.comparator(e.key,t.key):(function(l,h,p){const y=h.data.field(l),v=p.data.field(l);return y!==null&&v!==null?zo(y,v):ve(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ve(19790,{direction:r.dir})}}/**
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
 */class Di{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return p_(this.inner)}size(){return this.innerSize}}/**
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
 */const vN=new ot(he.comparator);function qr(){return vN}const A_=new ot(he.comparator);function ol(...r){let e=A_;for(const t of r)e=e.insert(t.key,t);return e}function j_(r){let e=A_;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ei(){return fl()}function D_(){return fl()}function fl(){return new Di((r=>r.toString()),((r,e)=>r.isEqual(e)))}const _N=new ot(he.comparator),xN=new Tt(he.comparator);function je(...r){let e=xN;for(const t of r)e=e.add(t);return e}const wN=new Tt(Ae);function EN(){return wN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vc(e)?"-0":e}}function L_(r){return{integerValue:""+r}}function TN(r,e){return Gb(e)?L_(e):fp(r,e)}/**
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
 */class ud{constructor(){this._=void 0}}function IN(r,e,t){return r instanceof Sl?(function(o,l){const h={fields:{[y_]:{stringValue:g_},[__]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&up(l)&&(l=id(l)),l&&(h.fields[v_]=l),{mapValue:h}})(t,e):r instanceof bl?O_(r,e):r instanceof Nl?M_(r,e):(function(o,l){const h=V_(o,l),p=s0(h)+s0(o.Ae);return Ef(h)&&Ef(o.Ae)?L_(p):fp(o.serializer,p)})(r,e)}function SN(r,e,t){return r instanceof bl?O_(r,e):r instanceof Nl?M_(r,e):t}function V_(r,e){return r instanceof Uc?(function(s){return Ef(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Sl extends ud{}class bl extends ud{constructor(e){super(),this.elements=e}}function O_(r,e){const t=F_(e);for(const s of r.elements)t.some((o=>gr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Nl extends ud{constructor(e){super(),this.elements=e}}function M_(r,e){let t=F_(e);for(const s of r.elements)t=t.filter((o=>!gr(o,s)));return{arrayValue:{values:t}}}class Uc extends ud{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function s0(r){return ht(r.integerValue||r.doubleValue)}function F_(r){return cp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class bN{constructor(e,t){this.field=e,this.transform=t}}function NN(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof bl&&o instanceof bl||s instanceof Nl&&o instanceof Nl?Bo(s.elements,o.elements,gr):s instanceof Uc&&o instanceof Uc?gr(s.Ae,o.Ae):s instanceof Sl&&o instanceof Sl})(r.transform,e.transform)}class kN{constructor(e,t){this.version=e,this.transformResults=t}}class Fr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fr}static exists(e){return new Fr(void 0,e)}static updateTime(e){return new Fr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class cd{}function U_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new z_(r.key,Fr.none()):new Ul(r.key,r.data,Fr.none());{const t=r.data,s=In.empty();let o=new Tt(Lt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Li(r.key,s,new Mn(o.toArray()),Fr.none())}}function CN(r,e,t){r instanceof Ul?(function(o,l,h){const p=o.value.clone(),y=o0(o.fieldTransforms,l,h.transformResults);p.setAll(y),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(r,e,t):r instanceof Li?(function(o,l,h){if(!Tc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const p=o0(o.fieldTransforms,l,h.transformResults),y=l.data;y.setAll(B_(o)),y.setAll(p),l.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function pl(r,e,t,s){return r instanceof Ul?(function(l,h,p,y){if(!Tc(l.precondition,h))return p;const v=l.value.clone(),w=a0(l.fieldTransforms,y,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(r,e,t,s):r instanceof Li?(function(l,h,p,y){if(!Tc(l.precondition,h))return p;const v=a0(l.fieldTransforms,y,h),w=h.data;return w.setAll(B_(l)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),p===null?null:p.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((E=>E.field)))})(r,e,t,s):(function(l,h,p){return Tc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p})(r,e,t)}function RN(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=V_(s.transform,o||null);l!=null&&(t===null&&(t=In.empty()),t.set(s.field,l))}return t||null}function i0(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Bo(s,o,((l,h)=>NN(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ul extends cd{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Li extends cd{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function B_(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function o0(r,e,t){const s=new Map;ze(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,p=e.data.field(l.field);s.set(l.field,SN(h,p,t[o]))}return s}function a0(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,IN(l,h,e))}return s}class z_ extends cd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PN extends cd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AN{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&CN(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=pl(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=pl(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=D_();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let p=this.applyToLocalView(h,l.mutatedFields);p=t.has(o.key)?null:p;const y=U_(h,p);y!==null&&s.set(o.key,y),h.isValidDocument()||h.convertToNoDocument(xe.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),je())}isEqual(e){return this.batchId===e.batchId&&Bo(this.mutations,e.mutations,((t,s)=>i0(t,s)))&&Bo(this.baseMutations,e.baseMutations,((t,s)=>i0(t,s)))}}class pp{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){ze(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return _N})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new pp(e,t,s,o)}}/**
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
 */class jN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class DN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var vt,Le;function LN(r){switch(r){case H.OK:return ve(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ve(15467,{code:r})}}function $_(r){if(r===void 0)return $r("GRPC error has no .code"),H.UNKNOWN;switch(r){case vt.OK:return H.OK;case vt.CANCELLED:return H.CANCELLED;case vt.UNKNOWN:return H.UNKNOWN;case vt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case vt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case vt.INTERNAL:return H.INTERNAL;case vt.UNAVAILABLE:return H.UNAVAILABLE;case vt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case vt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case vt.NOT_FOUND:return H.NOT_FOUND;case vt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case vt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case vt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case vt.ABORTED:return H.ABORTED;case vt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case vt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case vt.DATA_LOSS:return H.DATA_LOSS;default:return ve(39323,{code:r})}}(Le=vt||(vt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function VN(){return new TextEncoder}/**
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
 */const ON=new js([4294967295,4294967295],0);function l0(r){const e=VN().encode(r),t=new r_;return t.update(e),new Uint8Array(t.digest())}function u0(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new js([t,s],0),new js([o,l],0)]}class mp{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new al(`Invalid padding: ${t}`);if(s<0)throw new al(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new al(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new al(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=js.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(js.fromNumber(s)));return o.compare(ON)===1&&(o=new js([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=l0(e),[s,o]=u0(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);if(!this.we(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new mp(l,o,t);return s.forEach((p=>h.insert(p))),h}insert(e){if(this.ge===0)return;const t=l0(e),[s,o]=u0(t);for(let l=0;l<this.hashCount;l++){const h=this.ye(s,o,l);this.be(h)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class al extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dd{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Bl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new dd(xe.min(),o,new ot(Ae),qr(),je())}}class Bl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Bl(s,t,je(),je(),je())}}/**
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
 */class Ic{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=o}}class q_{constructor(e,t){this.targetId=e,this.Ce=t}}class W_{constructor(e,t,s=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class c0{constructor(){this.ve=0,this.Fe=d0(),this.Me=Vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=je(),t=je(),s=je();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ve(38017,{changeType:l})}})),new Bl(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=d0()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ze(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class MN{constructor(e){this.Ge=e,this.ze=new Map,this.je=qr(),this.He=dc(),this.Je=dc(),this.Ze=new ot(Ae)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:ve(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(If(l))if(s===0){const h=new he(l.path);this.et(t,h,Wt.newNoDocument(h,xe.min()))}else ze(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const p=this.ut(e),y=p?this.ct(p,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,p;try{h=Fs(s).toUint8Array()}catch(y){if(y instanceof m_)return Ri("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{p=new mp(h,o,l)}catch(y){return Ri(y instanceof al?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return p.ge===0?null:p}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.Ge.ht(),p=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(p)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,h)=>{const p=this.ot(h);if(p){if(l.current&&If(p.target)){const y=new he(p.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Wt.newNoDocument(y,e))}l.Be&&(t.set(h,l.ke()),l.Ke())}}));let s=je();this.Je.forEach(((l,h)=>{let p=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(l))})),this.je.forEach(((l,h)=>h.setReadTime(e)));const o=new dd(e,t,this.Ze,this.je,s);return this.je=qr(),this.He=dc(),this.Je=dc(),this.Ze=new ot(Ae),o}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new c0,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Tt(Ae),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Tt(Ae),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new c0),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function dc(){return new ot(he.comparator)}function d0(){return new ot(he.comparator)}const FN={asc:"ASCENDING",desc:"DESCENDING"},UN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BN={and:"AND",or:"OR"};class zN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nf(r,e){return r.useProto3Json||sd(e)?e:{value:e}}function Bc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function $N(r,e){return Bc(r,e.toTimestamp())}function fr(r){return ze(!!r,49232),xe.fromTimestamp((function(t){const s=Ms(t);return new Ze(s.seconds,s.nanos)})(r))}function gp(r,e){return kf(r,e).canonicalString()}function kf(r,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function G_(r){const e=Ke.fromString(r);return ze(X_(e),10190,{key:e.toString()}),e}function Cf(r,e){return gp(r.databaseId,e.path)}function nf(r,e){const t=G_(e);if(t.get(1)!==r.databaseId.projectId)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new he(Q_(t))}function K_(r,e){return gp(r.databaseId,e)}function qN(r){const e=G_(r);return e.length===4?Ke.emptyPath():Q_(e)}function Rf(r){return new Ke(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Q_(r){return ze(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function h0(r,e,t){return{name:Cf(r,e),fields:t.value.mapValue.fields}}function WN(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:ve(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(v,w){return v.useProto3Json?(ze(w===void 0||typeof w=="string",58123),Vt.fromBase64String(w||"")):(ze(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Vt.fromUint8Array(w||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&(function(v){const w=v.code===void 0?H.UNKNOWN:$_(v.code);return new se(w,v.message||"")})(h);t=new W_(s,o,l,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=nf(r,s.document.name),l=fr(s.document.updateTime),h=s.document.createTime?fr(s.document.createTime):xe.min(),p=new In({mapValue:{fields:s.document.fields}}),y=Wt.newFoundDocument(o,l,h,p),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Ic(v,w,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=nf(r,s.document),l=s.readTime?fr(s.readTime):xe.min(),h=Wt.newNoDocument(o,l),p=s.removedTargetIds||[];t=new Ic([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=nf(r,s.document),l=s.removedTargetIds||[];t=new Ic([],l,o,null)}else{if(!("filter"in e))return ve(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new DN(o,l),p=s.targetId;t=new q_(p,h)}}return t}function HN(r,e){let t;if(e instanceof Ul)t={update:h0(r,e.key,e.value)};else if(e instanceof z_)t={delete:Cf(r,e.key)};else if(e instanceof Li)t={update:h0(r,e.key,e.data),updateMask:tk(e.fieldMask)};else{if(!(e instanceof PN))return ve(16599,{dt:e.type});t={verify:Cf(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const p=h.transform;if(p instanceof Sl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof bl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Nl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Uc)return{fieldPath:h.field.canonicalString(),increment:p.Ae};throw ve(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:$N(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)})(r,e.precondition)),t}function GN(r,e){return r&&r.length>0?(ze(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?fr(o.updateTime):fr(l);return h.isEqual(xe.min())&&(h=fr(l)),new kN(h,o.transformResults||[])})(t,e)))):[]}function KN(r,e){return{documents:[K_(r,e.path)]}}function QN(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=K_(r,o);const l=(function(v){if(v.length!==0)return J_(Bn.create(v,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(v){if(v.length!==0)return v.map((w=>(function(I){return{field:Po(I.field),direction:XN(I.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=Nf(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:o}}function YN(r){let e=qN(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){ze(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(E){const I=Y_(E);return I instanceof Bn&&S_(I)?I.getFilters():[I]})(t.where));let h=[];t.orderBy&&(h=(function(E){return E.map((I=>(function(W){return new Il(Ao(W.field),(function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(I)))})(t.orderBy));let p=null;t.limit&&(p=(function(E){let I;return I=typeof E=="object"?E.value:E,sd(I)?null:I})(t.limit));let y=null;t.startAt&&(y=(function(E){const I=!!E.before,D=E.values||[];return new Fc(D,I)})(t.startAt));let v=null;return t.endAt&&(v=(function(E){const I=!E.before,D=E.values||[];return new Fc(D,I)})(t.endAt)),hN(e,o,h,l,p,"F",y,v)}function JN(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Y_(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ao(t.unaryFilter.field);return _t.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ao(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ao(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ao(t.unaryFilter.field);return _t.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}})(r):r.fieldFilter!==void 0?(function(t){return _t.create(Ao(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Bn.create(t.compositeFilter.filters.map((s=>Y_(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}})(t.compositeFilter.op))})(r):ve(30097,{filter:r})}function XN(r){return FN[r]}function ZN(r){return UN[r]}function ek(r){return BN[r]}function Po(r){return{fieldPath:r.canonicalString()}}function Ao(r){return Lt.fromServerFormat(r.fieldPath)}function J_(r){return r instanceof _t?(function(t){if(t.op==="=="){if(Zy(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NAN"}};if(Xy(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zy(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NAN"}};if(Xy(t.value))return{unaryFilter:{field:Po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Po(t.field),op:ZN(t.op),value:t.value}}})(r):r instanceof Bn?(function(t){const s=t.getFilters().map((o=>J_(o)));return s.length===1?s[0]:{compositeFilter:{op:ek(t.op),filters:s}}})(r):ve(54877,{filter:r})}function tk(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function X_(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function Z_(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class Cs{constructor(e,t,s,o,l=xe.min(),h=xe.min(),p=Vt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=y}withSequenceNumber(e){return new Cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nk{constructor(e){this.yt=e}}function rk(r){const e=YN({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?bf(e,e.limit,"L"):e}/**
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
 */class sk{constructor(){this.Sn=new ik}addToCollectionParentIndex(e,t){return this.Sn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Os.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Os.min())}updateCollectionGroup(e,t,s){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class ik{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Tt(Ke.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Tt(Ke.comparator)).toArray()}}/**
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
 */const f0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ex=41943040;class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(ex,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
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
 */class qo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new qo(0)}static ar(){return new qo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="LruGarbageCollector",ok=1048576;function m0([r,e],[t,s]){const o=Ae(r,t);return o===0?Ae(e,s):o}class ak{constructor(e){this.Pr=e,this.buffer=new Tt(m0),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();m0(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lk{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){oe(p0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){na(t)?oe(p0,"Ignoring IndexedDB error during garbage collection: ",t):await ta(t)}await this.Ar(3e5)}))}}class uk{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(rd.ce);const s=new ak(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(f0)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),f0):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,l,h,p,y,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,h=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(s=E,p=Date.now(),this.removeTargets(e,s,t)))).next((E=>(l=E,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((E=>(v=Date.now(),Co()<=Pe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${l} targets in `+(y-p)+`ms
	Removed ${E} documents in `+(v-y)+`ms
Total Duration: ${v-w}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:E}))))}}function ck(r,e){return new uk(r,e)}/**
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
 */class dk{constructor(){this.changes=new Di((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?G.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class fk{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&pl(s.mutation,o,Mn.empty(),Ze.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,je()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=je()){const o=Ei();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=ol();return l.forEach(((p,y)=>{h=h.insert(p,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Ei();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,je())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,p)=>{t.set(h,p)}))}))}computeViews(e,t,s,o){let l=qr();const h=fl(),p=(function(){return fl()})();return t.forEach(((y,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Li)?l=l.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),pl(w.mutation,v,w.mutation.getFieldMask(),Ze.now())):h.set(v.key,Mn.empty())})),this.recalculateAndSaveOverlays(e,l).next((y=>(y.forEach(((v,w)=>h.set(v,w))),t.forEach(((v,w)=>p.set(v,new hk(w,h.get(v)??null)))),p)))}recalculateAndSaveOverlays(e,t){const s=fl();let o=new ot(((h,p)=>h-p)),l=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const p of h)p.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let w=s.get(y)||Mn.empty();w=p.applyToLocalView(v,w),s.set(y,w);const E=(o.get(p.batchId)||je()).add(y);o=o.insert(p.batchId,E)}))})).next((()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const y=p.getNext(),v=y.key,w=y.value,E=D_();w.forEach((I=>{if(!l.has(I)){const D=U_(t.get(I),s.get(I));D!==null&&E.set(I,D),l=l.add(I)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,E))}return G.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return fN(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):C_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):G.resolve(Ei());let p=xl,y=l;return h.next((v=>G.forEach(v,((w,E)=>(p<E.largestBatchId&&(p=E.largestBatchId),l.get(w)?G.resolve():this.remoteDocumentCache.getEntry(e,w).next((I=>{y=y.insert(w,I)}))))).next((()=>this.populateOverlays(e,v,l))).next((()=>this.computeViews(e,y,v,je()))).next((w=>({batchId:p,changes:j_(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next((s=>{let o=ol();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=ol();return this.indexManager.getCollectionParents(e,l).next((p=>G.forEach(p,(y=>{const v=(function(E,I){return new ra(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,y.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next((w=>{w.forEach(((E,I)=>{h=h.insert(E,I)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((y,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Wt.newInvalidDocument(w)))}));let p=ol();return h.forEach(((y,v)=>{const w=l.get(y);w!==void 0&&pl(w.mutation,v,Mn.empty(),Ze.now()),ld(t,v)&&(p=p.insert(y,v))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return G.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:fr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:rk(o.bundledQuery),readTime:fr(o.readTime)}})(t)),G.resolve()}}/**
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
 */class mk{constructor(){this.overlays=new ot(he.comparator),this.Lr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ei();return G.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.bt(e,t,l)})),G.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(s)),G.resolve()}getOverlaysForCollection(e,t,s){const o=Ei(),l=t.length+1,h=new he(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const y=p.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&y.largestBatchId>s&&o.set(y.getKey(),y)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new ot(((v,w)=>v-w));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=l.get(v.largestBatchId);w===null&&(w=Ei(),l=l.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const p=Ei(),y=l.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,w)=>p.set(v,w))),!(p.size()>=o)););return G.resolve(p)}bt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new jN(t,s));let l=this.Lr.get(t);l===void 0&&(l=je(),this.Lr.set(t,l)),this.Lr.set(t,l.add(s.key))}}/**
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
 */class gk{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class yp{constructor(){this.kr=new Tt(Ct.Kr),this.qr=new Tt(Ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Ct(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Ct(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new he(new Ke([])),s=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.qr.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new he(new Ke([])),s=new Ct(t,e),o=new Ct(t,e+1);let l=je();return this.qr.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new Ct(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return he.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||he.comparator(e.key,t.key)}}/**
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
 */class yk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Tt(Ct.Kr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new AN(l,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Jr=this.Jr.add(new Ct(p.key,l)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?lp:this.Yn-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.Jr.forEachInRange([s,o],(h=>{const p=this.Zr(h.Hr);l.push(p)})),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Tt(Ae);return t.forEach((o=>{const l=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([l,h],(p=>{s=s.add(p.Hr)}))})),G.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;he.isDocumentKey(l)||(l=l.child(""));const h=new Ct(new he(l),0);let p=new Tt(Ae);return this.Jr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(p=p.add(y.Hr)),!0)}),h),G.resolve(this.Yr(p))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){ze(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return G.forEach(t.mutations,(o=>{const l=new Ct(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new Ct(t,0),o=this.Jr.firstAfterOrEqual(s);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class vk{constructor(e){this.ti=e,this.docs=(function(){return new ot(he.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return G.resolve(s?s.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let s=qr();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Wt.newInvalidDocument(o))})),G.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=qr();const h=t.path,p=new he(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(p);for(;y.hasNext();){const{key:v,value:{document:w}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||$b(zb(w),s)<=0||(o.has(w.key)||ld(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ve(9500)}ni(e,t){return G.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new _k(this)}getSize(e){return G.resolve(this.size)}}class _k extends dk{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),G.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class xk{constructor(e){this.persistence=e,this.ri=new Di((t=>dp(t)),hp),this.lastRemoteSnapshotVersion=xe.min(),this.highestTargetId=0,this.ii=0,this.si=new yp,this.targetCount=0,this.oi=qo._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),G.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new qo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.lr(t),G.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ri.forEach(((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.ri.delete(h),l.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),G.waitFor(l).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return G.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),G.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return G.resolve(s)}containsKey(e,t){return G.resolve(this.si.containsKey(t))}}/**
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
 */class tx{constructor(e,t){this._i={},this.overlays={},this.ai=new rd(0),this.ui=!1,this.ui=!0,this.ci=new gk,this.referenceDelegate=e(this),this.li=new xk(this),this.indexManager=new sk,this.remoteDocumentCache=(function(o){return new vk(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new nk(t),this.Pi=new pk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new yk(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const o=new wk(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((l=>this.referenceDelegate.Ii(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return G.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class wk extends Wb{constructor(e){super(),this.currentSequenceNumber=e}}class vp{constructor(e){this.persistence=e,this.Ri=new yp,this.Ai=null}static Vi(e){return new vp(e)}get di(){if(this.Ai)return this.Ai;throw ve(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),G.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.di,(s=>{const o=he.fromPath(s);return this.mi(e,o).next((l=>{l||t.removeEntry(o,xe.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return G.or([()=>G.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class zc{constructor(e,t){this.persistence=e,this.fi=new Di((s=>Kb(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=ck(this,t)}static Vi(e,t){return new zc(e,t)}Ti(){}Ii(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return G.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((l=>l?G.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(h=>this.wr(e,h,t).next((p=>{p||(s++,l.removeEntry(h,xe.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),G.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),G.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wc(e.data.value)),t}wr(e,t,s){return G.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return G.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class _p{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=o}static Es(e,t){let s=je(),o=je();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new _p(e,t.fromCache,s,o)}}/**
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
 */class Ek{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Tk{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return YT()?8:Hb(Ht())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.gs(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ps(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new Ek;return this.ys(e,t,h).next((p=>{if(l.result=p,this.As)return this.ws(e,t,h,p.size)}))})).next((()=>l.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(Co()<=Pe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(Co()<=Pe.DEBUG&&oe("QueryEngine","Query:",Ro(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(Co()<=Pe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hr(t))):G.resolve())}gs(e,t){if(r0(t))return G.resolve(null);let s=hr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=bf(t,null,"F"),s=hr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=je(...l);return this.fs.getDocuments(e,h).next((p=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.bs(t,p);return this.Ss(t,v,h,y.readTime)?this.gs(e,bf(t,null,"F")):this.Ds(e,v,t,y)}))))})))))}ps(e,t,s,o){return r0(t)||o.isEqual(xe.min())?G.resolve(null):this.fs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ss(t,h,s,o)?G.resolve(null):(Co()<=Pe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ro(t)),this.Ds(e,h,t,Bb(o,xl)).next((p=>p)))}))}bs(e,t){let s=new Tt(P_(e));return t.forEach(((o,l)=>{ld(e,l)&&(s=s.add(l))})),s}Ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,s){return Co()<=Pe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Ro(t)),this.fs.getDocumentsMatchingQuery(e,t,Os.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="LocalStore",Ik=3e8;class Sk{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new ot(Ae),this.Fs=new Di((l=>dp(l)),hp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fk(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function bk(r,e,t,s){return new Sk(r,e,t,s)}async function nx(r,e){const t=Ee(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],p=[];let y=je();for(const v of o){h.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}for(const v of l){p.push(v.batchId);for(const w of v.mutations)y=y.add(w.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Ns:v,removedBatchIds:h,addedBatchIds:p})))}))}))}function Nk(r,e){const t=Ee(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(p,y,v,w){const E=v.batch,I=E.keys();let D=G.resolve();return I.forEach((W=>{D=D.next((()=>w.getEntry(y,W))).next((q=>{const z=v.docVersions.get(W);ze(z!==null,48541),q.version.compareTo(z)<0&&(E.applyToRemoteDocument(q,v),q.isValidDocument()&&(q.setReadTime(v.commitVersion),w.addEntry(q)))}))})),D.next((()=>p.mutationQueue.removeMutationBatch(y,E)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let y=je();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(y=y.add(p.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function rx(r){const e=Ee(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function kk(r,e){const t=Ee(r),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const p=[];e.targetChanges.forEach(((w,E)=>{const I=o.get(E);if(!I)return;p.push(t.li.removeMatchingKeys(l,w.removedDocuments,E).next((()=>t.li.addMatchingKeys(l,w.addedDocuments,E))));let D=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?D=D.withResumeToken(Vt.EMPTY_BYTE_STRING,xe.min()).withLastLimboFreeSnapshotVersion(xe.min()):w.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(w.resumeToken,s)),o=o.insert(E,D),(function(q,z,K){return q.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=Ik?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(I,D,w)&&p.push(t.li.updateTargetData(l,D))}));let y=qr(),v=je();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),p.push(Ck(l,h,e.documentUpdates).next((w=>{y=w.Bs,v=w.Ls}))),!s.isEqual(xe.min())){const w=t.li.getLastRemoteSnapshotVersion(l).next((E=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,s)));p.push(w)}return G.waitFor(p).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,y,v))).next((()=>y))})).then((l=>(t.vs=o,l)))}function Ck(r,e,t){let s=je(),o=je();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=qr();return t.forEach(((p,y)=>{const v=l.get(p);y.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(p)),y.isNoDocument()&&y.version.isEqual(xe.min())?(e.removeEntry(p,y.readTime),h=h.insert(p,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(p,y)):oe(xp,"Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",y.version)})),{Bs:h,Ls:o}}))}function Rk(r,e){const t=Ee(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=lp),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Pk(r,e){const t=Ee(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((l=>l?(o=l,G.resolve(o)):t.li.allocateTargetId(s).next((h=>(o=new Cs(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Pf(r,e,t){const s=Ee(r),o=s.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!na(h))throw h;oe(xp,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function g0(r,e,t){const s=Ee(r);let o=xe.min(),l=je();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,w){const E=Ee(y),I=E.Fs.get(w);return I!==void 0?G.resolve(E.vs.get(I)):E.li.getTargetData(v,w)})(s,h,hr(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,p.targetId).next((y=>{l=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:xe.min(),t?l:je()))).next((p=>(Ak(s,gN(e),p),{documents:p,ks:l})))))}function Ak(r,e,t){let s=r.Ms.get(e)||xe.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.Ms.set(e,s)}class y0{constructor(){this.activeTargetIds=EN()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jk{constructor(){this.vo=new y0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new y0,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Dk{Mo(e){}shutdown(){}}/**
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
 */const v0="ConnectivityMonitor";class _0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){oe(v0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){oe(v0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let hc=null;function Af(){return hc===null?hc=(function(){return 268435456+Math.round(2147483648*Math.random())})():hc++,"0x"+hc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="RestConnection",Lk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Vk{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Oc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=Af(),p=this.Qo(e,t.toUriEncodedString());oe(rf,`Sending RPC '${e}' ${h}:`,p,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(y,o,l);const{host:v}=new URL(p),w=Jo(v);return this.zo(e,p,y,s,w).then((E=>(oe(rf,`Received RPC '${e}' ${h}: `,E),E)),(E=>{throw Ri(rf,`RPC '${e}' ${h} failed with error: `,E,"url: ",p,"request:",s),E}))}jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ea})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const s=Lk[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class Ok{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const $t="WebChannelConnection",tl=(r,e,t)=>{r.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Oo extends Vk{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Oo.c_){const e=a_();tl(e,o_.STAT_EVENT,(t=>{t.stat===_f.PROXY?oe($t,"STAT_EVENT: detected buffering proxy"):t.stat===_f.NOPROXY&&oe($t,"STAT_EVENT: detected no buffering proxy")})),Oo.c_=!0}}zo(e,t,s,o,l){const h=Af();return new Promise(((p,y)=>{const v=new s_;v.setWithCredentials(!0),v.listenOnce(i_.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case xc.NO_ERROR:const E=v.getResponseJson();oe($t,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(E)),p(E);break;case xc.TIMEOUT:oe($t,`RPC '${e}' ${h} timed out`),y(new se(H.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const I=v.getStatus();if(oe($t,`RPC '${e}' ${h} failed with status:`,I,"response text:",v.getResponseText()),I>0){let D=v.getResponseJson();Array.isArray(D)&&(D=D[0]);const W=D?.error;if(W&&W.status&&W.message){const q=(function(K){const J=K.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(J)>=0?J:H.UNKNOWN})(W.status);y(new se(q,W.message))}else y(new se(H.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new se(H.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{oe($t,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);oe($t,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)}))}T_(e,t,s){const o=Af(),l=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Go(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const v=l.join("");oe($t,`Creating RPC '${e}' stream ${o}: ${v}`,p);const w=h.createWebChannel(v,p);this.I_(w);let E=!1,I=!1;const D=new Ok({Ho:W=>{I?oe($t,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(E||(oe($t,`Opening RPC '${e}' stream ${o} transport.`),w.open(),E=!0),oe($t,`RPC '${e}' stream ${o} sending:`,W),w.send(W))},Jo:()=>w.close()});return tl(w,il.EventType.OPEN,(()=>{I||(oe($t,`RPC '${e}' stream ${o} transport opened.`),D.i_())})),tl(w,il.EventType.CLOSE,(()=>{I||(I=!0,oe($t,`RPC '${e}' stream ${o} transport closed`),D.o_(),this.E_(w))})),tl(w,il.EventType.ERROR,(W=>{I||(I=!0,Ri($t,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),D.o_(new se(H.UNAVAILABLE,"The operation could not be completed")))})),tl(w,il.EventType.MESSAGE,(W=>{if(!I){const q=W.data[0];ze(!!q,16349);const z=q,K=z?.error||z[0]?.error;if(K){oe($t,`RPC '${e}' stream ${o} received error:`,K);const J=K.status;let te=(function(Ie){const R=vt[Ie];if(R!==void 0)return $_(R)})(J),ge=K.message;J==="NOT_FOUND"&&ge.includes("database")&&ge.includes("does not exist")&&ge.includes(this.databaseId.database)&&Ri(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),te===void 0&&(te=H.INTERNAL,ge="Unknown error status: "+J+" with message "+K.message),I=!0,D.o_(new se(te,ge)),w.close()}else oe($t,`RPC '${e}' stream ${o} received:`,q),D.__(q)}})),Oo.u_(),setTimeout((()=>{D.s_()}),0),D}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return l_()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(r){return new Oo(r)}function sf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(r){return new zN(r,!0)}/**
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
 */Oo.c_=!1;class sx{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const x0="PersistentStream";class ix{constructor(e,t,s,o,l,h,p,y){this.Ci=e,this.b_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new sx(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?($r(t.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new se(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return oe(x0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(oe(x0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fk extends ix{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=WN(this.serializer,e),s=(function(l){if(!("targetChange"in l))return xe.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?xe.min():h.readTime?fr(h.readTime):xe.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=Rf(this.serializer),t.addTarget=(function(l,h){let p;const y=h.target;if(p=If(y)?{documents:KN(l,y)}:{query:QN(l,y).ft},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=H_(l,h.resumeToken);const v=Nf(l,h.expectedCount);v!==null&&(p.expectedCount=v)}else if(h.snapshotVersion.compareTo(xe.min())>0){p.readTime=Bc(l,h.snapshotVersion.toTimestamp());const v=Nf(l,h.expectedCount);v!==null&&(p.expectedCount=v)}return p})(this.serializer,e);const s=JN(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=Rf(this.serializer),t.removeTarget=e,this.K_(t)}}class Uk extends ix{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=GN(e.writeResults,e.commitTime),s=fr(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=Rf(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>HN(this.serializer,s)))};this.K_(t)}}/**
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
 */class Bk{}class zk extends Bk{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,kf(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new se(H.UNKNOWN,l.toString())}))}jo(e,t,s,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,p])=>this.connection.jo(e,kf(t,s),o,h,p,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new se(H.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function $k(r,e,t,s){return new zk(r,e,t,s)}class qk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?($r(t),this.aa=!1):oe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Pi="RemoteStore";class Wk{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{Vi(this)&&(oe(Pi,"Restarting streams for network reachability change."),await(async function(y){const v=Ee(y);v.Ea.add(4),await zl(v),v.Va.set("Unknown"),v.Ea.delete(4),await fd(v)})(this))}))})),this.Va=new qk(s,o)}}async function fd(r){if(Vi(r))for(const e of r.Ra)await e(!0)}async function zl(r){for(const e of r.Ra)await e(!1)}function ox(r,e){const t=Ee(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ip(t)?Tp(t):sa(t).O_()&&Ep(t,e))}function wp(r,e){const t=Ee(r),s=sa(t);t.Ia.delete(e),s.O_()&&ax(t,e),t.Ia.size===0&&(s.O_()?s.L_():Vi(t)&&t.Va.set("Unknown"))}function Ep(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(xe.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}sa(r).Z_(e)}function ax(r,e){r.da.$e(e),sa(r).X_(e)}function Tp(r){r.da=new MN({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),sa(r).start(),r.Va.ua()}function Ip(r){return Vi(r)&&!sa(r).x_()&&r.Ia.size>0}function Vi(r){return Ee(r).Ea.size===0}function lx(r){r.da=void 0}async function Hk(r){r.Va.set("Online")}async function Gk(r){r.Ia.forEach(((e,t)=>{Ep(r,e)}))}async function Kk(r,e){lx(r),Ip(r)?(r.Va.ha(e),Tp(r)):r.Va.set("Unknown")}async function Qk(r,e,t){if(r.Va.set("Online"),e instanceof W_&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const p of l.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ia.delete(p),o.da.removeTarget(p))})(r,e)}catch(s){oe(Pi,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $c(r,s)}else if(e instanceof Ic?r.da.Xe(e):e instanceof q_?r.da.st(e):r.da.tt(e),!t.isEqual(xe.min()))try{const s=await rx(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const p=l.da.Tt(h);return p.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const w=l.Ia.get(v);w&&l.Ia.set(v,w.withResumeToken(y.resumeToken,h))}})),p.targetMismatches.forEach(((y,v)=>{const w=l.Ia.get(y);if(!w)return;l.Ia.set(y,w.withResumeToken(Vt.EMPTY_BYTE_STRING,w.snapshotVersion)),ax(l,y);const E=new Cs(w.target,y,v,w.sequenceNumber);Ep(l,E)})),l.remoteSyncer.applyRemoteEvent(p)})(r,t)}catch(s){oe(Pi,"Failed to raise snapshot:",s),await $c(r,s)}}async function $c(r,e,t){if(!na(e))throw e;r.Ea.add(1),await zl(r),r.Va.set("Offline"),t||(t=()=>rx(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{oe(Pi,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await fd(r)}))}function ux(r,e){return e().catch((t=>$c(r,t,e)))}async function pd(r){const e=Ee(r),t=Bs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lp;for(;Yk(e);)try{const o=await Rk(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,Jk(e,o)}catch(o){await $c(e,o)}cx(e)&&dx(e)}function Yk(r){return Vi(r)&&r.Ta.length<10}function Jk(r,e){r.Ta.push(e);const t=Bs(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function cx(r){return Vi(r)&&!Bs(r).x_()&&r.Ta.length>0}function dx(r){Bs(r).start()}async function Xk(r){Bs(r).ra()}async function Zk(r){const e=Bs(r);for(const t of r.Ta)e.ea(t.mutations)}async function eC(r,e,t){const s=r.Ta.shift(),o=pp.from(s,e,t);await ux(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await pd(r)}async function tC(r,e){e&&Bs(r).Y_&&await(async function(s,o){if((function(h){return LN(h)&&h!==H.ABORTED})(o.code)){const l=s.Ta.shift();Bs(s).B_(),await ux(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await pd(s)}})(r,e),cx(r)&&dx(r)}async function w0(r,e){const t=Ee(r);t.asyncQueue.verifyOperationInProgress(),oe(Pi,"RemoteStore received new credentials");const s=Vi(t);t.Ea.add(3),await zl(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await fd(t)}async function nC(r,e){const t=Ee(r);e?(t.Ea.delete(2),await fd(t)):e||(t.Ea.add(2),await zl(t),t.Va.set("Unknown"))}function sa(r){return r.ma||(r.ma=(function(t,s,o){const l=Ee(t);return l.sa(),new Fk(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:Hk.bind(null,r),Yo:Gk.bind(null,r),t_:Kk.bind(null,r),J_:Qk.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),Ip(r)?Tp(r):r.Va.set("Unknown")):(await r.ma.stop(),lx(r))}))),r.ma}function Bs(r){return r.fa||(r.fa=(function(t,s,o){const l=Ee(t);return l.sa(),new Uk(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Xk.bind(null,r),t_:tC.bind(null,r),ta:Zk.bind(null,r),na:eC.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await pd(r)):(await r.fa.stop(),r.Ta.length>0&&(oe(Pi,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Sp{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Ds,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,p=new Sp(e,t,h,o,l);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bp(r,e){if($r("AsyncQueue",`${e}: ${r}`),na(r))return new se(H.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Mo{static emptySet(e){return new Mo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=ol(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Mo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class E0{constructor(){this.ga=new ot(he.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ve(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Wo{constructor(e,t,s,o,l,h,p,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((p=>{h.push({type:0,doc:p})})),new Wo(e,t,Mo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ad(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class rC{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class sC{constructor(){this.queries=T0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ee(t),l=o.queries;o.queries=T0(),l.forEach(((h,p)=>{for(const y of p.ba)y.onError(s)}))})(this,new se(H.ABORTED,"Firestore shutting down"))}}function T0(){return new Di((r=>R_(r)),ad)}async function hx(r,e){const t=Ee(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.Da()&&(s=2):(l=new rC,s=e.Da()?0:1);try{switch(s){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=bp(h,`Initialization of query '${Ro(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,l),l.ba.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&Np(t)}async function fx(r,e){const t=Ee(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.ba.indexOf(e);h>=0&&(l.ba.splice(h,1),l.ba.length===0?o=e.Da()?0:1:!l.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function iC(r,e){const t=Ee(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const p of h.ba)p.Fa(o)&&(s=!0);h.wa=o}}s&&Np(t)}function oC(r,e,t){const s=Ee(r),o=s.queries.get(e);if(o)for(const l of o.ba)l.onError(t);s.queries.delete(e)}function Np(r){r.Ca.forEach((e=>{e.next()}))}var jf,I0;(I0=jf||(jf={})).Ma="default",I0.Cache="cache";class px{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Wo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==jf.Cache}}/**
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
 */class mx{constructor(e){this.key=e}}class gx{constructor(e){this.key=e}}class aC{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=je(),this.mutatedKeys=je(),this.eu=P_(e),this.tu=new Mo(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new E0,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,E)=>{const I=o.get(w),D=ld(this.query,E)?E:null,W=!!I&&this.mutatedKeys.has(I.key),q=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let z=!1;I&&D?I.data.isEqual(D.data)?W!==q&&(s.track({type:3,doc:D}),z=!0):this.su(I,D)||(s.track({type:2,doc:D}),z=!0,(y&&this.eu(D,y)>0||v&&this.eu(D,v)<0)&&(p=!0)):!I&&D?(s.track({type:0,doc:D}),z=!0):I&&!D&&(s.track({type:1,doc:I}),z=!0,(y||v)&&(p=!0)),z&&(D?(h=h.add(D),l=q?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),s.track({type:1,doc:w})}return{tu:h,iu:s,Ss:p,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((w,E)=>(function(D,W){const q=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{Vt:z})}};return q(D)-q(W)})(w.type,E.type)||this.eu(w.doc,E.doc))),this.ou(s),o=o??!1;const p=t&&!o?this._u():[],y=this.Ya.size===0&&this.current&&!o?1:0,v=y!==this.Xa;return this.Xa=y,h.length!==0||v?{snapshot:new Wo(this.query,e.tu,l,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new E0,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=je(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new gx(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new mx(s))})),t}cu(e){this.Za=e.ks,this.Ya=je();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Wo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const kp="SyncEngine";class lC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class uC{constructor(e){this.key=e,this.hu=!1}}class cC{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new Di((p=>R_(p)),ad),this.Iu=new Map,this.Eu=new Set,this.Ru=new ot(he.comparator),this.Au=new Map,this.Vu=new yp,this.du={},this.mu=new Map,this.fu=qo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function dC(r,e,t=!0){const s=Ex(r);let o;const l=s.Tu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await yx(s,e,t,!0),o}async function hC(r,e){const t=Ex(r);await yx(t,e,!0,!1)}async function yx(r,e,t,s){const o=await Pk(r.localStore,hr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let p;return s&&(p=await fC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&ox(r.remoteStore,o),p}async function fC(r,e,t,s,o){r.pu=(E,I,D)=>(async function(q,z,K,J){let te=z.view.ru(K);te.Ss&&(te=await g0(q.localStore,z.query,!1).then((({documents:R})=>z.view.ru(R,te))));const ge=J&&J.targetChanges.get(z.targetId),Te=J&&J.targetMismatches.get(z.targetId)!=null,Ie=z.view.applyChanges(te,q.isPrimaryClient,ge,Te);return b0(q,z.targetId,Ie.au),Ie.snapshot})(r,E,I,D);const l=await g0(r.localStore,e,!0),h=new aC(e,l.ks),p=h.ru(l.documents),y=Bl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(p,r.isPrimaryClient,y);b0(r,t,v.au);const w=new lC(e,t,h);return r.Tu.set(e,w),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),v.snapshot}async function pC(r,e,t){const s=Ee(r),o=s.Tu.get(e),l=s.Iu.get(o.targetId);if(l.length>1)return s.Iu.set(o.targetId,l.filter((h=>!ad(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Pf(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&wp(s.remoteStore,o.targetId),Df(s,o.targetId)})).catch(ta)):(Df(s,o.targetId),await Pf(s.localStore,o.targetId,!0))}async function mC(r,e){const t=Ee(r),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),wp(t.remoteStore,s.targetId))}async function gC(r,e,t){const s=TC(r);try{const o=await(function(h,p){const y=Ee(h),v=Ze.now(),w=p.reduce(((D,W)=>D.add(W.key)),je());let E,I;return y.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let W=qr(),q=je();return y.xs.getEntries(D,w).next((z=>{W=z,W.forEach(((K,J)=>{J.isValidDocument()||(q=q.add(K))}))})).next((()=>y.localDocuments.getOverlayedDocuments(D,W))).next((z=>{E=z;const K=[];for(const J of p){const te=RN(J,E.get(J.key).overlayedDocument);te!=null&&K.push(new Li(J.key,te,E_(te.value.mapValue),Fr.exists(!0)))}return y.mutationQueue.addMutationBatch(D,v,K,p)})).next((z=>{I=z;const K=z.applyToLocalDocumentSet(E,q);return y.documentOverlayCache.saveOverlays(D,z.batchId,K)}))})).then((()=>({batchId:I.batchId,changes:j_(E)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,p,y){let v=h.du[h.currentUser.toKey()];v||(v=new ot(Ae)),v=v.insert(p,y),h.du[h.currentUser.toKey()]=v})(s,o.batchId,t),await $l(s,o.changes),await pd(s.remoteStore)}catch(o){const l=bp(o,"Failed to persist write");t.reject(l)}}async function vx(r,e){const t=Ee(r);try{const s=await kk(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Au.get(l);h&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.hu=!0:o.modifiedDocuments.size>0?ze(h.hu,14607):o.removedDocuments.size>0&&(ze(h.hu,42227),h.hu=!1))})),await $l(t,s,e)}catch(s){await ta(s)}}function S0(r,e,t){const s=Ee(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((l,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(h,p){const y=Ee(h);y.onlineState=p;let v=!1;y.queries.forEach(((w,E)=>{for(const I of E.ba)I.va(p)&&(v=!0)})),v&&Np(y)})(s.eventManager,e),o.length&&s.Pu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yC(r,e,t){const s=Ee(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),l=o&&o.key;if(l){let h=new ot(he.comparator);h=h.insert(l,Wt.newNoDocument(l,xe.min()));const p=je().add(l),y=new dd(xe.min(),new Map,new ot(Ae),h,p);await vx(s,y),s.Ru=s.Ru.remove(l),s.Au.delete(e),Cp(s)}else await Pf(s.localStore,e,!1).then((()=>Df(s,e,t))).catch(ta)}async function vC(r,e){const t=Ee(r),s=e.batch.batchId;try{const o=await Nk(t.localStore,e);xx(t,s,null),_x(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await $l(t,o)}catch(o){await ta(o)}}async function _C(r,e,t){const s=Ee(r);try{const o=await(function(h,p){const y=Ee(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let w;return y.mutationQueue.lookupMutationBatch(v,p).next((E=>(ze(E!==null,37113),w=E.keys(),y.mutationQueue.removeMutationBatch(v,E)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,w,p))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w))).next((()=>y.localDocuments.getDocuments(v,w)))}))})(s.localStore,e);xx(s,e,t),_x(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await $l(s,o)}catch(o){await ta(o)}}function _x(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function xx(r,e,t){const s=Ee(r);let o=s.du[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function Df(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),t&&r.Pu.yu(s,t);r.Iu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||wx(r,s)}))}function wx(r,e){r.Eu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(wp(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),Cp(r))}function b0(r,e,t){for(const s of t)s instanceof mx?(r.Vu.addReference(s.key,e),xC(r,s)):s instanceof gx?(oe(kp,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||wx(r,s.key)):ve(19791,{wu:s})}function xC(r,e){const t=e.key,s=t.path.canonicalString();r.Ru.get(t)||r.Eu.has(s)||(oe(kp,"New document in limbo: "+t),r.Eu.add(s),Cp(r))}function Cp(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new he(Ke.fromString(e)),s=r.fu.next();r.Au.set(s,new uC(t)),r.Ru=r.Ru.insert(t,s),ox(r.remoteStore,new Cs(hr(od(t.path)),s,"TargetPurposeLimboResolution",rd.ce))}}async function $l(r,e,t){const s=Ee(r),o=[],l=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((p,y)=>{h.push(s.pu(y,e,t).then((v=>{if((v||t)&&s.isPrimaryClient){const w=v?!v.fromCache:t?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,w?"current":"not-current")}if(v){o.push(v);const w=_p.Es(y.targetId,v);l.push(w)}})))})),await Promise.all(h),s.Pu.J_(o),await(async function(y,v){const w=Ee(y);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>G.forEach(v,(I=>G.forEach(I.Ts,(D=>w.persistence.referenceDelegate.addReference(E,I.targetId,D))).next((()=>G.forEach(I.Is,(D=>w.persistence.referenceDelegate.removeReference(E,I.targetId,D)))))))))}catch(E){if(!na(E))throw E;oe(xp,"Failed to update sequence numbers: "+E)}for(const E of v){const I=E.targetId;if(!E.fromCache){const D=w.vs.get(I),W=D.snapshotVersion,q=D.withLastLimboFreeSnapshotVersion(W);w.vs=w.vs.insert(I,q)}}})(s.localStore,l))}async function wC(r,e){const t=Ee(r);if(!t.currentUser.isEqual(e)){oe(kp,"User change. New user:",e.toKey());const s=await nx(t.localStore,e);t.currentUser=e,(function(l,h){l.mu.forEach((p=>{p.forEach((y=>{y.reject(new se(H.CANCELLED,h))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $l(t,s.Ns)}}function EC(r,e){const t=Ee(r),s=t.Au.get(e);if(s&&s.hu)return je().add(s.key);{let o=je();const l=t.Iu.get(e);if(!l)return o;for(const h of l){const p=t.Tu.get(h);o=o.unionWith(p.view.nu)}return o}}function Ex(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=vx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yC.bind(null,e),e.Pu.J_=iC.bind(null,e.eventManager),e.Pu.yu=oC.bind(null,e.eventManager),e}function TC(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_C.bind(null,e),e}class qc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return bk(this.persistence,new Tk,e.initialUser,this.serializer)}Cu(e){return new tx(vp.Vi,this.serializer)}Du(e){return new jk}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qc.provider={build:()=>new qc};class IC extends qc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ze(this.persistence.referenceDelegate instanceof zc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new lk(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new tx((s=>zc.Vi(s,t)),this.serializer)}}class Lf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>S0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wC.bind(null,this.syncEngine),await nC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sC})()}createDatastore(e){const t=hd(e.databaseInfo.databaseId),s=Mk(e.databaseInfo);return $k(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,p){return new Wk(s,o,l,h,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>S0(this.syncEngine,t,0)),(function(){return _0.v()?new _0:new Dk})())}createSyncEngine(e,t){return(function(o,l,h,p,y,v,w){const E=new cC(o,l,h,p,y,v);return w&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=Ee(t);oe(Pi,"RemoteStore shutting down."),s.Ea.add(5),await zl(s),s.Aa.shutdown(),s.Va.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Lf.provider={build:()=>new Lf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Tx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):$r("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const zs="FirestoreClient";class SC{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=qt.UNAUTHENTICATED,this.clientId=ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{oe(zs,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(oe(zs,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ds;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=bp(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function of(r,e){r.asyncQueue.verifyOperationInProgress(),oe(zs,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await nx(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function N0(r,e){r.asyncQueue.verifyOperationInProgress();const t=await bC(r);oe(zs,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>w0(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>w0(e.remoteStore,o))),r._onlineComponents=e}async function bC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){oe(zs,"Using user provided OfflineComponentProvider");try{await of(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ri("Error using user provided cache. Falling back to memory cache: "+t),await of(r,new qc)}}else oe(zs,"Using default OfflineComponentProvider"),await of(r,new IC(void 0));return r._offlineComponents}async function Ix(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(oe(zs,"Using user provided OnlineComponentProvider"),await N0(r,r._uninitializedComponentsProvider._online)):(oe(zs,"Using default OnlineComponentProvider"),await N0(r,new Lf))),r._onlineComponents}function NC(r){return Ix(r).then((e=>e.syncEngine))}async function Vf(r){const e=await Ix(r),t=e.eventManager;return t.onListen=dC.bind(null,e.syncEngine),t.onUnlisten=pC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mC.bind(null,e.syncEngine),t}function kC(r,e,t,s){const o=new Tx(s),l=new px(e,o,t);return r.asyncQueue.enqueueAndForget((async()=>hx(await Vf(r),l))),()=>{o.Nu(),r.asyncQueue.enqueueAndForget((async()=>fx(await Vf(r),l)))}}function CC(r,e,t={}){const s=new Ds;return r.asyncQueue.enqueueAndForget((async()=>(function(l,h,p,y,v){const w=new Tx({next:I=>{w.Nu(),h.enqueueAndForget((()=>fx(l,E)));const D=I.docs.has(p);!D&&I.fromCache?v.reject(new se(H.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&I.fromCache&&y&&y.source==="server"?v.reject(new se(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(I)},error:I=>v.reject(I)}),E=new px(od(p.path),w,{includeMetadataChanges:!0,Ka:!0});return hx(l,E)})(await Vf(r),r.asyncQueue,e,t,s))),s.promise}function RC(r,e){const t=new Ds;return r.asyncQueue.enqueueAndForget((async()=>gC(await NC(r),e,t))),t.promise}/**
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
 */function Sx(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC="ComponentProvider",k0=new Map;function AC(r,e,t,s,o){return new Jb(r,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,Sx(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx="firestore.googleapis.com",C0=!0;class R0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bx,this.ssl=C0}else this.host=e.host,this.ssl=e.ssl??C0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ex;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ok)throw new se(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ub("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sx(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class md{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new R0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new R0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Rb;switch(s.type){case"firstParty":return new Db(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=k0.get(t);s&&(oe(PC,"Removing Datastore"),k0.delete(t),s.terminate())})(this),Promise.resolve()}}function jC(r,e,t,s={}){r=Ls(r,md);const o=Jo(e),l=r._getSettings(),h={...l,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${t}`;o&&(pv(`https://${p}`),mv("Firestore",!0)),l.host!==bx&&l.host!==p&&Ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...l,host:p,ssl:o,emulatorOptions:s};if(!Si(y,h)&&(r._setSettings(y),s.mockUserToken)){let v,w;if(typeof s.mockUserToken=="string")v=s.mockUserToken,w=qt.MOCK_USER;else{v=BT(s.mockUserToken,r._app?.options.projectId);const E=s.mockUserToken.sub||s.mockUserToken.user_id;if(!E)throw new se(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new qt(E)}r._authCredentials=new Pb(new c_(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Oi(this.firestore,e,this._query)}}class ft{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Fl(t,ft._jsonSchema))return new ft(e,s||null,new he(Ke.fromString(t.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:xt("string",ft._jsonSchemaVersion),referencePath:xt("string")};class Vs extends Oi{constructor(e,t,s){super(e,t,od(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new he(e))}withConverter(e){return new Vs(this.firestore,e,this._path)}}function Nx(r,e,...t){if(r=Gt(r),d_("collection","path",e),r instanceof md){const s=Ke.fromString(e,...t);return $y(s),new Vs(r,null,s)}{if(!(r instanceof ft||r instanceof Vs))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ke.fromString(e,...t));return $y(s),new Vs(r.firestore,null,s)}}function Wc(r,e,...t){if(r=Gt(r),arguments.length===1&&(e=ap.newId()),d_("doc","path",e),r instanceof md){const s=Ke.fromString(e,...t);return zy(s),new ft(r,null,new he(s))}{if(!(r instanceof ft||r instanceof Vs))throw new se(H.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ke.fromString(e,...t));return zy(s),new ft(r.firestore,r instanceof Vs?r.converter:null,new he(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="AsyncQueue";class A0{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new sx(this,"async_queue_retry"),this._c=()=>{const s=sf();s&&oe(P0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=sf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=sf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ds;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!na(e))throw e;oe(P0,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,$r("INTERNAL UNHANDLED ERROR: ",j0(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=Sp.createAndSchedule(this,e,t,s,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&ve(47125,{Pc:j0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function j0(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class kl extends md{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new A0,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new A0(e),this._firestoreClient=void 0,await e}}}function DC(r,e){const t=typeof r=="object"?r:_v(),s=typeof r=="string"?r:Oc,o=Jf(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=FT("firestore");l&&jC(o,...l)}return o}function Rp(r){if(r._terminated)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||LC(r),r._firestoreClient}function LC(r){const e=r._freezeSettings(),t=AC(r._databaseId,r._app?.options.appId||"",r._persistenceKey,r._app?.options.apiKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new SC(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(o){const l=o?._online.build();return{_offline:o?._offline.build(l),_online:l}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sn(Vt.fromBase64String(e))}catch(t){throw new se(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fl(e,Sn._jsonSchema))return Sn.fromBase64String(e.bytes)}}Sn._jsonSchemaVersion="firestore/bytes/1.0",Sn._jsonSchema={type:xt("string",Sn._jsonSchemaVersion),bytes:xt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this._methodName=e}}/**
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
 */class pr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pr._jsonSchemaVersion}}static fromJSON(e){if(Fl(e,pr._jsonSchema))return new pr(e.latitude,e.longitude)}}pr._jsonSchemaVersion="firestore/geoPoint/1.0",pr._jsonSchema={type:xt("string",pr._jsonSchemaVersion),latitude:xt("number"),longitude:xt("number")};/**
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
 */class Fn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fl(e,Fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Fn(e.vectorValues);throw new se(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fn._jsonSchemaVersion="firestore/vectorValue/1.0",Fn._jsonSchema={type:xt("string",Fn._jsonSchemaVersion),vectorValues:xt("object")};/**
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
 */const VC=/^__.*__$/;class OC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Li(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ul(e,this.data,t,this.fieldTransforms)}}function Cx(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{dataSource:r})}}class Ap{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.validatePath(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ap({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){const t=this.path?.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Hc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Cx(this.dataSource)&&VC.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class MC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||hd(e)}createContext(e,t,s,o=!1){return new Ap({dataSource:e,methodName:t,targetDoc:s,path:Lt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rx(r){const e=r._freezeSettings(),t=hd(r._databaseId);return new MC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function FC(r,e,t,s,o,l={}){const h=r.createContext(l.merge||l.mergeFields?2:0,e,t,o);jx("Data must be an object, but it was:",h,s);const p=Px(s,h);let y,v;if(l.merge)y=new Mn(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const E of l.mergeFields){const I=gd(e,E,t);if(!h.contains(I))throw new se(H.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);$C(w,I)||w.push(I)}y=new Mn(w),v=h.fieldTransforms.filter((E=>y.covers(E.field)))}else y=null,v=h.fieldTransforms;return new OC(new In(p),y,v)}class jp extends Pp{_toFieldTransform(e){return new bN(e.path,new Sl)}isEqual(e){return e instanceof jp}}function UC(r,e,t,s=!1){return Dp(t,r.createContext(s?4:3,e))}function Dp(r,e){if(Ax(r=Gt(r)))return jx("Unsupported field value:",e,r),Px(r,e);if(r instanceof Pp)return(function(s,o){if(!Cx(o.dataSource))throw o.createError(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const p of s){let y=Dp(p,o.childContextForArray(h));y==null&&(y={nullValue:"NULL_VALUE"}),l.push(y),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=Gt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return TN(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ze.fromDate(s);return{timestampValue:Bc(o.serializer,l)}}if(s instanceof Ze){const l=new Ze(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Bc(o.serializer,l)}}if(s instanceof pr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Sn)return{bytesValue:H_(o.serializer,s._byteString)};if(s instanceof ft){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.createError(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:gp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Fn)return(function(h,p){const y=h instanceof Fn?h.toArray():h;return{mapValue:{fields:{[x_]:{stringValue:w_},[Mc]:{arrayValue:{values:y.map((w=>{if(typeof w!="number")throw p.createError("VectorValues must only contain numeric values.");return fp(p.serializer,w)}))}}}}}})(s,o);if(Z_(s))return s._toProto(o.serializer);throw o.createError(`Unsupported field value: ${nd(s)}`)})(r,e)}function Px(r,e){const t={};return p_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(r,((s,o)=>{const l=Dp(o,e.childContextForField(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Ax(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ze||r instanceof pr||r instanceof Sn||r instanceof ft||r instanceof Pp||r instanceof Fn||Z_(r))}function jx(r,e,t){if(!Ax(t)||!h_(t)){const s=nd(t);throw s==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+s)}}function gd(r,e,t){if((e=Gt(e))instanceof kx)return e._internalPath;if(typeof e=="string")return zC(r,e);throw Hc("Field path arguments must be of type string or ",r,!1,void 0,t)}const BC=new RegExp("[~\\*/\\[\\]]");function zC(r,e,t){if(e.search(BC)>=0)throw Hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new kx(...e.split("."))._internalPath}catch{throw Hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Hc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let y="";return(l||h)&&(y+=" (found",l&&(y+=` in field ${s}`),h&&(y+=` in document ${o}`),y+=")"),new se(H.INVALID_ARGUMENT,p+r+y)}function $C(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{convertValue(e,t="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ji(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){const t=e.fields?.[Mc].arrayValue?.values?.map((s=>ht(s.doubleValue)));return new Fn(t)}convertGeoPoint(e){return new pr(ht(e.latitude),ht(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=id(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(wl(e));default:return null}}convertTimestamp(e){const t=Ms(e);return new Ze(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);ze(X_(s),9688,{name:e});const o=new El(s.get(1),s.get(3)),l=new he(s.popFirst(5));return o.isEqual(t)||$r(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */class Dx extends qC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,t)}}function Lx(){return new jp("serverTimestamp")}const D0="@firebase/firestore",L0="4.11.0";/**
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
 */function V0(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(gd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class WC extends Vx{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new se(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lp{}class Ox extends Lp{}function Mx(r,e,...t){let s=[];e instanceof Lp&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((y=>y instanceof Op)).length,p=l.filter((y=>y instanceof Vp)).length;if(h>1||h>0&&p>0)throw new se(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Vp extends Ox{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Vp(e,t,s)}_apply(e){const t=this._parse(e);return Ux(e._query,t),new Oi(e.firestore,e.converter,Sf(e._query,t))}_parse(e){const t=Rx(e.firestore);return(function(l,h,p,y,v,w,E){let I;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new se(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){M0(E,w);const W=[];for(const q of E)W.push(O0(y,l,q));I={arrayValue:{values:W}}}else I=O0(y,l,E)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||M0(E,w),I=UC(p,h,E,w==="in"||w==="not-in");return _t.create(v,w,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Op extends Lp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Op(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Bn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const p=l.getFlattenedFilters();for(const y of p)Ux(h,y),h=Sf(h,y)})(e._query,t),new Oi(e.firestore,e.converter,Sf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Mp extends Ox{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Mp(e,t)}_apply(e){const t=(function(o,l,h){if(o.startAt!==null)throw new se(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Il(l,h)})(e._query,this._field,this._direction);return new Oi(e.firestore,e.converter,mN(e._query,t))}}function Fx(r,e="asc"){const t=e,s=gd("orderBy",r);return Mp._create(s,t)}function O0(r,e,t){if(typeof(t=Gt(t))=="string"){if(t==="")throw new se(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!C_(e)&&t.indexOf("/")!==-1)throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ke.fromString(t));if(!he.isDocumentKey(s))throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Jy(r,new he(s))}if(t instanceof ft)return Jy(r,t._key);throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nd(t)}.`)}function M0(r,e){if(!Array.isArray(r)||r.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ux(r,e){const t=(function(o,l){for(const h of o)for(const p of h.getFlattenedFilters())if(l.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function GC(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class ll{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ii extends Vx{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(gd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ii._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ii._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ii._jsonSchema={type:xt("string",Ii._jsonSchemaVersion),bundleSource:xt("string","DocumentSnapshot"),bundleName:xt("string"),bundle:xt("string")};class Sc extends Ii{data(e={}){return super.data(e)}}class Fo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ll(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Sc(this._firestore,this._userDataWriter,s.key,s,new ll(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((p=>{const y=new Sc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new ll(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>l||p.type!==3)).map((p=>{const y=new Sc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new ll(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return p.type!==0&&(v=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),w=h.indexOf(p.doc.key)),{type:KC(p.type),doc:y,oldIndex:v,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ap.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function KC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:r})}}/**
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
 */Fo._jsonSchemaVersion="firestore/querySnapshot/1.0",Fo._jsonSchema={type:xt("string",Fo._jsonSchemaVersion),bundleSource:xt("string","QuerySnapshot"),bundleName:xt("string"),bundle:xt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(r){r=Ls(r,ft);const e=Ls(r.firestore,kl),t=Rp(e);return CC(t,r._key).then((s=>qx(e,r,s)))}function zx(r,e,t){r=Ls(r,ft);const s=Ls(r.firestore,kl),o=GC(r.converter,e,t),l=Rx(s);return QC(s,[FC(l,"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Fr.none())])}function $x(r,...e){r=Gt(r);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||V0(e[s])||(t=e[s++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(V0(e[s])){const v=e[s];e[s]=v.next?.bind(v),e[s+1]=v.error?.bind(v),e[s+2]=v.complete?.bind(v)}let l,h,p;if(r instanceof ft)h=Ls(r.firestore,kl),p=od(r._key.path),l={next:v=>{e[s]&&e[s](qx(h,r,v))},error:e[s+1],complete:e[s+2]};else{const v=Ls(r,Oi);h=Ls(v.firestore,kl),p=v._query;const w=new Dx(h);l={next:E=>{e[s]&&e[s](new Fo(h,w,v,E))},error:e[s+1],complete:e[s+2]},HC(r._query)}const y=Rp(h);return kC(y,p,o,l)}function QC(r,e){const t=Rp(r);return RC(t,e)}function qx(r,e,t){const s=t.docs.get(e._key),o=new Dx(r);return new Ii(r,o,e._key,s,new ll(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Cb(Xo),Uo(new bi("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),p=new kl(new Ab(s.getProvider("auth-internal")),new Lb(h,s.getProvider("app-check-internal")),Xb(h,o),h);return l={useFetchStreams:t,...l},p._setSettings(l),p}),"PUBLIC").setMultipleInstances(!0)),As(D0,L0,e),As(D0,L0,"esm2020")})();const YC={apiKey:"AIzaSyB_27oRBIvMCnuQb1usHsnylSjKJ4hdxI4",authDomain:"rooliving-92324.firebaseapp.com",projectId:"rooliving-92324",storageBucket:"rooliving-92324.firebasestorage.app",messagingSenderId:"65189371234",appId:"1:65189371234:web:2a74a897aca61971afa03b"},Wx=vv(YC),$s=Sb(Wx),Ho=DC(Wx);function pt({isLoggedIn:r=!1}){const e=et(),[t,s]=F.useState(!1);F.useEffect(()=>{const h=Zc($s,p=>{s(!!p)});return()=>h()},[]);const o=async()=>{await Hv($s),e("/")},l=t||r;return c.jsx("header",{className:"bg-[#1a1a1a] border-b border-gray-800 sticky top-0 z-50",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"flex justify-between items-center h-16",children:[c.jsxs("button",{onClick:()=>{e(l?"/dashboard":"/")},className:"flex items-center gap-2",children:[c.jsx(Hr,{className:"w-6 h-6 text-orange-600"}),c.jsx("span",{className:"font-bold text-xl text-white",children:"Roo Living"})]}),l?c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsx(ur,{to:"/dashboard",className:"text-gray-300 hover:text-orange-600",children:"Home"}),c.jsx(ur,{to:"/services",className:"text-gray-300 hover:text-orange-600",children:"Services"}),c.jsx(ur,{to:"/plans",className:"text-gray-300 hover:text-orange-600",children:"Plans"}),c.jsx(ur,{to:"/my-projects",className:"text-gray-300 hover:text-orange-600",children:"My Projects"}),c.jsxs("button",{onClick:()=>e("/notifications"),className:"relative text-gray-300 hover:text-orange-600","aria-label":"Notifications",children:[c.jsx(uf,{className:"w-5 h-5"}),c.jsx("span",{className:"absolute -top-1 -right-1 w-4 h-4 bg-orange-600 text-white text-xs rounded-full flex items-center justify-center",children:"3"})]}),c.jsx("button",{onClick:()=>e("/profile-settings"),className:"text-gray-300 hover:text-orange-600","aria-label":"Profile",children:c.jsx(Nc,{className:"w-5 h-5"})}),c.jsx("button",{onClick:o,className:"text-gray-300 hover:text-red-300","aria-label":"Logout",title:"Logout",children:c.jsx(ov,{className:"w-5 h-5"})})]}):c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx(ur,{to:"/login",className:"px-4 py-2 text-gray-300 hover:text-orange-600",children:"Login"}),c.jsx(ur,{to:"/signup",className:"px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700",children:"Sign Up"})]})]})})})}function JC(){const r=et(),t="/rooliving_web/bg/hero.mp4",[s,o]=F.useState(!0),[l,h]=F.useState(!1);return F.useEffect(()=>{const p=window.matchMedia("(prefers-reduced-motion: reduce)"),y=()=>h(!!p.matches);return y(),p.addEventListener?.("change",y),()=>p.removeEventListener?.("change",y)},[]),c.jsxs("div",{className:"min-h-screen bg-[#1a1a1a] fx-page relative overflow-hidden rl-font",children:[c.jsx("div",{className:"relative z-10",children:c.jsx(pt,{isLoggedIn:!1})}),c.jsxs("div",{className:"pointer-events-none absolute inset-0 z-0",children:[c.jsx("div",{className:"rl-base"}),s?c.jsx("video",{className:"rl-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",onError:()=>o(!1),children:c.jsx("source",{src:t,type:"video/mp4"})}):c.jsx("div",{className:"rl-fallbackGradient"}),c.jsx("div",{className:"rl-overlay"})]}),c.jsxs("div",{className:"relative z-10",children:[c.jsx("section",{className:"py-20 fx-reveal bg-transparent",children:c.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:c.jsxs("div",{className:"text-center rl-heroGlass",children:[c.jsxs("h1",{className:"text-5xl font-bold text-white mb-6 rl-heroTitle",children:["Your Dream Home,",c.jsx("br",{}),"Designed & Built with Ease"]}),c.jsx("p",{className:"text-xl text-gray-300 mb-10 max-w-2xl mx-auto rl-heroDesc",children:"Plan your house and landscape, connect with service providers, and get loan guidance — all in one platform."}),c.jsxs("div",{className:"flex flex-wrap justify-center gap-4 rl-btnRow",children:[c.jsx("button",{className:"rl-heroBtn rl-gradMove rl-softBlink",onClick:()=>r("/plans"),children:"Explore Plans"}),c.jsx("button",{className:"rl-heroBtn rl-gradMove rl-softBlink",onClick:()=>r("/services"),children:"Book Services"}),c.jsx("button",{className:"rl-heroBtn rl-gradMove rl-softBlink",onClick:()=>r("/loan-contact"),children:"Request Loan"})]})]})})}),c.jsx("section",{className:"py-20 fx-reveal bg-transparent",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsx("h2",{className:"text-3xl font-bold text-center text-white mb-12",children:"Everything You Need in One Place"}),c.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[c.jsx(No,{icon:c.jsx(Hr,{className:"w-12 h-12 text-orange-600"}),title:"2D & 3D House Plans",description:"Browse and customize professional house and landscape designs tailored to your needs."}),c.jsx(No,{icon:c.jsx(Hf,{className:"w-12 h-12 text-orange-600"}),title:"Service Marketplace",description:"Connect with verified painters, gardeners, contractors, electricians, and more."}),c.jsx(No,{icon:c.jsx(Pl,{className:"w-12 h-12 text-orange-600"}),title:"Loan Assistance",description:"Get connected with bank officers for home loan guidance through our platform."}),c.jsx(No,{icon:c.jsx(Yc,{className:"w-12 h-12 text-orange-600"}),title:"Land Inspection",description:"Request professional land inspections to verify your property details."}),c.jsx(No,{icon:c.jsx(CT,{className:"w-12 h-12 text-orange-600"}),title:"Project Management",description:"Track all your requirements, services, and progress in one dashboard."}),c.jsx(No,{icon:c.jsx(qE,{className:"w-12 h-12 text-orange-600"}),title:"Trusted Partners",description:"Work with verified service providers rated by real homeowners."})]})]})}),c.jsx("section",{className:"py-20 fx-reveal rl-ctaBlend",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center rl-ctaGlass",children:[c.jsx("h2",{className:"text-3xl font-bold text-white mb-6",children:"Ready to Start Your Project?"}),c.jsx("p",{className:"text-xl text-orange-50 mb-8",children:"Join thousands of homeowners building their dream homes."}),c.jsx("button",{className:"rl-heroBtn rl-gradMove rl-softBlink",onClick:()=>r("/signup"),children:"Sign Up"})]})}),c.jsx("footer",{className:"bg-black text-white py-12 fx-reveal",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"grid md:grid-cols-4 gap-8",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"font-bold text-lg mb-4",children:"Roo Living"}),c.jsx("p",{className:"text-gray-400",children:"Your complete home design and service coordination platform."})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Platform"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",children:[c.jsx("li",{children:"House Plans"}),c.jsx("li",{children:"Services"}),c.jsx("li",{children:"Loan Assistance"}),c.jsx("li",{children:"Land Inspection"})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Company"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",children:[c.jsx("li",{children:"About Us"}),c.jsx("li",{children:"Contact"}),c.jsx("li",{children:"Careers"}),c.jsx("li",{children:"Partners"})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"font-semibold mb-4",children:"Support"}),c.jsxs("ul",{className:"space-y-2 text-gray-400",children:[c.jsx("li",{children:"Help Center"}),c.jsx("li",{children:"Terms of Service"}),c.jsx("li",{children:"Privacy Policy"})]})]})]}),c.jsx("div",{className:"border-t border-gray-800 mt-8 pt-8 text-center text-gray-400",children:c.jsx("p",{children:"© 2026 Roo Living. Academic UI/UX Prototype - CS2311"})})]})})]}),c.jsx("style",{children:`
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
          ${l?`
            .rl-gradMove, .rl-softBlink{ animation: none !important; }
            .rl-featureCard::before{ animation: none !important; }
          `:""}

          @media (prefers-reduced-motion: reduce){
            .rl-gradMove, .rl-softBlink{ animation: none !important; }
            .rl-featureCard::before{ animation: none !important; }
          }
        `})]})}function No({icon:r,title:e,description:t}){return c.jsxs("div",{className:"fx-card fx-reveal rl-featureCard p-6 border border-gray-700 bg-[#2a2a2a] rounded-lg transition-all",children:[c.jsx("div",{className:"mb-4",children:r}),c.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:e}),c.jsx("p",{className:"text-gray-300",children:t})]})}function Qe({children:r,onClick:e,variant:t="primary",type:s="button",fullWidth:o=!1,disabled:l=!1}){const h="fx-btn px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]",p={primary:"bg-orange-600 text-white hover:bg-orange-700 disabled:bg-gray-300",secondary:"bg-black text-white hover:bg-gray-800 disabled:bg-gray-300",outline:"border-2 border-orange-600 text-orange-600 hover:bg-orange-50 disabled:border-gray-300 disabled:text-gray-300"},y=o?"w-full":"";return c.jsx("button",{type:s,onClick:e,disabled:l,className:`${h} ${p[t]} ${y}`,children:r})}function XC(){const r=et(),[e,t]=F.useState({emailOrPhone:"",password:""}),[s,o]=F.useState(!1),[l,h]=F.useState(""),p=w=>/\S+@\S+\.\S+/.test(w.trim()),y=async w=>{w.preventDefault(),h("");const E=e.emailOrPhone.trim(),I=e.password;if(!E)return h("Email is required.");if(!p(E))return h("Phone login is not enabled. Please use your email.");if(I.length<6)return h("Password must be at least 6 characters.");o(!0);try{await hS($s,E,I),r("/dashboard")}catch(D){h(D?.message||"Login failed.")}finally{o(!1)}},v=w=>{const{name:E,value:I}=w.target;t(D=>({...D,[E]:I})),h("")};return c.jsxs("div",{className:"min-h-screen bg-[#1a1a1a]",children:[c.jsx(pt,{isLoggedIn:!1}),c.jsx("div",{className:"max-w-md mx-auto px-4 py-12",children:c.jsxs("div",{className:"bg-[#2a2a2a] rounded-lg shadow-lg p-8 border border-gray-800",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-600/20 rounded-full mb-4",children:c.jsx(uT,{className:"w-8 h-8 text-orange-600"})}),c.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Welcome Back"}),c.jsx("p",{className:"text-gray-400",children:"Log in to your account"})]}),l&&c.jsx("div",{className:"mb-5 px-4 py-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 text-sm",children:l}),c.jsxs("form",{onSubmit:y,className:"space-y-5",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"emailOrPhone",className:"block text-sm font-medium text-gray-300 mb-1",children:"Email or Phone"}),c.jsx("input",{type:"text",id:"emailOrPhone",name:"emailOrPhone",value:e.emailOrPhone,onChange:v,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"john@example.com or +1 234 567 8900"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-300 mb-1",children:"Password"}),c.jsx("input",{type:"password",id:"password",name:"password",value:e.password,onChange:v,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"••••••••"})]}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx("input",{type:"checkbox",id:"remember",className:"w-4 h-4 text-orange-600 bg-[#1a1a1a] border-gray-700 rounded focus:ring-orange-600"}),c.jsx("label",{htmlFor:"remember",className:"ml-2 text-sm text-gray-400",children:"Remember me"})]}),c.jsx("a",{href:"#",className:"text-sm text-orange-600 hover:underline",children:"Forgot password?"})]}),c.jsx(Qe,{type:"submit",fullWidth:!0,disabled:s,children:s?"Logging in...":"Log In"})]}),c.jsx("div",{className:"mt-6 text-center",children:c.jsxs("p",{className:"text-gray-400",children:["Don't have an account?"," ",c.jsx(ur,{to:"/signup",className:"text-orange-600 font-medium hover:underline",children:"Sign Up"})]})})]})})]})}function ZC(){const r=et(),[e,t]=F.useState({name:"",phone:"",email:"",password:"",confirmPassword:"",agreeTerms:!1}),[s,o]=F.useState(!1),[l,h]=F.useState(""),p=async v=>{if(v.preventDefault(),h(""),!e.agreeTerms)return h("Please accept the Terms and Privacy Policy.");if(e.password.length<6)return h("Password must be at least 6 characters.");if(e.password!==e.confirmPassword)return h("Passwords do not match.");o(!0);try{const w=await dS($s,e.email.trim(),e.password);await zx(Wc(Ho,"users",w.user.uid),{name:e.name.trim(),phone:e.phone.trim(),email:e.email.trim(),createdAt:Lx()}),r("/dashboard")}catch(w){const E=w?.message||"Sign up failed.";h(E)}finally{o(!1)}},y=v=>{const{name:w,value:E,type:I,checked:D}=v.target;t(W=>({...W,[w]:I==="checkbox"?D:E})),h("")};return c.jsxs("div",{className:"min-h-screen bg-[#1a1a1a]",children:[c.jsx(pt,{isLoggedIn:!1}),c.jsx("div",{className:"max-w-md mx-auto px-4 py-12",children:c.jsxs("div",{className:"bg-[#2a2a2a] rounded-lg shadow-lg p-8 border border-gray-800",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-600/20 rounded-full mb-4",children:c.jsx(bT,{className:"w-8 h-8 text-orange-600"})}),c.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Create Account"}),c.jsx("p",{className:"text-gray-400",children:"Join Roo Living today"})]}),l&&c.jsx("div",{className:"mb-5 px-4 py-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 text-sm",children:l}),c.jsxs("form",{onSubmit:p,className:"space-y-5",children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300 mb-1",children:"Full Name"}),c.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:y,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"John Doe"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-300 mb-1",children:"Phone Number"}),c.jsx("input",{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:y,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"+1 234 567 8900"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300 mb-1",children:"Email Address"}),c.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:y,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"john@example.com"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-300 mb-1",children:"Password"}),c.jsx("input",{type:"password",id:"password",name:"password",value:e.password,onChange:y,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"••••••••"})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-300 mb-1",children:"Confirm Password"}),c.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:e.confirmPassword,onChange:y,required:!0,className:"w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",placeholder:"••••••••"})]}),c.jsxs("div",{className:"flex items-start",children:[c.jsx("input",{type:"checkbox",id:"agreeTerms",name:"agreeTerms",checked:e.agreeTerms,onChange:y,required:!0,className:"mt-1 w-4 h-4 text-orange-600 bg-[#1a1a1a] border-gray-700 rounded focus:ring-orange-600"}),c.jsxs("label",{htmlFor:"agreeTerms",className:"ml-2 text-sm text-gray-400",children:["I agree to the"," ",c.jsx("a",{href:"#",className:"text-orange-600 hover:underline",children:"Terms of Service"})," ","and"," ",c.jsx("a",{href:"#",className:"text-orange-600 hover:underline",children:"Privacy Policy"})]})]}),c.jsx(Qe,{type:"submit",fullWidth:!0,disabled:s,children:s?"Creating...":"Create Account"})]}),c.jsx("div",{className:"mt-6 text-center",children:c.jsxs("p",{className:"text-gray-400",children:["Already have an account?"," ",c.jsx(ur,{to:"/login",className:"text-orange-600 font-medium hover:underline",children:"Log In"})]})})]})})]})}function eR(){const r=et(),[e,t]=F.useState(!1),[s,o]=F.useState(!1),[l,h]=F.useState(""),[p,y]=F.useState("Guest"),[v,w]=F.useState(""),[E,I]=F.useState([]),[D,W]=F.useState(!1);F.useEffect(()=>{let K=null;const J=Zc($s,async te=>{if(t(!0),!te){o(!1),h(""),y("Guest"),w(""),I([]),K&&K(),K=null;return}o(!0),h(te.uid),w(te.email||"");try{const ge=await Bx(Wc(Ho,"users",te.uid));if(ge.exists()){const Te=ge.data();y(Te?.name||te.displayName||"User")}else y(te.displayName||"User")}catch{y(te.displayName||"User")}try{W(!0);const ge=Mx(Nx(Ho,"users",te.uid,"projects"),Fx("createdAt","desc"));K&&K(),K=$x(ge,Te=>{const Ie=Te.docs.map(R=>{const S=R.data();return{id:R.id,name:S?.name||"Untitled Project",status:S?.status||"Planning",progress:Number(S?.progress??0),createdAt:S?.createdAt||null}});I(Ie),W(!1)},()=>{I([]),W(!1)})}catch{I([]),W(!1)}});return()=>{J(),K&&K()}},[]);const q=F.useMemo(()=>(p||"Guest").trim().split(" ")[0]||"Guest",[p]),z=K=>{if(!s){r("/login");return}r(K)};return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:s}),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"mb-6",children:[c.jsxs("h1",{className:"text-3xl font-bold text-black mb-2",children:["Welcome back, ",q,"!"]}),c.jsx("p",{className:"text-gray-600",children:"Let's continue building your dream home."}),s&&v&&c.jsx("p",{className:"text-sm text-gray-500 mt-1",children:v}),e&&!s&&c.jsxs("div",{className:"mt-4 flex items-center justify-between gap-3 rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white px-4 py-3",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(iv,{className:"w-4 h-4 text-orange-700"}),c.jsxs("p",{className:"text-sm text-gray-700",children:["You are viewing ",c.jsx("span",{className:"font-semibold",children:"Demo Mode"}),". Log in to save projects and manage your account."]})]}),c.jsx("button",{onClick:()=>r("/login"),className:"text-sm font-semibold text-orange-700 hover:text-orange-800 hover:underline",children:"Log In"})]})]}),c.jsx("div",{className:"mb-8",children:c.jsxs("div",{className:"relative",children:[c.jsx(Yc,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"}),c.jsx("input",{type:"text",placeholder:"Search for services, plans, or projects...",className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]})}),c.jsxs("div",{className:"grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12",children:[c.jsx(nl,{icon:c.jsx(Al,{className:"w-8 h-8"}),title:"Requirements",description:"Define your needs",onClick:()=>z("/requirements/step-1")}),c.jsx(nl,{icon:c.jsx(Hf,{className:"w-8 h-8"}),title:"Services",description:"Book professionals",onClick:()=>r("/services")}),c.jsx(nl,{icon:c.jsx(Hr,{className:"w-8 h-8"}),title:"2D/3D Plans",description:"Browse designs",onClick:()=>r("/plans")}),c.jsx(nl,{icon:c.jsx(Pl,{className:"w-8 h-8"}),title:"Loan",description:"Get loan guidance",onClick:()=>z("/loan-contact")}),c.jsx(nl,{icon:c.jsx(mr,{className:"w-8 h-8"}),title:"Land Check",description:"Request inspection",onClick:()=>z("/land-inspection")})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[c.jsxs("div",{className:"flex justify-between items-center mb-6",children:[c.jsx("h2",{className:"text-2xl font-bold text-black",children:"My Project Status"}),c.jsxs("button",{onClick:()=>z("/my-projects"),className:"text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1",children:["View All ",c.jsx(Qc,{className:"w-4 h-4"})]})]}),s?D?c.jsx("div",{className:"py-10 text-center text-gray-600",children:"Loading your projects..."}):E.length===0?c.jsxs("div",{className:"text-center py-10",children:[c.jsx("p",{className:"text-gray-600 mb-3",children:"You don't have any projects yet."}),c.jsx("button",{onClick:()=>r("/requirements/step-1"),className:"text-orange-600 font-semibold hover:underline",children:"Start Your First Project"})]}):c.jsx("div",{className:"space-y-4",children:E.map(K=>c.jsxs("div",{className:"border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer",onClick:()=>r(`/project/${K.id}`),children:[c.jsxs("div",{className:"flex justify-between items-start mb-3",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"font-semibold text-black",children:K.name}),c.jsx("p",{className:"text-sm text-gray-600",children:K.status})]}),c.jsxs("span",{className:"text-sm font-medium text-orange-600",children:[K.progress,"%"]})]}),c.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:c.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:`${K.progress}%`}})})]},K.id))}):c.jsxs("div",{className:"text-center py-10",children:[c.jsx("p",{className:"text-gray-600 mb-3",children:"You are in Demo Mode. Log in to create and track projects."}),c.jsx("button",{onClick:()=>r("/login"),className:"text-orange-600 font-semibold hover:underline",children:"Log In to Continue"})]})]})]})]})}function nl({icon:r,title:e,description:t,onClick:s}){return c.jsxs("button",{onClick:s,className:"bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow text-left",children:[c.jsx("div",{className:"text-orange-600 mb-3",children:r}),c.jsx("h3",{className:"font-semibold text-black mb-1",children:e}),c.jsx("p",{className:"text-sm text-gray-600",children:t})]})}function tR(){const r=et(),[e,t]=F.useState("2D"),s=[{id:1,name:"Modern Villa",type:"2D/3D",size:"2,500 sq. ft.",style:"Contemporary",rooms:"3 Bed, 2 Bath"},{id:2,name:"Cozy Cottage",type:"2D/3D",size:"1,800 sq. ft.",style:"Traditional",rooms:"2 Bed, 2 Bath"},{id:3,name:"Luxury Estate",type:"2D/3D",size:"4,200 sq. ft.",style:"Modern",rooms:"5 Bed, 4 Bath"},{id:4,name:"Garden Bungalow",type:"2D/3D",size:"1,500 sq. ft.",style:"Rustic",rooms:"2 Bed, 1 Bath"},{id:5,name:"Family Home",type:"2D/3D",size:"3,000 sq. ft.",style:"Contemporary",rooms:"4 Bed, 3 Bath"},{id:6,name:"Urban Loft",type:"2D/3D",size:"1,200 sq. ft.",style:"Industrial",rooms:"1 Bed, 1 Bath"}];return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Plans Library"}),c.jsx("p",{className:"text-gray-600",children:"Browse professional house and landscape designs"})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 mb-8",children:[c.jsxs("div",{className:"flex-1 relative",children:[c.jsx(Yc,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),c.jsx("input",{type:"text",placeholder:"Search plans by style, size, or features...",className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),c.jsxs("div",{className:"flex gap-2 bg-white border border-gray-300 rounded-lg p-1",children:[c.jsx("button",{onClick:()=>t("2D"),className:`px-6 py-2 rounded-md font-medium transition-colors ${e==="2D"?"bg-orange-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:"2D Plans"}),c.jsx("button",{onClick:()=>t("3D"),className:`px-6 py-2 rounded-md font-medium transition-colors ${e==="3D"?"bg-orange-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:"3D Plans"})]})]}),c.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(o=>c.jsxs("div",{className:"bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden",children:[c.jsxs("div",{className:"bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center relative",children:[c.jsx(Hr,{className:"w-20 h-20 text-gray-400"}),c.jsx("div",{className:"absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium",children:e})]}),c.jsxs("div",{className:"p-6",children:[c.jsx("h3",{className:"text-xl font-bold text-black mb-2",children:o.name}),c.jsxs("div",{className:"space-y-2 mb-4 text-sm text-gray-600",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Size:"}),c.jsx("span",{className:"font-medium text-black",children:o.size})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Style:"}),c.jsx("span",{className:"font-medium text-black",children:o.style})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Layout:"}),c.jsx("span",{className:"font-medium text-black",children:o.rooms})]})]}),c.jsxs("button",{onClick:()=>r(`/plans/${o.id}`),className:"w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2",children:[c.jsx(pT,{className:"w-4 h-4"}),"View Plan"]})]})]},o.id))})]})]})}function nR(){const r=et(),e=[{id:"painter",name:"Painting Services",description:"Professional interior and exterior painting",rating:4.8,reviews:156,priceRange:"$200 - $800",image:"🎨"},{id:"gardener",name:"Gardening & Landscaping",description:"Garden design, planting, and maintenance",rating:4.9,reviews:203,priceRange:"$150 - $600",image:"🌳"},{id:"contractor",name:"General Contractor",description:"Construction and renovation services",rating:4.7,reviews:187,priceRange:"$500 - $2000",image:"🏗️"},{id:"electrician",name:"Electrical Services",description:"Wiring, fixtures, and electrical repairs",rating:4.9,reviews:142,priceRange:"$100 - $500",image:"⚡"},{id:"plumber",name:"Plumbing Services",description:"Plumbing installation and repairs",rating:4.6,reviews:128,priceRange:"$80 - $400",image:"🔧"},{id:"carpenter",name:"Carpentry Services",description:"Custom woodwork and furniture",rating:4.8,reviews:95,priceRange:"$150 - $700",image:"🪵"}];return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Service Marketplace"}),c.jsx("p",{className:"text-gray-600",children:"Find and book trusted professionals for your project"})]}),c.jsx("div",{className:"mb-8",children:c.jsxs("div",{className:"relative",children:[c.jsx(Yc,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),c.jsx("input",{type:"text",placeholder:"Search for services...",className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]})}),c.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(t=>c.jsxs("div",{className:"bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden",children:[c.jsx("div",{className:"bg-gradient-to-br from-orange-100 to-orange-50 h-32 flex items-center justify-center text-6xl",children:t.image}),c.jsxs("div",{className:"p-6",children:[c.jsx("h3",{className:"text-xl font-bold text-black mb-2",children:t.name}),c.jsx("p",{className:"text-gray-600 text-sm mb-4",children:t.description}),c.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(av,{className:"w-4 h-4 text-yellow-500 fill-yellow-500"}),c.jsx("span",{className:"ml-1 font-medium text-black",children:t.rating})]}),c.jsx("span",{className:"text-gray-400",children:"•"}),c.jsxs("span",{className:"text-sm text-gray-600",children:[t.reviews," reviews"]})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("span",{className:"text-sm text-gray-600",children:"Price Range: "}),c.jsx("span",{className:"font-medium text-black",children:t.priceRange})]}),c.jsx("button",{onClick:()=>r(`/services/${t.id}`),className:"w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors",children:"View Service"})]})]},t.id))})]})]})}function rR(){const{serviceId:r}=qs(),e=et(),t={painter:{name:"Painting Services",description:"Professional interior and exterior painting services for residential and commercial properties. Our team uses high-quality paints and follows best practices to ensure a flawless finish.",rating:4.8,reviews:156,image:"🎨"},gardener:{name:"Gardening & Landscaping",description:"Transform your outdoor space with expert garden design, planting, and maintenance services. We specialize in creating beautiful, sustainable landscapes.",rating:4.9,reviews:203,image:"🌳"},contractor:{name:"General Contractor",description:"Complete construction and renovation services for your home. From foundation to finishing, we handle all aspects of your building project.",rating:4.7,reviews:187,image:"🏗️"}},s=t[r]||t.painter,o=[{name:"Basic",price:"$200",features:["Single room service","1 professional worker","Basic materials included","1-day completion"]},{name:"Standard",price:"$450",features:["Up to 3 rooms","2 professional workers","Premium materials included","2-3 days completion","Free consultation"],popular:!0},{name:"Premium",price:"$800",features:["Whole house service","3+ professional workers","Premium materials & brands","5-7 days completion","Free consultation","1-year warranty"]}];return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsx("div",{className:"bg-white rounded-lg shadow-md p-8 mb-8",children:c.jsxs("div",{className:"flex items-start gap-6",children:[c.jsx("div",{className:"bg-gradient-to-br from-orange-100 to-orange-50 w-32 h-32 rounded-lg flex items-center justify-center text-6xl",children:s.image}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:s.name}),c.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(av,{className:"w-5 h-5 text-yellow-500 fill-yellow-500"}),c.jsx("span",{className:"ml-1 font-medium text-black",children:s.rating})]}),c.jsx("span",{className:"text-gray-400",children:"•"}),c.jsxs("span",{className:"text-gray-600",children:[s.reviews," reviews"]})]}),c.jsx("p",{className:"text-gray-700 leading-relaxed",children:s.description})]})]})}),c.jsxs("div",{className:"mb-8",children:[c.jsx("h2",{className:"text-2xl font-bold text-black mb-6",children:"Service Packages"}),c.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:o.map((l,h)=>c.jsxs("div",{className:`bg-white rounded-lg shadow-md p-6 ${l.popular?"ring-2 ring-orange-600 relative":""}`,children:[l.popular&&c.jsx("div",{className:"absolute -top-3 left-1/2 transform -translate-x-1/2",children:c.jsx("span",{className:"bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium",children:"Most Popular"})}),c.jsx("h3",{className:"text-xl font-bold text-black mb-2",children:l.name}),c.jsx("div",{className:"text-3xl font-bold text-orange-600 mb-6",children:l.price}),c.jsx("ul",{className:"space-y-3 mb-6",children:l.features.map((p,y)=>c.jsxs("li",{className:"flex items-start gap-2",children:[c.jsx(YE,{className:"w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"}),c.jsx("span",{className:"text-gray-700",children:p})]},y))}),c.jsxs(Qe,{onClick:()=>e(`/book-service/${r}`),variant:l.popular?"primary":"outline",fullWidth:!0,children:["Book ",l.name]})]},h))})]})]})]})}function sR(){const{serviceId:r}=qs(),e=et(),[t,s]=F.useState({project:"",date:"",time:"",address:"",notes:""}),o=h=>{h.preventDefault(),e("/booking-confirmation")},l=h=>{const{name:p,value:y}=h.target;s(v=>({...v,[p]:y}))};return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Book Service"}),c.jsx("p",{className:"text-gray-600 mb-8",children:"Fill in the details to schedule your service"}),c.jsxs("form",{onSubmit:o,className:"space-y-6",children:[c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(Al,{className:"w-4 h-4 inline mr-2"}),"Select Project"]}),c.jsxs("select",{name:"project",value:t.project,onChange:l,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Choose a project..."}),c.jsx("option",{value:"1",children:"Modern Villa Project"}),c.jsx("option",{value:"2",children:"Garden Renovation"}),c.jsx("option",{value:"new",children:"Create New Project"})]})]}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(Ws,{className:"w-4 h-4 inline mr-2"}),"Preferred Date"]}),c.jsx("input",{type:"date",name:"date",value:t.date,onChange:l,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(gl,{className:"w-4 h-4 inline mr-2"}),"Preferred Time"]}),c.jsxs("select",{name:"time",value:t.time,onChange:l,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Select time..."}),c.jsx("option",{value:"morning",children:"Morning (8:00 AM - 12:00 PM)"}),c.jsx("option",{value:"afternoon",children:"Afternoon (12:00 PM - 4:00 PM)"}),c.jsx("option",{value:"evening",children:"Evening (4:00 PM - 8:00 PM)"})]})]})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(mr,{className:"w-4 h-4 inline mr-2"}),"Service Address"]}),c.jsx("input",{type:"text",name:"address",value:t.address,onChange:l,required:!0,placeholder:"123 Main Street, City, State, ZIP",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Additional Notes (Optional)"}),c.jsx("textarea",{name:"notes",value:t.notes,onChange:l,rows:4,placeholder:"Any special requirements or instructions...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(Ti,{className:"w-4 h-4 inline mr-2"}),"Upload Reference Images (Optional)"]}),c.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-600 transition-colors cursor-pointer",children:[c.jsx(Ti,{className:"w-8 h-8 text-gray-400 mx-auto mb-2"}),c.jsx("p",{className:"text-sm text-gray-600",children:"Click to upload or drag and drop"}),c.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"PNG, JPG, PDF up to 10MB"})]})]}),c.jsxs("div",{className:"flex gap-4 pt-4",children:[c.jsx(Qe,{type:"button",variant:"outline",onClick:()=>e(-1),fullWidth:!0,children:"Cancel"}),c.jsx(Qe,{type:"submit",fullWidth:!0,children:"Confirm Booking"})]})]})]})})]})}function iR(){const r=et();return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsx("div",{className:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:[c.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6",children:c.jsx(Yo,{className:"w-12 h-12 text-green-600"})}),c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Booking Confirmed!"}),c.jsx("p",{className:"text-gray-600 mb-8",children:"Your service has been successfully scheduled. You'll receive a confirmation email shortly."}),c.jsxs("div",{className:"bg-gray-50 rounded-lg p-6 mb-8 text-left",children:[c.jsx("h2",{className:"text-xl font-bold text-black mb-4",children:"Booking Summary"}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx(Al,{className:"w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Service"}),c.jsx("p",{className:"font-medium text-black",children:"Painting Services - Standard Package"})]})]}),c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx(Ws,{className:"w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Date"}),c.jsx("p",{className:"font-medium text-black",children:"January 25, 2026"})]})]}),c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx(gl,{className:"w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Time"}),c.jsx("p",{className:"font-medium text-black",children:"Morning (8:00 AM - 12:00 PM)"})]})]}),c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx(mr,{className:"w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Location"}),c.jsx("p",{className:"font-medium text-black",children:"123 Main Street, City, State 12345"})]})]})]})]}),c.jsxs("div",{className:"mb-8",children:[c.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Booking Reference"}),c.jsx("p",{className:"text-2xl font-bold text-orange-600",children:"#BK-2026-00143"})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[c.jsx(Qe,{onClick:()=>r("/my-projects"),fullWidth:!0,children:"Track in My Projects"}),c.jsx(Qe,{onClick:()=>r("/dashboard"),variant:"outline",fullWidth:!0,children:"Back to Dashboard"})]})]})})]})}function oR(){const r=et(),[e,t]=F.useState({bank:"",income:"",contactTime:"",loanAmount:"",purpose:""}),s=h=>{h.preventDefault(),r("/loan-success")},o=h=>{const{name:p,value:y}=h.target;t(v=>({...v,[p]:y}))},l=["First National Bank","Community Credit Union","Metro Bank","Citizens Bank","Regional Trust Bank"];return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4",children:c.jsx(Pl,{className:"w-8 h-8 text-orange-600"})}),c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Loan Contact Request"}),c.jsx("p",{className:"text-gray-600",children:"Get connected with bank officers for home loan guidance"})]}),c.jsxs("form",{onSubmit:s,className:"space-y-6",children:[c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(GE,{className:"w-4 h-4 inline mr-2"}),"Select Partner Bank"]}),c.jsxs("select",{name:"bank",value:e.bank,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Choose a bank..."}),l.map(h=>c.jsx("option",{value:h,children:h},h))]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Estimated Loan Amount Needed"}),c.jsxs("select",{name:"loanAmount",value:e.loanAmount,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Select amount range..."}),c.jsx("option",{value:"50k-100k",children:"$50,000 - $100,000"}),c.jsx("option",{value:"100k-200k",children:"$100,000 - $200,000"}),c.jsx("option",{value:"200k-300k",children:"$200,000 - $300,000"}),c.jsx("option",{value:"300k-500k",children:"$300,000 - $500,000"}),c.jsx("option",{value:"500k+",children:"$500,000+"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Monthly Income Range"}),c.jsxs("select",{name:"income",value:e.income,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Select income range..."}),c.jsx("option",{value:"0-3k",children:"$0 - $3,000"}),c.jsx("option",{value:"3k-5k",children:"$3,000 - $5,000"}),c.jsx("option",{value:"5k-7k",children:"$5,000 - $7,000"}),c.jsx("option",{value:"7k-10k",children:"$7,000 - $10,000"}),c.jsx("option",{value:"10k+",children:"$10,000+"})]})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(Ws,{className:"w-4 h-4 inline mr-2"}),"Preferred Contact Time"]}),c.jsxs("select",{name:"contactTime",value:e.contactTime,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Select preferred time..."}),c.jsx("option",{value:"morning",children:"Morning (9:00 AM - 12:00 PM)"}),c.jsx("option",{value:"afternoon",children:"Afternoon (12:00 PM - 4:00 PM)"}),c.jsx("option",{value:"evening",children:"Evening (4:00 PM - 7:00 PM)"}),c.jsx("option",{value:"anytime",children:"Anytime"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Loan Purpose (Optional)"}),c.jsx("textarea",{name:"purpose",value:e.purpose,onChange:o,rows:4,placeholder:"Brief description of what the loan will be used for...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),c.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:c.jsxs("p",{className:"text-sm text-blue-900",children:[c.jsx("strong",{children:"Note:"})," This is a contact request only. A bank representative will reach out to you within 2-3 business days to discuss loan options and requirements. This is not a loan application."]})}),c.jsxs("div",{className:"flex gap-4 pt-4",children:[c.jsx(Qe,{type:"button",variant:"outline",onClick:()=>r("/dashboard"),fullWidth:!0,children:"Cancel"}),c.jsx(Qe,{type:"submit",fullWidth:!0,children:"Submit Request"})]})]})]})})]})}function aR(){const r=et();return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsx("div",{className:"max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:[c.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6",children:c.jsx(Yo,{className:"w-12 h-12 text-green-600"})}),c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Request Submitted!"}),c.jsx("p",{className:"text-gray-600 mb-8",children:"Your loan contact request has been successfully submitted."}),c.jsxs("div",{className:"bg-gray-50 rounded-lg p-6 mb-8 text-left",children:[c.jsx("h2",{className:"text-xl font-bold text-black mb-4",children:"What Happens Next?"}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:c.jsx(Ws,{className:"w-5 h-5 text-orange-600"})}),c.jsxs("div",{children:[c.jsx("p",{className:"font-medium text-black",children:"Within 2-3 Business Days"}),c.jsx("p",{className:"text-sm text-gray-600",children:"A bank representative from First National Bank will review your request."})]})]}),c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:c.jsx(Kf,{className:"w-5 h-5 text-orange-600"})}),c.jsxs("div",{children:[c.jsx("p",{className:"font-medium text-black",children:"Contact from Bank"}),c.jsx("p",{className:"text-sm text-gray-600",children:"You'll receive a phone call during your preferred time to discuss loan options."})]})]}),c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:c.jsx(Gf,{className:"w-5 h-5 text-orange-600"})}),c.jsxs("div",{children:[c.jsx("p",{className:"font-medium text-black",children:"Email Confirmation"}),c.jsx("p",{className:"text-sm text-gray-600",children:"Check your email for a confirmation message with your reference number."})]})]})]})]}),c.jsxs("div",{className:"mb-8",children:[c.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Request Reference Number"}),c.jsx("p",{className:"text-2xl font-bold text-orange-600",children:"#LN-2026-00087"})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[c.jsx(Qe,{onClick:()=>r("/project/1"),fullWidth:!0,children:"Back to Project"}),c.jsx(Qe,{onClick:()=>r("/dashboard"),variant:"outline",fullWidth:!0,children:"Go to Dashboard"})]})]})})]})}function lR(){et();const r=[{id:1,type:"booking",iconType:"check",title:"Booking Confirmed",message:"Your painting service has been scheduled for Jan 25, 2026",time:"2 hours ago",read:!1},{id:2,type:"design",iconType:"home",title:"New Design Available",message:"We have added new 3D plans matching your requirements",time:"5 hours ago",read:!1},{id:3,type:"loan",iconType:"dollar",title:"Loan Contact Update",message:"Bank representative will contact you tomorrow at 2:00 PM",time:"1 day ago",read:!1},{id:4,type:"inspection",iconType:"map",title:"Inspection Scheduled",message:"Your land inspection is scheduled for Jan 22, 2026",time:"1 day ago",read:!0},{id:5,type:"reminder",iconType:"calendar",title:"Project Reminder",message:"Don't forget to complete your requirements form",time:"2 days ago",read:!0}],e=t=>{const s="w-5 h-5";switch(t){case"check":return c.jsx(Yo,{className:s});case"home":return c.jsx(Hr,{className:s});case"dollar":return c.jsx(Pl,{className:s});case"map":return c.jsx(mr,{className:s});case"calendar":return c.jsx(Ws,{className:s});default:return c.jsx(uf,{className:s})}};return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[c.jsx("div",{className:"bg-orange-100 p-3 rounded-lg",children:c.jsx(uf,{className:"w-6 h-6 text-orange-600"})}),c.jsxs("div",{children:[c.jsx("h1",{className:"text-3xl font-bold text-black",children:"Notifications"}),c.jsx("p",{className:"text-gray-600",children:"Stay updated on your projects and bookings"})]})]}),c.jsx("div",{className:"bg-white rounded-lg shadow-md divide-y divide-gray-200",children:r.map(t=>c.jsx("div",{className:`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${t.read?"":"bg-orange-50"}`,children:c.jsxs("div",{className:"flex items-start gap-4",children:[c.jsx("div",{className:`p-3 rounded-lg ${t.read?"bg-gray-100 text-gray-600":"bg-orange-600 text-white"}`,children:e(t.iconType)}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-start justify-between mb-1",children:[c.jsx("h3",{className:"font-semibold text-black",children:t.title}),!t.read&&c.jsx("span",{className:"ml-2 w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"})]}),c.jsx("p",{className:"text-sm text-gray-600 mb-2",children:t.message}),c.jsx("p",{className:"text-xs text-gray-500",children:t.time})]})]})},t.id))}),c.jsx("div",{className:"mt-6 text-center",children:c.jsx("button",{className:"text-orange-600 hover:text-orange-700 font-medium",children:"Mark all as read"})})]})]})}function uR(){const r=et(),[e,t]=F.useState({name:"User",email:"",phone:"",address1:"",address2:""}),[s,o]=F.useState(""),[l,h]=F.useState(!0),[p,y]=F.useState(!1);F.useEffect(()=>{const I=Zc($s,async D=>{if(!D){o(""),t({name:"User",email:"",phone:"",address1:"",address2:""}),h(!1);return}o(D.uid);try{const W=await Bx(Wc(Ho,"users",D.uid));if(W.exists()){const q=W.data();t({name:q?.name||D.displayName||"User",email:q?.email||D.email||"",phone:q?.phone||"",address1:q?.address1||"",address2:q?.address2||""})}else t({name:D.displayName||"User",email:D.email||"",phone:"",address1:"",address2:""})}catch{t({name:D.displayName||"User",email:D.email||"",phone:"",address1:"",address2:""})}finally{h(!1)}});return()=>I()},[]);const v=I=>{const{name:D,value:W}=I.target;t(q=>({...q,[D]:W}))},w=async I=>{if(I.preventDefault(),!s){alert("Please login first.");return}y(!0);try{await zx(Wc(Ho,"users",s),{name:e.name.trim(),email:e.email.trim(),phone:e.phone.trim(),address1:e.address1,address2:e.address2,updatedAt:Lx()},{merge:!0}),alert("Profile updated successfully!")}catch(D){alert(D?.message||"Failed to save profile.")}finally{y(!1)}},E=async()=>{try{await Hv($s)}finally{r("/")}};return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Profile & Settings"}),c.jsx("p",{className:"text-gray-600",children:"Manage your account information and preferences"})]}),c.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[c.jsx("div",{className:"md:col-span-1",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[c.jsxs("div",{className:"text-center mb-6",children:[c.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-3",children:c.jsx(Nc,{className:"w-10 h-10 text-orange-600"})}),c.jsx("h3",{className:"font-bold text-black",children:l?"Loading...":e.name}),c.jsx("p",{className:"text-sm text-gray-600",children:l?"":e.email})]}),c.jsxs("nav",{className:"space-y-2",children:[c.jsx("button",{className:"w-full text-left px-4 py-2 bg-orange-50 text-orange-700 rounded-lg font-medium",children:"Profile Details"}),c.jsx("button",{className:"w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg",children:"Saved Addresses"}),c.jsx("button",{className:"w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg",children:"Security"}),c.jsx("button",{className:"w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg",children:"Contact Support"})]}),c.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200",children:c.jsxs("button",{onClick:E,className:"w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium",children:[c.jsx(ov,{className:"w-4 h-4"}),"Logout"]})})]})}),c.jsxs("div",{className:"md:col-span-2",children:[c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[c.jsx("h2",{className:"text-xl font-bold text-black mb-6",children:"Personal Information"}),c.jsxs("form",{onSubmit:w,className:"space-y-6",children:[c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(Nc,{className:"w-4 h-4 inline mr-2"}),"Full Name"]}),c.jsx("input",{type:"text",name:"name",value:e.name,onChange:v,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",disabled:l})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(Gf,{className:"w-4 h-4 inline mr-2"}),"Email Address"]}),c.jsx("input",{type:"email",name:"email",value:e.email,onChange:v,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",disabled:l})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(Kf,{className:"w-4 h-4 inline mr-2"}),"Phone Number"]}),c.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:v,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",disabled:l})]}),c.jsx(Qe,{type:"submit",fullWidth:!0,disabled:l||p,children:p?"Saving...":"Save Changes"})]})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[c.jsxs("div",{className:"flex justify-between items-center mb-6",children:[c.jsx("h2",{className:"text-xl font-bold text-black",children:"Saved Addresses"}),c.jsx("button",{className:"text-orange-600 hover:text-orange-700 font-medium text-sm",children:"+ Add New"})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsx(F0,{icon:c.jsx(mr,{className:"w-5 h-5"}),label:"Home",address:e.address1||"—"}),c.jsx(F0,{icon:c.jsx(mr,{className:"w-5 h-5"}),label:"Work",address:e.address2||"—"})]})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[c.jsx("h2",{className:"text-xl font-bold text-black mb-4",children:"Contact Support"}),c.jsx("p",{className:"text-gray-600 mb-4",children:"Need help? Send us a message and we'll get back to you within 24 hours."}),c.jsx("textarea",{rows:4,placeholder:"Describe your issue or question...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent mb-4"}),c.jsx(Qe,{variant:"outline",fullWidth:!0,children:"Send Message"})]})]})]})]})]})}function F0({icon:r,label:e,address:t}){return c.jsxs("div",{className:"flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-orange-600 transition-colors",children:[c.jsx("div",{className:"bg-orange-100 p-2 rounded-lg text-orange-600",children:r}),c.jsxs("div",{className:"flex-1",children:[c.jsx("p",{className:"font-medium text-black mb-1",children:e}),c.jsx("p",{className:"text-sm text-gray-600",children:t})]}),c.jsx("button",{className:"text-sm text-orange-600 hover:underline",children:"Edit"})]})}function cR(r){return r?r.toDate().toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):"—"}function dR(r){if(!r)return"";const e=Date.now(),t=r.toDate().getTime(),s=Math.max(0,e-t),o=Math.floor(s/6e4);if(o<1)return"Just now";if(o<60)return`${o} min ago`;const l=Math.floor(o/60);return l<24?`${l} hours ago`:`${Math.floor(l/24)} days ago`}function hR(){const r=et(),[e,t]=F.useState(!1),[s,o]=F.useState(!1),[l,h]=F.useState(""),[p,y]=F.useState(!1),[v,w]=F.useState([]);F.useEffect(()=>{let I=null;const D=Zc($s,W=>{if(t(!0),!W){o(!1),h(""),w([]),I&&I(),I=null;return}o(!0),h(W.uid),y(!0);const q=Mx(Nx(Ho,"users",W.uid,"projects"),Fx("createdAt","desc"));I&&I(),I=$x(q,z=>{const K=z.docs.map(J=>{const te=J.data();return{id:J.id,name:te?.name||"Untitled Project",status:te?.status||"Planning",progress:Number(te?.progress??0),createdAt:te?.createdAt||null}});w(K),y(!1)},()=>{w([]),y(!1)})});return()=>{D(),I&&I()}},[]);const E=F.useMemo(()=>s?"My Projects":"Demo Mode",[s]);return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:s}),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"mb-6",children:[c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:E}),c.jsx("p",{className:"text-gray-600",children:"Manage and track your home projects"}),e&&!s&&c.jsxs("div",{className:"mt-4 flex items-center justify-between gap-3 rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white px-4 py-3",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(iv,{className:"w-4 h-4 text-orange-700"}),c.jsxs("p",{className:"text-sm text-gray-700",children:["You are viewing ",c.jsx("span",{className:"font-semibold",children:"Demo Mode"}),". Log in to see your own projects."]})]}),c.jsx("button",{onClick:()=>r("/login"),className:"text-sm font-semibold text-orange-700 hover:underline",children:"Log In"})]})]}),s?p?c.jsx("div",{className:"py-12 text-center text-gray-600",children:"Loading your projects..."}):v.length===0?c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:[c.jsx("p",{className:"text-gray-700 mb-3",children:"You don't have any projects yet."}),c.jsx("button",{onClick:()=>r("/requirements/step-1"),className:"text-orange-600 font-semibold hover:underline",children:"Start Your First Project"})]}):c.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:v.map(I=>c.jsxs("button",{onClick:()=>r(`/project/${I.id}`),className:"text-left bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100",children:[c.jsxs("div",{className:"flex items-start justify-between mb-4",children:[c.jsx("div",{className:"inline-flex items-center justify-center w-10 h-10 bg-orange-50 rounded-lg",children:c.jsx(sT,{className:"w-5 h-5 text-orange-600"})}),c.jsx("span",{className:"text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700",children:I.status})]}),c.jsx("h3",{className:"text-xl font-bold text-black mb-2",children:I.name}),c.jsxs("div",{className:"flex justify-between items-center mb-2",children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Progress"}),c.jsxs("p",{className:"text-sm font-semibold text-orange-600",children:[I.progress,"%"]})]}),c.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2 mb-5",children:c.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:`${I.progress}%`}})}),c.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-500",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Ws,{className:"w-4 h-4"}),c.jsx("span",{children:cR(I.createdAt)})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(gl,{className:"w-4 h-4"}),c.jsx("span",{children:dR(I.createdAt)})]})]}),c.jsxs("div",{className:"mt-5 flex items-center gap-2 text-orange-600 font-semibold text-sm",children:["Open Project ",c.jsx(Qc,{className:"w-4 h-4"})]})]},I.id))}):c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:[c.jsx("p",{className:"text-gray-700 mb-3",children:"No projects are shown in Demo Mode."}),c.jsx("p",{className:"text-sm text-gray-500 mb-5",children:"Log in with your account to view projects saved under your email."}),c.jsx("button",{onClick:()=>r("/login"),className:"px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700",children:"Go to Login"})]})]})]})}function fR(){const{projectId:r}=qs(),e=et(),t=[{id:"requirements",title:"Requirements",description:"Define your project needs",icon:c.jsx(Al,{className:"w-5 h-5"}),status:"completed",action:()=>e("/requirements/step1")},{id:"design",title:"Design",description:"View and customize plans",icon:c.jsx(Hr,{className:"w-5 h-5"}),status:"current",action:()=>e("/plans")},{id:"services",title:"Services",description:"Book professionals",icon:c.jsx(Hf,{className:"w-5 h-5"}),status:"pending",action:()=>e("/services")},{id:"loan",title:"Loan Contact",description:"Get financial assistance",icon:c.jsx(Pl,{className:"w-5 h-5"}),status:"pending",action:()=>e("/loan-request")},{id:"inspection",title:"Land Inspection",description:"Verify property details",icon:c.jsx(mr,{className:"w-5 h-5"}),status:"pending",action:()=>e("/land-inspection")}];return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-8",children:[c.jsxs("div",{className:"flex justify-between items-start mb-4",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Modern Villa Project"}),c.jsx("p",{className:"text-gray-600",children:"Created on Jan 5, 2026"})]}),c.jsx("span",{className:"px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium",children:"In Progress"})]}),c.jsx("div",{className:"flex items-center gap-4",children:c.jsxs("div",{className:"flex-1",children:[c.jsxs("div",{className:"flex justify-between mb-2",children:[c.jsx("span",{className:"text-sm text-gray-600",children:"Overall Progress"}),c.jsx("span",{className:"text-sm font-medium text-orange-600",children:"65%"})]}),c.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:c.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:"65%"}})})]})})]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[c.jsx("h2",{className:"text-2xl font-bold text-black mb-6",children:"Project Timeline"}),c.jsx("div",{className:"space-y-6",children:t.map((s,o)=>c.jsxs("div",{className:"relative",children:[o<t.length-1&&c.jsx("div",{className:`absolute left-5 top-12 w-0.5 h-16 ${s.status==="completed"?"bg-green-600":"bg-gray-300"}`}),c.jsxs("div",{className:`flex items-start gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${s.status==="completed"?"border-green-200 bg-green-50":s.status==="current"?"border-orange-600 bg-orange-50":"border-gray-200 bg-white hover:border-gray-300"}`,onClick:s.action,children:[c.jsx("div",{className:`p-2 rounded-full ${s.status==="completed"?"bg-green-600 text-white":s.status==="current"?"bg-orange-600 text-white":"bg-gray-200 text-gray-500"}`,children:s.status==="completed"?c.jsx(Yo,{className:"w-5 h-5"}):s.icon}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h3",{className:"text-lg font-semibold text-black mb-1",children:s.title}),c.jsx("p",{className:"text-sm text-gray-600",children:s.description})]}),c.jsx("button",{className:`px-4 py-2 rounded-lg font-medium ${s.status==="current"?"bg-orange-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:s.status==="completed"?"Review":s.status==="current"?"Continue":"Start"})]})]},s.id))})]})]})]})}function pR(){const{planId:r}=qs(),e=et(),t="/plans/ModernVillaPlan.pdf",s=()=>{e("/requirements/step-1")},o=()=>{window.open(t,"_blank")},l=()=>{const p="roo_project_plans",y=JSON.parse(localStorage.getItem(p)||"[]"),v={planId:r||"1",name:"Modern Villa Plan",area:"2,500 sq. ft.",addedAt:new Date().toISOString()},E=y.some(I=>I.planId===v.planId)?y:[v,...y];localStorage.setItem(p,JSON.stringify(E)),e("/my-projects")},h=()=>{alert("Fullscreen preview is a placeholder in this prototype.")};return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[c.jsxs("button",{onClick:()=>e("/plans"),className:"flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-6",children:[c.jsx(Wf,{className:"w-5 h-5"}),"Back to Plans Library"]}),c.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[c.jsxs("div",{className:"bg-gradient-to-br from-gray-100 to-gray-200 h-[600px] flex items-center justify-center relative",children:[c.jsx(Hr,{className:"w-40 h-40 text-gray-400"}),c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("p",{className:"text-2xl font-bold text-gray-600 mb-2",children:"2D/3D Plan Preview"}),c.jsx("p",{className:"text-gray-500",children:"Interactive plan viewer placeholder"})]})}),c.jsx("button",{onClick:h,className:"absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md hover:bg-gray-50","aria-label":"Fullscreen",children:c.jsx(gT,{className:"w-5 h-5 text-gray-700"})})]}),c.jsxs("div",{className:"p-8",children:[c.jsxs("div",{className:"flex justify-between items-start mb-6",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Modern Villa Plan"}),c.jsx("p",{className:"text-gray-600",children:"Contemporary design with spacious layout"})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("div",{className:"text-2xl font-bold text-orange-600",children:"2,500 sq. ft."}),c.jsx("div",{className:"text-sm text-gray-600",children:"Total Area"})]})]}),c.jsxs("div",{className:"grid md:grid-cols-4 gap-6 mb-8",children:[c.jsx(fc,{label:"Bedrooms",value:"3"}),c.jsx(fc,{label:"Bathrooms",value:"2"}),c.jsx(fc,{label:"Floors",value:"2"}),c.jsx(fc,{label:"Style",value:"Contemporary"})]}),c.jsxs("div",{className:"mb-8",children:[c.jsx("h3",{className:"text-lg font-bold text-black mb-3",children:"Key Features"}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-3",children:[c.jsx(ko,{text:"Open concept living and dining area"}),c.jsx(ko,{text:"Master suite with walk-in closet"}),c.jsx(ko,{text:"Modern kitchen with island"}),c.jsx(ko,{text:"Covered outdoor patio"}),c.jsx(ko,{text:"Two-car garage"}),c.jsx(ko,{text:"Energy-efficient design"})]})]}),c.jsxs("div",{className:"flex flex-wrap gap-4",children:[c.jsxs(Qe,{variant:"primary",onClick:s,children:[c.jsx(xT,{className:"w-5 h-5 mr-2 inline"}),"Request Changes"]}),c.jsxs(Qe,{variant:"outline",onClick:o,children:[c.jsx(tT,{className:"w-5 h-5 mr-2 inline"}),"Download Plan"]}),c.jsx(Qe,{variant:"secondary",onClick:l,children:"Add to Project"})]}),c.jsxs("p",{className:"text-xs text-gray-500 mt-4",children:["Plan ID: ",r||"1"]})]})]})]})]})}function fc({label:r,value:e}){return c.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center",children:[c.jsx("div",{className:"text-2xl font-bold text-black mb-1",children:e}),c.jsx("div",{className:"text-sm text-gray-600",children:r})]})}function ko({text:r}){return c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-2 h-2 bg-orange-600 rounded-full"}),c.jsx("span",{className:"text-gray-700",children:r})]})}function mR(){const{inspectionId:r}=qs(),e=et(),t=[{status:"Requested",completed:!0,date:"Jan 17, 2026"},{status:"Scheduled",completed:!0,date:"Jan 18, 2026"},{status:"In Progress",completed:!1,date:"Jan 22, 2026"},{status:"Completed",completed:!1,date:"Pending"}];return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Inspection Status"}),c.jsx("p",{className:"text-gray-600",children:"Track your land inspection progress"})]}),c.jsxs("div",{className:"mb-8",children:[c.jsx("h2",{className:"text-xl font-bold text-black mb-6",children:"Inspection Progress"}),c.jsx("div",{className:"space-y-6",children:t.map((s,o)=>c.jsxs("div",{className:"relative flex items-start gap-4",children:[o<t.length-1&&c.jsx("div",{className:`absolute left-5 top-12 w-0.5 h-16 ${s.completed?"bg-green-600":"bg-gray-300"}`}),c.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${s.completed?"bg-green-600 text-white":"bg-gray-200 text-gray-500"}`,children:s.completed?c.jsx(Yo,{className:"w-5 h-5"}):c.jsx(gl,{className:"w-5 h-5"})}),c.jsx("div",{className:"flex-1 pb-8",children:c.jsx("div",{className:"flex justify-between items-start",children:c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold text-black",children:s.status}),c.jsx("p",{className:"text-sm text-gray-600",children:s.date})]})})})]},o))})]}),c.jsxs("div",{className:"bg-gray-50 rounded-lg p-6 mb-8",children:[c.jsx("h2",{className:"text-xl font-bold text-black mb-4",children:"Inspector Details"}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:c.jsx(Nc,{className:"w-5 h-5 text-orange-600"})}),c.jsxs("div",{children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Inspector Name"}),c.jsx("p",{className:"font-medium text-black",children:"Michael Anderson"})]})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:c.jsx(Kf,{className:"w-5 h-5 text-orange-600"})}),c.jsxs("div",{children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Phone"}),c.jsx("p",{className:"font-medium text-black",children:"+1 (555) 123-4567"})]})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"bg-orange-100 p-2 rounded-lg",children:c.jsx(Gf,{className:"w-5 h-5 text-orange-600"})}),c.jsxs("div",{children:[c.jsx("p",{className:"text-sm text-gray-600",children:"Email"}),c.jsx("p",{className:"font-medium text-black",children:"m.anderson@inspector.com"})]})]})]})]}),c.jsxs("div",{className:"bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8",children:[c.jsx("h3",{className:"font-bold text-black mb-3",children:"Scheduled Inspection"}),c.jsxs("div",{className:"space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Ws,{className:"w-4 h-4 text-orange-600"}),c.jsxs("span",{className:"text-sm text-gray-700",children:[c.jsx("strong",{children:"Date:"})," Monday, January 22, 2026"]})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(gl,{className:"w-4 h-4 text-orange-600"}),c.jsxs("span",{className:"text-sm text-gray-700",children:[c.jsx("strong",{children:"Time:"})," 10:00 AM - 12:00 PM"]})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(mr,{className:"w-4 h-4 text-orange-600"}),c.jsxs("span",{className:"text-sm text-gray-700",children:[c.jsx("strong",{children:"Location:"})," 123 Main Street, Springfield, 12345"]})]})]})]}),c.jsxs("div",{className:"flex gap-4",children:[c.jsx(Qe,{onClick:()=>e("/project/1"),fullWidth:!0,children:"Back to Project"}),c.jsx(Qe,{onClick:()=>e("/dashboard"),variant:"outline",fullWidth:!0,children:"Go to Dashboard"})]})]})})]})}function gR(){const r=et(),[e,t]=F.useState({location:"",address:"",date:"",time:"",inspectionType:"",notes:""}),s=l=>{l.preventDefault(),r("/inspection-status/1")},o=l=>{const{name:h,value:p}=l.target;t(y=>({...y,[h]:p}))};return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4",children:c.jsx(mr,{className:"w-8 h-8 text-orange-600"})}),c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Land Inspection Request"}),c.jsx("p",{className:"text-gray-600",children:"Schedule a professional inspection of your property"})]}),c.jsxs("form",{onSubmit:s,className:"space-y-6",children:[c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(mr,{className:"w-4 h-4 inline mr-2"}),"City/Location"]}),c.jsx("input",{type:"text",name:"location",value:e.location,onChange:o,required:!0,placeholder:"e.g., Springfield",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Property Address"}),c.jsx("input",{type:"text",name:"address",value:e.address,onChange:o,required:!0,placeholder:"Full address including street, state, and ZIP",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(Al,{className:"w-4 h-4 inline mr-2"}),"Inspection Type"]}),c.jsxs("select",{name:"inspectionType",value:e.inspectionType,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Select inspection type..."}),c.jsx("option",{value:"basic",children:"Basic Land Survey"}),c.jsx("option",{value:"soil",children:"Soil Testing"}),c.jsx("option",{value:"boundary",children:"Boundary Verification"}),c.jsx("option",{value:"comprehensive",children:"Comprehensive Inspection"})]})]}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(Ws,{className:"w-4 h-4 inline mr-2"}),"Preferred Date"]}),c.jsx("input",{type:"date",name:"date",value:e.date,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Preferred Time"}),c.jsxs("select",{name:"time",value:e.time,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Select time..."}),c.jsx("option",{value:"morning",children:"Morning (8:00 AM - 12:00 PM)"}),c.jsx("option",{value:"afternoon",children:"Afternoon (12:00 PM - 4:00 PM)"}),c.jsx("option",{value:"evening",children:"Evening (4:00 PM - 6:00 PM)"})]})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Additional Notes (Optional)"}),c.jsx("textarea",{name:"notes",value:e.notes,onChange:o,rows:4,placeholder:"Any specific areas of concern or special requirements...",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[c.jsx(Ti,{className:"w-4 h-4 inline mr-2"}),"Upload Property Documents (Optional)"]}),c.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-600 transition-colors cursor-pointer",children:[c.jsx(Ti,{className:"w-8 h-8 text-gray-400 mx-auto mb-2"}),c.jsx("p",{className:"text-sm text-gray-600",children:"Click to upload property deed, survey, or other documents"}),c.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"PDF, PNG, JPG up to 10MB"})]})]}),c.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:c.jsxs("p",{className:"text-sm text-blue-900",children:[c.jsx("strong",{children:"Inspection Fee:"})," $150 - $500 depending on inspection type. Payment will be collected at the time of inspection."]})}),c.jsxs("div",{className:"flex gap-4 pt-4",children:[c.jsx(Qe,{type:"button",variant:"outline",onClick:()=>r("/dashboard"),fullWidth:!0,children:"Cancel"}),c.jsx(Qe,{type:"submit",fullWidth:!0,children:"Submit Request"})]})]})]})})]})}function yR(){const r=et(),[e,t]=F.useState({floors:"",rooms:"",bathrooms:"",landSize:"",budget:""}),s=l=>{l.preventDefault(),r("/requirements/step2")},o=l=>{const{name:h,value:p}=l.target;t(y=>({...y,[h]:p}))};return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[c.jsxs("div",{className:"mb-8",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("span",{className:"text-sm font-medium text-orange-600",children:"Step 1 of 3"}),c.jsx("span",{className:"text-sm text-gray-600",children:"House Basics"})]}),c.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:c.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:"33%"}})})]}),c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4",children:c.jsx(Hr,{className:"w-8 h-8 text-orange-600"})}),c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"House Basics"}),c.jsx("p",{className:"text-gray-600",children:"Tell us about your basic house requirements"})]}),c.jsxs("form",{onSubmit:s,className:"space-y-6",children:[c.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Number of Floors"}),c.jsxs("select",{name:"floors",value:e.floors,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Select floors..."}),c.jsx("option",{value:"1",children:"1 Floor"}),c.jsx("option",{value:"2",children:"2 Floors"}),c.jsx("option",{value:"3",children:"3 Floors"}),c.jsx("option",{value:"4+",children:"4+ Floors"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Number of Rooms"}),c.jsxs("select",{name:"rooms",value:e.rooms,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Select rooms..."}),c.jsx("option",{value:"1",children:"1 Room"}),c.jsx("option",{value:"2",children:"2 Rooms"}),c.jsx("option",{value:"3",children:"3 Rooms"}),c.jsx("option",{value:"4",children:"4 Rooms"}),c.jsx("option",{value:"5+",children:"5+ Rooms"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Number of Bathrooms"}),c.jsxs("select",{name:"bathrooms",value:e.bathrooms,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Select bathrooms..."}),c.jsx("option",{value:"1",children:"1 Bathroom"}),c.jsx("option",{value:"2",children:"2 Bathrooms"}),c.jsx("option",{value:"3",children:"3 Bathrooms"}),c.jsx("option",{value:"4+",children:"4+ Bathrooms"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Land Size (sq. ft.)"}),c.jsx("input",{type:"number",name:"landSize",value:e.landSize,onChange:o,required:!0,placeholder:"e.g., 2500",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Budget Range"}),c.jsxs("select",{name:"budget",value:e.budget,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Select budget..."}),c.jsx("option",{value:"50k-100k",children:"$50,000 - $100,000"}),c.jsx("option",{value:"100k-200k",children:"$100,000 - $200,000"}),c.jsx("option",{value:"200k-300k",children:"$200,000 - $300,000"}),c.jsx("option",{value:"300k-500k",children:"$300,000 - $500,000"}),c.jsx("option",{value:"500k+",children:"$500,000+"})]})]}),c.jsxs("div",{className:"flex gap-4 pt-4",children:[c.jsx(Qe,{type:"button",variant:"outline",onClick:()=>r("/dashboard"),fullWidth:!0,children:"Cancel"}),c.jsxs(Qe,{type:"submit",fullWidth:!0,children:["Next: Landscape Needs",c.jsx(Qc,{className:"w-5 h-5 ml-2 inline"})]})]})]})]})})]})}function vR(){const r=et(),[e,t]=F.useState({gardenArea:"",plantPreferences:[],parking:"",outdoorSeating:!1,waterFeatures:!1}),s=p=>{p.preventDefault(),r("/requirements/step3")},o=p=>{const{name:y,value:v,type:w}=p.target;if(w==="checkbox"){const E=p.target.checked;t(I=>({...I,[y]:E}))}else t(E=>({...E,[y]:v}))},l=p=>{t(y=>({...y,plantPreferences:y.plantPreferences.includes(p)?y.plantPreferences.filter(v=>v!==p):[...y.plantPreferences,p]}))},h=["Flowers","Trees","Shrubs","Grass Lawn","Vegetable Garden","Herbs"];return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[c.jsxs("div",{className:"mb-8",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("span",{className:"text-sm font-medium text-orange-600",children:"Step 2 of 3"}),c.jsx("span",{className:"text-sm text-gray-600",children:"Landscape Needs"})]}),c.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:c.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:"66%"}})})]}),c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4",children:c.jsx(TT,{className:"w-8 h-8 text-orange-600"})}),c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Landscape Needs"}),c.jsx("p",{className:"text-gray-600",children:"Define your outdoor and landscape preferences"})]}),c.jsxs("form",{onSubmit:s,className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Garden Area Size (sq. ft.)"}),c.jsx("input",{type:"number",name:"gardenArea",value:e.gardenArea,onChange:o,required:!0,placeholder:"e.g., 500",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Plant Preferences (Select all that apply)"}),c.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:h.map(p=>c.jsx("button",{type:"button",onClick:()=>l(p),className:`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${e.plantPreferences.includes(p)?"border-orange-600 bg-orange-50 text-orange-700":"border-gray-200 bg-white text-gray-700 hover:border-gray-300"}`,children:p},p))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Parking Space Required"}),c.jsxs("select",{name:"parking",value:e.parking,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent",children:[c.jsx("option",{value:"",children:"Select parking..."}),c.jsx("option",{value:"none",children:"No Parking"}),c.jsx("option",{value:"1",children:"1 Car"}),c.jsx("option",{value:"2",children:"2 Cars"}),c.jsx("option",{value:"3+",children:"3+ Cars"})]})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx("input",{type:"checkbox",id:"outdoorSeating",name:"outdoorSeating",checked:e.outdoorSeating,onChange:o,className:"w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-600"}),c.jsx("label",{htmlFor:"outdoorSeating",className:"ml-3 text-gray-700",children:"Include Outdoor Seating Area"})]}),c.jsxs("div",{className:"flex items-center",children:[c.jsx("input",{type:"checkbox",id:"waterFeatures",name:"waterFeatures",checked:e.waterFeatures,onChange:o,className:"w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-600"}),c.jsx("label",{htmlFor:"waterFeatures",className:"ml-3 text-gray-700",children:"Include Water Features (Fountain, Pond, etc.)"})]})]}),c.jsxs("div",{className:"flex gap-4 pt-4",children:[c.jsxs(Qe,{type:"button",variant:"outline",onClick:()=>r("/requirements/step1"),fullWidth:!0,children:[c.jsx(Wf,{className:"w-5 h-5 mr-2 inline"}),"Back"]}),c.jsxs(Qe,{type:"submit",fullWidth:!0,children:["Next: Upload & Confirm",c.jsx(Qc,{className:"w-5 h-5 ml-2 inline"})]})]})]})]})})]})}function _R(){const r=et(),e=t=>{t.preventDefault(),r("/project/1")};return c.jsxs("div",{className:"min-h-screen bg-gray-50",children:[c.jsx(pt,{isLoggedIn:!0}),c.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:c.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[c.jsxs("div",{className:"mb-8",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("span",{className:"text-sm font-medium text-orange-600",children:"Step 3 of 3"}),c.jsx("span",{className:"text-sm text-gray-600",children:"Upload & Confirm"})]}),c.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:c.jsx("div",{className:"bg-orange-600 h-2 rounded-full",style:{width:"100%"}})})]}),c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4",children:c.jsx(Ti,{className:"w-8 h-8 text-orange-600"})}),c.jsx("h1",{className:"text-3xl font-bold text-black mb-2",children:"Upload & Confirm"}),c.jsx("p",{className:"text-gray-600",children:"Add supporting documents and review your requirements"})]}),c.jsxs("form",{onSubmit:e,className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Upload Land Sketch (Optional)"}),c.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-600 transition-colors cursor-pointer",children:[c.jsx(Ti,{className:"w-10 h-10 text-gray-400 mx-auto mb-3"}),c.jsx("p",{className:"text-gray-600 mb-1",children:"Click to upload or drag and drop"}),c.jsx("p",{className:"text-sm text-gray-500",children:"PNG, JPG, PDF up to 10MB"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-3",children:"Upload Reference Images (Optional)"}),c.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-600 transition-colors cursor-pointer",children:[c.jsx(Ti,{className:"w-10 h-10 text-gray-400 mx-auto mb-3"}),c.jsx("p",{className:"text-gray-600 mb-1",children:"Upload inspiration or reference images"}),c.jsx("p",{className:"text-sm text-gray-500",children:"Multiple files allowed • PNG, JPG up to 10MB each"})]})]}),c.jsxs("div",{className:"bg-gray-50 rounded-lg p-6",children:[c.jsx("h3",{className:"text-lg font-bold text-black mb-4",children:"Requirements Summary"}),c.jsxs("div",{className:"space-y-3",children:[c.jsx(ar,{label:"House Floors",value:"2 Floors"}),c.jsx(ar,{label:"Rooms",value:"3 Rooms"}),c.jsx(ar,{label:"Bathrooms",value:"2 Bathrooms"}),c.jsx(ar,{label:"Land Size",value:"2,500 sq. ft."}),c.jsx(ar,{label:"Budget",value:"$200,000 - $300,000"}),c.jsxs("div",{className:"border-t border-gray-300 my-3 pt-3",children:[c.jsx(ar,{label:"Garden Area",value:"500 sq. ft."}),c.jsx(ar,{label:"Plant Preferences",value:"Flowers, Trees, Grass Lawn"}),c.jsx(ar,{label:"Parking",value:"2 Cars"}),c.jsx(ar,{label:"Outdoor Seating",value:"Yes"}),c.jsx(ar,{label:"Water Features",value:"No"})]})]})]}),c.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3",children:[c.jsx(Yo,{className:"w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-sm text-blue-900 font-medium",children:"Almost there!"}),c.jsx("p",{className:"text-sm text-blue-700",children:"After submitting, we'll generate personalized house plans and connect you with service providers."})]})]}),c.jsxs("div",{className:"flex gap-4 pt-4",children:[c.jsxs(Qe,{type:"button",variant:"outline",onClick:()=>r("/requirements/step2"),fullWidth:!0,children:[c.jsx(Wf,{className:"w-5 h-5 mr-2 inline"}),"Back"]}),c.jsx(Qe,{type:"submit",fullWidth:!0,children:"Submit Requirements"})]})]})]})})]})}function ar({label:r,value:e}){return c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsxs("span",{className:"text-sm text-gray-600",children:[r,":"]}),c.jsx("span",{className:"text-sm font-medium text-black",children:e})]})}function xR(){const{id:r}=qs();return c.jsx(kt,{to:`/service/${r}`,replace:!0})}function wR(){const{id:r}=qs();return c.jsx(kt,{to:`/plan-viewer?id=${r??""}`,replace:!0})}function ER(){const{pkg:r}=qs();return c.jsx(kt,{to:`/book-service?pkg=${r??""}`,replace:!0})}function TR(){return c.jsx("div",{className:"min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h1",{className:"text-3xl font-bold",children:"404"}),c.jsx("p",{className:"mt-2 text-gray-400",children:"Page not found"})]})})}function IR({children:r}){const e=Wr(),t=sessionStorage.getItem("roo_welcome_seen"),o=["/","/login","/signup","/welcome"].includes(e.pathname);return!t&&o&&e.pathname!=="/welcome"?c.jsx(kt,{to:"/welcome",replace:!0}):c.jsx(c.Fragment,{children:r})}function SR(){return c.jsx(NE,{children:c.jsx(IR,{children:c.jsxs(rE,{children:[c.jsx(Ne,{path:"/welcome",element:c.jsx(RT,{})}),c.jsx(Ne,{path:"/",element:c.jsx(JC,{})}),c.jsx(Ne,{path:"/login",element:c.jsx(XC,{})}),c.jsx(Ne,{path:"/signup",element:c.jsx(ZC,{})}),c.jsx(Ne,{path:"/dashboard",element:c.jsx(eR,{})}),c.jsx(Ne,{path:"/plans",element:c.jsx(tR,{})}),c.jsx(Ne,{path:"/services",element:c.jsx(nR,{})}),c.jsx(Ne,{path:"/services/:id",element:c.jsx(xR,{})}),c.jsx(Ne,{path:"/service/:id",element:c.jsx(rR,{})}),c.jsx(Ne,{path:"/book-service",element:c.jsx(sR,{})}),c.jsx(Ne,{path:"/booking-confirmation",element:c.jsx(iR,{})}),c.jsx(Ne,{path:"/book-service/:pkg",element:c.jsx(ER,{})}),c.jsx(Ne,{path:"/book-service-form",element:c.jsx(kt,{to:"/book-service",replace:!0})}),c.jsx(Ne,{path:"/booking",element:c.jsx(kt,{to:"/book-service",replace:!0})}),c.jsx(Ne,{path:"/book",element:c.jsx(kt,{to:"/book-service",replace:!0})}),c.jsx(Ne,{path:"/booking-confirm",element:c.jsx(kt,{to:"/booking-confirmation",replace:!0})}),c.jsx(Ne,{path:"/booking-success",element:c.jsx(kt,{to:"/booking-confirmation",replace:!0})}),c.jsx(Ne,{path:"/confirmation",element:c.jsx(kt,{to:"/booking-confirmation",replace:!0})}),c.jsx(Ne,{path:"/loan-contact",element:c.jsx(oR,{})}),c.jsx(Ne,{path:"/loan-submitted",element:c.jsx(aR,{})}),c.jsx(Ne,{path:"/loan-request",element:c.jsx(kt,{to:"/loan-contact",replace:!0})}),c.jsx(Ne,{path:"/loan-contact-request",element:c.jsx(kt,{to:"/loan-contact",replace:!0})}),c.jsx(Ne,{path:"/loan-success",element:c.jsx(kt,{to:"/loan-submitted",replace:!0})}),c.jsx(Ne,{path:"/loan-request-success",element:c.jsx(kt,{to:"/loan-submitted",replace:!0})}),c.jsx(Ne,{path:"/notifications",element:c.jsx(lR,{})}),c.jsx(Ne,{path:"/profile-settings",element:c.jsx(uR,{})}),c.jsx(Ne,{path:"/profile",element:c.jsx(kt,{to:"/profile-settings",replace:!0})}),c.jsx(Ne,{path:"/my-projects",element:c.jsx(hR,{})}),c.jsx(Ne,{path:"/project/:id",element:c.jsx(fR,{})}),c.jsx(Ne,{path:"/plan-viewer",element:c.jsx(pR,{})}),c.jsx(Ne,{path:"/inspection-status",element:c.jsx(mR,{})}),c.jsx(Ne,{path:"/land-inspection",element:c.jsx(gR,{})}),c.jsx(Ne,{path:"/plans/:id",element:c.jsx(wR,{})}),c.jsx(Ne,{path:"/requirements/step-1",element:c.jsx(yR,{})}),c.jsx(Ne,{path:"/requirements/step-2",element:c.jsx(vR,{})}),c.jsx(Ne,{path:"/requirements/step-3",element:c.jsx(_R,{})}),c.jsx(Ne,{path:"/requirements/step1",element:c.jsx(kt,{to:"/requirements/step-1",replace:!0})}),c.jsx(Ne,{path:"/requirements/step2",element:c.jsx(kt,{to:"/requirements/step-2",replace:!0})}),c.jsx(Ne,{path:"/requirements/step3",element:c.jsx(kt,{to:"/requirements/step-3",replace:!0})}),c.jsx(Ne,{path:"*",element:c.jsx(TR,{})})]})})})}o1.createRoot(document.getElementById("root")).render(c.jsx(SR,{}));
