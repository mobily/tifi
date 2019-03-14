import { Some } from './Some'
import { None } from './None'

import { fromPredicate } from './fromPredicate'

describe('fromPredicate', () => {
  it('*', () => {
    expect(fromPredicate(str => str.length > 10, 'string')).toEqual(None)
    expect(fromPredicate(arr => arr.some(x => x === 2), [1, 2, 3])).toEqual(
      Some([1, 2, 3]),
    )
    expect(fromPredicate(obj => obj.prop === null, { prop: null })).toEqual(
      Some({ prop: null }),
    )
    expect(fromPredicate(n => n !== 0, 0)).toEqual(None)
    expect(fromPredicate(state => !state, true)).toEqual(None)
  })
})
