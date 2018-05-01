import {px, rad, ratio} from '@pinyin/types'
import {Transform} from './Transform'

// Code from:
// https://github.com/epistemex/transformation-matrix-js/blob/master/src/matrix.js#L634

export function decompose(matrix: Transform): DecomposedMatrix {
    const {a, b, c, d, e, f} = matrix
    let translate = {x: e, y: f}
    let rotation = 0
    let scale = {x: 1, y: 1}
    let skew = {x: 0, y: 0}

    const determ = a * d - b * c	// determinant(), skip DRY here...

    // Apply the QR-like decomposition.
    if (a || b) {
        const r = Math.sqrt(a * a + b * b);
        rotation = b > 0 ? Math.acos(a / r) : -Math.acos(a / r);
        scale = {x: r, y: determ / r};
        skew.x = Math.atan((a * c + b * d) / (r * r));
    } else if (c || d) {
        const s = Math.sqrt(c * c + d * d);
        rotation = Math.PI * 0.5 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
        scale = {x: determ / s, y: s};
        skew.y = Math.atan((a * c + b * d) / (s * s));
    } else { // a = b = c = d = 0
        scale = {x: 0, y: 0};
    }

    return {
        translate: translate,
        rotation: rotation === 0 ? 0 : rotation, // TODO 0 does not equal to -0 in Jest
        scale: scale,
        skew: skew
    }
}

export type DecomposedMatrix = {
    translate: { x: px, y: px }
    rotation: rad
    scale: { x: ratio, y: ratio }
    skew: { x: ratio, y: ratio }
}

