import { Some } from './Some'
import { None } from './None'
import { isNone } from './isNone'

import { Option, Validation } from '../internal/types'

export function map<T, R>(
  fn: (value: Validation<T>) => NonNullable<R>,
): (option: Option<T>) => Option<R>

export function map<T, R>(
  fn: (value: Validation<T>) => NonNullable<R>,
  option: Option<T>,
): Option<R>

export function map<T, R>(
  fn: (value: Validation<T>) => NonNullable<R>,
  option?: Option<T>,
): any {
  if (typeof option === 'undefined') {
    return (opt: Option<T>) => map(fn, opt)
  }

  return isNone(option) ? None : Some(fn(option.value))
}
