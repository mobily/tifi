import { isError } from './isError'
import { Result } from '../internal/types'
import { curry2 } from '../internal/curry2'

type GetWithDefault = {
  <A>(defaultValue: A): <B>(result: Result<A, B>) => A
  <A, B>(defaultValue: A, result: Result<A, B>): A
}

export const getWithDefault: GetWithDefault = curry2(
  <A, B>(defaultValue: A, result: Result<A, B>): any => {
    return isError(result) ? defaultValue : result.value
  },
)
