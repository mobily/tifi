import { Some } from '../Option/Some'
import { None } from '../Option/None'

import { getBy } from './getBy'

describe('getBy', () => {
  it('*', () => {
    expect(getBy(n => n === 0, [1, 2, 3])).toEqual(None)
    expect(getBy(state => state, [false, false, false])).toEqual(None)
    expect(
      getBy(obj => Boolean(obj.prop), [
        { prop: null },
        { prop: false },
        { prop: undefined },
      ]),
    ).toEqual(None)
  })

  it('*', () => {
    expect(getBy(str => str.length === 2, ['a', 'ab', 'bc'])).toEqual(
      Some('ab'),
    )
    expect(getBy(value => value === 2, [1, 2, 3])).toEqual(Some(2))
    expect(
      getBy(obj => obj.prop.length > 2, [
        { prop: 'ab' },
        { prop: 'abc' },
        { prop: 'bcd' },
      ]),
    ).toEqual(Some({ prop: 'abc' }))
  })

  it('*', () => {
    const equalsTwo = getBy(value => value === 2)

    expect(equalsTwo([])).toEqual(None)
    expect(equalsTwo([1, 2, 3])).toEqual(Some(2))
  })
})
