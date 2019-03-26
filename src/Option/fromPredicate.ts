import { None } from './None'
import { fromNullable } from './fromNullable'

import { Option, Predicate } from '../internal/types'

export const fromPredicate = <T>(
  predicate: Predicate<T>,
  value: T,
): Option<T> => (predicate(value) ? fromNullable(value) : None)
