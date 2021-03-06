'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.applyToPoint = applyToPoint;
exports.applyToPoints = applyToPoints;

/**
 * Calculate a point transformed with an affine matrix
 * @param matrix Affine matrix
 * @param point Point
 * @returns {{x: number, y: number}} Point
 */
function applyToPoint(matrix, point) {
    return {
        x: matrix.a * point.x + matrix.c * point.y + matrix.e,
        y: matrix.b * point.x + matrix.d * point.y + matrix.f
    };
}

/**
 * Calculate an array of points transformed with an affine matrix
 * @param matrix Affine matrix
 * @param points Array of points
 * @returns {array} Array of points
 */
function applyToPoints(matrix, points) {
    return points.map(function (point) {
        return applyToPoint(matrix, point);
    });
}
