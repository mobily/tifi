import { fromNullable } from '../Option/fromNullable'

import { Option, None as N, Some as S } from '../internal/types'

export function head(list: [] | [null, ...any[]] | [undefined, ...any[]]): N
export function head<T>(list: [T, ...any[]]): S<T>
export function head<T>(list: T[]): Option<T> {
  const [first] = list
  return fromNullable(first)
}
