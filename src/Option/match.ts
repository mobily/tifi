import { isNone } from './isNone'
import { Option } from '../internal/types'
import { curry3 } from '../internal/curry3'

type SomeFn<T, R> = (value: T) => R
type NoneFn<R> = () => R

type Match = {
  <T, R>(someFn: SomeFn<T, R>): (noneFn: NoneFn<R>) => (option: Option<T>) => R
  <T, R>(someFn: SomeFn<T, R>, noneFn: NoneFn<R>): (option: Option<T>) => R
  <T, R>(someFn: SomeFn<T, R>, noneFn: NoneFn<R>, option: Option<T>): R
}

export const match: Match = curry3(
  <T, R>(someFn: (value: T) => R, noneFn: () => R, option: Option<T>): any => {
    return isNone(option) ? noneFn() : someFn(option.value)
  },
)
