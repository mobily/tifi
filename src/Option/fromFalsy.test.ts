import { Some } from './Some'
import { None } from './None'

import { fromFalsy } from './fromFalsy'

describe('fromFalsy', () => {
  it('*', () => {
    expect(fromFalsy(null)).toEqual(None)
    expect(fromFalsy(undefined)).toEqual(None)
    expect(fromFalsy(0)).toEqual(None)
    expect(fromFalsy('')).toEqual(None)
    expect(fromFalsy(false)).toEqual(None)
  })

  it('*', () => {
    expect(fromFalsy('string')).toEqual(Some('string'))
    expect(fromFalsy([])).toEqual(Some([]))
    expect(fromFalsy({})).toEqual(Some({}))
  })
})
