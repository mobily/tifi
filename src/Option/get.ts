import { isNone } from './isNone'

import { Option } from '../internal/types'

export const get = <T>(option: Option<T>): T | never => {
  if (isNone(option)) {
    throw new Error('None')
  }

  return option.value
}
