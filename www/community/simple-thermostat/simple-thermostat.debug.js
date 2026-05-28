(function() {
    const env = {"DEBUG":true};
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
var version = "3.1.2";

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$4=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$5=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$4)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$3,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$2,getOwnPropertySymbols:o$4,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$3(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$3(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$2(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$2=t=>t,s$1=t$1.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$3=`lit$${Math.random().toFixed(9).slice(2)}$`,n$1="?"+o$3,r$1=`<${n$1}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$2?e$2.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r$1:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$3+x):s+o$3+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$3),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$3)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$3),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n$1)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$3,t+1));)d.push({type:7,index:l}),t+=o$3.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$2(t).nextSibling;i$2(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t$1.litHtmlPolyfillSupport;B?.(S,k),(t$1.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;let i$1 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}};i$1._$litElement$=true,i$1["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i$1});const o$2=s.litElementPolyfillSupport;o$2?.({LitElement:i$1});(s.litElementVersions??=[]).push("4.2.2");

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
  --st-default-spacing: 4px;
}
ha-card {
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: var(--ha-font-smoothing, antialiased);
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
  --off-color: #8a8a8a;
  --fan_only-color: #8a8a8a;
  --dry-color: #efbd07;
}

ha-card.no-header {
  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 4) 0;
}

.body {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, auto);
  align-items: center;
  justify-items: center;
  place-items: center;
  padding: 0 calc(var(--st-spacing, var(--st-default-spacing)) * 4);
  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

.toggle-label {
  color: var(--st-toggle-label-color, var(--primary-text-color));
  margin-right: var(--st-spacing, var(--st-default-spacing));
  font-size: 16px;
  font-size: var(
    --st-font-size-toggle-label,
    var(--ha-font-size-l, 16px)
  );
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
  font-size: 16px;
  font-size: var(
    --st-font-size-entities,
    var(--st-font-size-sensors, var(--ha-font-size-l, 16px))
  );
}
.entities.as-list {
  grid-auto-flow: column;
  grid-template-columns: min-content;
}

.entities.as-table.without-labels {
    grid: auto-flow / 100%;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.entities.as-table.with-labels {
    grid: auto-flow / auto auto;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.entity-value {
  display: flex;
  align-items: center;
  padding-bottom: 0;
}
.entity-heading {
  font-weight: 300;
  padding-right: 8px;
  padding-bottom: 0;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.entities:empty {
  display: none;
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 6)
    calc(var(--st-spacing, var(--st-default-spacing)) * 2)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}
.header__icon {
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  color: #44739e;
  color: var(--state-icon-color, #44739e);
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
}

.header__toggles {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0;
  margin-left: auto;
}

.header__toggle {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
}

.current-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
}

.current-wrapper.row {
    flex-direction: row-reverse;
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
    color: var(--error-color);
  }
.current--unit {
  font-size: 20px;
  font-size: var(--st-font-size-m, var(--ha-font-size-xl, 20px));
}
.thermostat-trigger {
  padding: 0px;
}
.clickable {
  cursor: pointer;
}
.modes {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  grid-gap: 2px;
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  padding: var(--st-spacing, var(--st-default-spacing));
}
.modes.heading {
    grid-template-columns: min-content;
  }
.mode-title {
  padding: 0 16px;
  align-self: center;
  justify-self: center;
  place-self: center;
  font-size: 16px;
  font-size: var(
    --st-font-size-entities,
    var(--st-font-size-sensors, var(--ha-font-size-l, 16px))
  );
  font-weight: 300;
  white-space: nowrap;
}
.mode-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-height: 24px;
  padding: var(--st-spacing, var(--st-default-spacing)) 0;
  background: var(--st-mode-background, var(--secondary-background-color));
  color: var(--secondary-text-color);
  cursor: pointer;
  border-radius: var(--st-spacing, var(--st-default-spacing));
}
.mode-item:hover {
    color: var(--st-mode-active-color, var(--primary-text-color));
  }
.mode-item.active,.mode-item.active:hover {
    background: var(--st-mode-active-background, var(--primary-color));
    color: var(--st-mode-active-color, var(--text-primary-color));
  }
.mode-item.active.off {
    background: var(--st-mode-active-background, var(--off-color));
  }
.mode-item.active.heat {
    background: var(--st-mode-active-background, var(--heat-color));
  }
.mode-item.active.cool {
    background: var(--st-mode-active-background, var(--cool-color));
  }
.mode-item.active.heat_cool {
    background: var(--st-mode-active-background, var(--heat_cool-color));
  }
.mode-item.active.auto {
    background: var(--st-mode-active-background, var(--auto-color));
  }
.mode-item.active.dry {
    background: var(--st-mode-active-background, var(--dry-color));
  }
.mode-item.active.fan_only {
    background: var(--st-mode-active-background, var(--fan_only-color));
  }
.mode-icon {
  --iron-icon-width: 24px;
  --iron-icon-height: 24px;
  display: block;
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

function setValue(obj, path, value) {
    const pathFragments = path.split('.');
    let o = obj;
    while (pathFragments.length - 1) {
        var fragment = pathFragments.shift();
        if (!o.hasOwnProperty(fragment))
            o[fragment] = {};
        o = o[fragment];
    }
    o[pathFragments[0]] = value;
}
const OptionsDecimals = [0, 1];
const OptionsStepSize = [0.5, 1];
const OptionsStepLayout = ['column', 'row'];
const includeDomains = ['climate'];
const GithubReadMe = 'https://github.com/Wheemer/simple-thermostat/blob/master/README.md';
const stub = {
    header: {},
    layout: {
        mode: {},
    },
};
const cloneDeep = (obj) => JSON.parse(JSON.stringify(obj));
class SimpleThermostatEditor extends i$1 {
    static get styles() {
        return css_248z;
    }
    static get properties() {
        return { hass: {}, config: {} };
    }
    static getStubConfig() {
        return Object.assign({}, stub);
    }
    setConfig(config) {
        this.config = config || Object.assign({}, stub);
    }
    _openLink() {
        window.open(GithubReadMe);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
        if (!this.hass)
            return b ``;
        return b `
      <div class="card-config">
        <div class="overall-config">
          <div class="side-by-side">
            <ha-entity-picker
              label="Entity (required)"
              .hass=${this.hass}
              .value="${this.config.entity}"
              .configValue=${'entity'}
              .includeDomains=${includeDomains}
              @change="${this.valueChanged}"
              allow-custom-entity
            ></ha-entity-picker>
            <ha-entity-picker
              label="Current temperature entity (optional)"
              .hass=${this.hass}
              .value="${this.config.current_temperature_entity}"
              .configValue=${'current_temperature_entity'}
              @change="${this.valueChanged}"
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <ha-formfield label="Show header?">
            <ha-switch
              .checked=${this.config.header !== false}
              @change=${this.toggleHeader}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode names?">
            <ha-switch
              .checked=${((_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.mode) === null || _c === void 0 ? void 0 : _c.names) !== false}
              .configValue="${'layout.mode.names'}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode icons?">
            <ha-switch
              .checked=${((_f = (_e = (_d = this.config) === null || _d === void 0 ? void 0 : _d.layout) === null || _e === void 0 ? void 0 : _e.mode) === null || _f === void 0 ? void 0 : _f.icons) !== false}
              .configValue="${'layout.mode.icons'}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode headings?">
            <ha-switch
              .checked=${((_j = (_h = (_g = this.config) === null || _g === void 0 ? void 0 : _g.layout) === null || _h === void 0 ? void 0 : _h.mode) === null || _j === void 0 ? void 0 : _j.headings) !== false}
              .configValue="${'layout.mode.headings'}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>

          ${this.config.header !== false
            ? b `
                <div class="side-by-side">
                  <ha-textfield
                    label="Name (optional)"
                    .value="${(_l = (_k = this.config.header) === null || _k === void 0 ? void 0 : _k.name) !== null && _l !== void 0 ? _l : ''}"
                    .configValue="${'header.name'}"
                    @input="${this.valueChanged}"
                  ></ha-textfield>

                  <ha-icon-input
                    label="Icon (optional)"
                    .value="${(_m = this.config.header) === null || _m === void 0 ? void 0 : _m.icon}"
                    .configValue=${'header.icon'}
                    @value-changed=${this.valueChanged}
                  ></ha-icon-input>
                </div>

                <div class="side-by-side">
                  <ha-entity-picker
                    label="Toggle Entity (optional)"
                    .hass=${this.hass}
                    .value="${(_q = (_p = (_o = this.config) === null || _o === void 0 ? void 0 : _o.header) === null || _p === void 0 ? void 0 : _p.toggle) === null || _q === void 0 ? void 0 : _q.entity}"
                    .configValue=${'header.toggle.entity'}
                    @change="${this.valueChanged}"
                    allow-custom-entity
                  ></ha-entity-picker>

                  <ha-textfield
                    label="Toggle entity label"
                    .value="${(_u = (_t = (_s = (_r = this.config) === null || _r === void 0 ? void 0 : _r.header) === null || _s === void 0 ? void 0 : _s.toggle) === null || _t === void 0 ? void 0 : _t.name) !== null && _u !== void 0 ? _u : ''}"
                    .configValue="${'header.toggle.name'}"
                    @input="${this.valueChanged}"
                  ></ha-textfield>
                </div>
              `
            : ''}

          <div class="side-by-side">
            <ha-textfield
              label="Fallback Text (optional)"
              .value="${(_v = this.config.fallback) !== null && _v !== void 0 ? _v : ''}"
              .configValue="${'fallback'}"
              @input="${this.valueChanged}"
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="Decimals (optional)"
              .configValue=${'decimals'}
              .value="${(_x = (_w = this.config.decimals) === null || _w === void 0 ? void 0 : _w.toString()) !== null && _x !== void 0 ? _x : ''}"
              @selected="${this.valueChanged}"
              @closed="${(e) => e.stopPropagation()}"
            >
              ${Object.values(OptionsDecimals).map((item) => b `<ha-list-item .value="${item.toString()}">${item}</ha-list-item>`)}
            </ha-select>

            <ha-textfield
              label="Unit (optional)"
              .value="${(_y = this.config.unit) !== null && _y !== void 0 ? _y : ''}"
              .configValue="${'unit'}"
              @input="${this.valueChanged}"
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="Step Layout (optional)"
              .configValue=${'layout.step'}
              .value="${(_0 = (_z = this.config.layout) === null || _z === void 0 ? void 0 : _z.step) !== null && _0 !== void 0 ? _0 : ''}"
              @selected="${this.valueChanged}"
              @closed="${(e) => e.stopPropagation()}"
            >
              ${Object.values(OptionsStepLayout).map((item) => b `<ha-list-item .value="${item}">${item}</ha-list-item>`)}
            </ha-select>

            <ha-select
              label="Step Size (optional)"
              .configValue=${'step_size'}
              .value="${(_2 = (_1 = this.config.step_size) === null || _1 === void 0 ? void 0 : _1.toString()) !== null && _2 !== void 0 ? _2 : ''}"
              @selected="${this.valueChanged}"
              @closed="${(e) => e.stopPropagation()}"
            >
              ${Object.values(OptionsStepSize).map((item) => b `<ha-list-item .value="${item.toString()}">${item}</ha-list-item>`)}
            </ha-select>
          </div>

          <div class="side-by-side">
            <ha-button @click=${this._openLink}>
              Configuration Options
            </ha-button>

            Settings for label, control, sensors, faults and hiding UI elements
            can only be configured in the code editor
          </div>
        </div>
      </div>
    `;
    }
    valueChanged(ev) {
        if (!this.config || !this.hass) {
            return;
        }
        const { target } = ev;
        const copy = cloneDeep(this.config);
        if (target.configValue) {
            if (target.value === '') {
                delete copy[target.configValue];
            }
            else {
                setValue(copy, target.configValue, target.checked !== undefined ? target.checked : target.value);
            }
        }
        fireEvent(this, 'config-changed', { config: copy });
    }
    toggleHeader(ev) {
        this.config.header = ev.target.checked ? {} : false;
        fireEvent(this, 'config-changed', { config: this.config });
    }
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

const copyProperty = (to, from, property, ignoreNonConfigurable) => {
	// `Function#length` should reflect the parameters of `to` not `from` since we keep its body.
	// `Function#prototype` is non-writable and non-configurable so can never be modified.
	if (property === 'length' || property === 'prototype') {
		return;
	}

	// `Function#arguments` and `Function#caller` should not be copied. They were reported to be present in `Reflect.ownKeys` for some devices in React Native (#41), so we explicitly ignore them here.
	if (property === 'arguments' || property === 'caller') {
		return;
	}

	const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
	const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);

	if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
		return;
	}

	Object.defineProperty(to, property, fromDescriptor);
};

// `Object.defineProperty()` throws if the property exists, is not configurable and either:
// - one its descriptors is changed
// - it is non-writable and its value is changed
const canCopyProperty = function (toDescriptor, fromDescriptor) {
	return toDescriptor === undefined || toDescriptor.configurable || (
		toDescriptor.writable === fromDescriptor.writable
		&& toDescriptor.enumerable === fromDescriptor.enumerable
		&& toDescriptor.configurable === fromDescriptor.configurable
		&& (toDescriptor.writable || toDescriptor.value === fromDescriptor.value)
	);
};

const changePrototype = (to, from) => {
	const fromPrototype = Object.getPrototypeOf(from);
	if (fromPrototype === Object.getPrototypeOf(to)) {
		return;
	}

	Object.setPrototypeOf(to, fromPrototype);
};

const wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/\n${fromBody}`;

const toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, 'toString');
const toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, 'name');

// We call `from.toString()` early (not lazily) to ensure `from` can be garbage collected.
// We use `bind()` instead of a closure for the same reason.
// Calling `from.toString()` early also allows caching it in case `to.toString()` is called several times.
const changeToString = (to, from, name) => {
	const withName = name === '' ? '' : `with ${name.trim()}() `;
	const newToString = wrappedToString.bind(null, withName, from.toString());
	// Ensure `to.toString.toString` is non-enumerable and has the same `same`
	Object.defineProperty(newToString, 'name', toStringName);
	const {writable, enumerable, configurable} = toStringDescriptor; // We destructue to avoid a potential `get` descriptor.
	Object.defineProperty(to, 'toString', {value: newToString, writable, enumerable, configurable});
};

function mimicFunction(to, from, {ignoreNonConfigurable = false} = {}) {
	const {name} = to;

	for (const property of Reflect.ownKeys(from)) {
		copyProperty(to, from, property, ignoreNonConfigurable);
	}

	changePrototype(to, from);
	changeToString(to, from, name);

	return to;
}

const debounceFunction = (inputFunction, options = {}) => {
	if (typeof inputFunction !== 'function') {
		throw new TypeError(`Expected the first argument to be a function, got \`${typeof inputFunction}\``);
	}

	const {
		wait = 0,
		maxWait = Number.POSITIVE_INFINITY,
		before = false,
		after = true,
	} = options;

	if (wait < 0 || maxWait < 0) {
		throw new RangeError('`wait` and `maxWait` must not be negative.');
	}

	if (!before && !after) {
		throw new Error('Both `before` and `after` are false, function wouldn\'t be called.');
	}

	let timeout;
	let maxTimeout;
	let result;

	const debouncedFunction = function (...arguments_) {
		const context = this; // eslint-disable-line unicorn/no-this-assignment

		const later = () => {
			timeout = undefined;

			if (maxTimeout) {
				clearTimeout(maxTimeout);
				maxTimeout = undefined;
			}

			if (after) {
				result = inputFunction.apply(context, arguments_);
			}
		};

		const maxLater = () => {
			maxTimeout = undefined;

			if (timeout) {
				clearTimeout(timeout);
				timeout = undefined;
			}

			if (after) {
				result = inputFunction.apply(context, arguments_);
			}
		};

		const shouldCallNow = before && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (maxWait > 0 && maxWait !== Number.POSITIVE_INFINITY && !maxTimeout) {
			maxTimeout = setTimeout(maxLater, maxWait);
		}

		if (shouldCallNow) {
			result = inputFunction.apply(context, arguments_);
		}

		return result;
	};

	mimicFunction(debouncedFunction, inputFunction);

	debouncedFunction.cancel = () => {
		if (timeout) {
			clearTimeout(timeout);
			timeout = undefined;
		}

		if (maxTimeout) {
			clearTimeout(maxTimeout);
			maxTimeout = undefined;
		}
	};

	return debouncedFunction;
};

function isEqual(a, b) {
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) {
        return false;
    }
    return !keys.some((key) => (a === null || a === void 0 ? void 0 : a[key]) !== (b === null || b === void 0 ? void 0 : b[key]));
}

function getLanguage(locale) {
    if (!locale)
        return undefined;
    if (locale.number_format === 'system')
        return undefined;
    return locale.language;
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
    if (locale.number_format === 'decimal_comma') {
        return value.toFixed(decimals).replace('.', ',');
    }
    if (locale.number_format === 'space_comma') {
        return value.toFixed(decimals).replace('.', ',');
    }
    if (locale.number_format === 'comma_decimal' ||
        locale.number_format === 'none') {
        return value.toFixed(decimals);
    }
    return new Intl.NumberFormat(getLanguage(locale), {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value);
}

function renderHeader({ header, toggleEntityChanged, entity, openEntityPopover, }) {
    var _a, _b;
    if (header === false) {
        return A;
    }
    const action = entity.attributes.hvac_action || entity.state;
    let icon = header.icon;
    if (typeof header.icon === 'object') {
        icon = (_a = icon === null || icon === void 0 ? void 0 : icon[action]) !== null && _a !== void 0 ? _a : false;
    }
    const name = (_b = header === null || header === void 0 ? void 0 : header.name) !== null && _b !== void 0 ? _b : false;
    return b `
    <header>
      <div
        style="display: flex;"
        class="clickable"
        @click=${() => openEntityPopover()}
      >
        ${renderIcon$1(icon)} ${renderName(name)}
      </div>
      ${renderFaults(header.faults, openEntityPopover)}
      ${renderToggles(header.toggles, openEntityPopover, toggleEntityChanged)}
    </header>
  `;
}
function renderIcon$1(icon) {
    return icon
        ? b ` <ha-icon class="header__icon" .icon=${icon}></ha-icon> `
        : A;
}
function renderName(name) {
    return name ? b `<h2 class="header__title">${name}</h2>` : A;
}
function renderFaults(faults, openEntityPopover) {
    if (faults.length === 0) {
        return A;
    }
    const faultHtml = faults.map(({ icon, hide_inactive, state }) => {
        return b ` <ha-icon
      class="fault-icon ${state.state === 'on'
            ? 'active'
            : hide_inactive
                ? ' hide'
                : ''}"
      icon="${icon || state.attributes.icon}"
      @click="${() => openEntityPopover(state.entity_id)}"
    ></ha-icon>`;
    });
    return b ` <div class="faults">${faultHtml}</div>`;
}
function renderToggles(toggles, openEntityPopover, toggleEntityChanged) {
    if (!(toggles === null || toggles === void 0 ? void 0 : toggles.length))
        return A;
    return b `
    <div class="header__toggles">
      ${toggles.map((toggle) => {
        var _a, _b, _c, _d;
        const entityId = (_a = toggle.entity) === null || _a === void 0 ? void 0 : _a.entity_id;
        return b `
          <div class="header__toggle">
            <span
              class="clickable toggle-label"
              title=${toggle.label || ((_c = (_b = toggle.entity) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c.friendly_name)}
              @click=${() => openEntityPopover(entityId)}
              >${toggle.icon !== false
            ? b `<ha-icon .icon=${toggle.icon}></ha-icon>`
            : toggle.label}
            </span>
            <ha-switch
              .checked=${((_d = toggle.entity) === null || _d === void 0 ? void 0 : _d.state) === 'on'}
              @change=${(ev) => toggleEntityChanged(ev, entityId)}
            ></ha-switch>
          </div>
        `;
    })}
    </div>
  `;
}

var squirrelly_min$1 = {exports: {}};

var squirrelly_min = squirrelly_min$1.exports;

var hasRequiredSquirrelly_min;

function requireSquirrelly_min () {
	if (hasRequiredSquirrelly_min) return squirrelly_min$1.exports;
	hasRequiredSquirrelly_min = 1;
	(function (module, exports) {
		!function(e,t){t(exports);}(squirrelly_min,(function(e){function t(e){var n,r,a=new Error(e);return n=a,r=t.prototype,Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r,a}function n(e,n,r){var a=n.slice(0,r).split(/\n/),i=a.length,s=a[i-1].length+1;throw t(e+=" at line "+i+" col "+s+":\n\n  "+n.split(/\n/)[i-1]+"\n  "+Array(s).join(" ")+"^")}t.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:false}});var r=new Function("return this")().Promise,a=false;try{a=new Function("return (async function(){}).constructor")();}catch(e){if(!(e instanceof SyntaxError))throw e}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function s(e,t,n){for(var r in t)i(t,r)&&(null==t[r]||"object"!=typeof t[r]||"storage"!==r&&"prefixes"!==r||n?e[r]=t[r]:e[r]=s({},t[r]));return e}var c=/^async +/,o=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,l=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,f=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,u=/[.*+\-?^${}()|[\]\\]/g;function p(e){return u.test(e)?e.replace(u,"\\$&"):e}function h(e,r){r.rmWhitespace&&(e=e.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),o.lastIndex=0,l.lastIndex=0,f.lastIndex=0;var a=r.prefixes,i=[a.h,a.b,a.i,a.r,a.c,a.e].reduce((function(e,t){return e&&t?e+"|"+p(t):t?p(t):e}),""),s=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+p(r.tags[1])+")","g"),u=new RegExp("([^]*?)"+p(r.tags[0])+"(-|_)?\\s*("+i+")?\\s*","g"),h=0,d=false;function g(t,a){var i,p={f:[]},g=0,v="c";function m(t){var a=e.slice(h,t),i=a.trim();if("f"===v)"safe"===i?p.raw=true:r.async&&c.test(i)?(i=i.replace(c,""),p.f.push([i,"",true])):p.f.push([i,""]);else if("fp"===v)p.f[p.f.length-1][1]+=i;else if("err"===v){if(i){var s=a.search(/\S/);n("invalid syntax",e,h+s);}}else p[v]=i;h=t+1;}for("h"===a||"b"===a||"c"===a?v="n":"r"===a&&(p.raw=true,a="i"),s.lastIndex=h;null!==(i=s.exec(e));){var y=i[1],x=i[2],b=i[3],w=i[4],F=i[5],S=i.index;if(y)"("===y?(0===g&&("n"===v?(m(S),v="p"):"f"===v&&(m(S),v="fp")),g++):")"===y?0===--g&&"c"!==v&&(m(S),v="err"):0===g&&"|"===y?(m(S),v="f"):"=>"===y&&(m(S),h+=1,v="res");else if(x){if("/*"===x){var I=e.indexOf("*/",s.lastIndex);-1===I&&n("unclosed comment",e,i.index),s.lastIndex=I+2;}else if("'"===x){l.lastIndex=i.index,l.exec(e)?s.lastIndex=l.lastIndex:n("unclosed string",e,i.index);}else if('"'===x){f.lastIndex=i.index,f.exec(e)?s.lastIndex=f.lastIndex:n("unclosed string",e,i.index);}else if("`"===x){o.lastIndex=i.index,o.exec(e)?s.lastIndex=o.lastIndex:n("unclosed string",e,i.index);}}else if(b)return m(S),h=S+i[0].length,u.lastIndex=h,d=F,w&&"h"===a&&(a="s"),p.t=a,p}return n("unclosed tag",e,t),p}var v=function i(s,o){s.b=[],s.d=[];var l,f=false,p=[];function v(e,t){e&&(e=function(e,t,n,r){var a,i;return "string"==typeof t.autoTrim?a=i=t.autoTrim:Array.isArray(t.autoTrim)&&(a=t.autoTrim[1],i=t.autoTrim[0]),(n||false===n)&&(a=n),(r||false===r)&&(i=r),"slurp"===a&&"slurp"===i?e.trim():("_"===a||"slurp"===a?e=String.prototype.trimLeft?e.trimLeft():e.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==a&&"nl"!==a||(e=e.replace(/^(?:\n|\r|\r\n)/,"")),"_"===i||"slurp"===i?e=String.prototype.trimRight?e.trimRight():e.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==i&&"nl"!==i||(e=e.replace(/(?:\n|\r|\r\n)$/,"")),e)}(e,r,d,t))&&(e=e.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),p.push(e));}for(;null!==(l=u.exec(e));){var m,y=l[1],x=l[2],b=l[3]||"";for(var w in a)if(a[w]===b){m=w;break}v(y,x),h=l.index+l[0].length,m||n("unrecognized tag type: "+b,e,h);var F=g(l.index,m),S=F.t;if("h"===S){var I=F.n||"";r.async&&c.test(I)&&(F.a=true,F.n=I.replace(c,"")),F=i(F),p.push(F);}else if("c"===S){if(s.n===F.n)return f?(f.d=p,s.b.push(f)):s.d=p,s;n("Helper start and end don't match",e,l.index+l[0].length);}else if("b"===S){f?(f.d=p,s.b.push(f)):s.d=p;var R=F.n||"";r.async&&c.test(R)&&(F.a=true,F.n=R.replace(c,"")),f=F,p=[];}else if("s"===S){var T=F.n||"";r.async&&c.test(T)&&(F.a=true,F.n=T.replace(c,"")),p.push(F);}else p.push(F);}if(!o)throw t('unclosed helper "'+s.n+'"');return v(e.slice(h,e.length),false),s.d=p,s}({f:[]},true);if(r.plugins)for(var m=0;m<r.plugins.length;m++){var y=r.plugins[m];y.processAST&&(v.d=y.processAST(v.d,r));}return v.d}function d(e,t){var n=h(e,t),r="var tR='';"+(t.useWith?"with("+t.varName+"||{}){":"")+x(n,t)+"if(cb){cb(null,tR)} return tR"+(t.useWith?"}":"");if(t.plugins)for(var a=0;a<t.plugins.length;a++){var i=t.plugins[a];i.processFnString&&(r=i.processFnString(r,t));}return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n][0],a=t[n][1];e=(t[n][2]?"await ":"")+"c.l('F','"+r+"')("+e,a&&(e+=","+a),e+=")";}return e}function v(e,t,n,r,a,i){var s="{exec:"+(a?"async ":"")+y(n,t,e)+",params:["+r+"]";return i&&(s+=",name:'"+i+"'"),a&&(s+=",async:true"),s+="}"}function m(e,t){for(var n="[",r=0;r<e.length;r++){var a=e[r];n+=v(t,a.res||"",a.d,a.p||"",a.a,a.n),r<e.length&&(n+=",");}return n+="]"}function y(e,t,n){return "function("+t+"){var tR='';"+x(e,n)+"return tR}"}function x(e,t){for(var n=0,r=e.length,a="";n<r;n++){var i=e[n];if("string"==typeof i){a+="tR+='"+i+"';";}else {var s=i.t,c=i.c||"",o=i.f,l=i.n||"",f=i.p||"",u=i.res||"",p=i.b,h=!!i.a;if("i"===s){t.defaultFilter&&(c="c.l('F','"+t.defaultFilter+"')("+c+")");var d=g(c,o);!i.raw&&t.autoEscape&&(d="c.l('F','e')("+d+")"),a+="tR+="+d+";";}else if("h"===s)if(t.storage.nativeHelpers.get(l))a+=t.storage.nativeHelpers.get(l)(i,t);else {var y=(h?"await ":"")+"c.l('H','"+l+"')("+v(t,u,i.d,f,h);y+=p?","+m(p,t):",[]",a+="tR+="+g(y+=",c)",o)+";";}else "s"===s?a+="tR+="+g((h?"await ":"")+"c.l('H','"+l+"')({params:["+f+"]},[],c)",o)+";":"e"===s&&(a+=c+"\n");}}return a}var b=function(){function e(e){this.cache=e;}return e.prototype.define=function(e,t){this.cache[e]=t;},e.prototype.get=function(e){return this.cache[e]},e.prototype.remove=function(e){delete this.cache[e];},e.prototype.reset=function(){this.cache={};},e.prototype.load=function(e){s(this.cache,e,true);},e}();function w(e,n,r,a){if(n&&n.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept blocks");if(r&&r.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept filters")}var F={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function S(e){return F[e]}var I=new b({}),R=new b({each:function(e,t){var n="",r=e.params[0];if(w("each",t,false),e.async)return new Promise((function(t){!function e(t,n,r,a,i){r(t[n],n).then((function(s){a+=s,n===t.length-1?i(a):e(t,n+1,r,a,i);}));}(r,0,e.exec,n,t);}));for(var a=0;a<r.length;a++)n+=e.exec(r[a],a);return n},foreach:function(e,t){var n=e.params[0];if(w("foreach",t,false),e.async)return new Promise((function(t){!function e(t,n,r,a,i,s){a(n[r],t[n[r]]).then((function(c){i+=c,r===n.length-1?s(i):e(t,n,r+1,a,i,s);}));}(n,Object.keys(n),0,e.exec,"",t);}));var r="";for(var a in n)i(n,a)&&(r+=e.exec(a,n[a]));return r},include:function(e,n,r){w("include",n,false);var a=r.storage.templates.get(e.params[0]);if(!a)throw t('Could not fetch template "'+e.params[0]+'"');return a(e.params[1],r)},extends:function(e,n,r){var a=e.params[1]||{};a.content=e.exec();for(var i=0;i<n.length;i++){var s=n[i];a[s.name]=s.exec();}var c=r.storage.templates.get(e.params[0]);if(!c)throw t('Could not fetch template "'+e.params[0]+'"');return c(a,r)},useScope:function(e,t){return w("useScope",t,false),e.exec(e.params[0])}}),T=new b({if:function(e,t){w("if",false,e.f,true);var n="if("+e.p+"){"+x(e.d,t)+"}";if(e.b)for(var r=0;r<e.b.length;r++){var a=e.b[r];"else"===a.n?n+="else{"+x(a.d,t)+"}":"elif"===a.n&&(n+="else if("+a.p+"){"+x(a.d,t)+"}");}return n},try:function(e,n){if(w("try",false,e.f,true),!e.b||1!==e.b.length||"catch"!==e.b[0].n)throw t("native helper 'try' only accepts 1 block, 'catch'");var r="try{"+x(e.d,n)+"}",a=e.b[0];return r+="catch"+(a.res?"("+a.res+")":"")+"{"+x(a.d,n)+"}"},block:function(e,t){return w("block",e.b,e.f,true),"if(!"+t.varName+"["+e.p+"]){tR+=("+y(e.d,"",t)+")()}else{tR+="+t.varName+"["+e.p+"]}"}}),E=new b({e:function(e){var t=String(e);return /[&<>"']/.test(t)?t.replace(/[&<>"']/g,S):t}}),j={varName:"it",autoTrim:[false,"nl"],autoEscape:true,defaultFilter:false,tags:["{{","}}"],l:function(e,n){if("H"===e){var r=this.storage.helpers.get(n);if(r)return r;throw t("Can't find helper '"+n+"'")}if("F"===e){var a=this.storage.filters.get(n);if(a)return a;throw t("Can't find filter '"+n+"'")}},async:false,storage:{helpers:R,nativeHelpers:T,filters:E,templates:I},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:false,plugins:[],useWith:false};function H(e,t){var n={};return s(n,j),t&&s(n,t),e&&s(n,e),n.l.bind(n),n}function O(e,n){var r=H(n||{}),i=Function;if(r.async){if(!a)throw t("This environment doesn't support async/await");i=a;}try{return new i(r.varName,"c","cb",d(e,r))}catch(n){throw n instanceof SyntaxError?t("Bad template syntax\n\n"+n.message+"\n"+Array(n.message.length+1).join("=")+"\n"+d(e,r)):n}}function _(e,t){var n;return t.cache&&t.name&&t.storage.templates.get(t.name)?t.storage.templates.get(t.name):(n="function"==typeof e?e:O(e,t),t.cache&&t.name&&t.storage.templates.define(t.name,n),n)}j.l.bind(j),e.compile=O,e.compileScope=x,e.compileScopeIntoFunction=y,e.compileToString=d,e.defaultConfig=j,e.filters=E,e.getConfig=H,e.helpers=R,e.nativeHelpers=T,e.parse=h,e.render=function(e,n,a,i){var s=H(a||{});if(!s.async)return _(e,s)(n,s);if(!i){if("function"==typeof r)return new r((function(t,r){try{t(_(e,s)(n,s));}catch(e){r(e);}}));throw t("Please provide a callback function, this env doesn't support Promises")}try{_(e,s)(n,s,i);}catch(e){return i(e)}},e.templates=I,Object.defineProperty(e,"__esModule",{value:true});}));
		
	} (squirrelly_min$1, squirrelly_min$1.exports));
	return squirrelly_min$1.exports;
}

var squirrelly_minExports = /*@__PURE__*/ requireSquirrelly_min();

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
 */class e extends i{constructor(i){if(super(i),this.it=A,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A||null==r)return this._t=void 0,this.it=r;if(r===E)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

const renderIcon = (icon) => `<ha-icon icon="${icon}"></ha-icon>`;
squirrelly_minExports.defaultConfig.autoEscape = false; // Turns autoEscaping on
squirrelly_minExports.filters.define('icon', renderIcon);
squirrelly_minExports.filters.define('join', (arr, delimiter = ', ') => arr.join(delimiter));
squirrelly_minExports.filters.define('css', (str, css) => {
    const styles = Object.entries(css).reduce((memo, [key, val]) => {
        return `${memo}${key}:${val};`;
    }, '');
    return `<span style="${styles}">${str}</span>`;
});
squirrelly_minExports.filters.define('debug', (data) => {
    try {
        return JSON.stringify(data);
    }
    catch (_a) {
        return `Not able to read valid JSON object from: ${data}`;
    }
});
function wrapEntities(config, content) {
    var _a, _b, _c, _d;
    const { type, labels: showLabels } = (_d = (_b = (_a = config === null || config === void 0 ? void 0 : config.layout) === null || _a === void 0 ? void 0 : _a.entities) !== null && _b !== void 0 ? _b : (_c = config === null || config === void 0 ? void 0 : config.layout) === null || _c === void 0 ? void 0 : _c.sensors) !== null && _d !== void 0 ? _d : {
        type: 'table',
        labels: true,
    };
    const classes = [
        showLabels ? 'with-labels' : 'without-labels',
        type === 'list' ? 'as-list' : 'as-table',
    ];
    return b ` <div class="entities ${classes.join(' ')}">${content}</div> `;
}
function renderTemplated({ context, entityId, template = '{{state.text}}', label, unit = '', hass, variables = {}, config, localize, openEntityPopover, }) {
    var _a, _b, _c, _d, _e, _f;
    const { state, attributes } = context;
    const [domain] = entityId.split('.');
    const lang = hass.selectedLanguage || hass.language;
    const trPrefix = 'ui.card.climate.';
    const translations = Object.entries((_b = (_a = hass.resources) === null || _a === void 0 ? void 0 : _a[lang]) !== null && _b !== void 0 ? _b : {}).reduce((memo, [key, value]) => {
        if (key.startsWith(trPrefix))
            memo[key.replace(trPrefix, '')] = value;
        return memo;
    }, {});
    // Prepare data to inject as variables into the template
    const data = Object.assign(Object.assign({}, attributes), { state: {
            raw: state,
            text: typeof hass.formatEntityState === 'function'
                ? hass.formatEntityState(context)
                : localize(state, `component.${domain}.state._.`),
        }, ui: translations, v: variables });
    // Need to define these inside the function to be able to reach local scope
    squirrelly_minExports.filters.define('formatNumber', (str, opts = { decimals: config.decimals }) => {
        return String(formatNumber(str, Object.assign(Object.assign({}, opts), { locale: hass.locale })));
    });
    squirrelly_minExports.filters.define('relativetime', (str, opts = {}) => {
        return `<ha-relative-time fwd-datetime=${str} with-hass></ha-relative-time>`;
    });
    squirrelly_minExports.filters.define('translate', (str, prefix = '') => {
        if (!prefix &&
            typeof hass.formatEntityAttributeValue === 'function' &&
            typeof str === 'string' &&
            str in attributes) {
            return hass.formatEntityAttributeValue(context, str);
        }
        if (!prefix && (domain === 'climate' || domain === 'humidifier')) {
            return localize(str, `state_attributes.${domain}.${str}`);
        }
        return localize(str, prefix);
    });
    const render = (template) => squirrelly_minExports.render(template, data, { useWith: true });
    const value = render(template);
    if (label === false ||
        ((_f = ((_d = (_c = config === null || config === void 0 ? void 0 : config.layout) === null || _c === void 0 ? void 0 : _c.entities) !== null && _d !== void 0 ? _d : (_e = config === null || config === void 0 ? void 0 : config.layout) === null || _e === void 0 ? void 0 : _e.sensors)) === null || _f === void 0 ? void 0 : _f.labels) === false) {
        return b `<div class="entity-value">${o(value)}${unit}</div>`;
    }
    const safeLabel = label || '{{friendly_name}}';
    const heading = safeLabel.match(/^(mdi|hass):.*/)
        ? renderIcon(safeLabel)
        : render(safeLabel);
    return b `
    <div
      class="entity-heading clickable"
      title=${(attributes === null || attributes === void 0 ? void 0 : attributes.friendly_name) || entityId}
      @click=${openEntityPopover ? () => openEntityPopover(entityId) : null}
    >
      ${o(heading)}
    </div>
    <div class="entity-value">${o(value)}${unit}</div>
  `;
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
    hass.callService('homeassistant', checked ? 'turn_on' : 'turn_off', {
        entity_id: entityId,
    });
}
// Preset mode can be  one of: none, eco, away, boost, comfort, home, sleep, activity
// See https://github.com/home-assistant/home-assistant/blob/dev/homeassistant/components/climate/const.py#L36-L57
function renderInfoItem({ hide = false, hass, state, details, localize, openEntityPopover, }) {
    var _a, _b, _c;
    if (hide || typeof state === 'undefined')
        return;
    const { type, heading, icon, unit, decimals } = details;
    let valueCell;
    if (process.env.DEBUG) {
        console.log('ST: infoItem', { state, details });
    }
    if (type === 'relativetime') {
        valueCell = b `
      <div class="entity-value">
        <ha-relative-time .datetime=${state} .hass=${hass}></ha-relative-time>
      </div>
    `;
    }
    else if (typeof state === 'object') {
        const [domain] = state.entity_id.split('.');
        if (TOGGLE_DOMAINS.includes(domain)) {
            valueCell = b `
        <div class="entity-value">
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
                (_b = (_a = state.attributes) === null || _a === void 0 ? void 0 : _a.device_class) !== null && _b !== void 0 ? _b : '_',
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
            const hasConfiguredUnit = typeof unit === 'string' && unit.length > 0;
            const formattedWithHass = typeof hass.formatEntityState === 'function' &&
                typeof decimals !== 'number' &&
                !hasConfiguredUnit;
            valueCell = b `
        <div
          class="entity-value clickable"
          @click="${() => openEntityPopover(state.entity_id)}"
        >
          ${value}${formattedWithHass
                ? ''
                : `${hasConfiguredUnit ? '' : ' '}${unit || state.attributes.unit_of_measurement}`}
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
        valueCell = b ` <div class="entity-value">${value}${unit}</div> `;
    }
    if (heading === false) {
        return valueCell;
    }
    const tooltip = heading || ((_c = state === null || state === void 0 ? void 0 : state.attributes) === null || _c === void 0 ? void 0 : _c.friendly_name) || (state === null || state === void 0 ? void 0 : state.entity_id);
    const entityId = typeof state === 'object' ? state.entity_id : null;
    const headingResult = icon
        ? b ` <ha-icon
        icon="${icon}"
        title=${tooltip}
        @click=${entityId ? () => openEntityPopover(entityId) : null}
      ></ha-icon> `
        : ` ${heading}: `;
    return b `<div
      class="entity-heading ${entityId ? 'clickable' : ''}"
      title=${tooltip}
      @click=${entityId ? () => openEntityPopover(entityId) : null}
    >${headingResult}</div>
    ${valueCell}
  `;
}

function renderEntities({ _hide, entity, unit, hass, entities, config, localize, openEntityPopover, }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const { state, attributes: { hvac_action: action, current_temperature: current_entity_temp }, } = entity;
    const current = config.current_temperature_entity
        ? (_a = hass.states[config.current_temperature_entity]) === null || _a === void 0 ? void 0 : _a.state
        : current_entity_temp;
    const showLabels = (_f = (_e = ((_c = (_b = config === null || config === void 0 ? void 0 : config.layout) === null || _b === void 0 ? void 0 : _b.entities) !== null && _c !== void 0 ? _c : (_d = config === null || config === void 0 ? void 0 : config.layout) === null || _d === void 0 ? void 0 : _d.sensors)) === null || _e === void 0 ? void 0 : _e.labels) !== null && _f !== void 0 ? _f : true;
    let stateString = typeof hass.formatEntityState === 'function'
        ? hass.formatEntityState(entity)
        : localize(state, 'component.climate.state._.');
    if (action) {
        const actionString = typeof hass.formatEntityAttributeValue === 'function'
            ? hass.formatEntityAttributeValue(entity, 'hvac_action')
            : localize(action, 'state_attributes.climate.hvac_action.');
        stateString = [actionString, ` (${stateString})`].join('');
    }
    const entityHtml = [
        renderInfoItem({
            hide: _hide.temperature,
            state: `${formatNumber(current, Object.assign(Object.assign({}, config), { locale: hass.locale }))}${unit || ''}`,
            hass,
            details: {
                heading: showLabels
                    ? (_h = (_g = config === null || config === void 0 ? void 0 : config.label) === null || _g === void 0 ? void 0 : _g.temperature) !== null && _h !== void 0 ? _h : localize('ui.card.climate.currently')
                    : false,
            },
        }),
        renderInfoItem({
            hide: _hide.state,
            state: stateString,
            hass,
            details: {
                heading: showLabels
                    ? (_k = (_j = config === null || config === void 0 ? void 0 : config.label) === null || _j === void 0 ? void 0 : _j.state) !== null && _k !== void 0 ? _k : localize('ui.panel.lovelace.editor.card.generic.state')
                    : false,
            },
        }),
        ...(entities.map((_a) => {
            var { name, state } = _a, rest = __rest(_a, ["name", "state"]);
            return renderInfoItem({
                state,
                hass,
                localize,
                openEntityPopover,
                details: Object.assign(Object.assign({}, rest), { heading: showLabels && name }),
            });
        }) || null),
    ].filter((it) => it !== null);
    return wrapEntities(config, entityHtml);
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

function renderModeType({ state, entity, hass, mode: options, modeOptions, localize, setMode, }) {
    var _a;
    const { type, hide_when_off, mode = 'none', list, name, icons } = options;
    if (list.length === 0 || (hide_when_off && state === HVAC_MODES.OFF)) {
        return null;
    }
    let localizePrefix = `state_attributes.climate.${type}_mode.`;
    if (type === 'hvac') {
        localizePrefix = `component.climate.state._.`;
    }
    else if (type === 'vane_horizontal' || type === 'vane_vertical') {
        localizePrefix = '';
    }
    else if (type === 'swing_horizontal' || type === 'swing_vertical') {
        localizePrefix = `state_attributes.climate.${type}_mode.`;
    }
    const modeAttribute = type === 'hvac'
        ? null
        : type === 'vane_horizontal' || type === 'vane_vertical'
            ? type
            : `${type}_mode`;
    const maybeRenderName = (name, value) => {
        if (name === false)
            return null;
        if ((modeOptions === null || modeOptions === void 0 ? void 0 : modeOptions.names) === false)
            return null;
        if (name !== value) {
            return localizePrefix ? localize(name, localizePrefix) : name;
        }
        if (type === 'hvac' && typeof (hass === null || hass === void 0 ? void 0 : hass.formatEntityState) === 'function') {
            return hass.formatEntityState(Object.assign(Object.assign({}, entity), { state: value }));
        }
        if (modeAttribute &&
            entity &&
            typeof (hass === null || hass === void 0 ? void 0 : hass.formatEntityAttributeValue) === 'function') {
            return hass.formatEntityAttributeValue(entity, modeAttribute, value);
        }
        return localizePrefix ? localize(name, localizePrefix) : name;
    };
    const maybeRenderIcon = (icon) => {
        if (!icon)
            return null;
        if ((modeOptions === null || modeOptions === void 0 ? void 0 : modeOptions.icons) === false || icons === false)
            return null;
        return b ` <ha-icon class="mode-icon" .icon=${icon}></ha-icon> `;
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
        defaultTitle = localize('ui.card.climate.swing_horizontal_mode') || 'Swing Horizontal';
    }
    else if (type === 'swing_vertical') {
        defaultTitle = localize('ui.card.climate.swing_vertical_mode') || 'Swing Vertical';
    }
    else {
        defaultTitle = localize(`ui.card.climate.${str}`);
    }
    const title = name || defaultTitle;
    const headings = (_a = modeOptions === null || modeOptions === void 0 ? void 0 : modeOptions.headings) !== null && _a !== void 0 ? _a : true;
    return b `
    <div class="modes ${headings ? 'heading' : ''}">
      ${headings ? b ` <div class="mode-title">${title}</div> ` : ''}
      ${list.map(({ value, icon, name }) => b `
          <div
            class="mode-item ${value === mode ? 'active ' + mode : ''}"
            @click=${() => setMode(type, value)}
          >
            ${maybeRenderIcon(icon)} ${maybeRenderName(name, value)}
          </div>
        `)}
    </div>
  `;
}

const STATE_ICONS = {
    auto: 'mdi:radiator',
    cooling: 'mdi:snowflake',
    fan: 'mdi:fan',
    heating: 'mdi:radiator',
    idle: 'mdi:radiator-disabled',
    off: 'mdi:radiator-off',
};
const MODE_ICONS = {
    auto: 'hass:autorenew',
    cool: 'hass:snowflake',
    dry: 'hass:water-percent',
    fan_only: 'hass:fan',
    heat_cool: 'hass:autorenew',
    heat: 'hass:fire',
    off: 'hass:power',
};
function parseHeaderConfig(config, entity, hass) {
    if (config === false)
        return false;
    let name;
    if (typeof (config === null || config === void 0 ? void 0 : config.name) === 'string') {
        name = config.name;
    }
    else if ((config === null || config === void 0 ? void 0 : config.name) === false) {
        name = false;
    }
    else {
        name = entity.attributes.friendly_name;
    }
    let icon = entity.attributes.hvac_action ? STATE_ICONS : MODE_ICONS;
    if (typeof (config === null || config === void 0 ? void 0 : config.icon) !== 'undefined') {
        icon = config.icon;
    }
    return {
        name,
        icon,
        toggle: (config === null || config === void 0 ? void 0 : config.toggle) ? parseToggle(config.toggle, hass) : null,
        toggles: parseToggles(config, hass),
        faults: parseFaults(config === null || config === void 0 ? void 0 : config.faults, hass),
    };
}
function parseToggle(config, hass) {
    var _a, _b;
    const entity = hass.states[config.entity];
    let label = '';
    if ((config === null || config === void 0 ? void 0 : config.name) === true) {
        label = entity.attributes.name;
    }
    else {
        label = (_a = config === null || config === void 0 ? void 0 : config.name) !== null && _a !== void 0 ? _a : '';
    }
    return { entity, label, icon: (_b = config === null || config === void 0 ? void 0 : config.icon) !== null && _b !== void 0 ? _b : false };
}
function parseToggles(config, hass) {
    const toggleConfigs = [
        ...((config === null || config === void 0 ? void 0 : config.toggle) ? [config.toggle] : []),
        ...(Array.isArray(config === null || config === void 0 ? void 0 : config.toggles) ? config.toggles : []),
    ];
    return toggleConfigs.map((toggle) => parseToggle(toggle, hass));
}
function parseFaults(config, hass) {
    if (Array.isArray(config)) {
        return config.map((_a) => {
            var { entity } = _a, rest = __rest(_a, ["entity"]);
            return Object.assign(Object.assign({}, rest), { state: hass.states[entity], entity });
        });
    }
    return [];
}

const DUAL$1 = 'dual';
const SINGLE = 'single';
function getEntityType(attributes) {
    if (typeof attributes.target_temp_high === 'number' &&
        typeof attributes.target_temp_low === 'number') {
        return DUAL$1;
    }
    return SINGLE;
}

const DUAL = 'dual';
function parseSetpoints(setpoints, attributes) {
    if (setpoints === false) {
        return {};
    }
    if (setpoints) {
        const def = Object.keys(setpoints);
        return def.reduce((result, name) => {
            const sp = setpoints[name];
            if (sp === null || sp === void 0 ? void 0 : sp.hide)
                return result;
            return Object.assign(Object.assign({}, result), { [name]: attributes === null || attributes === void 0 ? void 0 : attributes[name] });
        }, {});
    }
    const entityType = getEntityType(attributes);
    if (entityType === DUAL) {
        return {
            target_temp_low: attributes.target_temp_low,
            target_temp_high: attributes.target_temp_high,
        };
    }
    return {
        temperature: attributes.temperature,
    };
}

function parseServie(config) {
    if (!config) {
        return {
            domain: 'climate',
            service: 'set_temperature',
        };
    }
    return config;
}

var MODES;
(function (MODES) {
    MODES["HVAC"] = "hvac";
    MODES["FAN"] = "fan";
    MODES["PRESET"] = "preset";
    MODES["SWING"] = "swing";
    MODES["SWING_HORIZONTAL"] = "swing_horizontal";
    MODES["SWING_VERTICAL"] = "swing_vertical";
    MODES["VANE_HORIZONTAL"] = "vane_horizontal";
    MODES["VANE_VERTICAL"] = "vane_vertical";
})(MODES || (MODES = {}));

const DEBOUNCE_TIMEOUT = 500;
const STEP_SIZE = 0.5;
const DECIMALS = 1;
const MODE_TYPES = Object.values(MODES);
const MODES_WITH_POSITIONS = [MODES.VANE_HORIZONTAL, MODES.VANE_VERTICAL];
function getModeOptionsKey(type) {
    return MODES_WITH_POSITIONS.includes(type)
        ? `${type}_positions`
        : `${type}_modes`;
}
const DEFAULT_CONTROL = [MODES.HVAC, MODES.PRESET];
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
function getConfiguredEntities(config) {
    var _a, _b;
    return (_b = (_a = config.entities) !== null && _a !== void 0 ? _a : config.sensors) !== null && _b !== void 0 ? _b : [];
}
function shouldShowModeControl(type, modeOption, config) {
    var _a;
    if (typeof config[modeOption] === 'object') {
        const obj = config[modeOption];
        return obj.include !== false;
    }
    const hasExplicitConfig = Object.keys(config).some((key) => !key.startsWith('_'));
    const hideUnlistedModes = type === MODES.PRESET;
    return (_a = config === null || config === void 0 ? void 0 : config[modeOption]) !== null && _a !== void 0 ? _a : !(hideUnlistedModes && hasExplicitConfig);
}
function getModeList(type, attributes, specification = {}) {
    return attributes[getModeOptionsKey(type)]
        .filter((modeOption) => shouldShowModeControl(type, modeOption, specification))
        .map((modeOption) => {
        const values = typeof specification[modeOption] === 'object'
            ? specification[modeOption]
            : {};
        return Object.assign({ icon: MODE_ICONS[modeOption], value: modeOption, name: modeOption }, values);
    });
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
        this._debouncedSetTemperature = debounceFunction((values) => {
            const { domain, service, data = {} } = this.service;
            this._hass.callService(domain, service, Object.assign(Object.assign({ entity_id: this.config.entity }, data), values));
        }, {
            wait: DEBOUNCE_TIMEOUT,
        });
        this.localize = (label, prefix = '') => {
            const key = `${prefix}${label}`;
            return this._hass.localize(key) || label;
        };
        this.toggleEntityChanged = (ev, entityId) => {
            if (!this.header || !entityId)
                return;
            const el = ev.target;
            this._hass.callService('homeassistant', el.checked ? 'turn_on' : 'turn_off', {
                entity_id: entityId,
            });
        };
        this.setMode = (type, mode) => {
            if (type && mode) {
                if (MODES_WITH_POSITIONS.includes(type)) {
                    this._hass.callService('climate', `set_${type}`, {
                        entity_id: this.config.entity,
                        [`${type}`]: mode,
                    });
                }
                else {
                    this._hass.callService('climate', `set_${type}_mode`, {
                        entity_id: this.config.entity,
                        [`${type}_mode`]: mode,
                    });
                }
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
    }
    static get styles() {
        return css_248z;
    }
    static getConfigElement() {
        return window.document.createElement(`${name}-editor`);
    }
    setConfig(config) {
        this.config = Object.assign({ decimals: DECIMALS }, config);
    }
    updated() {
        super.connectedCallback();
        const patchHass = Array.from(this.renderRoot.querySelectorAll('[with-hass]'));
        for (const child of Array.from(patchHass)) {
            // Forward attributes to properties
            Array.from(child.attributes).forEach((attr) => {
                if (attr.name.startsWith('fwd-')) {
                    child[attr.name.replace('fwd-', '')] = attr.value;
                }
            });
            // Always forward hass
            child.hass = this._hass;
        }
    }
    set hass(hass) {
        var _a, _b, _c, _d, _e;
        if (!this.config.entity) {
            return;
        }
        if (!(hass === null || hass === void 0 ? void 0 : hass.states)) {
            return;
        }
        const entity = hass.states[this.config.entity];
        if (!entity) {
            return;
        }
        this._hass = hass;
        if (this.entity !== entity) {
            this.entity = entity;
        }
        this.header = parseHeaderConfig(this.config.header, entity, hass);
        this.service = parseServie((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.service) !== null && _b !== void 0 ? _b : false);
        const attributes = entity.attributes;
        let values = parseSetpoints((_d = (_c = this.config) === null || _c === void 0 ? void 0 : _c.setpoints) !== null && _d !== void 0 ? _d : null, attributes);
        // If we are updating the values, and they are now equal
        // we can safely assume we've been able to update the set points
        // in HA and remove the updating flag
        // If we are not updating we take the values we get from HA
        // because it means they changed elsewhere
        if (this._updatingValues && isEqual(values, this._values)) {
            this._updatingValues = false;
        }
        else if (!this._updatingValues) {
            this._values = values;
        }
        const supportedModeType = (type) => MODE_TYPES.includes(type) && attributes[getModeOptionsKey(type)];
        const buildBasicModes = (items) => {
            return items.filter(supportedModeType).map((type) => ({
                type,
                hide_when_off: false,
                list: getModeList(type, attributes),
            }));
        };
        let controlModes = [];
        if (this.config.control === false) {
            controlModes = [];
        }
        else if (Array.isArray(this.config.control)) {
            controlModes = buildBasicModes(this.config.control);
        }
        else if (typeof this.config.control === 'object') {
            const entries = Object.entries(this.config.control);
            if (entries.length > 0) {
                controlModes = entries
                    .filter(([type]) => supportedModeType(type))
                    .map(([type, definition]) => {
                    const { _name, _hide_when_off, _icons } = definition, controlField = __rest(definition, ["_name", "_hide_when_off", "_icons"]);
                    return {
                        type,
                        hide_when_off: _hide_when_off,
                        icons: _icons,
                        name: _name,
                        list: getModeList(type, attributes, controlField),
                    };
                });
            }
            else {
                controlModes = buildBasicModes(DEFAULT_CONTROL);
            }
        }
        else {
            controlModes = buildBasicModes(DEFAULT_CONTROL);
        }
        // Decorate mode types with active value and set to this.modes
        this.modes = controlModes.map((values) => {
            if (values.type === MODES.HVAC) {
                const sortedList = [];
                const hvacModeValues = Object.values(HVAC_MODES);
                values.list.forEach((item) => {
                    const index = hvacModeValues.indexOf(item.value);
                    sortedList[index] = item;
                });
                return Object.assign(Object.assign({}, values), { list: sortedList, mode: entity.state });
            }
            const modeKey = MODES_WITH_POSITIONS.includes(values.type)
                ? values.type
                : `${values.type}_mode`;
            const mode = attributes[modeKey];
            return Object.assign(Object.assign({}, values), { mode });
        });
        if (this.config.step_size) {
            this.stepSize = +this.config.step_size;
        }
        if (this.config.hide) {
            this._hide = Object.assign(Object.assign({}, this._hide), this.config.hide);
        }
        const configuredEntities = getConfiguredEntities(this.config);
        if (configuredEntities === false) {
            this.showEntities = false;
        }
        else if (this.config.version === 3) {
            this.entities = [];
            const customEntities = configuredEntities.map((entity, index) => {
                var _a, _b, _c;
                const entityId = (_a = entity === null || entity === void 0 ? void 0 : entity.entity) !== null && _a !== void 0 ? _a : this.config.entity;
                let context = this.entity;
                if (entity === null || entity === void 0 ? void 0 : entity.entity) {
                    context = this._hass.states[entity.entity];
                }
                return {
                    id: (_b = entity === null || entity === void 0 ? void 0 : entity.id) !== null && _b !== void 0 ? _b : String(index),
                    label: entity === null || entity === void 0 ? void 0 : entity.label,
                    template: entity.template,
                    show: (entity === null || entity === void 0 ? void 0 : entity.show) !== false,
                    entityId,
                    context,
                    unit: (_c = entity === null || entity === void 0 ? void 0 : entity.unit) !== null && _c !== void 0 ? _c : '',
                };
            });
            const ids = customEntities.map((entity) => entity.id);
            const builtins = [];
            if (!ids.includes('state')) {
                builtins.push({
                    id: 'state',
                    label: '{{ui.operation}}',
                    template: '{{state.text}}',
                    entityId: this.config.entity,
                    context: this.entity,
                });
            }
            if (!ids.includes('temperature')) {
                const tempEntityId = (_e = this.config.current_temperature_entity) !== null && _e !== void 0 ? _e : this.config.entity;
                const tempContext = this.config.current_temperature_entity
                    ? this._hass.states[this.config.current_temperature_entity]
                    : this.entity;
                builtins.push({
                    id: 'temperature',
                    label: '{{ui.currently}}',
                    template: '{{current_temperature|formatNumber}}',
                    entityId: tempEntityId,
                    context: tempContext,
                });
            }
            this.entities = [...builtins, ...customEntities];
        }
        else if (configuredEntities) {
            this.entities = configuredEntities.map((_a) => {
                var _b;
                var { name, entity, attribute, unit = '' } = _a, rest = __rest(_a, ["name", "entity", "attribute", "unit"]);
                let state;
                const names = [name];
                if (entity) {
                    state = hass.states[entity];
                    names.push((_b = state === null || state === void 0 ? void 0 : state.attributes) === null || _b === void 0 ? void 0 : _b.friendly_name);
                    if (attribute) {
                        state = state.attributes[attribute];
                    }
                }
                else if (attribute && attribute in this.entity.attributes) {
                    state = this.entity.attributes[attribute];
                    names.push(attribute);
                }
                names.push(entity);
                return Object.assign(Object.assign({}, rest), { name: names.find((n) => !!n), state,
                    entity,
                    unit });
            });
        }
    }
    render({ _hide, _values, _updatingValues, config, entity } = this) {
        var _a, _b, _c;
        const warnings = [];
        if (this.stepSize < 1 && this.config.decimals === 0) {
            warnings.push(b `
        <hui-warning>
          Decimals is set to 0 and step_size is lower than 1. Decrementing a
          setpoint will likely not work. Change one of the settings to clear
          this warning.
        </hui-warning>
      `);
        }
        if (!entity) {
            return b `
        <hui-warning> Entity not available: ${config.entity} </hui-warning>
      `;
        }
        const { attributes: { min_temp: minTemp = null, max_temp: maxTemp = null, hvac_action: action, }, } = entity;
        const unit = this.getUnit();
        const stepLayout = (_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.step) !== null && _c !== void 0 ? _c : 'column';
        const row = stepLayout === 'row';
        const classes = [!this.header && 'no-header', action].filter((cx) => !!cx);
        let entitiesHtml;
        if (this.config.version === 3) {
            entitiesHtml = this.entities
                .filter((spec) => spec.show !== false)
                .map((spec) => {
                return renderTemplated(Object.assign(Object.assign({}, spec), { variables: this.config.variables, hass: this._hass, config: this.config, localize: this.localize, openEntityPopover: this.openEntityPopover }));
            });
            entitiesHtml = wrapEntities(this.config, entitiesHtml);
        }
        else {
            entitiesHtml = this.showEntities
                ? renderEntities({
                    _hide: this._hide,
                    unit,
                    hass: this._hass,
                    entity: this.entity,
                    entities: this.entities,
                    config: this.config,
                    localize: this.localize,
                    openEntityPopover: this.openEntityPopover,
                })
                : '';
        }
        return b `
      <ha-card class="${classes.join(' ')}">
        ${warnings}
        ${renderHeader({
            header: this.header,
            toggleEntityChanged: this.toggleEntityChanged,
            entity: this.entity,
            openEntityPopover: this.openEntityPopover,
        })}
        <section class="body">
          ${entitiesHtml}
          ${config.hide_setpoint === true
            ? A
            : Object.entries(_values).map(([field, value]) => {
                const hasValue = ['string', 'number'].includes(typeof value);
                const showUnit = unit !== false && hasValue;
                return b `
              <div class="current-wrapper ${stepLayout}">
                <ha-icon-button
                  ?disabled=${maxTemp !== null && value >= maxTemp}
                  class="thermostat-trigger"
                  icon=${row ? ICONS.PLUS : ICONS.UP}
                  @click="${() => this.setTemperature(this.stepSize, field)}"
                >
                  <ha-icon .icon=${row ? ICONS.PLUS : ICONS.UP}></ha-icon>
                </ha-icon-button>

                <h3
                  @click=${() => this.openEntityPopover()}
                  class=${_updatingValues
                    ? 'current--value updating'
                    : 'current--value'}
                >
                  ${formatNumber(value, Object.assign(Object.assign({}, config), { fallback: entity.state === HVAC_MODES.OFF
                        ? 'OFF'
                        : config.fallback, locale: this._hass.locale }))}
                  ${showUnit
                    ? b `<span class="current--unit">${unit}</span>`
                    : A}
                </h3>
                <ha-icon-button
                  ?disabled=${minTemp !== null && value <= minTemp}
                  class="thermostat-trigger"
                  icon=${row ? ICONS.MINUS : ICONS.DOWN}
                  @click="${() => this.setTemperature(-this.stepSize, field)}"
                >
                  <ha-icon .icon=${row ? ICONS.MINUS : ICONS.DOWN}></ha-icon>
                </ha-icon-button>
              </div>
            `;
            })}
        </section>

        ${this.modes.map((mode) => {
            var _a, _b, _c;
            return renderModeType({
                state: entity.state,
                entity,
                hass: this._hass,
                mode,
                localize: this.localize,
                modeOptions: (_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.mode) !== null && _c !== void 0 ? _c : {},
                setMode: this.setMode,
            });
        })}
      </ha-card>
    `;
    }
    setTemperature(change, field) {
        this._updatingValues = true;
        const previousValue = this._values[field];
        const newValue = Number(previousValue) + change;
        const { decimals } = this.config;
        this._values = Object.assign(Object.assign({}, this._values), { [field]: +formatNumber(newValue, { decimals }) });
        this._debouncedSetTemperature(this._values);
    }
    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
        return 3;
    }
    getUnit() {
        var _a, _b, _c, _d;
        if (['boolean', 'string'].includes(typeof this.config.unit)) {
            return (_a = this.config) === null || _a === void 0 ? void 0 : _a.unit;
        }
        return (_d = (_c = (_b = this._hass.config) === null || _b === void 0 ? void 0 : _b.unit_system) === null || _c === void 0 ? void 0 : _c.temperature) !== null && _d !== void 0 ? _d : false;
    }
}
__decorate([
    n()
], SimpleThermostat.prototype, "config", void 0);
__decorate([
    n()
], SimpleThermostat.prototype, "header", void 0);
__decorate([
    n()
], SimpleThermostat.prototype, "service", void 0);
__decorate([
    n()
], SimpleThermostat.prototype, "modes", void 0);
__decorate([
    n()
], SimpleThermostat.prototype, "entity", void 0);
__decorate([
    n()
], SimpleThermostat.prototype, "entities", void 0);
__decorate([
    n()
], SimpleThermostat.prototype, "showEntities", void 0);
__decorate([
    n()
], SimpleThermostat.prototype, "name", void 0);
__decorate([
    n({
        type: Object,
    })
], SimpleThermostat.prototype, "_values", void 0);
__decorate([
    n()
], SimpleThermostat.prototype, "_updatingValues", void 0);
__decorate([
    n()
], SimpleThermostat.prototype, "_hide", void 0);

if (!customElements.get(name)) {
    customElements.define(name, SimpleThermostat);
}
if (!customElements.get(`${name}-editor`)) {
    customElements.define(`${name}-editor`, SimpleThermostatEditor);
}
console.info(`%c${name}: ${version}`, 'font-weight: bold');
window.customCards = window.customCards || [];
window.customCards.push({
    type: name,
    name: 'Simple Thermostat',
    preview: false,
    description: 'A different take on the thermostat card',
});
