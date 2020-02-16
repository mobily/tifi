import { fromNullable } from './fromNullable'
import { match } from './match'

import { pipe } from '../pipe'

describe('match', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        match(
          _ => 'some',
          () => 'none',
        ),
      ),
    ).toEqual('none')
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('string'),
        match(
          str => str,
          () => 'none',
        ),
      ),
    ).toEqual('string')
  })

  it('*', () => {
    const matchWithDefaultSome = match<string, string>(str => `${str}!`)

    expect(
      pipe(
        fromNullable('string'),
        matchWithDefaultSome(() => 'none'),
      ),
    ).toEqual('string!')
  })

  it('*', () => {
    const matchWithDefaultNone = <T>(fn: (str: T) => string) =>
      match<T, string>(fn, () => 'error')

    expect(
      pipe(
        fromNullable('string'),
        matchWithDefaultNone(str => `${str}!`),
      ),
    ).toEqual('string!')

    expect(
      pipe(
        fromNullable(null),
        matchWithDefaultNone(str => `${str}!`),
      ),
    ).toEqual('error')
  })
})
