import { isError } from './isError'
import { Result } from '../internal/types'
import { curry3 } from '../internal/curry3'

type OkFn<A, R> = (value: A) => R
type ErrorFn<B, R> = (value: B) => R

type Match = {
  <A, R>(okFn: OkFn<A, R>): <B>(
    errorFn: ErrorFn<B, R>,
  ) => (result: Result<A, B>) => R
  <A, B, R>(okFn: OkFn<A, R>, errorFn: ErrorFn<B, R>): (
    result: Result<A, B>,
  ) => R
  <A, B, R>(okFn: OkFn<A, R>, errorFn: ErrorFn<B, R>, result: Result<A, B>): R
}

export const match: Match = curry3(
  <A, B, R>(
    ok: (value: A) => R,
    error: (value: B) => R,
    result: Result<A, B>,
  ): any => {
    return isError(result) ? error(result.value) : ok(result.value)
  },
)
