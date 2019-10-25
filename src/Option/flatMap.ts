import { Option, MapFn } from '../internal/types'
import { isNone } from './isNone'

export function flatMap<T, R>(
  fn: MapFn<T, Option<R>>,
): (option: Option<T>) => Option<R>

export function flatMap<T, R>(
  fn: MapFn<T, Option<R>>,
  option: Option<T>,
): Option<R>

export function flatMap<T, R>(
  fn: MapFn<T, Option<R>>,
  option?: Option<T>,
): any {
  if (typeof option === 'undefined') {
    return (opt: Option<T>) => flatMap(fn, opt)
  }

  return isNone(option) ? option : fn(option.value)
}
