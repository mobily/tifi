import { Some } from './Some'
import { None } from './None'

import { fromNullable } from './fromNullable'

describe('fromNullable', () => {
  it('is `None`', () => {
    expect(fromNullable(null)).toBe(None)
    expect(fromNullable(undefined)).toBe(None)
  })

  it('is `Some`', () => {
    expect(fromNullable('string')).toBe(Some('string'))
    expect(fromNullable([0, 1, 2])).toEqual(Some([0, 1, 2]))
    expect(fromNullable({ value: true })).toEqual(Some({ value: true }))
    expect(fromNullable(0)).toBe(Some(0))
    expect(fromNullable(false)).toBe(Some(false))
  })
})
