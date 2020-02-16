import { Option } from '../internal/types'
import { inListRange } from '../internal/inListRange'
import { curry2 } from '../internal/curry2'

import { Some } from '../Option/Some'
import { None } from '../Option/None'

type Tuple<T> = [T[], T[]]

type SplitAt = {
  (index: number): <T>(list: T[]) => Option<Tuple<T>>
  <T>(index: number, list: T[]): Option<Tuple<T>>
}

export const splitAt: SplitAt = curry2(<T>(index: number, list: T[]): any => {
  return inListRange(index, list)
    ? Some([list.slice(0, index), list.slice(index, Infinity)] as Tuple<T>)
    : None
})
