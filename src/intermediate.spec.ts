import {identity} from '../vendor/transformation-matrix/identity'
import {scale} from '../vendor/transformation-matrix/scale'
import {transform} from '../vendor/transformation-matrix/transform'
import {translate} from '../vendor/transformation-matrix/translate'
import {applyTransform} from './applyTransform'
import {getRandomIntInclusive} from './getRandomIntInclusive'
import {intermediate} from './intermediate'
import {Outline} from './Outline'
import {Transform} from './Transform'

describe(`${intermediate.name}`, () => {
    let from: Outline = {x: 0, y: 0, width: 1, height: 1}
    let to: Outline = {...from}

    const shouldRevert = (matrix: Transform): void => {
        to = applyTransform(from, matrix)
        const inverted = intermediate(from, to)
        // console.log('matrix', matrix, 'from', from, 'to', to, 'inverted', inverted)
        expect(inverted).toEqual(matrix)
        from = to
    }

    test(`should return identity transform`, () => {
        shouldRevert(identity())
    })

    test(`should return translate transform`, () => {
        const tx = getRandomIntInclusive(-100, 100)
        const ty = getRandomIntInclusive(-100, 100)
        const matrix: Transform = transform(
            translate(tx, ty)
        )
        shouldRevert(matrix)
    })

    test(`should return scale transform`, () => {
        const sx = getRandomIntInclusive(1, 100) / 10
        const sy = getRandomIntInclusive(1, 100) / 10
        const matrix: Transform = transform(
            scale(sx, sy)
        )
        shouldRevert(matrix)
    })
})
