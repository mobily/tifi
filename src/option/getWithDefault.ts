import { isNone } from './isNone'

import { Option } from '../internal/types'

export const getWithDefault = <T extends NonNullable<{}>>(defaultValue: T) => (
  option: Option<T>,
): T => (isNone(option) ? defaultValue : option.value)
