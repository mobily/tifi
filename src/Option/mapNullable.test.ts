import { fromNullable } from './fromNullable'
import { mapNullable } from './mapNullable'

import { None } from './None'
import { Some } from './Some'

import { pipe } from '../pipe'

describe('mapNullable', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        mapNullable(value => value),
      ),
    ).toEqual(None)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable({ prop: null }),
        mapNullable(value => value.prop),
      ),
    ).toEqual(None)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        mapNullable(_ => 'string'),
      ),
    ).toEqual(Some('string'))
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable([1, 2, 3]),
        mapNullable(([first]) => first),
      ),
    ).toEqual(Some(1))
  })
})
