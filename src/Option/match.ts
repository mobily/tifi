import { isNone } from './isNone'

import { Option } from '../internal/types'

export function match<T, R extends {}>(
  someFn: (value: T) => R,
  noneFn: () => R,
): (option: Option<T>) => R

export function match<T, R extends {}>(
  someFn: (value: T) => R,
  noneFn: () => R,
  option: Option<T>,
): R

// TODO: Curry3
export function match<T, R extends {}>(
  someFn: (value: T) => R,
  noneFn: () => R,
  option?: Option<T>,
): any {
  if (typeof option === 'undefined') {
    return (opt: Option<T>) => match(someFn, noneFn, opt)
  }

  return isNone(option) ? noneFn() : someFn(option.value)
}
