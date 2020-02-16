import { Option } from '../internal/types'
import { inListRange } from '../internal/inListRange'

import { Some } from '../Option/Some'
import { None } from '../Option/None'
import { curry2 } from '../internal/curry2'

type Drop = {
  (n: number): <T>(list: T[]) => Option<T[]>
  <T>(n: number, list: T[]): Option<T[]>
}

export const drop: Drop = curry2(<T>(n: number, list: T[]): any => {
  return inListRange(n, list) ? Some(list.slice(n, Infinity)) : None
})
