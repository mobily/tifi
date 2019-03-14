import { tail } from './tail'

import { None } from '../Option/None'
import { Some } from '../Option/Some'

describe('tail', () => {
  it('*', () => {
    expect(tail([])).toEqual(None)
    expect(tail([1, 2, undefined])).toEqual(None)
    expect(tail([1, 2, null])).toEqual(None)
  })

  it('*', () => {
    expect(tail([1, 2, 3])).toEqual(Some(3))
    expect(tail([1, 2, 0])).toEqual(Some(0))
    expect(tail([true, true, false])).toEqual(Some(false))
    expect(tail([{ prop: 1 }, { prop: 2 }])).toEqual(Some({ prop: 2 }))
    expect(tail([[1], [2]])).toEqual(Some([2]))
  })
})
