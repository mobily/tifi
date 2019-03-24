import { isError } from './isError'

import { Result } from '../internal/types'

export function match<A, B, R extends {}>(
  okFn: (value: A) => R,
  errorFn: (value: B) => R,
): (result: Result<A, B>) => R

export function match<A, B, R extends {}>(
  okFn: (value: A) => R,
  errorFn: (value: B) => R,
  result: Result<A, B>,
): R

// TODO: Curry3
export function match<A, B, R extends {}>(
  okFn: (value: A) => R,
  errorFn: (value: B) => R,
  result?: Result<A, B>,
): any {
  if (typeof result === 'undefined') {
    return (res: Result<A, B>) => match(okFn, errorFn, res)
  }

  return isError(result) ? errorFn(result.value) : okFn(result.value)
}
