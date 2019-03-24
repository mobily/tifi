import { Result, Error as E } from '../internal/types'
import { Error } from '../internal/symbol'

export const isError = <A, B>(result: Result<A, B>): result is E<B> =>
  result.__type === Error
