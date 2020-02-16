import { splitAt } from './splitAt'

import { None } from '../Option/None'
import { Some } from '../Option/Some'

describe('splitAt', () => {
  it('*', () => {
    expect(splitAt(1, [])).toEqual(None)
    expect(splitAt(-1, [1, 2, 3])).toEqual(None)
    expect(splitAt(4, [1, 2, 3])).toEqual(None)
  })

  it('*', () => {
    expect(splitAt(0, [])).toEqual(Some([[], []]))
    expect(splitAt(1, [1])).toEqual(Some([[1], []]))
    expect(splitAt(1, [1, 2])).toEqual(Some([[1], [2]]))
    expect(splitAt(2, [true, true, false])).toEqual(
      Some([[true, true], [false]]),
    )
    expect(splitAt(2, [[1], [2], [3], [4]])).toEqual(
      Some([
        [[1], [2]],
        [[3], [4]],
      ]),
    )
  })

  it('*', () => {
    const splitAtFirstElement = splitAt(1)

    expect(splitAtFirstElement([])).toEqual(None)
    expect(splitAtFirstElement([1])).toEqual(Some([[1], []]))
    expect(splitAtFirstElement([1, 2])).toEqual(Some([[1], [2]]))
  })
})
