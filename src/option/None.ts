import { None as OpNone } from '../internal/types'
import { None as Symbol } from '../internal/symbol'

export const None = Object.freeze({
  value: null,
  __type: Symbol,
}) as OpNone
