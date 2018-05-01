import {scale} from '../vendor/transformation-matrix/scale'
import {transform} from '../vendor/transformation-matrix/transform'
import {translate} from '../vendor/transformation-matrix/translate'
import {applyTransform} from './applyTransform'
import {getRandomIntInclusive} from './getRandomIntInclusive'
import {inverse} from './inverse'
import {Outline} from './Outline'

describe(`${applyTransform.name}`, () => {
    let from: Outline = {x: 2, y: 0, width: 0, height: 0}
    let to: Outline = {...from}

    test('translate', () => {
        const tx = getRandomIntInclusive(-100, 100)
        const ty = getRandomIntInclusive(-100, 100)
        to = applyTransform(from, transform(translate(tx, ty)))
        expect(to).toEqual({...from, x: from.x + tx, y: from.y + ty})
        from = to
    })

    test(`scale`, () => {
        const sx = getRandomIntInclusive(1, 100) / 10
        const sy = getRandomIntInclusive(1, 100) / 10
        to = applyTransform(from, transform(scale(sx, sy)))
        expect(to).toEqual({...from, width: from.width * sx, height: from.height * sy})
        from = to
    })

    test(`invert`, () => {
        const tx = getRandomIntInclusive(-100, 100)
        const ty = getRandomIntInclusive(-100, 100)
        const sx = getRandomIntInclusive(1, 100) / 10
        const sy = getRandomIntInclusive(1, 100) / 10
        const matrix = transform(translate(tx, ty), scale(sx, sy))
        console.log('invert matrix')
        to = applyTransform(from, matrix)
        expect(applyTransform(to, inverse(matrix))).toEqual(from)
        from = to
    })
})

