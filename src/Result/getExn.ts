import { isError } from './isError'

import { Result } from '../internal/types'

export const getExn = <A, B>(result: Result<A, B>): A | never => {
  if (isError(result)) {
    throw new Error('Error')
  }

  return result.value
}
