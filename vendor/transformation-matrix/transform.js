'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.transform = transform;

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
}

/**
 * Merge multiple matrices into one
 * @param matrices {...object} list of matrices
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function transform() {
    for (var _len = arguments.length, matrices = Array(_len), _key = 0; _key < _len; _key++) {
        matrices[_key] = arguments[_key];
    }

    matrices = Array.isArray(matrices[0]) ? matrices[0] : matrices;

    var multiply = function multiply(m1, m2) {
        return {
            a: m1.a * m2.a + m1.c * m2.b, c: m1.a * m2.c + m1.c * m2.d, e: m1.a * m2.e + m1.c * m2.f + m1.e,
            b: m1.b * m2.a + m1.d * m2.b, d: m1.b * m2.c + m1.d * m2.d, f: m1.b * m2.e + m1.d * m2.f + m1.f
        };
    };

    switch (matrices.length) {
        case 0:
            throw new Error('no matrices provided');

        case 1:
            return matrices[0];

        case 2:
            return multiply(matrices[0], matrices[1]);

        default:
            var _matrices = matrices,
                _matrices2 = _toArray(_matrices),
                m1 = _matrices2[0],
                m2 = _matrices2[1],
                rest = _matrices2.slice(2);

            var m = multiply(m1, m2);
            return transform.apply(undefined, [m].concat(_toConsumableArray(rest)));
    }
}
