import { fromNullable } from '../Option/fromNullable'

import { Option, None as N, Some as S } from '../internal/types'

export function get(index: number, list: []): N
export function get<T>(index: number, list: T[]): S<T>
export function get<T>(index: number, list: T[]): Option<T> {
  return fromNullable(list[index])
}
