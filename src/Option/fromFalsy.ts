import { Some } from './Some'
import { None } from './None'

import { Option, None as N, Some as S } from '../internal/types'

export function fromFalsy(value: 0 | '' | false | null | undefined): N
export function fromFalsy<T>(value: T): S<T>
export function fromFalsy<T>(value: T): Option<T> {
  return Boolean(value) ? Some(value) : None
}
