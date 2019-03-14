import { Option } from '../internal/types'
import { None } from '../internal/symbol'

export const isNone = <T>(option: Option<T>): boolean => option.__type === None
