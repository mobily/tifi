import { Ok } from './Ok'
import { Error } from './Error'
import { fromNullable } from './fromNullable'
import { flatMap } from './flatMap'

import { pipe } from '../pipe'

describe('flatMap', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable('error', null),
        flatMap(_ => Ok(1)),
      ),
    ).toEqual(Error('error'))
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('error', 'string'),
        flatMap(_ => Error('new error')),
      ),
    ).toEqual(Error('new error'))
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('error', 'string'),
        flatMap(_ => Ok(1)),
      ),
    ).toEqual(Ok(1))
  })

  it('*', () => {
    const fromNullableWithError = fromNullable('error')
    const okResult = flatMap(_ => Ok(1), fromNullableWithError('string'))
    const errorResult = flatMap(_ => Ok(1), fromNullableWithError(null))

    expect(okResult).toEqual(Ok(1))
    expect(errorResult).toEqual(Error('error'))
  })
})
