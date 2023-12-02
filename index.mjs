// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.1.0-esm/index.mjs";import{assign as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-next-cartesian-index@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function v(b){var f,c,y,u,g,w,x,E,T,F,k;if(!t(b))throw new TypeError(h("null4f,Pc",b));if(u={writable:!1},arguments.length>1){if(!r(f=arguments[1]))throw new TypeError(h("null2V,FD",f));if(i(f,"readonly")){if(!s(f.readonly))throw new TypeError(h("null2o,GE","readonly",f.readonly));if(u.writable=!f.readonly,u.writable&&n(b))throw new Error(h("invalid option. Cannot write to read-only array."))}}if((y=(c=l(b)).length)<2)throw new TypeError("invalid argument. First argument must be an ndarray having at least two dimensions.");return 0===(F=m(c))&&(w=!0),F/=c[y-2],T=c[E=y-1],k=-1,(x=o(y))[y-2]=null,e(g={},"next",z),e(g,"return",C),d&&e(g,d,D),g;function z(){var e,r,s;return k+=1,w||k>=F?{done:!0}:(e=x.slice(),r=p(x),s=(x[E]+1)%T,x[E]=s,0===s&&(x=j(c,"row-major",x,E-2,x)),{value:[e,a(b,r,!0,u.writable)],done:!1})}function C(e){return w=!0,arguments.length?{value:e,done:!0}:{done:!0}}function D(){return v(b,u)}}export{v as default};
//# sourceMappingURL=index.mjs.map
