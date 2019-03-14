import { tail } from './tail'

import { None } from '../Option/None'
import { Some } from '../Option/Some'

describe('tail', () => {
  it('*', () => {
    expect(tail([])).toEqual(None)
  })

  it('*', () => {
    expect(tail([1, 2, 3])).toEqual(Some([2, 3]))
    expect(tail([true, true, false])).toEqual(Some([true, false]))
    expect(tail([{ prop: 1 }, { prop: 2 }])).toEqual(Some([{ prop: 2 }]))
    expect(tail([[1], [2], [3]])).toEqual(Some([[2], [3]]))
  })
})
