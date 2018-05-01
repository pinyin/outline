import {applyTransform} from './applyTransform'
import {getOutline} from './getOutline'
import {inverse} from './inverse'
import {Outline} from './Outline';
import {fromCSS} from './Transform';

// ignoring rotate
export function getOriginOutline(dom: Element): Outline {
    let current = getOutline(dom)

    const transform = fromCSS(getComputedStyle(dom).transform)
    const from = applyTransform(current, inverse(transform))

    return from
}
