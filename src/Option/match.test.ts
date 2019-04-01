import { fromNullable } from './fromNullable'
import { match } from './match'

import { pipe } from '../pipe'

describe('match', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        match(_ => 'some', () => 'none'),
      ),
    ).toEqual('none')
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('string'),
        match(str => str, () => 'none'),
      ),
    ).toEqual('string')
  })
})
