import { isNone } from './isNone'

import { Option } from '../internal/types'

export const toUndefined = <T>(option: Option<T>): T | undefined =>
  isNone(option) ? undefined : option.value
