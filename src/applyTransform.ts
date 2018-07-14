import {applyToPoint} from '../vendor/transformation-matrix/applyToPoint'
import {centerOf} from './centerOf'
import {decompose} from './decompose'
import {Outline} from './Outline'
import {Point} from './Point'
import {Transform} from './Transform'

export function applyTransform(from: Readonly<Outline>,
                               matrix: Readonly<Transform>,
                               origin?: Point): Outline {
    const {rotation, skew} = decompose(matrix)
    if (rotation !== 0 || skew.x !== 0) {
        throw new Error(`Doesn't support matrix ${matrix}`)
    }

    origin = origin || centerOf(from)

    const fromTopLeft: Point = {x: from.x - origin.x, y: from.y - origin.y}
    const toTopLeft = applyToPoint(matrix, fromTopLeft)

    const fromBottomRight: Point =
        {x: from.x + from.width - origin.x, y: from.y + from.height - origin.y}
    const toBottomRight = applyToPoint(matrix, fromBottomRight)

    const toWidth = toBottomRight.x - toTopLeft.x
    const toHeight = toBottomRight.y - toTopLeft.y

    return {
        x: toTopLeft.x + origin.x,
        y: toTopLeft.y + origin.y,
        width: toWidth,
        height: toHeight
    }
}
