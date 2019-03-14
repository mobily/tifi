import { Some } from './Some'
import { None } from './None'

import { fromNullable } from './fromNullable'
import { mapNullable } from './mapNullable'
import { toNullable } from './toNullable'

import { pipe } from '../pipe'

describe('toNullable', () => {
  it('*', () => {
    expect(
      pipe(
        None,
        toNullable,
      ),
    ).toBe(null)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable({ prop: null }),
        mapNullable(obj => obj.prop),
        toNullable,
      ),
    ).toBe(null)
  })

  it('*', () => {
    expect(
      pipe(
        Some('string'),
        toNullable,
      ),
    ).toBe('string')
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable({ prop: 'string' }),
        mapNullable(obj => obj.prop),
        toNullable,
      ),
    ).toBe('string')
  })
})
