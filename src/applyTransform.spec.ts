import {scale} from '../vendor/transformation-matrix/scale'
import {transform} from '../vendor/transformation-matrix/transform'
import {translate} from '../vendor/transformation-matrix/translate'
import {applyTransform} from './applyTransform'
import {getRandomIntInclusive} from './getRandomIntInclusive'
import {inverse} from './inverse'
import {Outline} from './Outline'

describe(`${applyTransform.name}`, () => {
    let from: Outline = {x: 2, y: 2, width: 20, height: 20}
    let to: Outline = {...from}

    it('should apply translate', () => {
        const tx = getRandomIntInclusive(-100, 100)
        const ty = getRandomIntInclusive(-100, 100)
        to = applyTransform(from, transform(translate(tx, ty)))
        expect(to).toEqual({...from, x: from.x + tx, y: from.y + ty})
        from = to
    })

    it(`should apply scale`, () => {
        const sx = getRandomIntInclusive(1, 100) / 10
        const sy = getRandomIntInclusive(1, 100) / 10
        to = applyTransform(from, transform(scale(sx, sy)))
        expect(to).toEqual({
            x: (from.x + from.width / 2) - (from.width / 2) * sx,
            y: (from.y + from.height / 2) - (from.height / 2) * sy,
            width: from.width * sx,
            height: from.height * sy,
        })
        from = to
    })

    it(`should be invertible`, () => {
        const tx = getRandomIntInclusive(-100, 100)
        const ty = getRandomIntInclusive(-100, 100)
        const sx = getRandomIntInclusive(1, 100) / 10
        const sy = getRandomIntInclusive(1, 100) / 10
        const matrix = transform(translate(tx, ty), scale(sx, sy))
        to = applyTransform(from, matrix)
        const result = applyTransform(to, inverse(matrix))
        expect(result.x).toBeCloseTo(from.x)
        expect(result.y).toBeCloseTo(from.y)
        expect(result.width).toBeCloseTo(from.width)
        expect(result.height).toBeCloseTo(from.height)
        from = to
    })

    it(`should work with different origin`, () => {
        const tx = getRandomIntInclusive(-100, 100)
        const ty = getRandomIntInclusive(-100, 100)
        const sx = getRandomIntInclusive(1, 100) / 10
        const sy = getRandomIntInclusive(1, 100) / 10
        const ox = getRandomIntInclusive(-100, 100)
        const oy = getRandomIntInclusive(-100, 100)
        const matrix = transform(translate(tx, ty), scale(sx, sy))
        to = applyTransform(from, matrix, {x: ox, y: oy})
        expect(to.x).toBeCloseTo((from.x - ox) * sx + ox + tx)
        expect(to.y).toBeCloseTo((from.y - oy) * sy + oy + ty)
        expect(to.width).toBeCloseTo(from.width * sx)
        expect(to.height).toBeCloseTo(from.height * sy)
        from = to
    })
})

