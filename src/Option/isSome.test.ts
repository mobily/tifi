import { Some } from './Some'
import { isSome } from './isSome'

describe('isSome', () => {
  it('*', () => {
    expect(isSome(Some('string'))).toBeTruthy()
  })
})
