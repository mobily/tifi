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
})
