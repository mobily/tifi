import { isNone } from './isNone'

import { Option } from '../internal/types'

export function getWithDefault<T extends NonNullable<{}>>(
  defaultValue: T,
): (option: Option<T>) => T

export function getWithDefault<T extends NonNullable<{}>>(
  defaultValue: T,
  option: Option<T>,
): T

export function getWithDefault<T extends NonNullable<{}>>(
  defaultValue: T,
  option?: Option<T>,
): any {
  if (typeof option === 'undefined') {
    return (opt: Option<T>) => getWithDefault(defaultValue, opt)
  }

  return isNone(option) ? defaultValue : option.value
}
