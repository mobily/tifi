import { Option } from '../internal/types'

export const flatMap = <T, R>(fn: (arg0: NonNullable<T>) => Option<R>) => (
  option: Option<T>,
): Option<R> => fn(option as NonNullable<T>)
