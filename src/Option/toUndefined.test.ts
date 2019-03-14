import { Some } from './Some'
import { None } from './None'

import { fromNullable } from './fromNullable'
import { mapNullable } from './mapNullable'
import { toUndefined } from './toUndefined'

import { pipe } from '../pipe'

describe('toUndefined', () => {
  it('*', () => {
    expect(
      pipe(
        None,
        toUndefined,
      ),
    ).toBe(undefined)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable({ prop: null }),
        mapNullable(obj => obj.prop),
        toUndefined,
      ),
    ).toBe(undefined)
  })

  it('*', () => {
    expect(
      pipe(
        Some('string'),
        toUndefined,
      ),
    ).toBe('string')
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable({ prop: 'string' }),
        mapNullable(obj => obj.prop),
        toUndefined,
      ),
    ).toBe('string')
  })
})
