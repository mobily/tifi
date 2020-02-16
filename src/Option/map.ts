import { Some } from './Some'
import { None } from './None'
import { isNone } from './isNone'

import { Option, MapFn } from '../internal/types'
import { curry2 } from '../internal/curry2'

type Map = {
  <T, R>(fn: MapFn<T, NonNullable<R>>): (option: Option<T>) => Option<R>
  <T, R>(fn: MapFn<T, NonNullable<R>>, option: Option<T>): Option<R>
}

export const map: Map = curry2(
  <T, R>(fn: MapFn<T, NonNullable<R>>, option: Option<T>): any => {
    return isNone(option) ? None : Some(fn(option.value))
  },
)
