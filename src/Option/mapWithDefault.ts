import { Some } from './Some'
import { isNone } from './isNone'

import { Option, Validation } from '../internal/types'

export function mapWithDefault<T, R extends NonNullable<{}>>(
  defaultValue: R,
  fn: (value: Validation<T>) => R,
): (option: Option<T>) => Option<R>

export function mapWithDefault<T, R extends NonNullable<{}>>(
  defaultValue: R,
  fn: (value: Validation<T>) => R,
  option: Option<T>,
): Option<R>

// TODO: Curry3
export function mapWithDefault<T, R extends NonNullable<{}>>(
  defaultValue: R,
  fn: (value: Validation<T>) => R,
  option?: Option<T>,
): any {
  if (typeof option === 'undefined') {
    return (opt: Option<T>) => mapWithDefault(defaultValue, fn, opt)
  }

  return Some(isNone(option) ? defaultValue : fn(option.value))
}
