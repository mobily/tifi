import { Some } from './Some'
import { None } from './None'
import { fromNullable } from './fromNullable'
import { flatMap } from './flatMap'

import { pipe } from '../pipe'

describe('flatMap', () => {
  test('Some', () => {
    const result = pipe(
      fromNullable(null),
      flatMap(_value => Some(1)),
    )
    expect(result).toBe(Some(1))
  })
  test('None', () => {
    const result = pipe(
      fromNullable('string'),
      flatMap(_value => None),
    )
    expect(result).toBe(None)
  })
})
