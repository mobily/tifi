import { Some } from './Some'
import { None } from './None'

import { fromNullable } from './fromNullable'

describe('fromNullable', () => {
  it('is `None`', () => {
    expect(fromNullable(null)).toEqual(None)
    expect(fromNullable(undefined)).toEqual(None)
  })

  it('is `Some`', () => {
    expect(fromNullable('string')).toEqual(Some('string'))
    expect(fromNullable([0, 1, 2])).toEqual(Some([0, 1, 2]))
    expect(fromNullable({ value: true })).toEqual(Some({ value: true }))
    expect(fromNullable(0)).toEqual(Some(0))
    expect(fromNullable(false)).toEqual(Some(false))
  })
})
