import { fromNullable } from '../Option/fromNullable'

import { Option } from '../internal/types'

import { curry2 } from '../internal/curry2'

type Get = {
  (index: number): <T>(list: T[]) => Option<T>
  <T>(index: number, list: T[]): Option<T>
}

export const get: Get = curry2(<T>(index: number, list: T[]): any => {
  return fromNullable(list[index])
})
