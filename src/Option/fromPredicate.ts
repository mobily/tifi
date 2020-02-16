import { None } from './None'
import { fromNullable } from './fromNullable'

import { Option, Predicate } from '../internal/types'
import { curry2 } from '../internal/curry2'

type FromPredicate = {
  <T>(predicate: Predicate<T>): (value: T) => Option<T>
  <T>(predicate: Predicate<T>, value: T): Option<T>
}

export const fromPredicate: FromPredicate = curry2(
  <T>(predicate: Predicate<T>, value: T): any =>
    predicate(value) ? fromNullable(value) : None,
)
