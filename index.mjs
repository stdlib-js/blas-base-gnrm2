// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";function n(e,n,i){var d,m,a,o;if(e<=0||i<=0)return 0;if(1===e)return t(n[0]);for(d=0,m=1,e*=i,o=0;o<e;o+=i)0!==n[o]&&(d<(a=t(n[o]))?(m=1+m*s(d/a,2),d=a):m+=s(a/d,2));return d*r(m)}e(n,"ndarray",(function(e,n,i,d){var m,a,o,l,p;if(e<=0)return 0;if(1===e)return t(n[d]);for(l=d,m=0,a=1,p=0;p<e;p++)0!==n[l]&&(m<(o=t(n[l]))?(a=1+a*s(m/o,2),m=o):a+=s(o/m,2)),l+=i;return m*r(a)}));export{n as default};
//# sourceMappingURL=index.mjs.map
