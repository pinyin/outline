import {identity} from '../vendor/transformation-matrix/identity'
import {scale} from '../vendor/transformation-matrix/scale'
import {transform} from '../vendor/transformation-matrix/transform'
import {translate} from '../vendor/transformation-matrix/translate'
import {centerOf} from './centerOf'
import {decompose} from './decompose'
import {Outline} from './Outline'
import {Transform} from './Transform'

/**
 * Transform parent while keeping child's visual position
 * @returns a transform to apply to child
 */
export function compensate(parent: Outline, parentDiff: Transform, child: Outline, childDiff: Transform = identity()): Transform {
    const outer = decompose(parentDiff)

    const deltaX = centerOf(child).x - centerOf(parent).x
    const deltaY = centerOf(child).y - centerOf(parent).y

    return transform(
        scale(1 / outer.scale.x, 1 / outer.scale.y),
        translate(
            -(deltaX * (outer.scale.x - 1)),
            -(deltaY * (outer.scale.y - 1)),
        ),
        translate(
            -outer.translate.x,
            -outer.translate.y,
        ),
        childDiff,
    )
}
