import { Option, None as N } from '../internal/types'
import { None } from '../internal/symbol'

export const isNone = <T>(option: Option<T>): option is N =>
  option.__type === None
