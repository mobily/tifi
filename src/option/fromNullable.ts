import { Some } from './Some'
import { None } from './None'

import { Option } from '../internal/types'

export const fromNullable = <T>(value: T | null | undefined): Option<T> =>
  value === null || typeof value === 'undefined'
    ? None
    : Some(value as NonNullable<T>)
