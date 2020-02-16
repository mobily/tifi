import { Ok } from './Ok'
import { Error } from './Error'
import { Result } from '../internal/types'
import { curry2 } from '../internal/curry2'

type FromNullable = {
  <B>(error: B): <A>(value: A | null | undefined) => Result<A, B>
  <A, B>(error: B, value: A | null | undefined): Result<A, B>
}

export const fromNullable: FromNullable = curry2(
  <A, B>(error: B, value: A | null | undefined): any =>
    value === null || typeof value === 'undefined' ? Error(error) : Ok(value),
)
