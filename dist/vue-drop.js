/*eslint-disable*/
(function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t();else if("function"===typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"===typeof exports?exports:e)[o]=n[o]}})(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({0:function(e,t,n){e.exports=n("16a6")},"16a6":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-drop"},[e._t("v-drop",null,{list:e.list})],2)},i=[],r=n("7d2b"),a=n.n(r),l={name:"VueDrop",props:{list:{type:Array,default:()=>[]},elId:{type:String,default:"",required:!0},options:{type:Object,default:null,required:!1}},data(){return{}},watch:{elId:{handler(e){this.sortable.destroy(),this.createSort()},deep:!0}},mounted(){this.createSort()},destroyed(){window.console.log(12),this.sortable.destroy()},methods:{createSort(){const e=this,t={onStart(t){e.$emit("start",t),window.console.log("onStart",t)},onEnd(t){const{oldIndex:n,item:o,newIndex:i,from:r,to:a}=t,l=e.isSamePanel(r,a);e.onDragEnd(n,i,o,l,r,a),window.console.log("end")},onMove(t,n){const{oldIndex:o,newIndex:i,dragged:r,from:a,to:l,clone:s}=t,c=e.isSamePanel(a,l);if(!c){const t={item:r,from:a,to:l};e.$emit("move",t)}},onAdd(t){e.$emit("add",t),window.console.log("onAdd",t)},onClone(e){e.clone="232",window.console.log("onClone",e)},onChange(e){window.console.log("onChange")},onFilter(t){e.$emit("filter",t),window.console.log("onFilter")},onUpdate(t){e.$emit("update",t),window.console.log("onUpdate")},onChoose(t){e.$emit("choose",t)},onUnchoose(t){e.$emit("unChoose",t),window.console.log("onUnchoose")},onRemove(e){window.console.log("onRemove",e)}},n=document.querySelector(`#${this.elId}`);n&&(this.sortable=a.a.create(n,Object.assign({},t,this.options))),window.console.log(this.sortable.utils)},isSamePanel(e,t){return e.isEqualNode(t)},onDragEnd(e,t,n,o,i,r){const a={oldIndex:e,newIndex:t,item:n,isSamePanel:o,from:i,to:r};this.$emit("onDragEnd",a)}}},s=l;function c(e,t,n,o,i,r,a,l){var s,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):i&&(s=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(c.functional){c._injectStyles=s;var d=c.render;c.render=function(e,t){return s.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,s):[s]}return{exports:e,options:c}}var d=c(s,o,i,!1,null,null,null);d.options.__file="VueDrop.vue";var u=d.exports;u.install=(e=>e.component(u.name,u));t["default"]=u},"7d2b":function(e,t,n){var o,i;
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
(function(r){"use strict";o=r,i="function"===typeof o?o.call(t,n,t,e):o,void 0===i||(e.exports=i)})(function(){"use strict";if("undefined"===typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var e,t,n,o,i,r,a,l,s,c,d,u,h,f,p,g,v,m,_,b,w,y,D,C,S=[],T=!1,x=!1,E=!1,P=/\s+/g,A="Sortable"+(new Date).getTime(),I=window,N=I.document,R=I.parseInt,B=I.setTimeout,X=I.jQuery||I.Zepto,O=I.Polymer,M={capture:!1,passive:!1},Y="draggable"in N.createElement("div"),k=function(e){return!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&(e=N.createElement("x"),e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents)}(),H=!1,j=!1,$=Math.abs,F=Math.min,L=[],U=[],W=function(e,t){var n=re(e),o=R(n.width),i=ue(e,0,t),r=ue(e,1,t),a=i&&re(i),l=r&&re(r),s=a&&R(a.marginLeft)+R(a.marginRight)+i.getBoundingClientRect().width,c=l&&R(l.marginLeft)+R(l.marginRight)+r.getBoundingClientRect().width;return"flex"===n.display?"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal":i&&("block"===a.display||"grid"===a.display||s>=o&&"none"===n.float||r&&"none"===n.float&&s+c>o)?"vertical":"horizontal"},V=function(t,n,o,i,r){var a=D||e.getBoundingClientRect(),l="vertical"===i?a.left:a.top,s="vertical"===i?a.right:a.bottom,c="vertical"===i?t:n;return l<c&&c<s},q=function(e,t){if(!e||!e.getBoundingClientRect)return I;var n=e,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=re(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n||!n.getBoundingClientRect||n===N.body)return I;if(o||t)return n;o=!0}}}while(n=n.parentNode);return I},z=_e(function(e,t,n,o){if(t.scroll){var i,r,a,d,u=n?n[A]:window,h=t.scrollSensitivity,f=t.scrollSpeed,p=e.clientX,g=e.clientY,v=window.innerWidth,m=window.innerHeight,b=!1;s!==n&&(G(),l=t.scroll,c=t.scrollFn,!0===l&&(l=q(n,!0),s=l));var w=0,y=l;do{var D;if(y&&y!==I?(D=y,r=re(D),i=y.getBoundingClientRect(),a=D.clientWidth<D.scrollWidth&&("auto"==r.overflowX||"scroll"==r.overflowX)&&($(i.right-p)<=h)-($(i.left-p)<=h),d=D.clientHeight<D.scrollHeight&&("auto"==r.overflowY||"scroll"==r.overflowY)&&($(i.bottom-g)<=h)-($(i.top-g)<=h)):y===I&&(D=I,a=(v-p<=h)-(p<=h),d=(m-g<=h)-(g<=h)),!S[w])for(var C=0;C<=w;C++)S[C]||(S[C]={});S[w].vx==a&&S[w].vy==d&&S[w].el===D||(S[w].el=D,S[w].vx=a,S[w].vy=d,clearInterval(S[w].pid),!D||0==a&&0==d||(b=!0,S[w].pid=setInterval(function(){o&&0===this.layer&&J.active._emulateDragOver(!0);var t=S[this.layer].vy?S[this.layer].vy*f:0,n=S[this.layer].vx?S[this.layer].vx*f:0;"function"===typeof c&&"continue"!==c.call(u,n,t,e,_,S[this.layer].el)||(S[this.layer].el===I?I.scrollTo(I.pageXOffset+n,I.pageYOffset+t):(S[this.layer].el.scrollTop+=t,S[this.layer].el.scrollLeft+=n))}.bind({layer:w}),24))),w++}while(t.bubbleScroll&&y!==I&&(y=q(y,!1)));T=b}},30),G=function(){S.forEach(function(e){clearInterval(e.pid)}),S=[]},Z=function(e){function t(e,t){return function(n,o,i,r){var a;if(null==e&&t)a=!0;else if(null==e||!1===e)a=!1;else if(t&&"clone"===e)a=e;else if("function"===typeof e)a=e(n,o,i,r);else{var l=(t?n:o).options.group.name;a=!0===e||"string"===typeof e&&e===l||e.join&&e.indexOf(l)>-1}return a||n.options.group.name&&o.options.group.name&&n.options.group.name===o.options.group.name}}var n={},o=e.group;o&&"object"==typeof o||(o={name:o}),n.name=o.name,n.checkPull=t(o.pull,!0),n.checkPut=t(o.put),n.revertClone=o.revertClone,e.group=n},Q=function(t){e&&e.parentNode[A]&&e.parentNode[A]._computeIsAligned(t)};function J(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(e);this.el=e,this.options=t=we({},t),e[A]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,touchStartThreshold:R(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==J.supportPointer&&("PointerEvent"in window||window.navigator&&"msPointerEnabled"in window.navigator)};for(var o in n)!(o in t)&&(t[o]=n[o]);for(var i in"direction"in t||(t.direction=function(){return W(e,t)}),Z(t),null==t.invertedSwapThreshold&&(t.invertedSwapThreshold=t.swapThreshold),this)"_"===i.charAt(0)&&"function"===typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!t.forceFallback&&Y,ne(e,"mousedown",this._onTapStart),ne(e,"touchstart",this._onTapStart),t.supportPointer&&ne(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(ne(e,"dragover",this),ne(e,"dragenter",this)),U.push(this._onDragOver),t.store&&t.store.get&&this.sort(t.store.get(this)||[])}function K(e,t,n,o){if(e){n=n||N;do{if(">*"===t&&e.parentNode===n||me(e,t)||o&&e===n)return e;if(e===n)break}while(e=ee(e))}return null}function ee(e){return e.host&&e!==N&&e.host.nodeType?e.host:e.parentNode}function te(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function ne(e,t,n){e.addEventListener(t,n,M)}function oe(e,t,n){e.removeEventListener(t,n,M)}function ie(e,t,n){if(e&&t)if(e.classList)e.classList[n?"add":"remove"](t);else{var o=(" "+e.className+" ").replace(P," ").replace(" "+t+" "," ");e.className=(o+(n?" "+t:"")).replace(P," ")}}function re(e,t,n){var o=e&&e.style;if(o){if(void 0===n)return N.defaultView&&N.defaultView.getComputedStyle?n=N.defaultView.getComputedStyle(e,""):e.currentStyle&&(n=e.currentStyle),void 0===t?n:n[t];t in o||(t="-webkit-"+t),o[t]=n+("string"===typeof n?"":"px")}}function ae(e,t,n){if(e){var o=e.getElementsByTagName(t),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function le(e,t,n,i,r,a,l,s,c){e=e||t[A];var d,u=e.options,h="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent?d=new CustomEvent(n,{bubbles:!1,cancelable:!1}):(d=N.createEvent("Event"),d.initEvent(n,!1,!1)),d.to=r||t,d.from=a||t,d.item=i||t,d.clone=o,d.oldIndex=l,d.newIndex=s,d.originalEvent=c,t.dispatchEvent(d),u[h]&&u[h].call(e,d)}function se(e,t,n,o,i,r,a,l){var s,c,d=e[A],u=d.options.onMove;return window.CustomEvent?s=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(s=N.createEvent("Event"),s.initEvent("move",!0,!0)),s.to=t,s.from=e,s.dragged=n,s.draggedRect=o,s.related=i||t,s.relatedRect=r||t.getBoundingClientRect(),s.willInsertAfter=l,s.originalEvent=a,e.dispatchEvent(s),u&&(c=u.call(d,s,a)),c}function ce(e){e.draggable=!1}function de(){H=!1}function ue(t,o,i){var r=0,a=0,l=t.children;while(a<l.length){if("none"!==l[a].style.display&&l[a]!==n&&l[a]!==e&&K(l[a],i.draggable,t,!1)){if(r===o)return l[a];r++}a++}return null}function he(e){var t=e.lastElementChild;return t===n&&(t=e.children[e.childElementCount-2]),t||null}function fe(e,t,n){var o=he(n).getBoundingClientRect(),i="vertical"===t?e.clientY:e.clientX,r="vertical"===t?e.clientX:e.clientY,a="vertical"===t?o.bottom:o.right,l="vertical"===t?o.left:o.top,s="vertical"===t?o.right:o.bottom;return r>l&&r<s&&i>a}function pe(t,n,o,i,r,a,l){var s=n.getBoundingClientRect(),c="vertical"===o?t.clientY:t.clientX,d="vertical"===o?s.height:s.width,u="vertical"===o?s.top:s.left,h="vertical"===o?s.bottom:s.right,f=e.getBoundingClientRect(),p="vertical"===o?f.height:f.width,g=!1,v=re(e);if(p+=R(v.marginLeft)+R(v.marginRight),!a)if(l&&p<d*i)if(!x&&(1===y?c>u+d*r/2:c<h-d*r/2)&&(x=!0),x)g=!0;else{"vertical"===o?f.top:f.left,"vertical"===o?f.bottom:f.right;if(1===y?c<u+p:c>h-p)return-1*y}else if(c>u+d*(1-i)/2&&c<h-d*(1-i)/2)return c>u+d/2?-1:1;return g=g||a,g&&(c<u+d*r/2||c>h-d*r/2)?c>u+d/2?1:-1:0}function ge(e){var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,o=0;while(n--)o+=t.charCodeAt(n);return o.toString(36)}function ve(e,t){var n=0;if(!e||!e.parentNode)return-1;while(e&&(e=e.previousElementSibling))"TEMPLATE"===e.nodeName.toUpperCase()||">*"!==t&&!me(e,t)||n++;return n}function me(e,t){if(e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t)}catch(n){return!1}return!1}function _e(e,t){return function(){if(!C){var n=arguments,o=this;C=B(function(){1===n.length?e.call(o,n[0]):e.apply(o,n),C=void 0},t)}}}function be(){clearTimeout(C),C=void 0}function we(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function ye(e){return O&&O.dom?O.dom(e).cloneNode(!0):X?X(e).clone(!0)[0]:e.cloneNode(!0)}function De(e){L.length=0;var t=e.getElementsByTagName("input"),n=t.length;while(n--){var o=t[n];o.checked&&L.push(o)}}function Ce(e){return B(e,0)}function Se(e){return clearTimeout(e)}function Te(e){J.active&&e.cancelable&&e.preventDefault()}return J.prototype={constructor:J,_isAligned:!0,_computeIsAligned:function(t,n){j||e&&e.parentNode===this.el&&(!0!==n&&!1!==n&&(n=!!K(t.target,null,e,!0)),this._isAligned=!T&&(n||this._isAligned&&V(t.clientX,t.clientY,this.el,this._getDirection(t,null),this.options)),j=!0,B(function(){j=!1},30))},_getDirection:function(t,n){return"function"===typeof this.options.direction?this.options.direction.call(this,t,n,e):this.options.direction},_onTapStart:function(t){var n,o=this,i=this.el,r=this.options,l=r.preventOnFilter,s=t.type,c=t.touches&&t.touches[0],d=(c||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||d,h=r.filter;if(De(i),!e&&!(/mousedown|pointerdown/.test(s)&&0!==t.button||r.disabled)&&!u.isContentEditable&&(d=K(d,r.draggable,i,!0),d&&a!==d)){if(n=ve(d,r.draggable),"function"===typeof h){if(h.call(this,t,d,this))return le(o,u,"filter",d,i,i,n),void(l&&t.cancelable&&t.preventDefault())}else if(h&&(h=h.split(",").some(function(e){if(e=K(u,e.trim(),i,!1),e)return le(o,e,"filter",d,i,i,n),!0}),h))return void(l&&t.cancelable&&t.preventDefault());r.handle&&!K(u,r.handle,i,!1)||this._prepareDragStart(t,c,d,n)}},_handleAutoScroll:function(t,n){if(e&&this.options.scroll){var o=t.clientX,i=t.clientY,r=N.elementFromPoint(o,i),a=this;if(n||window.navigator&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1){z(t,a.options,r,!0);var l=q(r,!0);!T||p&&o===g&&i===v||(p&&clearInterval(p),p=setInterval(function(){if(e){var n=q(N.elementFromPoint(o,i),!0);n!==l&&(l=n,G(),z(t,a.options,l,!0))}},10),g=o,v=i)}else{if(!a.options.bubbleScroll||q(r,!0)===window)return void G();z(t,a.options,q(r,!1))}}},_prepareDragStart:function(n,o,l,s){var c,u=this,f=u.el,p=u.options,g=f.ownerDocument;l&&!e&&l.parentNode===f&&(m=n,i=f,e=l,t=e.parentNode,r=e.nextSibling,a=l,h=p.group,d=s,this._lastX=(o||n).clientX,this._lastY=(o||n).clientY,e.style["will-change"]="all",c=function(){u._disableDelayedDrag(),e.draggable=u.nativeDraggable,u._triggerDragStart(n,o),le(u,i,"choose",e,i,i,d),ie(e,p.chosenClass,!0)},p.ignore.split(",").forEach(function(t){ae(e,t.trim(),ce)}),ne(g,"mouseup",u._onDrop),ne(g,"touchend",u._onDrop),ne(g,"touchcancel",u._onDrop),p.supportPointer&&ne(g,"pointercancel",u._onDrop),p.delay?(ne(g,"mouseup",u._disableDelayedDrag),ne(g,"touchend",u._disableDelayedDrag),ne(g,"touchcancel",u._disableDelayedDrag),ne(g,"mousemove",u._delayedDragTouchMoveHandler),ne(g,"touchmove",u._delayedDragTouchMoveHandler),p.supportPointer&&ne(g,"pointermove",u._delayedDragTouchMoveHandler),u._dragStartTimer=B(c.bind(u),p.delay)):c())},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;F($(t.clientX-this._lastX),$(t.clientY-this._lastY))>=this.options.touchStartThreshold&&this._disableDelayedDrag()},_disableDelayedDrag:function(){var e=this.el.ownerDocument;clearTimeout(this._dragStartTimer),oe(e,"mouseup",this._disableDelayedDrag),oe(e,"touchend",this._disableDelayedDrag),oe(e,"touchcancel",this._disableDelayedDrag),oe(e,"mousemove",this._delayedDragTouchMoveHandler),oe(e,"touchmove",this._delayedDragTouchMoveHandler),oe(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,n){n=n||("touch"==t.pointerType?t:null),n?(m={target:e,clientX:n.clientX,clientY:n.clientY},this._onDragStart(m,"touch")):this.nativeDraggable?(ne(e,"dragend",this),ne(i,"dragstart",this._onDragStart)):this._onDragStart(m,!0);try{N.selection?Ce(function(){N.selection.empty()}):window.getSelection().removeAllRanges()}catch(o){}},_dragStarted:function(){if(i&&e){this.nativeDraggable&&(ne(N,"dragover",this._handleAutoScroll),ne(N,"dragover",Q));var t=this.options;ie(e,t.dragClass,!1),ie(e,t.ghostClass,!0),re(e,"transform",""),J.active=this,this._isAligned=!0,le(this,i,"start",e,i,i,d)}else this._nulling()},_emulateDragOver:function(t){if(_){if(this._lastX===_.clientX&&this._lastY===_.clientY&&!t)return;this._lastX=_.clientX,this._lastY=_.clientY,k||re(n,"display","none");var o=N.elementFromPoint(_.clientX,_.clientY),i=o,r=!!K(o,null,e,!0);while(o&&o.shadowRoot)o=o.shadowRoot.elementFromPoint(_.clientX,_.clientY),i=o;if(i)do{if(i[A]){var a=U.length;while(a--)U[a]({clientX:_.clientX,clientY:_.clientY,target:o,rootEl:i});if(!this.options.dragoverBubble)break}o=i}while(i=i.parentNode);e.parentNode[A]._computeIsAligned(_,r),k||re(n,"display","")}},_onTouchMove:function(e){if(m){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,r=e.touches?e.touches[0]:e,a=r.clientX-m.clientX+i.x,l=r.clientY-m.clientY+i.y,s=e.touches?"translate3d("+a+"px,"+l+"px,0)":"translate("+a+"px,"+l+"px)";if(this.options.supportPointer&&"touchmove"===e.type)return;if(!J.active){if(o&&F($(r.clientX-this._lastX),$(r.clientY-this._lastY))<o)return;this._dragStarted()}this._appendGhost(),this._handleAutoScroll(r,!0),b=!0,_=r,re(n,"webkitTransform",s),re(n,"mozTransform",s),re(n,"msTransform",s),re(n,"transform",s),e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!n){var t=e.getBoundingClientRect(),o=(re(e),this.options);n=e.cloneNode(!0),ie(n,o.ghostClass,!1),ie(n,o.fallbackClass,!0),ie(n,o.dragClass,!0),re(n,"box-sizing","border-box"),re(n,"margin",0),re(n,"top",t.top),re(n,"left",t.left),re(n,"width",t.width),re(n,"height",t.height),re(n,"opacity","0.8"),re(n,"position","fixed"),re(n,"zIndex","100000"),re(n,"pointerEvents","none"),o.fallbackOnBody&&N.body.appendChild(n)||i.appendChild(n)}},_onDragStart:function(t,n){var r=this,a=t.dataTransfer,l=r.options;r._offUpEvents(),h.checkPull(r,r,e,t)&&(o=ye(e),o.draggable=!1,o.style["will-change"]="",this._hideClone(),ie(o,r.options.chosenClass,!1),r._cloneId=Ce(function(){i.insertBefore(o,e),le(r,i,"clone",e)})),ie(e,l.dragClass,!0),n?("touch"===n?(ne(N,"touchmove",Te),ne(N,"touchmove",r._onTouchMove),ne(N,"touchend",r._onDrop),ne(N,"touchcancel",r._onDrop),l.supportPointer&&(ne(N,"pointermove",r._onTouchMove),ne(N,"pointerup",r._onDrop))):(ne(N,"mousemove",r._onTouchMove),ne(N,"mouseup",r._onDrop)),r._loopId=setInterval(r._emulateDragOver,50),ie(e,l.dragClass,!1)):(a&&(a.effectAllowed="move",l.setData&&l.setData.call(r,a,e)),ne(N,"drop",r),re(e,"transform","translateZ(0)"),r._dragStartId=Ce(r._dragStarted)),ne(N,"selectstart",r)},_onDragOver:function(a){var l,s,c,d,u=this.el,p=this.options,g=p.group,v=J.active,m=h===g,_=p.sort;if((void 0===a.rootEl||a.rootEl===this.el)&&(p.dragoverBubble||a.rootEl||(this._handleAutoScroll(a),e.parentNode[A]._computeIsAligned(a)),void 0!==a.preventDefault&&(a.cancelable&&a.preventDefault(),!p.dragoverBubble&&a.stopPropagation()),b=!0,l=K(a.target,p.draggable,u,!0),!(e.animated&&l===e||l.animated||H)&&(l!==w&&(E=!1,x=!1,w=null),v&&!p.disabled&&(m?_||(d=!i.contains(e)):f===this||(this.lastPutMode=h.checkPull(this,v,e,a))&&g.checkPut(this,v,e,a))))){var C,S=this._getDirection(a,l);if(s=e.getBoundingClientRect(),f!==this&&this!==J.active?(f=this,!0):this===J.active&&(!1,f=null),d)return this._hideClone(),t=i,void(o||r?i.insertBefore(e,o||r):_||i.appendChild(e));if(0===u.children.length||u.children[0]===n||u===a.target&&fe(a,S,u)){if(0!==u.children.length&&u.children[0]!==n&&u===a.target&&(l=he(u)),l){if(l.animated)return;c=l.getBoundingClientRect()}m?v._hideClone():v._showClone(this),!1!==se(i,u,e,s,l,c,a,!!l)&&(e.contains(u)||(u.appendChild(e),t=u,this._isAligned=!0,D=null),this._animate(s,e),l&&this._animate(c,l))}else if(l&&!l.animated&&l!==e&&void 0!==l.parentNode[A]&&l!==u){if(E=E||p.invertSwap||e.parentNode!==u||!this._isAligned,C=pe(a,l,S,p.swapThreshold,p.invertedSwapThreshold,E,w===l),0===C)return;D=null,this._isAligned=!0,w&&(w===l||l&&l.animated)||(x=!1,w=l),y=C,c=l.getBoundingClientRect();var T=l.nextElementSibling,P=!1;P=1===C;var I=se(i,u,e,s,l,c,a,P);!1!==I&&(1!==I&&-1!==I||(P=1===I),H=!0,B(de,30),m?v._hideClone():v._showClone(this),e.contains(u)||(P&&!T?u.appendChild(e):l.parentNode.insertBefore(e,P?T:l)),t=e.parentNode,this._animate(s,e),this._animate(c,l))}}},_animate:function(t,n){var o=this.options.animation;if(o){var i=n.getBoundingClientRect();if(n===e&&(D=i),1===t.nodeType&&(t=t.getBoundingClientRect()),t.left+t.width/2===i.left+i.width/2&&t.top+t.height/2===i.top+i.height/2)return;re(n,"transition","none"),re(n,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),n.offsetWidth,re(n,"transition","all "+o+"ms"),re(n,"transform","translate3d(0,0,0)"),clearTimeout(n.animated),n.animated=B(function(){re(n,"transition",""),re(n,"transform",""),n.animated=!1},o)}},_offUpEvents:function(){var e=this.el.ownerDocument;oe(N,"touchmove",Te),oe(N,"touchmove",this._onTouchMove),oe(N,"pointermove",this._onTouchMove),oe(e,"mouseup",this._onDrop),oe(e,"touchend",this._onDrop),oe(e,"pointerup",this._onDrop),oe(e,"touchcancel",this._onDrop),oe(e,"pointercancel",this._onDrop),oe(N,"selectstart",this)},_onDrop:function(a){var l=this.el,s=this.options;T=!1,E=!1,x=!1,clearInterval(this._loopId),clearInterval(p),G(),be(),clearTimeout(this._dragStartTimer),Se(this._cloneId),Se(this._dragStartId),oe(N,"mousemove",this._onTouchMove),this.nativeDraggable&&(oe(N,"drop",this),oe(l,"dragstart",this._onDragStart),oe(N,"dragover",this._handleAutoScroll),oe(N,"dragover",Q)),this._offUpEvents(),a&&(b&&(a.cancelable&&a.preventDefault(),!s.dropBubble&&a.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),(i===t||f&&"clone"!==f.lastPutMode)&&o&&o.parentNode&&o.parentNode.removeChild(o),e&&(this.nativeDraggable&&oe(e,"dragend",this),ce(e),e.style["will-change"]="",ie(e,this.options.ghostClass,!1),ie(e,this.options.chosenClass,!1),le(this,i,"unchoose",e,t,i,d,null,a),i!==t?(u=ve(e,s.draggable),u>=0&&(le(null,t,"add",e,t,i,d,u,a),le(this,i,"remove",e,t,i,d,u,a),le(null,t,"sort",e,t,i,d,u,a),le(this,i,"sort",e,t,i,d,u,a)),f&&f.save()):e.nextSibling!==r&&(u=ve(e,s.draggable),u>=0&&(le(this,i,"update",e,t,i,d,u,a),le(this,i,"sort",e,t,i,d,u,a))),J.active&&(null!=u&&-1!==u||(u=d),le(this,i,"end",e,t,i,d,u,a),this.save()))),this._nulling()},_nulling:function(){i=e=t=n=r=o=a=l=s=S.length=p=g=v=m=_=b=u=d=w=y=D=f=h=J.active=null,L.forEach(function(e){e.checked=!0}),L.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":e&&(this._onDragOver(t),te(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var e,t=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)e=n[o],K(e,r.draggable,this.el,!1)&&t.push(e.getAttribute(r.dataIdAttr)||ge(e));return t},sort:function(e){var t={},n=this.el;this.toArray().forEach(function(e,o){var i=n.children[o];K(i,this.options.draggable,n,!1)&&(t[e]=i)},this),e.forEach(function(e){t[e]&&(n.removeChild(t[e]),n.appendChild(t[e]))})},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return K(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(void 0===t)return n[e];n[e]=t,"group"===e&&Z(n)},destroy:function(){var e=this.el;e[A]=null,oe(e,"mousedown",this._onTapStart),oe(e,"touchstart",this._onTapStart),oe(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(oe(e,"dragover",this),oe(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),U.splice(U.indexOf(this._onDragOver),1),this._onDrop(),this.el=e=null},_hideClone:function(){o.cloneHidden||(re(o,"display","none"),o.cloneHidden=!0)},_showClone:function(t){"clone"===t.lastPutMode?o.cloneHidden&&(i.contains(e)&&!this.options.group.revertClone?i.insertBefore(o,e):r?i.insertBefore(o,r):i.appendChild(o),this.options.group.revertClone&&this._animate(e,o),re(o,"display",""),o.cloneHidden=!1):this._hideClone()}},J.utils={on:ne,off:oe,css:re,find:ae,is:function(e,t){return!!K(e,t,e,!1)},extend:we,throttle:_e,closest:K,toggleClass:ie,clone:ye,index:ve,nextTick:Ce,cancelNextTick:Se,detectDirection:W,getChild:ue},J.create=function(e,t){return new J(e,t)},J.version="1.8.0-rc1",J})}})});
