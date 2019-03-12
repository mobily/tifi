import { fromNullable } from './fromNullable'
import { map } from './map'

import { None } from './None'
import { Some } from './Some'

import { pipe } from '../pipe'

describe('map', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        map(_ => 'string'),
      ),
    ).toEqual(None)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable([1, 2, 3]),
        map(_ => 'string'),
      ),
    ).toEqual(Some('string'))
  })
})
