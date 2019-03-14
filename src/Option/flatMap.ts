import { Option, ExtractValue } from '../internal/types'

export const flatMap = <T, R>(fn: (value: ExtractValue<T>) => Option<R>) => (
  option: Option<T>,
): Option<R> => fn(option.value)
