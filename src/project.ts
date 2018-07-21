import {scale} from '../vendor/transformation-matrix/scale'
import {transform} from '../vendor/transformation-matrix/transform'
import {translate} from '../vendor/transformation-matrix/translate'
import {centerOf} from './centerOf'
import {decompose} from './decompose'
import {Outline} from './Outline'
import {Transform} from './Transform'

export function project(parent: Outline, parentDiff: Transform, child: Outline): Transform {
    const outer = decompose(parentDiff)

    const deltaX = centerOf(child).x - centerOf(parent).x
    const deltaY = centerOf(child).y - centerOf(parent).y

    return transform(
        translate(
            outer.translate.x,
            outer.translate.y,
        ),
        translate(
            deltaX * (outer.scale.x - 1),
            deltaY * (outer.scale.y - 1),
        ),
        scale(outer.scale.x, outer.scale.y),
    )
}
