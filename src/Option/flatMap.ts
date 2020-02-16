import { Option, MapFn } from '../internal/types'
import { isNone } from './isNone'

import { curry2 } from '../internal/curry2'

type FlatMap = {
  <T, R>(fn: MapFn<T, Option<R>>): (option: Option<T>) => Option<R>
  <T, R>(fn: MapFn<T, Option<R>>, option: Option<T>): Option<R>
}

export const flatMap: FlatMap = curry2(
  <T, R>(fn: MapFn<T, Option<R>>, option: Option<T>): any => {
    return isNone(option) ? option : fn(option.value)
  },
)
