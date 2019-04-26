import test from 'ava'

/**
 * Library under test
 */

import nextSessionGenerator from '../src/next-session-generator'


/**
 * Note: has to be commented thanks to strong-types
 */
// test('should error when timeframe is not a string', t => {
//     const nextSession = nextSessionGenerator(4, new Date())
//     const error = t.throws(() => {
//         nextSession.next()
//     })
//     t.is(error.name, 'ArgumentError')
// })

test('should error when timeframe is not in trading-view format', t => {
    const nextSession = nextSessionGenerator('!!', new Date())
    const error = t.throws(() => {
        nextSession.next()
    })
    t.is(error.name, 'ArgumentError')
})

/**
 * Note: has to be commented thanks to strong-types
 */
// test('should error when start is not a date', t => {
//     const nextSession = nextSessionGenerator('1D', 'horse')
//     const error = t.throws(() => {
//         nextSession.next()
//     })
//     t.is(error.name, 'ArgumentError')
// })
