import { Result, MapFn, Ok } from '../internal/types'
import { isError } from './isError'

type ExtractOk<T> = T extends Ok<infer C> ? C : never

export function flatMap<A, B, R extends Result<any, B>>(
  fn: MapFn<A, R>,
): (result: Result<A, B>) => Result<ExtractOk<R>, B>

export function flatMap<A, B, R extends Result<any, B>>(
  fn: MapFn<A, R>,
  result: Result<A, B>,
): Result<ExtractOk<R>, B>

export function flatMap<A, B, R extends Result<any, B>>(
  fn: MapFn<A, R>,
  result?: Result<A, B>,
): any {
  if (typeof result === 'undefined') {
    return (opt: Result<A, B>) => flatMap(fn, opt)
  }

  return isError(result) ? result : fn((result as Ok<A>).value)
}
