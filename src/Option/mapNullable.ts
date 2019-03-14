import { fromNullable } from './fromNullable'

import { Option, ExtractValue } from '../internal/types'

export const mapNullable = <T, R>(fn: (value: ExtractValue<T>) => R) => (
  option: Option<T>,
): Option<R> => fromNullable(fn(option.value))
