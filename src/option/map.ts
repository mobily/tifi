import { Some } from './Some'
import { None } from './None'
import { isNone } from './isNone'

import { Option } from '../internal/types'

export const map = <T, R>(fn: (arg0: NonNullable<T>) => NonNullable<R>) => (
  option: Option<T>,
): Option<R> => (isNone(option) ? None : Some(fn(option as NonNullable<T>)))
