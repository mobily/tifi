import { isNone } from './isNone'

import { Option } from '../internal/types'

export const getWithDefault = <T>(defaultValue: NonNullable<T>) => (
  option: Option<T>,
): T => (isNone(option) ? defaultValue : (option as NonNullable<T>))
