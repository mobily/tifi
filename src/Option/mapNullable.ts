import { fromNullable } from './fromNullable'

import { Option, ExtractValue } from '../internal/types'

export function mapNullable<T, R>(
  fn: (value: ExtractValue<T>) => R,
): (option: Option<T>) => Option<R>

export function mapNullable<T, R>(
  fn: (value: ExtractValue<T>) => R,
  option: Option<T>,
): Option<R>

export function mapNullable<T, R>(
  fn: (value: ExtractValue<T>) => R,
  option?: Option<T>,
): any {
  return typeof option === 'undefined'
    ? (opt: Option<T>) => mapNullable(fn, opt)
    : fromNullable(fn(option.value))
}
