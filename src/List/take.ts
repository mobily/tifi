import { Option } from '../internal/types'
import { inListRange } from '../internal/inListRange'

import { Some } from '../Option/Some'
import { None } from '../Option/None'

export const take = <T>(index: number, list: T[]): Option<T[]> =>
  inListRange(index, list) ? Some(list.slice(0, index)) : None
