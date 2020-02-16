import { fromNullable } from '../Option/fromNullable'

import { Option } from '../internal/types'

import { curry2 } from '../internal/curry2'

type GetBy = {
  <T>(predicate: (value: T, index: number) => boolean): (list: T[]) => Option<T>
  <T>(predicate: (value: T, index: number) => boolean, list: T[]): Option<T>
}

export const getBy: GetBy = curry2(
  <T>(predicate: (value: T, index: number) => boolean, list: T[]): any => {
    return fromNullable(list.find((value, index) => predicate(value, index)))
  },
)
