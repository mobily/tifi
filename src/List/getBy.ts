import { fromNullable } from '../Option/fromNullable'

import { Option } from '../internal/types'

export const getBy = <T>(
  predicate: (value: T, index: number) => boolean,
  list: T[],
): Option<T> => {
  const element = list.find((value, index) => predicate(value, index))
  return fromNullable(element)
}
