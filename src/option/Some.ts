import { Some as OpaqueSome } from '../internal/types'
import { Some as SymbolSome } from '../internal/symbol'

export const Some = <T>(value: NonNullable<T>): OpaqueSome<T> =>
  Object.freeze({ value, __type: SymbolSome }) as OpaqueSome<T>
