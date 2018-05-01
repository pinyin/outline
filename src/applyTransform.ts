import {applyToPoint} from '../vendor/transformation-matrix/applyToPoint'
import {centerOf} from './centerOf'
import {Outline} from './Outline'
import {Point} from './Point'
import {Transform} from './Transform'

export function applyTransform(from: Readonly<Outline>, matrix: Readonly<Transform>): Outline {
    const center = centerOf(from)

    const fromTopLeft: Point = {x: from.x - center.x, y: from.y - center.y}
    const toTopLeft = applyToPoint(matrix, fromTopLeft)

    const fromBottomRight: Point =
        {x: from.x + from.width - center.x, y: from.y + from.height - center.y}
    const toBottomRight = applyToPoint(matrix, fromBottomRight)

    const toWidth = toBottomRight.x - toTopLeft.x
    const toHeight = toBottomRight.y - toTopLeft.y

    const to: Outline = {
        x: toTopLeft.x + center.x,
        y: toTopLeft.y + center.y,
        width: toWidth,
        height: toHeight
    }

    // console.log(applyTransform.name, 'from', from, 'matrix', matrix, 'to', to)

    return to
}