// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=y.call(n,d,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=y.call(n,h,"e+0$1"),n=y.call(n,p,"e-0$1"),e.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function A(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,o,a,l,c,s,y;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function S(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(L(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){return"string"==typeof e}function B(e){var r,t,n;if(!R(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=S(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var I,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,U=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var P=I;function Y(e,r,t){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return W&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,Z=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&Z.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,J="function"==typeof z?z.toStringTag:"",q=$()?function(e){var r,t,n;if(null==e)return G.call(e);t=e[J],r=X(e,J);try{e[J]=void 0}catch(r){return G.call(e)}return n=G.call(e),r?e[J]=t:delete e[J],n}:function(e){return G.call(e)},D=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function H(e){return null!==e&&"object"==typeof e}function K(e){return H(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function Q(){return/^\s*function\s*([^(]*)/i}Y(H,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!D(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(H));var ee=/^\s*function\s*([^(]*)/i;function re(e){var r,t,n;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ee.exec(n.toString()))return r[1]}return K(e)?"Buffer":t}Y(Q,"REGEXP",ee);var te={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},ne="function"==typeof Float64Array,ie="function"==typeof Float64Array?Float64Array:null,oe="function"==typeof Float64Array?Float64Array:void 0,ae=function(){var e,r,t;if("function"!=typeof ie)return!1;try{r=new ie([1,3.14,-3.14,NaN]),t=r,e=(ne&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?oe:function(){throw new Error("not implemented")},ue="function"==typeof Float32Array,fe=Number.POSITIVE_INFINITY,le="function"==typeof Float32Array?Float32Array:null,ce="function"==typeof Float32Array?Float32Array:void 0,se=function(){var e,r,t;if("function"!=typeof le)return!1;try{r=new le([1,3.14,-3.14,5e40]),t=r,e=(ue&&t instanceof Float32Array||"[object Float32Array]"===q(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===fe}catch(r){e=!1}return e}()?ce:function(){throw new Error("not implemented")},ye="function"==typeof Uint32Array,he="function"==typeof Uint32Array?Uint32Array:null,pe="function"==typeof Uint32Array?Uint32Array:void 0,ge=function(){var e,r,t;if("function"!=typeof he)return!1;try{r=new he(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ye&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?pe:function(){throw new Error("not implemented")},me="function"==typeof Int32Array,we="function"==typeof Int32Array?Int32Array:null,be="function"==typeof Int32Array?Int32Array:void 0,de=function(){var e,r,t;if("function"!=typeof we)return!1;try{r=new we([1,3.14,-3.14,2147483648]),t=r,e=(me&&t instanceof Int32Array||"[object Int32Array]"===q(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?be:function(){throw new Error("not implemented")},ve="function"==typeof Uint16Array,Ee="function"==typeof Uint16Array?Uint16Array:null,Ae="function"==typeof Uint16Array?Uint16Array:void 0,Te=function(){var e,r,t;if("function"!=typeof Ee)return!1;try{r=new Ee(r=[1,3.14,-3.14,65536,65537]),t=r,e=(ve&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ae:function(){throw new Error("not implemented")},_e="function"==typeof Int16Array,xe="function"==typeof Int16Array?Int16Array:null,je="function"==typeof Int16Array?Int16Array:void 0,Ve=function(){var e,r,t;if("function"!=typeof xe)return!1;try{r=new xe([1,3.14,-3.14,32768]),t=r,e=(_e&&t instanceof Int16Array||"[object Int16Array]"===q(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?je:function(){throw new Error("not implemented")},ke="function"==typeof Uint8Array,Le="function"==typeof Uint8Array?Uint8Array:null,Se="function"==typeof Uint8Array?Uint8Array:void 0,Re=function(){var e,r,t;if("function"!=typeof Le)return!1;try{r=new Le(r=[1,3.14,-3.14,256,257]),t=r,e=(ke&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Se:function(){throw new Error("not implemented")},Be="function"==typeof Uint8ClampedArray,Ie="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Ce="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Fe=function(){var e,r,t;if("function"!=typeof Ie)return!1;try{r=new Ie([-1,0,1,3.14,4.99,255,256]),t=r,e=(Be&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===q(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Ce:function(){throw new Error("not implemented")},Oe="function"==typeof Int8Array,Me="function"==typeof Int8Array?Int8Array:null,Ue="function"==typeof Int8Array?Int8Array:void 0,Ne=function(){var e,r,t;if("function"!=typeof Me)return!1;try{r=new Me([1,3.14,-3.14,128]),t=r,e=(Oe&&t instanceof Int8Array||"[object Int8Array]"===q(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Ue:function(){throw new Error("not implemented")};function Pe(e){return"number"==typeof e}var Ye=Number,We=Ye.prototype.toString,$e=$();function Ge(e){return"object"==typeof e&&(e instanceof Ye||($e?function(e){try{return We.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function Ze(e){return Pe(e)||Ge(e)}Y(Ze,"isPrimitive",Pe),Y(Ze,"isObject",Ge);var Xe=Ye.NEGATIVE_INFINITY,ze=Math.floor;function Je(e){return ze(e)===e}function qe(e){return e<fe&&e>Xe&&Je(e)}function De(e){return Pe(e)&&qe(e)}function He(e){return Ge(e)&&qe(e.valueOf())}function Ke(e){return De(e)||He(e)}function Qe(e){return De(e)&&e>=0}function er(e){return He(e)&&e.valueOf()>=0}function rr(e){return Qe(e)||er(e)}function tr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Je(e.length)&&e.length>=0&&e.length<=4294967295}function nr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Je(e.length)&&e.length>=0&&e.length<=9007199254740991}Y(Ke,"isPrimitive",De),Y(Ke,"isObject",He),Y(rr,"isPrimitive",Qe),Y(rr,"isObject",er);var ir="function"==typeof ArrayBuffer;function or(e){return ir&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===q(e)}function ar(e){return"object"==typeof e&&null!==e&&!D(e)}var ur=/./;function fr(e){return"boolean"==typeof e}var lr=Boolean,cr=Boolean.prototype.toString,sr=$();function yr(e){return"object"==typeof e&&(e instanceof lr||(sr?function(e){try{return cr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function hr(e){return fr(e)||yr(e)}function pr(){return new Function("return this;")()}Y(hr,"isPrimitive",fr),Y(hr,"isObject",yr);var gr="object"==typeof self?self:null,mr="object"==typeof window?window:null,wr="object"==typeof globalThis?globalThis:null,br=function(e){if(arguments.length){if(!fr(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return pr()}if(wr)return wr;if(gr)return gr;if(mr)return mr;throw new Error("unexpected error. Unable to resolve global object.")}(),dr=br.document&&br.document.childNodes,vr=Int8Array,Er="function"==typeof ur||"object"==typeof vr||"function"==typeof dr?function(e){return re(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?re(e).toLowerCase():r};function Ar(e){return"function"===Er(e)}function Tr(e,r){if(!(this instanceof Tr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Pe(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Pe(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Tr,"BYTES_PER_ELEMENT",8),Y(Tr.prototype,"BYTES_PER_ELEMENT",8),Y(Tr.prototype,"byteLength",16),Y(Tr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Tr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var _r="function"==typeof Math.fround?Math.fround:null,xr=new se(1),jr="function"==typeof _r?_r:function(e){return xr[0]=e,xr[0]};function Vr(e,r){if(!(this instanceof Vr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Pe(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Pe(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:jr(e)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:jr(r)}),this}function kr(e){return e instanceof Tr||e instanceof Vr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Lr(e){return Je(e/2)}function Sr(){return"function"==typeof z&&"symbol"==typeof z("foo")&&X(z,"iterator")&&"symbol"==typeof z.iterator}Y(Vr,"BYTES_PER_ELEMENT",4),Y(Vr.prototype,"BYTES_PER_ELEMENT",4),Y(Vr.prototype,"byteLength",8),Y(Vr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Vr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Rr=Sr()?Symbol.iterator:null;function Br(e,r,t){P(e,r,{configurable:!1,enumerable:!1,get:t})}function Ir(e){return e.re}function Cr(e){return e.im}function Fr(e,r){return new se(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Or(e,r){return new ae(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var Mr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function Ur(e){var r=Mr[e];return"function"==typeof r?r:Mr.default}var Nr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Pr(e){var r=Nr[e];return"function"==typeof r?r:Nr.default}function Yr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(tr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!kr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Ir(n),Cr(n))}return r}function Wr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,tr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!kr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ir(o),Cr(o))}return n}function $r(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!kr(n=r[i]))return null;e[o]=Ir(n),e[o+1]=Cr(n),o+=2}return e}var Gr=2*se.BYTES_PER_ELEMENT,Zr=Sr();function Xr(e){return e instanceof Dr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function zr(e){return e===Dr||"Complex128Array"===e.name}function Jr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Gr}function qr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Gr}function Dr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Dr))return 0===r?new Dr:1===r?new Dr(arguments[0]):2===r?new Dr(arguments[0],arguments[1]):new Dr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new se(0);else if(1===r)if(Qe(arguments[0]))t=new se(2*arguments[0]);else if(nr(arguments[0]))if((n=(t=arguments[0]).length)&&D(t)&&kr(t[0])){if(null===(t=$r(new se(2*n),t))){if(!Lr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new se(arguments[0])}}else{if(Jr(t))t=Fr(t,0);else if(qr(t))t=Or(t,0);else if(!Lr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new se(t)}else if(or(arguments[0])){if(!Je((t=arguments[0]).byteLength/Gr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Gr,t.byteLength));t=new se(t)}else{if(!ar(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Zr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ar(t[Rr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ar((t=t[Rr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Yr(t))instanceof Error)throw t;t=new se(t)}else{if(!or(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Qe(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Je(e/Gr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Gr,e));if(2===r){if(!Je((n=t.byteLength-e)/Gr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Gr,n));t=new se(t,e)}else{if(!Qe(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Gr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Gr));t=new se(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function Hr(e){return e.re}function Kr(e){return e.im}function Qr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(tr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!kr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Hr(n),Kr(n))}return r}function et(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,tr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!kr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Hr(o),Kr(o))}return n}function rt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!kr(n=r[i]))return null;e[o]=Hr(n),e[o+1]=Kr(n),o+=2}return e}Y(Dr,"BYTES_PER_ELEMENT",Gr),Y(Dr,"name","Complex64Array"),Y(Dr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Ar(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ar(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Xr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,e.get(s),s)))o[y]=Ir(c),o[y+1]=Cr(c);else{if(!(tr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(nr(e)){if(n){for(f=e.length,u=e.get&&e.set?Pr("default"):Ur("default"),s=0;s<f;s++)if(!kr(u(e,s))){l=!0;break}if(l){if(!Lr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,u(e,s),s)))o[y]=Ir(c),o[y+1]=Cr(c);else{if(!(tr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ar(e)&&Zr&&Ar(e[Rr])){if(!Ar((o=e[Rr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Wr(o,n,r):Yr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(Dr,"of",(function(){var e,r;if(!Ar(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Br(Dr.prototype,"buffer",(function(){return this._buffer.buffer})),Br(Dr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Br(Dr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(Dr.prototype,"BYTES_PER_ELEMENT",Dr.BYTES_PER_ELEMENT),Y(Dr.prototype,"copyWithin",(function(e,r){if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(Dr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Vr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Rr&&Y(t,Rr,(function(){return r.entries()})),t})),Y(Dr.prototype,"get",(function(e){var r;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qe(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Vr((r=this._buffer)[e*=2],r[e+1])})),Br(Dr.prototype,"length",(function(){return this._length})),Y(Dr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Qe(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(kr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ir(e),void(n[t+1]=Cr(e))}if(Xr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Gr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new se(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!nr(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!kr(e[f])){o=!0;break}if(o){if(!Lr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Gr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new se(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Ir(u),n[t+1]=Cr(u),t+=2}}));var tt=2*ae.BYTES_PER_ELEMENT,nt=Sr();function it(e){return e instanceof ft||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ot(e){return e===ft||"Complex64Array"===e.name}function at(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===tt/2}function ut(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===tt}function ft(){var e,r,t,n;if(r=arguments.length,!(this instanceof ft))return 0===r?new ft:1===r?new ft(arguments[0]):2===r?new ft(arguments[0],arguments[1]):new ft(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ae(0);else if(1===r)if(Qe(arguments[0]))t=new ae(2*arguments[0]);else if(nr(arguments[0]))if((n=(t=arguments[0]).length)&&D(t)&&kr(t[0])){if(null===(t=rt(new ae(2*n),t))){if(!Lr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ae(arguments[0])}}else{if(at(t))t=Fr(t,0);else if(ut(t))t=Or(t,0);else if(!Lr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ae(t)}else if(or(arguments[0])){if(!Je((t=arguments[0]).byteLength/tt))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",tt,t.byteLength));t=new ae(t)}else{if(!ar(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===nt)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ar(t[Rr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ar((t=t[Rr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Qr(t))instanceof Error)throw t;t=new ae(t)}else{if(!or(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Qe(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!Je(e/tt))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",tt,e));if(2===r){if(!Je((n=t.byteLength-e)/tt))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",tt,n));t=new ae(t,e)}else{if(!Qe(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*tt>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*tt));t=new ae(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(ft,"BYTES_PER_ELEMENT",tt),Y(ft,"name","Complex128Array"),Y(ft,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Ar(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ar(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(it(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,e.get(s),s)))o[y]=Hr(c),o[y+1]=Kr(c);else{if(!(tr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(nr(e)){if(n){for(f=e.length,u=e.get&&e.set?Pr("default"):Ur("default"),s=0;s<f;s++)if(!kr(u(e,s))){l=!0;break}if(l){if(!Lr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(kr(c=n.call(r,u(e,s),s)))o[y]=Hr(c),o[y+1]=Kr(c);else{if(!(tr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ar(e)&&nt&&Ar(e[Rr])){if(!Ar((o=e[Rr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?et(o,n,r):Qr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(ft,"of",(function(){var e,r;if(!Ar(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Br(ft.prototype,"buffer",(function(){return this._buffer.buffer})),Br(ft.prototype,"byteLength",(function(){return this._buffer.byteLength})),Br(ft.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(ft.prototype,"BYTES_PER_ELEMENT",ft.BYTES_PER_ELEMENT),Y(ft.prototype,"copyWithin",(function(e,r){if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(ft.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Tr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Rr&&Y(t,Rr,(function(){return r.entries()})),t})),Y(ft.prototype,"get",(function(e){var r;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qe(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Tr((r=this._buffer)[e*=2],r[e+1])})),Br(ft.prototype,"length",(function(){return this._length})),Y(ft.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Qe(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(kr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Hr(e),void(n[t+1]=Kr(e))}if(it(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*tt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ae(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!nr(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!kr(e[f])){o=!0;break}if(o){if(!Lr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*tt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ae(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Hr(u),n[t+1]=Kr(u),t+=2}}));var lt=[ae,se,de,ge,Ve,Te,Ne,Re,Fe,Dr,ft],ct=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],st=ct.length;function yt(e){var r;if(D(e))return"generic";if(K(e))return null;for(r=0;r<st;r++)if(e instanceof lt[r])return ct[r];return te[re(e)]||null}var ht={float64:ae,float32:se,generic:Array,int16:Ve,int32:de,int8:Ne,uint16:Te,uint32:ge,uint8:Re,uint8c:Fe,complex64:Dr,complex128:ft};function pt(e){return ht[e]||null}function gt(e){return function(e,r){var t,n;for(t=[],n=0;n<r;n++)t.push(e);return t}(0,e)}function mt(e){var r,t;if(!Qe(e))throw new TypeError(B("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",e));if("generic"===(r=arguments.length>1?arguments[1]:"float64"))return gt(e);if(null===(t=pt(r)))throw new TypeError(B("invalid argument. Second argument must be a recognized data type. Value: `%s`.",r));return new t(e)}function wt(e){return arguments.length>1?mt(e,arguments[1]):mt(e)}return function(e){var r=yt(e);if(null===r)throw new TypeError(B("invalid argument. First argument must be either an array, typed array, or complex typed array. Value: `%s`.",e));return arguments.length>1&&(r=arguments[1]),wt(e.length,r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).emptyLike=r();
//# sourceMappingURL=browser.js.map
