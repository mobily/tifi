import { fromNullable } from './fromNullable'
import { Error } from './Error'

import { Result, Predicate } from '../internal/types'
import { curry3 } from '../internal/curry3'

type FromPredicate = {
  <A>(predicate: Predicate<A>): <B>(error: B) => (value: A) => Result<A, B>
  <A, B>(predicate: Predicate<A>, error: B): (value: A) => Result<A, B>
  <A, B>(predicate: Predicate<A>, error: B, value: A): Result<A, B>
}

export const fromPredicate: FromPredicate = curry3(
  <A, B>(predicate: Predicate<A>, error: B, value: A): any =>
    predicate(value) ? fromNullable(error, value) : Error(error),
)
