import { Some } from '../Option/Some'
import { None } from '../Option/None'

import { Option, None as N, Some as S } from '../internal/types'

export function tail(list: []): N
export function tail<T>(list: [any, ...T[]]): S<T[]>
export function tail<T>(list: T[]): Option<T[]> {
  const [, ...tl] = list
  return Boolean(tl.length) ? Some(tl) : None
}
