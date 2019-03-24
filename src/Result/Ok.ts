import { Ok as O } from '../internal/types'
import { Ok as Symbol } from '../internal/symbol'

export const Ok = <T>(value: T): O<T> =>
  Object.freeze({ value, __type: Symbol }) as O<T>
