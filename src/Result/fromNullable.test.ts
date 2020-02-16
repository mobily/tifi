import { Ok } from './Ok'
import { Error } from './Error'

import { fromNullable } from './fromNullable'

describe('fromNullable', () => {
  it('*', () => {
    expect(fromNullable('1', null)).toEqual(Error('1'))
    expect(fromNullable('2', undefined)).toEqual(Error('2'))
  })

  it('*', () => {
    expect(fromNullable('1', 'string')).toEqual(Ok('string'))
    expect(fromNullable('2', [])).toEqual(Ok([]))
    expect(fromNullable('3', {})).toEqual(Ok({}))
    expect(fromNullable('4', 0)).toEqual(Ok(0))
    expect(fromNullable('5', false)).toEqual(Ok(false))
  })

  it('*', () => {
    const fromNullableWithError = fromNullable('error')

    expect(fromNullableWithError(null)).toEqual(Error('error'))
    expect(fromNullableWithError('string')).toEqual(Ok('string'))
  })
})
