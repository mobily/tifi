import { None } from './None'

import { Option } from '../internal/types'

export const isNone = <T>(option: Option<T>): boolean => option === None
