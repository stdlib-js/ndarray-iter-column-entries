"use strict";var j=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var b=j(function(I,c){"use strict";var w=require("@stdlib/utils-define-nonenumerable-read-only-property"),T=require("@stdlib/assert-is-plain-object"),C=require("@stdlib/assert-is-boolean").isPrimitive,F=require("@stdlib/assert-is-ndarray-like"),P=require("@stdlib/ndarray-base-assert-is-read-only"),S=require("@stdlib/assert-has-own-property"),p=require("@stdlib/symbol-iterator"),x=require("@stdlib/array-base-zeros"),L=require("@stdlib/ndarray-shape"),R=require("@stdlib/ndarray-base-numel"),V=require("@stdlib/ndarray-base-slice"),k=require("@stdlib/ndarray-base-next-cartesian-index").assign,z=require("@stdlib/slice-base-args2multislice"),v=require("@stdlib/string-format");function q(a){var r,i,n,t,o,d,e,u,y,s,m;if(!F(a))throw new TypeError(v("invalid argument. First argument must be an ndarray. Value: `%s`.",a));if(t={writable:!1},arguments.length>1){if(r=arguments[1],!T(r))throw new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",r));if(S(r,"readonly")){if(!C(r.readonly))throw new TypeError(v("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",r.readonly));if(t.writable=!r.readonly,t.writable&&P(a))throw new Error(v("invalid option. Cannot write to read-only array."))}}if(i=L(a),n=i.length,n<2)throw new TypeError("invalid argument. First argument must be an ndarray having at least two dimensions.");return s=R(i),s===0&&(d=!0),s/=i[n-2],u=n-1,y=i[u],m=-1,e=x(n),e[n-2]=null,o={},w(o,"next",h),w(o,"return",E),p&&w(o,p,O),o;function h(){var l,g,f;return m+=1,d||m>=s?{done:!0}:(l=e.slice(),g=z(e),f=(e[u]+1)%y,e[u]=f,f===0&&(e=k(i,"row-major",e,u-2,e)),{value:[l,V(a,g,!0,t.writable)],done:!1})}function E(l){return d=!0,arguments.length?{value:l,done:!0}:{done:!0}}function O(){return q(a,t)}}c.exports=q});var B=b();module.exports=B;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
