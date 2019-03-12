import { Some } from './Some'
import { isSome } from './isSome'

describe('isSome', () => {
  it('is truthy', () => {
    expect(isSome(Some('string'))).toBeTruthy()
  })
})
