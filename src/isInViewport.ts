import {Outline} from './Outline'

export function isInViewport(outline: Outline): boolean {
    const top = outline.y + outline.height >= 0
    const bottom = outline.y <= window.outerHeight // TODO window.innerHeight causes reflow?
    const left = outline.x + outline.width >= 0
    const right = outline.x <= window.outerWidth
    return top || bottom || left || right
}
