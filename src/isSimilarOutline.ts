import {Outline} from './Outline'

export function isSimilarOutline(a: Outline, b: Outline): boolean {
    const isSimilar = Math.abs(a.x - b.x) < 10 &&
        Math.abs(a.y - b.y) < 10 &&
        Math.abs(a.width - b.width) < 20 &&
        Math.abs(a.height - b.height) < 20
    return isSimilar
}

