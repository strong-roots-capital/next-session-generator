import test from 'ava'
import moment from 'moment'
import is from '@sindresorhus/is'

/**
 * Library under test
 */

import nextSessionGenerator from '../src/next-session-generator'


test('should return a generator', t => {
    t.true(is.generator(nextSessionGenerator('1D', new Date())))
})

test('should return given-date as first session when given-date is session open', t => {
    const start = moment.utc().startOf('day').toDate()
    const nextSession = nextSessionGenerator('1D', start)
    t.deepEqual(start, nextSession.next().value)
})

test('should return next session open as first session when given-date is not session open', t => {
    const start = moment.utc().startOf('day').add(1, 'hour')
    const nextSession = nextSessionGenerator('1D', start.toDate())
    t.deepEqual(
        start.add(1, 'day').startOf('day').toDate(),
        nextSession.next().value
    )
})

test('should return next session on each invocation', t => {
    const start = moment.utc().startOf('day')
    const nextSession = nextSessionGenerator('1D', start.toDate())
    t.deepEqual(start.toDate(), nextSession.next().value)
    t.deepEqual(start.add(1, 'day').toDate(), nextSession.next().value)
    t.deepEqual(start.add(1, 'day').toDate(), nextSession.next().value)
    t.deepEqual(start.add(1, 'day').toDate(), nextSession.next().value)
    t.deepEqual(start.add(1, 'day').toDate(), nextSession.next().value)
})
