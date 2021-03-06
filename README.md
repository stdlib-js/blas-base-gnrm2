<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# gnrm2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the L2-norm of a vector.

<section class="intro">

The [L2-norm][l2-norm] is defined as

<!-- <equation class="equation" label="eq:l2_norm" align="center raw="\|\mathbf{x}\|_2 = \sqrt{x_0^2 + x_1^2 + \ldots + x_{N-1}^2}" alt="L2-norm definition."> -->

<div class="equation" align="center" data-raw-text="\|\mathbf{x}\|_2 = \sqrt{x_0^2 + x_1^2 + \ldots + x_{N-1}^2}" data-equation="eq:l2_norm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@f8997c489e47eb1a9d993ef4ab3a522a095331f5/lib/node_modules/@stdlib/blas/base/gnrm2/docs/img/equation_l2_norm.svg" alt="L2-norm definition.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-gnrm2
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var gnrm2 = require( '@stdlib/blas-base-gnrm2' );
```

#### gnrm2( N, x, stride )

Computes the [L2-norm][l2-norm] of a vector `x`.

```javascript
var x = [ 1.0, -2.0, 2.0 ];

var z = gnrm2( x.length, x, 1 );
// returns 3.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the [L2-norm][l2-norm] of every other element in `x`,

```javascript
var floor = require( '@stdlib/math-base-special-floor' );

var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ];
var N = floor( x.length / 2 );

var z = gnrm2( N, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var z = gnrm2( N, x1, 2 );
// returns 5.0
```

If either `N` or `stride` is less than or equal to `0`, the function returns `0`.

#### gnrm2.ndarray( N, x, stride, offset )

Computes the [L2-norm][l2-norm] of a vector using alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 2.0 ];

var z = gnrm2.ndarray( x.length, x, 1, 0 );
// returns 3.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the [L2-norm][l2-norm] for every other value in `x` starting from the second value

```javascript
var floor = require( '@stdlib/math-base-special-floor' );

var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
var N = floor( x.length / 2 );

var z = gnrm2.ndarray( N, x, 2, 1 );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   `gnrm2()` corresponds to the [BLAS][blas] level 1 function [`dnrm2`][dnrm2] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`dnrm2`][@stdlib/blas/base/dnrm2], [`snrm2`][@stdlib/blas/base/snrm2], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var Float64Array = require( '@stdlib/array-float64' );
var gnrm2 = require( '@stdlib/blas-base-gnrm2' );

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( randu()*100.0 );
}
console.log( x );

var z = gnrm2( x.length, x, 1 );
console.log( z );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/dnrm2`][@stdlib/blas/base/dnrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a double-precision floating-point vector.</span>
-   <span class="package-name">[`@stdlib/blas/base/snrm2`][@stdlib/blas/base/snrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a single-precision floating-point vector.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-gnrm2.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-gnrm2

[test-image]: https://github.com/stdlib-js/blas-base-gnrm2/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-gnrm2/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-gnrm2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-gnrm2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-gnrm2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-gnrm2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-gnrm2/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-base-gnrm2/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-base-gnrm2/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-base-gnrm2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-gnrm2/main/LICENSE

[l2-norm]: https://en.wikipedia.org/wiki/Euclidean_distance

[blas]: http://www.netlib.org/blas

[dnrm2]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/dnrm2]: https://github.com/stdlib-js/blas-base-dnrm2

[@stdlib/blas/base/snrm2]: https://github.com/stdlib-js/blas-base-snrm2

<!-- </related-links> -->

</section>

<!-- /.links -->
