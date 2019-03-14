import { fromNullable } from '../Option/fromNullable'

import { Option } from '../internal/types'

export const tail = <T>(list: T[]): Option<T> => {
  const [last] = list.slice(-1)
  return fromNullable(last)
}
