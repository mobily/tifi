import { Some } from './Some'
import { None } from './None'

import { fromNullable } from './fromNullable'

describe('fromNullable', () => {
  it('*', () => {
    expect(fromNullable(null)).toEqual(None)
    expect(fromNullable(undefined)).toEqual(None)
  })

  it('*', () => {
    expect(fromNullable('string')).toEqual(Some('string'))
    expect(fromNullable([])).toEqual(Some([]))
    expect(fromNullable({})).toEqual(Some({}))
    expect(fromNullable(0)).toEqual(Some(0))
    expect(fromNullable(false)).toEqual(Some(false))
  })
})
