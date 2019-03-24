import { Result, Ok as O } from '../internal/types'
import { Ok } from '../internal/symbol'

export const isOk = <A, B>(result: Result<A, B>): result is O<A> =>
  result.__type === Ok
