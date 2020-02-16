import { fromNullable } from './fromNullable'
import { getWithDefault } from './getWithDefault'

import { pipe } from '../pipe'

describe('getWithDefault', () => {
  it('*', () => {
    expect(pipe(fromNullable(null), getWithDefault('string'))).toBe('string')
  })

  it('*', () => {
    expect(pipe(fromNullable(1), getWithDefault(2))).toBe(1)
  })

  it('*', () => {
    const result = getWithDefault(2, fromNullable(1))
    expect(result).toBe(1)
  })

  it('*', () => {
    const result = getWithDefault('string')(fromNullable(null))
    expect(result).toBe('string')
  })
})
