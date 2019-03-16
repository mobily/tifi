import { Option } from '../internal/types'

import { Some } from '../Option/Some'
import { None } from '../Option/None'

export const drop = <T>(index: number, list: T[]): Option<T[]> =>
  index >= 0 && index <= list.length ? Some(list.slice(index, Infinity)) : None
