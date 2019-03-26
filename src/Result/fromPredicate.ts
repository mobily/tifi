import { fromNullable } from './fromNullable'
import { Error } from './Error'

import { Result, Predicate } from '../internal/types'

export const fromPredicate = <A, B>(
  predicate: Predicate<A>,
  error: B,
  value: A,
): Result<A, B> =>
  predicate(value) ? fromNullable(error, value) : Error(error)
