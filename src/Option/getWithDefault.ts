import { isNone } from './isNone'

import { Option } from '../internal/types'
import { curry2 } from '../internal/curry2'

type GetWithDefault = {
  <T>(defaultValue: T): (option: Option<T>) => T
  <T>(defaultValue: T, option: Option<T>): T
}

export const getWithDefault: GetWithDefault = curry2(
  <T>(defaultValue: T, option: Option<T>): any => {
    return isNone(option) ? defaultValue : option.value
  },
)
