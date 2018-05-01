import {inverse as _inverse} from '../vendor/transformation-matrix/inverse'
import {Transform} from './Transform'

export function inverse(from: Transform): Transform {
    const invertMatrix = _inverse({...from, e: 0, f: 0})

    invertMatrix.e = -from.e
    invertMatrix.f = -from.f

    return invertMatrix
}
