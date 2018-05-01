import {px} from '@pinyin/types'
import {Outline} from './Outline'

export function calcDistance(a: Outline, b: Outline): px {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
}
