import { Some as OpSome } from '../internal/types'
import { Some as Symbol } from '../internal/symbol'

export const Some = <T extends NonNullable<{}>>(value: T): OpSome<T> =>
  Object.freeze({ value, __type: Symbol }) as OpSome<T>
