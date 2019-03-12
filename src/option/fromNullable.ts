import { Some } from './Some'
import { None } from './None'

import { Option, None as OpNone, Some as OpSome } from '../internal/types'

export function fromNullable(value: null | undefined): OpNone
export function fromNullable<T>(value: T): OpSome<T>
export function fromNullable<T>(value: T | null | undefined): Option<T> {
  return value === null || typeof value === 'undefined' ? None : Some(value)
}
