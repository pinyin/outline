'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.fromString = fromString;
/**
 * @ignore
 * @type {RegExp}
 */
var matrixRegex = /^matrix\(\s*([0-9_\+\-\.e]+)\s*,\s*([0-9_\+\-\.e]+)\s*,\s*([0-9_\+\-\.e]+)\s*,\s*([0-9_\+\-\.e]+)\s*,\s*([0-9_\+\-\.e]+)\s*,\s*([0-9_\+\-\.e]+)\s*\)$/i;

/**
 * Parse a string matrix formatted as matrix(a,b,c,d,e,f)
 * @param string String with a matrix
 * @returns {{a: number, b: number, c: number, e: number, d: number, f: number}} Affine matrix
 */
function fromString(string) {
    var parsed = string.match(matrixRegex);
    if (parsed === null || parsed.length < 7) throw new Error('\'' + string + '\' is not a matrix');
    return {
        a: parseFloat(parsed[1]),
        b: parseFloat(parsed[2]),
        c: parseFloat(parsed[3]),
        d: parseFloat(parsed[4]),
        e: parseFloat(parsed[5]),
        f: parseFloat(parsed[6])
    };
}
