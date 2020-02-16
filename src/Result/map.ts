import { Ok } from './Ok'
import { Error } from './Error'
import { isError } from './isError'

import { Result, MapFn } from '../internal/types'
import { curry2 } from '../internal/curry2'

type Map = {
  <A, R>(fn: MapFn<A, NonNullable<R>>): <B>(
    result: Result<A, B>,
  ) => Result<R, B>
  <A, B, R>(fn: MapFn<A, NonNullable<R>>, result: Result<A, B>): Result<R, B>
}

export const map: Map = curry2(
  <A, B, R>(fn: MapFn<A, NonNullable<R>>, result: Result<A, B>): any => {
    return isError(result) ? Error(result.value) : Ok(fn(result.value))
  },
)
