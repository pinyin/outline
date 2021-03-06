'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
};

exports.isAffineMatrix = isAffineMatrix;
var isNumeric = function isNumeric(n) {
    return typeof n === 'number' && !isNaN(n) && isFinite(n);
};
var isObject = function isObject(obj) {
    return obj != null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

/**
 * Check if the object contain an affine matrix
 * @param object
 * @return {boolean}
 */
function isAffineMatrix(object) {
    return isObject(object) && object.hasOwnProperty('a') && isNumeric(object.a) && object.hasOwnProperty('b') && isNumeric(object.b) && object.hasOwnProperty('c') && isNumeric(object.c) && object.hasOwnProperty('d') && isNumeric(object.d) && object.hasOwnProperty('e') && isNumeric(object.e) && object.hasOwnProperty('f') && isNumeric(object.f);
}
