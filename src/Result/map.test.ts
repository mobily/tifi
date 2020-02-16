import { fromNullable } from './fromNullable'
import { map } from './map'

import { Error } from './Error'
import { Ok } from './Ok'

import { pipe } from '../pipe'

describe('map', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable('error', null),
        map(_ => 'string'),
      ),
    ).toEqual(Error('error'))
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('error', [1, 2, 3]),
        map(_ => 'string'),
      ),
    ).toEqual(Ok('string'))
  })

  it('*', () => {
    const fromNullableWithError = fromNullable('error')
    const mapNumberToString = map<number, number>(n => n * 2)

    expect(pipe(fromNullableWithError(1), mapNumberToString)).toEqual(Ok(2))
    expect(pipe(fromNullableWithError(undefined), mapNumberToString)).toEqual(
      Error('error'),
    )
  })
})
