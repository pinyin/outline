import {hasStyle} from '@pinyin/dom'
import {Outline} from './Outline'

export function getOutline(dom: Element): Outline {
    const rect = dom.getBoundingClientRect()

    const {width, height} = rect
    const x = rect.left
    const y = rect.top

    const computedStyle = getComputedStyle(dom)

    const opacityCSS = computedStyle.opacity
    const opacity = hasStyle(opacityCSS) ? parseFloat(opacityCSS) : 1

    const outline = {x, y, width, height, opacity}
    return outline
}
