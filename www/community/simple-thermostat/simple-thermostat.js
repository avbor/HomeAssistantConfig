!function(){const t={DEBUG:!1};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();var t="simple-thermostat";const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:r,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,v=f?f.emptyScript:"",g=p.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!r(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&l(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);s?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),s=e.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n;const o=s.fromAttribute(e,t.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,s=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??_)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[m("elementProperties")]=new Map,$[m("finalized")]=new Map,g?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.1");const w=globalThis,x=t=>t,A=w.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+O,C=`<${j}>`,k=document,P=()=>k.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,N="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,I=/>/g,U=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,M=/"/g,F=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),B=new WeakMap,q=k.createTreeWalker(k,129);function J(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":3===e?"<math>":"",a=R;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===R?"!--"===l[1]?a=H:void 0!==l[1]?a=I:void 0!==l[2]?(F.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=U):void 0!==l[3]&&(a=U):a===U?">"===l[0]?(a=s??R,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?U:'"'===l[3]?M:V):a===M||a===V?a=U:a===H||a===I?a=R:(a=U,s=void 0);const h=a===U&&t[e+1].startsWith("/>")?" ":"";o+=a===R?i+C:c>=0?(n.push(r),i.slice(0,c)+S+i.slice(c)+O+h):i+O+(-2===c?e:h)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class Z{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const a=t.length-1,r=this.parts,[l,c]=G(t,e);if(this.el=Z.createElement(l,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=q.nextNode())&&r.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(S)){const e=c[o++],i=n.getAttribute(t).split(O),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:X}),n.removeAttribute(t)}else t.startsWith(O)&&(r.push({type:6,index:s}),n.removeAttribute(t));if(F.test(n.tagName)){const t=n.textContent.split(O),e=t.length-1;if(e>0){n.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],P()),q.nextNode(),r.push({type:2,index:++s});n.append(t[e],P())}}}else if(8===n.nodeType)if(n.data===j)r.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(O,t+1));)r.push({type:7,index:s}),t+=O.length-1}s++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,n){if(e===L)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const o=T(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=Y(t,s._$AS(t,e.values),s,n)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??k).importNode(e,!0);q.currentNode=n;let s=q.nextNode(),o=0,a=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new Q(s,s.nextSibling,this,t):1===r.type?e=new r.ctor(s,r.name,r.strings,this,t):6===r.type&&(e=new nt(s,this,t)),this._$AV.push(e),r=i[++a]}o!==r?.index&&(s=q.nextNode(),o++)}return q.currentNode=k,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),T(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new K(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new Z(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Q(this.O(P()),this.O(P()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=Y(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const n=t;let a,r;for(t=s[0],a=0;a<s.length-1;a++)r=Y(this,n[i+a],e,a),r===L&&(r=this._$AH[a]),o||=!T(r)||r!==this._$AH[a],r===W?t=W:t!==W&&(t+=(r??"")+s[a+1]),this._$AH[a]=r}o&&!n&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends X{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??W)===L)return;const i=this._$AH,n=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==W&&(i===W||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(Z,Q),(w.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;let at=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new Q(e.insertBefore(P(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const rt=ot.litElementPolyfillSupport;rt?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");var lt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new o(i,t,n)})`:host {
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
`;function ct(t,e,i,n={}){n=n||{},i=null==i?{}:i;const s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,t.dispatchEvent(s),s}!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(lt);const dt=[0,1],ht=[.5,1],ut=["column","row"],pt=["climate"],ft={header:{},layout:{mode:{}}};class vt extends at{static get styles(){return lt}static get properties(){return{hass:{},config:{}}}static getStubConfig(){return Object.assign({},ft)}setConfig(t){this.config=t||Object.assign({},ft)}_openLink(){window.open("https://github.com/Wheemer/simple-thermostat/blob/master/README.md")}render(){var t,e,i,n,s,o,a,r,l,c,d,h,u,p,f,v,g,m,y,_,b,$,w,x,A,E,S;return this.hass?D`
      <div class="card-config">
        <div class="overall-config">
          <div class="side-by-side">
            <ha-entity-picker
              label="Entity (required)"
              .hass=${this.hass}
              .value="${this.config.entity}"
              .configValue=${"entity"}
              .includeDomains=${pt}
              @change="${this.valueChanged}"
              allow-custom-entity
            ></ha-entity-picker>
            <ha-entity-picker
              label="Current temperature entity (optional)"
              .hass=${this.hass}
              .value="${this.config.current_temperature_entity}"
              .configValue=${"current_temperature_entity"}
              @change="${this.valueChanged}"
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <ha-formfield label="Show header?">
            <ha-switch
              .checked=${!1!==this.config.header}
              @change=${this.toggleHeader}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode names?">
            <ha-switch
              .checked=${!1!==(null===(i=null===(e=null===(t=this.config)||void 0===t?void 0:t.layout)||void 0===e?void 0:e.mode)||void 0===i?void 0:i.names)}
              .configValue="${"layout.mode.names"}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode icons?">
            <ha-switch
              .checked=${!1!==(null===(o=null===(s=null===(n=this.config)||void 0===n?void 0:n.layout)||void 0===s?void 0:s.mode)||void 0===o?void 0:o.icons)}
              .configValue="${"layout.mode.icons"}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>
          <ha-formfield label="Show mode headings?">
            <ha-switch
              .checked=${!1!==(null===(l=null===(r=null===(a=this.config)||void 0===a?void 0:a.layout)||void 0===r?void 0:r.mode)||void 0===l?void 0:l.headings)}
              .configValue="${"layout.mode.headings"}"
              @change=${this.valueChanged}
            ></ha-switch>
          </ha-formfield>

          ${!1!==this.config.header?D`
                <div class="side-by-side">
                  <ha-textfield
                    label="Name (optional)"
                    .value="${null!==(d=null===(c=this.config.header)||void 0===c?void 0:c.name)&&void 0!==d?d:""}"
                    .configValue="${"header.name"}"
                    @input="${this.valueChanged}"
                  ></ha-textfield>

                  <ha-icon-input
                    label="Icon (optional)"
                    .value="${null===(h=this.config.header)||void 0===h?void 0:h.icon}"
                    .configValue=${"header.icon"}
                    @value-changed=${this.valueChanged}
                  ></ha-icon-input>
                </div>

                <div class="side-by-side">
                  <ha-entity-picker
                    label="Toggle Entity (optional)"
                    .hass=${this.hass}
                    .value="${null===(f=null===(p=null===(u=this.config)||void 0===u?void 0:u.header)||void 0===p?void 0:p.toggle)||void 0===f?void 0:f.entity}"
                    .configValue=${"header.toggle.entity"}
                    @change="${this.valueChanged}"
                    allow-custom-entity
                  ></ha-entity-picker>

                  <ha-textfield
                    label="Toggle entity label"
                    .value="${null!==(y=null===(m=null===(g=null===(v=this.config)||void 0===v?void 0:v.header)||void 0===g?void 0:g.toggle)||void 0===m?void 0:m.name)&&void 0!==y?y:""}"
                    .configValue="${"header.toggle.name"}"
                    @input="${this.valueChanged}"
                  ></ha-textfield>
                </div>
              `:""}

          <div class="side-by-side">
            <ha-textfield
              label="Fallback Text (optional)"
              .value="${null!==(_=this.config.fallback)&&void 0!==_?_:""}"
              .configValue="${"fallback"}"
              @input="${this.valueChanged}"
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="Decimals (optional)"
              .configValue=${"decimals"}
              .value="${null!==($=null===(b=this.config.decimals)||void 0===b?void 0:b.toString())&&void 0!==$?$:""}"
              @selected="${this.valueChanged}"
              @closed="${t=>t.stopPropagation()}"
            >
              ${Object.values(dt).map(t=>D`<ha-list-item .value="${t.toString()}">${t}</ha-list-item>`)}
            </ha-select>

            <ha-textfield
              label="Unit (optional)"
              .value="${null!==(w=this.config.unit)&&void 0!==w?w:""}"
              .configValue="${"unit"}"
              @input="${this.valueChanged}"
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="Step Layout (optional)"
              .configValue=${"layout.step"}
              .value="${null!==(A=null===(x=this.config.layout)||void 0===x?void 0:x.step)&&void 0!==A?A:""}"
              @selected="${this.valueChanged}"
              @closed="${t=>t.stopPropagation()}"
            >
              ${Object.values(ut).map(t=>D`<ha-list-item .value="${t}">${t}</ha-list-item>`)}
            </ha-select>

            <ha-select
              label="Step Size (optional)"
              .configValue=${"step_size"}
              .value="${null!==(S=null===(E=this.config.step_size)||void 0===E?void 0:E.toString())&&void 0!==S?S:""}"
              @selected="${this.valueChanged}"
              @closed="${t=>t.stopPropagation()}"
            >
              ${Object.values(ht).map(t=>D`<ha-list-item .value="${t.toString()}">${t}</ha-list-item>`)}
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
    `:D``}valueChanged(t){if(!this.config||!this.hass)return;const{target:e}=t,i=(n=this.config,JSON.parse(JSON.stringify(n)));var n;e.configValue&&(""===e.value?delete i[e.configValue]:function(t,e,i){const n=e.split(".");let s=t;for(;n.length-1;){var o=n.shift();s.hasOwnProperty(o)||(s[o]={}),s=s[o]}s[n[0]]=i}(i,e.configValue,void 0!==e.checked?e.checked:e.value)),ct(this,"config-changed",{config:i})}toggleHeader(t){this.config.header=!!t.target.checked&&{},ct(this,"config-changed",{config:this.config})}}function gt(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}function mt(t,e,i,n){var s,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const yt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:_},_t=(t=yt,e,i)=>{const{kind:n,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,s,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const s=this[n];e.call(this,i),this.requestUpdate(n,s,t)}}throw Error("Unsupported decorator location: "+n)};function bt(t){return(e,i)=>"object"==typeof i?_t(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const $t=(t,e,i,n)=>{if("length"===i||"prototype"===i)return;if("arguments"===i||"caller"===i)return;const s=Object.getOwnPropertyDescriptor(t,i),o=Object.getOwnPropertyDescriptor(e,i);!wt(s,o)&&n||Object.defineProperty(t,i,o)},wt=function(t,e){return void 0===t||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},xt=(t,e)=>`/* Wrapped ${t}*/\n${e}`,At=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Et=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");function St(t,e,{ignoreNonConfigurable:i=!1}={}){const{name:n}=t;for(const n of Reflect.ownKeys(e))$t(t,e,n,i);return((t,e)=>{const i=Object.getPrototypeOf(e);i!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,i)})(t,e),((t,e,i)=>{const n=""===i?"":`with ${i.trim()}() `,s=xt.bind(null,n,e.toString());Object.defineProperty(s,"name",Et);const{writable:o,enumerable:a,configurable:r}=At;Object.defineProperty(t,"toString",{value:s,writable:o,enumerable:a,configurable:r})})(t,e,n),t}const Ot=(t,e={})=>{if("function"!=typeof t)throw new TypeError(`Expected the first argument to be a function, got \`${typeof t}\``);const{wait:i=0,maxWait:n=Number.POSITIVE_INFINITY,before:s=!1,after:o=!0}=e;if(i<0||n<0)throw new RangeError("`wait` and `maxWait` must not be negative.");if(!s&&!o)throw new Error("Both `before` and `after` are false, function wouldn't be called.");let a,r,l;const c=function(...e){const c=this,d=()=>{r=void 0,a&&(clearTimeout(a),a=void 0),o&&(l=t.apply(c,e))},h=s&&!a;return clearTimeout(a),a=setTimeout(()=>{a=void 0,r&&(clearTimeout(r),r=void 0),o&&(l=t.apply(c,e))},i),n>0&&n!==Number.POSITIVE_INFINITY&&!r&&(r=setTimeout(d,n)),h&&(l=t.apply(c,e)),l};return St(c,t),c.cancel=()=>{a&&(clearTimeout(a),a=void 0),r&&(clearTimeout(r),r=void 0)},c};function jt(t,{decimals:e=1,fallback:i="N/A",locale:n}={}){if(null===t||""===t||["boolean","undefined"].includes(typeof t))return i;const s=Number(t);return Number.isNaN(s)?i:n?"decimal_comma"===n.number_format||"space_comma"===n.number_format?s.toFixed(e).replace(".",","):"comma_decimal"===n.number_format||"none"===n.number_format?s.toFixed(e):new Intl.NumberFormat(function(t){if(t&&"system"!==t.number_format)return t.language}(n),{minimumFractionDigits:e,maximumFractionDigits:e}).format(s):s.toFixed(e)}function Ct({header:t,toggleEntityChanged:e,entity:i,openEntityPopover:n}){var s,o;if(!1===t)return W;const a=i.attributes.hvac_action||i.state;let r=t.icon;"object"==typeof t.icon&&(r=null!==(s=null==r?void 0:r[a])&&void 0!==s&&s);const l=null!==(o=null==t?void 0:t.name)&&void 0!==o&&o;return D`
    <header>
      <div
        style="display: flex;"
        class="clickable"
        @click=${()=>n()}
      >
        ${function(t){return t?D` <ha-icon class="header__icon" .icon=${t}></ha-icon> `:W}(r)} ${function(t){return t?D`<h2 class="header__title">${t}</h2>`:W}(l)}
      </div>
      ${function(t,e){if(0===t.length)return W;const i=t.map(({icon:t,hide_inactive:i,state:n})=>D` <ha-icon
      class="fault-icon ${"on"===n.state?"active":i?" hide":""}"
      icon="${t||n.attributes.icon}"
      @click="${()=>e(n.entity_id)}"
    ></ha-icon>`);return D` <div class="faults">${i}</div>`}(t.faults,n)}
      ${function(t,e,i){return(null==t?void 0:t.length)?D`
    <div class="header__toggles">
      ${t.map(t=>{var n,s,o,a;const r=null===(n=t.entity)||void 0===n?void 0:n.entity_id;return D`
          <div class="header__toggle">
            <span
              class="clickable toggle-label"
              title=${t.label||(null===(o=null===(s=t.entity)||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.friendly_name)}
              @click=${()=>e(r)}
              >${!1!==t.icon?D`<ha-icon .icon=${t.icon}></ha-icon>`:t.label}
            </span>
            <ha-switch
              .checked=${"on"===(null===(a=t.entity)||void 0===a?void 0:a.state)}
              @change=${t=>i(t,r)}
            ></ha-switch>
          </div>
        `})}
    </div>
  `:W}(t.toggles,n,e)}
    </header>
  `}var kt,Pt={exports:{}};function Tt(){return kt||(kt=1,function(t){function e(t){var i,n,s=new Error(t);return i=s,n=e.prototype,Object.setPrototypeOf?Object.setPrototypeOf(i,n):i.__proto__=n,s}function i(t,i,n){var s=i.slice(0,n).split(/\n/),o=s.length,a=s[o-1].length+1;throw e(t+=" at line "+o+" col "+a+":\n\n  "+i.split(/\n/)[o-1]+"\n  "+Array(a).join(" ")+"^")}e.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var n=new Function("return this")().Promise,s=!1;try{s=new Function("return (async function(){}).constructor")()}catch(t){if(!(t instanceof SyntaxError))throw t}function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function a(t,e,i){for(var n in e)o(e,n)&&(null==e[n]||"object"!=typeof e[n]||"storage"!==n&&"prefixes"!==n||i?t[n]=e[n]:t[n]=a({},e[n]));return t}var r=/^async +/,l=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,c=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,d=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,h=/[.*+\-?^${}()|[\]\\]/g;function u(t){return h.test(t)?t.replace(h,"\\$&"):t}function p(t,n){n.rmWhitespace&&(t=t.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),l.lastIndex=0,c.lastIndex=0,d.lastIndex=0;var s=n.prefixes,o=[s.h,s.b,s.i,s.r,s.c,s.e].reduce(function(t,e){return t&&e?t+"|"+u(e):e?u(e):t},""),a=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+u(n.tags[1])+")","g"),h=new RegExp("([^]*?)"+u(n.tags[0])+"(-|_)?\\s*("+o+")?\\s*","g"),p=0,f=!1;function v(e,s){var o,u={f:[]},v=0,g="c";function m(e){var s=t.slice(p,e),o=s.trim();if("f"===g)"safe"===o?u.raw=!0:n.async&&r.test(o)?(o=o.replace(r,""),u.f.push([o,"",!0])):u.f.push([o,""]);else if("fp"===g)u.f[u.f.length-1][1]+=o;else if("err"===g){if(o){var a=s.search(/\S/);i("invalid syntax",t,p+a)}}else u[g]=o;p=e+1}for("h"===s||"b"===s||"c"===s?g="n":"r"===s&&(u.raw=!0,s="i"),a.lastIndex=p;null!==(o=a.exec(t));){var y=o[1],_=o[2],b=o[3],$=o[4],w=o[5],x=o.index;if(y)"("===y?(0===v&&("n"===g?(m(x),g="p"):"f"===g&&(m(x),g="fp")),v++):")"===y?0===--v&&"c"!==g&&(m(x),g="err"):0===v&&"|"===y?(m(x),g="f"):"=>"===y&&(m(x),p+=1,g="res");else if(_)if("/*"===_){var A=t.indexOf("*/",a.lastIndex);-1===A&&i("unclosed comment",t,o.index),a.lastIndex=A+2}else"'"===_?(c.lastIndex=o.index,c.exec(t)?a.lastIndex=c.lastIndex:i("unclosed string",t,o.index)):'"'===_?(d.lastIndex=o.index,d.exec(t)?a.lastIndex=d.lastIndex:i("unclosed string",t,o.index)):"`"===_&&(l.lastIndex=o.index,l.exec(t)?a.lastIndex=l.lastIndex:i("unclosed string",t,o.index));else if(b)return m(x),p=x+o[0].length,h.lastIndex=p,f=w,$&&"h"===s&&(s="s"),u.t=s,u}return i("unclosed tag",t,e),u}var g=function o(a,l){a.b=[],a.d=[];var c,d=!1,u=[];function g(t,e){t&&(t=function(t,e,i,n){var s,o;return"string"==typeof e.autoTrim?s=o=e.autoTrim:Array.isArray(e.autoTrim)&&(s=e.autoTrim[1],o=e.autoTrim[0]),(i||!1===i)&&(s=i),(n||!1===n)&&(o=n),"slurp"===s&&"slurp"===o?t.trim():("_"===s||"slurp"===s?t=String.prototype.trimLeft?t.trimLeft():t.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==s&&"nl"!==s||(t=t.replace(/^(?:\n|\r|\r\n)/,"")),"_"===o||"slurp"===o?t=String.prototype.trimRight?t.trimRight():t.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==o&&"nl"!==o||(t=t.replace(/(?:\n|\r|\r\n)$/,"")),t)}(t,n,f,e))&&(t=t.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),u.push(t))}for(;null!==(c=h.exec(t));){var m,y=c[1],_=c[2],b=c[3]||"";for(var $ in s)if(s[$]===b){m=$;break}g(y,_),p=c.index+c[0].length,m||i("unrecognized tag type: "+b,t,p);var w=v(c.index,m),x=w.t;if("h"===x){var A=w.n||"";n.async&&r.test(A)&&(w.a=!0,w.n=A.replace(r,"")),w=o(w),u.push(w)}else if("c"===x){if(a.n===w.n)return d?(d.d=u,a.b.push(d)):a.d=u,a;i("Helper start and end don't match",t,c.index+c[0].length)}else if("b"===x){d?(d.d=u,a.b.push(d)):a.d=u;var E=w.n||"";n.async&&r.test(E)&&(w.a=!0,w.n=E.replace(r,"")),d=w,u=[]}else if("s"===x){var S=w.n||"";n.async&&r.test(S)&&(w.a=!0,w.n=S.replace(r,"")),u.push(w)}else u.push(w)}if(!l)throw e('unclosed helper "'+a.n+'"');return g(t.slice(p,t.length),!1),a.d=u,a}({f:[]},!0);if(n.plugins)for(var m=0;m<n.plugins.length;m++){var y=n.plugins[m];y.processAST&&(g.d=y.processAST(g.d,n))}return g.d}function f(t,e){var i=p(t,e),n="var tR='';"+(e.useWith?"with("+e.varName+"||{}){":"")+_(i,e)+"if(cb){cb(null,tR)} return tR"+(e.useWith?"}":"");if(e.plugins)for(var s=0;s<e.plugins.length;s++){var o=e.plugins[s];o.processFnString&&(n=o.processFnString(n,e))}return n}function v(t,e){for(var i=0;i<e.length;i++){var n=e[i][0],s=e[i][1];t=(e[i][2]?"await ":"")+"c.l('F','"+n+"')("+t,s&&(t+=","+s),t+=")"}return t}function g(t,e,i,n,s,o){var a="{exec:"+(s?"async ":"")+y(i,e,t)+",params:["+n+"]";return o&&(a+=",name:'"+o+"'"),s&&(a+=",async:true"),a+"}"}function m(t,e){for(var i="[",n=0;n<t.length;n++){var s=t[n];i+=g(e,s.res||"",s.d,s.p||"",s.a,s.n),n<t.length&&(i+=",")}return i+"]"}function y(t,e,i){return"function("+e+"){var tR='';"+_(t,i)+"return tR}"}function _(t,e){for(var i=0,n=t.length,s="";i<n;i++){var o=t[i];if("string"==typeof o)s+="tR+='"+o+"';";else{var a=o.t,r=o.c||"",l=o.f,c=o.n||"",d=o.p||"",h=o.res||"",u=o.b,p=!!o.a;if("i"===a){e.defaultFilter&&(r="c.l('F','"+e.defaultFilter+"')("+r+")");var f=v(r,l);!o.raw&&e.autoEscape&&(f="c.l('F','e')("+f+")"),s+="tR+="+f+";"}else if("h"===a)if(e.storage.nativeHelpers.get(c))s+=e.storage.nativeHelpers.get(c)(o,e);else{var y=(p?"await ":"")+"c.l('H','"+c+"')("+g(e,h,o.d,d,p);y+=u?","+m(u,e):",[]",s+="tR+="+v(y+=",c)",l)+";"}else"s"===a?s+="tR+="+v((p?"await ":"")+"c.l('H','"+c+"')({params:["+d+"]},[],c)",l)+";":"e"===a&&(s+=r+"\n")}}return s}var b=function(){function t(t){this.cache=t}return t.prototype.define=function(t,e){this.cache[t]=e},t.prototype.get=function(t){return this.cache[t]},t.prototype.remove=function(t){delete this.cache[t]},t.prototype.reset=function(){this.cache={}},t.prototype.load=function(t){a(this.cache,t,!0)},t}();function $(t,i,n,s){if(i&&i.length>0)throw e((s?"Native":"")+"Helper '"+t+"' doesn't accept blocks");if(n&&n.length>0)throw e((s?"Native":"")+"Helper '"+t+"' doesn't accept filters")}var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function x(t){return w[t]}var A=new b({}),E=new b({each:function(t,e){var i="",n=t.params[0];if($("each",e,!1),t.async)return new Promise(function(e){!function t(e,i,n,s,o){n(e[i],i).then(function(a){s+=a,i===e.length-1?o(s):t(e,i+1,n,s,o)})}(n,0,t.exec,i,e)});for(var s=0;s<n.length;s++)i+=t.exec(n[s],s);return i},foreach:function(t,e){var i=t.params[0];if($("foreach",e,!1),t.async)return new Promise(function(e){!function t(e,i,n,s,o,a){s(i[n],e[i[n]]).then(function(r){o+=r,n===i.length-1?a(o):t(e,i,n+1,s,o,a)})}(i,Object.keys(i),0,t.exec,"",e)});var n="";for(var s in i)o(i,s)&&(n+=t.exec(s,i[s]));return n},include:function(t,i,n){$("include",i,!1);var s=n.storage.templates.get(t.params[0]);if(!s)throw e('Could not fetch template "'+t.params[0]+'"');return s(t.params[1],n)},extends:function(t,i,n){var s=t.params[1]||{};s.content=t.exec();for(var o=0;o<i.length;o++){var a=i[o];s[a.name]=a.exec()}var r=n.storage.templates.get(t.params[0]);if(!r)throw e('Could not fetch template "'+t.params[0]+'"');return r(s,n)},useScope:function(t,e){return $("useScope",e,!1),t.exec(t.params[0])}}),S=new b({if:function(t,e){$("if",!1,t.f,!0);var i="if("+t.p+"){"+_(t.d,e)+"}";if(t.b)for(var n=0;n<t.b.length;n++){var s=t.b[n];"else"===s.n?i+="else{"+_(s.d,e)+"}":"elif"===s.n&&(i+="else if("+s.p+"){"+_(s.d,e)+"}")}return i},try:function(t,i){if($("try",!1,t.f,!0),!t.b||1!==t.b.length||"catch"!==t.b[0].n)throw e("native helper 'try' only accepts 1 block, 'catch'");var n="try{"+_(t.d,i)+"}",s=t.b[0];return n+"catch"+(s.res?"("+s.res+")":"")+"{"+_(s.d,i)+"}"},block:function(t,e){return $("block",t.b,t.f,!0),"if(!"+e.varName+"["+t.p+"]){tR+=("+y(t.d,"",e)+")()}else{tR+="+e.varName+"["+t.p+"]}"}}),O=new b({e:function(t){var e=String(t);return/[&<>"']/.test(e)?e.replace(/[&<>"']/g,x):e}}),j={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(t,i){if("H"===t){var n=this.storage.helpers.get(i);if(n)return n;throw e("Can't find helper '"+i+"'")}if("F"===t){var s=this.storage.filters.get(i);if(s)return s;throw e("Can't find filter '"+i+"'")}},async:!1,storage:{helpers:E,nativeHelpers:S,filters:O,templates:A},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function C(t,e){var i={};return a(i,j),e&&a(i,e),t&&a(i,t),i.l.bind(i),i}function k(t,i){var n=C(i||{}),o=Function;if(n.async){if(!s)throw e("This environment doesn't support async/await");o=s}try{return new o(n.varName,"c","cb",f(t,n))}catch(i){throw i instanceof SyntaxError?e("Bad template syntax\n\n"+i.message+"\n"+Array(i.message.length+1).join("=")+"\n"+f(t,n)):i}}function P(t,e){var i;return e.cache&&e.name&&e.storage.templates.get(e.name)?e.storage.templates.get(e.name):(i="function"==typeof t?t:k(t,e),e.cache&&e.name&&e.storage.templates.define(e.name,i),i)}j.l.bind(j),t.compile=k,t.compileScope=_,t.compileScopeIntoFunction=y,t.compileToString=f,t.defaultConfig=j,t.filters=O,t.getConfig=C,t.helpers=E,t.nativeHelpers=S,t.parse=p,t.render=function(t,i,s,o){var a=C(s||{});if(!a.async)return P(t,a)(i,a);if(!o){if("function"==typeof n)return new n(function(e,n){try{e(P(t,a)(i,a))}catch(t){n(t)}});throw e("Please provide a callback function, this env doesn't support Promises")}try{P(t,a)(i,a,o)}catch(t){return o(t)}},t.templates=A,Object.defineProperty(t,"__esModule",{value:!0})}(Pt.exports)),Pt.exports}var zt=Tt();const Nt=2;class Rt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class Ht extends Rt{constructor(t){if(super(t),this.it=W,t.type!==Nt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===W||null==t)return this._t=void 0,this.it=t;if(t===L)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ht.directiveName="unsafeHTML",Ht.resultType=1;const It=(t=>(...e)=>({_$litDirective$:t,values:e}))(Ht),Ut=t=>`<ha-icon icon="${t}"></ha-icon>`;function Vt(t,e){var i,n,s,o;const{type:a,labels:r}=null!==(o=null!==(n=null===(i=null==t?void 0:t.layout)||void 0===i?void 0:i.entities)&&void 0!==n?n:null===(s=null==t?void 0:t.layout)||void 0===s?void 0:s.sensors)&&void 0!==o?o:{type:"table",labels:!0};return D` <div class="entities ${[r?"with-labels":"without-labels","list"===a?"as-list":"as-table"].join(" ")}">${e}</div> `}zt.defaultConfig.autoEscape=!1,zt.filters.define("icon",Ut),zt.filters.define("join",(t,e=", ")=>t.join(e)),zt.filters.define("css",(t,e)=>`<span style="${Object.entries(e).reduce((t,[e,i])=>`${t}${e}:${i};`,"")}">${t}</span>`),zt.filters.define("debug",t=>{try{return JSON.stringify(t)}catch(e){return`Not able to read valid JSON object from: ${t}`}});const Mt=["automation","fan","humidifier","input_boolean","light","switch"];function Ft({hide:t=!1,hass:e,state:i,details:n,localize:s,openEntityPopover:o}){var a,r,l;if(t||void 0===i)return;const{type:c,heading:d,icon:h,unit:u,decimals:p}=n;let f;if(process.env.DEBUG&&console.log("ST: infoItem",{state:i,details:n}),"relativetime"===c)f=D`
      <div class="entity-value">
        <ha-relative-time .datetime=${i} .hass=${e}></ha-relative-time>
      </div>
    `;else if("object"==typeof i){const[t]=i.entity_id.split(".");if(Mt.includes(t))f=D`
        <div class="entity-value">
          <ha-switch
            .checked=${"on"===i.state}
            @change=${t=>function(t,e,i){t.callService("homeassistant",i?"turn_on":"turn_off",{entity_id:e})}(e,i.entity_id,t.target.checked)}
          ></ha-switch>
        </div>
      `;else{const n=["component",t,"state",null!==(r=null===(a=i.attributes)||void 0===a?void 0:a.device_class)&&void 0!==r?r:"_",""].join(".");let l="function"==typeof e.formatEntityState?e.formatEntityState(i):s(i.state,n);"number"==typeof p&&(l=jt(i.state,{decimals:p,locale:e.locale}));const c="string"==typeof u&&u.length>0,d="function"==typeof e.formatEntityState&&"number"!=typeof p&&!c;f=D`
        <div
          class="entity-value clickable"
          @click="${()=>o(i.entity_id)}"
        >
          ${l}${d?"":`${c?"":" "}${u||i.attributes.unit_of_measurement}`}
        </div>
      `}}else{let t="number"==typeof p?jt(i,{decimals:p,locale:e.locale}):i;f=D` <div class="entity-value">${t}${u}</div> `}if(!1===d)return f;const v=d||(null===(l=null==i?void 0:i.attributes)||void 0===l?void 0:l.friendly_name)||(null==i?void 0:i.entity_id),g="object"==typeof i?i.entity_id:null,m=h?D` <ha-icon
        icon="${h}"
        title=${v}
        @click=${g?()=>o(g):null}
      ></ha-icon> `:` ${d}: `;return D`<div
      class="entity-heading ${g?"clickable":""}"
      title=${v}
      @click=${g?()=>o(g):null}
    >${m}</div>
    ${f}
  `}var Dt;function Lt({state:t,entity:e,hass:i,mode:n,modeOptions:s,localize:o,setMode:a}){var r;const{type:l,hide_when_off:c,mode:d="none",list:h,name:u,icons:p}=n;if(0===h.length||c&&t===Dt.OFF)return null;let f=`state_attributes.climate.${l}_mode.`;"hvac"===l?f="component.climate.state._.":"vane_horizontal"===l||"vane_vertical"===l?f="":"swing_horizontal"!==l&&"swing_vertical"!==l||(f=`state_attributes.climate.${l}_mode.`);const v="hvac"===l?null:"vane_horizontal"===l||"vane_vertical"===l?l:`${l}_mode`,g="hvac"==l?"operation":`${l}_mode`;let m;m="vane_horizontal"===l?"Vane Horizontal":"vane_vertical"===l?"Vane Vertical":"swing_horizontal"===l?o("ui.card.climate.swing_horizontal_mode")||"Swing Horizontal":"swing_vertical"===l?o("ui.card.climate.swing_vertical_mode")||"Swing Vertical":o(`ui.card.climate.${g}`);const y=u||m,_=null===(r=null==s?void 0:s.headings)||void 0===r||r;return D`
    <div class="modes ${_?"heading":""}">
      ${_?D` <div class="mode-title">${y}</div> `:""}
      ${h.map(({value:t,icon:n,name:r})=>D`
          <div
            class="mode-item ${t===d?"active "+d:""}"
            @click=${()=>a(l,t)}
          >
            ${(t=>t?!1===(null==s?void 0:s.icons)||!1===p?null:D` <ha-icon class="mode-icon" .icon=${t}></ha-icon> `:null)(n)} ${((t,n)=>!1===t||!1===(null==s?void 0:s.names)?null:t!==n?f?o(t,f):t:"hvac"===l&&"function"==typeof(null==i?void 0:i.formatEntityState)?i.formatEntityState(Object.assign(Object.assign({},e),{state:n})):v&&e&&"function"==typeof(null==i?void 0:i.formatEntityAttributeValue)?i.formatEntityAttributeValue(e,v,n):f?o(t,f):t)(r,t)}
          </div>
        `)}
    </div>
  `}!function(t){t.OFF="off",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.AUTO="auto",t.DRY="dry",t.FAN_ONLY="fan_only"}(Dt||(Dt={}));const Wt={auto:"mdi:radiator",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:radiator",idle:"mdi:radiator-disabled",off:"mdi:radiator-off"},Bt={auto:"hass:autorenew",cool:"hass:snowflake",dry:"hass:water-percent",fan_only:"hass:fan",heat_cool:"hass:autorenew",heat:"hass:fire",off:"hass:power"};function qt(t,e){var i,n;const s=e.states[t.entity];let o="";return o=!0===(null==t?void 0:t.name)?s.attributes.name:null!==(i=null==t?void 0:t.name)&&void 0!==i?i:"",{entity:s,label:o,icon:null!==(n=null==t?void 0:t.icon)&&void 0!==n&&n}}function Jt(t,e){return[...(null==t?void 0:t.toggle)?[t.toggle]:[],...Array.isArray(null==t?void 0:t.toggles)?t.toggles:[]].map(t=>qt(t,e))}function Gt(t,e){return Array.isArray(t)?t.map(t=>{var{entity:i}=t,n=gt(t,["entity"]);return Object.assign(Object.assign({},n),{state:e.states[i],entity:i})}):[]}var Zt;!function(t){t.HVAC="hvac",t.FAN="fan",t.PRESET="preset",t.SWING="swing",t.SWING_HORIZONTAL="swing_horizontal",t.SWING_VERTICAL="swing_vertical",t.VANE_HORIZONTAL="vane_horizontal",t.VANE_VERTICAL="vane_vertical"}(Zt||(Zt={}));const Yt=Object.values(Zt),Kt=[Zt.VANE_HORIZONTAL,Zt.VANE_VERTICAL];function Qt(t){return Kt.includes(t)?`${t}_positions`:`${t}_modes`}const Xt=[Zt.HVAC,Zt.PRESET],te="hass:chevron-up",ee="hass:chevron-down",ie="mdi:plus",ne="mdi:minus",se={temperature:!1,state:!1};function oe(t,e,i={}){return e[Qt(t)].filter(e=>function(t,e,i){var n;if("object"==typeof i[e])return!1!==i[e].include;const s=Object.keys(i).some(t=>!t.startsWith("_")),o=t===Zt.PRESET;return null!==(n=null==i?void 0:i[e])&&void 0!==n?n:!(o&&s)}(t,e,i)).map(t=>{const e="object"==typeof i[t]?i[t]:{};return Object.assign({icon:Bt[t],value:t,name:t},e)})}class ae extends at{constructor(){super(...arguments),this.modes=[],this._hass={},this.entities=[],this.showEntities=!0,this.name="",this.stepSize=.5,this._values={},this._updatingValues=!1,this._hide=se,this._debouncedSetTemperature=Ot(t=>{const{domain:e,service:i,data:n={}}=this.service;this._hass.callService(e,i,Object.assign(Object.assign({entity_id:this.config.entity},n),t))},{wait:500}),this.localize=(t,e="")=>{const i=`${e}${t}`;return this._hass.localize(i)||t},this.toggleEntityChanged=(t,e)=>{if(!this.header||!e)return;const i=t.target;this._hass.callService("homeassistant",i.checked?"turn_on":"turn_off",{entity_id:e})},this.setMode=(t,e)=>{t&&e?(Kt.includes(t)?this._hass.callService("climate",`set_${t}`,{entity_id:this.config.entity,[`${t}`]:e}):this._hass.callService("climate",`set_${t}_mode`,{entity_id:this.config.entity,[`${t}_mode`]:e}),ct(this,"haptic","light")):ct(this,"haptic","failure")},this.openEntityPopover=(t=null)=>{ct(this,"hass-more-info",{entityId:t||this.config.entity})}}static get styles(){return lt}static getConfigElement(){return window.document.createElement(`${t}-editor`)}setConfig(t){this.config=Object.assign({decimals:1},t)}updated(){super.connectedCallback();const t=Array.from(this.renderRoot.querySelectorAll("[with-hass]"));for(const e of Array.from(t))Array.from(e.attributes).forEach(t=>{t.name.startsWith("fwd-")&&(e[t.name.replace("fwd-","")]=t.value)}),e.hass=this._hass}set hass(t){var e,i,n,s,o;if(!this.config.entity)return;if(!(null==t?void 0:t.states))return;const a=t.states[this.config.entity];if(!a)return;this._hass=t,this.entity!==a&&(this.entity=a),this.header=function(t,e,i){if(!1===t)return!1;let n;n="string"==typeof(null==t?void 0:t.name)?t.name:!1!==(null==t?void 0:t.name)&&e.attributes.friendly_name;let s=e.attributes.hvac_action?Wt:Bt;return void 0!==(null==t?void 0:t.icon)&&(s=t.icon),{name:n,icon:s,toggle:(null==t?void 0:t.toggle)?qt(t.toggle,i):null,toggles:Jt(t,i),faults:Gt(null==t?void 0:t.faults,i)}}(this.config.header,a,t),this.service=null!==(i=null===(e=this.config)||void 0===e?void 0:e.service)&&void 0!==i&&i||{domain:"climate",service:"set_temperature"};const r=a.attributes;let l=function(t,e){if(!1===t)return{};if(t)return Object.keys(t).reduce((i,n)=>{const s=t[n];return(null==s?void 0:s.hide)?i:Object.assign(Object.assign({},i),{[n]:null==e?void 0:e[n]})},{});const i=function(t){return"number"==typeof t.target_temp_high&&"number"==typeof t.target_temp_low?"dual":"single"}(e);return"dual"===i?{target_temp_low:e.target_temp_low,target_temp_high:e.target_temp_high}:{temperature:e.temperature}}(null!==(s=null===(n=this.config)||void 0===n?void 0:n.setpoints)&&void 0!==s?s:null,r);this._updatingValues&&function(t,e){const i=Object.keys(t);return i.length===Object.keys(e).length&&!i.some(i=>(null==t?void 0:t[i])!==(null==e?void 0:e[i]))}(l,this._values)?this._updatingValues=!1:this._updatingValues||(this._values=l);const c=t=>Yt.includes(t)&&r[Qt(t)],d=t=>t.filter(c).map(t=>({type:t,hide_when_off:!1,list:oe(t,r)}));let h=[];if(!1===this.config.control)h=[];else if(Array.isArray(this.config.control))h=d(this.config.control);else if("object"==typeof this.config.control){const t=Object.entries(this.config.control);h=t.length>0?t.filter(([t])=>c(t)).map(([t,e])=>{const{_name:i,_hide_when_off:n,_icons:s}=e,o=gt(e,["_name","_hide_when_off","_icons"]);return{type:t,hide_when_off:n,icons:s,name:i,list:oe(t,r,o)}}):d(Xt)}else h=d(Xt);this.modes=h.map(t=>{if(t.type===Zt.HVAC){const e=[],i=Object.values(Dt);return t.list.forEach(t=>{const n=i.indexOf(t.value);e[n]=t}),Object.assign(Object.assign({},t),{list:e,mode:a.state})}const e=Kt.includes(t.type)?t.type:`${t.type}_mode`,i=r[e];return Object.assign(Object.assign({},t),{mode:i})}),this.config.step_size&&(this.stepSize=+this.config.step_size),this.config.hide&&(this._hide=Object.assign(Object.assign({},this._hide),this.config.hide));const u=function(t){var e,i;return null!==(i=null!==(e=t.entities)&&void 0!==e?e:t.sensors)&&void 0!==i?i:[]}(this.config);if(!1===u)this.showEntities=!1;else if(3===this.config.version){this.entities=[];const t=u.map((t,e)=>{var i,n,s;const o=null!==(i=null==t?void 0:t.entity)&&void 0!==i?i:this.config.entity;let a=this.entity;return(null==t?void 0:t.entity)&&(a=this._hass.states[t.entity]),{id:null!==(n=null==t?void 0:t.id)&&void 0!==n?n:String(e),label:null==t?void 0:t.label,template:t.template,show:!1!==(null==t?void 0:t.show),entityId:o,context:a,unit:null!==(s=null==t?void 0:t.unit)&&void 0!==s?s:""}}),e=t.map(t=>t.id),i=[];if(e.includes("state")||i.push({id:"state",label:"{{ui.operation}}",template:"{{state.text}}",entityId:this.config.entity,context:this.entity}),!e.includes("temperature")){const t=null!==(o=this.config.current_temperature_entity)&&void 0!==o?o:this.config.entity,e=this.config.current_temperature_entity?this._hass.states[this.config.current_temperature_entity]:this.entity;i.push({id:"temperature",label:"{{ui.currently}}",template:"{{current_temperature|formatNumber}}",entityId:t,context:e})}this.entities=[...i,...t]}else u&&(this.entities=u.map(e=>{var i,{name:n,entity:s,attribute:o,unit:a=""}=e,r=gt(e,["name","entity","attribute","unit"]);let l;const c=[n];return s?(l=t.states[s],c.push(null===(i=null==l?void 0:l.attributes)||void 0===i?void 0:i.friendly_name),o&&(l=l.attributes[o])):o&&o in this.entity.attributes&&(l=this.entity.attributes[o],c.push(o)),c.push(s),Object.assign(Object.assign({},r),{name:c.find(t=>!!t),state:l,entity:s,unit:a})}))}render({_hide:t,_values:e,_updatingValues:i,config:n,entity:s}=this){var o,a,r;const l=[];if(this.stepSize<1&&0===this.config.decimals&&l.push(D`
        <hui-warning>
          Decimals is set to 0 and step_size is lower than 1. Decrementing a
          setpoint will likely not work. Change one of the settings to clear
          this warning.
        </hui-warning>
      `),!s)return D`
        <hui-warning> Entity not available: ${n.entity} </hui-warning>
      `;const{attributes:{min_temp:c=null,max_temp:d=null,hvac_action:h}}=s,u=this.getUnit(),p=null!==(r=null===(a=null===(o=this.config)||void 0===o?void 0:o.layout)||void 0===a?void 0:a.step)&&void 0!==r?r:"column",f="row"===p,v=[!this.header&&"no-header",h].filter(t=>!!t);let g;return 3===this.config.version?(g=this.entities.filter(t=>!1!==t.show).map(t=>function({context:t,entityId:e,template:i="{{state.text}}",label:n,unit:s="",hass:o,variables:a={},config:r,localize:l,openEntityPopover:c}){var d,h,u,p,f,v;const{state:g,attributes:m}=t,[y]=e.split("."),_=o.selectedLanguage||o.language,b="ui.card.climate.",$=Object.entries(null!==(h=null===(d=o.resources)||void 0===d?void 0:d[_])&&void 0!==h?h:{}).reduce((t,[e,i])=>(e.startsWith(b)&&(t[e.replace(b,"")]=i),t),{}),w=Object.assign(Object.assign({},m),{state:{raw:g,text:"function"==typeof o.formatEntityState?o.formatEntityState(t):l(g,`component.${y}.state._.`)},ui:$,v:a});zt.filters.define("formatNumber",(t,e={decimals:r.decimals})=>String(jt(t,Object.assign(Object.assign({},e),{locale:o.locale})))),zt.filters.define("relativetime",(t,e={})=>`<ha-relative-time fwd-datetime=${t} with-hass></ha-relative-time>`),zt.filters.define("translate",(e,i="")=>!i&&"function"==typeof o.formatEntityAttributeValue&&"string"==typeof e&&e in m?o.formatEntityAttributeValue(t,e):l(e,i||"climate"!==y&&"humidifier"!==y?i:`state_attributes.${y}.${e}`));const x=t=>zt.render(t,w,{useWith:!0}),A=x(i);if(!1===n||!1===(null===(v=null!==(p=null===(u=null==r?void 0:r.layout)||void 0===u?void 0:u.entities)&&void 0!==p?p:null===(f=null==r?void 0:r.layout)||void 0===f?void 0:f.sensors)||void 0===v?void 0:v.labels))return D`<div class="entity-value">${It(A)}${s}</div>`;const E=n||"{{friendly_name}}",S=E.match(/^(mdi|hass):.*/)?Ut(E):x(E);return D`
    <div
      class="entity-heading clickable"
      title=${(null==m?void 0:m.friendly_name)||e}
      @click=${c?()=>c(e):null}
    >
      ${It(S)}
    </div>
    <div class="entity-value">${It(A)}${s}</div>
  `}(Object.assign(Object.assign({},t),{variables:this.config.variables,hass:this._hass,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover}))),g=Vt(this.config,g)):g=this.showEntities?function({_hide:t,entity:e,unit:i,hass:n,entities:s,config:o,localize:a,openEntityPopover:r}){var l,c,d,h,u,p,f,v,g,m;const{state:y,attributes:{hvac_action:_,current_temperature:b}}=e,$=o.current_temperature_entity?null===(l=n.states[o.current_temperature_entity])||void 0===l?void 0:l.state:b,w=null===(p=null===(u=null!==(d=null===(c=null==o?void 0:o.layout)||void 0===c?void 0:c.entities)&&void 0!==d?d:null===(h=null==o?void 0:o.layout)||void 0===h?void 0:h.sensors)||void 0===u?void 0:u.labels)||void 0===p||p;let x="function"==typeof n.formatEntityState?n.formatEntityState(e):a(y,"component.climate.state._.");_&&(x=["function"==typeof n.formatEntityAttributeValue?n.formatEntityAttributeValue(e,"hvac_action"):a(_,"state_attributes.climate.hvac_action."),` (${x})`].join(""));const A=[Ft({hide:t.temperature,state:`${jt($,Object.assign(Object.assign({},o),{locale:n.locale}))}${i||""}`,hass:n,details:{heading:!!w&&(null!==(v=null===(f=null==o?void 0:o.label)||void 0===f?void 0:f.temperature)&&void 0!==v?v:a("ui.card.climate.currently"))}}),Ft({hide:t.state,state:x,hass:n,details:{heading:!!w&&(null!==(m=null===(g=null==o?void 0:o.label)||void 0===g?void 0:g.state)&&void 0!==m?m:a("ui.panel.lovelace.editor.card.generic.state"))}}),...s.map(t=>{var{name:e,state:i}=t,s=gt(t,["name","state"]);return Ft({state:i,hass:n,localize:a,openEntityPopover:r,details:Object.assign(Object.assign({},s),{heading:w&&e})})})||null].filter(t=>null!==t);return Vt(o,A)}({_hide:this._hide,unit:u,hass:this._hass,entity:this.entity,entities:this.entities,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover}):"",D`
      <ha-card class="${v.join(" ")}">
        ${l}
        ${Ct({header:this.header,toggleEntityChanged:this.toggleEntityChanged,entity:this.entity,openEntityPopover:this.openEntityPopover})}
        <section class="body">
          ${g}
          ${!0===n.hide_setpoint?W:Object.entries(e).map(([t,e])=>{const o=["string","number"].includes(typeof e),a=!1!==u&&o;return D`
              <div class="current-wrapper ${p}">
                <ha-icon-button
                  ?disabled=${null!==d&&e>=d}
                  class="thermostat-trigger"
                  icon=${f?ie:te}
                  @click="${()=>this.setTemperature(this.stepSize,t)}"
                >
                  <ha-icon .icon=${f?ie:te}></ha-icon>
                </ha-icon-button>

                <h3
                  @click=${()=>this.openEntityPopover()}
                  class=${i?"current--value updating":"current--value"}
                >
                  ${jt(e,Object.assign(Object.assign({},n),{fallback:s.state===Dt.OFF?"OFF":n.fallback,locale:this._hass.locale}))}
                  ${a?D`<span class="current--unit">${u}</span>`:W}
                </h3>
                <ha-icon-button
                  ?disabled=${null!==c&&e<=c}
                  class="thermostat-trigger"
                  icon=${f?ne:ee}
                  @click="${()=>this.setTemperature(-this.stepSize,t)}"
                >
                  <ha-icon .icon=${f?ne:ee}></ha-icon>
                </ha-icon-button>
              </div>
            `})}
        </section>

        ${this.modes.map(t=>{var e,i,n;return Lt({state:s.state,entity:s,hass:this._hass,mode:t,localize:this.localize,modeOptions:null!==(n=null===(i=null===(e=this.config)||void 0===e?void 0:e.layout)||void 0===i?void 0:i.mode)&&void 0!==n?n:{},setMode:this.setMode})})}
      </ha-card>
    `}setTemperature(t,e){this._updatingValues=!0;const i=this._values[e],n=Number(i)+t,{decimals:s}=this.config;this._values=Object.assign(Object.assign({},this._values),{[e]:+jt(n,{decimals:s})}),this._debouncedSetTemperature(this._values)}getCardSize(){return 3}getUnit(){var t,e,i,n;return["boolean","string"].includes(typeof this.config.unit)?null===(t=this.config)||void 0===t?void 0:t.unit:null!==(n=null===(i=null===(e=this._hass.config)||void 0===e?void 0:e.unit_system)||void 0===i?void 0:i.temperature)&&void 0!==n&&n}}mt([bt()],ae.prototype,"config",void 0),mt([bt()],ae.prototype,"header",void 0),mt([bt()],ae.prototype,"service",void 0),mt([bt()],ae.prototype,"modes",void 0),mt([bt()],ae.prototype,"entity",void 0),mt([bt()],ae.prototype,"entities",void 0),mt([bt()],ae.prototype,"showEntities",void 0),mt([bt()],ae.prototype,"name",void 0),mt([bt({type:Object})],ae.prototype,"_values",void 0),mt([bt()],ae.prototype,"_updatingValues",void 0),mt([bt()],ae.prototype,"_hide",void 0),customElements.get(t)||customElements.define(t,ae),customElements.get(`${t}-editor`)||customElements.define(`${t}-editor`,vt),console.info(`%c${t}: 3.1.3`,"font-weight: bold"),window.customCards=window.customCards||[],window.customCards.push({type:t,name:"Simple Thermostat",preview:!1,description:"A different take on the thermostat card"});
