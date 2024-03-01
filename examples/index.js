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

'use strict';

var ndarray2array = require( '@stdlib/ndarray-to-array' );
var array = require( '@stdlib/ndarray-array' );
var zeroTo = require( '@stdlib/array-base-zero-to' );
var nditerColumnEntries = require( './../lib' );

// Define an input array:
var x = array( zeroTo( 27 ), {
	'shape': [ 3, 3, 3 ]
});

// Create an iterator for returning [index, column] pairs:
var it = nditerColumnEntries( x );

// Perform manual iteration...
var v;
while ( true ) {
	v = it.next();
	if ( v.done ) {
		break;
	}
	console.log( v.value[ 0 ] );
	console.log( ndarray2array( v.value[ 1 ] ) );
}
