import { Option, MapFn } from '../internal/types'

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
  return typeof option === 'undefined'
    ? (opt: Option<T>) => flatMap(fn, opt)
    : fn(option.value)
}
