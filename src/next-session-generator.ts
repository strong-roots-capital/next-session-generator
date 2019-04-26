/**
 * next-session-generator
 * Generator providing start of next session
 */

import ow from 'ow'
import { inTradingviewFormat } from '@strong-roots-capital/is-tradingview-format'
import { addTimeframe } from '@strong-roots-capital/add-timeframe'
import { nextSessionOpen } from '@strong-roots-capital/next-session-open'


/**
 * Returns a generator providing the start of the next session.
 *
 * @remarks
 * Starting time will be rounded to start of next session-open,
 * inclusive.
 *
 * @param timeframe - Length of session in Trading View format
 * @param start - Starting value of generator, rounded to start of
 * next session-open
 * @returns Generator providing stat of next sessions
 */
export default function* nextSessionGenerator(timeframe: string, start: Date) {

    ow(timeframe, ow.string)
    ow(timeframe, ow.string.is(inTradingviewFormat))
    ow(start, ow.date)

    let date = nextSessionOpen(timeframe, start)

    while (true) {
        yield date
        date = addTimeframe(timeframe, date)
    }
}
