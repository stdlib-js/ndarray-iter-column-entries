// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.1.0-esm/index.mjs";import{assign as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-next-cartesian-index@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.2.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function v(b){var u,f,g,c,y,w,x,E,T,F,O;if(!s(b))throw new TypeError(h("invalid argument. First argument must be an ndarray. Value: `%s`.",b));if(c={writable:!1},arguments.length>1){if(!r(u=arguments[1]))throw new TypeError(h("invalid argument. Options argument must be an object. Value: `%s`.",u));if(i(u,"readonly")){if(!t(u.readonly))throw new TypeError(h("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",u.readonly));if(c.writable=!u.readonly,c.writable&&n(b))throw new Error(h("invalid option. Cannot write to read-only array."))}}if((g=(f=a(b)).length)<2)throw new TypeError("invalid argument. First argument must be an ndarray having at least two dimensions.");return 0===(F=m(f))&&(w=!0),F/=f[g-2],T=f[E=g-1],O=-1,(x=o(g))[g-2]=null,e(y={},"next",V),e(y,"return",k),d&&e(y,d,z),y;function V(){var e,r,t;return O+=1,w||O>=F?{done:!0}:(e=x.slice(),r=p(x),t=(x[E]+1)%T,x[E]=t,0===t&&(x=j(f,"row-major",x,E-2,x)),{value:[e,l(b,r,!0,c.writable)],done:!1})}function k(e){return w=!0,arguments.length?{value:e,done:!0}:{done:!0}}function z(){return v(b,c)}}export{v as default};
//# sourceMappingURL=index.mjs.map
