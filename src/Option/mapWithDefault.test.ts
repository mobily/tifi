import { fromNullable } from './fromNullable'
import { mapWithDefault } from './mapWithDefault'

import { Some } from './Some'

import { pipe } from '../pipe'

describe('mapWithDefault', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        mapWithDefault('default', _ => 'string'),
      ),
    ).toEqual(Some('default'))
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable([1, 2, 3]),
        mapWithDefault('default', _ => 'string'),
      ),
    ).toEqual(Some('string'))
  })

  it('*', () => {
    const mapWithDefaultString = mapWithDefault('default')

    expect(
      pipe(
        fromNullable([1, 2, 3]),
        mapWithDefaultString(_ => 'string'),
      ),
    ).toEqual(Some('string'))
  })

  it('*', () => {
    const mapWithDefaultString = mapWithDefault('default')(_ => 'string')

    expect(pipe(fromNullable([1, 2, 3]), mapWithDefaultString)).toEqual(
      Some('string'),
    )
  })
})
