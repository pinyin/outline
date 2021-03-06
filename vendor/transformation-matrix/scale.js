'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.scale = scale;

var _utils = require('./utils');

/**
 * Calculate a scaling matrix
 * @param sx Scaling on axis x
 * @param [sy = sx] Scaling on axis y (default sx)
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function scale(sx) {
    var sy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    if ((0, _utils.isUndefined)(sy)) sy = sx;
    return {
        a: sx, c: 0, e: 0,
        b: 0, d: sy, f: 0
    };
}
