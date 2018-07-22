import {Transform} from './Transform'

export function isSameTransform(a: Transform, b: Transform): boolean {
    return a.a === b.a &&
        a.b === b.b &&
        a.c === b.c &&
        a.d === b.d &&
        a.e === b.e &&
        a.f === b.f
}
