import { Some } from './Some'
import { None } from './None'

import { Option } from '../internal/types'

export const fromNullable = <T>(value: T | null): Option<T> =>
  value === null ? None : Some(value as NonNullable<T>)
