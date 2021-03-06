'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.translate = translate;

/**
 * Calculate a translate matrix
 * @param tx Translation on axis x
 * @param [ty = 0] Translation on axis y
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function translate(tx) {
    var ty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    return {
        a: 1, c: 0, e: tx,
        b: 0, d: 1, f: ty
    };
}
