import { Result } from '../internal/types'
import { Ok } from '../internal/symbol'

export const isOk = <A, B>(result: Result<A, B>): boolean =>
  result.__type === Ok
