import { Result } from '../internal/types'
import { Error } from '../internal/symbol'

export const isError = <A, B>(result: Result<A, B>): boolean =>
  result.__type === Error
