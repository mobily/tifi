import { fromNullable } from './fromNullable'
import { mapWithDefault } from './mapWithDefault'

import { Ok } from './Ok'

import { pipe } from '../pipe'

describe('mapWithDefault', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable('error', null),
        mapWithDefault('default', _ => 'string'),
      ),
    ).toEqual(Ok('default'))
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('error', [1, 2, 3]),
        mapWithDefault('default', _ => 'string'),
      ),
    ).toEqual(Ok('string'))
  })

  it('*', () => {
    const fromNullableWithError = fromNullable('error')
    const mapWithDefaultString = mapWithDefault('default')

    expect(
      pipe(
        fromNullableWithError([1, 2, 3]),
        mapWithDefaultString(_ => 'string'),
      ),
    ).toEqual(Ok('string'))
  })

  it('*', () => {
    const fromNullableWithError = fromNullable('error')
    const mapWithDefaultString = mapWithDefault('default')(_ => 'string')

    expect(pipe(fromNullableWithError(null), mapWithDefaultString)).toEqual(
      Ok('default'),
    )
  })
})
