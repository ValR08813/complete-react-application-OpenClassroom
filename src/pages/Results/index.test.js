import { formatJobList } from './'
import { formatQueryParams } from './'

describe('fonction formatJobList', () => {
    test('ajoute une virgule', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    test('ne rajoute pas de virgule', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

// describe('fonction formatQueryParams', () => {
//     it('should not return a separator', () => {
//         const expectedState = 'a1=false&a2=true&a3=false&a4=false'
//         expect(formatQueryParams({ 1: false, 2: true, 3: false, 4: false })).toEqual(expectedState)
//     })
//     it('should not return a separator', () => {
//         const expectedState = 'a1=false&a2=true&a3=false&a4=false'
//         expect(formatQueryParams({ 1: false, 2: true, 3: false, 4: true })).not.toBe(expectedState)
//     })
// })

describe('The formatQueryParams function', () => {
    it('should use the right format for param', () => {
        const expectedState = 'a1=answer1'
        expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it('should concatenate params with an &', () => {
        const expectedState = 'a1=answer1&a2=answer2'
        expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
            expectedState
        )
    })
})