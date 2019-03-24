import { fromNullable } from './fromNullable'

import { Option, Validation } from '../internal/types'

export function mapNullable<T, R>(
  fn: (value: Validation<T>) => R,
): (option: Option<T>) => Option<R>

export function mapNullable<T, R>(
  fn: (value: Validation<T>) => R,
  option: Option<T>,
): Option<R>

export function mapNullable<T, R>(
  fn: (value: Validation<T>) => R,
  option?: Option<T>,
): any {
  return typeof option === 'undefined'
    ? (opt: Option<T>) => mapNullable(fn, opt)
    : fromNullable(fn(option.value))
}
