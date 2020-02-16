import { Some } from './Some'
import { None } from './None'
import { fromNullable } from './fromNullable'
import { flatMap } from './flatMap'

import { pipe } from '../pipe'

describe('flatMap', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        flatMap(_ => Some(1)),
      ),
    ).toEqual(None)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('string'),
        flatMap(_ => None),
      ),
    ).toEqual(None)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('string'),
        flatMap(_ => Some(1)),
      ),
    ).toEqual(Some(1))
  })

  it('*', () => {
    const result = flatMap(_ => Some(1), fromNullable('string'))
    expect(result).toEqual(Some(1))
  })

  it('*', () => {
    const result = flatMap(_ => Some(1))(fromNullable(null))
    expect(result).toEqual(None)
  })
})
