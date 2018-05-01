import {Outline} from './Outline'
import {Point} from './Point';

export function centerOf(outline: Outline): Point {
    return {
        x: outline.x + outline.width / 2,
        y: outline.y + outline.height / 2
    }
}
