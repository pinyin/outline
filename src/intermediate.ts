import {scale} from '../vendor/transformation-matrix/scale'
import {transform} from '../vendor/transformation-matrix/transform'
import {translate} from '../vendor/transformation-matrix/translate'
import {centerOf} from './centerOf'
import {Outline} from './Outline'
import {Transform} from './Transform'

export function intermediate(from: Outline, to: Outline): Transform {
    const sx = to.width / from.width
    const sy = to.height / from.height

    // FIXME from.width === 0?

    const fromCenter = centerOf(from)
    const toCenter = centerOf(to)

    const matrix: Transform = transform(
        translate(toCenter.x - fromCenter.x, toCenter.y - fromCenter.y),
        scale(sx, sy)
    )
    // console.log(intermediateTransform.name, 'from', from, 'to', to, 'matrix', matrix)

    return matrix
}


