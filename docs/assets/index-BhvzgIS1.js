(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function G_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _c={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function W_(){if(mp)return dt;mp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function v(F,se,De){this.props=F,this.context=se,this.refs=A,this.updater=De||S}v.prototype.isReactComponent={},v.prototype.setState=function(F,se){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,se,"setState")},v.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=v.prototype;function I(F,se,De){this.props=F,this.context=se,this.refs=A,this.updater=De||S}var P=I.prototype=new _;P.constructor=I,T(P,v.prototype),P.isPureReactComponent=!0;var D=Array.isArray,j=Object.prototype.hasOwnProperty,z={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function X(F,se,De){var K,ce={},xe=null,Me=null;if(se!=null)for(K in se.ref!==void 0&&(Me=se.ref),se.key!==void 0&&(xe=""+se.key),se)j.call(se,K)&&!N.hasOwnProperty(K)&&(ce[K]=se[K]);var Le=arguments.length-2;if(Le===1)ce.children=De;else if(1<Le){for(var Fe=Array(Le),je=0;je<Le;je++)Fe[je]=arguments[je+2];ce.children=Fe}if(F&&F.defaultProps)for(K in Le=F.defaultProps,Le)ce[K]===void 0&&(ce[K]=Le[K]);return{$$typeof:s,type:F,key:xe,ref:Me,props:ce,_owner:z.current}}function L(F,se){return{$$typeof:s,type:F.type,key:se,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function B(F){var se={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(De){return se[De]})}var ae=/\/+/g;function ee(F,se){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):se.toString(36)}function fe(F,se,De,K,ce){var xe=typeof F;(xe==="undefined"||xe==="boolean")&&(F=null);var Me=!1;if(F===null)Me=!0;else switch(xe){case"string":case"number":Me=!0;break;case"object":switch(F.$$typeof){case s:case e:Me=!0}}if(Me)return Me=F,ce=ce(Me),F=K===""?"."+ee(Me,0):K,D(ce)?(De="",F!=null&&(De=F.replace(ae,"$&/")+"/"),fe(ce,se,De,"",function(je){return je})):ce!=null&&(R(ce)&&(ce=L(ce,De+(!ce.key||Me&&Me.key===ce.key?"":(""+ce.key).replace(ae,"$&/")+"/")+F)),se.push(ce)),1;if(Me=0,K=K===""?".":K+":",D(F))for(var Le=0;Le<F.length;Le++){xe=F[Le];var Fe=K+ee(xe,Le);Me+=fe(xe,se,De,Fe,ce)}else if(Fe=x(F),typeof Fe=="function")for(F=Fe.call(F),Le=0;!(xe=F.next()).done;)xe=xe.value,Fe=K+ee(xe,Le++),Me+=fe(xe,se,De,Fe,ce);else if(xe==="object")throw se=String(F),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return Me}function de(F,se,De){if(F==null)return F;var K=[],ce=0;return fe(F,K,"","",function(xe){return se.call(De,xe,ce++)}),K}function oe(F){if(F._status===-1){var se=F._result;se=se(),se.then(function(De){(F._status===0||F._status===-1)&&(F._status=1,F._result=De)},function(De){(F._status===0||F._status===-1)&&(F._status=2,F._result=De)}),F._status===-1&&(F._status=0,F._result=se)}if(F._status===1)return F._result.default;throw F._result}var ue={current:null},H={transition:null},he={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:H,ReactCurrentOwner:z};function le(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:de,forEach:function(F,se,De){de(F,function(){se.apply(this,arguments)},De)},count:function(F){var se=0;return de(F,function(){se++}),se},toArray:function(F){return de(F,function(se){return se})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},dt.Component=v,dt.Fragment=n,dt.Profiler=a,dt.PureComponent=I,dt.StrictMode=r,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,dt.act=le,dt.cloneElement=function(F,se,De){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var K=T({},F.props),ce=F.key,xe=F.ref,Me=F._owner;if(se!=null){if(se.ref!==void 0&&(xe=se.ref,Me=z.current),se.key!==void 0&&(ce=""+se.key),F.type&&F.type.defaultProps)var Le=F.type.defaultProps;for(Fe in se)j.call(se,Fe)&&!N.hasOwnProperty(Fe)&&(K[Fe]=se[Fe]===void 0&&Le!==void 0?Le[Fe]:se[Fe])}var Fe=arguments.length-2;if(Fe===1)K.children=De;else if(1<Fe){Le=Array(Fe);for(var je=0;je<Fe;je++)Le[je]=arguments[je+2];K.children=Le}return{$$typeof:s,type:F.type,key:ce,ref:xe,props:K,_owner:Me}},dt.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:u,_context:F},F.Consumer=F},dt.createElement=X,dt.createFactory=function(F){var se=X.bind(null,F);return se.type=F,se},dt.createRef=function(){return{current:null}},dt.forwardRef=function(F){return{$$typeof:f,render:F}},dt.isValidElement=R,dt.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:oe}},dt.memo=function(F,se){return{$$typeof:m,type:F,compare:se===void 0?null:se}},dt.startTransition=function(F){var se=H.transition;H.transition={};try{F()}finally{H.transition=se}},dt.unstable_act=le,dt.useCallback=function(F,se){return ue.current.useCallback(F,se)},dt.useContext=function(F){return ue.current.useContext(F)},dt.useDebugValue=function(){},dt.useDeferredValue=function(F){return ue.current.useDeferredValue(F)},dt.useEffect=function(F,se){return ue.current.useEffect(F,se)},dt.useId=function(){return ue.current.useId()},dt.useImperativeHandle=function(F,se,De){return ue.current.useImperativeHandle(F,se,De)},dt.useInsertionEffect=function(F,se){return ue.current.useInsertionEffect(F,se)},dt.useLayoutEffect=function(F,se){return ue.current.useLayoutEffect(F,se)},dt.useMemo=function(F,se){return ue.current.useMemo(F,se)},dt.useReducer=function(F,se,De){return ue.current.useReducer(F,se,De)},dt.useRef=function(F){return ue.current.useRef(F)},dt.useState=function(F){return ue.current.useState(F)},dt.useSyncExternalStore=function(F,se,De){return ue.current.useSyncExternalStore(F,se,De)},dt.useTransition=function(){return ue.current.useTransition()},dt.version="18.3.1",dt}var gp;function Cm(){return gp||(gp=1,_c.exports=W_()),_c.exports}var Ot=Cm();const X_=G_(Ot);var Ya={},vc={exports:{}},Cn={},xc={exports:{}},yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function Y_(){return _p||(_p=1,(function(s){function e(H,he){var le=H.length;H.push(he);e:for(;0<le;){var F=le-1>>>1,se=H[F];if(0<a(se,he))H[F]=he,H[le]=se,le=F;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var he=H[0],le=H.pop();if(le!==he){H[0]=le;e:for(var F=0,se=H.length,De=se>>>1;F<De;){var K=2*(F+1)-1,ce=H[K],xe=K+1,Me=H[xe];if(0>a(ce,le))xe<se&&0>a(Me,ce)?(H[F]=Me,H[xe]=le,F=xe):(H[F]=ce,H[K]=le,F=K);else if(xe<se&&0>a(Me,le))H[F]=Me,H[xe]=le,F=xe;else break e}}return he}function a(H,he){var le=H.sortIndex-he.sortIndex;return le!==0?le:H.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],g=1,y=null,x=3,S=!1,T=!1,A=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var he=n(m);he!==null;){if(he.callback===null)r(m);else if(he.startTime<=H)r(m),he.sortIndex=he.expirationTime,e(p,he);else break;he=n(m)}}function D(H){if(A=!1,P(H),!T)if(n(p)!==null)T=!0,oe(j);else{var he=n(m);he!==null&&ue(D,he.startTime-H)}}function j(H,he){T=!1,A&&(A=!1,_(X),X=-1),S=!0;var le=x;try{for(P(he),y=n(p);y!==null&&(!(y.expirationTime>he)||H&&!B());){var F=y.callback;if(typeof F=="function"){y.callback=null,x=y.priorityLevel;var se=F(y.expirationTime<=he);he=s.unstable_now(),typeof se=="function"?y.callback=se:y===n(p)&&r(p),P(he)}else r(p);y=n(p)}if(y!==null)var De=!0;else{var K=n(m);K!==null&&ue(D,K.startTime-he),De=!1}return De}finally{y=null,x=le,S=!1}}var z=!1,N=null,X=-1,L=5,R=-1;function B(){return!(s.unstable_now()-R<L)}function ae(){if(N!==null){var H=s.unstable_now();R=H;var he=!0;try{he=N(!0,H)}finally{he?ee():(z=!1,N=null)}}else z=!1}var ee;if(typeof I=="function")ee=function(){I(ae)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,de=fe.port2;fe.port1.onmessage=ae,ee=function(){de.postMessage(null)}}else ee=function(){v(ae,0)};function oe(H){N=H,z||(z=!0,ee())}function ue(H,he){X=v(function(){H(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,oe(j))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(H){switch(x){case 1:case 2:case 3:var he=3;break;default:he=x}var le=x;x=he;try{return H()}finally{x=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,he){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=x;x=H;try{return he()}finally{x=le}},s.unstable_scheduleCallback=function(H,he,le){var F=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?F+le:F):le=F,H){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=le+se,H={id:g++,callback:he,priorityLevel:H,startTime:le,expirationTime:se,sortIndex:-1},le>F?(H.sortIndex=le,e(m,H),n(p)===null&&H===n(m)&&(A?(_(X),X=-1):A=!0,ue(D,le-F))):(H.sortIndex=se,e(p,H),T||S||(T=!0,oe(j))),H},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(H){var he=x;return function(){var le=x;x=he;try{return H.apply(this,arguments)}finally{x=le}}}})(yc)),yc}var vp;function j_(){return vp||(vp=1,xc.exports=Y_()),xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function q_(){if(xp)return Cn;xp=1;var s=Cm(),e=j_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function x(t){return p.call(y,t)?!0:p.call(g,t)?!1:m.test(t)?y[t]=!0:(g[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,l,c,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,I);v[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,I);v[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,I);v[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,o,l){var c=v.hasOwnProperty(i)?v[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),z=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),H=Symbol.iterator;function he(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,F;function se(t){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var De=!1;function K(t,i){if(!t||De)return"";De=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var l=te}Reflect.construct(t,[],i)}else{try{i.call()}catch(te){l=te}t.call(i.prototype)}else{try{throw Error()}catch(te){l=te}t()}}catch(te){if(te&&l&&typeof te.stack=="string"){for(var c=te.stack.split(`
`),h=l.stack.split(`
`),E=c.length-1,b=h.length-1;1<=E&&0<=b&&c[E]!==h[b];)b--;for(;1<=E&&0<=b;E--,b--)if(c[E]!==h[b]){if(E!==1||b!==1)do if(E--,b--,0>b||c[E]!==h[b]){var k=`
`+c[E].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=E&&0<=b);break}}}finally{De=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?se(t):""}function ce(t){switch(t.tag){case 5:return se(t.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case z:return"Portal";case L:return"Profiler";case X:return"StrictMode";case ee:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}function Me(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Le(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(t){var i=Fe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function St(t){t._valueTracker||(t._valueTracker=je(t))}function O(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Fe(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function At(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ht(t,i){var o=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function gt(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Le(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ve(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function Ct(t,i){Ve(t,i);var o=Le(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?it(t,i.type,o):i.hasOwnProperty("defaultValue")&&it(t,i.type,Le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function nt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function it(t,i,o){(i!=="number"||At(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var U=Array.isArray;function w(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Le(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function ie(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ve(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(U(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Le(o)}}function ye(t,i){var o=Le(i.value),l=Le(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function pe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ye(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ye(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var be,ot=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ee(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ft=["Webkit","ms","Moz","O"];Object.keys(Pe).forEach(function(t){ft.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Pe[i]=Pe[t]})});function Ze(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Pe.hasOwnProperty(t)&&Pe[t]?(""+i).trim():i+"px"}function Ne(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Ze(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var rt=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(t,i){if(i){if(rt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function wt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M=null;function q(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Q=null,re=null,ge=null;function Ge(t){if(t=po(t)){if(typeof Q!="function")throw Error(n(280));var i=t.stateNode;i&&(i=aa(i),Q(t.stateNode,t.type,i))}}function et(t){re?ge?ge.push(t):ge=[t]:re=t}function It(){if(re){var t=re,i=ge;if(ge=re=null,Ge(t),i)for(t=0;t<i.length;t++)Ge(i[t])}}function Vt(t,i){return t(i)}function pt(){}var kt=!1;function zt(t,i,o){if(kt)return t(i,o);kt=!0;try{return Vt(t,i,o)}finally{kt=!1,(re!==null||ge!==null)&&(pt(),It())}}function yn(t,i){var o=t.stateNode;if(o===null)return null;var l=aa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Wt=!1;if(f)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){Wt=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{Wt=!1}function mi(t,i,o,l,c,h,E,b,k){var te=Array.prototype.slice.call(arguments,3);try{i.apply(o,te)}catch(_e){this.onError(_e)}}var Kn=!1,gi=null,yr=!1,Bi=null,Vo={onError:function(t){Kn=!0,gi=t}};function Go(t,i,o,l,c,h,E,b,k){Kn=!1,gi=null,mi.apply(Vo,arguments)}function zl(t,i,o,l,c,h,E,b,k){if(Go.apply(this,arguments),Kn){if(Kn){var te=gi;Kn=!1,gi=null}else throw Error(n(198));yr||(yr=!0,Bi=te)}}function _i(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Wo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function C(t){if(_i(t)!==t)throw Error(n(188))}function G(t){var i=t.alternate;if(!i){if(i=_i(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return C(c),t;if(h===l)return C(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var E=!1,b=c.child;b;){if(b===o){E=!0,o=c,l=h;break}if(b===l){E=!0,l=c,o=h;break}b=b.sibling}if(!E){for(b=h.child;b;){if(b===o){E=!0,o=h,l=c;break}if(b===l){E=!0,l=h,o=c;break}b=b.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function J(t){return t=G(t),t!==null?ne(t):null}function ne(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ne(t);if(i!==null)return i;t=t.sibling}return null}var W=e.unstable_scheduleCallback,we=e.unstable_cancelCallback,Ue=e.unstable_shouldYield,ze=e.unstable_requestPaint,Ae=e.unstable_now,tt=e.unstable_getCurrentPriorityLevel,Qe=e.unstable_ImmediatePriority,qe=e.unstable_UserBlockingPriority,mt=e.unstable_NormalPriority,Nt=e.unstable_LowPriority,Lt=e.unstable_IdlePriority,Jt=null,lt=null;function Xe(t){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Jt,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Hi,vt=Math.log,Dn=Math.LN2;function Hi(t){return t>>>=0,t===0?32:31-(vt(t)/Dn|0)|0}var en=64,Vi=4194304;function Rt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Un(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,E=o&268435455;if(E!==0){var b=E&~c;b!==0?l=Rt(b):(h&=E,h!==0&&(l=Rt(h)))}else E=o&~c,E!==0?l=Rt(E):h!==0&&(l=Rt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Mt(i),c=1<<o,l|=t[o],i&=~c;return l}function $s(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Mt(h),b=1<<E,k=c[E];k===-1?((b&o)===0||(b&l)!==0)&&(c[E]=$s(b,i)):k<=i&&(t.expiredLanes|=b),h&=~b}}function Sr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xo(){var t=en;return en<<=1,(en&4194240)===0&&(en=64),t}function Kr(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Ks(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Mt(i),t[i]=o}function cg(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Mt(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function Bl(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Mt(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var Et=0;function jf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var qf,Hl,$f,Kf,Zf,Vl=!1,Yo=[],Gi=null,Wi=null,Xi=null,Zs=new Map,Qs=new Map,Yi=[],fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Zs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(i.pointerId)}}function Js(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=po(i),i!==null&&Hl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function dg(t,i,o,l,c){switch(i){case"focusin":return Gi=Js(Gi,t,i,o,l,c),!0;case"dragenter":return Wi=Js(Wi,t,i,o,l,c),!0;case"mouseover":return Xi=Js(Xi,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return Zs.set(h,Js(Zs.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Qs.set(h,Js(Qs.get(h)||null,t,i,o,l,c)),!0}return!1}function Jf(t){var i=Mr(t.target);if(i!==null){var o=_i(i);if(o!==null){if(i=o.tag,i===13){if(i=Wo(o),i!==null){t.blockedOn=i,Zf(t.priority,function(){$f(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);M=l,o.target.dispatchEvent(l),M=null}else return i=po(o),i!==null&&Hl(i),t.blockedOn=o,!1;i.shift()}return!0}function ed(t,i,o){jo(t)&&o.delete(i)}function hg(){Vl=!1,Gi!==null&&jo(Gi)&&(Gi=null),Wi!==null&&jo(Wi)&&(Wi=null),Xi!==null&&jo(Xi)&&(Xi=null),Zs.forEach(ed),Qs.forEach(ed)}function eo(t,i){t.blockedOn===i&&(t.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hg)))}function to(t){function i(c){return eo(c,t)}if(0<Yo.length){eo(Yo[0],t);for(var o=1;o<Yo.length;o++){var l=Yo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Gi!==null&&eo(Gi,t),Wi!==null&&eo(Wi,t),Xi!==null&&eo(Xi,t),Zs.forEach(i),Qs.forEach(i),o=0;o<Yi.length;o++)l=Yi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(o=Yi[0],o.blockedOn===null);)Jf(o),o.blockedOn===null&&Yi.shift()}var Zr=D.ReactCurrentBatchConfig,qo=!0;function pg(t,i,o,l){var c=Et,h=Zr.transition;Zr.transition=null;try{Et=1,Gl(t,i,o,l)}finally{Et=c,Zr.transition=h}}function mg(t,i,o,l){var c=Et,h=Zr.transition;Zr.transition=null;try{Et=4,Gl(t,i,o,l)}finally{Et=c,Zr.transition=h}}function Gl(t,i,o,l){if(qo){var c=Wl(t,i,o,l);if(c===null)au(t,i,l,$o,o),Qf(t,l);else if(dg(c,t,i,o,l))l.stopPropagation();else if(Qf(t,l),i&4&&-1<fg.indexOf(t)){for(;c!==null;){var h=po(c);if(h!==null&&qf(h),h=Wl(t,i,o,l),h===null&&au(t,i,l,$o,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else au(t,i,l,null,o)}}var $o=null;function Wl(t,i,o,l){if($o=null,t=q(l),t=Mr(t),t!==null)if(i=_i(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Wo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return $o=t,null}function td(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tt()){case Qe:return 1;case qe:return 4;case mt:case Nt:return 16;case Lt:return 536870912;default:return 16}default:return 16}}var ji=null,Xl=null,Ko=null;function nd(){if(Ko)return Ko;var t,i=Xl,o=i.length,l,c="value"in ji?ji.value:ji.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var E=o-t;for(l=1;l<=E&&i[o-l]===c[h-l];l++);return Ko=c.slice(t,1<l?1-l:void 0)}function Zo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function id(){return!1}function In(t){function i(o,l,c,h,E){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(o=t[b],this[b]=o?o(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Qo:id,this.isPropagationStopped=id,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=In(Qr),no=le({},Qr,{view:0,detail:0}),gg=In(no),jl,ql,io,Jo=le({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(jl=t.screenX-io.screenX,ql=t.screenY-io.screenY):ql=jl=0,io=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),rd=In(Jo),_g=le({},Jo,{dataTransfer:0}),vg=In(_g),xg=le({},no,{relatedTarget:0}),$l=In(xg),yg=le({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sg=In(yg),Mg=le({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Eg=In(Mg),Tg=le({},Qr,{data:0}),sd=In(Tg),wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Cg[t])?!!i[t]:!1}function Kl(){return Rg}var Pg=le({},no,{key:function(t){if(t.key){var i=wg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ag[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lg=In(Pg),bg=le({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=In(bg),Dg=le({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Ug=In(Dg),Ig=le({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ng=In(Ig),Fg=le({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Og=In(Fg),kg=[9,13,27,32],Zl=f&&"CompositionEvent"in window,ro=null;f&&"documentMode"in document&&(ro=document.documentMode);var zg=f&&"TextEvent"in window&&!ro,ad=f&&(!Zl||ro&&8<ro&&11>=ro),ld=" ",ud=!1;function cd(t,i){switch(t){case"keyup":return kg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Bg(t,i){switch(t){case"compositionend":return fd(i);case"keypress":return i.which!==32?null:(ud=!0,ld);case"textInput":return t=i.data,t===ld&&ud?null:t;default:return null}}function Hg(t,i){if(Jr)return t==="compositionend"||!Zl&&cd(t,i)?(t=nd(),Ko=Xl=ji=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ad&&i.locale!=="ko"?null:i.data;default:return null}}var Vg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Vg[t.type]:i==="textarea"}function hd(t,i,o,l){et(l),i=ra(i,"onChange"),0<i.length&&(o=new Yl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var so=null,oo=null;function Gg(t){bd(t,0)}function ea(t){var i=rs(t);if(O(i))return t}function Wg(t,i){if(t==="change")return i}var pd=!1;if(f){var Ql;if(f){var Jl="oninput"in document;if(!Jl){var md=document.createElement("div");md.setAttribute("oninput","return;"),Jl=typeof md.oninput=="function"}Ql=Jl}else Ql=!1;pd=Ql&&(!document.documentMode||9<document.documentMode)}function gd(){so&&(so.detachEvent("onpropertychange",_d),oo=so=null)}function _d(t){if(t.propertyName==="value"&&ea(oo)){var i=[];hd(i,oo,t,q(t)),zt(Gg,i)}}function Xg(t,i,o){t==="focusin"?(gd(),so=i,oo=o,so.attachEvent("onpropertychange",_d)):t==="focusout"&&gd()}function Yg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ea(oo)}function jg(t,i){if(t==="click")return ea(i)}function qg(t,i){if(t==="input"||t==="change")return ea(i)}function $g(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:$g;function ao(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!Zn(t[c],i[c]))return!1}return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,i){var o=vd(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=vd(o)}}function yd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Sd(){for(var t=window,i=At();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=At(t.document)}return i}function eu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Kg(t){var i=Sd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&yd(o.ownerDocument.documentElement,o)){if(l!==null&&eu(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=xd(o,h);var E=xd(o,l);c&&E&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zg=f&&"documentMode"in document&&11>=document.documentMode,es=null,tu=null,lo=null,nu=!1;function Md(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;nu||es==null||es!==At(l)||(l=es,"selectionStart"in l&&eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lo&&ao(lo,l)||(lo=l,l=ra(tu,"onSelect"),0<l.length&&(i=new Yl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=es)))}function ta(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ts={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},iu={},Ed={};f&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function na(t){if(iu[t])return iu[t];if(!ts[t])return t;var i=ts[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ed)return iu[t]=i[o];return t}var Td=na("animationend"),wd=na("animationiteration"),Ad=na("animationstart"),Cd=na("transitionend"),Rd=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,i){Rd.set(t,i),u(i,[t])}for(var ru=0;ru<Pd.length;ru++){var su=Pd[ru],Qg=su.toLowerCase(),Jg=su[0].toUpperCase()+su.slice(1);qi(Qg,"on"+Jg)}qi(Td,"onAnimationEnd"),qi(wd,"onAnimationIteration"),qi(Ad,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(Cd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e_=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Ld(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,zl(l,i,void 0,t),t.currentTarget=null}function bd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var b=l[E],k=b.instance,te=b.currentTarget;if(b=b.listener,k!==h&&c.isPropagationStopped())break e;Ld(c,b,te),h=k}else for(E=0;E<l.length;E++){if(b=l[E],k=b.instance,te=b.currentTarget,b=b.listener,k!==h&&c.isPropagationStopped())break e;Ld(c,b,te),h=k}}}if(yr)throw t=Bi,yr=!1,Bi=null,t}function bt(t,i){var o=i[hu];o===void 0&&(o=i[hu]=new Set);var l=t+"__bubble";o.has(l)||(Dd(i,t,2,!1),o.add(l))}function ou(t,i,o){var l=0;i&&(l|=4),Dd(o,t,l,i)}var ia="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[ia]){t[ia]=!0,r.forEach(function(o){o!=="selectionchange"&&(e_.has(o)||ou(o,!1,t),ou(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ia]||(i[ia]=!0,ou("selectionchange",!1,i))}}function Dd(t,i,o,l){switch(td(i)){case 1:var c=pg;break;case 4:c=mg;break;default:c=Gl}o=c.bind(null,i,o,t),c=void 0,!Wt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function au(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var b=l.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===c||k.nodeType===8&&k.parentNode===c))return;E=E.return}for(;b!==null;){if(E=Mr(b),E===null)return;if(k=E.tag,k===5||k===6){l=h=E;continue e}b=b.parentNode}}l=l.return}zt(function(){var te=h,_e=q(o),Se=[];e:{var me=Rd.get(t);if(me!==void 0){var Ie=Yl,ke=t;switch(t){case"keypress":if(Zo(o)===0)break e;case"keydown":case"keyup":Ie=Lg;break;case"focusin":ke="focus",Ie=$l;break;case"focusout":ke="blur",Ie=$l;break;case"beforeblur":case"afterblur":Ie=$l;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Ug;break;case Td:case wd:case Ad:Ie=Sg;break;case Cd:Ie=Ng;break;case"scroll":Ie=gg;break;case"wheel":Ie=Og;break;case"copy":case"cut":case"paste":Ie=Eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=od}var Be=(i&4)!==0,Xt=!Be&&t==="scroll",Y=Be?me!==null?me+"Capture":null:me;Be=[];for(var V=te,$;V!==null;){$=V;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,Y!==null&&(Te=yn(V,Y),Te!=null&&Be.push(fo(V,Te,$)))),Xt)break;V=V.return}0<Be.length&&(me=new Ie(me,ke,null,o,_e),Se.push({event:me,listeners:Be}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",me&&o!==M&&(ke=o.relatedTarget||o.fromElement)&&(Mr(ke)||ke[vi]))break e;if((Ie||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ke=o.relatedTarget||o.toElement,Ie=te,ke=ke?Mr(ke):null,ke!==null&&(Xt=_i(ke),ke!==Xt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ie=null,ke=te),Ie!==ke)){if(Be=rd,Te="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Be=od,Te="onPointerLeave",Y="onPointerEnter",V="pointer"),Xt=Ie==null?me:rs(Ie),$=ke==null?me:rs(ke),me=new Be(Te,V+"leave",Ie,o,_e),me.target=Xt,me.relatedTarget=$,Te=null,Mr(_e)===te&&(Be=new Be(Y,V+"enter",ke,o,_e),Be.target=$,Be.relatedTarget=Xt,Te=Be),Xt=Te,Ie&&ke)t:{for(Be=Ie,Y=ke,V=0,$=Be;$;$=ns($))V++;for($=0,Te=Y;Te;Te=ns(Te))$++;for(;0<V-$;)Be=ns(Be),V--;for(;0<$-V;)Y=ns(Y),$--;for(;V--;){if(Be===Y||Y!==null&&Be===Y.alternate)break t;Be=ns(Be),Y=ns(Y)}Be=null}else Be=null;Ie!==null&&Ud(Se,me,Ie,Be,!1),ke!==null&&Xt!==null&&Ud(Se,Xt,ke,Be,!0)}}e:{if(me=te?rs(te):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var He=Wg;else if(dd(me))if(pd)He=qg;else{He=Yg;var $e=Xg}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(He=jg);if(He&&(He=He(t,te))){hd(Se,He,o,_e);break e}$e&&$e(t,me,te),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&it(me,"number",me.value)}switch($e=te?rs(te):window,t){case"focusin":(dd($e)||$e.contentEditable==="true")&&(es=$e,tu=te,lo=null);break;case"focusout":lo=tu=es=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Md(Se,o,_e);break;case"selectionchange":if(Zg)break;case"keydown":case"keyup":Md(Se,o,_e)}var Ke;if(Zl)e:{switch(t){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else Jr?cd(t,o)&&(st="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(st="onCompositionStart");st&&(ad&&o.locale!=="ko"&&(Jr||st!=="onCompositionStart"?st==="onCompositionEnd"&&Jr&&(Ke=nd()):(ji=_e,Xl="value"in ji?ji.value:ji.textContent,Jr=!0)),$e=ra(te,st),0<$e.length&&(st=new sd(st,t,null,o,_e),Se.push({event:st,listeners:$e}),Ke?st.data=Ke:(Ke=fd(o),Ke!==null&&(st.data=Ke)))),(Ke=zg?Bg(t,o):Hg(t,o))&&(te=ra(te,"onBeforeInput"),0<te.length&&(_e=new sd("onBeforeInput","beforeinput",null,o,_e),Se.push({event:_e,listeners:te}),_e.data=Ke))}bd(Se,i)})}function fo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ra(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=yn(t,o),h!=null&&l.unshift(fo(t,h,c)),h=yn(t,i),h!=null&&l.push(fo(t,h,c))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ud(t,i,o,l,c){for(var h=i._reactName,E=[];o!==null&&o!==l;){var b=o,k=b.alternate,te=b.stateNode;if(k!==null&&k===l)break;b.tag===5&&te!==null&&(b=te,c?(k=yn(o,h),k!=null&&E.unshift(fo(o,k,b))):c||(k=yn(o,h),k!=null&&E.push(fo(o,k,b)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var t_=/\r\n?/g,n_=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(t_,`
`).replace(n_,"")}function sa(t,i,o){if(i=Id(i),Id(t)!==i&&o)throw Error(n(425))}function oa(){}var lu=null,uu=null;function cu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fu=typeof setTimeout=="function"?setTimeout:void 0,i_=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,r_=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(t){return Nd.resolve(null).then(t).catch(s_)}:fu;function s_(t){setTimeout(function(){throw t})}function du(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),to(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);to(i)}function $i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),li="__reactFiber$"+is,ho="__reactProps$"+is,vi="__reactContainer$"+is,hu="__reactEvents$"+is,o_="__reactListeners$"+is,a_="__reactHandles$"+is;function Mr(t){var i=t[li];if(i)return i;for(var o=t.parentNode;o;){if(i=o[vi]||o[li]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Fd(t);t!==null;){if(o=t[li])return o;t=Fd(t)}return i}t=o,o=t.parentNode}return null}function po(t){return t=t[li]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function aa(t){return t[ho]||null}var pu=[],ss=-1;function Ki(t){return{current:t}}function Dt(t){0>ss||(t.current=pu[ss],pu[ss]=null,ss--)}function Pt(t,i){ss++,pu[ss]=t.current,t.current=i}var Zi={},un=Ki(Zi),Mn=Ki(!1),Er=Zi;function os(t,i){var o=t.type.contextTypes;if(!o)return Zi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function En(t){return t=t.childContextTypes,t!=null}function la(){Dt(Mn),Dt(un)}function Od(t,i,o){if(un.current!==Zi)throw Error(n(168));Pt(un,i),Pt(Mn,o)}function kd(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,Me(t)||"Unknown",c));return le({},o,l)}function ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Er=un.current,Pt(un,t),Pt(Mn,Mn.current),!0}function zd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=kd(t,i,Er),l.__reactInternalMemoizedMergedChildContext=t,Dt(Mn),Dt(un),Pt(un,t)):Dt(Mn),Pt(Mn,o)}var xi=null,ca=!1,mu=!1;function Bd(t){xi===null?xi=[t]:xi.push(t)}function l_(t){ca=!0,Bd(t)}function Qi(){if(!mu&&xi!==null){mu=!0;var t=0,i=Et;try{var o=xi;for(Et=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}xi=null,ca=!1}catch(c){throw xi!==null&&(xi=xi.slice(t+1)),W(Qe,Qi),c}finally{Et=i,mu=!1}}return null}var as=[],ls=0,fa=null,da=0,Hn=[],Vn=0,Tr=null,yi=1,Si="";function wr(t,i){as[ls++]=da,as[ls++]=fa,fa=t,da=i}function Hd(t,i,o){Hn[Vn++]=yi,Hn[Vn++]=Si,Hn[Vn++]=Tr,Tr=t;var l=yi;t=Si;var c=32-Mt(l)-1;l&=~(1<<c),o+=1;var h=32-Mt(i)+c;if(30<h){var E=c-c%5;h=(l&(1<<E)-1).toString(32),l>>=E,c-=E,yi=1<<32-Mt(i)+c|o<<c|l,Si=h+t}else yi=1<<h|o<<c|l,Si=t}function gu(t){t.return!==null&&(wr(t,1),Hd(t,1,0))}function _u(t){for(;t===fa;)fa=as[--ls],as[ls]=null,da=as[--ls],as[ls]=null;for(;t===Tr;)Tr=Hn[--Vn],Hn[Vn]=null,Si=Hn[--Vn],Hn[Vn]=null,yi=Hn[--Vn],Hn[Vn]=null}var Nn=null,Fn=null,Ft=!1,Qn=null;function Vd(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Gd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Nn=t,Fn=$i(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Nn=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Tr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Nn=t,Fn=null,!0):!1;default:return!1}}function vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xu(t){if(Ft){var i=Fn;if(i){var o=i;if(!Gd(t,i)){if(vu(t))throw Error(n(418));i=$i(o.nextSibling);var l=Nn;i&&Gd(t,i)?Vd(l,o):(t.flags=t.flags&-4097|2,Ft=!1,Nn=t)}}else{if(vu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Nn=t}}}function Wd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function ha(t){if(t!==Nn)return!1;if(!Ft)return Wd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!cu(t.type,t.memoizedProps)),i&&(i=Fn)){if(vu(t))throw Xd(),Error(n(418));for(;i;)Vd(t,i),i=$i(i.nextSibling)}if(Wd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Fn=$i(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=Nn?$i(t.stateNode.nextSibling):null;return!0}function Xd(){for(var t=Fn;t;)t=$i(t.nextSibling)}function us(){Fn=Nn=null,Ft=!1}function yu(t){Qn===null?Qn=[t]:Qn.push(t)}var u_=D.ReactCurrentBatchConfig;function mo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var b=c.refs;E===null?delete b[h]:b[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Yd(t){var i=t._init;return i(t._payload)}function jd(t){function i(Y,V){if(t){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function o(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function c(Y,V){return Y=or(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=2,V):$):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function b(Y,V,$,Te){return V===null||V.tag!==6?(V=fc($,Y.mode,Te),V.return=Y,V):(V=c(V,$),V.return=Y,V)}function k(Y,V,$,Te){var He=$.type;return He===N?_e(Y,V,$.props.children,Te,$.key):V!==null&&(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===oe&&Yd(He)===V.type)?(Te=c(V,$.props),Te.ref=mo(Y,V,$),Te.return=Y,Te):(Te=ka($.type,$.key,$.props,null,Y.mode,Te),Te.ref=mo(Y,V,$),Te.return=Y,Te)}function te(Y,V,$,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=dc($,Y.mode,Te),V.return=Y,V):(V=c(V,$.children||[]),V.return=Y,V)}function _e(Y,V,$,Te,He){return V===null||V.tag!==7?(V=Ur($,Y.mode,Te,He),V.return=Y,V):(V=c(V,$),V.return=Y,V)}function Se(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=fc(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case j:return $=ka(V.type,V.key,V.props,null,Y.mode,$),$.ref=mo(Y,null,V),$.return=Y,$;case z:return V=dc(V,Y.mode,$),V.return=Y,V;case oe:var Te=V._init;return Se(Y,Te(V._payload),$)}if(U(V)||he(V))return V=Ur(V,Y.mode,$,null),V.return=Y,V;pa(Y,V)}return null}function me(Y,V,$,Te){var He=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return He!==null?null:b(Y,V,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case j:return $.key===He?k(Y,V,$,Te):null;case z:return $.key===He?te(Y,V,$,Te):null;case oe:return He=$._init,me(Y,V,He($._payload),Te)}if(U($)||he($))return He!==null?null:_e(Y,V,$,Te,null);pa(Y,$)}return null}function Ie(Y,V,$,Te,He){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get($)||null,b(V,Y,""+Te,He);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case j:return Y=Y.get(Te.key===null?$:Te.key)||null,k(V,Y,Te,He);case z:return Y=Y.get(Te.key===null?$:Te.key)||null,te(V,Y,Te,He);case oe:var $e=Te._init;return Ie(Y,V,$,$e(Te._payload),He)}if(U(Te)||he(Te))return Y=Y.get($)||null,_e(V,Y,Te,He,null);pa(V,Te)}return null}function ke(Y,V,$,Te){for(var He=null,$e=null,Ke=V,st=V=0,rn=null;Ke!==null&&st<$.length;st++){Ke.index>st?(rn=Ke,Ke=null):rn=Ke.sibling;var xt=me(Y,Ke,$[st],Te);if(xt===null){Ke===null&&(Ke=rn);break}t&&Ke&&xt.alternate===null&&i(Y,Ke),V=h(xt,V,st),$e===null?He=xt:$e.sibling=xt,$e=xt,Ke=rn}if(st===$.length)return o(Y,Ke),Ft&&wr(Y,st),He;if(Ke===null){for(;st<$.length;st++)Ke=Se(Y,$[st],Te),Ke!==null&&(V=h(Ke,V,st),$e===null?He=Ke:$e.sibling=Ke,$e=Ke);return Ft&&wr(Y,st),He}for(Ke=l(Y,Ke);st<$.length;st++)rn=Ie(Ke,Y,st,$[st],Te),rn!==null&&(t&&rn.alternate!==null&&Ke.delete(rn.key===null?st:rn.key),V=h(rn,V,st),$e===null?He=rn:$e.sibling=rn,$e=rn);return t&&Ke.forEach(function(ar){return i(Y,ar)}),Ft&&wr(Y,st),He}function Be(Y,V,$,Te){var He=he($);if(typeof He!="function")throw Error(n(150));if($=He.call($),$==null)throw Error(n(151));for(var $e=He=null,Ke=V,st=V=0,rn=null,xt=$.next();Ke!==null&&!xt.done;st++,xt=$.next()){Ke.index>st?(rn=Ke,Ke=null):rn=Ke.sibling;var ar=me(Y,Ke,xt.value,Te);if(ar===null){Ke===null&&(Ke=rn);break}t&&Ke&&ar.alternate===null&&i(Y,Ke),V=h(ar,V,st),$e===null?He=ar:$e.sibling=ar,$e=ar,Ke=rn}if(xt.done)return o(Y,Ke),Ft&&wr(Y,st),He;if(Ke===null){for(;!xt.done;st++,xt=$.next())xt=Se(Y,xt.value,Te),xt!==null&&(V=h(xt,V,st),$e===null?He=xt:$e.sibling=xt,$e=xt);return Ft&&wr(Y,st),He}for(Ke=l(Y,Ke);!xt.done;st++,xt=$.next())xt=Ie(Ke,Y,st,xt.value,Te),xt!==null&&(t&&xt.alternate!==null&&Ke.delete(xt.key===null?st:xt.key),V=h(xt,V,st),$e===null?He=xt:$e.sibling=xt,$e=xt);return t&&Ke.forEach(function(V_){return i(Y,V_)}),Ft&&wr(Y,st),He}function Xt(Y,V,$,Te){if(typeof $=="object"&&$!==null&&$.type===N&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case j:e:{for(var He=$.key,$e=V;$e!==null;){if($e.key===He){if(He=$.type,He===N){if($e.tag===7){o(Y,$e.sibling),V=c($e,$.props.children),V.return=Y,Y=V;break e}}else if($e.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===oe&&Yd(He)===$e.type){o(Y,$e.sibling),V=c($e,$.props),V.ref=mo(Y,$e,$),V.return=Y,Y=V;break e}o(Y,$e);break}else i(Y,$e);$e=$e.sibling}$.type===N?(V=Ur($.props.children,Y.mode,Te,$.key),V.return=Y,Y=V):(Te=ka($.type,$.key,$.props,null,Y.mode,Te),Te.ref=mo(Y,V,$),Te.return=Y,Y=Te)}return E(Y);case z:e:{for($e=$.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){o(Y,V.sibling),V=c(V,$.children||[]),V.return=Y,Y=V;break e}else{o(Y,V);break}else i(Y,V);V=V.sibling}V=dc($,Y.mode,Te),V.return=Y,Y=V}return E(Y);case oe:return $e=$._init,Xt(Y,V,$e($._payload),Te)}if(U($))return ke(Y,V,$,Te);if(he($))return Be(Y,V,$,Te);pa(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(o(Y,V.sibling),V=c(V,$),V.return=Y,Y=V):(o(Y,V),V=fc($,Y.mode,Te),V.return=Y,Y=V),E(Y)):o(Y,V)}return Xt}var cs=jd(!0),qd=jd(!1),ma=Ki(null),ga=null,fs=null,Su=null;function Mu(){Su=fs=ga=null}function Eu(t){var i=ma.current;Dt(ma),t._currentValue=i}function Tu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ds(t,i){ga=t,Su=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Tn=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(Su!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(ga===null)throw Error(n(308));fs=t,ga.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var Ar=null;function wu(t){Ar===null?Ar=[t]:Ar.push(t)}function $d(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,wu(i)):(o.next=c.next,c.next=o),i.interleaved=o,Mi(t,l)}function Mi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Ji=!1;function Au(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function er(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Mi(t,o)}return c=l.interleaved,c===null?(i.next=i,wu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Mi(t,o)}function _a(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Bl(t,o)}}function Zd(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function va(t,i,o,l){var c=t.updateQueue;Ji=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var k=b,te=k.next;k.next=null,E===null?h=te:E.next=te,E=k;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,b=_e.lastBaseUpdate,b!==E&&(b===null?_e.firstBaseUpdate=te:b.next=te,_e.lastBaseUpdate=k))}if(h!==null){var Se=c.baseState;E=0,_e=te=k=null,b=h;do{var me=b.lane,Ie=b.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var ke=t,Be=b;switch(me=i,Ie=o,Be.tag){case 1:if(ke=Be.payload,typeof ke=="function"){Se=ke.call(Ie,Se,me);break e}Se=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Be.payload,me=typeof ke=="function"?ke.call(Ie,Se,me):ke,me==null)break e;Se=le({},Se,me);break e;case 2:Ji=!0}}b.callback!==null&&b.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[b]:me.push(b))}else Ie={eventTime:Ie,lane:me,tag:b.tag,payload:b.payload,callback:b.callback,next:null},_e===null?(te=_e=Ie,k=Se):_e=_e.next=Ie,E|=me;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;me=b,b=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(_e===null&&(k=Se),c.baseState=k,c.firstBaseUpdate=te,c.lastBaseUpdate=_e,i=c.shared.interleaved,i!==null){c=i;do E|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Pr|=E,t.lanes=E,t.memoizedState=Se}}function Qd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var go={},ui=Ki(go),_o=Ki(go),vo=Ki(go);function Cr(t){if(t===go)throw Error(n(174));return t}function Cu(t,i){switch(Pt(vo,i),Pt(_o,t),Pt(ui,go),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ce(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ce(i,t)}Dt(ui),Pt(ui,i)}function hs(){Dt(ui),Dt(_o),Dt(vo)}function Jd(t){Cr(vo.current);var i=Cr(ui.current),o=Ce(i,t.type);i!==o&&(Pt(_o,t),Pt(ui,o))}function Ru(t){_o.current===t&&(Dt(ui),Dt(_o))}var Bt=Ki(0);function xa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pu=[];function Lu(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var ya=D.ReactCurrentDispatcher,bu=D.ReactCurrentBatchConfig,Rr=0,Ht=null,$t=null,tn=null,Sa=!1,xo=!1,yo=0,c_=0;function cn(){throw Error(n(321))}function Du(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Zn(t[o],i[o]))return!1;return!0}function Uu(t,i,o,l,c,h){if(Rr=h,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ya.current=t===null||t.memoizedState===null?p_:m_,t=o(l,c),xo){h=0;do{if(xo=!1,yo=0,25<=h)throw Error(n(301));h+=1,tn=$t=null,i.updateQueue=null,ya.current=g_,t=o(l,c)}while(xo)}if(ya.current=Ta,i=$t!==null&&$t.next!==null,Rr=0,tn=$t=Ht=null,Sa=!1,i)throw Error(n(300));return t}function Iu(){var t=yo!==0;return yo=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ht.memoizedState=tn=t:tn=tn.next=t,tn}function Wn(){if($t===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=tn===null?Ht.memoizedState:tn.next;if(i!==null)tn=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},tn===null?Ht.memoizedState=tn=t:tn=tn.next=t}return tn}function So(t,i){return typeof i=="function"?i(t):i}function Nu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=$t,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var b=E=null,k=null,te=h;do{var _e=te.lane;if((Rr&_e)===_e)k!==null&&(k=k.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),l=te.hasEagerState?te.eagerState:t(l,te.action);else{var Se={lane:_e,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};k===null?(b=k=Se,E=l):k=k.next=Se,Ht.lanes|=_e,Pr|=_e}te=te.next}while(te!==null&&te!==h);k===null?E=l:k.next=b,Zn(l,i.memoizedState)||(Tn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ht.lanes|=h,Pr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Fu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);Zn(h,i.memoizedState)||(Tn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function eh(){}function th(t,i){var o=Ht,l=Wn(),c=i(),h=!Zn(l.memoizedState,c);if(h&&(l.memoizedState=c,Tn=!0),l=l.queue,Ou(rh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,Mo(9,ih.bind(null,o,l,c,i),void 0,null),nn===null)throw Error(n(349));(Rr&30)!==0||nh(o,i,c)}return c}function nh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ih(t,i,o,l){i.value=o,i.getSnapshot=l,sh(i)&&oh(t)}function rh(t,i,o){return o(function(){sh(i)&&oh(t)})}function sh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Zn(t,o)}catch{return!0}}function oh(t){var i=Mi(t,1);i!==null&&ni(i,t,1,-1)}function ah(t){var i=ci();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},i.queue=t,t=t.dispatch=h_.bind(null,Ht,t),[i.memoizedState,t]}function Mo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function lh(){return Wn().memoizedState}function Ma(t,i,o,l){var c=ci();Ht.flags|=t,c.memoizedState=Mo(1|i,o,void 0,l===void 0?null:l)}function Ea(t,i,o,l){var c=Wn();l=l===void 0?null:l;var h=void 0;if($t!==null){var E=$t.memoizedState;if(h=E.destroy,l!==null&&Du(l,E.deps)){c.memoizedState=Mo(i,o,h,l);return}}Ht.flags|=t,c.memoizedState=Mo(1|i,o,h,l)}function uh(t,i){return Ma(8390656,8,t,i)}function Ou(t,i){return Ea(2048,8,t,i)}function ch(t,i){return Ea(4,2,t,i)}function fh(t,i){return Ea(4,4,t,i)}function dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function hh(t,i,o){return o=o!=null?o.concat([t]):null,Ea(4,4,dh.bind(null,i,t),o)}function ku(){}function ph(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function mh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function gh(t,i,o){return(Rr&21)===0?(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=o):(Zn(o,i)||(o=Xo(),Ht.lanes|=o,Pr|=o,t.baseState=!0),i)}function f_(t,i){var o=Et;Et=o!==0&&4>o?o:4,t(!0);var l=bu.transition;bu.transition={};try{t(!1),i()}finally{Et=o,bu.transition=l}}function _h(){return Wn().memoizedState}function d_(t,i,o){var l=rr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},vh(t))xh(i,o);else if(o=$d(t,i,o,l),o!==null){var c=_n();ni(o,t,l,c),yh(o,i,l)}}function h_(t,i,o){var l=rr(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(vh(t))xh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,b=h(E,o);if(c.hasEagerState=!0,c.eagerState=b,Zn(b,E)){var k=i.interleaved;k===null?(c.next=c,wu(i)):(c.next=k.next,k.next=c),i.interleaved=c;return}}catch{}finally{}o=$d(t,i,c,l),o!==null&&(c=_n(),ni(o,t,l,c),yh(o,i,l))}}function vh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function xh(t,i){xo=Sa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function yh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Bl(t,o)}}var Ta={readContext:Gn,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},p_={readContext:Gn,useCallback:function(t,i){return ci().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:uh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ma(4194308,4,dh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ma(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ma(4,2,t,i)},useMemo:function(t,i){var o=ci();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=ci();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=d_.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=ci();return t={current:t},i.memoizedState=t},useState:ah,useDebugValue:ku,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=ah(!1),i=t[0];return t=f_.bind(null,t[1]),ci().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ht,c=ci();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),nn===null)throw Error(n(349));(Rr&30)!==0||nh(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,uh(rh.bind(null,l,h,t),[t]),l.flags|=2048,Mo(9,ih.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=ci(),i=nn.identifierPrefix;if(Ft){var o=Si,l=yi;o=(l&~(1<<32-Mt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=yo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=c_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},m_={readContext:Gn,useCallback:ph,useContext:Gn,useEffect:Ou,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:mh,useReducer:Nu,useRef:lh,useState:function(){return Nu(So)},useDebugValue:ku,useDeferredValue:function(t){var i=Wn();return gh(i,$t.memoizedState,t)},useTransition:function(){var t=Nu(So)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1},g_={readContext:Gn,useCallback:ph,useContext:Gn,useEffect:Ou,useImperativeHandle:hh,useInsertionEffect:ch,useLayoutEffect:fh,useMemo:mh,useReducer:Fu,useRef:lh,useState:function(){return Fu(So)},useDebugValue:ku,useDeferredValue:function(t){var i=Wn();return $t===null?i.memoizedState=t:gh(i,$t.memoizedState,t)},useTransition:function(){var t=Fu(So)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:eh,useSyncExternalStore:th,useId:_h,unstable_isNewReconciler:!1};function Jn(t,i){if(t&&t.defaultProps){i=le({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function zu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:le({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var wa={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=_n(),c=rr(t),h=Ei(l,c);h.payload=i,o!=null&&(h.callback=o),i=er(t,h,c),i!==null&&(ni(i,t,c,l),_a(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=_n(),c=rr(t),h=Ei(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=er(t,h,c),i!==null&&(ni(i,t,c,l),_a(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=_n(),l=rr(t),c=Ei(o,l);c.tag=2,i!=null&&(c.callback=i),i=er(t,c,l),i!==null&&(ni(i,t,l,o),_a(i,t,l))}};function Sh(t,i,o,l,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!ao(o,l)||!ao(c,h):!0}function Mh(t,i,o){var l=!1,c=Zi,h=i.contextType;return typeof h=="object"&&h!==null?h=Gn(h):(c=En(i)?Er:un.current,l=i.contextTypes,h=(l=l!=null)?os(t,c):Zi),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Eh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&wa.enqueueReplaceState(i,i.state,null)}function Bu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Au(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Gn(h):(h=En(i)?Er:un.current,c.context=os(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(zu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&wa.enqueueReplaceState(c,c.state,null),va(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var o="",l=i;do o+=ce(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Hu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Vu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var __=typeof WeakMap=="function"?WeakMap:Map;function Th(t,i,o){o=Ei(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Da||(Da=!0,ic=l),Vu(t,i)},o}function wh(t,i,o){o=Ei(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Vu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Vu(t,i),typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Ah(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new __;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=b_.bind(null,t,i,o),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Rh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ei(-1,1),i.tag=2,er(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var v_=D.ReactCurrentOwner,Tn=!1;function gn(t,i,o,l){i.child=t===null?qd(i,null,o,l):cs(i,t.child,o,l)}function Ph(t,i,o,l,c){o=o.render;var h=i.ref;return ds(i,c),l=Uu(t,i,o,l,h,c),o=Iu(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ti(t,i,c)):(Ft&&o&&gu(i),i.flags|=1,gn(t,i,l,c),i.child)}function Lh(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!cc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,bh(t,i,h,l,c)):(t=ka(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:ao,o(E,l)&&t.ref===i.ref)return Ti(t,i,c)}return i.flags|=1,t=or(h,l),t.ref=i.ref,t.return=i,i.child=t}function bh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(ao(h,l)&&t.ref===i.ref)if(Tn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Tn=!0);else return i.lanes=t.lanes,Ti(t,i,c)}return Gu(t,i,o,l,c)}function Dh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(gs,On),On|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Pt(gs,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Pt(gs,On),On|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Pt(gs,On),On|=l;return gn(t,i,c,o),i.child}function Uh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Gu(t,i,o,l,c){var h=En(o)?Er:un.current;return h=os(i,h),ds(i,c),o=Uu(t,i,o,l,h,c),l=Iu(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ti(t,i,c)):(Ft&&l&&gu(i),i.flags|=1,gn(t,i,o,c),i.child)}function Ih(t,i,o,l,c){if(En(o)){var h=!0;ua(i)}else h=!1;if(ds(i,c),i.stateNode===null)Ca(t,i),Mh(i,o,l),Bu(i,o,l,c),l=!0;else if(t===null){var E=i.stateNode,b=i.memoizedProps;E.props=b;var k=E.context,te=o.contextType;typeof te=="object"&&te!==null?te=Gn(te):(te=En(o)?Er:un.current,te=os(i,te));var _e=o.getDerivedStateFromProps,Se=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(b!==l||k!==te)&&Eh(i,E,l,te),Ji=!1;var me=i.memoizedState;E.state=me,va(i,l,E,c),k=i.memoizedState,b!==l||me!==k||Mn.current||Ji?(typeof _e=="function"&&(zu(i,o,_e,l),k=i.memoizedState),(b=Ji||Sh(i,o,b,l,me,k,te))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),E.props=l,E.state=k,E.context=te,l=b):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,Kd(t,i),b=i.memoizedProps,te=i.type===i.elementType?b:Jn(i.type,b),E.props=te,Se=i.pendingProps,me=E.context,k=o.contextType,typeof k=="object"&&k!==null?k=Gn(k):(k=En(o)?Er:un.current,k=os(i,k));var Ie=o.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(b!==Se||me!==k)&&Eh(i,E,l,k),Ji=!1,me=i.memoizedState,E.state=me,va(i,l,E,c);var ke=i.memoizedState;b!==Se||me!==ke||Mn.current||Ji?(typeof Ie=="function"&&(zu(i,o,Ie,l),ke=i.memoizedState),(te=Ji||Sh(i,o,te,l,me,ke,k)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,ke,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,ke,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ke),E.props=l,E.state=ke,E.context=k,l=te):(typeof E.componentDidUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Wu(t,i,o,l,h,c)}function Wu(t,i,o,l,c,h){Uh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return c&&zd(i,o,!1),Ti(t,i,h);l=i.stateNode,v_.current=i;var b=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=cs(i,t.child,null,h),i.child=cs(i,null,b,h)):gn(t,i,b,h),i.memoizedState=l.state,c&&zd(i,o,!0),i.child}function Nh(t){var i=t.stateNode;i.pendingContext?Od(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Od(t,i.context,!1),Cu(t,i.containerInfo)}function Fh(t,i,o,l,c){return us(),yu(c),i.flags|=256,gn(t,i,o,l),i.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Oh(t,i,o){var l=i.pendingProps,c=Bt.current,h=!1,E=(i.flags&128)!==0,b;if((b=E)||(b=t!==null&&t.memoizedState===null?!1:(c&2)!==0),b?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Pt(Bt,c&1),t===null)return xu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=za(E,l,0,null),t=Ur(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Yu(o),i.memoizedState=Xu,t):ju(i,E));if(c=t.memoizedState,c!==null&&(b=c.dehydrated,b!==null))return x_(t,i,E,l,b,c,o);if(h){h=l.fallback,E=i.mode,c=t.child,b=c.sibling;var k={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=or(c,k),l.subtreeFlags=c.subtreeFlags&14680064),b!==null?h=or(b,h):(h=Ur(h,E,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?Yu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~o,i.memoizedState=Xu,l}return h=t.child,t=h.sibling,l=or(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function ju(t,i){return i=za({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Aa(t,i,o,l){return l!==null&&yu(l),cs(i,t.child,null,o),t=ju(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function x_(t,i,o,l,c,h,E){if(o)return i.flags&256?(i.flags&=-257,l=Hu(Error(n(422))),Aa(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=za({mode:"visible",children:l.children},c,0,null),h=Ur(h,c,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&cs(i,t.child,null,E),i.child.memoizedState=Yu(E),i.memoizedState=Xu,h);if((i.mode&1)===0)return Aa(t,i,E,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var b=l.dgst;return l=b,h=Error(n(419)),l=Hu(h,l,void 0),Aa(t,i,E,l)}if(b=(E&t.childLanes)!==0,Tn||b){if(l=nn,l!==null){switch(E&-E){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|E))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Mi(t,c),ni(l,t,c,-1))}return uc(),l=Hu(Error(n(421))),Aa(t,i,E,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=D_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Fn=$i(c.nextSibling),Nn=i,Ft=!0,Qn=null,t!==null&&(Hn[Vn++]=yi,Hn[Vn++]=Si,Hn[Vn++]=Tr,yi=t.id,Si=t.overflow,Tr=i),i=ju(i,l.children),i.flags|=4096,i)}function kh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Tu(t.return,i,o)}function qu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function zh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(gn(t,i,l.children,o),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kh(t,o,i);else if(t.tag===19)kh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pt(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&xa(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),qu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&xa(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}qu(i,!0,o,null,h);break;case"together":qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ca(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ti(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=or(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=or(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function y_(t,i,o){switch(i.tag){case 3:Nh(i),us();break;case 5:Jd(i);break;case 1:En(i.type)&&ua(i);break;case 4:Cu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Pt(ma,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Pt(Bt,Bt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Oh(t,i,o):(Pt(Bt,Bt.current&1),t=Ti(t,i,o),t!==null?t.sibling:null);Pt(Bt,Bt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return zh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pt(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,Dh(t,i,o)}return Ti(t,i,o)}var Bh,$u,Hh,Vh;Bh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},$u=function(){},Hh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Cr(ui.current);var h=null;switch(o){case"input":c=ht(t,c),l=ht(t,l),h=[];break;case"select":c=le({},c,{value:void 0}),l=le({},l,{value:void 0}),h=[];break;case"textarea":c=ie(t,c),l=ie(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=oa)}Je(o,l);var E;o=null;for(te in c)if(!l.hasOwnProperty(te)&&c.hasOwnProperty(te)&&c[te]!=null)if(te==="style"){var b=c[te];for(E in b)b.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in l){var k=l[te];if(b=c!=null?c[te]:void 0,l.hasOwnProperty(te)&&k!==b&&(k!=null||b!=null))if(te==="style")if(b){for(E in b)!b.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in k)k.hasOwnProperty(E)&&b[E]!==k[E]&&(o||(o={}),o[E]=k[E])}else o||(h||(h=[]),h.push(te,o)),o=k;else te==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,b=b?b.__html:void 0,k!=null&&b!==k&&(h=h||[]).push(te,k)):te==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(te,""+k):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(k!=null&&te==="onScroll"&&bt("scroll",t),h||b===k||(h=[])):(h=h||[]).push(te,k))}o&&(h=h||[]).push("style",o);var te=h;(i.updateQueue=te)&&(i.flags|=4)}},Vh=function(t,i,o,l){o!==l&&(i.flags|=4)};function Eo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function S_(t,i,o){var l=i.pendingProps;switch(_u(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return En(i.type)&&la(),fn(i),null;case 3:return l=i.stateNode,hs(),Dt(Mn),Dt(un),Lu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ha(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(oc(Qn),Qn=null))),$u(t,i),fn(i),null;case 5:Ru(i);var c=Cr(vo.current);if(o=i.type,t!==null&&i.stateNode!=null)Hh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return fn(i),null}if(t=Cr(ui.current),ha(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[li]=i,l[ho]=h,t=(i.mode&1)!==0,o){case"dialog":bt("cancel",l),bt("close",l);break;case"iframe":case"object":case"embed":bt("load",l);break;case"video":case"audio":for(c=0;c<uo.length;c++)bt(uo[c],l);break;case"source":bt("error",l);break;case"img":case"image":case"link":bt("error",l),bt("load",l);break;case"details":bt("toggle",l);break;case"input":gt(l,h),bt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},bt("invalid",l);break;case"textarea":ve(l,h),bt("invalid",l)}Je(o,h),c=null;for(var E in h)if(h.hasOwnProperty(E)){var b=h[E];E==="children"?typeof b=="string"?l.textContent!==b&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,b,t),c=["children",b]):typeof b=="number"&&l.textContent!==""+b&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,b,t),c=["children",""+b]):a.hasOwnProperty(E)&&b!=null&&E==="onScroll"&&bt("scroll",l)}switch(o){case"input":St(l),nt(l,h,!0);break;case"textarea":St(l),pe(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=oa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ye(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(o,{is:l.is}):(t=E.createElement(o),o==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,o),t[li]=i,t[ho]=l,Bh(t,i,!1,!1),i.stateNode=t;e:{switch(E=wt(o,l),o){case"dialog":bt("cancel",t),bt("close",t),c=l;break;case"iframe":case"object":case"embed":bt("load",t),c=l;break;case"video":case"audio":for(c=0;c<uo.length;c++)bt(uo[c],t);c=l;break;case"source":bt("error",t),c=l;break;case"img":case"image":case"link":bt("error",t),bt("load",t),c=l;break;case"details":bt("toggle",t),c=l;break;case"input":gt(t,l),c=ht(t,l),bt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=le({},l,{value:void 0}),bt("invalid",t);break;case"textarea":ve(t,l),c=ie(t,l),bt("invalid",t);break;default:c=l}Je(o,c),b=c;for(h in b)if(b.hasOwnProperty(h)){var k=b[h];h==="style"?Ne(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ot(t,k)):h==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Ee(t,k):typeof k=="number"&&Ee(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?k!=null&&h==="onScroll"&&bt("scroll",t):k!=null&&P(t,h,k,E))}switch(o){case"input":St(t),nt(t,l,!1);break;case"textarea":St(t),pe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Le(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?w(t,!!l.multiple,h,!1):l.defaultValue!=null&&w(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=oa)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(t&&i.stateNode!=null)Vh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Cr(vo.current),Cr(ui.current),ha(i)){if(l=i.stateNode,o=i.memoizedProps,l[li]=i,(h=l.nodeValue!==o)&&(t=Nn,t!==null))switch(t.tag){case 3:sa(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[li]=i,i.stateNode=l}return fn(i),null;case 13:if(Dt(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xd(),us(),i.flags|=98560,h=!1;else if(h=ha(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[li]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),h=!1}else Qn!==null&&(oc(Qn),Qn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Kt===0&&(Kt=3):uc())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return hs(),$u(t,i),t===null&&co(i.stateNode.containerInfo),fn(i),null;case 10:return Eu(i.type._context),fn(i),null;case 17:return En(i.type)&&la(),fn(i),null;case 19:if(Dt(Bt),h=i.memoizedState,h===null)return fn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)Eo(h,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=xa(t),E!==null){for(i.flags|=128,Eo(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Pt(Bt,Bt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Ae()>_s&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304)}else{if(!l)if(t=xa(E),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Eo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Ft)return fn(i),null}else 2*Ae()-h.renderingStartTime>_s&&o!==1073741824&&(i.flags|=128,l=!0,Eo(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Ae(),i.sibling=null,o=Bt.current,Pt(Bt,l?o&1|2:o&1),i):(fn(i),null);case 22:case 23:return lc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function M_(t,i){switch(_u(i),i.tag){case 1:return En(i.type)&&la(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),Dt(Mn),Dt(un),Lu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ru(i),null;case 13:if(Dt(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(Bt),null;case 4:return hs(),null;case 10:return Eu(i.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var Ra=!1,dn=!1,E_=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function ms(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Gt(t,i,l)}else o.current=null}function Ku(t,i,o){try{o()}catch(l){Gt(t,i,l)}}var Gh=!1;function T_(t,i){if(lu=qo,t=Sd(),eu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,b=-1,k=-1,te=0,_e=0,Se=t,me=null;t:for(;;){for(var Ie;Se!==o||c!==0&&Se.nodeType!==3||(b=E+c),Se!==h||l!==0&&Se.nodeType!==3||(k=E+l),Se.nodeType===3&&(E+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)me=Se,Se=Ie;for(;;){if(Se===t)break t;if(me===o&&++te===c&&(b=E),me===h&&++_e===l&&(k=E),(Ie=Se.nextSibling)!==null)break;Se=me,me=Se.parentNode}Se=Ie}o=b===-1||k===-1?null:{start:b,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(uu={focusedElem:t,selectionRange:o},qo=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var Be=ke.memoizedProps,Xt=ke.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Be:Jn(i.type,Be),Xt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Gt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return ke=Gh,Gh=!1,ke}function To(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Ku(i,o,h)}c=c.next}while(c!==l)}}function Pa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Zu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Wh(t){var i=t.alternate;i!==null&&(t.alternate=null,Wh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[li],delete i[ho],delete i[hu],delete i[o_],delete i[a_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xh(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(t=t.child,t!==null))for(Qu(t,i,o),t=t.sibling;t!==null;)Qu(t,i,o),t=t.sibling}function Ju(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Ju(t,i,o),t=t.sibling;t!==null;)Ju(t,i,o),t=t.sibling}var an=null,ei=!1;function tr(t,i,o){for(o=o.child;o!==null;)jh(t,i,o),o=o.sibling}function jh(t,i,o){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Jt,o)}catch{}switch(o.tag){case 5:dn||ms(o,i);case 6:var l=an,c=ei;an=null,tr(t,i,o),an=l,ei=c,an!==null&&(ei?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ei?(t=an,o=o.stateNode,t.nodeType===8?du(t.parentNode,o):t.nodeType===1&&du(t,o),to(t)):du(an,o.stateNode));break;case 4:l=an,c=ei,an=o.stateNode.containerInfo,ei=!0,tr(t,i,o),an=l,ei=c;break;case 0:case 11:case 14:case 15:if(!dn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Ku(o,i,E),c=c.next}while(c!==l)}tr(t,i,o);break;case 1:if(!dn&&(ms(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(b){Gt(o,i,b)}tr(t,i,o);break;case 21:tr(t,i,o);break;case 22:o.mode&1?(dn=(l=dn)||o.memoizedState!==null,tr(t,i,o),dn=l):tr(t,i,o);break;default:tr(t,i,o)}}function qh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new E_),i.forEach(function(l){var c=U_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ti(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,E=i,b=E;e:for(;b!==null;){switch(b.tag){case 5:an=b.stateNode,ei=!1;break e;case 3:an=b.stateNode.containerInfo,ei=!0;break e;case 4:an=b.stateNode.containerInfo,ei=!0;break e}b=b.return}if(an===null)throw Error(n(160));jh(h,E,c),an=null,ei=!1;var k=c.alternate;k!==null&&(k.return=null),c.return=null}catch(te){Gt(c,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(i,t),fi(t),l&4){try{To(3,t,t.return),Pa(3,t)}catch(Be){Gt(t,t.return,Be)}try{To(5,t,t.return)}catch(Be){Gt(t,t.return,Be)}}break;case 1:ti(i,t),fi(t),l&512&&o!==null&&ms(o,o.return);break;case 5:if(ti(i,t),fi(t),l&512&&o!==null&&ms(o,o.return),t.flags&32){var c=t.stateNode;try{Ee(c,"")}catch(Be){Gt(t,t.return,Be)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,E=o!==null?o.memoizedProps:h,b=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{b==="input"&&h.type==="radio"&&h.name!=null&&Ve(c,h),wt(b,E);var te=wt(b,h);for(E=0;E<k.length;E+=2){var _e=k[E],Se=k[E+1];_e==="style"?Ne(c,Se):_e==="dangerouslySetInnerHTML"?ot(c,Se):_e==="children"?Ee(c,Se):P(c,_e,Se,te)}switch(b){case"input":Ct(c,h);break;case"textarea":ye(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?w(c,!!h.multiple,Ie,!1):me!==!!h.multiple&&(h.defaultValue!=null?w(c,!!h.multiple,h.defaultValue,!0):w(c,!!h.multiple,h.multiple?[]:"",!1))}c[ho]=h}catch(Be){Gt(t,t.return,Be)}}break;case 6:if(ti(i,t),fi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Be){Gt(t,t.return,Be)}}break;case 3:if(ti(i,t),fi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{to(i.containerInfo)}catch(Be){Gt(t,t.return,Be)}break;case 4:ti(i,t),fi(t);break;case 13:ti(i,t),fi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(nc=Ae())),l&4&&qh(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(dn=(te=dn)||_e,ti(i,t),dn=te):ti(i,t),fi(t),l&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!_e&&(t.mode&1)!==0)for(Oe=t,_e=t.child;_e!==null;){for(Se=Oe=_e;Oe!==null;){switch(me=Oe,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:To(4,me,me.return);break;case 1:ms(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(Be){Gt(l,o,Be)}}break;case 5:ms(me,me.return);break;case 22:if(me.memoizedState!==null){Qh(Se);continue}}Ie!==null?(Ie.return=me,Oe=Ie):Qh(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{c=Se.stateNode,te?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(b=Se.stateNode,k=Se.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,b.style.display=Ze("display",E))}catch(Be){Gt(t,t.return,Be)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=te?"":Se.memoizedProps}catch(Be){Gt(t,t.return,Be)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ti(i,t),fi(t),l&4&&qh(t);break;case 21:break;default:ti(i,t),fi(t)}}function fi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Xh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Ee(c,""),l.flags&=-33);var h=Yh(t);Ju(t,h,c);break;case 3:case 4:var E=l.stateNode.containerInfo,b=Yh(t);Qu(t,b,E);break;default:throw Error(n(161))}}catch(k){Gt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function w_(t,i,o){Oe=t,Kh(t)}function Kh(t,i,o){for(var l=(t.mode&1)!==0;Oe!==null;){var c=Oe,h=c.child;if(c.tag===22&&l){var E=c.memoizedState!==null||Ra;if(!E){var b=c.alternate,k=b!==null&&b.memoizedState!==null||dn;b=Ra;var te=dn;if(Ra=E,(dn=k)&&!te)for(Oe=c;Oe!==null;)E=Oe,k=E.child,E.tag===22&&E.memoizedState!==null?Jh(c):k!==null?(k.return=E,Oe=k):Jh(c);for(;h!==null;)Oe=h,Kh(h),h=h.sibling;Oe=c,Ra=b,dn=te}Zh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Oe=h):Zh(t)}}function Zh(t){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dn||Pa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!dn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Jn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Qd(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Qd(i,E,o)}break;case 5:var b=i.stateNode;if(o===null&&i.flags&4){o=b;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var _e=te.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&to(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dn||i.flags&512&&Zu(i)}catch(me){Gt(i,i.return,me)}}if(i===t){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Qh(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Jh(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Pa(4,i)}catch(k){Gt(i,o,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(k){Gt(i,c,k)}}var h=i.return;try{Zu(i)}catch(k){Gt(i,h,k)}break;case 5:var E=i.return;try{Zu(i)}catch(k){Gt(i,E,k)}}}catch(k){Gt(i,i.return,k)}if(i===t){Oe=null;break}var b=i.sibling;if(b!==null){b.return=i.return,Oe=b;break}Oe=i.return}}var A_=Math.ceil,La=D.ReactCurrentDispatcher,ec=D.ReactCurrentOwner,Xn=D.ReactCurrentBatchConfig,_t=0,nn=null,jt=null,ln=0,On=0,gs=Ki(0),Kt=0,wo=null,Pr=0,ba=0,tc=0,Ao=null,wn=null,nc=0,_s=1/0,wi=null,Da=!1,ic=null,nr=null,Ua=!1,ir=null,Ia=0,Co=0,rc=null,Na=-1,Fa=0;function _n(){return(_t&6)!==0?Ae():Na!==-1?Na:Na=Ae()}function rr(t){return(t.mode&1)===0?1:(_t&2)!==0&&ln!==0?ln&-ln:u_.transition!==null?(Fa===0&&(Fa=Xo()),Fa):(t=Et,t!==0||(t=window.event,t=t===void 0?16:td(t.type)),t)}function ni(t,i,o,l){if(50<Co)throw Co=0,rc=null,Error(n(185));Ks(t,o,l),((_t&2)===0||t!==nn)&&(t===nn&&((_t&2)===0&&(ba|=o),Kt===4&&sr(t,ln)),An(t,l),o===1&&_t===0&&(i.mode&1)===0&&(_s=Ae()+500,ca&&Qi()))}function An(t,i){var o=t.callbackNode;Sn(t,i);var l=Un(t,t===nn?ln:0);if(l===0)o!==null&&we(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&we(o),i===1)t.tag===0?l_(tp.bind(null,t)):Bd(tp.bind(null,t)),r_(function(){(_t&6)===0&&Qi()}),o=null;else{switch(jf(l)){case 1:o=Qe;break;case 4:o=qe;break;case 16:o=mt;break;case 536870912:o=Lt;break;default:o=mt}o=up(o,ep.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function ep(t,i){if(Na=-1,Fa=0,(_t&6)!==0)throw Error(n(327));var o=t.callbackNode;if(vs()&&t.callbackNode!==o)return null;var l=Un(t,t===nn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Oa(t,l);else{i=l;var c=_t;_t|=2;var h=ip();(nn!==t||ln!==i)&&(wi=null,_s=Ae()+500,br(t,i));do try{P_();break}catch(b){np(t,b)}while(!0);Mu(),La.current=h,_t=c,jt!==null?i=0:(nn=null,ln=0,i=Kt)}if(i!==0){if(i===2&&(c=Sr(t),c!==0&&(l=c,i=sc(t,c))),i===1)throw o=wo,br(t,0),sr(t,l),An(t,Ae()),o;if(i===6)sr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!C_(c)&&(i=Oa(t,l),i===2&&(h=Sr(t),h!==0&&(l=h,i=sc(t,h))),i===1))throw o=wo,br(t,0),sr(t,l),An(t,Ae()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Dr(t,wn,wi);break;case 3:if(sr(t,l),(l&130023424)===l&&(i=nc+500-Ae(),10<i)){if(Un(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){_n(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=fu(Dr.bind(null,t,wn,wi),i);break}Dr(t,wn,wi);break;case 4:if(sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var E=31-Mt(l);h=1<<E,E=i[E],E>c&&(c=E),l&=~h}if(l=c,l=Ae()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*A_(l/1960))-l,10<l){t.timeoutHandle=fu(Dr.bind(null,t,wn,wi),l);break}Dr(t,wn,wi);break;case 5:Dr(t,wn,wi);break;default:throw Error(n(329))}}}return An(t,Ae()),t.callbackNode===o?ep.bind(null,t):null}function sc(t,i){var o=Ao;return t.current.memoizedState.isDehydrated&&(br(t,i).flags|=256),t=Oa(t,i),t!==2&&(i=wn,wn=o,i!==null&&oc(i)),t}function oc(t){wn===null?wn=t:wn.push.apply(wn,t)}function C_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!Zn(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i){for(i&=~tc,i&=~ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Mt(i),l=1<<o;t[o]=-1,i&=~l}}function tp(t){if((_t&6)!==0)throw Error(n(327));vs();var i=Un(t,0);if((i&1)===0)return An(t,Ae()),null;var o=Oa(t,i);if(t.tag!==0&&o===2){var l=Sr(t);l!==0&&(i=l,o=sc(t,l))}if(o===1)throw o=wo,br(t,0),sr(t,i),An(t,Ae()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Dr(t,wn,wi),An(t,Ae()),null}function ac(t,i){var o=_t;_t|=1;try{return t(i)}finally{_t=o,_t===0&&(_s=Ae()+500,ca&&Qi())}}function Lr(t){ir!==null&&ir.tag===0&&(_t&6)===0&&vs();var i=_t;_t|=1;var o=Xn.transition,l=Et;try{if(Xn.transition=null,Et=1,t)return t()}finally{Et=l,Xn.transition=o,_t=i,(_t&6)===0&&Qi()}}function lc(){On=gs.current,Dt(gs)}function br(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,i_(o)),jt!==null)for(o=jt.return;o!==null;){var l=o;switch(_u(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&la();break;case 3:hs(),Dt(Mn),Dt(un),Lu();break;case 5:Ru(l);break;case 4:hs();break;case 13:Dt(Bt);break;case 19:Dt(Bt);break;case 10:Eu(l.type._context);break;case 22:case 23:lc()}o=o.return}if(nn=t,jt=t=or(t.current,null),ln=On=i,Kt=0,wo=null,tc=ba=Pr=0,wn=Ao=null,Ar!==null){for(i=0;i<Ar.length;i++)if(o=Ar[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var E=h.next;h.next=c,l.next=E}o.pending=l}Ar=null}return t}function np(t,i){do{var o=jt;try{if(Mu(),ya.current=Ta,Sa){for(var l=Ht.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Sa=!1}if(Rr=0,tn=$t=Ht=null,xo=!1,yo=0,ec.current=null,o===null||o.return===null){Kt=1,wo=i,jt=null;break}e:{var h=t,E=o.return,b=o,k=i;if(i=ln,b.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var te=k,_e=b,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=Ch(E);if(Ie!==null){Ie.flags&=-257,Rh(Ie,E,b,h,i),Ie.mode&1&&Ah(h,te,i),i=Ie,k=te;var ke=i.updateQueue;if(ke===null){var Be=new Set;Be.add(k),i.updateQueue=Be}else ke.add(k);break e}else{if((i&1)===0){Ah(h,te,i),uc();break e}k=Error(n(426))}}else if(Ft&&b.mode&1){var Xt=Ch(E);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),Rh(Xt,E,b,h,i),yu(ps(k,b));break e}}h=k=ps(k,b),Kt!==4&&(Kt=2),Ao===null?Ao=[h]:Ao.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=Th(h,k,i);Zd(h,Y);break e;case 1:b=k;var V=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(nr===null||!nr.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=wh(h,b,i);Zd(h,Te);break e}}h=h.return}while(h!==null)}sp(o)}catch(He){i=He,jt===o&&o!==null&&(jt=o=o.return);continue}break}while(!0)}function ip(){var t=La.current;return La.current=Ta,t===null?Ta:t}function uc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||(Pr&268435455)===0&&(ba&268435455)===0||sr(nn,ln)}function Oa(t,i){var o=_t;_t|=2;var l=ip();(nn!==t||ln!==i)&&(wi=null,br(t,i));do try{R_();break}catch(c){np(t,c)}while(!0);if(Mu(),_t=o,La.current=l,jt!==null)throw Error(n(261));return nn=null,ln=0,Kt}function R_(){for(;jt!==null;)rp(jt)}function P_(){for(;jt!==null&&!Ue();)rp(jt)}function rp(t){var i=lp(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?sp(t):jt=i,ec.current=null}function sp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=S_(o,i,On),o!==null){jt=o;return}}else{if(o=M_(o,i),o!==null){o.flags&=32767,jt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Dr(t,i,o){var l=Et,c=Xn.transition;try{Xn.transition=null,Et=1,L_(t,i,o,l)}finally{Xn.transition=c,Et=l}return null}function L_(t,i,o,l){do vs();while(ir!==null);if((_t&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(cg(t,h),t===nn&&(jt=nn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ua||(Ua=!0,up(mt,function(){return vs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Xn.transition,Xn.transition=null;var E=Et;Et=1;var b=_t;_t|=4,ec.current=null,T_(t,o),$h(o,t),Kg(uu),qo=!!lu,uu=lu=null,t.current=o,w_(o),ze(),_t=b,Et=E,Xn.transition=h}else t.current=o;if(Ua&&(Ua=!1,ir=t,Ia=c),h=t.pendingLanes,h===0&&(nr=null),Xe(o.stateNode),An(t,Ae()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Da)throw Da=!1,t=ic,ic=null,t;return(Ia&1)!==0&&t.tag!==0&&vs(),h=t.pendingLanes,(h&1)!==0?t===rc?Co++:(Co=0,rc=t):Co=0,Qi(),null}function vs(){if(ir!==null){var t=jf(Ia),i=Xn.transition,o=Et;try{if(Xn.transition=null,Et=16>t?16:t,ir===null)var l=!1;else{if(t=ir,ir=null,Ia=0,(_t&6)!==0)throw Error(n(331));var c=_t;for(_t|=4,Oe=t.current;Oe!==null;){var h=Oe,E=h.child;if((Oe.flags&16)!==0){var b=h.deletions;if(b!==null){for(var k=0;k<b.length;k++){var te=b[k];for(Oe=te;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:To(8,_e,h)}var Se=_e.child;if(Se!==null)Se.return=_e,Oe=Se;else for(;Oe!==null;){_e=Oe;var me=_e.sibling,Ie=_e.return;if(Wh(_e),_e===te){Oe=null;break}if(me!==null){me.return=Ie,Oe=me;break}Oe=Ie}}}var ke=h.alternate;if(ke!==null){var Be=ke.child;if(Be!==null){ke.child=null;do{var Xt=Be.sibling;Be.sibling=null,Be=Xt}while(Be!==null)}}Oe=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Oe=E;else e:for(;Oe!==null;){if(h=Oe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:To(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Oe=Y;break e}Oe=h.return}}var V=t.current;for(Oe=V;Oe!==null;){E=Oe;var $=E.child;if((E.subtreeFlags&2064)!==0&&$!==null)$.return=E,Oe=$;else e:for(E=V;Oe!==null;){if(b=Oe,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:Pa(9,b)}}catch(He){Gt(b,b.return,He)}if(b===E){Oe=null;break e}var Te=b.sibling;if(Te!==null){Te.return=b.return,Oe=Te;break e}Oe=b.return}}if(_t=c,Qi(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Jt,t)}catch{}l=!0}return l}finally{Et=o,Xn.transition=i}}return!1}function op(t,i,o){i=ps(o,i),i=Th(t,i,1),t=er(t,i,1),i=_n(),t!==null&&(Ks(t,1,i),An(t,i))}function Gt(t,i,o){if(t.tag===3)op(t,t,o);else for(;i!==null;){if(i.tag===3){op(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nr===null||!nr.has(l))){t=ps(o,t),t=wh(i,t,1),i=er(i,t,1),t=_n(),i!==null&&(Ks(i,1,t),An(i,t));break}}i=i.return}}function b_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=_n(),t.pingedLanes|=t.suspendedLanes&o,nn===t&&(ln&o)===o&&(Kt===4||Kt===3&&(ln&130023424)===ln&&500>Ae()-nc?br(t,0):tc|=o),An(t,i)}function ap(t,i){i===0&&((t.mode&1)===0?i=1:(i=Vi,Vi<<=1,(Vi&130023424)===0&&(Vi=4194304)));var o=_n();t=Mi(t,i),t!==null&&(Ks(t,i,o),An(t,o))}function D_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),ap(t,o)}function U_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ap(t,o)}var lp;lp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Mn.current)Tn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Tn=!1,y_(t,i,o);Tn=(t.flags&131072)!==0}else Tn=!1,Ft&&(i.flags&1048576)!==0&&Hd(i,da,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ca(t,i),t=i.pendingProps;var c=os(i,un.current);ds(i,o),c=Uu(null,i,l,t,c,o);var h=Iu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,En(l)?(h=!0,ua(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Au(i),c.updater=wa,i.stateNode=c,c._reactInternals=i,Bu(i,l,t,o),i=Wu(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&gu(i),gn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Ca(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=N_(l),t=Jn(l,t),c){case 0:i=Gu(null,i,l,t,o);break e;case 1:i=Ih(null,i,l,t,o);break e;case 11:i=Ph(null,i,l,t,o);break e;case 14:i=Lh(null,i,l,Jn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Gu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Ih(t,i,l,c,o);case 3:e:{if(Nh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Kd(t,i),va(i,l,null,o);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ps(Error(n(423)),i),i=Fh(t,i,l,o,c);break e}else if(l!==c){c=ps(Error(n(424)),i),i=Fh(t,i,l,o,c);break e}else for(Fn=$i(i.stateNode.containerInfo.firstChild),Nn=i,Ft=!0,Qn=null,o=qd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(us(),l===c){i=Ti(t,i,o);break e}gn(t,i,l,o)}i=i.child}return i;case 5:return Jd(i),t===null&&xu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,E=c.children,cu(l,c)?E=null:h!==null&&cu(l,h)&&(i.flags|=32),Uh(t,i),gn(t,i,E,o),i.child;case 6:return t===null&&xu(i),null;case 13:return Oh(t,i,o);case 4:return Cu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,o):gn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Ph(t,i,l,c,o);case 7:return gn(t,i,i.pendingProps,o),i.child;case 8:return gn(t,i,i.pendingProps.children,o),i.child;case 12:return gn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,E=c.value,Pt(ma,l._currentValue),l._currentValue=E,h!==null)if(Zn(h.value,E)){if(h.children===c.children&&!Mn.current){i=Ti(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var b=h.dependencies;if(b!==null){E=h.child;for(var k=b.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=Ei(-1,o&-o),k.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var _e=te.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),te.pending=k}}h.lanes|=o,k=h.alternate,k!==null&&(k.lanes|=o),Tu(h.return,o,i),b.lanes|=o;break}k=k.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=o,b=E.alternate,b!==null&&(b.lanes|=o),Tu(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}gn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ds(i,o),c=Gn(c),l=l(c),i.flags|=1,gn(t,i,l,o),i.child;case 14:return l=i.type,c=Jn(l,i.pendingProps),c=Jn(l.type,c),Lh(t,i,l,c,o);case 15:return bh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Jn(l,c),Ca(t,i),i.tag=1,En(l)?(t=!0,ua(i)):t=!1,ds(i,o),Mh(i,l,c),Bu(i,l,c,o),Wu(null,i,l,!0,t,o);case 19:return zh(t,i,o);case 22:return Dh(t,i,o)}throw Error(n(156,i.tag))};function up(t,i){return W(t,i)}function I_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,l){return new I_(t,i,o,l)}function cc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function N_(t){if(typeof t=="function")return cc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===de)return 14}return 2}function or(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function ka(t,i,o,l,c,h){var E=2;if(l=t,typeof t=="function")cc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case N:return Ur(o.children,c,h,i);case X:E=8,c|=8;break;case L:return t=Yn(12,o,i,c|2),t.elementType=L,t.lanes=h,t;case ee:return t=Yn(13,o,i,c),t.elementType=ee,t.lanes=h,t;case fe:return t=Yn(19,o,i,c),t.elementType=fe,t.lanes=h,t;case ue:return za(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case B:E=9;break e;case ae:E=11;break e;case de:E=14;break e;case oe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(E,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ur(t,i,o,l){return t=Yn(7,t,l,i),t.lanes=o,t}function za(t,i,o,l){return t=Yn(22,t,l,i),t.elementType=ue,t.lanes=o,t.stateNode={isHidden:!1},t}function fc(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function dc(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function F_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function hc(t,i,o,l,c,h,E,b,k){return t=new F_(t,i,o,b,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Yn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(h),t}function O_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function cp(t){if(!t)return Zi;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(En(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(En(o))return kd(t,o,i)}return i}function fp(t,i,o,l,c,h,E,b,k){return t=hc(o,l,!0,t,c,h,E,b,k),t.context=cp(null),o=t.current,l=_n(),c=rr(o),h=Ei(l,c),h.callback=i??null,er(o,h,c),t.current.lanes=c,Ks(t,c,l),An(t,l),t}function Ba(t,i,o,l){var c=i.current,h=_n(),E=rr(c);return o=cp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ei(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=er(c,i,E),t!==null&&(ni(t,c,E,h),_a(t,c,E)),E}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function pc(t,i){dp(t,i),(t=t.alternate)&&dp(t,i)}function k_(){return null}var hp=typeof reportError=="function"?reportError:function(t){console.error(t)};function mc(t){this._internalRoot=t}Va.prototype.render=mc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ba(t,i,null,null)},Va.prototype.unmount=mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){Ba(null,t,null,null)}),i[vi]=null}};function Va(t){this._internalRoot=t}Va.prototype.unstable_scheduleHydration=function(t){if(t){var i=Kf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Yi.length&&i!==0&&i<Yi[o].priority;o++);Yi.splice(o,0,t),o===0&&Jf(t)}};function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ga(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function z_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var te=Ha(E);h.call(te)}}var E=fp(i,l,t,0,null,!1,!1,"",pp);return t._reactRootContainer=E,t[vi]=E.current,co(t.nodeType===8?t.parentNode:t),Lr(),E}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var b=l;l=function(){var te=Ha(k);b.call(te)}}var k=hc(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=k,t[vi]=k.current,co(t.nodeType===8?t.parentNode:t),Lr(function(){Ba(i,k,o,l)}),k}function Wa(t,i,o,l,c){var h=o._reactRootContainer;if(h){var E=h;if(typeof c=="function"){var b=c;c=function(){var k=Ha(E);b.call(k)}}Ba(i,E,t,c)}else E=z_(o,i,t,c,l);return Ha(E)}qf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Rt(i.pendingLanes);o!==0&&(Bl(i,o|1),An(i,Ae()),(_t&6)===0&&(_s=Ae()+500,Qi()))}break;case 13:Lr(function(){var l=Mi(t,1);if(l!==null){var c=_n();ni(l,t,1,c)}}),pc(t,1)}},Hl=function(t){if(t.tag===13){var i=Mi(t,134217728);if(i!==null){var o=_n();ni(i,t,134217728,o)}pc(t,134217728)}},$f=function(t){if(t.tag===13){var i=rr(t),o=Mi(t,i);if(o!==null){var l=_n();ni(o,t,i,l)}pc(t,i)}},Kf=function(){return Et},Zf=function(t,i){var o=Et;try{return Et=t,i()}finally{Et=o}},Q=function(t,i,o){switch(i){case"input":if(Ct(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=aa(l);if(!c)throw Error(n(90));O(l),Ct(l,c)}}}break;case"textarea":ye(t,o);break;case"select":i=o.value,i!=null&&w(t,!!o.multiple,i,!1)}},Vt=ac,pt=Lr;var B_={usingClientEntryPoint:!1,Events:[po,rs,aa,et,It,ac]},Ro={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H_={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||k_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Jt=Xa.inject(H_),lt=Xa}catch{}}return Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B_,Cn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(i))throw Error(n(200));return O_(t,i,null,o)},Cn.createRoot=function(t,i){if(!gc(t))throw Error(n(299));var o=!1,l="",c=hp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=hc(t,1,!1,null,null,o,!1,l,c),t[vi]=i.current,co(t.nodeType===8?t.parentNode:t),new mc(i)},Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=J(i),t=t===null?null:t.stateNode,t},Cn.flushSync=function(t){return Lr(t)},Cn.hydrate=function(t,i,o){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!0,o)},Cn.hydrateRoot=function(t,i,o){if(!gc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",E=hp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=fp(i,null,t,1,o??null,c,!1,h,E),t[vi]=i.current,co(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Va(i)},Cn.render=function(t,i,o){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!1,o)},Cn.unmountComponentAtNode=function(t){if(!Ga(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){Wa(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1},Cn.unstable_batchedUpdates=ac,Cn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ga(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Wa(t,i,o,!1,l)},Cn.version="18.3.1-next-f1338f8080-20240426",Cn}var yp;function $_(){if(yp)return vc.exports;yp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vc.exports=q_(),vc.exports}var Sp;function K_(){if(Sp)return Ya;Sp=1;var s=$_();return Ya.createRoot=s.createRoot,Ya.hydrateRoot=s.hydrateRoot,Ya}var Z_=K_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="166",xs={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Q_=0,Mp=1,J_=2,Rm=1,ev=2,bi=3,vr=0,Pn=1,Di=2,gr=0,Bs=1,Kc=2,Ep=3,Tp=4,tv=5,Hr=100,nv=101,iv=102,rv=103,sv=104,ov=200,av=201,lv=202,uv=203,Zc=204,Qc=205,cv=206,fv=207,dv=208,hv=209,pv=210,mv=211,gv=212,_v=213,vv=214,xv=0,yv=1,Sv=2,Al=3,Mv=4,Ev=5,Tv=6,wv=7,Pm=0,Av=1,Cv=2,_r=0,Rv=1,Pv=2,Lv=3,bv=4,Dv=5,Uv=6,Iv=7,Lm=300,Gs=301,Ws=302,Jc=303,ef=304,Ul=306,tf=1e3,Gr=1001,nf=1002,$n=1003,Nv=1004,ja=1005,oi=1006,Sc=1007,Wr=1008,Fi=1009,bm=1010,Dm=1011,Fo=1012,Of=1013,Yr=1014,Ui=1015,Oo=1016,kf=1017,zf=1018,Xs=1020,Um=35902,Im=1021,Nm=1022,ai=1023,Fm=1024,Om=1025,Hs=1026,Ys=1027,km=1028,Bf=1029,zm=1030,Hf=1031,Vf=1033,xl=33776,yl=33777,Sl=33778,Ml=33779,rf=35840,sf=35841,of=35842,af=35843,lf=36196,uf=37492,cf=37496,ff=37808,df=37809,hf=37810,pf=37811,mf=37812,gf=37813,_f=37814,vf=37815,xf=37816,yf=37817,Sf=37818,Mf=37819,Ef=37820,Tf=37821,El=36492,wf=36494,Af=36495,Bm=36283,Cf=36284,Rf=36285,Pf=36286,Fv=3200,Ov=3201,kv=0,zv=1,mr="",di="srgb",xr="srgb-linear",Gf="display-p3",Il="display-p3-linear",Cl="linear",Ut="srgb",Rl="rec709",Pl="p3",Ss=7680,wp=519,Bv=512,Hv=513,Vv=514,Hm=515,Gv=516,Wv=517,Xv=518,Yv=519,Ap=35044,Cp="300 es",Ii=2e3,Ll=2001;class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,d=a.length;u<d;u++)a[u].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=Math.PI/180,Lf=180/Math.PI;function ko(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]).toLowerCase()}function xn(s,e,n){return Math.max(e,Math.min(n,s))}function jv(s,e){return(s%e+e)%e}function Mc(s,e,n){return(1-n)*s+n*e}function Po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const qv={DEG2RAD:Tl};class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*a+e.x,this.y=u*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,r,a,u,d,f,p,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,p,m)}set(e,n,r,a,u,d,f,p,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=n,g[4]=u,g[5]=p,g[6]=r,g[7]=d,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],g=r[4],y=r[7],x=r[2],S=r[5],T=r[8],A=a[0],v=a[3],_=a[6],I=a[1],P=a[4],D=a[7],j=a[2],z=a[5],N=a[8];return u[0]=d*A+f*I+p*j,u[3]=d*v+f*P+p*z,u[6]=d*_+f*D+p*N,u[1]=m*A+g*I+y*j,u[4]=m*v+g*P+y*z,u[7]=m*_+g*D+y*N,u[2]=x*A+S*I+T*j,u[5]=x*v+S*P+T*z,u[8]=x*_+S*D+T*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8];return n*d*g-n*f*m-r*u*g+r*f*p+a*u*m-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8],y=g*d-f*m,x=f*p-g*u,S=m*u-d*p,T=n*y+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(a*m-g*r)*A,e[2]=(f*r-a*d)*A,e[3]=x*A,e[4]=(g*n-a*p)*A,e[5]=(a*u-f*n)*A,e[6]=S*A,e[7]=(r*p-m*n)*A,e[8]=(d*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,d,f){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-a*m,a*p,-a*(-m*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Ec.makeScale(e,n)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ec.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ec=new ct;function Vm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $v(){const s=bl("canvas");return s.style.display="block",s}const Rp={};function Gm(s){s in Rp||(Rp[s]=!0,console.warn(s))}function Kv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const Pp=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lp=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qa={[xr]:{transfer:Cl,primaries:Rl,toReference:s=>s,fromReference:s=>s},[di]:{transfer:Ut,primaries:Rl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Il]:{transfer:Cl,primaries:Pl,toReference:s=>s.applyMatrix3(Lp),fromReference:s=>s.applyMatrix3(Pp)},[Gf]:{transfer:Ut,primaries:Pl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Lp),fromReference:s=>s.applyMatrix3(Pp).convertLinearToSRGB()}},Zv=new Set([xr,Il]),Tt={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Zv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=qa[e].toReference,a=qa[n].fromReference;return a(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return qa[s].primaries},getTransfer:function(s){return s===mr?Cl:qa[s].transfer}};function Vs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Tc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class Qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=bl("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let d=0;d<u.length;d++)u[d]=Vs(u[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vs(n[r]/255)*255):n[r]=Vs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jv=0;class Wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?u.push(wc(a[d].image)):u.push(wc(a[d]))}else u=wc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function wc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e0=0;class Ln extends $r{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Gr,a=Gr,u=oi,d=Wr,f=ai,p=Fi,m=Ln.DEFAULT_ANISOTROPY,g=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=ko(),this.name="",this.source=new Wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tf:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tf:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Lm;Ln.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,n=0,r=0,a=1){on.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*u,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*u,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*u,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],g=p[4],y=p[8],x=p[1],S=p[5],T=p[9],A=p[2],v=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(y-A)<.01&&Math.abs(T-v)<.01){if(Math.abs(g+x)<.1&&Math.abs(y+A)<.1&&Math.abs(T+v)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,D=(S+1)/2,j=(_+1)/2,z=(g+x)/4,N=(y+A)/4,X=(T+v)/4;return P>D&&P>j?P<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(P),a=z/r,u=N/r):D>j?D<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(D),r=z/a,u=X/a):j<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(j),r=N/u,a=X/u),this.set(r,a,u,n),this}let I=Math.sqrt((v-T)*(v-T)+(y-A)*(y-A)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(v-T)/I,this.y=(y-A)/I,this.z=(x-g)/I,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t0 extends $r{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Ln(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jr extends t0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Xm extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=$n,this.minFilter=$n,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n0 extends Ln{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=$n,this.minFilter=$n,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,d,f){let p=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];const x=u[d+0],S=u[d+1],T=u[d+2],A=u[d+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=y;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=A;return}if(y!==A||p!==x||m!==S||g!==T){let v=1-f;const _=p*x+m*S+g*T+y*A,I=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const j=Math.sqrt(P),z=Math.atan2(j,_*I);v=Math.sin(v*z)/j,f=Math.sin(f*z)/j}const D=f*I;if(p=p*v+x*D,m=m*v+S*D,g=g*v+T*D,y=y*v+A*D,v===1-f){const j=1/Math.sqrt(p*p+m*m+g*g+y*y);p*=j,m*=j,g*=j,y*=j}}e[n]=p,e[n+1]=m,e[n+2]=g,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,a,u,d){const f=r[a],p=r[a+1],m=r[a+2],g=r[a+3],y=u[d],x=u[d+1],S=u[d+2],T=u[d+3];return e[n]=f*T+g*y+p*S-m*x,e[n+1]=p*T+g*x+m*y-f*S,e[n+2]=m*T+g*S+f*x-p*y,e[n+3]=g*T-f*y-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),g=f(a/2),y=f(u/2),x=p(r/2),S=p(a/2),T=p(u/2);switch(d){case"XYZ":this._x=x*g*y+m*S*T,this._y=m*S*y-x*g*T,this._z=m*g*T+x*S*y,this._w=m*g*y-x*S*T;break;case"YXZ":this._x=x*g*y+m*S*T,this._y=m*S*y-x*g*T,this._z=m*g*T-x*S*y,this._w=m*g*y+x*S*T;break;case"ZXY":this._x=x*g*y-m*S*T,this._y=m*S*y+x*g*T,this._z=m*g*T+x*S*y,this._w=m*g*y-x*S*T;break;case"ZYX":this._x=x*g*y-m*S*T,this._y=m*S*y+x*g*T,this._z=m*g*T-x*S*y,this._w=m*g*y+x*S*T;break;case"YZX":this._x=x*g*y+m*S*T,this._y=m*S*y+x*g*T,this._z=m*g*T-x*S*y,this._w=m*g*y-x*S*T;break;case"XZY":this._x=x*g*y-m*S*T,this._y=m*S*y-x*g*T,this._z=m*g*T+x*S*y,this._w=m*g*y+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],d=n[1],f=n[5],p=n[9],m=n[2],g=n[6],y=n[10],x=r+f+y;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-p)*S,this._y=(u-m)*S,this._z=(d-a)*S}else if(r>f&&r>y){const S=2*Math.sqrt(1+r-f-y);this._w=(g-p)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(u+m)/S}else if(f>y){const S=2*Math.sqrt(1+f-r-y);this._w=(u-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+y-r-f);this._w=(d-a)/S,this._x=(u+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,d=e._w,f=n._x,p=n._y,m=n._z,g=n._w;return this._x=r*g+d*f+a*m-u*p,this._y=a*g+d*p+u*f-r*m,this._z=u*g+d*m+r*p-a*f,this._w=d*g-r*f-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+u*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=u,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,f),y=Math.sin((1-n)*g)/m,x=Math.sin(n*g)/m;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=a*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,d=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*d,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*d,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*a-f*r),g=2*(f*n-u*a),y=2*(u*r-d*n);return this.x=n+p*m+d*y-f*g,this.y=r+p*g+f*m-u*y,this.z=a+p*y+u*g-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,d=n.x,f=n.y,p=n.z;return this.x=a*p-u*f,this.y=u*d-r*p,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new Z,bp=new qr;class zo{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=u.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ii):ii.fromBufferAttribute(u,d),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$a.copy(r.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const a=e.children;for(let u=0,d=a.length;u<d;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),Ka.subVectors(this.max,Lo),Es.subVectors(e.a,Lo),Ts.subVectors(e.b,Lo),ws.subVectors(e.c,Lo),lr.subVectors(Ts,Es),ur.subVectors(ws,Ts),Ir.subVectors(Es,ws);let n=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Ir.z,Ir.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Ir.z,0,-Ir.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Ir.y,Ir.x,0];return!Cc(n,Es,Ts,ws,Ka)||(n=[1,0,0,0,1,0,0,0,1],!Cc(n,Es,Ts,ws,Ka))?!1:(Za.crossVectors(lr,ur),n=[Za.x,Za.y,Za.z],Cc(n,Es,Ts,ws,Ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ii=new Z,$a=new zo,Es=new Z,Ts=new Z,ws=new Z,lr=new Z,ur=new Z,Ir=new Z,Lo=new Z,Ka=new Z,Za=new Z,Nr=new Z;function Cc(s,e,n,r,a){for(let u=0,d=s.length-3;u<=d;u+=3){Nr.fromArray(s,u);const f=a.x*Math.abs(Nr.x)+a.y*Math.abs(Nr.y)+a.z*Math.abs(Nr.z),p=e.dot(Nr),m=n.dot(Nr),g=r.dot(Nr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>f)return!1}return!0}const i0=new zo,bo=new Z,Rc=new Z;class Nl{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):i0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,d=e.length;u<d;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Rc)),this.expandByPoint(bo.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new Z,Pc=new Z,Qa=new Z,cr=new Z,Lc=new Z,Ja=new Z,bc=new Z;class Fl{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Pc.copy(e).add(n).multiplyScalar(.5),Qa.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Pc);const u=e.distanceTo(n)*.5,d=-this.direction.dot(Qa),f=cr.dot(this.direction),p=-cr.dot(Qa),m=cr.lengthSq(),g=Math.abs(1-d*d);let y,x,S,T;if(g>0)if(y=d*p-f,x=d*f-p,T=u*g,y>=0)if(x>=-T)if(x<=T){const A=1/g;y*=A,x*=A,S=y*(y+d*x+2*f)+x*(d*y+x+2*p)+m}else x=u,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+m;else x=-u,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+m;else x<=-T?(y=Math.max(0,-(-d*u+f)),x=y>0?-u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m):x<=T?(y=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(y=Math.max(0,-(d*u+f)),x=y>0?u:Math.min(Math.max(-u,-p),u),S=-y*y+x*(x+2*p)+m);else x=d>0?-u:u,y=Math.max(0,-(d*x+f)),S=-y*y+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Pc).addScaledVector(Qa,x),S}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const r=Ci.dot(this.direction),a=Ci.dot(Ci)-r*r,u=e.radius*e.radius;if(a>u)return null;const d=Math.sqrt(u-a),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,d,f,p;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),g>=0?(u=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||u>a||((u>r||isNaN(r))&&(r=u),(d<a||isNaN(a))&&(a=d),y>=0?(f=(e.min.z-x.z)*y,p=(e.max.z-x.z)*y):(f=(e.max.z-x.z)*y,p=(e.min.z-x.z)*y),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,r,a,u){Lc.subVectors(n,e),Ja.subVectors(r,e),bc.crossVectors(Lc,Ja);let d=this.direction.dot(bc),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;cr.subVectors(this.origin,e);const p=f*this.direction.dot(Ja.crossVectors(cr,Ja));if(p<0)return null;const m=f*this.direction.dot(Lc.cross(cr));if(m<0||p+m>d)return null;const g=-f*cr.dot(bc);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,n,r,a,u,d,f,p,m,g,y,x,S,T,A,v){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,p,m,g,y,x,S,T,A,v)}set(e,n,r,a,u,d,f,p,m,g,y,x,S,T,A,v){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=d,_[9]=f,_[13]=p,_[2]=m,_[6]=g,_[10]=y,_[14]=x,_[3]=S,_[7]=T,_[11]=A,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/As.setFromMatrixColumn(e,0).length(),u=1/As.setFromMatrixColumn(e,1).length(),d=1/As.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a),g=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=d*g,S=d*y,T=f*g,A=f*y;n[0]=p*g,n[4]=-p*y,n[8]=m,n[1]=S+T*m,n[5]=x-A*m,n[9]=-f*p,n[2]=A-x*m,n[6]=T+S*m,n[10]=d*p}else if(e.order==="YXZ"){const x=p*g,S=p*y,T=m*g,A=m*y;n[0]=x+A*f,n[4]=T*f-S,n[8]=d*m,n[1]=d*y,n[5]=d*g,n[9]=-f,n[2]=S*f-T,n[6]=A+x*f,n[10]=d*p}else if(e.order==="ZXY"){const x=p*g,S=p*y,T=m*g,A=m*y;n[0]=x-A*f,n[4]=-d*y,n[8]=T+S*f,n[1]=S+T*f,n[5]=d*g,n[9]=A-x*f,n[2]=-d*m,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const x=d*g,S=d*y,T=f*g,A=f*y;n[0]=p*g,n[4]=T*m-S,n[8]=x*m+A,n[1]=p*y,n[5]=A*m+x,n[9]=S*m-T,n[2]=-m,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const x=d*p,S=d*m,T=f*p,A=f*m;n[0]=p*g,n[4]=A-x*y,n[8]=T*y+S,n[1]=y,n[5]=d*g,n[9]=-f*g,n[2]=-m*g,n[6]=S*y+T,n[10]=x-A*y}else if(e.order==="XZY"){const x=d*p,S=d*m,T=f*p,A=f*m;n[0]=p*g,n[4]=-y,n[8]=m*g,n[1]=x*y+A,n[5]=d*g,n[9]=S*y-T,n[2]=T*y-S,n[6]=f*g,n[10]=A*y+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,s0)}lookAt(e,n,r){const a=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),fr.crossVectors(r,kn),fr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),fr.crossVectors(r,kn)),fr.normalize(),el.crossVectors(kn,fr),a[0]=fr.x,a[4]=el.x,a[8]=kn.x,a[1]=fr.y,a[5]=el.y,a[9]=kn.y,a[2]=fr.z,a[6]=el.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],g=r[1],y=r[5],x=r[9],S=r[13],T=r[2],A=r[6],v=r[10],_=r[14],I=r[3],P=r[7],D=r[11],j=r[15],z=a[0],N=a[4],X=a[8],L=a[12],R=a[1],B=a[5],ae=a[9],ee=a[13],fe=a[2],de=a[6],oe=a[10],ue=a[14],H=a[3],he=a[7],le=a[11],F=a[15];return u[0]=d*z+f*R+p*fe+m*H,u[4]=d*N+f*B+p*de+m*he,u[8]=d*X+f*ae+p*oe+m*le,u[12]=d*L+f*ee+p*ue+m*F,u[1]=g*z+y*R+x*fe+S*H,u[5]=g*N+y*B+x*de+S*he,u[9]=g*X+y*ae+x*oe+S*le,u[13]=g*L+y*ee+x*ue+S*F,u[2]=T*z+A*R+v*fe+_*H,u[6]=T*N+A*B+v*de+_*he,u[10]=T*X+A*ae+v*oe+_*le,u[14]=T*L+A*ee+v*ue+_*F,u[3]=I*z+P*R+D*fe+j*H,u[7]=I*N+P*B+D*de+j*he,u[11]=I*X+P*ae+D*oe+j*le,u[15]=I*L+P*ee+D*ue+j*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],d=e[1],f=e[5],p=e[9],m=e[13],g=e[2],y=e[6],x=e[10],S=e[14],T=e[3],A=e[7],v=e[11],_=e[15];return T*(+u*p*y-a*m*y-u*f*x+r*m*x+a*f*S-r*p*S)+A*(+n*p*S-n*m*x+u*d*x-a*d*S+a*m*g-u*p*g)+v*(+n*m*y-n*f*S-u*d*y+r*d*S+u*f*g-r*m*g)+_*(-a*f*g-n*p*y+n*f*x+a*d*y-r*d*x+r*p*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],p=e[6],m=e[7],g=e[8],y=e[9],x=e[10],S=e[11],T=e[12],A=e[13],v=e[14],_=e[15],I=y*v*m-A*x*m+A*p*S-f*v*S-y*p*_+f*x*_,P=T*x*m-g*v*m-T*p*S+d*v*S+g*p*_-d*x*_,D=g*A*m-T*y*m+T*f*S-d*A*S-g*f*_+d*y*_,j=T*y*p-g*A*p-T*f*x+d*A*x+g*f*v-d*y*v,z=n*I+r*P+a*D+u*j;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return e[0]=I*N,e[1]=(A*x*u-y*v*u-A*a*S+r*v*S+y*a*_-r*x*_)*N,e[2]=(f*v*u-A*p*u+A*a*m-r*v*m-f*a*_+r*p*_)*N,e[3]=(y*p*u-f*x*u-y*a*m+r*x*m+f*a*S-r*p*S)*N,e[4]=P*N,e[5]=(g*v*u-T*x*u+T*a*S-n*v*S-g*a*_+n*x*_)*N,e[6]=(T*p*u-d*v*u-T*a*m+n*v*m+d*a*_-n*p*_)*N,e[7]=(d*x*u-g*p*u+g*a*m-n*x*m-d*a*S+n*p*S)*N,e[8]=D*N,e[9]=(T*y*u-g*A*u-T*r*S+n*A*S+g*r*_-n*y*_)*N,e[10]=(d*A*u-T*f*u+T*r*m-n*A*m-d*r*_+n*f*_)*N,e[11]=(g*f*u-d*y*u-g*r*m+n*y*m+d*r*S-n*f*S)*N,e[12]=j*N,e[13]=(g*A*a-T*y*a+T*r*x-n*A*x-g*r*v+n*y*v)*N,e[14]=(T*f*a-d*A*a-T*r*p+n*A*p+d*r*v-n*f*v)*N,e[15]=(d*y*a-g*f*a+g*r*p-n*y*p-d*r*x+n*f*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,d=e.x,f=e.y,p=e.z,m=u*d,g=u*f;return this.set(m*d+r,m*f-a*p,m*p+a*f,0,m*f+a*p,g*f+r,g*p-a*d,0,m*p-a*f,g*p+a*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,d){return this.set(1,r,u,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,d=n._y,f=n._z,p=n._w,m=u+u,g=d+d,y=f+f,x=u*m,S=u*g,T=u*y,A=d*g,v=d*y,_=f*y,I=p*m,P=p*g,D=p*y,j=r.x,z=r.y,N=r.z;return a[0]=(1-(A+_))*j,a[1]=(S+D)*j,a[2]=(T-P)*j,a[3]=0,a[4]=(S-D)*z,a[5]=(1-(x+_))*z,a[6]=(v+I)*z,a[7]=0,a[8]=(T+P)*N,a[9]=(v-I)*N,a[10]=(1-(x+A))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=As.set(a[0],a[1],a[2]).length();const d=As.set(a[4],a[5],a[6]).length(),f=As.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ri.copy(this);const m=1/u,g=1/d,y=1/f;return ri.elements[0]*=m,ri.elements[1]*=m,ri.elements[2]*=m,ri.elements[4]*=g,ri.elements[5]*=g,ri.elements[6]*=g,ri.elements[8]*=y,ri.elements[9]*=y,ri.elements[10]*=y,n.setFromRotationMatrix(ri),r.x=u,r.y=d,r.z=f,this}makePerspective(e,n,r,a,u,d,f=Ii){const p=this.elements,m=2*u/(n-e),g=2*u/(r-a),y=(n+e)/(n-e),x=(r+a)/(r-a);let S,T;if(f===Ii)S=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(f===Ll)S=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,d,f=Ii){const p=this.elements,m=1/(n-e),g=1/(r-a),y=1/(d-u),x=(n+e)*m,S=(r+a)*g;let T,A;if(f===Ii)T=(d+u)*y,A=-2*y;else if(f===Ll)T=u*y,A=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const As=new Z,ri=new Yt,r0=new Z(0,0,0),s0=new Z(1,1,1),fr=new Z,el=new Z,kn=new Z,Dp=new Yt,Up=new qr;class Oi{constructor(e=0,n=0,r=0,a=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],d=a[4],f=a[8],p=a[1],m=a[5],g=a[9],y=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(xn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-xn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(xn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Up.setFromEuler(this),this.setFromQuaternion(Up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Wf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o0=0;const Ip=new Z,Cs=new qr,Ri=new Yt,tl=new Z,Do=new Z,a0=new Z,l0=new qr,Np=new Z(1,0,0),Fp=new Z(0,1,0),Op=new Z(0,0,1),kp={type:"added"},u0={type:"removed"},Rs={type:"childadded",child:null},Dc={type:"childremoved",child:null};class bn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new Z,n=new Oi,r=new qr,a=new Z(1,1,1);function u(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ct}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Np,e)}rotateY(e){return this.rotateOnAxis(Fp,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,n){return Ip.copy(e).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Np,e)}translateY(e){return this.translateOnAxis(Fp,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?tl.copy(e):tl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Do,tl,this.up):Ri.lookAt(tl,Do,this.up),this.quaternion.setFromRotationMatrix(Ri),a&&(Ri.extractRotation(a.matrixWorld),Cs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(u0),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kp),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const y=p[m];u(e.shapes,y)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(u(e.materials,this.material[p]));a.material=f}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(u(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),g=d(e.images),y=d(e.shapes),x=d(e.skeletons),S=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function d(f){const p=[];for(const m in f){const g=f[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}bn.DEFAULT_UP=new Z(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new Z,Pi=new Z,Uc=new Z,Li=new Z,Ps=new Z,Ls=new Z,zp=new Z,Ic=new Z,Nc=new Z,Fc=new Z;class pi{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),si.subVectors(e,n),a.cross(si);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){si.subVectors(a,n),Pi.subVectors(r,n),Uc.subVectors(e,n);const d=si.dot(si),f=si.dot(Pi),p=si.dot(Uc),m=Pi.dot(Pi),g=Pi.dot(Uc),y=d*m-f*f;if(y===0)return u.set(0,0,0),null;const x=1/y,S=(m*p-f*g)*x,T=(d*g-f*p)*x;return u.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,r,a,u,d,f,p){return this.getBarycoord(e,n,r,a,Li)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Li.x),p.addScaledVector(d,Li.y),p.addScaledVector(f,Li.z),p)}static isFrontFacing(e,n,r,a){return si.subVectors(r,n),Pi.subVectors(e,n),si.cross(Pi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),si.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return pi.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let d,f;Ps.subVectors(a,r),Ls.subVectors(u,r),Ic.subVectors(e,r);const p=Ps.dot(Ic),m=Ls.dot(Ic);if(p<=0&&m<=0)return n.copy(r);Nc.subVectors(e,a);const g=Ps.dot(Nc),y=Ls.dot(Nc);if(g>=0&&y<=g)return n.copy(a);const x=p*y-g*m;if(x<=0&&p>=0&&g<=0)return d=p/(p-g),n.copy(r).addScaledVector(Ps,d);Fc.subVectors(e,u);const S=Ps.dot(Fc),T=Ls.dot(Fc);if(T>=0&&S<=T)return n.copy(u);const A=S*m-p*T;if(A<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(r).addScaledVector(Ls,f);const v=g*T-S*y;if(v<=0&&y-g>=0&&S-T>=0)return zp.subVectors(u,a),f=(y-g)/(y-g+(S-T)),n.copy(a).addScaledVector(zp,f);const _=1/(v+A+x);return d=A*_,f=x*_,n.copy(r).addScaledVector(Ps,d).addScaledVector(Ls,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ym={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Oc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class yt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Tt.workingColorSpace){if(e=jv(e,1),n=xn(n,0,1),r=xn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,d=2*r-u;this.r=Oc(d,u,e+1/3),this.g=Oc(d,u,e),this.b=Oc(d,u,e-1/3)}return Tt.toWorkingColorSpace(this,a),this}setStyle(e,n=di){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=di){const r=Ym[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=Tc(e.r),this.g=Tc(e.g),this.b=Tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Tt.fromWorkingColorSpace(pn.copy(this),e),Math.round(xn(pn.r*255,0,255))*65536+Math.round(xn(pn.g*255,0,255))*256+Math.round(xn(pn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(pn.copy(this),n);const r=pn.r,a=pn.g,u=pn.b,d=Math.max(r,a,u),f=Math.min(r,a,u);let p,m;const g=(f+d)/2;if(f===d)p=0,m=0;else{const y=d-f;switch(m=g<=.5?y/(d+f):y/(2-d-f),d){case r:p=(a-u)/y+(a<u?6:0);break;case a:p=(u-r)/y+2;break;case u:p=(r-a)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=di){Tt.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,r=pn.g,a=pn.b;return e!==di?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(nl);const r=Mc(dr.h,nl.h,n),a=Mc(dr.s,nl.s,n),u=Mc(dr.l,nl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new yt;yt.NAMES=Ym;let c0=0;class Bo extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Bs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Qc,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zc&&(r.blendSrc=this.blendSrc),this.blendDst!==Qc&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Al&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}if(n){const u=a(e.textures),d=a(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class jm extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new Z,il=new at;class Bn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ap,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Po(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Po(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Po(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Po(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),a=Rn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),r=Rn(r,this.array),a=Rn(a,this.array),u=Rn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ap&&(e.usage=this.usage),e}}class qm extends Bn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class $m extends Bn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Xr extends Bn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let f0=0;const jn=new Yt,kc=new bn,bs=new Z,zn=new zo,Uo=new zo,sn=new Z;class zi extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vm(e)?$m:qm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ct().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Xr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];zn.setFromBufferAttribute(u),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let u=0,d=n.length;u<d;u++){const f=n[u];Uo.setFromBufferAttribute(f),this.morphTargetsRelative?(sn.addVectors(zn.min,Uo.min),zn.expandByPoint(sn),sn.addVectors(zn.max,Uo.max),zn.expandByPoint(sn)):(zn.expandByPoint(Uo.min),zn.expandByPoint(Uo.max))}zn.getCenter(r);let a=0;for(let u=0,d=e.count;u<d;u++)sn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let u=0,d=n.length;u<d;u++){const f=n[u],p=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)sn.fromBufferAttribute(f,m),p&&(bs.fromBufferAttribute(e,m),sn.add(bs)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let X=0;X<r.count;X++)f[X]=new Z,p[X]=new Z;const m=new Z,g=new Z,y=new Z,x=new at,S=new at,T=new at,A=new Z,v=new Z;function _(X,L,R){m.fromBufferAttribute(r,X),g.fromBufferAttribute(r,L),y.fromBufferAttribute(r,R),x.fromBufferAttribute(u,X),S.fromBufferAttribute(u,L),T.fromBufferAttribute(u,R),g.sub(m),y.sub(m),S.sub(x),T.sub(x);const B=1/(S.x*T.y-T.x*S.y);isFinite(B)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(y,-S.y).multiplyScalar(B),v.copy(y).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(B),f[X].add(A),f[L].add(A),f[R].add(A),p[X].add(v),p[L].add(v),p[R].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let X=0,L=I.length;X<L;++X){const R=I[X],B=R.start,ae=R.count;for(let ee=B,fe=B+ae;ee<fe;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const P=new Z,D=new Z,j=new Z,z=new Z;function N(X){j.fromBufferAttribute(a,X),z.copy(j);const L=f[X];P.copy(L),P.sub(j.multiplyScalar(j.dot(L))).normalize(),D.crossVectors(z,L);const B=D.dot(p[X])<0?-1:1;d.setXYZW(X,P.x,P.y,P.z,B)}for(let X=0,L=I.length;X<L;++X){const R=I[X],B=R.start,ae=R.count;for(let ee=B,fe=B+ae;ee<fe;ee+=3)N(e.getX(ee+0)),N(e.getX(ee+1)),N(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Z,u=new Z,d=new Z,f=new Z,p=new Z,m=new Z,g=new Z,y=new Z;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),A=e.getX(x+1),v=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,v),g.subVectors(d,u),y.subVectors(a,u),g.cross(y),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,v),f.add(g),p.add(g),m.add(g),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),g.subVectors(d,u),y.subVectors(a,u),g.cross(y),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(f,p){const m=f.array,g=f.itemSize,y=f.normalized,x=new m.constructor(p.length*g);let S=0,T=0;for(let A=0,v=p.length;A<v;A++){f.isInterleavedBufferAttribute?S=p[A]*f.data.stride+f.offset:S=p[A]*g;for(let _=0;_<g;_++)x[T++]=m[S++]}return new Bn(x,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zi,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,r);n.setAttribute(f,m)}const u=this.morphAttributes;for(const f in u){const p=[],m=u[f];for(let g=0,y=m.length;g<y;g++){const x=m[g],S=e(x,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let y=0,x=m.length;y<x;y++){const S=m[y];g.push(S.toJSON(e.data))}g.length>0&&(a[p]=g,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(n))}const u=e.morphAttributes;for(const m in u){const g=[],y=u[m];for(let x=0,S=y.length;x<S;x++)g.push(y[x].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,g=d.length;m<g;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bp=new Yt,Fr=new Fl,rl=new Nl,Hp=new Z,Ds=new Z,Us=new Z,Is=new Z,zc=new Z,sl=new Z,ol=new at,al=new at,ll=new at,Vp=new Z,Gp=new Z,Wp=new Z,ul=new Z,cl=new Z;class Ni extends bn{constructor(e=new zi,n=new jm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(u&&f){sl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=f[p],y=u[p];g!==0&&(zc.fromBufferAttribute(y,e),d?sl.addScaledVector(zc,g):sl.addScaledVector(zc.sub(n),g))}n.add(sl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rl.copy(r.boundingSphere),rl.applyMatrix4(u),Fr.copy(e.ray).recast(e.near),!(rl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(rl,Hp)===null||Fr.origin.distanceToSquared(Hp)>(e.far-e.near)**2))&&(Bp.copy(u).invert(),Fr.copy(e.ray).applyMatrix4(Bp),!(r.boundingBox!==null&&Fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,d=this.material,f=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,y=u.attributes.normal,x=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,A=x.length;T<A;T++){const v=x[T],_=d[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(f.count,Math.min(v.start+v.count,S.start+S.count));for(let D=I,j=P;D<j;D+=3){const z=f.getX(D),N=f.getX(D+1),X=f.getX(D+2);a=fl(this,_,e,r,m,g,y,z,N,X),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let v=T,_=A;v<_;v+=3){const I=f.getX(v),P=f.getX(v+1),D=f.getX(v+2);a=fl(this,d,e,r,m,g,y,I,P,D),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,A=x.length;T<A;T++){const v=x[T],_=d[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(p.count,Math.min(v.start+v.count,S.start+S.count));for(let D=I,j=P;D<j;D+=3){const z=D,N=D+1,X=D+2;a=fl(this,_,e,r,m,g,y,z,N,X),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=v.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let v=T,_=A;v<_;v+=3){const I=v,P=v+1,D=v+2;a=fl(this,d,e,r,m,g,y,I,P,D),a&&(a.faceIndex=Math.floor(v/3),n.push(a))}}}}function d0(s,e,n,r,a,u,d,f){let p;if(e.side===Pn?p=r.intersectTriangle(d,u,a,!0,f):p=r.intersectTriangle(a,u,d,e.side===vr,f),p===null)return null;cl.copy(f),cl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(cl);return m<n.near||m>n.far?null:{distance:m,point:cl.clone(),object:s}}function fl(s,e,n,r,a,u,d,f,p,m){s.getVertexPosition(f,Ds),s.getVertexPosition(p,Us),s.getVertexPosition(m,Is);const g=d0(s,e,n,r,Ds,Us,Is,ul);if(g){a&&(ol.fromBufferAttribute(a,f),al.fromBufferAttribute(a,p),ll.fromBufferAttribute(a,m),g.uv=pi.getInterpolation(ul,Ds,Us,Is,ol,al,ll,new at)),u&&(ol.fromBufferAttribute(u,f),al.fromBufferAttribute(u,p),ll.fromBufferAttribute(u,m),g.uv1=pi.getInterpolation(ul,Ds,Us,Is,ol,al,ll,new at)),d&&(Vp.fromBufferAttribute(d,f),Gp.fromBufferAttribute(d,p),Wp.fromBufferAttribute(d,m),g.normal=pi.getInterpolation(ul,Ds,Us,Is,Vp,Gp,Wp,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:f,b:p,c:m,normal:new Z,materialIndex:0};pi.getNormal(Ds,Us,Is,y.normal),g.face=y}return g}class Ho extends zi{constructor(e=1,n=1,r=1,a=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:d};const f=this;a=Math.floor(a),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],g=[],y=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,d,u,0),T("z","y","x",1,-1,r,n,-e,d,u,1),T("x","z","y",1,1,e,r,n,a,d,2),T("x","z","y",1,-1,e,r,-n,a,d,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Xr(m,3)),this.setAttribute("normal",new Xr(g,3)),this.setAttribute("uv",new Xr(y,2));function T(A,v,_,I,P,D,j,z,N,X,L){const R=D/N,B=j/X,ae=D/2,ee=j/2,fe=z/2,de=N+1,oe=X+1;let ue=0,H=0;const he=new Z;for(let le=0;le<oe;le++){const F=le*B-ee;for(let se=0;se<de;se++){const De=se*R-ae;he[A]=De*I,he[v]=F*P,he[_]=fe,m.push(he.x,he.y,he.z),he[A]=0,he[v]=0,he[_]=z>0?1:-1,g.push(he.x,he.y,he.z),y.push(se/N),y.push(1-le/X),ue+=1}}for(let le=0;le<X;le++)for(let F=0;F<N;F++){const se=x+F+de*le,De=x+F+de*(le+1),K=x+(F+1)+de*(le+1),ce=x+(F+1)+de*le;p.push(se,De,ce),p.push(De,K,ce),H+=6}f.addGroup(S,H,L),S+=H,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function vn(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const a in r)e[a]=r[a]}return e}function h0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Km(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const p0={clone:js,merge:vn};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Zm extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new Z,Xp=new at,Yp=new at;class qn extends Zm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lf*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,Xp,Yp),n.subVectors(Yp,Xp)}setViewOffset(e,n,r,a,u,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*a/p,n-=d.offsetY*r/m,a*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Fs=1;class _0 extends bn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(Ns,Fs,e,n);a.layers=this.layers,this.add(a);const u=new qn(Ns,Fs,e,n);u.layers=this.layers,this.add(u);const d=new qn(Ns,Fs,e,n);d.layers=this.layers,this.add(d);const f=new qn(Ns,Fs,e,n);f.layers=this.layers,this.add(f);const p=new qn(Ns,Fs,e,n);p.layers=this.layers,this.add(p);const m=new qn(Ns,Fs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,d,f,p]=n;for(const m of n)this.remove(m);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ll)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,f,p,m,g]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,g),e.setRenderTarget(y,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Qm extends Ln{constructor(e,n,r,a,u,d,f,p,m,g){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,r,a,u,d,f,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Qm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:oi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ho(5,5,5),u=new ki({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:gr});u.uniforms.tEquirect.value=n;const d=new Ni(a,u),f=n.minFilter;return n.minFilter===Wr&&(n.minFilter=oi),new _0(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(u)}}const Bc=new Z,x0=new Z,y0=new ct;class pr{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Bc.subVectors(r,n).cross(x0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||y0.getNormalMatrix(e),a=this.coplanarPoint(Bc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Nl,dl=new Z;class Jm{constructor(e=new pr,n=new pr,r=new pr,a=new pr,u=new pr,d=new pr){this.planes=[e,n,r,a,u,d]}set(e,n,r,a,u,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(u),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ii){const r=this.planes,a=e.elements,u=a[0],d=a[1],f=a[2],p=a[3],m=a[4],g=a[5],y=a[6],x=a[7],S=a[8],T=a[9],A=a[10],v=a[11],_=a[12],I=a[13],P=a[14],D=a[15];if(r[0].setComponents(p-u,x-m,v-S,D-_).normalize(),r[1].setComponents(p+u,x+m,v+S,D+_).normalize(),r[2].setComponents(p+d,x+g,v+T,D+I).normalize(),r[3].setComponents(p-d,x-g,v-T,D-I).normalize(),r[4].setComponents(p-f,x-y,v-A,D-P).normalize(),n===Ii)r[5].setComponents(p+f,x+y,v+A,D+P).normalize();else if(n===Ll)r[5].setComponents(f,y,A,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(dl.x=a.normal.x>0?e.max.x:e.min.x,dl.y=a.normal.y>0?e.max.y:e.min.y,dl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eg(){let s=null,e=!1,n=null,r=null;function a(u,d){n(u,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function S0(s){const e=new WeakMap;function n(f,p){const m=f.array,g=f.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,p,m){const g=p.array,y=p._updateRange,x=p.updateRanges;if(s.bindBuffer(m,f),y.count===-1&&x.length===0&&s.bufferSubData(m,0,g),x.length!==0){for(let S=0,T=x.length;S<T;S++){const A=x[S];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}y.count!==-1&&(s.bufferSubData(m,y.offset*g.BYTES_PER_ELEMENT,g,y.offset,y.count),y.count=-1),p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:a,remove:u,update:d}}class Ol extends zi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,d=n/2,f=Math.floor(r),p=Math.floor(a),m=f+1,g=p+1,y=e/f,x=n/p,S=[],T=[],A=[],v=[];for(let _=0;_<g;_++){const I=_*x-d;for(let P=0;P<m;P++){const D=P*y-u;T.push(D,-I,0),A.push(0,0,1),v.push(P/f),v.push(1-_/p)}}for(let _=0;_<p;_++)for(let I=0;I<f;I++){const P=I+m*_,D=I+m*(_+1),j=I+1+m*(_+1),z=I+1+m*_;S.push(P,D,z),S.push(D,j,z)}this.setIndex(S),this.setAttribute("position",new Xr(T,3)),this.setAttribute("normal",new Xr(A,3)),this.setAttribute("uv",new Xr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,b0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,X0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,j0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",J0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,px=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,py=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ry=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Py=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ly=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ny=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,By=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:M0,alphahash_pars_fragment:E0,alphamap_fragment:T0,alphamap_pars_fragment:w0,alphatest_fragment:A0,alphatest_pars_fragment:C0,aomap_fragment:R0,aomap_pars_fragment:P0,batching_pars_vertex:L0,batching_vertex:b0,begin_vertex:D0,beginnormal_vertex:U0,bsdfs:I0,iridescence_fragment:N0,bumpmap_pars_fragment:F0,clipping_planes_fragment:O0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:B0,color_fragment:H0,color_pars_fragment:V0,color_pars_vertex:G0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:j0,displacementmap_pars_vertex:q0,displacementmap_vertex:$0,emissivemap_fragment:K0,emissivemap_pars_fragment:Z0,colorspace_fragment:Q0,colorspace_pars_fragment:J0,envmap_fragment:ex,envmap_common_pars_fragment:tx,envmap_pars_fragment:nx,envmap_pars_vertex:ix,envmap_physical_pars_fragment:px,envmap_vertex:rx,fog_vertex:sx,fog_pars_vertex:ox,fog_fragment:ax,fog_pars_fragment:lx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:cx,lights_lambert_fragment:fx,lights_lambert_pars_fragment:dx,lights_pars_begin:hx,lights_toon_fragment:mx,lights_toon_pars_fragment:gx,lights_phong_fragment:_x,lights_phong_pars_fragment:vx,lights_physical_fragment:xx,lights_physical_pars_fragment:yx,lights_fragment_begin:Sx,lights_fragment_maps:Mx,lights_fragment_end:Ex,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Cx,map_fragment:Rx,map_pars_fragment:Px,map_particle_fragment:Lx,map_particle_pars_fragment:bx,metalnessmap_fragment:Dx,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Ix,morphcolor_vertex:Nx,morphnormal_vertex:Fx,morphtarget_pars_vertex:Ox,morphtarget_vertex:kx,normal_fragment_begin:zx,normal_fragment_maps:Bx,normal_pars_fragment:Hx,normal_pars_vertex:Vx,normal_vertex:Gx,normalmap_pars_fragment:Wx,clearcoat_normal_fragment_begin:Xx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:jx,iridescence_pars_fragment:qx,opaque_fragment:$x,packing:Kx,premultiplied_alpha_fragment:Zx,project_vertex:Qx,dithering_fragment:Jx,dithering_pars_fragment:ey,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:ry,shadowmap_vertex:sy,shadowmask_pars_fragment:oy,skinbase_vertex:ay,skinning_pars_vertex:ly,skinning_vertex:uy,skinnormal_vertex:cy,specularmap_fragment:fy,specularmap_pars_fragment:dy,tonemapping_fragment:hy,tonemapping_pars_fragment:py,transmission_fragment:my,transmission_pars_fragment:gy,uv_pars_fragment:_y,uv_pars_vertex:vy,uv_vertex:xy,worldpos_vertex:yy,background_vert:Sy,background_frag:My,backgroundCube_vert:Ey,backgroundCube_frag:Ty,cube_vert:wy,cube_frag:Ay,depth_vert:Cy,depth_frag:Ry,distanceRGBA_vert:Py,distanceRGBA_frag:Ly,equirect_vert:by,equirect_frag:Dy,linedashed_vert:Uy,linedashed_frag:Iy,meshbasic_vert:Ny,meshbasic_frag:Fy,meshlambert_vert:Oy,meshlambert_frag:ky,meshmatcap_vert:zy,meshmatcap_frag:By,meshnormal_vert:Hy,meshnormal_frag:Vy,meshphong_vert:Gy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:Yy,meshtoon_vert:jy,meshtoon_frag:qy,points_vert:$y,points_frag:Ky,shadow_vert:Zy,shadow_frag:Qy,sprite_vert:Jy,sprite_frag:eS},Re={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},hi={basic:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:vn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:vn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:vn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:vn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:vn([Re.points,Re.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:vn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:vn([Re.common,Re.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:vn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:vn([Re.sprite,Re.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:vn([Re.common,Re.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:vn([Re.lights,Re.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};hi.physical={uniforms:vn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const hl={r:0,b:0,g:0},kr=new Oi,tS=new Yt;function nS(s,e,n,r,a,u,d){const f=new yt(0);let p=u===!0?0:1,m,g,y=null,x=0,S=null;function T(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?n:e).get(P)),P}function A(I){let P=!1;const D=T(I);D===null?_(f,p):D&&D.isColor&&(_(D,1),P=!0);const j=s.xr.getEnvironmentBlendMode();j==="additive"?r.buffers.color.setClear(0,0,0,1,d):j==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(I,P){const D=T(P);D&&(D.isCubeTexture||D.mapping===Ul)?(g===void 0&&(g=new Ni(new Ho(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:js(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(j,z,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),kr.copy(P.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(tS.makeRotationFromEuler(kr)),g.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Ut,(y!==D||x!==D.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,y=D,x=D.version,S=s.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Ni(new Ol(2,2),new ki({name:"BackgroundMaterial",uniforms:js(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(D.colorSpace)!==Ut,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(y!==D||x!==D.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=D,x=D.version,S=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function _(I,P){I.getRGB(hl,Km(s)),r.buffers.color.setClear(hl.r,hl.g,hl.b,P,d)}return{getClearColor:function(){return f},setClearColor:function(I,P=1){f.set(I),p=P,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,_(f,p)},render:A,addToRenderList:v}}function iS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,d=!1;function f(R,B,ae,ee,fe){let de=!1;const oe=y(ee,ae,B);u!==oe&&(u=oe,m(u.object)),de=S(R,ee,ae,fe),de&&T(R,ee,ae,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,D(R,B,ae,ee),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function y(R,B,ae){const ee=ae.wireframe===!0;let fe=r[R.id];fe===void 0&&(fe={},r[R.id]=fe);let de=fe[B.id];de===void 0&&(de={},fe[B.id]=de);let oe=de[ee];return oe===void 0&&(oe=x(p()),de[ee]=oe),oe}function x(R){const B=[],ae=[],ee=[];for(let fe=0;fe<n;fe++)B[fe]=0,ae[fe]=0,ee[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ae,attributeDivisors:ee,object:R,attributes:{},index:null}}function S(R,B,ae,ee){const fe=u.attributes,de=B.attributes;let oe=0;const ue=ae.getAttributes();for(const H in ue)if(ue[H].location>=0){const le=fe[H];let F=de[H];if(F===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),le===void 0||le.attribute!==F||F&&le.data!==F.data)return!0;oe++}return u.attributesNum!==oe||u.index!==ee}function T(R,B,ae,ee){const fe={},de=B.attributes;let oe=0;const ue=ae.getAttributes();for(const H in ue)if(ue[H].location>=0){let le=de[H];le===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(le=R.instanceColor));const F={};F.attribute=le,le&&le.data&&(F.data=le.data),fe[H]=F,oe++}u.attributes=fe,u.attributesNum=oe,u.index=ee}function A(){const R=u.newAttributes;for(let B=0,ae=R.length;B<ae;B++)R[B]=0}function v(R){_(R,0)}function _(R,B){const ae=u.newAttributes,ee=u.enabledAttributes,fe=u.attributeDivisors;ae[R]=1,ee[R]===0&&(s.enableVertexAttribArray(R),ee[R]=1),fe[R]!==B&&(s.vertexAttribDivisor(R,B),fe[R]=B)}function I(){const R=u.newAttributes,B=u.enabledAttributes;for(let ae=0,ee=B.length;ae<ee;ae++)B[ae]!==R[ae]&&(s.disableVertexAttribArray(ae),B[ae]=0)}function P(R,B,ae,ee,fe,de,oe){oe===!0?s.vertexAttribIPointer(R,B,ae,fe,de):s.vertexAttribPointer(R,B,ae,ee,fe,de)}function D(R,B,ae,ee){A();const fe=ee.attributes,de=ae.getAttributes(),oe=B.defaultAttributeValues;for(const ue in de){const H=de[ue];if(H.location>=0){let he=fe[ue];if(he===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),he!==void 0){const le=he.normalized,F=he.itemSize,se=e.get(he);if(se===void 0)continue;const De=se.buffer,K=se.type,ce=se.bytesPerElement,xe=K===s.INT||K===s.UNSIGNED_INT||he.gpuType===Of;if(he.isInterleavedBufferAttribute){const Me=he.data,Le=Me.stride,Fe=he.offset;if(Me.isInstancedInterleavedBuffer){for(let je=0;je<H.locationSize;je++)_(H.location+je,Me.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let je=0;je<H.locationSize;je++)v(H.location+je);s.bindBuffer(s.ARRAY_BUFFER,De);for(let je=0;je<H.locationSize;je++)P(H.location+je,F/H.locationSize,K,le,Le*ce,(Fe+F/H.locationSize*je)*ce,xe)}else{if(he.isInstancedBufferAttribute){for(let Me=0;Me<H.locationSize;Me++)_(H.location+Me,he.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Me=0;Me<H.locationSize;Me++)v(H.location+Me);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Me=0;Me<H.locationSize;Me++)P(H.location+Me,F/H.locationSize,K,le,F*ce,F/H.locationSize*Me*ce,xe)}}else if(oe!==void 0){const le=oe[ue];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(H.location,le);break;case 3:s.vertexAttrib3fv(H.location,le);break;case 4:s.vertexAttrib4fv(H.location,le);break;default:s.vertexAttrib1fv(H.location,le)}}}}I()}function j(){X();for(const R in r){const B=r[R];for(const ae in B){const ee=B[ae];for(const fe in ee)g(ee[fe].object),delete ee[fe];delete B[ae]}delete r[R]}}function z(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const ae in B){const ee=B[ae];for(const fe in ee)g(ee[fe].object),delete ee[fe];delete B[ae]}delete r[R.id]}function N(R){for(const B in r){const ae=r[B];if(ae[R.id]===void 0)continue;const ee=ae[R.id];for(const fe in ee)g(ee[fe].object),delete ee[fe];delete ae[R.id]}}function X(){L(),d=!0,u!==a&&(u=a,m(u.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:L,dispose:j,releaseStatesOfGeometry:z,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:v,disableUnusedAttributes:I}}function rS(s,e,n){let r;function a(m){r=m}function u(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function d(m,g,y){y!==0&&(s.drawArraysInstanced(r,m,g,y),n.update(g,r,y))}function f(m,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,y);let S=0;for(let T=0;T<y;T++)S+=g[T];n.update(S,r,1)}function p(m,g,y,x){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)d(m[T],g[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,y);let T=0;for(let A=0;A<y;A++)T+=g[A];for(let A=0;A<x.length;A++)n.update(T,r,x[A])}}this.setMode=a,this.render=u,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function sS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(z){return!(z!==ai&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const N=z===Oo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Fi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ui&&!N)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const y=n.logarithmicDepthBuffer===!0,x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),A=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=S>0,j=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,maxTextures:x,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:A,maxAttributes:v,maxVertexUniforms:_,maxVaryings:I,maxFragmentUniforms:P,vertexTextures:D,maxSamples:j}}function oS(s){const e=this;let n=null,r=0,a=!1,u=!1;const d=new pr,f=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const S=y.length!==0||x||r!==0||a;return a=x,r=y.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){n=g(y,x,0)},this.setState=function(y,x,S){const T=y.clippingPlanes,A=y.clipIntersection,v=y.clipShadows,_=s.get(y);if(!a||T===null||T.length===0||u&&!v)u?g(null):m();else{const I=u?0:r,P=I*4;let D=_.clippingState||null;p.value=D,D=g(T,x,P,S);for(let j=0;j!==P;++j)D[j]=n[j];_.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,x,S,T){const A=y!==null?y.length:0;let v=null;if(A!==0){if(v=p.value,T!==!0||v===null){const _=S+A*4,I=x.matrixWorldInverse;f.getNormalMatrix(I),(v===null||v.length<_)&&(v=new Float32Array(_));for(let P=0,D=S;P!==A;++P,D+=4)d.copy(y[P]).applyMatrix4(I,f),d.normal.toArray(v,D),v[D+3]=d.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}function aS(s){let e=new WeakMap;function n(d,f){return f===Jc?d.mapping=Gs:f===ef&&(d.mapping=Ws),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Jc||f===ef)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new v0(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class lS extends Zm{constructor(e=-1,n=1,r=1,a=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,d=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,jp=[.125,.215,.35,.446,.526,.582],Vr=20,Hc=new lS,qp=new yt;let Vc=null,Gc=0,Wc=0,Xc=!1;const Br=(1+Math.sqrt(5))/2,Os=1/Br,$p=[new Z(-Br,Os,0),new Z(Br,Os,0),new Z(-Os,0,Br),new Z(Os,0,Br),new Z(0,Br,-Os),new Z(0,Br,Os),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class Kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:Oo,format:ai,colorSpace:xr,depthBuffer:!1},a=Zp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uS(u)),this._blurMaterial=cS(u,e,n)}return a}_compileMaterial(e){const n=new Ni(this._lodPlanes[0],e);this._renderer.compile(n,Hc)}_sceneToCubeUV(e,n,r,a){const f=new qn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(qp),g.toneMapping=_r,g.autoClear=!1;const S=new jm({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),T=new Ni(new Ho,S);let A=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,A=!0):(S.color.copy(qp),A=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(f.up.set(0,p[_],0),f.lookAt(m[_],0,0)):I===1?(f.up.set(0,0,p[_]),f.lookAt(0,m[_],0)):(f.up.set(0,p[_],0),f.lookAt(0,0,m[_]));const P=this._cubeSize;pl(a,I*P,_>2?P:0,P,P),g.setRenderTarget(a),A&&g.render(T,f),g.render(e,f)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=x,g.autoClear=y,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Gs||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qp());const u=a?this._cubemapMaterial:this._equirectMaterial,d=new Ni(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=e;const p=this._cubeSize;pl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Hc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=$p[(a-u-1)%$p.length];this._blur(e,u-1,u,d,f)}n.autoClear=r}_blur(e,n,r,a,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",u),this._halfBlur(d,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Ni(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Vr-1),A=u/T,v=isFinite(u)?1+Math.floor(g*A):Vr;v>Vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Vr}`);const _=[];let I=0;for(let N=0;N<Vr;++N){const X=N/A,L=Math.exp(-X*X/2);_.push(L),N===0?I+=L:N<v&&(I+=2*L)}for(let N=0;N<_.length;N++)_[N]=_[N]/I;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=_,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:P}=this;x.dTheta.value=T,x.mipInt.value=P-r;const D=this._sizeLods[a],j=3*D*(a>P-zs?a-P+zs:0),z=4*(this._cubeSize-D);pl(n,j,z,3*D,2*D),p.setRenderTarget(n),p.render(y,Hc)}}function uS(s){const e=[],n=[],r=[];let a=s;const u=s-zs+1+jp.length;for(let d=0;d<u;d++){const f=Math.pow(2,a);n.push(f);let p=1/f;d>s-zs?p=jp[d-s+zs-1]:d===0&&(p=0),r.push(p);const m=1/(f-2),g=-m,y=1+m,x=[g,g,y,g,y,y,g,g,y,y,g,y],S=6,T=6,A=3,v=2,_=1,I=new Float32Array(A*T*S),P=new Float32Array(v*T*S),D=new Float32Array(_*T*S);for(let z=0;z<S;z++){const N=z%3*2/3-1,X=z>2?0:-1,L=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];I.set(L,A*T*z),P.set(x,v*T*z);const R=[z,z,z,z,z,z];D.set(R,_*T*z)}const j=new zi;j.setAttribute("position",new Bn(I,A)),j.setAttribute("uv",new Bn(P,v)),j.setAttribute("faceIndex",new Bn(D,_)),e.push(j),a>zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Zp(s,e,n){const r=new jr(s,e,n);return r.texture.mapping=Ul,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function cS(s,e,n){const r=new Float32Array(Vr),a=new Z(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Qp(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Jp(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===Jc||p===ef,g=p===Gs||p===Ws;if(m||g){let y=e.get(f);const x=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new Kp(s)),y=m?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&a(S)?(n===null&&(n=new Kp(s)),y=m?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",u),y.texture):null}}}return f}function a(f){let p=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&p++;return p===m}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function dS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Gm("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function hS(s,e,n,r){const a={},u=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const A=x.morphAttributes[T];for(let v=0,_=A.length;v<_;v++)e.remove(A[v])}x.removeEventListener("dispose",d),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(y,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function p(y){const x=y.attributes;for(const T in x)e.update(x[T],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const T in S){const A=S[T];for(let v=0,_=A.length;v<_;v++)e.update(A[v],s.ARRAY_BUFFER)}}function m(y){const x=[],S=y.index,T=y.attributes.position;let A=0;if(S!==null){const I=S.array;A=S.version;for(let P=0,D=I.length;P<D;P+=3){const j=I[P+0],z=I[P+1],N=I[P+2];x.push(j,z,z,N,N,j)}}else if(T!==void 0){const I=T.array;A=T.version;for(let P=0,D=I.length/3-1;P<D;P+=3){const j=P+0,z=P+1,N=P+2;x.push(j,z,z,N,N,j)}}else return;const v=new(Vm(x)?$m:qm)(x,1);v.version=A;const _=u.get(y);_&&e.remove(_),u.set(y,v)}function g(y){const x=u.get(y);if(x){const S=y.index;S!==null&&x.version<S.version&&m(y)}else m(y);return u.get(y)}return{get:f,update:p,getWireframeAttribute:g}}function pS(s,e,n){let r;function a(x){r=x}let u,d;function f(x){u=x.type,d=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*d),n.update(S,r,1)}function m(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,u,x*d,T),n.update(S,r,T))}function g(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,T);let v=0;for(let _=0;_<T;_++)v+=S[_];n.update(v,r,1)}function y(x,S,T,A){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<x.length;_++)m(x[_]/d,S[_],A[_]);else{v.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,A,0,T);let _=0;for(let I=0;I<T;I++)_+=S[I];for(let I=0;I<A.length;I++)n.update(_,r,A[I])}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function mS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(u/3);break;case s.LINES:n.lines+=f*(u/2);break;case s.LINE_STRIP:n.lines+=f*(u-1);break;case s.LINE_LOOP:n.lines+=f*u;break;case s.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function gS(s,e,n){const r=new WeakMap,a=new on;function u(d,f,p){const m=d.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==y){let R=function(){X.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),v===!0&&(D=3);let j=f.attributes.position.count*D,z=1;j>e.maxTextureSize&&(z=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const N=new Float32Array(j*z*4*y),X=new Xm(N,j,z,y);X.type=Ui,X.needsUpdate=!0;const L=D*4;for(let B=0;B<y;B++){const ae=_[B],ee=I[B],fe=P[B],de=j*z*4*B;for(let oe=0;oe<ae.count;oe++){const ue=oe*L;T===!0&&(a.fromBufferAttribute(ae,oe),N[de+ue+0]=a.x,N[de+ue+1]=a.y,N[de+ue+2]=a.z,N[de+ue+3]=0),A===!0&&(a.fromBufferAttribute(ee,oe),N[de+ue+4]=a.x,N[de+ue+5]=a.y,N[de+ue+6]=a.z,N[de+ue+7]=0),v===!0&&(a.fromBufferAttribute(fe,oe),N[de+ue+8]=a.x,N[de+ue+9]=a.y,N[de+ue+10]=a.z,N[de+ue+11]=fe.itemSize===4?a.w:1)}}x={count:y,texture:X,size:new at(j,z)},r.set(f,x),f.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let T=0;for(let v=0;v<m.length;v++)T+=m[v];const A=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function _S(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,y=e.get(p,g);if(a.get(y)!==m&&(e.update(y),a.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return y}function d(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:d}}class tg extends Ln{constructor(e,n,r,a,u,d,f,p,m,g=Hs){if(g!==Hs&&g!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Hs&&(r=Yr),r===void 0&&g===Ys&&(r=Xs),super(null,a,u,d,f,p,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:$n,this.minFilter=p!==void 0?p:$n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ng=new Ln,em=new tg(1,1),ig=new Xm,rg=new n0,sg=new Qm,tm=[],nm=[],im=new Float32Array(16),rm=new Float32Array(9),sm=new Float32Array(4);function qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=tm[a];if(u===void 0&&(u=new Float32Array(a),tm[a]=u),e!==0){r.toArray(u,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(u,f)}return u}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function kl(s,e){let n=nm[e];n===void 0&&(n=new Int32Array(e),nm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function vS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function xS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function yS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function SS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function MS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;sm.set(r),s.uniformMatrix2fv(this.addr,!1,sm),Qt(n,r)}}function ES(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;rm.set(r),s.uniformMatrix3fv(this.addr,!1,rm),Qt(n,r)}}function TS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;im.set(r),s.uniformMatrix4fv(this.addr,!1,im),Qt(n,r)}}function wS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function AS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function PS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function LS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function bS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function DS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function US(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(em.compareFunction=Hm,u=em):u=ng,n.setTexture2D(e||u,a)}function IS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||rg,a)}function NS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||sg,a)}function FS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ig,a)}function OS(s){switch(s){case 5126:return vS;case 35664:return xS;case 35665:return yS;case 35666:return SS;case 35674:return MS;case 35675:return ES;case 35676:return TS;case 5124:case 35670:return wS;case 35667:case 35671:return AS;case 35668:case 35672:return CS;case 35669:case 35673:return RS;case 5125:return PS;case 36294:return LS;case 36295:return bS;case 36296:return DS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return FS}}function kS(s,e){s.uniform1fv(this.addr,e)}function zS(s,e){const n=qs(e,this.size,2);s.uniform2fv(this.addr,n)}function BS(s,e){const n=qs(e,this.size,3);s.uniform3fv(this.addr,n)}function HS(s,e){const n=qs(e,this.size,4);s.uniform4fv(this.addr,n)}function VS(s,e){const n=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function GS(s,e){const n=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function WS(s,e){const n=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function XS(s,e){s.uniform1iv(this.addr,e)}function YS(s,e){s.uniform2iv(this.addr,e)}function jS(s,e){s.uniform3iv(this.addr,e)}function qS(s,e){s.uniform4iv(this.addr,e)}function $S(s,e){s.uniform1uiv(this.addr,e)}function KS(s,e){s.uniform2uiv(this.addr,e)}function ZS(s,e){s.uniform3uiv(this.addr,e)}function QS(s,e){s.uniform4uiv(this.addr,e)}function JS(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||ng,u[d])}function eM(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||rg,u[d])}function tM(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||sg,u[d])}function nM(s,e,n){const r=this.cache,a=e.length,u=kl(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||ig,u[d])}function iM(s){switch(s){case 5126:return kS;case 35664:return zS;case 35665:return BS;case 35666:return HS;case 35674:return VS;case 35675:return GS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return YS;case 35668:case 35672:return jS;case 35669:case 35673:return qS;case 5125:return $S;case 36294:return KS;case 36295:return ZS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}class rM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=OS(n.type)}}class sM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iM(n.type)}}class oM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,d=a.length;u!==d;++u){const f=a[u];f.setValue(e,n[f.id],r)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function om(s,e){s.seq.push(e),s.map[e.id]=e}function aM(s,e,n){const r=s.name,a=r.length;for(Yc.lastIndex=0;;){const u=Yc.exec(r),d=Yc.lastIndex;let f=u[1];const p=u[2]==="]",m=u[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===a){om(n,m===void 0?new rM(f,s,e):new sM(f,s,e));break}else{let y=n.map[f];y===void 0&&(y=new oM(f),om(n,y)),n=y}}}class wl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),d=e.getUniformLocation(n,u.name);aM(u,d,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,d=n.length;u!==d;++u){const f=n[u],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function am(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const lM=37297;let uM=0;function cM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let d=a;d<u;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}function fM(s){const e=Tt.getPrimaries(Tt.workingColorSpace),n=Tt.getPrimaries(s);let r;switch(e===n?r="":e===Pl&&n===Rl?r="LinearDisplayP3ToLinearSRGB":e===Rl&&n===Pl&&(r="LinearSRGBToLinearDisplayP3"),s){case xr:case Il:return[r,"LinearTransferOETF"];case di:case Gf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function lm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+cM(s.getShaderSource(e),d)}else return a}function dM(s,e){const n=fM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function hM(s,e){let n;switch(e){case Rv:n="Linear";break;case Pv:n="Reinhard";break;case Lv:n="OptimizedCineon";break;case bv:n="ACESFilmic";break;case Uv:n="AgX";break;case Iv:n="Neutral";break;case Dv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function pM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function mM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function gM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),d=u.name;let f=1;u.type===s.FLOAT_MAT2&&(f=2),u.type===s.FLOAT_MAT3&&(f=3),u.type===s.FLOAT_MAT4&&(f=4),n[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function No(s){return s!==""}function um(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _M=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(s){return s.replace(_M,xM)}const vM=new Map;function xM(s,e){let n=ut[e];if(n===void 0){const r=vM.get(e);if(r!==void 0)n=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bf(n)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(s){return s.replace(yM,SM)}function SM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function dm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ev?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function EM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function wM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pm:e="ENVMAP_BLENDING_MULTIPLY";break;case Av:e="ENVMAP_BLENDING_MIX";break;case Cv:e="ENVMAP_BLENDING_ADD";break}return e}function AM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function CM(s,e,n,r){const a=s.getContext(),u=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=MM(n),m=EM(n),g=TM(n),y=wM(n),x=AM(n),S=pM(n),T=mM(u),A=a.createProgram();let v,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(No).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(No).join(`
`),_.length>0&&(_+=`
`)):(v=[dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),_=[dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?ut.tonemapping_pars_fragment:"",n.toneMapping!==_r?hM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,dM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),d=bf(d),d=um(d,n),d=cm(d,n),f=bf(f),f=um(f,n),f=cm(f,n),d=fm(d),f=fm(f),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",n.glslVersion===Cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=I+v+d,D=I+_+f,j=am(a,a.VERTEX_SHADER,P),z=am(a,a.FRAGMENT_SHADER,D);a.attachShader(A,j),a.attachShader(A,z),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function N(B){if(s.debug.checkShaderErrors){const ae=a.getProgramInfoLog(A).trim(),ee=a.getShaderInfoLog(j).trim(),fe=a.getShaderInfoLog(z).trim();let de=!0,oe=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,j,z);else{const ue=lm(a,j,"vertex"),H=lm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ae+`
`+ue+`
`+H)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(ee===""||fe==="")&&(oe=!1);oe&&(B.diagnostics={runnable:de,programLog:ae,vertexShader:{log:ee,prefix:v},fragmentShader:{log:fe,prefix:_}})}a.deleteShader(j),a.deleteShader(z),X=new wl(a,A),L=gM(a,A)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let L;this.getAttributes=function(){return L===void 0&&N(this),L};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,lM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=j,this.fragmentShader=z,this}let RM=0;class PM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new LM(e),n.set(e,r)),r}}class LM{constructor(e){this.id=RM++,this.code=e,this.usedTimes=0}}function bM(s,e,n,r,a,u,d){const f=new Wf,p=new PM,m=new Set,g=[],y=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(L){return m.add(L),L===0?"uv":`uv${L}`}function v(L,R,B,ae,ee){const fe=ae.fog,de=ee.geometry,oe=L.isMeshStandardMaterial?ae.environment:null,ue=(L.isMeshStandardMaterial?n:e).get(L.envMap||oe),H=ue&&ue.mapping===Ul?ue.image.height:null,he=T[L.type];L.precision!==null&&(S=a.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const le=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,F=le!==void 0?le.length:0;let se=0;de.morphAttributes.position!==void 0&&(se=1),de.morphAttributes.normal!==void 0&&(se=2),de.morphAttributes.color!==void 0&&(se=3);let De,K,ce,xe;if(he){const pt=hi[he];De=pt.vertexShader,K=pt.fragmentShader}else De=L.vertexShader,K=L.fragmentShader,p.update(L),ce=p.getVertexShaderID(L),xe=p.getFragmentShaderID(L);const Me=s.getRenderTarget(),Le=ee.isInstancedMesh===!0,Fe=ee.isBatchedMesh===!0,je=!!L.map,St=!!L.matcap,O=!!ue,At=!!L.aoMap,ht=!!L.lightMap,gt=!!L.bumpMap,Ve=!!L.normalMap,Ct=!!L.displacementMap,nt=!!L.emissiveMap,it=!!L.metalnessMap,U=!!L.roughnessMap,w=L.anisotropy>0,ie=L.clearcoat>0,ve=L.dispersion>0,ye=L.iridescence>0,pe=L.sheen>0,Ye=L.transmission>0,Ce=w&&!!L.anisotropyMap,be=ie&&!!L.clearcoatMap,ot=ie&&!!L.clearcoatNormalMap,Ee=ie&&!!L.clearcoatRoughnessMap,Pe=ye&&!!L.iridescenceMap,ft=ye&&!!L.iridescenceThicknessMap,Ze=pe&&!!L.sheenColorMap,Ne=pe&&!!L.sheenRoughnessMap,rt=!!L.specularMap,Je=!!L.specularColorMap,wt=!!L.specularIntensityMap,M=Ye&&!!L.transmissionMap,q=Ye&&!!L.thicknessMap,Q=!!L.gradientMap,re=!!L.alphaMap,ge=L.alphaTest>0,Ge=!!L.alphaHash,et=!!L.extensions;let It=_r;L.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(It=s.toneMapping);const Vt={shaderID:he,shaderType:L.type,shaderName:L.name,vertexShader:De,fragmentShader:K,defines:L.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:Fe,batchingColor:Fe&&ee._colorsTexture!==null,instancing:Le,instancingColor:Le&&ee.instanceColor!==null,instancingMorph:Le&&ee.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:xr,alphaToCoverage:!!L.alphaToCoverage,map:je,matcap:St,envMap:O,envMapMode:O&&ue.mapping,envMapCubeUVHeight:H,aoMap:At,lightMap:ht,bumpMap:gt,normalMap:Ve,displacementMap:x&&Ct,emissiveMap:nt,normalMapObjectSpace:Ve&&L.normalMapType===zv,normalMapTangentSpace:Ve&&L.normalMapType===kv,metalnessMap:it,roughnessMap:U,anisotropy:w,anisotropyMap:Ce,clearcoat:ie,clearcoatMap:be,clearcoatNormalMap:ot,clearcoatRoughnessMap:Ee,dispersion:ve,iridescence:ye,iridescenceMap:Pe,iridescenceThicknessMap:ft,sheen:pe,sheenColorMap:Ze,sheenRoughnessMap:Ne,specularMap:rt,specularColorMap:Je,specularIntensityMap:wt,transmission:Ye,transmissionMap:M,thicknessMap:q,gradientMap:Q,opaque:L.transparent===!1&&L.blending===Bs&&L.alphaToCoverage===!1,alphaMap:re,alphaTest:ge,alphaHash:Ge,combine:L.combine,mapUv:je&&A(L.map.channel),aoMapUv:At&&A(L.aoMap.channel),lightMapUv:ht&&A(L.lightMap.channel),bumpMapUv:gt&&A(L.bumpMap.channel),normalMapUv:Ve&&A(L.normalMap.channel),displacementMapUv:Ct&&A(L.displacementMap.channel),emissiveMapUv:nt&&A(L.emissiveMap.channel),metalnessMapUv:it&&A(L.metalnessMap.channel),roughnessMapUv:U&&A(L.roughnessMap.channel),anisotropyMapUv:Ce&&A(L.anisotropyMap.channel),clearcoatMapUv:be&&A(L.clearcoatMap.channel),clearcoatNormalMapUv:ot&&A(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&A(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&A(L.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&A(L.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&A(L.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&A(L.sheenRoughnessMap.channel),specularMapUv:rt&&A(L.specularMap.channel),specularColorMapUv:Je&&A(L.specularColorMap.channel),specularIntensityMapUv:wt&&A(L.specularIntensityMap.channel),transmissionMapUv:M&&A(L.transmissionMap.channel),thicknessMapUv:q&&A(L.thicknessMap.channel),alphaMapUv:re&&A(L.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Ve||w),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!de.attributes.uv&&(je||re),fog:!!fe,useFog:L.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:ee.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:je&&L.map.isVideoTexture===!0&&Tt.getTransfer(L.map.colorSpace)===Ut,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Di,flipSided:L.side===Pn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:et&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&L.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Vt.vertexUv1s=m.has(1),Vt.vertexUv2s=m.has(2),Vt.vertexUv3s=m.has(3),m.clear(),Vt}function _(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const B in L.defines)R.push(B),R.push(L.defines[B]);return L.isRawShaderMaterial===!1&&(I(R,L),P(R,L),R.push(s.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function I(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function P(L,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),L.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.skinning&&f.enable(4),R.morphTargets&&f.enable(5),R.morphNormals&&f.enable(6),R.morphColors&&f.enable(7),R.premultipliedAlpha&&f.enable(8),R.shadowMapEnabled&&f.enable(9),R.doubleSided&&f.enable(10),R.flipSided&&f.enable(11),R.useDepthPacking&&f.enable(12),R.dithering&&f.enable(13),R.transmission&&f.enable(14),R.sheen&&f.enable(15),R.opaque&&f.enable(16),R.pointsUvs&&f.enable(17),R.decodeVideoTexture&&f.enable(18),R.alphaToCoverage&&f.enable(19),L.push(f.mask)}function D(L){const R=T[L.type];let B;if(R){const ae=hi[R];B=p0.clone(ae.uniforms)}else B=L.uniforms;return B}function j(L,R){let B;for(let ae=0,ee=g.length;ae<ee;ae++){const fe=g[ae];if(fe.cacheKey===R){B=fe,++B.usedTimes;break}}return B===void 0&&(B=new CM(s,R,L,u),g.push(B)),B}function z(L){if(--L.usedTimes===0){const R=g.indexOf(L);g[R]=g[g.length-1],g.pop(),L.destroy()}}function N(L){p.remove(L)}function X(){p.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:D,acquireProgram:j,releaseProgram:z,releaseShaderCache:N,programs:g,dispose:X}}function DM(){let s=new WeakMap;function e(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function n(u){s.delete(u)}function r(u,d,f){s.get(u)[d]=f}function a(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function UM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function d(y,x,S,T,A,v){let _=s[e];return _===void 0?(_={id:y.id,object:y,geometry:x,material:S,groupOrder:T,renderOrder:y.renderOrder,z:A,group:v},s[e]=_):(_.id=y.id,_.object=y,_.geometry=x,_.material=S,_.groupOrder=T,_.renderOrder=y.renderOrder,_.z=A,_.group=v),e++,_}function f(y,x,S,T,A,v){const _=d(y,x,S,T,A,v);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function p(y,x,S,T,A,v){const _=d(y,x,S,T,A,v);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function m(y,x){n.length>1&&n.sort(y||UM),r.length>1&&r.sort(x||hm),a.length>1&&a.sort(x||hm)}function g(){for(let y=e,x=s.length;y<x;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:f,unshift:p,finish:g,sort:m}}function IM(){let s=new WeakMap;function e(r,a){const u=s.get(r);let d;return u===void 0?(d=new pm,s.set(r,[d])):a>=u.length?(d=new pm,u.push(d)):d=u[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function NM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new yt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=n,n}}}function FM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let OM=0;function kM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function zM(s){const e=new NM,n=FM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const a=new Z,u=new Yt,d=new Yt;function f(m){let g=0,y=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,T=0,A=0,v=0,_=0,I=0,P=0,D=0,j=0,z=0,N=0;m.sort(kM);for(let L=0,R=m.length;L<R;L++){const B=m[L],ae=B.color,ee=B.intensity,fe=B.distance,de=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ae.r*ee,y+=ae.g*ee,x+=ae.b*ee;else if(B.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(B.sh.coefficients[oe],ee);N++}else if(B.isDirectionalLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ue=B.shadow,H=n.get(B);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=B.shadow.matrix,I++}r.directional[S]=oe,S++}else if(B.isSpotLight){const oe=e.get(B);oe.position.setFromMatrixPosition(B.matrixWorld),oe.color.copy(ae).multiplyScalar(ee),oe.distance=fe,oe.coneCos=Math.cos(B.angle),oe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),oe.decay=B.decay,r.spot[A]=oe;const ue=B.shadow;if(B.map&&(r.spotLightMap[j]=B.map,j++,ue.updateMatrices(B),B.castShadow&&z++),r.spotLightMatrix[A]=ue.matrix,B.castShadow){const H=n.get(B);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,r.spotShadow[A]=H,r.spotShadowMap[A]=de,D++}A++}else if(B.isRectAreaLight){const oe=e.get(B);oe.color.copy(ae).multiplyScalar(ee),oe.halfWidth.set(B.width*.5,0,0),oe.halfHeight.set(0,B.height*.5,0),r.rectArea[v]=oe,v++}else if(B.isPointLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),oe.distance=B.distance,oe.decay=B.decay,B.castShadow){const ue=B.shadow,H=n.get(B);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,H.shadowCameraNear=ue.camera.near,H.shadowCameraFar=ue.camera.far,r.pointShadow[T]=H,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=B.shadow.matrix,P++}r.point[T]=oe,T++}else if(B.isHemisphereLight){const oe=e.get(B);oe.skyColor.copy(B.color).multiplyScalar(ee),oe.groundColor.copy(B.groundColor).multiplyScalar(ee),r.hemi[_]=oe,_++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==S||X.pointLength!==T||X.spotLength!==A||X.rectAreaLength!==v||X.hemiLength!==_||X.numDirectionalShadows!==I||X.numPointShadows!==P||X.numSpotShadows!==D||X.numSpotMaps!==j||X.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=v,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+j-z,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=N,X.directionalLength=S,X.pointLength=T,X.spotLength=A,X.rectAreaLength=v,X.hemiLength=_,X.numDirectionalShadows=I,X.numPointShadows=P,X.numSpotShadows=D,X.numSpotMaps=j,X.numLightProbes=N,r.version=OM++)}function p(m,g){let y=0,x=0,S=0,T=0,A=0;const v=g.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const P=m[_];if(P.isDirectionalLight){const D=r.directional[y];D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(v),y++}else if(P.isSpotLight){const D=r.spot[S];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(v),D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(v),S++}else if(P.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(v),d.identity(),u.copy(P.matrixWorld),u.premultiply(v),d.extractRotation(u),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),T++}else if(P.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(v),x++}else if(P.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(v),A++}}}return{setup:f,setupView:p,state:r}}function mm(s){const e=new zM(s),n=[],r=[];function a(g){m.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function d(g){r.push(g)}function f(){e.setup(n)}function p(g){e.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:d}}function BM(s){let e=new WeakMap;function n(a,u=0){const d=e.get(a);let f;return d===void 0?(f=new mm(s),e.set(a,[f])):u>=d.length?(f=new mm(s),d.push(f)):f=d[u],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class HM extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VM extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XM(s,e,n){let r=new Jm;const a=new at,u=new at,d=new on,f=new HM({depthPacking:Ov}),p=new VM,m={},g=n.maxTextureSize,y={[vr]:Pn,[Pn]:vr,[Di]:Di},x=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:GM,fragmentShader:WM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new zi;T.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ni(T,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rm;let _=this.type;this.render=function(z,N,X){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||z.length===0)return;const L=s.getRenderTarget(),R=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(gr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ee=_!==bi&&this.type===bi,fe=_===bi&&this.type!==bi;for(let de=0,oe=z.length;de<oe;de++){const ue=z[de],H=ue.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const he=H.getFrameExtents();if(a.multiply(he),u.copy(H.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(u.x=Math.floor(g/he.x),a.x=u.x*he.x,H.mapSize.x=u.x),a.y>g&&(u.y=Math.floor(g/he.y),a.y=u.y*he.y,H.mapSize.y=u.y)),H.map===null||ee===!0||fe===!0){const F=this.type!==bi?{minFilter:$n,magFilter:$n}:{};H.map!==null&&H.map.dispose(),H.map=new jr(a.x,a.y,F),H.map.texture.name=ue.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const le=H.getViewportCount();for(let F=0;F<le;F++){const se=H.getViewport(F);d.set(u.x*se.x,u.y*se.y,u.x*se.z,u.y*se.w),ae.viewport(d),H.updateMatrices(ue,F),r=H.getFrustum(),D(N,X,H.camera,ue,this.type)}H.isPointLightShadow!==!0&&this.type===bi&&I(H,X),H.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(L,R,B)};function I(z,N){const X=e.update(A);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new jr(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(N,null,X,x,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(N,null,X,S,A,null)}function P(z,N,X,L){let R=null;const B=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(B!==void 0)R=B;else if(R=X.isPointLight===!0?p:f,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ae=R.uuid,ee=N.uuid;let fe=m[ae];fe===void 0&&(fe={},m[ae]=fe);let de=fe[ee];de===void 0&&(de=R.clone(),fe[ee]=de,N.addEventListener("dispose",j)),R=de}if(R.visible=N.visible,R.wireframe=N.wireframe,L===bi?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:y[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=s.properties.get(R);ae.light=X}return R}function D(z,N,X,L,R){if(z.visible===!1)return;if(z.layers.test(N.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===bi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const ee=e.update(z),fe=z.material;if(Array.isArray(fe)){const de=ee.groups;for(let oe=0,ue=de.length;oe<ue;oe++){const H=de[oe],he=fe[H.materialIndex];if(he&&he.visible){const le=P(z,he,L,R);z.onBeforeShadow(s,z,N,X,ee,le,H),s.renderBufferDirect(X,null,ee,le,z,H),z.onAfterShadow(s,z,N,X,ee,le,H)}}}else if(fe.visible){const de=P(z,fe,L,R);z.onBeforeShadow(s,z,N,X,ee,de,null),s.renderBufferDirect(X,null,ee,de,z,null),z.onAfterShadow(s,z,N,X,ee,de,null)}}const ae=z.children;for(let ee=0,fe=ae.length;ee<fe;ee++)D(ae[ee],N,X,L,R)}function j(z){z.target.removeEventListener("dispose",j);for(const X in m){const L=m[X],R=z.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function YM(s){function e(){let M=!1;const q=new on;let Q=null;const re=new on(0,0,0,0);return{setMask:function(ge){Q!==ge&&!M&&(s.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){M=ge},setClear:function(ge,Ge,et,It,Vt){Vt===!0&&(ge*=It,Ge*=It,et*=It),q.set(ge,Ge,et,It),re.equals(q)===!1&&(s.clearColor(ge,Ge,et,It),re.copy(q))},reset:function(){M=!1,Q=null,re.set(-1,0,0,0)}}}function n(){let M=!1,q=null,Q=null,re=null;return{setTest:function(ge){ge?xe(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(ge){q!==ge&&!M&&(s.depthMask(ge),q=ge)},setFunc:function(ge){if(Q!==ge){switch(ge){case xv:s.depthFunc(s.NEVER);break;case yv:s.depthFunc(s.ALWAYS);break;case Sv:s.depthFunc(s.LESS);break;case Al:s.depthFunc(s.LEQUAL);break;case Mv:s.depthFunc(s.EQUAL);break;case Ev:s.depthFunc(s.GEQUAL);break;case Tv:s.depthFunc(s.GREATER);break;case wv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ge}},setLocked:function(ge){M=ge},setClear:function(ge){re!==ge&&(s.clearDepth(ge),re=ge)},reset:function(){M=!1,q=null,Q=null,re=null}}}function r(){let M=!1,q=null,Q=null,re=null,ge=null,Ge=null,et=null,It=null,Vt=null;return{setTest:function(pt){M||(pt?xe(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(pt){q!==pt&&!M&&(s.stencilMask(pt),q=pt)},setFunc:function(pt,kt,zt){(Q!==pt||re!==kt||ge!==zt)&&(s.stencilFunc(pt,kt,zt),Q=pt,re=kt,ge=zt)},setOp:function(pt,kt,zt){(Ge!==pt||et!==kt||It!==zt)&&(s.stencilOp(pt,kt,zt),Ge=pt,et=kt,It=zt)},setLocked:function(pt){M=pt},setClear:function(pt){Vt!==pt&&(s.clearStencil(pt),Vt=pt)},reset:function(){M=!1,q=null,Q=null,re=null,ge=null,Ge=null,et=null,It=null,Vt=null}}}const a=new e,u=new n,d=new r,f=new WeakMap,p=new WeakMap;let m={},g={},y=new WeakMap,x=[],S=null,T=!1,A=null,v=null,_=null,I=null,P=null,D=null,j=null,z=new yt(0,0,0),N=0,X=!1,L=null,R=null,B=null,ae=null,ee=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,oe=0;const ue=s.getParameter(s.VERSION);ue.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ue)[1]),de=oe>=1):ue.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),de=oe>=2);let H=null,he={};const le=s.getParameter(s.SCISSOR_BOX),F=s.getParameter(s.VIEWPORT),se=new on().fromArray(le),De=new on().fromArray(F);function K(M,q,Q,re){const ge=new Uint8Array(4),Ge=s.createTexture();s.bindTexture(M,Ge),s.texParameteri(M,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(M,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<Q;et++)M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY?s.texImage3D(q,0,s.RGBA,1,1,re,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(q+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return Ge}const ce={};ce[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),u.setFunc(Al),gt(!1),Ve(Mp),xe(s.CULL_FACE),At(gr);function xe(M){m[M]!==!0&&(s.enable(M),m[M]=!0)}function Me(M){m[M]!==!1&&(s.disable(M),m[M]=!1)}function Le(M,q){return g[M]!==q?(s.bindFramebuffer(M,q),g[M]=q,M===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=q),M===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=q),!0):!1}function Fe(M,q){let Q=x,re=!1;if(M){Q=y.get(q),Q===void 0&&(Q=[],y.set(q,Q));const ge=M.textures;if(Q.length!==ge.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let Ge=0,et=ge.length;Ge<et;Ge++)Q[Ge]=s.COLOR_ATTACHMENT0+Ge;Q.length=ge.length,re=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,re=!0);re&&s.drawBuffers(Q)}function je(M){return S!==M?(s.useProgram(M),S=M,!0):!1}const St={[Hr]:s.FUNC_ADD,[nv]:s.FUNC_SUBTRACT,[iv]:s.FUNC_REVERSE_SUBTRACT};St[rv]=s.MIN,St[sv]=s.MAX;const O={[ov]:s.ZERO,[av]:s.ONE,[lv]:s.SRC_COLOR,[Zc]:s.SRC_ALPHA,[pv]:s.SRC_ALPHA_SATURATE,[dv]:s.DST_COLOR,[cv]:s.DST_ALPHA,[uv]:s.ONE_MINUS_SRC_COLOR,[Qc]:s.ONE_MINUS_SRC_ALPHA,[hv]:s.ONE_MINUS_DST_COLOR,[fv]:s.ONE_MINUS_DST_ALPHA,[mv]:s.CONSTANT_COLOR,[gv]:s.ONE_MINUS_CONSTANT_COLOR,[_v]:s.CONSTANT_ALPHA,[vv]:s.ONE_MINUS_CONSTANT_ALPHA};function At(M,q,Q,re,ge,Ge,et,It,Vt,pt){if(M===gr){T===!0&&(Me(s.BLEND),T=!1);return}if(T===!1&&(xe(s.BLEND),T=!0),M!==tv){if(M!==A||pt!==X){if((v!==Hr||P!==Hr)&&(s.blendEquation(s.FUNC_ADD),v=Hr,P=Hr),pt)switch(M){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kc:s.blendFunc(s.ONE,s.ONE);break;case Ep:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ep:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}_=null,I=null,D=null,j=null,z.set(0,0,0),N=0,A=M,X=pt}return}ge=ge||q,Ge=Ge||Q,et=et||re,(q!==v||ge!==P)&&(s.blendEquationSeparate(St[q],St[ge]),v=q,P=ge),(Q!==_||re!==I||Ge!==D||et!==j)&&(s.blendFuncSeparate(O[Q],O[re],O[Ge],O[et]),_=Q,I=re,D=Ge,j=et),(It.equals(z)===!1||Vt!==N)&&(s.blendColor(It.r,It.g,It.b,Vt),z.copy(It),N=Vt),A=M,X=!1}function ht(M,q){M.side===Di?Me(s.CULL_FACE):xe(s.CULL_FACE);let Q=M.side===Pn;q&&(Q=!Q),gt(Q),M.blending===Bs&&M.transparent===!1?At(gr):At(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),u.setFunc(M.depthFunc),u.setTest(M.depthTest),u.setMask(M.depthWrite),a.setMask(M.colorWrite);const re=M.stencilWrite;d.setTest(re),re&&(d.setMask(M.stencilWriteMask),d.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),d.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),nt(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(M){L!==M&&(M?s.frontFace(s.CW):s.frontFace(s.CCW),L=M)}function Ve(M){M!==Q_?(xe(s.CULL_FACE),M!==R&&(M===Mp?s.cullFace(s.BACK):M===J_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),R=M}function Ct(M){M!==B&&(de&&s.lineWidth(M),B=M)}function nt(M,q,Q){M?(xe(s.POLYGON_OFFSET_FILL),(ae!==q||ee!==Q)&&(s.polygonOffset(q,Q),ae=q,ee=Q)):Me(s.POLYGON_OFFSET_FILL)}function it(M){M?xe(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function U(M){M===void 0&&(M=s.TEXTURE0+fe-1),H!==M&&(s.activeTexture(M),H=M)}function w(M,q,Q){Q===void 0&&(H===null?Q=s.TEXTURE0+fe-1:Q=H);let re=he[Q];re===void 0&&(re={type:void 0,texture:void 0},he[Q]=re),(re.type!==M||re.texture!==q)&&(H!==Q&&(s.activeTexture(Q),H=Q),s.bindTexture(M,q||ce[M]),re.type=M,re.texture=q)}function ie(){const M=he[H];M!==void 0&&M.type!==void 0&&(s.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function ve(){try{s.compressedTexImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ye(){try{s.texSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ot(){try{s.texStorage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ft(){try{s.texImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ze(M){se.equals(M)===!1&&(s.scissor(M.x,M.y,M.z,M.w),se.copy(M))}function Ne(M){De.equals(M)===!1&&(s.viewport(M.x,M.y,M.z,M.w),De.copy(M))}function rt(M,q){let Q=p.get(q);Q===void 0&&(Q=new WeakMap,p.set(q,Q));let re=Q.get(M);re===void 0&&(re=s.getUniformBlockIndex(q,M.name),Q.set(M,re))}function Je(M,q){const re=p.get(q).get(M);f.get(q)!==re&&(s.uniformBlockBinding(q,re,M.__bindingPointIndex),f.set(q,re))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},H=null,he={},g={},y=new WeakMap,x=[],S=null,T=!1,A=null,v=null,_=null,I=null,P=null,D=null,j=null,z=new yt(0,0,0),N=0,X=!1,L=null,R=null,B=null,ae=null,ee=null,se.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),a.reset(),u.reset(),d.reset()}return{buffers:{color:a,depth:u,stencil:d},enable:xe,disable:Me,bindFramebuffer:Le,drawBuffers:Fe,useProgram:je,setBlending:At,setMaterial:ht,setFlipSided:gt,setCullFace:Ve,setLineWidth:Ct,setPolygonOffset:nt,setScissorTest:it,activeTexture:U,bindTexture:w,unbindTexture:ie,compressedTexImage2D:ve,compressedTexImage3D:ye,texImage2D:Pe,texImage3D:ft,updateUBOMapping:rt,uniformBlockBinding:Je,texStorage2D:ot,texStorage3D:Ee,texSubImage2D:pe,texSubImage3D:Ye,compressedTexSubImage2D:Ce,compressedTexSubImage3D:be,scissor:Ze,viewport:Ne,reset:wt}}function gm(s,e,n,r){const a=jM(r);switch(n){case Im:return s*e;case Fm:return s*e;case Om:return s*e*2;case km:return s*e/a.components*a.byteLength;case Bf:return s*e/a.components*a.byteLength;case zm:return s*e*2/a.components*a.byteLength;case Hf:return s*e*2/a.components*a.byteLength;case Nm:return s*e*3/a.components*a.byteLength;case ai:return s*e*4/a.components*a.byteLength;case Vf:return s*e*4/a.components*a.byteLength;case xl:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sf:case af:return Math.max(s,16)*Math.max(e,8)/4;case rf:case of:return Math.max(s,8)*Math.max(e,8)/2;case lf:case uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case pf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case mf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case gf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case El:case wf:case Af:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Bm:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Rf:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jM(s){switch(s){case Fi:case bm:return{byteLength:1,components:1};case Fo:case Dm:case Oo:return{byteLength:2,components:1};case kf:case zf:return{byteLength:2,components:4};case Yr:case Of:case Ui:return{byteLength:4,components:1};case Um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function qM(s,e,n,r,a,u,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new at,g=new WeakMap;let y;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,w){return S?new OffscreenCanvas(U,w):bl("canvas")}function A(U,w,ie){let ve=1;const ye=it(U);if((ye.width>ie||ye.height>ie)&&(ve=ie/Math.max(ye.width,ye.height)),ve<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pe=Math.floor(ve*ye.width),Ye=Math.floor(ve*ye.height);y===void 0&&(y=T(pe,Ye));const Ce=w?T(pe,Ye):y;return Ce.width=pe,Ce.height=Ye,Ce.getContext("2d").drawImage(U,0,0,pe,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+pe+"x"+Ye+")."),Ce}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),U;return U}function v(U){return U.generateMipmaps&&U.minFilter!==$n&&U.minFilter!==oi}function _(U){s.generateMipmap(U)}function I(U,w,ie,ve,ye=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pe=w;if(w===s.RED&&(ie===s.FLOAT&&(pe=s.R32F),ie===s.HALF_FLOAT&&(pe=s.R16F),ie===s.UNSIGNED_BYTE&&(pe=s.R8)),w===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(pe=s.R8UI),ie===s.UNSIGNED_SHORT&&(pe=s.R16UI),ie===s.UNSIGNED_INT&&(pe=s.R32UI),ie===s.BYTE&&(pe=s.R8I),ie===s.SHORT&&(pe=s.R16I),ie===s.INT&&(pe=s.R32I)),w===s.RG&&(ie===s.FLOAT&&(pe=s.RG32F),ie===s.HALF_FLOAT&&(pe=s.RG16F),ie===s.UNSIGNED_BYTE&&(pe=s.RG8)),w===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(pe=s.RG8UI),ie===s.UNSIGNED_SHORT&&(pe=s.RG16UI),ie===s.UNSIGNED_INT&&(pe=s.RG32UI),ie===s.BYTE&&(pe=s.RG8I),ie===s.SHORT&&(pe=s.RG16I),ie===s.INT&&(pe=s.RG32I)),w===s.RGB&&ie===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),w===s.RGBA){const Ye=ye?Cl:Tt.getTransfer(ve);ie===s.FLOAT&&(pe=s.RGBA32F),ie===s.HALF_FLOAT&&(pe=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(pe=Ye===Ut?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(U,w){let ie;return U?w===null||w===Yr||w===Xs?ie=s.DEPTH24_STENCIL8:w===Ui?ie=s.DEPTH32F_STENCIL8:w===Fo&&(ie=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Yr||w===Xs?ie=s.DEPTH_COMPONENT24:w===Ui?ie=s.DEPTH_COMPONENT32F:w===Fo&&(ie=s.DEPTH_COMPONENT16),ie}function D(U,w){return v(U)===!0||U.isFramebufferTexture&&U.minFilter!==$n&&U.minFilter!==oi?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function j(U){const w=U.target;w.removeEventListener("dispose",j),N(w),w.isVideoTexture&&g.delete(w)}function z(U){const w=U.target;w.removeEventListener("dispose",z),L(w)}function N(U){const w=r.get(U);if(w.__webglInit===void 0)return;const ie=U.source,ve=x.get(ie);if(ve){const ye=ve[w.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&X(U),Object.keys(ve).length===0&&x.delete(ie)}r.remove(U)}function X(U){const w=r.get(U);s.deleteTexture(w.__webglTexture);const ie=U.source,ve=x.get(ie);delete ve[w.__cacheKey],d.memory.textures--}function L(U){const w=r.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(w.__webglFramebuffer[ve]))for(let ye=0;ye<w.__webglFramebuffer[ve].length;ye++)s.deleteFramebuffer(w.__webglFramebuffer[ve][ye]);else s.deleteFramebuffer(w.__webglFramebuffer[ve]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ve])}else{if(Array.isArray(w.__webglFramebuffer))for(let ve=0;ve<w.__webglFramebuffer.length;ve++)s.deleteFramebuffer(w.__webglFramebuffer[ve]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ve=0;ve<w.__webglColorRenderbuffer.length;ve++)w.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ve]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ie=U.textures;for(let ve=0,ye=ie.length;ve<ye;ve++){const pe=r.get(ie[ve]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),d.memory.textures--),r.remove(ie[ve])}r.remove(U)}let R=0;function B(){R=0}function ae(){const U=R;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),R+=1,U}function ee(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function fe(U,w){const ie=r.get(U);if(U.isVideoTexture&&Ct(U),U.isRenderTargetTexture===!1&&U.version>0&&ie.__version!==U.version){const ve=U.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(ie,U,w);return}}n.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+w)}function de(U,w){const ie=r.get(U);if(U.version>0&&ie.__version!==U.version){De(ie,U,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+w)}function oe(U,w){const ie=r.get(U);if(U.version>0&&ie.__version!==U.version){De(ie,U,w);return}n.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+w)}function ue(U,w){const ie=r.get(U);if(U.version>0&&ie.__version!==U.version){K(ie,U,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+w)}const H={[tf]:s.REPEAT,[Gr]:s.CLAMP_TO_EDGE,[nf]:s.MIRRORED_REPEAT},he={[$n]:s.NEAREST,[Nv]:s.NEAREST_MIPMAP_NEAREST,[ja]:s.NEAREST_MIPMAP_LINEAR,[oi]:s.LINEAR,[Sc]:s.LINEAR_MIPMAP_NEAREST,[Wr]:s.LINEAR_MIPMAP_LINEAR},le={[Bv]:s.NEVER,[Yv]:s.ALWAYS,[Hv]:s.LESS,[Hm]:s.LEQUAL,[Vv]:s.EQUAL,[Xv]:s.GEQUAL,[Gv]:s.GREATER,[Wv]:s.NOTEQUAL};function F(U,w){if(w.type===Ui&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===oi||w.magFilter===Sc||w.magFilter===ja||w.magFilter===Wr||w.minFilter===oi||w.minFilter===Sc||w.minFilter===ja||w.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,H[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,H[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,H[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,he[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,he[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===$n||w.minFilter!==ja&&w.minFilter!==Wr||w.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function se(U,w){let ie=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",j));const ve=w.source;let ye=x.get(ve);ye===void 0&&(ye={},x.set(ve,ye));const pe=ee(w);if(pe!==U.__cacheKey){ye[pe]===void 0&&(ye[pe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),ye[pe].usedTimes++;const Ye=ye[U.__cacheKey];Ye!==void 0&&(ye[U.__cacheKey].usedTimes--,Ye.usedTimes===0&&X(w)),U.__cacheKey=pe,U.__webglTexture=ye[pe].texture}return ie}function De(U,w,ie){let ve=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ve=s.TEXTURE_3D);const ye=se(U,w),pe=w.source;n.bindTexture(ve,U.__webglTexture,s.TEXTURE0+ie);const Ye=r.get(pe);if(pe.version!==Ye.__version||ye===!0){n.activeTexture(s.TEXTURE0+ie);const Ce=Tt.getPrimaries(Tt.workingColorSpace),be=w.colorSpace===mr?null:Tt.getPrimaries(w.colorSpace),ot=w.colorSpace===mr||Ce===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Ee=A(w.image,!1,a.maxTextureSize);Ee=nt(w,Ee);const Pe=u.convert(w.format,w.colorSpace),ft=u.convert(w.type);let Ze=I(w.internalFormat,Pe,ft,w.colorSpace,w.isVideoTexture);F(ve,w);let Ne;const rt=w.mipmaps,Je=w.isVideoTexture!==!0,wt=Ye.__version===void 0||ye===!0,M=pe.dataReady,q=D(w,Ee);if(w.isDepthTexture)Ze=P(w.format===Ys,w.type),wt&&(Je?n.texStorage2D(s.TEXTURE_2D,1,Ze,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,Ze,Ee.width,Ee.height,0,Pe,ft,null));else if(w.isDataTexture)if(rt.length>0){Je&&wt&&n.texStorage2D(s.TEXTURE_2D,q,Ze,rt[0].width,rt[0].height);for(let Q=0,re=rt.length;Q<re;Q++)Ne=rt[Q],Je?M&&n.texSubImage2D(s.TEXTURE_2D,Q,0,0,Ne.width,Ne.height,Pe,ft,Ne.data):n.texImage2D(s.TEXTURE_2D,Q,Ze,Ne.width,Ne.height,0,Pe,ft,Ne.data);w.generateMipmaps=!1}else Je?(wt&&n.texStorage2D(s.TEXTURE_2D,q,Ze,Ee.width,Ee.height),M&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Pe,ft,Ee.data)):n.texImage2D(s.TEXTURE_2D,0,Ze,Ee.width,Ee.height,0,Pe,ft,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Je&&wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,q,Ze,rt[0].width,rt[0].height,Ee.depth);for(let Q=0,re=rt.length;Q<re;Q++)if(Ne=rt[Q],w.format!==ai)if(Pe!==null)if(Je){if(M)if(w.layerUpdates.size>0){const ge=gm(Ne.width,Ne.height,w.format,w.type);for(const Ge of w.layerUpdates){const et=Ne.data.subarray(Ge*ge/Ne.data.BYTES_PER_ELEMENT,(Ge+1)*ge/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Ge,Ne.width,Ne.height,1,Pe,et,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Ne.width,Ne.height,Ee.depth,Pe,Ne.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Ze,Ne.width,Ne.height,Ee.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?M&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Ne.width,Ne.height,Ee.depth,Pe,ft,Ne.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Q,Ze,Ne.width,Ne.height,Ee.depth,0,Pe,ft,Ne.data)}else{Je&&wt&&n.texStorage2D(s.TEXTURE_2D,q,Ze,rt[0].width,rt[0].height);for(let Q=0,re=rt.length;Q<re;Q++)Ne=rt[Q],w.format!==ai?Pe!==null?Je?M&&n.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,Ne.width,Ne.height,Pe,Ne.data):n.compressedTexImage2D(s.TEXTURE_2D,Q,Ze,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?M&&n.texSubImage2D(s.TEXTURE_2D,Q,0,0,Ne.width,Ne.height,Pe,ft,Ne.data):n.texImage2D(s.TEXTURE_2D,Q,Ze,Ne.width,Ne.height,0,Pe,ft,Ne.data)}else if(w.isDataArrayTexture)if(Je){if(wt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,q,Ze,Ee.width,Ee.height,Ee.depth),M)if(w.layerUpdates.size>0){const Q=gm(Ee.width,Ee.height,w.format,w.type);for(const re of w.layerUpdates){const ge=Ee.data.subarray(re*Q/Ee.data.BYTES_PER_ELEMENT,(re+1)*Q/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,re,Ee.width,Ee.height,1,Pe,ft,ge)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Pe,ft,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ze,Ee.width,Ee.height,Ee.depth,0,Pe,ft,Ee.data);else if(w.isData3DTexture)Je?(wt&&n.texStorage3D(s.TEXTURE_3D,q,Ze,Ee.width,Ee.height,Ee.depth),M&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Pe,ft,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,Ze,Ee.width,Ee.height,Ee.depth,0,Pe,ft,Ee.data);else if(w.isFramebufferTexture){if(wt)if(Je)n.texStorage2D(s.TEXTURE_2D,q,Ze,Ee.width,Ee.height);else{let Q=Ee.width,re=Ee.height;for(let ge=0;ge<q;ge++)n.texImage2D(s.TEXTURE_2D,ge,Ze,Q,re,0,Pe,ft,null),Q>>=1,re>>=1}}else if(rt.length>0){if(Je&&wt){const Q=it(rt[0]);n.texStorage2D(s.TEXTURE_2D,q,Ze,Q.width,Q.height)}for(let Q=0,re=rt.length;Q<re;Q++)Ne=rt[Q],Je?M&&n.texSubImage2D(s.TEXTURE_2D,Q,0,0,Pe,ft,Ne):n.texImage2D(s.TEXTURE_2D,Q,Ze,Pe,ft,Ne);w.generateMipmaps=!1}else if(Je){if(wt){const Q=it(Ee);n.texStorage2D(s.TEXTURE_2D,q,Ze,Q.width,Q.height)}M&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,ft,Ee)}else n.texImage2D(s.TEXTURE_2D,0,Ze,Pe,ft,Ee);v(w)&&_(ve),Ye.__version=pe.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function K(U,w,ie){if(w.image.length!==6)return;const ve=se(U,w),ye=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ie);const pe=r.get(ye);if(ye.version!==pe.__version||ve===!0){n.activeTexture(s.TEXTURE0+ie);const Ye=Tt.getPrimaries(Tt.workingColorSpace),Ce=w.colorSpace===mr?null:Tt.getPrimaries(w.colorSpace),be=w.colorSpace===mr||Ye===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ot=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,Pe=[];for(let re=0;re<6;re++)!ot&&!Ee?Pe[re]=A(w.image[re],!0,a.maxCubemapSize):Pe[re]=Ee?w.image[re].image:w.image[re],Pe[re]=nt(w,Pe[re]);const ft=Pe[0],Ze=u.convert(w.format,w.colorSpace),Ne=u.convert(w.type),rt=I(w.internalFormat,Ze,Ne,w.colorSpace),Je=w.isVideoTexture!==!0,wt=pe.__version===void 0||ve===!0,M=ye.dataReady;let q=D(w,ft);F(s.TEXTURE_CUBE_MAP,w);let Q;if(ot){Je&&wt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,q,rt,ft.width,ft.height);for(let re=0;re<6;re++){Q=Pe[re].mipmaps;for(let ge=0;ge<Q.length;ge++){const Ge=Q[ge];w.format!==ai?Ze!==null?Je?M&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,0,0,Ge.width,Ge.height,Ze,Ge.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,rt,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?M&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,0,0,Ge.width,Ge.height,Ze,Ne,Ge.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge,rt,Ge.width,Ge.height,0,Ze,Ne,Ge.data)}}}else{if(Q=w.mipmaps,Je&&wt){Q.length>0&&q++;const re=it(Pe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,q,rt,re.width,re.height)}for(let re=0;re<6;re++)if(Ee){Je?M&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe[re].width,Pe[re].height,Ze,Ne,Pe[re].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,rt,Pe[re].width,Pe[re].height,0,Ze,Ne,Pe[re].data);for(let ge=0;ge<Q.length;ge++){const et=Q[ge].image[re].image;Je?M&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,0,0,et.width,et.height,Ze,Ne,et.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,rt,et.width,et.height,0,Ze,Ne,et.data)}}else{Je?M&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ze,Ne,Pe[re]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,rt,Ze,Ne,Pe[re]);for(let ge=0;ge<Q.length;ge++){const Ge=Q[ge];Je?M&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,0,0,Ze,Ne,Ge.image[re]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge+1,rt,Ze,Ne,Ge.image[re])}}}v(w)&&_(s.TEXTURE_CUBE_MAP),pe.__version=ye.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function ce(U,w,ie,ve,ye,pe){const Ye=u.convert(ie.format,ie.colorSpace),Ce=u.convert(ie.type),be=I(ie.internalFormat,Ye,Ce,ie.colorSpace);if(!r.get(w).__hasExternalTextures){const Ee=Math.max(1,w.width>>pe),Pe=Math.max(1,w.height>>pe);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,pe,be,Ee,Pe,w.depth,0,Ye,Ce,null):n.texImage2D(ye,pe,be,Ee,Pe,0,Ye,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),Ve(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,ye,r.get(ie).__webglTexture,0,gt(w)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,ye,r.get(ie).__webglTexture,pe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(U,w,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const ve=w.depthTexture,ye=ve&&ve.isDepthTexture?ve.type:null,pe=P(w.stencilBuffer,ye),Ye=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=gt(w);Ve(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,pe,w.width,w.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,pe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,pe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,U)}else{const ve=w.textures;for(let ye=0;ye<ve.length;ye++){const pe=ve[ye],Ye=u.convert(pe.format,pe.colorSpace),Ce=u.convert(pe.type),be=I(pe.internalFormat,Ye,Ce,pe.colorSpace),ot=gt(w);ie&&Ve(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,be,w.width,w.height):Ve(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,be,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,be,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const ve=r.get(w.depthTexture).__webglTexture,ye=gt(w);if(w.depthTexture.format===Hs)Ve(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Ys)Ve(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Le(U){const w=r.get(U),ie=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Me(w.__webglFramebuffer,U)}else if(ie){w.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ve]),w.__webglDepthbuffer[ve]=s.createRenderbuffer(),xe(w.__webglDepthbuffer[ve],U,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),xe(w.__webglDepthbuffer,U,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(U,w,ie){const ve=r.get(U);w!==void 0&&ce(ve.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&Le(U)}function je(U){const w=U.texture,ie=r.get(U),ve=r.get(w);U.addEventListener("dispose",z);const ye=U.textures,pe=U.isWebGLCubeRenderTarget===!0,Ye=ye.length>1;if(Ye||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=w.version,d.memory.textures++),pe){ie.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer[Ce]=[];for(let be=0;be<w.mipmaps.length;be++)ie.__webglFramebuffer[Ce][be]=s.createFramebuffer()}else ie.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)ie.__webglFramebuffer[Ce]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let Ce=0,be=ye.length;Ce<be;Ce++){const ot=r.get(ye[Ce]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),d.memory.textures++)}if(U.samples>0&&Ve(U)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ye.length;Ce++){const be=ye[Ce];ie.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce]);const ot=u.convert(be.format,be.colorSpace),Ee=u.convert(be.type),Pe=I(be.internalFormat,ot,Ee,be.colorSpace,U.isXRRenderTarget===!0),ft=gt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Pe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ie.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(ie.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),F(s.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)ce(ie.__webglFramebuffer[Ce][be],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,be);else ce(ie.__webglFramebuffer[Ce],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);v(w)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ye){for(let Ce=0,be=ye.length;Ce<be;Ce++){const ot=ye[Ce],Ee=r.get(ot);n.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),F(s.TEXTURE_2D,ot),ce(ie.__webglFramebuffer,U,ot,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),v(ot)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,ve.__webglTexture),F(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)ce(ie.__webglFramebuffer[be],U,w,s.COLOR_ATTACHMENT0,Ce,be);else ce(ie.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,Ce,0);v(w)&&_(Ce),n.unbindTexture()}U.depthBuffer&&Le(U)}function St(U){const w=U.textures;for(let ie=0,ve=w.length;ie<ve;ie++){const ye=w[ie];if(v(ye)){const pe=U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ye=r.get(ye).__webglTexture;n.bindTexture(pe,Ye),_(pe),n.unbindTexture()}}}const O=[],At=[];function ht(U){if(U.samples>0){if(Ve(U)===!1){const w=U.textures,ie=U.width,ve=U.height;let ye=s.COLOR_BUFFER_BIT;const pe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(U),Ce=w.length>1;if(Ce)for(let be=0;be<w.length;be++)n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let be=0;be<w.length;be++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[be]);const ot=r.get(w[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,ie,ve,0,0,ie,ve,ye,s.NEAREST),p===!0&&(O.length=0,At.length=0,O.push(s.COLOR_ATTACHMENT0+be),U.depthBuffer&&U.resolveDepthBuffer===!1&&(O.push(pe),At.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,At)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,O))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let be=0;be<w.length;be++){n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[be]);const ot=r.get(w[be]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,ot,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function gt(U){return Math.min(a.maxSamples,U.samples)}function Ve(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ct(U){const w=d.render.frame;g.get(U)!==w&&(g.set(U,w),U.update())}function nt(U,w){const ie=U.colorSpace,ve=U.format,ye=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ie!==xr&&ie!==mr&&(Tt.getTransfer(ie)===Ut?(ve!==ai||ye!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),w}function it(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=ae,this.resetTextureUnits=B,this.setTexture2D=fe,this.setTexture2DArray=de,this.setTexture3D=oe,this.setTextureCube=ue,this.rebindTextures=Fe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ve}function $M(s,e){function n(r,a=mr){let u;const d=Tt.getTransfer(a);if(r===Fi)return s.UNSIGNED_BYTE;if(r===kf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Um)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===bm)return s.BYTE;if(r===Dm)return s.SHORT;if(r===Fo)return s.UNSIGNED_SHORT;if(r===Of)return s.INT;if(r===Yr)return s.UNSIGNED_INT;if(r===Ui)return s.FLOAT;if(r===Oo)return s.HALF_FLOAT;if(r===Im)return s.ALPHA;if(r===Nm)return s.RGB;if(r===ai)return s.RGBA;if(r===Fm)return s.LUMINANCE;if(r===Om)return s.LUMINANCE_ALPHA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===Ys)return s.DEPTH_STENCIL;if(r===km)return s.RED;if(r===Bf)return s.RED_INTEGER;if(r===zm)return s.RG;if(r===Hf)return s.RG_INTEGER;if(r===Vf)return s.RGBA_INTEGER;if(r===xl||r===yl||r===Sl||r===Ml)if(d===Ut)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===xl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===xl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rf||r===sf||r===of||r===af)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===rf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===of)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===af)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lf||r===uf||r===cf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===lf||r===uf)return d===Ut?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===cf)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ff||r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Mf||r===Ef||r===Tf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ff)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===df)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hf)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pf)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mf)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gf)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_f)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vf)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xf)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yf)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sf)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mf)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ef)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tf)return d===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===El||r===wf||r===Af)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===El)return d===Ut?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Af)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bm||r===Cf||r===Rf||r===Pf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===El)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Cf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class KM extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ml extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const v=n.getJointPose(A,r),_=this._getHandJoint(m,A);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=g.position.distanceTo(y.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ml;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const QM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Ln,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ki({vertexShader:QM,fragmentShader:JM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ni(new Ol(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tE extends $r{constructor(e,n){super();const r=this;let a=null,u=1,d=null,f="local-floor",p=1,m=null,g=null,y=null,x=null,S=null,T=null;const A=new eE,v=n.getContextAttributes();let _=null,I=null;const P=[],D=[],j=new at;let z=null;const N=new qn;N.layers.enable(1),N.viewport=new on;const X=new qn;X.layers.enable(2),X.viewport=new on;const L=[N,X],R=new KM;R.layers.enable(1),R.layers.enable(2);let B=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=P[K];return ce===void 0&&(ce=new jc,P[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=P[K];return ce===void 0&&(ce=new jc,P[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=P[K];return ce===void 0&&(ce=new jc,P[K]=ce),ce.getHandSpace()};function ee(K){const ce=D.indexOf(K.inputSource);if(ce===-1)return;const xe=P[ce];xe!==void 0&&(xe.update(K.inputSource,K.frame,m||d),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function fe(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",de);for(let K=0;K<P.length;K++){const ce=D[K];ce!==null&&(D[K]=null,P[K].disconnect(ce))}B=null,ae=null,A.reset(),e.setRenderTarget(_),S=null,x=null,y=null,a=null,I=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return y},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",de),v.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(j),a.renderState.layers===void 0){const ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,ce),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new jr(S.framebufferWidth,S.framebufferHeight,{format:ai,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ce=null,xe=null,Me=null;v.depth&&(Me=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=v.stencil?Ys:Hs,xe=v.stencil?Xs:Yr);const Le={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:u};y=new XRWebGLBinding(a,n),x=y.createProjectionLayer(Le),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new jr(x.textureWidth,x.textureHeight,{format:ai,type:Fi,depthTexture:new tg(x.textureWidth,x.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await a.requestReferenceSpace(f),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function de(K){for(let ce=0;ce<K.removed.length;ce++){const xe=K.removed[ce],Me=D.indexOf(xe);Me>=0&&(D[Me]=null,P[Me].disconnect(xe))}for(let ce=0;ce<K.added.length;ce++){const xe=K.added[ce];let Me=D.indexOf(xe);if(Me===-1){for(let Fe=0;Fe<P.length;Fe++)if(Fe>=D.length){D.push(xe),Me=Fe;break}else if(D[Fe]===null){D[Fe]=xe,Me=Fe;break}if(Me===-1)break}const Le=P[Me];Le&&Le.connect(xe)}}const oe=new Z,ue=new Z;function H(K,ce,xe){oe.setFromMatrixPosition(ce.matrixWorld),ue.setFromMatrixPosition(xe.matrixWorld);const Me=oe.distanceTo(ue),Le=ce.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,je=Le[14]/(Le[10]-1),St=Le[14]/(Le[10]+1),O=(Le[9]+1)/Le[5],At=(Le[9]-1)/Le[5],ht=(Le[8]-1)/Le[0],gt=(Fe[8]+1)/Fe[0],Ve=je*ht,Ct=je*gt,nt=Me/(-ht+gt),it=nt*-ht;ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(it),K.translateZ(nt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const U=je+nt,w=St+nt,ie=Ve-it,ve=Ct+(Me-it),ye=O*St/w*U,pe=At*St/w*U;K.projectionMatrix.makePerspective(ie,ve,ye,pe,U,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function he(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;A.texture!==null&&(K.near=A.depthNear,K.far=A.depthFar),R.near=X.near=N.near=K.near,R.far=X.far=N.far=K.far,(B!==R.near||ae!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,ae=R.far,N.near=B,N.far=ae,X.near=B,X.far=ae,N.updateProjectionMatrix(),X.updateProjectionMatrix(),K.updateProjectionMatrix());const ce=K.parent,xe=R.cameras;he(R,ce);for(let Me=0;Me<xe.length;Me++)he(xe[Me],ce);xe.length===2?H(R,N,X):R.projectionMatrix.copy(N.projectionMatrix),le(K,R,ce)};function le(K,ce,xe){xe===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Lf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(K){p=K,x!==null&&(x.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let F=null;function se(K,ce){if(g=ce.getViewerPose(m||d),T=ce,g!==null){const xe=g.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let Me=!1;xe.length!==R.cameras.length&&(R.cameras.length=0,Me=!0);for(let Fe=0;Fe<xe.length;Fe++){const je=xe[Fe];let St=null;if(S!==null)St=S.getViewport(je);else{const At=y.getViewSubImage(x,je);St=At.viewport,Fe===0&&(e.setRenderTargetTextures(I,At.colorTexture,x.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(I))}let O=L[Fe];O===void 0&&(O=new qn,O.layers.enable(Fe),O.viewport=new on,L[Fe]=O),O.matrix.fromArray(je.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(je.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(St.x,St.y,St.width,St.height),Fe===0&&(R.matrix.copy(O.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Me===!0&&R.cameras.push(O)}const Le=a.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Fe=y.getDepthInformation(xe[0]);Fe&&Fe.isValid&&Fe.texture&&A.init(e,Fe,a.renderState)}}for(let xe=0;xe<P.length;xe++){const Me=D[xe],Le=P[xe];Me!==null&&Le!==void 0&&Le.update(Me,ce,m||d)}F&&F(K,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),T=null}const De=new eg;De.setAnimationLoop(se),this.setAnimationLoop=function(K){F=K},this.dispose=function(){}}}const zr=new Oi,nE=new Yt;function iE(s,e){function n(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,Km(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function a(v,_,I,P,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(v,_):_.isMeshToonMaterial?(u(v,_),y(v,_)):_.isMeshPhongMaterial?(u(v,_),g(v,_)):_.isMeshStandardMaterial?(u(v,_),x(v,_),_.isMeshPhysicalMaterial&&S(v,_,D)):_.isMeshMatcapMaterial?(u(v,_),T(v,_)):_.isMeshDepthMaterial?u(v,_):_.isMeshDistanceMaterial?(u(v,_),A(v,_)):_.isMeshNormalMaterial?u(v,_):_.isLineBasicMaterial?(d(v,_),_.isLineDashedMaterial&&f(v,_)):_.isPointsMaterial?p(v,_,I,P):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,n(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Pn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,n(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Pn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,n(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,n(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const I=e.get(_),P=I.envMap,D=I.envMapRotation;P&&(v.envMap.value=P,zr.copy(D),zr.x*=-1,zr.y*=-1,zr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),v.envMapRotation.value.setFromMatrix4(nE.makeRotationFromEuler(zr)),v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,v.aoMapTransform))}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform))}function f(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function p(v,_,I,P){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*I,v.scale.value=P*.5,_.map&&(v.map.value=_.map,n(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,n(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,n(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function x(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function S(v,_,I){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,_){_.matcap&&(v.matcap.value=_.matcap)}function A(v,_){const I=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function rE(s,e,n,r){let a={},u={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,P){const D=P.program;r.uniformBlockBinding(I,D)}function m(I,P){let D=a[I.id];D===void 0&&(T(I),D=g(I),a[I.id]=D,I.addEventListener("dispose",v));const j=P.program;r.updateUBOMapping(I,j);const z=e.render.frame;u[I.id]!==z&&(x(I),u[I.id]=z)}function g(I){const P=y();I.__bindingPointIndex=P;const D=s.createBuffer(),j=I.__size,z=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,j,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,D),D}function y(){for(let I=0;I<f;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const P=a[I.id],D=I.uniforms,j=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let z=0,N=D.length;z<N;z++){const X=Array.isArray(D[z])?D[z]:[D[z]];for(let L=0,R=X.length;L<R;L++){const B=X[L];if(S(B,z,L,j)===!0){const ae=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let de=0;de<ee.length;de++){const oe=ee[de],ue=A(oe);typeof oe=="number"||typeof oe=="boolean"?(B.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ae+fe,B.__data)):oe.isMatrix3?(B.__data[0]=oe.elements[0],B.__data[1]=oe.elements[1],B.__data[2]=oe.elements[2],B.__data[3]=0,B.__data[4]=oe.elements[3],B.__data[5]=oe.elements[4],B.__data[6]=oe.elements[5],B.__data[7]=0,B.__data[8]=oe.elements[6],B.__data[9]=oe.elements[7],B.__data[10]=oe.elements[8],B.__data[11]=0):(oe.toArray(B.__data,fe),fe+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,P,D,j){const z=I.value,N=P+"_"+D;if(j[N]===void 0)return typeof z=="number"||typeof z=="boolean"?j[N]=z:j[N]=z.clone(),!0;{const X=j[N];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return j[N]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function T(I){const P=I.uniforms;let D=0;const j=16;for(let N=0,X=P.length;N<X;N++){const L=Array.isArray(P[N])?P[N]:[P[N]];for(let R=0,B=L.length;R<B;R++){const ae=L[R],ee=Array.isArray(ae.value)?ae.value:[ae.value];for(let fe=0,de=ee.length;fe<de;fe++){const oe=ee[fe],ue=A(oe),H=D%j;H!==0&&j-H<ue.boundary&&(D+=j-H),ae.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=D,D+=ue.storage}}}const z=D%j;return z>0&&(D+=j-z),I.__size=D,I.__cache={},this}function A(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function v(I){const P=I.target;P.removeEventListener("dispose",v);const D=d.indexOf(P.__bindingPointIndex);d.splice(D,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete u[P.id]}function _(){for(const I in a)s.deleteBuffer(a[I]);d=[],a={},u={}}return{bind:p,update:m,dispose:_}}class sE{constructor(e={}){const{canvas:n=$v(),context:r=null,depth:a=!0,stencil:u=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const S=new Uint32Array(4),T=new Int32Array(4);let A=null,v=null;const _=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this.toneMapping=_r,this.toneMappingExposure=1;const P=this;let D=!1,j=0,z=0,N=null,X=-1,L=null;const R=new on,B=new on;let ae=null;const ee=new yt(0);let fe=0,de=n.width,oe=n.height,ue=1,H=null,he=null;const le=new on(0,0,de,oe),F=new on(0,0,de,oe);let se=!1;const De=new Jm;let K=!1,ce=!1;const xe=new Yt,Me=new Z,Le=new on,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function St(){return N===null?ue:1}let O=r;function At(C,G){return n.getContext(C,G)}try{const C={alpha:!0,depth:a,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ff}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",re,!1),n.addEventListener("webglcontextcreationerror",ge,!1),O===null){const G="webgl2";if(O=At(G,C),O===null)throw At(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ht,gt,Ve,Ct,nt,it,U,w,ie,ve,ye,pe,Ye,Ce,be,ot,Ee,Pe,ft,Ze,Ne,rt,Je,wt;function M(){ht=new dS(O),ht.init(),rt=new $M(O,ht),gt=new sS(O,ht,e,rt),Ve=new YM(O),Ct=new mS(O),nt=new DM,it=new qM(O,ht,Ve,nt,gt,rt,Ct),U=new aS(P),w=new fS(P),ie=new S0(O),Je=new iS(O,ie),ve=new hS(O,ie,Ct,Je),ye=new _S(O,ve,ie,Ct),ft=new gS(O,gt,it),ot=new oS(nt),pe=new bM(P,U,w,ht,gt,Je,ot),Ye=new iE(P,nt),Ce=new IM,be=new BM(ht),Pe=new nS(P,U,w,Ve,ye,x,p),Ee=new XM(P,ye,gt),wt=new rE(O,Ct,gt,Ve),Ze=new rS(O,ht,Ct),Ne=new pS(O,ht,Ct),Ct.programs=pe.programs,P.capabilities=gt,P.extensions=ht,P.properties=nt,P.renderLists=Ce,P.shadowMap=Ee,P.state=Ve,P.info=Ct}M();const q=new tE(P,O);this.xr=q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(C){C!==void 0&&(ue=C,this.setSize(de,oe,!1))},this.getSize=function(C){return C.set(de,oe)},this.setSize=function(C,G,J=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=C,oe=G,n.width=Math.floor(C*ue),n.height=Math.floor(G*ue),J===!0&&(n.style.width=C+"px",n.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(de*ue,oe*ue).floor()},this.setDrawingBufferSize=function(C,G,J){de=C,oe=G,ue=J,n.width=Math.floor(C*J),n.height=Math.floor(G*J),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(le)},this.setViewport=function(C,G,J,ne){C.isVector4?le.set(C.x,C.y,C.z,C.w):le.set(C,G,J,ne),Ve.viewport(R.copy(le).multiplyScalar(ue).round())},this.getScissor=function(C){return C.copy(F)},this.setScissor=function(C,G,J,ne){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,G,J,ne),Ve.scissor(B.copy(F).multiplyScalar(ue).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(C){Ve.setScissorTest(se=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){he=C},this.getClearColor=function(C){return C.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(C=!0,G=!0,J=!0){let ne=0;if(C){let W=!1;if(N!==null){const we=N.texture.format;W=we===Vf||we===Hf||we===Bf}if(W){const we=N.texture.type,Ue=we===Fi||we===Yr||we===Fo||we===Xs||we===kf||we===zf,ze=Pe.getClearColor(),Ae=Pe.getClearAlpha(),tt=ze.r,Qe=ze.g,qe=ze.b;Ue?(S[0]=tt,S[1]=Qe,S[2]=qe,S[3]=Ae,O.clearBufferuiv(O.COLOR,0,S)):(T[0]=tt,T[1]=Qe,T[2]=qe,T[3]=Ae,O.clearBufferiv(O.COLOR,0,T))}else ne|=O.COLOR_BUFFER_BIT}G&&(ne|=O.DEPTH_BUFFER_BIT),J&&(ne|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",re,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Ce.dispose(),be.dispose(),nt.dispose(),U.dispose(),w.dispose(),ye.dispose(),Je.dispose(),wt.dispose(),pe.dispose(),q.dispose(),q.removeEventListener("sessionstart",zt),q.removeEventListener("sessionend",yn),Wt.stop()};function Q(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const C=Ct.autoReset,G=Ee.enabled,J=Ee.autoUpdate,ne=Ee.needsUpdate,W=Ee.type;M(),Ct.autoReset=C,Ee.enabled=G,Ee.autoUpdate=J,Ee.needsUpdate=ne,Ee.type=W}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ge(C){const G=C.target;G.removeEventListener("dispose",Ge),et(G)}function et(C){It(C),nt.remove(C)}function It(C){const G=nt.get(C).programs;G!==void 0&&(G.forEach(function(J){pe.releaseProgram(J)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,J,ne,W,we){G===null&&(G=Fe);const Ue=W.isMesh&&W.matrixWorld.determinant()<0,ze=zl(C,G,J,ne,W);Ve.setMaterial(ne,Ue);let Ae=J.index,tt=1;if(ne.wireframe===!0){if(Ae=ve.getWireframeAttribute(J),Ae===void 0)return;tt=2}const Qe=J.drawRange,qe=J.attributes.position;let mt=Qe.start*tt,Nt=(Qe.start+Qe.count)*tt;we!==null&&(mt=Math.max(mt,we.start*tt),Nt=Math.min(Nt,(we.start+we.count)*tt)),Ae!==null?(mt=Math.max(mt,0),Nt=Math.min(Nt,Ae.count)):qe!=null&&(mt=Math.max(mt,0),Nt=Math.min(Nt,qe.count));const Lt=Nt-mt;if(Lt<0||Lt===1/0)return;Je.setup(W,ne,ze,J,Ae);let Jt,lt=Ze;if(Ae!==null&&(Jt=ie.get(Ae),lt=Ne,lt.setIndex(Jt)),W.isMesh)ne.wireframe===!0?(Ve.setLineWidth(ne.wireframeLinewidth*St()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(W.isLine){let Xe=ne.linewidth;Xe===void 0&&(Xe=1),Ve.setLineWidth(Xe*St()),W.isLineSegments?lt.setMode(O.LINES):W.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else W.isPoints?lt.setMode(O.POINTS):W.isSprite&&lt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)lt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))lt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xe=W._multiDrawStarts,Mt=W._multiDrawCounts,vt=W._multiDrawCount,Dn=Ae?ie.get(Ae).bytesPerElement:1,Hi=nt.get(ne).currentProgram.getUniforms();for(let en=0;en<vt;en++)Hi.setValue(O,"_gl_DrawID",en),lt.render(Xe[en]/Dn,Mt[en])}else if(W.isInstancedMesh)lt.renderInstances(mt,Lt,W.count);else if(J.isInstancedBufferGeometry){const Xe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Mt=Math.min(J.instanceCount,Xe);lt.renderInstances(mt,Lt,Mt)}else lt.render(mt,Lt)};function Vt(C,G,J){C.transparent===!0&&C.side===Di&&C.forceSinglePass===!1?(C.side=Pn,C.needsUpdate=!0,Bi(C,G,J),C.side=vr,C.needsUpdate=!0,Bi(C,G,J),C.side=Di):Bi(C,G,J)}this.compile=function(C,G,J=null){J===null&&(J=C),v=be.get(J),v.init(G),I.push(v),J.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),C!==J&&C.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights();const ne=new Set;return C.traverse(function(W){const we=W.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){const ze=we[Ue];Vt(ze,J,W),ne.add(ze)}else Vt(we,J,W),ne.add(we)}),I.pop(),v=null,ne},this.compileAsync=function(C,G,J=null){const ne=this.compile(C,G,J);return new Promise(W=>{function we(){if(ne.forEach(function(Ue){nt.get(Ue).currentProgram.isReady()&&ne.delete(Ue)}),ne.size===0){W(C);return}setTimeout(we,10)}ht.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let pt=null;function kt(C){pt&&pt(C)}function zt(){Wt.stop()}function yn(){Wt.start()}const Wt=new eg;Wt.setAnimationLoop(kt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(C){pt=C,q.setAnimationLoop(C),C===null?Wt.stop():Wt.start()},q.addEventListener("sessionstart",zt),q.addEventListener("sessionend",yn),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(G),G=q.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,G,N),v=be.get(C,I.length),v.init(G),I.push(v),xe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),De.setFromProjectionMatrix(xe),ce=this.localClippingEnabled,K=ot.init(this.clippingPlanes,ce),A=Ce.get(C,_.length),A.init(),_.push(A),q.enabled===!0&&q.isPresenting===!0){const we=P.xr.getDepthSensingMesh();we!==null&&mn(we,G,-1/0,P.sortObjects)}mn(C,G,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(H,he),je=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,je&&Pe.addToRenderList(A,C),this.info.render.frame++,K===!0&&ot.beginShadows();const J=v.state.shadowsArray;Ee.render(J,C,G),K===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=A.opaque,W=A.transmissive;if(v.setupLights(),G.isArrayCamera){const we=G.cameras;if(W.length>0)for(let Ue=0,ze=we.length;Ue<ze;Ue++){const Ae=we[Ue];Kn(ne,W,C,Ae)}je&&Pe.render(C);for(let Ue=0,ze=we.length;Ue<ze;Ue++){const Ae=we[Ue];mi(A,C,Ae,Ae.viewport)}}else W.length>0&&Kn(ne,W,C,G),je&&Pe.render(C),mi(A,C,G);N!==null&&(it.updateMultisampleRenderTarget(N),it.updateRenderTargetMipmap(N)),C.isScene===!0&&C.onAfterRender(P,C,G),Je.resetDefaultState(),X=-1,L=null,I.pop(),I.length>0?(v=I[I.length-1],K===!0&&ot.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,_.pop(),_.length>0?A=_[_.length-1]:A=null};function mn(C,G,J,ne){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||De.intersectsSprite(C)){ne&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(xe);const Ue=ye.update(C),ze=C.material;ze.visible&&A.push(C,Ue,ze,J,Le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||De.intersectsObject(C))){const Ue=ye.update(C),ze=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Le.copy(Ue.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(xe)),Array.isArray(ze)){const Ae=Ue.groups;for(let tt=0,Qe=Ae.length;tt<Qe;tt++){const qe=Ae[tt],mt=ze[qe.materialIndex];mt&&mt.visible&&A.push(C,Ue,mt,J,Le.z,qe)}}else ze.visible&&A.push(C,Ue,ze,J,Le.z,null)}}const we=C.children;for(let Ue=0,ze=we.length;Ue<ze;Ue++)mn(we[Ue],G,J,ne)}function mi(C,G,J,ne){const W=C.opaque,we=C.transmissive,Ue=C.transparent;v.setupLightsView(J),K===!0&&ot.setGlobalState(P.clippingPlanes,J),ne&&Ve.viewport(R.copy(ne)),W.length>0&&gi(W,G,J),we.length>0&&gi(we,G,J),Ue.length>0&&gi(Ue,G,J),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Kn(C,G,J,ne){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new jr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Oo:Fi,minFilter:Wr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const we=v.state.transmissionRenderTarget[ne.id],Ue=ne.viewport||R;we.setSize(Ue.z,Ue.w);const ze=P.getRenderTarget();P.setRenderTarget(we),P.getClearColor(ee),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),je?Pe.render(J):P.clear();const Ae=P.toneMapping;P.toneMapping=_r;const tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),K===!0&&ot.setGlobalState(P.clippingPlanes,ne),gi(C,J,ne),it.updateMultisampleRenderTarget(we),it.updateRenderTargetMipmap(we),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let qe=0,mt=G.length;qe<mt;qe++){const Nt=G[qe],Lt=Nt.object,Jt=Nt.geometry,lt=Nt.material,Xe=Nt.group;if(lt.side===Di&&Lt.layers.test(ne.layers)){const Mt=lt.side;lt.side=Pn,lt.needsUpdate=!0,yr(Lt,J,ne,Jt,lt,Xe),lt.side=Mt,lt.needsUpdate=!0,Qe=!0}}Qe===!0&&(it.updateMultisampleRenderTarget(we),it.updateRenderTargetMipmap(we))}P.setRenderTarget(ze),P.setClearColor(ee,fe),tt!==void 0&&(ne.viewport=tt),P.toneMapping=Ae}function gi(C,G,J){const ne=G.isScene===!0?G.overrideMaterial:null;for(let W=0,we=C.length;W<we;W++){const Ue=C[W],ze=Ue.object,Ae=Ue.geometry,tt=ne===null?Ue.material:ne,Qe=Ue.group;ze.layers.test(J.layers)&&yr(ze,G,J,Ae,tt,Qe)}}function yr(C,G,J,ne,W,we){C.onBeforeRender(P,G,J,ne,W,we),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.transparent===!0&&W.side===Di&&W.forceSinglePass===!1?(W.side=Pn,W.needsUpdate=!0,P.renderBufferDirect(J,G,ne,W,C,we),W.side=vr,W.needsUpdate=!0,P.renderBufferDirect(J,G,ne,W,C,we),W.side=Di):P.renderBufferDirect(J,G,ne,W,C,we),C.onAfterRender(P,G,J,ne,W,we)}function Bi(C,G,J){G.isScene!==!0&&(G=Fe);const ne=nt.get(C),W=v.state.lights,we=v.state.shadowsArray,Ue=W.state.version,ze=pe.getParameters(C,W.state,we,G,J),Ae=pe.getProgramCacheKey(ze);let tt=ne.programs;ne.environment=C.isMeshStandardMaterial?G.environment:null,ne.fog=G.fog,ne.envMap=(C.isMeshStandardMaterial?w:U).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",Ge),tt=new Map,ne.programs=tt);let Qe=tt.get(Ae);if(Qe!==void 0){if(ne.currentProgram===Qe&&ne.lightsStateVersion===Ue)return Go(C,ze),Qe}else ze.uniforms=pe.getUniforms(C),C.onBeforeCompile(ze,P),Qe=pe.acquireProgram(ze,Ae),tt.set(Ae,Qe),ne.uniforms=ze.uniforms;const qe=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=ot.uniform),Go(C,ze),ne.needsLights=Wo(C),ne.lightsStateVersion=Ue,ne.needsLights&&(qe.ambientLightColor.value=W.state.ambient,qe.lightProbe.value=W.state.probe,qe.directionalLights.value=W.state.directional,qe.directionalLightShadows.value=W.state.directionalShadow,qe.spotLights.value=W.state.spot,qe.spotLightShadows.value=W.state.spotShadow,qe.rectAreaLights.value=W.state.rectArea,qe.ltc_1.value=W.state.rectAreaLTC1,qe.ltc_2.value=W.state.rectAreaLTC2,qe.pointLights.value=W.state.point,qe.pointLightShadows.value=W.state.pointShadow,qe.hemisphereLights.value=W.state.hemi,qe.directionalShadowMap.value=W.state.directionalShadowMap,qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qe.spotShadowMap.value=W.state.spotShadowMap,qe.spotLightMatrix.value=W.state.spotLightMatrix,qe.spotLightMap.value=W.state.spotLightMap,qe.pointShadowMap.value=W.state.pointShadowMap,qe.pointShadowMatrix.value=W.state.pointShadowMatrix),ne.currentProgram=Qe,ne.uniformsList=null,Qe}function Vo(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=wl.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Go(C,G){const J=nt.get(C);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function zl(C,G,J,ne,W){G.isScene!==!0&&(G=Fe),it.resetTextureUnits();const we=G.fog,Ue=ne.isMeshStandardMaterial?G.environment:null,ze=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:xr,Ae=(ne.isMeshStandardMaterial?w:U).get(ne.envMap||Ue),tt=ne.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),qe=!!J.morphAttributes.position,mt=!!J.morphAttributes.normal,Nt=!!J.morphAttributes.color;let Lt=_r;ne.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Lt=P.toneMapping);const Jt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,lt=Jt!==void 0?Jt.length:0,Xe=nt.get(ne),Mt=v.state.lights;if(K===!0&&(ce===!0||C!==L)){const Sn=C===L&&ne.id===X;ot.setState(ne,C,Sn)}let vt=!1;ne.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Mt.state.version||Xe.outputColorSpace!==ze||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==Ae||ne.fog===!0&&Xe.fog!==we||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ot.numPlanes||Xe.numIntersection!==ot.numIntersection)||Xe.vertexAlphas!==tt||Xe.vertexTangents!==Qe||Xe.morphTargets!==qe||Xe.morphNormals!==mt||Xe.morphColors!==Nt||Xe.toneMapping!==Lt||Xe.morphTargetsCount!==lt)&&(vt=!0):(vt=!0,Xe.__version=ne.version);let Dn=Xe.currentProgram;vt===!0&&(Dn=Bi(ne,G,W));let Hi=!1,en=!1,Vi=!1;const Rt=Dn.getUniforms(),Un=Xe.uniforms;if(Ve.useProgram(Dn.program)&&(Hi=!0,en=!0,Vi=!0),ne.id!==X&&(X=ne.id,en=!0),Hi||L!==C){Rt.setValue(O,"projectionMatrix",C.projectionMatrix),Rt.setValue(O,"viewMatrix",C.matrixWorldInverse);const Sn=Rt.map.cameraPosition;Sn!==void 0&&Sn.setValue(O,Me.setFromMatrixPosition(C.matrixWorld)),gt.logarithmicDepthBuffer&&Rt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Rt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),L!==C&&(L=C,en=!0,Vi=!0)}if(W.isSkinnedMesh){Rt.setOptional(O,W,"bindMatrix"),Rt.setOptional(O,W,"bindMatrixInverse");const Sn=W.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Rt.setValue(O,"boneTexture",Sn.boneTexture,it))}W.isBatchedMesh&&(Rt.setOptional(O,W,"batchingTexture"),Rt.setValue(O,"batchingTexture",W._matricesTexture,it),Rt.setOptional(O,W,"batchingIdTexture"),Rt.setValue(O,"batchingIdTexture",W._indirectTexture,it),Rt.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&Rt.setValue(O,"batchingColorTexture",W._colorsTexture,it));const $s=J.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0)&&ft.update(W,J,Dn),(en||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,Rt.setValue(O,"receiveShadow",W.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Un.envMap.value=Ae,Un.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&G.environment!==null&&(Un.envMapIntensity.value=G.environmentIntensity),en&&(Rt.setValue(O,"toneMappingExposure",P.toneMappingExposure),Xe.needsLights&&_i(Un,Vi),we&&ne.fog===!0&&Ye.refreshFogUniforms(Un,we),Ye.refreshMaterialUniforms(Un,ne,ue,oe,v.state.transmissionRenderTarget[C.id]),wl.upload(O,Vo(Xe),Un,it)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(wl.upload(O,Vo(Xe),Un,it),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Rt.setValue(O,"center",W.center),Rt.setValue(O,"modelViewMatrix",W.modelViewMatrix),Rt.setValue(O,"normalMatrix",W.normalMatrix),Rt.setValue(O,"modelMatrix",W.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Sn=ne.uniformsGroups;for(let Sr=0,Xo=Sn.length;Sr<Xo;Sr++){const Kr=Sn[Sr];wt.update(Kr,Dn),wt.bind(Kr,Dn)}}return Dn}function _i(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Wo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(C,G,J){nt.get(C.texture).__webglTexture=G,nt.get(C.depthTexture).__webglTexture=J;const ne=nt.get(C);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=J===void 0,ne.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,G){const J=nt.get(C);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,J=0){N=C,j=G,z=J;let ne=!0,W=null,we=!1,Ue=!1;if(C){const Ae=nt.get(C);Ae.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(O.FRAMEBUFFER,null),ne=!1):Ae.__webglFramebuffer===void 0?it.setupRenderTarget(C):Ae.__hasExternalTextures&&it.rebindTextures(C,nt.get(C.texture).__webglTexture,nt.get(C.depthTexture).__webglTexture);const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ue=!0);const Qe=nt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[G])?W=Qe[G][J]:W=Qe[G],we=!0):C.samples>0&&it.useMultisampledRTT(C)===!1?W=nt.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?W=Qe[J]:W=Qe,R.copy(C.viewport),B.copy(C.scissor),ae=C.scissorTest}else R.copy(le).multiplyScalar(ue).floor(),B.copy(F).multiplyScalar(ue).floor(),ae=se;if(Ve.bindFramebuffer(O.FRAMEBUFFER,W)&&ne&&Ve.drawBuffers(C,W),Ve.viewport(R),Ve.scissor(B),Ve.setScissorTest(ae),we){const Ae=nt.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae.__webglTexture,J)}else if(Ue){const Ae=nt.get(C.texture),tt=G||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.__webglTexture,J||0,tt)}X=-1},this.readRenderTargetPixels=function(C,G,J,ne,W,we,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){Ve.bindFramebuffer(O.FRAMEBUFFER,ze);try{const Ae=C.texture,tt=Ae.format,Qe=Ae.type;if(!gt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-ne&&J>=0&&J<=C.height-W&&O.readPixels(G,J,ne,W,rt.convert(tt),rt.convert(Qe),we)}finally{const Ae=N!==null?nt.get(N).__webglFramebuffer:null;Ve.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(C,G,J,ne,W,we,Ue){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){Ve.bindFramebuffer(O.FRAMEBUFFER,ze);try{const Ae=C.texture,tt=Ae.format,Qe=Ae.type;if(!gt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=C.width-ne&&J>=0&&J<=C.height-W){const qe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,qe),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),O.readPixels(G,J,ne,W,rt.convert(tt),rt.convert(Qe),0),O.flush();const mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await Kv(O,mt,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,qe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we)}finally{O.deleteBuffer(qe),O.deleteSync(mt)}return we}}finally{const Ae=N!==null?nt.get(N).__webglFramebuffer:null;Ve.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(C,G=null,J=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1]);const ne=Math.pow(2,-J),W=Math.floor(C.image.width*ne),we=Math.floor(C.image.height*ne),Ue=G!==null?G.x:0,ze=G!==null?G.y:0;it.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Ue,ze,W,we),Ve.unbindTexture()},this.copyTextureToTexture=function(C,G,J=null,ne=null,W=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,C=arguments[1],G=arguments[2],W=arguments[3]||0,J=null);let we,Ue,ze,Ae,tt,Qe;J!==null?(we=J.max.x-J.min.x,Ue=J.max.y-J.min.y,ze=J.min.x,Ae=J.min.y):(we=C.image.width,Ue=C.image.height,ze=0,Ae=0),ne!==null?(tt=ne.x,Qe=ne.y):(tt=0,Qe=0);const qe=rt.convert(G.format),mt=rt.convert(G.type);it.setTexture2D(G,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const Nt=O.getParameter(O.UNPACK_ROW_LENGTH),Lt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Jt=O.getParameter(O.UNPACK_SKIP_PIXELS),lt=O.getParameter(O.UNPACK_SKIP_ROWS),Xe=O.getParameter(O.UNPACK_SKIP_IMAGES),Mt=C.isCompressedTexture?C.mipmaps[W]:C.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Mt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ae),C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,W,tt,Qe,we,Ue,qe,mt,Mt.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,W,tt,Qe,Mt.width,Mt.height,qe,Mt.data):O.texSubImage2D(O.TEXTURE_2D,W,tt,Qe,we,Ue,qe,mt,Mt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Nt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Jt),O.pixelStorei(O.UNPACK_SKIP_ROWS,lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe),W===0&&G.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(C,G,J=null,ne=null,W=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ne=arguments[1]||null,C=arguments[2],G=arguments[3],W=arguments[4]||0);let we,Ue,ze,Ae,tt,Qe,qe,mt,Nt;const Lt=C.isCompressedTexture?C.mipmaps[W]:C.image;J!==null?(we=J.max.x-J.min.x,Ue=J.max.y-J.min.y,ze=J.max.z-J.min.z,Ae=J.min.x,tt=J.min.y,Qe=J.min.z):(we=Lt.width,Ue=Lt.height,ze=Lt.depth,Ae=0,tt=0,Qe=0),ne!==null?(qe=ne.x,mt=ne.y,Nt=ne.z):(qe=0,mt=0,Nt=0);const Jt=rt.convert(G.format),lt=rt.convert(G.type);let Xe;if(G.isData3DTexture)it.setTexture3D(G,0),Xe=O.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)it.setTexture2DArray(G,0),Xe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment);const Mt=O.getParameter(O.UNPACK_ROW_LENGTH),vt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Dn=O.getParameter(O.UNPACK_SKIP_PIXELS),Hi=O.getParameter(O.UNPACK_SKIP_ROWS),en=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Lt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),O.pixelStorei(O.UNPACK_SKIP_ROWS,tt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe),C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Xe,W,qe,mt,Nt,we,Ue,ze,Jt,lt,Lt.data):G.isCompressedArrayTexture?O.compressedTexSubImage3D(Xe,W,qe,mt,Nt,we,Ue,ze,Jt,Lt.data):O.texSubImage3D(Xe,W,qe,mt,Nt,we,Ue,ze,Jt,lt,Lt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Dn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Hi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,en),W===0&&G.generateMipmaps&&O.generateMipmap(Xe),Ve.unbindTexture()},this.initRenderTarget=function(C){nt.get(C).__webglFramebuffer===void 0&&it.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?it.setTextureCube(C,0):C.isData3DTexture?it.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?it.setTexture2DArray(C,0):it.setTexture2D(C,0),Ve.unbindTexture()},this.resetState=function(){j=0,z=0,N=null,Ve.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gf?"display-p3":"srgb",n.unpackColorSpace=Tt.workingColorSpace===Il?"display-p3":"srgb"}}class Yf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(e),this.density=n}clone(){return new Yf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class oE extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class aE extends Bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _m=new Yt,Df=new Fl,gl=new Nl,_l=new Z;class lE extends bn{constructor(e=new zi,n=new aE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(a),gl.radius+=u,e.ray.intersectsSphere(gl)===!1)return;_m.copy(a).invert(),Df.copy(e.ray).applyMatrix4(_m);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,y=r.attributes.position;if(m!==null){const x=Math.max(0,d.start),S=Math.min(m.count,d.start+d.count);for(let T=x,A=S;T<A;T++){const v=m.getX(T);_l.fromBufferAttribute(y,v),vm(_l,v,p,a,e,n,this)}}else{const x=Math.max(0,d.start),S=Math.min(y.count,d.start+d.count);for(let T=x,A=S;T<A;T++)_l.fromBufferAttribute(y,T),vm(_l,T,p,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}function vm(s,e,n,r,a,u,d){const f=Df.distanceSqToPoint(s);if(f<n){const p=new Z;Df.closestPointToPoint(s,p),p.applyMatrix4(r);const m=a.ray.origin.distanceTo(p);if(m<a.near||m>a.far)return;u.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,object:d})}}const xm=new Yt;class uE{constructor(e,n,r=0,a=1/0){this.ray=new Fl(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new Wf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return xm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xm),this}intersectObject(e,n=!0,r=[]){return Uf(e,this,r,n),r.sort(ym),r}intersectObjects(e,n=!0,r=[]){for(let a=0,u=e.length;a<u;a++)Uf(e[a],this,r,n);return r.sort(ym),r}}function ym(s,e){return s.distance-e.distance}function Uf(s,e,n,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const u=s.children;for(let d=0,f=u.length;d<f;d++)Uf(u[d],e,n,!0)}}class Sm{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(xn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);const Mm={type:"change"},qc={type:"start"},Em={type:"end"},vl=new Fl,Tm=new pr,cE=Math.cos(70*qv.DEG2RAD);class fE extends $r{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",be),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Mm),r.update(),u=a.NONE},this.update=(function(){const M=new Z,q=new qr().setFromUnitVectors(e.up,new Z(0,1,0)),Q=q.clone().invert(),re=new Z,ge=new qr,Ge=new Z,et=2*Math.PI;return function(Vt=null){const pt=r.object.position;M.copy(pt).sub(r.target),M.applyQuaternion(q),f.setFromVector3(M),r.autoRotate&&u===a.NONE&&ae(R(Vt)),r.enableDamping?(f.theta+=p.theta*r.dampingFactor,f.phi+=p.phi*r.dampingFactor):(f.theta+=p.theta,f.phi+=p.phi);let kt=r.minAzimuthAngle,zt=r.maxAzimuthAngle;isFinite(kt)&&isFinite(zt)&&(kt<-Math.PI?kt+=et:kt>Math.PI&&(kt-=et),zt<-Math.PI?zt+=et:zt>Math.PI&&(zt-=et),kt<=zt?f.theta=Math.max(kt,Math.min(zt,f.theta)):f.theta=f.theta>(kt+zt)/2?Math.max(kt,f.theta):Math.min(zt,f.theta)),f.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,f.phi)),f.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor);let yn=!1;if(r.zoomToCursor&&z||r.object.isOrthographicCamera)f.radius=le(f.radius);else{const Wt=f.radius;f.radius=le(f.radius*m),yn=Wt!=f.radius}if(M.setFromSpherical(f),M.applyQuaternion(Q),pt.copy(r.target).add(M),r.object.lookAt(r.target),r.enableDamping===!0?(p.theta*=1-r.dampingFactor,p.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(p.set(0,0,0),g.set(0,0,0)),r.zoomToCursor&&z){let Wt=null;if(r.object.isPerspectiveCamera){const mn=M.length();Wt=le(mn*m);const mi=mn-Wt;r.object.position.addScaledVector(D,mi),r.object.updateMatrixWorld(),yn=!!mi}else if(r.object.isOrthographicCamera){const mn=new Z(j.x,j.y,0);mn.unproject(r.object);const mi=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),yn=mi!==r.object.zoom;const Kn=new Z(j.x,j.y,0);Kn.unproject(r.object),r.object.position.sub(Kn).add(mn),r.object.updateMatrixWorld(),Wt=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Wt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Wt).add(r.object.position):(vl.origin.copy(r.object.position),vl.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(vl.direction))<cE?e.lookAt(r.target):(Tm.setFromNormalAndCoplanarPoint(r.object.up,r.target),vl.intersectPlane(Tm,r.target))))}else if(r.object.isOrthographicCamera){const Wt=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),Wt!==r.object.zoom&&(r.object.updateProjectionMatrix(),yn=!0)}return m=1,z=!1,yn||re.distanceToSquared(r.object.position)>d||8*(1-ge.dot(r.object.quaternion))>d||Ge.distanceToSquared(r.target)>d?(r.dispatchEvent(Mm),re.copy(r.object.position),ge.copy(r.object.quaternion),Ge.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",Pe),r.domElement.removeEventListener("pointerdown",it),r.domElement.removeEventListener("pointercancel",w),r.domElement.removeEventListener("wheel",ye),r.domElement.removeEventListener("pointermove",U),r.domElement.removeEventListener("pointerup",w),r.domElement.getRootNode().removeEventListener("keydown",Ye,{capture:!0}),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",be),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=a.NONE;const d=1e-6,f=new Sm,p=new Sm;let m=1;const g=new Z,y=new at,x=new at,S=new at,T=new at,A=new at,v=new at,_=new at,I=new at,P=new at,D=new Z,j=new at;let z=!1;const N=[],X={};let L=!1;function R(M){return M!==null?2*Math.PI/60*r.autoRotateSpeed*M:2*Math.PI/60/60*r.autoRotateSpeed}function B(M){const q=Math.abs(M*.01);return Math.pow(.95,r.zoomSpeed*q)}function ae(M){p.theta-=M}function ee(M){p.phi-=M}const fe=(function(){const M=new Z;return function(Q,re){M.setFromMatrixColumn(re,0),M.multiplyScalar(-Q),g.add(M)}})(),de=(function(){const M=new Z;return function(Q,re){r.screenSpacePanning===!0?M.setFromMatrixColumn(re,1):(M.setFromMatrixColumn(re,0),M.crossVectors(r.object.up,M)),M.multiplyScalar(Q),g.add(M)}})(),oe=(function(){const M=new Z;return function(Q,re){const ge=r.domElement;if(r.object.isPerspectiveCamera){const Ge=r.object.position;M.copy(Ge).sub(r.target);let et=M.length();et*=Math.tan(r.object.fov/2*Math.PI/180),fe(2*Q*et/ge.clientHeight,r.object.matrix),de(2*re*et/ge.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(fe(Q*(r.object.right-r.object.left)/r.object.zoom/ge.clientWidth,r.object.matrix),de(re*(r.object.top-r.object.bottom)/r.object.zoom/ge.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function ue(M){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function H(M){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function he(M,q){if(!r.zoomToCursor)return;z=!0;const Q=r.domElement.getBoundingClientRect(),re=M-Q.left,ge=q-Q.top,Ge=Q.width,et=Q.height;j.x=re/Ge*2-1,j.y=-(ge/et)*2+1,D.set(j.x,j.y,1).unproject(r.object).sub(r.object.position).normalize()}function le(M){return Math.max(r.minDistance,Math.min(r.maxDistance,M))}function F(M){y.set(M.clientX,M.clientY)}function se(M){he(M.clientX,M.clientX),_.set(M.clientX,M.clientY)}function De(M){T.set(M.clientX,M.clientY)}function K(M){x.set(M.clientX,M.clientY),S.subVectors(x,y).multiplyScalar(r.rotateSpeed);const q=r.domElement;ae(2*Math.PI*S.x/q.clientHeight),ee(2*Math.PI*S.y/q.clientHeight),y.copy(x),r.update()}function ce(M){I.set(M.clientX,M.clientY),P.subVectors(I,_),P.y>0?ue(B(P.y)):P.y<0&&H(B(P.y)),_.copy(I),r.update()}function xe(M){A.set(M.clientX,M.clientY),v.subVectors(A,T).multiplyScalar(r.panSpeed),oe(v.x,v.y),T.copy(A),r.update()}function Me(M){he(M.clientX,M.clientY),M.deltaY<0?H(B(M.deltaY)):M.deltaY>0&&ue(B(M.deltaY)),r.update()}function Le(M){let q=!1;switch(M.code){case r.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?ee(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):oe(0,r.keyPanSpeed),q=!0;break;case r.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?ee(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):oe(0,-r.keyPanSpeed),q=!0;break;case r.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?ae(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):oe(r.keyPanSpeed,0),q=!0;break;case r.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?ae(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):oe(-r.keyPanSpeed,0),q=!0;break}q&&(M.preventDefault(),r.update())}function Fe(M){if(N.length===1)y.set(M.pageX,M.pageY);else{const q=Je(M),Q=.5*(M.pageX+q.x),re=.5*(M.pageY+q.y);y.set(Q,re)}}function je(M){if(N.length===1)T.set(M.pageX,M.pageY);else{const q=Je(M),Q=.5*(M.pageX+q.x),re=.5*(M.pageY+q.y);T.set(Q,re)}}function St(M){const q=Je(M),Q=M.pageX-q.x,re=M.pageY-q.y,ge=Math.sqrt(Q*Q+re*re);_.set(0,ge)}function O(M){r.enableZoom&&St(M),r.enablePan&&je(M)}function At(M){r.enableZoom&&St(M),r.enableRotate&&Fe(M)}function ht(M){if(N.length==1)x.set(M.pageX,M.pageY);else{const Q=Je(M),re=.5*(M.pageX+Q.x),ge=.5*(M.pageY+Q.y);x.set(re,ge)}S.subVectors(x,y).multiplyScalar(r.rotateSpeed);const q=r.domElement;ae(2*Math.PI*S.x/q.clientHeight),ee(2*Math.PI*S.y/q.clientHeight),y.copy(x)}function gt(M){if(N.length===1)A.set(M.pageX,M.pageY);else{const q=Je(M),Q=.5*(M.pageX+q.x),re=.5*(M.pageY+q.y);A.set(Q,re)}v.subVectors(A,T).multiplyScalar(r.panSpeed),oe(v.x,v.y),T.copy(A)}function Ve(M){const q=Je(M),Q=M.pageX-q.x,re=M.pageY-q.y,ge=Math.sqrt(Q*Q+re*re);I.set(0,ge),P.set(0,Math.pow(I.y/_.y,r.zoomSpeed)),ue(P.y),_.copy(I);const Ge=(M.pageX+q.x)*.5,et=(M.pageY+q.y)*.5;he(Ge,et)}function Ct(M){r.enableZoom&&Ve(M),r.enablePan&&gt(M)}function nt(M){r.enableZoom&&Ve(M),r.enableRotate&&ht(M)}function it(M){r.enabled!==!1&&(N.length===0&&(r.domElement.setPointerCapture(M.pointerId),r.domElement.addEventListener("pointermove",U),r.domElement.addEventListener("pointerup",w)),!Ne(M)&&(ft(M),M.pointerType==="touch"?ot(M):ie(M)))}function U(M){r.enabled!==!1&&(M.pointerType==="touch"?Ee(M):ve(M))}function w(M){switch(Ze(M),N.length){case 0:r.domElement.releasePointerCapture(M.pointerId),r.domElement.removeEventListener("pointermove",U),r.domElement.removeEventListener("pointerup",w),r.dispatchEvent(Em),u=a.NONE;break;case 1:const q=N[0],Q=X[q];ot({pointerId:q,pageX:Q.x,pageY:Q.y});break}}function ie(M){let q;switch(M.button){case 0:q=r.mouseButtons.LEFT;break;case 1:q=r.mouseButtons.MIDDLE;break;case 2:q=r.mouseButtons.RIGHT;break;default:q=-1}switch(q){case xs.DOLLY:if(r.enableZoom===!1)return;se(M),u=a.DOLLY;break;case xs.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(r.enablePan===!1)return;De(M),u=a.PAN}else{if(r.enableRotate===!1)return;F(M),u=a.ROTATE}break;case xs.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(r.enableRotate===!1)return;F(M),u=a.ROTATE}else{if(r.enablePan===!1)return;De(M),u=a.PAN}break;default:u=a.NONE}u!==a.NONE&&r.dispatchEvent(qc)}function ve(M){switch(u){case a.ROTATE:if(r.enableRotate===!1)return;K(M);break;case a.DOLLY:if(r.enableZoom===!1)return;ce(M);break;case a.PAN:if(r.enablePan===!1)return;xe(M);break}}function ye(M){r.enabled===!1||r.enableZoom===!1||u!==a.NONE||(M.preventDefault(),r.dispatchEvent(qc),Me(pe(M)),r.dispatchEvent(Em))}function pe(M){const q=M.deltaMode,Q={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(q){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}return M.ctrlKey&&!L&&(Q.deltaY*=10),Q}function Ye(M){M.key==="Control"&&(L=!0,r.domElement.getRootNode().addEventListener("keyup",Ce,{passive:!0,capture:!0}))}function Ce(M){M.key==="Control"&&(L=!1,r.domElement.getRootNode().removeEventListener("keyup",Ce,{passive:!0,capture:!0}))}function be(M){r.enabled===!1||r.enablePan===!1||Le(M)}function ot(M){switch(rt(M),N.length){case 1:switch(r.touches.ONE){case ys.ROTATE:if(r.enableRotate===!1)return;Fe(M),u=a.TOUCH_ROTATE;break;case ys.PAN:if(r.enablePan===!1)return;je(M),u=a.TOUCH_PAN;break;default:u=a.NONE}break;case 2:switch(r.touches.TWO){case ys.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;O(M),u=a.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;At(M),u=a.TOUCH_DOLLY_ROTATE;break;default:u=a.NONE}break;default:u=a.NONE}u!==a.NONE&&r.dispatchEvent(qc)}function Ee(M){switch(rt(M),u){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;ht(M),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;gt(M),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Ct(M),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;nt(M),r.update();break;default:u=a.NONE}}function Pe(M){r.enabled!==!1&&M.preventDefault()}function ft(M){N.push(M.pointerId)}function Ze(M){delete X[M.pointerId];for(let q=0;q<N.length;q++)if(N[q]==M.pointerId){N.splice(q,1);return}}function Ne(M){for(let q=0;q<N.length;q++)if(N[q]==M.pointerId)return!0;return!1}function rt(M){let q=X[M.pointerId];q===void 0&&(q=new at,X[M.pointerId]=q),q.set(M.pageX,M.pageY)}function Je(M){const q=M.pointerId===N[0]?N[1]:N[0];return X[q]}r.domElement.addEventListener("contextmenu",Pe),r.domElement.addEventListener("pointerdown",it),r.domElement.addEventListener("pointercancel",w),r.domElement.addEventListener("wheel",ye,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",Ye,{passive:!0,capture:!0}),this.update()}}const We=X_.createElement,dE=["https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/%E5%85%A8%E5%94%90%E8%AF%97/","https://cdn.jsdelivr.net/gh/chinese-poetry/chinese-poetry@master/%E5%85%A8%E5%94%90%E8%AF%97/"],ks=Array.from({length:58},(s,e)=>e*1e3),Dl=["山水","边塞","离别","宫廷","佛道","咏物","四时","怀古","田园","酬赠","其他"],If=["初唐","盛唐","中唐","晚唐","未分期"],hE=["五言绝句","七言绝句","五言律诗","七言律诗","五言古体","七言古体","古体/杂言"],Nf={山水:"#64d2aa",边塞:"#d88955",离别:"#8da7ff",宫廷:"#e2c46c",佛道:"#b99cff",咏物:"#ef6f9f",四时:"#6fd7e8",怀古:"#cfc7a3",田园:"#a8d46f",酬赠:"#ffb36b",其他:"#f4f1de"},pE=[["山水",["山","水","江","河","峰","嶺","岭","雲","云","溪","泉","松","石","林","月"]],["边塞",["塞","邊","边","胡","羌","戎","沙","烽","關","关","馬","马","軍","军","甲","戰","战"]],["离别",["別","别","送","離","离","歸","归","客","舟","驛","驿","淚","泪","故人","相思"]],["宫廷",["宮","宫","闕","阙","殿","帝","皇","御","苑","鳳","凤","龍","龙","朝"]],["佛道",["僧","寺","禪","禅","佛","道","仙","觀","观","庵","經","经","塔"]],["咏物",["花","梅","菊","柳","竹","草","鳥","鸟","鶴","鹤","蟬","蝉","燕"]],["四时",["春","夏","秋","冬","雪","雨","霜","風","风","寒","暑","夜"]],["怀古",["古","昔","舊","旧","秦","漢","汉","晉","晋","陵","臺","台","史"]],["田园",["田","園","园","農","农","村","桑","麻","柴","牧","樵","釣","钓"]],["酬赠",["寄","贈","赠","答","酬","和","奉","呈","憶","忆","懷","怀"]]],mE={初唐:["太宗皇帝","上官昭容","王勃","楊炯","杨炯","盧照鄰","卢照邻","駱賓王","骆宾王","陳子昂","陈子昂","沈佺期","宋之問","宋之问","張九齡","张九龄"],盛唐:["李白","杜甫","王維","王维","孟浩然","岑參","岑参","高適","高适","王昌齡","王昌龄","王之渙","王之涣","王翰","常建","崔顥","崔颢","李頎","李颀","賀知章","贺知章","張旭","张旭"],中唐:["白居易","元稹","韓愈","韩愈","柳宗元","劉禹錫","刘禹锡","孟郊","賈島","贾岛","張籍","张籍","王建","韋應物","韦应物","李賀","李贺"],晚唐:["李商隱","李商隐","杜牧","溫庭筠","温庭筠","韋莊","韦庄","許渾","许浑","司空圖","司空图","皮日休","陸龜蒙","陆龟蒙","羅隱","罗隐","杜荀鶴","杜荀鹤"]},gE=[{author:"李白",title:"靜夜思",paragraphs:["牀前明月光，疑是地上霜。","舉頭望明月，低頭思故鄉。"]},{author:"王維",title:"鹿柴",paragraphs:["空山不見人，但聞人語響。","返景入深林，復照青苔上。"]},{author:"杜甫",title:"春望",paragraphs:["國破山河在，城春草木深。","感時花濺淚，恨別鳥驚心。","烽火連三月，家書抵萬金。","白頭搔更短，渾欲不勝簪。"]},{author:"王昌齡",title:"出塞",paragraphs:["秦時明月漢時關，萬里長征人未還。","但使龍城飛將在，不教胡馬度陰山。"]},{author:"白居易",title:"賦得古原草送別",paragraphs:["離離原上草，一歲一枯榮。","野火燒不盡，春風吹又生。","遠芳侵古道，晴翠接荒城。","又送王孫去，萋萋滿別情。"]},{author:"李商隱",title:"夜雨寄北",paragraphs:["君問歸期未有期，巴山夜雨漲秋池。","何當共剪西窗燭，卻話巴山夜雨時。"]}];function og(s){return s.flatMap(e=>String(e).split(/[，。！？；：]/)).map(e=>e.trim()).filter(Boolean)}function ag(s){const e=String(s).match(/[\u3400-\u9fff]/g);return e?e.length:0}function _E(s){const n=og(s).map(ag).filter(Boolean),r=a=>n.length>0&&n.every(u=>u===a);return n.length===4&&r(5)?"五言绝句":n.length===4&&r(7)?"七言绝句":n.length===8&&r(5)?"五言律诗":n.length===8&&r(7)?"七言律诗":r(5)?"五言古体":r(7)?"七言古体":"古体/杂言"}function vE(s){let e="其他",n=0;for(const[r,a]of pE){const u=a.reduce((d,f)=>d+(s.includes(f)?1:0),0);u>n&&(e=r,n=u)}return e}function xE(s){for(const[e,n]of Object.entries(mE))if(n.some(r=>s.includes(r)))return e;return"未分期"}function lg(s){let e=2166136261;for(let n=0;n<s.length;n+=1)e^=s.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function Io(s){const e=Math.sin(s*12.9898)*43758.5453;return e-Math.floor(e)}function yE(s){const e=Math.max(0,Dl.indexOf(s.theme)),n=Math.max(0,If.indexOf(s.stage)),r=lg(`${s.author}|${s.title}|${s.sourceIndex}`),a=e/Dl.length*Math.PI*2+(Io(r)-.5)*.5,d=160+Math.min(1,s.charCount/220)*270+Io(r+7)*90,p=(n-(If.length-1)/2)*115+(Io(r+13)-.5)*70,m=Math.cos(a)*d+(Io(r+19)-.5)*90,g=Math.sin(a)*d+(Io(r+29)-.5)*90;return[m,p,g]}function $c(s,e){const n=Array.isArray(s.paragraphs)?s.paragraphs.filter(Boolean).map(String):[],r=String(s.author||"佚名"),a=String(s.title||`未题 ${e+1}`),u=og(n),d=n.join(`
`),f=`${r} ${a} ${d}`.toLowerCase(),p=ag(d),m=_E(n),g=vE(`${a}${d}`),y=xE(r);return{id:`${e}-${lg(`${r}-${a}-${d}`)}`,sourceIndex:e,author:r,title:a,paragraphs:n,firstLine:u[0]||n[0]||"",body:d,searchable:f,charCount:p,lineCount:u.length,form:m,theme:g,stage:y,position:yE({author:r,title:a,sourceIndex:e,charCount:p,theme:g,stage:y})}}async function wm(s,e){const n=`poet.tang.${s}.json`;let r=null;for(const a of dE)try{const u=await fetch(`${a}${n}`,{signal:e,cache:"force-cache"});if(!u.ok){r=new Error(`${n}: ${u.status}`);continue}return await u.json()}catch(u){if(e.aborted)throw u;r=u}throw r||new Error(`${n}: load failed`)}async function SE(s,e,n){let r=!1,a=0,u=0;try{const m=await wm(0,n);r=!0,a+=1,s(m.map((g,y)=>$c(g,y))),e({loadedChunks:a,failedChunks:u,totalChunks:ks.length,source:"remote"})}catch{if(n.aborted)return;s(gE.map((g,y)=>$c(g,y))),e({loadedChunks:0,failedChunks:ks.length,totalChunks:ks.length,source:"sample"});return}const d=ks.slice(1);let f=0;async function p(){for(;!n.aborted&&f<d.length;){const m=d[f];f+=1;try{const y=(await wm(m,n)).map((x,S)=>$c(x,m+S));s(y),a+=1}catch{if(n.aborted)return;u+=1}e({loadedChunks:a,failedChunks:u,totalChunks:ks.length,source:r?"remote":"sample"})}}await Promise.all([p(),p(),p(),p()])}function ME(s,e,n){return Math.max(e,Math.min(n,s))}function Am(s){const e=new Float32Array(s.length*3),n=new Float32Array(s.length*3),r=new Float32Array(s.length),a=new yt;s.forEach((d,f)=>{const[p,m,g]=d.position;e[f*3]=p,e[f*3+1]=m,e[f*3+2]=g,a.set(Nf[d.theme]||Nf.其他),n[f*3]=a.r,n[f*3+1]=a.g,n[f*3+2]=a.b,r[f]=ME(3.8+Math.sqrt(Math.max(d.charCount,1))*.42,5,14)});const u=new zi;return u.setAttribute("position",new Bn(e,3)),u.setAttribute("customColor",new Bn(n,3)),u.setAttribute("size",new Bn(r,1)),u.computeBoundingSphere(),u}function EE({poems:s,onHover:e,onSelect:n}){const r=Ot.useRef(null),a=Ot.useRef(null),u=Ot.useRef(null),d=Ot.useRef(null),f=Ot.useRef(null),p=Ot.useRef(s),m=Ot.useRef(null);return Ot.useEffect(()=>{if(p.current=s,!f.current)return;const g=f.current.geometry;f.current.geometry=Am(s),g.dispose()},[s]),Ot.useEffect(()=>{const g=r.current,y=new oE;y.background=new yt("#05070a"),y.fog=new Yf("#05070a",9e-4),d.current=y;const x=new qn(58,g.clientWidth/g.clientHeight,1,3e3);x.position.set(0,220,920),u.current=x;const S=new sE({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});S.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),S.setSize(g.clientWidth,g.clientHeight),g.appendChild(S.domElement),a.current=S;const T=new fE(x,S.domElement);T.enableDamping=!0,T.dampingFactor=.07,T.enablePan=!0,T.minDistance=170,T.maxDistance=1500,T.rotateSpeed=.35,T.zoomSpeed=.75,T.panSpeed=.75;const A=new ki({transparent:!0,depthWrite:!1,blending:Kc,vertexShader:`
        attribute float size;
        attribute vec3 customColor;
        varying vec3 vColor;

        void main() {
          vColor = customColor;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (720.0 / max(120.0, -mvPosition.z));
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;

        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float distanceToCenter = length(center);
          float alpha = smoothstep(0.5, 0.08, distanceToCenter);
          float core = smoothstep(0.18, 0.0, distanceToCenter);
          gl_FragColor = vec4(vColor + core * 0.45, alpha);
        }
      `}),v=new lE(Am(p.current),A);y.add(v),f.current=v;const _=new uE;_.params.Points.threshold=9;const I=new at;function P(X){const L=S.domElement.getBoundingClientRect();I.x=(X.clientX-L.left)/L.width*2-1,I.y=-((X.clientY-L.top)/L.height)*2+1,_.setFromCamera(I,x);const R=_.intersectObject(v);if(R.length>0){const B=p.current[R[0].index];if(B){m.current=B,S.domElement.style.cursor="pointer",e({poem:B,x:X.clientX,y:X.clientY});return}}m.current=null,S.domElement.style.cursor="grab",e(null)}function D(){m.current&&n(m.current)}function j(){const X=g.clientWidth,L=g.clientHeight;x.aspect=X/L,x.updateProjectionMatrix(),S.setSize(X,L)}S.domElement.addEventListener("pointermove",P),S.domElement.addEventListener("click",D),window.addEventListener("resize",j);let z=0;function N(){z=requestAnimationFrame(N),T.update(),S.render(y,x)}return N(),()=>{cancelAnimationFrame(z),S.domElement.removeEventListener("pointermove",P),S.domElement.removeEventListener("click",D),window.removeEventListener("resize",j),T.dispose(),A.dispose(),v.geometry.dispose(),S.dispose(),g.removeChild(S.domElement)}},[e,n]),We("div",{className:"starfield",ref:r})}function TE(){const[s,e]=Ot.useState([]),[n,r]=Ot.useState({loadedChunks:0,failedChunks:0,totalChunks:ks.length,source:"remote",done:!1});return Ot.useEffect(()=>{const a=new AbortController;return SE(u=>{e(d=>d.concat(u))},u=>{r(d=>({...d,...u,done:u.loadedChunks+u.failedChunks>=u.totalChunks}))},a.signal),()=>a.abort()},[]),{poems:s,loadState:n}}function ug(s,e){const n=new Map;return s.forEach(r=>n.set(r[e],(n.get(r[e])||0)+1)),[...n.entries()].sort((r,a)=>a[1]-r[1])}function wE(){const{poems:s,loadState:e}=TE(),[n,r]=Ot.useState(""),[a,u]=Ot.useState(""),[d,f]=Ot.useState("全部"),[p,m]=Ot.useState("全部"),[g,y]=Ot.useState("全部"),[x,S]=Ot.useState(null),[T,A]=Ot.useState(null),v=Ot.useMemo(()=>ug(s,"author").slice(0,120),[s]),_=Ot.useMemo(()=>{const P=n.trim().toLowerCase(),D=a.trim();return s.filter(j=>!(P&&!j.searchable.includes(P)||D&&!j.author.includes(D)||d!=="全部"&&j.theme!==d||p!=="全部"&&j.stage!==p||g!=="全部"&&j.form!==g))},[s,n,a,d,p,g]);Ot.useEffect(()=>{T&&!_.some(P=>P.id===T.id)&&A(null)},[_,T]);const I=e.source==="sample"?"公开数据暂不可达，已载入样例":`${e.done?"已完成":"加载中"} ${s.length.toLocaleString("zh-CN")} 首`;return We("div",{className:"app"},We("header",{className:"topbar"},We("div",{className:"brand"},We("span",{className:"brand-mark"},"唐"),We("div",null,We("strong",null,"唐诗星空"),We("span",null,I))),We("div",{className:"controls"},We("input",{value:n,placeholder:"搜索诗人、诗名、诗句",onChange:P=>r(P.target.value)}),We("input",{value:a,list:"author-options",placeholder:"诗人筛选",onChange:P=>u(P.target.value)}),We("datalist",{id:"author-options"},v.map(([P,D])=>We("option",{key:P,value:P},`${P} ${D}`))),We("select",{value:d,onChange:P=>f(P.target.value),"aria-label":"主题"},["全部",...Dl].map(P=>We("option",{key:P,value:P},`主题 ${P}`))),We("select",{value:p,onChange:P=>m(P.target.value),"aria-label":"朝代阶段"},["全部",...If].map(P=>We("option",{key:P,value:P},`阶段 ${P}`))),We("select",{value:g,onChange:P=>y(P.target.value),"aria-label":"诗体"},["全部",...hE].map(P=>We("option",{key:P,value:P},`诗体 ${P}`))))),We("main",{className:"workspace"},We("section",{className:"sky"},We(EE,{poems:_,onHover:S,onSelect:A}),x&&We("div",{className:"tooltip",style:{left:`${Math.min(window.innerWidth-260,x.x+16)}px`,top:`${Math.min(window.innerHeight-130,x.y+16)}px`}},We("strong",null,x.poem.title),We("span",null,x.poem.author),We("p",null,x.poem.firstLine)),We("div",{className:"metrics"},We("span",null,`${_.length.toLocaleString("zh-CN")} / ${s.length.toLocaleString("zh-CN")} 首`),We("span",null,`${e.loadedChunks}/${e.totalChunks} 批`))),We("aside",{className:"detail"},T?We(CE,{poem:T}):We(AE,{poems:s,filteredPoems:_,loadState:e}))))}function AE({poems:s,filteredPoems:e,loadState:n}){const r=Ot.useMemo(()=>ug(e,"theme"),[e]);return We("div",{className:"panel-content"},We("div",{className:"panel-kicker"},"星图概览"),We("h1",null,s.length?`${e.length.toLocaleString("zh-CN")} 首诗`:"正在载入"),We("p",{className:"muted"},n.source==="sample"?"当前显示本地样例数据。":"数据来自公开《全唐诗》JSON，星点随数据批次渐进出现。"),We("div",{className:"legend-block"},We("h2",null,"星图编码"),We("p",null,"颜色代表主题，大小代表正文篇幅，纵向层级代表朝代阶段，环形扇区代表主题聚类。")),We("div",{className:"legend-grid"},Dl.map(a=>We("span",{key:a},We("i",{style:{background:Nf[a]}}),a))),We("div",{className:"theme-list"},r.slice(0,6).map(([a,u])=>We("div",{key:a},We("span",null,a),We("strong",null,u.toLocaleString("zh-CN"))))))}function CE({poem:s}){return We("div",{className:"panel-content poem-detail"},We("div",{className:"panel-kicker"},s.author),We("h1",null,s.title),We("p",{className:"first-line"},s.firstLine),We("div",{className:"tag-row"},We("span",null,s.theme),We("span",null,s.stage),We("span",null,s.form),We("span",null,`${s.charCount} 字`)),We("div",{className:"poem-body"},s.paragraphs.map((e,n)=>We("p",{key:`${s.id}-${n}`},e))))}Z_.createRoot(document.getElementById("root")).render(We(wE));
