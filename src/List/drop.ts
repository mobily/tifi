import { Option } from '../internal/types'

import { Some } from '../Option/Some'
import { None } from '../Option/None'

export const drop = <T>(index: number, list: T[]): Option<T[]> =>
  index > list.length - 1 ? None : Some(list.slice(index, Infinity))
