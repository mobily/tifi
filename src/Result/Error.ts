import { Error as E } from '../internal/types'
import { Error as Symbol } from '../internal/symbol'

export const Error = <T>(value: T): E<T> =>
  Object.freeze({ value, __type: Symbol }) as E<T>
