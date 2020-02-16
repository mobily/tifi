import { get } from './get'

import { None } from '../Option/None'
import { Some } from '../Option/Some'

describe('get', () => {
  it('*', () => {
    expect(get(0, [])).toEqual(None)
    expect(get(3, [1, 2, 3])).toEqual(None)
  })

  it('*', () => {
    expect(get(0, [1, 2, 3])).toEqual(Some(1))
    expect(get(0, [0, 2, 3])).toEqual(Some(0))
    expect(get(2, [true, true, false])).toEqual(Some(false))
    expect(get(1, [[1], [2]])).toEqual(Some([2]))
  })

  it('*', () => {
    const getThirdElement = get(2)

    expect(getThirdElement([])).toEqual(None)
    expect(getThirdElement([true, true, false])).toEqual(Some(false))
  })
})
