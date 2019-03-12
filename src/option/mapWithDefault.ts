import { Some } from './Some'
import { isNone } from './isNone'

import { Option, ExtractValue } from '../internal/types'

export const mapWithDefault = <T, R>(
  defaultValue: NonNullable<R>,
  fn: (value: ExtractValue<T>) => NonNullable<R>,
) => (option: Option<T>): Option<R> =>
  Some(isNone(option) ? defaultValue : fn(option.value))
