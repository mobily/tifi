import { Some } from './Some'
import { None } from './None'
import { fromNullable } from './fromNullable'
import { flatMap } from './flatMap'

import { pipe } from '../pipe'

describe('flatMap', () => {
  it('Some', () => {
    const result = pipe(
      fromNullable(null),
      flatMap(_value => Some(1)),
    )
    expect(result).toEqual(Some(1))
  })
  it('None', () => {
    const result = pipe(
      fromNullable('string'),
      flatMap(_value => None),
    )
    expect(result).toEqual(None)
  })
})
