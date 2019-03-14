import { Some } from './Some'
import { None } from './None'

import { Option } from '../internal/types'

export const fromPredicate = <T>(
  predicate: (value: T) => boolean,
  value: T,
): Option<T> => (predicate(value) ? Some(value) : None)
