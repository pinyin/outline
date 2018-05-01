import {Outline} from './Outline'

export function calcArea(a: Outline): number {
    return Math.abs(a.width * a.height)
}
