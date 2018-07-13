import {scale} from '../vendor/transformation-matrix/scale'
import {transform} from '../vendor/transformation-matrix/transform'
import {translate} from '../vendor/transformation-matrix/translate'
import {centerOf} from './centerOf'
import {Outline} from './Outline'
import {Transform} from './Transform'

export function intermediate(from: Outline, to: Outline): Transform {
    const sx = to.width / from.width
    const sy = to.height / from.height

    if (!Number.isFinite(sx) || !Number.isFinite(sy)) {
        throw new Error(`${from} can not be transformed to ${to}`)
    }

    const fromCenter = centerOf(from)
    const toCenter = centerOf(to)

    return transform(
        translate(toCenter.x - fromCenter.x, toCenter.y - fromCenter.y),
        scale(sx, sy)
    )
}


