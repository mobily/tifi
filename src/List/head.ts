import { fromNullable } from '../Option/fromNullable'

import { Option } from '../internal/types'

export const head = <T>(list: T[]): Option<T> => {
  const [hd] = list
  return fromNullable(hd)
}
