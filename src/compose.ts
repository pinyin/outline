import {transform} from '../vendor/transformation-matrix/transform'
import {Transform} from './Transform'

export function compose(a: Transform, b: Transform): Transform {
    return transform(a, b)
}
