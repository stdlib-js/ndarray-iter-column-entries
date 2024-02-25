// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.2.0-esm/index.mjs";import{assign as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-next-cartesian-index@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function v(f){var b,c,y,g,u,x,w,E,L,T,F;if(!t(f))throw new TypeError(h("1lL4f",f));if(g={writable:!1},arguments.length>1){if(!r(b=arguments[1]))throw new TypeError(h("1lL2V",b));if(i(b,"readonly")){if(!s(b.readonly))throw new TypeError(h("1lL2o","readonly",b.readonly));if(g.writable=!b.readonly,g.writable&&n(f))throw new Error(h("1lLF4"))}}if((y=(c=l(f)).length)<2)throw new TypeError(h("1lLF2"));return 0===(T=m(c))&&(x=!0),T/=c[y-2],L=c[E=y-1],F=-1,(w=o(y))[y-2]=null,e(u={},"next",(function(){var e,r,s;if(F+=1,x||F>=T)return{done:!0};e=w.slice(),r=p(w),s=(w[E]+1)%L,w[E]=s,0===s&&(w=j(c,"row-major",w,E-2,w));return{value:[e,a(f,r,!0,g.writable)],done:!1}})),e(u,"return",(function(e){if(x=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),d&&e(u,d,(function(){return v(f,g)})),u}export{v as default};
//# sourceMappingURL=index.mjs.map
