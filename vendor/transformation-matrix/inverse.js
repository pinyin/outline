'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.inverse = inverse;

/**
 * Calculate a matrix that is the inverse of the provided matrix
 * @param matrix Affine matrix
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function inverse(matrix) {
    //http://www.wolframalpha.com/input/?i=Inverse+%5B%7B%7Ba,c,e%7D,%7Bb,d,f%7D,%7B0,0,1%7D%7D%5D

    var a = matrix.a,
        b = matrix.b,
        c = matrix.c,
        d = matrix.d,
        e = matrix.e,
        f = matrix.f;


    var denom = a * d - b * c;

    return {
        a: d / denom,
        b: b / -denom,
        c: c / -denom,
        d: a / denom,
        e: (d * e - c * f) / -denom,
        f: (b * e - a * f) / denom
    };
}
