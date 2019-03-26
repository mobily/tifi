import { Ok } from './Ok'
import { Error } from './Error'

import { Result } from '../internal/types'

export const fromNullable = <A, B>(
  error: B,
  value: A | null | undefined,
): Result<A, B> =>
  value === null || typeof value === 'undefined' ? Error(error) : Ok(value)
