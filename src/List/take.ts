import { Option } from '../internal/types'
import { inListRange } from '../internal/inListRange'
import { curry2 } from '../internal/curry2'

import { Some } from '../Option/Some'
import { None } from '../Option/None'

type Take = {
  <T>(n: number): (list: T[]) => Option<T[]>
  <T>(n: number, list: T[]): Option<T[]>
}

export const take: Take = curry2(<T>(n: number, list: T[]): any => {
  return inListRange(n, list) ? Some(list.slice(0, n)) : None
})
