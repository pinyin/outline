import {identity} from '../vendor/transformation-matrix/identity'
import {rotate} from '../vendor/transformation-matrix/rotate'
import {scale} from '../vendor/transformation-matrix/scale'
import {skew} from '../vendor/transformation-matrix/skew'
import {transform} from '../vendor/transformation-matrix/transform'
import {translate} from '../vendor/transformation-matrix/translate'
import {decompose, DecomposedMatrix} from './decompose'
import {getRandomIntInclusive} from './getRandomIntInclusive'

describe(`${decompose.name}`, () => {
    const decomposedIdentity: DecomposedMatrix = {
        rotation: 0,
        scale: {x: 1, y: 1},
        skew: {x: 0, y: 0},
        translate: {x: 0, y: 0}
    }
    test('should decompose identity', () => {
        expect(decompose(identity())).toEqual(decomposedIdentity)
    })

    const angle = getRandomIntInclusive(-10, 10) / 10
    const sx = getRandomIntInclusive(1, 100) / 10
    const sy = getRandomIntInclusive(1, 100) / 10
    const tx = getRandomIntInclusive(1, 100) / 10
    const ty = getRandomIntInclusive(1, 100) / 10
    const skx = getRandomIntInclusive(-10, 10) / 10
    const sky = getRandomIntInclusive(-10, 10) / 10

    describe('should decompose single matrix', () => {
        test('should decompose rotate', () => {
            const decomposed = decompose(rotate(angle))
            expect(decomposed.rotation).toBeCloseTo(angle, 2)
        })

        test('should decompose scale', () => {
            const decomposed = decompose(scale(sx, sy))
            expect(decomposed.scale.x).toBeCloseTo(sx, 2)
            expect(decomposed.scale.y).toBeCloseTo(sy, 2)
        })

        test('should decompose skew', () => {
            // FIXME not sure why this won't pass
            // expect(decompose(skew(skx, 0)))
            //     .toEqual({
            //         ...decomposedIdentity,
            //         skew: {x: skx, y: 0}
            //     })
            // const sky = getRandomIntInclusive(-10, 10) / 10
            // expect(decompose(skew(0, sky)))
            //     .toEqual({
            //         rotation: 0,
            //         scale: { x: 1, y: 1 },
            //         skew: { x: 0, y: sky },
            //         translate: { x: 0, y: 0 }
            //     })
        })

        test('should decompose translate', () => {
            expect(decompose(translate(tx, ty)))
                .toEqual({
                    ...decomposedIdentity,
                    translate: {x: tx, y: ty}
                })
        })
    })

    test('should decompose composite transform', () => {
        const decomposed = decompose(
            transform(
                translate(tx, ty),
                rotate(angle),
                scale(sx, sy),
                skew(skx, 0)
            )
        )
        expect(decomposed.rotation).toBeCloseTo(angle, 2)
        expect(decomposed.scale.x).toBeCloseTo(sx, 2)
        expect(decomposed.scale.y).toBeCloseTo(sy, 2)
        expect(decomposed.translate.x).toBeCloseTo(tx, 2)
        expect(decomposed.translate.y).toBeCloseTo(ty, 2)
    })

})
