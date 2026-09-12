!function(){const t={DEBUG:!1,BUILD_TIME:"2026-09-10T16:42:21-02:30"};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();var t="simple-thermostat",e="4.4.0";function i(t,e,i,a){var o,r=arguments.length,n=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const a=globalThis,o=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1],t[0]);return new s(i,t,r)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:d,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:p,getOwnPropertySymbols:g,getPrototypeOf:m}=Object,f=globalThis,v=f.trustedTypes,y=v?v.emptyScript:"",_=f.reactiveElementPolyfillSupport,b=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!d(t,e),$={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);void 0!==a&&h(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:o}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:a,set(e){const r=a?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...p(t),...g(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(o)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),o=a.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(void 0!==a&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,a=i._$Eh.get(t);if(void 0!==a&&this._$Em!==a){const t=i.getPropertyOptions(a),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=a;const r=o.fromAttribute(e,t.type);this[a]=r??this._$Ej?.get(a)??r,this._$Em=null}}requestUpdate(t,e,i,a=!1,o){if(void 0!==t){const r=this.constructor;if(!1===a&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??x)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===a&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,a=this[e];!0!==t||this._$AL.has(e)||void 0===a||this.C(e,void 0,i,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[b("elementProperties")]=new Map,S[b("finalized")]=new Map,_?.({ReactiveElement:S}),(f.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,k=t=>t,E=A.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,z="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+T,O=`<${R}>`,N=document,M=()=>N.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,F=Array.isArray,P="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,V=/>/g,L=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,U=/"/g,B=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),G=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),K=new WeakMap,Z=N.createTreeWalker(N,129);function J(t,e){if(!F(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,a=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=I;for(let e=0;e<i;e++){const i=t[e];let s,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===I?"!--"===c[1]?n=H:void 0!==c[1]?n=V:void 0!==c[2]?(B.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=L):void 0!==c[3]&&(n=L):n===L?">"===c[0]?(n=o??I,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,s=c[1],n=void 0===c[3]?L:'"'===c[3]?U:D):n===U||n===D?n=L:n===H||n===V?n=I:(n=L,o=void 0);const h=n===L&&t[e+1].startsWith("/>")?" ":"";r+=n===I?i+O:l>=0?(a.push(s),i.slice(0,l)+z+i.slice(l)+T+h):i+T+(-2===l?e:h)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),a]};class X{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let o=0,r=0;const n=t.length-1,s=this.parts,[c,l]=Y(t,e);if(this.el=X.createElement(c,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=Z.nextNode())&&s.length<n;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(z)){const e=l[r++],i=a.getAttribute(t).split(T),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?at:"?"===n[1]?ot:"@"===n[1]?rt:it}),a.removeAttribute(t)}else t.startsWith(T)&&(s.push({type:6,index:o}),a.removeAttribute(t));if(B.test(a.tagName)){const t=a.textContent.split(T),e=t.length-1;if(e>0){a.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)a.append(t[i],M()),Z.nextNode(),s.push({type:2,index:++o});a.append(t[e],M())}}}else if(8===a.nodeType)if(a.data===R)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=a.data.indexOf(T,t+1));)s.push({type:7,index:o}),t+=T.length-1}o++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,a){if(e===G)return e;let o=void 0!==a?i._$Co?.[a]:i._$Cl;const r=j(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,a)),void 0!==a?(i._$Co??=[])[a]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,a)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??N).importNode(e,!0);Z.currentNode=a;let o=Z.nextNode(),r=0,n=0,s=i[0];for(;void 0!==s;){if(r===s.index){let e;2===s.type?e=new et(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new nt(o,this,t)),this._$AV.push(e),s=i[++n]}r!==s?.index&&(o=Z.nextNode(),r++)}return Z.currentNode=N,a}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),j(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>F(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,a="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{const t=new tt(a,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new X(t)),e}k(t){F(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const o of t)a===e.length?e.push(i=new et(this.O(M()),this.O(M()),this,this.options)):i=e[a],i._$AI(o),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,a){const o=this.strings;let r=!1;if(void 0===o)t=Q(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==G,r&&(this._$AH=t);else{const a=t;let n,s;for(t=o[0],n=0;n<o.length-1;n++)s=Q(this,a[i+n],e,n),s===G&&(s=this._$AH[n]),r||=!j(s)||s!==this._$AH[n],s===q?t=q:t!==q&&(t+=(s??"")+o[n+1]),this._$AH[n]=s}r&&!a&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class at extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class ot extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class rt extends it{constructor(t,e,i,a,o){super(t,e,i,a,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===G)return;const i=this._$AH,a=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const st=A.litHtmlPolyfillSupport;st?.(X,et),(A.litHtmlVersions??=[]).push("3.3.3");const ct=globalThis;let lt=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const a=i?.renderBefore??e;let o=a._$litPart$;if(void 0===o){const t=i?.renderBefore??null;a._$litPart$=o=new et(e.insertBefore(M(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}};lt._$litElement$=!0,lt.finalized=!0,ct.litElementHydrateSupport?.({LitElement:lt});const dt=ct.litElementPolyfillSupport;dt?.({LitElement:lt}),(ct.litElementVersions??=[]).push("4.2.2");const ht={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:x},ut=(t=ht,e,i)=>{const{kind:a,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===a){const{name:a}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(a,o,t,!0,i)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=i;return function(i){const o=this[a];e.call(this,i),this.requestUpdate(a,o,t,!0,i)}}throw Error("Unsupported decorator location: "+a)};function pt(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const a=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),a?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function gt(t){return pt({...t,state:!0,attribute:!1})}var mt="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",ft="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",vt="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z";var yt,_t=c`:host {
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

  --auto-color: var(--state-climate-auto-color, green);
  --heat_cool-color: var(--state-climate-heat-cool-color, #efbd07);
  --cool-color: var(--state-climate-cool-color, #2b9af9);
  --heat-color: var(--state-climate-heat-color, #ff8100);
  --manual-color: #44739e;
  --on-color: var(--primary-color);
  --off-color: var(--state-inactive-color, #8a8a8a);
  --dry-color: var(--state-climate-dry-color, #efbd07);
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

ha-card.unavailable .header__main,
ha-card.unknown .header__main,
ha-card.unavailable .current-wrapper,
ha-card.unknown .current-wrapper,
.mode-item[aria-disabled='true'] {
  opacity: 0.56;
  filter: saturate(0.6);
}

.mode-item[aria-disabled='true'],
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
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  align-items: center;
  justify-content: center;
  padding: 0 calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}
.body > .entities {
  flex: 1 1 max-content;
  min-width: 0;
  max-width: 100%;
  justify-content: center;
}
.setpoints {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  flex: 1 0 max-content;
  justify-content: space-around;
  min-width: 0;
  max-width: 100%;
}
.body.has-entities.step-column.setpoint-count-1 > .setpoints {
  flex: 0 0 auto;
  width: 35%;
  min-width: -moz-max-content;
  min-width: max-content;
}
.setpoints > .current-wrapper {
  flex: 1 0 max-content;
  width: auto;
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
    grid-template-columns: minmax(min-content, max-content) minmax(
        min-content,
        max-content
      );
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
  white-space: normal;
  word-wrap: break-word;
  min-width: 0;
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
.entity-action {
  grid-column: 1 / -1;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  min-width: 0;
  min-height: 28px;
  border: 0;
  border-radius: var(--st-mode-border-radius, var(--st-default-mode-radius));
  padding: var(--st-spacing, var(--st-default-spacing))
    calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--st-spacing, var(--st-default-spacing)) * 1.5);
  color: var(--secondary-text-color);
  background: var(--st-mode-background, var(--st-mode-surface-background));
  font: inherit;
  line-height: 1.2;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  transition:
    background-color
      var(--st-mode-transition, var(--st-default-mode-transition)), color var(--st-mode-transition, var(--st-default-mode-transition)), box-shadow var(--st-mode-transition, var(--st-default-mode-transition)), filter var(--st-mode-transition, var(--st-default-mode-transition));
}
.entity-action ha-icon {
  --mdc-icon-size: var(--st-entity-action-icon-size, 20px);
  width: 20px;
  width: var(--st-entity-action-icon-size, 20px);
  height: 20px;
  height: var(--st-entity-action-icon-size, 20px);
  flex: 0 0 auto;
}
.entity-action__label,
.entity-action__state {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.entity-action__label {
  white-space: normal;
  word-wrap: anywhere;
}
.entity-action__state {
  flex-shrink: 0;
  color: var(--secondary-text-color);
  font-size: 0.9em;
}
.entity-action.display-chip {
  width: auto;
  justify-self: start;
  border-radius: 999px;
  padding-left: calc(var(--st-spacing, var(--st-default-spacing)) * 2.5);
  padding-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2.5);
}
.entity-action.active,
.entity-action.state-on {
  color: var(--st-mode-active-color, var(--text-primary-color));
  background: var(
    --st-mode-active-background,
    var(--st-toggle-color, var(--primary-color))
  );
}
.entity-action:hover {
  filter: brightness(1.08);
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
.modes.footer {
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
  --st-mode-computed-active-background: var(
    --st-mode-color,
    var(--primary-color)
  );
  --st-mode-computed-active-accent-color: var(--st-mode-accent-color);
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
      var(--st-mode-computed-active-background)
    );
    color: var(--st-mode-active-color, var(--text-primary-color));
    box-shadow: inset 0 -2px 0
      var(
        --st-mode-active-accent-color,
        var(
          --st-mode-computed-active-accent-color,
          color-mix(in srgb, var(--text-primary-color) 72%, transparent)
        )
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
    var(
      --st-mode-computed-active-accent-color,
      color-mix(in srgb, var(--text-primary-color) 72%, transparent)
    )
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

.mode-label-line {
  display: block;
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
      var(--st-mode-computed-active-background)
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

.modes.hvac.sparse
  .mode-item:not(.label-stacked):not(.label-column)
  .mode-label,
.modes.state.sparse
  .mode-item:not(.label-stacked):not(.label-column)
  .mode-label {
  white-space: nowrap;
}

.modes.hvac.sparse .mode-item.label-stacked,
.modes.state.sparse .mode-item.label-stacked {
  align-items: center;
}

.modes.hvac.sparse .mode-item.label-stacked .mode-label,
.modes.state.sparse .mode-item.label-stacked .mode-label {
  white-space: normal;
  line-height: 1.1;
  text-align: left;
}

.modes.hvac.sparse .mode-item.label-stacked .mode-label-line + .mode-label-line,
.modes.state.sparse
  .mode-item.label-stacked
  .mode-label-line
  + .mode-label-line {
  margin-top: 1px;
}

.modes.hvac.sparse .mode-item.label-column,
.modes.state.sparse .mode-item.label-column {
  flex-direction: column;
  gap: 4px;
  min-height: calc(var(--st-control-icon-size) + 24px);
}

.modes.hvac.sparse .mode-item.label-column .mode-label,
.modes.state.sparse .mode-item.label-column .mode-label {
  white-space: normal;
  text-align: center;
  line-height: 1.1;
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

  ha-card:not(.standard-visuals) .modes.hvac.sparse .mode-item.label-column,
  ha-card:not(.standard-visuals) .modes.state.sparse .mode-item.label-column {
    flex-direction: column;
    gap: 4px;
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
.modes.vane_vertical .mode-item,
.modes.footer .mode-item {
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
ha-card.standard-visuals .modes.vane_vertical,
ha-card.standard-visuals .modes.footer {
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
ha-card.standard-visuals .modes.vane_vertical .mode-item,
ha-card.standard-visuals .modes.footer .mode-item {
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
  --st-mode-computed-active-background: var(--off-color);
}

ha-card .mode-item.active.heat,
ha-card .mode-item.active.heat:hover {
  --st-mode-computed-active-background: var(--heat-color);
}

ha-card .mode-item.active.cool,
ha-card .mode-item.active.cool:hover {
  --st-mode-computed-active-background: var(--cool-color);
}

ha-card .mode-item.active.heat_cool,
ha-card .mode-item.active.heat_cool:hover {
  --st-mode-computed-active-background: var(--heat_cool-color);
}

ha-card .mode-item.active.auto,
ha-card .mode-item.active.auto:hover {
  --st-mode-computed-active-background: var(--auto-color);
}

ha-card .mode-item.active.dry,
ha-card .mode-item.active.dry:hover {
  --st-mode-computed-active-background: var(--dry-color);
}

ha-card .mode-item.active.fan_only,
ha-card .mode-item.active.fan_only:hover {
  --st-mode-computed-active-background: var(--fan_only-color);
}

ha-card.standard-visuals .mode-item.active.off {
  --st-mode-computed-active-background: var(--off-color);
}

ha-card.standard-visuals .mode-item.active.heat {
  --st-mode-computed-active-background: var(--heat-color);
}

ha-card.standard-visuals .mode-item.active.cool {
  --st-mode-computed-active-background: var(--cool-color);
}

ha-card.standard-visuals .mode-item.active.heat_cool {
  --st-mode-computed-active-background: var(--heat_cool-color);
}

ha-card.standard-visuals .mode-item.active.auto {
  --st-mode-computed-active-background: var(--auto-color);
}

ha-card.standard-visuals .mode-item.active.dry {
  --st-mode-computed-active-background: var(--dry-color);
}

ha-card.standard-visuals .mode-item.active.fan_only {
  --st-mode-computed-active-background: var(--fan_only-color);
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
  flex-wrap: wrap;
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

.editor-entity-suggestions {
  display: grid;
  grid-gap: var(--st-spacing, var(--st-default-spacing));
  gap: var(--st-spacing, var(--st-default-spacing));
  margin-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  color: var(--secondary-text-color);
}

.editor-entity-suggestions__items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--st-spacing, var(--st-default-spacing));
}

.editor-entity-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  align-items: center;
  grid-gap: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  gap: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

.editor-entity-row > * {
  min-width: 0;
}

.editor-row-actions {
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 4px;
}

@media (max-width: 420px) {
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
`;function bt(t,e,i,a={}){a=a||{},i=null==i?{}:i;const o=new Event(e,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return o.detail=i,t.dispatchEvent(o),o}function wt(t){return Array.isArray(t)?t.map(t=>{const{label:e,...i}=t;return!i.name&&e&&(i.name=e),i}):t}function xt(t){const e={...t,layout:t.layout?{...t.layout}:void 0},i=3===e.version;return i&&void 0===e.enhanced_visuals&&(e.enhanced_visuals=!1),i&&!e.layout?.step&&(e.layout={...e.layout??{},step:"column"}),!e.current_value_entity&&e.current_temperature_entity&&(e.current_value_entity=e.current_temperature_entity),void 0===e.entities&&void 0!==e.sensors&&function(t){if(!Array.isArray(t.sensors))return;const e=[];t.sensors.forEach(i=>{const a=i;return"temperature"===a.id?(a.label&&(t.label={...t.label??{},temperature:a.label}),void(!1===a.show&&(t.hide={...t.hide??{},temperature:!0}))):"state"===a.id?(a.label&&(t.label={...t.label??{},state:a.label}),void(!1===a.show&&(t.hide={...t.hide??{},state:!0}))):void e.push(i)}),t.entities=wt(e)}(e),e.entities=wt(e.entities),e.layout&&void 0===e.layout.entities&&void 0!==e.layout.sensors&&(e.layout.entities=e.layout.sensors),delete e.current_temperature_entity,delete e.sensors,delete e.layout?.sensors,delete e.version,e}!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===i&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(_t),function(t){t.HVAC="hvac",t.FAN="fan",t.STATE="state",t.PRESET="preset",t.SWING="swing",t.SWING_HORIZONTAL="swing_horizontal",t.SWING_VERTICAL="swing_vertical",t.VANE_HORIZONTAL="vane_horizontal",t.VANE_VERTICAL="vane_vertical",t.DIRECTION="direction",t.OSCILLATING="oscillating",t.MODE="mode"}(yt||(yt={}));const $t="dual";const St={getSetpoints:t=>function(t){return"number"==typeof t.target_temp_high&&"number"==typeof t.target_temp_low?$t:"single"}(t)===$t?{target_temp_low:t.target_temp_low,target_temp_high:t.target_temp_high}:{temperature:t.temperature},getRange:t=>({min:t?.min_temp??null,max:t?.max_temp??null,step:t?.target_temp_step??null}),getCurrentValue:t=>t?.current_temperature??null,getCurrentValueTemplate:()=>"{{current_temperature|formatNumber}}",getSetpointService:()=>({domain:"climate",service:"set_temperature"}),getModeService:t=>"vane_horizontal"===t||"vane_vertical"===t?`set_${t}`:`set_${t}_mode`,getModePayloadKey:t=>"vane_horizontal"===t||"vane_vertical"===t?t:`${t}_mode`,getModeAttribute:t=>"vane_horizontal"===t||"vane_vertical"===t?`${t}_positions`:`${t}_modes`,getDefaultControl:()=>["hvac","preset"],getLocalizationDomain:()=>"climate"},At={climate:St,fan:{getSetpoints:t=>"number"!=typeof t?.percentage?{}:{percentage:t.percentage},getRange(t){const e=Number(t?.percentage_step);return{min:0,max:100,step:Number.isFinite(e)&&e>0?e:1}},getCurrentValue:t=>t?.current_temperature??t?.temperature??null,getCurrentValueUnit:(t,e)=>null!=t?.current_temperature?e?.unit_system?.temperature??!1:null!=t?.temperature&&(t?.unit_of_measurement??e?.unit_system?.temperature??!1),getCurrentValueTemplate:()=>"{{current_temperature|formatNumber}}",getSetpointService:()=>({domain:"fan",service:"set_percentage"}),getModeService:t=>"state"===t?"turn_on":"direction"===t?"set_direction":"oscillating"===t?"oscillate":`set_${t}_mode`,getModePayloadKey:t=>"state"===t?"state":"direction"===t?"direction":"oscillating"===t?"oscillating":`${t}_mode`,getModeAttribute:t=>"state"===t?"state":"direction"===t?"direction":"oscillating"===t?"oscillating":`${t}_modes`,getDefaultControl:()=>["preset","direction","oscillating","state"],transformModePayloadValue:(t,e)=>"oscillating"===t?"true"===e:e,getLocalizationDomain:()=>"fan"},humidifier:{getSetpoints:t=>({humidity:t?.humidity}),getRange:t=>({min:t?.min_humidity??0,max:t?.max_humidity??100,step:1}),getCurrentValue:t=>t?.current_humidity??null,getCurrentValueTemplate:()=>"{{current_humidity|formatNumber}}",getSetpointService:()=>({domain:"humidifier",service:"set_humidity"}),getModeService:t=>"state"===t?"turn_on":"mode"===t?"set_mode":`set_${t}`,getModePayloadKey:t=>"state"===t?"state":"mode"===t?"mode":t,getModeAttribute:t=>"state"===t?"state":"mode"===t?"available_modes":`${t}_modes`,getDefaultControl:()=>["mode","state"],getLocalizationDomain:()=>"humidifier"}};function kt(t){if(!t)return St;const e=t.split(".")[0];return At[e]??St}const Et=process.env.BUILD_TIME,Ct=["climate","fan","humidifier"],zt=[yt.HVAC,yt.FAN,yt.STATE,yt.PRESET,yt.SWING,yt.SWING_HORIZONTAL,yt.SWING_VERTICAL,yt.VANE_HORIZONTAL,yt.VANE_VERTICAL,yt.DIRECTION,yt.OSCILLATING,yt.MODE],Tt=Object.values(yt),Rt={[yt.HVAC]:"HVAC modes",[yt.FAN]:"Fan modes",[yt.STATE]:"On/off state",[yt.PRESET]:"Preset modes",[yt.SWING]:"Swing modes",[yt.SWING_HORIZONTAL]:"Horizontal swing",[yt.SWING_VERTICAL]:"Vertical swing",[yt.VANE_HORIZONTAL]:"Horizontal vane",[yt.VANE_VERTICAL]:"Vertical vane",[yt.DIRECTION]:"Direction",[yt.OSCILLATING]:"Oscillating",[yt.MODE]:"Modes"},Ot={header:{},layout:{mode:{}}},Nt={entity:"Entity (required)",current_value_entity:"Current value source",show_header:"Show header",name:"Name",icon:"Icon","toggle.entity":"Toggle entity","toggle.name":"Toggle label","toggle.icon":"Toggle icon","layout.mode.names":"Mode names","layout.mode.icons":"Mode icons","layout.mode.headings":"Mode headings",decimals:"Decimals",unit:"Unit","layout.step":"Step layout",step_size:"Step size",setpoint_debounce_ms:"Target debounce (ms)",setpoint_hold_repeat:"Repeat target changes while held",fallback:"Fallback text","hide.temperature":"Hide current value",hide_current_value_when_off:"Hide current value while off","hide.state":"Hide state","hide.setpoint_label":"Hide target label",hide_setpoint_when_off:"Hide target controls while off",hide_setpoint:"Hide target controls",disable_setpoint_change:"Disable target changes",disable_setpoint_change_when_off:"Disable target changes while off","label.temperature":"Current value label","label.state":"State label","label.setpoint":"Target label","layout.entities.type":"Entity row layout","layout.entities.display":"Entity display","layout.entities.labels":"Show entity row labels","layout.entities.separator":"Show entity label separator","layout.entities.alignment":"Entity label alignment","footer.entity":"Footer toggle entity","footer.name":"Footer toggle label","footer.icon":"Footer toggle icon",enhanced_visuals:"Enhanced visuals","tap_action.action":"Tap action","hold_action.action":"Hold action","double_tap_action.action":"Double-tap action"};for(const t of zt)Nt[`control.${t}`]=Rt[t];const Mt=t=>"function"==typeof structuredClone?structuredClone(t):JSON.parse(JSON.stringify(t)),jt=t=>!Array.isArray(t.schema)||0!==t.schema.length,Ft=[{value:"more-info",label:"More info"},{value:"toggle",label:"Toggle"},{value:"none",label:"None"}],Pt=[{value:"row",label:"Row"},{value:"column",label:"Column"}],It=[{value:"auto",label:"Auto (from entity)"},{value:"0.1",label:"0.1"},{value:"0.5",label:"0.5"},{value:"1",label:"1"}],Ht=[{value:"table",label:"Table"},{value:"list",label:"List"}],Vt=[{value:"row",label:"Rows"},{value:"auto",label:"Auto"},{value:"button",label:"Buttons"},{value:"toggle",label:"Toggles"},{value:"chip",label:"Chips"}],Lt=[{value:"",label:"Default"},...Vt],Dt=Vt.map(t=>t.value),Ut=[{value:"right",label:"Right"},{value:"left",label:"Left"}],Bt=["entity","current_value_entity","decimals","unit","fallback","layout.step","layout.mode.names","layout.mode.icons","layout.mode.headings","layout.entities.type","layout.entities.display","layout.entities.labels","layout.entities.separator","layout.entities.alignment","setpoint_debounce_ms","setpoint_hold_repeat","hide.temperature","hide_current_value_when_off","hide.state","hide.setpoint_label","hide_setpoint_when_off","hide_setpoint","disable_setpoint_change","disable_setpoint_change_when_off","label.temperature","label.state","label.setpoint","tap_action.action","hold_action.action","double_tap_action.action"],Wt=["show_header","name","icon","toggle.entity","toggle.name","toggle.icon"];function Gt(t,e,i){const a=e.split(".");let o=t;for(;a.length>1;){const t=a.shift();Object.prototype.hasOwnProperty.call(o,t)||(o[t]={}),o=o[t]}o[a[0]]=i}function qt(t,e){const i=e.split(".");let a=t;for(;i.length>1;){const t=i.shift();if(!a[t])return;a=a[t]}delete a[i[0]]}function Kt(t){const e=t.target,i=t.detail;return i?.value??i?.item?.value??e.selected?.value??e.selected?.getAttribute?.("value")??e.value??""}function Zt(t){const e=kt(t.entity);return zt.reduce((i,a)=>(i[`control.${a}`]=function(t,e,i){const a=t.control;return!1!==a&&(Array.isArray(a)?a.includes(e):a&&"object"==typeof a?void 0!==a[e]&&!1!==a[e]:i.getDefaultControl().includes(e))}(t,a,e),i),{})}function Jt(t,e){const i=e?.states?.[t.entity],a=i?.attributes??{},o=t.entity?.split(".")[0],r=kt(t.entity),n=Array.isArray(t.control)?t.control:Yt(t.control)?Object.keys(t.control):[];return zt.filter(t=>Tt.includes(t)&&(n.includes(t)||i&&(t===yt.STATE?"fan"===o||"humidifier"===o:void 0!==a[r.getModeAttribute(t)])))}function Yt(t){return!!t&&"object"==typeof t&&!Array.isArray(t)}function Xt(t){const e=t._order,i=Object.keys(t).filter(t=>!t.startsWith("_"));if(!Array.isArray(e))return i;const a=new Set,o=e.map(String).filter(t=>i.includes(t)).filter(t=>!a.has(t)&&(a.add(t),!0));return i.forEach(t=>{a.has(t)||o.push(t)}),o}function Qt(t,e){return t.length===e.length&&t.every((t,i)=>String(t)===e[i])}function te(t){if(!function(t){return!!t&&"object"==typeof t&&!Array.isArray(t)}(t))return{value:t,changed:!1};const e=Object.keys(t).filter(t=>!t.startsWith("_"));if(0===e.length&&!Array.isArray(t._order))return{value:t,changed:!1};const i=Array.isArray(t._order)?t._order.map(String):e,a=!Array.isArray(t._order)||!Qt(t._order,i);return{value:{...t,_order:i},changed:a}}class ee extends lt{constructor(){super(...arguments),this._valueChanged=t=>{const e=this._applyFormChange(t.detail.value);this.config=e,bt(this,"config-changed",{config:e})},this._computeLabel=t=>Nt[String(t.name)]??String(t.name)}static get styles(){return _t}static getStubConfig(){return{...Ot}}setConfig(t){const e=function(t){if(!Yt(t.control))return{config:t,changed:!1};const e=t.control,i=Xt(e);if(0===i.length&&!Array.isArray(e._order))return{config:t,changed:!1};let a=Array.isArray(e._order)&&!Qt(e._order,i);const o={...t,control:i.reduce((t,i)=>{const o=te(e[i]);return t[i]=o.value,a=a||o.changed,t},Array.isArray(e._order)?{_order:i}:{})};return{config:a?o:t,changed:a}}(xt(t||{...Ot}));this.config=e.config,e.changed&&queueMicrotask(()=>{this.config===e.config&&bt(this,"config-changed",{config:e.config})})}_openLink(){window.open("https://github.com/Wheemer/simple-thermostat/blob/master/README.md","_blank","noopener")}_buildFormData(){const t=this.config.header&&"object"==typeof this.config.header?this.config.header:{};return{entity:this.config.entity??"",current_value_entity:this.config.current_value_entity??"",show_header:!1!==this.config.header,"layout.mode.names":!1!==this.config.layout?.mode?.names,"layout.mode.icons":!1!==this.config.layout?.mode?.icons,"layout.mode.headings":!0===this.config.layout?.mode?.headings,decimals:this.config.decimals??"",unit:"string"==typeof this.config.unit?this.config.unit:"","layout.step":!1===this.config.enhanced_visuals?this.config.layout?.step??"column":this.config.layout?.step??"row",step_size:null!=this.config.step_size?String(this.config.step_size):"auto",fallback:this.config.fallback??"",setpoint_debounce_ms:this.config.setpoint_debounce_ms??"",setpoint_hold_repeat:!0===this.config.setpoint_hold_repeat,"hide.temperature":!0===this.config.hide?.temperature,hide_current_value_when_off:!0===this.config.hide_current_value_when_off||!0===this.config.hide?.current_value_when_off||!0===this.config.hide?.temperature_when_off,"hide.state":!0===this.config.hide?.state,hide_setpoint:!0===this.config.hide_setpoint,disable_setpoint_change:!0===this.config.disable_setpoint_change,disable_setpoint_change_when_off:!0===this.config.disable_setpoint_change_when_off,"hide.setpoint_label":!0===this.config.hide?.setpoint_label,hide_setpoint_when_off:!0===this.config.hide_setpoint_when_off||!0===this.config.hide?.setpoint_when_off,"label.temperature":this.config.label?.temperature??"","label.state":this.config.label?.state??"","label.setpoint":this.config.label?.setpoint??"","layout.entities.type":this.config.layout?.entities?.type??"table","layout.entities.display":this.config.layout?.entities?.display??"","layout.entities.labels":!1!==this.config.layout?.entities?.labels,"layout.entities.separator":!1!==this.config.layout?.entities?.separator,"layout.entities.alignment":this.config.layout?.entities?.alignment??"right",enhanced_visuals:!1!==this.config.enhanced_visuals,name:t.name??"",icon:"string"==typeof t.icon?t.icon:"","toggle.entity":t.toggle?.entity??"","toggle.name":t.toggle?.name??"","toggle.icon":"string"==typeof t.toggle?.icon?t.toggle.icon:"","tap_action.action":this.config.tap_action?.action??"more-info","hold_action.action":this.config.hold_action?.action??"none","double_tap_action.action":this.config.double_tap_action?.action??"none",...Zt(this.config)}}_applyFormChange(t){const e=this._buildFormData(),i=function(t,e){return new Set(Object.keys(e).filter(i=>t[i]!==e[i]))}(e,t);!function(t,e){t.has("enhanced_visuals")&&(e.layout?.step||t.delete("layout.step"))}(i,this.config);const a={...e,...t},o=Mt(this.config);if(this._applyDirectFormPaths(o,a,i),i.has("enhanced_visuals")&&(o.enhanced_visuals=!1!==a.enhanced_visuals),i.has("hide_setpoint_when_off")&&qt(o,"hide.setpoint_when_off"),i.has("hide_current_value_when_off")&&(qt(o,"hide.current_value_when_off"),qt(o,"hide.temperature_when_off")),Wt.some(t=>i.has(t))&&(!1===a.show_header?o.header=!1:this._applyHeaderFormChange(o,a,i)),i.has("step_size")&&this._applyStepSize(o,a.step_size),i.has("entity")||zt.some(t=>i.has(`control.${t}`))){const t=function(t,e,i){const a=String(t.entity??e.entity??""),o=kt(a),r=Jt({...e,entity:a},i).filter(e=>t[`control.${e}`]),n=o.getDefaultControl();if(0===r.length)return!1;if(e.control&&!Array.isArray(e.control)&&"object"==typeof e.control){const t=new Set(r.map(String)),i=Xt(e.control).filter(e=>t.has(e)),a=r.filter(t=>!i.includes(t)),o=[...i,...a];return o.reduce((t,i)=>(t[i]=te(e.control[i]||{}).value,t),{_order:o})}return r.length===n.length&&r.every((t,e)=>t===n[e])?void 0:r}(a,this.config,this.hass);void 0===t?delete o.control:o.control=t}return o}_applyDirectFormPaths(t,e,i){for(const a of Bt){if(!i.has(a))continue;const o=e[a];null==o||""===o?qt(t,a):Gt(t,a,o)}}_applyHeaderFormChange(t,e,i){!1!==t.header&&null!=t.header||(t.header={});const a=t.header,o=e.name,r=e.icon,n=e["toggle.entity"],s=e["toggle.name"],c=e["toggle.icon"];if(i.has("name")&&("string"==typeof o&&o?a.name=o:delete a.name),i.has("icon")&&("string"==typeof r&&r?a.icon=r:delete a.icon),"string"==typeof n&&n){if(!["toggle.entity","toggle.name","toggle.icon"].some(t=>i.has(t)))return;a.toggle=a.toggle||{entity:n},a.toggle.entity=n,i.has("toggle.name")&&("string"==typeof s&&s?a.toggle.name=s:delete a.toggle.name),i.has("toggle.icon")&&("string"==typeof c&&c?a.toggle.icon=c:delete a.toggle.icon)}else i.has("toggle.entity")&&delete a.toggle}_applyStepSize(t,e){if("auto"===e||""===e||null==e)return void delete t.step_size;const i=Number(e);t.step_size=Number.isNaN(i)?e:i}_getExtraEntities(){return Array.isArray(this.config.entities)?this.config.entities:[]}_getFooterRows(){return Array.isArray(this.config.footer)?this.config.footer:[]}_commitEntityRows(t){const e=Mt(this.config);t.length>0?e.entities=t:delete e.entities,this.config=e,bt(this,"config-changed",{config:e})}_addEntityRow(){this._commitEntityRows([...this._getExtraEntities(),{entity:""}])}_addSuggestedEntity(t){this._commitEntityRows([...this._getExtraEntities(),{entity:t}])}_getRelatedEntitySuggestions(){const t=this.hass?.entities,e=t?.[this.config.entity]?.device_id;if(!e)return[];const i=new Set([this.config.entity,this.config.current_value_entity,...this._getExtraEntities().map(t=>t.entity),...this._getFooterRows().map(t=>t.entity)]);return Object.entries(t).filter(([t,a])=>a?.device_id===e&&!a?.disabled_by&&!a?.hidden_by&&!i.has(t)&&this.hass?.states?.[t]).map(([t])=>t).sort((t,e)=>this._getEntitySuggestionLabel(t).localeCompare(this._getEntitySuggestionLabel(e)))}_getEntitySuggestionLabel(t){const e=this.hass?.states?.[t];return e?.attributes?.friendly_name??t.split(".").pop()?.replace(/_/g," ")??t}_removeEntityRow(t){this._commitEntityRows(this._getExtraEntities().filter((e,i)=>i!==t))}_moveEntityRow(t,e){const i=[...this._getExtraEntities()],a=t+e;t<0||t>=i.length||a<0||a>=i.length||(i.splice(a,0,i.splice(t,1)[0]),this._commitEntityRows(i))}_updateEntityRow(t,e,i){const a=this._getExtraEntities().map((a,o)=>{if(o!==t)return a;const r={...a};return"display"===e?("string"==typeof i&&Dt.includes(i)?r.display=i:delete r.display,r):("string"==typeof i&&i?r[e]=i:delete r[e],r)});this._commitEntityRows(a)}_commitFooterRows(t){const e=Mt(this.config);t.length>0?e.footer=t:delete e.footer,this.config=e,bt(this,"config-changed",{config:e})}_addFooterRow(){this._commitFooterRows([...this._getFooterRows(),{entity:""}])}_removeFooterRow(t){this._commitFooterRows(this._getFooterRows().filter((e,i)=>i!==t))}_moveFooterRow(t,e){const i=[...this._getFooterRows()],a=t+e;t<0||t>=i.length||a<0||a>=i.length||(i.splice(a,0,i.splice(t,1)[0]),this._commitFooterRows(i))}_updateFooterRow(t,e,i){const a=this._getFooterRows().map((a,o)=>{if(o!==t)return a;const r={...a};return"string"==typeof i&&i?r[e]=i:delete r[e],r});this._commitFooterRows(a)}_renderRowActions(t,e,i,a){return W`
      <div class="editor-row-actions">
        <ha-icon-button
          label="Move up"
          title="Move up"
          .path=${ft}
          .disabled=${0===t}
          @click=${()=>i(-1)}
        ></ha-icon-button>
        <ha-icon-button
          label="Move down"
          title="Move down"
          .path=${mt}
          .disabled=${t===e-1}
          @click=${()=>i(1)}
        ></ha-icon-button>
        <ha-icon-button
          label="Remove"
          title="Remove"
          .path=${vt}
          @click=${a}
        ></ha-icon-button>
      </div>
    `}_renderExtraEntityRows(t=[]){const e=this._getExtraEntities(),i=this._getRelatedEntitySuggestions();return W`
      <section class="editor-extra-entities">
        <div class="editor-extra-entities__header">
          <div>
            <h3>Extra entity rows</h3>
            <p>Add the sensors or helpers shown under the main state.</p>
          </div>
          <ha-button @click=${this._addEntityRow}>Add row</ha-button>
        </div>

        <ha-form
          .hass=${this.hass}
          .data=${this._buildFormData()}
          .schema=${t}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._valueChanged}
        ></ha-form>

        ${i.length?W`
                <div class="editor-entity-suggestions">
                  <span>Suggested from this device</span>
                  <div class="editor-entity-suggestions__items">
                    ${i.map(t=>W`
                        <ha-button
                          @click=${()=>this._addSuggestedEntity(t)}
                          title=${t}
                        >
                          Add ${this._getEntitySuggestionLabel(t)}
                        </ha-button>
                      `)}
                  </div>
                </div>
              `:q}
        ${0===e.length?W`<p class="editor-extra-entities__empty">
                No extra rows configured.
              </p>`:e.map((t,i)=>W`
                  <div class="editor-entity-row">
                    <ha-entity-picker
                      label="Entity"
                      .hass=${this.hass}
                      .value=${t.entity??""}
                      allow-custom-entity
                      @value-changed=${t=>this._updateEntityRow(i,"entity",t.detail.value)}
                    ></ha-entity-picker>
                    <ha-textfield
                      label="Name"
                      .value=${t.name??""}
                      @input=${t=>this._updateEntityRow(i,"name",t.target.value)}
                    ></ha-textfield>
                    <ha-icon-picker
                      label="Icon"
                      .hass=${this.hass}
                      .value=${t.icon??""}
                      @value-changed=${t=>this._updateEntityRow(i,"icon",t.detail.value)}
                    ></ha-icon-picker>
                    <ha-select
                      label="Display"
                      clearable
                      .value=${t.display??""}
                      @value-changed=${t=>this._updateEntityRow(i,"display",Kt(t))}
                      @selected=${t=>this._updateEntityRow(i,"display",Kt(t))}
                      @change=${t=>this._updateEntityRow(i,"display",Kt(t))}
                    >
                      <mwc-list-item value="">Default</mwc-list-item>
                      ${Vt.map(t=>W`
                          <mwc-list-item value=${t.value}>
                            ${t.label}
                          </mwc-list-item>
                        `)}
                    </ha-select>
                    ${this._renderRowActions(i,e.length,t=>this._moveEntityRow(i,t),()=>this._removeEntityRow(i))}
                  </div>
                `)}
      </section>
    `}_renderFooterRows(){const t=this._getFooterRows();return W`
      <section class="editor-extra-entities">
        <div class="editor-extra-entities__header">
          <div>
            <h3>Footer controls</h3>
            <p>Add switch-style controls shown below the mode rows.</p>
          </div>
          <ha-button @click=${this._addFooterRow}>Add control</ha-button>
        </div>

        ${0===t.length?W`<p class="editor-extra-entities__empty">
                No footer controls configured.
              </p>`:t.map((e,i)=>W`
                  <div class="editor-entity-row">
                    <ha-entity-picker
                      label="Entity"
                      .hass=${this.hass}
                      .value=${e.entity??""}
                      allow-custom-entity
                      @value-changed=${t=>this._updateFooterRow(i,"entity",t.detail.value)}
                    ></ha-entity-picker>
                    <ha-textfield
                      label="Name override"
                      .value=${e.name??""}
                      @input=${t=>this._updateFooterRow(i,"name",t.target.value)}
                    ></ha-textfield>
                    <ha-icon-picker
                      label="Icon"
                      .hass=${this.hass}
                      .value=${e.icon??""}
                      @value-changed=${t=>this._updateFooterRow(i,"icon",t.detail.value)}
                    ></ha-icon-picker>
                    ${this._renderRowActions(i,t.length,t=>this._moveFooterRow(i,t),()=>this._removeFooterRow(i))}
                  </div>
                `)}
      </section>
    `}render(){if(!this.hass||!this.config)return W``;const t=function(t,e){const i=Jt(t,e),a=t.entity?.split(".")[0],o=kt(t.entity),r=t.entity?e?.states?.[t.entity]:void 0,n=!0===t.hide_setpoint||!r||Object.keys(o.getSetpoints(r.attributes??{})).length>0,s="fan"!==a&&("climate"===a||"humidifier"===a),c="fan"===a?[]:[{name:"current_value_entity",selector:{entity:{domain:["sensor","input_number"]}}}],l=[...s?[{name:"hide.temperature",selector:{boolean:{}}},{name:"hide_current_value_when_off",selector:{boolean:{}}}]:[],{name:"hide.state",selector:{boolean:{}}}],d=[...s?[{name:"label.temperature",selector:{text:{}}}]:[],{name:"label.state",selector:{text:{}}},...n?[{name:"label.setpoint",selector:{text:{}}}]:[]],h=!1===t.header?[]:[{type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"toggle.entity",selector:{entity:{}}},{name:"toggle.name",selector:{text:{}}},...t.header&&"object"==typeof t.header&&t.header.toggle?.entity?[{name:"toggle.icon",selector:{icon:{}}}]:[]];return[{name:"entity",required:!0,selector:{entity:{domain:Ct}}},{type:"expandable",title:"Card header",schema:[{name:"show_header",selector:{boolean:{}}},...h]},...i.length>0?[{type:"expandable",title:"Controls",schema:[{type:"grid",column_min_width:"150px",schema:i.map(t=>({name:`control.${t}`,selector:{boolean:{}}}))}]}]:[],...n?[{type:"expandable",title:"Target",schema:[{type:"grid",schema:[{name:"layout.step",selector:{select:{mode:"dropdown",options:Pt}}},{name:"step_size",selector:{select:{mode:"dropdown",options:It}}}]},{type:"grid",column_min_width:"160px",schema:[{name:"hide_setpoint",selector:{boolean:{}}},{name:"disable_setpoint_change",selector:{boolean:{}}},{name:"hide_setpoint_when_off",selector:{boolean:{}}},{name:"hide.setpoint_label",selector:{boolean:{}}},{name:"disable_setpoint_change_when_off",selector:{boolean:{}}},{name:"setpoint_hold_repeat",selector:{boolean:{}}}]}]}]:[],{type:"expandable",title:"Extra entity rows",schema:[{type:"grid",column_min_width:"160px",schema:[{name:"layout.entities.type",selector:{select:{mode:"dropdown",options:Ht}}},{name:"layout.entities.display",selector:{select:{mode:"dropdown",options:Lt}}},{name:"layout.entities.labels",selector:{boolean:{}}},{name:"layout.entities.separator",selector:{boolean:{}}},{name:"layout.entities.alignment",selector:{select:{mode:"dropdown",options:Ut}}}]}]},{type:"expandable",title:"Appearance",schema:[{name:"enhanced_visuals",selector:{boolean:{}}},{type:"grid",column_min_width:"160px",schema:l}].filter(jt)},{type:"expandable",title:"Advanced",schema:[...c,...s?[{type:"grid",schema:[{name:"decimals",selector:{number:{min:0,max:5,step:1,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]:[],{name:"fallback",selector:{text:{}}},{name:"setpoint_debounce_ms",selector:{number:{min:0,step:100,mode:"box"}}},{type:"grid",column_min_width:"160px",schema:d},{type:"grid",column_min_width:"150px",schema:[{name:"layout.mode.names",selector:{boolean:{}}},{name:"layout.mode.icons",selector:{boolean:{}}},{name:"layout.mode.headings",selector:{boolean:{}}}]},{type:"grid",column_min_width:"150px",schema:[{name:"tap_action.action",selector:{select:{mode:"dropdown",options:Ft}}},{name:"hold_action.action",selector:{select:{mode:"dropdown",options:Ft}}},{name:"double_tap_action.action",selector:{select:{mode:"dropdown",options:Ft}}}]}].filter(jt)}]}(this.config,this.hass),i=t.find(t=>"Extra entity rows"===t.title);return W`
      <div class="card-config">
        <ha-form
          .hass=${this.hass}
          .data=${this._buildFormData()}
          .schema=${t.filter(t=>t!==i)}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._valueChanged}
        ></ha-form>

        ${this._renderExtraEntityRows(i?.schema)}
        ${this._renderFooterRows()}

        <div class="editor-footer">
          <ha-button @click=${this._openLink}>
            <ha-svg-icon .path=${"M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M12 8V19.5C13.35 18.65 15.8 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8M13 11.5C14.11 10.82 15.6 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C15.73 9 14.23 9.28 13 9.84V11.5M17.5 11.67C15.79 11.67 14.29 11.93 13 12.46V14.15C14.11 13.5 15.6 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67M20 14.57C19.13 14.41 18.29 14.33 17.5 14.33C15.67 14.33 14.17 14.6 13 15.13V16.82C14.11 16.16 15.6 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57Z"} slot="icon"></ha-svg-icon>
            All configuration options
          </ha-button>
          <span class="editor-footer__hint">
            YAML remains available for specialized setups
          </span>
          <span class="editor-footer__version"
            >v${e} - ${Et}</span
          >
        </div>
      </div>
    `}}i([gt()],ee.prototype,"config",void 0),i([pt({attribute:!1})],ee.prototype,"hass",void 0);const ie=2,ae=t=>(...e)=>({_$litDirective$:t,values:e});class oe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const re=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),re(t,e);return!0},ne=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},se=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),de(e)}};function ce(t){void 0!==this._$AN?(ne(this),this._$AM=t,se(this)):this._$AM=t}function le(t,e=!1,i=0){const a=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(a))for(let t=i;t<a.length;t++)re(a[t],!1),ne(a[t]);else null!=a&&(re(a,!1),ne(a));else re(this,t)}const de=t=>{t.type==ie&&(t._$AP??=le,t._$AQ??=ce)};class he extends oe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),se(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(re(this,t),ne(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const ue=new WeakMap,pe=ae(class extends he{render(t){return q}update(t,[e]){const i=e!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),q}rt(t){if(void 0!==this.G)if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=ue.get(e);void 0===i&&(i=new WeakMap,ue.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?ue.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ge=["climate","fan","humidifier"],me={style:"header",icons:!0,names:!0,states:!1};function fe(t){if("string"==typeof t)return{entity:t};const e=t?.header&&"object"==typeof t.header?t.header:{};return{...t,entity:t?.entity??"",name:t?.name??("string"==typeof e.name?e.name:void 0),icon:t?.icon??("string"==typeof e.icon?e.icon:void 0)}}function ve(t,e){if(Object.is(t,e))return!0;if(Array.isArray(t)||Array.isArray(e))return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((t,i)=>ve(t,e[i]));if(!t||!e||"object"!=typeof t||"object"!=typeof e)return!1;const i=t,a=e,o=Object.keys(i);return o.length===Object.keys(a).length&&o.every(t=>ve(i[t],a[t]))}class ye extends lt{constructor(){super(...arguments),this.config={entities:[]},this.expandedTargetIndex=null,this.editorConfigKeys=new WeakMap}static get styles(){return c`
      :host {
        display: block;
      }

      .section {
        display: grid;
        gap: 16px;
      }

      .target {
        display: flex;
        flex-wrap: wrap;
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
        flex: 1 1 360px;
        min-width: 0;
        gap: 8px;
      }

      .target-meta {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
        gap: 8px;
      }

      .actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .target-actions {
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;
        gap: 8px;
        align-items: center;
      }

      .target-order {
        display: flex;
        gap: 4px;
      }

      .editor-section + .editor-section {
        margin-top: 24px;
      }

      .target-editor {
        flex-basis: 100%;
        min-width: 0;
        border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
        margin-top: 4px;
        padding-top: 12px;
      }

      .selector-options {
        display: grid;
        gap: 8px;
      }

      .selector-style-row {
        display: grid;
        gap: 6px;
      }

      .selector-style-actions {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
      }

      .selector-style-actions ha-button {
        width: 100%;
      }

      .selector-style-actions ha-button.selected {
        --mdc-theme-primary: var(--primary-color);
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
        .target-actions {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .target-meta {
          grid-template-columns: 1fr;
        }
      }
    `}setConfig(t){this.config={...t}}commit(t){const e=this.cleanConfig(t);this.config=e,bt(this,"config-changed",{config:e})}cleanConfig(t){const e={...t};for(const t of Object.keys(e))void 0===e[t]&&delete e[t];return e.selector&&0===Object.keys(e.selector).length&&delete e.selector,e}getTargets(){return function(t){const e=(t.cards??t.entities??[]).map(fe);return e.length?e:[{entity:""},{entity:""}]}(this.config)}updateTarget(t,e){const i=this.getTargets(),a={...i[t],...e};if(a.header&&"object"==typeof a.header){a.header={...a.header};for(const t of["name","icon"]){if(!(t in e)||!(t in a.header))continue;const i=e[t]?.trim();i?a.header[t]=i:delete a.header[t]}}i[t]=a,this.commitTargets(i)}cleanTargets(t){return t.map(t=>{const e=t.entity?.trim()??"",i="string"==typeof t.name?t.name.trim():void 0,a="string"==typeof t.icon?t.icon.trim():void 0,{name:o,icon:r,entity:n,...s}=t;return i||a||0!==Object.keys(s).length?{...s,entity:e,...i?{name:i}:{},...a?{icon:a}:{}}:e})}addTarget(){const t=[...this.getTargets(),{entity:""}];this.commitTargets(t)}removeTarget(t){const e=this.getTargets().filter((e,i)=>i!==t);this.expandedTargetIndex===t?this.expandedTargetIndex=null:null!==this.expandedTargetIndex&&this.expandedTargetIndex>t&&this.expandedTargetIndex--,this.commitTargets(e.length?e:[{entity:""}])}moveTarget(t,e){const i=this.getTargets(),a=t+e;t<0||t>=i.length||a<0||a>=i.length||(i.splice(a,0,i.splice(t,1)[0]),this.expandedTargetIndex===t?this.expandedTargetIndex=a:this.expandedTargetIndex===a&&(this.expandedTargetIndex=t),this.commitTargets(i))}commitTargets(t){const{entities:e,...i}=this.config;this.commit({...i,cards:this.cleanTargets(t)})}updateSelector(t,e){const i={...this.config.selector??{}},a=Boolean(e);a===me[t]?delete i[t]:i[t]=a,this.commit({...this.config,selector:i})}updateSelectorStyle(t){const e={...this.config.selector??{}},i="tabs"===t?"tabs":"header";i===me.style?delete e.style:e.style=i,this.commit({...this.config,selector:e})}renderSelectorStyleOption(t,e,i){return W`
      <ha-button
        class=${i?"selected":""}
        appearance=${i?"filled":"outlined"}
        aria-pressed=${String(i)}
        @click=${()=>this.updateSelectorStyle(e)}
      >
        ${t}
      </ha-button>
    `}isAutoSelectEnabled(){const t=this.config.auto_select;return!0===t||"recent_activity"===t||"object"==typeof t&&"recent_activity"===t?.mode}updateAutoSelect(t){const{auto_select:e,...i}=this.config;this.commit({...i,...t?{auto_select:{mode:"recent_activity"}}:{}})}updateRememberSelection(t){const{remember_selection:e,...i}=this.config;this.commit({...i,...t?{}:{remember_selection:!1}})}updateStorageKey(t){const e=t.trim(),{storage_key:i,...a}=this.config;this.commit({...a,...e?{storage_key:e}:{}})}getTargetCardConfig(e){const{name:i,icon:a,...o}=e,r={...this.config.card??{},...o},n=r.header&&"object"==typeof r.header?{...r.header}:{};return i&&!1!==r.header&&void 0===n.name&&(n.name=i),a&&!1!==r.header&&void 0===n.icon&&(n.icon=a),{type:r.type??`custom:${t}`,...r,...!1===r.header?{header:!1}:{header:n}}}configureNestedEditor(t,e){if(!t)return;const i=t,a=this.getTargetCardConfig(e),o=JSON.stringify(a);i.hass=this.hass,this.editorConfigKeys.get(t)!==o&&(i.setConfig?.(a),this.editorConfigKeys.set(t,o))}updateTargetCardConfig(t,e){e.stopPropagation();const i=this.getTargets(),a={...e.detail.config??{}},o=this.config.card??{};Object.keys(o).forEach(t=>{"entity"!==t&&ve(a[t],o[t])&&delete a[t]}),delete a.embedded,i[t]=fe(a),this.commitTargets(i)}toggleTargetEditor(t){this.expandedTargetIndex=this.expandedTargetIndex===t?null:t}renderEntityPicker(t,e){return W`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${t.entity}
        .includeDomains=${ge}
        allow-custom-entity
        label="Entity"
        @value-changed=${t=>this.updateTarget(e,{entity:t.detail.value})}
      ></ha-entity-picker>
    `}renderTarget(t,e){const i=this.expandedTargetIndex===e;return W`
      <div class="target">
        <div class="target-fields">
          ${this.renderEntityPicker(t,e)}
          <div class="target-meta">
            <ha-textfield
              label="Name"
              .value=${t.name??""}
              @input=${t=>this.updateTarget(e,{name:t.currentTarget.value})}
            ></ha-textfield>
            <ha-icon-picker
              .hass=${this.hass}
              label="Icon"
              .value=${t.icon??""}
              @value-changed=${t=>this.updateTarget(e,{icon:t.detail.value})}
            ></ha-icon-picker>
          </div>
        </div>
        <div class="target-actions">
          <ha-button size="s" @click=${()=>this.toggleTargetEditor(e)}>
            ${i?"Close":"Configure"}
          </ha-button>
          <div class="target-order">
            <ha-icon-button
              label="Move up"
              title="Move up"
              .path=${ft}
              .disabled=${0===e}
              @click=${()=>this.moveTarget(e,-1)}
            ></ha-icon-button>
            <ha-icon-button
              label="Move down"
              title="Move down"
              .path=${mt}
              .disabled=${e===this.getTargets().length-1}
              @click=${()=>this.moveTarget(e,1)}
            ></ha-icon-button>
            ${this.getTargets().length>1?W`
                    <ha-icon-button
                      label="Remove"
                      title="Remove"
                      .path=${vt}
                      @click=${()=>this.removeTarget(e)}
                    ></ha-icon-button>
                  `:q}
          </div>
        </div>
        ${i?W`
                <div class="target-editor">
                  <simple-thermostat-editor
                    .hass=${this.hass}
                    ${pe(e=>this.configureNestedEditor(e,t))}
                    @config-changed=${t=>this.updateTargetCardConfig(e,t)}
                  ></simple-thermostat-editor>
                </div>
              `:q}
      </div>
    `}render(){const t=this.config.selector??{},e=this.getTargets();return W`
      <div class="section editor-section">
        <div class="section-heading">
          <h3>Cards</h3>
          <p>Choose the cards this group switches between.</p>
        </div>
        ${e.map((t,e)=>this.renderTarget(t,e))}
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
          <div class="selector-style-row">
            <div class="option-text">
              <span class="option-title">Selector style</span>
              <span class="option-description"
                >Choose the normal arrow/menu header or visible tab
                buttons.</span
              >
            </div>
            <div class="selector-style-actions">
              ${this.renderSelectorStyleOption("Header navigation","header","header"===(t.style??me.style))}
              ${this.renderSelectorStyleOption("Tabbed buttons","tabs","tabs"===t.style)}
            </div>
          </div>
          ${this.renderOption("Follow active device","Switch to a card when its mode or on/off activity changes.",this.isAutoSelectEnabled(),t=>this.updateAutoSelect(t))}
          ${this.renderOption("Remember selection","Keep the last selected card after the dashboard reloads.",!1!==this.config.remember_selection,t=>this.updateRememberSelection(t))}
          ${this.renderOption("Show icons","Show each card icon in the selector and menu.",!1!==t.icons,t=>this.updateSelector("icons",t))}
          ${this.renderOption("Show names","Show card names in the selector and menu.",!1!==t.names,t=>this.updateSelector("names",t))}
          ${this.renderOption("Show states","Show current states in the selector menu.",!0===t.states,t=>this.updateSelector("states",t))}
        </div>
        <ha-textfield
          label="Storage key"
          .value=${this.config.storage_key??""}
          @input=${t=>this.updateStorageKey(t.target.value)}
        ></ha-textfield>
      </div>
    `}renderOption(t,e,i,a){return W`
      <div class="option-row">
        <div class="option-text">
          <span class="option-title">${t}</span>
          <span class="option-description">${e}</span>
        </div>
        <ha-switch
          aria-label=${t}
          .checked=${i}
          @change=${t=>a(t.currentTarget.checked)}
        ></ha-switch>
      </div>
    `}}function _e(t){return"string"==typeof t?.state&&"unavailable"!==t.state&&("unknown"!==t.state||["button","input_button","scene"].includes(t.entity_id?.split(".")[0]??""))}function be(t){if("string"!=typeof t.entity_id)return;const[e]=t.entity_id.split(".");return"climate"===e?"hvac_action":"humidifier"===e?"action":void 0}function we(t){const e=be(t),i=e?t.attributes?.[e]:void 0;return"string"==typeof i&&i?i:void 0}function xe(t,e,i){if("string"!=typeof t.entity_id)return void 0===t.state?"":String(t.state);const[a]=t.entity_id.split("."),o=we(t),r=be(t);if(o)return"function"==typeof e.formatEntityAttributeValue&&r?e.formatEntityAttributeValue(t,r):i(o,function(t){if("string"!=typeof t.entity_id)return"";const[e]=t.entity_id.split("."),i=be(t);return e&&i?`state_attributes.${e}.${i}.`:""}(t));if("fan"===a&&"on"===t.state){if(t.attributes?.preset_mode)return"function"==typeof e.formatEntityAttributeValue?e.formatEntityAttributeValue(t,"preset_mode"):i(t.attributes.preset_mode,"state_attributes.fan.preset_mode.");if("number"==typeof t.attributes?.percentage)return`${t.attributes.percentage}%`;if(t.attributes?.speed)return String(t.attributes.speed)}return"function"==typeof e.formatEntityState?e.formatEntityState(t):i(String(t.state),`component.${a}.state._.`)}i([pt({attribute:!1})],ye.prototype,"hass",void 0),i([gt()],ye.prototype,"config",void 0),i([gt()],ye.prototype,"expandedTargetIndex",void 0);const $e={auto:"mdi:radiator",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:radiator",idle:"mdi:radiator-disabled",on:"mdi:power",off:"mdi:radiator-off"},Se={auto:"mdi:air-conditioner",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:radiator",idle:"mdi:air-conditioner",on:"mdi:air-conditioner",off:"mdi:air-conditioner"},Ae={...$e,auto:"mdi:radiator",idle:$e.idle,off:"mdi:radiator"},ke={fan:{on:"mdi:fan",off:"mdi:fan-off"},humidifier:{on:"mdi:air-humidifier",off:"mdi:air-humidifier-off"}},Ee={auto:"hass:autorenew",cool:"hass:snowflake",dry:"hass:water-percent",fan_only:"hass:fan",heat_cool:"hass:autorenew",heat:"hass:fire",on:"hass:power",off:"hass:power",forward:"mdi:arrow-right",reverse:"mdi:arrow-left",true:"mdi:fan",false:"mdi:fan-off",low:"mdi:fan-speed-1",mid:"mdi:fan-speed-2",medium:"mdi:fan-speed-2",high:"mdi:fan-speed-3",max:"st:fan-speed-4",turbo:"st:fan-speed-5",1:"mdi:fan-speed-1",2:"mdi:fan-speed-2",3:"mdi:fan-speed-3",4:"st:fan-speed-4",5:"st:fan-speed-5",automatic:"mdi:fan-auto",powerful:"mdi:fan-plus",quiet:"mdi:fan-minus",silent:"mdi:fan-minus",normal:"mdi:water-percent",vertical:"mdi:arrow-up-down",top:"mdi:arrow-up","top-middle":"mdi:arrow-top-right",middle:"mdi:arrow-collapse-vertical","middle-bottom":"mdi:arrow-bottom-right",bottom:"mdi:arrow-down",upper:"mdi:arrow-up",lower:"mdi:arrow-down",horizontal:"mdi:arrow-left-right",left:"mdi:arrow-left","center-left":"mdi:arrow-top-left",center:"mdi:arrow-collapse-horizontal","center-right":"mdi:arrow-top-right",right:"mdi:arrow-right",both:"mdi:arrow-all",swing:"mdi:arrow-oscillating",wide:"mdi:arrow-expand-horizontal",narrow:"mdi:arrow-collapse-horizontal",split:"mdi:arrow-split-vertical",none:"mdi:circle-off-outline",away:"mdi:home-export-outline",eco:"mdi:leaf",boost:"mdi:weather-windy",comfort:"mdi:sofa",auto_comfort:"mdi:sofa","auto-comfort":"mdi:sofa","auto comfort":"mdi:sofa",home:"mdi:home",sleep:"mdi:sleep",activity:"mdi:run"};function Ce(t){const e=String(t),i=e.toLowerCase().replace(/\s+/g,"_");return Ee[e]??Ee[i]}function ze(t){const e=String(t);return{low:"Low",mid:"Mid",medium:"Medium",high:"High",max:"Max",turbo:"Turbo",auto:"Auto"}[e.toLowerCase().replace(/\s+/g,"_")]??e}function Te(t,e,i,a=!0){if(!1===t)return!1;let o;o="string"==typeof t?.name?t.name:!1!==t?.name&&("function"==typeof i.formatEntityName?i.formatEntityName(e):e.attributes.friendly_name);let r=a?function(t){const[e]=t.entity_id.split("."),i=we(t),a=i?Ne(t):void 0;return a??t.attributes.icon??Ne(t)??ke[e]?.[t.state]??(i?$e:Ee)}(e):function(t){return we(t)?$e:Ee}(e);return void 0!==t?.icon&&(r=t.icon),{name:o,icon:r,slashOffIcon:a&&Me(e,r),toggle:t?.toggle?Re(t.toggle,i):null,toggles:Oe(t,i),faults:je(t?.faults,i)}}function Re(t,e){const i=e.states[t.entity];if(!i)return null;let a="";return a=!0===t?.name?i.attributes.friendly_name:t?.name??"",{entity:i,label:a,icon:t?.icon??!1,hide_when_off:t?.hide_when_off}}function Oe(t,e){return[...t?.toggle?[t.toggle]:[],...Array.isArray(t?.toggles)?t.toggles:[]].map(t=>Re(t,e)).filter(t=>!!t)}function Ne(t){const[e]=t.entity_id.split(".");if("climate"!==e)return;const i=Array.isArray(t.attributes?.hvac_modes)?t.attributes.hvac_modes:[],a=we(t),o=String(a||t.state);return i.includes("cool")||i.includes("dry")||i.includes("fan_only")||["cool","cooling","dry","fan_only","fan"].includes(o)?Se:Ae}function Me(t,e){if("off"!==t.state)return!1;const i="object"==typeof e?e[we(t)||t.state]??!1:e;if("string"!=typeof i)return!1;const[a]=t.entity_id.split("."),o="climate"===a?$e.off:ke[a]?.off;return Boolean(o)&&i!==o&&!i.endsWith("-off")}function je(t,e){return Array.isArray(t)?t.filter(({entity:t})=>Boolean(e.states?.[t])).map(({entity:t,...i})=>({...i,state:e.states[t],entity:t})):[]}const Fe={style:"header",icons:!0,names:!0,states:!1},Pe=["climate","fan","humidifier"];function Ie(t){return t.split(".")[0]}function He(t){return"string"==typeof t?t.replace(/[^a-z0-9_-]/gi,""):""}function Ve(e){if("string"==typeof e){const i=e.trim();return i?{entity:i,config:{type:`custom:${t}`,entity:i}}:null}if(!e?.entity)return null;const{entity:i,name:a,icon:o,...r}=e,n="object"==typeof r.header&&r.header?{...r.header}:{};return a&&!1!==r.header&&void 0===n.name&&(n.name=a),o&&!1!==r.header&&void 0===n.icon&&(n.icon=o),{entity:i,config:{type:r.type??`custom:${t}`,...r,entity:i,...!1===r.header?{header:!1}:{header:n}}}}class Le extends lt{constructor(){super(...arguments),this.targets=[],this.selectedEntity="",this.menuOpen=!1,this.cardFading=!1,this.embeddedCardEntity="",this.embeddedCardConfigSignature="",this.embeddedCardPendingSignature="",this.fadeInAfterSync=!1,this.activitySignatures=new Map,this.activityRecords=new Map,this.activitySignaturesInitialized=!1,this.persistedActivityApplied=!1,this.lastManualSelectionAt=0}static get styles(){return c`
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

      .group-selector.tabs {
        display: block;
        padding: calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 3)
          calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 3) 0;
        height: auto;
        transform: translateY(var(--st-group-header-top-buffer, 2px));
      }

      .group-tabs {
        display: grid;
        grid-template-columns: repeat(
          auto-fit,
          minmax(var(--st-group-tab-min-width, 120px), 1fr)
        );
        gap: calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 2);
        min-width: 0;
      }

      .group-tab {
        appearance: none;
        border: 0;
        border-radius: var(--st-group-tab-radius, 10px);
        min-width: 0;
        min-height: var(--st-group-tab-height, 46px);
        padding: 7px 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: var(--st-group-tab-color, var(--primary-text-color));
        background: var(
          --st-group-tab-background,
          color-mix(in srgb, var(--primary-text-color) 12%, transparent)
        );
        font: inherit;
        font-weight: 600;
        line-height: 1.15;
        cursor: pointer;
        transition:
          background 160ms var(--st-motion-ease, ease),
          color 160ms var(--st-motion-ease, ease),
          opacity 160ms var(--st-motion-ease, ease);
      }

      .group-tab:hover,
      .group-tab:focus-visible {
        background: var(
          --st-group-tab-hover-background,
          color-mix(in srgb, currentColor 22%, transparent)
        );
      }

      .group-tab:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
      }

      .group-tab.selected {
        color: var(--st-group-tab-selected-color, #fff);
        background: var(
          --st-group-tab-selected-background,
          var(--primary-color)
        );
      }

      .group-tab ha-icon {
        --mdc-icon-size: 21px;
        --iron-icon-width: 21px;
        --iron-icon-height: 21px;
        flex: 0 0 auto;
      }

      .group-tab-labels {
        display: grid;
        min-width: 0;
        gap: 1px;
        text-align: center;
      }

      .group-tab-name,
      .group-tab-state {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .group-tab-state {
        color: currentColor;
        opacity: 0.78;
        font-size: var(--ha-font-size-xs, 11px);
        font-weight: 500;
      }

      .group-tab.state-off {
        --st-group-tab-background: color-mix(
          in srgb,
          var(--state-icon-color, var(--secondary-text-color)) 20%,
          transparent
        );
        --st-group-tab-color: var(--secondary-text-color);
      }

      .group-tab.cooling,
      .group-tab.state-cool {
        --st-group-tab-background: color-mix(
          in srgb,
          var(--state-climate-cool-color, var(--cool-color, #2b9af9)) 22%,
          transparent
        );
        --st-group-tab-color: var(
          --state-climate-cool-color,
          var(--cool-color, #2b9af9)
        );
        --st-group-tab-selected-background: var(
          --state-climate-cool-color,
          var(--cool-color, #2b9af9)
        );
      }

      .group-tab.heating,
      .group-tab.state-heat {
        --st-group-tab-background: color-mix(
          in srgb,
          var(--state-climate-heat-color, var(--heat-color, #ff8100)) 22%,
          transparent
        );
        --st-group-tab-color: var(
          --state-climate-heat-color,
          var(--heat-color, #ff8100)
        );
        --st-group-tab-selected-background: var(
          --state-climate-heat-color,
          var(--heat-color, #ff8100)
        );
      }

      .group-tab.drying,
      .group-tab.state-dry {
        --st-group-tab-background: color-mix(
          in srgb,
          var(--state-climate-dry-color, var(--dry-color, #efbd07)) 24%,
          transparent
        );
        --st-group-tab-color: var(
          --state-climate-dry-color,
          var(--dry-color, #efbd07)
        );
        --st-group-tab-selected-background: var(
          --state-climate-dry-color,
          var(--dry-color, #efbd07)
        );
      }

      .group-tab.domain-fan:not(.state-off),
      .group-tab.humidifying {
        --st-group-tab-background: color-mix(
          in srgb,
          var(--primary-color) 22%,
          transparent
        );
        --st-group-tab-color: var(--primary-color);
        --st-group-tab-selected-background: var(--primary-color);
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
        margin-right: calc(
          var(--st-spacing, var(--st-default-spacing, 4px)) * 2
        );
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
    `}static getConfigElement(){return window.document.createElement(`${t}-group-editor`)}static getStubConfig(t){return{entities:Object.keys(t?.states??{}).filter(t=>Pe.includes(Ie(t))).slice(0,2),card:{}}}setConfig(t){this.clearAutoSelectResumeTimer();const e=(t.cards??t.entities??[]).map(Ve).filter(Boolean);if(!e.length)throw new Error("Simple Thermostat Group requires at least one card");this.config={...t,selector:{...Fe,...t.selector??{}}},this.targets=e,this.activityRecords.clear();try{const i=JSON.parse(window.localStorage.getItem(`${this.getActivityStorageKey(t)}:v2`)??"[]");Array.isArray(i)&&i.forEach(t=>{e.some(e=>e.entity===t?.entity)&&"string"==typeof t.signature&&Number.isFinite(t.timestamp)&&this.activityRecords.set(t.entity,t)})}catch{}this.selectedEntity=this.getInitialSelection(t,e),this.activitySignatures.clear(),this.activitySignaturesInitialized=!1,this.persistedActivityApplied=!1}updated(){this.syncAutoSelectRecentActivity(),this.syncEmbeddedCard(),this.syncOutsideClickListener(),this.syncTitleFit()}getCardSize(){if(!this.config||!this.targets.length)return 1;const t=this.embeddedCard?.getCardSize?.();if("number"==typeof t&&Number.isFinite(t))return Math.max(1,t);const e=this.getSelectedTarget(),i=this.getTargetCardConfig(e),a=Array.isArray(i.entities)?i.entities.length:0,o=a?Math.max(1,Math.ceil(a/2)):0,r=this.getConfiguredModeRowCount(i),n=!0===i.hide_setpoint?0:1;return Math.max(2,1+o+n+r)}disconnectedCallback(){this.clearOutsideClickListener(),this.clearAutoSelectResumeTimer(),super.disconnectedCallback()}getInitialSelection(t,e){const i=new Set(e.map(t=>t.entity)),a=!1===t.remember_selection?"":this.readStoredSelection(t);return a&&i.has(a)?a:t.selected&&i.has(t.selected)?t.selected:e[0].entity}readStoredSelection(t){return this.readStoredSelectionRecord(t)?.entity??""}readStoredSelectionRecord(t){try{const e=window.localStorage?.getItem(this.getStorageKey(t));if(!e)return;if(!e.trim().startsWith("{"))return{entity:e,timestamp:0};const i=JSON.parse(e);if("string"==typeof i.entity)return{entity:i.entity,timestamp:Number.isFinite(i.timestamp)?Number(i.timestamp):0}}catch(t){return}}writeStoredSelection(t){if(this.config&&!1!==this.config.remember_selection)try{window.localStorage?.setItem(this.getStorageKey(this.config),JSON.stringify({entity:t,timestamp:Date.now()}))}catch(t){}}readStoredActivity(t){try{const e=window.localStorage?.getItem(this.getActivityStorageKey(t));if(!e)return;const i=JSON.parse(e);if("string"==typeof i.entity&&"string"==typeof i.signature&&Number.isFinite(i.timestamp))return{entity:i.entity,signature:i.signature,timestamp:Number(i.timestamp)}}catch(t){return}}writeStoredActivity(t){if(this.config)try{window.localStorage?.setItem(this.getActivityStorageKey(this.config),JSON.stringify(t))}catch(t){}}getStorageKey(t){if(t.storage_key)return`simple-thermostat-group:${t.storage_key}`;return`simple-thermostat-group:${this.targets.map(t=>t.entity).join("|")}`}getActivityStorageKey(t){return`${this.getStorageKey(t)}:recent-activity`}getConfiguredModeRowCount(t){const e=t.control;return!1===e?0:Array.isArray(e)?e.filter(Boolean).length:e&&"object"==typeof e?Object.entries(e).filter(([t,e])=>!t.startsWith("_")&&!1!==e).length:1}clearAutoSelectResumeTimer(){void 0!==this.autoSelectResumeTimer&&(window.clearTimeout(this.autoSelectResumeTimer),this.autoSelectResumeTimer=void 0)}getSelectedTarget(){return this.targets.find(t=>t.entity===this.selectedEntity)??this.targets[0]}getSelectedState(){const t=this.getSelectedTarget();return this.hass?.states?.[t.entity]}openSelectedPopover(){const t=this.getSelectedTarget();t?.entity&&bt(this,"hass-more-info",{entityId:t.entity})}onSelectorHeaderKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.openSelectedPopover())}getGroupCardClasses(){const t=this.getSelectedState();if(!t)return"group-card group-shell";const e=Ie(t.entity_id),i=we(t),a=["unavailable","unknown"].includes(String(t.state));return["group-card","group-shell",`domain-${He(e)}`,`state-${He(t.state)}`,He(i),a&&He(t.state)].filter(Boolean).join(" ")}getTargetClasses(t){const e=this.hass?.states?.[t.entity];if(!e)return"";const i=Ie(e.entity_id),a=we(e);return[`domain-${He(i)}`,`state-${He(e.state)}`,He(a)].filter(Boolean).join(" ")}getGroupCardStyle(){const t=this.getSelectedState();return t?function(t,e={}){if("fan"!==t)return"";const i=Number(e?.percentage);if(Number.isNaN(i))return"";const a=Math.min(Math.max(i,0),100);return`--st-fan-spin-duration: ${Math.max(.9,3.2-a/100*2.1).toFixed(2)}s;`}(Ie(t.entity_id),t.attributes):""}getSelectedIndex(){const t=this.targets.findIndex(t=>t.entity===this.selectedEntity);return-1===t?0:t}isRecentActivityAutoSelectEnabled(){const t=this.config?.auto_select;return!!t&&(!0===t||"recent_activity"===t||"object"==typeof t&&"recent_activity"===t.mode)}getAutoSelectManualPauseMs(){const t=this.config?.auto_select;if(t&&"object"==typeof t){const e=Number(t.manual_pause_ms??t.cooldown_ms);if(Number.isFinite(e)&&e>=0)return e}return 3e4}pauseAutoSelectAfterManualSelection(){this.lastManualSelectionAt=Date.now(),this.clearAutoSelectResumeTimer(),this.isRecentActivityAutoSelectEnabled()&&(this.autoSelectResumeTimer=window.setTimeout(()=>{this.autoSelectResumeTimer=void 0,this.lastManualSelectionAt=0,this.isRecentActivityAutoSelectEnabled()&&!this.menuOpen&&this.selectMostRecentStateActivity()},this.getAutoSelectManualPauseMs()))}getActivitySignature(t){const e=this.hass?.states?.[t.entity];if(!e)return"";const i=Ie(t.entity),a=we(e)??"";return`domain:${i}|state:${e.state}|action:${a}`}getActivityTimestamp(t){const e=this.hass?.states?.[t.entity],i=this.activityRecords.get(t.entity);if(i?.signature===this.getActivitySignature(t))return i.timestamp;const a=e?.last_changed??e?.last_updated,o="string"==typeof a?Date.parse(a):NaN;return Number.isFinite(o)?o:0}getActivityCandidate(t,e=this.getActivityTimestamp(t)){return{target:t,timestamp:e,activeRank:this.getActivityActiveRank(t),observed:!0===this.activityRecords.get(t.entity)?.observed&&this.activityRecords.get(t.entity)?.signature===this.getActivitySignature(t)}}isBetterActivityCandidate(t,e){return!e||(t.observed||e.observed?t.observed!==e.observed?!0===t.observed:t.timestamp>e.timestamp:t.activeRank!==e.activeRank?t.activeRank>e.activeRank:t.timestamp>=e.timestamp)}getMostRecentStateActivityCandidate(){return this.targets.map(t=>this.getActivityCandidate(t)).filter(t=>t.timestamp>0).reduce((t,e)=>this.isBetterActivityCandidate(e,t)?e:t,void 0)}applyPersistedActivitySelection(t){if(this.persistedActivityApplied||!this.config||!this.isRecentActivityAutoSelectEnabled())return;this.persistedActivityApplied=!0;const e=!1===this.config.remember_selection?void 0:this.readStoredSelectionRecord(this.config),i=e&&this.targets.some(t=>t.entity===e.entity),a=this.getMostRecentStateActivityCandidate();if(i&&(!a||a.timestamp<=e.timestamp))return void this.selectEntity(e.entity,!1);const o=this.readStoredActivity(this.config);if(!o)return void this.selectMostRecentStateActivity(t);if(!this.targets.some(t=>t.entity===o.entity))return void this.selectMostRecentStateActivity(t);const r=this.targets.find(t=>t.entity===o.entity),n=t.get(o.entity);if(r&&n&&n===o.signature){const e=this.getActivityCandidate(r,o.timestamp);return a&&this.isBetterActivityCandidate(a,e)?void this.selectMostRecentStateActivity(t):void this.selectEntity(o.entity,!1)}this.selectMostRecentStateActivity(t)}selectMostRecentStateActivity(t){const e=this.getMostRecentStateActivityCandidate();if(e&&e.target.entity!==this.selectedEntity&&this.selectEntity(e.target.entity,!1),e&&t){const i=t.get(e.target.entity);i&&this.writeStoredActivity({entity:e.target.entity,signature:i,timestamp:e.timestamp})}}getActivityActiveRank(t){const e=this.hass?.states?.[t.entity];if(!e)return 0;const i=Ie(t.entity),a=we(e)??e.attributes?.action,o="string"==typeof e.state?e.state.toLowerCase():"",r="string"==typeof a?a.toLowerCase():"";if("climate"===i)return["heating","cooling","drying"].includes(r)?2:o&&"off"!==o?1:0;if("fan"===i){const t=Number(e.attributes?.percentage);return"on"===o||t>0?2:0}return"humidifier"===i?["drying","humidifying"].includes(r)?2:o&&!["off","idle"].includes(o)?1:0:o&&"off"!==o?1:0}syncAutoSelectRecentActivity(){if(!this.config||!this.hass||!this.targets.length)return;const t=[],e=new Map;let i=!1;if(this.targets.forEach(a=>{const o=this.getActivitySignature(a);e.set(a.entity,o);const r=this.activityRecords.get(a.entity);if(this.activitySignaturesInitialized&&o&&o!==this.activitySignatures.get(a.entity)){const e={entity:a.entity,signature:o,timestamp:Date.now(),observed:!0};this.activityRecords.set(a.entity,e),i=!0,this.writeStoredActivity(e),t.push(this.getActivityCandidate(a,Date.now()))}else o&&r?.signature!==o&&(i=!0,this.activityRecords.set(a.entity,{entity:a.entity,signature:o,timestamp:this.getActivityTimestamp(a),observed:!1}))}),i)try{window.localStorage.setItem(`${this.getActivityStorageKey(this.config)}:v2`,JSON.stringify([...this.activityRecords.values()]))}catch{}if(this.activitySignatures=e,!this.activitySignaturesInitialized)return this.activitySignaturesInitialized=!0,void this.applyPersistedActivitySelection(e);if(!t.length||!this.isRecentActivityAutoSelectEnabled()||this.menuOpen||Date.now()-this.lastManualSelectionAt<this.getAutoSelectManualPauseMs())return;const a=t.reduce((t,e)=>this.isBetterActivityCandidate(e,t)?e:t);this.selectEntity(a.target.entity,!1)}getTargetLabel(t){const e=this.parseTargetHeader(t);if(e&&"string"==typeof e.name)return e.name;const i=this.hass?.states?.[t.entity];return i&&"function"==typeof this.hass?.formatEntityName?this.hass.formatEntityName(i):i?.attributes?.friendly_name??t.entity}getTargetIcon(t){if(!(this.config?.selector??Fe).icons)return"";const e=this.parseTargetHeader(t);if(e&&e.icon)return this.resolveHeaderIcon(e.icon,t);const i=this.hass?.states?.[t.entity];if(i?.attributes?.icon)return i.attributes.icon;const a=Ie(t.entity);return"fan"===a?"mdi:fan":"humidifier"===a?"mdi:air-humidifier":"mdi:air-conditioner"}getTargetHeaderData(t){return this.parseTargetHeader(t)}parseTargetHeader(t){const e=this.hass?.states?.[t.entity];if(!e||!this.hass)return null;const i=this.getTargetCardConfig(t);return Te(i.header,e,this.hass,!1!==i.enhanced_visuals)}resolveHeaderIcon(t,e){if("string"==typeof t)return t;if(!t||"object"!=typeof t)return"";const i=this.hass?.states?.[e.entity];if(!i)return"";const a=t[we(i)||String(i.state)];return"string"==typeof a?a:""}getHeaderToggleConfigs(t){const e=t.config.header;return e&&"object"==typeof e?[...e.toggle?[e.toggle]:[],...Array.isArray(e.toggles)?e.toggles:[]].filter(t=>t?.entity&&this.hass?.states?.[t.entity]):[]}getEmbeddedConfig(){const t=this.getSelectedTarget();return this.getTargetCardConfig(t)}getEmbeddedConfigSignature(t){return JSON.stringify(t)}getTargetCardConfig(e){return{...{...this.config?.card??{},...this.getSourceTargetConfig(e),...e.config},embedded:!0,entity:e.entity,type:e.config.type??`custom:${t}`}}getSourceTargetConfig(t){const e=(this.config?.cards??this.config?.entities??[]).find(e=>!!e&&"object"==typeof e&&e.entity===t.entity);return e&&"object"==typeof e?e:{}}getCardHelpers(){return this.cardHelpersPromise||(this.cardHelpersPromise="function"==typeof window.loadCardHelpers?window.loadCardHelpers():Promise.reject(new Error("Home Assistant card helpers unavailable"))),this.cardHelpersPromise}createFallbackEmbeddedCardElement(e){const i=window.document.createElement(t);if("function"==typeof i.setConfig)return i.setConfig(e),i}installEmbeddedCard(t,e,i,a){this.config&&this.hass&&(e&&"function"==typeof e.setConfig?this.getEmbeddedConfigSignature(this.getEmbeddedConfig())===a&&(this.embeddedCard=e,this.embeddedCardEntity=String(i.entity??""),this.embeddedCardConfigSignature=a,this.embeddedCardPendingSignature="",t.replaceChildren(e),"function"==typeof e.setConfig&&e.setConfig(i),e.hass=this.hass,this.syncEmbeddedPresentation()):this.embeddedCardPendingSignature="")}syncEmbeddedCard(){if(!this.config||!this.hass)return;const e=this.renderRoot.querySelector(".embedded-card-host");if(!e)return;const i=this.getEmbeddedConfig(),a=this.getEmbeddedConfigSignature(i);if(!this.embeddedCard||this.embeddedCardEntity!==i.entity||this.embeddedCardConfigSignature!==a){if("function"!=typeof window.loadCardHelpers){const o=window.customElements.get(t)?this.createFallbackEmbeddedCardElement(i):void 0;return o?void this.installEmbeddedCard(e,o,i,a):void(this.embeddedCardPendingSignature="")}if(this.embeddedCardPendingSignature===a)return;return this.embeddedCardPendingSignature=a,void this.getCardHelpers().then(t=>t.createCardElement(i)).catch(()=>window.customElements.get(t)?this.createFallbackEmbeddedCardElement(i):void 0).then(t=>this.installEmbeddedCard(e,t,i,a))}this.embeddedCard.hass=this.hass,this.syncEmbeddedPresentation()}syncEmbeddedPresentation(){const t=this.embeddedCard;(t?.updateComplete??Promise.resolve()).catch(()=>{}).then(()=>window.requestAnimationFrame(()=>this.applyEmbeddedPresentation()))}applyEmbeddedPresentation(){const t=this.renderRoot.querySelector(".embedded-card-host"),e=this.renderRoot.querySelector(".group-selector"),i=this.embeddedCard;t&&i&&(t.style.removeProperty("--st-group-cropped-header-height"),i.style.setProperty("--st-group-embedded-header-min-height",this.getEmbeddedHeaderReserve(i,e)),this.fadeInAfterSync&&(this.fadeInAfterSync=!1,window.requestAnimationFrame(()=>{this.cardFading=!1})))}getEmbeddedHeaderReserve(t,e){const i="calc(var(--st-group-header-control-height, 34px) + var(--st-group-header-top-buffer, 2px) + calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 6))",a=this.getEmbeddedHeaderReserveMinimum();if(!e)return i;const o=t.getBoundingClientRect(),r=e.getBoundingClientRect(),n=Math.ceil(r.bottom-o.top+8),s=Math.max(n,a);return Number.isFinite(s)&&s>24?`${s}px`:i}getEmbeddedHeaderReserveMinimum(){const t=getComputedStyle(this),e=parseFloat(t.getPropertyValue("--st-group-header-control-height"))||34,i=parseFloat(t.getPropertyValue("--st-group-header-top-buffer"))||2,a=parseFloat(t.getPropertyValue("--st-spacing"))||parseFloat(t.getPropertyValue("--st-default-spacing"))||4;return Math.ceil(e+i+4*a)}selectEntity(t,e=!0){if(this.menuOpen=!1,t===this.selectedEntity)return;e&&this.pauseAutoSelectAfterManualSelection();const i=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(!this.embeddedCard||i)return this.fadeInAfterSync=!1,this.cardFading=!1,this.selectedEntity=t,void(e&&this.writeStoredSelection(t));this.cardFading=!0,this.fadeInAfterSync=!0,this.selectedEntity=t,e&&this.writeStoredSelection(t)}selectOffset(t){if(this.targets.length<2)return;const e=(this.getSelectedIndex()+t+this.targets.length)%this.targets.length;this.selectEntity(this.targets[e].entity)}toggleHeaderEntity(t,e){if(t.stopPropagation(),!_e(this.hass?.states?.[e]))return;const i=Boolean(t.target.checked);this.hass?.callService?.("homeassistant","turn_"+(i?"on":"off"),{entity_id:e})}renderHeaderToggles(t){const e=this.getHeaderToggleConfigs(t);return e.length?W`
      <div class="group-toggles">
        ${e.map(t=>{const e=this.hass?.states?.[t.entity],i=!0===t.name?e?.attributes?.friendly_name:"string"==typeof t.name?t.name:e?.attributes?.friendly_name,a=t.icon||e?.attributes?.icon;return W`
            <div class="group-toggle">
              <ha-switch
                .checked=${"on"===e?.state}
                .disabled=${!_e(e)}
                @change=${e=>this.toggleHeaderEntity(e,t.entity)}
              ></ha-switch>
              ${a?W`<ha-icon
                      title=${i||t.entity}
                      icon=${a}
                    ></ha-icon>`:i?W`<span class="group-toggle-label">${i}</span>`:q}
              ${i&&a?W`<span class="group-toggle-label" title=${i}
                      >${i}</span
                    >`:q}
            </div>
          `})}
      </div>
    `:q}toggleMenu(){this.targets.length<2||(this.menuOpen=!this.menuOpen)}clearOutsideClickListener(){this.removeOutsideClickListener?.(),this.removeOutsideClickListener=void 0}syncTitleFit(){window.requestAnimationFrame(()=>{const t=this.renderRoot.querySelector(".group-title");if(!t)return;t.style.removeProperty("--st-group-title-fit-size"),t.style.removeProperty("--st-group-title-fit-line-height");const e=t.clientWidth,i=t.scrollWidth;if(!e||i<=e)return;const a=window.getComputedStyle(t),o=Number.parseFloat(a.fontSize)||24,r=Math.max(14,Math.floor(o*(e/i)*100)/100);t.style.setProperty("--st-group-title-fit-size",`${r}px`),t.style.setProperty("--st-group-title-fit-line-height",`${r}px`)})}syncOutsideClickListener(){if(!this.menuOpen)return void this.clearOutsideClickListener();if(this.removeOutsideClickListener)return;const t=t=>{t.composedPath().includes(this)||(this.menuOpen=!1)};window.addEventListener("pointerdown",t,{capture:!0}),this.removeOutsideClickListener=()=>window.removeEventListener("pointerdown",t,{capture:!0})}renderPicker(){return this.menuOpen?W`
      <div class="group-picker" role="menu">
        ${this.targets.map(t=>{const e=this.getTargetLabel(t),i=this.getTargetIcon(t),a=t.entity===this.selectedEntity;return W`
            <button
              type="button"
              role="menuitemradio"
              aria-checked=${a?"true":"false"}
              class=${a?"selected":""}
              @click=${()=>this.selectEntity(t.entity)}
            >
              ${i?W`<ha-icon icon=${i}></ha-icon>`:W`<span class="icon-placeholder"></span>`}
              <span>${e}</span>
            </button>
          `})}
      </div>
    `:q}renderHeaderIcon(t){const e=this.hass?.states?.[t.entity],i=this.getTargetHeaderData(t);if(!e||!i||!i.icon)return q;const a=we(e)||String(e.state),o="object"==typeof i.icon?i.icon?.[a]??!1:i.icon;if(!o)return q;const r=a&&a!==e.state?` ${He(a)}`:"",n=He(e.state);return W`
      <span
        class="header__icon-wrap ${n}${r} ${i.slashOffIcon?"slash-off":""}"
      >
        <ha-icon
          class="header__icon ${n}${r}"
          .icon=${o}
        ></ha-icon>
      </span>
    `}getTargetStateLabel(t){const e=this.hass?.states?.[t.entity];return e?"function"==typeof this.hass?.formatEntityState?this.hass.formatEntityState(e):String(e.state):""}renderTabSelector(){const t=this.config?.selector??Fe;return W`
      <div class="group-selector tabs">
        <div class="group-tabs" role="tablist">
          ${this.targets.map(e=>{const i=this.getTargetLabel(e),a=this.getTargetIcon(e),o=e.entity===this.selectedEntity,r=t.states?this.getTargetStateLabel(e):"";return W`
              <button
                class=${["group-tab",this.getTargetClasses(e),o&&"selected"].filter(Boolean).join(" ")}
                type="button"
                role="tab"
                aria-selected=${o?"true":"false"}
                title=${i}
                @click=${()=>this.selectEntity(e.entity)}
              >
                ${a?W`<ha-icon icon=${a}></ha-icon>`:q}
                ${!1!==t.names?W`
                        <span class="group-tab-labels">
                          <span class="group-tab-name">${i}</span>
                          ${r?W`<span class="group-tab-state"
                                  >${r}</span
                                >`:q}
                        </span>
                      `:q}
              </button>
            `})}
        </div>
      </div>
    `}renderSelector(){if("tabs"===this.config?.selector?.style)return this.renderTabSelector();const t=this.getSelectedTarget(),e=this.getTargetLabel(t);return W`
      <div class="group-selector">
        <div class="group-header-content">
          <div
            class="header__main clickable"
            role="button"
            tabindex="0"
            @click=${()=>this.openSelectedPopover()}
            @keydown=${t=>this.onSelectorHeaderKeyDown(t)}
          >
            ${this.renderHeaderIcon(t)}
            <div class="group-title header__title" title=${e}>${e}</div>
          </div>
          ${this.renderHeaderToggles(t)}
        </div>
        <div class="group-nav-cluster">
          <button
            class="group-nav previous"
            type="button"
            aria-label="Previous device"
            ?disabled=${this.targets.length<2}
            @click=${()=>this.selectOffset(-1)}
          >
            <ha-icon icon="mdi:chevron-left"></ha-icon>
          </button>
          <button
            class="group-nav next"
            type="button"
            aria-label="Next device"
            ?disabled=${this.targets.length<2}
            @click=${()=>this.selectOffset(1)}
          >
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>
          <button
            class="group-menu"
            type="button"
            aria-label="Select device"
            aria-haspopup="menu"
            aria-expanded=${this.menuOpen?"true":"false"}
            ?disabled=${this.targets.length<2}
            @click=${()=>this.toggleMenu()}
          >
            <ha-icon icon="mdi:dots-vertical"></ha-icon>
          </button>
        </div>
        ${this.renderPicker()}
      </div>
    `}render(){return this.config?W`
      <div
        class=${this.getGroupCardClasses()}
        style=${this.getGroupCardStyle()}
      >
        ${this.renderSelector()}
        <div
          class=${"embedded-card-host"+(this.cardFading?" fading":"")}
        ></div>
      </div>
    `:W`<ha-card></ha-card>`}}var De;i([pt({attribute:!1})],Le.prototype,"hass",void 0),i([gt()],Le.prototype,"config",void 0),i([gt()],Le.prototype,"targets",void 0),i([gt()],Le.prototype,"selectedEntity",void 0),i([gt()],Le.prototype,"menuOpen",void 0),i([gt()],Le.prototype,"cardFading",void 0),function(t){t.OFF="off",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.AUTO="auto",t.DRY="dry",t.FAN_ONLY="fan_only"}(De||(De={}));const Ue=["auto","silent","quiet","low","mid","medium","high","max","turbo","full"];const Be=["mdi:fan-speed-1","mdi:fan-speed-2","mdi:fan-speed-3","st:fan-speed-4","st:fan-speed-5"],We=t=>String(t).toLowerCase().replace(/\s+/g,"_"),Ge={low:1,medlow:2,medium_low:2,mid:2,medium:2,medium_high:3,medhigh:3,max:5,turbo:5,full:5};function qe(t,e){const i=We(t),a=function(t){if(!/^\d+$/.test(t))return;const e=Number(t);return e>=1&&e<=Be.length?e:void 0}(i);if(a)return Be[a-1];const o=function(t,e){if("high"===t){const t=new Set(e.map(We));return t.has("medium_high")||t.has("medhigh")||t.has("max")||t.has("turbo")||t.has("full")?4:3}return Ge[t]}(i,e);return o?Be[o-1]:void 0}function Ke(t,{decimals:e=1,fallback:i="N/A",locale:a}={}){if(null===t||""===t||["boolean","undefined"].includes(typeof t))return i;const o=Number(t);return Number.isNaN(o)?i:a?"decimal_comma"===a.number_format||"space_comma"===a.number_format?o.toFixed(e).replace(".",","):"comma_decimal"===a.number_format||"none"===a.number_format?o.toFixed(e):new Intl.NumberFormat("system"===a.number_format?void 0:a.language,{minimumFractionDigits:e,maximumFractionDigits:e}).format(o):o.toFixed(e)}const Ze=[["heat",/\b(heat|heater|furnace|radiator|boiler|water[_ -]?heater)\b/],["cool",/\b(cool|cooling|ac|a\/c|air[_ -]?conditioner|snowflake)\b/],["dry",/\b(dry|drying|dehumidifier|dehumidify)\b/],["water-percent",/\b(humidifier|humidify|humidity)\b/],["fan",/\b(fan|blower)\b/],["lightbulb",/\b(light|lamp|bulb)\b/]],Je={heat:["component.climate.state._.heat","state_attributes.climate.hvac_action.heating"],cool:["component.climate.state._.cool","state_attributes.climate.hvac_action.cooling"],dry:["component.climate.state._.dry","state_attributes.humidifier.action.drying"],fan:["component.fan.entity_component._.name"],lightbulb:["component.light.entity_component._.name"],"water-percent":["component.humidifier.entity_component._.name","state_attributes.humidifier.action.humidifying"]};function Ye(t,e){const i=t.toLowerCase().replace(/[.:]/g," "),a=function(t){return"function"!=typeof t?.localize?[]:Object.entries(Je).flatMap(([e,i])=>i.map(e=>t.localize(e)).filter(t=>t&&!i.includes(t)).map(t=>{return[e,(i=String(t),i.toLowerCase().replace(/[.:]/g," "))];var i}))}(e).find(([,t])=>!!t&&(i===t||i.includes(t)));if(a)return a[0];const o=Ze.find(([,t])=>t.test(i));return o?.[0]??""}function Xe(t){if("string"!=typeof t||!t)return"";const e=(i=t.replace(/^[a-z]+:/,""),String(i??"").replace(/[^a-z0-9_-]/gi,""));var i;const a=Ye(e.replace(/-/g," "));return a||(["fire","radiator","heat-wave","heating-coil","water-boiler","water-boiler-auto","water-boiler-off"].includes(e)?"heat":["snowflake","air-conditioner"].includes(e)?"cool":"fan"===e?"fan":e.includes("light")?"lightbulb":["water-percent","air-humidifier"].includes(e)||["air-humidifier-off"].includes(e)?"water-percent":e)}function Qe({icon:t,label:e,entity:i,hass:a}){const o=Xe(t);if(o)return o;const r=function(t){const e=t?.entity_id,i="string"==typeof e?e.split(".")[0]:"",a=t?.attributes?.device_class;return"light"===i?"lightbulb":"fan"===i?"fan":"humidifier"===i?"dehumidifier"===a?"dry":"water-percent":"heat"===a||"heater"===a?"heat":"cold"===a||"cooling"===a?"cool":"moisture"===a||"humidity"===a?"water-percent":""}(i);if(r)return r;return Ye([e,i?.entity_id,i?.attributes?.friendly_name].filter(Boolean).join(" "),a)}function ti(t){return t?`toggle-${t}`:""}function ei({header:t,toggleEntityChanged:e,entity:i,hass:a,openEntityPopover:o}){if(!1===t)return q;const r=we(i)||i.state;let n=t.icon;"object"==typeof t.icon&&(n=n?.[r]??!1);const s=Boolean(t.slashOffIcon),c=t?.name??!1;return W`
    <header>
      <div class="header__main clickable" @click=${()=>o()}>
        ${function(t,e,i,a=!1){const o=i&&i!==e?` ${i}`:"";return t?W`
        <span
          class="header__icon-wrap ${e}${o} ${a?"slash-off":""}"
        >
          <ha-icon
            class="header__icon ${e}${o}"
            .icon=${t}
          ></ha-icon>
        </span>
      `:q}(n,i.state,r,s)}
        ${function(t){return t?W`<h2 class="header__title">${t}</h2>`:q}(c)}
      </div>
      ${function(t,e){if(!t?.length)return q;const i=t.map(({icon:t,hide_inactive:i,state:a})=>a?W` <ha-icon
      class="fault-icon ${"on"===a.state?"active":i?" hide":""}"
      .icon=${t||a.attributes?.icon}
      @click="${()=>e(a.entity_id)}"
    ></ha-icon>`:q);return W` <div class="faults">${i}</div>`}(t.faults,o)}
      ${function(t,e,i,a,o){return t?.length?W`
    <div class="header__toggles">
      ${t.map(t=>{if(!0===t.hide_when_off&&"off"===o?.state)return q;const r=t.entity?.entity_id,n=t.entity?.state,s="string"==typeof r?r.split(".")[0]:"",c=ti(Qe({icon:"string"==typeof t.icon?t.icon:t.entity?.attributes?.icon,label:t.label,entity:t.entity,hass:a}));return W`
          <div
            class="header__toggle ${n||""} ${s?`domain-${s}`:""} ${c}"
          >
            <span
              class="clickable toggle-label ${n||""} ${s?`domain-${s}`:""} ${c}"
              title=${t.label||t.entity?.attributes?.friendly_name}
              @click=${()=>e(r)}
              >${!1!==t.icon?W`<ha-icon .icon=${t.icon}></ha-icon>`:t.label}
            </span>
            <ha-switch
              .checked=${"on"===t.entity?.state}
              .disabled=${!_e(t.entity)}
              @change=${t=>i(t,r)}
            ></ha-switch>
          </div>
        `})}
    </div>
  `:q}(t.toggles,o,e,a,i)}
    </header>
  `}function ii(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ai(t,e,i){if(!e||"string"!=typeof e)return String(t);const a=String(t);return new RegExp(`${ii(e)}$`).test(a)?a:`${a}${function(t,e){if(e){const i=e.match(new RegExp(`(\\s*)${ii(t)}$`));if(i)return i[1]??""}return"%"===t?"":" "}(e,i)}${e}`}var oi,ri={exports:{}};function ni(){return oi||(oi=1,function(t){function e(t){var i,a,o=new Error(t);return i=o,a=e.prototype,Object.setPrototypeOf?Object.setPrototypeOf(i,a):i.__proto__=a,o}function i(t,i,a){var o=i.slice(0,a).split(/\n/),r=o.length,n=o[r-1].length+1;throw e(t+=" at line "+r+" col "+n+":\n\n  "+i.split(/\n/)[r-1]+"\n  "+Array(n).join(" ")+"^")}e.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var a=new Function("return this")().Promise,o=!1;try{o=new Function("return (async function(){}).constructor")()}catch(t){if(!(t instanceof SyntaxError))throw t}function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function n(t,e,i){for(var a in e)r(e,a)&&(null==e[a]||"object"!=typeof e[a]||"storage"!==a&&"prefixes"!==a||i?t[a]=e[a]:t[a]=n({},e[a]));return t}var s=/^async +/,c=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,l=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,d=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,h=/[.*+\-?^${}()|[\]\\]/g;function u(t){return h.test(t)?t.replace(h,"\\$&"):t}function p(t,a){a.rmWhitespace&&(t=t.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),c.lastIndex=0,l.lastIndex=0,d.lastIndex=0;var o=a.prefixes,r=[o.h,o.b,o.i,o.r,o.c,o.e].reduce(function(t,e){return t&&e?t+"|"+u(e):e?u(e):t},""),n=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+u(a.tags[1])+")","g"),h=new RegExp("([^]*?)"+u(a.tags[0])+"(-|_)?\\s*("+r+")?\\s*","g"),p=0,g=!1;function m(e,o){var r,u={f:[]},m=0,f="c";function v(e){var o=t.slice(p,e),r=o.trim();if("f"===f)"safe"===r?u.raw=!0:a.async&&s.test(r)?(r=r.replace(s,""),u.f.push([r,"",!0])):u.f.push([r,""]);else if("fp"===f)u.f[u.f.length-1][1]+=r;else if("err"===f){if(r){var n=o.search(/\S/);i("invalid syntax",t,p+n)}}else u[f]=r;p=e+1}for("h"===o||"b"===o||"c"===o?f="n":"r"===o&&(u.raw=!0,o="i"),n.lastIndex=p;null!==(r=n.exec(t));){var y=r[1],_=r[2],b=r[3],w=r[4],x=r[5],$=r.index;if(y)"("===y?(0===m&&("n"===f?(v($),f="p"):"f"===f&&(v($),f="fp")),m++):")"===y?0===--m&&"c"!==f&&(v($),f="err"):0===m&&"|"===y?(v($),f="f"):"=>"===y&&(v($),p+=1,f="res");else if(_)if("/*"===_){var S=t.indexOf("*/",n.lastIndex);-1===S&&i("unclosed comment",t,r.index),n.lastIndex=S+2}else"'"===_?(l.lastIndex=r.index,l.exec(t)?n.lastIndex=l.lastIndex:i("unclosed string",t,r.index)):'"'===_?(d.lastIndex=r.index,d.exec(t)?n.lastIndex=d.lastIndex:i("unclosed string",t,r.index)):"`"===_&&(c.lastIndex=r.index,c.exec(t)?n.lastIndex=c.lastIndex:i("unclosed string",t,r.index));else if(b)return v($),p=$+r[0].length,h.lastIndex=p,g=x,w&&"h"===o&&(o="s"),u.t=o,u}return i("unclosed tag",t,e),u}var f=function r(n,c){n.b=[],n.d=[];var l,d=!1,u=[];function f(t,e){t&&(t=function(t,e,i,a){var o,r;return"string"==typeof e.autoTrim?o=r=e.autoTrim:Array.isArray(e.autoTrim)&&(o=e.autoTrim[1],r=e.autoTrim[0]),(i||!1===i)&&(o=i),(a||!1===a)&&(r=a),"slurp"===o&&"slurp"===r?t.trim():("_"===o||"slurp"===o?t=String.prototype.trimLeft?t.trimLeft():t.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==o&&"nl"!==o||(t=t.replace(/^(?:\n|\r|\r\n)/,"")),"_"===r||"slurp"===r?t=String.prototype.trimRight?t.trimRight():t.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==r&&"nl"!==r||(t=t.replace(/(?:\n|\r|\r\n)$/,"")),t)}(t,a,g,e),t&&(t=t.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),u.push(t)))}for(;null!==(l=h.exec(t));){var v,y=l[1],_=l[2],b=l[3]||"";for(var w in o)if(o[w]===b){v=w;break}f(y,_),p=l.index+l[0].length,v||i("unrecognized tag type: "+b,t,p);var x=m(l.index,v),$=x.t;if("h"===$){var S=x.n||"";a.async&&s.test(S)&&(x.a=!0,x.n=S.replace(s,"")),x=r(x),u.push(x)}else if("c"===$){if(n.n===x.n)return d?(d.d=u,n.b.push(d)):n.d=u,n;i("Helper start and end don't match",t,l.index+l[0].length)}else if("b"===$){d?(d.d=u,n.b.push(d)):n.d=u;var A=x.n||"";a.async&&s.test(A)&&(x.a=!0,x.n=A.replace(s,"")),d=x,u=[]}else if("s"===$){var k=x.n||"";a.async&&s.test(k)&&(x.a=!0,x.n=k.replace(s,"")),u.push(x)}else u.push(x)}if(!c)throw e('unclosed helper "'+n.n+'"');return f(t.slice(p,t.length),!1),n.d=u,n}({f:[]},!0);if(a.plugins)for(var v=0;v<a.plugins.length;v++){var y=a.plugins[v];y.processAST&&(f.d=y.processAST(f.d,a))}return f.d}function g(t,e){var i=p(t,e),a="var tR='';"+(e.useWith?"with("+e.varName+"||{}){":"")+_(i,e)+"if(cb){cb(null,tR)} return tR"+(e.useWith?"}":"");if(e.plugins)for(var o=0;o<e.plugins.length;o++){var r=e.plugins[o];r.processFnString&&(a=r.processFnString(a,e))}return a}function m(t,e){for(var i=0;i<e.length;i++){var a=e[i][0],o=e[i][1];t=(e[i][2]?"await ":"")+"c.l('F','"+a+"')("+t,o&&(t+=","+o),t+=")"}return t}function f(t,e,i,a,o,r){var n="{exec:"+(o?"async ":"")+y(i,e,t)+",params:["+a+"]";return r&&(n+=",name:'"+r+"'"),o&&(n+=",async:true"),n+"}"}function v(t,e){for(var i="[",a=0;a<t.length;a++){var o=t[a];i+=f(e,o.res||"",o.d,o.p||"",o.a,o.n),a<t.length&&(i+=",")}return i+"]"}function y(t,e,i){return"function("+e+"){var tR='';"+_(t,i)+"return tR}"}function _(t,e){for(var i=0,a=t.length,o="";i<a;i++){var r=t[i];if("string"==typeof r)o+="tR+='"+r+"';";else{var n=r.t,s=r.c||"",c=r.f,l=r.n||"",d=r.p||"",h=r.res||"",u=r.b,p=!!r.a;if("i"===n){e.defaultFilter&&(s="c.l('F',"+JSON.stringify(e.defaultFilter)+")("+s+")");var g=m(s,c);!r.raw&&e.autoEscape&&(g="c.l('F','e')("+g+")"),o+="tR+="+g+";"}else if("h"===n)if(e.storage.nativeHelpers.get(l))o+=e.storage.nativeHelpers.get(l)(r,e);else{var y=(p?"await ":"")+"c.l('H','"+l+"')("+f(e,h,r.d,d,p);y+=u?","+v(u,e):",[]",o+="tR+="+m(y+=",c)",c)+";"}else"s"===n?o+="tR+="+m((p?"await ":"")+"c.l('H','"+l+"')({params:["+d+"]},[],c)",c)+";":"e"===n&&(o+=s+"\n")}}return o}var b=function(){function t(t){this.cache=t}return t.prototype.define=function(t,e){this.cache[t]=e},t.prototype.get=function(t){return this.cache[t]},t.prototype.remove=function(t){delete this.cache[t]},t.prototype.reset=function(){this.cache={}},t.prototype.load=function(t){n(this.cache,t,!0)},t}();function w(t,i,a,o){if(i&&i.length>0)throw e((o?"Native":"")+"Helper '"+t+"' doesn't accept blocks");if(a&&a.length>0)throw e((o?"Native":"")+"Helper '"+t+"' doesn't accept filters")}function x(t,e,i,a,o){i(t[e],e).then(function(r){a+=r,e===t.length-1?o(a):x(t,e+1,i,a,o)})}function $(t,e,i,a,o,r){a(e[i],t[e[i]]).then(function(n){o+=n,i===e.length-1?r(o):$(t,e,i+1,a,o,r)})}var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function A(t){return S[t]}var k=new b({}),E=new b({each:function(t,e){var i="",a=t.params[0];if(w("each",e,!1),t.async)return new Promise(function(e){x(a,0,t.exec,i,e)});for(var o=0;o<a.length;o++)i+=t.exec(a[o],o);return i},foreach:function(t,e){var i=t.params[0];if(w("foreach",e,!1),t.async)return new Promise(function(e){$(i,Object.keys(i),0,t.exec,"",e)});var a="";for(var o in i)r(i,o)&&(a+=t.exec(o,i[o]));return a},include:function(t,i,a){w("include",i,!1);var o=a.storage.templates.get(t.params[0]);if(!o)throw e('Could not fetch template "'+t.params[0]+'"');return o(t.params[1],a)},extends:function(t,i,a){var o=t.params[1]||{};o.content=t.exec();for(var r=0;r<i.length;r++){var n=i[r];o[n.name]=n.exec()}var s=a.storage.templates.get(t.params[0]);if(!s)throw e('Could not fetch template "'+t.params[0]+'"');return s(o,a)},useScope:function(t,e){return w("useScope",e,!1),t.exec(t.params[0])}}),C=new b({if:function(t,e){w("if",!1,t.f,!0);var i="if("+t.p+"){"+_(t.d,e)+"}";if(t.b)for(var a=0;a<t.b.length;a++){var o=t.b[a];"else"===o.n?i+="else{"+_(o.d,e)+"}":"elif"===o.n&&(i+="else if("+o.p+"){"+_(o.d,e)+"}")}return i},try:function(t,i){if(w("try",!1,t.f,!0),!t.b||1!==t.b.length||"catch"!==t.b[0].n)throw e("native helper 'try' only accepts 1 block, 'catch'");var a="try{"+_(t.d,i)+"}",o=t.b[0];return a+"catch"+(o.res?"("+o.res+")":"")+"{"+_(o.d,i)+"}"},block:function(t,e){return w("block",t.b,t.f,!0),"if(!"+e.varName+"["+t.p+"]){tR+=("+y(t.d,"",e)+")()}else{tR+="+e.varName+"["+t.p+"]}"}}),z=new b({e:function(t){var e=String(t);return/[&<>"']/.test(e)?e.replace(/[&<>"']/g,A):e}}),T={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(t,i){if("H"===t){var a=this.storage.helpers.get(i);if(a)return a;throw e("Can't find helper '"+i+"'")}if("F"===t){var o=this.storage.filters.get(i);if(o)return o;throw e("Can't find filter '"+i+"'")}},async:!1,storage:{helpers:E,nativeHelpers:C,filters:z,templates:k},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function R(t,e){var i={};return n(i,T),e&&n(i,e),t&&n(i,t),i.l.bind(i),i}function O(t,i){var a,r=R(i||{}),n=Function;if(r.async){if(!o)throw e("This environment doesn't support async/await");n=o}if(r.varName&&!1===(a=r.varName,/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(a)))throw e("options.varName must be a valid JS identifier");try{return new n(r.varName,"c","cb",g(t,r))}catch(i){throw i instanceof SyntaxError?e("Bad template syntax\n\n"+i.message+"\n"+Array(i.message.length+1).join("=")+"\n"+g(t,r)):i}}function N(t,e){var i;return e.cache&&e.name&&e.storage.templates.get(e.name)?e.storage.templates.get(e.name):(i="function"==typeof t?t:O(t,e),e.cache&&e.name&&e.storage.templates.define(e.name,i),i)}T.l.bind(T),t.compile=O,t.compileScope=_,t.compileScopeIntoFunction=y,t.compileToString=g,t.defaultConfig=T,t.filters=z,t.getConfig=R,t.helpers=E,t.nativeHelpers=C,t.parse=p,t.render=function(t,i,o,r){var n=R(o||{});if(!n.async)return N(t,n)(i,n);if(!r){if("function"==typeof a)return new a(function(e,a){try{e(N(t,n)(i,n))}catch(t){a(t)}});throw e("Please provide a callback function, this env doesn't support Promises")}try{N(t,n)(i,n,r)}catch(t){return r(t)}},t.templates=k,Object.defineProperty(t,"__esModule",{value:!0})}(ri.exports)),ri.exports}var si=ni();function ci(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function li(t){return ci(t)}function di(t){return"string"==typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):Array.isArray(t)?t.map(di):t&&"object"==typeof t?Object.fromEntries(Object.entries(t).map(([t,e])=>[t,di(e)])):t}function hi({template:t,stateObj:e,attribute:i,hass:a,config:o={},variables:r={},localize:n=t=>t}){const[s]=String(e?.entity_id??"").split("."),c=e?.attributes??{},l=i&&Object.prototype.hasOwnProperty.call(c,i)?c[i]:e?.state,d=i&&"function"==typeof a.formatEntityAttributeValue?a.formatEntityAttributeValue(e,i):"function"==typeof a.formatEntityState?a.formatEntityState(e):n(String(l),`component.${s}.state._.`),h=a.selectedLanguage||a.language,u="ui.card.climate.",p=Object.entries(a.resources?.[h]??{}).reduce((t,[e,i])=>(String(e).startsWith(u)&&(t[String(e).replace(u,"")]=i),t),{});return si.filters.define("formatNumber",(t,e={decimals:o.decimals})=>String(Ke(t,{...e,locale:a.locale}))),si.filters.define("relativetime",t=>`<ha-relative-time datetime="${li(t)}"></ha-relative-time>`),si.filters.define("translate",(t,i="")=>!i&&"function"==typeof a.formatEntityAttributeValue&&"string"==typeof t&&t in c?a.formatEntityAttributeValue(e,t):n(t,i||"climate"!==s&&"humidifier"!==s?i:`state_attributes.${s}.${t}`)),si.render(t,{...di(c),state:{raw:di(l),text:di(d)},state_attr:(t,e)=>di(a.states?.[t]?.attributes?.[e]),ui:p,v:r},{useWith:!0})}si.defaultConfig.autoEscape=!1,si.filters.define("icon",t=>`<ha-icon icon="${li(t)}"></ha-icon>`),si.filters.define("join",(t,e=", ")=>t.join(e)),si.filters.define("css",(t,e)=>`<span style="${li(Object.entries(e).reduce((t,[e,i])=>{const a=String(e??"").replace(/[^-a-zA-Z0-9_]/g,"");return a?`${t}${a}:${function(t){return String(t??"").replace(/url\s*\([^)]*\)/gi,"").replace(/expression\s*\([^)]*\)/gi,"").replace(/(?:javascript|data|vbscript)\s*:/gi,"").replace(/[<>"'`;{}]/g,"")}(i)};`:t},""))}">${ci(t)}</span>`),si.filters.define("debug",t=>{try{return JSON.stringify(t)}catch{return`Not able to read valid JSON object from: ${t}`}});const ui="simple-thermostat-timer-remaining";function pi(t){return String(t).padStart(2,"0")}class gi extends lt{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.syncTicker()}disconnectedCallback(){this.clearTicker(),super.disconnectedCallback()}updated(){this.syncTicker()}clearTicker(){this.tick&&(window.clearInterval(this.tick),this.tick=void 0)}syncTicker(){const t="active"===this.stateObj?.state,e=this.stateObj?.attributes?.finishes_at,i=e?Date.parse(e):NaN,a=!Number.isNaN(i)&&i>Date.now();t&&a&&!this.tick?this.tick=window.setInterval(()=>{i<=Date.now()&&this.clearTicker(),this.requestUpdate()},1e3):t&&a||!this.tick||this.clearTicker()}getValue(){const t=this.stateObj;if(!t)return"";if("active"===t.state&&t.attributes?.finishes_at){const e=Date.parse(t.attributes.finishes_at);if(!Number.isNaN(e))return function(t){const e=Math.max(0,Math.ceil(t)),i=Math.floor(e/3600),a=Math.floor(e%3600/60),o=e%60;return i>0?`${i}:${pi(a)}:${pi(o)}`:`${a}:${pi(o)}`}((e-Date.now())/1e3)}return"paused"===t.state&&t.attributes?.remaining?t.attributes.remaining:"function"==typeof this.hass?.formatEntityState?this.hass.formatEntityState(t):t.state}render(){return W`${this.getValue()}`}}i([pt({attribute:!1})],gi.prototype,"stateObj",void 0),i([pt({attribute:!1})],gi.prototype,"hass",void 0),customElements.get(ui)||customElements.define(ui,gi);class mi extends oe{constructor(t){if(super(t),this.it=q,t.type!==ie)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this._t=void 0,this.it=t;if(t===G)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}mi.directiveName="unsafeHTML",mi.resultType=1;const fi=ae(mi);class vi extends lt{constructor(){super(...arguments),this.markup=""}createRenderRoot(){return this}render(){return fi(this.markup)}updated(){this.querySelectorAll("ha-relative-time").forEach(t=>{const e=t;e.datetime=t.getAttribute("datetime")??void 0,e.hass=this.hass})}}function yi(t,e){return t.includes("<ha-relative-time")?W`<simple-thermostat-template-content
        style="display: contents"
        .markup=${t}
        .hass=${e}
      ></simple-thermostat-template-content>`:fi(t)}i([pt({attribute:!1})],vi.prototype,"markup",void 0),i([pt({attribute:!1})],vi.prototype,"hass",void 0),customElements.get("simple-thermostat-template-content")||customElements.define("simple-thermostat-template-content",vi);const _i=["automation","fan","humidifier","input_boolean","light","switch"],bi=["button","input_button","script","scene"],wi=["row","auto","button","toggle","chip"];function xi(t,e,i){if(!_e(t.states?.[e]))return;const a="turn_"+(i?"on":"off");"function"==typeof t.performAction?t.performAction({action:`homeassistant.${a}`,data:{entity_id:e}}):t.callService("homeassistant",a,{entity_id:e})}function $i(t){return String(t??"").replace(/[^a-z0-9_-]/gi,"")}function Si(t){return!!t&&"object"==typeof t&&"string"==typeof t.entity_id}function Ai({hide:t=!1,hass:e,state:i,details:a,localize:o,openEntityPopover:r}){if(t||void 0===i)return;const{type:n,heading:s,icon:c,unit:l,decimals:d,tooltip:h,entity:u,template:p,attribute:g,variables:m,config:f,separator:v=!0,display:y}=a,_=function({icon:t,state:e,attribute:i,hass:a,config:o,variables:r,localize:n}){return"string"==typeof t&&t.includes("{{")&&"object"==typeof e&&null!==e?hi({template:t,stateObj:e,attribute:i,hass:a,config:o,variables:r,localize:n}).trim():t}({icon:c,state:i,attribute:g,hass:e,config:f,variables:m,localize:o}),b=function({heading:t,state:e,attribute:i,hass:a,config:o,variables:r,localize:n}){if("string"==typeof t&&t.includes("{{")&&"object"==typeof e&&null!==e)return hi({template:t,stateObj:e,attribute:i,hass:a,config:o,variables:r,localize:n}).trim()}({heading:s,state:i,attribute:g,hass:e,config:f,variables:m,localize:o}),w=Si(i),x=w?i.entity_id:u,$=x&&"function"==typeof r,S=h||(w?i?.attributes?.friendly_name||i?.entity_id:u?e.states?.[u]?.attributes?.friendly_name||u:void 0);let A,k="",E="",C=!1,z=!1;const T=function(t,e,i,a){const{template:o,attribute:r,decimals:n,unit:s,type:c,config:l,variables:d}=e,h=Si(t);if(o&&h)return yi(ai(hi({template:o,stateObj:t,attribute:r,hass:i,config:l,variables:d,localize:a}),s||!1),i);const u=h?r?t.attributes?.[r]:t.state:t;if("relativetime"===c)return W`<ha-relative-time
      .datetime=${u}
      .hass=${i}
    ></ha-relative-time>`;if(h&&!r&&t.entity_id.startsWith("timer."))return W`<simple-thermostat-timer-remaining
      .stateObj=${t}
      .hass=${i}
    ></simple-thermostat-timer-remaining>`;if(null==u)return l?.fallback??"N/A";if("object"==typeof u)return JSON.stringify(u);let p=u;if("number"==typeof n)p=Ke(u,{decimals:n,locale:i.locale,fallback:l?.fallback});else if(h){const e=t.entity_id.split(".")[0];p=r?"function"==typeof i.formatEntityAttributeValue?i.formatEntityAttributeValue(t,r):u:"function"==typeof i.formatEntityState?i.formatEntityState(t):a?a(String(u),`component.${e}.state.${t.attributes?.device_class??"_"}.`):u}const g=h&&!r?t.attributes?.unit_of_measurement:"",m=!h||r||"humidity"!==t.attributes?.device_class&&!t.entity_id.includes("humidity")&&"mdi:water-percent"!==e.icon?"":"%";return ai(p,s||g||m||!1,p)}(i,a,e,o);if(w){const[t]=i.entity_id.split(".");k=t,E=i.state,C=_i.includes(t);const a=function(t,e){return"string"==typeof t&&wi.includes(t)?"auto"!==t?t:_i.includes(e)?"toggle":bi.includes(e)?"button":"chip":"row"}(y,t),o=[C&&"toggle-entity",k&&`domain-${$i(k)}`,E&&`state-${$i(E)}`,"row"!==a&&`display-${a}`,C&&ti(Qe({icon:_||i.attributes?.icon,label:s||i.attributes?.friendly_name,entity:i,hass:e}))].filter(Boolean).join(" ");if("row"!==a){z=!0;const n=C||bi.includes(t),c="on"===i.state,l=void 0!==b?yi(b,e):"string"==typeof s?s:i.attributes?.friendly_name||i.entity_id,d=_||i.attributes?.icon||(C?"mdi:toggle-switch":bi.includes(t)?"mdi:gesture-tap-button":void 0);A=W`
        <button
          class="entity-action ${o} ${c?"active":""}"
          type="button"
          ?disabled=${n&&!_e(i)}
          title=${S}
          aria-pressed=${C?String(c):q}
          @click=${()=>n?function(t,e,i){if(!_e(t.states?.[e]))return;if(_i.includes(i))return void xi(t,e,"on"!==t.states?.[e]?.state);const a="button"===i||"input_button"===i?"press":"turn_on";"function"==typeof t.performAction?t.performAction({action:`${i}.${a}`,data:{entity_id:e}}):t.callService(i,a,{entity_id:e})}(e,i.entity_id,t):$?r(i.entity_id):void 0}
        >
          ${d?W`<ha-icon .icon=${d}></ha-icon>`:""}
          <span class="entity-action__label">${l}</span>
          ${"chip"===a||"toggle"===a?W`<span class="entity-action__state">${T}</span>`:""}
        </button>
      `}else"timer"===t||!C||g||p||"relativetime"===n?A=W`
        <div
          class="entity-value ${$?"clickable":""}"
          title=${S}
          @click="${$?()=>r(i.entity_id):null}"
        >
          ${T}
        </div>
      `:C&&(A=W`
        <div class="entity-value ${o}">
          <ha-switch
            .checked=${"on"===i.state}
            .disabled=${!_e(i)}
            @change=${t=>xi(e,i.entity_id,t.target.checked)}
          ></ha-switch>
        </div>
      `)}else A=W`<div
      class="entity-value ${$?"clickable":""}"
      title=${S||q}
      @click=${$?()=>r(x):null}
    >
      ${T}
    </div>`;if(z)return A;if(!1===s)return A;const R=s||S,O=["entity-heading",$&&"clickable",C&&"toggle-entity",k&&`domain-${$i(k)}`,E&&`state-${$i(E)}`,C&&ti(Qe({icon:_||i?.attributes?.icon,label:"string"==typeof s?s:i?.attributes?.friendly_name,entity:i,hass:e}))].filter(Boolean).join(" "),N=_?W`
        <ha-icon
          icon="${_}"
          title=${R}
          @click=${$?()=>r(x):null}
        ></ha-icon>
      `:"string"==typeof b?yi(b,e):` ${s}${!1===v?"":":"} `;return[W`<div
    class=${O}
    title=${_?R:q}
    @click=${$?()=>r(x):null}
  >
    ${N}
  </div>`,A]}function ki({_hide:t,entity:e,unit:i,hass:a,entities:o,config:r,localize:n,openEntityPopover:s,adapter:c}){const l=r.current_value_entity,d=l?a.states[l]:e,h=l?d?.state:c.getCurrentValue(e.attributes),u=l?d?.attributes?.unit_of_measurement??i:c.getCurrentValueUnit?.(e.attributes,a.config)??i,p=r?.layout?.entities?.labels??!0,g=!1!==r?.layout?.entities?.separator,m=r?.state_labels?.[e.state]??xe(e,a,n),f=(!0===r?.hide_current_value_when_off||!0===r?.hide?.current_value_when_off||!0===r?.hide?.temperature_when_off)&&e.state===De.OFF,v=[Ai({hide:t.temperature||f||null==h,state:ai(Ke(h,{...r,locale:a.locale}),u),hass:a,openEntityPopover:s,details:{heading:!!p&&(r?.label?.temperature??n("ui.card.climate.currently")),tooltip:d?.attributes?.friendly_name??l,entity:l??r.entity,separator:g}}),Ai({hide:t.state,state:m,hass:a,openEntityPopover:s,details:{heading:!!p&&(r?.label?.state??n("ui.panel.lovelace.editor.card.generic.state")),entity:r.entity,separator:g}}),...(o??[]).map(({name:t,state:i,show:o,display:c,_hide_when_off:l,hide_when_off:d,...h})=>Ai({hide:!1===o||(!0===l||!0===d)&&e.state===De.OFF,state:i,hass:a,localize:n,openEntityPopover:s,details:{...h,heading:p&&t,tooltip:t,config:r,variables:r.variables,separator:g,display:c??r?.layout?.entities?.display}}))||null].filter(t=>null!==t);return function(t,e){const{type:i="table",labels:a=!0,alignment:o}=t?.layout?.entities??{},r=[a?"with-labels":"without-labels","list"===i?"as-list":"as-table","left"===o?"align-left":"",1===e.filter(t=>null!=t).length?"single-row":""];return W` <div class="entities ${r.join(" ")}">${e}</div> `}(r,v)}const Ei=new Set(["heat_cool","fan_only"]);function Ci(t,e,i){if(!e||!i)return{layout:"inline",lines:e?[e]:[]};const a=e.trim();if(!a)return{layout:"inline",lines:[]};if("heat_cool"===t){const t=a.split(/\s*\/\s*/).filter(Boolean);if(2===t.length&&t.every(t=>t.length>0&&t.length<=12))return{layout:"stacked",lines:t}}if("fan_only"===t){const t=a.split(/\s+/).filter(Boolean);if(2===t.length&&t.every(t=>t.length>0&&t.length<=10))return{layout:"stacked",lines:t}}return Ei.has(t)&&a.length>10?{layout:"column",lines:[a]}:{layout:"inline",lines:[a]}}const zi={"st:fan-speed-4":{path:"M16 15V21H19V23H21V15H19V19H18V15H16Z"},"st:fan-speed-5":{path:"M16 15H21V17H18V18H19C20.11 18 21 18.89 21 20V21C21 22.11 20.11 23 19 23H16V21H19V20H16V15Z"}};function Ti(t){return t?W` <ha-icon class="mode-icon" .icon=${t}></ha-icon> `:null}function Ri({state:t,entity:e,hass:i,mode:a,adapter:o,modeOptions:r,localize:n,setMode:s}){const{type:c,hide_when_off:l,mode:d="none",list:h,name:u,heading:p,icons:g}=a;if(0===h.length||l&&t===De.OFF)return null;const m="hvac"===c?null:o.getModePayloadKey(c),f=!_e(a.entity?i?.states?.[a.entity]:e);let v=m?`state_attributes.${o.getLocalizationDomain()}.${m}.`:"";"hvac"===c?v="component.climate.state._.":"vane_horizontal"===c||"vane_vertical"===c?v="":"direction"!==c&&"oscillating"!==c&&"mode"!==c||(v="");const y=(t,e)=>{const i=n(t);return i&&i!==t?i:e},_="hvac"==c?"operation":`${c}_mode`;let b;b="vane_horizontal"===c?"Vane Horizontal":"vane_vertical"===c?"Vane Vertical":"swing_horizontal"===c?y("ui.card.climate.swing_horizontal_mode","Swing Horizontal"):"swing_vertical"===c?y("ui.card.climate.swing_vertical_mode","Swing Vertical"):"direction"===c?"Direction":"oscillating"===c?"Oscillating":"mode"===c?"Mode":"preset"===c?!0===p&&y(`ui.card.${o.getLocalizationDomain()}.${_}`,"Preset"):"state"===c?!0===p&&"State":y(`ui.card.${o.getLocalizationDomain()}.${_}`,"hvac"===c?"Operation":"Mode");const w=!1!==u&&(u||b),x="fan"===c||"preset"===c&&"fan"===o.getLocalizationDomain()?"Fan speed":"swing"===c?"Swing mode":"swing_horizontal"===c?y("ui.card.climate.swing_horizontal_mode","Horizontal swing"):"swing_vertical"===c?y("ui.card.climate.swing_vertical_mode","Vertical swing"):"vane_horizontal"===c?"Horizontal vane":"vane_vertical"===c?"Vertical vane":"",$=(!0===r?.headings||!0===p)&&!1!==w,S="preset"===c&&"fan"===o.getLocalizationDomain(),A=("hvac"===c||"state"===c||"fan"===c)&&h.length<=4,k="preset"===c&&h.length<=4||["swing","swing_horizontal","swing_vertical","vane_horizontal","vane_vertical"].includes(c),E=h.length>4||"hvac"===c&&h.length>4||"fan"===c&&h.length>4;return W`
    <div
      class="modes ${c} ${S?"fan-preset":""} ${$?"heading":""} ${k?"compact":""} ${E?"dense":""} ${A?"sparse":""}"
      role="group"
      aria-label=${w||c}
    >
      ${$?W` <div class="mode-title">${w}</div> `:""}
      ${h.map(({value:a,icon:o,iconConfigured:l,name:h,nameConfigured:u,hide_when_off:p})=>{if(!0===p&&t===De.OFF)return q;const y=(t=>String(t).replace(/[^a-z0-9_-]/gi,""))(a),_=((t,a,o)=>{if(!1===t)return null;if(!1===r?.names)return null;if(!0===o||void 0===o&&t!==a)return t;if(("hvac"===c||"state"===c)&&"function"==typeof i?.formatEntityState)return i.formatEntityState({...e,state:a});if(m&&e&&"function"==typeof i?.formatEntityAttributeValue)return i.formatEntityAttributeValue(e,m,a);const s=v?n(a,v):a;return s&&s!==a?s:t})(h,a,u),b=Ci(String(a),_,A),w="stacked"===b.layout?"label-stacked":"column"===b.layout?"label-column":"",$=_?q:x||q;return W`
            <div
              class="mode-item ${y} ${w} ${a===d?"active":""}"
              role="button"
              tabindex=${f?-1:0}
              aria-disabled=${String(f)}
              aria-pressed=${a===d?"true":"false"}
              aria-label=${h||a}
              title=${$}
              @click=${()=>{f||s(c,a)}}
              @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),f||s(c,a))}}
            >
              ${((t,e=!1)=>t?!1===r?.icons||!1===g||["swing","swing_horizontal","swing_vertical","vane_horizontal","vane_vertical"].includes(c)&&!0!==g&&!e?null:Ti(t):null)(o,l)}
              ${((t,e)=>{if(!e)return null;const i=Ci(t,e,A);return"stacked"===i.layout?W`<span class="mode-label">
        ${i.lines.map(t=>W`<span class="mode-label-line">${t}</span>`)}
      </span>`:W`<span class="mode-label"
      >${i.lines[0]??e}</span
    >`})(String(a),_)}
            </div>
          `})}
    </div>
  `}window.customIconsets=window.customIconsets||{},window.customIconsets.st||(window.customIconsets.st=async t=>{const e=zi[`st:${t}`];return e?{path:`M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13${e.path}`}:{path:""}});const Oi=t=>String(t).replace(/[^a-z0-9_-]/gi,"");function Ni({toggles:t,mainState:e,toggleFooterEntity:i,openEntityPopover:a}){const o=t.filter(t=>!(!0===t.hide_when_off&&e===De.OFF));return o.length?W`
    <section class="footer-controls controls">
      <div
        class="modes footer compact ${o.length>4?"dense":""}"
        role="group"
        aria-label="Footer controls"
      >
        ${o.map(t=>{const e=t.state.entity_id,o=String(t.state.state??""),r="on"===o,n=!_e(t.state),s=!1!==t.name&&(t.name||t.state.attributes?.friendly_name||e),c=t.icon??t.state.attributes?.icon,l=e.split(".")[0];return W`
            <div
              class="mode-item footer-toggle ${Oi(o)} domain-${Oi(l)} ${r?"active":""}"
              role="button"
              tabindex=${n?-1:0}
              aria-disabled=${String(n)}
              aria-pressed=${r?"true":"false"}
              aria-label=${s||e}
              title=${s||e}
              @click=${()=>{n||i(e,!r)}}
              @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),n||i(e,!r))}}
              @contextmenu=${t=>{t.preventDefault(),a(e)}}
            >
              ${c?Ti(c):q}
              ${s?W`<span class="mode-label">${s}</span>`:q}
            </div>
          `})}
      </div>
    </section>
  `:q}const Mi={target_temp_low:{field:"target_temp_high",caps:"max"},target_temp_high:{field:"target_temp_low",caps:"min"}},ji=Object.values(yt),Fi="hass:chevron-up",Pi="hass:chevron-down",Ii="mdi:plus",Hi="mdi:minus",Vi={temperature:!1,state:!1},Li=[yt.PRESET,yt.FAN,yt.HVAC,yt.SWING,yt.SWING_HORIZONTAL,yt.SWING_VERTICAL,yt.VANE_HORIZONTAL,yt.VANE_VERTICAL,yt.DIRECTION,yt.OSCILLATING,yt.STATE],Di=["entity","hide_when_off","hide_off_when_off"];function Ui(t,e,i){const a=Wi(String(e),i);if(Gi(a))return!1!==a.include;const o=Object.keys(i).some(t=>!t.startsWith("_")),r=t===yt.PRESET;return a??!(r&&o)}function Bi(t){return t.toLowerCase().replace(/\s+/g,"_")}function Wi(t,e){const i=Bi(t),a=e[t];if(void 0!==a)return a;if(void 0!==e[i])return e[i];const o=Object.entries(e).find(([t])=>!t.startsWith("_")&&!Di.includes(t)&&Bi(t)===i);return o?.[1]}function Gi(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)}function qi(t,e){const i=Array.isArray(e._order)?e._order.map(String):Object.keys(e).filter(t=>!t.startsWith("_")&&!Di.includes(t));if(0===i.length)return t;const a=new Map;t.forEach(t=>{a.set(Bi(String(t)),t)});const o=new Set,r=[];return i.forEach(t=>{const e=Bi(t);a.has(e)&&!o.has(e)&&(r.push(a.get(e)),o.add(e))}),t.forEach(t=>{const e=Bi(String(t));o.has(e)||(r.push(t),o.add(e))}),r}function Ki(t,e,i,a={}){let o=e[i.getModeAttribute(t)];return t===yt.STATE?o=["off","on"]:t===yt.DIRECTION&&e.direction?o=["forward","reverse"]:t===yt.OSCILLATING&&"boolean"==typeof e.oscillating&&(o=[!1,!0]),Array.isArray(o)?qi(o,a).filter(e=>Ui(t,e,a)).map(e=>{const i=String(e),r=Wi(i,a),n=Gi(r)?r:{},{name:s,...c}=n,l=!0===n.hide_when_off||!0===a.hide_off_when_off&&"off"===Bi(i),d=!1!==s&&("string"==typeof s?s:ze(i));return{...c,hide_when_off:l||void 0,icon:n.icon??(t===yt.FAN?qe(i,o):void 0)??Ce(i),iconConfigured:void 0!==n.icon,nameConfigured:void 0!==s,value:i,name:d}}):[]}function Zi(t){return"string"==typeof t?.entity_id&&t.entity_id.startsWith("select.")&&Array.isArray(t.attributes?.options)}function Ji(t,e={}){return qi(t.attributes.options,e).filter(t=>Ui("select",t,e)).map(t=>{const i=String(t),a=Wi(i,e),o=Gi(a)?a:{},{name:r,...n}=o,s=!0===o.hide_when_off||!0===e.hide_off_when_off&&"off"===Bi(i),c=!1!==r&&("string"==typeof r?r:ze(i));return{...n,hide_when_off:s||void 0,icon:o.icon??Ce(i),iconConfigured:void 0!==o.icon,nameConfigured:void 0!==r,value:i,name:c}})}function Yi(t,e,i,a){return ji.includes(t)&&(t===yt.STATE?"fan"===e||"humidifier"===e:void 0!==i[a.getModeAttribute(t)])}function Xi(t,e,i,a){return t.filter(t=>Yi(t,e,i,a)).map(t=>({type:t,hide_when_off:!1,list:Ki(t,i,a)}))}class Qi extends lt{constructor(){super(...arguments),this.modes=[],this._hass={},this.entities=[],this.footer=[],this.showEntities=!0,this.name="",this.stepSize=.5,this._values={},this._updatingValues=!1,this._hide=Vi,this._updatingValuesTimeout=null,this._holdTimer=null,this._holdFired=!1,this._clickCount=0,this._clickTimer=null,this._setpointUpdateTimer=null,this._pendingSetpointUpdate=null,this._missingEntityTimer=null,this._stepRepeatDelayTimer=null,this._stepRepeatIntervalTimer=null,this._stepRepeatFired=!1,this._setpointDebounce=500,this.localize=(t,e="")=>{const i=`${e}${t}`;return this._hass.localize?.(i)||t},this.toggleEntityChanged=(t,e)=>{if(!this.header||!e)return;if(!_e(this._hass?.states?.[e]))return;const i=t.target;this._callAction("homeassistant.turn_"+(i.checked?"on":"off"),{entity_id:e})},this.toggleFooterEntity=(t,e)=>{_e(this._hass?.states?.[t])&&(this._callAction("homeassistant.turn_"+(e?"on":"off"),{entity_id:t}),bt(this,"haptic","light"))},this._stopSetpointRepeat=()=>{this._stepRepeatDelayTimer&&(clearTimeout(this._stepRepeatDelayTimer),this._stepRepeatDelayTimer=null),this._stepRepeatIntervalTimer&&(clearInterval(this._stepRepeatIntervalTimer),this._stepRepeatIntervalTimer=null)},this.setMode=(t,e)=>{if(t&&e){const i=kt(this.config.entity),a=this.modes.find(e=>e.type===t);if(a?.entity){const t=this._hass.states?.[a.entity];if(!Zi(t)||["unknown","unavailable"].includes(String(t.state))||!t.attributes.options.includes(e))return;return this._callAction("select.select_option",{entity_id:a.entity,option:e}),void bt(this,"haptic","light")}if(!_e(this._hass?.states?.[this.config.entity]))return;if(t===yt.STATE)return this._callAction(`${i.getLocalizationDomain()}.turn_${e}`,{entity_id:this.config.entity}),void bt(this,"haptic","light");const o=i.transformModePayloadValue?.(t,e)??e;this._callAction(`${i.getLocalizationDomain()}.${i.getModeService(t)}`,{entity_id:this.config.entity,[i.getModePayloadKey(t)]:o}),bt(this,"haptic","light")}else bt(this,"haptic","failure")},this.openEntityPopover=(t=null)=>{bt(this,"hass-more-info",{entityId:t||this.config.entity})},this._onActionPointerDown=t=>{0!==t.button&&"mouse"===t.pointerType||(this._holdFired=!1,this._holdTimer&&clearTimeout(this._holdTimer),this._holdTimer=setTimeout(()=>{this._holdFired=!0,this._holdTimer=null,this._dispatchAction("hold")},Qi.HOLD_MS))},this._onActionPointerUp=()=>{this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null)},this._onActionClick=t=>{t.preventDefault(),this._holdFired?this._holdFired=!1:(this._clickCount+=1,1===this._clickCount?(this._clickTimer&&clearTimeout(this._clickTimer),this._clickTimer=setTimeout(()=>{this._clickCount=0,this._clickTimer=null,this._dispatchSetpointTap()},Qi.DOUBLE_TAP_MS)):(this._clickTimer&&clearTimeout(this._clickTimer),this._clickTimer=null,this._clickCount=0,this._dispatchAction("double_tap")))},this._onSetpointKeyDown=t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._dispatchSetpointTap())}}static get styles(){return _t}_sendSetpointValues(t){if(!_e(this._hass?.states?.[t.entity]))return;const{domain:e,service:i,data:a={}}=t.service;this._callAction(`${e}.${i}`,{entity_id:t.entity,...a,...t.values})}_flushPendingSetpointValues(){this._setpointUpdateTimer&&(clearTimeout(this._setpointUpdateTimer),this._setpointUpdateTimer=null);const t=this._pendingSetpointUpdate;this._pendingSetpointUpdate=null,t&&this._sendSetpointValues(t)}_scheduleSetpointValues(t){const e=this._setpointDebounce;e<=0?this._sendSetpointValues({entity:this.config.entity,service:this.service,values:{...t}}):(this._pendingSetpointUpdate={entity:this.config.entity,service:this.service,values:{...t}},this._setpointUpdateTimer&&clearTimeout(this._setpointUpdateTimer),this._setpointUpdateTimer=setTimeout(()=>{const t=this._pendingSetpointUpdate;this._setpointUpdateTimer=null,this._pendingSetpointUpdate=null,t&&this._sendSetpointValues(t)},e))}_getSetpointDebounce(t){const e=Number(t?.setpoint_debounce_ms??500);return Number.isFinite(e)&&e>=0?e:500}_callAction(t,e){let i;if("function"==typeof this._hass.performAction)i=this._hass.performAction({action:t,data:e});else if("function"==typeof this._hass.callService){const[a,o]=t.split(".");i=this._hass.callService(a,o,e)}i&&"function"==typeof i.catch&&i.catch(e=>{console.error(`simple-thermostat: ${t} failed`,e)})}static getConfigElement(){return window.document.createElement(`${t}-editor`)}static getStubConfig(t){return{entity:Object.keys(t.states??{}).find(t=>t.startsWith("climate.")||t.startsWith("fan.")||t.startsWith("humidifier."))??""}}setConfig(t){if(!t?.entity||"string"!=typeof t.entity)throw new Error("Simple Thermostat requires an entity");this._flushPendingSetpointValues();const e=this.config?.entity;this._clearMissingEntityTimer(),this.config=xt({decimals:1,...t});const i=this._getSetpointDebounce(this.config);i!==this._setpointDebounce&&(this._setpointDebounce=i),this.entities=[],this.footer=[],this.showEntities=!0,e&&e!==this.config.entity&&this._clearOptimisticSetpointState(),this.toggleAttribute("embedded",!0===this.config.embedded),this._hass?.states?.[this.config.entity]?this.updateFromHass(this._hass):this._hass?.states&&(this.entity=void 0)}_clearMissingEntityTimer(){this._missingEntityTimer&&(clearTimeout(this._missingEntityTimer),this._missingEntityTimer=null)}_scheduleMissingEntity(){this._missingEntityTimer||(this._missingEntityTimer=setTimeout(()=>{this._missingEntityTimer=null,this.entity=void 0},5e3))}set hass(t){if(t?.states&&(this._hass=t),!this.config?.entity)return;if(!t?.states)return;t.states[this.config.entity]?(this._clearMissingEntityTimer(),this.updateFromHass(t)):this._scheduleMissingEntity()}disconnectedCallback(){this._clearOptimisticSetpointState(),this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._clickTimer&&(clearTimeout(this._clickTimer),this._clickTimer=null),this._clearMissingEntityTimer(),this._stopSetpointRepeat(),this._flushPendingSetpointValues(),super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this.config?.entity&&this._hass?.states?.[this.config.entity]&&this.updateFromHass(this._hass)}updateFromHass(t){const e=t.states[this.config.entity];this.entity!==e&&(this.entity=e);const i=kt(this.config.entity);this.header=Te(this.config.header,e,t,!1!==this.config.enhanced_visuals),this.service=function(t,e=St){return t||e.getSetpointService()}(this.config?.service??!1,i);const a=e.attributes;let o=function(t,e,i=St,a){return!1===t?{}:t?Object.entries(t).reduce((t,[i,o])=>{if(o?.hide)return t;const r=Array.isArray(o?.hide_when)?o.hide_when:o?.hide_when?[o.hide_when]:[];return a&&r.includes(a)||(t[i]=e?.[i]),t},{}):i.getSetpoints(e)}(this.config?.setpoints??null,a,i,e.state);this._updatingValues&&function(t,e){const i=Object.keys(t);return i.length===Object.keys(e).length&&!i.some(i=>t?.[i]!==e?.[i])}(o,this._values)?(this._updatingValues=!1,this._updatingValuesTimeout&&(clearTimeout(this._updatingValuesTimeout),this._updatingValuesTimeout=null)):this._updatingValues||(this._values=o);const r=this.config.entity.split(".")[0],n=function(t){return t.some(({type:t})=>t===yt.STATE)?t.map(t=>t.type&&t.type!==yt.STATE?{...t,list:t.list?.filter(({value:t})=>"off"!==t)??[]}:t):t}(function(t,e,i,a,o){if(!1===t.control)return[];if(Array.isArray(t.control))return Xi(t.control,e,i,a);if(t.control&&"object"==typeof t.control){const r=t.control,n=Object.entries(t.control).filter(([t])=>!t.startsWith("_")),s=Array.isArray(r._order)?r._order.map(String):void 0,c=(s?[...s.filter(t=>n.some(([e])=>e===t)),...n.map(([t])=>t).filter(t=>!s.includes(t))]:n.map(([t])=>t)).map(t=>[t,r[t]]);if(c.length>0)return c.filter(([,t])=>!1!==t).filter(([t,o])=>!!(!0===o||!1===o?void 0:o.entity)||Yi(t,e,i,a)).map(([t,e])=>{const{_name:r,_hide_when_off:n,hide_when_off:s,hide_off_when_off:c,_icons:l,_heading:d,entity:h,...u}=!0===e?{}:e,p=h?o?.states?.[h]:void 0,g=Zi(p),m={...u,...!0===c?{hide_off_when_off:c}:{}};return{type:t,entity:h,hide_when_off:s??n,icons:l,heading:d,name:r,preserve_option_order:Object.keys(u).length>0,list:h?g&&!["unknown","unavailable"].includes(String(p.state))?Ji(p,m):[]:Ki(t,i,a,m)}})}return Xi(a.getDefaultControl(),e,i,a)}(this.config,r,a,i,t)),s=(c=this.config.control,Array.isArray(c)||c&&"object"==typeof c&&(Array.isArray(c._order)||Object.keys(c).some(t=>!t.startsWith("_")))?n:function(t,e){if("fan"!==e&&"climate"!==e)return t;const i=t=>{const e=Li.indexOf(t);return-1===e?Li.length:e};return[...t].sort((t,e)=>i(t.type)-i(e.type))}(n,r));var c;this.modes=s.map(o=>{const r=o.preserve_option_order?o.list:o.type===yt.HVAC?function(t){const e=Object.values(De),i=[],a=[];return t.forEach(t=>{const o=e.indexOf(t.value);o>=0?i[o]=t:a.push(t)}),[...i.filter(Boolean),...a]}(o.list):o.type===yt.FAN?function(t){const e=[],i=[];return t.forEach(t=>{const a=Ue.indexOf(t.value.toLowerCase());a>=0?e[a]=t:i.push(t)}),[...e.filter(Boolean),...i]}(o.list):o.list,n=o.entity&&t.states?.[o.entity]?t.states[o.entity].state:o.type===yt.HVAC||o.type===yt.STATE?e.state:a[i.getModePayloadKey(o.type)];return{...o,list:r,mode:n}});const{step:l}=i.getRange(a);this.stepSize=Number(this.config.step_size??l??.5),this._hide={...Vi,...this.config.hide??{}};const d=this.config.entities??[];!1===d?(this.showEntities=!1,this.entities=[]):d?(this.showEntities=!0,this.entities=d.map(({name:e,entity:i,attribute:a,template:o,unit:r="",...n})=>{let s;const c=[e];return i?(s=t.states[i],c.push(s?.attributes?.friendly_name)):a&&a in(this.entity.attributes??{})&&(s=this.entity,c.push(a)),c.push(i),{...n,name:c.find(t=>!!t),state:s,entity:i,attribute:a,template:o,unit:r}})):(this.showEntities=!0,this.entities=[]),this.footer=function(t){return Array.isArray(t.footer)?t.footer:[]}(this.config).map(({entity:e,name:i,icon:a,hide_when_off:o})=>{const r=t.states?.[e];return r?{entity:e,name:i,icon:a,hide_when_off:o,state:r}:null}).filter(t=>!!t)}render({_hide:t,_values:e,_updatingValues:i,config:a,entity:o}=this){if(!a)return W`<ha-card class="loading"></ha-card>`;const r=[];if(this.modes.filter(t=>t.entity&&0===t.list.length).forEach(t=>{r.push(W`<ha-alert alert-type="warning"
            >Control entity unavailable or without options:
            ${t.entity}</ha-alert
          >`)}),this.stepSize<1&&0===this.config.decimals&&r.push(W`
        <ha-alert alert-type="warning">
          Decimals is set to 0 and step_size is lower than 1. Decrementing a
          setpoint will likely not work. Change one of the settings to clear
          this warning.
        </ha-alert>
      `),!o&&!this._hass?.states)return W`<ha-card
        class="loading ${!1===a.enhanced_visuals?"standard-visuals":""}"
      ></ha-card>`;if(!o)return W`
        <ha-card
          class="missing-entity ${!1===a.enhanced_visuals?"standard-visuals":""}"
        >
          <ha-alert alert-type="error">
            Entity not available: ${a.entity}
          </ha-alert>
        </ha-card>
      `;const n=kt(a.entity),s=we(o),{min:c,max:l}=n.getRange(o.attributes),d=this.getUnit(),h=a.entity.split(".")[0],u=this.areSetpointsHidden()?0:Object.keys(e).length,p=this.config?.layout?.step,g=!p&&this.showEntities&&u>1,m=p??(!1===this.config.enhanced_visuals||g?"column":"row"),f="row"===m,v=["unavailable","unknown"].includes(o.state),y=t=>"string"==typeof t?t.replace(/[^a-z0-9_-]/gi,""):"",_=[!this.header&&"no-header",`domain-${y(h)}`,`state-${y(o.state)}`,!1===this.config.enhanced_visuals&&"standard-visuals",!0===this.config.embedded&&"embedded",y(s),v&&y(o.state)].filter(t=>!!t),b=["body",this.showEntities&&"has-entities",`step-${m}`,`setpoint-count-${u}`].filter(t=>!!t),w=!0===a.embedded,x=function(t,e){if("fan"!==t)return"";const i=Number(e?.percentage);if(Number.isNaN(i))return"";const a=Math.min(Math.max(i,0),100);return`--st-fan-spin-duration: ${Math.max(.9,3.2-a/100*2.1).toFixed(2)}s;`}(h,o.attributes),$=w?function(t){const e=t?.style,i="string"==typeof e?e:e&&"object"==typeof e?Object.entries(e).flatMap(([t,e])=>"string"!=typeof e?[]:"."===t?[e]:"ha-card"===t?[`ha-card { ${e} }`]:[]).join("\n"):"";return i.includes("{{")||i.includes("{%")?"":i}(a.card_mod):"",S=this.showEntities?ki({_hide:t,unit:d,hass:this._hass,entity:this.entity,entities:this.entities,config:this.config,adapter:n,localize:this.localize,openEntityPopover:this.openEntityPopover}):"",A=w?W`<div class="embedded-header-reserve" aria-hidden="true"></div>`:ei({header:this.header,hass:this._hass,toggleEntityChanged:this.toggleEntityChanged,entity:this.entity,openEntityPopover:this.openEntityPopover});return W`
      <ha-card class="${_.join(" ")}" style=${x}>
        ${$?W`<style>
                ${$}
              </style>`:q}
        ${a.styles?W`<style>
                ${a.styles}
              </style>`:q}
        ${r} ${A}
        <section class="${b.join(" ")}">
          ${S}
          ${u?W`<div class="setpoints">
                  ${this.renderSetpoints({values:e,minValue:c,maxValue:l,unit:d,row:f,stepLayout:m,isOff:o.state===De.OFF,disableSteppers:!_e(o)||!0===this.config.disable_setpoint_change||"climate"===h&&o.state===De.OFF&&!0===this.config.disable_setpoint_change_when_off})}
                </div>`:q}
        </section>

        ${this.modes.length?W`
                <section class="controls">
                  ${this.modes.map(t=>Ri({state:o.state,entity:o,hass:this._hass,mode:t,adapter:n,localize:this.localize,modeOptions:this.config?.layout?.mode??{},setMode:this.setMode}))}
                </section>
              `:q}
        ${Ni({toggles:this.footer,mainState:o.state,toggleFooterEntity:this.toggleFooterEntity,openEntityPopover:this.openEntityPopover})}
      </ha-card>
    `}renderSetpoints({values:t,minValue:e,maxValue:i,unit:a,row:o,stepLayout:r,isOff:n,disableSteppers:s}){return!0===this.config.hide_setpoint||!0===this.config.hide_setpoint_when_off&&n||!0===this.config.hide?.setpoint_when_off&&n?q:Object.entries(t).map(([t,c])=>this.renderSetpointControl({field:t,value:c,minValue:e,maxValue:i,unit:a,row:o,stepLayout:r,isOff:n,disableSteppers:s}))}areSetpointsHidden(){return!0===this.config.hide_setpoint||(!0===this.config.hide_setpoint_when_off||!0===this.config.hide?.setpoint_when_off)&&this.entity?.state===De.OFF}renderSetpointControl(t){const{row:e,stepLayout:i}=t,a=this.renderSetpointStepper(t,"decrease"),o=this.renderSetpointValue(t),r=this.renderSetpointStepper(t,"increase"),n=this.renderSetpointLabel(t);return W`
      <div class="current-wrapper ${i}">
        ${e?W`${a}${o}${r}`:W`${r}${o}${a}`}
        ${n}
      </div>
    `}renderSetpointLabel({field:t}){if(!0===this.config.hide?.setpoint_label)return q;const e=this.config.label?.setpoint,i=e??this._hass.localize?.(`ui.card.${kt(this.config.entity).getLocalizationDomain()}.target`)??this._hass.localize?.("ui.card.climate.target_temperature")??this.localize(t,"state_attributes.climate.");return W`<div class="current--label">${i}</div>`}renderSetpointStepper({field:t,value:e,minValue:i,maxValue:a,row:o,disableSteppers:r},n){const s=this._setpointBounds(t,i,a),c=Number(e),l=!Number.isNaN(c),d="decrease"===n,h=r||(d?null===e||null!==s.min&&l&&c<=s.min:null===e&&null===s.min||null!==e&&null!==s.max&&l&&c>=s.max),u=d?o?Hi:Pi:o?Ii:Fi;return W`
      <button
        type="button"
        ?disabled=${h}
        class="thermostat-trigger ${n}"
        aria-label=${`${d?"Decrease":"Increase"} ${t}`}
        @pointerdown=${e=>this._startSetpointRepeat(e,t,d?-1:1,i,a)}
        @pointerup=${this._stopSetpointRepeat}
        @pointercancel=${this._stopSetpointRepeat}
        @pointerleave=${this._stopSetpointRepeat}
        @click=${()=>{this._stepRepeatFired?this._stepRepeatFired=!1:this._stepSetpoint(t,d?-1:1,i,a)}}
      >
        <ha-icon .icon=${u}></ha-icon>
      </button>
    `}_setpointBounds(t,e,i){const a=Mi[t];if(!a)return{min:e,max:i};const o=Number(this._values[a.field]);return Number.isFinite(o)?"max"===a.caps?{min:e,max:null===i?o:Math.min(i,o)}:{min:null===e?o:Math.max(e,o),max:i}:{min:e,max:i}}_stepSetpoint(t,e,i,a){if(!_e(this._hass?.states?.[this.config.entity]))return!1;const{min:o,max:r}=this._setpointBounds(t,i,a),n=this._values[t];if(null==n)return e>0&&null!==o&&this.setTemperature(0,t,o),!1;const s=Number(n);if(!Number.isFinite(s))return!1;if(e>0&&null!==r&&s>=r)return!1;if(e<0&&null!==o&&s<=o)return!1;const c=s+e*this.stepSize,l=e>0&&null!==r?Math.min(c,r):e<0&&null!==o?Math.max(c,o):c;return this.setTemperature(0,t,l),!0}_startSetpointRepeat(t,e,i,a,o){"mouse"===t.pointerType&&0!==t.button||(this._stepRepeatFired=!1,!0===this.config.setpoint_hold_repeat&&(this._stopSetpointRepeat(),this._stepRepeatDelayTimer=setTimeout(()=>{this._stepRepeatDelayTimer=null,this._stepRepeatFired=this._stepSetpoint(e,i,a,o),this._stepRepeatFired&&(this._stepRepeatIntervalTimer=setInterval(()=>{this._stepSetpoint(e,i,a,o)||this._stopSetpointRepeat()},250))},500)))}_clearOptimisticSetpointState(){this._updatingValues=!1,this._updatingValuesTimeout&&(clearTimeout(this._updatingValuesTimeout),this._updatingValuesTimeout=null)}renderSetpointValue({field:t,value:e,unit:i,isOff:a}){const o=["string","number"].includes(typeof e)&&""!==e&&null!==e,r=!1!==i&&o,n=a&&!o,s=n?"OFF":Ke(e,{...this.config,locale:this._hass.locale}),c=r&&"string"==typeof i?i:"",l="%"===c?"":" ",d=c&&s.endsWith(c)?s.slice(0,-c.length).trimEnd():s,h=c?`${d}${l}${c}`:s;return W`
      <h3
        @pointerdown=${this._onActionPointerDown}
        @pointerup=${this._onActionPointerUp}
        @pointercancel=${this._onActionPointerUp}
        @click=${this._onActionClick}
        @keydown=${this._onSetpointKeyDown}
        role="button"
        tabindex="0"
        aria-label=${`${t}: ${h}`}
        class=${["current--value",n&&"current--off",this._updatingValues&&"updating"].filter(Boolean).join(" ")}
      >
        ${d}${c?W`${l}<span class="current--unit"
                  >${c}</span
                >`:q}
      </h3>
    `}setTemperature(t,e,i){if(!_e(this._hass?.states?.[this.config.entity]))return;this._updatingValues=!0,this._updatingValuesTimeout&&clearTimeout(this._updatingValuesTimeout),this._updatingValuesTimeout=setTimeout(()=>{this._updatingValues=!1,this._updatingValuesTimeout=null,this._hass?.states?.[this.config.entity]&&this.updateFromHass(this._hass)},1e4);const a=i??this._values[e],o=Number(a)+t,{decimals:r}=this.config;this._values={...this._values,[e]:+Ke(o,{decimals:r})},this._scheduleSetpointValues(this._values)}_dispatchSetpointTap(){this.config?.tap_action?this._dispatchAction("tap"):this.openEntityPopover(this.config.entity)}_dispatchAction(t){const e="tap"===t?"tap_action":"hold"===t?"hold_action":"double_tap_action",i=this.config?.[e]??("tap"===t?{action:"more-info"}:{action:"none"});bt(this,"hass-action",{config:this.config,action:i})}getCardSize(){if(!this.config)return 1;const t=!0===this.config.embedded||this.header?1:0,e=this.showEntities&&this.entities?.length?Math.max(1,Math.ceil(this.entities.length/2)):0,i=!0===this.config.hide_setpoint||!0===this.config.hide_setpoint_when_off&&this.entity?.state===De.OFF||!0===this.config.hide?.setpoint_when_off&&this.entity?.state===De.OFF?0:1,a=this.modes?.filter(t=>(!0!==t.hide_when_off||this.entity?.state!==De.OFF)&&(t.list??[]).some(({hide_when_off:t})=>!(!0===t&&this.entity?.state===De.OFF))).length??0,o=this.footer?.some(({hide_when_off:t})=>!(!0===t&&this.entity?.state===De.OFF))?1:0,r=this.stepSize<1&&0===this.config.decimals?1:0;return Math.max(1,t+e+i+a+o+r)}getUnit(){if(["boolean","string"].includes(typeof this.config.unit))return this.config?.unit;const t=this.config.entity.split(".")[0];return"fan"===t||"humidifier"===t?"%":this._hass.config?.unit_system?.temperature??!1}}Qi.HOLD_MS=500,Qi.DOUBLE_TAP_MS=250,i([pt()],Qi.prototype,"config",void 0),i([pt()],Qi.prototype,"header",void 0),i([pt()],Qi.prototype,"service",void 0),i([pt()],Qi.prototype,"modes",void 0),i([pt()],Qi.prototype,"entity",void 0),i([pt()],Qi.prototype,"entities",void 0),i([pt()],Qi.prototype,"footer",void 0),i([pt()],Qi.prototype,"showEntities",void 0),i([pt()],Qi.prototype,"name",void 0),i([pt({type:Object})],Qi.prototype,"_values",void 0),i([pt()],Qi.prototype,"_updatingValues",void 0),i([pt()],Qi.prototype,"_hide",void 0),customElements.get(t)||customElements.define(t,Qi),customElements.get(`${t}-editor`)||customElements.define(`${t}-editor`,ee),customElements.get(`${t}-group`)||customElements.define(`${t}-group`,Le),customElements.get(`${t}-group-editor`)||customElements.define(`${t}-group-editor`,ye),console.info(`%c SIMPLE-THERMOSTAT %c v${e} `,"color: var(--text-primary-color); background: var(--primary-color); font-weight: 700; padding: 2px 6px; border-radius: 3px 0 0 3px;","color: var(--primary-color); background: var(--card-background-color); font-weight: 700; padding: 2px 6px; border-radius: 0 3px 3px 0;");const ta=window;ta.customCards=ta.customCards||[],ta.customCards.find(e=>e.type===t)||ta.customCards.push({type:t,name:"Simple Thermostat",preview:!0,description:"A different take on the thermostat card",documentationURL:"https://github.com/Wheemer/simple-thermostat"}),ta.customCards.find(e=>e.type===`${t}-group`)||ta.customCards.push({type:`${t}-group`,name:"Simple Thermostat Group",preview:!0,description:"Switch between multiple thermostat cards in one footprint",documentationURL:"https://github.com/Wheemer/simple-thermostat"});
