'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.identity = identity;

/**
 * Identity matrix
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function identity() {
    return {
        a: 1, c: 0, e: 0,
        b: 0, d: 1, f: 0
    };
}
