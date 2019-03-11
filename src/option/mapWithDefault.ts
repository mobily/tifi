import { Some } from './Some'
import { isNone } from './isNone'

import { Option } from '../internal/types'

export const mapWithDefault = <T, R>(
  defaultValue: NonNullable<R>,
  fn: (arg0: NonNullable<T>) => NonNullable<R>,
) => (option: Option<T>): Option<R> => {
  return Some(isNone(option) ? defaultValue : fn(option as NonNullable<T>))
}
