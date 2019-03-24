import { Option, Some as S } from '../internal/types'
import { Some } from '../internal/symbol'

export const isSome = <T>(option: Option<T>): option is S<T> =>
  option.__type === Some
