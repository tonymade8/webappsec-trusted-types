(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
'use strict';class d{constructor(a,b,c,e,f=!1,k=null){this.D=a;this.m=b;this.J=c;this.G=e;this.F=f;this.I=k}static V(a){const b=/\s+/;return a.trim().split(/\s*;\s*/).map((a)=>a.split(b)).reduce(function(a,b){b[0]&&(a[b[0]]=b.slice(1).map((a)=>a).sort());return a},{})}static K(a){const b=d.V(a),c="trusted-types"in b;let e=!1,f=["*"];c&&(e=-1!==b["trusted-types"].indexOf("'url-allow-http'"),f=b["trusted-types"].filter((a)=>"'"!==a.charAt(0)));return new d(!0,c,null,f,e,a)}};const {apply:n}=Reflect,{hasOwnProperty:q}=Object.prototype,x=function(){function a(a){let b=z.get(a);void 0===b&&(b=g(null),z.set(a,b));return b}function b(a){const b=G(a);if(null==b||G(b)!==P)throw Error();for(let c of Q(b))m(a,c,{value:a[c]});return a}function c(a,b){p(a.prototype);delete a.name;m(a,"name",{value:b})}function e(a){return(b)=>b instanceof a&&z.has(b)}function f(a,b){return function(a,c){a=h(a);if(!a||!n(q,a,[b]))throw Error("Policy not found");return(0,a[b])(c)}}function k(b,c){function e(e,
f){const k=c[f],h=p(new e(H,b));return p({[f](b){const c=p(g(h));a(c).v=""+k(b);return c}}[f])}return p({createHTML:e(r,"createHTML"),createScriptURL:e(t,"createScriptURL"),createURL:e(u,"createURL"),createScript:e(v,"createScript")})}function h(a){return I.get(""+a)||null}const {assign:l,create:g,defineProperty:m,freeze:p,getOwnPropertyNames:Q,getPrototypeOf:G,prototype:P}=Object,{forEach:R,push:S}=Array.prototype,H=Symbol(),z=b(new WeakMap),A=b([]),I=b(new Map),B=b([]);let C=!1;class w{constructor(a,
b){if(a!==H)throw Error("cannot call the constructor");m(this,"policyName",{value:""+b,enumerable:!0})}toString(){return a(this).v}valueOf(){return a(this).v}}class u extends w{}c(u,"TrustedURL");class t extends w{}c(t,"TrustedScriptURL");class r extends w{}c(r,"TrustedHTML");class v extends w{}c(v,"TrustedScript");c(w,"TrustedType");const T={createHTML:()=>{throw Error("undefined conversion");},createURL:()=>{throw Error("undefined conversion");},createScriptURL:()=>{throw Error("undefined conversion");
},createScript:()=>{throw Error("undefined conversion");},expose:!1};return p({b:r,a:u,f:t,g:v,s:f(r,"createHTML"),A:f(u,"createURL"),w:f(t,"createScriptURL"),u:f(v,"createScript"),H:function(a,b){a=""+a;if(C&&-1===B.indexOf(a))throw Error("Policy "+a+" disallowed.");if(-1!==A.indexOf(a))throw Error("Policy "+a+" exists.");A.push(a);const c=l(g(null),T);b(c);p(c);b=k(a,c);c.expose&&I.set(a,b);return b},L:h,C:function(){return A.slice()},R:e(r),U:e(u),T:e(t),S:e(v),W:function(a){-1!==a.indexOf("*")?
C=!1:(C=!0,B.length=0,R.call(a,(a)=>{S.call(B,""+a)}))}})}();const {defineProperty:y}=Object;function D(a,b,c){y(a,b,{value:c})};const {apply:E}=Reflect,{getOwnPropertyNames:F,getOwnPropertyDescriptor:J,hasOwnProperty:K,getPrototypeOf:L,isPrototypeOf:M}=Object,{slice:N}=String.prototype,O=URL.prototype.constructor,U=window.SecurityPolicyViolationEvent||null;function V(a){try{return new O(a,document.baseURI||void 0)}catch(b){return null}}
let W={HTMLAnchorElement:{href:x.a},HTMLAreaElement:{href:x.a},HTMLBaseElement:{href:x.a},HTMLButtonElement:{formaction:x.a},HTMLSourceElement:{src:x.a},HTMLImageElement:{src:x.a},HTMLTrackElement:{src:x.a},HTMLMediaElement:{src:x.a},HTMLInputElement:{src:x.a,formaction:x.a},HTMLFrameElement:{src:x.a},HTMLIFrameElement:{src:x.a,srcdoc:x.b},HTMLLinkElement:{href:x.f},HTMLObjectElement:{data:x.f,codebase:x.f},HTMLEmbedElement:{src:x.f},HTMLScriptElement:{src:x.f,text:x.g},HTMLElement:{}};
for(let a of F(HTMLElement.prototype))"on"===a.slice(0,2)&&(W.HTMLElement[a]=x.g);const X={TrustedHTML:x.R,TrustedURL:x.U,TrustedScriptURL:x.T,TrustedScript:x.S},Y={TrustedHTML:x.s,TrustedURL:x.A,TrustedScriptURL:x.w,TrustedScript:x.u},Z={codebase:"codeBase",formaction:"formAction"};
class aa{constructor(a){this.c=a;this.l={}}N(){x.W(this.c.G);if(this.c.m||this.c.D)this.i(Element.prototype,"innerHTML",x.b),this.i(Element.prototype,"outerHTML",x.b),this.h(Range.prototype,"createContextualFragment",x.b,0),this.h(Element.prototype,"insertAdjacentHTML",x.b,1),J(Document.prototype,"write")?this.h(Document.prototype,"write",x.b,0):this.h(HTMLDocument.prototype,"write",x.b,0),this.h(window,"open",x.a,0),DOMParser&&this.h(DOMParser.prototype,"parseFromString",x.b,0),this.Z(),this.P(),
this.O()}P(){this.i(HTMLScriptElement.prototype,"innerText",x.g,HTMLElement.prototype);this.i(HTMLScriptElement.prototype,"textContent",x.g,Node.prototype)}O(){for(let a of F(W))for(let b of F(W[a])){const c=E(K,Z,[b])?Z[b]:b;this.i(window[a].prototype,c,W[a][b])}}Z(){let a=this;this.o(Element.prototype,"setAttribute",function(b,...c){return a.Y.bind(a,this,b).apply(a,c)});this.o(Element.prototype,"setAttributeNS",function(b,...c){return a.X.bind(a,this,b).apply(a,c)})}M(a,b){a=a.constructor;do{let c=
a&&a.name&&W[a.name]&&W[a.name][b];if(c||a==HTMLElement)return c}while(a=L(a));return null}Y(a,b,...c){if(null!==a.constructor){var e=(c[0]=String(c[0])).toLowerCase();e=this.M(a,e);if(e instanceof Function)return this.j(a,"setAttribute",e,b,1,c)}return b.apply(a,c)}X(a,b,...c){if(null!==a.constructor){c[0]=String(c[0]);var e=(c[1]=String(c[1])).toLowerCase();e=a.constructor&&a.constructor.name&&W[a.constructor.name]&&W[a.constructor.name][e];if(e instanceof Function)return this.j(a,"setAttributeNS",
e,b,2,c)}return b.apply(a,c)}h(a,b,c,e){let f=this;this.o(a,b,function(a,...h){return f.j.call(f,this,b,c,a,e,h)})}o(a,b,c){var e=J(a,b);let f=e?e.value:null;if(!(f instanceof Function))throw new TypeError("Property "+b+" on object"+a+" is not a function");e=this.B(a,b);if(this.l[e])throw Error("TrustedTypesEnforcer: Double installation detected");D(a,b,function(...a){return c.bind(this,f).apply(this,a)});this.l[e]=f}i(a,b,c,e=void 0){function f(a){g.j.call(g,this,b,c,h,0,[a])}if(e&&!M.call(e,a))throw Error("Invalid prototype chain");
e=e||a;let k=J(e,b),h=k?k.set:null;if(!(h instanceof Function))throw new TypeError("No setter for property "+b+" on object"+a);let l=this.B(a,b);if(this.l[l])throw Error("TrustedTypesEnforcer: Double installation detected");let g=this;e===a?y(a,b,{set:f}):y(a,b,{set:f,get:k.get,configurable:!0});this.l[l]=h}B(a,b){return""+a.constructor.name+"-"+b}j(a,b,c,e,f,k){let h=k[f];var l=""+c.name;if(X.hasOwnProperty(l)&&X[l](h)||c===x.g&&"on"===E(N,b,[0,2])&&null===h||"function"===typeof h)return E(e,a,k);
if(c===x.a&&this.c.F){var g=""+h,m;if(m=(m=V(g))?"http:"==m.protocol||"https:"==m.protocol:!1)return k[f]=g,E(e,a,k)}if((g=this.c.J)&&-1!==x.C().indexOf(g)&&(g=Y[l](g,h),X.hasOwnProperty(l)&&X[l](g)))return k[f]=g,E(e,a,k);f=a.constructor.name||""+a;l=`Failed to set ${b} on ${f}: `+`This property requires ${l}.`;this.c.D&&console.warn(l,b,a,c,h);if("function"==typeof U){g="";if(c===x.a||c===x.f)if(g=V(h)||"")g=g.href;c=E(N,""+h,[0,40]);b=new U("securitypolicyviolation",{bubbles:!0,blockedURI:g,disposition:this.c.m?
"enforce":"report",documentURI:document.location.href,effectiveDirective:"trusted-types",originalPolicy:this.c.I,statusCode:0,violatedDirective:"trusted-types",sample:`${f}.${b} ${c}`});a.isConnected?a.dispatchEvent(b):document.dispatchEvent(b)}if(this.c.m)throw new TypeError(l);return E(e,a,k)}};"undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes&&(window.TrustedTypes={TrustedHTML:x.b,TrustedURL:x.a,TrustedScriptURL:x.f,TrustedScript:x.g,createHTML:x.s,createURL:x.A,createScriptURL:x.w,createScript:x.u,createPolicy:x.H,getExposedPolicy:x.L,getPolicyNames:x.C});{const a=function(){try{var c;if(!(c=document.currentScript)){{let a=document.getElementsByTagName("script");c=a[a.length-1]}}if(c&&"Content-Security-Policy:"==c.textContent.trim().substr(0,24))return c.textContent.trim().slice(24);if(c.dataset.csp)return c.dataset.csp;const a=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(a)return a.content.trim()}catch(e){}return null}(),b=a?d.K(a):new d(!1,!1,null,["*"]);(new aa(b)).N()};}).call(window);//# sourceMappingURL=trustedtypes.build.js.map
