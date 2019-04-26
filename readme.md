# next-session-generator [![Build status](https://travis-ci.org/strong-roots-capital/next-session-generator.svg?branch=master)](https://travis-ci.org/strong-roots-capital/next-session-generator) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/next-session-generator.svg)](https://npmjs.org/package/@strong-roots-capital/next-session-generator) [![codecov](https://codecov.io/gh/strong-roots-capital/next-session-generator/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/next-session-generator)

> Generator providing start of next session

## Install

```shell
npm install @strong-roots-capital/next-session-generator
```

## Use

```typescript
import nextSessionGenerator from '@strong-roots-capital/next-session-generator'

console.log(new Date().toISOString())
//=>2019-04-26T01:28:35.727Z

const nextSession = nextSessionGenerator('1H', new Date())

console.log(nextSession.next().value)
//=>2019-04-26T02:00:00.000Z

console.log(nextSession.next().value)
//=>2019-04-26T03:00:00.000Z

console.log(nextSession.next().value)
//=>2019-04-26T04:00:00.000Z
```

## Related

- [add-timeframe](https://github.com/strong-roots-capital/add-timeframe)
- [next-session-open](https://github.com/strong-roots-capital/next-session-open)

## Acknowledgments

- [inspiring article on ES6 generators](https://itnext.io/a-quick-practical-use-case-for-es6-generators-building-an-infinitely-repeating-array-49d74f555666)
