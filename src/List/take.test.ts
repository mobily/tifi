import { take } from './take'

import { None } from '../Option/None'
import { Some } from '../Option/Some'

describe('take', () => {
  it('*', () => {
    expect(take(4, [1, 2, 3])).toEqual(None)
    expect(take(-1, [1, 2, 3])).toEqual(None)
  })

  it('*', () => {
    expect(take(0, [])).toEqual(Some([]))
    expect(take(0, [1, 2, 3])).toEqual(Some([]))
    expect(take(1, [1])).toEqual(Some([1]))
    expect(take(1, [1, 2, 3])).toEqual(Some([1]))
    expect(take(1, [[1], [2]])).toEqual(Some([[1]]))
    expect(take(2, [true, true, false])).toEqual(Some([true, true]))
    expect(take(3, [1, 2, 3])).toEqual(Some([1, 2, 3]))
  })
})
