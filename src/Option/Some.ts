import { Some as S } from '../internal/types'
import { Some as Symbol } from '../internal/symbol'

export const Some = <T extends NonNullable<{}>>(value: T): S<T> =>
  Object.freeze({ value, __type: Symbol }) as S<T>
