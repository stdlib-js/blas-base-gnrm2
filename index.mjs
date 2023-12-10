// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";function n(r,n,i){var a,d,m,o;if(r<=0||i<=0)return 0;if(1===r)return t(n[0]);for(a=0,d=1,r*=i,o=0;o<r;o+=i)0!==n[o]&&(a<(m=t(n[o]))?(d=1+d*s(a/m,2),a=m):d+=s(m/a,2));return a*e(d)}function i(r,n,i,a){var d,m,o,l,p;if(r<=0)return 0;if(1===r)return t(n[a]);for(l=a,d=0,m=1,p=0;p<r;p++)0!==n[l]&&(d<(o=t(n[l]))?(m=1+m*s(d/o,2),d=o):m+=s(o/d,2)),l+=i;return d*e(m)}r(n,"ndarray",i);export{n as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
