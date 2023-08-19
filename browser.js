// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).emptyLike=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(e,r,t.get),s&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return y&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function p(e,r){return null!=e&&m.call(e,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var w=s()?function(e){var r,t,n;if(null==e)return h.call(e);t=e[g],r=p(e,g);try{e[g]=void 0}catch(r){return h.call(e)}return n=h.call(e),r?e[g]=t:delete e[g],n}:function(e){return h.call(e)};var b=Array.isArray?Array.isArray:function(e){return"[object Array]"===w(e)};function v(e){return null!==e&&"object"==typeof e}function d(e){return v(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function E(){return/^\s*function\s*([^(]*)/i}c(v,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!b(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(v));var A=/^\s*function\s*([^(]*)/i;function _(e){var r,t,n;if(("Object"===(t=w(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=A.exec(n.toString()))return r[1]}return d(e)?"Buffer":t}c(E,"REGEXP",A);var T={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},j="function"==typeof Float64Array;var x="function"==typeof Float64Array?Float64Array:null;var L="function"==typeof Float64Array?Float64Array:void 0;var B=function(){var e,r,t;if("function"!=typeof x)return!1;try{r=new x([1,3.14,-3.14,NaN]),t=r,e=(j&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?L:function(){throw new Error("not implemented")},V="function"==typeof Float32Array;var S=Number.POSITIVE_INFINITY,R="function"==typeof Float32Array?Float32Array:null;var k="function"==typeof Float32Array?Float32Array:void 0;var I=function(){var e,r,t;if("function"!=typeof R)return!1;try{r=new R([1,3.14,-3.14,5e40]),t=r,e=(V&&t instanceof Float32Array||"[object Float32Array]"===w(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===S}catch(r){e=!1}return e}()?k:function(){throw new Error("not implemented")},C="function"==typeof Uint32Array;var M="function"==typeof Uint32Array?Uint32Array:null;var O="function"==typeof Uint32Array?Uint32Array:void 0;var U=function(){var e,r,t;if("function"!=typeof M)return!1;try{r=new M(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(C&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?O:function(){throw new Error("not implemented")},F="function"==typeof Int32Array;var N="function"==typeof Int32Array?Int32Array:null;var P="function"==typeof Int32Array?Int32Array:void 0;var Y=function(){var e,r,t;if("function"!=typeof N)return!1;try{r=new N([1,3.14,-3.14,2147483648]),t=r,e=(F&&t instanceof Int32Array||"[object Int32Array]"===w(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?P:function(){throw new Error("not implemented")},W="function"==typeof Uint16Array;var G="function"==typeof Uint16Array?Uint16Array:null;var J="function"==typeof Uint16Array?Uint16Array:void 0;var z=function(){var e,r,t;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,65536,65537]),t=r,e=(W&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?J:function(){throw new Error("not implemented")},X="function"==typeof Int16Array;var Z="function"==typeof Int16Array?Int16Array:null;var q="function"==typeof Int16Array?Int16Array:void 0;var D=function(){var e,r,t;if("function"!=typeof Z)return!1;try{r=new Z([1,3.14,-3.14,32768]),t=r,e=(X&&t instanceof Int16Array||"[object Int16Array]"===w(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?q:function(){throw new Error("not implemented")},H="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null;var Q="function"==typeof Uint8Array?Uint8Array:void 0;var $=function(){var e,r,t;if("function"!=typeof K)return!1;try{r=new K(r=[1,3.14,-3.14,256,257]),t=r,e=(H&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Q:function(){throw new Error("not implemented")},ee="function"==typeof Uint8ClampedArray;var re="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var te="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ne=function(){var e,r,t;if("function"!=typeof re)return!1;try{r=new re([-1,0,1,3.14,4.99,255,256]),t=r,e=(ee&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===w(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?te:function(){throw new Error("not implemented")},ie="function"==typeof Int8Array;var oe="function"==typeof Int8Array?Int8Array:null;var ae="function"==typeof Int8Array?Int8Array:void 0;var ue=function(){var e,r,t;if("function"!=typeof oe)return!1;try{r=new oe([1,3.14,-3.14,128]),t=r,e=(ie&&t instanceof Int8Array||"[object Int8Array]"===w(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?ae:function(){throw new Error("not implemented")};function fe(e){return"number"==typeof e}var le=Number,ce=le.prototype.toString;var ye=s();function se(e){return"object"==typeof e&&(e instanceof le||(ye?function(e){try{return ce.call(e),!0}catch(e){return!1}}(e):"[object Number]"===w(e)))}function he(e){return fe(e)||se(e)}c(he,"isPrimitive",fe),c(he,"isObject",se);var me=le.NEGATIVE_INFINITY,pe=Math.floor;function ge(e){return pe(e)===e}function we(e){return e<S&&e>me&&ge(e)}function be(e){return fe(e)&&we(e)}function ve(e){return se(e)&&we(e.valueOf())}function de(e){return be(e)||ve(e)}function Ee(e){return be(e)&&e>=0}function Ae(e){return ve(e)&&e.valueOf()>=0}function _e(e){return Ee(e)||Ae(e)}c(de,"isPrimitive",be),c(de,"isObject",ve),c(_e,"isPrimitive",Ee),c(_e,"isObject",Ae);function Te(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ge(e.length)&&e.length>=0&&e.length<=4294967295}function je(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ge(e.length)&&e.length>=0&&e.length<=9007199254740991}var xe="function"==typeof ArrayBuffer;function Le(e){return xe&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===w(e)}function Be(e){return"object"==typeof e&&null!==e&&!b(e)}var Ve=/./;function Se(e){return"boolean"==typeof e}var Re=Boolean.prototype.toString;var ke=s();function Ie(e){return"object"==typeof e&&(e instanceof Boolean||(ke?function(e){try{return Re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===w(e)))}function Ce(e){return Se(e)||Ie(e)}function Me(){return new Function("return this;")()}c(Ce,"isPrimitive",Se),c(Ce,"isObject",Ie);var Oe="object"==typeof self?self:null,Ue="object"==typeof window?window:null,Fe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ne="object"==typeof Fe?Fe:null;var Pe=function(e){if(arguments.length){if(!Se(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Me()}if(Oe)return Oe;if(Ue)return Ue;if(Ne)return Ne;throw new Error("unexpected error. Unable to resolve global object.")}(),Ye=Pe.document&&Pe.document.childNodes,We=Int8Array;var Ge="function"==typeof Ve||"object"==typeof We||"function"==typeof Ye?function(e){return _(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?_(e).toLowerCase():r};function Je(e){return"function"===Ge(e)}function ze(e,r){if(!(this instanceof ze))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!fe(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!fe(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c(ze,"BYTES_PER_ELEMENT",8),c(ze.prototype,"BYTES_PER_ELEMENT",8),c(ze.prototype,"byteLength",16),c(ze.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(ze.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Xe="function"==typeof Math.fround?Math.fround:null,Ze=new I(1);var qe="function"==typeof Xe?Xe:function(e){return Ze[0]=e,Ze[0]};function De(e,r){if(!(this instanceof De))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!fe(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!fe(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:qe(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:qe(r)}),this}function He(e){return e instanceof ze||e instanceof De||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Ke(e){return ge(e/2)}function Qe(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&p(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(De,"BYTES_PER_ELEMENT",4),c(De.prototype,"BYTES_PER_ELEMENT",4),c(De.prototype,"byteLength",8),c(De.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(De.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var $e=Qe()?Symbol.iterator:null;function er(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function rr(e){return e.re}function tr(e){return e.im}function nr(e,r){return new I(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function ir(e,r){return new B(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function or(e,r){return e[r]}function ar(e,r){return e.get(r)}function ur(e,r,t){e[r]=t}function fr(e,r,t){e.set(t,r)}function lr(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?ar:or,setter:r?fr:ur}}function cr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Te(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!He(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(rr(n),tr(n))}return r}function yr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Te(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!He(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(rr(o),tr(o))}return n}function sr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!He(n=r[i]))return null;e[o]=rr(n),e[o+1]=tr(n),o+=2}return e}var hr=2*I.BYTES_PER_ELEMENT,mr=Qe();function pr(e){return e instanceof vr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function gr(e){return e===vr||"Complex128Array"===e.name}function wr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===hr}function br(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*hr}function vr(){var e,r,t,n;if(r=arguments.length,!(this instanceof vr))return 0===r?new vr:1===r?new vr(arguments[0]):2===r?new vr(arguments[0],arguments[1]):new vr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new I(0);else if(1===r)if(Ee(arguments[0]))t=new I(2*arguments[0]);else if(je(arguments[0]))if((n=(t=arguments[0]).length)&&b(t)&&He(t[0])){if(null===(t=sr(new I(2*n),t))){if(!Ke(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new I(arguments[0])}}else{if(wr(t))t=nr(t,0);else if(br(t))t=ir(t,0);else if(!Ke(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new I(t)}else if(Le(arguments[0])){if(!ge((t=arguments[0]).byteLength/hr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+hr+". Byte length: `"+t.byteLength+"`.");t=new I(t)}else{if(!Be(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===mr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Je(t[$e]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Je((t=t[$e]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=cr(t))instanceof Error)throw t;t=new I(t)}else{if(!Le(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ee(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!ge(e/hr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+hr+". Value: `"+e+"`.");if(2===r){if(!ge((n=t.byteLength-e)/hr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+hr+". View byte length: `"+n+"`.");t=new I(t,e)}else{if(!Ee(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*hr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*hr+"`.");t=new I(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function dr(e){return e.re}function Er(e){return e.im}function Ar(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Te(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!He(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(dr(n),Er(n))}return r}function _r(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Te(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!He(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(dr(o),Er(o))}return n}function Tr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!He(n=r[i]))return null;e[o]=dr(n),e[o+1]=Er(n),o+=2}return e}c(vr,"BYTES_PER_ELEMENT",hr),c(vr,"name","Complex64Array"),c(vr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!gr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Je(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(pr(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(He(l=n.call(r,e.get(c),c)))o[y]=rr(l),o[y+1]=tr(l);else{if(!(Te(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(je(e)){if(n){for(u=e.length,a=lr(e),c=0;c<u;c++)if(!He(a.getter(e,c))){f=!0;break}if(f){if(!Ke(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(He(l=n.call(r,a.getter(e,c),c)))o[y]=rr(l),o[y+1]=tr(l);else{if(!(Te(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Be(e)&&mr&&Je(e[$e])){if(!Je((o=e[$e]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?yr(o,n,r):cr(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(vr,"of",(function(){var e,r;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!gr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),er(vr.prototype,"buffer",(function(){return this._buffer.buffer})),er(vr.prototype,"byteLength",(function(){return this._buffer.byteLength})),er(vr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(vr.prototype,"BYTES_PER_ELEMENT",vr.BYTES_PER_ELEMENT),c(vr.prototype,"copyWithin",(function(e,r){if(!pr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(vr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!pr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new De(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),c(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),$e&&c(t,$e,(function(){return r.entries()})),t})),c(vr.prototype,"get",(function(e){var r;if(!pr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ee(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new De((r=this._buffer)[e*=2],r[e+1])})),er(vr.prototype,"length",(function(){return this._length})),c(vr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!pr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ee(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(He(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=rr(e),void(n[t+1]=tr(e))}if(pr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*hr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new I(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!je(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!He(e[f])){o=!0;break}if(o){if(!Ke(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*hr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new I(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=rr(u),n[t+1]=tr(u),t+=2}}));var jr=2*B.BYTES_PER_ELEMENT,xr=Qe();function Lr(e){return e instanceof Rr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Br(e){return e===Rr||"Complex64Array"===e.name}function Vr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===jr/2}function Sr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===jr}function Rr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Rr))return 0===r?new Rr:1===r?new Rr(arguments[0]):2===r?new Rr(arguments[0],arguments[1]):new Rr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new B(0);else if(1===r)if(Ee(arguments[0]))t=new B(2*arguments[0]);else if(je(arguments[0]))if((n=(t=arguments[0]).length)&&b(t)&&He(t[0])){if(null===(t=Tr(new B(2*n),t))){if(!Ke(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new B(arguments[0])}}else{if(Vr(t))t=nr(t,0);else if(Sr(t))t=ir(t,0);else if(!Ke(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new B(t)}else if(Le(arguments[0])){if(!ge((t=arguments[0]).byteLength/jr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+jr+". Byte length: `"+t.byteLength+"`.");t=new B(t)}else{if(!Be(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===xr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Je(t[$e]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Je((t=t[$e]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Ar(t))instanceof Error)throw t;t=new B(t)}else{if(!Le(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ee(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!ge(e/jr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+jr+". Value: `"+e+"`.");if(2===r){if(!ge((n=t.byteLength-e)/jr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+jr+". View byte length: `"+n+"`.");t=new B(t,e)}else{if(!Ee(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*jr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*jr+"`.");t=new B(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Rr,"BYTES_PER_ELEMENT",jr),c(Rr,"name","Complex128Array"),c(Rr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,y;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Je(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Lr(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(He(l=n.call(r,e.get(c),c)))o[y]=dr(l),o[y+1]=Er(l);else{if(!(Te(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(je(e)){if(n){for(u=e.length,a=lr(e),c=0;c<u;c++)if(!He(a.getter(e,c))){f=!0;break}if(f){if(!Ke(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,y=0,c=0;c<u;c++){if(He(l=n.call(r,a.getter(e,c),c)))o[y]=dr(l),o[y+1]=Er(l);else{if(!(Te(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[y]=l[0],o[y+1]=l[1]}y+=2}return i}return new this(e)}if(Be(e)&&xr&&Je(e[$e])){if(!Je((o=e[$e]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?_r(o,n,r):Ar(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Rr,"of",(function(){var e,r;if(!Je(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),er(Rr.prototype,"buffer",(function(){return this._buffer.buffer})),er(Rr.prototype,"byteLength",(function(){return this._buffer.byteLength})),er(Rr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Rr.prototype,"BYTES_PER_ELEMENT",Rr.BYTES_PER_ELEMENT),c(Rr.prototype,"copyWithin",(function(e,r){if(!Lr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Rr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Lr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new ze(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),c(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),$e&&c(t,$e,(function(){return r.entries()})),t})),c(Rr.prototype,"get",(function(e){var r;if(!Lr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ee(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new ze((r=this._buffer)[e*=2],r[e+1])})),er(Rr.prototype,"length",(function(){return this._length})),c(Rr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Lr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ee(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(He(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=dr(e),void(n[t+1]=Er(e))}if(Lr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*jr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new B(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!je(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!He(e[f])){o=!0;break}if(o){if(!Ke(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*jr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new B(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=dr(u),n[t+1]=Er(u),t+=2}}));var kr=[B,I,Y,U,D,z,ue,$,ne,vr,Rr],Ir=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Cr=Ir.length;function Mr(e){var r;if(b(e))return"generic";if(d(e))return null;for(r=0;r<Cr;r++)if(e instanceof kr[r])return Ir[r];return T[_(e)]||null}var Or={float64:B,float32:I,generic:Array,int16:D,int32:Y,int8:ue,uint16:z,uint32:U,uint8:$,uint8c:ne,complex64:vr,complex128:Rr};function Ur(e){return Or[e]||null}function Fr(e){return function(e,r){var t,n;for(t=[],n=0;n<r;n++)t.push(e);return t}(0,e)}function Nr(e){var r,t;if(!Ee(e))throw new TypeError("invalid argument. First argument must be a nonnegative integer. Value: `"+e+"`.");if("generic"===(r=arguments.length>1?arguments[1]:"float64"))return Fr(e);if(null===(t=Ur(r)))throw new TypeError("invalid argument. Second argument must be a recognized data type. Value: `"+r+"`.");return new t(e)}function Pr(e){return arguments.length>1?Nr(e,arguments[1]):Nr(e)}function Yr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function(e){var r=Mr(e);if(null===r)throw new TypeError(Yr("1Zh2f,Mm",e));return arguments.length>1&&(r=arguments[1]),Pr(e.length,r)}}));
//# sourceMappingURL=browser.js.map
