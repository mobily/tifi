import { Option } from '../internal/types'
import { inListRange } from '../internal/inListRange'

import { Some } from '../Option/Some'
import { None } from '../Option/None'

export const take = <T>(n: number, list: T[]): Option<T[]> =>
  inListRange(n, list) ? Some(list.slice(0, n)) : None
