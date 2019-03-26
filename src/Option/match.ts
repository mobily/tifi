import { isNone } from './isNone'

import { Option } from '../internal/types'

export function match<T, R extends {}>(
  some: (value: T) => R,
  none: () => R,
): (option: Option<T>) => R

export function match<T, R extends {}>(
  some: (value: T) => R,
  none: () => R,
  option: Option<T>,
): R

// TODO: Curry3
export function match<T, R extends {}>(
  some: (value: T) => R,
  none: () => R,
  option?: Option<T>,
): any {
  if (typeof option === 'undefined') {
    return (opt: Option<T>) => match(some, none, opt)
  }

  return isNone(option) ? none() : some(option.value)
}
