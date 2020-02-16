import { fromNullable } from './fromNullable'

import { Option, MapFn } from '../internal/types'
import { curry2 } from '../internal/curry2'

type MapNullable = {
  <T, R>(fn: MapFn<T, R>): (option: Option<T>) => Option<R>
  <T, R>(fn: MapFn<T, R>, option: Option<T>): Option<R>
}

export const mapNullable: MapNullable = curry2(
  <T, R>(fn: MapFn<T, R>, option: Option<T>): any => {
    return fromNullable(fn(option.value))
  },
)
