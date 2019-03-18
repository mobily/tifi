import { Option } from '../internal/types'
import { inListRange } from '../internal/inListRange'

import { Some } from '../Option/Some'
import { None } from '../Option/None'

type Tuple<T> = [T[], T[]]

export function splitAt<T>(index: number): (list: T[]) => Option<Tuple<T>>

export function splitAt<T>(index: number, list: T[]): Option<Tuple<T>>

export function splitAt<T>(index: number, list?: T[]): any {
  if (typeof list === 'undefined') {
    return (arr: T[]) => splitAt(index, arr)
  }

  return inListRange(index, list)
    ? Some([list.slice(0, index), list.slice(index, Infinity)] as Tuple<T>)
    : None
}
