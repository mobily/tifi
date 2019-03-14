import { Some } from './Some'
import { None } from './None'

import { Option, None as N, Some as S } from '../internal/types'

export function fromNullable(value: null | undefined): N
export function fromNullable<T>(value: T): S<T>
export function fromNullable<T>(value: T | null | undefined): Option<T> {
  return value === null || typeof value === 'undefined' ? None : Some(value)
}
