!function(){const t={DEBUG:!1,BUILD_TIME:"2026-07-08, 11:38 a.m."};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();var t="simple-thermostat",e="4.0.21";function i(t,e,i,o){var a,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const o=globalThis,a=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const c=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new s(i,t,r)},l=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:d,defineProperty:h,getOwnPropertyDescriptor:u,getOwnPropertyNames:p,getOwnPropertySymbols:m,getPrototypeOf:g}=Object,f=globalThis,v=f.trustedTypes,y=v?v.emptyScript:"",b=f.reactiveElementPolyfillSupport,_=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!d(t,e),$={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&h(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:a}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const r=o?.call(this);a?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...p(t),...m(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(a)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),a=o.litNonce;void 0!==a&&e.setAttribute("nonce",a),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=o;const r=a.fromAttribute(e,t.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const o=this.constructor,a=this[t];if(i??=o.getPropertyOptions(t),!((i.hasChanged??x)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:a},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==a||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[_("elementProperties")]=new Map,S[_("finalized")]=new Map,b?.({ReactiveElement:S}),(f.reactiveElementVersions??=[]).push("2.1.1");const A=globalThis,k=t=>t,z=A.trustedTypes,C=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+T,N=`<${O}>`,R=document,M=()=>R.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,j="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,L=/>/g,D=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,U=/"/g,W=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),G=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),K=new WeakMap,Z=R.createTreeWalker(R,129);function J(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,o=[];let a,r=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<i;e++){const i=t[e];let s,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===H?"!--"===c[1]?n=V:void 0!==c[1]?n=L:void 0!==c[2]?(W.test(c[2])&&(a=RegExp("</"+c[2],"g")),n=D):void 0!==c[3]&&(n=D):n===D?">"===c[0]?(n=a??H,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,s=c[1],n=void 0===c[3]?D:'"'===c[3]?U:F):n===U||n===F?n=D:n===V||n===L?n=H:(n=D,a=void 0);const h=n===D&&t[e+1].startsWith("/>")?" ":"";r+=n===H?i+N:l>=0?(o.push(s),i.slice(0,l)+E+i.slice(l)+T+h):i+T+(-2===l?e:h)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class X{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let a=0,r=0;const n=t.length-1,s=this.parts,[c,l]=Y(t,e);if(this.el=X.createElement(c,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=Z.nextNode())&&s.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(E)){const e=l[r++],i=o.getAttribute(t).split(T),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:a,name:n[2],strings:i,ctor:"."===n[1]?ot:"?"===n[1]?at:"@"===n[1]?rt:it}),o.removeAttribute(t)}else t.startsWith(T)&&(s.push({type:6,index:a}),o.removeAttribute(t));if(W.test(o.tagName)){const t=o.textContent.split(T),e=t.length-1;if(e>0){o.textContent=z?z.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],M()),Z.nextNode(),s.push({type:2,index:++a});o.append(t[e],M())}}}else if(8===o.nodeType)if(o.data===O)s.push({type:2,index:a});else{let t=-1;for(;-1!==(t=o.data.indexOf(T,t+1));)s.push({type:7,index:a}),t+=T.length-1}a++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,o){if(e===G)return e;let a=void 0!==o?i._$Co?.[o]:i._$Cl;const r=I(e)?void 0:e._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),void 0===r?a=void 0:(a=new r(t),a._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=a:i._$Cl=a),void 0!==a&&(e=Q(t,a._$AS(t,e.values),a,o)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??R).importNode(e,!0);Z.currentNode=o;let a=Z.nextNode(),r=0,n=0,s=i[0];for(;void 0!==s;){if(r===s.index){let e;2===s.type?e=new et(a,a.nextSibling,this,t):1===s.type?e=new s.ctor(a,s.name,s.strings,this,t):6===s.type&&(e=new nt(a,this,t)),this._$AV.push(e),s=i[++n]}r!==s?.index&&(a=Z.nextNode(),r++)}return Z.currentNode=R,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),I(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new tt(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new X(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const a of t)o===e.length?e.push(i=new et(this.O(M()),this.O(M()),this,this.options)):i=e[o],i._$AI(a),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,a){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,o){const a=this.strings;let r=!1;if(void 0===a)t=Q(this,t,e,0),r=!I(t)||t!==this._$AH&&t!==G,r&&(this._$AH=t);else{const o=t;let n,s;for(t=a[0],n=0;n<a.length-1;n++)s=Q(this,o[i+n],e,n),s===G&&(s=this._$AH[n]),r||=!I(s)||s!==this._$AH[n],s===q?t=q:t!==q&&(t+=(s??"")+a[n+1]),this._$AH[n]=s}r&&!o&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ot extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class at extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class rt extends it{constructor(t,e,i,o,a){super(t,e,i,o,a),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===G)return;const i=this._$AH,o=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==q&&(i===q||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const st=A.litHtmlPolyfillSupport;st?.(X,et),(A.litHtmlVersions??=[]).push("3.3.3");const ct=globalThis;let lt=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let a=o._$litPart$;if(void 0===a){const t=i?.renderBefore??null;o._$litPart$=a=new et(e.insertBefore(M(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}};lt._$litElement$=!0,lt.finalized=!0,ct.litElementHydrateSupport?.({LitElement:lt});const dt=ct.litElementPolyfillSupport;dt?.({LitElement:lt}),(ct.litElementVersions??=[]).push("4.2.2");const ht={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:x},ut=(t=ht,e,i)=>{const{kind:o,metadata:a}=i;let r=globalThis.litPropertyMetadata.get(a);if(void 0===r&&globalThis.litPropertyMetadata.set(a,r=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,a,t)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const a=this[o];e.call(this,i),this.requestUpdate(o,a,t)}}throw Error("Unsupported decorator location: "+o)};function pt(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function mt(t){return pt({...t,state:!0,attribute:!1})}var gt,ft=c`:host {
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
  --st-active-icon-glow-duration: 4s;
  --st-active-icon-glow-min-size: 1px;
  --st-active-icon-glow-mid-size: 4px;
  --st-active-icon-glow-max-size: 6px;
  --st-active-icon-glow-min-strength: 28%;
  --st-active-icon-glow-mid-strength: 44%;
  --st-active-icon-glow-max-strength: 60%;
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
  --fan_only-color: #8a8a8a;
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
  grid-auto-columns: minmax(0, 1fr);
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  align-items: center;
  justify-items: center;
  place-items: center;
  padding: 0 calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}
.body > * {
  min-width: 0;
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
    minmax(160px, max-content) minmax(max-content, 1fr)
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
    grid: auto-flow / auto auto;
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
  min-width: 0;
  padding-right: 8px;
  padding-bottom: 0;
  white-space: normal;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-self: end;
  text-align: right;
  transition:
    color 180ms var(--st-motion-ease), filter 180ms var(--st-motion-ease);
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
  width: calc(var(--st-header-icon-size) + (var(--st-active-icon-glow-max-size) * 2));
  height: calc(var(--st-header-icon-size) + (var(--st-active-icon-glow-max-size) * 2));
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
  background: var(--st-mode-active-accent-color);
  opacity: 0.64;
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
  min-height: calc(var(--st-control-icon-size) + 8px);
  padding-top: var(--st-spacing, var(--st-default-spacing));
  padding-bottom: var(--st-spacing, var(--st-default-spacing));
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
    gap: 6px;
    min-width: min(100%, 120px);
    min-width: min(100%, var(--st-hvac-mode-min-width, 120px));
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
  grid-template-columns: auto;
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

ha-card.standard-visuals .mode-item.active.off {
  background: var(--st-mode-active-background, var(--off-color));
}

ha-card.standard-visuals .mode-item.active.heat {
  background: var(--st-mode-active-background, var(--heat-color));
}

ha-card.standard-visuals .mode-item.active.cool {
  background: var(--st-mode-active-background, var(--cool-color));
}

ha-card.standard-visuals .mode-item.active.heat_cool {
  background: var(--st-mode-active-background, var(--heat_cool-color));
}

ha-card.standard-visuals .mode-item.active.auto {
  background: var(--st-mode-active-background, var(--auto-color));
}

ha-card.standard-visuals .mode-item.active.dry {
  background: var(--st-mode-active-background, var(--dry-color));
}

ha-card.standard-visuals .mode-item.active.fan_only {
  background: var(--st-mode-active-background, var(--fan_only-color));
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
`;function vt(t,e,i,o={}){o=o||{},i=null==i?{}:i;const a=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return a.detail=i,t.dispatchEvent(a),a}function yt(t){return Array.isArray(t)?t.map(t=>{const{label:e,...i}=t;return!i.name&&e&&(i.name=e),i}):t}function bt(t){const e={...t,layout:t.layout?{...t.layout}:void 0};return 3===e.version&&!e.layout?.step&&(e.layout={...e.layout??{},step:"column"}),!e.current_value_entity&&e.current_temperature_entity&&(e.current_value_entity=e.current_temperature_entity),void 0===e.entities&&void 0!==e.sensors&&function(t){if(!Array.isArray(t.sensors))return;const e=[];t.sensors.forEach(i=>{const o=i;return"temperature"===o.id?(o.label&&(t.label={...t.label??{},temperature:o.label}),void(!1===o.show&&(t.hide={...t.hide??{},temperature:!0}))):"state"===o.id?(o.label&&(t.label={...t.label??{},state:o.label}),void(!1===o.show&&(t.hide={...t.hide??{},state:!0}))):void e.push(i)}),t.entities=yt(e)}(e),e.entities=yt(e.entities),e.layout&&void 0===e.layout.entities&&void 0!==e.layout.sensors&&(e.layout.entities=e.layout.sensors),delete e.current_temperature_entity,delete e.sensors,delete e.layout?.sensors,delete e.version,e}!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===i&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}(ft),function(t){t.HVAC="hvac",t.FAN="fan",t.STATE="state",t.PRESET="preset",t.SWING="swing",t.SWING_HORIZONTAL="swing_horizontal",t.SWING_VERTICAL="swing_vertical",t.VANE_HORIZONTAL="vane_horizontal",t.VANE_VERTICAL="vane_vertical",t.DIRECTION="direction",t.OSCILLATING="oscillating",t.MODE="mode"}(gt||(gt={}));const _t="dual";const wt={getSetpoints:t=>function(t){return"number"==typeof t.target_temp_high&&"number"==typeof t.target_temp_low?_t:"single"}(t)===_t?{target_temp_low:t.target_temp_low,target_temp_high:t.target_temp_high}:{temperature:t.temperature},getRange:t=>({min:t?.min_temp??null,max:t?.max_temp??null,step:t?.target_temp_step??null}),getCurrentValue:t=>t?.current_temperature??null,getCurrentValueTemplate:()=>"{{current_temperature|formatNumber}}",getSetpointService:()=>({domain:"climate",service:"set_temperature"}),getModeService:t=>"vane_horizontal"===t||"vane_vertical"===t?`set_${t}`:`set_${t}_mode`,getModePayloadKey:t=>"vane_horizontal"===t||"vane_vertical"===t?t:`${t}_mode`,getModeAttribute:t=>"vane_horizontal"===t||"vane_vertical"===t?`${t}_positions`:`${t}_modes`,getDefaultControl:()=>["hvac","preset"],getLocalizationDomain:()=>"climate"},xt={climate:wt,fan:{getSetpoints:t=>"number"!=typeof t?.percentage?{}:{percentage:t.percentage},getRange:t=>({min:0,max:100,step:1}),getCurrentValue:t=>t?.current_temperature??t?.temperature??null,getCurrentValueUnit:(t,e)=>null!=t?.current_temperature?e?.unit_system?.temperature??!1:null!=t?.temperature&&(t?.unit_of_measurement??e?.unit_system?.temperature??!1),getCurrentValueTemplate:()=>"{{current_temperature|formatNumber}}",getSetpointService:()=>({domain:"fan",service:"set_percentage"}),getModeService:t=>"state"===t?"turn_on":"direction"===t?"set_direction":"oscillating"===t?"oscillate":`set_${t}_mode`,getModePayloadKey:t=>"state"===t?"state":"direction"===t?"direction":"oscillating"===t?"oscillating":`${t}_mode`,getModeAttribute:t=>"state"===t?"state":"direction"===t?"direction":"oscillating"===t?"oscillating":`${t}_modes`,getDefaultControl:()=>["preset","direction","oscillating","state"],transformModePayloadValue:(t,e)=>"oscillating"===t?"true"===e:e,getLocalizationDomain:()=>"fan"},humidifier:{getSetpoints:t=>({humidity:t?.humidity}),getRange:t=>({min:t?.min_humidity??0,max:t?.max_humidity??100,step:1}),getCurrentValue:t=>t?.current_humidity??null,getCurrentValueTemplate:()=>"{{current_humidity|formatNumber}}",getSetpointService:()=>({domain:"humidifier",service:"set_humidity"}),getModeService:t=>"state"===t?"turn_on":"mode"===t?"set_mode":`set_${t}`,getModePayloadKey:t=>"state"===t?"state":"mode"===t?"mode":t,getModeAttribute:t=>"state"===t?"state":"mode"===t?"available_modes":`${t}_modes`,getDefaultControl:()=>["mode","state"],getLocalizationDomain:()=>"humidifier"}};function $t(t){if(!t)return wt;const e=t.split(".")[0];return xt[e]??wt}const St=process.env.BUILD_TIME,At=["climate","fan","humidifier"],kt=[gt.HVAC,gt.FAN,gt.STATE,gt.PRESET,gt.SWING,gt.SWING_HORIZONTAL,gt.SWING_VERTICAL,gt.VANE_HORIZONTAL,gt.VANE_VERTICAL,gt.DIRECTION,gt.OSCILLATING,gt.MODE],zt=Object.values(gt),Ct={[gt.HVAC]:"HVAC modes",[gt.FAN]:"Fan modes",[gt.STATE]:"On/off state",[gt.PRESET]:"Preset modes",[gt.SWING]:"Swing modes",[gt.SWING_HORIZONTAL]:"Horizontal swing",[gt.SWING_VERTICAL]:"Vertical swing",[gt.VANE_HORIZONTAL]:"Horizontal vane",[gt.VANE_VERTICAL]:"Vertical vane",[gt.DIRECTION]:"Direction",[gt.OSCILLATING]:"Oscillating",[gt.MODE]:"Modes"},Et={header:{},layout:{mode:{}}},Tt={entity:"Entity (required)",current_value_entity:"Current value source",show_header:"Show header",name:"Name",icon:"Icon","toggle.entity":"Toggle entity","toggle.name":"Toggle label","toggle.icon":"Toggle icon","layout.mode.names":"Mode names","layout.mode.icons":"Mode icons","layout.mode.headings":"Mode headings",decimals:"Decimals",unit:"Unit","layout.step":"Step layout",step_size:"Step size",fallback:"Fallback text","hide.temperature":"Hide current value","hide.state":"Hide state","hide.setpoint_label":"Hide target label",hide_setpoint:"Hide target controls",disable_setpoint_change_when_off:"Disable target changes while off","label.temperature":"Current value label","label.state":"State label","label.setpoint":"Target label","layout.entities.type":"Entity row layout","layout.entities.labels":"Show entity row labels","layout.entities.separator":"Show entity label separator",enhanced_visuals:"Enhanced visuals","tap_action.action":"Tap action","hold_action.action":"Hold action","double_tap_action.action":"Double-tap action"};for(const t of kt)Tt[`control.${t}`]=Ct[t];const Ot=t=>"function"==typeof structuredClone?structuredClone(t):JSON.parse(JSON.stringify(t)),Nt=t=>!Array.isArray(t.schema)||0!==t.schema.length,Rt=[{value:"more-info",label:"More info"},{value:"toggle",label:"Toggle"},{value:"none",label:"None"}],Mt=[{value:"row",label:"Row"},{value:"column",label:"Column"}],It=[{value:"auto",label:"Auto (from entity)"},{value:"0.1",label:"0.1"},{value:"0.5",label:"0.5"},{value:"1",label:"1"}],Pt=[{value:"table",label:"Table"},{value:"list",label:"List"}],jt=["entity","current_value_entity","decimals","unit","fallback","layout.step","layout.mode.names","layout.mode.icons","layout.mode.headings","layout.entities.type","layout.entities.labels","layout.entities.separator","hide.temperature","hide.state","hide.setpoint_label","hide_setpoint","disable_setpoint_change_when_off","label.temperature","label.state","label.setpoint","tap_action.action","hold_action.action","double_tap_action.action"],Ht=["show_header","name","icon","toggle.entity","toggle.name","toggle.icon"];function Vt(t,e,i){const o=e.split(".");let a=t;for(;o.length>1;){const t=o.shift();Object.prototype.hasOwnProperty.call(a,t)||(a[t]={}),a=a[t]}a[o[0]]=i}function Lt(t,e){const i=e.split(".");let o=t;for(;i.length>1;){const t=i.shift();if(!o[t])return;o=o[t]}delete o[i[0]]}function Dt(t){const e=$t(t.entity);return kt.reduce((i,o)=>(i[`control.${o}`]=function(t,e,i){const o=t.control;return!1!==o&&(Array.isArray(o)?o.includes(e):o&&"object"==typeof o?void 0!==o[e]&&!1!==o[e]:i.getDefaultControl().includes(e))}(t,o,e),i),{})}function Ft(t,e){if(!t.entity||!e?.states?.[t.entity])return[];const i=e.states[t.entity].attributes??{},[o]=t.entity.split("."),a=$t(t.entity);return kt.filter(t=>zt.includes(t)&&(t===gt.STATE?"fan"===o||"humidifier"===o:void 0!==i[a.getModeAttribute(t)]))}class Ut extends lt{constructor(){super(...arguments),this._valueChanged=t=>{const e=this._applyFormChange(t.detail.value);this.config=e,vt(this,"config-changed",{config:e})},this._computeLabel=t=>Tt[String(t.name)]??String(t.name)}static get styles(){return ft}static getStubConfig(){return{...Et}}setConfig(t){this.config=bt(t||{...Et})}_openLink(){window.open("https://github.com/Wheemer/simple-thermostat/blob/master/README.md","_blank","noopener")}_buildFormData(){const t=this.config.header&&"object"==typeof this.config.header?this.config.header:{};return{entity:this.config.entity??"",current_value_entity:this.config.current_value_entity??"",show_header:!1!==this.config.header,"layout.mode.names":!1!==this.config.layout?.mode?.names,"layout.mode.icons":!1!==this.config.layout?.mode?.icons,"layout.mode.headings":!0===this.config.layout?.mode?.headings,decimals:this.config.decimals??"",unit:"string"==typeof this.config.unit?this.config.unit:"","layout.step":!1===this.config.enhanced_visuals?this.config.layout?.step??"column":this.config.layout?.step??"row",step_size:null!=this.config.step_size?String(this.config.step_size):"auto",fallback:this.config.fallback??"","hide.temperature":!0===this.config.hide?.temperature,"hide.state":!0===this.config.hide?.state,hide_setpoint:!0===this.config.hide_setpoint,disable_setpoint_change_when_off:!0===this.config.disable_setpoint_change_when_off,"hide.setpoint_label":!0===this.config.hide?.setpoint_label,"label.temperature":this.config.label?.temperature??"","label.state":this.config.label?.state??"","label.setpoint":this.config.label?.setpoint??"","layout.entities.type":this.config.layout?.entities?.type??"table","layout.entities.labels":!1!==this.config.layout?.entities?.labels,"layout.entities.separator":!1!==this.config.layout?.entities?.separator,enhanced_visuals:!1!==this.config.enhanced_visuals,name:t.name??"",icon:"string"==typeof t.icon?t.icon:"","toggle.entity":t.toggle?.entity??"","toggle.name":t.toggle?.name??"","toggle.icon":"string"==typeof t.toggle?.icon?t.toggle.icon:"","tap_action.action":this.config.tap_action?.action??"more-info","hold_action.action":this.config.hold_action?.action??"none","double_tap_action.action":this.config.double_tap_action?.action??"none",...Dt(this.config)}}_applyFormChange(t){const e=this._buildFormData(),i=function(t,e){return new Set(Object.keys(e).filter(i=>t[i]!==e[i]))}(e,t);!function(t,e){t.has("enhanced_visuals")&&(e.layout?.step||t.delete("layout.step"))}(i,this.config);const o={...e,...t},a=Ot(this.config);if(this._applyDirectFormPaths(a,o,i),!1===o.enhanced_visuals?a.enhanced_visuals=!1:delete a.enhanced_visuals,Ht.some(t=>i.has(t))&&(!1===o.show_header?a.header=!1:this._applyHeaderFormChange(a,o)),i.has("step_size")&&this._applyStepSize(a,o.step_size),i.has("entity")||kt.some(t=>i.has(`control.${t}`))){const t=function(t,e,i){const o=String(t.entity??e.entity??""),a=$t(o),r=Ft({...e,entity:o},i).filter(e=>t[`control.${e}`]),n=a.getDefaultControl();return 0!==r.length&&(e.control&&!Array.isArray(e.control)&&"object"==typeof e.control?r.reduce((t,i)=>(t[i]=e.control[i]||{},t),{}):r.length===n.length&&r.every((t,e)=>t===n[e])?void 0:r)}(o,this.config,this.hass);void 0===t?delete a.control:a.control=t}return a}_applyDirectFormPaths(t,e,i){for(const o of jt){if(!i.has(o))continue;const a=e[o];null==a||""===a?Lt(t,o):Vt(t,o,a)}}_applyHeaderFormChange(t,e){!1!==t.header&&null!=t.header||(t.header={});const i=t.header,o=e.name,a=e.icon,r=e["toggle.entity"],n=e["toggle.name"],s=e["toggle.icon"];"string"==typeof o&&o?i.name=o:delete i.name,"string"==typeof a&&a?i.icon=a:delete i.icon,"string"==typeof r&&r?(i.toggle=i.toggle||{entity:r},i.toggle.entity=r,"string"==typeof n&&n?i.toggle.name=n:delete i.toggle.name,"string"==typeof s&&s?i.toggle.icon=s:delete i.toggle.icon):delete i.toggle}_applyStepSize(t,e){if("auto"===e||""===e||null==e)return void delete t.step_size;const i=Number(e);t.step_size=Number.isNaN(i)?e:i}_getExtraEntities(){return Array.isArray(this.config.entities)?this.config.entities:[]}_commitEntityRows(t){const e=Ot(this.config);t.length>0?e.entities=t:delete e.entities,this.config=e,vt(this,"config-changed",{config:e})}_addEntityRow(){this._commitEntityRows([...this._getExtraEntities(),{entity:""}])}_removeEntityRow(t){this._commitEntityRows(this._getExtraEntities().filter((e,i)=>i!==t))}_updateEntityRow(t,e,i){const o=this._getExtraEntities().map((o,a)=>{if(a!==t)return o;const r={...o};return"string"==typeof i&&i?r[e]=i:delete r[e],r});this._commitEntityRows(o)}_renderExtraEntityRows(){const t=this._getExtraEntities();return B`
      <section class="editor-extra-entities">
        <div class="editor-extra-entities__header">
          <div>
            <h3>Extra entity rows</h3>
            <p>Add the sensors or helpers shown under the main state.</p>
          </div>
          <ha-button @click=${this._addEntityRow}>Add row</ha-button>
        </div>

        ${0===t.length?B`<p class="editor-extra-entities__empty">
              No extra rows configured.
            </p>`:t.map((t,e)=>B`
                <div class="editor-entity-row">
                  <ha-entity-picker
                    .hass=${this.hass}
                    .value=${t.entity??""}
                    allow-custom-entity
                    @value-changed=${t=>this._updateEntityRow(e,"entity",t.detail.value)}
                  ></ha-entity-picker>
                  <ha-textfield
                    label="Name"
                    .value=${t.name??""}
                    @input=${t=>this._updateEntityRow(e,"name",t.target.value)}
                  ></ha-textfield>
                  <ha-icon-picker
                    .hass=${this.hass}
                    .value=${t.icon??""}
                    @value-changed=${t=>this._updateEntityRow(e,"icon",t.detail.value)}
                  ></ha-icon-picker>
                  <ha-button @click=${()=>this._removeEntityRow(e)}>
                    Remove
                  </ha-button>
                </div>
              `)}
      </section>
    `}render(){return this.hass&&this.config?B`
      <div class="card-config">
        <ha-form
          .hass=${this.hass}
          .data=${this._buildFormData()}
          .schema=${function(t,e){const i=Ft(t,e),o=t.entity?.split(".")[0],a=$t(t.entity),r=t.entity?e?.states?.[t.entity]:void 0,n=!0===t.hide_setpoint||!r||Object.keys(a.getSetpoints(r.attributes??{})).length>0,s="fan"!==o&&("climate"===o||"humidifier"===o),c="fan"===o?[]:[{name:"current_value_entity",selector:{entity:{domain:["sensor","input_number"]}}}],l=[...s?[{name:"hide.temperature",selector:{boolean:{}}}]:[],{name:"hide.state",selector:{boolean:{}}}],d=[...s?[{name:"label.temperature",selector:{text:{}}}]:[],{name:"label.state",selector:{text:{}}},...n?[{name:"label.setpoint",selector:{text:{}}}]:[]],h=!1===t.header?[]:[{type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"toggle.entity",selector:{entity:{}}},{name:"toggle.name",selector:{text:{}}},...t.header&&"object"==typeof t.header&&t.header.toggle?.entity?[{name:"toggle.icon",selector:{icon:{}}}]:[]];return[{name:"entity",required:!0,selector:{entity:{domain:At}}},{type:"expandable",title:"Card header",schema:[{name:"show_header",selector:{boolean:{}}},...h]},...i.length>0?[{type:"expandable",title:"Controls",schema:[{type:"grid",column_min_width:"150px",schema:i.map(t=>({name:`control.${t}`,selector:{boolean:{}}}))}]}]:[],...n?[{type:"expandable",title:"Target",schema:[{type:"grid",schema:[{name:"layout.step",selector:{select:{mode:"dropdown",options:Mt}}},{name:"step_size",selector:{select:{mode:"dropdown",options:It}}}]},{type:"grid",column_min_width:"160px",schema:[{name:"hide_setpoint",selector:{boolean:{}}},{name:"hide.setpoint_label",selector:{boolean:{}}},{name:"disable_setpoint_change_when_off",selector:{boolean:{}}}]}]}]:[],{type:"expandable",title:"Extra entity rows",schema:[{type:"grid",column_min_width:"160px",schema:[{name:"layout.entities.type",selector:{select:{mode:"dropdown",options:Pt}}},{name:"layout.entities.labels",selector:{boolean:{}}},{name:"layout.entities.separator",selector:{boolean:{}}}]}]},{type:"expandable",title:"Appearance",schema:[{name:"enhanced_visuals",selector:{boolean:{}}},{type:"grid",column_min_width:"160px",schema:l}].filter(Nt)},{type:"expandable",title:"Advanced",schema:[...c,...s?[{type:"grid",schema:[{name:"decimals",selector:{number:{min:0,max:5,step:1,mode:"box"}}},{name:"unit",selector:{text:{}}}]}]:[],{name:"fallback",selector:{text:{}}},{type:"grid",column_min_width:"160px",schema:d},{type:"grid",column_min_width:"150px",schema:[{name:"layout.mode.names",selector:{boolean:{}}},{name:"layout.mode.icons",selector:{boolean:{}}},{name:"layout.mode.headings",selector:{boolean:{}}}]},{type:"grid",column_min_width:"150px",schema:[{name:"tap_action.action",selector:{select:{mode:"dropdown",options:Rt}}},{name:"hold_action.action",selector:{select:{mode:"dropdown",options:Rt}}},{name:"double_tap_action.action",selector:{select:{mode:"dropdown",options:Rt}}}]}].filter(Nt)}]}(this.config,this.hass)}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._valueChanged}
        ></ha-form>

        ${this._renderExtraEntityRows()}

        <div class="editor-footer">
          <ha-button @click=${this._openLink}>
            <ha-svg-icon .path=${"M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M12 8V19.5C13.35 18.65 15.8 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8M13 11.5C14.11 10.82 15.6 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C15.73 9 14.23 9.28 13 9.84V11.5M17.5 11.67C15.79 11.67 14.29 11.93 13 12.46V14.15C14.11 13.5 15.6 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67M20 14.57C19.13 14.41 18.29 14.33 17.5 14.33C15.67 14.33 14.17 14.6 13 15.13V16.82C14.11 16.16 15.6 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57Z"} slot="icon"></ha-svg-icon>
            All configuration options
          </ha-button>
          <span class="editor-footer__hint">
            YAML remains available for specialized setups
          </span>
          <span class="editor-footer__version"
            >v${e} - ${St}</span
          >
        </div>
      </div>
    `:B``}}i([mt()],Ut.prototype,"config",void 0),i([pt({attribute:!1})],Ut.prototype,"hass",void 0);const Wt=2,Bt=t=>(...e)=>({_$litDirective$:t,values:e});class Gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const qt=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),qt(t,e);return!0},Kt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},Zt=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Xt(e)}};function Jt(t){void 0!==this._$AN?(Kt(this),this._$AM=t,Zt(this)):this._$AM=t}function Yt(t,e=!1,i=0){const o=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(e)if(Array.isArray(o))for(let t=i;t<o.length;t++)qt(o[t],!1),Kt(o[t]);else null!=o&&(qt(o,!1),Kt(o));else qt(this,t)}const Xt=t=>{t.type==Wt&&(t._$AP??=Yt,t._$AQ??=Jt)};class Qt extends Gt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Zt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(qt(this,t),Kt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const te=new WeakMap,ee=Bt(class extends Qt{render(t){return q}update(t,[e]){const i=e!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),q}rt(t){if(void 0!==this.G)if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=te.get(e);void 0===i&&(i=new WeakMap,te.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?te.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ie=["climate","fan","humidifier"],oe={icons:!0,names:!0,states:!1};function ae(t){if("string"==typeof t)return{entity:t};const e=t?.header&&"object"==typeof t.header?t.header:{};return{...t,entity:t?.entity??"",name:t?.name??e.name,icon:t?.icon??e.icon}}class re extends lt{constructor(){super(...arguments),this.config={entities:[]},this.expandedTargetIndex=null,this.editorConfigKeys=new WeakMap}static get styles(){return c`
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
    `}setConfig(t){this.config={...t}}commit(t){const e=this.cleanConfig(t);this.config=e,vt(this,"config-changed",{config:e})}cleanConfig(t){const e={...t};for(const t of Object.keys(e))void 0===e[t]&&delete e[t];return e.selector&&0===Object.keys(e.selector).length&&delete e.selector,e}getTargets(){return function(t){const e=(t.cards??t.entities??[]).map(ae);return e.length?e:[{entity:""},{entity:""}]}(this.config)}updateTarget(t,e){const i=this.getTargets();i[t]={...i[t],...e},this.commitTargets(i)}cleanTargets(t){return t.map(t=>{const e=t.entity?.trim()??"",i=t.name?.trim(),o=t.icon?.trim(),{name:a,icon:r,entity:n,...s}=t;return i||o||0!==Object.keys(s).length?{...s,entity:e,...i?{name:i}:{},...o?{icon:o}:{}}:e})}addTarget(){const t=[...this.getTargets(),{entity:""}];this.commitTargets(t)}removeTarget(t){const e=this.getTargets().filter((e,i)=>i!==t);this.commitTargets(e.length?e:[{entity:""}])}commitTargets(t){const{entities:e,...i}=this.config;this.commit({...i,cards:this.cleanTargets(t)})}updateSelector(t,e){const i={...this.config.selector??{}},o=Boolean(e);o===oe[t]?delete i[t]:i[t]=o,this.commit({...this.config,selector:i})}isAutoSelectEnabled(){const t=this.config.auto_select;return!0===t||"recent_activity"===t||"object"==typeof t&&"recent_activity"===t?.mode}updateAutoSelect(t){const{auto_select:e,...i}=this.config;this.commit({...i,...t?{auto_select:{mode:"recent_activity"}}:{}})}getTargetCardConfig(e){const{name:i,icon:o,...a}=e,r=a.header&&"object"==typeof a.header?{...a.header}:{};return i&&!1!==a.header&&void 0===r.name&&(r.name=i),o&&!1!==a.header&&void 0===r.icon&&(r.icon=o),{type:a.type??`custom:${t}`,...a,...!1===a.header?{header:!1}:{header:r}}}configureNestedEditor(t,e){if(!t)return;const i=t,o=this.getTargetCardConfig(e),a=JSON.stringify(o);i.hass=this.hass,this.editorConfigKeys.get(t)!==a&&(i.setConfig?.(o),this.editorConfigKeys.set(t,a))}updateTargetCardConfig(t,e){e.stopPropagation();const i=this.getTargets();i[t]=ae(e.detail.config),this.commitTargets(i)}toggleTargetEditor(t){this.expandedTargetIndex=this.expandedTargetIndex===t?null:t}renderEntityPicker(t,e){return B`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${t.entity}
        .includeDomains=${ie}
        allow-custom-entity
        label="Entity"
        @value-changed=${t=>this.updateTarget(e,{entity:t.detail.value})}
      ></ha-entity-picker>
    `}renderTarget(t,e){const i=this.expandedTargetIndex===e;return B`
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
          ${this.getTargets().length>1?B`
                <ha-icon-button
                  label="Remove"
                  .path=${"M19,13H5V11H19V13Z"}
                  @click=${()=>this.removeTarget(e)}
                ></ha-icon-button>
              `:q}
        </div>
        ${i?B`
              <div class="target-editor">
                <simple-thermostat-editor
                  .hass=${this.hass}
                  ${ee(e=>this.configureNestedEditor(e,t))}
                  @config-changed=${t=>this.updateTargetCardConfig(e,t)}
                ></simple-thermostat-editor>
              </div>
            `:q}
      </div>
    `}render(){const t=this.config.selector??{},e=this.getTargets();return B`
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
          ${this.renderOption("Follow active device","Switch to a card when its mode or on/off activity changes.",this.isAutoSelectEnabled(),t=>this.updateAutoSelect(t))}
          ${this.renderOption("Show icons","Show each card icon in the selector and menu.",!1!==t.icons,t=>this.updateSelector("icons",t))}
          ${this.renderOption("Show names","Show card names in the selector and menu.",!1!==t.names,t=>this.updateSelector("names",t))}
          ${this.renderOption("Show states","Show current states in the selector menu.",!0===t.states,t=>this.updateSelector("states",t))}
        </div>
      </div>
    `}renderOption(t,e,i,o){return B`
      <div class="option-row">
        <div class="option-text">
          <span class="option-title">${t}</span>
          <span class="option-description">${e}</span>
        </div>
        <ha-switch
          .checked=${i}
          @change=${t=>o(t.currentTarget.checked)}
        ></ha-switch>
      </div>
    `}}function ne(t){if("string"!=typeof t.entity_id)return;const[e]=t.entity_id.split(".");return"climate"===e?"hvac_action":"humidifier"===e?"action":void 0}function se(t){const e=ne(t),i=e?t.attributes?.[e]:void 0;return"string"==typeof i&&i?i:void 0}function ce(t,e,i){if("string"!=typeof t.entity_id)return void 0===t.state?"":String(t.state);const[o]=t.entity_id.split("."),a=se(t),r=ne(t);if(a)return"function"==typeof e.formatEntityAttributeValue&&r?e.formatEntityAttributeValue(t,r):i(a,function(t){if("string"!=typeof t.entity_id)return"";const[e]=t.entity_id.split("."),i=ne(t);return e&&i?`state_attributes.${e}.${i}.`:""}(t));if("fan"===o&&"on"===t.state){if(t.attributes?.preset_mode)return"function"==typeof e.formatEntityAttributeValue?e.formatEntityAttributeValue(t,"preset_mode"):i(t.attributes.preset_mode,"state_attributes.fan.preset_mode.");if("number"==typeof t.attributes?.percentage)return`${t.attributes.percentage}%`;if(t.attributes?.speed)return String(t.attributes.speed)}return"function"==typeof e.formatEntityState?e.formatEntityState(t):i(String(t.state),`component.${o}.state._.`)}i([pt({attribute:!1})],re.prototype,"hass",void 0),i([mt()],re.prototype,"config",void 0),i([mt()],re.prototype,"expandedTargetIndex",void 0);const le={auto:"mdi:radiator",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:radiator",idle:"mdi:radiator-disabled",on:"mdi:power",off:"mdi:radiator-off"},de={auto:"mdi:air-conditioner",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:radiator",idle:"mdi:air-conditioner",on:"mdi:air-conditioner",off:"mdi:air-conditioner"},he={...le,auto:"mdi:radiator",idle:"mdi:radiator",off:"mdi:radiator"},ue={fan:{on:"mdi:fan",off:"mdi:fan-off"},humidifier:{on:"mdi:air-humidifier",off:"mdi:air-humidifier-off"}},pe={auto:"hass:autorenew",cool:"hass:snowflake",dry:"hass:water-percent",fan_only:"hass:fan",heat_cool:"hass:autorenew",heat:"hass:fire",on:"hass:power",off:"hass:power",forward:"mdi:arrow-right",reverse:"mdi:arrow-left",true:"mdi:fan",false:"mdi:fan-off",low:"mdi:fan-speed-1",mid:"mdi:fan-speed-2",medium:"mdi:fan-speed-2",high:"mdi:fan-speed-3",max:"st:fan-speed-4",turbo:"st:fan-speed-5",1:"mdi:fan-speed-1",2:"mdi:fan-speed-2",3:"mdi:fan-speed-3",4:"st:fan-speed-4",5:"st:fan-speed-5",automatic:"mdi:fan-auto",powerful:"mdi:fan-plus",quiet:"mdi:fan-minus",silent:"mdi:fan-minus",normal:"mdi:water-percent",vertical:"mdi:arrow-up-down",top:"mdi:arrow-up","top-middle":"mdi:arrow-top-right",middle:"mdi:arrow-collapse-vertical","middle-bottom":"mdi:arrow-bottom-right",bottom:"mdi:arrow-down",upper:"mdi:arrow-up",lower:"mdi:arrow-down",horizontal:"mdi:arrow-left-right",left:"mdi:arrow-left","center-left":"mdi:arrow-top-left",center:"mdi:arrow-collapse-horizontal","center-right":"mdi:arrow-top-right",right:"mdi:arrow-right",both:"mdi:arrow-all",swing:"mdi:arrow-oscillating",wide:"mdi:arrow-expand-horizontal",narrow:"mdi:arrow-collapse-horizontal",split:"mdi:arrow-split-vertical",none:"mdi:circle-off-outline",away:"mdi:home-export-outline",eco:"mdi:leaf",boost:"mdi:weather-windy",comfort:"mdi:sofa",auto_comfort:"mdi:sofa","auto-comfort":"mdi:sofa","auto comfort":"mdi:sofa",home:"mdi:home",sleep:"mdi:sleep",activity:"mdi:run"};function me(t){const e=String(t),i=e.toLowerCase().replace(/\s+/g,"_");return pe[e]??pe[i]}function ge(t,e,i,o=!0){if(!1===t)return!1;let a;a="string"==typeof t?.name?t.name:!1!==t?.name&&("function"==typeof i.formatEntityName?i.formatEntityName(e):e.attributes.friendly_name);let r=o?function(t){const[e]=t.entity_id.split(".");return t.attributes.icon??function(t){const[e]=t.entity_id.split(".");if("climate"!==e)return;const i=Array.isArray(t.attributes?.hvac_modes)?t.attributes.hvac_modes:[],o=se(t),a=String(o||t.state);return i.includes("cool")||i.includes("dry")||i.includes("fan_only")||["cool","cooling","dry","fan_only","fan"].includes(a)?de:he}(t)??ue[e]?.[t.state]??(se(t)?le:pe)}(e):function(t){return se(t)?le:pe}(e);return void 0!==t?.icon&&(r=t.icon),{name:a,icon:r,slashOffIcon:o&&ye(e,r),toggle:t?.toggle?fe(t.toggle,i):null,toggles:ve(t,i),faults:be(t?.faults,i)}}function fe(t,e){const i=e.states[t.entity];if(!i)return null;let o="";return o=!0===t?.name?i.attributes.friendly_name:t?.name??"",{entity:i,label:o,icon:t?.icon??!1}}function ve(t,e){return[...t?.toggle?[t.toggle]:[],...Array.isArray(t?.toggles)?t.toggles:[]].map(t=>fe(t,e)).filter(t=>!!t)}function ye(t,e){if("off"!==t.state)return!1;const i="object"==typeof e?e[se(t)||t.state]??!1:e;if("string"!=typeof i)return!1;const[o]=t.entity_id.split("."),a="climate"===o?le.off:ue[o]?.off;return Boolean(a)&&i!==a&&!i.endsWith("-off")}function be(t,e){return Array.isArray(t)?t.filter(({entity:t})=>Boolean(e.states?.[t])).map(({entity:t,...i})=>({...i,state:e.states[t],entity:t})):[]}const _e={icons:!0,names:!0,states:!1},we=["climate","fan","humidifier"];function xe(t){return t.split(".")[0]}function $e(t){return"string"==typeof t?t.replace(/[^a-z0-9_-]/gi,""):""}function Se(e){if("string"==typeof e){const i=e.trim();return i?{entity:i,config:{type:`custom:${t}`,entity:i}}:null}if(!e?.entity)return null;const{entity:i,name:o,icon:a,...r}=e,n="object"==typeof r.header&&r.header?{...r.header}:{};return o&&!1!==r.header&&void 0===n.name&&(n.name=o),a&&!1!==r.header&&void 0===n.icon&&(n.icon=a),{entity:i,config:{type:r.type??`custom:${t}`,...r,entity:i,...!1===r.header?{header:!1}:{header:n}}}}class Ae extends lt{constructor(){super(...arguments),this.targets=[],this.selectedEntity="",this.menuOpen=!1,this.cardFading=!1,this.fadeInAfterSync=!1,this.activitySignatures=new Map,this.activitySignaturesInitialized=!1,this.persistedActivityApplied=!1,this.lastManualSelectionAt=0}static get styles(){return c`
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
        grid-template-columns: minmax(0, 1fr) 78px;
        grid-template-areas: 'content nav';
        align-items: center;
        gap: 4px;
        padding: calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 4)
          calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 2) 0
          calc(var(--st-spacing, var(--st-default-spacing, 4px)) * 4);
        color: var(--primary-text-color);
        position: absolute;
        z-index: 2;
        inset: 0 0 auto 0;
        min-width: 0;
        box-sizing: border-box;
        transform: translateY(var(--st-group-header-top-buffer, 6px));
      }

      .group-title {
        flex: 1 1 auto;
        min-width: 0;
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
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
        min-width: 0;
      }

      .group-nav-cluster {
        grid-area: nav;
        justify-self: end;
        width: 78px;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-areas:
          'prev next menu'
          'count count menu';
        align-items: center;
        justify-items: center;
        column-gap: 2px;
        row-gap: 0;
        margin-left: 4px;
      }

      .group-nav,
      .group-menu {
        flex: 0 0 auto;
        appearance: none;
        border: 0;
        border-radius: 8px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        padding: 0;
        cursor: pointer;
      }

      .group-nav ha-icon,
      .group-menu ha-icon {
        --mdc-icon-size: 19px;
        --iron-icon-width: 19px;
        --iron-icon-height: 19px;
      }

      .group-nav:disabled {
        opacity: 0.45;
        cursor: default;
      }

      .group-count {
        grid-area: count;
        min-width: 0;
        margin-top: 2px;
        text-align: center;
        font-size: var(--ha-font-size-2xs, 10px);
        line-height: 1;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      .group-menu {
        grid-area: menu;
        width: 20px;
        background: transparent;
        color: var(--secondary-text-color);
      }

      .group-menu ha-icon {
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
        grid-template-columns: auto minmax(0, 1fr);
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

      .group-picker ha-icon {
        --mdc-icon-size: 22px;
        --iron-icon-width: 22px;
        --iron-icon-height: 22px;
        color: var(--primary-color);
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
        padding-top: var(--st-group-body-top-buffer, 14px);
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
    `}static getConfigElement(){return window.document.createElement(`${t}-group-editor`)}static getStubConfig(t){return{entities:Object.keys(t?.states??{}).filter(t=>we.includes(xe(t))).slice(0,2),card:{}}}setConfig(t){this.clearAutoSelectResumeTimer();const e=(t.cards??t.entities??[]).map(Se).filter(Boolean);if(!e.length)throw new Error("Simple Thermostat Group requires at least one card");this.config={...t,selector:{..._e,...t.selector??{}}},this.targets=e,this.selectedEntity=this.getInitialSelection(t,e),this.activitySignatures.clear(),this.activitySignaturesInitialized=!1,this.persistedActivityApplied=!1}updated(){this.syncAutoSelectRecentActivity(),this.syncEmbeddedCard(),this.syncOutsideClickListener(),this.syncTitleFit()}disconnectedCallback(){this.clearOutsideClickListener(),this.clearAutoSelectResumeTimer(),super.disconnectedCallback()}getInitialSelection(t,e){const i=new Set(e.map(t=>t.entity)),o=!1===t.remember_selection?"":this.readStoredSelection(t);return o&&i.has(o)?o:t.selected&&i.has(t.selected)?t.selected:e[0].entity}readStoredSelection(t){try{return window.localStorage?.getItem(this.getStorageKey(t))??""}catch(t){return""}}writeStoredSelection(t){if(this.config&&!1!==this.config.remember_selection)try{window.localStorage?.setItem(this.getStorageKey(this.config),t)}catch(t){}}readStoredActivity(t){try{const e=window.localStorage?.getItem(this.getActivityStorageKey(t));if(!e)return;const i=JSON.parse(e);if("string"==typeof i.entity&&"string"==typeof i.signature&&Number.isFinite(i.timestamp))return{entity:i.entity,signature:i.signature,timestamp:Number(i.timestamp)}}catch(t){return}}writeStoredActivity(t){if(this.config)try{window.localStorage?.setItem(this.getActivityStorageKey(this.config),JSON.stringify(t))}catch(t){}}getStorageKey(t){if(t.storage_key)return`simple-thermostat-group:${t.storage_key}`;return`simple-thermostat-group:${this.targets.map(t=>t.entity).join("|")}`}getActivityStorageKey(t){return`${this.getStorageKey(t)}:recent-activity`}clearAutoSelectResumeTimer(){void 0!==this.autoSelectResumeTimer&&(window.clearTimeout(this.autoSelectResumeTimer),this.autoSelectResumeTimer=void 0)}getSelectedTarget(){return this.targets.find(t=>t.entity===this.selectedEntity)??this.targets[0]}getSelectedState(){const t=this.getSelectedTarget();return this.hass?.states?.[t.entity]}getGroupCardClasses(){const t=this.getSelectedState();if(!t)return"group-card group-shell";const e=xe(t.entity_id),i=se(t),o=["unavailable","unknown"].includes(String(t.state));return["group-card","group-shell",`domain-${$e(e)}`,`state-${$e(t.state)}`,$e(i),o&&$e(t.state)].filter(Boolean).join(" ")}getGroupCardStyle(){const t=this.getSelectedState();return t?function(t,e={}){if("fan"!==t)return"";const i=Number(e?.percentage);if(Number.isNaN(i))return"";const o=Math.min(Math.max(i,0),100);return`--st-fan-spin-duration: ${Math.max(.9,3.2-o/100*2.1).toFixed(2)}s;`}(xe(t.entity_id),t.attributes):""}getSelectedIndex(){const t=this.targets.findIndex(t=>t.entity===this.selectedEntity);return-1===t?0:t}isRecentActivityAutoSelectEnabled(){const t=this.config?.auto_select;return!!t&&(!0===t||"recent_activity"===t||"object"==typeof t&&"recent_activity"===t.mode)}getAutoSelectManualPauseMs(){const t=this.config?.auto_select;if(t&&"object"==typeof t){const e=Number(t.manual_pause_ms??t.cooldown_ms);if(Number.isFinite(e)&&e>=0)return e}return 3e4}pauseAutoSelectAfterManualSelection(){this.lastManualSelectionAt=Date.now(),this.clearAutoSelectResumeTimer(),this.isRecentActivityAutoSelectEnabled()&&(this.autoSelectResumeTimer=window.setTimeout(()=>{this.autoSelectResumeTimer=void 0,this.lastManualSelectionAt=0,this.isRecentActivityAutoSelectEnabled()&&!this.menuOpen&&this.selectMostRecentStateActivity()},this.getAutoSelectManualPauseMs()))}getActivitySignature(t){const e=this.hass?.states?.[t.entity];if(!e)return"";const i=xe(t.entity),o=e.attributes??{},a=se(e)??"",r="climate"===i?["hvac_action","temperature","target_temp_low","target_temp_high","preset_mode","fan_mode","swing_mode","swing_horizontal_mode","swing_vertical_mode"]:"fan"===i?["percentage","preset_mode","direction","oscillating"]:"humidifier"===i?["action","humidity","mode"]:[],n=[`state:${e.state}`,`action:${a}`];return r.forEach(t=>{n.push(`${t}:${JSON.stringify(o[t]??null)}`)}),n.join("|")}getActivityTimestamp(t){const e=this.hass?.states?.[t.entity],i=this.getActivityActiveRank(t)>1?e?.last_updated??e?.last_changed:e?.last_changed??e?.last_updated,o="string"==typeof i?Date.parse(i):NaN;return Number.isFinite(o)?o:0}getActivityCandidate(t,e=this.getActivityTimestamp(t)){return{target:t,timestamp:e,activeRank:this.getActivityActiveRank(t)}}isBetterActivityCandidate(t,e){return!e||(t.activeRank!==e.activeRank?t.activeRank>e.activeRank:t.timestamp>=e.timestamp)}getMostRecentStateActivityCandidate(){return this.targets.map(t=>this.getActivityCandidate(t)).filter(t=>t.timestamp>0).reduce((t,e)=>this.isBetterActivityCandidate(e,t)?e:t,void 0)}applyPersistedActivitySelection(t){if(this.persistedActivityApplied||!this.config||!this.isRecentActivityAutoSelectEnabled())return;this.persistedActivityApplied=!0;const e=this.readStoredActivity(this.config);if(!e)return void this.selectMostRecentStateActivity(t);if(!this.targets.some(t=>t.entity===e.entity))return void this.selectMostRecentStateActivity(t);const i=this.targets.find(t=>t.entity===e.entity),o=t.get(e.entity);if(i&&o&&o===e.signature){const o=this.getActivityCandidate(i,e.timestamp),a=this.getMostRecentStateActivityCandidate();return a&&this.isBetterActivityCandidate(a,o)?void this.selectMostRecentStateActivity(t):void this.selectEntity(e.entity,!1)}this.selectMostRecentStateActivity(t)}selectMostRecentStateActivity(t){const e=this.getMostRecentStateActivityCandidate();if(e&&e.target.entity!==this.selectedEntity&&this.selectEntity(e.target.entity,!1),e&&t){const i=t.get(e.target.entity);i&&this.writeStoredActivity({entity:e.target.entity,signature:i,timestamp:e.timestamp})}}getActivityActiveRank(t){const e=this.hass?.states?.[t.entity];if(!e)return 0;const i=xe(t.entity),o=se(e)??e.attributes?.action,a="string"==typeof e.state?e.state.toLowerCase():"",r="string"==typeof o?o.toLowerCase():"";if("climate"===i)return["heating","cooling","drying"].includes(r)?2:a&&"off"!==a?1:0;if("fan"===i){const t=Number(e.attributes?.percentage);return"on"===a||t>0?2:0}return"humidifier"===i?["drying","humidifying"].includes(r)?2:a&&!["off","idle"].includes(a)?1:0:a&&"off"!==a?1:0}syncAutoSelectRecentActivity(){if(!this.config||!this.hass||!this.targets.length)return;const t=[],e=new Map;if(this.targets.forEach(i=>{const o=this.getActivitySignature(i);e.set(i.entity,o),this.activitySignaturesInitialized&&o&&o!==this.activitySignatures.get(i.entity)&&(this.writeStoredActivity({entity:i.entity,signature:o,timestamp:Date.now()}),t.push(this.getActivityCandidate(i,Date.now())))}),this.activitySignatures=e,!this.activitySignaturesInitialized)return this.activitySignaturesInitialized=!0,void this.applyPersistedActivitySelection(e);if(!t.length||!this.isRecentActivityAutoSelectEnabled()||this.menuOpen||Date.now()-this.lastManualSelectionAt<this.getAutoSelectManualPauseMs())return;const i=t.reduce((t,e)=>this.isBetterActivityCandidate(e,t)?e:t);this.selectEntity(i.target.entity,!1)}getTargetLabel(t){const e=this.parseTargetHeader(t);if(e&&"string"==typeof e.name)return e.name;const i=this.hass?.states?.[t.entity];return i&&"function"==typeof this.hass?.formatEntityName?this.hass.formatEntityName(i):i?.attributes?.friendly_name??t.entity}getTargetIcon(t){if(!(this.config?.selector??_e).icons)return"";const e=this.parseTargetHeader(t);if(e&&e.icon)return this.resolveHeaderIcon(e.icon,t);const i=this.hass?.states?.[t.entity];if(i?.attributes?.icon)return i.attributes.icon;const o=xe(t.entity);return"fan"===o?"mdi:fan":"humidifier"===o?"mdi:air-humidifier":"mdi:air-conditioner"}getTargetHeaderData(t){return this.parseTargetHeader(t)}parseTargetHeader(t){const e=this.hass?.states?.[t.entity];if(!e||!this.hass)return null;const i=this.getTargetCardConfig(t);return ge(i.header,e,this.hass,!1!==i.enhanced_visuals)}resolveHeaderIcon(t,e){if("string"==typeof t)return t;if(!t||"object"!=typeof t)return"";const i=this.hass?.states?.[e.entity];if(!i)return"";const o=t[se(i)||String(i.state)];return"string"==typeof o?o:""}getHeaderToggleConfigs(t){const e=t.config.header;return e&&"object"==typeof e?[...e.toggle?[e.toggle]:[],...Array.isArray(e.toggles)?e.toggles:[]].filter(t=>t?.entity&&this.hass?.states?.[t.entity]):[]}getEmbeddedConfig(){const t=this.getSelectedTarget();return this.getTargetCardConfig(t)}getTargetCardConfig(e){return{...this.config?.card??{},...e.config,entity:e.entity,type:e.config.type??`custom:${t}`}}syncEmbeddedCard(){if(!this.config||!this.hass)return;const e=this.renderRoot.querySelector(".embedded-card-host");if(!e)return;const i=this.getEmbeddedConfig();this.embeddedCard||(this.embeddedCard=window.document.createElement(t),e.replaceChildren(this.embeddedCard)),"function"==typeof this.embeddedCard.setConfig&&this.embeddedCard.setConfig(i),this.embeddedCard.hass=this.hass,this.syncEmbeddedPresentation()}syncEmbeddedPresentation(){const t=this.embeddedCard;(t?.updateComplete??Promise.resolve()).catch(()=>{}).then(()=>window.requestAnimationFrame(()=>this.applyEmbeddedPresentation()))}applyEmbeddedPresentation(){const t=this.renderRoot.querySelector(".embedded-card-host"),e=this.embeddedCard?.shadowRoot,i=e?.querySelector("ha-card"),o=e?.querySelector("header");t&&i&&(t.style.removeProperty("--st-group-cropped-header-height"),o&&(o.style.visibility="hidden",o.style.pointerEvents="none"),this.fadeInAfterSync&&(this.fadeInAfterSync=!1,window.requestAnimationFrame(()=>{this.cardFading=!1})))}selectEntity(t,e=!0){if(t===this.selectedEntity)return;this.menuOpen=!1,e&&this.pauseAutoSelectAfterManualSelection();const i=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(!this.embeddedCard||i)return this.fadeInAfterSync=!1,this.cardFading=!1,this.selectedEntity=t,void(e&&this.writeStoredSelection(t));this.cardFading=!0,this.fadeInAfterSync=!0,this.selectedEntity=t,e&&this.writeStoredSelection(t)}selectOffset(t){if(this.targets.length<2)return;const e=(this.getSelectedIndex()+t+this.targets.length)%this.targets.length;this.selectEntity(this.targets[e].entity)}toggleHeaderEntity(t,e){t.stopPropagation();const i=Boolean(t.target.checked);this.hass?.callService?.("homeassistant","turn_"+(i?"on":"off"),{entity_id:e})}renderHeaderToggles(t){const e=this.getHeaderToggleConfigs(t);return e.length?B`
      <div class="group-toggles">
        ${e.map(t=>{const e=this.hass?.states?.[t.entity],i=!0===t.name?e?.attributes?.friendly_name:"string"==typeof t.name?t.name:e?.attributes?.friendly_name,o=t.icon||e?.attributes?.icon;return B`
            <div class="group-toggle">
              <ha-switch
                .checked=${"on"===e?.state}
                @change=${e=>this.toggleHeaderEntity(e,t.entity)}
              ></ha-switch>
              ${o?B`<ha-icon
                    title=${i||t.entity}
                    icon=${o}
                  ></ha-icon>`:i?B`<span class="group-toggle-label">${i}</span>`:q}
              ${i&&o?B`<span class="group-toggle-label" title=${i}
                    >${i}</span
                  >`:q}
            </div>
          `})}
      </div>
    `:q}toggleMenu(){this.targets.length<2||(this.menuOpen=!this.menuOpen)}clearOutsideClickListener(){this.removeOutsideClickListener?.(),this.removeOutsideClickListener=void 0}syncTitleFit(){window.requestAnimationFrame(()=>{const t=this.renderRoot.querySelector(".group-title");if(!t)return;t.style.removeProperty("--st-group-title-fit-size"),t.style.removeProperty("--st-group-title-fit-line-height");const e=t.clientWidth,i=t.scrollWidth;if(!e||i<=e)return;const o=window.getComputedStyle(t),a=Number.parseFloat(o.fontSize)||24,r=Math.max(14,Math.floor(a*(e/i)*100)/100);t.style.setProperty("--st-group-title-fit-size",`${r}px`),t.style.setProperty("--st-group-title-fit-line-height",`${r}px`)})}syncOutsideClickListener(){if(!this.menuOpen)return void this.clearOutsideClickListener();if(this.removeOutsideClickListener)return;const t=t=>{t.composedPath().includes(this)||(this.menuOpen=!1)};window.addEventListener("pointerdown",t,{capture:!0}),this.removeOutsideClickListener=()=>window.removeEventListener("pointerdown",t,{capture:!0})}renderPicker(){return this.menuOpen?B`
      <div class="group-picker" role="menu">
        ${this.targets.map(t=>{const e=this.getTargetLabel(t),i=this.getTargetIcon(t),o=t.entity===this.selectedEntity;return B`
            <button
              type="button"
              role="menuitemradio"
              aria-checked=${o?"true":"false"}
              class=${o?"selected":""}
              @click=${()=>this.selectEntity(t.entity)}
            >
              ${i?B`<ha-icon icon=${i}></ha-icon>`:q}
              <span>${e}</span>
            </button>
          `})}
      </div>
    `:q}renderHeaderIcon(t){const e=this.hass?.states?.[t.entity],i=this.getTargetHeaderData(t);if(!e||!i||!i.icon)return q;const o=se(e)||String(e.state),a="object"==typeof i.icon?i.icon?.[o]??!1:i.icon;if(!a)return q;const r=o&&o!==e.state?` ${$e(o)}`:"",n=$e(e.state);return B`
      <span
        class="header__icon-wrap ${n}${r} ${i.slashOffIcon?"slash-off":""}"
      >
        <ha-icon
          class="header__icon ${n}${r}"
          .icon=${a}
        ></ha-icon>
      </span>
    `}renderSelector(){const t=this.getSelectedTarget(),e=this.getSelectedIndex(),i=this.getTargetLabel(t);return B`
      <div class="group-selector">
        <div class="group-header-content">
          <div class="header__main">
            ${this.renderHeaderIcon(t)}
            <div class="group-title header__title" title=${i}>${i}</div>
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
          <span class="group-count">${e+1} / ${this.targets.length}</span>
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
    `}render(){return this.config?B`
      <div class=${this.getGroupCardClasses()} style=${this.getGroupCardStyle()}>
        ${this.renderSelector()}
        <div
          class=${"embedded-card-host"+(this.cardFading?" fading":"")}
        ></div>
      </div>
    `:B`<ha-card></ha-card>`}}i([pt({attribute:!1})],Ae.prototype,"hass",void 0),i([mt()],Ae.prototype,"config",void 0),i([mt()],Ae.prototype,"targets",void 0),i([mt()],Ae.prototype,"selectedEntity",void 0),i([mt()],Ae.prototype,"menuOpen",void 0),i([mt()],Ae.prototype,"cardFading",void 0);const ke=(t,e,i,o)=>{if("length"===i||"prototype"===i)return;if("arguments"===i||"caller"===i)return;const a=Object.getOwnPropertyDescriptor(t,i),r=Object.getOwnPropertyDescriptor(e,i);!ze(a,r)&&o||Object.defineProperty(t,i,r)},ze=function(t,e){return void 0===t||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},Ce=(t,e)=>`/* Wrapped ${t}*/\n${e}`,Ee=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Te=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");function Oe(t,e,{ignoreNonConfigurable:i=!1}={}){const{name:o}=t;for(const o of Reflect.ownKeys(e))ke(t,e,o,i);return((t,e)=>{const i=Object.getPrototypeOf(e);i!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,i)})(t,e),((t,e,i)=>{const o=""===i?"":`with ${i.trim()}() `,a=Ce.bind(null,o,e.toString());Object.defineProperty(a,"name",Te);const{writable:r,enumerable:n,configurable:s}=Ee;Object.defineProperty(t,"toString",{value:a,writable:r,enumerable:n,configurable:s})})(t,e,o),t}const Ne=(t,e={})=>{if("function"!=typeof t)throw new TypeError(`Expected the first argument to be a function, got \`${typeof t}\``);const{wait:i=0,maxWait:o=Number.POSITIVE_INFINITY,before:a=!1,after:r=!0}=e;if(i<0||o<0)throw new RangeError("`wait` and `maxWait` must not be negative.");if(!a&&!r)throw new Error("Both `before` and `after` are false, function wouldn't be called.");let n,s,c;const l=function(...e){const l=this,d=()=>{s=void 0,n&&(clearTimeout(n),n=void 0),r&&(c=t.apply(l,e))},h=a&&!n;return clearTimeout(n),n=setTimeout(()=>{n=void 0,s&&(clearTimeout(s),s=void 0),r&&(c=t.apply(l,e))},i),o>0&&o!==Number.POSITIVE_INFINITY&&!s&&(s=setTimeout(d,o)),h&&(c=t.apply(l,e)),c};return Oe(l,t),l.cancel=()=>{n&&(clearTimeout(n),n=void 0),s&&(clearTimeout(s),s=void 0)},l};var Re;!function(t){t.OFF="off",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.AUTO="auto",t.DRY="dry",t.FAN_ONLY="fan_only"}(Re||(Re={}));const Me=["auto","silent","quiet","low","mid","medium","high","max","turbo","full"];const Ie=[["silent","quiet"],["low"],["mid","medium"],["high"],["max","turbo","full"]],Pe=["mdi:fan-speed-1","mdi:fan-speed-2","mdi:fan-speed-3","st:fan-speed-4","st:fan-speed-5"],je=t=>String(t).toLowerCase().replace(/\s+/g,"_");function He(t,e){const i=je(t),o=new Set(e.map(je)),a=Ie.filter(t=>t.some(t=>o.has(t))).findIndex(t=>t.includes(i));return a>=0?Pe[a]:void 0}function Ve(t,{decimals:e=1,fallback:i="N/A",locale:o}={}){if(null===t||""===t||["boolean","undefined"].includes(typeof t))return i;const a=Number(t);return Number.isNaN(a)?i:o?"decimal_comma"===o.number_format||"space_comma"===o.number_format?a.toFixed(e).replace(".",","):"comma_decimal"===o.number_format||"none"===o.number_format?a.toFixed(e):new Intl.NumberFormat("system"===o.number_format?void 0:o.language,{minimumFractionDigits:e,maximumFractionDigits:e}).format(a):a.toFixed(e)}const Le=[["heat",/\b(heat|heater|furnace|radiator|boiler|water[_ -]?heater)\b/],["cool",/\b(cool|cooling|ac|a\/c|air[_ -]?conditioner|snowflake)\b/],["dry",/\b(dry|drying|dehumidifier|dehumidify)\b/],["water-percent",/\b(humidifier|humidify|humidity)\b/],["fan",/\b(fan|blower)\b/],["lightbulb",/\b(light|lamp|bulb)\b/]],De={heat:["component.climate.state._.heat","state_attributes.climate.hvac_action.heating"],cool:["component.climate.state._.cool","state_attributes.climate.hvac_action.cooling"],dry:["component.climate.state._.dry","state_attributes.humidifier.action.drying"],fan:["component.fan.entity_component._.name"],lightbulb:["component.light.entity_component._.name"],"water-percent":["component.humidifier.entity_component._.name","state_attributes.humidifier.action.humidifying"]};function Fe(t,e){const i=t.toLowerCase().replace(/[.:]/g," "),o=function(t){return"function"!=typeof t?.localize?[]:Object.entries(De).flatMap(([e,i])=>i.map(e=>t.localize(e)).filter(t=>t&&!i.includes(t)).map(t=>{return[e,(i=String(t),i.toLowerCase().replace(/[.:]/g," "))];var i}))}(e).find(([,t])=>!!t&&(i===t||i.includes(t)));if(o)return o[0];const a=Le.find(([,t])=>t.test(i));return a?.[0]??""}function Ue(t){if("string"!=typeof t||!t)return"";const e=(i=t.replace(/^[a-z]+:/,""),String(i??"").replace(/[^a-z0-9_-]/gi,""));var i;const o=Fe(e.replace(/-/g," "));return o||(["fire","radiator","heat-wave","heating-coil","water-boiler","water-boiler-auto","water-boiler-off"].includes(e)?"heat":["snowflake","air-conditioner"].includes(e)?"cool":"fan"===e?"fan":e.includes("light")?"lightbulb":["water-percent","air-humidifier"].includes(e)||["air-humidifier-off"].includes(e)?"water-percent":e)}function We({icon:t,label:e,entity:i,hass:o}){const a=Ue(t);if(a)return a;const r=function(t){const e=t?.entity_id,i="string"==typeof e?e.split(".")[0]:"",o=t?.attributes?.device_class;return"light"===i?"lightbulb":"fan"===i?"fan":"humidifier"===i?"dehumidifier"===o?"dry":"water-percent":"heat"===o||"heater"===o?"heat":"cold"===o||"cooling"===o?"cool":"moisture"===o||"humidity"===o?"water-percent":""}(i);if(r)return r;return Fe([e,i?.entity_id,i?.attributes?.friendly_name].filter(Boolean).join(" "),o)}function Be(t){return t?`toggle-${t}`:""}function Ge({header:t,toggleEntityChanged:e,entity:i,hass:o,openEntityPopover:a}){if(!1===t)return q;const r=se(i)||i.state;let n=t.icon;"object"==typeof t.icon&&(n=n?.[r]??!1);const s=Boolean(t.slashOffIcon),c=t?.name??!1;return B`
    <header>
      <div class="header__main clickable" @click=${()=>a()}>
        ${function(t,e,i,o=!1){const a=i&&i!==e?` ${i}`:"";return t?B`
        <span
          class="header__icon-wrap ${e}${a} ${o?"slash-off":""}"
        >
          <ha-icon
            class="header__icon ${e}${a}"
            .icon=${t}
          ></ha-icon>
        </span>
      `:q}(n,i.state,r,s)}
        ${function(t){return t?B`<h2 class="header__title">${t}</h2>`:q}(c)}
      </div>
      ${function(t,e){if(!t?.length)return q;const i=t.map(({icon:t,hide_inactive:i,state:o})=>o?B` <ha-icon
      class="fault-icon ${"on"===o.state?"active":i?" hide":""}"
      .icon=${t||o.attributes?.icon}
      @click="${()=>e(o.entity_id)}"
    ></ha-icon>`:q);return B` <div class="faults">${i}</div>`}(t.faults,a)}
      ${function(t,e,i,o){return t?.length?B`
    <div class="header__toggles">
      ${t.map(t=>{const a=t.entity?.entity_id,r=t.entity?.state,n="string"==typeof a?a.split(".")[0]:"",s=Be(We({icon:"string"==typeof t.icon?t.icon:t.entity?.attributes?.icon,label:t.label,entity:t.entity,hass:o}));return B`
          <div
            class="header__toggle ${r||""} ${n?`domain-${n}`:""} ${s}"
          >
            <span
              class="clickable toggle-label ${r||""} ${n?`domain-${n}`:""} ${s}"
              title=${t.label||t.entity?.attributes?.friendly_name}
              @click=${()=>e(a)}
              >${!1!==t.icon?B`<ha-icon .icon=${t.icon}></ha-icon>`:t.label}
            </span>
            <ha-switch
              .checked=${"on"===t.entity?.state}
              @change=${t=>i(t,a)}
            ></ha-switch>
          </div>
        `})}
    </div>
  `:q}(t.toggles,a,e,o)}
    </header>
  `}class qe extends Gt{constructor(t){if(super(t),this.it=q,t.type!==Wt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this._t=void 0,this.it=t;if(t===G)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}qe.directiveName="unsafeHTML",qe.resultType=1;const Ke=Bt(qe);function Ze(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Je(t,e,i){if(!e||"string"!=typeof e)return String(t);const o=String(t);return new RegExp(`${Ze(e)}$`).test(o)?o:`${o}${function(t,e){if(e){const i=e.match(new RegExp(`(\\s*)${Ze(t)}$`));if(i)return i[1]??""}return"%"===t?"":" "}(e,i)}${e}`}var Ye,Xe={exports:{}};function Qe(){return Ye||(Ye=1,function(t){function e(t){var i,o,a=new Error(t);return i=a,o=e.prototype,Object.setPrototypeOf?Object.setPrototypeOf(i,o):i.__proto__=o,a}function i(t,i,o){var a=i.slice(0,o).split(/\n/),r=a.length,n=a[r-1].length+1;throw e(t+=" at line "+r+" col "+n+":\n\n  "+i.split(/\n/)[r-1]+"\n  "+Array(n).join(" ")+"^")}e.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var o=new Function("return this")().Promise,a=!1;try{a=new Function("return (async function(){}).constructor")()}catch(t){if(!(t instanceof SyntaxError))throw t}function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function n(t,e,i){for(var o in e)r(e,o)&&(null==e[o]||"object"!=typeof e[o]||"storage"!==o&&"prefixes"!==o||i?t[o]=e[o]:t[o]=n({},e[o]));return t}var s=/^async +/,c=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,l=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,d=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,h=/[.*+\-?^${}()|[\]\\]/g;function u(t){return h.test(t)?t.replace(h,"\\$&"):t}function p(t,o){o.rmWhitespace&&(t=t.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),c.lastIndex=0,l.lastIndex=0,d.lastIndex=0;var a=o.prefixes,r=[a.h,a.b,a.i,a.r,a.c,a.e].reduce(function(t,e){return t&&e?t+"|"+u(e):e?u(e):t},""),n=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+u(o.tags[1])+")","g"),h=new RegExp("([^]*?)"+u(o.tags[0])+"(-|_)?\\s*("+r+")?\\s*","g"),p=0,m=!1;function g(e,a){var r,u={f:[]},g=0,f="c";function v(e){var a=t.slice(p,e),r=a.trim();if("f"===f)"safe"===r?u.raw=!0:o.async&&s.test(r)?(r=r.replace(s,""),u.f.push([r,"",!0])):u.f.push([r,""]);else if("fp"===f)u.f[u.f.length-1][1]+=r;else if("err"===f){if(r){var n=a.search(/\S/);i("invalid syntax",t,p+n)}}else u[f]=r;p=e+1}for("h"===a||"b"===a||"c"===a?f="n":"r"===a&&(u.raw=!0,a="i"),n.lastIndex=p;null!==(r=n.exec(t));){var y=r[1],b=r[2],_=r[3],w=r[4],x=r[5],$=r.index;if(y)"("===y?(0===g&&("n"===f?(v($),f="p"):"f"===f&&(v($),f="fp")),g++):")"===y?0===--g&&"c"!==f&&(v($),f="err"):0===g&&"|"===y?(v($),f="f"):"=>"===y&&(v($),p+=1,f="res");else if(b)if("/*"===b){var S=t.indexOf("*/",n.lastIndex);-1===S&&i("unclosed comment",t,r.index),n.lastIndex=S+2}else"'"===b?(l.lastIndex=r.index,l.exec(t)?n.lastIndex=l.lastIndex:i("unclosed string",t,r.index)):'"'===b?(d.lastIndex=r.index,d.exec(t)?n.lastIndex=d.lastIndex:i("unclosed string",t,r.index)):"`"===b&&(c.lastIndex=r.index,c.exec(t)?n.lastIndex=c.lastIndex:i("unclosed string",t,r.index));else if(_)return v($),p=$+r[0].length,h.lastIndex=p,m=x,w&&"h"===a&&(a="s"),u.t=a,u}return i("unclosed tag",t,e),u}var f=function r(n,c){n.b=[],n.d=[];var l,d=!1,u=[];function f(t,e){t&&(t=function(t,e,i,o){var a,r;return"string"==typeof e.autoTrim?a=r=e.autoTrim:Array.isArray(e.autoTrim)&&(a=e.autoTrim[1],r=e.autoTrim[0]),(i||!1===i)&&(a=i),(o||!1===o)&&(r=o),"slurp"===a&&"slurp"===r?t.trim():("_"===a||"slurp"===a?t=String.prototype.trimLeft?t.trimLeft():t.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==a&&"nl"!==a||(t=t.replace(/^(?:\n|\r|\r\n)/,"")),"_"===r||"slurp"===r?t=String.prototype.trimRight?t.trimRight():t.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==r&&"nl"!==r||(t=t.replace(/(?:\n|\r|\r\n)$/,"")),t)}(t,o,m,e),t&&(t=t.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),u.push(t)))}for(;null!==(l=h.exec(t));){var v,y=l[1],b=l[2],_=l[3]||"";for(var w in a)if(a[w]===_){v=w;break}f(y,b),p=l.index+l[0].length,v||i("unrecognized tag type: "+_,t,p);var x=g(l.index,v),$=x.t;if("h"===$){var S=x.n||"";o.async&&s.test(S)&&(x.a=!0,x.n=S.replace(s,"")),x=r(x),u.push(x)}else if("c"===$){if(n.n===x.n)return d?(d.d=u,n.b.push(d)):n.d=u,n;i("Helper start and end don't match",t,l.index+l[0].length)}else if("b"===$){d?(d.d=u,n.b.push(d)):n.d=u;var A=x.n||"";o.async&&s.test(A)&&(x.a=!0,x.n=A.replace(s,"")),d=x,u=[]}else if("s"===$){var k=x.n||"";o.async&&s.test(k)&&(x.a=!0,x.n=k.replace(s,"")),u.push(x)}else u.push(x)}if(!c)throw e('unclosed helper "'+n.n+'"');return f(t.slice(p,t.length),!1),n.d=u,n}({f:[]},!0);if(o.plugins)for(var v=0;v<o.plugins.length;v++){var y=o.plugins[v];y.processAST&&(f.d=y.processAST(f.d,o))}return f.d}function m(t,e){var i=p(t,e),o="var tR='';"+(e.useWith?"with("+e.varName+"||{}){":"")+b(i,e)+"if(cb){cb(null,tR)} return tR"+(e.useWith?"}":"");if(e.plugins)for(var a=0;a<e.plugins.length;a++){var r=e.plugins[a];r.processFnString&&(o=r.processFnString(o,e))}return o}function g(t,e){for(var i=0;i<e.length;i++){var o=e[i][0],a=e[i][1];t=(e[i][2]?"await ":"")+"c.l('F','"+o+"')("+t,a&&(t+=","+a),t+=")"}return t}function f(t,e,i,o,a,r){var n="{exec:"+(a?"async ":"")+y(i,e,t)+",params:["+o+"]";return r&&(n+=",name:'"+r+"'"),a&&(n+=",async:true"),n+"}"}function v(t,e){for(var i="[",o=0;o<t.length;o++){var a=t[o];i+=f(e,a.res||"",a.d,a.p||"",a.a,a.n),o<t.length&&(i+=",")}return i+"]"}function y(t,e,i){return"function("+e+"){var tR='';"+b(t,i)+"return tR}"}function b(t,e){for(var i=0,o=t.length,a="";i<o;i++){var r=t[i];if("string"==typeof r)a+="tR+='"+r+"';";else{var n=r.t,s=r.c||"",c=r.f,l=r.n||"",d=r.p||"",h=r.res||"",u=r.b,p=!!r.a;if("i"===n){e.defaultFilter&&(s="c.l('F',"+JSON.stringify(e.defaultFilter)+")("+s+")");var m=g(s,c);!r.raw&&e.autoEscape&&(m="c.l('F','e')("+m+")"),a+="tR+="+m+";"}else if("h"===n)if(e.storage.nativeHelpers.get(l))a+=e.storage.nativeHelpers.get(l)(r,e);else{var y=(p?"await ":"")+"c.l('H','"+l+"')("+f(e,h,r.d,d,p);y+=u?","+v(u,e):",[]",a+="tR+="+g(y+=",c)",c)+";"}else"s"===n?a+="tR+="+g((p?"await ":"")+"c.l('H','"+l+"')({params:["+d+"]},[],c)",c)+";":"e"===n&&(a+=s+"\n")}}return a}var _=function(){function t(t){this.cache=t}return t.prototype.define=function(t,e){this.cache[t]=e},t.prototype.get=function(t){return this.cache[t]},t.prototype.remove=function(t){delete this.cache[t]},t.prototype.reset=function(){this.cache={}},t.prototype.load=function(t){n(this.cache,t,!0)},t}();function w(t,i,o,a){if(i&&i.length>0)throw e((a?"Native":"")+"Helper '"+t+"' doesn't accept blocks");if(o&&o.length>0)throw e((a?"Native":"")+"Helper '"+t+"' doesn't accept filters")}function x(t,e,i,o,a){i(t[e],e).then(function(r){o+=r,e===t.length-1?a(o):x(t,e+1,i,o,a)})}function $(t,e,i,o,a,r){o(e[i],t[e[i]]).then(function(n){a+=n,i===e.length-1?r(a):$(t,e,i+1,o,a,r)})}var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function A(t){return S[t]}var k=new _({}),z=new _({each:function(t,e){var i="",o=t.params[0];if(w("each",e,!1),t.async)return new Promise(function(e){x(o,0,t.exec,i,e)});for(var a=0;a<o.length;a++)i+=t.exec(o[a],a);return i},foreach:function(t,e){var i=t.params[0];if(w("foreach",e,!1),t.async)return new Promise(function(e){$(i,Object.keys(i),0,t.exec,"",e)});var o="";for(var a in i)r(i,a)&&(o+=t.exec(a,i[a]));return o},include:function(t,i,o){w("include",i,!1);var a=o.storage.templates.get(t.params[0]);if(!a)throw e('Could not fetch template "'+t.params[0]+'"');return a(t.params[1],o)},extends:function(t,i,o){var a=t.params[1]||{};a.content=t.exec();for(var r=0;r<i.length;r++){var n=i[r];a[n.name]=n.exec()}var s=o.storage.templates.get(t.params[0]);if(!s)throw e('Could not fetch template "'+t.params[0]+'"');return s(a,o)},useScope:function(t,e){return w("useScope",e,!1),t.exec(t.params[0])}}),C=new _({if:function(t,e){w("if",!1,t.f,!0);var i="if("+t.p+"){"+b(t.d,e)+"}";if(t.b)for(var o=0;o<t.b.length;o++){var a=t.b[o];"else"===a.n?i+="else{"+b(a.d,e)+"}":"elif"===a.n&&(i+="else if("+a.p+"){"+b(a.d,e)+"}")}return i},try:function(t,i){if(w("try",!1,t.f,!0),!t.b||1!==t.b.length||"catch"!==t.b[0].n)throw e("native helper 'try' only accepts 1 block, 'catch'");var o="try{"+b(t.d,i)+"}",a=t.b[0];return o+"catch"+(a.res?"("+a.res+")":"")+"{"+b(a.d,i)+"}"},block:function(t,e){return w("block",t.b,t.f,!0),"if(!"+e.varName+"["+t.p+"]){tR+=("+y(t.d,"",e)+")()}else{tR+="+e.varName+"["+t.p+"]}"}}),E=new _({e:function(t){var e=String(t);return/[&<>"']/.test(e)?e.replace(/[&<>"']/g,A):e}}),T={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(t,i){if("H"===t){var o=this.storage.helpers.get(i);if(o)return o;throw e("Can't find helper '"+i+"'")}if("F"===t){var a=this.storage.filters.get(i);if(a)return a;throw e("Can't find filter '"+i+"'")}},async:!1,storage:{helpers:z,nativeHelpers:C,filters:E,templates:k},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function O(t,e){var i={};return n(i,T),e&&n(i,e),t&&n(i,t),i.l.bind(i),i}function N(t,i){var o,r=O(i||{}),n=Function;if(r.async){if(!a)throw e("This environment doesn't support async/await");n=a}if(r.varName&&!1===(o=r.varName,/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(o)))throw e("options.varName must be a valid JS identifier");try{return new n(r.varName,"c","cb",m(t,r))}catch(i){throw i instanceof SyntaxError?e("Bad template syntax\n\n"+i.message+"\n"+Array(i.message.length+1).join("=")+"\n"+m(t,r)):i}}function R(t,e){var i;return e.cache&&e.name&&e.storage.templates.get(e.name)?e.storage.templates.get(e.name):(i="function"==typeof t?t:N(t,e),e.cache&&e.name&&e.storage.templates.define(e.name,i),i)}T.l.bind(T),t.compile=N,t.compileScope=b,t.compileScopeIntoFunction=y,t.compileToString=m,t.defaultConfig=T,t.filters=E,t.getConfig=O,t.helpers=z,t.nativeHelpers=C,t.parse=p,t.render=function(t,i,a,r){var n=O(a||{});if(!n.async)return R(t,n)(i,n);if(!r){if("function"==typeof o)return new o(function(e,o){try{e(R(t,n)(i,n))}catch(t){o(t)}});throw e("Please provide a callback function, this env doesn't support Promises")}try{R(t,n)(i,n,r)}catch(t){return r(t)}},t.templates=k,Object.defineProperty(t,"__esModule",{value:!0})}(Xe.exports)),Xe.exports}var ti=Qe();ti.defaultConfig.autoEscape=!1,ti.filters.define("icon",t=>`<ha-icon icon="${t}"></ha-icon>`),ti.filters.define("join",(t,e=", ")=>t.join(e)),ti.filters.define("css",(t,e)=>`<span style="${Object.entries(e).reduce((t,[e,i])=>`${t}${e}:${i};`,"")}">${t}</span>`),ti.filters.define("debug",t=>{try{return JSON.stringify(t)}catch{return`Not able to read valid JSON object from: ${t}`}});const ei="simple-thermostat-timer-remaining";function ii(t){return String(t).padStart(2,"0")}class oi extends lt{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.syncTicker()}disconnectedCallback(){this.clearTicker(),super.disconnectedCallback()}updated(){this.syncTicker()}clearTicker(){this.tick&&(window.clearInterval(this.tick),this.tick=void 0)}syncTicker(){const t="active"===this.stateObj?.state,e=this.stateObj?.attributes?.finishes_at,i=e?Date.parse(e):NaN,o=!Number.isNaN(i)&&i>Date.now();t&&o&&!this.tick?this.tick=window.setInterval(()=>{i<=Date.now()&&this.clearTicker(),this.requestUpdate()},1e3):t&&o||!this.tick||this.clearTicker()}getValue(){const t=this.stateObj;if(!t)return"";if("active"===t.state&&t.attributes?.finishes_at){const e=Date.parse(t.attributes.finishes_at);if(!Number.isNaN(e))return function(t){const e=Math.max(0,Math.ceil(t)),i=Math.floor(e/3600),o=Math.floor(e%3600/60),a=e%60;return i>0?`${i}:${ii(o)}:${ii(a)}`:`${o}:${ii(a)}`}((e-Date.now())/1e3)}return"paused"===t.state&&t.attributes?.remaining?t.attributes.remaining:"function"==typeof this.hass?.formatEntityState?this.hass.formatEntityState(t):t.state}render(){return B`${this.getValue()}`}}i([pt({attribute:!1})],oi.prototype,"stateObj",void 0),i([pt({attribute:!1})],oi.prototype,"hass",void 0),customElements.get(ei)||customElements.define(ei,oi);const ai=["automation","fan","humidifier","input_boolean","light","switch"];function ri(t){return String(t??"").replace(/[^a-z0-9_-]/gi,"")}function ni({hide:t=!1,hass:e,state:i,details:o,localize:a,openEntityPopover:r}){if(t||void 0===i)return;const{type:n,heading:s,icon:c,unit:l,decimals:d,tooltip:h,entity:u,template:p,attribute:m,variables:g,config:f,separator:v=!0}=o,y="string"==typeof l&&l.length>0,b="object"==typeof i?i.entity_id:u,_=b&&"function"==typeof r,w=h||("object"==typeof i?i?.attributes?.friendly_name||i?.entity_id:u?e.states?.[u]?.attributes?.friendly_name||u:void 0);let x,$="",S="",A=!1;if(p&&"object"==typeof i){const t=function({template:t,stateObj:e,attribute:i,hass:o,config:a={},variables:r={},localize:n=t=>t}){const[s]=String(e?.entity_id??"").split("."),c=e?.attributes??{},l=i&&Object.prototype.hasOwnProperty.call(c,i)?c[i]:e?.state,d=i&&"function"==typeof o.formatEntityAttributeValue?o.formatEntityAttributeValue(e,i):"function"==typeof o.formatEntityState?o.formatEntityState(e):n(String(l),`component.${s}.state._.`),h=o.selectedLanguage||o.language,u="ui.card.climate.",p=Object.entries(o.resources?.[h]??{}).reduce((t,[e,i])=>(String(e).startsWith(u)&&(t[String(e).replace(u,"")]=i),t),{});return ti.filters.define("formatNumber",(t,e={decimals:a.decimals})=>String(Ve(t,{...e,locale:o.locale}))),ti.filters.define("relativetime",t=>`<ha-relative-time fwd-datetime=${t} with-hass></ha-relative-time>`),ti.filters.define("translate",(t,i="")=>!i&&"function"==typeof o.formatEntityAttributeValue&&"string"==typeof t&&t in c?o.formatEntityAttributeValue(e,t):n(t,i||"climate"!==s&&"humidifier"!==s?i:`state_attributes.${s}.${t}`)),ti.render(t,{...c,state:{raw:l,text:d},ui:p,v:r},{useWith:!0})}({template:p,stateObj:i,attribute:m,hass:e,config:f,variables:g,localize:a});x=B`<div
      class="entity-value ${_?"clickable":""}"
      title=${w}
      @click="${_?()=>r(b):null}"
    >
      ${Ke(Je(t,!!y&&l))}
    </div>`}else if("relativetime"===n)x=B`
      <div class="entity-value">
        <ha-relative-time .datetime=${i} .hass=${e}></ha-relative-time>
      </div>
    `;else if("object"==typeof i){const[t]=i.entity_id.split(".");$=t,S=i.state,A=ai.includes(t);const o=[A&&"toggle-entity",$&&`domain-${ri($)}`,S&&`state-${ri(S)}`,A&&Be(We({icon:c||i.attributes?.icon,label:s||i.attributes?.friendly_name,entity:i,hass:e}))].filter(Boolean).join(" ");if("timer"===t)x=B`
        <div
          class="entity-value ${_?"clickable":""}"
          title=${w}
          @click="${_?()=>r(i.entity_id):null}"
        >
          <simple-thermostat-timer-remaining
            .stateObj=${i}
            .hass=${e}
          ></simple-thermostat-timer-remaining>
        </div>
      `;else if(A)x=B`
        <div class="entity-value ${o}">
          <ha-switch
            .checked=${"on"===i.state}
            @change=${t=>function(t,e,i){const o="turn_"+(i?"on":"off");"function"==typeof t.performAction?t.performAction({action:`homeassistant.${o}`,data:{entity_id:e}}):t.callService("homeassistant",o,{entity_id:e})}(e,i.entity_id,t.target.checked)}
          ></ha-switch>
        </div>
      `;else{const o=["component",t,"state",i.attributes?.device_class??"_",""].join(".");let n="function"==typeof e.formatEntityState?e.formatEntityState(i):a(i.state,o);"number"==typeof d&&(n=Ve(i.state,{decimals:d,locale:e.locale}));const s=i.attributes.unit_of_measurement??"",h="humidity"===i.attributes?.device_class||i.entity_id?.includes("humidity")||"mdi:water-percent"===c?"%":"";x=B`
        <div
          class="entity-value ${_?"clickable":""}"
          title=${w}
          @click="${_?()=>r(i.entity_id):null}"
        >
          ${Je(n,y?l:s||h,n)}
        </div>
      `}}else{let t="number"==typeof d?Ve(i,{decimals:d,locale:e.locale}):i;x=B`<div
      class="entity-value ${_?"clickable":""}"
      title=${w||q}
      @click=${_?()=>r(b):null}
    >
      ${Je(t,!!y&&l)}
    </div>`}if(!1===s)return x;const k=s||w,z=["entity-heading",_&&"clickable",A&&"toggle-entity",$&&`domain-${ri($)}`,S&&`state-${ri(S)}`,A&&Be(We({icon:c||i?.attributes?.icon,label:"string"==typeof s?s:i?.attributes?.friendly_name,entity:i,hass:e}))].filter(Boolean).join(" "),C=c?B`
        <ha-icon
          icon="${c}"
          title=${k}
          @click=${_?()=>r(b):null}
        ></ha-icon>
      `:` ${s}${!1===v?"":":"} `;return B`<div
      class=${z}
      title=${c?k:q}
      @click=${_?()=>r(b):null}
    >
      ${C}
    </div>
    ${x} `}function si({_hide:t,entity:e,unit:i,hass:o,entities:a,config:r,localize:n,openEntityPopover:s,adapter:c}){const l=r.current_value_entity,d=l?o.states[l]:e,h=l?d?.state:c.getCurrentValue(e.attributes),u=l?d?.attributes?.unit_of_measurement??i:c.getCurrentValueUnit?.(e.attributes,o.config)??i,p=r?.layout?.entities?.labels??!0,m=!1!==r?.layout?.entities?.separator,g=ce(e,o,n),f=[ni({hide:t.temperature||null==h,state:Je(Ve(h,{...r,locale:o.locale}),u),hass:o,openEntityPopover:s,details:{heading:!!p&&(r?.label?.temperature??n("ui.card.climate.currently")),tooltip:d?.attributes?.friendly_name??l,entity:l??r.entity,separator:m}}),ni({hide:t.state,state:g,hass:o,openEntityPopover:s,details:{heading:!!p&&(r?.label?.state??n("ui.panel.lovelace.editor.card.generic.state")),entity:r.entity,separator:m}}),...a.map(({name:t,state:e,show:i,...a})=>ni({hide:!1===i,state:e,hass:o,localize:n,openEntityPopover:s,details:{...a,heading:p&&t,tooltip:t,config:r,variables:r.variables,separator:m}}))||null].filter(t=>null!==t);return function(t,e){const{type:i,labels:o}=t?.layout?.entities??{type:"table",labels:!0},a=[o?"with-labels":"without-labels","list"===i?"as-list":"as-table",1===e.filter(t=>null!=t).length?"single-row":""];return B` <div class="entities ${a.join(" ")}">${e}</div> `}(r,f)}const ci={"st:fan-speed-4":{path:"M16 15V21H19V23H21V15H19V19H18V15H16Z"},"st:fan-speed-5":{path:"M16 15H21V17H18V18H19C20.11 18 21 18.89 21 20V21C21 22.11 20.11 23 19 23H16V21H19V20H16V15Z"}};function li({state:t,entity:e,hass:i,mode:o,adapter:a,modeOptions:r,localize:n,setMode:s}){const{type:c,hide_when_off:l,mode:d="none",list:h,name:u,heading:p,icons:m}=o;if(0===h.length||l&&t===Re.OFF)return null;const g="hvac"===c?null:a.getModePayloadKey(c);let f=g?`state_attributes.${a.getLocalizationDomain()}.${g}.`:"";"hvac"===c?f="component.climate.state._.":"vane_horizontal"===c||"vane_vertical"===c?f="":"direction"!==c&&"oscillating"!==c&&"mode"!==c||(f="");const v=(t,e=!1)=>t?!1===r?.icons||!1===m||["swing","swing_horizontal","swing_vertical","vane_horizontal","vane_vertical"].includes(c)&&!0!==m&&!e?null:function(t){return t?B` <ha-icon class="mode-icon" .icon=${t}></ha-icon> `:null}(t):null,y=(t,e)=>{const i=n(t);return i&&i!==t?i:e},b="hvac"==c?"operation":`${c}_mode`;let _;_="vane_horizontal"===c?"Vane Horizontal":"vane_vertical"===c?"Vane Vertical":"swing_horizontal"===c?y("ui.card.climate.swing_horizontal_mode","Swing Horizontal"):"swing_vertical"===c?y("ui.card.climate.swing_vertical_mode","Swing Vertical"):"direction"===c?"Direction":"oscillating"===c?"Oscillating":"mode"===c?"Mode":"preset"===c?!0===p&&y(`ui.card.${a.getLocalizationDomain()}.${b}`,"Preset"):"state"===c?!0===p&&"State":y(`ui.card.${a.getLocalizationDomain()}.${b}`,"hvac"===c?"Operation":"Mode");const w=!1!==u&&(u||_),x="fan"===c||"preset"===c&&"fan"===a.getLocalizationDomain()?"Fan speed":"swing"===c?"Swing mode":"swing_horizontal"===c?y("ui.card.climate.swing_horizontal_mode","Horizontal swing"):"swing_vertical"===c?y("ui.card.climate.swing_vertical_mode","Vertical swing"):"vane_horizontal"===c?"Horizontal vane":"vane_vertical"===c?"Vertical vane":"",$=(!0===r?.headings||!0===p)&&!1!==w,S="preset"===c&&"fan"===a.getLocalizationDomain(),A=("hvac"===c||"state"===c)&&h.length<=3,k="preset"===c&&h.length<=4||["swing","swing_horizontal","swing_vertical","vane_horizontal","vane_vertical"].includes(c),z=h.length>4||"hvac"===c&&h.length>3||"fan"===c&&h.length>3;return B`
    <div
      class="modes ${c} ${S?"fan-preset":""} ${$?"heading":""} ${k?"compact":""} ${z?"dense":""} ${A?"sparse":""}"
      role="group"
      aria-label=${w||c}
    >
      ${$?B` <div class="mode-title">${w}</div> `:""}
      ${h.map(({value:t,icon:o,iconConfigured:a,name:l})=>{const h=(t=>String(t).replace(/[^a-z0-9_-]/gi,""))(t),u=((t,o)=>!1===t||!1===r?.names?null:t!==o?f?n(t,f):t:"hvac"!==c&&"state"!==c||"function"!=typeof i?.formatEntityState?g&&e&&"function"==typeof i?.formatEntityAttributeValue?i.formatEntityAttributeValue(e,g,o):f?n(t,f):t:i.formatEntityState({...e,state:o}))(l,t);return B`
          <div
            class="mode-item ${h} ${t===d?"active":""}"
            role="button"
            tabindex="0"
            aria-pressed=${t===d?"true":"false"}
            aria-label=${l||t}
            title=${u?q:x||q}
            @click=${()=>s(c,t)}
            @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),s(c,t))}}
          >
            ${v(o,a)}
            ${u?B`<span class="mode-label">${u}</span>`:null}
          </div>
        `})}
    </div>
  `}window.customIconsets=window.customIconsets||{},window.customIconsets.st||(window.customIconsets.st=async t=>{const e=ci[`st:${t}`];return e?{path:`M13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19M12 13C11.43 13 11 12.55 11 12S11.43 11 12 11C12.54 11 13 11.45 13 12S12.54 13 12 13${e.path}`}:{path:""}});const di=Object.values(gt),hi="hass:chevron-up",ui="hass:chevron-down",pi="mdi:plus",mi="mdi:minus",gi={temperature:!1,state:!1},fi=[gt.PRESET,gt.FAN,gt.HVAC,gt.SWING,gt.SWING_HORIZONTAL,gt.SWING_VERTICAL,gt.VANE_HORIZONTAL,gt.VANE_VERTICAL,gt.DIRECTION,gt.OSCILLATING,gt.STATE];function vi(t){return t.toLowerCase().replace(/\s+/g,"_")}function yi(t,e){const i=vi(t),o=e[t];if(void 0!==o)return o;if(void 0!==e[i])return e[i];const a=Object.entries(e).find(([t])=>!t.startsWith("_")&&vi(t)===i);return a?.[1]}function bi(t,e,i,o={}){let a=e[i.getModeAttribute(t)];return t===gt.STATE?a=["off","on"]:t===gt.DIRECTION&&e.direction?a=["forward","reverse"]:t===gt.OSCILLATING&&"boolean"==typeof e.oscillating&&(a=[!1,!0]),Array.isArray(a)?function(t,e){const i=Object.keys(e).filter(t=>!t.startsWith("_"));if(0===i.length)return t;const o=new Map;t.forEach(t=>{o.set(vi(String(t)),t)});const a=new Set,r=[];return i.forEach(t=>{const e=vi(t);o.has(e)&&!a.has(e)&&(r.push(o.get(e)),a.add(e))}),t.forEach(t=>{const e=vi(String(t));a.has(e)||(r.push(t),a.add(e))}),r}(a,o).filter(e=>function(t,e,i){const o=yi(String(e),i);if("object"==typeof o)return!1!==o.include;const a=Object.keys(i).some(t=>!t.startsWith("_")),r=t===gt.PRESET;return o??!(r&&a)}(t,e,o)).map(e=>{const i=String(e),r=yi(i,o),n="object"==typeof r?r:{},{name:s,...c}=n,l=!1!==s&&("string"==typeof s?s:function(t){const e=String(t);return{low:"Low",mid:"Mid",medium:"Medium",high:"High",max:"Max",turbo:"Turbo",auto:"Auto"}[e.toLowerCase().replace(/\s+/g,"_")]??e}(i));return{...c,icon:n.icon??(t===gt.FAN?He(i,a):void 0)??me(i),iconConfigured:void 0!==n.icon,value:i,name:l}}):[]}function _i(t,e,i,o){return di.includes(t)&&(t===gt.STATE?"fan"===e||"humidifier"===e:void 0!==i[o.getModeAttribute(t)])}function wi(t,e,i,o){return t.filter(t=>_i(t,e,i,o)).map(t=>({type:t,hide_when_off:!1,list:bi(t,i,o)}))}class xi extends lt{constructor(){super(...arguments),this.modes=[],this._hass={},this.entities=[],this.showEntities=!0,this.name="",this.stepSize=.5,this._values={},this._updatingValues=!1,this._hide=gi,this._updatingValuesTimeout=null,this._holdTimer=null,this._holdFired=!1,this._clickCount=0,this._clickTimer=null,this._debouncedSetTemperature=Ne(t=>{const{domain:e,service:i,data:o={}}=this.service;this._callAction(`${e}.${i}`,{entity_id:this.config.entity,...o,...t})},{wait:500}),this.localize=(t,e="")=>{const i=`${e}${t}`;return this._hass.localize?.(i)||t},this.toggleEntityChanged=(t,e)=>{if(!this.header||!e)return;const i=t.target;this._callAction("homeassistant.turn_"+(i.checked?"on":"off"),{entity_id:e})},this.setMode=(t,e)=>{if(t&&e){const i=$t(this.config.entity);if(t===gt.STATE)return this._callAction(`${i.getLocalizationDomain()}.turn_${e}`,{entity_id:this.config.entity}),void vt(this,"haptic","light");const o=i.transformModePayloadValue?.(t,e)??e;this._callAction(`${i.getLocalizationDomain()}.${i.getModeService(t)}`,{entity_id:this.config.entity,[i.getModePayloadKey(t)]:o}),vt(this,"haptic","light")}else vt(this,"haptic","failure")},this.openEntityPopover=(t=null)=>{vt(this,"hass-more-info",{entityId:t||this.config.entity})},this._onActionPointerDown=t=>{0!==t.button&&"mouse"===t.pointerType||(this._holdFired=!1,this._holdTimer&&clearTimeout(this._holdTimer),this._holdTimer=setTimeout(()=>{this._holdFired=!0,this._holdTimer=null,this._dispatchAction("hold")},xi.HOLD_MS))},this._onActionPointerUp=()=>{this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null)},this._onActionClick=t=>{t.preventDefault(),this._holdFired?this._holdFired=!1:(this._clickCount+=1,1===this._clickCount?(this._clickTimer&&clearTimeout(this._clickTimer),this._clickTimer=setTimeout(()=>{this._clickCount=0,this._clickTimer=null,this._dispatchSetpointTap()},xi.DOUBLE_TAP_MS)):(this._clickTimer&&clearTimeout(this._clickTimer),this._clickTimer=null,this._clickCount=0,this._dispatchAction("double_tap")))},this._onSetpointKeyDown=t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._dispatchSetpointTap())}}static get styles(){return ft}_callAction(t,e){if("function"==typeof this._hass.callService){const[i,o]=t.split(".");this._hass.callService(i,o,e)}else"function"==typeof this._hass.performAction&&this._hass.performAction({action:t,data:e})}static getConfigElement(){return window.document.createElement(`${t}-editor`)}static getStubConfig(t){return{entity:Object.keys(t.states??{}).find(t=>t.startsWith("climate.")||t.startsWith("fan.")||t.startsWith("humidifier."))??""}}setConfig(t){this.config=bt({decimals:1,...t}),this._hass?.states&&this.updateFromHass(this._hass)}set hass(t){if(t?.states&&(this._hass=t),!this.config?.entity)return;if(!t?.states)return;t.states[this.config.entity]&&this.updateFromHass(t)}updateFromHass(t){const e=t.states[this.config.entity];this.entity!==e&&(this.entity=e);const i=$t(this.config.entity);this.header=ge(this.config.header,e,t,!1!==this.config.enhanced_visuals),this.service=function(t,e=wt){return t||e.getSetpointService()}(this.config?.service??!1,i);const o=e.attributes;let a=function(t,e,i=wt,o){return!1===t?{}:t?Object.entries(t).reduce((t,[i,a])=>{if(a?.hide)return t;const r=Array.isArray(a?.hide_when)?a.hide_when:a?.hide_when?[a.hide_when]:[];return o&&r.includes(o)||(t[i]=e?.[i]),t},{}):i.getSetpoints(e)}(this.config?.setpoints??null,o,i,e.state);this._updatingValues&&function(t,e){const i=Object.keys(t);return i.length===Object.keys(e).length&&!i.some(i=>t?.[i]!==e?.[i])}(a,this._values)?(this._updatingValues=!1,this._updatingValuesTimeout&&(clearTimeout(this._updatingValuesTimeout),this._updatingValuesTimeout=null)):this._updatingValues||(this._values=a);const r=this.config.entity.split(".")[0],n=function(t){return t.some(({type:t})=>t===gt.STATE)?t.map(t=>t.type&&t.type!==gt.STATE?{...t,list:t.list?.filter(({value:t})=>"off"!==t)??[]}:t):t}(function(t,e,i,o){if(!1===t.control)return[];if(Array.isArray(t.control))return wi(t.control,e,i,o);if(t.control&&"object"==typeof t.control){const a=Object.entries(t.control);if(a.length>0)return a.filter(([,t])=>!1!==t).filter(([t])=>_i(t,e,i,o)).map(([t,e])=>{const{_name:a,_hide_when_off:r,_icons:n,_heading:s,...c}=!0===e?{}:e;return{type:t,hide_when_off:r,icons:n,heading:s,name:a,preserve_option_order:Object.keys(c).length>0,list:bi(t,i,o,c)}})}return wi(o.getDefaultControl(),e,i,o)}(this.config,r,o,i)),s=(c=this.config.control,Array.isArray(c)||c&&"object"==typeof c&&Object.keys(c).length>0?n:function(t,e){if("fan"!==e&&"climate"!==e)return t;const i=t=>{const e=fi.indexOf(t);return-1===e?fi.length:e};return[...t].sort((t,e)=>i(t.type)-i(e.type))}(n,r));var c;this.modes=s.map(t=>{const a=t.preserve_option_order?t.list:t.type===gt.HVAC?function(t){const e=Object.values(Re),i=[],o=[];return t.forEach(t=>{const a=e.indexOf(t.value);a>=0?i[a]=t:o.push(t)}),[...i.filter(Boolean),...o]}(t.list):t.type===gt.FAN?function(t){const e=[],i=[];return t.forEach(t=>{const o=Me.indexOf(t.value.toLowerCase());o>=0?e[o]=t:i.push(t)}),[...e.filter(Boolean),...i]}(t.list):t.list,r=t.type===gt.HVAC||t.type===gt.STATE?e.state:o[i.getModePayloadKey(t.type)];return{...t,list:a,mode:r}});const{step:l}=i.getRange(o);this.stepSize=Number(this.config.step_size??l??.5),this._hide={...gi,...this.config.hide??{}};const d=this.config.entities??[];!1===d?this.showEntities=!1:d&&(this.entities=d.map(({name:e,entity:i,attribute:o,template:a,unit:r="",...n})=>{let s;const c=[e];return i?(s=t.states[i],c.push(s?.attributes?.friendly_name),o&&!a&&(s=s?.attributes?.[o])):o&&o in(this.entity.attributes??{})&&(s=a?this.entity:this.entity.attributes[o],c.push(o)),c.push(i),{...n,name:c.find(t=>!!t),state:s,entity:i,attribute:o,template:a,unit:r}}))}render({_hide:t,_values:e,_updatingValues:i,config:o,entity:a}=this){if(!o)return B`<ha-card class="loading"></ha-card>`;const r=[];if(this.stepSize<1&&0===this.config.decimals&&r.push(B`
        <ha-alert alert-type="warning">
          Decimals is set to 0 and step_size is lower than 1. Decrementing a
          setpoint will likely not work. Change one of the settings to clear
          this warning.
        </ha-alert>
      `),!a&&!this._hass?.states)return B`<ha-card
        class="loading ${!1===o.enhanced_visuals?"standard-visuals":""}"
      ></ha-card>`;if(!a)return B`
        <ha-card
          class="missing-entity ${!1===o.enhanced_visuals?"standard-visuals":""}"
        >
          <ha-alert alert-type="error">
            Entity not available: ${o.entity}
          </ha-alert>
        </ha-card>
      `;const n=$t(o.entity),s=se(a),{min:c,max:l}=n.getRange(a.attributes),d=this.getUnit(),h=!1===this.config.enhanced_visuals?this.config?.layout?.step??"column":this.config?.layout?.step??"row",u="row"===h,p=o.entity.split(".")[0],m=Object.keys(e).length,g=["unavailable","unknown"].includes(a.state),f=t=>"string"==typeof t?t.replace(/[^a-z0-9_-]/gi,""):"",v=[!this.header&&"no-header",`domain-${f(p)}`,`state-${f(a.state)}`,!1===this.config.enhanced_visuals&&"standard-visuals",f(s),g&&f(a.state)].filter(t=>!!t),y=["body",this.showEntities&&"has-entities",`step-${h}`,`setpoint-count-${m}`].filter(t=>!!t),b=function(t,e){if("fan"!==t)return"";const i=Number(e?.percentage);if(Number.isNaN(i))return"";const o=Math.min(Math.max(i,0),100);return`--st-fan-spin-duration: ${Math.max(.9,3.2-o/100*2.1).toFixed(2)}s;`}(p,a.attributes),_=this.showEntities?si({_hide:t,unit:d,hass:this._hass,entity:this.entity,entities:this.entities,config:this.config,adapter:n,localize:this.localize,openEntityPopover:this.openEntityPopover}):"";return B`
      <ha-card class="${v.join(" ")}" style=${b}>
        ${o.styles?B`<style>
              ${o.styles}
            </style>`:q}
        ${r}
        ${Ge({header:this.header,hass:this._hass,toggleEntityChanged:this.toggleEntityChanged,entity:this.entity,openEntityPopover:this.openEntityPopover})}
        <section class="${y.join(" ")}">
          ${_}
          ${this.renderSetpoints({values:e,minValue:c,maxValue:l,unit:d,row:u,stepLayout:h,isOff:a.state===Re.OFF,disableSteppers:"climate"===p&&a.state===Re.OFF&&!0===this.config.disable_setpoint_change_when_off})}
        </section>

        ${this.modes.length?B`
              <section class="controls">
                ${this.modes.map(t=>li({state:a.state,entity:a,hass:this._hass,mode:t,adapter:n,localize:this.localize,modeOptions:this.config?.layout?.mode??{},setMode:this.setMode}))}
              </section>
            `:q}
      </ha-card>
    `}renderSetpoints({values:t,minValue:e,maxValue:i,unit:o,row:a,stepLayout:r,isOff:n,disableSteppers:s}){return!0===this.config.hide_setpoint?q:Object.entries(t).map(([t,c])=>this.renderSetpointControl({field:t,value:c,minValue:e,maxValue:i,unit:o,row:a,stepLayout:r,isOff:n,disableSteppers:s}))}renderSetpointControl(t){const{row:e,stepLayout:i}=t,o=this.renderSetpointStepper(t,"decrease"),a=this.renderSetpointValue(t),r=this.renderSetpointStepper(t,"increase"),n=this.renderSetpointLabel(t);return B`
      <div class="current-wrapper ${i}">
        ${e?B`${o}${a}${r}`:B`${r}${a}${o}`}
        ${n}
      </div>
    `}renderSetpointLabel({field:t}){if(!0===this.config.hide?.setpoint_label)return q;const e=this.config.label?.setpoint,i=e??this._hass.localize?.(`ui.card.${$t(this.config.entity).getLocalizationDomain()}.target`)??this._hass.localize?.("ui.card.climate.target_temperature")??this.localize(t,"state_attributes.climate.");return B`<div class="current--label">${i}</div>`}renderSetpointStepper({field:t,value:e,minValue:i,maxValue:o,row:a,disableSteppers:r},n){const s=Number(e),c=!Number.isNaN(s),l="decrease"===n;return B`
      <button
        type="button"
        ?disabled=${r||(l?null===e||null!==i&&c&&s<=i:null===e&&null===i||null!==e&&null!==o&&c&&s>=o)}
        class="thermostat-trigger ${n}"
        aria-label=${`${l?"Decrease":"Increase"} ${t}`}
        @click="${()=>l?this.setTemperature(-this.stepSize,t):null===e&&null!==i?this.setTemperature(0,t,i):this.setTemperature(this.stepSize,t)}"
      >
        <ha-icon .icon=${l?a?mi:ui:a?pi:hi}></ha-icon>
      </button>
    `}renderSetpointValue({field:t,value:e,unit:i,isOff:o}){const a=["string","number"].includes(typeof e)&&""!==e&&null!==e,r=!1!==i&&a,n=o&&!a,s=n?"OFF":Ve(e,{...this.config,locale:this._hass.locale});return B`
      <h3
        @pointerdown=${this._onActionPointerDown}
        @pointerup=${this._onActionPointerUp}
        @pointercancel=${this._onActionPointerUp}
        @click=${this._onActionClick}
        @keydown=${this._onSetpointKeyDown}
        role="button"
        tabindex="0"
        aria-label=${`${t}: ${s}${r?` ${i}`:""}`}
        class=${["current--value",n&&"current--off",this._updatingValues&&"updating"].filter(Boolean).join(" ")}
      >
        ${Je(s,!!r&&i)}
      </h3>
    `}setTemperature(t,e,i){this._updatingValues=!0,this._updatingValuesTimeout&&clearTimeout(this._updatingValuesTimeout),this._updatingValuesTimeout=setTimeout(()=>{this._updatingValues=!1,this._updatingValuesTimeout=null},1e4);const o=i??this._values[e],a=Number(o)+t,{decimals:r}=this.config;this._values={...this._values,[e]:+Ve(a,{decimals:r})},this._debouncedSetTemperature(this._values)}_dispatchSetpointTap(){this.config?.tap_action?this._dispatchAction("tap"):this.openEntityPopover(this.config.entity)}_dispatchAction(t){const e="tap"===t?"tap_action":"hold"===t?"hold_action":"double_tap_action",i=this.config?.[e]??("tap"===t?{action:"more-info"}:{action:"none"});vt(this,"hass-action",{config:this.config,action:i})}getCardSize(){return 3}getUnit(){if(["boolean","string"].includes(typeof this.config.unit))return this.config?.unit;const t=this.config.entity.split(".")[0];return"fan"===t||"humidifier"===t?"%":this._hass.config?.unit_system?.temperature??!1}}xi.HOLD_MS=500,xi.DOUBLE_TAP_MS=250,i([pt()],xi.prototype,"config",void 0),i([pt()],xi.prototype,"header",void 0),i([pt()],xi.prototype,"service",void 0),i([pt()],xi.prototype,"modes",void 0),i([pt()],xi.prototype,"entity",void 0),i([pt()],xi.prototype,"entities",void 0),i([pt()],xi.prototype,"showEntities",void 0),i([pt()],xi.prototype,"name",void 0),i([pt({type:Object})],xi.prototype,"_values",void 0),i([pt()],xi.prototype,"_updatingValues",void 0),i([pt()],xi.prototype,"_hide",void 0),customElements.get(t)||customElements.define(t,xi),customElements.get(`${t}-editor`)||customElements.define(`${t}-editor`,Ut),customElements.get(`${t}-group`)||customElements.define(`${t}-group`,Ae),customElements.get(`${t}-group-editor`)||customElements.define(`${t}-group-editor`,re),console.info(`%c SIMPLE-THERMOSTAT %c v${e} `,"color: var(--text-primary-color); background: var(--primary-color); font-weight: 700; padding: 2px 6px; border-radius: 3px 0 0 3px;","color: var(--primary-color); background: var(--card-background-color); font-weight: 700; padding: 2px 6px; border-radius: 0 3px 3px 0;");const $i=window;$i.customCards=$i.customCards||[],$i.customCards.find(e=>e.type===t)||$i.customCards.push({type:t,name:"Simple Thermostat",preview:!0,description:"A different take on the thermostat card",documentationURL:"https://github.com/Wheemer/simple-thermostat"}),$i.customCards.find(e=>e.type===`${t}-group`)||$i.customCards.push({type:`${t}-group`,name:"Simple Thermostat Group",preview:!0,description:"Switch between multiple thermostat cards in one footprint",documentationURL:"https://github.com/Wheemer/simple-thermostat"});
