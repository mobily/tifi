import { fromNullable } from './fromNullable'
import { getWithDefault } from './getWithDefault'

import { pipe } from '../pipe'

describe('getWithDefault', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        getWithDefault('string'),
      ),
    ).toBe('string')
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable(1),
        getWithDefault(2),
      ),
    ).toBe(1)
  })
})
