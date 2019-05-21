import { Ok } from './Ok'
import { Error } from './Error'
import { fromNullable } from './fromNullable'
import { flatMap } from './flatMap'

import { pipe } from '../pipe'

describe('flatMap', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable('error', null),
        flatMap(_ => Ok(1)),
      ),
    ).toEqual(Ok(1))
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('error', 'string'),
        flatMap(_ => Error('new error')),
      ),
    ).toEqual(Error('new error'))
  })
})
