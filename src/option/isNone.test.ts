import { None } from './None'
import { isNone } from './isNone'

describe('isNone', () => {
  it('is truthy', () => {
    expect(isNone(None)).toBeTruthy()
  })
})
