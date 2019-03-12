import { None as OpaqueNone } from '../internal/types'
import { None as SymbolNone } from '../internal/symbol'

export const None = Object.freeze({
  value: 0,
  __type: SymbolNone,
}) as OpaqueNone
