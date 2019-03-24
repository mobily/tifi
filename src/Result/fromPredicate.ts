import { fromNullable } from './fromNullable'
import { Error } from './Error'

import { Result } from '../internal/types'

export const fromPredicate = <A, B>(
  predicate: (value: A) => boolean,
  error: B,
  value: A,
): Result<A, B> =>
  predicate(value) ? fromNullable(error, value) : Error(error)
