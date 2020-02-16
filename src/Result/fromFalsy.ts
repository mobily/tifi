import { Ok } from './Ok'
import { Error } from './Error'

import { Result } from '../internal/types'
import { curry2 } from '../internal/curry2'

type FromFalsy = {
  <B>(error: B): <A>(value: A | null | undefined) => Result<A, B>
  <A, B>(error: B, value: A | null | undefined): Result<A, B>
}

export const fromFalsy: FromFalsy = curry2(
  <A, B>(error: B, value: A | null | undefined): any =>
    Boolean(value) ? Ok(value) : Error(error),
)
