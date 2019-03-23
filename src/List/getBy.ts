import { fromNullable } from '../Option/fromNullable'

import { Option } from '../internal/types'

export function getBy<T>(
  predicate: (value: T, index: number) => boolean,
): (list: T[]) => Option<T>

export function getBy<T>(
  predicate: (value: T, index: number) => boolean,
  list: T[],
): Option<T>

export function getBy<T>(
  predicate: (value: T, index: number) => boolean,
  list?: T[],
): any {
  return typeof list === 'undefined'
    ? (arr: T[]) => getBy(predicate, arr)
    : fromNullable(list.find((value, index) => predicate(value, index)))
}
