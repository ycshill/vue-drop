/*eslint-disable*/
(function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t();else if("function"===typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"===typeof exports?exports:e)[o]=n[o]}})(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({0:function(e,t,n){e.exports=n("16a6")},"16a6":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-drop"},[e._t("v-drop",null,{list:e.list})],2)},i=[],r=n("53fe"),a=n.n(r),l={name:"VueDrop",props:{list:{type:Array,default:()=>[]},elId:{type:String,default:"",required:!0},options:{type:Object,default:null,required:!1}},data(){return{}},watch:{elId:{handler(e){this.sortable.destroy(),this.createSort()},deep:!0}},mounted(){this.createSort()},destroyed(){window.console.log(12),this.sortable.destroy()},methods:{createSort(){const e=this,t={onStart(t){e.$emit("start",t),window.console.log("onStart",t)},onEnd(t){const{oldIndex:n,item:o,newIndex:i,from:r,to:a}=t,l=e.isSamePanel(r,a);e.onDragEnd(n,i,o,l,r,a),window.console.log("end")},onMove(t,n){const{oldIndex:o,newIndex:i,dragged:r,from:a,to:l}=t,s=e.isSamePanel(a,l);if(!s){const t={item:r,from:a,to:l};e.$emit("move",t)}},onAdd(e){window.console.log("onAdd")},onClone(e){e.clone="232",window.console.log("onClone",e)},onChange(e){window.console.log("onChange")},onFilter(e){window.console.log("onFilter")},onUpdate(e){window.console.log("onUpdate")},onChoose(t){e.$emit("choose",t),window.console.log("onChoose",t.from.getAttribute("id"))},onUnchoose(t){e.$emit("unChoose",t),window.console.log("onUnchoose")},onRemove(e){window.console.log("onRemove",e)}},n=document.querySelector(`#${this.elId}`);n&&(this.sortable=a.a.create(n,Object.assign({},t,this.options))),window.console.log(this.sortable)},isSamePanel(e,t){return e.isEqualNode(t)},onDragEnd(e,t,n,o,i,r){const a={oldIndex:e,newIndex:t,item:n,isSamePanel:o,from:i,to:r};this.$emit("onDragEnd",a)}}},s=l;function c(e,t,n,o,i,r,a,l){var s,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=s):i&&(s=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(c.functional){c._injectStyles=s;var d=c.render;c.render=function(e,t){return s.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,s):[s]}return{exports:e,options:c}}var d=c(s,o,i,!1,null,null,null);d.options.__file="VueDrop.vue";var u=d.exports;u.install=(e=>e.component(u.name,u));t["default"]=u},"53fe":function(e,t,n){var o,i;
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
(function(r){"use strict";o=r,i="function"===typeof o?o.call(t,n,t,e):o,void 0===i||(e.exports=i)})(function(){"use strict";if("undefined"===typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var e,t,n,o,i,r,a,l,s,c,d,u,h,f,p,g,v,m,_,b,y={},w=/\s+/g,D=/left|right|inline/,S="Sortable"+(new Date).getTime(),C=window,T=C.document,x=C.parseInt,E=C.setTimeout,N=C.jQuery||C.Zepto,P=C.Polymer,O=!1,k=!1,I="draggable"in T.createElement("div"),R=function(e){return!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&(e=T.createElement("x"),e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents)}(),B=!1,X=Math.abs,M=Math.min,Y=[],A=[],j=re(function(e,t,n){if(n&&t.scroll){var o,i,r,a,d,u,h=n[S],f=t.scrollSensitivity,p=t.scrollSpeed,g=e.clientX,v=e.clientY,m=window.innerWidth,_=window.innerHeight;if(s!==n&&(l=t.scroll,s=n,c=t.scrollFn,!0===l)){l=n;do{if(l.offsetWidth<l.scrollWidth||l.offsetHeight<l.scrollHeight)break}while(l=l.parentNode)}l&&(o=l,i=l.getBoundingClientRect(),r=(X(i.right-g)<=f)-(X(i.left-g)<=f),a=(X(i.bottom-v)<=f)-(X(i.top-v)<=f)),r||a||(r=(m-g<=f)-(g<=f),a=(_-v<=f)-(v<=f),(r||a)&&(o=C)),y.vx===r&&y.vy===a&&y.el===o||(y.el=o,y.vx=r,y.vy=a,clearInterval(y.pid),o&&(y.pid=setInterval(function(){if(u=a?a*p:0,d=r?r*p:0,"function"===typeof c)return c.call(h,d,u,e);o===C?C.scrollTo(C.pageXOffset+d,C.pageYOffset+u):(o.scrollTop+=u,o.scrollLeft+=d)},24)))}},30),U=function(e){function t(e,t){return void 0!==e&&!0!==e||(e=n.name),"function"===typeof e?e:function(n,o){var i=o.options.group.name;return t?e:e&&(e.join?e.indexOf(i)>-1:i==e)}}var n={},o=e.group;o&&"object"==typeof o||(o={name:o}),n.name=o.name,n.checkPull=t(o.pull,!0),n.checkPut=t(o.put),n.revertClone=o.revertClone,e.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){k=!1,O={capture:!1,passive:k}}}))}catch(ue){}function $(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(e);this.el=e,this.options=t=ae({},t),e[S]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==$.supportPointer};for(var o in n)!(o in t)&&(t[o]=n[o]);for(var i in U(t),this)"_"===i.charAt(0)&&"function"===typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!t.forceFallback&&I,H(e,"mousedown",this._onTapStart),H(e,"touchstart",this._onTapStart),t.supportPointer&&H(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(H(e,"dragover",this),H(e,"dragenter",this)),A.push(this._onDragOver),t.store&&this.sort(t.store.get(this))}function F(t,n){"clone"!==t.lastPullMode&&(n=!0),o&&o.state!==n&&(G(o,"display",n?"none":""),n||o.state&&(t.options.group.revertClone?(i.insertBefore(o,r),t._animate(e,o)):i.insertBefore(o,e)),o.state=n)}function L(e,t,n){if(e){n=n||T;do{if(">*"===t&&e.parentNode===n||ie(e,t))return e}while(e=V(e))}return null}function V(e){var t=e.host;return t&&t.nodeType?t:e.parentNode}function q(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}function H(e,t,n){e.addEventListener(t,n,O)}function W(e,t,n){e.removeEventListener(t,n,O)}function z(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var o=(" "+e.className+" ").replace(w," ").replace(" "+t+" "," ");e.className=(o+(n?" "+t:"")).replace(w," ")}}function G(e,t,n){var o=e&&e.style;if(o){if(void 0===n)return T.defaultView&&T.defaultView.getComputedStyle?n=T.defaultView.getComputedStyle(e,""):e.currentStyle&&(n=e.currentStyle),void 0===t?n:n[t];t in o||(t="-webkit-"+t),o[t]=n+("string"===typeof n?"":"px")}}function Q(e,t,n){if(e){var o=e.getElementsByTagName(t),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function Z(e,t,n,i,r,a,l,s){e=e||t[S];var c=T.createEvent("Event"),d=e.options,u="on"+n.charAt(0).toUpperCase()+n.substr(1);c.initEvent(n,!0,!0),c.to=r||t,c.from=a||t,c.item=i||t,c.clone=o,c.oldIndex=l,c.newIndex=s,t.dispatchEvent(c),d[u]&&d[u].call(e,c)}function J(e,t,n,o,i,r,a,l){var s,c,d=e[S],u=d.options.onMove;return s=T.createEvent("Event"),s.initEvent("move",!0,!0),s.to=t,s.from=e,s.dragged=n,s.draggedRect=o,s.related=i||t,s.relatedRect=r||t.getBoundingClientRect(),s.willInsertAfter=l,e.dispatchEvent(s),u&&(c=u.call(d,s,a)),c}function K(e){e.draggable=!1}function ee(){B=!1}function te(e,t){var n=e.lastElementChild,o=n.getBoundingClientRect();return t.clientY-(o.top+o.height)>5||t.clientX-(o.left+o.width)>5}function ne(e){var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,o=0;while(n--)o+=t.charCodeAt(n);return o.toString(36)}function oe(e,t){var n=0;if(!e||!e.parentNode)return-1;while(e&&(e=e.previousElementSibling))"TEMPLATE"===e.nodeName.toUpperCase()||">*"!==t&&!ie(e,t)||n++;return n}function ie(e,t){if(e){t=t.split(".");var n=t.shift().toUpperCase(),o=new RegExp("\\s("+t.join("|")+")(?=\\s)","g");return(""===n||e.nodeName.toUpperCase()==n)&&(!t.length||((" "+e.className+" ").match(o)||[]).length==t.length)}return!1}function re(e,t){var n,o;return function(){void 0===n&&(n=arguments,o=this,E(function(){1===n.length?e.call(o,n[0]):e.apply(o,n),n=void 0},t))}}function ae(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function le(e){return P&&P.dom?P.dom(e).cloneNode(!0):N?N(e).clone(!0)[0]:e.cloneNode(!0)}function se(e){var t=e.getElementsByTagName("input"),n=t.length;while(n--){var o=t[n];o.checked&&Y.push(o)}}function ce(e){return E(e,0)}function de(e){return clearTimeout(e)}return $.prototype={constructor:$,_onTapStart:function(t){var n,o=this,i=this.el,r=this.options,l=r.preventOnFilter,s=t.type,c=t.touches&&t.touches[0],d=(c||t).target,u=t.target.shadowRoot&&t.path&&t.path[0]||d,h=r.filter;if(se(i),!e&&!(/mousedown|pointerdown/.test(s)&&0!==t.button||r.disabled)&&!u.isContentEditable&&(d=L(d,r.draggable,i),d&&a!==d)){if(n=oe(d,r.draggable),"function"===typeof h){if(h.call(this,t,d,this))return Z(o,u,"filter",d,i,i,n),void(l&&t.preventDefault())}else if(h&&(h=h.split(",").some(function(e){if(e=L(u,e.trim(),i),e)return Z(o,e,"filter",d,i,i,n),!0}),h))return void(l&&t.preventDefault());r.handle&&!L(u,r.handle,i)||this._prepareDragStart(t,c,d,n)}},_prepareDragStart:function(n,o,l,s){var c,d=this,u=d.el,h=d.options,p=u.ownerDocument;l&&!e&&l.parentNode===u&&(m=n,i=u,e=l,t=e.parentNode,r=e.nextSibling,a=l,g=h.group,f=s,this._lastX=(o||n).clientX,this._lastY=(o||n).clientY,e.style["will-change"]="all",c=function(){d._disableDelayedDrag(),e.draggable=d.nativeDraggable,z(e,h.chosenClass,!0),d._triggerDragStart(n,o),Z(d,i,"choose",e,i,i,f)},h.ignore.split(",").forEach(function(t){Q(e,t.trim(),K)}),H(p,"mouseup",d._onDrop),H(p,"touchend",d._onDrop),H(p,"touchcancel",d._onDrop),H(p,"selectstart",d),h.supportPointer&&H(p,"pointercancel",d._onDrop),h.delay?(H(p,"mouseup",d._disableDelayedDrag),H(p,"touchend",d._disableDelayedDrag),H(p,"touchcancel",d._disableDelayedDrag),H(p,"mousemove",d._disableDelayedDrag),H(p,"touchmove",d._disableDelayedDrag),h.supportPointer&&H(p,"pointermove",d._disableDelayedDrag),d._dragStartTimer=E(c,h.delay)):c())},_disableDelayedDrag:function(){var e=this.el.ownerDocument;clearTimeout(this._dragStartTimer),W(e,"mouseup",this._disableDelayedDrag),W(e,"touchend",this._disableDelayedDrag),W(e,"touchcancel",this._disableDelayedDrag),W(e,"mousemove",this._disableDelayedDrag),W(e,"touchmove",this._disableDelayedDrag),W(e,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,n){n=n||("touch"==t.pointerType?t:null),n?(m={target:e,clientX:n.clientX,clientY:n.clientY},this._onDragStart(m,"touch")):this.nativeDraggable?(H(e,"dragend",this),H(i,"dragstart",this._onDragStart)):this._onDragStart(m,!0);try{T.selection?ce(function(){T.selection.empty()}):window.getSelection().removeAllRanges()}catch(ue){}},_dragStarted:function(){if(i&&e){var t=this.options;z(e,t.ghostClass,!0),z(e,t.dragClass,!1),$.active=this,Z(this,i,"start",e,i,i,f)}else this._nulling()},_emulateDragOver:function(){if(_){if(this._lastX===_.clientX&&this._lastY===_.clientY)return;this._lastX=_.clientX,this._lastY=_.clientY,R||G(n,"display","none");var e=T.elementFromPoint(_.clientX,_.clientY),t=e,o=A.length;if(e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(_.clientX,_.clientY),t=e),t)do{if(t[S]){while(o--)A[o]({clientX:_.clientX,clientY:_.clientY,target:e,rootEl:t});break}e=t}while(t=t.parentNode);R||G(n,"display","")}},_onTouchMove:function(e){if(m){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,r=e.touches?e.touches[0]:e,a=r.clientX-m.clientX+i.x,l=r.clientY-m.clientY+i.y,s=e.touches?"translate3d("+a+"px,"+l+"px,0)":"translate("+a+"px,"+l+"px)";if(!$.active){if(o&&M(X(r.clientX-this._lastX),X(r.clientY-this._lastY))<o)return;this._dragStarted()}this._appendGhost(),b=!0,_=r,G(n,"webkitTransform",s),G(n,"mozTransform",s),G(n,"msTransform",s),G(n,"transform",s),e.preventDefault()}},_appendGhost:function(){if(!n){var t,o=e.getBoundingClientRect(),r=G(e),a=this.options;n=e.cloneNode(!0),z(n,a.ghostClass,!1),z(n,a.fallbackClass,!0),z(n,a.dragClass,!0),G(n,"top",o.top-x(r.marginTop,10)),G(n,"left",o.left-x(r.marginLeft,10)),G(n,"width",o.width),G(n,"height",o.height),G(n,"opacity","0.8"),G(n,"position","fixed"),G(n,"zIndex","100000"),G(n,"pointerEvents","none"),a.fallbackOnBody&&T.body.appendChild(n)||i.appendChild(n),t=n.getBoundingClientRect(),G(n,"width",2*o.width-t.width),G(n,"height",2*o.height-t.height)}},_onDragStart:function(t,n){var r=this,a=t.dataTransfer,l=r.options;r._offUpEvents(),g.checkPull(r,r,e,t)&&(o=le(e),o.draggable=!1,o.style["will-change"]="",G(o,"display","none"),z(o,r.options.chosenClass,!1),r._cloneId=ce(function(){i.insertBefore(o,e),Z(r,i,"clone",e)})),z(e,l.dragClass,!0),n?("touch"===n?(H(T,"touchmove",r._onTouchMove),H(T,"touchend",r._onDrop),H(T,"touchcancel",r._onDrop),l.supportPointer&&(H(T,"pointermove",r._onTouchMove),H(T,"pointerup",r._onDrop))):(H(T,"mousemove",r._onTouchMove),H(T,"mouseup",r._onDrop)),r._loopId=setInterval(r._emulateDragOver,50)):(a&&(a.effectAllowed="move",l.setData&&l.setData.call(r,a,e)),H(T,"drop",r),r._dragStartId=ce(r._dragStarted))},_onDragOver:function(a){var l,s,c,f,p=this.el,m=this.options,_=m.group,y=$.active,w=g===_,C=!1,T=m.sort;if(void 0!==a.preventDefault&&(a.preventDefault(),!m.dragoverBubble&&a.stopPropagation()),!e.animated&&(b=!0,y&&!m.disabled&&(w?T||(f=!i.contains(e)):v===this||(y.lastPullMode=g.checkPull(this,y,e,a))&&_.checkPut(this,y,e,a))&&(void 0===a.rootEl||a.rootEl===this.el))){if(j(a,m,this.el),B)return;if(l=L(a.target,m.draggable,p),s=e.getBoundingClientRect(),v!==this&&(v=this,C=!0),f)return F(y,!0),t=i,void(o||r?i.insertBefore(e,o||r):T||i.appendChild(e));if(0===p.children.length||p.children[0]===n||p===a.target&&te(p,a)){if(0!==p.children.length&&p.children[0]!==n&&p===a.target&&(l=p.lastElementChild),l){if(l.animated)return;c=l.getBoundingClientRect()}F(y,w),!1!==J(i,p,e,s,l,c,a)&&(e.contains(p)||(p.appendChild(e),t=p),this._animate(s,e),l&&this._animate(c,l))}else if(l&&!l.animated&&l!==e&&void 0!==l.parentNode[S]){d!==l&&(d=l,u=G(l),h=G(l.parentNode)),c=l.getBoundingClientRect();var x=c.right-c.left,N=c.bottom-c.top,P=D.test(u.cssFloat+u.display)||"flex"==h.display&&0===h["flex-direction"].indexOf("row"),O=l.offsetWidth>e.offsetWidth,k=l.offsetHeight>e.offsetHeight,I=(P?(a.clientX-c.left)/x:(a.clientY-c.top)/N)>.5,R=l.nextElementSibling,X=!1;if(P){var M=e.offsetTop,Y=l.offsetTop;X=M===Y?l.previousElementSibling===e&&!O||I&&O:l.previousElementSibling===e||e.previousElementSibling===l?(a.clientY-c.top)/N>.5:Y>M}else C||(X=R!==e&&!k||I&&k);var A=J(i,p,e,s,l,c,a,X);!1!==A&&(1!==A&&-1!==A||(X=1===A),B=!0,E(ee,30),F(y,w),e.contains(p)||(X&&!R?p.appendChild(e):l.parentNode.insertBefore(e,X?R:l)),t=e.parentNode,this._animate(s,e),this._animate(c,l))}}},_animate:function(e,t){var n=this.options.animation;if(n){var o=t.getBoundingClientRect();1===e.nodeType&&(e=e.getBoundingClientRect()),G(t,"transition","none"),G(t,"transform","translate3d("+(e.left-o.left)+"px,"+(e.top-o.top)+"px,0)"),t.offsetWidth,G(t,"transition","all "+n+"ms"),G(t,"transform","translate3d(0,0,0)"),clearTimeout(t.animated),t.animated=E(function(){G(t,"transition",""),G(t,"transform",""),t.animated=!1},n)}},_offUpEvents:function(){var e=this.el.ownerDocument;W(T,"touchmove",this._onTouchMove),W(T,"pointermove",this._onTouchMove),W(e,"mouseup",this._onDrop),W(e,"touchend",this._onDrop),W(e,"pointerup",this._onDrop),W(e,"touchcancel",this._onDrop),W(e,"pointercancel",this._onDrop),W(e,"selectstart",this)},_onDrop:function(a){var l=this.el,s=this.options;clearInterval(this._loopId),clearInterval(y.pid),clearTimeout(this._dragStartTimer),de(this._cloneId),de(this._dragStartId),W(T,"mouseover",this),W(T,"mousemove",this._onTouchMove),this.nativeDraggable&&(W(T,"drop",this),W(l,"dragstart",this._onDragStart)),this._offUpEvents(),a&&(b&&(a.preventDefault(),!s.dropBubble&&a.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),i!==t&&"clone"===$.active.lastPullMode||o&&o.parentNode&&o.parentNode.removeChild(o),e&&(this.nativeDraggable&&W(e,"dragend",this),K(e),e.style["will-change"]="",z(e,this.options.ghostClass,!1),z(e,this.options.chosenClass,!1),Z(this,i,"unchoose",e,t,i,f),i!==t?(p=oe(e,s.draggable),p>=0&&(Z(null,t,"add",e,t,i,f,p),Z(this,i,"remove",e,t,i,f,p),Z(null,t,"sort",e,t,i,f,p),Z(this,i,"sort",e,t,i,f,p))):e.nextSibling!==r&&(p=oe(e,s.draggable),p>=0&&(Z(this,i,"update",e,t,i,f,p),Z(this,i,"sort",e,t,i,f,p))),$.active&&(null!=p&&-1!==p||(p=f),Z(this,i,"end",e,t,i,f,p),this.save()))),this._nulling()},_nulling:function(){i=e=t=n=r=o=a=l=s=m=_=b=p=d=u=v=g=$.active=null,Y.forEach(function(e){e.checked=!0}),Y.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":e&&(this._onDragOver(t),q(t));break;case"mouseover":this._onDrop(t);break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var e,t=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)e=n[o],L(e,r.draggable,this.el)&&t.push(e.getAttribute(r.dataIdAttr)||ne(e));return t},sort:function(e){var t={},n=this.el;this.toArray().forEach(function(e,o){var i=n.children[o];L(i,this.options.draggable,n)&&(t[e]=i)},this),e.forEach(function(e){t[e]&&(n.removeChild(t[e]),n.appendChild(t[e]))})},save:function(){var e=this.options.store;e&&e.set(this)},closest:function(e,t){return L(e,t||this.options.draggable,this.el)},option:function(e,t){var n=this.options;if(void 0===t)return n[e];n[e]=t,"group"===e&&U(n)},destroy:function(){var e=this.el;e[S]=null,W(e,"mousedown",this._onTapStart),W(e,"touchstart",this._onTapStart),W(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(W(e,"dragover",this),W(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),A.splice(A.indexOf(this._onDragOver),1),this._onDrop(),this.el=e=null}},H(T,"touchmove",function(e){$.active&&e.preventDefault()}),$.utils={on:H,off:W,css:G,find:Q,is:function(e,t){return!!L(e,t,e)},extend:ae,throttle:re,closest:L,toggleClass:z,clone:le,index:oe,nextTick:ce,cancelNextTick:de},$.create=function(e,t){return new $(e,t)},$.version="1.7.0",$})}})});
