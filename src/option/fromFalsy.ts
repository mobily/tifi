import { Some } from './Some'
import { None } from './None'

import { Option } from '../internal/types'

export const fromFalsy = <T>(value: T): Option<T> =>
  Boolean(value) ? Some(value) : None
