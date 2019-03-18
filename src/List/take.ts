import { Option } from '../internal/types'
import { inListRange } from '../internal/inListRange'

import { Some } from '../Option/Some'
import { None } from '../Option/None'

export function take<T>(n: number): (list: T[]) => Option<T[]>

export function take<T>(n: number, list: T[]): Option<T[]>

export function take<T>(n: number, list?: T[]): any {
  if (typeof list === 'undefined') {
    return (arr: T[]) => take(n, arr)
  }

  return inListRange(n, list) ? Some(list.slice(0, n)) : None
}
