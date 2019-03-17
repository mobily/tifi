import { Option } from '../internal/types'
import { inListRange } from '../internal/inListRange'

import { Some } from '../Option/Some'
import { None } from '../Option/None'

export const drop = <T>(n: number, list: T[]): Option<T[]> =>
  inListRange(n, list) ? Some(list.slice(n, Infinity)) : None
