import { Ok } from './Ok'
import { Error } from './Error'

import { fromFalsy } from './fromFalsy'

describe('fromFalsy', () => {
  it('*', () => {
    expect(fromFalsy('1', null)).toEqual(Error('1'))
    expect(fromFalsy('2', undefined)).toEqual(Error('2'))
    expect(fromFalsy('3', 0)).toEqual(Error('3'))
    expect(fromFalsy('4', '')).toEqual(Error('4'))
    expect(fromFalsy('5', false)).toEqual(Error('5'))
  })

  it('*', () => {
    expect(fromFalsy('1', 'string')).toEqual(Ok('string'))
    expect(fromFalsy('2', [])).toEqual(Ok([]))
    expect(fromFalsy('3', {})).toEqual(Ok({}))
  })

  it('*', () => {
    const fromFalsyWithError = fromFalsy('error')

    expect(fromFalsyWithError(0)).toEqual(Error('error'))
    expect(fromFalsyWithError(false)).toEqual(Error('error'))
    expect(fromFalsyWithError('string')).toEqual(Ok('string'))
  })
})
