import { Some } from './Some'
import { None } from './None'

import { fromNullable } from './fromNullable'

describe('fromNullable', () => {
  test('None', () => {
    expect(fromNullable(null)).toBe(None)
  })

  test('Some', () => {
    expect(fromNullable(5)).toBe(Some(5))
  })
})
