import { Result, MapFn, Ok } from '../internal/types'
import { isError } from './isError'
import { curry2 } from '../internal/curry2'

type ExtractOk<T> = T extends Ok<infer C> ? C : never

type FlatMap = {
  <A, B, R extends Result<any, B>>(fn: MapFn<A, R>): (
    result: Result<A, B>,
  ) => Result<ExtractOk<R>, B>
  <A, B, R extends Result<any, B>>(
    fn: MapFn<A, R>,
    result: Result<A, B>,
  ): Result<ExtractOk<R>, B>
}

export const flatMap: FlatMap = curry2(
  <A, B, R extends Result<any, B>>(
    fn: MapFn<A, R>,
    result: Result<A, B>,
  ): any => {
    return isError(result) ? result : fn((result as Ok<A>).value)
  },
)
