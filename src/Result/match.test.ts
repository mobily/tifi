import { fromNullable } from './fromNullable'
import { match } from './match'

import { pipe } from '../pipe'

describe('match', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable('error', null),
        match(_ => 'ok', value => value),
      ),
    ).toEqual('error')
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('error', 'ok'),
        match(str => str, () => 'none'),
      ),
    ).toEqual('ok')
  })
})
