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
  option?: Result<A, B>,
): any {
  if (typeof option === 'undefined') {
    return (opt: Result<A, B>) => mapWithDefault(defaultValue, fn, opt)
  }

  return Ok(isError(option) ? defaultValue : fn(option.value))
}
