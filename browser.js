// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,U=isNaN,I=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,n,t,a,o,c,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=S(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,U(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,U(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!U(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=U(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(F(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function T(r){return"string"==typeof r}function N(r){var e,n,t;if(!T(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=j(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return x.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var P=Math.sqrt;function R(r){return Math.abs(r)}function Z(r){return r!=r}var M=Math.floor;function X(r){return M(r)===r}function Y(r){return X(r/2)}function q(r){return Y(r>0?r-1:r+1)}var z=Number.POSITIVE_INFINITY,B=Number.NEGATIVE_INFINITY;function D(r){return r===z||r===B}var J,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof er?er.toStringTag:"",tr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Q.call(r);n=r[nr],a=nr,e=null!=(i=r)&&rr.call(i,a);try{r[nr]=void 0}catch(e){return Q.call(r)}return t=Q.call(r),e?r[nr]=n:delete r[nr],t}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===tr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,fr=J,cr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(cr&&n instanceof Float64Array||"[object Float64Array]"===tr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr=ur,gr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,hr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,256,257]),n=e,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===tr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var vr,wr=pr,br="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===tr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:vr,uint8:wr};(_r=new Er.uint16(1))[0]=4660;var Ur,Ir,Sr=52===new Er.uint8(_r.buffer)[0];!0===Sr?(Ur=1,Ir=0):(Ur=0,Ir=1);var xr={HIGH:Ur,LOW:Ir},kr=new yr(1),Fr=new fr(kr.buffer),jr=xr.HIGH,Tr=xr.LOW;function Nr(r,e,n,t){return kr[0]=r,e[t]=Fr[jr],e[t+n]=Fr[Tr],e}function Or(r){return Nr(r,[0,0],1,0)}L(Or,"assign",Nr);var Vr=!0===Sr?0:1,$r=new yr(1),Gr=new fr($r.buffer);function Hr(r,e){return $r[0]=r,Gr[Vr]=e>>>0,$r[0]}function Wr(r){return 0|r}var Cr,Lr,Pr=2147483647,Rr=!0===Sr?1:0,Zr=new yr(1),Mr=new fr(Zr.buffer);function Xr(r){return Zr[0]=r,Mr[Rr]}!0===Sr?(Cr=1,Lr=0):(Cr=0,Lr=1);var Yr={HIGH:Cr,LOW:Lr},qr=new yr(1),zr=new fr(qr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,e){return zr[Br]=r,zr[Dr]=e,qr[0]}var Kr=[0,0];function Qr(r,e){var n,t;return Or.assign(r,Kr,1,0),n=Kr[0],n&=Pr,t=Xr(e),Jr(n|=t&=2147483648,Kr[1])}var re=!0===Sr?1:0,ee=new yr(1),ne=new fr(ee.buffer);function te(r,e){return ee[0]=r,ne[re]=e>>>0,ee[0]}var ie=1023,ae=1048576,oe=[1,1.5],ue=[0,.5849624872207642],fe=[0,1.350039202129749e-8];function ce(r,e,n,t){return Z(r)||D(r)?(e[t]=r,e[t+n]=0,e):0!==r&&R(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var se=[0,0],le=[0,0];function pe(r,e){var n,t;return 0===e||0===r||Z(r)||D(r)?r:(ce(r,se,1,0),e+=se[1],e+=function(r){var e=Xr(r);return(e=(2146435072&e)>>>20)-ie|0}(r=se[0]),e<-1074?Qr(0,r):e>1023?r<0?B:z:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Or.assign(r,le,1,0),n=le[0],n&=2148532223,t*Jr(n|=e+ie<<20,le[1])))}var ye=1048575,ge=1048576,de=1083179008,he=1e300,ve=1e-300,we=[0,0],be=[0,0];function me(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,d;if(Z(r)||Z(e))return NaN;if(Or.assign(e,we,1,0),o=we[0],0===we[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return P(r);if(-.5===e)return 1/P(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(D(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:R(r)<1==(e===z)?0:z}(r,e)}if(Or.assign(r,we,1,0),a=we[0],0===we[1]){if(0===a)return function(r,e){return e===B?z:e===z?0:e>0?q(e)?r:0:q(e)?Qr(z,r):z}(r,e);if(1===r)return 1;if(-1===r&&q(e))return-1;if(D(r))return r===B?me(-0,-e):e<0?0:z}if(r<0&&!1===X(e))return(r-r)/(r-r);if(i=R(r),n=a&Pr|0,t=o&Pr|0,f=o>>>31|0,u=(u=a>>>31|0)&&q(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(Xr(r)&Pr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*he*he:u*ve*ve;if(n>1072693248)return 0===f?u*he*he:u*ve*ve;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Hr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(be,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,h,v,w,b,m,A,_,E;return m=0,n<ae&&(m-=53,n=Xr(e*=9007199254740992)),m+=(n>>20)-ie|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ae),o=Hr(i=(w=(e=te(e,n))-(c=oe[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=te(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Hr(f=3+(a=o*o)+(v+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=Hr(l=(w=o*f)+(b=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+fe[_])-((g=Hr(g=(p=.9617967009544373*l)+y+(s=ue[_])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(be,i,n);if(y=(l=(e-(c=Hr(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Or.assign(y,we,1,0),g=Wr(we[0]),d=Wr(we[1]),g>=de){if(0!=(g-de|d))return u*he*he;if(l+8008566259537294e-32>y-s)return u*he*he}else if((g&Pr)>=1083231232){if(0!=(g-3230714880|d))return u*ve*ve;if(l<=y-s)return u*ve*ve}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Pr|0)>>20)-ie|0,c=0,s>1071644672&&(i=te(0,((c=r+(ge>>l+1)>>>0)&~(ye>>(l=((c&Pr)>>20)-ie|0)))>>>0),c=(c&ye|ge)>>20-l>>>0,r<0&&(c=-c),e-=i),r=Wr(r=Xr(f=1-((f=(a=.6931471824645996*(i=Hr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?pe(f,c):te(f,r)}(g,s,l),u*y}function Ae(r,e,n){var t,i,a,o;if(r<=0||n<=0)return 0;if(1===r)return R(e[0]);for(t=0,i=1,r*=n,o=0;o<r;o+=n)0!==e[o]&&(t<(a=R(e[o]))?(i=1+i*me(t/a,2),t=a):i+=me(a/t,2));return t*P(i)}return L(Ae,"ndarray",(function(r,e,n,t){var i,a,o,u,f;if(r<=0)return 0;if(1===r)return R(e[t]);for(u=t,i=0,a=1,f=0;f<r;f++)0!==e[u]&&(i<(o=R(e[u]))?(a=1+a*me(i/o,2),i=o):a+=me(o/i,2)),u+=n;return i*P(a)})),Ae},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).gnrm2=e();
//# sourceMappingURL=browser.js.map