import { Option } from '../internal/types'
import { inListRange } from '../internal/inListRange'

import { Some } from '../Option/Some'
import { None } from '../Option/None'

type Tuple<T> = [T[], T[]]

export const splitAt = <T>(index: number, list: T[]): Option<Tuple<T>> =>
  inListRange(index, list)
    ? Some([list.slice(0, index), list.slice(index, Infinity)] as Tuple<T>)
    : None
