import { isNone } from './isNone'

import { Option } from '../internal/types'

export const toNullable = <T>(option: Option<T>): T | null =>
  isNone(option) ? null : option.value
