import { drop } from './drop'

import { None } from '../Option/None'
import { Some } from '../Option/Some'

describe('drop', () => {
  it('*', () => {
    expect(drop(0, [])).toEqual(None)
    expect(drop(3, [1, 2, 3])).toEqual(None)
  })

  it('*', () => {
    expect(drop(1, [1, 2, 3])).toEqual(Some([2, 3]))
    expect(drop(0, [0, 2, 3])).toEqual(Some([0, 2, 3]))
    expect(drop(2, [true, true, false])).toEqual(Some([false]))
    expect(drop(1, [[1], [2]])).toEqual(Some([[2]]))
  })
})
