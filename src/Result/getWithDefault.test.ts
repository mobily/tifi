import { fromNullable } from './fromNullable'
import { getWithDefault } from './getWithDefault'

import { pipe } from '../pipe'

describe('getWithDefault', () => {
  it('*', () => {
    expect(pipe(fromNullable('error', null), getWithDefault('string'))).toBe(
      'string',
    )
  })

  it('*', () => {
    expect(pipe(fromNullable('error', 1), getWithDefault(2))).toBe(1)
  })

  it('*', () => {
    const fromNullableWithError = fromNullable('error')
    const getWithDefaultNumber = getWithDefault(2)

    expect(pipe(fromNullableWithError(1), getWithDefaultNumber)).toBe(1)
    expect(pipe(fromNullableWithError(null), getWithDefaultNumber)).toBe(2)
  })

  it('*', () => {
    const fromNullableWithError = fromNullable('error')
    const okResult = getWithDefault(2)(fromNullableWithError(1))
    const defaultResult = getWithDefault(2, fromNullableWithError(null))

    expect(okResult).toBe(1)
    expect(defaultResult).toBe(2)
  })
})
