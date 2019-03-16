import { Some } from '../Option/Some'
import { None } from '../Option/None'

import { Option } from '../internal/types'

export const tail = <T>(list: T[]): Option<T[]> => {
  const [, ...tl] = list
  return Boolean(tl.length) ? Some(tl) : None
}
