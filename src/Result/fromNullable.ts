import { Ok } from './Ok'
import { Error } from './Error'

import { Result, Error as E, Ok as O } from '../internal/types'

export function fromNullable<B>(value: null | undefined, error: B): E<B>
export function fromNullable<A, B>(value: A, error: B): O<A>
export function fromNullable<A, B>(
  value: A | null | undefined,
  error: B,
): Result<A, B> {
  return value === null || typeof value === 'undefined'
    ? Error(error)
    : Ok(value)
}
