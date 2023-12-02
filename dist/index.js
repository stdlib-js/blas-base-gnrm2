"use strict";var q=function(s,r){return function(){return r||s((r={exports:{}}).exports,r),r.exports}};var p=q(function(B,c){
var d=require('@stdlib/math-base-special-sqrt/dist'),f=require('@stdlib/math-base-special-abs/dist'),o=require('@stdlib/math-base-special-pow/dist');function O(s,r,t){var u,e,a,i;if(s<=0||t<=0)return 0;if(s===1)return f(r[0]);for(u=0,e=1,s*=t,i=0;i<s;i+=t)r[i]!==0&&(a=f(r[i]),u<a?(e=1+e*o(u/a,2),u=a):e+=o(a/u,2));return u*d(e)}c.exports=O
});var x=q(function(C,m){
var R=require('@stdlib/math-base-special-sqrt/dist'),l=require('@stdlib/math-base-special-abs/dist'),g=require('@stdlib/math-base-special-pow/dist');function h(s,r,t,u){var e,a,i,v,n;if(s<=0)return 0;if(s===1)return l(r[u]);for(v=u,e=0,a=1,n=0;n<s;n++)r[v]!==0&&(i=l(r[v]),e<i?(a=1+a*g(e/i,2),e=i):a+=g(i/e,2)),v+=t;return e*R(a)}m.exports=h
});var w=q(function(D,b){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),k=x();j(y,"ndarray",k);b.exports=y
});var z=w();module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
