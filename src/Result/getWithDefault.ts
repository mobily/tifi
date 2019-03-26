import { isError } from './isError'

import { Result } from '../internal/types'

export function getWithDefault<A extends NonNullable<{}>, B>(
  defaultValue: A,
): (result: Result<A, B>) => A

export function getWithDefault<A extends NonNullable<{}>, B>(
  defaultValue: A,
  result: Result<A, B>,
): A

export function getWithDefault<A extends NonNullable<{}>, B>(
  defaultValue: A,
  result?: Result<A, B>,
): any {
  if (typeof result === 'undefined') {
    return (res: Result<A, B>) => getWithDefault(defaultValue, res)
  }

  return isError(result) ? defaultValue : result.value
}
