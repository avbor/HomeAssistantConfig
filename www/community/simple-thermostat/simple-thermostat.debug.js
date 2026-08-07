(function() {
    const env = {"DEBUG":true,"BUILD_TIME":"2026-08-05, 05:24 p.m."};
    try {
        if (process) {
            process.env = Object.assign({}, process.env);
            Object.assign(process.env, env);
            return;
        }
    } catch (e) {} // avoid ReferenceError: process is not defined
    globalThis.process = { env:env };
})();

var name = "simple-thermostat";
var version = "4.2.0";

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$4=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),o$7=new WeakMap;let n$5 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$7.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$7.set(s,t));}return t}toString(){return this.cssText}};const r$6=t=>new n$5("string"==typeof t?t:t+"",void 0,s$3),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$5(o,t,s$3)},S$1=(s,o)=>{if(e$4)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$3=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$6(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$3,getOwnPropertyDescriptor:h$2,getOwnPropertyNames:r$5,getOwnPropertySymbols:o$6,getPrototypeOf:n$4}=Object,a$1=globalThis,c$2=a$1.trustedTypes,l$1=c$2?c$2.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$2=(t,s)=>!i$3(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$2};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$3(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$2(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$4(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$5(t),...o$6(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$3(s));}else void 0!==s&&i.push(c$3(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$2)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$2=t=>t,s$2=t$1.trustedTypes,e$2=s$2?s$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,h$1="$lit$",o$5=`lit$${Math.random().toFixed(9).slice(2)}$`,n$3="?"+o$5,r$4=`<${n$3}>`,l=document,c$1=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f$1="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f$1}(?:([^\\s"'>=/]+)(${f$1}*=${f$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$4:d>=0?(e.push(a),s.slice(0,d)+h$1+s.slice(d)+o$5+x):s+o$5+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h$1)){const i=v[a++],s=r.getAttribute(t).split(o$5),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$5)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$5),i=t.length-1;if(i>0){r.textContent=s$2?s$2.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c$1()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c$1());}}}else if(8===r.nodeType)if(r.data===n$3)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$5,t+1));)d.push({type:7,index:l}),t+=o$5.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c$1()),this.O(c$1()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$2(t).nextSibling;i$2(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$1.litHtmlPolyfillSupport;B?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c$1(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$1=globalThis;let i$1 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}};i$1._$litElement$=true,i$1["finalized"]=true,s$1.litElementHydrateSupport?.({LitElement:i$1});const o$4=s$1.litElementPolyfillSupport;o$4?.({LitElement:i$1});(s$1.litElementVersions??=[]).push("4.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$3={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$2},r$3=(t=o$3,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$2(t){return (e,o)=>"object"==typeof o?r$3(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$2(r){return n$2({...r,state:true,attribute:false})}

var mdiBookOpenVariant = "M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M12 8V19.5C13.35 18.65 15.8 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8M13 11.5C14.11 10.82 15.6 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C15.73 9 14.23 9.28 13 9.84V11.5M17.5 11.67C15.79 11.67 14.29 11.93 13 12.46V14.15C14.11 13.5 15.6 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67M20 14.57C19.13 14.41 18.29 14.33 17.5 14.33C15.67 14.33 14.17 14.6 13 15.13V16.82C14.11 16.16 15.6 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57Z";

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = i$4`:host {
  display: block;
  isolation: isolate;
  max-width: 100%;
  min-width: 0;
  --st-default-spacing: 4px;
  --st-default-mode-radius: var(--ha-card-border-radius, 4px);
  --st-default-mode-transition: 200ms ease;
  --st-motion-ease: cubic-bezier(0.2, 0, 0, 1);
  --st-control-icon-size: var(--st-font-size-xl, 32px);
  --st-header-icon-size: var(--st-font-size-header-icon, 26px);
  --st-preset-icon-size: var(
    --st-font-size-preset-icon,
    var(--ha-font-size-xl, 20px)
  );
  --st-compact-mode-icon-size: var(--st-font-size-compact-mode-icon, 20px);
  --st-compact-mode-font-size: var(
    --st-font-size-compact-mode,
    var(--ha-font-size-m, 14px)
  );
  --st-entity-column-min-width: 160px;
  --st-active-icon-glow-duration: 4s;
  --st-active-icon-glow-min-size: 1px;
  --st-active-icon-glow-mid-size: 4px;
  --st-active-icon-glow-max-size: 6px;
  --st-active-icon-glow-min-strength: 28%;
  --st-active-icon-glow-mid-strength: 44%;
  --st-active-icon-glow-max-strength: 60%;
  --fan-color: #4f7f8d;
  --fan_only-color: var(--state-climate-fan-only-color, var(--fan-color));
}
ha-card {
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: var(--ha-font-smoothing, antialiased);
  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden;
  font-size: 14px;
  font-size: var(--ha-font-size-m, 14px);
  font-weight: 400;
  font-weight: var(--ha-font-weight-normal, 400);
  line-height: 1.5;
  line-height: var(--ha-line-height-normal, 1.5);

  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);

  --auto-color: green;
  --heat_cool-color: springgreen;
  --cool-color: #2b9af9;
  --heat-color: #ff8100;
  --manual-color: #44739e;
  --on-color: var(--primary-color);
  --off-color: #8a8a8a;
  --dry-color: #efbd07;
  --st-mode-surface-background: color-mix(
    in srgb,
    var(--primary-text-color) 14%,
    transparent
  );
  --st-interactive-tint: color-mix(
    in srgb,
    currentColor 50%,
    var(--st-value-update-color, var(--primary-color)) 50%
  );
  --st-switch-hover-button-color: color-mix(
    in srgb,
    var(--st-toggle-color, var(--primary-color)) 50%,
    var(--primary-text-color) 50%
  );
  --st-switch-hover-track-color: color-mix(
    in srgb,
    var(--st-toggle-color, var(--primary-color)) 30%,
    var(--primary-text-color) 70%
  );
}

ha-card.no-header {
  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 4) 0;
}

ha-card.unavailable,
ha-card.unknown {
  opacity: 0.56;
  pointer-events: none;
  filter: saturate(0.6);
}

ha-card.unavailable .mode-item,
ha-card.unknown .mode-item,
ha-card.unavailable .thermostat-trigger,
ha-card.unknown .thermostat-trigger {
  cursor: default;
}

ha-card.loading {
  min-height: 80px;
  background: linear-gradient(
    90deg,
    var(--card-background-color) 0%,
    var(--secondary-background-color) 50%,
    var(--card-background-color) 100%
  );
  background-size: 200% 100%;
  animation: st-shimmer 1.4s infinite linear;
}

@keyframes st-shimmer {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

@keyframes st-fan-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes st-active-icon-glow {
  0% {
    opacity: 0.16;
    transform: translate(-50%, -50%) scale(0.72);
  }

  50% {
    opacity: 0.42;
    transform: translate(-50%, -50%) scale(1);
  }

  100% {
    opacity: 0.16;
    transform: translate(-50%, -50%) scale(0.72);
  }
}

@keyframes st-value-pulse {
  0% {
    transform: scale(1);
    text-shadow: none;
  }

  45% {
    transform: scale(1.045);
    text-shadow: 0 0 8px
      color-mix(
        in srgb,
        var(--st-value-update-color, var(--primary-color)) 45%,
        transparent
      );
  }

  100% {
    transform: scale(1);
    text-shadow: none;
  }
}

.body {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, auto);
  align-items: center;
  justify-items: center;
  place-items: center;
  padding: 0 calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}
.body.has-entities.setpoint-count-2 {
  grid-template-columns:
    minmax(min-content, max-content) minmax(max-content, 1fr)
    minmax(max-content, 1fr);
}
.body.has-entities.step-column.setpoint-count-1 {
  grid-template-columns: minmax(0, 1fr) max-content;
}
.body.has-entities.step-column.setpoint-count-2 {
  grid-template-columns:
    minmax(var(--st-entity-column-min-width), max-content)
      minmax(max-content, 1fr)
    minmax(max-content, 1fr);
}

.toggle-label {
  color: var(--st-toggle-label-color, var(--primary-text-color));
  --st-toggle-color: var(--primary-color);
  margin-right: var(--st-spacing, var(--st-default-spacing));
  font-size: 16px;
  font-size: var(--st-font-size-toggle-label, var(--ha-font-size-l, 16px));
  transition:
    color 180ms var(--st-motion-ease), filter 180ms var(--st-motion-ease);
}
.toggle-label.on {
  --st-toggle-color: var(--on-color);
}
.toggle-label.off {
  --st-toggle-color: var(--primary-color);
}
.toggle-label.domain-light,
.header__toggle.domain-light,
.entity-heading.domain-light,
.entity-value.domain-light,
.entity-heading.toggle-lightbulb,
.entity-value.toggle-lightbulb,
.entity-heading.toggle-lightbulb-outline,
.entity-value.toggle-lightbulb-outline,
.entity-heading.toggle-ceiling-light,
.entity-value.toggle-ceiling-light,
.entity-heading.toggle-vanity-light,
.entity-value.toggle-vanity-light,
.entity-heading.toggle-string-lights,
.entity-value.toggle-string-lights,
.entity-heading.toggle-wall-sconce,
.entity-value.toggle-wall-sconce {
  --st-toggle-color: var(--state-light-active-color, var(--primary-color));
}
.toggle-label.domain-fan,
.header__toggle.domain-fan,
.entity-heading.domain-fan,
.entity-value.domain-fan {
  --st-toggle-color: var(--cool-color);
}
.header__toggle.toggle-fire,
.toggle-label.toggle-fire,
.header__toggle.toggle-radiator,
.toggle-label.toggle-radiator,
.header__toggle.toggle-heat,
.toggle-label.toggle-heat,
.header__toggle.toggle-heat-wave,
.toggle-label.toggle-heat-wave,
.header__toggle.toggle-heating-coil,
.toggle-label.toggle-heating-coil,
.header__toggle.toggle-water-boiler,
.toggle-label.toggle-water-boiler {
  --st-toggle-color: var(--heat-color);
}
.header__toggle.toggle-snowflake,
.toggle-label.toggle-snowflake,
.header__toggle.toggle-air-conditioner,
.toggle-label.toggle-air-conditioner,
.header__toggle.toggle-cool,
.toggle-label.toggle-cool {
  --st-toggle-color: var(--cool-color);
}
.header__toggle.toggle-fan,
.toggle-label.toggle-fan {
  --st-toggle-color: var(--cool-color);
}
.header__toggle.toggle-lightbulb,
.toggle-label.toggle-lightbulb {
  --st-toggle-color: var(--state-light-active-color, var(--primary-color));
}
.header__toggle.toggle-water-percent,
.toggle-label.toggle-water-percent,
.header__toggle.toggle-dry,
.toggle-label.toggle-dry {
  --st-toggle-color: var(--primary-color);
}

.faults {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}
.fault-icon {
  padding: 2px;
  cursor: pointer;
  color: var(--st-fault-inactive-color, var(--secondary-background-color));
}
.fault-icon.active {
    color: var(--st-fault-active-color, var(--accent-color));
  }
.fault-icon.hide {
    display: none;
  }

.entities {
  display: grid;
  grid-gap: 0;
  padding-top: calc(var(--st-spacing, var(--st-default-spacing)) * 4);
  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 4);
  font-size: 16px;
  font-size: var(--st-font-size-entities, var(--ha-font-size-l, 16px));
}
.entities.single-row {
  padding-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}
.entities.as-list {
  grid-auto-flow: column;
  grid-template-columns: min-content;
  -moz-column-gap: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
       column-gap: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

.entities.as-table.without-labels {
    grid: auto-flow / 100%;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.entities.as-table.with-labels {
    grid-template-columns: auto auto;
    grid-auto-flow: row;
    -moz-column-gap: 8px;
         column-gap: 8px;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.entity-value {
  display: flex;
  align-items: center;
  min-width: -moz-max-content;
  min-width: max-content;
  padding-bottom: 0;
  white-space: nowrap;
  transition:
    color 180ms var(--st-motion-ease), filter 180ms var(--st-motion-ease);
}
.entity-heading {
  font-weight: 300;
  padding-right: 8px;
  padding-bottom: 0;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-self: end;
  text-align: right;
  transition:
    color 180ms var(--st-motion-ease), filter 180ms var(--st-motion-ease);
}
.entities.align-left .entity-heading {
  justify-content: flex-start;
  justify-self: start;
  text-align: left;
}

.entities:empty {
  display: none;
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 4)
    calc(var(--st-spacing, var(--st-default-spacing)) * 2) 0
    calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}

.embedded-header-reserve {
  position: absolute;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
  width: 0;
  height: 0;
  min-height: 0;
  overflow: hidden;
  pointer-events: none;
}

ha-card.embedded {
  position: relative;
}

ha-card.embedded .body {
  padding-top: calc(
      34px +
        6px +
        (4px * 6)
    );
  padding-top: var(
    --st-group-embedded-header-min-height,
    calc(
      var(--st-group-header-control-height, 34px) +
        var(--st-group-header-top-buffer, 6px) +
        (var(--st-spacing, var(--st-default-spacing, 4px)) * 6)
    )
  );
  padding-top: calc(
      34px +
        6px +
        calc(4px * 6)
    );
  padding-top: var(
    --st-group-embedded-header-min-height,
    calc(
      var(--st-group-header-control-height, 34px) +
        var(--st-group-header-top-buffer, 6px) +
        calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 6)
    )
  );
}

.header__main {
  display: flex;
  align-items: center;
  transition:
    color 180ms var(--st-motion-ease), filter 180ms var(--st-motion-ease);
}
.header__icon-wrap {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--st-header-icon-size);
  height: var(--st-header-icon-size);
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  color: var(--state-icon-color, var(--secondary-text-color));
  isolation: isolate;
}
.header__icon-wrap.on {
    color: var(
      --state-icon-active-color,
      var(--state-icon-color, var(--primary-color))
    );
  }
.header__icon-wrap.off {
    color: var(--state-icon-color, var(--disabled-text-color));
  }
.header__icon-wrap::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(
    var(--st-header-icon-size) + (var(--st-active-icon-glow-max-size) * 2)
  );
  height: calc(
    var(--st-header-icon-size) + (var(--st-active-icon-glow-max-size) * 2)
  );
  z-index: 0;
  border-radius: 999px;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.72);
  transform-origin: center;
  background: radial-gradient(
    circle,
    color-mix(
        in srgb,
        currentColor
          var(--st-active-icon-glow-max-strength),
        transparent
      )
      0%,
    color-mix(
        in srgb,
        currentColor
          var(--st-active-icon-glow-mid-strength),
        transparent
      )
      42%,
    transparent 72%
  );
  will-change: opacity, transform;
}
@supports (color: color-mix(in lch, red, blue)) {
.header__icon-wrap::before {
  background: radial-gradient(
    circle,
    color-mix(
        in srgb,
        var(--st-active-icon-glow-color, currentColor)
          var(--st-active-icon-glow-max-strength),
        transparent
      )
      0%,
    color-mix(
        in srgb,
        var(--st-active-icon-glow-color, currentColor)
          var(--st-active-icon-glow-mid-strength),
        transparent
      )
      42%,
    transparent 72%
  );
}
}
.header__icon-wrap.slash-off::before,
.header__icon-wrap.slash-off::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(var(--st-header-icon-size) * 1.05);
  border-radius: 999px;
  pointer-events: none;
  transform-origin: center;
  z-index: 3;
}
.header__icon-wrap.slash-off::before {
  height: max(4px, calc(var(--st-header-icon-size) * 0.115));
  background: var(--ha-card-background, var(--card-background-color));
  transform: translate(-50%, calc(-50% - (var(--st-header-icon-size) * 0.055)))
    rotate(45deg);
}
.header__icon-wrap.slash-off::after {
  height: max(2px, calc(var(--st-header-icon-size) * 0.08));
  background: currentColor;
  transform: translate(-50%, -50%) rotate(45deg);
}
.header__icon {
  --iron-icon-width: var(--st-header-icon-size);
  --iron-icon-height: var(--st-header-icon-size);
  --mdc-icon-size: var(--st-header-icon-size);
  position: relative;
  z-index: 1;
  width: var(--st-header-icon-size);
  height: var(--st-header-icon-size);
  color: inherit;
  transform-origin: center;
  transition:
    color 180ms var(--st-motion-ease), transform 180ms var(--st-motion-ease), opacity 180ms var(--st-motion-ease);
}
ha-card.domain-fan:not(.state-off) .header__icon-wrap,
ha-card.humidifying .header__icon-wrap {
  --st-active-icon-glow-color: var(--primary-color);
}
ha-card.domain-fan:not(.state-off) .header__icon-wrap::before,
ha-card.humidifying .header__icon-wrap::before {
  animation: st-active-icon-glow var(--st-active-icon-glow-duration) ease-in-out
    infinite;
}
ha-card.domain-fan:not(.state-off) .header__icon {
  animation: st-fan-spin 2.4s linear infinite;
  animation: st-fan-spin var(--st-fan-spin-duration, 2.4s) linear infinite;
}
ha-card.dehumidifying .header__icon-wrap,
ha-card.drying .header__icon-wrap {
  --st-active-icon-glow-color: var(--dry-color);
}
ha-card.dehumidifying .header__icon-wrap::before,
ha-card.drying .header__icon-wrap::before {
  animation: st-active-icon-glow var(--st-active-icon-glow-duration) ease-in-out
    infinite;
}
ha-card.heating .header__icon-wrap {
  --st-active-icon-glow-color: var(--heat-color);
}
ha-card.heating .header__icon-wrap::before {
  animation: st-active-icon-glow var(--st-active-icon-glow-duration) ease-in-out
    infinite;
}
ha-card.cooling .header__icon-wrap {
  --st-active-icon-glow-color: var(--cool-color);
}
ha-card.cooling .header__icon-wrap::before {
  animation: st-active-icon-glow var(--st-active-icon-glow-duration) ease-in-out
    infinite;
}
.header__title {
  font-size: 24px;
  font-size: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  line-height: 24px;
  line-height: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: var(--ha-font-smoothing, antialiased);
  font-weight: normal;
  margin: 0;
  align-self: left;
  transition:
    color 180ms var(--st-motion-ease), filter 180ms var(--st-motion-ease);
}

.header__toggles {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0;
  margin-left: auto;
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

.header__toggle,
.entity-value.toggle-entity {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
  --st-switch-off-button-color: var(--disabled-text-color);
  --st-switch-off-track-color: color-mix(
    in srgb,
    var(--disabled-text-color) 22%,
    var(--secondary-background-color) 78%
  );
  --st-switch-on-button-color: var(--st-toggle-color, var(--primary-color));
  --st-switch-on-track-color: color-mix(
    in srgb,
    var(--st-toggle-color, var(--primary-color)) 28%,
    var(--secondary-background-color) 72%
  );
  --st-switch-hover-button-color: color-mix(
    in srgb,
    var(--st-switch-off-button-color) 50%,
    var(--st-toggle-color, var(--primary-color)) 50%
  );
  --st-switch-hover-track-color: color-mix(
    in srgb,
    var(--st-switch-off-track-color) 50%,
    var(--st-toggle-color, var(--primary-color)) 50%
  );
  --st-switch-button-color: var(--st-switch-off-button-color);
  --st-switch-track-color: var(--st-switch-off-track-color);
}

.header__toggle.on,
.entity-value.toggle-entity.state-on {
  --st-switch-button-color: var(--st-switch-on-button-color);
  --st-switch-track-color: var(--st-switch-on-track-color);
}

.current-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}

.current-wrapper.row {
    display: grid;
    grid-template-columns:
      var(--st-control-icon-size)
      minmax(0, max-content)
      var(--st-control-icon-size);
    grid-template-areas:
      'decrease value increase'
      '. label .';
    grid-column-gap: calc(var(--st-spacing, var(--st-default-spacing)) * 3);
    -moz-column-gap: calc(var(--st-spacing, var(--st-default-spacing)) * 3);
         column-gap: calc(var(--st-spacing, var(--st-default-spacing)) * 3);
    grid-row-gap: 2px;
    row-gap: 2px;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
.current-wrapper.row .thermostat-trigger.decrease {
  grid-area: decrease;
}
.current-wrapper.row .thermostat-trigger.increase {
  grid-area: increase;
}
.current-wrapper.row .current--value {
  grid-area: value;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
.current--value {
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 400;
  line-height: 22px;
  line-height: var(--st-font-size-l, 22px);
  font-size: 22px;
  font-size: var(--st-font-size-l, 22px);
  cursor: pointer;
  transition:
    color 200ms var(--st-motion-ease), transform 180ms var(--st-motion-ease), text-shadow 180ms var(--st-motion-ease);
}
@media (min-width: 768px) {
.current--value {
    font-size: 28px;
    font-size: var(--st-font-size-xl, 28px);
    line-height: 28px;
    line-height: var(--st-font-size-xl, 28px);
}
  }
.current--value.updating {
    color: var(--st-value-update-color, var(--primary-color));
    animation: st-value-pulse 520ms var(--st-motion-ease);
  }
.current--value:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-radius: var(--st-mode-border-radius, var(--st-default-mode-radius));
  }
.current--value.current--off {
  color: var(--disabled-text-color);
  font-size: 22px;
  font-size: var(--st-font-size-l, 22px);
  line-height: 22px;
  line-height: var(--st-font-size-l, 22px);
}
.current--unit {
  font-size: 20px;
  font-size: var(--st-font-size-m, var(--ha-font-size-xl, 20px));
}
.current--label {
  grid-area: label;
  margin-top: 2px;
  color: var(--secondary-text-color);
  font-size: 12px;
  font-size: var(--st-font-size-setpoint-label, var(--ha-font-size-s, 12px));
  line-height: 1.1;
  opacity: 0.68;
  pointer-events: none;
  text-align: center;
  white-space: nowrap;
}
.current-wrapper.column .current--label {
  order: 2;
  margin: 0 0 2px;
}
.thermostat-trigger {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  position: relative;
  display: inline-grid;
  align-items: center;
  justify-items: center;
  place-items: center;
  padding: 0px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: calc(var(--st-control-icon-size) + 12px);
  height: calc(var(--st-control-icon-size) + 12px);
  overflow: hidden;
  transition:
    color 180ms var(--st-motion-ease), transform 120ms var(--st-motion-ease);
}
.thermostat-trigger::before {
  content: '';
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  border-radius: inherit;
  background: currentColor;
  opacity: 0;
  transition: opacity 120ms ease;
}
.thermostat-trigger:hover::before {
  opacity: 0.08;
}
.thermostat-trigger:active {
  transform: scale(0.94);
}
.thermostat-trigger:active::before {
  opacity: 0.14;
}
.thermostat-trigger:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
.thermostat-trigger:disabled {
  cursor: default;
  color: var(--disabled-text-color);
  opacity: 0.38;
  transform: none;
}
.thermostat-trigger:disabled::before {
  display: none;
}
.thermostat-trigger ha-icon {
  --iron-icon-width: var(--st-control-icon-size);
  --iron-icon-height: var(--st-control-icon-size);
  --mdc-icon-size: var(--st-control-icon-size);
  position: relative;
  z-index: 1;
  width: var(--st-control-icon-size);
  height: var(--st-control-icon-size);
  transition: color 180ms var(--st-motion-ease);
}
.thermostat-trigger:hover ha-icon {
  color: var(--st-interactive-tint);
}
.clickable {
  cursor: pointer;
}
.controls {
  display: grid;
  grid-gap: var(--st-spacing, var(--st-default-spacing));
  gap: var(--st-spacing, var(--st-default-spacing));
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 4);
  padding: 0 var(--st-spacing, var(--st-default-spacing));
}

.modes {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0;
  padding: 0;
}

.modes.heading {
    align-items: stretch;
  }
.modes.preset {
  flex-wrap: nowrap;
}
.mode-title {
  padding: 0 16px;
  align-self: center;
  justify-self: center;
  place-self: center;
  font-size: 16px;
  font-size: var(--st-font-size-entities, var(--ha-font-size-l, 16px));
  font-weight: 300;
  white-space: nowrap;
}
.mode-item {
  position: relative;
  display: flex;
  flex: 1 1 72px;
  flex: 1 1 var(--st-mode-min-width, 72px);
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-width: min(100%, 72px);
  min-width: min(100%, var(--st-mode-min-width, 72px));
  min-height: 24px;
  padding: var(--st-spacing, var(--st-default-spacing)) 0;
  background: var(--st-mode-background, var(--st-mode-surface-background));
  color: var(--secondary-text-color);
  cursor: pointer;
  border-radius: var(--st-mode-border-radius, var(--st-default-mode-radius));
  transition:
    background-color
      var(--st-mode-transition, var(--st-default-mode-transition)), color var(--st-mode-transition, var(--st-default-mode-transition)), box-shadow var(--st-mode-transition, var(--st-default-mode-transition)), filter var(--st-mode-transition, var(--st-default-mode-transition)), transform 100ms var(--st-motion-ease);
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  overflow: hidden;
  --st-mode-tinted-hover-background: color-mix(
    in srgb,
    var(--st-mode-background, var(--secondary-background-color)) 50%,
    var(--st-mode-color, var(--primary-color)) 50%
  );
  --st-mode-accent-color: color-mix(
    in srgb,
    var(--st-mode-color, var(--primary-color)) 68%,
    var(--primary-text-color) 32%
  );
  --st-mode-active-icon-color: color-mix(
    in srgb,
    var(--st-mode-color, var(--primary-color)) 42%,
    var(--st-mode-active-color, var(--text-primary-color)) 58%
  );
  --st-mode-hover-icon-color: color-mix(
    in srgb,
    currentColor 50%,
    var(--st-mode-color, var(--primary-color)) 50%
  );
  --st-mode-active-accent-color: var(--st-mode-accent-color);
  --st-mode-neutral-hover-background: color-mix(
    in srgb,
    var(--st-mode-background, var(--secondary-background-color)) 88%,
    var(--primary-text-color) 12%
  );
}
.mode-item.on {
    --st-mode-color: var(--on-color);
  }
.mode-item.off {
    --st-mode-color: var(--off-color);
  }
.mode-item.heat {
    --st-mode-color: var(--heat-color);
  }
.mode-item.cool {
    --st-mode-color: var(--cool-color);
  }
.mode-item.heat_cool {
    --st-mode-color: var(--heat_cool-color);
  }
.mode-item.auto {
    --st-mode-color: var(--auto-color);
  }
.mode-item.dry {
    --st-mode-color: var(--dry-color);
  }
.mode-item.fan_only {
    --st-mode-color: var(--fan_only-color);
  }
.mode-item.low {
    --st-mode-color: color-mix(
      in srgb,
      var(--fan_only-color) 65%,
      var(--primary-text-color) 35%
    );
  }
.mode-item.mid,.mode-item.medium {
    --st-mode-color: var(--fan_only-color);
  }
.mode-item.high {
    --st-mode-color: color-mix(
      in srgb,
      var(--fan_only-color) 65%,
      var(--secondary-text-color) 35%
    );
  }
.mode-item:not(.active):active {
    transform: scale(0.97);
  }
.mode-item:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
.mode-item.active,.mode-item.active:hover {
    background: var(
      --st-mode-active-background,
      var(--st-mode-color, var(--primary-color))
    );
    color: var(--st-mode-active-color, var(--text-primary-color));
    box-shadow: inset 0 -2px 0
      var(
        --st-mode-active-accent-color,
        color-mix(in srgb, var(--text-primary-color) 72%, transparent)
      );
    filter: none;
    transform: none;
    transition: none;
  }
.mode-item::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  border-radius: 999px 999px 0 0;
  background: var(--st-mode-accent-color);
  opacity: 0;
  transform: scaleX(0.45);
  transform-origin: center;
  transition:
    opacity 180ms var(--st-motion-ease), transform 180ms var(--st-motion-ease);
}
.mode-item.active::after {
  background: var(
    --st-mode-active-accent-color,
    color-mix(in srgb, var(--text-primary-color) 72%, transparent)
  );
  opacity: 0.64;
  opacity: var(--st-mode-active-accent-opacity, 0.64);
  transform: scaleX(1);
  transition: none;
}
ha-card:not(.standard-visuals) .mode-item.active .mode-icon {
  color: var(--st-mode-active-icon-color);
}
.mode-item .mode-icon {
  transition:
    color 180ms var(--st-motion-ease), transform 180ms var(--st-motion-ease), opacity 180ms var(--st-motion-ease);
}
.mode-label {
  display: block;
  line-height: 1;
}

ha-card:not(.standard-visuals) .header__toggle.on .toggle-label.clickable,
ha-card:not(.standard-visuals) .entity-heading.toggle-entity.state-on ha-icon {
  color: var(--st-toggle-color, var(--primary-color));
}

ha-card:not(.standard-visuals) .header__toggle.on ha-switch,
ha-card:not(.standard-visuals) .header__toggle:hover ha-switch,
ha-card:not(.standard-visuals)
  .entities
  .entity-value.toggle-entity.state-on
  ha-switch,
ha-card:not(.standard-visuals)
  .entities
  .entity-value.toggle-entity:hover
  ha-switch {
  --ha-switch-background-color: var(--st-switch-track-color);
  --ha-switch-background-color-hover: var(--st-switch-hover-track-color);
  --ha-switch-thumb-background-color: var(--st-switch-button-color);
  --ha-switch-thumb-background-color-hover: var(--st-switch-hover-button-color);
  --ha-switch-thumb-border-color: var(--st-switch-button-color);
  --ha-switch-thumb-border-color-hover: var(--st-switch-hover-button-color);
  --ha-switch-checked-background-color: var(--st-switch-track-color);
  --ha-switch-checked-background-color-hover: var(
    --st-switch-hover-track-color
  );
  --ha-switch-checked-thumb-background-color: var(--st-switch-button-color);
  --ha-switch-checked-thumb-background-color-hover: var(
    --st-switch-hover-button-color
  );
  --ha-switch-checked-thumb-border-color: var(--st-switch-button-color);
  --ha-switch-checked-thumb-border-color-hover: var(
    --st-switch-hover-button-color
  );
  --switch-checked-button-color: var(--st-switch-button-color);
  --switch-checked-track-color: var(--st-switch-track-color);
  --switch-checked-hover-button-color: var(--st-switch-hover-button-color);
  --switch-checked-hover-track-color: var(--st-switch-hover-track-color);
  --switch-checked-focus-button-color: var(--st-switch-button-color);
  --switch-checked-focus-track-color: var(--st-switch-track-color);
  --switch-checked-pressed-button-color: var(--st-switch-button-color);
  --switch-checked-pressed-track-color: var(--st-switch-track-color);
  --mdc-theme-secondary: var(--st-switch-button-color);
  --mdc-switch-selected-handle-color: var(--st-switch-button-color);
  --mdc-switch-selected-hover-handle-color: var(--st-switch-hover-button-color);
  --mdc-switch-selected-focus-handle-color: var(--st-switch-button-color);
  --mdc-switch-selected-pressed-handle-color: var(--st-switch-button-color);
  --mdc-switch-selected-track-color: var(--st-switch-track-color);
  --mdc-switch-selected-hover-track-color: var(--st-switch-hover-track-color);
  --mdc-switch-selected-focus-track-color: var(--st-switch-track-color);
  --mdc-switch-selected-pressed-track-color: var(--st-switch-track-color);
}

@media (hover: hover) {
  ha-card:not(.standard-visuals) .toggle-label.clickable:hover,
  ha-card:not(.standard-visuals) .header__toggle:hover .toggle-label.clickable {
    color: color-mix(
      in srgb,
      var(--st-toggle-label-color, var(--primary-text-color)) 50%,
      var(--st-toggle-color, var(--primary-color)) 50%
    );
    filter: brightness(1.04);
  }

  ha-card:not(.standard-visuals)
    .entity-heading.toggle-entity.clickable:hover
    ha-icon {
    color: color-mix(
      in srgb,
      var(--st-toggle-label-color, var(--primary-text-color)) 50%,
      var(--st-toggle-color, var(--primary-color)) 50%
    );
    filter: brightness(1.04);
  }

  ha-card:not(.standard-visuals) .header__toggle:hover ha-switch,
  ha-card:not(.standard-visuals)
    .entities
    .entity-value.toggle-entity:hover
    ha-switch {
    --st-switch-button-color: var(--st-switch-hover-button-color);
    --st-switch-track-color: var(--st-switch-hover-track-color);
  }

  ha-card:not(.standard-visuals) .entity-heading.clickable:hover,
  ha-card:not(.standard-visuals) .entity-value.clickable:hover,
  ha-card:not(.standard-visuals) .current--value:hover {
    color: var(--st-interactive-tint);
    filter: brightness(1.04);
  }

  ha-card:not(.standard-visuals) .header__main.clickable:hover .header__title {
    color: var(--st-interactive-tint);
    filter: brightness(1.04);
  }

  .mode-item:not(.active):hover {
    background: var(
      --st-mode-hover-background,
      var(--st-mode-neutral-hover-background)
    );
    color: var(--st-mode-hover-color, var(--primary-text-color));
    filter: brightness(1.04);
    transform: translateY(-1px);
  }

  .mode-item.on:not(.active):hover,
  .mode-item.off:not(.active):hover,
  .mode-item.heat:not(.active):hover,
  .mode-item.cool:not(.active):hover,
  .mode-item.heat_cool:not(.active):hover,
  .mode-item.auto:not(.active):hover,
  .mode-item.dry:not(.active):hover,
  .mode-item.fan_only:not(.active):hover,
  .modes.preset .mode-item:not(.active):hover,
  .modes.fan .mode-item:not(.active):hover,
  .modes.fan-preset .mode-item:not(.active):hover,
  .modes.swing .mode-item:not(.active):hover,
  .modes.swing_horizontal .mode-item:not(.active):hover,
  .modes.swing_vertical .mode-item:not(.active):hover,
  .modes.vane_horizontal .mode-item:not(.active):hover,
  .modes.vane_vertical .mode-item:not(.active):hover {
    background: var(--st-mode-tinted-hover-background);
  }

  .mode-item:not(.active):hover .mode-icon {
    color: var(--st-mode-hover-icon-color);
    transform: translateY(-1px);
  }

  .mode-item:not(.active):hover::after {
    opacity: 0.64;
    transform: scaleX(1);
  }

  .mode-item.active:hover {
    color: var(--st-mode-active-color, var(--text-primary-color));
  }

  ha-card.standard-visuals .mode-item:hover {
    background: var(--st-mode-background, var(--secondary-background-color));
    color: var(--secondary-text-color);
    filter: none;
    transform: none;
  }

  ha-card.standard-visuals .mode-item.active:hover {
    background: var(
      --st-mode-active-background,
      var(--st-mode-color, var(--primary-color))
    );
    color: var(--st-mode-active-color, var(--text-primary-color));
  }

  ha-card.standard-visuals .mode-item:hover .mode-icon {
    transform: none;
  }
}

ha-card.heating {
  --st-value-update-color: var(--heat-color);
}
ha-card.cooling {
  --st-value-update-color: var(--cool-color);
}
ha-card.domain-fan {
  --st-value-update-color: var(--on-color);
}
ha-card.humidifying,
ha-card.dehumidifying,
ha-card.drying {
  --st-value-update-color: var(--primary-color);
}

@media (prefers-reduced-motion: reduce) {
  ha-card.loading {
    animation: none;
  }

  .header__icon,
  .current--value,
  .mode-item,
  .mode-item::after,
  .mode-icon,
  .thermostat-trigger,
  .thermostat-trigger::before {
    animation: none !important;
    transition: none;
  }

  .mode-item:active {
    transform: none;
  }

  .thermostat-trigger:active {
    transform: none;
  }
}
.modes.hvac .mode-item,
.modes.state .mode-item {
  flex-direction: row;
  flex-basis: 0;
  gap: 8px;
  min-width: min(100%, 120px);
  min-width: min(100%, var(--st-hvac-mode-min-width, 120px));
  min-height: calc(var(--st-control-icon-size) + 8px);
  padding-top: var(--st-spacing, var(--st-default-spacing));
  padding-bottom: var(--st-spacing, var(--st-default-spacing));
}

.modes.hvac.sparse .mode-item,
.modes.state.sparse .mode-item {
  gap: 2px;
  gap: var(--st-sparse-control-gap, 2px);
  min-width: 0;
  min-height: calc(var(--st-control-icon-size) + 8px);
  padding-top: var(--st-spacing, var(--st-default-spacing));
  padding-bottom: var(--st-spacing, var(--st-default-spacing));
}

.modes.hvac.sparse .mode-label,
.modes.state.sparse .mode-label {
  white-space: nowrap;
}

@media (max-width: 560px) {
  .modes.hvac .mode-item,
  .modes.state .mode-item {
    flex-direction: column;
    gap: 4px;
    min-width: min(100%, 72px);
    min-width: min(100%, var(--st-mode-min-width, 72px));
  }

  ha-card:not(.standard-visuals) .modes.hvac.sparse .mode-item,
  ha-card:not(.standard-visuals) .modes.state.sparse .mode-item {
    flex-direction: row;
    gap: 2px;
    gap: var(--st-sparse-control-gap, 2px);
    min-width: 0;
  }
}
.modes.dense {
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
}

.modes.dense .mode-item {
  min-width: 0;
  min-height: calc(var(--st-preset-icon-size) + 8px);
}

.modes.fan.dense .mode-item {
  flex-direction: column;
  gap: 0;
}

.modes.hvac.dense .mode-item {
  flex-direction: column;
  gap: 0;
  min-width: 0;
}

.modes.dense .mode-icon {
  --iron-icon-width: var(--st-preset-icon-size);
  --iron-icon-height: var(--st-preset-icon-size);
  --mdc-icon-size: var(--st-preset-icon-size);
  position: static;
  top: auto;
  width: var(--st-preset-icon-size);
  height: var(--st-preset-icon-size);
}

.modes.hvac.dense .mode-icon,
.modes.state.dense .mode-icon {
  --iron-icon-width: var(--st-control-icon-size);
  --iron-icon-height: var(--st-control-icon-size);
  --mdc-icon-size: var(--st-control-icon-size);
  width: var(--st-control-icon-size);
  height: var(--st-control-icon-size);
}

.modes.dense .mode-label {
  display: block;
  min-height: 0;
}
.mode-icon {
  --iron-icon-width: var(--st-control-icon-size);
  --iron-icon-height: var(--st-control-icon-size);
  --mdc-icon-size: var(--st-control-icon-size);
  width: var(--st-control-icon-size);
  height: var(--st-control-icon-size);
  display: block;
}
.modes.preset .mode-icon {
  --iron-icon-width: var(--st-preset-icon-size);
  --iron-icon-height: var(--st-preset-icon-size);
  --mdc-icon-size: var(--st-preset-icon-size);
  width: var(--st-preset-icon-size);
  height: var(--st-preset-icon-size);
}
.custom-mode-icon {
  display: block;
  color: currentColor;
}
.modes.preset .mode-item {
  --st-mode-min-width: 58px;
  flex: 1 1 0;
  min-width: 0;
  font-size: 12px;
  font-size: var(--st-font-size-preset, var(--ha-font-size-s, 12px));
}
.modes.preset.compact .mode-item {
  --st-mode-min-width: 88px;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-size: var(--st-compact-mode-font-size, var(--ha-font-size-m, 14px));
}
.modes.preset.compact .mode-icon {
  --iron-icon-width: var(--st-compact-mode-icon-size, 20px);
  --iron-icon-height: var(--st-compact-mode-icon-size, 20px);
  --mdc-icon-size: var(--st-compact-mode-icon-size, 20px);
  position: relative;
  top: -2px;
  width: 20px;
  width: var(--st-compact-mode-icon-size, 20px);
  height: 20px;
  height: var(--st-compact-mode-icon-size, 20px);
  flex: 0 0 auto;
}
.modes.preset.compact .mode-label {
  display: flex;
  align-items: center;
  min-height: 20px;
  min-height: var(--st-compact-mode-icon-size, 20px);
}
.modes.swing .mode-item,
.modes.swing_horizontal .mode-item,
.modes.swing_vertical .mode-item,
.modes.vane_horizontal .mode-item,
.modes.vane_vertical .mode-item {
  --st-mode-min-width: 58px;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  min-height: 20px;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 12px;
  font-size: var(--st-font-size-preset, var(--ha-font-size-s, 12px));
}
.modes.fan .mode-icon,
.modes.fan-preset .mode-icon {
  --iron-icon-width: var(--st-compact-mode-icon-size, 20px);
  --iron-icon-height: var(--st-compact-mode-icon-size, 20px);
  --mdc-icon-size: var(--st-compact-mode-icon-size, 20px);
  position: relative;
  top: -2px;
  width: 20px;
  width: var(--st-compact-mode-icon-size, 20px);
  height: 20px;
  height: var(--st-compact-mode-icon-size, 20px);
}
.modes.fan .mode-item,
.modes.fan-preset .mode-item {
  --st-mode-color: var(--fan_only-color);
  --st-mode-min-width: 88px;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-size: var(--st-compact-mode-font-size, var(--ha-font-size-m, 14px));
}
.modes.fan .mode-icon,
.modes.fan-preset .mode-icon {
  flex: 0 0 auto;
}
.modes.fan .mode-label,
.modes.fan-preset .mode-label {
  display: flex;
  align-items: center;
  min-height: 20px;
  min-height: var(--st-compact-mode-icon-size, 20px);
}

.header__toggle ha-switch {
  padding: 0;
}

.entities .entity-value ha-switch {
  padding: 0 6px;
}
.side-by-side {
  display: flex;
  align-items: center;
}
.side-by-side > * {
  flex: 1;
  padding-right: 4px;
}

ha-card.standard-visuals {
  display: block;
}

ha-card.loading.standard-visuals {
  background: var(--card-background-color);
  animation: none;
}

ha-card.standard-visuals .header__icon-wrap,
ha-card.standard-visuals .header__icon,
ha-card.standard-visuals .current--value,
ha-card.standard-visuals .mode-item,
ha-card.standard-visuals .mode-icon,
ha-card.standard-visuals .thermostat-trigger {
  animation: none;
  filter: none;
  text-shadow: none;
  transition: none;
}

ha-card.standard-visuals .toggle-label,
ha-card.standard-visuals .entity-heading,
ha-card.standard-visuals .entity-value,
ha-card.standard-visuals .header__main {
  transition: none;
}

ha-card.standard-visuals header {
  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 6)
    calc(var(--st-spacing, var(--st-default-spacing)) * 2)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}

ha-card.standard-visuals .header__toggles {
  margin-right: 0;
}

ha-card.standard-visuals .header__icon-wrap {
  width: auto;
  height: auto;
  margin-right: 0;
}

ha-card.standard-visuals .header__icon {
  --iron-icon-width: 24px;
  --iron-icon-height: 24px;
  --mdc-icon-size: 24px;
  width: 24px;
  height: 24px;
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

ha-card.standard-visuals .entities {
  padding-top: 0;
  padding-bottom: 0;
}

ha-card.standard-visuals .entity-heading {
  justify-self: auto;
}

ha-card.standard-visuals .body {
  grid-auto-columns: minmax(min-content, auto);
  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

ha-card.standard-visuals .body + .controls {
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}

ha-card.standard-visuals .current-wrapper {
  flex-wrap: wrap;
}

ha-card.standard-visuals .current-wrapper.row {
  -moz-column-gap: 0;
       column-gap: 0;
}

ha-card.standard-visuals .current-wrapper.row .current--value {
  overflow: visible;
}

ha-card.standard-visuals .current--value.updating {
  color: var(--error-color);
}

ha-card.standard-visuals .thermostat-trigger {
  display: inline-block;
  width: auto;
  height: auto;
  border-radius: 0;
  overflow: visible;
}

ha-card.standard-visuals .thermostat-trigger ha-icon {
  --iron-icon-width: 24px;
  --iron-icon-height: 24px;
  --mdc-icon-size: 24px;
  width: 24px;
  height: 24px;
}

ha-card.standard-visuals .controls {
  display: block;
  gap: 0;
  padding: 0;
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}

ha-card.standard-visuals .modes,
ha-card.standard-visuals .modes.hvac,
ha-card.standard-visuals .modes.state,
ha-card.standard-visuals .modes.preset,
ha-card.standard-visuals .modes.preset.compact,
ha-card.standard-visuals .modes.fan,
ha-card.standard-visuals .modes.fan-preset,
ha-card.standard-visuals .modes.swing,
ha-card.standard-visuals .modes.swing_horizontal,
ha-card.standard-visuals .modes.swing_vertical,
ha-card.standard-visuals .modes.vane_horizontal,
ha-card.standard-visuals .modes.vane_vertical {
  display: grid;
  grid-template-columns: none;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  margin-top: 0;
  padding: var(--st-spacing, var(--st-default-spacing));
}

ha-card.standard-visuals .mode-item,
ha-card.standard-visuals .modes.hvac .mode-item,
ha-card.standard-visuals .modes.state .mode-item,
ha-card.standard-visuals .modes.preset .mode-item,
ha-card.standard-visuals .modes.preset.compact .mode-item,
ha-card.standard-visuals .modes.fan .mode-item,
ha-card.standard-visuals .modes.fan-preset .mode-item,
ha-card.standard-visuals .modes.swing .mode-item,
ha-card.standard-visuals .modes.swing_horizontal .mode-item,
ha-card.standard-visuals .modes.swing_vertical .mode-item,
ha-card.standard-visuals .modes.vane_horizontal .mode-item,
ha-card.standard-visuals .modes.vane_vertical .mode-item {
  display: flex;
  flex: initial;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  min-width: 0;
  min-height: 24px;
  padding: var(--st-spacing, var(--st-default-spacing)) 0;
  font-size: inherit;
  line-height: 1.5;
  line-height: var(--ha-line-height-normal, 1.5);
}

ha-card.standard-visuals .mode-icon,
ha-card.standard-visuals .modes.preset .mode-icon,
ha-card.standard-visuals .modes.preset.compact .mode-icon,
ha-card.standard-visuals .modes.fan .mode-icon,
ha-card.standard-visuals .modes.fan-preset .mode-icon {
  --iron-icon-width: 24px;
  --iron-icon-height: 24px;
  --mdc-icon-size: 24px;
  position: static;
  top: auto;
  width: 24px;
  height: 24px;
  flex: initial;
}

ha-card.standard-visuals .mode-label,
ha-card.standard-visuals .modes.preset.compact .mode-label,
ha-card.standard-visuals .modes.fan .mode-label,
ha-card.standard-visuals .modes.fan-preset .mode-label {
  display: block;
  min-height: 0;
  line-height: inherit;
}

ha-card.standard-visuals .modes.heading {
  grid-template-columns: min-content;
}

ha-card.standard-visuals .header__icon-wrap.slash-off::before,
ha-card.standard-visuals .header__icon-wrap.slash-off::after,
ha-card.standard-visuals .mode-item::after,
ha-card.standard-visuals .thermostat-trigger::before {
  display: none;
}

ha-card.standard-visuals .mode-item.active {
  box-shadow: none;
}

ha-card .mode-item.active.off,
ha-card .mode-item.active.off:hover {
  background: var(--off-color);
  --st-mode-active-background: var(--off-color);
}

ha-card .mode-item.active.heat,
ha-card .mode-item.active.heat:hover {
  background: var(--heat-color);
  --st-mode-active-background: var(--heat-color);
}

ha-card .mode-item.active.cool,
ha-card .mode-item.active.cool:hover {
  background: var(--cool-color);
  --st-mode-active-background: var(--cool-color);
}

ha-card .mode-item.active.heat_cool,
ha-card .mode-item.active.heat_cool:hover {
  background: var(--heat_cool-color);
  --st-mode-active-background: var(--heat_cool-color);
}

ha-card .mode-item.active.auto,
ha-card .mode-item.active.auto:hover {
  background: var(--auto-color);
  --st-mode-active-background: var(--auto-color);
}

ha-card .mode-item.active.dry,
ha-card .mode-item.active.dry:hover {
  background: var(--dry-color);
  --st-mode-active-background: var(--dry-color);
}

ha-card .mode-item.active.fan_only,
ha-card .mode-item.active.fan_only:hover {
  background: var(--fan_only-color);
  --st-mode-active-background: var(--fan_only-color);
}

ha-card.standard-visuals .mode-item.active.off {
  background: var(--off-color);
}

ha-card.standard-visuals .mode-item.active.heat {
  background: var(--heat-color);
}

ha-card.standard-visuals .mode-item.active.cool {
  background: var(--cool-color);
}

ha-card.standard-visuals .mode-item.active.heat_cool {
  background: var(--heat_cool-color);
}

ha-card.standard-visuals .mode-item.active.auto {
  background: var(--auto-color);
}

ha-card.standard-visuals .mode-item.active.dry {
  background: var(--dry-color);
}

ha-card.standard-visuals .mode-item.active.fan_only {
  background: var(--fan_only-color);
}

ha-card.standard-visuals .mode-item:active,
ha-card.standard-visuals .thermostat-trigger:active {
  transform: none;
}

.card-config {
  display: block;
}

.editor-extra-entities {
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  padding-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  border-top: 1px solid var(--divider-color);
}

.editor-extra-entities__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  margin-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

.editor-extra-entities h3 {
  margin: 0;
  color: var(--primary-text-color);
  font-size: 16px;
  font-size: var(--ha-font-size-l, 16px);
  font-weight: 500;
  font-weight: var(--ha-font-weight-medium, 500);
}

.editor-extra-entities p {
  margin: calc(var(--st-spacing, var(--st-default-spacing)) / 2) 0 0;
  color: var(--secondary-text-color);
}

.editor-extra-entities__empty {
  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  border: 1px dashed var(--divider-color);
  border-radius: 8px;
  border-radius: var(--st-mode-radius, 8px);
}

.editor-entity-row {
  display: grid;
  grid-template-columns: minmax(180px, 1fr) minmax(120px, 0.7fr) auto auto;
  align-items: center;
  grid-gap: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  gap: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

@media (max-width: 720px) {
  .editor-extra-entities__header,
  .editor-entity-row {
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }
}

.editor-footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 3);
}

.editor-footer__hint {
  color: var(--secondary-text-color);
}

.editor-footer__version {
  margin-left: auto;
  color: var(--secondary-text-color);
  font-size: 12px;
  font-size: var(--ha-font-size-s, 12px);
}
`;
styleInject(css_248z);

function fireEvent(node, type, detail, options = {}) {
    options = options || {};
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed,
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
}

var MODES;
(function (MODES) {
    MODES["HVAC"] = "hvac";
    MODES["FAN"] = "fan";
    MODES["STATE"] = "state";
    MODES["PRESET"] = "preset";
    MODES["SWING"] = "swing";
    MODES["SWING_HORIZONTAL"] = "swing_horizontal";
    MODES["SWING_VERTICAL"] = "swing_vertical";
    MODES["VANE_HORIZONTAL"] = "vane_horizontal";
    MODES["VANE_VERTICAL"] = "vane_vertical";
    MODES["DIRECTION"] = "direction";
    MODES["OSCILLATING"] = "oscillating";
    MODES["MODE"] = "mode";
})(MODES || (MODES = {}));

function normalizeEntities(entities) {
    if (!Array.isArray(entities))
        return entities;
    return entities.map((entity) => {
        const { label, ...normalizedEntity } = entity;
        if (!normalizedEntity.name && label) {
            normalizedEntity.name = label;
        }
        return normalizedEntity;
    });
}
function importLegacySensors(config) {
    if (!Array.isArray(config.sensors))
        return;
    const entities = [];
    config.sensors.forEach((sensor) => {
        const legacySensor = sensor;
        if (legacySensor.id === 'temperature') {
            if (legacySensor.label) {
                config.label = {
                    ...(config.label ?? {}),
                    temperature: legacySensor.label,
                };
            }
            if (legacySensor.show === false) {
                config.hide = {
                    ...(config.hide ?? {}),
                    temperature: true,
                };
            }
            return;
        }
        if (legacySensor.id === 'state') {
            if (legacySensor.label) {
                config.label = {
                    ...(config.label ?? {}),
                    state: legacySensor.label,
                };
            }
            if (legacySensor.show === false) {
                config.hide = {
                    ...(config.hide ?? {}),
                    state: true,
                };
            }
            return;
        }
        entities.push(sensor);
    });
    config.entities = normalizeEntities(entities);
}
function normalizeConfig(config) {
    const normalized = {
        ...config,
        layout: config.layout ? { ...config.layout } : undefined,
    };
    const legacyVersion = normalized.version === 3;
    if (legacyVersion && !normalized.layout?.step) {
        normalized.layout = {
            ...(normalized.layout ?? {}),
            step: 'column',
        };
    }
    if (!normalized.current_value_entity &&
        normalized.current_temperature_entity) {
        normalized.current_value_entity = normalized.current_temperature_entity;
    }
    if (typeof normalized.entities === 'undefined' &&
        typeof normalized.sensors !== 'undefined') {
        importLegacySensors(normalized);
    }
    normalized.entities = normalizeEntities(normalized.entities);
    if (normalized.layout &&
        typeof normalized.layout.entities === 'undefined' &&
        typeof normalized.layout.sensors !== 'undefined') {
        normalized.layout.entities = normalized.layout.sensors;
    }
    delete normalized.current_temperature_entity;
    delete normalized.sensors;
    delete normalized.layout?.sensors;
    delete normalized.version;
    return normalized;
}

const DUAL = 'dual';
const SINGLE = 'single';
function getEntityType(attributes) {
    if (typeof attributes.target_temp_high === 'number' &&
        typeof attributes.target_temp_low === 'number') {
        return DUAL;
    }
    return SINGLE;
}

const climateAdapter = {
    getSetpoints(attributes) {
        if (getEntityType(attributes) === DUAL) {
            return {
                target_temp_low: attributes.target_temp_low,
                target_temp_high: attributes.target_temp_high,
            };
        }
        return {
            temperature: attributes.temperature,
        };
    },
    getRange(attributes) {
        return {
            min: attributes?.min_temp ?? null,
            max: attributes?.max_temp ?? null,
            step: attributes?.target_temp_step ?? null,
        };
    },
    getCurrentValue(attributes) {
        return attributes?.current_temperature ?? null;
    },
    getCurrentValueTemplate() {
        return '{{current_temperature|formatNumber}}';
    },
    getSetpointService() {
        return { domain: 'climate', service: 'set_temperature' };
    },
    getModeService(type) {
        if (type === 'vane_horizontal' || type === 'vane_vertical') {
            return `set_${type}`;
        }
        return `set_${type}_mode`;
    },
    getModePayloadKey(type) {
        if (type === 'vane_horizontal' || type === 'vane_vertical')
            return type;
        return `${type}_mode`;
    },
    getModeAttribute(type) {
        if (type === 'vane_horizontal' || type === 'vane_vertical') {
            return `${type}_positions`;
        }
        return `${type}_modes`;
    },
    getDefaultControl() {
        return ['hvac', 'preset'];
    },
    getLocalizationDomain() {
        return 'climate';
    },
};

const fanAdapter = {
    getSetpoints(attributes) {
        if (typeof attributes?.percentage !== 'number') {
            return {};
        }
        return {
            percentage: attributes.percentage,
        };
    },
    getRange(attributes) {
        const percentageStep = Number(attributes?.percentage_step);
        const step = Number.isFinite(percentageStep) && percentageStep > 0
            ? percentageStep
            : 1;
        return { min: 0, max: 100, step };
    },
    getCurrentValue(attributes) {
        return attributes?.current_temperature ?? attributes?.temperature ?? null;
    },
    getCurrentValueUnit(attributes, hassConfig) {
        if (attributes?.current_temperature !== null &&
            typeof attributes?.current_temperature !== 'undefined') {
            return hassConfig?.unit_system?.temperature ?? false;
        }
        if (attributes?.temperature !== null &&
            typeof attributes?.temperature !== 'undefined') {
            return (attributes?.unit_of_measurement ??
                hassConfig?.unit_system?.temperature ??
                false);
        }
        return false;
    },
    getCurrentValueTemplate() {
        return '{{current_temperature|formatNumber}}';
    },
    getSetpointService() {
        return { domain: 'fan', service: 'set_percentage' };
    },
    getModeService(type) {
        if (type === 'state')
            return 'turn_on';
        if (type === 'direction')
            return 'set_direction';
        if (type === 'oscillating')
            return 'oscillate';
        return `set_${type}_mode`;
    },
    getModePayloadKey(type) {
        if (type === 'state')
            return 'state';
        if (type === 'direction')
            return 'direction';
        if (type === 'oscillating')
            return 'oscillating';
        return `${type}_mode`;
    },
    getModeAttribute(type) {
        if (type === 'state')
            return 'state';
        if (type === 'direction')
            return 'direction';
        if (type === 'oscillating')
            return 'oscillating';
        return `${type}_modes`;
    },
    getDefaultControl() {
        return ['preset', 'direction', 'oscillating', 'state'];
    },
    transformModePayloadValue(type, value) {
        if (type === 'oscillating')
            return value === 'true';
        return value;
    },
    getLocalizationDomain() {
        return 'fan';
    },
};

const humidifierAdapter = {
    getSetpoints(attributes) {
        return {
            humidity: attributes?.humidity,
        };
    },
    getRange(attributes) {
        return {
            min: attributes?.min_humidity ?? 0,
            max: attributes?.max_humidity ?? 100,
            step: 1,
        };
    },
    getCurrentValue(attributes) {
        return attributes?.current_humidity ?? null;
    },
    getCurrentValueTemplate() {
        return '{{current_humidity|formatNumber}}';
    },
    getSetpointService() {
        return { domain: 'humidifier', service: 'set_humidity' };
    },
    getModeService(type) {
        if (type === 'state')
            return 'turn_on';
        if (type === 'mode')
            return 'set_mode';
        return `set_${type}`;
    },
    getModePayloadKey(type) {
        if (type === 'state')
            return 'state';
        if (type === 'mode')
            return 'mode';
        return type;
    },
    getModeAttribute(type) {
        if (type === 'state')
            return 'state';
        if (type === 'mode')
            return 'available_modes';
        return `${type}_modes`;
    },
    getDefaultControl() {
        return ['mode', 'state'];
    },
    getLocalizationDomain() {
        return 'humidifier';
    },
};

const adapters = {
    climate: climateAdapter,
    fan: fanAdapter,
    humidifier: humidifierAdapter,
};
function getAdapter(entityId) {
    if (!entityId)
        return climateAdapter;
    const domain = entityId.split('.')[0];
    return adapters[domain] ?? climateAdapter;
}

const BUILD_TIME = process.env.BUILD_TIME;
const GithubReadMe = 'https://github.com/Wheemer/simple-thermostat/blob/master/README.md';
const SUPPORTED_ENTITY_DOMAINS = ['climate', 'fan', 'humidifier'];
const CONTROL_TYPES = [
    MODES.HVAC,
    MODES.FAN,
    MODES.STATE,
    MODES.PRESET,
    MODES.SWING,
    MODES.SWING_HORIZONTAL,
    MODES.SWING_VERTICAL,
    MODES.VANE_HORIZONTAL,
    MODES.VANE_VERTICAL,
    MODES.DIRECTION,
    MODES.OSCILLATING,
    MODES.MODE,
];
const MODE_TYPES$1 = Object.values(MODES);
const CONTROL_LABELS = {
    [MODES.HVAC]: 'HVAC modes',
    [MODES.FAN]: 'Fan modes',
    [MODES.STATE]: 'On/off state',
    [MODES.PRESET]: 'Preset modes',
    [MODES.SWING]: 'Swing modes',
    [MODES.SWING_HORIZONTAL]: 'Horizontal swing',
    [MODES.SWING_VERTICAL]: 'Vertical swing',
    [MODES.VANE_HORIZONTAL]: 'Horizontal vane',
    [MODES.VANE_VERTICAL]: 'Vertical vane',
    [MODES.DIRECTION]: 'Direction',
    [MODES.OSCILLATING]: 'Oscillating',
    [MODES.MODE]: 'Modes',
};
const stub = {
    header: {},
    layout: {
        mode: {},
    },
};
const LABELS = {
    entity: 'Entity (required)',
    current_value_entity: 'Current value source',
    show_header: 'Show header',
    name: 'Name',
    icon: 'Icon',
    'toggle.entity': 'Toggle entity',
    'toggle.name': 'Toggle label',
    'toggle.icon': 'Toggle icon',
    'layout.mode.names': 'Mode names',
    'layout.mode.icons': 'Mode icons',
    'layout.mode.headings': 'Mode headings',
    decimals: 'Decimals',
    unit: 'Unit',
    'layout.step': 'Step layout',
    step_size: 'Step size',
    setpoint_debounce_ms: 'Target debounce',
    fallback: 'Fallback text',
    'hide.temperature': 'Hide current value',
    hide_current_value_when_off: 'Hide current value while off',
    'hide.state': 'Hide state',
    'hide.setpoint_label': 'Hide target label',
    hide_setpoint_when_off: 'Hide target controls while off',
    hide_setpoint: 'Hide target controls',
    disable_setpoint_change_when_off: 'Disable target changes while off',
    'label.temperature': 'Current value label',
    'label.state': 'State label',
    'label.setpoint': 'Target label',
    'layout.entities.type': 'Entity row layout',
    'layout.entities.labels': 'Show entity row labels',
    'layout.entities.separator': 'Show entity label separator',
    'layout.entities.alignment': 'Entity label alignment',
    enhanced_visuals: 'Enhanced visuals',
    'tap_action.action': 'Tap action',
    'hold_action.action': 'Hold action',
    'double_tap_action.action': 'Double-tap action',
};
for (const type of CONTROL_TYPES) {
    LABELS[`control.${type}`] = CONTROL_LABELS[type];
}
const cloneDeep = (obj) => typeof structuredClone === 'function'
    ? structuredClone(obj)
    : JSON.parse(JSON.stringify(obj));
const nonEmptySchema = (item) => !Array.isArray(item.schema) || item.schema.length !== 0;
const ACTION_OPTIONS = [
    { value: 'more-info', label: 'More info' },
    { value: 'toggle', label: 'Toggle' },
    { value: 'none', label: 'None' },
];
const STEP_LAYOUT_OPTIONS = [
    { value: 'row', label: 'Row' },
    { value: 'column', label: 'Column' },
];
const STEP_SIZE_OPTIONS = [
    { value: 'auto', label: 'Auto (from entity)' },
    { value: '0.1', label: '0.1' },
    { value: '0.5', label: '0.5' },
    { value: '1', label: '1' },
];
const ENTITY_LAYOUT_OPTIONS = [
    { value: 'table', label: 'Table' },
    { value: 'list', label: 'List' },
];
const ENTITY_ALIGNMENT_OPTIONS = [
    { value: 'right', label: 'Right' },
    { value: 'left', label: 'Left' },
];
const DIRECT_FORM_PATHS = [
    'entity',
    'current_value_entity',
    'decimals',
    'unit',
    'fallback',
    'layout.step',
    'layout.mode.names',
    'layout.mode.icons',
    'layout.mode.headings',
    'layout.entities.type',
    'layout.entities.labels',
    'layout.entities.separator',
    'layout.entities.alignment',
    'setpoint_debounce_ms',
    'hide.temperature',
    'hide_current_value_when_off',
    'hide.state',
    'hide.setpoint_label',
    'hide_setpoint_when_off',
    'hide_setpoint',
    'disable_setpoint_change_when_off',
    'label.temperature',
    'label.state',
    'label.setpoint',
    'tap_action.action',
    'hold_action.action',
    'double_tap_action.action',
];
const HEADER_FORM_PATHS = [
    'show_header',
    'name',
    'icon',
    'toggle.entity',
    'toggle.name',
    'toggle.icon',
];
const valueChanged = (before, after) => before !== after;
function getChangedFormPaths(current, updated) {
    return new Set(Object.keys(updated).filter((path) => valueChanged(current[path], updated[path])));
}
function ignoreImplicitDefaultChanges(changedPaths, config) {
    if (!changedPaths.has('enhanced_visuals'))
        return;
    if (!config.layout?.step) {
        changedPaths.delete('layout.step');
    }
}
function setNested(obj, path, value) {
    const parts = path.split('.');
    let target = obj;
    while (parts.length > 1) {
        const part = parts.shift();
        if (!Object.prototype.hasOwnProperty.call(target, part))
            target[part] = {};
        target = target[part];
    }
    target[parts[0]] = value;
}
function deleteNested(obj, path) {
    const parts = path.split('.');
    let target = obj;
    while (parts.length > 1) {
        const part = parts.shift();
        if (!target[part])
            return;
        target = target[part];
    }
    delete target[parts[0]];
}
function isModeEnabled(config, type, adapter) {
    const control = config.control;
    if (control === false)
        return false;
    if (Array.isArray(control))
        return control.includes(type);
    if (control && typeof control === 'object') {
        return control[type] !== undefined && control[type] !== false;
    }
    return adapter.getDefaultControl().includes(type);
}
function getDefaultControlData(config) {
    const adapter = getAdapter(config.entity);
    return CONTROL_TYPES.reduce((result, type) => {
        result[`control.${type}`] = isModeEnabled(config, type, adapter);
        return result;
    }, {});
}
function getSupportedControlTypes(config, hass) {
    if (!config.entity || !hass?.states?.[config.entity]) {
        return [];
    }
    const entity = hass.states[config.entity];
    const attributes = entity.attributes ?? {};
    const [entityDomain] = config.entity.split('.');
    const adapter = getAdapter(config.entity);
    return CONTROL_TYPES.filter((type) => MODE_TYPES$1.includes(type) &&
        (type === MODES.STATE
            ? entityDomain === 'fan' || entityDomain === 'humidifier'
            : typeof attributes[adapter.getModeAttribute(type)] !== 'undefined'));
}
function getControlFromForm(updated, config, hass) {
    const entity = String(updated.entity ?? config.entity ?? '');
    const adapter = getAdapter(entity);
    const supportedControlTypes = getSupportedControlTypes({
        ...config,
        entity,
    }, hass);
    const desired = supportedControlTypes.filter((type) => updated[`control.${type}`]);
    const defaultControl = adapter.getDefaultControl();
    if (desired.length === 0)
        return false;
    if (config.control &&
        !Array.isArray(config.control) &&
        typeof config.control === 'object') {
        const desiredSet = new Set(desired.map(String));
        const configuredOrder = getConfiguredControlOrder(config.control).filter((type) => desiredSet.has(type));
        const appendedOrder = desired.filter((type) => !configuredOrder.includes(type));
        const orderedTypes = [...configuredOrder, ...appendedOrder];
        return orderedTypes.reduce((result, type) => {
            result[type] = materializeModeOptionOrder(config.control[type] || {}).value;
            return result;
        }, { _order: orderedTypes });
    }
    if (desired.length === defaultControl.length &&
        desired.every((type, index) => type === defaultControl[index])) {
        return undefined;
    }
    return desired;
}
function isControlObject(control) {
    return !!control && typeof control === 'object' && !Array.isArray(control);
}
function isModeControlObject(value) {
    return !!value && typeof value === 'object' && !Array.isArray(value);
}
function getConfiguredControlOrder(control) {
    const explicitOrder = control._order;
    const configuredTypes = Object.keys(control).filter((key) => !key.startsWith('_'));
    if (!Array.isArray(explicitOrder))
        return configuredTypes;
    const used = new Set();
    const ordered = explicitOrder
        .map(String)
        .filter((type) => configuredTypes.includes(type))
        .filter((type) => {
        if (used.has(type))
            return false;
        used.add(type);
        return true;
    });
    configuredTypes.forEach((type) => {
        if (!used.has(type))
            ordered.push(type);
    });
    return ordered;
}
function areStringArraysEqual(a, b) {
    return (a.length === b.length &&
        a.every((value, index) => String(value) === b[index]));
}
function materializeModeOptionOrder(value) {
    if (!isModeControlObject(value))
        return { value, changed: false };
    const optionKeys = Object.keys(value).filter((key) => !key.startsWith('_'));
    if (optionKeys.length === 0 && !Array.isArray(value._order)) {
        return { value, changed: false };
    }
    const nextOrder = Array.isArray(value._order)
        ? value._order.map(String)
        : optionKeys;
    const changed = !Array.isArray(value._order) ||
        !areStringArraysEqual(value._order, nextOrder);
    return {
        value: {
            ...value,
            _order: nextOrder,
        },
        changed,
    };
}
function materializeControlOrder(config) {
    if (!isControlObject(config.control))
        return { config, changed: false };
    const control = config.control;
    const orderedTypes = getConfiguredControlOrder(control);
    if (orderedTypes.length === 0 && !Array.isArray(control._order)) {
        return { config, changed: false };
    }
    let changed = Array.isArray(control._order) &&
        !areStringArraysEqual(control._order, orderedTypes);
    const nextConfig = {
        ...config,
        control: orderedTypes.reduce((result, type) => {
            const materialized = materializeModeOptionOrder(control[type]);
            result[type] = materialized.value;
            changed = changed || materialized.changed;
            return result;
        }, (Array.isArray(control._order)
            ? { _order: orderedTypes }
            : {})),
    };
    return { config: changed ? nextConfig : config, changed };
}
function buildSchema(config, hass) {
    const supportedControlTypes = getSupportedControlTypes(config, hass);
    const entityDomain = config.entity?.split('.')[0];
    const adapter = getAdapter(config.entity);
    const entity = config.entity ? hass?.states?.[config.entity] : undefined;
    const hasSetpoints = config.hide_setpoint === true ||
        !entity ||
        Object.keys(adapter.getSetpoints(entity.attributes ?? {})).length > 0;
    const hasCurrentValue = entityDomain !== 'fan' &&
        (entityDomain === 'climate' || entityDomain === 'humidifier');
    const currentValueSchema = entityDomain === 'fan'
        ? []
        : [
            {
                name: 'current_value_entity',
                selector: { entity: { domain: ['sensor', 'input_number'] } },
            },
        ];
    const visibilitySchema = [
        ...(hasCurrentValue
            ? [
                { name: 'hide.temperature', selector: { boolean: {} } },
                { name: 'hide_current_value_when_off', selector: { boolean: {} } },
            ]
            : []),
        { name: 'hide.state', selector: { boolean: {} } },
    ];
    const labelsSchema = [
        ...(hasCurrentValue
            ? [{ name: 'label.temperature', selector: { text: {} } }]
            : []),
        { name: 'label.state', selector: { text: {} } },
        ...(hasSetpoints
            ? [{ name: 'label.setpoint', selector: { text: {} } }]
            : []),
    ];
    const headerSchema = config.header === false
        ? []
        : [
            {
                type: 'grid',
                schema: [
                    { name: 'name', selector: { text: {} } },
                    { name: 'icon', selector: { icon: {} } },
                ],
            },
            { name: 'toggle.entity', selector: { entity: {} } },
            { name: 'toggle.name', selector: { text: {} } },
            ...(config.header &&
                typeof config.header === 'object' &&
                config.header.toggle?.entity
                ? [{ name: 'toggle.icon', selector: { icon: {} } }]
                : []),
        ];
    const schema = [
        {
            name: 'entity',
            required: true,
            selector: { entity: { domain: SUPPORTED_ENTITY_DOMAINS } },
        },
        {
            type: 'expandable',
            title: 'Card header',
            schema: [
                { name: 'show_header', selector: { boolean: {} } },
                ...headerSchema,
            ],
        },
        ...(supportedControlTypes.length > 0
            ? [
                {
                    type: 'expandable',
                    title: 'Controls',
                    schema: [
                        {
                            type: 'grid',
                            column_min_width: '150px',
                            schema: supportedControlTypes.map((type) => ({
                                name: `control.${type}`,
                                selector: { boolean: {} },
                            })),
                        },
                    ],
                },
            ]
            : []),
        ...(hasSetpoints
            ? [
                {
                    type: 'expandable',
                    title: 'Target',
                    schema: [
                        {
                            type: 'grid',
                            schema: [
                                {
                                    name: 'layout.step',
                                    selector: {
                                        select: {
                                            mode: 'dropdown',
                                            options: STEP_LAYOUT_OPTIONS,
                                        },
                                    },
                                },
                                {
                                    name: 'step_size',
                                    selector: {
                                        select: {
                                            mode: 'dropdown',
                                            options: STEP_SIZE_OPTIONS,
                                        },
                                    },
                                },
                            ],
                        },
                        {
                            type: 'grid',
                            column_min_width: '160px',
                            schema: [
                                { name: 'hide_setpoint', selector: { boolean: {} } },
                                {
                                    name: 'hide_setpoint_when_off',
                                    selector: { boolean: {} },
                                },
                                { name: 'hide.setpoint_label', selector: { boolean: {} } },
                                {
                                    name: 'disable_setpoint_change_when_off',
                                    selector: { boolean: {} },
                                },
                            ],
                        },
                    ],
                },
            ]
            : []),
        {
            type: 'expandable',
            title: 'Extra entity rows',
            schema: [
                {
                    type: 'grid',
                    column_min_width: '160px',
                    schema: [
                        {
                            name: 'layout.entities.type',
                            selector: {
                                select: {
                                    mode: 'dropdown',
                                    options: ENTITY_LAYOUT_OPTIONS,
                                },
                            },
                        },
                        { name: 'layout.entities.labels', selector: { boolean: {} } },
                        { name: 'layout.entities.separator', selector: { boolean: {} } },
                        {
                            name: 'layout.entities.alignment',
                            selector: {
                                select: {
                                    mode: 'dropdown',
                                    options: ENTITY_ALIGNMENT_OPTIONS,
                                },
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: 'expandable',
            title: 'Appearance',
            schema: [
                { name: 'enhanced_visuals', selector: { boolean: {} } },
                {
                    type: 'grid',
                    column_min_width: '160px',
                    schema: visibilitySchema,
                },
            ].filter(nonEmptySchema),
        },
        {
            type: 'expandable',
            title: 'Advanced',
            schema: [
                ...currentValueSchema,
                ...(hasCurrentValue
                    ? [
                        {
                            type: 'grid',
                            schema: [
                                {
                                    name: 'decimals',
                                    selector: {
                                        number: { min: 0, max: 5, step: 1, mode: 'box' },
                                    },
                                },
                                { name: 'unit', selector: { text: {} } },
                            ],
                        },
                    ]
                    : []),
                { name: 'fallback', selector: { text: {} } },
                {
                    name: 'setpoint_debounce_ms',
                    selector: { number: { min: 0, step: 100, mode: 'box' } },
                },
                {
                    type: 'grid',
                    column_min_width: '160px',
                    schema: labelsSchema,
                },
                {
                    type: 'grid',
                    column_min_width: '150px',
                    schema: [
                        { name: 'layout.mode.names', selector: { boolean: {} } },
                        { name: 'layout.mode.icons', selector: { boolean: {} } },
                        { name: 'layout.mode.headings', selector: { boolean: {} } },
                    ],
                },
                {
                    type: 'grid',
                    column_min_width: '150px',
                    schema: [
                        {
                            name: 'tap_action.action',
                            selector: {
                                select: {
                                    mode: 'dropdown',
                                    options: ACTION_OPTIONS,
                                },
                            },
                        },
                        {
                            name: 'hold_action.action',
                            selector: {
                                select: {
                                    mode: 'dropdown',
                                    options: ACTION_OPTIONS,
                                },
                            },
                        },
                        {
                            name: 'double_tap_action.action',
                            selector: {
                                select: {
                                    mode: 'dropdown',
                                    options: ACTION_OPTIONS,
                                },
                            },
                        },
                    ],
                },
            ].filter(nonEmptySchema),
        },
    ];
    return schema;
}
class SimpleThermostatEditor extends i$1 {
    constructor() {
        super(...arguments);
        this._valueChanged = (ev) => {
            const copy = this._applyFormChange(ev.detail.value);
            this.config = copy;
            fireEvent(this, 'config-changed', { config: copy });
        };
        this._computeLabel = (schema) => LABELS[String(schema.name)] ?? String(schema.name);
    }
    static get styles() {
        return css_248z;
    }
    static getStubConfig() {
        return { ...stub };
    }
    setConfig(config) {
        const materialized = materializeControlOrder(normalizeConfig(config || { ...stub }));
        this.config = materialized.config;
        if (materialized.changed) {
            queueMicrotask(() => {
                if (this.config === materialized.config) {
                    fireEvent(this, 'config-changed', { config: materialized.config });
                }
            });
        }
    }
    _openLink() {
        window.open(GithubReadMe, '_blank', 'noopener');
    }
    _buildFormData() {
        const header = this.config.header && typeof this.config.header === 'object'
            ? this.config.header
            : {};
        return {
            entity: this.config.entity ?? '',
            current_value_entity: this.config.current_value_entity ?? '',
            show_header: this.config.header !== false,
            'layout.mode.names': this.config.layout?.mode?.names !== false,
            'layout.mode.icons': this.config.layout?.mode?.icons !== false,
            'layout.mode.headings': this.config.layout?.mode?.headings === true,
            decimals: this.config.decimals ?? '',
            unit: typeof this.config.unit === 'string' ? this.config.unit : '',
            'layout.step': this.config.enhanced_visuals === false
                ? (this.config.layout?.step ?? 'column')
                : (this.config.layout?.step ?? 'row'),
            step_size: this.config.step_size != null ? String(this.config.step_size) : 'auto',
            fallback: this.config.fallback ?? '',
            setpoint_debounce_ms: this.config.setpoint_debounce_ms ?? '',
            'hide.temperature': this.config.hide?.temperature === true,
            hide_current_value_when_off: this.config.hide_current_value_when_off === true ||
                this.config.hide?.current_value_when_off === true ||
                this.config.hide?.temperature_when_off === true,
            'hide.state': this.config.hide?.state === true,
            hide_setpoint: this.config.hide_setpoint === true,
            disable_setpoint_change_when_off: this.config.disable_setpoint_change_when_off === true,
            'hide.setpoint_label': this.config.hide?.setpoint_label === true,
            hide_setpoint_when_off: this.config.hide_setpoint_when_off === true ||
                this.config.hide?.setpoint_when_off === true,
            'label.temperature': this.config.label?.temperature ?? '',
            'label.state': this.config.label?.state ?? '',
            'label.setpoint': this.config.label?.setpoint ?? '',
            'layout.entities.type': this.config.layout?.entities?.type ?? 'table',
            'layout.entities.labels': this.config.layout?.entities?.labels !== false,
            'layout.entities.separator': this.config.layout?.entities?.separator !== false,
            'layout.entities.alignment': this.config.layout?.entities?.alignment ?? 'right',
            enhanced_visuals: this.config.enhanced_visuals !== false,
            name: header.name ?? '',
            icon: typeof header.icon === 'string' ? header.icon : '',
            'toggle.entity': header.toggle?.entity ?? '',
            'toggle.name': header.toggle?.name ?? '',
            'toggle.icon': typeof header.toggle?.icon === 'string' ? header.toggle.icon : '',
            'tap_action.action': this.config.tap_action?.action ?? 'more-info',
            'hold_action.action': this.config.hold_action?.action ?? 'none',
            'double_tap_action.action': this.config.double_tap_action?.action ?? 'none',
            ...getDefaultControlData(this.config),
        };
    }
    _applyFormChange(updated) {
        const currentFormData = this._buildFormData();
        const changedPaths = getChangedFormPaths(currentFormData, updated);
        ignoreImplicitDefaultChanges(changedPaths, this.config);
        const formData = { ...currentFormData, ...updated };
        const copy = cloneDeep(this.config);
        this._applyDirectFormPaths(copy, formData, changedPaths);
        if (formData.enhanced_visuals === false) {
            copy.enhanced_visuals = false;
        }
        else {
            delete copy.enhanced_visuals;
        }
        if (HEADER_FORM_PATHS.some((path) => changedPaths.has(path))) {
            if (formData.show_header === false) {
                copy.header = false;
            }
            else {
                this._applyHeaderFormChange(copy, formData);
            }
        }
        if (changedPaths.has('step_size')) {
            this._applyStepSize(copy, formData.step_size);
        }
        if (changedPaths.has('entity') ||
            CONTROL_TYPES.some((type) => changedPaths.has(`control.${type}`))) {
            const control = getControlFromForm(formData, this.config, this.hass);
            if (typeof control === 'undefined')
                delete copy.control;
            else
                copy.control = control;
        }
        return copy;
    }
    _applyDirectFormPaths(copy, updated, changedPaths) {
        for (const path of DIRECT_FORM_PATHS) {
            if (!changedPaths.has(path))
                continue;
            const newValue = updated[path];
            if (newValue === undefined || newValue === null || newValue === '') {
                deleteNested(copy, path);
            }
            else {
                setNested(copy, path, newValue);
            }
        }
    }
    _applyHeaderFormChange(copy, updated) {
        if (copy.header === false || copy.header == null)
            copy.header = {};
        const header = copy.header;
        const headerName = updated.name;
        const headerIcon = updated.icon;
        const toggleEntity = updated['toggle.entity'];
        const toggleLabel = updated['toggle.name'];
        const toggleIcon = updated['toggle.icon'];
        if (typeof headerName === 'string' && headerName)
            header.name = headerName;
        else
            delete header.name;
        if (typeof headerIcon === 'string' && headerIcon)
            header.icon = headerIcon;
        else
            delete header.icon;
        if (typeof toggleEntity === 'string' && toggleEntity) {
            header.toggle = header.toggle || { entity: toggleEntity };
            header.toggle.entity = toggleEntity;
            if (typeof toggleLabel === 'string' && toggleLabel) {
                header.toggle.name = toggleLabel;
            }
            else {
                delete header.toggle.name;
            }
            if (typeof toggleIcon === 'string' && toggleIcon) {
                header.toggle.icon = toggleIcon;
            }
            else {
                delete header.toggle.icon;
            }
        }
        else {
            delete header.toggle;
        }
    }
    _applyStepSize(copy, value) {
        if (value === 'auto' || value === '' || value == null) {
            delete copy.step_size;
            return;
        }
        const stepSize = Number(value);
        copy.step_size = Number.isNaN(stepSize) ? value : stepSize;
    }
    _getExtraEntities() {
        return Array.isArray(this.config.entities) ? this.config.entities : [];
    }
    _commitEntityRows(entities) {
        const copy = cloneDeep(this.config);
        if (entities.length > 0)
            copy.entities = entities;
        else
            delete copy.entities;
        this.config = copy;
        fireEvent(this, 'config-changed', { config: copy });
    }
    _addEntityRow() {
        this._commitEntityRows([...this._getExtraEntities(), { entity: '' }]);
    }
    _removeEntityRow(index) {
        this._commitEntityRows(this._getExtraEntities().filter((_, entityIndex) => entityIndex !== index));
    }
    _updateEntityRow(index, field, value) {
        const entities = this._getExtraEntities().map((entity, entityIndex) => {
            if (entityIndex !== index)
                return entity;
            const next = { ...entity };
            if (typeof value === 'string' && value)
                next[field] = value;
            else
                delete next[field];
            return next;
        });
        this._commitEntityRows(entities);
    }
    _renderExtraEntityRows() {
        const entities = this._getExtraEntities();
        return b `
      <section class="editor-extra-entities">
        <div class="editor-extra-entities__header">
          <div>
            <h3>Extra entity rows</h3>
            <p>Add the sensors or helpers shown under the main state.</p>
          </div>
          <ha-button @click=${this._addEntityRow}>Add row</ha-button>
        </div>

        ${entities.length === 0
            ? b `<p class="editor-extra-entities__empty">
              No extra rows configured.
            </p>`
            : entities.map((entity, index) => b `
                <div class="editor-entity-row">
                  <ha-entity-picker
                    .hass=${this.hass}
                    .value=${entity.entity ?? ''}
                    allow-custom-entity
                    @value-changed=${(ev) => this._updateEntityRow(index, 'entity', ev.detail.value)}
                  ></ha-entity-picker>
                  <ha-textfield
                    label="Name"
                    .value=${entity.name ?? ''}
                    @input=${(ev) => this._updateEntityRow(index, 'name', ev.target.value)}
                  ></ha-textfield>
                  <ha-icon-picker
                    .hass=${this.hass}
                    .value=${entity.icon ?? ''}
                    @value-changed=${(ev) => this._updateEntityRow(index, 'icon', ev.detail.value)}
                  ></ha-icon-picker>
                  <ha-button @click=${() => this._removeEntityRow(index)}>
                    Remove
                  </ha-button>
                </div>
              `)}
      </section>
    `;
    }
    render() {
        if (!this.hass || !this.config)
            return b ``;
        return b `
      <div class="card-config">
        <ha-form
          .hass=${this.hass}
          .data=${this._buildFormData()}
          .schema=${buildSchema(this.config, this.hass)}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._valueChanged}
        ></ha-form>

        ${this._renderExtraEntityRows()}

        <div class="editor-footer">
          <ha-button @click=${this._openLink}>
            <ha-svg-icon .path=${mdiBookOpenVariant} slot="icon"></ha-svg-icon>
            All configuration options
          </ha-button>
          <span class="editor-footer__hint">
            YAML remains available for specialized setups
          </span>
          <span class="editor-footer__version"
            >v${version} - ${BUILD_TIME}</span
          >
        </div>
      </div>
    `;
    }
}
__decorate([
    r$2()
], SimpleThermostatEditor.prototype, "config", void 0);
__decorate([
    n$2({ attribute: false })
], SimpleThermostatEditor.prototype, "hass", void 0);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r$1=o=>void 0===o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={CHILD:2},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=(i,t)=>{const e=i._$AN;if(void 0===e)return  false;for(const i of e)i._$AO?.(t,false),s(i,t);return  true},o$2=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c(t);}};function h(i){ void 0!==this._$AN?(o$2(this),this._$AM=i,r(this)):this._$AM=i;}function n$1(i,t=false,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],false),o$2(r[i]);else null!=r&&(s(r,false),o$2(r));else s(this,i);}const c=i=>{i.type==t.CHILD&&(i._$AP??=n$1,i._$AQ??=h);};class f extends i{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=true){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s(this,i),o$2(this));}setValue(t){if(r$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

const o$1=new WeakMap,n=e$1(class extends f{render(i){return A}update(i,[s]){const e=s!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),A}rt(t){if(void 0!==this.G)if(this.isConnected||(t=void 0),"function"==typeof this.G){const i=this.ht??globalThis;let s=o$1.get(i);void 0===s&&(s=new WeakMap,o$1.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ht,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ht,t);}else this.G.value=t;}get lt(){return "function"==typeof this.G?o$1.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0);}reconnected(){this.rt(this.ct);}});

const SUPPORTED_DOMAINS$1 = ['climate', 'fan', 'humidifier'];
const DEFAULT_SELECTOR$1 = {
    icons: true,
    names: true,
    states: false,
};
function toEditableTarget(target) {
    if (typeof target === 'string')
        return { entity: target };
    const header = target?.header && typeof target.header === 'object' ? target.header : {};
    return {
        ...target,
        entity: target?.entity ?? '',
        name: target?.name ?? header.name,
        icon: target?.icon ?? header.icon,
    };
}
function normalizeTargets(config) {
    const targets = (config.cards ?? config.entities ?? []).map(toEditableTarget);
    return targets.length ? targets : [{ entity: '' }, { entity: '' }];
}
class SimpleThermostatGroupEditor extends i$1 {
    constructor() {
        super(...arguments);
        this.config = { entities: [] };
        this.expandedTargetIndex = null;
        this.editorConfigKeys = new WeakMap();
    }
    static get styles() {
        return i$4 `
      :host {
        display: block;
      }

      .section {
        display: grid;
        gap: 16px;
      }

      .target {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 8px;
        align-items: end;
        padding: 12px;
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
        border-radius: 8px;
      }

      .editor-section {
        display: grid;
        gap: 10px;
      }

      .section-heading {
        display: grid;
        gap: 2px;
      }

      .section-heading h3 {
        margin: 0;
        color: var(--primary-text-color);
        font-size: var(--ha-font-size-l, 16px);
        font-weight: 500;
      }

      .section-heading p {
        margin: 0;
        color: var(--secondary-text-color);
        font-size: var(--ha-font-size-s, 13px);
        line-height: 1.35;
      }

      .target-fields {
        display: grid;
        gap: 8px;
      }

      .target-meta {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }

      .actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .target-actions {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
      }

      .target-editor {
        grid-column: 1 / -1;
        border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
        margin-top: 4px;
        padding-top: 12px;
      }

      .selector-options {
        display: grid;
        gap: 8px;
      }

      .option-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 40px;
      }

      .option-text {
        display: grid;
        gap: 2px;
        min-width: 0;
      }

      .option-title {
        color: var(--primary-text-color);
        font-size: var(--ha-font-size-m, 14px);
      }

      .option-description {
        color: var(--secondary-text-color);
        font-size: var(--ha-font-size-s, 13px);
        line-height: 1.25;
      }

      ha-icon-button {
        color: var(--secondary-text-color);
      }

      @media (max-width: 500px) {
        .target {
          grid-template-columns: 1fr;
        }

        .target-actions {
          flex-direction: row;
          justify-content: flex-end;
        }

        .target-meta {
          grid-template-columns: 1fr;
        }
      }
    `;
    }
    setConfig(config) {
        this.config = { ...config };
    }
    commit(config) {
        const cleanConfig = this.cleanConfig(config);
        this.config = cleanConfig;
        fireEvent(this, 'config-changed', { config: cleanConfig });
    }
    cleanConfig(config) {
        const clean = { ...config };
        for (const key of Object.keys(clean)) {
            if (clean[key] === undefined) {
                delete clean[key];
            }
        }
        if (clean.selector && Object.keys(clean.selector).length === 0) {
            delete clean.selector;
        }
        return clean;
    }
    getTargets() {
        return normalizeTargets(this.config);
    }
    updateTarget(index, patch) {
        const targets = this.getTargets();
        targets[index] = { ...targets[index], ...patch };
        this.commitTargets(targets);
    }
    cleanTargets(targets) {
        return targets.map((target) => {
            const entity = target.entity?.trim() ?? '';
            const name = target.name?.trim();
            const icon = target.icon?.trim();
            const { name: _name, icon: _icon, entity: _entity, ...rest } = target;
            if (!name && !icon && Object.keys(rest).length === 0)
                return entity;
            return {
                ...rest,
                entity,
                ...(name ? { name } : {}),
                ...(icon ? { icon } : {}),
            };
        });
    }
    addTarget() {
        const targets = [...this.getTargets(), { entity: '' }];
        this.commitTargets(targets);
    }
    removeTarget(index) {
        const targets = this.getTargets().filter((_, targetIndex) => targetIndex !== index);
        this.commitTargets(targets.length ? targets : [{ entity: '' }]);
    }
    commitTargets(targets) {
        const { entities: _entities, ...config } = this.config;
        this.commit({ ...config, cards: this.cleanTargets(targets) });
    }
    updateSelector(path, value) {
        const selector = { ...(this.config.selector ?? {}) };
        const boolValue = Boolean(value);
        if (boolValue === DEFAULT_SELECTOR$1[path]) {
            delete selector[path];
        }
        else {
            selector[path] = boolValue;
        }
        this.commit({ ...this.config, selector });
    }
    isAutoSelectEnabled() {
        const autoSelect = this.config.auto_select;
        return (autoSelect === true ||
            autoSelect === 'recent_activity' ||
            (typeof autoSelect === 'object' &&
                autoSelect?.mode === 'recent_activity'));
    }
    updateAutoSelect(enabled) {
        const { auto_select: _autoSelect, ...config } = this.config;
        this.commit({
            ...config,
            ...(enabled ? { auto_select: { mode: 'recent_activity' } } : {}),
        });
    }
    updateRememberSelection(enabled) {
        const { remember_selection: _rememberSelection, ...config } = this.config;
        this.commit({
            ...config,
            ...(enabled ? {} : { remember_selection: false }),
        });
    }
    updateStorageKey(value) {
        const storageKey = value.trim();
        const { storage_key: _storageKey, ...config } = this.config;
        this.commit({
            ...config,
            ...(storageKey ? { storage_key: storageKey } : {}),
        });
    }
    getTargetCardConfig(target) {
        const { name: name$1, icon, ...config } = target;
        const header = config.header && typeof config.header === 'object'
            ? { ...config.header }
            : {};
        if (name$1 && config.header !== false && typeof header.name === 'undefined') {
            header.name = name$1;
        }
        if (icon && config.header !== false && typeof header.icon === 'undefined') {
            header.icon = icon;
        }
        return {
            type: config.type ?? `custom:${name}`,
            ...config,
            ...(config.header === false ? { header: false } : { header }),
        };
    }
    configureNestedEditor(element, target) {
        if (!element)
            return;
        const editor = element;
        const config = this.getTargetCardConfig(target);
        const key = JSON.stringify(config);
        editor.hass = this.hass;
        if (this.editorConfigKeys.get(element) !== key) {
            editor.setConfig?.(config);
            this.editorConfigKeys.set(element, key);
        }
    }
    updateTargetCardConfig(index, ev) {
        ev.stopPropagation();
        const targets = this.getTargets();
        targets[index] = toEditableTarget(ev.detail.config);
        this.commitTargets(targets);
    }
    toggleTargetEditor(index) {
        this.expandedTargetIndex =
            this.expandedTargetIndex === index ? null : index;
    }
    renderEntityPicker(target, index) {
        return b `
      <ha-entity-picker
        .hass=${this.hass}
        .value=${target.entity}
        .includeDomains=${SUPPORTED_DOMAINS$1}
        allow-custom-entity
        label="Entity"
        @value-changed=${(ev) => this.updateTarget(index, { entity: ev.detail.value })}
      ></ha-entity-picker>
    `;
    }
    renderTarget(target, index) {
        const expanded = this.expandedTargetIndex === index;
        return b `
      <div class="target">
        <div class="target-fields">
          ${this.renderEntityPicker(target, index)}
          <div class="target-meta">
            <ha-textfield
              label="Name"
              .value=${target.name ?? ''}
              @input=${(ev) => this.updateTarget(index, {
            name: ev.currentTarget.value,
        })}
            ></ha-textfield>
            <ha-icon-picker
              .hass=${this.hass}
              label="Icon"
              .value=${target.icon ?? ''}
              @value-changed=${(ev) => this.updateTarget(index, { icon: ev.detail.value })}
            ></ha-icon-picker>
          </div>
        </div>
        <div class="target-actions">
          <ha-button size="s" @click=${() => this.toggleTargetEditor(index)}>
            ${expanded ? 'Close' : 'Configure'}
          </ha-button>
          ${this.getTargets().length > 1
            ? b `
                <ha-icon-button
                  label="Remove"
                  .path=${'M19,13H5V11H19V13Z'}
                  @click=${() => this.removeTarget(index)}
                ></ha-icon-button>
              `
            : A}
        </div>
        ${expanded
            ? b `
              <div class="target-editor">
                <simple-thermostat-editor
                  .hass=${this.hass}
                  ${n((element) => this.configureNestedEditor(element, target))}
                  @config-changed=${(ev) => this.updateTargetCardConfig(index, ev)}
                ></simple-thermostat-editor>
              </div>
            `
            : A}
      </div>
    `;
    }
    render() {
        const selector = this.config.selector ?? {};
        const targets = this.getTargets();
        return b `
      <div class="section editor-section">
        <div class="section-heading">
          <h3>Cards</h3>
          <p>Choose the cards this group switches between.</p>
        </div>
        ${targets.map((target, index) => this.renderTarget(target, index))}
        <div class="actions">
          <ha-button size="s" @click=${this.addTarget}>Add card</ha-button>
        </div>
      </div>

      <div class="editor-section">
        <div class="section-heading">
          <h3>Behavior</h3>
          <p>Control how the group chooses and labels the active card.</p>
        </div>
        <div class="selector-options">
          ${this.renderOption('Follow active device', 'Switch to a card when its mode or on/off activity changes.', this.isAutoSelectEnabled(), (checked) => this.updateAutoSelect(checked))}
          ${this.renderOption('Remember selection', 'Keep the last selected card after the dashboard reloads.', this.config.remember_selection !== false, (checked) => this.updateRememberSelection(checked))}
          ${this.renderOption('Show icons', 'Show each card icon in the selector and menu.', selector.icons !== false, (checked) => this.updateSelector('icons', checked))}
          ${this.renderOption('Show names', 'Show card names in the selector and menu.', selector.names !== false, (checked) => this.updateSelector('names', checked))}
          ${this.renderOption('Show states', 'Show current states in the selector menu.', selector.states === true, (checked) => this.updateSelector('states', checked))}
        </div>
        <ha-textfield
          label="Storage key"
          .value=${this.config.storage_key ?? ''}
          @input=${(ev) => this.updateStorageKey(ev.target.value)}
        ></ha-textfield>
      </div>
    `;
    }
    renderOption(title, description, checked, update) {
        return b `
      <div class="option-row">
        <div class="option-text">
          <span class="option-title">${title}</span>
          <span class="option-description">${description}</span>
        </div>
        <ha-switch
          .checked=${checked}
          @change=${(ev) => update(ev.currentTarget.checked)}
        ></ha-switch>
      </div>
    `;
    }
}
__decorate([
    n$2({ attribute: false })
], SimpleThermostatGroupEditor.prototype, "hass", void 0);
__decorate([
    r$2()
], SimpleThermostatGroupEditor.prototype, "config", void 0);
__decorate([
    r$2()
], SimpleThermostatGroupEditor.prototype, "expandedTargetIndex", void 0);

function getEntityActionAttribute(entity) {
    if (typeof entity.entity_id !== 'string')
        return undefined;
    const [domain] = entity.entity_id.split('.');
    if (domain === 'climate')
        return 'hvac_action';
    if (domain === 'humidifier')
        return 'action';
    return undefined;
}
function getEntityAction(entity) {
    const attribute = getEntityActionAttribute(entity);
    const action = attribute ? entity.attributes?.[attribute] : undefined;
    return typeof action === 'string' && action ? action : undefined;
}
function getEntityActionLocalizationPrefix(entity) {
    if (typeof entity.entity_id !== 'string')
        return '';
    const [domain] = entity.entity_id.split('.');
    const attribute = getEntityActionAttribute(entity);
    if (domain && attribute)
        return `state_attributes.${domain}.${attribute}.`;
    return '';
}
function getEntityStateText(entity, hass, localize) {
    if (typeof entity.entity_id !== 'string') {
        return typeof entity.state === 'undefined' ? '' : String(entity.state);
    }
    const [domain] = entity.entity_id.split('.');
    const action = getEntityAction(entity);
    const actionAttribute = getEntityActionAttribute(entity);
    if (action) {
        return typeof hass.formatEntityAttributeValue === 'function' &&
            actionAttribute
            ? hass.formatEntityAttributeValue(entity, actionAttribute)
            : localize(action, getEntityActionLocalizationPrefix(entity));
    }
    if (domain === 'fan' && entity.state === 'on') {
        if (entity.attributes?.preset_mode) {
            return typeof hass.formatEntityAttributeValue === 'function'
                ? hass.formatEntityAttributeValue(entity, 'preset_mode')
                : localize(entity.attributes.preset_mode, 'state_attributes.fan.preset_mode.');
        }
        if (typeof entity.attributes?.percentage === 'number') {
            return `${entity.attributes.percentage}%`;
        }
        if (entity.attributes?.speed) {
            return String(entity.attributes.speed);
        }
    }
    return typeof hass.formatEntityState === 'function'
        ? hass.formatEntityState(entity)
        : localize(String(entity.state), `component.${domain}.state._.`);
}

const STATE_ICONS = {
    auto: 'mdi:radiator',
    cooling: 'mdi:snowflake',
    fan: 'mdi:fan',
    heating: 'mdi:radiator',
    idle: 'mdi:radiator-disabled',
    on: 'mdi:power',
    off: 'mdi:radiator-off',
};
const CLIMATE_COOLING_STATE_ICONS = {
    auto: 'mdi:air-conditioner',
    cooling: 'mdi:snowflake',
    fan: 'mdi:fan',
    heating: 'mdi:radiator',
    idle: 'mdi:air-conditioner',
    on: 'mdi:air-conditioner',
    off: 'mdi:air-conditioner',
};
const CLIMATE_HEATING_STATE_ICONS = {
    ...STATE_ICONS,
    auto: 'mdi:radiator',
    idle: STATE_ICONS.idle,
    off: 'mdi:radiator',
};
const DOMAIN_STATE_ICONS = {
    fan: {
        on: 'mdi:fan',
        off: 'mdi:fan-off',
    },
    humidifier: {
        on: 'mdi:air-humidifier',
        off: 'mdi:air-humidifier-off',
    },
};
const MODE_ICONS = {
    auto: 'hass:autorenew',
    cool: 'hass:snowflake',
    dry: 'hass:water-percent',
    fan_only: 'hass:fan',
    heat_cool: 'hass:autorenew',
    heat: 'hass:fire',
    on: 'hass:power',
    off: 'hass:power',
    forward: 'mdi:arrow-right',
    reverse: 'mdi:arrow-left',
    true: 'mdi:fan',
    false: 'mdi:fan-off',
    low: 'mdi:fan-speed-1',
    mid: 'mdi:fan-speed-2',
    medium: 'mdi:fan-speed-2',
    high: 'mdi:fan-speed-3',
    max: 'st:fan-speed-4',
    turbo: 'st:fan-speed-5',
    '1': 'mdi:fan-speed-1',
    '2': 'mdi:fan-speed-2',
    '3': 'mdi:fan-speed-3',
    '4': 'st:fan-speed-4',
    '5': 'st:fan-speed-5',
    automatic: 'mdi:fan-auto',
    powerful: 'mdi:fan-plus',
    quiet: 'mdi:fan-minus',
    silent: 'mdi:fan-minus',
    normal: 'mdi:water-percent',
    vertical: 'mdi:arrow-up-down',
    top: 'mdi:arrow-up',
    'top-middle': 'mdi:arrow-top-right',
    middle: 'mdi:arrow-collapse-vertical',
    'middle-bottom': 'mdi:arrow-bottom-right',
    bottom: 'mdi:arrow-down',
    upper: 'mdi:arrow-up',
    lower: 'mdi:arrow-down',
    horizontal: 'mdi:arrow-left-right',
    left: 'mdi:arrow-left',
    'center-left': 'mdi:arrow-top-left',
    center: 'mdi:arrow-collapse-horizontal',
    'center-right': 'mdi:arrow-top-right',
    right: 'mdi:arrow-right',
    both: 'mdi:arrow-all',
    swing: 'mdi:arrow-oscillating',
    wide: 'mdi:arrow-expand-horizontal',
    narrow: 'mdi:arrow-collapse-horizontal',
    split: 'mdi:arrow-split-vertical',
    none: 'mdi:circle-off-outline',
    away: 'mdi:home-export-outline',
    eco: 'mdi:leaf',
    boost: 'mdi:weather-windy',
    comfort: 'mdi:sofa',
    auto_comfort: 'mdi:sofa',
    'auto-comfort': 'mdi:sofa',
    'auto comfort': 'mdi:sofa',
    home: 'mdi:home',
    sleep: 'mdi:sleep',
    activity: 'mdi:run',
};
function getModeIcon(mode) {
    const modeKey = String(mode);
    const normalizedModeKey = modeKey.toLowerCase().replace(/\s+/g, '_');
    return MODE_ICONS[modeKey] ?? MODE_ICONS[normalizedModeKey];
}
function getModeName(mode) {
    const modeKey = String(mode);
    const normalizedModeKey = modeKey.toLowerCase().replace(/\s+/g, '_');
    const modeNames = {
        low: 'Low',
        mid: 'Mid',
        medium: 'Medium',
        high: 'High',
        max: 'Max',
        turbo: 'Turbo',
        auto: 'Auto',
    };
    return modeNames[normalizedModeKey] ?? modeKey;
}
function parseHeaderConfig(config, entity, hass, enhancedVisuals = true) {
    if (config === false)
        return false;
    let name;
    if (typeof config?.name === 'string') {
        name = config.name;
    }
    else if (config?.name === false) {
        name = false;
    }
    else {
        name =
            typeof hass.formatEntityName === 'function'
                ? hass.formatEntityName(entity)
                : entity.attributes.friendly_name;
    }
    let icon = enhancedVisuals
        ? getDefaultHeaderIcon(entity)
        : getLegacyHeaderIcon(entity);
    if (typeof config?.icon !== 'undefined') {
        icon = config.icon;
    }
    return {
        name,
        icon,
        slashOffIcon: enhancedVisuals && shouldSlashOffIcon(entity, icon),
        toggle: config?.toggle ? parseToggle(config.toggle, hass) : null,
        toggles: parseToggles(config, hass),
        faults: parseFaults(config?.faults, hass),
    };
}
function parseToggle(config, hass) {
    const entity = hass.states[config.entity];
    if (!entity)
        return null;
    let label = '';
    if (config?.name === true) {
        label = entity.attributes.friendly_name;
    }
    else {
        label = config?.name ?? '';
    }
    return {
        entity,
        label,
        icon: config?.icon ?? false,
        hide_when_off: config?.hide_when_off,
    };
}
function parseToggles(config, hass) {
    const toggleConfigs = [
        ...(config?.toggle ? [config.toggle] : []),
        ...(Array.isArray(config?.toggles) ? config.toggles : []),
    ];
    return toggleConfigs
        .map((toggle) => parseToggle(toggle, hass))
        .filter((toggle) => !!toggle);
}
function getDefaultHeaderIcon(entity) {
    const [entityDomain] = entity.entity_id.split('.');
    const action = getEntityAction(entity);
    const climateActionIcons = action ? getClimateHeaderIcons(entity) : undefined;
    return (climateActionIcons ??
        entity.attributes.icon ??
        getClimateHeaderIcons(entity) ??
        DOMAIN_STATE_ICONS[entityDomain]?.[entity.state] ??
        (action ? STATE_ICONS : MODE_ICONS));
}
function getLegacyHeaderIcon(entity) {
    return getEntityAction(entity) ? STATE_ICONS : MODE_ICONS;
}
function getClimateHeaderIcons(entity) {
    const [entityDomain] = entity.entity_id.split('.');
    if (entityDomain !== 'climate')
        return undefined;
    const hvacModes = Array.isArray(entity.attributes?.hvac_modes)
        ? entity.attributes.hvac_modes
        : [];
    const action = getEntityAction(entity);
    const modeOrAction = String(action || entity.state);
    const isCoolingMode = hvacModes.includes('cool') ||
        hvacModes.includes('dry') ||
        hvacModes.includes('fan_only') ||
        ['cool', 'cooling', 'dry', 'fan_only', 'fan'].includes(modeOrAction);
    return isCoolingMode ? CLIMATE_COOLING_STATE_ICONS : CLIMATE_HEATING_STATE_ICONS;
}
function shouldSlashOffIcon(entity, icon) {
    if (entity.state !== 'off')
        return false;
    const resolvedIcon = typeof icon === 'object'
        ? icon[getEntityAction(entity) || entity.state] ?? false
        : icon;
    if (typeof resolvedIcon !== 'string')
        return false;
    const [entityDomain] = entity.entity_id.split('.');
    const domainOffIcon = entityDomain === 'climate'
        ? STATE_ICONS.off
        : DOMAIN_STATE_ICONS[entityDomain]?.off;
    return (Boolean(domainOffIcon) &&
        resolvedIcon !== domainOffIcon &&
        !resolvedIcon.endsWith('-off'));
}
function parseFaults(config, hass) {
    if (Array.isArray(config)) {
        return config
            .filter(({ entity }) => Boolean(hass.states?.[entity]))
            .map(({ entity, ...rest }) => ({
            ...rest,
            state: hass.states[entity],
            entity,
        }));
    }
    return [];
}

const DEFAULT_SELECTOR = {
    icons: true,
    names: true,
    states: false,
};
const SUPPORTED_DOMAINS = ['climate', 'fan', 'humidifier'];
const DEFAULT_AUTO_SELECT_MANUAL_PAUSE_MS = 30000;
function getDomain(entityId) {
    return entityId.split('.')[0];
}
function safeClass$2(value) {
    return typeof value === 'string' ? value.replace(/[^a-z0-9_-]/gi, '') : '';
}
function getCardStyle$1(entityDomain, attributes = {}) {
    if (entityDomain !== 'fan')
        return '';
    const percentage = Number(attributes?.percentage);
    if (Number.isNaN(percentage))
        return '';
    const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
    const fanSpinDuration = Math.max(0.9, 3.2 - (normalizedPercentage / 100) * 2.1);
    return `--st-fan-spin-duration: ${fanSpinDuration.toFixed(2)}s;`;
}
function normalizeTarget(target) {
    if (typeof target === 'string') {
        const entity = target.trim();
        return entity
            ? {
                entity,
                config: { type: `custom:${name}`, entity },
            }
            : null;
    }
    if (!target?.entity)
        return null;
    const { entity, name: name$1, icon, ...config } = target;
    const header = typeof config.header === 'object' && config.header
        ? { ...config.header }
        : {};
    if (name$1 && config.header !== false && typeof header.name === 'undefined') {
        header.name = name$1;
    }
    if (icon && config.header !== false && typeof header.icon === 'undefined') {
        header.icon = icon;
    }
    return {
        entity,
        config: {
            type: config.type ?? `custom:${name}`,
            ...config,
            entity,
            ...(config.header === false ? { header: false } : { header }),
        },
    };
}
class SimpleThermostatGroup extends i$1 {
    constructor() {
        super(...arguments);
        this.targets = [];
        this.selectedEntity = '';
        this.menuOpen = false;
        this.cardFading = false;
        this.embeddedCardEntity = '';
        this.embeddedCardConfigSignature = '';
        this.embeddedCardPendingSignature = '';
        this.fadeInAfterSync = false;
        this.activitySignatures = new Map();
        this.activitySignaturesInitialized = false;
        this.persistedActivityApplied = false;
        this.lastManualSelectionAt = 0;
    }
    static get styles() {
        return i$4 `
      :host {
        display: block;
      }

      .group-shell {
        display: block;
        position: relative;
      }

      .group-card {
        display: block;
        overflow: visible;
      }

      .group-selector {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 96px;
        grid-template-rows: var(--st-group-header-control-height, 34px);
        grid-template-areas: 'content nav';
        align-items: start;
        gap: 4px;
        padding: calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 4)
          calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 2) 0
          calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 4);
        color: var(--primary-text-color);
        position: absolute;
        z-index: 2;
        inset: 0 0 auto 0;
        height: calc(
          var(--st-group-header-control-height, 34px) +
            calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 4)
        );
        min-width: 0;
        box-sizing: border-box;
        transform: translateY(var(--st-group-header-top-buffer, 2px));
      }

      .group-title {
        flex: 1 1 auto;
        min-width: 0;
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
        transition: color 180ms var(--st-motion-ease, ease);
        font-size: var(
          --st-group-title-fit-size,
          var(
            --st-group-title-font-size,
            calc(
              var(--st-font-size-title, var(--ha-card-header-font-size, 24px)) *
                0.9
            )
          )
        );
        line-height: var(
          --st-group-title-fit-line-height,
          calc(
            var(
                --st-group-title-font-size,
                var(--st-font-size-title, var(--ha-card-header-font-size, 24px))
              ) *
              0.9
          )
        );
        font-weight: normal;
      }

      .group-header-content {
        grid-area: content;
        display: flex;
        align-items: center;
        align-self: start;
        height: var(--st-group-header-control-height, 34px);
        min-width: 0;
      }

      .group-nav-cluster {
        grid-area: nav;
        justify-self: end;
        align-self: start;
        width: 96px;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-areas: 'prev next menu';
        align-items: center;
        justify-items: center;
        column-gap: 4px;
        margin-left: 4px;
      }

      .group-nav,
      .group-menu {
        flex: 0 0 auto;
        appearance: none;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: var(--primary-text-color);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        padding: 0;
        cursor: pointer;
      }

      .group-nav:hover:not(:disabled),
      .group-nav:focus-visible,
      .group-menu:hover,
      .group-menu:focus-visible {
        background: color-mix(
          in srgb,
          var(--primary-text-color) 10%,
          transparent
        );
      }

      .group-nav ha-icon,
      .group-menu ha-icon {
        --mdc-icon-size: 24px;
        --iron-icon-width: 24px;
        --iron-icon-height: 24px;
      }

      .group-nav:disabled {
        opacity: 0.45;
        cursor: default;
      }

      .group-menu {
        grid-area: menu;
        width: 20px;
        height: 34px;
        color: var(--secondary-text-color);
      }

      .group-menu ha-icon {
        --mdc-icon-size: 22px;
        --iron-icon-width: 22px;
        --iron-icon-height: 22px;
        transform: translateY(-1px);
      }

      .group-nav.previous {
        grid-area: prev;
      }

      .group-nav.next {
        grid-area: next;
      }

      .group-toggles {
        flex: 0 0 auto;
        max-width: 48px;
        min-width: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 2px;
        margin-left: 4px;
        margin-right: 2px;
      }

      .group-toggle {
        flex: 0 0 auto;
        max-width: 44px;
        min-width: 34px;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1px;
        color: var(--primary-text-color);
      }

      .group-toggle-label {
        display: block;
        width: 100%;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        font-size: var(--ha-font-size-xs, 11px);
        line-height: 1.1;
        color: var(--secondary-text-color);
      }

      .group-toggle ha-icon {
        --mdc-icon-size: 16px;
        --iron-icon-width: 16px;
        --iron-icon-height: 16px;
      }

      .group-toggle ha-switch {
        transform: scale(0.72);
        transform-origin: center;
      }

      .group-picker {
        position: absolute;
        z-index: 5;
        top: calc(100% + 4px);
        right: 0;
        min-width: min(280px, 100%);
        max-width: 100%;
        max-height: min(320px, 60vh);
        overflow: auto;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 4px;
        background: var(--ha-card-background, var(--card-background-color));
        box-shadow: var(--ha-card-box-shadow, 0 2px 8px rgba(0, 0, 0, 0.25));
      }

      .group-picker button {
        appearance: none;
        border: 0;
        border-radius: 6px;
        background: transparent;
        color: var(--primary-text-color);
        display: grid;
        grid-template-columns: auto minmax(0, 1fr) auto;
        gap: 10px;
        align-items: center;
        width: 100%;
        min-height: 36px;
        padding: 6px 8px;
        text-align: left;
        font: inherit;
        cursor: pointer;
      }

      .group-picker button:hover,
      .group-picker button.selected {
        background: var(--secondary-background-color);
      }

      .group-picker button.selected {
        color: var(--primary-color);
      }

      .group-picker ha-icon {
        --mdc-icon-size: 22px;
        --iron-icon-width: 22px;
        --iron-icon-height: 22px;
        color: var(--primary-color);
      }

      .group-picker .icon-placeholder {
        width: 22px;
        height: 22px;
      }

      .group-picker span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .embedded-card-host {
        display: block;
        overflow: hidden;
        opacity: 1;
        transition: opacity 120ms ease;
        will-change: opacity;
      }

      .embedded-card-host.fading {
        opacity: 0;
        pointer-events: none;
      }

      .embedded-card-host simple-thermostat {
        display: block;
      }

      @media (prefers-reduced-motion: reduce) {
        .embedded-card-host {
          transition: none;
        }
      }

      .header__main {
        display: flex;
        align-items: center;
        min-width: 0;
        flex: 1 1 auto;
      }

      .header__main.clickable {
        cursor: pointer;
      }

      .header__main.clickable:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
        border-radius: 4px;
      }

      .header__main.clickable:focus-visible .header__title {
        color: var(--st-interactive-tint, var(--primary-color));
      }

      @media (hover: hover) {
        .header__main.clickable:hover .header__title {
          color: var(--st-interactive-tint, var(--primary-color));
        }
      }

      .header__icon-wrap {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--st-control-icon-size, 32px);
        height: var(--st-control-icon-size, 32px);
        margin-right: calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 2);
        color: var(--state-icon-color, var(--secondary-text-color));
        isolation: isolate;
        flex: 0 0 auto;
      }

      .header__icon-wrap.off {
        color: var(--state-icon-color, var(--disabled-text-color));
      }

      .header__icon-wrap::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: calc(
          var(--st-control-icon-size, 32px) +
            (var(--st-active-icon-glow-max-size, 6px) * 2)
        );
        height: calc(
          var(--st-control-icon-size, 32px) +
            (var(--st-active-icon-glow-max-size, 6px) * 2)
        );
        z-index: 0;
        border-radius: 999px;
        pointer-events: none;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.72);
        transform-origin: center;
        background: radial-gradient(
          circle,
          color-mix(
              in srgb,
              var(--st-active-icon-glow-color, currentColor)
                var(--st-active-icon-glow-max-strength, 60%),
              transparent
            )
            0%,
          color-mix(
              in srgb,
              var(--st-active-icon-glow-color, currentColor)
                var(--st-active-icon-glow-mid-strength, 44%),
              transparent
            )
            42%,
          transparent 72%
        );
        will-change: opacity, transform;
      }

      .header__icon-wrap.slash-off::before,
      .header__icon-wrap.slash-off::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: calc(var(--st-control-icon-size, 32px) * 1.05);
        border-radius: 999px;
        pointer-events: none;
        transform-origin: center;
        z-index: 3;
      }

      .header__icon-wrap.slash-off::before {
        height: max(4px, calc(var(--st-control-icon-size, 32px) * 0.115));
        background: var(
          --ha-card-background,
          var(--card-background-color, var(--primary-background-color))
        );
        transform: translate(
            -50%,
            calc(-50% - (var(--st-control-icon-size, 32px) * 0.055))
          )
          rotate(45deg);
      }

      .header__icon-wrap.slash-off::after {
        height: max(2px, calc(var(--st-control-icon-size, 32px) * 0.08));
        background: currentColor;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      .header__icon {
        --iron-icon-width: var(--st-control-icon-size, 32px);
        --iron-icon-height: var(--st-control-icon-size, 32px);
        --mdc-icon-size: var(--st-control-icon-size, 32px);
        position: relative;
        z-index: 1;
        width: var(--st-control-icon-size, 32px);
        height: var(--st-control-icon-size, 32px);
        color: inherit;
        transform-origin: center;
      }

      @keyframes st-group-fan-spin {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes st-group-active-icon-glow {
        0%,
        100% {
          opacity: 0.16;
          transform: translate(-50%, -50%) scale(0.72);
        }

        50% {
          opacity: 0.42;
          transform: translate(-50%, -50%) scale(1);
        }
      }

      .group-card.domain-fan:not(.state-off) .header__icon-wrap,
      .group-card.humidifying .header__icon-wrap {
        --st-active-icon-glow-color: var(--primary-color);
      }

      .group-card.dehumidifying .header__icon-wrap,
      .group-card.drying .header__icon-wrap {
        --st-active-icon-glow-color: var(
          --state-climate-dry-color,
          var(--primary-color)
        );
      }

      .group-card.heating .header__icon-wrap {
        --st-active-icon-glow-color: var(
          --state-climate-heat-color,
          var(--primary-color)
        );
      }

      .group-card.cooling .header__icon-wrap {
        --st-active-icon-glow-color: var(
          --state-climate-cool-color,
          var(--primary-color)
        );
      }

      .group-card.domain-fan:not(.state-off) .header__icon-wrap::before,
      .group-card.humidifying .header__icon-wrap::before,
      .group-card.dehumidifying .header__icon-wrap::before,
      .group-card.drying .header__icon-wrap::before,
      .group-card.heating .header__icon-wrap::before,
      .group-card.cooling .header__icon-wrap::before {
        animation: st-group-active-icon-glow
          var(--st-active-icon-glow-duration, 4s) ease-in-out infinite;
      }

      .group-card.domain-fan:not(.state-off) .header__icon {
        animation: st-group-fan-spin var(--st-fan-spin-duration, 2.4s) linear
          infinite;
      }
    `;
    }
    static getConfigElement() {
        return window.document.createElement(`${name}-group-editor`);
    }
    static getStubConfig(hass) {
        const entities = Object.keys(hass?.states ?? {}).filter((id) => SUPPORTED_DOMAINS.includes(getDomain(id)));
        return {
            entities: entities.slice(0, 2),
            card: {},
        };
    }
    setConfig(config) {
        this.clearAutoSelectResumeTimer();
        const sourceTargets = config.cards ?? config.entities ?? [];
        const targets = sourceTargets
            .map(normalizeTarget)
            .filter(Boolean);
        if (!targets.length) {
            throw new Error('Simple Thermostat Group requires at least one card');
        }
        this.config = {
            ...config,
            selector: {
                ...DEFAULT_SELECTOR,
                ...(config.selector ?? {}),
            },
        };
        this.targets = targets;
        this.selectedEntity = this.getInitialSelection(config, targets);
        this.activitySignatures.clear();
        this.activitySignaturesInitialized = false;
        this.persistedActivityApplied = false;
    }
    updated() {
        this.syncAutoSelectRecentActivity();
        this.syncEmbeddedCard();
        this.syncOutsideClickListener();
        this.syncTitleFit();
    }
    getCardSize() {
        if (!this.config || !this.targets.length)
            return 1;
        const target = this.getSelectedTarget();
        const cardConfig = this.getTargetCardConfig(target);
        const entityCount = Array.isArray(cardConfig.entities)
            ? cardConfig.entities.length
            : 0;
        const entityRows = entityCount ? Math.max(1, Math.ceil(entityCount / 2)) : 0;
        const modeRows = this.getConfiguredModeRowCount(cardConfig);
        const setpointRows = cardConfig.hide_setpoint === true ? 0 : 1;
        return Math.max(2, 1 + entityRows + setpointRows + modeRows);
    }
    disconnectedCallback() {
        this.clearOutsideClickListener();
        this.clearAutoSelectResumeTimer();
        super.disconnectedCallback();
    }
    getInitialSelection(config, targets) {
        const valid = new Set(targets.map((target) => target.entity));
        const stored = config.remember_selection === false
            ? ''
            : this.readStoredSelection(config);
        if (stored && valid.has(stored))
            return stored;
        if (config.selected && valid.has(config.selected))
            return config.selected;
        return targets[0].entity;
    }
    readStoredSelection(config) {
        return this.readStoredSelectionRecord(config)?.entity ?? '';
    }
    readStoredSelectionRecord(config) {
        try {
            const value = window.localStorage?.getItem(this.getStorageKey(config));
            if (!value)
                return undefined;
            if (!value.trim().startsWith('{')) {
                return {
                    entity: value,
                    timestamp: 0,
                };
            }
            const parsed = JSON.parse(value);
            if (typeof parsed.entity === 'string') {
                return {
                    entity: parsed.entity,
                    timestamp: Number.isFinite(parsed.timestamp)
                        ? Number(parsed.timestamp)
                        : 0,
                };
            }
        }
        catch (_err) {
            return undefined;
        }
        return undefined;
    }
    writeStoredSelection(entity) {
        if (!this.config || this.config.remember_selection === false)
            return;
        try {
            window.localStorage?.setItem(this.getStorageKey(this.config), JSON.stringify({
                entity,
                timestamp: Date.now(),
            }));
        }
        catch (_err) {
            // Browsers can block localStorage in private contexts; selection still works.
        }
    }
    readStoredActivity(config) {
        try {
            const value = window.localStorage?.getItem(this.getActivityStorageKey(config));
            if (!value)
                return undefined;
            const parsed = JSON.parse(value);
            if (typeof parsed.entity === 'string' &&
                typeof parsed.signature === 'string' &&
                Number.isFinite(parsed.timestamp)) {
                return {
                    entity: parsed.entity,
                    signature: parsed.signature,
                    timestamp: Number(parsed.timestamp),
                };
            }
        }
        catch (_err) {
            return undefined;
        }
        return undefined;
    }
    writeStoredActivity(record) {
        if (!this.config)
            return;
        try {
            window.localStorage?.setItem(this.getActivityStorageKey(this.config), JSON.stringify(record));
        }
        catch (_err) {
            // Browsers can block localStorage in private contexts; live auto-select still works.
        }
    }
    getStorageKey(config) {
        if (config.storage_key)
            return `simple-thermostat-group:${config.storage_key}`;
        const entities = this.targets.map((target) => target.entity).join('|');
        return `simple-thermostat-group:${entities}`;
    }
    getActivityStorageKey(config) {
        return `${this.getStorageKey(config)}:recent-activity`;
    }
    getConfiguredModeRowCount(cardConfig) {
        const control = cardConfig.control;
        if (control === false)
            return 0;
        if (Array.isArray(control)) {
            return control.filter(Boolean).length;
        }
        if (control && typeof control === 'object') {
            return Object.entries(control).filter(([key, value]) => !key.startsWith('_') && value !== false).length;
        }
        return 1;
    }
    clearAutoSelectResumeTimer() {
        if (this.autoSelectResumeTimer === undefined)
            return;
        window.clearTimeout(this.autoSelectResumeTimer);
        this.autoSelectResumeTimer = undefined;
    }
    getSelectedTarget() {
        return (this.targets.find((target) => target.entity === this.selectedEntity) ??
            this.targets[0]);
    }
    getSelectedState() {
        const target = this.getSelectedTarget();
        return this.hass?.states?.[target.entity];
    }
    openSelectedPopover() {
        const target = this.getSelectedTarget();
        if (!target?.entity)
            return;
        fireEvent(this, 'hass-more-info', {
            entityId: target.entity,
        });
    }
    onSelectorHeaderKeyDown(ev) {
        if (ev.key !== 'Enter' && ev.key !== ' ')
            return;
        ev.preventDefault();
        this.openSelectedPopover();
    }
    getGroupCardClasses() {
        const state = this.getSelectedState();
        if (!state)
            return 'group-card group-shell';
        const domain = getDomain(state.entity_id);
        const action = getEntityAction(state);
        const unavailable = ['unavailable', 'unknown'].includes(String(state.state));
        const classes = [
            'group-card',
            'group-shell',
            `domain-${safeClass$2(domain)}`,
            `state-${safeClass$2(state.state)}`,
            safeClass$2(action),
            unavailable && safeClass$2(state.state),
        ].filter(Boolean);
        return classes.join(' ');
    }
    getGroupCardStyle() {
        const state = this.getSelectedState();
        if (!state)
            return '';
        return getCardStyle$1(getDomain(state.entity_id), state.attributes);
    }
    getSelectedIndex() {
        const index = this.targets.findIndex((target) => target.entity === this.selectedEntity);
        return index === -1 ? 0 : index;
    }
    isRecentActivityAutoSelectEnabled() {
        const autoSelect = this.config?.auto_select;
        if (!autoSelect)
            return false;
        if (autoSelect === true || autoSelect === 'recent_activity')
            return true;
        if (typeof autoSelect === 'object') {
            return autoSelect.mode === 'recent_activity';
        }
        return false;
    }
    getAutoSelectManualPauseMs() {
        const autoSelect = this.config?.auto_select;
        if (autoSelect && typeof autoSelect === 'object') {
            const manualPause = Number(autoSelect.manual_pause_ms ?? autoSelect.cooldown_ms);
            if (Number.isFinite(manualPause) && manualPause >= 0)
                return manualPause;
        }
        return DEFAULT_AUTO_SELECT_MANUAL_PAUSE_MS;
    }
    pauseAutoSelectAfterManualSelection() {
        this.lastManualSelectionAt = Date.now();
        this.clearAutoSelectResumeTimer();
        if (!this.isRecentActivityAutoSelectEnabled())
            return;
        this.autoSelectResumeTimer = window.setTimeout(() => {
            this.autoSelectResumeTimer = undefined;
            this.lastManualSelectionAt = 0;
            if (!this.isRecentActivityAutoSelectEnabled() || this.menuOpen)
                return;
            this.selectMostRecentStateActivity();
        }, this.getAutoSelectManualPauseMs());
    }
    getActivitySignature(target) {
        const state = this.hass?.states?.[target.entity];
        if (!state)
            return '';
        const domain = getDomain(target.entity);
        const attributes = state.attributes ?? {};
        const action = getEntityAction(state) ?? '';
        const keys = domain === 'climate'
            ? [
                'hvac_action',
                'temperature',
                'target_temp_low',
                'target_temp_high',
                'preset_mode',
                'fan_mode',
                'swing_mode',
                'swing_horizontal_mode',
                'swing_vertical_mode',
            ]
            : domain === 'fan'
                ? ['percentage', 'preset_mode', 'direction', 'oscillating']
                : domain === 'humidifier'
                    ? ['action', 'humidity', 'mode']
                    : [];
        const parts = [`state:${state.state}`, `action:${action}`];
        keys.forEach((key) => {
            parts.push(`${key}:${JSON.stringify(attributes[key] ?? null)}`);
        });
        return parts.join('|');
    }
    getActivityTimestamp(target) {
        const state = this.hass?.states?.[target.entity];
        const activeRank = this.getActivityActiveRank(target);
        const value = activeRank > 1
            ? state?.last_updated ?? state?.last_changed
            : state?.last_changed ?? state?.last_updated;
        const timestamp = typeof value === 'string' ? Date.parse(value) : NaN;
        return Number.isFinite(timestamp) ? timestamp : 0;
    }
    getActivityCandidate(target, timestamp = this.getActivityTimestamp(target)) {
        return {
            target,
            timestamp,
            activeRank: this.getActivityActiveRank(target),
        };
    }
    isBetterActivityCandidate(candidate, selected) {
        if (!selected)
            return true;
        if (candidate.activeRank !== selected.activeRank) {
            return candidate.activeRank > selected.activeRank;
        }
        return candidate.timestamp >= selected.timestamp;
    }
    getMostRecentStateActivityCandidate() {
        return this.targets
            .map((target) => this.getActivityCandidate(target))
            .filter((candidate) => candidate.timestamp > 0)
            .reduce((selected, candidate) => {
            return this.isBetterActivityCandidate(candidate, selected)
                ? candidate
                : selected;
        }, undefined);
    }
    applyPersistedActivitySelection(nextSignatures) {
        if (this.persistedActivityApplied ||
            !this.config ||
            !this.isRecentActivityAutoSelectEnabled()) {
            return;
        }
        this.persistedActivityApplied = true;
        const storedSelection = this.readStoredSelectionRecord(this.config);
        const validStoredSelection = storedSelection &&
            this.targets.some((target) => target.entity === storedSelection.entity);
        const latest = this.getMostRecentStateActivityCandidate();
        if (validStoredSelection &&
            (!latest || latest.timestamp <= storedSelection.timestamp)) {
            this.selectEntity(storedSelection.entity, false);
            return;
        }
        const stored = this.readStoredActivity(this.config);
        if (!stored) {
            this.selectMostRecentStateActivity(nextSignatures);
            return;
        }
        const valid = this.targets.some((target) => target.entity === stored.entity);
        if (!valid) {
            this.selectMostRecentStateActivity(nextSignatures);
            return;
        }
        const storedTarget = this.targets.find((target) => target.entity === stored.entity);
        const currentSignature = nextSignatures.get(stored.entity);
        if (storedTarget && currentSignature && currentSignature === stored.signature) {
            const storedCandidate = this.getActivityCandidate(storedTarget, stored.timestamp);
            if (latest && this.isBetterActivityCandidate(latest, storedCandidate)) {
                this.selectMostRecentStateActivity(nextSignatures);
                return;
            }
            this.selectEntity(stored.entity, false);
            return;
        }
        this.selectMostRecentStateActivity(nextSignatures);
    }
    selectMostRecentStateActivity(nextSignatures) {
        const latest = this.getMostRecentStateActivityCandidate();
        if (latest && latest.target.entity !== this.selectedEntity) {
            this.selectEntity(latest.target.entity, false);
        }
        if (latest && nextSignatures) {
            const signature = nextSignatures.get(latest.target.entity);
            if (signature) {
                this.writeStoredActivity({
                    entity: latest.target.entity,
                    signature,
                    timestamp: latest.timestamp,
                });
            }
        }
    }
    getActivityActiveRank(target) {
        const state = this.hass?.states?.[target.entity];
        if (!state)
            return 0;
        const domain = getDomain(target.entity);
        const action = getEntityAction(state) ?? state.attributes?.action;
        const normalizedState = typeof state.state === 'string' ? state.state.toLowerCase() : '';
        const normalizedAction = typeof action === 'string' ? action.toLowerCase() : '';
        if (domain === 'climate') {
            if (['heating', 'cooling', 'drying'].includes(normalizedAction)) {
                return 2;
            }
            return normalizedState && normalizedState !== 'off' ? 1 : 0;
        }
        if (domain === 'fan') {
            const percentage = Number(state.attributes?.percentage);
            if (normalizedState === 'on' || percentage > 0)
                return 2;
            return 0;
        }
        if (domain === 'humidifier') {
            if (['drying', 'humidifying'].includes(normalizedAction)) {
                return 2;
            }
            return normalizedState && !['off', 'idle'].includes(normalizedState)
                ? 1
                : 0;
        }
        return normalizedState && normalizedState !== 'off' ? 1 : 0;
    }
    syncAutoSelectRecentActivity() {
        if (!this.config || !this.hass || !this.targets.length)
            return;
        const changedTargets = [];
        const nextSignatures = new Map();
        this.targets.forEach((target) => {
            const signature = this.getActivitySignature(target);
            nextSignatures.set(target.entity, signature);
            if (this.activitySignaturesInitialized &&
                signature &&
                signature !== this.activitySignatures.get(target.entity)) {
                this.writeStoredActivity({
                    entity: target.entity,
                    signature,
                    timestamp: Date.now(),
                });
                changedTargets.push(this.getActivityCandidate(target, Date.now()));
            }
        });
        this.activitySignatures = nextSignatures;
        if (!this.activitySignaturesInitialized) {
            this.activitySignaturesInitialized = true;
            this.applyPersistedActivitySelection(nextSignatures);
            return;
        }
        if (!changedTargets.length ||
            !this.isRecentActivityAutoSelectEnabled() ||
            this.menuOpen ||
            Date.now() - this.lastManualSelectionAt < this.getAutoSelectManualPauseMs()) {
            return;
        }
        const latest = changedTargets.reduce((selected, candidate) => this.isBetterActivityCandidate(candidate, selected) ? candidate : selected);
        this.selectEntity(latest.target.entity, false);
    }
    getTargetLabel(target) {
        const parsedHeader = this.parseTargetHeader(target);
        if (parsedHeader && typeof parsedHeader.name === 'string') {
            return parsedHeader.name;
        }
        const state = this.hass?.states?.[target.entity];
        if (state && typeof this.hass?.formatEntityName === 'function') {
            return this.hass.formatEntityName(state);
        }
        return state?.attributes?.friendly_name ?? target.entity;
    }
    getTargetIcon(target) {
        const selector = this.config?.selector ?? DEFAULT_SELECTOR;
        if (!selector.icons)
            return '';
        const parsedHeader = this.parseTargetHeader(target);
        if (parsedHeader && parsedHeader.icon) {
            return this.resolveHeaderIcon(parsedHeader.icon, target);
        }
        const state = this.hass?.states?.[target.entity];
        if (state?.attributes?.icon)
            return state.attributes.icon;
        const domain = getDomain(target.entity);
        if (domain === 'fan')
            return 'mdi:fan';
        if (domain === 'humidifier')
            return 'mdi:air-humidifier';
        return 'mdi:air-conditioner';
    }
    getTargetHeaderData(target) {
        return this.parseTargetHeader(target);
    }
    parseTargetHeader(target) {
        const state = this.hass?.states?.[target.entity];
        if (!state || !this.hass)
            return null;
        const config = this.getTargetCardConfig(target);
        return parseHeaderConfig(config.header, state, this.hass, config.enhanced_visuals !== false);
    }
    resolveHeaderIcon(icon, target) {
        if (typeof icon === 'string')
            return icon;
        if (!icon || typeof icon !== 'object')
            return '';
        const state = this.hass?.states?.[target.entity];
        if (!state)
            return '';
        const action = getEntityAction(state) || String(state.state);
        const resolved = icon[action];
        return typeof resolved === 'string' ? resolved : '';
    }
    getHeaderToggleConfigs(target) {
        const header = target.config.header;
        if (!header || typeof header !== 'object')
            return [];
        return [
            ...(header.toggle ? [header.toggle] : []),
            ...(Array.isArray(header.toggles) ? header.toggles : []),
        ].filter((toggle) => toggle?.entity && this.hass?.states?.[toggle.entity]);
    }
    getEmbeddedConfig() {
        const target = this.getSelectedTarget();
        return this.getTargetCardConfig(target);
    }
    getEmbeddedConfigSignature(config) {
        return JSON.stringify(config, (_key, value) => {
            if (!value || typeof value !== 'object' || Array.isArray(value)) {
                return value;
            }
            return Object.keys(value)
                .sort()
                .reduce((result, key) => {
                result[key] = value[key];
                return result;
            }, {});
        });
    }
    getTargetCardConfig(target) {
        const commonConfig = (this.config?.card ?? {});
        const sourceConfig = this.getSourceTargetConfig(target);
        const targetConfig = target.config;
        const mergedConfig = {
            ...commonConfig,
            ...sourceConfig,
            ...targetConfig,
        };
        if (!mergedConfig.card_mod) {
            const fallbackCardMod = this.getFallbackCardMod();
            if (fallbackCardMod)
                mergedConfig.card_mod = fallbackCardMod;
        }
        return {
            ...mergedConfig,
            embedded: true,
            entity: target.entity,
            type: target.config.type ?? `custom:${name}`,
        };
    }
    getSourceTargetConfig(target) {
        const sourceTargets = this.config?.cards ?? this.config?.entities ?? [];
        const source = sourceTargets.find((item) => !!item &&
            typeof item === 'object' &&
            item.entity === target.entity);
        return source && typeof source === 'object' ? source : {};
    }
    getFallbackCardMod() {
        const commonCardMod = (this.config?.card ?? {}).card_mod;
        if (commonCardMod)
            return commonCardMod;
        const sourceTargets = this.config?.cards ?? this.config?.entities ?? [];
        const styledTarget = sourceTargets.find((item) => !!item && typeof item === 'object' && !!item.card_mod);
        return styledTarget?.card_mod;
    }
    getCardHelpers() {
        if (!this.cardHelpersPromise) {
            this.cardHelpersPromise =
                typeof window.loadCardHelpers === 'function'
                    ? window.loadCardHelpers()
                    : Promise.reject(new Error('Home Assistant card helpers unavailable'));
        }
        return this.cardHelpersPromise;
    }
    createFallbackEmbeddedCardElement(config) {
        const element = window.document.createElement(name);
        if (typeof element.setConfig === 'function') {
            element.setConfig(config);
            return element;
        }
        return undefined;
    }
    installEmbeddedCard(host, embedded, embeddedConfig, configSignature) {
        if (!this.config || !this.hass)
            return;
        if (!embedded || typeof embedded.setConfig !== 'function') {
            this.embeddedCardPendingSignature = '';
            return;
        }
        if (this.getEmbeddedConfigSignature(this.getEmbeddedConfig()) !== configSignature) {
            return;
        }
        this.embeddedCard = embedded;
        this.embeddedCardEntity = String(embeddedConfig.entity ?? '');
        this.embeddedCardConfigSignature = configSignature;
        this.embeddedCardPendingSignature = '';
        host.replaceChildren(embedded);
        if (typeof embedded.setConfig === 'function') {
            embedded.setConfig(embeddedConfig);
        }
        embedded.hass = this.hass;
        this.syncEmbeddedPresentation();
    }
    syncEmbeddedCard() {
        if (!this.config || !this.hass)
            return;
        const host = this.renderRoot.querySelector('.embedded-card-host');
        if (!host)
            return;
        const embeddedConfig = this.getEmbeddedConfig();
        const configSignature = this.getEmbeddedConfigSignature(embeddedConfig);
        if (!this.embeddedCard ||
            this.embeddedCardEntity !== embeddedConfig.entity ||
            this.embeddedCardConfigSignature !== configSignature) {
            if (typeof window.loadCardHelpers !== 'function') {
                const fallback = window.customElements.get(name)
                    ? this.createFallbackEmbeddedCardElement(embeddedConfig)
                    : undefined;
                if (!fallback) {
                    this.embeddedCardPendingSignature = '';
                    return;
                }
                this.installEmbeddedCard(host, fallback, embeddedConfig, configSignature);
                return;
            }
            if (this.embeddedCardPendingSignature === configSignature)
                return;
            this.embeddedCardPendingSignature = configSignature;
            this.getCardHelpers()
                .then((helpers) => helpers.createCardElement(embeddedConfig))
                .catch(() => {
                const fallback = window.customElements.get(name)
                    ? this.createFallbackEmbeddedCardElement(embeddedConfig)
                    : undefined;
                return fallback;
            })
                .then((embedded) => this.installEmbeddedCard(host, embedded, embeddedConfig, configSignature));
            return;
        }
        this.embeddedCard.hass = this.hass;
        this.syncEmbeddedPresentation();
    }
    syncEmbeddedPresentation() {
        const embedded = this.embeddedCard;
        const updateComplete = embedded?.updateComplete ?? Promise.resolve();
        updateComplete
            .catch(() => undefined)
            .then(() => window.requestAnimationFrame(() => this.applyEmbeddedPresentation()));
    }
    applyEmbeddedPresentation() {
        const host = this.renderRoot.querySelector('.embedded-card-host');
        const selector = this.renderRoot.querySelector('.group-selector');
        const embedded = this.embeddedCard;
        if (!host || !embedded)
            return;
        host.style.removeProperty('--st-group-cropped-header-height');
        embedded.style.setProperty('--st-group-embedded-header-min-height', this.getEmbeddedHeaderReserve(embedded, selector));
        if (this.fadeInAfterSync) {
            this.fadeInAfterSync = false;
            window.requestAnimationFrame(() => {
                this.cardFading = false;
            });
        }
    }
    getEmbeddedHeaderReserve(embedded, selector) {
        const fallback = 'calc(var(--st-group-header-control-height, 34px) + var(--st-group-header-top-buffer, 2px) + calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 6))';
        const minimum = this.getEmbeddedHeaderReserveMinimum();
        if (!selector)
            return fallback;
        const embeddedRect = embedded.getBoundingClientRect();
        const selectorRect = selector.getBoundingClientRect();
        const measured = Math.ceil(selectorRect.bottom - embeddedRect.top + 8);
        const reserve = Math.max(measured, minimum);
        return Number.isFinite(reserve) && reserve > 24 ? `${reserve}px` : fallback;
    }
    getEmbeddedHeaderReserveMinimum() {
        const styles = getComputedStyle(this);
        const controlHeight = parseFloat(styles.getPropertyValue('--st-group-header-control-height')) ||
            34;
        const topBuffer = parseFloat(styles.getPropertyValue('--st-group-header-top-buffer')) || 2;
        const spacing = parseFloat(styles.getPropertyValue('--st-spacing')) ||
            parseFloat(styles.getPropertyValue('--st-default-spacing')) ||
            4;
        return Math.ceil(controlHeight + topBuffer + spacing * 4);
    }
    selectEntity(entity, manual = true) {
        this.menuOpen = false;
        if (entity === this.selectedEntity)
            return;
        if (manual)
            this.pauseAutoSelectAfterManualSelection();
        const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        if (!this.embeddedCard || prefersReducedMotion) {
            this.fadeInAfterSync = false;
            this.cardFading = false;
            this.selectedEntity = entity;
            if (manual)
                this.writeStoredSelection(entity);
            return;
        }
        this.cardFading = true;
        this.fadeInAfterSync = true;
        this.selectedEntity = entity;
        if (manual)
            this.writeStoredSelection(entity);
    }
    selectOffset(offset) {
        if (this.targets.length < 2)
            return;
        const next = (this.getSelectedIndex() + offset + this.targets.length) %
            this.targets.length;
        this.selectEntity(this.targets[next].entity);
    }
    toggleHeaderEntity(ev, entityId) {
        ev.stopPropagation();
        const checked = Boolean(ev.target.checked);
        this.hass?.callService?.('homeassistant', `turn_${checked ? 'on' : 'off'}`, {
            entity_id: entityId,
        });
    }
    renderHeaderToggles(target) {
        const toggles = this.getHeaderToggleConfigs(target);
        if (!toggles.length)
            return A;
        return b `
      <div class="group-toggles">
        ${toggles.map((toggle) => {
            const state = this.hass?.states?.[toggle.entity];
            const label = toggle.name === true
                ? state?.attributes?.friendly_name
                : typeof toggle.name === 'string'
                    ? toggle.name
                    : state?.attributes?.friendly_name;
            const icon = toggle.icon || state?.attributes?.icon;
            return b `
            <div class="group-toggle">
              <ha-switch
                .checked=${state?.state === 'on'}
                @change=${(ev) => this.toggleHeaderEntity(ev, toggle.entity)}
              ></ha-switch>
              ${icon
                ? b `<ha-icon
                    title=${label || toggle.entity}
                    icon=${icon}
                  ></ha-icon>`
                : label
                    ? b `<span class="group-toggle-label">${label}</span>`
                    : A}
              ${label && icon
                ? b `<span class="group-toggle-label" title=${label}
                    >${label}</span
                  >`
                : A}
            </div>
          `;
        })}
      </div>
    `;
    }
    toggleMenu() {
        if (this.targets.length < 2)
            return;
        this.menuOpen = !this.menuOpen;
    }
    clearOutsideClickListener() {
        this.removeOutsideClickListener?.();
        this.removeOutsideClickListener = undefined;
    }
    syncTitleFit() {
        window.requestAnimationFrame(() => {
            const title = this.renderRoot.querySelector('.group-title');
            if (!title)
                return;
            title.style.removeProperty('--st-group-title-fit-size');
            title.style.removeProperty('--st-group-title-fit-line-height');
            const availableWidth = title.clientWidth;
            const requiredWidth = title.scrollWidth;
            if (!availableWidth || requiredWidth <= availableWidth)
                return;
            const styles = window.getComputedStyle(title);
            const baseSize = Number.parseFloat(styles.fontSize) || 24;
            const fittedSize = Math.max(14, Math.floor(baseSize * (availableWidth / requiredWidth) * 100) / 100);
            title.style.setProperty('--st-group-title-fit-size', `${fittedSize}px`);
            title.style.setProperty('--st-group-title-fit-line-height', `${fittedSize}px`);
        });
    }
    syncOutsideClickListener() {
        if (!this.menuOpen) {
            this.clearOutsideClickListener();
            return;
        }
        if (this.removeOutsideClickListener)
            return;
        const closeOnOutsideClick = (ev) => {
            const path = ev.composedPath();
            if (path.includes(this))
                return;
            this.menuOpen = false;
        };
        window.addEventListener('pointerdown', closeOnOutsideClick, {
            capture: true,
        });
        this.removeOutsideClickListener = () => window.removeEventListener('pointerdown', closeOnOutsideClick, {
            capture: true,
        });
    }
    renderPicker() {
        if (!this.menuOpen)
            return A;
        return b `
      <div class="group-picker" role="menu">
        ${this.targets.map((target) => {
            const label = this.getTargetLabel(target);
            const icon = this.getTargetIcon(target);
            const selected = target.entity === this.selectedEntity;
            return b `
            <button
              type="button"
              role="menuitemradio"
              aria-checked=${selected ? 'true' : 'false'}
              class=${selected ? 'selected' : ''}
              @click=${() => this.selectEntity(target.entity)}
            >
              ${icon
                ? b `<ha-icon icon=${icon}></ha-icon>`
                : b `<span class="icon-placeholder"></span>`}
              <span>${label}</span>
            </button>
          `;
        })}
      </div>
    `;
    }
    renderHeaderIcon(target) {
        const state = this.hass?.states?.[target.entity];
        const header = this.getTargetHeaderData(target);
        if (!state || !header || !header.icon)
            return A;
        const action = getEntityAction(state) || String(state.state);
        const icon = typeof header.icon === 'object'
            ? header.icon?.[action] ?? false
            : header.icon;
        if (!icon)
            return A;
        const actionClass = action && action !== state.state ? ` ${safeClass$2(action)}` : '';
        const stateClass = safeClass$2(state.state);
        return b `
      <span
        class="header__icon-wrap ${stateClass}${actionClass} ${header.slashOffIcon
            ? 'slash-off'
            : ''}"
      >
        <ha-icon
          class="header__icon ${stateClass}${actionClass}"
          .icon=${icon}
        ></ha-icon>
      </span>
    `;
    }
    renderSelector() {
        const target = this.getSelectedTarget();
        const label = this.getTargetLabel(target);
        return b `
      <div class="group-selector">
        <div class="group-header-content">
          <div
            class="header__main clickable"
            role="button"
            tabindex="0"
            @click=${() => this.openSelectedPopover()}
            @keydown=${(ev) => this.onSelectorHeaderKeyDown(ev)}
          >
            ${this.renderHeaderIcon(target)}
            <div class="group-title header__title" title=${label}>${label}</div>
          </div>
          ${this.renderHeaderToggles(target)}
        </div>
        <div class="group-nav-cluster">
          <button
            class="group-nav previous"
            type="button"
            aria-label="Previous device"
            ?disabled=${this.targets.length < 2}
            @click=${() => this.selectOffset(-1)}
          >
            <ha-icon icon="mdi:chevron-left"></ha-icon>
          </button>
          <button
            class="group-nav next"
            type="button"
            aria-label="Next device"
            ?disabled=${this.targets.length < 2}
            @click=${() => this.selectOffset(1)}
          >
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>
          <button
            class="group-menu"
            type="button"
            aria-label="Select device"
            aria-haspopup="menu"
            aria-expanded=${this.menuOpen ? 'true' : 'false'}
            ?disabled=${this.targets.length < 2}
            @click=${() => this.toggleMenu()}
          >
            <ha-icon icon="mdi:dots-vertical"></ha-icon>
          </button>
        </div>
        ${this.renderPicker()}
      </div>
    `;
    }
    render() {
        if (!this.config)
            return b `<ha-card></ha-card>`;
        return b `
      <div
        class=${this.getGroupCardClasses()}
        style=${this.getGroupCardStyle()}
      >
        ${this.renderSelector()}
        <div
          class=${`embedded-card-host${this.cardFading ? ' fading' : ''}`}
        ></div>
      </div>
    `;
    }
}
__decorate([
    n$2({ attribute: false })
], SimpleThermostatGroup.prototype, "hass", void 0);
__decorate([
    r$2()
], SimpleThermostatGroup.prototype, "config", void 0);
__decorate([
    r$2()
], SimpleThermostatGroup.prototype, "targets", void 0);
__decorate([
    r$2()
], SimpleThermostatGroup.prototype, "selectedEntity", void 0);
__decorate([
    r$2()
], SimpleThermostatGroup.prototype, "menuOpen", void 0);
__decorate([
    r$2()
], SimpleThermostatGroup.prototype, "cardFading", void 0);

function isEqual(a, b) {
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) {
        return false;
    }
    return !keys.some((key) => a?.[key] !== b?.[key]);
}

var HVAC_MODES;
(function (HVAC_MODES) {
    HVAC_MODES["OFF"] = "off";
    HVAC_MODES["HEAT"] = "heat";
    HVAC_MODES["COOL"] = "cool";
    HVAC_MODES["HEAT_COOL"] = "heat_cool";
    HVAC_MODES["AUTO"] = "auto";
    HVAC_MODES["DRY"] = "dry";
    HVAC_MODES["FAN_ONLY"] = "fan_only";
})(HVAC_MODES || (HVAC_MODES = {}));

function sortHvacModes(list) {
    const hvacModeValues = Object.values(HVAC_MODES);
    const known = [];
    const unknown = [];
    list.forEach((item) => {
        const index = hvacModeValues.indexOf(item.value);
        if (index >= 0) {
            known[index] = item;
        }
        else {
            unknown.push(item);
        }
    });
    return [...known.filter(Boolean), ...unknown];
}

const FAN_MODE_ORDER = [
    'auto',
    'silent',
    'quiet',
    'low',
    'mid',
    'medium',
    'high',
    'max',
    'turbo',
    'full',
];
function sortFanModes(list) {
    const known = [];
    const unknown = [];
    list.forEach((item) => {
        const index = FAN_MODE_ORDER.indexOf(item.value.toLowerCase());
        if (index >= 0) {
            known[index] = item;
        }
        else {
            unknown.push(item);
        }
    });
    return [...known.filter(Boolean), ...unknown];
}

const FAN_SPEED_ICONS = [
    'mdi:fan-speed-1',
    'mdi:fan-speed-2',
    'mdi:fan-speed-3',
    'st:fan-speed-4',
    'st:fan-speed-5',
];
const normalizeMode = (mode) => String(mode).toLowerCase().replace(/\s+/g, '_');
const FAN_SPEED_LEVELS = {
    low: 1,
    medlow: 2,
    medium_low: 2,
    mid: 2,
    medium: 2,
    medium_high: 3,
    medhigh: 3,
    max: 5,
    turbo: 5,
    full: 5,
};
function getNumericSpeedLevel(mode) {
    if (!/^\d+$/.test(mode))
        return undefined;
    const level = Number(mode);
    return level >= 1 && level <= FAN_SPEED_ICONS.length ? level : undefined;
}
function getNamedSpeedLevel(mode, modeOptions) {
    if (mode === 'high') {
        const modes = new Set(modeOptions.map(normalizeMode));
        return modes.has('medium_high') ||
            modes.has('medhigh') ||
            modes.has('max') ||
            modes.has('turbo') ||
            modes.has('full')
            ? 4
            : 3;
    }
    return FAN_SPEED_LEVELS[mode];
}
function getFanModeIcon(mode, modeOptions) {
    const normalizedMode = normalizeMode(mode);
    const numericLevel = getNumericSpeedLevel(normalizedMode);
    if (numericLevel)
        return FAN_SPEED_ICONS[numericLevel - 1];
    const namedLevel = getNamedSpeedLevel(normalizedMode, modeOptions);
    return namedLevel ? FAN_SPEED_ICONS[namedLevel - 1] : undefined;
}

function formatNumber(number, { decimals = 1, fallback = 'N/A', locale } = {}) {
    const type = typeof number;
    if (number === null ||
        number === '' ||
        ['boolean', 'undefined'].includes(type)) {
        return fallback;
    }
    const value = Number(number);
    if (Number.isNaN(value))
        return fallback;
    if (!locale) {
        return value.toFixed(decimals);
    }
    if (locale.number_format === 'decimal_comma' ||
        locale.number_format === 'space_comma') {
        return value.toFixed(decimals).replace('.', ',');
    }
    if (locale.number_format === 'comma_decimal' ||
        locale.number_format === 'none') {
        return value.toFixed(decimals);
    }
    return new Intl.NumberFormat(locale.number_format === 'system' ? undefined : locale.language, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value);
}

function safeClass$1(value) {
    return String(value ?? '').replace(/[^a-z0-9_-]/gi, '');
}
const SEMANTIC_KIND_PATTERNS = [
    ['heat', /\b(heat|heater|furnace|radiator|boiler|water[_ -]?heater)\b/],
    ['cool', /\b(cool|cooling|ac|a\/c|air[_ -]?conditioner|snowflake)\b/],
    ['dry', /\b(dry|drying|dehumidifier|dehumidify)\b/],
    ['water-percent', /\b(humidifier|humidify|humidity)\b/],
    ['fan', /\b(fan|blower)\b/],
    ['lightbulb', /\b(light|lamp|bulb)\b/],
];
const LOCALIZED_KIND_KEYS = {
    heat: [
        'component.climate.state._.heat',
        'state_attributes.climate.hvac_action.heating',
    ],
    cool: [
        'component.climate.state._.cool',
        'state_attributes.climate.hvac_action.cooling',
    ],
    dry: [
        'component.climate.state._.dry',
        'state_attributes.humidifier.action.drying',
    ],
    fan: ['component.fan.entity_component._.name'],
    lightbulb: ['component.light.entity_component._.name'],
    'water-percent': [
        'component.humidifier.entity_component._.name',
        'state_attributes.humidifier.action.humidifying',
    ],
};
function normalizeText(text) {
    return text.toLowerCase().replace(/[.:]/g, ' ');
}
function getLocalizedKindTerms(hass) {
    if (typeof hass?.localize !== 'function')
        return [];
    return Object.entries(LOCALIZED_KIND_KEYS).flatMap(([kind, keys]) => keys
        .map((key) => hass.localize(key))
        .filter((value) => value && !keys.includes(value))
        .map((value) => [kind, normalizeText(String(value))]));
}
function getKindFromText(text, hass) {
    const normalized = text.toLowerCase().replace(/[.:]/g, ' ');
    const localizedMatch = getLocalizedKindTerms(hass).find(([, term]) => {
        if (!term)
            return false;
        return normalized === term || normalized.includes(term);
    });
    if (localizedMatch)
        return localizedMatch[0];
    const match = SEMANTIC_KIND_PATTERNS.find(([, pattern]) => pattern.test(normalized));
    return match?.[0] ?? '';
}
function getKindFromIcon(icon) {
    if (typeof icon !== 'string' || !icon)
        return '';
    const kind = safeClass$1(icon.replace(/^[a-z]+:/, ''));
    const semanticKind = getKindFromText(kind.replace(/-/g, ' '));
    if (semanticKind)
        return semanticKind;
    if ([
        'fire',
        'radiator',
        'heat-wave',
        'heating-coil',
        'water-boiler',
        'water-boiler-auto',
        'water-boiler-off',
    ].includes(kind)) {
        return 'heat';
    }
    if (['snowflake', 'air-conditioner'].includes(kind))
        return 'cool';
    if (kind === 'fan')
        return 'fan';
    if (kind.includes('light'))
        return 'lightbulb';
    if (['water-percent', 'air-humidifier'].includes(kind))
        return 'water-percent';
    if (['air-humidifier-off'].includes(kind))
        return 'water-percent';
    return kind;
}
function getKindFromEntity(entity) {
    const entityId = entity?.entity_id;
    const domain = typeof entityId === 'string' ? entityId.split('.')[0] : '';
    const deviceClass = entity?.attributes?.device_class;
    if (domain === 'light')
        return 'lightbulb';
    if (domain === 'fan')
        return 'fan';
    if (domain === 'humidifier') {
        if (deviceClass === 'dehumidifier')
            return 'dry';
        return 'water-percent';
    }
    if (deviceClass === 'heat' || deviceClass === 'heater')
        return 'heat';
    if (deviceClass === 'cold' || deviceClass === 'cooling')
        return 'cool';
    if (deviceClass === 'moisture' || deviceClass === 'humidity')
        return 'water-percent';
    return '';
}
function getToggleKind({ icon, label, entity, hass, }) {
    const iconKind = getKindFromIcon(icon);
    if (iconKind)
        return iconKind;
    const entityKind = getKindFromEntity(entity);
    if (entityKind)
        return entityKind;
    const text = [label, entity?.entity_id, entity?.attributes?.friendly_name]
        .filter(Boolean)
        .join(' ');
    return getKindFromText(text, hass);
}
function getToggleKindClass(kind) {
    return kind ? `toggle-${kind}` : '';
}

function renderHeader({ header, toggleEntityChanged, entity, hass, openEntityPopover, }) {
    if (header === false) {
        return A;
    }
    const action = getEntityAction(entity) || entity.state;
    let icon = header.icon;
    if (typeof header.icon === 'object') {
        icon = icon?.[action] ?? false;
    }
    const slashOffIcon = Boolean(header.slashOffIcon);
    const name = header?.name ?? false;
    return b `
    <header>
      <div class="header__main clickable" @click=${() => openEntityPopover()}>
        ${renderIcon(icon, entity.state, action, slashOffIcon)}
        ${renderName(name)}
      </div>
      ${renderFaults(header.faults, openEntityPopover)}
      ${renderToggles(header.toggles, openEntityPopover, toggleEntityChanged, hass, entity)}
    </header>
  `;
}
function renderIcon(icon, state, action, slashOffIcon = false) {
    const actionClass = action && action !== state ? ` ${action}` : '';
    return icon
        ? b `
        <span
          class="header__icon-wrap ${state}${actionClass} ${slashOffIcon
            ? 'slash-off'
            : ''}"
        >
          <ha-icon
            class="header__icon ${state}${actionClass}"
            .icon=${icon}
          ></ha-icon>
        </span>
      `
        : A;
}
function renderName(name) {
    return name ? b `<h2 class="header__title">${name}</h2>` : A;
}
function renderFaults(faults, openEntityPopover) {
    if (!faults?.length) {
        return A;
    }
    const faultHtml = faults.map(({ icon, hide_inactive, state }) => {
        if (!state)
            return A;
        return b ` <ha-icon
      class="fault-icon ${state.state === 'on'
            ? 'active'
            : hide_inactive
                ? ' hide'
                : ''}"
      .icon=${icon || state.attributes?.icon}
      @click="${() => openEntityPopover(state.entity_id)}"
    ></ha-icon>`;
    });
    return b ` <div class="faults">${faultHtml}</div>`;
}
function renderToggles(toggles, openEntityPopover, toggleEntityChanged, hass, mainEntity) {
    if (!toggles?.length)
        return A;
    return b `
    <div class="header__toggles">
      ${toggles.map((toggle) => {
        if (toggle.hide_when_off === true && mainEntity?.state === 'off') {
            return A;
        }
        const entityId = toggle.entity?.entity_id;
        const toggleState = toggle.entity?.state;
        const toggleDomain = typeof entityId === 'string' ? entityId.split('.')[0] : '';
        const styleIcon = typeof toggle.icon === 'string'
            ? toggle.icon
            : toggle.entity?.attributes?.icon;
        const toggleKind = getToggleKind({
            icon: styleIcon,
            label: toggle.label,
            entity: toggle.entity,
            hass,
        });
        const toggleKindClass = getToggleKindClass(toggleKind);
        return b `
          <div
            class="header__toggle ${toggleState || ''} ${toggleDomain
            ? `domain-${toggleDomain}`
            : ''} ${toggleKindClass}"
          >
            <span
              class="clickable toggle-label ${toggleState || ''} ${toggleDomain
            ? `domain-${toggleDomain}`
            : ''} ${toggleKindClass}"
              title=${toggle.label || toggle.entity?.attributes?.friendly_name}
              @click=${() => openEntityPopover(entityId)}
              >${toggle.icon !== false
            ? b `<ha-icon .icon=${toggle.icon}></ha-icon>`
            : toggle.label}
            </span>
            <ha-switch
              .checked=${toggle.entity?.state === 'on'}
              @change=${(ev) => toggleEntityChanged(ev, entityId)}
            ></ha-switch>
          </div>
        `;
    })}
    </div>
  `;
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=A,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A||null==r)return this._t=void 0,this.it=r;if(r===E)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getUnitSeparator(unit, formattedValue) {
    if (formattedValue) {
        const match = formattedValue.match(new RegExp(`(\\s*)${escapeRegExp(unit)}$`));
        if (match)
            return match[1] ?? '';
    }
    return unit === '%' ? '' : ' ';
}
function appendUnit(value, unit, formattedValue) {
    if (!unit || typeof unit !== 'string')
        return String(value);
    const stringValue = String(value);
    if (new RegExp(`${escapeRegExp(unit)}$`).test(stringValue))
        return stringValue;
    return `${stringValue}${getUnitSeparator(unit, formattedValue)}${unit}`;
}

var squirrelly_min$1 = {exports: {}};

var squirrelly_min = squirrelly_min$1.exports;

var hasRequiredSquirrelly_min;

function requireSquirrelly_min () {
	if (hasRequiredSquirrelly_min) return squirrelly_min$1.exports;
	hasRequiredSquirrelly_min = 1;
	(function (module, exports) {
		!function(e,t){t(exports);}(squirrelly_min,(function(e){function t(e){var n,r,a=new Error(e);return n=a,r=t.prototype,Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r,a}function n(e,n,r){var a=n.slice(0,r).split(/\n/),i=a.length,s=a[i-1].length+1;throw t(e+=" at line "+i+" col "+s+":\n\n  "+n.split(/\n/)[i-1]+"\n  "+Array(s).join(" ")+"^")}t.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:false}});var r=new Function("return this")().Promise,a=false;try{a=new Function("return (async function(){}).constructor")();}catch(e){if(!(e instanceof SyntaxError))throw e}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function s(e,t,n){for(var r in t)i(t,r)&&(null==t[r]||"object"!=typeof t[r]||"storage"!==r&&"prefixes"!==r||n?e[r]=t[r]:e[r]=s({},t[r]));return e}var o=/^async +/,c=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,l=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,f=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,u=/[.*+\-?^${}()|[\]\\]/g;function p(e){return u.test(e)?e.replace(u,"\\$&"):e}function h(e,r){r.rmWhitespace&&(e=e.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),c.lastIndex=0,l.lastIndex=0,f.lastIndex=0;var a=r.prefixes,i=[a.h,a.b,a.i,a.r,a.c,a.e].reduce((function(e,t){return e&&t?e+"|"+p(t):t?p(t):e}),""),s=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+p(r.tags[1])+")","g"),u=new RegExp("([^]*?)"+p(r.tags[0])+"(-|_)?\\s*("+i+")?\\s*","g"),h=0,d=false;function g(t,a){var i,p={f:[]},g=0,v="c";function m(t){var a=e.slice(h,t),i=a.trim();if("f"===v)"safe"===i?p.raw=true:r.async&&o.test(i)?(i=i.replace(o,""),p.f.push([i,"",true])):p.f.push([i,""]);else if("fp"===v)p.f[p.f.length-1][1]+=i;else if("err"===v){if(i){var s=a.search(/\S/);n("invalid syntax",e,h+s);}}else p[v]=i;h=t+1;}for("h"===a||"b"===a||"c"===a?v="n":"r"===a&&(p.raw=true,a="i"),s.lastIndex=h;null!==(i=s.exec(e));){var y=i[1],x=i[2],b=i[3],w=i[4],S=i[5],F=i.index;if(y)"("===y?(0===g&&("n"===v?(m(F),v="p"):"f"===v&&(m(F),v="fp")),g++):")"===y?0===--g&&"c"!==v&&(m(F),v="err"):0===g&&"|"===y?(m(F),v="f"):"=>"===y&&(m(F),h+=1,v="res");else if(x){if("/*"===x){var I=e.indexOf("*/",s.lastIndex);-1===I&&n("unclosed comment",e,i.index),s.lastIndex=I+2;}else if("'"===x){l.lastIndex=i.index,l.exec(e)?s.lastIndex=l.lastIndex:n("unclosed string",e,i.index);}else if('"'===x){f.lastIndex=i.index,f.exec(e)?s.lastIndex=f.lastIndex:n("unclosed string",e,i.index);}else if("`"===x){c.lastIndex=i.index,c.exec(e)?s.lastIndex=c.lastIndex:n("unclosed string",e,i.index);}}else if(b)return m(F),h=F+i[0].length,u.lastIndex=h,d=S,w&&"h"===a&&(a="s"),p.t=a,p}return n("unclosed tag",e,t),p}var v=function i(s,c){s.b=[],s.d=[];var l,f=false,p=[];function v(e,t){e&&(e=function(e,t,n,r){var a,i;return "string"==typeof t.autoTrim?a=i=t.autoTrim:Array.isArray(t.autoTrim)&&(a=t.autoTrim[1],i=t.autoTrim[0]),(n||false===n)&&(a=n),(r||false===r)&&(i=r),"slurp"===a&&"slurp"===i?e.trim():("_"===a||"slurp"===a?e=String.prototype.trimLeft?e.trimLeft():e.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==a&&"nl"!==a||(e=e.replace(/^(?:\n|\r|\r\n)/,"")),"_"===i||"slurp"===i?e=String.prototype.trimRight?e.trimRight():e.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==i&&"nl"!==i||(e=e.replace(/(?:\n|\r|\r\n)$/,"")),e)}(e,r,d,t),e&&(e=e.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),p.push(e)));}for(;null!==(l=u.exec(e));){var m,y=l[1],x=l[2],b=l[3]||"";for(var w in a)if(a[w]===b){m=w;break}v(y,x),h=l.index+l[0].length,m||n("unrecognized tag type: "+b,e,h);var S=g(l.index,m),F=S.t;if("h"===F){var I=S.n||"";r.async&&o.test(I)&&(S.a=true,S.n=I.replace(o,"")),S=i(S),p.push(S);}else if("c"===F){if(s.n===S.n)return f?(f.d=p,s.b.push(f)):s.d=p,s;n("Helper start and end don't match",e,l.index+l[0].length);}else if("b"===F){f?(f.d=p,s.b.push(f)):s.d=p;var R=S.n||"";r.async&&o.test(R)&&(S.a=true,S.n=R.replace(o,"")),f=S,p=[];}else if("s"===F){var T=S.n||"";r.async&&o.test(T)&&(S.a=true,S.n=T.replace(o,"")),p.push(S);}else p.push(S);}if(!c)throw t('unclosed helper "'+s.n+'"');return v(e.slice(h,e.length),false),s.d=p,s}({f:[]},true);if(r.plugins)for(var m=0;m<r.plugins.length;m++){var y=r.plugins[m];y.processAST&&(v.d=y.processAST(v.d,r));}return v.d}function d(e,t){var n=h(e,t),r="var tR='';"+(t.useWith?"with("+t.varName+"||{}){":"")+x(n,t)+"if(cb){cb(null,tR)} return tR"+(t.useWith?"}":"");if(t.plugins)for(var a=0;a<t.plugins.length;a++){var i=t.plugins[a];i.processFnString&&(r=i.processFnString(r,t));}return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n][0],a=t[n][1];e=(t[n][2]?"await ":"")+"c.l('F','"+r+"')("+e,a&&(e+=","+a),e+=")";}return e}function v(e,t,n,r,a,i){var s="{exec:"+(a?"async ":"")+y(n,t,e)+",params:["+r+"]";return i&&(s+=",name:'"+i+"'"),a&&(s+=",async:true"),s+="}"}function m(e,t){for(var n="[",r=0;r<e.length;r++){var a=e[r];n+=v(t,a.res||"",a.d,a.p||"",a.a,a.n),r<e.length&&(n+=",");}return n+="]"}function y(e,t,n){return "function("+t+"){var tR='';"+x(e,n)+"return tR}"}function x(e,t){for(var n=0,r=e.length,a="";n<r;n++){var i=e[n];if("string"==typeof i){a+="tR+='"+i+"';";}else {var s=i.t,o=i.c||"",c=i.f,l=i.n||"",f=i.p||"",u=i.res||"",p=i.b,h=!!i.a;if("i"===s){t.defaultFilter&&(o="c.l('F',"+JSON.stringify(t.defaultFilter)+")("+o+")");var d=g(o,c);!i.raw&&t.autoEscape&&(d="c.l('F','e')("+d+")"),a+="tR+="+d+";";}else if("h"===s)if(t.storage.nativeHelpers.get(l))a+=t.storage.nativeHelpers.get(l)(i,t);else {var y=(h?"await ":"")+"c.l('H','"+l+"')("+v(t,u,i.d,f,h);y+=p?","+m(p,t):",[]",a+="tR+="+g(y+=",c)",c)+";";}else "s"===s?a+="tR+="+g((h?"await ":"")+"c.l('H','"+l+"')({params:["+f+"]},[],c)",c)+";":"e"===s&&(a+=o+"\n");}}return a}var b=function(){function e(e){this.cache=e;}return e.prototype.define=function(e,t){this.cache[e]=t;},e.prototype.get=function(e){return this.cache[e]},e.prototype.remove=function(e){delete this.cache[e];},e.prototype.reset=function(){this.cache={};},e.prototype.load=function(e){s(this.cache,e,true);},e}();function w(e,n,r,a){if(n&&n.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept blocks");if(r&&r.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept filters")}function S(e,t,n,r,a){n(e[t],t).then((function(i){r+=i,t===e.length-1?a(r):S(e,t+1,n,r,a);}));}function F(e,t,n,r,a,i){r(t[n],e[t[n]]).then((function(s){a+=s,n===t.length-1?i(a):F(e,t,n+1,r,a,i);}));}var I={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function R(e){return I[e]}var T=new b({}),_=new b({each:function(e,t){var n="",r=e.params[0];if(w("each",t,false),e.async)return new Promise((function(t){S(r,0,e.exec,n,t);}));for(var a=0;a<r.length;a++)n+=e.exec(r[a],a);return n},foreach:function(e,t){var n=e.params[0];if(w("foreach",t,false),e.async)return new Promise((function(t){F(n,Object.keys(n),0,e.exec,"",t);}));var r="";for(var a in n)i(n,a)&&(r+=e.exec(a,n[a]));return r},include:function(e,n,r){w("include",n,false);var a=r.storage.templates.get(e.params[0]);if(!a)throw t('Could not fetch template "'+e.params[0]+'"');return a(e.params[1],r)},extends:function(e,n,r){var a=e.params[1]||{};a.content=e.exec();for(var i=0;i<n.length;i++){var s=n[i];a[s.name]=s.exec();}var o=r.storage.templates.get(e.params[0]);if(!o)throw t('Could not fetch template "'+e.params[0]+'"');return o(a,r)},useScope:function(e,t){return w("useScope",t,false),e.exec(e.params[0])}}),E=new b({if:function(e,t){w("if",false,e.f,true);var n="if("+e.p+"){"+x(e.d,t)+"}";if(e.b)for(var r=0;r<e.b.length;r++){var a=e.b[r];"else"===a.n?n+="else{"+x(a.d,t)+"}":"elif"===a.n&&(n+="else if("+a.p+"){"+x(a.d,t)+"}");}return n},try:function(e,n){if(w("try",false,e.f,true),!e.b||1!==e.b.length||"catch"!==e.b[0].n)throw t("native helper 'try' only accepts 1 block, 'catch'");var r="try{"+x(e.d,n)+"}",a=e.b[0];return r+="catch"+(a.res?"("+a.res+")":"")+"{"+x(a.d,n)+"}"},block:function(e,t){return w("block",e.b,e.f,true),"if(!"+t.varName+"["+e.p+"]){tR+=("+y(e.d,"",t)+")()}else{tR+="+t.varName+"["+e.p+"]}"}}),N=new b({e:function(e){var t=String(e);return /[&<>"']/.test(t)?t.replace(/[&<>"']/g,R):t}}),O={varName:"it",autoTrim:[false,"nl"],autoEscape:true,defaultFilter:false,tags:["{{","}}"],l:function(e,n){if("H"===e){var r=this.storage.helpers.get(n);if(r)return r;throw t("Can't find helper '"+n+"'")}if("F"===e){var a=this.storage.filters.get(n);if(a)return a;throw t("Can't find filter '"+n+"'")}},async:false,storage:{helpers:_,nativeHelpers:E,filters:N,templates:T},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:false,plugins:[],useWith:false};function $(e,t){var n={};return s(n,O),t&&s(n,t),e&&s(n,e),n.l.bind(n),n}function j(e,n){var r,i=$(n||{}),s=Function;if(i.async){if(!a)throw t("This environment doesn't support async/await");s=a;}if(i.varName&&false===(r=i.varName,/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(r)))throw t("options.varName must be a valid JS identifier");try{return new s(i.varName,"c","cb",d(e,i))}catch(n){throw n instanceof SyntaxError?t("Bad template syntax\n\n"+n.message+"\n"+Array(n.message.length+1).join("=")+"\n"+d(e,i)):n}}function A(e,t){var n;return t.cache&&t.name&&t.storage.templates.get(t.name)?t.storage.templates.get(t.name):(n="function"==typeof e?e:j(e,t),t.cache&&t.name&&t.storage.templates.define(t.name,n),n)}O.l.bind(O),e.compile=j,e.compileScope=x,e.compileScopeIntoFunction=y,e.compileToString=d,e.defaultConfig=O,e.filters=N,e.getConfig=$,e.helpers=_,e.nativeHelpers=E,e.parse=h,e.render=function(e,n,a,i){var s=$(a||{});if(!s.async)return A(e,s)(n,s);if(!i){if("function"==typeof r)return new r((function(t,r){try{t(A(e,s)(n,s));}catch(e){r(e);}}));throw t("Please provide a callback function, this env doesn't support Promises")}try{A(e,s)(n,s,i);}catch(e){return i(e)}},e.templates=T,Object.defineProperty(e,"__esModule",{value:true});}));
		
	} (squirrelly_min$1, squirrelly_min$1.exports));
	return squirrelly_min$1.exports;
}

var squirrelly_minExports = /*@__PURE__*/ requireSquirrelly_min();

squirrelly_minExports.defaultConfig.autoEscape = false;
function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
function escapeAttribute(value) {
    return escapeHtml(value);
}
function safeCssName(value) {
    return String(value ?? '').replace(/[^-a-zA-Z0-9_]/g, '');
}
function safeCssValue(value) {
    return String(value ?? '')
        .replace(/url\s*\([^)]*\)/gi, '')
        .replace(/expression\s*\([^)]*\)/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/[<>"'`;{}]/g, '');
}
squirrelly_minExports.filters.define('icon', (icon) => `<ha-icon icon="${escapeAttribute(icon)}"></ha-icon>`);
squirrelly_minExports.filters.define('join', (arr, delimiter = ', ') => arr.join(delimiter));
squirrelly_minExports.filters.define('css', (str, css) => {
    const styles = Object.entries(css).reduce((memo, [key, val]) => {
        const property = safeCssName(key);
        if (!property)
            return memo;
        return `${memo}${property}:${safeCssValue(val)};`;
    }, '');
    return `<span style="${escapeAttribute(styles)}">${escapeHtml(str)}</span>`;
});
squirrelly_minExports.filters.define('debug', (data) => {
    try {
        return JSON.stringify(data);
    }
    catch {
        return `Not able to read valid JSON object from: ${data}`;
    }
});
function escapeHtmlValue(value) {
    if (typeof value === 'string') {
        return value
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    if (Array.isArray(value)) {
        return value.map(escapeHtmlValue);
    }
    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([key, nestedValue]) => [
            key,
            escapeHtmlValue(nestedValue),
        ]));
    }
    return value;
}
function renderTemplate({ template, stateObj, attribute, hass, config = {}, variables = {}, localize = (label) => label, }) {
    const [domain] = String(stateObj?.entity_id ?? '').split('.');
    const attributes = stateObj?.attributes ?? {};
    const rawState = attribute && Object.prototype.hasOwnProperty.call(attributes, attribute)
        ? attributes[attribute]
        : stateObj?.state;
    const textState = attribute && typeof hass.formatEntityAttributeValue === 'function'
        ? hass.formatEntityAttributeValue(stateObj, attribute)
        : typeof hass.formatEntityState === 'function'
            ? hass.formatEntityState(stateObj)
            : localize(String(rawState), `component.${domain}.state._.`);
    const lang = hass.selectedLanguage || hass.language;
    const translationPrefix = 'ui.card.climate.';
    const translations = Object.entries(hass.resources?.[lang] ?? {}).reduce((memo, [key, value]) => {
        if (String(key).startsWith(translationPrefix)) {
            memo[String(key).replace(translationPrefix, '')] = value;
        }
        return memo;
    }, {});
    squirrelly_minExports.filters.define('formatNumber', (str, opts = { decimals: config.decimals }) => {
        return String(formatNumber(str, {
            ...opts,
            locale: hass.locale,
        }));
    });
    squirrelly_minExports.filters.define('relativetime', (str) => {
        return `<ha-relative-time datetime="${escapeAttribute(str)}"></ha-relative-time>`;
    });
    squirrelly_minExports.filters.define('translate', (str, prefix = '') => {
        if (!prefix &&
            typeof hass.formatEntityAttributeValue === 'function' &&
            typeof str === 'string' &&
            str in attributes) {
            return hass.formatEntityAttributeValue(stateObj, str);
        }
        if (!prefix && (domain === 'climate' || domain === 'humidifier')) {
            return localize(str, `state_attributes.${domain}.${str}`);
        }
        return localize(str, prefix);
    });
    return squirrelly_minExports.render(template, {
        ...escapeHtmlValue(attributes),
        state: {
            raw: escapeHtmlValue(rawState),
            text: escapeHtmlValue(textState),
        },
        state_attr: (entityId, attr) => escapeHtmlValue(hass.states?.[entityId]?.attributes?.[attr]),
        ui: translations,
        v: variables,
    }, { useWith: true });
}

const TIMER_REMAINING_TAG = 'simple-thermostat-timer-remaining';
function pad(value) {
    return String(value).padStart(2, '0');
}
function formatSeconds(seconds) {
    const safeSeconds = Math.max(0, Math.ceil(seconds));
    const hours = Math.floor(safeSeconds / 3600);
    const minutes = Math.floor((safeSeconds % 3600) / 60);
    const remainingSeconds = safeSeconds % 60;
    if (hours > 0) {
        return `${hours}:${pad(minutes)}:${pad(remainingSeconds)}`;
    }
    return `${minutes}:${pad(remainingSeconds)}`;
}
class SimpleThermostatTimerRemaining extends i$1 {
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback();
        this.syncTicker();
    }
    disconnectedCallback() {
        this.clearTicker();
        super.disconnectedCallback();
    }
    updated() {
        this.syncTicker();
    }
    clearTicker() {
        if (this.tick) {
            window.clearInterval(this.tick);
            this.tick = undefined;
        }
    }
    syncTicker() {
        const active = this.stateObj?.state === 'active';
        const finishesAt = this.stateObj?.attributes?.finishes_at;
        const endTime = finishesAt ? Date.parse(finishesAt) : NaN;
        const hasFutureEndTime = !Number.isNaN(endTime) && endTime > Date.now();
        if (active && hasFutureEndTime && !this.tick) {
            this.tick = window.setInterval(() => {
                if (endTime <= Date.now()) {
                    this.clearTicker();
                }
                this.requestUpdate();
            }, 1000);
            return;
        }
        if ((!active || !hasFutureEndTime) && this.tick) {
            this.clearTicker();
        }
    }
    getValue() {
        const state = this.stateObj;
        if (!state)
            return '';
        if (state.state === 'active' && state.attributes?.finishes_at) {
            const finishesAt = Date.parse(state.attributes.finishes_at);
            if (!Number.isNaN(finishesAt)) {
                return formatSeconds((finishesAt - Date.now()) / 1000);
            }
        }
        if (state.state === 'paused' && state.attributes?.remaining) {
            return state.attributes.remaining;
        }
        if (typeof this.hass?.formatEntityState === 'function') {
            return this.hass.formatEntityState(state);
        }
        return state.state;
    }
    render() {
        return b `${this.getValue()}`;
    }
}
__decorate([
    n$2({ attribute: false })
], SimpleThermostatTimerRemaining.prototype, "stateObj", void 0);
__decorate([
    n$2({ attribute: false })
], SimpleThermostatTimerRemaining.prototype, "hass", void 0);
if (!customElements.get(TIMER_REMAINING_TAG)) {
    customElements.define(TIMER_REMAINING_TAG, SimpleThermostatTimerRemaining);
}

const TOGGLE_DOMAINS = [
    'automation',
    'fan',
    'humidifier',
    'input_boolean',
    'light',
    'switch',
];
function toggleEntity(hass, entityId, checked) {
    const service = `turn_${checked ? 'on' : 'off'}`;
    if (typeof hass.performAction === 'function') {
        hass.performAction({
            action: `homeassistant.${service}`,
            data: { entity_id: entityId },
        });
    }
    else {
        hass.callService('homeassistant', service, { entity_id: entityId });
    }
}
function safeClass(value) {
    return String(value ?? '').replace(/[^a-z0-9_-]/gi, '');
}
function renderIconTemplate({ icon, state, attribute, hass, config, variables, localize, }) {
    if (typeof icon !== 'string' ||
        !icon.includes('{{') ||
        typeof state !== 'object' ||
        state === null) {
        return icon;
    }
    return renderTemplate({
        template: icon,
        stateObj: state,
        attribute,
        hass,
        config,
        variables,
        localize,
    }).trim();
}
function renderHeadingTemplate({ heading, state, attribute, hass, config, variables, localize, }) {
    if (typeof heading !== 'string' ||
        !heading.includes('{{') ||
        typeof state !== 'object' ||
        state === null) {
        return undefined;
    }
    return renderTemplate({
        template: heading,
        stateObj: state,
        attribute,
        hass,
        config,
        variables,
        localize,
    }).trim();
}
function renderInfoItem({ hide = false, hass, state, details, localize, openEntityPopover, }) {
    if (hide || typeof state === 'undefined')
        return;
    const { type, heading, icon, unit, decimals, tooltip: configuredTooltip, entity, template, attribute, variables, config, separator = true, } = details;
    const renderedIcon = renderIconTemplate({
        icon,
        state,
        attribute,
        hass,
        config,
        variables,
        localize,
    });
    const renderedHeading = renderHeadingTemplate({
        heading,
        state,
        attribute,
        hass,
        config,
        variables,
        localize,
    });
    const hasConfiguredUnit = typeof unit === 'string' && unit.length > 0;
    const entityId = typeof state === 'object' ? state.entity_id : entity;
    const canOpenEntity = entityId && typeof openEntityPopover === 'function';
    const entityTooltip = configuredTooltip ||
        (typeof state === 'object'
            ? state?.attributes?.friendly_name || state?.entity_id
            : entity
                ? hass.states?.[entity]?.attributes?.friendly_name || entity
                : undefined);
    let entityDomain = '';
    let entityState = '';
    let isToggleEntity = false;
    let valueCell;
    if (template && typeof state === 'object') {
        const value = renderTemplate({
            template,
            stateObj: state,
            attribute,
            hass,
            config,
            variables,
            localize,
        });
        valueCell = b `<div
      class="entity-value ${canOpenEntity ? 'clickable' : ''}"
      title=${entityTooltip}
      @click="${canOpenEntity ? () => openEntityPopover(entityId) : null}"
    >
      ${o(appendUnit(value, hasConfiguredUnit ? unit : false))}
    </div>`;
    }
    else if (type === 'relativetime') {
        valueCell = b `
      <div class="entity-value">
        <ha-relative-time .datetime=${state} .hass=${hass}></ha-relative-time>
      </div>
    `;
    }
    else if (typeof state === 'object') {
        const [domain] = state.entity_id.split('.');
        entityDomain = domain;
        entityState = state.state;
        isToggleEntity = TOGGLE_DOMAINS.includes(domain);
        const entityClasses = [
            isToggleEntity && 'toggle-entity',
            entityDomain && `domain-${safeClass(entityDomain)}`,
            entityState && `state-${safeClass(entityState)}`,
            isToggleEntity &&
                getToggleKindClass(getToggleKind({
                    icon: renderedIcon || state.attributes?.icon,
                    label: heading || state.attributes?.friendly_name,
                    entity: state,
                    hass,
                })),
        ]
            .filter(Boolean)
            .join(' ');
        if (domain === 'timer') {
            valueCell = b `
        <div
          class="entity-value ${canOpenEntity ? 'clickable' : ''}"
          title=${entityTooltip}
          @click="${canOpenEntity
                ? () => openEntityPopover(state.entity_id)
                : null}"
        >
          <simple-thermostat-timer-remaining
            .stateObj=${state}
            .hass=${hass}
          ></simple-thermostat-timer-remaining>
        </div>
      `;
        }
        else if (isToggleEntity) {
            valueCell = b `
        <div class="entity-value ${entityClasses}">
          <ha-switch
            .checked=${state.state === 'on'}
            @change=${(ev) => toggleEntity(hass, state.entity_id, ev.target.checked)}
          ></ha-switch>
        </div>
      `;
        }
        else {
            const prefix = [
                'component',
                domain,
                'state',
                state.attributes?.device_class ?? '_',
                '',
            ].join('.');
            let value = typeof hass.formatEntityState === 'function'
                ? hass.formatEntityState(state)
                : localize(state.state, prefix);
            if (typeof decimals === 'number') {
                value = formatNumber(state.state, {
                    decimals,
                    locale: hass.locale,
                });
            }
            const stateUnit = state.attributes.unit_of_measurement ?? '';
            const humidityUnit = state.attributes?.device_class === 'humidity' ||
                state.entity_id?.includes('humidity') ||
                icon === 'mdi:water-percent'
                ? '%'
                : '';
            const configuredUnit = hasConfiguredUnit
                ? unit
                : stateUnit || humidityUnit;
            valueCell = b `
        <div
          class="entity-value ${canOpenEntity ? 'clickable' : ''}"
          title=${entityTooltip}
          @click="${canOpenEntity
                ? () => openEntityPopover(state.entity_id)
                : null}"
        >
          ${appendUnit(value, configuredUnit, value)}
        </div>
      `;
        }
    }
    else {
        let value = typeof decimals === 'number'
            ? formatNumber(state, {
                decimals,
                locale: hass.locale,
            })
            : state;
        valueCell = b `<div
      class="entity-value ${canOpenEntity ? 'clickable' : ''}"
      title=${entityTooltip || A}
      @click=${canOpenEntity ? () => openEntityPopover(entityId) : null}
    >
      ${appendUnit(value, hasConfiguredUnit ? unit : false)}
    </div>`;
    }
    if (heading === false) {
        return valueCell;
    }
    const tooltip = heading || entityTooltip;
    const headingClasses = [
        'entity-heading',
        canOpenEntity && 'clickable',
        isToggleEntity && 'toggle-entity',
        entityDomain && `domain-${safeClass(entityDomain)}`,
        entityState && `state-${safeClass(entityState)}`,
        isToggleEntity &&
            getToggleKindClass(getToggleKind({
                icon: renderedIcon || state?.attributes?.icon,
                label: typeof heading === 'string'
                    ? heading
                    : state?.attributes?.friendly_name,
                entity: state,
                hass,
            })),
    ]
        .filter(Boolean)
        .join(' ');
    const headingResult = renderedIcon
        ? b `
        <ha-icon
          icon="${renderedIcon}"
          title=${tooltip}
          @click=${canOpenEntity ? () => openEntityPopover(entityId) : null}
        ></ha-icon>
      `
        : typeof renderedHeading === 'string'
            ? b `${o(renderedHeading)}`
            : ` ${heading}${separator === false ? '' : ':'} `;
    const headingCell = b `<div
      class=${headingClasses}
      title=${renderedIcon ? tooltip : A}
      @click=${canOpenEntity ? () => openEntityPopover(entityId) : null}
    >
      ${headingResult}
    </div>`;
    return [headingCell, valueCell];
}

function wrapEntities(config, content) {
    const { type = 'table', labels: showLabels = true, alignment, } = config?.layout?.entities ?? {};
    const visibleRows = content.filter((it) => it !== null && typeof it !== 'undefined');
    const classes = [
        showLabels ? 'with-labels' : 'without-labels',
        type === 'list' ? 'as-list' : 'as-table',
        alignment === 'left' ? 'align-left' : '',
        visibleRows.length === 1 ? 'single-row' : '',
    ];
    return b ` <div class="entities ${classes.join(' ')}">${content}</div> `;
}

function renderEntities({ _hide, entity, unit, hass, entities, config, localize, openEntityPopover, adapter, }) {
    const currentValueEntityId = config.current_value_entity;
    const currentValueEntity = currentValueEntityId
        ? hass.states[currentValueEntityId]
        : entity;
    const current = currentValueEntityId
        ? currentValueEntity?.state
        : adapter.getCurrentValue(entity.attributes);
    const currentUnit = currentValueEntityId
        ? (currentValueEntity?.attributes?.unit_of_measurement ?? unit)
        : (adapter.getCurrentValueUnit?.(entity.attributes, hass.config) ?? unit);
    const showLabels = config?.layout?.entities?.labels ?? true;
    const showSeparator = config?.layout?.entities?.separator !== false;
    const stateString = config?.state_labels?.[entity.state] ??
        getEntityStateText(entity, hass, localize);
    const hideTemperatureWhenOff = (config?.hide_current_value_when_off === true ||
        config?.hide?.current_value_when_off === true ||
        config?.hide?.temperature_when_off === true) &&
        entity.state === HVAC_MODES.OFF;
    const entityHtml = [
        renderInfoItem({
            hide: _hide.temperature ||
                hideTemperatureWhenOff ||
                current === null ||
                typeof current === 'undefined',
            state: appendUnit(formatNumber(current, {
                ...config,
                locale: hass.locale,
            }), currentUnit),
            hass,
            openEntityPopover,
            details: {
                heading: showLabels
                    ? (config?.label?.temperature ??
                        localize('ui.card.climate.currently'))
                    : false,
                tooltip: currentValueEntity?.attributes?.friendly_name ?? currentValueEntityId,
                entity: currentValueEntityId ?? config.entity,
                separator: showSeparator,
            },
        }),
        renderInfoItem({
            hide: _hide.state,
            state: stateString,
            hass,
            openEntityPopover,
            details: {
                heading: showLabels
                    ? (config?.label?.state ??
                        localize('ui.panel.lovelace.editor.card.generic.state'))
                    : false,
                entity: config.entity,
                separator: showSeparator,
            },
        }),
        ...((entities ?? []).map(({ name, state, show, _hide_when_off, hide_when_off, ...rest }) => {
            const hideWhenOff = _hide_when_off === true || hide_when_off === true;
            return renderInfoItem({
                hide: show === false || (hideWhenOff && entity.state === HVAC_MODES.OFF),
                state,
                hass,
                localize,
                openEntityPopover,
                details: {
                    ...rest,
                    heading: showLabels && name,
                    tooltip: name,
                    config,
                    variables: config.variables,
                    separator: showSeparator,
                },
            });
        }) || null),
    ].filter((it) => it !== null);
    return wrapEntities(config, entityHtml);
}

const CUSTOM_FAN_ICON_PATH = 'M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13';
const CUSTOM_MODE_ICONS = {
    'st:fan-speed-4': {
        path: 'M16 15V21H19V23H21V15H19V19H18V15H16Z',
    },
    'st:fan-speed-5': {
        path: 'M16 15H21V17H18V18H19C20.11 18 21 18.89 21 20V21C21 22.11 20.11 23 19 23H16V21H19V20H16V15Z',
    },
};
const registerCustomModeIcons = () => {
    window.customIconsets = window.customIconsets || {};
    if (window.customIconsets.st)
        return;
    window.customIconsets.st = async (name) => {
        const icon = CUSTOM_MODE_ICONS[`st:${name}`];
        if (!icon) {
            return {
                path: '',
            };
        }
        return {
            path: `${CUSTOM_FAN_ICON_PATH}${icon.path}`,
        };
    };
};
registerCustomModeIcons();
function renderModeIcon(icon) {
    if (!icon)
        return null;
    return b ` <ha-icon class="mode-icon" .icon=${icon}></ha-icon> `;
}

function renderModeType({ state, entity, hass, mode: options, adapter, modeOptions, localize, setMode, }) {
    const { type, hide_when_off, mode = 'none', list, name, heading, icons, } = options;
    if (list.length === 0 || (hide_when_off && state === HVAC_MODES.OFF)) {
        return null;
    }
    const modeAttribute = type === 'hvac' ? null : adapter.getModePayloadKey(type);
    let localizePrefix = modeAttribute
        ? `state_attributes.${adapter.getLocalizationDomain()}.${modeAttribute}.`
        : '';
    if (type === 'hvac') {
        localizePrefix = `component.climate.state._.`;
    }
    else if (type === 'vane_horizontal' || type === 'vane_vertical') {
        localizePrefix = '';
    }
    else if (type === 'direction' ||
        type === 'oscillating' ||
        type === 'mode') {
        localizePrefix = '';
    }
    const maybeRenderName = (name, value) => {
        if (name === false)
            return null;
        if (modeOptions?.names === false)
            return null;
        if (name !== value) {
            return localizePrefix ? localize(name, localizePrefix) : name;
        }
        if ((type === 'hvac' || type === 'state') &&
            typeof hass?.formatEntityState === 'function') {
            return hass.formatEntityState({ ...entity, state: value });
        }
        if (modeAttribute &&
            entity &&
            typeof hass?.formatEntityAttributeValue === 'function') {
            return hass.formatEntityAttributeValue(entity, modeAttribute, value);
        }
        return localizePrefix ? localize(name, localizePrefix) : name;
    };
    const maybeRenderIcon = (icon, iconConfigured = false) => {
        if (!icon)
            return null;
        if (modeOptions?.icons === false || icons === false)
            return null;
        if ([
            'swing',
            'swing_horizontal',
            'swing_vertical',
            'vane_horizontal',
            'vane_vertical',
        ].includes(type) &&
            icons !== true &&
            !iconConfigured) {
            return null;
        }
        return renderModeIcon(icon);
    };
    const localizeWithFallback = (key, fallback) => {
        const translated = localize(key);
        return translated && translated !== key ? translated : fallback;
    };
    const str = type == 'hvac' ? 'operation' : `${type}_mode`;
    let defaultTitle;
    if (type === 'vane_horizontal') {
        defaultTitle = 'Vane Horizontal';
    }
    else if (type === 'vane_vertical') {
        defaultTitle = 'Vane Vertical';
    }
    else if (type === 'swing_horizontal') {
        defaultTitle = localizeWithFallback('ui.card.climate.swing_horizontal_mode', 'Swing Horizontal');
    }
    else if (type === 'swing_vertical') {
        defaultTitle = localizeWithFallback('ui.card.climate.swing_vertical_mode', 'Swing Vertical');
    }
    else if (type === 'direction') {
        defaultTitle = 'Direction';
    }
    else if (type === 'oscillating') {
        defaultTitle = 'Oscillating';
    }
    else if (type === 'mode') {
        defaultTitle = 'Mode';
    }
    else if (type === 'preset') {
        defaultTitle =
            heading === true
                ? localizeWithFallback(`ui.card.${adapter.getLocalizationDomain()}.${str}`, 'Preset')
                : false;
    }
    else if (type === 'state') {
        defaultTitle = heading === true ? 'State' : false;
    }
    else {
        defaultTitle = localizeWithFallback(`ui.card.${adapter.getLocalizationDomain()}.${str}`, type === 'hvac' ? 'Operation' : 'Mode');
    }
    const title = name === false ? false : name || defaultTitle;
    const getControlTooltip = () => {
        if (type === 'fan' ||
            (type === 'preset' && adapter.getLocalizationDomain() === 'fan')) {
            return 'Fan speed';
        }
        if (type === 'swing')
            return 'Swing mode';
        if (type === 'swing_horizontal') {
            return localizeWithFallback('ui.card.climate.swing_horizontal_mode', 'Horizontal swing');
        }
        if (type === 'swing_vertical') {
            return localizeWithFallback('ui.card.climate.swing_vertical_mode', 'Vertical swing');
        }
        if (type === 'vane_horizontal')
            return 'Horizontal vane';
        if (type === 'vane_vertical')
            return 'Vertical vane';
        return '';
    };
    const controlTooltip = getControlTooltip();
    const headings = modeOptions?.headings === true || heading === true;
    const showHeading = headings && title !== false;
    const isFanPreset = type === 'preset' && adapter.getLocalizationDomain() === 'fan';
    const sparseMainControls = (type === 'hvac' || type === 'state' || type === 'fan') &&
        list.length <= 4;
    const compact = (type === 'preset' && list.length <= 4) ||
        [
            'swing',
            'swing_horizontal',
            'swing_vertical',
            'vane_horizontal',
            'vane_vertical',
        ].includes(type);
    const dense = list.length > 4 ||
        (type === 'hvac' && list.length > 4) ||
        (type === 'fan' && list.length > 4);
    const safeClass = (value) => String(value).replace(/[^a-z0-9_-]/gi, '');
    return b `
    <div
      class="modes ${type} ${isFanPreset ? 'fan-preset' : ''} ${showHeading
        ? 'heading'
        : ''} ${compact ? 'compact' : ''} ${dense
        ? 'dense'
        : ''} ${sparseMainControls ? 'sparse' : ''}"
      role="group"
      aria-label=${title || type}
    >
      ${showHeading ? b ` <div class="mode-title">${title}</div> ` : ''}
      ${list.map(({ value, icon, iconConfigured, name, hide_when_off }) => {
        if (hide_when_off === true && state === HVAC_MODES.OFF)
            return A;
        const modeClass = safeClass(value);
        const displayName = maybeRenderName(name, value);
        const tooltip = displayName ? A : controlTooltip || A;
        return b `
          <div
            class="mode-item ${modeClass} ${value === mode ? 'active' : ''}"
            role="button"
            tabindex="0"
            aria-pressed=${value === mode ? 'true' : 'false'}
            aria-label=${name || value}
            title=${tooltip}
            @click=${() => setMode(type, value)}
            @keydown=${(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setMode(type, value);
            }
        }}
          >
            ${maybeRenderIcon(icon, iconConfigured)}
            ${displayName
            ? b `<span class="mode-label">${displayName}</span>`
            : null}
          </div>
        `;
    })}
    </div>
  `;
}

function parseSetpoints(setpoints, attributes, adapter = climateAdapter, entityState) {
    if (setpoints === false) {
        return {};
    }
    if (setpoints) {
        return Object.entries(setpoints).reduce((result, [name, sp]) => {
            if (sp?.hide)
                return result;
            const hiddenStates = Array.isArray(sp?.hide_when)
                ? sp.hide_when
                : sp?.hide_when
                    ? [sp.hide_when]
                    : [];
            if (entityState && hiddenStates.includes(entityState))
                return result;
            result[name] = attributes?.[name];
            return result;
        }, {});
    }
    return adapter.getSetpoints(attributes);
}

function parseService(config, adapter = climateAdapter) {
    if (!config) {
        return adapter.getSetpointService();
    }
    return config;
}

const SETPOINT_DEBOUNCE_TIMEOUT = 500;
const STEP_SIZE = 0.5;
const DECIMALS = 1;
const UPDATING_TIMEOUT = 10000;
const MODE_TYPES = Object.values(MODES);
const ICONS = {
    UP: 'hass:chevron-up',
    DOWN: 'hass:chevron-down',
    PLUS: 'mdi:plus',
    MINUS: 'mdi:minus',
};
const DEFAULT_HIDE = {
    temperature: false,
    state: false,
};
const CONTROL_ORDER = [
    MODES.PRESET,
    MODES.FAN,
    MODES.HVAC,
    MODES.SWING,
    MODES.SWING_HORIZONTAL,
    MODES.SWING_VERTICAL,
    MODES.VANE_HORIZONTAL,
    MODES.VANE_VERTICAL,
    MODES.DIRECTION,
    MODES.OSCILLATING,
    MODES.STATE,
];
const CONTROL_METADATA_KEYS = ['entity', 'hide_when_off', 'hide_off_when_off'];
function getConfiguredEntities(config) {
    return config.entities ?? [];
}
function shouldShowModeControl(type, modeOption, config) {
    const modeKey = String(modeOption);
    const configuredMode = getConfiguredModeValue(modeKey, config);
    if (isModeValue(configuredMode)) {
        return configuredMode.include !== false;
    }
    const hasExplicitConfig = Object.keys(config).some((key) => !key.startsWith('_'));
    const hideUnlistedModes = type === MODES.PRESET;
    return configuredMode ?? !(hideUnlistedModes && hasExplicitConfig);
}
function normalizeModeConfigKey(value) {
    return value.toLowerCase().replace(/\s+/g, '_');
}
function getConfiguredModeValue(modeKey, specification) {
    const normalizedModeKey = normalizeModeConfigKey(modeKey);
    const exactValue = specification[modeKey];
    if (typeof exactValue !== 'undefined')
        return exactValue;
    if (typeof specification[normalizedModeKey] !== 'undefined') {
        return specification[normalizedModeKey];
    }
    const matchingEntry = Object.entries(specification).find(([key]) => !key.startsWith('_') &&
        !CONTROL_METADATA_KEYS.includes(key) &&
        normalizeModeConfigKey(key) === normalizedModeKey);
    return matchingEntry?.[1];
}
function isModeValue(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}
function getOrderedModeOptions(modeOptions, specification) {
    const configuredKeys = Array.isArray(specification._order)
        ? specification._order.map(String)
        : Object.keys(specification).filter((key) => !key.startsWith('_') && !CONTROL_METADATA_KEYS.includes(key));
    if (configuredKeys.length === 0)
        return modeOptions;
    const optionsByKey = new Map();
    modeOptions.forEach((modeOption) => {
        optionsByKey.set(normalizeModeConfigKey(String(modeOption)), modeOption);
    });
    const usedKeys = new Set();
    const orderedOptions = [];
    configuredKeys.forEach((key) => {
        const normalizedKey = normalizeModeConfigKey(key);
        if (!optionsByKey.has(normalizedKey) || usedKeys.has(normalizedKey))
            return;
        orderedOptions.push(optionsByKey.get(normalizedKey));
        usedKeys.add(normalizedKey);
    });
    modeOptions.forEach((modeOption) => {
        const normalizedKey = normalizeModeConfigKey(String(modeOption));
        if (usedKeys.has(normalizedKey))
            return;
        orderedOptions.push(modeOption);
        usedKeys.add(normalizedKey);
    });
    return orderedOptions;
}
function getModeList(type, attributes, adapter, specification = {}) {
    let modeOptions = attributes[adapter.getModeAttribute(type)];
    if (type === MODES.STATE) {
        modeOptions = ['off', 'on'];
    }
    else if (type === MODES.DIRECTION && attributes.direction) {
        modeOptions = ['forward', 'reverse'];
    }
    else if (type === MODES.OSCILLATING &&
        typeof attributes.oscillating === 'boolean') {
        modeOptions = [false, true];
    }
    if (!Array.isArray(modeOptions)) {
        return [];
    }
    return getOrderedModeOptions(modeOptions, specification)
        .filter((modeOption) => shouldShowModeControl(type, modeOption, specification))
        .map((modeOption) => {
        const modeKey = String(modeOption);
        const configuredMode = getConfiguredModeValue(modeKey, specification);
        const values = isModeValue(configuredMode)
            ? configuredMode
            : {};
        const { name: configuredName, ...modeValues } = values;
        const hideWhenOff = values.hide_when_off === true ||
            (specification.hide_off_when_off === true &&
                normalizeModeConfigKey(modeKey) === 'off');
        const name = configuredName === false
            ? false
            : typeof configuredName === 'string'
                ? configuredName
                : getModeName(modeKey);
        return {
            ...modeValues,
            hide_when_off: hideWhenOff || undefined,
            icon: values.icon ??
                (type === MODES.FAN
                    ? getFanModeIcon(modeKey, modeOptions)
                    : undefined) ??
                getModeIcon(modeKey),
            iconConfigured: typeof values.icon !== 'undefined',
            value: modeKey,
            name,
        };
    });
}
function isSelectModeEntity(stateObj) {
    return (typeof stateObj?.entity_id === 'string' &&
        stateObj.entity_id.startsWith('select.') &&
        Array.isArray(stateObj.attributes?.options));
}
function getModeListFromSelect(stateObj, specification = {}) {
    const modeOptions = stateObj.attributes.options;
    return getOrderedModeOptions(modeOptions, specification)
        .filter((modeOption) => shouldShowModeControl('select', modeOption, specification))
        .map((modeOption) => {
        const modeKey = String(modeOption);
        const configuredMode = getConfiguredModeValue(modeKey, specification);
        const values = isModeValue(configuredMode)
            ? configuredMode
            : {};
        const { name: configuredName, ...modeValues } = values;
        const hideWhenOff = values.hide_when_off === true ||
            (specification.hide_off_when_off === true &&
                normalizeModeConfigKey(modeKey) === 'off');
        const name = configuredName === false
            ? false
            : typeof configuredName === 'string'
                ? configuredName
                : getModeName(modeKey);
        return {
            ...modeValues,
            hide_when_off: hideWhenOff || undefined,
            icon: values.icon ?? getModeIcon(modeKey),
            iconConfigured: typeof values.icon !== 'undefined',
            value: modeKey,
            name,
        };
    });
}
function getCardStyle(entityDomain, attributes) {
    if (entityDomain !== 'fan')
        return '';
    const percentage = Number(attributes?.percentage);
    if (Number.isNaN(percentage))
        return '';
    const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);
    const fanSpinDuration = Math.max(0.9, 3.2 - (normalizedPercentage / 100) * 2.1);
    return `--st-fan-spin-duration: ${fanSpinDuration.toFixed(2)}s;`;
}
function getCardModSurfaceDeclarations(cardMod) {
    const style = cardMod?.style;
    if (typeof style === 'object' && style) {
        const cardStyle = style['ha-card'];
        if (typeof cardStyle === 'string')
            return cardStyle.trim();
        const rootStyle = style['.'];
        if (typeof rootStyle === 'string') {
            const rootMatch = rootStyle.match(/ha-card\s*\{([\s\S]*?)\}/);
            return (rootMatch?.[1] ?? '').trim();
        }
    }
    if (typeof style !== 'string')
        return '';
    const match = style.match(/ha-card\s*\{([\s\S]*?)\}/);
    return (match?.[1] ?? '').trim();
}
function getInlineCardStyle(config, entityDomain, attributes) {
    return [
        getCardModSurfaceDeclarations(config.card_mod),
        getCardStyle(entityDomain, attributes),
    ]
        .filter((style) => !!style)
        .join('; ');
}
function supportsModeType(type, entityDomain, attributes, adapter) {
    return (MODE_TYPES.includes(type) &&
        (type === MODES.STATE
            ? entityDomain === 'fan' || entityDomain === 'humidifier'
            : typeof attributes[adapter.getModeAttribute(type)] !== 'undefined'));
}
function buildBasicControlModes(items, entityDomain, attributes, adapter) {
    return items
        .filter((type) => supportsModeType(type, entityDomain, attributes, adapter))
        .map((type) => ({
        type,
        hide_when_off: false,
        list: getModeList(type, attributes, adapter),
    }));
}
function buildConfiguredControlModes(config, entityDomain, attributes, adapter, hass) {
    if (config.control === false)
        return [];
    if (Array.isArray(config.control)) {
        return buildBasicControlModes(config.control, entityDomain, attributes, adapter);
    }
    if (config.control && typeof config.control === 'object') {
        const controlConfig = config.control;
        const configuredEntries = Object.entries(config.control).filter(([type]) => !type.startsWith('_'));
        const configuredOrder = Array.isArray(controlConfig._order)
            ? controlConfig._order.map(String)
            : undefined;
        const orderedTypes = configuredOrder
            ? [
                ...configuredOrder.filter((type) => configuredEntries.some(([entryType]) => entryType === type)),
                ...configuredEntries
                    .map(([type]) => type)
                    .filter((type) => !configuredOrder.includes(type)),
            ]
            : configuredEntries.map(([type]) => type);
        const entries = orderedTypes.map((type) => [type, controlConfig[type]]);
        if (entries.length > 0) {
            return entries
                .filter(([, definition]) => definition !== false)
                .filter(([type, definition]) => {
                const controlEntity = definition === true || definition === false
                    ? undefined
                    : definition.entity;
                const selectState = controlEntity
                    ? hass?.states?.[controlEntity]
                    : undefined;
                return (isSelectModeEntity(selectState) ||
                    supportsModeType(type, entityDomain, attributes, adapter));
            })
                .map(([type, definition]) => {
                const { _name, _hide_when_off, hide_when_off, hide_off_when_off, _icons, _heading, entity: controlEntity, ...controlField } = definition === true ? {} : definition;
                const selectState = controlEntity
                    ? hass?.states?.[controlEntity]
                    : undefined;
                const useSelectEntity = isSelectModeEntity(selectState);
                const modeSpecification = {
                    ...controlField,
                    ...(hide_off_when_off === true ? { hide_off_when_off } : {}),
                };
                return {
                    type,
                    entity: useSelectEntity ? controlEntity : undefined,
                    hide_when_off: hide_when_off ?? _hide_when_off,
                    icons: _icons,
                    heading: _heading,
                    name: _name,
                    preserve_option_order: Object.keys(controlField).length > 0,
                    list: useSelectEntity
                        ? getModeListFromSelect(selectState, modeSpecification)
                        : getModeList(type, attributes, adapter, modeSpecification),
                };
            });
        }
    }
    return buildBasicControlModes(adapter.getDefaultControl(), entityDomain, attributes, adapter);
}
function removeOffFromSecondaryModes(controlModes) {
    if (!controlModes.some(({ type }) => type === MODES.STATE)) {
        return controlModes;
    }
    return controlModes.map((mode) => mode.type && mode.type !== MODES.STATE
        ? {
            ...mode,
            list: mode.list?.filter(({ value }) => value !== 'off') ?? [],
        }
        : mode);
}
function sortControlModes(controlModes, entityDomain) {
    if (entityDomain !== 'fan' && entityDomain !== 'climate')
        return controlModes;
    const getControlOrder = (type) => {
        const index = CONTROL_ORDER.indexOf(type);
        return index === -1 ? CONTROL_ORDER.length : index;
    };
    return [...controlModes].sort((a, b) => getControlOrder(a.type) - getControlOrder(b.type));
}
function shouldPreserveConfiguredControlOrder(control) {
    if (Array.isArray(control))
        return true;
    if (!control || typeof control !== 'object')
        return false;
    return Array.isArray(control._order);
}
class SimpleThermostat extends i$1 {
    constructor() {
        super(...arguments);
        this.modes = [];
        this._hass = {};
        this.entities = [];
        this.showEntities = true;
        this.name = '';
        this.stepSize = STEP_SIZE;
        this._values = {};
        this._updatingValues = false;
        this._hide = DEFAULT_HIDE;
        this._updatingValuesTimeout = null;
        this._holdTimer = null;
        this._holdFired = false;
        this._clickCount = 0;
        this._clickTimer = null;
        this._setpointUpdateTimer = null;
        this._pendingSetpointValues = null;
        this._setpointDebounce = SETPOINT_DEBOUNCE_TIMEOUT;
        this.localize = (label, prefix = '') => {
            const key = `${prefix}${label}`;
            return this._hass.localize?.(key) || label;
        };
        this.toggleEntityChanged = (ev, entityId) => {
            if (!this.header || !entityId)
                return;
            const el = ev.target;
            this._callAction(`homeassistant.turn_${el.checked ? 'on' : 'off'}`, {
                entity_id: entityId,
            });
        };
        this.setMode = (type, mode) => {
            if (type && mode) {
                const adapter = getAdapter(this.config.entity);
                if (type === MODES.STATE) {
                    this._callAction(`${adapter.getLocalizationDomain()}.turn_${mode}`, {
                        entity_id: this.config.entity,
                    });
                    fireEvent(this, 'haptic', 'light');
                    return;
                }
                const configuredMode = this.modes.find((mode) => mode.type === type);
                if (configuredMode?.entity) {
                    this._callAction('select.select_option', {
                        entity_id: configuredMode.entity,
                        option: mode,
                    });
                    fireEvent(this, 'haptic', 'light');
                    return;
                }
                const value = adapter.transformModePayloadValue?.(type, mode) ?? mode;
                this._callAction(`${adapter.getLocalizationDomain()}.${adapter.getModeService(type)}`, {
                    entity_id: this.config.entity,
                    [adapter.getModePayloadKey(type)]: value,
                });
                fireEvent(this, 'haptic', 'light');
            }
            else {
                fireEvent(this, 'haptic', 'failure');
            }
        };
        this.openEntityPopover = (entityId = null) => {
            fireEvent(this, 'hass-more-info', {
                entityId: entityId || this.config.entity,
            });
        };
        this._onActionPointerDown = (e) => {
            if (e.button !== 0 && e.pointerType === 'mouse')
                return;
            this._holdFired = false;
            if (this._holdTimer)
                clearTimeout(this._holdTimer);
            this._holdTimer = setTimeout(() => {
                this._holdFired = true;
                this._holdTimer = null;
                this._dispatchAction('hold');
            }, SimpleThermostat.HOLD_MS);
        };
        this._onActionPointerUp = () => {
            if (this._holdTimer) {
                clearTimeout(this._holdTimer);
                this._holdTimer = null;
            }
        };
        this._onActionClick = (e) => {
            e.preventDefault();
            if (this._holdFired) {
                this._holdFired = false;
                return;
            }
            this._clickCount += 1;
            if (this._clickCount === 1) {
                if (this._clickTimer)
                    clearTimeout(this._clickTimer);
                this._clickTimer = setTimeout(() => {
                    this._clickCount = 0;
                    this._clickTimer = null;
                    this._dispatchSetpointTap();
                }, SimpleThermostat.DOUBLE_TAP_MS);
            }
            else {
                if (this._clickTimer)
                    clearTimeout(this._clickTimer);
                this._clickTimer = null;
                this._clickCount = 0;
                this._dispatchAction('double_tap');
            }
        };
        this._onSetpointKeyDown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this._dispatchSetpointTap();
            }
        };
    }
    static get styles() {
        return css_248z;
    }
    _sendSetpointValues(values) {
        const { domain, service, data = {} } = this.service;
        this._callAction(`${domain}.${service}`, {
            entity_id: this.config.entity,
            ...data,
            ...values,
        });
    }
    _scheduleSetpointValues(values) {
        const wait = this._setpointDebounce;
        if (wait <= 0) {
            this._sendSetpointValues(values);
            return;
        }
        this._pendingSetpointValues = { ...values };
        if (this._setpointUpdateTimer) {
            clearTimeout(this._setpointUpdateTimer);
        }
        this._setpointUpdateTimer = setTimeout(() => {
            const pendingValues = this._pendingSetpointValues;
            this._setpointUpdateTimer = null;
            this._pendingSetpointValues = null;
            if (pendingValues) {
                this._sendSetpointValues(pendingValues);
            }
        }, wait);
    }
    _getSetpointDebounce(config) {
        const value = Number(config?.setpoint_debounce_ms ?? SETPOINT_DEBOUNCE_TIMEOUT);
        return Number.isFinite(value) && value >= 0
            ? value
            : SETPOINT_DEBOUNCE_TIMEOUT;
    }
    _callAction(action, data) {
        if (typeof this._hass.callService === 'function') {
            const [domain, service] = action.split('.');
            this._hass.callService(domain, service, data);
        }
        else if (typeof this._hass.performAction === 'function') {
            this._hass.performAction({ action, data });
        }
    }
    static getConfigElement() {
        return window.document.createElement(`${name}-editor`);
    }
    static getStubConfig(hass) {
        const entity = Object.keys(hass.states ?? {}).find((id) => id.startsWith('climate.') ||
            id.startsWith('fan.') ||
            id.startsWith('humidifier.'));
        return { entity: entity ?? '' };
    }
    setConfig(config) {
        this.config = normalizeConfig({
            decimals: DECIMALS,
            ...config,
        });
        const setpointDebounce = this._getSetpointDebounce(this.config);
        if (setpointDebounce !== this._setpointDebounce) {
            this._setpointDebounce = setpointDebounce;
        }
        this.entities = [];
        this.showEntities = true;
        this.toggleAttribute('embedded', this.config.embedded === true);
        if (this._hass?.states) {
            this.updateFromHass(this._hass);
        }
    }
    set hass(hass) {
        if (hass?.states) {
            this._hass = hass;
        }
        if (!this.config?.entity) {
            return;
        }
        if (!hass?.states) {
            return;
        }
        const entity = hass.states[this.config.entity];
        if (!entity) {
            return;
        }
        this.updateFromHass(hass);
    }
    disconnectedCallback() {
        if (this._updatingValuesTimeout) {
            clearTimeout(this._updatingValuesTimeout);
            this._updatingValuesTimeout = null;
        }
        if (this._holdTimer) {
            clearTimeout(this._holdTimer);
            this._holdTimer = null;
        }
        if (this._clickTimer) {
            clearTimeout(this._clickTimer);
            this._clickTimer = null;
        }
        if (this._setpointUpdateTimer) {
            clearTimeout(this._setpointUpdateTimer);
            this._setpointUpdateTimer = null;
        }
        this._pendingSetpointValues = null;
        super.disconnectedCallback();
    }
    updateFromHass(hass) {
        const entity = hass.states[this.config.entity];
        if (this.entity !== entity) {
            this.entity = entity;
        }
        const adapter = getAdapter(this.config.entity);
        this.header = parseHeaderConfig(this.config.header, entity, hass, this.config.enhanced_visuals !== false);
        this.service = parseService(this.config?.service ?? false, adapter);
        const attributes = entity.attributes;
        let values = parseSetpoints(this.config?.setpoints ?? null, attributes, adapter, entity.state);
        if (this._updatingValues && isEqual(values, this._values)) {
            this._updatingValues = false;
            if (this._updatingValuesTimeout) {
                clearTimeout(this._updatingValuesTimeout);
                this._updatingValuesTimeout = null;
            }
        }
        else if (!this._updatingValues) {
            this._values = values;
        }
        const entityDomain = this.config.entity.split('.')[0];
        const configuredControlModes = removeOffFromSecondaryModes(buildConfiguredControlModes(this.config, entityDomain, attributes, adapter, hass));
        const controlModes = shouldPreserveConfiguredControlOrder(this.config.control)
            ? configuredControlModes
            : sortControlModes(configuredControlModes, entityDomain);
        this.modes = controlModes.map((values) => {
            const list = values.preserve_option_order
                ? values.list
                : values.type === MODES.HVAC
                    ? sortHvacModes(values.list)
                    : values.type === MODES.FAN
                        ? sortFanModes(values.list)
                        : values.list;
            const mode = values.entity && hass.states?.[values.entity]
                ? hass.states[values.entity].state
                : values.type === MODES.HVAC || values.type === MODES.STATE
                    ? entity.state
                    : attributes[adapter.getModePayloadKey(values.type)];
            return { ...values, list, mode };
        });
        const { step: rangeStep } = adapter.getRange(attributes);
        this.stepSize = Number(this.config.step_size ?? rangeStep ?? STEP_SIZE);
        this._hide = { ...DEFAULT_HIDE, ...(this.config.hide ?? {}) };
        const configuredEntities = getConfiguredEntities(this.config);
        if (configuredEntities === false) {
            this.showEntities = false;
            this.entities = [];
        }
        else if (configuredEntities) {
            this.showEntities = true;
            this.entities = configuredEntities.map(({ name, entity, attribute, template, unit = '', ...rest }) => {
                let state;
                const names = [name];
                if (entity) {
                    state = hass.states[entity];
                    names.push(state?.attributes?.friendly_name);
                    if (attribute && !template) {
                        state = state?.attributes?.[attribute];
                    }
                }
                else if (attribute && attribute in (this.entity.attributes ?? {})) {
                    state = template ? this.entity : this.entity.attributes[attribute];
                    names.push(attribute);
                }
                names.push(entity);
                return {
                    ...rest,
                    name: names.find((n) => !!n),
                    state,
                    entity,
                    attribute,
                    template,
                    unit,
                };
            });
        }
        else {
            this.showEntities = true;
            this.entities = [];
        }
    }
    render({ _hide, _values, _updatingValues, config, entity } = this) {
        if (!config) {
            return b `<ha-card class="loading"></ha-card>`;
        }
        const warnings = [];
        if (this.stepSize < 1 && this.config.decimals === 0) {
            warnings.push(b `
        <ha-alert alert-type="warning">
          Decimals is set to 0 and step_size is lower than 1. Decrementing a
          setpoint will likely not work. Change one of the settings to clear
          this warning.
        </ha-alert>
      `);
        }
        if (!entity && !this._hass?.states) {
            return b `<ha-card
        class="loading ${config.enhanced_visuals === false
                ? 'standard-visuals'
                : ''}"
      ></ha-card>`;
        }
        if (!entity) {
            return b `
        <ha-card
          class="missing-entity ${config.enhanced_visuals === false
                ? 'standard-visuals'
                : ''}"
        >
          <ha-alert alert-type="error">
            Entity not available: ${config.entity}
          </ha-alert>
        </ha-card>
      `;
        }
        const adapter = getAdapter(config.entity);
        const action = getEntityAction(entity);
        const { min: minValue, max: maxValue } = adapter.getRange(entity.attributes);
        const unit = this.getUnit();
        const entityDomain = config.entity.split('.')[0];
        const setpointCount = Object.keys(_values).length;
        const stepLayout = this.config.enhanced_visuals === false
            ? (this.config?.layout?.step ?? 'column')
            : (this.config?.layout?.step ?? 'row');
        const row = stepLayout === 'row';
        const isUnavailable = ['unavailable', 'unknown'].includes(entity.state);
        const safeClass = (value) => typeof value === 'string' ? value.replace(/[^a-z0-9_-]/gi, '') : '';
        const classes = [
            !this.header && 'no-header',
            `domain-${safeClass(entityDomain)}`,
            `state-${safeClass(entity.state)}`,
            this.config.enhanced_visuals === false && 'standard-visuals',
            this.config.embedded === true && 'embedded',
            safeClass(action),
            isUnavailable && safeClass(entity.state),
        ].filter((cx) => !!cx);
        const bodyClasses = [
            'body',
            this.showEntities && 'has-entities',
            `step-${stepLayout}`,
            `setpoint-count-${setpointCount}`,
        ].filter((cx) => !!cx);
        const embedded = config.embedded === true;
        const cardStyle = embedded
            ? getInlineCardStyle(config, entityDomain, entity.attributes)
            : getCardStyle(entityDomain, entity.attributes);
        const entitiesHtml = this.showEntities
            ? renderEntities({
                _hide,
                unit,
                hass: this._hass,
                entity: this.entity,
                entities: this.entities,
                config: this.config,
                adapter,
                localize: this.localize,
                openEntityPopover: this.openEntityPopover,
            })
            : '';
        const headerHtml = embedded
            ? b `<div class="embedded-header-reserve" aria-hidden="true"></div>`
            : renderHeader({
                header: this.header,
                hass: this._hass,
                toggleEntityChanged: this.toggleEntityChanged,
                entity: this.entity,
                openEntityPopover: this.openEntityPopover,
            });
        return b `
      <ha-card class="${classes.join(' ')}" style=${cardStyle}>
        ${config.styles
            ? b `<style>
              ${config.styles}
            </style>`
            : A}
        ${warnings}
        ${headerHtml}
        <section class="${bodyClasses.join(' ')}">
          ${entitiesHtml}
          ${this.renderSetpoints({
            values: _values,
            minValue,
            maxValue,
            unit,
            row,
            stepLayout,
            isOff: entity.state === HVAC_MODES.OFF,
            disableSteppers: entityDomain === 'climate' &&
                entity.state === HVAC_MODES.OFF &&
                this.config.disable_setpoint_change_when_off === true,
        })}
        </section>

        ${this.modes.length
            ? b `
              <section class="controls">
                ${this.modes.map((mode) => renderModeType({
                state: entity.state,
                entity,
                hass: this._hass,
                mode,
                adapter,
                localize: this.localize,
                modeOptions: this.config?.layout?.mode ?? {},
                setMode: this.setMode,
            }))}
              </section>
            `
            : A}
      </ha-card>
    `;
    }
    renderSetpoints({ values, minValue, maxValue, unit, row, stepLayout, isOff, disableSteppers, }) {
        if (this.config.hide_setpoint === true ||
            (this.config.hide_setpoint_when_off === true && isOff) ||
            (this.config.hide?.setpoint_when_off === true && isOff)) {
            return A;
        }
        return Object.entries(values).map(([field, value]) => this.renderSetpointControl({
            field,
            value,
            minValue,
            maxValue,
            unit,
            row,
            stepLayout,
            isOff,
            disableSteppers,
        }));
    }
    renderSetpointControl(options) {
        const { row, stepLayout } = options;
        const decreaseButton = this.renderSetpointStepper(options, 'decrease');
        const valueButton = this.renderSetpointValue(options);
        const increaseButton = this.renderSetpointStepper(options, 'increase');
        const label = this.renderSetpointLabel(options);
        return b `
      <div class="current-wrapper ${stepLayout}">
        ${row
            ? b `${decreaseButton}${valueButton}${increaseButton}`
            : b `${increaseButton}${valueButton}${decreaseButton}`}
        ${label}
      </div>
    `;
    }
    renderSetpointLabel({ field }) {
        if (this.config.hide?.setpoint_label === true)
            return A;
        const configuredLabel = this.config.label?.setpoint;
        const label = configuredLabel ??
            this._hass.localize?.(`ui.card.${getAdapter(this.config.entity).getLocalizationDomain()}.target`) ??
            this._hass.localize?.('ui.card.climate.target_temperature') ??
            this.localize(field, 'state_attributes.climate.');
        return b `<div class="current--label">${label}</div>`;
    }
    renderSetpointStepper({ field, value, minValue, maxValue, row, disableSteppers, }, direction) {
        const numericValue = Number(value);
        const hasNumericValue = !Number.isNaN(numericValue);
        const decreasing = direction === 'decrease';
        const disabled = disableSteppers ||
            (decreasing
                ? value === null ||
                    (minValue !== null && hasNumericValue && numericValue <= minValue)
                : (value === null && minValue === null) ||
                    (value !== null &&
                        maxValue !== null &&
                        hasNumericValue &&
                        numericValue >= maxValue));
        const icon = decreasing
            ? row
                ? ICONS.MINUS
                : ICONS.DOWN
            : row
                ? ICONS.PLUS
                : ICONS.UP;
        return b `
      <button
        type="button"
        ?disabled=${disabled}
        class="thermostat-trigger ${direction}"
        aria-label=${`${decreasing ? 'Decrease' : 'Increase'} ${field}`}
        @click="${() => decreasing
            ? this.setTemperature(-this.stepSize, field)
            : value === null && minValue !== null
                ? this.setTemperature(0, field, minValue)
                : this.setTemperature(this.stepSize, field)}"
      >
        <ha-icon .icon=${icon}></ha-icon>
      </button>
    `;
    }
    renderSetpointValue({ field, value, unit, isOff }) {
        const hasValue = ['string', 'number'].includes(typeof value) &&
            value !== '' &&
            value !== null;
        const showUnit = unit !== false && hasValue;
        const showOffFallback = isOff && !hasValue;
        const displayValue = showOffFallback
            ? 'OFF'
            : formatNumber(value, {
                ...this.config,
                locale: this._hass.locale,
            });
        const unitText = showUnit && typeof unit === 'string' ? unit : '';
        const unitSeparator = unitText === '%' ? '' : ' ';
        const valueText = unitText && displayValue.endsWith(unitText)
            ? displayValue.slice(0, -unitText.length).trimEnd()
            : displayValue;
        const displayWithUnit = unitText
            ? `${valueText}${unitSeparator}${unitText}`
            : displayValue;
        return b `
      <h3
        @pointerdown=${this._onActionPointerDown}
        @pointerup=${this._onActionPointerUp}
        @pointercancel=${this._onActionPointerUp}
        @click=${this._onActionClick}
        @keydown=${this._onSetpointKeyDown}
        role="button"
        tabindex="0"
        aria-label=${`${field}: ${displayWithUnit}`}
        class=${[
            'current--value',
            showOffFallback && 'current--off',
            this._updatingValues && 'updating',
        ]
            .filter(Boolean)
            .join(' ')}
      >
        ${valueText}${unitText
            ? b `${unitSeparator}<span class="current--unit">${unitText}</span>`
            : A}
      </h3>
    `;
    }
    setTemperature(change, field, baseValue) {
        this._updatingValues = true;
        if (this._updatingValuesTimeout) {
            clearTimeout(this._updatingValuesTimeout);
        }
        this._updatingValuesTimeout = setTimeout(() => {
            this._updatingValues = false;
            this._updatingValuesTimeout = null;
        }, UPDATING_TIMEOUT);
        const previousValue = baseValue ?? this._values[field];
        const newValue = Number(previousValue) + change;
        const { decimals } = this.config;
        this._values = {
            ...this._values,
            [field]: +formatNumber(newValue, { decimals }),
        };
        this._scheduleSetpointValues(this._values);
    }
    _dispatchSetpointTap() {
        if (this.config?.tap_action) {
            this._dispatchAction('tap');
            return;
        }
        this.openEntityPopover(this.config.entity);
    }
    _dispatchAction(kind) {
        const key = kind === 'tap'
            ? 'tap_action'
            : kind === 'hold'
                ? 'hold_action'
                : 'double_tap_action';
        const action = this.config?.[key] ??
            (kind === 'tap' ? { action: 'more-info' } : { action: 'none' });
        fireEvent(this, 'hass-action', {
            config: this.config,
            action,
        });
    }
    getCardSize() {
        if (!this.config)
            return 1;
        const headerRows = this.config.embedded === true || this.header ? 1 : 0;
        const entityRows = this.showEntities && this.entities?.length
            ? Math.max(1, Math.ceil(this.entities.length / 2))
            : 0;
        const setpointRows = this.config.hide_setpoint === true ||
            (this.config.hide_setpoint_when_off === true &&
                this.entity?.state === HVAC_MODES.OFF) ||
            (this.config.hide?.setpoint_when_off === true &&
                this.entity?.state === HVAC_MODES.OFF)
            ? 0
            : 1;
        const modeRows = this.modes?.filter((mode) => {
            if (mode.hide_when_off === true && this.entity?.state === HVAC_MODES.OFF) {
                return false;
            }
            return (mode.list ?? []).some(({ hide_when_off }) => !(hide_when_off === true && this.entity?.state === HVAC_MODES.OFF));
        }).length ?? 0;
        const warningRows = this.stepSize < 1 && this.config.decimals === 0 ? 1 : 0;
        return Math.max(1, headerRows + entityRows + setpointRows + modeRows + warningRows);
    }
    getUnit() {
        if (['boolean', 'string'].includes(typeof this.config.unit)) {
            return this.config?.unit;
        }
        const entityDomain = this.config.entity.split('.')[0];
        if (entityDomain === 'fan' || entityDomain === 'humidifier') {
            return '%';
        }
        return this._hass.config?.unit_system?.temperature ?? false;
    }
}
SimpleThermostat.HOLD_MS = 500;
SimpleThermostat.DOUBLE_TAP_MS = 250;
__decorate([
    n$2()
], SimpleThermostat.prototype, "config", void 0);
__decorate([
    n$2()
], SimpleThermostat.prototype, "header", void 0);
__decorate([
    n$2()
], SimpleThermostat.prototype, "service", void 0);
__decorate([
    n$2()
], SimpleThermostat.prototype, "modes", void 0);
__decorate([
    n$2()
], SimpleThermostat.prototype, "entity", void 0);
__decorate([
    n$2()
], SimpleThermostat.prototype, "entities", void 0);
__decorate([
    n$2()
], SimpleThermostat.prototype, "showEntities", void 0);
__decorate([
    n$2()
], SimpleThermostat.prototype, "name", void 0);
__decorate([
    n$2({
        type: Object,
    })
], SimpleThermostat.prototype, "_values", void 0);
__decorate([
    n$2()
], SimpleThermostat.prototype, "_updatingValues", void 0);
__decorate([
    n$2()
], SimpleThermostat.prototype, "_hide", void 0);

if (!customElements.get(name)) {
    customElements.define(name, SimpleThermostat);
}
if (!customElements.get(`${name}-editor`)) {
    customElements.define(`${name}-editor`, SimpleThermostatEditor);
}
if (!customElements.get(`${name}-group`)) {
    customElements.define(`${name}-group`, SimpleThermostatGroup);
}
if (!customElements.get(`${name}-group-editor`)) {
    customElements.define(`${name}-group-editor`, SimpleThermostatGroupEditor);
}
console.info(`%c SIMPLE-THERMOSTAT %c v${version} `, 'color: var(--text-primary-color); background: var(--primary-color); font-weight: 700; padding: 2px 6px; border-radius: 3px 0 0 3px;', 'color: var(--primary-color); background: var(--card-background-color); font-weight: 700; padding: 2px 6px; border-radius: 0 3px 3px 0;');
const w = window;
w.customCards = w.customCards || [];
if (!w.customCards.find((c) => c.type === name)) {
    w.customCards.push({
        type: name,
        name: 'Simple Thermostat',
        preview: true,
        description: 'A different take on the thermostat card',
        documentationURL: 'https://github.com/Wheemer/simple-thermostat',
    });
}
if (!w.customCards.find((c) => c.type === `${name}-group`)) {
    w.customCards.push({
        type: `${name}-group`,
        name: 'Simple Thermostat Group',
        preview: true,
        description: 'Switch between multiple thermostat cards in one footprint',
        documentationURL: 'https://github.com/Wheemer/simple-thermostat',
    });
}
