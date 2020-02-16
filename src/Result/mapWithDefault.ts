import { Ok } from './Ok'
import { isError } from './isError'

import { Result, MapFn } from '../internal/types'
import { curry3 } from '../internal/curry3'

type MapWithDefault = {
  <R>(defaultValue: R): <A>(
    fn: MapFn<A, R>,
  ) => <B>(result: Result<A, B>) => Result<R, B>
  <A, R>(defaultValue: R, fn: MapFn<A, R>): <B>(
    result: Result<A, B>,
  ) => Result<R, B>
  <A, B, R>(defaultValue: R, fn: MapFn<A, R>, result: Result<A, B>): Result<
    R,
    B
  >
}

export const mapWithDefault: MapWithDefault = curry3(
  <A, B, R>(defaultValue: R, fn: MapFn<A, R>, result: Result<A, B>): any => {
    return Ok(isError(result) ? defaultValue : fn(result.value))
  },
)
