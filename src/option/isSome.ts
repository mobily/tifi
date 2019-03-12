import { Option } from '../internal/types'
import { Some } from '../internal/symbol'

export const isSome = <T>(option: Option<T>): boolean => option.__type === Some
