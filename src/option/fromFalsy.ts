import { Some } from './Some'
import { None } from './None'

import { Option, None as OpNone, Some as OpSome } from '../internal/types'

export function fromFalsy(value: 0 | '' | false | null | undefined): OpNone
export function fromFalsy<T>(value: T): OpSome<T>
export function fromFalsy<T>(value: T): Option<T> {
  return Boolean(value) ? Some(value) : None
}
