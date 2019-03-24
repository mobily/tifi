import { Ok } from './Ok'
import { Error } from './Error'
import { isError } from './isError'

import { Result, Validation } from '../internal/types'

export function map<A, B, R>(
  fn: (value: Validation<A>) => NonNullable<R>,
): (result: Result<A, B>) => Result<R, B>

export function map<A, B, R>(
  fn: (value: Validation<A>) => NonNullable<R>,
  result: Result<A, B>,
): Result<R, B>

export function map<A, B, R>(
  fn: (value: Validation<A>) => NonNullable<R>,
  result?: Result<A, B>,
): any {
  if (typeof result === 'undefined') {
    return (res: Result<A, B>) => map(fn, res)
  }

  return isError(result) ? Error(result.value) : Ok(fn(result.value))
}
