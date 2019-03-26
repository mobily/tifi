import { isError } from './isError'

import { Result } from '../internal/types'

export function match<A, B, R extends {}>(
  ok: (value: A) => R,
  error: (value: B) => R,
): (result: Result<A, B>) => R

export function match<A, B, R extends {}>(
  ok: (value: A) => R,
  error: (value: B) => R,
  result: Result<A, B>,
): R

// TODO: Curry3
export function match<A, B, R extends {}>(
  ok: (value: A) => R,
  error: (value: B) => R,
  result?: Result<A, B>,
): any {
  if (typeof result === 'undefined') {
    return (res: Result<A, B>) => match(ok, error, res)
  }

  return isError(result) ? error(result.value) : ok(result.value)
}
