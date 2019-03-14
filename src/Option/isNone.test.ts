import { None } from './None'
import { isNone } from './isNone'

describe('isNone', () => {
  it('*', () => {
    expect(isNone(None)).toBeTruthy()
  })
})
