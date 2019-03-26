import { Ok } from './Ok'
import { isError } from './isError'

import { Result, MapFn } from '../internal/types'

export function mapWithDefault<A, B, R extends NonNullable<{}>>(
  defaultValue: R,
  fn: MapFn<A, R>,
): (result: Result<A, B>) => Result<R, B>

export function mapWithDefault<A, B, R extends NonNullable<{}>>(
  defaultValue: R,
  fn: MapFn<A, R>,
  result: Result<A, B>,
): Result<R, B>

// TODO: Curry3
export function mapWithDefault<A, B, R extends NonNullable<{}>>(
  defaultValue: R,
  fn: MapFn<A, R>,
  result?: Result<A, B>,
): any {
  if (typeof result === 'undefined') {
    return (res: Result<A, B>) => mapWithDefault(defaultValue, fn, res)
  }

  return Ok(isError(result) ? defaultValue : fn(result.value))
}
