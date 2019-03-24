import { None } from './None'
import { fromNullable } from './fromNullable'

import { Option } from '../internal/types'

export const fromPredicate = <T>(
  predicate: (value: T) => boolean,
  value: T,
): Option<T> => (predicate(value) ? fromNullable(value) : None)
