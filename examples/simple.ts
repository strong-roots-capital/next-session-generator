import nextSessionGenerator from '../src/next-session-generator'

console.log(new Date().toISOString())
//=>2019-04-26T01:28:35.727Z

const nextSession = nextSessionGenerator('1H', new Date())

console.log(nextSession.next().value)
//=>2019-04-26T02:00:00.000Z

console.log(nextSession.next().value)
//=>2019-04-26T03:00:00.000Z

console.log(nextSession.next().value)
//=>2019-04-26T04:00:00.000Z
