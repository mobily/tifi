import { Ok } from './Ok'
import { Error } from './Error'

import { Result, Error as E, Ok as O } from '../internal/types'

export function fromNullable<B>(error: B, value: null | undefined): E<B>
export function fromNullable<A, B>(error: B, value: A): O<A>
export function fromNullable<A, B>(
  error: B,
  value: A | null | undefined,
): Result<A, B> {
  return value === null || typeof value === 'undefined'
    ? Error(error)
    : Ok(value)
}
