import { None } from './None'

import { Option } from '../internal/types'

export const getWithDefault = <T>(defaultValue: NonNullable<T>) => (
  option: Option<T>,
): T => (option === None ? defaultValue : (option as NonNullable<T>))
