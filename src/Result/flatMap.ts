import { Result, MapFn, Ok } from '../internal/types'

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
  return typeof result === 'undefined'
    ? (opt: Result<A, B>) => flatMap(fn, opt)
    : fn((result as Ok<A>).value)
}
