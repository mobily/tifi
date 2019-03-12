import { isNone } from './isNone'

import { Option, ExtractValue } from '../internal/types'

export const getWithDefault = <T>(defaultValue: ExtractValue<T>) => (
  option: Option<T>,
): T => (isNone(option) ? defaultValue : option.value)
