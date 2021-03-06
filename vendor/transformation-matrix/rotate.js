'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.rotate = rotate;
exports.rotateDEG = rotateDEG;

var _utils = require('./utils');

var _translate = require('./translate');

var _transform = require('./transform');

var cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI;

/**
 * Calculate a rotation matrix
 * @param angle Angle in radians
 * @param [cx] If (cx,cy) are supplied the rotate is about this point
 * @param [cy] If (cx,cy) are supplied the rotate is about this point
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix *
 */

function rotate(angle, cx, cy) {
    var cosAngle = cos(angle);
    var sinAngle = sin(angle);
    var rotationMatrix = {
        a: cosAngle, c: -sinAngle, e: 0,
        b: sinAngle, d: cosAngle, f: 0
    };
    if ((0, _utils.isUndefined)(cx) || (0, _utils.isUndefined)(cy)) {
        return rotationMatrix;
    }

    return (0, _transform.transform)([(0, _translate.translate)(cx, cy), rotationMatrix, (0, _translate.translate)(-cx, -cy)]);
}

/**
 * Calculate a rotation matrix with a DEG angle
 * @param angle Angle in degree
 * @param [cx] If (cx,cy) are supplied the rotate is about this point
 * @param [cy] If (cx,cy) are supplied the rotate is about this point
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function rotateDEG(angle) {
    var cx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

    return rotate(angle * PI / 180, cx, cy);
}
