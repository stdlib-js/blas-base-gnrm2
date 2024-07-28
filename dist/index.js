"use strict";var q=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var l=q(function(k,c){
var w=require('@stdlib/math-base-special-sqrt/dist'),f=require('@stdlib/math-base-special-abs/dist'),o=require('@stdlib/math-base-special-pow/dist');function x(u,r,v){var s,e,a,i;if(u<=0||v<=0)return 0;if(u===1)return f(r[0]);for(s=0,e=1,u*=v,i=0;i<u;i+=v)r[i]!==0&&(a=f(r[i]),s<a?(e=1+e*o(s/a,2),s=a):e+=o(a/s,2));return s*w(e)}c.exports=x
});var b=q(function(z,y){
var d=require('@stdlib/math-base-special-sqrt/dist'),p=require('@stdlib/math-base-special-abs/dist'),m=require('@stdlib/math-base-special-pow/dist');function O(u,r,v,s){var e,a,i,t,n;if(u<=0)return 0;if(u===1)return p(r[s]);for(t=s,e=0,a=1,n=0;n<u;n++)r[t]!==0&&(i=p(r[t]),e<i?(a=1+a*m(e/i,2),e=i):a+=m(i/e,2)),t+=v;return e*d(a)}y.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=l(),h=b();R(g,"ndarray",h);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
