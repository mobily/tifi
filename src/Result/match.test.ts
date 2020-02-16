import { fromNullable } from './fromNullable'
import { match } from './match'

import { pipe } from '../pipe'

describe('match', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable('error', null),
        match(
          _ => 'ok',
          value => value,
        ),
      ),
    ).toEqual('error')
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('error', 'ok'),
        match(
          str => str,
          () => 'none',
        ),
      ),
    ).toEqual('ok')
  })

  it('*', () => {
    const fromNullableWithError = fromNullable('error')
    const matchWithDefaultOk = match<string, string>(str => `${str}!`)

    expect(
      pipe(
        fromNullableWithError('string'),
        matchWithDefaultOk(() => 'error x2'),
      ),
    ).toEqual('string!')
  })

  it('*', () => {
    const fromNullableWithError = fromNullable('error')
    const matchWithDefaultError = <T>(fn: (str: T) => string) =>
      match<T, string, string>(fn, str => `${str} x2`)

    expect(
      pipe(
        fromNullableWithError('string'),
        matchWithDefaultError(str => `${str}!`),
      ),
    ).toEqual('string!')

    expect(
      pipe(
        fromNullableWithError(null),
        matchWithDefaultError(str => `${str}!`),
      ),
    ).toEqual('error x2')
  })
})
