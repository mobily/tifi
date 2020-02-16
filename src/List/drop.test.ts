import { drop } from './drop'

import { None } from '../Option/None'
import { Some } from '../Option/Some'

describe('drop', () => {
  it('*', () => {
    expect(drop(4, [1, 2, 3])).toEqual(None)
    expect(drop(-1, [1, 2, 3])).toEqual(None)
  })

  it('*', () => {
    expect(drop(0, [])).toEqual(Some([]))
    expect(drop(0, [1, 2, 3])).toEqual(Some([1, 2, 3]))
    expect(drop(1, [1])).toEqual(Some([]))
    expect(drop(1, [1, 2, 3])).toEqual(Some([2, 3]))
    expect(drop(1, [[1], [2]])).toEqual(Some([[2]]))
    expect(drop(2, [true, true, false])).toEqual(Some([false]))
    expect(drop(3, [1, 2, 3])).toEqual(Some([]))
  })

  it('*', () => {
    const dropThreeElements = drop(3)

    expect(dropThreeElements([])).toEqual(None)
    expect(dropThreeElements([1, 2, 3])).toEqual(Some([]))
    expect(dropThreeElements([1, 2, 3, 4])).toEqual(Some([4]))
  })
})
