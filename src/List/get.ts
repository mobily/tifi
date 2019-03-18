import { fromNullable } from '../Option/fromNullable'

import { Option } from '../internal/types'

export function get<T>(index: number): (list: T[]) => Option<T>

export function get<T>(index: number, list: T[]): Option<T>

export function get<T>(index: number, list?: T[]): any {
  return typeof list === 'undefined'
    ? (arr: T[]) => get(index, arr)
    : fromNullable(list[index])
}
