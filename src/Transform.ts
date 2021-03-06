import {hasStyle} from '@pinyin/dom'
import {fromString} from '../vendor/transformation-matrix/fromString'
import {identity} from '../vendor/transformation-matrix/identity'
import {toString} from '../vendor/transformation-matrix/toString'

export type Transform = {
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
}

export function toCSS(transform: Transform): string {
    return toString(transform)
}

export function fromCSS(css: string | undefined | null): Transform {
    return hasStyle(css) ? fromString(css) : identity()
}
