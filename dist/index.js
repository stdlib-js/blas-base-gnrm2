"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=q(function(G,g){
var y=require('@stdlib/math-base-special-sqrt/dist'),f=require('@stdlib/math-base-special-abs/dist'),b=require('@stdlib/math-base-special-pow/dist');function P(e,r,v,o){var a,s,u,i,n,t,c;if(s=r.data,u=r.accessors[0],t=o,e===1)return f(u(s,t));if(v===0)return y(e)*f(u(s,t));for(a=0,i=1,c=0;c<e;c++)u(s,t)!==0&&(n=f(u(s,t)),a<n?(i=1+i*b(a/n,2),a=n):i+=b(n/a,2)),t+=v;return a*y(i)}g.exports=P
});var p=q(function(H,w){
var R=require('@stdlib/array-base-arraylike2object/dist'),x=require('@stdlib/math-base-special-sqrt/dist'),l=require('@stdlib/math-base-special-abs/dist'),d=require('@stdlib/math-base-special-pow/dist'),h=m();function z(e,r,v,o){var a,s,u,i,n,t;if(e<=0)return 0;if(n=R(r),n.accessorProtocol)return h(e,n,v,o);if(i=o,e===1)return l(r[i]);if(v===0)return x(e)*l(r[i]);for(a=0,s=1,t=0;t<e;t++)r[i]!==0&&(u=l(r[i]),a<u?(s=1+s*d(a/u,2),a=u):s+=d(u/a,2)),i+=v;return a*x(s)}w.exports=z
});var k=q(function(I,j){
var A=require('@stdlib/strided-base-stride2offset/dist'),B=p();function C(e,r,v){return B(e,r,v,A(e,v))}j.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=k(),E=p();D(O,"ndarray",E);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
