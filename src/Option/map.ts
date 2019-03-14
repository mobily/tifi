import { Some } from './Some'
import { None } from './None'
import { isNone } from './isNone'

import { Option, ExtractValue } from '../internal/types'

export const map = <T, R>(fn: (value: ExtractValue<T>) => NonNullable<R>) => (
  option: Option<T>,
): Option<R> => (isNone(option) ? None : Some(fn(option.value)))
