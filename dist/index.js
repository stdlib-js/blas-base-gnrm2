"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var m=q(function(G,g){
var y=require('@stdlib/math-base-special-sqrt/dist'),f=require('@stdlib/math-base-special-abs/dist'),b=require('@stdlib/math-base-special-pow/dist');function P(e,r,s,o){var a,u,t,i,n,v,c;if(u=r.data,t=r.accessors[0],v=o,e===1)return f(t(u,v));if(s===0)return y(e)*f(t(u,v));for(a=0,i=1,c=0;c<e;c++)t(u,v)!==0&&(n=f(t(u,v)),a<n?(i=1+i*b(a/n,2),a=n):i+=b(n/a,2)),v+=s;return a*y(i)}g.exports=P
});var p=q(function(H,w){
var R=require('@stdlib/array-base-arraylike2object/dist'),x=require('@stdlib/math-base-special-sqrt/dist'),l=require('@stdlib/math-base-special-abs/dist'),d=require('@stdlib/math-base-special-pow/dist'),h=m();function z(e,r,s,o){var a,u,t,i,n,v;if(e<=0)return 0;if(n=R(r),n.accessorProtocol)return h(e,n,s,o);if(i=o,e===1)return l(r[i]);if(s===0)return x(e)*l(r[i]);for(a=0,u=1,v=0;v<e;v++)r[i]!==0&&(t=l(r[i]),a<t?(u=1+u*d(a/t,2),a=t):u+=d(t/a,2)),i+=s;return a*x(u)}w.exports=z
});var k=q(function(I,j){
var A=require('@stdlib/strided-base-stride2offset/dist'),B=p();function C(e,r,s){return B(e,r,s,A(e,s))}j.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=k(),E=p();D(O,"ndarray",E);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
