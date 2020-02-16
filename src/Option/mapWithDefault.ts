import { Some } from './Some'
import { isNone } from './isNone'

import { Option, MapFn } from '../internal/types'
import { curry3 } from '../internal/curry3'

type MapWithDefault = {
  <R>(defaultValue: R): <T>(fn: MapFn<T, R>) => (option: Option<T>) => Option<R>
  <T, R>(defaultValue: R, fn: MapFn<T, R>): (option: Option<T>) => Option<R>
  <T, R>(defaultValue: R, fn: MapFn<T, R>, option: Option<T>): Option<R>
}

export const mapWithDefault: MapWithDefault = curry3(
  <T, R>(defaultValue: R, fn: MapFn<T, R>, option: Option<T>): any => {
    return Some(isNone(option) ? defaultValue : fn(option.value))
  },
)
